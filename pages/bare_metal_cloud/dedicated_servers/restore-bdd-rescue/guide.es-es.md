---
title: "Obtención de las bases de datos en modo de rescate"
excerpt: "Cómo acceder a las bases de datos y guardarlas en modo de rescate"
updated: 2023-04-13
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

El modo de rescate permite acceder a sus datos de forma permanente, aunque el sistema operativo del servidor o los programas alojados en él no funcionen.

**Esta guía explica cómo acceder al sistema operativo en modo de rescate y descargar los archivos de la base de datos.**

## Requisitos

- Un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/), un [VPS](https://www.ovhcloud.com/es-es/vps/) o una instancia de [Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/) en su cuenta de OVHcloud (excepto sistemas Windows)
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).


> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Este tutorial le ayudará a realizar las tareas más habituales. No obstante, si tiene dificultades o dudas con respecto a la administración, el uso o la instalación de servicios en un servidor, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) o con [nuestra comunidad](https://community.ovh.com/en/).
>


## Procedimiento

### Reiniciar el servidor en modo de rescate

Para activar el modo de rescate en OVHcloud, consulte la guía correspondiente:

- [Servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instancia Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

Siga las instrucciones de [esta sección](#pci) para un **VPS** o una instancia de **Public Cloud**. Vaya a la [siguiente sección](#dedicated) para un servidor **dedicado**. 

### Acceder a sus datos en un VPS o una instancia de Public Cloud <a name="pci"></a>

En primer lugar, debemos identificar el punto de montaje que contiene el `/` sistema.

Para ello, puede utilizar los comandos `lsblk` y `fdisk -l`.

- Ejemplo de salida **lsblk**:

```output
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   10G  0 disk
└─sdb1   8:17   0   10G  0 part
```
 
- Ejemplo de salida **fdisk -l**:

```output
Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x961fcb1c
 
Device     Boot Start      End  Sectors Size Id Type
/dev/sdb1  *     2048 20971486 20969439  10G 83 Linux
 
 
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xaf5119d2
 
Device     Boot Start     End Sectors  Size Id Type
/dev/sda1  *     2048 5117951 5115904  2.5G 83 Linux
```

> [!primary]
>
> Las siguientes secciones de código se muestran a modo de ilustración, en relación con el ejemplo de salida anterior. Deberá ajustar las instrucciones con su configuración real y sustituir los valores de los comandos por sus claves de disco y volumen.
>

En este ejemplo, el disco principal (10 GB) se denomina "sdb". Así pues, nuestros datos in `/` se encuentran en la partición `/dev/sdb1`. (mientras que "sda" está en modo de rescate y "sda1" la partición principal en modo de rescate montado en `/`.)

Montamos la partición del sistema en la carpeta `/mnt` y luego verificamos su contenido:

```shell-session
root@rescue:~# mount /dev/sdb1 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

Para poder iniciar servicios en el sistema desde el modo de rescate, deberá montar las siguientes particiones:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/sdb1 on /mnt type ext4 (rw,relatime,data=ordered)
udev on /mnt/dev type devtmpfs (rw,nosuid,relatime,size=990236k,nr_inodes=247559,mode=755)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

Continúe con el apartado de recuperación de la [base de datos](#databases).
 
### Acceder a sus datos en un servidor dedicado (configuración RAID por software) <a name="dedicated"></a>

En primer lugar, debemos identificar el punto de montaje que contiene el `/` sistema.

Para ello, puede utilizar los comandos `lsblk` y `fdisk -l`.

Ejemplo de salida:

```shell-session
root@rescue:~# fdisk -l
```
```output
Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 5E158D46-2A45-42C9-8089-697BE070F669
 
Device          Start        End    Sectors    Size Type
/dev/sda1          40       2048       2009 1004.5K BIOS boot
/dev/sda2        4096    1050623    1046528    511M Linux RAID
/dev/sda3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sda4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sda5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 8039EE93-AB98-4EA1-B316-74EE89EF5EB6
 
Device          Start        End    Sectors    Size Type
/dev/sdb1          40       2048       2009 1004.5K BIOS boot
/dev/sdb2        4096    1050623    1046528    511M Linux RAID
/dev/sdb3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sdb4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sdb5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/md4: 1.8 TiB, 1978349322240 bytes, 3863963520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md3: 19.5 GiB, 20970405888 bytes, 40957824 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md2: 511 MiB, 535756800 bytes, 1046400 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

> [!primary]
>
> Las siguientes secciones de código se muestran a modo de ilustración, en relación con el ejemplo de salida anterior. Deberá ajustar las instrucciones con su configuración real y sustituir los valores de los comandos por sus claves de disco y volumen.
>

En este ejemplo, nuestros datos en `/` se encuentran en el volumen `/dev/md3`.

Montamos la partición del sistema en la carpeta `/mnt` y luego verificamos su contenido:

```shell-session
root@rescue:~# mount /dev/md3 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

Para poder iniciar servicios en el sistema desde el modo de rescate, deberá montar las siguientes particiones:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/md3 on /mnt type ext4 (rw,relatime,data=ordered)
devtmpfs on /mnt/dev type devtmpfs (rw,relatime,size=16412720k,nr_inodes=4103180,mode=755)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

 
### Obteniendo las bases de datos <a name="databases"></a>

Una vez montadas todas las particiones necesarias, debemos poder ejecutar comandos en el propio sistema. Para ello, utilice el comando `chroot`:

```shell-session
root@rescue:~# chroot /mnt/
root@rescue:/#
```
Ahora todos los comandos que introduzca se aplicarán al sistema en lugar del entorno temporal del modo de rescate.

Ahora podemos iniciar el servicio `mysql`:

```shell-session
root@rescue:/# service mysql start
[ ok ] Starting MariaDB database server: mysqld ..
root@rescue:/#
```

Utilice el comando `mysqldump` para guardar la base de datos en un archivo:

```shell-session
root@rescue:/# mysqldump -u root -p scarif > /home/dump.sql
Enter password:
root@rescue:/#
```

En este caso, el usuario `mysql` que se conecta a la base de datos es `root`. La opción `-p` le permite introducir la contraseña de `root` y la base de datos recuperada se denomina `scarif`.

El archivo de base de datos se guarda en el directorio `/home` con el nombre `dump.sql`.

También puede guardar una copia de seguridad de todas las bases de datos de una vez:

```shell-session
root@rescue:/# mysqldump -u root -p --all-databases > alldb.sql
Enter password:
root@rescue:/#
```

La lista de contenidos de `/home` muestra los dos archivos de bases de datos creados por órdenes anteriores:

```shell-session
root@rescue:/# ls /home
alldb.sql  dump.sql
```

En el caso de tablas dañadas, este comando puede utilizarse para la reparación:

```shell-session
root@rescue:/# mysqlcheck -u root -p Password_Root_MySQL --auto-repair --optimize --all-databases
```

A partir de la carpeta `/home`, ya puede enviar sus archivos de backup a un servidor remoto. En este ejemplo, utilizamos la utilidad de transferencia de archivos `scp`:

```shell-session
root@rescue:/# scp -P SSH_Port_Number dump.sql user@IP_address:/home/backup
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
