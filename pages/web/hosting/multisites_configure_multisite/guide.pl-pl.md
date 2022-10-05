---
title: 'Instalacja kilku stron WWW na jednym hostingu'
slug: konfiguracja-multisite-na-hostingu
excerpt: 'Dowiedz się, jak zainstalować kilka stron WWW na hostingu'
section: 'Pierwsze kroki'
order: 03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 22-08-2022**

## Wprowadzenie

Na jednym hostingu możesz zainstalować kilka stron WWW, nawet jeśli domeny nie są zarejestrowane w OVHcloud.

**Dowiedz się, jak zainstalować kilka stron WWW na Twoim hostingu.**

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external}.
- Zarejestrowana domena lub kilka [domen](https://www.ovhcloud.com/pl/domains/){.external}.
- Możliwość modyfikacji konfiguracji Twoich domen ([strefy DNS](../../domains/hosting_www_jak_edytowac_strefe_dns/#zrozumienie-pojecia-dns))
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

### Etap 1: zarządzanie opcją MultiSite

Po pierwsze, zaloguj się do Twojego [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i wybierz `Web Cloud`{.action}. Kliknij `Hosting`{.action}, wybierz odpowiednią ofertę, następnie wybierz zakładkę `MultiSite`{.action}.

Tabela, która się wyświetla zawiera listę wszystkich domen i subdomen dodanych do Twojego rozwiązania hostingowego. Niektóre z nich zostały utworzone automatycznie podczas instalacji Twojego hostingu.

> [!primary]
>
> Jeśli chcesz przenieść Twoją stronę WWW i uniknąć przerwy w działaniu usługi, postępuj zgodnie z [krokiem 3: umieszczenie strony WWW online](#site-online).
>

![MultiSite](images/access-multisite-ovh.png){.thumbnail}

### Etap 2: dodanie domeny lub subdomeny

Aby dodać nową domenę lub subdomenę do Twojego hostingu, kliknij przycisk `Operacje`{.action} po lewej stronie ekranu, a następnie `Dodaj domenę lub subdomenę`{.action} i wybierz domenę w oknie, które się wyświetli.

![akcje](images/actions-multisite-ovh.png){.thumbnail}

- **Dodaj domenę zarejestrowaną w OVHcloud**:

W tym miejscu wyświetlają się jedynie domeny OVHcloud, dla których jesteś [kontaktem technicznym i/lub administratorem w Panelu klienta](../../customer/zarzadzanie_kontaktami/). Wybierz jedną domenę z listy i kliknij `Dalej`{.action}. Przejdź następnie do [etapu 2.1: dodanie domeny zarejestrowanej w OVHcloud](#add-ovhcloud-domain).

- **Dodaj domenę zewnętrzną**:

W przypadku nazwy domeny zewnętrznej (inny identyfikator klienta) lub zewnętrznej dla OVHcloud (inny dostawca domeny) wybierz `Dodaj domenę zewnętrzną`{.action}, a następnie kliknij `Dalej`{.action}. Przejdź następnie do [etapu 2.2: „dodanie domeny zewnętrznej”](#add-external-domain).

![MultiSite](images/add-multisite-step1.png){.thumbnail}

#### Etap 2.1: dodaj domenę zarejestrowaną w OVHcloud <a name="add-ovhcloud-domain"></a>

> [!warning]
> Ten etap ma zastosowanie jedynie, jeśli zaznaczyłeś opcję "Dodaj domenę zarejestrowaną w OVHcloud". Domena lub jej strefa DNS muszą znajdować się **w Panelu klienta**. W przypadku domen zewnętrznych przejdź do [etap 2.2: dodaj domenę zewnętrzną](#add-external-domain){.external}.

Teraz spersonalizuj dodanie domeny lub subdomeny. W zależności od wykupionego w OVH hostingu niektóre z oferowanych elementów mogą być dostępne, inne zaś nie.

> [!primary]
> Aby dodać subdomenę, najpierw wybierz domenę główną z listy (przykład: mydomain.ovh). Na kolejnym etapie podasz subdomenę (przykład: **blog**.mydomain.ovh).

![MultiSite](images/add-multisite-step2.png){.thumbnail}

|Informacja|Opis|
|---|---|
|Domena|Nazwa wybranej domeny wprowadzana jest automatycznie. Możesz dodać subdomenę (np. **blog**.mydomain.ovh) i jednocześnie utworzyć jej wersję wraz z WWW (np. **www.blog**.mydomain.ovh). Domena ta stanie się adresem strony WWW, którą chcesz umieścić w Internecie.|
|Katalog główny|Określ folder na przestrzeni dyskowej, do której wskazuje domena. Pliki strony WWW będą musiały zostać umieszczone w Internecie. Na przykład, dla blog.mydomain.ovh katalogiem głównym może być "blog". Jeśli folder nie istnieje, zostanie automatycznie utworzony.|
|SSL|Umożliwia korzystanie z bezpiecznego połączenia (HTTPS: //) z wybraną nazwą domeny. Dowiedz się więcej na [naszej stronie SSL](https://www.ovhcloud.com/pl/web-hosting/options/ssl/){.external}. Aktywując SSL i CDN (Content Delivery Network), możesz również użyć protokołu **HTTP2** (jest on włączony domyślnie w naszym centrum danych w Gravelines).|
|Włącz CDN|Umożliwia aktywację CDN dla wybranej domeny (zapisywanie w pamięci podręcznej elementów statycznych Twojej strony WWW, takich jak obrazy). Dowiedz się więcej na [naszej stronie CDN](https://www.ovhcloud.com/pl/web-hosting/options/cdn/){.external}. Aktywując SSL i CDN, możesz również użyć protokołu **HTTP2** (jest on włączony domyślnie w naszym centrum danych w Gravelines).|
|Krajowy adres IP|Umożliwia korzystanie z geolokalizowanego adresu IP (w wymienionych krajach) dla wybranej domeny. Dowiedz się więcej na [naszej stronie IP](https://www.ovhcloud.com/pl/web-hosting/options/){.external}.|
|Włącz firewall|Umożliwia aktywację zapory (analiza zapytań) dla danej domeny. Dowiedz się więcej na [naszej stronie ModSecurity](https://www.ovhcloud.com/pl/web-hosting/options/){.external}.|
|Rozdzielone logi|Umożliwia wydzielenie logów dotyczących wybranej domeny.  Wybierz z listy nazwę domeny, która będzie stanowiła dostęp do wydzielonych logów. Dowiedz się więcej na [naszej stronie szczegółowych](https://www.ovhcloud.com/pl/web-hosting/uc-website-traffic-analysis/){.external} statystyk.|

Po uzupełnieniu informacji, kliknij przycisk `Dalej`{.action}{.action}. Następnie sprawdź podsumowanie, które się wyświetli.

![MultiSite](images/add-multisite-step3.png){.thumbnail}

Po wybraniu domeny zarejestrowanej w OVHcloud możesz automatycznie lub ręcznie zmienić jej konfigurację DNS:

- **w przypadku automatycznej konfiguracji DNS**: zaznacz kratkę `Konfiguracja automatyczna (zalecana)`{.action};
- **w przypadku ręcznej konfiguracji DNS**: usuń zaznaczenie w kratce `Konfiguracja automatyczna (zalecana)`{.action}, następnie pobierz informacje odnośnie zmian, które się wyświetlają. Jeśli chcesz przeprowadzić tę konfigurację, skorzystaj z dokumentacji ["Modyfikacja strefy DNS OVHcloud"](../../domains/hosting_www_jak_edytowac_strefe_dns/){.external}.

Kliknij przycisk `Zatwierdź`{.action}, aby rozpocząć dodawanie domeny. Może do potrwać do godziny. Efekty modyfikacji domeny staną się widoczne po upływie 4-24 godzin ze względu na niezbędny czas propagacji.

Po dodaniu domeny przejdź do [etapu 3: umieszczenie strony WWW online](#site-online).

#### Etap 2.2: dodaj domenę zewnętrzną <a name="add-external-domain"></a>

 Ten etap ma zastosowanie jedynie, jeśli zaznaczyłeś opcję Dodaj domenę zewnętrzną.
 
 Twoja domena nie jest zarejestrowana w OVHcloud **lub** nie jest zarejestrowana na **Twoim** koncie OVHcloud. 

 > Przed dodaniem strony podpiętej w opcji MultiSite lepiej jest zmodyfikować strefę DNS domeny zewnętrznej.
 >
 > Modyfikacja konfiguracji domeny zewnętrznej (jej strefy DNS) powinna zostać przeprowadzona w interfejsie dostawcy zarządzającego domeną. Jeśli chodzi o OVHcloud, skorzystaj z naszej dokumentacji ["Modyfikacja strefy DNS OVHcloud"](../../domains/hosting_www_jak_edytowac_strefe_dns/){.external}. Efekty modyfikacji domeny staną się widoczne po upływie 1-24 godzin ze względu na niezbędny czas propagacji.
>
> Poniżej znajdziesz 2 elementów do zmiany konfiguracji DNS Twojej zewnętrznej domeny:
>
> |Pole|Gdzie znaleźć informację?|Działania|
> |---|---|---|
> |TXT|Zakładka `MultiSite`{.action}, następnie kliknij `Konfiguracja tokena ovhcontrol`{.action}|Pozwala OVHcloud upewnić się, że dodanie każdej domeny zewnętrznej jest uprawnione. Utwórz pole TXT z subdomeną ovhcontrol (na przykład ovhcontrol.mydomain.ovh) w strefie DNS, która ma uprawnienia do dodawania domeny.<br></br>Aby odnaleźć domenę, znajdziesz [serwery DNS](../../domains/hosting_www_informacje_na_temat_serwerow_dns/#zrozumienie-pojecia-dns), z którymi powiązana jest Twoja domena. Zatwierdź tylko domenę główną, nie wszystkie subdomeny.|
>
> ![MultiSite](images/add-multisite-external-step3.png){.thumbnail}
>
> |Pole|Gdzie znaleźć informację?|Działania|
> |---|---|---|
> |A i AAAA|Zakładka `Informacje ogólne`{.action}, następnie **IPv4** i **IPv6**|Umożliwia Twojej domenie wyświetlanie strony WWW, którą zamieścisz w Internecie na Twoim hostingu. Przypisz domenę lub subdomenę do adresu IP hostingu.|
>
> ![MultiSite](images/add-multisite-external-step4.png){.thumbnail}
>

 Teraz spersonalizuj dodanie domeny. Niektóre opcje zawarte w Twojej usłudze hostingu nie mogą być aktywowane podczas tej operacji. Aby je aktywować, zakończ operację i zmodyfikuj ustawienia opcji MultiSite, kiedy ta zostanie dodana.

|Informacja|Opis|
|---|---|
|Domena|Wpisz nazwę domeny, której chcesz używać. Dodaj subdomenę (np. **blog**.mydomain.ovh) i utwórz jednocześnie jej wersję wraz z WWW (np. **www.blog**.mydomain.ovh). Domena ta będzie odpowiadała adresowi strony WWW, którą chcesz umieścić w Internecie. Pamiętaj, że musisz mieć uprawnienia do modyfikacji konfiguracji domeny (jej strefy DNS), aby proces dodania domeny został ukończony.|
|Katalog główny| Określ folder na przestrzeni dyskowej, do której wskazuje domena. Pliki strony WWW będą musiały zostać umieszczone w Internecie. Na przykład, dla blog.mydomain.ovh katalogiem głównym może być "blog". Jeśli folder nie istnieje, zostanie automatycznie utworzony.|
|Włącz obsługę IPv6|Umożliwia aktywację protokołu IPv6 dla danej domeny. Dowiedz się więcej na [naszej stronie IP](https://www.ovhcloud.com/pl/web-hosting/options/){.external}.|

Po uzupełnieniu informacji, kliknij przycisk `Dalej`{.action}{.action}. Następnie sprawdź podsumowanie, które się wyświetli.

![MultiSite](images/add-multisite-external-step1.png){.thumbnail}

Dodanie domeny zewnętrznej wymaga obowiązkowej dodatkowej weryfikacji. Dzięki temu możemy upewnić się, że dodanie domeny zewnętrznej jest uprawnione. Pojawi się komunikat, w którym zostaniesz poproszony o zmianę konfiguracji DNS domeny.

![MultiSite](images/add-multisite-external-step2.png){.thumbnail}

Zanotuj elementy, które się wyświetlą, następnie kliknij przycisk `Zatwierdź`{.action}. Domena jest dodana tymczasowo, abyś mógł zmodyfikować jej konfigurację DNS.

> [!warning]
>
> Aby poprawnie dodać domenę, należy **wykonać** te zmiany. W przeciwnym razie dodanie Twojej domeny zostanie anulowane.
>

### Etap 3: umieszczenie strony WWW online <a name="site-online"></a>

Po dodaniu domeny wystarczy umieścić w Internecie powiązaną z nią stronę WWW. Przeprowadź tę operację w katalogu głównym, który zdefiniowałeś na poprzednim etapie.

Aby wesprzeć Cię w tym procesie, możesz skorzystać z gotowej do użycia struktury strony WWW, która jest dostępna za 1 kliknięciem od OVHcloud. Strona zostanie wówczas automatycznie zainstalowana w uprzednio skonfigurowanym katalogu głównym. O modułach dowiesz się więcej z przewodnika [„Automatyczna instalacja strony WWW za pomocą modułu CMS”](../hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/){.external}. 

Jeśli chcesz zainstalować ręcznie Twoją stronę WWW, przygotuj pliki, a następnie umieść je online w odpowiednim katalogu głównym na przestrzeni dyskowej. Dowiesz się więcej z przewodnika [„Automatyczna instalacja strony WWW za pomocą modułu CMS”](../hosting_www_umieszczenie_strony_w_internecie/){.external}.

> [!primary]
>
> Jeśli chcesz dodać kilka stron WWW, powtórz ten etap.
>
> Zalecamy nie instalować na jednym hostingu zbyt wielu stron. Im większa liczba zainstalowanych stron, tym większe zużycie przypisanych do danego hostingu zasobów. [Na stronie z ofertą hostingu WWW](https://www.ovhcloud.com/pl/web-hosting/){.external} znajdziesz liczbę stron WWW, które możesz zainstalować na Twojej przestrzeni dyskowej.
>

## Sprawdź również

[Automatyczna instalacja strony WWW za pomocą modułu CMS](https://docs.ovh.com/pl/hosting/hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/){.external}

[Modyfikacja strefy DNS](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}

[Uruchomienie strony WWW na Twoim hostingu](https://docs.ovh.com/pl/hosting/hosting_www_umieszczenie_strony_w_internecie/){.external}

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](https://www.ovhcloud.com/pl/support-levels/).

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
