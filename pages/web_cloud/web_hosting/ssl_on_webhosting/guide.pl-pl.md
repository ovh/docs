---
title: "Zarządzanie certyfikatem SSL na hostingu"
excerpt: "Dowiedz się, jak zarządzać certyfikatem SSL na Twoim hostingu OVHcloud"
updated: 2023-12-06
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie 

Hosting umożliwia zarządzanie certyfikatem SSL. Certyfikat możesz uzyskać za pośrednictwem OVHcloud lub we własnym zakresie poprzez import certyfikatu na Twój hosting. Kiedy certyfikat zostanie zainstalowany na hostingu, strona lub strony WWW uzyskają bezpieczne połączenie SSL i zaczną używać protokołu HTTPS. 

**Dowiedz się, jak zarządzać certyfikatem SSL na hostingu OVHcloud.**

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](/links/web/hosting){.external}
- Zarejestrowanie co najmniej jednej [domeny](/links/web/domains){.external}
- Dostęp do [Panelu klienta OVHcloud](/links/manager){.external}, sekcja `Web Cloud`{.action}

## W praktyce

Na Twoim hostingu OVHcloud można zarządzać certyfikatem SSL. Przejdź do opisu operacji, którą chcesz przeprowadzić.

[1. Aktywacja certyfikatu SSL na stronie podpiętej w opcji MultiSite](#multisite): jeśli pozwalają na to Twoje rozwiązanie lub certyfikat SSL, możesz podłączyć kilka stron podpiętych w opcji MultiSite do bezpiecznego połączenia SSL.

[2. Aktywacja certyfikatu SSL na Twoim hostingu](#enablessl): pomoże Ci aktywować certyfikat SSL na Twoim hostingu. Może to być bezpłatny lub płatny certyfikat zamówiony przez OVHcloud. Możesz również zaimportować własny certyfikat SSL zamówiony u innego dostawcy.

[3. Odnowienie certyfikatu SSL na hostingu](#regeneratessl): umożliwia wygenerowanie certyfikatu SSL Let's Encrypt na Twoim hostingu, gdy aktywujesz certyfikat SSL na jednej lub kilku stronach podpiętych w opcji MultiSite.

Możesz również [usunąć certyfikat SSL na hostingu](#deletessl). **Pamiętaj, że może to stwarzać ryzyko, jeśli jedna ze stron WWW korzysta obecnie z certyfikatu, który ma zostać usunięty**.

### 1. Aktywacja certyfikatu SSL na stronie podpiętej w opcji MultiSite <a name="multisite"></a>

W zależności od [certyfikatu SSL](/links/web/hosting-options-ssl){.external}, który chcesz zamówić, możesz aktywować bezpieczne połączenie SSL na jednej lub kilku stronach podpiętych w opcji MultiSite. W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external} i wybierz `Web Cloud`{.action}. Kliknij `Hosting`{.action}, po czym wybierz odpowiedni hosting. Przejdź następnie do zakładki `MultiSite`{.action}.

Tabela, która się wyświetla zawiera wszystkie nazwy domen dodanych do Twojego hostingu. W kolumnie "SSL" możesz sprawdzić stan aktywacji bezpiecznego połączenia SSL dla Twoich stron podpiętych w opcji MultiSite.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

Mogą pojawić się wówczas trzy statusy:

|Statusy|Opis|
|---|---|
|Aktywny|Wskazuje, że certyfikat SSL jest już aktywny dla tej strony podpiętej w opcji MultiSite. Jeśli Twoja strona WWW nie używa protokołu HTTPS, skorzystaj z instrukcji zawartych w dokumentacji OVHcloud [Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website){.external}.|
|Do wygenerowania|Wskazuje, że certyfikat SSL został aktywowany dla danej strony podpiętej w opcji MutiSite, ale nie jest jeszcze aktywny. Odnów certyfikat SSL dla Twojego hostingu, aby uwzględniał nowe domeny.|
|Wyłączony|Wskazuje, że certyfikat SSL nie jest aktywny dla danej strony podpiętej w opcji MultiSite. Aby go aktywować, postępuj zgodnie z instrukcjami podanymi poniżej.|

Aby aktywować certyfikat SSL na stronie podpiętej w opcji MultiSite, kliknij przycisk `...`{.action} po prawej stronie podpiętej w opcji MultiSite, a następnie `Zmień domenę`{.action}. W oknie, które się wyświetla zaznacz kratkę `SSL`{.action}. Możesz również włączyć opcję, aby zmienić subdomenę www w tym samym czasie co powiązana nazwa domeny. Postępuj zgodnie z instrukcjami, aż do potwierdzenia modyfikacji.

> [!warning]
>
> Przypisanie certyfikatu SSL do wielokrotnego wejścia poprzez tabelę "MultiSite" jest możliwe tylko wtedy, gdy zamówiłeś bezpłatny certyfikat SSL **Let's Encrypt** dostarczony przez OVHcloud.
>
> Płatne certyfikaty SSL **Sectigo** (DV i EV) są ważne tylko dla jednej domeny (i jej subdomeny *www*). Informacja *Aktywny* nie będzie mogła pojawić się po prawej stronie innych stron podpiętych w opcji MultiSite.
>
> Niektóre certyfikaty SSL **Zewnętrzne** mogą być ważne dla kilku domen jednocześnie. Jeśli korzystasz z jednej z domen, informacja *Aktywny* nie pojawi się również dla wszystkich domen zadeklarowanych w tabeli "MultiSite". Certyfikat SSL będzie ważny dla domen, które *zawiera*.
>

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Po zatwierdzeniu, status bezpiecznego połączenia SSL dla strony podpiętej w opcji MultiSite zaktualizuje się w ciągu kilku sekund, po czym zostaje wyświetlony komunikat "Do wygenerowania". Powtórz operację, jeśli chcesz aktywować SSL na innych stronach podpiętych w opcji MultiSite.

> [!primary]
>
> Możesz mieć w tym stanie dwie sytuacje:
>
> - **Nie masz certyfikatu.**
> Aby przeczytać ten przewodnik, przejdź do sekcji [Aktywuj certyfikat SSL na Twoim hostingu](#enablessl) i wybierz "Darmowy certyfikat (Let's Encrypt)", który obsługuje strony podpięte w opcji MultiSite.
>
> - **Certyfikat SSL jest aktywny, ale dodałeś inne strony podpięte w opcji MultiSite.**
> Aby ponownie wygenerować certyfikat SSL dla pozostałych stron w opcji MultiSite, zapoznaj się z tym przewodnikiem w sekcji [Odnowienie certyfikatu SSL na hostingu WWW](#regeneratessl).
>

### 2. Aktywacja certyfikatu SSL na hostingu <a name="enablessl"></a>

Przed przeprowadzeniem tej konfiguracji upewnij się, że poprzedni etap [aktywacji certyfikatu SSL na stronie podpiętej w opcji MultiSite](#multisite) został wykonany poprawnie. Przynajmniej jedna domena musi mieć aktywowaną domenę SSL lub domenę A, aby aktywować certyfikat SSL.<br>
**Informacje te nie mają zastosowania, jeśli zaznaczysz `Płatny` certyfikat{.action} lub `Importuj certyfikat SSL`{.action}.**

> [!warning]
>
> Przed kontynuowaniem upewnij się również, że wpis lub wpisy MultiSite, dla których aktywujesz opcję SSL, wskazują na adres IP hostingu. Konfiguracja ta jest automatycznie proponowana podczas dodawania lub modyfikowania wpisu w opcji MultiSite, ale musi być wykonywana ręcznie dla domeny, która nie jest zarządzana w Twoim Panelu klienta.<br>
> - Znajdź adres IP Twojego hostingu w zakładce `Informacje ogólne`{.action}, z adnotacją `IPv4`.
>
> ![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4.png){.thumbnail}
>
> - Konfiguracja strefy DNS domeny w opcji MultiSite w sekcji `Domeny`{.action}, w zakładce `Strefa DNS`{.action}. Zmień lub dodaj rekord typu `A` odpowiadający Twojemu rekordowi w opcji MultiSite i wprowadź adres IP Twojego hostingu w `Adres docelowy`.
>
> ![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-an-entry.png){.thumbnail}
>
> Aby uzyskać więcej informacji, zapoznaj się z naszymi przewodnikami [dotyczącymi konfiguracji wpisu w opcji MultiSite](/pages/web_cloud/web_hosting/multisites_configure_multisite) lub [konfiguracji strefy DNS](/pages/web_cloud/domains/dns_zone_edit).

Twój hosting umożliwia uruchomienie [certyfikatu SSL w zależności od potrzeb](/links/web/hosting-options-ssl){.external}:

- bezpłatny certyfikat SSL Let's Encrypt [zawarty w ofercie kompatybilnego hostingu](/links/web/hosting-options-ssl){.external};
- płatny certyfikat SSL [w opcji z kompatybilnym hostingiem](/links/web/hosting-options-ssl){.external};
- import certyfikatu SSL uzyskanego we własnym zakresie.

Przed rozpoczęciem operacji zaloguj się do [Panelu klienta](/links/manager){.external}i wybierz `Web Cloud`{.action}. Kliknij `Hosting`{.action}, po czym wybierz nazwę odpowiedniego hostingu. Następnie przejdź do sekcji `Informacje ogólne`{.action}. W zakładce „Certyfikat SSL” powinna pojawić się informacja „Nie” wskazująca, że na Twoim hostingu nie został zainstalowany żaden certyfikat SSL.

Kliknij przycisk `...`{.action} obok napisu „Certyfikat SSL”, a następnie `Zamów certyfikat SSL`{.action}.

Jeśli pojawi się informacja „Tak”, oznacza to, że certyfikat SSL jest już zainstalowany i skonfigurowany na hostingu. Nie będziesz mógł więc zamówić nowego, dopóki na hostingu będzie zainstalowany poprzedni.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

W oknie, które się pojawi wybierz certyfikat SSL, który chcesz zamówić. Nie wszystkie rozwiązania wymienione powyżej mogą być dostępne. Zależy to od wykupionego przez Ciebie [pakietu hostingowego](/links/web/hosting){.external} lub konfiguracji. Po wybraniu opcji kliknij `Dalej`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

W zależności od wybranego rozwiązania mogą pojawić się dodatkowe etapy:

- **jeśli wybrałeś bezpłatny certyfikat SSL**: niepotrzebne będzie żadne dodatkowe działanie, z wyjątkiem sytuacji, w której jakiś element techniczny uniemożliwia aktywację certyfikatu SSL (w Panelu klienta wyświetli się wówczas stosowna informacja zawierająca listę elementów, które powinieneś zweryfikować) lub potwierdzenie, że Twoja domena może uzyskać certyfikat SSL. W takim przypadku otrzymasz ostrzeżenie wraz z instrukcją postępowania;

- **jeśli wybrałeś płatny certyfikat SSL**: wykonaj kolejne kroki zamówienia, które się wyświetlają. W przypadku niektórych typów certyfikatów SSL może być wymagana specjalna weryfikacja. Możesz otrzymać jedną lub kilka wiadomości e-mail w związku z tym etapem. Postępuj zgodnie z instrukcjami zawartymi w przesłanych wiadomościach, aż do zakończenia instalacji;

- **jeśli wybrałeś import certyfikatu SSL**: wprowadź informacje w odpowiednich polach, które się wyświetlają. Wykorzystaj w tym celu informacje podane przez dostawcę, który wystawił Ci certyfikat. Zazwyczaj dostarczają 3 plików: `certificate.crt`, `private.key` i `ca_bundle.crt`. Po wybraniu opcji `Importuj certyfikat SSL`{.action} kliknij przycisk `Dalej`{.action}. W pierwszej sekcji "Kopiuj zawartość certyfikatu (Tylko RSA):" skopiuj zawartość pliku "certificate.crt", w drugiej sekcji "Kopiuj zawartość klucza prywatnego (niezaszyfrowanego):" skopiuj zawartość pliku "private.key", a w trzeciej sekcji "Kopiuj zawartość łańcucha certyfikatów:" skopiuj zawartość pliku "ca_bundle.crt" i kliknij `Potwierdź`{.action}.

Wdrożenie certyfikatu może zająć od kilku minut do kilku dni, w zależności od typu wybranego certyfikatu. Aby sprawdzić, czy certyfikat SSL jest zainstalowany na Twoim hostingu, przejdź do zakładki `Informacje ogólne`{.action} w Twoim Panelu klienta. Informacja „Tak” powinna pojawić się poniżej sekcji „Certyfikat SSL”.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

### 3. Ponowne wygenerowanie certyfikatu SSL na hostingu <a name="regeneratessl"></a>

> [!primary]
>
> Operacja ta dotyczy wyłącznie certyfikatów SSL Let's Encrypt [zawartych w ofercie kompatybilnego hostingu](/links/web/hosting-options-ssl) umożliwiających aktywację bezpiecznego połączenia SSL dla kilku stron podpiętych w opcji MultiSite.
>

Po aktywowaniu bezpiecznego połączenia SSL na jednej lub kilku stronach podpiętych w opcji MultiSite status wskazuje: „Do wygenerowania”. Operacja ta konieczna jest, aby dodać do certyfikatu SSL na Twoim hostingu wybraną domenę lub domeny.

Zaloguj się do [Panelu klienta](/links/manager){.external} i wybierz `Web Cloud`{.action}. Kliknij `Hosting`{.action}, po czym wybierz odpowiedni hosting. Następnie przejdź do sekcji `Informacje ogólne`{.action}. Kliknij trzy kropki obok napisu „Certyfikat SSL”, a następnie kliknij `Wygeneruj ponownie certyfikat SSL`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Zapoznaj się z informacjami w oknie, które się wyświetli, po czym kliknij `Zatwierdź`{.action}. Zaczekaj następnie, aż certyfikat SSL zostanie odnowiony. Może to potrwać kilka godzin.

Pamiętaj jednak, że Let's Encrypt, organizacja dostarczająca certyfikat SSL zawarty w Twoim hostingu, [ogranicza liczbę dopuszczalnych odnowień certyfikatu do pięciu tygodniowo](https://letsencrypt.org/docs/rate-limits/){.external}. Zalecamy ostrożność, gdyż zbyt duża liczba odnowień w krótkim czasie może spowodować czasową blokadę możliwości odnowienia certyfikatów.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

### Usunięcie certyfikatu SSL na hostingu <a name="deletessl"></a>

Możesz usunąć certyfikat SSL aktualnie zainstalowany na Twoim hostingu. Jednak przed wykonaniem tej operacji **radzimy upewnić się, czy usunięcie certyfikatu nie zakłóci dostępności Twoich stron WWW**. Pamiętaj, że użytkownikom odwiedzającym Twoją stronę będzie wyświetlał się błąd bezpieczeństwa, jeśli będą mieli dostęp do strony WWW poprzez HTTPS, ale nie korzystającej z bezpiecznego połączenia SSL.

Ponieważ weryfikacja ta jest ściśle związana z ustawieniami Twojej strony WWW, w przypadku trudności zalecamy skorzystanie z pomocy webmastera. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie.

Gdy będziesz gotowy do usunięcia certyfikatu SSL zaloguj się do [Panelu klienta](/links/manager){.external} i wybierz `Web Cloud`{.action}. Kliknij `Hosting`{.action}, po czym wybierz nazwę odpowiedniego hostingu. Następnie przejdź do sekcji`Informacje ogólne`{.action}. Kliknij trzy kropki obok napisu „Certyfikat SSL”, a następnie kliknij `Usuń certyfikat SSL`{.action}.

Na stronie, która się wyświetli, zatwierdź usunięcie certyfikatu. Certyfikat zostanie usunięty maksymalnie w ciągu kilku godzin.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

> [!warning]
>
> Usunięcie płatnego certyfikatu SSL **Sectigo** (DV lub EV) jest definitywne, nawet jeśli certyfikat jeszcze nie wygasł. Nie wykonasz zwrotu wpłaconej sumy za niewykorzystany czas. Jeśli chcesz ponownie zainstalować certyfikat SSL **Sectigo** (DV lub EV), musisz obowiązkowo złożyć nowe zamówienie i zapłacić za cały nowy wykupiony certyfikat SSL.
>

### Popraw często występujące błędy przy użyciu certyfikatów SSL oferowanych na hostingu

####  "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Ten komunikat wskazuje, że jesteś już właścicielem certyfikatu SSL. Aktywacja nowego certyfikatu SSL (Let's Encrypt) na Twoim hostingu nie jest zatem konieczna.

Zapoznaj się z częścią "[Aktywacja certyfikatu SSL na stronie podpiętej w opcji MultiSite](#multisite)" niniejszego przewodnika, aby kontynuować swoje działania.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Powiadomienie to można wyjaśnić w trzech przypadkach.

- 1: Domena przypisana do Twojej strony WWW wskazuje na adres IP usługi CDN Twojego hostingu, bez aktywnej opcji GeoCache:

Aby rozwiązać ten problem, w strefie DNS włączonej dla Twojej domeny przypisz adres IP hostingu bez usługi CDN do Twojej domeny.

Aby sprawdzić adres IP hostingu, zapoznaj się z naszym przewodnikiem "[Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Aby zmodyfikować aktywną strefę DNS Twojej domeny, zapoznaj się z naszym przewodnikiem "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- 2: Domena przypisana do Twojej strony WWW nie wskazuje na adres IP Twojego hostingu:

Aby rozwiązać ten problem, w strefie DNS Twojej domeny przypisz adres IP hostingu do Twojej domeny.
Jeśli włączyłeś opcję GeoCache w Twoim hostingu, możesz również użyć adresu IP hostingu WWW w ramach usługi GeoCache.

Aby sprawdzić adres IP hostingu, zapoznaj się z naszym przewodnikiem "[Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Aby zmodyfikować aktywną strefę DNS Twojej domeny, zapoznaj się z naszym przewodnikiem "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- 3: Żadna z domen w zakładce "MultiSite" nie posiada opcji SSL "active":

Aby rozwiązać ten problem, włącz certyfikat SSL dla domeny (domen). Jeśli potrzebujesz więcej informacji, zapoznaj się z częścią "[aktywacja certyfikatu SSL na stronie podpiętej w opcji MultiSite](#multisite)" niniejszego przewodnika, aby kontynuować Twoje działania.

#### Certyfikat SSL jest aktywny na Twoim hostingu, ale na Twojej stronie pojawia się komunikat "Your connection is not private"

Ten komunikat pojawia się w następujących przypadkach:

- 1: Reguła przekierowywania "HTTPS" do adresu URL jest nieprawidłowo skonfigurowana lub nie istnieje w pliku ".htaccess":

Aby to naprawić, zapoznaj się z naszym tutorialem "[przepisz adres URL dostępu do mojej strony za pomocą mod_rewrite w pliku .htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)" lub w przypadku trudności skorzystaj z usług [wyspecjalizowanego dostawcy](/links/partner).

- 2: Niektóre elementy strony internetowej nie są poprawnie przekierowywane do elementów zaszyfrowanych "HTTPS":

Aby to naprawić, upewnij się, że cała Twoja strona WWW jest zaszyfrowana za pomocą protokołu "HTTPS".
W razie potrzeby sprawdź tutorial "[Hosting WWW: przełącz stronę WWW na HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)" lub skorzystaj z pomocy [wyspecjalizowanego usługodawcy](/links/partner) w przypadku trudności.

> [!success]
>
> Odpowiednie elementy na stronie internetowej można zobaczyć bezpośrednio z informacji SSL przeglądarki internetowej, sprawdzając *szczegóły certyfikatu*.
>

#### Zamówiłeś certyfikat SSL Sectigo EV w tym samym czasie, co Twój hosting, ale certyfikat nie jest jeszcze aktywny i hosting nie działa poprawnie

Ma to związek z etapami, które musisz przeprowadzić, aby aktywować certyfikat SSL EV na Twoim hostingu.

Jeśli potrzebujesz, zapoznaj się z naszym przewodnikiem "[Korzystanie z certyfikatu SSL EV dla Twojej strony WWW](/pages/web_cloud/web_hosting/ssl_ev)", aby rozwiązać ten problem.

> [!primary]
>
> Jeśli certyfikat SSL EV nie jest aktywny, zamówienie nie zostanie nigdy zamknięte i nie zostanie utworzona faktura. Z tego powodu usługa hostingu nie będzie działać prawidłowo.
>

#### Po wygaśnięciu certyfikatu SSL Sectigo (DV lub EV) wystąpi błąd "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone"

Ten błąd pojawia się za każdym razem, gdy wygasa certyfikat SSL Sectigo (aktywowany bezpośrednio z hostingu) i zmienia się adres IP hostingu. Dlatego domena powinna wskazywać na poprawny adres IP (rekord typu A) bezpośrednio w aktywnej strefie DNS Twojej domeny.

Aby sprawdzić adres IP hostingu, zapoznaj się z naszym przewodnikiem "[Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Aby zmodyfikować aktywną strefę DNS Twojej domeny, zapoznaj się z naszym przewodnikiem "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).