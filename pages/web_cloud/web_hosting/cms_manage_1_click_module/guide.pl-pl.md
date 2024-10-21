---
title: "Jak zarządzać modułem za 1 kliknięciem?"
excerpt: "Dowiedz się, jak zarządzać modułem za pomocą 1 kliknięcia w Panelu klienta OVHcloud"
updated: 2024-10-11
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie 

Moduły za 1 kliknięciem pozwalają na szybką i prostą instalację internetowego oprogramowania wspierającego tworzenie strony internetowej (zwanego dalej "CMS"). OVHcloud oferuje jedne z najpopularniejszych ofert: WordPress, PrestaShop, Drupal i Joomla!.

**Dowiedz się, jak zarządzać modułem za pomocą 1 kliknięcia w Panelu klienta OVHcloud.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie [oferty hostingu WWW Cloud](/links/web/hosting) umożliwiającej instalację modułu za pomocą 1 kliknięcia.
- Instalacja modułu za 1 kliknięciem (Jeśli jeszcze nie przeprowadziłeś tej instalacji, postępuj zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web_cloud/web_hosting/cms_install_1_click_modules)).
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

### Dostęp do strony

Aby uzyskać dostęp do publicznej strony po zainstalowaniu modułu za 1 kliknięciem, przejdź do [Panelu klienta OVHcloud](/links/manager), kliknij `Web Cloud`{.action}, `Hosting`{.action}, odpowiedni hosting, a następnie zakładkę `Moduły CMS`{.action}.

Następnie kliknij przycisk `...`{.action} znajdujący się po prawej stronie linii dla Twojego modułu, po czym kliknij `Dostęp do modułu`{.action}.

> [!primary]
>
> Jeśli po wykonaniu tej operacji Twoja strona WWW nie wyświetla się poprawnie, zapoznaj się z przewodnikami OVHcloud dotyczącymi hostingu współdzielonego w sekcji [Diagnostyka](/products/web-cloud-hosting).
>

### Dostęp do interfejsu administratora

Aby uzyskać dostęp do części strony zarezerwowanej dla administratorów, przejdź do [Panelu klienta OVHcloud](/links/manager), kliknij `Web Cloud`{.action}, `Hosting`{.action}, odpowiedni hosting, a następnie zakładkę `Moduły CMS`{.action}.

Następnie kliknij przycisk `...`{.action} znajdujący się po prawej stronie linii dla Twojego modułu, po czym kliknij `Dostęp do interfejsu administracyjnego modułu`{.action}.

### Znajdź identyfikator administratora

Kliknij zakładkę `Moduły CMS`{.action} w części `Hosting`{.action} w Panelu klienta. Identyfikator administratora modułu pojawi się w kolumnie `Login`.

Możesz również wyszukać e-mail otrzymany podczas tworzenia modułu w [Panelu klienta OVHcloud](/links/manager): kliknij Twoją nazwę w prawym górnym rogu ekranu, a następnie w menu, które się wyświetla kliknij `E-maile od działu wsparcia`{.action}.

### Zmiana hasła do modułu <a name="password-change"></a>

> [!primary]
>
> Zapoznaj się z oficjalną dokumentacją dotyczącą poszczególnych systemów CMS proponowanych w instalacji na hostingu:
>
> - WordPress : <https://wordpress.org/support/article/resetting-your-password/>
> - Joomla! : <https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F>
> - Drupal : Producent tego oprogramowania nie może w dniu dzisiejszym dostarczyć dokumentacji umożliwiającej zmianę hasła dostępu do interfejsu administracyjnego Drupal. Prosimy o bezpośredni kontakt z wydawcą na ten temat. Więcej informacji znajduje się na oficjalnej stronie [drupal.org](https://www.drupal.org/){.external}.
> - PrestaShop : Producent tego oprogramowania nie udostępnia w terminie dokumentacji zmiany hasła dostępu do interfejsu administracyjnego PrestaShop. Prosimy o bezpośredni kontakt z wydawcą na ten temat. Aby uzyskać więcej informacji, kliknij [tutaj](https://www.prestashop.com){.external} i przejdź do oficjalnej strony.
>
Możesz również zmienić hasło dostępowe do interfejsu administracyjnego Twojego CMS bezpośrednio z Twojej bazy danych.<br>
Zalecamy jednak, abyś przeprowadził operację w oparciu o dokumentację przygotowaną przez producenta systemu CMS lub skorzystał z pomocy [wyspecjalizowanego usługodawcy](/links/partner), jeśli masz trudności. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź dalej](#go-further) niniejszego przewodnika.

### Usuń moduł

> [!warning]
>
> Tworzenie kopii zapasowych danych jest częścią operacji niezbędnych do [zabezpieczenia Twoich stron WWW](/pages/web_cloud/web_hosting/secure_your_website). Zalecamy regularne importowanie kopii zapasowej danych na lokalny nośnik, taki jak klucz USB lub zewnętrzny dysk twardy, zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web_cloud/web_hosting/exporter-son-site-web).
>

#### Etap 1: zidentyfikować bazę danych powiązaną z modułem <a name="step1"></a>

Aby usunąć moduł za pomocą 1 kliknięcia, należy rozpocząć od zidentyfikowania bazy danych w **sposób** pewny. W tym celu przejdź do [Panelu klienta OVHcloud](/links/manager). Kliknij `Web Cloud`{.action}, `Hosting`{.action}, odpowiedni hosting, a następnie zakładkę `Bazy danych`{.action}.

Jeśli w tej części Panelu klienta dysponujesz jedną bazą danych i nie posiadasz rozwiązań [Web Cloud Databases](https://www.ovh.pl/cloud/cloud-databases/) , możesz uznać, że chodzi o Twoją stronę WWW.

W przeciwnym razie przejdź do zakładki `MultiSite`{.action}. Zapisz nazwę katalogu `Katalog główny`: jest to katalog, w którym znajdują się pliki tworzące moduł za pomocą 1 kliknięcia na serwer FTP.

Zaloguj się do [przestrzeni FTP Twojego hostingu](/pages/web_cloud/web_hosting/ftp_connection). Otwórz `Katalog główny` znajdujący się w zakładce `MultiSite`{.action} i wyszukaj plik konfiguracyjny Twojego modułu:

- WordPress : **"wp-config.php"** (nazwa bazy danych pojawia się pod nagłówkiem **"DB_NAME"**).
- Joomla! : **"configuration.php"** (nazwa bazy danych pojawia się pod nagłówkiem **"public $db"**).
- Drupal: **"settings.php"** (Aby go znaleźć, przejdź do folderu **"sites"**, a następnie **"default"**. Nazwa bazy danych pojawia się pod pozycją **"database"**).
- PrestaShop : **"parameters.php"** (Aby go znaleźć, przejdź do folderu **"app"**, a następnie **"config"**. Nazwa bazy modułu pojawia się pod nagłówkiem **"database_name"**).

#### Etap 2: zapisz moduł

Aby wykonać kopię zapasową Twojej strony WWW, postępuj zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web_cloud/web_hosting/exporter-son-site-web), aby pobrać jej pliki zarówno z przestrzeni FTP, jak i z bazy danych.

#### Etap 3: usuń moduł

> [!alert]
>
> Usunięcie modułu za 1 kliknięciem i bazy danych spowoduje usunięcie wszystkich kopii **zapasowych** modułu. Usunięte dane nie będą mogły zostać później odzyskane.
>

Aby usunąć moduł za 1 kliknięciem, przejdź do [Panelu klienta OVHcloud](/links/manager), kliknij `Web Cloud`{.action}, `Hosting`{.action}, a następnie `Moduły CMS`{.action}.

Następnie kliknij przycisk `...`{.action} znajdujący się po prawej stronie linii wyznaczającej moduł, po czym kliknij polecenie `Usuń moduł`{.action}.

> [!warning]
>
> Usunięcie modułu 1 kliknięcia **nie spowoduje automatycznego usunięcia bazy danych**. Jeśli uruchomisz instalację nowego CMS bez wcześniejszego usunięcia bazy danych (a Twój hosting nie pozwala na automatyczne utworzenie nowej bazy), w Panelu klienta wyświetli się komunikat "[Wystąpił błąd podczas pobierania informacji (You need at least one free database)](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic#wystapil-blad-podczas-pobierania-informacji-you-need-at-least-one-free-database)".
>
> Jeśli posiadasz hosting [Perso](/links/web/hosting-personal-offer) lub utworzyłeś już cztery bazy danych na hostingu [Hosting Pro](/links/web/hosting-professional-offer) lub [Hosting Performance](/links/web/hosting-performance-offer), usuń bazę danych zidentyfikowaną w [etapie 1](#step1) **PRZEDADP**, aby utworzyć nowy moduł za pomocą 1 kliknięcia.
>

Aby dokończyć usuwanie modułu, przejdź do zakładki `Bazy danych`{.action}, nadal w części `Web cloud`{.action}, `Hosting`{.action} i odpowiedni hosting w [Panelu klienta OVHcloud](/links/manager), następnie kliknij przycisk `...`{.action} po prawej stronie linii wyznaczającej bazę i przyciskUsuń `Usuń bazę danych`{.action}.

Przed ponownym uruchomieniem instalacji nowego modułu sprawdź, czy wymagane wcześniej zadania usunięcia zostały sfinalizowane w zakładce `Zadania w trakcie`{.action}.

### Dobre praktyki

Zabezpiecz swoją stronę, postępując zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web_cloud/web_hosting/secure_your_website).

Dodaj narzędzia testowe typu CAPTCHA do formularzy na Twojej stronie.

Nie instaluj na Twojej stronie wtyczek ani szablonów, które nie są zalecane przez oficjalne społeczności Twojego CMS: 

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://community.joomla.org/){.external}
- [Drupal](https://www.drupal.org/community){.external}
- [PrestaShop](https://www.prestashop.com/pl){.external}

## Sprawdź również <a name="go-further"></a>

[Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

Skontaktuj się z [partnerami OVHcloud](/links/partner), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z [naszymi ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).