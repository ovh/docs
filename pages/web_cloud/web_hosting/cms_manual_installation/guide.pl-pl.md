---
title: "Tutorial - Ręczna instalacja CMS na hostingu"
excerpt: "Dowiedz się, jak ręcznie zainstalować CMS na Twoim hostingu"
updated: 2024-03-28
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>
  
## Wprowadzenie

Tutorial ten pomoże Ci ręcznie zainstalować CMS (Content Management System), np. WordPress, Joomla!, Drupal, PrestaShop, Pico, Grav, Typo3 lub SPIP.

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywają na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy do Twojej dyspozycji niniejszy tutorial, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego webmastera](/links/partner) lub producenta systemu CMS, który wybrałeś. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Idź dalej"](#go-further) niniejszego tutoriala.
>
> Aby skontaktować się z poszczególnymi edytorami systemów zarządzania treścią, zapoznaj się z poniższymi linkami do ich odpowiednich oficjalnych stron:
>
> - [WordPress](https://wordpress.com/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}
> - [Pico](https://picocms.org/){.external}
> - [Grav](https://getgrav.org/){.external}
> - [Typo3](https://typo3.com/){.external}
> - [SPIP](https://www.spip.net/en_rubrique25.html){.external}
>

> [!success]
>
> Aby zainstalować CMS **automatycznie** z poziomu [Panelu klienta OVHcloud](/links/manager), zapoznaj się z naszą dokumentacją dotyczącą [instalacji modułu "jednym kliknięciem"](/pages/web_cloud/web_hosting/cms_install_1_click_modules).
>

**Dowiedz się, jak skonfigurować Twoją stronę WWW, instalując ręcznie CMS.**

## Wymagania początkowe

- Posiadanie oferty [hostingu](/links/web/hosting), która zawiera co najmniej jedną bazę danych.
- Posiadanie [domeny](/links/web/domains)
- Dostęp do [Panelu klienta OVHcloud](/links/manager){.external}

## W praktyce

### Prezentacja systemów CMS

Poniżej znajdziesz krótki opis każdego z systemów CMS, o których mowa powyżej.

#### WordPress

**WordPress** jest zazwyczaj używany do tworzenia strony www lub bloga. Opiera się na technologii PHP i oferuje szeroki wachlarz narzędzi, takich jak korektor ortograficzny, wtyczki do sklepów internetowych, SEO czy bezpieczeństwo Twojej strony www.

Więcej informacji znajduje się na naszej stronie dotyczącej [modułu WordPress](/links/web/hosting-wordpress)

- Oficjalna strona [WordPress](https://wordpress.com/){.external}

#### Joomla!

**Joomla!** to system CMS, który pozwala na tworzenie wydajnych stron WWW i aplikacji.

Społeczność **Joomla!** jest bardzo duża i może udzielać wsparcia i usług we wszystkich dziedzinach związanych z CMS-em (pomoc, dokumentacja, pomoc techniczna, tematy, itp.)

Więcej informacji znajduje się na naszej stronie dotyczącej [modułu Joomla!](/links/web/hosting-joomla)

- Oficjalna strona [Joomla!](https://www.joomla.org/){.external}

#### Drupal

**Drupal** to bezpłatna platforma open source z systemem PHP utworzona w 2000 roku. **Drupal** pozwala na szybkie tworzenie dynamicznych stron WWW.

Więcej informacji znajduje się na naszej stronie dotyczącej [modułu Drupal](/links/web/hosting-drupal)

- Oficjalna strona [Drupal](https://www.drupal.org/){.external}

#### PrestaShop

CMS, utworzony w 2005 roku i przeznaczony do tworzenia stron e-commerce. Oprogramowanie to, oprócz popularnych funkcji sklepów internetowych, może być również spersonalizowane z modułami, szablonami i modelami. 

Więcej informacji znajduje się na naszej stronie dotyczącej [modułu PrestaShop](/links/web/hosting-prestashop)

- Oficjalna strona [PrestaShop](https://www.prestashop.com/){.external}

#### Pico

**Pico** to oparty na PHP lekki CMS, idealny do tworzenia stron WWW lub blogów. Nie posiada bazy danych i używa plików Markdown do zarządzania zawartością. Posiada rozszerzenia służące do personalizacji Twojej strony WWW.

- Oficjalna strona [Pico](https://picocms.org/){.external}

#### Grav

**Grav** to nowoczesny i elastyczny CMS oparty na PHP. Jest on zaprojektowany bez użycia baz danych i wykorzystuje pliki Markdown do przechowywania i zarządzania treścią. Grav wyróżnia się systemem zarządzania pakietami, który ułatwia instalację i aktualizację wtyczek i szablonów dla Twojej strony WWW.

- Oficjalna strona [Grav](https://getgrav.org/){.external}

#### Typo3

**Typo3** to oparty na PHP CMS przeznaczony do tworzenia stron WWW każdej wielkości, od małych po duże firmy. Do przechowywania treści wykorzystuje on bazę danych. Oferuje szeroką gamę rozszerzeń do rozszerzania swoich funkcjonalności, aby dostosować stronę WWW do swoich potrzeb.

- Oficjalna strona [Typo3](https://typo3.com/){.external}

#### SPIP

**SPIP** jest systemem CMS przeznaczonym głównie do publikacji i zarządzania witrynami wydawniczymi, takimi jak gazety i czasopisma internetowe. Jest on oparty na PHP i bazie danych SQL, ułatwia tworzenie stron www wzbogaconych o treści tekstowe, graficzne i / lub multimedialne.

- Oficjalna strona [SPIP](https://www.spip.net/en_rubrique25.html){.external}

> [!warning]
>
> Niezależnie od wybranego przez Ciebie CMS, OVHcloud nie udziela żadnej pomocy w zakresie korzystania z tych systemów CMS. Jeśli masz trudności, skontaktuj się z producentem CMS, który wybrałeś za pomocą linków podanych powyżej w tym tutorialu.
>

### Etap 1 - przygotowanie instalacji <a name="step1"></a>

Aby zainstalować CMS na Twoim [hostingu](/links/web/hosting), potrzebne są jakieś przygotowania.

#### 1.1 - Sprawdź zgłoszenie w katalogu głównym

"Katalog główny" to katalog, w którym Twój przyszły CMS zostanie zainstalowany na Twoim hostingu. Zalecamy wybór pustego katalogu, aby uniknąć konfliktów z innymi potencjalnymi stronami podpiętymi w opcji MultiSite.

Zapoznaj się z naszą dokumentacją [jak dodać stronę podpiętą w opcji MultiSite na hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite), aby zdefiniować katalog główny, z którego chcesz korzystać w systemie CMS.

> [!primary]
>
> Jeśli określisz nazwę "katalogu głównego", który nie istnieje na Twoim hostingu, zostanie on automatycznie utworzony w przestrzeni dyskowej FTP Twojego hostingu.
>

#### 1.2 - Sprawdź "wskazanie" domeny

- Upewnij się, czy domena, której będziesz używał do uzyskania dostępu do CMS-a, jak również jej subdomena w www, wskazują na adres IP Twojej usługi [hosting](/links/web/hosting).

Aby uzyskać adres IP Twojego hostingu, zaloguj się do [Panelu klienta OVHcloud](/links/manager) w części `Web Cloud`{.action} i wybierz ofertę hostingu w sekcji `Hosting`{.action}.<br>
W ramce `Informacje ogólne`{.action} po prawej stronie znajdziesz adres IP Twojego hostingu w formularzu `IPv4`{.action}.

Jeśli aktywną strefą DNS Twojej domeny jest zarządzana w Twoim [Panelu klienta OVHcloud](/links/manager), porównaj adres IP Twojego hostingu z adresem IP w strefie DNS Twojej domeny, korzystając z naszej dokumentacji dotyczącej [stref DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!warning]
>
> Jeśli aktywowałeś opcje `CDN`{.action} lub `Geolokalizacja IP`{.action} dla Twojej domeny, użyj odpowiedniego adresu IP, korzystając z naszej dokumentacji zawierającej [wszystkie adresy IP naszych hostingów](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
>

Jeśli nie jesteś w stanie dokonać tych weryfikacji, skontaktuj się z aktywnym hostingiem w strefie DNS, aby zaktualizować wskazanie Twojej domeny.

> [!warning]
>
> Wszystkie modyfikacje wprowadzone w strefie DNS spowodują, że czas propagacji wynosi od 4 do 24 godzin.
>

- Pobierz [informacje potrzebne do zalogowania się do przestrzeni FTP Twojego hostingu](/pages/web_cloud/web_hosting/ftp_connection#etap-1-pobranie-informacji-niezbednych-do-logowania).
- Zdobądź dostęp do bazy danych Twojego hostingu, jeśli już istnieje, lub utwórz bazę danych przy użyciu naszej [dokumentacji](/pages/web_cloud/web_hosting/sql_create_database).

#### 1.3 - Zainstaluj darmowy program FTP "FileZilla"

Jeśli nie korzystasz już z klienta FTP, możesz użyć programu Filezilla. W dokumentacji OVH dotyczącej korzystania z tej usługi znajdziesz link do pobrania za darmo oraz samouczek dotyczący korzystania z niego [FileZilla wraz z hostingiem OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).

> [!primary]
>
> Są inni klienci FTP, których możesz użyć, na przykład Cyberduck. Więcej informacji znajdziesz w naszej dokumentacji dotyczącej [korzystania z Cyberduck w ramach Twojego hostingu OVHcloud](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac).
>

#### 1.4 - Przygotowanie bazy danych <a name="step1-4"></a>

> [!warning]
>
> Niektóre systemy CMS działają bez baz danych. Jeśli jest to przypadek systemu CMS, który chcesz zainstalować, pomiń ten krok.
>

Większość systemów CMS potrzebuje do działania bazy danych. Nasza oferta[hosting](/links/web/hosting) zawiera listę usług, z wyjątkiem [darmowy hosting 100M](/links/web/domains-free-hosting).

Skorzystaj z naszej dokumentacji, aby [utworzyć bazę danych w ramach Twojego hostingu](/pages/web_cloud/web_hosting/sql_create_database).

Jeśli dysponujesz usługą Web Cloud Databases w MySQL lub MariaDB i chcesz z niej korzystać do ręcznej instalacji CMS-a, zapoznaj się z naszą dokumentacją dotyczącą [utworzenia bazy danych w usłudze Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server#tworzenie-bazy-danych).

Po utworzeniu bazy danych pobierz parametry połączenia (serwer, nazwa bazy danych, nazwa użytkownika i hasło) i zachowaj je dla [etap 3](#step3) tego przewodnika.

> [!primary]
>
> Jeśli chcesz zainstalować CMS-a z istniejącą bazą danych, pobierz parametry połączenia z bazą danych bezpośrednio do powiązanych plików strony WWW.
>
> Jeśli jest to również CMS identyczny z tym, który powinieneś zainstalować, możesz użyć [tego przewodnika](/pages/web_cloud/web_hosting/sql_change_password#etap-3-zmiana-hasla-do-bazy-danych-twojej-strony-www-w-pliku-konfiguracyjnym) do identyfikacji plików konfiguracyjnych w [przestrzeni dyskowej FTP](/pages/web_cloud/web_hosting/ftp_connection).
>
> Połącz się następnie z bazą danych, aby określić "prefiksy" stołów już obecnych w środku. W ten sposób nie możesz wybrać prefiksu tabeli używanego już przez inne Twoje strony.
>
> - Aby zalogować się do bazy danych powiązanej z hostingiem, zapoznaj się z [tym przewodnikiem](/pages/web_cloud/web_hosting/sql_create_database#dostep-do-interfejsu-phpmyadmin).
> - Aby zalogować się do bazy danych na stronie WWW Cloud Databases, zapoznaj się z tym [przewodnikiem](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server).
>

### Etap 2 - uruchomienie ręcznej instalacji

#### 2.1 - Pobranie plików źródłowych z Twojego CMS

Przejdź na stronę producenta systemu CMS, który wybrałeś, aby pobrać pliki źródłowe.

Poniżej znajdziesz linki do stron pobierania CMS wymienionych w niniejszym tutorialu:

- [WordPress](https://wordpress.org/download/#download-install){.external}
- [Joomla!](https://downloads.joomla.org/){.external}
- [Drupal](https://www.drupal.org/download){.external}
- [Prestashop](https://www.prestashop.com/en/download){.external}
- [Pico](https://picocms.org/download/){.external}
- [Grav](https://getgrav.org/downloads){.external}
- [Typo3](https://get.typo3.org/#download){.external}
- [SPIP](https://www.spip.net/en_download){.external}

> [!primary]
>
> Pobierz wersję PHP i zidentyfikuj wersję MySQL lub MariaDB niezbędną do działania Twojego CMS, jeśli Twój CMS korzysta z bazy danych.
>
> W tym celu zapoznaj się z linkiem do oficjalnej strony systemu CMS, który chcesz zainstalować:
>
> - [WordPress](https://wordpress.org/about/requirements/){.external}
> - [Joomla!](https://downloads.joomla.org/technical-requirements){.external}
> - [Drupal](https://www.drupal.org/docs/getting-started/system-requirements/php-requirements){.external}
> - [Prestashop](https://www.prestashop.com/en/system-requirements){.external}
> - [Pico](https://picocms.org/download/){.external}
> - [Grav](https://learn.getgrav.org/17/basics/requirements){.external}
> - [Typo3](https://docs.typo3.org/m/typo3/tutorial-getting-started/main/en-us/SystemRequirements/Index.html){.external}
> - [SPIP](https://www.spip.net/en_article6659.html){.external}
>
> Skonfiguruj następnie wersję PHP na Twoim hostingu, korzystając z dokumentacji [OVHcloud dotyczącej zmiany wersji PHP na hostingu](/pages/web_cloud/web_hosting/configure_your_web_hosting).
>
> Jeśli używasz już wersji PHP większej lub równej tej, której potrzebujesz, nie musisz wprowadzać żadnych zmian.
>

Postępuj zgodnie z instrukcjami podanymi przez producenta systemu CMS, aż pliki źródłowe zostaną pobrane na Twój komputer, a następnie postępuj zgodnie z instrukcjami podanymi w tym tutorialu.

> [!warning]
>
> Jeśli masz inne strony zainstalowane na Twoim hostingu, sprawdź, czy są one kompatybilne z wersją PHP, którą wybierasz dla nowego CMS.
>

#### 2.2 - Rozłącz pliki źródłowe zapisane w nowym katalogu

>[!primary]
>
> W tym etapie w prosty sposób zamień nazwę katalogu "**CMS**" na wybrany przez Ciebie CMS. (**WordPress**, **Joomla!**, **Drupal**, **PrestaShop**, etc.).
>

Pobrany plik jest w formacie **skompresowanym** (zaznaczonym). Utwórz folder zatytułowany "**CMS**" na komputerze, a następnie **rozpakuj** zawartość pliku pobranego w folderze "**CMS***".

W tym celu otwórz folder, do którego pobrałeś skompresowany plik, kliknij prawym przyciskiem myszy plik, a następnie wybierz "Wyodrębnij wszystko... ".

Wpisz folder "**CMS**", aby pobrać pliki z tego folderu.

#### 2.3 - Przenieś pliki źródłowe z katalogu "CMS" do "katalogu głównego" na Twój hosting

Po rozpakowaniu plików w Twoim katalogu "**CMS**", [zaloguj się przez FTP do przestrzeni dyskowej](/pages/web_cloud/web_hosting/ftp_connection) przy użyciu [klienta FTP FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide), a następnie skopiuj pliki zawarte w katalogu "**CMS**" do "katalogu głównego", który zdefiniowałeś na Twoim hostingu podczas [etap 1](#step1)) niniejszego przewodnika.

Przykład systemu CMS *WordPress*:

![hosting](/pages/assets/screens/other/web-tools/filezilla/ftp-upload-wordpress.png){.thumbnail}

> [!warning]
>
> Zalecamy użycie pustego katalogu głównego, aby uniknąć konfliktu z innymi Twoimi stronami WWW. Przed przeniesieniem plików sprawdź, czy folder docelowy nie zawiera żadnych elementów.
>

> [!primary]
>
> Jeśli "katalog główny", który zdefiniowałeś nie został utworzony automatycznie podczas operacji opisanych w [etap 1](#step1), możesz go utworzyć za pomocą FileZilla.
>
> Przechowywanie plików na hostingu może zająć kilka minut.
>
> Po zakończeniu transferu sprawdź, czy wszystkie elementy znajdujące się w katalogu lokalnym "**CMS**" zostały poprawnie przeniesione do "katalogu głównego" na Twoim hostingu.
>

**Przypadek Szczególny**: Jeśli dysponujesz ograniczoną przepustowością do Internetu i/lub hostingiem **Pro** lub wyższym, możesz użyć połączenia **SSH**, aby umieścić pliki źródłowe Twojego CMS w przestrzeni dyskowej Twojego hostingu. 

Aby zalogować się przez SSH do Twojego hostingu, zapoznaj się z naszym przewodnikiem dotyczącym [logowania przez SSH na hostingu OVHcloud](/pages/web_cloud/web_hosting/ssh_on_webhosting).

Po zalogowaniu się w **SSH** wykonaj następujące polecenia:

- Przejdź do "katalogu głównego", w którym chcesz zainstalować CMS na Twoim hostingu:

```bash
cd NameOfYourTargetFolder
```

- Pobierz pliki źródłowe Twojego CMS'a bezpośrednio z katalogu głównego za pomocą polecenia odnoszącego się do wybranego przez Ciebie CMS:

> [!tabs]
> **WordPress**
>> 
>> ```bash
>> wget http://wordpress.org/latest.tar.gz
>> ```
>>
>> **latest** pozwala na automatyczne zainstalowanie najnowszej wersji CMS.
>>
> **Joomla!**
>> 
>> ```bash
>> wget https://downloads.joomla.org/cms/joomla4/4-2-8/Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
>> **Joomla4** et **4-2-8** odpowiadają, na dzień, najnowszej wersji Joomla! dostępne.
>> Zastąp te wartości wartościami, które chcesz zainstalować.
>> 
> **Drupal**
>> 
>> ```bash
>> wget https://ftp.drupal.org/files/projects/admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
>> **8.x-2.4** odpowiada, na dzień, najnowszej dostępnej wersji Drupal.
>> Zastąp tą wartość wartością, którą chcesz zainstalować.
>> 
> **PrestaShop**
>> 
>> ```bash
>> wget https://github.com/PrestaShop/PrestaShop/archive/1.7.8.8.tar.gz
>> ```
>> 
>> **1.7.8.8** odpowiada, w dniu, najnowszej wersji PrestaShop dostępny. Zastąp tą wartość wartością, którą chcesz zainstalować.
>> 

- Rozpakuj pliki źródłowe CMS'a w "katalogu głównym" za pomocą polecenia odnoszącego się do wybranego przez Ciebie CMS:

> [!tabs]
> **WordPress**
>> 
>> ```bash
>> tar xvf latest.tar.gz
>> ```
>> 
> **Joomla!**
>> 
>> ```bash
>> tar xvf Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
> **Drupal**
>> 
>> ```bash
>> tar xvf admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
> **PrestaShop**
>> 
>> ```bash
>> tar xvf 1.7.8.8.tar.gz
>> ```
>> 

- W katalogu głównym utworzony jest katalog "**CMS**". Przenieś jego zawartość do bazy "katalogu głównego":

```bash
mv CMS/* ./
```

- Usuń katalog "**CMS**", który jest pusty:

```bash
rmdir ./CMS/
```

- Usuń plik skompresowany odpowiadający wybranemu przez Ciebie CMS:

> [!tabs]
> **WordPress**
>> ```bash
>> rm -f latest.tar.gz
>> ```
>> 
> **Joomla!**
>> ```bash
>> rm -f Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
> **Drupal**
>> ```bash
>> rm -f admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
> **PrestaShop**
>> ```bash
>> rm -f 1.7.8.8.tar.gz
>> ```
>> 

### Etap 3 - zakończenie ręcznej instalacji <a name="step3"></a>

> [!success]
>
> Przed kontynuowaniem instalacji, usuń cache przeglądarki internetowej, aby uniknąć błędów.
>

Począwszy od tego etapu procedura różni się w zależności od wcześniej wybranego systemu CMS.

Aby kontynuować instalację, kliknij w przewodnik dotyczący systemu CMS:

- [Zakończenie instalacji modułu Wordpress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)
- [Zakończenie instalacji Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)
- [Zakończenie instalacji Drupala](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)
- [Zakończenie instalacji PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)
- [Zakończenie instalacji Pico](/pages/web_cloud/web_hosting/cms_manual_installation_pico)
- [Zakończenie instalacji Grav](/pages/web_cloud/web_hosting/cms_manual_installation_grav)
- [Zakończenie instalacji Typo3](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)
- [Zakończenie instalacji SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

## Sprawdź również <a name="go-further"></a>

[Przeniesienie strony WWW i kont e-mail do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh){.external}

[Uruchomienie strony WWW na hostingu](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online){.external}

[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite){.external}

Zobacz nasze [rozwiązania hostingu WWW](/links/web/hosting){.external}

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 