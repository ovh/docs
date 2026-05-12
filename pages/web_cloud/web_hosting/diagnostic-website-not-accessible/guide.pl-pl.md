---
title: "Co zrobić, jeśli moja strona jest niedostępna?"
excerpt: "Zdiagnozuj przyczyny niedostępności Twojej strony WWW"
updated: 2026-03-31
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

W przypadku niedostępności Twojej strony WWW może pojawić się kilka zwrotów błędu. Poniższe przykłady ilustrują błędną konfigurację Twoich [serwerów DNS](/pages/web_cloud/domains/dns_server_edit), Twojej [strefy DNS](/pages/web_cloud/domains/dns_zone_edit) lub domeny zawieszonej (jeśli Twoja strona nie wyświetla jednego z komunikatów o błędach opisanych tutaj, zobacz sekcję [Sprawdź również](#go-further)):

|Przeglądarka|Komunikat błędu|
|-|---|
|Chrome:<br>"Ta witryna jest nieosiągalna"|![cantbereachd_chrome](/pages/assets/screens/other/browsers/errors/cant-be-reached-chrome.png){.thumbnail}|
|Firefox:<br>"Niestety, nie udało się odnaleźć tej strony"|![cantbereached_firefox](/pages/assets/screens/other/browsers/errors/cant-be-reached-firefox.png){.thumbnail}|
|Edge:<br>"Niestety… nie można przejść do tej strony"|![cantbereachd_edge](/pages/assets/screens/other/browsers/errors/cant-be-reached-edge.png){.thumbnail}|
|Safari:<br>"Safari nie może znaleźć serwera"|![cantbereachd_safari](/pages/assets/screens/other/browsers/errors/cant-be-reached-safari.png){.thumbnail}|

**Dowiedz się, jak usunąć błędy związane z plikiem "Ta witryna jest nieosiągalna"**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) ten przewodnik.
>

## Wymagania początkowe

- Zarządzanie serwerami i [strefą DNS](/pages/web_cloud/domains/dns_zone_edit) domeny
- Aktualizacja w [płatności](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) i [odnowienie](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) powiązanych usług (domena i hosting)

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

### 1 - Sprawdź ważność Twojej domeny

> [!warning]
>
> Odnowienie usług należy do Ciebie.<br>
> OVHcloud, jako dostawca hostingu, ma obowiązek definitywnie usunąć usługi (domeny, hosting, e-maile, itp.), które nie zostały odnowione na czas, jak również wszystkie zawarte w nich dane.
>
> W związku z tym zalecamy [włączenie automatycznego](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#w-praktyce) odnowienia wszystkich Twoich subskrypcji OVHcloud.
>

Aby sprawdzić poprawność subskrypcji Twojej domeny, kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Moje rozwiązania i usługi](/links/control-panel/billing-services).
>>
> **Krok 2**
>>
>> Odnów Twoją domenę, jeśli to konieczne, za pomocą przycisku `...`{.action}, a następnie `Odnów usługę`{.action}.
>>
>> ![renew-service-button](/pages/assets/screens/control_panel/product-selection/web-cloud/order/renew-service-button.png){.thumbnail}
>>
> **Krok 3**
>>
>> Po odnowieniu domeny Twoja strona będzie dostępna w ciągu 48 godzin.

### 2 - Sprawdź serwery DNS

Aby sprawdzić poprawność Twoich [serwerów DNS](/pages/web_cloud/domains/dns_server_edit), przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią domenę.

**Kliknij scenariusz odpowiadający Twojej sytuacji, aby wyświetlić jego zawartość.**

/// details | Scenariusz 1 - Brak anomalii na serwerach DNS

Aby sprawdzić zadeklarowane serwery DNS, kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią domenę.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Sprawdź serwery podane w zakładce `Serwery DNS`{.action}:
>>
>> ![srv-dns-ok2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/name-dns-server.png){.thumbnail}
>>
> **Krok 3**
>>
>> Jeśli są identyczne z celami wpisów typu `NS` w **Strefie DNS**, przejdź do [części 3](#step3):
>>
>> ![srv-dns-ok](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns.png){.thumbnail}

///

/// details | Scenariusz 2 - Nad strefą DNS pojawi się ostrzeżenie

Ostrzeżenie w zakładce **Strefa DNS** wskazuje, że serwery DNS używane przez Twoją domenę nie są serwerami pokazywanymi w Twojej strefie. Możliwe są dwa scenariusze:

- Pod frazą "Aktualnie korzystasz z następujących serwerów DNS:", wskazane serwery są typu "ns **?** ovh.net" i "dns **?** ovh.net" (zastąp "**?**" na dowolny numer):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Zmień serwery DNS zgodnie z instrukcjami zawartymi w [tym przewodniku](/pages/web_cloud/domains/dns_server_edit), aby były one identyczne z celami wpisów typu `NS` w **Strefie DNS**.

Twoja strona będzie dostępna w ciągu maksymalnie 48 godzin.

- Pod frazą "Aktualnie korzystasz z następujących serwerów DNS:", wskazane serwery nie są typu "ns **?** ovh.net" i "dns **?** ovh.net".

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> W takiej sytuacji przed przystąpieniem do jakichkolwiek czynności, należy skontaktować się z dostawcą usług hostowanych w strefie DNS, webmasterem lub [partnerami OVHcloud](/links/partner).
>
> Możliwe, że serwery DNS używane przez Twoją domenę działają i że problem z dostępem do Twojej strony jest związany z brakującym lub nieprawidłowym wpisem w [strefie DNS](/pages/web_cloud/domains/dns_zone_general_information). Każda zmiana serwerów DNS może spowodować niedostępność Twoich kont e-mail lub innych aplikacji online.

///

/// details | Scenariusz 3 - W strefie DNS nie pojawia się żaden wpis typu NS

W **Strefie DNS** Twojej domeny nie ma wpisu typu `NS`:

![srv_dns_missing](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns-missing.png){.thumbnail}

Kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią domenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wykonaj kopię zapasową aktualnej strefy, klikając przycisk `Modyfikacja w trybie tekstowym`{.action}:
>>
>> ![change_DNS_zone_change_text_format](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format.png){.thumbnail}
>>
>> Skopiuj/wklej zawartość **Strefy DNS** do dokumentu tekstowego. Zapisz lokalnie ten dokument.
>>
> **Krok 3**
>>
>> Kliknij `Zresetuj strefę DNS`{.action} i wybierz `Nie, ale chcę zresetować strefę DNS.`{.action}.
>>
>> Wskaż serwery e-mail i hosting, a następnie kliknij `Zatwierdź`{.action}.
>>
>> ![change_DNS_zone_reset](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}
>>
> **Krok 4**
>>
>> Twoja strona będzie dostępna w ciągu maksymalnie 24 godzin.

///

### 3 - Sprawdź strefę DNS <a name="step3"></a>

Na tym etapie odnajdziesz adres IP Twojego hostingu, po czym dodaj go do Twojej **Strefy DNS**.

Jeśli Twoja strona WWW nie jest hostowana w infrastrukturze OVHcloud lub jest zarządzana przez innego dostawcę, skontaktuj się z odpowiednią pomocą techniczną.

Jeśli Twoja strona internetowa jest hostowana w ramach jednej z naszych [ofert hostingu WWW](/links/web/hosting), kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> W ramce **Informacje ogólne** znajdziesz oznaczenia **IPv4** i **IPv6**.
>>
>> ![IPv4-IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Skopiuj adres IPv4 i/lub IPv6 Twojej domeny.

Następnie przenieś domenę do [strefy DNS](/pages/web_cloud/domains/dns_zone_edit), modyfikując lub dodając jeden lub więcej rekordów typu `A`.

![ipv4-DNSzone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

Twoja strona będzie dostępna w ciągu maksymalnie 24 godzin.

## Sprawdź również <a name="go-further"></a>

[Usunięcie błędu "Strona nie została zainstalowana"](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Co zrobić w przypadku błędu 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Skontaktuj się z [partnerami OVHcloud](/links/partner), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
