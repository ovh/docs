---
title: 'Instalacja kilku stron WWW na jednym hostingu'
excerpt: 'Dowiedz się, jak zainstalować kilka stron WWW na hostingu'
updated: 2024-10-08
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie 

Na jednym hostingu możesz zainstalować kilka stron WWW, nawet jeśli domeny nie są zarejestrowane w OVHcloud.

**Dowiedz się, jak zainstalować kilka stron WWW na Twoim hostingu.**

### Podsumowanie

- 1 : [Zarządzanie opcją MultiSite](#multisite-menu)
- 2 : [Dodanie domeny lub subdomeny](#add-domain)
    - 2.1 : [Dodaj domenę zarejestrowaną w OVHcloud](#add-ovhcloud-domain)
    - 2.2 : [Dodaj domenę zewnętrzną](#add-external-domain)
    - 2.3 : [Diagnostyka domen](#diagnostic-domain)
- 3 : [Umieszczenie strony WWW online](#site-online)

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu OVHcloud](/links/web/hosting){.external}.
- Zarejestrowana domena lub kilka [domen](/links/web/domains){.external}.
- Możliwość modyfikacji konfiguracji Twoich domen ([strefy DNS](/pages/web_cloud/domains/dns_zone_edit))
- Dostęp do [Panelu klienta OVHcloud](/links/manager){.external}.

## W praktyce

> [!primary]
>
> Większość ofert [hostingu OVHcloud](/links/web/hosting){.external} dysponuje opcją tworzenia spersonalizowanego(ych) adresu(ów) e-mail powiązanego z Twoją domeną.
> Ta opcja e-mail może zostać włączona dla **jednej** domeny. Oznacza to, że jeśli korzystasz z opcji *MultiSite* dla kilku różnych domen, możesz włączyć tę opcję tylko dla jednej domeny.
> Zapoznaj się z [przewodnikiem](/pages/web_cloud/web_hosting/activate-email-hosting), aby uzyskać więcej informacji na temat aktywacji tej opcji.
>

### Etap 1: zarządzanie opcją MultiSite <a name="multisite-menu"></a>

Po pierwsze, zaloguj się do Twojego [Panelu klienta OVHcloud](/links/manager){.external} i wybierz `Web Cloud`{.action}. Kliknij `Hosting`{.action}, wybierz odpowiednią ofertę, następnie wybierz zakładkę `MultiSite`{.action}.

Tabela, która się wyświetla zawiera listę wszystkich domen i subdomen dodanych do Twojego rozwiązania hostingowego. Niektóre z nich zostały utworzone automatycznie podczas instalacji Twojego hostingu.

> [!primary]
>
> Jeśli chcesz przenieść Twoją stronę WWW i uniknąć przerwy w działaniu usługi, postępuj zgodnie z [krokiem 3: umieszczenie strony WWW online](#site-online).
>

![MultiSite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/tab.png){.thumbnail}

### Etap 2: dodanie domeny lub subdomeny <a name="add-domain"></a>

Aby dodać nową domenę lub subdomenę do Twojego hostingu, kliknij przycisk `Operacje`{.action} po lewej stronie ekranu, a następnie `Dodaj domenę lub subdomenę`{.action} i wybierz domenę w oknie, które się wyświetli.

![akcje](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/actions-menu.png){.thumbnail}

- **Dodaj domenę zarejestrowaną w OVHcloud**:

W tym miejscu wyświetlają się jedynie domeny OVHcloud, dla których jesteś [kontaktem technicznym i/lub administratorem w Panelu klienta](/pages/account_and_service_management/account_information/managing_contacts). Wybierz jedną domenę z listy i kliknij `Dalej`{.action}. Przejdź następnie do [etapu 2.1: dodanie domeny zarejestrowanej w OVHcloud](#add-ovhcloud-domain).

- **Dodaj domenę zewnętrzną**:

W przypadku nazwy domeny zewnętrznej (inny identyfikator klienta) lub zewnętrznej dla OVHcloud (inny dostawca domeny) wybierz `Dodaj domenę zewnętrzną`{.action}, a następnie kliknij `Dalej`{.action}. Przejdź następnie do [etapu 2.2: „dodanie domeny zewnętrznej”](#add-external-domain).

![MultiSite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-ovh-step-1.png){.thumbnail}

#### Etap 2.1: dodaj domenę zarejestrowaną w OVHcloud <a name="add-ovhcloud-domain"></a>

> [!warning]
> Ten etap ma zastosowanie jedynie, jeśli zaznaczyłeś opcję "Dodaj domenę zarejestrowaną w OVHcloud". Domena lub jej strefa DNS muszą znajdować się **w Panelu klienta**. W przypadku domen zewnętrznych przejdź do [etap 2.2: dodaj domenę zewnętrzną](#add-external-domain){.external}.

Teraz spersonalizuj dodanie domeny lub subdomeny. W zależności od wykupionego w OVHcloud hostingu niektóre z oferowanych elementów mogą być dostępne, inne zaś nie.

> [!primary]
> Aby dodać subdomenę, najpierw wybierz domenę główną z listy (przykład: domain.tld). Na kolejnym etapie podasz subdomenę (przykład: **blog**.domain.tld).

![MultiSite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-ovh-step-2.png){.thumbnail}

|Informacja|Opis|
|---|---|
|Domena|Nazwa wybranej domeny wprowadzana jest automatycznie. Możesz dodać subdomenę (np. **blog**.domain.tld) i jednocześnie utworzyć jej wersję wraz z WWW (np. **www.blog**.domain.tld). Domena ta stanie się adresem strony WWW, którą chcesz umieścić w Internecie.|
|Katalog główny|Określ folder na przestrzeni dyskowej, do której wskazuje domena. Pliki strony WWW będą musiały zostać umieszczone w Internecie. Na przykład, dla blog.domain.tld katalogiem głównym może być "blog". Jeśli folder nie istnieje, zostanie automatycznie utworzony.|
|SSL|Umożliwia korzystanie z bezpiecznego połączenia (HTTPS: //) z wybraną nazwą domeny. Dowiedz się więcej na [naszej stronie SSL](/links/web/hosting-options-ssl){.external}. Aktywując SSL i CDN (Content Delivery Network), możesz również użyć protokołu **HTTP2** (jest on włączony domyślnie w naszym centrum danych w Gravelines).|
|Włącz CDN|Umożliwia aktywację CDN dla wybranej domeny (zapisywanie w pamięci podręcznej elementów statycznych Twojej strony WWW, takich jak obrazy). Dowiedz się więcej na [naszej stronie CDN](/links/web/hosting-options-cdn){.external}. Aktywując SSL i CDN, możesz również użyć protokołu **HTTP2** (jest on włączony domyślnie w naszym centrum danych w Gravelines).|
|Krajowy adres IP|Umożliwia korzystanie z geolokalizowanego adresu IP (w wymienionych krajach) dla wybranej domeny. Dowiedz się więcej na [naszej stronie IP](/links/web/hosting-options){.external}.|
|Włącz firewall|Umożliwia aktywację zapory (analiza zapytań) dla danej domeny. Dowiedz się więcej na [naszej stronie ModSecurity](/links/web/hosting-options){.external}.|
|Rozdzielone logi|Umożliwia wydzielenie logów dotyczących wybranej domeny.  Wybierz z listy nazwę domeny, która będzie stanowiła dostęp do wydzielonych logów. Dowiedz się więcej na [naszej stronie szczegółowych](/links/web/hosting-traffic-analysis){.external} statystyk.|

> [!warning]
>
> Nie będziesz mógł włączyć oddzielnych logów dla domeny zewnętrznej. Ta opcja jest dostępna tylko dla domen zarejestrowanych w OVHcloud.
>

Po uzupełnieniu informacji, kliknij przycisk `Dalej`{.action}{.action}. Następnie sprawdź podsumowanie, które się wyświetli.

![MultiSite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-ovh-step-3.png){.thumbnail}

Po wybraniu domeny zarejestrowanej w OVHcloud możesz automatycznie lub ręcznie zmienić jej konfigurację DNS:

- **w przypadku automatycznej konfiguracji DNS**: zaznacz kratkę `Konfiguracja automatyczna (zalecana)`{.action};
- **w przypadku ręcznej konfiguracji DNS**: usuń zaznaczenie w kratce `Konfiguracja automatyczna (zalecana)`{.action}, następnie pobierz informacje odnośnie zmian, które się wyświetlają. Jeśli chcesz przeprowadzić tę konfigurację, skorzystaj z dokumentacji ["Modyfikacja strefy DNS OVHcloud"](/pages/web_cloud/domains/dns_zone_edit){.external}.

Kliknij przycisk `Zatwierdź`{.action}, aby rozpocząć dodawanie domeny. Może do potrwać do godziny. Efekty modyfikacji domeny staną się widoczne po upływie 4-24 godzin ze względu na niezbędny czas propagacji.

Po dodaniu domeny przejdź do [etapu 3: umieszczenie strony WWW online](#site-online).

#### Etap 2.2: dodaj domenę zewnętrzną <a name="add-external-domain"></a>

 Ten etap ma zastosowanie jedynie, jeśli zaznaczyłeś opcję Dodaj domenę zewnętrzną.
 
 Twoja domena nie jest zarejestrowana w OVHcloud **lub** nie jest zarejestrowana na **Twoim** koncie OVHcloud. 

 > Przed dodaniem strony podpiętej w opcji MultiSite lepiej jest zmodyfikować strefę DNS domeny zewnętrznej.
 >
 > Modyfikacja konfiguracji domeny zewnętrznej (jej strefy DNS) powinna zostać przeprowadzona w interfejsie dostawcy zarządzającego domeną. Jeśli chodzi o OVHcloud, skorzystaj z naszej dokumentacji ["Modyfikacja strefy DNS OVHcloud"](/pages/web_cloud/domains/dns_zone_edit){.external}. Efekty modyfikacji domeny staną się widoczne po upływie 1-24 godzin ze względu na niezbędny czas propagacji.
>
> Poniżej znajdziesz 2 elementów do zmiany konfiguracji DNS Twojej zewnętrznej domeny:
>
> |Pole|Gdzie znaleźć informację?|Działania|
> |---|---|---|
> |TXT|Zakładka `MultiSite`{.action}, następnie kliknij `Konfiguracja tokena ovhcontrol`{.action}|Pozwala OVHcloud upewnić się, że dodanie każdej domeny zewnętrznej jest uprawnione. Utwórz pole TXT z subdomeną ovhcontrol (na przykład ovhcontrol.domain.tld) w strefie DNS, która ma uprawnienia do dodawania domeny.<br></br>Pamiętaj, że jeśli chcesz dodać `blog.domain.tld`, powinieneś utworzyć rekord dla subdomeny `ovhcontrol.domain.tld` i nie `ovhcontrol.blog.domain.tld`.<br></br>Aby odnaleźć domenę, znajdziesz [serwery DNS](/pages/web_cloud/domains/dns_server_edit), z którymi powiązana jest Twoja domena. Zatwierdź tylko domenę główną, nie wszystkie subdomeny.|
>
> ![MultiSite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/find-token.png){.thumbnail}
>
> |Pole|Gdzie znaleźć informację?|Działania|
> |---|---|---|
> |A i AAAA|Zakładka `Informacje ogólne`{.action}, następnie **IPv4** i **IPv6**|Umożliwia Twojej domenie wyświetlanie strony WWW, którą zamieścisz w Internecie na Twoim hostingu. Przypisz domenę lub subdomenę do adresu IP hostingu.|
>
> ![MultiSite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>

 Teraz spersonalizuj dodanie domeny. Niektóre opcje zawarte w Twojej usłudze hostingu nie mogą być aktywowane podczas tej operacji. Aby je aktywować, zakończ operację i zmodyfikuj ustawienia opcji MultiSite, kiedy ta zostanie dodana.

|Informacja|Opis|
|---|---|
|Domena|Wpisz nazwę domeny, której chcesz używać. Dodaj subdomenę (np. **blog**.domain.tld) i utwórz jednocześnie jej wersję wraz z WWW (np. **www.blog**.domain.tld). Domena ta będzie odpowiadała adresowi strony WWW, którą chcesz umieścić w Internecie. Pamiętaj, że musisz mieć uprawnienia do modyfikacji konfiguracji domeny (jej strefy DNS), aby proces dodania domeny został ukończony.|
|Katalog główny| Określ folder na przestrzeni dyskowej, do której wskazuje domena. Pliki strony WWW będą musiały zostać umieszczone w Internecie. Na przykład, dla blog.domain.tld katalogiem głównym może być "blog". Jeśli folder nie istnieje, zostanie automatycznie utworzony.|
|Włącz obsługę IPv6|Umożliwia aktywację protokołu IPv6 dla danej domeny. Dowiedz się więcej na [naszej stronie IP](/links/web/hosting-options){.external}.|

Po uzupełnieniu informacji, kliknij przycisk `Dalej`{.action}{.action}. Następnie sprawdź podsumowanie, które się wyświetli.

![MultiSite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-external-step-2.png){.thumbnail}

Dodanie domeny zewnętrznej wymaga obowiązkowej dodatkowej weryfikacji. Dzięki temu możemy upewnić się, że dodanie domeny zewnętrznej jest uprawnione. Pojawi się komunikat, w którym zostaniesz poproszony o zmianę konfiguracji DNS domeny.

![MultiSite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}

Zanotuj elementy, które się wyświetlą, następnie kliknij przycisk `Zatwierdź`{.action}. Domena jest dodana tymczasowo, abyś mógł zmodyfikować jej konfigurację DNS.

> [!warning]
>
> Aby poprawnie dodać domenę, należy **wykonać** te zmiany. W przeciwnym razie dodanie Twojej domeny zostanie anulowane.
>
> Wpisy DNS typu **A** i **TXT** muszą być obowiązkowo umieszczone w aktywnej strefie DNS Twojej domeny, aby dodać je do Twojego hostingu. Opcjonalne są tylko wpisy DNS typu **AAAA**. 
>

#### Etap 2.3: diagnostyka Twoich domen <a name="diagnostic-domain"></a>

W tabeli w zakładce `MultiSite` kolumna `Diagnostyka` informuje, czy Twoja domena wskazuje poprawnie na powiązany hosting. Dzięki temu można szybko sprawdzić, czy konfiguracja DNS Twojej domeny na hostingu jest prawidłowa. W ten sposób ta kolumna pomaga zidentyfikować i rozwiązać ewentualne problemy z wskazywaniem. Dla każdej domeny dostępne są trzy wyniki diagnostyki:

- `A/AAAA` zielony
- `A/AAAA` żółty
- `A/AAAA` szary

##### A/AAAA zielony

![multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/diagnostic-green-info.png){.thumbnail}

Jeśli ikona `A/AAAA` jest zielona w kolumnie `Diagnostyka`, oznacza to, że rekord **A** (dla adresów IPv4) i/lub rekord **AAAA** (dla adresów IPv6) domeny wskazuje poprawnie adres IP hostingu. Konfiguracja DNS Twojej domeny jest zatem zgodna z konfiguracją umożliwiającą współpracę z Twoim hostingiem.

##### A/AAAA żółty

![multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/diagnostic-yellow-info.png){.thumbnail}

Jeśli ikona `A/AAAA` jest żółta w kolumnie `Diagnostyka`, oznacza to, że rekord **A** (IPv4) i/lub **AAAA** (IPv6) domeny wskazuje na adres IP, ale nie jest to adres hostingu, z którego sprawdzasz kolumnę `Diagnostyka`.
Kliknij ikonę żółtego `A/AAAA`, aby uzyskać więcej informacji. Pojawi się następujący komunikat:

![multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/diagnostic-yellow-popup.png){.thumbnail}

Aby rozwiązać problemy z przekierowaniem DNS Twojej domeny i upewnić się, że wskazuje poprawnie na wybrany hosting, postępuj zgodnie z instrukcjami zawartymi w przewodniku "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

##### A/AAAA szary

![multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/diagnostic-grey-info.png){.thumbnail}

Jeśli ikona `A/AAAA` jest szara w kolumnie `Diagnostyka`, oznacza to, że nazwa domeny nie wskazuje obecnie żadnego adresu IP i nie skonfigurowano żadnego rekordu **A** ani **AAAA** dla tej nazwy domeny.
Kliknij szarą ikonę `A/AAAA`, aby uzyskać więcej informacji. Pojawi się następujący komunikat:

![multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/diagnostic-grey-popup.png){.thumbnail}

Aby dodać rekordy **A** lub **AAAA** i poprawnie skonfigurować domenę, postępuj zgodnie z instrukcjami zawartymi w przewodniku "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

### Etap 3: umieszczenie strony WWW online <a name="site-online"></a>

Po dodaniu domeny wystarczy umieścić w Internecie powiązaną z nią stronę WWW. Przeprowadź tę operację w katalogu głównym, który zdefiniowałeś na poprzednim etapie.

Aby wesprzeć Cię w tym procesie, możesz skorzystać z gotowej do użycia struktury strony WWW, która jest dostępna za 1 kliknięciem od OVHcloud. Strona zostanie wówczas automatycznie zainstalowana w uprzednio skonfigurowanym katalogu głównym. O modułach dowiesz się więcej z przewodnika [„Automatyczna instalacja strony WWW za pomocą modułu CMS”](/pages/web_cloud/web_hosting/cms_install_1_click_modules){.external}. 

Jeśli chcesz zainstalować ręcznie Twoją stronę WWW, przygotuj pliki, a następnie umieść je online w odpowiednim katalogu głównym na przestrzeni dyskowej. Dowiesz się więcej z przewodnika [„Automatyczna instalacja strony WWW za pomocą modułu CMS”](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online){.external}.

> [!primary]
>
> Jeśli chcesz dodać kilka stron WWW, powtórz ten etap.
>
> Zalecamy nie instalować na jednym hostingu zbyt wielu stron. Im większa liczba zainstalowanych stron, tym większe zużycie przypisanych do danego hostingu zasobów. [Na stronie z ofertą hostingu WWW](/links/web/hosting){.external} znajdziesz liczbę zalecanych stron WWW, które możesz zainstalować na Twojej przestrzeni dyskowej.
>

## Sprawdź również

[Automatyczna instalacja strony WWW za pomocą modułu CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules){.external}

[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit){.external}

[Uruchomienie strony WWW na Twoim hostingu](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online){.external}

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).