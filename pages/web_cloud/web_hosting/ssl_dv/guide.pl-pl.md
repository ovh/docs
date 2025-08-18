---
title: "Hosting WWW - Aktywacja certyfikatu SSL Sectigo DV"
excerpt: "Dowiedz się, jak aktywować certyfikat SSL Sectigo DV na Twoim hostingu OVHcloud"
updated: 2025-06-16
---

## Wprowadzenie

Certyfikaty Secure Socket Layer (SSL) umożliwiają szyfrowanie danych przesyłanych z lub do Twojej strony WWW. Dzięki temu osoba lub robot nie będą wyraźnie "słuchać" zapytań wysyłanych z Twojej strony WWW.

OVHcloud oferuje kilka rodzajów certyfikatów SSL dla ofert [hostingu OVHcloud](/links/web/hosting). Zostały one opisane w przewodniku "[Hosting WWW - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Certyfikaty SSL są kluczowe dla bezpieczeństwa Twojej strony WWW.

Istnieją trzy rodzaje certyfikatów SSL:

- Weryfikacja Domeny (DV)
- Zatwierdzanie organizacji (OV)
- Rozszerzona walidacja (EV)

Poziomy szyfrowania SSL są identyczne dla tych trzech typów certyfikatów.

Główna różnica polega na tym, że poziom weryfikacji będzie przeprowadzany przez Urząd Certyfikacji (CA), który wydaje certyfikat SSL i poświadcza jego autentyczność.

W przypadku hostingu www OVHcloud organem certyfikującym wydającym certyfikaty SSL DV jest [Sectigo](https://sectigostore.com).

> [!warning]
>
> Po zrealizowaniu zamówienia na certyfikat i przekazaniu go naszemu dostawcy certyfikatów/organowi certyfikacji Sectigo, **zwrot kosztów za zamówienie nie jest możliwy**.
>

**Dowiedz się, jak aktywować certyfikat SSL Sectigo DV na Twoim hostingu OVHcloud.**

## Wymagania początkowe

- Dostęp do [panelu klienta OVHcloud](/links/manager).
- Zamówić lub dysponować [hostingiem OVHcloud](/links/web/hosting).
- Zamówić lub dysponować [domeną](/links/web/domains) i mieć wyłączne prawa do jej używania. Nazwa domeny nie może być już powiązana z certyfikatem SSL.

## W praktyce

> [!warning]
>
> Certyfikaty SSL Sectigo DV oferowane w OVHcloud są ważne tylko w jednym z dwóch poniższych przypadków w ramach Twojego hostingu:
>
> - Jedna domena + jej subdomena w "WWW" (przykład: `domain.tld` i `www.domain.tld`).
> - Jedna subdomena (na przykład: `sub.domain.tld`).
>
> Jeśli na Twoim hostingu zadeklarowane są inne domeny lub subdomeny i chcesz im również przypisać certyfikat SSL, możesz:
>
> - [Aktywuj bezpłatny certyfikat SSL Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt) (o ile nie jest to opcja domyślna).
> - Aktywuj jeden (lub więcej) inny(e) płatny(e) certyfikat(y) SSL ([Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv) lub [Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)).
> - [Zainstaluj własny certyfikat SSL](/pages/web_cloud/web_hosting/ssl_custom).

**Przed złożeniem zamówienia na certyfikat SSL Sectigo DV na Twoim hostingu** sprawdź, czy **nazwa domeny/subdomeny**, której dotyczy certyfikat SSL:

- wskazuje na adres IP hostingu.
- dostępny w opcji MultiSite na Twoim hostingu.
- nie ma już aktywnego certyfikatu SSL.

> [!primary]
>
> Jeśli chcesz zamówić certyfikat SSL Sectigo DV dla domeny (na przykład: `domain.tld`), sprawdź, czy jego subdomena oznaczona "www" (na przykład: `www.domain.tld`) wskazuje również na adres IP Twojego hostingu i czy jest poprawnie zadeklarowana jako MultiSite.
>
> Jeśli zamawiasz certyfikat SSL Sectigo DV, ale go nie sprawdzasz, wprowadź poprawki. Należy usunąć certyfikat SSL Sectigo DV wykupiony wcześniej **bez zwrotu płatności**, a następnie zamówić nowy. Zgodnie z oczekiwaniami nowy certyfikat SSL Sectigo DV będzie obejmował zarówno Twoją domenę `domain.tld`, jak i jej subdomenę "www" `www.domain.tld`.
>
> Przypominamy, że jeśli zamawiasz certyfikat SSL Sectigo DV bezpośrednio dla subdomeny (na przykład: `sub.domain.tld`), ta sytuacja Cię nie dotyczy.

Jeśli potrzebujesz pomocy, zapoznaj się z naszymi przewodnikami:

- [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Hosting WWW - Lista adresów IP według klastra](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
- [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).
- [Hosting - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), sekcja **Wyłączenie certyfikatu SSL na hostingu**.

### Zamów certyfikat SSL Sectigo DV

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

Instalacja certyfikatu SSL Sectigo DV może potrwać do **24** godzin.

### Sprawdź aktywację certyfikatu SSL Sectigo DV

Aby sprawdzić, czy instalacja została zakończona, kliknij poniższe zakładki, aby wyświetlić kolejne **4** etapy:

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
>> Kiedy pojawi się zawartość karty, sprawdź, czy każda domena i/lub subdomena figuruje w tabeli z typem certyfikatu SSL `Sectigo`.
>>
>> ![Tabela zarządzania certyfikatami SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

Twój certyfikat SSL Sectigo DV jest teraz zainstalowany i aktywny. Od tej chwili możesz korzystać z niej na Twojej stronie WWW, przechodząc na przykład do [strony WWW HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Sprawdź również <a name="go-further"></a>

[Hosting - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hosting WWW - Ustaw HTTPS na stronie WWW](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Typowe błędy związane z zabezpieczaniem strony www za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).