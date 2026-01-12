#!/bin/bash

# Deploy script for ATBalance
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment..."

# Login to GitHub Container Registry
echo "$GITHUB_TOKEN" | docker login ghcr.io -u "$GITHUB_ACTOR" --password-stdin

# Pull latest images
echo "📦 Pulling latest images..."
docker pull ghcr.io/$GITHUB_REPOSITORY/backend:latest || true
docker pull ghcr.io/$GITHUB_REPOSITORY/frontend:latest || true

# Stop old containers
echo "🛑 Stopping old containers..."
docker-compose -f docker-compose.prod.yml down || true

# Pull latest code
echo "📥 Pulling latest code..."
git pull origin main || true

# Start new containers
echo "▶️  Starting new containers..."
export GITHUB_REPOSITORY=$GITHUB_REPOSITORY
docker-compose -f docker-compose.prod.yml up -d

# Clean up
echo "🧹 Cleaning up..."
docker image prune -f

echo "✅ Deployment completed!"

