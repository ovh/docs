---
title: 'Konfiguracja konta E-mail Pro'
slug: pierwsza-konfiguracja-email-pro
excerpt: 'Dowiedz się, jak skonfigurować konto E-mail Pro'
section: 'Informacje ogólne'
---

**Ostatnia aktualizacja z dnia 07-04-2020**

## Wprowadzenie

Właśnie zakupiłeś usługę E-mail Pro. Umożliwia ona korzystanie z profesjonalnych kont e-mail w najlepszej cenie pozwalającej na prowadzenie bieżącej działalności lub rozpoczęcie nowej.

**Dowiedz się, jak przeprowadzić konfigurację usługi E-mail Pro.**

## Wymagania początkowe

- Wykupienie usługi [E-mail Pro]({ovh_www}/emails/email-pro/){.external}
- Otrzymanie wiadomości e-mail z potwierdzeniem, że usługa E-mail Pro została zainstalowana
- Zarejestrowana domena.
- Dostęp do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## W praktyce

### Etap 1: logowanie do usługi E-mail Pro

Po utworzeniu i udostępnieniu usługi E-mail Pro, można nią zarządzać poprzez [Panel klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Zaloguj się do Panelu klienta, kliknij E-mail Pro na pasku usług po lewej stronie, następnie wybierz odpowiednią usługę.

> [!primary]
>
> Nazwa usługi E-mail Pro w Panelu klienta OVHcloud zaczyna się od *emailpro-*, następnie zawiera część Twojego identyfikatora klienta i kończy się cyfrą (1 dla pierwszej zainstalowanej usługi E-mail Pro, 2 dla drugiej etc.).
>

### Etap 2: dodanie domeny

Po zamówieniu usługi E-mail Pro automatycznie wyświetli się okno, w którym zostaniesz poproszony o `Dodanie domeny`{.action}. Jeśli okno się nie wyświetla, przejdź do karty `Powiązane domeny`{.action}, następnie kliknij przycisk `Dodaj domenę`{.action}.

Masz do wyboru dwie opcje:

- **wybrać domenę z listy**: wyświetlane są wyłącznie nazwy domen, którymi zarządzasz z poziomu Panelu klienta OVHcloud;
- **wpisanie domeny, która nie jest zarządzana na Twoim koncie OVHcloud**: aby usługa E-mail Pro działała poprawnie, musisz mieć możliwość edycji konfiguracji (strefy DNS) domeny.

Po wybraniu opcji kliknij `Dalej`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

Okno wyświetla teraz informacje dotyczące konfiguracji trybów.

- **W przypadku nazwy domeny nieobsługiwanej przez OVHcloud**: zostanie domyślnie skonfigurowany tryb nieautorytatywny.
- **W przypadku nazwy domeny obsługiwanej przez OVHcloud**: należy wybrać jeden z dwóch dostępnych trybów.

|Tryb|Opis|
|---|---|
|Autorytatywny|Odpowiedni, jeśli do obsługi poczty w Twojej domenie używasz jedynie usługi E-mail Pro. Nie pozwala na korzystanie z innego rozwiązania poczty elektronicznej w połączeniu z usługą E-mail Pro.|
|Nieautorytatywny|Odpowiedni, jeśli do obsługi Twojej domeny używasz kont E-mail Pro oraz jednocześnie innego rozwiązania poczty elektronicznej.| 

> [!primary]
>
> Wybór trybu nie jest ostateczny i możesz zmienić go później w Panelu klienta OVHcloud.
>

Kliknij przycisk `Dalej`{.action}, aby kontynuować proces dodawania domeny.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Jeśli wybrałeś z listy nazwę domeny obsługiwaną przez OVHcloud**, jej konfiguracja może zostać przeprowadzona automatycznie. W celu przeprowadzenia automatycznej konfiguracji, zaznacz odpowiednie pola i kliknij `Dalej`{.action}, aby kontynuować proces dodawania domeny.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

- **SRV**: rekord DNS umożliwiający automatyczną konfigurację Twojego programu pocztowego podczas dodawania adresu e-mail.
- **MX**: rekord DNS definiujący serwery e-mail, niezbędny do odbierania e-maili w danej domenie.

**W przypadku domeny, która nie jest zarządzana w OVHcloud**, przejdź do etapu 3.

Przed zakończeniem konfiguracji zweryfikuj wyświetlane informacje, a następnie kliknij przycisk `Zatwierdź`{.action}, aby dodać domenę.

### Etap 3: konfiguracja nazwy domeny

Po dodaniu nazwy domeny jako domeny powiązanej sprawdź jej ustawienia, korzystając z wyświetlającej się tabeli.

W kolumnie `Diagnostyka`{.action} możesz sprawdzić konfigurację DNS domeny. Jeśli parametry powinny zostać zmodyfikowane, wyświetli się czerwony przycisk. Istnieją dwie możliwości:

- **Automatyczna konfiguracja podczas dodawania domeny OVHcloud**: wprowadzona zmiana może pojawić się w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} dopiero za kilka godzin.

- **Ręczna konfiguracja domeny nieobsługiwanej przez OVHcloud**: kliknij czerwony przycisk, aby wyświetlić listę modyfikacji do wprowadzania. <br>*Instrukcje dotyczące rekordu CNAME* znajdziesz w naszym przewodniku <br>*Instrukcje dotyczące rekordu MX* znajdziesz w naszym przewodniku <br>*W przypadku rekordu SRV* wypełnij pole DNS z wykorzystaniem informacji, które wyświetlane zostaną po kliknięciu czerwonego przycisku. Możesz zapoznać się z przewodnikiem „[Edycja strefy DNS OVH](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}”, aby dodać ten rekord.

![emailpro](images/first_config_email_pro_configure_domain_update.png){.thumbnail}

### Etap 4: konfiguracja i korzystanie z kont E-mail Pro

Skonfiguruj konta e-mail w karcie `Konta e-mail`{.action}. Konta, które zamówiłeś wyświetlają się w tabeli w postaci “*@configureme.me*”.

Aby przeprowadzić konfigurację kont, kliknij ikonę ołówka.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Teraz uzupełnij kolejne informacje, o które zostaniesz poproszony.

|Nazwa|Opis|
|---|---|
|Konto e-mail|Wprowadź nazwę, którą wybrałeś dla Twojego konta e-mail (np. Twoje imie.nazwisko) i wybierz z listy odpowiednią domenę.|
|Imię|Wprowadź imię.|
|Nazwisko|Wprowadź nazwisko.|
|Nazwa, która będzie się wyświetlać.|Wpisz nazwę nadawcy, która będzie się wyświetlać podczas wysyłki wiadomości e-mail przy użyciu tego konta.|
|Hasło i jego potwierdzenie|Ustaw hasło składające się z co najmniej 8 znaków i zawierające co najmniej jedną dużą literę, jedną małą literę i jedną cyfrę.| 

Po wprowadzeniu informacji, kliknij przycisk `Dalej`{.action}, sprawdź dane, które się wyświetlają, a następnie kliknij `Potwierdź`{.action}, aby rozpocząć konfigurację konta.

> [!primary]
>
> Wykonaj czynności tego etapu tyle razy, ile to konieczne, w zależności od liczby kont, które posiadasz. Możesz zamówić nowe konta, klikając przycisk `Zamówienie kont`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### Etap 5: korzystanie z kont e-mail

Po skonfigurowaniu Twoich kont możesz zacząć ich używać. W tym celu możesz użyć udostępnionej przez OVHcloud aplikacji online (*webapp*). Aplikacja dostępna jest pod adresem [webmail](https://www.ovh.pl/mail/){.external}. Zaloguj się, wprowadzając dane identyfikacyjne dla Twojego adresu e-mail.

Aby skonfigurować Twoje konto e-mail w programie pocztowym lub na urządzeniu typu _smartfon_ lub tablet, [skorzystaj z przewodników dotyczących konfiguracji](../). Poniżej znajdziesz elementy potrzebne do konfiguracji Twojego konta E-mail Pro:

|Typ serwera|Nazwa serwera|Typ zabezpieczenia|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|pro**X**.mail.ovh.net|SSL/TLS|993|
|Serwer poczty wychodzącej|pro**X**.mail.ovh.net|STARTTLS|587|

> [!primary]
>
> Poniżej stosujemy przykładową nazwę serwera, czyli pro**X**.mail.ovh.net. Należy zastąpić „X” cyfrą wskazującą serwer Twojej usługi E-mail Pro.
> 
> Znajdziesz tę cyfrę w Twoim [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, przechodząc do sekcji `Web`{.action}, a następnie do `E-mail Pro`{.action}
>  w lewej kolumnie. Nazwa serwera jest widoczna w ramce **Połączenie** w karcie `Informacje ogólne`{.action}.
> 

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en>.