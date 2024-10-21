---
title: Tworzenie i korzystanie z konta współdzielonego
excerpt: Dodaj i użyj konta współdzielonego w Twojej usłudze E-mail Exchange
updated: 2023-09-15
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Konto **współdzielone** to skrzynka e-mail współdzielona między kilka kont Exchange i dostępna tylko za ich pośrednictwem. Konto współdzielone nie posiada hasła. Należy zatem przekazać dostęp do jednego lub kilku kont platformy Exchange.
<br>Konta współdzielone są dostępne z poziomu OWA (webmail Exchange) lub z poziomu programu pocztowego Outlook.

**Dowiedz się, jak utworzyć konto współdzielone na platformie Exchange i zarządzać nim.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Wykupienie usługi [Exchange OVHcloud](https://www.ovhcloud.com/pl/emails/hosted-exchange/).

## W praktyce

### Dodaj konto współdzielone

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Przejdź do sekcji `Web Cloud`{.action} i wybierz usługę w `Microsoft`{.action}, a następnie `Exchange`{.action}.

Wybierz kartę `Konta współdzielone`{.action} w menu poziomym i kliknij `Dodaj konto współdzielone`{.action}.

![emails](images/exchange-shared_accounts01.png){.thumbnail}

Wpisz wymagane pola:

|Stanowisko|Opis|
|---|---|
|Konto e-mail|Wybierz nazwę konta współdzielonego. **Nie może to być istniejący adres e-mail.**|
|Quota|Podaj wymagany rozmiar przestrzeni dyskowej dla konta współdzielonego, [w zależności od dostępnej przestrzeni](#size).|
|Nazwa, która będzie się wyświetlać.|Nazwa wyświetlacza, którą chcesz wyświetlić podczas wysyłki z konta współdzielonego.|
|Ukryj adres w książce adresowej|Dzięki ukryciu adresu w książce adresowej adres konta współdzielonego nie jest widoczny na liście adresów Twojej platformy Exchange.|

<a name="size"></a>

> [!primary]
>
> Dostępna przestrzeń do utworzenia konta współdzielonego zależy od liczby kont zamówionych na platformie. Każde konto Exchange wykupione na platformie odblokowuje 5 GB dla kont współdzielonych.
>
> **Przykład:**
>
> Na platformie zamówiłeś 4 konta Exchange. W związku z tym masz **4 x 5GB*, czyli **20 GB** przyznanej przestrzeni dla kont współdzielonych.

Kliknij Dalej, aby `uzyskać dostęp`{.action} do podsumowania. Zakończ operację, klikając `Zatwierdź`{.action}.

![emails](images/exchange-shared_accounts02.png){.thumbnail}

### Zarządzanie delegowaniem uprawnień do konta współdzielonego

Po utworzeniu konta współdzielonego należy przekazać dostęp do jednego lub kilku kont Twojej platformy.

Konto współdzielone nie jest bezpośrednio dostępne, ponieważ nie posiada hasła. Nie można go skonfigurować bezpośrednio w kliencie typu Outlook lub jest dostępny poprzez interfejs webmail.

Delegacja musi być aktywowana między kontem Exchange a kontem współdzielonym.

W zakładce `Konta współdzielone`{.action} w Twojej platformie Exchange kliknij przycisk `...`{.action} przed kontem współdzielonym, a następnie kliknij `Konfiguracja uprawnień `{.action}. Na liście kont będziesz mógł wybrać te, które będą miały dostęp do konta współdzielonego.

![emails](images/exchange-shared_accounts03.png){.thumbnail}

Wybierz operacje dostępne dla wybranego konta:

|Stanowisko|Opis|
|---|---|
|Prawo do wysyłki poczty|Umożliwia wybranemu kontu e-mail wysłanie wiadomości "jako" współdzielonego konta e-mail.|
|Uprawnienia do wysyłki „w imieniu”|Umożliwia wybranemu kontu e-mail wysłanie wiadomości "ze strony" na wspólny adres e-mail.|
|Prawo dostępu|Zezwalaj na wyświetlanie i zarządzanie kontem współdzielonym w OWA (webmail) lub Outlook.|

Następnie kliknij `Dalej`{.action} i `Zatwierdź`{.action}, aby zapisać zmiany.

![emails](images/exchange-shared_accounts04.png){.thumbnail}

W naszym przykładzie udostępniamy konta **guide-exchange@** i **test@** dostęp do konta współdzielonego **shared_test@**.
<br>Konto e-mail **guide-exchange@** będzie również miało prawo do wysyłania e-maili "jako" **shared_test@**.
<br>Konto e-mail **test@** będzie również mogło wysyłać e-maile "od" **shared_test@**.

### Korzystanie z konta współdzielonego w OWAguide (webmail)

Zaloguj się do Webmail Exchange (OWA) na adres <https://www.ovh.pl/mail/> z kontem e-mail uprawnionym do dostępu do konta współdzielonego.
<br>W naszym przykładzie zalogujemy się do konta **guide-exchange@**.

Po zalogowaniu, w kolumnie po lewej stronie, kliknij prawym przyciskiem myszy główny drzewo Twojego konta e-mail, a następnie kliknij `Dodaj współdzielony`{.action} katalog. 

![emails](images/exchange-shared_accounts05.png){.thumbnail}

Następnie wpisz nazwę konta współdzielonego, po czym kliknij `Dodaj`{.action}, gdy zostało ono znalezione w katalogu Exchange.

![emails](images/exchange-shared_accounts06.png){.thumbnail}

W naszym przykładzie konto współdzielone jest dostępne z konta **guide-exchange@**.

![emails](images/exchange-shared_accounts07.png){.thumbnail}

### Korzystanie z konta współdzielonego w programie Outlook

W programie Outlook możesz odnaleźć konto współdzielone w kolumnie po lewej stronie, tak jak w interfejsie Webmail.

![emails](images/exchange-shared_accounts10.png){.thumbnail}

## Sprawdź również

[Sprawdź konto Exchange w interfejsie OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Delegowanie uprawnień na konto Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation)

[Współdzielenie kalendarza przez webmail OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Dodaj stopkę strony dla kont Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
