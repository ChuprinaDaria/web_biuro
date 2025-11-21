from rest_framework import serializers
from .models import (
    HeroSection, AboutSection, Value, Service,
    Advantage, ContactInfo, ContactSubmission, SEOSettings
)


class HeroSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSection
        fields = ['id', 'title', 'subtitle', 'cta_text', 'hero_image']


class ValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Value
        fields = ['id', 'icon', 'title', 'description', 'order']


class AboutSectionSerializer(serializers.ModelSerializer):
    values = ValueSerializer(many=True, read_only=True, source='value_set')

    class Meta:
        model = AboutSection
        fields = ['id', 'title', 'description', 'values']


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'icon', 'title', 'description', 'order']


class AdvantageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advantage
        fields = ['id', 'icon', 'title', 'description', 'order']


class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = ['id', 'phone', 'email', 'address', 'working_hours', 'map_lat', 'map_lng']


class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['name', 'email', 'phone', 'message', 'consent']
        extra_kwargs = {
            'name': {'required': True},
            'email': {'required': True},
            'message': {'required': True},
            'consent': {'required': True},
        }

    def validate_consent(self, value):
        """Ensure consent is given"""
        if not value:
            raise serializers.ValidationError("Zgoda na przetwarzanie danych jest wymagana.")
        return value

    def create(self, validated_data):
        # Get IP address from request
        request = self.context.get('request')
        if request:
            x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
            if x_forwarded_for:
                ip = x_forwarded_for.split(',')[0]
            else:
                ip = request.META.get('REMOTE_ADDR')
            validated_data['ip_address'] = ip

        return super().create(validated_data)


class SEOSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SEOSettings
        fields = ['id', 'meta_title', 'meta_description', 'meta_keywords', 'og_image']
