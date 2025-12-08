---
title: 'Przeniesienie kont e-mail za pomocą OVH Mail Migrator'
excerpt: 'Dowiedz się, jak przenieść konta e-mail do OVH przy użyciu narzędzia OVH Mail Migrator'
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

[OVH Mail Migrator](/links/web/omm) to narzędzie stworzone przez OVHcloud, które odpowiada na potrzebę odwracalności. Umożliwia migrowanie kont e-mail do adresów e-mail OVHcloud lub zewnętrznego serwisu e-mail. Proces obsługuje różne typy zawartości, takie jak e-maile, kontakty, kalendarze i zadania, o ile są one kompatybilne z Twoimi adresami e-mail.

**Dowiedz się, jak migrować swoje konta e-mail do OVHcloud przy użyciu naszego narzędzia OVH Mail Migrator.**

## Wymagania początkowe

- Posiadanie zewnętrznego serwisu e-mail lub serwisu OVHcloud, takiego jak oferta [Zimbra](/links/web/zimbra), [Exchange](/links/web/emails), [E-mail Pro](/links/web/email-pro) lub MX Plan (za pośrednictwem samej oferty MX Plan lub oferty [hostingu OVHcloud](/links/web/hosting)).
- Posiadanie identyfikatorów kont e-mail, które chcesz zmiigrować (konta źródłowe).
- Posiadanie identyfikatorów kont e-mail docelowych.

## W praktyce

Aby uzyskać dostęp do OMM, przejdź na adres <omm.ovhcloud.com>

![omm](images/omm-01.png){.thumbnail .w-600}

### Tworzenie projektu migracji <a name="create-project"></a>

Przed uruchomieniem migracji należy utworzyć projekt. Projekt pozwoli Ci uruchomić jedną lub więcej migracji i śledzić je.

Kliknij `New migration`{.action}, aby rozpocząć tworzenie projektu:

**Project contact email**: Wprowadź adres e-mail, który będzie służył do otrzymywania identyfikatorów i powiadomień o śledzeniu migracji. Nie zaleca się podawania jednego z adresów e-mail, które zostaną zmiigrowane w Twoim projekcie.
**Project password**: Wprowadź hasło, które będzie służyć do logowania się do projektu. Musi zawierać co najmniej 10 znaków, w tym co najmniej 1 znak specjalny, 1 cyfrę, 1 wielką literę i 1 małą literę.

Kliknij `Create my project`{.action}, aby rozpocząć tworzenie projektu.

Na adres e-mail kontaktowy projektu otrzymasz wiadomość e-mail z potwierdzeniem zawierającą unikalny identyfikator projektu i link do jego otwarcia.

![omm](images/omm-create-project-01.png){.thumbnail .w-600}

> [!primary]
>
> Projekt migracji oraz dane z nim powiązane zostaną automatycznie usunięte po 60 dniach nieaktywności.

### Tworzenie migracji <a name="create-migration"></a>

Po utworzeniu projektu zaloguj się do niego. z strony głównej [OMM](/links/web/omm):

- Kliknij `Track a migration`{.action}.
- Wprowadź `Project ID` received by email otrzymany przez e-mail.
- Wprowadź `Project password` ustawione podczas jego tworzenia.
- Kliknij `Connect to project`{.action}, aby zakończyć.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Teraz jesteś na stronie głównej projektu, która pozwoli Ci uruchomić swoją pierwszą migrację.

- Kliknij `New migration`{.action} w lewym górnym rogu tabeli.

![omm](images/omm-create-migration-02.png){.thumbnail .w-600}

Wyświetlana jest nowa strona, na której zdefiniujesz informacje o połączeniu z kontem źródłowym i kontem docelowym, aby zaplanować lub uruchomić bezpośrednio tę migrację. Pamiętaj, że zawartość **source account** zostanie zmiigrowana do **destination account**.

Przed rozpoczęciem migracji ważne jest, aby dobrze znać 3 typy kont, które można zmiigrować i do których można je zmiigrować:

- **OVHcloud** : `Auto detection` jest zalecane, jeśli musisz zmiigrować konto hostowane na dowolnej ofercie e-mail OVHcloud. Jeśli posiadasz dużą liczbę kont e-mail OVHcloud, wybierz spośród ofert `MX Plan`, `E-mail Pro`, `Exchange` i `Zimbra`. Będziesz musiał zalogować się do konta OVHcloud powiązanego z ofertą powiązaną z migracją. Aby uzyskać więcej informacji, zapoznaj się z sekcją « [Migrowanie za pomocą połączenia z kontem klienta OVHcloud](#sso-migration) ».
- **Others**: odnoszą się one do usług e-mail zakupionych poza OVHcloud, znajdziesz tam niekompletną listę usług e-mail obsługiwanych przez OMM. Jeśli typ usługi Twojego konta e-mail nie jest wymieniony, użyj protokołów `Imap` lub `Pop`, które są kompatybilne z większością serwerów e-mail.
- **Importing files**: Możesz zmiigrować zawartość plików PST, ICS, CSV i Xml Rules za pomocą OMM do konta e-mail docelowego. Gdy ta funkcja jest wybrana, wystarczy przeciągnąć i upuścić swój dokument w odpowiedniej strefie lub przejść do terminala za pomocą przycisku `Browse your files`{.action}.

![omm](images/omm-create-migration-03.png){.thumbnail .w-600}

Uzupełnij informacje zgodnie z typem konta:

- **Source account**
    - **Account type** : wybierz typ konta źródłowego.
    - **E-mail** : wprowadź adres e-mail konta źródłowego.
    - **Password** : wprowadź hasło do konta źródłowego.
    - **Server URL** / **Server domain** *(w zależności od typu)*: wprowadź nazwę hosta serwera e-mail powiązanego z kontem e-mail, który chcesz zmiigrować.
    - **OVHcloud Account ID** *(w zależności od typu)*: to pole jest automatycznie wypełniane, gdy jesteś zalogowany do konta OVHcloud. Aby uzyskać więcej informacji, zapoznaj się z sekcją « [Migrowanie za pomocą połączenia z kontem klienta OVHcloud](#sso-migration) ».
    - **Organization** *(w zależności od typu)*: wybierz organizację powiązaną z kontem e-mail źródłowym.
    - **Platform** *(w zależności od typu)*: wybierz platformę powiązaną z kontem e-mail źródłowym.
    - **Service** *(w zależności od typu)*: wybierz usługę powiązaną z kontem e-mail źródłowym.
    - **Advanced settings** > **Delegation account ID** *(w zależności od typu)*: Gdy konto e-mail, które migrujesz, jest kontem współdzielonym, musisz wprowadzić adres e-mail konta administratora na tym koncie delegowanym.
- **Destination account**
    - **Account type** : wybierz typ konta docelowego.
    - **E-mail** : wprowadź adres e-mail docelowy.
    - **Password** : wprowadź hasło powiązane z kontem docelowym.
    - **Server URL** / **Server domain** *(w zależności od typu)*: wprowadź nazwę hosta serwera e-mail powiązanego z kontem e-mail docelowym.
    - **OVHcloud Account ID** *(w zależności od typu)*: to pole jest automatycznie wypełniane, gdy jesteś zalogowany do konta OVHcloud. Aby uzyskać więcej informacji, zapoznaj się z sekcją « [Migrowanie za pomocą połączenia z kontem klienta OVHcloud](#sso-migration) ».
    - **Organization** *(w zależności od typu)*: wybierz organizację powiązaną z kontem e-mail docelowym.
    - **Platform** *(w zależności od typu)*: wybierz platformę powiązaną z kontem e-mail docelowym.
    - **Service** *(w zależności od typu)*: wybierz usługę powiązaną z kontem e-mail docelowym.
    - **Advanced settings** > **Delegation account ID** *(w zależności od typu)*: Gdy konto e-mail docelowe jest kontem współdzielonym, musisz wprowadzić adres e-mail konta administratora na tym koncie delegowanym.
- **Start of transfer**: Możesz uruchomić migrację `natychmiast` lub zaznaczyć `Później`, aby odłożyć migrację. Odłożona migracja pozwala na automatyczne uruchomienie jej w wyznaczonym przez Ciebie dniu i godzinie.
- **Data to transfer**: W zależności od typu konta e-mail, który migrujesz, i konta docelowego, ta sekcja poinformuje Cię o różnych typach danych obsługiwanych podczas migracji. Zależy to od konta źródłowego i konta docelowego.

![omm](images/omm-create-migration-04.png){.thumbnail .w-600}

> [!warning]
>
> Jeśli migrujesz konto z funkcjami, których konto docelowe nie posiada, będzie konieczne ręczne zapisanie elementów, które nie mogą być zmiigrowane przez OMM. Aby Ci pomóc, skorzystaj z naszego poradnika « [Ręczne migrowanie adresu e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) ».

Po uzupełnieniu parametrów konta źródłowego i docelowego kliknij:

- `Migrate and add another account`{.action}, jeśli chcesz dodać kolejną migrację do listy swojego projektu 
- `Migrate my account`{.action}, aby uruchomić skonfigurowaną migrację i wrócić do strony głównej projektu.

### Migrowanie za pomocą połączenia z kontem klienta OVHcloud <a name="sso-migration"></a>

Podczas migracji do lub z konta OVHcloud możesz wybrać jedną z naszych ofert `MX Plan`, `E-mail Pro`, `Exchange` i `Zimbra`.

![omm](images/omm-migration-sso-00.png){.thumbnail .w-300}

Gdy wybierzesz jedną z tych ofert, wykonaj poniższe kroki:

> [!tabs]
> **Krok 1**
>>
>> - Kliknij `Login`{.action}, aby wyświetlić okno logowania do przestrzeni klienta OVHcloud.
>>
>> ![omm](images/omm-migration-sso-01.png){.thumbnail .w-600}
>>
> **Krok 2**
>>
>> Zaloguj się do konta klienta OVHcloud:
>>
>> - Wprowadź identyfikator lub adres e-mail powiązany z kontem OVHcloud, wprowadź hasło i kliknij `Login`{.action}.
>> - Kliknij `Continue`{.action}, jeśli jesteś już zalogowany.
>>
>> > [!primary]
>> >
>> > Konto klienta OVHcloud musi być powiązane z ofertą e-mail, która jest przedmiotem migracji.
>>
>> ![omm](images/omm-migration-sso-02.png){.thumbnail .w-600}
>>
> **Krok 3**
>>
>> - Wyświetlane jest nowe okno, które umożliwia udzielenie OMM uprawnień do dostępu do funkcji Twojej przestrzeni klienta, które wymieniają oferty i konta e-mail. Domyślnie ważność (Validity) tych uprawnień wynosi 24h (1 dzień). Ustaw czas trwania, który Ci odpowiada, a następnie kliknij `Authorize`{.action}.
>>
>> ![omm](images/omm-migration-sso-03.png){.thumbnail .w-600}
>>
> **Krok 4**
>>
>> - Teraz będziesz mógł wybrać swoje usługi i konta za pomocą rozwijanych list, co ułatwi wyszukiwanie elementów i uniknięcie błędów wpisywania. Musisz jednak wprowadzić hasło powiązane z wybranym kontem e-mail.
>>
>> Przykład z usługą Zimbra:
>>
>> ![omm](images/omm-migration-sso-04.png){.thumbnail .w-600}

> [!warning]
>
> Możesz odłączyć bieżące połączenia z przestrzeni klienta OVHcloud, klikając `Log out`{.action}, a następnie pod spodem przy wzmiance `OVHcloud account ID` kliknij `Log out the account`{.action}.
>
> ![omm](images/omm-migration-sso-05.png){.thumbnail .w-300}

### Śledzenie projektu migracji <a name="follow-migration"></a>

Istnieją dwa sposoby uzyskania dostępu do śledzenia projektu migracji:

- Z wiadomości e-mail otrzymanej podczas tworzenia projektu. Znajdziesz tam link umożliwiający dostęp do strony logowania do projektu z `Continue`{.action} wstępnie wypełnionym, jedynie `Project password` należy wpisać.
- Z strony głównej OMM, kliknij `Track a migration`{.action}. Wprowadź swoje `Project ID` i swoje `Project password`.

Kliknij następnie `Connect to project`{.action}, aby przejść do strony głównej projektu i śledzić swoje migracje.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Z tej strony otrzymasz listę migracji w toku lub zaplanowanych. Status projektu również wyświetla się po prawej stronie.

Kliknij przycisk `⋮`{.action} po prawej stronie wiersza migracji, aby wyświetlić opcje:

- `See more details`{.action} : Przekierowuje Cię do strony, na której możesz śledzić postęp migracji lub przeczytać raport po jej zakończeniu
- `Cancel migration`{.action}: Pozwala anulować bieżącą migrację. Elementy już zmiigrowane zostaną zachowane na koncie docelowym.
- `Delete migration data (GDPR)`{.action}: ta opcja uruchamia usunięcie wszystkich danych związanych z migracją konta. Nadal zachowujesz informacje dotyczące zdarzeń, które miały miejsce podczas migracji.

![omm](images/omm-migration-follow-02.png){.thumbnail .w-600}

Przykład śledzenia migracji:

![omm](images/omm-migration-follow-03.png){.thumbnail .w-600}

> [!primary]
>
> Jeśli podczas migracji wystąpi błąd, w oknie `See more details`{.action} otrzymasz link do dziennika błędów.

## Krok w przyszłość

[Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)

[Przeniesienie adresu e-mail MX Plan na konto E-mail Pro lub Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

W przypadku usług specjalistycznych (SEO, programowanie, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz uzyskać wsparcie w zakresie użytkowania i konfiguracji Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami wsparcia](/links/support).

Przyłącz się do [społeczności użytkowników](/links/community).