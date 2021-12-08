---
title: 'Aktualizacja zapory sieciowej CISCO ASA'
slug: aktualizacja-firewall-cisco-asa
excerpt: 'Dowiedz się, jak zaktualizować zaporę sieciową CISCO ASA'
section: 'Poziom zaawansowany'
---

> [!primary]
> **End of support for the Bare Metal Cisco ASA Firewall offer**
>
> OVHcloud announces the end of its support for the Bare Metal Cisco ASA Firewall solution. More information is available on [this page](https://docs.ovh.com/gb/en/dedicated/cisco-asa-eol/).
>

**Ostatnia aktualizacja dnia 2018-03-28**

## Wprowadzenie

Aby zapewnić optymalną ochronę systemu, należy regularnie aktualizować zaporę sieciową CISCO Adaptive Security Appliance (ASA), wprowadzając najnowsze łatki. Dzięki temu unikniesz ewentualnych luk w zabezpieczeniach.

**Niniejszy przewodnik wyjaśnia, jak przeprowadzić aktualizację Twoje zapory sieciowej CISCO ASA.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}


## W praktyce

### Wyłączenie ASA w Panelu klienta.

Proces aktualizacji będzie wymagał kilkukrotnego restartu systemu. Dlatego zalecamy wyłączenie ASA, aby podczas aktualizacji nie nastąpiła przerwa w ciągłości pracy serwera.

Aby wyłączyć ASA, przejdź do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} > sekcja `Serwery dedykowane`{.action}. Wybierz serwer dedykowany, a następnie`Firewall Cisco ASA`{.action}. Na koniec kliknij przycisk po prawej stronie`Wyłącz Cisco ASA`{.action}

![Wyłączenie ASA](images/customer_panel_asa_disable.png){.thumbnail}

### Zapisanie konfiguracji

#### Przez ASDM

Zaloguj się do Cisco Adaptive Security Device Manager (ASDM), następnie wybierz `File`{.action} i `Save Running Configuration to Flash`{.action}:

![Zapisanie konfiguracji przez ASDM](images/asa1.jpg){.thumbnail}

#### Przez SSH

Zaloguj się do ASA przez SSH:

```sh
user@desk:~$ ssh adminovh@IP_ASA

adminovh@IP_ASAs password:
Type help or '?' for a list of available commands.

asa12345> en
Password: ********
```

Teraz wprowadź następującą komendę:

```sh
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```


### Kopia zapasowa konfiguracji

Utwórz lokalny plik, na przykład `backupAsa.txt`. Zaloguj się do ASDM i przejdź do `Tools`{.action}, a następnie `Backup Configurations`{.action}.

![Zapisz konfigurację przez ASDM 1](images/asa2.jpg){.thumbnail}

W menu, które się otworzy, wybierz utworzony przez Ciebie plik lokalny (przy użyciu `Browse Local...`{.action}), następnie zapisz konfigurację, klikając `Backup`{.action}.

![Zapisz konfigurację przez ASDM 2](images/asa3.jpg){.thumbnail}


### Restart Cisco ASA

Ten krok jest ważny, ponieważ należy się upewnić, czy firewall ASA działa poprawnie i jest dostępna po ponownym uruchomieniu.

#### Przez ASDM

Zaloguj się do Cisco Adaptive Security Device Manager, następnie wybierz `Tools`{.action} i `System Reload...`{.action}:

![Uruchom ponownie ASA przez ASDM 1](images/asa5.jpg){.thumbnail}

Aby natychmiast ponownie uruchomić usługę, w wyświetlonym oknie wybierz `Reload Start Time` > `Now`{.action} > `Schedule Reload`{.action}.

![Uruchom ponownie ASA przez ASDM 2](images/asa6.jpg){.thumbnail}

![Uruchom ponownie ASA przez ASDM 3](images/asa7.jpg){.thumbnail}


#### Przez SSH

Zaloguj się do ASA przez SSH i wprowadź komendę `reload`:

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

Restart mający na celu ponowne załadowanie konfiguracji zajmie kilka minut.


### Włącz ponownie ASA w Panelu klienta

Podobnie, jak w pierwszym etapie, przejdź do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} > sekcja `Serwery dedykowane`{.action}. Wybierz serwer dedykowany, a następnie`Firewall Cisco ASA`{.action}. Na koniec kliknij przycisk po prawej stronie `Włącz Cisco ASA`{.action}.

![Włączenie ASA](images/customer_panel_asa_enable.png){.thumbnail}


Po restarcie, kiedy ASA jest już włączona, sprawdź, czy działają wszystkie usługi na Twoim serwerze. Jeśli wszystko działa poprawnie, przejdź do następnego etapu. Jeśli natomiast występują problemy, podejmij odpowiednie działania i rozwiąż je, zanim przejdziesz do kolejnych etapów.


### Ponowne wyłączenie ASA w Panelu klienta

Wyłącz ponownie ASA, podobnie jak w etapie pierwszym.

Aby wyłączyć ASA, przejdź do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} > sekcja `Serwery dedykowane`{.action}. Wybierz serwer dedykowany, a następnie kliknij `Firewall Cisco ASA`{.action}. Na koniec kliknij przycisk po prawej stronie `Wyłącz Cisco ASA`{.action}.

![Wyłączenie ASA](images/customer_panel_asa_disable.png){.thumbnail}


### Sprawdzenie aktualnie używanego pliku binarnego

#### Przez ASDM

Zaloguj się do Cisco Adaptive Security Device Manager, następnie przejdź do `Device Information`{.action} i do `General`{.action}. Znajdziesz tam Twoją wersję ASA i ASDM. Zalecamy, abyś zanotował te informacje i zachował je w bezpiecznym miejscu. 

![Sprawdź pliki binarne przez ASDM](images/asa9.jpg){.thumbnail}


#### Przez SSH

Zaloguj się przez SSH i wprowadź następującą komendę:


```sh
asa12345# sh run | i bin

boot system disk0:/asa847-30-k8.bin
asdm image disk0:/asdm-771.bin
```

- *boot system*: wersja ASA
- *asdm image*: wersja ASDM


### Sprawdzanie nowego plik binarny

Pomoże Ci w tym poniższa tabela:

|Aktualna wersja ASA|Pierwsza wersja, do której należy uaktualnić ASA|Wersja docelowa, do której należy uaktualnić ASA|
|---|---|---|
|8.2(x) i wcześniejsze|8.4(6)|9.1(3) i kolejne|
|8.3(x)|8.4(6)|9.1(3) i kolejne|
|8.4(1) do 8.4(4)|8.4(6) lub 9.0(2+)|9.1(3) i kolejne|
|8.4(5+)|Żadna|9.1(3) i kolejne|
|8.5(1)|9.0(2+)|9.1(3) i kolejne|
|8.6(1)|9.0(2+)|9.1(3) i kolejne|
|9.0(1)|9.0(2+)|9.1(3) i kolejne|
|9.0(2+)|Żadna|9.1(3) i kolejne|
|9.1(1)|9.1(2)|9.1(3) i kolejne|
|9.1(2+)|Żadna|9.1(3) i kolejne|
|9.2(x)|Żadna|9.2(2) i kolejne|

Przykładowo, jeśli używasz wersji ASA 8.4 (2), najpierw uaktualnij  system do wersji 8.4 (6), a następnie do wersji 8.4 (7+) lub 9.2+.


Więcej informacji znajdziesz w [dokumentacji Cisco](https://www.cisco.com/c/en/us/td/docs/security/asa/migration/upgrade/upgrade.html){.external}.

> [!primary]
>
> W przypadku zapór sieciowych Cisco ASA z pamięcią 256 MB zalecamy aktualizację jedynie wersji 8.4(x). Wersje 9.1(x) i 9.2(x) będą wykorzystywać całe 256 MB pamięci, bez uwzględnienia działań produkcyjnych.
>

Możesz sprawdzić, którą wersję posiadasz, używając jednej z dwóch wskazanych poniżej metod:

- Przez SSH - wpisz komendę:

```
asa12345# sh ver| i RAM

Hardware: ASA5505, 512 MB RAM, CPU CPU Geode 500 MHz
```

- Przez ASDM: sekcja`Tools`{.action}, a następnie `Command Line Interface...`{.action}:

![Sprawdź wersję pliku binarnego w ASDM 1](images/asa10.jpg){.thumbnail}

![Sprawdź wersję pliku binarnego w ASDM 2](images/asa11.jpg){.thumbnail}


### Usuwanie nieużywanych plików binarnych

Przed dodaniem nowych plików binarnych należy usunąć stare.

#### Przez ASDM
Zaloguj się do Cisco Adaptive Security Device Manager. Przejdź do `Tools`{.action}, po czym do `File Management...`{.action}.

![Usuń nieużywane pliki binarne w ASDM 1](images/asa12.jpg){.thumbnail}

Następnie usuń nieużywane pliki binarne (*.bin*). Na dysku pozostanie wówczas jeden plik dla ASA i jeden dla ASDM. 

![Usuń nieużywane pliki binarne w ASDM 2](images/asa13.jpg){.thumbnail}


#### Przez SSH

Zaloguj się do ASA przez SSH, następnie usuń wybrane wcześniej pliki po ich wylistowaniu:

```sh
asa12345# sh flash: | i bin

128 26995116 Apr 18 2017 23:55:52 asdm-771.bin
144 23016144 Dec 12 2016 14:35:07 asdm-721-150.bin
138 25214976 Nov 18 2017 23:29:54 asa847-30-k8.bin
```

```sh
asa12345# delete flash:asdm-781-150.bin

Delete filename [asdm-721-150.bin]?
Delete disk0:/asdm-721-150.bin? [confirm]
```

### Dodawanie i instalacja plików binarnych ASDM

#### Przez ASDM

Zaloguj się do Cisco Adaptive Security Device Manager. Przejdź do `Tools`{.action}, a następnie kliknij `Upgrade Software from Local Computer...`{.action}.

![Dodaj i zainstaluj pliki binarne ASDM przez ASDM 1](images/asa14.jpg){.thumbnail}

W następnym oknie wybierz:

- *Image to upload*: ASDM;
- *Local File Patch*\: wpisz `Browse Local Files`{.action} i wybierz wersję pliku binarnego ASDM.

Zatwierdź wybór, klikając`Upload Image`{.action}, a następnie `Yes`{.action}. W ten sposób potwierdzisz, że wybrany obraz ma się stać obrazem rozruchowym:

![Dodaj i zainstaluj pliki binarne ASDM przez ASDM 2](images/asa15.jpg){.thumbnail}

![Dodaj i zainstaluj pliki binarne ASDM przez ASDM 3](images/asa16.jpg){.thumbnail}


#### Przez SSH

Plik binarny powinien zostać wcześniej umieszczony na serwerze FTP. Następnie należy skonfigurować ASA przez SSH i zapisać tę konfigurację:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin flash:asdm-781.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asdm-781.bin]?

Destination filename [asdm-781.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asdm-781.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
25025404 bytes copied in 41.690 secs (610375 bytes/sec)
```

```sh
asa12345# conf t

asa12345(config)# asdm image disk0:/asdm-781.bin
asa12345(config)# end

asa12345# write memory
```

### Dodawanie i instalacja nowych plików binarnych

#### Przez ASDM

Zaloguj się do Cisco Adaptive Security Device Manager. Przejdź do `Tools`{.action}, następnie kliknij `Upgrade Software from Local Computer...`{.action}.

![Dodaj i zainstaluj pliki binarne ASA przez ASDM 1](images/asa14.jpg){.thumbnail}

W następnym oknie wybierz:

- *Image to upload*: ASA ;
- *Local File Patch*: wpisz `Browse Local Files`{.action} i wybierz Twoją wersję pliku binarnego ASA.

 
Zatwierdź wybór, klikając`Upload Image`{.action}, a następnie `Yes`{.action}. W ten sposób potwierdzisz, że wybrany obraz ma się stać obrazem rozruchowym:

![Dodaj i zainstaluj pliki binarne ASA przez ASDM 2](images/asa18.jpg){.thumbnail}

![Dodaj i zainstaluj pliki binarne ASA przez ASDM 3](images/asa20.jpg){.thumbnail}


#### Przez SSH

Zaloguj się przez SSH i wprowadź następujące komendy:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin flash:asa-924.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asa-924.bin]?

Destination filename [asa-924.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asa-924.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
28057462 bytes copied in 46.270 secs (609345 bytes/sec)

asa12345# conf t

asa12345(config)# asdm image disk0:/asa-924.bin

asa12345(config)# end

asa12345# write memory
```
 

### Restart ASA

Ten krok jest ważny, ponieważ należy się upewnić, czy ASA działa poprawnie i jest dostępna po ponownym uruchomieniu.

#### Przez ASDM

Zaloguj się do Cisco Adaptive Security Device Manager. Następnie wybierz `Tools`{.action}i`System Reload...`{.action} :

![Uruchom ponownie ASA przez ASDM 1](images/asa5.jpg){.thumbnail}

Aby natychmiast ponownie załadować usługę, w wyświetlonym oknie wybierz `Reload Start Time` > `Now`{.action} > `Schedule Reload`{.action}:

![Uruchom ponownie ASA przez ASDM 2](images/asa6.jpg){.thumbnail}

![Uruchom ponownie ASA przez ASDM 3](images/asa7.jpg){.thumbnail}


#### Przez SSH

Zaloguj się do ASA przez SSH i wprowadź komendę `reload`:

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

Restart mający na celu ponowne załadowanie konfiguracji zajmie kilka minut.

 

> [!warning]
>
> Jeśli na tym etapie nie udaje Ci się dodać pliku binarnego ASA, zrestartuj system, aby zaktualizować ASDM. Następnie usuń nieużywany plik binarny ASDM, aby zwolnić miejsce.
> 
> W następnym kroku zaktualizuj plik binarny ASA, postępując zgodnie z opisaną poniżej procedurą.
>

 

### Korekta konfiguracji

Po zaktualizowaniu wersji ASA starszych niż 8.4.6 po ponownym uruchomieniu systemu wyświetli się nowa konfiguracja:

```sh
asa12345# sh run | i permit-

no arp permit-nonconnected
```


Konfigurację należy skorygować w następujący sposób:

```sh
asa12345# conf t
asa12345(config)# aarp permit-nonconnected
asa12345(config)# end
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```

![Zaktualizowana zapora sieciowa Cisco ASA](images/asa10.jpg){.thumbnail}

![Zaktualizowana zapora sieciowa Cisco ASA](images/asa23.jpg){.thumbnail}



### Ponowne włączacznie ASA w Panelu klienta

Podobnie jak w pierwszym etapie, przejdź do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} > sekcja `Serwery dedykowane`{.action}. Wybierz serwer dedykowany, a następnie kliknij `Firewall Cisco ASA`{.action}. Na koniec kliknij przycisk po prawej stronie `Włącz Cisco ASA`{.action}.

![Włączenie ASA](images/customer_panel_asa_enable.png){.thumbnail}



Zapora sieciowa ASA została zaktualizowana.

![Zaktualizowana zapora sieciowa Cisco ASA](images/asa22.jpg){.thumbnail}



## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com>.