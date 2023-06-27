---
title: "Odzyskiwanie baz danych w trybie Rescue"
excerpt: "Dowiedz się, jak uzyskać dostęp do baz danych i zapisać je w trybie rescue"
updated: 2023-04-13
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Tryb Rescue pozwala na stały dostęp do Twoich danych, nawet jeśli system operacyjny serwera lub zainstalowane na nim oprogramowanie przestały działać.

**Dowiedz się, jak uzyskać dostęp do systemu operacyjnego w trybie Rescue i pobrać pliki bazy danych.**

## Wymagania początkowe

- Serwer [dedykowany](https://www.ovhcloud.com/pl/bare-metal/), [VPS](https://www.ovhcloud.com/pl/vps/) lub instancja [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na Twoim koncie OVHcloud (z wyłączeniem systemu Windows)
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)


> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Celem tego tutoriala jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub wdrażaniem usług na serwerze zalecamy skorzystanie z pomocy wyspecjalizowanego [usługodawcy](https://partner.ovhcloud.com/pl/directory/) lub zbliżenie się do [naszej społeczności](https://community.ovh.com/en/).
>


## W praktyce

### Zrestartuj serwer do trybu Rescue

Zapoznaj się z przewodnikiem dotyczącym uruchomienia usługi OVHcloud w trybie rescue:

- [Serwer dedykowany](/pages/cloud/dedicated/rescue_mode)
- [VPS](/pages/cloud/vps/rescue)
- [Instancja Public Cloud](/pages/platform/public-cloud/put_an_instance_in_rescue_mode)

Postępuj zgodnie z instrukcjami zawartymi w [tej sekcji](#pci) dla serwera **VPS** lub instancji **Public Cloud**. Przejdź do następnej [sekcji](#dedicated) dla serwera **dedykowanego**. 

### Dostęp do danych na serwerze VPS lub na instancji Public Cloud <a name="pci"></a>

Najpierw musimy określić punkt montowania, w którym znajduje się `/` system.

W tym celu możesz użyć poleceń `lsblk` i `fdisk -l`.

- Przykład wydania **lsblk**:

```output
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   10G  0 disk
└─sdb1   8:17   0   10G  0 part
```
 
- Przykład wydania **fdisk -l**:

```output
Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x961fcb1c
 
Device     Boot Start      End  Sectors Size Id Type
/dev/sdb1  *     2048 20971486 20969439  10G 83 Linux
 
 
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xaf5119d2
 
Device     Boot Start     End Sectors  Size Id Type
/dev/sda1  *     2048 5117951 5115904  2.5G 83 Linux
```

> [!primary]
>
> Poniższe sekcje kodu podane są jako ilustracja, w odniesieniu do przykładu wyjściowego. Należy dostosować instrukcje do rzeczywistej konfiguracji i zastąpić wartości w poleceniach identyfikatorami dysku i wolumenu.
>

W tym przykładzie dysk główny (10 GB) nazywa się "sdb". Nasze dane in `/` znajdują się zatem na partycji `/dev/sdb`. (podczas gdy "sda" znajduje się w trybie Rescue, a "sda1" - główna partycja w trybie rescue zamontowana na `/`.)

Wstawiamy partycję systemu do katalogu `/mnt`, a następnie sprawdzamy jej zawartość:

```shell-session
root@rescue:~# mount /dev/sdb1 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

Aby uruchomić usługi w systemie z trybu Rescue, zamontuj również te partycje:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/sdb1 on /mnt type ext4 (rw,relatime,data=ordered)
udev on /mnt/dev type devtmpfs (rw,nosuid,relatime,size=990236k,nr_inodes=247559,mode=755)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

Przejdź do sekcji odzyskiwania [bazy danych](#databases).
 
### Dostęp do danych na serwerze dedykowanym (konfiguracja programowa RAID) <a name="dedicated"></a>

Najpierw musimy określić punkt montowania, w którym znajduje się `/` system.

W tym celu możesz użyć poleceń `lsblk` i `fdisk -l`.

Przykład wyjścia:

```shell-session
root@rescue:~# fdisk -l
```
```output
Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 5E158D46-2A45-42C9-8089-697BE070F669
 
Device          Start        End    Sectors    Size Type
/dev/sda1          40       2048       2009 1004.5K BIOS boot
/dev/sda2        4096    1050623    1046528    511M Linux RAID
/dev/sda3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sda4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sda5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 8039EE93-AB98-4EA1-B316-74EE89EF5EB6
 
Device          Start        End    Sectors    Size Type
/dev/sdb1          40       2048       2009 1004.5K BIOS boot
/dev/sdb2        4096    1050623    1046528    511M Linux RAID
/dev/sdb3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sdb4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sdb5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/md4: 1.8 TiB, 1978349322240 bytes, 3863963520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md3: 19.5 GiB, 20970405888 bytes, 40957824 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md2: 511 MiB, 535756800 bytes, 1046400 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

> [!primary]
>
> Poniższe sekcje kodu podane są jako ilustracja, w odniesieniu do przykładu wyjściowego. Należy dostosować instrukcje do rzeczywistej konfiguracji i zastąpić wartości w poleceniach identyfikatorami dysku i wolumenu.
>

W tym przykładzie dane w `/` znajdują się na woluminie `/dev/md`.

Wstawiamy partycję systemu do katalogu `/mnt`, a następnie sprawdzamy jej zawartość:

```shell-session
root@rescue:~# mount /dev/md3 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

Aby uruchomić usługi w systemie z trybu Rescue, zamontuj również te partycje:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/md3 on /mnt type ext4 (rw,relatime,data=ordered)
devtmpfs on /mnt/dev type devtmpfs (rw,relatime,size=16412720k,nr_inodes=4103180,mode=755)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

 
### Odzyskiwanie baz danych <a name="databases"></a>

Po zamontowaniu wszystkich niezbędnych partycji musimy mieć możliwość wykonywania poleceń na samym systemie. W tym celu użyj polecenia `chroot`:

```shell-session
root@rescue:~# chroot /mnt/
root@rescue:/#
```
Teraz wszystkie polecenia, które wprowadzisz, zostaną zastosowane w Twoim systemie zamiast tymczasowego środowiska w trybie Rescue.

Teraz możemy uruchomić usługę `mysql`:

```shell-session
root@rescue:/# service mysql start
[ ok ] Starting MariaDB database server: mysqld ..
root@rescue:/#
```

Użyj komendy `mysqldump`, aby zapisać bazę danych w pliku:

```shell-session
root@rescue:/# mysqldump -u root -p scarif > /home/dump.sql
Enter password:
root@rescue:/#
```

W tym przypadku użytkownikiem `mysql`, który łączy się z bazą danych, jest `root`. Opcja `-p` pozwala na wpisanie hasła dla `root`, a odzyskana baza danych jest nazywana `scarif`.

Plik bazy danych jest następnie zapisywany w katalogu `/home` pod nazwą `dump.sql`.

Możesz również wykonać kopię zapasową wszystkich baz danych jednocześnie:

```shell-session
root@rescue:/# mysqldump -u root -p --all-databases > alldb.sql
Enter password:
root@rescue:/#
```

Lista zawartości `/home` wyświetla dwa pliki bazy danych utworzone w poprzednich komend:

```shell-session
root@rescue:/# ls /home
alldb.sql  dump.sql
```

W przypadku uszkodzonych stołów, polecenie to może być użyte do naprawy:

```shell-session
root@rescue:/# mysqlcheck -u root -p Password_Root_MySQL --auto-repair --optimize --all-databases
```

Z katalogu `/home` możesz teraz przesłać pliki kopii zapasowej na zdalny serwer. W tym przykładzie używamy narzędzia do przesyłania plików `scp`:

```shell-session
root@rescue:/# scp -P SSH_Port_Number dump.sql user@IP_address:/home/backup
```

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
