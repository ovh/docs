---
title: Usunięcie błędu "Strona nie została zainstalowana"
excerpt: Dowiedz się, jak usunąć błąd "Strona nie została zainstalowana"
updated: 2025-08-25
---

## Wprowadzenie 

W przeglądarce internetowej może pojawić się komunikat o błędzie "**Niezainstalowana strona**", zwłaszcza przy pierwszej instalacji Twojej strony WWW.

![website not installed](/pages/assets/screens/other/browsers/errors/site-not-installed.png){.thumbnail}

**Dowiedz się, jak zidentyfikować i usunąć stronę błędu "Strona nie została zainstalowana"**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) lub skontaktowanie się z wydawcą usługi. Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "[Sprawdź również](#go-further)" tego przewodnika.

## Wymagania początkowe

- Posiadanie [hostingu](/links/web/hosting)
- Zarządzanie [strefą DNS](/pages/web_cloud/domains/dns_zone_edit), do której przypisana jest Twoja domena.
- Dostęp do [panelu klienta OVHcloud](/links/manager)

## W praktyce

Strona "**Strona nie została zainstalowana**" wyświetla się z dwóch powodów:

- 1: [Twoja domena lub subdomena nie jest poprawnie zadeklarowana na Twoim hostingu](#check-multisites).
- 2: [Twoja domena nie wskazuje na adres IP Twojego hostingu.](#check-dns-domain)

Poniższe kroki pozwolą Ci naprawić błąd `Strona nie została zainstalowana` w obu przypadkach.

### 1 - Sprawdź deklarację Twojej domeny lub subdomeny na hostingu <a name="check-multisites"></a>

Kliknij poniższe zakładki, aby wyświetlić kolejne **4** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `MultiSite`{.action}.
>>
>> ![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/multisite.png){.thumbnail}
>>
> **Etap 4**
>>
>> Na nowej stronie, która się wyświetli, pojawi się tabela.
>>
>> ![Multisite interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/tab.png){.thumbnail}
>>
>> |Scenariusze|Działania do podjęcia|
>> |---|---| 
>> |Domena lub subdomena powiązana z Twoją stroną WWW **wyświetla się** w tabeli "MultiSite".|Jeśli właśnie dodałeś domenę lub subdomenę w części `MultiSite`{.action} Twojego hostingu, odczekaj około **dwadzieścia minut**, a następnie odśwież cache przeglądarki internetowej. Jeśli nadal pojawia się komunikat "Strona nie została zainstalowana", przejdź do [część 2](#check-dns-domain).|
>> |Domena lub subdomena powiązana z Twoją stroną WWW **nie wyświetla się** w tabeli "MultiSite".|Dodaj domenę lub subdomenę do sekcji `MultiSite`{.action}, postępując zgodnie z dedykowaną rubryką przewodnika "[Instalacja kilku stron WWW na jednym hostingu - dodaj domenę lub subdomenę](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|
>> |Domena lub subdomena **została usunięta** z tabeli "MultiSite" bez konieczności podejmowania działań przez użytkownika.|Domena lub jej strefa DNS mogą być zarządzane z innego konta. Dodaj domenę lub subdomenę w sekcji `MultiSite`{.action} zgodnie z dedykowaną rubryką przewodnika "[Instalacja kilku stron WWW na jednym hostingu - dodaj domenę zewnętrzną](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|

### 2 - Sprawdź wskazanie adresu IP w aktywnej strefie DNS Twojej domeny <a name="check-dns-domain"></a>

Etap ten polega na upewnieniu się, że Twoja domena lub subdomena wskazuje z aktywnej strefy DNS na adres IP Twojego hostingu.

> [!primary]
>
> Więcej informacji na temat DNS znajdziesz na następujących stronach:
>
> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit);
> - [Tworzenie strefy DNS OVHcloud dla domeny](/pages/web_cloud/domains/dns_zone_create);
> - [Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit).

#### 2\.1 Identyfikacja adresu IP hostingu OVHcloud

Kliknij poniższe zakładki, aby wyświetlić kolejne kroki **3**.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> W ramce **Informacje ogólne** znajduje się wzmianka **IPv4**.
>>
>>![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Skopiuj adres IPv4 i kontynuuj lekturę przewodnika.

Adres IP powiązany z Twoim hostingiem znajdziesz również w naszym przewodniku "[Hosting WWW - Lista adresów IP według klastra](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".

#### 2\.2 Sprawdź adres IP w aktywnej strefie DNS Twojej domeny

Sprawdź, czy adres IP Twojego hostingu wyświetla się w aktywnej strefie DNS Twojej domeny.

> [!primary]
>
> Zanim przejdziesz dalej, jeśli wystąpi zmiana w **strefie DNS** aktywnej nazwy domeny, może upłynąć czas propagacji **4 do 24 godzin**, aby zaktualizować informacje o sieci DNS.
>
> Jeśli zmodyfikujesz bezpośrednio **serwery DNS** powiązane z Twoją domeną, może to potrwać do **48 godzin** maksymalnie.

W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Jeśli Twoja nazwa domeny nie wyświetla się na liście, oznacza to, że Twoja strefa DNS nie jest zarządzana z poziomu Panelu klienta OVHcloud.<br>
>> > Sprawdź "operatora" oraz serwery DNS, z którymi jest on powiązany, przy użyciu narzędzia [WHOIS](/links/web/domains-whois).<br>
>> > Znajdź i zmodyfikuj strefę DNS zgodnie z instrukcjami w sekcji przewodnika "[Instalacja kilku stron WWW na jednym hostingu - dodaj domenę zewnętrzną](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>>
> **Etap 3**
>>
>> Tabela, która się wyświetla pokazuje dla każdego wiersza rekord DNS powiązany z Twoją domeną w OVHcloud. Możesz sortować zawartość tabeli według typu rekordu lub nazwy domeny.
>>
>> ![DNS zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Jeśli zakładka `Strefa DNS`{.action} Twojej domeny wyświetla się w następujący sposób:<br><br>![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail<br>
>> >
>> > Oznacza to, że Twoja domena nie jest zarządzana z poziomu Panelu klienta OVHcloud.<br> Ustal "operatora" domeny oraz serwery DNS, z którymi jest ona powiązana za pomocą narzędzia [WHOIS](/links/web/domains-whois).<br> Znajdź i zmodyfikuj odpowiednią strefę DNS, postępując zgodnie z instrukcjami w sekcji przewodniku "[Instalacja kilku stron WWW na jednym hostingu - dodaj domenę zewnętrzną](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>>
>> Przejdź do etapu 4, aby wyświetlić różne możliwe scenariusze i działania, które należy podjąć.
>>
> **Etap 4**
>>
>> |Możliwe scenariusze|Operacja do wykonania|
>> |---|---|
>> |W aktywnej strefie DNS Twoja domena lub subdomena wskazuje na adres IP hostingu WWW za pomocą rekordu A (dla adresu IPv4) lub AAAA (dla adresu IPv6).<br><br>![strefa DNS_IP2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|Oznacza to, że konfiguracja Twojej domeny jest prawidłowa.<br>Poczekaj na propagację DNS, jeśli zmiana jest nowsza.<br><br>Uruchom ponownie urządzenia (PC, smartphone, box, etc.) i wyczyść pamięć cache przeglądarki internetowej. Możliwe, że poprzednia konfiguracja Twojej domeny nadal znajduje się w pamięci cache, co może opóźnić wyświetlenie aktualizacji.|
>> |Bieżąca strefa DNS nie zawiera rekordów typu A lub AAAA łączących domenę lub subdomenę z adresem IP hostingu.|Dodaj nowy rekord DNS typu A lub AAAA lub popraw istniejący rekord, postępując zgodnie z [tym przewodnikiem](/pages/web_cloud/domains/dns_zone_edit).|
>> |Istniejący rekord DNS typu A lub AAAA w strefie DNS dla Twojej domeny lub subdomeny wskazuje na inny adres IP niż adres IP Twojego hostingu.|Dodaj nowy rekord DNS typu A lub AAAA lub popraw istniejący rekord, postępując zgodnie z [tym przewodnikiem](/pages/web_cloud/domains/dns_zone_edit).|
>> |To ostrzeżenie pojawia się w zakładce `Strefa DNS`{.action} :<br><br>![message-other-ovh-dns-servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Zmień odpowiednio serwery DNS Twojej domeny zgodnie z naszym przewodnikiem "[Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".|

## Sprawdź również <a name="go-further"></a>

[Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Instalacja kilku stron WWW na hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Modyfikacja serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Utwórz strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).