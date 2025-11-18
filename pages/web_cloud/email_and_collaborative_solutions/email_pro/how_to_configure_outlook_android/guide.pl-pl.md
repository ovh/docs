---
title: "E-mail Pro - Konfiguracja konta e-mail w programie Outlook na urządzeniu z systemem Android"
excerpt: "Dowiedz się, jak skonfigurować konto E-mail Pro w aplikacji Adroid przy użyciu aplikacji Microsoft Outlook"
updated: 2025-08-18
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Wprowadzenie

Konta E-mail Pro mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji. Aplikacja Outlook firmy Microsoft na urządzenia z systemem Android jest dostępna bezpłatnie w sklepie Google Play.

**Dowiedz się, jak skonfigurować konto E-mail Pro na urządzeniu z systemem Android przy użyciu aplikacji Microsoft Outlook.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywają na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner) i/lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.

## Wymagania początkowe

- Wykupienie usługi [E-mail Pro](/links/web/email-pro).
- Instalacja aplikacji Outlook na urządzeniu przenośnym [Android](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=pl).
- Dane do logowania do konta e-mail, które chcesz skonfigurować.

## W praktyce

### Dodaj konto <a name="add-account"></a>

> [!warning]
>
> W naszych przykładach używamy określenia serwer: pro?.mail.ovh.net. Należy zastąpić "?" cyfrą wskazującą serwer Twojej usługi E-mail Pro.
>
> Znajdziesz tę cyfrę w [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Web Cloud`{.action}, a następnie `E-mail Pro`{.action}. Nazwa serwera jest widoczna w ramce **Połączenie** w zakładce `Informacje ogólne`{.action}.

- **Podczas pierwszego uruchomienia aplikacji** : wyświetli się asystent konfiguracji, po czym kliknij `Dodaj konto`{.action}.

![Outlook Android Email Pro](images/outlook-app-android-add01.png){.thumbnail .w-400 .h-600}

- **Jeśli konto zostało już skonfigurowane**:
    - Naciśnij karnację " &#9993;" w lewym górnym rogu ekranu.
    - Następnie naciśnij przycisk `+`{.action} w lewym pionowym pasku.
    - Kliknij `Dodaj konto`{.action}.

![Outlook Android Email Pro](images/outlook-app-android-add02.png){.thumbnail .w-400 .h-600}

Postępuj zgodnie z kolejnymi instrukcjami, klikając poniższe zakładki:

> [!tabs]
> **Etap 1**
>>
>> Wpisz swój adres e-mail i naciśnij przycisk `Kontynuuj`{.action}.
>>
>> ![Outlook Android Email Pro](images/outlook-app-android-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Etap 2**
>>
>> Wybierz protokół odbierania, **IMAP**(zalecane) lub **POP3**.
>>
>> ![Outlook Android Email Pro](images/outlook-app-android-add-step02.png){.thumbnail .w-400 .h-600}
>>
>> > [!warning]
>> >
>> > Jeśli okno wyboru protokołu nie wyświetla się, kliknij przycisk `?` w prawym górnym rogu ekranu, następnie wybierz `Zmień dostawcę konta`{.action}. Następnie wybierz `IMAP`(zalecane) lub `POP3`.<br>
>> > ![Outlook Android Email Pro](images/outlook-app-android-add-step021.png){.thumbnail .w-400 .h-600}
>>
> **Etap 3 - IMAP**
>>
>> W kolejnym oknie zaznacz `Ustawienia zaawansowane`{.action} i uzupełnij następujące informacje:
>>
>> - **Adres e-mail**
>> - **Pełna nazwa** : wprowadź pełny adres e-mail
>> - **Opis**
>> - **Serwer poczty przychodzącej IMAP** :<br>- **Nazwa hosta IMAP** : wprowadź pro?.mail.ovh.net (zmień "?" na numer serwera).<br>- **Port** : 993<br>- **Typ bezpieczeństwa** : SSL/TLS<br>- **Nazwa użytkownika IMAP**: Twój pełny adres e-mail<br>- **Hasło IMAP**: Twój pełny adres e-mail
>> - **Serwer poczty wychodzącej SMTP** :<br>- **Nazwa hosta SMTP** : wprowadź pro?.mail.ovh.net (zmień "?" na numer serwera).<br>- **Port** : 587<br>- **Typ bezpieczeństwa** : STARTTLS<br>- **Nazwa użytkownika SMTP**: Twój pełny adres e-mail<br>- **Hasło SMTP**: Twój adres e-mail
>>
>> Aby dokończyć konfigurację, kliknij przycisk " &#10003;".
>>
>> ![Outlook Android Email Pro](images/outlook-app-android-add-step03-imap-emailpro.png){.thumbnail .w-400 .h-600}
>>
> **Etap 3 - POP3**
>>
>> W kolejnym oknie zaznacz `Ustawienia zaawansowane`{.action} i uzupełnij następujące informacje:
>>
>> - **Adres e-mail**
>> - **Pełna nazwa** : Wpisz pełny adres e-mail
>> - **Opis**
>> - **Serwer poczty przychodzącej POP3** :<br>- **Nazwa hosta POP3** : wprowadź pro?.mail.ovh.net (zmień "?" na numer serwera).<br>- **Port** : 995<br>- **Typ bezpieczeństwa** : SSL/TLS<br>- **Nazwa użytkownika POP3**: pełny adres e-mail<br>- **Hasło POP3** : adres e-mail
>> - **Serwer poczty wychodzącej SMTP** :<br>- **Nazwa hosta SMTP** : wprowadź pro?.mail.ovh.net (zmień "?" na numer serwera).<br>- **Port** : 587<br>- **Typ bezpieczeństwa** : STARTTLS<br>- **Nazwa użytkownika SMTP**: Twój pełny adres e-mail<br>- **Hasło SMTP**: Twój adres e-mail
>>
>> Aby dokończyć konfigurację, kliknij przycisk " &#10003;".
>>
>> ![Outlook Android Email Pro](images/outlook-app-android-add-step03-pop-emailpro.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Jeśli po wykonaniu powyższych kroków konfiguracji wystąpił błąd wysyłania lub odbierania, zobacz "[Modyfikuj istniejące ustawienia](#modify-settings)".

### Użyj adresu e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku! Możesz teraz wysyłać i odbierać wiadomości.

OVHcloud oferuje aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Jest ona dostępna pod tym linkiem: [Webmail](/links/web/email). Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail. Jeśli masz pytania dotyczące korzystania z tej usługi, skorzystaj z naszego przewodnika [Sprawdź konto w interfejsie OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Zmień istniejące ustawienia <a name="modify-settings"></a>

Aplikacja Outlook nie pozwala na zmianę ustawień serwera dla Twojego konta e-mail.

Jeśli Twoje konto e-mail zostało już skonfigurowane i chcesz je ponownie skonfigurować, musisz je usunąć i utworzyć ponownie:

1. Stuknij karnację "&#9993;" w lewym górnym rogu ekranu.
2. Stuknij ikonę dopasowania "&#9965;" w dolnej części lewej kolumny.
3. W sekcji "Ogólne" kliknij `Konta`, aby wyświetlić wszystkie adresy e-mail skonfigurowane w aplikacji.

![Outlook Android Email Pro](images/outlook-app-android-delete-account-01.png){.thumbnail .w-400 .h-600}

- Wybierz odpowiednie konto e-mail.
- Kliknij `Usuń konto`{.action}.
- Naciśnij przycisk `Usuń`{.action} na pytanie "Czy chcesz usunąć konto?".

![Outlook Android Email Pro](images/outlook-app-android-delete-account-02.png){.thumbnail .w-400 .h-600}

> [!success]
>
> Po usunięciu konta e-mail postępuj zgodnie z instrukcjami w części "[Dodaj konto](#add-account)" niniejszego przewodnika.

### Przypomnienie parametrów POP, IMAP i SMTP <a name="popimap-settings"></a>

#### Parametry odbioru IMAP i POP

Jeśli chcesz otrzymywać e-maile, wybierz rodzaj konta. Zalecamy użycie **IMAP**. Możesz jednak wybrać **POP**.

Kliknij kartę odpowiadającą protokołowi odbioru:

> [!tabs]
> **Konfiguracja IMAP**
>>
>> - **Nazwa użytkownika** : Wpisz pełny adres e-mail **Complete**
>> - **Hasło** : Wprowadź hasło przypisane do konta e-mail
>> - **Serwer (przychodzący)** : pro?.mail.ovh.net
>> - **Port** : 993
>> - **Typ bezpieczeństwa** : SSL/TLS
>>
> **Konfiguracja POP**
>>
>> - **Nazwa użytkownika** : Wpisz pełny adres e-mail **Complete**
>> - **Hasło** : Wprowadź hasło przypisane do konta e-mail
>> - **Serwer (przychodzący)** : pro?.mail.ovh.net
>> - **Port** : 995
>> - **Typ bezpieczeństwa** : SSL/TLS

### Parametry wysyłki SMTP

Jeśli chcesz wysyłać wiadomości e-mail, wprowadź ręcznie ustawienia **SMTP** w ustawieniach konta poniżej znajdź parametry, których chcesz użyć:

**Konfiguracja SMTP**

- **Nazwa użytkownika** : Wpisz pełny adres e-mail **complete**
- **Hasło** : Wprowadź hasło przypisane do konta e-mail
- **Serwer (przychodzący)** : pro?.mail.ovh.net
- **Port** : 587
- **Typ zabezpieczeń** : STARTTLS

> [!primary]
>
> **Zmień konfigurację**
>
> Jeśli Twój adres e-mail został skonfigurowany jako **IMAP**, a chcesz zmienić tę konfigurację na **POP**, musisz usunąć konto i utworzyć je ponownie jako **POP**. Zapoznaj się z rozdziałem "[Edytuj istniejące ustawienia](#modify-settings)" w tym przewodniku.

## Przejdź dalej <a name="go-further"></a>

> [!primary]
>
> Aby uzyskać więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Outlook na urządzeniach z systemem Android, zobacz [Centrum pomocy Microsoft](https://support.microsoft.com/pl-pl/office/konfigurowanie-poczty-e-mail-w-aplikacji-outlook-dla-systemu-android-886db551-8dfa-4fd5-b835-f8e532091872).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 