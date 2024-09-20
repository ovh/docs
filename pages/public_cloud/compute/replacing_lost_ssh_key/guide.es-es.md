---
title: "Cómo sustituir un par de claves SSH en una instancia Public Cloud"
excerpt: "Cómo restaurar el acceso al servidor sustituyendo un par de claves SSH por una nueva en caso de pérdida de la clave privada"
updated: 2024-06-13
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>


## Objetivo

La pérdida de su llave SSH privada conlleva la pérdida del acceso a su instancia si no ha configurado otro medio de acceso.

Sin embargo, todavía puede conectarse a su instancia a través del modo de rescate de OVHcloud, que le permite conectarse con una contraseña provisional y modificar sus archivos.

**Esta guía explica cómo sustituir las llaves SSH en caso de pérdida de acceso a la instancia.**

> [!warning]
> OVHcloud ofrece servicios cuya configuración y gestión son responsabilidad suya. Por lo tanto, es su responsabilidad asegurarse de que funcionen correctamente.
>
> Esta guía explica las tareas más habituales. No obstante, le recomendamos que contacte con un [proveedor de servicios especializado](/links/partner) o con [nuestra comunidad de usuarios](/links/community) si tiene algún problema.
>

## Requisitos

- Una [instancia de Public Cloud](/links/public-cloud/public-cloud) en su cuenta de OVHcloud
- Tienes acceso a tu [área de cliente de OVHcloud](/links/manager)

## Procedimiento

### Paso 1: crear un nuevo par de claves

Cree un nuevo par de llaves SSH en su dispositivo local, siguiendo las instrucciones de la primera parte de la [guía de creación de una llave SSH](/pages/public_cloud/compute/creating-ssh-keys-pci).

### Paso 2: acceder a su instancia en modo de rescate

Siga los pasos de la [guía del modo de rescate](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) para reiniciar la instancia en modo de rescate, conectarse a ella y montar sus particiones.

Una vez que haya utilizado el comando `mount` (como se describe en la guía) y que su partición del sistema esté accesible, puede utilizar el siguiente comando:

```bash
chroot path/to/partition/mountpoint
```

La ruta de acceso al archivo depende del punto de montaje utilizado. Si ha montado la partición en `/mnt`, debe introducir lo siguiente:

```bash
chroot /mnt/
```

Ahora debería tener acceso completo de escritura a los archivos de esta carpeta.

### Paso 3: sustituir la llave

Abra el archivo "authorized_keys" con un editor de texto. Este archivo almacena las claves SSH y se encuentra en la carpeta `home` del usuario con el que se conecta a su instancia.

Ejemplo:

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Sustituya `USER_NAME` por su nombre de usuario real.

Copie y pegue la nueva clave pública (creada en el paso 1) en el archivo. Debería ser similar al ejemplo siguiente:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Por motivos de seguridad, quite la cadena de clave obsoleta "old" del archivo. Guarde los cambios y salga del editor.

Reinicie la instancia en modo normal desde su [área de cliente de OVHcloud](/links/manager). Consulte las instrucciones de [guide sur le mode rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) si es necesario.

Ya puede acceder a la instancia con su nuevo par de claves SSH.

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).
