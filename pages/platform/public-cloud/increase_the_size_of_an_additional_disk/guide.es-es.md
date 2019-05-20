---
title: Aumentar el tamaño de un disco adicional
excerpt: Aumentar el tamaño de un disco adicional
slug: aumentar_el_tamano_de_un_disco_adicional
legacy_guide_number: g1865
section: Almacenamiento
---


## 
Si ha alcanzado la capacidad de almacenamiento máxima de su disco adicional, es posible aumentar su tamaño.

Esta guía explica cómo aumentar el tamaño de un disco adicional y cómo aumentar el tamaño de la partición.


## Requisitos
Para realizar todos los pases descritos en esta guía, es necesario disponer de:

- una instancia;
- un disco adicional.




## 
Conéctese al [área de cliente OVH](https://www.ovh.com/manager/cloud/).

Haga clic en la flecha situada bajo el disco:

![](images/img_2744.jpg){.thumbnail}
Seleccione «Editar». Se abrirá un nuevo menú.

![](images/img_2745.jpg){.thumbnail}
Desde este menú podrá realizar las siguientes acciones:

- cambiar el nombre del disco;
- cambiar el tamaño del disco.


Una vez haya realizado los cambios oportunos, haga clic en «Aplicar».

## Atención:
En Linux, para que el nombre del dispositivo no cambie durante esta operación (por ejemplo, vdb > vdc), se recomienda desmontar antes el disco con el siguiente comando:


```
admin@server-1:~$ sudo umount /punto/de/montaje
```




## Con Linux
Desmonte el disco:


```
admin@server-1:~$ sudo umount /mnt/disk
```


Vuelva a crear la partición:


```
admin@server-1:~$ sudo fdisk /dev/vdb
Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command
```



```
Command (m for help): d

Selected partition 1
Partition 1 has been deleted.
```



```
Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-146800639, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-146800639, default 146800639):

Created a new partition 1 of type 'Linux' and of size 70 GiB.
```



```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```


Compruebe y redimensione la partición:


```
admin@server-1:~$ sudo e2fsck -f /dev/vdb1

e2fsck 1.42.12 (29-Aug-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/vdb: 12/3276800 files (0.0% non-contiguous), 251700/13107200 blocks
```



```
admin@server-1:~$ sudo resize2fs /dev/vdb1

resize2fs 1.42.12 (29-Aug-2014)
Resizing the filesystem on /dev/vdb to 18350080 (4k) blocks.
The filesystem on /dev/vdb is now 18350080 (4k) blocks long.
```


Monte y verifique el disco:


```
admin@server-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```



```
admin@server-1:~$ df -h
Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 69G 52M 66G 1% /mnt/disk
```




## Con Windows
Abra la herramienta de administración de discos y haga clic derecho en el disco:

![](images/img_2748.jpg){.thumbnail}
Haga clic en «Extend Volume...».
