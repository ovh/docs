---
title: "Jak usunąć strefę DNS?"
excerpt: "Dowiedz się, jak usunąć strefę DNS Twojej domeny z poziomu Panelu klienta OVHcloud"
updated: 2024-06-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

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
>

**Dowiedz się, jak usunąć strefę DNS z OVHcloud dla Twojej domeny, korzystając z Panelu klienta OVHcloud.**

## Wymagania początkowe

- Dostęp do [panelu klienta OVHcloud](/links/manager).
- Strefa DNS w Panelu klienta OVHcloud.
- Dysponujesz wystarczającymi uprawnieniami w strefie DNS, którą chcesz usunąć. Więcej informacji znajdziesz w przewodniku "[Zarządzanie kontaktami dla usług OVH](/pages/account_and_service_management/account_information/managing_contacts)".

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
>

### Etap 1 - Rozpoczęcie usuwania strefy DNS OVHcloud

Aby rozpocząć usuwanie strefy DNS OVHcloud, wykonaj następujące czynności: 

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Domeny`{.action}.
4. Wybierz odpowiednią domenę lub strefę DNS.
5. Na stronie, która się wyświetli kliknij zakładkę `Strefa DNS`{.action}, aby wyświetlić tabelę zawierającą wszystkie wpisy DNS ze strefy DNS.
6. Kliknij przycisk `Usuń strefę DNS`{.action} po prawej stronie (lub poniżej tabeli w zależności od rozdzielczości ekranu).

![delete the DNS zone](images/delete-the-dns-zone.png){.thumbnail}

W oknie, które się otworzy, zapoznaj się z wiadomościami znajdującymi się w środku.

![delete the DNS zone validation](images/delete-the-dns-zone-confirmation.png){.thumbnail}

Kliknij przycisk `Zatwierdź`{.action}, aby zakończyć pierwszy etap usuwania strefy DNS.

### Etap 2 - Potwierdzenie usunięcia strefy DNS OVHcloud

Następnie, w celu potwierdzenia usunięcia strefy DNS, na adres e-mail kontaktu "[Administrator](/pages/account_and_service_management/account_information/managing_contacts)" ze strefy DNS OVHcloud zostanie wysłany e-mail.

> [!success]
>
> Jeśli nie otrzymasz wiadomości e-mail, sprawdź w swojej niechcianej wiadomości.
>

E-mail ten zawiera dwa linki ważne przez **72** godz. od momentu zakończenia etapu 1 niniejszego przewodnika.

Kliknij **link służący do walidacji**, aby kontynuować usuwanie strefy DNS OVHcloud, lub **link służący do anulowania rezerwacji**, aby zatrzymać procedurę usuwania strefy DNS OVHcloud.

> [!primary]
>
> Jeśli przekierowanie łączy nie działa, wybierz **kopiowanie/wklejanie** łącza w pasku adresu URL przeglądarki internetowej. W razie potrzeby zaloguj się ponownie do [Panelu klienta OVHcloud](/links/manager).
>

Po kliknięciu na link aktywacyjny zostaniesz przekierowany do nowej strony OVHcloud, na której zostaniesz poproszony o przyczynę(y) usunięcia strefy DNS OVHcloud.

![cancel the service](images/cancel-my-service.png){.thumbnail}

Po wypełnieniu formularza i jeśli jesteś absolutnie pewien, że chcesz trwale usunąć strefę DNS OVHcloud, kliknij przycisk `Zatwierdź`{.action} na dole strony.

Na adres e-mail kontaktu "[Administrator](/pages/account_and_service_management/account_information/managing_contacts)" strefy DNS OVHcloud zostanie wysłany ostatni e-mail z potwierdzeniem usunięcia.

## Sprawdź również

[Zarządzaj kontaktami swoich usług](/pages/account_and_service_management/account_information/managing_contacts)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modyfikacja serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Utwórz strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).