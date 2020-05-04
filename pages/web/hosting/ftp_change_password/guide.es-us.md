---
title: 'Cambiar la contraseña de un usuario FTP'
slug: cambiar-contrasena-usuario-ftp
excerpt: 'Cómo cambiar la contraseña de un usuario FTP en un alojamiento de OVHcloud'
section: 'FTP y SSH'
order: 1
---

**Última actualización: 05/05/2020**

## Objetivo

Los planes de hosting de OVHcloud permiten disponer de un espacio de almacenamiento en el que podrá publicar los archivos de su sitio web. Para acceder a este espacio, es necesario tener el usuario FTP y la contraseña asociada.

**Esta guía explica cómo cambiar la contraseña de un usuario FTP en un alojamiento de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

### 1. Acceder a la gestión de los usuarios FTP

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `FTP-SSH`{.action}.

Se mostrará una tabla que contiene los usuarios FTP creados en su alojamiento. Estos usuarios le permiten acceder a su espacio de almacenamiento para publicar los archivos de su sitio web. Al instalar el alojamiento, se crea un usuario automáticamente.

![ftppassword](images/change-ftp-password-step1.png){.thumbnail}

### 2. Cambiar la contraseña de un usuario FTP

En función de su [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}, podrá cambiar la contraseña de un usuario FTP de una de las siguientes formas:

- **Planes que no permiten crear varios usuarios FTP** (plan Start 10M y plan de hosting Personal): Haga clic en el icono con forma de lápiz situado en la columna **Contraseña**, introduzca la nueva contraseña en el campo de texto y haga clic en `Aceptar`{.action}.

- **Planes que permiten crear varios usuarios FTP** (planes de hosting Profesional y Performance): Haga clic en el icono con forma de engranaje situado al final de la línea correspondiente al usuario FTP cuya contraseña quiera modificar y seleccione `Cambiar la contraseña`{.action}. Se abrirá una nueva ventana en la que deberá introducir la nueva contraseña. Confírmela y, a continuación, haga clic en `Aceptar`{.action}.

El cambio de contraseña tardará unos minutos en aplicarse.

> [!primary]
>
> Por motivos de seguridad, se recomienda respetar las indicaciones que se ofrecen al introducir la nueva contraseña. También es aconsejable:
>
> - No utilizar la misma contraseña dos veces.
> - Elegir una contraseña que no guarde ninguna relación con sus datos personales, evitando cualquier mención a su nombre, apellidos o fecha de nacimiento, por ejemplo.
> - Cambiar regularmente las contraseñas.
> - No anotar las contraseñas en un papel ni enviárselas por correo electrónico.
> - No guardar las contraseñas en el navegador de internet, aunque este se lo sugiera.
>

### 3. Acceder al espacio de almacenamiento

Una vez que haya cambiado la contraseña del usuario FTP, ya puede acceder a su espacio de almacenamiento.

En función del [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external} del que disponga, podrá acceder de diversas formas:

- **Explorador FTP**: Le permite acceder a su espacio de almacenamiento desde un navegador web. Para utilizarlo, abra la pestaña `FTP - SSH`{.action} y haga clic en el botón `Explorador FTP`{.action}.

- **Cliente FTP**: Instale el programa en su ordenador (como FileZilla, por ejemplo).

- **Acceso SSH**: Para interactuar con su espacio de almacenamiento, deberá ejecutar comandos desde un terminal. Este tipo de acceso requiere conocimientos técnicos más avanzados.

## Más información

[*Privacidad y seguridad en internet*, «Ficha 3: ¿Son suficientes las contraseñas?)», AEPD](https://www.aepd.es/media/guias/guia-privacidad-y-seguridad-en-internet.pdf){.external}

[Guía de uso de FileZilla](https://docs.ovh.com/us/es/hosting/web_hosting_guia_de_uso_de_filezilla/){.external}

[SSH en alojamiento compartido](https://docs.ovh.com/us/es/hosting/web_hosting_ssh_en_alojamiento_compartido/){.external}

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
