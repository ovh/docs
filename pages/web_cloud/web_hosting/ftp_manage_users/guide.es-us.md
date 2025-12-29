---
title: "Web hosting - Cómo gestionar usuarios FTP"
excerpt: "Descubra cómo crear, modificar o eliminar usuarios FTP en un alojamiento web de OVHcloud"
updated: 2025-10-16
---

## Objetivo

Los planes de hosting de OVHcloud permiten acceder a un espacio de almacenamiento FTP. Este espacio FTP permite, por ejemplo, publicar los archivos de sus sitios web o aplicaciones en internet. El acceso a este espacio es posible a través de un usuario FTP o SSH y la contraseña asociada. En el marco de sus actividades, puede tener varios usuarios FTP para sus diferentes colaboradores.

**Descubra cómo crear, modificar o eliminar usuarios FTP en un alojamiento web de OVHcloud.**

> [!primary]
>
> Esta guía solo es válida para los alojamientos web de tipo **Pro** o **Performance**. Solo estos dos productos permiten activar varios usuarios FTP.

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting) compatible.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}.

## Procedimiento

### Crear un nuevo usuario FTP en su alojamiento web <a name="create-ftp-user"></a>

Para crear un nuevo usuario FTP en un alojamiento web desde el área de cliente de OVHcloud, haga clic en las fichas siguientes para ver cada una de las **7** etapas.

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
>>  Para crear un nuevo usuario FTP, haga clic en el botón `Crear un usuario`{.action} situado a la derecha. Dependiendo de la resolución de la pantalla, el botón puede estar en la parte inferior de la página.
>>
>> ![FTP-SSH create user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Se abrirá la siguiente ventana:

>> ![FTP-SSH create user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-1.png){.thumbnail}
>>
>> Defina los parámetros del nuevo usuario FTP rellenando los siguientes campos:
>>
>>- *Usuario* : Corresponde al nombre de usuario FTP completo que va a definir para su colaborador. que deberá utilizar para conectarse al espacio de almacenamiento FTP de su alojamiento web. Independientemente del nuevo usuario FTP creado en su alojamiento web, el nombre elegido estará siempre precedido por el usuario FTP principal del alojamiento web, seguido de un guión. Por ejemplo, si su usuario FTP principal es `FTPLogin` y desea crear un nuevo usuario FTP `user1`, el usuario FTP de su nuevo usuario será `FTPLogin-user1`.
>>
>> - *Carpeta raíz* : Es el nombre del directorio o subdirectorio en el que el usuario FTP tendrá derecho a conectarse en el espacio de almacenamiento FTP. Por ejemplo, si su colaborador necesita acceder a todo el espacio de almacenamiento FTP de su alojamiento web, deje este campo en blanco. En caso contrario, indique el nombre del directorio al que estará autorizado a acceder (por ejemplo: `www`, `blog`, `website1`, `www/development`, etc.).
>>
>> - *Protocolo de conexión* : Permite definir el protocolo o protocolos que el usuario FTP podrá utilizar para conectarse al espacio de almacenamiento FTP de su alojamiento web. Por ejemplo, si selecciona la tercera opción (los protocolos **FTP**,**SFTP** y **SSH**), el usuario FTP podrá conectarse con los tres protocolos. De este modo, el colaborador que utilizará este usuario FTP podrá, por ejemplo, conectarse en línea de comandos mediante el protocolo **SSH**, pero también gestionar el contenido FTP a partir del mismo protocolo.
>>
>> Una vez que haya definido los parámetros, haga clic en `Siguiente`{.action}.
>>
> **Etapa 6**
>>
>> ![FTP-SSH create user step 2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-2.png){.thumbnail}
>>
>> En este segundo ventana, solo tiene que establecer y confirmar, en los dos campos, la contraseña del nuevo usuario FTP. Siga la política de contraseñas que aparece debajo de los dos campos.
>>
>> Una vez que haya elegido y confirmado la contraseña, haga clic en `Siguiente`{.action}.
>>
> **Etapa 7**
>>
>> ![FTP-SSH create user step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-3.png){.thumbnail}
>>
>> Este último ventana resume los parámetros elegidos para el nuevo usuario FTP. Si estos parámetros se corresponden con lo que desea, haga clic en `Aceptar`{.action} para finalizar la solicitud de creación de un nuevo usuario FTP en su alojamiento web.

> [!primary]
>
> Una vez validada la solicitud de creación, el nuevo usuario puede tardar hasta 15 minutos en incluirse en el alojamiento web.

Si lo necesita, pruebe el nuevo usuario FTP utilizando nuestra guía "[Conectarse al espacio de almacenamiento FTP de su alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)".

### Editar un usuario FTP

Para editar un usuario FTP, haga clic en las fichas siguientes para ver cada una de las **5** etapas.

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
>> En la tabla de la parte inferior de la página y a la derecha de la fila correspondiente al usuario FTP, haga clic en el botón `...`{.action} y, seguidamente, en `Editar`{.action}.
>>
>> ![FTP-SSH edit user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-user1.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Se abrirá la siguiente ventana:
>>
>> ![FTP-SSH edit user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-a-user-step1.png){.thumbnail}
>>
>> A excepción del nombre de usuario FTP y su contraseña asociada, aquí puede modificar el *carpeta raíz* y los *protocolos de conexión* definidos para el usuario FTP. Si lo necesita, consulte la sección "[Crear un nuevo usuario FTP en su alojamiento web](#create-ftp-user)" de esta guía para obtener más información sobre el *carpeta raíz* y los *protocolos de conexión*.
>>
>> Además, si es necesario, puede *desactivar el usuario* marcando la casilla prevista a tal efecto. Esta opción puede ser útil si desea impedir que un colaborador acceda a su espacio FTP sin eliminar los logs FTP y SSH asociados. Estos logs le permitirán determinar las operaciones realizadas por su colaborador si detecta intervenciones no deseadas en su alojamiento web.
>>
>> Una vez realizados los cambios, haga clic en `Siguiente`{.action}. Revise las solicitudes de modificación y haga clic en `Aceptar`{.action} para finalizar la solicitud de modificación del usuario FTP en su alojamiento web.

> [!primary]
>
> Si solo desea cambiar la contraseña del usuario FTP, consulte nuestra guía "[Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password)".
>
> Si desea cambiar el nombre del usuario FTP, esta función no está disponible. Es obligatorio [crear un nuevo usuario FTP](#create-ftp-user) con el nuevo nombre de usuario deseado. A continuación, si lo necesita, puede [eliminar el antiguo usuario FTP](#delete-ftp-user).

### Eliminar un usuario FTP <a name="delete-ftp-user"></a>

Para eliminar un usuario FTP, haga clic en las fichas siguientes para ver cada una de las **5** etapas.

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
>> En la tabla de la parte inferior de la página y a la derecha de la fila correspondiente al usuario FTP, haga clic en el botón `...`{.action} y seleccione `Eliminar`{.action}.
>>
>> ![FTP-SSH delete user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Se abrirá la siguiente ventana:
>>
>> ![FTP-SSH delete user confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1-confirmation.png){.thumbnail}
>>
>> Haga clic en `Aceptar`{.action} para eliminar definitivamente el usuario FTP de su alojamiento web.

## Más información

[Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection).

[Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Utilizar una conexión SSH en un alojamiento web](/pages/web_cloud/web_hosting/ssh_on_webhosting).

[Utilizar PuTTY para conectarse por SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Utilice FileZilla con su alojamiento web](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilice Cyberduck con su alojamiento web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).