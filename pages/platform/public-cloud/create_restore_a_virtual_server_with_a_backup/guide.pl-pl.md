---
title: 'Tworzenie / przywracanie serwera wirtualnego na podstawie kopii zapasowej'
excerpt: 'Dowiedz się, jak utworzyć instancję w Panelu klienta OVHcloud Public Cloud'
slug: tworzenie_przywracanie_serwera_wirtualnego_na_podstawie_kopii_zapasowej
legacy_guide_number: g1882
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja: 3 grudnia 2019**

## Wprowadzenie

OVHcloud [Public Cloud](https://www.ovh.pl/public-cloud/){.external} umożliwia szybkie i łatwe utworzenie instancji (np. serwerów wirtualnych) — wystarczy kilka kliknięć.

**Dowiedz się, jak utworzyć instancję w Panelu klienta OVHcloud Public Cloud.**

## Wymagania początkowe

* dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
* projekt [Public Cloud](https://www.ovh.pl/public-cloud/){.external} utworzony na koncie OVHcloud
* klucz SSH utworzony w Panelu klienta OVHcloud

### Wdrażanie instancji Public Cloud

Aby wdrożyć instancję Public Cloud, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Kliknij pozycję `Public Cloud`{.action} w lewym górnym rogu strony. Na następującym ekranie kliknij przycisk strzałki obok domyślnej nazwy projektu (w lewym górnym rogu ekranu). Wybierz projekt, w którym chcesz utworzyć nową instancję.

![select_project](images/select_project.png){.thumbnail}

Po wybraniu właściwego projektu kliknij przycisk `Instancje`{.action} w sekcji „Środowisko obliczeniowe” znajdującej się na lewym pasku bocznym.

![create_instance](images/create_instance.png){.thumbnail}

Następnie kliknij przycisk `Utwórz instancję`{.action}. Zostanie wyświetlone następujące menu, w którym można wybrać instancję do utworzenia.

![create_instance1](images/create_instance1.png){.thumbnail}

Poniższa tabela zawiera krótkie wyjaśnienie różnic między typami instancji:

| Typ serwera | Gwarantowane zasoby | Wdrożenie |
| :---         |     :---:      |          ---: |
| Ogólne zastosowanie   | ✓     | Serwery programistyczne, aplikacje internetowe i biznesowe    |
| CPU     | ✓       | Kodowanie wideo lub inne zastosowania wymagające dużej wydajności obliczeniowej      |
| RAM   | ✓     | Bazy danych, analiza i obliczenia w pamięci    |
| Zasoby udostępnione    | -       | Środowiska testowe i deweloperskie      |

> [!primary]
>
Początkowo obowiązuje ograniczenie do 20 instancji, 20 rdzeni wirtualnych i 40 GB pamięci RAM na każdy projekt. Wniosek o zwiększenie limitu zasobów można złożyć przez [przesłanie zgłoszenia](https://www.ovh.com/manager/dedicated/index.html#/ticket){.external} do naszego zespołu obsługi klienta.
>


W menu wybierz region, w którym ma się znajdować instancja Public Cloud. Trzecia opcja służy do wyboru systemu operacyjnego.

> [!primary]
>
W przypadku wybrania systemu operacyjnego Windows automatycznie zostanie udostępniona licencja, która będzie rozliczana miesięcznie.
>

![install](images/os_install.png){.thumbnail}

> [!primary]
>
W przypadku instancji Public Cloud z systemem operacyjnym Unix do serwera należy dodać klucz SSH. Więcej informacji o generowaniu klucza SSH zawiera artykuł [Tworzenie kluczy SSH](https://docs.ovh.com/pl/public-cloud/tworzenie-kluczy-ssh/){.external}.
>

W czwartej części menu można wybrać liczbę instancji do utworzenia, nazwać instancję i dodać sieć prywatną lub skrypt uruchamiany po instalacji.

![add an instance](images/configure_instance.png){.thumbnail}

Na koniec należy wybrać model rozliczeniowy — miesięczny lub godzinowy.

> [!warning]
>
>W przypadku modelu godzinowego opłaty są naliczane przez cały okres istnienia instancji. Nie ma znaczenia, czy instancja jest używana, czy nie.
>


Po potwierdzeniu prawidłowości wszystkich wprowadzonych informacji kliknij przycisk `Utwórz instancję`{.action}, aby ukończyć tworzenie nowej instancji. Udostępnienie instancji może zająć kilka minut.

## Podsumowanie

Ten artykuł zawiera informacje, które umożliwiają udostępnienie instancji w projekcie Public Cloud za pomocą Panelu klienta OVHcloud. Informacje o innych działaniach dotyczących instancji zawierają artykuły na stronie wsparcia technicznego [usług Public Cloud](https://docs.ovh.com/pl/public-cloud/){.external}.

## Sprawdź również

[Pierwsze kroki z Public Cloud](https://docs.ovh.com/pl/public-cloud/tworzenie-usuwanie-projektow/){.external}

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.
