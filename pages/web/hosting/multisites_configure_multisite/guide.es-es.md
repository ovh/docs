---
title: 'Alojar varios sitios web en un mismo hosting'
slug: configurar-un-multisitio-en-un-alojamiento-web
excerpt: 'Cómo utilizar un plan de hosting para alojar varios sitios web'
section: 'Configuración del alojamiento'
order: 1
---

**Última actualización: 24/04/2018**

## Objetivo

Tanto si su dominio está registrado con OVH como con otro agente registrador, es posible alojar varios sitios web en un mismo hosting.

**Esta guía explica cómo utilizar un plan de hosting para alojar varios sitios web.**

## Requisitos

- Tener contratado un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external} compatible.
- Tener uno o más [dominios](https://www.ovh.es/dominios/){.external}.
- Poder modificar la configuración (zona DNS) del dominio o dominios.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

### 1. Acceder a la gestión del multisitio

Conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Multisitio`{.action}.

Aparecerá una tabla en la que se muestran todos los dominios añadidos al alojamiento. Algunos de ellos se habrán creado automáticamente al instalar el alojamiento.

> [!primary]
>
> Si quiere migrar su sitio web evitando una interrupción del servicio, puede pasar directamente a la etapa [4. Publicación del sitio web](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/#4-publicacion-del-sitio-web){.external}.
>

![Multisitio](images/access-multisite-ovh.png){.thumbnail}

### 2. Añadir un dominio o subdominio

Para añadir un nuevo dominio al alojamiento, haga clic en el botón `Añadir un dominio o subdominio`{.action} y siga los pasos que se indican.

- **Añadir un dominio registrado con OVH**:

Solo se mostrarán los dominios que utilicen la configuración de OVH y que se encuentren bajo el mismo ID de cliente. Seleccione un dominio de la lista y haga clic en el botón `Siguiente`{.action}.
Si ha seleccionado esta opción, vaya directamente al paso [3.1. Añadir un dominio registrado con OVH](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/#31-anadir-un-dominio-registrado-con-ovh){.external}.

- **Añadir un dominio externo**:

Haga clic en el botón [Siguiente](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/#32-anadir-un-dominio-externo){.external} e introduzca los datos del dominio externo que quiera asociar al alojamiento. Recuerde que, para poder añadir el dominio, es necesario tener permisos para modificar su configuración (zona DNS). Si ha seleccionado esta opción, vaya al paso [3.2. Añadir un dominio externo](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/#32-anadir-un-dominio-externo){.external}.

![Multisitio](images/add-multisite-step1.png){.thumbnail}

### 3.1. Añadir un dominio registrado con OVH

> [!primary]
>
> Este paso solo es pertinente si ha seleccionado la opción «Añadir un dominio registrado con OVH». Si quiere añadir un dominio externo, vaya directamente al paso [3.2. Añadir un dominio externo](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/#32-anadir-un-dominio-externo){.external}.
>

En la pestaña `Multisitio`{.action} de su alojamiento, haga clic en el botón `Añadir un dominio o un subdominio`{.action}. Una vez seleccionado el dominio registrado en OVH que quiera asociar al alojamiento, deberá personalizar su información. Según el [plan de hosting de OVH](https://www.ovh.es/hosting/){.external} contratado, algunas opciones podrían no estar disponibles.

|Campo|Descripción|
|---|---|
|Dominio|El nombre de dominio seleccionado se autocompletará por defecto. También tiene la opción de introducir un subdominio (p. ej., «blog.example.com») y de crear simultáneamente el subdominio www (p. ej., «www.example.com»).|
|Carpeta raíz|Es el directorio de su espacio de almacenamiento en el que se alojará el dominio seleccionado. Si la carpeta no existe, se creará automáticamente.|
|Activar IPv6|Permite activar el protocolo IPv6 en el dominio indicado. Más información en nuestra página sobre las [IP](https://www.ovh.es/hosting/ip.xml){.external}.|
|SSL|Permite disfrutar de una conexión segura (https://) en el dominio seleccionado. Más información en nuestra página sobre [SSL](https://www.ovh.es/ssl/){.external}. Si activa conjuntamente las opciones SSL y CDN (Content Delivery Network), podrá disfrutar también del protocolo **HTTP2**.|
|Activar la CDN|Permite activar el servicio CDN (almacenamiento en caché de los elementos estáticos de su sitio web, como las imágenes) en el dominio seleccionado. Más información en nuestra página sobre [CDN](https://www.ovh.es/hosting/cdn.xml){.external}. Si activa conjuntamente las opciones SSL y CDN, podrá disfrutar también del protocolo **HTTP2**.|
|IP del país|Permite disfrutar de una dirección IP geolocalizada (a elegir entre diversos países) en el dominio seleccionado. Más información en nuestra página sobre las [IP](https://www.ovh.es/hosting/ip.xml){.external}.|
|Activar el firewall|Permite activar un firewall (análisis de las peticiones) en el dominio seleccionado. Más información en nuestra página sobre [Mod Security](https://www.ovh.es/hosting/mod_security.xml){.external}.|
|Logs separados|Permite activar un nuevo espacio de logs en el dominio seleccionado. Deberá elegir un dominio de la lista, que determinará el nombre de acceso al nuevo espacio. Más información en nuestra página sobre las [estadísticas detalladas](https://www.ovh.es/hosting/estadisticas-web.xml){.external}.|

Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action}.

![Multisitio](images/add-multisite-step2.png){.thumbnail}

Compruebe que la información que se muestra es correcta.

Al añadir un dominio registrado en OVH, podrá realizar automáticamente la configuración DNS marcando la casilla `Configuración automática (recomendado)`{.action}. Si prefiere configurarla de forma manual posteriormente, desmarque la casilla. En ese caso, se mostrará la información con las operaciones que debe realizar en el dominio.

Haga clic en `Aceptar`{.action} para añadir el dominio. Para más información sobre cómo realizar manualmente al configuración DNS, consulte la guía [Web Hosting: ¿Cómo editar mi zona DNS?](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}.

> [!primary]
>
> La adición del dominio a su hosting puede tardar un máximo de una hora. No obstante, la modificación de la configuración DNS del dominio tarda entre 4 y 24 horas en propagarse y ser efectiva.
>

Una vez añadido el dominio, puede ir directamente al paso [4. Publicación del sitio web](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/#4-publicacion-del-sitio-web){.external}.

### 3.2. Añadir un dominio externo

> [!primary]
>
> Este paso solo es pertinente si ha seleccionado la opción «Añadir un dominio externo», es decir, si su dominio no está registrado con OVH o no puede administrarlo desde el área de cliente de OVH. Si quiere añadir un dominio registrado con OVH, vaya al paso [3.1. Añadir un dominio registrado con OVH](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/#31-anadir-un-dominio-registrado-con-ovh){.external}.
>

En la pestaña `Multisitio`{.action} de su alojamiento, haga clic en el botón `Añadir un dominio o un subdominio`{.action}. Una vez seleccionado el dominio externo que quiera asociar al alojamiento, deberá personalizar su información.
Algunas opciones incluidas en su [plan de hosting de OVH](https://www.ovh.es/hosting/){.external} no pueden activarse inmediatamente después de añadir un dominio. Es necesario añadir primero el dominio y activar dichas opciones posteriormente modificando la configuración del dominio.

|Campo|Descripción|
|---|---|
|Dominio|Introduzca el dominio que quiera añadir al alojamiento. También puede introducir un subdominio (p. ej., «blog.example.com») y de crear simultáneamente el subdominio www (p. ej., «www.example.com»). Recuerde que, para poder añadir el dominio, es necesario tener permisos para modificar su configuración (su zona DNS).|
|Carpeta raíz|Es el directorio de su espacio de almacenamiento en el que se alojará el dominio seleccionado. Si la carpeta no existe, se creará automáticamente una vez completada la operación.|
|Activar IPv6|Permite activar el protocolo IPv6 en el dominio indicado. Más información en nuestra página sobre las [IP](https://www.ovh.es/hosting/ip.xml){.external}.|

Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action}.

![Multisitio](images/add-multisite-external-step1.png){.thumbnail}

Compruebe que la información que se muestra es correcta.

Al añadir un dominio externo a OVH, aparecerá un mensaje invitándole a cambiar su configuración. Compruebe que la información que se muestra es correcta (podrá volver a consultarla posteriormente) y haga clic en `Aceptar`{.action}.

A continuación le indicamos algunos datos relativos a la configuración del dominio:

|Registro|¿Dónde encontrar la información?|Descripción|
|---|---|---|
|TXT|En la pestaña `Multisitio`{.action}, haga clic en `Configuración del código de verificación ovhcontrol`{.action}|Este código permite a OVH comprobar que la operación para añadir un dominio externo es legítima. Asegúrese de crear el registro TXT con el subdominio **ovhcontrol** (p. ej., «ovhcontrol.example.com»).|
|A y AAAA|Pestaña `Información general`{.action}, en **IPv4** e **IPv6**|Permiten que su dominio muestre el sitio web que usted haya subido a su alojamiento.|

Una vez validado el dominio, este se añadirá temporalmente. A continuación deberá modificar su configuración (zona DNS) desde el panel que le ofrezca su proveedor para gestionar sus servidores DNS. Una vez realizada la operación, los cambios tardarán entre 4 y 24 horas en propagarse y ser plenamente efectivos.

> [!warning]
>
> Esta operación es imprescindible para poder añadir el dominio. Si no la realiza, la adición del dominio se anulará.
>

Una vez añadido el dominio o iniciada la operación de configuración, puede continuar realizando las operaciones descritas en el paso [4. Publicación del sitio web](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/#4-publicacion-del-sitio-web){.external}.

### 4. Publicación del sitio web

Una vez añadido el dominio, solo tiene que publicar el sitio web correspondiente.

Para ayudarle, OVH pone a su disposición sus módulos en un clic, que ofrecen una estructura de sitio web lista para usar. Para más información, consulte nuestra guía [Instalar un sitio web con un módulo en un clic](https://docs.ovh.com/es/hosting/modulos-en-un-clic/){.external}.

Si quiere utilizar su hosting para alojar varios sitios web, deberá realizar esta operación tantas veces como sea necesario.

Recuerde que cuanto mayor sea el número de sitios web alojados en su hosting, más recursos deberá tener asignados. En la página de nuestros [planes de hosting](https://www.ovh.es/hosting/){.external} puede consultar el número de sitios web que puede alojar en su espacio.

## Más información

[Instalar un sitio web con los módulos en un clic](https://docs.ovh.com/es/hosting/modulos-en-un-clic/){.external}

[Web Hosting: ¿Cómo editar mi zona DNS?](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.