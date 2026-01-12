# GitHub Secrets - Необхідні змінні оточення

## Як додати Secrets в GitHub

1. Перейдіть в репозиторій: `Settings` → `Secrets and variables` → `Actions`
2. Натисніть `New repository secret`
3. Додайте кожну змінну з наведеного нижче списку

## Обов'язкові Secrets

### SSH та Deployment

| Secret | Опис | Приклад |
|--------|------|---------|
| `SSH_HOST` | IP адреса або домен сервера | `123.45.67.89` або `server.example.com` |
| `SSH_USER` | Користувач для SSH підключення | `deploy` |
| `SSH_PRIVATE_KEY` | Приватний SSH ключ | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `DEPLOY_PATH` | Шлях до проекту на сервері | `/var/www/atbalance` |

### Django Settings

| Secret | Опис | Приклад |
|--------|------|---------|
| `SECRET_KEY` | Django secret key (згенеруйте новий!) | `django-insecure-...` або використайте: `python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"` |
| `DEBUG` | Режим відлагодження (False для production) | `False` |
| `ALLOWED_HOSTS` | Дозволені хости (через кому) | `atbalance.pl,www.atbalance.pl` |

### База даних

| Secret | Опис | Приклад |
|--------|------|---------|
| `DATABASE_URL` | URL бази даних | `postgresql://user:password@host:5432/atbalance_db` або `sqlite:///db.sqlite3` |

### CORS

| Secret | Опис | Приклад |
|--------|------|---------|
| `CORS_ALLOWED_ORIGINS` | Дозволені джерела (через кому) | `https://atbalance.pl,https://www.atbalance.pl` |

### Email Settings

| Secret | Опис | Приклад |
|--------|------|---------|
| `EMAIL_BACKEND` | Backend для email | `django.core.mail.backends.smtp.EmailBackend` |
| `EMAIL_HOST` | SMTP сервер | `smtp.example.com` або `smtp.gmail.com` |
| `EMAIL_PORT` | SMTP порт | `587` (TLS) або `465` (SSL) |
| `EMAIL_USE_TLS` | Використовувати TLS | `True` |
| `EMAIL_HOST_USER` | Email для авторизації | `biuro@atbalance.pl` |
| `EMAIL_HOST_PASSWORD` | Пароль для email | `your-email-password` |
| `DEFAULT_FROM_EMAIL` | Email відправника | `biuro@atbalance.pl` |
| `SERVER_EMAIL` | Email для помилок | `biuro@atbalance.pl` |

## Приклад значень для production

```env
SSH_HOST=your-server-ip
SSH_USER=deploy
SSH_PRIVATE_KEY=-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
DEPLOY_PATH=/var/www/atbalance

SECRET_KEY=django-insecure-CHANGE-THIS-TO-RANDOM-STRING
DEBUG=False
ALLOWED_HOSTS=atbalance.pl,www.atbalance.pl

DATABASE_URL=postgresql://atbalance_user:strong_password@localhost:5432/atbalance_db

CORS_ALLOWED_ORIGINS=https://atbalance.pl,https://www.atbalance.pl

EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=biuro@atbalance.pl
EMAIL_HOST_PASSWORD=your-email-password
DEFAULT_FROM_EMAIL=biuro@atbalance.pl
SERVER_EMAIL=biuro@atbalance.pl
```

## Генерація SECRET_KEY

Виконайте на локальній машині:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Або в Docker контейнері:

```bash
docker-compose exec backend python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

## Перевірка Secrets

Після додавання всіх secrets, перевірте що вони правильно передаються:

1. Перейдіть в `Actions` → останній workflow run
2. Розгорніть крок `Deploy to server via SSH`
3. Перевірте, що змінні оточення передаються правильно

## Безпека

⚠️ **ВАЖЛИВО:**
- Ніколи не комітьте `.env` файли в git
- Не діліться secrets в публічних місцях
- Регулярно оновлюйте паролі
- Використовуйте різні SECRET_KEY для development та production

