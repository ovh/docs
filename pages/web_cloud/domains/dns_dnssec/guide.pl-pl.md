---
title: "Zabezpieczenie domeny za pomocą DNSSEC"
excerpt: "Dowiedz się, jak zabezpieczyć domenę przed atakiem DNSSEC"
updated: 2025-03-04
---

## Wprowadzenie 

Serwer DNS przechowuje jedną lub kilka stref DNS. Strefa DNS zawiera konfigurację DNS domeny. Jest to konfiguracja, która łączy Twoją domenę z powiązanymi z nią usługami (serwer hostingowy dla Twojej strony WWW, serwery dla Twoich kont e-mail z Twoją domeną, itp.).

W niektórych przypadkach przepływ danych przez serwery DNS może być kierowany przez osoby niepowołane.
Podsumowując, ci ludzie wprowadzają w błąd cache serwerów DNS korzystając z konfiguracji DNS, którą chcą zastosować do Twojej domeny: to się nazywa "Cache poisoning".
Dzięki temu mogą przekierować przychodzące strumienie Twojej domeny na własne strony WWW i konta e-mail.

**D**omain **N**ame **S**ystem **SEC**urity wtyczki (**DNSSEC**) pozwala na ochronę konfiguracji DNS Twojej domeny przed "cache poisoning" poprzez weryfikację i uwierzytelnienie odpowiedzi DNS.

**Dowiedz się, jak aktywować DNSSEC dla Twojej domeny, aby zapewnić jej ochronę przed atakiem "Cache poisoning".**

> [!primary]
>
> Opcja DNSSEC jest aktualnie niedostępna dla domen zarejestrowanych w OVHcloud, z rozszerzeniem **.it**.
>

Aby uzyskać więcej informacji na temat działania usługi **DNSSEC**, sprawdź naszą stronę "[Dowiedz się więcej o DNSSEC](/links/web/domains-dnssec)".

Zapoznaj się również z naszymi przewodnikami dotyczącymi [serwerów DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information) oraz [edycji strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit), jeśli chcesz uzyskać więcej informacji na temat tych tematów.

## Wymagania początkowe

- Zarejestrowana domena.
- Nazwa domeny musi posiadać rozszerzenie kompatybilne z DNSSEC.
- Dostęp do [Panelu klienta OVHcloud](/links/manager), część `Web Cloud`{.action}.

## W praktyce

Aby sprawdzić, czy Twoja domena używa konfiguracji DNS OVHcloud, kliknij poniższe zakładki, aby wyświetlić kolejne kroki **3**.

> [!warning]
>
> **Te 3 etapy są ważne tylko wtedy, gdy Twoja domena jest zarejestrowana w OVHcloud.** W przeciwnym razie musisz dokonać weryfikacji u operatora.
>
> Jeśli nazwy serwerów DNS kończą się na *ovh.net* (z wyjątkiem serwera *snds2.ovh.net*), *ovh.ca* lub *anycast.me*, Twoja domena używa serwerów DNS OVHcloud.
>

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Domeny`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etap 3**
>>
>> Wybierz zakładkę `Serwery DNS`{.action} po wybraniu domeny.
>>
>> Jeśli nazwy serwerów DNS kończą się na *ovh.net* (z wyjątkiem serwera *snds2.ovh.net*), *ovh.ca* lub *anycast.me*, Twoja domena używa serwerów DNS OVHcloud.

> [!primary]
>
> Włączenie / wyłączenie **DNSSEC** może potrwać **24** godz.
>
> Jeśli chcesz później zmienić serwery DNS powiązane z Twoją domeną, zmiana serwerów DNS zostanie wprowadzona po stronie OVHcloud dopiero po wyłączeniu **DNSSEC**. Następnie konieczne będzie dodatkowe opóźnienie od **24** do **48** godzin w celu propagacji DNS zmiany.
>
> W sumie modyfikacja serwerów DNS domeny przy użyciu rozwiązania **DNSSEC** active będzie w pełni skuteczna po **48** do **72** godz.
>

Uruchomienie **DNSSEC** jest możliwe w trzech przypadkach opisanych poniżej.

### Przypadek nr 1 - Twoja domena jest zarejestrowana w OVHcloud i korzysta z serwerów DNS OVHcloud

Aby włączyć (lub wyłączyć) rozwiązanie **DNSSEC** dla Twojej domeny, kliknij poniższe zakładki, aby wyświetlić kolejne kroki **4**.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Domeny`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetla widoczne są ogólne informacje o Twojej domenie. W mailu można sprawdzić stan aktywacji **DNSSEC**.
>>
>> W polu `Bezpieczeństwo` sprawdź stan obok wzmianki `Zabezpieczenie DNS - DNSSEC`.
>>
>> ![Secured Delegation DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec.png){.thumbnail}
>>
> **Etap 4**
>>
>> Dzięki przyciskowi aktywacji znajdującemu się nad adnotacją `Zabezpieczenie DNS - DNSSEC`{.action}, możesz włączyć lub wyłączyć **DNSSEC** dla Twojej domeny. Po wykonaniu tej czynności wyświetli się nowe okno, w którym możesz zatwierdzić zmianę.
>>
>> ![Enable DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec-confirmation.png){.thumbnail}

### Przypadek nr 2 - Twoja domena jest zarejestrowana w OVHcloud i nie używa serwerów DNS OVHcloud

W takiej sytuacji skontaktuj się z dostawcą zarządzającym konfiguracją DNS Twojej domeny, aby uzyskać parametry aktywacji DNSSEC ("Key Tag" / "Flaga" / "Algorytm" / "Klucz publiczny zakodowany w base64)").

Po pobraniu tych 4 ustawień kliknij poniższe zakładki, aby wyświetlić kolejno wszystkie **5** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Domeny`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Rekordy DS`{.action}. **Ta karta jest dostępna tylko wtedy, gdy Twoja nazwa domeny używa zewnętrznych serwerów DNS**.
>>
> **Etap 4**
>>
>> Na nowej stronie, która się wyświetli, kliknij przycisk `Zmień`{.action} po prawej stronie, a następnie przycisk`+`{.action}.
>>
> **Etap 5**
>>
>> Wpisz 4 formularze `Key Tag`, `Flaga`, `Algorytm` i `Klucz publiczny zakodowany w base64)` wraz z danymi dostarczonymi przez Twojego dotychczasowego dostawcę.
>>
>> ![DS records](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ds-records/edit-plus-dashboard.png){.thumbnail}
>>
>> Po wypełnieniu wszystkich 4 formularzy kliknij niebieski przycisk `Zatwierdź`{.action} znajdujący się po prawej stronie tabeli.

### Przypadek nr 3 - Twoja domena nie jest zarejestrowana w OVHcloud i korzysta z serwerów DNS OVHcloud

> [!warning]
>
> Zanim przejdziesz dalej, upewnij się u dotychczasowego rejestratora Twojej domeny, że żadna opcja DNSSEC nie jest aktywna dla tej domeny.

W przeciwieństwie do przypadku **przypadek nr 2**, w tym miejscu należy pobrać od OVHcloud parametry aktywacji DNSSEC ("Key Tag" / "Flaga" / "Algorytm" / "Klucz publiczny zakodowany w base64)").

W tym celu użyj [API OVHcloud](/pages/manage_and_operate/api/first-steps) i wykonaj następujące działania:

- Przejdź do naszej strony [API OVHcloud](/links/api) (upewnij się, że jesteś na `https://eu.api.ovh.com` czy Twoje usługi są zainstalowane w Europie i na `https://ca.api.ovh.com` jeśli są zainstalowane poza Europą).
- Na stronie, która się wyświetli kliknij na środku `Explore the OVHcloud API`{.action}.
- Na nowej stronie, która się pojawi i w lewej części strony, skorzystaj z rozwijanego menu po prawej stronie formularza `v1`{.action}, następnie wybierz/wpisz opcję`/domain`.
- Na liście API, która wyświetla się poniżej w lewej kolumnie, wyszukaj i kliknij następujące API: **POST /domain/zone/{zoneName}/dnssec**. Możesz również kliknąć bezpośrednio na link, aby uzyskać do niego dostęp:

> [!api]
>
> @api {v1} /domain POST /domain/zone/{zoneName}/dnssec
>

- Po prawej stronie wyświetla się API z różnymi formularzami do wypełnienia.
- Kliknij przycisk znajdujący się w prawym górnym rogu o nazwie `Authenticate`{.action}, a następnie przycisk `Login with OVHcloud SSO`{.action}.
- Otworzy się interfejs logowania do [Panelu klienta OVHcloud](/links/manager).
- Zaloguj się na swoje konto, następnie kliknij `Authorize`{.action}, aby korzystać z API OVHcloud z usługami dostępnymi w Panelu klienta.
- Zostaniesz automatycznie przekierowany do poprzedniej strony API **POST /domain/zone/{zoneName}/dnssec**, będąc na niej uwierzytelnionym.
- Po prawej stronie wyświetla się API z formularzem do wypełnienia.
- Wypełnij formularz w części `PATH PARAMETERS` w następujący sposób:
- `zoneName` : wprowadź tutaj odpowiednią nazwę domeny (przykład: `domain.tld`).

![API](/pages/assets/screens/api/post-domain-zone-zonename-dnssec.png){.thumbnail}

Po wypełnieniu formularza kliknij niebieski przycisk `EXECUTE`{.action} znajdujący się w prawym dolnym rogu poprzednio wypełnionej sekcji.

Po kilku minutach otrzymasz od OVHcloud wiadomość e-mail na adres kontaktowy Twojej strefy DNS.
E-mail ten będzie zawierał 4 parametry ("Key Tag" / "Flaga" / "Algorytm" / "Klucz publiczny zakodowany w base64)") niezbędne do aktywacji DNSSEC u rejestratora Twojej domeny.

> [!success]
>
> Sprawdź niechciane wiadomości e-mail, jeśli nie dotarły do Ciebie w ciągu godziny.

Aby zakończyć, skontaktuj się z aktualnym operatorem, który zarejestruje Twoją domenę przy użyciu 4 ustawień, aby włączyć opcję DNSSEC po ich stronie.

## Sprawdź również

[Informacje ogólne na temat serwerów DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Edytuj strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 