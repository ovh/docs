---
title: 'Migrowanie kont e-mailowych za pomocą OVHcloud Mail Migrator'
excerpt: 'Dowiedz się, jak przenieść swoje konta e-mail do OVHcloud, korzystając z naszego narzędzia OVHcloud Mail Migrator'
updated: 2025-11-25
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Wprowadzenie

[Narzędzie OVHcloud Mail Migrator](/links/web/omm) zostało stworzone przez OVHcloud, aby spełnić potrzebę odwracalności. Umożliwia ono migrację kont e-mailowych do adresów e-mail w OVHcloud lub zewnętrznego usługi poczty e-mail. Proces obsługuje różne typy treści, takie jak wiadomości e-mail, kontakty, kalendarze i zadania, o ile są one kompatybilne z Twoimi adresami e-mail.

**Dowiedz się, jak przenieść swoje konta e-mail do OVHcloud, korzystając z naszego narzędzia OVHcloud Mail Migrator.**

## Wymagania początkowe

- Posiadaj zewnętrzny serwis poczty e-mail lub jeden z oferowanych przez OVHcloud, takich jak [Zimbra](/links/web/zimbra), [Exchange](/links/web/emails), [E-mail Pro](/links/web/email-pro) lub MX Plan (za pośrednictwem oferty MX Plan lub uwzględniony w ofercie [OVHcloud Hosting](/links/web/hosting)).
- Posiadaj dane logowania do kont e-mailowych, które chcesz przenieść (konta źródłowe).
- Posiadaj dane logowania do kont e-mailowych docelowych.

## W praktyce

Aby uzyskać dostęp do OMM, przejdź na <https://omm.ovhcloud.com/>.

![omm](images/omm-01.png){.thumbnail .w-600}

### Tworzenie projektu migracji <a name="create-project"></a>

Przed rozpoczęciem migracji konieczne jest utworzenie projektu. Ten projekt pozwoli Ci rozpocząć jedną lub więcej migracji i śledzić je.

Kliknij `New migration`{.action}, aby rozpocząć tworzenie projektu.

**Adres e-mail kontaktowy projektu**: Wprowadź adres e-mail, który zostanie użyty do otrzymywania danych logowania i powiadomień o śledzeniu Twoich migracji. Nie zaleca się wprowadzania jednego z adresów e-mail, które zostaną przeniesione w ramach projektu.
**Hasło projektu**: Wprowadź hasło, które zostanie użyte do połączenia się z Twoim projektem. Musi ono zawierać co najmniej 10 znaków i zawierać co najmniej 1 znak specjalny, 1 cyfrę, 1 wielką literę i 1 małą literę.

Kliknij `Create my project`{.action}, aby rozpocząć tworzenie projektu.

Na adres e-mail kontaktowy projektu otrzymasz wiadomość e-mail potwierdzającą zawierającą unikalny identyfikator projektu i link do jego otwarcia.

![omm](images/omm-create-project-01.png){.thumbnail .w-600}

> [!primary]
>
> Jeśli nie będzie żadnej aktywności przez 60 dni, projekt migracji i wszystkie powiązane z nim dane zostaną automatycznie usunięte.

### Tworzenie nowej migracji <a name="create-migration"></a>

Po utworzeniu projektu zaloguj się do niego z [strony głównej OMM](/links/web/omm):

- Kliknij `Track a migration`{.action}.
- Wprowadź `Project ID` otrzymany przez e-mail.
- Wprowadź `Project password` ustawione podczas jego tworzenia.
- Kliknij `Connect to project`{.action}, aby ukończyć.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Teraz jesteś na stronie głównej projektu, która pozwoli Ci rozpocząć pierwszą migrację.

- Kliknij `New migration`{.action} w lewym górnym rogu tabeli.

![omm](images/omm-create-migration-02.png){.thumbnail .w-600}

Na nowej stronie, która się pojawi, wprowadź dane logowania konta źródłowego i konta docelowego, aby zaplanować migrację lub rozpocząć ją od razu. Dla przypomnienia, zawartość **source account** zostanie przeniesiona do **destination account**.

Przed rozpoczęciem migracji ważne jest, aby wiedzieć o trzech typach kont, które można przenieść i gdzie można je przenieść:

- **OVHcloud**: Opcja `Autodetect` jest zalecana, jeśli musisz przenieść konto hostowane na jednej z ofert poczty e-mail OVHcloud. Jeśli masz dużą liczbę kont poczty e-mail OVHcloud, wybierz jedną z poniższych ofert: `MX plan`, `E-mail Pro`, `Exchange` lub `Zimbra`. Będziesz musiał zalogować się do konta OVHcloud powiązanego z ofertą dotyczącą migracji. Aby uzyskać więcej informacji, zobacz sekcję "[Migrowanie za pomocą połączenia z kontem klienta OVHcloud](#sso-migration)".
- **Others**: Są to usługi poczty e-mail subskrybowane poza OVHcloud. Dostępna jest niekompletna lista usług poczty e-mail obsługiwanych przez OMM. Jeśli typ usługi Twojego konta e-mail nie znajduje się na liście, użyj protokołów `IMAP` lub `POP`, kompatybilnych z większością serwerów poczty e-mail.
- **Importing files**: Możliwe jest przeniesienie zawartości plików PST, ICS, CSV i XML Rules przez OMM do konta poczty e-mail docelowego. Gdy ta funkcja zostanie wybrana, po prostu przeciągnij i upuść swój dokument do wyznaczonej strefy lub przejdź do terminala za pomocą przycisku `Browse your files`{.action}.

![omm](images/omm-create-migration-03.png){.thumbnail .w-600}

Uzupełnij informacje zgodnie z typem konta:

- **Source account**
    - **Account type**: Wybierz typ konta źródłowego.
    - **E-mail**: Wprowadź adres e-mail konta źródłowego.
    - **Password**: Wprowadź hasło do konta źródłowego.
    - **Server URL** / **Server domain** *(w zależności od typu)*: Wprowadź nazwę hosta serwera poczty e-mail powiązanego z kontem e-mail, którego chcesz przenieść.
    - **OVHcloud Account ID** *(w zależności od typu)*: To pole jest automatycznie wypełniane, gdy jesteś połączony z kontem OVHcloud. Aby uzyskać więcej informacji, zobacz sekcję "[Migrowanie za pomocą połączenia z kontem klienta OVHcloud](#sso-migration)".
    - **Organization** *(w zależności od typu)*: Wybierz organizację powiązaną z kontem e-mail źródłowym.
    - **Platform** *(w zależności od typu)*: Wybierz platformę powiązaną z kontem e-mail źródłowym.
    - **Service** *(w zależności od typu)*: Wybierz usługę powiązaną z kontem e-mail źródłowym.
    - **Advanced settings** > **Delegation account ID** *(w zależności od typu)*: Gdy konto e-mail, które przenosisz, jest kontem udostępnionym, musisz wprowadzić adres e-mail konta administratora na tym koncie delegującym.<br><br>

- **Destination account**
    - **Account type**: Wybierz typ konta docelowego.
    - **E-mail**: Wprowadź adres e-mail docelowy.
    - **Password**: Wprowadź hasło powiązane z kontem docelowym.
    - **Server URL** / **Server domain** *(w zależności od typu)*: Wprowadź nazwę hosta serwera poczty e-mail powiązanego z kontem e-mail docelowym.
    - **OVHcloud Account ID** *(w zależności od typu)*: To pole jest automatycznie wypełniane, gdy jesteś połączony z kontem OVHcloud. Aby uzyskać więcej informacji, zobacz sekcję "[Migrowanie za pomocą połączenia z kontem klienta OVHcloud](#sso-migration)".
    - **Organization** *(w zależności od typu)*: Wybierz organizację powiązaną z kontem e-mail docelowym.
    - **Platform** *(w zależności od typu)*: Wybierz platformę powiązaną z kontem e-mail docelowym.
    - **Service** *(w zależności od typu)*: Wybierz usługę powiązaną z kontem e-mail docelowym.
    - **Advanced settings** > **Delegation account ID** *(w zależności od typu)*: Gdy konto e-mail docelowe jest kontem udostępnionym, musisz wprowadzić adres e-mail konta administratora na tym koncie delegującym.<br><br>

- **Start of transfer**: Możesz rozpocząć migrację `Immediately` lub zaznaczyć `Later`, aby odłożyć ją. Odłożona migracja pozwala na jej automatyczne rozpoczęcie w dniu i godzinie, które określisz.
- **Data to transfer**: W zależności od typu konta e-mail, którego przenosisz, i konta docelowego, ta sekcja wskazuje różne typy danych obsługiwane podczas migracji. To zależy od konta źródłowego i konta docelowego.

![omm](images/omm-create-migration-04.png){.thumbnail .w-600}

> [!warning]
>
> Jeśli przenosisz konto, które ma funkcje, których konto docelowe nie posiada, **będziesz musiał samodzielnie zapisać elementy, które nie mogą zostać przeniesione przez OMM**. Aby Ci w tym pomóc, zapoznaj się z naszym przewodnikiem "[Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

Po uzupełnieniu ustawień konta źródłowego i docelowego kliknij:

- `Migrate and add another account`{.action}, jeśli chcesz dodać kolejną migrację do listy projektu.
- `Migrate my account`{.action}, aby rozpocząć skonfigurowaną migrację i wrócić do strony głównej projektu.

### Migrowanie za pomocą połączenia z kontem klienta OVHcloud <a name="sso-migration"></a>

Przy migracji do lub z konta OVHcloud możesz wybrać jedną z naszych ofert `MX plan`, `E-mail Pro`, `Exchange` lub `Zimbra`.

![omm](images/omm-migration-sso-00.png){.thumbnail .w-300}

Gdy wybierzesz jedną z tych ofert, wykonaj poniższe kroki:

> [!tabs]
> **Krok 1**
>>
>> - Kliknij `Login`{.action}, aby wyświetlić okno logowania do Panelu klienta OVHcloud.
>>
>> ![omm](images/omm-migration-sso-01.png){.thumbnail .w-600}
>>
> **Krok 2**
>>
>> Zaloguj się do konta klienta OVHcloud:
>>
>> - Wprowadź identyfikator lub adres e-mail powiązany z kontem OVHcloud, wprowadź odpowiednie hasło i kliknij `Login`{.action};
>> - lub kliknij `Continue`{.action}, jeśli był już zidentyfikowany.
>>
>> > [!primary]
>> >
>> > Konto klienta OVHcloud musi być powiązane z ofertą poczty e-mail, która jest przedmiotem migracji.
>>
>> ![omm](images/omm-migration-sso-02.png){.thumbnail .w-600}
>>
> **Krok 3**
>>
>> - Pojawia się nowe okno. Pozwala ono na udzielenie OMM uprawnień do dostępu do funkcji Twojej strefy klienta, a także na wyświetlenie ofert i kont pocztowych. Domyślnie ważność (Validity) tych uprawnień wynosi 24 godziny (1 dzień). Ustaw okres ważności, który Ci odpowiada, a następnie kliknij `Authorize`{.action}.
>>
>> ![omm](images/omm-migration-sso-03.png){.thumbnail .w-600}
>>
> **Krok 4**
>>
>> - Możesz teraz wybrać swoje usługi i konta z użyciem rozwijanych list. Umożliwia to łatwe wyszukiwanie elementów i uniknięcie błędów wpisywania. Należy jednak wpisać hasło powiązane z wybranym kontem e-mail.
>>
>> Przykład z usługą Zimbra:
>>
>> ![omm](images/omm-migration-sso-04.png){.thumbnail .w-600}

> [!warning]
>
> Możesz wylogować bieżące połączenia z Panelu klienta OVHcloud, klikając `Log out`{.action}, a następnie pod spodem przy wzmiance `OVHcloud account ID`, kliknij `Log out of the account`{.action}.
>
> ![omm](images/omm-migration-sso-05.png){.thumbnail .w-300}

### Śledzenie projektu migracji <a name="follow-migration"></a>

Istnieją dwa sposoby uzyskania dostępu do śledzenia projektu migracji:

- W wiadomości e-mail otrzymanej podczas tworzenia projektu znajdziesz link, który pozwala na dostęp do strony logowania do projektu z wstępnie wypełnionym `Project ID`. Wystarczy wprowadzić `Project password`.
- Z [strony głównej OMM](/links/web/omm) kliknij `Track a migration`{.action}. Następnie wprowadź swoje `Project ID` i swoje `Project password`.

Kliknij `Connect to project`{.action}, aby uzyskać dostęp do strony głównej projektu i śledzić swoje migracje.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Na tej stronie znajdziesz listę trwających lub zaplanowanych migracji. Status projektu również pojawia się po prawej stronie.

Kliknij przycisk `⋮`{.action} po prawej stronie wiersza migracji, aby wyświetlić opcje:

- `See more details`{.action}: Zostaniesz przekierowany do strony umożliwiającej śledzenie postępu migracji i odczyt raportu po zakończeniu migracji.
- `Cancel migration`{.action}: Pozwala to na anulowanie trwającej migracji. Przemieszczone elementy zostaną nadal na koncie docelowym.
- `Delete migration data (GDPR)`{.action}: Ta opcja uruchamia usunięcie wszystkich danych związanych z migracją konta. Nadal zachowasz informacje dotyczące zdarzeń, które miały miejsce podczas migracji.

![omm](images/omm-migration-follow-02.png){.thumbnail .w-600}

Przykład śledzenia migracji:

![omm](images/omm-migration-follow-03.png){.thumbnail .w-600}

> [!primary]
> 
> Jeśli podczas migracji wystąpi błąd, link do logu błędu zostanie wyświetlony w oknie `See more details`{.action}.

## Sprawdź również

[Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)

[Migracja konta e-mail MX Plan na konto E-mail Pro lub Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).