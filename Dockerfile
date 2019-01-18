# Dockerfile

#Import de nommage
FROM php:7.3-alpine AS app

#Install de l'extension
RUN docker-php-ext-install pdo_mysql

RUN apk add --no-cache libzip-dev && docker-php-ext-install zip
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer