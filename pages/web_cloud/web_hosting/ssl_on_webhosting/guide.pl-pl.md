---
title: "Hosting - Zarządzanie certyfikatem SSL"
excerpt: "Dowiedz się, jak zarządzać certyfikatem SSL na Twoim hostingu OVHcloud"
updated: 2025-06-16
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
> **Zanim przejdziesz dalej**, sprawdź, czy **nazwa(y) domeny i/lub subdomeny(y)**, której(e) będzie dotyczył(e) Twój przyszły certyfikat SSL:
>
> - przekierowuje(a) na adres IP Twojego hostingu;
> - jest (jest) zadeklarowany(e) w opcji MultiSite na Twoim hostingu.
>
> Sprawdź przewodniki:
>
> - [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
> - [Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).

### Aktywacja certyfikatu SSL na Twoim hostingu <a name="ssl-enable"></a>

OVHcloud oferuje 4 rozwiązania do aktywacji/instalacji certyfikatu SSL na hostingu. Każde z tych rozwiązań jest szczegółowo udokumentowane.

Zapoznaj się z 4 linkami do przewodników dotyczących tych 4 rozwiązań:

- [Aktywacja bezpłatnego certyfikatu SSL Let's Encrypt (DV)](/pages/web_cloud/web_hosting/ssl_letsencrypt): certyfikat może zawierać do **99** nazwy domen/subdomen zadeklarowanych na hostingu.
- [Aktywacja płatnego certyfikatu SSL Sectigo (DV)](/pages/web_cloud/web_hosting/ssl_dv): certyfikat ważny dla jednej domeny + jej subdomeny w "www" (przykład: `domain.tld` i `www.domain.tld`) lub **tylko** subdomena (przykład: `sub.domain.tld`).
- [Aktywacja płatnego certyfikatu SSL Sectigo (EV)](/pages/web_cloud/web_hosting/ssl_ev): certyfikat ważny dla jednej domeny + jej subdomeny w "www" (przykład: `domain.tld` i `www.domain.tld`) lub **tylko** subdomena (przykład: `sub.domain.tld`).
- [Zainstaluj spersonalizowany certyfikat SSL](/pages/web_cloud/web_hosting/ssl_custom) : jeśli posiadasz własny certyfikat SSL lub jeśli którekolwiek z 3 poprzednich rozwiązań nie odpowiada Twoim potrzebom.

> [!primary]
>
> Można zainstalować tylko jeden certyfikat SSL na hosting (spośród 4 wyżej wymienionych rozwiązań).
>
> Jeśli chcesz aktywować certyfikat SSL dla kilku domen/subdomen zadeklarowanych na Twoim hostingu, zdecyduj się na instalację [bezpłatnego certyfikatu SSL Let's Encrypt](/links/web/hosting-options-ssl) lub zainstaluj własny [spersonalizowany certyfikat SSL](/pages/web_cloud/web_hosting/ssl_custom).

### Usunięcie certyfikatu SSL na hostingu <a name="delete-ssl"></a>

> [!warning]
>
> Jeśli chcesz usunąć certyfikat SSL z Twojego hostingu i **przed kontynuacją**, upewnij się, że usunięcie certyfikatu SSL nie zakłóci dostępności Twoich stron WWW. W przeciwnym razie użytkownicy napotkają błąd bezpieczeństwa podczas próby uzyskania dostępu do Twojej strony WWW przy użyciu protokołu "HTTPS".

Ponieważ weryfikacja ta jest ściśle związana z ustawieniami Twojej strony WWW, w przypadku trudności zalecamy skorzystanie z pomocy webmastera. Niestety firma OVH nie jest w stanie udzielić wsparcia w tym zakresie.

> [!primary]
>
> **Informacje o migracji do nowego interfejsu zarządzania certyfikatami SSL:**
>
> Dalsza część tego przewodnika jest skierowana do klientów, których usługi hostingowe nie zostały jeszcze przeniesione do nowego interfejsu zarządzania certyfikatami SSL.
> Aby sprawdzić, czy migracja została wykonana, przejdź do strony Hosting w Panelu klienta i w zakładce `Certyfikaty SSL`.
> Jeśli zakładka `Certyfikaty SSL` jest aktywna, Twoja usługa została już przeniesiona do nowego panelu zarządzania. W takim przypadku zapoznaj się z [ten przewodnik](/pages/web_cloud/web_hosting/ssl_management) i zarządzaj certyfikatem SSL.
>
> Ze względów technicznych nie wszystkie usługi hostingowe naszych klientów mogą zostać migrowane za jednym razem. Migracja jest rozdzielona na kilka tygodni i jest wykonywana automatycznie. Nie wpływa ona na działanie usług hostingowych, nie wymaga interwencji ani nie wymaga żadnego działania ze strony użytkownika.
>
> Po pewnym czasie wszystkie usługi hostingowe będą działały w nowym interfejsie zarządzania certyfikatami SSL.

Aby usunąć certyfikat SSL zainstalowany na Twoim hostingu, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. Kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli pozostań w zakładce `Informacje ogólne`{.action}.
6. Przejdź do ramki zatytułowanej `Konfiguracja`.
7. Po prawej stronie wzmianki `Certyfikat SSL` kliknij przycisk `...`{.action}, a następnie `Usuń SSL`{.action}.
8. W oknie, które się wyświetli kliknij `Zatwierdź`{.action}, aby potwierdzić usunięcie certyfikatu SSL.

![Delete SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

Certyfikat zostanie usunięty maksymalnie w ciągu kilku godzin.

> [!warning]
>
> Usunięcie płatnego certyfikatu SSL **Sectigo** (DV lub EV) jest definitywne, nawet jeśli certyfikat jeszcze nie wygasł. Nie wykonasz zwrotu wpłaconej sumy za niewykorzystany czas. Jeśli chcesz ponownie zainstalować certyfikat SSL **Sectigo** (DV lub EV), musisz obowiązkowo złożyć nowe zamówienie i zapłacić za cały nowy wykupiony certyfikat SSL.
>

### Popraw często występujące błędy przy użyciu certyfikatów SSL oferowanych na hostingu

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Ten komunikat wskazuje, że jesteś już właścicielem certyfikatu SSL. Nie ma więc potrzeby aktywacji nowego certyfikatu SSL na Twoim hostingu.

- 1 : Jeśli certyfikat SSL zainstalowany na Twoim hostingu jest bezpłatnym certyfikatem SSL Let's Encrypt, zapoznaj się z naszym przewodnikiem na temat certyfikatu SSL [Let's Encrypt (DV)](/pages/web_cloud/web_hosting/ssl_letsencrypt), aby kontynuować Twoje działania.

- 2: Jeśli certyfikat SSL zainstalowany na Twoim hostingu nie jest tym, którego chcesz użyć, możesz [usunąć aktualny certyfikat SSL](#delete-ssl), a następnie [aktywować nowy certyfikat SSL](#ssl-enable) na Twoim hostingu.

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

- 3: Żadna z domen w zakładce "MultiSite" nie posiada opcji SSL "active":

Aby rozwiązać ten problem, włącz certyfikat SSL dla domeny (domen). Jeśli potrzebujesz bardziej szczegółowych informacji, zapoznaj się z częścią "[Aktywacja certyfikatu SSL](#ssl-enable)" niniejszego przewodnika, aby kontynuować Twoje działania.

#### Zamówiłeś certyfikat SSL Sectigo EV w tym samym czasie, co Twój hosting, ale certyfikat nie jest jeszcze aktywny i hosting nie działa poprawnie

Ma to związek z etapami, które musisz przeprowadzić, aby aktywować certyfikat SSL EV na Twoim hostingu.

W razie potrzeby sprawdź przewodnik "[Hosting WWW - Aktywacja certyfikatu SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)", aby rozwiązać ten problem.

> [!primary]
>
> Jeśli certyfikat SSL EV nie jest aktywny, zamówienie nie zostanie nigdy zamknięte i nie zostanie utworzona faktura. Z tego powodu usługa hostingu nie będzie działać prawidłowo.
>

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
>

## Sprawdź również

[Hosting WWW - Ustaw HTTPS na stronie WWW](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Typowe błędy związane z zabezpieczaniem strony www za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).