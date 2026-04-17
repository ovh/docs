---
title: "Pierwsze kroki z hostingiem Cloud Web"
excerpt: "Dowiedz się, jak rozpocząć korzystanie z hostingu Cloud Web"
updated: 2026-03-31
---

## Wprowadzenie

Oferta hostingu Cloud Web łączy w sobie 20 lat doświadczenia OVHcloud w zakresie hostingu WWW oraz wydajność rozwiązania Public Cloud. Podobnie jak w przypadku klasycznych hostingów OVHcloud, Twoje strony WWW są hostowane w ramach usługi zarządzanej 24/7\. Dodatkowo zyskujesz więcej funkcjonalności, jak np. wydajne dyski SSD.

**Dowiedz się, jak rozpocząć korzystanie z hostingu Cloud Web.**

## Wymagania początkowe

- Posiadanie hostingu SSD [Cloud Web](/links/web/hosting-cloud-web-offer)
- Otrzymanie wiadomość e-mail z potwierdzeniem, że usługa Cloud Web została zainstalowana
- Posiadanie [domeny](/links/web/domains), pod którą dostępna będzie Twoja strona WWW

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

### 1 - Określenie ram projektu

Hosting z dyskami SSD, Cloud Web, oferuje więcej możliwości konfiguracji niż klasyczny hosting, aby jak najlepiej dopasować się do Twojego projektu. Bardzo istotne jest, abyś posiadał jasną wizję tego, co chcesz osiągnąć. Dlatego zalecamy, abyś:

- **określił, jaki projekt zamierzasz zainstalować**: chcesz stworzyć blog, sklep internetowy? Chcesz dzielić się pasją czy promować działalność Twojej firmy w Internecie? Zanim przystąpisz do realizacji projektu, jasno go zdefiniuj;

- **pobierz wymagania techniczne niezbędne do instalacji**: istnieje możliwość, że z projektem, który chcesz zainstalować, wiążą się specyficzne wymagania techniczne. Zapoznaj się z nimi przed instalacją;

- **upewnij się, że Twój projekt jest kompatybilny z hostingiem Cloud Web**: potrzebny Ci określony framework lub SQL? Jeśli jeszcze tego nie zrobiłeś, upewnij się, że jest on dostępny wraz z Twoim hostingiem [Cloud Web](/links/web/hosting-cloud-web-offer).

Po wybraniu różnych możliwości i określeniu ram Twojego projektu możesz przystąpić do jego umieszczenia w sieci.

### 2 - Wybór frameworku

W ramach Cloud Web udostępniamy różne języki programowania do budowy Twojego projektu. Jeśli chcesz użyć innego języka niż ustawione domyślnie PHP, wybierz framework odpowiadający wybranemu przez Ciebie językowi.

Aktualnie dostępne języki to:

- PHP
- Node.js
- Python
- Ruby

Aby uzyskać dostęp do frameworków Twojego hostingu [Cloud Web](/links/web/hosting-cloud-web-offer), kliknij na poniższe karty, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting Cloud Web.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Frameworki`{.action}. Framework jest automatycznie tworzony podczas instalacji hostingu. Oznaczony jest jako `Wybór domyślny` w tabeli, która się wyświetli.
>>
>> Aby zmodyfikować wcześniej skonfigurowany framework, kliknij przycisk `...`{.action} po jego prawej stronie, a następnie `Zmodyfikuj`{.action}.
>>
> **Krok 3**
>>
>> Jeśli dysponujesz pakietem [Cloud Web](/links/web/hosting-cloud-web-offer) z 2 vCores, możesz dodać drugi framework (maksymalnie 2 na ofertę), klikając przycisk `Operacje`{.action}, a następnie `Dodaj framework`{.action}.

Zanim przejdziesz do kolejnych kroków, upewnij się, że posiadasz framework lub frameworki niezbędne do Twojego projektu.

Aby sprawdzić, czy w ramach hostingu Cloud Web dysponujesz 2 vCores, kliknij na poniższe karty, aby wyświetlić kolejno każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting Cloud Web.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> W ramce **Abonament** i pod napisem `Pakiet` sprawdź, czy jest tam wskazany numer `Cloud Web 3`.

### 3 - Utworzenie zmiennych środowiskowych (opcjonalnie)

Jeśli chcesz wdrożyć kilka projektów w różnych środowiskach (na przykład: dewelopment, testy lub produkcja), wprowadź zmienne, aby kod mógł odpowiednio działać. W tym celu Cloud Web oferuje możliwość zdefiniowania zmiennych środowiskowych, do których ma dostęp kod Twojej strony WWW lub aplikacji internetowej.

Dzięki temu nie jest na przykład konieczne określanie pliku ".env" we frameworku PHP Laravel, jak wskazuje dokumentacja: <https://laravel.com/docs/master/configuration>.

Aby dodać zmienną środowiskową, kliknij na poniższe karty, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting Cloud Web.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Zmienne środowiskowe`{.action}. Zmienne środowiskowe utworzone w ramach Twojej oferty wyświetlają się w tabeli.
>>
> **Krok 3**
>>
>> Aby dodać nową zmienną, kliknij przycisk `Operacje`{.action}, a następnie `Dodaj zmienną środowiskową`{.action}. Następnie postępuj zgodnie ze wskazówkami w zależności od zmiennej, którą chcesz utworzyć.
>>
>> ![Dodawanie zmiennej środowiskowej na hostingu Cloud Web](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/environment-variables/add-an-environment-variable.png){.thumbnail}

Jeśli nie używasz środowiska deweloperskiego zawierającego zmienne środowiskowe lub jeśli chcesz sprawdzić, czy zmienne działają poprawnie, możesz utworzyć skrypt, który przeprowadzi weryfikację. Poniżej przykład skryptu, który może być pomocny w przeprowadzanej przez Ciebie operacji, nie zastąpi on jednak pomocy technicznej webmastera.

- **W przypadku PHP**:

```php
<?php echo "ENV: " . $_ENV['DB_DATABASE']; ?>
```

- **W przypadku Node.js**:

```sh
var http = require('http');

http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});

    response.write( process.env.DB_DATABASE);

    response.end();
}).listen(80);
```

Pamiętaj, aby zastąpić informację "DB_DATABASE", zapisaną w powyższych skryptach, odpowiednią zmienną środowiskową.

### 4 - Konfiguracja dodatkowych domen jako MultiSite (opcjonalnie)

Teraz, kiedy środowisko Twojego hostingu Cloud Web jest gotowe, możesz skonfigurować dodatkowe domeny w opcji MultiSite. Dzięki temu będziesz mógł podzielić Twoją przestrzeń i hostować na niej kilka stron WWW. Jeśli opcja ta jest niezbędna dla Twojego projektu, kliknij na poniższe karty, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting Cloud Web.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `MultiSite`{.action}. Tabela, która się wyświetla, zawiera wszystkie nazwy domen dodanych do Twojego hostingu. Niektóre z nich zostały utworzone automatycznie podczas instalacji Twojego hostingu.
>>
>> Aby dodać nową domenę, kliknij przycisk `Dodaj domenę lub subdomenę`{.action} i postępuj zgodnie z instrukcjami, które będą się pojawiać. Operacja może przebiegać różnie w zależności od tego, czy domena zarejestrowana jest w OVHcloud czy u innego rejestratora.
>>
> **Krok 3**
>>
>> Zalecamy szczególną ostrożność podczas wypełniania następujących danych:
>>
>> - **katalog główny**: katalog, w którym pliki domeny będą przechowywane na przestrzeni dyskowej Twojego hostingu Cloud Web.
>>
>> - **Framework**: uprzednio skonfigurowane środowisko wykonawcze, które zostanie użyte przez MultiSite.
>>
>> > [!warning]
>> >
>> > Jeśli dodałeś domenę uznawaną jako zewnętrzną, podczas konfiguracji DNS skonfiguruj również pole TXT o nazwie **ovhcontrol**. Dzięki temu OVHcloud ma pewność, że dodanie domeny nastąpiło zgodnie z Twoją wolą. Czynność ta jest niezbędna i jeśli nie zostanie przeprowadzona, dodanie domeny zostanie anulowane.

Powtórz tę operację, jeśli chcesz dodać kilka domen do Twojego hostingu Cloud Web. Aby uzyskać więcej informacji o dodawaniu domeny w opcji MultiSite, zapoznaj się z naszą dokumentacją: [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite).

### 5 - Instalacja Twojego projektu na hostingu Cloud Web

Aby zainstalować Twój projekt, masz do dyspozycji dwie możliwości. Powtarzaj kroki najodpowiedniejszej dla Ciebie metody, jeśli chcesz umieścić w sieci kilka projektów.

#### 1. Użycie modułów CMS OVHcloud

W tej opcji wybierasz gotowe do użycia rozwiązanie, które dowolnie personalizujesz pod względem struktury strony (szablon, teksty itd.). OVHcloud proponuje cztery moduły CMS, o których możesz dowiedzieć się więcej na stronie ["Twoja strona WWW dzięki modułom CMS"](/links/web/hosting-website).

Jeśli decydujesz się na skorzystanie z modułów CMS OVHcloud, kliknij na poniższe karty, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting Cloud Web.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Moduły CMS`{.action}, a następnie `Dodaj moduł CMS`{.action}.
>>
> **Krok 3**
>>
>> Będziesz mógł wówczas rozpocząć instalację w trybie "podstawowym" (bez personalizacji) lub "zaawansowanym" (z możliwością personalizacji niektórych elementów).

Jeśli chcesz uzyskać więcej informacji o modułach CMS OVHcloud, zapoznaj się z dokumentacją: [Automatyczna instalacja strony WWW za pomocą modułu CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

> [!primary]
>
> Aby skorzystać z modułu CMS, konieczne jest użycie frameworku PHP.

#### 2. Ręczna instalacja projektu

W przypadku nowej strony WWW lub migracji strony istniejącej, ręczna instalacja może wymagać odpowiednich kompetencji technicznych. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner) lub kontakt z producentem oprogramowania.

Jeśli decydujesz się na ręczną instalację, powinieneś posiadać wszystkie pliki strony WWW lub aplikacji, które zamierzasz zainstalować, jak również (o ile jest to niezbędne dla jej poprawnego funkcjonowania), dane dostępowe bazy danych utworzonej uprzednio na hostingu Cloud Web. W przypadku migracji strony WWW zadbaj o wykonanie jej pełnej kopii.

Ponieważ projekty różnią się od siebie, nie istnieje jeden uniwersalny sposób postępowania. Podczas wykonywania operacji przydatne mogą być przewodniki [Umieszczenie strony WWW w Internecie](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online) i [Przeniesienie strony WWW do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

### 6 - Zmiana konfiguracji Twojej domeny

Na tym etapie Twój projekt powinien być zainstalowany na hostingu Cloud Web, a Twoje konta e-mail utworzone. Jeśli konta jeszcze nie działają, być może konfiguracja Twojej domeny nie jest prawidłowa. W takim przypadku, lub jeśli nie masz co do tego pewności, zalecamy kontynuowanie bieżącego etapu.

Pamiętaj, że jeśli przenosisz usługi do OVHcloud, operacje związane z DNS mogą spowodować niedostępność usług, jeśli operacje przeprowadzane są w nieodpowiednim momencie. Zgodnie z poszczególnymi etapami opisanymi w dokumentacji [Przeniesienie strony WWW do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh), na zakończenie procesu zmodyfikuj serwery DNS Twojej domeny.

#### 1. Poznaj rodzaje rekordów DNS OVHcloud

Istnieje kilka rodzajów rekordów DNS w OVHcloud. Będą Cię dotyczyły szczególnie dwa z nich. Zapewniają one dostępność strony WWW i odbiór wiadomości przez Twoje konta e-mail. Postępuj zgodnie z poniższymi wskazówkami, aby dowiedzieć się, gdzie je sprawdzić:

|Rekordy DNS|Powiązana usługa|Gdzie sprawdzić rekordy?|
|---|---|---|
|A|Dla strony WWW|Zapoznaj się z naszym przewodnikiem [Hosting WWW — lista adresów IP klastrów](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).|
|MX|Dla wiadomości e-mail|Zapoznaj się z naszym przewodnikiem [Dodanie rekordu MX do konfiguracji domeny](/pages/web_cloud/domains/dns_zone_mx).|

#### 2. Sprawdź i/lub zmodyfikuj rekordy DNS

Teraz sprawdź, czy rekordy DNS przypisane do Twojego hostingu Cloud Web i kont e-mail OVHcloud są poprawnie skonfigurowane i zmodyfikuj je, jeśli istnieje taka potrzeba. Te dwie operacje muszą być koniecznie przeprowadzone u dostawcy zarządzającego konfiguracją DNS (strefą DNS) Twojej domeny.

> [!warning]
>
> - Jeśli Twoja domena nie używa konfiguracji DNS OVHcloud, przeprowadź zmianę w interfejsie dostawcy zarządzającego konfiguracją Twojej domeny.
>
> - Jeśli domena jest zarejestrowana w OVHcloud, możesz sprawdzić, czy używa konfiguracji DNS OVHcloud. Zapoznaj się z naszym przewodnikiem [Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit).
>

Zapoznaj się z poniższymi wskazówkami, aby dowiedzieć się, gdzie przeprowadzić operacje:

|Używana konfiguracja DNS|Gdzie przeprowadzić operacje?|
|---|---|
|OVHcloud|Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone) i wybierz odpowiednią domenę. Zapoznaj się z naszą dokumentacją "[Modyfikacja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)", jeśli to konieczne.|
|Inne|W interfejsie dostawcy zarządzającego konfiguracją DNS Twojej domeny. W przypadku trudności w przeprowadzeniu tych operacji zachęcamy do kontaktu z dostawcą zarządzającym konfiguracją DNS Twojej domeny.|

Czas propagacji wprowadzonych w strefie DNS zmian wynosi maksymalnie 24 godziny. Jeśli dodałeś kilka domen do Twojego hostingu Cloud Web w opcji MultiSite, przeprowadź obydwie operacje dla każdej z domen.

### 7 - Personalizacja Twojej strony WWW

Etap ten może być opcjonalny, jeśli przeniosłeś istniejącą wcześniej i spersonalizowaną stronę. W przypadku gdy zainstalowałeś nową stronę WWW na przykład z wykorzystaniem modułów CMS OVHcloud, możesz ją spersonalizować, wprowadzając modyfikacje szablonu i publikując pierwsze treści.

Jeśli chcesz uzyskać wsparcie dotyczące funkcjonalności Twojej strony WWW, zachęcamy do odwiedzenia strony producenta oprogramowania CMS, na której znajdziesz pomocną dokumentację.

### 8 - Korzystanie z kont e-mail

Zacznij używać Twoich kont e-mail. W tym celu możesz użyć udostępnionej przez OVHcloud aplikacji online - Webmail: RoundCube. Aplikacja dostępna jest pod adresem <https://www.ovh.pl/mail/>. Zaloguj się, wprowadzając dane identyfikacyjne przypisane do Twojego konta e-mail utworzonego w OVHcloud.

Jeśli chcesz uzyskać więcej informacji dotyczących korzystania z RoundCube, zapoznaj się z przewodnikiem: [Korzystanie z RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube). Jeśli chcesz skonfigurować Twoje konto e-mail w programie pocztowym lub urządzeniu typu smartfon lub tablet, skorzystaj z naszej dokumentacji dostępnej tutaj: </products/web-cloud-email-collaborative-solutions-mx-plan>.

## Sprawdź również

[Przeniesienie strony WWW do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

[Umieszczenie strony w Internecie](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

[Automatyczna instalacja strony WWW za pomocą modułu CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
