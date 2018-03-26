---
title: Cómo utilizar Ruby
excerpt: Cuestiones generales sobre la distribución Ruby
slug: how_to_ruby
section: Uso avanzado
---


## 
Al crear la distribución Ruby, hemos intentado que se parezca lo más posible a la configuración por defecto para permitirle personalizar libremente su VPS.
Hemos instalado las dependencias que necesitará para instalar/compilar sus rubygems y utilizar RubyOnRails.

Estos son los componentes de su VPS:

- Debian Wheezy
- rbenv: permite utilizar la versión de Ruby que prefiera
- Passenger: Apache o Nginx
- Base de datos: MySQL, PostgreSQL o MongoDB




## 
root: utilizado para la administración general del servidor (actualizaciones, creación de bases de datos, etc.). 
webmaster: utilizado para gestionar su aplicación (instalación de Ruby, implementación de la aplicación, etc.).


## 
La versión de Ruby solicitada se instala a través de rbenv para el usuario «webmaster» y Passenger. El resto del sistema utiliza la versión de Ruby empaquetada en Debian Wheezy (1.9.3p194 en el momento de la redacción de este artículo).

Para cambiar la versión de Ruby, conéctese con el usuario «webmaster» e introduzca:

```
rbenv update (actualización de rbenv y sus plugins)
rbenv install --list (para conocer todas las versiones de Ruby disponibles)
rbenv install <version>
rbenv global <version>
```




## 
Passenger se instala a partir de los repositorios oficiales de Phusion, de modo que usted tiene la última versión estable de Phusion Passenger. Passenger utiliza la misma versión de Ruby que el usuario «webmaster».

El VPS se entrega con un virtualHost por defecto a su nombre (vpsXXXXX.ovh.net).
Puede utilizarlo directamente implementando su aplicación en /var/www/vpsXXXXX.ovh.net o, si lo prefiere, puede personalizarlo o copiarlo para implementar varias aplicaciones.

Para conocer el estado y el consumo de memoria de Passenger:

```
passenger-status (root)
passenger-memory-stats (root)
```




## 
La configuración de su aplicación se encuentra en /etc/apache2/sites-enabled/vpsXXXXX.ovh.net.

Reinicio del servidor: 
```
service apache2 restart (root)
```

Reinicio de la aplicación únicamente: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Para consultar la documentación detallada de Passenger, haga clic [aquí](http://www.modrails.com/documentation/Users%20guide%20Apache.html).


## 
La configuración de su aplicación se encuentra en /etc/nginx/sites-enabled/vpsXXXXX.ovh.net.

Reinicio del servidor: 
```
service nginx restart (root)
```

Reinicio de la aplicación únicamente: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Para consultar la documentación detallada de Passenger, haga clic [aquí](http://www.modrails.com/documentation/Users%20guide%20Nginx.html).


## 
La base de datos se instala con los valores por defecto y se configura para que solo sea posible acceder a ella desde el VPS.

