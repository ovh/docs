---
title: "Poprawa bezpieczeństwa e-maili poprzez rekord SPF"
excerpt: "Dowiedz się, jak skonfigurować rekord SPF dla Twojej domeny, aby zwiększyć bezpieczeństwo e-maili"
updated: 2023-08-04
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

SPF (Sender Policy Framework) pozwala serwerowi otrzymującemu wiadomość e-mail upewnić się, że została ona wysłana z zaufanego serwera. 

- Pozwala zapobiegać przypadkom podszywania się pod Twoją domenę e-mail (spoofing). 
- Pozwala również na uwierzytelnienie wysłanych wiadomości e-mail.
- SPF dodaje się jako rekord w strefie DNS domeny.

Operacja ta jest możliwa dzięki informacjom zawartym w rekordzie SPF, który jest rekordem TXT w strefie DNS. Znajdziemy tam:

- **adresy serwerów i/lub kilka adresów IP**: pozwoli to na zidentyfikowanie ich jako legalnych źródeł wysyłki;
- **jakość**: zaleci on, aby serwer odbierający e-maile otrzymywał informacje, które są uważane za nieuprawnione, czyli pochodzące ze źródła, które nie jest wymienione.

W związku z tym upewnij się, że umieściłeś w rekordzie SPF źródła wysyłki, których używasz do wysyłania e-maili z Twoją domeną. Mogą to być Twoje własne serwery e-mail, dostawcy usługi lub rozwiązania poczty elektronicznej OVHcloud.

> **Przykład** <br> 
> Wysyłasz e-mail na adres `contact@mydomain.ovh`.
> Tylko serwer poczty wychodzącej **A** (Outgoing Mail Server **A**) jest zarejestrowany w SPF domeny `mojadomena.ovh`.
> Po otrzymaniu wiadomości e-mail od serwera poczty przychodzącej (Inbound Mail Server) adres e-mail zostanie przeczytany w strefie DNS Twojej domeny `mydomain.ovh` w celu skontrolowania rekordu SPF.
>
> - Ponieważ w rekordzie SPF znajduje się serwer poczty wychodzącej **A** (Outgoing Mail Server **A**), wiadomość e-mail zostanie wysłana do skrzynki odbiorczej odbiorcy.
> - Ponieważ serwer poczty wychodzącej **B** (Outgoing Mail Server **B**) nie jest wymieniony w rekordzie SPF, e-mail wysyłany z tego serwera będzie oznaczony jako podejrzany w skrzynce e-mail z recepcją. Może to oznaczać wskazanie `[SPAM]` w temacie wiadomości e-mail, umieszczenie w folderze `Poczta` lub bezpośrednie usunięcie, zgodnie z zasadami serwera odbierającego.
>
> ![domena](/pages/assets/schemas/emails/spf_records_diagram.png){.thumbnail}

> [!primary]
>
> SPF jest tylko wskazówką dla serwerów otrzymujących e-maile, w tym dla Ciebie. Do tych ostatnich należy stosowanie lub niestosowanie tego, co zostało określone w rekordzie SPF nazw domen, dla których otrzymują wiadomości.

**Dowiedz się, jak skonfigurować rekord SPF dla Twojej domeny w OVHcloud.**

## Wymagania początkowe

- Dostęp do interfejsu zarządzania domeną w Panelu [klienta OVHcloud](/links/manager){.external}.
- Dostęp do [Panelu klienta OVHcloud](/links/manager){.external}.
- Nazwa domeny musi używać konfiguracji OVHcloud (czyli serwerów DNS OVHcloud).

> [!warning]
>
> Jeśli Twoja domena nie używa serwerów DNS OVHcloud, przeprowadź zmianę SPF w interfejsie dostawcy zarządzającego konfiguracją Twojej domeny.
>
> Jeśli Twoja domena jest zarejestrowana w OVHcloud, możesz sprawdzić w [Panelu klienta](/links/manager){.external}, czy używa ona konfiguracji OVHcloud w zakładce `Serwery DNS`{.action}.
>

## W praktyce

### Sprawdź aktualną konfigurację SPF

Jeśli Twoja domena używa konfiguracji OVHcloud, możesz sprawdzić, czy rekord SPF jest już skonfigurowany dla tej domeny. W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external}. W sekcji `Domeny`{.action} wybierz odpowiednią domenę. Kliknij zakładkę `Strefa DNS`{.action}.

Pojawi się tabela. Strona pokaże strefę DNS Twojej domeny w OVHcloud. Składają się one z kilku rekordów, które są symbolizowane przez wiersz w tabeli.

> [!primary]
>
> Jeśli Twoja domena jest zarejestrowana w OVHcloud, możesz sprawdzić, czy używa ona serwerów DNS OVHcloud w zakładce `Serwery DNS`{.action}.
>

W tabeli, aby odnaleźć wiersz odpowiadający SPF OVHcloud, można użyć filtra wyświetlacza. Ponieważ plik może pojawić się w dwóch różnych miejscach, wybierz w rekordzie filtrowania `TXT`{.action} lub `SPF`{.action}, przechodząc z jednego do drugiego, jeśli to konieczne. Dlatego wyświetlanie tabeli może być inne.

- **Zostanie wyświetlony** SPF odpowiadający informacjom o usłudze OVHcloud: Twoja domena używa już konfiguracji OVHcloud. Jeśli nie chcesz już z niego korzystać, zmodyfikuj go na kolejnym etapie.

- **Wyświetla się SPF nieodpowiadający informacjom OVHcloud**: Twoja domena używa spersonalizowanego SPF. Jego modyfikacja lub wybór konfiguracji OVHcloud następuje na kolejnym etapie. Jeśli Twoja konfiguracja jest nieprawidłowa, zmień ją.

- **W kolumnie docelowej** nie wyświetla się SPF: sprawdź wcześniej, czy rejestracja nie została utworzona jako SPF lub TXT poprzez zmianę filtrowania. Jeśli nie wyświetla się żaden SPF, nie ma znaczenia czy filtrowane, Twoja domena nie używa tych parametrów. Będziesz mógł dodać jeden na kolejnym etapie.

> [!primary]
>
> SPF zawsze składa się z następującej formy: "v=spf1 `sources` `qualifieur`". Na przykład, SPF OVHcloud to: "v=spf1 include:mx.ovh.com ~all".
>

![domena](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_check_OVH_configuration.png){.thumbnail}

### Konfiguracja rekordu SPF

Aby dodać rekord SPF w konfiguracji OVHcloud Twojej domeny, zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external}. Kliknij `Domeny`{.action}, następnie wybierz domenę i przejdź do zakładki `Strefa DNS`{.action}.

Aby dodać rekord SPF, kliknij przycisk `Dodaj rekord`{.action}.

![domena](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_add_entry_step1.png){.thumbnail}

W oknie, które się wyświetli, pojawi się kilka rekordów DNS. Jeśli chcesz dodać SPF, masz dwie możliwości:

- [Dodaj rekord SPF OVHcloud](#spfrecordovhcloud)**i użyj konfiguracji OVHcloud**: dla użytkowników posiadających tylko oferty e-mail OVHcloud dla ich domeny (poza [Private Exchange](/links/web/emails-hosted-exchange){.external}).
- [Dodaj rekord SPF](#spfrecord): dla użytkowników, którzy nie posiadają całego rekordu. Na przykład dysponujesz tylko adresem IP lub nazwą hosta serwera e-mail.
- [Dodaj rekord TXT](#txtrecord): dla użytkowników, którzy są ostrzeżeni lub mają już pełny wpis. Na przykład, dostawca rozwiązania poczty elektronicznej przekazuje Ci wartość.

![domena](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_add_entry.png){.thumbnail}

#### Korzystanie z rekordu SPF OVHcloud <a name="spfrecordovhcloud"></a>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tRiy0YKY8dw?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Wybrałeś rekord `SPF`{.action} i chcesz zastosować konfigurację OVHcloud. Pozwala ona na uwzględnienie wszystkich wychodzących serwerów e-mail OVHcloud w następujących ofertach e-mail:

- MX Plan w monoterapii lub w cenie [hostingu OVHcloud](/links/web/hosting){.external}.
- [E-mail Pro](/links/web/email-pro).
- [Hosted Exchange](/links/web/emails-hosted-exchange).

Kliknij na przycisk `Użyj SPF na hostingu OVHcloud`{.action} na górze okna informacyjnego. Wyświetlą się informacje dotyczące SPF OVHcloud. Kliknij przycisk `Zatwierdź`{.action}, aby przeprowadzić modyfikację.

![domena](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_add_entry_step2.png){.thumbnail}

> [!primary]
>
> W związku z wprowadzoną zmianą, należy wziąć pod uwagę czas propagacji, który wynosi od 4 do 24 godzin maksimum. Po tym czasie zmiana będzie aktywna.
>

#### Dodaj rekord SPF <a name="spfrecord"></a>

Wybrałeś rekord `SPF`{.action}

Asystent konfiguracji pozwoli Ci na personalizację SPF. W tym celu należy odpowiedzieć na różne pytania i dostarczyć niezbędnych informacji. Niektóre wymagane informacje mogą być kierowane do zaawansowanych użytkowników.

Będziemy je stopniowo rozwiązywać.

![domena](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_add_entry_personnalize_step1.png){.thumbnail}

|Szczegóły|Opis|
|---|---|
|Subdomena|Uzupełnij, czy SPF ma zastosowanie do subdomeny Twojej domeny. Ma to zastosowanie, jeśli wysyłasz e-maile z subdomeny.|
|TTL|Jest to czas propagacji, który będzie miał zastosowanie do konfiguracji tego rekordu DNS.|
|Zezwól IP na wysyłanie e-maili| Sprawdź, czy Twoja strona WWW i konta e-mail są zainstalowane na serwerze korzystającym z tego samego adresu IP (np. na serwerze dedykowanym).|
|Zezwól serwerom MX na wysyłanie e-maili|Zaznacz, jeśli serwery odbierające Twoje e-maile również wysyłają e-maile.|
|Zezwól wszystkim serwerom, których nazwa kończy się na Twojej domenie, na wysyłanie e-maili|Opcja, której należy użyć z ostrożnością, ponieważ umożliwia bardzo szerokie uprawnienie źródeł wysyłki z Twojej domeny.|

W kwestii: "**Czy inne serwery wysyłają emaile z Twoją domeną?**", możesz dodać kilka elementów:

|Szczegóły|Opis|
|---|---|
|a|Wpisz tutaj nazwy domen. Uprawni to serwery hostujące strony WWW OVHcloud do wysyłania e-maili z Twoich adresów.|
|mx|Wpisz tutaj serwery, które odbierają Twoje e-maile (serwery MX), jeśli mogą one również wysyłać e-maile. W ten sposób zostaną one zidentyfikowane jako legalne źródło wysyłki.|
|rt|Wpisz tutaj hosty, których rewers *jest aktywny* (dzięki rekordowi PTR w strefie DNS). W ten sposób zostaną one zidentyfikowane jako legalne źródło wysyłki.|
|ip4|Wskaż adresy IP lub zakresy adresów IP (IPv4), które mogą wysyłać e-maile z Twoimi adresami.|
|ip6|Wskaż adresy IP lub zakresy adresów IP (IPv6), które mogą wysyłać e-maile z Twoimi adresami.|
|include|Wpisz tutaj nazwy domen zawierające ich własne reguły SPF. Pozwoli to na utworzenie własnych domen. OVHcloud stosuje tę metodę w swojej konfiguracji SPF:  "v=spf1 include:mx.ovh.com ~all", co pozwala OVHcloud na zarządzanie opcją SPF mx.ovh.com i na umożliwienie klientom korzystania z niej.|

Wreszcie pytanie: "**Czy podane przez Ciebie informacje opisują wszystkich hostów wysyłających pocztę z Twoją domeną?**", możliwe są trzy możliwości:

|Szczegóły|Opis|
|---|---|
|Tak, jestem pewien|Zalecamy odrzucenie przez serwery odbierające e-maile z Twojej domeny, jeśli pochodzą one z nieuprawnionego źródła (niedostępnego w SPF).|
|Tak, ale użyć safe mode|Zalecamy, aby serwery poczty przychodzącej z Twojej domeny otrzymywały wiadomości e-mail, które zostały zaakceptowane, jeśli pochodzą z nieuprawnionego źródła (nie zawartego w SPF), ale wpisywały je tak, aby mogły zostać zidentyfikowane jako potencjalnie niezgodne z prawem (na przykład jako "spam").|
|Nie|Zalecamy, aby serwery odbierające e-maile z Twojej domeny były akceptowane, jeśli pochodzą z nieuprawnionego źródła (nie zawartego w SPF), bez podejmowania żadnych działań. Nagłówek e-maila zostanie jednak zwiększony.|

Po podaniu informacji, kliknij „Dalej”, po czym sprawdź czy wyświetlone informacje są poprawne, i następnie kliknij „Zatwierdź”. 

> [!primary]
>
> W związku z wprowadzoną zmianą, należy wziąć pod uwagę czas propagacji, który wynosi od 4 do 24 godzin maksimum. Po tym czasie zmiana będzie aktywna.
>

#### Dodaj rekord TXT <a name="txtrecord"></a>

Wśród proponowanych rekordów kliknij `TXT`{.action}, po czym uzupełnij wymagane informacje. W polu `Wartość`{.action} wprowadź SPF, którego chcesz użyć.

Aby zakończyć operację, kliknij `Dalej`{.action}. Upewnij się, że wyświetlane informacje są poprawne, następnie kliknij `Zatwierdź`{.action}.

> [!primary]
>
> W związku z wprowadzoną zmianą, należy wziąć pod uwagę czas propagacji, który wynosi od 4 do 24 godzin maksimum. Po tym czasie zmiana będzie aktywna.
>

![domena](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_add_TXT_entry.png){.thumbnail}

### Zmień rekord SPF

Aby zmienić SPF w konfiguracji OVHcloud Twojej domeny, zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external}. Na pasku usług, w sekcji `Domeny`{.action}, kliknij wybraną domenę, następnie przejdź do zakładki `Strefa DNS`{.action}.

W tabeli wyświetla się konfiguracja OVHcloud Twojej domeny. Każdy wiersz odpowiada jednemu rekordowi DNS. Znajdź rekord TXT lub SPF w tej tabeli i kliknij przycisk `...`{.action}, aby edytować rekord.

### Konfiguracja SPF OVHcloud w przypadku ofert e-mail na hostingu <a name="ovhcloudspfvalue"></a>

Ogólna konfiguracja SPF OVHcloud ma zastosowanie do następujących rozwiązań:

- Usługa MX Plan w monoterapii lub w [cenie hostingu](/links/web/hosting).
- [E-mail Pro](/links/web/email-pro).
- [Hosted Exchange](/links/web/emails-hosted-exchange).

Konfiguracja jest następująca:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

### Konfiguracja SPF OVHcloud w usłudze Private Exchange 

W przypadku oferty Private Exchange należy podać adresy IP Twojego serwera e-mail. W tym celu należy użyć argumentu `ip4`, aby wprowadzić adres IPv4 (**A**) oraz `ip6`, aby wprowadzić adres IPv6 (**AAAA**) serwera Private Exchange.

```bash
mydomain.ovh IN TXT "v=spf1 ip4:11.22.333.444 ip6:5555:66a7:88:b999::1000:2233 ~all"
```

Jeśli używasz również [oferty e-mail na hostingu](#ovhcloudspfvalue), możesz dodać argument `include:mx.ovh.com` do powyższego rekordu, podając następującą wartość:

```bash
mydomain.ovh IN TXT "v=spf1 ip4:11.22.333.444 ip6:5555:66a7:88:b999::1000:2233 include:mx.ovh.com ~all"
```

> [!primary]
> 
> Aby pobrać adres IP serwera Private Exchange, kliknij `Microsoft`{.action}, a następnie `Exchange`{.action}. Następnie kliknij nazwę odpowiedniej usługi Private Exchange.
>
> W zakładce `Informacje ogólne`{.action} kliknij na `A` i `AAAA` w sekcji `Diagnostyka serwera`. W wyświetlonym oknie odczytaj wartość.
>
> ![domena](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/general-information/spf_records_ip.png){.thumbnail}
>
> Jeśli przyciski `A` i `AAAA` są zielone, adresów IP nie zobaczysz klikając na nie. Dane pobrane ze strefy DNS domeny powiązanej z Twoją platformą Private Exchange. W tym celu pobierz link do interfejsu webmail w zakładce `Informacje ogólne`{.action}, w ramach `Połączenie`.
>
> ![domena](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/general-information/spf_records_ip2.png){.thumbnail}
>
> Przejdź następnie do sekcji `Domeny`{.action}, wybierz domenę powiązaną z Twoją platformą Private Exchange, następnie kliknij w zakładkę `Strefa DNS`{.action}. Pobierz adresy IPv4 (rekord `A`) i IPv6 (rekord `AAAA`) odpowiadające adresowi URL interfejsu webmail.
>
> ![domena](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_ip3.png){.thumbnail}
>

## Sprawdź również

[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit){.external}.

[Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit){.external}.

Dołącz do [grona naszych użytkowników](/links/community).