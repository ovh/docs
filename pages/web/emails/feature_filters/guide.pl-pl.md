---
title: 'Konfiguracja filtrów e-mail w Panelu klienta'
excerpt: 'Dowiedz się, jak utworzyć i skonfigurować filtr na Twoim koncie e-mail'
legacy_guide_number: g1973
updated: 2021-09-27
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 27-09-2021**

## Wprowadzenie

Filtr e-mail umożliwia zastosowanie różnych metod leczenia otrzymywanych wiadomości zgodnie z wybranymi kryteriami.

Na przykład: chcesz, aby wszystkie e-maile zawierające "[SPAM]" w temacie zostały usunięte.

- Kryterium = Temat e-maila zawiera *SPAM*
- Przetwarzanie = usuń e-mail

**Dowiedz się, jak utworzyć i skonfigurować filtr na Twoim koncie e-mail.**

## Wymagania początkowe

- Posiadanie usługi e-mail MX Plan (dostępnej poprzez: [oferta hostingu](https://www.ovhcloud.com/pl/web-hosting/){.external}, bezpłatny [hosting Start 10M](https://www.ovhcloud.com/pl/domains/free-web-hosting/){.external} zawarty w ofercie domeny lub oferta MX Plan zamówiona oddzielnie).
- Posiadanie dostępu do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

> [!warning]
>
> Poniższy przewodnik skierowany jest do posiadaczy "historycznej" oferty MXplan. W przypadku nowej oferty zarządzanie filtrami odbywa się bezpośrednio w Webmail OWA (**O**utlook **W**eb **A**pplication). Zidentyfikuj ofertę korzystając z poniższej tabeli.
>

Poprzednia wersja usługi MX Plan|Nowa wersja usługi MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Znajdź nazwę oferty w polu „Abonament”.|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Znajdź Oznaczenie serwera w polu "Podsumowanie"|
|Przejdź do sekcji "[W praktyce](#oldmxplan)" niniejszego przewodnika.|Przejdź do naszego przewodnika "[Reguły skrzynki odbiorczej w interfejsie OWA](https://docs.ovh.com/pl/microsoft-collaborative-solutions/tworzenie-regul-skrzynki-odbiorczej-w-owa/)".|

## W praktyce <a name="oldmxplan"></a>

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} w sekcji `Web Cloud`.

Kliknij E-maile na pasku usług, po czym wybierz odpowiednią usługę MX Plan.

W zakładce `E-maile`{.action} w Twojej usłudze MXplan znajdziesz listę Twoich kont e-mail. Kolumna `Filtry` jest widoczna w tabeli kont e-mail. Kliknij ikonę lejka.

![emails](images/img_3239.png){.thumbnail}

Teraz przejdź do listy filtrów aktualnie skonfigurowanych dla tego konta e-mail.

![emails](images/img_3240.jpg){.thumbnail}

Aby dodać regułę do Twojego konta e-mail, kliknij przycisk `Dodaj Filtr`{.action}.

- **Nazwa filtra:** wybierz nazwę dla filtra.

- **Priorytet:** określa kolejność wykonywania filtrów dla wiadomości przychodzącej. Filtr priorytetowy 1 zostanie uruchomiony przed filtrem priorytetowym 2.

- **Włącz filtr:** usuń zaznaczenie tej opcji, jeśli chcesz zastosować ten filtr później.

### Dowiedz się, jak skonfigurować filtry e-maili

Po dodaniu filtra wyświetli się następujące okno:

![emails](images/img_3241.jpg){.thumbnail}

#### Zasady

W tej części możesz zdefiniować wiadomości, do których zostanie zastosowany filtr.

Wybór (nagłówek):

- **Od:** na przykład adres e-mail nadawcy: "Jeśli nadawca ..."
- **Do:** na przykład adres e-mail odbiorcy: "Jeśli odbiorca ..."
- **Temat wiadomości:** oznacza treść treści komunikatu, np.: "Jeśli temat wiadomości ... ".
- **Inne:** wskaż inny element, który należy uwzględnić w nagłówku wiadomości e-mail.

Druga opcja (reguła):

- **spf:** Wskaż wartość [pola SPF](/pages/web/domains/dns_zone_spf), które należy uwzględnić, na przykład: "... nie ma pola SPF ... ".
- **zawiera:** przykład: "... zawiera ... ".
- **nie zawiera:** przykład: ".. nie zawiera ... ".

Trzeci wybór (wartość):

- Przykład: [SPAM]

Czwarty wybór (+):

- Dzięki temu możesz dodać jeden lub kilka warunków dla tej samej operacji.

#### Działania

Ta część pozwala na zdefiniowanie operacji, które chcesz zastosować.

Możesz wybrać:

- **Zaakceptuj:** e-maile spełniające te warunki będą zwykle otrzymywane.
- **Przekieruj na adres lokalny:** przekierowuje e-maile spełniające te warunki na jeden z adresów e-mail Twojej domeny.
- **Usuwanie:** zostaniesz usunięty e-maile spełniające warunki.
- **Przekieruj na zdalny adres:** przekierowuje wiadomości spełniające warunki na wybrany przez Ciebie adres e-mail.

### Przykłady filtrów

#### Usuń spam

||Nagłówek|Zasada|Wartość|Działanie|
|---|---|---|---|---|
|Parametry filtra|Temat wiadomości|zawiera|[SPAM]|usuwanie|
|Co zrobi filtr|Jeśli temat wiadomości|zawiera|ciąg dalszy "[SPAM]"|więc usuń wiadomość.|

#### Przekierowanie wiadomości e-mail odbiorcy

||Nagłówek|Zasada|Wartość|Działanie|
|---|---|---|---|---|
|Parametry filtra|Od|zawiera|contact@domaintest.ovh|przekierowanie na zdalny adres: jean@otherdomain.ovh|
|Co zrobi filtr|Jeśli nadawca|jest|contact@domaintest.ovh|prześlij e-mail na adres jean@otherdomain.ovh|

#### Przekierowanie adresów e-mail do listy mailingowej

||Nagłówek|Zasada|Wartość|Działanie|
|---|---|---|---|---|
|Parametry filtra|DO|zawiera|ml@mailing.com|Przekieruj na adres lokalny: recipient@mypersonaldomain.ovh|
|Co zrobi filtr|Jeśli wiadomość została wysłana na listę mailingową|nazywane|ml@mailing.com|prześlij wiadomość na inny adres: recipient@mypersonaldomain.ovh|

#### Usuń e-maile zawierające niechcianą informację, z wyjątkiem nadawcy

Dodaje się dwa filtry:

||Nagłówek|Zasada|Wartość|Działanie|
|---|---|---|---|---|
|Parametry filtra 1|Temat wiadomości|zawiera|"money"|usuwanie|
|Parametry filtra 2|Od|nie zawiera|john@mybank.ovh|usuwanie|

Jeśli temat wiadomości zawiera słowo "money", **a nadawcą wiadomości nie jest** "john@mybank.ovh", wówczas komunikat zostanie usunięty:

![emails](images/img_3242.jpg){.thumbnail}

## Sprawdź również

[Pierwsze kroki z usługą MX Plan](/pages/web/emails/email_generalities)

[Reguły skrzynki odbiorczej w interfejsie OWA](/products/email-owa-creating-inbox-rules)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
