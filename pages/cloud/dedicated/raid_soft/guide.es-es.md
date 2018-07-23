---
title: RAID por software
slug: raid-software
excerpt: Como comprobar el estado del RAID y como reconstruirlo despues de la sustitucion de un disco.
section: RAID y discos
---


## Requisitos
- Tener un servidor con RAID por software.
- Tener un servidor con sistema operativo Linux o Windows.


## Estado de un RAID en Linux

### 1. Comprobacion

La comprobación del RAID se realiza con el siguiente comando:

```sh
cat /proc/mdstat
```

#### Caso de un RAID sincronizado&#58;

```sh
cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md1 : active raid1 sda1[0] 
sdb1[1] 51198912 blocks [2/2] [UU]
md2 : active raid1 sda2[0]
sdb2[1] 921462720 blocks [2/2] [UU]
```


#### Caso de un RAID desincronizado&#58;

```sh
cat /proc/mdstat 
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md2 : active raid1 sdc2[2] sdd2[3] sda2[0] sdb2[1] sde2[4] 20478912 blocks [7/5] [UUUUU__] 
md3 : inactive sda30 sdf35 sde34 sdd33 sdc32 sdb31 23316061824 blocks
```

Si hay unidades que no están integradas en el RAID, es necesario comprobar los discos.

Si estos son defectuosos, es necesario:

- Realizar el backup de los datos.
- Contactar con el soporte para planificar la sustitución de los discos.

Si su funcionamiento es correcto, se recomienda resincronizar el RAID.

### 2. Operaciones avanzadas

#### Examinar las particiones

Para examinar las particiones, puede utilizar el comando `mdadm --examine /dev/sdaX`.

```sh
mdadm --examine /dev/sda5 /dev/sda5:   
Magic : a92b4efc         Version : 0.90.00
UUID : 65889d2a:11172e42:a4d2adc2:26fd5302
Creation Time : Thu Jul 12 20:22:48 2012   
Raid Level : raid5
Used Dev Size : 1924838272 (1835.67 GiB 1971.03 GB)
Array Size : 5774514816 (5507.01 GiB 5913.10 GB)
Raid Devices : 4
Total Devices : 4
Preferred Minor : 5 

Update Time : Wed Feb 25 16:51:49 2015
State : active
Active Devices : 4
Working Devices : 4
Failed Devices : 0
Spare Devices : 0
Checksum : 36669dd - correct
Events : 2266211

Layout : left-symmetric
Chunk Size : 64K

 Number   Major   Minor   RaidDevice  State 
   0       8        5        0        active sync   /dev/sda5
   1       1        8        1        active sync   /dev/sdb5
   2       2        8        2        active sync   /dev/sdc5
   3       3        8        3        active sync   /dev/sdd2
```

#### Detener una particion

Para detener una partición, puede utilizar el comando `mdadm --stop /dev/mdX`.

```sh
mdadm --stop /dev/md126 mdadm: stopped /dev/md126 
```

#### Ensamblar el RAID en una particion distinta

Ejemplo: Poner el contenido de **sdb1** en **md1** y **md2**.

```sh
mdadm --assemble /dev/md1 /dev/sdb1 
mdadm: /dev/md1 has been started with 1 drive (out of 2).
```

```sh
cat /proc/mdstat 
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md1 : active raid1 sdb1[1] 10485696 blocks [2/1] [_U] 
```

```sh
mdadm --assemble /dev/md2 /dev/sdb2 
mdadm: /dev/md2 has been started with 1 drive (out of 2).
```

```sh
cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md2 : active raid1 sdb2[1] 1942498240 blocks [2/1] [_U]
md1 : active raid1 sdb1[1] 10485696 blocks [2/1] [_U]
```

## Estado de un RAID en Windows

Para comprobar el estado de un RAID en **Windows 2012**, abra una conexión RDP, vaya a la sección `Tools`{.action} y seleccione en la lista desplegable la herramienta `Computer Management`{.action}.

![computer_management](images/computer_management.png){.thumbnail}

Aparecerá un nuevo icono en la barra de tareas. Haga clic en él.


![ouvrir_computer_manager](images/ouvrir_computer_manager.png){.thumbnail}

Seleccione `Storage`{.action} y `Disk Management`{.action}.


![disk_management_panel](images/disk_management_panel.png){.thumbnail}

En este caso, los dos discos **Disk 0** y **Disk 1** están en *mirroring* (RAID 1) en el volumen C.


## Resincronizar un RAID en Linux


> [!warning]
>
> Antes de resincronizar un RAID, compruebe el estado de los discos.
> 


### 1. Identificar el nuevo disco
Para localizar el disco virgen, muestre las particiones con el comando `fdisk -l`.

Se mostrará el siguiente mensaje para el nuevo disco: «El disco /dev/sdX no contiene una tabla de particiones válida».

Ejemplo:

```sh
fdisk -l
Disk /dev/sda: 1500.3 GB, 1500301910016 bytes 255 heads, 63 sectors/track, 182401 cylinders, total 2930277168 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00067fad      
Device Boot      Start         End         Blocks          Id  System 
/dev/sda1 *      4096       40962048     20478976+    fd  Linux raid autodetect 
/dev/sda2      40962049     2929221632   1444129792   fd  Linux raid autodetect 
/dev/sda3      2929221633   2930268160    523264      82     Linux swap / Solaris   

Disk /dev/sdb: 2000.4 GB, 2000398934016 bytes 255 heads, 63 sectors/track, 243201 cylinders, total 3907029168 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00000000   
Disk /dev/sdb doesnt contain a valid partition table

Disk /dev/md2: 1478.8 GB, 1478788841472 bytes 2 heads, 4 sectors/track, 361032432 cylinders, total 2888259456 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00000000   
Disk /dev/md2 doesnt contain a valid partition table

Disk /dev/md1: 21.0 GB, 20970405888 bytes 2 heads, 4 sectors/track, 5119728 cylinders, total 40957824 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00000000  
Disk /dev/md1 doesnt contain a valid partition table 
```

En este caso, el disco virgen es el disco **sdb**.


### 2. Replicacion de las particiones

> [!warning]
>
> Esta etapa no se puede deshacer. Es necesario respetar escrupulosamente los sentidos de replicación. De lo contrario podría borrar todo.
> 

El procedimiento varía según la tabla de particiones:

- Para **MBR** (Master Boot Record), hay que utilizar sfdisk.
- Para **GPT** (GUID Partition Table), hay que utilizar sgdisk.


#### Como saber que tabla de particiones utiliza

Si al utilizar el comando `fdisk -l` se muestra el mensaje de abajo, significa que la tabla está en GPT. Si no, está en MBR.

```sh
WARNING: GPT (GUID Partition Table) detected on /dev/sda! The util fdisk doesnt support GPT. Use GNU Parted. Passez à étape *Disque en GPT* sinon passez à l étape *Disque en MBR*. 
```

Según la tabla de particiones utilizada en el disco, siga las indicaciones del apartado correspondiente.


#### En MBR

En caso de haber sustituido el **sda**:

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```

En caso de haber sustituido el **sdb**:

```sh
sfdisk -d /dev/sda | sfdisk /dev/sdb 
```

Puede ocurrir que falle el forzado de la replicación: «sfdisk: ERROR: sector 0 does not have an msdos signature», en cuyo caso deberá añadir `--force` al comando anterior.

En caso de haber sustituido el **sda**:

```sh
fdisk -d /dev/sdb | sfdisk --force /dev/sda 
```

En caso de haber sustituido el **sdb**:

```sh
sfdisk -d /dev/sda | sfdisk --force /dev/sdb 
```

#### En GPT

En caso de haber sustituido el **sda**:

```sh
sgdisk -R=/dev/sda /dev/sdb 
```

En caso de haber sustituido el **sdb**:

```sh
sgdisk -R=/dev/sdb /dev/sda 
```

Continuando el ejemplo anterior, las particiones están en **MBR**, por lo que hay que utilizar `sfdisk`.

```sh
sfdisk -d /dev/sda | sfdisk /dev/sdb C
Checking that no-one is using this disk right now ... OK 
Disk /dev/sdb: 243201 cylinders, 255 heads, 63 sectors/track   sfdisk: ERROR: sector 0 does not have an msdos signature /dev/sdb: unrecognized partition table type Old situation: No partitions found New situation: Units = sectors of 512 bytes, counting from 0 Device Boot    Start       End   sectors  Id  
System/dev/sdb1     4096  40962048   40957953  fd  Linux raid autodetect 
/dev/sdb2      40962049 2929221632 2888259584  fd  Linux raid autodetect 
/dev/sdb3     2929221633 2930268160    1046528  82  Linux swap / Solaris 
/dev/sdb4            0         -          0   0  

Empty Warning: partition 1 does not end at a cylinder boundary 
Warning: partition 2 does not start at a cylinder boundary 
Warning: partition 2 does not end at a cylinder boundary 
Warning: partition 3 does not start at a cylinder boundary 
Warning: partition 3 does not end at a cylinder boundary 
Successfully wrote the new partition table   Re-reading the partition table ...  
If you created or changed a DOS partition, /dev/foo7, say, then use dd(1) to zero the first 512 bytes:  dd if=/dev/zero of=/dev/foo7 bs=512 count=1 (See fdisk(8).) 
```

Las tablas de partición deberán haberse replicado.

Para comprobarlo:

```sh
fdisk -l
>>> Disk /dev/sda: 1500.3 GB, 1500301910016 bytes 255 heads, 63 sectors/track, 182401 cylinders, total 2930277168 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00067fad      
Device Boot      Start        End        Blocks     Id  System 
/dev/sda1        4096      40962048    20478976+    fd  Linux raid autodetect 
/dev/sda2      40962049   2929221632   1444129792   fd  Linux raid autodetect 
/dev/sda3     2929221633  2930268160    523264   82  Linux swap / Solaris   

>>> Disk /dev/sdb:      2000.4 GB, 2000398934016 bytes 255 heads, 63 sectors/track, 243201 cylinders, total 3907029168 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00000000   

Device Boot      Start         End      Blocks   Id  System 
/dev/sdb1   *        4096    40962048    20478976+  fd  Linux raid autodetect /dev/sdb2        40962049  2929221632  1444129792   fd  Linux raid autodetect /dev/sdb3      2929221633  2930268160      523264   82  Linux swap / Solaris   
Disk /dev/md2: 1478.8 GB, 1478788841472 bytes 2 heads, 4 sectors/track, 361032432 cylinders, total 2888259456 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal)512 bytes / 512 bytes Disk identifier: 0x00000000   
Disk /dev/md2 doesnt contain a valid partition table   
 
Disk /dev/md1: 21.0 GB, 20970405888 bytes 2 heads, 4 sectors/track, 5119728 cylinders, total 40957824 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00000000   
Disk /dev/md1 doesnt contain a valid partition table
```

### 3. Resincronizacion

> [!primary]
>
> Es necesario que `mdadm` esté instalado.
> 

En el ejemplo de abajo, podemos ver que el RAID está degradado.

```sh
cat /proc/mdstat 
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md1 : active raid1 sda1[0] 20478912 blocks [2/1] [U_]
md2 : active raid1 sda2[0] 1444129728 blocks [2/1] [U_]
```

Faltan **sdb1** en **md1** y **sdb2** en **md2**.

Es necesario añadirlos como se indica a continuación:

```sh
mdadm /dev/md1 --manage --add /dev/sdb1
mdadm: added /dev/sdb1 
mdadm /dev/md2 --manage --add /dev/sdb2
mdadm: added /dev/sdb2 
```

Durante la reconstrucción se mostrará lo siguiente:

```sh
cat /proc/mdstat Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md1 : active raid1 sdb1[2] sda1[0] 20478912 blocks [2/1] [U_] [=>...................] recovery = 5.0% (1039872/20478912) finish=4.6min speed=69324K/sec   
md2 : active raid1 sdb2[2] sda2[0] 1444129728 blocks [2/1] [U_] resync=DELAYED 
```

En **md2**, la resincronización está en DELAYED, que significa que está en espera, y se realizará una vez se haya remontado **md1**.


### 4. La swap

Ahora hay que añadir la swap al disco que acaba de formatear y añadirla al RAID.

```sh
mkswap /dev/sdb3 
```

Si se ha realizado la resincronización en el disco, habrá que activar la swap. En *rescue* no es necesario, ya que esto se hará automáticamente al arrancar.

```sh
swapon -a 
```

Para comprobar que toda la zona de swap está activada, utilice el comando free.


## Resincronizar un RAID en Windows

> [!warning]
>
> Antes de resincronizar un RAID, compruebe el estado de los discos.
> 


### En discos en RDP

Para resincronizar el RAID, es necesario abrir una conexión a escritorio remoto y acceder a `Disk Management`{.action}.


> [!primary]
>
> Si un disco del RAID está Offline, haga clic derecho en el disco y luego haga clic en `Online`{.action} para volver a ponerlo en el RAID.
> 

Haga clic derecho en el disco principal y seleccione `Add mirror`{.action}.


![resynchroniser_raid_soft](images/resynchroniser_raid_soft.png){.thumbnail}

Seleccione el disco que quiera poner en espejo.


![add_mirroir](images/add_mirroir.png){.thumbnail}

Confirme haciendo clic en `Add mirror`{.action}.


> [!primary]
>
> El disco añadido en el RAID se pondrá automáticamente en Dynamic, si aún no lo está, antes de la resincronización.
> 

La sincronización empezará.

![resync_en_cours](images/resync_en_cours.png){.thumbnail}