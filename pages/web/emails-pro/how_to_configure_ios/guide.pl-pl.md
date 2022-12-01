---
title: 'Konfiguracja konta e-mail Pro na urządzeniu iPhone lub iPad'
slug: konfiguracja-iphone
routes:
    canonical: 'https://docs.ovh.com/pl/emails/hosting_www_konfiguracja_na_iphone_ios_91/'
excerpt: 'Dowiedz się, jak skonfigurować konto E-mail Pro na urządzeniu iPhone lub iPad przy użyciu aplikacji Mail'
section: 'Konfiguracja programu pocztowego'
order: 3
---


> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 21-05-2020**

## Wprowadzenie

Konta E-mail Pro mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować konto E-mail Pro na urządzeniu iPhone lub iPad przy użyciu aplikacji Mail.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Niniejszy przewodnik ułatwi Ci realizację bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
>

## Wymagania początkowe

- Posiadanie [konta E-mail Pro](https://www.ovhcloud.com/pl/emails/email-pro/){.external}
- Instalacja aplikacji Mail na Twoim urządzeniu iOS
- Posiadanie danych do logowania do konta e-mail, które chcesz skonfigurować.

## W praktyce

### Etap 1: dodanie konta

> [!primary]
>
> W przewodniku używamy oznaczenia serwera: pro**?**.mail.ovh.net. Zastąp “?” cyfrą oznaczającą serwer powiązany z Twoją usługą E-mail Pro.
> 
> Odszukaj cyfrę w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, w sekcji `Web Cloud`{.action} =>  `E-mail Pro`{.action}. Nazwa serwera jest widoczna w ramce *Logowanie* w zakładce `Informacje ogólne`{.action}.
>

Na ekranie Twojego urządzenia wybierz `Ustawienia`{.action} (ikona koła zębatego). Konto można dodawać na różne sposoby, w zależności od wersji iOS:

- **Dla systemu iOS 7, 8, 9 i 10**: kliknij `Mail, Kontakty, Kalendarz`{.action}, a następnie `Dodaj konto`{.action}. Wybierz`Inne`{.action}, następnie `Dodaj konto Mail`{.action}. Następnie przejdź do etapu 5 poniższej tabeli.

- **Dla systemu iOS 1**: kliknij `Konta i hasła`{.action}, a następnie `Dodaj konto`{.action}. Wybierz`Inne`{.action}, następnie `Dodaj konto Mail`{.action}. Następnie przejdź do etapu 5 poniższej tabeli.

- **Dla obecnych** wersji: postępuj zgodnie z instrukcjami z poniższej tabeli.

| | |
|---|---|
|![Exchange](images/configuration-mail-ios-step01.gif){.thumbnail}|1. W `Ustawieniach` przejdź do `Mail`. <br><br> 2. Kliknij `Konta`.<br><br> 3. Kliknij `Dodaj konto`.<br><br> 4. Wybierz `Inne` na dole.|
|5. Kliknij `Dodaj konto Mail`.<br><br>6. Wpisz swoje **nazwisko**, adres **e-mail**, **hasło** i **opis** konta.<br><br>7. Kliknij `Dalej`.|![Exchange](images/configuration-mailpro-ios-step02.png){.thumbnail}|
|![Exchange](images/configuration-mailpro-ios-step03.png){.thumbnail}|8. Wybierz typ serwera odbierającego `IMAP` (zalecane) lub `POP`.<br><br>W sekcjach `SERWER ODBIORU` I `SERWER WYSYŁKI`, pomimo adnotacji "opcjonalnie", wprowadź: <br>- nazwa hosta **pro?.mail.ovh.net** ( zastąp **?** przez numer serwera E-mail Pro) <br>- pełny **adres e-mail** w nazwie użytkownika <br>- hasło do Twojego konta e-mail|

Przed zakończeniem konfiguracji upewnij się, że zaznaczyłeś aplikację `Mail`{.action}, aby mogła ona używać tego konta, następnie kliknij `Zapisz`{.action}.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

Jeśli wprowadzasz ręcznie dane techniczne w ustawieniach konta, poniżej znajdziesz parametry, których należy użyć w przypadku oferty E-mail Pro:

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|pro**?**.mail.ovh.net|Tak|993|
|Serwer poczty wychodzącej|pro**?**.mail.ovh.net|Tak|587|

### Użyj konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVHcloud oferuje również aplikację internetową posiadającą [funkcje do pracy zespołowej](https://www.ovhcloud.com/pl/emails/){.external} dostępną pod adresem <https://www.ovh.pl/mail/>. Możesz się do niej zalogować, używając tych samych danych, których użyłeś do logowania się do konta e-mail.

> [!primary]
>
> W przypadku problemów z odbieraniem lub wysyłką e-maili, sprawdź nasz [FAQ dotyczący usług e-mail OVHcloud](https://docs.ovh.com/pl/emails/faq-konta-email/).
>

## Sprawdź również

[Konfiguracja konta e-mail włączonego do usługi MX Plan lub do usługi hostingu na urządzeniu iPhone lub iPad](https://docs.ovh.com/pl/emails/hosting_www_konfiguracja_na_iphone_ios_91/)

[Konfiguracja konta Exchange na urządzeniu iPhone lub iPad](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_20132016_automatyczna_konfiguracja_z_poziomu_ios_iphone_-_ipad/)

[Najczęściej zadawane pytania dotyczące kont e-mail](https://docs.ovh.com/pl/emails/faq-konta-email/)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.