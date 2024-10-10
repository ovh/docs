---
title: "Web hosting - Entorno, versión PHP, .ovhconfig"
excerpt: "Descubra cómo cambiar el entorno de ejecución, la versión PHP, el firewall de aplicaciones, el motor, el modo y el .ovhconfig de un alojamiento web"
updated: 2024-07-16
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Los planes de [hosting de OVHcloud](/links/web/hosting){.external} permiten alojar el sitio web que usted quiera, siempre que sea compatible con la [configuración de nuestras infraestructuras compartidas](https://webhosting-infos.hosting.ovh.net){.external}.

La modificación del archivo **php.ini** no está disponible en los planes de hosting. Esto se debe a que la configuración PHP es global en el conjunto de la infraestructura compartida.
No obstante, en nuestras infraestructuras compartidas, puede modificar los siguientes parámetros para su alojamiento web:

- [El entorno de ejecución](#runtime-environment)
- [La versión de PHP](#php-versions)
- [El motor de ejecución PHP](#php-runtime)
- [El firewall de aplicación](#firewall)
- [El modo de ejecución](#runtime-mod)

Estas opciones de configuración se pueden modificar de dos formas:

- desde su [área de cliente de OVHcloud](/links/manager) ;
- desde el espacio de almacenamiento FTP de su alojamiento web de OVHcloud mediante un archivo denominado ".ovhconfig".

> [!primary]
>
> Los archivos ".ovhconfig" son archivos de configuración del servidor y son reconocidos automáticamente como tales por la infraestructura de alojamiento compartido.
> Están presentes nativa y por defecto en la "raíz FTP" del espacio de almacenamiento FTP de su alojamiento web.
> Contienen los valores de los elementos mencionados arriba.
>

En resumen, modificar la configuración de un alojamiento web desde el [área de cliente de OVHcloud](/links/manager) o modificar los valores presentes en el archivo ".ovhconfig" equivale a realizar la misma operación.

### Sumario

- [1 - Descripción de los parámetros de configuración disponibles en los alojamientos web de OVHcloud](#all-parameters)
- [2 - Método 1: Modificar la configuración del alojamiento web desde el área de cliente de OVHcloud](#setting-ovh-manager)
- [3 - Método 2: Modificar la configuración del alojamiento web desde el archivo ".ovhconfig"](#setting-ovhconfig)
- [4 - Uso avanzado de los archivos ".ovhconfig"](#ovhconfig-more)

**Descubra cómo modificar el entorno de ejecución, la versión PHP, el firewall de aplicaciones, el motor, el modo y el archivo ".ovhconfig" de un alojamiento web.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/X31MNMLw064" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting){.external}, a excepción de [un plan de hosting Cloud Web](/links/web/hosting-cloud-web-offer).
- Tener acceso a su plan de hosting desde el [área de cliente de OVHcloud](/links/manager) o conocer la información necesaria para conectarse al [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection).

## Procedimiento

### 1 - Descripción de los parámetros de configuración disponibles en los alojamientos web de OVHcloud <a name="all-parameters"></a>

A continuación ofrecemos una descripción técnica de cada uno de los parámetros que puede modificar en los planes de hosting de OVHcloud.

> [!warning]
>
> Cambiar al menos uno de estos elementos puede afectar a la visualización o al buen funcionamiento del sitio web. **Asegúrese previamente de que su sitio web es compatible con los cambios que desea realizar en la configuración de su alojamiento web**. En caso de duda o de dificultad, puede ponerse en contacto con un [proveedor especializado](/links/partner).
>

#### 1.1 - Entornos de ejecución <a name="runtime-environment"></a>

Los entornos de ejecución contienen un conjunto de lenguajes de programación. En función del entorno de ejecución elegido, los lenguajes están disponibles en versiones más o menos avanzadas. El objetivo de estos entornos es permitirle ejecutar correctamente los archivos que componen su sitio web, en función de sus necesidades técnicas.

En los planes de hosting de OVHcloud ofrecemos **3** entornos de ejecución: *Legacy*, *Stable* y *Stable64*.
Consulte a continuación los elementos contenidos en nuestros distintos entornos de ejecución:

|Entorno|Legacy|Stable|Stable64|
|---|---|---|---|
|Arquitectura|32 bits|32 bits|64 bits|
|Versión PHP mínima|5.4|5.4|7.4|
|OpenSSL|1.0.1t|1.0.1t|1.1.1n|
|Python|2.7 y 3.4|2.7 y 3.7|2.7 y 3.7|
|Ruby|2.1|2.1|2.5|
|Rails|4.1|4.1|5.2|
|Perl|5.20|5.20|5.28|
|git|2.1|2.1|2.20|

> [!primary]
>
> El entorno *Legacy* puede ser útil para sitios web que utilicen versiones antiguas de PHP. No obstante, le recomendamos encarecidamente que utilice el entorno *Stable64*, que cuenta con las últimas actualizaciones. **Asegúrese de que su sitio web es compatible antes de realizar cualquier cambio.**
> 

#### 1.2 - Las versiones de PHP <a name="php-versions"></a>

PHP es un lenguaje de programación dinámico utilizado para crear sitios web. Para su sitio web, y en función de su antigüedad, de las actualizaciones realizadas o de determinadas variables necesarias para su buen funcionamiento, puede verse obligado a cambiar la versión de PHP que utiliza.

Existen varias versiones del lenguaje de programación PHP. Las actualizaciones de versión ofrecen diversos parches, así como la adición o interrupción de funcionalidades. OVHcloud ofrece las últimas versiones mayores de PHP, que puede consultar [aquí](/links/web/hosting-programming-language).

Algunas versiones de PHP solo funcionan en determinados entornos de ejecución. A continuación se indican las versiones de PHP disponibles en los alojamientos compartidos de OVHcloud y [los entornos de ejecución](#runtime-environment) compatibles:

|Versiones PHP|Entornos de ejecución compatibles|
|---|---|
|5.4, 5.5, 5.6 y 7.0|Legacy, Stable|
|7.1, 7.2 y 7.3|Stable|
|7.4, 8.0, 8.1,8.2 y 8.3|stable64|

> [!primary]
>
> Debido a que algunas funcionalidades podrían no mantenerse con las nuevas versiones, **asegúrese de que la nueva versión de PHP es compatible con su sitio web antes de realizar cualquier cambio.**
>

Aunque OVHcloud se encarga de instalar las últimas versiones de PHP en sus servidores, usted deberá asegurarse de que su sitio web está **siempre actualizado** y es compatible con las últimas versiones de PHP. Existen dos formas de hacerlo, en función del sitio web que utilice:

**Caso 1: utiliza un Content Management System (CMS)** como *WordPress*, *Joomla!*, *PrestaShop* o *Drupal*: 

- Consulte la documentación oficial creada por el editor del CMS que utilice.
- Tome nota de la información relativa a los requisitos técnicos necesarios para el funcionamiento de su CMS, así como de las operaciones necesarias para actualizarlo.
- Si es necesario, actualice su CMS asegurándose de que la nueva versión es compatible con el alojamiento web de OVHcloud.

**Caso 2: utiliza un sitio basado en una solución personalizada**: 

- Contacte con el webmaster que haya creado el sitio web.
- Consulte la [documentación oficial de PHP](http://php.net/manual/en/appendices.php){.external} para obtener más información sobre las migraciones de versiones.
- Si es necesario, actualice el código de su sitio web asegurándose de que sigue siendo compatible con el alojamiento web de OVHcloud.

Si lo necesita, puede conocer la versión de PHP que utiliza actualmente su alojamiento web de dos maneras:

- **A través del área de cliente de OVHcloud**. Conéctese al [área de cliente de OVHcloud](/links/manager){.external} y acceda a la sección `Web Cloud`{.action} de la página. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. En la pestaña `Información general`{.action}, busque la versión en *Versión PHP global*. 

![phpversion](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/change-php-version-step1.png){.thumbnail}

> [!primary]
> Si aparece un círculo de color azul, espere a que la versión se actualice en unos minutos.
>

- **Mediante un script**. Cree un script **.php** que contenga únicamente el código siguiente:

```php
<?php phpinfo(); ?>
```

A continuación, póngalo en línea en su [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection) y llámelo accediendo a su dirección/URL completa.

> [!warning]
>
> La modificación de la versión de PHP mediante un archivo ".htaccess" ya no es posible en los últimos [planes de hosting de OVHcloud](/links/web/hosting).<br>
> El comando que permite cambiar la versión de PHP en el archivo ".htaccess" tampoco permite utilizar las versiones recientes de PHP en nuestras infraestructuras.
> Es obligatorio utilizar el archivo ".ovhconfig".
>

#### 1.3 - Los motores de ejecución PHP <a name="php-runtime"></a>

Los motores de ejecución PHP son programas que permiten realizar acciones en el servidor web según un método determinado. Normalmente, esta configuración se modifica para afectar a la velocidad de ejecución de las peticiones generadas por los visitantes de su sitio web.

En los planes de hosting de OVHcloud ofrecemos **2** motores de ejecución PHP: *php* ("PHP-FPM") y *phpcgi*.

La elección del motor *php* permite activar o desactivar el acelerador PHP (PHP-FPM). Este último ha sido adaptado a nuestra infraestructura para acelerar la velocidad de ejecución de los scripts PHP. 

En efecto, el motor *phpcgi* ejecuta las peticiones "en serie", a diferencia del motor *php* ("PHP-FPM"), que las ejecuta "en paralelo".

En comparación, el acelerador PHP (PHP-FPM) ofrece un rendimiento hasta siete veces más rápido que el motor *phpcgi*. 

#### 1.4 - Firewall de aplicaciones <a name="firewall"></a>

Un firewall es una seguridad que filtra las peticiones entrantes de su alojamiento web. En nuestros alojamientos web, esta opción de configuración funciona como una opción **activable** o **desactivable**.
Esto se debe a que no podrá cambiar la configuración de filtrado del firewall en sí.

Para más información, consulte nuestra guía "[Activación del firewall de aplicaciones](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

> [!warning]
>
> Si utiliza módulos de pago, la activación del cortafuegos de la aplicación puede afectar a la comunicación entre el módulo de pago y los bancos. En ese caso, desactive la opción.
>

#### 1.5 - Modos de ejecución <a name="runtime-mod"></a>

Los modos de ejecución permiten gestionar el comportamiento de la caché de los archivos estáticos de su sitio web (imágenes, por ejemplo), así como el tratamiento de los errores PHP (generalmente útiles cuando su sitio web muestra una página en blanco, por ejemplo). 

Existen **2** modos que puede activar: *Production* y *Development*.

|Modo|Caché de archivos estáticos|Tratamiento de errores PHP|
|---|---|---|
|*Production*|Maximiza el almacenamiento en caché de los archivos estáticos en los navegadores de internet.|Los errores PHP no aparecen en su sitio web.|
|*Development*|No se aplica ninguna caché.|Los errores PHP aparecen en su sitio web.|

> [!primary]
>
> Para las versiones 7.1 y superiores de PHP, los errores aparecerán en el sitio web, independientemente del modo utilizado. 
> 

Una vez que conozca los distintos parámetros que puede modificar para su alojamiento web de OVHcloud, descubra las dos formas de modificarlos.

### 2 - Método 1: modificar la configuración del alojamiento web desde el área de cliente de OVHcloud <a name="setting-ovh-manager"></a>

> [!warning]
>
> Le recordamos que modificar al menos uno de estos elementos puede afectar a la visualización o al buen funcionamiento de su sitio web. **Asegúrese previamente de que su sitio web es compatible con los cambios que desea realizar en la configuración de su alojamiento web.** En caso de duda o de que tenga dificultades, contacte con un [proveedor especializado](/links/partner).
>

#### 2.1 - Acceder a la gestión de la configuración del alojamiento web

Conéctese a su [área de cliente de OVHcloud](/links/manager){.external} y acceda a la sección `Web Cloud`{.action} de la página. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Asegúrese de que se encuentra en la pestaña
`Información general`{.action}. A la derecha de la indicación `Versión PHP Global`{.action}, situada casi en el centro de la página, haga clic en el botón `...`{.action} y luego en `Editar la configuración`{.action}.

![hostingconfiguration](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration.png){.thumbnail}

> [!primary]
>
> Si el botón `Editar la configuración`{.action} aparece atenuado, es posible que se esté realizando una comprobación de la versión **PHP global**. En ese caso, aparecerá un círculo de color azul junto a la versión, indicando que se está realizando una comprobación. Espere unos minutos hasta que el botón `Editar la configuración`{.action} vuelva a estar disponible.
>
> Si la opción `Version PHP Global`{.action} no aparece en su [área de cliente de OVHcloud](/links/manager), compruebe que el archivo *.ovhconfig* existe en la raíz FTP de su alojamiento compartido de OVHcloud.
>
> Encontrará toda la información relativa al archivo *.ovhconfig* en la tercera parte "[Método 2: modificar la configuración del alojamiento web desde el archivo ".ovhconfig"](#setting-ovhconfig)" de esta guía.
>

#### 2.2 - Cambiar la configuración del alojamiento web

Se abrirá una ventana en la que podrá elegir entre dos opciones. Seleccione la que corresponde a la acción que quiera realizar y haga clic en `Siguiente`{.action}.

|Elección|Detalle|
|---|---|
|`Volver a la configuración anterior`|Después de seleccionar esta opción, elija la configuración que desea restaurar junto a `Elección histórica`. Es posible que esta opción no esté disponible si no ha realizado ningún cambio anteriormente.|
|`Modificar la configuración actual`|Después de seleccionar esta opción, elija los cambios que desea realizar en la configuración entre los campos disponibles. Si es necesario, vuelva a la primera parte "[Descripción de los parámetros de configuración disponibles en los alojamientos web de OVHcloud](#all-parameters)" de esta guía.|

> [!primary]
>
> Cambiar el entorno de ejecución de un alojamiento web borra automáticamente las sesiones PHP.
> 

Cuando esté listo, haga clic en `Aceptar`{.action} para aplicar el cambio. Espere a que se complete.

![hostingconfiguration](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration-step-1-and-2.png){.thumbnail}

### 3 - Método 2: modificar la configuración del alojamiento web desde el archivo ".ovhconfig" <a name="setting-ovhconfig"></a>

#### 3.1 - Conectarse al espacio de almacenamiento FTP de su alojamiento web

Localice su usuario FTP principal, su contraseña y la dirección del servidor FTP.
Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager){.external} y acceda a la sección `Web Cloud`{.action} de la columna izquierda. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `FTP - SSH`{.action}. En ella encontrará la información necesaria para conectarse. 

Para conocer la contraseña del usuario FTP, consulte las instrucciones de la guía "[Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password)".

![ovhconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}

#### 3.2 - Obtener o crear el archivo ".ovhconfig"

Una vez conectado a su [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection), podrá ver todos los archivos alojados actualmente en este último. En la raíz del alojamiento (representada por el símbolo de barra: "/"). Encontrará el archivo ".ovhconfig".

![ovhconfig](/pages/assets/screens/other/web-tools/net2ftp/ovhconfig-file.png){.thumbnail}

Existen dos posibilidades:

- **El archivo ".ovhconfig" está presente** : Descárguelo en su propio ordenador o dispositivo. Haga una copia antes de modificarlo. Esta le permitirá restaurar el archivo original si es necesario.
- **el archivo ".ovhconfig" no existe** : Puede crearlo en su propia máquina o dispositivo y asignarle el nombre ".ovhconfig".

#### 3.3 - Modificar el contenido del archivo ".ovhconfig" <a name="update-ovhconfig"></a>

Una vez que tenga el archivo ".ovhconfig", edítelo. Para ello, utilice un programa como un editor de texto. El archivo ".ovhconfig" debe contener un código similar al siguiente:

```php
app.engine=php
app.engine.version=8.0

http.firewall=none
environment=production

container.image=stable64
```

> [!success]
>
> Si acaba de crear el archivo ".ovhconfig", copie el código anterior en su archivo y continúe leyendo esta guía.
>

Personalice los valores de las variables según la configuración que quiera utilizar con su alojamiento web.

|Variables|Detalle|
|---|---|
|app.engine|Permite modificar [el motor PHP](#php-runtime) utilizado por el alojamiento. Introduzca **php** para activar el acelerador PHP-FPM y **phpcgi** para desactivarlo.|
|app.engine.version|Permite definir [la versión de PHP](#php-versions) utilizada por el alojamiento entre [las que ofrece OVHcloud](/links/web/hosting-programming-language){.external}. Introduzca la versión que desee (en función del entorno de ejecución que haya elegido).|
|http.firewall|Permite activar o desactivar el [firewall incluido con los alojamientos web de OVHcloud](/links/web/hosting-options){.external}. Introduzca **security** para activarlo o **none** para desactivarlo.|
|environment|Permite gestionar el comportamiento de la caché de los archivos estáticos de su sitio web y el tratamiento de los errores PHP. Esto corresponde al [modo de ejecución](#runtime-mod). Introduzca **production** para maximizar el almacenamiento en caché y ocultar los errores PHP o **development** para que no se aplique ninguna caché y se muestren los errores PHP.|
|container.image|Permite modificar [el entorno de ejecución](#runtime-environment) utilizado por el alojamiento. Introduzca el entorno de ejecución (**legacy**,**stable** o **stable64**) que desee. Si elige el entorno de ejecución **stable64**, compruebe que su sitio web es compatible con la arquitectura de 64 bits.|

Si lo necesita, vuelva a la sección "[Descripción de los parámetros de configuración disponibles en los alojamientos web de OVHcloud](#all-parameters)" de esta guía.

En caso necesario, consulte a continuación la descripción técnica detallada del archivo ".ovhconfig":

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
;       php optiones .htaccess (like php version) are ignored
;   phpcgi:
;       IMPORTANT this is a fallback to previous system
;       in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
;       (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
;   default: 8.0
; for phpcgi:
;   this options is ignored (= fallback in AUTO)
;
app.engine.version=8.0

; __http.firewall__ used to add application firewall  (filter http requests)
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
; values: legacy | stable | stable64
;
container.image=stable64
```

#### 3.4 - Descargar el archivo ".ovhconfig" en el espacio de almacenamiento

Una vez modificado el archivo ".ovhconfig", cárguelo en su [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection). Para ello, vuelva a conectarse a su [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection) y sitúese en la raíz de su [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection) (representada por un símbolo de "/"). Cargue el archivo ".ovhconfig" que acaba de modificar en su [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection). Si el archivo ya existe, reemplácelo.

### 4 - Uso avanzado de los archivos ".ovhconfig" <a name="ovhconfig-more"></a>

Si utiliza su alojamiento web para alojar varios sitios web (en *multisites*), existen diversos motivos por los que podría tener que disfrutar de una versión de PHP diferente para algunos de sus *multisites*.

Cree un archivo ".ovhconfig" que contenga la versión de PHP deseada para el o los *multisites* afectados. Si necesita ayuda para realizar las operaciones descritas en el apartado "[3.3 - Modificar el contenido del archivo ".ovhconfig"](#update-ovhconfig) de esta guía. Cuando descargue el archivo ".ovhconfig" en su [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection), hágalo en la carpeta raíz en la que se encuentren los archivos que componen el sitio web "*multisites*" en cuestión. Consulte la carpeta raíz de sus *multisites* desde su [área de cliente de OVHcloud](/links/manager) en la pestaña `Multisite`{.action} del alojamiento correspondiente.

Si lo necesita, consulte nuestra guía "[Configurar un multisitio en un alojamiento web](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

> [!warning]
>
> **No es posible especificar un segundo [entorno de ejecución](#runtime-environment), un segundo [modo de ejecución](#runtime-mod) ni un segundo [motor de ejecución PHP](#php-runtime)** en un mismo alojamiento web. Solo se tendrán en cuenta los datos introducidos en el archivo ".ovhconfig" que se encuentra en la raíz de su [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection).
>

![ovhconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

## Más información

[Conectarse al espacio de almacenamiento de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).