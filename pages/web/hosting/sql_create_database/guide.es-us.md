---
title: 'Crear una base de datos en un alojamiento web'
slug: crear-base-de-datos
excerpt: 'Cómo crear una base de datos en un alojamiento web de OVH'
section: 'Bases de datos'
order: 1
---

**Última actualización: 09/07/2018**

## Objetivo

Una base de datos (también llamada *database*, DB o BD) permite almacenar elementos dinámicos, como comentarios o artículos. Prácticamente todos los sistemas de gestión de contenidos (*content management system* o CMS), como WordPress o Joomla, utilizan bases de datos.

**Esta guía explica cómo crear una base de datos en un alojamiento web de OVH.**

## Requisitos

- Tener contratado un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external}.
- Poder crear más bases de datos con el plan de hosting contratado.
- Tener acceso a la gestión del alojamiento web desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

### 1. Acceder a la gestión de las bases de datos del alojamiento

Conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con todas las bases de datos creadas en el plan de hosting.

![Crear una base de datos](images/database-creation-step1.png){.thumbnail}

### 2. Crear la base de datos

Existen dos formas de crear una nueva base de datos:

- **Si todavía no ha creado ninguna base de datos**, haga clic en el botón `Crear una base de datos`{.action}.

- **Si ya ha creado una base de datos**, haga clic en el botón `Acciones`{.action} situado sobre la tabla y seleccione `Crear una base de datos`{.action}.

Se abrirá una ventana en la que deberá introducir la siguiente información:

|Campo|Descripción|  
|---|---|  
|Motor de la base de datos|Seleccione el motor de la base de datos. Las bases de datos incluidas con un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external} solo ofrecen el motor MySQL.|  
|Versión de la base de datos|Seleccione la versión del motor de la base de datos. Asegúrese de que su sitio web es compatible con la versión elegida. |  
|Tipo de base de datos|Seleccione la capacidad de la base de datos, es decir, el espacio del que dispondrá la base de datos para almacenar datos.|   

Una vez completada esta información, haga clic en `Siguiente`{.action}.

|Campo|Descripción|   
|---|---|   
|Usuario|Personalice el nombre de usuario asociado a la base de datos.|   
|Contraseña|Introduzca una contraseña para este usuario y confírmela introduciéndola de nuevo en el siguiente campo.|   

Compruebe que la información que aparece es correcta y haga clic en `Aceptar`{.action} para terminar de crear la base de datos. Repita estas operaciones para cada base de datos que quiera crear.

> [!primary]
>
> Por motivos de seguridad, es necesario que la contraseña cumpla los criterios indicados. También es aconsejable:
>
> - No utilizar la misma contraseña dos veces.
> - Elegir una contraseña que no guarde ninguna relación con sus datos personales (evite cualquier mención a su nombre, apellidos o fecha de nacimiento, por ejemplo).
> - Cambiar regularmente las contraseñas.
> - No anotar las contraseñas en un papel ni enviárselas por correo electrónico.
> - No guardar las contraseñas en el navegador de internet, aunque este se lo sugiera.
>

![Crear una base de datos](images/database-creation-step2.png){.thumbnail}

### 3. Utilizar la base de datos

Una vez que haya creado la base de datos, ya puede utilizarla. Para ello, necesitará la siguiente información de conexión: el nombre de usuario y la contraseña que acaba de establecer, el nombre de la base de datos que acaba de crear y la dirección del servidor.

Puede conectar su sitio web a la base de datos de dos formas distintas: manualmente o a través de un panel de administración generado por el propio sitio web. Esta operación no forma parte de la configuración de los servicios de OVH sino del sitio web, por lo que, si necesita ayuda para realizarla, le recomendamos que se ponga en contacto con el editor del sitio web o con un profesional especializado.

OVH pone a su disposición una aplicación online para administrar sus bases de datos: phpMyAdmin. Para conocer la dirección de conexión a dicha aplicación, en la pestaña `Bases de datos`{.action}, haga clic en los tres puntos situados al final de la línea correspondiente a la base de datos y seleccione `Acceder a phpMyAdmin`{.action}. Introduzca las claves de la base de datos creada en OVH.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.