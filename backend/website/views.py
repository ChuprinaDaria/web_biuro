from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from .models import (
    HeroSection, AboutSection, Value, Service,
    Advantage, ContactInfo, ContactSubmission, SEOSettings
)
from .serializers import (
    HeroSectionSerializer, AboutSectionSerializer, ValueSerializer,
    ServiceSerializer, AdvantageSerializer, ContactInfoSerializer,
    ContactSubmissionSerializer, SEOSettingsSerializer
)


class HeroSectionView(APIView):
    """Get active hero section"""
    def get(self, request):
        try:
            hero = HeroSection.objects.filter(is_active=True).first()
            if hero:
                serializer = HeroSectionSerializer(hero)
                return Response(serializer.data)
            return Response({}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class AboutSectionView(APIView):
    """Get active about section with values"""
    def get(self, request):
        try:
            about = AboutSection.objects.filter(is_active=True).first()
            values = Value.objects.all()

            response_data = {}
            if about:
                response_data['title'] = about.title
                response_data['description'] = about.description

            response_data['values'] = ValueSerializer(values, many=True).data

            return Response(response_data)
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class ServicesListView(generics.ListAPIView):
    """Get all active services"""
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer


class AdvantagesListView(generics.ListAPIView):
    """Get all advantages"""
    queryset = Advantage.objects.all()
    serializer_class = AdvantageSerializer


class ContactInfoView(APIView):
    """Get active contact information"""
    def get(self, request):
        try:
            contact = ContactInfo.objects.filter(is_active=True).first()
            if contact:
                serializer = ContactInfoSerializer(contact)
                return Response(serializer.data)
            return Response({}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class ContactSubmissionView(generics.CreateAPIView):
    """Submit contact form"""
    serializer_class = ContactSubmissionSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Save submission
        submission = serializer.save()

        # Send email notification to owner
        try:
            self.send_notification_email(submission)
        except Exception as e:
            # Log error but don't fail the request
            print(f"Email error: {str(e)}")

        return Response(
            {'message': 'Wiadomość została wysłana pomyślnie.'},
            status=status.HTTP_201_CREATED
        )

    def send_notification_email(self, submission):
        """Send email notification about new contact submission"""
        subject = f'Nowa wiadomość z formularza kontaktowego - {submission.name}'

        # Email body
        message = f"""
Nowa wiadomość z formularza kontaktowego

Imię i nazwisko: {submission.name}
Email: {submission.email}
Telefon: {submission.phone or 'Nie podano'}

Wiadomość:
{submission.message}

---
Data: {submission.created_at.strftime('%Y-%m-%d %H:%M:%S')}
Adres IP: {submission.ip_address or 'Nieznany'}
Zgoda RODO: {'Tak' if submission.consent else 'Nie'}
        """

        # Get recipient email from ContactInfo or use default
        contact_info = ContactInfo.objects.filter(is_active=True).first()
        recipient_email = contact_info.email if contact_info else settings.DEFAULT_FROM_EMAIL

        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[recipient_email],
            fail_silently=False,
        )


class SEOSettingsView(APIView):
    """Get active SEO settings"""
    def get(self, request):
        try:
            seo = SEOSettings.objects.filter(is_active=True).first()
            if seo:
                serializer = SEOSettingsSerializer(seo)
                return Response(serializer.data)
            return Response({}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
