---
title: "Sustitución del par de claves SSH"
excerpt: "Cómo restaurar el acceso al servidor en caso de pérdida de la clave privada generando un nuevo par de claves SSH"
updated: 2024-04-04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Si [utiliza llaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) para conectarse a su servidor, la pérdida de su llave SSH privada podría significar la pérdida total de acceso a su servidor.

No obstante, podrá conectarse al servidor utilizando el [modo de rescate de OVHcloud](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) con una contraseña provisional que le permitirá modificar sus archivos.

**Esta guía explica cómo sustituir las llaves SSH en caso de pérdida de acceso al servidor.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#mas-informacion) de esta guía.
>

## Requisitos

- Tener un [servidor dedicado](/links/bare-metal/bare-metal/) o un [VPS](https://www.ovhcloud.com/es/vps/) en su cuenta de OVHcloud
- Tienes acceso a tu [Panel de configuración de OVHcloud](/links/manager).

## Procedimiento

### Paso 1: Crear un nuevo par de claves

Cree un nuevo par de llaves SSH en su puesto de trabajo, tal y como se describe en la primera parte de la guía ["Crear claves SSH"](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

<a name="step2"></a>

### Paso 2: Acceder al servidor en modo de rescate y sustituir la llave

Siga los pasos que se indican en la guía sobre el modo de rescate para conectarse a su servidor y montar las particiones:

- [Modo de rescate del servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [VPS modo de rescate](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Cuando acceda a sus archivos, abra el archivo "*authorized_keys*" correspondiente en un editor de texto. Este archivo almacena las llaves SSH y se encuentra en la carpeta `home` del usuario conectado al servidor. (Sustituya "USER_NAME" por su nombre de usuario.)

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Copie su nueva clave pública (creada en el paso 1) en el archivo. El contenido del archivo debería tener el siguiente formato:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Por motivos de seguridad, elimine la cadena de clave "old" (ahora obsoleta) del archivo. Guarde y salga del editor.

Cambie al modo de arranque "normal" y reinicie el servidor desde el [Panel de configuración de OVHcloud](/links/manager). Consulte la guía "[Activar y utilizar el modo de rescate](#step2)" si es necesario.

Ahora tiene acceso al servidor con su nuevo par de llaves SSH.

## Más información

[Introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Modo de rescate del servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[VPS modo de rescate](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.