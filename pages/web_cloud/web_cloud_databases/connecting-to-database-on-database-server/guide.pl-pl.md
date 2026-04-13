---
title: "Web Cloud Databases - Logowanie do bazy danych"
excerpt: "Dowiedz się, jak połączyć się z bazą danych w ramach rozwiązania Web Cloud Databases"
updated: 2026-03-24
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

Zawartość bazy danych można przeglądać za pomocą interfejsu. Istnieje kilka sposobów połączenia się z bazą danych.

**Dowiedz się, jak połączyć się z bazą danych na serwerze baz danych.**

## Wymagania początkowe

- Posiadanie [instancji Web Cloud Databases](/links/web/databases) (zawartej w ofercie [hostingu www Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wybierz usługę bazy danych

---
<!-- CP-NAV-END:web-cloud-databases -->

## W praktyce

> [!primary]
>
> Rozwiązania [Web Cloud Databases](/links/web/databases) nie dają dostępu do samego systemu zarządzania bazami danych, lecz do baz danych na nim hostowanych.
>
> - Nie ma dostępu super użytkownika "root".
> - Ogólne polecenia SQL działają normalnie, a oprogramowanie takie jak HeidiSQL, SQuirreL SQL lub Adminer jest w pełni kompatybilne.
>

### Połączenie z bazą danych MySQL lub MariaDB

> [!primary]
>
> Ponieważ MariaDB jest pochodną MySQL, polecenia są dokładnie takie same dla obu typów baz danych.
>

#### Połączenie przez phpMyAdmin OVHcloud

<!-- CP-STEPS-START:phpmyadmin-ovhcloud-connect -->
Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Pobierz następujące informacje dotyczące połączenia:
>>
>> - **Serwer (nazwa hosta) i port:** widoczne w zakładce `Informacje ogólne`{.action}, sekcja "Informacje na temat połączenia".
>> - **Nazwa użytkownika:** widoczna w zakładce `Użytkownicy i uprawnienia`{.action}.
>> - **Hasło:** hasło powiązane z użytkownikiem. Jeśli nie pamiętasz hasła, przejdź do zakładki `Użytkownicy i uprawnienia`{.action}, kliknij `...`{.action} po prawej stronie danego użytkownika, a następnie `Zmień hasło`{.action}.
>>
>> > [!warning]
>> >
>> > Jeśli zmienisz hasło użytkownika bazy danych, wszystkie aplikacje/strony internetowe korzystające z tej bazy danych muszą zostać odpowiednio zaktualizowane.
>>
> **Krok 3**
>>
>> W zakładce `Informacje ogólne`{.action} odszukaj sekcję **Administrowanie bazą danych** i kliknij link phpMyAdmin pod napisem **Panel użytkownika**.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}
>>
> **Krok 4**
>>
>> Na stronie logowania phpMyAdmin wprowadź informacje pobrane w kroku 2:
>>
>> ![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}
>>
>> - **Serwer:** wpisz *nazwę hosta*, a następnie *numer portu*, oddzielone znakiem "**:**" lub "**spacją**". Na przykład: **aaXXXXX-XXX.eu.clouddb.ovh.net:12345**.
>> - **Użytkownik:** wpisz *nazwę użytkownika*.
>> - **Hasło:** wpisz *hasło*.
<!-- CP-STEPS-END:phpmyadmin-ovhcloud-connect -->

Jeśli połączenie zakończy się pomyślnie, wyświetli się następująca strona.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **W przypadku błędu:**
>
> - Błąd #1045 oznacza, że dane logowania są nieprawidłowe. Sprawdź nazwę użytkownika i/lub hasło.
> - Błąd #2005 oznacza, że należy sprawdzić nazwę serwera oraz czy działa on prawidłowo.

#### Połączenie z bazą danych poza Panelem klienta

> [!warning]
>
> Jeśli korzystasz z rozwiązania "Web Cloud Databases"/"Prywatny SQL", pamiętaj, aby autoryzować swój adres IP, korzystając z przewodnika dotyczącego [konfiguracji serwera bazy danych](/pages/web_cloud/web_cloud_databases/configure-database-server#gerer-vos-acces).

<!-- CP-STEPS-START:mysql-external-connect -->
Kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Pobierz następujące informacje dotyczące połączenia:
>>
>> - **Serwer (nazwa hosta):** widoczny w zakładce `Informacje ogólne`{.action}, sekcja **"Administrowanie bazą danych"**, pole "Nazwa hosta" w części **SQL**.
>> - **Port:** widoczny w tym samym miejscu, pole "Port" w części **SQL**.
>> - **Nazwa użytkownika:** widoczna w zakładce `Użytkownicy i uprawnienia`{.action}.
>> - **Hasło:** hasło powiązane z danym użytkownikiem.
>> - **Nazwa bazy danych:** widoczna w zakładce `Bazy danych`{.action}.
<!-- CP-STEPS-END:mysql-external-connect -->

**Kliknij wybraną metodę połączenia, aby wyświetlić jej zawartość.**

/// details | Połączenie z poziomu wiersza poleceń

```bash
mysql --host=server --user=user --port=port --password=password database_name
```

///

/// details | Połączenie przez skrypt PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Połączenie przez oprogramowanie (SQuirreL SQL)

> [!primary]
>
> W naszym przykładzie wykorzystujemy oprogramowanie open source SQuirreL, ale inne interfejsy, takie jak HeidiSQL lub Adminer, są w pełni kompatybilne.

- Uruchom SQuirreL SQL i kliknij `Aliases`{.action}, a następnie `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Wypełnij poniższe pola i zatwierdź przyciskiem `OK`{.action}:
    - **Name**: Wybierz nazwę
    - **Driver**: Wybierz "MySQL Driver"
    - **URL**: Podaj adres serwera i port w formacie jdbc:mysql://server:port
    - **User Name**: Wpisz nazwę użytkownika
    - **Password**: Wpisz hasło

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Zatwierdź ponownie za pomocą przycisku `Połącz`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Jesteś teraz połączony z bazą danych:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

/// details | Połączenie przez phpMyAdmin

Możesz skorzystać z własnego interfejsu phpMyAdmin, aby przeglądać zawartość bazy danych. W tym celu zainstaluj phpMyAdmin na swoim własnym serwerze lub hostingu. Podczas instalacji upewnij się, że informacje dotyczące serwera baz danych i wybranej bazy danych są prawidłowo skonfigurowane, aby phpMyAdmin mógł się z nim połączyć.

///

### Połączenie z bazą danych PostgreSQL

<!-- CP-STEPS-START:postgresql-connect -->
Kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Pobierz następujące informacje dotyczące połączenia:
>>
>> - **Serwer (nazwa hosta):** widoczny w zakładce `Informacje ogólne`{.action}, sekcja **"Administrowanie bazą danych"**, pole "Nazwa hosta" w części **SQL**.
>> - **Port:** widoczny w tym samym miejscu, pole "Port" w części **SQL**.
>> - **Nazwa użytkownika:** widoczna w zakładce `Użytkownicy i uprawnienia`{.action}.
>> - **Hasło:** hasło powiązane z danym użytkownikiem.
>> - **Nazwa bazy danych:** widoczna w zakładce `Bazy danych`{.action}.
<!-- CP-STEPS-END:postgresql-connect -->

**Kliknij wybraną metodę połączenia, aby wyświetlić jej zawartość.**

/// details | Połączenie z poziomu wiersza poleceń

```bash
psql --host=server --port=port --user=user --password=password database_name
```

///

/// details | Połączenie przez skrypt PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Połączenie przez oprogramowanie (SQuirreL SQL)

> [!primary]
>
> W naszym przykładzie wykorzystujemy oprogramowanie open source SQuirreL, ale inne interfejsy, takie jak HeidiSQL lub Adminer, są w pełni kompatybilne.

- Uruchom SQuirreL SQL i kliknij `Aliases`{.action}, a następnie `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Wypełnij poniższe pola i zatwierdź przyciskiem `OK`{.action}:
    - **Name**: Wybierz nazwę
    - **Driver**: Wybierz "PostgreSQL"
    - **URL**: Podaj adres serwera i port w formacie jdbc:postgresql://server:port/database
    - **User Name**: Wpisz nazwę użytkownika
    - **Password**: Wpisz hasło

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Zatwierdź ponownie za pomocą przycisku `Połącz`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Jesteś teraz połączony z bazą danych:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

## Sprawdź również

[Hosting WWW - Moja baza danych jest zapełniona, co robić?](/pages/web_cloud/web_hosting/sql_overquota_database)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
