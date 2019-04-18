---
title: Rozliczanie należności za usługę Public Cloud
slug: analizowanie_platnosci_i_zarzadzanie_nimi
excerpt: Zasady i modele naliczania opłat
section: Pierwsze kroki
order: 5
hidden: true
---

**Ostatnia aktualizacja dnia 2018-03-19**

## Wprowadzenie

Usługa Public Cloud jest dostępna w modelu płatności za wykorzystane zasoby (Pay as you Go). Dzięki temu pozwala na większą elastyczność i skalowanie według potrzeb bez nadmiernych kosztów. Możesz dodawać i usuwać zasoby (instancje, przestrzeń dyskowa, opcje…). Podliczenie wykorzystania zasobów jest wykonywane na koniec każdego miesiąca kalendarzowego.

Każdy projekt rozliczany jest jako zupełnie odrębna infrastruktura, dlatego też nie ma obecnie możliwości przenoszenia środków finansowych jak również składników projektu (instancje, dyski itp.) między projektami.

Dostępne metody płatności oraz numery kont bankowych są różne w zależności od kraju, w którym zostało utworzone konto klienta.

**Ten przewodnik przedstawia cały cykl korzystania z usługi od strony finansowej dla pojedynczego Projektu Public Cloud i dotyczy tylko klientów zarejestrowanych w Polsce.**

Aby zamówić produkty Public Cloud, w pierwszej kolejności należy uruchomić Projekt. Ceny produktów oraz modele naliczania opłat (godzinowy lub miesięczny) są charakterystyczne dla każdego z nich i widoczne podczas tworzenia zamówienia. Cenniki usług Public Cloud są dostępne na stronach internetowych: [instancje Public Cloud](https://www.ovh.pl/public-cloud/instances/cennik/){.external}, [Public Cloud Storage](https://www.ovh.pl/public-cloud/storage/object-storage/){.external}, [Public Cloud Archive](https://www.ovh.pl/public-cloud/storage/cloud-archive/){.extrenal}.


## Wymagania początkowe

- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}
- Utworzony projekt Public Cloud - omawiane opcje i funkcjonalności są widoczne po zalogowaniu do Panelu klienta i uruchomieniu Projektu


## W praktyce

Poniżej przedstawiony jest przykładowy cykl życia projektu Public Cloud - krok po kroku od uruchomienia projektu i zasobów do końca pierwszego okresu rozliczeniowego. 
W Panelu klienta jest także dostępna funkcja prognozowania kolejnego rachunku.


### Cykl życia projektu

#### Etap 1. utworzenie projektu

Aby [uruchomić projekt Public Cloud](https://docs.ovh.com/pl/public-cloud/tworzenie-usuwanie-projektow/){.external} należy aktywować konto przedpłacone, dokonując płatności za pierwsze zamówienie (utworzone podczas zakładania projektu). Otwarcie projektu następuje po zaksięgowaniu wpłaty. Inną opcją aktywacji jest [skorzystanie z vouchera](https://docs.ovh.com/pl/public-cloud/korzystanie-z-vouchera/){.external}, który można otrzymać podczas wydarzeń OVH lub akcji promocyjnych. Od tej chwili będziesz miał możliwość uruchamiania składników usługi.

Cała suma z pierwszej wpłaty jest przeznaczona na zakup produktów usługi Public Cloud, aż do jej wyczerpania. Wysokość wpłaty może się zmieniać, np. w zależności od aktualnych promocji lub ich braku.



#### Etap 2. zamówienie i użytkowanie zasobów Public Cloud

W przypadku instancji istnieją dwa typy rozliczenia - godzinowe i miesięczne z 50% zniżką w stosunku do ceny w trybie godzinowym.
Usługi (instancje, dyski, usługi archiwizowania danych)  można zamawiać w dowolnym momencie, uruchamiane są natychmiast a rozliczenie regulowane zgodnie z wybranym modelem rozliczenia.



#### Etap 3. rozliczanie projektu

Fakturowanie:
- instancja rozliczna godzinowo - rozliczenie "z dołu"- na koniec miesiąca jest wystawiana faktura z podsumowaniem zużycia;
- instancja rozliczana miesięcznie - rozliczenie "z góry", faktura wystawiana bezpośrednio po uruchomieniu instancji;
- pozostałe usługi - rozliczenie "z dołu" według wykorzystanych zasobów (ilości przesłanych i składowanych danych).

W przypadku zmiany typu rozliczania usługi, podsumowywane są należności za dotychczasowe wykorzystanie w trybie godzinowym oraz za okres po zmianie rozliczenia na miesięczny - proporcjonalnie w skali miesiąca.

Przykład: instancji b2-120 zamówionej i rozliczanej w trybie godzinowym przez 3 pierwsze dni, zmieniamy rozliczanie na miesięczne - na fakturze zobaczysz dwie pozycje:
- godzinowe wykorzystanie zasobów dla instancji,
- miesięczne wykorzystanie zasobów dla instancji.

Termin wystawienia faktury - do 7 dni po zakończeniu miesiąca lub uruchomienia instancji w miesięcznym trybie rozliczania.
Termin uregulowania wpłaty - do 7 dni kalendarzowych od daty wystawienia faktury.

> [!primary]
> Uruchamiając usługę w rozliczeniu miesięcznym, wyrażasz zgodę na uregulowanie całej kwoty miesięcznej z góry, niezależnie od ilości dni faktycznie pozostałych do końca miesiąca. 
> W takim przypadku usługa nie jest rozliczana proporcjonalnie do ilości dni, w których została wykorzystywana.
>

Ceny usług są wyświetlane podczas ich uruchamiania w Panelu klienta, jak również są dostępne na [stronach internetowych](https://www.ovh.pl/public-cloud/){.external}.

#### Etap 4. zamknięcie projektu
Projekt możesz usunąć w dowolnej chwili, wszystkie usługi uruchomione w projekcie zostaną zamknięte wraz z nim.
Jest to proces nieodwracalny.


### Prognozowanie kosztów
W Panelu klienta jest dostępna funkcja kalkulacji kolejnego rachunku prezentująca wysokość opłaty, którą wygenerują uruchomione usługi na koniec miesiąca, o ile nie dokupisz / usuniesz żadnej z nich.

Możesz też ustawić powiadomienie, dzięki któremu otrzymasz e-mail, gdy przekroczysz określoną kwotę w szacunkowych obliczeniach faktury.
Więcej szczegółów znajdziesz w przewodniku: [Analiza wykorzystania zasobów Public Cloud](https://docs.ovh.com/pl/public-cloud/analiza-zasobow-public-cloud){.external}


### Metody płatności

Polscy klienci mają do wyboru cztery metody płatności:

- konto przedpłacone Public Cloud (forma konta pre-paid) - możesz zasilić konto dowolną wysokością wpłaty, należności za faktury będą automatycznie pobierane z tych środków;
- PayU - wykonanie płatności online jest możliwe poprzez kliknięcie na przycisk "Płatność online" w zamówieniu lub kliknięcie w link przesłany w wiadomości e-mail;
- PayPal - możesz podłączyć konto PayPal w Panelu klienta, skąd pobierane będą płatności za wystawione faktury;
- przelew tradycyjny - OVH daje możliwość wykonania przelewu bankowego na nasze konto dla wszystkich klientów korzystających z kont bankowych oraz dla tych, którzy płacą za nasze usługi za pośrednictwem poczty.

Pamiętaj, metody płatności i numery kont bankowych mogą być różne w zależności od kraju, w którym zostało utworzone konto klienta.

### Zadłużenie projektu

W przypadku nieuregulowania rachunku w terminie, projekt zostanie zawieszony.
Jeśli w ciągu kolejnych 7 dni kwota nie zostanie uregulowana, projekt i jego składniki zostaną trwale usunięte, bez możliwości przywrócenia danych, co nie unieważnia długu, który musi zostać spłacony.



## Sprawdź również

[Tworzenie i usuwanie projektów Public Cloud](https://docs.ovh.com/pl/public-cloud/tworzenie-usuwanie-projektow/){.external}

[Tworzenie i usuwanie instancji w Panelu klienta](https://docs.ovh.com/pl/public-cloud/tworzenie_instancji_w_panelu_klienta_ovh/){.external}

[Zmiana typu rozliczenia z godzinowego na miesięczne dla instancji Public Cloud](https://docs.ovh.com/pl/public-cloud/zmiana-typu-rozliczenia/){.external}

[Korzystanie z vouchera](https://docs.ovh.com/pl/public-cloud/korzystanie-z-vouchera/){.external}


Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
