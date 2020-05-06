---
title: 'Cambiar la contraseña de la base de datos de un alojamiento web'
slug: cambiar-contrasena-base-de-datos
excerpt: 'Cómo cambiar la contraseña de una base de datos creada en un alojamiento web de OVH'
section: 'Bases de datos'
order: 2
---

**Última actualización: 11/07/2018**

## Objetivo

Una base de datos (también llamada *database*, DB o BD) permite almacenar elementos dinámicos, como comentarios o artículos. Prácticamente todos los sistemas de gestión de contenidos (*content management system* o CMS), como WordPress o Joomla, utilizan bases de datos, a las que se puede acceder utilizando una contraseña.

**Esta guía explica cómo cambiar la contraseña de una base de datos creada en un alojamiento web de OVH.**

## Requisitos

- Tener contratado un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external}.
- Tener acceso a la gestión del alojamiento web desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!warning]
>
> Si cambia la contraseña de la base de datos, también deberá modificarla en el archivo de configuración que conecta la base de datos con el sitio web.
>

## Procedimiento

### 1. Evaluar la situación

**Cambiar la contraseña de una base de datos es una operación delicada**, ya que una modificación errónea podría deshabilitar el acceso al sitio web que utiliza la base de datos. A continuación explicamos lo que ocurre cuando se cambia la contraseña para que entienda las consecuencias que ello implica.

En la actualidad, prácticamente todos los sistemas de gestión de contenidos utilizan bases de datos para almacenar los elementos dinámicos, como comentarios o artículos. Por lo tanto, para poder funcionar correctamente, los sitios web basados en un CMS deben estar conectados a una base de datos. Esto se lleva a cabo gracias a un archivo de configuración que contiene la información de conexión. Esa es la razón por la que, si cambia la contraseña de la base de datos, también deberá modificarla en el archivo de configuración que conecta la base de datos con el sitio web.

> [!primary]
>
> Antes de realizar cualquier modificación, le recomendamos encarecidamente que compruebe si su sitio web está conectado a una base de datos. En caso afirmativo, asegúrese de realizar esta modificación también en el sitio web para evitar que este deje de estar disponible.
>
> Esta operación no forma parte de la configuración de los servicios de OVH sino del sitio web, por lo que, si necesita ayuda para realizarla, le recomendamos que se ponga en contacto con el editor del sitio web o con un profesional especializado.
>

### 2. Acceder a la administración de las bases de datos del alojamiento

Conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con todas las bases de datos creadas en el plan de hosting.

![Contraseña de la base de datos](images/database-password-step1.png){.thumbnail}

### 3. Cambiar la contraseña de la base de datos

Para cambiar la contraseña, haga clic en los tres puntos situados al final de la línea correspondiente a la base de datos y seleccione `Cambiar la contraseña`{.action}.

![Contraseña de la base de datos](images/database-password-step2.png){.thumbnail}

Se abrirá una ventana en la que deberá introducir la nueva contraseña dos veces. A continuación, haga clic en `Aceptar`{.action}.

**El cambio de contraseña tardará unos minutos en aplicarse.**

> [!primary]
>
> Por motivos de seguridad, es necesario que la contraseña cumpla los criterios indicados. También es aconsejable:
>
> - No utilizar la misma contraseña dos veces.
> - Elegir una contraseña que no guarde ninguna relación con sus datos personales, evitando cualquier mención a su nombre, apellidos o fecha de nacimiento, por ejemplo.
> - Cambiar regularmente las contraseñas.
> - No anotar las contraseñas en un papel ni enviárselas por correo electrónico.
> - No guardar las contraseñas en el navegador de internet, aunque este se lo sugiera.
>

![Contraseña de la base de datos](images/database-password-step3.png){.thumbnail}

### 4. Restablecer la conexión entre la base de datos y el sitio web

> [!primary]
>
> Si su sitio web no está conectado a una base de datos, puede omitir este paso.
>

Si en su sitio web aparece un mensaje indicándole que no es posible conectarse a la base de datos, significa que no ha modificado la contraseña en el archivo que conecta el sitio web con la base de datos.

Para que el sitio web pueda conectarse a la base de datos, utiliza la información que contiene el archivo de configuración: el nombre de usuario y la contraseña, el nombre de la base de datos y la dirección del servidor. Es posible que, al cambiar la contraseña de la base de datos desde el área de cliente, la conexión entre el sitio web y la base de datos se haya perdido.

Para restablecer la conexión, introduzca la nueva contraseña en el archivo de configuración de la base de datos, que se encuentra en el espacio de almacenamiento del alojamiento. Esta operación no forma parte de la configuración de los servicios de OVH sino del sitio web, por lo que, si necesita ayuda para realizarla, le recomendamos que se ponga en contacto con el editor del sitio web o con un profesional especializado.

## Más información

[*Privacidad y seguridad en internet*, «Ficha 3: ¿Son suficientes las contraseñas?)», AEPD](https://www.aepd.es/media/guias/guia-privacidad-y-seguridad-en-internet.pdf){.external}.

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.