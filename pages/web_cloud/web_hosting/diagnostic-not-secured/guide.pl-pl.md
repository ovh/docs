---
title: "Co zrobić w przypadku błędu 'Połączenie nie jest prywatne'?"
excerpt: "Reagowanie w przypadku wiadomości z błędem związanej z bezpieczeństwem strony"
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

## Wprowadzenie <a name="objective"></a>

W przypadku niedostępności Twojej strony może wystąpić kilka komunikatów o błędzie. Poniższe przykłady wskazują, że Twój hosting WWW nie zawiera [certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) (jeśli Twoja strona nie wyświetla żadnego z anomalii opisanych w tym przewodniku, sprawdź sekcję "[Sprawdź również](#go-further)"):

|Przeglądarka|Komunikat błędu|
|-|---|
|Chrome:<br>"Połączenie nie jest prywatne"|![notsecured_chrome](/pages/assets/screens/other/browsers/errors/notsecured-chrome.png){.thumbnail}|
|Firefox:<br>"Ostrzeżenie: potencjalne zagrożenie bezpieczeństwa"|![notsecured_firefox](/pages/assets/screens/other/browsers/errors/notsecured-firefox.png){.thumbnail}|
|Edge:<br>"Twoje połączenie nie jest prywatne"|![notsecured_edge](/pages/assets/screens/other/browsers/errors/notsecured-edge.png){.thumbnail}|
|Safari:<br>"To połączenie nie jest prywatne"|![notsecured_safari](/pages/assets/screens/other/browsers/errors/notsecured-safari.png){.thumbnail}|

**Dowiedz się, jak usunąć błędy związane z komunikatem "Połączenie nie jest prywatne".**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "[Sprawdź również](#go-further)" niniejszego przewodnika.
>

## Wymagania początkowe

- Zarządzanie [serwerami DNS](/pages/web_cloud/domains/dns_server_general_information) i [strefą DNS](/pages/web_cloud/domains/dns_zone_general_information) Twojej domeny

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

Aby usunąć tę anomalię, należy:

1. określić hosting, do którego jest podłączona Twoja domena, w celu przeprowadzenia interwencji na właściwym serwerze;
2. utworzyć, aktywować lub odnowić [certyfikat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) dla Twojej domeny na wybranym hostingu.

### 1 - Sprawdź hosting przypisany do Twojej domeny

#### Sprawdź adres IP hostingu

<!-- CP-STEPS-START:check-hosting-ip -->
[Powyższe](#objective) komunikaty błędów niekoniecznie oznaczają, że Twoja strona WWW jest zainstalowana na jednym z naszych [pakietów Web Cloud](/links/web/hosting). Należy zatem sprawdzić adres IP serwera, do którego jest podłączona Twoja [nazwa domeny](/links/web/domains).

Aby odnaleźć adres IP Twojego [hostingu OVHcloud](/links/web/hosting), kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Strona Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> W ramce **Informacje ogólne** znajdziesz oznaczenia **IPv4** i **IPv6**.
>>
>> ![Adresy IPv4 i IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Zapisz adres IPv4 i/lub IPv6, a następnie kontynuuj czytanie przewodnika.
<!-- CP-STEPS-END:check-hosting-ip -->

#### Sprawdź adres IP w strefie DNS

<!-- CP-STEPS-START:check-dns-zone-ip -->
Teraz sprawdź, czy adres IP podany w [strefie DNS](/pages/web_cloud/domains/dns_zone_edit) odpowiada adresowi Twojego [hostingu Web Cloud](/links/web/hosting).

Kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią domenę.
>>
>> ![Strona Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Zapisz docelowy wpis typu `A` dla Twojej domeny:
>>
>> ![Wpis A w strefie DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}
<!-- CP-STEPS-END:check-dns-zone-ip -->

#### Wykonaj niezbędne operacje

**Kliknij scenariusz odpowiadający Twojej sytuacji, aby wyświetlić treść.**

/// details | Adres IP odpowiada adresowi IP Twojego hostingu

Adres IP podany w [strefie DNS](/pages/web_cloud/domains/dns_zone_edit) odpowiada adresowi IP Twojego hostingu. Przejdź do [części 2](#step2).

///

/// details | Adres IP nie dotyczy żadnego hostingu z Twojego konta, ale pojawia się w liście serwerów Web Cloud

Adres IP wskazany w strefie nie dotyczy hostingu na Twoim [koncie OVHcloud](/links/manager), ale pojawia się w [liście serwerów Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Sprawdź, czy nie posiadasz hostingu z tym adresem IP na jednym z pozostałych [kont OVHcloud](/links/manager), jeśli utworzyłeś kilka z nich. W razie potrzeby skontaktuj się z webmasterem lub [partnerami OVHcloud](/links/partner) w tej sprawie.

///

/// details | Adres IP nie jest adresem Twojego hostingu i nie pojawia się w liście serwerów Web Cloud

Adres IP wskazany w strefie nie jest adresem Twojego hostingu i nie pojawia się również w [liście serwerów Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Skontaktuj się ze swoim webmasterem lub [partnerami OVHcloud](/links/partner) w tym zakresie.

///

/// details | Twoja domena używa innych serwerów DNS OVHcloud (ns?.ovh.net / dns?.ovh.net)

Powyżej strefy DNS w Panelu klienta OVHcloud komunikat wskazuje, że Twoja domena używa innych serwerów [DNS](/pages/web_cloud/domains/dns_zone_edit) i wyświetlają się one w formie "ns **?** .ovh.net" lub "dns **?** .ovh.net" (zastąp "**?**" odpowiednim numerem serwera DNS):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Zmień serwery DNS domeny, aby odpowiadały one tym, które są zapisane w rekordach typu `NS` strefy. Aby wykonać tę operację, postępuj zgodnie z instrukcjami z [tego przewodnika](/pages/web_cloud/domains/dns_server_edit).

///

/// details | Twoja domena używa zewnętrznych serwerów DNS (nie OVHcloud)

Powyżej strefy DNS w Panelu klienta OVHcloud komunikat wskazuje, że Twoja domena używa innych serwerów [DNS](/pages/web_cloud/domains/dns_zone_edit), a te nie wyświetlają się w formie "ns **?** .ovh.net" lub "dns **?** .ovh.net":

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

Skontaktuj się z webmasterem lub [partnerami OVHcloud](/links/partner) w tym zakresie.

///

/// details | Twoja domena nie wyświetla się w Panelu klienta OVHcloud

Twoja domena nie pojawia się na stronie [Domeny](/links/control-panel/web-domains) w Panelu klienta OVHcloud.

Oznacza to, że Twoja domena nie jest zarządzana z poziomu [Panelu klienta OVHcloud](/links/manager).

Sprawdź, czy domena nie jest zarządzana z poziomu jednego z Twoich pozostałych [kont OVHcloud](/links/manager), jeśli utworzyłeś kilka z nich.

Możesz również wskazać jej operatora oraz serwery DNS, z którymi jest powiązana, za pomocą naszego narzędzia [WHOIS](/links/web/domains-whois).

W razie potrzeby skontaktuj się z webmasterem lub [partnerami OVHcloud](/links/partner) w tym zakresie.

///

### 2 - Sprawdź certyfikat SSL na Twoim hostingu <a name="step2"></a>

<!-- CP-STEPS-START:check-ssl-certificate -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Strona Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> W zakładce `Informacje ogólne`{.action} sprawdź sekcję `Certyfikat SSL`:
>>
>> ![Certyfikat SSL w zakładce informacji ogólnych](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/no-ssl-certificate.png){.thumbnail}
<!-- CP-STEPS-END:check-ssl-certificate -->

#### Scenariusz 1: Twój hosting nie zawiera certyfikatu SSL

Włącz [certyfikat SSL](/links/web/hosting-options-ssl) na Twoim hostingu postępując zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web_cloud/web_hosting/ssl_on_webhosting).

#### Scenariusz 2: certyfikat SSL nie działa

Jeśli wygenerowałeś **certyfikat SSL "Let's Encrypt"**, aktywuj opcję SSL dla swojego hostingu, postępując zgodnie z instrukcjami w [tym przewodniku](/pages/web_cloud/web_hosting/ssl_on_webhosting).

Jeśli posiadasz importowany **certyfikat SSL** i certyfikat ten nie działa, skontaktuj się z dostawcą.

Jeśli zamówiłeś jeden z płatnych **certyfikatów SSL** od naszego partnera [SECTIGO](https://sectigo.com/), sprawdź, czy otrzymałeś wiadomość e-mail z propozycją odnowienia certyfikatu.
<br>W razie potrzeby skontaktuj się z [pomocą SECTIGO](https://sectigo.com/support) w tej sprawie.

> [!primary]
>
> Aby odnaleźć wszystkie e-maile wysłane przez nasze usługi, przejdź na stronę [Moje wiadomości](/links/control-panel/account-messages).

## Sprawdź również <a name="go-further"></a>

[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Usunięcie błędu "Strona nie została zainstalowana"](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Co zrobić w przypadku błędu 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
