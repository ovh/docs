---
title: "Zarządzanie programowym RAID (tryb rozruchu UEFI) na serwerach dedykowanych"
excerpt: "Zarządzaj i odbuduj programowy RAID po wymianie dysku na serwerze dedykowanym w trybie rozruchu UEFI."
updated: 2026-01-26
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

W całym przewodniku używamy pojęć **główny dysk** i **dysk pomocniczy**. W tym kontekście:

- Główny dysk to dysk, którego ESP (EFI System Partition) jest zamontowany przez system Linux.
- Dyski pomocnicze to wszystkie inne dyski w RAID.

## W praktyce

Kiedy zakupisz nowy serwer, możesz poczuć potrzebę wykonania szeregu testów i działań. Jednym z takich testów może być symulacja awarii dysku, aby zrozumieć proces odbudowy RAID.

### Omówienie treści

- [Podstawowe informacje](#basicinformation)
- [Zrozumienie partycji systemu EFI (ESP)](#efisystempartition)
- [Symulowanie awarii dysku](#diskfailure)
    - [Usuwanie uszkodzonego dysku](#removedisk)
- [Odbudowa macierzy RAID (z ESP bez dublowania)](#raidrebuildnonmirrored)
    - [Odbudowanie tablicy RAID po wymianie głównego dysku (trybu Rescue)](#nonmirroredrescuemode)
    - [Odbudowanie partycji systemu EFI](#recreateesp)
    - [Odbudowanie tablicy RAID z niezsynchronizowanymi partycjami ESP po znaczących uaktualnieniach systemu (GRUB)](#efiraidgrub)
    - [Odbudowanie tablicy RAID po wymianie głównego dysku (trybu normalny)](#nonmirrorednormalmode)
- [Odbudowa macierzy RAID (z dublowaniem ESP)](#raidrebuildmirrored)
- [Dodanie etykiety do partycji SWAP (jeśli dotyczy)](#swap-partition)

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

Z wyników wynika, że obecnie skonfigurowano dwa urządzenia RAID oprogramieniowe, **md2** i **md3**, z **md3** będącym większym z nich. **md3** składa się z dwóch partycji, nazywanych **nvme0n1p3** i **nvme1n1p3**. 

[UU] oznacza, że wszystkie dyski działają normalnie. `_` wskazywałby na awaryjny dysk.

W innych przypadkach otrzymasz następujące wyniki:

```sh
Personalities : [raid1]
md3 : active raid1 nvme0n1p3[1] nvme1n1p3[0]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 2/4 pages [8KB], 65536KB chunk

md1 : active raid1 nvme0n1p1[1] nvme1n1p1[0]
      523200 blocks [2/2] [UU]

md2 : active raid1 nvme1n1p2[0] nvme0n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

Wyniki pokazują trzy skonfigurowane urządzenia RAID oprogramieniowe, **md1**, **md2** i **md3**, z **md3** będącym największym z nich. **md3** składa się z dwóch partycji, nazywanych **nvme0n1p3** i **nvme1n1p3**.

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

Ta komenda pokazuje nasze volume RAID, ale nie pokazuje rozmiarów partycji. Możemy znaleźć tę informację używając `fdisk -l`:

/// details | **fdisk -l**

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

Ta komenda może również być używana do zidentyfikowania typu partycji.

Dla partycji **GPT**, linia 6 pokazuje: `Disklabel type: gpt`.
Tę informację można zobaczyć tylko wtedy, gdy serwer działa w normalnym trybie.

Kontynuując wyniki, widzimy, że `/dev/md2` składa się z 1022 MiB, a `/dev/md3` zawiera 474,81 GiB. Jeśli uruchomimy komendę `mount`, możemy również zrozumieć układ dysk.
///

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

Ponadto, jeśli uruchomimy `lsblk -f`, otrzymamy więcej informacji o tych partycjach, takich jak Etykieta i UUID:

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

Zwróć uwagę na urządzenia, partycje i punkty montażu, ponieważ jest to ważne, zwłaszcza po wymianie dysku. Pozwoli to sprawdzić, czy partycje są poprawnie zamontowane w odpowiednich punktach montażu na nowym dysk.

W naszym przykładzie mamy:

- Dwie tablice RAID: `/dev/md2` i `/dev/md3`.
- Partycje należące do RAID: **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2** i **nvme0n1p3** z punktami montażu `/boot` i `/`.
- Partycje nie należące do RAID: **nvme0n1p1**, **nvme0n1p4** i **nvme1n1p4** z punktami montażu `/boot/efi` i [SWAP].
- Jedna partycja nie ma punktu montażu: **nvme1n1p1**.

Partycja **nvme0n1p5** jest partycją konfiguracyjną, czyli tylko do odczytu, połączoną z serwerem, która dostarcza mu początkowe dane konfiguracyjne.

<a name="efisystempartition"></a>

### Zrozumienie partycji systemu EFI (ESP)

/// details | **Rozwiń tę sekcję**

***Co to jest partycja systemu EFI?***

Partycja systemu EFI to partycja, która może zawierać programy uruchamiające system operacyjny, menedżery uruchamiające, lub obrazy jądra. Może również zawierać programy narzędziowe systemowe zaprojektowane do uruchamiania przed uruchomieniem systemu operacyjnego, a także pliki danych, takie jak dzienniki błędów.

***Czy partycja systemu EFI jest zwierciadlona w RAID?***

Od grudnia 2025 tylko następujące wersje systemów operacyjnych zwierciadlują partycję systemu EFI w RAID dla nowych instalacji lub reinstalacji:

* Debian 13
* Proxmox 9
* Ubuntu 25.10
* AlmaLinux i Rocky Linux 10
* Fedora 43

Dla wcześniejszych wersji partycja systemu EFI nie jest zwierciadlona w RAID; tworzone są wiele ESP, po jednym na dysk. Jednak tylko jedno ESP jest zamontowane w danym momencie. ESP jest zamontowane w `/boot/efi`, a dysk, na którym znajduje się, jest wybierany przez system Linux przy uruchamianiu.

Możesz użyć komendy `lsblk`, aby potwierdzić, czy Twoja partycja jest częścią konfiguracji RAID.

> [!tabs]
> **ESP nie jest dublowane**
>>
>> ```sh
>> lsblk
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme0n1     259:0    0 476.9G  0 disk
>> ├─nvme0n1p1 259:6    0   511M  0 part
>> ├─nvme0n1p2 259:7    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme0n1p3 259:8    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> ├─nvme0n1p4 259:9    0   512M  0 part  [SWAP]
>> └─nvme0n1p5 259:10   0     2M  0 part
>> nvme1n1     259:1    0 476.9G  0 disk
>> ├─nvme1n1p1 259:2    0   511M  0 part  /boot/efi
>> ├─nvme1n1p2 259:3    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme1n1p3 259:4    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> └─nvme1n1p4 259:5    0   512M  0 part  [SWAP]
>> ```
>>
>> Z powyższych wyników wynika, że tylko jedna partycja systemowa EFI jest zamontowana w `/boot/efi`. Dlatego też partycje ESP nie jest dublowane.
>>
> **ESP dublowanie**
>>
>> ```sh
>> lsblk
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme0n1     259:0    0 476.9G  0 disk
>> ├─nvme0n1p1 259:1    0   511M  0 part
>> │ └─md1       9:1    0 510.9M  0 raid1 /boot/efi
>> ├─nvme0n1p2 259:2    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme0n1p3 259:3    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> └─nvme0n1p4 259:4    0   512M  0 part  [SWAP]
>> nvme1n1     259:5    0 476.9G  0 disk
>> ├─nvme1n1p1 259:6    0   511M  0 part
>> │ └─md1       9:1    0 510.9M  0 raid1 /boot/efi
>> ├─nvme1n1p2 259:7    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme1n1p3 259:8    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> ├─nvme1n1p4 259:9    0   512M  0 part  [SWAP]
>> └─nvme1n1p5 259:10   0     2M  0 part
>> ```
>>
>> Z powyższych wyników wynika, że obie partycje systemu EFI są zamontowane w katalogu `/boot/efi`. Są one zatem dublowane w macierzy RAID.
>>

***Czy zawartość partycji systemu EFI zmienia się regularnie?***

Zazwyczaj zawartość tej partycji nie zmienia się znacząco, jej zawartość powinna zmieniać się tylko przy aktualizacjach programu uruchamiającego (np. GRUB).

Jednak jeśli Twoja partycja systemu EFI nie jest zwierciadlona, zalecamy uruchamianie skryptu automatycznego lub ręcznego, aby zsynchronizować wszystkie ESP, tak aby zawierały te same aktualne pliki. Dzięki temu, jeśli dysk, na którym znajduje się ta partycja, ulegnie awarii, serwer będzie mógł uruchomić się z ESP jednego z innych dysków.

***Co się stanie, jeśli główny dysk (z zamontowaną partycją systemu EFI) ulegnie awarii?***

Jeśli twój ESP nie jest dublowany, mogą wystąpić następujące problemy:

> [!primary]
> Proszę zauważyć, że choć poniżej omawiamy najczęściej spotykane przypadki, istnieje wiele innych powodów, dla których serwer może nie uruchomić się w normalnym trybie po wymianie dysku.
>

**Przypadek 1** – Nie było żadnych zmian ani dużych aktualizacji (np. GRUB) w systemie operacyjnym.

- Serwer może uruchomić się w normalnym trybie i można kontynuować odbudowę RAID.
- Serwer nie może uruchomić się w normalnym trybie, użyj środowiska trybu rescue, aby odbudować RAID i zrekonfigurować partycję systemu EFI na nowym dysku.

**Przypadek 2** – Były duże aktualizacje systemu (np. GRUB), a partycje ESP są zsynchronizowane.

- Serwer może uruchomić się w normalnym trybie, ponieważ wszystkie ESP są aktualne, a odbudowa RAID może zostać wykonana w normalnym trybie.
- Serwer nie może uruchomić się w normalnym trybie, użyj środowiska trybu rescue, aby odbudować RAID i zrekonfigurować partycję systemu EFI na nowym dysku.

**Przypadek 3** – Były duże aktualizacje systemu (np. GRUB) i partycje ESP nie zostały zsynchronizowane.

- Serwer nie może uruchomić się w normalnym trybie, użyj środowiska trybu rescue, aby odbudować RAID, zrekonfigurować partycję systemu EFI na nowym dysku i zainstalować ponownie program uruchamiający (np. GRUB).
- Serwer może uruchomić się w normalnym trybie (np. gdy system operacyjny został uaktualniony, ale wersja GRUB nie zmieniła się), pozwalając kontynuować odbudowę RAID.

W niektórych przypadkach uruchomienie z nieaktualnego ESP może się nie powieść; np. duża aktualizacja GRUB może sprawić, że binarna wersja GRUB w ESP będzie niekompatybilna z nowszymi modułami GRUB w partycji `/boot`.

***Jak mogę zsynchronizować moje partycje systemu EFI i jak często je synchronizować?***

Jeśli obszar ESP nie jest dublowany, należy rozważyć następujące kwestie:

> [!primary]
> Proszę zauważyć, że w zależności od systemu operacyjnego proces może się różnić. Na przykład Ubuntu może utrzymywać wiele partycji systemu EFI zsynchronizowanych przy każdej aktualizacji GRUB, ale jest to jedyny system operacyjny, który to robi. Zalecamy zapoznanie się z oficjalną dokumentacją swojego systemu operacyjnego, aby zrozumieć, jak zarządzać ESP.
>
> W tym przewodniku używany jest system operacyjny Debian.

Zalecamy regularne synchronizowanie swoich partycji ESP lub po każdej dużej aktualizacji systemu. Domyślnie wszystkie partycje systemu EFI zawierają te same pliki po instalacji. Jednak po dużej aktualizacji systemu synchronizacja partycji ESP jest konieczna, aby zapewnić, że zawartość pozostaje aktualna.

Uruchamianie skryptu to skuteczny sposób na regularne synchronizowanie partycji. Poniżej znajduje się skrypt, który możesz użyć do ręcznego zsynchronizowania swoich partycji ESP. Alternatywnie możesz skonfigurować automatyczny skrypt, który będzie je synchronizować codziennie lub za każdym razem, gdy system się uruchomi.

Przed wykonaniem skryptu upewnij się, że `rsync` jest zainstalowany na Twoim systemie:

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat i Fedora**

```sh
sudo yum install rsync
```

Aby uruchomić skrypt w systemie Linux, potrzebujesz pliku wykonywalnego:

- Zacznij od utworzenia pliku .sh w wybranym katalogu, zastępując `script-name` wybraną przez Ciebie nazwą:

```sh
sudo touch script-name.sh
```

- Otwórz plik za pomocą edytora tekstu i dodaj poniższe linie:

```sh
sudo nano script-name.sh
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

- Ustaw skrypt jako wykonywalny:

```sh
sudo chmod +x script-name.sh
```

- Uruchom skrypt:

```sh
sudo ./script-name.sh
```

- Jeśli nie jesteś w katalogu:

```sh
./path/to/folder/script-name.sh
```

Po wykonaniu skryptu zawartość zamontowanej partycji ESP zostanie zsynchronizowana z innymi. Następnie możesz zamontować każdą niezamontowaną partycję EFI w punkcie montażu: `/var/lib/grub/esp`, aby uzyskać dostęp do jej zawartości.

///

<a name="diskfailure"></a>

### Symulowanie awarii dysku

Teraz, gdy mamy niezbędne informacje, możemy zasymulować awarię dysku. W tym przykładzie zasymulujemy awarię głównego dysku `nvme0n1` (zwróć uwagę, że to dysk z zamontowanym ESP).

Preferowany sposób to wykonanie tej czynności za pomocą środowiska trybu rescue OVHcloud.

Uruchom serwer w trybie ratunkowym i zaloguj się przy użyciu dostarczonych poświadczeń.

Aby usunąć dysk z RAID, najpierw oznacz go jako **Failed** (uszkodzony), a następnie usuń jego partycje z tablic RAID.

**Uwaga**: To tylko ilustracja; dostosuj komendy do swojej konfiguracji.

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

Z powyższego wyniku wynika, że `nvme0n1` składa się z dwóch partycji w RAID, które to **nvme0n1p2** i **nvme0n1p3**.

<a name="removedisk"></a>

#### Usuwanie uszkodzonego dysku

Najpierw oznacz partycje **nvme0n1p2** i **nvme0n1p3** jako zepsute (*Failed*).

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/nvme0n1p2
# mdadm: set /dev/nvme0n1p2 faulty in /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --fail /dev/nvme0n1p3
# mdadm: set /dev/nvme0n1p3 faulty in /dev/md3
```

Następnie uruchom komendę `cat /proc/mdstat`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0](F) nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2](F) nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

Jak widać powyżej, [F] obok partycji wskazuje, że dysk uległ awarii lub jest uszkodzony.

Następnie usuń te partycje z tablic RAID, aby całkowicie usunąć dysk z RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --remove /dev/nvme0n1p2
# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --remove /dev/nvme0n1p3
# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

Stan RAID powinien teraz wyglądać następująco:

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

Teraz w tablicach RAID widoczne są tylko dwie partycje. Pomyślnie zakończyliśmy awarię dysku **nvme0n1**.

Aby uzyskać dysk podobny do pustego, uruchamiamy następujące polecenie na każdej partycji, a następnie na samym dysku:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
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

Aby upewnić się, że dysk został pomyślnie "wyczyszczony":

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

Dodatkowo, jeśli uruchomisz poniższe polecenie, otrzymasz więcej szczegółów dotyczących tablic RAID:

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

Możemy teraz przystąpić do wymiany dysku i odbudowy macierzy RAID.

<a name="raidrebuildnonmirrored"></a>

### Odbudowa macierzy RAID (z ESP bez dublowania)

> [!primary]
> Ten proces może się różnić w zależności od systemu operacyjnego zainstalowanego na Twoim serwerze. Zalecamy, abyś zapoznał się z oficjalną dokumentacją swojego systemu operacyjnego, aby uzyskać dostęp do odpowiednich poleceń.
> 
> Jeśli Twój serwer potrafi uruchomić się w trybie normalnym po wymianie dysku, po prostu wykonaj kroki z [tej sekcji](#nonmirrorednormalmode), jeśli Twoja partycja systemu EFI nie jest zwierciadlona lub [tej sekcji](#raidrebuildmirrored), jeśli Twoja partycja systemu EFI jest zwierciadlona.
>

#### Odbudowanie tablicy RAID po wymianie głównego dysku (trybu Rescue) <a name="nonmirroredrescuemode"></a>

Po wymianie dysku skopiuj tablicę partycji z dysku sprawnego (w tym przykładzie, nvme1n1) na nowy (nvme0n1).

**Dla partycji GPT**

Polecenie powinno mieć następującą postać: `sgdisk -R /dev/nowy dysk /dev/prawidłowy dysk`

Przykład:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Uruchom `lsblk`, aby upewnić się, że tablice partycji zostały poprawnie skopiowane:


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

Następnie wygeneruj GUID nowego dysku, aby uniknąć konfliktów GUID z innymi dyskami:

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

Następnie odbudowujemy tablicę RAID. Poniższy fragment kodu pokazuje, jak dodać nowe partycje (`nvme0n1p2` i `nvme0n1p3`) z powrotem do tablicy RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
# mdadm: added /dev/nvme0n1p2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
# mdadm: re-added /dev/nvme0n1p3
```

Aby sprawdzić postęp odbudowy:

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

Po zakończeniu odbudowy tablicy RAID uruchom poniższe polecenie, aby upewnić się, że partycje zostały poprawnie dodane do tablicy RAID:

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

Na podstawie powyższych wyników, partycje na nowym dysku zostały poprawnie dodane do tablicy RAID. Jednak partycja systemu EFI i partycja SWAP (w niektórych przypadkach) nie zostały zduplikowane, co jest normalne, ponieważ nie są one uwzględniane w tablicy RAID.

> [!warning]
> Powyższe przykłady ilustrują tylko niezbędne kroki na podstawie domyślnej konfiguracji serwera. Informacje w tabeli wyników zależą od sprzętu Twojego serwera i jego schematu partycji. W przypadku wątpliwości skonsultuj dokumentację swojego systemu operacyjnego.
> 
> Jeśli potrzebujesz profesjonalnej pomocy w administracji serwerem, zapoznaj się z sekcją [Sprawdź również](#go-further) tego przewodnika.
>

<a name="recreateesp"></a>

#### Odbudowanie partycji systemu EFI

Aby odbudować partycję systemu EFI na nowym dysku, musimy sformatować **nvme0n1p1** i następnie zrekompilować zawartość sprawnej partycji (w naszym przykładzie: nvme1n1p1) na nią.

Zakładamy, że obie partycje zostały zsynchronizowane i zawierają aktualne pliki.

> [!warning]
> Jeśli miało miejsce znaczące uaktualnienie systemu, takie jak jądro lub GRUB, i obie partycje nie zostały zsynchronizowane, skonsultuj [tą sekcję](#efiraidgrub) po zakończeniu tworzenia nowej partycji systemu EFI.
>

Najpierw sformatuj partycję:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

Następnie nadaj partycji etykietę `EFI_SYSPART` (ta nazwa jest specyficzna dla OVHcloud):

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Następnie skopiuj zawartość nvme1n1p1 do nvme0n1p1.

Zacznij od utworzenia dwóch folderów, nazwanych "old" i "new" w tym przykładzie:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

Zamontuj **nvme1n1p1** w folderze "old" i **nvme0n1p1** w folderze "new", aby rozróżnić je:

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

Po wykonaniu tej czynności odinstaluj obie partycje:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

Następnie zamontuj partycję zawierającą korzeń systemu operacyjnego na `/mnt`. W tym przykładzie jest to partycja **md3**.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

Zamontuj poniższe katalogi, aby upewnić się, że wszystkie zmiany wprowadzone w środowisku `chroot` będą działać poprawnie:

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

Następnie użyj polecenia `chroot`, aby uzyskać dostęp do punktu montażowego i sprawdzić, czy nowa partycja ESP została poprawnie utworzona i czy system rozpoznaje obie partycje ESP:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Aby wyświetlić partycje ESP, uruchom polecenie `blkid -t LABEL=EFI_SYSPART`:

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Wyniki pokazują, że nowa partycja ESP została poprawnie utworzona i etykieta została prawidłowo zastosowana.

Po wykonaniu tej czynności wyjdź z środowiska `chroot`:

```sh
root@rescue12-customer-eu:/# exit
```

Następnie skorzystaj z [tej sekcji](#swap-partition), aby odbudować partycję SWAP (jeśli dotyczy).

#### Odbudowanie tablicy RAID z niezsynchronizowanymi partycjami ESP po znaczących uaktualnieniach systemu (GRUB) <a name="efiraidgrub"></a>

/// details | **Rozwiń tę sekcję**

> [!warning]
> Wykonuj kroki z tej sekcji tylko wtedy, gdy dotyczą one Twojego przypadku.
> 

Jeśli główny dysk zostanie wymieniony, gdy zawiera partycje systemu EFI, które nie zostały zsynchronizowane po znaczących uaktualnieniach systemu, które zmodyfikowały GRUB, uruchomienie systemu z jednego z dysków pomocniczych z przestarzałą partycją ESP może się nie powieść.

W takim przypadku, oprócz odbudowania tablicy RAID i odbudowania partycji systemu EFI w trybie ratunkowym, musisz również ponownie zainstalować GRUB na niej.

Po utworzeniu partycji ESP (jak wyjaśniono powyżej) i gdy system rozpoznaje obie partycje, wciąż w środowisku `chroot`, utwórz katalog `/boot/efi`, aby zamontować nową partycję systemu EFI **nvme0n1p1**:

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

Następnie ponownie zainstaluj bootloader GRUB:

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

Następnie uruchom poniższe polecenie:

```sh
root@rescue12-customer-eu:/# update-grub
```

Po wykonaniu tej czynności wyjdź z środowiska `chroot`:

```sh
root@rescue12-customer-eu:/# exit
```

Następnie skorzystaj z [tej sekcji](#swap-partition), aby odbudować partycję SWAP (jeśli dotyczy).

///


<a name="nonmirrorednormalmode"></a>

#### Odbudowanie tablicy RAID po wymianie głównego dysku (trybu normalny)

/// details | **Rozwiń tę sekcję**

Jeśli Twój serwer potrafi uruchomić się w trybie normalnym po wymianie głównego dysku, wykonaj poniższe kroki, aby odbudować tablicę RAID.

Po wymianie dysku skopiuj tablicę partycji z dysku sprawnego (w tym przykładzie, `nvme1n1`) na nowy dysk (`nvme0n1`).

**Dla partycji GPT**

```sh
sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Polecenie powinno mieć następującą postać: `sgdisk -R /dev/nowy dysk /dev/prawidłowy dysk`

Następnie wygeneruj GUID nowego dysku, aby uniknąć konfliktów GUID z innymi dyskami:

```sh
sudo sgdisk -G /dev/nvme0n1
```

Jeśli otrzymasz poniższy komunikat:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Po prostu uruchom polecenie `partprobe`. Jeśli nadal nie widzisz nowo utworzonych partycji (przez uruchomienie `lsblk`), musisz ponownie uruchomić serwer, zanim przejdziesz dalej.

Następnie dodaj partycje do tablicy RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

[user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

Użyj poniższego polecenia, aby monitorować odbudowę tablicy RAID:

```sh
[user@server_ip ~]# cat /proc/mdstat
```

Po zakończeniu odbudowy odbuduj partycję systemu EFI na nowym dysku.

- Najpierw upewnij się, że zainstalowane są odpowiednie narzędzia:

**Debian i Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

- Sformatuj partycję. W naszym przykładzie `nvme0n1p1`:

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

- Nadaj partycji etykietę `EFI_SYSPART` (ta nazwa jest specyficzna dla OVHcloud):

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Po wykonaniu tej czynności zsynchronizuj obie partycje za pomocą skryptu dostarczonego w tym przewodniku.

- Sprawdź, czy nowa partycja systemu EFI została poprawnie utworzona i system ją rozpoznaje:

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Następnie skorzystaj z [tej sekcji](#swap-partition), aby odbudować partycję SWAP (jeśli dotyczy).

///

<a name="raidrebuildmirrored"></a>

### Odbudowa macierzy RAID (z dublowaniem ESP)


/// details |  **Rozwiń tę sekcję**

> [!tabs]
> **W trybu Rescue**
>>
>> Odbudowanie RAID z lustrowanymi wszystkimi partycjami jest łatwiejsze; po prostu skopiuj dane z dysku sprawnego na nowy dysk i odbuduj partycję [SWAP] (jeśli dotyczy).
>>
>> Na podstawie powyższych ilustracji, status RAID powinien wyglądać tak po awarii dysku:
>> 
>> ```sh
>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>> md3 : active raid1 nvme1n1p3[2] nvme0n1p3[0](F)
>>      497875968 blocks super 1.2 [2/1] [_U]
>>      bitmap: 0/4 pages [0KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[2](F) nvme1n1p1[1]
>>      523200 blocks [2/1] [_U]
>>
>> md2 : active raid1 nvme1n1p2[2] nvme0n1p2[0](F)
>>      1046528 blocks super 1.2 [2/1] [_U]
>>
>> unused devices: <none>
>> ```
>>
>> Po wymianie dysku pierwszym krokiem jest skopiowanie tabeli partycji ze sprawnego dysku (w tym przykładzie, nvme1n1) na nowy (nvme0n1).
>>
>> **Dla partycji GPT**
>>
>> Komenda powinna mieć następującą postać: `sgdisk -R /dev/nowy dysk /dev/prawidłowy dysk`.
>>
>> W naszym przykładzie:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> Uruchom `lsblk`, aby upewnić się, że tabele partycji zostały poprawnie skopiowane:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk
>>
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme1n1     259:0    0 476.9G  0 disk
>> ├─nvme1n1p1 259:1    0   511M  0 part
>> │ └─md1       9:1    0  510.9M 0 raid1
>> ├─nvme1n1p2 259:2    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1
>> ├─nvme1n1p3 259:3    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1
>> └─nvme1n1p4 259:4    0   512M  0 part
>> nvme0n1     259:5    0 476.9G  0 disk
>> ├─nvme0n1p1 259:10   0   511M  0 part
>> ├─nvme0n1p2 259:11   0     1G  0 part
>> ├─nvme0n1p3 259:12   0 474.9G  0 part
>> └─nvme0n1p4 259:13   0   512M  0 part
>> ```
>>
>> Następnie zasymuluj GUID nowego dysku, aby uniknąć konfliktów GUID z innymi dyskami:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
>> ```
>>
>> Jeśli otrzymasz poniższy komunikat:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Po prostu uruchom komendę `partprobe`.
>>
>> Możemy teraz odbudować tablicę RAID. Poniższy fragment kodu pokazuje, jak dodać nowe partycje (nvme0n1p1, nvme0n1p2 i nvme0n1p3) z powrotem do tablicy RAID.
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md1 /dev/nvme0n1p1
>> # mdadm: added /dev/nvme0n1p1
>>
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
>> # mdadm: added /dev/nvme0n1p2
>>
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
>> # mdadm: added /dev/nvme0n1p3
>> ```
>>
>> Aby sprawdzić proces odbudowy:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
>> Personalities : [raid1]
>> md3 : active raid1 nvme0n1p3[2] nvme1n1p3[0]
>>       497875968 blocks super 1.2 [2/1] [U_]
>>       [=========>...........]  recovery = 47.0% (234461184/497875968) finish=21.
>>       bitmap: 4/4 pages [16KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[1] nvme1n1p1[0]
>>      523200 blocks [2/2] [UU]
>>
>> md2 : active raid1 nvme0n1p2[2] nvme1n1p2[0]
>>      1046528 blocks super 1.2 [2/2] [UU]
>> ```
>>
>> Po zakończeniu odbudowy uruchom poniższą komendę, aby upewnić się, że partycje zostały poprawnie dodane do RAID:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
>> NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
>> nvme1n1
>> ├─nvme1n1p1 linux_raid_member 0.90.0                          2043a004-0743-7bc6-37f2-12c43604630c
>> │ └─md1     vfat              FAT16            EFI_SYSPART    D28D-6A4F
>> ├─nvme1n1p2 linux_raid_member 1.2              md2            0772556e-3f45-a551-ab32-c96e502dab22
>> │ └─md2     xfs                                boot           0b22431a-7020-427c-aa31-324feec6ea84
>> ├─nvme1n1p3 linux_raid_member 1.2              md3            071571aa-1b36-9ef7-15b3-190ffdcf3a8b
>> │ └─md3     xfs                                root           3a2cb95b-c142-4d72-835b-52fcce99a0c5
>> ├─nvme1n1p4 swap              1                swap-nvme1n1p4 0d502997-853d-4986-b40a-407d5f187e82
>> └─nvme1n1p5
>> nvme0n1
>> ├─nvme0n1p1 linux_raid_member 0.90.0                          2043a004-0743-7bc6-37f2-12c43604630c
>> │ └─md1     vfat              FAT16            EFI_SYSPART    D28D-6A4F
>> ├─nvme0n1p2 linux_raid_member 1.2              md2            0772556e-3f45-a551-ab32-c96e502dab22
>> │ └─md2     xfs                                boot           0b22431a-7020-427c-aa31-324feec6ea84
>> ├─nvme0n1p3 linux_raid_member 1.2              md3            071571aa-1b36-9ef7-15b3-190ffdcf3a8b
>> │ └─md3     xfs                                root           3a2cb95b-c142-4d72-835b-52fcce99a0c5
>> ├─nvme0n1p4
>> └─nvme0n1p5 iso9660           Joliet Extension config-2       2025-12-16-15-40-00-00
>> ```
>>
>> Po zakończeniu, zapoznaj się z [tą sekcją](#swap-partition), aby odbudować partycję SWAP (jeśli dotyczy).
>>
> **W trybu normalnym**
>>
>> Na podstawie powyższych ilustracji, status RAID powinien wyglądać tak po awarii dysku:
>>
>> ```sh
>> Personalities : [raid1]
>> md3 : active raid1 nvme0n1p3[1](F) nvme1n1p3[0]
>>       497875968 blocks super 1.2 [2/1] [U_]
>>       bitmap: 4/4 pages [16KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[2](F) nvme1n1p1[0]
>>       523200 blocks [2/1] [U_]
>>
>> md2 : active raid1 nvme1n1p2[0] nvme0n1p2[1](F)
>>       1046528 blocks super 1.2 [2/1] [U_]
>> ```
>>
>> Po wymianie dysku skopiuj tabelę partycji z dysku prawidłowy (w tym przykładzie `nvme1n1`) na nowy dysk (`nvme0n1`).
>>
>> **Dla partycji GPT**
>>
>> ```sh
>> sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> Polecenie powinno mieć następujący format: `sgdisk -R /dev/nowy dysk /dev/prawidłowy dysk`.
>>
>> Następnie zasymuluj GUID nowego dysku, aby uniknąć konfliktów GUID z innymi dyskami:
>>
>> ```sh
>> sudo sgdisk -G /dev/nvme0n1
>> ```
>>
>> Jeśli otrzymasz poniższy komunikat:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Po prostu uruchom komendę `partprobe`. Jeśli nadal nie widzisz nowo utworzonych partycji (np. za pomocą `lsblk`), musisz ponownie uruchomić serwer, zanim przejdziesz dalej.
>>
>> Następnie dodaj partycje do RAID:
>>
>> ```sh
>> [user@server_ip ~]# sudo mdadm --add /dev/md1 /dev/nvme0n1p1
>> # mdadm: added /dev/nvme0n1p1
>>
>> [user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2
>> # mdadm: added /dev/nvme0n1p2
>>
>> [user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3
>> # mdadm: added /dev/nvme0n1p3
>> ```
>>
>> Użyj poniższej komendy, aby monitorować odbudowę RAID:
>>
>> ```sh
>> [user@server_ip ~]# cat /proc/mdstat
>> ```
>>
>> Po zakończeniu odbudowy RAID, zapoznaj się z [tą sekcją](#swap-partition), aby odbudować partycję SWAP (jeśli dotyczy).
>>

///

### Dodanie etykiety do partycji SWAP (jeśli dotyczy) <a name="swap-partition"></a>

/// details |  **Rozwiń tę sekcję**

> [!tabs]
> **Użycie trybu Rescue**
>>
>> Poza środowiskiem `chroot`, odbuduj partycję [SWAP] **nvme0n1p4** i dodaj etykietę `swap-nvmenxxx`:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
>> LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
>> ```
>>
>> Sprawdź, czy etykieta została poprawnie zastosowana:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
>> NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
>> nvme1n1
>> ├─nvme1n1p1 vfat              FAT16 EFI_SYSPART    B27E-16D2
>> ├─nvme1n1p2 linux_raid_member 1.2   md2            fb3c5180-526f-56ad-3a0a-3f7961f57684
>> │ └─md2     xfs                     boot           ed3a4730-b3eb-4aa5-a550-dd6cd188c3a4
>> ├─nvme1n1p3 linux_raid_member 1.2   md3            a14af9ed-f791-46e5-4381-224e6d79088c
>> │ └─md3     xfs                     root           5041d916-abb3-4dc8-acdc-baeb3977ce6d  469.6G     1% /mnt
>> └─nvme1n1p4 swap              1     swap-nvme1n1p4 133ca9a3-1bd6-4519-9b5a-01b8ffa55ca4
>> nvme0n1
>> ├─nvme0n1p1 vfat              FAT16 EFI_SYSPART    3557-B372
>> ├─nvme0n1p2 linux_raid_member 1.2   md2            fb3c5180-526f-56ad-3a0a-3f7961f57684
>> │ └─md2     xfs                     boot           ed3a4730-b3eb-4aa5-a550-dd6cd188c3a4
>> ├─nvme0n1p3 linux_raid_member 1.2   md3            a14af9ed-f791-46e5-4381-224e6d79088c
>> │ └─md3     xfs                     root           5041d916-abb3-4dc8-acdc-baeb3977ce6d  469.6G     1% /mnt
>> └─nvme0n1p4 swap              1     swap-nvme0n1p4 dedd4d49-7d40-40c8-b529-41f251a7ff81
>> ```
>>
>> Znów wejdź do środowiska `chroot`:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
>> ```
>>
>> Pobierz UUID obu partycji SWAP:
>>
>> ```sh
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>>
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> Następnie zastąp stary UUID partycji SWAP (**nvme0n1p4**) nowym w pliku `/etc/fstab`:
>>
>>
>> ```sh
>> root@rescue12-customer-eu:/# nano /etc/fstab
>> ```
>>
>> Przykład:
>>
>> ```sh
>> UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
>> UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
>> LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
>> UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
>> UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
>> ```
>>
>> Na podstawie powyższych wyników, stary UUID to `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` i powinien zostać zastąpiony nowym `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Upewnij się, że zastępujesz poprawny UUID.
>>
>> Następnie sprawdź, czy wszystko zostało poprawnie zamontowane za pomocą poniższej komendy:
>>
>> ```sh
>> root@rescue12-customer-eu:/# mount -av
>> /                        : ignored
>> /boot                    : successfully mounted
>> /boot/efi                : successfully mounted
>> swap                     : ignored
>> swap                     : ignored
>> ```
>>
>> Aktywuj partycję SWAP:
>>
>> ```sh
>> root@rescue12-customer-eu:/# swapon -av
>>
>> swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme0n1p4
>> swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme1n1p4
>> ```
>>
>> Wyjdź z środowiska chroot za pomocą `exit` i przeładuj system:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
>> ```
>>
>> Odinstaluj wszystkie dyski:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
>> ```
>>
> **Użycie trybu normalnym**
>>
>> Aby odbudować partycję SWAP, wykonaj poniższe kroki:
>>
>> - Najpierw odbuduj partycję na **nvme0n1p4** i dodaj etykietę **swap-nvme0n1p4**:
>>
>> ```sh
>> [user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> ```
>>
>> - Pobierz UUID obu partycji SWAP:
>>
>> ```sh
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> - Zastąp stary UUID partycji SWAP (**nvme0n1p4**) nowym w pliku `/etc/fstab`:
>>
>> ```sh
>> [user@server_ip ~]# sudo nano /etc/fstab
>> ```
>>
>> Przykład:
>>
>> ```sh
>> [user@server_ip ~]# sudo nano /etc/fstab
>> UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
>> UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
>> LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
>> UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
>> UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
>> ```
>>
>> Na podstawie powyższych wyników, stary UUID to `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` i powinien zostać zastąpiony nowym `b3c9e03a-52f5-4683-81b6-cc10091fcd15`.
>>
>> Upewnij się, że zastępujesz poprawny UUID.
>>
>> Następnie uruchom poniższą komendę, aby aktywować partycję SWAP:
>> 
>> ```sh
>> [user@server_ip ~]# sudo swapon -av
>> swapon: /dev/nvme1n1p4: already active -- ignored
>> swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme0n1p4
>> ```
>>
>> Następnie przeładuj system:
>>
>> ```sh
>> [user@server_ip ~]# sudo systemctl daemon-reload
>> ```
>>
>> Teraz zakończyliśmy odbudowę RAID.
>>

///

<a name="go-further"></a>

## Sprawdź również

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API i Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Zarządzanie hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Dla usług specjalistycznych (SEO, programowanie itp.), skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli potrzebujesz pomocy w użyciu i konfiguracji rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami wsparcia](/links/support).

Jeśli potrzebujesz szkoleń lub pomocy technicznej w wdrożeniu naszych rozwiązań, skontaktuj się ze swoim przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i zapytać ekspertów z Professional Services o pomoc w konkretnym przypadku użycia projektu.

Dołącz do [grona naszych użytkowników](/links/community).
