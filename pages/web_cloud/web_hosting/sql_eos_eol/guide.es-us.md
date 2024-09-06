---
title: "Anuncios de fin de venta/vida base de datos SQL"
excerpt: "Anuncios de fin de venta/vida base de datos SQL"
updated: 2024-09-06
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

Los productos cubiertos por estos anuncios de fin de venta y fin de vida son los servicios de base de datos de SQL Web Hosting, a los que se puede acceder a través de la red Web Hosting. Para más información, consulte la [política de fin de vida útil de las bases de datos administradas](/pages/web_cloud/web_cloud_databases/eol-policy).

|Versión del DBMS|Anuncio de fin de vida|Fin de venta|Fin de soporte|
|---|---|---|---|
|MySQL 5.7|2023-11-16|2024-02-16|2024-05-17|
|MySQL 8.0|Por determinar|Por determinar|Por determinar|

> [!primary]
>
> Los servicios de bases de datos SQL incluidos con los planes de hosting de OVHcloud no pueden actualizarse directamente desde el área de cliente de OVHcloud ni a través de la base de datos al final de la venta/vida.
>

Si desea anticiparse al final de la vida o realizar las acciones manualmente, deberá realizar las siguientes acciones:

- Caso n° 1: dispone de una sola base de datos incluida con su plan de hosting:
    - Compruebe que el contenido de la base de datos es compatible con un DBMS más reciente.
    - [Exportar contenido de base de datos](/pages/web_cloud/web_hosting/sql_database_export).
    - Elimine la antigua base de datos.
    - [Cree una nueva base de datos](/pages/web_cloud/web_hosting/sql_create_database) en una versión de SGBD más reciente.
    - [Importe el contenido de la antigua base de datos en la nueva](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
    - Asocie la nueva base de datos a su sitio web.

- Caso 2: dispone de varias bases de datos incluidas con su plan de hosting:
    - Compruebe que el contenido de la base de datos es compatible con un DBMS más reciente.
    - Como precaución, [exporte el contenido de la base de datos](/pages/web_cloud/web_hosting/sql_database_export).
    - [Cree una nueva base de datos](/pages/web_cloud/web_hosting/sql_create_database) en una versión de SGBD más reciente.
    - [Duplique el contenido de la antigua base de datos en la nueva](/pages/web_cloud/web_hosting/copy_database).
    - Asocie la nueva base de datos a su sitio web.
    - Elimine la antigua base de datos.

## Más información

[Conectarse al área de cliente de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login).

[Crear una base de datos en un alojamiento web](/pages/web_cloud/web_hosting/sql_create_database).

[Exportar una copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export).

[Duplicar el contenido de una base de datos en otra](/pages/web_cloud/web_hosting/copy_database).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).