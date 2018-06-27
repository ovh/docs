---
title: Cambiar la contraseña «root» de un VPS
slug: root-password
excerpt: Cómo cambiar la contraseña «root» de un VPS
section: Diagnóstico y modo de rescate
---

**Última actualización: 27/06/2018**

## Objetivo

Al instalar o reinstalar una distribución, recibirá una contraseña para acceder en modo *root*. Le aconsejamos encarecidamente que cambie esta contraseña por motivos de seguridad (el procedimiento se explica en la guía [Proteger un VPS](https://docs.ovh.com/es/vps/consejos-proteccion-vps){.external}). También es posible que necesite cambiarla porque la haya perdido. Esta guía explica cómo cambiar la contraseña *root* de un VPS en estos dos casos.

## Requisitos

- Estar conectado al VPS por SSH (acceso *root*).
- [Reiniciar el VPS en modo de rescate](https://docs.ovh.com/es/vps/rescue/){.external}.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Procedimiento

### Cambiar la contraseña si tiene acceso al usuario *root*

Si conoce su contraseña, el procedimiento es muy sencillo. Conéctese al servidor e introduzca el siguiente comando:

```sh
passwd
```

A continuación introduzca la nueva contraseña una primera vez y después confírmela introduciéndola de nuevo. Recibirá la siguiente respuesta:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> En las distribuciones Linux, **no se mostrará la contraseña** mientras la introduzca.
> 

### Cambiar la contraseña si no tiene acceso al usuario *root*

Si ha perdido la contraseña, deberá proceder como se indica a continuación.

#### 1. Identificar el punto de montaje

En los VPS 2016, el montaje se realiza automáticamente, por lo que es necesario identificar dónde está montada la partición. Para ello, puede utilizar cualquiera de los siguientes dos comandos:

##### df -h

```sh
root@rescue-pro:~# df -h
Size Used Avail Use% Mounted on
/dev/vda1 4.7G 1.3G 3.2G 29% /
udev 10M 0 10M 0% /dev
tmpfs 774M 8.4M 766M 2% /run
tmpfs 1.9G 0 1.9G 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 1.9G 0 1.9G 0% /sys/fs/cgroup
/dev/vdb1 20G 934M 18G 5% /mnt/vdb1
```

##### lsblk

```sh
root@rescue-pro:~# lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
vda 254:0 0 4.9G 0 disk
└─vda1 254:1 0 4.9G 0 part /
vdb 254:16 0 20G 0 disk
└─vdb1 254:17 0 20G 0 part /mnt/vdb1
```

Aquí observamos que nuestra partición de sistema está montada en **/mnt/vdb1**.


#### 2. Permisos *chroot*

Ahora modifique el directorio raíz para que los cambios se realicen en su sistema. Esta operación puede realizarse con el comando `chroot` como se indica a continuación:

```sh
root@rescue-pro:~# chroot /mnt/vdb1/
root@rescue-pro:/#
```

Compruebe que dispone de permisos *chroot* con el comando `ls -l`, que mostrará el contenido situado en la raíz del sistema:

```sh
root@rescue-pro:/# ls -l
```

#### 3. Cambiar la contraseña *root*

Ya solo tiene que cambiar la contraseña *root* con el comando `passwd`:

```sh
passwd
```
```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Por último, reinicie el VPS sobre el disco desde el área de cliente de OVH.

## Más información

[Introducción al SSH](https://docs.ovh.com/es/dedicated/ssh-introduction/){.external}

[Activar el modo de rescate en un VPS](https://docs.ovh.com/es/vps/rescue/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.