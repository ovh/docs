---
title: "Gestionar el RAID por software (modo de arranque UEFI) en un servidor dedicado"
excerpt: "Gestione y reconstruya el RAID por software tras la sustitución de un disco en un servidor dedicado en modo de arranque UEFI."
updated: 2026-01-26
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

Un Redundant Array of Independent Disks (RAID) es una tecnología que atenúa la pérdida de datos en un servidor al replicar los datos en dos discos o más.

El nivel RAID predeterminado para las instalaciones de servidores de OVHcloud es el RAID 1, que duplica el espacio ocupado por sus datos, reduciendo así el espacio de disco utilizable a la mitad.

**Esta guía explica cómo gestionar y reconstruir un RAID software después de un reemplazo de disco en su servidor en modo UEFI.**

Antes de comenzar, tenga en cuenta que este tutorial se centra en los servidores dedicados que utilizan el modo UEFI como modo de arranque. Este es el caso de las placas base modernas. Si su servidor utiliza el modo de arranque legacy (BIOS), consulte este tutorial: [Gestión y reconstrucción de un RAID software en servidores en modo de arranque legacy (BIOS)](/pages/bare_metal_cloud/dedicated_servers/raid_soft).

Para verificar si un servidor funciona en modo BIOS legacy o en modo UEFI, ejecute el siguiente comando:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

Para obtener más información sobre UEFI, consulte el siguiente artículo: [https://uefi.org/about](https://uefi.org/about).

## Requisitos

- Un [servidor dedicado](/links/bare-metal/bare-metal) con una configuración de RAID software
- Acceso administrativo (sudo) al servidor a través de SSH
- Comprensión del RAID, las particiones y GRUB

Durante esta guía, utilizamos los términos **disco principal** y **disco secundario**. En este contexto:

- El disco principal es el disco cuya ESP (partición del sistema EFI) está montada por Linux.
- El disco o discos secundarios son todos los demás discos del RAID.

## Instrucciones

Cuando adquiere un nuevo servidor, puede sentir la necesidad de realizar una serie de pruebas y acciones. Una prueba podría ser simular una falla de disco para comprender el proceso de reconstrucción del RAID.

### Vista previa del contenido

- [Información básica](#basicinformation)
- [Comprensión de la partición del sistema EFI (ESP)](#efisystempartition)
- [Simulación de una falla de disco](#diskfailure)
    - [Retiro del disco defectuoso](#removedisk)
- [Reconstrucción del RAID (con ESP no espejadas)](#raidrebuildnonmirrored)
    - [Reconstrucción del RAID después del reemplazo del disco principal (modo rescue)](#nonmirroredrescuemode)
    - [Recreación de la partición EFI System](#recreateesp)
    - [Reconstrucción del RAID con ESP no sincronizados después de actualizaciones importantes del sistema (GRUB)](#efiraidgrub)
    - [Reconstrucción del RAID después del reemplazo del disco principal (modo normal)](#nonmirrorednormalmode)
- [Reconstrucción del RAID (con ESP en espejo)](#raidrebuildmirrored)
- [Añadido de la etiqueta a la partición SWAP (si aplica)](#swap-partition)

<a name="basicinformation"></a>

### Información básica

En una sesión de línea de comandos, escriba el siguiente comando para determinar el estado actual del RAID:

```sh
[user@server_ip ~]# cat /proc/mdstat
Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 nvme1n1p3[1] nvme0n1p3[0]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 2/4 pages [8KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1] nvme0n1p2[0]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

Según los resultados, actualmente tenemos dos dispositivos RAID software configurados, **md2** y **md3**, con **md3** siendo el más grande de los dos. **md3** está compuesto por dos particiones, llamadas **nvme0n1p3** y **nvme1n1p3**.

El [UU] significa que todos los discos funcionan normalmente. Un `_` indicaría un disco defectuoso.

En otros casos, obtendría los siguientes resultados:

```sh
Personalities : [raid1]
md3 : active raid1 nvme0n1p3[1] nvme1n1p3[0]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 2/4 pages [8KB], 65536KB chunk

md1 : active raid1 nvme0n1p1[1] nvme1n1p1[0]
      523200 blocks [2/2] [UU]

md2 : active raid1 nvme1n1p2[0] nvme0n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

Según los resultados, actualmente tenemos tres dispositivos RAID software configurados, **md1**, **md2** y **md3**, con **md3** siendo el más grande de los dos. **md3** está compuesto por dos particiones, llamadas **nvme0n1p3** y **nvme1n1p3**.

Si tiene un servidor con discos SATA, obtendrá los siguientes resultados:

```sh
[user@server_ip ~]# cat /proc/mdstat
Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 sda3[0] sdb3[1]
      3904786432 blocks super 1.2 [2/2] [UU]
      bitmap: 2/30 pages [8KB], 65536KB chunk

md2 : active raid1 sda2[0] sdb2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

Este comando muestra nuestros volúmenes RAID, pero no el tamaño de las particiones. Podemos encontrar esta información con `fdisk -l`:

/// details | **fdisk -l**

```sh
[user@server_ip ~]# sudo fdisk -l

Disk /dev/nvme1n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: A11EDAA3-A984-424B-A6FE-386550A92435

Device             Start        End   Sectors   Size Type
/dev/nvme1n1p1      2048    1048575   1046528   511M EFI System
/dev/nvme1n1p2   1048576    3145727   2097152     1G Linux RAID
/dev/nvme1n1p3   3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme1n1p4 999161856 1000210431   1048576   512M Linux files


Disk /dev/nvme0n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F03AC3C3-D7B7-43F9-88DB-9F12D7281D94

Device              Start        End   Sectors   Size Type
/dev/nvme0n1p1       2048    1048575   1046528   511M EFI System
/dev/nvme0n1p2    1048576    3145727   2097152     1G Linux RAID
/dev/nvme0n1p3    3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme0n1p4  999161856 1000210431   1048576   512M Linux file
/dev/nvme0n1p5 1000211120 1000215182      4063     2M Linux file


Disk /dev/md2: 1022 MiB, 1071644672 bytes, 2093056 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/md3: 474.81 GiB, 509824991232 bytes, 995751936 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

Este comando también permite identificar el tipo de partición.

Para las particiones **GPT**, la línea 6 mostrará: `Disklabel type: gpt`.
Esta información solo es visible cuando el servidor está en modo normal.

Siempre basándonos en los resultados de `fdisk -l`, podemos ver que `/dev/md2` se compone de 1022 MiB y `/dev/md3` contiene 474,81 GiB. Si ejecutamos el comando `mount`, también podemos encontrar la disposición de los discos.

///

Como alternativa, el comando `lsblk` ofrece una vista diferente de las particiones:

```sh
[user@server_ip ~]# lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:7    0   511M  0 part
├─nvme1n1p2 259:8    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme1n1p3 259:9    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
└─nvme1n1p4 259:10   0   512M  0 part  [SWAP]
nvme0n1     259:1    0 476.9G  0 disk
├─nvme0n1p1 259:2    0   511M  0 part  /boot/efi
├─nvme0n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme0n1p3 259:4    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
├─nvme0n1p4 259:5    0   512M  0 part  [SWAP]
└─nvme0n1p5 259:6    0     2M  0 part
```

Además, si ejecutamos `lsblk -f`, obtenemos más información sobre estas particiones, como el LABEL y el UUID:

```sh
[user@server_ip ~]# sudo lsblk -f
NAME        FSTYPE            FSVER            LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINT
nvme1n1
├─nvme1n1p1 vfat              FAT16            EFI_SYSPART    B493-9DFA
├─nvme1n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme1n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
└─nvme1n1p4 swap              1                swap-nvme1n1p4 483b9b41-ada3-4143-8cac-5bff7afb73c7                [SWAP]
nvme0n1
├─nvme0n1p1 vfat              FAT16            EFI_SYSPART    B486-9781                             504.9M     1% /boot/efi
├─nvme0n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme0n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
├─nvme0n1p4 swap              1                swap-nvme0n1p4 51e7172b-adb0-4729-b0f8-613e5dede38b                [SWAP]
└─nvme0n1p5 iso9660           Joliet Extension config-2       2025-08-05-14-55-41-00
```

Observe los dispositivos, las particiones y los puntos de montaje, ya que esto es importante, especialmente después del reemplazo de un disco. Esto le permitirá verificar que las particiones están correctamente montadas en sus puntos de montaje respectivos en el nuevo disco.

En nuestro ejemplo, tenemos:

- Dos matrices RAID: `/dev/md2` y `/dev/md3`.
- Particiones que forman parte del RAID: **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2** y **nvme0n1p3** con los puntos de montaje `/boot` y `/`.
- Particiones que no forman parte del RAID: **nvme0n1p1**, **nvme0n1p4** y **nvme1n1p4** con los puntos de montaje `/boot/efi` y [SWAP].
- Una partición no tiene punto de montaje: **nvme1n1p1**.

La partición `nvme0n1p5` es una partición de configuración, es decir, un volumen de solo lectura conectado al servidor que le proporciona los datos de configuración inicial.

<a name="efisystempartition"></a>

### Comprender la partición del sistema EFI (ESP)

/// details | **Expanda esta sección**

***¿Qué es una partición del sistema EFI?***

Una partición del sistema EFI es una partición que puede contener los cargadores de arranque, los administradores de arranque o las imágenes del kernel de un sistema operativo instalado. También puede contener programas útiles del sistema destinados a ser ejecutados antes del arranque del sistema operativo, así como archivos de datos como registros de errores.

***¿La partición del sistema EFI se espeja en RAID?***

A partir de diciembre de 2025, solo las siguientes versiones del sistema operativo espejarán la partición del sistema EFI en RAID para nuevas instalaciones o reinstalaciones:

* Debian 13
* Proxmox 9
* Ubuntu 25.10
* AlmaLinux y Rocky Linux 10
* Fedora 43

Para versiones anteriores de estos sistemas operativos, la partición EFI no se espeja en RAID; se crean varias ESP, una por disco. Sin embargo, solo se monta una ESP a la vez, y todas las ESP contienen los mismos archivos. La partición del sistema EFI se monta en `/boot/efi`, y el disco en el que se monta se selecciona por Linux al arrancar.

Puede usar el comando `lsblk` para verificar si su partición forma parte de una configuración RAID.

> [!tabs]
> **ESP no espejada**
>>
>> ```sh
>> lsblk
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme0n1     259:0    0 476.9G  0 disk
>> ├─nvme0n1p1 259:6    0   511M  0 part
>> ├─nvme0n1p2 259:7    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme0n1p3 259:8    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> ├─nvme0n1p4 259:9    0   512M  0 part  [SWAP]
>> └─nvme0n1p5 259:10   0     2M  0 part
>> nvme1n1     259:1    0 476.9G  0 disk
>> ├─nvme1n1p1 259:2    0   511M  0 part  /boot/efi
>> ├─nvme1n1p2 259:3    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme1n1p3 259:4    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> └─nvme1n1p4 259:5    0   512M  0 part  [SWAP]
>> ```
>>
>> Según los resultados anteriores, podemos ver que solo una partición del sistema EFI está montada en `/boot/efi`. Por lo tanto, las ESP no están espejadas (replicadas).
>>
> **ESP espejada**
>>
>> ```sh
>> lsblk
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme0n1     259:0    0 476.9G  0 disk
>> ├─nvme0n1p1 259:1    0   511M  0 part
>> │ └─md1       9:1    0 510.9M  0 raid1 /boot/efi
>> ├─nvme0n1p2 259:2    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme0n1p3 259:3    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> └─nvme0n1p4 259:4    0   512M  0 part  [SWAP]
>> nvme1n1     259:5    0 476.9G  0 disk
>> ├─nvme1n1p1 259:6    0   511M  0 part
>> │ └─md1       9:1    0 510.9M  0 raid1 /boot/efi
>> ├─nvme1n1p2 259:7    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme1n1p3 259:8    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> ├─nvme1n1p4 259:9    0   512M  0 part  [SWAP]
>> └─nvme1n1p5 259:10   0     2M  0 part
>> ```
>>
>> Según los resultados anteriores, podemos ver que las dos particiones del sistema EFI están montadas en `/boot/efi`. Por lo tanto, están espejadas en RAID.

***¿El contenido de la partición del sistema EFI cambia regularmente?***

Por lo general, el contenido de esta partición no cambia mucho, solo debería cambiar cuando se actualiza el gestor de arranque (*bootloader*) (por ejemplo, GRUB).

Sin embargo, si su partición EFI no está espejada, le recomendamos ejecutar un script automático o manual para sincronizar todas las ESP, para que contengan todos los mismos archivos actualizados. De esta manera, si el disco en el que se monta esta partición falla, el servidor podrá reiniciar desde la ESP de uno de los otros discos.

***¿Qué sucede si el disco principal (con la partición del sistema EFI montada) falla?***

Si su ESP no está espejada, puede encontrar las siguientes dificultades:

> [!primary]
> Tenga en cuenta que, aunque examinamos a continuación los casos más comunes, existen varias otras razones por las que un servidor puede no arrancar en modo normal después de un reemplazo de disco.
>

**Estudio de caso 1** - No se han realizado modificaciones ni actualizaciones importantes (por ejemplo, GRUB) en el sistema operativo.

- El servidor puede arrancar en modo normal y puede proceder a la reconstrucción del RAID.
- El servidor no puede arrancar en modo normal. Utilice el entorno del modo rescue para reconstruir el RAID y recrear la partición EFI en el nuevo disco.

**Estudio de caso 2** - Se han realizado actualizaciones importantes del sistema (por ejemplo, GRUB) y las ESP están sincronizadas.

- El servidor puede arrancar en modo normal porque todas las ESP contienen información actualizada y la reconstrucción del RAID puede realizarse en modo normal.
- El servidor no puede arrancar en modo normal. Utilice el entorno del modo rescue para reconstruir el RAID y recrear la partición EFI en el nuevo disco.

**Estudio de caso 3** - Se han realizado actualizaciones importantes del sistema (por ejemplo, GRUB) en el sistema operativo y las particiones ESP no se han sincronizado.

- El servidor no puede arrancar en modo normal. Utilice el entorno del modo rescue para reconstruir el RAID, recrear la partición del sistema EFI en el nuevo disco y reinstalar el cargador de arranque (*bootloader*) (por ejemplo, GRUB).
- El servidor puede arrancar en modo normal (esto podría ocurrir en el caso de que un sistema operativo se actualice pero la versión de GRUB permanezca sin cambios), lo que permite proceder a la reconstrucción del RAID.

En algunos casos, el arranque desde una ESP obsoleta puede fallar; por ejemplo, una actualización importante de GRUB puede hacer que el binario GRUB en la ESP sea incompatible con los nuevos módulos GRUB en la partición `/boot`.

***¿Cómo puedo sincronizar mis particiones del sistema EFI, y con qué frecuencia debo sincronizarlas?***

Si su partición del sistema EFI no está espejada, tenga en cuenta los siguientes elementos:

> [!primary]
> Tenga en cuenta que el proceso puede variar según su sistema operativo. Por ejemplo, Ubuntu puede sincronizar varias particiones del sistema EFI con cada actualización de GRUB, pero es el único sistema operativo que lo hace. Le recomendamos consultar la documentación oficial de su sistema operativo para entender cómo gestionar las ESP.
>
> En esta guía, el sistema operativo utilizado es Debian.

Le recomendamos sincronizar sus ESP regularmente o después de cada actualización importante del sistema. Por defecto, todas las particiones del sistema EFI contienen los mismos archivos después de la instalación. Sin embargo, si se implica una actualización importante del sistema, la sincronización de las ESP es esencial para mantener el contenido actualizado.

Ejecutar un script es una manera eficaz de sincronizar regularmente sus particiones. A continuación encontrará un script que puede utilizar para sincronizar manualmente sus ESP. También puede configurar un script automatizado para sincronizarlas diariamente o en cada arranque del sistema.

Antes de ejecutar el script, asegúrese de que `rsync` esté instalado en su sistema:

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat y Fedora**

```sh
sudo yum install rsync
```

Para ejecutar un script en Linux, necesita un archivo ejecutable:

- Comience creando un archivo .sh en el directorio de su elección, reemplazando `script-name` por el nombre que desee.

```sh
sudo touch script-name.sh
```

- Abra el archivo con un editor de texto y agregue las siguientes líneas:

```sh
sudo nano script-name.sh
```

```sh
#!/bin/bash

set -euo pipefail

MOUNTPOINT="/var/lib/grub/esp"
MAIN_PARTITION=$(findmnt -n -o SOURCE /boot/efi)

echo "${MAIN_PARTITION} is the main partition"

mkdir -p "${MOUNTPOINT}"

while read -r partition; do
    if [[ "${partition}" == "${MAIN_PARTITION}" ]]; then
        continue
    fi
    echo "Working on ${partition}"
    mount "${partition}" "${MOUNTPOINT}"
    rsync -ax "/boot/efi/" "${MOUNTPOINT}/"
    umount "${MOUNTPOINT}"
done < <(blkid -o device -t LABEL=EFI_SYSPART)
```

Guarde y cierre el archivo.

- Haga que el script sea ejecutable

```sh
sudo chmod +x script-name.sh
```

- Ejecute el script

```sh
sudo ./script-name.sh
```

- Si no está en el directorio

```sh
./path/to/folder/script-name.sh
```

Cuando se ejecuta el script, el contenido de la partición EFI montada se sincronizará con las demás. Para acceder al contenido, puede montar una de estas particiones EFI no montadas en el punto de montaje: `/var/lib/grub/esp`.

///

<a name="diskfailure"></a>

### Simulación de una falla de disco

Ahora que disponemos de la información necesaria, podemos simular una falla de disco. En este ejemplo, provocaremos la falla del disco principal `nvme0n1` (tenga en cuenta que es el disco en el que se monta la ESP).

El método preferido para hacerlo es a través del modo rescue de OVHcloud.

Reinicie el servidor en modo rescue y conéctese con las credenciales proporcionadas.

Para eliminar un disco del RAID, el primer paso es marcarlo como **Failed** (defectuoso) y eliminar las particiones de sus respectivas tablas RAID.

**Nota**: esto es solo un ejemplo; adapte los comandos a su propia configuración.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

A partir del resultado anterior, nvme0n1 tiene dos particiones en RAID que son **nvme0n1p2** y **nvme0n1p3**.

<a name="removedisk"></a>

#### Retiro del disco defectuoso

En primer lugar, marcamos las particiones **nvme0n1p2** y **nvme0n1p3** como defectuosas (*Failed*).

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/nvme0n1p2
# mdadm: set /dev/nvme0n1p2 faulty in /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --fail /dev/nvme0n1p3
# mdadm: set /dev/nvme0n1p3 faulty in /dev/md3
```

A continuación, ejecutamos el comando `cat /proc/mdstat`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0](F) nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2](F) nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

Como podemos ver arriba, el [F] junto a las particiones indica que el disco está defectuoso o fallado.

A continuación, retiramos estas particiones de las matrices RAID para eliminar completamente el disco del RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --remove /dev/nvme0n1p2
# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --remove /dev/nvme0n1p3
# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

El estado del RAID debería parecerse ahora a esto:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

Ahora, solo aparecen dos particiones en las matrices RAID. Hemos logrado provocar la falla del disco **nvme0n1**.

Para obtener un disco similar a un disco vacío, ejecute el siguiente comando en cada partición, y luego en el disco:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
shred -s10M -n1 /dev/nvme0n1
```

El disco ahora aparece como un disco nuevo y vacío:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:1    0   511M  0 part
├─nvme1n1p2 259:2    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:3    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1
└─nvme1n1p4 259:4    0   512M  0 part
nvme0n1     259:5    0 476.9G  0 disk
```

Ejecute el siguiente comando para verificar que el disco se ha "borrado" correctamente:

```sh
parted /dev/nvme0n1
GNU Parted 3.5
Using /dev/nvme0n1
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) p
Error: /dev/nvme0n1: unrecognised disk label
Model: WDC CL SN720 SDAQNTW-512G-2000 (nvme)
Disk /dev/nvme0n1: 512GB
Sector size (logical/physical): 512B/512B
Partition Table: unknown
Disk Flags:
```

Para obtener más información sobre la preparación y la solicitud de reemplazo de un disco, consulte esta [guía](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

Además, si ejecuta el siguiente comando, obtendrá más detalles sobre las matrices RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md3

/dev/md3:
           Version : 1.2
     Creation Time : Fri Aug  1 14:51:13 2025
        Raid Level : raid1
        Array Size : 497875968 (474.81 GiB 509.82 GB)
     Used Dev Size : 497875968 (474.81 GiB 509.82 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Fri Aug  1 15:56:17 2025
             State : clean, degraded
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md3
              UUID : b383c3d5:7fb1bb5e:6b7c4d96:6ea817ff
            Events : 215

    Number   Major   Minor   RaidDevice State
       -       0        0        0      removed
       1     259        4        1      active sync   /dev/nvme1n1p3
```

Ahora podemos proceder al reemplazo del disco y a la reconstrucción del RAID.

<a name="raidrebuildnonmirrored"></a>

### Reconstrucción del RAID (con ESP no espejadas)

> [!primary]
> Este proceso puede variar según el sistema operativo instalado en su servidor. Le recomendamos consultar la documentación oficial de su sistema operativo para obtener los comandos adecuados.
>
> Si su servidor puede arrancar en modo normal después del reemplazo del disco, simplemente siga los pasos descritos en [esta sección](#nonmirrorednormalmode) si su partición EFI no está espejada o [esta sección](#raidrebuildmirrored) si su partición EFI está espejada.
>

#### Reconstrucción del RAID después del reemplazo del disco principal (modo rescue) <a name="nonmirroredrescuemode"></a>

Una vez que el disco se ha reemplazado, copie la tabla de particiones del disco sano (en este ejemplo, nvme1n1) hacia el nuevo disco (nvme0n1).

**Para particiones GPT**

El comando debe tener este formato: `sgdisk -R /dev/nuevo disco /dev/disco sano`

Ejemplo:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Ejecute `lsblk` para asegurarse de que las tablas de particiones se hayan copiado correctamente:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:1    0   511M  0 part
├─nvme1n1p2 259:2    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:3    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1
└─nvme1n1p4 259:4    0   512M  0 part
nvme0n1     259:5    0 476.9G  0 disk
├─nvme0n1p1 259:10   0   511M  0 part
├─nvme0n1p2 259:11   0     1G  0 part
├─nvme0n1p3 259:12   0 474.9G  0 part
└─nvme0n1p4 259:13   0   512M  0 part
```

A continuación, aleatorice el GUID del nuevo disco para evitar conflictos con los GUID de otros discos:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
```

Si recibe el siguiente mensaje:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Ejecute el comando `partprobe`.

A continuación, reconstruimos la matriz RAID. El siguiente fragmento de código muestra cómo añadir las nuevas particiones (`nvme0n1p2` y `nvme0n1p3`) a la matriz RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
# mdadm: added /dev/nvme0n1p2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
# mdadm: re-added /dev/nvme0n1p3
```

Para verificar el proceso de reconstrucción:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[2] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      [>....................]  recovery =  0.1% (801920/497875968) finish=41.3min speed=200480K/sec
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]
```

Una vez que la reconstrucción del RAID se complete, ejecute el siguiente comando para asegurarse de que las particiones se hayan agregado correctamente al RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
nvme1n1
├─nvme1n1p1 vfat              FAT16 EFI_SYSPART    4629-D183
├─nvme1n1p2 linux_raid_member 1.2   md2            83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2     ext4              1.0   boot           4de80ae0-dd90-4256-9135-1735e7be4b4d
├─nvme1n1p3 linux_raid_member 1.2   md3            b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3     ext4              1.0   root           9bf386b6-9523-46bf-b8e5-4b8cc7c5786f
└─nvme1n1p4 swap              1     swap-nvme1n1p4 9bf292e8-0145-4d2f-b891-4cef93c0d209
nvme0n1
├─nvme0n1p1
├─nvme0n1p2 linux_raid_member 1.2   md2            83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2     ext4              1.0   boot           4de80ae0-dd90-4256-9135-1735e7be4b4d
├─nvme0n1p3 linux_raid_member 1.2   md3            b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3     ext4              1.0   root           9bf386b6-9523-46bf-b8e5-4b8cc7c5786f
└─nvme0n1p4
```

Según los resultados anteriores, las particiones del nuevo disco se han agregado correctamente al RAID. Sin embargo, la partición EFI System y la partición SWAP (en algunos casos) no se han duplicado, lo cual es normal ya que no forman parte del RAID.

> [!warning]
> Los ejemplos anteriores ilustran simplemente los pasos necesarios basados en una configuración de servidor predeterminada. Los resultados de cada comando dependen del tipo de hardware instalado en su servidor y de la estructura de sus particiones. En caso de duda, consulte la documentación de su sistema operativo.
> 
> Si necesita asistencia profesional para la administración de su servidor, consulte los detalles de la sección [Más información](#go-further) de este tutorial.
>

<a name="recreateesp"></a>

#### Recreación de la partición EFI System

Para recrear la partición EFI System en el nuevo disco, debemos formatear **nvme0n1p1** y replicar el contenido de la partición EFI System sana (en nuestro ejemplo: nvme1n1p1) en esta.

Aquí, suponemos que ambas particiones han sido sincronizadas y contienen archivos actualizados.

> [!warning]
> Si se ha realizado una actualización importante del sistema, como una actualización del kernel o de GRUB, y las dos particiones no han sido sincronizadas, consulte esta [sección](#efiraidgrub) una vez que haya terminado de crear la nueva partición EFI System.
>

Primero, formatee la partición:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

A continuación, nombre la partición `EFI_SYSPART` (este nombre es específico de OVHcloud):

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Duplique a continuación el contenido de nvme1n1p1 en nvme0n1p1. 

Comience creando dos directorios, llamados « old » y « new » en este ejemplo:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

A continuación, monte **nvme1n1p1** en el directorio « old » y **nvme0n1p1** en el directorio « new » para hacer la distinción:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme1n1p1 old
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme0n1p1 new
```

Copie los archivos del directorio « old » al directorio « new »:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # rsync -axv old/ new/
sending incremental file list
EFI/
EFI/debian/
EFI/debian/BOOTX64.CSV
EFI/debian/fbx64.efi
EFI/debian/grub.cfg
EFI/debian/grubx64.efi
EFI/debian/mmx64.efi
EFI/debian/shimx64.efi

sent 6,099,848 bytes  received 165 bytes  12,200,026.00 bytes/sec
total size is 6,097,843  speedup is 1.00
```

Una vez hecho esto, desmonte ambas particiones:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

A continuación, monte la partición que contiene la raíz del sistema operativo en `/mnt`. En este ejemplo, esta partición es **md3**.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

Monte los siguientes directorios para asegurarse de que todos los cambios realizados en el entorno `chroot` funcionen correctamente:

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

A continuación, utilice el comando `chroot` para acceder al punto de montaje y verifique que la nueva partición del sistema EFI se haya creado correctamente y que el sistema reconozca los dos ESP:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Para mostrar las particiones ESP, ejecute el comando `blkid -t LABEL=EFI_SYSPART`:

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Los resultados anteriores muestran que la nueva partición EFI se ha creado correctamente y que se ha aplicado correctamente la etiqueta.

Una vez hecho esto, salga del entorno `chroot`:

```sh
root@rescue12-customer-eu:/# exit
```

A continuación, consulte [esta sección](#swap-partition) para recrear la partición SWAP (si aplica).

#### Reconstrucción del RAID con ESP no sincronizados después de actualizaciones importantes del sistema (GRUB) <a name="efiraidgrub"></a>

/// details | **Expanda esta sección**

> [!warning]
> Siga los pasos de esta sección únicamente si se aplica a su caso.
> 

Si el disco principal se reemplaza cuando contiene particiones del sistema EFI que no se han sincronizado después de actualizaciones importantes del sistema que hayan modificado el GRUB, el arranque desde uno de los discos secundarios con una ESP obsoleta puede fallar.

En este caso, además de reconstruir el RAID y recrear la partición del sistema EFI en modo rescue, también debe reinstalar el GRUB en esta.

Una vez que se ha creado la ESP (como se explicó anteriormente) y se reconoce por el sistema, siempre dentro del entorno `chroot`, cree el directorio /boot/efi para montar la nueva partición del sistema EFI **nvme0n1p1**.

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

A continuación, reinstale el cargador de arranque GRUB (*bootloader*):

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

A continuación, ejecute el siguiente comando:

```sh
root@rescue12-customer-eu:/# update-grub
```

Una vez hecho esto, salga del entorno `chroot`:

```sh
root@rescue12-customer-eu:/# exit
```

A continuación, consulte [esta sección](#swap-partition) para recrear la partición SWAP (si aplica).

///

<a name="nonmirrorednormalmode"></a>

#### Reconstrucción del RAID después del reemplazo del disco principal (modo normal)

/// details | **Expanda esta sección**

Si su servidor es capaz de arrancar en modo normal después de un reemplazo de disco, puede seguir los pasos a continuación para reconstruir el RAID.

Una vez que el disco se ha reemplazado, copiamos la tabla de partición del disco sano (en este ejemplo, nvme1n1) al nuevo (nvme0n1).

**Para particiones GPT**

```sh
sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

El comando debe estar en este formato: `sgdisk -R /dev/nuevo disco /dev/disco sano`.

Una vez hecho esto, el siguiente paso consiste en asignar un GUID aleatorio al nuevo disco para evitar conflictos de GUID con otros discos:

```sh
sudo sgdisk -G /dev/nvme0n1
```

Si recibe el siguiente mensaje:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Ejecute simplemente el comando `partprobe`. Si aún no ve las nuevas particiones creadas (con el comando `lsblk`), debe reiniciar el servidor antes de continuar.

A continuación, agregue las particiones al RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

[user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

Utilice este comando para seguir la reconstrucción del RAID: `cat /proc/mdstat`.

Una vez finalizada la reconstrucción, vuelva a crear la partición del sistema EFI en el nuevo disco.

- En primer lugar, asegúrese de que las herramientas necesarias estén instaladas:

**Debian y Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

- Formatee la partición. En nuestro ejemplo `nvme0n1p1`:

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

- Asigne la etiqueta `EFI_SYSPART` a la partición (este nombre es específico de OVHcloud):

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Una vez hecho esto, puede sincronizar las dos particiones utilizando el script proporcionado en este tutorial.

- Verifique que la nueva partición EFI System se haya creado correctamente y que el sistema la reconozca:

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

A continuación, consulte [esta sección](#swap-partition) para recrear la partición SWAP (si aplica).

///

<a name="raidrebuildmirrored"></a>

### Reconstrucción del RAID (con ESP en espejo)

/// details | **Expanda esta sección**

> [!tabs] 
> **En modo Rescue**
>>
>> La reconstrucción del RAID con todas las particiones en espejo es más sencilla; basta con copiar los datos del disco sano al nuevo disco y recrear la partición [SWAP] (si aplica).
>>
>> Según las ilustraciones anteriores, el estado del RAID debería ser como sigue después de una falla del disco:
>>
>> ```sh
>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>> md3 : active raid1 nvme1n1p3[2] nvme0n1p3[0](F)
>>       497875968 blocks super 1.2 [2/1] [_U]
>>       bitmap: 0/4 pages [0KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[2](F) nvme1n1p1[1]
>>       523200 blocks [2/1] [_U]
>>
>> md2 : active raid1 nvme1n1p2[2] nvme0n1p2[0](F)
>>       1046528 blocks super 1.2 [2/1] [_U]
>>
>> unused devices: <none>
>> ```
>>
>> Una vez que el disco se ha reemplazado, el primer paso consiste en copiar la tabla de partición del disco sano (en este ejemplo, nvme1n1) al nuevo disco (nvme0n1).
>>
>> **Para particiones GPT**
>>
>> El comando debe estar en el siguiente formato: `sgdisk -R /dev/nuevo disco /dev/disco sano`.
>>
>> En nuestro ejemplo:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> Ejecute `lsblk` para asegurarse de que las tablas de partición se hayan copiado correctamente:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk
>>
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme1n1     259:0    0 476.9G  0 disk
>> ├─nvme1n1p1 259:1    0   511M  0 part
>> │ └─md1       9:1    0  510.9M 0 raid1
>> ├─nvme1n1p2 259:2    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1
>> ├─nvme1n1p3 259:3    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1
>> └─nvme1n1p4 259:4    0   512M  0 part
>> nvme0n1     259:5    0 476.9G  0 disk
>> ├─nvme0n1p1 259:10   0   511M  0 part
>> ├─nvme0n1p2 259:11   0     1G  0 part
>> ├─nvme0n1p3 259:12   0 474.9G  0 part
>> └─nvme0n1p4 259:13   0   512M  0 part
>> ```
>>
>> El siguiente paso consiste en asignar un GUID aleatorio al nuevo disco para evitar conflictos de GUID con otros discos:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
>> ```
>>
>> Si recibe el siguiente mensaje:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Ejecute el comando `partprobe`.
>>
>> Ahora podemos reconstruir la matriz RAID. El siguiente fragmento de código muestra cómo agregar nuevamente las nuevas particiones (nvme0n1p2 y nvme0n1p3) a la matriz RAID.
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md1 /dev/nvme0n1p1
>> # mdadm: added /dev/nvme0n1p1
>>
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
>> # mdadm: added /dev/nvme0n1p2
>>
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
>> # mdadm: added /dev/nvme0n1p3
>> ```
>>
>> Para verificar el proceso de reconstrucción:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
>> Personalities : [raid1]
>> md3 : active raid1 nvme0n1p3[2] nvme1n1p3[0]
>>       497875968 blocks super 1.2 [2/1] [U_]
>>       [=========>...........]  recovery = 47.0% (234461184/497875968) finish=21.
>>       bitmap: 4/4 pages [16KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[1] nvme1n1p1[0]
>>       523200 blocks [2/2] [UU]
>>
>> md2 : active raid1 nvme0n1p2[2] nvme1n1p2[0]
>>       1046528 blocks super 1.2 [2/2] [UU]
>> ```
>>
>> Una vez que la reconstrucción se complete, ejecute el siguiente comando para asegurarse de que las particiones se hayan agregado correctamente al RAID:
>>
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
>> NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
>> nvme1n1
>> ├─nvme1n1p1 linux_raid_member 0.90.0                          2043a004-0743-7bc6-37f2-12c43604630c
>> │ └─md1     vfat              FAT16            EFI_SYSPART    D28D-6A4F
>> ├─nvme1n1p2 linux_raid_member 1.2              md2            0772556e-3f45-a551-ab32-c96e502dab22
>> │ └─md2     xfs                                boot           0b22431a-7020-427c-aa31-324feec6ea84
>> ├─nvme1n1p3 linux_raid_member 1.2              md3            071571aa-1b36-9ef7-15b3-190ffdcf3a8b
>> │ └─md3     xfs                                root           3a2cb95b-c142-4d72-835b-52fcce99a0c5
>> ├─nvme1n1p4 swap              1                swap-nvme1n1p4 0d502997-853d-4986-b40a-407d5f187e82
>> └─nvme1n1p5
>> nvme0n1
>> ├─nvme0n1p1 linux_raid_member 0.90.0                          2043a004-0743-7bc6-37f2-12c43604630c
>> │ └─md1     vfat              FAT16            EFI_SYSPART    D28D-6A4F
>> ├─nvme0n1p2 linux_raid_member 1.2              md2            0772556e-3f45-a551-ab32-c96e502dab22
>> │ └─md2     xfs                                boot           0b22431a-7020-427c-aa31-324feec6ea84
>> ├─nvme0n1p3 linux_raid_member 1.2              md3            071571aa-1b36-9ef7-15b3-190ffdcf3a8b
>> │ └─md3     xfs                                root           3a2cb95b-c142-4d72-835b-52fcce99a0c5
>> ├─nvme0n1p4
>> └─nvme0n1p5 iso9660           Joliet Extension config-2       2025-12-16-15-40-00-00
>> ```
>>
>> A continuación, consulte [esta sección](#swap-partition) para recrear la partición SWAP (si aplica).
>>
> **En modo Normal**
>>
>> Según las ilustraciones anteriores, el estado del RAID debería ser como sigue después de una falla del disco:
>>
>> ```sh
>> Personalities : [raid1]
>> md3 : active raid1 nvme0n1p3[1](F) nvme1n1p3[0]
>>       497875968 blocks super 1.2 [2/1] [U_]
>>       bitmap: 4/4 pages [16KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[2](F) nvme1n1p1[0]
>>       523200 blocks [2/1] [U_]
>>
>> md2 : active raid1 nvme1n1p2[0] nvme0n1p2[1](F)
>>       1046528 blocks super 1.2 [2/1] [U_]
>> ```
>>
>> Una vez que el disco se ha reemplazado, el primer paso consiste en copiar la tabla de partición del disco sano (en este ejemplo, nvme1n1) al nuevo disco (nvme0n1).
>>
>> **Para particiones GPT**
>>
>> ```sh
>> sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> El comando debe estar en el siguiente formato: `sgdisk -R /dev/nuevo disco /dev/disco sano`.
>>
>> A continuación, genere un GUID aleatorio para el nuevo disco para evitar conflictos con los GUID de otros discos:
>>
>> ```sh
>> sudo sgdisk -G /dev/nvme0n1
>> ```
>>
>> Si recibe el siguiente mensaje:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Ejecute simplemente el comando `partprobe`. Si aún no ve las nuevas particiones creadas (ej. con `lsblk`), debe reiniciar el servidor antes de continuar.
>>
>> A continuación, agregue las particiones al RAID:
>>
>>
>> ```sh
>> [user@server_ip ~]# sudo mdadm --add /dev/md1 /dev/nvme0n1p1
>> # mdadm: added /dev/nvme0n1p1
>>
>> [user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2
>> # mdadm: added /dev/nvme0n1p2
>>
>> [user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3
>> # mdadm: added /dev/nvme0n1p3
>> ```
>>
>> Utilice el siguiente comando para supervisar la reconstrucción del RAID:
>>
>> ```sh
>> [user@server_ip ~]# cat /proc/mdstat
>> ```
>>
>> Una vez que la reconstrucción del RAID se complete, consulte [esta sección](#swap-partition) para recrear la partición SWAP (si aplica).
>>

///


#### Añadido de la etiqueta a la partición SWAP (si aplica) <a name="swap-partition"></a>

/// details | **Expanda esta sección**

> [!tabs]
> **A través del modo Rescue**
>>
>> Fuera del entorno `chroot`, recree la partición [SWAP] **nvme0n1p4** y añada la etiqueta `swap-nvmenxxx`:
>>
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
>> LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
>> ```
>>
>> Verifique que la etiqueta se haya aplicado correctamente:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
>> NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
>> nvme1n1
>> ├─nvme1n1p1 vfat              FAT16 EFI_SYSPART    B27E-16D2
>> ├─nvme1n1p2 linux_raid_member 1.2   md2            fb3c5180-526f-56ad-3a0a-3f7961f57684
>> │ └─md2     xfs                     boot           ed3a4730-b3eb-4aa5-a550-dd6cd188c3a4
>> ├─nvme1n1p3 linux_raid_member 1.2   md3            a14af9ed-f791-46e5-4381-224e6d79088c
>> │ └─md3     xfs                     root           5041d916-abb3-4dc8-acdc-baeb3977ce6d  469.6G     1% /mnt
>> └─nvme1n1p4 swap              1     swap-nvme1n1p4 133ca9a3-1bd6-4519-9b5a-01b8ffa55ca4
>> nvme0n1
>> ├─nvme0n1p1 vfat              FAT16 EFI_SYSPART    3557-B372
>> ├─nvme0n1p2 linux_raid_member 1.2   md2            fb3c5180-526f-56ad-3a0a-3f7961f57684
>> │ └─md2     xfs                     boot           ed3a4730-b3eb-4aa5-a550-dd6cd188c3a4
>> ├─nvme0n1p3 linux_raid_member 1.2   md3            a14af9ed-f791-46e5-4381-224e6d79088c
>> │ └─md3     xfs                     root           5041d916-abb3-4dc8-acdc-baeb3977ce6d  469.6G     1% /mnt
>> └─nvme0n1p4 swap              1     swap-nvme0n1p4 dedd4d49-7d40-40c8-b529-41f251a7ff81
>> ```
>>
>> Acceda nuevamente al entorno `chroot`:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
>> ```
>>
>> Recupere el UUID de ambas particiones SWAP:
>>
>> ```sh
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>>
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> A continuación, reemplace el antiguo UUID de la partición SWAP (**nvme0n1p4**) por el nuevo en el archivo `/etc/fstab`:
>>
>> ```sh
>> root@rescue12-customer-eu:/# nano /etc/fstab
>> ```
>>
>> Ejemplo:
>>
>> ```sh
>> UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
>> UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
>> LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
>> UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
>> UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
>> ```
>>
>> Según los resultados anteriores, el antiguo UUID es `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` y debe ser reemplazado por el nuevo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Asegúrese de reemplazar el UUID correcto.
>>
>> A continuación, verifique que todo esté correctamente montado con el siguiente comando:
>>
>> ```sh
>> root@rescue12-customer-eu:/# mount -av
>> /                        : ignored
>> /boot                    : successfully mounted
>> /boot/efi                : successfully mounted
>> swap                     : ignored
>> swap                     : ignored
>> ```
>>
>> Active la partición SWAP:
>>
>> ```sh
>> root@rescue12-customer-eu:/# swapon -av
>>
>> swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme0n1p4
>> swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme1n1p4
>> ```
>>
>> Salga del entorno chroot con `exit` y recargue el sistema:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
>> ```
>>
>> Desmonte todos los discos:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
>> ```
>>
>> Hemos terminado con éxito la reconstrucción RAID en el servidor y ahora podemos reiniciar el servidor en modo normal.
>>
>>
> **A través del modo Normal**
>>
>> Para recrear la partición SWAP, proceda de la siguiente manera:
>>
>> - En primer lugar, recree la partición en **nvme0n1p4** y añada la etiqueta **swap-nvme0n1p4**:
>>
>> ```sh
>> [user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> ```
>>
>> - Recupere los UUID de ambas particiones SWAP:
>>
>> ```sh
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> Reemplace el antiguo UUID de la partición SWAP (**nvme0n1p4**) por el nuevo en `/etc/fstab`:
>>
>> ```sh
>> [user@server_ip ~]# sudo nano /etc/fstab
>> ```
>>
>> Ejemplo:
>>
>> ```sh
>> [user@server_ip ~]# sudo nano /etc/fstab
>> UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
>> UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
>> LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
>> UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
>> UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
>> ```
>>
>> Según los resultados anteriores, el UUID antiguo es `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` y debe sustituirse por el nuevo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`.
>>
>> Asegúrese de sustituir el UUID correcto.
>>
>> A continuación, ejecute el siguiente comando para activar la partición SWAP:
>>
>> ```sh
>> [user@server_ip ~]# sudo swapon -av
>> swapon: /dev/nvme1n1p4: already active -- ignored
>> swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme0n1p4
>> ```
>>
>> A continuación, reinicie el sistema:
>>
>> ```sh
>> [user@server_ip ~]# sudo systemctl daemon-reload
>> ```
>>
>> Ahora hemos completado con éxito la reconstrucción del RAID.
>>

///

<a name="go-further"></a>

## Más información

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API and Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Para servicios especializados (SEO, desarrollo, etc.), contacte con [los socios de OVHcloud](/links/partner).

Si necesita asistencia para utilizar y configurar sus soluciones OVHcloud, consulte nuestras [ofertas de soporte](/links/support).

Si necesita formación o asistencia técnica para implementar nuestras soluciones, contacte con su representante comercial o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar que los expertos del equipo de Professional Services intervengan en su caso de uso específico.

Únase a nuestra [comunidad de usuarios](/links/community).