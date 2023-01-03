---
title: 'Crear y configurar un disco adicional en una instancia'
excerpt: 'Cómo asociar un nuevo volumen a una instancia de Public Cloud'
slug: crear_y_configurar_un_disco_adicional_en_una_instancia
legacy_guide_number: g1863
section: Almacenamiento
order: 1
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 04/01/2023**

## Objetivo

Puede crear discos adicionales para sus instancias de Public Cloud.
Esto puede ser útil en los siguientes casos:

- Si quiere aumentar su capacidad de almacenamiento sin tener que cambiar el modelo de instancia.
- Si quiere disponer de un espacio de almacenamiento de alta disponibilidad y buen rendimiento.
- Si desea transferir su almacenamiento y sus datos a otra instancia.

**Esta guía explica cómo crear un disco adicional y configurarlo en una instancia.**

## Requisitos

- Tienes acceso a tu [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- Disponer de una instancia de [Public Cloud](https://www.ovhcloud.com/es/public-cloud/){.external} en su cuenta de OVHcloud.
- Tener acceso de administrador (root) a su instancia a través de SSH.

> [!warning]
> Esta funcionalidad no está actualmente disponible para instancias Metal.
>

## Procedimiento

### Asociar un nuevo volumen

Conéctese al [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto de Public Cloud correspondiente. A continuación, abra `Block Storage`{.action} en el menú de la izquierda.

En esta sección, haga clic en el botón `Crear un volumen`{.action}.

![Seleccionar el proyecto Public Cloud](images/avolume01.png){.thumbnail}

Siga los pasos de configuración para seleccionar las opciones de ubicación, tipo de disco y capacidad de disco. Introduzca un nombre para el volumen y haga clic en `Crear el volumen`{.action}.

![create disk](images/avolume02.png){.thumbnail}

El nuevo disco se mostrará en el área de cliente.

![configure disk](images/avolume03.png){.thumbnail}

A la derecha del volumen, haga clic en el botón `...`{.action} y seleccione `Asociar a la instancia`{.action}.

![attach disk 01](images/avolume04.png){.thumbnail}

En la nueva ventana, seleccione una instancia de la lista y haga clic en `Confirmar`{.action} para asociar el disco.

![attach disk 02](images/avolume05.png){.thumbnail}

A continuación comenzará el proceso de vinculación del disco a su instancia. La operación puede tardar unos minutos.

> [!warning]
> No abandone la página actual del área de cliente de OVHcloud cuando se esté conectando el disco. Esto podría interrumpir el proceso.
>

### Configuración del nuevo disco

Los siguientes ejemplos implican que está conectado como usuario con los permisos suficientes.

#### En Linux

Abra una [conexión SSH a su instancia](https://docs.ovh.com/us/es/public-cloud/public-cloud-primeros-pasos/#connect-to-instance) y utilice el siguiente comando para mostrar los discos asociados.

```bash
~$ admin@server-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```

> [!primary]
>
> En este ejemplo, `vda` hace referencia al disco por defecto de la instancia. El disco adicional se llamará `vdb`.
>

Cree una partición en el disco adicional con los siguientes comandos.

```bash
~$ admin@server-1:~$ sudo fdisk /dev/vdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.
```

```bash
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

```bash
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

A continuación, forme la nueva partición `vdb1` con el siguiente comando:

```bash
~$ admin@server-1:~$ sudo mkfs.ext4 /dev/vdb1
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

monte la partición con los siguientes comandos:

```bash
admin@server-1:~$ sudo mkdir /mnt/disk
admin@server-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```

Por último, compruebe el punto de montaje utilizando el siguiente comando:

```bash
~$ admin@server-1:~$ df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 9.8G 23M 9.2G 1% /mnt/disk
```

> [!primary]
>
> El montaje no es persistente, ya que el disco se desvinculará al reiniciar la instancia. Para automatizar el montaje, es necesario editar el archivo `fstab`.
>

En primer lugar, consulte el UUID (block ID) del nuevo volumen:

```bash
~$ admin@server-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Abra `/etc/fstab` con un editor de texto:

```
~$ sudo nano /etc/fstab
```

Añada la siguiente línea al archivo y sustituya el UUID por el suyo:

```console
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```

Guarde y salga del editor. El disco debe montarse automáticamente cada vez que se reinicie.

#### En Windows

Establezca una conexión RDP (Remote Desktop) con su instancia Windows.

Una vez que se haya conectado, haga clic derecho en el botón `Iniciar`{.action} y abra `Gestión de discos`{.action}.

![disk management](images/start-menu.png){.thumbnail}

El nuevo disco se mostrará como volumen desconocido con espacio no asignado.

![volumen desconocido](images/disk-management-01.png){.thumbnail}

Si el disco está marcado como desconectado, deberá inicializarlo primero. Para ello, puede utilizar la [interfaz de usuario Windows](#initDiskManagement) o la [utilidad DISKPART](#initDiskpart). De lo contrario, realice el [formateo del disco en Gestión de discos](#formatDiskManagement).

##### **Iniciar el disco en Gestión de discos** <a name="initDiskManagement"></a>

Haga clic derecho en el disco y seleccione `En línea`{.action}. 

Si el disco está indicado aquí como desconectado, probablemente se deba a una política en la instancia. Para solucionar el problema, haga clic derecho en el disco y seleccione `On-line`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

Haga clic derecho de nuevo y seleccione `Inicializar disco`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

A continuación, seleccione `MBR`{.action} y haga clic en `Aceptar`{.action}.

![initialise disk](images/initialise-disk.png){.thumbnail}

##### **Iniciar el disco con DISKPART** <a name="initDiskpart"></a>

Haga clic derecho en el botón `Iniciar`{.action} y abra `Ejecutar`{.action}.

![initialise disk](images/diskpart.png){.thumbnail}

Pulse `cmd` y haga clic en `Aceptar`{.action} para abrir la aplicación de línea de órdenes.

![run rápido](images/run-prompt.png){.thumbnail}

En el pedido, abra DISKPART:

```
C:\> diskpart
```

Utilice la siguiente serie de comandos DISKPART para poner el disco `en línea`:

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system .

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

##### **Formateado del disco** <a name="formatDiskManagement"></a>

En la herramienta de `gestión de discos`{.action}, haga clic derecho en el nuevo disco y seleccione `Nuevo volumen simple...`{.action}.

![formato disk](images/format-disk-01.png){.thumbnail}

En el asistente, haga clic en `Siguiente`{.action} para especificar el tamaño del volumen. Por defecto, debe estar al máximo. Haga clic en `Siguiente`{.action} para continuar.

![formato disk](images/format-disk-03.png){.thumbnail}

Deje la nueva letra predeterminada o seleccione otra y haga clic en `Siguiente`{.action}.

![formato disk](images/format-disk-04.png){.thumbnail}

Asigne un nombre al volumen (opcional) y confirme las opciones de formato haciendo clic en `Siguiente`{.action}.

![formato disk](images/format-disk-05.png){.thumbnail}

En la última ventana, haga clic en `Finalizar`{.action} para dar formato al disco.

![formato disk](images/format-disk-06.png){.thumbnail}

El disco estará disponible como lector en el explorador de archivos.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.