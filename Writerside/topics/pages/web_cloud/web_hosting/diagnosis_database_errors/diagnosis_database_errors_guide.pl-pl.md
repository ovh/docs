---
title: "Rozwiąż najczęstsze błędy związane z bazami danych"
excerpt: "Zdiagnozuj najczęstsze przypadki błędów związanych z bazami danych"
updated: 2023-10-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie 

Korzystanie z baz danych może spowodować pewne nieprawidłowości na Twojej stronie WWW lub w [Panelu klienta OVHcloud](manager.), jak również w interfejsie [phpMyAdmin](sql_create_database#dostep-do-interfejsu-phpmyadmin.).

**Dowiedz się, jak usunąć błędy związane z bazami danych na hostingu www OVHcloud.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](diagnosis_database_errors_#go-further.) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie [hostingu](hosting.) OVHcloud
- Dostęp do [Panelu klienta OVHcloud](manager.).
- Korzystanie z jednej z naszych ofert baz danych [Web Cloud](hosting-options-startsql.) lub [Web Cloud Databases](https://www.ovh.pl/cloud/cloud-databases/)

## W praktyce

### "Błąd podczas logowania do bazy danych"

![error_establishing_a_DB_connection](error-establishing-a-db-connection.png){.thumbnail}

#### Zweryfikuj zdarzenia w trakcie

Sprawdź najpierw na stronie [https://web-cloud.status-ovhcloud.com/](https://web-cloud.status-ovhcloud.com/), że Twoje centrum danych, klaster hostingu, Twój Web Cloud Databases lub Cloud Databases nie są związane z awariami infrastruktury OVHcloud.

> [!primary]
>
> Aby odnaleźć te informacje, zaloguj się do [Panelu klienta OVHcloud](manager.), w części `Web Cloud`{.action} :
>
> - Aby znaleźć `Datacenter` Twojego hostingu, wraz z `Filer` (serwer plików), wybierz `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Informacje te można znaleźć w zakładce `Informacje ogólne`{.action}.
> - Aby odnaleźć **cluster** serwerów, na których hostowany jest Twój hosting, kliknij zakładkę `FTP-SSH`{.action}. Informacja ta pojawi się w nazwie Twojego `Serwer FTP`.
> - Aby odnaleźć nazwę serwera **Web Cloud Databases**, kliknij przycisk `Bazy danych`{.action}, a następnie wybierz odpowiednią ofertę. Informacja ta znajduje się pod pozycją `Nazwa hosta` w polu `SQL` `Informacje na temat połączenia`.
>

#### Sprawdź dane do logowania do bazy danych <a name="config_file"></a>

Zaloguj się przez [FTP](ftp_connection1.) do przestrzeni dyskowej plików na Twoim hostingu i znajdź plik konfiguracyjny Twojej strony (np. w przypadku strony WordPress plik **wp-config.php** znajduje się w folderze zawierającym Twoją stronę).

> [!warning]
>
> Wybór i konfiguracja pliku zawierającego dane do logowania do bazy danych jest ściśle związana z wybranym edytorem treści, a nie z OVHcloud.
>
> Zalecamy zatem skontaktowanie się z wydawcą [CMS](cms_install_1_click_modules1.) używanym do założenia strony lub do skorzystania z pomocy [[wyspecjalizowanego usługodawcy](partner.)](/links/partner) w razie potrzeby. Nie będziemy w stanie udzielić wsparcia w tym zakresie.
>

Następnie sprawdź zgodność **dokładna** między identyfikatorami logowania do [phpMyAdmin](sql_create_database#dostep-do-interfejsu-phpmyadmin.) a danymi w pliku konfiguracyjnym Twojej strony.

W razie potrzeby zmień [hasło do Twojej bazy danych](sql_change_password1.).

#### Przykład dla WordPress

Jeśli Twoja strona wyświetla komunikat **"Błąd podczas logowania do bazy danych"** i nie dotyczy jej [problem](https://web-cloud.status-ovhcloud.com/), zaloguj się przez [FTP](ftp_connection1.) do hostingu, a następnie otwórz katalog zawierający Twoją stronę (domyślnie jest to folder `www`).

Jeśli jest to strona WordPress, otwórz plik `wp-config.php`.

```php
define('DB_NAME', 'my_database');

/** MySQL database username */
define('DB_USER', 'my_user');

/** MySQL database password */
define('DB_PASSWORD', 'my_password');

/** MySQL hostname */
define('DB_HOST', 'my_server.mysql.db:port');
```

W [Panelu klienta OVHcloud](manager.), w części `Hosting`{.action}, kliknij zakładkę `Bazy danych`{.action}, następnie sprawdź zgodność między elementami wyświetlanymi i znajdującymi się w pliku `wp-config.php`:

- **my_database** musi odpowiadać temu, co jest zapisane w `Nazwa bazy`;
- **my_user** musi odpowiadać temu, co jest zapisane w `Nazwa użytkownika`;
- **my_password** odnosi się do [hasło do bazy danych](sql_change_password1.);
- **my_server.mysql.db** musi odpowiadać temu, co jest zapisane w `Adres serwera`.

> [!primary]
>
> Jeśli operacje te nie pozwalają przywrócić dostępu do Twojej strony WWW, [zapisz bazę danych](sql_database_export1.), a następnie [przywróć ją w wcześniejszej dacie](restore-import-on-database-server#1-przywroc-istniejaca-kopie-zapasowa.) w [Panelu klienta OVHcloud](manager.).
>
> W razie potrzeby należy skontaktować się z [wyspecjalizowanym dostawcą usług](partner.). Nie będziemy w stanie udzielić wsparcia w tym zakresie.
>

### Przekroczenie dozwolonego rozmiaru bazy danych

Otrzymałeś e-mail z naszych usług informujący, że ilość danych na Twojej bazie przekracza dozwolony limit. Twoja baza została przeczytana w trybie tylko do odczytu. Dzięki temu nie można wprowadzać modyfikacji na Twojej stronie WWW.

![database-overquota-notification-email](overquota-db.png){.thumbnail}

Odblokuj bazę danych na trzy sposoby:

#### Metoda 1: przejdź na wyższą ofertę

Jeśli posiadasz wzór **Personal** lub **Pro**, w tej sytuacji zalecamy przejście na górną [ofertę hostingową](hosting.). Zmiana abonamentu zwiększy rozmiar bazy danych, dzięki czemu będzie ona automatycznie odnawiana. Metoda ta jest najprostsza i nie wymaga szczególnych kompetencji technicznych.

> [!warning]
>
> Zwiększenie rozmiaru bazy danych może być związane z nieprawidłowym działaniem wewnętrznego kodu Twojej strony WWW.
>
> Nieprawidłowości mogą spowodować stały wzrost rozmiaru bazy danych. W takim przypadku zmiana oferty hostingowej byłaby nieskuteczna.
>
> Zalecamy zatem, aby w przypadku zaobserwowania nagłego wzrostu rozmiaru bazy danych lub gdy posiadasz stronę typu "blog", która w normalnych warunkach nie jest konsumentem danych, niezwłocznie skontaktował się z [wyspecjalizowanym dostawcą](partner.). Nie będziemy w stanie udzielić Ci wsparcia w tym zakresie.
>

W celu dokonania tej zmiany zaloguj się do [Panelu klienta OVHcloud](manager.), następnie kliknij przycisk `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Kliknij przycisk `...`{.action} w rubryce `Pakiet` po prawej stronie ekranu, a następnie kliknij `Zmień ofertę`{.action}.

Jeśli korzystasz z oferty **Performance**, sprawdź [metoda 2](#methode2.).

#### Metoda 2: migracja danych na wyższą bazę danych <a name="methode2"></a>

Możesz również przenieść dane na nową bazę:

- Zamów w razie potrzeby [bazę danych](hosting-options-startsql.) o wyższej wielkości, a następnie uruchom [kreacja](sql_create_database1.);
- Wykonaj [eksport swoich danych](sql_database_export1.), następnie [je importować](sql_importing_mysql_database1.) w nowej bazie;
- Wprowadź dane dostępowe nowej bazy danych do [pliku konfiguracyjnego](#config_file.) swojej strony.

> [!primary]
>
> Jeśli dysponujesz hostingiem **Performance**, możesz również [włączyć za darmo Web Cloud Databases](starting_with_clouddb#wlaczenie-prywatnego-clouddb-zawartego-w-ofercie-hostingu.).
>

#### Metoda 3: usuń niepotrzebne dane

Po utworzeniu [kopii zapasowej bazy danych](sql_database_export1.) zaloguj się do swojego interfejsu [phpMyAdmin](sql_create_database#dostep-do-interfejsu-phpmyadmin.), aby usunąć niepotrzebne dane za pomocą poleceń Drop, Delete i Truncate.

Następnie upamiętaj obliczenie rozmiaru używanego w zakładce `Bazy danych`{.action} dla wybranego hostingu: kliknij przycisk `...`{.action} a następnie na `Przelicz rozmiar`{.action}.

> [!warning]
>
> Operacja ta wymaga wysokich umiejętności technicznych. W razie potrzeby zalecamy skorzystanie z pomocy [[wyspecjalizowanego usługodawcy](partner.)](/links/partner). Nie będziemy w stanie udzielić wsparcia w tym zakresie.
>

#### Metoda 4: zoptymalizuj bazę danych

Aby zoptymalizować bazę danych, postępuj zgodnie z instrukcjami zawartymi w przewodniku "[Konfiguracja serwera baz danych](configure-database-server#optymalizacja-baz-danych.)". Następnie ponownie zastosuj rozmiar w zakładce 'Bazy danych{.action} Twojego hostingu, klikając przycisk `...`{.action} odpowiedniej bazy danych.

> [!warning]
>
> Jeśli dostarczone porady dotyczące optymalizacji Twojej bazy danych nie wystarczą, aby odblokować dostęp do Twojej strony, zalecamy kontakt z naszym [społecznością użytkowników](https://community.ovh.com/en/) lub [partnerami OVHcloud](partner.). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie.
>

### Przekroczenie pojemności pamięci RAM

Poniższy komunikat w części `Bazy danych`{.action} Twojego [Panelu klienta OVHcloud](manager.) wskazuje, że Twój serwer [Web Cloud Databases](https://www.ovh.pl/cloud/cloud-databases/) wykorzystał zbyt dużą ilość zasobów w infrastrukturze OVHcloud:

![ram-exceeded](ram-exceeded.png){.thumbnail}

W tej sytuacji możesz zwiększyć [ilość pamięci RAM](configure-database-server#zmiana-oferty-serwera-baz-danych.) dostępny w części `Bazy danych`{.action} [Panelu klienta OVHcloud](manager.). W karcie `Informacje ogólne`{.action} kliknij przycisk `...`{.action} w rubryce `RAM`.

> [!warning]
>
> Aby zwiększyć pamięć RAM, nie należy włączać usługi Web Cloud Databases za pomocą hostingu Performance. Jeśli chcesz zwiększyć ilość pamięci RAM bazy danych zawartej w [ofertach wydajności](hosting-performance-offer.){.external}, musisz ją odłączyć.
> 
> Aby odłączyć bazę danych, zaloguj się do [Panelu klienta OVHcloud](manager.) i wybierz `Web Cloud`{.action}. Kliknij polecenie `Hosting`{.action}, następnie wybierz hosting, na którym aktywowana jest usługa Web Cloud Databases.
>
> W obszarze `Konfiguracja` kliknij na `...`{.action} po prawej stronie pozycji `Prywatna baza danych`, następnie kliknij przycisk `Odłącz`{.action}.
>

Możesz również zoptymalizować bazę danych, postępując zgodnie z instrukcjami zawartymi w przewodniku "[Konfiguracja serwera baz danych](configure-database-server#optymalizacja-bazy-danych.)".

> [!primary]
>
> Jeśli napotkasz trudności z ograniczeniem wykorzystania zasobów na serwerze baz danych i nie chcesz ich zwiększać, skontaktuj się z naszym [społecznością użytkowników](https://community.ovh.com/en/) lub [partnerami OVHcloud](partner.). Nie będziemy w stanie udzielić wsparcia w tym zakresie.
>

### Błędy w imporcie baz danych

#### "Access denied for user to database"

>
> **"#1044 - Access denied for user to database"**
>

Upewnij się, że baza danych jest pusta w zakładce `Bazy danych`{.action} odpowiedniego hostingu (kliknij przycisk `...`{.action} a następnie na `Przelicz kwotę`{.action}) w celu [zapisz obecne dane](sql_database_export1.).

Możesz również zaznaczyć kratkę `Wyczyść aktualną bazę danych`{.action} tuż przed [uruchomieniem importu](sql_importing_mysql_database#import-twojej-kopii-zapasowej-w-panelu-klienta.):

![import-empty-current-db](import-empty-current-db.png){.thumbnail}

Ten komunikat błędu oznacza, że baza danych, którą chcesz importować zawiera nieautoryzowane elementy na infrastrukturze współdzielonej OVHcloud. W razie potrzeby skontaktuj się z [społecznością użytkowników](https://community.ovh.com/en/) lub [wyspecjalizowanym dostawcą](partner.). Nie będziemy w stanie udzielić wsparcia w zakresie korekty tej nieprawidłowości.

> [!faq]
>
> Jakie elementy w skrypcie importu bazy danych mogą spowodować błąd "#1044 - Access denied for user to database"?

Posiadanie **"trigger"** w skrypcie importu bazy danych nie jest dozwolone na serwerach hostingu www OVHcloud. W takiej sytuacji zaimportuj bazę danych na serwer [Web Cloud Databases](https://www.ovh.pl/cloud/cloud-databases/).

Ponadto nie zezwala się na następujące zapytanie:

```sql
CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET LATIN1 COLLATE LATIN1_swedish_ci; 
```

Zastąp ją:

```sql
USE `Database-Name`;
```

(`Database-Name`: wpisz nazwę bazy danych [Panel klienta OVHcloud](manager.)

#### "MySQL server has gone away"

>
> **"ERROR MySQL server has gone away"**
>

Ten komunikat błędu pojawia się podczas [importu bazy danych](restore-import-on-database-server#1-przywroc-istniejaca-kopie-zapasowa.) na serwerze [Web Cloud Databases](starting_with_clouddb1.). Wiąże się to głównie z zbyt dużą ilością danych do importu lub z brakiem optymalizacji zapytań SQL w skrypcie importu.

Aby usunąć tę anomalię, możesz:

- Zwiększyć [ilość pamięci RAM](configure-database-server#monitoruj-zuzyta-pamiec-ram.). W tym celu przejdź do [Web Cloud Databases](starting_with_clouddb1.) w sekcji `Bazy danych`{.action} twojego [Panel klienta OVHcloud](manager.). Następnie kliknij przycisk `...`{.action} w części `RAM`, a następnie na `Zmień ilość pamięci RAM`{.action}.

- Podziel bazę danych, aby ją importować na kilka operacji zamiast jednej (w przypadku pytań dotyczących operacji, które należy przeprowadzić, skontaktuj się z naszą [społecznością użytkowników](https://community.ovh.com/en/) lub [partnerami OVHcloud](partner.). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie.)

- [Zoptymalizuj bazę danych](configure-database-server#optymalizacja-bazy-danych.), a następnie powtórzyć operacje eksportu / importu.

### Nie można uzyskać dostępu do PhpMyAdmin

#### "Access denied for user"

>
> **"mysqli::real_connect(): (HY000/1045): Access denied for user"**
>

Ten komunikat błędu może pojawić się podczas logowania do bazy danych przez [phpMyAdmin](sql_create_database#dostep-do-interfejsu-phpmyadmin.). Wskazuje ona, że dane identyfikacyjne są błędne.

![access_denied_for_user](pma-error-hy000-1045.png){.thumbnail}

W takiej sytuacji [sprawdź wpisane dane](connecting-to-database-on-database-server#w-praktyce.) i w razie potrzeby zmień [hasło do bazy danych](sql_change_password1.).

#### "Too many connections"

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

Maksymalna liczba aktywnych połączeń dla baz danych dostarczanych na hostingu ([StartSQL](hosting-options-startsql.)) wynosi **30**.

Liczba ta wynosi **200** dla baz serwerów [Web Cloud Databases](starting_with_clouddb1.) (Ten parametr można zmienić w części `Konfiguracja`{.action} twojego serwera bazy danych).

Wiadomość ta pojawia się podczas [logowania do phpMyAdmin](sql_create_database#dostep-do-interfejsu-phpmyadmin.), gdy ta maksymalna liczba połączeń jest przekroczona.

W takiej sytuacji powinieneś [zoptymalizować bazy danych](configure-database-server#optymalizacja-bazy-danych.), aby zmniejszyć liczbę aktywnych połączeń.

> [!warning]
>
> W przypadku pytań dotyczących operacji, które należy przeprowadzić, aby zmniejszyć liczbę aktywnych połączeń na Twojej bazie danych, skontaktuj się z naszą [społecznością użytkowników](https://community.ovh.com/en/) lub [partnerami OVHcloud](partner.). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie.
>

#### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

Ten komunikat błędu pojawia się podczas [logowania do phpMyAdmin](connecting-to-database-on-database-server#w-praktyce.), gdy podana nazwa serwera jest nieprawidłowa.

![name_or_service_not_known](pma-error-hy000-1045.png){.thumbnail}

Sprawdź nazwę serwera, który chcesz zarejestrować w [Panelu klienta OVHcloud](manager.).

> [!success]
>
> Jeśli baza danych, do której chcesz się zalogować, wyświetla się w zakładce `Bazy danych`{.action} w części `Hosting`{.action} w Twoim [Panelu klienta OVHcloud](manager.), nazwa, którą należy wpisać jest wpisana w kolumnie `Adres serwera`.
>
> Jeśli chcesz zalogować się do bazy danych na serwerze [Web Cloud Databases](starting_with_clouddb1.), nazwa serwera, która ma zostać wprowadzona jest w zakładce `Informacje ogólne`{.action}, w części `Informacje na temat połączenia`{.action}, `SQL`{.action} i w sekcji `Nazwa hosta`{.action}.
>

## Sprawdź również <a name="go-further"></a>

[Pierwsze kroki z usługą Web Cloud Databases](starting_with_clouddb1.)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](partner.).

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.