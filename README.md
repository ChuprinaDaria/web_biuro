# ATBalance - Biuro Rachunkowe Website

Profesjonalna strona internetowa dla biura rachunkowego ATBalance. Single Page Application (SPA) z pełnym systemem zarządzania treścią przez Django Admin.

## 📋 Opis projektu

Minimalistyczny, profesjonalny sайт-візитка dla biura rachunkowego w Polsce. Projekt składa się z:

- **Frontend**: React 18+ z Vite, Tailwind CSS
- **Backend**: Django 5.2 z Django REST Framework
- **Admin Panel**: Django Admin do zarządzania treścią
- **Email**: Integracja z formularzem kontaktowym

## 🎨 Funkcje

### Frontend
- ✅ Responsywny design (mobile-first)
- ✅ Single Page Application z płynnym scrollowaniem
- ✅ Sekcje: Hero, O nas, Usługi, Dlaczego my, Kontakt
- ✅ Formularz kontaktowy z walidacją
- ✅ Polityka Prywatności i Cookies (GDPR compliant)
- ✅ Cookie consent banner
- ✅ Kolory: Złoty (#C9A961) + Ciemny (#1a1a1a)
- ✅ Czcionki: Playfair Display (headings) + Inter (body)

### Backend
- ✅ REST API dla wszystkich sekcji
- ✅ Django Admin w języku polskim
- ✅ Modele: HeroSection, AboutSection, Value, Service, Advantage, ContactInfo, ContactSubmission, SEOSettings
- ✅ Email notifications przy nowych zgłoszeniach
- ✅ Obsługa plików (images/media)
- ✅ CORS configured dla frontend

## 🚀 Instalacja i uruchomienie

### Wymagania
- Python 3.11+
- Node.js 18+
- npm lub yarn

### Backend Setup

```bash
cd backend

# Utwórz virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# lub
venv\Scripts\activate  # Windows

# Zainstaluj zależności
pip install -r requirements.txt

# Uruchom migracje
python manage.py migrate

# Utwórz superusera dla Django Admin
python manage.py createsuperuser

# Uruchom serwer deweloperski
python manage.py runserver
```

Backend będzie dostępny pod: `http://localhost:8000`
Django Admin: `http://localhost:8000/admin/`

### Frontend Setup

```bash
cd frontend

# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev
```

Frontend będzie dostępny pod: `http://localhost:5173`

## 📡 API Endpoints

Wszystkie endpointy są dostępne pod prefiksem `/api/`:

```
GET  /api/hero/              - Pobierz sekcję Hero
GET  /api/about/             - Pobierz sekcję O nas + wartości
GET  /api/services/          - Pobierz listę usług
GET  /api/advantages/        - Pobierz listę przewag
GET  /api/contact/           - Pobierz dane kontaktowe
POST /api/contact/submit/    - Wyślij formularz kontaktowy
GET  /api/seo/               - Pobierz ustawienia SEO
```

### Przykład POST request (formularz kontaktowy):

```json
{
  "name": "Jan Kowalski",
  "email": "jan@example.com",
  "phone": "+48 123 456 789",
  "message": "Witam, chciałbym uzyskać więcej informacji...",
  "consent": true
}
```

## 🔐 Django Admin

Panel administracyjny pozwala na edycję wszystkich treści strony:

1. **Sekcja Hero** - główny baner z tytułem i CTA
2. **Sekcja O nas** - opis firmy
3. **Wartości** - ikony z wartościami firmy (Doświadczenie, Profesjonalizm itp.)
4. **Usługi** - lista oferowanych usług księgowych
5. **Przewagi** - dlaczego warto wybrać ATBalance
6. **Dane kontaktowe** - telefon, email, adres, godziny pracy
7. **Zgłoszenia kontaktowe** - wiadomości z formularza (read-only)
8. **Ustawienia SEO** - meta tags, Open Graph

## 📧 Konfiguracja Email

Domyślnie email jest skonfigurowany do wyświetlania w konsoli (development).

Dla produkcji, edytuj `backend/config/settings.py`:

```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.twojadomena.pl'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'biuro@atbalance.pl'
EMAIL_HOST_PASSWORD = 'twoje-haslo'
DEFAULT_FROM_EMAIL = 'biuro@atbalance.pl'
```

## 🗃️ Baza danych

Domyślnie używana jest SQLite (`db.sqlite3`).

Dla produkcji zalecane jest użycie PostgreSQL. Edytuj `settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'atbalance_db',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

## 📦 Deployment

### Frontend (Vercel/Netlify)

```bash
cd frontend
npm run build
# Upload dist/ folder to Vercel/Netlify
```

Pamiętaj aby ustawić zmienną środowiskową:
```
VITE_API_URL=https://twoj-backend.example.com/api
```

### Backend (VPS/Cloud)

1. Zainstaluj zależności
2. Skonfiguruj PostgreSQL
3. Ustaw zmienne środowiskowe (SECRET_KEY, DEBUG=False, ALLOWED_HOSTS)
4. Zbierz static files: `python manage.py collectstatic`
5. Uruchom z Gunicorn + Nginx

## 🔒 Bezpieczeństwo

- ✅ CSRF protection
- ✅ CORS configured
- ✅ GDPR compliant (polityka prywatności + cookies)
- ✅ XSS protection
- ✅ Secure password hashing
- ✅ Email validation
- ✅ IP tracking dla zgłoszeń

## 🎯 TODO (Wersja 2.0)

- [ ] Dodanie bloga
- [ ] Kalkulator kosztów księgowości
- [ ] Integracja z kalendarzem (umówienie spotkania)
- [ ] Wiele języków (PL/EN)
- [ ] Google Analytics / Plausible
- [ ] reCAPTCHA dla formularza

## 📄 Licencja

Projekt stworzony dla ATBalance. Wszystkie prawa zastrzeżone.

## 👥 Kontakt

ATBalance Biuro Rachunkowe
- Email: biuro@atbalance.pl
- Telefon: +48 453 516 366

---

Stworzono z ❤️ dla ATBalance
