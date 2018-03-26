---
title: Lisälevyn koon kasvattaminen
excerpt: Lisälevyn koon kasvattaminen
slug: lisalevyn_koon_kasvattaminen
legacy_guide_number: g1865
---


## 
Jos lisälevysi tallennuskapasiteetti on tullut täyteen, voit aina kasvattaa sen kokoa.

Tässä ohjeessa kerrotaan, kuinka lisälevyn kokoa voidaan muuttaa sekä osiojakoa suurentaa.


## Edellytykset

- Instanssi
- Lisälevy




## 

- Kirjaudu [hallintapaneeliin](https://www.ovh.com/manager/cloud/)
- Klikkaa levyn vieressä oikeassa alareunassa olevaa nuolta:



![](images/img_2744.jpg){.thumbnail}

- Valitse "Muokkaa" ja näkyviin tulee uusi valikko:



![](images/img_2745.jpg){.thumbnail}
Voit nyt:

- Muuttaa levyn nimeä
- Muuttaa levyn kokoa



- Klikkaa "Käytä"



## Huom:
Linux: nimikkeen muuttumisen estämiseksi operaation aikana (esimerkiksi vdb > vdc) levyn purkua ei suositella tehtävän ennen tätä toimenpidettä: 
```
admin@server-1:~$ sudo umount /point/de/montage
```




## Linuxilla

- Pura levy:

```
admin@server-1:~$ sudo umount /mnt/disk
```




- Luo osiojako uudelleen:

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


- Tarkista ja mitoita osiajako uudelleen:

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


- Alusta ja tarkista levy:

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





## Windowsilla

- Käynnistä levyn hallinta ja klikkaa levyn kohdalla hiiren oikeaa näppäintä



![](images/img_2748.jpg){.thumbnail}

- Klikaa Extend Volume




## 
[Paluu pilvituotteiden ohjeiden hakemistoon]({legacy}1785)

