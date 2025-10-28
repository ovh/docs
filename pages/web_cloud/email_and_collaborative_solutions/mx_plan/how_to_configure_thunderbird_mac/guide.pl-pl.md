---
title: 'MX Plan - Konfigurowanie adresu e-mail w Thunderbird na macOS'
excerpt: 'Dowiedz się, jak skonfigurować adres e-mail MX Plan w Thunderbird na macOS'
updated: 2025-09-19
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
.w-400 {
  max-width:400px !important;
}
</style>

## Wprowadzenie

Konta e-mail MX Plan można skonfigurować w różnych kompatybilnych klientach poczty. Pozwala to na korzystanie z adresu e-mail z wybranego urządzenia. Thunderbird to darmowy i otwarty klient poczty.

**Dowiedz się, jak skonfigurować adres e-mail MX Plan w Thunderbird na macOS.**

## Wymagania wstępne

- Posiadanie oferty MX Plan. Jest ona dostępna poprzez:
    - Ofertę [hostingu WWW](/links/web/hosting).
    - [Darmowy hosting 100M](/links/web/domains-free-hosting) wraz z nazwą domeny (wcześniej aktywowaną).
    - Oddzielną ofertę MX Plan.
    - Posiadanie adresu e-mail [Zimbra Starter](/links/web/zimbra).
- Zainstalowanie oprogramowania Thunderbird na swoim Mac.
- Posiadanie danych logowania do adresu e-mail, który chcesz skonfigurować.

/// details | Informacje dotyczące zarządzania i konfiguracji usług OVHcloud

Ten przewodnik pokazuje, jak korzystać z rozwiązań OVHcloud z zewnętrznymi narzędziami oraz jakie modyfikacje są wymagane w konkretnych kontekstach. Możesz musieć dostosować instrukcje zgodnie ze swoim sytuacją.

Jeśli napotkasz trudności w wykonaniu tych czynności, zalecamy kontakt z [specjalistycznym dostawcą usług](/links/partner) i/lub dyskusję z naszą społecznością. OVHcloud nie może udzielać wsparcia technicznego w zakresie korzystania z narzędzi zewnętrznych. Więcej informacji w sekcji [Sprawdź również](#gofurther) tego przewodnika.

///

## W praktyce

### Dodanie konta

- **Podczas pierwszego uruchomienia aplikacji**: pojawia się kreator konfiguracji, który prosi o wpisanie adresu e-mail.

- **Jeśli konto jest już skonfigurowane w aplikacji**:

    1. Kliknij menu `☰`{.action} w górnej pionowej pasku.
    2. Kliknij `Nowe Konto`{.action}.
    3. Kliknij `Adres E-mail`{.action}.

![thunderbird](images/configuration-thunderbird-mac-01.png){.thumbnail .w-600}

> [!warning]
>
> Należy zanotować wartość odpowiadającą Twojej lokalizacji (**EUROPA** lub **AMERYKA / ASIA-PACIFIK**).

Postępuj zgodnie z krokami konfiguracji, klikając kolejno na **5** poniższych kart:

> [!tabs]
> **Krok 1**
>>
>> W oknie, które się pojawi, wprowadź następujące 2 informacje:
>>
>>  - Pełne imię i nazwisko (nazwa wyświetlana).
>>  - Adres e-mail do skonfigurowania.
>>
>> Kliknij `Kontynuuj`{.action}, aby ukończyć ustawienia.
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-02.png){.thumbnail .w-600}
>>
> **Krok 2**
>>
>> Gdy Thunderbird wykryje nazwę domeny OVHcloud, proponowana jest automatyczna konfiguracja oferty MX Plan:
>>
>>  - Jeśli informacje są poprawne, kliknij `Kontynuuj`{.action} i przejdź do kroku 5.
>>  - W przeciwnym razie kliknij `ZMIEN KONFIGURACJĘ`{.action}, aby wykonać ręczną konfigurację.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Krok 3**
>>
>> Ustawienia serwera odbioru:
>>
>>  - **Protokół**: IMAP
>>  - **Nazwa hosta EUROPA (wejściowy)**: imap.mail.ovh.net **lub** ssl0.ovh.net
>>  - **Nazwa hosta AMERYKA/ASIA-PACIFIK (wejściowy)**: imap.mail.ovh.ca
>>  - **Port**: 993
>>  - **Bezpieczeństwo połączenia**: SSL/TLS
>>  - **Metoda uwierzytelniania**: Normalne hasło
>>  - **Nazwa użytkownika**: Pełny adres e-mail
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-04.png){.thumbnail .w-600}
>>
> **Krok 4**
>>
>> Ustawienia serwera wysyłki:
>>
>>  - **Protokół**: SMTP
>>  - **Serwer EUROPA (wychodzący)**: smtp.mail.ovh.net **lub** ssl0.ovh.net
>>  - **Serwer AMERYKA/ASIA-PACIFIK (wychodzący)**: smtp.mail.ovh.ca
>>  - **Port**: 587
>>  - **Bezpieczeństwo połączenia**: STARTTLS
>>  - **Metoda uwierzytelniania**: Normalne hasło
>>  - **Nazwa użytkownika**: Pełny adres e-mail
>> 
>> 1. Kliknij `Testuj`{.action}, aby zweryfikować wprowadzone ustawienia.
>> 2. Kliknij `Kontynuuj`{.action}, aby potwierdzić te ustawienia.
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-05.png){.thumbnail .w-600}
>>
> **Krok 5**
>>
>> Wprowadź hasło przypisane do adresu e-mail, a następnie kliknij `Kontynuuj`{.action}, aby ukończyć konfigurację.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **Konfiguracja POP**
>
> Jeśli chcesz skonfigurować POP dla swojego adresu e-mail, zastąp ustawienia **kroku 3** następującymi:
>
> Ustawienia serwera odbioru:
>
> - **Protokół**: POP3
> - **Nazwa hosta EUROPA (wejściowy)**: pop.mail.ovh.net **lub** ssl0.ovh.net
> - **Nazwa hosta AMERYKA/ASIA-PACIFIK (wejściowy)**: pop.mail.ovh.ca
> - **Port**: 995
> - **Bezpieczeństwo połączenia**: SSL/TLS
> - **Metoda uwierzytelniania**: Normalne hasło
> - **Nazwa użytkownika**: Pełny adres e-mail

### Użycie adresu e-mail

Po skonfigurowaniu adresu e-mail możesz zacząć go używać! Możesz teraz wysyłać i odbierać wiadomości e-mail.

OVHcloud oferuje również aplikację internetową umożliwiającą dostęp do adresu e-mail z przeglądarki. Aby uzyskać dostęp do Webmaila OVHcloud, kliknij [ten link](/links/web/email). Możesz się zalogować przy użyciu danych logowania do adresu e-mail.

### Przywracanie kopii zapasowej adresu e-mail

Jeśli musisz wykonać operację, która może spowodować utratę danych konta e-mail, zalecamy wykonanie kopii zapasowej przed kontem e-mail. Aby to zrobić, skorzystaj z sekcji "**Eksport**" w części "**Thunderbird**" naszego przewodnika "[Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

### Modyfikacja istniejących ustawień

Jeśli konto e-mail jest już skonfigurowane i musisz uzyskać dostęp do ustawień konta, aby je zmienić:

1. Kliknij menu `☰`{.action} w górnej pionowej pasku.
2. Kliknij `Ustawienia konta`{.action}.

![Thunderbird](images/configuration-thunderbird-mac-07.png){.thumbnail .w-600}

- Aby zmodyfikować ustawienia dotyczące **odbioru** wiadomości e-mail, kliknij `Ustawienia serwera`{.action} w lewej kolumnie pod swoim adresem e-mail.

![thunderbird](images/configuration-thunderbird-mxplan-mac-08.png){.thumbnail .w-600}

- Aby zmodyfikować ustawienia dotyczące **wysyłki** wiadomości e-mail, kliknij `Serwer wychodzący (SMTP)`{.action} na dole lewej kolumny.
- Kliknij odpowiedni adres e-mail na liście, a następnie kliknij `Edytuj`{.action}.

![thunderbird](images/configuration-thunderbird-mxplan-mac-09.png){.thumbnail .w-600}

## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Aby uzyskać więcej informacji na temat konfiguracji adresu e-mail w kliencie poczty Thunderbird, odwiedź [centrum pomocy Mozilla](https://support.mozilla.org/products/thunderbird).

[Pierwsze kroki z usługą MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).