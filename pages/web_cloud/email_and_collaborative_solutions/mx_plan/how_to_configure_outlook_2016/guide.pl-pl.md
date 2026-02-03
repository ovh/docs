---
title: "MX Plan / Zimbra Starter - Konfigurowanie adresu e-mail w klasycznym Outlooku dla Windows"
excerpt: "Dowiedz się, jak skonfigurować adres e-mail MX Plan w klasycznym Outlooku dla Windows"
updated: 2026-01-09
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
.h-500 {
  max-width:500px !important;
}
</style>

## Wprowadzenie

Konta MX Plan mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować Twoje konto e-mail MX Plan w programie Outlook lub później na urządzeniu z systemem Windows.**

## Wymagania początkowe

- Posiadanie wcześniej skonfigurowanego rozwiązania e-mail OVHcloud, takiego jak:
    - **MX Plan** oferowany wraz z naszymi [ofertami hostingowymi](/links/web/hosting) lub włączonym w [bezpłatnym hosting 100M](/links/web/domains-free-hosting).
    - [Zimbra](/links/web/emails-zimbra) Starter (tylko).
- Posiadanie aplikacji [klasycznego Outlooka](https://support.microsoft.com/pl-pl/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) na Windows.
- Dane do logowania do konta e-mail, które chcesz skonfigurować.

/// details | Informacje dotyczące zarządzania i konfiguracji usług OVHcloud

OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.

Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się [z wyspecjalizowanym usługodawcą](/links/partner) lub skontaktuj się z dostawcą usługi. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "[Sprawdź również](#go-further)".

///

> [!primary]
>
> Używasz programu Outlook na urządzeniu Mac ? Zapoznaj się z naszą dokumentacją: [Konfiguracja konta e-mail w programie Outlook na urządzeniu Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).
>

## W praktyce

> [!warning]
>
> Ta dokumentacja dotyczy wyłącznie **klasycznego Outlooka** dostępnego w pakiecie Microsoft 365. Jeśli korzystasz z nowego Outlooka, zapoznaj się z naszym przewodnikiem "[MX Plan / Zimbra Starter - Dodawanie konta e-mail w nowym Outlooku dla Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)".
>
> Aby zainstalować klasyczny Outlook na swoim komputerze z Windows, pobierz go ze strony Microsofta "[Instalowanie lub ponowne instalowanie klasycznego Outlooka na komputerze z Windows](https://support.microsoft.com/pl-pl/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" i zainstaluj.
>
> Po zakończeniu instalacji, aby odróżnić obie wersje, gdy są zainstalowane, wpisz "Outlook" w pasku wyszukiwania Windows. Możesz wtedy zauważyć różnicę, jak poniżej.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Dodaj konto <a name="add-account"></a>

> [!primary]
>
> Nie wiesz, czy chcesz skonfigurować Twoje konto e-mail w trybie **POP** czy **IMAP**?
>
> Zanim przejdziesz dalej, zapoznaj się z sekcją "[POP lub IMAP, jaka jest różnica?](#popimap)" w tym przewodniku.
>
> W poniższych ustawieniach zobaczysz możliwość podania 2 różnych nazw hostów dla tego samego serwera (przychodzącego lub wychodzącego). Wartości te odnoszą się dokładnie do tego samego serwera. Zostały wprowadzone w celu ułatwienia wprowadzania danych i uniknięcia pomyłek między protokołami POP, IMAP i SMTP, które używają różnych portów.

- **Podczas pierwszego uruchomienia aplikacji**: wyświetli się asystent konfiguracji i poprosi o wpisanie adresu e-mail.

- **Jeżeli inne konto zostało wcześniej skonfigurowane**: kliknij `Plik`{.action} na pasku menu na górze Twojego ekranu, a następnie kliknij `Dodaj konto`{.action}.

![Outlook](images/config-outlook-mxplan01.png){.thumbnail .h-500}

Aby skonfigurować swój adres e-mail, wykonaj poniższe kroki, klikając na odpowiednie karty.

> [!warning]
>
> Należy dokładnie wpisać wartość odpowiadającą Twojej lokalizacji (**EUROPE** lub **AMERIQUE / ASIE-PACIFIQUE**).

> [!tabs]
> **Krok 1**
>>
>> - Z okna **Dodaj konto**, wybierz `Ręczna konfiguracja lub dodatkowe typy serwerów`{.action}.
>> - Kliknij `Dalej`{.action}, aby kontynuować.
>> - Wybierz `POP lub IMAP`{.action}.
>> - Kliknij `Dalej`{.action}, aby kontynuować.
>>
>> ![Outlook](images/config-outlook-mxplan02.png){.thumbnail .h-500}
>>
> **Krok 2**
>>
>> Wprowadź dane logowania do swojego konta **(1)**:
>>
>> Dane użytkownika <br>
>> **Twoje imię**: ustaw nazwę wyświetlaną.<br>
>> **Adres poczty**: wpisz pełny adres e-mail.<br>
>>
>> Dane serwera <br>
>> - **Typ konta**: wybierz IMAP<br>
>> - **Serwer poczty przychodzącej**: <br>
>>      - **EUROPE**: imap.mail.ovh.net **lub** ssl0.ovh.net <br>
>>      - **AMERIQUE/ASIE-PACIFIQUE**: imap.mail.ovh.ca <br>
>> - **Serwer poczty wychodzącej (SMTP)**: <br>
>>      - **EUROPE**: smtp.mail.ovh.net **lub** ssl0.ovh.net <br>
>>      - **AMERIQUE/ASIE-PACIFIQUE**: smtp.mail.ovh.ca <br>
>>
>> Dane logowania <br>
>> **Nazwa użytkownika**: wpisz pełny adres e-mail.<br>
>> **Hasło**: wpisz hasło przypisane do adresu e-mail.<br>
>>
>> Kliknij `Dodatkowe ustawienia...`{.action} **(2)** i przejdź do następnego kroku
>>
>> ![Outlook](images/config-outlook-mxplan03.png){.thumbnail .h-500}
>>
> **Krok 3**
>>
>> Z zakładki `Serwer wychodzący`, zaznacz `Mój serwer wychodzący (SMTP) wymaga uwierzytelnienia`{.action} i pozostaw zaznaczone `Użyj tych samych ustawień co mój serwer poczty przychodzącej`{.action}.
>>
>> Z zakładki `Zaawansowane opcje`:
>>
>> - **Serwer przychodzący (IMAP)**: 993
>> - **Użyj poniższego typu szyfrowania połączenia**: SSL/TLS
>> - **Serwer poczty wychodzącej (SMTP)**: 465
>> - **Użyj poniższego typu szyfrowania połączenia**: SSL/TLS
>>
>> Kliknij `OK`{.action}, aby potwierdzić dane. Kliknij `Dalej`{.action}, aby rozpocząć konfigurację konta.
>>
>> ![Outlook](images/config-outlook-mxplan04.png){.thumbnail .h-500}
>>
> **Krok 4**
>>
>> Kliknij `Dalej`{.action}, aby rozpocząć konfigurację konta. Jeśli ustawienia zostaną potwierdzone, otrzymasz poniższe okno.
>>
>> ![Outlook](images/config-outlook-mxplan05.png){.thumbnail .h-500}
>>

### Używanie adresu e-mail

Po skonfigurowaniu adresu e-mail, możesz go używać! Możesz teraz wysyłać i odbierać wiadomości.

OVHcloud oferuje również aplikację internetową, umożliwiającą dostęp do adresu e-mail z przeglądarki internetowej. Webmail OVHcloud jest dostępny [tutaj](/links/web/email). Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail. W przypadku jakichkolwiek pytań dotyczących jej użycia, nie wahaj się zapoznać z naszym przewodnikiem [Korzystanie z konta Exchange za pomocą interfejsu OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Pobierz kopię zapasową Twojego konta e-mail

Jeśli musisz wykonać operację, która może spowodować utratę danych przypisanych do Twojego konta e-mail, zalecamy wykonanie kopii zapasowej odpowiedniego konta e-mail. W tym celu zapoznaj się z sekcją "**Eksport z systemu Windows**" w przewodniku "[Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#eksport-z-systemu-windows)".

### Zmień istniejące parametry

Jeśli Twoje konto e-mail zostało już skonfigurowane i musisz mieć dostęp do parametrów konta, aby je zmienić:

- Przejdź do `Plik`{.action} w pasku menu na górze ekranu.
- Wybierz konto do modyfikacji w rozwijanej liście **(1)**.
- Kliknij `Ustawienia konta`{.action} **(2)** poniżej.
- Kliknij `Ustawienia konta...`{.action} **(3)**, aby otworzyć okno ustawień.

![Outlook](images/config-outlook-mxplan06.png){.thumbnail}

- Wyświetlane są ustawienia konta, wybierz odpowiednie konto e-mail i kliknij `Zmień...`{.action}.

![Outlook](images/config-outlook-mxplan07.png){.thumbnail}

### Ogólne ustawienia wysyłania i odbierania <a name="settings-account"></a>

#### Ustawienia odbioru IMAP i POP <a name="imap-pop"></a>

Dla odbioru wiadomości e-mail, przy wyborze typu konta, zalecamy użycie **IMAP**. Możesz jednak wybrać **POP**.

> [!warning]
>
> Należy dokładnie zanotować wartość odpowiadającą Twojej lokalizacji (**EUROPE** lub **AMERIQUE / ASIE-PACIFIQUE**).

Wybierz odpowiednią kartę dla swojej konfiguracji:

> [!tabs]
> **Konfiguracja IMAP**
>>
>> - **Nazwa użytkownika**: wpisz pełny adres e-mail.
>> - **Hasło**: wpisz hasło do adresu e-mail.
>> - **Serwer EUROPE (przychodzący)**: imap.mail.ovh.net **lub** ssl0.ovh.net.
>> - **Serwer AMERIQUE/ASIE-PACIFIQUE (przychodzący)**: imap.mail.ovh.ca.
>> - **Port**: 993.
>> - **Typ zabezpieczeń**: SSL/TLS.
>>
> **Konfiguracja POP**
>>
>> - **Nazwa użytkownika**: wpisz pełny adres e-mail.
>> - **Hasło**: wpisz hasło do adresu e-mail.
>> - **Serwer EUROPE (przychodzący)**: pop.mail.ovh.net **lub** ssl0.ovh.net.
>> - **Serwer AMERIQUE/ASIE-PACIFIQUE (przychodzący)**: pop.mail.ovh.ca.
>> - **Port**: 995.
>> - **Typ zabezpieczeń**: SSL/TLS.

#### Ustawienia wysyłania SMTP <a name="smtp"></a>

Dla wysyłania wiadomości e-mail, poniżej znajdziesz ustawienia **SMTP**, które należy użyć:

**Konfiguracja SMTP**

- **Nazwa użytkownika**: wpisz pełny adres e-mail.
- **Hasło**: wpisz hasło do adresu e-mail.
- **Serwer EUROPE (wychodzący)**: smtp.mail.ovh.net **lub** ssl0.ovh.net.
- **Serwer AMERIQUE/ASIE-PACIFIQUE (wychodzący)**: smtp.mail.ovh.ca.
- **Port**: 465.
- **Typ zabezpieczeń**: SSL/TLS.

### POP lub IMAP, jaka jest różnica? <a name="popimap"></a>

Podczas ręcznej konfiguracji adresu e-mail klient poczty pyta, czy chcesz używać protokołu **POP** (**P**ost **O**ffice **P**rotocol) czy **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol). W celu lepszego zrozumienia, rola protokołów POP i IMAP musi być określona w konfiguracji konta e-mail.

Podczas konfigurowania klienta poczty, wprowadź dane **serwera poczty przychodzącej**, aby odbierać e-maile, oraz nazwę **serwera poczty wychodzącej**, aby wysyłać e-maile. Do wysyłania e-maili nie ma wyboru, jest używany protokół **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol). W przypadku odbioru wiadomości masz wybór między **POP** a **IMAP**.

![mxplan](images/mxplan-popimap-01.png){.thumbnail .w-400}

Aby zrozumieć różnicę między używaniem protokołu POP i IMAP, wyjaśnimy szczegółowo elementy składające się na przetwarzanie e-maili otrzymywanych:

1. **Twoje urządzenie**: komputer, smartfon lub tablet. To Twoje narzędzie do konsultacji.
2. **Program pocztowy**: aplikacja do zarządzania e-mailami. Wybór tego wariantu zadecyduje o stopniu ergonomii i funkcjonalności, jakich potrzebujesz, aby sprawdzać wiadomości e-mail.
3. **Protokół odbioru**: wybór określający sposób odbierania wiadomości e-mail na Twoim urządzeniu. Jego wybór ma wpływ na inne urządzenia, które korzystają z tego samego konta e-mail.
    - **IMAP**: Twój klient poczty odpytuje serwer e-mail i pobiera wiadomości e-mail na Twoje urządzenie. Gdy wyświetlasz nieprzeczytaną wiadomość e-mail, serwer domyślnie oznacza ją jako "przeczytaną". Inne urządzenia skonfigurowane w protokole IMAP będą mogły zobaczyć ten stan i wyświetlić ten e-mail do momentu usunięcia go z jednego z urządzeń.
    - **POP**: Twój klient poczty odpytuje serwer e-mail i pobiera wiadomości e-mail na Twoje urządzenie. Domyślnie wiadomość zostaje usunięta z serwera po zapisaniu jej na urządzeniu. Z tego powodu inne urządzenia połączone z tym adresem e-mail nie będą mogły wyświetlać tej wiadomości e-mail.

![mxplan](images/mxplan-popimap-02.png){.thumbnail .w-400}

> [!primary]
>
> Ten opis jest syntezą, reprezentuje standardowe działanie obu protokołów. Możesz również ustawić POP, aby wiadomości e-mail nie były usuwane po odczytaniu wiadomości. Naszym celem jest opisanie sposobu działania tych dwóch protokołów.

## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Aby uzyskać więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Outlook na urządzeniach z systemem macOS, zobacz [Centrum pomocy Microsoft](https://support.microsoft.com/pl-pl/office/dodawanie-konta-e-mail-do-programu-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Konfiguracja konta E-mail Pro w programie Outlook na urządzeniu z systemem Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

[Konfiguracja konta Exchange w programie Outlook na urządzeniu z systemem Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Dołącz do [grona naszych użytkowników](/links/community).
