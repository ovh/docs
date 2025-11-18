---
title: "Cómo recuperar el acceso al servidor en caso de pérdida de la contraseña del usuario"
excerpt: "Cómo configurar una nueva contraseña para una cuenta de usuario en un sistema operativo GNU/Linux con el modo de rescate de OVHcloud"
updated: 2025-10-02
---

## Objetivo

Sin otro modo de autenticación u otra cuenta de usuario, la pérdida de su contraseña significa que no podrá conectarse a su servidor de forma normal.

En ese caso, puede conectarse a su servidor a través del modo de rescate de OVHcloud, que le permite conectarse con una contraseña provisional y modificar sus archivos.

**Esta guía explica cómo restaurar la contraseña de su cuenta de usuario si ya no tiene acceso al servidor.**

> [!primary]
>
> Para consultar el acceso a un servidor al que se conecta con una llave SSH, consulte nuestra guía "[Cómo sustituir un par de llaves SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)".
>

## Requisitos

- Tener un [servidor dedicado](/links/bare-metal/bare-metal) o un [VPS](/links/bare-metal/vps) en su cuenta de OVHcloud
- Estar conectado a su [área de cliente de OVHcloud](/links/manager)

> [!primary]
> Esta guía no se aplica a las instalaciones de **Windows** Server. Consulte nuestras guías "[Cómo cambiar la contraseña de administrador en un servidor dedicado Windows](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)" y "[Cómo cambiar la contraseña de administrador en un VPS Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)".
>

## Procedimiento

No olvide consultar también nuestras guías de primeros pasos:

- Para un [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Para un [servidor dedicado de la gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Para un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con [nuestra comunidad](https://community.ovh.com/en/) si tiene problemas o dudas sobre la administración, el uso o la implementación de servicios en un servidor.
>

<a name="step1"></a>

### Paso 1 - Reiniciar el servidor en modo de rescate

Siga los pasos de nuestras guías sobre el modo de rescate para conectarse a su servidor y montar sus particiones:

- [Utilizar el modo de rescate en un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Utilizar el modo de rescate en un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Para continuar, debe montar la partición del sistema y tener acceso de escritura al sistema de archivos.

Esto significa que ha introducido una versión del siguiente comando en el shell de modo de rescate:

```bash
chroot path/to/partition/mountpoint/
```

El comando exacto depende del punto de montaje utilizado. Por ejemplo, si ha montado su partición en `/mnt`, el comando sería el siguiente:


```bash
chroot /mnt/
```

### Paso 2 - Identificar la(s) cuenta(s) de usuario y restablecer la contraseña

Después de montar la partición y ejecutar `chroot /mnt` (o el equivalente), dispone de privilegios **root** en el sistema montado.

Si es necesario, antes de modificar una contraseña, **identifique las cuentas existentes** con el siguiente comando:

```bash
cat /etc/passwd
```

Ejemplo de resultado (abreviado):

```console
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
.
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-network:x:998:998:systemd Network Management:/:/usr/sbin/nologin
syslog:x:102:102::/nonexistent:/usr/sbin/nologin
sshd:x:105:65534::/run/sshd:/usr/sbin/nologin
.
user1:x:1000:1000:Ubuntu:/home/ubuntu:/bin/bash
```

Encuentre el nombre del usuario en la lista de cuentas.

Para cambiar la contraseña de una cuenta específica (por ejemplo, **user1**), utilice este comando:

```bash
passwd user1
```

Introduzca la nueva contraseña dos veces:

```console
# New password:
# Retype new password:
# passwd: password updated successfully
```

En una distribución GNU/Linux, **una petición de contraseña no muestra las entradas de teclado**.

> [!primary]
>
> Evite ejecutar el comando `passwd` sin argumentos: este comando modifica la contraseña de la cuenta actual (que suele ser **root** después de ejecutar `chroot`).
> Indiquez systématiquement `passwd <usuario>`.

Recuerde utilizar el modo de arranque **normal** del servidor al reiniciarlo desde el [área de cliente de OVHcloud](/links/manager).

Consulte la [guía del modo de rescate](#step1) si es necesario.

La cuenta de usuario modificada ahora tiene acceso al servidor con la nueva contraseña.

## Más información

[Crear y utilizar llaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Modo de rescate para un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Modo de rescate para un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

[Configuración de las cuentas de usuario y del acceso root en un servidorv](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.