---
title: 'Wymiana uszkodzonego dysku'
slug: wymiana-dysku
excerpt: 'Dowiedz się, jak zidentyfikować uszkodzony dysk i zlecić jego wymianę'
section: 'RAID & dyski'
---

**Ostatnia aktualizacja dnia 01/06/2018**

## Wprowadzenie

W przypadku gdy stwierdzisz awarię dysku lub gdy otrzymasz wiadomość e-mail o awarii wysłaną przez nasz system, podejmij odpowiednie kroki, aby jak najszybciej został on wymieniony. 

**Niniejszy przewodnik wyjaśnia, jak zidentyfikować uszkodzony dysk oraz jak zlecić jego wymianę zespołowi OVHcloud.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVHcloud nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
> 


## Wymagania początkowe

- Połączenie przez SSH z Twoim [serwerem dedykowanym](https://www.ovh.pl/serwery_dedykowane/all_servers.xml){.external} z dostępem *root* (Linux).


## W praktyce

### Tworzenie kopii zapasowej danych

Przed podjęciem jakichkolwiek czynności **wykonaj koniecznie kopię zapasową Twoich danych**. Zadaniem RAID, z wyjątkiem RAID 0, jest ochrona Twoich danych przed utratą w przypadku uszkodzenia dysków. Gdy jeden z dysków jest niezdatny do użytku, możliwość dostępu do Twoich danych zależy od stanu drugiego dysku lub pozostałych dysków.

Rzadko się zdarza, aby wszystkie dyski były uszkodzone, jednak sytuacja taka nie jest wykluczona. 
Dysk w żadnym przypadku nie zostanie wymieniony, jeśli klient:

-	nie potwierdzi, że wykonał kopię zapasową danych;
-	nie potwierdzi, że akceptuje ich potencjalną utratę związaną z wymianą dysku.


### Wykrywanie uszkodzenia dysku

Natychmiast po otrzymaniu wiadomości e-mail zawierającej alert o uszkodzeniu dysku lub po stwierdzeniu uszkodzenia we własnym zakresie, należy sprawdzić stan wszystkich dysków. Jeśli dwa dyski należące do tej samej macierzy RAID są uszkodzone, zespół OVHcloud w pierwszej kolejności wymieni dysk z większą liczbą błędów.

#### Serwer z programową macierzą RAID 

Jeśli posiadasz serwer z programową macierzą RAID, zapoznaj się z przewodnikiem [“Software RAID”](https://docs.ovh.com/pl/dedicated/raid-soft/){.external}, aby odnaleźć dyski zainstalowane na Twoim serwerze.

Po znalezieniu ścieżki dostępu do Twoich dysków możesz przeprowadzić test, używając komendy `smartctl` w następujący sposób:

```sh
smartctl -a /dev/sdX
```

> [!primary]
>
> Pamiętaj, aby zastąpić `/dev/sdX` ścieżką dostępu do Twojego dysku. sdA, sdB, etc. to oznaczenia odpowiednich dysków.
> 

Czynność ta pozwoli Ci również uzyskać numer serii (*Serial Number*) dysku lub dysków do wymiany. Numer ten należy podać technikowi OVHcloud. 

Oto przykład zwróconego wyniku:

```sh
smartctl -a /dev/sda

>>> smartctl 5.41 2011-06-09 r3365 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)                                                                                          
>>> Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net

>>> === START OF INFORMATION SECTION ===
>>> Device Model:     TOSHIBA DT01ACA050
>>> Serial Number:    5329T58NS
>>> LU WWN Device Id: 5 000039 ff6d28993
>>> Firmware Version: MS1OA750
>>> User Capacity:    500 107 862 016 bytes [500 GB]
>>> Sector Sizes:     512 bytes logical, 4096 bytes physical
>>> Device is:        Not in smartctl database [for details use: -P showall]
>>> ATA Version is:   8
>>> ATA Standard is:  ATA-8-ACS revision 4
>>> Local Time is:    Thu Nov 24 15:51:25 2016 CET
>>> SMART support is: Available - device has SMART capability.
>>> SMART support is: Enabled
```

W tym przypadku istotny będzie następujący wiersz:

**`Serial Number:    5329T58N`**

#### Serwer ze sprzętową macierzą RAID

Jeśli posiadasz serwer ze sprzętową macierzą RAID, zapoznaj się z przewodnikiem [“Hardware RAID” - EN](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} i zastosuj procedurę dotyczącą Twojego typu kontrolera RAID, aby odnaleźć ścieżki dostępu do Twoich dysków.

Po znalezieniu ścieżki dostępu do Twoich dysków możesz przeprowadzić test, używając komendy `smartctl` w następujący sposób:

```sh
smartctl -d megaraid,N -a /dev/sdX
```

> [!primary]
>
> Pamiętaj, aby zastąpić /dev/sdX ścieżką dostępu do Twojego dysku. sdA, sdB, etc. to oznaczenia odpowiednich dysków.
> 


> [!warning]
>
> W niektórych przypadkach możesz otrzymać następujący komunikat: `/dev/sda [megaraid_disk_00][SAT]: Device open changed type from 'megaraid' to 'sat'`.
> 
> Należy wówczas zastąpić `megaraid` wpisem `sat+megaraid`: `smartctl -d sat+megaraid,N -a /dev/sdX`.
> 

W przypadku karty Raid LSI możesz przeprowadzić test dysków, wprowadzając komendę `smartctl` w następujący sposób:

```sh
smartctl -a /dev/sgY
```

Należy podać numer RAID (/dev/sg0 = 1er RAID, /dev/sg1 = 2e RAID, etc.)


#### Serwer z dyskiem NVMe

W przypadku dysku NVMe konieczne jest uruchomienie serwera w trybie [Rescue-pro](https://docs.ovh.com/pl/dedicated/ovh-rescue/). Narzędzie **nvme-cli** jest zainstalowane na serwerze domyślnie.

Należy wówczas wprowadzić komendę `nvme list`, aby uzyskać numery serii dysków: 

```sh
root@rescue:~# nvme list
>>> Node           SN                  Model                 Namespace Usage                     Format        FW Rev
>>> -------------- ------------------- --------------------- --------- ------------------------- ------------- --------
>>> /dev/nvme0n1   CVPF636600YC450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
>>> /dev/nvme1n1   CVPF6333002Y450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
```


### Zlecenie wymiany dysku

#### Wymiana dysku z wyłączeniem serwera

Aby zlecić wymianę dysku, należy utworzyć zgłoszenie (ticket) w [Panelu klienta](https://www.ovh.com/manager/dedicated/index.html#/ticket){.external} i wysłać je do pomocy technicznej OVHcloud. Aby przyspieszyć proces, podaj informacje uzyskane w wyniku testu. Poniżej lista potrzebnych danych:

- **numer serii dysku do wymiany oraz dysków, które są sprawne**. Aby dowiedzieć się, jak uzyskać numer serii dysku zapoznaj się z [tym przewodnikiem](https://docs.ovh.com/pl/dedicated/ustalenie-numeru-seryjnego-dysku/). Jeśli z jakiejś przyczyny uzyskanie numeru serii dysku do wymiany jest niemożliwe, poinformuj o tym w zgłoszeniu i podaj numery serii sprawnych dysków. 

Jak zostało zasygnalizowane wcześniej, istotne są numery wszystkich dysków. Zostaną one przekazane technikowi w centrum danych, co pozwoli mu uniknąć błędu podczas przeprowadzania operacji.

- **Data i godzina rozpoczęcia interwencji**. Interwencja może być przeprowadzona w dowolnym momencie 24/7. Na czas interwencji należy przewidzieć krótką przerwę w dostępności usługi;

- **Potwierdzenie, że wykonana została kopia zapasowa Twoich danych i że akceptujesz potencjalną utratę danych z dysku.**


#### Wymiana dysku bez wyłączenia serwera

> [!primary]
>
> Ten typ wymiany dysku możliwy jest tylko w przypadku serwerów [FS-MAX](https://www.ovh.pl/serwery_dedykowane/storage/1801fs05.xml){.external} oraz [Big-HG](https://www.ovh.pl/serwery_dedykowane/hg/1801bhg01.xml){.external} z zainstalowaną macierzą RAID.
> 

W przypadku wymiany dysku w serwerze z kartą MegaRAID (wymiana bez wyłączania serwera), włącz diodę LED w dysku przeznaczonym do wymiany w momencie, gdy operacja techniczna jest zaprogramowana. Ułatwi to pracę naszym zespołom.

Jeśli w Twoim serwerze zainstalowana jest karta MegaRAID, zastosuj następujące komendy:

- aby włączyć diodę LED;

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

- aby wyłączyć diodę LED;

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

> [!primary]
>
> Możesz to również wykonać przy użyciu komendy `storcli`:
>
> - aby włączyć diodę LED;
>
> ```sh
> storcli /c0/e0/s0 start locate
> ```
>
> - aby wyłączyć diodę LED:
>
> ```sh
> storcli /c0/e0/s0 stop locate
> ```
>


> [!primary]
>
> Oprócz włączenia diody LED pamiętaj o podaniu w zgłoszeniu numeru serii oraz *slotu* dysku.
> 

### Po zakończeniu wymiany dysku

Jeśli posiadasz serwer ze sprzętową macierzą RAID, RAID odbuduje się samoistnie.  Uwaga: funkcja *auto-rebuild*, aktywowana domyślnie, nie może być przez Ciebie uprzednio zdezaktywowana.  Proces ponownej synchronizacji może zająć kilka minut i spowodować zmniejszenie wydajności odczytu/zapisu macierzy RAID.

Jeśli posiadasz serwer z programową macierzą RAID, uruchom ręcznie ponowną synchronizację dysków. Więcej informacji na ten temat znajdziesz w dokumentacji [“Software RAID”](https://docs.ovh.com/pl/dedicated/raid-soft/){.external}.


## Sprawdź również

[Programowa macierz RAID](https://docs.ovh.com/pl/dedicated/raid-soft/)

[Sprzętowa macierz RAID - EN](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}

[Trybu Rescue](https://docs.ovh.com/pl/dedicated/ovh-rescue/)


Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
