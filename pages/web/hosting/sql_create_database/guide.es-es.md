---
title: 'Crear una base de datos en un alojamiento web'
slug: crear-base-de-datos
excerpt: 'Cómo utilizar las bases de datos incluidas en los planes de hosting de OVHcloud'
section: 'Bases de datos'
order: 1
---

**Última actualización: 03/02/2022**

## Objetivo

Una base de datos (también llamada «database», DB o BD) permite almacenar elementos dinámicos, como comentarios o artículos. Prácticamente todos los sistemas de gestión de contenidos (CMS), como WordPress o Joomla!, utilizan bases de datos.

**Esta guía explica cómo crear y utilizar una base de datos en un plan de hosting de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/).
- Tener una base de datos disponible en su plan de hosting.
- Tener acceso a la gestión del alojamiento y los permisos necesarios desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). 

## Procedimiento

### 1. Acceder a la gestión de las bases de datos del hosting

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y acceda a la sección `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con todas las bases creadas en el plan de hosting.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### 2. Crear la base de datos

Existen dos formas de crear una nueva base de datos.

- **Si todavía no ha creado ninguna base de datos**, haga clic en el botón `Crear una base de datos`{.action}.

- **Si ya ha creado una base de datos**, haga clic en el botón `Acciones`{.action} situado sobre la tabla y seleccione `Crear una base de datos`{.action}.

Se abrirá una ventana en la que deberá introducir la siguiente información.

|Campo|Descripción|  
|---|---|  
|Motor de la base de datos|Seleccione el motor de la base de datos. Las bases de datos incluidas con un [plan de hosting de OVHcloud](https://www.ovh.es/hosting) solo ofrecen el motor MySQL.|  
|Versión de la base de datos|Seleccione la versión del motor de la base de datos. Asegúrese de que su sitio web es compatible con la versión elegida. |  
|Tipo de base de datos|Seleccione la capacidad de la base de datos, es decir, el espacio del que dispondrá para almacenar datos.|   

Una vez completada la información, haga clic en `Siguiente`{.action}.

|Campo|Descripción|   
|---|---|   
|Usuario|Personalice el nombre de usuario asociado a la base de datos.|   
|Contraseña|Introduzca una contraseña para este usuario y confírmela introduciéndola de nuevo en el siguiente campo.|   

Compruebe que la información que aparece es correcta y haga clic en `Aceptar`{.action} para terminar de crear la base de datos. Repita estas operaciones para cada base de datos que quiera crear, en función del número máximo de bases de datos incluidas en el plan de hosting.

> [!primary]
>
> Por motivos de seguridad, es necesario que la contraseña cumpla los criterios indicados. También es aconsejable:
>
> - No utilizar la misma contraseña dos veces.
>
> - Elegir una contraseña que no guarde ninguna relación con sus datos personales (evite cualquier mención a su nombre, apellidos o fecha de nacimiento, por ejemplo).
>
> - Cambiar regularmente las contraseñas.
>
> - No anotar las contraseñas en un papel ni enviárselas a otras personas por correo electrónico.
>
> - No guardar las contraseñas en el navegador de internet, aunque este se lo sugiera.
>

> [!warning]
>Recuerde que, si modifica la contraseña de la base de datos, también deberá actualizar esta información en todas las aplicaciones con acceso a la base de datos.
>


![databasecreation](images/database-creation-step2.png){.thumbnail}

### 3. Utilizar la base de datos

> [!warning]
>Esta guía no sustituye la ayuda de un profesional, como un webmaster. Le recomendamos que, si necesita ayuda, contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) o con el editor del servicio. Nosotros no podremos ayudarle. Para más información, acceda a la sección «Más información» de esta guía.
>

Una vez que haya creado la base de datos, ya puede utilizarla. Para ello, necesitará los siguientes datos de conexión: el nombre de usuario y la contraseña que acaba de establecer, el nombre de la base de datos que acaba de crear y la dirección del servidor. Esta información es imprescindible para que el sitio web pueda conectarse a la base de datos.

En función del software utilizado, deberá configurar la conexión manualmente o a través de una interfaz generada por el propio backend del sitio web. Esta operación no forma parte de la configuración de los servicios de OVHcloud, sino del sitio web, por lo que, si necesita ayuda para realizarla, le recomendamos que consulte los correspondientes recursos online disponibles. 

#### Acceder a la interfaz phpMyAdmin

OVHcloud pone a su disposición una aplicación online para administrar sus bases de datos: phpMyAdmin. Para conocer la dirección de conexión a dicha aplicación, en la pestaña `Bases de datos`{.action}, haga clic en los tres puntos (`...`{.action}) situados al final de la línea correspondiente a la base de datos y seleccione `Acceder a phpMyAdmin`{.action}.

Los datos de conexión aparecerán precargados en la nueva ventana, por lo que solo tendrá que introducir la contraseña de la base de datos. Esta es una buena forma de comprobar la contraseña actual si, por ejemplo, recibe un mensaje de autorización denegada en su CMS.

![databasecreation](images/database-creation-step3.png){.thumbnail}


#### Utilizar copias de seguridad en su base de datos

Para cada base de datos de su alojamiento web, todos los días se crearán copias de seguridad de forma automática (hasta 32 entidades). De este modo, podrá restaurar fácilmente una versión previa de su base de datos directamente desde el área de cliente. 

Para consultar las copias de seguridad disponibles y su fecha de creación, haga clic en el icono con forma de lápiz que aparece junto al círculo verde en la columna [Copias de seguridad](../web_hosting_exportacion_de_una_base_de_datos). También es posible descargar las copias de seguridad. Para más información, consulte nuestra guía [Exportar una copia de seguridad de la base de datos de un alojamiento web](../web_hosting_exportacion_de_una_base_de_datos).

#### Problemas frecuentes

**Demasiadas conexiones**

Las bases de datos de los planes de hosting están limitadas a 30 conexiones simultáneas (variable del sistema *max_connections*). Las peticiones SQL deben optimizarse para evitar este fallo. Si el problema persiste, deberá valorar medidas alternativas como migrar a una base de datos [CloudDB](https://www.ovh.es/cloud/cloud-databases/) o [mejorar su plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/uc-best-web-hosting/). 

**Errores de conexión o «not found»**

Le recomendamos que utilice siempre el nombre de la base de datos en los scripts y archivos de configuración, en lugar de direcciones IP o _localhost_.

**Falta de espacio**

Si la base de datos de un alojamiento web supera el espacio de almacenamiento asignado, pasará automáticamente al modo «read only»/«select only». El administrador recibirá una notificación por correo electrónico.

Una vez que la base de datos haya sido optimizada, podrá recalcular su espacio desde el área de cliente de OVHcloud para desbloquear este modo. Le recomendamos que descargue la base de datos, realice una revisión localmente y después vuelva a importarla. Para más información, consulte el paso 7 de nuestra guía [Optimizar el rendimiento de su sitio web](../web_hosting_guia_de_optimizacion_del_rendimiento_de_un_sitio_web/#paso-7-optimizar-su-base-de-datos).


## Más información

[Cambiar la contraseña de la base de datos de un alojamiento web](../cambiar-contrasena-base-de-datos)

[Exportar una copia de seguridad de la base de datos de un alojamiento web](../web_hosting_exportacion_de_una_base_de_datos)

[Importar una copia de seguridad en la base de datos de un alojamiento web](../web_hosting_importacion_de_una_base_de_datos_mysql)

[Optimizar el rendimiento de su sitio web](../web_hosting_guia_de_optimizacion_del_rendimiento_de_un_sitio_web)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
