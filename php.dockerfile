FROM php:8.2.0-apache-buster

WORKDIR /var/www/html
RUN chmod -R 777 .

# Copiar ao usar linux
# COPY . . 

RUN apt-get update -y
RUN apt-get upgrade -y

# Instalar zip e unzip
RUN apt-get install -y zip unzip

RUN a2enmod rewrite
RUN service apache2 restart
RUN docker-php-ext-install pdo pdo_mysql
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

RUN chmod -R 777 /var/www/html
RUN apt-get update && apt-get install -y git sudo

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN sudo mv composer.phar /usr/local/bin/composer

RUN pecl install xdebug \
&& docker-php-ext-enable xdebug

RUN echo "zend_extension=/usr/local/lib/php/extensions/no-debug-non-zts-20220829/xdebug.so" >> /usr/local/etc/php/conf.d/99-xdebug.ini
RUN echo "xdebug.mode = debug" >> /usr/local/etc/php/conf.d/99-xdebug.ini
RUN echo "xdebug.start_with_request = yes" >> /usr/local/etc/php/conf.d/99-xdebug.ini
RUN echo "xdebug.client_host=host.docker.internal" >> /usr/local/etc/php/conf.d/99-xdebug.ini
RUN echo "xdebug.client_port=9003" >> /usr/local/etc/php/conf.d/99-xdebug.ini
RUN echo "xdebug.remote_autostart=1" >> /usr/local/etc/php/conf.d/99-xdebug.ini
RUN echo "xdebug.discover_client_host = 1" >> /usr/local/etc/php/conf.d/99-xdebug.ini


