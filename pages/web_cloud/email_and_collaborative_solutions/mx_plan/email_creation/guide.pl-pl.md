---
title: 'Tworzenie konta e-mail w ramach usługi MX Plan'
excerpt: 'Dowiedz się, jak utworzyć konto e-mail w ramach pakietu MX Plan'
updated: 2025-08-26
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

## Wprowadzenie

Właśnie zakupiłeś usługę e-mail MX Plan. Umożliwia ona korzystanie z kont e-mail powiązanych z domeną.

**Dowiedz się, jak utworzyć konto e-mail w ramach usługi MX Plan.**

## Wymagania początkowe

- Wykupienie usługi MX Plan. Usługa jest dostępna w:
    - Oferta [hostingu](/links/web/hosting).
    - Darmowy [hosting 100M](/links/web/domains-free-hosting) zawarty w ofercie domeny (uprzednio aktywowany).
    - Usługa MX Plan zamówiona oddzielnie.
- Dostęp do [Panelu klienta OVHcloud](/links/manager), sekcja `Web Cloud`{.action}.

> [!primary]
>
> **Szczególne przypadki**
>
> - Jeśli chodzi o bezpłatny Darmowy hosting 100M, konieczne jest wcześniejsze aktywowanie go przed utworzeniem konta e-mail. Operację tę możesz przeprowadzić w [Panelu klienta OVHcloud](/links/manager), przechodząc do odpowiedniej domeny.
> - Zanim przejdziesz do niniejszego przewodnika, należy aktywować Twój pakiet MX Plan zawarty w [ofercie hostingu](/links/web/hosting). W tym celu zapoznaj się z naszym przewodnikiem "[Aktywuj konta e-mail zawarte w Twoim hostingu](/pages/web_cloud/web_hosting/activate-email-hosting)".

## W praktyce <a name="instructions"></a>

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Web Cloud`{.action}.
1. Kliknij `MX Plan`{.action}.
1. Wybierz odpowiednią domenę.
1. **Następnie postępuj zgodnie z technologią poczty elektronicznej używaną przez Twoją usługę MX Plan**.

> [!primary]
>
> **Sprawdzenie poprawności technologii poczty e-mail w usłudze MX Plan.**
>
> W zależności od daty aktywacji oferty MX Plan lub niedawnej migracji, przypisana technologia e-mail może się różnić. Wersja ta charakteryzuje się interfejsem webmaila. Aby ją zidentyfikować:
>
> - W zakładce `Informacje ogólne`{.action} sprawdź technologię oznaczoną **Webmail** w ramce `Subskrypcja`{.action} w sekcji `Webmail`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-400}

## OWA i Zimbra

W tej sekcji udokumentowano usługi MX Plan wykorzystujące technologię webamil **OWA** i **Zimbra**.

#### Załóż konto e-mail

Skonfiguruj konta e-mail w zakładce `Konta e-mail`{.action}. W oknie, które się wyświetla, widnieje lista dostępnych kont oraz kont, które możesz jeszcze utworzyć. Kliknij przycisk `Dodaj konto`{.action}.

![email](images/mxplan-creation-new-step2.png){.thumbnail .w-400}

W oknie, które się wyświetla, wprowadź wymagane informacje:

- **Konto e-mail**: Nazwa tymczasowa jest już wstępnie wypełniona w polu tekstowym. Zastąp go wybranym adresem e-mail (np. Twoje imię.nazwisko). Nazwa domeny zawierająca adres e-mail jest już wstępnie zaznaczona na liście.

> [!warning]
>
> Wybór nazwy konta e-mail musi spełniać następujące warunki:
>
> - Minimum 2 znaki
> - Maksymalnie 32 znaki
> - Brak znaków akcentowanych
> - Brak znaków specjalnych, z wyjątkiem następujących znaków: `.`, `,`, `-` i `_`

- **Imię**: Wprowadź imię.
- **Nazwa**: Wprowadź nazwisko.
- **Nazwa do wyświetlenia**: Wpisz nazwę nadawcy, która będzie się wyświetlać podczas wysyłki wiadomości e-mail przy użyciu tego konta.
- **Hasło**: Wpisz hasło i je potwierdź. Ze względów bezpieczeństwa zalecamy nie używać dwa razy tego samego hasła. Najlepiej wybrać hasło nie mające żadnego związku z Twoimi danymi osobistymi (należy unikać używania imienia, nazwiska, daty urodzenia, etc.) i regularnie je zmieniać.

> [!warning]
>
> Wybór hasła musi spełniać następujące warunki:
>
> - Minimum 9 znaków
> - Maksymalnie 30 znaków
> - Brak znaków akcentowanych

Po uzupełnieniu pól kliknij przycisk `Dalej`{.action}. 

![email](images/mxplan-creation-new-step3.png){.thumbnail .w-400}

Sprawdź informacje, które wyświetlą się w podsumowaniu; jeśli są poprawne, kliknij `Zatwierdź`{.action}. Pojawi się wówczas nowe konto w tabeli. Odczekaj kilka chwil, aż konto będzie dostępne.

Wykonaj czynności tego etapu tyle razy, ile to konieczne, w zależności od liczby kont, które posiadasz.

#### Sprawdź e-maile

Zaloguj się na stronie [Logowanie do interfejsu Webmail](/links/web/email), po czym wprowadź odpowiedni adres e-mail oraz hasło. Kliknij następnie przycisk `Logowanie`{.action}.

Wybierz kartę odpowiadającą technologii e-mail w Twojej usłudze MX Plan:

> [!tabs]
> **Zimbra**
>>
>> Po zalogowaniu do Zimbra Webmail otrzymasz poniższy interfejs. Więcej informacji na temat korzystania z webmaila Zimbra znajdziesz w naszym przewodniku "[Korzystanie z webmaila Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra) ".
>>
>> ![Zimbra - interface](images/zimbra-01.png){.thumbnail .w-400}
>>
> **OWA**
>>
>> Podczas pierwszego logowania do interfejsu Webmail zostaniesz poproszony o określenie języka interfejsu oraz Twojej strefy czasowej. Wyświetli się wówczas Twoja skrzynka odbiorcza. Aby dowiedzieć się, jak korzystać z konta e-mail za pośrednictwem Webmail Outlook Web App (OWA), zapoznaj się z naszym przewodnikiem [Korzystanie z konta e-mail przy użyciu Webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).
>>
>> ![email](images/mxplan-creation-new-step5.png){.thumbnail .w-400}

Aby sprawdzić wiadomości e-mail za pomocą programu pocztowego, zapoznaj się z sekcją "[Sprawdź konto e-mail z urządzenia](#configdevices)".

#### Usuń konto e-mail

Od nowej wersji MX Plan mówimy o *resecie konta*, kiedy musisz go usunąć.

> [!warning]
>
> Przed usunięciem kont e-mail upewnij się, że nie są one używane. Może zaistnieć konieczność zabezpieczenia tych kont. W razie potrzeby zapoznaj się z przewodnikiem [Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), który opisze, jak wyeksportować dane z konta z Panelu klienta lub programu pocztowego.

W zakładce `Konta e-mail`{.action} kliknij przycisk `...`{.action} po prawej stronie konta, które chcesz usunąć, a następnie kliknij `Zresetuj to konto`{.action}.

![email](images/mxplan-new-reset.png){.thumbnail .w-400}

### MX Plan Roundcube

Ta sekcja jest przeznaczona dla ofert MX Plan korzystających z technologii webmail **Roundcube**.

#### Załóż konto e-mail

Aby uzyskać nowy adres e-mail, przejdź do zakładki `E-maile`{.action}. Tabela, która się wyświetla zawiera wszystkie konta e-mail utworzone w ramach Twojej usługi MX Plan. Kliknij przycisk `Utwórz konto e-mail`{.action}.

![email](images/mxplan-creation-legacy-step2.png){.thumbnail .w-400}

W oknie, które się wyświetla, wprowadź wymagane informacje:

- **Nazwa konta**: Wpisz wybraną nazwę Twojego konta e-mail (np. Twoje imię.nazwisko). Nazwa wybranej domeny jest już dodana domyślnie.|  
- **Opis konta**: Wpisz krótki opis umożliwiający rozpoznanie tego konta wśród innych kont wyświetlonych w Panelu klienta OVHcloud.|  
- **Rozmiar konta**: Wybierz wielkość skrzynki pocztowej. Jest to przestrzeń przeznaczona na przechowywanie wiadomości.|  
- **Hasło**: Wpisz hasło i je potwierdź. Ze względów bezpieczeństwa zalecamy nie używać dwa razy tego samego hasła. Należy wybrać hasło, które nie ma żadnego związku z Twoimi danymi osobistymi (takimi jak nazwisko, imię i data urodzenia) i regularnie je zmieniać.|

Po uzupełnieniu pól kliknij przycisk `Dalej`{.action}. 

![email](images/mxplan-creation-legacy-step3.png){.thumbnail .w-400}

Sprawdź informacje, które wyświetlają się w podsumowaniu. Jeśli są poprawne, kliknij `Dalej`{.action}. Kliknij `Zatwierdź`{.action}, aby uruchomić proces tworzenia konta e-mail. Odczekaj kilka chwil aż konto będzie dostępne.

Wykonaj czynności tego etapu tyle razy, ile to konieczne, w zależności od liczby kont, które posiadasz.

#### Sprawdź e-maile 

Zaloguj się na stronie [Logowanie do interfejsu Webmail](/links/web/email), po czym wprowadź odpowiedni adres e-mail oraz hasło. Kliknij następnie przycisk `Logowanie`{.action}.

Wyświetli się wówczas Twoja skrzynka odbiorcza. Aby dowiedzieć się, jak korzystać z konta e-mail za pośrednictwem Webmail OWA, zapoznaj się z naszym przewodnikiem [Korzystanie z konta e-mail w interfejsie Webmail RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

![email](images/mxplan-creation-legacy-step4.png){.thumbnail .w-400}

Aby sprawdzić wiadomości e-mail przy użyciu programu pocztowego, zapoznaj się z sekcją [Sprawdź konto e-mail za pomocą urządzenia](#configdevices)

#### Usuń konto e-mail

> [!warning]
>
> Przed usunięciem kont e-mail upewnij się, że nie są one używane. Może zaistnieć konieczność zabezpieczenia tych kont. W razie potrzeby zapoznaj się z przewodnikiem [Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), który opisze, jak wyeksportować dane z konta z Panelu klienta lub programu pocztowego.

W zakładce `Konta e-mail`{.action} kliknij przycisk `...`{.action} po prawej stronie konta, które chcesz usunąć, a następnie kliknij `Usuń konto`{.action}

![email](images/mxplan-legacy-reset.png){.thumbnail .w-400}

### Sprawdź konto e-mail za pomocą urządzenia <a name="configdevices"></a>

Skonfiguruj Twoje konto e-mail na wybranym urządzeniu (typu smartfon lub tablet). W tym celu możesz zapoznać się z naszymi przewodnikami dotyczącymi konfiguracji:

> [!tabs]
> **Windows**
>>
>> - [Poczta na systemie Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>> - [Outlook](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>>
> **Apple**
>>
>> - [Mail macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [E-mail na iPhone lub iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>> - [Outlook Mac OS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **Android**
>>
>> - [Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Inne**
>>
>> - [Interfejs Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

Poniżej znajdziesz elementy potrzebne do konfiguracji Twojego konta e-mail.

#### Parametry odbioru IMAP i POP <a name="imap-pop"></a>

Jeśli chcesz otrzymywać e-maile, wybierz rodzaj konta. Zalecamy użycie **IMAP**. Możesz jednak wybrać **POP**.

> [!warning]
>
> Należy wyraźnie podnieść wartość odnoszącą się do Twojej lokalizacji (**EUROPE** lub **AMERYKA / AZJA-PACYFIK**).

Wybierz kartę odpowiadającą Twojemu typowi konfiguracji:

> [!tabs]
> **Konfiguracja IMAP**
>>
>> - **Nazwa użytkownika**: Wpisz pełny adres e-mail **complete**.
>> - **Hasło**: Wpisz hasło wybrane dla tego konta e-mail.
>> - **Serwer EUROPE (ruch przychodzący)**: imap.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Serwer USA/AZJA-PACYFIK (ruch przychodzący)**: imap.mail.ovh.ca.
>> - **Port**: 993.
>> - **Typ bezpieczeństwa**: SSL/TLS.
>>
> **Konfiguracja POP**
>>
>> - **Nazwa użytkownika**: Wpisz pełny adres e-mail **complete**.
>> - **Hasło**: Wpisz hasło wybrane dla tego konta e-mail.
>> - **Serwer EUROPE (ruch przychodzący)**: pop.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Serwer amerykański/AZJA-PACYFIK (ruch przychodzący)**: pop.mail.ovh.ca.
>> - **Port**: 995.
>> - **Typ bezpieczeństwa**: SSL/TLS.

#### Parametry przesyłania SMTP <a name="smtp"></a>

Do wysyłki e-maili należy użyć następujących ustawień **SMTP**:

**Konfiguracja SMTP**

- **Nazwa użytkownika**: Wpisz pełny adres e-mail **complete**.
- **Hasło**: Wpisz hasło wybrane dla tego konta e-mail.
- **Serwer EUROPE (ruch wychodzący)**: smtp.mail.ovh.net **ou** ssl0.ovh.net.
- **Serwer amerykański/AZJA-PACYFIK (ruch wychodzący)**: smtp.mail.ovh.ca.
- **Port**: 465.
- **Typ bezpieczeństwa**: SSL/TLS.

## Przykłady zastosowania

**Czy wszystkie adresy e-mail zawarte w Twojej ofercie zostały wykorzystane?**

- Sprawdź pytania dotyczące usługi [FAQ e-mail](pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).
- Zapoznaj się z wszystkimi ofertami e-mail od OVH [Zimbra](/links/web/emails-zimbra) lub [Exchange](/links/web/email), aby uzupełnić ofertę MX Plan dla tej samej domeny.

## Sprawdź również <a name="go-further"></a>

[Użyj interfejsu Webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

[Skorzystaj z poczty Zimbra Webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Użyj Webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).