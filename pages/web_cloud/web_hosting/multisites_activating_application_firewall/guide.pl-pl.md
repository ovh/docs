---
title: "Aktywacja zapory systemowej"
excerpt: "Hosting www: Aktywacja zapory systemowej"
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

*ModSecurity* to uzupełniający moduł Apache, który filtruje wszystkie zapytania kierowane do serwera WWW. Wzmacnia bezpieczeństwo przed znanymi podatnościami poprzez przechwytywanie i filtrowanie wniosków, zanim zostaną one przetworzone przez skrypty.

Wstępnie skonfigurowany zbiór podstawowych zasad, takich jak "Core Rule Set" (CRS), *ModSecurity* chroni Twoje strony WWW przed najczęstszymi atakami, na przykład:

- Trojany,
- Wstrzykiwanie e-maili,
- Luka w plikach PDF,
- Włamania do plików na hostingu,
- wtrysk typu SQL lub XSS
- itd.

**Dowiedz się, jak włączyć zapory aplikacji z poziomu Panelu klienta OVHcloud, aby uzyskać lepszą ochronę.**

> [!primary]
>
> Zmiana ustawień konfiguracji zapory sieciowej jest niedostępna, ponieważ Twój hosting znajduje się w infrastrukturze współdzielonej.

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](/links/web/hosting).
- Posiadanie co najmniej jednej [domeny](/links/web/domains) przypisanej do hostingu

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

/// details | Włączanie zapory aplikacji na całym obszarze hostingu sieciowego w konfiguracji PHP

<!-- CP-STEPS-START:enable-firewall -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> W ramce **Konfiguracja** znajdziesz wpis **Ogólna wersja PHP**.
>>
>> ![Globalna wersja PHP](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration.png){.thumbnail}
>>
>> Kliknij przycisk `...`{.action} po prawej stronie wpisu **Ogólna wersja PHP**, a następnie kliknij `Zmień konfigurację`{.action}.
>>
> **Krok 3**
>>
>> W otwartej oknie wybierz pozycję `Zmień bieżącą konfigurację`{.action} i kliknij przycisk `Dalej`{.action}.
>>
>> ![managephpconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/application-firewall-step-2.png){.thumbnail}
>>
>> W nowym oknie upewnij się, że opcja **Firewall aplikacyjny** jest ustawiona na `Włączony`{.action}. Następnie kliknij przycisk `Zatwierdź`{.action}.
<!-- CP-STEPS-END:enable-firewall -->

///

/// details | Włączanie zapory aplikacji tylko na konkretnej domenie lub poddomenie

<!-- CP-STEPS-START:disable-firewall -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

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
>> ![Moje strony](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `>`{.action} po lewej stronie nazwy strony internetowej, aby wyświetlić przypisane domeny lub poddomeny.
>>
>> ![Strona internetowa](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Następnie kliknij przycisk `⁝`{.action} po prawej stronie nazwy domeny lub poddomeny, a następnie kliknij `Zmień domenę`{.action}.
>>
>> ![Opcje przypisanych domen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Krok 4**
>>
>> W oknie konfiguracji zaznacz pole `Włącz firewall`{.action}. Możesz również uwzględnić poddomenę `www` w tej konfiguracji, zaznaczając odpowiednie pole u góry (jeśli ta poddomena również została zadeklarowana na tej samej stronie internetowej).
>>
>> ![Zmiana domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-enable-firewall-step-1.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}, aby zatwierdzić zmianę ustawień.
>>
>> Po włączeniu zapory na Twojej domenie lub poddomenie, słowo **Włączona** pojawi się w kolumnie **Firewall**.
>>
>> Jeśli słowo **Włączona** nie pojawi się po kilku minutach w wierszu odpowiadającym danej domenie lub poddomenie, przeładuj stronę.
<!-- CP-STEPS-END:disable-firewall -->

///

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
