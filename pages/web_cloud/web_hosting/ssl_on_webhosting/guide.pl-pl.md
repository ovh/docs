---
title: "Hosting - Zarządzanie certyfikatem SSL"
excerpt: "Dowiedz się, jak zarządzać certyfikatem SSL na Twoim hostingu OVHcloud"
updated: 2025-11-05
---

## Wprowadzenie 

Certyfikaty Secure Socket Layer (SSL) umożliwiają szyfrowanie danych przesyłanych z lub do Twojej strony WWW. Dzięki temu osoba lub robot nie będą wyraźnie "słuchać" zapytań wysyłanych z Twojej strony WWW.

OVHcloud oferuje kilka rodzajów certyfikatów SSL na naszych rozwiązaniach hostingowych [hosting OVHcloud](/links/web/hosting). Zostaną one przedstawione poniżej w tym przewodniku. Certyfikaty SSL są kluczowe dla bezpieczeństwa Twojej strony WWW.

Istnieją trzy rodzaje certyfikatów SSL:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Poziomy szyfrowania SSL są identyczne dla tych trzech typów certyfikatów.

Główna różnica polega na tym, że poziom weryfikacji będzie przeprowadzany przez Urząd Certyfikacji (CA), który wydaje certyfikat SSL i poświadcza jego autentyczność.

Posiadanie certyfikatu SSL dla strony www jest niezbędne, aby używać go w HTTPS.

**Dowiedz się, jak zarządzać certyfikatem SSL na Twoim hostingu OVHcloud.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager)
- Posiadanie [hostingu OVHcloud](/links/web/hosting)
- Zarejestrowanie co najmniej jednej [domeny](/links/web/domains)

## W praktyce

> [!warning]
>
> **Zanim przejdziesz dalej**, sprawdź, czy **nazwa(e) domeny i/lub subdomeny(y)**, której(e) dotyczy(e) Twój(e) przyszły(e) certyfikat(e) SSL:
>
> - przekieruj(nt) na adres IP Twojego hostingu.
> - jest (jest) zadeklarowany(e) w opcji MultiSite na Twoim hostingu.
> - nie ma(a) już aktywnego certyfikatu SSL.
>
> Aby się upewnić co do metody, zapoznaj się z naszymi przewodnikami:
>
> - [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite).
> - [Hosting WWW - Lista adresów IP według klastra](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).
> - [Hosting - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), sekcja **Wyłączenie certyfikatu SSL na hostingu**.

### Aktywacja certyfikatu SSL na Twoim hostingu <a name="ssl-enable"></a>

OVHcloud oferuje 4 rozwiązania do aktywacji/instalacji certyfikatu SSL na hostingu. Każde z tych rozwiązań jest szczegółowo udokumentowane.

Zapoznaj się z 4 linkami do przewodników dotyczących tych 4 rozwiązań:

- [Hosting WWW - Aktywacja darmowego certyfikatu SSL Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt): Bezpłatny certyfikat dostępny wraz z naszym hostingiem.
- [Hosting www - Aktywacja certyfikatu SSL Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv): Certyfikat ważny dla jednej domeny + jej subdomeny w "www" (na przykład: `domain.tld` i `www.domain.tld`) lub **tylko** subdomena (na przykład: `sub.domain.tld`).
- [Hosting WWW - Aktywacja certyfikatu SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev): Certyfikat ważny dla jednej domeny + jej subdomeny w "www" (na przykład: `domain.tld` i `www.domain.tld`) lub **tylko** subdomena (na przykład: `sub.domain.tld`).
- [Hosting - Instalacja spersonalizowanego certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_custom): Jeśli posiadasz własny certyfikat SSL lub jeśli żadne z 3 poprzednich rozwiązań nie odpowiada Twoim potrzebom.

### Usunięcie certyfikatu SSL na hostingu <a name="delete-ssl"></a>

> [!warning]
>
> Usunięcie płatnego certyfikatu SSL **Sectigo** (DV lub EV) jest definitywne, nawet jeśli certyfikat jeszcze nie wygasł. Nie wykonasz zwrotu wpłaconej sumy za niewykorzystany czas. Jeśli chcesz ponownie zainstalować certyfikat SSL **Sectigo** (DV lub EV), musisz obowiązkowo złożyć nowe zamówienie i zapłacić za cały nowy wykupiony certyfikat SSL.
>
> Ponadto, jeśli chcesz trwale wyłączyć certyfikat SSL na Twoim hostingu, upewnij się **przed kontynuowaniem**, że definitywne wyłączenie certyfikatu SSL nie uniemożliwi dostępu do Twoich stron WWW. W przeciwnym razie użytkownicy napotkają błąd bezpieczeństwa podczas próby uzyskania dostępu do Twojej strony WWW przy użyciu protokołu "HTTPS".
>
> Ponieważ weryfikacja ta jest ściśle związana z ustawieniami Twojej strony WWW, w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner). Niestety firma OVHcloud nie jest w stanie udzielić wsparcia w tym zakresie.

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
>> W tabeli na dole nowej strony, która się wyświetli, kliknij przycisk `⁝`{.action} po prawej stronie wiersza odpowiadającego danej domenie, po czym kliknij `Wyłącz SSL`{.action}.
>>
>> ![Wyłącz SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/disable-ssl.png){.thumbnail}
>>
> **Etap 5**
>>
>> W wyświetlonym oknie potwierdź dezaktywację, klikając `Zatwierdź`{.action}.
>>
>> ![Usuń SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/ssl-deletion.png){.thumbnail}

Certyfikat SSL zostanie dezaktywowany najwyżej w ciągu kilku godzin.

### Popraw często występujące błędy przy użyciu certyfikatów SSL oferowanych na hostingu

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Ten komunikat wskazuje, że jesteś już właścicielem certyfikatu SSL. Nie ma więc potrzeby aktywacji nowego certyfikatu SSL na Twoim hostingu.

Jeśli certyfikat SSL zainstalowany na Twoim hostingu nie jest tym, którego chcesz użyć, możesz [dezaktywować aktualny certyfikat SSL](#delete-ssl), a następnie [aktywować nowy certyfikat SSL](#ssl-enable) na Twoim hostingu.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Powiadomienie to można wyjaśnić w trzech przypadkach.

- 1: Domena przypisana do Twojej strony WWW wskazuje na adres IP usługi CDN Twojego hostingu, bez aktywnej opcji GeoCache:

Aby rozwiązać ten problem, w strefie DNS włączonej dla Twojej domeny przypisz adres IP hostingu bez usługi CDN do Twojej domeny.
Aby sprawdzić adres IP hostingu, zapoznaj się z naszym przewodnikiem "[Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Aby zmodyfikować aktywną strefę DNS Twojej domeny, zapoznaj się z naszym przewodnikiem "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

- 2: Domena przypisana do Twojej strony WWW nie wskazuje na adres IP Twojego hostingu:

Aby rozwiązać ten problem, w strefie DNS Twojej domeny przypisz adres IP hostingu do Twojej domeny.
Jeśli włączyłeś opcję GeoCache w Twoim hostingu, możesz również użyć adresu IP hostingu WWW w ramach usługi GeoCache.
Aby sprawdzić adres IP hostingu, zapoznaj się z naszym przewodnikiem "[Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Aby zmodyfikować aktywną strefę DNS Twojej domeny, zapoznaj się z naszym przewodnikiem "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

#### Zamówiłeś certyfikat SSL Sectigo EV w tym samym czasie, co Twój hosting, ale certyfikat nie jest jeszcze aktywny i hosting nie działa poprawnie

Ma to związek z etapami, które musisz przeprowadzić, aby aktywować certyfikat SSL EV na Twoim hostingu.

W razie potrzeby sprawdź przewodnik "[Hosting WWW - Aktywacja certyfikatu SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)", aby rozwiązać ten problem.

> [!primary]
>
> Jeśli certyfikat SSL EV nie jest aktywny, zamówienie nie zostanie nigdy zamknięte i nie zostanie utworzona faktura. Z tego powodu usługa hostingu nie będzie działać prawidłowo.

#### Po wygaśnięciu certyfikatu SSL Sectigo (DV lub EV) wystąpi błąd "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone"

Ten błąd pojawia się za każdym razem, gdy wygasa certyfikat SSL Sectigo (aktywowany bezpośrednio z hostingu) i zmienia się adres IP hostingu. Dlatego domena powinna wskazywać na poprawny adres IP (rekord typu A) bezpośrednio w aktywnej strefie DNS Twojej domeny.

Aby sprawdzić adres IP hostingu, zapoznaj się z naszym przewodnikiem "[Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Aby zmodyfikować aktywną strefę DNS Twojej domeny, zapoznaj się z naszym przewodnikiem "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

#### Certyfikat SSL jest aktywny na Twoim hostingu, ale na Twojej stronie pojawia się komunikat "Your connection is not private"

Ten komunikat pojawia się w następujących przypadkach:

- 1: Reguła przekierowywania "HTTPS" do adresu URL jest nieprawidłowo skonfigurowana lub nie istnieje w pliku ".htaccess":

Aby to naprawić, zapoznaj się z naszym tutorialem "[przepisz URL dostępu do mojej strony za pomocą mod_rewrite za pomocą pliku .htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)" lub w przypadku trudności skorzystaj z usług [wyspecjalizowanego dostawcy](/links/partner).

- 2: Niektóre elementy strony internetowej nie są poprawnie przekierowywane do elementów zaszyfrowanych "HTTPS":

Aby to naprawić, upewnij się, że cała Twoja strona WWW jest zaszyfrowana za pomocą protokołu "HTTPS".
W razie potrzeby sprawdź przewodnik "[Hosting WWW - Ustaw HTTPS na stronie WWW](/pages/web_cloud/web_hosting/ssl-activate-https-website)" lub w przypadku trudności skorzystaj z pomocy [wyspecjalizowanego usługodawcy](/links/partner).

> [!success]
>
> Odpowiednie elementy na stronie internetowej można zobaczyć bezpośrednio z informacji SSL przeglądarki internetowej, sprawdzając *szczegóły certyfikatu*.

## Sprawdź również

[Hosting WWW - Ustaw HTTPS na stronie WWW](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Typowe błędy związane z zabezpieczaniem strony www za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).