---
title: "Jak sprawdzić przypisanie 'nazwy domeny / strony internetowej'?"
excerpt: "Użyj naszego narzędzia diagnostycznego, aby upewnić się, że Twoja domena lub poddomena jest poprawnie zadeklarowana z Twoją stroną internetową na Twoim hosting"
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

Możesz hostować wiele stron internetowych w ramach jednej oferty hostingu, nawet jeśli nazwy domen nie są zarejestrowane u OVHcloud. Ponadto możesz przypisać jedną lub więcej nazw domen lub poddomen do tej samej strony internetowej.

**Użyj naszego narzędzia diagnostycznego, aby upewnić się, że Twoja domena lub poddomena jest poprawnie zadeklarowana z Twoją stroną internetową na Twoim hosting.**

## Wymagania początkowe

- Posiadanie oferty [hostingu OVHcloud](/links/web/hosting-multisite) zgodnej z tą funkcją.
- Posiadanie jednej lub więcej [nazw domen](/links/web/domains).
- Możliwość zmiany konfiguracji swoich nazw domen z poziomu [strefy DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

### Uzyskanie dostępu do narzędzia diagnostycznego

<!-- CP-STEPS-START:diagnose-website -->
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
> **Krok 4**
>>
>> Nazwy domen i poddomen przypisane do Twojej strony internetowej będą widoczne.
>>
>> ![Domains associated websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab-with-domains-associated-displayed.png){.thumbnail}
>>
>> Kolumna `Diagnostyka` informuje, czy Twoja domena poprawnie wskazuje na przypisany hosting. Pozwala szybko sprawdzić, czy konfiguracja DNS Twojej domeny została poprawnie wykonana wraz z Twoim hostingiem. Dzięki tej kolumnie możesz zidentyfikować i rozwiązać ewentualne problemy z wskazywaniem. Dla każdej domeny możliwe są trzy wyniki diagnostyczne:
>>
>> - `A/AAAA` zielony.
>> - `A/AAAA` żółty.
>> - `A/AAAA` szary.
>>
>> Zobacz sekcję "[Interpretacja kolorów narzędzia diagnostycznego](#interpretation)", aby dowiedzieć się, co oznaczają te trzy kolory.
<!-- CP-STEPS-END:diagnose-website -->

<!-- CP-STEPS-START:diagnostic-status-interpretation -->
### Interpretacja kolorów narzędzia diagnostycznego <a name="interpretation"></a>

**Kliknij odpowiednie wskaźniki statusu poniżej, aby wyświetlić ich objaśnienia.**

/// details | A/AAAA zielony

![A and AAAA green](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-green-info.png){.thumbnail}

Gdy ikona `A/AAAA` jest zielona w kolumnie `Diagnostyka`, oznacza to, że rekord **A** (dla adresów IPv4) i/lub rekord **AAAA** (dla adresów IPv6) Twojej domeny poprawnie wskazuje na adres IP Twojego hostingu. Konfiguracja DNS Twojej domeny jest więc zgodna z potrzebami działania strony internetowej na Twoim Hosting.

///

/// details | A/AAAA żółty

![A and AAAA yellow](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-yellow-info.png){.thumbnail}

Gdy ikona `A/AAAA` jest żółta w kolumnie `Diagnostyka`, oznacza to, że rekord **A** (IPv4) i/lub **AAAA** (IPv6) Twojej domeny wskazuje na adres IP, ale nie jest to adres IP hostingu, z którego przeglądasz kolumnę `Diagnostyka`.

Aby rozwiązać problemy z wskazywaniem DNS Twojej domeny i upewnić się, że poprawnie wskazuje ona na żądany hosting, postępuj zgodnie z instrukcjami opisanymi w naszym przewodniku "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | A/AAAA szary

![A and AAAA grey](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-grey-info.png){.thumbnail}

Gdy ikona `A/AAAA` jest szara w kolumnie `Diagnostyka`, oznacza to, że domena nie wskazuje obecnie na żaden adres IP, a żaden rekord **A** (IPv4) ani **AAAA** (IPv6) nie jest skonfigurowany dla tej domeny.

Aby dodać rekordy **A** i/lub **AAAA** i poprawnie skonfigurować swoją domenę, postępuj zgodnie z instrukcjami opisanymi w naszym przewodniku "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

///

<!-- CP-STEPS-END:diagnostic-status-interpretation -->

## Sprawdź również

[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)

[Uruchomienie strony WWW na hostingu](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
