---
title: "Exportar un sitio web"
excerpt: "Cómo exportar un sitio web de OVHcloud"
updated: 2025-10-28
---

## Objetivo

Esta guía explica los pasos que debe seguir para exportar todos los elementos de su sitio web al formato estándar desde un [alojamiento web de OVHcloud](/links/web/hosting).

**Esta guía explica cómo exportar un sitio web de OVHcloud.**

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](/links/web/hosting).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### 1 - Recuperación de los archivos de su espacio de almacenamiento FTP

#### 1.1 Conectarse al espacio de almacenamiento.

Para conectarse a su espacio de almacenamiento necesitará lo siguiente:

- el usuario FTP o SSH activo.
- la contraseña del usuario FTP o SSH.
- la dirección del servidor.
- el puerto de conexión al servidor.

Habrá recibido esta información por correo electrónico tras la instalación de su alojamiento.

Si no dispone de ellos, haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Se mostrará la información relativa a su espacio de almacenamiento. Entre esa información se encuentran los datos necesarios para conectarse a este último.
>>
>> ![FTP - SSH tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}
>>
>> Para más información, consulte nuestra guía [Conectarse al espacio de almacenamiento de un alojamiento web"](/pages/web_cloud/web_hosting/ftp_connection).
>>
>> Si no tiene la contraseña, consulte la guía [Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password).

Una vez que disponga de todos los elementos necesarios, la recuperación de los archivos en el espacio de almacenamiento puede realizarse de dos formas diferentes:

- **Cliente FTP o SFTP** : deberá instalar en su ordenador un programa compatible, como [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide). Si necesita ayuda, le recomendamos que se ponga en contacto con el editor del programa instalado, ya que OVHcloud no lo ha creado.

- **Acceso SSH**: Para interactuar con su espacio de almacenamiento, deberá ejecutar comandos desde un terminal. Este tipo de acceso requiere conocimientos técnicos avanzados y un [plan de hosting de OVHcloud](/links/web/hosting) específico. Para más información, consulte nuestra guía ["Utilizar el acceso SSH de un alojamiento web"](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

#### 1.2. Descargar los archivos desde el espacio de almacenamiento.

Una vez conectado a su espacio de almacenamiento, solo le queda descargar los archivos de su sitio web. **Le recomendamos encarecidamente que preste especial atención al directorio en el que ha instalado su sitio**. En un caso de uso típico, el sitio debe descargarse en la carpeta "www". Sin embargo, si está utilizando su alojamiento para alojar varios sitios web, es probable que haya declarado varios sitios web.

Para comprobar la carpeta en la que se almacena su sitio web, vaya a la pestaña `Multisitio`{.action} desde su área de cliente de OVHcloud. En la tabla que aparece, para el dominio deseado, mire el `Carpeta raíz`{.action} que se muestra.

![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

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

Si desea conservar el historial de los logs de su sitio web, puede acceder a ellos desde el alojamiento.

En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Haga clic en la pestaña `Estadísticas y logs`{.action}.

![statistics-and-logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs.png){.thumbnail}

Haga clic en el enlace que aparece `Ver los logs`{.action}.

![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-logs.png){.thumbnail}

Se abrirá una ventana con los diferentes tipos de logs disponibles. Se clasifican por meses:

| Tipo  	| Descripción                                                                                                                                                                                         	|
|-------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Web   	| Encuentre aquí los distintos logs de consulta de su sitio web, así como las diferentes acciones realizadas a partir de su sitio web. Esto permite, por ejemplo, identificar intentos de hackeo. 	|
| FTP   	| las diferentes conexiones FTP se guardarán y conservarán en estos logs.                                                                                                                     	|
| Error 	| los diferentes errores generados por su sitio web.                                                                                                                                                    	|
| CGI   	| las diferentes llamadas a los scripts cgi.bin realizadas.                                                                                                                                     	|
| out   	| las estadísticas de su alojamiento sobre las diferentes llamadas externas realizadas.                                                                                                                  	|
| SSH   	| estos logs indican las distintas conexiones realizadas con el protocolo SSH.                                                                                                                      	|
| Cron  	| el resultado de la ejecución de las tareas planificadas.                                                                                                                                                	|

![export-website](/pages/assets/screens/other/web-tools/logs/raw-logs-general.png){.thumbnail}

Al seleccionar el tipo de logs durante el mes que le interesa, estos se guardan al día:

![export-website](/pages/assets/screens/other/web-tools/logs/raw-logs.png){.thumbnail}

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