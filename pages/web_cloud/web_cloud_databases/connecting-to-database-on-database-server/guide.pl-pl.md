---
title: "Logowanie do bazy danych Twojego serwera baz danych"
excerpt: "Dowiedz się, jak się zalogować do bazy danych"
updated: 2023-10-31
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Możesz sprawdzić zawartość Twojej bazy danych w interfejsie. Aby to zrobić, możesz użyć jednego z dostępnych sposobów logowania się do interfejsu.

**Dowiedz się, jak się zalogować do bazy danych na serwerze baz danych.**

## Wymagania początkowe

- - Posiadanie [instancji Web Cloud Databases](/links/web/databases){.external} (zawartej w ofercie[hostingu www Performance](/links/web/hosting)
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

> [!primary]
>
> Pamiętaj, że rozwiązania [Web Cloud Databases](https://www.ovh.pl/cloud/cloud-databases/){.external} nie dają dostępu do systemu zarządzania bazami danych, ale do baz danych na nim hostowanych.
> <br> - Pamiętaj, że nie ma dostępu "root".
> <br> - Ogólne polecenia SQL działają normalnie, a oprogramowanie takie jak HeidiSQL, SQuirreL lub Adminer jest w pełni kompatybilne.
>

### Logowanie do bazy danych MySQL lub MariaDB 

> [!primary]
>
> Ponieważ MariaDB jest pochodną MySQL, polecenia są dokładnie takie same dla tych 2 typów baz danych.
> 

####  Przez phpMyAdmin OVHcloud 

Zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external} i przejdź do sekcji `Web Cloud`. Kliknij zakładkę `Web Cloud Databases`{.action} w lewej kolumnie, następnie wybierz nazwę Twojego serwera baz danych.

W zakładce `Informacje ogólne` link dostępowy do phpMyAdmin znajduje się w polu **"Administrowanie bazą danych"** pod napisem " Panel użytkownika ".

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}

Zostaniesz przekierowany na stronę logowania phpMyAdmin.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}

Aby zalogować się do bazy danych, wprowadź następujące informacje:

- **Serwer:** podaj *nazwę hosta* serwera baz danych, następnie jego *numer portu*. *Numer portu* musi być oddzielony od *nazwa hosta* znakiem "**spacja**" lub "**:**". Na przykład, jeśli *nazwa hosta* to **aaXXXXX-XXX.eu.clouddb.ovh.net**, a *numer portu* to **12345**, należy wpisać **aaXXXXX-XXX.eu.clouddb.ovh.net:12345** lub **aaXXXXX-XXX.eu.clouddb.ovh.net 12345**. Aby odnaleźć *nazwę hosta* i *numer portu* Twojego serwera Web Cloud Databases, zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external} i przejdź do sekcji `Web Cloud`. Kliknij zakładkę `Web Cloud Databases`{.action} w lewej kolumnie, następnie wybierz nazwę Twojego serwera baz danych. Na stronie `Informacje ogólne`, która się wyświetla, w ramce `Informacje na temat połączenia` znajdziesz *nazwę hosta* i *numer portu*.

- **Użytkownik:** wprowadź *nazwę użytkownika* Twojego serwera baz danych. Aby odnaleźć *nazwę użytkownika* Twojej bazy danych, zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external} i przejdź do sekcji `Web Cloud`. Kliknij zakładkę `Web Cloud Databases`{.action} w lewej kolumnie, następnie wybierz nazwę Twojego serwera baz danych. Na stronie, która się wyświetli kliknij zakładkę `Użytkownicy i uprawnienia`{.action}. Znajdziesz tam tabelę wszystkich użytkowników utworzonych w Twojej usłudze Web Cloud Databases.

- **Hasło:** wprowadź *hasło* powiązane z *nazwą użytkownika*. Jeśli nie pamiętasz *hasła* powiązanego z Twoją *nazwą użytkownika*, zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external} i przejdź do sekcji `Web Cloud`. Kliknij zakładkę `Web Cloud Databases`{.action} w lewej kolumnie, następnie wybierz nazwę Twojego serwera baz danych. Na stronie, która się wyświetli kliknij zakładkę `Użytkownicy i uprawnienia`{.action}. Kliknij przycisk `...`{.action} po prawej stronie *danego użytkownika*, aby `Zmień hasło`{.action}.

> [!warning]
>
> Jeśli zmienisz hasło użytkownika bazy danych, wszystkie aplikacje/witryny sieci Web uzyskujące dostęp do bazy danych muszą zostać odpowiednio zaktualizowane.
>

Jeśli połączenie zakończy się pomyślnie, wyświetli się następna strona phpMyAdmin.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **W przypadku błędu**:
> <br> - błędu #1045 oznacza to, że identyfikacja jest nieprawidłowa. Sprawdź nazwę użytkownika i/lub hasło.
> <br> - błędu #2005, zalecamy sprawdzenie nazwy serwera i jego funkcjonalności.

#### Logowanie do bazy danych poza Panelem klienta

> [!warning]
>
> Jeśli korzystasz z oferty "Web Cloud Databases"/"Prywatny SQL", pamiętaj, aby zezwolić na IP w przewodniku dotyczącym [konfiguracji serwera bazy danych](/pages/web_cloud/web_cloud_databases/configure-database-server).
>

Aby zalogować się do bazy danych, upewnij się, że pobrałeś następujące informacje:

- **Serwer**: nazwa hosta Twojego serwera jest widoczna w zakładce `Informacje ogólne` Twojego serwera baz danych w ramach **"Administracja bazą danych"** w części **SQL** "Nazwa hosta".
- **Użytkownik**: nazwa użytkownika utworzona w zakładce `Użytkownicy i prawa` serwera baz danych.
- **Hasło**: hasło przypisane do danego użytkownika.
- **Port**: port jest widoczny w zakładce `Informacje ogólne` na serwerze baz danych w ramach **"Zarządzanie bazą danych"** w polu "Port" w części **SQL**.
- **Nazwa bazy danych**: bazy danych są wymienione w zakładce `Bazy danych` Twojego serwera baz danych.

##### 1. Połączenie z linii poleceń

```bash
mysql —host=serwer —user=uzytkownik —port=port —password=password nazwa_bazy
```

##### 2. Logowanie przez skrypt PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

##### 3. Połączenie przez oprogramowanie (SQuirreL SQL)

> [!primary]
>
> W naszym przykładzie wykorzystujemy oprogramowanie open source SQquirreL, ale inne interfejsy, takie jak HeidiSQL lub Adminer, są w pełni kompatybilne. 

- Uruchom SQuirreL SQL i kliknij `Aliasy`{.action}, a następnie `+`{.action}

![launch SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Wypełnij poniższe pola i zatwierdź przyciskiem `OK`{.action}:
    - **Name**: Wybierz nazwę
    - **Driver**: Wybierz "MySQL Driver"
    - **URL**: Podaj adres serwera i port w formie jdbc:mysql://server:port
    - **User Name**: Wpisz nazwę użytkownika
    - **Password**: Wpisz hasło

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Zatwierdź ponownie za pomocą przycisku `Connect`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Jesteś teraz zalogowany do bazy danych:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

##### 4. Logowanie przez phpMyAdmin

Możesz skorzystać z własnego interfejsu phpMyAdmin, aby uzyskać dostęp do zawartości bazy danych. W tym celu zainstaluj phpMyAdmin na swoim własnym serwerze lub hostingu. Podczas tej instalacji upewnij się, że informacje dotyczące serwera baz danych i wybranej bazy danych są prawidłowo skonfigurowane, aby phpMyAdmin mógł się do niego zalogować.

### Logowanie do bazy danych PostgreSQL 

Aby zalogować się do bazy danych, upewnij się, że pobrałeś następujące informacje:

- **Serwer**: nazwa hosta Twojego serwera jest widoczna w zakładce `Informacje ogólne` Twojego serwera baz danych w ramach **"Administracja bazą danych"** w części **SQL** "Nazwa hosta".
- **Użytkownik**: nazwa użytkownika utworzona w zakładce `Użytkownicy i prawa` serwera baz danych.
- **Hasło**: hasło przypisane do danego użytkownika.
- **Port**: port jest widoczny w zakładce `Informacje ogólne` na serwerze baz danych w ramach **"Zarządzanie bazą danych"** w polu "Port" w części **SQL**.
- **Nazwa bazy danych**: bazy danych są wymienione w zakładce `Bazy danych` Twojego serwera baz danych.

#### Połączenie z linii poleceń

```bash
psql --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base
```

#### Logowanie przez skrypt PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

#### Połączenie przez oprogramowanie (SQuirreL SQL)

> [!primary]
>
> W naszym przykładzie wykorzystujemy oprogramowanie open source SQquirreL, ale inne interfejsy, takie jak HeidiSQL lub Adminer, są w pełni kompatybilne.

- Uruchom SQuirreL SQL i kliknij `Aliasy`{.action}, a następnie `+`{.action}

![launch SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Wypełnij poniższe pola i zatwierdź przyciskiem `OK`{.action}:
    - **Name**: Wybierz nazwę
    - **Driver**: Wybierz "PostgreSQL"
    - **URL**: Podaj adres serwera i port w formie jdbc:postgresql://server:port/database
    - **User Name**: Wpisz nazwę użytkownika
    - **Password**: Wpisz hasło

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Zatwierdź ponownie za pomocą przycisku `Connect`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Jesteś teraz zalogowany do bazy danych:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 