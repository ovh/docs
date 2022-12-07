---
title: 'Zarządzanie polityką bezpieczeństwa usługi e-mail'
slug: zarzadzanie-polityka-bezpieczenstwa-exchange
excerpt: 'Dowiedz się, jak zarządzać polityką bezpieczeństwa usługi e-mail'
section: 'Pierwsze kroki z Exchange'
order: 06
---

**Ostatnia aktualizacja z dnia 22-04-2022**

## Wprowadzenie

Usługi e-mail OVHcloud umożliwiają korzystanie z profesjonalnych kont e-mail. Aby zapewnić ochronę tego środowiska, możesz zarządzać globalnymi ustawieniami zabezpieczeń dla kont e-mail.

**Dowiedz się, jak zarządzać polityką bezpieczeństwa usługi e-mail.**

## Wymagania początkowe

- Posiadanie usługi [e-mail OVHcloud](https://www.ovhcloud.com/pl/emails/){.external}
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), sekcja `Web Cloud`{.action}

## W praktyce

Zarządzanie polityką bezpieczeństwa usługi e-mail może wiązać się z czterema aspektami:

- wzmocnienie bezpieczeństwa kont e-mail podczas próby logowania przez użytkowników;
- ustanowienie bardziej złożonych haseł dla kont usługi e-mail;
- wzmocnienie weryfikacji wiadomości przychodzących na serwery OVHcloud i na Twoje konta e-mail (dotyczy wyłącznie kont [Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/){.external});
- zdefiniowanie, jak wiadomości „niechciane” będą wyświetlane w Twoich skrzynkach e-mail (dotyczy wyłącznie kont [Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/){.external}).

Aby przejść do polityki bezpieczeństwa usługi e-mail, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i przejdź do sekcji `Web Cloud`{.action}. 

|E-maile i E-mail Pro|Exchange| 
|---|---| 
|kliknij pozycję `E-maile`{.action} lub `E-mail Pro`{.action} i wybierz odpowiednią ofertę. Kliknij kartę `Plus`, a następnie `Zarządzaj polityką bezpieczeństwa`{.action}.|kliknij pozycję `Microsoft`{.action}, następnie `Exchange`{.action} i wybierz odpowiednią ofertę. Kliknij kartę `Plus`, a następnie `Zarządzaj polityką bezpieczeństwa`{.action}.|
|![exchangesecurity](images/manage-security01.png){.thumbnail}|![exchangesecurity](images/manage-security02.png){.thumbnail}|

> [!primary]
>
> Jeśli nie wyświetla się zakładka `Więcej`{.action} w panelu zarządzania usługą `Emaile`{.action}, oznacza to, że jesteś na historycznej ofercie MXplan. Nie ma zarządzania polityką bezpieczeństwa w odniesieniu do oferty MXplan historyczny.

Następnie przejdź do aspektów, które chcesz zmodyfikować.


- [Wzmocnienie bezpieczeństwa danych](#enhanced-security): Określ, czy konta mają być blokowane po pewnej liczbie nieudanych prób logowania.|
- [Ustanowienie bardziej złożonego hasła](#password-complexity):Ustaw wymaganie złożoności oraz reguły zmiany hasła.|
- [Wzmocnienie weryfikacji wiadomości przychodzących (dotyczy wyłącznie usługi Exchange)](./#wzmocnienie-weryfikacji-wiadomosci-przychodzacych-dotyczy-wylacznie-uslugi-exchange){.external}|Określ, czy serwery OVHcloud mają sprawdzać, czy otrzymane wiadomości pochodzą z dozwolonego źródła (weryfikacje DKIM i/lub SPF).|
- [Określenie sposobu wyświetlania niechcianych wiadomości (dotyczy wyłącznie usługi Exchange)](./#okreslenie-sposobu-wyswietlania-niechcianych-wiadomosci-dotyczy-wylacznie-uslugi-exchange){.external}|Określ, czy niechciane wiadomości mają zawierać tag pozwalający je zidentyfikować, czy też automatycznie trafiać do kosza.|

### Wzmocnienie bezpieczeństwa danych <a name="enhanced-security"></a>

Możesz ustalić, czy konta e-mail mają być blokowane po określonej liczbie nieudanych prób logowania.

W tym celu uzupełnij informacje podane w poniższej tabeli:

- **Próg blokady|**: Określi liczbę nieudanych prób logowania, po której konto zostanie zablokowane. Wpisz „0”, jeśli nie chcesz ustalać progu blokady.|
- **Czas resetu**: Pole to pojawia się tylko wtedy, gdy został określony próg blokady. Określ czas potrzebny na przywrócenie licznika nieudanych prób logowania.
- **Czas blokady**: Pole to pojawia się tylko wtedy, gdy został określony próg blokady. Określ czas, przez jaki konto e-mail pozostanie zablokowane, jeśli osiągnięty zostanie próg blokady.

Po uzupełnieniu tych informacji możesz zatwierdzić zmiany, klikając `Dalej`{.action}, a następnie `Zatwierdź`{.action} w przypadku ofert „E-maile” i „E-mail Pro”. W przypadku oferty Exchange kliknij `Zapisz zmiany`{.action}.

### Ustanowienie bardziej złożonego hasła <a name="password-complexity"></a>

Ustaw wymaganie złożoności oraz reguły zmiany hasła.

W tym celu uzupełnij informacje podane w poniższej tabeli:

- **Wymagania dotyczące złożoności hasła**: Pozwala ustalić reguły dotyczące złożoności hasła:<br> \- nie może zawierać nazwy konta użytkownika ani jej części;<br> \- musi zawierać co najmniej 6 znaków;<br> \- musi zawierać duże i małe litery, znaki specjalne (np. !, $, etc.) oraz cyfry.
- **Blokada zmiany hasła**: Umożliwia ustawienie minimalnego czasu ważności haseł ustanowionych dla kont e-mail. Użytkownicy będą musieli odczekać określoną liczbę dni, zanim zmienią hasło.
- **Maksymalny czas ważności hasła**: Umożliwia ustawienie maksymalnego czasu ważności haseł ustanowionych dla kont e-mail. Użytkownicy będą musieli zmienić hasło po upływie określonego terminu.
- **Zachowanie historii hasła (dotyczy wyłącznie usługi Exchange)**: Pole to pojawia się tylko wtedy, gdy określony został maksymalny czas ważności hasła. Określ okres, wyrażony w dniach, po upływie którego można ponownie użyć poprzednich haseł.
- **Minimalna długość hasła|Umożliwia ustawienie minimalnej długości haseł, jeśli użytkownik chce je zmieniać.

Po uzupełnieniu tych informacji możesz zatwierdzić zmiany, klikając `Dalej`{.action}, a następnie `Zatwierdź`{.action} w przypadku ofert „E-maile” i „E-mail Pro”. W przypadku oferty Exchange kliknij `Zapisz zmiany`{.action}.

### Wzmocnienie weryfikacji wiadomości przychodzących (dotyczy wyłącznie usługi Exchange) <a name="incoming-messages-verification"></a>	

Możesz określić, czy serwery OVHcloud mają sprawdzać, czy wiadomości spływające na konta e-mail pochodzą z dozwolonego źródła wysyłki (weryfikacje DKIM i/lub SPF).

W tym celu zaznacz żądane pola w poniższej tabeli:

- **Aktywacja weryfikacji podpisu DKIM**: Określ, czy serwery OVHcloud mają weryfikować podpis DKIM pod wiadomościami, które spływają na Twoje konta Exchange. Czynność ta gwarantuje autentyczność domeny nadawcy i integralność wiadomości. Umożliwia również identyfikację wiadomości pochodzących z nielegalnych źródeł i oznaczenie ich jako spam.
- **Aktywacja weryfikacji ochrony SPF**: Określ, czy serwery OVHcloud powinny weryfikować, czy źródło wysyłki spływających do Ciebie wiadomości jest zapisane w rekordzie SPF domeny nadawcy. Weryfikacja ta może pomóc w identyfikacji wiadomości pochodzących z nielegalnych źródeł. Wiadomości takie będą oznaczane jako spam.

Po dokonaniu wyboru zatwierdź zmiany, klikając polecenie `Zapisz zmiany`{.action}.

### Określenie sposobu wyświetlania niechcianych wiadomości (dotyczy wyłącznie usługi Exchange) <a name="unwanted-messages-management"></a>	

Czynność ta pozwala określić, czy niechciane wiadomości, które spływają na konta e-mail mają zawierać tag pozwalający je zidentyfikować, bądź też automatycznie przenieść do kosza.

W tym celu zaznacz żądane pola w poniższej tabeli:

- **Identyfikacja niechcianych wiadomości**: Określ, czy serwery OVHcloud mają dodać tag pozwalający zidentyfikować niechciane wiadomości jako spam.|
- **Przenoszenie niechcianych wiadomości do kosza**: Określ, czy serwery OVHcloud mają automatycznie przenosić niechciane wiadomości do kosza.

Po dokonaniu wyboru zatwierdź zmiany, klikając polecenie `Zapisz zmiany`{.action}.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com>.