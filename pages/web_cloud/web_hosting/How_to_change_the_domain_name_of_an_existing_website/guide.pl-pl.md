---
title: "Przykłady zastosowania - Jak zmienić domenę na istniejącej stronie"
excerpt: "Dowiedz się, jak zmienić nazwę domeny na istniejącej stronie"
updated: 2025-10-28
---

## Wprowadzenie

W trakcie tworzenia strony WWW możesz zmienić nazwę domeny Twojej strony.<br>Najczęstszym przypadkiem zastosowania jest zmiana nazwy firmy.

Tutorial wyjaśnia, jakie kroki należy podjąć w przypadku zmiany domeny dostępu do Twojej strony WWW.

**Dowiedz się, jak zmienić nazwę domeny na istniejącej stronie.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy do Twojej dyspozycji niniejszy tutorial, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

## Wymagania początkowe

- Posiadanie [domeny](/links/web/domains)
- Posiadanie [hostingu OVHcloud](/links/web/hosting)
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

> [!warning]
>
> Zmiana nazwy domeny dotycząca dostępu do Twojej strony WWW może mieć wpływ na jej pozycjonowanie. 
> Bądź czujny nad operacjami, które zamierzasz wykonać lub skontaktuj się z [wyspecjalizowanym dostawcą](/links/partner) w celu pozycjonowania strony, jeśli to konieczne.
>

Aby zmienić domenę dostępu do Twojej strony WWW, należy wykonać kilka kroków w określonej kolejności.

### Etap 1 - zadeklarowanie nowej domeny na hostingu <a name="step1"></a>

Zadeklaruj nową domenę korzystając z naszej dokumentacji dotyczącej [dodawania witryny na Twoim serwisie udostępnionym](/pages/web_cloud/web_hosting/multisites_configure_multisite). Zadeklaruj również jej poddomenę w `www`, jeśli chcesz, na przykład, aby `www.NewDomain.tld` również wyświetlała Twoją stronę oprócz `NewDomain.tld`.

Aby pomyślnie przejść do etapu 1 należy spełnić kilka warunków:

- Twoja nowa domena musi wskazywać na ten sam "folder główny", który jest używany do łączenia się ze stroną WWW.
- Sprawdź, czy Twoja nowa domena wskazuje prawidłowy adres IP hostingu. Aby pobrać adres IP, zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Web cloud`{.action}, kliknij przycisk `Hosting`{.action}, wybierz hosting i pobierz **IPv4** w zakładce `Informacje ogólne`{.action}.

> [!warning]
>
> Jeśli aktywujesz opcje **IP kraju** lub **CDN** dla swojej nowej domeny, użyj właściwego adresu IP w naszej dokumentacji zawierającej listę [wszystkie adresy IP hostingu współdzielonego](/pages/web_cloud/web_hosting/multisites_configure_multisite).
>
> Aby odnaleźć numer klastra, w którym znajduje się Twój hosting, przejdź do części `Web cloud`{.action}, kliknij `Hosting plans`{.action}, wybierz hosting, a następnie zakładkę `FTP-SSH`{.action}. Numer klastra będziesz wyświetlał w formularzu **Serwer FTP i SFTP**: `ftp.cluster0XX.ovh.net` (gdzie `X` oznacza numer klastra).
>

> **Certyfikaty SSL**
>
> Jeśli pierwotna domena używana do uzyskiwania dostępu do Twojej witryny ma certyfikat SSL, zapoznaj się z naszymi 2 przewodnikami:
> - [Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)
> - [Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

Jeśli wszystkie czynności zostały poprawnie wykonane, deklaracje Twoich domen powinny być identyczne **chyba że korzystasz z płatnego certyfikatu SSL typu *Sectigo DV*, *Sectigo EV* lub *custom***.

![MultiSite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/all-domain-same-config-enable.png){.thumbnail}

> [!primary]
>
> Po zakończeniu etapu 1, zanim zmiany staną się skuteczne, niezbędny jest czas propagacji wynoszący maksymalnie 4-24 godzin.
>

Jeśli Twoja strona WWW nie używa baz danych i/lub nie przeprowadzasz przepisywania adresu URL dla Twojej strony WWW, ta ostatnia musi być wyświetlana poprawnie dla Twojej nowej domeny. W takim przypadku przejdź bezpośrednio do [etapu 3](#step3) niniejszego przewodnika. Jeśli tak nie jest, przejdź do poniższego etapu 2.

### Etap 2 - przepisanie adresów URL na Twojej stronie WWW z nową domeną

Większość stron używa baz danych do działania. Drzewo ostatnich jest zazwyczaj zbudowane wokół domeny pierwotnie używanej przez Twoją stronę. W przypadku tych stron konieczne są dalsze działania.

> [!warning]
>
> Uwaga: Operacje opisane w etapie 2 są niezwykle wrażliwe i mogą mieć poważne konsekwencje dla Twojej strony WWW, jeśli nie są przeprowadzane z zachowaniem ostrożności. W razie wątpliwości nie należy podejmować prób i zwracać się do [wyspecjalizowanego usługodawcy](/links/partner).
>
> Przed podjęciem jakichkolwiek działań zalecamy pobranie [kopii zapasowej przestrzeni dyskowej FTP](/pages/web_cloud/web_hosting/ftp_save_and_backup) oraz [kopii zapasowej bazy danych](/pages/web_cloud/web_hosting/sql_database_export). W przypadku nieprawidłowej operacji przywrócisz Twoją stronę WWW.
>

Rozróżnimy dwa rodzaje strony internetowej: 

- CMS (*Content Management System*), takie jak WordPress, Joomla!, PrestaShop, Drupal, etc.
- klasyczne strony internetowe zaprojektowane przez Ciebie lub Twojego dostawcę.

#### Sprawa nr 1: Twoja strona WWW to CMS

Większość systemów CMS pozwala bezpośrednio, z poziomu panelu administracyjnego *back-office*, na zastąpienie domeny pierwotnie zgłoszonej dla Twojej strony internetowej inną.

Ponieważ systemy CMS są tworzone przez organizacje zewnętrzne niezarządzane przez OVHcloud, zapoznaj się z linkami do oficjalnej dokumentacji poszczególnych systemów zarządzania treścią proponowanych na hostingu:

- WordPress: <https://wordpress.org/support/article/changing-the-site-url/>
- Joomla! : Producent tego oprogramowania nie udostępnia w terminie dokumentacji umożliwiającej zmianę domeny dostępu do Twojej strony WWW. Prosimy o bezpośredni kontakt z producentem oprogramowania. Aby uzyskać więcej informacji, sprawdź oficjalne strony [docs.joomla.org](https://docs.joomla.org/) lub [forum.joomla.org](https://forum.joomla.org/).
- Drupal: Producent tego oprogramowania nie udostępnia w terminie dokumentacji umożliwiającej zmianę domeny dostępu do Twojej strony WWW. Prosimy o bezpośredni kontakt z producentem oprogramowania. Aby uzyskać więcej informacji, sprawdź oficjalne strony [drupal.org](https://drupal.org) lub [drupal.fr](https://drupal.fr).
- PrestaShop: Producent tego oprogramowania nie udostępnia w terminie dokumentacji umożliwiającej zmianę domeny dostępu do Twojej strony WWW. Prosimy o bezpośredni kontakt z producentem oprogramowania. Aby uzyskać więcej informacji, kliknij [tutaj](https://help-center.prestashop.com) i przejdź na oficjalną stronę.

Pamiętaj, że w przypadku tych systemów CMS możesz wprowadzić również zmiany bezpośrednio [w bazie danych](/pages/web_cloud/web_hosting/sql_create_database). W tabeli programu zmień link dostępowy do Twojej strony WWW.

W przypadku innych systemów zarządzania treścią, które nie są oferowane do automatycznej instalacji przez OVHcloud, zachęcamy również do zapoznania się z ich odpowiednimi obsługami, aby przeprowadzić bezpieczną operację. 

#### Sprawa nr 2: twoja strona www to strona "domowa"

Aby przepisać adresy URL dla nowej domeny [zaloguj się do bazy danych Twojej strony](/pages/web_cloud/web_hosting/sql_create_database), następnie zastąp starą domenę nową w odpowiedniej tabeli. 

Pamiętaj, aby sprawdzić w pliku `.htaccess`, czy zapisy URL nie są aktualizowane z nową domeną.

Jeśli korzystałeś z usług dostawcy podczas tworzenia strony, skontaktuj się z nim, aby wprowadził zmiany.

> [!success]
>
> Po zakończeniu etapu 2 Twoja strona WWW powinna wyświetlać się z Twoją nową domeną.
>

### Etap 3 - usunięcie poprzedniej nazwy domeny <a name="step3"></a>

Aby uniknąć „*Duplicate-content*” i gdy nowa nazwa domeny jest w pełni operacyjna z Twoją witryną, należy usunąć deklarację starej nazwy domeny na Twojej witrynie, korzystając z przewodnika dotyczącego zarządzania [witrynami na Twoim serwisie udostępnionym](/pages/web_cloud/web_hosting/multisites_configure_multisite).

> [!warning]
>
> Pamiętaj, aby zająć się certyfikatem SSL *Sectigo EV*, *Sectigo DV* lub *Custom* zgodnie z opisem w [krok 1](#step1).
>

Po odłączeniu starej nazwy domeny od witryny znajdującej się na Twoim serwisie internetowym i jeśli jest ona zarejestrowana u OVHcloud, możesz przekierować tę domenę przy użyciu [trwalego widocznego przekierowania 301](/pages/web_cloud/domains/redirect_domain_name). Dzięki temu Twoi odwiedzający zostaną automatycznie przekierowani na Twoją stronę, widząc nową domenę w pasku adresu/URL swojej przeglądarki.

## Sprawdź również <a name="go-further"></a>

[Lista adresów IP hostingu www](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Przekierowanie domeny](/pages/web_cloud/domains/redirect_domain_name)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).