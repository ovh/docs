---
title: 'Pierwsze kroki z usługą MX Plan'
excerpt: 'Dowiedz się, jak rozpocząć korzystanie z usługi MX Plan'
updated: 2025-06-26
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-500 {
  max-width:500px !important;
}
</style>

> [!success]
> Dołącz do ankiety i pomóż nam ulepszyć ten przewodnik!<br>
> Podziel się z nami swoją opinią i pomysłami.<br>
> [przejdź do ankiety.](https://s.elq.fr/ovhext/EsCB5sR)

## Wprowadzenie

Właśnie zakupiłeś usługę MX Plan. Pozwala ona na korzystanie z kont e-mail, dzięki którym możesz wysyłać i odbierać wiadomości, korzystając z dowolnego urządzenia.

**Dowiedz się, jak rozpocząć korzystanie z usługi MX Plan.**

## Wymagania początkowe

- Posiadanie pakietu MX Plan Jest ona dostępna przez: oferta [hostingu](/links/web/hosting), bezpłatny [Darmowy hosting 100M](/links/web/domains-free-hosting) lub oferta MX Plan.
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce <a name="instructions"></a>

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Web Cloud`{.action}.
1. Kliknij opcję `MX Plan`{.action}.
1. Wybierz odpowiednią domenę.
1. **Następnie postępuj zgodnie z technologią poczty elektronicznej używaną przez Twoją usługę MX Plan**.

> [!primary]
>
> **Sprawdzenie konfiguracji usługi MX Plan:**
>
> W zależności od daty aktywacji oferty MX Plan lub niedawnej migracji, przypisana technologia e-mail może się różnić. Wersja ta charakteryzuje się interfejsem webmaila. Aby ją zidentyfikować:
>
> - W zakładce `Informacje ogólne`{.action} sprawdź technologię oznaczoną **Webmail** w ramce `Subskrypcja`{.action} lub `Logowanie`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

**Podsumowanie**

- [Utwórz adres e-mail](#create-email)
- [Użyj Twoich kont e-mail](#consult-emails)
    - [Korzystaj z poczty Webmail](#consult-emails-webmail)
    - [Korzystanie z klienta poczty](#consult-emails-client)
        - [Ustawienia odbierania IMAP i POP](#imap-pop)
        - [Parametry wysyłania SMTP](#smtp)
- [Przekierowania i Aliasy](#redirection-alias)
- [Automatyczna odpowiedź](#autoreply)

### Załóż adres e-mail <a name="create-email"></a>

Aby dowiedzieć się, jak utworzyć konto e-mail, kliknij zakładkę odpowiadającą technologii e-mail używanej przez Twoją usługę MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Aby utworzyć konto e-mail, przejdź do zakładki `Emaile`{.action}. W oknie, które się wyświetla, widnieje lista utworzonych kont. Aby dodać nowe konto e-mail, kliknij przycisk `Dodaj konto`{.action}.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> W oknie, które się wyświetla, wprowadź wymagane informacje:
>>
>> - **Nazwa konta**: Wpisz nowy adres e-mail (na przykład Twoje imię.nazwisko). Nazwa domeny zawierająca adres e-mail jest już wstępnie zaznaczona na liście.
>> - **Opis konta**: Informacja o adresie e-mail, widoczna tylko w tabeli w zakładce `Emaile`{.action} Twojej usługi e-mail.
>> - **Rozmiar konta**: Określ rozmiar konta, który chcesz przypisać do konta e-mail.
>> - **Hasło**: [Ustaw hasło](/pages/account_and_service_management/account_information/manage-ovh-password) i potwierdź je. Ze względów bezpieczeństwa zalecamy nie używać dwa razy tego samego hasła. Najlepiej wybrać hasło nie mające żadnego związku z Twoimi danymi osobistymi (należy unikać używania imienia, nazwiska, daty urodzenia) i regularnie je zmieniać.
>>
>> Po uzupełnieniu pól kliknij przycisk `Dalej`{.action}, następnie sprawdź informacje, które wyświetlą się w podsumowaniu. Jeśli są prawidłowe, kliknij przycisk `Zatwierdź`{.action}. Wykonaj czynności tego etapu tyle razy, ile to konieczne, w zależności od liczby kont, które posiadasz.
>>
>> ![email](images/mxplan-creation-new-step3-roundcube.png){.thumbnail .w-500}
>>
> **Zimbra i OWA**
>>
>> Aby utworzyć konto e-mail, przejdź do zakładki `Konta e-mail`{.action}. W oknie, które się wyświetla, widnieje lista dostępnych kont oraz kont, które możesz jeszcze utworzyć. Aby dodać nowe konto e-mail, kliknij przycisk `Dodaj konto`{.action}.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> W oknie, które się wyświetla, wprowadź wymagane informacje:
>>
>> - **Konto e-mail**: Nazwa tymczasowa jest już wstępnie wpisana w polu tekstowym: usuń ją i wskaż nowy adres e-mail (na przykład Twoje imię.nazwisko). Nazwa domeny zawierająca adres e-mail jest już wstępnie zaznaczona na liście.
>> - **Imię**: Wprowadź imię.
>> - **Nazwa**: Wprowadź nazwę.
>> - **Nazwa do wyświetlenia**: Wpisz nazwę nadawcy, która ma się wyświetlać podczas wysyłania wiadomości e-mail przy użyciu tego adresu.
>> - **Hasło**: [Ustaw hasło](/pages/account_and_service_management/account_information/manage-ovh-password) i potwierdź je. Ze względów bezpieczeństwa zalecamy nie używać dwa razy tego samego hasła. Najlepiej wybrać hasło nie mające żadnego związku z Twoimi danymi osobistymi (należy unikać używania imienia, nazwiska, daty urodzenia) i regularnie je zmieniać.
>> - **Quota**: Określ rozmiar konta e-mail, który chcesz przypisać.
>>
>> Po uzupełnieniu pól kliknij przycisk `Dalej`{.action}, następnie sprawdź informacje, które wyświetlą się w podsumowaniu. Jeśli są prawidłowe, kliknij przycisk `Zatwierdź`{.action}. Wykonaj czynności tego etapu tyle razy, ile to konieczne, w zależności od liczby kont, które posiadasz.
>>
>> ![email](images/mxplan-starter-new-step3.png){.thumbnail .w-500}
>>

### Korzystanie z kont e-mail <a name="consult-emails"></a>

Po utworzeniu kont e-mail możesz zacząć z nich korzystać. Możesz to zrobić na dwa sposoby: za pomocą interfejsu webmail w przeglądarce internetowej lub przy użyciu programu pocztowego.

### Korzystanie z interfejsu Webmail <a name="consult-emails-webmail"></a>

Przejdź do strony "[Logowanie do interfejsu webmail](/links/web/email)", następnie wprowadź odpowiedni adres e-mail i hasło. Następnie kliknij przycisk `Logowanie`{.action}.

Wybierz kartę odpowiadającą technologii e-mail w Twojej usłudze MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Otrzymasz interfejs podobny do poniższego obrazka z napisem "Rouncube" w lewym górnym rogu.
>> Zapoznaj się z interfejsem Roundcube i jego wykorzystaniem w przewodniku "[Korzystanie z adresu e-mail przy użyciu interfejsu Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)".
>>
>> ![email](images/mxplan-webmail-roundcube01.png){.thumbnail .w-500}
>>
> **Zimbra**
>>
>> Jak na poniższym obrazku, na górze po lewej stronie pojawi się okno z napisem "Zimbra".
>> Aby dowiedzieć się, jak korzystać z konta e-mail przy użyciu webmaila Zimbra, zapoznaj się z naszym przewodnikiem "[Korzystanie z webmaila Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".
>>
>> ![email](images/mxplan-webmail-zimbra01.png){.thumbnail .w-500}
>>
> **OWA**
>>
>> Podczas pierwszego logowania do interfejsu webmail zostaniesz poproszony o ustawienie języka interfejsu oraz strefy czasowej, w której się znajdujesz. Wyświetli się wówczas Twoja skrzynka odbiorcza.
>>
>> Zapoznaj się z przewodnikiem dotyczącym korzystania z konta e-mail przy użyciu Webmail OWA "[Korzystanie z konta e-mail przy użyciu Webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".
>>
>> ![email](images/mxplan-webmail-owa01.png){.thumbnail .w-500}
>>

#### Korzystanie z klienta poczty <a name="consult-emails-client"></a>

Konto e-mail można skonfigurować w programie pocztowym takim jak Outlook, Thunderbird, Mail na komputery Mac itd.

Poniżej znajdziesz linki przewodników dotyczących konfiguracji, które będą odpowiadać Twoim typom urządzeń:

> [!tabs]
> **Komputer z systemem Windows**
>>
>> - [Outlook dla Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016).<br>
>> - [Thunderbird for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows).<br>
>> - [Poczta elektroniczna systemu Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10).
>>
> **Komputer Apple Mac**
>>
>> - [Outlook for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).<br>
>> - [Mail: macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos).<br>
>> - [Thunderbird dla macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac).
>>
> **iPhone lub iPad**
>>
>> - [Mail na iPhone'a i iPada](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios).
>>
> **Smartphone lub tablet z systemem Android**
>>
>> - [Gmail na Androida](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).
>>

Jeśli chcesz tylko uzyskać elementy niezbędne do konfiguracji Twojego konta e-mail, zapoznaj się z poniższymi parametrami, których należy użyć.

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

### Przekierowania i aliasy <a name="redirection-alias"></a>

Chcesz przekierować wiadomości e-mail do innego odbiorcy, utworzyć alias lub systematycznie kopiować inny adres e-mail?

W tym celu kliknij kartę odpowiadającą Twojej technologii e-mail:

> [!tabs]
> **Roundcube**
>>
>> Aby dodać przekierowanie lub alias, kliknij na zakładkę `Emaile`{.action} w Twojej usłudze MX Plan i kliknij na przycisk `Zarządzanie przekierowaniami`{.action} po prawej stronie.
>> Pojawi się tabela już aktywnych przekierowań. Kliknij przycisk `Dodaj przekierowanie`{.action}, aby uruchomić proces tworzenia przekierowania lub aliasu po prawej stronie.
>>
>> - `Od adresu`: Wpisz tutaj adres e-mail, który chcesz przekierować.<br>
>> - `Na adres`: Wpisz tutaj adres docelowy przekierowania. Może to być jeden z Twoich adresów e-mail OVHcloud lub adres zewnętrzny.<br>
>> - `Wybierz tryb kopii`: Określ, czy chcesz zachować kopię wiadomości otrzymanej na docelowy adres e-mail (`Z adresu`), czy też przekierować ją bezpośrednio na adres przekierowania (`Na adres`) bez zachowywania kopii.
>>
>> Zapoznaj się z przekierowaniami i aliasami usługi MX Plan z naszego przewodnika: "[Korzystanie z przekierowań e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)".
>>
> **OWA i Zimbra**
>>
>> Korzystając z technologii **OWA** lub **Zimbra**, możesz wykonać dwie czynności:
>>
>> 1. **Utwórz przekierowanie z poziomu interfejsu Webmail**: Za pomocą reguł skrzynki odbiorczej lub filtrów. Reguły, które stosujemy w momencie otrzymania wiadomości e-mail, pozwalają na przesłanie lub przekierowanie wiadomości. W tym celu zapoznaj się z przewodnikiem "[Reguły skrzynki odbiorczej w interfejsie OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan)" lub zapoznaj się z rozdziałem "Filtry" w naszym przewodniku "[Korzystanie z interfejsu webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".
>>
>> 2. **Utwórz przekierowanie i alias w Panelu klienta OVHcloud**: Aby dodać przekierowanie lub alias, kliknij zakładkę `Przekierowania`{.action}. Pojawi się tabela już aktywnych przekierowań. Kliknij przycisk `Dodaj przekierowanie`{.action} znajdujący się po prawej.
>>
>> - `Od adresu`: Wpisz tutaj adres e-mail, który chcesz przekierować.<br>
>> - `Na adres`: Wpisz tutaj adres docelowy przekierowania. Może to być jeden z Twoich adresów e-mail OVHcloud lub adres zewnętrzny.<br>
>> - `Wybierz tryb kopii`: Określ, czy chcesz zachować kopię wiadomości otrzymanej na docelowy adres e-mail (`Z adresu`), czy też przekierować ją bezpośrednio na adres przekierowania (`Na adres`) bez zachowywania kopii.
>>
>> Aby dowiedzieć się, jak korzystać z przekierowań i aliasów w usłudze MX Plan, zapoznaj się z naszym przewodnikiem: "[Korzystanie z przekierowań e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)".

### Automatyczna odpowiedź <a name="autoreply"></a>

Kiedy musisz być nieobecny, ważne jest, abyś mógł ustawić automatyczną odpowiedź, aby poinformować, że nie możesz przeglądać ani przetwarzać wiadomości e-mail.

Wybierz kartę odpowiadającą technologii e-mail w Twojej usłudze MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Aby dodać automatyczną odpowiedź do jednego z Twoich adresów e-mail, kliknij w zakładkę `Emaile`{.action} w Twojej usłudze MX Plan i kliknij przycisk `Zarządzanie autoresponderami`{.action} po prawej stronie.
>> Pojawi się tabela aktywnych autoresponderów. Kliknij przycisk `Dodaj autoresponder`{.action} po prawej stronie, aby uruchomić proces tworzenia przekierowania lub aliasu.
>>
>> Więcej informacji na temat uruchomienia automatycznej odpowiedzi z poziomu usługi MX Plan w Panelu klienta OVHcloud znajdziesz w przewodniku "[MX Plan - Tworzenie automatycznej odpowiedzi na adres e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses)".
>>
> **Zimbra**
>>
>> Automatyczna odpowiedź jest uruchamiana po zalogowaniu się do konta e-mail za pomocą interfejsu Webmail. Więcej informacji na ten temat znajdziesz w przewodniku "[Korzystanie z poczty Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)", a w podsumowaniu wybierz "Automatyczne odpowiedzi / autoresponder".
>>
> **OWA**
>>
>> Automatyczna odpowiedź jest uruchamiana po zalogowaniu się do konta e-mail za pomocą interfejsu Webmail. Aby uzyskać szczegółowe informacje, zapoznaj się z naszym przewodnikiem "[Korzystanie z konta e-mail przy użyciu Webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)", przejdź bezpośrednio do rozdziału "Dodaj automatyczną odpowiedź".
>>

## Sprawdź również <a name="go-further"></a>

[Użyj interfejsu Webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

[Skorzystaj z poczty Zimbra Webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Użyj Webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Użyj przekierowań poczty e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

[MX Plan - Utwórz automatyczną odpowiedź na adres e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses)

[Korzystaj z przekierowań email](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).
