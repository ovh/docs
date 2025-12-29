---
title: Gestión y reconstrucción del RAID software en servidores en modo de arranque legacy (BIOS)
excerpt: "Descubra cómo gestionar y reconstruir el RAID software tras un reemplazo de disco en su servidor en modo de arranque legacy (BIOS)"
updated: 2025-12-15
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

El RAID (Redundant Array of Independent Disks) es un conjunto de técnicas diseñadas para mitigar la pérdida de datos en un servidor replicándolos en varios discos.

El nivel de RAID predeterminado para las instalaciones de servidores de OVHcloud es RAID 1, lo que duplica el espacio ocupado por sus datos, reduciendo así a la mitad el espacio de disco utilizable.

**Este guía explica cómo gestionar y reconstruir un RAID software en caso de reemplazar un disco en su servidor en modo de arranque legacy (BIOS).**

Antes de comenzar, tenga en cuenta que esta guía se centra en los servidores dedicados que utilizan el modo de arranque legacy (BIOS). Si su servidor utiliza el modo UEFI (tarjetas madre más recientes), consulte esta guía [Gestión y reconstrucción del RAID software en servidores en modo de arranque UEFI](/pages/bare_metal_cloud/dedicated_servers/raid_soft_uefi).

Para verificar si un servidor se ejecuta en modo BIOS o en modo UEFI, ejecute el siguiente comando:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

## Requisitos

- Tener un [servidor dedicado](/links/bare-metal/bare-metal) con una configuración de RAID software.
- Tener acceso a su servidor mediante SSH como administrador (sudo).
- Conocimiento del RAID y las particiones

## Procedimiento

### Presentación del contenido

- [Información básica](#basicinformation)
- [Simular una falla de disco](#diskfailure)
    - [Retirar el disco defectuoso](#diskremove)
- [Reconstrucción del RAID](#raidrebuild)
    - [Reconstrucción del RAID en modo rescue](#rescuemode)
    - [Añadir la etiqueta a la partición SWAP (si aplica)](#swap-partition)
    - [Reconstrucción del RAID en modo normal](#normalmode)


<a name="basicinformation"></a>

### Información básica

En una sesión de línea de comandos, escriba el siguiente código para determinar el estado actual del RAID.

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 nvme0n1p2[1] nvme0n1p20]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 nvme0n1p4[0] nvme1n1p4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Este comando nos indica que dos dispositivos de RAID software están actualmente configurados, **md4** siendo el más grande. El dispositivo de RAID **md4** está compuesto por dos particiones, llamadas **nvme1n1p4** y **nvme0n1p4**.

El [UU] significa que todos los discos funcionan normalmente. Un `_` indica un disco defectuoso.

Si posee un servidor con discos SATA, obtendrá los siguientes resultados:

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Aunque este comando devuelve nuestros volúmenes de RAID, no nos indica el tamaño de las particiones mismas. Podemos encontrar esta información con el siguiente comando:

```sh
[user@server_ip ~]# sudo fdisk -l

Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F92B6C5B-2518-4B2D-8FF9-A311DED5845F

Device          Start        End    Sectors   Size Type
/dev/sdb1        2048       4095       2048     1M BIOS boot
/dev/sdb2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sdb3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sdb4  1865226240 3907024895 2041798656 973.6G Linux RAID

Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 2E1DCCBA-8808-4D2B-BA33-9FEC3B96ADA8

Device          Start        End    Sectors   Size Type
/dev/sda1        2048       4095       2048     1M BIOS boot
/dev/sda2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sda3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sda4  1865226240 3907024895 2041798656 973.6G Linux RAID
/dev/sda5  3907025072 3907029134       4063     2M Linux filesystem

Disk /dev/md4: 973.5 GiB, 1045265645568 bytes, 2041534464 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk /dev/md2: 888.8 GiB, 954321600512 bytes, 1863909376 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

El comando `fdisk -l` también le permite identificar el tipo de partición. Esta es una información importante para reconstruir su RAID en caso de fallo de un disco.

Para las particiones **GPT**, la línea 6 mostrará: `Disklabel type: gpt`. Esta información solo es visible cuando el servidor está en modo normal.

Siempre basándonos en los resultados de `fdisk -l`, podemos ver que `/dev/md2` se compone de 888.8GB y `/dev/md4` contiene 973.5GB.

Alternativamente, el comando `lsblk` ofrece una vista diferente de las particiones:

```sh
[user@server_ip ~]# lsblk

NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda       8:0    0   1.8T  0 disk
├─sda1    8:1    0     1M  0 part
├─sda2    8:2    0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sda3    8:3    0   512M  0 part  [SWAP]
├─sda4    8:4    0 973.6G  0 part
│ └─md4   9:4    0 973.5G  0 raid1 /home
└─sda5    8:5    0     2M  0 part
sdb       8:16   0   1.8T  0 disk
├─sdb1    8:17   0     1M  0 part
├─sdb2    8:18   0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sdb3    8:19   0   512M  0 part  [SWAP]
└─sdb4    8:20   0 973.6G  0 part
  └─md4   9:4    0 973.5G  0 raid1 /home
```

Tomamos en cuenta los dispositivos, las particiones y sus puntos de montaje. A partir de los comandos y resultados anteriores, tenemos:

- Dos matrices RAID: `/dev/md2` y `/dev/md4`.
- Cuatro particiones forman parte del RAID con los puntos de montaje: `/` y `/home`.

<a name="diskfailure"></a>

### Simular una falla de disco

Ahora que disponemos de toda la información necesaria, podemos simular una falla de disco y continuar con las pruebas. En este ejemplo, haremos que el disco `sda` falle.

El medio preferido para lograrlo es el entorno en modo rescue de OVHcloud.

Reinicie primero el servidor en modo rescue y conéctese con las credenciales proporcionadas.

Para retirar un disco del RAID, el primer paso es marcarlo como **Failed** y retirar las particiones de sus matrices RAID respectivas.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

A partir de la salida anterior, sda se compone de dos particiones en RAID que son **sda2** y **sda4**.

<a name="diskremove"></a>

#### Retirar el disco defectuoso

Comenzamos marcando las particiones **sda2** y **sda4** como **Failed**.

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/sda2
# mdadm: set /dev/sda2 faulty in /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md4 --fail /dev/sda4
# mdadm: set /dev/sda4 faulty in /dev/md4
```

Hemos simulado ahora una falla del RAID, cuando ejecutamos el comando `cat /proc/mdstat`, obtenemos el siguiente resultado:

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat 

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1](F) sdb2[0]
      931954688 blocks super 1.2 [2/2] [_U]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/2] [_U]
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Como podemos ver arriba, el [F] junto a las particiones indica que el disco está fallando o defectuoso.

A continuación, retiramos estas particiones de las matrices RAID.

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md2 --remove /dev/sda2
# mdadm: hot removed /dev/sda2 from /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md4 --remove /dev/sda4
# mdadm: hot removed /dev/sda4 from /dev/md4
```

Para asegurarnos de obtener un disco que sea similar a un disco vacío, utilizamos el siguiente comando. Reemplace **sda** por sus propios valores:

```sh
shred -s10M -n1 /dev/sda1
shred -s10M -n1 /dev/sda2
shred -s10M -n1 /dev/sda3
shred -s10M -n1 /dev/sda4
shred -s10M -n1 /dev/sda
```

El disco aparecerá ahora como un disco nuevo y vacío:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk 
NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda       8:0    0   1.8T  0 disk
sdb       8:16   0   1.8T  0 disk
├─sdb1    8:17   0     1M  0 part
├─sdb2    8:18   0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sdb3    8:19   0   512M  0 part  [SWAP]
└─sdb4    8:20   0 973.6G  0 part
  └─md4   9:4    0 973.5G  0 raid1 /home
```

Si ejecutamos el siguiente comando, vemos que nuestro disco ha sido correctamente «limpiado»:

```sh
parted /dev/sda
GNU Parted 3.5
Using /dev/sda
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) p
Error: /dev/sda: unrecognised disk label
Model: HGST HUS724020AL (SATA)
Disk /dev/sda: 1.8T
Sector size (logical/physical): 512B/512B
Partition Table: unknown
Disk Flags:
```

El estado de nuestro RAID debería ser ahora similar al siguiente:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat 

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sdb2[0]
      931954688 blocks super 1.2 [1/2] [_U]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sdb4[1]
      1020767232 blocks super 1.2 [1/2] [_U]
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Los resultados anteriores muestran que ahora solo aparecen dos particiones en las matrices RAID. Hemos conseguido que el disco **sda** falle y ahora podemos proceder a su sustitución.

Para obtener más información sobre cómo preparar y solicitar la sustitución de un disco, consulte esta [guía](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

El siguiente comando proporciona más detalles sobre la matriz o matrices RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md4

/dev/md4:
           Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 16:28:03 2023
             State : clean, degraded
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md4
              UUID : 7b5c1d80:0a7ab4c2:e769b5e5:9c6eaa0f
            Events : 21

    Number   Major   Minor   RaidDevice State
       -       0        0        0      removed
       1       8       20        1      active sync   /dev/sdb4
```

<a name="raidrebuild"></a>

### Reconstruir el RAID

> [!primary]
> Este proceso puede variar en función del sistema operativo instalado en su servidor. Le recomendamos que consulte la documentación oficial de su sistema operativo para obtener los comandos adecuados.
>

> [!warning]
>
> En la mayoría de los servidores con RAID por software, tras sustituir un disco, el servidor puede arrancar en modo normal (en el disco sano) para reconstruir el RAID. Sin embargo, si el servidor no puede arrancar en modo normal, se reiniciará en modo de rescate para proceder a la reconstrucción del RAID.
>

<a name="normalmode"></a>

#### Reconstruir el RAID en modo normal

Los siguientes pasos se realizan en modo normal. En nuestro ejemplo, hemos sustituido el disco **sda**.

Una vez sustituido el disco, debemos copiar la tabla de particiones del disco sano (en este ejemplo, sdb) al nuevo (sda).

> [!tabs]
> **Para particiones GPT**
>>
>> ```sh
>> sudo sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> El comando debe tener el siguiente formato: `sgdisk -R /dev/nuevo disco /dev/disco sano`.
>>
>> Una vez realizada esta operación, el siguiente paso consiste en asignar un GUID aleatorio al nuevo disco para evitar cualquier conflicto con los GUID de otros discos:
>>
>> ```sh
>> sudo sgdisk -G /dev/sdX
>> ```
>>
>> Si aparece el siguiente mensaje:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Simplemente ejecute el comando `partprobe`. Si sigue sin ver las particiones recién creadas (por ejemplo, con `lsblk`), debe reiniciar el servidor antes de continuar.
>>
> **Para particiones MBR**
>>
>> ```sh
>> [user@server_ip ~]# sudo sfdisk -d /dev/sdX | sfdisk /dev/sdX
>> ```
>>
>> El comando debe tener el siguiente formato: `sfdisk -d /dev/disco sano | sfdisk /dev/disco nuevo`.
>>

A continuación, añadimos las particiones al RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/sda2
# mdadm: added /dev/sda2

[user@server_ip ~]# sudo mdadm --add /dev/md4 /dev/sda4
# mdadm: re-added /dev/sda4
```

Use el siguiente comando para supervisar la reconstrucción del RAID:

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[0] sdb2[1]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 4/4 pages [16KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/1] [UU]
      [============>........]  recovery = 64.8% (822969856/1020767232) finish=7.2min speed=401664K/sec
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Finalmente, añadimos una etiqueta y montamos la partición [SWAP] (si aplica).

Para añadir una etiqueta a la partición SWAP:

```sh
[user@server_ip ~]# sudo mkswap /dev/sda4 -L swap-sda4
```

A continuación, obtenga los UUID de ambas particiones de intercambio:

```sh
[user@server_ip ~]# sudo blkid -s UUID /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -S UUID /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Reemplazamos el antiguo UUID de la partición de intercambio (**sda4**) por el nuevo en `/etc/fstab`.

Ejemplo:

```sh
[user@server_ip ~]# sudo nano etc/fstab

UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=BIOS       /boot       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Según los resultados anteriores, el UUID antiguo es `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` y debe sustituirse por el nuevo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. 

Asegúrese de sustituir el UUID correcto.

A continuación, comprobamos que todo está correctamente montado con el siguiente comando:

```sh
[user@server_ip ~]# sudo mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Ejecute el siguiente comando para activar la partición de intercambio:

```sh
[user@server_ip ~]# sudo swapon -av
```

A continuación, recargue el sistema con el siguiente comando:

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```

La reconstrucción del RAID ahora está terminada.

<a name="rescuemode"></a>

/// details | **Reconstrucción del RAID en modo rescue**

Si el servidor no consigue reiniciarse en modo normal tras una sustitución de disco, nuestro equipo lo reiniciará en modo de rescate en el datacenter.

En este ejemplo, hemos sustituido el disco `sdb`.

Una vez reemplazado el disco, debemos copiar la tabla de particiones del disco en buen estado (en este ejemplo, sda) al nuevo (sdb).

> [!tabs]
> **Para particiones GPT**
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> El comando debe tener el siguiente formato: `sgdisk -R /dev/nuevo disco /dev/disco sano`
>>
>> Ejemplo:
>>
>> ```sh
>> sudo sgdisk -R /dev/sdb /dev/sda
>> ```
>>
>> Una vez realizada esta operación, el siguiente paso consiste en asignar un GUID aleatorio al nuevo disco para evitar conflictos con los GUID de otros discos:
>>
>> ```sh
>> sudo sgdisk -G /dev/sdb
>> ```
>>
>> Si aparece el siguiente mensaje:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Puede simplemente ejecutar el comando `partprobe`.
>>
> **Para particiones MBR**
>>
>> ```sh
>> sudo sfdisk -d /dev/sda | sfdisk /dev/sdb
>> ```
>>
>> El comando debe tener el siguiente formato: `sfdisk -d /dev/disco sano | sfdisk /dev/nuevo disco`
>>

Ahora podemos reconstruir la matriz RAID. El siguiente fragmento de código muestra cómo añadir las nuevas particiones (sdb2 y sdb4) a la matriz RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md2 /dev/sdb2
# mdadm: added /dev/sdb2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md4 /dev/sdb4
# mdadm: re-added /dev/sdb4
```

Use el comando `cat /proc/mdstat` para supervisar la reconstrucción del RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[0] sdb2[1]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 4/4 pages [16KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/1] [UU]
      [============>........]  recovery = 64.8% (822969856/1020767232) finish=7.2min speed=401664K/sec
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Para obtener más detalles sobre la o las matrices RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md4

/dev/md4:
        Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 2
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 17:02:55 2023
             State : clean
    Active Devices : 2
   Working Devices : 2
    Failed Devices : 0
     Spare Devices : 0

 Rebuild Status : 21% complete

           UUID : 7f39d062:9f16a016:a4d2adc2:26fd5302
         Events : 0.95

    Number   Major   Minor   RaidDevice State
       0       8        2        0      spare rebuilding   /dev/sda4
       1       8       18        1      active sync   /dev/sdb4
```

<a name="swap-partition"></a>

#### Añadimos la etiqueta a la partición SWAP (si aplica)

Una vez finalizada la reconstrucción del RAID, montamos la partición que contiene la raíz de nuestro sistema operativo en `/mnt`. En nuestro ejemplo, esta partición es `md4`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md4 /mnt
```

Añadimos la etiqueta a nuestra partición de intercambio con el siguiente comando:

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/sda4 -L swap-sda4
mkswap: /dev/sda4: warning: wiping old swap signature.
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

A continuación, montamos los siguientes directorios para asegurarnos de que cualquier manipulación que realicemos en el entorno chroot funcione correctamente:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
mount --types proc /proc /mnt/proc
mount --rbind /sys /mnt/sys
mount --make-rslave /mnt/sys
mount --rbind /dev /mnt/dev
mount --make-rslave /mnt/dev
mount --bind /run /mnt/run
mount --make-slave /mnt/run
```

A continuación, accedemos al entorno `chroot`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Recuperamos los UUID de ambas particiones de intercambio:

```sh
root@rescue12-customer-eu:/# blkid -s UUID /dev/sda4
root@rescue12-customer-eu:/# blkid -s UUID /dev/sdb4
```

Ejemplo:

```sh
blkid /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
blkid /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

A continuación, reemplazamos el antiguo UUID de la partición de intercambio (**sdb4**) por el nuevo en `/etc/fstab`:

```sh
root@rescue12-customer-eu:/# nano etc/fstab
```

Ejemplo:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /home   ext4    defaults       0       0
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Asegúrese de reemplazar el UUID correcto. En nuestro ejemplo anterior, el UUID a reemplazar es `d6af33cf-fc15-4060-a43c-cb3b5537f58a` por el nuevo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Asegúrese de reemplazar el UUID correcto.

A continuación, nos aseguramos de que todo esté correctamente montado:

```sh
root@rescue12-customer-eu:/# mount -av
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Active la partición de intercambio con el siguiente comando:

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/sda4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sda4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sda4
swapon: /dev/sdb4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sdb4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sdb4
```

Salimos del entorno `chroot` con exit y volvemos a cargar el sistema:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

Desmontamos todos los discos:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -R /mnt
```
///

Hemos terminado con éxito la reconstrucción del RAID en el servidor y ahora podemos reiniciar el servidor en modo normal.

## Más información

[Reemplazo a caliente - RAID software](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[API OVHcloud y Almacenamiento](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Gestión del RAID hardware](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Reemplazo a caliente - RAID hardware](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [socios OVHcloud](/links/partner).

Si desea beneficiarse de una asistencia en el uso y configuración de sus soluciones OVHcloud, le invitamos a consultar nuestras distintas [ofertas de soporte](/links/support).

Si necesita una formación o asistencia técnica para la implementación de nuestras soluciones, contacte con su comercial o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo Professional Services.

Interactúe con nuestra [comunidad de usuarios](/links/community).