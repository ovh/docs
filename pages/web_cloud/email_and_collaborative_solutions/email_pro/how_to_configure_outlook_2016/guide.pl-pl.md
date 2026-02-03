---
title: 'Email Pro - Skonfigurowanie konta e-mail w klasycznym Outlooku dla Windows'
excerpt: 'Dowiedz się, jak skonfigurować konto E-mail Pro w klasycznym programie Outlook na urządzeniu z systemem Windows'
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

Konta E-mail Pro mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować Twoje konto e-mail E-mail Pro w programie Outlook lub później na urządzeniu z systemem Windows.**

## Wymagania początkowe

- Posiadanie konta e-mail [E-mail Pro](/links/web/email-pro).
- Posiadanie [klasycznego programu Microsoft Outlook](https://support.microsoft.com/pl-pl/office/instalowanie-lub-ponowne-instalowanie-klasycznego-programu-outlook-na-komputerze-z-systemem-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) lub późniejszego.
- Dane do logowania do konta e-mail, które chcesz skonfigurować.

/// details | Informacje dotyczące zarządzania i konfiguracji usług OVHcloud

OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.

Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie [z pomocy wyspecjalizowanego webmastera](/links/partner) lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "[Sprawdź również](#go-further)".

///

## W praktyce

> [!warning]
>
> Ta dokumentacja dotyczy wyłącznie **klasycznego Outlooka** dostępnego w pakiecie Microsoft 365. Jeśli korzystasz z nowego Outlooka, zapoznaj się z naszym przewodnikiem "[E-mail Pro - Konfiguracja konta E-Mail Pro w nowej aplikacji Outlook na Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_windows_10)".
>
> Aby zainstalować klasyczny Outlook na swoim komputerze z Windows, pobierz go ze strony Microsofta "[Instalowanie lub ponowne instalowanie klasycznego Outlooka na komputerze z systemem Windows](https://support.microsoft.com/pl-pl/office/instalowanie-lub-ponowne-instalowanie-klasycznego-programu-outlook-na-komputerze-z-systemem-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" i zainstaluj.
>
> Po zakończeniu instalacji, aby odróżnić dwie wersje, gdy są zainstalowane, wpisz "Outlook" w pasku wyszukiwania systemu Windows. Możesz wtedy zauważyć różnicę jak poniżej.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Dodaj konto <a name="add-account"></a>

> [!primary]
>
> W naszym przykładzie używamy nazwy serwera: pro?.mail.ovh.net. Musisz zastąpić "?", cyfrą odpowiadającą serwerowi Twojego konta E-mail Pro.
>
> 1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
> 1. Przejdź do sekcji `Web Cloud`{.action}.
> 1. Kliknij `Email Pro`{.action}.
> 1. Wybierz odpowiednią platformę.
> 1. Nazwa serwera jest widoczna w sekcji **Logowanie** na karcie `Informacje ogólne`{.action}.

- **Podczas pierwszego uruchomienia aplikacji**: wyświetli się asystent konfiguracji i poprosi o wpisanie adresu e-mail.

- **Jeżeli inne konto zostało wcześniej skonfigurowane**: kliknij `Plik`{.action} na pasku menu na górze Twojego ekranu, a następnie kliknij `Dodaj konto`{.action}.

![Outlook](images/config-outlook-emailpro01.png){.thumbnail .h-500}

Aby skonfigurować swój adres e-mail, wykonaj poniższe kroki, klikając odpowiednie karty poniżej.

> **Krok 1**
>>
>> - Z okna **Dodawanie konta**, wybierz `Konfiguracja ręczna lub dodatkowe typy serwerów`{.action}.
>> - Kliknij `Dalej`{.action}, aby kontynuować.
>> - Wybierz `POP lub IMAP`{.action}.
>> - Kliknij `Dalej`{.action}, aby kontynuować.
>>
>> ![Outlook](images/config-outlook-emailpro02.png){.thumbnail .h-500}
>>
> **Krok 2**
>>
>> Wprowadź dane logowania do swojego konta **(1)**:
>>
>> Dane użytkownika <br>
>> **Twoje imię**: ustaw nazwę do wyświetlenia.<br>
>> **Adres e-mail**: wpisz pełny adres e-mail.<br>
>>
>> Dane serwera <br>
>> **Typ konta**: wybierz IMAP.<br>
>> **Serwer poczty przychodzącej**: pro?.mail.ovh.net (znak **«?»** należy zastąpić numerem swojego serwera).<br>
>> **Serwer poczty wychodzącej (SMTP)**: pro?.mail.ovh.net (znak **«?»** należy zastąpić numerem swojego serwera).<br>
>>
>> Dane logowania <br>
>> **Nazwa użytkownika**: Wprowadź pełny adres e-mail.<br>
>> **Hasło**: Wprowadź hasło przypisane do adresu e-mail.<br>
>>
>> Kliknij `Dodatkowe ustawienia...`{.action} **(2)** i przejdź do następnego kroku
>>
>> ![Outlook](images/config-outlook-emailpro03.png){.thumbnail .h-500}
>>
> **Krok 3**
>>
>> Z zakładki `Serwer wychodzący`, zaznacz `Mój serwer wychodzący (SMTP) wymaga uwierzytelnienia`{.action} i pozostaw zaznaczone `Użyj tych samych ustawień co mój serwer poczty przychodzącej`{.action}.
>>
>> Z zakładki `Zaawansowane opcje`:
>>
>> - **Serwer przychodzący (IMAP)**: 993
>> - **Użyj poniższego typu szyfrowania połączenia**: SSL/TLS
>> - **Serwer poczty wychodzącej (SMTP)**: 587
>> - **Użyj poniższego typu szyfrowania połączenia**: STARTTLS
>>
>> Kliknij `OK`{.action}, aby potwierdzić dane. Kliknij `Dalej`{.action}, aby rozpocząć konfigurację konta.
>>
>> ![Outlook](images/config-outlook-emailpro04.png){.thumbnail .h-500}
>>
> **Krok 4**
>>
>> Kliknij `Dalej`{.action}, aby rozpocząć konfigurację konta. Jeśli ustawienia zostaną zweryfikowane, otrzymasz poniższe okno.
>>
>> ![Outlook](images/config-outlook-emailpro05.png){.thumbnail .h-500}
>>

### Użyj konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVHcloud oferuje również aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu przeglądarki internetowej. Webmail OVHcloud jest dostępny [tutaj](/links/web/email). Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail. W przypadku pytań dotyczących korzystania z tego konta, zapoznaj się z naszym przewodnikiem [Korzystanie z Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Pobierz kopię zapasową Twojego konta e-mail

Jeśli musisz wykonać operację, która może spowodować utratę danych przypisanych do Twojego konta e-mail, zalecamy wykonanie kopii zapasowej odpowiedniego konta e-mail. W tym celu zapoznaj się z sekcją "**Eksport z systemu Windows**" w przewodniku [Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#eksport-z-systemu-windows).

### Zmień istniejące parametry

Jeśli Twoje konto e-mail zostało już skonfigurowane i musisz mieć dostęp do parametrów konta, aby je zmienić:

- Przejdź do `Plik`{.action} w górnym pasku menu.
- Wybierz konto do zmiany w menu rozwijanym **(1)**.
- Kliknij `Ustawienia konta`{.action} **(2)** poniżej.
- Kliknij `Ustawienia konta...`{.action} **(3)**, aby otworzyć okno ustawień.

![Outlook](images/config-outlook-emailpro06.png){.thumbnail .h-500}

- Wyświetlane są ustawienia konta, wybierz odpowiednie konto e-mail i kliknij `Zmień...`{.action}.

![Outlook](images/config-outlook-emailpro07.png){.thumbnail .h-500}

Aby skonfigurować swoje konto, wykonaj instrukcje od **kroku 2** w sekcji [Dodawanie konta](#add-account) tego przewodnika.

### Ogólne ustawienia wysyłania i odbierania <a name="settings-account"></a>

#### Ustawienia odbioru IMAP i POP <a name="imap-pop"></a>

W przypadku odbierania wiadomości e-mail, przy wyborze typu konta, zalecamy użycie **IMAP**. Możesz jednak wybrać **POP**.

Wybierz odpowiednią zakładkę dla swojej konfiguracji:

> [!tabs]
> **Konfiguracja IMAP**
>>
>> - **Nazwa użytkownika**: wpisz pełny adres e-mail.
>> - **Hasło**: wpisz hasło do adresu e-mail.
>> - **Serwer przychodzący**: pro?.mail.ovh.net (upewnij się, że zastąpiłeś "?", numerem swojego serwera).
>> - **Port**: 993.
>> - **Typ zabezpieczeń**: SSL/TLS.
>>
> **Konfiguracja POP**
>>
>> - **Nazwa użytkownika**: wpisz pełny adres e-mail.
>> - **Hasło**: wpisz hasło do adresu e-mail.
>> - **Serwer przychodzący**: pro?.mail.ovh.net (upewnij się, że zastąpiłeś "?", numerem swojego serwera).
>> - **Port**: 995.
>> - **Typ zabezpieczeń**: SSL/TLS.

#### Ustawienia wysyłania SMTP <a name="smtp"></a>

W przypadku wysyłania wiadomości e-mail, poniżej znajdziesz ustawienia **SMTP**, które należy użyć:

**Konfiguracja SMTP**

- **Nazwa użytkownika**: wpisz pełny adres e-mail.
- **Hasło**: wpisz hasło do adresu e-mail.
- **Serwer wychodzący**: pro?.mail.ovh.net (upewnij się, że zastąpiłeś "?", numerem swojego serwera).
- **Port**: 587.
- **Typ zabezpieczeń**: STARTTLS.

## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Aby uzyskać więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Outlook na urządzeniach z systemem macOS, zobacz [Centrum pomocy Microsoft](https://support.microsoft.com/pl-pl/office/dodawanie-konta-e-mail-do-programu-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Konfiguracja konta e-mail w Outlook na urządzeniu z systemem Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)

[Konfiguracja konta Exchange w Outlook na systemie Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Dołącz do [grona naszych użytkowników](/links/community).