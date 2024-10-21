---
title: "Hosting WWW - Aktywacja certyfikatu SSL Sectigo DV"
excerpt: "Dowiedz się, jak aktywować certyfikat SSL Sectigo DV na Twoim hostingu OVHcloud"
updated: 2024-10-21
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Certyfikaty Secure Socket Layer (SSL) umożliwiają szyfrowanie danych przesyłanych z lub do Twojej strony WWW. Dzięki temu osoba lub robot nie będą wyraźnie "słuchać" zapytań wysyłanych z Twojej strony WWW.

OVHcloud oferuje kilka rodzajów certyfikatów SSL dla ofert [hostingu OVHcloud](/links/web/hosting). Zostały one opisane w przewodniku "[Hosting WWW - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Certyfikaty SSL są kluczowe dla bezpieczeństwa Twojej strony WWW.

Istnieją trzy rodzaje certyfikatów SSL:

- Weryfikacja Domeny (DV)
- Zatwierdzanie organizacji (OV)
- Rozszerzona walidacja (EV)

Poziomy szyfrowania SSL są identyczne dla tych trzech typów certyfikatów.

Główna różnica polega na tym, że poziom weryfikacji będzie przeprowadzany przez Urząd Certyfikacji (CA), który wydaje certyfikat SSL i poświadcza jego autentyczność.

W przypadku hostingu www OVHcloud organem certyfikującym wydającym certyfikaty SSL DV jest [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> Po zrealizowaniu zamówienia na certyfikat i przekazaniu go naszemu dostawcy certyfikatów/organowi certyfikacji Sectigo, **zwrot kosztów za zamówienie nie jest możliwy**.
>

**Dowiedz się, jak aktywować certyfikat SSL Sectigo DV na Twoim hostingu OVHcloud.**

## Wymagania początkowe

- Dostęp do [panelu klienta OVHcloud](/links/manager).
- Zamówić lub dysponować [hostingiem OVHcloud](/links/web/hosting), na którym nie został jeszcze zainstalowany żaden certyfikat SSL.
- Zamówić lub dysponować [domeną](/links/web/domains) i mieć wyłączne prawa do jej używania. Nazwa domeny nie może być już powiązana z certyfikatem SSL.

## W praktyce

> [!warning]
>
> Certyfikaty SSL Sectigo DV oferowane w OVHcloud są ważne tylko w jednym z dwóch poniższych przypadków w ramach Twojego hostingu:
>
> - jedna domena + jej subdomena w "WWW" (przykład: `domain.tld` i `www.domain.tld`);
> - Jedna subdomena (na przykład: `sub.domain.tld`).
>
> Oznacza to, że jeśli na Twoim hostingu zainstalowane są inne domeny/subdomeny zadeklarowane w opcji MultiSite, nie będą one mogły korzystać z certyfikatu SSL.
>
> Można zainstalować tylko jeden certyfikat SSL na hosting.
>
> Jeśli chcesz aktywować certyfikat SSL dla kilku domen/subdomen zadeklarowanych na Twoim hostingu, zdecyduj się na instalację [bezpłatnego certyfikatu SSL Let's Encrypt](/links/web/hosting-options-ssl) lub zainstaluj własny [spersonalizowany certyfikat SSL](/pages/web_cloud/web_hosting/ssl_custom).

**Przed złożeniem zamówienia na certyfikat SSL Sectigo DV na Twoim hostingu *** sprawdź, czy **nazwa domeny/subdomeny**, której dotyczy certyfikat SSL:

- wskazuje na adres IP hostingu;
- dostępny w opcji MultiSite na Twoim hostingu.

> [!primary]
>
> Jeśli chcesz zamówić certyfikat SSL Sectigo DV dla domeny (na przykład: `domain.tld`), sprawdź, czy jego subdomena oznaczona jest jako "www" (na przykład: `www.domain.tld`) wskazuje również na adres IP Twojego hostingu i czy jest poprawnie zadeklarowana jako MultiSite.
>
> Jeśli zamawiasz certyfikat SSL Sectigo DV, ale go nie sprawdzasz, wprowadź poprawki. Należy usunąć certyfikat SSL Sectigo DV wykupiony wcześniej **bez zwrotu płatności**, a następnie zamówić nowy. Zgodnie z oczekiwaniami nowy certyfikat SSL Sectigo DV będzie obejmował zarówno Twoją domenę `domain.tld`, jak i jej subdomenę "www" `www.domain.tld`.
>
> Przypominamy, że jeśli zamawiasz certyfikat SSL Sectigo DV bezpośrednio dla subdomeny (na przykład: `sub.domain.tld`), ta sytuacja Cię nie dotyczy.

Sprawdź również, czy:

- kratka `SSL` nie powinna być zaznaczona podczas dodawania domeny/subdomeny w opcji MultiSite dla Twojego certyfikatu SSL Sectigo DV.
- Status `Do wygenerowania` lub `Aktywny` nie musi być już obecny dla domeny/subdomeny, której dotyczy Twój certyfikat SSL Sectigo DV.

Zapoznaj się z naszymi przewodnikami:

- [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
- [Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
- [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).

### Zamów certyfikat SSL Sectigo DV

Aby zamówić certyfikat SSL Sectigo DV, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli pozostań w zakładce `Informacje ogólne`{.action}.
6. Przejdź do ramki zatytułowanej `Konfiguracja`.
7. Po prawej stronie wzmianki `Certyfikat SSL` kliknij przycisk `...`{.action}, a następnie `Zamów certyfikat SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

W oknie, które się pojawi wybierz z listy możliwych opcji opcję `Płatny certyfikat`{.action}.

Następnie z rozwijanej listy wybierz odpowiednią domenę/subdomenę, po czym kliknij `Dalej`{.action}.

W nowym oknie, które się wyświetli kliknij `Zatwierdź`{.action}, aby uzyskać przekierowanie do zamówienia certyfikatu SSL Sectigo DV.

W celu zatwierdzenia zlecenia utworzenia certyfikatu SSL Sectigo DV dla Twojej domeny/subdomeny na Twoim hostingu, złóż zamówienie aż do daty płatności.

> [!alert]
>
> Po zatwierdzeniu zamówienia żądanie certyfikatu SSL Sectigo DV jest wysyłane do urzędu certyfikacji Sectigo.
>
> Od tej pory nie ma możliwości zwrotu pieniędzy za certyfikat SSL Sectigo DV.

Instalacja certyfikatu SSL Sectigo DV może potrwać do **24** godzin.

### Sprawdź aktywację certyfikatu SSL Sectigo DV

Aby sprawdzić, czy instalacja została zakończona, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli pozostań w zakładce `Informacje ogólne`{.action}.
6. Przejdź do ramki zatytułowanej `Konfiguracja`.

Po zakończeniu operacji odnajdziesz, pod adnotacją `Certyfikat SSL`, taką samą wartość jak ta: `Tak - SECTIGO - DV`.

![SSL Sectigo DV certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-dv-enable.png){.thumbnail}

Twój certyfikat SSL Sectigo DV jest teraz zainstalowany i aktywny. Od tej chwili możesz korzystać z niej na Twojej stronie WWW, przechodząc na przykład do [strony WWW HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Sprawdź również <a name="go-further"></a>

[Hosting - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hosting WWW - Ustaw HTTPS na stronie WWW](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Typowe błędy związane z zabezpieczaniem strony www za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).