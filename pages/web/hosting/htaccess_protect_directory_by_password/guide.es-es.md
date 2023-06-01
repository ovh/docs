---
title: "Tutorial - Proteger un directorio o el panel de administración de su sitio web con los archivos .htaccess y .htpasswd"
slug: compartido-htaccess-como-proteger-el-acceso-a-un-directorio-por-autenticacion
excerpt: "Descubra cómo proteger un repertorio o el acceso a la administración de su sitio web mediante autenticación con los archivos .htaccess y .htpasswd"
section: Reescritura y autenticación
order: 02
updated: 2023-06-01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 01/06/2023"**

## Objetivo

Este tutorial explica cómo crear la autenticación "usuario/contraseña" para acceder a la totalidad o parte de su sitio web a través de un navegador de internet. 

Utilizando dos archivos de configuración (HTTP) Apache que quiere situar en [el espacio FTP](/pages/web/hosting/ftp_connection/) de su alojamiento web: 

- "**.htaccess**": para más información sobre las funcionalidades de este fichero, consulte nuestro tutorial sobre ["Operaciones realizables con un fichero ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do/).
- "**.htpasswd**": además de este tutorial, consulte la [documentación oficial de Apache](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) relativa a este archivo.

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) o con el editor del servicio. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>
> Deberá configurar los siguientes ejemplos en archivos con los nombres ".htaccess" y ".htpasswd". Atención: Las reglas que usted establezca en estos archivos tienen consecuencias directas en su sitio web. Compruebe sistemáticamente las reglas que añade antes de aplicarlas a su sitio web. 
> 

**Descubra cómo proteger un repertorio o el acceso a la parte de administrador de su sitio web mediante autenticación con los archivos ".htaccess" y ".htpasswd".**

## Requisitos

- Tener un [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/).
- Estar conectado a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Disponer de las claves de conexión a [el espacio FTP de su alojamiento](/pages/web/hosting/ftp_connection/).

## Procedimiento

## Más información <a name="go-further"></a>