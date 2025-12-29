---
title: Zarządzanie i odbudowanie oprogramowania RAID na serwerach w trybie rozruchu legacy (BIOS)
excerpt: Dowiedz się, jak zarządzać i odbudować oprogramowanie RAID po wymianie dysku na serwerze w trybie rozruchu legacy (BIOS)
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

Redundantny zbiór niezależnych dysków (RAID) to technologia, która zmniejsza utratę danych na serwerze, replikując dane na dwóch lub więcej dyskach.

Domyślny poziom RAID dla instalacji serwerów OVHcloud to RAID 1, który podwaja przestrzeń zajmowaną przez dane, skutecznie zmniejszając wykorzystywalną przestrzeń dyskową.

**Ta instrukcja wyjaśnia, jak zarządzać i odbudować oprogramowanie RAID w przypadku wymiany dysku na serwerze w trybie rozruchu legacy (BIOS).**

Zanim zaczniemy, zwróć uwagę, że ta instrukcja koncentruje się na Serwerach dedykowanych, które używają trybu rozruchu legacy (BIOS). Jeśli Twój serwer używa trybu UEFI (nowsze płyty główne), odwiedź tę instrukcję [Zarządzanie i odbudowanie oprogramowania RAID na serwerach w trybie rozruchu UEFI](/pages/bare_metal_cloud/dedicated_servers/raid_soft_uefi).

Aby sprawdzić, czy serwer działa w trybie legacy BIOS czy UEFI, uruchom następujące polecenie:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

## Wymagania początkowe

- Serwer [Dedykowany](/links/bare-metal/bare-metal) z konfiguracją oprogramowania RAID
- Dostęp administracyjny (sudo) do serwera przez SSH
- Zrozumienie RAID i partycji

## W praktyce

Kiedy zakupisz nowy serwer, możesz czuć potrzebę wykonania szeregu testów i działań. Jednym z takich testów może być symulacja awarii dysku, aby zrozumieć proces odbudowy RAID i przygotować się na wypadek, gdyby to się kiedykolwiek zdarzyło.

### Omówienie treści

- [Podstawowe informacje](#basicinformation)
- [Symulowanie awarii dysku](#diskfailure)
    - [Usuwanie uszkodzonego dysku](#diskremove)
- [Odbudowanie RAID](#raidrebuild)
    - [Odbudowanie RAID w trybie ratunkowym](#rescuemode)
    - [Dodawanie etykiety do partycji SWAP (jeśli dotyczy)](#swap-partition)
    - [Odbudowanie RAID w trybie normalnym](#normalmode)

<a name="basicinformation"></a>

### Podstawowe informacje

W sesji wiersza poleceń wpisz poniższe polecenie, aby określić bieżący stan RAID:

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 nvme0n1p2[1] nvme0n1p20]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 nvme0n1p4[0] nvme1n1p4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

To polecenie pokazuje nam, że mamy dwa urządzenia RAID oprogramowania obecnie skonfigurowane, z **md4** będącym największym z nich. Urządzenie RAID **md4** składa się z dwóch partycji, które są znane jako **nvme1n1p4** i **nvme0n1p4**. 

[UU] oznacza, że wszystkie dyski działają normalnie. `_` wskazuje na uszkodzony dysk.

Jeśli masz serwer z dyskami SATA, otrzymasz następujące wyniki:

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Choć to polecenie zwraca nasze objętości RAID, nie mówi nam o rozmiarze samych partycji. Te informacje możemy znaleźć za pomocą poniższego polecenia:

```sh
[user@server_ip ~]# sudo fdisk -l

Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F92B6C5B-2518-4B2D-8FF9-A311DED5845F

Device          Start        End    Sectors   Size Type
/dev/sdb1        2048       4095       2048     1M BIOS boot
/dev/sdb2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sdb3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sdb4  1865226240 3907024895 2041798656 973.6G Linux RAID

Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 2E1DCCBA-8808-4D2B-BA33-9FEC3B96ADA8

Device          Start        End    Sectors   Size Type
/dev/sda1        2048       4095       2048     1M BIOS boot
/dev/sda2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sda3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sda4  1865226240 3907024895 2041798656 973.6G Linux RAID
/dev/sda5  3907025072 3907029134       4063     2M Linux filesystem

Disk /dev/md4: 973.5 GiB, 1045265645568 bytes, 2041534464 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk /dev/md2: 888.8 GiB, 954321600512 bytes, 1863909376 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

Polecenie `fdisk -l` pozwala również zidentyfikować typ partycji. Jest to ważna informacja, gdy chodzi o odbudowanie RAID w przypadku awarii dysku.

Dla partycji **GPT**, linia 6 będzie wyświetlać: `Disklabel type: gpt`. Ta informacja może być widoczna tylko, gdy serwer działa w trybie normalnym.

Zgodnie z wynikami `fdisk -l`, możemy stwierdzić, że `/dev/md2` składa się z 888,8 GB, a `/dev/md4` zawiera 973,5 GB.

Alternatywnie, polecenie `lsblk` oferuje inny widok partycji:

```sh
[user@server_ip ~]# lsblk

NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda       8:0    0   1.8T  0 disk
├─sda1    8:1    0     1M  0 part
├─sda2    8:2    0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sda3    8:3    0   512M  0 part  [SWAP]
├─sda4    8:4    0 973.6G  0 part
│ └─md4   9:4    0 973.5G  0 raid1 /home
└─sda5    8:5    0     2M  0 part
sdb       8:16   0   1.8T  0 disk
├─sdb1    8:17   0     1M  0 part
├─sdb2    8:18   0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sdb3    8:19   0   512M  0 part  [SWAP]
└─sdb4    8:20   0 973.6G  0 part
  └─md4   9:4    0 973.5G  0 raid1 /home
```

Zwracamy uwagę na urządzenia, partycje i ich punkty montowania. Z powyższych poleceń i wyników mamy:

- Dwa tablice RAID: `/dev/md2` i `/dev/md4`.
- Cztery partycje należące do RAID z punktami montowania: `/` i `/home`.

<a name="diskfailure"></a>

### Symulowanie awarii dysku

Teraz, gdy mamy wszystkie niezbędne informacje, możemy zasymulować awarię dysku i kontynuować testy. W tym przykładzie zasymulujemy awarię dysku `sda`.

Preferowany sposób to wykonanie tego za pośrednictwem środowiska ratunkowego OVHcloud.

Najpierw uruchom serwer w trybie ratunkowym i zaloguj się przy użyciu dostarczonych poświadczeń.

Aby usunąć dysk z RAID, pierwszym krokiem jest oznaczenie go jako **Failed** i usunięcie partycji z ich odpowiednich tablic RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Z powyższego wyniku wynika, że sda składa się z dwóch partycji w RAID, które to **sda2** i **sda4**.

<a name="diskremove"></a>

#### Usuwanie uszkodzonego dysku

Najpierw oznaczamy partycje **sda2** i **sda4** jako **Failed**. 

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/sda2
# mdadm: set /dev/sda2 faulty in /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md4 --fail /dev/sda4
# mdadm: set /dev/sda4 faulty in /dev/md4
```

Teraz zasymulowaliśmy awarię RAID, a po uruchomieniu polecenia `cat /proc/mdstat` mamy następujące dane wyjściowe:

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat 

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1](F) sdb2[0]
      931954688 blocks super 1.2 [2/2] [_U]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/2] [_U]
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Jak widać powyżej, [F] obok partycji wskazuje, że dysk uległ awarii lub jest uszkodzony.

Następnie usuwamy te partycje z tablic RAID.

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md2 --remove /dev/sda2
# mdadm: hot removed /dev/sda2 from /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md4 --remove /dev/sda4
# mdadm: hot removed /dev/sda4 from /dev/md4
```

Aby upewnić się, że otrzymamy dysk podobny do pustego dysku, używamy poniższego polecenia. Zamień **sda** na swoje własne wartości:

```sh
shred -s10M -n1 /dev/sda1
shred -s10M -n1 /dev/sda2
shred -s10M -n1 /dev/sda3
shred -s10M -n1 /dev/sda4
shred -s10M -n1 /dev/sda
```

Dysk pojawia się teraz jako nowy i "pusty":

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk 
NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda       8:0    0   1.8T  0 disk
sdb       8:16   0   1.8T  0 disk
├─sdb1    8:17   0     1M  0 part
├─sdb2    8:18   0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sdb3    8:19   0   512M  0 part  [SWAP]
└─sdb4    8:20   0 973.6G  0 part
  └─md4   9:4    0 973.5G  0 raid1 /home
```

Jeśli wykonamy następujące polecenie, zobaczymy, że nasz dysk został prawidłowo "wyczyszczony":

```sh
parted /dev/sda
GNU Parted 3.5
Using /dev/sda
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) p
Error: /dev/sda: unrecognised disk label
Model: HGST HUS724020AL (SATA)
Disk /dev/sda: 1.8T
Sector size (logical/physical): 512B/512B
Partition Table: unknown
Disk Flags:
```

Stan naszego RAID powinien teraz wyglądać następująco:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat 

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sdb2[0]
      931954688 blocks super 1.2 [1/2] [_U]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sdb4[1]
      1020767232 blocks super 1.2 [1/2] [_U]
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Powyższe wyniki pokazują, że w macierzy RAID pojawiają się teraz tylko dwie partycje. Dysk **sda** nie powiódł się i możemy teraz wymienić dysk.

Więcej informacji na temat przygotowywania i żądania wymiany dysku można znaleźć w tym [przewodniku](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

Poniższe polecenie pozwala uzyskać więcej szczegółowych informacji na temat macierzy RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md4

/dev/md4:
           Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 16:28:03 2023
             State : clean, degraded
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md4
              UUID : 7b5c1d80:0a7ab4c2:e769b5e5:9c6eaa0f
            Events : 21

    Number   Major   Minor   RaidDevice State
       -       0        0        0      removed
       1       8       20        1      active sync   /dev/sdb4
```

<a name="raidrebuild"></a>

#### Odbudowa macierzy RAID

> [!primary]
> Proces ten może się różnić w zależności od systemu operacyjnego zainstalowanego na serwerze. Zalecamy zapoznanie się z oficjalną dokumentacją systemu operacyjnego, aby uzyskać informacje na temat odpowiednich poleceń.
>

> [!warning]
>
> W przypadku większości serwerów z macierzą RAID oprogramowania po wymianie dysku serwer może uruchomić się w trybie normalnym (na sprawnym dysku) w celu odbudowy macierzy RAID. Jeśli jednak serwer nie uruchomi się w trybie normalnym, zostanie ponownie uruchomiony w trybie ratunkowym w celu odbudowy macierzy RAID.
>

<a name="normalmode"></a>

#### Odbudowa macierzy RAID w trybie normalnym

Poniższe kroki są wykonywane w trybie normalnym. W naszym przykładzie wymieniliśmy dysk **sda**.

Po wymianie dysku musimy skopiować tabelę partycji z dysku sprawnego (w tym przykładzie sdb) na nowy (sda).

> [!tabs]
> **W przypadku partycji GPT**
>>
>> ```sh
>> sudo sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> Polecenie musi mieć następujący format: `sgdisk -R /dev/nowy dysk /dev/zdrowy dysk`.
>>
>> Po wykonaniu tej operacji następnym krokiem jest przypisanie losowego identyfikatora GUID do nowego dysku, aby uniknąć konfliktu z identyfikatorami GUID innych dysków:
>>
>> ```sh
>> sudo sgdisk -G /dev/sdX
>> ```
>>
>> Jeśli pojawi się następujący komunikat:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Możesz po prostu wykonać polecenie `partprobe`. Jeśli nadal nie widzisz nowo utworzonych partycji (na przykład za pomocą `lsblk`), musisz ponownie uruchomić serwer przed kontynuowaniem.
>>
> **W przypadku partycji MBR**
>>
>> ```sh
>> [user@server_ip ~]# sudo sfdisk -d /dev/sdX | sfdisk /dev/sdX
>> ```
>>
>> Polecenie powinno mieć następujący format: `sfdisk -d /dev/zdrowy dysk | sfdisk /dev/nowy dysk`.
>>

Następnie dodajemy partycje do macierzy RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/sda2
# mdadm: added /dev/sda2

[user@server_ip ~]# sudo mdadm --add /dev/md4 /dev/sda4
# mdadm: re-added /dev/sda4
```

Aby monitorować odbudowę RAID, użyj poniższego polecenia:

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[0] sdb2[1]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 4/4 pages [16KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/1] [UU]
      [============>........]  recovery = 64.8% (822969856/1020767232) finish=7.2min speed=401664K/sec
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Na koniec dodajemy etykietę i montujemy partycję [SWAP] (jeśli dotyczy).

Aby dodać etykietę do partycji SWAP:

```sh
[user@server_ip ~]# sudo  mkswap /dev/sda4 -L swap-sda4
```

Następnie pobierz UUID obu partycji SWAP:

```sh
[user@server_ip ~]# sudo blkid -s UUID /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -S UUID /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Zastępujemy stary UUID partycji SWAP (**sda4**) nowym w pliku `/etc/fstab`.

Przykład:

```sh
[user@server_ip ~]# sudo nano etc/fstab

UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=BIOS       /boot       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Na podstawie powyższych wyników, stary UUID to `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` i powinien zostać zastąpiony nowym `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. 

Upewnij się, że zastępujesz poprawny UUID.

Następnie sprawdzamy, czy wszystko zostało poprawnie zamontowane, używając poniższego polecenia:

```sh
[user@server_ip ~]# sudo mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Uruchom poniższe polecenie, aby włączyć partycję SWAP:

```sh
[user@server_ip ~]# sudo swapon -av
```

Następnie przeładuj system poniższym poleceniem:

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```

W ten sposób skończyliśmy pomyślnie odbudowę RAID.

<a name="rescuemode"></a>

/// details | **Odbudowanie RAID w trybie ratunkowym**

Jeśli Twój serwer nie może uruchomić się w trybie normalnym po wymianie dysku, zostanie on uruchomiony w trybie ratunkowym.

W tym przykładzie wymieniamy dysk `sdb`.

Po wymianie dysku musimy skopiować tablicę partycji z dysku sprawnego (w tym przykładzie sda) na nowy (sdb).

> [!tabs]
> **Dla partycji GPT**
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> Polecenie powinno mieć następujący format: `sgdisk -R /dev/nowy dysk /dev/dysk sprawny`
>>
>> Przykład:
>>
>> ```sh
>> sudo sgdisk -R /dev/sdb /dev/sda
>> ```
>>
>> Po wykonaniu tego kroku następnym krokiem jest zrandomizowanie GUID nowego dysku, aby uniknąć konfliktów GUID z innymi dyskami:
>>
>> ```sh
>> sudo sgdisk -G /dev/sdb
>> ```
>>
>> Jeśli otrzymasz następującą wiadomość:
>> 
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Możesz po prostu uruchomić polecenie `partprobe`.
>>
> **Dla partycji MBR**
>>
>> ```sh
>> sudo sfdisk -d /dev/sda | sfdisk /dev/sdb
>> ```
>>
>> Polecenie powinno mieć ten format: `sfdisk -d /dev/healthydisk | sfdisk /dev/newdisk`
>>

Teraz możemy odbudować tablicę RAID. Poniższy fragment kodu pokazuje, jak możemy ponownie dodać nowe partycje (sdb2 i sdb4) do tablicy RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md2 /dev/sdb2
# mdadm: added /dev/sdb2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md4 /dev/sdb4
# mdadm: re-added /dev/sdb4
```

Użyj polecenia `cat /proc/mdstat`, aby monitorować odbudowę RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[0] sdb2[1]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 4/4 pages [16KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/1] [UU]
      [============>........]  recovery = 64.8% (822969856/1020767232) finish=7.2min speed=401664K/sec
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Aby uzyskać więcej szczegółów na temat tablicy RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md4

/dev/md4:
        Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 2
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 17:02:55 2023
             State : clean
    Active Devices : 2
   Working Devices : 2
    Failed Devices : 0
     Spare Devices : 0

 Rebuild Status : 21% complete

           UUID : 7f39d062:9f16a016:a4d2adc2:26fd5302
         Events : 0.95

    Number   Major   Minor   RaidDevice State
       0       8        2        0      active sync    /dev/sda4
       1       8       18        1      spare rebuilding  /dev/sdb4
```

<a name="swap-partition"></a>

#### Dodanie etykiety do partycji SWAP (jeśli dotyczy)

Po zakończeniu odbudowy RAID montujemy partycję zawierającą korzeń naszego systemu operacyjnego na `/mnt`. W naszym przykładzie tą partycją jest `md4`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md4 /mnt
```

Dodajemy etykietę do naszej partycji SWAP za pomocą polecenia:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/sdb4 -L swap-sdb4
mkswap: /dev/sdb4: warning: wiping old swap signature.
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-sdb4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

Następnie montujemy poniższe katalogi, aby upewnić się, że wszystkie operacje w środowisku chroot będą działać poprawnie:

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

Następnie wchodzimy do środowiska `chroot`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Pobieramy UUID obu partycji SWAP:

```sh
root@rescue12-customer-eu:/# blkid -s UUID /dev/sda4
root@rescue12-customer-eu:/# blkid -s UUID /dev/sdb4
```

Przykład:

```sh
blkid /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
blkid /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Następnie zastępujemy stary UUID partycji SWAP (**sdb4**) nowym w pliku `/etc/fstab`:

```sh
root@rescue12-customer-eu:/# nano etc/fstab
```

Przykład:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /home   ext4    defaults       0       0
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Upewnij się, że zastępujesz poprawny UUID. W powyższym przykładzie UUID do zastąpienia to `d6af33cf-fc15-4060-a43c-cb3b5537f58a` nowym `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. 
Upewnij się, że zastępujesz poprawny UUID.

Następnie upewniamy się, że wszystko zostało poprawnie zamontowane:

```sh
root@rescue12-customer-eu:/# mount -av
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Włącz partycję SWAP poniższym poleceniem:

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/sda4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sda4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sda4
swapon: /dev/sdb4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sdb4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sdb4
```

Wyjdź z środowiska `chroot` za pomocą `exit` i przeładuj system:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

Odmontuj wszystkie dyski:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -R /mnt
```
///

W ten sposób pomyślnie zakończyliśmy odbudowę RAID na serwerze i teraz możemy go ponownie uruchomić w trybie normalnym.

## Sprawdź również

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API i Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Zarządzanie hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Dla usług specjalistycznych (SEO, rozwój, itp.), skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli potrzebujesz pomocy w użyciu i konfiguracji rozwiązań OVHcloud, skorzystaj z naszych [ofert wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).