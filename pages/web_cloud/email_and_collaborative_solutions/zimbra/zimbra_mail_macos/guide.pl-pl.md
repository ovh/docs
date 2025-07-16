---
title: "Zimbra Pro - Konfiguracja konta e-mail poprzez EWS w Mail na Mac"
excerpt: "Dowiedz się, jak skonfigurować Twoje konto e-mail Zimbra Pro w aplikacji Mail na urządzeniu Mac przy użyciu protokołu EWS"
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

Konta Zimbra Pro można skonfigurować w systemie macOS przy użyciu protokołu EWS (**E**xchange **W**eb **S**services). Dzięki temu skonfigurujesz wszystkie funkcje pracy zespołowej dla Twojego konta e-mail za jednym razem. Aplikacja Mail jest natywnie dostępna na macOS.

**Dowiedz się, jak skonfigurować Twoje konto e-mail Zimbra Pro w aplikacji Mail na urządzeniu Mac za pomocą protokołu EWS.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Twoim obowiązkiem jest zapewnienie właściwego funkcjonowania tych usług.
>
> Ten przewodnik ma na celu pomóc w wykonywaniu typowych zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [partnerem wyspecjalizowanym](https://marketplace.ovhcloud.com/c/support-collaboration) i/lub skontaktowanie się z wydawcą usługi. Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji zawiera sekcja "[Sprawdź również](#go-further)" w tym przewodniku.

## Wymagania początkowe

- Posiadanie adresu e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Instalacja aplikacji Mail na komputerze Mac.
- Dane do logowania do konta e-mail, które chcesz skonfigurować.

## W praktyce

### Dodaj konto <a name="add-account"></a>

- **Podczas pierwszego uruchomienia aplikacji Mail** bezpośrednio wyświetli się asystent konfiguracji i poprosi o wybranie typu konta.

- **Jeśli konto jest już skonfigurowane w aplikacji Mail**:
    - Kliknij na `Mail`{.action} na pasku menu u góry ekranu.
    - Kliknij na `Konta`{.action}.
    - W oknie "Konta internetowe", które się wyświetli kliknij `Dodaj konto`{.action}

![mail macOS](images/mail-macos-add-step00.png){.thumbnail .h-500}

Postępuj zgodnie z kolejnymi instrukcjami zawartymi w **3** zakładkach:

> [!tabs]
> **Etap 1**
>>
>> - Wybierz `Microsoft Exchange`{.action}.
>> - Podaj **nazwę** i wpisz **adres e-mail**.
>> - Następnie kliknij `Zaloguj`{.action}.
>>
>> ![Mail macos](images/mail-macos-add-step01.png){.thumbnail .h-500}
>>
> **Etap 2**
>>
>> - Wybierz `Skonfiguruj ręcznie`{.action} w oknie, które się wyświetli.
>> - Następnie wprowadź **hasło** dla Twojego konta e-mail, uzupełniając wprowadzone wcześniej informacje.
>>
>> ![Mail macos](images/mail-macos-add-step02.png){.thumbnail .h-500}
>>
> **Etap 3**
>>
>> Sprawdź i uzupełnij następujące informacje:
>>
>> - **Adres e-mail**: Wpisz pełny adres e-mail.
>> - **Nazwa użytkownika**: Wpisz pełny adres e-mail.
>> - **Hasło**: Wprowadź hasło powiązane z Twoim kontem e-mail.
>> - **Wewnętrzny adres URL**: Wpisz "zimbra1.mail.ovh.net".
>> - **Zewnętrzny adres URL**: Wpisz "zimbra1.mail.ovh.net".
>>
>> Aby dokończyć konfigurację, naciśnij przycisk `Zaloguj się`{.action} i wybierz funkcje, które chcesz sprawdzić na komputerze Mac.
>>
>> ![Mail macos](images/mail-macos-add-step04.png){.thumbnail .h-500}
>>
>> > [!warning]
>> >
>> > Wiadomość jest wyświetlana jako czerwona "**Nie można sprawdzić nazwy konta ani hasła**", gdy po raz pierwszy pojawia się okno. Jeśli jednak ten komunikat będzie się powtarzał po zatwierdzeniu, oznacza to, że wprowadzone informacje są błędne.

> [!warning]
>
> Jeśli po wykonaniu powyższych kroków konfiguracyjnych wystąpi problem z wysyłaniem lub odbieraniem wiadomości, zapoznaj się z przewodnikiem "[Modyfikuj istniejące ustawienia](#modify-settings)".

### Użyj adresu e-mail

Po skonfigurowaniu adresu e-mail możesz zacząć z niego korzystać! Teraz możesz wysyłać i odbierać wiadomości, a także zarządzać kalendarzami i zadaniami.

OVHcloud oferuje również aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Możesz zalogować się do [webmail OVHcloud](/links/web/email) za pomocą identyfikatora Twojego konta e-mail. Jeśli masz pytania dotyczące korzystania z tej usługi, zapoznaj się z przewodnikiem "[Korzystanie z poczty Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Jak zmienić istniejące ustawienia? <a name="modify-settings"></a>

Aplikacja Mail na komputery Mac nie pozwala na modyfikowanie ustawień serwera dla konta e-mail Exchange.

Jeśli Twoje konto e-mail zostało już skonfigurowane i chcesz zmienić jego ustawienia, musisz je usunąć i utworzyć ponownie.

Aby usunąć konto e-mail Exchange, postępuj zgodnie z poniższymi instrukcjami:

1. Kliknij `Mail`{.action} na pasku menu na górze Twojego ekranu.
1. Kliknij `Konta`{.action} i wybierz odpowiednie konto e-mail.
1. Kliknij `Usuń konto`{.action}.

![Mail macos](images/mail-macos-modify-delete-01.png){.thumbnail .h-500}

> [!success]
>
> Po usunięciu konta e-mail wykonaj kroki instalacji wskazane w "[Dodaj konto](#add-account)" w tym przewodniku.

## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Mail na macOS znajduje się w [centrum pomocy Apple](https://support.apple.com/pl-pl/102619).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).