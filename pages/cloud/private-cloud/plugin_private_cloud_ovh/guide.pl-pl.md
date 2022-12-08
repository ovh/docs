---
title: 'Użycie wtyczki OVHcloud'
slug: wtyczka-ovh-private-cloud
excerpt: 'Dowiedz się, jak użyć wtyczki OVHcloud w rozwiązaniu Private Cloud'
section: 'Funkcjonalności OVHcloud'
---

**Ostatnia aktualizacja z dnia 15-11-2021**

## Wprowadzenie

Wtyczka OVHcloud w usłudze Private Cloud umożliwia dodanie w ciągu kilku minut dedykowanych zasobów do Twojej infrastruktury.

**Dowiedz się, jak korzystać z wtyczki OVHcloud w usłudze Private Cloud.**

## Wymagania początkowe

* Posiadanie oferty [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/){.external}
* Dostęp do interfejsu zarządzania vSphere

## W praktyce

W trybie rozliczenia godzinowego oferowane są dwa rodzaje zasobów dedykowanych:

- hosty - serwery,
- datastores - przestrzenie dyskowe.

Z poziomu klienta WWW vSphere przejdź do części „Host and Cluster” i rozwiń drzewo po lewej stronie. Następnie przejdź do menu wtyczek w zakładce `Konfiguruj`{.action} danego centrum danych lub klastra.

Menu `Add Host`{.action} dotyczy serwerów hostów. Znajdziesz w nim szczegóły techniczne dotyczące hostów i będziesz mógł nimi zarządzać.

![OVHcloud plugin - add host](images/Plugin01.jpg){.thumbnail}

Zamówienie dotyczące dodatkowych przestrzeni dyskowych (datastores) można złożyć w menu `Add Storage`{.action}.

![OVHcloud plugin - add storage](images/Plugin02.jpg){.thumbnail}

Pamiętaj, że istnieje alternatywny sposób dostępu do tych menu. Możesz mianowicie kliknąć prawym przyciskiem myszy na centrum danych lub klaster infrastruktury, a następnie wybrać `OVHcloud`{.action}.

![OVHcloud Hosted Private Cloud Option](images/Plugin03.jpg){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
