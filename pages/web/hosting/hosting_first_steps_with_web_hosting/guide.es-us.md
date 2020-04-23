---
title: 'Primeros pasos en un alojamiento web'
slug: primeros_pasos_en_un_alojamiento_web
excerpt: 'Cómo empezar con un alojamiento web'
section: 'Primeros pasos'
order: 1
---

**Última actualización: à(/05/2020**

## Objetivo

Los planes de hosting de OVHcloud permiten crear un sitio web de forma fácil y sencilla a partir de una solución llave en mano (WordPress, PrestaShop...) o desarrollar una plataforma propia en un servidor siempre disponible.

**Esta guía explica cómo empezar con un alojamiento web.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}.
- Haber recibido el email de confirmación de la instalación de su alojamiento web.
- Disponer de un [dominio](https://www.ovh.com/world/es/dominios/){.external} con el que poder acceder a su sitio web.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

### 1. Definir el proyecto

¿Quiere crear un blog o una tienda online? ¿Desea compartir una de sus pasiones o promocionar su actividad profesional en internet? ¿O tal vez quiere migrar un sitio web existente a OVHcloud? Para llevar su proyecto a buen puerto, es importante tener una visión clara de su objetivo.

Con los planes de hosting de OVHcloud puede crear un sitio web desde cero o migrar uno ya existente.

**Crear un sitio web nuevo**

Usted mismo puede crear su sitio web si tiene conocimientos de desarrollo, o puede optar por utilizar un sitio web de tipo llave en mano como un CMS (del inglés *content management system*). La primera solución es más técnica, pero ofrece la posibilidad de crear un proyecto personalizado. La segunda le permite beneficiarse de la estructura de un sitio web lista para usar sin necesidad de conocimientos técnicos.

Desde el área de cliente, OVHcloud pone a disposición de sus clientes una herramienta para instalar un CMS en un clic, permitiéndole elegir entre WordPress, PrestaShop, Drupal y Joomla. Si no sabe qué CMS elegir, puede consultar nuestra [comparativa de CMS](https://www.ovh.com/world/es/hosting/website/comparativa-cms/){.external}. Si quiere utilizar un CMS que no esté incluido en los módulos en un clic de OVHcloud, puede instalarlo manualmente en su alojamiento.

**Migrar un sitio web existente a OVHcloud**

La migración de un sitio web puede ser complicada, sobre todo cuando se trata de servicios en producción en los que no quiere que se produzcan interrupciones. Esta guía solo describe algunas de las operaciones que debe realizar para migrar sus servicios. Para conocer todos los pasos, consulte nuestra guía [Transferir un sitio web y el correo sin cortes del servicio](https://docs.ovh.com/us/es/domains/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/).

### 2. Instalar el sitio web

Una vez haya definido su proyecto, solo tiene que integrarlo en su alojamiento. Este apartado explica, pues, cómo publicar un sitio web. Para ello, OVHcloud ofrece tres opciones diferentes en función del tiempo de que disponga y de sus conocimientos técnicos.

#### Solución sencilla en un clic y sin necesidad de conocimientos técnicos

Esta solución utiliza los módulos en un clic de OVH, una herramienta que permite instalar un CMS de forma fácil y rápida. OVHcloud se encarga de la instalación del sitio web y le envía las claves de acceso.

Para poder instalar el módulo de OVHcloud, debe asegurarse de que el directorio de instalación del módulo esté vacío (si todavía no se ha conectado a su espacio de almacenamiento, estará vacío). Para instalar el módulo en un clic, acceda al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. En la sección `Alojamientos`{.action}, haga clic en el nombre de su alojamiento web. A continuación, abra la pestaña `Módulos en un clic`{.action} y haga clic en el botón `Añadir un módulo`{.action}.

![Acceso a los módulos en un clic](images/access_to_the_1_click_modules_section.png){.thumbnail} 

Por último, para instalar el módulo en un clic, seleccione el CMS que quiera instalar, asegúrese de que la casilla **Instalación en modo avanzado** no esté marcada y haga clic en el botón `Instalar`{.action}.

Una vez haya finalizado la instalación del módulo, recibirá por correo electrónico la confirmación, así como la información necesaria para conectarse al panel de administración del sitio web. Una vez hecho esto, puede pasar a las siguientes etapas descritas en esta guía.

Si desea más información sobre los módulos en un clic de OVHcloud, consulte la guía [Instalar un sitio web con un módulo en un clic](https://docs.ovh.com/us/es/hosting/modulos-en-un-clic/).

#### Solución rápida en pocos clics y sin necesidad de conocimientos técnicos

Esta solución utiliza los módulos de OVHcloud, una herramienta que permite instalar un CMS de forma sencilla. OVHcloud instala su sitio web con la información personalizada que usted haya indicado (por ejemplo, las claves de conexión al CMS). En este caso, es necesario disponer de, al menos, una base de datos.

Para poder instalar el módulo de OVHcloud, debe asegurarse de lo siguiente:

- El directorio de instalación del módulo debe estar vacío (si todavía no se ha conectado a su espacio de almacenamiento, estará vacío).
- Ya debe haber creado una base de datos en su alojamiento (abra la pestaña `Bases de datos`{.action} y haga clic en `Crear una base de datos`{.action} para realizar la operación).

Para crear la base de datos, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione su alojamiento web. A continuación, abra la pestaña `Bases de datos`{.action} y haga clic en el botón `Crear una base de datos`{.action}. Complete la información solicitada y espere a que se efectúe la instalación.

![Acceso a los módulos en un clic](images/create_a_database.png){.thumbnail} 

Para instalar el módulo en un clic, una vez creada la base de datos abra la pestaña `Módulos en un clic`{.action} y haga clic en el botón `Añadir un módulo`{.action}. A continuación, seleccione el CMS que quiera instalar, asegúrese de que la casilla **Instalación en modo avanzado** esté marcada y haga clic en el botón `Siguiente`{.action}.

![Acceso a los módulos en un clic](images/access_to_the_1_click_modules_section.png){.thumbnail} 

Introduzca la información solicitada e inicie la instalación del módulo. Una vez haya finalizado la instalación, recibirá por correo electrónico la confirmación de la instalación del módulo. Ya puede entonces pasar a las siguientes etapas descritas en esta guía.

Si desea más información sobre la instalación de un módulo en modo avanzado, consulte la guía [Instalar un sitio web con los módulos en un clic](https://docs.ovh.com/es/hosting/modulos-en-un-clic/).

#### Solución manual que requiere conocimientos técnicos

Esta solución es útil si desea crear o migrar un sitio web sin utilizar los módulos de OVHcloud. Para ello, debe tener los archivos del sitio web que desea instalar, ya que deberá conectarse manualmente a su espacio de almacenamiento para subir dichos archivos y luego, si es posible, conectar su sitio a una base de datos previamente creada.

No existe un procedimiento universal, ya que cada sitio web es diferente, pero podemos orientarle sobre las operaciones que deberá realizar en su alojamiento web de OVHcloud en las guías [Publicar un sitio web en internet](https://docs.ovh.com/us/es/hosting/web_hosting_publicar_un_sitio_web_en_internet/) y [Transferir un sitio web y el correo sin cortes del servicio](https://docs.ovh.com/us/es/domains/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/). Una vez haya instalado el sitio web manualmente en su alojamiento, continúe con los pasos explicados a continuación.

### 3. Crear las direcciones de correo electrónico

Puede omitir este paso si no desea utilizar las direcciones de correo electrónico que se incluyen en el [plan de hosting](https://www.ovh.com/world/es/hosting/){.external}.

Para crear una o más direcciones de correo electrónico, deber estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. En la columna izquierda, haga clic en `Correo electrónico`{.action} y seleccione el nombre del alojamiento al que está asociado el servicio de correo. A continuación, abra la pestaña `Correo electrónico`{.action} y haga clic en el botón `Crear una dirección de correo`{.action}.

![Crear una dirección de correo](images/create_an_email_address.png){.thumbnail} 

Introduzca la información solicitada para crear su dirección de correo electrónico y repita este mismo proceso si desea crear más direcciones. Para migrar todas sus direcciones de correo electrónico a OVHcloud, le recomendamos que utilice nuestra herramienta [OVHcloud Mail Migrator](https://omm.ovh.net/){.external}, que le simplificará el proceso. 

Si desea más información sobre cómo crear una dirección de correo electrónico o migrar sus servicios a OVHcloud, consulte nuestras guías [Crear una dirección de correo electrónico](https://docs.ovh.com/us/es/emails/correo_guia_de_creacion_de_una_direccion_de_correo_electronico/) y, en su caso, [Transferir un sitio web y el correo sin cortes del servicio](https://docs.ovh.com/us/es/domains/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/).

### 4. Comprobar o modificar la configuración del dominio

En este punto, ya habrá instalado su sitio web en su alojamiento de OVHcloud y habrá creado sus direcciones de correo. Si la configuración de su dominio no es correcta, puede que estas direcciones no funcionen. Dicha configuración está relacionada con los registros DNS que garantizan la accesibilidad de su sitio web y la recepción de mensajes en sus direcciones de correo electrónico utilizando su nombre de dominio.

Por ejemplo, cuando un visitante quiere acceder a su sitio web, debe introducir en su navegador la dirección del sitio (el nombre de dominio). A continuación, la resolución DNS permite traducir el nombre de dominio en dirección IP, relacionando así el nombre de dominio con el servidor en el que está alojado el sitio web correspondiente. Esta correlación es posible gracias a la información indicada en la zona DNS, cuyo funcionamiento se asemeja a un directorio en el que está registrada la configuración del dominio.

Si usted ha contratado su dominio con el alojamiento web de OVHcloud y no ha realizado ningún cambio en la zona DNS desde el área de cliente de OVHcloud, puede pasar a la siguiente etapa. En caso contrario, o si no está seguro, le recomendamos que lea con atención la siguiente información.

#### Conocer los registros de la zona DNS en OVHcloud 

Existen varios registros DNS asociados a su alojamiento web de OVHcloud. A continuación explicamos dos de ellos, que garantizan la accesibilidad de su sitio web y la recepción de los mensajes en las direcciones de correo electrónico.

**El registro A, para el sitio web**

Para comprobar el registro A que debe utilizar en la zona de DNS de su dominio, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el nombre del alojamiento. A continuación, en la pestaña `Información general`{.action}, consulte la dirección IP que aparece junto a **IPv4**.

![Modificar el registro A](images/know_the_OVH_A_records.png){.thumbnail} 

**Los registros MX, para el correo electrónico**

Para comprobar los registros MX que debe utilizar en la zona de su dominio, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. En la columna izquierda, haga clic en `Correo electrónico`{.action} y seleccione el nombre del alojamiento. A continuación, en la pestaña `Información general`{.action}, consulte la información que aparece junto a **Registros MX**. Estos registros pueden variar en función del servicio, según el filtro DNS que haya decidido aplicar.

![Modificar los registros MX](images/know_the_OVH_MX_records.png){.thumbnail} 

#### Comprobar y/o modificar los registros DNS

Una vez conozca los registros DNS asociados a su alojamiento web de OVHcloud, deberá comprobarlos y corregirlos si fuera necesario. El procedimiento para realizar la operación varía en función del proyecto.

**Si el dominio se ha contratado junto con un plan de hosting de OVHcloud**

La configuración de su dominio es correcta y puede pasar a la siguiente etapa. No obstante, si ha realizado alguna modificación en la zona DNS de su dominio desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, es posible que deba revisarla.
    
Para acceder a la zona de DNS de su dominio de OVHcloud, en la columna izquierda, haga clic en `Dominios`{.action} y seleccione el nombre de dominio. A continuación, abra la pestaña `Zona DNS`{.action} y revise la información, modificándola cuando sea necesario.

**Si el nombre de dominio no utiliza la zona DNS de OVHcloud**
    
Compruebe la zona DNS de su dominio directamente con el proveedor que lo gestiona. Si es necesario, modifique la información.

**Migración de servicios a OVHcloud (sitio web y correo electrónico)**

En este caso, si las operaciones relacionadas con los DNS no se efectúan de forma adecuada, pueden afectar a la disponibilidad de los servicios. Tal como se indica en la guía [Transferir un sitio web y el correo sin cortes del servicio](https://docs.ovh.com/us/es/domains/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/){.external}, deberá modificar los servidores DNS del dominio al final del proceso.

> [!primary]
>
> Cualquier modificación en una zona DNS tarda entre 4 y 24 horas en propagarse y ser efectiva.
>

### 5. Personalizar el sitio web

Ya es posible acceder a su sitio web. Sin embargo, si acaba de instalar un nuevo sitio mediante nuestros módulos, por ejemplo, puede personalizarlo cambiando el tema y publicando contenido. Puede omitir este paso si ha migrado un sitio web existente y que, por tanto, ya está personalizado.

Si necesita ayuda con las opciones de configuración del sitio, le invitamos a consultar la web del editor del CMS correspondiente, donde encontrará información útil.

### 6. Usar las direcciones de correo electrónico

Para utilizar sus direcciones de correo electrónico, OVHcloud pone a su disposición el cliente de correo web (webmail) Roundcube. Puede acceder desde <https://www.ovh.es/mail/>, donde tendrá que indicar las claves de la dirección de correo electrónico creada con OVHcloud.

Si desea configurar su dirección de correo electrónico en un cliente de correo o un dispositivo externo (smartphone o tablet), consulte la siguiente documentación: <https://docs.ovh.com/us/es/emails/>.

## Más información

[Transferir un sitio web y el correo sin cortes del servicio](https://docs.ovh.com/us/es/domains/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/)

[Publicar un sitio web en internet](https://docs.ovh.com/us/es/hosting/web_hosting_publicar_un_sitio_web_en_internet/)

[Instalar un sitio web con un módulo en un clic](https://docs.ovh.com/us/es/hosting/modulos-en-un-clic/)

[Crear una dirección de correo electrónico](https://docs.ovh.com/us/es/emails/correo_guia_de_creacion_de_una_direccion_de_correo_electronico/)

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
