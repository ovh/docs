---
title: "FAQ Web Hosting"
excerpt: "Poznaj najważniejsze pytania dotyczące hostingu WWW OVHcloud"
updated: 2025-11-10
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

**Kliknij na poniższe pytania, aby zobaczyć wyjaśnienia.**

## Zarządzanie usługą

/// details | Jak skonfigurować hosting WWW?

Postępuj zgodnie z poniższymi instrukcjami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.

Będziesz mógł zarządzać swoimi certyfikatami SSL, wersją PHP zastosowaną do twojego hostingu, opcją CDN, opcjami MultiSite, bazami danych, etc.

> [!success]
>
> Jeśli chcesz skonfigurować Twój hosting, sprawdź sekcje "*Pierwsze kroki*" i "*Konfiguracja swój hostingu WWW Perso, Pro lub Performance*" na [tej stronie](/products/web-cloud-hosting).

///

/// details | Nie pamiętam hasła dostępowego do konta, na którym znajduje się mój hosting. Co mam zrobić?

Jeśli nie pamiętasz twojego identyfikatora klienta OVHcloud lub hasła powiązanego z tym identyfikatorem, wykonaj następujące kroki:

1. Przejdź do [interfejsu logowania do Panelu klienta OVHcloud](/links/manager).
2. Kliknij link `Nie pamiętasz nazwy użytkownika lub hasła?`{.action} znajdujący się pod okienkiem logowania.
3. Podaj Twój identyfikator klienta OVHcloud (na przykład: **aa00000-ovh**) lub adres e-mail do kontaktu przypisany do twojego identyfikatora klienta OVHcloud.
4. Następnie kliknij przycisk `Wyślij`{.action}.

Procedura resetu zostanie wysłana na adres e-mail do kontaktu.

> [!success]
>
> Szczegółowe informacje znajdziesz w przewodniku "[Tworzenie i zarządzanie hasłem do konta](/pages/account_and_service_management/account_information/manage-ovh-password)".

///

/// details | Jak zarządzać hasłem do przestrzeni dyskowej FTP na hostingu www?

Postępuj zgodnie z poniższymi instrukcjami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli kliknij zakładkę `FTP - SSH`{.action}.

Będziesz mógł zmienić hasło FTP do twojego hostingu.

> [!success]
>
> Szczegółowe informacje na ten temat znajdziesz w przewodniku "[Zmiana hasła do konta FTP](/pages/web_cloud/web_hosting/ftp_change_password)".

///

/// details | Jak zmienić hasło do bazy danych przypisanej do mojego hostingu?

> [!warning]
>
> Jeśli zmienisz hasło do bazy danych używanej przez jedną z twoich stron WWW, zaktualizuj również hasło w pliku konfiguracyjnym twojej strony WWW. Bez tej aktualizacji twoja strona WWW zostanie odłączona od bazy danych i będzie działać nieprawidłowo.

Postępuj zgodnie z poniższymi instrukcjami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli kliknij zakładkę `Bazy danych`{.action}.

Będziesz mógł zmienić hasła do baz danych powiązanych z twoim hostingiem.

> [!success]
>
> Szczegółowe informacje znajdziesz w przewodniku "[Zmiana hasła do bazy danych na hostingu](/pages/web_cloud/web_hosting/sql_change_password)".

///

/// details | Jak zmienić hasło do konta e-mail powiązanego z moim hostingiem?

Postępuj zgodnie z poniższymi instrukcjami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `E-maile`{.action} (lub menu `MX Plan`{.action}, jeśli korzystasz z wersji beta Panelu klienta OVHcloud), następnie wybierz odpowiednią domenę.
3. Na stronie, która się wyświetli kliknij zakładkę `E-maile`{.action}.
4. W tabeli, która się wyświetli kliknij przycisk `...`{.action} po prawej stronie danego adresu e-mail, po czym kliknij `Zmień hasło`{.action}.

Będziesz mógł zmienić hasło przypisane do twojego konta e-mail (pamiętaj, aby zachować zasady dotyczące haseł, które są wyświetlane w oknie wprowadzania).

> [!success]
>
> Szczegółowe informacje znajdziesz w przewodniku "[Zmiana hasła do konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)".
>
> Jeśli używasz programu pocztowego (Outlook, Mail na macOS, Thunderbird itp.), zaktualizuj hasło do konta e-mail, kiedy program pocztowy poprosi Cię o to podczas otwierania lub synchronizacji programu.
>
> Jeśli masz dodatkowe pytania dotyczące rozwiązania e-mail *MX Plan*, sprawdź nasze [FAQ - E-maile](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).

///

/// details | Jak zamieścić stronę WWW w Internecie?

Aby zamieścić twoją stronę WWW w Internecie, musisz najpierw mieć:

- [Domena](/links/web/domains) to adres WWW, z którego twoja strona będzie dostępna za pośrednictwem przeglądarki internetowej (przykład: *domain.tld*). Domena ta musi być również powiązana z twoim hostingiem, aby wyświetlała się strona WWW.
- [Hosting WWW](/links/web/hosting), na którym możesz zainstalować twoją stronę WWW.

Oto najważniejsze kroki, które należy podjąć:

1. Rozdziel swój projekt (strona WWW "pod klucz" (CMS) instalowana ręcznie lub za pomocą modułów 1 kliknięciem OVHcloud / strona internetowa stworzona przez Ciebie lub przez dostawcę / itp.).
2. Umieść pliki strony WWW na przestrzeni dyskowej FTP twojego hostingu.
3. Połącz stronę WWW z bazą danych (jeśli strona używa bazy).
4. Wejdź na swoją stronę www.

> [!success]
>
> Szczegółowe informacje na temat uruchomienia strony WWW na hostingu znajdziesz w przewodniku "[Uruchomienie strony WWW na hostingu](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
>
> Jeśli zdecydujesz się zainstalować CMS (WordPress, Joomla!, PrestaShop, Drupal) z naszym rozwiązaniem "Moduły za 1 kliknięciem", zapoznaj się ze szczegółowym przewodnikiem "[Instalacja strony WWW za pomocą 'modułu za 1 kliknięciem' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>
> Jeśli twoja strona WWW istnieje u innego dostawcy i chcesz ją przenieść do OVHcloud, zapoznaj się ze szczegółowym przewodnikiem "[Przeniesienie strony WWW i powiązanych z nią usług do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
>
> Jeśli chcesz skonfigurować Twój hosting, zapoznaj się z [przewodnikami dotyczącymi naszych rozwiązań hostingowych](/products/web-cloud-hosting).

///

/// details | Jak przenieść, bez przerwy w dostępności usług, moją stronę WWW, bazę danych, domenę i e-maile do OVHcloud?

Oto najważniejsze kroki, które należy podjąć:

1. Zamów hosting i konta e-mail w OVHcloud.
2. Utworzenie i wstępna konfiguracja strefy DNS dla twojej domeny w OVHcloud.
3. Pobierz pełną kopię zapasową twojej strony WWW.
4. Import kopii zapasowej strony WWW na hosting OVHcloud.
5. Odtwórz twoje konta e-mail w OVHcloud.
6. Zgłoś serwery e-mail OVHcloud w strefie DNS aktywnej dla twojej domeny.
7. Przeniesienie zawartości starych adresów e-mail do nowych adresów OVHcloud.
8. Ponowna konfiguracja oprogramowania pocztowego.
9. Zastąpienie aktywnych serwerów DNS twojej domeny serwerami OVHcloud.
10. Przeniesienie domeny do OVHcloud.

> [!success]
>
> Szczegółowe informacje na ten temat znajdziesz w przewodniku "[Przeniesienie strony WWW i powiązanych z nią usług do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

///

/// details | Jak zainstalować kilka stron WWW na tym samym hostingu?

Jeśli Twój [hosting WWW](/links/web/hosting) jest kompatybilny, wykonaj następujące kroki:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli kliknij zakładkę `MultiSite`{.action}.

Będziesz mógł zarządzać domenami/subdomenami zadeklarowanymi w opcji MultiSite na twoim hostingu.

> [!success]
>
> Szczegółowe informacje na ten temat znajdziesz w przewodniku "[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

///

/// details | Jak wyświetlić stronę WWW z adresem URL oznaczonym jako "HTTPS"?

Aby twoja strona WWW była dostępna z adresem URL oznaczonym jako "HTTPS" (na przykład: `https://domain.tld`), należy spełnić dwa wymagania:

- Musisz posiadać aktywny certyfikat SSL dla swojej domeny (lub zainstalowany na twoim hostingu).
- W kodzie źródłowym twojej strony WWW, musi ona wymusić zmianę adresów URL na "HTTPS".

OVHcloud oferuje kilka [certyfikatów SSL](/links/web/hosting-options) na hostingu.

Aby aktywować certyfikat SSL na twoim hostingu, wykonaj następujące kroki:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli kliknij zakładkę `Certyfikaty SSL`{.action}.
4. Wybierz odpowiedni certyfikat spośród [dostępnych certyfikatów](/pages/web_cloud/web_hosting/ssl_on_webhosting).
5. Kontynuuj aż do zakończenia instalacji certyfikatu SSL (po uprzednim zatwierdzeniu zamówienia, jeśli wybierzesz jeden z certyfikatów SSL Sectigo).

> [!success]
>
> Szczegółowe informacje na ten temat znajdziesz w przewodnikach:
>
> - [Hosting - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).
> - [Hosting WWW - Aktywacja darmowego certyfikatu SSL Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt).
> - [Hosting WWW - Aktywacja certyfikatu SSL Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv).
> - [Hosting WWW - Aktywacja certyfikatu SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev).
> - [Hosting - Instalacja spersonalizowanego certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_custom).

Po zainstalowaniu i skonfigurowaniu po stronie OVHcloud wybranego certyfikatu SSL, sprawdź, czy kod źródłowy twojej strony WWW poprawnie wpisuje adresy URL dostępu do twojej strony WWW w "HTTPS". W przypadku trudności ze spełnieniem tego warunku, prosimy o kontakt z webmasterem lub jednym z naszych [partnerów](/links/partner).

///

/// details | Jak zmienić pakiet hostingowy?

Aby zamówić usługę hostingu najlepiej dopasowaną do twoich potrzeb, sprawdź nasze oferty na [tej stronie](/links/web/hosting).

> [!primary]
>
> W zależności od wykupionego pakietu hostingowego niektóre oferty mogą nie być dostępne. Więcej informacji na ten temat znajdziesz w przewodniku "[Hosting WWW - Jak zmienić ofertę](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

Po dokonaniu wyboru wykonaj następujące kroki:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli i w ramce **Abonament** kliknij przycisk `...`{.action} po prawej stronie wzmianki `Pakiet`, a następnie `Zmień ofertę`{.action}.
4. Następnie wybierz nową subskrypcję i jej czas trwania. Zaakceptuj regulaminy i kliknij na `Wyślij`{.action}.

> [!success]
>
> Szczegółowe informacje na ten temat znajdziesz w przewodniku "[Hosting WWW - Jak zmienić ofertę](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

///

/// details | Jak mogę zachować konto e-mail powiązane z hostingiem podczas rezygnacji?

Po rezygnacji z hostingu lub jego usunięciu, oferta e-mail, która jest do niego przypisana, również zostaje usunięta. Aby zachować konta e-mail, należy odłączyć ofertę e-mail **przed** zakończeniem dzierżawy hostingu.

Postępuj zgodnie z poniższymi instrukcjami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli i w ramce **Konfiguracja** kliknij przycisk `...`{.action} po prawej stronie wzmianki `Adresy e-mail`, a następnie kliknij `Odłącz opcję e-mail`{.action}.
4. Postępuj zgodnie z instrukcjami, aby zamówić niezależną usługę e-mail, która pozwoli Ci zachować utworzone konta e-mail.

///

/// details | Jeśli zrezygnujesz z hostingu "Performance", jak zachować powiązaną ofertę "Web Cloud Databases"?

Pakiety hostingowe **Performance** zawierają bezpłatną usługę Web Cloud Databases.<br>
W przypadku zakończenia lub usunięcia hostingu **Performance** oferta Web Cloud Databases, która może zostać dołączona, również zostaje rozwiązana. Aby zachować rozwiązanie Web Cloud Databases, odłącz je **przed** rezygnacją z hostingu.

Postępuj zgodnie z poniższymi instrukcjami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli i w ramce **Konfiguracja** kliknij przycisk `...`{.action} po prawej stronie wzmianki `Web Cloud Databases`, a następnie `Odłącz`{.action}.
4. Postępuj zgodnie z instrukcjami, aby zamówić niezależną ofertę Web Cloud Databases i zachować utworzone rozwiązanie Web Cloud Databases.

**Czynność ta jest nieodwracalna i usługa Web Cloud Databases będzie fakturowana niezależnie od hostingu Performance.**

///

/// details | Jak zwiększyć ilość pamięci RAM w ofercie "Web Cloud Databases" związanej z hostingiem "Performance"?

Postępuj zgodnie z poniższymi instrukcjami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Web Cloud Databases`{.action}, następnie wybierz odpowiednie rozwiązanie Web Cloud Databases.
3. Na stronie, która się wyświetla i w ramce **Informacje ogólne** kliknij przycisk `...`{.action} po prawej stronie wzmianki `RAM`, a następnie `Zmień ilość pamięci RAM`{.action}.
4. Postępuj zgodnie z instrukcjami, aby zamówić ilość RAM. Następnie kontynuuj aż do zatwierdzenia zamówienia.

> [!success]
>
> W razie potrzeby sprawdź również sekcję "*Zmień ofertę Web Cloud Databases*" w naszym przewodniku "[Konfiguracja oferty Web Cloud Databases](/pages/web_cloud/web_cloud_databases/configure-database-server)".

///

## Diagnostyka

> [!success]
>
> Jeśli wystąpi problem niewymieniony w tym FAQ, zapoznaj się z sekcją "*Rozwiązywanie problemów*" w naszych [przewodnikach dotyczących rozwiązań hostingowych](/products/web-cloud-hosting).

/// details | Co zrobić w przypadku awarii mojej strony www?

U podstaw nieprawidłowego działania twojej strony internetowej może znajdować się kilka przyczyn.<br>
Aby ustalić źródło problemu, sprawdź, czy żadna z twoich subskrypcji nie wymaga odnowienia **odnowienia**.

Postępuj zgodnie z poniższymi instrukcjami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Na stronie, która się wyświetli kliknij twoją nazwę w prawym górnym rogu, następnie wybierz `Moje rozwiązania i usługi`{.action}.

> [!success]
>
> Szczegółowe informacje na ten temat znajdziesz w przewodniku "[Jak odnawiać usługi OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

Następnie sprawdź [bieżące wydarzenia w naszej infrastrukturze](https://www.status-ovhcloud.com/).

Jeśli wszystkie twoje usługi są aktywne i nie mają wpływu na żaden incydent ani konserwację, przeprowadź bardziej szczegółową diagnostykę.

> [!success]
>
> Zapoznaj się z naszą [przewodnikiem dotyczącym rozwiązań hostingowych](/products/web-cloud-hosting), sekcja "*Rozwiązywanie problemów*".

///

/// details | Co zrobić w sytuacji, gdy strona "Strona w budowie" OVHcloud pozostaje wyświetlona po opublikowaniu mojej strony www w Internecie?

![site-en-construction](/pages/assets/screens/other/browsers/errors/site-en-construction.png){.thumbnail}

Podczas instalacji hostingu WWW OVHcloud uruchomi tę stronę tymczasową w formie pliku **index.html** zawartego w katalogu `www` dostępnym w przestrzeni dyskowej FTP twojego hostingu.

Możliwe są dwa przypadki:

- Jeśli zainstalowałeś "[Moduły CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules)": ten plik jest automatycznie usuwany przez nasze roboty instalacyjne.
- Jeśli zainstalowałeś stronę WWW ręcznie, wykonaj następujące kroki:
    - Zaloguj się do [przestrzeni dyskowej FTP](/pages/web_cloud/web_hosting/ftp_connection) twojego hostingu.
    - Po zalogowaniu się do przestrzeni dyskowej FTP przejdź do katalogu `www`.
    - Zmień nazwę pliku **index.html** na **index.html.old**. Operacja ta spowoduje wyłączenie strony po kilku minutach.

> [!success]
>
> Więcej szczegółów w przewodnikach:
>
> - [Logowanie do przestrzeni dyskowej FTP hostingu](/pages/web_cloud/web_hosting/ftp_connection).
> - [Zmiana hasła do konta FTP](/pages/web_cloud/web_hosting/ftp_change_password).
> - [Tutorial - Korzystanie z FileZilla na Twoim hostingu OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).
> - [Tutorial - Korzystanie z Cyberduck na moim hostingu](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac).

///

/// details | Po utworzeniu strony wyświetla się jej nazwa "xxxxx.clusterXXX.hosting.ovh.net". Co powinienem zrobić?

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Twoja strona WWW została utworzona za pomocą [Moduły CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules), przy użyciu domyślnego adresu WWW hostingu "xxxxx.clusterXXX.hosting.ovh.net" podczas instalacji.

W tym przypadku konieczne jest usunięcie modułu za pomocą 1 kliknięcia i ponowna instalacja.

> [!warning]
>
> Trwa usuwanie [Moduły CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules), podobnie jak usuwanie bazy danych. Wiąże się ona również z usunięciem **kopii zapasowych** danych. Przed usunięciem strony WWW z hostingu, **upewnij się, że jesteś w stanie ją odtworzyć**. Jeśli nie jesteś pewien, jakie operacje należy wykonać, skontaktuj się z webmasterem lub jednym z naszych [partnerów](/links/partner).
>
> W razie potrzeby sprawdź również te przewodniki:
>
> - [Przywracanie plików z kopii zapasowej OVHcloud](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export).

**Tylko** po wykonaniu wszystkich niezbędnych kopii zapasowych usuń [Moduły CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules) wykonując następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli kliknij zakładkę `Moduły CMS`{.action}.
4. W tabeli, która się wyświetli kliknij przycisk `...`{.action} znajdujący się po prawej stronie w wierszu odpowiedniego *modułu za pomocą 1 kliknięcia*, a następnie `Usuń moduł`{.action}.

Usunięcie *modułu za pomocą 1 kliknięcia* może potrwać **kilka minut**.

Następnie usuń powiązaną bazę danych, wykonując następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli kliknij zakładkę `Bazy danych`{.action}.
4. W tabeli, która się wyświetli kliknij przycisk `...`{.action} po prawej stronie w linii odpowiedniej bazy danych, a następnie kliknij `Usuń bazę danych`{.action}.

Usunięcie skojarzonej bazy danych może potrwać **kilka minut**.

Po zakończeniu usuwania przeprowadź nową instalację modułu *1 kliknięciem*, uważając, aby wybrać odpowiednią nazwę domeny.

> [!success]
>
> Szczegółowe informacje znajdziesz w przewodniku "[Instalacja strony WWW za pomocą 'modułu za 1 kliknięciem' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

///

/// details | Po modyfikacji wyświetla się moja strona WWW z adresem www typu "xxxxx.clusterXXX.hosting.ovh.net". Co powinienem zrobić?

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Twoja strona wyświetla się z domyślnym adresem www hostingu typu "xxxxx.clusterXXX.hosting.ovh.net" po zmianie [Moduły CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Jeśli po operacji wyświetli się twoja strona WWW z tym adresem URL, najszybszym rozwiązaniem będzie przywrócenie jej do wcześniejszego stanu, w którym działała poprawnie.

> [!alert]
>
> Przywrócenie hostingu spowoduje przywrócenie **wszystkich stron WWW**.
>
> Podczas przywracania zawartość przestrzeni dyskowej FTP lub bazy danych jest nieodwracalnie zastępowana kopią zapasową. Bieżące dane **przed rozpoczęciem przywracania** na przestrzeni dyskowej FTP lub bazie danych do przywrócenia zostaną trwale nadpisane i utracone. W razie potrzeby wykonaj wcześniej kopię zapasową tej zawartości. Jeśli nie jesteś pewien, jakie operacje należy wykonać, skontaktuj się z webmasterem lub jednym z naszych [partnerów](/links/partner).
>
> W razie potrzeby sprawdź również te przewodniki:
>
> - [Przywracanie plików z kopii zapasowej OVHcloud](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export).

Aby przywrócić kod źródłowy twojej strony WWW, wykonaj następujące kroki:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli kliknij zakładkę `FTP - SSH`{.action}.
4. Na nowej stronie, która się wyświetli kliknij przycisk `Przywróć kopię zapasową`{.action}.
5. W oknie, które się wyświetla wybierz datę kopii zapasowej, którą chcesz przywrócić, a następnie kontynuuj aż do uruchomienia przywracania.

Przywrócenie przestrzeni dyskowej FTP może potrwać **kilka minut**.

Aby przywrócić kopię zapasową bazy danych, wykonaj następujące kroki:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli kliknij zakładkę `Bazy danych`{.action}.
4. W tabeli, która się wyświetli kliknij przycisk `...`{.action} znajdujący się po prawej stronie w linii odpowiedniej bazy danych, a następnie `Przywróć kopię zapasową`{.action}.
5. Na nowej stronie, która się wyświetli, wybierz kopię zapasową, którą chcesz przywrócić (**najlepiej odpowiadającą dacie wybranej do przywrócenia kodu źródłowego twojej strony WWW (patrz powyżej)**).
6. Po wybraniu kopii zapasowej kliknij przycisk `...`{.action} znajdujący się po prawej stronie kopii zapasowej, którą chcesz przywrócić, a następnie kliknij `Przywróć kopię zapasową`{.action}.

Przywrócenie kopii zapasowej bazy danych może potrwać **kilka minut**.

> [!success]
>
> Szczegółowe informacje na ten temat znajdziesz w przewodnikach:
>
> - [Przywracanie plików z kopii zapasowej OVHcloud](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Import kopii zapasowej do bazy danych hostingu](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

///

/// details | Moja strona www przekierowuje do interfejsu logowania do Webmail OVHcloud. Co powinienem zrobić?

![webmail-login-interface](/pages/assets/screens/website/webmail/webmail-login-interface.png){.thumbnail}

Wskazuje to na błędną konfigurację [serwerów DNS](/pages/web_cloud/domains/dns_server_edit) lub [strefy DNS](/pages/web_cloud/domains/dns_zone_edit) przypisanych do twojej domeny.

Najczęstszym przypadkiem jest to, że zamówiłeś osobno domenę i hosting www, więc nie są one automatycznie powiązane ze sobą za pośrednictwem strefy DNS twojej domeny.

Aby to naprawić, wykonaj następujące kroki:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Domeny`{.action}, następnie wybierz odpowiednią domenę.
3. Na stronie, która się wyświetli kliknij zakładkę `Serwery DNS`{.action}.
4. Następnie zanotuj podane nazwy serwerów DNS i przejdź do zakładki `Strefa DNS`{.action} (po prawej stronie zakładki `Serwery DNS`{.action}).
5. W tabeli (reprezentującej strefę DNS domeny), która się wyświetli, porównaj `Adres docelowy` wpisów typu `NS` obecnych w strefie DNS z nazwami uprzednio pobranych serwerów DNS. Mogą wystąpić trzy scenariusze. Kliknij poniższe zakładki, aby wyświetlić każdy z **3** przypadków.

> [!tabs]
> **Przypadek nr 1**
>>
>> `Adres docelowy` (serwery DNS) wpisów typu `NS` zadeklarowanych w strefie DNS domeny **są identyczne** z tymi pobranymi w zakładce `Serwery DNS`{.action}.
>>
>> W takim przypadku twoja domena (lub jej subdomena w *www*) wskazuje na adres IP naszego serwera przekierowań (213.186.33.5).
>>
>> 1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>> 2. Kliknij menu `Domeny`{.action} (lub menu `Strefy DNS`{.action}, jeśli korzystasz z wersji beta Panelu klienta OVHcloud), następnie wybierz odpowiednią domenę.
>> 3. Na stronie, która się wyświetli kliknij zakładkę `Strefa DNS`{.action}.
>> 4. W tabeli, która się pojawi (reprezentującej strefę DNS twojej domeny), zidentyfikuj wpis typu `A`, którego `Adres docelowy` ma wartość adresu IP `213.186.33.5`.
>> 5. Kliknij przycisk `...`{.action} po prawej stronie linii, a następnie `Zmień rekord`{.action}.
>> 6. W wyświetlonym oknie zastąp w polu `Adres docelowy *` adres IP `213.186.33.5` adresem IP hostingu, na którym znajduje się twoja strona WWW.
>>
>> > [!success]
>> >
>> > Jeśli potrzebujesz, zapoznaj się również z następującymi przewodnikami:
>> >
>> > - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).
>> > - [Hosting WWW - Lista adresów IP według klastra](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
>>
> **Przypadek nr 2**
>>
>> `Adres docelowy` (serwery DNS) wpisów typu `NS` zadeklarowanych w strefie DNS domeny **nie są identyczne** z tymi, które odnaleziono w zakładce `Serwery DNS`{.action}. Natomiast `Adres docelowy` (serwery DNS) mają jedną z następujących form:
>>
>> - `nsXX.ovh.net` i `dnsXX.ovh.net` **lub** `nsXXX.ovh.net` i `dnsXXX.ovh.net` (gdzie każde `X` oznacza cyfrę między **0** i **9**);
>> - `nsXX.ovh.ca` i `dnsXX.ovh.ca` **lub** `nsXXX.ovh.ca` i `dnsXXX.ovh.ca` (gdzie każde `X` oznacza cyfrę między **0** a **9**);
>> - `ns200.anycast.me` i `dns200.anycast.me` (jeśli wybrałeś opcję [DNS anycast](/links/web/domains-options)).
>>
>> > [!primary]
>> >
>> > Jeśli jeden z twoich serwerów DNS zadeklarowanych w zakładce `Serwery DNS`{.action} ma następującą postać: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXXXX.ovh.net` lub `vpsXXXXXX.ovh.ca` (gdzie każde `X` oznacza cyfrę między **0** a **9**), sprawdź bezpośrednio w dniu **Przypadek nr 3**.
>> > Są to nazwy serwerów DNS dostarczanych przez OVHcloud, które umożliwiają klientom instalowanie konfiguracji DNS bezpośrednio na ich własnych serwerach (serwery dedykowane, VPS, itp.).
>>
>> W takim przypadku oznacza to, że twoja domena nie używa odpowiednich serwerów DNS OVHcloud do stosowania konfiguracji strefy DNS zawartej w zakładce `Strefa DNS`{.action}.
>>
>> Aby to naprawić, wykonaj następujące kroki:
>>
>> 1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>> 2. Kliknij menu `Domeny`{.action}, następnie wybierz odpowiednią domenę.
>> 3. Na stronie, która się wyświetli kliknij zakładkę `Serwery DNS`{.action}.
>> 4. Na nowej stronie, która się wyświetli, kliknij przycisk `Zmień serwery DNS`{.action}.
>> 5. Na stronie, która się wyświetla zaznacz opcję `Użyj domyślnych serwerów DNS OVHcloud`{.action}, następnie kliknij przycisk 'Zastosuj konfigurację`{.action}.
>>
>> Propagacja aktualizacji serwerów DNS zastosowanych do nazwy domeny może potrwać do **48** godzin.
>>
>> > [!success]
>> >
>> > Szczegółowe informacje znajdziesz w przewodniku "[Modyfikacja serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>>
> **Przypadek nr 3**
>>
>> `Adres docelowy` (serwery DNS) wpisów typu `NS` zadeklarowanych w strefie DNS domeny **nie są identyczne** z tymi, które odnaleziono w zakładce `Serwery DNS`{.action}. Ponadto nazwy serwerów DNS pobrane w zakładce `Serwery DNS`{.action} nie mają form opisanych w **Przypadek nr 2**, z wyjątkiem następujących form: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXXXX.ovh.net` lub `vpsXXXXXX.ovh.ca` (gdzie każde `X` oznacza cyfrę między **0** i **9**).
>>
>> W takim przypadku oznacza to, że aktywna strefa DNS zastosowana do twojej domeny nie jest zarządzana bezpośrednio przez OVHcloud. Skontaktuj się ze swoim webmasterem, dostawcą domeny, dostawcą DNS lub jednym z naszych [partnerów](/links/partner).

///

/// details | Co zrobić, jeśli na mojej stronie pojawi się błąd "Strona nie przekierowuje się prawidłowo"?

![the-page-isnt-redirecting-properly](/pages/assets/screens/other/browsers/errors/the-page-isnt-redirecting-properly.png){.thumbnail}

W takim przypadku najszybszym rozwiązaniem będzie przywrócenie go do wcześniejszego stanu, w którym działał prawidłowo.

> [!alert]
>
> Przywrócenie hostingu spowoduje przywrócenie **wszystkich stron WWW**.
>
> Podczas przywracania zawartość przestrzeni dyskowej FTP lub bazy danych jest nieodwracalnie zastępowana kopią zapasową. Bieżące dane **przed rozpoczęciem przywracania** na przestrzeni dyskowej FTP lub bazie danych do przywrócenia zostaną trwale nadpisane i utracone. Pamiętaj, aby najpierw pobrać kopię zapasową tej zawartości. Jeśli nie jesteś pewien, jakie operacje należy wykonać, skontaktuj się z webmasterem lub jednym z naszych [partnerów](/links/partner).
>
> Sprawdź również szczegółowe przewodniki:
>
> - [Przywracanie plików z kopii zapasowej OVHcloud](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export).

Aby przywrócić kod źródłowy twojej strony WWW, wykonaj następujące kroki:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli kliknij zakładkę `FTP - SSH`{.action}.
4. Na nowej stronie, która się wyświetli, kliknij przycisk `Przywróć kopię zapasową`{.action}.
5. W oknie, które się wyświetla wybierz datę kopii zapasowej, którą chcesz przywrócić, a następnie kontynuuj aż do uruchomienia przywracania.

Przywrócenie przestrzeni dyskowej FTP może potrwać **kilka minut**.

Aby przywrócić kopię zapasową bazy danych, wykonaj następujące kroki:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli kliknij zakładkę `Bazy danych`{.action}.
4. W tabeli, która się wyświetli kliknij przycisk `...`{.action} znajdujący się po prawej stronie w linii odpowiedniej bazy danych, a następnie `Przywróć kopię zapasową`{.action}.
5. Na nowej stronie, która się wyświetli, wybierz kopię zapasową, którą chcesz przywrócić (**najlepiej odpowiadającą dacie wybranej do przywrócenia kodu źródłowego twojej strony WWW (patrz powyżej)**).
6. Po wybraniu kopii zapasowej kliknij przycisk `...`{.action} znajdujący się po prawej stronie kopii zapasowej, którą chcesz przywrócić, a następnie kliknij `Przywróć kopię zapasową`{.action}.

Przywrócenie kopii zapasowej bazy danych może potrwać **kilka minut**.

> [!success]
>
> Szczegółowe informacje na ten temat znajdziesz w przewodnikach:
>
> - [Przywracanie plików z kopii zapasowej OVHcloud](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Import kopii zapasowej do bazy danych hostingu](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

Jeśli przywracanie nie pozwala na przywrócenie dostępu do strony internetowej, skontaktuj się z webmasterem lub jednym z naszych [partnerów](/links/partner).

///

/// details | Co zrobić, jeśli na mojej stronie pojawia się błąd "503 error Backend fetch failed (Varnish cache)"?

![503_varnish](/pages/assets/screens/other/browsers/errors/http-503-backend-varnish.png){.thumbnail}

Jeśli na twoim hostingu aktywowałeś [opcję CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn), wyłącz tryb *Maintenance* na twojej stronie WWW WordPress lub PrestaShop.

Jeśli nie włączyłeś tej opcji ani nie korzystałeś z trybu *Maintenance*, skontaktuj się z webmasterem lub jednym z naszych [partnerów](/links/partner).

Błąd ten może się pojawić również w przypadku żądania HTTP, które kończy się *timeout* na twojej stronie WWW.

> [!success]
>
> W razie potrzeby sprawdź również te przewodniki:
>
> - [Przewodnik dotyczący usługi CDN na hostingu www](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).
> - [Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

///

/// details | Co zrobić, jeśli na mojej stronie pojawi się błąd "Your request has been blocked"?

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

Strona "Your request has been blocked" może się wyświetlać z różnych powodów (lista nie jest wyczerpująca):

- Zapytanie jest wykonywane z poziomu niezaktualizowanej przeglądarki internetowej (Firefox, Chrome, Safari, Edge, itp.).
- Bardzo duża liczba zapytań, podobnych lub nie, jest wykonywana w niezwykle krótkim czasie.
- Zapytanie próbuje wykonać nieautoryzowane operacje na infrastrukturze współdzielonej, na której znajduje się Twój hosting.

W tej sytuacji należy podjąć kilka działań:

- Upewnij się, że Twoja przeglądarka internetowa jest aktualna.
- Pobierz wywołany adres URL (na przykład: `https://www.domain.tld`) oraz wszystkie informacje dostępne na stronie "Your request has been blocked" (`IP address`, `Date` i `Request ID`).
- Prześlij odzyskane elementy do pomocy technicznej, tworząc [zgłoszenie serwisowe](https://help.ovhcloud.com/csm?id=csm_get_help).

Jeśli nie jesteś pewien, jakie operacje należy wykonać, skontaktuj się z webmasterem lub jednym z naszych [partnerów](/links/partner).

> [!success]
>
> Zapoznaj się również z przewodnikiem: [Co zrobić, jeśli wyświetla się strona 'Your request has been blocked'?](/pages/web_cloud/web_hosting/diagnostic_request_blocked).

///

/// details | Co zrobić, jeśli na mojej stronie pojawi się błąd "Your IP has been banned"?

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

Strona "Your IP has been banned" może się wyświetlać z różnych powodów (lista nie jest wyczerpująca):

- Bardzo duża liczba zapytań, podobnych lub nie, jest wykonywana w bardzo krótkim czasie z tego samego adresu IP.
- Zapytania wykonane z danego adresu IP są podejrzane.

W tej sytuacji należy podjąć kilka działań:

- Pobierz wywołany adres URL (na przykład: `https://www.domain.tld`) oraz wszystkie informacje dostępne na stronie "Your IP has been banned" (`IP address`, `Date` i `Request ID`).
- Prześlij odzyskane elementy do pomocy technicznej, tworząc [zgłoszenie serwisowe](https://help.ovhcloud.com/csm?id=csm_get_help).

Jeśli nie jesteś pewien, jakie operacje należy wykonać, skontaktuj się z webmasterem lub jednym z naszych [partnerów](/links/partner).

> [!success]
>
> Zapoznaj się również ze szczegółowym przewodnikiem: [Co zrobić, jeśli wyświetla się strona 'Your IP has been banned'?](/pages/web_cloud/web_hosting/diagnostic_ip_banned).

///

/// details | Zamówiłem domenę z akcentami i wyświetla się ona w moim panelu klienta w bardzo dziwny sposób. Co mam zrobić?

![rating_idn](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/idn-notation.png){.thumbnail}

Nie musisz podejmować żadnych działań w tej sytuacji. Nawet jeśli twoja domena wyświetla się w [ratingu międzynarodowym (IDN)](https://pl.wikipedia.org/wiki/Internationalized_Domain_Name) w Panelu klienta, będzie działać i wyświetlać się w sposób całkowicie normalny gdzie indziej. Adres twojej strony WWW zostanie wyświetlony w żądanym przez Ciebie formacie. twoje konta e-mail będą się wyświetlały w wybranym przez Ciebie formacie.

> [!alert]
>
> Odradzamy używanie adresu e-mail z nazwą domeny IDN (Internationalized Domain Name) z poziomu klienta poczty (Outlook, Mail na macOS, itp.). Wynika to z faktu, że niektórzy klienci poczty nie interpretują nazw domen przy użyciu znaków akcentowanych, co blokuje transmisję wiadomości e-mail. Nadawca, który prześle Ci wiadomość e-mail, otrzyma automatyczną wiadomość informującą, że Twój adres e-mail nie istnieje.
>
> **Zalecana jest rezerwacja tej samej domeny bez akcentów jako uzupełnienie nazwy domeny ze znakami akcentowanymi, co pozwoli uniknąć wszelkich niezgodności podczas transmisji wiadomości e-mail.**
>

///

## Sprawdź również <a name="go-further"></a>

[FAQ - E-maile na hostingu MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).