---
title: "Wszystko o serwerach DNS"
excerpt: "Sprawdź rolę serwerów DNS, ich zawartość oraz sposób działania z domeną"
updated: 2024-06-17
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Skrót **DNS** oznaczający **D**omain **N**ame **S**ystem to zbiór elementów (serwery DNS, strefy DNS, etc.) pozwalających na dopasowanie nazwy domeny do adresu IP.

**Dowiedz się więcej o rolach serwerów DNS, ich zawartości oraz ich sposobie działania z nazwą domeny.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## W praktyce

### Rola serwerów DNS

Wszystkie **serwery DNS** tworzą razem sieć DNS.

Ta sieć DNS ułatwia użytkownikom dostęp do Internetu i różnych usług z nim związanych (strony WWW, usługi poczty elektronicznej, itp.).

Umożliwiają one w szczególności korzystanie z [domen](/links/web/domains) w celu uzyskania dostępu do ulubionej strony WWW bez konieczności zachowywania adresu IP serwera, na którym hostowana jest ta strona.

![DNS resolution](/pages/assets/schemas/dns/dns-resolution.png){.thumbnail}

Istnieją 4 rodzaje serwerów DNS.

Zapoznaj się z poniższą tabelą przedstawiającą 4 typy serwerów DNS i ich interakcje. Przykłady podane w tabeli pochodzą z zapytania DNS wysyłanego z przeglądarki internetowej w celu sprawdzenia adresu IP strony internetowej *domain.tld*.

|Typ serwera DNS|Opis|Przykład|
|---|---|---| 
|Resolver DNS (lub DNS recursive)|Pierwszy serwer, który otrzymuje zapytanie DNS od klienta (przeglądarka internetowa, program pocztowy, etc.). Ten etap jest reprezentowany przez etap **1** schematu powyżej. Ten serwer pełni rolę bramy pomiędzy klientem a pozostałą częścią sieci DNS. Odpytuje on pozostałe trzy typy serwerów DNS, dopóki nie pobierze adresu IP żądanego przez zapytanie DNS z referencyjnego serwera DNS. Klient wysyła zapytanie DNS, aby poznać adres IP domeny *domain.tld*. |Przeglądarka internetowa wysyła zapytanie DNS, aby poznać adres IP domeny *domain.tld*. Dzięki temu znasz serwer, na którym hostowana jest strona WWW powiązana z domeną *domain.tld*.|
|Główny serwer DNS (DNS root)|Zawiera katalog wszystkich TLD (nazwy domen najwyższego poziomu, takie jak *.com*, *.net*, *.fr*, etc.). Polecenie resolwer DNS wskaże adres serwera DNS TLD odpowiadający rozszerzeniu obecnemu w żądaniu DNS zażądanym przez klienta (kroki **2** i **3** powyższego schematu).|Resolwer DNS przekazuje zapytanie DNS odebrane dla domeny *domain.tld* do głównego serwera DNS i w odpowiedzi otrzymuje adres serwera DNS TLD zarządzającego rozszerzeniem *.tld*.|
|Serwery DNS rozszerzeń/nazwy domen najwyższego poziomu (DNS TLD)|Zawiera katalog nazw domen dla danego rozszerzenia. Polecenie resolwera DNS wskaże adres referencyjnego serwera DNS odpowiadający nazwie domeny obecnej w zapytaniu DNS zażądanym przez klienta (kroki **4** i **5** powyższego schematu).|Następnie resolwer DNS przekazuje zapytanie DNS, które otrzymał dla *domain.tld* do serwera DNS TLD zarządzającego rozszerzeniami *.tld* i otrzymuje w odpowiedzi adres referencyjnego serwera DNS zarządzającego strefą DNS domeny *domain.tld*.|
|Referencyjne serwery DNS (Authoritative DNS)|Ostatni serwer DNS zapytany przez rozwiązanie DNS (kroki **6** i **7** powyższego schematu). Zawiera strefę DNS aktywną dla nazwy domeny obecnej w żądaniu DNS zgłoszonym przez klienta. Poniżej znajdziesz zawartość tego typu serwera DNS, którą opiszemy w dalszej części tego przewodnika.|Następnie resolwer DNS przekazuje zapytanie DNS, które otrzymał dla *domain.tld* do referencyjnego serwera DNS, który zarządza strefą DNS domeny *domain.tld* i otrzymuje w odpowiedzi adres IP (przykład 203.0.113.0) serwera hostującego stronę www dla domeny *domain.tld*.|

Po pobraniu przez program rozpoznawania nazw DNS adresu IP serwera wyszukiwania za pośrednictwem zapytania DNS żądanego przez klienta, zwraca on ten adres IP klientowi (krok **8** z powyższego schematu).

Następnie klient wysyła kolejne zapytanie bezpośrednio do serwera skojarzonego z adresem IP uzyskanym dzięki rozpoznawaniu DNS (etap **9** z powyższego schematu). Dzięki temu użytkownik może zalogować się lub pobrać elementy potrzebne do rozwiązania tego drugiego żądania (etap **10** z powyższego schematu). W podanym przykładzie klient (przeglądarka internetowa) odpytuje serwer o adresie IP 203.0.113.0, aby pobrać treści do wyświetlenia dla strony www *domain.tld*.

Zapoznaj się z naszym przewodnikiem "[Modyfikacja serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)", jeśli chcesz wykonać tę akcję dla domeny zarejestrowanej w OVHcloud.

### Treść serwera DNS (Authoritative)

**Serwer DNS (Authoritative)** zawiera katalog nazw domen z różnymi rozszerzeniami (TLD).

Dla każdej nazwy domeny zawartej w katalogu przypisana jest **strefa DNS** zawierająca konfigurację DNS, która zostanie zastosowana do nazwy domeny.

Strefa DNS zawiera informacje techniczne nazywane *rekordami DNS*. Strefa DNS jest jak nagłówek.

> [!success]
>
> - Więcej informacji na temat stref DNS znajdziesz w przewodniku "[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information) ".
> - Zapoznaj się z przewodnikiem dotyczącym [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records), aby lepiej zrozumieć całość.
>

Oznacza to, że należy zadeklarować **serwery DNS (Authoritative)** (u rejestratora domeny), aby korzystać ze strefy DNS, którą hostują.

![DNS](/pages/assets/schemas/dns/dns-server.png){.thumbnail}

### Działanie serwera DNS (Authoritative) z nazwą domeny

#### Deklaracja serwerów DNS (Authoritative) u rejestratora domeny

Aby strefa DNS skojarzona z nazwą domeny znajdującą się w katalogu serwera DNS była aktywna, ten serwer DNS musi zostać zadeklarowany u rejestratora domeny.

Jako środek ostrożności należy zadeklarować u rejestratora domeny co najmniej 2 **serwery DNS (Authoritative)** (podstawowy serwer DNS i zapasowy serwer DNS). Oba działają w taki sam sposób. Jeśli jednak jeden z serwerów zareaguje szybciej, zostanie on zapytany w pierwszej kolejności przez serwery DNS. Jeśli jeden z serwerów nie odpowiada lub przestał odpowiadać, inny serwer DNS odpowiada na zapytanie DNS.

Niektórzy dostawcy DNS proponują czasem więcej niż 2 **serwery DNS (Authoritative)** do zadeklarowania w Twojej domenie. W takim przypadku wprowadź wszystkie serwery DNS proponowane przez Twojego dostawcę DNS.

## Sprawdź również

[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information).

[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records).

[Zmień serwery DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit).

[Modyfikuj strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).