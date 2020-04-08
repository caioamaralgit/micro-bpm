FROM php:7.3-fpm-alpine
RUN docker-php-ext-install mbstring pdo pdo_mysql && apk add --update openssl
COPY .docker/php-fpm/database.sh /start/database.sh
RUN ["chmod", "+x", "/start/database.sh"]
ENTRYPOINT ["/start/database.sh"]
