---
title: Exchange - Konfiguracja konta e-mail w aplikacji Mail na macOS
excerpt: Dowiedz się, jak skonfigurować konto Exchange w aplikacji Mail na macOS
updated: 2024-04-16
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

Konta Exchange mogą być skonfigurowane w  kompatybilnych programach pocztowych.  Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji. Aplikacja Mail na macOS jest dostępna bezpłatnie dla wszystkich komputerów Mac.

**Dowiedz się, jak skonfigurować Twoje konto e-mail Exchange w aplikacji Mail na urządzeniach z systemem macOS.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego webmastera](/links/partner) lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "Sprawdź również".
> 

## Wymagania początkowe

- Posiadanie konta e-mail [Exchange](/links/web/emails-hosted-exchange)
- Instalacja programu Mail na Twoim urządzeniu Mac
- Dane do logowania do konta e-mail, które chcesz skonfigurować

## W praktyce

### Dodaj konto <a name="addaccount"></a>

> [!primary]
>
> W naszym przykładzie używamy nazwy serwera: ex*?*.mail.ovh.net. Należy zastąpić "?" cyfrą wskazującą serwer Twojej usługi Exchange.
>
> Znajdziesz tę cyfrę w [Panelu klienta OVHcloud](/links/manager), w rubryce `Web Cloud`{.action}, następnie `Microsoft`{.action}.
> Kliknij na `Exchange`{.action}, a następnie na wybraną platformę Exchange. Nazwa serwera jest widoczna w ramce **Połączenie** w zakładce `Informacje ogólne`{.action}.
>

- **Podczas pierwszego uruchomienia aplikacji** : bezpośrednio wyświetli się asystent konfiguracji i poprosi o wybranie typu konta.

- **Jeśli inne konto zostało wcześniej skonfigurowane** : kliknij `Mail`{.action} na pasku menu na górze Twojego ekranu, a następnie kliknij `Konta`{.action}.

> [!tabs]
> **Etap 1**
>> Wybierz `Exchange`{.action}<br><br>
>> ![MailMac](images/mail-mac-exchange01.png){.thumbnail .w-400 .h-600}
>>
> **Etap 2**
>> Wpisz **Nazwa** Twojego konta e-mail i **Adres e-mail**, a następnie kliknij `Zaloguj się {.action} <br><br>
>> ![MailMac](images/mail-mac-exchange02.png){.thumbnail .w-400 .h-600}
>>
> **Etap 3**
>> W kolejnym oknie kliknij `Konfiguracja ręczna`{.action} : <br><br>- Ustaw **Nazwa**, która będzie się wyświetlała w interfejsie nawigacji <br>- Pozostaw swój **adres e-mail**<br>- Pozostaw swoje **Hasło** wprowadzone <br><br>Aby dokończyć konfigurację, kliknij `Zaloguj się`{.action} <br><br>
>> ![MailMac](images/mail-mac-exchange03.png){.thumbnail .w-400 .h-600}
>>
> **Etap 4**
>> Wpisz: <br><br>- Adres e-mail: pozostaw pełny adres e-mail<br>- Nazwa użytkownika: pozostaw pełny adres e-mail <br>- Hasło: zostaw swoje **hasło**<br> - Wewnętrzny adres URL: **ex?.mail.ovh.net** (zmień **?* na [numer serwera Exchange](#addaccount))<br>- Zewnętrzny adres URL: **ex?.mail.ovh.net** (zmień **?* na [numer serwera Exchange](#addaccount))<br><br>
>>
>> > [!warning]
>> >
> > > Wiadomość jest wyświetlana na czerwono "**Nie można sprawdzić nazwy lub hasła konta**", gdy po raz pierwszy zostanie wyświetlone okno. Jeśli jednak ten komunikat będzie się powtarzać po zatwierdzeniu, wprowadzone informacje będą błędne.<br><br>
>>
>> ![MailMac](images/mail-mac-exchange04.png){.thumbnail .w-400 .h-600}
>>
> **Etap 5**
>> Oprócz e-maili możesz wybrać inne funkcje Exchange, którymi chcesz zarządzać z poziomu komputera Mac. <br><br>![mailmac](images/mail-mac-exchange05.png){.thumbnail .w-400 .h-600}

### Użyj konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVHcloud oferuje również aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu przeglądarki internetowej. Jest ona dostępna pod adresem <https://www.ovhcloud.com/pl/mail/>. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail. W przypadku pytań dotyczących korzystania z tego konta, skorzystaj z naszego przewodnika [Korzystanie z interfejsu Outlook Web App wraz z kontem Exchange](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Pobierz kopię zapasową Twojego konta e-mail

Jeśli musisz wykonać operację, która może spowodować utratę danych przypisanych do Twojego konta e-mail, zalecamy wykonanie kopii zapasowej odpowiedniego konta e-mail. W tym celu sprawdź sekcję "**Eksport**" w części "**Mail na Mac OS**" w naszym przewodniku [Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#eksport).

### Zmień istniejące parametry

Jeśli Twoje konto e-mail zostało już skonfigurowane i musisz mieć dostęp do parametrów konta, aby je zmienić:

- Kliknij `Mail`{.action} na pasku menu na górze Twojego ekranu, następnie `Preferencje...`{.action} **ou** `Ustawienia...`{.action} w zależności od Twojej wersji macOS.
- W zakładce `Konta`{.action} wybierz dane konto w kolumnie po lewej stronie, następnie kliknij `Ustawienia serwera`{.action}.

![mailmac](images/mail-mac-exchange05.png){.thumbnail}

## Sprawdź również

[FAQ e-maile](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Konfiguracja konta E-mail Pro w aplikacji Mail na urządzeniach z systemem macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)

[Konfiguracja konta e-mail MX Plan w aplikacji Mail na urządzeniach z systemem macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
