---
title: "Rozwiąż najczęstsze błędy związane z bazami danych"
excerpt: "Zdiagnozuj najczęstsze przypadki błędów związanych z bazami danych"
updated: 2026-03-31
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

Korzystanie z baz danych może spowodować pewne nieprawidłowości na Twojej stronie WWW lub w [Panelu klienta OVHcloud](/links/manager), jak również w interfejsie [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database).

**Dowiedz się, jak usunąć błędy związane z bazami danych na hostingu www OVHcloud.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Jednakże w przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner) lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) tego przewodnika.
>

## Wymagania początkowe

- Posiadanie [hostingu www OVHcloud](/links/web/hosting).
- Korzystanie z jednej z naszych ofert baz danych [Web Cloud](/links/web/hosting-options-startsql) lub [Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

### "Błąd podczas logowania do bazy danych"

![error_establishing_a_DB_connection](/pages/assets/screens/other/browsers/errors/error-establishing-a-db-connection.png){.thumbnail}

#### Zweryfikuj zdarzenia w trakcie

Sprawdź najpierw na stronie [Web Cloud Status](https://web-cloud.status-ovhcloud.com/), czy Twój datacenter, klaster hostingu sieciowego, serwer Web Cloud Databases lub baza danych nie są dotknięte awarią infrastruktury OVHcloud.

**Kliknij poszukiwaną informację, aby wyświetlić treść.**

<!-- CP-STEPS-START:find-datacenter -->
/// details | Znaleźć datacenter Twojego hostingu

Kliknij na poniższe karty, aby wyświetlić kolejno każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), a następnie wybierz odpowiedni hosting.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> W zakładce `Informacje ogólne`{.action} odszukaj `Data center`.

///
<!-- CP-STEPS-END:find-datacenter -->

/// details | Znaleźć klaster i filer Twojego hostingu

Zapoznaj się z naszym przewodnikiem "[Poznaj klaster i filer Twojego hostingu](/pages/web_cloud/web_hosting/how_to_know_cluster_and_filer)".

///

<!-- CP-STEPS-START:find-wcdb-server-name -->
/// details | Znaleźć nazwę serwera Web Cloud Databases

Kliknij na poniższe karty, aby wyświetlić kolejno każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), a następnie wybierz odpowiednią usługę.
>>
>> ![Wybór serwera Web Cloud Databases w Panelu klienta OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Odszukaj `Nazwa hosta` w sekcji `SQL` w polu `Informacje na temat połączenia`.

///
<!-- CP-STEPS-END:find-wcdb-server-name -->

/// details | Znaleźć serwer bazy danych hostingu

Zapoznaj się z naszym przewodnikiem "[Odnaleźć serwer bazy danych](/pages/web_cloud/web_hosting/sql_find_server)".

///

#### Sprawdź dane do logowania do bazy danych <a name="config_file"></a>

Zaloguj się przez [FTP](/pages/web_cloud/web_hosting/ftp_connection) do przestrzeni dyskowej plików na Twoim hostingu i znajdź plik konfiguracyjny Twojej strony (np. w przypadku strony WordPress plik **wp-config.php** znajduje się w folderze zawierającym Twoją stronę).

> [!warning]
>
> Wybór i konfiguracja pliku zawierającego dane do logowania do bazy danych jest ściśle związana z wybranym edytorem treści, a nie z OVHcloud.
>
> Zalecamy zatem skontaktowanie się z wydawcą [CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules) używanym do założenia strony lub skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner) w razie potrzeby. Nie będziemy w stanie udzielić wsparcia w tym zakresie.
>

Następnie sprawdź **dokładną** zgodność między identyfikatorami logowania do [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#dostep-do-interfejsu-phpmyadmin) a danymi w pliku konfiguracyjnym Twojej strony.

W razie potrzeby zmień [hasło do Twojej bazy danych](/pages/web_cloud/web_hosting/sql_change_password).

#### Przykład dla WordPress

Jeśli Twoja strona wyświetla komunikat **"Błąd podczas logowania do bazy danych"** i nie dotyczy jej [problem](https://web-cloud.status-ovhcloud.com/), zaloguj się przez [FTP](/pages/web_cloud/web_hosting/ftp_connection) do hostingu, a następnie otwórz katalog zawierający Twoją stronę (domyślnie jest to folder `www`).

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

<!-- CP-STEPS-START:check-wp-db-credentials -->
Kliknij na poniższe karty, aby wyświetlić kolejno każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), a następnie wybierz odpowiedni hosting.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Bazy danych`{.action}, następnie sprawdź zgodność między elementami wyświetlanymi a znajdującymi się w pliku `wp-config.php`:
>>
>> - **my_database** musi odpowiadać temu, co jest zapisane w `Nazwa bazy`;
>> - **my_user** musi odpowiadać temu, co jest zapisane w `Nazwa użytkownika`;
>> - **my_password** odnosi się do [hasła bazy danych](/pages/web_cloud/web_hosting/sql_change_password);
>> - **my_server.mysql.db** musi odpowiadać temu, co jest zapisane w `Adres serwera`.
<!-- CP-STEPS-END:check-wp-db-credentials -->

> [!primary]
>
> Jeśli operacje te nie pozwalają przywrócić dostępu do Twojej strony WWW, [zapisz bazę danych](/pages/web_cloud/web_hosting/sql_database_export), a następnie [przywróć ją do wcześniejszej daty](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#1-przywroc-istniejaca-kopie-zapasowa) w [Panelu klienta OVHcloud](/links/manager).
>
> W razie potrzeby skontaktuj się z [wyspecjalizowanym dostawcą usług](/links/partner). Nie będziemy w stanie udzielić wsparcia w tym zakresie.
>

### Przekroczenie dozwolonego rozmiaru bazy danych

Otrzymałeś e-mail z naszych usług informujący, że ilość danych na Twojej bazie przekracza dozwolony limit. Twoja baza została przeczytana w trybie tylko do odczytu. Dzięki temu nie można wprowadzać modyfikacji na Twojej stronie WWW.

![database-overquota-notification-email](/pages/assets/screens/email-sending-to-customer/databases/overquota-db.png){.thumbnail}

Odblokuj bazę danych na trzy sposoby:

#### Metoda 1: przejdź na wyższą ofertę

Jeśli posiadasz formułę **Starter** lub **Perso**, w tej sytuacji zalecamy przejście na [wyższą ofertę hostingową](/links/web/hosting). Zmiana abonamentu zwiększy rozmiar bazy danych, dzięki czemu będzie ona automatycznie odblokowana. Metoda ta jest najprostsza i nie wymaga szczególnych kompetencji technicznych.

> [!warning]
>
> Zwiększenie rozmiaru bazy danych może być związane z nieprawidłowym działaniem wewnętrznego kodu Twojej strony WWW.
>
> Nieprawidłowości mogą spowodować stały wzrost rozmiaru bazy danych. W takim przypadku zmiana oferty hostingowej byłaby nieskuteczna.
>
> Zalecamy zatem, aby w przypadku zaobserwowania nagłego wzrostu rozmiaru bazy danych lub gdy posiadasz stronę typu "blog", która w normalnych warunkach nie jest konsumentem danych, niezwłocznie skontaktować się z [wyspecjalizowanym dostawcą](/links/partner). Nie będziemy w stanie udzielić Ci wsparcia w tym zakresie.
>

<!-- CP-STEPS-START:upgrade-plan -->
Aby dokonać tej zmiany, kliknij na poniższe karty, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), a następnie wybierz odpowiedni hosting.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij przycisk `...`{.action} w rubryce `Pakiet` po prawej stronie ekranu.
>>
> **Krok 3**
>>
>> Kliknij `Zmień ofertę`{.action}.
<!-- CP-STEPS-END:upgrade-plan -->

Jeśli korzystasz z oferty **Performance**, sprawdź [metodę 2](#methode2).

#### Metoda 2: migracja danych na wyższą bazę danych <a name="methode2"></a>

Możesz również przenieść dane na nową bazę:

- Zamów w razie potrzeby [bazę danych](/links/web/hosting-options-startsql) o wyższej wielkości, a następnie uruchom [tworzenie](/pages/web_cloud/web_hosting/sql_create_database).
- [Zduplikuj zawartość starej bazy danych](/pages/web_cloud/web_hosting/copy_database) w nowej **lub** wykonaj [eksport swoich danych](/pages/web_cloud/web_hosting/sql_database_export), następnie [zaimportuj je](/pages/web_cloud/web_hosting/sql_importing_mysql_database) w nowej bazie.
- Wprowadź dane dostępowe nowej bazy danych do [pliku konfiguracyjnego](#config_file) swojej strony.

> [!primary]
>
> Jeśli dysponujesz hostingiem **Performance**, możesz również [włączyć za darmo Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

#### Metoda 3: usuń niepotrzebne dane

Po utworzeniu [kopii zapasowej bazy danych](/pages/web_cloud/web_hosting/sql_database_export) zaloguj się do swojego interfejsu [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#dostep-do-interfejsu-phpmyadmin), aby usunąć niepotrzebne dane za pomocą poleceń Drop, Delete i Truncate.

<!-- CP-STEPS-START:recalculate-quota-method3 -->
Aby ponownie przeliczyć rozmiar, kliknij na poniższe karty, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), a następnie wybierz odpowiedni hosting.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Bazy danych`{.action}, a następnie przycisk `...`{.action} obok odpowiedniej bazy danych.
>>
> **Krok 3**
>>
>> Kliknij `Przelicz rozmiar bazy`{.action}.
<!-- CP-STEPS-END:recalculate-quota-method3 -->

> [!warning]
>
> Operacja ta wymaga wysokich umiejętności technicznych. W razie potrzeby zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner). Nie będziemy w stanie udzielić wsparcia w tym zakresie.
>

#### Metoda 4: zoptymalizuj bazę danych

Aby zoptymalizować bazę danych, postępuj zgodnie z instrukcjami zawartymi w przewodniku "[Konfiguracja serwera baz danych](/pages/web_cloud/web_cloud_databases/configure-database-server#optymalizacja-baz-danych)".

<!-- CP-STEPS-START:recalculate-quota-method4 -->
Aby ponownie przeliczyć rozmiar, kliknij na poniższe karty, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), a następnie wybierz odpowiedni hosting.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Bazy danych`{.action}, a następnie przycisk `...`{.action} obok odpowiedniej bazy danych.
>>
> **Krok 3**
>>
>> Kliknij `Przelicz rozmiar bazy`{.action}.
<!-- CP-STEPS-END:recalculate-quota-method4 -->

> [!warning]
>
> Jeśli dostarczone porady dotyczące optymalizacji Twojej bazy danych nie wystarczą, aby odblokować dostęp do Twojej strony, zalecamy kontakt z naszą [społecznością użytkowników](/links/community) lub [partnerami OVHcloud](/links/partner). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie.
>

### Przekroczenie pojemności pamięci RAM (tylko Web Cloud Databases)

Poniższy komunikat wskazuje, że Twój serwer [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) wykorzystał zbyt dużą ilość zasobów w infrastrukturze OVHcloud:

![ram-exceeded](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/ram-exceeded.png){.thumbnail}

<!-- CP-STEPS-START:increase-ram-wcdb -->
Aby zwiększyć [ilość pamięci RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#zmiana-oferty-serwera-baz-danych), kliknij na poniższe karty, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), a następnie wybierz odpowiednią usługę.
>>
>> ![Wybór serwera Web Cloud Databases w Panelu klienta OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> W zakładce `Informacje ogólne`{.action} odszukaj rubrykę `RAM`.
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} w rubryce `RAM`, a następnie `Zmień ilość pamięci RAM`{.action}.
<!-- CP-STEPS-END:increase-ram-wcdb -->

> [!warning]
>
> Aby zwiększyć pamięć RAM, nie należy włączać usługi Web Cloud Databases za pomocą hostingu Performance. Jeśli chcesz zwiększyć ilość pamięci RAM bazy danych zawartej w [ofertach Performance](/links/web/hosting-performance-offer), musisz ją odłączyć.
>
> Aby odłączyć bazę danych, zapoznaj się z naszym przewodnikiem "[Odłączenie Web Cloud Databases od hostingu](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
>

Możesz również zoptymalizować bazę danych, postępując zgodnie z instrukcjami zawartymi w przewodniku "[Konfiguracja serwera baz danych](/pages/web_cloud/web_cloud_databases/configure-database-server#optymalizacja-bazy-danych)".

> [!primary]
>
> Jeśli napotkasz trudności z ograniczeniem wykorzystania zasobów na serwerze baz danych i nie chcesz ich zwiększać, skontaktuj się z naszą [społecznością użytkowników](/links/community) lub [partnerami OVHcloud](/links/partner). Nie będziemy w stanie udzielić wsparcia w tym zakresie.
>

### Błędy w imporcie baz danych

#### "Access denied for user to database"

>
> **"#1044 - Access denied for user to database"**
>

Ten komunikat błędu oznacza, że baza danych, którą chcesz importować, zawiera nieautoryzowane elementy na infrastrukturze współdzielonej OVHcloud.

<!-- CP-STEPS-START:check-db-empty-before-import -->
Upewnij się najpierw, że baza danych jest pusta. W tym celu kliknij na poniższe karty, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), a następnie wybierz odpowiedni hosting.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Bazy danych`{.action}, a następnie przycisk `...`{.action} obok odpowiedniej bazy danych i `Przelicz rozmiar bazy`{.action}.
>>
> **Krok 3**
>>
>> Jeśli baza danych nie jest pusta, [zapisz obecne dane](/pages/web_cloud/web_hosting/sql_database_export) i usuń je przed ponownym uruchomieniem importu.
>>
>> Możesz również zaznaczyć kratkę `Usuń aktualną zawartość bazy danych`{.action} tuż przed [uruchomieniem importu](/pages/web_cloud/web_hosting/sql_importing_mysql_database#import-twojej-kopii-zapasowej-w-panelu-klienta):
>>
>> ![import-empty-current-db](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/import-empty-current-db.png){.thumbnail}
<!-- CP-STEPS-END:check-db-empty-before-import -->

W razie potrzeby skontaktuj się z naszą [społecznością użytkowników](/links/community) lub [wyspecjalizowanym dostawcą](/links/partner). Nie będziemy w stanie udzielić wsparcia w zakresie korekty tej nieprawidłowości.

> [!primary]
>
> **Jakie elementy w skrypcie importu bazy danych mogą spowodować błąd "#1044 - Access denied for user to database"?**

Posiadanie **"trigger"** w skrypcie importu bazy danych nie jest dozwolone na serwerach hostingu www OVHcloud. W takiej sytuacji zaimportuj bazę danych na serwer [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

Ponadto nie zezwala się na następujące zapytanie:

```sql
CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
```

Zastąp ją:

```sql
USE `Database-Name`;
```

(`Database-Name`: wpisz nazwę bazy danych z [Panelu klienta OVHcloud](/links/manager))

#### "MySQL server has gone away"

>
> **"ERROR 2006 : MySQL server has gone away"**
>

Ten komunikat błędu pojawia się podczas [importu bazy danych](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#1-przywroc-istniejaca-kopie-zapasowa) na serwerze [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Wiąże się to głównie ze zbyt dużą ilością danych do importu lub z brakiem optymalizacji zapytań SQL w skrypcie importu.

Aby usunąć tę anomalię, możesz:

<!-- CP-STEPS-START:increase-ram-for-import -->
- Zwiększyć [ilość pamięci RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#monitoruj-zuzyta-pamiec-ram). W tym celu kliknij na poniższe karty, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), a następnie wybierz odpowiednią usługę.
>>
>> ![Wybór serwera Web Cloud Databases w Panelu klienta OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> W zakładce `Informacje ogólne`{.action} odszukaj rubrykę `RAM`.
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} w rubryce `RAM`, a następnie `Zmień ilość pamięci RAM`{.action}.
<!-- CP-STEPS-END:increase-ram-for-import -->

- Podziel bazę danych, aby ją importować na kilka operacji zamiast jednej (w przypadku pytań dotyczących operacji, które należy przeprowadzić, skontaktuj się z naszą [społecznością użytkowników](/links/community) lub [partnerami OVHcloud](/links/partner). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie.)

- [Zoptymalizuj bazę danych](/pages/web_cloud/web_cloud_databases/configure-database-server#optymalizacja-bazy-danych), a następnie powtórz operacje eksportu/importu.

### Nie można uzyskać dostępu do phpMyAdmin

#### "Access denied for user"

>
> **"mysqli::real_connect(): (HY000/1045): Access denied for user"**
>

Ten komunikat błędu może pojawić się podczas logowania do bazy danych przez [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#dostep-do-interfejsu-phpmyadmin). Wskazuje, że dane identyfikacyjne są błędne.

![access_denied_for_user](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-1045.png){.thumbnail}

W takiej sytuacji [sprawdź wpisane dane](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#w-praktyce) i w razie potrzeby zmień [hasło do bazy danych](/pages/web_cloud/web_hosting/sql_change_password).

#### "Too many connections"

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

Maksymalna liczba aktywnych połączeń dla baz danych dostarczanych na hostingu ([StartSQL](/links/web/hosting-options-startsql)) wynosi **30**.

Liczba ta wynosi **200** dla baz serwerów [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). (Ten parametr można zmienić w części `Konfiguracja`{.action} twojego serwera bazy danych).

Wiadomość ta pojawia się podczas [logowania do phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#dostep-do-interfejsu-phpmyadmin), gdy ta maksymalna liczba połączeń jest przekroczona.

W takiej sytuacji powinieneś [zoptymalizować bazy danych](/pages/web_cloud/web_cloud_databases/configure-database-server#optymalizacja-bazy-danych), aby zmniejszyć liczbę aktywnych połączeń.

> [!warning]
>
> W przypadku pytań dotyczących operacji, które należy przeprowadzić, aby zmniejszyć liczbę aktywnych połączeń na Twojej bazie danych, skontaktuj się z naszą [społecznością użytkowników](/links/community) lub [partnerami OVHcloud](/links/partner). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie.
>

#### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

Ten komunikat błędu pojawia się podczas [logowania do phpMyAdmin](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#w-praktyce), gdy podana nazwa serwera jest nieprawidłowa.

![name_or_service_not_known](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-2002.png){.thumbnail}

Sprawdź nazwę odpowiedniego serwera.

**Kliknij odpowiednią sytuację, aby wyświetlić treść.**

<!-- CP-STEPS-START:find-server-name-hosting -->
/// details | Baza danych na hostingu

Kliknij na poniższe karty, aby wyświetlić kolejno każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), a następnie wybierz odpowiedni hosting.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Bazy danych`{.action}. Nazwa serwera, którą należy wpisać, jest zapisana w kolumnie `Adres serwera`.

///
<!-- CP-STEPS-END:find-server-name-hosting -->

<!-- CP-STEPS-START:find-server-name-wcdb -->
/// details | Baza danych na serwerze Web Cloud Databases

Kliknij na poniższe karty, aby wyświetlić kolejno każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), a następnie wybierz odpowiednią usługę.
>>
>> ![Wybór serwera Web Cloud Databases w Panelu klienta OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> W zakładce `Informacje ogólne`{.action} nazwa serwera do wpisania znajduje się w sekcji `Informacje na temat połączenia`, pod `SQL`, w polu `Nazwa hosta`.

///
<!-- CP-STEPS-END:find-server-name-wcdb -->

### Nie można nawiązać połączenia z bazą danych Cloud Databases

Serwer [Web Cloud Databases](/products/web-cloud-clouddb) umożliwia zalogowanie się do [Twoich baz danych](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) z Twojego komputera lub serwera spoza infrastruktury OVHcloud.

Jeśli to połączenie nie jest możliwe, rozpocznij od sprawdzenia, czy [autoryzowano publiczny adres IP](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) do łączenia się z serwerem baz danych.

Jeśli ta operacja została przeprowadzona pomyślnie, skontaktuj się z Dostawcą Internetu lub [partnerami OVHcloud](/links/partner). Nie będziemy w stanie udzielić Ci pomocy w tej sytuacji.

## Sprawdź również <a name="go-further"></a>

[Pierwsze kroki z usługą Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Dołącz do [grona naszych użytkowników](/links/community).
