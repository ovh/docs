---
title: "Hosting WWW - nowe zarządzanie certyfikatami SSL"
excerpt: "Dowiedz się, jak zarządzać certyfikatem SSL na Twoim hostingu OVHcloud z poziomu naszego nowego interfejsu zarządzania"
updated: 2025-10-01
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie 

Certyfikaty Secure Socket Layer (SSL) umożliwiają szyfrowanie danych przesyłanych z lub do Twojej strony WWW. Dzięki temu osoba lub robot nie będą wyraźnie "słuchać" zapytań wysyłanych z Twojej strony WWW.

OVHcloud oferuje kilka rodzajów certyfikatów SSL na naszych rozwiązaniach hostingowych [hosting OVHcloud](/links/web/hosting). Zostaną one przedstawione poniżej w tym przewodniku. Certyfikaty SSL są kluczowe dla bezpieczeństwa Twojej strony WWW.

Istnieją trzy rodzaje certyfikatów SSL:

- Domain Validation (DV).
- Organization validation (OV).
- Extended Validation (EV).

Poziomy szyfrowania SSL są identyczne dla tych trzech typów certyfikatów.

Główna różnica polega na tym, że poziom weryfikacji będzie przeprowadzany przez Urząd Certyfikacji (CA), który wydaje certyfikat SSL i poświadcza jego autentyczność.

Musisz posiadać certyfikat SSL, aby móc korzystać z protokołu HTTPS na swojej stronie WWW.

**Dowiedz się, jak zarządzać certyfikatem SSL na Twoim hostingu OVHcloud z poziomu naszego nowego interfejsu zarządzania.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Posiadanie [hostingu OVHcloud](/links/web/hosting).
- Zarejestrowanie co najmniej jednej [domeny](/links/web/domains).

> [!warning]
>
> **Zanim przejdziesz do kolejnego kroku** sprawdź, czy każda **domena i/lub subdomena** objęte będą Twoim przyszłym certyfikatem SSL:
>
> - Wskazuje na adres IP Twojego hostingu.
> - Jest zadeklarowana jako MultiSite na Twoim hostingu.
>
> W przypadku wątpliwości sprawdź przewodniki:
>
> - [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)

## W praktyce

### Dostęp do zarządzania certyfikatami SSL z poziomu hostingu www

> [!primary]
>
> **Informacje o migracji do nowego interfejsu zarządzania certyfikatami SSL:**
>
> Więcej informacji znajdziesz w tym przewodniku dla klientów, których usługi hostingowe zostały już przeniesione do nowego interfejsu zarządzania certyfikatami SSL.
> Aby sprawdzić, czy migracja została wykonana, przejdź do Panelu klienta OVHcloud i sprawdź kartę `Certyfikaty SSL`.
> Jeśli karta `Certyfikaty SSL` nie została znaleziona, Twoja usługa nie została jeszcze przeniesiona do nowego panelu zarządzania. W takim przypadku skorzystaj z bezpośredniego przewodnika [ten przewodnik](/pages/web_cloud/web_hosting/ssl_on_webhosting), aby zarządzać certyfikatem SSL.
>
> Ze względów technicznych nie wszystkie usługi hostingowe naszych klientów mogą zostać migrowane za jednym razem. Migracja jest rozdzielona na kilka tygodni i jest wykonywana automatycznie. Nie wpływa ona na działanie usług hostingowych, nie wymaga interwencji ani nie wymaga żadnego działania ze strony użytkownika.
>
> Po pewnym czasie wszystkie usługi hostingowe będą działały w nowym interfejsie zarządzania certyfikatami SSL.

Aby uzyskać dostęp do zarządzania certyfikatami SSL z poziomu hostingu, kliknij poniższe zakładki, aby wyświetlić kolejne kroki **3**:

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Certyfikaty SSL`{.action}.
>>
>> ![Certyfikaty SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}

W tej lokalizacji możesz zarządzać wszystkimi certyfikatami SSL dla domen i subdomen powiązanych z Twoim hostingiem.

### Aktywacja certyfikatu SSL na Twoim hostingu <a name="ssl-enable"></a>

OVHcloud oferuje 4 rozwiązania do aktywacji lub instalacji certyfikatu SSL na hostingu.

**Kliknij poniżej na wybrany certyfikat SSL, aby wyświetlić objaśnienia.**

/// details | Aktywacja darmowego certyfikatu SSL Let's Encrypt (DV)

Bezpłatny certyfikat SSL Let's Encrypt (DV) może zawierać do **99** nazw domen i subdomen zadeklarowanych na hostingu.

Kliknij poniższe zakładki, aby wyświetlić kolejne kroki **4**:

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Certyfikaty SSL`{.action}.
>>
>> ![Certyfikaty SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etap 4**
>>
>> Kiedy pojawi się zawartość karty, wybierz domenę lub subdomenę, dla której chcesz aktywować bezpłatny certyfikat SSL Let's Encrypt (DV), zaznaczając opcję `Włącz certyfikat SSL`.
>>
>> ![SSL Let's Encrypt](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/enable-ssl-lets-encrypt.png){.thumbnail}
>>
>> Następnie kliknij przycisk `Włącz SSL Let's Encrypt`{.action}.

> [!success]
>
> Certyfikat Let's Encrypt SSL jest generowany automatycznie dla każdej domeny i subdomeny zadeklarowanej ostatnio w opcji MultiSite na Twoim hostingu. Aby się upewnić co do nazwy Twojej domeny i/lub subdomeny, sprawdź, czy wyświetla się ona w tabeli na dole strony `Certyfikaty SSL`{.action}.

///

/// details | Aktywacja płatnego certyfikatu SSL Sectigo (DV)

Płatny certyfikat SSL Sectigo (DV) jest ważny dla jednej domeny i jej subdomeny w "www" (na przykład: `domain.tld` i `www.domain.tld`) lub **tylko** dla subdomeny (na przykład: `sub.domain.tld`).

Kliknij poniższe zakładki, aby wyświetlić kolejne kroki **5**:

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Certyfikaty SSL`{.action}.
>>
>> ![Certyfikaty SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etap 4**
>>
>> Kiedy pojawi się zawartość karty, kliknij przycisk `Zamów certyfikat SSL Sectigo`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Etap 5**
>>
>> W nowym oknie, które się otworzy, wybierz w rozwijanym menu odpowiednią domenę lub subdomenę, następnie kliknij `Zatwierdź`{.action}, aby zostać przekierowanym do zamówienia certyfikatu SSL Sectigo DV.
>>
>> ![SSL Sectigo wybór domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
>> Kontynuuj zamówienie aż do wpłynięcia płatności, w celu zatwierdzenia zlecenia utworzenia certyfikatu SSL Sectigo DV dla Twojej domeny i/lub subdomeny na Twoim hostingu.

> [!alert]
>
> Po zatwierdzeniu zamówienia żądanie certyfikatu SSL Sectigo DV jest wysyłane do urzędu certyfikacji Sectigo.
>
> Od tej pory nie ma możliwości zwrotu pieniędzy za certyfikat SSL Sectigo DV.

///

/// details | Aktywacja płatnego certyfikatu SSL Sectigo (EV)

Płatny certyfikat SSL Sectigo (EV) jest ważny dla jednej domeny i jej subdomeny w "www" (na przykład: `domain.tld` i `www.domain.tld`) lub **tylko** dla subdomeny (na przykład: `sub.domain.tld`).

> [!warning]
>
> Płatny certyfikat SSL Sectigo (EV) podlega dodatkowym warunkom:
>
> - Zamów [domenę](/links/web/domains) i uzyskaj wyłączne prawa do korzystania z tej domeny. Nazwa domeny nie może być już powiązana z certyfikatem SSL.
> - Być organizacją (firma, agencja rządowa, itp.) zarejestrowaną w oficjalnym rejestrze.
> - Posiadanie upoważnienia organizacji do zamawiania certyfikatu SSL Sectigo EV.
> - Być w stanie dokładnie uzasadnić informacje i dane kontaktowe dotyczące organizacji.
>
> Aby sprawdzić, czy możesz zamówić certyfikat SSL Sectigo EV, przejdź do [link](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.

Kliknij poniższe zakładki, aby wyświetlić kolejne kroki **6**:

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Certyfikaty SSL`{.action}.
>>
>> ![Certyfikaty SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etap 4**
>>
>> Kiedy pojawi się zawartość karty, kliknij przycisk `Zamów certyfikat SSL Sectigo`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Etap 5**
>>
>> W nowym oknie, które się otworzy, wybierz w rozwijanym menu odpowiednią domenę lub subdomenę, następnie kliknij `Zatwierdź`{.action}, aby zostać przekierowanym do zamówienia certyfikatu SSL Sectigo EV.
>>
>> ![SSL Sectigo wybór domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
> **Etap 6**
>>
>> Wybierz **Certyfikat SSL Sectigo EV**, po dotarciu do tunelu poleceń, następnie kontynuuj zamówienie.
>>
>> Wpisz poprawnie informacje wymagane przez **Sectigo**, zanim otrzymasz certyfikat SSL Sectigo EV. 
>>
>> ![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}
>>
>> Kliknij polecenie `Dalej`{.action} raz **wszystkie elementy** poprawnie wprowadzone.
>>
>> Postępuj zgodnie z poleceniem aż do płatności, aby potwierdzić zlecenie utworzenia certyfikatu SSL.

> [!alert]
>
> Po zatwierdzeniu zamówienia wniosek o certyfikat SSL Sectigo EV jest wysyłany do instytucji certyfikującej **Sectigo**.
>
> **Przed opłaceniem certyfikatu** sprawdź, czy spełniasz warunki uprawniające do korzystania z certyfikatu SSL Sectigo EV.
>
> Faktycznie, zwrot kosztów certyfikatu SSL Sectigo EV nie będzie możliwy, **nawet jeśli procedura weryfikacji w Sectigo nie zakończy się**.

///

/// details | Zainstaluj spersonalizowany certyfikat SSL

Dzięki temu rozwiązaniu możesz zainstalować własny certyfikat SSL dla swojej domeny, jeśli żadna z 3 poprzednich opcji nie odpowiada Twoim potrzebom i chcesz korzystać z certyfikatu SSL, który już posiadasz.

Kliknij poniższe zakładki, aby wyświetlić kolejne kroki **5**:

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Certyfikaty SSL`{.action}.
>>
>> ![Certyfikaty SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etap 4**
>>
>> Kiedy pojawi się zawartość karty, kliknij przycisk `Import własnego certyfikatu SSL`{.action}.
>>
>> ![Spersonalizowany SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate.png){.thumbnail}
>>
> **Etap 5**
>>
>> W następnym oknie zostanie wyświetlony formularz z 3 polami do wypełnienia:
>>
>> ![Zamówienie certyfikatu SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window.png){.thumbnail}
>>
>> - `Skopiuj zawartość swojego certyfikatu (tylko RSA)`{.action} : wprowadź treść pliku **certificate.crt** dostarczonego przez Twojego dostawcę SSL, w tym słowa `-----BEGIN CERTIFICATE-----` i `-----END CERTIFICATE-----` (lub ich odpowiedniki). Szyfrowanie RSA to standardowe szyfrowanie certyfikatów SSL.
>> - `Skopiuj zawartość swojego klucza prywatnego (nie szyfrowanego)`{.action} : wprowadź treść pliku **private.key** dostarczonego przez Twojego dostawcę SSL, w tym słowa `-----BEGIN RSA PRIVATE KEY-----` i `-----END RSA PRIVATE KEY-----` (lub ich odpowiedniki). Informacja *nie szyfrowanego* oznacza, że klucz prywatny nie może być chroniony hasłem lub hasłem. W przeciwnym razie instalacja certyfikatu nie powiedzie się.
>> - `Skopiuj zawartość łańcucha certyfikatów`{.action} : wprowadź zawartość pliku **ca_bundle.crt** dostarczonego przez Twojego dostawcę SSL, w tym słowa `-----BEGIN CERTIFICATE-----` i `-----END CERTIFICATE-----` (lub ich odpowiedniki).
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window-completed.png){.thumbnail}
>>
>> Po wypełnieniu 3 formularzy kliknij przycisk `Zatwierdź`{.action}, aby zakończyć import spersonalizowanego certyfikatu SSL na hostingu.

> [!success]
>
> W 3 polach znajdziesz informacje, które należy wypełnić. Poniżej znajdziesz tylko etapy **1** i **2** w przewodniku "[Hosting WWW - Instalowanie spersonalizowanego certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_custom)".

///

### Wyłączenie certyfikatu SSL na hostingu <a name="delete-ssl"></a>

> [!warning]
>
> **Na wstępie sprawdź** czy usunięcie certyfikatu SSL nie spowoduje niedostępności Twoich stron WWW. W takim przypadku podczas próby dostępu do Twojej strony WWW za pomocą HTTPS na użytkownikach wyświetli się błąd bezpieczeństwa.

Ponieważ weryfikacja ta jest ściśle związana z ustawieniami Twojej strony WWW, w przypadku trudności zalecamy skorzystanie z pomocy webmastera. Niestety firma OVHcloud nie jest w stanie udzielić wsparcia w tym zakresie.

Aby usunąć certyfikat SSL zainstalowany na Twoim hostingu, kliknij poniższe zakładki, aby wyświetlić kolejne kroki **5**:

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Certyfikaty SSL`{.action}.
>>
>> ![Certyfikaty SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etap 4**
>>
>> W tabeli na dole nowej strony, która się wyświetli, kliknij przycisk `⁝`{.action} po prawej stronie wiersza odpowiadającego danej domenie, po czym kliknij `Wyłącz SSL`{.action}.
>>
>> ![Wyłącz SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/disable-ssl.png){.thumbnail}
>>
> **Etap 5**
>>
>> W wyświetlonym oknie potwierdź dezaktywację, klikając `Zatwierdź`{.action}.
>>
>> ![Usuń SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/ssl-deletion.png){.thumbnail}

Certyfikat zostanie usunięty maksymalnie w ciągu kilku godzin.

> [!warning]
>
> Usunięcie płatnego certyfikatu SSL **Sectigo** (DV lub EV) jest definitywne, nawet jeśli certyfikat jeszcze nie wygasł. Nie wykonasz zwrotu wpłaconej sumy za niewykorzystany czas. Jeśli chcesz ponownie zainstalować certyfikat SSL **Sectigo** (DV lub EV), musisz obowiązkowo złożyć nowe zamówienie i zapłacić za cały nowy wykupiony certyfikat SSL.

## Sprawdź również <a name="go-further"></a>

[Hosting WWW - Ustaw HTTPS na stronie WWW](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Typowe błędy związane z zabezpieczaniem strony www za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).