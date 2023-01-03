---
title: 'Zarządzanie wolumenem instancji Public Cloud'
slug: utworzenie_i_konfiguracja_dodatkowego_dysku_dla_instancji
excerpt: 'Dowiedz się, jak przypisać nowy wolumen do instancji Public Cloud'
section: 'Zarządzanie w Panelu klienta OVH'
order: 1
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 04-01-2023**

## Wprowadzenie

Możesz utworzyć dodatkowe dyski dla instancji Public Cloud.
Może to być przydatne w następujących przypadkach:

- Jeśli chcesz zwiększyć przestrzeń dyskową bez konieczności zmiany szablonu instancji.
- Jeśli chcesz dysponować przestrzenią dyskową o wysokiej dostępności i wysokiej wydajności.
- Jeśli chcesz przenieść przestrzeń dyskową i dane do innej instancji.

**Dowiedz się, jak utworzyć dodatkowy dysk i skonfigurować go na Twojej instancji.**

## Wymagania początkowe

- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Posiadanie instancji [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/){.external} na koncie OVHcloud
- Dostęp administratora (root) do Twojej instancji przez SSH

> [!warning]
> Ta funkcja nie jest aktualnie dostępna dla instancji Metal.
>

## W praktyce

### Przypisz nowy wolumen

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud. Następnie otwórz `Block Storage`{.action} w menu po lewej stronie.

W tej części kliknij przycisk `Utwórz wolumen`{.action}.

![Wybierz projekt](images/avolume01.png){.thumbnail}

Postępuj zgodnie z kolejnymi instrukcjami, aby wybrać opcje lokalizacji, typu dysku i pojemności dysku. Wpisz nazwę wolumenu i zatwierdź, klikając `Utwórz wolumen`{.action}.

![create disk](images/avolume02.png){.thumbnail}

Nowy dysk zostanie wyświetlony w Panelu klienta.

![konfiguracja disk](images/avolume03.png){.thumbnail}

Po prawej stronie wolumenu kliknij przycisk `...`{.action}, a następnie wybierz `Przypisz do instancji`{.action}.

![attach disk 01](images/avolume04.png){.thumbnail}

W oknie, które się wyświetli wybierz instancję z listy i kliknij `Zatwierdź`{.action}, aby podłączyć dysk.

![attach disk 02](images/avolume05.png){.thumbnail}

Rozpocznie się proces łączenia dysku z Twoją instancją. Operacja może zająć kilka minut.

> [!warning]
> Pamiętaj, aby podczas logowania dysk nie opuszczał aktualnej strony w Panelu klienta OVHcloud. Może to zakłócić proces.
>

### Konfiguracja nowego dysku

Poniższe przykłady zakładają, że jesteś zalogowany jako użytkownik z odpowiednimi uprawnieniami.

#### Linux

Otwórz [połączenie SSH z Twoją instancją](https://docs.ovh.com/pl/public-cloud/public-cloud-pierwsze-kroki/#connect-to-instance), następnie użyj poniższej komendy, aby wyświetlić powiązane dyski.

```bash
~$ admin@server-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```

> [!primary]
>
> W tym przykładzie `vda` odnosi się do dysku domyślnego instancji. Dodatkowy dysk zostanie nazwany `vdb`.
>

Utwórz partycję na dodatkowym dysku za pomocą poniższych poleceń.

```bash
~$ admin@server-1:~$ sudo fdisk /dev/vdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.
```

```bash
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

```bash
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Następnie utworz nową partycję `vdb`, używając polecenia:

```bash
~$ admin@server-1:~$ sudo mkfs.ext4 /dev/vdb1
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

Zamontuj partycję za pomocą następujących poleceń:

```bash
admin@server-1:~$ sudo mkdir /mnt/disk
admin@server-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```

Sprawdź punkt montowania za pomocą tego polecenia:

```bash
~$ admin@server-1:~$ df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 9.8G 23M 9.2G 1% /mnt/disk
```

> [!primary]
>
> Montowanie nie jest stałe, ponieważ dysk zostanie odłączony podczas restartu instancji. Aby zautomatyzować montaż, edytuj plik `fstab`.
>

Pobierz UID (blok ID) nowego wolumenu:

```bash
~$ admin@server-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Otwórz `/etc/fstab` z edytorem tekstu:

```
~$ sudo nano /etc/fstab
```

Dodaj poniższą linię do pliku i zastąp UID Twoją:

```console
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```

Zapisz i wyjdź z edytora. Dysk powinien być automatycznie montowany przy każdym restarcie.

#### Windows

Utworzenie połączenia RDP (Remote Desktop) z instancją Windows.

Po zalogowaniu kliknij prawym przyciskiem myszy przycisk `Start`{.action} i otwórz `Zarządzanie dyskami`{.action}.

![disk management](images/start-menu.png){.thumbnail}

Nowy dysk będzie wyświetlany jako nieznany wolumen z nieprzydzieloną przestrzenią.

![nieznana objętość](images/disk-management-01.png){.thumbnail}

Jeśli dysk jest pokazany tutaj jako offline, musi zostać najpierw zainicjowany. W tym celu możesz użyć [interfejsu użytkownika Windows](#initDiskManagement) lub [narzędzia DISKPART](#initDiskpart). W przeciwnym razie przeprowadź [formatowanie dysku w Zarządzaniu dyskami](#formatDiskManagement).

##### **Zainicjowanie dysku w zarządzaniu dyskami** <a name="initDiskManagement"></a>

Kliknij prawym przyciskiem myszy na dysk i wybierz `Online`{.action}. 

Jeśli dysk jest pokazany tutaj jako offline, jest to prawdopodobnie wynikiem polityki uruchomionej na instancji. Aby rozwiązać ten problem, kliknij prawym przyciskiem myszy na dysk i wybierz `Online`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

Kliknij prawym przyciskiem myszy i wybierz tym razem `Zainicjuj dysk`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

Następnie wybierz `MBR`{.action} i kliknij `OK`{.action}.

![initialise disk](images/initialise-disk.png){.thumbnail}

##### **Zainstaluj dysk za pomocą DISKPART** <a name="initDiskpart"></a>

Kliknij prawym przyciskiem myszy przycisk `Start`{.action} i otwórz `Uruchom`{.action}.

![initialise disk](images/diskpart.png){.thumbnail}

Wpisz `cmd` i kliknij `OK`{.action}, aby otworzyć aplikację wiersza poleceń.

![run szybki](images/run-prompt.png){.thumbnail}

Na zamówienie otwórz DISKPART:

```
C:\> diskpart
```

Użyj następującej serii poleceń DISKPART, aby umieścić dysk `online`:

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system .

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

##### **Formacja dysku** <a name="formatDiskManagement"></a>

W narzędziu `Zarządzanie dyskami`{.action} kliknij prawym przyciskiem myszy nowy dysk i wybierz `Nowy prosty wolumen...`{.action}.

![format disk](images/format-disk-01.png){.thumbnail}

W asystencie kliknij `Dalej`{.action}, aby określić rozmiar woluminu. Domyślnie musi być maksymalnie. Kliknij na `Dalej`{.action}, aby kontynuować.

![format disk](images/format-disk-03.png){.thumbnail}

Pozostaw nowy domyślny list odtwarzacza lub wybierz inny, a następnie kliknij `Dalej`{.action}.

![format disk](images/format-disk-04.png){.thumbnail}

Nazwij wolumen (opcjonalnie) i potwierdź opcje formatowania, klikając `Dalej`{.action}.

![format disk](images/format-disk-05.png){.thumbnail}

W ostatnim oknie kliknij `Zakończ`{.action}, aby sformatować dysk.

![format disk](images/format-disk-06.png){.thumbnail}

Dysk będzie następnie dostępny jako dysk w eksploratorze plików.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.