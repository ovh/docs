---
title: "Konfiguracja dynamicznego DNS (DynHost/DynDNS) dla Twojej domeny"
excerpt: "Dowiedz się, jak skonfigurować dynamiczny rekord DNS dla Twojej domeny OVHcloud"
updated: 2025-04-28
---

## Wprowadzenie

Strefa **D**omain **N**ame **S**ystem (**DNS**) nazwy domeny stanowi jej plik konfiguracyjny. Zawiera on informacje techniczne nazywane *rekordy DNS*. Strefa DNS jest jak ośrodek sterowania. 

Aby uzyskać więcej informacji, zapoznaj się z naszymi przewodnikami:

- [Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

Aktualizacja rekordu DNS w sposób "dynamiczny" może zapobiec przedłużającej się przerwie w dostępności Twoich usług, jeśli nie dysponujesz adresem IP zwanym "stałym" (który się nie zmienia).

Na przykład **DynHost** może być używany do samodzielnego hostowania serwera gier (znajdującego się w siedzibie firmy lub w domu) bez statycznego adresu IP, co oznacza, że dostawca usług internetowych (**ISP**) regularnie przydziela nowy adres IP.

> [!primary]
>
> Każdy rekord "A" lub "AAAA" z TTL (**T**ime **T**o **L**ive) trwającym 60 sekund jest traktowany jako DynHost. TTL jest wartością wskazującą, jak długo rekord DNS jest buforowany przez serwery DNS przed jego aktualizacją.
>

**Dowiedz się, jak ustawić dynamiczny rekord DNS (DynHost) dla Twojej domeny OVHcloud.**

## Wymagania początkowe

- Zarejestrowana domena.
- Posiadanie strefy DNS OVHcloud dla danej domeny.
- Używanie przez domenę konfiguracji OVHcloud (serwerów DNS OVHcloud) 
- Rekord DynHost nie może już istnieć w strefie DNS OVHcloud Twojej domeny jako rekord lub "A" lub "AAAA"

**Jeśli Twoja domena nie używa serwerów DNS dostarczanych przez OVHcloud**, skontaktuj się z dostawcą zarządzającym konfiguracją DNS domeny, aby poznać dalszą procedurę.

**Jeśli Twoja domena jest zarejestrowana w OVHcloud**, możesz sprawdzić, czy używa ona konfiguracji OVHcloud. W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

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
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers.png){.thumbnail}
>>
> **Etap 4**
>>
>> Tabela, która się wyświetla zawiera listę serwerów DNS zdefiniowanych aktualnie przez OVHcloud dla Twojej domeny. Może pojawić się kilka serwerów DNS, przy czym jeden serwer odpowiada jednej linii w tabeli.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

> [!success]
>
> Aby dowiedzieć się, czy używasz serwerów DNS OVHcloud, mogą one przyjąć jedną z dwóch poniższych form:
>
> - `nsXX.ovh.net` i `dnsXX.ovh.net` lub, `nsXXX.ovh.net` i `dnsXXX.ovh.net` (gdzie każdy `X` reprezentuje cyfrę między **0** a **9**)
> - `ns200.anycast.me` i `dns200.anycast.me` (jeśli wybrałeś opcję [DNS anycast](/links/web/domains-options))
> 
> W razie potrzeby zapoznaj się z naszym przewodnikiem dotyczącym [serwerów DNS](/pages/web_cloud/domains/dns_server_general_information), aby uzyskać więcej informacji.

## W praktyce

### 1 - Utworzenie identyfikatora DynHost <a name="step1"></a>

W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **6** etapy.

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
> **Etap 3**
>>
>> Wybierz zakładkę `DynHost`{.action} po wybraniu domeny.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Etap 4**
>>
>> Kliknij przycisk `Zarządzaj dostępami`{.action}, a następnie kliknij `Utwórz identyfikator`{.action}. 
>>
>> ![DynHost tab empty](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab-empty.png){.thumbnail}
>>
> **Etap 5**
>>
>> W oknie, które się wyświetla, wprowadź wymagane informacje:
>>
>> |Informacje|Opis|
>> |---|---|
>> |Sufiks identyfikatora|Określ sufiks dla identyfikatora DynHost, który aktualnie tworzysz.|
>> |Subdomena|Podaj subdomenę, której dotyczy tworzenie dynamicznego rekordu DNS. Jeśli chcesz zarządzać wszystkimi subdomenami z jednym identyfikatorem, wpisz po prostu `*` w formularzu wprowadzania|
>> |Hasło|Określ hasło przypisane do identyfikatora DynHost, a następnie je zatwierdź.|
>>
>> > [!success]
>> >
>> > Aby skonfigurować wpis DynHost bezpośrednio dla Twojej domeny, wpisz tylko `*` w formularzu wprowadzania zatytułowanym `Subdomena`{.action}.
>> >
>>
>> ![Create a DynHost username](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost-username.png){.thumbnail}
>>
> **Etap 6**
>>
>> Po uzupełnieniu pól kliknij przycisk `Zatwierdź`{.action}. Identyfikator pojawi się wówczas w tabeli figurującej na aktualnej stronie.
>>
>> ![DynHost tab](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab.png){.thumbnail}
>>

Jeśli potrzebujesz dodatkowych loginów DynHost, powtórz ten etap tyle razy, ile to konieczne.

### 2 - Utworzenie dynamicznego rekordu DNS (DynHost) <a name="step2"></a>

Drugi etap polega na utworzeniu rekordu DNS, który będzie aktualizowany dynamicznie. Rekord DynHost nie może już istnieć w strefie DNS OVHcloud Twojej domeny jako rekord "A" lub "AAAA". Aby zweryfikować rekord, i w razie potrzeby go usunąć, zapoznaj się z informacjami zawartymi w przewodniku [Modyfikacja DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Gdy jesteś gotowy, aby utworzyć rekord DynHost, w tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **5** etapy.

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
> **Etap 3**
>>
>> Wybierz zakładkę `DynHost`{.action} po wybraniu domeny.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Etap 4**
>>
>> Kliknij przycisk `Dodaj wpis DynHost`{.action}.
>>
>> ![DynHost tab empty](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab-empty.png){.thumbnail}
>>
> **Etap 5**
>>
>> W oknie, które się wyświetla, wprowadź wymagane informacje:
>>
>> |Informacje|Opis|
>> |---|---|
>> |Subdomena|Wpisz subdomenę, której rekord DNS ma być aktualizowany dynamicznie. Subdomena ta ma odpowiadać subdomenie wskazanej podczas tworzenia identyfikatora DynHost.<br><br>**Jeśli chcesz skonfigurować wpis DynHost bezpośrednio dla Twojej domeny, zostaw ten formularz pusty**|
>> |Docelowy adres IP |Wpisz adres IP (tylko IPv4 lub IPv6), który ma być aktualnie używany przez rekord DNS. Zazwyczaj chodzi o publiczny adres IP Twojego *box* Internet lub Twojego serwera z własnym dostępem.<br><br>Zgodnie z zasadą DynHost adres IP zostanie automatycznie aktualizowany w późniejszym czasie.<br><br>W tym formularzu należy podać tylko jeden adres IP.|
>>
>> > [!warning]
>> >
>> > Aby skonfigurować dynamiczny rekord DNS (DynHost), użycie *wildcard* (wstawiając tylko znak `*`) w formularzu `Subdomena`{.action} jest niedostępne.
>>
>> ![Create a DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost.png){.thumbnail}
>>
>> Po uzupełnieniu pól kliknij przycisk `Zatwierdź`{.action}. Rekord DynHost pojawi się wówczas w tabeli figurującej na aktualnej stronie.

Jeśli potrzebujesz dodatkowych identyfikatorów DynHost, powtórz ten etap tyle razy, ile to konieczne.

> [!primary]
>
> Jeśli domena lub subdomena ma być konfigurowana dynamicznie, na przykład za pomocą adresów IPv4 i IPv6, możesz utworzyć dwa dynamiczne rekordy DNS dla tej samej domeny lub subdomeny. Pierwszy dynamiczny rekord DNS zostanie utworzony dla IPv4, a drugi dla IPv6.
>

### 3 - Automatyzacja zmiany DynHost

Po utworzeniu [użytkownik](#step1) i [rekordu DynHost](#step2) należy zautomatyzować aktualizację rekordu DNS, aby była ona dynamicznie wykonywana. W tym celu użyj programu/klienta, który będzie regularnie sprawdzał, czy docelowy adres IP zmienił się i aktualizował go automatycznie.

> [!warning]
>
> Instalacja i konfiguracja oprogramowania/klienta muszą być wykonywane zgodnie z Twoją wiedzą. Poniżej zamieszczamy kilka informacji dotyczących sposobu postępowania. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner). Niestety firma OVHcloud nie będzie w stanie udzielić wsparcia w tym zakresie. 
> Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

Istnieje kilka możliwości dotyczących oprogramowania/klienta: 

- może być zainstalowany na serwerze lub na komputerze;
- może być już dostępny w interfejsie routera/*box*, jeśli router jest kompatybilny. Jeśli masz trudności w tym przypadku, skontaktuj się z obsługą klienta **DDI**, aby przeprowadzić konfigurację.

Po wybraniu i zainstalowaniu klienta skonfiguruj go, używając informacji o użytkowniku DynHost utworzonym wcześniej w Panelu klienta OVHcloud.

W zależności od używanego klienta, oprócz elementów użytkownika DynHost i odpowiedniej subdomeny może być wymagany adres URL aktualizacji. W takim przypadku użyj poniższego adresu URL i zastąp w nim informacje ogólne:

```bash
https://dns.eu.ovhapis.com/nic/update?system=dyndns&hostname=$HOSTNAME&myip=$IP
```

|Informacje|Czym należy zastąpić|
|---|---|
|$HOSTNAME|Subdomena, której dotyczy modyfikacja.|
|$IP|Nowy docelowy adres IPv4 lub IPv6.|

Możesz sprawdzić, czy docelowy adres IP został zaktualizowany. w tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **4** etapy.

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
> **Etap 3**
>>
>> Wybierz zakładkę `DynHost`{.action} po wybraniu domeny.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Etap 4**
>>
>> Sprawdź adres IP, który wyświetla się w kolumnie `Docelowy adres IP`{.action}.
>>
>> ![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/target.png){.thumbnail}
>>

> [!warning]
>
> Każda zmiana w aktywnej strefie DNS domeny za pomocą DynDNS może opóźnić propagację aktualizacji o kilka minut.
>

## Sprawdź również <a name="go-further"></a>

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).