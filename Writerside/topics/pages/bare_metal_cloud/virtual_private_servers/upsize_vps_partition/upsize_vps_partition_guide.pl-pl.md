---
title: Zmiana rozmiaru partycji serwera VPS po zmianie oferty przestrzeni dyskowej
excerpt: "Dowiedz się, jak zwiększyć przestrzeń dyskową po aktualizacji"
updated: 2023-09-05
---

## Wprowadzenie

Po zwiększeniu przestrzeni dyskowej Twojego VPS, musisz ponownie rozdzielić przestrzeń dyskową, aby korzystać z rzeczywistego rozmiaru. Następne etapy opisują sposób postępowania.

> [!warning]
>
> Zmiana rozmiaru partycji skutkuje nieodwracalną utratą danych. OVHcloud nie ponosi odpowiedzialności za ich zniszczenie lub utratę. Przed przystąpieniem do jakichkolwiek czynności należy wykonać odpowiedną kopię zapasową swoich danych. 
>

**Dowiedz się, jak zwiększyć przestrzeń dyskową po zmianie dysku.**

## Wymagania początkowe

- Dostęp administratora do serwera VPS ([Windows](upsize_vps_partition_#windows.)).
- Zrestartowanie serwera w [trybie Rescue](rescue1.) (tylko w systemie Linux).

## W praktyce

Po aktualizacji pamięci (RAM) lub procesora (vCores), te dwa zasoby są automatycznie dostosowywane do potrzeb Twojego serwera VPS, w przeciwieństwie do przestrzeni dyskowej podczas zmiany oferty serwera VPS.

### Linux

#### Tworzenie kopii zapasowej danych

Próba rozszerzenia partycji może spowodować utratę danych. Zalecamy **więc** wykonanie kopii zapasowej danych znajdujących się na serwerze VPS.

#### Włącz tryb ratunkowy i sprawdź partycje

Jeśli serwer VPS nie jest jeszcze w trybie Rescue, włącz go za pomocą [przewodnika](rescue1.).

Następnie możesz sprawdzić konfigurację dysków:

```bash
lsblk
```

Partycja odpowiadająca trybowi Rescue (`sda1` w tym przykładzie) jest zamontowana w katalogu `/` .Dysk VPS ma nazwę `sdb` i nie może mieć punktu montowania.

Przykład:

```console
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 254:0 0 10G 0 disk
└─sda1 254:1 0 10G 0 part /
sdb 254:16 0 25G 0 disk
└─sdb1 254:17 0 25G 0 part
```

Jeśli Twój wynik wygląda podobnie do powyższego przykładu, a kolumna `MOUNTPOINT` jest pusta w odpowiednim wierszu, możesz przejść do [następnego etapu](#checkfs.).

Jeśli jednak Twój wynik wskazuje, że partycja VPS ma punkt montowania, najpierw należy ją odmontować.

Przykład:

```console
sdb 254:16 0 25G 0 disk
└─sdb1 254:17 0 25G 0 part /mnt/sdb1
```

W powyższym przykładzie wyjściowym partycja `sdb1` jest zamontowana w `/mnt/`. Aby można było zmienić rozmiar partycji, nie musi ona być zamontowana.

W celu odmontowania partycji należy użyć następującego polecenia:

```bash
umount /dev/partition_name
```

W tym przykładzie konfiguracji, polecenie to będzie:

```bash
umount /dev/sdb1
```

#### Sprawdzanie systemu plików <a name="checkfs"></a>

Przed kontynuowaniem zaleca się sprawdzenie systemu plików (`filesystem check`) w celu sprawdzenia, czy partycja zawiera błędy. Tu stosuje się poniższe polecenie:

```sh
e2fsck -yf /dev/sdb1
```

```console
e2fsck 1.42.9 (4-Feb-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/sdb1: 37870/1310720 files (0.2% non-contiguous), 313949/5242462 blocks
```

Jeśli stwierdzisz błąd, podejmij działania stosownie do Twojego przypadku. Poniżej podajemy przykłady najczęściej spotykanych błędów:

- `bad magic number in superblock`: nie kontynuuj. Procedura rozwiązania tego problemu została wyjaśniona w części tego przewodnika: [Jak usunąć błędy bad magic number in superblock](upsize_vps_partition#jak-naprawiac-bledy-bad-magic-number-in-superblock.);

- `/dev/vdb1 has unsupported feature(s): metadata_csum` a następnie `e2fsck: Get a newer version of e2fsck!`: aktualizuj e2fsck. Jeśli ostatnia wersja nie jest dostępna za pośrednictwem `apt` (lub innego managera pakietów), skompiluj ją ze źródeł.

Powyższa lista nie jest wyczerpująca.

### Otwieranie aplikacji fdisk

Jeśli weryfikacja systemu plików zakończyła się pomyślnie, otwórz aplikację `fdisk`. Tu jako parametr trzeba będzie podać nazwę dysku, a nie partycji. Jeśli nazwa Twojej partycji to na przykład `sdb1`, wówczas nazwą dysku będzie `/dev/sdb`.

```sh
fdisk -u /dev/sdb
```

> [!primary]
>
> Aplikacja ta dysponuje kilkoma poleceniami podrzędnymi, które możesz wyświetlić za pomocą polecenia `m`.
>

### Kasowanie starej partycji

Przed skasowaniem starej partycji zaleca się zanotowanie wartości liczbowej odpowiadającej pierwszemu sektorowi partycji. Informację tę można uzyskać za pomocą polecenia `p`{.action}. Znajduje się ona w polu `Start`. Zachowaj tę wartość na później.

```console
Command (m for help): p
 
Disk /dev/sdb: 21.5 GB, 21474836480 bytes
54 heads, 49 sectors/track, 15851 cylinders, total 41943040 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x000132ff
 
Device Boot Start End Blocks Id System
/dev/sdb1 * *2048* 41941745 20969849 83 Linux
```

> [!warning]
>
> Kolejny krok jest punktem krytycznym, po jego wykonaniu nie ma możliwości przywrócenia danych, jeżeli nie została wykonana ich kopia.
>

Następnie skasuj partycję za pomocą polecenia `d`{.action}.

```console
Command (m for help): d
Selected partition 1
```

Jedyna partycja zostanie automatycznie skasowana.

### Tworzenie nowej partycji

Teraz należy utworzyć nową partycję za pomocą polecenia `n`{.action}. Zaleca się użycie wartości domyślnych.

```console
Command (m for help): n
Partition type:
p primary (0 primary, 0 extended, 4 free)
e extended
Select (default p): p
Partition number (1-4, default 1): 1
First sector (2048-41943039, default 2048): 2048
Last sector, +sectors or +size{K,M,G} (2048-41943039, default 41943039): 41943039
```

Musisz upewnić się, że wartość domyślna w wierszu `First sector` jest taka sama, jak wartość zanotowana wcześniej. Jeśli jest inna, należy użyć zanotowanej wartości.

### Ustawianie partycji bootowalnej

Teraz należy upewnić się, że partycja jest bootowalna. Możesz to zrobić za pomocą polecenia `a`{.action}.

```console
Command (m for help): a
 
Partition number (1-4): 1
```

Zapisz zmiany i wyjdź z aplikacji za pomocą polecenia `w`{.action} :

```console
Command (m for help): w
 
The partition table has been altered!
 
Calling ioctl() to re-read partition table.
Syncing disks.
```

### Rozszerzanie systemu plików na partycję

Partycja została rozszerzona, ale jej system plików (filesystem) zajmuje wciąż tyle samo miejsca, co wcześniej. W celu jego rozszerzenia wpisz poniższe polecenie:

```sh
resize2fs /dev/sdb1
```

```console
resize2fs 1.42.9 (4-Feb-2014)
Resizing the filesystem on /dev/sdb1 to 5242624 (4k) blocks.
The filesystem on /dev/sdb1 is now 5242624 blocks long.
```

### Sprawdzenie rezultatów

W celu sprawdzenia czy wszystko przebiegło poprawnie, możesz zamontować nowo utworzoną partycję i sprawdzić jej rozmiar.

```sh
mount /dev/sdb1 /mnt
```

```sh
df -h
```

```console
Filesystem Size Used Avail Use% Mounted on
/dev/sda1 991M 793M 132M 86% /
none 4.0K 0 4.0K 0% /sys/fs/cgroup
udev 1.9G 12K 1.9G 1% /dev
tmpfs 386M 360K 386M 1% /run
none 5.0M 0 5.0M 0% /run/lock
none 1.9G 0 1.9G 0% /run/shm
none 100M 0 100M 0% /run/user
/dev/sdb1 50G 842M 48G 2% /mnt
```

Nowy rozmiar partycji znajduje się pod napisem `size`.

### Jak naprawiać błędy bad magic number in superblock

Jeśli polecenie `e2fsck`{.action} zwraca komunikat błędu `bad magic number in superblock`, musisz sprawdzić i naprawić filesystem, posługując się superblokiem backupowym. W celu przejrzenia dostępnych superbloków backupowych wpisz poniższe polecenie:

```sh
dumpe2fs /dev/sdb1 | grep superblock
```

```console
Primary superblock at 0, Group descriptors at 1-6
Backup superblock at 32768, Group descriptors at 32769-32774
Backup superblock at 98304, Group descriptors at 98305-98310
Backup superblock at 163840, Group descriptors at 163841-163846
Backup superblock at 229376, Group descriptors at 229377-229382
Backup superblock at 294912, Group descriptors at 294913-294918
Backup superblock at 819200, Group descriptors at 819201-819206
Backup superblock at 884736, Group descriptors at 884737-884742
Backup superblock at 1605632, Group descriptors at 1605633-1605638
Backup superblock at 2654208, Group descriptors at 2654209-2654214
Backup superblock at 4096000, Group descriptors at 4096001-4096006
Backup superblock at 7962624, Group descriptors at 7962625-7962630
Backup superblock at 11239424, Group descriptors at 11239425-11239430
Backup superblock at 20480000, Group descriptors at 20480001-20480006
Backup superblock at 23887872, Group descriptors at 23887873-23887878
```

Następnie użyj pierwszego superbloku backupowego w celu sprawdzenia i naprawienia filesystemu:

```sh
fsck -b 32768 /dev/sdb1
```

### Windows <a name="windows"></a>

#### Dostęp do File and Storage Services

Możesz znaleźć go w "Server Manager":

![Usługi File and Storage](file-and-storage.png){.thumbnail}

#### Zmień rozmiar wolumenu

Kliknij prawym przyciskiem myszy na C: i wybierz `Rozszerzenie Tom...`{.action}.

Następnie zostaniesz poproszony o wybór nowego rozmiaru wolumenu:

![Set New Volume Size](extend.png){.thumbnail}

Wprowadź żądany rozmiar i kliknij `OK`{.action}. Wolumen zostanie wówczas rozszerzony.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
