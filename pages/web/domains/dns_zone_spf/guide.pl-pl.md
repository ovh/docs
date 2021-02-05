---
title: Konfiguracja rekordu SPF w strefie DNS nazwy domeny
slug: uslugi_www_pole_spf
excerpt: Zobacz, jak dodać rekord SPF w strefie DNS nazwy domeny na serwerze OVH
section: Konfiguracja zaawansowana
---

**Ostatnia aktualizacja: 22.01.2018 r.**

## Wprowadzenie

SPF (Sender Policy Framework) umożliwia serwerowi, który otrzymał wiadomość e-mail upewnienie się, że wiadomość ta została poprawnie wysłana przez uprawniony do tego serwer. Serwer SPF dodawany jest jako pozycja w strefie DNS, w której wskazane są serwery lub adresy IP uprawnione do wysyłania wiadomości e-mail dla danej domeny.

**Zobacz, jak dodać rekord SPF do konfiguracji domeny na serwerze OVH.**

## Wymagania początkowe

- Dostęp do funkcji zarządzania nazwą danej domeny z poziomu [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Zalogowanie do swojego [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Nazwa danej domeny musi używać konfiguracji OVH (tzn. serwerów DNS OVH).

> [!warning]
>
> Jeżeli Twoja nazwa domeny nie używa serwerów DNS OVH, konieczna będzie zmiana SPF z poziomu interfejsu dostawcy zarządzającego konfiguracją Twojej nazwy domeny.
>
> Jeżeli Twoja nazwa domeny znajduje się na serwerze OVH, możesz sprawdzić, czy używa on naszej konfiguracji OVH, wybierając daną domenę w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} w zakładce `Serwery DNS`{.action}.
>

## W praktyce

### Etap 1: zrozumienie rekordu SPF

Ważne, by przed dodaniem lub zmianą rekordu SPF w konfiguracji domeny zrozumieć jego działanie. Ma on na celu zapobiegnięcie potencjalnym kradzieżom tożsamości wraz z adresami e-mail korzystającymi z Twojej nazwy domeny.
Jest to możliwe dzięki danym zapisanym w rekordzie SPF. Zawiera on następujące informacje:

- **serwery lub kilka adresów IP**: umożliwiają ich identyfikację jako autoryzowane źródło, z którego wysłano wiadomość;
- **kwalifikator**: przekazuje serwerowi, który otrzymał wiadomość e-mail szczególne zalecenia dotyczące działania w przypadku wiadomości uważanej za nieautoryzowaną, tzn. pochodzącą ze źródła stanowiącego zagrożenie.

Upewnij się więc, że wskazałeś na serwerze SPF źródła, z których wysyłasz wiadomości e-mail przy użyciu Twojej domeny. Źródłami tymi może być Twój serwer, serwer Twojego dostawcy lub jedno z rozwiązań e-mail OVH.

> [!primary]
>
> Rekord SPF jest jedynie wskazówką, którą otrzymują serwery odbierające wiadomości e-mail, także te należące do Ciebie. Ich zadaniem jest stosowanie, lub nie, wytycznych określonych w  polach SPF domen, dla których wiadomości otrzymują.
>

### Etap 2: zapoznanie się z konfiguracją OVH

Ustawienia OVH dotyczą następujących rozwiązań:

- MX Plan zakupiony oddzielnie lub zawarty w ofercie [hostingu](https://www.ovh.pl/hosting/){.external};
- [Hosted Exchange](https://www.ovh.pl/emaile/){.external}.
Jeżeli dokonujesz zakupu jednego z tych rozwiązań, zalecamy korzystanie z rekordu SPF zawierającego informacje OVH w ustawieniach Twojej domeny. Wygląda on w następujący sposób:

```bash
mypersonaldomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Jeżeli Twoja domena wykorzystuje ustawienia OVH, możesz sprawdzić czy rekord SPF został już dla niej skonfigurowany. W tym celu zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, a następnie przejdź do menu usług znajdującego się po lewej stronie. Wybierz sekcję `Domeny`{.action}. Kliknij wybraną domenę, a następnie przejdź do zakładki `Strefa DNS`{.action}.

Powinna pojawić się tabela. Zawiera ona ustawienia Twojej domeny na serwerach DNS OVH. Składa się z kilku typów rekordów DNS, umieszczonych w osobnych wierszach tabeli.

> [!primary]
>
> Jeżeli Twoja domena jest zarejestrowana w OVH, możesz sprawdzić z poziomu zakładki `Serwery DNS`{.action} czy używa ona konfiguracji DNS OVH.
>

Aby odnaleźć w tabeli wiersz odpowiadający wpisowi SPF OVH, możesz skorzystać z pola wyszukiwania. Może ono pojawić się w dwóch różnych miejscach. W polu wyszukiwania wybierz `TXT`{.action} lub `SPF`{.action}, przechodząc z jednego pola do drugiego, jeżeli będzie to konieczne. Wygląd tabeli może się zmienić.

- **"v=spf1 include:mx.ovh.com ~all" został wyświetlony w tabeli**: Twoja domena korzysta już z konfiguracji OVH. Jeżeli nie chcesz korzystać z tych ustawień, zmień je na kolejnym etapie. 

- **Rekord SPF niezgodny z informacjami od OVH został wyświetlony w tabeli**: Twoja domena korzysta już ze spersonalizowanego serwera SPF. Zmiana serwera lub wybór ustawień OVH odbywa się na kolejnym etapie.

- **W tabeli nie został wyświetlony żaden rekord SPF**: zmieniając kryteria wyszukiwania, sprawdź, czy rekord nie został utworzony jako SPF lub TXT. Jeżeli nie wyświetla się żaden wpis SPF, oznacza to, że Twoja domena nie posiada takiego pola w strefie DNS. Istnieje możliwość dodania rekordu na kolejnym etapie.

> [!primary]
>
> Serwer SPF zawsze posiada następującą formę: "v=spf1 autoryzowany_serwer_mailowy". Na przykład forma wpisu SPF OVH to: "v=spf1 include:mx.ovh.com ~all".
>

![Konfiguracja domeny - krok 1](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Etap 3: zmiana serwera SPF

Aby zmienić wpis SPF w ustawieniach OVH swojej domeny, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Na pasku usług po lewej stronie wybierz sekcję `Domeny`{.action}, kliknij daną domenę, a następnie wybierz zakładkę `Strefa DNS`{.action}.

W tabeli wyświetlą się ustawienia OVH Twojej domeny. Każdy wiersz odpowiada danemu typowi rekordu DNS.

Aby zmienić lub dodać SPF, należy stworzyć nową pozycję w ustawieniach OVH (`Strefa DNS`{.action}) Twojej domeny. W tym celu kliknij opcję `Dodaj wpis`{.action}.

![Konfiguracja domeny -  krok 2](images/spf_records_add_entry_step1.png){.thumbnail}

Wyświetli się okno zawierające wiele rodzajów wpisów DNS. Istnieją dwa sposoby dodania SPF:

- **dodaj wpis SPF ręcznie**: opcja przeznaczona dla zaawansowanych użytkowników lub osób posiadających już dane do wpisania (np. dane przekazane przez dostawcę zarządzającego Twoimi wiadomościami e-mail);

- **skorzystaj z naszego asystenta konfiguracji SPF**: opcja przeznaczona dla początkujących użytkowników lub osób nie posiadających koniecznych danych.
Dalszy etap procesu różnić się będzie w zależności od wybranej opcji.

![Konfiguracja domeny - tworzenie wpisu](images/spf_records_add_entry.png){.thumbnail}

#### Ręczne dodawanie pola SPF

Spośród zaproponowanych rekordów wybierz `TXT`{.action}, a następnie wpisz wymagane informacje. W polu `Wartość`{.action} wpisz SPF, z którego chcesz kozrzystać.

Aby zakończyć działanie kliknij `Dalej`{.action}. Upewnij się, że wyświetlone informacje są poprawne, następnie kliknij `Zatwierdź`{.action}.

> [!primary]
>
> Zmiana stanie się widoczna po czasie wynoszącym od 4 do 24 godzin.
>

![Konfiguracja domeny - tworzenie wpisu ](images/spf_records_add_TXT_entry.png){.thumbnail}

#### Korzystanie z asystenta konfiguracji SPF OVH

Spośród zaproponowanych rekordów wybierz `SPF`{.action}. Na kolejnym etapie możesz wybrać dwa sposoby działania:

- wykorzystać wpis SPF dla rozwiązań OVH (MX Plan, E-mail Pro oraz Hosted Exchange);
- spersonalizować wpis SPF dzięki asystentowi konfiguracji.

##### Korzystanie z domyślnego pola SPF OVH

Kliknij opcję `Skorzystaj z pola SPF dla hostingu OVH`{.action}. Zostaną wyświetlone informacje dotyczące SPF OVH. Kliknij opcję `Zatwierdź`{.action}, aby przeprowadzić zmianę.

> [!primary]
>
> Zmiana stanie się widoczna po czasie wynoszącym od 4 do maksymalnie 24 godzin.
>

![Dodawanie SPF](images/spf_records_add_entry_step2.png){.thumbnail}

##### Personalizacja SPF

Asystent konfiguracji umożliwi stopniową personalizację Twojego pola SPF. W tym celu należy odpowiedzieć na różne pytania i udzielić niezbędnych informacji. Niektóre pytania mogą być skierowane do zaawansowanych użytkowników.

Zajmiemy się nimi stopniowo.

|Szczegóły|Opis|
|---|---|
|Subdomena|Uzupełnij, jeżeli pole SPF musi odpowiadać subdomenie w Twojej domenie. Dotyczy to sytuacji, gdy wysyłasz wiadomości e-mail ze swojej subdomeny.|
|TTL|Czas propagacji (przechowywania), stosowany w przypadku ponownej modyfikacji rekordu DNS.|
|Zgoda na wysyłanie wiadomości e-mail przez adres IP|Opcja ta może być istotna, gdy Twoja strona internetowa i adresy e-mail znajdują się na serwerze korzystającym z tego samego adresu IP (np. na Twoim serwerze dedykowanym).|
|Zgoda na wysyłanie wiadomości e-mail przez serwery MX|Opcja ta może być istotna, gdy serwery otrzymujące Twoje wiadomości e-mail same mogą również wysyłać wiadomości e-mail.|
|Zgoda na wysyłanie wiadomości e-mail przez wszystkie serwery, których nazwa zakończona jest Twoją domeną|Nie zaleca się korzystania z tej opcji, ponieważ może ona dodawać zbyt wiele uprawnionych źródeł do pola SPF.|

![Konfiguracja spersonalizowanego SPF](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

Co do pytania: "**Inne serwery wysyłają pocztę elektroniczną, korzystając z Twojej domeny?**", możesz wskazać kilka informacji:

|Szczegóły|Opis|
|---|---|
|a|Tutaj wpisz nazwy domen. To uprawni serwery hostujące ich strony internetowe do wysyłania wiadomości e-mail przy pomocy Twoich adresów.|
|mx|Tutaj wpisz serwery, które otrzymują Twoje wiadomości e-mail (serwery MX), jeżeli mogą one również wysyłać wiadomości. Dzięki temu zostaną one oznaczone jako uprawnione źródło.|
|ptr|Tutaj wpisz nazwy serwerów, których *reverse* jest funkcjonalny (dzięki rekordowi PTR w strefie DNS). Dzięki temu zostaną one oznaczone jako uprawnione źródło.|
|ip4|Wskaż adresy IP lub zakresy adresów IP (IPv4) uprawnionych do wysyłania wiadomości e-mail przy pomocy Twoich adresów.|
|ip6|Wskaż adresy IP lub zakresy adresów IP (IPv6) uprawnionych do wysyłania wiadomości e-mail przy pomocy Twoich adresów.|
|include|Tutaj wpisz nazwy domen. Umożliwi to wykorzystywanie pola SPF tych domen dla Twojej własnej domeny. Na przykład OVH wykorzystuje tę metodę w swoich ustawieniach SPF: "v=spf1 include:mx.ovh.com ~all", co umożliwia OVH zarządzanie SPF mx.ovh.com i pozwala klientom z niego korzystać.|

Na pytanie: "**Czy podane informacje opisują wszystkie hosty, które wysyłają pocztę elektroniczną z Twojej domeny?**", istnieją trzy możliwe odpowiedzi:

|Szczegóły|Opis|
|---|---|
|Tak, jestem pewien|Serwery otrzymujące wiadomości e-mail wysyłane z Twojej domeny odrzucą je, jeżeli pochodzą one z nieuprawnionego źródła (nie znajdującego się w SPF).|
|Tak, jednak skorzystaj z trybu bezpiecznego|Serwery otrzymujące wiadomości e-mail wysyłane z Twojej domeny przyjmą je, jeżeli pochodzą one z nieuprqwnionego źródła (nie znajdującego się w SPF), jednak odpowiednio je oznaczą, by były rozpoznawalne jako potencjalnie nieuprawnione(np. jako „spam”).|
|Nie|Serwery otrzymujące wiadomości e-mail wysyłane z Twojej domeny przyjmą je, jeżeli pochodzą one z nieuprawnionego źródła (nie znajdującego się w SPF), nie wykonując żadnych szczególnych działań.| Nagłówek wiadomości e-mail zostanie jednak powiększony.|

Pole SPF jest wskazówką dla serwerów, które otrzymują wiadomości e-mail, w tym także Twoje wiadomości. Serwery te stosują, lub nie, wytyczne określone w polu SPF domen, dla których wiadomości otrzymują.

Po uzupełnieniu informacji kliknij `Dalej`{.action}, upewnij się, że wyświetlane informacje są poprawne, a następnie kliknij `Zatwierdź`{.action}.

> [!primary]
>
> Zmiana stanie się widoczna po czasie wynoszącym od 4 do maksymalnie 24 godzin.
>

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com>.