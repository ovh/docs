---
title: "Personalizacja serwerów DNS nazwy domeny (Hosty)"
excerpt: "Dowiedz się, jak personalizować serwery DNS Twojej nazwy domeny OVHcloud"
updated: 2026-02-10
---

## Wprowadzenie

**serwery DNS** przechowują konfiguracje DNS nazw domen: *strefy DNS*.

Te *strefy DNS* zawierają informacje techniczne: *rekordy DNS*. W przypadku klasycznego użycia *rekordy DNS* umożliwiają:

- wyświetlać Twoją stronę WWW za pomocą nazwy domeny za pomocą adresu IP Twojego serwera hostingowego (rekordy DNS typu *A* i *AAAA*).
- przekierowanie wiadomości e-mail otrzymywanych na Twój adres e-mail z Twoją nazwą domeny (rekordy DNS typu *MX*).
- konfigurować informacje związane z bezpieczeństwem / uwierzytelnianiem usług (hosting, serwer e-mail, itp.) powiązanych z Twoją nazwą domeny (rekordy DNS typu *SPF*, *DKIM*, *DMARC*, itp.).

Aby uzyskać więcej informacji na ten temat, zapoznaj się z następującymi przewodnikami:

- [Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information).
- [Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).

W zależności od Twoich potrzeb możesz spersonalizować nazwy serwerów DNS Twojej nazwy domeny OVHcloud za pomocą "**Hosty**".

**Dowiedz się, jak personalizować serwery DNS Twojej nazwy domeny OVHcloud.**

## Wymagania początkowe

- Zarejestrowana [nazwa domeny](/links/web/domains) OVHcloud

<!-- CP-NAV-START:web-domains -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Domeny](/links/control-panel/web-domains)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Domeny`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-domains -->

## W praktyce

> [!warning]
>
> **Personalizacja serwerów DNS nazwy domeny jest operacją wymagającą odpowiedniej wiedzy**: wykonywanie nieprawidłowej zmiany może wyłączyć dostęp do Twojej strony WWW i / lub spowodować niedostępność nowych wiadomości na Twoje konta e-mail. 
> Prosimy o dokładne zapoznanie się z poniższymi sekcjami lub skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner) w razie wątpliwości.
>

### 1 – Zasada ogólna

Niektóre rejestry, takie jak **Verisign** (zarządzający rozszerzeniami *.com*, *.net* oraz innymi TLD), korzystają z modelu technicznego zwanego **host objects**.<br>
W niektórych przypadkach model ten wymaga wcześniejszego utworzenia specjalnego wpisu dla serwera DNS, zanim będzie on mógł zostać **użyty przez nazwę domeny**.<br>
Inne rejestry nie wymagają takiego wpisu i akceptują bezpośrednio nazwę serwera DNS.

Zasadniczo OVHcloud automatycznie tworzy **host objects**, gdy dotyczą one nazwy domeny zarządzanej przez OVHcloud.

> [!warning]
>
> **Zakładka "Hosts" jest wymagana tylko w jednym konkretnym przypadku**: gdy serwer DNS należy do nazwy domeny zarządzanej przez OVHcloud i ma być użyty przez inną nazwę domeny, która nie jest zarządzana przez OVHcloud, ale podlega *temu samemu rejestrowi* (np. dwie nazwy domen w *.com*).

#### Możliwe przypadki

| Nazwa domeny serwera DNS | Konfigurowana nazwa domeny | Utworzenie hosta przez OVHcloud | Wymagana akcja ręczna w menu "Hosts" | Przykład |
| ------------------------ | -------------------------- | -------------------------------- | ----------------------------------- | -------- |
| Zarządzana przez OVHcloud | Zarządzana przez OVHcloud | Automatyczne | Nie | *ns1.example.com* (nazwa domeny *example.com* zarządzana przez OVHcloud) jest używana jako serwer DNS dla *test.com* (OVHcloud) |
| Zarządzana przez OVHcloud | Zarządzana przez OVHcloud | Automatyczne | Nie | *ns1.example.com* (nazwa domeny *example.com* zarządzana przez OVHcloud) jest używana jako serwer DNS dla *test.fr* (OVHcloud) |
| **Zarządzana przez OVHcloud** | **Inny rejestrator** | **Brak możliwości konfiguracji automatycznej** | **Tak** | ***ns1.example.com* (nazwa domeny *example.com* zarządzana przez OVHcloud) jest używana jako serwer DNS dla *test.com* (inny rejestrator, to samo rozszerzenie *.com*)** |
| Zarządzana przez OVHcloud | Inny rejestrator | N/D | Nie | *ns1.example.com* jest używana jako serwer DNS dla *test.fr* |
| Niezarządzana przez OVHcloud | Zarządzana przez OVHcloud | Poza zakresem | Nie | *ns1.example.net* (nazwa domeny u innego rejestratora) jest używana jako serwer DNS dla *test.com* (OVHcloud) – host musi zostać utworzony u rejestratora *example.net* |

**Trzeci wiersz tabeli jest jedynym przypadkiem wymagającym ręcznego utworzenia wpisu w zakładce Hosty.**

### 2 - Pobierz serwery DNS aktualnie używane przez Twoją nazwę domeny <a name="step2"></a>

Możesz pobrać serwery DNS aktualnie używane przez Twoją nazwę domeny za pomocą narzędzia DNS online [Zonemaster](https://zonemaster.net/en).

W tym celu kliknij link [https://zonemaster.net](https://zonemaster.net/en), wprowadź nazwę domeny bez *www* (przykład: *domain.tld*) następnie zaznacz przycisk `Options`{.action} znajdujący się tuż pod formularzem wprowadzania domeny.

W dostępnych opcjach kliknij przycisk `Fetch NS from parent zone`{.action}.

Wyświetli się wynik:

![glue-zonemaster](/pages/assets/screens/other/web-tools/zonemaster/nameservers.png){.thumbnail}

Pobierz *serwery DNS* i zachowaj **wszystkie** swoje adresy IPv4 (w formie *X.X.X.X*, gdzie *X* jest zawarty między *0* i *255*) i IPv6 (inne adresy IP, które nie są przypisanymi adresami IPv4). Będziesz potrzebował więcej informacji na temat tego przewodnika.

W przedstawionym powyżej przykładzie nazwa domeny **domain.tld** używa obecnie następujących **serwerów DNS**:

- **dnsX1.ovh.net** w połączeniu z IPv4 *203.0.113.0* i IPv6 *2001:db8:1:1b00:203:0:113:0*.
- **dnsX2.ovh.net** w połączeniu z IPv4 *203.0.113.1* i IPv6 *2001:db8:1:1b00:203:0:113:1*.

W razie potrzeby i aby uzyskać więcej informacji, zapoznaj się z naszym tutorialem dotyczącym narzędzia [Zonemaster](/pages/web_cloud/domains/dns_zonemaster).

### 3 - Dodać rekordy "Host" <a name="step3"></a>

> [!warning]
>
> Rejestry rozszerzeń *.eu*, *.it*, *.be* i *.de* nie traktują rekordów "Host" jako "obiektów", ale jako "atrybutów".
>
> Dlatego w przypadku tych rozszerzeń przejdź **bezpośrednio do [etapu 4](#step4)** niniejszego przewodnika bez wykonywania etapu 3.
>

> [!success]
>
> Przed rozpoczęciem, należy pamiętać, że:
>
> - Możesz tworzyć spersonalizowane serwery DNS bezpośrednio dla nazwy domeny, która je wykorzysta. Na przykład możesz utworzyć spersonalizowane serwery DNS *dns1.domain.tld* i *dns2.domain.tld* dla nazwy domeny *domain.tld*.
>
> - Możesz również tworzyć spersonalizowane serwery DNS dla jednej nazwy domeny i używać ich z inną nazwą domeny. Na przykład możesz utworzyć spersonalizowane serwery DNS *dns1.domain1.tld* i *dns2.domain1.tld* dla nazwy domeny *domain2.tld*. W porównaniu z *domain2.tld* pobierz serwery DNS i powiązane z nimi adresy IP.
> Ponadto, OVHcloud musi zarejestrować *domain1.tld*, aby wdrożyć rekordy Host.
>

W kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Kliknij [ten link](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na nowej stronie kliknij zakładkę `Hosty`{.action}.
>>
>> W tabeli wyświetlają się wówczas rekordy "Host" aktualnie skonfigurowane w OVHcloud dla Twojej nazwy domeny (jeśli są dostępne). Aby dodać nowy rekord "Host", kliknij przycisk `Dodaj`{.action}.
>>
>> ![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add.png){.thumbnail}
>>
> **Krok 3**
>>
>> W oknie, które się otworzy na ekranie, wprowadź wymagane informacje:
>>
>> |Informacje|Szczegóły|
>> |---|---|
>> |Nazwa hosta|Dostosuj nazwę hosta, którego chcesz użyć jako spersonalizowanego serwera DNS.|
>> |IP docelowe|Wskaż adres lub adresy IP (IPv4 i / lub IPv6), do których należy przypisać nazwę hosta. Jest to adres lub adresy IP serwera DNS aktualnie używanego przez Twoją nazwę domeny. Jeśli istnieje kilka adresów IP, należy je oddzielić przecinkami*.|
>>
>> ![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add-another-glue-record-step-2.png){.thumbnail}
>>
>> Na powyższym obrazie, korzystając z przykładu z [etap 2](#step2), Host, którą chcemy tu dodać (od nazwy domeny *domain.tld*) jest **dns1.domain.tld**. 
>>
>> W przypadku tego "Host" jako adresy IP *docelowego serwera DNS* podaje się adresy IP *203.0.113.0* (IPv4) i *2001:db8:1:1b00:203:0:113:0* (IPv6). Te adresy IP odpowiadają jednemu z dwóch serwerów DNS aktualnie używanych dla *domain.tld* (**dnsX1.ovh.net**). 
>>
>> Dodaje się to "Host", aby **dns1.domain.tld** mogło ostatecznie zastąpić nazwę serwera DNS **dnsX1.ovh.net**, która jest aktualnie używana przez nazwę domeny *domain.tld*.
>>
>> Po uzupełnieniu informacji kliknij przycisk 'Dodaj{.action}, zapoznaj się z wyświetlanymi informacjami, następnie kliknij 'Zatwierdź{.action}. Powtórz tę operację tyle razy, ile będzie to konieczne, w zależności od liczby serwerów DNS używanych przez Twoją nazwę domeny.
>>
>> W naszym przykładzie należy powtórzyć operację, aby utworzyć "Host" **dns2.domain.tld**. Następnie zastąpi on serwer DNS **dnsX2.ovh.net* obecnie powiązany z IPv4 *203.0.113.1* i IPv6 *2001:db8:1:1b00:203:0:113:1*

### 4 - Tworzyć rekordy DNS typu A i AAAA odpowiadające spersonalizowanym DNS <a name="step4"></a>

Utwórz rekordy *A* i *AAAA* dla hostów, które zdefiniowałeś na poprzednim etapie. Zapisy *A* i *AAAA* muszą mieć docelowy adres IP odpowiadający nazwie uprzednio utworzonego hosta.

Operacja ta zostanie przeprowadzona w interfejsie dostawcy zarządzającego konfiguracją DNS Twojej nazwy domeny. W związku z tym dwie możliwości:

- **Twoja nazwa domeny nie używa aktywnej strefy DNS w OVHcloud**: Skontaktuj się z dostawcą zarządzającym usługą. Po zakończeniu operacji przejdź do kolejnego etapu.
- **Twoja nazwa domeny używa aktywnej strefy DNS w OVHcloud**: Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij przycisk `Strefy DNS`{.action}, a następnie wybierz nazwę domeny, której użyłeś do utworzenia Hosty podczas [etapu 3](#step3). Przejdź do zakładki `Strefa DNS`{.action} i kliknij `Dodaj rekord`{.action}. Wybierz wpis typu *A* lub *AAAA* w zależności od typu IP, który chcesz dodać. Postępuj zgodnie z kolejnymi instrukcjami, wprowadzając *subdomenę* i adres *IPv4* (A) lub *IPv6* (AAAA) i kontynuuj aż do zatwierdzenia dodania subdomeny. Jeśli potrzebujesz pomocy, skorzystaj z instrukcji zawartych w przewodniku OVHcloud "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-2.png){.thumbnail}

> [!primary]
>
> W każdym przypadku, aby zmiana strefy DNS została uwzględniona w całej sieci DNS, potrzebny jest czas propagacji wynoszący 4-24 godzin. Zalecamy poczekać do tego czasu, zanim przejdziesz dalej.
>

Wpisy "Hosty", które chcielibyśmy dodać (z nazwy domeny *domain.tld*) są **dns1.domain.tld** i **dns2.domain.tld**. Celem jest zastąpienie obecnych serwerów DNS **dnsX1.ovh.net** i **dnsX2.ovh.net**.

W związku z tym do aktywnej strefy DNS nazwy domeny dodaje się następujące rekordy *domain.tld*:

 - Wpis DNS typu *A* dla *subdomeny* **dns1.domain.tld** na IP *203.0.113.0* (IPv4 serwera DNS **dnsX1.ovh.net**).
 - Rekord DNS typu *AAAA* dla *subdomeny* **dns1.domain.tld** do IP *2001:db8:1:1b00:203:0:113:0* (IPv6 serwera DNS **dnsX1.ovh.net**).
 - Wpis DNS typu *A* dla *subdomeny* **dns2.domain.tld** na IP *203.0.113.1* (IPv4 serwera DNS **dnsX2.ovh.net**).
 - Rekord DNS typu *AAAA* dla *subdomeny* **dns2.domain.tld** do IP *2001:db8:1:1b00:203:0:113:1* (IPv6 serwera DNS **dnsX2.ovh.net**).

Czekamy na czas propagacji DNS.

### 5 - Zastąpienie rekordów NS w strefie DNS nazwy domeny

Aby personalizacja serwerów DNS była widoczna w sieci DNS (poprzez *Whois*, *dig ns* lub przez analizator konfiguracji DNS), należy zastąpić rekordy typu *NS* w strefie DNS aktywowanej dla Twojej nazwy domeny.

Operacja ta zostanie przeprowadzona w interfejsie dostawcy zarządzającego konfiguracją DNS Twojej nazwy domeny. Istnieją zatem dwie możliwości:

- **Twoja nazwa domeny nie używa aktywnej strefy DNS w OVHcloud**: Skontaktuj się z dostawcą, który zarządza dostawcą usług hostingowych, aby wprowadzić zmiany.
- **Twoja nazwa domeny używa aktywnej strefy DNS w OVHcloud**: Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W kolumnie z lewej strony kliknij `Strefy DNS`{.action}, następnie wybierz nazwę domeny, dla której personalizowałeś serwery DNS. Przejdź do zakładki `Strefa DNS`{.action}, następnie kliknij polecenie `Modyfikacja w trybie tekstowym`{.action}. 

Pojawi się okno zawierające strefę DNS w trybie *tekstowym*:

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format-step-1.png){.thumbnail}

> [!warning]
>
> Przypominamy, że wykonywanie niewłaściwej zmiany w trybie *tekstowym* w strefie DNS może spowodować wyłączenie dostępu do Twojej strony WWW i / lub uniemożliwić otrzymywanie nowych wiadomości na Twoje konta e-mail. 
> W przypadku wątpliwości skorzystaj z pomocy [wyspecjalizowanego usługodawcy](/links/partner).
>

W tym oknie zamień **tylko w rekordach typu *NS*** nazwy serwerów DNS na własne nazwy serwerów DNS **nie zapominając**, zwiększ o "1" pierwszą cyfrową wartość linii *SOA*. Po przeprowadzeniu modyfikacji kliknij przycisk `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

Zmiana nie będzie widoczna bezpośrednio w [Panelu klienta OVHcloud](/links/manager). Odczekaj około dwudziestu minut, po czym zaloguj się ponownie do Panelu klienta OVHcloud, aby sprawdzić, czy wprowadzone zmiany zostały prawidłowo wprowadzone.

> [!primary]
>
> Czas propagacji wynosi od 4 do 24 godzin, aby zmiany w strefie DNS były brane pod uwagę w całej sieci DNS.
>

Aby lepiej zrozumieć ten etap, skorzystaj z nazwy domeny *domain.tld* i jej strefy DNS w trybie "tekstowym" widocznym na powyższym obrazie.

W sprawozdaniu tym znajdują się następujące elementy: 

- Pierwsza wartość numeryczna linii *SOA* jest następująca: *2023071700*.
- Istnieją dwa rekordy typu *NS* dla nazwy domeny *domain.tld*.
- Rekordy typu *NS* są nadal skierowane do obu serwerów DNS **dnsX1.ovh.net** i **dnsX2.ovh.net**.

Aby kontynuować personalizację serwerów DNS dla nazwy domeny *domain.tld*, musisz:

- Zwiększenie pierwszej wartości liczbowej linii *SOA* o "1": *202307170**1*** (należy zauważyć, że jeżeli pierwsza wartość liczbowa będzie następująca:*2023071704*, to zawsze będzie się zwiększać o "1" i wtedy uzyska się następujący wynik: *202307170**5*** ).
- Wymienić cel **dnsX1.ovh.net.** na **dns1.domain.tld.** tylko dla linii rozpoczynającej się od **IN NS**.
- Wymienić cel **dnsX2.ovh.net.** na **dns2.domain.tld.** tylko dla linii rozpoczynającej się od **IN NS**.

Po wprowadzeniu zmian, wynik w naszym przykładzie będzie następujący:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

W przypadku naszej domeny *domain.tld*, serwery DNS, które będą się wyświetlały po uwzględnieniu modyfikacji i propagacji DNS, będą teraz **dns1.domain.tld.** i **dns2.domain.tld.**.

Jeśli potrzebujesz pomocy, skorzystaj z instrukcji zawartych w przewodniku OVHcloud "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!success]
>
> W przypadku personalizacji serwerów DNS bezpośrednio z nazwy domeny, która je używa, strefa DNS może nie wyświetlać nazwy domeny w celach rekordów typu *NS*, ale tylko *subdomena*.
>
> Na przykład, zamiast wyświetlać następujące rekordy:
> 
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> Strefa DNS może wyświetlać następujące rekordy:
>
> - domain.tld IN NS dns1.
> - domain.tld IN NS dns2.
>
> Upewnij się, że otrzymasz ten sam wynik i ta konfiguracja będzie działać prawidłowo. Zjawisko to jest generowane przez fakt, że jest to ta sama nazwa domeny po obu stronach rekordu *NS*.
>

### 6 - Zmień serwery DNS Twojej nazwy domeny

Należy zmienić serwery DNS Twojej nazwy domeny zastępując stare serwery DNS niestandardowym serwerem DNS utworzonym wcześniej.

W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W kolumnie z lewej strony kliknij `Domeny`{.action} i wybierz *nazwę nazwy domeny, dla której chcesz spersonalizować serwery DNS*.
 
Przejdź do zakładki `Serwery DNS`{.action}, następnie kliknij polecenie `Zmień serwery DNS`{.action}. Zastąp Twoje aktualne serwery DNS serwerami, których chcesz użyć jako spersonalizowanego serwera DNS.

> [!warning]
>
> Jeśli Twoje niestandardowe serwery DNS zostały utworzone z rozszerzeniami *.eu*, *.it*, *.be* lub *.de*, wprowadź **obligatoryjnie** przypisany adres IP dla każdego z Twoich niestandardowych serwerów DNS.
>
> W przeciwnym razie spersonalizowane serwery DNS nie zostaną uwzględnione prawidłowo i nie będą działać z Twoją nazwą domeny.
>

Zakończ ostatni etap i, jeśli potrzebujesz więcej informacji, skorzystaj z instrukcji zawartych w naszej dokumentacji "[Zmiana serwerów DNS nazwy domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

> [!primary]
> 
> Jeśli masz ustawiony serwery DNS na jednej nazwie domeny i korzystasz z innej nazwy domeny, która nie jest zarejestrowana w OVHcloud, skontaktuj się z dostawcą, który zarejestrował Twoją inną nazwę domeny, aby zmienić serwery DNS.
>

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-dns-servers.png){.thumbnail}

> [!primary]
>
> Czas propagacji wynosi od 24 do 48 godzin, aby zmiana serwerów DNS została uwzględniona w całej sieci DNS. Zalecamy poczekać do tego czasu, zanim przejdziesz dalej.
>

W przykładzie personalizacji serwerów DNS nazwy domeny *domain.tld* serwer DNS **dnsX1.ovh.net** zastępuje się serwerem DNS **dns1.domain.tld** i serwerem DNS **dnsX2.ovh.net** na **dns2.domain.tld**, a następnie można odczekać propagacji DNS.

## prawdź również

[Informacje ogólne na temat serwerów DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).