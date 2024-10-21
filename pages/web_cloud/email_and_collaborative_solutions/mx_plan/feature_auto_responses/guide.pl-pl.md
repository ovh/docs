---
title: 'MX Plan - Tworzenie automatycznej odpowiedzi na adres e-mail'
excerpt: 'Dowiedz się, jak skonfigurować automatyczną odpowiedź na adres e-mail'
updated: 2024-05-24
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
> 

Jeśli jesteś nieobecny i nie możesz sprawdzić Twojego adresu e-mail, możesz uruchomić automatyczną odpowiedź (lub autoresponder), która prześle wiadomość e-mail do osób, które wysłały Ci wiadomość.

**Dowiedz się, jak skonfigurować automatyczną odpowiedź na adres e-mail.**

## Wymagania początkowe

- Wykupienie usługi MX Plan. Jest ona dostępna w ramach: oferty [hosting www](/links/web/hosting), [bezpłatny hosting 100M](/links/web/domains-free-hosting) zawartej w ofercie domeny (aktywowanej wcześniej) lub oferty MX Plan zamówionej oddzielnie.
- Dostęp do [panelu klienta OVHcloud](/links/manager).

## W praktyce

> [!primary]
>
> Jeśli Twój adres e-mail jest zawarty w ofercie [**Exchange**](/links/web/emails-hosted-exchange), [**Email Pro**](/links/web/email-pro) lub nie ma sekcji `Zarządzanie autoresponderami`{.action} w Twoim MX Planie, utwórz automatyczną odpowiedź z poziomu interfejsu webmail, korzystając z dokumentacji ["Uruchom automatyczną odpowiedź z interfejsu OWA"](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Utworzenie automatycznej odpowiedzi

Zaloguj się do [Panelu klienta OVHcloud](/links/manager). Wybierz nazwę domeny w sekcji `Emaile`{.action}. Kliknij na zakładkę `Emaile`{.action} u góry, następnie `Zarządzanie autoresponderami`{.action}.

Zostaniesz przekierowany do okna `Zarządzanie autoresponderami`, w którym wyświetlony zostanie zestaw automatycznych odpowiedzi e-mail wprowadzonych w Twojej ofercie e-mail.

Kliknij przycisk `Dodaj autoresponder`{.action}

![autoreply](images/email_responder01.png){.thumbnail}

Pojawi się okno dodawania. Możesz ją uzupełnić zgodnie z poniższymi informacjami.

- `Rodzaj autorespondera`:

**Przypisane do skrzynki e-mail** : do użycia, jeśli dotyczy to adresu e-mail istniejącego w Twojej usłudze e-mail.
**Wolny**: do użycia w przypadku aliasu. Nie jest on zatem powiązany z istniejącym adresem.

- `Skrzynka e-mail` lub `Nazwa autorespondera`: adres e-mail lub alias, którego dotyczy automatyczna odpowiedź.
- `Czas trwania autorespondera`:
    - **Tymczasowe** : określ datę rozpoczęcia i zakończenia automatycznej odpowiedzi (użyteczne, jeśli na przykład wyjeżdżasz na urlop).
    - **Permanent**: automatyczna odpowiedź będzie działać, dopóki jej nie wyłączysz.
- `Wyślij kopię` lub `Zachowaj wiadomości na serwerze`: umożliwiają ponowne wysłanie wiadomości odebranych podczas Twojej nieobecności na wybrany adres lub ich zachowanie na wybranym adresie e-mail.

> [!warning]
>
> Jeśli usuniesz zaznaczenie tego pola, wiadomości odebrane podczas Twojej nieobecności zostaną automatycznie usunięte.

- `Adres w kopii` (tylko w trybie swobodnym) : w przypadku aliasu zaznacz adres e-mail, na który będą wysyłane wiadomości wysłane na ten alias.
- `Message`: jest to wiadomość, którą twoi rozmówcy otrzymają, gdy wyślą ci e-mail.

Następnie kliknij przycisk `Zatwierdź`{.action}, aby zakończyć konfigurowanie automatycznej odpowiedzi.

> [!success]
>
> Jeśli chcesz przekazać zarządzanie automatyczną odpowiedzią dla adresu e-mail, zapoznaj się z naszym przewodnikiem ["Powierzenie zarządzania kontami e-mail innej osobie"](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation)

### Zmiana lub usunięcie automatycznej odpowiedzi

Po utworzeniu odpowiedzi automatycznej zostanie ona wyświetlona na liście widocznej w sekcji `Zarządzanie autoresponderami`{.action} w Twojej ofercie e-mail. Możesz ją usunąć lub zmienić, klikając '...`{.action} po prawej stronie.

![autoreply](images/email_responder02.png){.thumbnail}

## Krok w przyszłość

[FAQ e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>
