---
title: Autoryzacja IP, które mogą łączyć się z vCenter
updated: 2023-01-25
---

## Wprowadzenie

Dostęp do vCenter jest ograniczony wyłącznie do uprawnionych adresów IP.

**Dowiedz się, jak autoryzować adresy IP, które mogą łączyć się z vCenter.**

## Wymagania początkowe

* Dostęp do [Panelu klienta OVHcloud](/links/manager).
* Posiadanie [infrastruktury Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/) na koncie OVHcloud.

## W praktyce

Dostęp do vCenter jest domyślnie ograniczony. Należy zatem dodać adresy IP, które będą mogły łączyć się z usługą.

Operacja ta przeprowadzana jest w [Panelu klienta OVHcloud](/links/manager){.external-link}. W sekcji `Hosted Private Cloud`{.action}, kliknij sekcję `VMware`{.action}.

Wybierz infrastrukturę, przejdź do zakładki `Bezpieczeństwo`{.action}, po czym kliknij `Dodaj nowy zakres adresów IP`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

Dodaj tutaj adres IP i ewentualnie jego opis, aby można go było później łatwo znaleźć na liście.

Na koniec zatwierdź operację, klikając `Dalej`{.action}. Zaznacz IP jako **Autoryzowany i wdrożony**, wówczas połączenie z vSphere będzie możliwe z tego adresu IP.

![vCenter](images/restrictIP2.JPG){.thumbnail}

> [!primary]
>
> Ze względów bezpieczeństwa możesz przypisać do połączenia z vCenter maksymalnie 2048 adresów IP.
>

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
