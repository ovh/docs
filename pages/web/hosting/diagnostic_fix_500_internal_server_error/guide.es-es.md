---
title: ¿Qué hacer en caso de error 500 Internal Server Error?
excerpt: Diagnosticar los casos más comunes de errores 500
updated: 2023-05-16
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Los errores 500 "Internal Server Error" pueden afectar a la totalidad o parte de su sitio web, ser aleatorios o permanentes. También pueden aparecer como una página en blanco.

![error500](images/error-500-2.png){.thumbnail}

A veces también se actualizan **automáticamente** en un componente del sitio web, por lo que no tiene que realizar ninguna acción.

**Esta guía explica cómo diagnosticar los casos más comunes de errores 500.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.
>


## Requisitos

- Tener un [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/).
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Estar actualizado en los [pagos](/pages/account/billing/invoice_management#pay-bills) y [renovaciones](/pages/account/billing/how_to_use_automatic_renewal#renewal-management) de los servicios asociados (dominio y alojamiento web).

## Procedimiento

Antes de continuar, compruebe su sitio web en varios dispositivos y navegadores. Si en algunos casos no aparece el error 500 (por ejemplo, a través de un navegador diferente del suyo), es porque no está asociado a sus servicios de OVHcloud. Reinicie sus dispositivos y, si es necesario, contacte con un técnico informático cercano a su domicilio.

Un sitio web está formado por un **código fuente** (los archivos en .php, por ejemplo, visibles durante una conexión a su alojamiento en [FTP](/pages/web/hosting/ftp_connection)), al que se añade a menudo una **base de datos**.
<br>A pesar del error 500, es altamente recomendable realizar una copia de seguridad local de todos sus datos antes de realizar cualquier otra operación :

- Consulte esta [guía](/pages/web/hosting/ftp_filezilla_user_guide) para obtener una copia de su código fuente.
- Si su sitio web utiliza una base de datos, consulte también este [documento](/pages/web/hosting/sql_database_export) para obtener una copia de la misma.

En caso de error 500, es totalmente posible realizar una [restauración](#restore) del sitio web. Sin embargo, es preferible realizar un diagnóstico a fondo para determinar el origen exacto del error.

### Comprobar los logs de su alojamiento

En primer lugar, consulte esta [guía](/pages/web/hosting/logs_and_statistics) para buscar la causa del error 500 en los logs de su alojamiento.

### Poner un sitio web en modo de desarrollo

Para identificar los posibles errores de PHP, ponga el alojamiento en modo `desarrollo` utilizando estas [indicaciones](/pages/web/hosting/ovhconfig_modify_system_runtime#2-comprobar-la-configuracion-del-alojamiento-web).

### Probar el archivo .htaccess

Un error 500 puede estar relacionado con una anomalía en un archivo `.htaccess`. Este archivo suele estar situado en el primer nivel de la carpeta que contiene el sitio web en su FTP.

Para comprobarlo, [conéctese por FTP](/pages/web/hosting/ftp_connection) al alojamiento.

Cambie el nombre del archivo a `.htaccess.old` y permanezca en su sitio web.

Si este último vuelve a estar accesible, entonces el `.htaccess` está en cuestión. Por lo tanto, deberá modificarse. Si lo desea, contacte con uno de nuestros [partners](https://partner.ovhcloud.com/es-es/directory/) al respecto.

### Comprobar los permisos de carpetas y archivos

Los archivos y carpetas que componen el sitio web disponen de un cierto nivel de "permisos" en lectura, escritura y ejecución. para protegerlos contra manipulación maliciosa o incorrecta.

Un error 500 puede estar relacionado con un nivel de permisos de acceso incorrecto en algunas de las carpetas o archivos de su sitio web.

Para acceder a estos archivos, conéctese por FTP al alojamiento siguiendo la [guía](/pages/web/hosting/ftp_connection).

La guía "[Uso de FileZilla con el alojamiento](/pages/web/hosting/ftp_filezilla_user_guide#permisos-de-los-archivos-y-carpetas)" le ayudará a comprobar lo siguiente :

- La **raíz** del alojamiento (es el directorio anotado `/` o `.` en su programa FTP) debe estar obligatoriamente en permisos 705 (estos son los permisos por defecto). Le recomendamos que no modifique este nivel de permisos.
- Los expedientes deben estar en los derechos 705.
- Los archivos deben estar habilitados 604.

### Acceder a los detalles de los errores en los scripts

Por motivos de seguridad, su sitio web oculta los detalles sobre el origen del error 500 a cualquier persona que se conecte a él a través de un navegador web.

Si usted o su desarrollador desea tener acceso a estos detalles, puede conectarse a su sitio web a través de una [conexión SSH](/pages/web/hosting/ssh_on_webhosting) a través de la fórmula de alojamiento [Pro2014](https://www.ovhcloud.com/es-es/web-hosting/professional-offer/) o superior.

### Comprobar el estado de la base de datos

Para más información sobre los errores que puedan estar relacionados con la base de datos de su sitio web, consulte nuestra guía ["Resolver los errores más frecuentes asociados a las bases de datos"](/pages/web/hosting/diagnóstico_database_errors).

### Restaurar el sitio web a su estado anterior <a name="restore"></a>

> [!warning]
>
> La restauración del código fuente del sitio web se extenderá a todos los sitios web del alojamiento de OVHcloud.
> 
> Al restaurar un sitio web, el contenido del espacio FTP o el de la base de datos se sustituyen por una copia de seguridad. No podrá recuperar los datos del servidor justo antes de la restauración.
>

Para restaurar el código fuente del sitio web, consulte nuestra guía [Restaurar el espacio de almacenamiento de un alojamiento web](/pages/web/hosting/ftp_save_and_backup).

Si su sitio web incluye una base de datos, consulte nuestra guía [Importar una copia de seguridad en la base de datos de un alojamiento web](/pages/web/hosting/sql_importing_mysql_database#restaurar-una-copia-de-seguridad-desde-el-area-de-cliente) para restaurarla a un estado anterior.

Por último, si se ha producido un error al actualizar la versión PHP del alojamiento, consulte nuestra guía "[Cambiar la versión de PHP de un alojamiento web](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)" para volver a la configuración anterior.


## Más información <a name="gofurther"></a>

[¿Qué hacer si mi sitio web no está accesible?](/pages/web/hosting/diagnostic-website-not-accessible)

[¿Qué hacer en caso de error « La conexión no es privada »?](/pages/web/hosting/diagnostic-not-secured)

[¿Qué hacer en caso de página del « Index of » ?](/pages/web/hosting/diagnostic-index-of)

[¿Qué hacer en caso de página 403 forbidden?](/pages/web/hosting/diagnostic_403_forbidden)

[Resolver los errores más frecuentes asociados a las bases de datos](/pages/web/hosting/diagnosis_database_errors)

[Mi sitio es lento. ¿Qué hacer?](/pages/web/hosting/diagnostic_slownesses)

[RSolucionar el error «Sitio no instalado»](/pages/web/hosting/multisites_website_not_installed)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
