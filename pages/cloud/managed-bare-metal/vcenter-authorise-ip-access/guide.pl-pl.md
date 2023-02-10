---
title: Autoryzacja IP, które mogą łączyć się z vCenter
slug: autoryzacja-IP-ktore-moga-laczyc-sie-z-vCenter
routes:
    canonical: 'https://docs.ovh.com/pl/private-cloud/autoryzacja-IP-ktore-moga-laczyc-sie-z-vCenter/'
section: Funkcjonalności OVHcloud
updated: 2020-11-18
---

**Ostatnia aktualizacja z dnia 18-11-2020**

## Wprowadzenie

Możesz ograniczyć dostęp do vCenter, pozwalając na łączenie się z nim tylko określonym adresom IP. 

**Dowiedz się, jak autoryzować adresy IP, które mogą łączyć się z vCenter.**

## Wymagania początkowe

* Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
* Posiadanie [infrastruktury Managed Bare Metal](https://www.ovhcloud.com/pl/managed-bare-metal/){.external} na koncie OVHcloud.

## W praktyce

Kiedy polityka dostępu do vCenter jest ograniczona, konieczne jest dodanie adresów IP, które będą mogły łączyć się z usługą.

Operacja ta przeprowadzana jest w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external-link}. W sekcji `Bare Metal Cloud`, kliknij sekcję `Managed Bare Metal`. Wybierz infrastrukturę, przejdź do zakładki `Bezpieczeństwo`, po czym kliknij `Dodaj nowy zakres adresów IP`{.action}.

![vCenter](images/restrictIP.png){.thumbnail}

Dodaj tutaj adres IP i ewentualnie jego opis, aby można go było później łatwo znaleźć na liście.

Na koniec zatwierdź operację, klikając `Dalej`{.action}. Zaznacz IP jako **Autoryzowany i wdrożony**, wówczas połączenie z vSphere będzie możliwe z tego adresu IP.

![vCenter](images/restrictIP2.JPG){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
