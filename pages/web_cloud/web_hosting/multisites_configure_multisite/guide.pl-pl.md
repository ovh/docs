---
title: 'Instalacja kilku stron WWW na jednym hostingu'
excerpt: 'Dowiedz się, jak zainstalować kilka stron WWW na hostingu'
updated: 2026-05-04
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

W ramach jednej oferty hostingowej można hostować wiele stron internetowych, nawet jeśli nazwy domen nie są zarejestrowane w OVHcloud.

Czy chcesz dodać nową stronę internetową do swojego hostingu?

**Dowiedz się, jak hostować różne strony internetowe w ramach swojej oferty hostingowej.**

> [!primary]
> Jeśli utworzyłeś już daną stronę internetową na swoim hostingowym i chcesz przypisać do niej nową nazwę domeny lub subdomeny, zapoznaj się **bezpośrednio** z [tym przewodnikiem](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu OVHcloud](/links/web/hosting-multisite).
- Zarejestrowana domena lub kilka [domen](/links/web/domains).
- Możliwość zmiany konfiguracji nazw domen z poziomu [strefy DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

### 1 - Dodaj stronę internetową do swojej oferty hostingu

**Kliknij jeden z poniższych tytułów, aby wyświetlić objaśnienia.**

<a name="add-domain-ovhcloud"></a>

/// details | Dodaj stronę internetową z nazwą domeny zarządzaną z poziomu Panelu klienta OVHcloud

Ta sekcja dotyczy wyłącznie sytuacji, w której nazwa domeny (i/lub jej aktywna strefa DNS), za pomocą której chcesz utworzyć swoją stronę internetową, znajduje się **w Panelu klienta OVHcloud**.

<!-- CP-STEPS-START:add-ovhcloud-domain -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **7** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> Nad i po lewej stronie tabeli, która się pojawi, kliknij przycisk `Dodaj stronę`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Krok 4**
>>
>> Zaznacz opcję `Połączyć istniejącą domenę OVHcloud`{.action} i kliknij `Kontynuuj`{.action}.
>>
>> W polu **Nazwa witryny - obowiązkowa** wpisz nazwę, jaką chcesz przypisać do swojej witryny internetowej. Ta nazwa będzie widoczna tylko w zakładce `Moje strony`{.action} Twojego pakietu hostingu.
>>
>> Następnie wybierz nazwę domeny do przypisania z rozwijanego menu **Nazwa domeny - obowiązkowa**, które pojawi się poniżej.
>>
>> > [!primary]
>> > Aby dodać poddomenę, najpierw wybierz nazwę domeny z listy (np. domain.tld). Następnie zaznacz pole `Utwórz subdomenę`{.action}. Pojawi się pole tekstowe, w którym możesz wpisać poddomenę (np. **sub**.domain.tld).
>> >
>> > **Przypadek specjalny**: Poddomeny w formacie `www` (np. **www**.domain.tld) są automatycznie dodawane jako uzupełnienie nazwy domeny. Dlatego nie ma potrzeby wpisywania tej konkretnej poddomeny w polu tekstowym.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Domyślnie **katalog główny** Twojej witryny internetowej jest tworzony automatycznie po dodaniu witryny do hostingu. Ten sam **katalog główny** jest również generowany w przestrzeni dyskowej Twojego hostingu (dostępnej przez FTP, SFTP lub SSH, w zależności od oferty).
>> >
>> > Jeśli chcesz dostosować nazwę **katalog główny**, zwłaszcza jeśli zawartość Twojej witryny internetowej znajduje się już w określonym folderze w przestrzeni dyskowej, możesz to zrobić, aktywując przycisk `Konfiguracja zaawansowana`{.action}.
>>
>> Jeśli chcesz dostosować nazwę katalogu głównego lub skorzystać z jednej z **Zaawansowanych opcji**, dostępnych poprzez przycisk `Konfiguracja zaawansowana`{.action}, aktywuj ten przycisk i przejdź do **kroku 6**. W przeciwnym razie przejdź bezpośrednio do **kroku 7**.
>>
> **Krok 5**
>>
>> > [!primary]
>> >
>> > Ten krok jest **opcjonalny**. Odnosi się tylko do klientów, którzy chcą dostosować katalog główny i/lub aktywować niektóre funkcje dostępne poprzez przycisk `Konfiguracja zaawansowana`{.action}.
>> >
>> > **Wszystkie te funkcje można aktywować później, gdy nazwa domeny zostanie dodana do Twojej witryny internetowej.** Aby to zrobić, skorzystaj bezpośrednio z [tego przewodnika](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> Aby dostosować nazwę katalogu głównego, który będzie powiązany z Twoją witryną internetową i będzie zawierał jej pliki, wprowadź żądaną nazwę w polu **Katalog główny**.
>>
>> Poniżej znajdziesz opis innych opcji. W zależności od wybranej [oferty hostingu](/links/web/hosting), niektóre elementy spośród poniższych nie będą dostępne do wyboru.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Opcja|Opis|
>> |---|---|
>> |Geolokalizacja IP|Zezwala na korzystanie z adresu IP geolokalizowanego (spośród listy krajów) dla wybranej nazwy domeny.<br> Dowiedz się więcej dzięki [tej stronie](/links/web/hosting-options).|
>> |Firewall|Zezwala na aktywowanie zapory (filtr i analiza żądań) dla wybranej nazwy domeny.<br> Dowiedz się więcej dzięki [tej stronie](/links/web/hosting-options).|
>> |CDN|Zezwala na aktywowanie CDN (przechowywanie w pamięci podręcznej elementów statycznych Twojej witryny internetowej, takich jak obrazy) dla wybranej nazwy domeny.<br> Dowiedz się więcej dzięki [naszej stronie CDN](/links/web/hosting-options-cdn).<br> Włączając SSL i CDN, możesz również skorzystać z protokołu **HTTP/2** (ten protokół jest domyślnie aktywny w naszym datacenter w Gravelines).|
>>
>> Po aktywacji przycisku `Konfiguracja zaawansowana`{.action}, możesz również wybrać tryb konfiguracji DNS dla swojej nazwy domeny:
>>
>> - **Dla automatycznej konfiguracji DNS**, pozostaw zaznaczone pole `Konfiguracja automatyczna (Rekomendujemy)`{.action}.
>> - **Dla ręcznej konfiguracji DNS**, zaznacz pole `Konfiguracja ręczna`{.action}. Aby następnie skonfigurować swoją strefę DNS, skorzystaj z poniższych przewodników:
>>     - [Hostingu - Lista adresów IP według klastrów](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
> **Krok 6**
>>
>> OVHcloud udostępnia moduły WordPress, Joomla!, PrestaShop i Drupal. Dzięki nim możesz mieć gotową do użycia strukturę strony internetowej, automatycznie zainstalowaną w skonfigurowanym wcześniej folderze głównym. Więcej informacji znajdziesz w naszej dokumentacji "[Automatyczna instalacja strony WWW za pomocą modułu CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>>
>> Jeśli chcesz zainstalować moduł 1-click, wybierz preferowany moduł na dole strony, a następnie przejdź do następnego kroku.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Jeśli natomiast chcesz zainstalować swoją stronę ręcznie, pobierz jej pliki i prześlij je do odpowiedniego folderu głównego w przestrzeni dyskowej swojego hostingu. Więcej informacji znajdziesz w naszej dokumentacji "[Automatyczna instalacja strony WWW za pomocą modułu CMS](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
>>
> **Krok 7**
>>
>> Sprawdź, czy wszystkie wprowadzone wcześniej informacje są poprawne, a następnie kliknij przycisk `Kontynuuj`{.action}, aby sfinalizować dodanie nazwy domeny lub subdomeny do swojej witryny internetowej.
>>
>> Dodanie tego elementu może potrwać do godziny.
>>
>> Jeśli nie wybrałeś opcji `Konfiguracja ręczna`{.action} w sekcji `Konfiguracja zaawansowana`{.action}, konfiguracja DNS zostanie przeprowadzona automatycznie, jeśli aktywna strefa DNS Twojej domeny jest zarządzana w Panelu klienta OVHcloud.
>>
>> W przeciwnym razie zapoznaj się z poniższymi instrukcjami, aby ręcznie skonfigurować strefę DNS:
>>
>> - [Hosting WWW - Lista adresów IP według klastra](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > Modyfikacja konfiguracji DNS nazwy domeny wymaga czasu propagacji, który może trwać do 24 godzin, zanim zmiany zaczną w pełni obowiązywać.
<!-- CP-STEPS-END:add-ovhcloud-domain -->

///

/// details | Dodaj stronę internetową z nazwą domeny, która nie jest zarządzana z poziomu Panelu klienta OVHcloud

Ta sekcja dotyczy wyłącznie sytuacji, w której chcesz dodać stronę internetową z nazwą domeny, która nie jest obecna na Twoim koncie OVHcloud. Może to być nazwa domeny należąca do innego konta OVHcloud lub zarejestrowana u innego dostawcy.

<!-- CP-STEPS-START:add-external-domain -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **7** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> Nad i po lewej stronie tabeli, która się pojawi, kliknij przycisk `Dodaj stronę`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Krok 4**
>>
>> Zaznacz opcję `Powiąż domenę zewnętrzną`{.action} i kliknij `Kontynuuj`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Krok 5**
>>
>> W polu **Nazwa witryny - obowiązkowa** wprowadź nazwę, której chcesz używać dla swojej witryny internetowej. Nazwa ta będzie widoczna tylko w zakładce `Moje witryny`{.action} Twojego hostingu internetowego.
>>
>> Następnie wprowadź nazwę domeny (np. domain.tld) lub subdomeny (np. **sub**.domain.tld), którą chcesz powiązać, w polu **Nazwa domeny - obowiązkowa**, które pojawi się poniżej.
>>
>> > [!success]
>> >
>> > **Przypadek specjalny**: Subdomeny w formacie `www` (np. **www**.domain.tld) są automatycznie dodawane jako uzupełnienie nazwy domeny. Dlatego nie ma potrzeby podawania tej konkretnej subdomeny w polu tekstowym.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-site-external-step-2.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Domyślnie **katalog główny** Twojej witryny internetowej jest tworzony automatycznie po dodaniu witryny do hostingu. Ten sam **katalog główny** jest również generowany w przestrzeni dyskowej Twojego hostingu (dostępnej przez FTP, SFTP lub SSH, w zależności od oferty).
>>
>> Aby dostosować nazwę folderu głównego, który będzie powiązany z Twoją stroną internetową i będzie zawierał jej pliki, wprowadź żądaną nazwę w polu **Katalog główny**. Jeśli nie chcesz jej dostosowywać, pozostaw to pole puste.
>>
>> Po uzupełnieniu informacji kliknij przycisk `Kontynuuj`{.action}.
>>
> **Krok 6**
>>
>> > [!primary]
>> >
>> > W przeciwieństwie do nazw domen zarządzanych bezpośrednio z Panelu klienta OVHcloud, **Zaawansowane opcje** nie są bezpośrednio dostępne podczas dodawania strony internetowej z nazwą domeny lub subdomeną, która nie jest zarządzana z konta OVHcloud.
>> >
>> > Jednakże, **wszystkie te funkcje można aktywować lub zmodyfikować później, po dodaniu nazwy domeny lub zewnętrznej subdomeny do strony internetowej.** W tym celu należy zapoznać się bezpośrednio z [tym przewodnikiem](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> Dodanie strony internetowej z zewnętrzną nazwą domeny do OVHcloud wymaga dodatkowej obowiązkowej weryfikacji. Pozwala nam to upewnić się, że dodanie zewnętrznej nazwy domeny jest zgodne z prawem. Następnie pojawi się komunikat z prośbą o zmodyfikowanie konfiguracji DNS nazwy domeny.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Zwróć uwagę na wyświetlane elementy, a następnie kliknij przycisk `Kontynuuj`{.action}. Od tego momentu nazwa domeny zostanie tymczasowo dodana, co da Ci czas na zmodyfikowanie jej konfiguracji DNS.
>>
>> > [!warning]
>> >
>> > Aby nazwa domeny została poprawnie powiązana z witryną internetową, należy **szybko** wprowadzić te zmiany. Bez tego działania dodanie nazwy domeny zostanie anulowane, a nowo utworzona witryna internetowa nie będzie dostępna.
>> >
>> > Wpisy DNS typu **A** i **TXT** muszą zostać umieszczone w aktywnej strefie DNS nazwy domeny, aby mogła ona zostać powiązana z witryną internetową. Tylko wpisy DNS typu **AAAA** są opcjonalne.
>> >
>> > Należy pamiętać, że jeśli chcesz powiązać `sub.domain.tld`, musisz utworzyć wpis TXT `ovhcontrol.domain.tld`, a nie wpis `ovhcontrol.sub.domain.tld`.
>> >
>> > Aby znaleźć aktywną strefę DNS nazwy domeny, znajdź [serwery DNS](/pages/web_cloud/domains/dns_server_edit), z którymi jest ona powiązana. Wystarczy zweryfikować nazwę domeny za pomocą pola **TXT**, a nie wszystkich jej subdomen.
>>
> **Krok 7**
>>
>> OVHcloud udostępnia moduły WordPress, Joomla!, PrestaShop i Drupal. Dzięki nim możesz mieć gotową do użycia strukturę strony internetowej, automatycznie zainstalowaną w skonfigurowanym wcześniej folderze głównym. Więcej informacji znajdziesz w naszej dokumentacji "[Automatyczna instalacja strony WWW za pomocą modułu CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>>
>> Jeśli chcesz zainstalować moduł 1-click, wybierz preferowany moduł na dole strony, a następnie kliknij `Kontynuuj`{.action}, aby sfinalizować żądanie dodania strony internetowej do hostingu.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Jeśli natomiast chcesz ręcznie zainstalować swoją stronę internetową, pobierz jej pliki i prześlij je do odpowiedniego folderu głównego w przestrzeni dyskowej swojego hostingu. Więcej informacji można znaleźć w naszej dokumentacji "[Automatyczna instalacja strony WWW za pomocą modułu CMS](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
<!-- CP-STEPS-END:add-external-domain -->

///

/// details | Dodaj stronę internetową z nową nazwą domeny, która nie została jeszcze zarejestrowana

Ta sekcja dotyczy wyłącznie sytuacji, w której chcesz dodać stronę internetową z nazwą domeny, która nie została jeszcze zarejestrowana ani w OVHcloud, ani u innego rejestratora. Innymi słowy, dotyczy to nazw domen, które nie zostały jeszcze wykupione.

<!-- CP-STEPS-START:add-site-1click-module -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **5** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> Nad i po lewej stronie tabeli, która się pojawi, kliknij przycisk `Dodaj stronę`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Krok 4**
>>
>> Zaznacz opcję `Zamawiam nową domenę`{.action} i kliknij `Kontynuuj`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-new-step-1.png){.thumbnail}
>>
> **Krok 5**
>>
>> Następnie zostaniesz przekierowany na naszą stronę handlową, gdzie możesz wykupić nazwę domeny. Wybierz nową nazwę domeny zgodnie z dostępnością na rynku. Następnie postępuj zgodnie z instrukcjami w procesie składania zamówienia, aż do potwierdzenia zamówienia. Nie musisz dodatkowo wykupywać nowego planu hostingowego.
>>
>> Po opłaceniu i zatwierdzeniu zamówienia poczekaj chwilę, aż zostanie ono przetworzone.
>>
>> > [!primary]
>> >
>> > Gdy nazwa domeny pojawi się w Panelu klienta OVHcloud, postępuj zgodnie z sekcją "[Dodaj nazwę domeny zarządzaną z Twojego Panelu klienta OVHcloud](#add-domain-ovhcloud)" niniejszego przewodnika, aby dodać swoją stronę internetową do hostingu.
<!-- CP-STEPS-END:add-site-1click-module -->

///

### 2 - Wdróż swoją stronę internetową <a name="site-online"></a>

Po zgłoszeniu strony internetowej z nazwą domeny w ramach hostingu internetowego można umieścić jej zawartość w Internecie. Przypominamy, że operację tę należy wykonać w **katalogu głównym**, który został zdefiniowany podczas dodawania strony internetowej w Panelu klienta OVHcloud.

> [!primary]
>
> Jeśli chcesz dodać wiele stron internetowych, powtórz czynności opisane w niniejszym przewodniku.
>
> Zalecamy ostrożność w zakresie liczby stron internetowych na Twoim hostingowym. Im większa liczba, tym więcej przydzielonych zasobów zostanie wykorzystanych. [Strona z naszymi ofertami hostingu](/links/web/hosting) zawiera informacje na temat zalecanej liczby stron internetowych, które można hostować na hostingowym.

## Sprawdź również

[Automatyczna instalacja strony WWW za pomocą modułu CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)

[Uruchomienie strony WWW na Twoim hostingu](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
