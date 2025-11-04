---
title: "Pierwsze kroki z ofertą Zimbra"
excerpt: "Dowiedz się, jak rozpocząć korzystanie z oferty Zimbra z poziomu Panelu klienta OVHcloud"
updated: 2025-11-04
---

<style>
.w-500 {
  max-width:500px !important;
}
</style>

## Wprowadzenie

Z ofertą Zimbra OVHcloud oferuje platformę open source do przesyłania wiadomości e-mail z wszystkimi niezbędnymi funkcjami do profesjonalnego użytku. W tym przewodniku znajdziesz pierwsze kroki z konfiguracją Twoich kont e-mail Zimbra.

**Dowiedz się, jak rozpocząć korzystanie z usługi e-mail Zimbra**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/q8QCtcXRbME?si=bAjQhzr-PQ--3Aj7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Wymagania początkowe

- Zakup konta e-mail w ramach naszego rozwiązania e-mail Zimbra OVHcloud.
- Posiadanie [domeny OVHcloud](/links/web/domains).
- Dostęp do [panelu klienta OVHcloud](/links/manager).

## W praktyce

**Podsumowanie**

- [Dostęp do interfejsu zarządzania usługą](#zimbra-access)
- [Skonfiguruj usługę Zimbra](#zimbra-conf)
- [Organizacje](#organizations)
    - [Utwórz organizację](#organizations-create)
    - [Filtruj po organizacji](#organizations-filters)
- [Domeny](#domains)
    - [Dodaj domenę](#domains-add)
    - [Zmień domenę](#domains-modify)
- [Konta e-mail](#emails)
    - [Utwórz konto e-mail](#emails-create)
    - [Zmiana oferty](#emails-offer)
- [Sprawdź konto e-mail](#emails-consult)
- [Przekierowania](#redirections)
- [Alias](#alias)
- [Odpowiedzi automatyczne](#autoreply)

### Dostęp do interfejsu zarządzania usługą <a name="zimbra-access"></a>

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Web Cloud`{.action}.
1. Kliknij `Zimbra Mail`{.action}.

![zimbra](images/zimbra_general_information.png){.thumbnail .w-500}

### Skonfiguruj usługę Zimbra <a name="zimbra-conf"></a>

Zanim rozpoczniesz konfigurację kont e-mail Zimbra, zapoznaj się z trzema elementami, które hierarchicznie porządkują Twoją usługę Zimbra:

- [**Organisation**](#organizations): umożliwia pogrupowanie domen w grupy.
- [**Nazwa domeny**](#domains): niezbędne do założenia konta e-mail. Należy zarządzać co najmniej jednym z nich w Panelu klienta OVHcloud i dodać go do usługi Zimbra.
- [**Konta e-mail**](#emails): korzystając z domen dodanych do Twojej usługi Zimbra, będziesz mógł utworzyć adres e-mail.

> [!primary]
>
> *Organizacja* służy do reprezentowania jednostki (firmy, stowarzyszenia, projektów osobistych, etc.). Pozwala ona na rozdzielenie kont e-mail, stosowanie określonych zasad bezpieczeństwa (funkcja, która zostanie wprowadzona) oraz na delegowanie uprawnień do organizacji (funkcja dostępna wkrótce). Korzystanie z organizacji ułatwia poruszanie się po platformie Zimbra i zarządzanie nią.

Poniższy schemat podsumowuje hierarchiczne powiązanie między wyżej wymienionymi elementami.

![Zimbra](images/zimbra_organization.png){.thumbnail .w-500}

### Organizacje <a name="organizations"></a>

Jeśli dodajesz wiele domen do swojej usługi Zimbra, pomocne może być pogrupowanie ich w "organizację". W usłudze Zimbra kliknij `Organisation`{.action}.

![zimbra](images/zimbra_organization_tab.png){.thumbnail .w-500}

#### Utwórz organizację <a name="organizations-create"></a>

Aby utworzyć organizację, kliknij przycisk `Dodaj organizację`{.action}. Ustaw `Nazwa` organizacji oraz `Znak organizacji`, przy czym ten ostatni jest krótkim opisem organizacji pozwalającym na odnalezienie Cię podczas filtrowania wyświetlania nazw domen i kont e-mail Twojej usługi Zimbra.

![zimbra](images/zimbra_organization_add.png){.thumbnail .w-500}

#### Filtruj według organizacji <a name="organizations-filters"></a>

Z zakładek `Organizacja`{.action}, `Domena`{.action} i `Konta e-mail`{.action}, klikając na etykietę organizacji, utworzysz filtr, który wyświetli tylko elementy powiązane z tą organizacją.

Możesz zauważyć, że filtr jest stosowany, gdy etykieta jest wyświetlana obok nazwy Twojej usługi Zimbra.

Aby usunąć filtr, wystarczy kliknąć na krzyżyk filtra.

![Zimbra](images/zimbra_organization_filter.png){.thumbnail .w-500}

### Domeny <a name="domains"></a>

> [!warning]
>
> Aby zapewnić optymalne działanie, jeśli używasz tej samej nazwy domeny między ofertami OVHcloud [Exchange](/links/web/emails-hosted-exchange), [E-mail Pro](/links/web/email-pro) i Zimbra, konieczne jest skonfigurowanie domeny jako `non-authoritative`. Aby dowiedzieć się, jak skonfigurować nieautorytatywną domenę na platformie Exchange lub E-mail Pro, zapoznaj się z naszym przewodnikiem [Dodaj domenę na platformie e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

W tej karcie znajdziesz wszystkie nazwy domen dodane do Twojej usługi Zimbra. Aby je dodać, należy nimi zarządzać w Panelu klienta OVHcloud.

Tabela domen podaje dwie informacje:

- **Organization**: Domena zostanie oznaczona po dodaniu nazwy. W tej kolumnie automatycznie odnajdziesz jej etykietę.
- **Liczba kont**: w tej sekcji odnajdziesz wszystkie konta utworzone pod daną nazwą domeny.

![zimbra](images/zimbra_domain_tab.png){.thumbnail .w-500}

#### Dodaj domenę <a name="domains-add"></a>

> [!warning]
>
> Należy [utworzyć organizację](#organisations), aby móc dodać domenę do usługi Zimbra.

Aby dodać domenę do Twojej usługi Zimbra, kliknij w zakładkę `Domena`{.action}, następnie kliknij `Dodaj domenę`{.action}.

Wybierz organizację z wyskakującego menu, a następnie wybierz jedną z dwóch poniższych opcji:

- **Wybierz domenę z listy** (domenę wewnętrzną): na tej liście znajdziesz domeny, którymi zarządzasz w Panelu klienta OVHcloud.
- **Wpisz domenę, która nie jest zarządzana na Twoim koncie OVHcloud** (domena zewnętrzna): wprowadź nazwę domeny, która nie jest zarządzana w Twoim Panelu klienta OVHcloud lub jest zarejestrowana u innego operatora i którą zarządzasz.

Wybierz kartę:

> [!tabs]
> **Domena wewnętrzna**
>>
>> Wybierz z listy zarządzaną domenę w Panelu klienta OVHcloud.
>>
>> ![Zimbra](images/zimbra_domain_add_internal01.png){.thumbnail .w-500}
>>
>> Aby skonfigurować strefę DNS, wybierz jedną z dwóch poniższych opcji:
>>
>> - **Rekomendowana konfiguracja**: Twoja strefa DNS zostanie skonfigurowana automatycznie. Ta opcja jest odpowiednia, jeśli nie skonfigurowałeś kont e-mail dla swojej nazwy domeny.
>> - **Konfiguracja niestandardowa**: jeśli skonfigurowałeś już usługę e-mail dla swojej domeny, możesz wybrać tematy, które Cię interesują.
>>    - *Skonfiguruj automatycznie rekord MX*: umożliwia automatyczne wpisanie serwerów poczty przychodzącej OVHcloud (dotyczy wszystkich ofert e-mail OVHcloud).
>>    - *Skonfiguruj automatycznie rekord SPF*: umożliwia automatyczne wpisanie rekordu zezwalającego serwerom poczty elektronicznej OVHcloud na przesyłanie e-maili. Wpis ten dotyczy wszystkich ofert e-mail OVHcloud.
>>    - *Automatyczna konfiguracja DKIM*: umożliwia automatyczne wprowadzenie rekordów niezbędnych do uwierzytelnienia wysyłanych wiadomości e-mail.
>>    - *Automatyczna konfiguracja rekordu SRV* : umożliwia automatyczną konfigurację parametrów konta e-mail, gdy dodajesz go do programu pocztowego (Outlook, Mail dla Mac, Thunderbird itp.).
>>
>> ![Zimbra](images/zimbra_domain_add_internal02.png){.thumbnail .w-500}
>>
>> Kliknij przycisk `Potwierdź`{.action}, aby dokończyć dodawanie domeny i rozpocząć proces konfiguracji.
>>
> **Domena zewnętrzna**
>>
>> Wpisz nazwę domeny, która nie jest obsługiwana w Twoim Panelu klienta. Upewnij się, że masz dostęp do zmiany strefy DNS wybranej domeny.
>>
>> Kliknij na `Potwierdź`{.action}
>>
>> ![Zimbra](images/zimbra_domain_add_external01.png){.thumbnail .w-500}
>>
>> Pojawi się poniższe okno. Należy wpisać ten rekord CNAME w strefie DNS domeny, aby zatwierdzić ją na Twojej platformie Zimbra.
>>
>> ![Zimbra](images/zimbra_domain_add_external02.png){.thumbnail .w-500}
>>
>> > [!warning]
>> >
>> > Po 48 godzinach, jeśli pole CNAME nie jest widoczne w strefie DNS, operacja jest anulowana. W takim przypadku konieczne będzie ponowne wykonanie operacji.

### Zmiana nazwy domeny <a name="domains-modify"></a>

Możesz zmienić nazwę domeny, aby zmienić jej organizację, lub sprawdzić powiązane z nią rekordy DNS.

W zakładce `Domena`{.action} Twojej usługi Zimbra kliknij na ikonę "&#8285;" z prawej strony odpowiedniej domeny, aby wyświetlić opcje.

![zimbra](images/zimbra_domain_modify01.png){.thumbnail .w-500}

- Kliknij przycisk `Konfiguruj`{.action}, aby zmienić organizację przypisaną do Twojej domeny.
- Kliknij `Raporty diagnostyczne`{.action}, aby wyświetlić interfejs diagnostyczny dla rekordów DNS domeny. Należy upewnić się, że żaden alert nie jest wyświetlany dla każdego z rekordów DNS wymienionych w zakładkach. Postępuj zgodnie z instrukcjami wyświetlanymi w każdej zakładce z alertem, aby skonfigurować rekordy DNS:
    - **MX**: niezbędne do odbierania e-maili.
    - **SPF**: bezpieczeństwo wymagane przez większość serwerów e-mail odbiorców, aby potwierdzić autoryzację serwerów poczty elektronicznej OVHcloud dla Twojej domeny.
    - **DKIM**: umożliwia uruchomienie systemu podpisywania wszystkich e-maili wysyłanych przez Twoją usługę Zimbra. Podpis jest weryfikowany przez odbiorcę za pomocą klucza publicznego widocznego w strefie DNS.
    - **SRV** : Ułatwia konfigurację Twojego konta Zimbra, gdy go konfigurujesz w programie pocztowym (Outlook, Mail dla Mac, Thunderbird itp.).

![zimbra](images/zimbra_domain_modify02.png){.thumbnail .w-500}

### Konta email <a name="emails"></a>

Adresami e-mail usługi Zimbra można zarządzać w zakładce `Konta e-mail`{.action}. W tabeli wyświetla się lista kont e-mail obecnych w Twojej usłudze oraz 3 informacje dla każdego z nich:

- **Organizacja**: Jeśli nazwa domeny przypisana do Twojego konta e-mail jest skojarzona z organizacją, w tej kolumnie automatycznie odnajdziesz jej etykietę.
- **Oferta**: Ponieważ Twoja usługa Zimbra może hostować kilka ofert Zimbra, w tej kolumnie znajdziesz ofertę powiązaną z Twoim kontem e-mail.
- **Rozmiar**: w tej kolumnie wyświetlana jest całkowita pojemność konta e-mail oraz aktualnie zajęta przestrzeń.

Na górze tej strony znajduje się również link do [Webmail](/links/web/email), dzięki któremu będziesz mógł połączyć się bezpośrednio z zawartością Twojego konta e-mail z poziomu przeglądarki internetowej.

![zimbra](images/zimbra_emailaccounts_tab.png){.thumbnail .w-500}

#### Załóż konto e-mail <a name="emails-create"></a>

Aby utworzyć konto e-mail w Twojej usłudze Zimbra, kliknij zakładkę `Konta e-mail`{.action}, a następnie `Utwórz konto`{.action}.

Uzupełnij kolejne informacje, o które zostaniesz poproszony.

- **Konto e-mail**: wpisz *nazwę konta*, które będzie posiadać Twój adres e-mail (np. imię.nazwisko) i *wybierz nazwę domeny* z rozwijanego menu.

> [!warning]
>
> Wybór nazwy konta e-mail musi spełniać następujące warunki:
>
> - Minimum 2 znaki.
> - Maksymalnie 32 znaki.
> - Brak znaków akcentowanych.
> - Brak znaków specjalnych, z wyjątkiem następujących znaków: `.`, `+`, `-` i `_`.

- **Imię**: wpisz imię.
- **Nazwa**: wprowadź nazwę.
- **Nazwa do wyświetlenia**: wprowadź nazwę nadawcy, która ma się wyświetlać podczas wysyłki e-maili z tego adresu.
- **Hasło**: Ustaw hasło składające się z (minimum) 9 znaków, jednej wielkiej litery, jednej małej litery i jednej cyfry. Ze względów bezpieczeństwa nie używaj dwa razy tego samego hasła. Wybierz takie, które nie ma żadnego związku z Twoimi danymi osobowymi (np. unikaj podawania imienia, nazwiska i daty urodzenia). Zmieniaj ustawienia regularnie.

> [!warning]
>
> Wybór hasła musi spełniać następujące warunki:
>
> - Minimum 10 znaków.
> - Maksymalnie 64 znaki.
> - Minimum 1 wielka litera.
> - Minimum 1 znak specjalny.
> - Brak znaków akcentowanych.

Kliknij na `Potwierdź`{.action}, aby rozpocząć zakładanie konta.

![zimbra](images/zimbra_emailaccounts_add.png){.thumbnail .w-500}

### Zmiana oferty <a name="emails-offer"></a>

Można zmienić ofertę dowolnego konta Zimbra na wyższą lub niższą ofertę.

1. Zaloguj się do [panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Web Cloud`{.action}.
1. Kliknij `Zimbra Mail`{.action}.
1. Kliknij zakładkę `Konto e-mail`{.action}.
1. Po prawej stronie konta e-mail, dla którego chcesz przejść na wyższą ofertę, kliknij `⁝`{.action}.
1. Kliknij `Zmień ofertę`{.action}.

![Zimbra](images/zimbra-change-offer.png){.thumbnail .w-500}

> [!warning]
>
> Przed przejściem na niższą ofertę upewnij się, że:
>
> - Na Twoim wolumenie magazynowym "Briefcase" nie ma żadnych plików, jeśli zmieniasz ofertę na Starter.
> - Zawartość Twojego konta e-mail musi być mniejsza niż 15 Go, jeśli przechodzisz na ofertę Starter.

### Sprawdź konto e-mail <a name="mail-consult"></a>

Aby sprawdzić konto e-mail:

- Zaloguj się do [webmail](/links/web/email) w przeglądarce internetowej i wprowadź swój adres e-mail oraz hasło. Więcej informacji znajdziesz na naszej stronie "[Korzystanie z poczty Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".
- Skonfiguruj program pocztowy na swoim komputerze, smartfonie lub tablecie. Odwiedź naszą stronę "[Konfiguracja konta e-mail Zimbra w programie pocztowym](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)".

### Przekierowania <a name="redirections"></a>

Aby utworzyć przekierowanie na adres e-mail Zimbra, zaloguj się do [webmail](/links/web/email).
Przekierowanie jest tworzone za pomocą reguł skrzynki odbiorczej, nazywanych w interfejsie webmail "filtrami". Reguły, które stosujemy w momencie otrzymania wiadomości e-mail, pozwalają na przesłanie lub przekierowanie wiadomości.

Aby przekierować e-maile z Twojego konta Zimbra na inny adres e-mail, zastosujemy regułę transferu. Aby uruchomić przekierowanie, postępuj zgodnie z poniższymi zakładkami.

> [!primary]
>
> W poniższym przykładzie postanowiliśmy przekierować wszystkie przychodzące wiadomości e-mail na inny adres e-mail. Aby pokazać przykład zrzutów ekranu, zalogowaliśmy się na adres **zimbra@mydomain.ovh** i chcemy przekierować e-maile z tego konta na adres **address@example.com**.

> [!tabs]
> **Etap 1**
>>
>> Kliknij przycisk &#9881; w prawym górnym rogu Twojego okna poczty webmail i kliknij `Parametry`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-500}
>>
> **Etap 2**
>>
>> Kliknij sekcję `Filtry`{.action} w oknie ustawień, następnie kliknij przycisk `Dodaj filtr`{.action}.
>>
>> ![zimbra](images/zimbra_redirection02.png){.thumbnail .w-500}
>>
> **Etap 3**
>>
>> - Kliknij najpierw <u>Tryb zaawansowany</u> w prawym górnym rogu, aby ustawić tę regułę.
>> - Nazwij filtr w polu `Dodaj filtr`.
>> - Pozostaw menu rozwijane na `kazdy` w zdaniu "Jeśli wiadomość przychodząca spełnia ... te warunki".
>> - W pierwszym menu rozwijanym reguł wybierz `Do` (To), pozostaw `zawiera` (kontenery), następnie wpisz adres e-mail, na który się zalogowałeś w polu po prawej stronie.
>> - Pod napisem "Potem" (Then) wybierz z rozwijanego menu opcję `Prześlij do`(Forward to), a następnie wprowadź docelowy adres e-mail.
>> - Kliknij na `+ Dodaj akcję`{.action} (Add an action) poniżej, a następnie wybierz `Przechowuj w skrzynce odbiorczej` (Keep in Inbox).
>> - Kliknij przycisk `Zapisz`{.action} w oknie filtra oraz w oknie ustawień.
>>
>> ![zimbra](images/zimbra_redirection03.png){.thumbnail .w-500}
>>

Więcej informacji na temat korzystania z webmaila Zimbra znajdziesz w naszym przewodniku "[Korzystanie z webmaila Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Alias <a name="alias"></a>

Utworzenie aliasu dla Twojego konta e-mail umożliwia podanie "maskowanego" adresu e-mail Twoim kontaktom bez konieczności podawania nadawcy Twojego osobistego adresu e-mail.

Alias można utworzyć w panelu klienta [OVHcloud](/links/manager). Kliknij poniższe etapy:

> [!tabs]
> **Etap 1**
>>
>> - Kliknij zakładkę `Konta e-mail`{.action} w Twojej usłudze Zimbra.
>> - Kliknij przycisk &#8942; danego konta e-mail.
>> - Kliknij na `Zmień`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-500}
>>
> **Etap 2**
>>
>> Pojawi się okno konfiguracyjne Twojego konta e-mail. Kliknij zakładkę `Alias`{.action} powyżej.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-500}
>>
> **Etap 3**
>>
>> W następnym oknie wyświetli się lista aliasów, które możesz przypisać do danego konta. Kliknij przycisk `Utwórz alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-500}
>>
> **Etap 4**
>>
>> Określ adres aliasu i wybierz jedną z domen związanych z Twoją usługą Zimbra.
>>
>> ![zimbra](images/zimbra_alias04.png){.thumbnail .w-500}
>>

### Odpowiedzi automatyczne <a name="autoreply"></a>

Kiedy musisz być nieobecny i nie masz możliwości przetworzenia e-maili, możesz ustawić wiadomość o nieobecności. Postępuj zgodnie z poniższymi instrukcjami:

- Kliknij przycisk &#9881; w prawym górnym rogu Twojego okna poczty webmail, następnie kliknij `Parametry`{.action}.

![zimbra](images/zimbra_settings01.png){.thumbnail .w-500}

- W oknie ustawień kliknij sekcję `Absent na pulpicie`.
- Zaznacz pole wyboru "Włącz automatyczne odpowiedzi w tych (zawartych) datach".
- Wypełnij datę rozpoczęcia nieobecności przed adnotacją "Od".
- Usuń zaznaczenie z pola wyboru "Bez daty zakończenia", jeśli chcesz określić i określić datę zakończenia nieobecności.
- W polu tekstowym wpisz wiadomość o nieobecności.
- Kliknij przycisk `Zapisz`{.action}, aby dokończyć uruchamianie komunikatu urlopowego.

![zimbra](images/zimbra_autoreply01.png){.thumbnail .w-500}

Więcej informacji na temat korzystania z webmaila Zimbra znajdziesz w naszym przewodniku "[Korzystanie z webmaila Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)"

## Sprawdź również <a name="go-further"></a>

[Konfiguracja konta e-mail Zimbra w programie pocztowym](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Skorzystaj z poczty Zimbra Webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ dotyczący rozwiązania Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).