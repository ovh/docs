---
title: 'Tworzenie autorespondera dla konta e-mail'
excerpt: 'Dowiedz się, jak zainstalować autoresponder e-mail'
legacy_guide_number: g2052
updated: 2021-04-20
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 


## Wprowadzenie

W przypadku Twojej nieobecności w biurze możesz utworzyć autoresponder e-mail, który zostawi wiadomość dla rozmówców chcących skontaktować się z Tobą za pośrednictwem poczty e-mail.

**Dowiedz się, jak uruchomić autoresponder e-mail.**

## Wymagania początkowe

- Wykupienie usługi MX Plan. Jest ona dostępna przez: oferta [hostingu](https://www.ovhcloud.com/pl/web-hosting/){.external}, bezpłatny [Darmowy hosting 100M](https://www.ovhcloud.com/pl/domains/free-web-hosting/){.external} zawarty w ofercie domeny (wcześniej aktywowanej) lub oferta MX Plan zamówiona oddzielnie.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

> [!primary]
>
> Jeśli Twoje konto e-mail znajduje się w ofercie [**Exchange**](https://www.ovhcloud.com/pl/emails/hosted-exchange/), [**Email Pro**](https://www.ovhcloud.com/pl/emails/email-pro/) lub nie ma sekcji `Zarządzanie autoresponderami`{.action} w Twoim MXplan, utwórz autoresponder w interfejsie Webmail korzystając z dokumentacji ["Instalacja autorespondera z poziomu interfejsu OWA"](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Utworzenie autorespondera

Zaloguj się do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. 

Wybierz odpowiednią domenę w sekcji `E-maile`{.action}.

Kliknij kartę `E-maile`{.action}, a następnie `Zarządzanie automatycznymi odpowiedziami`{.action}.

Zostaniesz przekierowany do okna `Zarządzanie autoresponderami`, które wyświetlają wszystkie autorespondery e-mail na Twojej usłudze e-mail.

Kliknij `Dodaj autoresponder`{.action}

![hosting](images/email_responder01.png){.thumbnail}

Pojawi się okno dodawania. Możesz ją uzupełnić zgodnie z poniższymi informacjami.

- `Typ autorespondera`:

"Przypisany do skrzynki e-mail": do wykorzystania, jeśli dotyczy to istniejącego konta e-mail w Twojej usłudze e-mail.
"Wolne": do użycia w przypadku aliasu. Nie jest więc przypisany do istniejącego adresu.

- `Skrzynka e-mail` lub `Nazwa autorespondera`: adres e-mail lub alias, którego dotyczy autoresponder.

- `Czas działania autorespondera`:

"Tymczasowe": zdefiniuj datę rozpoczęcia i zakończenia działania autorespondera (przydatną, jeśli chcesz odejść na urlop).
"Stałe": autoresponder będzie działał, dopóki nie zostanie wyłączony.

- `Wyślij kopię` lub `Zachowaj wiadomości na serwerze`: umożliwia przekierowanie wiadomości otrzymanych w trakcie Twojej nieobecności na wybrany adres lub zachowanie ich na adres e-mail.

> [!warning]
> Jeśli usuniesz zaznaczenie tej kratki, wiadomości otrzymane podczas Twojej nieobecności zostaną automatycznie usunięte.

- `Adres w kopii` (tylko w trybie wolnym): w przypadku aliasu wybierz adres e-mail, który otrzyma e-maile wysłane do aliasu.

- `Wiadomość`: Jest to wiadomość, którą Twoi rozmówcy otrzymają podczas wysyłki wiadomości e-mail.

Następnie kliknij przycisk `Zatwierdź`{.action}, aby uruchomić autoresponder.

### Zmiana lub usunięcie autorespondera

Po utworzeniu autorespondera e-mail pojawia się on na liście widocznej w sekcji `Zarządzanie autoresponderami`{.action} w Twojej usłudze e-mail. Możesz go usunąć lub zmienić, klikając przycisk `...`{.action} znajdujący się po prawej stronie.

![hosting](images/email_responder02.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.