---
title: "Personalizacja serwerów DNS nazwy domeny (Hosty)"
excerpt: "Dowiedz się, jak spersonalizować serwery DNS Twojej nazwy domeny OVHcloud"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

**Serwery DNS** przechowują konfiguracje DNS nazw domen: *strefy DNS*.

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Te *strefy DNS* składają się z informacji technicznych: *rekordów DNS*. W standardowym użyciu *rekordy DNS* pozwalają na:

- Wyświetlanie Twojej strony WWW z nazwą domeny za pomocą adresu IP Twojego serwera hostingowego (rekordy DNS typu *A* i *AAAA*).
- Przekierowanie e-maili otrzymywanych na spersonalizowane adresy e-mail Twojej nazwy domeny (rekordy DNS typu *MX*).
- Konfigurację informacji dotyczących bezpieczeństwa/uwierzytelniania usług (hosting, serwer e-mail itp.) powiązanych z Twoją nazwą domeny (rekordy DNS takie jak *SPF*, *DKIM*, *DMARC* itp.).

Więcej informacji na te tematy znajdziesz w następujących przewodnikach:

- [Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information).
- [Wszystko o strefach DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Jak edytować strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

W zależności od potrzeb możesz spersonalizować serwery DNS Twojej nazwy domeny OVHcloud za pomocą "**Hostów**".

**Dowiedz się, jak spersonalizować serwery DNS Twojej nazwy domeny OVHcloud.**

## Wymagania początkowe

- [Nazwa domeny](/links/web/domains) zarejestrowana w OVHcloud.

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
> **Personalizacja serwerów DNS nazwy domeny jest operacją wrażliwą**: nieodpowiednia zmiana może uniemożliwić dostęp do Twojej strony WWW i/lub przerwać odbiór nowych e-maili na Twoich adresach e-mail.
> Postępuj dokładnie zgodnie z poniższymi krokami lub skontaktuj się z [wyspecjalizowanym usługodawcą](/links/partner) w razie wątpliwości.
>

### 1 - Zasada ogólna <a name="step1"></a>

Niektóre rejestry, takie jak **Verisign** (zarządzający rozszerzeniami *.com*, *.net* oraz innymi TLD), korzystają z modelu technicznego zwanego **host objects**.

W niektórych przypadkach model ten wymaga wcześniejszego utworzenia specjalnego wpisu dla serwera DNS, zanim będzie mógł on zostać **użyty przez nazwę domeny**.

Inne rejestry nie wymagają takiego wpisu i akceptują bezpośrednio nazwę serwera DNS.

Zasadniczo OVHcloud automatycznie tworzy **host objects**, gdy dotyczą one nazwy domeny zarządzanej przez OVHcloud.

> [!warning]
>
> **Zakładka "Hosty" jest wymagana tylko w jednym konkretnym przypadku**: serwer DNS należy do nazwy domeny zarządzanej przez OVHcloud i ma być używany przez inną nazwę domeny, która nie jest zarządzana przez OVHcloud, *ale podlega temu samemu rejestrowi* (na przykład dwie domeny *.com*).
>

#### Możliwe przypadki

| Nazwa domeny serwera DNS | Konfigurowana nazwa domeny | Utworzenie hosta przez OVHcloud | Wymagana akcja ręczna w menu "Hosty" | Przykład |
| ---------------------- | ------------------------ | -------------------------- | ------------------------------------------ | ------- |
| Zarządzana przez OVHcloud | Zarządzana przez OVHcloud | Automatyczne | Nie | *ns1.example.com* (domena *example.com* zarządzana przez OVHcloud) jest używana jako serwer DNS dla domeny *test.com* (zarządzanej przez OVHcloud) |
| Zarządzana przez OVHcloud | Zarządzana przez OVHcloud | Automatyczne | Nie | *ns1.example.com* (domena *example.com* zarządzana przez OVHcloud) jest używana jako serwer DNS dla domeny *test.fr* (zarządzanej przez OVHcloud) |
| **Zarządzana przez OVHcloud** | **Inny rejestrator** | **Automatyczna konfiguracja niemożliwa** | **Tak** | ***ns1.example.com* (domena *example.com* zarządzana przez OVHcloud) jest używana jako serwer DNS dla domeny *test.com* (inny rejestrator, to samo rozszerzenie *.com*)** |
| Zarządzana przez OVHcloud | Inny rejestrator | N/D | Nie | *ns1.example.com* (domena *example.com* zarządzana przez OVHcloud) jest używana jako serwer DNS dla domeny *test.fr* (inny rejestrator) |
| Niezarządzana przez OVHcloud | Zarządzana przez OVHcloud | Poza zakresem | Nie | *ns1.example.net* (domena zarządzana przez innego rejestratora) jest używana jako serwer DNS dla domeny *test.com* (zarządzanej przez OVHcloud) — host musi zostać utworzony u rejestratora zarządzającego *example.net* |

**Trzeci wiersz tabeli powyżej jest jedynym przypadkiem, w którym wymagane jest ręczne utworzenie hosta w zakładce "Hosty".**

### 2 - Pobieranie serwerów DNS aktualnie używanych przez Twoją nazwę domeny <a name="step2"></a>

Możesz pobrać serwery DNS aktualnie używane przez Twoją nazwę domeny za pomocą narzędzia DNS online [Zonemaster](https://zonemaster.net/en).

W tym celu przejdź na stronę [https://zonemaster.net](https://zonemaster.net/en), wprowadź swoją nazwę domeny bez *www* (przykład: *domain.tld*), a następnie zaznacz przycisk `Options`{.action} znajdujący się bezpośrednio pod formularzem wprowadzania nazwy domeny.

W dostępnych opcjach kliknij przycisk `Fetch NS from parent zone`{.action}.

Wyświetli się wynik:

![glue-zonemaster](/pages/assets/screens/other/web-tools/zonemaster/nameservers.png){.thumbnail}

Pobierz *serwery DNS* i zachowaj **wszystkie** powiązane adresy IPv4 (w formie *X.X.X.X*, gdzie *X* jest liczbą z zakresu od *0* do *255*) oraz adresy IPv6 (inne adresy IP, które nie są IPv4). Będziesz ich potrzebować w dalszej części tego przewodnika.

W powyższym przykładzie domena **domain.tld** używa obecnie następujących **serwerów DNS**:

- **dnsX1.ovh.net** powiązany z IPv4 *203.0.113.0* i IPv6 *2001:db8:1:1b00:203:0:113:0*.
- **dnsX2.ovh.net** powiązany z IPv4 *203.0.113.1* i IPv6 *2001:db8:1:1b00:203:0:113:1*.

Więcej informacji znajdziesz w naszym tutorialu dotyczącym narzędzia [Zonemaster](/pages/web_cloud/domains/dns_zonemaster).

### 3 - Dodawanie rekordów Host <a name="step3"></a>

> [!warning]
>
> Rejestry rozszerzeń *.eu*, *.it*, *.be* i *.de* nie traktują rekordów Host jako "obiektów", lecz jako "atrybutów".
>
> Dlatego w przypadku tych rozszerzeń przejdź **bezpośrednio do [kroku 4](#step4)** tego przewodnika, pomijając krok 3.
>

> [!success]
>
> Zanim zaczniesz, pamiętaj, że:
>
> - Możesz tworzyć spersonalizowane serwery DNS bezpośrednio na nazwie domeny, która będzie ich używać. Na przykład możesz utworzyć spersonalizowane serwery DNS *dns1.domain.tld* i *dns2.domain.tld* dla nazwy domeny *domain.tld*.
>
> - Możesz również tworzyć spersonalizowane serwery DNS na jednej nazwie domeny, aby używać ich z inną nazwą domeny. Na przykład możesz utworzyć spersonalizowane serwery DNS *dns1.domain1.tld* i *dns2.domain1.tld* dla nazwy domeny *domain2.tld*. Musisz wówczas pobrać serwery DNS i powiązane z nimi adresy IP dla *domain2.tld*.
> Ponadto *domain1.tld* musi być zarejestrowana w OVHcloud, aby skonfigurować hosty.
>

<!-- CP-STEPS-START:add-host-records -->
Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie wybranej nazwy domeny kliknij zakładkę `Hosty`{.action}.
>>
>> Wyświetlona tabela zawiera rekordy Host aktualnie skonfigurowane w OVHcloud dla Twojej nazwy domeny (jeśli istnieją). Aby dodać nowy rekord, kliknij przycisk `Dodaj`{.action}.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add.png){.thumbnail}
>>
> **Krok 3**
>>
>> W wyświetlonym oknie uzupełnij wymagane informacje:
>>
>> |Informacja|Szczegóły|
>> |---|---|
>> |Nazwa hosta|Dostosuj nazwę hosta, której chcesz użyć jako spersonalizowanego serwera DNS.|
>> |Docelowy adres IP|Wpisz adres(y) IP (IPv4 i/lub IPv6), z którym(i) ma być powiązana nazwa hosta. Jest to adres(y) IP serwera DNS aktualnie używanego przez Twoją nazwę domeny. Jeśli chcesz wpisać kilka adresów IP, oddziel je *przecinkami*.|
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add-another-glue-record-step-2.png){.thumbnail}
>>
>> Na powyższym obrazie, na podstawie przykładu z [kroku 2](#step2), host do dodania (dla nazwy domeny *domain.tld*) to **dns1.domain.tld**.
>>
>> Dla tego hosta podane są następujące adresy IP *docelowego serwera DNS*: *203.0.113.0* (IPv4) i *2001:db8:1:1b00:203:0:113:0* (IPv6). Te adresy IP odpowiadają jednemu z dwóch serwerów DNS aktualnie używanych dla *domain.tld* (**dnsX1.ovh.net**).
>>
>> Ten host jest dodawany, aby **dns1.domain.tld** ostatecznie zastąpił nazwę serwera DNS **dnsX1.ovh.net** aktualnie używaną przez nazwę domeny *domain.tld*.
>>
>> Po uzupełnieniu informacji kliknij przycisk `Dodaj`{.action}. Przeczytaj wyświetlone informacje, a następnie kliknij `Zatwierdź`{.action}. Powtórz tę operację tyle razy, ile to konieczne, w zależności od liczby serwerów DNS używanych przez Twoją nazwę domeny.
>>
>> W naszym przykładzie należy powtórzyć operację, aby utworzyć host **dns2.domain.tld**. Zastąpi on serwer DNS **dnsX2.ovh.net** aktualnie powiązany z IPv4 *203.0.113.1* i IPv6 *2001:db8:1:1b00:203:0:113:1*.
<!-- CP-STEPS-END:add-host-records -->

### 4 - Tworzenie rekordów DNS typu A i AAAA odpowiadających spersonalizowanym serwerom DNS <a name="step4"></a>

Musisz utworzyć rekordy *A* i *AAAA* dla nazw hostów zdefiniowanych w poprzednim kroku. Rekordy *A* i *AAAA* muszą wskazywać na docelowy adres IP odpowiadający nazwie hosta utworzonego wcześniej.

Operacja ta jest wykonywana w interfejsie dostawcy zarządzającego konfiguracją DNS Twojej nazwy domeny. Istnieją dwie możliwości:

**Kliknij jedną z 2 opcji, aby wyświetlić jej zawartość.**

/// details | Twoja nazwa domeny nie używa aktywnej strefy DNS w OVHcloud

Skontaktuj się z dostawcą, który nią zarządza. Po zakończeniu operacji przejdź do kolejnego kroku.

///

<!-- CP-STEPS-START:add-dns-records-ovh -->
/// details | Twoja nazwa domeny używa aktywnej strefy DNS w OVHcloud

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny, której użyłeś do utworzenia hostów w [kroku 3](#step3).
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij `Dodaj rekord`{.action}.
>>
> **Krok 3**
>>
>> Wybierz wpis typu *A* lub *AAAA* w zależności od typu powiązanego adresu IP, który chcesz dodać.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-2.png){.thumbnail}
>>
> **Krok 4**
>>
>> Wprowadź *subdomenę* oraz adres *IPv4* (A) lub *IPv6* (AAAA), a następnie kontynuuj aż do zatwierdzenia. W razie potrzeby skorzystaj z instrukcji zawartych w przewodniku "[Jak edytować strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///
<!-- CP-STEPS-END:add-dns-records-ovh -->

> [!primary]
>
> W każdym przypadku konieczny jest czas propagacji od 4 do 24 godzin, aby zmiana strefy DNS została uwzględniona w całej sieci DNS. Zalecamy odczekanie tego czasu przed kontynuowaniem.
>

Wracając do naszego wcześniejszego przykładu: rekordy Host do dodania (dla nazwy domeny *domain.tld*) to **dns1.domain.tld** i **dns2.domain.tld**. Celem jest zastąpienie aktualnych serwerów DNS **dnsX1.ovh.net** i **dnsX2.ovh.net**.

W związku z tym do aktywnej strefy DNS nazwy domeny *domain.tld* dodaje się następujące rekordy:

 - Rekord DNS typu *A* dla *subdomeny* **dns1.domain.tld** wskazujący na IP *203.0.113.0* (IPv4 serwera DNS **dnsX1.ovh.net**).
 - Rekord DNS typu *AAAA* dla *subdomeny* **dns1.domain.tld** wskazujący na IP *2001:db8:1:1b00:203:0:113:0* (IPv6 serwera DNS **dnsX1.ovh.net**).
 - Rekord DNS typu *A* dla *subdomeny* **dns2.domain.tld** wskazujący na IP *203.0.113.1* (IPv4 serwera DNS **dnsX2.ovh.net**).
 - Rekord DNS typu *AAAA* dla *subdomeny* **dns2.domain.tld** wskazujący na IP *2001:db8:1:1b00:203:0:113:1* (IPv6 serwera DNS **dnsX2.ovh.net**).

Zaczekaj na zakończenie propagacji DNS.

### 5 - Zastąpienie rekordów NS w aktywnej strefie DNS nazwy domeny

Aby personalizacja serwerów DNS była widoczna w sieci DNS (za pomocą *Whois*, *dig ns* lub analizatora konfiguracji DNS), należy zastąpić rekordy *NS* w aktywnej strefie DNS Twojej nazwy domeny.

Operacja ta jest wykonywana w interfejsie dostawcy zarządzającego konfiguracją DNS Twojej nazwy domeny. Istnieją dwie możliwości:

**Kliknij jedną z 2 opcji, aby wyświetlić jej zawartość.**

/// details | Twoja nazwa domeny nie używa aktywnej strefy DNS w OVHcloud

Skontaktuj się z dostawcą, który nią zarządza, w celu dokonania zmiany.

///

<!-- CP-STEPS-START:update-ns-records-ovh -->
/// details | Twoja nazwa domeny używa aktywnej strefy DNS w OVHcloud

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny, dla której spersonalizowałeś serwery DNS.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij `Zmiana w trybie tekstowym`{.action}.
>>
>> Wyświetli się okno zawierające Twoją strefę DNS w trybie *tekstowym*:
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Przypominamy, że nieodpowiednia zmiana w trybie *tekstowym* strefy DNS może uniemożliwić dostęp do Twojej strony WWW i/lub przerwać odbiór nowych e-maili na Twoich adresach e-mail.
>> > W razie wątpliwości skontaktuj się z [wyspecjalizowanym usługodawcą](/links/partner).
>>
> **Krok 3**
>>
>> W tym oknie zamień **tylko w rekordach typu *NS*** nazwy serwerów DNS na Twoje własne spersonalizowane nazwy serwerów DNS, **pamiętając o** zwiększeniu o "1" pierwszej wartości liczbowej wiersza *SOA*. Po dokonaniu zmian kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}.
>>
>> Zmiana nie będzie widoczna natychmiast. Odczekaj około dwudziestu minut, aby zmiany zostały uwzględnione.

///
<!-- CP-STEPS-END:update-ns-records-ovh -->

> [!primary]
>
> Czas propagacji od 4 do 24 godzin jest wymagany, aby zmiany wprowadzone w strefie DNS zostały uwzględnione w całej sieci DNS.
>

Aby lepiej zrozumieć ten krok, posłużmy się naszym przykładem z nazwą domeny *domain.tld* i jej strefą DNS w trybie "tekstowym" widoczną na powyższym obrazie.

Obserwujemy następujące elementy:

- Pierwsza wartość liczbowa wiersza *SOA* to: *2023071700*.
- Istnieją dwa rekordy *NS* dla nazwy domeny *domain.tld*.
- Rekordy *NS* nadal wskazują na dwa serwery DNS **dnsX1.ovh.net** i **dnsX2.ovh.net**.

Aby kontynuować personalizację serwerów DNS dla nazwy domeny *domain.tld*, należy:

- Zwiększyć pierwszą wartość liczbową wiersza *SOA* o "1": *202307170**1*** (jeśli pierwsza wartość liczbowa wynosiła *2023071704*, należy zwiększyć o "1", co daje wynik: *202307170**5***).
- Zastąpić cel **dnsX1.ovh.net.** przez **dns1.domain.tld.** tylko w wierszu rozpoczynającym się od **IN NS**.
- Zastąpić cel **dnsX2.ovh.net.** przez **dns2.domain.tld.** tylko w wierszu rozpoczynającym się od **IN NS**.

Po wprowadzeniu zmian wynik w naszym przykładzie będzie następujący:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Dla nazwy domeny *domain.tld* serwery DNS wyświetlane po uwzględnieniu modyfikacji i propagacji DNS będą teraz **dns1.domain.tld.** i **dns2.domain.tld.**.

W razie potrzeby skorzystaj z instrukcji zawartych w przewodniku "[Jak edytować strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!success]
>
> Jeśli spersonalizowałeś serwery DNS bezpośrednio na nazwie domeny, która ich używa, strefa DNS może nie wyświetlać nazwy domeny w celach rekordów *NS*, ale jedynie *subdomenę*.
>
> Na przykład zamiast wyświetlać następujące rekordy:
>
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> Strefa DNS może wyświetlać rekordy w następujący sposób:
>
> - domain.tld IN NS dns1.
> - domain.tld IN NS dns2.
>
> Nie ma powodu do obaw — wynik jest identyczny, a konfiguracja działa prawidłowo. Zjawisko to wynika z obecności tej samej nazwy domeny po obu stronach rekordu *NS*.
>

### 6 - Zmiana serwerów DNS nazwy domeny

Należy zmienić serwery DNS Twojej nazwy domeny, zastępując stare serwery DNS spersonalizowanymi serwerami DNS utworzonymi wcześniej.

<!-- CP-STEPS-START:change-dns-servers -->
W tym celu kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz *nazwę domeny, dla której chcesz spersonalizować serwery DNS*.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Przejdź do zakładki `Serwery DNS`{.action} i kliknij `Zmień serwery DNS`{.action}.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-dns-servers.png){.thumbnail}
>>
> **Krok 3**
>>
>> Zastąp aktualne serwery DNS serwerami, których chcesz użyć jako spersonalizowanych serwerów DNS.
>>
>> > [!warning]
>> >
>> > Jeśli Twoje spersonalizowane serwery DNS zostały utworzone z rozszerzeniami *.eu*, *.it*, *.be* lub *.de*, **musisz** podać powiązany adres IP dla każdego ze spersonalizowanych serwerów DNS.
>> >
>> > W przeciwnym razie spersonalizowane serwery DNS nie zostaną prawidłowo zarejestrowane i nie będą działać z Twoją nazwą domeny.
>>
> **Krok 4**
>>
>> Zakończ procedurę i w razie potrzeby skorzystaj z instrukcji zawartych w przewodniku "[Zmiana serwerów DNS nazwy domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>>
>> > [!primary]
>> >
>> > Jeśli spersonalizowałeś serwery DNS na nazwie domeny, aby używać ich z inną nazwą domeny niezarejestrowaną w OVHcloud, skontaktuj się z dostawcą, u którego zarejestrowana jest Twoja inna nazwa domeny, w celu zmiany serwerów DNS.
<!-- CP-STEPS-END:change-dns-servers -->

> [!primary]
>
> Czas propagacji od 24 do 48 godzin jest wymagany, aby zmiana serwerów DNS została uwzględniona w całej sieci DNS.
>

W naszym przykładzie personalizacji serwerów DNS dla nazwy domeny *domain.tld* zastępujemy serwer DNS **dnsX1.ovh.net** serwerem **dns1.domain.tld** i serwer DNS **dnsX2.ovh.net** serwerem **dns2.domain.tld**, a następnie czekamy na zakończenie propagacji DNS.

## Sprawdź również

[Informacje ogólne na temat serwerów DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Jak edytować strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
