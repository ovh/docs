---
title: "Sustitución del par de claves SSH"
excerpt: "Cómo restaurar el acceso al servidor en caso de pérdida de la clave privada generando un nuevo par de claves SSH"
updated: 2024-04-04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Si [utiliza llaves SSH](creating-ssh-keys-dedicated1.) para conectarse a su servidor, la pérdida de su llave SSH privada podría significar la pérdida total de acceso a su servidor.

No obstante, podrá conectarse al servidor utilizando el [modo de rescate de OVHcloud](rescue_mode1.) con una contraseña provisional que le permitirá modificar sus archivos.

**Esta guía explica cómo sustituir las llaves SSH en caso de pérdida de acceso al servidor.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#mas-informacion.) de esta guía.
>

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es/bare-metal/) o un [VPS](https://www.ovhcloud.com/es/vps/) en su cuenta de OVHcloud
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

### Paso 1: Crear un nuevo par de claves

Cree un nuevo par de llaves SSH en su puesto de trabajo, tal y como se describe en la primera parte de la guía ["Crear claves SSH"](creating-ssh-keys-dedicated1.).

<a name="step2"></a>

### Paso 2: Acceder al servidor en modo de rescate y sustituir la llave

Siga los pasos que se indican en la guía sobre el modo de rescate para conectarse a su servidor y montar las particiones:

- [Modo de rescate del servidor dedicado](rescue_mode1.)
- [VPS modo de rescate](rescue1.)

Cuando acceda a sus archivos, abra el archivo "*authorized_keys*" correspondiente en un editor de texto. Este archivo almacena las llaves SSH y se encuentra en la carpeta `home` del usuario conectado al servidor. (Sustituya "USER_NAME" por su nombre de usuario.)

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Copie su nueva clave pública (creada en el paso 2) en el archivo. El contenido del archivo debería tener el siguiente formato:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Por motivos de seguridad, elimine la cadena de clave "old" (ahora obsoleta) del archivo. Guarde y salga del editor.

Cambie al modo de arranque "normal" y reinicie el servidor desde el [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). Consulte la guía "[Activar y utilizar el modo de rescate](#step2.)" si es necesario.

Ahora tiene acceso al servidor con su nuevo par de llaves SSH.

## Más información

[Introducción al SSH](ssh_introduction1.)

[Modo de rescate del servidor dedicado](rescue_mode1.)

[VPS modo de rescate](rescue1.)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.