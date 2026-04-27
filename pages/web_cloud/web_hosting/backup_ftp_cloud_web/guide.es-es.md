---
title: "Exportar la copia de seguridad del espacio FTP de su hosting Cloud Web"
excerpt: "Descubra cómo descargar una copia de seguridad del espacio FTP de un alojamiento Cloud Web"
updated: 2026-03-31
---

## Objetivo

Su hosting Cloud Web dispone de un espacio de almacenamiento en el que podrá alojar sus sitios web o aplicaciones.

**Esta guía explica cómo descargar una copia de seguridad del espacio FTP de un alojamiento Cloud Web**.

> [!primary]
> 
> Las copias de seguridad ofrecidas por OVHcloud para los alojamientos Cloud Web son extracontractuales. que podrá utilizar para completar sus propias copias de seguridad en situaciones urgentes. Por lo tanto, le recomendamos que realice regularmente sus propias copias de seguridad para paliar posibles pérdidas de datos.
> 
> Si realiza una copia de seguridad para su sitio web y utiliza una base de datos, realice una copia de seguridad de la misma. No dude en consultar nuestra guía para [obtener una copia de seguridad de su base de datos](/pages/web_cloud/web_hosting/sql_database_export).
> 

**Esta guía explica cómo recuperar y restaurar una copia de seguridad FTP de un alojamiento Cloud Web.**

## Requisitos

- Tener un [hosting Cloud Web.](/links/web/hosting-cloud-web-offer)
- Tener acceso a la dirección de correo electrónico de contacto asociada a su ID de cliente.

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

Un hosting Cloud Web dispone de copias de seguridad automáticas activadas a las siguientes frecuencias:

- el mismo día, efectuada después de las 0.00 horas.
- el día anterior, realizado después de las 0.00 horas.
- el penúltimo, realizado después de las 0.00 horas.
- el domingo anterior, efectuada después de las 01:00 horas.

OVHcloud solo podrá ofrecer las copias de seguridad antes mencionadas, siempre que su hosting Cloud Web ya exista en las fechas indicadas y siempre que la infraestructura esté disponible al solicitar el backup.

### Obtener una copia de seguridad

A diferencia de los alojamientos compartidos de OVHcloud, no es posible restaurar el espacio FTP en un clic desde el área de cliente de OVHcloud.

Se genera un enlace de descarga de la copia de seguridad y se envía por correo electrónico a la dirección de correo electrónico asociada al ID de cliente administrador del hosting Cloud Web.

<!-- CP-STEPS-START:access-ftp-backup -->
Haga clic en las fichas siguientes para ver cada una de las **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el Cloud Web correspondiente.
>>
>> ![Alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Seleccione la pestaña `FTP - SSH`{.action} y haga clic en el botón `Generar una copia de seguridad`{.action} a la derecha.
>>
>> ![Botón Generar una copia de seguridad](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva ventana, seleccione una de las copias de seguridad disponibles y haga clic en `Siguiente`{.action}.
>>
>> ![Selección de la copia de seguridad](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-1.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Se abrirá una segunda ventana indicándole que el enlace de descarga del archivo de backup se enviará por correo electrónico y que OVHcloud no restaurará el alojamiento Cloud Web automáticamente.
>>
>> ![Confirmación de generación de la copia de seguridad](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-2.png){.thumbnail}
>>
>> Haga clic en `Aceptar`{.action} para confirmar su solicitud.
>>
> **Etapa 5**
>>
>> Si la generación de la copia de seguridad se ha iniciado correctamente, aparecerá el siguiente mensaje en su área de cliente de OVHcloud:
>>
>> ![Mensaje de progreso de la copia de seguridad](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/message-backup-progress.png){.thumbnail}
>>
>> La generación de la copia de seguridad tarda entre 10 y 15 minutos.
<!-- CP-STEPS-END:access-ftp-backup -->

### Descargar la copia de seguridad

Una vez finalizada la generación del backup, recibirá un mensaje de correo electrónico en la dirección asociada al usuario de administrador de su hosting Cloud Web.

El mensaje de correo electrónico incluye un enlace de descarga **válido durante 9 días** desde la recepción del mensaje de correo electrónico:

![E-mail de descarga del backup](/pages/assets/screens/email-sending-to-customer/cloud-web/backup-information.png){.thumbnail}

El archivo así descargado está en formato *.tar.gz*.

### Restaurar la copia de seguridad

Una vez que haya cargado los archivos, podrá [conectarse a su espacio FTP](/pages/web_cloud/web_hosting/ftp_connection) utilizando un programa FTP como [Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) y sustituir los archivos que desee por los recuperados.

> [!primary]
>
> Utilice los puertos indicados en el [área de cliente de OVHcloud](/links/manager) para conectarse por SFTP y SSH, ya que el puerto 22 no funcionará para su hosting Cloud Web.
>

## Más información 

[Conectarse al espacio de almacenamiento de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)

[Conectarse mediante Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community)