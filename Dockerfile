# Dockerfile

#Import de nommage
FROM php:7.3-alpine AS app

#Install de l'extension
RUN docker-php-ext-install pdo_mysql