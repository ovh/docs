---
title: "MX Plan - Konfiguracja konta e-mail w programie Outlook na urządzeniu z systemem iOS"
excerpt: "Dowiedz się, jak skonfigurować Twoje konto e-mail MX Plan w aplikacji mobilnej Outlook na urządzeniu z systemem iOS"
updated: 2025-02-10
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

Konta MX Plan mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji. Aplikacja Outlook firmy Microsoft na urządzeniach z systemem iOS jest dostępna bezpłatnie w App Store firmy Apple.

**Dowiedz się, jak skonfigurować konto e-mail MX Plan w aplikacji mobilnej Outlook na urządzeniu z systemem iOS**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [partnerem wyspecjalizowanym](/links/partner) i/lub skontaktowanie się z wydawcą usługi. Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "[Sprawdź również](#go-further)".

## Wymagania początkowe

- Posiadanie konta e-mail MX Plan (zawartego w usłudze MX Plan lub w usłudze [hostingu OVHcloud](/links/web/hosting)).
- Instalacja aplikacji Outlook na urządzeniu przenośnym [iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Dane do logowania do konta e-mail, które chcesz skonfigurować.

## W praktyce

### Dodaj konto <a name="add-account"></a>

- **Podczas pierwszego uruchomienia aplikacji** : wyświetli się asystent konfiguracji, po czym kliknij `Dodaj konto`{.action}.

![Outlook iOS](images/outlook-app-ios-add01.png){.thumbnail .w-400 .h-600}

- **Jeśli konto zostało już skonfigurowane**:
    1. Stuknij okrąg zawierający inicjały przeglądanego konta e-mail lub ikonę domu "&#8962;" w lewym górnym rogu ekranu.
    2. Stuknij koło zębate "&#9881;" w lewym dolnym rogu ekranu.
    3. Następnie kliknij `Konta`{.action} w menu **Ustawienia**.
    4. Kliknij `Dodaj konto`{.action}.
    5. Naciśnij `Konto pocztowe`{.action}.

![Outlook iOS](images/outlook-app-ios-add02.png){.thumbnail .w-400 .h-600}

Postępuj zgodnie z kolejnymi instrukcjami, klikając poniższe zakładki:

> [!tabs]
> **Etap 1**
>>
>> Wpisz swój adres e-mail i kliknij `Dodaj konto`{.action}.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Etap 2**
>>
>> Masz dwie możliwości:
>>
>> - Jeśli na górze strony znajduje się napis "**IMAP**", przejdź do kroku 3.
>> - Jeśli w oknie ustawień konta wyświetlony zostanie komunikat "**Exchange**" u góry, kliknij przycisk `?` w prawym górnym rogu ekranu **(1)**, a następnie wybierz opcję `Zmień dostawcę konta`{.action} **(2)**. Następnie wybierz `IMAP` **(3)** i przejdź do etapu 3.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step02.png){.thumbnail .w-400 .h-600}
>>
> **Etap 3**
>>
>> W kolejnym oknie zaznacz `Ustawienia zaawansowane`{.action} i uzupełnij następujące informacje:
>>
>> - **Adres e-mail**
>> - **Pełna nazwa** : wprowadź pełny adres e-mail
>> - **Opis**
>> - **Serwer poczty przychodzącej IMAP** :<br>- **Nazwa hosta IMAP** : w przypadku firmy **EUROPE** należy wpisać `imap.mail.ovh.net` lub `ssl0.ovh.net`. W przypadku adresu **AMERYKA/Azja** wpisz `imap.mail.ovh.ca`<br>- **Port IMAP** : 993<br>- **Nazwa użytkownika IMAP**: Twój pełny adres e-mail<br>- **Hasło IMAP**: Twój adres e-mail<br>- **Bezpieczeństwo portu** : SSL
>> - **Serwer poczty przychodzącej SMTP** :<br>- **Nazwa hosta SMTP** : w przypadku **Europy** należy wpisać `smtp.mail.ovh.net` lub `ssl0.ovh.net`. W przypadku adresu**AMERYKA/AZJA** wpisz `smtp.mail.ovh.ca`<br>- **Port SMTP** : 465<br>- **Nazwa użytkownika SMTP**: Twój pełny adres e-mail<br>- **Hasło SMTP**: Twój adres e-mail<br>- **Bezpieczeństwo portu** : SSL
>>
>> Aby dokończyć konfigurację, naciśnij przycisk `Połącz`{.action}.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step03-imap-eu.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Jeśli po wykonaniu powyższych kroków konfiguracji wystąpił błąd wysyłania lub odbierania, zobacz "[Modyfikuj istniejące ustawienia](#modify-settings)".

### Użyj adresu e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku! Możesz teraz wysyłać i odbierać wiadomości.

OVHcloud oferuje aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Jest ona dostępna pod tym linkiem: [Webmail](/links/web/email). Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail. Jeśli masz pytania dotyczące korzystania z tej usługi, skorzystaj z naszych przewodników:

- [Sprawdź konto w interfejsie OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)
- [Korzystanie z konta e-mail przy użyciu interfejsu Webmail RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)
- [Skorzystaj z poczty Zimbra Webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### Zmień istniejące ustawienia <a name="modify-settings"></a>

1. Stuknij okrąg zawierający inicjały przeglądanego konta e-mail lub ikonę domu " &#8962;" w lewym górnym rogu ekranu.
2. Stuknij koło zębate " &#9881;" w lewym dolnym rogu ekranu.
3. Następnie kliknij `Konta`{.action} w menu **Ustawienia**.
4. Wybierz odpowiednie konto.
5. Kliknij `Zmień dane logowania`{.action}.

![Outlook iOS](images/outlook-app-ios-modify-account-01.png){.thumbnail .w-400 .h-600}

Ustawienia znajdziesz w **etapie 3** rozdziału [Dodaj konto](#add-account).

### Usuń konto e-mail <a name="delete"></a>

1. Stuknij okrąg zawierający inicjały przeglądanego konta e-mail lub ikonę domu " &#8962;" w lewym górnym rogu ekranu.
2. Stuknij koło zębate " &#9881;" w lewym dolnym rogu ekranu.
3. Następnie kliknij `Konta`{.action} w menu **Ustawienia**.
4. Wybierz odpowiednie konto.
5. Kliknij `Usuń konto`{.action}.

![Outlook iOS](images/outlook-app-ios-modify-delete-01.png){.thumbnail .w-400 .h-600}

### Przypomnienie parametrów POP, IMAP i SMTP <a name="popimap-settings"></a>

#### Parametry odbioru IMAP i POP

Jeśli chcesz otrzymywać e-maile, wybierz rodzaj konta. Zalecamy użycie **IMAP**. Możesz jednak wybrać **POP**.

> [!warning]
>
> Należy wyraźnie podnieść wartość odnoszącą się do Twojej lokalizacji (**EUROPE** lub **AMERYKA / AZJA-PACYFIK**)

Postępuj zgodnie z kolejnymi instrukcjami, klikając poniższe zakładki:

> [!tabs]
> **Konfiguracja IMAP**
>>
>> - **Nazwa użytkownika** : Wpisz pełny adres e-mail **Complete**
>> - **Hasło** : Wprowadź hasło przypisane do konta e-mail
>> - **Serwer EUROPE (ruch przychodzący)** : imap.mail.ovh.net **lub** ssl0.ovh.net
>> - **Serwer amerykański/Azja-PACYFIK (ruch przychodzący)** : imap.mail.ovh.ca
>> - **Port** : 993
>> - **Typ bezpieczeństwa** : SSL/TLS
>>
> **Konfiguracja POP**
>>
>> - **Nazwa użytkownika** : Wpisz pełny adres e-mail **Complete**
>> - **Hasło** : Wprowadź hasło przypisane do konta e-mail
>> - **Serwer EUROPE (ruch przychodzący)** : pop.mail.ovh.net **lub** ssl0.ovh.net
>> - **Serwer amerykański/Azja-PACYFIK (ruch przychodzący)** : pop.mail.ovh.ca
>> - **Port** : 995
>> - **Typ bezpieczeństwa** : SSL/TLS

### Parametry wysyłki SMTP

Jeśli chcesz wysyłać wiadomości e-mail, wprowadź ręcznie ustawienia **SMTP** w ustawieniach konta poniżej znajdź parametry, których chcesz użyć:

**Konfiguracja SMTP**

- **Nazwa użytkownika** : Wpisz pełny adres e-mail **complete**
- **Hasło** : Wprowadź hasło przypisane do konta e-mail
- **Serwer EUROPE (ruch przychodzący)** : pop.mail.ovh.net **lub** ssl0.ovh.net
- **Serwer amerykański/AZJA-PACYFIK (ruch przychodzący)** : pop.mail.ovh.ca
- **Port** : 465
- **Typ bezpieczeństwa** : SSL/TLS

> [!primary]
>
> **Zmień konfigurację**
>
> Jeśli Twój adres e-mail został skonfigurowany jako **IMAP**, a chcesz zmienić tę konfigurację na **POP**, musisz usunąć konto i utworzyć je ponownie jako **POP**. Zapoznaj się z rozdziałem "[Edytuj istniejące ustawienia](#modify-settings)" w tym przewodniku.

## Sprawdź również <a name="go-further"></a>

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).