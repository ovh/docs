---
title: 'Zamów SSL Gateway'
excerpt: 'Zabezpiecz połączenia ze swoją stroną www'
updated: 2024-09-30
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

SSL Gateway został zaprojektowany tak, abyś mógł korzystać z certyfikatu SSL dla Twojej domeny i usługi hostingowej (VPS, serwer mail, serwer dedykowany, etc.).

> [!warning]
>
> Certyfikaty SSL Gateways nie są kompatybilne z ofertami [hostingu OVHcloud](/links/web/hosting). Jeśli chcesz skorzystać z certyfikatu SSL dla tego typu oferty, zapoznaj się z naszym przewodnikiem "[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting) ".
>

**Dowiedz się, jak zamówić SSL Gateway.**

## Wymagania początkowe

- Dysponowanie aktywną [domeną](/links/web/domains) lub subdomeną.
- Dysponowanie dostępem do strefy DNS tej domeny.

## W praktyce

## Zamówienie

Aby zamówić ofertę SSL Gateway, [kliknij tutaj](/links/web/ssl-gateway).

Wybierz ofertę, następnie kliknij na `Zamów`{.action}.

![order ssl gateway](images/configure-my-ssl-gateway.png){.thumbnail}

Na nowej stronie, która się wyświetli, wpisz w formularzu `Wyszukaj domenę`{.action} nazwę domeny lub subdomeny, następnie kliknij ikonę lupy po prawej stronie.

> [!warning]
>
> - Oferta Bezpłatny: dozwolone są tylko domeny do 3 poziomów (www.domain.tld).
>
> - Oferta Advanced : dozwolone są nazwy domen 4. i wyższego poziomu (blog.www.domain.tld).
>

Nasz system wykryje automatycznie adres lub adresy IP Twojej strony www skonfigurowane dla Twojej domeny lub subdomeny. Jeśli dysponujesz kilkoma adresami IP, wybierz jeden.

> [!warning]
>
> - Jeśli Twoja strona WWW korzysta z kilku adresów IP, przy składaniu zamówienia będziesz mógł wybrać tylko jeden adres IP.
> - Jeśli posiadasz ofertę Advanced, możesz dodać do niej do 2 dodatkowych adresów IP z poziomu [Panelu klienta OVHcloud](/links/manager).
>

Następnie wybierz spośród 2 dostępnych lokalizacji centrum danych, w którym chcesz zainstalować SSL Gateway.

Jeśli chcesz i jest to dostępne podczas składania zamówienia, zaznacz kratkę `Zarządzam strefą DNS tej domeny i upoważniam OVHcloud do automatycznej modyfikacji wymaganego rekordu DNS`{.action}. Strefa DNS przypisana do Twojej domeny lub subdomeny zostanie automatycznie zaktualizowana o adres IP usługi SSL Gateway.

> [!warning]
>
> Modyfikacja strefy DNS może potrwać do 24 godzin przed uruchomieniem, ze względu na pamięć podręczną dostawców usług internetowych.
>

Sprawdź, czy wszystkie wybrane przez Ciebie opcje są poprawne na stronie zamówienia, następnie kliknij `Dalej`{.action}.

Na koniec postępuj zgodnie z instrukcjami zawartymi w zamówieniu.

### Konfiguracja strefy DNS

Po zrealizowaniu zamówienia, jeśli nie zaznaczyłeś pola wyboru `Zarządzam strefą DNS tej domeny i upoważniam OVHcloud do automatycznej modyfikacji wymaganego rekordu DNS`{.action}, otrzymasz e-mail z prośbą o przekierowanie Twojej domeny lub subdomeny na infrastrukturę OVHcloud w ciągu 3 dni.

> [!warning]
>
> Jeśli nie wprowadzisz zmian w strefie DNS w ciągu 3 dni, zamówienie zostanie anulowane.
>

> [!FAQ]
>
> Przypadek 1: strefa DNS jest zarządzana przez współdzielone serwery DNS OVHcloud.
>>
>> - Jeśli jesteś kontaktem *administracyjnym* lub *technicznym* dla tej strefy DNS, zmodyfikuj ją w [Panelu klienta OVHcloud](/links/manager).
>> - Jeśli nie jesteś kontaktem *administracyjnym* lub *technicznym* dla tej strefy DNS, skontaktuj się z osobą, która może wprowadzić zmiany.
>>
>> Zapoznaj się z instrukcjami w przewodniku "[Tworzenie strefy DNS OVHcloud dla domeny](/pages/web_cloud/domains/dns_zone_create)", jeśli jest to wymagane.
>>
>
> Przykład 2: Twoja strefa DNS nie jest zarządzana przez współdzielone serwery DNS OVHcloud.
>>
>> - W tym przypadku wystarczy zmienić adres IP w strefie DNS u Twojego dostawcy lub na serwerze dedykowanym.
>>
>

Po zaakceptowaniu zmian w naszej infrastrukturze otrzymasz e-mail z potwierdzeniem.

> [!warning]
>
> Modyfikacja strefy DNS może potrwać do 24 godzin przed uruchomieniem, ze względu na pamięć podręczną dostawców usług internetowych.
>

## Sprawdź również
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).