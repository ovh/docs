---
title: Pierwsze kroki z PostgreSQL
slug: pierwsze-kroki-z-postgresql
excerpt: Korzystanie z baz danych
section: 'Pierwsze kroki'
order: 03
---

Chcesz korzystać z PostgreSQL? Sprawdź, jak w prosty sposób tworzyć bazy danych i nimi zarządzać!


## Informacje ogolne

### Wymagania

- Posiadanie instancji Web Cloud Databases
- Zapoznanie się z przewodnikiem na temat [Web Cloud Databases](../pierwsze-kroki-z-clouddb/)

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

Zapoznaj się również z tym przewodnikiem: [Pierwsze kroki z usługą Cloud Databases](../starting_with_clouddb/guide.pl-pl.md){.ref}


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


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Wypełnij poniższe pola i kliknij na przycisk `OK`{.action}:
    - **Name**: Wybierz nazwę
    - **Driver**: Wybierz "PostgreSQL"
    - **URL**: Wskaż nazwę serwera oraz port w formie jdbc:postgresql://server:port/database
    - **User Name**: Wskaż nazwę użytkownika
    - **Password**: Wskaż hasło


![config connection](images/2.PNG){.thumbnail}

- Zatwierdź za pomocą przycisku `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

Zalogowałeś się do bazy danych:


![config connection](images/4.PNG){.thumbnail}


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

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.