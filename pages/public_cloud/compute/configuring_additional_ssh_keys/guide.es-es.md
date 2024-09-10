---
title: Cómo configurar llaves SSH adicionales en una instancia
excerpt: Cómo configurar llaves SSH adicionales para las cuentas de usuario y añadirlas a su instancia Public Cloud
updated: 2024-09-09
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 


## Objetivo

Al crear una instancia en el área de cliente, solo puede añadir una llave SSH para la cuenta de usuario preconfigurada. Para conectarse a su instancia con otras cuentas de usuario, puede crear más claves y añadirlas a la instancia en pocos pasos.

**Esta guía explica cómo configurar llaves SSH adicionales para las conexiones a su instancia.**

> [!warning]
> OVHcloud ofrece servicios cuya configuración y gestión son responsabilidad suya. Por lo tanto, es su responsabilidad asegurarse de que funcionen correctamente.
>
> Esta guía explica las tareas más habituales. No obstante, le recomendamos que contacte con un [proveedor de servicios especializado](/links/partner) o con [nuestra comunidad](/links/community) si tiene algún problema.
>

## Requisitos

- Una [instancia de Public Cloud](/links/public-cloud/public-cloud) en su cuenta de OVHcloud
- [Acceso administrativo a su instancia por SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#login-linux)

## Procedimiento

> [!primary]
>
> Actualmente soportamos los siguientes formatos de llave SSH: **RSA**, **ECDSA** y **ED25519**.
>
> Tenga en cuenta que las siguientes instrucciones son para uso general y están basadas en un sistema operativo de servidor Ubuntu. Es posible que algunos comandos requieran personalización en función de la distribución o el sistema operativo que utilice.
>

### Paso 1: crear un nuevo par de llaves SSH

Si es necesario, utilice nuestra [guía de claves SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) para crear un nuevo par de claves SSH.  
También encontrará información sobre [la gestión de varias claves](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) en su estación de trabajo local si su instalación lo requiere.

### Paso 2: configurar una nueva cuenta de usuario

[Conéctese a su instancia](/pages/public_cloud/compute/public-cloud-first-steps#connect-to-instance) y utilice los siguientes comandos para crear una nueva cuenta de usuario y una carpeta `.ssh`:

```bash
sudo adduser user2
```


```console
info: Adding user `user2' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `user2' (1003) ...
info: Adding new user `user2' (1003) with group `user2 (1003)' ...
info: Creating home directory `/home/user2' ...
info: Copying files from `/etc/skel' ...
New password: 
Retype new password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
        Full Name []:
        Room Number []:
        Work Phone []: 
        Home Phone []: 
        Other []: 
Is the information correct? [Y/n] y
info: Adding new user `user2' to supplemental / extra groups `users' ...
info: Adding user `user2' to group `users' ...
```

```bash
sudo mkdir /home/user2/.ssh/
```

Sin más pasos, la cuenta de usuario `user2` de este ejemplo no tiene permisos elevados. Si debe conceder a esta cuenta los privilegios root en su instancia, añádala al `sudo group`:

```bash
sudo usermod -aG sudo user2
```

Para más información sobre los permisos de los usuarios y temas relacionados, consulte nuestra [guía de cuentas de usuario](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Paso 3: añadir la clave pública SSH a su instancia

#### Transferencia de claves públicas creadas en sistemas basados en GNU/Linux, macOS o BSD

Si ha creado sus pares de claves SSH en un sistema basado en GNU/Linux, macOS o BSD, puede utilizar el comando `ssh-copy-id` para añadir las claves públicas a su servidor.

La utilidad `ssh-copy-id` copia las claves públicas en el archivo `~/.ssh/authorized_keys` en el servidor remoto especificado y crea automáticamente el archivo en este directorio si es necesario.

```bash
ssh-copy-id username@IP_ADDRESS
```

Por defecto, `ssh-copy-id` intentará transferir **todas** las claves públicas al directorio `~/.ssh` del usuario local. Para añadir una sola clave pública, puede especificar este archivo de clave con la opción `-i` seguida de la ruta de acceso al archivo:

```bash
ssh-copy-id -i ~/.ssh/KeyFileName username@IP_ADDRESS
```

Ejemplo:

```bash
ssh-copy-id -i ~/.ssh/myInstance_rsa.pub user2@203.0.113.102
```

Se le pedirá la contraseña del usuario. Si tiene éxito, recibirá un mensaje similar al siguiente:

```console
Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'user@server-ip'"
and check to make sure that only the key(s) you wanted were added.
```

Si recibe un mensaje de error en su lugar, puede agregar las claves públicas manualmente siguiendo los pasos que se describen a continuación.

> [!primary]
>
> Por motivos de seguridad y buenas prácticas, no es necesario que varios usuarios utilicen un par de claves. Dado que cada usuario de los sistemas GNU/Linux tiene su propio archivo `authorized_keys` en `~/.ssh/`, puede utilizar el comando `ssh-copy-id` como se ha indicado anteriormente y adaptar `KeyFileName` y `user` después de [crear el par de claves](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).
>

#### Añadir manualmente claves públicas a la instancia

[Conéctese a su instancia](/pages/public_cloud/compute/public-cloud-first-steps#connect-to-instance) y abra, con su editor de texto preferido (`nano` se utiliza en este ejemplo), el archivo `authorized_keys` en la carpeta personal del nuevo usuario:

```bash
sudo nano /home/user2/.ssh/authorized_keys
```

Pegue **cadena de clave pública** en este archivo. Guarde el archivo y salga del editor.

Reinicie su instancia (`sudo reboot`) o reinicie únicamente el servicio OpenSSH con uno de los siguientes comandos (el comando adecuado puede variar en función del sistema operativo):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

El nuevo usuario ahora puede conectarse a la instancia desde el dispositivo que almacena la clave SSH privada correspondiente:

```bash
ssh username@IP_ADDRESS
```

Ejemplo:

```bash
ssh user2@203.0.113.102
```

Consulte la [guía sobre las claves SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) para saber más sobre el uso de las claves SSH con las instancias Public Cloud.

## Más información

[Cómo crear instancias de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Cómo sustituir un par de claves SSH en una instancia Public Cloud por el modo de rescate](/pages/public_cloud/compute/replacing_lost_ssh_key)

Interactúe con nuestra [comunidad de usuarios](/links/community).