# Налаштування CI/CD та Docker

## Нестандартні порти

- **Backend**: `8001` (замість стандартного 8000)
- **Frontend**: `5174` (замість стандартного 80/443)

Це дозволяє використовувати окремий Nginx сервіс на сервері для проксирування.

## Налаштування GitHub Secrets

Для автоматичного деплою додайте наступні secrets в GitHub репозиторії:

1. Перейдіть в Settings → Secrets and variables → Actions
2. Додайте наступні secrets:

```
SSH_HOST=your-server-ip-or-domain
SSH_USER=your-ssh-username
SSH_PRIVATE_KEY=your-private-ssh-key
DEPLOY_PATH=/path/to/atbalance/on/server
```

### Як отримати SSH_PRIVATE_KEY:

```bash
# На локальній машині згенеруйте ключ (якщо немає)
ssh-keygen -t ed25519 -C "github-actions"

# Скопіюйте приватний ключ
cat ~/.ssh/id_ed25519

# Додайте публічний ключ на сервер
ssh-copy-id user@your-server
```

## Налаштування на сервері

### 1. Встановіть Docker та Docker Compose

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install docker.io docker-compose-plugin -y
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER

# Перезайдіть в систему або виконайте:
newgrp docker
```

### 2. Клонуйте репозиторій

```bash
cd /path/to/your/projects
git clone https://github.com/ChuprinaDaria/web_biuro.git atbalance
cd atbalance
```

### 3. Створіть .env файл

```bash
cp .env.example .env
nano .env
```

Заповніть необхідні змінні:
- `SECRET_KEY` - згенеруйте новий ключ
- `DATABASE_URL` - URL до PostgreSQL бази даних
- `EMAIL_*` - налаштування email

### 4. Налаштуйте Nginx (на основному сервері)

Створіть конфігурацію `/etc/nginx/sites-available/atbalance.pl`:

```nginx
upstream atbalance_backend {
    server 127.0.0.1:8001;
}

upstream atbalance_frontend {
    server 127.0.0.1:5174;
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

    ssl_certificate /etc/letsencrypt/live/atbalance.pl/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/atbalance.pl/privkey.pem;
    
    # SSL settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Frontend
    location / {
        proxy_pass http://atbalance_frontend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
    }

    # Backend API
    location /api/ {
        proxy_pass http://atbalance_backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
    }

    # Media files
    location /media/ {
        proxy_pass http://atbalance_backend;
        proxy_set_header Host $host;
    }

    # Static files
    location /static/ {
        proxy_pass http://atbalance_backend;
        proxy_set_header Host $host;
    }

    # Health check
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}
```

Активуйте конфігурацію:

```bash
sudo ln -s /etc/nginx/sites-available/atbalance.pl /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Встановіть SSL сертифікат (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d atbalance.pl -d www.atbalance.pl
```

## Перший запуск

```bash
# На сервері
cd /path/to/atbalance

# Запустіть контейнери
docker-compose -f docker-compose.prod.yml up -d

# Виконайте міграції
docker-compose -f docker-compose.prod.yml exec backend python manage.py migrate

# Створіть суперкористувача
docker-compose -f docker-compose.prod.yml exec backend python manage.py createsuperuser

# Перевірте логи
docker-compose -f docker-compose.prod.yml logs -f
```

## Автоматичний деплой

Після налаштування secrets, кожен push в `main` гілку автоматично:

1. Збирає Docker образи
2. Пушить їх в GitHub Container Registry
3. Деплоїть на сервер через SSH

Перевірте статус деплою в GitHub Actions: `https://github.com/ChuprinaDaria/web_biuro/actions`

## Корисні команди

```bash
# Перегляд логів
docker-compose -f docker-compose.prod.yml logs -f backend
docker-compose -f docker-compose.prod.yml logs -f frontend

# Перезапуск сервісів
docker-compose -f docker-compose.prod.yml restart backend
docker-compose -f docker-compose.prod.yml restart frontend

# Виконання команд Django
docker-compose -f docker-compose.prod.yml exec backend python manage.py shell
docker-compose -f docker-compose.prod.yml exec backend python manage.py collectstatic

# Оновлення образів вручну
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d

# Зупинка всіх сервісів
docker-compose -f docker-compose.prod.yml down

# Очистка
docker system prune -a
```

