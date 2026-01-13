---
title: "Zimbra Pro - Konfiguracja konta e-mail za pomocą ActiveSync w programie Outlook na urządzeniu z systemem Windows"
excerpt: "Dowiedz się, jak skonfigurować Twoje konto e-mail Zimbra Pro w programie Outlook na urządzeniu z systemem Windows przy użyciu protokołu ActiveSync"
updated: 2025-12-31
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
.h-500 {
  max-width:500px !important;
}
</style>

## Wprowadzenie

Konta Zimbra Pro można skonfigurować w systemie Windows za pomocą protokołu ActiveSync, co pozwala na jednorazowe skonfigurowanie wszystkich funkcji pracy zespołowej dla konta e-mail. Aplikacja Outlook dla Windows umożliwia dostęp do konta e-mail Zimbra Pro przy użyciu protokołu ActiveSync.

**Dowiedz się, jak skonfigurować konto e-mail Zimbra Pro w programie Outlook dla systemu Windows przy użyciu protokołu ActiveSync.**

## Wymagania początkowe

- Posiadanie adresu e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Posiadanie aplikacji [klasyczny program Outlook](https://support.microsoft.com/pl-pl/office/instalowanie-lub-ponowne-instalowanie-klasycznego-programu-outlook-na-komputerze-z-systemem-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) w systemie Windows.
- Dane do logowania do konta e-mail, które chcesz skonfigurować.

/// details | Informacje dotyczące zarządzania i konfiguracji usług OVHcloud

OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Twoim obowiązkiem jest zapewnienie właściwego funkcjonowania tych usług.

Ten przewodnik ma na celu pomóc w wykonywaniu typowych zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [partnerem wyspecjalizowanym](/links/partner) i/lub skontaktowanie się z wydawcą usługi. Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji zawiera sekcja "[Sprawdź również](#go-further)" w tym przewodniku.

///

## W praktyce

> [!warning]
>
> Przed rozpoczęciem konfiguracji należy zauważyć, że bezpłatna aplikacja Outlook zawarta w ofercie Windows 11 jest niekompatybilna z protokołem ActiveSync niezbędnym do skonfigurowania konta Zimbra Pro. Aby korzystać z funkcji obsługi protokołu ActiveSync, musisz korzystać z klasycznej wersji programu **Outlook*.
>
> Aby zainstalować klasyczny program Outlook na komputerze z systemem Windows, pobierz go ze strony "[Instalowanie lub ponowna instalacja klasycznego programu Outlook na komputerze z systemem Windows](https://support.microsoft.com/pl-pl/office/instalowanie-lub-ponowne-instalowanie-klasycznego-programu-outlook-na-komputerze-z-systemem-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" i zainstaluj go.
>
> Po zakończeniu instalacji, aby odróżnić dwie wersje, gdy są zainstalowane, wpisz "Outlook" na pasku wyszukiwania Windows. Zobaczysz różnicę, jak poniżej.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Dodaj konto <a name="add-account"></a>

Aby dodać konto Zimbra Pro w klasycznym Outlooku, wykonaj poniższe kroki, klikając kolejno na odpowiednie karty:

> [!tabs]
> **Etap 1**
>>
>> 1. Przejdź do **Panelu sterowania** systemu Windows.
>> 2. Kliknij `Konta użytkowników`{.action}.
>> 3. Kliknij `Poczta`{.action}.
>> 4. Kliknij opcję `Konta e-mail...`{.action}.
>>
>> ![outlook Windows](images/outlook-windows-add-step01.png){.thumbnail .h-500}
>>
> **Etap 2**
>>
>> - W oknie **Ustawienia konta**, w karcie `Poczta`, kliknij `Nowy...`{.action}.
>>
>> ![outlook Windows](images/outlook-windows-add-step02.png){.thumbnail .h-500}
>>
> **Etap 3**
>>
>> - W oknie **Dodaj konto** wybierz opcję `Konfiguracja ręczna lub dodatkowe typy serwerów`{.action}.
>> - Kliknij na `Dalej`{.action}, aby kontynuować.
>>
>> ![outlook Windows](images/outlook-windows-add-step03.png){.thumbnail .h-500}
>>
> **Etap 4**
>>
>> - Wybierz `Exchange ActiveSync`{.action}.
>> - Kliknij na `Dalej`{.action}, aby kontynuować.
>>
>> ![outlook Windows](images/outlook-windows-add-step04.png){.thumbnail .h-500}
>>
> **Etap 5**
>>
>> Wpisz dane do logowania:
>>
>> - **Twoja nazwa**: Ustaw nazwę wyświetlaną.
>> - **Adres e-mail**: Wpisz pełny adres e-mail.
>> - **Serwer pocztowy**: Wpisz "zimbra1.mail.ovh.net".
>> - **Nazwa użytkownika**: Wpisz pełny adres e-mail.
>> - **Hasło**: Wpisz hasło powiązane z Twoim kontem e-mail.
>>
>> Kliknij przycisk `Dalej`{.action}, aby zakończyć dodawanie konta.
>>
>> ![outlook Windows](images/outlook-windows-add-step05.png){.thumbnail .h-500}
>>
> **Etap 6**
>>
>> Twój adres e-mail został skonfigurowany dla programu Outlook. Aby zapewnić pełną synchronizację funkcji konta Zimbra Pro, **pobierz i zainstaluj** moduł "[Zimbra Connector for Outlook](https://www.zimbra.com/product/addons/zimbra-connector-for-outlook-download/)".
>>
>> ![outlook Windows](images/outlook-windows-add-step06.png){.thumbnail .h-500}
>>
> **Etap 7**
>>
>> Po zainstalowaniu modułu "[Zimbra Connector for Outlook](https://www.zimbra.com/product/addons/zimbra-connector-for-outlook-download/)" uruchom klasyczny program Outlook.
>> Po raz pierwszy pojawi się okno konfiguracyjne **Zimbra Server configuration Settings**. Uzupełnij następujące informacje:
>>
>> - **Nazwa serwera**: Wpisz "zimbra1.mail.ovh.net".
>> - **Adres e-mail**: Wpisz pełny adres e-mail.
>> - **Hasło**: Wpisz hasło powiązane z Twoim kontem e-mail.
>>
>> Nie ma potrzeby zmieniania innych ustawień. Kliknij pozycję `Zastosuj`{.action}, aby zatwierdzić ustawienia i upewnić się, że są one zgodne. Następnie kliknij przycisk `OK`{.action}, aby uzyskać dostęp do programu Outlook i rozpocząć korzystanie z konta e-mail.
>>
>> ![outlook Windows](images/outlook-windows-add-step-07.png){.thumbnail .h-500}

> [!warning]
>
> Jeśli po wykonaniu powyższych kroków konfiguracyjnych wystąpi problem z wysyłaniem lub odbieraniem wiadomości, zapoznaj się z przewodnikiem "[Modyfikuj istniejące ustawienia](#modify-settings)".

### Użyj adresu e-mail

Po skonfigurowaniu adresu e-mail możesz zacząć z niego korzystać! Teraz możesz wysyłać i odbierać wiadomości, a także zarządzać kalendarzami i zadaniami.

OVHcloud oferuje również aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Możesz zalogować się do [webmail OVHcloud](/links/web/email) za pomocą identyfikatora Twojego konta e-mail. Jeśli masz pytania dotyczące korzystania z tej usługi, zapoznaj się z przewodnikiem "[Korzystanie z poczty Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Jak zmienić istniejące ustawienia? <a name="modify-settings"></a>

Aby zmienić parametry skonfigurowanego konta e-mail, postępuj zgodnie z poniższymi instrukcjami:

1. Przejdź do **Panelu sterowania** systemu Windows.
1. Kliknij `Konta użytkowników`{.action}.
1. Kliknij `pozycję Poczta`{.action}.
1. Kliknij `Konta e-mail...`{.action}.
1. Wybierz z listy odpowiednie konto e-mail i kliknij przycisk `Zmień...`{.action}.

![Outlook iOS](images/outlook-windows-modify-01.png){.thumbnail .h-500}

Ustawienia znajdziesz w **etap 7** rozdziału "[Dodaj konto](#add-account)".

### Jak usunąć konto e-mail? <a name="delete-account"></a>

Aby usunąć konto e-mail, postępuj zgodnie z poniższymi instrukcjami:

1. Przejdź do **Panelu sterowania** systemu Windows.
1. Kliknij `Konta użytkowników`{.action}.
1. Kliknij `pozycję Poczta`{.action}.
1. Kliknij `Konta e-mail...`{.action}.
1. Wybierz z listy odpowiednie konto e-mail i kliknij przycisk `Usuń`{.action}.

![Outlook iOS](images/outlook-windows-delete-01.png){.thumbnail .h-500}

> [!warning]
>
> Aby mieć możliwość usunięcia konta e-mail, konieczne jest, aby nie było ono domyślnym kontem e-mail.

## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Outlook w systemie Windows można znaleźć w [Centrum pomocy Microsoft](https://support.microsoft.com/pl-pl/office/dodawanie-konta-e-mail-do-programu-outlook-dla-systemu-windows-6e27792a-9267-4aa4-8bb6-c84ef146101b?ocmsassetID=&CorrelationId=778d1d8d-9ac2-4449b-96292924_4b).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).