---
title: 'Konfiguracja konta Exchange w programie Thunderbird'
excerpt: 'Tutaj znajdziesz procedurę dodawania konta Exchange w programie Thunderbird'
slug: exchange_20132016_konfiguracja_w_programie_thunderbird
section: 'Konfigurowanie konta Exchange na komputerze'
legacy_guide_number: g1278
---

**Ostatnia aktualizacja z dnia 17-01-2020**

## Wprowadzenie

Konta Exchange mogą być skonfigurowane w  kompatybilnych programach pocztowych.  Thunderbird nie jest kompatybilny z protokołem Exchange MAPI, ale podczas konfiguracji można skorzystać z protokołu POP lub IMAP. W naszym przykładzie konto Hosted Exchange jest skonfigurowane dla protokołu IMAP.

**Dowiedz się, jak skonfigurować konto Exchange w programie pocztowym Thunderbird w systemie Windows.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Jesteś więc odpowiedzialny za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skorzystanie z pomocy specjalisty oraz/lub
> skontaktowanie się z wydawcą oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_20132016_konfiguracja_w_programie_thunderbird/)
> tego przewodnika.
> 

## Wymagania początkowe

- Wykupienie usługi [Exchange](https://www.ovh.pl/emaile/){.external}.
- Posiadanie zainstalowanej aplikacji Thunderbird na Twoim urządzeniu.
- Posiadanie danych do logowania do konta e-mail, które chcesz skonfigurować.

## W praktyce

### Etap 1: uruchomienie
Uruchom aplikację Thunderbird zainstalowaną na komputerze.

Następnie dodaj nowe konto za pomocą poniższego menu. Wybierz `E-mail`{.action}, aby przejść dalej.

![emails](images/configuration-thunderbird-exchange-step1.png){.thumbnail}


### Etap 2: utworzenie konta
Wypełnij poniższe pola, podając:

- Twoje imię i nazwisko: *Tutaj podaj nazwę użytkownika, która ma być wyświetlana*
- Adres e-mail: *Twój kompletny adres e-mail.*
- Hasło: *Hasło ustawione w [panelu klienta](https://www.ovh.com/manager/web/login.html){.external} Twojego konta Exchange.*
- Zapamiętaj hasło: *Musisz zaznaczyć tę opcję.*

Kliknij przycisk `Konfiguracja ręczna`{.action}, aby przejść do dalszych etapów instalacji.


![emails](images/configuration-thunderbird-exchange-step2.png){.thumbnail}


### Etap 3: konfiguracja ręczna

> [!primary]
>
> Poniżej stosujemy przykładową nazwę serwera, np. **X**.mail.ovh.net.
> 
> Aby uzyskać dane Twojego serwera, przejdź do[panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, wybierz sekcję `Web`{.action}, a następnie `Microsoft`{.action}
>  w lewej kolumnie. Wybierz `Exchange`{.action}, a następnie Twoją platformę. Serwer jest widoczny w ramce **Połączenie** w karcie `Informacje ogólne`{.action}
> 

Po kliknięciu przycisku `Konfiguracja ręczna`{.action} sprawdź, czy poniższe elementy są poprawnie wpisane:

- Serwer poczty przychodzącej: **IMAP** 
- Nazwa hosta: *Wskaż serwer, na którym hostowana jest Twoja usługa Exchange.*
- Port:  **993**
- Metoda szyfrowania:   **SSL**
- Uwierzytelnianie:  **Zwykłe hasło**
- Serwer poczty wychodzącej: **SMTP**
- Nazwa hosta: *Wskaż serwer, na którym hostowana jest Twoja usługa Exchange.* 
- Port:  **587** 
- Metoda szyfrowania:  **STARTTLS** 
- Uwierzytelnianie:  **Zwykłe hasło** 
- Identyfikator: *Twój kompletny adres e-mail.*

> [!primary]
>
> W przypadku kont typu [Private Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_pierwsze_kroki_na_serwerze_private/){.external}, należy wskazać serwer, który został wybrany w zamówieniu.
>

Jeśli uwierzytelnianie za pomocą **Zwykłego hasła** nie działa, można również podać **NTLM**.

Kliknij przycisk`Gotowe`{.action}, aby zakończyć instalację.


![emails](images/configuration-thunderbird-exchange-step3.png){.thumbnail}


### Etap 4: zakończenie

Twoje konto Exchange zostało prawidłowo skonfigurowane dla protokołu IMAP, możesz teraz wysyłać i odbierać wiadomości.

OVHcloud oferuje również aplikację internetową z funkcją >. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail.


## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en>.