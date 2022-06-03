---
title: 'Tworzenie instancji w interfejsie Horizon'
excerpt: 'Dowiedz się, jak utworzyć instancję w interfejsie Horizon'
slug: tworzenie_instancji_w_interfejsie_horizon
legacy_guide_number: g1772
section: 'Zarządzanie w interfejsie Horizon'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 31-12-2021**

## Wprowadzenie

Istnieje możliwość tworzenia instancji bezpośrednio w interfejsie Horizon. Możesz utworzyć wiele instancji lub skonfigurować grupę zabezpieczeń i użyć jej w instancjach.

**Dowiedz się, jak utworzyć instancję w interfejsie Horizon.**

## Wymagania początkowe

- Utworzenie projektu [Public Cloud]({ovh_www}/public-cloud/instances/){.external} na Twoim koncie OVHcloud
- [Dostęp do interfejsu Horizon](../horizon/){.external}

## W praktyce

Aby rozpocząć tworzenie instancji, zaloguj się do interfejsu Horizon. Jeśli potrzebujesz więcej informacji, aby przeprowadzić tę operację, zapoznaj się z naszym [przewodnikiem](../horizon/){.external}.

Kliknij `Compute`{.action} w menu po lewej stronie, a następnie kliknij `Instances`{.action}.

![createinstance](images/create-instance-step1.png){.thumbnail}

Wyświetli się strona, na której zobaczysz uruchamiane aktualnie instancje. Aby uruchomić nową, kliknij przycisk `Launch Instance`{.action}.

![createinstance](images/create-instance-step2.png){.thumbnail}

Wprowadź następnie odpowiednie dane. W razie potrzeby skorzystaj z poniższej tabeli, aby uzupełnić pola. Lista danych w tabeli nie jest wyczerpująca. 

|Informacja|Szczegóły|
|---|---|
|Availability Zone|Pozostaw “nova” (wybór domyślny).|
|Instance Name|Wpisz wybraną nazwę tworzonej instancji.|
|Flavor|Wybierz typ instancji.|
|Count|Wpisz liczbę instancji, które chcesz utworzyć.|
|Select Boot Source|Wybierz źródło uruchomienia instancji (np. “Uruchomienie z obrazu” lub “Uruchomienie ze snapshot”).|
|Device Name|Wybierz obraz instancji (wyłącznie w przypadku uruchamiania instancji z obrazu).|
|Instance Snapshot|Wybierz snapshot instancji (wyłącznie w przypadku uruchamiania instancji ze snapshota).|
|Key Pair|Wybierz klucz SSH, aby zalogować się do instancji (możesz utworzyć klucz, klikając symbol “+” ).|
|Security Groups|Wybierz grupę zabezpieczeń dla instancji (autoryzacja otwarcia portów).|
|Networks|Wybierz z listy sieć lub sieci dla instancji, które tworzysz.|
|Configuration|Wybierz źródło: “bezpośredni wpis” lub “plik”.|
|Customization Script:|Wprowadź kod skryptu w odpowiednie pole (maksymalnie 16 kb).|
|Load Customization Script from a file|Kliknij “Przeglądaj”, aby wybrać skrypt poinstalacyjny.|
|Disk Partition|Wybierz: “automatyczne” lub “ręczne”.|
|Configuration drive|Skonfiguruj OpenStack, aby zapisać metadane na dysku konfiguracyjnym, który zostanie przypisany do instancji w momencie jej uruchomienia.|

> [!warning] 
> 
> Chociaż pole "Key Pair" nie jest obowiązkowe w interfejsie Horizon podczas tworzenia instancji, rejestracja klucza SSH jest absolutnie konieczna, aby móc połączyć się z instancją. Bez klucza SSH będziesz musiał zrestartować instancję w trybie Rescue, aby móc utworzyć hasło lub dodać klucz SSH do odpowiedniego pliku.
>

Kiedy jesteś gotowy, aby uruchomić instancję lub instancje, kliknij przycisk `Launch Instance`{.action}.

![createinstance](images/create-instance-step3.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
