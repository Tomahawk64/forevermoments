#!/bin/bash
set -e

APP_DIR="/var/www/forevermoments"

echo "======================================"
echo "  Deploying Forever Moments"
echo "======================================"

cd "$APP_DIR"

echo ">>> Pulling latest code..."
git pull

echo ">>> Installing dependencies..."
npm install --legacy-peer-deps

echo ">>> Building..."
npm run build

echo ">>> Restarting PM2..."
pm2 restart forevermoments

echo ""
echo "======================================"
echo "  ✅ Deployed successfully!"
echo "  Logs: pm2 logs forevermoments"
echo "======================================"
