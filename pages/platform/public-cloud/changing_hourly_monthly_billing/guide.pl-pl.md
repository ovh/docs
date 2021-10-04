---
title: 'Zmiana typu rozliczenia z godzinowego na miesięczne dla instancji Public Cloud'
excerpt: 'Dowiedz się, jak zmienić typ rozliczenia za instancję Public Cloud'
slug: zmiana-typu-rozliczenia
section: 'Zarządzanie projektami'
---

**Ostatnia aktualizacja: 06-12-2019**

## Wprowadzenie

Podczas tworzenia instancji Public Cloud można wybrać typ rozliczenia za godzinę lub miesięcznie. Instancje w typu godzinowym są płatne według faktycznego zużycia, czyli na koniec miesiąca użytkownicy są rozliczani za konkretne zasoby, z których korzystali. Instancje w subskrypcji miesięcznej są płatne z góry, ale rozliczane według niższej ceny (o 50% taniej niż w przypadku rozliczenia godzinowego). Jeśli początkowo zostało wybrane rozliczenie godzinowe, w dowolnym momencie można je zmienić na miesięczne.

**Dowiedz się, jak zmienić typ rozliczenia godzinowego na miesięczne.**

> [!warning]
>
> Nie można zmienić rozliczenia miesięcznego na godzinowe. Aby rozliczać się godzinowo, należy usunąć instancję rozliczaną miesięcznie, utworzyć nową instancję i wybrać dla niej typ rozliczenia godzinowego. W takiej sytuacji wykonaj następujące działania:
>
>- Utwórz migawkę bieżącej instancji.
>
>- Utwórz nową instancję na podstawie migawki.
>
>- Usuń instancję rozliczaną miesięcznie.
>

## Wymagania początkowe

- utworzona [instancja Public Cloud](https://www.ovhcloud.com/pl/public-cloud/){.external}
- zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}


## W praktyce

W [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} wybierz instancję, dla której chcesz zmienić typ rozliczenia, i otwórz menu opcji, klikając ikonę z trzema kropkami (po prawej stronie instancji). Zobaczysz przycisk `Zmień na subskrypcję miesięczną`{.action}:

![Change billing calculation](images/switch_to_monthly_updated.png){.thumbnail}

Następnie potwierdź zmianę typu rozliczenia:

![Confirm billing calculation change](images/confirm_to_monthly_updated.png){.thumbnail}

Po potwierdzeniu wyboru, natychmiast otrzymają Państwo miesięczny rachunek proporcjonalny. Następny rachunek będzie zawierał część stawki godzinowej z danego miesiąca (od 1. dnia miesiąca do zmiany) oraz nową opłatę miesięczną.


## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.