#!/usr/bin/env sh

echo "Starting database creation script"
cd /var/www/html

if [ ! -e .env ]
then
    echo "Creating .env file"
    cp .env.example .env
fi

until nc -z -v -w30 db 3306
do
  echo "Waiting for database connection..."
  sleep 15
done

echo "Generating database"

if php artisan migrate --seed ;
then
    echo "Migration successful"
    php-fpm
else
    echo "Migration failed, restarting..."
fi
