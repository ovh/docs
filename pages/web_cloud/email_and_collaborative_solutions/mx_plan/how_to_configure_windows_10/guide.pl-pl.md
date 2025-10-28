---
title: 'MX Plan / Zimbra Starter - Dodanie konta e-mail w nowym Outlook na Windows'
excerpt: "Dowiedz się, jak skonfigurować swój adres e-mail w nowym Outlook na Windows"
updated: 2025-09-26
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
</style>

## Wprowadzenie

Adresy e-mail w ofercie **MX Plan** oraz [Zimbra Starter](/links/web/emails-zimbra) mogą być konfigurowane na kompatybilnym kliencie pocztowym. Umożliwia to wysyłanie i odbieranie wiadomości z wybranej aplikacji.

Od dnia 1 stycznia 2025 roku **nowy Outlook** zastąpił aplikację **Poczta** w systemie Windows. Więcej informacji na ten temat można znaleźć na stronie Microsoft "[Outlook dla systemu Windows: przyszłość poczty, kalendarza i Osoby na Windows 11](https://support.microsoft.com/office/outlook-for-windows-the-future-of-mail-calendar-and-people-on-windows-11-715fc27c-e0f4-4652-9174-47faa751b199)".

**Dowiedz się, jak skonfigurować swój adres e-mail MX Plan w nowym Outlook na Windows.**

## Wymagania wstępne

- Posiadanie wcześniej skonfigurowanego rozwiązania e-mail OVHcloud, takiego jak:
    - **MX Plan** oferowany wraz z naszymi [ofertami hostingowymi](/links/web/hosting) lub włączonym w [bezpłatnym hosting 100M](/links/web/domains-free-hosting).
    - [Zimbra](/links/web/emails-zimbra) Starter (tylko).
- Posiadanie [nowej wersji Outlook](https://support.microsoft.com/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) zainstalowanej w systemie Windows.
- Posiadanie danych dostępowych do konta e-mail, które chcesz skonfigurować.

> [!warning]
>
> Ta dokumentacja dotyczy wyłącznie **nowego Outlook** i nie obejmuje "[Outlook klasycznego](https://support.microsoft.com/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" dostępnego w pakiecie Microsoft 365 lub wcześniej zainstalowanego na komputerze.

/// details | Informacje dotyczące zarządzania i konfiguracji usług OVHcloud

OVHcloud udostępnia usługi, za których konfigurację, zarządzanie i odpowiedzialność odpowiadasz Ty. Należy więc do Ciebie zapewnić ich prawidłowe działanie.

Udostępniamy tę instrukcję, aby pomóc w najczęstszych zadaniach. Jednakże, jeśli napotkasz trudności, zalecam skontaktowanie się z [partnerem specjalistą](https://marketplace.ovhcloud.com/c/support-collaboration) lub producentem usługi. Nie będziemy w stanie udzielić pomocy technicznej. Więcej informacji w sekcji "[Sprawdź również](#go-further)" tej instrukcji.

///

## W praktyce

### Dodanie konta <a name="add-account"></a>

> [!warning]
>
> Należy wybrać odpowiednią zakładkę etapu 3, odpowiadającą Twojej lokalizacji (**EUROPA** lub **AMERYKA/ASIA-PACIFIK**), aby uzyskać prawidłowe wartości.

> [!tabs]
> **Etap 1**
>> - Otwórz Outlook. W lewym menu kliknij na przycisk `Dodaj konto`{.action}, aby rozpocząć konfigurację.
>>
>> ![outlook](images/configuration-newoutlook-windows-01.png){.thumbnail .w-600}
>>
> **Etap 2**
>> - Wprowadź swój adres e-mail, a następnie kliknij `Dalej`{.action}.
>> - Wprowadź hasło, a następnie kliknij przycisk `Pokaż więcej`{.action}.
>>
>> ![outlook](images/configuration-newoutlook-windows-02.png){.thumbnail .w-600}
>>
> **Etap 3 EUROPA**
>> - Wprowadź następujące parametry:
>>    - **Serwer IMAP dla przychodzących wiadomości**: imap.mail.ovh.net **lub** ssl0.ovh.net.
>>    - **Port**: 993.
>>    - **Typ bezpiecznego połączenia**: SSL/TLS
>>    - **Nazwa użytkownika SMTP**: Wprowadź pełny adres e-mail.
>>    - **Serwer SMTP dla wychodzących wiadomości**: smtp.mail.ovh.net **lub** ssl0.ovh.net.
>>    - **Port**: 465.
>>    - **Typ bezpiecznego połączenia**: SSL/TLS.
>>    - **Hasło**: Nie wprowadzaj niczego, użyje się hasła wprowadzonego wcześniej.
>> - Kliknij `Dalej`{.action}, aby zakończyć konfigurację.
>>
>> ![outlook](images/configuration-newoutlook-windows-03.png){.thumbnail .w-600}
>>
> **Etap 3 AMERYKA/ASIA-PACIFIK**
>> - Wprowadź następujące parametry:
>>    - **Serwer IMAP dla przychodzących wiadomości**: imap.mail.ovh.ca.
>>    - **Port**: 993.
>>    - **Typ bezpiecznego połączenia**: SSL/TLS.
>>    - **Nazwa użytkownika SMTP**: Wprowadź pełny adres e-mail.
>>    - **Serwer SMTP dla wychodzących wiadomości**: smtp.mail.ovh.ca.
>>    - **Port**: 465.
>>    - **Typ bezpiecznego połączenia**: SSL/TLS.
>>    - **Hasło**: Nie wprowadzaj niczego, użyje się hasła wprowadzonego wcześniej.
>> - Kliknij `Dalej`{.action}, aby zakończyć konfigurację.
>>
>> ![outlook](images/configuration-newoutlook-windows-03ca.png){.thumbnail .w-600}

### Użycie adresu e-mail <a name="use-account"></a>

Po skonfigurowaniu adresu e-mail możesz go już używać! Możesz teraz wysyłać i odbierać wiadomości.

OVHcloud oferuje również aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Aby uzyskać dostęp do interfejsu OVHcloud Webmail, kliknij [ten link](/links/web/email). Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail.

### Modyfikacja istniejących parametrów <a name="modify-settings"></a>

Aplikacja Outlook nie pozwala na modyfikację parametrów serwera dla Twojego konta e-mail.

Jeśli Twoje konto e-mail jest już skonfigurowane i chcesz je skonfigurować ponownie, musisz je najpierw usunąć, a następnie ponownie dodać:

- Kliknij na ikonę ustawień `⛭`{.action} u dołu lewego menu.
- W sekcji "Twoje konta" kliknij `Zarządzaj`{.action} prawej strony od interesującego Ciebie adresu e-mail.

![outlook](images/configuration-newoutlook-windows-04.png){.thumbnail .w-600}

- Przewiń do dołu strony.
- Kliknij `Usuń`{.action}, aby rozpocząć usuwanie.
- Zdecyduj, czy chcesz usunąć konto tylko w tym urządzeniu, czy też w innych urządzeniach korzystających z Outlook.

![outlook](images/configuration-newoutlook-windows-05.png){.thumbnail .w-600}

> [!success]
>
> Po usunięciu konta e-mail, postępuj zgodnie z instrukcjami w sekcji "[Dodanie konta](#add-account)" tej dokumentacji.

### Ogólne ustawienia wysyłania i odbierania <a name="settings-account"></a>

#### Ustawienia odbierania IMAP i POP <a name="imap-pop"></a>

Do odbierania e-maili, podczas wyboru typu konta, zalecamy użycie **IMAP**. Możesz również wybrać **POP**.

> [!warning]
>
> Należy wprowadzić wartość odpowiadającą Twojej lokalizacji (**EUROPA** lub **AMERYKA/ASIA-PACIFIK**).

Wybierz odpowiednią zakładkę dla swojej konfiguracji:

> [!tabs]
> **Konfiguracja IMAP**
>>
>> - **Nazwa użytkownika**: Wprowadź pełny adres e-mail.
>> - **Hasło**: Wprowadź hasło do adresu e-mail.
>> - **Serwer EUROPA (przychodzący)**: imap.mail.ovh.net **lub** ssl0.ovh.net.
>> - **Serwer AMERYKA/ASIA-PACIFIK (przychodzący)**: imap.mail.ovh.ca.
>> - **Port**: 993.
>> - **Typ zabezpieczenia**: SSL/TLS.
>>
> **Konfiguracja POP**
>>
>> - **Nazwa użytkownika**: Wprowadź pełny adres e-mail.
>> - **Hasło**: Wprowadź hasło do adresu e-mail.
>> - **Serwer EUROPA (przychodzący)**: pop.mail.ovh.net **lub** ssl0.ovh.net.
>> - **Serwer AMERYKA/ASIA-PACIFIK (przychodzący)**: pop.mail.ovh.ca.
>> - **Port**: 995.
>> - **Typ zabezpieczenia**: SSL/TLS.

#### Ustawienia wysyłania SMTP <a name="smtp"></a>

Do wysyłania e-maili, poniżej znajdziesz parametry **SMTP** do użycia:

**Konfiguracja SMTP**

- **Nazwa użytkownika**: Wprowadź pełny adres e-mail.
- **Hasło**: Wprowadź hasło do adresu e-mail.
- **Serwer EUROPA (wychodzący)**: smtp.mail.ovh.net **lub** ssl0.ovh.net.
- **Serwer AMERYKA/ASIA-PACIFIK (wychodzący)**: smtp.mail.ovh.ca.
- **Port**: 465.
- **Typ zabezpieczenia**: SSL/TLS.

## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Więcej informacji na temat konfiguracji adresu e-mail w kliencie pocztowym Nouvel Outlook na Windows można znaleźć w [centrum pomocy Microsoft](https://support.microsoft.com/office/start-using-new-outlook-for-windows-4395454d-cb2f-4c16-bb24-fa4bb36650ae).

[Podstawy korzystania z oferty MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Podstawy korzystania z oferty Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).