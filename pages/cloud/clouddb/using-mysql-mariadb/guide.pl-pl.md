---
title: MySQL i MariaDB
slug: mysql-i-mariadb
excerpt: Korzystanie z baz danych
section: 'Pierwsze kroki'
order: 02
---

Chcesz korzystać z MySQL lub MariaDB? Sprawdź, jak w prosty sposób tworzyć bazy danych i nimi zarządzać!


## Informacje ogolne

### Wymagania

- Posiadanie instancji CloudDB
- Zapoznanie się z przewodnikiem na temat [CloudDB](../pierwsze-kroki-z-clouddb/)

### Czym jest baza danych MySQL?
MySQL to system zarządzania relacyjnymi bazami danych przygotowany z myślą o zwiększonej wydajności odczytu, w przeciwieństwie do pozostałych systemów.

Jest to silnik Open Source firmy Oracle.


### Czym jest baza danych MariaDB?
MariaDB to pochodna systemu zarządzania bazami danych MySQL.

Silnik ten jest w 100% kompatybilny. Wszystkie bugi oraz roadmapy są w pełni dostępne, w przeciwieństwie do wersji Oracle. Ponadto silnik InnoDB został zastąpiony silnikiem XtraDB. Wprowadzono również inne optymalizacje, które pozwalają na zwiększenie wydajności.


## Logowanie do bazy danych


> [!primary]
>
> Oferta ta nie daje dostępu do hosta, lecz do baz danych, które są na nim zainstalowane. Podstawowe polecenia SQL działają bez problemu, a oprogramowanie typu HeidiSQL i SQuirreL SQL jest w pełni kompatybilne.
> 



> [!primary]
>
> MariaDB to pochodna MySQL, więc poszczególne polecenia są identyczne dla tych dwóch typów baz danych.
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
mysql --host=serwer --user=użytkownik --port=port --password=password nazwa_bazy
```


### Logowanie przez skrypt PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Logowanie z poziomu oprogramowania (SQuirreL SQL)
- Uruchom program SQuirreL SQL i kliknij na `Aliases`{.action}, i na `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Wypełnij poniższe pola i zatwierdź za pomocą przycisku `OK`{.action}:
    - **Name**: Wybierz nazwę
    - **Driver**: Wybierz "MySQL Driver"
    - **URL**: Wskaż adres serwera i port w formie jdbc:mysql://server:port
    - **User Name**: Wskaż nazwę użytkownika
    - **Password**: Wskaż hasło


![config connection](images/2.PNG){.thumbnail}

- Zatwierdź za pomocą przycisku `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

Połączyłeś się z bazą danych:


![config connection](images/4.PNG){.thumbnail}


### Logowanie przez interfejs phpMyAdmin
*Wkrótce dostępne w innym przewodniku.*


## Eksportowanie bazy danych MySQL lub MariaDB

### Eksportowanie bazy danych z linii polecen

```bash
mysqldump --host=serwer --user=użytkownik --port=port --password=password nazwa_bazy > nazwa_bazy.sql
```


## Importowanie bazy danych MySQL lub MariaDB

### Importowanie bazy danych z linii polecen

```bash
cat nazwa_bazy.sql | mysql --host=serwer --user=użytkownik --port=port --password=password nazwa_bazy
```
