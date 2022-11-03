---
title: 'Pierwsze kroki z usługą Hosted Exchange'
slug: exchange_20132016_pierwsza_konfiguracja_uslugi
excerpt: 'Rozpocznij pracę z usługą Hosted Exchange'
section: 'Konfiguracja usługi Exchange'
order: 1
---

**Ostatnia aktualizacja dnia 2018-01-19**

## Wprowadzenie

Usługa Hosted Exchange pozwala na korzystanie z profesjonalnej poczty elektronicznej ułatwiającej pracę zespołową dzięki funkcjom, takim jak synchronizacja kalendarza i kontaktów.

**Dowiedz się, jak rozpocząć korzystanie z usługi  Hosted Exchange.**

## Wymagania początkowe

- Wykupienie usługi [Hosted Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/){.external}.
- Otrzymanie wiadomość e-mail z potwierdzeniem, że usługa Hosted Exchange została zainstalowana.
- Zarejestrowana domena.
- Dostęp [do Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

### Etap 1: dostęp do panelu zarządzania usługą Exchange

Po utworzeniu i udostępnieniu usługi Hosted Exchange, można nią zarządzać poprzez [Panel klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

W tym celu zaloguj się w Panelu klienta, kliknij `Microsoft`{.action}, a następnie `Exchange`{.action}. W kolejnym kroku kliknij wybraną nazwę usługi  Hosted Exchange.

> [!primary]
>
> Nazwa usługi Hosted Exchange w Panelu klienta zaczyna się od **hosted-**, następnie zawiera część Twojego identyfikatora klienta i kończy się cyfrą (1 dla pierwszej zainstalowanej usługi Hosted Exchange, 2 dla drugiej, etc.).
>

### Etap 2: pierwsza konfiguracja usługi

Ponieważ nigdy wcześniej nie korzystałeś z usługi, będziesz musiał przeprowadzić jej pierwszą konfigurację. Po zakończeniu konfiguracji będziesz mógł korzystać z nowych kont e-mail Exchange.

Kiedy po raz pierwszy zalogujesz się do interfejsu zarządzania usługą Hosted Exchange, wyświetli się asystent konfiguracji. Kliknij `Rozpocznij`{.action}.

Asystent konfiguracji umożliwia przeprowadzenie kilku działań. Niniejsza tabela wskazuje, które etapy tego przewodnika mogą być w Twoim przypadku opcjonalne.

|Operacja|Opis|
|---|---|
|Wybór nazwy domeny|Wybierz nazwę domeny, która będzie używana w Twoich adresach e-mail Exchange. Nazwa ta jest jednym z elementów tworzących Twój adres e-mail (przykład: kontakt@mypersonaldomain.ovh).|
|Konfiguracja nazwy domeny|Wpisana nazwa domeny zostanie skonfigurowana automatycznie, jeśli domena jest zarejestrowana w OVHcloud na tym samym koncie klienta, co Twoja usługa Exchange. W przeciwnym razie będziesz musiał przeprowadzić ręczną konfigurację.|
|Konfiguracja kont Exchange|Nadaj nazwy Twoich adresom e-mail Exchange i dodaj informacje uzupełniające.|
|Migracja danych (jeśli dotyczy)|Jeśli przeprowadzasz migrację Twoich adresów e-mail z jednego z rozwiązań OVHcloud (MX Plan lub E-mail Pro), możesz ją zainicjować za pomocą asystenta. Jeśli używasz programu pocztowego, będziesz musiał również od początku skonfigurować Twoje konta. |

### Etap 3: konfiguracja dodatkowej domeny (opcjonalnie)

Kiedy pierwsza konfiguracja Twojej domeny zostanie zakończona, możesz, skonfigurować również dodatkowe domeny (o ile nie zrobiłeś tego jeszcze przy użyciu asystenta).

> [!warning]
>
> Wszystkie konta e-mail utworzone w ramach Twojej usługi Exchange mogą wyświetlać w katalogu wszystkie adresy e-mail powiązane z usługą Exchange, również te, które mają różne nazwy domen. Aby wyłączyć ten sposób wyświetlania kont w domenach, musisz zamówić nową usługę Hosted Exchange dla wybranych domen.
>

Aby dodać nową domenę, zaznacz wybraną usługę Hosted Exchange w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i kliknij w zakładkę `Przypisane domeny`{.action}. W tabeli wyświetlone są nazwy domen aktualnie skonfigurowanych w Twojej usłudze lub których konfiguracja trwa. Aby dodać nowe domeny, kliknij przycisk `Dodaj domenę`{.action}, następnie postępuj zgodnie z kolejnymi poleceniami.

Więcej informacji znajdziesz w dokumentacji [Dodawanie domeny do usługi Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/dodanie-domeny-exchange/){.external}.

> [!primary]
>
> Jeśli któraś z domen wymaga wykonania jakiegoś szczególnego działania związanego z jej konfiguracją, w kolumnie `Diagnostyka`{.action} w tabeli zobaczysz czerwony przycisk. Po kliknięciu w czerwony przycisk wyświetlą się modyfikacje, jakie należy przeprowadzić. Jeśli domena nie korzysta z serwerów DNS OVHcloud, powinieneś przeprowadzić modyfikacje w interfejsie do konfiguracji Twojej domeny. 
>

![Dodanie domeny](images/first-steps-hosted-exchange-add-domain.png){.external}

### Etap 4: konfiguracja dodatkowych kont Exchange (opcjonalnie)

Możesz skonfigurować dodatkowe domeny (o ile nie zrobiłeś tego jeszcze przy użyciu asystenta).

Aby to uczynić, kliknij w wybraną usługę Hosted Exchange w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, następnie w zakładkę `Konta e-mail`{.action}. W tabeli wyświetlone są nazwy kont aktualnie skonfigurowanych w Twojej usłudze lub które oczekują na konfigurację.

Konta oczekujące na konfigurację wyświetlane są w tabeli w postaci “*@configureme.me*”. Aby przeprowadzić konfigurację kont, kliknij w ikonę ołówka, następnie postępuj zgodnie z poleceniami.

> [!primary]
>
> Powtórz ten krok w razie potrzeby, zależnie od liczby posiadanych kont. Możesz zamówić nowe za pomocą przycisku `Akcje`{.action} i następnie kliknij przycisk `Zamów konta`{.action}.
>

![Dodanie konta](images/first-steps-hosted-exchange-add-account.png){.external}

### Etap 5: korzystanie z kont e-mail

Po skonfigurowaniu Twoich kont możesz zacząć ich używać. OVHcloud udostępnia w tym celu interfejs webmail **Outlook Web Application** (OWA). Znajdziesz go pod linkiem [https://www.ovh.pl/mail/](https://www.ovh.com/fr/mail/){.external}. Aby się zalogować, wpisz dane identyfikacyjne przypisane do Twojego konta e-mail. Jeśli potrzebujesz pomocy w zakresie użytkowania OWA, skorzystaj z naszej dokumentacji dostępnej pod linkiem: [https://docs.ovh.com/pl/microsoft-collaborative-solutions/](https://docs.ovh.com/pl/microsoft-collaborative-solutions/){.external}.

Jeśli chcesz skonfigurować Twoje konto e-mail na smartfonie, tablecie lub programie pocztowym, skorzystaj z naszej dokumentacji dostępnej tutaj: [https://docs.ovh.com/pl/microsoft-collaborative-solutions/](https://docs.ovh.com/pl/microsoft-collaborative-solutions/){.external}. Abyś mógł korzystać z konta Exchange w sposób optymalny, upewnij się, czy jest ono kompatybilne z Twoim programem pocztowym.

OVHcloud oferuje licencje Outlook w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, a ponadto licencje Office 365 na stronie [https://www.ovhcloud.com/pl/collaborative-tools/microsoft-365/](https://www.ovhcloud.com/pl/collaborative-tools/microsoft-365/){.external}. Zalecamy skorzystanie z jednego z tych rozwiązań, jeśli chcesz używać programu pocztowego Outlook lub innych programów Office.

> [!primary]
>
> Exchange pozwala na pełną synchronizację ustawień (filtrów, podpisów, katalogów, etc.) niezależnie od tego, czy używasz aplikacji webowej czy kompatybilnego programu pocztowego.
> Jeśli korzystasz z usługi Exchange na trzech urządzeniach i używasz różnych interfejsów logowania (webmail, program pocztowy lub klient), wszystkie Twoje wiadomości będą dostępne w tym samym czasie.
>

### Etap 6:  konfiguracja ustawień funkcji pracy zespołowej (opcjonalnie)

Po skonfigurowaniu i uruchomieniu usługi Hosted Exchange możesz wprowadzić ustawienia funkcji pracy zespołowej w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Funkcje te umożliwiają między innymi tworzenie zasobów (sale spotkań, sprzęt, etc.) czy grup.

W celu aktywowania dodatkowych funkcji zaznacz wybraną usługę Hosted Exchange w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, następnie wybierz ostatnią zakładkę zawierającą opcje dodatkowe, które pozwolą na utworzenie zasobów.

Jeśli potrzebujesz pomocy odnośnie którejś z funkcji, skorzystaj z naszej dokumentacji dostępnej tutaj: [https://docs.ovh.com/pl/microsoft-collaborative-solutions/](https://docs.ovh.com/pl/microsoft-collaborative-solutions/){.external}.

![Funkcje pracy zespołowej](images/first-steps-hosted-exchange-intro-to-functions.png){.external}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com](https://community.ovh.com){.external}