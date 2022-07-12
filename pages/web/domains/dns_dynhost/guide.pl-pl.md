---
title: 'Konfiguracja dynamicznego DNS dla domeny'
excerpt: 'Dowiedz się, jak skonfigurować dynamiczny rekord DNS (DynHost) dla Twojej domeny'
slug: hosting_www_dynhost
section: 'DNS i strefa DNS'
order: 6
legacy_guide_number: g2024
---

**Ostatnia aktualizacja dnia 2018-08-07**

## Wprowadzenie

Strefa Domain Name System (DNS) to plik konfiguracyjny domeny. Zawiera on informacje techniczne nazywane rekordami. Konfiguracja dynamicznego rekordu DNS, np. w przypadku gdy hostujesz własny serwer i nie korzystasz ze stałego adresu IP, może okazać się niezbędna, gdyż pozwoli Ci uniknąć dłuższej przerwy w dostępności Twoich usług. 

**Dowiedz się, jak skonfigurować dynamiczny rekord DNS (DynHost) dla Twojej domeny.**

## Wymagania początkowe

- Dostęp do interfejsu zarządzania domeną w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}
- Używanie przez domenę konfiguracji OVHcloud (serwerów DNS OVHcloud) 
- Rekord DynHost nie może już istnieć w strefie DNS OVHcloud Twojej domeny jako rekord „A”

> [!warning]
>
> - Jeśli Twoja domena nie używa serwerów DNS OVHcloud, zwróć się do administratora zarządzającego jej konfiguracją, aby dowiedzieć się, jakie kroki powinieneś podjąć.
> 
> - Jeśli domena jest zarejestrowana w OVHcloud, możesz sprawdzić, czy używa konfiguracji OVHcloud. Po wybraniu domeny w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przejdź do zakładki `Serwery DNS`{.action}.
>

## W praktyce

### Etap 1: utworzenie identyfikatora DynHost

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

Drugi etap polega na utworzeniu rekordu DNS, który będzie aktualizowany dynamicznie. Rekord DynHost nie może już istnieć w strefie DNS OVHcloud Twojej domeny jako rekord „A”. Aby zweryfikować rekord, i w razie potrzeby go usunąć, zapoznaj się z informacjami zawartymi w przewodniku [Modyfikacja DNS OVHcloud](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}.

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