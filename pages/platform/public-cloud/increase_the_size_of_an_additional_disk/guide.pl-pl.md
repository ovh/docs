---
title: 'Zwiększenie rozmiaru dodatkowego dysku'
excerpt: 'Ten przewodnik zawiera wskazówki dotyczące zwiększania rozmiaru dodatkowego dysku i powiększania jego głównej partycji.'
slug: zwiekszenie_rozmiaru_dodatkowego_dysku
legacy_guide_number: g1865
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja: 14 listopada 2019**

## Wprowadzenie

Jeśli wykorzystano całą przestrzeń dyskową dodatkowego dysku, można zwiększyć jego rozmiar. 

**Ten przewodnik zawiera informacje dotyczące zwiększania rozmiaru dodatkowego dysku i powiększania jego głównej partycji.**

## Wymagania początkowe

* [instancja Public Cloud](https://www.ovh.pl/public-cloud/){.external} na koncie OVHcloud
* [dodatkowy dysk](https://www.ovh.pl/public-cloud/block-storage/){.external} przyłączony do instancji
* dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
* dostęp administracyjny (uprawnienia użytkownika root) do instancji za pośrednictwem protokołu SSH (tylko w systemie Linux)
* dostęp administracyjny do instancji za pośrednictwem protokołu RDP (tylko w systemie Windows)

## W praktyce

### W Panelu klienta

Aby wdrożyć instancję Public Cloud, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Kliknij pozycję `Public Cloud`{.action} w lewym górnym rogu strony. Na następującym ekranie kliknij przycisk strzałki obok domyślnej nazwy projektu (w lewym górnym rogu ekranu). Wybierz projekt, w którym chcesz zmienić rozmiar dodatkowego dysku.

![control panel](images/select_project.png){.thumbnail}

W sekcji „Przestrzeń dyskowa” na lewym pasku bocznym znajdź swój dysk Block Storage.

![control panel](images/increase-disk-02.png){.thumbnail}

Następnie kliknij ikonę z trzema kropkami (z prawej strony dysku) i wybierz pozycję Edytuj. Nastąpi przekierowanie do strony, na której można zmienić pojemność woluminu.

![control panel](images/increase-disk-03.png){.thumbnail}

Po wprowadzeniu zmian kliknij przycisk `Zmodyfikuj wolumin`{.action}.


### W systemie Linux

Najpierw odmontuj dysk przy użyciu tego polecenia.

```
admin@server-1:~$ sudo unmount /mnt/disk
```

Następnie ponownie utwórz partycję.

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

Następnie zweryfikuj i ponownie sprawdź partycję.

```
#admin@server-1:~$ sudo e2fsck -f /dev/vdb1

e2fsck 1.42.12 (29-Aug-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/vdb: 12/3276800 files (0.0% non-contiguous), 251700/13107200 blocks
```

```
#admin@server-1:~$ sudo resize2fs /dev/vdb1

resize2fs 1.42.12 (29-Aug-2014)
Resizing the filesystem on /dev/vdb to 18350080 (4k) blocks.
The filesystem on /dev/vdb is now 18350080 (4k) blocks long.
```

Na koniec zamontuj i sprawdź dysk.

```
#admin@server-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```

```
#admin@server-1:~$ df -h
Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 69G 52M 66G 1% /mnt/disk
```

### W systemie Windows

Nawiąż połączenie RDP z instancją. Po zalogowaniu się kliknij prawym przyciskiem myszy przycisk `Menu Start`{.action}, a następnie kliknij pozycję `Zarządzanie dyskami`{.action}.

![windows](images/increase-disk-04.png){.thumbnail}

Po otwarciu narzędzia zarządzania dyskami nowy dysk będzie widoczny jako nieznany wolumin z nieprzydzieloną przestrzenią dyskową (jak na obrazie poniżej).

![windows](images/increase-disk-05.png){.thumbnail}

Jeśli dysk jest w trybie offline, prawdopodobnie wynika to z zasad zdefiniowanych dla instancji. Aby to zmienić, kliknij dysk prawym przyciskiem myszy i wybierz pozycję Online.

![windows](images/increase-disk-06.png){.thumbnail}

> [!primary]
>
W zależności od wersji systemu Windows przed użyciem dodatkowego dysku może być konieczne jego zainicjowanie. Aby zainicjować dysk, ponownie kliknij go prawym przyciskiem myszy i wybierz pozycję `Zainicjuj dysk`{.action}.
>

Jeśli wolumin główny na dysku jest mniejszy niż cała pojemność dysku, kliknij wolumin prawym przyciskiem myszy i wybierz pozycję `Rozszerz wolumin`{.action}.

![windows](images/increase-disk-07.png){.thumbnail}

Zostanie wyświetlony Kreator rozszerzania woluminów. Kliknij przycisk `Dalej`{.action}, aby uruchomić kreator.

![windows](images/increase-disk-08.png){.thumbnail}

Zwiększ wolumin do odpowiedniego rozmiaru i następnie kliknij przycisk `Dalej`{.action}.

![windows](images/increase-disk-09.png){.thumbnail}

Na koniec kliknij przycisk `Zakończ`{.action}, aby ukończyć proces.

![windows](images/increase-disk-10.png){.thumbnail}

## Sprawdź również

* [Utworzenie i konfiguracja dodatkowego dysku dla instancji](https://docs.ovh.com/pl/public-cloud/utworzenie_i_konfiguracja_dodatkowego_dysku_dla_instancji/){.external}
* Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.