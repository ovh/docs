---
title: "Alojamiento web - Cómo activar el acceso SFTP"
excerpt: "Descubra cómo activar el acceso SFTP en su alojamiento web OVHcloud"
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

Las ofertas de alojamiento web de OVHcloud ofrecen acceso a un espacio de almacenamiento que permite subir los archivos de sus sitios web o aplicaciones. El acceso a este espacio es posible mediante un usuario FTP o SSH con las contraseñas asociadas a cada uno.

Al igual que el **F**ile **T**ransfer **P**rotocol (**FTP**), el **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) permite transferir datos de su dispositivo al espacio de almacenamiento de su alojamiento web.

La única diferencia es que el SFTP utiliza un canal seguro para intercambiar datos. Los datos que pasan a través de este protocolo se cifran automáticamente.

**Descubra cómo activar el acceso SFTP en su alojamiento web OVHcloud.**

## Requisitos

- Tener una oferta de [alojamiento web OVHcloud](/links/web/hosting).
<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Hosting plans](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

### Activar el acceso SFTP para un usuario FTP de su alojamiento web

**Haga clic en una de las dos líneas siguientes, según su oferta de alojamiento web, para ver las explicaciones.**

/// details | Activar el SFTP en una oferta de alojamiento web **gratuita 100M**, **Starter** o **Personal**

Haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Hosting plans](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla situada en la parte inferior de la página, marque la casilla presente en la columna **SFTP** del usuario FTP correspondiente. La página se actualizará automáticamente.
>>
>> ![FTP - SSH Perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}
>>
>> Una vez activada la opción **SFTP**, podrá utilizar el protocolo SFTP de su alojamiento web con el usuario FTP correspondiente.
>>

///

/// details | Activar el SFTP en una oferta de alojamiento web **Pro** o **Performance**

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Hosting plans](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla situada en la parte inferior de la página, verifique el estado presente en la columna **SFTP** del usuario FTP correspondiente :
>>
>> - **Activado** : el protocolo SFTP ya está activo para este usuario.
>> - **Desactivado** : haga clic en el botón `...`{.action} situado a la derecha de la fila correspondiente, y luego en `Editar`{.action}.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/sftp-enabled-pro.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la ventana que se abre, en la sección **Protocolos de conexión**, seleccione `FTP y SFTP`{.action} o `FTP, SFTP y SSH`{.action} si también necesita activar el protocolo SSH.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-user-step-1-connexion-protocols.png){.thumbnail}
>>
>> A continuación, haga clic en `Siguiente`{.action}, y luego en `Aceptar`{.action} para finalizar la activación del SFTP para el usuario correspondiente.

///

### Conectarse en SFTP a su alojamiento web

Para ello, consulte nuestro guía « [Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection) ».

## Más información

[Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Utilizar una conexión SSH en un alojamiento web](/pages/web_cloud/web_hosting/ssh_on_webhosting).

[Utilizar PuTTY para conectarse por SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Utilice FileZilla con su alojamiento web](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilice Cyberduck con su alojamiento web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).