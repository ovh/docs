---
title: "Hospedaje web - Cómo activar el acceso SFTP"
excerpt: "Descubra cómo activar el acceso SFTP en su hospedaje web OVHcloud"
updated: 2026-02-04
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Las ofertas de hospedaje web de OVHcloud ofrecen acceso a un espacio de almacenamiento que permite subir los archivos de sus sitios web o aplicaciones. El acceso a este espacio es posible mediante un usuario FTP o SSH con las contraseñas asociadas a cada uno.

Al igual que el **F**ile **T**ransfer **P**rotocol (**FTP**), el **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) permite transferir datos de su dispositivo al espacio de almacenamiento de su hospedaje web.

La única diferencia es que el SFTP utiliza un canal seguro para intercambiar datos. Los datos que pasan a través de este protocolo se cifran automáticamente.

**Descubra cómo activar el acceso SFTP en su hospedaje web OVHcloud.**

## Requisitos

- Tener una oferta de [hospedaje web OVHcloud](/links/web/hosting).
- Estar conectado a su [área de cliente de OVHcloud](/links/manager), parte `Web Cloud`{.action}.

## En práctica

### Activar el acceso SFTP para un usuario FTP de su hospedaje web

**Haga clic en una de las dos líneas siguientes, según su oferta de hospedaje web, para ver las explicaciones.**

/// details | Activar el SFTP en una oferta de hospedaje web **gratuita 100M**, **Starter** o **Perso**

Haga clic en las pestañas siguientes para ver, una tras otra, cada una de las **4** etapas.

> [!tabs]
> **Paso 1**
>>
>> Inicie sesión en su [área de cliente de OVHcloud](/links/manager), y vaya a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Paso 2**
>>
>> Haga clic en el menú `Hébergements`{.action}, y elija el hospedaje web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Paso 3**
>>
>> En la página que aparece, haga clic en la pestaña `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Paso 4**
>>
>> En la tabla situada en la parte inferior de la página, marque la casilla presente en la columna **SFTP** del usuario FTP correspondiente. La página se actualizará automáticamente.
>>
>> ![FTP - SSH Perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}
>>
>> Una vez activada la opción **SFTP**, podrá utilizar el protocolo SFTP de su hospedaje web con el usuario FTP correspondiente.
>>

///

/// details | Activar el SFTP en una oferta de hospedaje web **Pro** o **Performance**

Haga clic en las pestañas siguientes para ver, una tras otra, cada una de las **5** etapas.

> [!tabs]
> **Paso 1**
>>
>> Inicie sesión en su [área de cliente de OVHcloud](/links/manager), y vaya a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Paso 2**
>>
>> Haga clic en el menú `Hébergements`{.action}, y elija el hospedaje web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Paso 3**
>>
>> En la página que aparece, haga clic en la pestaña `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Paso 4**
>>
>> En la tabla situada en la parte inferior de la página, verifique el estado presente en la columna **SFTP** del usuario FTP correspondiente :
>>
>> - **Activado** : el protocolo SFTP ya está activo para este usuario.
>> - **Desactivado** : haga clic en el botón `...`{.action} situado a la derecha de la fila correspondiente, y luego en `Modificar`{.action}.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/sftp-enabled-pro.png){.thumbnail}
>>
> **Paso 5**
>>
>> En la ventana que se abre, en la sección **Protocoles de connexion**, seleccione `FTP y SFTP`{.action} o `FTP, SFTP y SSH`{.action} si también necesita activar el protocolo SSH.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-user-step-1-connexion-protocols.png){.thumbnail}
>>
>> A continuación, haga clic en `Siguiente`{.action}, y luego en `Validar`{.action} para finalizar la activación del SFTP para el usuario correspondiente.

///

### Conectarse en SFTP a su hospedaje web

Para ello, consulte nuestro guía « [Conectarse al espacio de almacenamiento FTP de su hospedaje web](/pages/web_cloud/web_hosting/ftp_connection) ».

## Más información

[Modificar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password)

[Utilizar una conexión SSH en un hospedaje web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Utilizar PuTTY para conectarse en SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Utilizar FileZilla con su hospedaje web](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilizar Cyberduck con su hospedaje web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [socios de OVHcloud](/links/partner).

Si desea beneficiarse de una asistencia en el uso y configuración de sus soluciones OVHcloud, le proponemos consultar nuestras diferentes [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).