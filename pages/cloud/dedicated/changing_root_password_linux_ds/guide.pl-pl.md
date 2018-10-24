---
title: 'Zmiana hasła root na serwerze dedykowanym z systemem Linux'
slug: zmiana-hasla-root-na-serwerze-dedykowanym-linux
excerpt: 'Dowiedz się, jak zmienić hasło root na serwerze dedykowanym z systemem Linux'
section: 'Diagnostyka i tryb Rescue'
---

**Ostatnia aktualizacja z dnia 17-10-2018**

## Wprowadzenie

Podczas instalacji lub reinstalacji dystrybucji lub systemu operacyjnego otrzymasz hasło dla użytkownika root. Rekomendujemy jego zmianę zgodnie z instrukcją zawartą w przewodniku [Zabezpieczenie serwera dedykowanego](https://docs.ovh.com/pl/dedicated/porady-zabezpieczanie-serwera-dedykowanego/){.external}. Możesz również zmienić hasło w sytuacji, gdy utraciłeś wcześniejsze.

**Niniejszy przewodnik prezentuje obydwa przypadki i wyjaśnia, jak zmienić hasło root na Twoim serwerze dedykowanym.**


## Wymagania początkowe

* Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external} z zainstalowaną dystrybucją Linux
* Połączenie przez SSH z identyfikatorem root
* Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}


## W praktyce

### Zmiana hasła dla użytkownika root

Jeśli zalogowałeś się przez dostęp root przy użyciu aktualnego hasła i chcesz to hasło zmienić, połącz się z serwerem przez SSH, używając wiersza poleceń i wpisz komendę:

```sh
passwd
```

Następnie wpisz dwa razy nowe hasło, jak pokazano poniżej:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Pamiętaj, że w dystrybucji Linux znaki tworzące Twoje hasło nie będą się wyświetlały w trakcie ich wpisywania.
>

### Zmiana utraconego hasła

#### Etap 1: identyfikacja partycji systemu

Po włączeniu [trybu Rescue](https://docs.ovh.com/pl/dedicated/ovh-rescue/){.external} na Twoim serwerze, zidentyfikuj partycję systemu. Możesz to zrobić przy użyciu polecenia:

```sh
fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

W powyższym przykładzie partycja systemu to `/dev/hda1`. 

> [!primary]
>
> Jeśli na Twoim serwerze skonfigurowana jest programowa macierz RAID, zamontuj wolumin RAID (zwykle `/dev/mdX`). 
>

#### Etap 2: montowanie partycji systemu

Po zidentyfikowaniu partycji systemu możesz ją zamontować przy użyciu polecenia:

```sh
mount /dev/hda1 /mnt/
```

#### Etap 3: modyfikacja partycji root

Edycja partycji systemu jest domyślnie zablokowana. Aby ją odblokować, możesz użyć następującego polecenia:

```sh
chroot /mnt
```

#### Etap 4: zmiana hasła root

Ostatni etap polega na zmianie hasła przy użyciu następującego polecenia:

```sh
passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Po wykonaniu tej czynności, zmień tryb uruchamiania Twojego serwera na `Uruchamianie z dysku twardego`{.action}, po czym zrestartuj serwer. Twoje hasło root zostało zmienione.


## Sprawdź również

[Uruchamianie i korzystanie z trybu Rescue](https://docs.ovh.com/pl/dedicated/ovh-rescue/){.external}

[Zmiana hasła administratora na serwerze dedykowanym z systemem Windows](https://docs.ovh.com/pl/dedicated/zmiana-hasla-admin-windows//){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.