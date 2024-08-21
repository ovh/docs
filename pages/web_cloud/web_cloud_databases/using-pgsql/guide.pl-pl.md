---
title: Pierwsze kroki z PostgreSQL
excerpt: Korzystanie z baz danych
updated: 2023-02-15
---

Chcesz korzystać z PostgreSQL? Sprawdź, jak w prosty sposób tworzyć bazy danych i nimi zarządzać!

## Informacje ogolne

### Wymagania

- Posiadanie instancji Web Cloud Databases
- Zapoznanie się z przewodnikiem na temat [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

### Czym jest baza danych PostgreSQL?
PostgreSQL to system zarządzania relacyjnymi bazami danych oraz obiektami (SGBDRO).

Jest to mocny i skalowalny system, który może obsługiwać duże ilości danych. Dysponuje on również bardzo aktywną społecznością.

## Logowanie do bazy danych

> [!primary]
>
> Oferta ta nie daje dostępu do hosta, lecz do baz danych, które są na nim zainstalowane. Podstawowe polecenia SQL działają bez problemu, a oprogramowanie typu HeidiSQL i SQuirreL SQL jest w pełni kompatybilne.
> 

Aby zalogować się do bazy danych, musisz dysponować:

- Adresem swojej instancji bazy danych
- Portem bazy danych
- Nazwą użytkownika bazy danych
- Hasłem do bazy danych
- Nazwą bazy danych.

Wszystkie te informacje są dostępne w [Panelu klienta](https://www.ovh.com/manager/web/){.external}.

Zapoznaj się również z tym przewodnikiem: [Pierwsze kroki z usługą Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb){.ref}

### Logowanie z linii polecen

```bash
psql --host=serwer --port=port --user=użytkownik --password=password nazwa_bazy
```

### Logowanie poprzez skrypt PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

### Logowanie za pomoca oprogramowania (SQuirreL SQL)
- Uruchom program SQuirreL SQL i kliknij na `Aliases`{.action} i na `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Wypełnij poniższe pola i kliknij na przycisk `OK`{.action}:
    - **Name**: Wybierz nazwę
    - **Driver**: Wybierz "PostgreSQL"
    - **URL**: Wskaż nazwę serwera oraz port w formie jdbc:postgresql://server:port/database
    - **User Name**: Wskaż nazwę użytkownika
    - **Password**: Wskaż hasło

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias-pgsql.png){.thumbnail}

- Zatwierdź za pomocą przycisku `Connect`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-pgsql.png){.thumbnail}

Zalogowałeś się do bazy danych:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard-pgsql.png){.thumbnail}

### Logowanie przez interfejs phppgAdmin
*Wkrótce dostępne w innym przewodniku.*

## Eksportowanie bazy danych PostgreSQL

### Eksportowanie bazy z linii polecen

```bash
pg_dump --host=serwer --port=port --user=użytkownik --password=password nazwa_bazy > nazwa_bazy.sql
```

## Importowanie bazy danych PostgreSQL

### Importowanie bazy z linii polecen

```bash
psql --host=serwer --port=port --user=użytkownik --password=password nazwa_bazy < nazwa_bazy.sql
```

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).