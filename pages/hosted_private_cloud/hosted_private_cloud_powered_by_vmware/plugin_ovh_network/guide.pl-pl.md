---
title: 'Korzystanie z wtyczki OVHcloud Network'
excerpt: Dowiedz się, jak korzystać z wtyczki OVHcloud Network w usłudze Private Cloud
legacy_guide_number: '7766560'
updated: 2020-07-01
---

**Ostatnia aktualizacja z dnia 11-09-2020**

## Wprowadzenie

Wtyczka OVHcloud Network umożliwia bardziej ukierunkowane zarządzanie adresami IP powiązanymi z Twoją usługą Private Cloud.

**Dowiedz się, jak korzystać z wtyczki OVHcloud Network w usłudze Private Cloud.**

## Wymagania początkowe

- Wykupienie usługi [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/){.external}.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Blok adresu IP powiązany z Twoją usługą Private Cloud.
- Dostęp do interfejsu vSphere.

## W praktyce

Po zalogowaniu się do interfejsu vSphere, wybierz swoje centrum danych w menu po lewej stronie. Przejdź do zakładki `Konfiguracja`{.action}, a następnie kliknij `Network`{.action} pod „OVHcloud” w zakładce nawigacji po lewej stronie. Wyświetli się wówczas sekcja „Network summary”.

![Network summary](images/ovhcloudplugin_01.png){.thumbnail}

Twoje bloki IP wyświetlają się tutaj wraz z podstawowymi informacjami. Kliknij blok IP, aby zobaczyć wszystkie jego adresy IP wymienione w tabeli.

![Informacje o adresach IP i blokach](images/ovhcloudplugin_02.png){.thumbnail}

Możesz sprawdzić "rewers" każdego adresu oraz adres docelowy. Niektóre adresy oznaczone są jako „Zerezerwowane”. Nie używaj **pięciu adresów bloku IP** zarezerwowanych do konfiguracji i zapewnienia wysokiej dostępności bloku, mianowicie:

- pierwszego adresu IP, który jest adresem Twojej sieci;
- ostatniego adresu IP, który jest adresem broadcast;
- przedostatniego adresu IP, który jest adresem gateway;
- dwóch adresów IP przed „gateway”, które są używane jako HSRP (Hot Standby Router Protocol) w routerach.

> [!warning]
> Niektóre konfiguracje z wirtualną zaporą nie umożliwiają śledzenia adresów MAC, jeśli protokół ARP nie został wskazany jako autoryzowany.
>

Spersonalizuj "rewers" adresu IP w tej tabeli (np. podczas konfiguracji serwera pocztowego). Kliknij trzy kropki po lewej stronie adresu IP, a następnie Edit Reverse.

![Edit Reverse button](images/ovhcloudplugin_03.png){.thumbnail}

Wprowadź „rewers” i kliknij `Potwierdź`{.action}.

Nowy „rewers” wyświetli się wówczas w tabeli.

> [!primary]
>
> Ten proces konfiguracji jest również dostępny w Twoim [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).  
> 

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com/en/](https://community.ovh.com/en/)
