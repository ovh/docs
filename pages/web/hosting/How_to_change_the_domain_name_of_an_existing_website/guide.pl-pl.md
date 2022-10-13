---
title: "Jak zmienić domenę na istniejącej stronie"
slug: how_to_change_the_domain_name_for_an_existing_website
excerpt: "Dowiedz się, jak zmienić nazwę domeny na istniejącej stronie"
section: "Przykłady zastosowania"
order: 02
---

**Ostatnia aktualizacja z dnia 12-09-2022**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

## Wprowadzenie

W trakcie tworzenia strony WWW możesz zmienić nazwę domeny Twojej strony.<br>Najczęstszym przypadkiem zastosowania jest zmiana nazwy firmy.

Tutorial wyjaśnia, jakie kroki należy podjąć w przypadku zmiany domeny dostępu do Twojej strony WWW.

**Dowiedz się, jak zmienić nazwę domeny na istniejącej stronie.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy do Twojej dyspozycji niniejszy tutorial, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/). Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

## Wymagania początkowe

- Posiadanie [domeny](https://www.ovhcloud.com/pl/domains/)
- Posiadanie [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

> [!warning]
>
> Zmiana nazwy domeny dotycząca dostępu do Twojej strony WWW może mieć wpływ na jej pozycjonowanie. 
> Bądź czujny nad operacjami, które zamierzasz wykonać lub skontaktuj się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/) w celu pozycjonowania strony, jeśli to konieczne.
>

Aby zmienić domenę dostępu do Twojej strony WWW, należy wykonać kilka kroków w określonej kolejności.

### Etap 1 - zadeklarowanie nowej domeny na hostingu <a name="step1"></a>

Nowa domena zostanie zarejestrowana w dokumentacji OVH dotyczącej dodania strony podpiętej w [opcji MultiSite na hostingu www](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/). Zgłoś również subdomenę `www`, jeśli chcesz, na przykład, że `www.NewDomain.tld` wyświetla również Twoją stronę obok `NewDomain.tld`.

Aby pomyślnie przejść do etapu 1 należy spełnić kilka warunków:

- Twoja nowa domena musi wskazywać na ten sam "folder główny", który jest używany do łączenia się ze stroną WWW.
- Sprawdź, czy Twoja nowa domena wskazuje prawidłowy adres IP hostingu. Aby pobrać adres IP, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Web cloud`{.action}, kliknij przycisk 'Hosting`{.action}, wybierz hosting i pobierz **IPv4** w zakładce `Informacje ogólne`{.action}.

> [!warning]
>
> Jeśli aktywujesz opcje **IP kraju** lub **CDN** dla swojej nowej domeny, użyj właściwego adresu IP w naszej dokumentacji zawierającej listę [wszystkie adresy IP hostingu współdzielonego](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/).
>
> Aby odnaleźć numer klastra, w którym znajduje się Twój hosting, przejdź do części `Web cloud`{.action}, kliknij `Hosting`{.action}, wybierz hosting, a następnie zakładkę `FTP-SSH`{.action}. Numer klastra będziesz wyświetlał w formularzu **Serwer FTP i SFTP**: `ftp.cluster0XX.ovh.net` (gdzie `X` oznacza numer klastra).
>

> **Certyfikaty SSL**
>
> Jeśli domena używana do uzyskania dostępu do Twojej strony WWW dysponuje certyfikatem SSL, zapoznaj się z naszymi przewodnikami, aby wykonać lub sprawdzić działania opisane poniżej tych dwóch linków:
> - [Zarządzanie certyfikatem SSL na hostingu](https://docs.ovh.com/pl/hosting/certyfikaty-ssl-na-hostingu/)
> - [Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL](https://docs.ovh.com/pl/hosting/aktywacja-https-ssl-na-stronie-WWW/)
>
> W przypadku certyfikatu SSL *Let's Encrypt* za darmo, wystarczy aktywować opcję `SSL` **od tej pory** dla Twojej nowej domeny w zakładce `MultiSite`{.action} na Twoim hostingu. Następnie kliknij przycisk `Operacje`{.action} nad tabelą wskazującą Twoje pliki multimedialne, a następnie kliknij polecenie `Ponownie wygeneruj certyfikat SSL`{.action}. Regeneracja powinna trwać co najmniej 2 godziny.
>
> W przypadku płatnych certyfikatów SSL *Sectigo DV* i *Sectigo EV* zaproponowanych przez OVHcloud, certyfikaty te są ważne tylko dla jednej domeny i subdomeny z rozszerzeniem `www`.<br>
> **Po dotarciu do [etapu 3](#step3) tego przewodnika*** należy usunąć płatny certyfikat SSL, aby zamówić inny certyfikat dla nowej domeny.<br>
> *Uwaga, usunięcie certyfikatu jest nieodwracalne i nie zostanie wykonany zwrot płatności za czas pozostały do wygaśnięcia starego certyfikatu SSL. Upewnij się, że wszystkie etapy 1 i 2 są wykonane prawidłowo.*
>
> W przypadku innych certyfikatów SSL *custom*, które sami zainstalowałeś, skontaktuj się z dostawcą certyfikatów SSL, aby dowiedzieć się, jakie możliwości masz w takiej sytuacji.
>

Jeśli wszystkie działania zostały poprawnie zrealizowane, zgłoszenia w wielu lokalizacjach domen muszą być identyczne **chyba że korzystasz z płatnego certyfikatu SSL typu *Sectigo DV*, *Sectigo EV* lub *custom***.

![MultiSite](images/multisites.png){.thumbnail}

> [!primary]
>
> Po zakończeniu etapu 1, zanim zmiany staną się skuteczne, niezbędny jest czas propagacji wynoszący maksymalnie 4-24 godzin.
>

Jeśli Twoja strona WWW nie używa baz danych i/lub nie przeprowadzasz przepisywania adresu URL dla Twojej strony WWW, ta ostatnia musi być wyświetlana poprawnie dla Twojej nowej domeny. W takim przypadku przejdź bezpośrednio do [etapu 3](#step3) niniejszego przewodnika. Jeśli tak nie jest, przejdź do poniższego etapu 2.

### Etap 2 - przepisanie adresów URL na Twojej stronie WWW z nową domeną

Większość stron używa baz danych do działania. Drzewo ostatnich jest zazwyczaj zbudowane wokół domeny pierwotnie używanej przez Twoją stronę. W przypadku tych stron konieczne są dalsze działania.

> [!warning]
>
> Uwaga: Operacje opisane w etapie 2 są niezwykle wrażliwe i mogą mieć poważne konsekwencje dla Twojej strony WWW, jeśli nie są przeprowadzane z zachowaniem ostrożności. W razie wątpliwości nie należy podejmować prób i zwracać się do [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/).
>
> Przed podjęciem jakichkolwiek działań zalecamy pobranie [kopii zapasowej przestrzeni dyskowej FTP](https://docs.ovh.com/pl/hosting/hosting_przywrocenie_kopii_zawartosci_ftp_w_aplikacji_filezilla/) oraz [kopii zapasowej bazy danych](https://docs.ovh.com/pl/hosting/eksport-bazy-danych/). W przypadku nieprawidłowej operacji przywrócisz Twoją stronę WWW.
>

Rozróżnimy dwa rodzaje strony internetowej: 

- CMS (*Content Management System*), takie jak WordPress, Joomla!, PrestaShop, Drupal, etc.
- klasyczne strony internetowe zaprojektowane przez Ciebie lub Twojego dostawcę.

#### Sprawa nr 1: Twoja strona WWW to CMS

Większość systemów CMS pozwala bezpośrednio, z poziomu panelu administracyjnego *back-office*, na zastąpienie domeny pierwotnie zgłoszonej dla Twojej strony internetowej inną.

Ponieważ systemy CMS są tworzone przez organizacje zewnętrzne niezarządzane przez OVHcloud, zapoznaj się z linkami do oficjalnej dokumentacji poszczególnych systemów zarządzania treścią proponowanych na hostingu:


- WordPress: <https://wordpress.org/support/article/changing-the-site-url/>
- Joomla! : Producent tego oprogramowania nie udostępnia w terminie dokumentacji umożliwiającej zmianę domeny dostępu do Twojej strony WWW. Prosimy o bezpośredni kontakt z producentem oprogramowania. Aby uzyskać więcej informacji, sprawdź oficjalne strony [docs.joomla.org](https://docs.joomla.org/){.external} lub [forum.joomla.org](https://forum.joomla.org/){.external}.
- Drupal: Producent tego oprogramowania nie udostępnia w terminie dokumentacji umożliwiającej zmianę domeny dostępu do Twojej strony WWW. Prosimy o bezpośredni kontakt z producentem oprogramowania. Aby uzyskać więcej informacji, sprawdź oficjalne strony [drupal.org](https://drupal.org){.external} lub [drupal.fr](https://drupal.fr){.external}.
- PrestaShop: Producent tego oprogramowania nie udostępnia w terminie dokumentacji umożliwiającej zmianę domeny dostępu do Twojej strony WWW. Prosimy o bezpośredni kontakt z producentem oprogramowania. Aby uzyskać więcej informacji, kliknij [tutaj](https://help-center.prestashop.com){.external} i przejdź na oficjalną stronę.

Pamiętaj, że w przypadku tych systemów CMS możesz wprowadzić również zmiany bezpośrednio [w bazie danych](https://docs.ovh.com/pl/hosting/tworzenie-bazy-danych/). W tabeli programu zmień link dostępowy do Twojej strony WWW.

W przypadku innych systemów zarządzania treścią, które nie są oferowane do automatycznej instalacji przez OVHcloud, zachęcamy również do zapoznania się z ich odpowiednimi obsługami, aby przeprowadzić bezpieczną operację. 

#### Sprawa nr 2: twoja strona www to strona "domowa"

Aby przepisać adresy URL dla nowej domeny [zaloguj się do bazy danych Twojej strony](https://docs.ovh.com/pl/hosting/tworzenie-bazy-danych/), następnie zastąp starą domenę nową w odpowiedniej tabeli. 

Pamiętaj, aby sprawdzić w pliku `.htaccess`, czy zapisy URL nie są aktualizowane z nową domeną.

Jeśli korzystałeś z usług dostawcy podczas tworzenia strony, skontaktuj się z nim, aby wprowadził zmiany.

> [!success]
>
> Po zakończeniu etapu 2 Twoja strona WWW powinna wyświetlać się z Twoją nową domeną.
>

### Etap 3 - usunięcie poprzedniej nazwy domeny <a name="step3"></a>

Aby uniknąć duplicate-content*, a nowa domena jest w pełni aktywna na Twojej stronie WWW, należy usunąć zgłoszenie w opcji MultiSite ze starego domeny w przewodniku dotyczącym zarządzania [MultiSite na hostingu](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/).

> [!warning]
>
> Pamiętaj, aby zająć się certyfikatem SSL *Sectigo EV*, *Sectigo DV* lub *Custom* zgodnie z opisem w [krok 1](#step1).
>

Po usunięciu starej domeny z zakładki MultiSite i jej zarejestrowaniu w OVHcloud, możesz ją przekierować za pomocą [stałego, widocznego przekierowania 301](https://docs.ovh.com/pl/domains/przekierowanie-domeny/). Pozwoli to użytkownikom na automatyczne przekierowanie do strony WWW poprzez wyświetlenie nowej domeny na pasku adresu/URL przeglądarki.

## Sprawdź również <a name="go-further"></a>

[Lista adresów IP hostingu www](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/)

[Zarządzanie certyfikatem SSL na hostingu](https://docs.ovh.com/pl/hosting/certyfikaty-ssl-na-hostingu/)

[Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL](https://docs.ovh.com/pl/hosting/aktywacja-https-ssl-na-stronie-WWW/)

[Przekierowanie domeny](https://docs.ovh.com/pl/domains/przekierowanie-domeny/)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.