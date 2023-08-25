---
title: "Sustitución del par de claves SSH perdidas"
excerpt: Cómo recuperar el acceso SSH a un servidor dedicado
updated: 2023-02-06
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 


## Objetivo

Si [utiliza llaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) para conectarse a su servidor dedicado, la pérdida de su llave SSH privada podría significar la pérdida total de acceso a su servidor.

No obstante, podrá conectarse al servidor utilizando el [modo de rescate de OVHcloud](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) con una contraseña provisional que le permitirá modificar sus archivos.

**Esta guía explica cómo sustituir las llaves SSH en caso de pérdida de acceso al servidor.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#mas-informacion) de esta guía.
>

## Requisitos

- Un [servidor dedicado](https://www.ovhcloud.com/es/bare-metal/) en su cuenta de OVHcloud.
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

### Paso 1: Desactivar la llave SSH actual

Para acceder al servidor en modo de rescate, es necesario desactivar primero la llave SSH actual.

Inicie sesión en el [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) y acceda al apartado `Llaves SSH`{.action}. Si necesita ayuda, consulte nuestra guía ["Crear claves SSH"](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#cpsshkey).

La clave pública almacenada en el área de cliente no es necesaria sin la clave privada correspondiente, por lo que puede eliminarla. Haga clic en el botón <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> situado a la derecha de la llave y seleccione `Eliminar la llave`{.action}.

![Eliminar la llave](images/replace-lost-key-01.png){.thumbnail}

En la nueva ventana, haga clic en `Confirmar`{.action}.

### Paso 2: Crear un nuevo par de claves

Cree un nuevo par de llaves SSH en su puesto de trabajo, tal y como se describe en la primera parte de la guía ["Crear claves SSH"](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

### Paso 3: Acceder al servidor en modo de rescate y sustituir la llave

Siga los pasos que se indican en la guía sobre el [modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) para conectarse a su servidor y montar las particiones.

Cuando acceda a sus archivos, abra el archivo "*authorized_keys*" correspondiente en un editor de texto. Este archivo almacena las llaves SSH y se encuentra en la carpeta `home` del usuario conectado al servidor. (Sustituya "USER_NAME" por su nombre de usuario.)

```
rescue-customer:~# sudo nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Copie su nueva clave pública (creada en el paso 2) en el archivo. El contenido del archivo debería tener el siguiente formato:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Puede borrar la cadena de clave "old" (ahora obsoleta) del archivo. Guarde y salga del editor.

Cambie al modo de arranque "normal" y reinicie el servidor desde el [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). Consulte la guía "["Activar y utilizar el modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)" si es necesario.

Ahora tiene acceso al servidor con su nuevo par de llaves SSH.

## Más información

[Cambiar la contraseña root en un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.