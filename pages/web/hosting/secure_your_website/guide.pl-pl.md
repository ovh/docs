---
title: Jak zabezpieczyć Twoją stronę WWW?
excerpt: Dowiedz się, jak zwiększyć bezpieczeństwo Twojej strony WWW
updated: 2021-12-10
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 29-08-2021**

## Wprowadzenie 

Z tego przewodnika dowiesz się, jak zapewnić dostępność usług, bezpieczeństwo danych oraz dostęp do rozwiązań. Dotyczy on wyłącznie stron WWW hostowanych na [rozwiązaniach hostingowych OVHcloud](https://www.ovhcloud.com/pl/web-hosting/).

Jest on organizowany etapami w coraz większym stopniu w zakresie znaczenia i trudności technicznych, co oznacza, że pierwsze kroki są najbardziej potrzebne. Bezpieczeństwo Twojej strony będzie mierzone przy użyciu najmniej chronionego elementu. Zalecamy przeprowadzenie wszystkich opisanych działań. Jeśli jednak napotkasz trudności w przeprowadzeniu niektórych z opisanych tutaj operacji, skontaktuj się z [społecznością OVHcloud](https://community.ovh.com/en/) lub naszymi [partnerami](https://partner.ovhcloud.com/pl/directory/).

**Dowiedz się, jak zabezpieczyć Twoją stronę WWW.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Tobie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy specjalisty lub kontakt z producentem programu lub interfejsu. Niestety OVHcloud nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- [OVHcloud Web Hosting plan](https://www.ovhcloud.com/pl/web-hosting/)
- posiadanie [login details](/pages/web/hosting/ftp_connection#etap-1-pobranie-informacji-niezbednych-do-logowania) w celu uzyskania dostępu do przestrzeni dyskowej planu hostingu
- dostęp do [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- dostęp do [admin interface for your website](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}

## W praktyce

### Etap 1: sprawdź bezpieczeństwo urządzeń <a name="local"></a>

Ten pierwszy krok jest kluczowy. Zakażenie komputera złośliwym oprogramowaniem może potencjalnie dawać dostęp do wszystkich wpisów dokonanych na klawiaturze osobom niewłaściwie zaprogramowanym. Dane do logowania do Panelu klienta OVHcloud lub do interfejsu administracyjnego Twojej strony mogą być zagrożone.

Z drugiej strony, rosnące zjawisko [ransomware](https://www.gov.pl/web/baza-wiedzy/lagodzenie-skutkow-atakow-szkodliwego-oprogramowania) (ok. 400 przypadków we Francji w 2020 r.) może nie tylko doprowadzić do szyfrowania wszystkich Twoich danych osobowych, ale również zagrozić Twojej działalności, uniemożliwiając dostęp do wszystkich Twoich danych, urządzeń i oprogramowania.

Sprawdź bezpieczeństwo komputera Windows, Mac lub Linux:

- sprawdź aktualizacje maszyny;
- uruchom pełen skaner swojego komputera po aktualizacji oprogramowania antywirusowego / anty-malware;
- regularnie zmieniaj hasło administratora dla swojego stanowiska (aby uzyskać więcej informacji na temat wyboru hasła, postępuj zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/account/customer/all_about_username#utworz-silne-i-unikalne-haslo)).

### Etap 2: zabezpiecz swój panel klienta OVHcloud

Aby zabezpieczyć Twoje konto klienta, [włącz weryfikację dwuetapową](/pages/account/customer/secure-ovhcloud-account-with-2fa) i postępuj zgodnie z [instrukcjami zawartymi w tym przewodniku](/pages/account/customer/all_about_username).

Pamiętaj, aby zaktualizować [dane przypisane do Twojego konta klienta](/pages/account/customer/all_about_username#jak-zarzadzac-danymi-osobowymi) i dodać do niego zapasowy **e-mail**.<br>
W przypadku utraty danych do logowania i/lub niedostępności głównego adresu e-mail przypisanego do Twojego konta klienta OVHcloud, potrzebujemy wiadomości e-mail zapasowej lub aktualnych danych osobowych, które pomogą Ci w znalezieniu dostępu do Twoich rozwiązań.

### Etap 3: wykonuj regularnie kopie zapasowe swojej strony <a name="backup"></a>

> [!primary]
>
> Regularne tworzenie kopii zapasowych danych, niezależnie od wybranej oferty, jest najważniejszym krokiem w dziedzinie bezpieczeństwa informatycznego. Nadal będzie można zainstalować oprogramowanie lub zamówić nowe urządzenie, ale bardzo trudno jest odzyskać dane po ich utracie.
>
> OVHcloud regularnie wykonuje kopie zapasowe danych na swojej infrastrukturze. Błąd podczas operacji, taki jak operacja usunięcia bazy danych w trakcie tworzenia lub nieprzedłużenie jej ważności, może spowodować definitywną utratę danych.
>

Wykonaj kopię zapasową danych (plików FTP **I** bazy danych) zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web/hosting/exporter-son-site-web). Importuj je na swoje stanowisko lub na zewnętrzny nośnik, serwer NAS lub klucz USB.

Oprogramowanie do zarządzania witryną internetową (CMS) umożliwia również instalację wtyczek do automatycznych kopii zapasowych.<br>
Sprawdź oficjalne fora swojego ulubionego CMS-a lub skontaktuj się z [społecznością OVHcloud](https://community.ovh.com/en/).

### Etap 4: dowiedz się, jak rozpoznawać fałszywe e-maile

Wiadomości typu phishing stanowią zagrożenie dla bezpieczeństwa Twojej strony, ponieważ mogą zawierać lub powodować instalację złośliwego oprogramowania. Aby dowiedzieć się, jak je rozpoznawać i chronić, zapoznaj się z tym [przewodnikiem](/pages/account/customer/phishing_care).

### Etap 5: uruchom automatyczne odnawianie

W przypadku nieodnowienia Twoich usług, OVHcloud ma prawny obowiązek, w dniu wygaśnięcia Twojego abonamentu, usunięcia w całości danych związanych z Twoją usługą hostingową oraz wszystkich kopii zapasowych. Wysyłamy do naszych klientów przypomnienia o harmonogramie ich odnowienia.<br>
E-maile ożywienia mogą pojawić się w Twojej spamie lub adres e-mail powiązany z Twoim kontem OVHcloud może być nieprawidłowy lub nie może być już dostępny.

Jeśli Twoja strona WWW ma duże znaczenie dla Twojej działalności zawodowej, [włącz automatyczne odnawianie](/pages/account/billing/how_to_use_automatic_renewal#uzyskiwanie-dostepu-do-konfiguracji-uslug) dla wszystkich Twoich usług OVHcloud<br>
Zalecamy również regularne sprawdzanie **ważności zarejestrowanych sposobów płatności**.

### Etap 6: sprawdź, czy Twoja strona jest aktualna

Regularnie sprawdź aktualizacje Twojej strony, postępując zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web/hosting/diagnostic_403_forbidden#22-aktualizacja-strony-www).

Pamiętaj, aby na Twoim hostingu zainstalować najnowszą wersję [języka PHP](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014).

### Etap 7: włącz https

Uruchom szyfrowane połączenie ze stroną WWW za pomocą protokołu **HTTPS**, postępując zgodnie z [instrukcjami zawartymi w tym przewodniku](/pages/account/customer/all_about_username). Uruchomienie protokołu pozwoli Ci zaszyfrować wszystkie informacje przesyłane przez Twoją stronę WWW (w tym zapytania przesyłane przez Twoich użytkowników na formularzach).

### Etap 8: chroń swoje formularze

Formularze stron internetowych są głównym celem hakerów/spammerów. Chroń swoje formularze przed atakami, wprowadzając wtyczki typu **"CAPTCHA"**.

### Etap 9: uruchom plugin zabezpieczający na swojej stronie

Dodaj do swojej strony wtyczkę bezpieczeństwa zalecaną przez producenta CMS:

- [WordPress](https://pl.wordpress.org/){.external}
- [Joomla](https://downloads.joomla.org/pl/){.external}
- [Drupal](https://www.drupal.org.pl/){.external}
- [PrestaShop](https://www.prestashop.com/pl){.external}

### Etap 10: sprawdź, czy Twój hosting nie zawiera złośliwych plików

Na tym etapie należy zalogować się do [przestrzeni FTP](/pages/web/hosting/ftp_connection). Wymaga to umiejętności technicznych, aby rozpoznawać ewentualne złośliwe pliki na Twoim hostingu. Jeśli masz trudności z przeprowadzeniem tej weryfikacji, skontaktuj się z naszymi [partnerami](https://partner.ovhcloud.com/pl/directory/).

W przypadku wątpliwości przejdź do weryfikacji opisanych w [etapie 1](#local) niniejszego przewodnika i [zmień hasło](/pages/web/hosting/ftp_change_password) do przestrzeni FTP.

### Etap 11: przetestuj kopie zapasowe swojej strony

Kopie [zapasowe danych](#backup) Twojej strony WWW (pliki FTP i baza danych) muszą być wykonywane regularnie.

Nie stanowią one jednak absolutnego bezpieczeństwa. Sprawdź również, czy kopie zapasowe Twojej bazy danych nie są uszkodzone.

Testy te będą przeprowadzane lokalnie, na przykład poprzez zaimportowanie danych do programu typu [WAMP](https://www.wampserver.com/){.external}. Skonfiguruj następnie Twoje lokalne rozwiązanie, aby wszystkie jego konfiguracje odpowiadały konfiguracji naszych [serwerów hostingowych](https://webhosting-infos.hosting.ovh.net/).

Możesz również utworzyć **wersję testową** Twojej strony (np.: test.mojadomena.tld) w innym katalogu Twojego hostingu (możesz korzystać z szablonu bazowego).

## Sprawdź również <a name="gofurther"></a>

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, sprawdź naszą [ofertę pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
