---
title: "Personalizacja serwerów DNS domeny (Glue Records)"
excerpt: "Dowiedz się, jak personalizować serwery DNS Twojej domeny OVHcloud"
updated: 2023-07-27
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

**serwery DNS** przechowują konfiguracje DNS domen: *strefy DNS*. 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>>

Te *strefy DNS* zawierają informacje techniczne: *rekordy DNS*. W przypadku klasycznego użycia *rekordy DNS* umożliwiają:

- wyświetlać Twoją stronę WWW za pomocą nazwy domeny za pomocą adresu IP Twojego serwera hostingowego (rekordy DNS typu *A* i *AAAA*).
- przekierowanie wiadomości e-mail otrzymywanych na Twój adres e-mail z Twoją domeną (rekordy DNS typu *MX*).
- konfigurować informacje związane z bezpieczeństwem / uwierzytelnianiem usług (hosting, serwer e-mail, itp.) powiązanych z Twoją domeną (rekordy DNS typu *SPF*, *DKIM*, *DMARC*, itp.).

Więcej informacji na ten temat znajdziesz w dokumentacji OVHcloud dotyczącej [serwerów DNS OVHcloud](/pages/web/domains/dns_server_general_information) oraz [edycji strefy DNS OVHcloud](/pages/web/domains/dns_zone_edit).

W zależności od Twoich potrzeb możesz spersonalizować nazwy serwerów DNS Twojej domeny OVHcloud za pomocą "**Glue Records**".

**Dowiedz się, jak personalizować serwery DNS Twojej domeny OVHcloud.**

## Wymagania początkowe

- Zarejestrowana domena OVHcloud
- Zalogowanie do[Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, część `Web Cloud`{.action}.

## W praktyce

> [!warning]
>
> **Personalizacja serwerów DNS domeny jest operacją wymagającą odpowiedniej wiedzy**: wykonywanie nieprawidłowej zmiany może wyłączyć dostęp do Twojej strony WWW i / lub spowodować niedostępność nowych wiadomości na Twoje konta e-mail. 
> W przypadku wątpliwości zalecamy zastosowanie się do opisanych poniżej etapów lub skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/fr/directory/).
>

### Etap 1: pobierz serwery DNS aktualnie używane przez Twoją domenę <a name="step1"></a>

Możesz pobrać serwery DNS aktualnie używane przez Twoją domenę za pomocą narzędzia DNS online [Zonemaster](https://zonemaster.fr/en/run-test){.external}.

W tym celu kliknij link [https://zonemaster.fr](https://zonemaster.fr/en/run-test){.external}, wprowadź nazwę domeny bez *www* (przykład: *domain.tld*) następnie zaznacz przycisk `Options`{.action} znajdujący się tuż pod formularzem wprowadzania domeny.

W dostępnych opcjach kliknij przycisk `Fetch NS from parent zone`{.action}.

Wyświetli się wynik:

![glue-zonemaster](images/glue-dns-zonemaster.png){.thumbnail}

Pobierz *serwery DNS* i zachowaj **wszystkie** swoje adresy IPv4 (w formie *X.X.X.X*, gdzie *X* jest zawarty między *0* i *255*) i IPv6 (inne adresy IP, które nie są przypisanymi adresami IPv4). Będziesz potrzebował więcej informacji na temat tego przewodnika.

W przedstawionym powyżej przykładzie domena **domain.tld** używa obecnie następujących **serwerów DNS**:

- **dnsX1.ovh.net** w połączeniu z IPv4 *111.222.333.443* i IPv6 *0000:00d0:1:0000::1*;
- **dnsX2.ovh.net** w połączeniu z IPv4 *111.222.333.444* i IPv6 *0000:00d0:1:0000::2*.

W razie potrzeby i aby uzyskać więcej informacji, zapoznaj się z naszym tutorialem dotyczącym narzędzia [Zonemaster](/pages/web/domains/dns_zonemaster)

### Etap 2: dodać rekordy "GLUE" <a name="step2"></a>

> [!success]
>
> Przed rozpoczęciem, należy pamiętać, że:
>
> - Możesz tworzyć spersonalizowane serwery DNS bezpośrednio dla domeny, która je wykorzysta. Na przykład możesz utworzyć spersonalizowane serwery DNS *dns1.domain.tld* i *dns2.domain.tld* dla domeny *domain.tld*.
>
> - Możesz również tworzyć spersonalizowane serwery DNS dla jednej domeny i używać ich z inną domeną. Na przykład możesz utworzyć spersonalizowane serwery DNS *dns1.domain1.tld* i *dns2.domain1.tld* dla domeny *domain2.tld*. W porównaniu z *domain2.tld* pobierz serwery DNS i powiązane z nimi adresy IP.
> Ponadto, OVHcloud musi zarejestrować *domain1.tld*, aby wdrożyć rekordy GLUE.
>

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web Cloud`{.action}. W lewej kolumnie kliknij `Domeny`{.action}, następnie wybierz nazwę domeny, której będziesz używał do personalizacji nazw serwerów DNS. 

Na nowej stronie kliknij zakładkę `GLUE`{.action}.

W tabeli wyświetlają się wówczas rekordy "GLUE" aktualnie skonfigurowane w OVHcloud dla Twojej domeny (jeśli są dostępne). Aby dodać nowy rekord "GLUE", kliknij przycisk `Dodaj`{.action}.

![glueregistry](images/glue-add.png){.thumbnail}

W oknie, które się otworzy na ekranie, wprowadź wymagane informacje:

|Informacje|Szczegóły|  
|—|—|
|Nazwa hosta|Dostosuj nazwę hosta, którego chcesz użyć jako spersonalizowanego serwera DNS.|
|IP docelowe|Wskaż adres lub adresy IP (IPv4 i / lub IPv6), do których należy przypisać nazwę hosta. Jest to adres lub adresy IP serwera DNS aktualnie używanego przez Twoją domenę. Jeśli istnieje kilka adresów IP, należy je oddzielić przecinkami*.|

![glueregistry](images/glue-add-glue.png){.thumbnail}

Na powyższym obrazie, korzystając z przykładu z [etap 1](#step1), GLUE, którą chcemy tu dodać (od nazwy domeny *domain.tld*) jest **dns1.domain.tld**. 

W przypadku tego "GLUE" jako adresy IP *docelowego serwera DNS* podaje się adresy IP *111.222.333.443* (IPv4) i *0000:00d0:1:0000::1* (IPv6). Te adresy IP odpowiadają jednemu z dwóch serwerów DNS aktualnie używanych dla *domain.tld* (**dnsX1.ovh.net**). 

Dodaje się to "GLUE", aby **dns1.domain.tld** mogło ostatecznie zastąpić nazwę serwera DNS **dnsX1.ovh.net**, która jest aktualnie używana przez domenę *domain.tld*.

Po uzupełnieniu informacji kliknij przycisk 'Dodaj{.action}, zapoznaj się z wyświetlanymi informacjami, następnie kliknij 'Zatwierdź{.action}. Powtórz tę operację tyle razy, ile będzie to konieczne, w zależności od liczby serwerów DNS używanych przez Twoją domenę.

W naszym przykładzie należy powtórzyć operację, aby utworzyć "GLUE" **dns2.domain.tld**. Następnie zastąpi on serwer DNS **dnsX2.ovh.net* obecnie powiązany z IPv4 *111.222.333.444* i IPv6 *0000:00d0:1:0000::2*

### Etap 3: tworzyć rekordy DNS typu A i AAAA odpowiadające spersonalizowanym DNS

Utwórz rekordy *A* i *AAAA* dla hostów, które zdefiniowałeś na poprzednim etapie. Zapisy *A* i *AAAA* muszą mieć docelowy adres IP odpowiadający nazwie uprzednio utworzonego hosta.

Operacja ta zostanie przeprowadzona w interfejsie dostawcy zarządzającego konfiguracją DNS Twojej domeny. W związku z tym dwie możliwości:

- **Twoja domena nie używa aktywnej strefy DNS w OVHcloud**: skontaktuj się z dostawcą zarządzającym usługą. Po zakończeniu operacji przejdź do kolejnego etapu.
- **Twoja domena używa aktywnej strefy DNS w OVHcloud**: zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij przycisk `Domeny`{.action}, a następnie wybierz nazwę domeny, której użyłeś do utworzenia GLUE podczas [etapu 2](#step2). Przejdź do zakładki `Strefa DNS`{.action} i kliknij `Dodaj rekord`{.action}. Wybierz wpis typu *A* lub *AAAA* w zależności od typu IP, który chcesz dodać. Postępuj zgodnie z kolejnymi instrukcjami, wprowadzając *subdomenę* i adres *IPv4* (A) lub *IPv6* (AAAA) i kontynuuj aż do zatwierdzenia dodania subdomeny. Jeśli potrzebujesz pomocy, skorzystaj z instrukcji zawartych w przewodniku OVHcloud [Edycja strefy DNS OVHcloud](/pages/web/domains/dns_zone_edit)".

![glueregistry](images/glue-dns-zone-add.png){.thumbnail}

> [!primary]
>
> W każdym przypadku, aby zmiana strefy DNS została uwzględniona w całej sieci DNS, potrzebny jest czas propagacji wynoszący 4-24 godzin. Zalecamy poczekać do tego czasu, zanim przejdziesz dalej.
>

Wpisy "GLUE", które chcielibyśmy dodać (z domeny *domain.tld*) są **dns1.domain.tld** i **dns2.domain.tld**. Celem jest zastąpienie obecnych serwerów DNS **dnsX1.ovh.net** i **dnsX2.ovh.net**.

W związku z tym do aktywnej strefy DNS domeny dodaje się następujące rekordy *domain.tld*:

 - Wpis DNS typu *A* dla *subdomeny* **dns1.domain.tld** na IP *111.222.333.443* (IPv4 serwera DNS **dnsX1.ovh.net**);
 - Rekord DNS typu *AAAA* dla *subdomeny* **dns1.domain.tld** do IP *0000:00d0:1:0000::1* (IPv6 serwera DNS **dnsX1.ovh.net**);
 - Wpis DNS typu *A* dla *subdomeny* **dns2.domain.tld** na IP *111.222.333.444* (IPv4 serwera DNS **dnsX2.ovh.net**);
 - Rekord DNS typu *AAAA* dla *subdomeny* **dns2.domain.tld** do IP .*0000:00d0:1:0000::2* (IPv6 serwera DNS **dnsX2.ovh.net**).

Czekamy na czas propagacji DNS.

### Etap 4: zmień serwery DNS Twojej domeny

Należy zmienić serwery DNS Twojej domeny zastępując stare serwery DNS niestandardowym serwerem DNS utworzonym wcześniej.

W tym celu zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web Cloud`{.action}. W kolumnie z lewej strony kliknij `Domeny`{.action} i wybierz *nazwę domeny, dla której chcesz spersonalizować serwery DNS*.
 
Przejdź do zakładki `Serwery DNS`{.action}, następnie kliknij polecenie `Zmień serwery DNS`{.action}. Zastąp Twoje aktualne serwery DNS serwerami, których chcesz użyć jako spersonalizowanego serwera DNS. 

Zakończ ostatni etap i, jeśli potrzebujesz więcej informacji, skorzystaj z instrukcji zawartych w naszej dokumentacji "[Zmiana serwerów DNS domeny OVHcloud](/pages/web/domains/dns_server_general_information)".

> [!primary]
> 
> Jeśli masz ustawiony serwery DNS na jednej domenie i korzystasz z innej domeny, która nie jest zarejestrowana w OVHcloud, skontaktuj się z dostawcą, który zarejestrował Twoją inną domenę, aby zmienić serwery DNS.
>

![glueregistry](images/glue-dns-servers-modify.png){.thumbnail}

> [!primary]
>
> Czas propagacji wynosi od 24 do 48 godzin, aby zmiana serwerów DNS została uwzględniona w całej sieci DNS. Zalecamy poczekać do tego czasu, zanim przejdziesz dalej.
>

W przykładzie personalizacji serwerów DNS domeny *domain.tld* serwer DNS **dnsX1.ovh.net** zastępuje się serwerem DNS **dns1.domain.tld** i serwerem DNS **dnsX2.ovh.net** na **dns2.domain.tld**, a następnie można odczekać propagacji DNS.

### Etap 5: zastąpienie rekordów NS w strefie DNS domeny

Aby personalizacja serwerów DNS była widoczna w sieci DNS (poprzez *Whois*, *dig ns* lub przez analizator konfiguracji DNS), należy zastąpić rekordy typu *NS* w strefie DNS aktywowanej dla Twojej domeny.

Operacja ta zostanie przeprowadzona w interfejsie dostawcy zarządzającego konfiguracją DNS Twojej domeny. Istnieją zatem dwie możliwości:

- **Twoja domena nie używa aktywnej strefy DNS w OVHcloud**: skontaktuj się z dostawcą, który zarządza dostawcą usług hostingowych, aby wprowadzić zmiany.
- **Twoja domena używa aktywnej strefy DNS w OVHcloud**: zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web Cloud`{.action}. W kolumnie z lewej strony kliknij `Domeny`{.action}, następnie wybierz nazwę domeny, dla której personalizowałeś serwery DNS. Przejdź do zakładki `Strefa DNS`{.action}, następnie kliknij polecenie `Modyfikacja w trybie tekstowym`{.action}. 

Pojawi się okno zawierające strefę DNS w trybie *tekstowym*:

![glueregistry](images/dns-text-format-edition.png){.thumbnail}

> [!warning]
>
> Przypominamy, że wykonywanie niewłaściwej zmiany w trybie *tekstowym* w strefie DNS może spowodować wyłączenie dostępu do Twojej strony WWW i / lub uniemożliwić otrzymywanie nowych wiadomości na Twoje konta e-mail. 
> W przypadku wątpliwości skorzystaj z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/fr/directory/).
>

W tym oknie zamień **tylko w rekordach typu *NS*** nazwy serwerów DNS na własne nazwy serwerów DNS **nie zapominając**, zwiększ o "1" pierwszą cyfrową wartość linii *SOA*. Po przeprowadzeniu modyfikacji kliknij przycisk `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

Zmiana nie będzie widoczna bezpośrednio w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Odczekaj około dwudziestu minut, po czym zaloguj się ponownie do Panelu klienta OVHcloud, aby sprawdzić, czy wprowadzone zmiany zostały prawidłowo wprowadzone.

> [!primary]
>
> Czas propagacji wynosi od 4 do 24 godzin, aby zmiany w strefie DNS były brane pod uwagę w całej sieci DNS.
>

Aby lepiej zrozumieć ten ostatni etap, skorzystaj z nazwy domeny *domain.tld* i jej strefy DNS w trybie "tekstowym" widocznym na powyższym obrazie.

W sprawozdaniu tym znajdują się następujące elementy: 

- pierwsza wartość numeryczna linii *SOA* jest następująca: *2023071700*;
- istnieją dwa rekordy typu *NS* dla domeny *domain.tld*;
- rekordy typu *NS* są nadal skierowane do obu serwerów DNS **dnsX1.ovh.net** i **dnsX2.ovh.net**.

Aby dokończyć personalizację serwerów DNS dla domeny *domain.tld*, należy:

- zwiększenie pierwszej wartości liczbowej linii *SOA* o "1": *202307170**1*** (należy zauważyć, że jeżeli pierwsza wartość liczbowa będzie następująca:*2023071704*, to zawsze będzie się zwiększać o "1" i wtedy uzyska się następujący wynik: *202307170**5*** );
- wymienić cel **dnsX1.ovh.net.** na **dns1.domain.tld.** tylko dla linii rozpoczynającej się od **IN NS**;
- wymienić cel **dnsX2.ovh.net.** na **dns2.domain.tld.** tylko dla linii rozpoczynającej się od **IN NS**.

Po wprowadzeniu zmian, wynik w naszym przykładzie będzie następujący:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

W przypadku naszej domeny *domain.tld*, serwery DNS, które będą się wyświetlały po uwzględnieniu modyfikacji i propagacji DNS, będą teraz **dns1.domain.tld.** i **dns2.domain.tld.**.

Jeśli potrzebujesz pomocy, skorzystaj z instrukcji zawartych w przewodniku OVHcloud [Edycja strefy DNS OVHcloud](/pages/web/domains/dns_zone_edit)".

> [!success]
>
> W przypadku personalizacji serwerów DNS bezpośrednio z domeną, która je używa, strefa DNS może nie wyświetlać nazwy domeny w celach rekordów typu *NS*, ale tylko *subdomena*.
>
> Na przykład, zamiast wyświetlać następujące rekordy:
> 
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> strefa DNS może wyświetlać następujące rekordy:
>
> - domain.tld IN NS dns1
> - domain.tld IN NS dns2
>
> Upewnij się, że otrzymasz ten sam wynik i ta konfiguracja będzie działać prawidłowo. Zjawisko to jest generowane przez fakt, że jest to ta sama nazwa domeny po obu stronach rekordu *NS*.
>

## prawdź również

[Informacje ogólne na temat serwerów DNS OVHcloud](/pages/web/domains/dns_server_general_information)

[Edycja strefy DNS OVHcloud](/pages/web/domains/dns_zone_edit)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.