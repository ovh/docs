---
title: 'Usuwanie przestrzeni datastore'
slug: usuwanie-datastore
excerpt: 'Dowiedz się, jak usunąć przestrzeń datastore z Twojej infrastruktury Private Cloud'
section: 'Funkcjonalności OVH'
---

**Ostatnia aktualizacja z dnia 24-07-2020**

## Wprowadzenie

W niektórych przypadkach może zaistnieć potrzeba usunięcia datastore z Twojego klastra, np. w celu zastąpienia go lub zwiększenia.

**Niniejszy przewodnik wyjaśnia, jak usunąć w bezpieczny sposób przestrzeń dyskową (datastore) z Twojej infrastruktury.**


## Wymagania początkowe

* Posiadanie oferty [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/){.external}
* Dostęp do interfejsu zarządzania vSphere


## W praktyce

> [!warning]
>
> Uwaga, nie jest możliwe usunięcie **dwóch przestrzeni datastore o pojemności 300 GB lub 1,2 TB** zawartych w pakiecie. Ze względów bezpieczeństwa żądanie usunięcia datastora nie zostanie zrealizowane, jeśli na wybranej przestrzeni dyskowej znajdują się Twoje wirtualne maszyny (ich lista znajduje się w oknie potwierdzenia usunięcia datastore).
> 


Aby usunąć datastore, najpierw kliknij prawym przyciskiem myszy na wybrany zasób. Wybierz `OVHcloud`{.action}, następnie `Remove storage`{.action}.

![Wybór datastore](images/removedatastore01.png){.thumbnail}

Otworzy się okno służące do potwierdzenia usunięcia datastora. Kliknij `Next`{.action}.

![Potwierdzenie usunięcia datastore](images/removedatastore02.png){.thumbnail}

Żądanie usunięcia przestrzeni datastore jest w tym momencie przetwarzane.

![Usunięcie datastore potwierdzone](images/removedatastore03.png){.thumbnail}


Możesz monitorować postęp usuwania datastora w sekcji Ostatnie zadania.

![Zadanie monitorowania usunięcia datastore](images/removedatastore04.png){.thumbnail}


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
