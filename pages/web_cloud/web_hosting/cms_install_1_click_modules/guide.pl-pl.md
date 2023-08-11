---
title: "Instalacja strony WWW za pomocą 'modułu za 1 kliknięciem' (CMS)"
excerpt: "Dowiedz się, jak zainstalować Twoją stronę WWW za pomocą 'modułów za 1 kliknięciem'"
updated: 2023-03-30
---

**Ostatnia aktualizacja dnia 30-03-2023**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie 

Moduły za pomocą 1 kliknięcia umożliwiają łatwą i szybką instalację strony WWW (bez konieczności posiadania wiedzy technicznej). "Moduły za 1 kliknięciem" to w rzeczywistości **C**ontent **M**anagement **S**ystem **(CMS)**. Dzięki temu OVHcloud proponuje zainstalowanie najpopularniejszych systemów CMS: *WordPress*, *Joomla!*, *Drupal* i *PrestaShop*.

**Dowiedz się, jak zainstalować stronę WWW za pomocą modułu OVHcloud za pomocą 1 kliknięcia.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZrYmmPbMl4I?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/) zawierającej co najmniej jedną bazę danych..
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Korzystanie z [kompatybilnej wersji PHP](/pages/web_cloud/web_hosting/php_configure_php_on_your_web_hosting_2014) na Twoim hostingu.
- Posiadanie [poprawnie skonfigurowany plik .ovhconfig](/pages/web_cloud/web_hosting/ovhconfig_configuration)
- Katalog (katalog główny), w którym zostanie zainstalowany "moduł za 1 kliknięciem", musi być pusty lub w chwili obecnej nie istnieje.
- Domena (wraz z subdomeną, jeśli jest potrzebna), która zostanie użyta na Twojej stronie WWW powinna zostać zadeklarowana jako [MultiSite](/pages/web_cloud/web_hosting/multisites_configure_multisite) na Twoim hostingu OVHcloud.

## W praktyce

### Etap 1 - prawidłowy wybór CMS

CMS pozwala na zaprojektowanie strony www za pomocą łatwego w użyciu interfejsu. Istnieje kilka typów systemów CMS, niektóre z nich są z góry zaprojektowane do budowy sklepu internetowego, inne do tworzenia stron WWW, bloga, etc. Możesz również korzystać z gotowej do użycia struktury strony (szablon, rozszerzenia, teksty itd.).

Spośród wszystkich systemów CMS, OVHcloud oferuje 4 modułów za pomocą 1 kliknięcia. 

Używając tego rozwiązania powinieneś wybrać spośród 4 systemów CMS wymienionych powyżej. Jeśli już dokonałeś wyboru, przejdź do kolejnych etapów niniejszego przewodnika. Jeśli tak się nie stanie, skorzystaj z naszych [porównań CMS](https://www.ovhcloud.com/pl/web-hosting/uc-cms-comparison/), aby dokonać wyboru.

Jeśli chcesz zainstalować niedostępny CMS za pomocą naszych "modułów za 1 kliknięciem", możesz zainstalować go ręcznie na Twoim hostingu. Pod warunkiem, że ten CMS jest kompatybilny z naszą ofertą [hostingiem www OVHcloud](https://www.ovhcloud.com/pl/web-hosting/).

![Dostępne w OVHcloud CMS](images/CMS_logo.png){.thumbnail}

### Etap 2 - dostęp do zarządzania modułami za pomocą 1 kliknięcia

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i wybierz `Web Cloud`{.action}. Kliknij przycisk `Hosting`{.action}, wybierz ofertę hostingu, na której chcesz zainstalować "moduł za 1 kliknięciem", następnie kliknij zakładkę `Moduły CMS`{.action}.

Na stronie znajdziesz ewentualne "moduły za 1 kliknięciem" już zainstalowane. Możesz zarządzać Twoimi "modułami za 1 kliknięciem" i instalować nowe.

![Dostęp do sekcji Moduły OVHcloud](images/access_to_the_1_click_modules_section.png){.thumbnail}

### Etap 3 - dodaj "moduł za 1 kliknięciem"

W zakładce `Moduły CMS`{.action} Twojego hostingu kliknij przycisk `Dodaj moduł CMS`{.action}, aby dodać nowy "moduł za 1 kliknięciem".

W oknie, które się wyświetla wybierz odpowiedni CMS, a następnie wybierz domenę, którą chcesz zainstalować na Twojej stronie WWW:

![Wybór modułu](images/add_a_module.png){.thumbnail}

Jeśli Twoja domena nie jest na liście, przejdź do zakładki `MultiSite`{.action}, aby ją dodać. Zapoznaj się z naszym przewodnikiem [Jak rozdzielić hosting WWW na kilka stron](/pages/web_cloud/web_hosting/multisites_configure_multisite), jeśli potrzebujesz.

Po poprawnym dodaniu domeny spróbuj ponownie dodać "moduł za 1 kliknięciem".

Po wybraniu CMS wybierz jedną z instalacji **szybka** lub **zaawansowana**:

- Instalacja **szybka** (wybrana domyślnie): OVHcloud przeprowadza instalację CMS-a i przekazuje Ci dane do zarządzania w wiadomości e-mail na adres e-mail do kontaktu OVHcloud. Jest to najprostszy i najszybszy sposób instalacji modułu za pomocą 1 kliknięcia.
- Instalacja **zaawansowana**: umożliwia personalizację konfiguracji, którą należy zastosować do instalacji CMS-a. Wpisz wszystkie informacje niezbędne do prawidłowego działania CMS: 
    - dane do logowania do bazy danych (serwer, nazwa użytkownika, port, hasło, itp.)
    - ścieżka instalacji na przestrzeni FTP Twojego hostingu
    - język CMS
    - identyfikatory administratora (nazwa administratora, hasło, adres e-mail, itp.)

#### Szybka instalacja modułu za 1 kliknięciem

Wybierz nazwę domeny Twojego CMS, sprawdź katalog docelowy, który pojawi się automatycznie po wybraniu domeny, następnie sprawdź, czy kratka `Instalacja w trybie zaawansowanym`{.action} nie jest zaznaczona. Na koniec kliknij przycisk `Instaluj`{.action}.

> [!warning]
>
> Aby instalacja przebiegła prawidłowo, katalog instalacyjny "modułu za 1 kliknięciem" musi być pusty i musisz mieć co najmniej jedną bazę danych dostępną podczas tworzenia tego modułu na Twoim hostingu.
>
> Szybka instalacja pozwala na utworzenie bazy danych bez konieczności jej tworzenia.
>

![Prosta instalacja modułu](images/choose_installation.png){.thumbnail}

Po zakończeniu instalacji otrzymasz e-mail z danymi do logowania do interfejsu administratora (*back office*) Twojego CMS-a. Zaloguj się do Panelu klienta i personalizuj Twoją stronę WWW.

#### Zaawansowana instalacja modułu za 1 kliknięciem

Aby przeprowadzić tę metodę instalacji, upewnij się, że pole `Instalacja w trybie zaawansowanym`{.action} jest zaznaczone, następnie kliknij przycisk `Dalej`{.action}:

W celu przeprowadzenia tej instalacji upewnij się, że pole wyboru `Instalacja w trybie zaawansowanym`{.action} jest zaznaczone, po czym kliknij przycisk `Dalej`{.action}:

![Instalacja w trybie zaawansowanym](images/advanced_installation.png){.thumbnail}

##### Wybierz bazę danych

Wpisz dane do logowania do bazy danych.

![Baza danych do instalacji zaawansowanej](images/advanced_installation_database.png){.thumbnail}

Istnieje kilka możliwości:

- Baza danych jest już utworzona na Twoim hostingu: wybierz ją z rozwijanego menu `Wybierz bazę danych`{.action} i uzupełnij wymagane informacje.
- Baza danych nie została jeszcze utworzona na Twoim hostingu: [utwórz bazę danych zawartą na hostingu](/pages/web_cloud/web_hosting/sql_create_database), następnie powróć do rozwijanego menu `Wybierz bazę danych`{.action} i uzupełnij wymagane informacje.
- Baza danych jest [utworzona na instancji Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server): w rozwijanym menu `Wybierz bazę danych`{.action}, wybierz opcję `Baza danych poza hostingiem`{.action} i uzupełnij wymagane informacje. Instancja i hosting muszą być hostowane w tym samym centrum danych (datacenter).
- Baza danych jest utworzona na innym hostingu OVHcloud: w rozwijanym menu `Wybierz bazę danych`{.action}, wybierz opcję `Baza danych poza hostingiem`{.action} i uzupełnij wymagane informacje. Baza danych i hosting muszą być hostowane w tym samym centrum danych.

Pozostałe informacje wymagane dla bazy danych są następujące:

- *Adres serwera*: wprowadź nazwę serwera Twojej bazy danych, zawartą w e-mailu instalacyjnym lub w Panelu klienta. 

> [!primary]
> 
> - Nazwa serwera bazy danych zawarta w ofercie hostingu WWW ma zazwyczaj taką formę: `NameOfYourDatabase.mysql.db`. 
>
> - Nazwa serwera bazy danych Cloud Databases zaczyna się od Twojego identyfikatora klienta OVHcloud i ma następującą formę: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` gdzie **"X"** należy zastąpić odniesieniem do Twojej usługi WWW Cloud Databases.
>

- *Nazwa bazy*: nazwa ta została zdefiniowana podczas tworzenia bazy danych w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

- *Port*: systematycznie wpisz numer **3306** (port domyślny) dla bazy danych zawartej w Twoim hostingu. W przypadku bazy danych na instancji Cloud Databases, zapoznaj się z [tym przewodnikiem](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

- *Nazwa użytkownika*: nazwa bazy danych jest identyczna, jeśli korzystasz z bazy danych zawartej w Twoim hostingu.
W przypadku baz danych utworzonych w ramach usługi Web Cloud Databases, zapoznaj się z informacjami podanymi w [tym przewodniku](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

- *Hasło*: otrzymasz e-mail podczas tworzenia bazy danych. Możliwe, że zmieniłeś ją w międzyczasie.

Po uzupełnieniu informacji kliknij przycisk `Dalej`{.action}.

> [!warning]
>
> Jeśli podane informacje są nieprawidłowe, instalacja nie zostanie zakończona. Aby tego uniknąć, zachęcamy najpierw do przetestowania logowania się do bazy danych.
> 
> Dane do logowania do bazy danych zawartej w pakiecie hostingowym znajdziesz w [przewodniku](/pages/web_cloud/web_hosting/sql_create_database).
>
> Dane do logowania do bazy danych utworzonej na instancji Web Cloud Databases znajdują się w [przewodniku](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

##### Konfiguracja modułu

Wprowadź następujące informacje dotyczące konfiguracji modułu:

- *nazwa lub e-mail administratora:* identyfikator, którego będziesz używał do logowania się do interfejsu administracyjnego Twojego CMS-a (Back Office).
- *hasło:* hasło, którego będziesz używał do logowania się do interfejsu administracyjnego Twojego CMS-a.
- *domena:* domena, z którą chcesz zainstalować CMS-a. Jeśli potrzebujesz pomocy, zapoznaj się z naszym przewodnikiem [Jak rozdzielić swój hosting na kilka stron](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- *język:* język instalacji CMS.
- *Ścieżka instalacji:* domena jest wprowadzana automatycznie podczas wyboru domeny. Możesz go uzupełnić, wprowadzając podkatalogi (dla zaawansowanych użytkowników).

Po uzupełnieniu tych informacji kliknij przycisk `Dalej`{.action}:

> [!warning]
>
> Ostateczny katalog podany w określonej ścieżce instalacji musi być obowiązkowo i całkowicie pusty, aby instalacja mogła zostać zakończona.
> 

![Konfiguracja modułu dla instalacji zaawansowanej](images/advanced_installation_configuration.png){.thumbnail}

##### Potwierdź instalację

Sprawdź informacje, które się wyświetlają i kliknij na `Zatwierdź`{.action}, jeśli wszystko jest w porządku:

![Zatwierdzanie instalacji w trybie zaawansowanym](images/advanced_installation_summary.png){.thumbnail}

### Etap 4: spersonalizuj swoją stronę

Instalacja może zająć kilkadziesiąt minut.

Po zakończeniu otrzymasz e-mail z potwierdzeniem poprawnej instalacji CMS-a. W tym e-mailu zostaniesz poproszony o zalogowanie się do interfejsu administracyjnego Twojego CMS-a. W ten sposób będziesz mógł zmienić temat Twojej strony WWW i opublikować jej pierwsze treści.

> [!warning]
>
> Pomoc techniczna OVHcloud nie wiąże się z korzystaniem z CMS-ów. Oferujemy je tylko w trybie instalacji **za 1 kliknięciem**.
>

Jeśli chcesz uzyskać pomoc w zakresie funkcji Twojego CMS-a, skontaktuj się z producentem zainstalowanego CMS-a. Znajdziesz w nim dokumentację dotyczącą Twojego projektu.

|CMS|Oficjalna dokumentacja|
|---|---|
|WordPress|[Pierwsze kroki z CMS WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}|
|PrestaShop|[Jak zacząć z PrestaShop](https://docs.prestashop-project.org/1.7-documentation/getting-started+Started){.external}|
|Joomla!|[Jak zaczać z Joomla!](https://www.joomla.org/about-joomla/getting-started.html){.external}|
|Drupal|[Zrozumieć Drupala](https://www.drupal.org/docs/7/understanding-drupal/overview){.external}|

## Sprawdź również

[Porównanie rozwiązań CMS](https://www.ovhcloud.com/pl/web-hosting/uc-cms-comparison/){.external}

[Jak rozdzielić hosting WWW na wiele stron](/pages/web_cloud/web_hosting/multisites_configure_multisite){.external}

[Zarządzanie bazą danych na hostingu](/pages/web_cloud/web_hosting/sql_create_database){.external}

[Zarządzanie CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

[Odinstaluj CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module#etap-3-usun-modul)

Poznaj ofertę [Cloud Databases](https://www.ovh.pl/cloud/cloud-databases/){.external}

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
