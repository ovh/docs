---
title: 'Tworzenie kopii danych i baz danych na serwerze Storage'
slug: tworzenie-kopii-danych-i-baz-danych-na-serwerze-storage
excerpt: 'Zabezpiecz Twoje dane w 5 krokach'
section: Tutorial
updated: 2018-09-12
---

**Ostatnia aktualizacja z dnia 12-09-2018**

## Wprowadzenie 

Twoje dane są wrażliwe: ich utrata lub uszkodzenie mogłyby szybko doprowadzić do problemów w prowadzeniu Twojej działalności. Ponieważ zawsze istnieje ryzyko utraty danych, zalecamy wykonywanie kopii zapasowych co najmniej raz dziennie, najlepiej przy użyciu serwera czy rozwiązania do wykonywania kopii zapasowych innego niż Twoja infrastruktura produkcyjna.

OVHcloud oferuje gamę serwerów [dedykowanych Storage](https://www.ovhcloud.com/pl/bare-metal/storage/){.external} dostosowanych do przechowywania kopii zapasowych i wyposażonych w minimum cztery dyski twarde. Istnieje możliwość wykorzystania tych zasobów do zapisywania kopii zapasowych infrastruktury hostowanej w OVHcloud lub u innego dostawcy za pośrednictwem sieci publicznej.

Niniejszy przewodnik wyjaśnia, jak skonfigurować odpowiadający Twoim potrzebom serwer kopii zapasowych, jak utworzyć drzewo kopii zapasowych oraz jak zautomatyzować wykonywanie kopii zapasowych danych z dwóch zdalnych serwerów za pośrednictwem protokołu SCP.


## Wymagania początkowe

### Powinieneś umieć:

- Administrować systemem Linux w zakresie podstawowym
- Łączyć się z serwerem za pomocą protokołu SSH 
- Łączyć się z bazą danych 
- Zapisywać kopie baz danych
- Instalować dystrybucje (w tym przypadku używamy dystrybucji Debian 9.4)

### Powinieneś posiadać:

- [Serwer Storage OVHcloud](https://www.ovhcloud.com/pl/bare-metal/storage/){.external}
- Infrastrukturę produkcyjną ([VPS](https://www.ovhcloud.com/pl/vps/){.external}, [serwery dedykowane](https://www.ovhcloud.com/pl/bare-metal/){.external}, [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/){.external}…)
- Połączenie SSH skonfigurowane między serwerem kopii zapasowych a infrastrukturą produkcyjną
- Zalecane: sieć prywatna między serwerami ([OVHcloud vRack](https://www.ovh.pl/rozwiazania/vrack/){.external})



## W praktyce

### Etap 1: wybierz odpowiedni tryb RAID

OVHcloud oferuje gamę [serwerów dedykowanych](https://www.ovhcloud.com/pl/bare-metal/storage/){.external}, które posiadają kilka dysków twardych. W poniższym przykładzie prezentujemy RAID programowy (_soft RAID_) z czterema dyskami o pojemności 6 TB każdy. 

OVHcloud umożliwia wybranie konfiguracji przechowywania danych, proponując RAID 0, 1, 5, 6 i 10. Każdy z tych rodzajów macierzy ma swoje zalety i wady w zakresie wydajności i elastyczności. W przypadku czterech dysków możesz przechowywać dane w konfiguracji RAID 5, 6 lub 10 (RAID 0 i 1 nie są w tym przypadku odpowiednie).

Poniżej kilka wyjaśnień dotyczących tych typów macierzy RAID.

#### RAID 5

Ten typ macierzy umożliwia rozłożenie Twoich danych pomiędzy co najmniej trzema dyskami twardymi. Na czwartym dysku przechowywane są dane o parzystości i jest on używany do odbudowy pozostałych dysków w przypadku uszkodzenia jednego z nich. Zyskujesz dzięki temu tolerancję na awarie dysku. Wydajność jest zwiększona w trybie odczytu, lecz nie w trybie zapisu (z powodu bitu parzystości).

W tym przypadku pojemność woluminu wynosi 18 TB.

#### RAID 6

Jest to udoskonalona wersja RAID 5 z minimum czterema dyskami twardymi. Dane o parzystości są zapisane na dwóch, a nie jednym dysku, co zapewnia większą redundancję (tolerancja na awarie dwóch dysków). Wydajność jest zwiększona w trybie odczytu i zapisu.

W tym przypadku pojemność woluminu wynosi 12 TB.

#### RAID 10

Rodzaj ten jest kombinacją dwóch procesów. Pierwszy polega na rozpraszaniu danych i przechowywaniu ich na dwóch dyskach, co przyczynia się do zwiększenia wydajności, ponieważ możesz korzystać z nich jednocześnie. Drugi proces polega na duplikacji danych w trybie odbicia lustrzanego na dwóch dyskach. Uzyskujesz wówczas tolerancję na awarie dwóch dysków w tym samym klastrze.

W tym przypadku pojemność woluminu wynosi 12 TB.

Nie można powiedzieć, że jeden RAID jest lepszy od innego, każdy z nich odpowiada na inne potrzeby. W przedstawionym przykładzie chcemy uzyskać maksymalną tolerancję na awarie dysków oraz zachować wysoką wydajność w trybie odczytu i zapisu. Rozpoczynamy zatem instalację RAID 6.


### Etap 2: instalacja i konfiguracja serwera

Przejdź do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i wykonaj instalację systemu. Jak zostało wspomniane na początku, będziemy używać dystrybucji Debian 9.4. Więcej informacji znajdziesz w przewodniku [Pierwsze kroki z serwerem dedykowanym](https://docs.ovh.com/pl/dedicated/pierwsze-kroki-z-serwerem-dedykowanym/#instalacja-lub-reinstalacja-serwera-dedykowanego){.external}.

Po wybraniu systemu do instalacji zaznacz pole `Spersonalizuj konfigurację partycji`{.action}.

![Personalizuj konfigurację partycji](images/custompartition.png){.thumbnail}

Na tym etapie zmodyfikujesz typ macierzy RAID w Twoim katalogu `/home` (1) i, jeśli chcesz, rozszerzysz partycję (2).

![Modyfikacja katalogu /home](images/partition_customization_menu.png){.thumbnail}

> [!primary]
> 
> Rodzaj RAID dla katalogu `/boot` nie podlega modyfikacji.
> 

### Etap 3: tworzenie katalogów docelowych

Aby zachować porządek w przechowywaniu kopii zapasowych, utworzymy katalogi docelowe. Połącz się z Twoim serwerem dedykowanym za pomocą protokołu SSH, następnie wylistuj partycje:

```sh
df -h

Size Used Avail Use% Mounted on
udev            7,8G       0  7,8G   0% /dev
tmpfs           1,6G     51M  1,6G   4% /run
/dev/md3         20G    740M   18G   4% /
tmpfs           7,9G       0  7,9G   0% /dev/shm
tmpfs 5.0M 5 0.0M 0% /run/lock
tmpfs           7,9G       0  7,9G   0% /sys/fs/cgroup
/dev/md2        487M     32M  426M   7% /boot
/dev/sda1       510M    152K  510M   1% /boot/efi
/dev/md4         11T     31M   11T   1% /home
```

Utwórz drzewo plików za pomocą komendy `mkdir`. W przedstawionym przykładzie na serwerze zapisywane będą kopie zapasowe dwóch produkcyjnych serwerów webowych. Tworzymy zatem dwa katalogi: *serwer1* i *serwer2*. Każdy z nich będzie zawierał podkatalog *dump* do przechowywania kopii zapasowych SQL oraz podkatalog *data* przeznaczony do przechowywania danych WWW.

Używając komendy `tree`, możesz wyświetlić drzewo katalogu. Rezultat może wyglądać na przykład tak:

```sh
tree
.
└── backups
    ├── serwer1
    │   ├── data
    │   └── dump
    └── serwer2
        ├── data
        └── dump

7 directories, 0 files
```

### Etap 4: przesłanie danych z Twoich serwerów do serwera kopii zapasowych

Serwer kopii zapasowych jest teraz gotowy do zapisu kopii.

> [!primary]
> 
> Jeśli Twoja infrastruktura produkcyjna hostowana jest w OVHcloud i posiadasz wykupioną usługę wirtualnej szafy vRack, przeprowadź odpowiednią konfigurację. Dzięki temu Twoje kopie zapasowe nie będą przesyłane przez sieć publiczną (Internet).
>

Etap ten wymaga połączenia z serwerami produkcyjnymi przez SSH, które z kolei same połączą się z serwerem kopii zapasowych przez protokół SCP. Aby tak się stało, wszystkie zasoby muszą mieć możliwość łączenia się przez SSH.

Wykonajmy najpierw kopię zapasową bazy danych MySQL, popularnie nazywaną *dump*. Informacje o zaawansowanych zastosowaniach znajdziesz w oficjalnej dokumentacji dotyczącej bazy danych. 

```sh
mysql --host=localhost --user=myname --password=password mydb
mysqldump --all-databases > dump.sql
```

Po skonfigurowaniu Twojej usługi SSH możesz połączyć się z serwerami produkcyjnymi i użyć komendy `scp`.

```sh
scp nazwa_pliku_dump user@IP_serwera_storage:/home/backups/serwer1/dump

The authenticity of host 'IP_serwera_storage (IP_serwera_storage)' can't be established.
ECDSA key fingerprint is SHA256:fmmeu5feHlnaUC56+2DB73sgNd4aMPVkS7oEtcyO2o8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'IP_serwera_storage' (ECDSA) to the list of known hosts.

user@IP_serwera_storage password: 
```

> [!primary]
> 
> Jeśli zmodyfikowałeś port SSH Twojego serwera kopii zapasowych, dodaj argument `-P`.
>

Tę samą operację zastosuj do Twoich plików. Komenda `scp` pozwala również zapisywać kopie kompletnych katalogów.

```sh
scp -r katalog_kopii zapaowych user@IP_serwera_storage:/home/backups/serwer1/data/2018_01_01
```

Dostępne są także skuteczne (bezpłatne) narzędzia, takie jak *rsync*. Posiadają one zaawansowane funkcje, np. wznowienie wysyłki, która się nie powiodła.


### Etap 5: tworzenie dziennego harmonogramu zadań za pośrednictwem cron

Łączenie się codziennie z każdym z serwerów kopii zapasowych może być uciążliwe. Istnieją podstawowe metody automatyzacji zadań. Najbardziej znaną z nich jest program Unix *cron*. Pozwala on zaplanować wykonanie kodu z dokładnością co do godziny, dnia, miesiąca albo roku. Każdy użytkownik programu Unix dysponuje swoją własną listą zaplanowanych zadań, zwaną *crontab*.

Ze względów bezpieczeństwa zalecane jest utworzenie dodatkowego konta użytkownika Unix i przypisanie do niego zaplanowanych zadań.

Aby edytować tę listę, uruchom:

```sh
crontab -e
```

Dodaj następującą linię, aby zaprogramować automatyczną wysyłkę Twojego pliku dump SQL na każdy dzień roku, godz. 02:00 rano.

```sh
0 2 * * * scp nazwa_pliku_dump user@IP_serwera_storage:/home/backups/serwer1/dump >/dev/null 2>&1
```

Składnia *crontab* jest specyficzna; nie opisujemy jej dokładnie w niniejszym przewodniku, istnieją jednak strony WWW, gdzie można ją wygenerować.



## Podsumowanie

Właśnie skonfigurowałeś własny serwer kopii zapasowych i zautomatyzowałeś w sposób podstawowy wykonywanie kopii zapasowych plików. Jest to ważny krok, dzięki któremu unikniesz utraty danych i zapewnisz bezpieczeństwo prowadzonej przez Ciebie działalności.

Jak wspomniano wyżej, istnieją również inne darmowe lub płatne sposoby optymalizacji wykonywania kopii zapasowych. Jeśli Twoje dane są wrażliwe, zalecamy ich zaszyfrowanie i przesyłanie wyłączenie w sieci prywatnej, takiej jak vRack OVHcloud.