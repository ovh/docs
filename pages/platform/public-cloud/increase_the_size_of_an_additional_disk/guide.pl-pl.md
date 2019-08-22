---
title: Zwiększenie rozmiaru dodatkowego dysku
excerpt: Zwiększenie rozmiaru dodatkowego dysku
slug: zwiekszenie_rozmiaru_dodatkowego_dysku
legacy_guide_number: g1865
section: Zarządzanie w Panelu klienta OVH
---


## 
Jeśli wykorzystałeś całą przestrzeń dyskową swojego dodatkowego dysku, możesz zwiększyć jego rozmiar. 

Przewodnik ten wyjaśnia, jak zwiększyć rozmiar dodatkowego dysku i partycji.


## Wstępne wymagania

- Instancja
- Dodatkowy dysk




## 

- Zaloguj się do [panelu klienta OVH](https://www.ovh.com/manager/cloud/).
- Kliknij na strzałkę w prawej dolnej części dysku:



![](images/img_2744.jpg){.thumbnail}

- Wybierz "Edytuj". Pojawi się nowe menu:



![](images/img_2745.jpg){.thumbnail}
W nowym menu możesz:

- Zmienić nazwę dysku
- Zmienić rozmiar dysku



- Kliknij na "Zastosuj".



## Uwaga:
Aby w systemie Linux podczas tej operacji nagłówek nie uległ zmianie (na przykład vdb > vdc), zaleca się zdemontowanie dysku przed wykonaniem tej operacji:

```
admin@server-1:~$ sudo umount /point/de/montage
```




## W systemie Linux

- Odmontuj dysk:

```
admin@server-1:~$ sudo umount /mnt/disk
```




- Ponownie utwórz partycję:

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


- Sprawdź i zmień rozmiar partycji:

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


- Zamontuj i sprawdź dysk:

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





## W systemie Windows

- Uruchom narzędzie do zarządzania dyskiem i kliknij prawym przyciskiem na swój dysk:



![](images/img_2748.jpg){.thumbnail}

- Kliknij na Extend Volume




## 
[Przewodniki Cloud]({legacy}1785)

