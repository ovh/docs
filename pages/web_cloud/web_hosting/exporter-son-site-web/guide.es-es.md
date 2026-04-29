---
title: "Exportar un sitio web"
excerpt: "Cómo exportar un sitio web de OVHcloud"
updated: 2026-05-04
---

## Objetivo

Esta guía explica los pasos que debe seguir para exportar todos los elementos de su sitio web al formato estándar desde un [alojamiento web de OVHcloud](/links/web/hosting).

**Esta guía explica cómo exportar un sitio web de OVHcloud.**

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

### 1 - Recuperación de los archivos de su espacio de almacenamiento FTP

#### 1.1 Conectarse al espacio de almacenamiento.

Para conectarse a su espacio de almacenamiento necesitará lo siguiente:

- el usuario FTP o SSH activo.
- la contraseña del usuario FTP o SSH.
- la dirección del servidor.
- el puerto de conexión al servidor.

Habrá recibido esta información por correo electrónico tras la instalación de su alojamiento.

<!-- CP-STEPS-START:export-retrieve-ftp-credentials -->
Si no dispone de ellos, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Se mostrará la información relativa a su espacio de almacenamiento. Entre esa información se encuentran los datos necesarios para conectarse a este último.
>>
>> ![FTP - SSH tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}
>>
>> Para más información, consulte nuestra guía [Conectarse al espacio de almacenamiento de un alojamiento web"](/pages/web_cloud/web_hosting/ftp_connection).
>>
>> Si no tiene la contraseña, consulte la guía [Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password).
<!-- CP-STEPS-END:export-retrieve-ftp-credentials -->

Una vez que disponga de todos los elementos necesarios, la recuperación de los archivos en el espacio de almacenamiento puede realizarse de dos formas diferentes:

- **Cliente FTP o SFTP**: deberá instalar en su ordenador un programa compatible, como [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide). Si necesita ayuda, le recomendamos que se ponga en contacto con el editor del programa instalado, ya que OVHcloud no lo ha creado.

- **Acceso SSH**: Para interactuar con su espacio de almacenamiento, deberá ejecutar comandos desde un terminal. Este tipo de acceso requiere conocimientos técnicos avanzados y un [plan de hosting de OVHcloud](/links/web/hosting) específico. Para más información, consulte nuestra guía ["Utilizar el acceso SSH de un alojamiento web"](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

#### 1.2. Descargar los archivos desde el espacio de almacenamiento.

Una vez conectado a su espacio de almacenamiento y según los sitios web alojados en él, pueden aparecer varios directorios.

<!-- CP-STEPS-START:find-root-folder -->
Si es necesario, identifique previamente en su alojamiento web el nombre del directorio raíz en el que se almacena su sitio web. Para ello, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, para el sitio web deseado, mire el `Carpeta raíz`{.action} que se muestra.
>>
>> ![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}
<!-- CP-STEPS-END:find-root-folder -->

Siempre conectado a su espacio de almacenamiento, solo le queda descargar los archivos de su sitio web accediendo al directorio raíz identificado anteriormente.

### 2 - Recuperar la copia de seguridad de la base de datos (opcional)

> [!primary]
>
> Si su sitio web no utiliza bases de datos, puede omitir este paso.
>

Para obtener una copia de seguridad de la base de datos, consulte nuestra guía:
[Exportar una copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export).

Si utiliza una base de datos **Web Cloud Databases** para su sitio web, consulte la sección relativa al backup de nuestra guía:
[Guardar y exportar una base de datos en un servidor de bases de datos](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).

### 3 - Obtener los logs de su alojamiento de OVHcloud

Consulte nuestra guía dedicada: [Alojamiento web - Consultar las estadísticas y logs de un sitio web](/pages/web_cloud/web_hosting/logs_and_statistics).

## Más información

[Conectarse al espacio de almacenamiento de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection).

[Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password)

[Utilizar FileZilla con su alojamiento](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).

[Utilizar el acceso SSH de un alojamiento web](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

[Exportar una copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export).

[Primeros pasos con el servicio Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
