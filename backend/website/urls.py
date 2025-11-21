from django.urls import path
from .views import (
    HeroSectionView, AboutSectionView, ServicesListView,
    AdvantagesListView, ContactInfoView, ContactSubmissionView,
    SEOSettingsView
)

app_name = 'website'

urlpatterns = [
    path('hero/', HeroSectionView.as_view(), name='hero'),
    path('about/', AboutSectionView.as_view(), name='about'),
    path('services/', ServicesListView.as_view(), name='services'),
    path('advantages/', AdvantagesListView.as_view(), name='advantages'),
    path('contact/', ContactInfoView.as_view(), name='contact-info'),
    path('contact/submit/', ContactSubmissionView.as_view(), name='contact-submit'),
    path('seo/', SEOSettingsView.as_view(), name='seo'),
]
