---
title: 'Compartir carpetas en OWA'
slug: exchange_2016_compartir_una_carpeta_con_el_webmail_owa
legacy_guide_number: g1929
excerpt: 'Cómo compartir carpetas entre cuentas Exchange'
section: 'Outlook Web Application (OWA)'
order: 5
---


**Última actualización: 07/04/2020**

## Objetivo

Delegar permisos sobre toda una cuenta de correo no siempre es recomendable. La funcionalidad de carpetas compartidas de Exchange permite conceder acceso a determinadas carpetas de la cuenta mediante la asignación de permisos específicos.

**Esta guía explica cómo compartir carpetas y definir los permisos de acceso utilizando Outlook Web App (OWA).**

## Requisitos

- Tener una [solución de Exchange en OVHcloud](https://www.ovhcloud.com/es/emails/hosted-exchange/) ya configurada.
- Tener acceso a la cuenta de Exchange (dirección de correo electrónico y contraseña).


## Procedimiento

### 1. Asignar permisos de acceso a una carpeta

Inicie sesión en su cuenta de Exchange a través del [webmail de OVHcloud](https://www.ovhcloud.com/es/mail/). Haga clic derecho en la carpeta que desea compartir y seleccione la opción `Permisos...`{.action}.

![sharefolder](images/exchange-folder-step1.png){.thumbnail}

Haga clic en `+`{.action} para añadir al usuario con el que quiere compartir la carpeta. Empiece a escribir para ver las sugerencias de sus contactos, introduzca una dirección de correo electrónico completa o utilice el `Directorio de la búsqueda`{.action}.

Existen conjuntos de permisos predefinidos (Nivel de permiso). Lo más sencillo es elegir uno de estos niveles (por ejemplo, «Autor») para ver qué permisos incluye. A continuación, podrá personalizar los permisos seleccionando las diferentes opciones.

![sharefolder](images/exchange-folder-step2aag.gif){.thumbnail}

#### Detalles de los permisos

- **Lectura**

|Permiso|Descripción|
|---|---|
|Ninguna|El usuario no puede ver el contenido de la carpeta.|
|Detalles completos|El usuario puede ver el contenido de la carpeta.|


- **Eliminar acceso**

|Permiso|Descripción|
|---|---|
|Ninguna|El usuario no puede eliminar ningún elemento.|
|Propios|El usuario puede eliminar los elementos creados por él mismo.|
|Todos|El usuario puede eliminar cualquier elemento de la carpeta.|


- **Escritura**

|Permiso|Descripción|
|---|---|
|Crear elementos|El usuario puede crear nuevos elementos en la carpeta.|
|Crear subcarpetas|El usuario puede crear nuevas subcarpetas en la carpeta compartida.|
|Editar propios|El usuario puede editar los elementos creados por él mismo.|
|Editar todo|El usuario puede editar cualquier elemento de la carpeta.|


- **Otros**

|Permiso|Descripción|
|---|---|
|Propietario de la carpeta|El usuario tiene los mismos permisos sobre la carpeta que el propietario (todos los permisos).|
|Contacto de carpeta|El usuario recibirá notificaciones y solicitudes relativas a la carpeta (cambio de estado, solicitudes de permisos, mensajes de error, etc.).|
|Carpeta visible|La carpeta aparecerá en la cuenta del usuario.|

> [!primary]
>**Subcarpetas**
> 
> - Las subcarpetas creadas en una carpeta compartida tendrán automáticamente los mismos permisos que la carpeta principal. Si otorga nuevos permisos a una carpeta y quiere que sus subcarpetas también se compartan, deberá establecer permisos **para cada subcarpeta**.
> 
> - Si comparte una **subcarpeta** de una carpeta existente que no tenga permisos establecidos, deberá marcar al menos la opción de «Carpeta visible» en la **carpeta principal**. De lo contrario, la subcarpeta no aparecerá en la otra cuenta del usuario. Asimismo, tenga en cuenta que el usuario no podrá acceder al contenido de la carpeta principal a no ser que le conceda permisos de lectura.
> 
> - Los usuarios no podrán eliminar subcarpetas que no hayan creado ellos mismos.
> 
> - Los usuarios con permisos de «Propietario» en una subcarpeta podrán modificar el nombre de esta última y asignarle permisos.
>


### 2. Acceder a una carpeta compartida

![sharefolder](images/exchange-folder-step3.png){.thumbnail}

Inicie sesión en su cuenta de Exchange a través del [webmail de OVHcloud](https://www.ovhcloud.com/es/mail/). En el menú de la izquierda, haga clic derecho en el nombre de su cuenta y seleccione la opción `Agregar carpeta compartida...`{.action}. En la nueva ventana, introduzca la cuenta del usuario que haya compartido la carpeta. Empiece a escribir para ver las sugerencias de sus contactos, introduzca una dirección de correo electrónico completa o utilice el `Directorio de la búsqueda`{.action}. Haga clic en `Agregar`{.action}. La nueva carpeta compartida aparecerá inmediatamente debajo de las demás carpetas.


## Más información

[Usar Outlook Web App con una cuenta Exchange](../exchange_2016_guia_de_uso_de_outlook_web_app)

[Delegar permisos en una cuenta Exchange](../exchange_2013_dar_permisos_full_access_a_una_cuenta/)

[Compartir un calendario con el webmail OWA](../exchange_2016_compartir_un_calendario_con_el_webmail_owa)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
