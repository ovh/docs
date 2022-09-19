---
title: 'Uruchamianie i korzystanie z trybu Rescue'
slug: ovh-rescue
excerpt: 'Dowiedz się, jak uruchomić i korzystać z trybu Rescue na serwerze dedykowanym'
section: 'Diagnostyka i tryb Rescue'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 20-09-2022**

## Wprowadzenie

Tryb Rescue to narzędzie dostępne na serwerze dedykowanym. Umożliwia uruchomienie tymczasowego systemu operacyjnego w celu zdiagnozowania i rozwiązania problemów.

Tryb zapasowy jest zazwyczaj dostosowany do następujących zadań:

- Reset hasła root
- Diagnostyka problemów z siecią
- Naprawa wadliwego systemu operacyjnego
- Naprawa nieprawidłowej konfiguracji zapory sieciowej
- Test wydajności dysków
- Test procesora i pamięci RAM

Tworzenie kopii zapasowych danych musi być pierwszym krokiem w sposobie odzyskiwania danych, jeśli nie posiadasz jeszcze aktualnych kopii zapasowych.

**Dowiedz się, jak aktywować i korzystać z trybu Rescue na Twoim serwerze.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

> [!warning]
> Pamiętaj, że jeśli ustaliłeś domyślny klucz SSH dla produktów dedykowanych, podczas restartu serwera w trybie rescue nie otrzymasz hasła root. W tym przypadku najpierw wyłącz domyślny klucz SSH, zanim uruchomisz serwer w trybie rescue. W tym celu zapraszamy do zapoznania się z [sekcją](../tworzenie-klucze-ssh-dedykowane/#disablesshkey) odpowiedniego przewodnika.
>

Tryb Rescue można włączyć tylko w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Wybierz serwer, przechodząc do części `Bare Metal Cloud`{.action}, a następnie `Serwery dedykowane`{.action}. 

Wyszukaj "Boot" w sekcji **Informacje ogólne** i kliknij `...`{.action} a następnie `Zmień`{.action}.

![Zmień tryb uruchamiania](images/rescue-mode-001.png){.thumbnail}

Na następnym ekranie wybierz **Uruchom w trybie diagnostycznym (Rescue)**. Jeśli Twój serwer posiada system operacyjny Linux, na rozwijanej liście wybierz `rescue-customer`{.action}. Jeśli Twój serwer znajduje się w systemie Windows, wybierz `WinRescue`{.action} (patrz [sekcja przewodnika poniżej](#windowsrescue)). Określ inny adres e-mail, jeśli nie chcesz, aby dane do logowania zostały wysłane na główny adres Twojego konta OVHcloud.

> [!warning]
>
> Na niektóre konta klientów OVHcloud może mieć wpływ błąd dotyczący języka e-maili ratunkowych: są one wysyłane w języku francuskim zamiast wybranego języka konta. Mimo że przyczyna błędu została usunięta 20 września 2022, adres e-mail musi zostać zaktualizowany jeden raz, aby rozwiązać ten problem. Aby to zrobić, przed włączeniem trybu ratunkowego wprowadź w tym kroku adres e-mail konta klienta.
>

Kliknij `Dalej`{.action} i `Zatwierdź`{.action}.

![Tryb rescue-customer](images/rescue-mode-08.png){.thumbnail}

Po zakończeniu modyfikacji kliknij `...`{.action} po prawej stronie "Status" w strefie zatytułowanej **Status usług**.
<br>Kliknij `Restart`{.action}, a serwer zrestartuje się w trybie rescue. Operacja ta może zająć kilka minut.
<br>Możesz sprawdzić postęp w zakładce `Zadania`{.action}. Otrzymasz e-mail z danymi do logowania (w tym hasłem do logowania) użytkownika "root" trybu Rescue.

![Zrestartuj serwer](images/rescue-mode-02.png){.thumbnail}

Po zakończeniu zadań w trybie Rescue pamiętaj o ponownym ustawieniu netbootu na `Uruchom z dysku twardego.`{.action} i zrestartuj serwer.

### Linux

#### Korzystanie z trybu Rescue (SSH)

> [!primary]
> 
> Jeśli używasz klucza SSH (aktywnego również w Panelu klienta OVHcloud), nie otrzymasz hasła. Po uruchomieniu serwera w trybie Rescue możesz połączyć się bezpośrednio z kluczem SSH.
>

Po restarcie serwera otrzymasz e-mail z danymi do połączenia w trybie Rescue. E-mail ten jest również dostępny w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Kliknij nazwę powiązaną z Twoim identyfikatorem klienta w prawym górnym rogu Panelu klienta, a następnie `E-maile od działu wsparcia`{.action}.

Zaloguj się do serwera za pomocą wiersza poleceń lub narzędzia SSH, używając wygenerowanego hasła root dla trybu Rescue.

Przykład:

```bash
ssh root@your_server_IP
root@your_server_password:
```

> [!warning]
> 
> Twój klient SSH prawdopodobnie zablokuje połączenie przede wszystkim ze względu na niekompatybilność odcisku ECDSA. Jest to normalne, ponieważ tryb Rescue korzysta z własnego tymczasowego serwera SSH.
>
> Aby obejść ten problem, możesz skomentować odcisk palca Twojego zwykłego systemu dodając `#` przed jego linią w pliku "known_hosts". Pamiętaj, aby usunąć ten znak przed restartem serwera w trybie normalnym.
>

#### Montowanie partycji

Większość modyfikacji wprowadzonych na Twoim serwerze przez SSH w trybie Rescue wymaga zamontowania partycji. Tryb ten posiada własny system plików tymczasowych. W związku z tym modyfikacje wprowadzane do systemu plików w trybie Rescue zostaną utracone w trakcie restartu serwera w trybie zwykłym.

Partycje montowane są za pomocą komendy `mount` przez SSH. Wyświetl listę partycji, aby odnaleźć tę, którą chcesz zamontować. Możesz użyć przykładowych poleceń:

```bash
rescue-customer:~# fdisk -l

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

```bash
rescue-customer:~# mount /dev/hda1 /mnt/
```

> [!primary]
>
> Twoja partycja zostanie wówczas zamontowana. Możesz wówczas wykonywać operacje na systemie plików.
>
> Jeśli na Twoim serwerze skonfigurowana jest programowa macierz RAID, zamontuj wolumin RAID (zwykle `/dev/mdX`).
>

Aby wyłączyć tryb Rescue, zmień sposób uruchamiania serwera w sekcji `Uruchom z dysku twardego.`{.action} w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i zrestartuj serwer z linii poleceń.

### Montaż datastore

Możesz zamontować datastore VMware w sposób opisany powyżej. Po pierwsze, zainstaluj niezbędny pakiet:

```bash
rescue-customer:~# apt-get update && apt-get install vmfs-tools
```

Następnie przełącz partycje, aby pobrać nazwę partycji datastore:

```bash
rescue-customer:~# fdisk -l
```

Teraz zamontuj partycję za pomocą następującego polecenia, zastępując `sdbX` wartością zidentyfikowaną na poprzednim etapie:

```bash
rescue-customer:~# vmfs-fuse /dev/sdbX /mnt
```

Aby wyłączyć tryb Rescue, zmień sposób uruchamiania serwera w sekcji `Uruchom z dysku twardego.`{.action} w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i zrestartuj serwer z linii poleceń.

### Windows <a name="windowsrescue"></a>

#### Korzystanie z narzędzi WinRescue

Po restarcie serwera otrzymasz e-mail z danymi do połączenia w trybie Rescue. E-mail ten jest również dostępny w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Kliknij nazwę powiązaną z Twoim identyfikatorem klienta w prawym górnym rogu Panelu klienta, a następnie `E-maile od działu wsparcia`{.action}.

Aby korzystać z trybu Rescue oferowanego przez Windows, pobierz i zainstaluj konsolę VNC lub skorzystaj z modułu `IPMI` w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

![WinRescue Windows](images/rescue-mode-07.png){.thumbnail}

W trybie tym zainstalowane są już następujące narzędzia:

|Narzędzie|Opis|
|---|---|
|Mozilla ULight|Przeglądarka internetowa.|
|Memory Diagnostics Tool|Narzędzie Windows do testowania pamięci RAM.|
|Explorer_Q-Dir|Dostęp do plików.|
|GSmartControl|Narzędzie do sprawdzania dysków twardych i dysków twardych SSD.|
|PhotoRec|Narzędzie do odzyskiwania plików, które mogą zostać utracone na dysku.|
|SilverSHielD|Serwer SSH2 i SFTP.|
|System Recovery|System Windows do przywracania i rozwiązywania problemów systemu.|
|TestDisk|Wydajna aplikacja do odzyskiwania danych.  Umożliwia odzyskiwanie i modyfikację uszkodzonych partycji, odnajdowanie zgubionych partycji, naprawę sektora rozruchowego, a nawet odbudowę uszkodzonego MBR. |
|FileZilla|Open source’owy klient FTP  Obsługuje protokoły SSH i SSL, posiada przejrzysty i intuicyjny interfejs typu “przeciągnij i upuść”. Może być używany do przesyłania danych na serwer FTP, na przykład kopii zapasowej FTP dostarczanej z większością modeli serwerów OVHcloud.|
|7-ZIP|Narzędzie do kompresji i archiwizacji plików czytające następujące formaty: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR oraz Z. Umożliwia również tworzenie Twoich własnych archiwów w następujących formatach: BZIP2, GZIP, TAR, WIM, XZ, Z oraz ZIP.|

## Sprawdź również

[Zmiana hasła administratora na serwerze dedykowanym z systemem Windows](../zmiana-hasla-admin-windows/)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
