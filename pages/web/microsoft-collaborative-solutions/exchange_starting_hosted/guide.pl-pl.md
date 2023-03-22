---
title: 'Pierwsze kroki z usługą Hosted Exchange'
slug: exchange_20132016_pierwsza_konfiguracja_uslugi
excerpt: 'Rozpocznij pracę z usługą Hosted Exchange'
section: 'Pierwsze kroki z Exchange'
order: 01
updated: 2023-03-06
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

<style>
.w-640 {
  max-width:640px !important;
}
</style>

**Ostatnia aktualizacja dnia 2023-03-06**

## Wprowadzenie

Usługa Hosted Exchange pozwala na korzystanie z profesjonalnej poczty elektronicznej ułatwiającej pracę zespołową dzięki funkcjom, takim jak synchronizacja kalendarza i kontaktów.

**Dowiedz się, jak rozpocząć korzystanie z usługi  Hosted Exchange.**

## Wymagania początkowe

- Wykupienie usługi [Hosted Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/).
- Otrzymanie wiadomość e-mail z potwierdzeniem, że usługa Hosted Exchange została zainstalowana.
- Zarejestrowana domena.
- Dostęp [do Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

### Dostęp do zarządzania usługą

Po utworzeniu i udostępnieniu usługi Hosted Exchange, można nią zarządzać poprzez Panel [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

W tym celu zaloguj się do Panelu klienta, kliknij `Microsoft`{.action}, a następnie `Exchange`{.action}. W kolejnym kroku kliknij wybraną nazwę usługi  Hosted Exchange.

> [!primary]
>
> Nazwa usługi Hosted Exchange w Panelu klienta OVHcloud zaczyna się od **hosted-**, następnie zawiera część Twojego identyfikatora klienta i kończy się cyfrą (1 dla pierwszej zainstalowanej usługi Hosted Exchange, 2 dla drugiej, etc.).
>

### Wykonaj pierwszą konfigurację usługi

Ponieważ nigdy wcześniej nie korzystałeś z usługi, będziesz musiał przeprowadzić jej pierwszą konfigurację. Po zakończeniu konfiguracji będziesz mógł korzystać z nowych kont e-mail Exchange.

Kiedy po raz pierwszy zalogujesz się do interfejsu zarządzania usługą Hosted Exchange, wyświetli się asystent konfiguracji. Kliknij `Rozpocznij`{.action}.

Asystent konfiguracji umożliwia przeprowadzenie kilku działań. W zależności od sytuacji:

#### Wybór domeny

Wybierz jedną z Twoich domen z listy lub zaznacz kratkę `Moja domena nie figuruje na poniższej` liście, aby wprowadzić nazwę domeny, która nie jest zarządzana w Twoim Panelu klienta, **ale którą możesz skonfigurować**.

![email](images/exchange-wizard01.png){.thumbnail}

#### Czy zamierzasz korzystać wyłącznie z oferty Exchange OVH z tą domeną?

Pytanie "Czy **zamierzasz korzystać z domeny wyłącznie w ramach usługi Exchange OVH?** "określi typ konfiguracji Twojej domeny. 

- Jeśli korzystasz z oferty Exchange samodzielnie lub z innych ofert **e-mail OVHcloud**, konfiguracja może zostać przeprowadzona automatycznie lub ręcznie, wyłącznie za pomocą serwerów e-mail OVHcloud.
- Jeśli korzystasz z Twojej usługi Exchange jako uzupełnienie **zewnętrznej usługi e-mail o ofertę e-mail OVHcloud**, zostaniesz poproszony o podanie, pod pozycją `Serwer przekazujący (SMTP)`, adresu URL serwera, na który ma zostać wysłana Twoja zewnętrzna usługa e-mail.

![email](images/exchange-wizard02.png){.thumbnail}

#### Jak chcesz skonfigurować strefę DNS?

- **Automatyczna** konfiguracja: Wpisana nazwa domeny zostanie automatycznie skonfigurowana na poziomie strefy DNS, jeśli jest ona zarządzana przez OVHcloud na tym samym koncie klienta, co Twoja usługa Exchange.
- **Ręczna** konfiguracja: Nazwa domeny nie jest zarządzana w tym samym panelu klienta, co Twoja platforma. Jest ona zarządzana przez innego operatora domeny lub chcesz samodzielnie przeprowadzić konfigurację.<br> Będziesz mógł odnaleźć wartości, które należy wpisać na końcu procesu konfiguracji lub w sekcji `Powiązane domeny`{.action} Twojej platformy.

![email](images/exchange-wizard03.png){.thumbnail}

#### **Konfiguracja kont Exchange**

Nadaj nazwy Twoich adresom e-mail Exchange i dodaj informacje uzupełniające.

![email](images/exchange-wizard04.png){.thumbnail}

#### **Szczególny przypadek**

- Jeśli skonfigurujesz Twoją platformę Exchange z nazwą domeny, która nie jest zarządzana w tym samym panelu klienta co platforma, lub u innego operatora domeny, otrzymasz następujące okno:<br>
![email](images/exchange-wizard05.png){.thumbnail .w-640}<br>
W tym oknie zostaniesz poproszony o dodanie **pola CNAME** w strefie DNS domeny. Celem tego wpisu jest sprawdzenie, czy zarządzasz tą domeną.<br>

> [!warning]
> Bez zatwierdzenia za pomocą pola CNAME nie można korzystać z platformy za pomocą tej nazwy domeny.

- Jeśli skonfigurujesz Twoją platformę Exchange z nazwą domeny, która nie jest zarządzana w tym samym panelu klienta co platforma, niezależnie od tego, czy jest ona zarządzana przez innego operatora domeny, czy też wybrałeś ręczną konfigurację Twojej domeny, wyświetli się następujące okno:<br>
![email](images/exchange-wizard06.png){.thumbnail .w-640}<br>
W tej sekcji znajdziesz wartości, które należy wprowadzić w strefie DNS. **Pola MX** odpowiadają odbieraniu e-maili. **Pole SRV** odpowiada automatycznej konfiguracji Twoich kont e-mail.

Szczegóły konfiguracji Twojej strefy DNS dotyczące usługi e-mail znajdują się na stronie "[Dodaj pole MX do konfiguracji domeny](https://docs.ovh.com/pl/domains/hosting_www_konfiguracja_serwerow_mx_w_strefie_dns_ovh/)".

### Dodaj dodatkowe domeny (opcjonalnie)

Po zakończeniu pierwszej konfiguracji Twojej domeny możesz również, za pomocą asystenta, skonfigurować dodatkowe domeny, jeśli tego jeszcze nie zrobiłeś.

> [!warning]
>
> Wszystkie konta e-mail utworzone w ramach Twojej usługi Exchange będą widoczne w książce adresowej tych usług, również te, które mają inną nazwę domeny. Aby wyłączyć ten sposób wyświetlania kont w domenach, musisz zamówić nową usługę Hosted Exchange dla wybranych domen.
>

Aby dodać nową domenę, wybierz odpowiednią usługę Hosted Exchange w Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i kliknij zakładkę `Powiązane domeny`{.action}. W tabeli wyświetlone są nazwy domen aktualnie skonfigurowanych w Twojej usłudze lub których konfiguracja trwa. Aby dodać nowe domeny, kliknij przycisk `Dodaj domenę`{.action}, następnie postępuj zgodnie z kolejnymi poleceniami.

Więcej informacji znajdziesz w dokumentacji [Dodawanie domeny do usługi Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/dodanie-domeny-exchange/).

> [!primary]
>
> Jeśli któraś z domen wymaga wykonania jakiegoś szczególnego działania związanego z jej konfiguracją, w kolumnie `Diagnostyka`{.action} w tabeli zobaczysz czerwony przycisk. Po kliknięciu w czerwony przycisk wyświetlą się modyfikacje, jakie należy przeprowadzić. Jeśli domena nie używa konfiguracji OVHcloud (serwery DNS OVH), wprowadź zmiany w interfejsie do zarządzania konfiguracją Twojej domeny. 
>

![Dodanie domeny](images/first-steps-hosted-exchange-add-domain.png)

### Konfiguracja dodatkowych kont Exchange (opcjonalnie)

Możesz skonfigurować dodatkowe konta, jeśli chcesz i nie zrobiłeś tego jeszcze za pomocą asystenta.

W tym celu kliknij wybraną usługę Hosted Exchange w Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), a następnie zakładkę `Konta e-mail`{.action}. W tabeli wyświetlone są nazwy kont aktualnie skonfigurowanych w Twojej usłudze lub które oczekują na konfigurację.

Konta oczekujące na konfigurację wyświetlane są w tabeli w postaci “*@configureme.me*”. Aby przeprowadzić konfigurację kont, kliknij w ikonę ołówka, następnie postępuj zgodnie z poleceniami.

> [!primary]
>
> Powtórz ten etap tyle razy, ile będzie to konieczne, w zależności od liczby posiadanych kont. Możesz zamówić nowe konta, klikając przycisk `Operacje`{.action}, a następnie `Zamów konta`{.action}.
>

![Dodanie konta](images/first-steps-hosted-exchange-add-account.png)

### Korzystanie z kont e-mail

Po skonfigurowaniu Twoich kont możesz zacząć ich używać. W tym celu OVHcloud udostępnia webmail **Outlook Web Application** (OWA). Znajdziesz go pod linkiem <https://www.ovhcloud.com/pl/mail/>. Aby się zalogować, wpisz dane identyfikacyjne przypisane do Twojego konta e-mail. Jeśli potrzebujesz pomocy w zakresie użytkowania OWA, skorzystaj z naszej dokumentacji dostępnej pod linkiem: <https://docs.ovh.com/pl/microsoft-collaborative-solutions/>.

Jeśli chcesz skonfigurować Twoje konto e-mail na smartfonie, tablecie lub programie pocztowym, skorzystaj z naszej dokumentacji dostępnej tutaj: <https://docs.ovh.com/pl/microsoft-collaborative-solutions/>. Abyś mógł korzystać z konta Exchange w sposób optymalny, upewnij się, czy jest ono kompatybilne z Twoim programem pocztowym.

OVHcloud oferuje w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) licencje Outlook w opcji z kontem e-mail Exchange.

Aby zamówić licencję, wejdź na stronę "[Uzyskaj licencję Outlook dla usługi Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2013_przewodnik_dotyczacy_licencji_outlook_exchange_2013/)".

Licencje Office 365 można również uzyskać na stronie <https://www.ovhcloud.com/pl/collaborative-tools/microsoft-365/>. Zalecamy skorzystanie z jednego z tych rozwiązań, jeśli chcesz używać programu pocztowego Outlook lub innych programów Office.

> [!primary]
>
> Exchange pozwala na pełną synchronizację ustawień (filtrów, podpisów, katalogów, etc.) niezależnie od tego, czy używasz aplikacji webowej czy kompatybilnego programu pocztowego.
> Jeśli korzystasz z usługi Exchange na trzech urządzeniach i używasz różnych interfejsów logowania (webmail, program pocztowy lub klient), wszystkie Twoje wiadomości będą dostępne w tym samym czasie.
>

### Konfiguracja funkcji do pracy zespołowej (opcjonalnie)

Po skonfigurowaniu i uruchomieniu usługi Hosted Exchange możesz wprowadzić w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) funkcje pracy zespołowej. Funkcje te umożliwiają między innymi tworzenie zasobów (sale spotkań, sprzęt, etc.) czy grup.

Aby aktywować te różne funkcje, wybierz odpowiednią usługę Hosted Exchange w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), następnie wybierz jedną z zakładek, które pozwolą Ci przeprowadzić tę operację.

Jeśli potrzebujesz pomocy odnośnie którejś z funkcji, skorzystaj z naszej dokumentacji dostępnej tutaj: <https://docs.ovh.com/pl/microsoft-collaborative-solutions/>.

## Sprawdź również

[Utwórz grupę kontaktów](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_20132016_korzystanie_z_grup_wewnetrzne_grupy_dyskusyjne/)

[Tworzenie i korzystanie z konta współdzielonego](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange-korzystanie-z-kont-wsp%C3%B3%C5%82dzielonych/)

[Tworzenie i korzystanie z kont zasobów](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_20132016_korzystanie_z_kont_zasobow/)

[Delegowanie uprawnień do konta e-mail](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2013_przyznanie_uprawnien_full_access/)

[Współdzielenie katalogu w interfejsie OWA](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2016_wspoldzielenie_katalogu_poprzez_webmail_owa/)

[Zarządzanie płatnościami za Twoje konta Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/zarzadzanie-fakturowanie-exchange/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>