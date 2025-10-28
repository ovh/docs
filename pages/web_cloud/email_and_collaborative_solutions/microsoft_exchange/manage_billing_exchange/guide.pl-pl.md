---
title: 'Zarządzanie fakturowaniem kont Exchange'
excerpt: 'Dowiedz się, jak zarządzać fakturowaniem usługi Exchange'
updated: 2025-09-22
---

## Wprowadzenie

Usługi Hosted Exchange i Private Exchange umożliwiają elastyczne zarządzenie fakturowaniem dla kont. Niniejszy przewodnik przedstawia, jak skonfigurować fakturowanie.

**Dowiedz się, jak zarządzać abonamentami na konta Exchange.**

## Wymagania początkowe

- Dostęp do [panelu klienta OVHcloud](/links/manager).
- Wykupienie usługi [Exchange](/links/web/emails-hosted-exchange).

## W praktyce

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Web Cloud`{.action}.
1. W sekcji `MICROSOFT` kliknij `Exchange`{.action}.
1. Wybierz odpowiednią platformę.

### Hosted Exchange

#### Zamówienie dodatkowych kont

Przejdź do karty `Konta e-mail`{.action}, następnie kliknij przycisk `Akcje`{.action}w lewym górnym rogu i wybierz opcję `Zamów konta`{.action}

![billing_exchange](images/billing-exchange-00.png){.thumbnail}

#### Zmiana częstotliwości odnawiania usługi dla Twoich kont <a name="periodicity"></a>

W oknie zarządzania Twoją usługą Exchange kliknij przycisk `Akcje`{.action} w prawym górnym rogu, a następnie wybierz opcję `Konfiguracja odnawiania usługi`{.action}.

![billing_exchange](images/billing-exchange-01.png){.thumbnail}

Zostanie wyświetlona sekcja „Moje usługi” w Twoim Panelu klienta. Dostrzeżesz tu filtr zastosowany, by wyświetlać wyłącznie usługę Exchange, którą chcesz modyfikować.

Kliknij `...`{.action} z prawej strony platformy Exchange, a następnie `Zmień fakturowanie`{.action}.

![billing_exchange](images/billing-exchange-02.png){.thumbnail}

Pojawi się nowe okno, w którym możesz wyświetlać i zmieniać sposoby fakturowania dla każdego Twojego konta. Można wprowadzać zmiany w kolumnie „**Odnawianie**” dla jednego lub większej liczby kont jednocześnie. Każda zmiana w koncie zostanie wprowadzona w dniu wskazanym w kolumnie „**Data wygaśnięcia**”.

Poniższy przykład zawiera działania, które należy przeprowadzić, aby przejść na comiesięczne odnawianie usługi dla konta.

> W pierwszym etapie kliknij opcję „**Co miesiąc**” z prawej strony wybranego konta, a następnie wybierz `Dalej`{.action} na dole po lewej.
>
> W drugim etapie wyświetli się podsumowanie wskazujące wprowadzoną zmianę. Kliknij przycisk `Wyślij`{.action} na dole po lewej.
>
> ![billing_exchange](images/billing-exchange-03.png){.thumbnail}

#### Usuwanie kont

Aby usunąć konto z usługi Hosted, należy najpierw zrezygnować z niego, przechodząc procedurę konfiguracji jego odnawiania w sekcji „**Wygasa z końcem**”. W tym celu należy zapoznać się z etapem [„zmiana częstotliwości odnawiania kont”](#periodicity).

Po rezygnacji konto będzie zawieszone do daty wygaśnięcia. Jeśli chcesz usunąć adres e-mail obsługiwany na koncie przed jego datą wygaśnięcia, należy go zresetować.

Przejdź do karty `Konta e-mail`{.action} Twojej usługi, kliknij przycisk `...`{.action} przed danym kontem, a następnie kliknij `Zresetuj`{.action}. Po zresetowaniu konto pozostanie nieaktywne do czasu wygaśnięcia.

### Private Exchange

> [!primary]
>
> W usłudze Private Exchange konta są odnawiane wyłącznie co miesiąc. Nie można więc skonfigurować częstotliwości odnawiania usługi.

#### Zamówienie dodatkowych kont

Przejdź do karty `Konta e-mail`{.action}, następnie kliknij przycisk `Akcje`{.action} w lewym górnym rogu i wybierz opcję `Dodaj konto`{.action}. Konto zostanie zafakturowane za bieżący miesiąc.

![billing_exchange](images/billing-exchange-06.png){.thumbnail}

#### Usuwanie kont

> [!warning]
>
> Aby móc usunąć konto e-mail z platformy Private Exchange, **konieczne jest, aby zostało ono utworzone** (przypisane do nazwy domeny Twojej platformy Exchange). Nie można usunąć nieskonfigurowanego konta.

W karcie `Konta e-mail`{.action} kliknij `...`{.action} z prawej strony danego konta i wybierz `Usuń`{.action}. Konto zostanie natychmiastowo usunięte z usługi, nie ma więc potrzeby przeprowadzenia procesu rezygnacji.

![billing_exchange](images/billing-exchange-07.png){.thumbnail}

## Rezygnacja z usługi

Po usunięciu kont e-mail należy usunąć domenę lub domeny powiązane z Twoją platformą Exchange przed jej zakończeniem. W tym celu przejdź do zakładki `Przypisane domeny`{.action}. Kliknij przycisk `...`{.action} w linii nazwy domeny, którą chcesz usunąć, następnie kliknij `Usuń tą domenę`{.action}.

![billing_exchange](images/billing-exchange-del-dom.png){.thumbnail}

W oknie zarządzania Twoją platformą Exchange kliknij przycisk `Operacje`{.action} w prawym górnym rogu, a następnie wybierz `Zrezygnuj`{.action}.

![billing_exchange](images/billing-exchange-08.png){.thumbnail}

> [!primary]
>
> Ta operacja spowoduje zawieszenie i usunięcie wszystkich kont usługi Exchange w dniu ich wygaśnięcia.

## Sprawdź również <a name="go-further"></a>

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).