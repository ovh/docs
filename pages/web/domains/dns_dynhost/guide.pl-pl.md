---
title: "Konfiguracja dynamicznego DNS (DynHost/DynDNS) dla Twojej domeny"
excerpt: "Dowiedz się, jak skonfigurować dynamiczny rekord DNS dla Twojej domeny OVHcloud"
updated: 2023-06-29
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Strefa **D**omain **N**ame **S**ystem (**DNS**) nazwy domeny stanowi jej plik konfiguracyjny. Zawiera on informacje techniczne nazywane *rekordy DNS*. Strefa DNS jest jak ośrodek sterowania. 

Możesz na przykład określić:

- Adres IP (rekordy DNS typu *A* i *AAAA*) Twojego hostingu, aby wyświetlić Twoją stronę WWW z Twoją domeną.
- Serwery e-mail (rekordy DNS typu *MX*), na które Twoja domena musi przekierować otrzymane e-maile. Możesz sprawdzić je na spersonalizowanym adresie e-mail z Twoją domeną.
- Informacje związane z bezpieczeństwem / uwierzytelnianiem przypisanych usług (hosting, serwer www, serwer e-mail, itp.) do Twojej domeny (rekordy DNS typu *SPF*, *DKIM*, *DMARC*, itp.).

W razie potrzeby sprawdź [naszą dokumentację dotyczącą rekordów DNS i edycji strefy DNS](/pages/web/domains/dns_zone_edit) w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=p).

Aktualizacja rekordu DNS w sposób "dynamiczny" może zapobiec przedłużającej się przerwie w dostępności Twoich usług, jeśli nie dysponujesz adresem IP zwanym "stałym" (który się nie zmienia).

Na przykład, **DynHost** może być używany, jeśli pacjent *samodzielnie hostuje* (w siedzibie firmy lub w domu, przechodząc przez *box** od **D**ostawca **D**ostęp do **I**nternet (**DDI**)), serwer gier wideo bez posiadania stałego adresu IP.

**Dowiedz się, jak ustawić dynamiczny rekord DNS (DynHost) dla Twojej domeny OVHcloud.**

## Wymagania początkowe

- Dostęp do interfejsu zarządzania domeną w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}
- Używanie przez domenę konfiguracji OVHcloud (serwerów DNS OVHcloud) 
- Rekord DynHost nie może już istnieć w strefie DNS OVHcloud Twojej domeny jako rekord „A”

> [!warning]
>
> - Jeśli Twoja domena nie używa serwerów DNS OVHcloud, skontaktuj się z dostawcą/dostawcą zarządzającym jej konfiguracją DNS, aby dowiedzieć się, jak przebiega procedura.
> 
> - Jeśli Twoja domena jest zarejestrowana w OVHcloud, możesz sprawdzić, czy używa ona konfiguracji OVH. W tym celu zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web cloud`{.action}. W lewej kolumnie kliknij zakładkę `Domeny`{.action} i wybierz odpowiednią nazwę domeny. Na stronie, która się wyświetla kliknij zakładkę `Serwery DNS`{.action}, aby wyświetlić serwery DNS używane przez Twoją domenę. 
>
> Informacje na temat tego, czy serwery DNS OVHcloud są obsługiwane czy nie, mają następującą formę: 
>
> - **dnsXX.ovh.net.** i **nsXX.ovh.net.** (gdzie "**X**" to cyfry, które należy zastąpić danymi, które dotyczą serwerów Twojej domeny), jeśli nie używasz opcji *DNS Anycast*
> - **dns200.anycast.me.** i **ns200.anycast.me**, jeśli korzystasz z opcji *DNS Anycast*
> 
> W razie potrzeby zapoznaj się z naszym przewodnikiem dotyczącym [serwerów DNS](/pages/web/domains/dns_server_general_information), aby uzyskać więcej informacji.
>

## W praktyce

### Etap 1: utworzenie identyfikatora DynHost <a name="step1"></a>

Pierwszy etap polega na utworzeniu identyfikatora DynHost. Dzięki temu będziesz mógł aktualizować dynamiczny rekord DNS, który chcesz utworzyć. Przed rozpoczęciem operacji zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij `Domeny`{.action}, następnie wybierz odpowiednią domenę. Teraz przejdź do zakładki `DynHost`{.action}.

![dynhost](images/use-dynhost-step1.png){.thumbnail}

Kliknij przycisk `Zarządzaj dostępami`{.action}, a następnie kliknij `Utwórz identyfikator`{.action}. W oknie, które się wyświetla, wprowadź wymagane informacje:

|Informacje|Opis|
|---|---|
|Sufiks identyfikatora|Określ sufiks dla identyfikatora DynHost, który aktualnie tworzysz.|
|Subdomena|Podaj subdomenę związaną z tworzeniem dynamicznego rekordu DNS.|
|Hasło|Określ hasło przypisane do identyfikatora DynHost, a następnie je zatwierdź.|

Po uzupełnieniu pól kliknij przycisk `Zatwierdź`{.action}. Identyfikator pojawi się wówczas w tabeli figurującej na aktualnej stronie. Jeśli potrzebujesz dodatkowych loginów DynHost, powtórz ten etap tyle razy, ile to konieczne.

![dynhost](images/use-dynhost-step2.png){.thumbnail}

### Etap 2: tworzenie dynamicznego rekordu DNS (DynHost)

Drugi etap polega na utworzeniu rekordu DNS, który będzie aktualizowany dynamicznie. Rekord DynHost nie może już istnieć w strefie DNS OVHcloud Twojej domeny jako rekord „A”. Aby zweryfikować rekord, i w razie potrzeby go usunąć, zapoznaj się z informacjami zawartymi w przewodniku [Modyfikacja DNS OVHcloud](/pages/web/domains/dns_zone_edit){.external}.

Gdy jesteś gotowy, aby utworzyć rekord DynHost, przejdź ponownie na stronę główną w zakładce `DynHost`{.action}, a następnie kliknij przycisk `Dodaj wpis DynHost`{.action}. W oknie, które się wyświetla, wprowadź wymagane informacje:

|Informacje|Opis|
|---|---|
|Subdomena|Wpisz subdomenę, której rekord DNS ma być aktualizowany dynamicznie. Subdomena ta ma odpowiadać subdomenie wskazanej podczas tworzenia identyfikatora DynHost.|
|Docelowy adres IP |Podaj adres IP, który ma być aktualnie używany przez rekord DNS. Zgodnie z zasadą DynHost adres IP zostanie następnie zaktualizowany.|

Po uzupełnieniu pól kliknij przycisk `Zatwierdź`{.action}. Rekord DynHost pojawi się wówczas w tabeli figurującej na aktualnej stronie. Jeśli potrzebujesz dodatkowych identyfikatorów DynHost, powtórz ten etap tyle razy, ile to konieczne.

![dynhost](images/use-dynhost-step3.png){.thumbnail}

### Etap 3: automatyzacja zmiany DynHost

Po utworzeniu identyfikatora i rekordu ostatni etap polega na zautomatyzowaniu aktualizacji rekordu DNS, aby następowała ona dynamicznie. W tym celu konieczne jest użycie klienta, który będzie regularnie sprawdzał, czy docelowy adres IP zmienił się, i który będzie go aktualizował.

> [!warning]
>
> Instalację i konfigurację klienta przeprowadź we własnym zakresie zgodnie z Twoją wiedzą. Poniżej zamieszczamy kilka informacji dotyczących sposobu postępowania. Jednak w przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. 
>

Pamiętaj, że klient może być zainstalowany na Twoim serwerze lub komputerze albo może być już dostępny w interfejsie Twojego routera, jeśli router jest kompatybilny. Po wybraniu i zainstalowaniu klienta skonfiguruj go, używając informacji o utworzonym na wcześniejszym etapie użytkowniku DynHost.

W zależności od używanego klienta, poza informacjami o identyfikatorze DynHost i o danej subdomenie, może być również wymagany adres URL aktualizacji. W takim przypadku użyj podanego poniżej adresu URL i zastąp w nim informacje ogólne:

https://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**

|Informacje|Czym należy zastąpić|
|---|---|
|$HOSTNAME|Subdomena, której dotyczy modyfikacja.|
|$IP|Nowy docelowy adres IP.|

Możesz sprawdzić, czy docelowy adres IP został zaktualizowany w Panelu klienta, w zakładce `DynHost`{.action}. Sprawdź adres IP, który wyświetla się w kolumnie `Docelowy adres IP`{.action}.

![dynhost](images/use-dynhost-step4.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.