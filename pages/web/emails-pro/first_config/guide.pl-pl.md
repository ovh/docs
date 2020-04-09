---
title: 'Konfiguracja konta E-mail Pro'
slug: pierwsza-konfiguracja-email-pro
excerpt: 'Dowiedz się, jak skonfigurować konto E-mail Pro'
section: 'Informacje ogólne'
---

**Ostatnia aktualizacja z dnia 09-04-2020**

## Wprowadzenie

Właśnie zakupiłeś usługę E-mail Pro.  Umożliwia ona korzystanie z profesjonalnych kont e-mail w najlepszej cenie pozwalającej na prowadzenie bieżącej działalności lub rozpoczęcie nowej.

**Dowiedz się, jak przeprowadzić konfigurację usługi E-mail Pro.**

## Wymagania początkowe

- Wykupienie usługi [E-mail Pro](https://www.ovh.pl/emaile/email-pro/){.external}
- Otrzymanie wiadomości e-mail z potwierdzeniem, że usługa E-mail Pro została zainstalowana
- Zarejestrowana domena.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}

## W praktyce

### Etap 1: logowanie do usługi E-mail Pro

Po utworzeniu i udostępnieniu usługi E-mail Pro, można nią zarządzać poprzez [Panel klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Zaloguj się do `Panelu klienta`{.action}, kliknij E-mail Pro na pasku usług po lewej stronie, następnie wybierz odpowiednią usługę.

> [!primary]
>
> Nazwa usługi E-mail Pro w Panelu klienta zaczyna się od *emailpro-*, następnie zawiera część Twojego identyfikatora klienta i kończy się cyfrą (1 dla pierwszej zainstalowanej usługi E-mail Pro, 2 dla drugiej, etc.).
>

### Etap 2: dodanie domeny

Jeśli właśnie zamówiłeś usługę E-mail Pro, automatycznie wyświetli się okno, w którym zostaniesz poproszony o `Dodanie domeny`{.action}. Jeśli okno się nie wyświetla, przejdź do zakładki `Powiązane domeny`{.action}, następnie kliknij przycisk `Dodaj domenę`{.action}.

Masz do wyboru następujące czynności:

- **wybierz domenę z listy**: wyświetlają się jedynie domeny skonfigurowane w OVHcloud i którymi zarządzasz w koncie klienta;
- **wpisz domenę, która nie jest zarządzana na Twoim koncie OVHcloud**: aby usługa E-mail Pro działała poprawnie, musisz mieć możliwość modyfikacji konfiguracji domeny (jej strefy DNS).

Po wybraniu opcji kliknij `Dalej`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

Okno wyświetla teraz informacje dotyczące konfiguracji trybów.

- **Jeśli podałeś nazwę domeny nieobsługiwanej przez OVHcloud**: zostanie domyślnie skonfigurowany tryb nieautorytatywny.
- **Jeśli wybrałeś z listy nazwę domeny obsługiwanej przez OVHcloud**: wybierz jeden z trybów.

|Tryb|Opis|
|---|---|
|Autorytatywny|Odpowiedni, jeśli do obsługi poczty w Twojej domenie używasz jedynie usługi E-mail Pro. Nie pozwala na korzystanie z innego rozwiązania poczty elektronicznej w połączeniu z usługą E-mail Pro.|
|Nieautorytatywny|Odpowiedni, jeśli do obsługi Twojej domeny używasz kont E-mail Pro oraz jednocześnie innego rozwiązania poczty elektronicznej.| 

> [!primary]
>
> Wybór trybu nie jest ostateczny i możesz zmienić go później w Panelu klienta.
>

Kliknij przycisk `Dalej`{.action}, aby kontynuować proces dodawania domeny.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Jeśli wybrałeś z listy nazwę domeny obsługiwaną przez OVHcloud**, jej konfiguracja może zostać przeprowadzona automatycznie. W celu przeprowadzenia automatycznej konfiguracji zaznacz odpowiednie pola i kliknij `Dalej`{.action}, aby kontynuować proces dodawania domeny.

**Jeśli podałeś nazwę domeny nieobsługiwanej przez OVHcloud**, konfiguracja powinna zostać przeprowadzona na kolejnym etapie.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

Przed zakończeniem konfiguracji sprawdź wyświetlające się informacje, następnie kliknij przycisk `Zatwierdź`{.action}, aby zakończyć proces dodawania domeny.

### Etap 3: konfiguracja nazwy domeny

Po dodaniu nazwy domeny jako domeny powiązanej sprawdź jej ustawienia, korzystając z wyświetlającej się tabeli.

W kolumnie `Diagnostyka`{.action} możesz sprawdzić konfigurację DNS domeny. Jeśli parametry powinny zostać zmodyfikowane, wyświetli się czerwony przycisk.

- **Jeśli podczas dodawania domeny wybrałeś automatyczną konfigurację**: wprowadzone ustawienia mogą wyświetlić się w Panelu klienta po kilku godzinach;

- **Jeśli wprowadziłeś nazwę domeny nieobsługiwanej przez OVHcloud**: kliknij czerwony przycisk, aby wyświetlić listę modyfikacji do wprowadzania. Jeśli chcesz utworzyć pole CNAME, skorzystaj z naszego przewodnika [Tworzenie pola CNAME po dodaniu przypisanej domeny](../../microsoft-collaborative-solutions/exchange_20132016_dodanie_pola_cname/). Jeśli chcesz dodać pole MX, skorzystaj z naszego przewodnika [Dodanie rekordu MX w konfiguracji domeny](../../domains/hosting_www_konfiguracja_serwerow_mx_w_strefie_dns_ovh/). Jeśli właśnie wprowadziłeś zmiany, mogą się one wyświetlić się w Panelu klienta po kilku godzinach.

![emailpro](images/first_config_email_pro_configure_domain.png){.thumbnail}

### Etap 4: konfiguracja i korzystanie z kont E-mail Pro

Skonfiguruj konta e-mail w zakładce `Konta e-mail`{.action}. Konta, które zamówiłeś wyświetlają się w tabeli w postaci “*@configureme.me*”.

Aby przeprowadzić konfigurację kont, kliknij ikonę ołówka.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Teraz uzupełnij kolejne informacje, o które zostaniesz poproszony.

|Nazwa|Opis |
|---|---|
|Konto e-mail|Wprowadź nazwę, którą wybrałeś dla Twojego konta e-mail (np. Twoje imie.nazwisko) i wybierz z listy odpowiednią domenę.|
|Imię|Wprowadź imię.|
|Nazwisko|Wprowadź nazwisko.|
|Nazwa, która będzie się wyświetlać.|Wpisz nazwę nadawcy, która będzie się wyświetlać podczas wysyłki wiadomości e-mail przy użyciu tego konta.|
|Hasło i jego potwierdzenie|Wpisz hasło i je potwierdź.| 

Po wprowadzeniu informacji, kliknij przycisk `Dalej`{.action}, sprawdź dane, które się wyświetlają, następnie kliknij `Potwierdź`{.action}, aby rozpocząć konfigurację konta.

> [!primary]
>
> Wykonaj czynności tego etapu tyle razy, ile to konieczne, w zależności od liczby kont, które posiadasz. Możesz zamówić nowe konta, klikając przycisk `Zamówienie kont`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### Etap 5: korzystanie z kont e-mail

Po skonfigurowaniu Twoich kont możesz zacząć ich używać. W tym celu możesz użyć udostępnionej przez OVHcloud aplikacji online (*webapp*). Aplikacja dostępna jest pod adresem [https://www.ovh.pl/mail/](https://www.ovh.pl/mail/){.external}. Zaloguj się, wprowadzając dane identyfikacyjne przypisane do Twojego konta e-mail utworzonego w OVHcloud.

Jeśli chcesz skonfigurować Twoje konto e-mail w programie pocztowym lub na urządzeniu typu _smartfon_ lub tablet, [skorzystaj z przewodników dotyczących konfiguracji](../). Poniżej znajdziesz elementy potrzebne do konfiguracji Twojego konta E-mail Pro:

|Typ serwera|Nazwa serwera|Typ zabezpieczenia|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|pro**X**.mail.ovh.net|SSL/TLS|993|
|Serwer poczty wychodzącej|pro**X**.mail.ovh.net|STARTTLS|587|

> [!primary]
>
> W przewodniku używamy oznaczenia serwera: pro**X**.mail.ovh.net. Zastąp “X” cyfrą oznaczającą serwer powiązany z Twoją usługą E-mail Pro.
> 
> Odszukaj cyfrę w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, w sekcji `Web`{.action} =>  `E-mail Pro`{.action} => w kolumnie po lewej stronie. Nazwa serwera jest widoczna w ramce *Logowanie* w zakładce `Informacje ogólne`{.action}.
>

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.