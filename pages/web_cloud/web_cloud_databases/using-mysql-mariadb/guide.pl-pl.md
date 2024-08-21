---
title: MySQL i MariaDB
excerpt: Korzystanie z baz danych
updated: 2023-07-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Chcesz korzystać z MySQL lub MariaDB dla swoich baz danych?

### Czym jest baza danych MySQL?

MySQL to system zarządzania relacyjnymi bazami danych przygotowany z myślą o zwiększonej wydajności odczytu, w przeciwieństwie do pozostałych systemów.

Jest to silnik open source firmy Oracle.

### Czym jest baza danych MariaDB?

MariaDB to pochodna systemu zarządzania bazami danych MySQL.

Silnik ten jest w 100% kompatybilny. Wszystkie bugi oraz roadmapy są w pełni dostępne, w przeciwieństwie do wersji Oracle.

**Dowiedz się, jak tworzyć bazy danych MySQL lub MariaDB**
  
## Wymagania początkowe

- Posiadanie [instancji Web Cloud Databases](/links/web/databases){.external} (zawartej w ofercie[hostingu www Performance](/links/web/hosting)
- Dostęp do [Panelu klienta OVHcloud](/links/manager)
- Przeglądanie [przewodnik dotyczący uruchomienia usługi Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

## W praktyce

### Logowanie do bazy danych

> [!primary]
>
> Oferta ta nie daje dostępu do hosta, lecz do baz danych, które są na nim zainstalowane. Podstawowe polecenia SQL działają bez problemu, a oprogramowanie typu HeidiSQL i SQuirreL SQL jest w pełni kompatybilne.
> 

> [!primary]
>
> MariaDB to pochodna MySQL, więc poszczególne polecenia są identyczne dla tych dwóch typów baz danych.
> 

Aby zalogować się do bazy danych, musisz dysponować:

- Posiadanie adresu instancji Web Cloud Databases
- Posiadanie portu dla instancji Web Cloud Databases
- Posiadanie nazwy użytkownika instancji Web Cloud Databases
- Hasło przypisane do użytkownika
- Posiadanie bazy danych

Wszystkie te informacje są dostępne w [Panelu klienta OVHcloud](/links/manager).

Zapoznaj się również z tym przewodnikiem: [Pierwsze kroki z usługą Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

#### Logowanie z linii polecen

```bash
mysql --host=serwer --user=użytkownik --port=port --password=password nazwa_bazy
```

#### Logowanie przez skrypt PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

#### Logowanie z poziomu oprogramowania (SQuirreL SQL)

- Uruchom program SQuirreL SQL i kliknij na `Aliases`{.action}, i na `+`{.action}.

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Wypełnij poniższe pola i zatwierdź za pomocą przycisku `OK`{.action}:
    - **Name**: Wybierz nazwę
    - **Driver**: Wybierz `MySQL Driver`
    - **URL**: Wskaż adres serwera i port w formie `jdbc:mysql://server:port`
    - **User Name**: Wskaż nazwę użytkownika
    - **Password**: Wskaż hasło

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Zatwierdź za pomocą przycisku `Connect`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Połączyłeś się z bazą danych:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

#### Logowanie przez interfejs phpMyAdmin

Możesz korzystać z phpMyAdmin do przeglądania zawartości bazy danych. W tym celu zainstaluj phpMyAdmin na Twoim własnym serwerze lub hostingu. Podczas tej instalacji skonfiguruj informacje dotyczące Twojego serwera Web Cloud Databases i wybranej bazy danych, aby phpMyAdmin mógł się do niego zalogować.

### Eksportuj i zaimportuj bazę danych MySQL lub MariaDB

- **Eksportowanie bazy danych z linii polecen**

```bash
mysqldump --host=serwer --user=użytkownik --port=port --password=password nazwa_bazy > nazwa_bazy.sql
```

- **Importowanie bazy danych z linii polecen**

```bash
cat nazwa_bazy.sql | mysql --host=serwer --user=użytkownik --port=port --password=password nazwa_bazy
```

> [!primary]
>
> W niektórych przypadkach pamięć RAM dostępna w Twojej instancji Web Cloud Databases może nie powodować odpowiedniego eksportu lub importu. W takim przypadku zalecamy użycie narzędzia OVHcloud w Panelu klienta. W razie potrzeby skorzystaj z dokumentacji ["Pierwsze kroki z usługą Web Cloud Databases"](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 