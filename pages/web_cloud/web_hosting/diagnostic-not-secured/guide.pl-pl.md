---
title: "Co zrobić w przypadku błędu « Połączenie nie jest prywatne »?"
excerpt: "Reagowanie w przypadku wiadomości z błędem związanej z bezpieczeństwem strony"
updated: 2021-07-08
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie  <a name="objective"></a>

W przypadku niedostępności Twojej strony może wystąpić kilka komunikatów o błędzie. Poniższe przykłady wskazują, że Twój hosting WWW nie zawiera [certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) (jeśli Twoja strona nie wyświetla żadnego z anomalii opisanych w tym przewodniku, sprawdź sekcję « [Sprawdź również](#go-further) »):

|Przeglądarka|Komunikat błędu|
|-|---|
|Chrome:<br>« Połączenie nie jest prywatne »|![notsecured_chrome](/pages/assets/screens/other/browsers/errors/notsecured-chrome.png){.thumbnail}|
|Firefox:<br>« Ostrzeżenie: potencjalne zagrożenie bezpieczeństwa »|![notsecured_firefox](/pages/assets/screens/other/browsers/errors/notsecured-firefox.png){.thumbnail}|
|Edge:<br>« Twoje połączenie nie jest prywatne »|![notsecured_edge](/pages/assets/screens/other/browsers/errors/notsecured-edge.png){.thumbnail}|
|Safari:<br>« To połączenie nie jest prywatne »|![notsecured_safari](/pages/assets/screens/other/browsers/errors/notsecured-safari.png){.thumbnail}|

**Dowiedz się, jak usunąć błędy związane z plikiem « Połączenie nie jest prywatne ».**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji « [Sprawdź również](#go-further) » niniejszego przewodnika.
>

## Wymagania początkowe

- Zarządzanie [serwerami DNS](/pages/web_cloud/domains/dns_server_general_information) i [strefą DNS](/pages/web_cloud/domains/dns_zone_general_information) Twojej domeny
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

Aby usunąć tę anomalię, należy:

1. określenie hostingu, do którego jest podłączona Twoja domena, w celu przeprowadzenia interwencji na właściwym serwerze;
2. tworzenie, aktywacja lub odnawianie [certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) dla Twojej domeny na wybranym hostingu.

### Etap 1: sprawdź hosting przypisany do Twojej domeny

#### Sprawdź adres IP hostingu

[Poprzednie](#objective) komunikaty błędów niekoniecznie oznaczają, że Twoja strona WWW jest zainstalowana na jednym z naszych [pakietów Web Cloud](/links/web/hosting). Należy zatem sprawdzić adres IP serwera, do którego jest podłączony Twoja [nazwa domeny](/links/web/domains).

Aby odnaleźć adres IP Twojego hostingu [hosting OVHcloud](/links/web/hosting), kliknij na górze [Panel klienta OVHcloud](/links/manager) na `Web Cloud`{.action}, następnie na `Hosting`{.action} i wybierz odpowiedni hosting.

W zakładce `Informacje ogólne`{.action} podaj adres IPV4 i/lub IPV6 Twojego hostingu.

![hosting-general-informacje](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

#### Sprawdź adres IP w strefie DNS

Teraz sprawdź, czy adres IP podany w [Strefa DNS](/pages/web_cloud/domains/dns_zone_edit) odpowiada adresowi Twojej [hostingu Web Cloud](/links/web/hosting).

Kliknij przycisk `Domeny{.action} w lewym górnym rogu [Panelu klienta OVHcloud](/links/manager) i wybierz nazwę domeny Twojej strony.

Wybierz zakładkę `Strefa DNS`{.action} i zapisz docelowy wpis `A` dla Twojej domeny:

![zone-dns-ip](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

#### Wykonaj niezbędne operacje

|Scenariusz|Działania do podjęcia|
|---|---|
|Adres IP podany w [Strefa DNS](/pages/web_cloud/domains/dns_zone_edit) odpowiada adresowi IP Twojego hostingu.|Skorzystaj z [etapu 2](#step2).|
|Adres IP wskazany w strefie nie dotyczy hostingu [konta OVHcloud](/links/manager), ale pojawia się w [liście serwerów Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).|Sprawdź, czy nie posiadasz hostingu posiadającego ten adres IP w jednym z pozostałych [kont OVHcloud cloud](/links/manager), jeśli utworzyłeś kilka z nich. W razie potrzeby skontaktuj się z webmasterem lub [partnerami OVHcloud](/links/partner) w tej sprawie.|
|Adres IP wskazany w strefie nie jest adresem Twojego hostingu i nie pojawia się również w [liście serwerów Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).|Skontaktuj się ze swoim webmasterem lub [partnerami OVHcloud](/links/partner) w tym zakresie.|
|W zakładce `Strefa DNS`{.action} komunikat wskazuje, że Twoja domena używa innych serwerów [DNS](/pages/web_cloud/domains/dns_zone_edit) i wyświetla się je w formie « ns **?** .ovh.net » lub « dns **?** net » (zastąp « **?** » odpowiednim numerem serwera DNS):<br><br>![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Zmień serwery DNS domeny, aby odpowiadały one tym, które są zapisane w rekordach typu `NS` strefy. Aby wykonać tę operację, postępuj zgodnie z instrukcjami z [tego przewodnika](/pages/web_cloud/domains/dns_server_edit).|
|W zakładce `Strefa DNS{.action} komunikat wskazuje, że Twoja domena używa innych serwerów [DNS](/pages/web_cloud/domains/dns_zone_edit), a te nie wyświetlają się w formie « ns **?** .ovh.net » lub « dns **?** ovh.net »:<br><br>![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}|Skontaktuj się z webmasterem lub [partnerami OVHcloud](/links/partner) w tym zakresie.|
|Twoja domena nie wyświetla się w części `Domeny`{.action} [Panel klienta OVHcloud](/links/manager).<br><br>Lub zakładka `Strefa DNS`{.action} Twojej domeny wyświetla się w następujący sposób:<br><br<>![zonedns_ndd_pas_sur_lec_lec_lec_lec2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}|Oznacza to, że Twoja domena nie jest zarządzana z poziomu [panelu klienta OVHcloud](/links/manager).<br><br>Sprawdź, czy domena nie jest zarządzana z poziomu jednego z Twoich pozostałych [kont OVHcloud](/links/manager), jeśli utworzyłeś kilka domen.<br><br>Możesz również wskazać jej operatora oraz serwery DNS, z którymi jest powiązana. za pomocą naszego narzędzia [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl).<br><br>W razie potrzeby skontaktuj się z webmasterem lub [partnerami OVHcloud](/links/partner) w tym zakresie.|

### Etap 2: sprawdź certyfikat SSL na Twoim hostingu <a name="step2"></a>

W zakładce `Informacje ogólne`{.action} Twojego hostingu OVHcloud sprawdź sekcję `Certyfikat SSL`:

![ssl-certificate-in-general-tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/no-ssl-certificate.png){.thumbnail}

#### Scenariusz 1: Twój hosting nie zawiera certyfikatu SSL

Włącz [certyfikat SSL](/links/web/hosting-options-ssl) na Twoim hostingu postępując zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web_cloud/web_hosting/ssl_on_webhosting).

#### Scenariusz 2: certyfikat SSL nie działa

Jeśli wygenerowałeś **certyfikat SSL « Let's Encrypt »**, włącz opcję SSL w opcji `MultiSite`{.action} Twojego hostingu postępując zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web_cloud/web_hosting/ssl_on_webhosting#aktywacja-certyfikatu-ssl-na-stronie-podpietej-w-opcji-multisite).

Jeśli posiadasz importowany **certyfikat SSL** i certyfikat ten nie działa, skontaktuj się z dostawcą.

Jeśli zamówiłeś jeden z płatnych **certyfikatów SSL** od naszego partnera [SECTIGO](https://sectigo.com/){.external}, sprawdź, czy otrzymałeś wiadomość e-mail z propozycją odnowienia certyfikatu.
<br>W razie potrzeby skontaktuj się z [pomocą SECTIGO](https://sectigo.com/support){.external} w tej sprawie.

> [!primary]
>
> Aby odnaleźć wszystkie e-maile wysłane przez nasze usługi, kliknij w prawym górnym rogu [Panelu klienta OVHcloud](/links/manager), następnie kliknij `E-maile od działu wsparcia`{.action}):
>
>![right-menu-email-button](/pages/assets/screens/control_panel/product-selection/web-cloud/right-column/right-menu-email-button.png){.thumbnail}
>

## Sprawdź również <a name="go-further"></a>

[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Usunięcie błędu “Strona nie została zainstalowana”](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Co zrobić w przypadku błędu 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).