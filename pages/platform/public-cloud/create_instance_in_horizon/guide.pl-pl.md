---
title: 'Tworzenie instancji w interfejsie Horizon'
excerpt: 'Dowiedz się, jak utworzyć instancję w interfejsie Horizon'
slug: tworzenie_instancji_w_interfejsie_horizon
legacy_guide_number: g1772
section: 'Zarządzanie w interfejsie Horizon'
---

**Ostatnia aktualizacja z dnia 10-06-2019**

## Wprowadzenie

Istnieje możliwość tworzenia instancji bezpośrednio w interfejsie Horizon. Możesz utworzyć wiele instancji lub skonfigurować grupę zabezpieczeń i użyć jej w instancjach.

**Dowiedz się, jak utworzyć instancję w interfejsie Horizon.**

## Wymagania początkowe

- Utworzenie projektu [Public Cloud]({ovh_www}/public-cloud/instances/){.external} na Twoim koncie OVH
- [Dostęp do interfejsu Horizon](../tworzenie_dostepu_do_interfejsu_horizon/){.external}

## W praktyce

Aby rozpocząć tworzenie instancji, zaloguj się do interfejsu Horizon. Jeśli potrzebujesz więcej informacji, aby przeprowadzić tę operację, zapoznaj się z naszym przewodnikiem [Dostęp do interfejsu Horizon](../tworzenie_dostepu_do_interfejsu_horizon/){.external}.

Kliknij `Compute`{.action} w menu po lewej stronie, a następnie kliknij `Instancje`{.action}.

![createinstance](images/create-instance-step1.png){.thumbnail}

Wyświetli się strona, na której zobaczysz uruchamiane aktualnie instancje. Aby uruchomić nową, kliknij przycisk `Launch instance`{.action}.

![createinstance](images/create-instance-step2.png){.thumbnail}

Wprowadź następnie odpowiednie dane. W razie potrzeby skorzystaj z poniższej tabeli, aby uzupełnić pola. Lista danych w tabeli nie jest wyczerpująca. 

|Informacja|Szczegóły|
|---|---|
|Strefa dostępności|Pozostaw „nova” (wybór domyślny).|
|Nazwa instancji|Wpisz wybraną nazwę tworzonej instancji.|
|Szablon|Wybierz typ instancji.|
|Liczba instancji|Wpisz liczbę instancji, które chcesz utworzyć.|
|Źródło uruchomienia instancji|Wybierz źródło uruchomienia instancji (np. „Uruchomienie z obrazu” lub „Uruchomienie ze snapshota”).|
|Nazwa obrazu|Wybierz obraz instancji (wyłącznie w przypadku uruchamiania instancji z obrazu).|
|Snaphot instancji|Wybierz snapshot instancji (wyłącznie w przypadku uruchamiania instancji ze snapshota).|
|Para kluczy|Wybierz klucz SSH, aby zalogować się do instancji (możesz utworzyć klucz, klikając symbol „+” ).|
|Grupy zabezpieczeń|Wybierz grupę zabezpieczeń dla instancji (autoryzacja otwarcia portów).|
|Wybrane sieci|Wybierz z listy sieć lub sieci dla instancji, które tworzysz.|
|Spersonalizowane źródło skryptu|Wybierz źródło: „bezpośredni wpis” lub „plik”.|
|Dane skryptu:|Wprowadź kod skryptu w odpowiednie pole (maksymalnie 16 kb).|
|Plik skryptu|Kliknij „Przeglądaj”, aby wybrać skrypt poinstalacyjny.|
|Partycjonowanie dysku|Wybierz: „automatyczne” lub „ręczne”.|
|Dysk konfiguracyjny|Skonfiguruj OpenStack, aby zapisać metadane na dysku konfiguracyjnym, który zostanie przypisany do instancji w momencie jej uruchomienia.|

Kiedy jesteś gotowy, aby uruchomić instancję lub instancje, kliknij przycisk `Launch instance`{.action}.

![createinstance](images/create-instance-step3.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
