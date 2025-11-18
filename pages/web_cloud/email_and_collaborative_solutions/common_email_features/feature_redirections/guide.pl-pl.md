---
title: "Korzystanie z aliasów i przekierowań e-mail"
excerpt: "Dowiedz się, jak zarządzać aliasami i przekierowaniami e-mail"
updated: 2025-06-03
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>


## Wprowadzenie

W tym przewodniku znajdziesz różne informacje i pomoce dotyczące konfiguracji Twoich **przekierowań** i **aliasów** e-maili, na przykład aby wysyłać e-maile otrzymane na adres A na adres B.

![emails](images/schema-redirect00.png){.thumbnail .w-640}

**Dowiedz się, jak zarządzać aliasami i przekierowaniami e-mail.**

/// details | Co to jest przekierowanie wiadomości e-mail?

Przekierowanie pozwala na zmianę pierwotnej podróży z jednego e-maila na jeden lub kilka innych adresów e-mail.

Na przykład chcesz, aby przy wysyłce wiadomości e-mail na adres **contact@mydomain.ovh** została ona również przekierowana na adres **john.smith@otherdomain.ovh**. Pozwala to na automatyczne przesłanie e-maila na adres **contact@mydomain.ovh** na adres **john.smith@otherdomain.ovh**.

///

/// details | Co to jest alias e-mail?

W przeciwieństwie do przekierowania, adres e-mail powiązany z aliasem nie jest adresem, który się z nim konsultuje, jest to "maska".

Utworzenie aliasu dla Twojego konta e-mail umożliwia komunikację z użytkownikami konta "maska" bez ujawniania nadawcy adresu e-mail. Jeden adres e-mail może mieć kilka aliasów.

Na przykład adres e-mail to **john.smith@mydomain.ovh** oraz alias **information@mydomain.ovh**. Możesz wówczas podać do wiadomości swoich kontaktów adres **information@mydomain.ovh** i otrzymywać e-maile na **john.smith@mydomain.ovh**, bez znajomości **john.smith@mydomain.ovh**.

///

/// details | Przekierowanie i alias <a name="diagram"></a>

Kliknij poniższe zakładki, aby uzyskać ilustrowane wyjaśnienia dotyczące działania aliasów i przekierowań.

- `From`: Oznacza adres nadawcy.
- `To`: Oznacza adres odbiorcy.
- `Redirect to`: Oznacza skonfigurowany adres e-mail przekierowania.

> [!tabs]
> **1. Przekierowanie proste**
>>
>> Wiadomość jest przesyłana bezpośrednio na adres przekierowania. Pierwotny odbiorca nie otrzymuje wiadomości.
>>
>> ![emails](images/schema-redirect01.png){.thumbnail .w-640}
>>
> **2. Przekierowanie z kopią lokalną**
>>
>> E-mail jest wysyłany do pierwotnego adresata oraz na adres przekierowania.
>>
>> ![emails](images/schema-redirect02.png){.thumbnail .w-640}
>>
> **3. Alias e-mail**
>>
>> Wiadomość e-mail jest wysyłana do aliasu, który przekierowuje ją do adresata, dla którego został skonfigurowany. Adnotacja `Received by` oznacza adres e-mail, na który wysyłany jest e-mail.
>>
>> ![emails](images/schema-redirect03.png){.thumbnail .w-640}
>>

> [!primary]
>
> Pamiętaj, że możliwa jest konfiguracja przekierowania na kilka adresów e-mail. Wiąże się to jednak z koniecznością tworzenia przekierowań pojedynczo do każdego odbiorcy.

///

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Posiadanie skonfigurowanego wcześniej rozwiązania e-mail OVHcloud, spośród następujących:
    - **MX Plan** w ofercie [pakietów hostingowych](/links/web/hosting) lub zawarta w ofercie [darmowy hosting 100M](/links/web/domains-free-hosting).
    - [Exchange](/links/web/emails).
    - [Email Pro](/links/web/email-pro).
    - [Zimbra](/links/web/emails-zimbra).

## W praktyce

Niniejszy przewodnik dotyczy wszystkich naszych usług e-mail. W zależności od oferty zarządzanie aliasami i przekierowaniami może odbywać się z poziomu Panelu klienta OVHcloud lub webmaila. Dla większej jasności w każdym rozdziale niniejszego przewodnika wymienimy typy usług e-mail. Oto różne rodzaje usług e-mail OVHcloud:

- **MX Plan Roundcube**: Pasuje do oferty MX Plan wykorzystującej interfejs webmail Roundcube.
- **MX Plan Zimbra**: Pasuje do oferty MX Plan przy użyciu webmaila Zimbra.
- **MX Plan OWA**: Pasuje do oferty MX Plan przy użyciu Webmail Outlook Web App (OWA).
- **Exchange**: Dotyczy ofert **Hosted**, **Private** i **Dedicated** Exchange korzystających z Webmail Outlook Web App (OWA).
- **Email Pro**: Usługa poczty elektronicznej oparta na bazie Exchange i korzystająca z Webmail Outlook Web App (OWA).
- **Zimbra**: Oferta dedykowana oparta na webmailu Zimbra.
- **Redirect**: Ta darmowa oferta jest automatycznie dostępna, jeśli w Panelu klienta posiadasz nazwę domeny bez przypisanej do niej oferty e-mail. Pozwala na tworzenie przekierowań e-mail.

> [!primary]
>
> Technologia poczty e-mail w usłudze MX Plan może się różnić w zależności od daty aktywacji oferty lub niedawnej migracji. Wyróżnia się przede wszystkim interfejsem webmail. Aby ją zidentyfikować w Panelu klienta, śledź tę ścieżkę:
>
> 1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
> 1. Przejdź do sekcji `Web Cloud`{.action}.
> 1. Kliknij `MX Plan`{.action}.
> 1. Wybierz odpowiednią domenę.
> 1. Zakładka `Informacje ogólne`{.action} jest zaznaczona domyślnie.
> 1. W ramce `Abonament` znajdziesz technologię oznaczoną **Webmail**.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-640}
>

**Podsumowanie**

- [Utwórz przekierowanie](#redirect)
    - [W panelu klienta](#redirect-manager)
        - [MX Plan / redirect](#redirect-manager-mxplan)
    - [Z poziomu interfejsu webmail](#redirect-webmail)
        - [Outlook Web App (OWA)](#redirect-webmail-owa)
        - [Zimbra](#redirect-webmail-zimbra)
- [Usuń przekierowanie](#redirect-delete)
    - [MX Plan w panelu klienta](#redirect-delete)
    - [Outlook Web App (OWA)](#redirect-delete-owa)
    - [Zimbra](#redirect-delete-zimbra)
- [Utwórz alias](#alias)
    - [Exchange / E-mail Pro / MX Plan](#alias-exchange-emp-mxplan)
    - [MX Plan Roundcube](#alias-mxplan-roundcube)
    - [Zimbra](#alias-mxplan-roundcube)
- [Usuń alias](#alias-delete)
    - [Exchange / E-mail Pro / MX Plan](#alias-delete-exchange-emp-mxplan)
    - [MX Plan Roundcube](#alias-delete-mxplan-roundcube)
    - [Zimbra](#alias-delete-zimbra)

### Utwórz przekierowanie <a name="redirect"></a>

### W Panelu klienta <a name="redirect-manager"></a>

Aktualnie tylko oferty **MX plan** i **redirect** posiadają interfejs zarządzania przekierowaniami w Panelu klienta OVHcloud.

#### MX Plan / redirect <a name="redirect-manager-mxplan"></a>

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Web Cloud`{.action}.
1. Kliknij opcję `MX Plan`{.action}.
1. Wybierz odpowiednią domenę.

W poniższym przykładzie mamy do czynienia z **przekierowaniem z kopią lokalną** (patrz [schemat 2](#diagram) na początku tego przewodnika). Jeśli to odpowiada Twoim potrzebom, wykonaj poniższe kroki, klikając zakładkę odpowiadającą technologii webmail używanej przez Twój MX Plan:

> [!tabs]
> **MX Plan Roundcube / MX Plan Outlook Web App / Redirect**
>>
>> Domyślnie znajdujesz się w zakładce `Informacje ogólne`{.action} usługi MX Plan. Kliknij zakładkę `E-maile`{.action}, a następnie przycisk `Zarządzanie przekierowaniami`{.action}.
>>
>> ![Emaile](images/mxplan-legacy-1.png){.thumbnail .w-640}
>>
>> Pojawi się tabela już aktywnych przekierowań. Kliknij przycisk `Dodaj przekierowanie`{.action} znajdujący się po prawej.
>>
>> ![Emaile](images/mxplan-legacy-2.png){.thumbnail .w-640}
>>
>> W formularzu `Utwórz przekierowanie`, uzupełnij następujące elementy:
>>
>> - **Z adresu**: Tutaj wpisz adres e-mail, który chcesz przekierować.
>> - **Na adres**: Tutaj wpisz docelowy adres e-mail przekierowania. Może to być jeden z Twoich adresów e-mail OVHcloud lub adres zewnętrzny.
>> - **Wybierz sposób zarządzania kopiami wiadomości**: Wybierz:
>>      - **Zachowaj kopię wiadomości e-mail w OVHcloud**: Otrzymaj e-mail na adres główny oraz na adres przekierowania (zobacz [schemat 2](#diagram) na początku tego przewodnika).
>>      - **Nie zachowuj kopii wiadomości e-mail**: E-mail zostanie wysłany bezpośrednio na adres przekierowania, bez odebrania go przez adres główny (patrz [schemat 1](#diagram) na początku tego przewodnika).
>>
>> Kliknij przycisk `Zatwierdź`{.action}, aby potwierdzić dodanie tego przekierowania.
>>
>> ![Emaile](images/mxplan-legacy-3.png){.thumbnail .w-640}
>>
>> > [!primary]
>> >
>> > Aby zmienić adres docelowy lub usunąć przekierowanie, kliknij opcję `...`{.action} z prawej strony wybranego przekierowania.
>>
> **MX Plan Zimbra**
>>
>> Domyślnie znajdujesz się w zakładce `Informacje ogólne`{.action} usługi MX Plan. Kliknij zakładkę `Przekierowania`{.action}.
>>
>> Pojawi się tabela już aktywnych przekierowań. Kliknij przycisk `Dodaj przekierowanie`{.action} znajdujący się po prawej.
>>
>> ![Emaile](images/mxplan-zimbra-1.png){.thumbnail .w-640}
>>
>> W formularzu `Utwórz przekierowanie`, uzupełnij następujące elementy:
>>
>> - **Z adresu**: Tutaj wpisz adres e-mail, który chcesz przekierować.
>> - **Na adres**: Tutaj wpisz docelowy adres e-mail przekierowania. Może to być jeden z Twoich adresów e-mail OVHcloud lub adres zewnętrzny.
>> - **Wybierz sposób zarządzania kopiami wiadomości**: Wybierz:
>>      - **Zachowaj kopię wiadomości e-mail w OVHcloud**: Otrzymaj e-mail na adres główny oraz na adres przekierowania (zobacz [schemat 2](#diagram) na początku tego przewodnika).
>>      - **Nie zachowuj kopii wiadomości e-mail**: E-mail zostanie wysłany bezpośrednio na adres przekierowania, bez odebrania go przez adres główny (patrz [schemat 1](#diagram) na początku tego przewodnika).
>>
>> Kliknij przycisk `Zatwierdź`{.action}, aby potwierdzić dodanie tego przekierowania.
>>
>> ![Emaile](images/mxplan-legacy-3.png){.thumbnail .w-640}
>>

> [!primary]
>
> Gdy wybierzesz tryb kopii "**Zachowaj kopię wiadomości e-mail w OVHcloud**", na liście przekierowań automatycznie tworzone jest przekierowanie z adresu e-mail do samego siebie. Jest to odzwierciedlenie lokalnej kopii.
>

### Z poziomu interfejsu webmail <a name="redirect-webmail"></a>

Przejdź do [webmail](/links/web/email). Wpisz **adres e-mail** i **hasło**, aby się zalogować.

![emaile](images/webmail.png){.thumbnail .w-640}

Przekierowanie jest tworzone za pomocą reguł skrzynki odbiorczej, nazywanych również "filtrami" w interfejsie webmail. Reguły, które stosujemy w momencie otrzymania wiadomości e-mail, pozwalają na przesłanie lub przekierowanie przychodzącej wiadomości e-mail.

#### Outlook Web App (OWA) <a name="redirect-webmail-owa"></a>

> [!success]
>
> Ten rozdział dotyczy następujących ofert:
>
> - **MX Plan OWA**.
> - **Exchange**.
> - **E-mail Pro**.
>

Outlook Web App jest interfejsem używanym w przypadku naszych usług **Exchange*, **E-mail Pro** i niektórych kont **MX Plan**.

Przeglądaj poniższe karty, aby skonfigurować przekierowanie za pomocą Outlook Web App:

> [!tabs]
> **Etap 1**
>>
>> Po zalogowaniu się do Twojego konta e-mail przez [webmail](/links/web/email), w prawym górnym rogu kliknij symbol koła zębatego, a następnie `Opcje`{.action}.
>>
>> ![emaile](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Etap 2**
>>
>> W lewej kolumnie okna **Opcje** przejdź do kategorii **Automatyczne przetwarzanie** w sekcji **Poczta** i kliknij `Reguły skrzynki odbiorczej i porządkowania wiadomości`{.action}.
>>
>> ![Emaile](images/emails-all-02.png){.thumbnail .w-640}
>>
>> W tym oknie możesz zarządzać przekierowaniami, a także filtrować wszystkie przychodzące wiadomości e-mail.
>>
> **Etap 3**
>>
>> W oknie zarządzania **Reguły skrzynki odbiorczej** kliknij ikonę `+`{.action} w lewym górnym rogu.
>>
>> ![Emaile](images/emails-all-03.png){.thumbnail .w-640}
>>
> **Etap 4**
>>
>> W oknie, które się wyświetli, uzupełnij następujące elementy:
>> - **Nazwa**: Określ nazwę przekierowania.
>> - **Jeśli wiadomość przychodzi i spełnia wszystkie te warunki**: Jeśli przekierowanie dotyczy wszystkich wiadomości, wybierz`[Zastosuj do wszystkich wiadomości]`{.action}.
>>
>> ![Emaile](images/emails-all-04.png){.thumbnail .w-640}
>>
> **Etap 5**
>>
>> Następnie, w tym samym oknie:
>>
>> **Wykonaj wszystkie poniższe czynności**: Przekierowanie jest wykonywane tutaj. Wybierz `Przekieruj, przekieruj lub wyślij`{.action}, następnie `Przekieruj wiadomość do...`{.action}.
>>
>> ![Emaile](images/emails-all-05.png){.thumbnail .w-640}
>>
> **Etap 6**
>>
>> Następnie podaj adres, na który chcesz przekierować e-mail przed "**Przekieruj wiadomość do ...**" i kliknij na `Zapisz`{.action}. Następnie kliknij przycisk `OK`{.action} (ikona dyskietki), aby dokończyć przekierowanie.
>>
>> ![Emaile](images/emails-all-06.png){.thumbnail .w-640}
>>

> [!primary]
>
> Aby zastosować **przekierowanie proste** (zobacz [schemat 1](#diagram) na początku tego przewodnika), dodaj w oknie kolejną regułę do **przekierowania z kopią lokalną**. Kliknij `Dodaj akcję`{.action} (pole 1), następnie `Przenieś, kopiuj lub usuń`{.action}, a na koniec kliknij `Usuń wiadomość`{.action}. Ta reguła spowoduje umieszczenie wiadomości bezpośrednio w koszu po przekierowaniu jej na adres przekierowania.
>
> ![emaile](images/emails-all-07.png){.thumbnail .w-640}
>

#### Zimbra <a name="redirect-webmail-zimbra"></a>

> [!success]
>
> Ten rozdział dotyczy następujących ofert:
>
> - **MX Plan** z opcją zimbra dla webmaila.
> - **Zimbra**.
>

Aby przekierować e-maile z Twojego konta Zimbra na inny adres e-mail, zastosujemy regułę transferu.

> [!primary]
>
> W poniższym przykładzie postanowiliśmy przekierować wszystkie przychodzące wiadomości e-mail na inny adres e-mail. Aby pokazać przykład zrzutów ekranu, zalogowaliśmy się na adres **zimbra@mydomain.ovh** i chcemy przekierować e-maile z tego konta na adres **address@example.com**.
>

Aby rozpocząć przekierowanie, wykonaj poniższe kroki:

> [!tabs]
> **Etap 1**
>>
>> Kliknij przycisk &#9881; w prawym górnym rogu Twojego okna poczty webmail i kliknij `Parametry`{.action}.
>>
>> ![Zimbra](images/zimbra_settings01.png){.thumbnail .w-640}
>>
> **Etap 2**
>>
>> Kliknij sekcję `Filtry`{.action} w oknie ustawień, następnie kliknij przycisk `Dodaj filtr`{.action}.
>>
>> ![Zimbra](images/zimbra_redirection02.png){.thumbnail .w-640}
>>
> **Etap 3**
>>
>> - Kliknij najpierw <u>Tryb zaawansowany</u> w prawym górnym rogu, aby ustawić tę regułę.
>> - Nazwij filtr w polu `Nazwa filtra`.
>> - Pozostaw menu rozwijane na `wszystkie` w zdaniu "Jeśli wiadomość przychodząca spełnia ... te warunki".
>> - W pierwszym menu rozwijanym reguł wybierz `Do` (To), pozostaw `zawiera` (contains), następnie wpisz adres e-mail, na który się zalogowałeś w polu po prawej stronie.
>> - Pod napisem "Potem" (Then) wybierz z rozwijanego menu opcję `Prześlij do` (Forward to), a następnie wprowadź docelowy adres e-mail.
>> - Kliknij na `+ Dodaj akcję`{.action} (Add an action) poniżej, a następnie wybierz `Przenieś do folderu odbioru` (Keep in Inbox).
>> - Kliknij przycisk `Zapisz`{.action} w oknie filtra oraz w oknie ustawień.
>>
>> ![Zimbra](images/zimbra_redirection03.png){.thumbnail .w-640}
>>

Więcej informacji na temat korzystania z webmaila Zimbra znajdziesz w naszym przewodniku "[Korzystanie z webmaila Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Usuń przekierowanie <a name="redirect-delete"></a>

#### MX Plan w panelu klienta <a name="redirect-delete-mxplan"></a>

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Web Cloud`{.action}.
1. Kliknij opcję `MX Plan`{.action}.
1. Wybierz odpowiednią domenę.

Wybierz poniżej zakładkę odpowiadającą technologii e-mail używanej przez Twoją usługę MX Plan:

> [!tabs]
> **MX Plan Roundcube / MX Plan OWA / Redirect**
>>
>> - Domyślnie znajdujesz się w zakładce `Informacje ogólne`{.action} usługi MX Plan.
>> - Kliknij zakładkę `E-maile`{.action}, a następnie po prawej stronie przycisk `Zarządzanie przekierowaniami`{.action}.
>>
>>    ![emaile](images/mxplan-legacy-1.png){.thumbnail .w-640}
>>
>> - Kliknij `...`{.action}, po prawej stronie wybranego przekierowania, po czym kliknij `Usuń przekierowanie`{.action}.
>>
>>    ![Emaile](images/mxplan-redirect-delete01.png){.thumbnail .w-640}
>>
> **MX Plan Zimbra**
>>
>> - Domyślnie znajdujesz się w zakładce `Informacje ogólne`{.action} usługi MX Plan.
>> - Kliknij zakładkę `Przekierowania`{.action}.
>> - Kliknij `...`{.action}, po prawej stronie wybranego przekierowania, po czym kliknij `Usuń przekierowanie`{.action}.
>>
>>    ![Emaile](images/mxplan-redirect-delete02.png){.thumbnail .w-640}
>>

#### Outlook Web App (OWA) <a name="redirect-delete-owa"></a>

Przejdź do [webmail](/links/web/email). Wpisz **adres e-mail** i **hasło**, aby się zalogować. W interfejsie Webmail OWA wykonaj kolejne kroki, klikając poniższe zakładki:

> [!tabs]
> **Etap 1**
>>
>> Po zalogowaniu się do interfejsu Webmail OWA, w prawym górnym rogu kliknij symbol koła zębatego, a następnie kliknij `Opcje`{.action}.
>>
>> ![emaile](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Etap 2**
>>
>> W lewej kolumnie okna **Opcje** przejdź do kategorii **Automatyczne przetwarzanie** w sekcji **Poczta** i kliknij `Reguły skrzynki odbiorczej i porządkowania wiadomości`{.action}.
>>
>> ![Emaile](images/owa-redirect-del-01.png){.thumbnail .w-640}
>>
>> Znajdziesz okno do zarządzania przekierowaniami i filtrami.
>>
> **Etap 3**
>>
>> W oknie zarządzania **Reguły skrzynki odbiorczej** kliknij przekierowanie, które chcesz usunąć. Musi ono być podświetlone. Następnie kliknij ikonę kosza.
>>
>> ![Emaile](images/owa-redirect-del-02.png){.thumbnail .w-640}
>>

#### Zimbra <a name="redirect-delete-zimbra"></a>

Przejdź do [webmail](/links/web/email). Wpisz **adres e-mail** i **hasło**, aby się zalogować. W interfejsie webmail Zimbra wykonaj kolejne kroki, klikając poniższe zakładki:

> [!tabs]
> **Etap 1**
>>
>> Po zalogowaniu się do interfejsu webmail Zimbra kliknij przycisk &#9881; w prawym górnym rogu Twojego okna webmail kliknij `Parametry`{.action}.
>>
>> ![Zimbra](images/zimbra_settings01.png){.thumbnail .w-640}
>>
> **Etap 2**
>>
>> Kliknij sekcję `Filtry`{.action} w oknie ustawień.
>>
>> ![Zimbra](images/zimbra_redirect-del-01.png){.thumbnail .w-640}
>>
> **Etap 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie odpowiedniego filtra, po czym kliknij `Usuń`{.action}.
>>
>> ![Zimbra](images/zimbra_redirect-del-02.png){.thumbnail .w-640}
>>

### Utwórz alias <a name="alias"></a>

Utworzenie aliasu dla Twojego konta e-mail umożliwia podanie "maskowanego" adresu e-mail Twoim kontaktom bez konieczności podawania nadawcy Twojego osobistego adresu e-mail.

### Exchange / E-mail Pro / MX Plan <a name="alias-exchange-emp-mxplan"></a>

Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`. Następnie wybierz menu w zależności od pakietu e-mail:

- **Exchange**: Przejdź do sekcji `Microsoft`{.action}, kliknij `Exchange`{.action} i wybierz odpowiednią platformę. Kliknij zakładkę `Konta e-mail`{.action}.

- **E-mail Pro**: Przejdź do sekcji `E-mail Pro`{.action}, wybierz odpowiednią platformę i kliknij zakładkę `Konta e-mail`{.action}.

- **MX Plan**: Przejdź do sekcji `MX Plan`{.action}, wybierz odpowiednią platformę, a następnie kliknij zakładkę `Konta e-mail`{.action}.

Aby dodać alias do konta e-mail, wykonaj następujące czynności:

> [!tabs]
> **Etap 1**
>>
>> W tabeli, która się wyświetli, znajdziesz kolumnę `Alias`.
>>
>> ![emaile](images/email-alias012.png){.thumbnail .w-640}
>>
> **Etap 2**
>>
>> Kliknij przycisk `...`{.action}, a następnie `Konfiguruj aliasy`{.action} (lub `Zarządzaj aliasami`{.action}).
>>
>> ![emaile](images/email-alias02.png){.thumbnail .w-640}
>>
> **Etap 3**
>>
>> Kliknij opcję `Dodaj alias`{.action}, a następnie wprowadź adres wybrany dla aliasu i zatwierdź swój wybór.
>>
>> ![emaile](images/email-alias03.png){.thumbnail .w-640}

### MX Plan Roundcube <a name="alias-mxplan-roundcube"></a>

Aby utworzyć alias dla konta e-mail MX Plan Roundcube, należy go utworzyć w taki sam sposób jak przekierowanie. Wystarczy wskazać adres e-mail, który nie istnieje w Twojej domenie i wskazać na istniejący adres. Zapoznaj się z rozdziałem [MX Plan / MX redirect](#redirect-manager-mxplan) w części "Utwórz przekierowanie" w tym przewodniku.

### Zimbra <a name="alias-mxplan-roundcube"></a>

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Web Cloud`{.action}.
1. Kliknij na `Zimbra Mail`{.action}.
1. Kliknij zakładkę `Konta e-mail`{.action} w Twojej usłudze Zimbra.

> [!tabs]
> **Etap 1**
>>
>> - Kliknij przycisk `⁝`{.action} prawej stronie wybranego konta e-mail.
>> - Kliknij na `Zmień`{.action}.
>>
>> ![Zimbra](images/zimbra_alias01.png){.thumbnail .w-640}
>>
> **Etap 2**
>>
>> Pojawi się okno konfiguracyjne Twojego konta e-mail. Kliknij zakładkę `Alias`{.action} powyżej.
>>
>> ![Zimbra](images/zimbra_alias02.png){.thumbnail .w-640}
>>
> **Etap 3**
>>
>> W następnym oknie wyświetli się lista aliasów, które możesz przypisać do danego konta. Kliknij przycisk `Utwórz alias`{.action}.
>>
>> ![Zimbra](images/zimbra_alias03.png){.thumbnail .w-640}
>>
> **Etap 4**
>>
>> Określ adres aliasu i wybierz jedną z domen związanych z Twoją usługą Zimbra.
>>
>> ![Zimbra](images/zimbra_alias04.png){.thumbnail .w-640}
>>

### Usuń alias <a name="alias-delete"></a>

### Exchange / E-mail Pro / MX Plan <a name="alias-delete-exchange-emp-mxplan"></a>

Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`. Następnie wybierz menu w zależności od pakietu e-mail:

- **Exchange**: Przejdź do sekcji `Microsoft`{.action}, kliknij `Exchange`{.action} i wybierz odpowiednią platformę. Kliknij zakładkę `Konta e-mail`{.action}.

- **E-mail Pro**: Przejdź do sekcji `E-mail Pro`{.action}, wybierz odpowiednią platformę i kliknij zakładkę `Konta e-mail`{.action}.

- **MX Plan**: Przejdź do sekcji `MX Plan`{.action}, wybierz odpowiednią platformę, a następnie kliknij zakładkę `Konta e-mail`{.action}.

W zakładce `Konta e-mail`{.action} kliknij przycisk`...`{.action} po prawej stronie danego adresu e-mail. Następnie kliknij przycisk `Skonfiguruj aliasy`{.action} (lub `Zarządzaj aliasami`{.action}).

Kliknij przycisk`...`{.action} po prawej stronie odpowiedniego aliasu w menu zarządzania aliasami. Następnie kliknij `Usuń alias`{.action}

![emaile](images/email-alias04.png){.thumbnail .w-640}

### MX Plan Roundcube <a name="alias-delete-mxplan-roundcube"></a>

Aby usunąć alias z konta e-mail MX Plan Roundcube, należy go usunąć w taki sam sposób, jak przekierowanie. W związku z tym należy przejść do interfejsu zarządzania przekierowaniami usługi MX Plan.

W zakładce `E-maile`{.action} kliknij `Zarządzanie przekierowaniami`{.action} po prawej stronie okna.

Kliknij przycisk`...`{.action} po prawej stronie wybranego przekierowania, a następnie kliknij `Usuń przekierowanie`{.action}.

> [!warning]
>
> Nie można zmienić przekierowania ani aliasu. Należy ją usunąć, a następnie utworzyć ponownie.
>

![emaile](images/email-del-legacy-redirect01.png){.thumbnail .w-640}

### Zimbra <a name="alias-delete-zimbra"></a>

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Web Cloud`{.action}.
1. Kliknij na `Zimbra Mail`{.action}.
1. Kliknij zakładkę `Konta e-mail`{.action} w Twojej usłudze Zimbra.

> [!tabs]
> **Etap 1**
>>
>> - Kliknij przycisk `⁝`{.action} prawej stronie wybranego konta e-mail.
>> - Kliknij na `Zmień`{.action}.
>>
>> ![Zimbra](images/zimbra_alias01.png){.thumbnail .w-640}
>>
> **Etap 2**
>>
>> Pojawi się okno konfiguracyjne Twojego konta e-mail. Kliknij zakładkę `Alias`{.action} powyżej.
>>
>> ![Zimbra](images/zimbra_alias02.png){.thumbnail .w-640}
>>
> **Etap 3**
>>
>> Następne okno zawiera listę aliasów, które możesz przypisać do danego konta. Kliknij przycisk `Utwórz alias`{.action}.
>>
>> ![Zimbra](images/zimbra_alias03.png){.thumbnail .w-640}
>>

## Sprawdź również <a name="go-further"></a>

[Pierwsze kroki z usługą MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Pierwsze kroki z usługą Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Pierwsze kroki z usługą Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

[Pierwsze kroki z usługą E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Pierwsze kroki z ofertą Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).