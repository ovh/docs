---
title: Exportar la copia de seguridad del espacio FTP de su hosting Cloud Web
slug: backup_ftp_cloud_web
section: Backups
order: 01
---

**Última actualización: 13/09/2022**

> [!primary]
>
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Su hosting Cloud Web dispone de un espacio de almacenamiento en el que podrá alojar sus sitios web o aplicaciones.

**Esta guía explica cómo descargar una copia de seguridad del espacio FTP de un alojamiento Cloud Web**.

> [!primary]
> 
> Las copias de seguridad ofrecidas por OVHcloud para los alojamientos Cloud Web son extracontractuales. que podrá utilizar para completar sus propias copias de seguridad en situaciones urgentes. Por lo tanto, le recomendamos que realice regularmente sus propias copias de seguridad para paliar posibles pérdidas de datos.
> 
> Si realiza una copia de seguridad para su sitio web y utiliza una base de datos, realice una copia de seguridad de la misma. No dude en consultar nuestra guía para [obtener una copia de seguridad de su base de datos](https://docs.ovh.com/es/hosting/web_hosting_exportacion_de_una_base_de_datos/).
> 

**Esta guía explica cómo recuperar y restaurar una copia de seguridad FTP de un alojamiento Cloud Web.**

## Requisitos

- Tener un [hosting Cloud Web.](https://www.ovhcloud.com/es-es/web-hosting/cloud-web-offer/){.external}
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
- Tener acceso a la dirección de correo electrónico de contacto asociada a su ID de cliente.

## Procedimiento

Un hosting Cloud Web dispone de copias de seguridad automáticas activadas a las siguientes frecuencias:

- el mismo día, efectuada después de las 0.00 horas.
- el día anterior, realizado después de las 0.00 horas.
- el penúltimo, realizado después de las 0.00 horas.
- el domingo anterior, efectuada después de las 01:00 horas.

OVHcloud solo podrá ofrecer las copias de seguridad antes mencionadas, siempre que su hosting Cloud Web ya exista en las fechas indicadas y siempre que la infraestructura esté disponible al solicitar el backup.

### Obtener una copia de seguridad

A diferencia de los alojamientos compartidos de OVHcloud, no es posible restaurar el espacio FTP en un clic desde [el área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

Se genera un enlace de descarga de la copia de seguridad y se envía por correo electrónico a la dirección de correo electrónico asociada al ID de cliente administrador del hosting Cloud Web.

#### Paso 1 - Generar el enlace de recuperación enviado por correo electrónico

Para generar el enlace de recuperación, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, acceda a la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el Cloud Web correspondiente. 

Seleccione la pestaña `FTP - SSH`{.action} y haga clic en el botón `Generar una copia de seguridad`{.action} a la derecha.

![backupftpcw](images/GenerateABackup.png){.thumbnail}

En la nueva ventana, seleccione una de las copias de seguridad disponibles y haga clic en `Siguiente`{.action}.

![backupftpcw](images/GenerateABackup2.png){.thumbnail}

Se abrirá una segunda ventana en la que deberá indicar que el enlace de recuperación del archivo de backup se enviará por correo electrónico y que OVHcloud no restaurará el alojamiento Cloud Web automáticamente.

![backupftpcw](images/GenerateABackup3.png){.thumbnail}

Haga clic en `Confirmar`{.action} para aceptar su solicitud.

Si la generación de la copia de seguridad se ha iniciado correctamente, aparecerá el siguiente mensaje en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}:

![backupftpcw](images/BackupInProgress.png){.thumbnail}

La generación de la copia de seguridad tarda entre 10 y 15 minutos en realizarse.

#### Paso 2 - Descargar la copia de seguridad

Una vez finalizada la generación del backup, recibirá un mensaje de correo electrónico en la dirección asociada al usuario de administrador de su hosting Cloud Web.<br>
El mensaje de correo electrónico incluye un enlace de descarga **válido durante 9 días** desde la recepción del mensaje de correo electrónico:

![backupftpcw](images/mailBackup.png){.thumbnail}

El archivo así descargado está en formato *.tar.gz*.

### Restaurar la copia de seguridad

Una vez que haya cargado los archivos, podrá [conectarse a su espacio FTP](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/) utilizando un programa FTP como [Filezilla](https://docs.ovh.com/es/hosting/web_hosting_guia_de_uso_de_filezilla/) y sustituir los archivos que desee por los recuperados.

> [!primary]
>
> Utilice los puertos indicados en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} para conectarse por SFTP y SSH, ya que el puerto 22 no funcionará para su hosting Cloud Web.
>

## Más información 

[Conectarse al espacio de almacenamiento de un alojamiento web](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/){.external}

[Conectarse mediante Filezilla](https://docs.ovh.com/es/hosting/web_hosting_guia_de_uso_de_filezilla/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>

