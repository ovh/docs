---
title: Cambiar la contraseña de un usuario FTP
slug: cambiar-contrasena-usuario-ftp
excerpt: Cómo cambiar la contraseña de un usuario FTP en un alojamiento de OVHcloud
section: FTP y SSH
order: 2
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 24/01/2022**

## Objetivo

Los planes de hosting de OVHcloud permiten acceder a un espacio de almacenamiento de archivos en la nube que puede utilizarse a través del protocolo **FTP**.<br>Es posible acceder a este espacio a través de un usuario FTP y la contraseña asociada.
<br>Este acceso le permitirá [publicar su sitio web](https://docs.ovh.com/us/es/hosting/web_hosting_publicar_un_sitio_web_en_internet/#23-cargar-los-archivos-en-el-espacio-de-almacenamiento).

**Esta guía explica cómo cambiar la contraseña de un usuario FTP en un alojamiento de OVHcloud.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.
>

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

### Etapa 1: Acceder a la gestión de los usuarios FTP

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), acceda a la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Seleccione la pestaña `FTP-SSH`{.action}.

Se mostrará una tabla con los usuarios FTP creados en su alojamiento. Estos usuarios le permiten acceder a su espacio de almacenamiento FTP para publicar los archivos de su sitio web. Al instalar el alojamiento, se crea un usuario automáticamente.

### Etapa 2: Cambiar la contraseña de un usuario FTP

> [!primary]
>
> Para más información sobre las buenas prácticas de gestión de contraseñas, consulte esta [guía](https://docs.ovh.com/us/es/customer/gestionar-su-contrase%C3%B1a/).
>

Según el plan de [hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/), la modificación de la contraseña del usuario FTP a través de la pestaña `FTP-SSH`{.action} se realizará por dos caminos diferentes:

- **productos que no permiten crear un segundo usuario FTP** (productos Start 10M y Personal): haga clic en el icono con forma de lápiz situado en la columna `Contraseña`{.action}, introduzca la nueva contraseña y confirme el cambio haciendo clic en el botón verde.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **Planes que permiten crear varios usuarios FTP** (planes Profesional y Performance): haga clic en los tres puntos situados al final de la línea correspondiente al usuario FTP y seleccione `Cambiar la contraseña`{.action}. Se abrirá una ventana en la que deberá introducir la nueva contraseña, confirmarla introduciéndola por segunda vez, y hacer clic en el botón `Aceptar`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Seleccione la nueva contraseña de la base de datos y nócelo. En ambos casos deberá cumplir los siguientes requisitos:

- Mínimo 8 caracteres;
- Máximo 30 caracteres;
- Al menos una letra mayúscula;
- Al menos una letra minúscula;
- Al menos una cifra.
- Estar compuesto únicamente por números y letras.

Por último, abra la pestaña `Tareas en curso`{.action} y vuelva a actualizar la página periódicamente. El cambio de contraseña tarda unos minutos en aplicarse.

### Etapa 3: Acceder al espacio de almacenamiento

Existen diversas formas de conectar los archivos al espacio de alojamiento:

- **Explorador FTP**: puede acceder a este programa desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). Para utilizarlo, abra la pestaña `FTP-SSH`{.action} y haga clic en el botón `Explorador FTP`{.action}.

- **Programa FTP**: Si lo desea, deberá instalar en su ordenador un programa compatible con el protocolo FTP (por ejemplo, [FileZilla](https://docs.ovh.com/us/es/hosting/web_hosting_guia_de_uso_de_filezilla/)).

- **Acceso SSH** (solo en los planes Profesional y Performance): consulte la guía "[Utilizar SSH en un web hosting](https://docs.ovh.com/us/es/hosting/web_hosting_ssh_en_alojamiento_compartido/)" para utilizar este protocolo de conexión.

> [!primary]
>
> Para más información, consulte la guía "[Conectarse al espacio de almacenamiento de un alojamiento web](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/)".
>

## Más información <a name="gofurther"></a>

[Establecer y gestionar la contraseña de su cuenta](https://docs.ovh.com/us/es/customer/gestionar-su-contrase%C3%B1a/)

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, consulte nuestros distintos [servicios de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
