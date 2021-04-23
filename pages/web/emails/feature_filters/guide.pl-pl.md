---
title: 'Konfiguracja filtrów e-mail w Panelu klienta'
excerpt: 'Dowiedz się, jak utworzyć i skonfigurować filtr na Twoim koncie e-mail'
slug: hosting_www_konfiguracja_filtrow_e-mail_w_panelu_klienta
legacy_guide_number: g1973
section: 'Funkcjonalności kont e-mail'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.

**Ostatnia aktualizacja z dnia 12-08-2020**

## Wprowadzenie

Filtr pozwala na skonfigurowanie warunków dotyczących otrzymywanych wiadomości e-mail oraz związanych z nimi działań.

Na przykład: chcesz, aby wszystkie e-maile zawierające "[SPAM]" w temacie zostały usunięte.

- Warunek = temat wiadomości e-mail zawiera *SPAM*
- Action = usuń e-mail

**Dowiedz się, jak utworzyć i skonfigurować filtr na Twoim koncie e-mail**

## Wymagania początkowe

- Posiadanie usługi e-mail MX Plan lub [Pakiet hostingu www](https://www.ovh.pl/hosting/){.external}.
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

Najpierw zaloguj się do Twojego [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

Wybierz odpowiednią domenę w sekcji `E-maile`{.action}.

W tabeli z listą adresów e-mail kliknij ikonę `Filtr`{.action} odpowiedniego konta.

![emails](images/img_3239.jpg){.thumbnail}

Pojawi się lista filtrów aktualnie skonfigurowanych dla tego konta e-mail. Aby dodać filtr, kliknij przycisk po prawej stronie `Dodaj Filtr`{.action}.

![emails](images/img_3240.jpg){.thumbnail}

### Dowiedz się, jak skonfigurować filtry e-maili

![emails](images/img_3241.jpg){.thumbnail}

#### Informacje

- **Nazwa filtra:** Dzięki temu możesz wyróżnić Twoje filtry w Panelu klienta.
- **Priorytet:** Dzięki temu możesz zarządzać filtrami na tej samej skrzynce e-mail. Filtr priorytetowy 1 zostanie uruchomiony przed filtrem priorytetowym 5.
- **Włącz filtr:** Określa to, czy filtr będzie skuteczny czy nie (Możesz utworzyć filtr, wybierając opcję, jeśli chcesz ją aktywować później).

#### Zasady

Tutaj skonfigurujesz warunki, zasady filtra.

Wybór (Nagłówek):

- **Od:** Przykład korespondencji z nadawcą: "Jeśli nadawca ..."
- **DO:** Odbiorca: "Jeśli odbiorca ..."
- **Temat wiadomości:** Odpowiadający treści wiadomości, przykład: "Jeśli temat wiadomości ..."
- **Inne:** Inny parametr

Drugi wybór (Zasada):

- **spf:** Parametr zależny od pola SPF, na przykład: "... nie ma pola SPF ..."
- **zawiera:** przykład: "... zawiera ..."
- **nie zawiera:** przykład: "... nie zawiera ..."

Trzeci wybór (wartość):

- Przykład: [SPAM]

Czwarty wybór (+):

- Dzięki temu możesz dodać jeden lub więcej warunków dla tej samej operacji.

**Wynik tych warunków** - Przykład: "Jeśli temat wiadomości zawiera [SPAM]"

#### Działania

Tutaj właśnie wybierzecie, co zostanie zrobione przez filtr, jeśli powyższe warunki są spełnione.

Możesz wybrać:

- **Zaakceptuj:** Wiadomości spełniające te warunki będą zwykle otrzymywane.
- **Przekieruj na adres lokalny:** Przekieruj e-maile spełniające te warunki na jeden z kont e-mail domeny.
- **Usuwanie:** Zostaną usunięte e-maile spełniające warunki.
- **Przekieruj na zdalny adres:** Przekieruj wiadomości spełniające warunki na wybrany przez Ciebie adres e-mail.

### Przykłady

#### Usuń spam

||Nagłówek|Zasada|Wartość|Działanie|
|---|---|---|---|---|
|Parametry filtra|Temat wiadomości|zawiera|[SPAM]|usuwanie|
|Co zrobi filtr|Jeśli temat wiadomości|zawiera|ciąg dalszy "[SPAM]"|więc usuń wiadomość.|

#### Przekierowanie wiadomości e-mail odbiorcy

||Nagłówek|Zasada|Wartość|Działanie|
|---|---|---|---|---|
|Parametry filtra|Od|zawiera|contact@domaintest.ovh|przekierowanie na zdalny adres: john@otherdomain.ovh|
|Co zrobi filtr|Jeśli nadawca|jest|contact@domaintest.ovh|prześlij e-mail na adres john@otherdomain.ovh|

#### Przekierowanie adresów e-mail do listy mailingowej

||Nagłówek|Zasada|Wartość|Działanie|
|---|---|---|---|---|
|Parametry filtra|DO|zawiera|ML@mailing.com|Przekieruj na adres lokalny: recipient@mypersonaldomain.ovh|
|Co zrobi filtr|Jeśli wiadomość została wysłana na listę mailingową|nazywane|ML@mailing.com|prześlij wiadomość na inny adres: recipient@mypersonaldomain.ovh|

#### Usuń e-maile zawierające niechcianą informację z wyjątkiem nadawcy

Dodaje się dwa filtry:

||Nagłówek|Zasada|Wartość|Działanie|
|---|---|---|---|---|
|Parametry filtra 1|Temat wiadomości|zawiera|"money"|usuwanie|
|Parametry filtra 2|Od|nie zawiera|john@mybank.ovh|usuwanie|

Jeśli temat wiadomości zawiera słowo "money", **a** nadawcą wiadomości nie jest "john@mybank.ovh", wówczas wiadomość zostanie usunięta.

W takim przypadku konfiguracja będzie następująca:

![emails](images/img_3242.jpg){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
