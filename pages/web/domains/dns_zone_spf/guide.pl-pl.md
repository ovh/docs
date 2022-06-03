---
title: Konfiguracja rekordu SPF w strefie DNS nazwy domeny
slug: uslugi_www_pole_spf
excerpt: Zobacz, jak dodać rekord SPF w strefie DNS nazwy domeny na serwerze OVHcloud
section: Konfiguracja zaawansowana
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 25-02-2021**

## Wprowadzenie

SPF (Sender Policy Framework) pozwala serwerowi otrzymującemu wiadomość e-mail upewnić się, że została ona wysłana przez upoważniony serwer.
<br>Dzięki temu możesz uniknąć kradzieży tożsamości u kont e-mail używających Twojej domeny (spoofing).
<br>Pozwala również na uwierzytelnienie wysłanych wiadomości e-mail.
<br>SPF dodaje się jako rekord w strefie DNS, w której wskazane są serwery lub adresy IP uprawnione do wysyłania e-maili do danej domeny.

Jest to możliwe dzięki informacjom zawartym w SPF. Znajdziemy tam:

- **serwerów lub kilku adresów IP**: pozwoli to na zidentyfikowanie ich jako legalnych źródeł wysyłki;
- **jakość**: zaleci on serwerowi odbierającemu e-maile określony sposób reagowania na wiadomość, która jest uważana za nieuprawnioną, czyli pochodzącą ze źródła ryzyka.

Upewnij się zatem, czy umieścisz w SPF źródła wysyłki, których używasz do wysyłania e-maili z Twoją domeną. Mogą to być źródła Twojego serwera, dostawcy lub rozwiązania poczty elektronicznej OVHcloud.

> [!primary]
>
> SPF jest tylko wskazówką dla serwerów otrzymujących e-maile, w tym dla Ciebie. Do tych ostatnich należy stosowanie lub niestosowanie przepisów SPF dotyczących domen, dla których są wysyłane wiadomości.
>

**Dowiedz się, jak skonfigurować rekord SPF dla Twojej domeny w OVHcloud.**

## Wymagania początkowe

- Dostęp do interfejsu zarządzania domeną w Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Nazwa domeny musi używać konfiguracji OVHcloud (czyli serwerów DNS OVHcloud).

> [!warning]
>
> Jeśli Twoja domena nie używa serwerów DNS OVHcloud, przeprowadź zmianę SPF w interfejsie dostawcy zarządzającego konfiguracją Twojej domeny.
>
> Jeśli Twoja domena jest zarejestrowana w OVHcloud, możesz sprawdzić w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, czy używa ona konfiguracji OVHcloud w zakładce `Serwery DNS`{.action}.
>

## W praktyce

### Konfiguracja SPF OVHcloud

Konfiguracja OVHcloud obejmuje następujące rozwiązania:

- MX Plan samodzielnie lub w ramach pakietu [hostingowego OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external};
- [E-mail Pro](https://www.ovhcloud.com/pl/emails/email-pro/){.external};
- [Hosted Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/){.external}.

Zalecamy, aby podczas zamawiania jednego z tych rozwiązań używać rekordu SPF zawierającego informacje o OVHcloud w strefie DNS Twojej domeny. Ten ostatni wygląda tak:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Ta konfiguracja nie dotyczy ofert Provider Exchange i [Private Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/){.external}.

W przypadku oferty Exchange Provider konfiguracja jest następująca:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com a:gw1.ex mail.biz a:gw2.ex-mail.biz ~all"
```

> [!primary]
> W przypadku oferty Private Exchange należy podać adresy IP Twojego serwera e-mail. Aby ograniczyć rozmiar rekordu SPF, możesz utworzyć rekord SPF zawierający te adresy IP w subdomenie oraz rekord SPF zawierający subdomenę, korzystając z kategorii "include" dla domeny.

### Sprawdź aktualną konfigurację SPF

Jeśli Twoja domena używa konfiguracji OVHcloud, możesz sprawdzić, czy rekord SPF jest już skonfigurowany dla tej domeny. W tym celu zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. W sekcji `Domeny`{.action} wybierz odpowiednią domenę. Kliknij zakładkę `Strefa DNS`{.action}.

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

![domena](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Konfiguracja rekordu SPF

Aby dodać rekord SPF w konfiguracji OVHcloud Twojej domeny, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Kliknij `Domeny`{.action}, następnie wybierz domenę i przejdź do zakładki `Strefa DNS`{.action}.

Aby dodać rekord SPF, kliknij przycisk `Dodaj rekord`{.action}.

![domena](images/spf_records_add_entry_step1.png){.thumbnail}

W oknie, które się wyświetli, pojawi się kilka rekordów DNS. Jeśli chcesz dodać SPF, masz dwie możliwości:

- [Dodaj rekord TXT](#txtrecord): dla użytkowników, którzy są ostrzeżeni lub mają już pełny wpis. Na przykład, dostawca rozwiązania poczty elektronicznej przekazuje Ci wartość.
- [Dodaj rekord SPF](#spfrecord): dla użytkowników, którzy nie posiadają całego rekordu. Na przykład dysponujesz tylko adresem IP lub nazwą hosta serwera e-mail.
- [Dodaj rekord SPF ](#spfrecordovhcloud)**i użyj konfiguracji OVHcloud**: dla użytkowników posiadających tylko oferty e-mail OVHcloud dla ich domeny (poza [Private Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/){.external} i Exchange Provider).

![domena](images/spf_records_add_entry.png){.thumbnail}


#### Dodaj rekord SPF <a name="spfrecord"></a>

Wybrałeś rekord `SPF`{.action}

Asystent konfiguracji pozwoli Ci na personalizację SPF. W tym celu należy odpowiedzieć na różne pytania i dostarczyć niezbędnych informacji. Niektóre wymagane informacje mogą być kierowane do zaawansowanych użytkowników.

Będziemy je stopniowo rozwiązywać.

![domena](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

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

#### Korzystanie z rekordu SPF OVHcloud <a name="spfrecordovhcloud"></a>

Wybrałeś rekord `SPF`{.action} i chcesz zastosować konfigurację OVHcloud.

Kliknij na przycisk `Użyj SPF na hostingu OVHcloud`{.action} na górze okna informacyjnego. Wyświetlą się informacje dotyczące SPF OVHcloud. Kliknij przycisk `Zatwierdź`{.action}, aby przeprowadzić modyfikację.

![domena](images/spf_records_add_entry_step2.png){.thumbnail}

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

![domena](images/spf_records_add_TXT_entry.png){.thumbnail}

### Zmień rekord SPF

Aby zmienić SPF w konfiguracji OVHCloud Twojej domeny, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Na pasku usług, w sekcji `Domeny`{.action}, kliknij wybraną domenę, następnie przejdź do zakładki `Strefa DNS`{.action}.

W tabeli wyświetla się konfiguracja OVHCloud Twojej domeny. Każdy wiersz odpowiada jednemu rekordowi DNS. Znajdź rekord TXT lub SPF w tej tabeli i kliknij przycisk `...`{.action}, aby edytować rekord.

## Sprawdź również

[Modyfikacja strefy DNS](../hosting_www_jak_edytowac_strefe_dns/){.external}.

[Zmiana serwerów DNS domeny OVHcloud](../hosting_www_informacje_na_temat_serwerow_dns/){.external}.

Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}
