---
title: "Zimbra Pro - Konfiguracja konta e-mail za pomocą ActiveSync w programie Outlook na urządzeniu z systemem iOS"
excerpt: "Dowiedz się, jak skonfigurować Twoje konto e-mail Zimbra Pro w aplikacji mobilnej Outlook dla systemu iOS przy użyciu protokołu ActiveSync"
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

Konta Zimbra Pro można skonfigurować na urządzeniu iPhone za pomocą protokołu ActiveSync. Dzięki temu skonfigurujesz wszystkie funkcje pracy zespołowej dla Twojego konta e-mail za jednym razem. Aplikacja Outlook firmy Microsoft na urządzeniach z systemem iOS jest dostępna bezpłatnie w App Store firmy Apple.

**Dowiedz się, jak skonfigurować Twoje konto e-mail Zimbra Pro w aplikacji mobilnej Outlook dla systemu iOS przy użyciu protokołu ActiveSync.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Twoim obowiązkiem jest zapewnienie właściwego funkcjonowania tych usług.
>
> Ten przewodnik ma na celu pomóc w wykonywaniu typowych zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [partnerem wyspecjalizowanym](/links/partner) i/lub skontaktowanie się z wydawcą usługi. Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji zawiera sekcja "[Sprawdź również](#go-further)" w tym przewodniku.

## Wymagania początkowe

- Posiadanie adresu e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Posiadanie aplikacji [Outlook dla systemu iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Dane do logowania do konta e-mail, które chcesz skonfigurować.

## W praktyce

### Dodaj konto <a name="add-account"></a>

- **Podczas pierwszego uruchomienia aplikacji Outlook** pojawi się asystent konfiguracji:
    - Kliknij `Dodaj konto`{.action}.

  ![Outlook iOS](images/outlook-app-ios-add-01.png){.thumbnail .h-500}

- **Jeśli konto jest już skonfigurowane w aplikacji Outlook**:
    1. Kliknij kółko z inicjałami konta e-mail, z którym się konsultujesz, lub ikonę domu (`⌂`{.action}) w lewym górnym rogu ekranu.
    2. Naciśnij koło zębate (`⛭`{.action})w lewym dolnym rogu ekranu.
    3. Następnie kliknij `Konta`{.action} w menu **Ustawienia**.
    4. Kliknij `Dodaj konto`{.action}.
    5. Naciśnij `Konto pocztowe`{.action}.

  ![Outlook iOS](images/outlook-app-ios-add-02.png){.thumbnail .h-500}

Postępuj zgodnie z kolejnymi instrukcjami zawartymi w **3** zakładkach:

> [!tabs]
> **Etap 1**
>>
>> Wpisz swój adres e-mail i kliknij `Dodaj konto`{.action}.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step-01.png){.thumbnail .h-500}
>>
> **Etap 2**
>>
>> Możliwe są dwa scenariusze:
>>
>> - Jeśli tekst "**IMAP**" znajduje się na górze strony: kliknij przycisk `?` w prawym górnym rogu ekranu **(1)**, następnie wybierz `Zmień dostawcę konta`{.action} **(2)**. Następnie wybierz `Exchange` **(3)** i przejdź do etapu 3.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step-02.png){.thumbnail .h-500}
>>
>> - Jeśli jesteś przekierowany bezpośrednio na wybór typu konta, wybierz `Exchange`.
>>
> **Etap 3**
>>
>> W kolejnym oknie zaznacz `Ustawienia zaawansowane`{.action} i uzupełnij następujące informacje:
>>
>> - **Adres e-mail**: Wpisz pełny adres e-mail.
>> - **Hasło**: Wpisz hasło powiązane z Twoim kontem e-mail.
>> - **Opis**: Wprowadź nazwę pozwalającą odróżnić to konto od Twoich pozostałych kont e-mail zarejestrowanych w programie Outlook.
>> - **Serwer**: wprowadź "zimbra1.mail.ovh.net".
>> - **Domena**: Pozostaw to pole puste.
>> - **Nazwa użytkownika**: Wpisz pełny adres e-mail.
>>
>> Aby dokończyć konfigurację, naciśnij przycisk `Połącz`{.action}.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step-03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Jeśli po wykonaniu powyższych kroków konfiguracyjnych wystąpi problem z wysyłaniem lub odbieraniem wiadomości, zapoznaj się z przewodnikiem "[Modyfikuj istniejące ustawienia](#modify-settings)".

### Użyj adresu e-mail

Po skonfigurowaniu adresu e-mail możesz zacząć z niego korzystać! Teraz możesz wysyłać i odbierać wiadomości, a także zarządzać kalendarzami i zadaniami.

OVHcloud oferuje również aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Możesz zalogować się do [webmail OVHcloud](/links/web/email) za pomocą identyfikatora Twojego konta e-mail. Jeśli masz pytania dotyczące korzystania z tej usługi, zapoznaj się z przewodnikiem "[Korzystanie z poczty Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Jak zmienić istniejące ustawienia? <a name="modify-settings"></a>

1. Stuknij kółko zawierające inicjały konta e-mail, z którym się konsultujesz lub ikonę domu (`⌂`{.action}) w lewym górnym rogu ekranu.
1. Naciśnij na koło zębate (`⛭`{.action}) w lewym dolnym rogu ekranu.
1. Następnie kliknij `Konta`{.action} w menu **Ustawienia**.
1. Wybierz odpowiednie konto.
1. Kliknij `Zmień dane logowania`{.action}.

![Outlook iOS](images/outlook-app-ios-modify-01.png){.thumbnail .h-500}

Ustawienia znajdziesz w **etap 3** rozdziału "[Dodaj konto](#add-account)".

### Jak usunąć konto e-mail? <a name="delete-account"></a>

1. Stuknij kółko zawierające inicjały konta e-mail, z którym się konsultujesz lub ikonę domu (`⌂`{.action}) w lewym górnym rogu ekranu.
1. Naciśnij na koło zębate (`⛭`{.action}) w lewym dolnym rogu ekranu.
1. Następnie kliknij `Konta`{.action} w menu **Ustawienia**.
1. Wybierz odpowiednie konto.
1. Kliknij `Usuń konto`{.action}.

![Outlook iOS](images/outlook-app-ios-delete-01.png){.thumbnail .h-500}


## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Outlook na urządzeniach z systemem iOS można znaleźć w [centrum pomocy Microsoft](https://support.microsoft.com/pl-pl/office/configurer-l-application-outlook-pour-ios-b2de2161-cc1d-49ef-9ef9-81acd1c8e234).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).