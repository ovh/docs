---
title: Zarządzanie i odbudowa oprogramowania RAID na serwerach w trybie uruchamiania UEFI
excerpt: Dowiedz się, jak zarządzać i odbudować oprogramowanie RAID po wymianie dysku na serwerze w trybie uruchamiania UEFI
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

## Wprowadzenie

Redundant Array of Independent Disks (RAID) to technologia, która zmniejsza utratę danych na serwerze, replikując dane na dwóch lub więcej dyskach.

Domyślny poziom RAID dla instalacji serwerów OVHcloud to RAID 1, który podwaja zajęte przez dane miejsce, skutecznie zmniejszając dostępne miejsce na dysku o połowę.

**Ten przewodnik wyjaśnia, jak zarządzać i odbudować oprogramowanie RAID po wymianie dysku na serwerze w trybie uruchamiania UEFI.**

Zanim zaczniemy, zwróć uwagę, że ten przewodnik skupia się na Serwerach dedykowanych, które używają UEFI jako trybu uruchamiania. Jest to typowe dla nowoczesnych płyt głównych. Jeśli Twój serwer używa trybu uruchamiania zgodnego (BIOS), odwiedź ten przewodnik: [Zarządzanie i odbudowa oprogramowania RAID na serwerach w trybie uruchamiania zgodnym (BIOS)](/pages/bare_metal_cloud/dedicated_servers/raid_soft).

Aby sprawdzić, czy serwer działa w trybie zgodnym BIOS czy trybie uruchamiania UEFI, uruchom następującą komendę:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

Aby uzyskać więcej informacji na temat UEFI, zapoznaj się z poniższym [artykułem](https://uefi.org/about).

## Wymagania początkowe

- Serwer [dedykowany](/links/bare-metal/bare-metal) z konfiguracją oprogramowania RAID
- Dostęp administracyjny (sudo) do serwera przez SSH
- Zrozumienie RAID, partycji i GRUB

W trakcie tego przewodnika używamy pojęć **główny dysk** i **dyski pomocnicze**. W tym kontekście:

- Główny dysk to dysk, którego ESP (EFI System Partition) jest montowany przez system Linux
- Dyski pomocnicze to wszystkie inne dyski w RAID

## Instrukcje

Kiedy zakupisz nowy serwer, możesz poczuć potrzebę wykonania serii testów i działań. Jednym z takich testów może być symulacja awarii dysku, aby zrozumieć proces odbudowy RAID i przygotować się na wypadek, gdyby to się kiedykolwiek zdarzyło.

### Omówienie treści

- [Podstawowe informacje](#basicinformation)
- [Zrozumienie partycji systemu EFI (ESP)](#efisystemparition)
- [Symulowanie awarii dysku](#diskfailure)
    - [Usunięcie awaryjnego dysku](#diskremove)
- [Odbudowanie RAID](#raidrebuild)
    - [Odbudowanie RAID po wymianie głównego dysku (trybie Rescue)](#rescuemode)
    - [Ponowne utworzenie partycji systemu EFI](#recreateesp)
    - [Odbudowanie RAID, gdy partycje EFI nie są zsynchronizowane po dużych aktualizacjach systemu (np. GRUB)](#efiraidgrub)
    - [Dodanie etykiety do partycji SWAP (jeśli dotyczy)](#swap-partition)
    - [Odbudowanie RAID w trybie normalnym](#normalmode)

<a name="basicinformation"></a>

### Podstawowe informacje

W sesji linii poleceń wpisz następujące polecenie, aby określić bieżący stan RAID:

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

To polecenie pokazuje nam, że obecnie mamy skonfigurowane dwa urządzenia RAID oprogramowania, **md2** i **md3**, z **md3** będącym większym z nich. **md3** składa się z dwóch partycji o nazwach **nvme1n1p3** i **nvme0n1p3**. 

[UU] oznacza, że wszystkie dyski działają normalnie. `_` wskazywałby na awaryjny dysk.

Jeśli masz serwer z dyskami SATA, otrzymasz następujące wyniki:

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

Choć to polecenie zwraca nasze objęte RAID woluminy, nie mówi nam o rozmiarze partycji samych w sobie. Możemy znaleźć tę informację za pomocą poniższego polecenia:

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

Polecenie `fdisk -l` umożliwia również identyfikację typu partycji. Jest to ważna informacja przy odbudowie RAID w przypadku awarii dysku.

Dla partycji **GPT**, linia 6 będzie wyświetlać: `Disklabel type: gpt`.
Informacje te są widoczne tylko wtedy, gdy serwer działa w trybie normalnym.

Zgodnie z wynikami `fdisk -l`, możemy stwierdzić, że `/dev/md2` składa się z 1022 MiB, a `/dev/md3` zawiera 474,81 GiB. Jeśli uruchomimy polecenie `mount`, możemy również ustalić układ dysku.

Alternatywnie, polecenie `lsblk` oferuje inny widok partycji:

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

Ponadto, jeśli uruchomimy `lsblk -f`, otrzymamy więcej informacji o tych partycjach, takich jak Eтикетка i UUID:

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

Zwróć uwagę na urządzenia, partycje i ich punkty montowania; to jest ważne, zwłaszcza po wymianie dysku.

Z powyższych poleceń i wyników mamy:

- Dwa tablice RAID: `/dev/md2` i `/dev/md3`.
- Cztery partycje, które są częścią RAID: **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2**, **nvme0n1p3** z punktami montowania `/boot` i `/`.
- Dwie partycje, które nie są częścią RAID, z punktami montowania: `/boot/efi` i [SWAP].
- Jedna partycja, która nie ma punktu montowania: **nvme1n1p1**

Partycja **nvme0n1p5** to partycja konfiguracyjna, czyli tylko do odczytu, połączona z serwerem, która dostarcza mu początkowe dane konfiguracyjne.

<a name="efisystempartition"></a>

### Zrozumienie partycji systemu EFI (ESP)

***Co to jest partycja systemu EFI?***

Partycja systemu EFI to partycja, która może zawierać programy uruchamiające system operacyjny, zarządzacze uruchamiania, obrazy jądra lub inne programy systemowe. Może również zawierać programy narzędziowe systemowe zaprojektowane do uruchomienia przed uruchomieniem systemu operacyjnego, a także pliki danych, takie jak dzienniki błędów.

***Czy partycja systemu EFI jest lustrzana w RAID?***

Nie, jak na sierpień 2025, gdy instalacja systemu operacyjnego jest wykonywana przez OVHcloud, ESP nie jest włączona do RAID. Gdy używasz naszych szablonów systemów operacyjnych do instalacji serwera z oprogramowaniem RAID, tworzone są kilka partycji systemu EFI: jedna na dysku. Jednak tylko jedna partycja EFI jest montowana jednocześnie. Wszystkie ESP utworzone w czasie instalacji zawierają te same pliki.

Partycja systemu EFI jest montowana w `/boot/efi` i dysk, na którym jest montowana, jest wybierany przez Linux w czasie uruchamiania.

Przykład:

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

Na podstawie powyższych wyników widzimy, że mamy dwie identyczne partycje systemowe EFI (nvme0n1p1 i nvme1n1p1), ale tylko **nvme0n1p1** jest zamontowana na `/boot/efi`. Obie partycje mają etykietę: `EFI_SYSPART` (nazwa ta jest specyficzna dla OVHcloud).

***Czy zawartość partycji systemowej EFI zmienia się regularnie?***

Zasadniczo zawartość tej partycji nie zmienia się zbytnio, powinna ulegać zmianom jedynie podczas aktualizacji programu rozruchowego (*bootloader*).

Zalecamy jednak uruchomienie automatycznego lub ręcznego skryptu w celu zsynchronizowania wszystkich partycji ESP, tak aby zawierały one te same aktualne pliki. Dzięki temu, jeśli dysk, na którym zamontowana jest ta partycja, ulegnie awarii, serwer będzie mógł uruchomić się ponownie na partycji ESP jednego z pozostałych dysków.

***Co się stanie, jeśli główny dysk zamontowany na `boot/efi` ulegnie awarii?***

> [!primary]
> Należy pamiętać, że poniżej omówiono najczęstsze przypadki, ale istnieje wiele innych powodów, dla których serwer może nie uruchomić się w trybie normalnym po wymianie dysku.
>

**Studium przypadku 1** - Nie wprowadzono żadnych istotnych zmian ani aktualizacji systemu (np. GRUB).

- Serwer może uruchomić się w trybie normalnym i można przystąpić do odbudowy macierzy RAID.
- Serwer nie może uruchomić się w trybie normalnym, serwer jest ponownie uruchamiany w trybie ratunkowym, w którym można odbudować macierz RAID i ponownie utworzyć partycję EFI na nowym dysku.

**Studium przypadku 2** - Wprowadzono istotne aktualizacje systemu (np. GRUB) i zsynchronizowano ESP.

- Serwer może uruchomić się w trybie normalnym, ponieważ wszystkie ESP zawierają aktualne informacje, a odbudowę macierzy RAID można przeprowadzić w trybie normalnym.
- Serwer nie jest w stanie uruchomić się w trybie normalnym, serwer jest ponownie uruchamiany w trybie ratunkowym, w którym można odbudować macierz RAID i ponownie utworzyć partycję systemową EFI na nowym dysku.

**Studium Przypadek 3** - Nastąpiły poważne aktualizacje systemu (np. GRUB), a partycje ESP nie zostały zsynchronizowane.

- Serwer nie może uruchomić się w trybie normalnym, serwer jest ponownie uruchamiany w trybie ratunkowym, w którym można odbudować macierz RAID, odtworzyć partycję systemową EFI na nowym dysku i ponownie zainstalować na nim program rozruchowy (bootloader).
- Serwer może uruchomić się w trybie normalnym (może się to zdarzyć w przypadku aktualizacji systemu operacyjnego do nowszej wersji, ale wersja GRUB pozostaje niezmieniona) i można przystąpić do odbudowy macierzy RAID.

W niektórych przypadkach uruchomienie z nieaktualnego ESP nie działa. Na przykład poważna aktualizacja GRUB może spowodować, że stara wersja GRUB obecna w ESP będzie niezgodna z nowszymi modułami GRUB zainstalowanymi w partycji `/boot`.

***Jak mogę zsynchronizować partycje systemowe EFI i jak często powinienem to robić?***

> [!primary]
> Należy pamiętać, że w zależności od systemu operacyjnego proces ten może się różnić. Na przykład Ubuntu jest w stanie synchronizować wiele partycji systemowych EFI przy każdej aktualizacji GRUB. Jest to jednak jedyny system operacyjny, który to robi. Zalecamy zapoznanie się z oficjalną dokumentacją systemu operacyjnego, aby zrozumieć, jak zarządzać ESP.
>
> W tym przewodniku używany jest system operacyjny Debian.

Zalecamy regularną synchronizację ESP lub po każdej większej aktualizacji systemu. Domyślnie wszystkie partycje systemowe EFI zawierają te same pliki po instalacji. Jednak w przypadku większej aktualizacji systemu synchronizacja ESP jest niezbędna do aktualizacji zawartości

<a name="script"></a>

#### Script

Oto skrypt, którego można użyć do ręcznej synchronizacji. Można również uruchomić skrypt automatyczny, aby synchronizować partycje codziennie lub przy każdym uruchomieniu usługi.

Przed uruchomieniem skryptu należy upewnić się, że w systemie zainstalowano program `rsync`:

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat et Fedora**

```sh
sudo yum install rsync
```

Aby uruchomić skrypt w systemie Linux, potrzebny jest plik wykonywalny:

- Najpierw utwórz plik .sh w wybranym katalogu, zastępując `nazwa-skryptu` wybraną nazwą.

```sh
sudo touch nazwa-skryptu.sh
```

- Otwórz plik w edytorze tekstowym i dodaj następujące wiersze:

```sh
sudo nano nazwa-skryptu.sh
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

Zapisz i zamknij plik.

- Ustaw skrypt jako wykonywalny

```sh
sudo chmod +x nazwa-skryptu.sh
```

- Uruchom skrypt

```sh
sudo ./nazwa-skryptu.sh
```

- Jeśli nie jesteś w odpowiednim folderze

```sh
./path/to/folder/nazwa-skryptu.sh
```

Po wykonaniu skryptu zawartość zainstalowanej partycji EFI zostanie zsynchronizowana z pozostałymi. Aby uzyskać dostęp do zawartości, możesz zainstalować dowolną z tych niezainstalowanych partycji EFI na punkcie montażu: `/var/lib/grub/esp`.

<a name="diskfailure"></a>

### Symulowanie awarii dysku

Teraz, gdy mamy wszystkie niezbędne informacje, możemy zasymulować awarię dysku i przystąpić do testów. W tym pierwszym przykładzie zasymulujemy awarię głównego dysku `nvme0n1`.

Preferowanym sposobem jest użycie środowiska trybu ratunkowego OVHcloud.

Najpierw uruchom serwer w trybie ratunkowym i zaloguj się przy użyciu dostarczonych poświadczeń.

Aby usunąć dysk z tablicy RAID, pierwszym krokiem jest oznaczenie go jako **Nieprawidłowy** i usunięcie partycji z odpowiednich tablic RAID.

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

Z powyższego wyniku wynika, że dysk `nvme0n1` składa się z dwóch partycji w RAID, które to są **nvme0n1p2** i **nvme0n1p3**.

<a name="removedisk"></a>

#### Usunięcie zepsutego dysku

Najpierw oznacz partycje **nvme0n1p2** i **nvme0n1p3** jako zepsute (*Failed*).

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/nvme0n1p2
# mdadm: set /dev/nvme0n1p2 faulty in /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --fail /dev/nvme0n1p3
# mdadm: set /dev/nvme0n1p3 faulty in /dev/md3
```

Po uruchomieniu polecenia `cat /proc/mdstat`, otrzymujemy następujące dane wyjściowe:

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

Jak widać powyżej, [F] obok partycji wskazuje, że dysk uległ awarii lub jest uszkodzony.

Następnie usuwamy te partycje z tablic RAID, aby całkowicie usunąć dysk z RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --remove /dev/nvme0n1p2
# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --remove /dev/nvme0n1p3
# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

Status naszego RAID powinien teraz wyglądać tak:

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

Z powyższych wyników widać, że teraz tylko dwie partycje pojawiają się w tablicach RAID. Pomyślnie zakończyliśmy symulację awarii dysku **nvme0n1**.

Aby upewnić się, że otrzymamy dysk podobny do pustego, używamy poniższego polecenia na każdej partycji, a następnie na samym dysku:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
shred -s10M -n1 /dev/nvme0n1p5
shred -s10M -n1 /dev/nvme0n1
```

Dysk teraz wygląda jak nowy, pusty dysk:

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

Jeśli uruchomimy poniższe polecenie, zobaczymy, że nasz dysk został pomyślnie "wyczyszczony":

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

Aby uzyskać więcej informacji na temat przygotowania i złożenia wniosku o wymianę dysku, zapoznaj się z tym [przewodnikiem](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

Jeśli uruchomisz poniższe polecenie, możesz uzyskać więcej szczegółów na temat tablic RAID:

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

Teraz możemy przystąpić do wymiany dysku.

<a name="raidrebuild"></a>

### Odbudowanie RAID

> [!primary]
> Ten proces może się różnić w zależności od systemu operacyjnego zainstalowanego na Twoim serwerze. Zalecamy, abyś zapoznał się z oficjalną dokumentacją swojego systemu operacyjnego, aby uzyskać dostęp do odpowiednich poleceń.
>

> [!warning]
>
> Dla większości serwerów w oprogramowaniu RAID po wymianie dysku serwer jest w stanie uruchomić się w normalnym trybie (na zdrowym dysku) i odbudować RAID w normalnym trybie. Jednak, jeśli serwer nie będzie mógł uruchomić się w normalnym trybie po wymianie dysku, zostanie uruchomiony w trybie ratunkowym, aby kontynuować odbudowę RAID.
>
> Jeśli Twój serwer będzie mógł uruchomić się w normalnym trybie po wymianie dysku, po prostu wykonaj kroki z [tej sekcji](#rebuilding-the-raid-in-normal-mode).

<a name="rescuemode"></a>

#### Odbudowanie RAID w trybie ratunkowym

Po wymianie dysku następnym krokiem jest skopiowanie tabeli partycji z zdrowego dysku (w tym przykładzie `nvme1n1`) na nowy (dysk `nvme0n1`).

**Dla partycji GPT**

Polecenie powinno mieć następującą postać: `sgdisk -R /dev/nowy dysk /dev/prawidłowy dysk`

W naszym przykładzie:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Uruchom `lsblk`, aby upewnić się, że tabele partycji zostały poprawnie skopiowane:

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

Po wykonaniu tego kroku następnym krokiem jest losowe ustawienie GUID nowego dysku, aby uniknąć konfliktów GUID z innymi dyskami:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
```

Jeśli otrzymasz poniższy komunikat:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Po prostu uruchom polecenie `partprobe`.

Teraz możemy odbudować tablicę RAID. Poniższy fragment kodu pokazuje, jak dodać nowe partycje (nvme0n1p2 i nvme0n1p3) z powrotem do tablicy RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
# mdadm: added /dev/nvme0n1p2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
# mdadm: re-added /dev/nvme0n1p3
```

Aby sprawdzić proces odbudowy:

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

Po zakończeniu odbudowy RAID uruchom poniższe polecenie, aby upewnić się, że partycje zostały poprawnie dodane do RAID:

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

Na podstawie powyższych wyników partycje na nowym dysku zostały poprawnie dodane do RAID. Jednak partycja systemowa EFI i partycja SWAP (w niektórych przypadkach) nie zostały zduplikowane, co jest normalne, ponieważ nie są one uwzględniane w RAID.

> [!warning]
> Powyższe przykłady ilustrują tylko niezbędne kroki na podstawie domyślnej konfiguracji serwera. Informacje w tabeli wyników zależą od sprzętu serwera i jego schematu partycji. W przypadku wątpliwości skonsultuj dokumentację swojego systemu operacyjnego.
> 
> Jeśli potrzebujesz profesjonalnej pomocy z administracją serwerem, zapoznaj się z sekcją [Sprawdź również](#go-further) tego przewodnika.
>

<a name="recreateesp"></a>

#### Odbudowanie partycji systemowej EFI

Aby odbudować partycję systemową EFI, należy sformatować **nvme0n1p1** i następnie zrekopilować zawartość zdrowej partycji (w naszym przykładzie: nvme1n1p1) na nią.

Zakładamy, że obie partycje zostały zsynchronizowane i zawierają aktualne pliki.

> [!warning]
> Jeśli miało miejsce znaczące uaktualnienie systemu, takie jak jądro lub GRUB, i partycje nie zostały zsynchronizowane, skorzystaj z tej [sekcji](#rebuilding-raid-when-efi-partitions-are-not-synchronized-after-major-system-updates-eg-grub), gdy skończysz tworzyć nową partycję systemową EFI.
>

Najpierw formatujemy partycję:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

Następnie nadajemy partycji etykietę `EFI_SYSPART` (ta nazwa jest specyficzna dla OVHcloud):

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Następnie kopiujemy zawartość nvme1n1p1 do nvme0n1p1. Najpierw tworzymy dwa katalogi, które nazwiemy "old" i "new" w naszym przykładzie:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

Następnie montujemy **nvme1n1p1** w katalogu "old" i **nvme0n1p1** w katalogu "new", aby odróżnić je od siebie:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme1n1p1 old
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme0n1p1 new
```

Następnie kopiujemy pliki z katalogu "old" do "new":

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

Po wykonaniu tej czynności odmontowujemy obie partycje:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

Następnie montujemy partycję zawierającą korzeń naszego systemu operacyjnego na `/mnt`. W naszym przykładzie jest to partycja **md3**.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

Montujemy następujące katalogi, aby upewnić się, że wszystkie operacje w środowisku `chroot` przebiegną poprawnie:

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

Następnie korzystamy z polecenia `chroot`, aby uzyskać dostęp do punktu montażowego i upewnić się, że nowa partycja systemowa EFI została poprawnie utworzona i system rozpoznaje obie partycje ESP:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Aby wyświetlić partycje ESP, uruchamiamy polecenie `blkid -t LABEL=EFI_SYSPART`:

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Wyniki powyższe pokazują, że nowa partycja EFI została poprawnie utworzona i etykieta została poprawnie zastosowana.

<a name="efiraidgrub"></a>

#### Odbudowa RAID, gdy partycje EFI nie są zsynchronizowane po znaczących uaktualnieniach systemu (GRUB)

/// details | **Rozwiń tę sekcję**

> [!warning]
> Postępuj zgodnie z krokami w tej sekcji tylko wtedy, gdy dotyczy to Twojego przypadku.
> 

Gdy partycje systemowe EFI nie są zsynchronizowane po znaczących uaktualnieniach systemu, które modyfikują/lub wpływają na GRUB, a podstawowy dysk, na którym jest zamontowana partycja, zostaje wymieniony, uruchomienie z dysku pomocniczego zawierającego przestarzałą partycję ESP może się nie powieść. 

W takim przypadku, oprócz odbudowy RAID i ponownego utworzenia partycji systemowej EFI w trybie ratunkowym, należy również ponownie zainstalować GRUB na niej.

Po utworzeniu partycji EFI i upewnieniu się, że system rozpoznaje obie partycje (poprzednie kroki w `chroot`), tworzymy katalog `/boot/efi`, aby zamontować nową partycję systemową EFI **nvme0n1p1**:

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

Następnie ponownie instalujemy bootloader GRUB:

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

Po wykonaniu tej czynności uruchamiamy poniższe polecenie:

```sh
root@rescue12-customer-eu:/# update-grub
```
///

<a name="swap-partition"></a>

#### Dodanie etykiety do partycji SWAP (jeśli dotyczy)

Po zakończeniu pracy z partycją EFI przechodzimy do partycji SWAP.

Wyjdź z środowiska `chroot` za pomocą `exit`, aby ponownie utworzyć naszą [SWAP] partycję **nvme0n1p4** i dodać etykietę `swap-nvme0n1p4`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

Sprawdzamy, czy etykieta została poprawnie zastosowana:

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

Następnie ponownie uzyskujemy dostęp do środowiska `chroot`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Pobieramy identyfikator UUID obu partycji SWAP:

```sh
root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"

root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Następnie zastępujemy stary identyfikator UUID partycji swap (**nvme0n1p4**) nowym w pliku `/etc/fstab`:

```sh
root@rescue12-customer-eu:/# nano /etc/fstab
```

Przykład:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Na podstawie powyższych wyników stary identyfikator UUID to `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` i należy go zastąpić nowym identyfikatorem `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Upewnij się, że zastępujesz właściwy identyfikator UUID.

Następnie sprawdzamy, czy wszystko jest poprawnie zamontowane, używając następującego polecenia:

```sh
root@rescue12-customer-eu:/# mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Aktywujemy partycję SWAP:

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

Wychodzimy ze środowiska chroot za pomocą polecenia `exit` i ponownie ładujemy system:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

Odmontowujemy wszystkie dyski:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
```

W ten sposób pomyślnie zakończyliśmy odbudowę macierzy RAID na serwerze i możemy teraz uruchomić go ponownie w trybie normalnym.

<a name="normalmode"></a>

#### Odbudowa macierzy RAID w trybie 

/// details |  **Rozwiń tę sekcję**

Jeśli serwer może uruchomić się w trybie normalnym po wymianie dysku, można wykonać poniższe czynności, aby odbudować macierz RAID.

Po wymianie dysku kopiujemy tabelę partycji z dysku sprawnego (w tym przykładzie nvme1n1) na nowy dysk (nvme0n1).

**W przypadku partycji GPT**

```sh
sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Polecenie powinno mieć następujący format: `sgdisk -R /dev/nowy dysk /dev/prawidłowy dysk`.

Następnie należy przypisać losowy identyfikator GUID do nowego dysku, aby uniknąć konfliktów identyfikatorów GUID z innymi dyskami:

```sh
sgdisk -G /dev/nvme0n1
```  

Jeśli pojawi się następujący komunikat:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Wystarczy wykonać polecenie `partprobe`. Jeśli nadal nie widzisz nowo utworzonych partycji (np. za pomocą `lsblk`), przed kontynuowaniem należy ponownie uruchomić serwer.

Następnie dodajemy partycje do macierzy RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

[user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

Użyj poniższego polecenia, aby śledzić odbudowę RAID: `cat /proc/mdstat`.

**Odbudowanie partycji systemu EFI na dysku**

Najpierw instalujemy niezbędne narzędzia:

**Debian i Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

Następnie formatujemy partycję. W naszym przykładzie `nvme0n1p1`:

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

Następnie nadajemy partycji etykietę `EFI_SYSPART` (ta nazwa jest specyficzna dla OVHcloud)

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Po wykonaniu tej czynności możesz zsynchronizować obie partycje za pomocą skryptu, który udostępniliśmy [tutaj](#script).

Sprawdzamy, czy nowa partycja systemu EFI została poprawnie utworzona i system ją rozpoznaje:

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Na koniec aktywujemy partycję [SWAP] (jeśli dotyczy):


- Tworzymy i dodajemy etykietę:

```sh
[user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
```

- Pobieramy UUID obu partycji SWAP:

```sh
[user@server_ip ~]# sudo blkid -s /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -s /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

- Zastępujemy stary UUID partycji SWAP (**nvme0n1p4)** nowym w pliku `/etc/fstab`:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
```

Przykład:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Na podstawie powyższych wyników, stary UUID to `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` i powinien zostać zastąpiony nowym `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. 

Upewnij się, że zastępujesz poprawny UUID.

Następnie uruchamiamy poniższe polecenie, aby aktywować partycję SWAP:

```sh
[user@server_ip ~]# sudo swapon -av
swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

Następnie ponownie ładowujemy system:

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```
///

Pomyślnie ukończono odbudowę RAID.

## Sprawdź również

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API i Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Zarządzanie hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Dla usług specjalistycznych (SEO, programowanie itp.), skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli potrzebujesz pomocy w użyciu i konfiguracji rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami wsparcia](/links/support).

Jeśli potrzebujesz szkoleń lub pomocy technicznej w wdrożeniu naszych rozwiązań, skontaktuj się ze swoim przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i zapytać ekspertów z Professional Services o pomoc w konkretnym przypadku użycia projektu.

Dołącz do [grona naszych użytkowników](/links/community).