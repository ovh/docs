---
title: 'Konfiguracja dodatkowego dysku'
excerpt: "Dowiedz się, jak dodać i skonfigurować dodatkową przestrzeń dyskową na serwerze VPS"
slug: config-additional-disk-vps
section: 'Opcje kopii zapasowych'
order: 3
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 24/02/2021**

## Wprowadzenie

Wraz z ofertą VPS OVHcloud możesz dodać bezpieczną przestrzeń dyskową jako opcję usługi. Przestrzeń dyskowa jest oddzielona od pojemności wewnętrznej serwera VPS, co czyni ją bezpiecznym miejscem do przechowywania kopii zapasowych lub innych danych statycznych. Dodatkowy dysk będzie dostępny tylko z adresu IP serwera. Nie będzie to miało wpływu na dane zawarte w dysku, nawet jeśli serwer VPS zostanie ponownie zainstalowany lub wystąpi utrata danych.

**Dowiedz się, jak aktywować opcję dodatkowego dysku i skonfigurować przestrzeń dyskową, aby z niej korzystać na serwerze VPS.**

## Wymagania początkowe

- Posiadanie [serwera VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Dostęp administracyjny przez SSH lub RDP do serwera VPS

## W praktyce

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w części `Prywatny serwer wirtualny`{.action}.

### Zamów dodatkowy dysk

Po zaznaczeniu serwera VPS kliknij kartę `Dodatkowy dysk`{.action} w menu poziomym. Kliknij polecenie `Zamów dodatkowy dysk`{.action} i wybierz rozmiar dysku w wyborze, który się wyświetli.

![adddiskvps](images/disk_vps01.png){.thumbnail}

Zapisz informacje dotyczące płatności i kliknij na `Zamów`{.action}. Po zainstalowaniu dysku otrzymasz e-mail z potwierdzeniem.

### Zamontuj nową przestrzeń dyskową

> [!warning]
> OVHcloud świadczy usługi, za które jesteś odpowiedzialny w związku z ich konfiguracją i zarządzaniem. Jesteś więc odpowiedzialny za ich prawidłowe funkcjonowanie.
>
>Jeśli napotkasz trudności z przeprowadzeniem tych operacji, skontaktuj się z wyspecjalizowanym dostawcą usług i/lub przedyskutuj problem z naszą społecznością użytkowników na stronie https://community.ovh.com/en/. OVHcloud nie może udzielić Ci wsparcia technicznego w tym zakresie.
>

#### Na serwerze VPS Linux

Jeśli dystrybucja GNU/Linux jest zainstalowana na Twoim serwerze VPS, połącz się z serwerem za pomocą terminala wiersza poleceń lub za pomocą aplikacji klienckiej SSH.

Poniższe przykłady zakładają, że jesteś zalogowany jako użytkownik z dużymi prawami.

Możesz użyć następującego polecenia, aby sprawdzić nazwę nowego urządzenia:

```
$ lsblk

sda       8:0    0   80G  0 disk
├─sda1    8:1    0 79.9G  0 part /
├─sda14   8:14   0    4M  0 part
└─sda15   8:15   0  106M  0 part /boot/efi
sdb       8:16   0   50G  0 disk
```

W tym przykładzie dodatkowy dysk jest nazywany `sdb`.

Uruchom `fdisk`, aby utworzyć partycję na dysku. Po zaproszeniu, wprowadź `n` dla nowej partycji i zaakceptuj następujące wartości domyślne, naciskając Enter (" ↩"). Następnie użyj polecenia `w` , aby zapisać zmiany na dysku.

```
$ sudo fdisk /dev/sdb

Welcome to fdisk (util-linux 2.34).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.
```

```
Command (m for help): n

Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)

Select (default p):
```

```
Partition number (1-4, default 1): 

First sector (2048-104857599, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-104857599, default 104857599):

Created a new partition 1 of type 'Linux' and of size 50 GiB.
```

```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Po utworzeniu partycji `sdb4` możesz ją sformatować w ext:

```
$ sudo mkfs.ext4 /dev/sdb1

Creating filesystem with 13106944 4k blocks and 3276800 inodes
Filesystem UUID: a667d351-cf36-49f2-94b4-daf03d7a86a6
Superblock backups stored on blocks:
32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
4096000, 7962624, 11239424

Allocating group tables: done                           
Writing inode tables: done                           
Creating journal (65536 blocks): done
Writing superblocks and filesystem accounting information: done  
```

Ostatni etap to zamontowanie dysku:

```
$ sudo mkdir /mnt/disk
$ sudo mount /dev/sdb1 /mnt/disk
```

Na ostatnim wierszu widać, że dodatkowy dysk jest teraz zamontowany na `/mnt/disk`:

```
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            1.9G     0  1.9G   0% /dev
tmpfs           385M  1.1M  384M   1% /run
/dev/sda1        78G  2.4G   75G   4% /
tmpfs           1.9G     0  1.9G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           1.9G     0  1.9G   0% /sys/fs/cgroup
/dev/sda15      105M  3.9M  101M   4% /boot/efi
/dev/loop1       68M   68M     0 100% /snap/lxd/18150
/dev/loop3       32M   32M     0 100% /snap/snapd/10707
/dev/loop4       56M   56M     0 100% /snap/core18/1944
/dev/loop5       70M   70M     0 100% /snap/lxd/19188
tmpfs           385M     0  385M   0% /run/user/0
/dev/loop6       56M   56M     0 100% /snap/core18/1988
/dev/loop2       32M   32M     0 100% /snap/snapd/11036
tmpfs           385M     0  385M   0% /run/user/1000
/dev/sdb1        49G   53M   47G   1% /mnt/disk
```

> [!primary]
>
Poprzedni etap nie jest trwały, ponieważ dysk zostanie odłączony, jeśli serwer VPS zostanie zrestartowany. Aby zautomatyzować proces montowania, plik `fstab` musi zostać zmodyfikowany.
>

Po pierwsze, pobierz UUID (ID bloku) urządzenia:

```
$ sudo blkid
/dev/sda1: LABEL="cloudimg-rootfs" UUID="e616a2cd-3c02-4c79-9823-9b1bb5c13b26" TYPE="ext4" PARTUUID="a44089a3-f407-41e6-b7a5-1ed7672cef20"
/dev/sda15: LABEL_FATBOOT="UEFI" LABEL="UEFI" UUID="4411-1580" TYPE="vfat" PARTUUID="e1746ac7-80c1-4859-9b4d-fa6ce11b3ae9"
/dev/loop1: TYPE="squashfs"
/dev/loop2: TYPE="squashfs"
/dev/loop3: TYPE="squashfs"
/dev/loop4: TYPE="squashfs"
/dev/loop5: TYPE="squashfs"
/dev/loop6: TYPE="squashfs"
/dev/sda14: PARTUUID="7d19a2c9-75df-443e-8301-0bb85931df7d"
/dev/sdb1: UUID="87571b68-30e1-498b-a64c-49ec5cd4f31c" TYPE="ext4" PARTUUID="c965cbdf-01"
```

Otwórz `/etc/fstab` z edytorem tekstu:

```
$ sudo nano /etc/fstab
```

Dodaj poniższą linię do pliku i zastąp UUID Twoją:

```
UUID=87571b68-30e1-498b-a64c-49ec5cd4f31c /mnt/disk ext4 nofail 0 0
```

Zapisz i wyjdź z edytora. Dysk powinien być automatycznie montowany po każdym restarcie.

#### Na serwerze VPS Windows

Jeśli system operacyjny Windows jest zainstalowany na Twoim serwerze VPS, połącz się ze swoim serwerem zdalnym pulpitem (RDP).

Po zalogowaniu kliknij prawym przyciskiem myszy przycisk `Menu Start`{.action} i otwórz narzędzie `Zarządzanie dyskami`{.action}.

![winmountdiskvps](images/disk_vps_win01.png){.thumbnail}

Nowy dysk wyświetla się w postaci nieznanego wolumenu z nieprzydzieloną przestrzenią.

![winmountdiskvps](images/disk_vps_win02.png){.thumbnail}

Jeśli dysk jest oznaczony jako niepołączony, musi zostać najpierw zainicjowany. W tym celu możesz użyć [interfejsu graficznego Windows](#initDiskManagement) lub [narzędzia DISKPART](#initDiskpart). W przeciwnym razie przeprowadź [formatowanie dysku w narzędziu "Zarządzanie dyskami"](#formatDiskManagement).

##### **Zainicjowanie dysku w narzędziu "Zarządzanie dyskami"** <a name="initDiskManagement"></a>

 Kliknij prawym przyciskiem myszy na dysk i wybierz `Online`{.action}. 

![winmountdiskvps](images/disk_vps_win03.png){.thumbnail}

 Kliknij prawym przyciskiem myszy na dysk i wybierz tym razem `Zainicjuj dysk`{.action}.

![winmountdiskvps](images/disk_vps_win04.png){.thumbnail}

Wybierz `MBR`{.action} (główny sektor rozruchu) w nowym oknie i kliknij `OK`{.action}.

![winmountdiskvps](images/disk_vps_win05.png){.thumbnail}

##### **Zainstaluj dysk za pomocą DISKPART** <a name="initDiskpart"></a>

 Kliknij prawym przyciskiem myszy na `Menu Start`{.action} i otwórz `Uruchom`{.action}.

![winmountdiskvps](images/disk_vps_win06.png){.thumbnail}

Wpisz `cmd` i kliknij `OK`{.action}, aby otworzyć aplikację wiersza poleceń.

![winmountdiskvps](images/disk_vps_win07.png){.thumbnail}

W wierszu zamówień otwórz DISKPART:

```
C:\> diskpart
```

Aby skonfigurować dysk online, użyj następującej serii poleceń DISKPART:

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system.

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

##### **Formatuj dysk w narzędziu "Zarządzanie dyskami"** <a name="formatDiskManagement"></a>

W `Zarządzanie dyskami`{.action} kliknij prawym przyciskiem myszy nowy dysk i wybierz `Nowy prosty wolumen...`{.action}.

![winmountdiskvps](images/disk_vps_win08.png){.thumbnail}

W Kreatorze kliknij `Dalej`{.action}, aby określić rozmiar woluminu. Należy go ustawić domyślnie na maksimum. Kliknij na `Dalej`{.action}, aby kontynuować.

![winmountdiskvps](images/disk_vps_win09.png){.thumbnail}

Zachowaj domyślną nową literę dysku lub wybierz inną literę, a następnie kliknij `Dalej`{.action}.

![winmountdiskvps](images/disk_vps_win10.png){.thumbnail}

Nazwij wolumen (opcjonalnie) i potwierdź opcje formatowania, klikając `Dalej`{.action}.

![winmountdiskvps](images/disk_vps_win11.png){.thumbnail}

W ostatnim oknie kliknij `Zakończ`{.action}, aby sformatować dysk. Będzie on dostępny jako czytnik w Eksploratorze plików po operacji.

### Zrezygnuj z opcji dodatkowego dysku

W zakładce `Strona główna`{.action} przewiń ekran do strefy zatytułowanej **Podsumowanie opcji**. Kliknij `...`{.action} naprzeciwko opcji "Dodatkowe dyski". Kliknij `Zrezygnuj`{.action} z menu PPM.

![rozwiązanie dodatkowego dysku](images/disk_vps02.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
