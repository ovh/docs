---
title: "Migrar un sitio web WordPress a OVHcloud"
excerpt: "Descubra cómo migrar un sitio web WordPress y sus servicios asociados a OVHcloud"
updated: 2024-06-28
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Este tutorial explica paso a paso cómo migrar un sitio web WordPress y todos sus servicios asociados a OVHcloud.

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Este tutorial le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el [editor del CMS WordPress](https://wordpress.com/es/support/){.external}. Nosotros no podremos asistirle. Para más información, consulte la sección ["Más información"](#go-further) de este tutorial.
>

**Descubra cómo migrar su sitio web WordPress y los servicios asociados a OVHcloud.**

## Requisitos

- Estar conectado a la interfaz de administración de WordPress

## Procedimiento

### Etapa 1: hacer una copia de seguridad de los archivos y la base de datos de su sitio web WordPress

En primer lugar, deberá descargar todos los archivos relativos a su sitio web WordPress. Esto incluye los archivos de WordPress y la base de datos. A continuación, consulte nuestra guía "[Guardar una copia de seguridad de su sitio WordPress](/pages/web_cloud/web_hosting/how_to_backup_your_wordpress)".

### Etapa 2: transferir su sitio web WordPress a OVHcloud

Una vez que haya guardado los archivos y la base de datos de su sitio web WordPress, transfiéralos a su alojamiento web de OVHcloud. Si todavía no tiene un alojamiento web de OVHcloud, siga el paso 1 de la guía "[Migrar un sitio web y los servicios asociados a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

#### Etapa 2.1: transferir los archivos de su sitio web WordPress

> [!primary]
>
> Le recomendamos que utilice el programa [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) para transferir sus archivos WordPress a su alojamiento web.
>

Para transferir los archivos relativos a su sitio web WordPress, conéctese primero al [espacio de almacenamiento FTP de su alojamiento web de OVHcloud](/pages/web_cloud/web_hosting/ftp_connection).

Una vez que se haya conectado al espacio de almacenamiento FTP de su alojamiento web de OVHcloud, vaya al directorio raíz "www" (o a otra carpeta raíz que haya creado previamente). Si los archivos de copia de seguridad están comprimidos (comprimidos), descomprima los archivos en una carpeta vacía de su ordenador antes de cargarlos en el directorio raíz de su alojamiento web de OVHcloud.

#### Etapa 2.2: importar la base de datos de su sitio web WordPress

Si aún no tiene ninguna, [cree una nueva base de datos](/pages/web_cloud/web_hosting/sql_create_database) y, a continuación, [importe la copia de seguridad en la nueva base de datos](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

> [!primary]
>
> OVHcloud ofrece servidores de bases de datos Web Cloud Databases. Si desea utilizar esta oferta con su sitio web, consulte toda la documentación disponible sobre este producto en nuestra [página dedicada](/links/web/databases).
>

### Etapa 3: actualizar la información de la base de datos

A continuación, deberá vincular su sitio web WordPress a su base de datos. Estos cambios deben realizarse en el archivo de configuración **"wp-config.php"**. Para consultar todas las acciones necesarias, consulte la guía "[Cambiar la contraseña de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_change_password)".

### Migrar otros servicios asociados a su sitio web WordPress

Acaba de migrar sus archivos y su base de datos WordPress. Si quiere migrar otros servicios, como el correo electrónico, el dominio o las zonas DNS, siga los pasos indicados en la guía "[Migrar un sitio web y los servicios asociados a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" en el apartado correspondiente a los servicios que quiera migrar. En esta guía ya se explican algunos de los pasos que debe seguir.

## Más información <a name="go-further"></a>

[Información general sobre el correo en alojamiento compartido](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

[Migrar un sitio web y los servicios asociados a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

[Importar una base de datos MySQL](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Crear una base de datos en un alojamiento web](/pages/web_cloud/web_hosting/sql_create_database).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).