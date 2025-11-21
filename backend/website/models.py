from django.db import models
from django.core.validators import EmailValidator


class HeroSection(models.Model):
    """Hero section content model"""
    title = models.CharField(
        max_length=200,
        verbose_name="Tytuł",
        default="Profesjonalne Usługi Księgowe"
    )
    subtitle = models.TextField(
        verbose_name="Podtytuł",
        default="Zajmiemy się Twoją księgowością - Ty zajmij się rozwojem firmy."
    )
    cta_text = models.CharField(
        max_length=100,
        verbose_name="Tekst przycisku CTA",
        default="Skontaktuj się z nami"
    )
    hero_image = models.ImageField(
        upload_to='hero/',
        blank=True,
        null=True,
        verbose_name="Obrazek tła"
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name="Aktywny"
    )

    class Meta:
        verbose_name = "Sekcja Hero"
        verbose_name_plural = "Sekcja Hero"

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.is_active:
            HeroSection.objects.filter(is_active=True).exclude(pk=self.pk).update(is_active=False)
        super().save(*args, **kwargs)


class AboutSection(models.Model):
    """About section content model"""
    title = models.CharField(
        max_length=200,
        verbose_name="Tytuł",
        default="O Biurze ATBalance"
    )
    description = models.TextField(
        verbose_name="Opis"
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name="Aktywny"
    )

    class Meta:
        verbose_name = "Sekcja O nas"
        verbose_name_plural = "Sekcja O nas"

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.is_active:
            AboutSection.objects.filter(is_active=True).exclude(pk=self.pk).update(is_active=False)
        super().save(*args, **kwargs)


class Value(models.Model):
    """Company values"""
    icon = models.CharField(
        max_length=50,
        verbose_name="Ikona (nazwa React Icons)",
        help_text="np. FaTrophy, FaCheckCircle"
    )
    title = models.CharField(
        max_length=100,
        verbose_name="Tytuł"
    )
    description = models.TextField(
        verbose_name="Opis"
    )
    order = models.IntegerField(
        default=0,
        verbose_name="Kolejność"
    )

    class Meta:
        verbose_name = "Wartość"
        verbose_name_plural = "Wartości"
        ordering = ['order']

    def __str__(self):
        return self.title


class Service(models.Model):
    """Services offered"""
    icon = models.CharField(
        max_length=50,
        verbose_name="Ikona (nazwa React Icons)",
        help_text="np. FaBook, FaCalculator"
    )
    title = models.CharField(
        max_length=200,
        verbose_name="Nazwa usługi"
    )
    description = models.TextField(
        verbose_name="Opis usługi"
    )
    order = models.IntegerField(
        default=0,
        verbose_name="Kolejność"
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name="Aktywna"
    )

    class Meta:
        verbose_name = "Usługa"
        verbose_name_plural = "Usługi"
        ordering = ['order']

    def __str__(self):
        return self.title


class Advantage(models.Model):
    """Company advantages (Why choose us)"""
    icon = models.CharField(
        max_length=50,
        verbose_name="Ikona (nazwa React Icons)",
        help_text="np. FaMedal, FaUserCheck"
    )
    title = models.CharField(
        max_length=200,
        verbose_name="Tytuł"
    )
    description = models.TextField(
        verbose_name="Opis"
    )
    order = models.IntegerField(
        default=0,
        verbose_name="Kolejność"
    )

    class Meta:
        verbose_name = "Przewaga"
        verbose_name_plural = "Przewagi (Dlaczego my)"
        ordering = ['order']

    def __str__(self):
        return self.title


class ContactInfo(models.Model):
    """Contact information"""
    phone = models.CharField(
        max_length=20,
        verbose_name="Telefon"
    )
    email = models.EmailField(
        verbose_name="Email",
        validators=[EmailValidator()]
    )
    address = models.TextField(
        verbose_name="Adres"
    )
    working_hours = models.CharField(
        max_length=100,
        verbose_name="Godziny pracy",
        default="Pn-Pt: 9:00-17:00"
    )
    map_lat = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        blank=True,
        null=True,
        verbose_name="Szerokość geograficzna"
    )
    map_lng = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        blank=True,
        null=True,
        verbose_name="Długość geograficzna"
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name="Aktywny"
    )

    class Meta:
        verbose_name = "Informacje kontaktowe"
        verbose_name_plural = "Informacje kontaktowe"

    def __str__(self):
        return f"Kontakt: {self.phone}"

    def save(self, *args, **kwargs):
        if self.is_active:
            ContactInfo.objects.filter(is_active=True).exclude(pk=self.pk).update(is_active=False)
        super().save(*args, **kwargs)


class ContactSubmission(models.Model):
    """Contact form submissions"""
    name = models.CharField(
        max_length=200,
        verbose_name="Imię i nazwisko"
    )
    email = models.EmailField(
        verbose_name="Email",
        validators=[EmailValidator()]
    )
    phone = models.CharField(
        max_length=20,
        blank=True,
        verbose_name="Telefon"
    )
    message = models.TextField(
        verbose_name="Wiadomość"
    )
    consent = models.BooleanField(
        default=False,
        verbose_name="Zgoda na przetwarzanie danych"
    )
    ip_address = models.GenericIPAddressField(
        blank=True,
        null=True,
        verbose_name="Adres IP"
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Data utworzenia"
    )
    is_read = models.BooleanField(
        default=False,
        verbose_name="Przeczytane"
    )
    notes = models.TextField(
        blank=True,
        verbose_name="Notatki (wewnętrzne)"
    )

    class Meta:
        verbose_name = "Zgłoszenie kontaktowe"
        verbose_name_plural = "Zgłoszenia kontaktowe"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.email} ({self.created_at.strftime('%Y-%m-%d %H:%M')})"


class SEOSettings(models.Model):
    """SEO metadata settings"""
    meta_title = models.CharField(
        max_length=70,
        verbose_name="Meta Title",
        default="Biuro Rachunkowe ATBalance - Profesjonalne Usługi Księgowe"
    )
    meta_description = models.TextField(
        max_length=160,
        verbose_name="Meta Description",
        default="Kompleksowa obsługa księgowa dla firm. Księgowość, kadry, płace, ZUS, deklaracje podatkowe."
    )
    meta_keywords = models.CharField(
        max_length=255,
        verbose_name="Meta Keywords",
        default="biuro rachunkowe, księgowość, usługi księgowe, rozliczenia ZUS"
    )
    og_image = models.ImageField(
        upload_to='seo/',
        blank=True,
        null=True,
        verbose_name="Open Graph Image"
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name="Aktywny"
    )

    class Meta:
        verbose_name = "Ustawienia SEO"
        verbose_name_plural = "Ustawienia SEO"

    def __str__(self):
        return "Ustawienia SEO"

    def save(self, *args, **kwargs):
        if self.is_active:
            SEOSettings.objects.filter(is_active=True).exclude(pk=self.pk).update(is_active=False)
        super().save(*args, **kwargs)
