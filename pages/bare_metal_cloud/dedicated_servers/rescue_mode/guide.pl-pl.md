---
title: "Aktywacja i korzystanie z trybu Rescue"
excerpt: "Dowiedz się, jak używać trybu Rescue OVHcloud do rozwiązywania problemów z serwerem dedykowanym"
updated: 2024-05-21
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Tryb Rescue jest dostarczanym przez OVHcloud narzędziem, które pozwala na uruchomienie tymczasowego systemu operacyjnego w celu zdiagnozowania i rozwiązania problemów z serwerem.

Tryb Rescue jest zazwyczaj dostosowany do następujących zadań:

- [Reset hasła użytkownika](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- [Diagnostyka problemów z siecią](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- Naprawa wadliwego systemu operacyjnego
- Naprawa nieprawidłowej konfiguracji zapory sieciowej
- [Test wydajności dysków](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- [Test procesora i pamięci RAM](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

> [!warning]
>
> Pamiętaj o sporządzeniu kopii zapasowej swoich danych, jeśli nie posiadasz jeszcze ostatnich kopii zapasowych.
>
> Jeśli posiadasz usługi produkcyjne na swoim serwerze, tryb Rescue przerywa je, dopóki maszyna nie zostanie zrestartowana w trybie normalnym.
> 

**Niniejszy przewodnik wyjaśnia, jak zrestartować serwer w trybie Rescue i zamontować partycje.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal)
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

Tryb Rescue można włączyć tylko w [Panelu klienta OVHcloud](/links/manager). Wybierz serwer, przechodząc do części `Bare Metal Cloud`{.action}, a następnie `Serwery dedykowane`{.action}. 

Wyszukaj "Boot" w sekcji **Informacje ogólne** i kliknij `...`{.action} a następnie `Zmień`{.action}.

![Zmień tryb uruchamiania](images/rescue-mode-001.png){.thumbnail}

Na następnym ekranie wybierz **Uruchom w trybie diagnostycznym (Rescue)**.

## Rescue Linux

Jeśli Twój serwer posiada system operacyjny Linux, z menu rozwijanego wybierz `rescue-customer`{.action}.

W tej sytuacji dostępne są dwa tryby uwierzytelniania:

- Uwierzytelnienie za pomocą hasła
- Uwierzytelnianie za pomocą klucza SSH

### Uwierzytelnianie za pomocą klucza SSH

> [!primary]
>
> Jeśli wybierzesz uwierzytelnianie za pomocą klucza SSH, upewnij się, że Twój publiczny klucz SSH spełnia jeden z formatów spośród `RSA`, `ECDSA` lub ``.
>

Wybierz opcję "Uwierzytelnianie za pomocą klucza SSH", a następnie wpisz swój klucz SSH **publiczny** w dedykowanym polu tekstowym.

![Uwierzytelnianie za pomocą klucza SSH](images/rescue-mode-08.png){.thumbnail}

### Uwierzytelnianie za pomocą hasła

Wybierz opcję "Uwierzytelnienie za pomocą hasła".<br>
Dane do logowania będą domyślnie wysyłane na główny adres e-mail Twojego konta OVHcloud. W polu `Wyślij dane do logowania do trybu Rescue na adres e-mail` możesz wpisać inny adres.

![Uwierzytelnianie za pomocą hasła do systemu Linux](images/rescue-mode-09.png){.thumbnail}

### Rescue Windows

W przypadku serwerów z systemem operacyjnym Windows zapoznaj się z [przewodnikiem dedykowanym](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

Opcja `WinRescue`{.action} może być również zaproponowana w zależności od serwera. Aby uzyskać więcej informacji na temat tego trybu, zapoznaj się z [sekcją przewodnika poniżej](#windowsrescue)). W przypadku tego typu trybu Rescue dostępne jest wyłącznie uwierzytelnianie za pomocą hasła.

Jeśli nie chcesz, aby dane do logowania były wysyłane na główny adres Twojego konta OVHcloud, **nie**, określ inny adres e-mail.

![Uwierzytelnianie za pomocą hasła systemu Windows](images/rescue-mode-10.png){.thumbnail}

### Ostatnie kroki

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

Po restarcie serwera otrzymasz e-mail z danymi do połączenia w trybie Rescue. E-mail ten jest również dostępny w [Panelu klienta OVHcloud](/links/manager). Kliknij nazwę powiązaną z Twoim identyfikatorem klienta w prawym górnym rogu Panelu klienta, a następnie `E-maile od działu wsparcia`{.action}.

Zaloguj się do serwera za pomocą wiersza poleceń lub narzędzia [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), używając wygenerowanego hasła root dla trybu Rescue.

Przykład:

```bash
ssh root@ns3956771.ip-169-254-10.eu
root@ns3956771.ip-169-254-10.eu's password:
```

> [!warning]
>
> Klient SSH prawdopodobnie zablokuje połączenie w pierwszej kolejności z powodu niezgodności odcisku palca ECDSA. Jest to normalne, ponieważ tryb ratunkowy korzysta z własnego tymczasowego serwera SSH.
>
> Jednym ze sposobów na ominięcie tego problemu jest "komentowanie" znaku firmowego Twojego serwera poprzez dodanie znaku `#` przed jego linią w pliku `known_hosts`. Nie zapomnij anulować tej zmiany przed przywróceniem netbootu do trybu "normalnego".<br>Możesz również usunąć wiersz z pliku. Po ponownym zalogowaniu się klient SSH doda nowy wpis linii papilarnych do serwera. Jeśli potrzebujesz bardziej szczegółowych instrukcji, zapoznaj się z naszym przewodnikiem "[Wprowadzenie do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction#login)".
>

#### Montowanie partycji

Jeśli dyski serwera nie zostaną skonfigurowane w sposób wymagający odłączenia (*unmounted*), należy najpierw zamontować partycję systemu.

Partycje montowane są za pomocą komendy `mount` przez SSH. Wyświetl listę partycji, aby odnaleźć tę, którą chcesz zamontować. Możesz użyć przykładowych poleceń:

```bash
fdisk -l
```

```console
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
mount /dev/hda1 /mnt/
```

> [!primary]
>
> Twoja partycja zostanie wówczas zamontowana. Możesz wówczas wykonywać operacje na systemie plików.
>
> Jeśli na Twoim serwerze skonfigurowana jest programowa macierz RAID, zamontuj wolumin RAID (zwykle `/dev/mdX`).
>

Aby wyłączyć tryb Rescue, zmień sposób uruchamiania serwera w sekcji `Uruchom z dysku twardego.`{.action} w [Panelu klienta OVHcloud](/links/manager) i zrestartuj serwer z linii poleceń.

#### VMware - Montaż datastore

Możesz zamontować datastore VMware w taki sam sposób, jak opisano w poprzednim etapie.

Wyświetl listę partycji, aby pobrać nazwę partycji datastore:

```bash
fdisk -l
```

Zamontuj partycję za pomocą następującego polecenia, zastępując `sdbX` wartością zidentyfikowaną w poprzednim kroku:

```bash
vmfs-fuse /dev/sdbX /mnt
```

Jeśli posiadasz datastores `VMFS 6`, przejdź do folderu `sbin` i utwórz folder montowania:

```bash
cd /usr/local/sbin/
mkdir /mnt/datastore
```

Wyświetl listę partycji, aby pobrać nazwę partycji datastore:

```bash
fdisk -l
```

Zamontuj partycję za pomocą następującego polecenia, zastępując `sdbX` wartością zidentyfikowaną w poprzednim kroku:

```bash
vmfs6-fuse /dev/sdbX /mnt/datastore/
```

Aby wyłączyć tryb Rescue, zmień sposób uruchamiania serwera w sekcji `Uruchom z dysku twardego.`{.action} w [Panelu klienta OVHcloud](/links/manager) i zrestartuj serwer z linii poleceń.

### Windows <a name="windowsrescue"></a>

W przypadku serwerów z systemem operacyjnym Windows zapoznaj się z [przewodnikiem dedykowanym](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

#### Korzystanie z narzędzi WinRescue (przestarzały)

Po restarcie serwera otrzymasz e-mail z danymi do połączenia w trybie Rescue. E-mail ten jest również dostępny w [Panelu klienta OVHcloud](/links/manager). Kliknij nazwę powiązaną z Twoim identyfikatorem klienta w prawym górnym rogu Panelu klienta, a następnie `E-maile od działu wsparcia`{.action}.

Aby korzystać z trybu Rescue oferowanego przez Windows, pobierz i zainstaluj konsolę VNC lub skorzystaj z modułu `IPMI` w [Panelu klienta OVHcloud](/links/manager){.external}.

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

[Zmiana hasła administratora na serwerze dedykowanym z systemem Windows](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
