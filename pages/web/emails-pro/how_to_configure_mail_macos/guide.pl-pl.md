---
title: 'Konfiguracja konta E-mail Pro w aplikacji Mail na urządzeniach z systemem macOS'
slug: konfiguracja-email-pro-mail-macos
section: 'Konfiguracja programu pocztowego'
order: 4
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zaproponuj zmianę" na tej stronie.
>

**Ostatnia aktualizacja z dnia 13-06-2022**

## Wprowadzenie

Konta E-mail Pro mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji. Aplikacja Mail na macOS jest dostępna bezpłatnie dla wszystkich komputerów Mac.

**Dowiedz się, jak skonfigurować Twoje konto E-mail Pro w aplikacji Mail na urządzeniach z systemem macOS.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "Sprawdź również".
> 

## Wymagania początkowe

- Posiadanie konta [E-mail Pro](https://www.ovhcloud.com/pl/emails/email-pro/)
- Instalacja programu Mail na Twoim urządzeniu Mac
- Dane do logowania do konta e-mail, które chcesz skonfigurować
 
## W praktyce

> [!primary]
>
> W przewodniku używamy oznaczenia serwera: pro<b>?</b>.mail.ovh.net. Zastąp “?” cyfrą oznaczającą serwer powiązany z Twoją usługą E-mail Pro.
> 
> Odszukaj cyfrę w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, w sekcji `Web Cloud`{.action} =>  `E-mail Pro`{.action}. Nazwa serwera jest widoczna w ramce *Logowanie* w zakładce `Informacje ogólne`{.action}.
>

### Dodaj konto

- **Podczas pierwszego uruchomienia aplikacji**: wyświetli się asystent konfiguracji i poprosi o wybór typu konta.

- **Jeśli konto zostało wcześniej skonfigurowane**: kliknij `Mail`{.action} na pasku menu na górze ekranu, a następnie kliknij `Konta`{.action}.

| | |
|---|---|
|![mailmac](images/mail-mac-emailpro01.png){.thumbnail}|Wybierz `Inne konto Mail`{.action}, a następnie kliknij `Konto Mail`{.action}.|
|W oknie "**Dodaj konto Mail**" wpisz następujące informacje: <br>- **Nazwa** konta e-mail <br>- Twój **adres e-mail** <br>- **Hasło** do Twojego konta e-mail |![mailmac](images/mail-mac-emailpro02.png){.thumbnail}|
|![mailmac](images/mail-mac-emailpro03.png){.thumbnail}|W następnym oknie wprowadź informacje: <br>- Pozostaw Twój **adres e-mail**, który został wcześniej wpisany <br>- Wpisz pełny adres e-mail w **Nazwisko użytkownika** <br>- Zostaw **hasło** już wprowadzone <br>- Wybierz `POP` lub `IMAP`(zalecane) w **Typ konta**<br>- Wprowadź `pro?.mail.ovh.net` w **Serwerze odbiorczym** (zastąp "**?**" numerem serwera)<br>-Wpisz również `pro?.mail.ovh.net` w **Serwerze poczty wychodzącej** (zastąp dobrze "**?**" numerem serwera)<br><br>Aby dokończyć konfigurację, kliknij `Zaloguj się`{.action}|

### Użyj konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVHcloud oferuje również aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu przeglądarki internetowej. Jest ona dostępna pod adresem <https://www.ovh.pl/mail/>. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail. W przypadku pytań dotyczących korzystania z tego konta, skorzystaj z naszego przewodnika [Sprawdź konto w interfejsie OWA](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2016_przewodnik_dotyczacy_korzystania_z_outlook_web_app/).

### Pobierz kopię zapasową Twojego konta e-mail

Jeśli musisz wykonać operację, która może spowodować utratę danych przypisanych do Twojego konta e-mail, zalecamy wykonanie kopii zapasowej odpowiedniego konta e-mail. W tym celu sprawdź sekcję "**Eksport**" w części "**Mail na Mac OS**" w naszym przewodniku [Ręczna migracja Twojego konta e-mail](https://docs.ovh.com/pl/emails/przenoszenie-kont-e-mail/#eksport).

### Zmień istniejące parametry

Jeśli Twoje konto e-mail zostało już skonfigurowane i musisz mieć dostęp do parametrów konta, aby je zmienić:

- Kliknij `Mail`{.action} na pasku menu na górze ekranu, a następnie `Preferencje`{.action}.
- Wybierz konto w kolumnie po lewej stronie, następnie kliknij `Ustawienia serwera`{.action}.

![mailmac](images/mail-mac-emailpro04.png){.thumbnail}

### Dodatkowe informacje

W przypadku konfiguracji **IMAP** wartości są następujące:

|Typ serwera|Nazwa serwera|Metoda szyfrowania|Port|
|---|---|---|---|
|Wchodzący(IMAP)|pro<b>?</b>.mail.ovh.net (nazwa **"?"** należy zastąpić numerem serwera)|SSL/TLS|993|
|Wychodzący(SMTP)|pro<b>?</b>.mail.ovh.net (nazwa **"?"** należy zastąpić numerem serwera)|SSL/TLS|465|

W przypadku konfiguracji **POP** wartości są następujące:

|Typ serwera|Nazwa serwera|Metoda szyfrowania|Port|
|---|---|---|---|
|Wchodzący(POP)|pro<b>?</b>.mail.ovh.net (nazwa **"?"** należy zastąpić numerem serwera)|SSL/TLS|995|
|Wychodzący(SMTP)|pro<b>?</b>.mail.ovh.net (nazwa **"?"** należy zastąpić numerem serwera)|SSL/TLS|465|

> [!primary]
>
> **Zmień konfigurację**
>
> Jeśli skonfigurujesz Twoje konto e-mail przy użyciu **IMAP** i chcesz zmienić konfigurację na **POP**, usuń konto e-mail Maca i odtworzyć je w **POP**, aby zmienić konfigurację.

## Sprawdź również
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
