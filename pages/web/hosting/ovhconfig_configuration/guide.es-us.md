---
title: 'Configurar el archivo .ovhconfig de un alojamiento web'
slug: configurar-archivo-ovhconfig
excerpt: 'Cómo editar el archivo .ovhconfig para configurar un alojamiento web'
section: 'Configuración del alojamiento'
order: 4
---

**Última actualización: 05/05/2020**

## Objetivo

Existen diversos motivos por los que podría tener que modificar la configuración de su [alojamiento web](https://www.ovh.com/world/es/hosting/){.external}. Para ello, OVHcloud pone a su disposición el archivo **.ovhconfig**, con el que podrá cambiar determinados parámetros.

**Esta guía explica cómo editar el archivo .ovhconfig para modificar la configuración de un alojamiento web.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external} (salvo los planes de hosting Cloud Web).
- Tener la contraseña del usuario FTP para acceder al espacio de almacenamiento. 

## Procedimiento

El archivo .ovhconfig permite modificar la configuración del alojamiento web y, por consiguiente, la configuración de los sitios web que se encuentran en dicho alojamiento. Tenga en cuenta que una modificación errónea podría deshabilitar el acceso al sitio web. Por lo tanto, asegúrese de que la configuración que utilice en el archivo .ovhconfig sea técnicamente compatible con su sitio web.

Es posible modificar el archivo .ovhconfig de dos formas distintas:

- **Editando manualmente el archivo .ovhconfig**: Esta opción es más técnica y requiere estar conectado al espacio de almacenamiento. En esta guía nos centraremos únicamente en este método.

- **Utilizando el asistente de configuración del área de cliente de OVHcloud**: Esta opción es menos técnica y requiere estar conectado al área de cliente, desde donde podrá aplicar los cambios que desee. Para más información, consulte nuestra guía [Modificar la configuración de un alojamiento web](../cambiar_el_entorno_de_ejecucion_de_un_alojamiento/){.external}.

A continuación explicamos cómo editar manualmente el archivo .ovhconfig. 

### Editar el archivo .ovhconfig

#### 1. Conectarse al espacio de almacenamiento

Para conectarse al espacio de almacenamiento, necesitará el usuario FTP principal y la contraseña FTP, así como la dirección del servidor FTP. Conéctese al espacio de almacenamiento. Si necesita ayuda, consulte el apartado «Conectarse al espacio de almacenamiento» de la guía [Publicar un sitio web en internet.](../web_hosting_publicar_un_sitio_web_en_internet/#22-conectarse-al-espacio-de-almacenamiento){.external}

Si no conoce los datos anteriores, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} y, en la columna izquierda, haga clic en `Alojamientos`{.action}. Seleccione el alojamiento correspondiente y abra la pestaña `FTP - SSH`{.action}. En la tabla podrá consultar los datos de conexión. Si no conoce la contraseña FTP, consulte nuestra guía [Cambiar la contraseña de un usuario FTP](../cambiar-contrasena-usuario-ftp/){.external}.

![ovhconfig](images/ovhconfig-step1.png){.thumbnail}

#### 2. Descargar o crear el archivo el archivo .ovhconfig

Una vez que se haya conectado al espacio de almacenamiento, podrá consultar todos los archivos que este contiene. En la raíz del alojamiento (representada por el símbolo de barra: «/») encontrará el archivo .ovhconfig.

![ovhconfig](images/ovhconfig-step2.png){.thumbnail}

Existen dos opciones:

- **El archivo .ovhconfig está presente**: Descárguelo en su ordenador. Le recomendamos que realice una copia antes de modificarlo para poder restaurar el archivo original si fuera necesario.
- **No hay ningún archivo .ovhconfig**: Si el archivo no existe, puede crearlo usted mismo en su equipo local y asignarle el nombre «.ovhconfig».

#### 3. Editar el archivo .ovhconfig

Es posible editar el archivo .ovhconfig utilizando un editor de texto (no confundir con un procesador de texto). El archivo .ovhconfig debe contener un código como el siguiente:

```php
app.engine=php
app.engine.version=7.3

http.firewall=none
environment=production

container.image=stable
```

Personalice los valores de las variables según la configuración que quiera utilizar en su alojamiento web. 

|Variables|Descripción|
|---|---|
|app.engine|Permite cambiar el motor de PHP que utiliza el alojamiento. Introduzca «php» para activar el acelerador PHP-FPM y «phpcgi» para desactivarlo.|
|app.engine.version|Permite elegir la versión de PHP que utiliza el alojamiento entre [las que ofrece OVHcloud](https://www.ovh.es/hosting/php.xml){.external}. Introduzca la versión de PHP que quiera utilizar.|
|http.firewall|Permite activar o desactivar el [firewall incluido con todos los planes de hosting de OVHcloud](https://www.ovh.es/hosting/mod_security.xml){.external}. Introduzca «security» para activarlo o «none» para desactivarlo.|
|environment|Permite administrar el comportamiento de la caché de los archivos estáticos en su sitio web y el tratamiento de los errores PHP. Introduzca «production» para maximizar el almacenamiento en caché y ocultar los errores de PHP o «development» para que no se aplique ninguna caché y mostrar los errores PHP.|
|container.image|Permite cambiar el entorno de ejecución que utiliza el alojamiento. Introduzca el motor que quiera utilizar. Puede consultar los distintos motores en el apartado «Opciones de configuración disponibles» de la guía [Modificar la configuración de un alojamiento web](../cambiar_el_entorno_de_ejecucion_de_un_alojamiento/#motor-de-php){.external}.|

A continuación ofrecemos el detalle completo del archivo .ovhconfig:

```php
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
;   php:
;       IMPORTANT: register_globals and magic_quotes_gpc are off for security
;       php options .htaccess (like php version) are ignored
;   phpcgi:
;       IMPORTANT this is a fallback to previous system
;       in this case __app.engine.version__ will be considered as AUTO and php version will be old system
;       (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
;   default: 7.3
; for phpcgi:
;   this option is ignored (= fallback in AUTO)
;
app.engine.version=7.3

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
;   production:
;       apache will maximise local cache
;       mod_expires will grow up TTL of js, css, pdf, images, video, audio
;       you can override it changing expiration explicitly in your .htaccess
;       feel free to look on our guide.
;   development:
;       no expiration is added, files are not locally in cache,
;       will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=production

; __container.image__
;
; values: legacy | stable | jessie.i386 | testing
;
container.image=stable
```

#### 4. Cargar el archivo .ovhconfig en el espacio de almacenamiento

Una vez que haya editado el archivo .ovhconfig, solo queda colocarlo en el espacio de almacenamiento. Para ello, cargue el archivo .ovhconfig que acaba de editar en la raíz del espacio de almacenamiento (representada por el símbolo de barra: «/»). Si el archivo ya existe, sustitúyalo.

### Utilizar el archivo .ovhconfig en modo avanzado

Si utiliza el alojamiento para varios sitios web, probablemente haya configurado un multisitio. En esta situación, existe la posibilidad de que necesite una versión de PHP diferente para alguno de los sitios web.

En ese caso, debe crear un archivo .ovhconfig específico para el sitio web correspondiente con la versión de PHP que necesite. Para más información, consulte el apartado [Editar el archivo .ovhconfig](../configurar-archivo-ovhconfig/#editar-el-archivo-ovhconfig){.external} de esta guía. Al cargar el archivo .ovhconfig en el espacio de almacenamiento, asegúrese de hacerlo en la carpeta raíz del sitio web configurado como multisitio. Puede consultar la carpeta raíz de cada uno de sus sitios web en el área de cliente, en la pestaña `Multisitio`{.action} del alojamiento correspondiente.

> [!warning]
>
> No es posible indicar un segundo entorno de ejecución. Solo se tendrá en cuenta el entorno que haya indicado en el archivo .ovhconfig que se encuentre en la raíz del espacio de almacenamiento.
> 

![ovhconfig](images/ovhconfig-step3.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
