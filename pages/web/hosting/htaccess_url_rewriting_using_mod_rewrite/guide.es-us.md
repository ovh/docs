---
title: 'Web hosting: .htaccess, reescritura de URL con mod_rewrite'
excerpt: El mod_rewrite está disponible en todos los planes de OVHcloud (menos en los 20GP).
id: '1971'
slug: web_hosting_htaccess_reescritura_de_url_con_mod_rewrite
legacy_guide_number: g1971
section: Reescritura y autenticación
---


## Redirección simple

- Edite el archivo .htaccess: 


```
RewriteEngine On
RewriteRule .* testing.php
```



De este modo redirige todas las peticiones al script testing.php.


- O: 


```
RewriteEngine On
RewriteRule letstest /test_wslash/testing.php
```



De este modo redirige todas las peticiones /letstest al script /test_wslash/testing.php.


## Redirigir «ejemplo.com» hacia «www.ejemplo.com»

- De este modo, la dirección de su sitio será de tipo «www.ejemplo.com», optimizando así su posicionamiento: 


```
RewriteEngine on
Rewritecond %{HTTP_HOST} ^exemple.com$
Rewriterule ^(.*) http://www.exemple.com/$1 [QSA,L,R=301]
```





## Redirigir hacia un directorio en concreto sin mostrar dicho directorio

- Si su página no está presente en la carpeta de destino, la dirección de su sitio será de tipo «www.ejemplo.com», aunque en realidad se llama a la página «www.ejemplo.com/MiSitio». 


```
RewriteEngine on
Rewritecond %{HTTP_HOST} ^exemple.com
Rewritecond %{REQUEST_URI} !^/MonSite
Rewriterule ^(.*)$ /MonSite/
```





## Reescritura de URL
El mod_rewrite permite la reescritura de las URL. 


- .htaccess: 


```
RewriteEngine On
RewriteCond %{REQUEST_URI} !testing.php
RewriteRule (.*) testing.php?var=$1
```



Estas reglas lanzan el script testing.php con la variable GET que contiene la URL introducida por el usuario.


- php: 


```
<?
print("testing server <br/>\n");
print("var: {$_GET['var']}\n");
?>
```





## Redirigir automáticamente al usuario al sitio en ssl cuando visite el sitio modo no seguro
El módulo mod_rewrite permite la reescritura de las URL.


```
RewriteEngine on
Rewritecond %{HTTP_HOST} ^nom_domaine.tld$
Rewriterule ^(.*) https://ssl5.ovh.net/~login_ftp/$1 [QSA,L,R=301]
```



- Para pasar solo por el sitio seguro al consultar una página concreta: 


```
RewriteEngine on
RewriteCond %{HTTP_HOST} ^nom_domaine.tld$
RewriteCond %{REQUEST_URI} ~094/page.php
RewriteRule ^(.*) https://ssl5.ovh.net/~login_ftp/$1 [QSA,L,R=301]
```




## Importante:
Para conocer la dirección segura de su plan, consulte nuestra [guía](../gestionar-un-certificado-ssl-en-un-alojamiento-web/).
