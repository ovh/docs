---
title: "Zimbra Pro - Konfiguracja konta e-mail przez EWS w Outlook na urządzeniu Mac"
excerpt: "Dowiedz się, jak skonfigurować Twoje konto e-mail Zimbra Pro w programie Outlook na urządzeniach z systemem macOS przy użyciu protokołu EWS"
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

Konta Zimbra Pro można skonfigurować na komputerze Mac za pomocą protokołu EWS (**E**exchange **W**eb **S**services). Dzięki temu skonfigurujesz wszystkie funkcje pracy zespołowej dla Twojego konta e-mail za jednym razem. Aplikacja [Outlook na macOS](https://apps.apple.com/pl/app/microsoft-outlook/id985367838?mt=12) jest dostępna w App Store firmy Apple.

**Dowiedz się, jak skonfigurować Twoje konto e-mail Zimbra Pro w programie Outlook na urządzeniu z systemem macOS przy użyciu protokołu EWS.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Twoim obowiązkiem jest zapewnienie właściwego funkcjonowania tych usług.
>
> Ten przewodnik ma na celu pomóc w wykonywaniu typowych zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [partnerem wyspecjalizowanym](https://marketplace.ovhcloud.com/c/support-collaboration) i/lub skontaktowanie się z wydawcą usługi. Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji zawiera sekcja "[Sprawdź również](#go-further)" w tym przewodniku.

## Wymagania początkowe

- Posiadanie adresu e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Posiadanie aplikacji [Outlook na urządzeniach macOS](https://apps.apple.com/pl/app/microsoft-outlook/id985367838?mt=12).
- Dane do logowania do konta e-mail, które chcesz skonfigurować.

## W praktyce

### Dodaj konto <a name="add-account"></a>

- **Podczas pierwszego uruchomienia aplikacji Outlook**: bezpośrednio wyświetli się asystent konfiguracji i poprosi o wpisanie pierwszego adresu e-mail, który chcesz dodać.

- **Jeśli konto jest już skonfigurowane w aplikacji Outlook**:
    1. Kliknij `Narzędzia`{.action} na pasku menu u góry ekranu.
    2. Kliknij `Konta`{.action}.
    3. W oknie "Konta", które się wyświetli kliknij na`+`{.action} na dole po lewej stronie, następnie kliknij `Nowe konto`{.action}.

![mail macOS](images/outlook-macos-add-step00.png){.thumbnail .h-500}

Postępuj zgodnie z kolejnymi instrukcjami zawartymi w **3** zakładkach:

> [!tabs]
> **Etap 1**
>>
>> Wpisz swój adres e-mail pod napisem "Adres e-mail" i kliknij przycisk `Kontynuuj`{.action}.
>>
>> ![Mail macos](images/outlook-macos-add-step01.png){.thumbnail .h-500}
>>
> **Etap 2**
>>
>> Możliwe są dwa scenariusze:
>>
>> - **Jeśli pojawi się okno "IMAP/POP"**: kliknij przycisk `To nie jest konto POP/IMAP`{.action}, następnie wybierz `Exchange`{.action} w oknie "Wybierz dostawcę".
>> - **Jeśli po prawej stronie klikniesz "Wybierz dostawcę"**, wybierz opcję `Exchange`{.action}.
>>
>> ![Mail macos](images/outlook-macos-add-step02.png){.thumbnail .h-500}
>>
> **Etap 3**
>>
>> Sprawdź i uzupełnij następujące informacje:
>>
>> - **Metoda**: Wybierz opcję `Nazwa użytkownika i hasło`.
>> - **Adres e-mail**: Wpisz pełny adres e-mail.
>> - **DOMENA\Nazwa użytkownika lub adres e-mail**: Wpisz pełny adres e-mail.
>> - **Hasło**: Wpisz hasło powiązane z Twoim kontem e-mail.
>> - **Serwer**: Wpisz "zimbra1.mail.ovh.net".
>>
>> Aby dokończyć konfigurację, naciśnij przycisk `Dodaj konto`{.action} i wybierz funkcje, które chcesz sprawdzić na urządzeniu Mac.
>>
>> ![Mail macos](images/outlook-macos-add-step03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Jeśli po wykonaniu powyższych kroków konfiguracyjnych wystąpi problem z wysyłaniem lub odbieraniem wiadomości, zapoznaj się z przewodnikiem "[Modyfikuj istniejące ustawienia](#modify-settings)".

### Użyj adresu e-mail

Po skonfigurowaniu adresu e-mail możesz zacząć z niego korzystać! Teraz możesz wysyłać i odbierać wiadomości, a także zarządzać kalendarzami i zadaniami.

OVHcloud oferuje również aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Możesz zalogować się do [webmail OVHcloud](/links/web/email) za pomocą identyfikatora Twojego konta e-mail. Jeśli masz pytania dotyczące korzystania z tej usługi, zapoznaj się z przewodnikiem "[Korzystanie z poczty Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Jak zmienić istniejące ustawienia? <a name="modify-settings"></a>

Aby zmienić parametry skonfigurowanego konta e-mail, postępuj zgodnie z poniższymi instrukcjami:

1. Kliknij `Narzędzia`{.action} na pasku menu u góry ekranu.
1. Kliknij `Konta`{.action}.
1. Wybierz swoje konto w kolumnie z lewej strony.
1. Kliknij przycisk `Zaawansowane...`{.action} na dole po prawej stronie.

![Outlook macos](images/outlook-macos-modify-01.png){.thumbnail .h-500}

Ustawienia znajdziesz w **etap 3** rozdziału "[Dodaj konto](#add-account)".

### Jak usunąć konto e-mail? <a name="delete-account"></a>

1. Kliknij `Narzędzia`{.action} na pasku menu u góry ekranu.
1. Kliknij `Konta`{.action}.
1. Wybierz swoje konto w kolumnie z lewej strony.
1. Kliknij na `-`{.action} na dole po lewej stronie

![Outlook macos](images/outlook-macos-delete-01.png){.thumbnail .h-500}

## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Mail na macOS znajduje się w [centrum pomocy Apple](https://support.apple.com/pl-pl/102619).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).