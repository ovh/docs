---
title: Wykorzystanie diagnostyki błędów Exchange
excerpt: 'Dowiedz się, jak przeprowadzić automatyczną diagnostykę błędów na kontach Exchange'
updated: 2022-10-19
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Błędy na kontach e-mail Exchange mogą mieć wiele przyczyn. Automatyczna diagnostyka funkcji konta pozwala zmniejszyć liczbę przyczyn. Testy te będą również przydatne w przypadku prośby o wsparcie w przypadku usługi Exchange.

**Dowiedz się, jak rozpocząć diagnostykę Exchange i interpretować jej wyniki.**

## Wymagania początkowe

- Posiadanie [rozwiązania Exchange OVHcloud](/links/web/emails-hosted-exchange)
- Posiadanie danych identyfikacyjnych konta Exchange do sprawdzenia
- Dostęp do [Panelu klienta OVHcloud](/links/manager)
- Aktualizacja w [płatności](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) tej usługi i powiązanej domeny

## W praktyce

### Wykonaj diagnostykę

Zaloguj się do [Panelu klienta OVHcloud](/links/manager) w sekcji `Web Cloud`{.action}. Wybierz `Microsoft`{.action} , następnie kliknij `Exchange`{.action} i wybierz Twoją usługę.

![Diagnostyka Exchange](images/img_4450.png){.thumbnail}

Kliknij kartę `Diagnostyka`{.action} i wybierz odpowiednie konto Exchange z rozwijanego menu. Wprowadź hasło do konta w odpowiednim polu, po czym kliknij `Rozpocznij diagnostykę`{.action}.

![Diagnostyka Exchange](images/img_4451.png){.thumbnail}

Procedura diagnostyczna zajmie około 3 do 10 minut. Oto przykład:

![Diagnostyka Exchange](images/img_4471.png){.thumbnail}

Strona wyników proponuje dwa działania, aby kontynuować:

- `Nowa diagnoza`{.action}: rozpoczyna kolejną diagnostykę.

- `Utwórz zgłoszenie`{.action}: pozwala utworzyć zgłoszenie w naszym dziale pomocy technicznej. Zgłoszenie zawiera wyniki diagnostyki.

### Wyjaśnienia błędów

Aby znaleźć najszybsze rozwiązanie, zapoznaj się z poniższym podsumowaniem możliwych błędów.

### Konto zostało zablokowane z powodu wysyłania spamu <a name="blocked"></a>

Zablokowane konto zawsze otrzymuje e-maile, ale wysyłka została wyłączona przez automatyczny system ochrony przed spamem.

Możesz to sprawdzić w zakładce `Konta e-mail`{.action} w Twojej usłudze Exchange. Konto będzie zawierać oznaczenie `SPAM` w kolumnie "Status" tabeli.

Zapoznaj się z naszym przewodnikiem [Co zrobić w przypadku blokady konta ze względu na spam?](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/locked_for_spam) aby umożliwić naszym zespołom bezpieczeństwa ponowne uruchomienie konta.

### Abonament dotyczący konta wygasł <a name="expired"></a>

Ponieważ abonament nie jest już aktywny, wysyłka i odbiór zostały wyłączone.<br>
Aby ponownie włączyć abonament, wystarczy zmienić jego konfigurację [częstotliwość płatności](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange#periodicity) w [Panelu klienta OVHcloud](/links/manager).

### Konto zostało zablokowane z powodu polityki bezpieczeństwa

Jeśli w [Panelu klienta aktywowana jest polityka bezpieczeństwa](/links/manager), konto może zostać tymczasowo zablokowane.

Możesz na przykład zdecydować, że konto zostanie zablokowane po kilku nieudanych próbach logowania, na czas określony przez Twoją opiekę.

W takim przypadku możesz poczekać, aż konto będzie ponownie dostępne lub skontaktować się z zespołem Exchange dodając zgłoszenie z poziomu panelu klienta.

Aby uzyskać więcej informacji na temat tej funkcji, zapoznaj się z naszym [przewodnikiem dotyczącym polityki bezpieczeństwa](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/security-policy).

### Logowanie do webmaila nie powiodło się. <a name="password"></a>

Może to być spowodowane wpisaniem nieprawidłowego hasła do konta. Sprawdź najpierw, czy hasło jest poprawne. Zaloguj się do interfejsu [Webmail](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa), następnie zrestartuj diagnostykę.

W razie potrzeby możesz zmienić hasło do wybranego konta w zakładce `Konta e-mail`{.action} w [Panelu klienta OVHcloud](/links/manager). Jeśli problem się powtórzy, utwórz zgłoszenie.

### Wpis MX domeny jest nieprawidłowy

Ten błąd wskazuje, że e-maile nie mogą zostać odebrane i będzie również związany z tym błędem "**UWAGA: E-mail testowy nie został odebrany.** ".

Następujące serwery MX są ważne w zależności od korzystania z usługi Exchange:

- Tylko Exchange: mx0.mail.ovh.net, mx1.mail.ovh.net mx2.mail.ovh.net, mx3.mail.ovh.net & mx4.mail.ovh.net
- Exchange + E-mail POP/IMAP hostowany przez OVHcloud: mx0.mail.ovh.net, mx1.mail.ovh.net mx2.mail.ovh.net, mx3.mail.ovh.net & mx4.mail.ovh.net
- Exchange + E-mail POP/IMAP nie obsługiwany przez OVHcloud: ex<b>?</b>.mail.ovh.net

<a name="hostname"></a>

> [!warning]
> W przewodnikach wykorzystujemy jako nazwę serwera: na przykład ex<b>?</b>.mail.ovh.net. Chcesz zastąpić "?" przez numer odpowiadający serwerowi usługi Exchange.<br>
> Informacje te znajdziesz w Panelu klienta OVHcloud, w sekcji `Web Cloud`{.action}.  Otwórz `Microsoft`{.action}, następnie `Exchange`{.action} i wybierz Twoją usługę. Nazwa serwera wyświetla się w strefie **Logowanie** w zakładce `Informacje ogólne`{.action}.
>

> [!primary]
>
> Nazwa techniczna usługi Exchange OVHcloud składa się z prefiksu (**hosted-** lub **private-**), części "identyfikatora klienta" oraz z numeru przyrostowego wskazującego liczbę hostowanych lub prywatnych usług Exchange zarejestrowanych w Twoim koncie klienta.
>

### Wpis SRV domeny jest nieprawidłowy

Wpis SRV służy do automatycznej konfiguracji konta Exchange przy użyciu kompatybilnego programu pocztowego, takiego jak Microsoft Outlook.

Możesz sprawdzić te parametry w [strefie DNS Twojej domeny](/pages/web_cloud/domains/dns_zone_edit).

Oto wartości dla usługi Exchange:

Pole | Wartość
------------ | -------------
Subdomena | _autodiscover._tcp
Priorytet | 0
Waga | 0
Port | 443
Adres docelowy | [ex<b>?</b>.mail.ovh.net](#hostname)(zastąp "?" za numer odpowiadający serwerowi usługi Exchange)

### E-mail testowy nie mógł zostać wysłany z konta

Ten błąd wskazuje na ogólną niepowodzenie wysyłki e-maili, które może mieć kilka przyczyn:

- [Twoje konto zostało zawieszone](#expired)
- [Podane hasło jest nieprawidłowe.](#password)
- [Twoje konto zostało zablokowane z powodu wysyłania niechcianej poczty](#blocked)
- [Wystąpił problem z infrastrukturą](https://web-cloud.status-ovhcloud.com/)

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
