from django.contrib import admin
from .models import (
    HeroSection, AboutSection, Value, Service,
    Advantage, ContactInfo, ContactSubmission, SEOSettings
)


@admin.register(HeroSection)
class HeroSectionAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active']
    list_filter = ['is_active']
    search_fields = ['title', 'subtitle']
    fieldsets = (
        ('Treść', {
            'fields': ('title', 'subtitle', 'cta_text')
        }),
        ('Grafika', {
            'fields': ('hero_image',)
        }),
        ('Ustawienia', {
            'fields': ('is_active',)
        }),
    )


@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active']
    list_filter = ['is_active']
    search_fields = ['title', 'description']
    fieldsets = (
        ('Treść', {
            'fields': ('title', 'description')
        }),
        ('Ustawienia', {
            'fields': ('is_active',)
        }),
    )


@admin.register(Value)
class ValueAdmin(admin.ModelAdmin):
    list_display = ['title', 'icon', 'order']
    list_editable = ['order']
    search_fields = ['title', 'description']
    ordering = ['order']
    fieldsets = (
        ('Treść', {
            'fields': ('icon', 'title', 'description')
        }),
        ('Ustawienia', {
            'fields': ('order',)
        }),
    )


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'icon', 'order', 'is_active']
    list_filter = ['is_active']
    list_editable = ['order', 'is_active']
    search_fields = ['title', 'description']
    ordering = ['order']
    fieldsets = (
        ('Treść', {
            'fields': ('icon', 'title', 'description')
        }),
        ('Ustawienia', {
            'fields': ('order', 'is_active')
        }),
    )


@admin.register(Advantage)
class AdvantageAdmin(admin.ModelAdmin):
    list_display = ['title', 'icon', 'order']
    list_editable = ['order']
    search_fields = ['title', 'description']
    ordering = ['order']
    fieldsets = (
        ('Treść', {
            'fields': ('icon', 'title', 'description')
        }),
        ('Ustawienia', {
            'fields': ('order',)
        }),
    )


@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ['phone', 'email', 'is_active']
    list_filter = ['is_active']
    search_fields = ['phone', 'email', 'address']
    fieldsets = (
        ('Dane kontaktowe', {
            'fields': ('phone', 'email', 'address', 'working_hours')
        }),
        ('Mapa (opcjonalnie)', {
            'fields': ('map_lat', 'map_lng'),
            'classes': ('collapse',)
        }),
        ('Ustawienia', {
            'fields': ('is_active',)
        }),
    )


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'created_at', 'is_read']
    list_filter = ['is_read', 'consent', 'created_at']
    search_fields = ['name', 'email', 'phone', 'message']
    readonly_fields = ['name', 'email', 'phone', 'message', 'consent', 'ip_address', 'created_at']
    list_editable = ['is_read']
    date_hierarchy = 'created_at'
    ordering = ['-created_at']

    fieldsets = (
        ('Dane kontaktowe', {
            'fields': ('name', 'email', 'phone')
        }),
        ('Wiadomość', {
            'fields': ('message',)
        }),
        ('Informacje techniczne', {
            'fields': ('consent', 'ip_address', 'created_at'),
            'classes': ('collapse',)
        }),
        ('Zarządzanie', {
            'fields': ('is_read', 'notes')
        }),
    )

    def has_add_permission(self, request):
        # Disable adding submissions through admin (only via API)
        return False

    def has_delete_permission(self, request, obj=None):
        # Allow deletion only for superusers
        return request.user.is_superuser


@admin.register(SEOSettings)
class SEOSettingsAdmin(admin.ModelAdmin):
    list_display = ['meta_title', 'is_active']
    list_filter = ['is_active']
    fieldsets = (
        ('Meta Tags', {
            'fields': ('meta_title', 'meta_description', 'meta_keywords')
        }),
        ('Social Media (Open Graph)', {
            'fields': ('og_image',)
        }),
        ('Ustawienia', {
            'fields': ('is_active',)
        }),
    )


# Custom admin site branding
admin.site.site_header = "ATBalance - Panel Administracyjny"
admin.site.site_title = "ATBalance Admin"
admin.site.index_title = "Zarządzanie treścią strony"
