---
title: "Instalacja strony WWW za pomocą 'modułu za 1 kliknięciem' (CMS)"
excerpt: "Dowiedz się, jak zainstalować Twoją stronę WWW za pomocą 'modułów za 1 kliknięciem'"
updated: 2026-05-04
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
</style>

## Wprowadzenie 

Moduły za pomocą 1 kliknięcia umożliwiają łatwą i szybką instalację strony WWW (bez konieczności posiadania wiedzy technicznej). "Moduły za 1 kliknięciem" to w rzeczywistości **C**ontent **M**anagement **S**ystem **(CMS)**. Dzięki temu OVHcloud proponuje zainstalowanie najpopularniejszych systemów CMS: *WordPress*, *Joomla!*, *Drupal* i *PrestaShop*.

**Dowiedz się, jak zainstalować stronę WWW za pomocą modułu OVHcloud za pomocą 1 kliknięcia.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/ZrYmmPbMl4I?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](/links/web/hosting) zawierającej co najmniej jedną bazę danych.
- Użycie najnowszej wersji PHP i kompatybilnego środowiska wykonawczego na Twoim hostingu OVHcloud. Sprawdź stan poszczególnych wersji dostępnych na tej [stronie](https://webhosting-infos.hosting.ovh.net/). W razie potrzeby sprawdź [przewodnik](/pages/web_cloud/web_hosting/configure_your_web_hosting), aby szybko zmienić tę konfigurację.
- Skonfigurowany plik "[.ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)" musi znajdować się w katalogu głównym FTP Twojego hostingu.
- Katalog (katalog główny), w którym zostanie zainstalowany "moduł za 1 kliknięciem", musi być pusty lub w chwili obecnej nie istnieje.
- Domen (z poddomeną, jeśli to konieczne) używany będzie do Twojej strony internetowej i musi zostać zadeklarowany za pomocą karty [Moje strony](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website) na Twojej hostingu OVHcloud.

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

> [!primary]
>
> Jeśli masz trudności z wykonaniem jednego z opisanych poniżej kroków, zapoznaj się z naszą dokumentacją dotyczącą [najczęstszych błędów związanych z "modułami za 1 kliknięciem"](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic). 

### 1 - Prawidłowy wybór CMS

CMS pozwala na zaprojektowanie strony www za pomocą łatwego w użyciu interfejsu. Istnieje kilka typów systemów CMS, niektóre z nich są z góry zaprojektowane do budowy sklepu internetowego, inne do tworzenia stron WWW, bloga, etc. Możesz również korzystać z gotowej do użycia struktury strony (szablon, rozszerzenia, teksty itd.).

Spośród wszystkich systemów CMS, OVHcloud oferuje 4 modułów za pomocą 1 kliknięcia. 

Używając tego rozwiązania powinieneś wybrać spośród 4 systemów CMS wymienionych powyżej. Jeśli już dokonałeś wyboru, przejdź do kolejnych etapów niniejszego przewodnika. Jeśli tak się nie stanie, skorzystaj z naszych [porównań CMS](/links/web/hosting-cms-comparison), aby dokonać wyboru.

Jeśli chcesz zainstalować niedostępny CMS za pomocą naszych "modułów za 1 kliknięciem", możesz zainstalować go ręcznie na Twoim hostingu. Pod warunkiem, że ten CMS jest kompatybilny z naszą ofertą [hostingiem www OVHcloud](/links/web/hosting).

![Dostępne w OVHcloud CMS](/pages/assets/screens/other/cms/cms-logos.png){.thumbnail}

### 2 - Dodaj "moduł za 1 kliknięciem"

Dostępne są dwie metody instalacji:

- Instalacja **szybka** (wybrana domyślnie): OVHcloud przeprowadza instalację CMS-a i przekazuje Ci dane do zarządzania w wiadomości e-mail na adres e-mail do kontaktu OVHcloud. Jest to najprostszy i najszybszy sposób instalacji modułu za pomocą 1 kliknięcia.
- Instalacja **zaawansowana**: umożliwia personalizację konfiguracji, którą należy zastosować do instalacji CMS-a. Wpisz wszystkie informacje niezbędne do prawidłowego działania CMS: 
    - dane do logowania do bazy danych (serwer, nazwa użytkownika, port, hasło, itp.)
    - ścieżka instalacji na przestrzeni FTP Twojego hostingu
    - język CMS
    - identyfikatory administratora (nazwa administratora, hasło, adres e-mail, itp.)

> [!warning]
>
> Aby instalacja przebiegła prawidłowo, katalog instalacyjny "modułu za 1 kliknięciem" musi być pusty i musisz mieć co najmniej jedną bazę danych dostępną podczas tworzenia tego modułu na Twoim hostingu.
>
> W przypadku szybkiej instalacji nie twórz wcześniej bazy danych, robot instalacyjny zajmie się tym.

**Kliknij jedną z 2 metod instalacji, aby wyświetlić zawartość.**

/// details | Szybka instalacja modułu za 1 kliknięciem

Kliknij poniższe zakładki, aby wyświetlić kolejno każdy z **4** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się otworzy, kliknij zakładkę `Moduły CMS`{.action}. Znajdziesz tam ewentualne "moduły za 1 kliknięciem" już zainstalowane. Możesz zarządzać Twoimi "modułami za 1 kliknięciem" i instalować nowe.
>>
>> ![Dostęp do sekcji Moduły OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/tab.png){.thumbnail}
>>
> **Krok 3**
>>
>> W zakładce `Moduły CMS`{.action} Twojego hostingu kliknij przycisk `Dodaj moduł CMS`{.action}.
>>
>> W oknie, które się wyświetla wybierz odpowiedni CMS, a następnie wybierz domenę, którą chcesz zainstalować na Twojej stronie WWW:
>>
>> ![Wybór modułu](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-select-module-and-domain.png){.thumbnail}
>>
>> Jeśli Twój domen nie znajduje się na liście, przejdź do karty `Moje strony`{.action}, aby go dodać. W razie potrzeby zapoznaj się z naszym przewodnikiem "[Jak przypisać nazwę domeny do istniejącej strony internetowej?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
>>
>> > [!primary]
>> >
>> > Sprawdź, tuż pod formularzem pozwalającym na wybranie domeny (lub subdomeny), że `Domyślny katalog instalacyjny to` ten, w którym chcesz zainstalować swój "moduł za 1 kliknięciem".
>> >
>> > Przypominamy, że ten katalog musi być całkowicie pusty.
>> >
>> > W razie potrzeby sprawdź przewodnik "[Jak rozdzielić swój hosting WWW na kilka stron](/pages/web_cloud/web_hosting/multisites_configure_multisite)", aby zmienić katalog docelowy Twojej domeny.
>>
>> Po poprawnym dodaniu domeny spróbuj ponownie dodać "moduł za 1 kliknięciem".
>>
> **Krok 4**
>>
>> Wybierz nazwę domeny Twojego CMS, sprawdź katalog docelowy, który pojawi się automatycznie po wybraniu domeny, następnie sprawdź, czy kratka `Instalacja w trybie zaawansowanym`{.action} nie jest zaznaczona. Na koniec kliknij przycisk `Instaluj`{.action}.
>>
>> ![Prosta instalacja modułu](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-quick-mod-step-1-b.png){.thumbnail}
>>
>> Po zakończeniu instalacji otrzymasz e-mail z danymi do logowania do interfejsu administratora (*back office*) Twojego CMS-a. Zaloguj się do Panelu klienta i personalizuj Twoją stronę WWW.
>>

> [!primary]
>
> Instalacja i odbiór e-maili mogą potrwać do 15 minut od momentu kliknięcia przycisku `Instaluj`{.action} w [Panelu klienta OVHcloud](/links/manager).

///

/// details | Zaawansowana instalacja modułu za 1 kliknięciem

Kliknij poniższe zakładki, aby wyświetlić kolejno każdy z **8** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się otworzy, kliknij zakładkę `Moduły CMS`{.action}. Znajdziesz tam ewentualne "moduły za 1 kliknięciem" już zainstalowane. Możesz zarządzać Twoimi "modułami za 1 kliknięciem" i instalować nowe.
>>
>> ![Dostęp do sekcji Moduły OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/tab.png){.thumbnail}
>>
> **Krok 3**
>>
>> W zakładce `Moduły CMS`{.action} Twojego hostingu kliknij przycisk `Dodaj moduł CMS`{.action}.
>>
>> W oknie, które się wyświetla wybierz odpowiedni CMS, a następnie wybierz domenę, którą chcesz zainstalować na Twojej stronie WWW:
>>
>> ![Wybór modułu](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-select-module-and-domain.png){.thumbnail}
>>
>> Jeśli Twój domen nie znajduje się na liście, przejdź do karty `Moje strony`{.action}, aby go dodać. W razie potrzeby zapoznaj się z naszym przewodnikiem "[Jak przypisać nazwę domeny do istniejącej strony internetowej?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
>>
>> > [!primary]
>> >
>> > Sprawdź, tuż pod formularzem pozwalającym na wybranie domeny (lub subdomeny), że `Domyślny katalog instalacyjny to` ten, w którym chcesz zainstalować swój "moduł za 1 kliknięciem".
>> >
>> > Przypominamy, że ten katalog musi być całkowicie pusty.
>> >
>> > W razie potrzeby sprawdź przewodnik "[Jak rozdzielić swój hosting WWW na kilka stron](/pages/web_cloud/web_hosting/multisites_configure_multisite)", aby zmienić katalog docelowy Twojej domeny.
>>
>> Po poprawnym dodaniu domeny spróbuj ponownie dodać "moduł za 1 kliknięciem".
>>
> **Krok 4**
>>
>> Upewnij się, że pole `Instalacja w trybie zaawansowanym`{.action} jest zaznaczone, następnie kliknij przycisk `Dalej`{.action}.
>>
>> ![Instalacja w trybie zaawansowanym](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-1.png){.thumbnail}
>>
> **Krok 5**
>>
>> Wpisz dane do logowania do bazy danych.
>>
>> > [!warning]
>> >
>> > Jeśli podane informacje są nieprawidłowe, instalacja nie zostanie zakończona. Aby tego uniknąć, zachęcamy najpierw do przetestowania logowania się do bazy danych.
>> >
>> > Dane do logowania do bazy danych zawartej w pakiecie hostingowym znajdziesz w naszym przewodniku "[Tworzenie bazy danych na hostingu](/pages/web_cloud/web_hosting/sql_create_database)".
>> >
>> > Dane do logowania do bazy danych utworzonej na instancji Web Cloud Databases znajdują się w naszym przewodniku "[Pierwsze kroki z usługą Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".
>>
>> ![Baza danych do instalacji zaawansowanej](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-3.png){.thumbnail}
>>
>> Istnieje kilka możliwości:
>>
>> - Baza danych jest już utworzona na Twoim hostingu: wybierz ją z rozwijanego menu `Wybierz bazę danych`{.action} i uzupełnij wymagane informacje.
>> - Baza danych nie została jeszcze utworzona na Twoim hostingu: [utwórz bazę danych zawartą na hostingu](/pages/web_cloud/web_hosting/sql_create_database), następnie powróć do rozwijanego menu `Wybierz bazę danych`{.action} i uzupełnij wymagane informacje.
>> - Baza danych jest [utworzona na instancji Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server): w rozwijanym menu `Wybierz bazę danych`{.action}, wybierz opcję `Baza danych poza hostingiem`{.action} i uzupełnij wymagane informacje. Instancja i hosting muszą być hostowane w tym samym centrum danych (datacenter).
>> - Baza danych jest utworzona na innym hostingu OVHcloud: w rozwijanym menu `Wybierz bazę danych`{.action}, wybierz opcję `Baza danych poza hostingiem`{.action} i uzupełnij wymagane informacje. Baza danych i hosting muszą być hostowane w tym samym centrum danych.
>>
> **Krok 6**
>>
>> Wprowadź pozostałe informacje wymagane dla bazy danych:
>>
>> - *Adres serwera*: wprowadź nazwę serwera Twojej bazy danych, zawartą w e-mailu instalacyjnym lub w Panelu klienta.
>>
>> > [!primary]
>> >
>> > - Nazwa serwera bazy danych zawarta w ofercie hostingu WWW ma zazwyczaj taką formę: `NameOfYourDatabase.mysql.db`.
>> >
>> > - Nazwa serwera bazy danych Cloud Databases zaczyna się od Twojego identyfikatora klienta OVHcloud i ma następującą formę: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` gdzie **"X"** należy zastąpić odniesieniem do Twojej usługi WWW Cloud Databases.
>> >
>>
>> - *Nazwa bazy*: nazwa ta została zdefiniowana podczas tworzenia bazy danych w [Panelu klienta OVHcloud](/links/manager).
>>
>> - *Port*: systematycznie wpisz numer **3306** (port domyślny) dla bazy danych zawartej w Twoim hostingu. W przypadku bazy danych na instancji Cloud Databases, zapoznaj się z naszym przewodnikiem "[Pierwsze kroki z usługą Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".
>>
>> - *Nazwa użytkownika*: nazwa bazy danych jest identyczna, jeśli korzystasz z bazy danych zawartej w Twoim hostingu. W przypadku baz danych utworzonych w ramach usługi Web Cloud Databases, zapoznaj się z informacjami podanymi w naszym przewodniku "[Pierwsze kroki z usługą Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".
>>
>> - *Hasło*: otrzymasz e-mail podczas tworzenia bazy danych. Możliwe, że zmieniłeś ją w międzyczasie.
>>
>> Po uzupełnieniu informacji kliknij przycisk `Dalej`{.action}.
>>
> **Krok 7**
>>
>> Wprowadź następujące informacje dotyczące konfiguracji modułu:
>>
>> - *nazwa lub e-mail administratora*: identyfikator, którego będziesz używał do logowania się do interfejsu administracyjnego Twojego CMS-a (Back Office).
>> - *hasło*: hasło, którego będziesz używał do logowania się do interfejsu administracyjnego Twojego CMS-a.
>> - *domena*: domena, z którą chcesz zainstalować CMS-a. Jeśli potrzebujesz pomocy, zapoznaj się z naszym przewodnikiem "[Jak przypisać nazwę domeny do istniejącej strony internetowej?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
>> - *język*: język instalacji CMS.
>> - *Ścieżka instalacji*: domena jest wprowadzana automatycznie podczas wyboru domeny. Możesz go uzupełnić, wprowadzając podkatalogi (dla zaawansowanych użytkowników).
>>
>> > [!primary]
>> >
>> > Sprawdź, czy w formularzu `Ścieżka instalacji` wstępnie wypełniony katalog jest katalogiem, w którym chcesz zainstalować "moduł za 1 kliknięciem" z nazwą domeny.
>> >
>> > Przypominamy, że ten katalog musi być całkowicie pusty.
>> >
>> > Ponadto, jeśli podasz podkatalog w `Ścieżka instalacji`, pojawi się on w adresie URL dostępu do Twojego "modułu za 1 kliknięciem".
>> > Na przykład, jeśli wpiszę do formularza podkatalog *test*, adres URL dostępu do mojego "modułu za 1 kliknięciem" będzie wyglądał następująco: **http://domain.tld/test/**.
>> >
>> > W razie potrzeby sprawdź przewodnik "[Jak rozdzielić swój hosting WWW na kilka stron](/pages/web_cloud/web_hosting/multisites_configure_multisite)", aby zmienić katalog docelowy Twojej domeny.
>>
>> Po uzupełnieniu tych informacji kliknij przycisk `Dalej`{.action}:
>>
>> > [!warning]
>> >
>> > Ostateczny katalog podany w określonej ścieżce instalacji musi być obowiązkowo i całkowicie pusty, aby instalacja mogła zostać zakończona.
>>
>> ![Konfiguracja modułu dla instalacji zaawansowanej](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-2.png){.thumbnail}
>>
> **Krok 8**
>>
>> Sprawdź informacje, które się wyświetlają i kliknij na `Zatwierdź`{.action}, jeśli wszystko jest w porządku:
>>
>> ![Zatwierdzanie instalacji w trybie zaawansowanym](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-4.png){.thumbnail}
>>

///

### 3 - Spersonalizuj swoją stronę

Instalacja może zająć kilkadziesiąt minut.

Po zakończeniu otrzymasz e-mail z potwierdzeniem poprawnej instalacji CMS-a. W tym e-mailu zostaniesz poproszony o zalogowanie się do interfejsu administracyjnego Twojego CMS-a. W ten sposób będziesz mógł zmienić temat Twojej strony WWW i opublikować jej pierwsze treści.

> [!warning]
>
> Pomoc techniczna OVHcloud nie wiąże się z korzystaniem z CMS-ów. Oferujemy je tylko w trybie instalacji **za 1 kliknięciem**.

Jeśli chcesz uzyskać pomoc w zakresie funkcji Twojego CMS-a, skontaktuj się z producentem zainstalowanego CMS-a. Znajdziesz w nim dokumentację dotyczącą Twojego projektu.

|CMS|Oficjalna dokumentacja|
|---|---|
|WordPress|[Pierwsze kroki z CMS WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/)|
|PrestaShop|[Jak zacząć z PrestaShop](https://docs.prestashop-project.org/1.7-documentation/getting-started+Started)|
|Joomla!|[Jak zaczać z Joomla!](https://www.joomla.org/about-joomla/getting-started.html)|
|Drupal|[Zrozumieć Drupala](https://www.drupal.org/docs/7/understanding-drupal/overview)|

## Sprawdź również

[Porównanie rozwiązań CMS](/links/web/hosting-cms-comparison).

[Jak rozdzielić hosting WWW na wiele stron](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Zarządzanie bazą danych na hostingu](/pages/web_cloud/web_hosting/sql_create_database).

[Zarządzanie CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

[Odinstaluj CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module#etap-3-usun-modul).

Jeśli chcesz zachować pełną kontrolę nad instalacją Twojego CMS-a, możesz [zainstalować ręcznie CMS na Twoim hostingu OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation).

Poznaj ofertę [Cloud Databases](/links/web/databases).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
