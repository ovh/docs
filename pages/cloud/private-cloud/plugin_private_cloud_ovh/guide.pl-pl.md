---
title: 'Użycie wtyczki OVH w Private Cloud'
slug: wtyczka-ovh-private-cloud
excerpt: 'Dowiedz się, jak użyć wtyczki OVH w rozwiązaniu Private Cloud'
section: 'Funkcjonalności OVHcloud'
---

**Ostatnia aktualizacja z dnia 09-10-2018**

## Wprowadzenie

Wtyczka OVH w usłudze Private Cloud umożliwia dodanie w ciągu kilku minut dedykowanych zasobów do Twojej infrastruktury.

**Dowiedz się, jak korzystać z wtyczki OVH w usłudze Private Cloud.**


## Wymagania początkowe

* Posiadanie oferty [Private Cloud](https://www.ovh.pl/private-cloud/){.external}
* Dostęp do interfejsu zarządzania vSphere


## W praktyce

W trybie rozliczenia godzinowego oferowane są dwa rodzaje zasobów dedykowanych:

- hosty - serwery,
- datastores - przestrzenie dyskowe.

Z poziomu klienta WWW vSphere przejdź do części „Host and Cluster” i rozwiń drzewo po lewej stronie. Następnie przejdź do menu wtyczek w zakładce `Konfiguruj`{.action} danego centrum danych lub klastra.

![](images/addhost_01.png){.thumbnail}

Menu `Add OVH Host`{.action} dotyczy serwerów hostów. Znajdziesz w nim szczegóły techniczne dotyczące hostów i będziesz mógł nimi zarządzać.

![](images/addhost_02.png){.thumbnail}

Zamówienie dotyczące dodatkowych przestrzeni dyskowych (datastores) można złożyć w menu `Add OVH Storage`{.action}.

![](images/addstorage_02.png){.thumbnail}

Pamiętaj, że istnieje alternatywny sposób dostępu do tych menu. Możesz mianowicie kliknąć prawym przyciskiem myszy na centrum danych lub klaster infrastruktury, a następnie wybrać `OVH Private Cloud`{.action}.

![Opcja OVH Dedicated Cloud](images/rightclick.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.