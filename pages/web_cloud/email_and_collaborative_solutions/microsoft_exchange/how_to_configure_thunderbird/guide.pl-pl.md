---
title: 'Exchange - Konfigurowanie adresu e-mail w Thunderbird na Windows'
excerpt: 'Dowiedz się, jak skonfigurować adres e-mail Exchange w Thunderbird na Windows'
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

Konta Exchange można skonfigurować w różnych kompatybilnych programach pocztowych. Dzięki temu możesz korzystać ze swojego adresu e-mail z wybranego urządzenia. Thunderbird to darmowy i otwarty klient poczty e-mail.

**Dowiedz się, jak skonfigurować adres e-mail Exchange w Thunderbird na Windows.**

## Wymagania początkowe

- Posiadanie adresu e-mail [Hosted Exchange](/links/web/emails-hosted-exchange) lub [Private Exchange](/links/web/emails-private-exchange).
- Zainstalowanie oprogramowania Thunderbird na urządzeniu z systemem Windows.
- Posiadanie danych logowania do adresu e-mail, który chcesz skonfigurować.

/// details | Informacje dotyczące zarządzania i konfiguracji usług OVHcloud

Ten przewodnik pokazuje, jak korzystać z rozwiązań OVHcloud z zewnętrznymi narzędziami oraz jakie zmiany wprowadzić w konkretnych sytuacjach. Możesz musieć dostosować instrukcje do swojej sytuacji.

Jeśli napotkasz trudności w wykonaniu tych czynności, zalecamy kontakt z [specjalistycznym dostawcą usług](/links/partner) i/lub dyskusję z naszą społecznością. OVHcloud nie może udzielać wsparcia technicznego w zakresie korzystania z narzędzi zewnętrznych. Więcej informacji znajdziesz w sekcji [Sprawdź również](#gofurther) tego przewodnika.

///

## W praktyce

> [!primary]
>
> W naszym przykładzie używamy nazwy serwera: ex?.mail.ovh.net. Musisz zastąpić znak "?" numerem serwera swojej usługi Exchange.
>
> Aby znaleźć nazwę serwera:
>
> 1. Zaloguj się do swojego [Panelu klienta](/links/manager).
> 2. Przejdź do sekcji `Web Cloud`{.action}.
> 3. W sekcji `MICROSOFT` kliknij `Exchange`{.action}.
> 4. Wybierz odpowiednią platformę.
> 5. Nazwa serwera jest widoczna w ramce **Logowanie** na karcie `Informacje ogólne`{.action}.

### Dodawanie konta

- **Podczas pierwszego uruchomienia aplikacji**: pojawi się kreator konfiguracji, który poprosi o wpisanie adresu e-mail.

- **Jeśli konto jest już skonfigurowane w aplikacji**:

    1. Kliknij menu `☰`{.action} w górnej pionowej pasku.
    2. Kliknij `Nowe konto`{.action}.
    3. Kliknij `Adres e-mail`{.action}.

![thunderbird](images/configuration-thunderbird-win-01.png){.thumbnail .w-600}

Postępuj zgodnie z krokami konfiguracji, klikając kolejno poniższe **5** kart:

> [!tabs]
> **Krok 1**
>>
>> W oknie, które się pojawi, wprowadź następujące informacje:
>>
>>  - Pełne imię i nazwisko (nazwa wyświetlana).
>>  - Adres e-mail do skonfigurowania.
>>
>> Kliknij `Dalej`{.action}, aby ukończyć ustawienia.
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-02.png){.thumbnail .w-600}
>>
> **Krok 2**
>>
>> Gdy Thunderbird wykryje domenę OVHcloud, zostanie zaproponowana automatyczna konfiguracja oferty MX Plan. Kliknij `ZMIENIĆ KONFIGURACJĘ`{.action}.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Krok 3**
>>
>> Ustawienia serwera odbioru:
>>
>>  - **Protokół** : IMAP
>>  - **Nazwa hosta** : ex?.mail.ovh.net (zastąp znak "?" numerem swojego serwera)
>>  - **Port** : 993
>>  - **Zabezpieczenia połączenia** : SSL/TLS
>>  - **Metoda uwierzytelniania** : Normalne hasło
>>  - **Nazwa użytkownika** : Pełny adres e-mail
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-04.png){.thumbnail .w-600}
>>
> **Krok 4**
>>
>> Ustawienia serwera wysyłania:
>>
>>  - **Protokół** : SMTP 
>>  - **Nazwa hosta** : ex?.mail.ovh.net (zastąp znak "?" numerem swojego serwera)
>>  - **Port** : 587
>>  - **Zabezpieczenia połączenia** : STARTTLS
>>  - **Metoda uwierzytelniania** : Normalne hasło
>>  - **Nazwa użytkownika** : Pełny adres e-mail
>> 
>> 1. Kliknij `Testuj`{.action}, aby zweryfikować wprowadzone ustawienia.
>> 2. Kliknij `Dalej`{.action}, aby potwierdzić te ustawienia.
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-05.png){.thumbnail .w-600}
>>
> **Krok 5**
>>
>> Wprowadź hasło przypisane do adresu e-mail, a następnie kliknij `Dalej`{.action}, aby ukończyć konfigurację.
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
> - **Protokół** : POP3
> - **Nazwa hosta** : ex?.mail.ovh.net (zastąp znak "?" numerem swojego serwera)
> - **Port** : 995
> - **Zabezpieczenia połączenia** : SSL/TLS
> - **Metoda uwierzytelniania** : Normalne hasło
> - **Nazwa użytkownika** : Pełny adres e-mail

### Używanie adresu e-mail

Po skonfigurowaniu adresu e-mail możesz zacząć go używać! Możesz teraz wysyłać i odbierać wiadomości e-mail.

OVHcloud oferuje również aplikację internetową, która umożliwia dostęp do adresu e-mail z przeglądarki internetowej. Aby uzyskać dostęp do Webmaila OVHcloud, kliknij [ten link](/links/web/email). Możesz się zalogować przy użyciu danych logowania do swojego adresu e-mail.

### Przywracanie kopii zapasowej adresu e-mail

Jeśli musisz wykonać operację, która może prowadzić do utraty danych konta e-mail, zalecamy wykonanie kopii zapasowej konta e-mail przed wykonaniem tej operacji. Aby to zrobić, zapoznaj się z sekcją "**Eksport**" w części "**Thunderbird**" naszego przewodnika "[Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

### Modyfikowanie istniejących ustawień

Jeśli konto e-mail jest już skonfigurowane i musisz uzyskać dostęp do ustawień konta, aby je zmienić:

1. Kliknij menu `☰`{.action} w górnej pionowej pasku.
2. Kliknij `Ustawienia konta`{.action}.

![Thunderbird](images/configuration-thunderbird-win-07.png){.thumbnail .w-600}

- Aby zmodyfikować ustawienia dotyczące **odbioru** wiadomości e-mail, kliknij `Ustawienia serwera`{.action} w lewej kolumnie pod swoim adresem e-mail.

![thunderbird](images/configuration-thunderbird-exchange-win-08.png){.thumbnail .w-600}

- Aby zmodyfikować ustawienia dotyczące **wysyłania** wiadomości e-mail, kliknij `Serwer wychodzący (SMTP)`{.action} na dole lewej kolumny.
- Kliknij odpowiedni adres e-mail na liście, a następnie kliknij `Edytuj`{.action}.

![thunderbird](images/configuration-thunderbird-exchange-win-09.png){.thumbnail .w-600}

## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Aby uzyskać więcej informacji na temat konfiguracji adresu e-mail w kliencie poczty e-mail Thunderbird, odwiedź [centrum pomocy Mozilla](https://support.mozilla.org/products/thunderbird).

[Pierwsze kroki z usługą Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Exchange: Pierwsze kroki z serwerem Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).