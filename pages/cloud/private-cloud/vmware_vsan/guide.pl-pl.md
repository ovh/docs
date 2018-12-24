---
title: 'Wdrożenie hiperkonwergencji VMware przy użyciu vSAN'
slug: vmware-vsan
excerpt: 'Dowiedz się, jak wdrożyć hiperkonwergencję w Twoim wirtualnym centrum danych przy użyciu vSAN'
section: 'Funkcjonalności VMware vSphere'
---

**Ostatnia aktualizacja z dnia 19-12-2018**

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, w jaki sposób wdrożyć VMware vSAN w infrastrukturze Private Cloud.

**Dowiedz się, jak wdrożyć hiperkonwergencję w Twoich wirtualnych maszynach przy użyciu vSAN.**

## Wymagania początkowe

* Posiadanie oferty [Private Cloud](https://www.ovh.pl/private-cloud/){.external}
* Dodanie co najmniej trzech hostów vSAN
* Dostęp do interfejsu zarządzania vSphere

## W praktyce

### vSAN: kluczowe pojęcia 

#### Co to jest vSAN?

vSAN jest rozwiązaniem typu „object storage” do przechowywania danych oferowanym przez VMware. Łączy ono wszystkie dyski umieszczone bezpośrednio na hostach VMware i prezentuje je jako jeden datastore. Ten typ architektury, łączący możliwości przetwarzania i przechowywania rozproszonego na wszystkich fizycznych hostach, jest również nazywany **architekturą hiperkonwergentną**. Ponieważ datastore jest konstrukcją wirtualną zarządzaną przez oprogramowanie vSAN, używamy również terminu Software Defined Storage lub SDS. Jedną z zalet vSAN jest całkowita integracja z vSphere i możliwość zarządzania bezpośrednio z poziomu vCenter.

#### Storage obiektowy

Jedną z najistotniejszych kwestii jest fakt, że datastore vSAN jest systemem „object storage”. Wirtualne maszyny hostowane na datastore składają się z obiektów, podczas gdy w tradycyjnym modelu przechowywania danych wirtualne maszyny tworzą pliki hostowane na jednostce LUN. Ochrona obiektów polega na ich replikacji na różnych hostach w klastrze, w odróżnieniu od standardowej metody, kiedy to ochrona zapewniana jest poprzez konfigurację dysków w RAID .

Obiekty, z których składa się wirtualna maszyna:
* pliki podstawowe VM (VMX, nvram, logs, snapshoty pamięci...) noszące również nazwę VM Home,
* wirtualne dyski (VMDK),
* swap,
* snapshoty dysków.

Elementy, które tworzą obiekt nazywane są komponentami. Na przykład, jeśli obiekt jest replikowany na dwóch hostach, składa się z dwóch komponentów. Liczba komponentów powiązanych z obiektem pozwoli określić poziom odporności danych na usterki.

#### Ochrona danych

W celu zapewnienia ochrony danych na wypadek usterki fizycznej (hostów, dysków, etc...) konieczne jest zdefiniowanie poziomów oczekiwanej redundancji. Możesz do tego użyć jednego z dwóch mechanizmów oferowanych przez vSAN:

##### Failure To Tolerate (FTT)

Pierwszy poziom redundancji dotyczy liczby usterek, które klaster vSAN powinien obsłużyć, niezależnie od tego, czy chodzi o utratę dysku, hosta czy połączenia sieciowego. Wartość ta określana jest mianem „Tolerowanego poziomu usterki” (*Failure To Tolerate* lub FTT) i może wynosić od 0 (całkowity brak redundancji) do 3 (poziom maksymalny). W zależności od tego, jaki jest oczekiwany poziom „n”, vSAN utworzy kilka komponentów i rozproszy je na wszystkich hostach. Dzięki temu, w przypadku awarii, wirtualne maszyny pozostaną dostępne. Im wyższy oczekiwany poziom redundancji, tym wyższa liczba wymaganych hostów.

* FTT=1:  minimum 3 hosty,
* FTT=2:  minimum 5 hostów,
* FTT=3:  minimum 7 hostów.

> [!warning]
>
> Konfiguracja FTT na poziomie 0 oznacza, że dane nie są redundantne. Wiąże się to z ryzykiem niedostępności określonych wirtualnych maszyn.
>

##### Failure Tolerance Method (FTM)

Oprócz liczby obsługiwanych usterek, vSAN oferuje dwie metody ochrony danych, tworzenia kopii lustrzanych i erasure coding. Mechanizmy te działają w sposób analogiczny do klastrów RAID używanych przez kontrolery dysków twardych, ale są stosowane bezpośrednio do obiektów, a zatem również do komponentów.

* Kopie lustrzane (RAID 1): poziom domyślny. Każdy obiekt jest zapisywany jednocześnie na dwóch różnych hostach (kopie lustrzane);
* Erasure Coding + FTT=1 (RAID 5): każdy obiekt jest podzielony na trzy komponenty, natomiast czwarty komponent parzystości jest obliczany. Dzięki temu możesz odnaleźć brakujące dane w przypadku utraty jednego z komponentów. Do zapisania czterech komponentów potrzeba zatem czterech hostów.
* Erasure Coding + FTT=1 (RAID 6): każdy obiekt jest podzielony na trzy komponenty danych i dwa komponenty parzystości. Dzięki temu możesz ponownie obliczyć dwa brakujące elementy. Do zapisania sześciu komponentów w różnych miejscach i zapewnienia redundancji potrzeba zatem sześciu hostów.

Wszystkie te parametry określą liczbę komponentów (components), które tworzą obiekt i, co za tym idzie, określą minimalną liczbę hostów oraz liczbę dopuszczalnych usterek (hostów, dysków, etc...) niepowodujących utraty dostępu do danych.

|         | |Konfiguracja obiektów w zależności od FTT i FTM| |   |
|------------------------|----------------------------------|------------------------|------------------------|------------------------|
| Failure Tolerance Method (FTM)   | Failure To Tolerate (FTT) | Odpowiednik RAID | Minimalna liczba hostów | Liczba tolerowanych usterek |
| Kopie lustrzane | 1 | RAID 1 | 3 | 1 |
| Kopie lustrzane | 2 | RAID 1 | 5 | 2 |
| Kopie lustrzane | 3 | RAID 1 | 7 | 3 |
| Kopie lustrzane | 1 | RAID 5 | 4 | 1 |
| Kopie lustrzane | 2 | RAID 6 | 6 | 2 |

> [!primary]
>
> W przypadku erasure coding poziomy ochrony RAID 5 i 6 wymuszają zastosowanie odpowiednio FTT=1 lub 2, pozostałe wartości (0 lub 3) nie są obsługiwane.
>

#### Wykorzystanie przestrzeni dyskowej

Użycie mechanizmów redundancji w naturalny sposób powoduje zwiększone zużycie przestrzeni, konieczne jest zatem znalezienie odpowiedniego kompromisu. Mocną stroną vSAN jest możliwość wyboru polityki redundancji dla poszczególnych wirtualnych maszyn zamiast ogółem dla całego datastore’u. Dzięki temu zyskujesz różnorodne polityki redundancji zmieniające się w zależności od typu środowiska.

|         | Nadmierne zużycie przestrzeni dyskowej związane z redundancją | |  |
|------------------------|----------------------------------|------------------------|------------------------|
| Poziom ochrony   | RAID 1 | RAID 5 | RAID 6 |
| 3 hosty FTT=1          | x 2    | - | - |
| 4 hosty FTT=1          | x 2    | x 1,33 | - |
| 5 hostów FTT=1          | x 2    | x 1,33 | - |
| 6 hostów FTT=2          | x 2    | - | x 1,5 |

> [!warning]
>
> Ze względu na konieczność utrzymania odpowiedniej wydajności i odporności VMware zaleca, aby nie przekraczać 70% wypełnienia datastore vSAN.
>

#### Użytkowa przestrzeń netto przeznaczona na dane użytkownika

Dla zilustrowania poprzedniego punktu przedstawiamy oszacowanie przestrzeni dyskowej dostępnej dla danych w różnych konfiguracjach PCC vSAN 256 lub 512, przy uwzględnieniu zalecanego przez vMware ograniczenia wypełnienia przestrzeni do 70%.

| Liczba Hostów vSAN 256  | FTT  | Pojemność Hosta (TB)  | Całkowita przestrzeń  | 	Przestrzeń do wykorzystania - ochrona RAID 1 (TB)  | Przestrzeń do wykorzystania - ochrona RAID 5 (TB)  | Przestrzeń do wykorzystania - ochrona RAID 6 (TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 4  | 12  | 4,2  | n/a  | n/a  |
| 4  | 1  | 4  | 16  | 5,6  | 8,4  | n/a  |
| 5  | 1  | 4  | 20  | 7,0  | 10,5  | n/a  |
| 6  | 1  | 4  | 24  | 8,4  | 12,6  | n/a  |
| 6  | 2  | 4  | 24  | n/a  | n/a  | 11,1  |

| Liczba Hostów vSAN 512  | FTT  | Pojemność Hosta (TB)  | Całkowita przestrzeń  | 	Przestrzeń do wykorzystania - ochrona RAID 1 (TB)  | Przestrzeń do wykorzystania - ochrona RAID 5 (TB)  | Przestrzeń do wykorzystania - ochrona RAID 6 (TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 8  | 24  | 8,4  | n/a  | n/a  |
| 4  | 1  | 8  | 32  | 11,2  | 16,8  | n/a  |
| 5  | 1  | 8  | 40  | 14,0  | 21,0  | n/a  |
| 6  | 1  | 8  | 48  | 16,8  | 25,2  | n/a  |
| 6  | 2  | 8  | 48  | n/a  | n/a  | 22,2  |

> [!primary]
>
> Dane te oparte zostały na założeniu, że **100% wirtualnych maszyn** używa tej samej polityki przechowywania danych.
> Nie uwzględniają one zysków związanych z deduplikacją/kompresją (które istotnie się zmieniają w zależności od natury przechowywanych danych).
> Jest to zatem bardzo ostrożne oszacowanie wielkości.
>

#### Grupy dysków (Disk Groups)

Dyski fizyczne na hostach połączone są w grupę dysków. Grupa dysków stanowi dla vSAN podstawową jednostkę zarządzania i składa się z dysku cache SSD (obowiązkowo) oraz z maksymalnie 7 dysków do przechowywania danych (konfiguracje OVH używają wyłącznie dysków SSD NVMe i oferują maksymalny poziom wydajności). Każdy host należący do vSAN powinien dysponować minimalnie jedną a maksymalnie pięcioma grupami dysków.

Dodanie grupy dysków powoduje, że zwiększa się przestrzeń dyskowa cache oraz ogólna wydajność.

Z drugiej jednak strony, ponieważ wszystkie zapisy dokonywane są w woluminie pamięci podręcznej, usterka dysku cache na hoście automatycznie uniemożliwia przechowywanie danych na wszystkich dyskach z danej grupy. Jeśli host dysponuje jedyną grupą dysków (w skrócie DG od ang. Disk Group), nie jest on dostępny dla vSAN, aż do momentu wymiany uszkodzonego dysku.

Operacja przypisania dysków cache oraz dysków do przechowywania danych do grupy dysków określana jest mianem **Claiming** i następuje podczas uruchamiania vSAN.

##### Komponent „świadek” (Witness)

Świadek to specyficzny obiekt nazywany również „witness”. Umożliwia on rozwiązywanie problemów związanych z podziałem klastra. Podział klastra powstaje w momencie, gdy niektóre elementy klastra nie mogą się komunikować lub gdy host jest odizolowany. 

W przypadku polityki RAID 1, gdzie każda z dwóch kopii obiektu znajduje się w innej części klastra i obydwie modyfikowane są równocześnie, nie można ustalić, gdzie znajdują się dane referencyjne. W tym momencie do głosu dochodzi „świadek”: jest to niewielki plik (2 MB), który zawiera wyłącznie metadane i pozwala zadecydować, która kopia jest aktualna. W przypadku klastra z 3 hostami oraz polityką RAID 1, dwa hosty będą przechowywać kopie danych, natomiast trzeci bedzie hostować plik „świadka”, który zawiera informacje o obiektach danych. W przypadku podziału klastra lub izolacji host, który ma dostęp do „świadka” będzie kontynuował pracę w trybie awaryjnym. Po rozwiązaniu problemu odizolowany host zostaje ponownie zsynchronizowany z najnowszymi danymi.

„Świadek” jest używany tylko dla polityki RAID 1, ponieważ w RAID 5 lub 6, dane i ich parzystość są rozdzielane na wszystkie hosty, a ich liczba jest wystarczająca, aby uniknąć jakichkolwiek dwuznaczności w przypadku izolacji hosta.

##### Wyświetlanie obiektów

Możesz wyświetlić status obiektów. W tym celu przejdź do właściwości klastra > zakładka „Monitoring” (lub „Monitor” w interfejsie w języku angielskim) > sekcja vSAN.

Następnie kliknij „Wirtualne obiekty” (lub „Objects”)

![](images/vsan_21.png){.thumbnail}

Wyświetlają się 3 typy obiektów vSAN:

* VM home
* Dysk twardy
* Plik swap RAM (plik vswp)

Po kliknięciu na obiekt zobaczysz, w jaki sposób jest on przechowywany w klastrze, możesz również zobaczyć różne komponenty obiektu:

![](images/vsan_22.png){.thumbnail}

Aby zilustrować inne typy obiektów, utwórzmy snapshot maszyny wirtualnej.

![](images/vsan_23.png){.thumbnail}

Widzimy, że nowy obiekt snapshot został dodany do każdego z obiektów hard disk.

#### Maksymalne wartości dla vSAN

##### vSAN 6.6

* 5 grup dysków na jeden host 
* 9000 komponentów na jeden host vSAN
* 35 dysków do przechowywania danych na jeden host 
* 64 hosty na jeden klaster vSAN
* Jeden vSAN datastore na jeden klaster
* 6000 wirtualnych maszyn na jeden klaster 
* 12 stripes na jeden obiekt
* Tolerancja utraty hosta: 3
* Maksymalny rozmiar wirtualnego dysku: 62 TB

#### Ograniczenia vSAN

##### vSAN 6.6

Następujące funkcje vSphere nie są obsługiwane:
* RDM,VMFS, partycja diagnostyki
* Raw Device Mapping (RDM)
* Storage I/O control
* Rezerwacja woluminu SCSI

### Aktywacja vSAN

> [!warning]
>
> W vSphere 6.5 operacje dotyczące vSAN są dostępne jedynie w kliencie webowym vSphere we Flashu (Flex), a nie w interfejsie HMTL 5.
>

#### Wyłączenie trybu wysokiej dostępności ((vSphere HA)

vSAN wykorzystuje funkcje wysokiej dostępności klastra. Przed wykonaniem jakiejkolwiek operacji należy koniecznie wyłączyć ten tryb.

W tym celu przejdź do właściwości klastra, na którym vSAN ma być aktywowany > sekcja „Dostępność vSphere”, następnie usuń zaznaczenie z odpowiedniej kratki:

![](images/vsan_01.png){.thumbnail}

#### Parametry vSAN

Niniejszy przewodnik opisuje główne funkcje vSAN. Użyjemy domyślnych opcji, idealnie dopasowanych do tego typu zastosowań:

![](images/vsan_03.png){.thumbnail}

Jedyne opcje, które włączymy to deduplikacja i kompresja. Pozwoli to zoptymalizować przechowywanie danych. Dane, które się powtarzają zapisywane będą tylko raz.

Proces ten możliwy jest dzięki użyciu dysków flash o wysokiej wydajności zamiast tradycyjnych mechanicznych dysków.

![](images/vsan_04.png){.thumbnail}

Karty sieciowe do realizacji transferu vSAN oferowane są automatycznie.

Kliknij `Dalej`{.action}, aby wybrać dyski, których chcesz użyć do przechowywania vSAN. Podczas pierwszej aktywacji dyski są wykrywane automatycznie.

![](images/vsan_05.png){.thumbnail}

> [!primary]
>
> Jeśli dyski zostały uruchomione podczas poprzedniego wdrożenia vSAN, nie musisz ich zaznaczać ponownie. Dlatego okno służące do ich zaznaczenia będzie puste, możesz jednak przejść do następnego etapu.
>
> ![](images/vsan_06.png){.thumbnail}
>

Zanim uruchomisz proces, sprawdź w ostatnim oknie, czy wszystkie parametry są poprawne.

![](images/vsan_07.png){.thumbnail}

Aktywacja vSAN może potrwać kilka minut. Po zakończeniu aktywacji informacje dotyczące konfiguracji będą dostępne w zakładce „vSAN”:

![](images/vsan_08.png){.thumbnail}

> [!warning]
>
> Pamiętaj, aby ponownie włączyć funkcję wysokiej dostępności Twojego klastra.
>

### Dezaktywacja vSAN

> [!warning]
>
> W vSphere 6.5 operacje dotyczące vSAN są dostępne jedynie w kliencie webowym vSphere we Flashu (Flex), a nie w interfejsie HMTL 5.
>

#### Usunięcie datastore

Za pomocą Storage vMotion możesz przenieść w innej miejsce wszystkie wirtualne maszyny znajdujące się na przestrzeni datastore vSAN lub usunąć te, których już nie używasz.

Kliknij zakładkę „Datastore” i sprawdź, czy żadna wirtualna maszyna nie jest zainstalowana na przestrzeni datastore vSAN.

![](images/vsan_09.png){.thumbnail}

#### Usunięcie grupy dysków

Jeśli chcesz usunąć wszystkie informacje o konfiguracji vSAN na Twoich dyskach, możesz usunąć grupę dysków utworzoną przez vSAN podczas aktywacji.

W tym celu wybierz zakładkę „vSAN” we właściwościach klastra > sekcja „Zarządzanie dyskami”.

![](images/vsan_11.png){.thumbnail}

Dla każdego z Twoich hostów wybierz odpowiednią grupę dysków i kliknij ikonkę „Usuń”, która znajduje się w górnym menu.

Następnie potwierdź.

![](images/vsan_12.png){.thumbnail}

Dwie pierwsze opcje są użyteczne, jeśli chcesz usunąć host z klastra, jednocześnie zachowując działanie datastore vSAN.

Ponieważ usuniesz całość datastore, migracja Twoich danych nie jest konieczna. Możesz wybrać ostatnią opcję „Nie przenoś danych”.

Operacja usunięcia potrwa kilka minut.

Powtarzaj operację na każdym z węzłów klastra, aż do całkowitego usunięcia grupy dysków:

![](images/vsan_13.png){.thumbnail}

Jeśli wyświetlą się komunikaty o błędach dotyczące grupy dysków, możesz je zignorować.

#### Wyłączenie funkcji wysokiej dostępności

Podobnie jak w przypadku aktywacji vSAN, wyłącz ją w klastrze przed wyłączeniem usługi vSAN. W tym celu przejdź do właściwości klastra, sekcja „Dostępność vSphere”, następnie usuń zaznaczenie z kratki „Aktywuj vSphere HA”.

![](images/vsan_14.png){.thumbnail}

#### Wyłączenie vSAN

Po wyłączeniu funkcji wysokiej dostępności możesz wyłączyć vSAN.

Następnie w sekcji właściwości klastra kliknij przycisk „Modyfikuj”.

![](images/vsan_16.png){.thumbnail}

Usuń zaznaczenie z kratki „Aktywuj vSAN”.

![](images/vsan_17.png){.thumbnail}

Potwierdź następnie żądanie, które się wyświetli:

![](images/vsan_18.png){.thumbnail}

> [!primary]
>
> Jeśli wysoka dostępność nie jest poprawnie wyłączona, wyświetli się komunikat o błędzie:
>
> ![](images/vsan_19_FR.png){.thumbnail}
>

Po zakończeniu operacji wyświetli się komunikat potwierdzający jej wykonanie.

![](images/vsan_20.png){.thumbnail}

> [!warning]
>
> W przypadku takiej potrzeby należy włączyć ponownie funkcję wysokiej dostępności, jeśli klaster w dalszym ciągu hostuje wirtualne maszyny przechowywane na zewnętrznych przestrzeniach dyskowych datastore.
>

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.