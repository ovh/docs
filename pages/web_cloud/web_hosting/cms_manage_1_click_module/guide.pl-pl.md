---
title: "Jak zarządzać modułem za 1 kliknięciem?"
excerpt: "Dowiedz się, jak zarządzać modułem za pomocą 1 kliknięcia w Panelu klienta OVHcloud"
updated: 2026-05-04
---

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
- Instalacja modułu za 1 kliknięciem (Jeśli jeszcze nie przeprowadziłeś tej instalacji, postępuj zgodnie z instrukcjami zawartymi w naszym przewodniku "[Instalacja strony WWW za pomocą modułu za 1 kliknięciem (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)").

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

### Dostęp do strony

<!-- CP-STEPS-START:access-module -->
Kliknij poniższe zakładki, aby kolejno wyświetlić każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Kliknij zakładkę `Moduły CMS`{.action}.
>>
> **Krok 2**
>>
>> Kliknij przycisk `...`{.action} znajdujący się po prawej stronie linii dla Twojego modułu, po czym kliknij `Dostęp do modułu`{.action}.
>>
<!-- CP-STEPS-END:access-module -->

> [!primary]
>
> Jeśli po wykonaniu tej operacji Twoja strona WWW nie wyświetla się poprawnie, zapoznaj się z przewodnikami OVHcloud dotyczącymi hostingu współdzielonego w sekcji [Diagnostyka](/products/web-cloud-hosting).
>

### Dostęp do interfejsu administratora

<!-- CP-STEPS-START:access-admin-interface -->
Kliknij poniższe zakładki, aby kolejno wyświetlić każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Kliknij zakładkę `Moduły CMS`{.action}.
>>
> **Krok 2**
>>
>> Kliknij przycisk `...`{.action} znajdujący się po prawej stronie linii dla Twojego modułu, po czym kliknij `Dostęp do interfejsu administracyjnego modułu`{.action}.
>>
<!-- CP-STEPS-END:access-admin-interface -->

### Znajdź identyfikator administratora

<!-- CP-STEPS-START:find-admin-login -->
Kliknij poniższe zakładki, aby kolejno wyświetlić każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Moduły CMS`{.action}. Identyfikator administratora modułu pojawi się w kolumnie `Login`.
>>
> **Krok 3**
>>
>> Możesz również wyszukać e-mail otrzymany podczas tworzenia modułu. W [Panelu klienta OVHcloud](/links/manager) kliknij Twoją nazwę w prawym górnym rogu ekranu, a następnie w menu, które się wyświetla, kliknij `E-maile od działu wsparcia`{.action}.
>>
<!-- CP-STEPS-END:find-admin-login -->

### Zmiana hasła do modułu <a name="password-change"></a>

> [!primary]
>
> Zapoznaj się z oficjalną dokumentacją dotyczącą poszczególnych systemów CMS proponowanych w instalacji na hostingu:
>
> - WordPress : <https://wordpress.org/support/article/resetting-your-password/>
> - Joomla! : <https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F>
> - Drupal : Producent tego oprogramowania nie może w dniu dzisiejszym dostarczyć dokumentacji umożliwiającej zmianę hasła dostępu do interfejsu administracyjnego Drupal. Prosimy o bezpośredni kontakt z wydawcą na ten temat. Więcej informacji znajduje się na oficjalnej stronie [drupal.org](https://www.drupal.org/).
> - PrestaShop : Producent tego oprogramowania nie udostępnia w terminie dokumentacji zmiany hasła dostępu do interfejsu administracyjnego PrestaShop. Prosimy o bezpośredni kontakt z wydawcą na ten temat. Aby uzyskać więcej informacji, odwiedź oficjalną [stronę PrestaShop](https://www.prestashop.com).
>
Możesz również zmienić hasło dostępowe do interfejsu administracyjnego Twojego CMS bezpośrednio z Twojej bazy danych.

Zalecamy jednak, abyś przeprowadził operację w oparciu o dokumentację przygotowaną przez producenta systemu CMS lub skorzystał z pomocy [wyspecjalizowanego usługodawcy](/links/partner), jeśli masz trudności. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) niniejszego przewodnika.

### Usuń moduł

> [!warning]
>
> Tworzenie kopii zapasowych danych jest częścią operacji niezbędnych do [zabezpieczenia Twoich stron WWW](/pages/web_cloud/web_hosting/secure_your_website). Zalecamy regularne importowanie kopii zapasowej danych, a także **przed każdym usunięciem**, na lokalny nośnik, taki jak klucz USB lub zewnętrzny dysk twardy, zgodnie z instrukcjami zawartymi w naszym przewodniku "[Eksportowanie witryny internetowej](/pages/web_cloud/web_hosting/exporter-son-site-web)".
>

#### 1 - Zidentyfikować bazę danych powiązaną z modułem <a name="step1"></a>

Aby usunąć moduł za pomocą 1 kliknięcia, należy rozpocząć od zidentyfikowania bazy danych w **sposób** pewny.

<!-- CP-STEPS-START:find-db-password -->
Kliknij poniższe zakładki, aby kolejno wyświetlić każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Kliknij zakładkę `Bazy danych`{.action}.
>>
> **Krok 2**
>>
>> Jeśli w tej części Panelu klienta dysponujesz jedną bazą danych i nie posiadasz rozwiązań [Web Cloud Databases](/links/web/databases), możesz uznać, że chodzi o Twoją stronę WWW.
>>
> **Krok 3**
>>
>> W przeciwnym razie przejdź do karty `Moje strony`{.action}. Zanotuj nazwę `Katalog główny` widoczną w wierszu odpowiedniego serwisu internetowego: jest to katalog, w którym znajdują się pliki tworzące Twój moduł za 1 kliknięciem na serwerze FTP.
>>
<!-- CP-STEPS-END:find-db-password -->

Zaloguj się do [przestrzeni FTP Twojego hostingu](/pages/web_cloud/web_hosting/ftp_connection). Otwórz `Katalog główny` znajdujący się w zakładce `Moje strony`{.action} i wyszukaj plik konfiguracyjny Twojego modułu:

- WordPress : **"wp-config.php"** (nazwa bazy danych pojawia się pod nagłówkiem **"DB_NAME"**).
- Joomla! : **"configuration.php"** (nazwa bazy danych pojawia się pod nagłówkiem **"public $db"**).
- Drupal: **"settings.php"** (Aby go znaleźć, przejdź do folderu **"sites"**, a następnie **"default"**. Nazwa bazy danych pojawia się pod pozycją **"database"**).
- PrestaShop : **"parameters.php"** (Aby go znaleźć, przejdź do folderu **"app"**, a następnie **"config"**. Nazwa bazy modułu pojawia się pod nagłówkiem **"database_name"**).

#### 2 - Zapisz moduł

Aby wykonać kopię zapasową Twojej strony WWW, postępuj zgodnie z instrukcjami zawartymi w naszym przewodniku "[Eksportowanie witryny internetowej](/pages/web_cloud/web_hosting/exporter-son-site-web)", aby pobrać jej pliki zarówno z przestrzeni FTP, jak i z bazy danych.

#### 3 - Usuń moduł

> [!alert]
>
> Usunięcie modułu za 1 kliknięciem i bazy danych spowoduje usunięcie wszystkich kopii **zapasowych** modułu. Usunięte dane nie będą mogły zostać później odzyskane.
>

<!-- CP-STEPS-START:delete-module -->
Kliknij poniższe zakładki, aby kolejno wyświetlić każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Moduły CMS`{.action}.
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} znajdujący się po prawej stronie linii wyznaczającej moduł, po czym kliknij polecenie `Usuń moduł`{.action}.
>>
>> > [!success]
>> > Nie możesz znaleźć przycisku `Usuń moduł`{.action}? A może chcesz usunąć tylko pliki z Twojego dodatku?
>> >
>> > Sprawdź nasze przewodniki:
>> >
>> > - [Logowanie do przestrzeni dyskowej FTP hostingu](/pages/web_cloud/web_hosting/ftp_connection).
>> > - [Tutorial - Korzystanie z FileZilla na Twoim hostingu OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).
>> >
>> > <iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/LHpsuvyNFtQ?si=4655K8lQQpkE2YNG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>> >
>>
<!-- CP-STEPS-END:delete-module -->

> [!warning]
>
> Usunięcie modułu 1 kliknięcia **nie spowoduje automatycznego usunięcia bazy danych**. Jeśli uruchomisz instalację nowego CMS bez wcześniejszego usunięcia bazy danych (a Twój hosting nie pozwala na automatyczne utworzenie nowej bazy), w Panelu klienta wyświetli się komunikat "[Wystąpił błąd podczas pobierania informacji (You need at least one free database)](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic#wystapil-blad-podczas-pobierania-informacji-you-need-at-least-one-free-database)".
>
> Jeśli posiadasz hosting [Perso](/links/web/hosting-personal-offer) lub utworzyłeś już cztery bazy danych na hostingu [Hosting Pro](/links/web/hosting-professional-offer) lub [Hosting Performance](/links/web/hosting-performance-offer), usuń bazę danych zidentyfikowaną w [etapie 1](#step1) **PRZED** utworzeniem nowego modułu za pomocą 1 kliknięcia.
>

<!-- CP-STEPS-START:delete-database -->
Aby dokończyć usuwanie modułu, kliknij poniższe zakładki, aby kolejno wyświetlić każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Kliknij zakładkę `Bazy danych`{.action}.
>>
> **Krok 2**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie linii wyznaczającej bazę i przycisk `Usuń bazę danych`{.action}.
>>
> **Krok 3**
>>
>> Przed ponownym uruchomieniem instalacji nowego modułu sprawdź, czy wymagane wcześniej zadania usunięcia zostały sfinalizowane w zakładce `Zadania w trakcie`{.action}.
>>
<!-- CP-STEPS-END:delete-database -->

### Dobre praktyki

Zabezpiecz swoją stronę, postępując zgodnie z instrukcjami zawartymi w naszym przewodniku "[Jak zabezpieczyć Twoją stronę WWW?](/pages/web_cloud/web_hosting/secure_your_website)".

Dodaj narzędzia testowe typu CAPTCHA do formularzy na Twojej stronie.

Nie instaluj na Twojej stronie wtyczek ani szablonów, które nie są zalecane przez oficjalne społeczności Twojego CMS: 

- [WordPress](https://wordpress.org/)
- [Joomla!](https://community.joomla.org/)
- [Drupal](https://www.drupal.org/community)
- [PrestaShop](https://www.prestashop.com/pl)

## Sprawdź również <a name="go-further"></a>

[Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

Skontaktuj się z [partnerami OVHcloud](/links/partner), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z [naszymi ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
