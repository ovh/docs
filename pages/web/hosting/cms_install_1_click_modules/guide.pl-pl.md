---
title: Automatyczna instalacja strony WWW za pomocą modułu CMS
slug: hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www
excerpt: Dowiedz się, jak stworzyć stronę internetową za pomocą modułów OVH
section: CMS
order: 01
---

**Ostatnia aktualizacja dnia 03-02-2022**

## Wprowadzenie 

Moduły OVHcloud umożliwiają łatwe i szybkie postawienie strony internetowej (bez konieczności posiadania umiejętności technicznych), przy pomocy narzędzi w Panelu klienta OVHcloud. Automatyczna instalacja jest dostępna dla: WordPress, PrestaShop, Drupal i Joomla!.

**Dowiedz się, jak postawić stronę za pomocą modułów OVHcloud.**

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external}.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Pusty katalog na hostingu, w którym zostanie zainstalowany moduł.
- Domena (wraz z subdomeną, jeśli jest potrzebna), skonfigurowana w ramach opcji MultiSite.

## W praktyce

### Wybór właściwego CMS-a

CMS (Content Management System) umożliwiają postawienie strony internetowej za pomocą prostego w użyciu interfejsu. Istnieje wiele systemów zarządzania treścią, które mają różne przeznaczenie. Dzięki temu wybierasz gotowe do użycia rozwiązanie, które dowolnie personalizujesz pod względem struktury strony (szablon, teksty itd.).

OVHcloud oferuje cztery systemy zarządzania treścią do prostej i szybkiej instalacji jako gotowe moduły. Są to najpopularniejsze rozwiązania dostępne na rynku. Jeśli już dokonałeś wyboru jednego spośród CMS-ów, przejdź do kolejnego kroku tego przewodnika. 
Jeżeli nie wiesz, który CMS jest dla Ciebie, zapoznaj się z naszym [porównaniem systemów CMS](https://www.ovhcloud.com/pl/web-hosting/uc-cms-comparison/){.external}.

Jeśli chcesz zainstalować inne rozwiązanie niż te dostępne w Panelu klienta OVHcloud, możesz zawsze zainstalować je ręcznie na hostingu pod warunkiem, że będzie on kompatybilny z Twoją ofertą (szczegóły pakietów hostingowych znajdziesz [tutaj](https://www.ovhcloud.com/pl/web-hosting/){.external}).

![Dostępne w OVHcloud CMS](images/CMS_logo.png){.thumbnail}


### Dostęp do zarządzania modułami

Zaloguj się do Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i wybierz `Web Cloud`{.action}. Kliknij przycisk `Hostingi`{.action} i wybierz odpowiednie rozwiązanie. Wsród dostępnych zakładek, wybierz i kliknij zakładkę `Moduły CMS`{.action}.

W tu możesz przeglądać już zainstalowane moduły, zarządzać nimi i instalować nowe.

![Dostęp do sekcji Moduły OVHcloud](images/access_to_the_1_click_modules_section.png){.thumbnail}

### Dodawanie modułu

Aby rozpocząć instalację nowego modułu, kliknij przycisk `Dodaj moduł`{.action}.

W wyświetlonym oknie wybierz CMS, a następnie domenę, na której chcesz postawić Twoją stronę:

![Wybór modułu](images/add_a_module.png){.thumbnail}

Jeśli wybranej domeny nie ma na liście, przejdź do zakładki `MultiSite`{.action}, aby ją dodać i ponownie spróbuj dodać moduł.

Dowiedz się więcej o dodawaniu domeny w opcji MultiSite z tego przewodnika [Jak rozdzielić hosting WWW na wiele stron](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/){.external}.

Po wybraniu domeny, wybierz prosty lub zaawansowany tryb instalacji:

- Instalacja prosta (wybrana domyślnie) - przeprowadzamy instalację CMS-a i podajemy Ci dane dostępowe do panelu CMS. To najprostszy i najszybszy sposób instalowania modułu.
- Instalacja w trybie zaawansowanym - możesz spersonalizować konfigurację, która zostanie wprowadzona podczas instalowania CMS-a. W tym celu należy podać kilka informacji potrzebnych do poprawnego działania CMS-a na Twojej bazie danych: informacje dotyczące logowania, katalog instalacyjny, język, login administratora itd.

#### Prosta instalacja modułu

W celu przeprowadzenia tej instalacji upewnij się, że pole wyboru `Instalacja w trybie zaawansowanym`{.action} nie jest zaznaczone, po czym kliknij przycisk `Instaluj`{.action}.

> [!warning]
>
> Aby instalacja mogła zostać przeprowadzona, katalog instalacji Twojego modułu musi być pusty. Należy także posiadać dostępną bazę danych.
> 

![Prosta instalacja modułu](images/choose_installation.png){.thumbnail}

Po zakończeniu instalacji otrzymasz e-mail z informacjami niezbędnymi do logowania się do interfejsu administratora CMS-a. Zaloguj się do Panelu klienta i personalizuj Twoją stronę WWW.

#### Instalacja w trybie zaawansowanym

W celu przeprowadzenia tej instalacji upewnij się, że pole wyboru `Instalacja w trybie zaawansowanym`{.action} jest zaznaczone, po czym kliknij przycisk `Dalej`{.action}:

![Instalacja w trybie zaawansowanym](images/advanced_installation.png){.thumbnail}

##### Wybór bazy danych

Teraz podaj informacje dotyczące logowania do Twojej bazy danych. Istnieje kilka możliwości:

- baza danych jest już utworzona na Twoim hostingu - wybierz ją z listy i uzupełnij wymagane informacje;
- baza danych nie została jeszcze utworzona na Twoim hostingu - zastosuj się do wskazówek w celu jej utworzenia, a następnie ponownie dokonaj wyboru;
- baza danych jest utworzona na instancji Web Cloud Databases – wybierz ją z listy `Baza danych poza hostingiem WWW`{.action} i uzupełnij wymagane informacje. Instancja SQL oraz hosting muszą być zlokalizowane w tym samym centrum danych;
- baza danych jest utworzona na innym hostingu w OVHcloud – wybierz ją z listy `Baza danych poza hostingiem WWW`{.action} i uzupełnij wymagane informacje. Baza danych oraz hosting muszą być zlokalizowane w tym samym centrum danych;

Po uzupełnieniu informacji, kliknij przycisk `Dalej`{.action}.

> [!warning]
>
> Jeśli podane informacje będą nieprawidłowe, instalacja nie zostanie ukończona. Aby tego uniknąć, zachęcamy najpierw do przetestowania logowania się do bazy danych.
> 

![Baza danych do instalacji zaawansowanej](images/advanced_installation_database.png){.thumbnail}

##### Konfiguracja modułu

Teraz podaj poniższe informacje potrzebne do skonfigurowania modułu:

- *nazwa lub e-mail administratora:* chodzi o login, którego będziesz używać do logowania się do interfejsu administratora wojego CMS-a;
- *hasło:* hasło, którego będziesz używać do logowania się do interfejsu administratora Twojego CMS-a;
- *domena:* domena przypisana do strony WWW, którą chcesz zainstalować;
Dowiedz się więcej o dodawaniu domeny w opcji MultiSite z tego przewodnika [Jak rozdzielić hosting WWW na wiele stron](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/){.external}
- *język:* język wybranego CMS-a;
- *ścieżka instalacji:* jest ona wpisywana automatycznie podczas wyboru domeny. Możesz ją uzupełnić dopisując katalogi podrzędne.

Po uzupełnieniu tych informacji, kliknij przycisk `Dalej`{.action}:

> [!warning]
>
> Aby instalacja mogła zostać ukończona, katalog, do którego ścieżkę podałeś, nie może zawierać żadnych danych.
> 

![Konfiguracja modułu do instalacji zaawansowanej](images/advanced_installation_configuration.png){.thumbnail}

##### Potwierdzenie instalacji

Zachęcamy, aby na ostatnim etapie instalacji zaawansowanej sprawdzić wyświetlone informacje, a następnie kliknąć `Zatwierdź`{.action}:

![Zatwierdzanie instalacji w trybie zaawansowanym](images/advanced_installation_summary.png){.thumbnail}

### Zarządzanie stroną uruchomioną na CMS-ie

Otrzymasz wiadomość e-mail z potwierdzeniem poprawnego przeprowadzenia instalacji modułu CMS oraz danymi do logowania do Twojego interfejsu administratora. W interfejsie zarządzania możesz spersonalizować wygląd i strukturę strony oraz publikować treści.

Jeśli chcesz uzyskać pomoc dotyczącą funkcjonalności Twojej strony, zachęcamy do odwiedzenia strony wydawcy CMS-a, na której znajdziesz dokumentację pomocną przy tworzeniu własnej strony WWW.

|CMS|Oficjalna dokumentacja|
|---|---|
|WordPress|[Pierwsze kroki z CMS WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}|
|PrestaShop|[Jak zacząć z PrestaShop](http://doc.prestashop.com/display/PS17/Getting+Started){.external}|
|Joomla!|[Jak zaczać z Joomla!](https://www.joomla.org/about-joomla/getting-started.html){.external}|
|Drupal|[Zrozumieć Drupala](https://www.drupal.org/docs/7/understanding-drupal/overview){.external}|

## Sprawdź również

[Porównanie rozwiązań CMS](https://www.ovhcloud.com/pl/web-hosting/uc-cms-comparison/){.external}

[Jak rozdzielić hosting WWW na wiele stron](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/){.external}

[Zarządzanie bazą danych na hostingu](https://docs.ovh.com/pl/hosting/zarzadzanie-baza-danych-na-hostingu-www/){.external}

Poznaj ofertę [Cloud Databases](https://www.ovh.pl/cloud/cloud-databases/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>
