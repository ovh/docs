---
title: "Exportar un sitio web"
excerpt: "Cómo exportar un sitio web de OVHcloud"
updated: 2022-02-03
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Esta guía explica los pasos que debe seguir para exportar todos los elementos de su sitio web al formato estándar desde un [alojamiento web de OVHcloud](/links/web/hosting){.external}.

**Esta guía explica cómo exportar un sitio web de OVHcloud.**

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](/links/web/hosting){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager){.external}.

## Procedimiento

### 1. recuperación de los archivos de su espacio de almacenamiento FTP

#### 1.1 Conectarse al espacio de almacenamiento.

Para conectarse a su espacio de almacenamiento necesitará lo siguiente:

- el usuario FTP o SSH activo.
- la contraseña del usuario FTP o SSH.
- la dirección del servidor.
- el puerto de conexión al servidor.

Habrá recibido esta información por correo electrónico tras la instalación de su alojamiento. Si no dispone de ellos, conéctese al [área de cliente de OVHcloud](/links/manager){.external} en la sección Web y, en la columna izquierda, haga clic en `Alojamientos`{.action}. Seleccione el alojamiento correspondiente y abra la pestaña `FTP - SSH`{.action}. 

![export-website](images/tab-pro.png){.thumbnail}

Se mostrará la información relativa a su espacio de almacenamiento. Entre esa información se encuentran los datos necesarios para conectarse a este último. Para más información, consulte nuestra guía [Conectarse al espacio de almacenamiento de un alojamiento web"](/pages/web_cloud/web_hosting/ftp_connection){.external}. Si no tiene la contraseña, consulte la guía [Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password){.external}.

Una vez que disponga de todos los elementos necesarios, la recuperación de los archivos en el espacio de almacenamiento puede realizarse de dos formas diferentes:

- **Cliente FTP o SFTP** : deberá instalar en su ordenador un programa compatible, como [FileZilla ](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide). Si necesita ayuda, le recomendamos que se ponga en contacto con el editor del programa instalado, ya que OVHcloud no lo ha creado.

- **Acceso SSH**: Para interactuar con su espacio de almacenamiento, deberá ejecutar comandos desde un terminal. Este tipo de acceso requiere conocimientos técnicos avanzados y un [plan de hosting de OVHcloud](/links/web/hosting){.external} específico. Para más información, consulte nuestra guía ["Utilizar el acceso SSH de un alojamiento web"](/pages/web_cloud/web_hosting/ssh_on_webhosting){.external}. 

#### 1.2. Descargar los archivos desde el espacio de almacenamiento.

Una vez que se haya conectado al espacio de almacenamiento, solo tiene que descargar los archivos del sitio web. **Preste especial atención al directorio en el que haya instalado su sitio web.** Para un uso convencional, deberá cargar el sitio web en la carpeta «www». Sin embargo, si utiliza su hosting para alojar varios sitios web, probablemente haya declarado varios **multisitios**.

Para consultar la carpeta en la que está almacenado el sitio web, abra la pestaña `Multisitio`{.action} del área de cliente de OVHcloud. Aparecerá una tabla en la que podrá consultar la `Carpeta raíz`{.action} del dominio correspondiente.

![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

### 2. recuperar la copia de seguridad de la base de datos (opcional)

> [!primary]
>
> Si su sitio web no utiliza bases de datos, puede omitir este paso.
>

Para obtener una copia de seguridad de la base de datos, consulte nuestra guía:
[Exportar una copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export){.external}.

Si utiliza una base de datos **Web Cloud Databases** para su sitio web, consulte la sección relativa al backup de nuestra guía:
[Guardar y exportar una base de datos en un servidor de bases de datos](/pages/web_cloud/web_cloud_databases/save-export-on-database-server){.external}.

### 3. obtener los logs de su alojamiento de OVHcloud

Si desea conservar el historial de los logs de su sitio web, puede acceder a ellos desde el alojamiento.

En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Haga clic en la pestaña `Estadísticas y logs`{.action}. Haga clic en el enlace que aparece `Ver los logs`{.action}.

![export-website](images/view-logs.png){.thumbnail}

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

![export-website](images/raw-logs-general.png){.thumbnail}

Al seleccionar el tipo de logs durante el mes que le interesa, estos se guardan al día:

![export-website](images/raw-logs.png){.thumbnail}

## Más información

[Conectarse al espacio de almacenamiento de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection){.external}.

[Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password){.external}

[Utilizar FileZilla con su alojamiento](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide){.external}.

[Utilizar el acceso SSH de un alojamiento web](/pages/web_cloud/web_hosting/ssh_on_webhosting){.external}. 

[Exportar una copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export){.external}.

[Primeros pasos con el servicio Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb){.external}.

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).