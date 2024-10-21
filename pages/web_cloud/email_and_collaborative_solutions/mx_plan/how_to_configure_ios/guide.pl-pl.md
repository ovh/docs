---
title: "MX Plan - Skonfiguruj swoje konto e-mail w programie Mail dla systemu iPhone i iPad"
excerpt: 'Dowiedz się, jak skonfigurować konto e-mail MX Plan na urządzeniu iPhone lub iPad'
updated: 2024-10-01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Konta e-mail usługi MX Plan mogą być skonfigurowane w jednej z kompatybilnych aplikacji lub programów pocztowych. Dzięki temu możesz wysyłać i odbierać wiadomości, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować konto e-mail MX Plan na urządzeniu iPhone lub iPad przy użyciu aplikacji Mail.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Niniejszy przewodnik ułatwi Ci realizację bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
>

## Wymagania początkowe

- Posiadanie konta e-mail MX Plan (zawartego w usłudze MX Plan lub w usłudze [hostingu OVHcloud](/links/web/hosting).
- Aktualizacja w [płatności](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) i [odnowienie](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) powiązanych usług (domena i hosting).
- Instalacja aplikacji Mail na Twoim urządzeniu iOS
- Posiadanie danych do logowania do konta e-mail, które chcesz skonfigurować.

## W praktyce

### Dodaj konto

Na ekranie Twojego urządzenia wybierz `Ustawienia`{.action} (ikona koła zębatego). Konto można dodawać na różne sposoby, w zależności od wersji iOS:

- **Dla systemu iOS 7, 8, 9 i 10**: kliknij `Mail, Kontakty, Kalendarz`{.action}, a następnie `Dodaj konto`{.action}. Wybierz`Inne`{.action}, następnie `Dodaj konto Mail`{.action}. Następnie przejdź do etapu 5 poniższej tabeli.

- **Dla iOS 11, 12 i 13**: kliknij `Konta i hasła`{.action}, a następnie `Dodaj konto`{.action}. Wybierz`Inne`{.action}, następnie `Dodaj konto Mail`{.action}. Następnie przejdź do etapu 5 poniższej tabeli.

- **Dla wersji iOS 14 i nowszych** wersji: postępuj zgodnie z instrukcjami z poniższej tabeli.

| | |
|---|---|
|![Exchange](images/configuration-mail-ios-step01.gif){.thumbnail}|1. W `Ustawieniach` przejdź do `Mail`. <br><br> 2. Kliknij `Konta`.<br><br> 3. Kliknij `Dodaj konto`.<br><br> 4. Wybierz `Inne` na dole.|
|5. Kliknij `Dodaj konto Mail`.<br><br>6. Wpisz swoje **nazwisko**, adres **e-mail**, **hasło** i **opis** konta.<br><br>7. Kliknij `Dalej`.|![Exchange](images/configuration-mail-ios-step02.png){.thumbnail}|
|![Exchange](images/configuration-mail-ios-step03.png){.thumbnail}|8. Wybierz typ serwera odbierającego `IMAP` (zalecane) lub `POP`.<br><br>W sekcjach `SERWER ODBIORU` I `SERWER WYSYŁKI`, pomimo adnotacji "opcjonalnie", wprowadź: <br>- nazwa hosta **ssl0.ovh.net** <br>- pełny **adres e-mail** w nazwie użytkownika <br>- hasło do Twojego konta e-mail|

Przed zakończeniem konfiguracji upewnij się, że zaznaczyłeś aplikację `Mail`{.action}, aby mogła ona używać tego konta, następnie kliknij `Zapisz`{.action}.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

Jeśli wprowadzasz ręcznie dane techniczne w ustawieniach konta, poniżej znajdziesz parametry, których należy użyć w przypadku oferty MX Plan:

- **konfiguracja IMAP**

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|ssl0.ovh.net|Tak|993|
|Serwer poczty wychodzącej|ssl0.ovh.net|Tak|465|

- **konfiguracja POP**

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|ssl0.ovh.net|Tak|995|
|Serwer poczty wychodzącej|ssl0.ovh.net|Tak|465|

### Użyj konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVHcloud oferuje aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu przeglądarki internetowej [Webmail](/links/web/email). Możesz się do niej zalogować, używając tych samych danych, których użyłeś do logowania się do konta e-mail.

> [!primary]
>
> W przypadku problemów z odbieraniem lub wysyłką e-maili, sprawdź nasz [FAQ dotyczący usług e-mail OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).
>

## Sprawdź również

> [!primary]
>
> Aby uzyskać więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Mail w systemie iOS, zobacz [Centrum pomocy Apple](https://support.apple.com/pl-pl/102619).

[Konfiguracja konta Exchange na urządzeniu iPhone lub iPad](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_ios).

[Konfiguracja konta e-mail Pro na urządzeniu iPhone lub iPad](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_ios).

[Najczęściej zadawane pytania dotyczące kont e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.