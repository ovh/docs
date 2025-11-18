---
title: "E-mail Pro - Konfiguracja konta e-mail w programie Outlook na urządzeniu z systemem iOS"
excerpt: "Dowiedz się, jak skonfigurować konto E-mail Pro w aplikacji mobilnej Outlook na urządzeniu z systemem iOS"
updated: 2025-04-28
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

Konta E-mail Pro mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji. Aplikacja Outlook firmy Microsoft na urządzeniach z systemem iOS jest dostępna bezpłatnie w App Store firmy Apple.

**Dowiedz się, jak skonfigurować konto E-mail Pro w aplikacji mobilnej Outlook na urządzeniu z systemem iOS**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak ich konfiguracja, zarządzanie oraz utrzymanie należy do Ciebie. Jesteś tym samym odpowiedzialny za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „[Sprawdź również](#gofurther).

## Wymagania początkowe

- Posiadanie adresu [E-mail Pro](/links/web/email-pro).
- Instalacja aplikacji Outlook na urządzeniu przenośnym [iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Dane do logowania do konta e-mail, które chcesz skonfigurować.

## W praktyce

### Dodaj konto <a name="add-account"></a>

> [!primary]
>
> W przewodniku używamy oznaczenia serwera: pro?.mail.ovh.net. Zastąp “?” cyfrą oznaczającą serwer powiązany z Twoją usługą E-mail Pro.
>
> 1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
> 1. Przejdź do sekcji `Web Cloud`{.action}.
> 1. Kliknij `Email Pro`{.action}.
> 1. Wybierz odpowiednią platformę.
> 1. Nazwa serwera jest widoczna w ramce **Logowanie** w zakładce `Informacje ogólne`{.action}.
>

- **Podczas pierwszego uruchomienia aplikacji** : wyświetli się asystent konfiguracji, po czym kliknij `Dodaj konto`{.action}.

![outlook iOS](images/outlook-app-ios-add01.png){.thumbnail .w-400 .h-600}

- **Jeśli konto zostało już skonfigurowane**:
    1. Stuknij okrąg zawierający inicjały przeglądanego konta e-mail lub ikonę domu " &#8962;" w lewym górnym rogu ekranu.
    2. Stuknij koło zębate " &#9881;" w lewym dolnym rogu ekranu.
    3. Następnie kliknij `Konta {.action} w menu **Ustawienia**.
    4. Kliknij `Dodaj konto`{.action}.
    5. Naciśnij `Konto pocztowe`{.action}.

![outlook iOS](images/outlook-app-ios-add02.png){.thumbnail .w-400 .h-600}

Postępuj zgodnie z kolejnymi instrukcjami, klikając poniższe zakładki:

> [!tabs]
> **Etap 1**
>>
>> Wpisz swój adres e-mail i kliknij `Dodaj konto`{.action}.
>>
>> ![outlook iOS](images/outlook-app-ios-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Etap 2**
>>
>> Masz dwie możliwości:
>>
>> - Jeśli na górze strony znajduje się napis "**IMAP**", przejdź do kroku 3.
>> - Jeśli w oknie ustawień konta wyświetlony zostanie komunikat "**Exchange**" u góry, kliknij przycisk `?` w prawym górnym rogu ekranu **(1)**, a następnie wybierz opcję `Zmień dostawcę konta`{.action} **(2)**. Następnie wybierz `IMAP` **(3)** i przejdź do etapu 3.
>>
>> ![outlook iOS](images/outlook-app-ios-add-step02.png){.thumbnail .w-400 .h-600}
>>
> **Etap 3**
>>
>> W kolejnym oknie zaznacz `Ustawienia zaawansowane`{.action} i uzupełnij następujące informacje:
>>
>> - **Adres e-mail**
>> - **Pełna nazwa** : wprowadź pełny adres e-mail
>> - **Opis**
>> - **Serwer poczty przychodzącej IMAP** :<br>- **Nazwa hosta IMAP** : wprowadź `pro?.mail.ovh.net` (zastąp dobrze "?" numerem serwera)<br>- **Port IMAP** : 993<br>- **Nazwa użytkownika IMAP**: Twój pełny adres e-mail<br>- **Hasło IMAP** : Twój adres e-mail<br>- **Bezpieczeństwo portu** : SSL
>> - **Serwer poczty wychodzącej SMTP** :<br>- **Nazwa hosta SMTP** : wprowadź `pro?.mail.ovh.net` (zastąp dobrze "?" numerem serwera)<br>- **Port SMTP** : 587<br>- **Nazwa użytkownika SMTP**: Twój pełny adres e-mail<br>- **Hasło SMTP**: Twój adres e-mail<br>- **Bezpieczeństwo portu** : Niepowodzenie polecenia STARTTLS
>>
>> Aby dokończyć konfigurację, naciśnij przycisk `Połącz`{.action}.
>>
>> ![outlook iOS](images/outlook-app-ios-add-step03-imap-emailpro.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Jeśli po wykonaniu powyższych kroków konfiguracji wystąpił błąd wysyłania lub odbierania, zobacz "[Modyfikuj istniejące ustawienia](#modify-settings)".

### Użyj adresu e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku! Możesz teraz wysyłać i odbierać wiadomości.

OVHcloud oferuje aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Jest ona dostępna pod tym linkiem: [Webmail](/links/web/email). Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail. Jeśli masz pytania dotyczące korzystania z tej usługi, skorzystaj z naszego przewodnika [Sprawdź konto w interfejsie OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Zmień istniejące ustawienia <a name="modify-settings"></a>

1. Stuknij okrąg zawierający inicjały przeglądanego konta e-mail lub ikonę domu "&#8962;" w lewym górnym rogu ekranu.
2. Stuknij koło zębate "&#9881;" w lewym dolnym rogu ekranu.
3. Następnie kliknij `Konta`{.action} w menu **Ustawienia**.
4. Wybierz odpowiednie konto.
5. Kliknij `Zmień dane logowania`{.action}.

![outlook iOS](images/outlook-app-ios-modify-account-01.png){.thumbnail .w-400 .h-600}

Ustawienia znajdziesz w **etapie 3** rozdziału [Dodaj konto](#add-account).

### Usuń konto e-mail <a name="delete"></a>

1. Stuknij okrąg zawierający inicjały przeglądanego konta e-mail lub ikonę domu "&#8962;" w lewym górnym rogu ekranu.
2. Stuknij koło zębate "&#9881;" w lewym dolnym rogu ekranu.
3. Następnie kliknij `Konta`{.action} w menu **Ustawienia**.
4. Wybierz odpowiednie konto.
5. Kliknij `Usuń konto`{.action}.

![outlook iOS](images/outlook-app-ios-modify-delete-01.png){.thumbnail .w-400 .h-600}

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
- **Typ bezpieczeństwa** : SSL/TLS

## Idź dalej <a name="gofurther"></a>

> [!primary]
>
> Więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Outlook na urządzeniach z systemem iOS można znaleźć w [Centrum pomocy Microsoft](https://support.microsoft.com/office/set-up-the-outlook-app-for-ios-b2de2161-cc1d-49ef-9ef9-81acd1c8e234).

W przypadku specjalistycznych usług (SEO, programowanie, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz uzyskać wsparcie w zakresie użytkowania i konfiguracji Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami wsparcia](/links/support).

Przyłącz się do [społeczności użytkowników](/links/community).