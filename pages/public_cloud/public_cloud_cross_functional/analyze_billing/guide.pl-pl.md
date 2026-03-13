---
title: 'Rozliczanie należności za usługę Public Cloud'
excerpt: 'Zasady i modele naliczania opłat'
updated: 2026-03-13
---

## Wstęp

Jeden z modeli rozliczania usług w chmurze to **Pay as you go**, czyli płatność za zużycie zasobów.

Tradycyjna metoda rozliczenia zasobów opiera się zazwyczaj na zobowiązaniu umownym zawartym między stronami na z góry określony czas  (zazwyczaj 12 miesięcy). Tymczasem chmura obliczeniowa oferuje bardziej elastyczne rozwiązanie - **płacisz pod koniec miesiąca za czas, w którym zasoby zostały wykorzystane**.

Przypomina to model rozliczenia stosowany przez niektórych operatorów telefonii, którzy wystawiają faktury za wykorzystane minuty pod koniec miesiąca. OVHcloud wystawia faktury za godziny wykorzystania serwera, przestrzeni dyskowej lub innego elementu usługi.  

**Ten przewodnik opisuje metody rozliczania należności za usługę Public Cloud.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/L2OyLFoa77Q?si=1zRR7qaGXZGD-mBS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Wymagania początkowe

* [projekt Public Cloud](/links/public-cloud/public-cloud) na koncie OVHcloud
* [instancja Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

<!-- CP-NAV-START:publiccloud-projects -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ścieżka nawigacji:** `Public Cloud`{.action} > Wybierz projekt

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!success]
> Skorzystaj z obniżonych cen, zobowiązując się do korzystania z zasobów Public Cloud przez okres od 1 do 36 miesięcy. Więcej informacji na stronie [Savings Plans](/links/public-cloud/savings-plan).

## Ogólna zasada

Celem jest zapewnienie rozliczenia jak najlepiej dopasowanego do sposobu wykorzystania usługi przez klienta. Dlatego niezbędne jest rozliczenie z zastosowaniem odpowiednich jednostek zużycia usługi. Najczęstszą jednostką będzie czas wyrażony w godzinach.

W przypadku każdego zasobu, który podlega fakturowaniu odliczanie godzin rozpoczyna się w momencie utworzenia zasobu i kończy się w momencie jego usunięcia, z zachowaniem zasady: "każda rozpoczęta godzina jest płatna jako pełna godzina".

Pod koniec miesiąca liczba godzin mnożona jest przez stawkę godzinową należną za dany zasób. Aby otrzymać całkowitą kwotę należności, należy zsumować wszystkie naliczone wcześniej kwoty cząstkowe.

W przypadku instancji maszyn wirtualnych licznik rozliczeń rozpoczyna się, gdy instancja osiągnie status `ACTIVE` (wyświetlany jako `Włączona` w obszarze klienta OVHcloud). Innymi słowy, okres, w którym instancja znajduje się w statusie `BUILD`, nie jest rozliczany.

Każdy projekt w chmurze jest fakturowany oddzielnie. Faktura obejmuje należności za wszystkie zasoby wykorzystane w ciągu miesiąca i jest wystawiana pierwszego dnia następnego miesiąca.

### Przykład

Poniższy przykład pozwoli lepiej zrozumieć, jak to działa.

- użytkownik uruchamia instancję B2-15 czwartego dnia danego miesiąca o godz. 9:40
- ósmego dnia miesiąca o godz. 10:00 dodaje 250 GB  dodatkowej przestrzeni dyskowej (Classic Volume) 
- usuwa wszystkie zasoby dwunastego dnia tego samego miesiąca o 16:30 po zakończeniu zadań, do których tych zasobów potrzebował

W przypadku instancji działającej od czwartego dnia miesiąca od 9:40 do 12 dnia tego samego miesiąca do 16:30 otrzymujemy 200 rozpoczętych godzin. Podlegają one opłacie 0,111 EUR za godzinę. 

W przypadku przestrzeni dyskowej, od ósmego dnia miesiące od godz. 10:00 do dwunastego dnia tego samego miesiąca do godz. 16:30, otrzymujemy 103 rozpoczęte godziny. Opłata za 1 GB Classic Volume to 0,04 EUR/m-c (0,0000555556 EUR/godz.).

Na koniec miesiąca faktura będzie wyglądała następująco:

- 200 x 0,111
- 103 x 250 x 0,0000555556

czyli 23,63 EUR.

> [!primary]
>
> Powyższe ceny zostały podane tytułem przykładu, nie są to ceny obowiązujące.
> 
> 

## W praktyce

### Wyświetlanie faktur

Aby wyświetlić faktury za dany projekt, przejdź do Panelu klienta OVHcloud zakładka `Public Cloud`{.action}, następnie wybierz odpowiedni projekt z menu po lewej stronie, po czym kliknij `Płatności`{.action} (w sekcji `Ustawienia`), a następnie `Historia`{.action}.

![public-cloud](images/pci-billing-information1-2021.png){.thumbnail}

Możesz teraz:

- sprawdzić szczegóły dotyczące zasobów, rozwijając każdą sekcję
- przeszukiwać historię, cofając się do wcześniejszego miesiąca lub przechodząc do następnego

### sprawdzić obecne zużycie

Obecne zużycie (z bieżącego miesiąca) możesz również sprawdzić, klikając zakładkę `Aktualne zużycie zasobów`{.action}.

![public-cloud](images/pci-billing-information2-2021.png){.thumbnail}

Pierwsza część **"Zafakturowane należności"** dotyczy zasobów rozliczanych w trybie miesięcznym (w szczególności patrz poniżej instancje fakturowane w modelu miesięcznym). Zasoby te są wyjątkiem od zasady "Pay as you go". Umowa terminowa obejmuje rozliczenie za jeden miesiąc, a należność za wykorzystanie zasobów w ciągu najbliższych 30 dni płatna jest z góry, czyli pierwszego dnia danego miesiąca. Celem jest uzyskanie korzyści handlowej. Na ekranie ukazującym bieżące zużycie zasoby zostały już opłacone pierwszego dnia bieżącego miesiąca.

Druga część **"Kolejna faktura"** dotyczy wszystkich zasobów "Pay as you go". W części tej sprawdzisz wykorzystanie zasobów od początku miesiąca do bieżącego dnia.

Otrzymasz również `Oszacowanie kolejnej faktury`{.action} (pierwszego dnia następnego miesiąca) przygotowaną na podstawie wcześniejszego zużycia. 

> [!primary]
>
> Informacje te podane są jako przykład, ponieważ sytuacja może się zmienić w każdym momencie w zależności od podjętych przez Ciebie działań (dodanie lub usunięcie zasobów).
> 
> 
> 

![public-cloud](images/pci-billing-information3-2021.png){.thumbnail}

Jeśli chcesz otrzymywać powiadomienia, kiedy prognozowany poziom zużycia zasobów zostanie przekroczony, możesz zaznaczyć to w tym oknie. Kiedy prognozowany poziom zużycia zasobów zostanie przekroczony, otrzymasz e-mail z powiadomieniem.

### Instancje

Ceny instancji cloud (lub serwerów cloud) możesz sprawdzić w interfejsie OVHcloud przed wdrożeniem instancji. Możesz sprawdzić je również dodatkowo na [stronie z cennikiem](/links/public-cloud/prices).

> [!primary]
>
> Przepustowość instancji nie jest fakturowana.
> 

Każdy model instancji jest dostępny w dwóch trybach rozliczenia: godzinowym lub miesięcznym.

> [!warning]
>
> Fakturowanie instancji ustaje, kiedy zostaje ona ostatecznie usunięta.
> na stałe. Jeśli instancja ma status taki jak "zatrzymana" lub "wstrzymana", licznik faktur będzie kontynuowany.
> do działania, ponieważ instancja nie została usunięta.
> W przypadku obydwu modeli rozliczenia, zostaje zafakturowana rozpoczęta jednostka czasu.
>

#### Rozliczenie godzinowe

Rozliczenie godzinowe odpowiada opisanemu wyżej modelowi “Pay as you go”.

Płatności za instancje objęte takim rozliczeniem realizowane są pierwszego dnia następnego miesiąca za godziny zużyte w bieżącym miesiącu.

##### **Zawieś (shelve) instancję**

W przypadku instancji typu godzinowego można zawieś  na półkę (*shelve*) instancję, aby zwolnić dedykowane zasoby z zachowaniem tego samego adresu IP. W tym przypadku dane z dysku lokalnego będą przechowywane w migawce tworzonej w momencie odłożenia/wstrzymania instancji. Fakturowany jest jedynie snapshot.

> [!warning]
>
> Proces ten działa tylko w przypadku instancji rozliczanych w modelu godzinowym. Nie powoduje on zatrzymania rozliczania instancji, ale zmniejsza koszty.
>

Aby uzyskać więcej informacji, zapoznaj się z tym [przewodnikiem](/pages/public_cloud/compute/suspend_or_pause_an_instance)

#### Rozliczenie miesięczne

Zaletą rozliczenia miesięcznego jest cena niższa o około 50% w porównaniu do stawki godzinowej, co stanowi wyjątek od typowego rozliczenia usług w chmurze.

Każdy rozpoczęty miesiąc jest rozliczany, nawet jeśli instancja zostanie usunięta przed końcem miesiąca.

### Przestrzeń dyskowa

Przestrzeń dyskowa jest zazwyczaj rozliczana za liczbę wykorzystanych GB miesięcznie. Aby obliczyć cenę za GB za godzinę, należy cenę za liczbę GB wykorzystanych w danym miesiącu podzielić przez 720, czyli przez średnią liczbą godzin w miesiącu. Wynik tej kalkulacji pokazuje, ile kosztuje godzina przechowywania danego elementu.

Obliczenie wygląda następująco: (Cena za liczbę GB w danym miesiącu / 720 ) x liczba godzin x liczba GB

Liczba GB za godzinę odpowiada maksymalnej liczbie GB przechowywanych w czasie jednej godziny. Na przykład, jeśli o 16:20 przechowywałeś 15 GB, o 16:40 - 17 GB, a o 16:50 - 14 GB, OVHcloud przyjmie na potrzeby kalkulacji 17 GB za przedział czasowy 16:00-17:00.

Ceny za przechowywanie danych podane są na [stronie OVHcloud](/links/public-cloud/storage).

#### Dodatkowe dyski

Dodatkowe dyski rozliczane są za każdy zaksięgowany GB z uwzględnieniem różnych stawek w zależności od gamy.

#### Dodatkowe dyski

Dodatkowe dyski są fakturowane w taki sam sposób jak dyski standardowe.

#### Snapshoty dodatkowych dysków

Snapshoty dodatkowych dysków są fakturowane w taki sam sposób jak dyski standardowe.

#### Snapshoty i obrazy instancji

Snapshoty instancji, podobnie jak obrazy (spoza katalogu obrazów dostarczanych przez OVHcloud) są rozliczane według stałego cennika za liczbę GB wykorzystanych w miesiącu, niezależnie od oryginalnej instancji czy typu obrazu. Przejdź do [strony z cennikiem](/links/public-cloud/prices).

#### Object Storage

Object Storage jest rozliczany w modelu **pay-as-you-go** na podstawie średniego wolumenu przechowywanego na godzinę w każdej klasie przechowywania (GiB-godziny), z fakturowaniem na koniec miesiąca. Przechowywanie jest głównym składnikiem rozliczeń — ruch przychodzący, ruch wewnętrzny OVHcloud, wywołania API i publiczny ruch wychodzący są wliczone w cenę.

Aby dostosować koszty do wzorców dostępu do danych, oferujemy kilka klas Object Storage kompatybilnych z S3<sup>1</sup> (Standard, High Performance, Infrequent Access, Active Archive, Cold Archive). Szczegółowe informacje o tych klasach, w tym przypadki użycia, wydajność i SLA, można znaleźć w dedykowanym przewodniku: [Wybór odpowiedniej klasy Object Storage](/pages/storage_and_backup/object_storage/s3_choosing_the_right_storage_class_for_your_needs).

> [!primary]
>
> Dla klas Infrequent Access, Active Archive i Cold Archive obowiązuje minimalny czas przechowywania oraz opłaty za odzyskiwanie danych.
>

## Sprawdź również

<sup>1</sup>: S3 jest znakiem towarowym Amazon Technologies, Inc. Usługa OVHcloud nie jest sponsorowana, popierana ani w żaden sposób powiązana z Amazon Technologies, Inc.

Dołącz do [grona naszych użytkowników](/links/community).
