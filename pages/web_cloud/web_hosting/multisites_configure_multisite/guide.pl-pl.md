---
title: 'Instalacja kilku stron WWW na jednym hostingu'
excerpt: 'Dowiedz się, jak zainstalować kilka stron WWW na hostingu'
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

Możesz hostować wiele witryn internetowych na jednym pakiecie hostingu, nawet jeśli domeny nie są zarejestrowane w OVHcloud.

Chcesz dodać nową witrynę internetową na swoim pakiecie hostingu?

**Dowiedz się, jak hostować różne witryny internetowe na swoim pakiecie hostingu.**

> [!primary]
> Jeśli witryna internetowa, o której mowa, została już utworzona na Twoim pakiecie hostingu i chcesz do niej dodać nową nazwę domeny lub poddomenę, skorzystaj **bezpośrednio** z [tego przewodnika](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu OVHcloud](/links/web/hosting-multisite).
- Zarejestrowana domena lub kilka [domen](/links/web/domains).
- Możliwość modyfikacji konfiguracji Twoich domen ([strefy DNS](/pages/web_cloud/domains/dns_zone_edit))
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

### 1 - Dodanie witryny internetowej na Twoim pakiecie hostingu

**Kliknij na jeden z poniższych tytułów, aby zobaczyć wyjaśnienia.**

<a name="add-domain-ovhcloud"></a>

/// details | Dodanie witryny internetowej z domeną zarządzaną z Twojego Panelu klienta OVHcloud

Ta sekcja dotyczy tylko przypadków, gdy nazwa domeny (i/lub aktywna strefa DNS), z którą chcesz utworzyć swoją witrynę internetową, znajduje się **w Twoim Panelu klienta OVHcloud**.

Kliknij poniższe zakładki, aby wyświetlić każdy z **8** kroków.

> [!tabs]
> **Krok 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 4**
>>
>> Nad i po lewej stronie tabeli, która się pojawi, kliknij przycisk `Dodaj stronę`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Krok 5**
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
>> > **Przypadek specjalny** : Poddomeny w formacie `www` (np. **www**.domain.tld) są automatycznie dodawane jako uzupełnienie nazwy domeny. Dlatego nie ma potrzeby wpisywania tej konkretnej poddomeny w polu tekstowym.
>> >
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Domyślnie **katalog główny** Twojej witryny internetowej jest tworzony automatycznie podczas dodawania witryny do pakietu hostingu. Ten sam **katalog główny** jest również generowany w przestrzeni dyskowej Twojego pakietu hostingu (dostępnej przez FTP, SFTP lub SSH, w zależności od oferty).
>> >
>> > Jeśli chcesz dostosować nazwę **katalogu głównego**, szczególnie jeśli zawartość Twojej witryny internetowej jest już przechowywana w konkretnym katalogu w przestrzeni dyskowej, możesz to zrobić, aktywując przycisk `Konfiguracja zaawansowana`{.action}.
>> >
>> > **Nazwę katalogu głównego można dostosować tylko w momencie dodawania witryny internetowej do pakietu hostingu.** Oznacza to, że po utworzeniu i dodaniu witryny internetowej do pakietu hostingu, nie będzie można jej **zamienić** później.
>> >
>> Jeśli chcesz dostosować nazwę katalogu głównego lub skorzystać z jednej z **Zaawansowanych opcji**, dostępnych poprzez przycisk `Konfiguracja zaawansowana`{.action}, aktywuj ten przycisk i przejdź do **kroku 6**. W przeciwnym razie przejdź bezpośrednio do **kroku 7**.
>>
> **Krok 6**
>>
>> > [!primary]
>> >
>> > Ten krok jest **opcjonalny**. Odnosi się tylko do klientów, którzy chcą dostosować katalog główny i/lub aktywować niektóre funkcje dostępne poprzez przycisk `Konfiguracja zaawansowana`{.action}.
>> >
>> > **Z wyjątkiem dostosowania katalogu głównego, wszystkie te funkcje można aktywować później, gdy nazwa domeny zostanie dodana do Twojej witryny internetowej.** Aby to zrobić, skorzystaj bezpośrednio z [tego przewodnika](/pages/web_cloud/web_hosting/multisites_modify_domain).
>> >
>> Aby dostosować nazwę katalogu głównego, który zostanie przypisany do Twojej witryny internetowej i będzie zawierał jej pliki, wpisz żądaną nazwę w polu **Katalog główny**.
>>
>> Poniżej znajdziesz opis innych opcji. W zależności od wybranej oferty [hostingu](/links/web/hosting), niektóre elementy spośród poniższych nie będą dostępne do wyboru.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Opcja|Opis|
>> |---|---|
>> |Geolokalizacja IP|Zezwala na korzystanie z adresu IP geolokalizowanego (spośród listy krajów) dla wybranej nazwy domeny.<br> Dowiedz się więcej dzięki [tej stronie](/links/web/hosting-Opcje).|
>> |Firewall|Zezwala na aktywowanie zapory (filtr i analiza żądań) dla wybranej nazwy domeny.<br> Dowiedz się więcej dzięki [tej stronie](/links/web/hosting-Opcje).|
>> |CDN|Zezwala na aktywowanie CDN (przechowywanie w pamięci podręcznej elementów statycznych Twojej witryny internetowej, takich jak obrazy) dla wybranej nazwy domeny.<br> Dowiedz się więcej dzięki [naszej stronie CDN](/links/web/hosting-Opcje-CDN).<br> Włączając SSL i CDN, możesz również skorzystać z protokołu **HTTP/2** (ten protokół jest domyślnie aktywny w naszym datacenter w Gravelines).|
>>
>> Po aktywacji przycisku `Konfiguracja zaawansowana`{.action}, możesz również wybrać tryb konfiguracji DNS dla swojej nazwy domeny:
>>
>> - **Dla automatycznej konfiguracji DNS**, pozostaw zaznaczone pole `Konfiguracja automatyczna (Rekomendujemy)`{.action}.
>> - **Dla ręcznej konfiguracji DNS**, zaznacz pole `Konfiguracja ręczna`{.action}. Aby następnie skonfigurować swoją strefę DNS, skorzystaj z poniższych przewodników:
>>     - [Hostingu - Lista adresów IP według klastrów](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
> **Krok 7**
>>
>> OVHcloud oferuje moduły WordPress, Joomla!, PrestaShop i Drupal. Pozwalają one na posiadanie struktury witryny internetowej gotowej do użycia, automatycznie zainstalowanej w wcześniej skonfigurowanym katalogu głównym. Aby dowiedzieć się więcej, zapoznaj się z naszą dokumentacją [„Automatyczna instalacja strony WWW za pomocą modułu CMS”](/pages/web_cloud/web_hosting/cms_install_1_click_modules).
>> >
>> Jeśli chcesz zainstalować moduł jednym kliknięciem, wybierz swój moduł na dole strony, a następnie przejdź do następnego kroku.
>> >
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>> >
>> W przeciwnym przypadku, jeśli chcesz ręcznie zainstalować swoją witrynę internetową, pobierz jej pliki i przekaż je do odpowiedniego katalogu głównego w przestrzeni dyskowej Twojego pakietu hostingu. Aby dowiedzieć się więcej, zapoznaj się z naszą dokumentacją [„Automatyczna instalacja strony WWW za pomocą modułu CMS”](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).
>>
> **Krok 8**
>>
>> Sprawdź, czy wszystkie wcześniej wprowadzone informacje są poprawne, a następnie kliknij `Kontynuuj`{.action}, aby zakończyć dodawanie nazwy domeny lub poddomeny do Twojej witryny internetowej.
>> >
>> To dodanie może zająć do godziny.
>> >
>> Jeśli nie wybrałeś opcji `Konfiguracja ręczna`{.action} w sekcji `Konfiguracja zaawansowana`{.action}, konfiguracja DNS zostanie automatycznie wykonana, jeśli aktywna strefa DNS Twojej nazwy domeny jest zarządzana w Twoim Panelu klienta OVHcloud.
>> >
>> W przeciwnym przypadku, skorzystaj z poniższych przewodników, aby ręcznie skonfigurować swoją strefę DNS:
>> >
>> - [Hosting WWW - Lista adresów IP według klastra](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)
>> >
>> > [!primary]
>> > Zmiana konfiguracji DNS Twojej nazwy domeny wymaga czasu propagacji, który może wynosić nawet 24 godziny, zanim zmiana będzie w pełni skuteczna.

///

/// details | Dodanie witryny internetowej z domeną niezarządzaną z Twojego Panelu klienta OVHcloud

Ta sekcja dotyczy tylko przypadków, gdy chcesz dodać witrynę internetową z nazwą domeny, która nie znajduje się w Twoim koncie OVHcloud. Może to być nazwa domeny w innym koncie OVHcloud lub zarejestrowana u innego dostawcy.

Kliknij poniższe zakładki, aby wyświetlić każdy z **8** kroków.

> [!tabs]
> **Krok 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 4**
>>
>> Nad i po lewej stronie tabeli, która się pojawi, kliknij przycisk `Dodaj stronę`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Krok 5**
>>
>> Zaznacz opcję `Powiąż domenę zewnętrzną`{.action} i kliknij `Kontynuuj`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Krok 6**
>>
>> W polu **Nazwa witryny - obowiązkowa** wpisz nazwę, jaką chcesz przypisać do swojej witryny internetowej. Ta nazwa będzie widoczna tylko w zakładce `Moje witryny`{.action} Twojego pakietu hostingu.
>>
>> Następnie wpisz nazwę domeny (np. domain.tld) lub poddomenę (np. **sub**.domain.tld) do przypisania w polu **Nazwa domeny - obowiązkowa**, które pojawi się poniżej.
>>
>> > [!success]
>> >
>> > **Przypadek specjalny** : Poddomeny w formacie `www` (np. **www**.domain.tld) są automatycznie dodawane jako uzupełnienie nazwy domeny. Dlatego nie ma potrzeby wpisywania tej konkretnej poddomeny w polu tekstowym.
>> >
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-site-external-step-2.png){.thumbnail}
>> >
>> > [!warning]
>> >
>> > Domyślnie **katalog główny** Twojej witryny internetowej jest tworzony automatycznie podczas dodawania witryny do pakietu hostingu. Ten sam **katalog główny** jest również generowany w przestrzeni dyskowej Twojego pakietu hostingu (dostępnej przez FTP, SFTP lub SSH, w zależności od oferty).
>> >
>> > **Nazwę katalogu głównego można dostosować tylko w momencie dodawania witryny internetowej do pakietu hostingu.** Oznacza to, że po utworzeniu i dodaniu witryny internetowej do pakietu hostingu, nie będzie można jej **zamienić** później.
>> >
>> Aby dostosować nazwę katalogu głównego, który zostanie przypisany do Twojej witryny internetowej i będzie zawierał jej pliki, wpisz żądaną nazwę w polu **Katalog główny**. Jeśli nie chcesz go dostosować, zostaw to pole puste.
>> >
>> Po wprowadzeniu informacji kliknij przycisk `Kontynuuj`{.action}.
>>
> **Krok 7**
>>
>> > [!primary]
>> >
>> > Na odmienną niż domeny bezpośrednio zarządzane z Twojego Panelu klienta OVHcloud, **Zaawansowane opcje** nie są bezpośrednio dostępne podczas dodawania strony internetowej z nazwą domeny lub poddomeną, która nie jest zarządzana z Twojego konta OVHcloud.
>> >
>> > Jednak, z wyjątkiem katalogu głównego, **wszystkie te funkcje można aktywować lub modyfikować później, gdy nazwa domeny lub zewnętrzna poddomena zostanie dodana do Twojej strony internetowej.** Aby to zrobić, odwiedź bezpośrednio [ten przewodnik](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> Dodanie strony internetowej z zewnętrzną nazwą domeny OVHcloud wymaga dodatkowej, obowiązkowej weryfikacji. Pozwala to nam upewnić się, że dodanie zewnętrznej nazwy domeny jest uzasadnione. Otrzymasz wiadomość proszącą o zmianę konfiguracji DNS nazwy domeny.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Zwróć uwagę na wyświetlane elementy, a następnie kliknij przycisk `Kontynuuj`{.action}. Nazwa domeny zostanie tymczasowo dodana, aż do momentu, w którym możesz zmienić jej konfigurację DNS.
>>
>> > [!warning]
>> >
>> > Musisz dokonać tych zmian **szybko**, aby Twoja nazwa domeny została poprawnie przypisana do Twojej strony internetowej. Bez tej akcji, dodanie Twojej nazwy domeny zostanie anulowane i niedawno utworzona strona internetowa nie będzie dostępna.
>> >
>> > W aktywnej strefie DNS Twojej nazwy domeny muszą być umieszczone wpisy DNS typu **A** i **TXT**, aby nazwa domeny została przypisana do Twojej strony internetowej. Wpisy DNS typu **AAAA** są opcjonalne.
>> >
>> > Zwróć uwagę, że jeśli chcesz przypisać `sub.domain.tld`, musisz utworzyć wpis TXT `ovhcontrol.domain.tld`, a nie wpis `ovhcontrol.sub.domain.tld`.
>> >
>> > Aby znaleźć aktywną strefę DNS Twojej nazwy domeny, znajdź [serwery DNS](/pages/web_cloud/domains/dns_server_edit), do których jest ona przypisana. Musisz zweryfikować tylko nazwę domeny za pomocą pola **TXT**, nie wszystkie jej poddomeny.
>>
> **Krok 8**
>>
>> OVHcloud oferuje moduły WordPress, Joomla!, PrestaShop i Drupal. Pozwalają one na posiadanie struktury witryny internetowej gotowej do użycia, automatycznie zainstalowanej w wcześniej skonfigurowanym katalogu głównym. Aby dowiedzieć się więcej, zapoznaj się z naszą dokumentacją [„Automatyczna instalacja strony WWW za pomocą modułu CMS”](/pages/web_cloud/web_hosting/cms_install_1_click_modules).
>>
>> Jeśli chcesz zainstalować moduł w jednym kliknięciu, wybierz swój moduł na dole strony, a następnie kliknij `Kontynuuj`{.action}, aby zakończyć żądanie dodania Twojej strony internetowej do Twojego hostingu.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> W przeciwnym przypadku, jeśli chcesz ręcznie zainstalować swoją witrynę internetową, pobierz jej pliki i przekaż je do odpowiedniego katalogu głównego w przestrzeni dyskowej Twojego pakietu hostingu. Aby dowiedzieć się więcej, zapoznaj się z naszą dokumentacją [„Automatyczna instalacja strony WWW za pomocą modułu CMS”](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

///

/// details | Dodaj stronę internetową z nową nazwą domeny, która jeszcze nie została zarejestrowana

Ta sekcja dotyczy tylko sytuacji, w której chcesz dodać stronę internetową z nazwą domeny, która jeszcze nie została zarejestrowana, ani u OVHcloud, ani u innego biura rejestracji. Inaczej mówiąc, dotyczy to domen, które nie zostały jeszcze zamówione.

Kliknij poniższe zakładki, aby wyświetlić każdy z **6** kroków.

> [!tabs]
> **Krok 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 4**
>>
>> Nad i po lewej stronie tabeli, która się pojawi, kliknij przycisk `Dodaj stronę`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Krok 5**
>>
>> Zaznacz opcję `Zamawiam nową domenę`{.action} i kliknij `Kontynuuj`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-subdomain-new-step-1.png){.thumbnail}
>>
> **Krok 6**
>>
>> Następnie zostaniesz przekierowany na naszą stronę komercyjną, gdzie możesz zamówić nową nazwę domeny. Wybierz nową nazwę domeny na podstawie dostępności na rynku. Następnie postępuj zgodnie z instrukcjami kanału zakupowego aż do weryfikacji zamówienia. Nie zamów jednak nowego hostingu.
>>
>> Po opłaceniu i zweryfikowaniu zamówienia, poczekaj chwilę, aż zostanie ono przetworzone.
>>
>> > [!primary]
>> >
>> > Gdy Twoja nazwa domeny pojawi się w Twoim Panelu klienta OVHcloud, postępuj zgodnie z sekcją "[Dodaj nazwę domeny zarządzaną z Twojego Panelu klienta OVHcloud](#add-domain-ovhcloud)" tego przewodnika, aby dodać swoją stronę internetową do Twojego hostingu.

///

### 2 - Wdróż swoją stronę internetową <a name="site-online"></a>

Po zadeklarowaniu strony internetowej z Twoją nazwą domeny na Twoim hoście, możesz wdrożyć zawartość swojej strony internetowej. Pamiętaj, że musisz wykonać tę czynność w **katalogu głównym**, który ustaliłeś podczas dodawania strony internetowej do Twojego Panelu klienta OVHcloud.

> [!primary]
>
> Jeśli chcesz dodać wiele stron internetowych, powtórz działania opisane w tym przewodniku.
>
> Zachęcamy do ostrożnego monitorowania liczby stron internetowych na Twoim hoście. Im większa liczba stron, tym więcej zasobów Twojego hostingu zostaje wykorzystanych. [Strona z naszymi ofertami hostingu](/links/web/hosting) wskazuje zalecaną liczbę stron internetowych, które możesz hostować na swoim hoście.

## Sprawdź również

[Automatyczna instalacja strony WWW za pomocą modułu CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)

[Uruchomienie strony WWW na Twoim hostingu](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).