---
title: "Gestión y reconstrucción de un RAID software en servidores que utilizan el modo de arranque UEFI"
excerpt: Aprenda a gestionar y reconstruir un RAID software tras un reemplazo de disco en un servidor que utiliza el modo de arranque UEFI
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

Un Redundant Array of Independent Disks (RAID) es una tecnología que atenúa la pérdida de datos en un servidor al replicar los datos en dos discos o más.

El nivel RAID predeterminado para las instalaciones de servidores de OVHcloud es el RAID 1, que duplica el espacio ocupado por sus datos, reduciendo así el espacio de disco utilizable a la mitad.

**Este tutorial explica cómo gestionar y reconstruir un RAID software tras un reemplazo de disco en su servidor en modo UEFI.**

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

Durante este tutorial, utilizamos los términos **disco principal** y **disco secundario**. En este contexto:

- El disco principal es el disco cuya ESP (partición del sistema EFI) está montada por Linux
- Los discos secundarios son todos los demás discos del RAID

## Instrucciones

Cuando adquiere un nuevo servidor, puede sentir la necesidad de realizar una serie de pruebas y acciones. Una de estas pruebas podría ser simular una falla de disco para comprender el proceso de reconstrucción del RAID y prepararse en caso de problemas.

### Vista previa del contenido

- [Información básica](#basicinformation)
- [Comprensión de la partición del sistema EFI (ESP)](#efisystemparition)
- [Simulación de una falla de disco](#diskfailure)
    - [Eliminación del disco defectuoso](#diskremove)
- [Reconstrucción del RAID](#raidrebuild)
    - [Reconstrucción del RAID después del reemplazo del disco principal (modo de rescate)](#rescuemode)
    - [Recreación de la partición del sistema EFI](#recreateesp)
    - [Reconstrucción del RAID cuando las particiones EFI no están sincronizadas después de actualizaciones importantes del sistema (ej. GRUB)](#efiraidgrub)
    - [Añadido de la etiqueta a la partición SWAP (si aplica)](#swap-partition)
    - [Reconstrucción del RAID en modo normal](#normalmode)

<a name="basicinformation"></a>

### Información básica

En una sesión de línea de comandos, escriba el siguiente comando para determinar el estado actual del RAID :

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

Este comando nos muestra que actualmente tenemos dos volúmenes RAID software configurados, **md2** y **md3**, con **md3** siendo el más grande de los dos. **md3** se compone de dos particiones, llamadas **nvme1n1p3** y **nvme0n1p3**.

El [UU] significa que todos los discos funcionan normalmente. Un `_` indicaría un disco defectuoso.

Si tiene un servidor con discos SATA, obtendrá los siguientes resultados :

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

Aunque este comando devuelve nuestros volúmenes RAID, no nos indica el tamaño de las particiones en sí. Podemos encontrar esta información con el siguiente comando :

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

El comando `fdisk -l` también permite identificar el tipo de sus particiones. Esta es una información importante durante la reconstrucción de su RAID en caso de falla de disco.

Para las particiones **GPT**, la línea 6 mostrará : `Disklabel type: gpt`.
Esta información solo es visible cuando el servidor está en modo normal.

Siempre basándonos en los resultados de `fdisk -l`, podemos ver que `/dev/md2` se compone de 1022 MiB y `/dev/md3` contiene 474,81 GiB. Si ejecutamos el comando `mount`, también podemos encontrar la disposición de los discos.

Como alternativa, el comando `lsblk` ofrece una vista diferente de las particiones :

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

Además, si ejecutamos `lsblk -f`, obtenemos más información sobre estas particiones, tales como el LABEL y el UUID :

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

Tome nota de los dispositivos, las particiones y sus puntos de montaje; esto es importante, especialmente después del reemplazo de un disco.

A partir de los comandos y resultados anteriores, tenemos :

- Dos matrices RAID : `/dev/md2` y `/dev/md3`.
- Cuatro particiones que forman parte del RAID : **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2**, **nvme0n1p3** con los puntos de montaje `/boot` y `/`.
- Dos particiones no incluidas en el RAID, con los puntos de montaje : `/boot/efi` y [SWAP].
- Una partición que no tiene punto de montaje : **nvme1n1p1**

La partición `nvme0n1p5` es una partición de configuración, es decir, un volumen de solo lectura conectado al servidor que le proporciona los datos de configuración inicial.

<a name="efisystempartition"></a>

### Comprender la partición del sistema EFI (ESP)

***¿Qué es una partición del sistema EFI ?***

Una partición del sistema EFI es una partición en la que el servidor inicia. Contiene los archivos de inicio, así como los controladores de inicio o las imágenes del kernel de un sistema operativo instalado. También puede contener programas útiles diseñados para ejecutarse antes de que el sistema operativo inicie, así como archivos de datos tales como registros de errores.

***¿La partición del sistema EFI está incluida en el RAID ?***

No, a partir de agosto de 2025, cuando se realiza una instalación del sistema operativo por parte de OVHcloud, la partición ESP no está incluida en el RAID. Cuando utiliza nuestros modelos de sistema operativo para instalar su servidor con un RAID software, se crean varias particiones del sistema EFI: una por disco. Sin embargo, solo se monta una partición EFI a la vez. Todas las ESP creadas contienen los mismos archivos. Todos los ESP creados en el momento de la instalación contienen los mismos archivos.

La partición del sistema EFI se monta en `/boot/efi` y el disco en el que se monta se selecciona por Linux al iniciar.

Ejemplo :

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

Según los resultados anteriores, vemos que tenemos dos particiones del sistema EFI idénticas (nvme0n1p1 y nvme1n1p1), pero solo **nvme0n1p1** está montada en `/boot/efi`. Las dos particiones tienen la ETIQUETA: `EFI_SYSPART` (esta denominación es específica de OVHcloud).

***¿Cambia regularmente el contenido de la partición del sistema EFI?***

En general, el contenido de esta partición no cambia mucho, solo debería cambiar cuando se actualiza el gestor de arranque (*bootloader*).

Sin embargo, recomendamos ejecutar un script automático o manual para sincronizar todas las ESP, de modo que todas contengan los mismos archivos actualizados. De esta forma, si el disco en el que está montada esta partición falla, el servidor podrá reiniciarse en la ESP de uno de los otros discos.

***¿Qué ocurre si falla el disco principal montado en `boot/efi`?***

> [!primary]
> Tenga en cuenta que a continuación analizamos los casos más comunes, pero existen otras razones por las que un servidor podría no arrancar en modo normal tras sustituir un disco.
>

**Caso práctico 1**: no se han producido cambios ni actualizaciones importantes en el sistema (por ejemplo, GRUB).

- El servidor puede arrancar en modo normal y puede proceder a reconstruir el RAID.
- El servidor no puede arrancar en modo normal, se reinicia en modo de rescate, donde puede reconstruir el RAID y volver a crear la partición EFI en el nuevo disco.

**Caso práctico 2**: se han producido actualizaciones importantes del sistema (por ejemplo, GRUB) y se han sincronizado las ESP.

- El servidor puede arrancar en modo normal, ya que todas las ESP contienen información actualizada y la reconstrucción del RAID se puede realizar en modo normal.
- El servidor no puede arrancar en modo normal, por lo que se reinicia en modo de rescate, donde se puede reconstruir el RAID y volver a crear la partición del sistema EFI en el nuevo disco.

**Caso práctico 3**: se han producido actualizaciones importantes del sistema (por ejemplo, GRUB) y las particiones ESP no se han sincronizado.

- El servidor no puede arrancar en modo normal, por lo que se reinicia en modo de rescate, donde se puede reconstruir el RAID, volver a crear la partición del sistema EFI en el nuevo disco y reinstalar el gestor de arranque (bootloader) en él.
- El servidor puede arrancar en modo normal (esto podría ocurrir en el caso de que se actualice un sistema operativo a una versión más reciente, pero la versión de GRUB permanezca sin cambios) y se puede proceder a reconstruir el RAID.

De hecho, en algunos casos, el arranque desde una ESP obsoleta no funciona. Por ejemplo, una actualización importante de GRUB podría hacer que la versión antigua de GRUB presente en la ESP sea incompatible con los módulos GRUB más recientes instalados en la partición `/boot`.

***¿Cómo puedo sincronizar mis particiones del sistema EFI y con qué frecuencia debo hacerlo?***

> [!primary]
> Tenga en cuenta que, dependiendo de su sistema operativo, el proceso puede ser diferente. Por ejemplo, Ubuntu es capaz de mantener varias particiones del sistema EFI sincronizadas cada vez que se actualiza GRUB. Sin embargo, es el único sistema operativo que lo hace. Le recomendamos que consulte la documentación oficial de su sistema operativo para comprender cómo gestionar las ESP.
>
> En esta guía, el sistema operativo utilizado es Debian.

Le recomendamos que sincronice sus ESP con regularidad o después de cada actualización importante del sistema. Por defecto, todas las particiones del sistema EFI contienen los mismos archivos después de la instalación. Sin embargo, si se trata de una actualización importante del sistema, la sincronización de las ESP es esencial para mantener el contenido actualizado.

<a name="script"></a>

#### Script

Aquí tiene un script que puede utilizar para sincronizarlos manualmente. También puede ejecutar un script automatizado para sincronizar las particiones diariamente o cada vez que se inicie el servicio.

Antes de ejecutar el script, asegúrese de que `rsync` esté instalado en su sistema :

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat y Fedora**

```sh
sudo yum install rsync
```

Para ejecutar un script en Linux, necesita un archivo ejecutable :

- Empiece creando un archivo .sh en el directorio que elija, reemplazando `nombre-del-script` por el nombre que elija.

```sh
sudo touch nombre-del-script.sh
```

- Abra el archivo con un editor de texto y agregue las siguientes líneas :

```sh
sudo nano nombre-del-script.sh
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
sudo chmod +x nombre-del-script.sh
```

- Ejecute el script

```sh
sudo ./nombre-del-script.sh
```

- Si no está en el directorio

```sh
./path/to/folder/nombre-del-script.sh
```

Cuando se ejecuta el script, el contenido de la partición EFI montada se sincronizará con las demás. Para acceder al contenido, puede montar una de estas particiones EFI no montadas en el punto de montaje: `/var/lib/grub/esp`.

<a name="diskfailure"></a>

### Simulación de una falla de disco

Ahora que tenemos toda la información necesaria, podemos simular una falla de disco y proceder a los tests. En este primer ejemplo, provocaremos una falla del disco principal `nvme0n1`.

El método preferido para hacerlo es a través del modo rescue de OVHcloud.

Reinicie primero el servidor en modo rescue y conéctese con las credenciales proporcionadas.

Para retirar un disco del RAID, el primer paso es marcarlo como **Failed** y retirar las particiones de sus matrices RAID respectivas.

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

A partir del resultado anterior, nvme0n1 contiene dos particiones en RAID que son **nvme0n1p2** y **nvme0n1p3**.

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

Cuando ejecutamos el comando `cat /proc/mdstat`, obtenemos :

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0](F) nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2](F) nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

Como podemos ver arriba, el [F] al lado de las particiones indica que el disco está defectuoso o fallido.

A continuación, retiramos estas particiones de las matrices RAID para eliminar completamente el disco del RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --remove /dev/nvme0n1p2
# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --remove /dev/nvme0n1p3
# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

El estado de nuestro RAID debería parecerse ahora a esto :

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

De acuerdo con los resultados anteriores, podemos ver que ahora solo hay dos particiones en las matrices RAID. Hemos logrado degradar el disco **nvme0n1**.

Para asegurarnos de obtener un disco similar a un disco vacío, utilizamos el siguiente comando en cada partición, y luego en el disco mismo :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
shred -s10M -n1 /dev/nvme0n1p5
shred -s10M -n1 /dev/nvme0n1
```

El disco ahora aparece como un disco nuevo y vacío :

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

Si ejecutamos el siguiente comando, verificamos que nuestro disco ha sido correctamente "borrado" :

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

Para obtener más información sobre la preparación y la solicitud de reemplazo de un disco, consulte este [guía](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

Si ejecuta el siguiente comando, puede obtener más detalles sobre las matrices RAID :

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

Ahora podemos proceder al reemplazo del disco.

<a name="raidrebuild"></a>

### Reconstrucción del RAID

> [!primary]
> Este proceso puede variar según el sistema operativo instalado en su servidor. Le recomendamos consultar la documentación oficial de su sistema operativo para obtener los comandos adecuados.
>

> [!warning]
>
> En la mayoría de los servidores con RAID software, después de un reemplazo de disco, el servidor puede arrancar en modo normal (sobre el disco sano) y la reconstrucción puede realizarse en modo normal. Sin embargo, si el servidor no puede arrancar en modo normal después del reemplazo del disco, reiniciará en modo rescue para proceder a la reconstrucción del RAID.
>
> Si su servidor puede arrancar en modo normal después del reemplazo del disco, simplemente siga los pasos de [esta sección](#rebuilding-the-raid-in-normal-mode).

<a name="rescuemode"></a>

#### Reconstrucción del RAID en modo rescue

Una vez reemplazado el disco, el siguiente paso consiste en copiar la tabla de particiones del disco sano (en este ejemplo, nvme1n1) en el nuevo (nvme0n1).

**Para particiones GPT**

El comando debe tener este formato: `sgdisk -R /dev/nuevo disco /dev/disco sano`

En nuestro ejemplo :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Ejecute `lsblk` para asegurarse de que las tablas de particiones se hayan copiado correctamente :

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

Una vez hecho esto, el siguiente paso consiste en asignar un GUID aleatorio al nuevo disco para evitar conflictos de GUID con otros discos :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
```

Si recibe el siguiente mensaje :

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Simplemente ejecute el comando `partprobe`.

Ahora podemos reconstruir la matriz RAID. El siguiente fragmento de código muestra cómo agregar nuevamente las nuevas particiones (nvme0n1p2 y nvme0n1p3) a la matriz RAID.

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

Una vez que la reconstrucción del RAID esté terminada, ejecute el siguiente comando para asegurarse de que las particiones se hayan agregado correctamente al RAID:

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

Según los resultados anteriores, las particiones del nuevo disco se han agregado correctamente al RAID. Sin embargo, la partición del sistema EFI y la partición SWAP (en algunos casos) no se han duplicado, lo cual es normal ya que no forman parte del RAID.

> [!warning]
> Los ejemplos anteriores ilustran simplemente los pasos necesarios basados en una configuración de servidor predeterminada. Los resultados de cada comando dependen del tipo de hardware instalado en su servidor y de la estructura de sus particiones. En caso de duda, consulte la documentación de su sistema operativo.
> 
> Si necesita asistencia profesional para la administración de su servidor, consulte los detalles de la sección [Más información](#go-further) de esta guía.
>

<a name="recreateesp"></a>

#### Recreación de la partición del sistema EFI

Para recrear la partición del sistema EFI, debemos formatear **nvme0n1p1** y replicar el contenido de la partición del sistema EFI sana (en nuestro ejemplo: nvme1n1p1) en esta última.

Aquí, asumimos que ambas particiones se han sincronizado y contienen archivos actualizados.

> [!warning]
> Si se ha realizado una actualización importante del sistema, como una actualización del kernel o de GRUB, y las dos particiones no se han sincronizado, consulte esta [sección](#rebuilding-raid-when-efi-partitions-are-not-synchronized-after-major-system-updates-eg-grub) una vez que haya terminado de crear la nueva partición del sistema EFI.
>

Primero, formateamos la partición:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

A continuación, asignamos la etiqueta `EFI_SYSPART` a la partición. (este nombre es específico de OVHcloud):

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Luego, duplicamos el contenido de nvme1n1p1 en nvme0n1p1. Comenzamos creando dos directorios, que llamamos « old » y « new » en nuestro ejemplo:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

A continuación, montamos **nvme1n1p1** en el directorio « old » y **nvme0n1p1** en el directorio « new » para diferenciarlos:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme1n1p1 old
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme0n1p1 new
```

Luego, copiamos los archivos del directorio 'old' a 'new':

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

Una vez hecho esto, desmontamos ambas particiones:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

A continuación, montamos la partición que contiene la raíz de nuestro sistema operativo en `/mnt`. En nuestro ejemplo, esta partición es **md3**:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

Montamos los siguientes directorios para asegurarnos de que cualquier manipulación que realicemos en el entorno `chroot` funcione correctamente:

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

Luego, utilizamos el comando `chroot` para acceder al punto de montaje y asegurarnos de que la nueva partición del sistema EFI se ha creado correctamente y que el sistema reconoce las dos ESP:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Para mostrar las particiones ESP, ejecutamos el comando `blkid -t LABEL=EFI_SYSPART`:

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Los resultados anteriores muestran que la nueva partición EFI se ha creado correctamente y que la etiqueta se ha aplicado correctamente.

<a name="efiraidgrub"></a>

#### Reconstrucción del RAID cuando las particiones EFI no están sincronizadas después de actualizaciones importantes del sistema (GRUB)

/// details | **Expanda esta sección**

> [!warning]
> Siga los pasos de esta sección solo si se aplica a su caso.
> 

Cuando las particiones del sistema EFI no están sincronizadas después de actualizaciones importantes del sistema que modifican/afectan a GRUB, y se reemplaza el disco principal en el que se monta la partición, el arranque desde un disco secundario que contiene una ESP obsoleta puede no funcionar.

En este caso, además de reconstruir el RAID y recrear la partición del sistema EFI en modo rescue, también debe reinstalar GRUB en esta última.

Una vez que hayamos recreado la partición EFI y nos aseguremos de que el sistema reconoce las dos particiones (pasos anteriores en `chroot`), creamos el directorio `/boot/efi` para montar la nueva partición del sistema EFI **nvme0n1p1**:

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

A continuación, reinstalamos el cargador de arranque GRUB (*bootloader*):

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

Una vez hecho esto, ejecute el siguiente comando:

```sh
root@rescue12-customer-eu:/# update-grub
```
///

<a name="swap-partition"></a>

#### Añadimos la etiqueta a la partición SWAP (si aplica)

Una vez que hayamos terminado con la partición EFI, pasamos a la partición SWAP.

Salimos del entorno `chroot` con `exit` para recrear nuestra partición [SWAP] **nvme0n1p4** y añadir la etiqueta `swap-nvme0n1p4`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

Verificamos que la etiqueta se haya aplicado correctamente:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
NAME FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
nvme1n1

├─nvme1n1p1
│    vfat   FAT16 EFI_SYSPART
│                       BA77-E844                             504.9M     1% /root/old
├─nvme1n1p2
│    linux_ 1.2   md2   53409058-480a-bc65-4e1d-6acc848fe233
│ └─md2
│    ext4   1.0   boot  f925a033-0087-40ec-817e-44efab0351ac
├─nvme1n1p3
│    linux_ 1.2   md3   a3b8816c-a5c3-7f01-ee17-e1aa9685c35c
│ └─md3
│    ext4   1.0   root  6abfaa3b-e630-457a-bbe0-e00e5b4b59e5  441.2G     0% /mnt
└─nvme1n1p4
     swap   1     swap-nvme1n1p4
                        d6af33cf-fc15-4060-a43c-cb3b5537f58a
nvme0n1

├─nvme0n1p1
│    vfat   FAT16 EFI_SYSPART
│                       477D-6658
├─nvme0n1p2
│    linux_ 1.2   md2   53409058-480a-bc65-4e1d-6acc848fe233
│ └─md2
│    ext4   1.0   boot  f925a033-0087-40ec-817e-44efab0351ac
├─nvme0n1p3
│    linux_ 1.2   md3   a3b8816c-a5c3-7f01-ee17-e1aa9685c35c
│ └─md3
│    ext4   1.0   root  6abfaa3b-e630-457a-bbe0-e00e5b4b59e5  441.2G     0% /mnt
└─nvme0n1p4
     swap   1     swap-nvme0n1p4
                        b3c9e03a-52f5-4683-81b6-cc10091fcd15
```

Accedemos nuevamente al entorno `chroot`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Recuperamos el UUID de ambas particiones SWAP:

```sh
root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"

root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

A continuación, sustituimos el antiguo UUID de la partición SWAP (**nvme0n1p4**) por el nuevo en el archivo `/etc/fstab`:

```sh
root@rescue12-customer-eu:/# nano /etc/fstab
```

Ejemplo:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Según los resultados anteriores, el UUID antiguo es `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` y debe sustituirse por el nuevo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Asegúrese de sustituir el UUID correcto.

A continuación, comprobamos que todo está correctamente montado con el siguiente comando:

```sh
root@rescue12-customer-eu:/# mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Activamos la partición SWAP:

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

Salimos del entorno chroot con `exit` y recargamos el sistema:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

Desmontamos todos los discos:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
```

Ahora hemos completado con éxito la reconstrucción del RAID en el servidor y ya podemos reiniciarlo en modo normal.

<a name="normalmode"></a>

#### Reconstrucción del RAID en modo normal

/// details | **Expanda esta sección**

Si su servidor puede arrancar en modo normal después de sustituir un disco, puede seguir los pasos que se indican a continuación para reconstruir el RAID.

Una vez sustituido el disco, copiamos la tabla de particiones del disco sano (en este ejemplo, nvme1n1) al nuevo (nvme0n1).

**Para particiones GPT**

```sh
sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

El comando debe tener este formato: `sgdisk -R /dev/disco nuevo /dev/disco sano`.

Una vez hecho esto, el siguiente paso es asignar un GUID aleatorio al nuevo disco para evitar conflictos de GUID con otros discos:

```sh
sgdisk -G /dev/nvme0n1
```

Si recibe el siguiente mensaje:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Simplemente ejecute el comando `partprobe`. Si sigue sin ver las nuevas particiones creadas (por ejemplo, con `lsblk`), debe reiniciar el servidor antes de continuar.

A continuación, añadimos las particiones al RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

[user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

Utilice el siguiente comando para seguir la reconstrucción del RAID: `cat /proc/mdstat`.

**Recreación de la partición EFI System en el disco**

En primer lugar, instalamos las herramientas necesarias:

**Debian y Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

A continuación, formateamos la partición. En nuestro ejemplo `nvme0n1p1`:

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

A continuación, asignamos la etiqueta `EFI_SYSPART` a la partición. (este nombre es específico de OVHcloud):

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Una vez hecho esto, puede sincronizar las dos particiones utilizando el script que hemos proporcionado [aquí](#script).

Comprobamos que la nueva partición EFI System se ha creado correctamente y que el sistema la reconoce:

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Finalmente, activamos la partición [SWAP] (si aplica):

- Creamos y añadimos la etiqueta:

```sh
[user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
```

- Recuperamos los UUID de las dos particiones SWAP:

```sh
[user@server_ip ~]# sudo blkid -s /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -s /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

- Reemplazamos el antiguo UUID de la partición SWAP (**nvme0n1p4)** por el nuevo en `/etc/fstab`:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
```

Ejemplo:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Según los resultados anteriores, el antiguo UUID es `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` y debe ser reemplazado por el nuevo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`.

Asegúrese de reemplazar el UUID correcto.

A continuación, ejecutamos el siguiente comando para activar la partición SWAP:

```sh
[user@server_ip ~]# sudo swapon -av
swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

A continuación, recargamos el sistema:

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```

Hemos terminado con éxito la reconstrucción del RAID.

## Más información

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API and Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Para servicios especializados (SEO, desarrollo, etc.), contacte con [los socios de OVHcloud](/links/partner).

Si necesita asistencia para utilizar y configurar sus soluciones OVHcloud, consulte nuestras [ofertas de soporte](/links/support).

Si necesita formación o asistencia técnica para implementar nuestras soluciones, contacte con su representante comercial o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar que los expertos del equipo de Professional Services intervengan en su caso de uso específico.

Únase a nuestra [comunidad de usuarios](/links/community).