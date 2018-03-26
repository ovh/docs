---
title: Activar la optimización de PHP en un alojamiento compartido OVH
excerpt: Esta guía explica cómo activar PHP-FPM en un alojamiento de OVH para mejorar los tiempos de respuesta de PHP
slug: activar_la_optimizacion_de_php_en_un_alojamiento_compartido_ovh
legacy_guide_number: g1175
section: PHP
---


## ¿Qué es PHP-FPM?
Hemos adaptado PHP-FPM a nuestra infraestructura web para que todos nuestros clientes puedan disfrutar de él, acelerando la respuesta de PHP.

PHP-FPM está compilado con un sistema de opcode cache, lo que permite minimizar las peticiones a los discos y el procesamiento del código PHP.

Esto permite obtener un rendimiento hasta 7 veces más rápido que el anterior mecanismo en nuestros laboratorios de prueba.

## En su área de cliente
Esta guía explica cómo activar el PHP FPM y definir la versión de PHP a través del archivo .ovhconfig. Si lo desea, puede realizar esta operación de forma más sencilla directamente desde el área de cliente. Para ello, puede consultar la siguiente guía: []({legacy}1999)

Atención: Por motivos de seguridad, con PHP-FPM se deshabilitan las siguientes opciones (deprecadas por PHP):


```
register_globals
magic_quotes_gpc
```



En lo que respecta a las comillas mágicas:


- Sin PHP-FPM:


PHP 5.4: magic_quotes_gpc deshabilitado


- Con PHP-FPM:


PHP 5.4: magic_quotes_gpc deshabilitado
PHP 5.5: magic_quotes_gpc deshabilitado

## Atención
Se recomienda utilizar las versiones más recientes de PHP (5.5 o 5.6), ya que las antiguas versiones ya no reciben actualizaciones del editor y pueden tener fallos de seguridad.


## ¿Cómo activar PHP-FPM?
Lo único que debe hacer es subir un archivo .ovhconfig por FTP a la raíz de su espacio en disco.

Los planes de web hosting 2014 contienen por defecto el archivo .ovhconfig. En productos anteriores, deberá crearlo y subirlo a la raíz de su espacio en disco.

En los antiguos planes o al migrar a un nuevo plan, no se añade automáticamente, ya que es posible que algunos parámetros no sean compatibles, según la versión de PHP utilizada.

El archivo .ovhconfig debe estar colocado en la raíz o en una carpeta de primer nivel. No es posible utilizar varios archivos para combinar configuraciones de PHP diferentes en un mismo alojamiento (excepto en un [multidominio](https://www.ovh.es/g1332.creacion-multidominio)correctamente declarado).

El archivo .ovhconfig deberá contener el siguiente código:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```


Si PHP-FPM deja de funcionar, el motor utilizará en su lugar el antiguo motor de PHP.


## ¿Cuáles son las versiones de PHP compatibles?
Puede utilizar las siguientes versiones de PHP:

- 7.0
- 5.6 (versión por defecto)
- 5.5 (no recomendada, pronto quedará obsoleta) 
- 5.4 (obsoleta)
- 5.3 (obsoleta) 

- ionCube también está disponible.

Atención: Una vez haya subido el archivo .ovhconfig, la versión de PHP utilizada será la que indique app.engine.version, ignorando las directivas del .htaccess como SetEnv PHP_VER, etc.



## He creado mi .ovhconfig y me aparece el error «Not Implemented»
Ese error significa que el motor o la versión indicados en el .ovhconfig no existen.

No dude en consultar el error.log de su sitio web para conocer los detalles del error.


## ¿Qué significa la directiva environment?
Permite especificar la caché de los archivos estáticos y el comportamiento de los errores de PHP.

En modo «development»:

- no se aplica ninguna caché,
- los logs de PHP aparecen en el sitio web (display_errors=On).


En modo «production» (opción por defecto):

- los archivos estáticos como imágenes, vídeo o audio tienen un período de expiración mayor, lo que maximiza el cacheado de los archivos en los navegadores.
- los logs de PHP no aparecen en el sitio web (display_errors=Off).




## ¿Qué significa la directiva http.firewall?
Esta directiva permite activar un firewall de aplicaciones web de tipo mod_security.

Por defecto, http.firewall está en «none». Para activarlo, cámbielo por «security».


## ¿IonCube está disponible con PHP-FPM?
Sí, ionCube ya está disponible con las siguientes versiones:

- 5.6
- 5.5
- 5.4


Para utilizarlo, necesita el codificador IonCube para codificar los scripts PHP y que funcionen en su alojamiento compartido. Si desea más información, consulte las [FAQ de IonCube](http://www.ioncube.com/faq.php).


## ¿Cómo desactivar PHP-FPM?
Solo tiene que escribir lo siguiente en el archivo .ovhconfig:


```
app.engine=phpcgi
app.engine.version=AUTO
```




## Detalles sobre el archivo .ovhconfig
A continuación se ofrece un ejemplo comentado del archivo de configuración:


```
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
; php:
; IMPORTANT: register_globals and magic_quotes_gpc are off for security
; php optiones .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback to previous system
; in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
; (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
; default: 5.6
; for phpcgi:
; this options is ignored (= fallback in AUTO)
;
app.engine.version=5.6

; __http.firewall__ used to add application firewall (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
; production:
; apache will maximise local cache
; mod_expires will grow up TTL of js, css, pdf, images, video, audio
; you can override it changing expiration explicitly in your .htaccess
; feel free to look on our guide.
; development:
; no expiration is added, files are not locally in cache,
; will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=development
```



