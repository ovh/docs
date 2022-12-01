---
title: 'Konfiguracja konta E-mail Pro w programie Outlook na systemie Windows'
slug: konfiguracja-outlook-2016
excerpt: 'Dowiedz się, jak skonfigurować konto E-mail Pro w programie Outlook na urządzeniu z systemem Windows'
section: 'Konfiguracja programu pocztowego'
order: 1
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 05-07-2021**

## Wprowadzenie

Konta E-mail Pro mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować Twoje konto e-mail E-mail Pro w programie Outlook lub później na urządzeniu z systemem Windows.**
 

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
> 

## Wymagania początkowe

- Posiadanie konta e-mail [E-mail Pro](https://www.ovhcloud.com/pl/emails/email-pro/){.external}
- Posiadanie programu Microsoft Outlook lub późniejszego.
- Dane do logowania do konta e-mail, które chcesz skonfigurować

## W praktyce

### Dodaj konto

- **Podczas pierwszego uruchomienia aplikacji**: wyświetli się asystent konfiguracji i poprosi o wpisanie adresu e-mail.

- **Jeżeli inne konto zostało wcześniej skonfigurowane**: kliknij `Plik`{.action} na pasku menu na górze Twojego ekranu, a następnie kliknij `Dodaj konto`{.action}.

- Wpisz hasło dla Twojego konta e-mail, po czym kliknij `Dalej`{.action}. Zaznacz kratkę obok komunikatu `Pozwól mi ręcznie skonfigurować moje konto `{.action}, a następnie kliknij `Połącz`{.action}. 

![Outlook](images/config-outlook-emailpro01.png){.thumbnail}

> [!primary]
>
> W przewodniku używamy oznaczenia serwera: pro**?**.mail.ovh.net. Zastąp “?” cyfrą oznaczającą serwer powiązany z Twoją usługą E-mail Pro.
> 
> Odszukaj cyfrę w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, w sekcji `Web Cloud`{.action} =>  `E-mail Pro`{.action}. Nazwa serwera jest widoczna w ramce *Logowanie* w zakładce `Informacje ogólne`{.action}.
>

| | |
|---|---|
|![Outlook](images/config-outlook-emailpro02.png){.thumbnail}|Spośród różnych rodzajów kont wybierz IMAP i POP. <br>Rekomendujemy użycie protokołu IMAP.|
|Wpisz hasło przypisane do Twojego konta e-mail, po czym kliknij `Dalej`{.action}. |![Outlook](images/config-outlook-emailpro03.png){.thumbnail}|
|![Outlook](images/config-outlook-emailpro04.png){.thumbnail}|Jeśli program Outlook nie jest w stanie automatycznie skonfigurować Twojego konta, wyświetli się to okno. <br>Kliknij `Zmień parametry konta`{.action} |
|Wpisz w **wiadomości przychodzącej**: <br>- serwer **pro**?**.mail.ovh.net** (zastąp "**?**" numerem serwera) <br>- Port **993**<br>- Metoda szyfrowania **SSL/TLS**<br><br>Wpisz w **poczty wychodzącej**: <br>- serwer **pro**?**.mail.ovh.net** (zastąp "**?**" numerem serwera)<br>- Port **587**<br>- Metoda szyfrowania **STARTTLS**<br><br>Kliknij `Dalej`{.action}, aby zatwierdzić. |![Outlook](images/config-outlook-emailpro05.png){.thumbnail}|


W przypadku konfiguracji **POP** wartości są następujące:

|Typ serwera|Nazwa serwera|Metoda szyfrowania|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|pro**?**.mail.ovh.net (nazwa **"?"** należy zastąpić numerem serwera)|SSL/TLS|995|
|Serwer poczty wychodzącej|pro**?**.mail.ovh.net (nazwa **"?"** należy zastąpić numerem serwera)|STARTTLS|587|

### Użyj konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVHcloud oferuje również aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu przeglądarki internetowej. Jest ona dostępna pod adresem <https://www.ovh.pl/mail/>. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail. W przypadku pytań dotyczących korzystania z tego konta, zapoznaj się z naszym przewodnikiem [Sprawdź konto Exchange w interfejsie OWA](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2016_przewodnik_dotyczacy_korzystania_z_outlook_web_app/).

### Pobierz kopię zapasową Twojego konta e-mail

Jeśli musisz wykonać operację, która może spowodować utratę danych przypisanych do Twojego konta e-mail, zalecamy wykonanie kopii zapasowej odpowiedniego konta e-mail. W tym celu zapoznaj się z sekcją "**Eksport z systemu Windows**" w przewodniku [Ręczna migracja Twojego konta e-mail](https://docs.ovh.com/pl/emails/przenoszenie-kont-e-mail/#eksport-z-systemu-windows).

### Zmień istniejące parametry

Jeśli Twoje konto e-mail zostało już skonfigurowane i musisz mieć dostęp do parametrów konta, aby je zmienić:

- Przejdź do `Pliku`{.action} z paska menu na górze ekranu, a następnie wybierz konto, które chcesz zmienić w rozwijanym menu **(1)**.
- Kliknij `Parametry konta`{.action}**(2)** poniżej.
- Kliknij `Ustawienia serwera`{.action}**(3)**, aby uzyskać dostęp do okna parametrów.

![Outlook](images/config-outlook-emailpro06.png){.thumbnail}

Okno jest podzielone na dwie części, **Poczta przychodząca** i **Wychodząca**. Kliknij na którąś z nich, aby je zmienić.

> [!primary]
>
> W przewodniku używamy oznaczenia serwera: pro**?**.mail.ovh.net. Zastąp “?” cyfrą oznaczającą serwer powiązany z Twoją usługą E-mail Pro.
> 
> Odszukaj cyfrę w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, w sekcji `Web Cloud`{.action} =>  `E-mail Pro`{.action}. Nazwa serwera jest widoczna w ramce *Logowanie* w zakładce `Informacje ogólne`{.action}.
>

![Outlook](images/config-outlook-emailpro07.png){.thumbnail}


## Sprawdź również

[Konfiguracja konta e-mail w Outlook 2016 na urządzeniu z systemem Windows](https://docs.ovh.com/pl/emails/konfiguracja-outlook-2016/){.external}.

[Konfiguracja konta Exchange w Outlook 2016 na systemie Windows](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-outlook-2016/){.external}

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
