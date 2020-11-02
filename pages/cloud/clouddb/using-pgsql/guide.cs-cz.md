---
deprecated: true
title: Začínáme s PostgreSQL
slug: zaciname-s-postgresql
excerpt: Práce s databázemi
---

Láká Vás práce s PostgreSQL? Naučte se spravovat své databáze v několika krocích!


## Úvod

### Prerekvizity


> [!primary]
>
> Před pokračováním v tomto tutoriálu se prosím ujistěte, že:
>
> - disponujete instancí CloudDB.
> - jste obeznámeni se základní příručkou ke službě CloudDB: docs/cloud/clouddb/debuter-avec-clouddb
>

### Co je to databáze PostgreSQL?

PostgreSQL je objektově-relační systém pro správu databází (ORDBMS). Jedná se o vysoce spolehlivý systém pro správu velkých datových objemů. K tomuto systému se v současné době váže rozsáhlá a aktivní komunita.


## Přihlášení do databáze


> [!primary]
>
> Mějte prosím na paměti, že tato služba nezprostředkovává přímý přístup k hostitelskému serveru, ale pouze k databázím hostovaným na hostitelském serveru. Generické SQL příkazy zde fungují bez potíží. Software HeidiSQL či SQuirrel SQL je 100% kompatibilní.
> 

Před přihlášením do své databáze se ujistěte, že disponujete následujícími informacemi:

- Adresa databázové instance
- Port databáze
- Uživatelské jméno
- Heslo
- Název databáze

Výše uvedené informace naleznete v rámci rozhraní pro správu Vaší databázové instance v [Zákaznickém prostoru OVH](https://www.ovh.cz/manager/web/){.external}.

V případě potíží se obraťte na následující příručku: [](debuter-avec-clouddbguide.cs-cz.md){.ref}


### Připojení přes příkazový řádek

```bash
psql --host=server --port=port --user=user --password=password database_name
```


### Připojení pomocí PHP skriptu

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Softwarové připojení (SQuirreL SQL)

- Po spuštění programu SQuirrel SQL klikněte na tlačítko `Aliases`{.action} a následně na `+`{.action}.


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Vyplňte následující pole a potvrďte kliknutím na tlačítko `OK`{.action} :
    - **Name**: zadejte název.
    - **Driver**: zvolte "PostgreSQL".
    - **URL**: zadejte adresu serveru a port v následujícím formátu: jdbc:postgresql://server:port/database
    - **User Name**: zadejte uživatelské jméno.
    - **Password**: zadejte heslo.


![config connection](images/2.PNG){.thumbnail}

- Opět potvrďte kliknutím na tlačítko `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

Nyní jste připojeni ke své databázi:


![config connection](images/4.PNG){.thumbnail}


### Připojení přes phpPgAdmin

*Tento návod bude již brzy k dispozici v rámci samostatné příručky.*


## Export databáze PostgreSQL

### Export databáze přes příkazový řádek

```bash
pg_dump --host=server --port=port --user=user --password=password  database_name > database_name.sql
```


## Import databáze PostgreSQL

### Import databáze přes příkazový řádek

```bash
psql --host=server --port=port --user=user --password=password database_name < database_name.sql
```