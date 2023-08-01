---
title: "¿Qué hacer en caso de página 403 forbidden?"
excerpt: Descubra cómo volver a publicar un sitio web cuando este muestre la página 403 forbidden
updated: 2023-06-09
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 09/06/2023**

## Objetivo

Puede aparecer una página **"403 forbidden"** cuando:

- los permisos de acceso FTP (CHMOD) son insuficientes o restringidos. El servidor web de su alojamiento web denegará el acceso al archivo/carpeta/sitio web al que desea acceder a través de su navegador.

- el archivo **.htaccess** contiene una regla de restricción de acceso.

- un plugin de seguridad protege el acceso a sus archivos, carpetas y sitios web a través de su navegador de internet.

- se ha activado un firewall de aplicación.

Tras la detección de un funcionamiento sospechoso, nuestros robots de seguridad pueden bloquear temporalmente el acceso a los archivos de su alojamiento web. Este dispositivo permite impedir:

- la progresión de un eventual pirateo de los datos presentes en su alojamiento web;

- envío de código malicioso a otras entidades o sitios web, lo que podría dar lugar a su pirateo;

- la realización de operaciones ilegales.
 
 Este sistema también tiene por objetivo protegerse jurídicamente contra las acciones resultantes de una posible piratería de su alojamiento web hacia otras organizaciones o sitios web. 
 
 *Si tiene problemas con este tipo de bloqueo, recibirá una notificación por correo electrónico en la dirección de correo electrónico del contacto "administrador" de su alojamiento web*

![403error](images/403error.png){.thumbnail}

**Descubra cómo desbloquear el acceso a su sitio web en caso de que aparezca "403 forbidden".**

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) y/o con nuestra [comunidad de usuarios](https://community.ovh.com/en/). Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>

## Requisitos

- Tener contratado un plan de [hosting](https://www.ovhcloud.com/es/web-hosting/) de OVHcloud.
- Disponer de las [claves de conexión](/pages/web/hosting/ftp_connection) al espacio FTP de almacenamiento del alojamiento.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

### Etapa 1: analizar la situación

Si la página **"403 forbidden"** ha aparecido como consecuencia de una modificación de su sitio web, [restaure la totalidad o parte del espacio de almacenamiento FTP de su alojamiento](/pages/web/hosting/ftp_save_and_backup) a una fecha anterior.

Si las copias de seguridad disponibles no le permiten restablecer el acceso a su sitio web, contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/).

Si la página **"403 forbidden" ** no ha aparecido debido a una modificación de su sitio web, consulte su mensajería. Si, por motivos de seguridad, ha recibido un mensaje de correo electrónico de nuestros servicios informándole de que desea cerrar su alojamiento web, vaya directamente al [etapa 2](#step-2) de la presente guía.

Si la página **"403 forbidden"** ha aparecido sin ninguna acción por su parte y no ha recibido ningún email de nuestros servicios al respecto, compruebe los permisos de acceso FTP (CHMOD) de sus ficheros/carpetas así como el código contenido en su(s) archivo(s) **.htaccess**. Compruebe también si este fallo no se ha producido por un plugin de seguridad o por un firewall de aplicación. Si lo necesita, contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/).

### Etapa 2: proteger sus soluciones <a name="step-2"></a>

En primer lugar, compruebe la seguridad de sus equipos o dispositivos informáticos:

- Realice las actualizaciones de seguridad de sus dispositivos.

- Compruebe que se instale un antivirus, actualícela y lance una exploración completa. Si no tiene ninguno, consulte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) antes de toda instalación.

- Modifique todas sus contraseñas locales, especialmente las de sus direcciones de correo electrónico, respetando las **buenas prácticas** especificadas en [esta guía](/pages/account/customer/manage-ovh-password).

- Cambie las contraseñas de todos sus servicios OVHcloud, especialmente las de su [base de datos](/pages/web/hosting/sql_change_password) y del acceso a su [espacio de almacenamiento FTP](/pages/web/hosting/ftp_change_password).

> [!warning]
>
> Antes de cambiar la contraseña de la base de datos de su sitio web desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), actualice el archivo de configuración de su sitio web para que se conecte a la base de datos con la nueva contraseña.
>
> Si no, al cambiar la contraseña de la base de datos se cortará el acceso al sitio web o a los servicios que lo utilicen.
>
> En caso de duda sobre las operaciones a realizar, contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

### Etapa 3: intervenir en su alojamiento

En primer lugar, la fecha de envío del mensaje de correo electrónico de OVHcloud indica la desactivación de su alojamiento web y la carpeta o carpetas que contienen ejemplos de archivos ilegítimos.

> [!primary]
>
> Nuestros robots de seguridad pueden aplicar dos niveles de desactivación a su alojamiento web: 
>
> - Desactivación aplicando un "**CHMOD 700**" a la raíz FTP de su alojamiento web.
> - Desactivación aplicando un "**CHMOD 000**" a la raíz FTP de su alojamiento web.
>
> En caso de desactivación por restricción de acceso FTP en "**CHMOD 000**", contacte obligatoriamente con nuestro [equipo de soporte](https://www.ovhcloud.com/es/support-levels/) para conocer la situación antes de continuar con los pasos descritos en esta guía. 
>
> En función de su situación, estos últimos aplicarán una restricción menos elevada convirtiendo el "**CHMOD 000**" en "**CHMOD 700**" para que usted pueda actuar en el espacio FTP de su alojamiento web.
>

#### Caso n° 1: el alojamiento se desactivó hace menos de dos semanas.

Si su alojamiento ha sido cerrado menos de dos semanas antes y solo contiene un sitio web, restablezca su espacio de almacenamiento FTP. Si contiene más de un sitio web, vuelva a crear el directorio o carpetas que contengan archivos ilegítimos.

Para restaurar la totalidad o parte de su espacio de almacenamiento FTP, consulte [nuestra guía](/pages/web/hosting/ftp_save_and_backup) sobre el asunto.

> [!warning]
>
> La restauración única de su espacio de almacenamiento FTP no es suficiente para corregir posibles fallos de seguridad presentes previamente en su sitio web.
> Para identificar estos fallos de seguridad, analice los ["logs web"](/pages/web/hosting/logs_and_statistics) de su alojamiento web o utilice un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) para realizar una auditoría de seguridad de sus sitios web.
>

#### Caso n° 2: su alojamiento ha sido desactivado más de dos semanas antes.

Si su alojamiento ha sido cerrado más de dos semanas antes, contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) para realizar una auditoría de seguridad de sus sitios web. 

> [!success]
>
> Si desea más información sobre los [etapas 2 y 3](#step-2) anteriores, consulte nuestro tutorial sobre [las acciones a realizar en caso de pirateo de su sitio web](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked).
>
### Etapa 4: reactivar su alojamiento web <a name="reactivate-web-hosting"></a>

> [!warning]
>
> Le recomendamos que realice una auditoría de seguridad **antes de** para reabrir su alojamiento web. Cualquier operación maliciosa efectuada desde su alojamiento web puede conllevar su responsabilidad jurídica.
>

#### Reactivar el alojamiento con FileZilla

> [!primary]
>
> Para instalar el software **FileZilla** para manipular los archivos de su sitio web, siga las instrucciones de este [tutorial](/pages/web/hosting/ftp_filezilla_user_guide).
>

Abra FileZilla y luego [conéctese a su espacio de almacenamiento FTP](/pages/web/hosting/ftp_connection). Haga clic en `Servidor`{.action} en el menú y, seguidamente, en `Introducir un pedido FTP`{.action} (el título puede ser diferente según la versión de FileZilla que utilice).

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

En la nueva ventana, introduzca el siguiente comando y acepte:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Una respuesta **"200 Permissions changed on /"** confirma que la operación se ha realizado correctamente. Para comprobarlo, vuelva a intentar acceder al sitio web.

> [warning]
>
> El cambio puede tardar unos minutos (máximo 20 minutos) en hacerse visible en el navegador de internet.
>
> En función de su sitio web, también puede ser necesario vaciar la caché de su navegador.
>

Si el comando anterior no funciona, puede utilizar el siguiente comando:

```
SITE CHMOD 705 .
```

#### Reactivar el alojamiento con el explorador FTP "net2ftp"

En el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), acceda a la sección `Web Cloud`{.action} y, seguidamente, haga clic en `Alojamientos`{.action} en la pestaña `FTP-SSH`{.action} del alojamiento correspondiente.

Pulse el botón `Explorador FTP `{.action} y conéctese a su [espacio de almacenamiento FTP](/pages/web/hosting/ftp_connection).

Haga clic en el botón `Avanzado`{.action} y, a continuación, en el botón `Go`{.action} situado junto a "Send arbitrary FTP commands to the FTP server".

![net2ftp](images/net2ftp.png){.thumbnail}

Introduzca el siguiente comando en la parte superior de la página:

```
SITE CHMOD 705 /
```

y haga clic en el botón con forma de "V" verde.

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Una respuesta **"200 Permissions changed on /"** confirma que la operación se ha realizado correctamente. Para comprobarlo, vuelva a intentar acceder al sitio web.

> [warning]
>
> El cambio puede tardar unos minutos (máximo 20 minutos) en hacerse visible en el navegador de internet.
>
> En función de su sitio web, también puede ser necesario vaciar la caché de su navegador.
>

## Más información <a name="go-further"></a>

[Pirateo de su sitio web WordPress: Consejos y casos prácticos](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked)

[Activación del firewall de aplicación](/pages/web/hosting/multisites_activating_application_firewall)

[Cambiar la versión de PHP de un alojamiento web](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
