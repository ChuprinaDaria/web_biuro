# Docker Setup для ATBalance

## Порты (нестандартные для Nginx proxy)

- **Backend**: `8001` (замість стандартного 8000)
- **Frontend**: `5174` (замість стандартного 80/443)

## Локальная разработка

### Запуск с Docker Compose

```bash
# Запуск всех сервисов
docker-compose up -d

# Просмотр логов
docker-compose logs -f

# Остановка
docker-compose down
```

### Переменные окружения

Создайте файл `.env` в корне проекта:

```env
SECRET_KEY=your-secret-key-here
DATABASE_URL=postgresql://user:password@host:5432/dbname
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_HOST_USER=biuro@atbalance.pl
EMAIL_HOST_PASSWORD=your-password
```

## Production деплой

### Настройка CI/CD

1. Добавьте secrets в GitHub:
   - `SSH_HOST` - IP адрес сервера
   - `SSH_USER` - пользователь для SSH
   - `SSH_PRIVATE_KEY` - приватный ключ SSH

2. При пуше в `main` автоматически:
   - Собираются Docker образы
   - Пушатся в GitHub Container Registry
   - Деплоятся на сервер

### Ручной деплой на сервер

```bash
# На сервере
cd /path/to/atbalance
git pull origin main
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d
```

## Nginx конфигурация (на основном сервере)

Пример конфигурации для проксирования:

```nginx
# Backend
upstream atbalance_backend {
    server localhost:8001;
}

# Frontend
upstream atbalance_frontend {
    server localhost:5174;
}

server {
    listen 80;
    listen [::]:80;
    server_name atbalance.pl www.atbalance.pl;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name atbalance.pl www.atbalance.pl;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Frontend
    location / {
        proxy_pass http://atbalance_frontend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Backend API
    location /api/ {
        proxy_pass http://atbalance_backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Media files
    location /media/ {
        proxy_pass http://atbalance_backend;
    }

    # Static files
    location /static/ {
        proxy_pass http://atbalance_backend;
    }
}
```

## Полезные команды

```bash
# Пересобрать образы
docker-compose build --no-cache

# Просмотр логов конкретного сервиса
docker-compose logs -f backend
docker-compose logs -f frontend

# Выполнить команду в контейнере
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser

# Очистка
docker-compose down -v  # Удалить volumes
docker system prune -a  # Очистить все неиспользуемые образы
```

