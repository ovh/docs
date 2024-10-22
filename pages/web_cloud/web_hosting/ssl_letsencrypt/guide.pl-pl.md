---
title: "Hosting WWW - Aktywacja darmowego certyfikatu SSL Let's Encrypt"
excerpt: "Dowiedz się, jak aktywować lub odnowić bezpłatny certyfikat SSL Let's Encrypt na Twoim hostingu"
updated: 2024-10-22
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Certyfikaty Secure Socket Layer (SSL) umożliwiają szyfrowanie informacji przesyłanych na Twojej stronie WWW. Dzięki temu możesz uniknąć sytuacji, w której osoba lub złośliwy robot "odsłuchuje" zapytań wysyłanych lub wysyłanych z Twojej strony WWW.

OVHcloud oferuje kilka typów certyfikatów SSL dla naszych ofert [hosting OVHcloud](/links/web/hosting). Są one przedstawione w naszym przewodniku "[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Certyfikaty SSL są niezbędne dla bezpieczeństwa Twojej strony WWW.

Istnieją trzy rodzaje certyfikatów SSL:

- Domain Validation (DV)
- Organizacja potwierdzania (OV)
- Rozszerzenie weryfikacji (EV)

Poziomy szyfrowania SSL są identyczne między tymi trzema typami certyfikatu.

Główną różnicą jest poziom weryfikacji, który zostanie przeprowadzony przez organ certyfikacji (AC) wydający certyfikat SSL i poświadczający jego autentyczność.

Let's Encrypt to bezpłatny, zautomatyzowany, otwarty i nienastawiony na zysk organ certyfikacji. Więcej informacji na stronie <https://letsencrypt.org/pl/about/>.

**Dowiedz się, jak aktywować lub wygenerować bezpłatny certyfikat SSL Let's Encrypt na Twoim hostingu OVHcloud.**

## Wymagania początkowe

- Dostęp do [panelu klienta OVHcloud](/links/manager).
- Zamówić lub dysponować [hostingiem OVHcloud](/links/web/hosting), na którym nie został jeszcze zainstalowany żaden certyfikat SSL.
- Zamówić lub dysponować [domeną](/links/web/domains) i mieć wyłączne prawa do jej używania. Nazwa domeny nie może być już powiązana z certyfikatem SSL.

## W praktyce

### 1. Przypisz wstępnie przyszły certyfikat SSL Let's Encrypt do Twojej (Twoich) domeny/subdomeny(ów) <a name="ssl-multisite"></a>

W przeciwieństwie do innych certyfikatów, [bezpłatny certyfikat SSL Let's Encrypt](/links/web/hosting-options-ssl) może być aktywowany dla kilku domen/subdomen jednocześnie. Maksymalna liczba domen na hosting to **99**.

Dlatego przed zainstalowaniem certyfikatu SSL Let's Encrypt przygotuj wszystkie domeny/subdomeny, które będą korzystać z tego certyfikatu SSL.

W tym celu wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli kliknij zakładkę `MultiSite`{.action}.

Tabela, która się wyświetla zawiera wszystkie domeny/subdomeny zadeklarowane w opcji MultiSite na Twoim hostingu. W kolumnie "SSL" możesz sprawdzić stan aktywacji SSL dla Twoich domen/subdomen zadeklarowanych w opcji MultiSite.

![manage SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

W tej kolumnie mogą pojawić się trzy statusy:

|Stan|Opis|
|---|---| 
|Aktywny|Certyfikat SSL został już włączony dla tej pozycji w opcji MultiSite. Jeśli tak jest, [sprawdź, czy certyfikat SSL jest certyfikatem SSL Let's Encrypt] (#check-ssl). Jeśli tak, sprawdź najpierw [szczególny przypadek] (#regenerate-ssl) znajdujący się poniżej w tym przewodniku. W przeciwnym razie zapoznaj się z przewodnikiem "[Hosting WWW - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)", jeśli chcesz usunąć aktualny certyfikat SSL (bezpłatny lub płatny), a następnie zastąpić go certyfikatem SSL Let's Encrypt.|
|Do wygenerowania|Włączono certyfikat SSL dla tego wpisu w opcji MultiSite, ale nie jest on jeszcze aktywny. W tym celu [odnów certyfikat SSL Let's Encrypt] (#regenerate-ssl), aby zawierał nowe domeny/subdomeny zadeklarowane w opcji MultiSite, dla których status `Do wygenerowania` jest obecny.|
|Wyłączony|Certyfikat SSL nie jest włączony dla tego wpisu w opcji MultiSite. Aby go aktywować, wykonaj poniższe kroki.|

> [!primary]
>
> Jeśli jedna z Twoich domen/subdomen nie została jeszcze zadeklarowana na Twoim hostingu, zapoznaj się z następującymi przewodnikami, aby rozwiązać ten problem:
>
> - [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
> - [Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).

Aby wstępnie przypisać opcję SSL Let's Encrypt dla domeny/subdomeny zadeklarowanej jako MultiSite na Twoim hostingu, przejdź do zakładki `MultiSite`{.action} i wykonaj następujące czynności:

1. W tabeli zawierającej wszystkie domeny/subdomeny zadeklarowane wcześniej w opcji MultiSite na Twoim hostingu kliknij przycisk `...`{.action} po prawej stronie wiersza odpowiedniej domeny/subdomeny.
2. Następnie kliknij `Zmień domenę`{.action}.
3. W oknie, które się wyświetli zaznacz kratkę `SSL`{.action}, następnie kliknij `Dalej`{.action}.
4. W nowym oknie, które się pojawi, znajdziesz podsumowanie konfiguracji Twojej domeny/subdomeny. Kliknij przycisk `Zatwierdź`{.action}, aby zastosować żądaną zmianę dla tego wpisu MultiSite.

Po zatwierdzeniu zmiany, status w kolumnie SSL dla danego wpisu MultiSite zmieni się z `Wyłączony` na `Do wygenerowania` po kilku sekundach. Jeśli posiadasz inne domeny/subdomeny wśród pozycji MultiSite na Twoim hostingu, powtórz tę operację tyle razy, ile to konieczne.

### 2. Aktywacja certyfikatu SSL Let's Encrypt <a name="enable-ssl"></a>

Przed rozpoczęciem konfiguracji upewnij się, że operacja [poprzedni etap] (#ssl-multisite) została zakończona pomyślnie. W karcie `MultiSite`{.action} Twojego hostingu WWW przynajmniej jedna domena/subdomena musi posiadać opcję SSL ze statusem `Aktywny` lub `Do wygenerowania` aby zainstalować certyfikat SSL Let's Encrypt.

> [!warning]
>
> **Przed kontynuowaniem** sprawdź, czy **wszystkie domeny i/lub subdomeny**, których dotyczy Twój przyszły certyfikat SSL Let's Encrypt:
>
> - wskazują na adres IP Twojego hostingu;
> - są dostępne w opcji MultiSite na Twoim hostingu.
>
> Sprawdź przewodniki:
>
> - [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
> - [Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).

Aby aktywować certyfikat Let's Encrypt SSL, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli pozostań w zakładce `Informacje ogólne`{.action}.
6. Przejdź do ramki zatytułowanej `Konfiguracja`.
7. Po prawej stronie wzmianki `Certyfikat SSL` kliknij przycisk `...`{.action}, a następnie `Zamów certyfikat SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

W oknie, które się pojawi wybierz z listy dostępnych opcji opcję `Bezpłatny certyfikat (Let's Encrypt)`{.action}, następnie kliknij na `Dalej`{.action}, aby zatwierdzić zlecenie aktywacji certyfikatu SSL.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

Wdrożenie certyfikatu SSL Let's Encrypt może potrwać kilka godzin.

<a name="check-ssl"></a>

Aby sprawdzić, czy instalacja została zakończona, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli pozostań w zakładce `Informacje ogólne`{.action}.
6. Przejdź do ramki zatytułowanej `Konfiguracja`.

Po zakończeniu operacji odnajdziesz, pod adnotacją `Certyfikat SSL`, taką samą wartość jak ta: `Tak - LETSENCRYPT - DV`.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

Certyfikat SSL Let's Encrypt jest teraz zainstalowany i aktywny. Od tej chwili możesz korzystać z niej w ramach (swoich) nowej(ych) strony(ów) www, przechodząc na przykład do (swoich) nowej(ych) [strony(ów) www(ów) HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Przypadek szczególny: Odnowienie certyfikatu SSL Let's Encrypt na hostingu <a name="regenerate-ssl"></a>

Podczas korzystania z hostingu możesz zostać poproszony o dodanie domen/subdomen w opcji MultiSite, dla których będziesz potrzebował włączyć opcję SSL.

Nawet jeśli dla niektórych domen/subdomen aktywowałeś już certyfikat SSL Let's Encrypt, nadal możesz dodawać nowe (z ograniczeniem do **99** domen/subdomen podanym powyżej w tym przewodniku).

W tym celu wykonaj **w kolejności** następujące operacje:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. Przypisz wstępnie certyfikat SSL Let's Encrypt do swoich nowych domen/subdomen zgodnie z [część pierwsza](#ssl-multisite) niniejszego przewodnika.
3. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
4. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
5. Wybierz odpowiedni hosting.
6. Na stronie, która się wyświetli pozostań w zakładce `Informacje ogólne`{.action}.
7. Przejdź do ramki zatytułowanej `Konfiguracja`.
8. Po prawej stronie wzmianki `Certyfikat SSL` kliknij przycisk `...`{.action}, a następnie `Wygeneruj ponownie certyfikat SSL`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Zapoznaj się z informacjami wyświetlanymi w oknie, które się wyświetli, następnie kliknij przycisk `Zatwierdź`{.action}. Zaczekaj następnie, aż certyfikat SSL zostanie odnowiony.

Może to potrwać kilka godzin.

> [!warning]
>
> Let's Encrypt, organ wydający certyfikat SSL, [ogranicza do pięciu liczbę możliwych ponownych generacji w tygodniu](https://letsencrypt.org/docs/rate-limits/){.external}. Dlatego należy uważać na różne regeneracje, które można podjąć w krótkim czasie, aby nie zostać tymczasowo zablokowanym.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

Certyfikat Let's Encrypt SSL został odnowiony i jest aktywny. Od tej chwili możesz korzystać z niej w ramach (swoich) nowej(ych) strony(ów) www, przechodząc na przykład do (swoich) nowej(ych) [strony(ów) www(ów) HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Sprawdź również

[Hosting - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hosting WWW - Ustaw HTTPS na stronie WWW](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Typowe błędy związane z zabezpieczaniem strony www za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).