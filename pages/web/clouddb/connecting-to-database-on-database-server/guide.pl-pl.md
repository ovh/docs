---
title: 'Logowanie do bazy danych Twojego serwera baz danych'
slug: polaczenie-bazy-danych-serwer-bdd
excerpt: 'Dowiedz się, jak się zalogować do bazy danych'
section: Konfiguracja
order: 03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 01-03-2023**

## Wprowadzenie

Możesz sprawdzić zawartość Twojej bazy danych w interfejsie. Aby to zrobić, możesz użyć jednego z dostępnych sposobów logowania się do interfejsu.

**Dowiedz się, jak się zalogować do bazy danych na serwerze baz danych.**

## Wymagania początkowe

- - Posiadanie [instancji Web Cloud Databases](https://www.ovh.com/pl/cloud/cloud-databases/){.external} (zawartej w ofercie[hostingu www Performance](https://www.ovhcloud.com/pl/web-hosting/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

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

Przejdź do Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Kliknij kartę `Web`, a następnie `Baza danych`{.action}. Wybierz nazwę serwera baz danych.

W zakładce `Informacje ogólne` link w polu **"Zarządzanie bazą danych"** znajduje się pod nagłówkiem "Interfejs użytkownika".

![private-sql](images/private-sql-phpma01.png){.thumbnail}

Zostaniesz przekierowany na stronę logowania phpMyAdmin.

![private-sql](images/private-sql-phpma02.png){.thumbnail}

- **Serwer**: wprowadź nazwę hosta widocznego w zakładce `Informacje ogólne` w polu **"Zarządzanie bazą danych"** w polu "Nazwa hosta" w części **SQL**.
- **Użytkownik**: wprowadź nazwę użytkownika utworzoną w karcie `Użytkownicy i uprawnienia` serwera baz danych.
- **Hasło**: wprowadź hasło przypisane do danego użytkownika.
- **Port**: wprowadź port podany w karcie `Informacje ogólne` w polu **"Zarządzanie bazą danych"** pod nagłówkiem "Port" w części **SQL**.

Jeśli połączenie zakończy się pomyślnie, wyświetli się następna strona phpMyAdmin.

![private-sql](images/private-sql-phpma03.png){.thumbnail}


> [!warning]
>
> **W przypadku błędu**:
> <br> - błędu #1045 oznacza to, że identyfikacja jest nieprawidłowa. Sprawdź nazwę użytkownika i/lub hasło.
> <br> - błędu #2005, zalecamy sprawdzenie nazwy serwera i jego funkcjonalności.

#### Logowanie do bazy danych poza Panelem klienta

> [!warning]
>
> Jeśli korzystasz z oferty "Web Cloud Databases"/"Prywatny SQL", pamiętaj, aby zezwolić na IP w przewodniku dotyczącym [konfiguracji serwera bazy danych](https://docs.ovh.com/pl/clouddb/konfiguracja-optymalizacja-serwera-bazy-danych/).
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

![launch SQL](images/1.png){.thumbnail}

- Wypełnij poniższe pola i zatwierdź przyciskiem `OK`{.action}:
    - **Name**: Wybierz nazwę
    - **Driver**: Wybierz "MySQL Driver"
    - **URL**: Podaj adres serwera i port w formie jdbc:mysql://server:port
    - **User Name**: Wpisz nazwę użytkownika
    - **Password**: Wpisz hasło

![config connection](images/2.png){.thumbnail}

- Zatwierdź ponownie za pomocą przycisku `Connect`{.action}

![valid connection](images/3.png){.thumbnail}

Jesteś teraz zalogowany do bazy danych:

![config connection](images/4.PNG){.thumbnail}


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

![launch SQL](images/1.png){.thumbnail}

- Wypełnij poniższe pola i zatwierdź przyciskiem `OK`{.action}:
    - **Name**: Wybierz nazwę
    - **Driver**: Wybierz "PostgreSQL"
    - **URL**: Podaj adres serwera i port w formie jdbc:postgresql://server:port/database
    - **User Name**: Wpisz nazwę użytkownika
    - **Password**: Wpisz hasło

![config connection](images/2.png){.thumbnail}

- Zatwierdź ponownie za pomocą przycisku `Connect`{.action}

![valid connection](images/3.png){.thumbnail}

Jesteś teraz zalogowany do bazy danych:

![config connection](images/4.PNG){.thumbnail}

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 

