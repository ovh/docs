---
title: "Co zrobić w przypadku błędu "Twoje połączenie nie jest prywatne"?"
slug: blad-strona-nie-bezpieczna
excerpt: "Reagowanie w przypadku wiadomości z błędem związanej z bezpieczeństwem strony"
section: Diagnostyka
---

**Ostatnia aktualizacja z dnia 06-07-2021**
 
## Cel <a name="objectif"></a>

W przypadku niedostępności Twojej strony może wystąpić kilka komunikatów o błędzie. Poniższe przykłady wskazują, że Twój hosting WWW nie zawiera [certyfikatu SSL](../les-certificats-ssl-sur-les-hebergements-web/) (jeśli Twoja strona nie wyświetla któregokolwiek z nieprawidłowości opisanych w tym przewodniku, sprawdź sekcję "[Sprawdź](#aller-plus-loin)" tego przewodnika): 

|Przeglądarka|Komunikat błędu
\|-|---|
|W Chrome:<br>"Twoje połączenie nie jest prywatne"|![notsecured_chrome](images/notsecured_chrome.png){.thumbnail}\|
|Na Firefox:<br>"Uwaga: Prawdopodobne ryzyko bezpieczeństwa"|![notsecured_firefox](images/notsecured_firefox.png){.thumbnail}\|
|Na Edge:<br>"Twoje połączenie nie jest prywatne"|![notsecured_edge](images/notsecured_edge.png){.thumbnail}\|
|Na Safari:<br>"To połączenie nie jest prywatne"|![notsecured_safari](images/notsecured_safari.png){.thumbnail}\|

**Dowiedz się, jak usunąć błędy związane z plikiem "Twoje połączenie nie jest prywatne".**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "[Sprawdź](#aller-plus-loin)" niniejszego przewodnika.
>

## Wymagania początkowe

- Zarządzanie serwerami i [strefą DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) Twojej domeny
- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## W praktyce

Aby usunąć tę anomalię, należy:

1. określenie hostingu, do którego jest podłączona Twoja domena, w celu przeprowadzenia interwencji na właściwym serwerze;
2. tworzenie, aktywacja lub odnawianie [certyfikatu SSL](../les-certificats-ssl-sur-les-hebergements-web/) dla Twojej domeny na wybranym hostingu.

### Etap 1: sprawdź hosting przypisany do Twojej domeny

#### Sprawdź adres IP hostingu

Opisane [powyżej](#objectif) komunikaty o błędach nie muszą oznaczać, że Twoja strona jest zainstalowana w jednej z naszych [ofert WW Cloud](https://www.ovh.com/fr/hebergement-web/). Sprawdź adres IP serwera, do którego jest podłączona Twoja [domena](https://www.ovh.com/world/domains/).

Aby odnaleźć adres IP Twojego [hostingu OVHcloud](https://www.ovh.com/fr/hebergement-web/), kliknij w górnej części [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) w `Web Cloud`{.action}, a następnie w menu po lewej stronie wybierz `Hosting`{.action} i wybierz odpowiedni hosting.

W zakładce `Informacje ogólne`{.action} zwróć uwagę na adres IPV4 i/lub IPV6 Twojego hostingu.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### Sprawdź adres IP w strefie DNS

Teraz sprawdź, czy adres IP wskazany w [strefie DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) odpowiada adresowi Twojego [hostingu WWW Cloud](https://www.ovh.com/fr/hebergement-web/).

Kliknij `Domeny`{.action} w lewym górnym rogu Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) i wybierz nazwę domeny Twojej strony.

Wybierz kartę `Strefa DNS`{.action} i zapisz cel wpisu typu `A` dla swojej domeny:

![zone-dns-ip](images/zone-dns-ip.png){.thumbnail}

#### Wykonaj niezbędne operacje

|Scenariusz|Co należy zrobić?|
|---|---|
|Adres IP wskazany w strefie DNS odpowiada adresowi IP Twojego hostingu.|Przejdź [do etapu drugiego](#etape2).|
|Adres IP wskazany w strefie nie jest adresem Twojego hostingu i nie pojawia się na [liście serwerów WWW Cloud](../liste-des-adresses-ip-des-clusters-et-hebergements-web/).|Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/fr/) w tym zakresie.|
|Adres IP wskazany w strefie nie dotyczy żadnego hostingu Twojego [konta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), ale pojawia się na [liście serwerów WWW Cloud](../liste-des-adresses-ip-des-clusters-et-hebergements-web/).|Upewnij się, czy nie posiadasz hostingu posiadającego ten adres IP w jednym z Twoich pozostałych [kont OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), jeśli utworzyłeś kilka kont. W razie potrzeby skontaktuj się z webmasterem lub [partnerami OVHcloud](https://partner.ovhcloud.com/fr/).|
|Ostrzeżenie to wyświetla się w zakładce `Strefa DNS`{.action}:<br><br>![avertissement_zonedns_pas_sur_srv_dns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|Zmodyfikuj zatem serwery DNS Twojej domeny, aby odpowiadały one rekordom typu `NS` strefy. Aby wykonać tę operację, postępuj zgodnie z instrukcjami zawartymi w [tym przewodniku](../../domains/generalites-serveurs-dns/).|
|Twoja domena nie wyświetla się w części `Domeny`{.action} ><br>Lub zakładka `Strefa DNS`{.action} Twojej domeny wyświetla się w następujący sposób:<br><br>![zonedns_ndd_pas_sur_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Oznacza to, że Twoja domena nie jest zarządzana w Panelu klienta OVHcloud.<br><br>Określ operatora za pomocą narzędzia ><br>W tym celu w [tym przewodniku](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe) znajdziesz i zmodyfikuj odpowiednią strefę DNS.|
|Nie wyświetlają się `serwery DNS`{.action} w postaci "ns **?** ovh.net" czy "dns **?** ovh.net" (zastąp "**?** "przez odpowiedni numer serwera DNS).<br><br>Oznacza to, że `strefa DNS`{.action} domeny nie znajduje się na ><br>![zewnętrzne-dns](images/external-dns-servers.png){.thumbnail}|Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/fr/) w tym zakresie.|

### Etap 2: sprawdź certyfikat SSL na Twoim hostingu <a name="etape2"></a>

W zakładce `Informacje ogólne`{.action} dotyczące hostingu OVHcloud sprawdź sekcję `Certyfikat SSL`:

![ssl-certificate-in-general-tab](images/ssl-certificate-in-general-tab.png){.thumbnail}

#### Scenariusz 1: Twój hosting nie zawiera certyfikatu SSL

Włącz [certyfikat SSL](https://www.ovh.com/fr/ssl/) na Twoim hostingu, postępując zgodnie z instrukcjami zawartymi w tym [przewodniku](../les-certificats-ssl-sur-les-hebergements-web/).

#### Scenariusz 2: certyfikat SSL nie działa

Jeśli wygenerowałeś **certyfikat SSL "Let's Encrypt"**, włącz opcję SSL w opcji MultiSite` Twojego hostingu, postępując zgodnie z instrukcjami zawartymi w tym `{.action}przewodniku[ ](../les-certificats-ssl-sur-les-hebergements-web/#activer-un-certificat-ssl-sur-un-multisite).

Jeśli posiadasz importowany** ** certyfikat SSL i nie działa on prawidłowo, skontaktuj się z jego dostawcą.

Jeśli zamówiłeś jeden z płatnych **certyfikatów SSL** naszego partnera, >w razie potrzeby skontaktuj się z [pomocą SECTIGO](https://sectigo.com/support){.external}.

> [!primary]
>
> Aby odnaleźć wszystkie e-maile wysłane przez nasze usługi, kliknij w prawym górnym rogu [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), a następnie w `E-maile`{.action}:
>
>![right-menu-email-button](images/right-menu-email-button.png){.thumbnail}
>

## Sprawdź <a name="aller-plus-loin"></a>

[Zarządzanie certyfikatem SSL na Twoim hostingu](../les-certificats-ssl-sur-les-hebergements-web/)

[Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL](../passer-site-internet-https-ssl/)

[Usunięcie błędu "Strona nie została zainstalowana"](../erreur-site-non-installe/)

[Jak zdiagnozować białą stronę?](../comment-diagnostiquer-page-blanche/)

[Co zrobić w przypadku błędu 500 Internal Server Error?](../erreur-500-internal-server-error/)

[Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](../erreurs-frequentes-modules-en-1-clic/)
 
Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/fr/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](https://www.ovhcloud.com/fr/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com>.