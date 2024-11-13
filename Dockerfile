FROM composer:lts AS deps
WORKDIR /app
RUN --mount=type=bind,source=composer.json,target=composer.json \
    --mount=type=bind,source=composer.lock,target=composer.lock \
    --mount=type=cache,target=/tmp/cache \
    composer install --no-dev --no-interaction --ignore-platform-req=ext-gd

FROM node:lts AS node-deps
ENV NODE_ENV production
WORKDIR /app
# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM php:8.2-apache AS final

# Enable mod_rewrite
RUN a2enmod rewrite

# copy apache conf
COPY ./apache.conf /etc/apache2/sites-available/000-default.conf

# copy project dependencies
COPY --from=deps app/vendor/ /var/www/html/vendor
COPY --from=node-deps app/node_modules/ /var/www/html/node_modules
COPY . /var/www/html

# install server deps
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    && docker-php-ext-configure gd \
    && docker-php-ext-install pdo pdo_mysql -j$(nproc) gd

# config permissions
RUN chown -R www-data:www-data /var/www/html/tmp
RUN chmod -R 775 /var/www/html/tmp

# set user
USER www-data

# start server
CMD [ "apache2-foreground" ]