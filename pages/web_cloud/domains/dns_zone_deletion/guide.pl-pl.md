---
title: "Jak usunąć strefę DNS OVHcloud?"
excerpt: "Dowiedz się, jak usunąć strefę DNS Twojej domeny z poziomu Panelu klienta OVHcloud"
updated: 2025-10-14
---

## Wprowadzenie

Strefa **D**omain **N**ame **S**ystem (**DNS**) jest plikiem konfiguracyjnym domeny. Zawiera on informacje techniczne nazywane *rekordami DNS*. Strefa DNS jest w pewnym sensie ośrodkiem prowadzącym.

Więcej informacji o strefach DNS i serwerach DNS znajdziesz w przewodnikach: 

- [Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

Może zajść konieczność usunięcia strefy DNS dla Twojej domeny z OVHcloud w następujących przypadkach (lista nie jest wyczerpująca):

- Używasz aktywnej strefy DNS dla swojej domeny u innego dostawcy niż OVHcloud.
- Nie używasz już nazwy domeny powiązanej ze strefą DNS obecną w OVHcloud.
- Przeniosłeś usługi do innego dostawcy i chcesz zrezygnować z usług OVHcloud.

> [!primary]
>
> Utworzenie / modyfikacja / usunięcie strefy DNS w [Panelu klienta OVHcloud](/links/manager) jest całkowicie darmowe.

**Dowiedz się, jak usunąć strefę DNS z OVHcloud dla Twojej domeny, korzystając z Panelu klienta OVHcloud.**

## Wymagania początkowe

- Dostęp do [panelu klienta OVHcloud](/links/manager).
- Strefa DNS w Panelu klienta OVHcloud.
- Dysponujesz wystarczającymi uprawnieniami w strefie DNS, którą chcesz usunąć. Więcej informacji znajdziesz w przewodniku "[Zarządzanie kontaktami dla usług OVHcloud](/pages/account_and_service_management/account_information/managing_contacts)".

> [!primary]
>
> Usunięcie strefy DNS nie powoduje usunięcia rekordu przypisanej do niej domeny. Nie utracisz domeny, usuwając powiązaną z domeną strefę DNS.

## W praktyce

> [!warning]
>
> Przed kontynuowaniem sprawdź, czy strefa DNS, którą chcesz usunąć, nie jest już używana przez Twoją domenę.
>
> Jeśli usuniesz aktywną strefę DNS dla Twojej domeny, spowoduje to przerwę w działaniu Twoich usług online (strona WWW, konta e-mail, etc.).
>
> Sprawdź [WHOIS](/links/web/domains-whois), czy aktywna strefa DNS Twojej domeny jest strefą obecną w OVHcloud.
>
> Jeśli domena jest aktywna w strefie DNS OVHcloud i chcesz ją zastąpić strefą DNS hostowaną gdzie indziej, zapoznaj się z naszym przewodnikiem "[Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)" przed usunięciem strefy DNS.

Kliknij poniższe zakładki, aby wyświetlić kolejno poszczególne **4** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), kliknij na swoje imię w prawym górnym rogu, a następnie kliknij `Moje rozwiązania i usługi`{.action}.
>>
>> ![Moje rozwiązania i usługi](/pages/assets/screens/control_panel/product-selection/right-menu/my-solutions-and-services.png){.thumbnail}
>>
> **Etap 2**
>>
>> W tabeli na stronie, która się wyświetli, kliknij przycisk `...`{.action} po prawej stronie strefy DNS, którą chcesz zakończyć, a następnie kliknij `Rezygnuję z usługi`{.action}.
>>
>> ![Zakończ](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-cancel-my-subscription.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na nowej stronie, która się pojawi, podaj powód swojej prośby o zakończenie oraz swoje projekty, a następnie kliknij `Zatwierdź`{.action}.
>>
>> ![Zakończ usługę](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-delete-your-service.png){.thumbnail}
>>
> **Etap 4**
>>
>> Zakończenie Twojej usługi nastąpi w **Data wejścia w życie**, która jest wskazana w tabeli "Zarządzanie moimi ofertami i usługami". Jeśli nie widzisz statusu "Planowane zakończenie usługi", odśwież stronę.
>>
>> > [!primary]
>> >
>> > Jeśli chcesz natychmiast usunąć strefę DNS ze swojego [Panelu klienta OVHcloud](/links/manager), wykonaj 4 kroki, aby złożyć prośbę o zakończenie w data wejścia w życie, a następnie skontaktuj się z obsługą OVHcloud, tworząc zgłoszenie wsparcia z [centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help).
>> > W zgłoszeniu wsparcia określ strefę DNS, która jest dotyczy, oraz wyraźnie zaznacz, że chcesz ją usunąć natychmiast, bez oczekiwania na data wejścia w życie.

## Sprawdź również

[Zarządzaj kontaktami swoich usług](/pages/account_and_service_management/account_information/managing_contacts)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modyfikacja serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Utwórz strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).