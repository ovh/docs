---
title: 'Crear y configurar un disco adicional en una instancia'
excerpt: 'Crear y configurar un disco adicional en una instancia'
slug: crear_y_configurar_un_disco_adicional_en_una_instancia
legacy_guide_number: g1863
section: Almacenamiento
---

**Última actualización: 14 de noviembre de 2019**

## Objetivo

Es posible crear discos adicionales para sus instancias de Public Cloud.
Esto puede ser útil en los siguientes casos:

* Si quiere aumentar la capacidad de almacenamiento sin cambiar de modelo de instancia.
* Si quiere disponer de un almacenamiento de alta disponibilidad y alto rendimiento.
* Si quiere trasladar su espacio de almacenamiento y sus datos a otra instancia.

**Esta guía explica cómo crear y configurar un disco adicional en una de sus instancias.**

## Requisitos

* Tener acceso al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
* Tener una [instancia Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/){.external} en su cuenta de OVHcloud.
* Tener acceso a su instancia por SSH como administrador (root).

## Procedimiento

Primero, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} y haga clic en el menú `Public Cloud`{.action}. Haga clic en el `Proyecto`{.action} en el que quiere crear la instancia.

Ahora, haga clic en el botón `Acciones`{.action} y seleccione `Crear un volumen`{.action}.

![select project](images/attach-disk-01.png){.thumbnail}

En el siguiente paso, configure el disco: seleccione tipo de disco, tamaño y ubicación. Cuando haya terminado, haga clic en el botón `Añadir`{.action}.

![create disk](images/attach-disk-02.png){.thumbnail}

El nuevo disco aparecerá en su área de cliente.

![configure disk](images/attach-disk-03.png){.thumbnail}

Para asociar el disco a una instancia, haga clic en los tres puntos de la derecha y seleccione `Asociar a una instancia`{.action}.

![attach disk 01](images/attach-disk-04.png){.thumbnail}

Seleccione ahora la instancia y haga clic en `Confirmar`{.action} para asociar el disco.

![attach disk 02](images/attach-disk-05.png){.thumbnail}

El proceso para asociar el disco a su instancia dará comienzo y podría tardar unos minutos en completarse.

![attach disk 03](images/attach-disk-06.png){.thumbnail}

> [!warning]
Evite salir de la pestaña Infrastructure mientras se realiza la vinculación del disco. De lo contrario, el proceso podría verse interrumpido.
>

### Con Linux

En primer lugar, conéctese por SSH a su instancia y utilice el siguiente comando para mostrar la lista de discos de la instancia.

```
# admin@serveur-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```

> [!primary]
>
Por lo general, VDA hace referencia al disco principal de la instancia. Por lo tanto, VDB hace referencia al disco adicional.
>

A continuación, cree una partición en el disco adicional utilizando el siguiente comando:

```
# admin@serveur-1:~$ sudo fdisk /dev/vdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.
```



```
Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-20971519, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-20971519, default 20971519):

Created a new partition 1 of type 'Linux' and of size 10 GiB.
```



```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Después, formatee la partición utilizando el siguiente comando:

```
# admin@serveur-1:~$ sudo mkfs.ext4 /dev/vdb1
mke2fs 1.42.12 (29-Aug-2014)
Creating filesystem with 2621184 4k blocks and 655360 inodes
Filesystem UUID: 781be788-c4be-462b-b946-88429a43c0cf
Superblock backups stored on blocks:
32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632

Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```

Monte la partición con este comando:

```
admin@serveur-1:~$ sudo mkdir /mnt/disk
admin@serveur-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```


Finalmente, compruebe el punto de montaje con este comando:

```
admin@serveur-1:~$ df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 9.8G 23M 9.2G 1% /mnt/disk
```

Si quiere crear un punto de montaje persistente, tendrá que cambiar el /etc/fstab. Primero, recupere el identificador del bloque (block ID) con el comando siguiente:

```
admin@serveur-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Ahora puede utilizar el block ID para cambiar el archivo /etc/fstab.

```
admin@serveur-1:~$ vim /etc/fstab

/etc/fstab: static file system information.

# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point> <type> <options> <dump> <pass>
UUID=51ba13e7-398b-45f3-b5f3-fdfbe556f62c / ext4 defaults 0 0
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```

### Con Windows

Primero, haga clic derecho en el `Menú Inicio`{.action} y después en `Administración de discos`{.action}.

![](images/start-menu.png){.thumbnail}

Cuando se abra la herramienta de administración de discos, aparecerá su nuevo disco como volumen desconocido con espacio sin asignar, como se muestra a continuación.

![disk management](images/disk-management-01.png){.thumbnail}

#### Inicializar el disco con la herramienta de administración de discos

Si el disco está desconectado, puede que se deba a alguna política aplicada a la instancia. Para solucionarlo, haga clic derecho sobre el disco y seleccione `En línea`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

A continuación, haga clic derecho de nuevo sobre el disco y seleccione esta vez `Inicializar Disco`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

Seleccione `MBR`{.action} y haga clic en `OK`{.action}.

![initialise disk](images/initialise-disk.png){.thumbnail}

#### Inicializar el disco con DISKPART

Primero haga clic derecho en el `Menú Inicio`{.action} y después en `Ejecutar`{.action}.

![initialise disk](images/diskpart.png){.thumbnail}

Después, escriba `cmd` en la línea de comando y haga clic en `OK`{.action}.

![run prompt](images/run-prompt.png){.thumbnail}

Escriba el siguiente comando para abrir la herramienta DISKPART.

```
C:\> diskpart
```

A continuación, cambie la política del disco con los siguientes comandos:

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system . [/ Code]

- Implementation of the strategy on the extra disk:
[Code] DISKPART> list disk

Disk ### Status Size Free Dyn Gpt
-------- ------------- ------- ------- --- ---
Disk 0 Online 200 GB 0 B
* Disk 1 Offline 10 GB 1024 KB
```

```
DISKPART> select disk 1

Disk 1 is now the selected disk.
```

```
DISKPART> attributes disk clear readonly

Disk attributes cleared successfully.
```

```
DISKPART> attributes disk

Current Read-only State : No
Read-only : No
Boot Disk : No
Pagefile Disk : No
Hibernation File Disk : No
Crashdump Disk : No
Clustered Disk : No
```

```
DISKPART> online disk

DiskPart successfully onlined the selected disk.
```

#### Formatear el disco

Abra de nuevo la herramienta de administración de discos, haga clic derecho en el volumen, y después haga clic en `Nuevo volumen simple...`{.action}

![format disk](images/format-disk-01.png){.thumbnail}

Haga clic en `Siguiente`{.action}.

![format disk](images/format-disk-02.png){.thumbnail}

Ahora especifique el tamaño de disco que desea. Por lo general, querremos utilizar el 100% del espacio disponible. Una vez hecho esto, haga clic en `Siguiente`{.action}.

![format disk](images/format-disk-03.png){.thumbnail}

Seleccione de la lista desplegable una letra de unidad para identificar el volumen, y haga clic en `Siguiente`{.action}.

![format disk](images/format-disk-04.png){.thumbnail}

Seleccione las opciones que desee para el volumen y haga clic en `Siguiente`{.action} para llevar a cabo la operación de formateo.

![format disk](images/format-disk-05.png){.thumbnail}

Por último, haga clic en `Finalizar`{.action} para terminar la operación.

![format disk](images/format-disk-06.png){.thumbnail}

Una vez formateado el disco, podrá acceder a él fácilmente desde el explorador de archivos.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.