# Виправлення проблем з Django Admin

## Проблема: Порожня сторінка адмінки

### Крок 1: Перевірка статусу контейнерів

```bash
# Перевірте, чи працюють контейнери
docker ps

# Перевірте логи backend
docker compose -f docker-compose.prod.yml logs backend --tail 50
```

### Крок 2: Перевірка доступності backend напряму

```bash
# Спробуйте відкрити адмінку напряму через порт 8001
# http://your-server-ip:8001/admin/
# або
curl http://localhost:8001/admin/
```

### Крок 3: Збір статичних файлів

Статичні файли Django адмінки повинні бути зібрані:

```bash
# Виконайте collectstatic в контейнері
docker compose -f docker-compose.prod.yml exec backend python manage.py collectstatic --noinput
```

### Крок 4: Виконання міграцій (якщо ще не виконано)

```bash
docker compose -f docker-compose.prod.yml exec backend python manage.py migrate
```

### Крок 5: Створення superuser (якщо ще не створено)

```bash
docker compose -f docker-compose.prod.yml exec backend python manage.py createsuperuser
```

### Крок 6: Перевірка nginx конфігурації

Переконайтеся, що nginx конфігурація оновлена і перезавантажена:

```bash
# На сервері
sudo nginx -t  # перевірка синтаксису
sudo systemctl reload nginx  # перезавантаження
```

### Крок 7: Перевірка ALLOWED_HOSTS

Переконайтеся, що в `.env` файлі правильно встановлено `ALLOWED_HOSTS`:

```env
ALLOWED_HOSTS=atbalance.pl,www.atbalance.pl
```

### Крок 8: Перевірка SSL сертифікату

Якщо бачите "Не захищено", перевірте SSL сертифікат:

```bash
# Перевірте сертифікат
sudo certbot certificates

# Якщо потрібно оновити
sudo certbot renew
```

## Альтернативний доступ

Якщо nginx ще не налаштований, можна тимчасово отримати доступ до адмінки напряму:

1. Відкрийте `http://your-server-ip:8001/admin/` (без HTTPS)
2. Або налаштуйте SSH туннель:
   ```bash
   ssh -L 8001:localhost:8001 user@your-server
   ```
   Потім відкрийте `http://localhost:8001/admin/` локально

## Типові помилки

### Помилка 502 Bad Gateway
- Backend контейнер не працює
- Перевірте: `docker ps | grep backend`
- Перезапустіть: `docker compose -f docker-compose.prod.yml restart backend`

### Помилка 404 Not Found
- URL неправильний або nginx не налаштований
- Перевірте nginx конфігурацію

### Порожня сторінка (білий екран)
- Статичні файли не зібрані
- Виконайте: `docker compose -f docker-compose.prod.yml exec backend python manage.py collectstatic --noinput`
- Перевірте логи backend на помилки

### Помилка CSRF
- Перевірте `ALLOWED_HOSTS` в `.env`
- Перевірте, чи використовується HTTPS правильно

