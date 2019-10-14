---
title: 'Zarządzanie polityką bezpieczeństwa Exchange'
slug: zarzadzanie-polityka-bezpieczenstwa-exchange
excerpt: 'Dowiedz się, jak zarządzać polityką bezpieczeństwa dla usługi Exchange'
section: 'Pierwsze kroki z usługą Exchange'
order: 6
---

**Ostatnia aktualizacja z dnia 2019-09-10**

## Wprowadzenie

Usługa Microsoft Exchange umożliwia korzystanie z profesjonalnych kont e-mail, które ułatwiają pracę zespołową dzięki kilku funkcjonalnościom. Aby zapewnić ochronę tego środowiska, możesz zarządzać globalnymi ustawieniami zabezpieczeń dla kont Exchange.

**Dowiedz się, jak zarządzać polityką bezpieczeństwa dla usługi Exchange.**

## Wymagania początkowe

- Posiadanie usługi [Exchange](https://www.ovh.pl/emaile/hosted-exchange/){.external}
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager), sekcja `Web`{.action}

## W praktyce

Zarządzanie polityką bezpieczeństwa usługi Exchange może dotyczyć czterech aspektów:

- wzmocnienie bezpieczeństwa kont Exchange podczas próby logowania przez użytkowników,
- ustanowienie bardziej złożonych haseł dla kont usługi Exchange,
- wzmocnienie weryfikacji wiadomości przychodzących na serwery OVH i na Twoje konta Exchange,
- zdefiniowanie, jak wiadomości „niechciane” będą się wyświetlały na Twoich kontach Exchange.

Aby uzyskać dostęp do polityki bezpieczeństwa usługi Exchange, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager) i przejdź do sekcji „Web”. Kliknij `Microsoft`{.action} na pasku usług po lewej stronie, kliknij `Exchange`{.action}, po czym wybierz odpowiednią usługę Exchange.

Na stronie, która się wyświetli kliknij zakładkę `Więcej`{.action}, a następnie `Zarządzaj polityką bezpieczeństwa`{.action}.

![exchangesecurity](images/exchange-security-step1.png){.external}

Następnie przejdź do aspektów, które chcesz zmodyfikować.

|Aspekt|Opis | 
|---|---| 
|[Wzmocnienie bezpieczeństwa logowania](./#wzmocnienie-bezpieczenstwa-logowania){.external}|Określ, czy konta mają być blokowane po pewnej liczbie nieudanych prób logowania.|
|[Ustanowienie bardziej złożonego hasła](./#ustanowienie-bardziej-zlozonego-hasla){.external}|Ustaw wymaganie złożoności oraz reguły zmiany hasła.|
|[Wzmocnienie weryfikacji wiadomości przychodzących](./#wzmocnienie-weryfikacji-wiadomosci-przychodzacych){.external}|Określ, czy serwery OVH mają sprawdzać, czy otrzymane wiadomości pochodzą z legalnego źródła wysyłki (weryfikacje DKIM i/lub SPF).|
|[Określenie sposobu wyświetlania niechcianych wiadomości](./#okreslenie-sposobu-wyswietlania-niechcianych-wiadomosci){.external}|Określ, czy niechciane wiadomości mają zawierać tag pozwalający je zidentyfikować i automatycznie przenieść do kosza.|

### Wzmocnienie bezpieczeństwa logowania

Możesz ustalić, czy konta Exchange mają być blokowane po określonej liczbie nieudanych prób logowania.

W tym celu, na stronie, która się wyświetla wprowadź informacje wymienione w poniższej tabeli:

|Informacja|Opis | 
|---|---| 
|Próg blokady|Określ liczbę nieudanych prób logowania, po której konto zostanie zablokowane. Wpisz „0”, jeśli nie chcesz ustalać progu blokady.|
|Czas resetowania|Pole to pojawia się jedynie, gdy został ustalony próg blokady. Określ czas, po którym licznik nieudanych prób logowania zostanie zresetowany.|
|Czas blokowania|Pole to pojawia się jedynie, gdy został ustalony próg blokady. Określ czas, przez jaki konto Exchange pozostanie zablokowane, jeśli osiągnięty zostanie próg blokady.|

Po uzupełnieniu tych informacji możesz zatwierdzić zmiany, klikając `Dalej`{.action}, a następnie `Zatwierdź`{.action}. Możesz również przejść do następnej części.

### Ustanowienie bardziej złożonego hasła

Ustaw wymaganie złożoności oraz reguły zmiany hasła.

W tym celu, na stronie, która się wyświetla wprowadź informacje wymienione w poniższej tabeli:

|Informacja|Opis | 
|---|---| 
|Wymagania dotyczące złożoności hasła|Pozwala ustalić reguły dotyczące złożoności hasła:<br> \- nie może zawierać nazwy konta użytkownika ani jej części<br> \- musi zawierać co najmniej 6 znaków<br> \- musi zawierać duże i małe litery, znaki specjalne (np. !, $, etc.) oraz cyfry.|
|Blokada zmiany hasła|Umożliwia ustawienie minimalnego czasu ważności haseł ustanowionych dla kont Exchange. Oznacza to, że użytkownicy będą musieli odczekać określoną liczbę dni, zanim zmienią hasło.|
|Maksymalny czas ważności hasła|Umożliwia ustawienie maksymalnego czasu ważności haseł ustanowionych dla kont Exchange. Oznacza to, że użytkownicy będą musieli zmienić hasło po upływie określonego terminu.|
|Zachowanie historii hasła|Pole to pojawia się tylko wtedy, gdy określony został maksymalny czas ważności hasła. Określ, ile razy poprzednie hasła mogą być ponownie użyte i w ciągu jakiego czasu.|
|Minimalna długość hasła|Umożliwia ustawienie minimalnej długości haseł, jeśli użytkownik chce je zmieniać.|

Po uzupełnieniu tych informacji możesz zatwierdzić zmiany, klikając `Dalej`{.action}, a następnie `Zatwierdź`{.action}. Możesz również przejść do następnej części.

### Wzmocnienie weryfikacji wiadomości przychodzących

Możesz określić, czy serwery OVH mają sprawdzać, czy wiadomości spływające na konta Exchange pochodzą z legalnego źródła wysyłki (weryfikacje DKIM i/lub SPF).

W tym celu, na stronie, która się wyświetla wprowadź informacje wymienione w poniższej tabeli:

|Informacja|Opis | 
|---|---| 
|Aktywacja weryfikacji podpisu DKIM|Określ, czy serwery OVH mają weryfikować podpis DKIM pod wiadomościami, które spływają na Twoje konta Exchange. Czynność ta gwarantuje autentyczność domeny nadawcy oraz że wiadomość jest kompletna. Umożliwia również identyfikację wiadomości pochodzących z nielegalnych źródeł i oznaczenie ich jako spam.|
|Aktywacja weryfikacji ochrony SPF|Określ, czy serwery OVH powinny weryfikować, czy źródło wysyłki spływających do Ciebie wiadomości jest zapisane w rekordzie SPF domeny nadawcy. Weryfikacja ta może pomóc w identyfikacji wiadomości pochodzących z nielegalnych źródeł. Wiadomości takie będą oznaczane jako spam.|

Po uzupełnieniu tych informacji możesz zatwierdzić zmiany, klikając `Dalej`{.action}, a następnie `Zatwierdź`{.action}. Możesz również przejść do następnej części.

### Określenie sposobu wyświetlania niechcianych wiadomości

Czynność ta pozwala określić, czy niechciane wiadomości, które spływają na konta Exchange mają zawierać tag pozwalający je zidentyfikować i automatycznie przenieść do kosza.

W tym celu, na stronie, która się wyświetla wprowadź informacje wymienione w poniższej tabeli:

|Informacja|Opis | 
|---|---| 
|Identyfikacja niechcianych wiadomości.|Określ, czy serwery OVH mają dodawać tag pozwalający zidentyfikować niechciane wiadomości jako spam.|
|Przenoszenie niechcianych wiadomości do kosza.|Określ, czy serwery OVH mają automatycznie przenosić niechciane wiadomości do kosza.|

Po uzupełnieniu tych informacji możesz zatwierdzić zmiany, klikając `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://comunity.ovh.com/en/>.