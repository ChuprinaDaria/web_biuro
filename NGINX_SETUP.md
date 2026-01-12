# Налаштування Nginx для ATBalance

## Конфігурація для atbalance.pl

Файл `nginx-atbalance.conf` містить конфігурацію Nginx для проекту ATBalance з нестандартними портами:
- **Frontend**: `host.docker.internal:5174` (якщо Nginx в Docker) або `127.0.0.1:5174` (якщо Nginx на хості)
- **Backend**: `host.docker.internal:8001` (якщо Nginx в Docker) або `127.0.0.1:8001` (якщо Nginx на хості)

**Важливо:** 
- Файл містить тільки `upstream` та `server` блоки (без `events {}` та `http {}`)
- Це окремий файл конфігурації, який буде включений в основний `nginx.conf` через `include`
- Якщо Nginx працює на хост-машині (не в Docker), змініть `host.docker.internal` на `127.0.0.1` в upstream блоках

## Встановлення

### 1. Скопіюйте конфігурацію

```bash
sudo cp nginx-atbalance.conf /etc/nginx/sites-available/atbalance
```

### 2. Створіть символічне посилання

```bash
sudo ln -s /etc/nginx/sites-available/atbalance /etc/nginx/sites-enabled/atbalance
```

**Альтернативно:** Якщо використовується `include` в основному `nginx.conf`, додайте:

```nginx
# В /etc/nginx/nginx.conf всередині блоку http {}
include /etc/nginx/sites-available/atbalance;
```

### 3. Перевірте конфігурацію

```bash
sudo nginx -t
```

### 4. Перезавантажте Nginx

```bash
sudo systemctl reload nginx
```

## SSL Сертифікати

### Встановлення Let's Encrypt

```bash
# Встановіть certbot
sudo apt install certbot python3-certbot-nginx

# Отримайте сертифікат
sudo certbot --nginx -d atbalance.pl -d www.atbalance.pl

# Автоматичне оновлення
sudo certbot renew --dry-run
```

Сертифікати будуть автоматично розміщені в:
- `/etc/letsencrypt/live/atbalance.pl/fullchain.pem`
- `/etc/letsencrypt/live/atbalance.pl/privkey.pem`

### Оновіть шляхи в конфігурації

Якщо використовуєте інший шлях до сертифікатів, оновіть в `nginx-atbalance.conf`:

```nginx
ssl_certificate /etc/letsencrypt/live/atbalance.pl/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/atbalance.pl/privkey.pem;
```

## Перевірка роботи

### Перевірте статус Nginx

```bash
sudo systemctl status nginx
```

### Перевірте логи

```bash
# Помилки
sudo tail -f /var/log/nginx/error.log

# Access log
sudo tail -f /var/log/nginx/access.log
```

### Тестування

```bash
# Перевірка frontend
curl -I https://atbalance.pl

# Перевірка backend API
curl -I https://atbalance.pl/api/

# Health check
curl https://atbalance.pl/health
```

## Особливості конфігурації

### Нестандартні порти

- Frontend працює на `5174` (замість стандартного 80/443)
- Backend працює на `8001` (замість стандартного 8000)

Це дозволяє використовувати окремий Nginx сервіс для проксирування.

### Docker vs Host

- Якщо Nginx працює в Docker контейнері: використовується `host.docker.internal`
- Якщо Nginx працює на хост-машині: змініть на `127.0.0.1` в upstream блоках

### Маршрутизація

- `/` → Frontend (React SPA)
- `/api/` → Backend API
- `/static/` → Backend static files
- `/media/` → Backend media files
- `/health` → Health check endpoint

### Безпека

- Автоматичне перенаправлення HTTP → HTTPS
- Security headers (X-Frame-Options, X-Content-Type-Options, тощо)
- SSL/TLS налаштування

### Оптимізація

- Кешування статичних файлів (1 день)
- Налаштування таймаутів для великих файлів
- Gzip компресія (якщо додано в основну конфігурацію)

## Troubleshooting

### Помилка "502 Bad Gateway"

Перевірте, що Docker контейнери працюють:

```bash
docker ps
docker-compose -f docker-compose.prod.yml logs backend
docker-compose -f docker-compose.prod.yml logs frontend
```

### Помилка "Connection refused"

Перевірте, що порти відкриті:

```bash
netstat -tulpn | grep -E '5174|8001'
```

### SSL помилки

Перевірте сертифікати:

```bash
sudo certbot certificates
sudo openssl x509 -in /etc/letsencrypt/live/atbalance.pl/fullchain.pem -text -noout
```

## Оновлення конфігурації

Після змін в конфігурації:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

