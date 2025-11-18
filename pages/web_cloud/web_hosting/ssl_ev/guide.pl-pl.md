---
title: "Hosting WWW - Aktywacja certyfikatu SSL Sectigo EV"
excerpt: "Dowiedz się, jak zamówić i zainstalować certyfikat SSL Sectigo EV na Twoim hostingu WWW OVHcloud"
updated: 2025-06-16
---

## Wprowadzenie

Certyfikaty Secure Socket Layer (SSL) umożliwiają szyfrowanie informacji przesyłanych na Twojej stronie WWW. Dzięki temu możesz uniknąć sytuacji, w której osoba lub złośliwy robot "odsłuchuje" zapytań wysyłanych lub wysyłanych z Twojej strony WWW.

OVHcloud oferuje kilka typów certyfikatów SSL dla naszych ofert [hosting OVHcloud](/links/web/hosting). Są one przedstawione w naszym przewodniku "[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Certyfikaty SSL są niezbędne dla bezpieczeństwa Twojej strony WWW.

Istnieją trzy rodzaje certyfikatów SSL:

- Domain Validation (DV)
- Organizacja potwierdzania (OV)
- Rozszerzenie weryfikacji (EV)

Poziomy szyfrowania SSL są identyczne między tymi trzema typami certyfikatu.

Główną różnicą jest poziom weryfikacji, który zostanie przeprowadzony przez organ certyfikacji (AC) wydający certyfikat SSL i poświadczający jego autentyczność.

Certyfikaty SSL EV są certyfikatami o najwyższych poziomach weryfikacji i bezpieczeństwa. Certyfikat SSL EV jest zazwyczaj wykorzystywany do tworzenia bardzo dużych stron www lub wrażliwych stron internetowych. Certyfikat ten zapewni najwyższy dostępny poziom identyfikacji.

W przypadku hostingu współdzielonego OVHcloud instytucja certyfikująca certyfikaty SSL EV to [Sectigo](https://sectigostore.com).

> [!warning]
>
> Certyfikaty SSL EV nie są dostępne dla wszystkich. Sprawdź, czy możesz zamówić licencję **przed**, korzystając z informacji podanych w tym przewodniku [Wymagania początkowe](#requirements).
>
> Pamiętaj, że po złożeniu i przekazaniu zamówienia do naszego dostawcy certyfikatów/autoryzacji Sectigo, **nie będzie możliwe zwrot**.
>

**Dowiedz się, jak zamówić i zainstalować certyfikat SSL Sectigo EV na Twoim hostingu WWW OVHcloud**
    
## Wymagania początkowe <a name="requirements"></a>

- Dostęp do [Panelu klienta OVHcloud](/links/manager)
- Zamów lub zamów [hosting OVHcloud](/links/web/hosting), dla którego nie został zainstalowany żaden certyfikat SSL.
- Zamów [domenę](/links/web/domains) i uzyskaj wyłączne prawa do korzystania z tej domeny. Nazwa domeny nie może być już powiązana z certyfikatem SSL.
- Być organizacją (firma, agencja rządowa, itp.) zarejestrowaną w oficjalnym rejestrze.
- Posiadanie upoważnienia organizacji do zamawiania certyfikatu SSL Sectigo EV.
- Być w stanie dokładnie uzasadnić informacje i dane kontaktowe dotyczące organizacji.

Aby sprawdzić, czy możesz zamówić certyfikat SSL Sectigo EV, przejdź do [link](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-).
  
## W praktyce

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner). Niestety nie będziemy w stanie udzielić wsparcia **na wszystkich etapach weryfikacji bezpośrednio z organem certyfikującym Sectigo**. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) niniejszego przewodnika.
>

### Etap 1: zamów certyfikat SSL Sectigo EV

Certyfikaty SSL Sectigo EV oferowane przez OVHcloud są ważne tylko w jednym z dwóch poniższych przypadków w ramach Twojego hostingu:

- jedna domena + jej subdomena w "WWW" (przykład: `domain.tld` i `www.domain.tld`);
- jedna subdomena (na przykład: `sub.domain.tld`).

Oznacza to, że jeśli na Twoim hostingu zainstalowane są inne domeny/subdomeny zadeklarowane w opcji MultiSite, nie będą one mogły korzystać z certyfikatu SSL.

Można zainstalować tylko jeden certyfikat SSL na hosting.

Jeśli chcesz aktywować certyfikat SSL dla kilku domen/subdomen zadeklarowanych na Twoim hostingu, zdecyduj się na instalację [bezpłatnego certyfikatu SSL Let's Encrypt](/links/web/hosting-options-ssl) lub zainstaluj własny [spersonalizowany certyfikat SSL](/pages/web_cloud/web_hosting/ssl_custom).

#### 1.1 - Dla już istniejącej domeny i hostingu OVHcloud

> [!warning]
>
> **Zanim przejdziesz dalej**, sprawdź, czy **nazwa domeny i/lub subdomeny**, której będzie dotyczyć Twój przyszły certyfikat SSL Sectigo EV:
>
> - wskazuje na adres IP hostingu;
> - posiada opcję MultiSite na Twoim hostingu.
>
> Sprawdź przewodniki:
>
> - [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
> - [Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).
>
> Jeśli chcesz zamówić certyfikat SSL Sectigo EV dla domeny (na przykład: `domain.tld`), sprawdź, czy jego subdomena oznaczona jest jako "www" (na przykład: `www.domain.tld`) wskazuje również na adres IP Twojego hostingu i czy jest poprawnie zadeklarowana jako MultiSite.
>
> W razie potrzeby, jeśli zamówisz certyfikat SSL Sectigo EV i nie upewnisz się, czy zamówiłeś poprzednie punkty, wprowadź poprawki. Należy usunąć wykupiony wcześniej certyfikat SSL Sectigo EV **bez możliwości otrzymania zwrotu płatności**, a następnie zamówić nowy. Celem jest, aby nowy certyfikat SSL Sectigo EV obejmował zarówno Twoją domenę `domain.tld`, jak i jej subdomenę "www" `www.domain.tld`.
>
> Przypominamy, że jeśli subskrybujesz certyfikat SSL Sectigo EV bezpośrednio dla subdomeny (na przykład: `sub.domain.tld`), ta sytuacja Cię nie dotyczy.

> [!primary]
>
> **Informacje o migracji do nowego interfejsu zarządzania certyfikatami SSL:**
>
> Pozostała część 1.1 jest skierowana do klientów, których usługi hostingowe nie zostały jeszcze przeniesione do nowego interfejsu zarządzania certyfikatami SSL.
> Aby sprawdzić, czy migracja została wykonana, przejdź do strony Hosting w Panelu klienta i w zakładce `Certyfikaty SSL`.
> Jeśli zakładka `Certyfikaty SSL` jest aktywna, Twoja usługa została już przeniesiona do nowego panelu zarządzania. W takim przypadku zapoznaj się z [ten przewodnik](/pages/web_cloud/web_hosting/ssl_management) i zarządzaj certyfikatem SSL.
>
> Ze względów technicznych nie wszystkie usługi hostingowe naszych klientów mogą zostać migrowane za jednym razem. Migracja jest rozdzielona na kilka tygodni i jest wykonywana automatycznie. Nie wpływa ona na działanie usług hostingowych, nie wymaga interwencji ani nie wymaga żadnego działania ze strony użytkownika.
>
> Po pewnym czasie wszystkie usługi hostingowe będą działały w nowym interfejsie zarządzania certyfikatami SSL.

Aby zamówić certyfikat SSL Sectigo EV, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. Kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli pozostań w zakładce `Informacje ogólne`{.action}.
6. Przejdź do ramki zatytułowanej `Konfiguracja`.
7. Po prawej stronie wzmianki `Certyfikat SSL` kliknij przycisk `...`{.action}, a następnie `Zamów certyfikat SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

W oknie, które się pojawi wybierz z listy możliwych opcji opcję `Płatny certyfikat`{.action}.

Następnie z rozwijanej listy wybierz odpowiednią domenę/subdomenę, po czym kliknij `Dalej`{.action}.

W nowym oknie, które się wyświetli kliknij `Zatwierdź`{.action}, aby uzyskać przekierowanie do zamówienia certyfikatu SSL Sectigo EV.

Wybierz **Certyfikat SSL Sectigo EV**, po dotarciu do tunelu poleceń, następnie kontynuuj zamówienie.

Wpisz poprawnie informacje wymagane przez **Sectigo**, zanim otrzymasz certyfikat SSL Sectigo EV. 

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Kliknij polecenie `Dalej`{.action} raz **wszystkie elementy** poprawnie wprowadzone.

Postępuj zgodnie z poleceniem aż do płatności, aby potwierdzić zlecenie utworzenia certyfikatu SSL.

> [!alert]
>
> Po zatwierdzeniu zamówienia wniosek o certyfikat SSL Sectigo EV jest wysyłany do instytucji certyfikującej **Sectigo**.
>
> **Przed opłaceniem certyfikatu** sprawdź, czy spełniasz warunki uprawniające do korzystania z certyfikatu SSL Sectigo EV.
>
> Faktycznie, zwrot kosztów certyfikatu SSL Sectigo EV nie będzie możliwy, **nawet jeśli procedura weryfikacji w Sectigo nie zakończy się**.
>

#### 1.2 - Dla nowej domeny i nowego hostingu

Jeśli jeszcze nie zamówiłeś domeny i przypisanego hostingu, przejdź do [strony głównej OVHcloud](/links/website), wpisz nazwę domeny w **formularz przeszukiwania przeznaczony do tego celu**, a następnie kliknij `Szukaj`{.action}, aby rozpocząć zamówienie.

![SSL EV select domain](/pages/assets/screens/website/order/ssl-ev-search-bar.png){.thumbnail}

Następnie wybierz domenę, wybierz hosting oraz opcje, aż do etapu `Konfiguracja hostingu`.

Wybierz moduł `moduł za 1 kliknięciem`{.action} i `CDN`{.action} i przejdź na dół strony, aż do sekcji `Zabezpiecz swoją stronę za pomocą naszych certyfikatów SSL`{.action}.

![SSL EV order](/pages/assets/screens/website/order/ssl-ev-selection.png){.thumbnail}

Wybierz `Sectigo EV SSL`{.action} i kliknij `Dalej`{.action}.

Na nowej stronie, która się wyświetla, wprowadź poprawnie informacje wymagane przez **Sectigo**, zanim certyfikat SSL Sectigo EV zostanie wydany:

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Kliknij polecenie `Dalej`{.action} raz **wszystkie elementy** poprawnie wprowadzone.

Postępuj zgodnie z poleceniami aż do płatności i rozpocznij instalację swoich usług.

> [!alert]
>
> Po zatwierdzeniu zamówienia wniosek o certyfikat SSL Sectigo EV jest wysyłany do instytucji certyfikującej **Sectigo**. 
>
> **Przed opłaceniem certyfikatu** sprawdź, czy spełniasz warunki uprawniające do korzystania z certyfikatu SSL Sectigo EV.
>
> Faktycznie, zwrot kosztów certyfikatu SSL Sectigo EV nie będzie możliwy, **nawet jeśli procedura weryfikacji w Sectigo nie zakończy się**.
>

### Etap 2: weryfikacji z Urzędem Certyfikacji (AC) Sectigo

Wszystkie działania opisane na tym etapie mogą być przeprowadzane w ciągu kilku dni. Terminy **zależą** od weryfikacji przeprowadzonej przez Sectigo.

> [!warning]
>
> Na tym etapie cały proces zależy od dostawcy certyfikatu **Sectigo** oraz informacji podanych podczas składania zamówienia na certyfikat SSL Sectigo EV. 
>
> Tylko **Sectigo** będzie mógł interweniować na tym etapie, a OVHcloud nie będzie mógł działać na tym poziomie.
>
> Rola AC Sectigo polega na niezależnym i bezstronnym poświadczaniu informacji Twojej organizacji, które mają zostać włączone do certyfikatu SSL Sectigo EV.
>
> To **Sectigo** decyduje, czy wydać certyfikat EV SSL i w ogóle OVHcloud. Sectigo jest z definicji jedynym posiadaczem certyfikacji.
>

#### 2.1 - Otrzymanie wiadomości e-mail z potwierdzeniem przez Sectigo

Po zrealizowaniu zamówienia Sectigo prześle Ci wiadomość e-mail z linkiem uwierzytelniającym i z procedurą, którą należy postępować.
Sprawdź Twoje dane i zatwierdź zlecenie, postępując zgodnie z instrukcjami zawartymi w tym e-mailu. 

Aby upewnić się, że korespondencja za pomocą wiadomości e-mail z Sectigo przebiega prawidłowo, sprawdź również ważność konta e-mail podanego w formularzu podczas składania zamówienia na certyfikat SSL Sectigo EV, jak również adres e-mail do kontaktu powiązany z Twoim [Panelu klienta OVHcloud](/links/manager).

> [!primary]
>
> Jednocześnie i w celu potwierdzenia własności Twojej domeny do Sectigo, plik w formacie *.txt* jest automatycznie wprowadzany do przestrzeni FTP Twojego hostingu. Certyfikat zostanie usunięty, gdy nie będzie już potrzebny w Sectigo.
>
> Pamiętaj, że niektóre ograniczenia zastosowane po Twojej stronie (np. w pliku ".htaccess") mogą uniemożliwić weryfikację.
> Jeśli uprawnienia dostępu FTP "CHMOD" są również ograniczone lub niewystarczające, weryfikacja może być również zablokowana.
>
> Zalecamy również **nie** aktywacji lub pozostawienia w aktywnym katalogu [firewall aplikacyjny](/pages/web_cloud/web_hosting/multisites_activating_application_firewall), dostępnym z naszym hostingiem przez cały czas instalacji certyfikatu SSL Sectigo EV.
>

#### 2.2 - Weryfikacje wykonane przez Urząd Certyfikacji Sectigo

Sectigo sprawdzi następnie, czy Twoja organizacja istnieje i jest zarejestrowana w oficjalnych rejestrach.

> [!primary]
>
> Sectigo może nie być w stanie sprawdzić wszystkich informacji w oficjalnych rejestrach. Służby Sectigo mogą skontaktować się z Tobą telefonicznie na numer podany podczas składania zamówienia lub na numer telefonu firmy.
>

Sectigo sprawdzi, czy posiadasz wyłączność/autorytet w zakresie własności i korzystania z domeny, z którą będziesz korzystać z certyfikatu SSL Sectigo EV.

#### 2.3 - Ostatnie weryfikacje przez telefon z Sectigo

Po dokonaniu weryfikacji przez Sectigo skontaktujemy się z Tobą przez ich usługi, aby dokończyć subskrypcję certyfikatu SSL Sectigo EV.

> [!success]
>
> Szczegółowe informacje na temat operacji opisanych **w etapie 2** powyżej znajdują się w [oficjalnej dokumentacji Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-) na ten temat.
>

### Etap 3: instalacja certyfikatu SSL Sectigo EV z domeną i hostingiem OVHcloud

Po przeprowadzeniu wszystkich weryfikacji przez Sectigo ich usługi generują certyfikat SSL Sectigo EV i przekazują nam niezbędne informacje do zainstalowania go na Twoim hostingu.

Aby w pełni korzystać z certyfikatu SSL Sectigo EV, wystarczy kliknąć na [załadować stronę WWW na HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Sprawdź również <a name="go-further"></a>

[Oficjalna strona Sectigo](https://sectigostore.com)

[Opis weryfikacji przeprowadzonych przez Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-)

[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Przejdź na stronę przez HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 