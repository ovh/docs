---
title: 'Crear grupos de contactos'
excerpt: 'Aprenda a gestionar listas de correo en Exchange'
slug: exchange_20132016_uso_de_los_grupos_listas_de_correo
legacy_guide_number: g1258
section: 'Funcionalidades de Exchange'
---

**Última actualización: 26/2/2020**

## Objetivo

Los grupos de Exchange permiten que varios participantes puedan comunicarse a través del envío de emails a una única dirección del grupo. Con esta función colaborativa puede crear y gestionar listas de correo que incluyan tanto a usuarios Exchange como a contactos externos.

**Esta guía explica cómo usar los grupos de Exchange a través del área de cliente de OVHcloud y Outlook Web App (OWA).**


## Requisitos

- Tener acceso al [panel de control de OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- Tener una [solución Exchange de OVHcloud](https://www.ovh.es/emails/hosted-exchange/) activa.


## Procedimiento

### Paso 1: Crear un grupo nuevo

Primero acceda a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager), diríjase a la sección «Web», y seleccione su servicio Exchange de la columna que está debajo de `Microsoft`{.action} `Exchange`{.action} del menú de la izquierda. Haga clic en la pestaña `Grupos`{.action} del menú horizontal.

![contactgroups](images/exchange-groups-step1.png){.thumbnail}

Al hacer clic en `Crear un grupo de contactos`{.action} se abrirá una nueva ventana donde podrá configurar las opciones del grupo:

![contactgroups](images/exchange-groups-step2.png){.thumbnail}

|Nombre|Descripción|
|---|---|
|Dirección de correo electrónico|La nueva dirección que mandará los mensajes a la lista de correo. Tenga en cuenta que no puede introducir una dirección de correo ya existente.|
|Nombre del grupo|El nombre que aparecerá en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager) y en el [webmail de OVHcloud](https://www.ovh.es/mail/) (OWA).|
|Tamaño máx. de entrada/salida|Puede especificar el tamaño máximo de sus correos entrantes y salientes.|
|Ocultar en Outlook|Si marca esta casilla, la dirección del grupo no aparecerá en la lista de direcciones del servicio Exchange.|
|Autenticación obligatoria|Si marca esta casilla, los usuarios de la misma plataforma serán los únicos que podrán mandar un mensaje utilizando la dirección del grupo.|

> [!primary]
>
Tenga en cuenta que las opciones «Administrar suscriptores» y «Administrar bajas de suscriptores» se han desactivado por razones de seguridad. Lamentamos las molestias ocasionadas.
>

Haga clic en `Siguiente`{.action} para continuar.

Seleccione en la segunda pantalla los miembros del grupo y elija los «Administradores». Solo se podrán seleccionar direcciones de correo y contactos externos creados previamente en el servicio.

![contactgroups](images/exchange-groups-step3.png){.thumbnail}

Tenga en cuenta que los administradores también deben haber sido configurados como «Contactos» para recibir los correos del grupo.
Haga clic en `Siguiente`{.action} para continuar y termine la configuración de sus opciones pulsando en `Confirmar`{.action}.


### Paso 2: Gestionar los grupos

Su grupo recién creado estará operativo en unos minutos. Puede modificar las configuraciones descritas más abajo desde la lista de grupo haciendo clic en el icono `...`{.action} y seleccionándolas en el menú.

![contactgroups](images/exchange-groups-step4.png){.thumbnail}

Además, también aparecerá el elemento del menú `Gestionar las delegaciones`{.action}. Con esta opción podrá delegar el acceso del mismo modo que en una cuenta Exchange. Encontrará todos los detalles en [esta guía](../exchange_2013_dar_permisos_full_access_a_una_cuenta/).

![contactgroups](images/exchange-groups-step5.png){.thumbnail}

> [!primary]
>
Tenga en cuenta que cualquier cambio del servicio puede tardar unos minutos en efectuarse. Puede comprobar el estado de la mayoría de operaciones seleccionando `More+`{.action} y `Tareas recientes`{.action} en el menú horizontal.
>


### Paso 3: Enviar mensajes a un grupo en OWA

Ahora puede probar su lista de correo a través del [webmail de OVHcloud](https://www.ovh.es/mail) (OWA) simplemente mandando un correo a la dirección del grupo.

![contactgroups](images/exchange-groups-step6.png){.thumbnail}


## Más información

[Delegar permisos en una cuenta Exchange](../exchange_2013_dar_permisos_full_access_a_una_cuenta/)

[Usar Outlook Web App con una cuenta Exchange](../exchange_2016_guia_de_uso_de_outlook_web_app/)

[Compartir calendarios en OWA](../exchange_2016_compartir_un_calendario_con_el_webmail_owa/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.