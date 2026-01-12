FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    postgresql-client \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Create necessary directories
RUN mkdir -p /app/staticfiles /app/media

# Collect static files (will fail if no DB, but that's OK for build)
RUN python manage.py collectstatic --noinput || echo "Static files collection skipped"

# Expose port (non-standard for nginx proxy)
EXPOSE 8001

# Run gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8001", "--workers", "3", "--timeout", "120", "config.wsgi:application"]

