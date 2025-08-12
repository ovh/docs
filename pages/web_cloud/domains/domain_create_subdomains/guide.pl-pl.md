---
title: "Jak utworzyć subdomenę?"
excerpt: "Dowiedz się, jak zdefiniować subdomenę i jak ją utworzyć w OVHcloud"
updated: 2025-02-05
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

Podczas korzystania z domeny konieczne będzie utworzenie i skonfigurowanie **subdomen**. Subdomeny odpowiadają trzeciemu poziomowi (*Third Level Domain*) danej domeny. Najbardziej znaną subdomeną internautów jest obecnie subdomena **W**orld **W**ide **W**eb (**www**). Wiele stron WWW wciąż używa tej subdomeny do wyszukiwania w Internecie.

Na przykład *www.ovhcloud.com* jest subdomeną domeny *ovhcloud.com*.

Możesz utworzyć nieskończoną liczbę subdomen na podstawie jednej domeny.
  
**Poznaj subdomeny i dowiedz się, jak je utworzyć w OVHcloud.**

## Wymagania początkowe

- Posiadanie co najmniej jednej [domeny](/links/web/domains);
- Dysponowanie aktywną strefą DNS dla Twojej domeny. W razie potrzeby sprawdź przewodnik "[Utwórz strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)";
- Dostęp do [panelu klienta OVHcloud](/links/manager);
- Wystarczające uprawnienia dotyczące wszystkich usług. Więcej informacji znajdziesz w naszym przewodniku [Zarządzanie kontaktami dla usług OVHcloud](/pages/account_and_service_management/account_information/managing_contacts).
  
## W praktyce

**Podsumowanie**

- [Preambuła](#introduction)
- [Jak utworzyć subdomenę?](#subdomain-creation)
    - [1 - Identyfikacja lokalizacji aktywnej strefy DNS Twojej domeny](#identification)
    - [2 - Tworzenie rekordów DNS dla subdomen](#dns-records-creation)
- [Powiązanie, autoryzacja i konfiguracja Twojej subdomeny z usługą OVHcloud](#link-subdomain)
    - [Przypadek 1: Wyświetl stronę WWW z subdomeną na moim hostingu OVHcloud](#link-subdomain-case-1)
    - [Przypadek 2 - Tworzenie kont e-mail Exchange z subdomeną](#link-subdomain-case-2)
    - [Przypadek 3 - Tworzenie kont E-mail Pro z subdomeną](#link-subdomain-case-3)

### Preambuła <a name="introduction"></a>

![URL content](/pages/assets/schemas/domains/url-composition.png){.thumbnail}

**Kliknij na dwa pytania poniżej, aby wyświetlić wyjaśnienia.**

/// details | Co składa się na nazwę domeny?

**Nazwa domeny** składa się z poziomów. Poziomy te są zazwyczaj oddzielone znakiem `.` (z wyjątkiem niektórych **rozszerzeń** od *pierwszego poziomu*, takich jak *.co.uk*, *.gouv.fr* i *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): reprezentuje domeny *pierwszego poziomu*. Najczęściej nazywamy je **rozszerzeniami**. Obecnie istnieją 4 typy domen najwyższego poziomu: 

    - **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**): składają się z dwóch znaków, odpowiadają różnym krajom na świecie. Na przykład rozszerzenia *.pl*, *.es*, *.it* lub *.fr* są rozszerzeniami ccTLD;
    - **g**eneric **T**op **L**evel **D**omains (**gTLDs**): składają się z minimum trzech znaków i reprezentują bardziej ogólne tematy lub sektory działalności. Na przykład rozszerzenia *.com*, *.net*, *.org* lub *.info* są rozszerzeniami gTLD;
    - **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**):
    Nowe rozszerzenia utworzone w 2012 r. przez firmę **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) w odpowiedzi na gwałtowny wzrost liczby zgłoszeń dotyczących rejestracji domen. Mogą odnosić się do tematów ogólnych, marek, regionów lub miast. Na przykład rozszerzenia *.love*, *.ovh* lub *.paris* to nowe rozszerzenia gTLD;
    - **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**): jest to w rzeczywistości podkategoria nowej GTLD. Na prośbę organizacji **ICANN**, firmy lub organizacje mogą zamówić własny TLD. Na przykład, rozszerzenie *.ovh* to CorpTLD utworzone przez OVHcloud kilka lat temu.

- **S**econd **L**evel **D**omain (**SLD**): reprezentuje domeny *drugiego poziomu*. Najczęściej nazywamy je **labels**. W przypadku zamówienia domeny możesz dowolnie zdefiniować **label** (pod warunkiem, że nie została ona wcześniej zarejestrowana przez innego użytkownika dla tego samego rozszerzenia i z ograniczeniem do 63 znaków). Na przykład *ovhcloud* to etykieta domeny *ovhcloud.com*.

- Third Level Domain (**subdomain**): Od tego trzeciego poziomu mówimy o **subdomenie**. W tym przewodniku wyjaśnimy szczegółowo jego definicję i wyjaśnimy, jak wdrożyć je w ramach Twoich różnych usług.

///


/// details | Co to jest subdomena?

[Domena](/links/web/domains) może być powiązana z kilkoma rodzajami usług (e-mail, strona internetowa, etc.).

Jednocześnie domena może być przypisana tylko do jednej strony WWW.

Jednak niektórzy użytkownicy lub organizacje muszą podzielić swoje strony WWW lub usługi e-mail, zachowując jednocześnie tę samą nazwę domeny.

Subdomeny (czasami nazywane **prefiksami**) odpowiadają na potrzebę segmentowania domeny. Dają one właścicielowi możliwość tworzenia kilku podkategorii dla usług www przypisanych do jego domeny, bez konieczności rejestracji nowej domeny.

Innymi słowy, subdomeny pozwalają na proste strukturyzowanie wszystkich usług www (serwerów DNS, stron www, intranetu, e-maili, itp.) przypisanych do tej samej domeny.

Jak wspomniano powyżej, subdomeny odpowiadają trzeciemu poziomowi (*Third Level Domain*) danej domeny. Najbardziej znaną subdomeną internautów jest obecnie subdomena **W**orld **W**ide **W**eb (**www**). Wiele stron WWW wciąż używa tej subdomeny do wyszukiwania w Internecie.

*www.ovhcloud.com* jest subdomeną domeny *ovhcloud.com*.

Jeśli na przykład dysponujesz domeną *example.com*, możesz utworzyć następujące subdomeny:

- *dns1.example.com* i *dns2.example.com* do personalizacji serwerów DNS za pomocą [GLUE records](/pages/web_cloud/domains/glue_registry);
- *www.example.com*, aby wyświetlić Twoją stronę WWW;
- *preprod.example.com* do testowania strony www w nowych wersjach. Operacja ta nie powoduje zablokowania dostępu do aktualnej strony WWW Twoim użytkownikom;
- *intranet.example.com* aby pracownicy mogli komunikować się między sobą na wewnętrznej stronie WWW;
- *forum.example.com* lub *community.example.com*, aby społeczność użytkowników mogła wymieniać się doświadczeniami;
- *app.example.com*, aby uzyskać dostęp do aplikacji online lub pobrać ją bezpośrednio;
- *recruitment.example.com* aby umożliwić kandydatom poszukującym pracy aplikację we własnym interfejsie rekrutacji;
- *sav.example.com*, *sales.example.com*, *legal.example.com*, aby umożliwić Twoim klientom kontakt z różnymi strukturami wewnętrznymi Twojej firmy lub aby nadać priorytet Twoim pracownikom w zależności od wewnętrznych usług, do których należą;
- itp.

Poza trzecim poziomem domeny, jest on również uważany za **subdomenę**. Aby przytoczyć jeden z powyższych przykładów, możesz utworzyć subdomenę *preprod.app.example.com* w celu przetestowania nowej wersji aplikacji www. Nie powoduje to zablokowania dostępu do aktualnej wersji aplikacji na *app.example.com*.

///

### Jak utworzyć subdomenę? <a name="subdomain-creation"></a>

Wszystkie [domeny](/links/web/domains) potrzebują do działania **strefy DNS**. Strefa DNS zawiera informacje techniczne nazywane *rekordami DNS*. Jest, w pewnym sensie, centrum ruchu wskazówek.

Więcej informacji o strefach DNS znajdziesz w przewodniku "[Tworzenie strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)" i "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

**Wszystkie subdomeny są konfigurowane w aktywnej strefie DNS domeny. Można to zrobić, dodając rekordy DNS**

#### 1 - Identyfikacja lokalizacji aktywnej strefy DNS Twojej domeny <a name="identification"></a>

Możliwe są dwa przypadki:

- Aktywna strefa DNS Twojej domeny jest obecna w OVHcloud;
- Aktywna strefa DNS Twojej domeny jest zainstalowana gdzie indziej.

> [!warning]
>
> Aktywna strefa DNS Twojej domeny nie musi być zarządzana u tego samego dostawcy, co Twoja domena.
>
> 1 : Aby ustalić, gdzie znajduje się aktywna strefa DNS domeny zarejestrowanej w OVHcloud, skorzystaj z naszego przewodnika "[Modyfikacja serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>
> 2: Jeśli Twoja domena nie jest zarejestrowana w OVHcloud, skontaktuj się z *aktualnym operatorem* Twojej domeny, aby dowiedzieć się, gdzie hostowana jest aktywna strefa DNS. Aby wykonać transfer domeny do OVHcloud, zapoznaj się z naszym [przewodnikiem](/pages/web_cloud/domains/transfer_incoming_generic_domain).
>

Jeśli serwery DNS zadeklarowane dla Twojej domeny mają jedną z dwóch form:

- `dnsXX.ovh.net` i `nsXX.ovh.net` (gdzie każdy z "X" odpowiada cyfrze);
- `dnsXX.ovh.ca` i `nsXX.ovh.ca` (gdzie każdy z "X" odpowiada cyfrze);
- `dns200.anycast.me` i `ns200.anycast.me`.

Oznacza to, że aktywna strefa DNS Twojej domeny jest aktywna w OVHcloud.

W przeciwnym razie skontaktuj się z dostawcą DNS, aby utworzyć subdomeny z nazwą domeny.

#### 2 - Tworzenie rekordów DNS dla subdomen <a name="dns-records-creation"></a>

Aby dodać subdomeny do aktywnej strefy DNS Twojej domeny, zapoznaj się z naszym przewodnikiem "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

Możesz na przykład dodać:

- Adres IP (rekordy DNS typu *A* i *AAAA*) Twojego hostingu, aby wyświetlić jedną z Twoich stron WWW z subdomeną.
- Serwery email (rekordy DNS typu *MX*), na które Twoja subdomena powinna przekierowywać wiadomości e-mail. Możesz wyświetlić je na swoim (Twoich) spersonalizowanym(ych) adresie(ach) e-mail(ów) wraz z subdomeną.
- Informacje związane z bezpieczeństwem / uwierzytelnianie Twoich usług (hosting, serwer www, e-mail, etc.) przypisane do jednej z Twoich subdomen (rekordy DNS typu *SPF*, *DKIM*, *DMARC*, etc.).

> [!primary]
>
> Modyfikacja strefy DNS powiązanej z domeną spowoduje opóźnienie propagacji w przedziale od **4** do **24** godzin, co jest maksymalnym czasem propagacji.
>
> Ponadto, podobnie jak w przypadku nazwy domeny jako takiej, samo utworzenie rekordu DNS dla subdomeny zazwyczaj nie wystarczy, aby działała ona z "docelową" usługą, którą zdefiniowałeś dla niej w rekordzie DNS. 
>
> Ze względów bezpieczeństwa musisz również autoryzować subdomenę, aby miała dostęp do "docelowej" usługi (hosting www, e-mail, itp.).
>

W dalszej części dowiesz się, jak autoryzować subdomenę, aby miała dostęp do różnych usług "Web cloud" (hosting www, serwer Exchange, itp.) oferowanych przez OVHcloud.

> [!warning]
>
> Jeśli chcesz skonfigurować subdomenę dla usługi hostowanej poza OVHcloud, nie będziemy w stanie udzielić Ci wsparcia w tym zakresie. Prosimy o kontakt z zewnętrznym dostawcą usług w celu kontynuowania konfiguracji. 
>

### Powiązanie, autoryzacja i konfiguracja Twojej subdomeny z usługą OVHcloud <a name="link-subdomain"></a>

Z subdomeną można korzystać z kilku usług z zakresu "Web cloud". Procedury asocjacyjne są podobne do tych, które powinieneś przeprowadzać z nazwą domeny. Przedstawimy tylko najczęstsze przypadki.

W przypadku usług, które nie zostały wymienione, zapoznaj się z dokumentacją dotyczącą danej usługi. Pozwala to na określenie, czy subdomena może być używana z tą domeną.

#### Przypadek 1: Wyświetl stronę WWW z subdomeną na moim hostingu OVHcloud <a name="link-subdomain-case-1"></a>

Podobnie jak w przypadku nazwy domeny i aby subdomena mogła wyświetlać zawartość *docelowego* katalogu na hostingu, zaloguj się do [panelu klienta OVHcloud](/links/manager) i wybierz `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij pozycję `Hosting`{.action}, wybierz odpowiednią ofertę, w której znajduje się Twoja strona WWW, następnie wybierz zakładkę `MultiSite`{.action}.

To tutaj zezwalasz na dostęp Twojej subdomeny do hostingu, na którym znajduje się Twoja strona WWW.

Więcej informacji na temat konfigurowania domeny lub subdomeny na hostingu znajdziesz w przewodniku "[Udostępnianie hostingu dla kilku stron](/pages/web_cloud/web_hosting/multisites_configure_multisite)". Bez względu na to, czy jest to domena czy subdomena, procedura jest taka sama.

> [!warning]
>
> Dodanie domeny lub subdomeny w opcji MultiSite może wymagać uruchomienia token do zatwierdzenia. W przypadku subdomeny ten sam token nie jest brany pod uwagę i musi zostać dodany nie dla subdomeny, ale dla nazwy domeny. W tym przypadku dodaj dodatkowo token w postaci rekordu DNS typu TXT dla nazwy domeny w aktywnej strefie DNS Twojej domeny.
>

#### Przypadek 2 - Tworzenie kont e-mail Exchange z subdomeną <a name="link-subdomain-case-2"></a>

Aby odblokować tworzenie spersonalizowanych adresów e-mail Exchange z subdomeną, zaloguj się do [Panelu klienta OVHcloud](/links/manager) i wybierz `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij `Microsoft`{.action}, a następnie `Exchange`{.action}. Następnie wybierz platformę Exchange, której chcesz używać ze swoją subdomeną. Na stronie, która się wyświetli przejdź do zakładki `Przypisane domeny`{.action}, następnie kliknij przycisk `Dodaj domenę`{.action} po prawej stronie.

Będziesz mógł zadeklarować subdomenę na platformie Exchange.

Aby uzyskać więcej informacji na temat konfigurowania platformy Exchange, zapoznaj się z następującymi przewodnikami:

- [Pierwsze kroki z usługą Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)
- [Dodaj domenę do platformy e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- [Dodaj rekord CNAME, aby zweryfikować domenę w usłudze e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

#### Przypadek 3 - Tworzenie kont E-mail Pro z subdomeną <a name="link-subdomain-case-3"></a>

Aby odblokować tworzenie spersonalizowanych adresów E-mail Pro z subdomeną, zaloguj się do [Panelu klienta OVHcloud](/links/manager) i wybierz `Web Cloud`{.action}. Kliknij `E-maile Pro`{.action}, a następnie wybierz platformę E-mail Pro, której chcesz używać ze swoją subdomeną. Na stronie, która się wyświetli przejdź do zakładki `Przypisane domeny`{.action}, następnie kliknij przycisk `Dodaj domenę`{.action} po prawej stronie.

Dzięki temu będziesz mógł zadeklarować subdomenę na platformie E-mail Pro.

Aby uzyskać więcej informacji na temat konfiguracji platformy E-mail Pro, zapoznaj się z następującymi przewodnikami:

- [Pierwsze kroki z usługą E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)
- [Dodaj domenę do platformy e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- [Dodaj rekord CNAME, aby zweryfikować domenę w usłudze e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

## Sprawdź również <a name="go-further"></a>

[Utwórz strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modyfikacja serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Instalacja kilku stron WWW na hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Pierwsze kroki z usługą Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Pierwsze kroki z usługą E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Dodaj domenę do platformy e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

[Dodaj rekord CNAME, aby potwierdzić domenę w usłudze e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).