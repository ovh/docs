---
title: 'E-mail Pro – Konfiguracja adresu e-mail w Thunderbird na macOS'
excerpt: 'Dowiedz się, jak skonfigurować adres E-mail Pro w Thunderbird na macOS'
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
.w-600 {
  max-width:600px !important;
}
</style>

## Wprowadzenie

Konta E-mail Pro można skonfigurować w różnych kompatybilnych programach poczty e-mail. Pozwala to na korzystanie z adresu e-mail z wybranego urządzenia. Thunderbird to darmowy i otwarty klient poczty e-mail.

**Dowiedz się, jak skonfigurować adres E-mail Pro w Thunderbird na macOS.**

## Wymagania początkowe

- Posiadanie adresu [E-mail Pro](/links/web/email-pro).
- Zainstalowanie programu Thunderbird na swoim Mac.
- Posiadanie danych logowania do adresu e-mail, który chcesz skonfigurować.

/// details | Informacje dotyczące zarządzania i konfiguracji usług OVHcloud

Ten przewodnik pokazuje, jak korzystać z rozwiązań OVHcloud z zewnętrznymi narzędziami oraz jakie zmiany są wymagane w konkretnych sytuacjach. Możesz musieć dostosować instrukcje do swojej sytuacji.

Jeśli napotkasz trudności w wykonaniu tych czynności, polecamy kontakt z [specjalistycznym dostawcą usług](/links/partner) i/lub dyskusję z naszą społecznością. OVHcloud nie może udzielać wsparcia technicznego w zakresie korzystania z narzędzi zewnętrznych. Więcej informacji znajdziesz w sekcji [Sprawdź równieżj](#gofurther) tego przewodnika.

///

## W praktyce

> [!warning]
>
> W naszym przykładzie używamy oznaczenia serwera: pro?.mail.ovh.net. Musisz zastąpić znak „?“ numerem identyfikującym serwer swojej usługi E-mail Pro.
>
> 1. Zaloguj się do swojego [Panelu Klienta OVHcloud](/links/manager).
> 1. Przejdź do sekcji `Web Cloud`{.action}.
> 1. Kliknij `E-mail Pro`{.action}.
> 1. Wybierz odpowiednią platformę.
> 1. Nazwa serwera jest widoczna w sekcji **Logowanie** karty `Informacje ogólne`{.action}.

### Dodanie konta

- **Podczas pierwszego uruchomienia aplikacji**: zostanie wyświetlony kreator konfiguracji, który poprosi o wpisanie adresu e-mail.

- **Jeśli konto jest już skonfigurowane w aplikacji**:

    1. Kliknij menu `☰`{.action} w górnej pionowej pasku.
    2. Kliknij `Nowe konto`{.action}.
    3. Kliknij `Adres e-mail`{.action}.

![thunderbird](images/configuration-thunderbird-mac-01.png){.thumbnail .w-600}

Postępuj zgodnie z krokami konfiguracji, klikając kolejno poniższe **5** kart:

> [!tabs]
> **Krok 1**
>>
>> W wyświetlonym oknie wprowadź poniższe informacje:
>>
>>  - Pełne imię i nazwisko (nazwa wyświetlana).
>>  - Adres e-mail do skonfigurowania.
>>
>> Kliknij `Dalej`{.action}, aby ukończyć ustawienia.
>>
>> ![thunderbird](images/configuration-thunderbird-emp-02.png){.thumbnail .w-600}
>>
> **Krok 2**
>>
>> Gdy Thunderbird wykryje nazwę domeny OVHcloud, zostanie zaproponowana automatyczna konfiguracja oferty MX Plan. Kliknij `ZMIEN KONFIGURACJĘ`{.action}.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Krok 3**
>>
>> Ustawienia serwera odbiorczego:
>>
>>  - **Protokół**: IMAP
>>  - **Nazwa hosta**: pro?.mail.ovh.net (zastąp znak „?“ numerem swojego serwera)
>>  - **Port**: 993
>>  - **Bezpieczeństwo połączenia**: SSL/TLS
>>  - **Metoda uwierzytelniania**: Normalne hasło
>>  - **Nazwa użytkownika**: Pełny adres e-mail
>>
>> ![thunderbird](images/configuration-thunderbird-emp-04.png){.thumbnail .w-600}
>>
> **Krok 4**
>>
>> Ustawienia serwera wysyłającego:
>>
>>  - **Protokół**: SMTP 
>>  - **Nazwa hosta**: pro?.mail.ovh.net (zastąp znak „?“ numerem swojego serwera)
>>  - **Port**: 587
>>  - **Bezpieczeństwo połączenia**: STARTTLS
>>  - **Metoda uwierzytelniania**: Normalne hasło
>>  - **Nazwa użytkownika**: Pełny adres e-mail
>> 
>> 1. Kliknij `Testuj`{.action}, aby zweryfikować wprowadzone ustawienia.
>> 2. Kliknij `Dalej`{.action}, aby potwierdzić te ustawienia.
>>
>> ![thunderbird](images/configuration-thunderbird-emp-05.png){.thumbnail .w-600}
>>
> **Krok 5**
>>
>> Wprowadź hasło przypisane do adresu e-mail i kliknij `Dalej`{.action}, aby ukończyć konfigurację.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **Konfiguracja POP**
>
> Jeśli chcesz skonfigurować POP dla swojego adresu e-mail, zastąp ustawienia **Kroku 3** poniższymi:
>
> Ustawienia serwera odbiorczego:
>
> - **Protokół**: POP3
> - **Nazwa hosta**: pro?.mail.ovh.net (zastąp znak „?“ numerem swojego serwera)
> - **Port**: 995
> - **Bezpieczeństwo połączenia**: SSL/TLS
> - **Metoda uwierzytelniania**: Normalne hasło
> - **Nazwa użytkownika**: Pełny adres e-mail

### Użycie adresu e-mail

Po skonfigurowaniu adresu e-mail możesz zacząć go używać! Możesz teraz wysyłać i odbierać wiadomości e-mail.

OVHcloud oferuje również aplikację internetową umożliwiającą dostęp do adresu e-mail z przeglądarki. Aby uzyskać dostęp do Webmaila OVHcloud, kliknij [ten link](/links/web/email). Możesz się zalogować przy użyciu danych logowania do swojego adresu e-mail.

### Tworzenie kopii zapasowej adresu e-mail

Jeśli musisz wykonać operację, która może spowodować utratę danych konta e-mail, zalecamy utworzenie kopii zapasowej konta e-mail przed wykonaniem tej operacji. Aby to zrobić, skorzystaj z sekcji „**Eksport**” w części „**Thunderbird**” naszego przewodnika „[Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)”.

### Modyfikacja istniejących ustawień

Jeśli konto e-mail jest już skonfigurowane i musisz uzyskać dostęp do ustawień konta, aby je zmienić:

1. Kliknij menu `☰`{.action} w górnej pionowej pasku.
2. Kliknij `Ustawienia konta`{.action}.

![Thunderbird](images/configuration-thunderbird-mac-07.png){.thumbnail .w-600}

- Aby zmienić ustawienia dotyczące **odbioru** wiadomości e-mail, kliknij `Ustawienia serwera`{.action} w lewej kolumnie pod swoim adresem e-mail.

![thunderbird](images/configuration-thunderbird-emp-mac-08.png){.thumbnail .w-600}

- Aby zmienić ustawienia dotyczące **wysyłania** wiadomości e-mail, kliknij `Serwer wychodzący (SMTP)`{.action} na dole lewej kolumny.
- Kliknij odpowiedni adres e-mail w liście, a następnie kliknij `Edytuj`{.action}.

![thunderbird](images/configuration-thunderbird-emp-mac-09.png){.thumbnail .w-600}

## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Aby uzyskać więcej informacji na temat konfiguracji adresu e-mail w kliencie poczty e-mail Thunderbird, odwiedź [centrum pomocy Mozilli](https://support.mozilla.org/products/thunderbird).

[Konfiguracja konta E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).