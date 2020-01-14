---
title: 'Zarządzanie wolumenem instancji Public Cloud'
slug: utworzenie_i_konfiguracja_dodatkowego_dysku_dla_instancji
excerpt: 'Tworzenie i usuwanie wolumenu dla instancji Public Cloud w Panelu klienta'
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja: 14 listopada 2019**

## Wprowadzenie

Istnieje możliwość utworzenia dodatkowych dysków dla instancji Public Cloud.
Dodatkowy dysk jest przydatny, jeśli:

* Jest konieczne zwiększenie przestrzeni dyskowej bez zmiany modelu instancji.
* Jest potrzebna przestrzeń dyskowa o wysokiej dostępności i dużej wydajności.
* Przestrzeń dyskowa i dane mają zostać przeniesione do innej instancji.

**W tym przewodniku wyjaśniono, jak utworzyć dodatkowy dysk, a następnie skonfigurować go dla jednej z instancji.**

## Wymagania początkowe

* dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
* [instancja Public Cloud](https://www.ovh.pl/public-cloud/){.external} na koncie OVHcloud
* dostęp administracyjny (uprawnienia użytkownika root) do instancji za pośrednictwem protokołu SSH

## W praktyce

Najpierw zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} i kliknij menu `Public Cloud`{.action}. Następnie kliknij `projekt`{.action}, którego instancję chcesz utworzyć.

Kliknij przycisk `Działania`{.action} i wybierz pozycję `Utwórz wolumin`{.action}.

![select project](images/attach-disk-01.png){.thumbnail}

Skonfiguruj opcje dotyczące typu, rozmiaru i lokalizacji dysku. Gdy skończysz konfigurowanie, kliknij przycisk `Dodaj`{.action}.

![create disk](images/attach-disk-02.png){.thumbnail}

Nowy dysk zostanie wyświetlony w Panelu klienta.

![configure disk](images/attach-disk-03.png){.thumbnail}

Aby przyłączyć dysk do instancji, kliknij ikonę z trzema kropkami (po prawej) i wybierz pozycję `Przyłącz do instancji`{.action}.

![attach disk 01](images/attach-disk-04.png){.thumbnail}

Teraz wybierz instancję i kliknij przycisk `Potwierdź`{.action}, aby przyłączyć dysk.

![attach disk 02](images/attach-disk-05.png){.thumbnail}

Rozpocznie się proces przyłączania dysku do instancji, który może potrwać kilka minut.

![attach disk 03](images/attach-disk-06.png){.thumbnail}

> [!warning]
Podczas procesu przyłączania dysku nie należy opuszczać karty Infrastruktura. Mogłoby to spowodować przerwanie procesu.
>

### W systemie Linux

Najpierw nawiąż połączenie SSH z instancją, a następnie wyświetl listę dysków instancji przy użyciu poniższego polecenia.

```
# admin@serveur-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```

> [!primary]
>
VDA zwykle oznacza domyślny dysk twardy instancji. VBE oznacza dodatkowy dysk.
>

Następnie utwórz partycję dodatkowego dysku przy użyciu poniższego polecenia.

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

Następnie sformatuj partycję przy użyciu poniższego polecenia.

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

Następnie zamontuj partycję przy użyciu tego polecenia:

```
admin@serveur-1:~$ sudo mkdir /mnt/disk
admin@serveur-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```


Na koniec sprawdź punkt montowania przy użyciu tego polecenia:

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

Aby utworzyć trwały punkt montowania, należy zmienić plik konfiguracyjny /etc/fstab. Najpierw pobierz ID bloku przy użyciu poniższego polecenia.

```
admin@serveur-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Następnie możesz zmienić plik /etc/fstab przy użyciu ID bloku.

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

### W systemie Windows

Najpierw kliknij przycisk `Menu Start`{.action} prawym przyciskiem myszy, a następnie kliknij pozycję `Zarządzanie dyskami`{.action}.

![](images/start-menu.png){.thumbnail}

Po otwarciu narzędzia zarządzania dyskami nowy dysk będzie widoczny jako nieznany wolumin z nieprzydzieloną przestrzenią dyskową (jak na obrazie poniżej).

![disk management](images/disk-management-01.png){.thumbnail}

#### Inicjowanie dysku przy użyciu narzędzia Zarządzanie dyskami

Jeśli dysk jest w trybie offline, prawdopodobnie wynika to z zasad zdefiniowanych dla instancji. Aby to zmienić, kliknij dysk prawym przyciskiem myszy i wybierz pozycję `Online`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

Potem ponownie kliknij go prawym przyciskiem myszy i wybierz pozycję `Zainicjuj dysk`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

Następnie wybierz `MBR`{.action} (główny rekord rozruchowy) i kliknij przycisk `OK`{.action}.

![initialise disk](images/initialise-disk.png){.thumbnail}

#### Inicjowanie dysku przy użyciu programu DISKPART

Najpierw kliknij przycisk `Menu Start`{.action} prawym przyciskiem myszy, a następnie kliknij pozycję `Uruchom`{.action}.

![initialise disk](images/diskpart.png){.thumbnail}

Następnie w oknie Uruchamianie wpisz `cmd` i kliknij przycisk `OK`{.action}.

![run prompt](images/run-prompt.png){.thumbnail}

W wierszu polecenia wpisz następujące polecenie, aby otworzyć program narzędziowy DISKPART.

```
C:\> diskpart
```

Następnie zmień zasady dotyczące dysku przy użyciu następującej serii poleceń.

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

Current Read-only State : Nie
Read-only : Nie
Boot Disk : Nie
Pagefile Disk : Nie
Hibernation File Disk : Nie
Crashdump Disk : Nie
Clustered Disk : Nie
```

```
DISKPART> online disk

DiskPart successfully onlined the selected disk.
```

#### Formatowanie dysku

Ponownie otwórz narzędzie Zarządzanie dyskami, kliknij wolumin prawym przyciskiem myszy, a następnie kliknij pozycję `Nowy wolumin prosty...`{.action}

![format disk](images/format-disk-01.png){.thumbnail}

Kliknij przycisk `Dalej`{.action}.

![format disk](images/format-disk-02.png){.thumbnail}

Ustaw odpowiedni rozmiar dysku. Zwykle ma to być 100% przestrzeni dyskowej. Po ustawieniu rozmiaru kliknij przycisk `Dalej`{.action}.

![format disk](images/format-disk-03.png){.thumbnail}

Z listy rozwijanej wybierz literę, aby identyfikować dysk, a następnie kliknij przycisk `Dalej`{.action}.

![format disk](images/format-disk-04.png){.thumbnail}

Wybierz odpowiednie opcje dysku, a następnie kliknij przycisk `Dalej`{.action} w celu wykonania operacji formatowania.

![format disk](images/format-disk-05.png){.thumbnail}

Na koniec kliknij przycisk `Zakończ`{.action}, aby ukończyć operację.

![format disk](images/format-disk-06.png){.thumbnail}

Po sformatowaniu dysk będzie dostępny w Eksploratorze plików.

## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.