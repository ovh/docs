---
title: "MX Plan - Konfiguracja konta e-mail w programie Outlook na urządzeniu z systemem Windows"
excerpt: "Dowiedz się, jak skonfigurować Twoje konto e-mail MX Plan w programie Outlook na urządzeniu z systemem Windows"
updated: 2024-02-16
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>
 

## Wprowadzenie

Konta MX Plan mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować Twoje konto e-mail MX Plan w programie Outlook lub później na urządzeniu z systemem Windows.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z wyspecjalizowanym [usługodawcą](/links/partner) lub skontaktuj się z dostawcą usługi. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
> 

## Wymagania początkowe

- Posiadanie konta e-mail MX Plan (zawartego w usłudze MX Plan lub w usłudze [hostingu OVHcloud](/links/web/hosting))
- Posiadanie programu Microsoft Outlook lub późniejszego.
- Dane do logowania do konta e-mail, które chcesz skonfigurować
 
> [!primary]
>
> Używasz programu Outlook na urządzeniu Mac ? Zapoznaj się z naszą dokumentacją: [Konfiguracja konta e-mail w programie Outlook na urządzeniu Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).
>

## W praktyce

> [!alert]
>
> Zanim rozpoczniesz konfigurację za pomocą tego przewodnika, upewnij się, że flaga w prawym górnym rogu strony jest zgodna z Twoim krajem lub regionem, ponieważ ustawienia zależą od Twojej lokalizacji.

### Dodaj konto

- **Podczas pierwszego uruchomienia aplikacji**: wyświetli się asystent konfiguracji i poprosi o wpisanie adresu e-mail.

- **Jeżeli inne konto zostało wcześniej skonfigurowane**: kliknij `Plik`{.action} na pasku menu na górze Twojego ekranu, a następnie kliknij `Dodaj konto`{.action}.

- Wpisz hasło dla Twojego konta e-mail, po czym kliknij `Dalej`{.action}. Zaznacz kratkę obok komunikatu `Pozwól mi ręcznie skonfigurować moje konto `{.action}, a następnie kliknij `Połącz`{.action}. 

![Outlook](images/config-outlook-mxplan01.png){.thumbnail}

> [!primary]
>
> Nie wiesz, czy chcesz skonfigurować Twoje konto e-mail w trybie **POP** czy **IMAP**?
>
> Zanim przejdziesz dalej, zapoznaj się z sekcją "[POP lub IMAP, jaka jest różnica?](#popimap)" w tym przewodniku.
>
> W poniższych ustawieniach zobaczysz możliwość podania 2 różnych nazw hostów dla tego samego serwera (przychodzącego lub wychodzącego). Wartości te odnoszą się dokładnie do tego samego serwera. Zostały wprowadzone w celu ułatwienia wprowadzania danych i uniknięcia pomyłek między protokołami POP, IMAP i SMTP, które używają różnych portów.

Aby skonfigurować konto e-mail, wykonaj poniższe kroki.

> [!tabs]
> **Etap 1**
>> Spośród różnych rodzajów kont wybierz IMAP lub POP. <br>Rekomendujemy użycie protokołu IMAP.
>>
>> ![Outlook](images/config-outlook-mxplan02.png){.thumbnail .h-600}
>>
> **Etap 2**
>> Wpisz hasło przypisane do Twojego konta e-mail i kliknij `Dalej`{.action}.
>>
>> ![Outlook](images/config-outlook-mxplan03.png){.thumbnail .h-600}
>>
> **Etap 3**
>> Jeśli program Outlook nie może automatycznie skonfigurować Twojego adresu e-mail, pojawi się to okno. Kliknij `Zmień ustawienia konta`{.action}. W zależności od dokonanego wyboru (**POP** lub **IMAP**) przejdź do odpowiedniego etapu 4.
>>
>> ![Outlook](images/config-outlook-mxplan04.png){.thumbnail .h-600}
>>
> **Etap 4 - IMAP**
>> Jeśli wybrano IMAP, wprowadź następujące ustawienia. Jeśli wybrałeś POP, przejdź do zakładki "**Etap 4 - POP**".<br>
>> W polu **Poczta przychodząca** wpisz:<br>- Serwer **imap.mail.ovh.net** lub **ssl0.ovh.net** <br>- Port **993**<br>- Metoda szyfrowania **SSL/TLS**<br><br>W polu **Poczta wychodząca** wpisz:<br>- Serwer **smtp.mail.ovh.net** lub **ssl0.ovh.net** <br>- Port **465**<br>- Metoda szyfrowania **SSL/TLS**<br><br>Kliknij `Dalej`{.action}, aby zatwierdzić.<br>
>>
>> ![Outlook](images/config-outlook-mxplan05.png){.thumbnail .h-600}
>>
> **Etap 4 - POP**
>> W polu **Poczta przychodząca** wpisz:<br>- Serwer **pop.mail.ovh.net** lub **ssl0.ovh.net** <br>- Port **995**<br>- Metoda szyfrowania **SSL/TLS**<br><br>W polu **Poczta wychodząca** wpisz:<br>- Serwer **smtp.mail.ovh.net** lub **ssl0.ovh.net** <br>- Port **465**<br>- Metoda szyfrowania **SSL/TLS**<br><br>Kliknij `Dalej`{.action}, aby zatwierdzić.<br>
>>
>> ![Outlook](images/config-outlook-mxplan05-pop.png){.thumbnail .h-600}

### Pobierz kopię zapasową Twojego konta e-mail

Jeśli musisz wykonać operację, która może spowodować utratę danych przypisanych do Twojego konta e-mail, zalecamy wykonanie kopii zapasowej odpowiedniego konta e-mail. W tym celu zapoznaj się z sekcją "**Eksport z systemu Windows**" w przewodniku [Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#eksport-z-systemu-windows).

### Zmień istniejące parametry

Jeśli Twoje konto e-mail zostało już skonfigurowane i musisz mieć dostęp do parametrów konta, aby je zmienić:

- Przejdź do `Pliku`{.action} z paska menu na górze ekranu, a następnie wybierz konto, które chcesz zmienić w rozwijanym menu **(1)**.
- Kliknij `Parametry konta`{.action}**(2)** poniżej.
- Kliknij `Ustawienia serwera`{.action}**(3)**, aby uzyskać dostęp do okna parametrów.

![Outlook](images/config-outlook-mxplan06.png){.thumbnail}

Okno jest podzielone na dwie części, **Poczta przychodząca** i **Wychodząca**. Kliknij na którąś z nich, aby je zmienić.

![Outlook](images/config-outlook-mxplan07.png){.thumbnail}

### Przypomnienie parametrów POP, IMAP i SMTP <a name="popimap-settings"></a>

Do odbierania wiadomości e-mail, wybierając rodzaj konta, zalecamy użycie protokołu **IMAP**. Możesz również wybrać **POP**. Aby dowiedzieć się, jak to działa, zapoznaj się z sekcją "[POP lub IMAP, jaka jest różnica?](#popimap)" poniżej.

- **Konfiguracja POP**

|Informacja|Opis|
|---|---|
|Nazwa użytkownika|Wpisz **kompletny adres e-mail**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer (przychodzący)|pop.mail.ovh.net **lub** ssl0.ovh.net|
|Port|995|
|Typ zabezpieczenia|SSL/TLS|

- **Konfiguracja IMAP**

|Informacja|Opis|
|---|---|
|Nazwa użytkownika|Wpisz **kompletny adres e-mail**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer (przychodzący)|imap.mail.ovh.net **lub** ssl0.ovh.net|
|Port|993|
|Typ zabezpieczenia|SSL/TLS|

Do wysyłki e-maili, jeśli wprowadzasz ręcznie ustawienia **SMTP** w ustawieniach konta poniżej znajdziesz parametry, których należy użyć:

- **Konfiguracja SMTP**

|Informacja|Opis|
|---|---|
|Nazwa użytkownika|Wpisz **kompletny adres e-mail**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer (wychodzący)|smtp.mail.ovh.net **lub** ssl0.ovh.net|
|Port|465|
|Typ zabezpieczenia|SSL/TLS|

### POP lub IMAP, jaka jest różnica? <a name="popimap"></a>

Podczas ręcznej konfiguracji adresu e-mail klient poczty pyta, czy chcesz używać protokołu **POP** (**P**ost **O**ffice **P**rotocol) czy **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol). W celu lepszego zrozumienia, rola protokołów POP i IMAP musi być określona w konfiguracji konta e-mail.

Podczas konfigurowania klienta poczty, wprowadź dane **serwera poczty przychodzącej**, aby odbierać e-maile, oraz nazwę **serwera poczty wychodzącej**, aby wysyłać e-maile. Do wysyłania e-maili nie ma wyboru, jest używany protokół **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol). W przypadku odbioru wiadomości masz wybór między **POP** a **IMAP**.

![mxplan](images/mxplan-popimap-01.png){.thumbnail .w-400}

Aby zrozumieć różnicę między używaniem protokołu POP i IMAP, wyjaśnimy szczegółowo elementy składające się na przetwarzanie e-maili otrzymywanych:

1. **Twoje urządzenie**: komputer, smartfon lub tablet. To Twoje narzędzie do konsultacji.
2. **Program pocztowy**: aplikacja do zarządzania e-mailami. Wybór tego wariantu zadecyduje o stopniu ergonomii i funkcjonalności, jakich potrzebujesz, aby sprawdzać wiadomości e-mail.
3. **Protokół odbioru**: wybór określający sposób odbierania wiadomości e-mail na Twoim urządzeniu. Jego wybór ma wpływ na inne urządzenia, które korzystają z tego samego konta e-mail.
    - **IMAP**: Twój klient poczty odpytuje serwer e-mail i pobiera wiadomości e-mail na Twoje urządzenie. Gdy wyświetlasz nieprzeczytaną wiadomość e-mail, serwer domyślnie oznacza ją jako "przeczytaną". Inne urządzenia skonfigurowane w protokole IMAP będą mogły zobaczyć ten stan i wyświetlić ten e-mail do momentu usunięcia go z jednego z urządzeń.
    - **POP** : Twój klient poczty odpytuje serwer e-mail i pobiera wiadomości e-mail na Twoje urządzenie. Domyślnie wiadomość zostaje usunięta z serwera po zapisaniu jej na urządzeniu. Z tego powodu inne urządzenia połączone z tym adresem e-mail nie będą mogły wyświetlać tej wiadomości e-mail.

![mxplan](images/mxplan-popimap-02.png){.thumbnail .w-400}

> [!primary]
>
> Ten opis jest syntezą, reprezentuje standardowe działanie obu protokołów. Możesz również ustawić POP, aby wiadomości e-mail nie były usuwane po odczytaniu wiadomości. Naszym celem jest opisanie sposobu działania tych dwóch protokołów.

## Sprawdź również

> [!primary]
>
> Aby uzyskać więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Outlook na urządzeniach z systemem macOS, zobacz [Centrum pomocy Microsoft](https://support.microsoft.com/pl-pl/office/dodawanie-konta-e-mail-do-programu-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Konfiguracja konta E-mail Pro w programie Outlook na urządzeniu z systemem Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

[Konfiguracja konta Exchange w programie Outlook na urządzeniu z systemem Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
