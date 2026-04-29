---
title: Usunięcie błędu "Strona nie została zainstalowana"
excerpt: Dowiedz się, jak usunąć błąd "Strona nie została zainstalowana"
updated: 2026-05-04
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

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

Strona "**Strona nie została zainstalowana**" wyświetla się z dwóch powodów:

- 1: [Twoja nazwa domeny lub subdomeny nie jest poprawnie zadeklarowana na żadnej ze stronie internetowej znajdujących się na Twoim hostingu](#check-my-websites).
- 2: [Twoja domena nie wskazuje na adres IP Twojego hostingu.](#check-dns-domain)

Poniższe kroki pozwolą Ci naprawić błąd `Strona nie została zainstalowana` w obu przypadkach.

### 1 - Sprawdź deklarację swojej domeny lub subdomeny na swojej stronie internetowej znajdującej się na Twoim hostingu <a name="check-my-websites"></a>

<!-- CP-STEPS-START:check-my-websites -->
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
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![Moje strony](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `>`{.action} po lewej stronie nazwy strony internetowej, aby wyświetlić powiązane nazwy domen i subdomen.
>>
>> ![Strona internetowa](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> |Scenariusze|Działania do wykonania|
>> |---|---|
>> |Nazwa domeny lub subdomeny powiązanej z Twoją stroną internetową **pojawi się** w tabeli.|Jeśli właśnie dodałeś swoją domenę lub subdomenę do strony internetowej znajdującej się na Twoim hostingu, poczekaj około **dwadzieścia minut**, a następnie odśwież pamięć podręczną przeglądarki internetowej. Jeśli nadal pojawia się komunikat "Strona nie jest zainstalowana", przejdź do [części 2](#check-dns-domain).|
>> |Nazwa domeny lub subdomeny powiązanej z Twoją strony internetowej **nie występuje** w tabeli.|Dodaj swoją domenę lub subdomenę, korzystając z naszego poradnika "[Jak przypisać domenę do istniejącej strony internetowej?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".|
>> |Nazwa domeny lub subdomeny **została usunięta** z tabeli bez Twojej interwencji.|Twoja domena lub strefa DNS może być zarządzana z innego konta. Dodaj swoją domenę lub subdomenę, korzystając z naszego poradnika "[Jak przypisać domenę do istniejącej strony internetowej? - Dodanie zewnętrznej domeny](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".|
<!-- CP-STEPS-END:check-my-websites -->

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

<!-- CP-STEPS-START:check-dns-ip -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> W ramce **Informacje ogólne** znajduje się wzmianka **IPv4**.
>>
>>![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Skopiuj adres IPv4 i kontynuuj lekturę przewodnika.
<!-- CP-STEPS-END:check-dns-ip -->

Adres IP powiązany z Twoim hostingiem znajdziesz również w naszym przewodniku "[Hosting WWW - Lista adresów IP według klastra](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".

#### 2\.2 Sprawdź adres IP w aktywnej strefie DNS Twojej domeny

Sprawdź, czy adres IP Twojego hostingu wyświetla się w aktywnej strefie DNS Twojej domeny.

> [!primary]
>
> Zanim przejdziesz dalej, jeśli wystąpi zmiana w **strefie DNS** aktywnej nazwy domeny, może upłynąć czas propagacji **4 do 24 godzin**, aby zaktualizować informacje o sieci DNS.
>
> Jeśli zmodyfikujesz bezpośrednio **serwery DNS** powiązane z Twoją domeną, może to potrwać do **48 godzin** maksymalnie.

<!-- CP-STEPS-START:check-multisite-root-folder -->
W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Tabela, która się wyświetla pokazuje dla każdego wiersza rekord DNS powiązany z Twoją domeną w OVHcloud. Możesz sortować zawartość tabeli według typu rekordu lub nazwy domeny.
>>
>> ![DNS zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Jeśli zakładka `Strefa DNS`{.action} Twojej domeny wyświetla się w następujący sposób:<br><br>![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail<br>
>> >
>> > Oznacza to, że Twoja domena nie jest zarządzana z Twojego Panelu klienta OVHcloud.<br> Określ jej "biuro rejestracji" oraz serwery DNS, do których jest przypisana, korzystając z naszego narzędzia [WHOIS](/links/web/domains-whois).<br> Znajdź i zmień odpowiednią strefę DNS, korzystając z odpowiedniej sekcji poradnika "[Jak przypisać domenę do istniejącej strony internetowej? - Dodanie zewnętrznej domeny](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
>>
>> Przejdź do etapu 4, aby wyświetlić różne możliwe scenariusze i działania, które należy podjąć.
>>
> **Krok 3**
>>
>> |Możliwe scenariusze|Operacja do wykonania|
>> |---|---|
>> |W aktywnej strefie DNS Twoja domena lub subdomena wskazuje na adres IP hostingu WWW za pomocą rekordu A (dla adresu IPv4) lub AAAA (dla adresu IPv6).<br><br>![strefa DNS_IP2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|Oznacza to, że konfiguracja Twojej domeny jest prawidłowa.<br>Poczekaj na propagację DNS, jeśli zmiana jest nowsza.<br><br>Uruchom ponownie urządzenia (PC, smartphone, box, etc.) i wyczyść pamięć cache przeglądarki internetowej. Możliwe, że poprzednia konfiguracja Twojej domeny nadal znajduje się w pamięci cache, co może opóźnić wyświetlenie aktualizacji.|
>> |Bieżąca strefa DNS nie zawiera rekordów typu A lub AAAA łączących domenę lub subdomenę z adresem IP hostingu.|Dodaj nowy rekord DNS typu A lub AAAA lub popraw istniejący rekord, postępując zgodnie z [tym przewodnikiem](/pages/web_cloud/domains/dns_zone_edit).|
>> |Istniejący rekord DNS typu A lub AAAA w strefie DNS dla Twojej domeny lub subdomeny wskazuje na inny adres IP niż adres IP Twojego hostingu.|Dodaj nowy rekord DNS typu A lub AAAA lub popraw istniejący rekord, postępując zgodnie z [tym przewodnikiem](/pages/web_cloud/domains/dns_zone_edit).|
>> |To ostrzeżenie pojawia się w zakładce `Strefa DNS`{.action} :<br><br>![message-other-ovh-dns-servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Zmień odpowiednio serwery DNS Twojej domeny zgodnie z naszym przewodnikiem "[Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".|
<!-- CP-STEPS-END:check-multisite-root-folder -->

## Sprawdź również <a name="go-further"></a>

[Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Jak przypisać domenę do istniejącej strony internetowej?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)

[Modyfikacja serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Utwórz strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
