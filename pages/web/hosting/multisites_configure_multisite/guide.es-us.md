---
title: 'Alojar varios sitios web en un mismo hosting'
slug: configurar-un-multisitio-en-un-alojamiento-web
excerpt: 'Cómo utilizar un plan de hosting para alojar varios sitios web'
section: 'Configuración del alojamiento'
order: 1
---

**Última actualización: 05/05/2020**

## Objetivo

Es posible alojar varios sitios web en un mismo hosting, tanto si sus dominios están registrados con OVHcloud como con otro agente registrador.

**Esta guía explica cómo utilizar un plan de hosting para alojar varios sitios web.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external} compatible.
- Tener uno o más [dominios](https://www.ovh.com/world/dominios/){.external}.
- Poder modificar la configuración (zona DNS) del dominio o dominios.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

### 1. Acceder a la gestión del multisitio

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Multisitio`{.action}.

Se mostrará una tabla que contiene todos los dominios añadidos al alojamiento. Algunos de ellos se habrán creado automáticamente al instalarlo.

> [!primary]
>
> Si quiere migrar su sitio web evitando una interrupción del servicio, puede ir directamente al paso [3. Publicación del sitio web](../configurar-un-multisitio-en-un-alojamiento-web/#3-publicacion-del-sitio-web_1){.external}.
>

![Multisitio](images/access-multisite-ovh.png){.thumbnail}

### 2. Añadir un dominio o subdominio

Para añadir un nuevo dominio al alojamiento, haga clic en el botón `Añadir un dominio o subdominio`{.action} y siga los pasos que se indican.

**Añadir un dominio registrado con OVH**

Solo se mostrarán los dominios que utilicen la configuración de OVH y que se encuentren bajo el mismo ID de cliente. Seleccione un dominio de la lista y haga clic en el botón `Siguiente`{.action}. Continúe en el paso [2.1. Añadir un dominio registrado con OVHcloud](../configurar-un-multisitio-en-un-alojamiento-web/#21-anadir-un-dominio-registrado-con-ovhcloud){.external}.

**Añadir un dominio externo**

Si el dominio no aparece en la lista, es porque no está registrado en OVHcloud o pertenece a otro ID de cliente. En ambos casos se considera que el dominio es externo. Seleccione entonces `Añadir un dominio externo`{.action} y haga clic en `Siguiente`{.action}. Continúe en el paso [2.2. Añadir un dominio externo](../configurar-un-multisitio-en-un-alojamiento-web/#22-anadir-un-dominio-externo){.external}.

![Multisitio](images/add-multisite-step1.png){.thumbnail}

#### 2.1. Añadir un dominio registrado con OVHcloud

> [!primary]
>
> Este paso solo es pertinente si ha seleccionado la opción «Añadir un dominio registrado con OVHcloud». Si quiere añadir un dominio externo, vaya directamente al paso [2.2. Añadir un dominio externo](../configurar-un-multisitio-en-un-alojamiento-web/#22-anadir-un-dominio-externo){.external}.
>

Una vez seleccionado el dominio que quiera asociar al alojamiento, deberá personalizar su información. Según el [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external} contratado, algunas opciones podrían no estar disponibles.

|Campo|Descripción|
|---|---|
|Dominios|El nombre de dominio seleccionado se autocompletará por defecto. Puede añadirle un subdominio (p. ej., «blog.mypersonaldomain.ovh») y crear simultáneamente el subdominio www correspondiente (p. ej., «www.blog.mypersonaldomain.ovh»). El dominio que introduzca aquí será la dirección de internet del sitio web, una vez publicado.|
|Carpeta raíz|Es el directorio del espacio de almacenamiento en el que se alojará el dominio seleccionado. Los archivos del sitio web deberán publicarse en este espacio. Por ejemplo, para «blog.mypersonaldomain.ovh», la carpeta raíz podría ser «blog». Si la carpeta no existe, se creará automáticamente.|
|Activar IPv6|Permite activar el protocolo IPv6 en el dominio indicado. Más información en nuestra página sobre las [IP](https://www.ovh.es/hosting/ip.xml){.external}.|
|SSL|Permite disfrutar de una conexión segura (https://) en el dominio seleccionado. Más información en nuestra página sobre [SSL](https://www.ovh.es/ssl/){.external}. Si activa conjuntamente las opciones SSL y CDN (Content Delivery Network), podrá disfrutar también del protocolo **HTTP2** (activo por defecto en nuestro datacenter de Gravelines).|
|Activar la CDN|Permite activar el servicio CDN (almacenamiento en caché de los elementos estáticos del sitio web, como las imágenes) en el dominio seleccionado. Más información en nuestra página sobre [CDN](https://www.ovh.es/hosting/cdn.xml){.external}. Si activa conjuntamente las opciones SSL y CDN, podrá disfrutar también del protocolo **HTTP2** (activo por defecto en nuestro datacenter de Gravelines).|
|IP del país|Permite disfrutar de una dirección IP geolocalizada (a elegir entre diversos países) en el dominio seleccionado. Más información en nuestra página sobre las [IP](https://www.ovh.es/hosting/ip.xml){.external}.|
|Activar el firewall|Permite activar un firewall (análisis de las peticiones) en el dominio seleccionado. Más información en nuestra página sobre [Mod Security](https://www.ovh.es/hosting/mod_security.xml){.external}.|
|Logs separados|Permite activar un nuevo espacio de logs en el dominio seleccionado. Deberá elegir un dominio de la lista, que determinará el nombre de acceso al nuevo espacio. Más información en nuestra página sobre las [estadísticas detalladas](https://www.ovh.es/hosting/estadisticas-web.xml){.external}.|

Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action}. Compruebe que la información que se muestra en el resumen es correcta.

![Multisitio](images/add-multisite-step2.png){.thumbnail}

Al añadir un dominio registrado en OVHcloud, podrá elegir entre realizar la configuración DNS de forma automática o manual:

- **Para una configuración DNS automática**, marque la casilla `Configuración automática (recomendado)`{.action}.
- **Para una configuración DNS manual**, desmarque la casilla `Configuración automática (recomendado)`{.action}. En este caso, se mostrarán los parámetros que debe modificar. Para más información sobre cómo realizar manualmente la configuración DNS, consulte la guía [Editar una zona DNS de OVHcloud](https://docs.ovh.com/us/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}. 

Haga clic en `Aceptar`{.action} para añadir el dominio. Esta operación puede tardar un máximo de una hora. No obstante, la modificación de la configuración DNS del dominio tarda entre 4 y 24 horas en propagarse y ser efectiva.

Una vez añadido el dominio, vaya directamente al paso [3. Publicación del sitio web](../configurar-un-multisitio-en-un-alojamiento-web/#3-publicacion-del-sitio-web_1){.external}.

#### 2.2. Añadir un dominio externo

> [!primary]
>
> Este paso solo es pertinente si ha seleccionado la opción «Añadir un dominio externo», es decir, si su dominio no está registrado con OVHcloud o no puede administrarlo desde el área de cliente de OVHcloud. Si quiere añadir un dominio registrado con OVHcloud, vuelva al paso [2.1. Añadir un dominio registrado con OVHcloud](../configurar-un-multisitio-en-un-alojamiento-web/#21-anadir-un-dominio-registrado-con-ovhcloud){.external}.
>

Una vez seleccionado el dominio que quiera asociar al alojamiento, deberá personalizar su información. Tenga en cuenta que algunas opciones incluidas en su [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external} no pueden activarse durante este proceso. Es necesario añadir el dominio en primer lugar y posteriormente activar dichas opciones modificando la configuración del multisitio.

|Campo|Descripción|
|---|---|
|Dominio|Introduzca el dominio que quiera utilizar. También puede introducir un subdominio (p. ej., «blog.mypersonaldomain.ovh») y crear simultáneamente el subdominio www correspondiente (p. ej., «www.blog.mypersonaldomain.ovh»). El dominio que introduzca aquí será la dirección de internet del sitio web, una vez publicado. Recuerde que, para poder añadir el dominio, es necesario tener permisos para modificar su configuración (zona DNS).|
|Carpeta raíz|Es el directorio del espacio de almacenamiento en el que se alojará el dominio seleccionado. Los archivos del sitio web deberán publicarse en este espacio. Por ejemplo, para «blog.mypersonaldomain.ovh», la carpeta raíz podría ser «blog». Si la carpeta no existe, se creará automáticamente.|
|Activar IPv6|Permite activar el protocolo IPv6 en el dominio indicado. Más información en nuestra página sobre las [IP](https://www.ovh.es/hosting/ip.xml){.external}.|

Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action}. Compruebe que la información que se muestra en el resumen es correcta.

![Multisitio](images/add-multisite-external-step1.png){.thumbnail}

Para añadir un dominio externo a OVHcloud, es necesario realizar un procedimiento de verificación específico destinado a garantizar que su adición es legítima. Así, en el área de cliente aparecerá un mensaje invitándole a cambiar la configuración DNS de dicho dominio. 

Compruebe que la información que se muestra es correcta y haga clic en `Aceptar`{.action}. A continuación, el dominio se añadirá temporalmente para que usted pueda modificar su configuración DNS.

> [!warning]
>
> La modificación de la configuración DNS del dominio es imprescindible para poder añadir el dominio. Si no la realiza, la adición del dominio se anulará.
>

Para modificar la configuración del dominio (su zona DNS), deberá acceder al panel que le ofrezca el proveedor encargado de su gestión. Si su proveedor es OVHcloud, consulte la guía [Editar una zona DNS de OVHcloud](https://docs.ovh.com/us/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}. Una vez realizada la operación, los cambios tardarán entre 4 y 24 horas en propagarse y ser plenamente efectivos.

A continuación le indicamos algunos datos relativos a la configuración DNS del dominio:

|Registro|¿Dónde encontrar la información?|Descripción|
|---|---|---|
|TXT|En la pestaña `Multisitio`{.action}, haciendo clic en `Configuración del código de verificación ovhcontrol`{.action}|Este código permite a OVHcloud comprobar que la operación para añadir un dominio externo es legítima. Deberá crear el registro TXT con el subdominio **ovhcontrol** (p. ej., «ovhcontrol.mypersonaldomain.ovh»). Solo es necesario validar el dominio principal, no todos los subdominios.|
|A y AAAA|Pestaña `Información general`{.action}, en **IPv4** e **IPv6**|Estos dos registros permiten que su dominio muestre el sitio web que usted haya subido a su alojamiento.|

### 3. Publicación del sitio web

Una vez añadido el dominio, solo tiene que publicar el sitio web correspondiente. Le recordamos que debe realizar esta operación en la carpeta raíz que haya indicado en el paso anterior.

Para ayudarle, OVHcloud pone a su disposición una serie de módulos en un clic, que ofrecen una estructura de sitio web lista para usar. Si utiliza estos módulos, el sitio web se instalará automáticamente en la carpeta raíz configurada anteriormente. Para más información, consulte nuestra guía [Instalar un sitio web con un módulo en un clic](../modulos-en-un-clic/){.external}. 

Si, por el contrario, quiere instalar manualmente su sitio web, deberá subir los archivos a la carpeta raíz adecuada de su espacio de almacenamiento. Para más información, consulte nuestra guía [Publicar un sitio web en internet](../web_hosting_publicar_un_sitio_web_en_internet/){.external}.

> [!primary]
>
> Si quiere utilizar su hosting para alojar varios sitios web, deberá realizar esta operación tantas veces como sea necesario.
>
> Recuerde que cuantos más sitios web aloje en su hosting, mayor será la demanda de recursos asignados. En la página de nuestros [planes de hosting](https://www.ovh.com/world/es/hosting/){.external} puede consultar el número de sitios web que puede alojar en su espacio.
>


## Más información

[Instalar un sitio web con un módulo en un clic](../modulos-en-un-clic/){.external}

[Editar una zona DNS de OVHcloud](../../domains/web_hosting_como_editar_mi_zona_dns/){.external}

[Publicar un sitio web en internet](../web_hosting_publicar_un_sitio_web_en_internet/){.external}

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
