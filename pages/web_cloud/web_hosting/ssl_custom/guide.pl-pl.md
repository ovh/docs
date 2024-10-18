---
title: "Hosting - Instalacja spersonalizowanego certyfikatu SSL"
excerpt: "Dowiedz się, jak importować i instalować spersonalizowany certyfikat SSL na Twoim hostingu OVHcloud"
updated: 2024-10-17
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Certyfikaty Secure Socket Layer (SSL) umożliwiają szyfrowanie danych przesyłanych z lub do Twojej strony WWW. Dzięki temu osoba lub robot nie będą wyraźnie "słuchać" zapytań wysyłanych lub wysyłanych za pośrednictwem Twojej strony WWW.

OVHcloud oferuje kilka rodzajów certyfikatów SSL dla ofert [hostingu OVHcloud](/links/web/hosting). Zostały one opisane w przewodniku "[Hosting WWW - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Certyfikaty SSL są kluczowe dla bezpieczeństwa Twojej strony WWW.

Możliwe, że w zależności od Twojej sytuacji będziesz chciał zainstalować na Twoim hostingu inny certyfikat SSL niż proponowany przez OVHcloud.

**Dowiedz się, jak importować i instalować na Twoim hostingu spersonalizowany certyfikat SSL.**

## Wymagania początkowe

- Dostęp do [panelu klienta OVHcloud](/links/manager).
- Zamówić lub dysponować [hostingiem OVHcloud](/links/web/hosting), na którym nie został jeszcze zainstalowany żaden certyfikat SSL.
- Zamówić lub dysponować [domeną](/links/web/domains) i mieć wyłączne prawa do jej używania. Nazwa domeny nie może być już powiązana z certyfikatem SSL.
- Posiadanie OpenSSL lub kompatybilnej aplikacji zainstalowanej lokalnie na Twoim urządzeniu.

## W praktyce

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Jednak w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner). OVHcloud nie może udzielić Ci wsparcia w zakresie **instalacji lub subskrypcji certyfikatu SSL innego niż [ten proponowany przez OVHcloud](/links/web/hosting-options-ssl)**. Więcej informacji znajduje się w sekcji "[Sprawdź również](#go-further)" tego przewodnika.
>

### Etap 1 - Uzyskanie certyfikatu Signing Request (CSR) SSL <a name="step-1"></a>

> [!primary]
>
> Ten etap jest opcjonalny, jeśli certyfikat SSL został już wygenerowany i pobrany od Twojego dostawcy SSL lub jeśli dostawca proponuje wygenerowanie certyfikatu SSL podczas zamawiania certyfikatu. Jeśli tak jest, przejdź bezpośrednio do [etapu 2](#step-2).

#### 1.1 - Wygeneruj klucz prywatny i CSR za pomocą wiersza polecenia <a name="step-1.1"></a>

Do uruchomienia poniższych poleceń potrzebny będzie zestaw narzędzi OpenSSL dostępny w wielu dystrybucjach Linux. W przeciwnym razie zainstaluj ją za pomocą menedżera pakietów systemu lub użyj zgodnej aplikacji innej firmy. Środowisko Windows wymaga instalacji programu, takiego jak PuTTY lub dodania funkcji "OpenSSH".
Ponieważ operacja ta jest ściśle związana z używanym przez Ciebie systemem operacyjnym, nie możemy opisać jej przebiegu w tej dokumentacji.

Otwórz interfejs wiersza poleceń (terminal) i wprowadź następujące polecenie:

```sh
openssl req -nodes -newkey rsa:2048 -sha256 -keyout my_private.key -out your_file_name.csr -utf8
```

Zastąp słowa `my_private` i `your_file_name` wybranymi nazwami plików.

Po zrealizowaniu zamówienia terminal poprosi Cię o każdą z następujących informacji (dla Ciebie, Twojej firmy lub stowarzyszenia). Po udzieleniu odpowiedzi na zadane pytanie naciśnij klawisz `ENTER`{.action} na klawiaturze, aby wyświetlić następujące pytanie:

- `Country Name (2 letter code) [AU]` : wpisz wielką literę **Country Code** Twojego kraju. W razie potrzeby sprawdź listę wszystkich **Country Codes** [tutaj](https://www.iban.com/country-codes){.external}.
- `State or Province Name (full name) [Some-State]` : wpisz wielką literą nazwę swojego regionu (lub stanu, jeśli np. mieszkasz w USA).
- `Locality Name (eg, city) []` : wpisz wielką literą nazwę miasta.
- `Organization Name (eg, company) [Internet Widgits Pty Ltd]` : wprowadź nazwę swojej organizacji, firmy lub stowarzyszenia. **Jeśli jesteś osobą prywatną, nie odpowiadaj na to pytanie i naciśnij bezpośrednio klawisz `ENTER`{.action} na klawiaturze, aby wyświetlić następne pytanie**.
- `Organizational Unit Name (eg, section) []` : wprowadź nazwę działu lub działu w ramach swojej organizacji, firmy lub stowarzyszenia. **Jeśli jesteś osobą prywatną, nie odpowiadaj na to pytanie i naciśnij bezpośrednio klawisz `ENTER`{.action} na klawiaturze, aby wyświetlić następne pytanie**.
- `Common Name (e.g. server FQDN or YOUR name) []` : wprowadź nazwę domeny (np. `domain.tld`) lub subdomeny (np. `sub.domain.tld`), dla której chcesz uzyskać certyfikat SSL. **Tutaj można podać tylko jedną** nazwę domeny lub subdomeny. W zależności od dostawcy SSL podaj nazwę Twojej domeny (na przykład: `domain.tld`) lub jej subdomenę w "www" (na przykład: `www.domain.tld`). Skontaktuj się z dostawcą certyfikatu SSL.
- `Email Address []` : wprowadź swój adres e-mail.

Kolejne pytania są opcjonalne i dotyczą głównie zaawansowanych użytkowników. W przypadku wątpliwości zalecamy ich przekazanie przez naciśnięcie przycisku `ENTER`{.action} na klawiaturze, aż terminal nie zacznie zadawać żadnych pytań.

- `A challenge password []` : w przypadku zaawansowanych użytkowników wprowadź tajne hasło, które będzie używane między Tobą a dostawcą certyfikatu SSL. Pamiętaj, że po stronie OVHcloud klucz CSR i klucz prywatny nie muszą być chronione hasłem, aby można je było dodać do hostingu www OVHcloud.
- `An optional company name []` : w przypadku zaawansowanych użytkowników można wpisać inną nazwę organizacji, firmy lub stowarzyszenia.

#### 1.2 - Pobierz klucz prywatny

Aby uzyskać klucz prywatny wygenerowany wcześniej i zawsze w Twoim urządzeniu, wprowadź następującą komendę:

```sh
cat my_private.key
```

Zastąp słowo `my_private` nazwą pliku wybraną wcześniej w [etapie 1.1](#step-1.1) niniejszego przewodnika.

Klucz prywatny wyświetla się wówczas w Twoim urządzeniu w następującej formie:

```console
-----BEGIN PRIVATE KEY-----
XXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXX The Private Key XXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXX
------END PRIVATE KEY------
```

Otwórz edytor tekstu (notatka, LibreOffice, itp.), następnie `kopiuj/wklej`{.action} cały klucz prywatny, w tym słowa `-----BEGIN PRIVATE KEY-----` i `-----END PRIVATE KEY-----`.

Zapisz ten plik i zachowaj go jako kontynuację tego przewodnika, jeśli zostaniesz poproszony przez dostawcę SSL o to podczas składania przyszłego zamówienia.

#### 1.3 - Pobierz CSR

Aby pobrać poprzednio wygenerowany CSR, ale zawsze z poziomu terminala, wprowadź następującą komendę:

```sh
cat your_file_name.csr
```

Zastąp termin `your_file_name` nazwą pliku wybraną wcześniej w [etapie 1.1](#step-1.1) niniejszego przewodnika.

CSR wyświetla się wówczas w Twoim urządzeniu w następującej formie:

```console
-----BEGIN CERTIFICATE REQUEST-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXX The CSR XXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
------END CERTIFICATE REQUEST------
```

Otwórz edytor tekstu, następnie `skopiuj/wklej`{.action} cały CSR, w tym słowa `-----BEGIN CERTIFICATE REQUEST-----` i `-----END CERTIFICATE REQUEST-----`.

Zapisz ten plik i zachowaj go jako kontynuację tego przewodnika, jeśli zostaniesz poproszony przez dostawcę SSL o to podczas składania przyszłego zamówienia.

> [!warning]
>
> Plik zawierający klucz prywatny i plik zawierający CSR są połączone i nie można ich wymieniać. Jeśli wygenerowano kilka kluczy prywatnych lub CSR, upewnij się, że nie łączysz różnych kluczy prywatnych i różnych CSR.

### Etap 2 - Zamów certyfikat SSL u Twojego dostawcy SSL <a name="step-2"></a>

> [!primary]
>
> Ten etap jest opcjonalny, jeśli certyfikat SSL został już wygenerowany i pobrany od dostawcy SSL. W takim przypadku przejdź bezpośrednio do [etapu 3](#step-3).

Zamów certyfikat SSL u swojego dostawcy SSL. Jeśli będzie on potrzebował pomocy, prześlij mu treść CSR wygenerowaną podczas [etapu 1](#step-1) niniejszego przewodnika. Jeśli poprosi Cię o uzupełnienie klucza prywatnego wygenerowanego podczas [etapu 1](#step-1), prześlij go również.

Po złożeniu zamówienia dostawca certyfikatu SSL powinien dostarczyć 3 pliki:

- plik `certificate.crt`;
- plik `private.key`;
- plik `ca_bundle.crt`.

Treść każdego z plików będzie niezbędna do wykonania [etapu 3](#step-3) niniejszego przewodnika.

<a name="3files"></a>

> [!warning]
>
> Niektórzy dostawcy SSL dostarczają zawartość plików `certificate.crt` i `ca_bundle.crt` w jednym pliku. Musisz oddzielić zawartość tego pliku, aby zreformować pliki `certificate.crt` i `ca_bundle.crt`. Zanim przejdziesz do [etapu 3](#step-3) niniejszego przewodnika.
>
> Inni dostawcy SSL dostarczają plik `ca_bundle.crt` w wielu częściach/plikach. Musisz połączyć zawartość tych plików, aby zmienić jeden plik `ca_bundle.crt` i tym samym postępować zgodnie z [etapu 3](#step-3) niniejszego przewodnika.
>
> Jeśli ta sytuacja Cię dotyczy i masz trudności z wykonaniem tych operacji, skontaktuj się z dostawcą certyfikatu SSL w tej sprawie. Pamiętaj, że cała dostarczona przez niego zawartość musi zostać rozłożona tylko na 3 pliki (`certificate.crt`, `ca_bundle.crt` i `private.key`), abyś mógł zainstalować certyfikat SSL.

### Etap 3 - Instalacja spersonalizowanego certyfikatu SSL na Twoim hostingu <a name="step-3"></a>

Jeśli rozpoczniesz od razu lekturę tego przewodnika, ponieważ już posiadasz zewnętrzny certyfikat SSL zamówiony u dostawcy SSL, sprawdź, czy dysponujesz tylko trzema plikami: `certificate.crt`, `private.key` i `ca_bundle.crt`. Jeśli nie, sprawdź informacje [powyżej](#3files).

**Przed zakończeniem instalacji certyfikatu SSL na Twoim hostingu** sprawdź, czy **wszystkie domeny i/lub subdomeny**, dla których jest dostępny certyfikat SSL:

- wskazują na adres IP Twojego hostingu;
- są zadeklarowane w opcji MultiSite na Twoim hostingu;

Sprawdź również, czy:

- kratka `SSL` nie powinna być zaznaczona w przypadku dodawania domeny/subdomeny w opcji MultiSite, której dotyczy zewnętrzny certyfikat SSL.
- Status `Do wygenerowania` lub `Aktywny` nie może być już obecny dla każdej domeny/subdomeny, której dotyczy zewnętrzny certyfikat SSL.

W razie potrzeby sprawdź przewodniki dotyczące "[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)" i "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

Po spełnieniu wszystkich tych wymagań możesz rozpocząć instalację spersonalizowanego certyfikatu SSL na Twoim hostingu.

W tym celu wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli pozostań w zakładce `Informacje ogólne`{.action}.
6. Przejdź do ramki zatytułowanej `Konfiguracja`.
7. Po prawej stronie wzmianki `Certyfikat SSL` kliknij przycisk `...`{.action}, a następnie `Zamów certyfikat SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

W oknie, które się pojawi wybierz z listy dostępnych opcji opcję `Import własnego certyfikatu SSL`{.action}, następnie kliknij `Dalej`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-custom.png){.thumbnail}

Pojawi się następujące okno z 3 formularzami do wypełnienia:

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom-empty.png){.thumbnail}

- `Skopiuj zawartość swojego certyfikatu (tylko RSA)`{.action} : wprowadź treść pliku **certificate.crt** dostarczonego przez Twojego dostawcę SSL, w tym słowa `-----BEGIN CERTIFICATE-----` i `-----END CERTIFICATE-----` (lub ich odpowiedniki). Szyfrowanie RSA to standardowe szyfrowanie certyfikatów SSL.
- `Skopiuj zawartość swojego klucza prywatnego (nie szyfrowanego)`{.action} : wprowadź treść pliku **private.key** dostarczonego przez Twojego dostawcę SSL, w tym słowa `-----BEGIN RSA PRIVATE KEY-----` i `-----END RSA PRIVATE KEY-----` (lub ich odpowiedniki). Informacja *nie szyfrowanego* oznacza, że klucz prywatny nie może być chroniony hasłem lub hasłem. W przeciwnym razie instalacja certyfikatu nie powiedzie się.
- `Skopiuj zawartość łańcucha certyfikatów`{.action} : wprowadź zawartość pliku **ca_bundle.crt** dostarczonego przez Twojego dostawcę SSL, w tym słowa `-----BEGIN CERTIFICATE-----` i `-----END CERTIFICATE-----` (lub ich odpowiedniki).

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom.png){.thumbnail}

Po wypełnieniu 3 formularzy kliknij przycisk `Zatwierdź`{.action}, aby zakończyć import spersonalizowanego certyfikatu SSL na hostingu.

Jeśli certyfikat SSL został poprawnie wygenerowany przez dostawcę SSL i wymagania początkowe są spełnione, pojawia się komunikat informujący, że aktywacja certyfikatu SSL na Twoim hostingu jest w toku.

> [!warning]
>
> Jeśli wystąpi błąd `error check SAN from certificate`, jest to spowodowane co najmniej jedną z dwóch poniższych sytuacji:
>
> - przynajmniej jedna domena/subdomena zadeklarowana w Twoim certyfikacie SSL nie wskazuje na adres IP Twojego hostingu;
> - w zakładce `MultiSite` Twojego hostingu nie zadeklarowano co najmniej jednej domeny/subdomeny zadeklarowanej w Twoim certyfikacie SSL.
>
> Sprawdź przewodniki "[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)" i "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)", aby rozwiązać ten problem.

Instalacja potrwa kilka minut.

Aby sprawdzić, czy instalacja została zakończona, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli pozostań w zakładce `Informacje ogólne`{.action}.
6. Przejdź do ramki zatytułowanej `Konfiguracja`.

Po zakończeniu operacji odnajdziesz, pod adnotacją `Certyfikat SSL`, taką samą wartość jak ta: `Tak - CUSTOM - CUSTOM`.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-custom-enable.png){.thumbnail}

Twój niestandardowy certyfikat SSL jest teraz zainstalowany i aktywny. Od tej chwili możesz korzystać z niej na Twojej stronie WWW, przechodząc na przykład do [strony WWW HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Sprawdź również <a name="go-further"></a>

[Hosting - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hosting WWW - Ustaw HTTPS na stronie WWW](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Typowe błędy związane z zabezpieczaniem strony www za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).