---
title: "Jak przypisać nazwę domeny do istniejącej strony internetowej ?"
excerpt: "Dowiedz się, jak przypisać nazwę domeny lub poddomeny do istniejącej strony internetowej na Twojej ofercie hostingu"
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

Możesz hostować wiele stron internetowych na jednej ofercie hostingu, nawet jeśli nazwy domen nie są zarejestrowane u OVHcloud. Ponadto możesz przypisać jedną lub więcej nazw domen lub poddomen do tej samej strony internetowej.

> [!primary]
> Jeśli jeszcze nie utworzyłeś strony internetowej na swoim hostingu, skorzystaj **bezpośrednio** z [tego przewodnika](/pages/web_cloud/web_hosting/multisites_configure_multisite).

**Dowiedz się, jak przypisać nazwę domeny lub poddomeny do istniejącej strony internetowej na Twoim hostingu.**

## Wymagania początkowe

- Posiadanie oferty [hostingu OVHcloud](/links/web/hosting-multisite) kompatybilnej.
- Posiadanie jednej lub więcej [nazw domen](/links/web/domains).
- Możliwość zmiany konfiguracji swoich nazw domen z poziomu ich [stref DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

### Dodanie nazwy domeny lub poddomeny do istniejącej strony internetowej

**Kliknij jeden z poniższych nagłówków, aby wyświetlić wyjaśnienia.**

<a name="add-domain-ovhcloud"></a>

/// details | Dodanie nazwy domeny zarządzanej z poziomu Twojego Panelu klienta OVHcloud

Ta część dotyczy tylko wtedy, gdy Twoja nazwa domeny i/lub aktywna strefa DNS znajdują się **w Twoim Panelu klienta OVHcloud**.

Kliknij poniższe zakładki, aby wyświetlić kolejne **6** kroki.

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
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie strony internetowej, a następnie `Dodaj domenę`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Krok 4**
>>
>> Zaznacz opcję `Połączyć istniejącą domenę OVHcloud`{.action} i kliknij `Kontynuuj`{.action}.
>>
>> Następnie wybierz nazwę domeny do przypisania z rozwijanego menu **Nazwa domeny - obowiązkowa**, które pojawi się poniżej.
>>
>> > [!primary]
>> > Aby dodać poddomenę, najpierw wybierz nazwę domeny z listy (np. domain.tld). Następnie zaznacz pole wyboru oznaczone `Utwórz subdomenę`{.action}. Pojawi się pole tekstowe, w którym możesz wpisać poddomenę (np. **sub**.domain.tld).
>> >
>> > **Szczególny przypadek**: Poddomeny w formie `www` (np. **www**.domain.tld) są automatycznie dodawane wraz z nazwą domeny. Dlatego nie musisz podawać tej konkretnej poddomeny w polu tekstowym.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-step-1.png){.thumbnail}
>>
>> Jeśli chcesz skorzystać z jednej z **opcji zaawansowanych**, aktywuj przycisk `Konfiguracja zaawansowana`{.action} i przejdź bezpośrednio do **kroku 7**. W przeciwnym razie przejdź do **kroku 6**.
>>
> **Krok 5**
>>
>> Sprawdź, czy wszystkie wcześniej wprowadzone informacje są poprawne, a następnie kliknij `Kontynuuj`{.action}, aby zakończyć dodawanie nazwy domeny lub poddomeny do Twojej strony internetowej.
>>
>> To dodanie może zająć do godziny.
>>
>> Konfiguracja DNS zostanie automatycznie wykonana, jeśli aktywna strefa DNS Twojej nazwy domeny jest zarządzana w Twoim Panelu klienta OVHcloud.
>>
>> W przeciwnym przypadku skorzystaj z poniższych przewodników, aby ręcznie skonfigurować swoją strefę DNS:
>>
>> - [Hosting WWW - Lista adresów IP według klastra](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > Zmiana konfiguracji DNS Twojej nazwy domeny wymaga czasu propagacji, który może wynosić nawet 24 godziny, zanim będzie w pełni skuteczna.
>>
> **Krok 6**
>>
>> > [!primary]
>> >
>> > Ten krok jest **opcjonalny**. Dotyczy tylko klientów, którzy chcą włączyć pewne funkcje dostępne za pomocą przycisku `Konfiguracja zaawansowana`{.action}.
>> >
>> > **Wszystkie te funkcje można włączyć później, po dodaniu nazwy domeny do Twojej strony internetowej.** W takim przypadku skorzystaj bezpośrednio z [tego przewodnika](/pages/web_cloud/web_hosting/multisites_modify_domain).
>> >
>> > Poniżej znajdziesz opis tych Opcji.
>> >
>> > W zależności od Twojej oferty [hostingu webowego](/links/web/hosting), niektóre elementy spośród zaproponowanych opcji nie będą można wybrać.
>>
>> ![Dodaj domenę](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Opcja|Opis|
>> |---|---|
>> |Geolokalizacja IP|Umożliwia korzystanie z adresu IP geolokalizowanego (spośród listy krajów) dla wybranej nazwy domeny.<br> Dowiedz się więcej dzięki [tej stronie](/links/web/hosting-options).|
>> |Firewall|Umożliwia włączenie zapory (filtr i analiza żądań) dla wybranej nazwy domeny.<br> Dowiedz się więcej dzięki [tej stronie](/links/web/hosting-options).|
>> |CDN|Umożliwia włączenie CDN (przechowywanie w pamięci podręcznej elementów statycznych Twojej strony internetowej, takich jak obrazy) dla wybranej nazwy domeny.<br> Dowiedz się więcej dzięki [naszej stronie CDN](/links/web/hosting-options-cdn).<br> Włączając SSL i CDN, możesz również skorzystać z protokołu **HTTP/2** (ten protokół jest domyślnie włączony w naszym centrum danych w Gravelines).|
>>
>> Po aktywowaniu przycisku `Konfiguracja zaawansowana`{.action}, możesz również wybrać tryb konfiguracji DNS dla swojej nazwy domeny:
>>
>> - **Dla automatycznej konfiguracji DNS**, pozostaw zaznaczone pole `Konfiguracja automatyczna (Rekomendujemy)`{.action}.
>> - **Dla ręcznej konfiguracji DNS**, zaznacz pole `Konfiguracja ręczna`{.action}. Aby wykonać konfigurację, skorzystaj z poniższych przewodników:
>>     - [Hosting WWW - Lista adresów IP według klastra](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)
>>
>> Po dokonaniu wyborów kliknij przycisk `Kontynuuj`{.action}, aby zakończyć dodawanie nazwy domeny lub poddomeny do Twojej strony internetowej. To dodanie może zająć do godziny.
>>
>> Jednak zmiana konfiguracji DNS Twojej nazwy domeny wymaga czasu propagacji, który może wynosić nawet 24 godziny, zanim będzie w pełni skuteczna.

///

/// details | Dodanie zewnętrznej nazwy domeny

Ta część dotyczy tylko wtedy, gdy Twoja nazwa domeny nie znajduje się w Twoim koncie OVHcloud.

Kliknij poniższe zakładki, aby wyświetlić kolejne **6** kroki.

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
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie strony internetowej, a następnie `Dodaj domenę`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Krok 4**
>>
>> Zaznacz opcję `Powiąż domenę zewnętrzną`{.action} i kliknij `Kontynuuj`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Krok 5**
>>
>> Wpisz nazwę domeny (np. domain.tld) lub poddomenę (np. **sub**.domain.tld) do przypisania w polu **Nazwa domeny - wymagana**, które pojawi się poniżej.
>>
>> > [!success]
>> >
>> > **Szczególny przypadek**: Poddomeny w formie `www` (np. **www**.domain.tld) są automatycznie dodawane wraz z nazwą domeny. Dlatego nie musisz podawać tej konkretnej poddomeny w polu tekstowym.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-2.png){.thumbnail}
>>
>> Po uzupełnieniu informacji kliknij przycisk `Kontynuuj`{.action}.
>>
>> > [!primary]
>> >
>> > W przeciwieństwie do nazw domen zarządzanych bezpośrednio z poziomu Twojego Panelu klienta OVHcloud, **opcje zaawansowane** nie są bezpośrednio dostępne podczas dodawania zewnętrznej nazwy domeny lub poddomeny do Twojej strony internetowej.
>> >
>> > Jednak **wszystkie te funkcje można włączyć później, po dodaniu zewnętrznej nazwy domeny lub poddomeny do Twojej strony internetowej.** Aby to zrobić, skorzystaj bezpośrednio z [tego przewodnika](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
> **Krok 6**
>>
>> Każde dodanie zewnętrznej nazwy domeny do OVHcloud wymaga dodatkowej, obowiązkowej weryfikacji. Pozwala to nam upewnić się, że dodanie zewnętrznej nazwy domeny jest uzasadnione. Otrzymasz więc wiadomość proszącą o zmianę konfiguracji DNS nazwy domeny.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Zanotuj elementy, które się pojawią, a następnie kliknij przycisk `Kontynuuj`{.action}. Nazwa domeny zostanie tymczasowo dodana, dopóki nie zmienisz jej konfiguracji DNS.
>>
>> > [!warning]
>> >
>> > Musisz dokonać tych zmian **szybko**, aby Twoja nazwa domeny została poprawnie dodana. W przeciwnym razie dodanie Twojej nazwy domeny zostanie anulowane.
>> >
>> > W strefie DNS Twojej nazwy domeny muszą być obowiązkowo umieszczone wpisy typu **A** i **TXT**, aby nazwa domeny została dodana do Twojej strony internetowej. Wpisy typu **AAAA** są opcjonalne.
>> >
>> > Zwróć uwagę, że jeśli chcesz dodać `sub.domain.tld`, musisz utworzyć wpis TXT `ovhcontrol.domain.tld`, a nie wpis `ovhcontrol.sub.domain.tld`.
>> >
>> > Aby znaleźć aktywną strefę DNS Twojej nazwy domeny, sprawdź [serwery DNS](/pages/web_cloud/domains/dns_server_edit), do których jest ona przypisana. Musisz zweryfikować tylko nazwę domeny za pomocą pola **TXT**, nie wszystkie jej poddomeny.|

///

/// details | Dodanie nowej nazwy domeny, która jeszcze nie została zarejestrowana

Ta część dotyczy tylko wtedy, gdy Twoja nazwa domeny jeszcze nie została zarejestrowana, ani u OVHcloud, ani u innego biura rejestracji. Inaczej mówiąc, dotyczy nazw domen, które jeszcze nie zostały zamówione.

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
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie strony internetowej, a następnie `Dodaj domenę`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Krok 4**
>>
>> Zaznacz opcję `Zamawiam nową domenę`{.action} i kliknij `Kontynuuj`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-new-step-1.png){.thumbnail}
>>
> **Krok 5**
>>
>> Następnie zostaniesz przekierowany do naszej strony zamówień nazw domen. Wybierz swoją nową nazwę domeny w zależności od dostępności na rynku. Następnie postępuj zgodnie z instrukcjami kanału zakupowego aż do zatwierdzenia zamówienia.
>>
>> Po opłaceniu i zatwierdzeniu zamówienia, poczekaj chwilę, aż zostanie ono przetworzone.
>>
>> > [!primary]
>> >
>> > Jeśli po kilku godzinach zauważysz, że Twoja nowa nazwa domeny nie została poprawnie przypisana do Twojej strony internetowej, przejdź do sekcji "[Dodanie nazwy domeny zarządzanej z poziomu Twojego Panelu klienta OVHcloud](#add-domain-ovhcloud)" tego przewodnika.

///

### Opcja poczty e-mail wchodząca w skład Twojego hostingu

Większość ofert [hostingu OVHcloud](/links/web/hosting) posiada opcję tworzenia adresów e-mail z Twoją nazwą domeny.

Ta opcja poczty może być aktywowana tylko dla **jednej** nazwy domeny. Oznacza to, że jeśli hostujesz wiele stron internetowych z różnymi nazwami domen na swoim hostingu, możesz aktywować tę opcję tylko dla jednej z Twoich nazw domen.

Nie wahaj się skorzystać z [naszego dedykowanego przewodnika](/pages/web_cloud/web_hosting/activate-email-hosting), aby uzyskać więcej informacji na temat aktywacji tej opcji.

## Sprawdź również

[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)

[Uruchomienie strony WWW na hostingu](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
