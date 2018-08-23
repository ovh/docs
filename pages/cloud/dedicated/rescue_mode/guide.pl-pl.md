---
title: 'Uruchamianie i korzystanie z trybu Rescue'
slug: ovh-rescue
excerpt: 'Dowiedz się, jak uruchomić i korzystać z trybu Rescue na serwerze dedykowanym'
section: 'Diagnostyka i tryb Rescue'
---

**Ostatnia aktualizacja z dnia 23-08-2018**

## Wprowadzenie

Tryb Rescue jest narzędziem umożliwiającym uruchamianie serwera przy użyciu tymczasowego systemu operacyjnego w celu zdiagnozowania i rozwiązania występujących problemów. 

**Niniejszy przewodnik wyjaśnia, jak aktywować i korzystać z trybu Rescue na Twoim serwerze dedykowanym.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/nvlAbXNM8Bk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Wymagania początkowe

- Połączenie przez SSH (root) z Twoim [serwerem dedykowanym](https://www.ovh.pl/serwery_dedykowane/){.external}


## W praktyce

Możesz aktywować tryb Rescue po zalogowaniu się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager/){.external}. Wybierz sekcję `Dedykowane`{.action}, a następnie `Serwery dedykowane`{.action} i kliknij w nazwę serwera. Następnie przejdź do zakładki `Stan serwera`{.action} > `Informacje ogólne`{.action} > `Boot`, tu kliknij na `...`{.action}, a następnie kliknij przycisk `Zmień`{.action}, aby zmienić tryb bootowania serwera. 

![Zmiana trybu bootowania serwera](images/rescue-mode-01.png){.thumbnail}

Na następnym ekranie wybierz `Uruchom w trybie Rescue`{.action}. Jeśli Twój serwer posiada system operacyjny Linux, na rozwijanej liście wybierz `rescue64-pro`{.action}. Jeśli posiadasz serwer z systemem Windows, wybierz `WinRescue`{.action}. Aby zakończyć, wpisz adres e-mail w polu tekstowym, a następnie kliknij `Dalej`{.action}.

![Tryb Rescue-Pro](images/rescue-mode-03.png){.thumbnail}

Potwierdź wybrane przez Ciebie opcje na kolejnym ekranie, następnie zrestartuj serwer, aby zmiany stały się efektywne. 

![Zrestartuj serwer](images/rescue-mode-02.png){.thumbnail}

Twój serwer zostanie teraz zrestartowany w trybie Rescue. Po tej operacji otrzymasz hasło dostępowe do serwera na adres e-mail, który wcześniej podałeś. Aby wyłączyć tryb Rescue, zmień sposób uruchamiania serwera w sekcji `Uruchom serwer z dysku twardego`{.action}, następnie zrestartuj serwer. 

### Linux

#### Korzystanie z interfejsu graficznego trybu Rescue

Po zrestartowaniu serwera, otrzymasz e-mail z danymi umożliwiającymi dostęp do serwera w trybie Rescue. Wiadomość e-mail będzie również zawierała link do interfejsu graficznego trybu Rescue, który umożliwi Ci przeprowadzenie następujących testów:

- dyski twarde: sprawdzenie integralności dysków za pomocą testów SMART;
- procesory: sprawdzenie poprawności działania procesorów;
- partycje (stan): sprawdzenie stanu woluminów;
- partycje (system plików): sprawdzenie systemu plików serwera;
- partycje (przeglądanie): uruchomienie przeglądarki w celu przeglądania plików. Narzędzie to nie umożliwia edycji plików, możesz jednak wykonać ich kopię zapasową;
- pamięć: sprawdzenie zainstalowanej pamięci RAM.

![Interfejs graficzny trybu Rescue](images/rescue-mode-04.png){.thumbnail}

#### Korzystanie z SSH (wiersz poleceń) w trybie Rescue


> \[!primary]
> 
> W przypadku gdy korzystasz z klucza SSH (aktywnego również w Panelu klienta) nie zostanie wysłane do Ciebie hasło. Po aktywacji trybu Rescue będziesz mógł zalogować się bezpośrednio za pomocą swojego klucza SSH.
>

Po zrestartowaniu serwera, otrzymasz e-mail z danymi umożliwiającymi dostęp do serwera w trybie Rescue. Połącz się wówczas z serwerem za pomocą zazwyczaj stosowanych wierszy poleceń. Zamiast Twojego hasła użyj jednak hasła root dla trybu Rescue.

Przykład:

```sh
ssh root@IP_Twojego_serwera
Password: haslo_do_Twojego_serwera
```

Większość modyfikacji wprowadzonych na Twoim serwerze za pomocą SSH w trybie Rescue wymaga zamontowania partycji. Tryb Rescue posiada swój własny system plików tymczasowych. W związku z tym modyfikacje wprowadzane do systemu plików w trybie Rescue zostaną utracone w trakcie restartu serwera w trybie zwykłym.

Partycje montowane są za pomocą polecenia `mount` przez SSH. Wyświetl listę partycji, aby odnaleźć tę, którą chcesz zamontować. Możesz użyć przykładowych poleceń:

```sh
rescue:~# fdisk -l

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

Po odnalezieniu partycji, którą chcesz zamontować, zastosuj poniższe polecenie:

```sh
rescue:~# mount /dev/hda1 /mnt/
```

> \[!primary]
>
> Twoja partycja zostanie wówczas zamontowana. Będziesz mógł od tej pory wykonywać operacje w systemie plików.
> 
> Jeśli na Twoim serwerze skonfigurowana jest programowa macierz RAID, zamontuj wolumin RAID (zwykle `/dev/mdX`).
>


### Windows

#### Dostęp do WinRescue

Po zrestartowaniu serwera, otrzymasz e-mail z danymi umożliwiającymi dostęp do serwera w trybie Rescue dla Windows. Aby ich użyć, pobierz i zainstaluj konsolę VNC lub skorzystaj z modułu `IPMI` w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager/){.external}.

![Winrescue Windows](images/rescue-mode-06.png){.thumbnail}

#### Narzędzie WinRescue

|Narzędzia|Opis |
|---|---|
|Freecommander|Manager plików ze wszystkimi standardowymi funkcjonalnościami, których potrzebujesz.|
|NTPWdi|Prosty w użyciu manager haseł. Umożliwia przywrócenie lub modyfikację haseł do kont użytkowników na Twoim serwerze. Narzędzie to jest praktyczne w przypadku utraty danych do logowania lub konieczności przywrócenia konta bezpieczeństwa.|
|FileZilla|Open source’owy klient FTP. Obsługuje protokoły SSH i SSL, posiada przejrzysty i intuicyjny interfejs typu „przeciągnij i upuść”. Może być używany do przesyłania danych na serwer FTP, na przykład kopii zapasowej FTP dostarczanej z większością modeli serwerów OVH.|
|7-ZIP|Narzędzie do kompresji i archiwizacji plików czytające następujące formaty: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR oraz Z. Umożliwia również tworzenie Twoich własnych archiwów w następujących formatach: BZIP2, GZIP, TAR, WIM, XZ, Z oraz ZIP.|
|Avast Virus Cleaner|Aplikacja antywirusowa z funkcjami skanowania i czyszczenia plików.|
|ActivNIC|Narzędzie umożliwiające ponowną aktywację karty interfejsu sieciowego.|
|SRVFirewall|Skrypt aktywujący lub dezaktywujący firewall na Twoim serwerze.|
|SysInternal|Pakiet oprogramowania Microsoft z wieloma narzędziami do utrzymania sieci i zarządzania procesami.|
|Virtual Clone Drive|Narzędzie umożliwiające montowanie plików BIN, CCD oraz ISO w wirtualnym napędzie CD.|
|Firefox|Przeglądarka internetowa.|
|Testdisk|Wydajna aplikacja do odzyskiwania danych. Umożliwia odzyskiwanie i modyfikację uszkodzonych partycji, odnajdowanie zgubionych partycji, naprawę sektora rozruchowego, a nawet odbudowę uszkodzonego MBR.|

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en>.