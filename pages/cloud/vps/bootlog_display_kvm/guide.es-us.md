---
title: 'Visualización del registro de inicio en el KVM'
slug: boot-log
section: Diagnóstico y modo de rescate
excerpt: 'Cómo diagnosticar un VPS utilizando los logs de arranque (boot logs)'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 05/07/2021**

## Objetivo

Si su VPS no responde, siempre debería poder acceder a él desde el área de cliente a través del [KVM](../utilizar_el_kvm_para_los_vps/). La forma más rápida de diagnosticar el problema es comprobar los logs de arranque (boot logs) del servidor. No obstante, la configuración GRUB debe modificarse para que aparezcan estos logs. 

> [!primary]
>
> Tenga en cuenta que en algunos entornos el KVM no le proporcionará información útil, ya que la secuencia de arranque aparece en el puerto serie en el que GRUB está configurado en modo silencioso.
>

**Esta guía explica cómo activar los logs de "boot" que le pueden ayudar a reparar un VPS.**

> [!warning]
> OVHcloud le ofrece los servicios que usted es responsable de configurar y gestionar. Usted es responsable de su buen funcionamiento.
>
>Si necesita ayuda para realizar estas acciones, póngase en contacto con un proveedor de servicios especializado o intercambie información con nuestra comunidad de usuarios en <https://community.ovh.com/>. OVHcloud no podrá ofrecerle soporte técnico.
>

## Requisitos

- Disponer de un [VPS](https://www.ovhcloud.com/es/vps/) en su cuenta de OVHcloud
- Tener acceso al [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws)

## Procedimiento

> [!warning]
>
> Estos cambios modificarán la configuración del Grub. Antes de realizar cualquier modificación, OVHcloud no puede ser considerado responsable del daño o la pérdida de los datos resultantes de esta operación.
>

Si todavía tiene acceso a su VPS por SSH, puede pasar a [la etapa 6](#step6).

### Paso 1: reiniciar el VPS en modo de rescate

Inicie sesión en el [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) y reinicie el servidor en modo de rescate. Si lo necesita, consulte nuestra [guía sobre el modo de rescate](../rescue/).

### Paso 2: efectuar la verificación inicial

En las antiguas gamas de VPS, las particiones se montarán automáticamente en modo de rescate. Puede utilizar los siguientes comandos para verificar e identificar la ubicación de montaje de la partición:

#### **df -h**

```sh
~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

#### **lsblk**

```sh
~$ lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

El ejemplo anterior muestra que la partición del sistema está montada en **/mnt/sdb1**. (El disco principal es **sdb**. El disco rescue es **sda** y **sda1** es la partición principal en rescue montada en **/**).

Si su VPS pertenece a las [**gamas VPS actuales**](https://www.ovhcloud.com/es/vps/), no se realizará ningún montaje automático y la columna "MOUNTPOINT" debería estar vacía. En ese caso, vaya al [paso 4](#step4).

### Paso 3: desmontar la partición (solo para las antiguas gamas VPS)

En un VPS perteneciente a las antiguas gamas en modo de rescate, el disco principal ya está montado. Por lo tanto, debe desmontarse primero antes de volver al paso 4:

```sh
~$ umount /dev/sdb1
```

### Paso 4: montar la partición con los parámetros adecuados <a name="step4"></a>

Si su VPS pertenece a las [**gamas VPS actuales**](https://www.ovhcloud.com/es/vps/), compruebe que la carpeta de montaje esté creada:

```sh
~$ mkdir -p /mnt/sdb1
```

Introduzca los siguientes comandos para montar la partición con los parámetros adecuados:

```sh
~$ mount /dev/sdb1 /mnt/sdb1
~$ mount -t proc none /mnt/sdb1/proc
~$ mount -o bind /dev /mnt/sdb1/dev
~$ mount -t sysfs none /mnt/sdb1/sys/
```

La partición del sistema está montada para utilizarse con el comando `chroot`, para ejecutar acciones que necesitan acceso a los repertorios `sys`, `dev` y `proc`.

### Paso 5: utilizar el comando CHROOT para configurar sus archivos de sistema

A continuación, acceda a los archivos GRUB de su sistema y los cambie. Para ello, utilice el comando `chroot`:

```sh
~$ chroot /mnt/sdb1
```

A partir de ahora, todos los comandos que introduzca se aplicarán a su VPS en lugar del entorno temporal del modo de rescate.

### Paso 6: modificar la configuración GRUB <a name="step6"></a>

#### **Para Debian 8 o superior y Ubuntu 18 o superior**

Cree una copia de seguridad del archivo de configuración:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Para acceder a los logs de arranque con la consola KVM, asegúrese de que dispone del siguiente valor en el archivo `/etc/default/grub`:

```sh
GRUB_CMDLINE_LINUX_DEFAULT="console=ttyS0 console=tty0"
```

Si esta línea no existe o es diferente, edite el archivo con un editor y guárdelo.

A continuación, utilice el siguiente comando para regenerar el archivo de configuración GRUB (los cambios se guardarán la próxima vez que se reinicie):

```sh
~$ update-grub
```

#### **Para CentOS 7 o superior (grub2)**

Cree una copia de seguridad del archivo de configuración:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Para acceder a los logs de arranque con la consola KVM, asegúrese de que dispone de los siguientes valores en el archivo `/etc/default/grub` :

```sh
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="console=ttyS0,115200n8 no_timer_check net.ifnames=0 crashkernel=auto rhgb"
GRUB_CMDLINE_LINUX_DEFAULT="console=tty0 console=ttyS0"
```

Si estas líneas no aparecen o son diferentes, edite el archivo con un editor y guárdelo.

A continuación, utilice el siguiente comando para regenerar el archivo de configuración GRUB (los valores se guardarán para el siguiente reinicio):

```sh
~$ grub2-mkconfig -o "$(readlink /etc/grub.cfg)"
```

Una vez realizados los cambios, reinicie su VPS en modo "normal" desde el [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). Los logs de arranque deben aparecer al utilizar la [consola KVM](../utilizar_el_kvm_para_los_vps/).

## Más información

[Utilizar el KVM en un VPS](../utilizar_el_kvm_para_los_vps/)

[Activar el modo de rescate en un VPS](../rescue/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.