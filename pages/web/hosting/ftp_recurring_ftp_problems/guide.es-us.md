---
title: Resolver los errores recurrentes durante el uso de un programa FTP
excerpt: Encuentre aquí las anomalías más frecuentes asociadas a su programa FTP
slug: agrupe-los-problemes-ftp-recurrents
section: FTP y SSH
order: 04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 05/01/2022**

## Objetivo

El uso de software FTP durante la conexión a su [hosting Web Cloud](https://www.ovhcloud.com/es/web-hosting/) puede provocar diferentes anomalías. Esta guía explica cómo solucionar los problemas más comunes.

**Esta guía explica cómo solucionar los errores relacionados con el software FTP.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.
>

## Requisitos

- Tener contratado un plan de [hosting Web Cloud](https://www.ovhcloud.com/es/web-hosting/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

### "Este servidor no soporta FTP en TLS" (FileZilla)

![filezilla_error](images/filezilla_error.png){.thumbnail}

Este mensaje en el programa [FileZilla](https://docs.ovh.com/us/es/hosting/web_hosting_guia_de_uso_de_filezilla/) indica que no ha activado la opción SFTP o SSH desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). Por ese motivo, la información intercambiada entre el servidor de hosting de OVHcloud y su ordenador no se cifrará.

Si los datos que desea intercambiar por este medio no son confidenciales, haga clic en `Aceptar`{.action}.

En caso contrario, acceda al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), en la sección `Web Cloud`{.action} y, seguidamente, `Alojamientos`{.action}. Seleccione el alojamiento correspondiente y abra la pestaña `FTP-SSH`{.action}.

Si dispone de un alojamiento [Perso](https://www.ovhcloud.com/es/web-hosting/personal-offer/), marque la casilla `Desactivado`{.action} en la columna `SFTP`{.action} y espere unos minutos.

Si dispone de un alojamiento [Pro](https://www.ovhcloud.com/es/web-hosting/professional-offer/) o [Performance](https://www.ovhcloud.com/es/web-hosting/performance-offer/), haga clic en el botón `...`{.action} a la derecha del usuario FTP correspondiente y seleccione `Editar`{.action}.

Seleccione `SFTP`{.action} o `Activado`{.action} (para activar el protocolo SSH en su alojamiento), haga clic en `Siguiente`{.action} y luego en `Aceptar`{.action}. Espere unos minutos.

> [!primary]
>
> Para más información sobre los errores, consulte la sección `Diagnóstico` de nuestras guías de [Hosting](../).
>

### He transferido mis archivos con un programa FTP, pero mi sitio web no aparece.

En primer lugar, compruebe que los archivos y carpetas del sitio web estén presentes en la [carpeta raíz](https://docs.ovh.com/us/es/hosting/web_hosting_publicar_un_sitio_web_en_internet/#23-cargar-los-archivos-en-el-espacio-de-almacenamiento) del alojamiento.

Si ha realizado alguna modificación en sus [servidores o su zona DNS](https://docs.ovh.com/us/es/domains/web_hosting_como_editar_mi_zona_dns/#entender-el-concepto-de-dns) hace menos de 48 horas, espere y reinicie regularmente sus dispositivos para vaciar su caché.

### Mis claves FTP no funcionan.

Si no puede autenticarse, modifique su contraseña FTP siguiendo las instrucciones de esta [guía](https://docs.ovh.com/us/es/hosting/cambiar-contrasena-usuario-ftp/).

### Encuentro errores aleatorios en mi sitio web.

La falta de espacio en su alojamiento compartido puede provocar fallos de funcionamiento en su sitio web al intentar modificarlo o actualizarlo.

Para comprobar el espacio de almacenamiento restante del alojamiento, conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). Haga clic en `Web Cloud`{.action} y, seguidamente, en `Alojamientos`{.action}. Seleccione el alojamiento correspondiente.

La cantidad de datos almacenados en el servidor de alojamiento (excluyendo las bases de datos) se muestra en la sección `Información general`{.action} > `Espacio en disco`.

![disk_space](images/disk_space.png){.thumbnail}

### No puedo transferir mis archivos al servidor FTP.

Compruebe que su programa FTP esté conectado en "Modo Pasivo" (Modo de configuración de un servidor FTP en el que el servidor determina el puerto de conexión).

Por ejemplo, en [Filezilla](https://docs.ovh.com/es/hosting/web_hosting_guia_de_uso_de_filezilla/), haga clic en `Edición`{.action}, `Opciones`{.action}, `FTP`{.action} y seleccione `Pasivo (recomendado)`{.action}.

Limite también el tamaño de sus transferencias de datos (no podrá enviar más de **5.000 archivos y carpetas** a los servidores compartidos de OVHcloud en una sola transferencia). Realice sus importaciones varias veces si es necesario utilizando carpetas comprimidas.

Si dispone de una [fórmula Pro](https://www.ovhcloud.com/es/web-hosting/professional-offer/) o [Performance](https://www.ovhcloud.com/es/web-hosting/performance-offer/), utilice preferentemente el [protocolo SSH](https://docs.ovh.com/us/es/hosting/web_hosting_ssh_en_alojamiento_compartido/) para importar los archivos en el espacio de almacenamiento de los archivos del alojamiento.

### No puedo eliminar el enlace simbólico "index.html" en mi espacio FTP.

Este enlace se instala por defecto en los alojamientos compartidos de OVHcloud. El cartel dice:

![site_under_construction](images/site_under_construction.png){.thumbnail}

Si no ha utilizado la funcionalidad "[Módulo en 1 clic](https://docs.ovh.com/us/es/hosting/modulos-en-un-clic/)" para crear su sitio web, deberá utilizar el programa [Net2FTP](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/#21-conexion-mediante-un-explorador-ftp) accesible desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) para eliminar manualmente la página "Sitio en construcción".

## Más información <a name="gofurther"></a>

[Uso de FileZilla con el alojamiento](https://docs.ovh.com/us/es/hosting/web_hosting_guia_de_uso_de_filezilla/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, consulte nuestros distintos [servicios de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.