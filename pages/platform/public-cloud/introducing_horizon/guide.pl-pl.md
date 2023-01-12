---
title: Prezentacja Horizon
slug: horizon
excerpt: Poznaj najważniejsze sekcje interfejsu Horizon
section: Zarządzanie w interfejsie Horizon
order: 01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 16-03-2022**

## Wprowadzenie

Interfejs Horizon, natywnie proponowany z OpenStack, został dostosowany przez OVHcloud, aby zapewnić funkcjonalności uzupełniające funkcjonalności dostępne w Panelu klienta OVHcloud.

**Poznaj najważniejsze sekcje interfejsu Horizon.**

## Wymagania początkowe

- Utworzenie [Projekt Public Cloud](https://docs.ovh.com/fr/public-cloud/create_a_public_cloud_project/) na Twoim koncie OVHcloud.
- Użytkownik [OpenStack](../tworzenie-i-usuwanie-uzytkownika-openstack/) utworzony w Twoim projekcie.

## W praktyce

### Logowanie do OpenStack Horizon

Otwórz stronę logowania do interfejsu [Horizon](https://horizon.cloud.ovh.net/auth/login/) i wprowadź wcześniej utworzone [identyfikatory OpenStack](../tworzenie-i-usuwanie-uzytkownika-openstack/), a następnie kliknij `Connect`{.action}.

Po otwarciu projektu `Public Cloud`{.action} w [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), w menu "Management Interfaces" po lewej stronie kliknij pozycję `Horizon`{.action}.

### Wybór regionu centrum danych

W przeciwieństwie do Panelu klienta OVHcloud, Horizon rozdziela Twoje usługi w zależności od regionu. Możesz wybrać region z menu w lewym górnym rogu:

![public-cloud](images/region2021.png){.thumbnail}

### Menu boczne po lewej stronie

W tym menu możesz szybko przejść do projektu i różnych związanych z nim funkcji.

![public-cloud](images/leftmenu2021.png){.thumbnail}

#### Compute

##### **Przegląd (*Overview*)**

- **Podsumowanie kwot (*Limit Summary*)**

Horizon to skrót kwot, dzięki któremu będziesz mógł zobaczyć zasoby zajęte i dostępne dla Twoich projektów:

![public-cloud](images/quotas2021.png){.thumbnail}

- **Podsumowanie dotyczące stosowania (*Usage Summary*)**

Poniżej znajduje się podsumowanie wykorzystania instancji Twojego projektu. Okres wyszukiwania można dostosować, aby ograniczyć to podsumowanie do pożądanego czasu.

![public-cloud](images/usagesummary2021.png){.thumbnail}

- **Zastosowanie (*Usage*)**

Podsumowanie Twoich « zastosowań » jest również dostępne. Jest to podsumowanie różnych usług związanych z projektem, takich jak lista instancji.

![public-cloud](images/usage2021.png){.thumbnail}

Podsumowanie można pobrać w formacie CSV, co pozwala na wyodrębnienie informacji, aby następnie można je analizować za pomocą innych narzędzi. Wystarczy kliknąć przycisk `Download CSV Summary`{.action}.

![public-cloud](images/csv2021.png){.thumbnail}

- **Instances**

Ta strona pozwala na wyświetlanie i zarządzanie instancjami. W tym przypadku możesz na przykład utworzyć nowe instancje, zatrzymać je, uzyskać dostęp do konsoli instancji, etc..

- **Images**

Wyświetl i administruj obrazami, czyli szablonami i *snapshots* przypisanymi do Twojego projektu.

- **Key Pairs**

W tej sekcji możesz utworzyć listę i utworzyć klucze SSH do łączenia się z Twoimi instancjami.

##### **Volumes**

W tym menu możesz wyświetlić i zarządzać wolumenami oraz kopiami zapasowymi i wolumenu *snapshots*.

![objętość](images/volumes2021.png){.thumbnail}

##### **Network**

Wyświetl listę i administruj sieciami oraz grupami zabezpieczeń. 

![network](images/network2021.png){.thumbnail}

##### **Orchestration**

Z tego menu możesz zarządzać kilkoma aplikacjami cloud.<br>
Więcej informacji znajdziesz w [dokumentacji OpenStack](https://docs.openstack.org/horizon/pike/user/stacks.html){.external}.

![orkiestracja](images/orchestration2021.png){.thumbnail}

#### Identity

W tym menu możesz wyświetlić informacje o Twoich projektach.

### Menu użytkownika

W prawym górnym rogu interfejsu Horizon menu użytkownika umożliwia:

- Zmienić parametry wyświetlania interfejsu.
- Pobrać plik « OpenRC » zawierający dane identyfikacyjne użytkownika.
- Wylogować się z interfejsu Horizon.

![public-cloud](images/username2021.png){.thumbnail}

## Sprawdź również

[Poznaj interfejs Public Cloud](https://docs.ovh.com/pl/public-cloud/interfejs-public-cloud/)
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.