---
title: "Konfiguracja dynamicznego DNS (DynHost/DynDNS) dla Twojej domeny"
excerpt: "Dowiedz się, jak skonfigurować dynamiczny rekord DNS dla Twojej domeny OVHcloud"
updated: 2024-06-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Strefa **D**omain **N**ame **S**ystem (**DNS**) nazwy domeny stanowi jej plik konfiguracyjny. Zawiera on informacje techniczne nazywane *rekordy DNS*. Strefa DNS jest jak ośrodek sterowania. 

Możesz na przykład określić:

- Adres IP (rekordy DNS typu *A* i *AAAA*) Twojego hostingu, aby wyświetlić Twoją stronę WWW z Twoją domeną.
- Serwery e-mail (rekordy DNS typu *MX*), na które Twoja domena musi przekierować otrzymane e-maile. Możesz sprawdzić je na spersonalizowanym adresie e-mail z Twoją domeną.
- Informacje związane z bezpieczeństwem / uwierzytelnianiem przypisanych usług (hosting, serwer www, serwer e-mail, itp.) do Twojej domeny (rekordy DNS typu *SPF*, *DKIM*, *DMARC*, itp.).

W razie potrzeby sprawdź dokumentację dotyczącą [rekordów DNS](/pages/web_cloud/domains/dns_zone_records) i [edycji strefy DNS](/pages/web_cloud/domains/dns_zone_edit) w [Panelu klienta OVHcloud](/links/manager).

Aktualizacja rekordu DNS w sposób "dynamiczny" może zapobiec przedłużającej się przerwie w dostępności Twoich usług, jeśli nie dysponujesz adresem IP zwanym "stałym" (który się nie zmienia).

Na przykład, **DynHost** może być używany, jeśli pacjent *samodzielnie hostuje* (w siedzibie firmy lub w domu, przechodząc przez **box** od **D**ostawca **D**ostęp do **I**nternet (**DDI**)), serwer gier wideo bez posiadania stałego adresu IP.

> [!primary]
>
> Każdy rekord "A" lub "AAAA" z TTL (**T**ime **T**o **L**ive) trwającym 60 sekund jest traktowany jako DynHost. TTL jest wartością wskazującą, jak długo rekord DNS jest buforowany przez serwery DNS przed jego aktualizacją.
>

**Dowiedz się, jak ustawić dynamiczny rekord DNS (DynHost) dla Twojej domeny OVHcloud.**

## Wymagania początkowe

- Dostęp do interfejsu zarządzania domeną w [Panelu klienta](/links/manager){.external}
- Używanie przez domenę konfiguracji OVHcloud (serwerów DNS OVHcloud) 
- Rekord DynHost nie może już istnieć w strefie DNS OVHcloud Twojej domeny jako rekord lub "A" lub "AAAA"

> [!warning]
>
> - Jeśli Twoja domena nie używa serwerów DNS OVHcloud, skontaktuj się z dostawcą/dostawcą zarządzającym jej konfiguracją DNS, aby dowiedzieć się, jak przebiega procedura.
> 
> - Jeśli Twoja domena jest zarejestrowana w OVHcloud, możesz sprawdzić, czy używa ona konfiguracji OVH. W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external} i przejdź do sekcji `Web cloud`{.action}. W lewej kolumnie kliknij zakładkę `Domeny`{.action} i wybierz odpowiednią nazwę domeny. Na stronie, która się wyświetla kliknij zakładkę `Serwery DNS`{.action}, aby wyświetlić serwery DNS używane przez Twoją domenę. 
>
> Informacje na temat tego, czy serwery DNS OVHcloud są obsługiwane czy nie, mają następującą formę: 
>
> - **dnsXX.ovh.net.** i **nsXX.ovh.net.** (gdzie "**X**" to cyfry, które należy zastąpić danymi, które dotyczą serwerów Twojej domeny), jeśli nie używasz opcji *DNS Anycast*
> - **dns200.anycast.me.** i **ns200.anycast.me**, jeśli korzystasz z opcji *DNS Anycast*
> 
> W razie potrzeby zapoznaj się z naszym przewodnikiem dotyczącym [serwerów DNS](/pages/web_cloud/domains/dns_server_general_information), aby uzyskać więcej informacji.
>

## W praktyce

### Etap 1: utworzenie identyfikatora DynHost <a name="step1"></a>

Aby utworzyć użytkownika DynHost, zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external} i przejdź do sekcji `Web cloud`{.action}. W lewej kolumnie kliknij zakładkę `Domeny`{.action} i wybierz odpowiednią nazwę domeny. Na stronie, która się wyświetla kliknij zakładkę `DynHost`{.action}.

![dynhost](images/tab.png){.thumbnail}

Kliknij przycisk `Zarządzaj dostępami`{.action}, a następnie kliknij `Utwórz identyfikator`{.action}. W oknie, które się wyświetla, wprowadź wymagane informacje:

|Informacje|Opis|
|---|---|
|Sufiks identyfikatora|Określ sufiks dla identyfikatora DynHost, który aktualnie tworzysz.|
|Subdomena|Podaj subdomenę, której dotyczy tworzenie dynamicznego rekordu DNS. Jeśli chcesz zarządzać wszystkimi subdomenami z jednym identyfikatorem, wpisz po prostu `*` w formularzu wprowadzania|
|Hasło|Określ hasło przypisane do identyfikatora DynHost, a następnie je zatwierdź.|

> [!success]
>
> Aby skonfigurować wpis DynHost bezpośrednio dla Twojej domeny, wpisz tylko `*` w formularzu wprowadzania zatytułowanym `Subdomena`{.action}.
>

Po uzupełnieniu pól kliknij przycisk `Zatwierdź`{.action}. Identyfikator pojawi się wówczas w tabeli figurującej na aktualnej stronie. Jeśli potrzebujesz dodatkowych loginów DynHost, powtórz ten etap tyle razy, ile to konieczne.

![dynhost](images/create-a-dynhost-username.png){.thumbnail}

### Etap 2: tworzenie dynamicznego rekordu DNS (DynHost) <a name="step2"></a>

Drugi etap polega na utworzeniu rekordu DNS, który będzie aktualizowany dynamicznie. Rekord DynHost nie może już istnieć w strefie DNS OVHcloud Twojej domeny jako rekord "A" lub "AAAA". Aby zweryfikować rekord, i w razie potrzeby go usunąć, zapoznaj się z informacjami zawartymi w przewodniku [Modyfikacja DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit){.external}.

Gdy jesteś gotowy, aby utworzyć rekord DynHost, przejdź ponownie na stronę główną w zakładce `DynHost`{.action}, a następnie kliknij przycisk `Dodaj wpis DynHost`{.action}. W oknie, które się wyświetla, wprowadź wymagane informacje:

|Informacje|Opis|
|---|---|
|Subdomena|Wpisz subdomenę, której rekord DNS ma być aktualizowany dynamicznie. Subdomena ta ma odpowiadać subdomenie wskazanej podczas tworzenia identyfikatora DynHost. **Jeśli chcesz skonfigurować wpis DynHost bezpośrednio dla Twojej domeny, zostaw ten formularz pusty**|
|Docelowy adres IP |Wpisz adres IP (tylko IPv4 lub IPv6), który ma być aktualnie używany przez rekord DNS. Zazwyczaj chodzi o publiczny adres IP Twojego *box* Internet lub Twojego serwera z własnym dostępem. Zgodnie z zasadą DynHost adres IP zostanie automatycznie aktualizowany w późniejszym czasie.|

![dynhost](images/create-a-dynhost.png){.thumbnail}

Po uzupełnieniu pól kliknij przycisk `Zatwierdź`{.action}. Rekord DynHost pojawi się wówczas w tabeli figurującej na aktualnej stronie. Jeśli potrzebujesz dodatkowych identyfikatorów DynHost, powtórz ten etap tyle razy, ile to konieczne.

### Etap 3: automatyzacja zmiany DynHost

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

Możesz sprawdzić, czy docelowy adres IP został zaktualizowany. W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external} i przejdź do sekcji `Web cloud`{.action}. W lewej kolumnie kliknij zakładkę `Domeny`{.action} i wybierz odpowiednią nazwę domeny. Na stronie, która się wyświetla kliknij zakładkę `DynHost`{.action}. Sprawdź adres IP, który wyświetla się w kolumnie `Docelowy adres IP`{.action}.

> [!warning]
>
> Każda zmiana w aktywnej strefie DNS domeny za pomocą DynDNS może opóźnić propagację aktualizacji o kilka minut.
>

![dynhost](images/target.png){.thumbnail}

## Sprawdź również <a name="go-further"></a>

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 