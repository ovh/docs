---
title: "Zimbra Pro - Konfiguracja konta e-mail za pomocą ActiveSync w programie Outlook na Androida"
excerpt: "Dowiedz się, jak skonfigurować Twoje konto e-mail Zimbra Pro w aplikacji mobilnej Outlook dla Androida przy użyciu protokołu ActiveSync"
updated: 2025-07-03
---

<style>
.h-500 {
  max-height:500px !important;
}
</style>

## Wprowadzenie

> [!primary]
> Ten przewodnik jest przeznaczony dla klientów posiadających usługi e-mail [Zimbra Pro](/links/web/emails-zimbra). Usługa będzie dostępna w fazie beta od lipca 2025.

Konta Zimbra Pro można skonfigurować na urządzeniu z systemem Android przy użyciu protokołu ActiveSync. Dzięki temu skonfigurujesz wszystkie funkcje pracy zespołowej dla Twojego konta e-mail za jednym razem. Aplikacja Outlook firmy Microsoft na urządzenia z systemem Android jest dostępna bezpłatnie w sklepie Google Play.

**Dowiedz się, jak skonfigurować Twoje konto e-mail Zimbra Pro w aplikacji mobilnej Outlook dla Androida przy użyciu protokołu ActiveSync.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Twoim obowiązkiem jest zapewnienie właściwego funkcjonowania tych usług.
>
> Ten przewodnik ma na celu pomóc w wykonywaniu typowych zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [partnerem wyspecjalizowanym](/links/partner) i/lub skontaktowanie się z wydawcą usługi. Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji zawiera sekcja "[Sprawdź również](#go-further)" w tym przewodniku.

## Wymagania początkowe

- Posiadanie adresu e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Posiadanie [aplikacji Outlook](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=pl) na urządzeniu z systemem Android.
- Dane do logowania do konta e-mail, które chcesz skonfigurować.

> [!primary]
>
> Niniejszy przewodnik został stworzony na urządzeniu korzystającym z wersji 14 systemu Android.

## W praktyce

### Dodaj konto <a name="add-account"></a>

- **Podczas pierwszego uruchomienia aplikacji Outlook** pojawi się asystent konfiguracji:
    - Kliknij `Dodaj konto`{.action}.

  ![Outlook Android](images/outlook-app-android-add01.png){.thumbnail .h-500}

- **Jeśli konto jest już skonfigurowane w aplikacji Outlook**:
    - Naciśnij kopertę (`✉` {.action}) w lewym górnym rogu ekranu.
    - Następnie naciśnij przycisk `+`{.action} w lewym pionowym pasku.
    - Kliknij `Dodaj konto`{.action}.

  ![Outlook Android](images/outlook-app-android-add02.png){.thumbnail .h-500}

Postępuj zgodnie z kolejnymi instrukcjami zawartymi w **3** zakładkach:

> [!tabs]
> **Etap 1**
>>
>> Wpisz swój adres e-mail i naciśnij przycisk `Kontynuuj`{.action}.
>>
>> ![Outlook Android](images/outlook-app-android-add-step01.png){.thumbnail .h-500}
>>
> **Etap 2**
>>
>> ![Outlook Android](images/zimbra-activesync-outlook-android03.png){.thumbnail .h-500}
>>
>> - Wybierz **Exchange** z listy typów kont.
>> - **Lub**, jeśli otrzymasz okno z prośbą o wybranie protokołu **IMAP** lub **POP3**, naciśnij dowolny z nich. W kolejnym oknie naciśnij przycisk `?`{.action} w prawym górnym rogu ekranu, następnie wybierz `Zmień dostawcę konta`{.action}. Następnie wybierz `Exchange`.
>>
>> ![Outlook Android](images/outlook-app-android-add-step021.png){.thumbnail .h-500}
>>
> **Etap 3**
>>
>> W kolejnym oknie zaznacz `Ustawienia zaawansowane`{.action} i uzupełnij następujące informacje:
>>
>> - **Adres e-mail**: Wpisz pełny adres e-mail.
>> - **Opis**: Wprowadź nazwę pozwalającą odróżnić to konto od Twoich pozostałych kont e-mail zarejestrowanych w programie Outlook.
>> - **Serwer**: Wpisz "zimbra1.mail.ovh.net".
>> - **Domena**: Pozostaw to pole puste.
>> - **Nazwa użytkownika**: Wpisz pełny adres e-mail.
>>
>> Aby zakończyć konfigurację, naciśnij przycisk " &#10003;".
>>
>> ![Outlook Android](images/outlook-app-android-add-step03.png){.thumbnail .h-500}
>>

### Użyj adresu e-mail

Po skonfigurowaniu adresu e-mail możesz zacząć z niego korzystać! Teraz możesz wysyłać i odbierać wiadomości, a także zarządzać kalendarzami i zadaniami.

OVHcloud oferuje również aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Możesz zalogować się do [webmail OVHcloud](/links/web/email) za pomocą identyfikatora Twojego konta e-mail. Jeśli masz pytania dotyczące korzystania z tej usługi, zapoznaj się z przewodnikiem "[Korzystanie z poczty Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Jak zmienić istniejące ustawienia? <a name="modify-settings"></a>

Aplikacja Outlook nie pozwala na zmianę ustawień serwera dla Twojego konta e-mail.

Jeśli Twoje konto e-mail jest już skonfigurowane i chcesz zmienić jego ustawienia, musisz je usunąć i utworzyć ponownie:

1. Naciśnij kopertę (`✉`{.action}) w lewym górnym rogu ekranu.
2. Stuknij ikonę dopasowania (`⛭`{.action}) w dolnej części lewej kolumny.
3. W sekcji "Ogólne" kliknij `Konta`, aby wyświetlić wszystkie adresy e-mail skonfigurowane w aplikacji.

  ![Outlook Android](images/outlook-app-android-delete-account-01.png){.thumbnail .h-500}

4. Wybierz odpowiednie konto e-mail.
5. Kliknij `Usuń konto`{.action}.
6. Naciśnij przycisk `Usuń`{.action}, gdy pojawi się pytanie "Czy chcesz usunąć konto?".

  ![Outlook Android](images/outlook-app-android-delete-account-02.png){.thumbnail .h-500}

> [!success]
>
> Po usunięciu konta e-mail wykonaj kroki instalacji wskazane w "[Dodaj konto](#add-account)" w tym przewodniku.

## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Aby uzyskać więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Outlook na urządzeniu z systemem Android, zobacz [centrum pomocy Microsoft](https://support.microsoft.com/pl-pl/office/konfigurowanie-poczty-e-mail-w-aplikacji-outlook-dla-systemu-android-886db551-8dfa-4fd5-b835-f8e532091872).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).