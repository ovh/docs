---
title: 'Korzystanie z wtyczki OVH Network'
slug: wtyczka-ovh-network
routes:
    canonical: 'https://docs.ovh.com/pl/private-cloud/wtyczka-ovh-network/'
excerpt: 'Dowiedz się, jak korzystać z wtyczki OVH Network w usłudze Managed Bare Metal'
legacy_guide_number: '7766560'
section: 'Funkcjonalności OVHcloud'
---

**Ostatnia aktualizacja z dnia 18-11-2020**

## Wprowadzenie

Wtyczka OVH Network została stworzona przez OVH. Dzięki niej możesz bardziej precyzyjnie zarządzać wszystkimi adresami IP powiązanymi z Twoją usługą [Managed Bare Metal](https://www.https://www.ovhcloud.com/pl/managed-bare-metal//){.external}. 

**Dowiedz się, jak korzystać z wtyczki OVH Network w usłudze Managed Bare Metal.**

## Wymagania początkowe

* Posiadanie oferty [Managed Bare Metal](https://www.https://www.ovhcloud.com/pl/managed-bare-metal//){.external}
* Posiadanie bloku IP powiązanego z Twoją usługą [Managed Bare Metal](https://www.https://www.ovhcloud.com/pl/managed-bare-metal//){.external}
* Dostęp do interfejsu zarządzania vSphere

## W praktyce

Kliknij menu `Host and Cluster`{.action} i wybierz centrum danych lub klaster infrastruktury. Następnie kliknij `Manage`{.action} i `OVH Network`{.action}.

![Plugin OVH Network](images/network_01.png){.thumbnail}

Przejdź do sekcji `Summary`, w której znajdziesz wykaz Twoich bloków IP i podstawowe informacje dotyczące każdego z nich. 

![Informacje dotyczące adresów IP i bloków](images/network_02.png){.thumbnail}

W części **IP Blocks** wyszczególnione są wszystkie adresy IP Twojego bloku. Nie używaj **pięciu adresów bloku IP** zarezerwowanych do konfiguracji i zapewnienia wysokiej dostępności bloku, mianowicie:

- pierwszego adresu IP, który jest adresem Twojej sieci;
- ostatniego adresu IP, który jest adresem **broadcast**;
- przedostatniego adresu IP, który jest adresem **gateway**;
- dwóch adresów IP przed “gateway”, które są używane jako **HSRP** (Hot Standby Router Protocol) w routerach.

![Bloki IP](images/network_03.png){.thumbnail}

Aby zaktualizować informacje we wtyczce OVH, że Twoje publiczne adresy IP są już używane, konieczne jest wysłanie zapytania ARP (_arping_) z maszyny lub maszyn wirtualnych używających tych adresów. Uwaga: niektóre konfiguracje z wirtualną zaporą nie umożliwiają pobierania adresów MAC, jeśli protokół ARP nie został wskazany jako autoryzowany.

Możesz następnie skonfigurować Twoje rewersy DNS dla IP, na przykład dla serwera e-mail. Ustawienie to jest dostępne również w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} oraz w interfejsie [API OVH](https://api.ovh.com/){.external}. Kliknij trzy kropki po lewej stronie adresu IP, a następnie `Edit Reverse`{.action}.

![Przycisk Edition Reverse](images/network_04.png){.thumbnail}

Wpisz rewers, po czym zatwierdź przyciskiem `Confirm`{.action}.

![Edycja reverse](images/network_05.png){.thumbnail}

Pojawi się on wówczas po prawej stronie adresu IP, na liście adresów IP danego bloku. 

![Edycja adresów IP](images/network_06.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.