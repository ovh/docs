---
title: "Aktywacja i korzystanie z trybu Rescue"
excerpt: "Dowiedz się, jak używać trybu customer rescue OVHcloud do rozwiązywania problemów z serwerem dedykowanym"
updated: 2026-01-09
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

**Z tego przewodnika dowiesz się, jak uruchomić serwer w trybie rescue i korzystać z niego.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal)
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

Aby korzystać z trybu ratunkowego, należy zmienić ustawienie `Netboot` serwera. Następnie należy zrestartować serwer.

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), otwórz sekcję `Bare Metal Cloud`{.action}, a następnie `Serwery dedykowane`{.action}.

Kliknij nazwę serwera, aby otworzyć zakładkę `Informacje ogólne`{.action}.

### Aktywacja trybu Rescue

W polu **Informacje ogólne** kliknij przycisk `...`{.action} obok `Boot`. Kliknij na `Zmień`{.action} w menu kontekstowym.

![Zmień tryb uruchamiania](images/rescue-mode-001.png){.thumbnail}

<a name="netboot"></a>

#### 1: Opcje trybu Rescue

Na stronie **Zmień netboot** wybierz `Uruchom w trybie diagnostycznym (Rescue)`{.action}.

![Zmień tryb uruchamiania](images/rescue-mode-002.png){.thumbnail}

Dostępne opcje trybu ratunkowego zależą od typu serwera i zainstalowanego **systemu operacyjnego**.

- Customer rescue system (zawsze dostępny)
- Windows customer rescue system (dostępny dla serwerów Windows)
- [iPXE](https://ipxe.org) / ipxe-shell (zewnętrzne narzędzie open source, zawsze dostępne)
- [Legacy Windows rescue system](#windows_legacy) (przestarzały system WinPE, istotny tylko wtedy, gdy Twój serwer nie spełnia wymagań bieżącego trybu Rescue dla Windows)

> [!primary]
>
> Poniższe instrukcje dotyczą tylko **customer rescue system**, który jest najczęściej używaną opcją.
>
> Zapoznaj się z [przewodnikiem dotyczącym korzystania z trybu **rescue dla Windows**](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

Z rozwijanego menu wybierz opcję `Customer rescue system`{.action}.

#### 2: Opcje uwierzytelniania

Poniższa opcja określa metodę uwierzytelniania dla połączenia SSH z systemem w trybie rescue. Jest to przede wszystkim kwestia wygody, ponieważ każda sesja w trybie Rescue ma być przejściowa i zostanie usunięta po zrestartowaniu serwera z dysku.

- **Uwierzytelnianie za pomocą hasła** : dane do logowania otrzymasz w e-mailu.
- **Uwierzytelnianie za pomocą klucza**: możesz użyć wybranego klucza publicznego uwierzytelniania (w kompatybilnych formatach: `RSA`, `ECDSA`, `ED25519`).

Kliknij zakładkę odnoszącą się do Twojego sposobu połączenia:

> [!tabs]
> Uwierzytelnianie hasła
>>
>> Kliknij `Uwierzytelnianie hasłem`{.action}.
>>
>>![Auth method](images/rescue-mode-003.png){.thumbnail width="700"}
>>
>> Powiadomienie e-mail dotyczące trybu Rescue oraz dane identyfikacyjne zostaną wysłane na adres e-mail do kontaktu przypisany do Twojego konta OVHcloud. Aby użyć innego adresu e-mail, wpisz go w polu `Wyślij dane do logowania do trybu Rescue na adres e-mail:`.
>>
>> Kliknij na `Dalej`{.action}.
>>
> Uwierzytelnianie klucza
>>
>> Kliknij `Uwierzytelnianie za pomocą klucza SSH`{.action}.
>>
>>![Auth method](images/rescue-mode-004.png){.thumbnail width="700"}
>>
>> Masz dwie możliwości:
>>
>> - Wybierz klucz z wyskakującego menu. Należy posiadać co najmniej jeden [klucz publiczny przechowywany w Panelu klienta OVHcloud](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).
>> - Ręcznie skopiuj ciąg klucza publicznego i wklej go w polu `Twój publiczny klucz SSH`.
>>
>> Więcej informacji na ten temat znajdziesz w naszych przewodnikach:
>>
>> - [Jak tworzyć i używać kluczy do uwierzytelniania SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
>> - [Jak tworzyć i używać kluczy do uwierzytelniania SSH za pomocą PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)
>>
>> > [!success]
>> > Możesz dodać domyślny klucz publiczny dla trybu ratunkowego serwera za pośrednictwem API OVHcloud. Aby uzyskać więcej informacji, zapoznaj się z [sekcją przewodnika poniżej](#rescuessh) for details.
>>
>> Kliknij na `Dalej`{.action}.
>>

#### 3: Ostatnie kroki aktywacji trybu Rescue

W kroku **Podsumowanie** kliknij `Zatwierdź`{.action}.

![Summary](images/rescue-mode-005.png){.thumbnail}

Powinieneś mieć teraz powiadomienie dotyczące parametru `Netboot` w zakładce `Informacje ogólne`{.action}.

![Netboot](images/rescue-mode-006.png){.thumbnail}

Ostatni etap polega na zrestartowaniu serwera. Kliknij przycisk `...`{.action} obok "Status" w obszarze **Status usług**, a następnie kliknij `Restartuj`{.action}. W wyskakującym okienku kliknij przycisk `Zatwierdź`{.action}.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/rebooting-your-server.png){.thumbnail}

Reboot sprzętowy zajmie kilka minut. Możesz sprawdzić aktualny status w zakładce `Zadania`{.action}.

> [!primary]
>
> Po zakończeniu operacji w trybie Rescue pamiętaj, aby przed zrestartowaniem serwera ponownie ustawić parametr `Netboot` na `Booter na dysku twardym`{.action}.

### Dostęp do serwera w trybie Rescue przez SSH

Po otrzymaniu wiadomości e-mail z informacją o aktywacji trybu Rescue możesz zalogować się do systemu trybu Rescue i połączyć się z serwerem.  
E-mail ten będzie również dostępny w Twoim [Panelu klienta OVHcloud](/links/manager) od chwili wysłania. Kliknij nazwę powiązaną z Twoim identyfikatorem klienta na pasku menu w prawym górnym rogu, następnie wybierz `E-maile dotyczące usługi`{.action}.

> [!primary]
>
> Klient SSH normalnie zablokuje logowanie na początku z powodu niezgodności odcisku palca ECDSA. Jest to normalne, ponieważ tryb ratunkowy korzysta z własnego tymczasowego serwera SSH. Aby rozwiązać ten problem, edytuj plik `known_hosts` w Twoim lokalnym katalogu `.ssh`.  
> Masz dwie możliwości:
>
> - **Usuń odcisk palca z pliku.** Klient SSH doda nowy wpis odcisku palca dla serwera, gdy nie będziesz już korzystać z trybu Rescue. Więcej informacji na ten temat znajduje się w części "Login i fingerprint" naszego [przewodnika wprowadzającego do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>
> - **Tymczasowo wyłącz odcisk palca.** Otwórz plik `known_hosts` w edytorze tekstu i zidentyfikuj ciąg odcisku palca Twojego serwera za pomocą adresu IP. Dodaj znak `#` na początku wiersza. Dlatego ten wiersz jest teraz "komentarzem" i zostanie zignorowany przez aplikacje czytające plik. Nie zapomnij anulować tej zmiany przed ponownym uruchomieniem `Netboot` w trybie "normalnym".
>

Kliknij zakładkę wybranej metody połączenia:

> [!tabs]
> Uwierzytelnianie hasła
>>
>> Otwórz aplikację wiersza polecenia na urządzeniu lokalnym i wprowadź następującą komendę:
>>
>> ```bash
>> ssh root@SERVER_IP
>> ```
>>
>> Przykład:
>>
>> ```bash
>> ssh root@203.0.113.100
>> ```
>>
>> Po wyświetleniu monitu wprowadź hasło do tymczasowego trybu ratunkowego.
>>
>> ```console
>> root@ns9356771.ip-203-0-113.eu's password:
>> root@rescue-customer-eu (ns9356771.ip-203-0-113.eu) ~ #
>> ```
>>
>> Więcej informacji na temat połączeń SSH znajdziesz w naszym [przewodniku wprowadzającym do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).  
>> Możesz również użyć dowolnego narzędzia do logowania SSH, takiego jak [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).
>>
> Uwierzytelnianie klucza
>>
>> Otwórz aplikację wiersza polecenia na urządzeniu lokalnym i wprowadź następującą komendę:
>>
>> ```bash
>> ssh -i USER_FOLDER/.ssh/KEY_FILE_NAME root@SERVER_IP
>> ```
>>
>> Przykład:
>>
>> ```bash
>> ssh -i ~/.ssh/MyAuthKey root@203.0.113.100
>> ```
>>
>> Jeśli zostanie wyświetlony monit, wprowadź hasło, aby odszyfrować plik klucza prywatnego.
>>
>> Więcej informacji na ten temat znajdziesz w naszych przewodnikach:
>>
>> - [Jak tworzyć i używać kluczy do uwierzytelniania SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
>> - [Jak tworzyć i używać kluczy do uwierzytelniania SSH za pomocą PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)
>>


### Montowanie partycji w celu uzyskania dostępu do plików

Jeśli nie planujesz skonfigurować dysków serwera w sposób wymagający ich odłączenia (*unmounted*), musisz najpierw **zamontować partycję systemową**, aby uzyskać dostęp do danych z poziomu trybu Rescue.

W pierwszym kroku wyświetl listę wszystkich partycji, aby odnaleźć partycję, którą należy zamontować:

```bash
lsblk
```

Przykłady wyjść:

```console
NAME      MAJ:MIN RM  SIZE RO TYPE  MOUNTPOINT
sda         8:0    0  1.8T  0 disk
├─sda1      8:1    0  511M  0 part
├─sda2      8:2    0  1.8T  0 part
│ └─md127   9:127  0  1.8T  0 raid1
├─sda3      8:3    0  512M  0 part
└─sda4      8:4    0    2M  0 part
sdb         8:16   0  1.8T  0 disk
├─sdb1      8:17   0  511M  0 part
├─sdb2      8:18   0  1.8T  0 part
│ └─md127   9:127  0  1.8T  0 raid1
└─sdb3      8:19   0  512M  0 part
```

```console
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme1n1     259:0    0 894.3G  0 disk
├─nvme1n1p1 259:2    0   511M  0 part
├─nvme1n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:4    0 892.3G  0 part
│ └─md3       9:3    0 892.1G  0 raid1
└─nvme1n1p4 259:5    0   512M  0 part
nvme0n1     259:1    0 894.3G  0 disk
├─nvme0n1p1 259:6    0   511M  0 part
├─nvme0n1p2 259:7    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme0n1p3 259:8    0 892.3G  0 part
│ └─md3       9:3    0 892.1G  0 raid1
├─nvme0n1p4 259:9    0   512M  0 part
└─nvme0n1p5 259:10   0     2M  0 part
```

Następnie zamontuj odpowiednią partycję zgodnie z bieżącymi potrzebami:

```bash
mount /dev/PARTITION_NAME /MOUNT_POINT/
```

Partycja do zamontowania musi być łatwa do zidentyfikowania przez **SIZE** podane w tabeli (`sda2` w pierwszym przykładzie, `nvme1n1p3` w drugim). Jednak w [programowej konfiguracji RAID](/pages/bare_metal_cloud/dedicated_servers/raid_soft) (w przykładach domyślny `raid1`) należy użyć identyfikatora woluminu RAID (`mdX`).  
Używając nazwy katalogu `mnt` jako punktu montowania, dla pierwszego przykładu komenda `mount` będzie wyglądała następująco:

```bash
mount /dev/md127 /mnt/
```

Polecenie, które należy wprowadzić w drugim przykładzie:

```bash
mount /dev/md3 /mnt/
```

> [!warning]
> Powyższe przykłady po prostu ilustrują niezbędne kroki oparte na typowej konfiguracji serwera. Informacje o tablicy wyjściowej zależą od sprzętu serwera i jego schematu partycji. W przypadku wątpliwości zapoznaj się z dokumentacją systemu operacyjnego.
>
> Jeśli potrzebujesz profesjonalnego wsparcia w administrowaniu serwerem, zapoznaj się z sekcją [Sprawdź również](#gofurther) w tym przewodniku.

Aby uzyskać bardziej techniczne informacje o dyskach i partycjach serwera, użyj polecenia:

```bash
fdisk -l
```

Niektóre zadania mogą wymagać odłączenia dysków lub partycji. W tym celu zastosuj polecenie *unmount*:

```bash
umount /mnt
```

### VMware - Zamontowanie datastore

/// details | Rozwiń tę sekcję

Możesz zamontować datastore VMware w taki sam sposób, jak opisano w poprzednim etapie.

Wyświetl listę partycji, aby pobrać nazwę partycji datastore:

```bash
lsblk
```

```bash
fdisk -l
```

Zamontuj partycję za pomocą następującego polecenia, zastępując `sdbX` wartością wskazaną w poprzednim kroku:

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
lsblk
```

```bash
fdisk -l
```

Zamontuj partycję za pomocą następującego polecenia, zastępując `sdbX` wartością wskazaną w poprzednim kroku:

```bash
vmfs6-fuse /dev/sdbX /mnt/datastore/
```

///

Po zakończeniu operacji montowania można uzyskać dostęp do plików i wykonywać zadania rozwiązywania problemów w folderze, który został ustawiony jako punkt montowania. Przykład:

```bash
cd /mnt
```

Niektóre operacje w systemie plików (takie jak konfigurowanie kont użytkowników) będą wymagały dodatkowego kroku. Utwórz tymczasowe środowisko `chroot` w punkcie montowania za pomocą tego polecenia:

```bash
chroot /mnt/
```

Teraz należy móc zastosować wszystkie niezbędne zmiany w systemie, na przykład aby [odzyskać dostęp do serwera](#gofurther).

### Konfiguracja agregacji łączy w trybu rescue

Agregacja łączy (LACP) jest bardzo korzystna, ponieważ pozwala zwiększyć całkowitą przepustowość serwera, zapewniając jednocześnie redundancję sieci w przypadku awarii interfejsu sieciowego.

Chociaż trybu rescue jest oparty na systemie operacyjnym Debian 12, jego konfiguracja sieciowa opiera się na narzędziu `ifupdown`, a nie `Netplan`.

Jeśli posiadasz serwer obsługujący agregację łączy i chcesz skonfigurować ją w trybu rescue, zapoznaj się z [tym przewodnikiem](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).

### Wyjście z trybu rescue

W razie potrzeby powróć do powłoki połączenia trybu ratunkowego, wprowadzając:

```bash
exit
```

W Twoim [Panelu klienta OVHcloud](/links/manager) [zmień tryb uruchamiania](#netboot) ponownie na `Uruchom z dysku twardego`{.action} i zatwierdź.

![Netboot Disk](images/rescue-mode-007.png){.thumbnail}

Możesz teraz zrestartować serwer z powłoki trybu Rescue:

```bash
reboot
```

Możesz również użyć funkcji `Uruchom ponownie`{.action} w Panelu klienta.

<a name="rescuessh"></a>

### Jak dodać domyślny klucz uwierzytelniający dla trybu rescue

/// details | Rozwiń tę sekcję

Aby przyspieszyć proces, możesz dodać do serwera publiczny klucz domyślny umożliwiający dostęp przez SSH w trybie Rescue. Można to zrobić tylko w [API OVHcloud](/pages/manage_and_operate/api/first-steps).

W tym celu w konsoli internetowej API otwórz następujący punkt końcowy API:

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Wprowadź wewnętrzną nazwę serwera (`ns111111.ip-203-0-113.eu`) w odpowiednim polu.

Następnie zmodyfikuj poniższe pole tekstowe w następujący sposób:

```bash
{
  "rescueSshKey": "string"
}
```

Zastąp `string` pełnym ciągiem klucza publicznego.

Wynik powinien wyglądać jak poniżej:

![rescue key example](images/rescue-mode-008.png){.thumbnail}

Po wpisaniu prawidłowych wartości kliknij przycisk `EXECUTE`{.action}.

Pole `Publiczny klucz SSH:` zostanie teraz automatycznie wypełnione tym ciągiem kluczy podczas [zmiany trybu `Netboot`](#netboot).

///

<a name="windows_legacy"></a>

## Legacy Windows rescue system (tryb rescue WinPE)

/// details | Rozwiń tę sekcję

Po otrzymaniu wiadomości e-mail z informacją o aktywacji trybu Rescue możesz zalogować się do systemu trybu Rescue i połączyć się z serwerem.  
E-mail ten będzie również dostępny w Twoim [Panelu klienta OVHcloud](/links/manager) od chwili wysłania. Kliknij nazwę powiązaną z Twoim identyfikatorem klienta na pasku menu w prawym górnym rogu, następnie wybierz `E-maile dotyczące usługi`{.action}.

Aby korzystać z graficznego interfejsu trybu ratunkowego Windows PE, należy pobrać i zainstalować konsolę VNC lub skorzystać z [modułu IPMI](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers) (niedostępnego dla wszystkich modeli serwerów).

![Winrescue Windows](images/rescue-mode-009.png){.thumbnail}

Następujące narzędzia są już zainstalowane w tym trybie:

|Narzędzie|Opis|
|---|---| 
|Mozilla ULight|Przeglądarka internetowa.|
|Memory Diagnostics Tool|Narzędzie systemu Windows do testowania pamięci RAM.|
|Explorer_Q-Dir|Eksplorator plików.|
|GSmartControl|Narzędzie do sprawdzania dysków twardych i twardych SSD.|
|PhotoRec|Narzędzie do odzyskiwania potencjalnie utraconych plików na dysku.|
|SilverSHielD|Serwer SSH2 i SFTP.|
|System Recovery|Narzędzie do przywracania systemu Windows i rozwiązywania problemów.|
|TestDisk|Wydajna aplikacja do odzyskiwania danych. Umożliwia odzyskiwanie i modyfikację uszkodzonych partycji, odnajdowanie zgubionych partycji, naprawę sektora rozruchowego, a nawet odbudowę uszkodzonego MBR.|
|FileZilla|Open source’owy klient FTP. Obsługuje protokoły SSH i SSL oraz posiada intuicyjny interfejs typu "przeciągnij i upuść". Może być używany do przesyłania danych na serwer FTP, na przykład kopii zapasowej FTP dostarczanej z większością modeli serwerów OVHcloud.|
|7-ZIP|Narzędzie do kompresji i archiwizacji plików, które czyta następujące formaty: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR i Z. Pozwala również na tworzenie własnych archiwów w następujących formatach: , GZIP, TAR, WIM, XZ, Z i ZIP.|

///

<a name="gofurther"></a>

## Sprawdź również

[Jak używać trybu ratunkowego dla systemu Windows](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows)

[Jak odzyskać dostęp do serwera w przypadku utraty hasła użytkownika](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[Jak zastąpić klucze uwierzytelniające w przypadku utraty klucza SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Konfiguracja i rekonstrukcja programowej macierzy RAID](/pages/bare_metal_cloud/dedicated_servers/raid_soft)

[Jak diagnozować problemy sprzętowe z serwerami](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

[Jak korzystać z konsoli IPMI na serwerze dedykowanym](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).