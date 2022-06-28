---
title: MySQL i MariaDB
slug: mysql-i-mariadb
excerpt: Korzystanie z baz danych
section: 'Pierwsze kroki'
order: 02
---

**Ostatnia aktualizacja z dnia 28/06/2022**
  
## Wprowadzenie
  
Chcesz korzystać z MySQL lub MariaDB dla swoich baz danych?

### Czym jest baza danych MySQL?

MySQL to system zarządzania relacyjnymi bazami danych przygotowany z myślą o zwiększonej wydajności odczytu, w przeciwieństwie do pozostałych systemów.

Jest to silnik open source firmy Oracle.

### Czym jest baza danych MariaDB?

MariaDB to pochodna systemu zarządzania bazami danych MySQL.

Silnik ten jest w 100% kompatybilny. Wszystkie bugi oraz roadmapy są w pełni dostępne, w przeciwieństwie do wersji Oracle. Ponadto silnik InnoDB został zastąpiony silnikiem XtraDB. Wprowadzono również inne optymalizacje, które pozwalają na zwiększenie wydajności.

**Dowiedz się, jak tworzyć bazy danych MySQL lub MariaDB**
  
## Wymagania początkowe

- Posiadanie [instancji CloudDB](https://www.ovh.pl/cloud/cloud-databases/){.external} (zawartej w ofercie[hostingu www Performance](https://www.ovhcloud.com/pl/web-hosting/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Przeglądanie [przewodnik dotyczący uruchomienia usługi CloudDB](https://docs.ovh.com/pl/clouddb/pierwsze-kroki-z-clouddb/)

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

- Posiadanie adresu instancji CloudDB
- Posiadanie portu dla instancji CloudDB
- Posiadanie nazwy użytkownika instancji CloudDB
- Hasło przypisane do użytkownika
- Posiadanie bazy danych

Wszystkie te informacje są dostępne w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

Zapoznaj się również z tym przewodnikiem: [Pierwsze kroki z usługą Cloud Databases](https://docs.ovh.com/pl/clouddb/pierwsze-kroki-z-clouddb/).

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

#### Logowanie przez interfejs phpMyAdmin

Możesz korzystać z phpMyAdmin do przeglądania zawartości bazy danych. W tym celu zainstaluj phpMyAdmin na Twoim własnym serwerze lub hostingu. Podczas tej instalacji skonfiguruj informacje dotyczące Twojego serwera CloudDB i wybranej bazy danych, aby phpMyAdmin mógł się do niego zalogować.

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
> W niektórych przypadkach pamięć RAM dostępna w Twojej instancji CloudDB może nie powodować odpowiedniego eksportu lub importu. W takim przypadku zalecamy użycie narzędzia OVH w Panelu klienta. W razie potrzeby skorzystaj z dokumentacji ["Pierwsze kroki z usługą CloudDB"](https://docs.ovh.com/pl/clouddb/pierwsze-kroki-z-clouddb/){.external}.
>

## Sprawdź również
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.