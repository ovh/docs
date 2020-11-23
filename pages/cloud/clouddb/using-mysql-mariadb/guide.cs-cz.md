---
deprecated: true
title: Začínáme s MySQL a MariaDB
slug: zaciname-s-mysql-a-mariadb
excerpt: Práce s databázemi
---

Láká Vás práce s MySQL či MariaDB? Naučte se vytvářet a spravovat své databáze v několika krocích!


## Úvod

### Prerekvizity


> [!primary]
>
> Před pokračováním v tomto tutoriálu se prosím ujistěte, že:
> - disponujete instancí CloudDB.
> - jste obeznámeni se základní příručkou ke službě CloudDB: docs/cloud/clouddb/debuter-avec-clouddb
>

### Co je to databáze MySQL?

MySQL je systém pro správu databáze uplatňující relační databázový model. Tento systém byl od počátku své existence optimalizován na rychlost a vysoký výkon.

Jedná se o open-source engine vlastněný společností Oracle.


### Co je to databáze MariaDB?

MariaDB je nástupnickou větví (tzv. "forkem") MySQL.

Tento engine je 100% kompatibilní a "svobodnější" než jeho starší bratr MySQL. Oproti Oracle verzi jsou zde veškeré bugy a roadmapy veřejně přístupné. Úložiště dat InnoDB bylo nahrazeno XtraDB. K dispozici jsou i další optimalizace slibující celkové navýšení výkonu.


## Přihlášení do databáze


> [!primary]
>
> Mějte prosím na paměti, že tato služba nezprostředkovává přímý přístup k hostitelskému serveru, ale pouze k databázím hostovaným na hostitelském serveru. Generické SQL příkazy zde fungují bez potíží. Software HeidiSQL či SQuirrel SQL je 100% kompatibilní.
> 



> [!primary]
>
> Jelikož je MariaDB nástupnickou větví (tzv. "forkem") MySQL, jsou příkazy pro tyto 2 typy relačních databází identické.
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
mysql --host=server --user=user --port=port --password=password database_name
```


### Připojení pomocí PHP skriptu

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Softwarové připojení (SQuirreL SQL)

- Po spuštění programu SQuirrel SQL klikněte na tlačítko `Aliases`{.action} a následně na `+`{.action}.


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Vyplňte následující pole a potvrďte kliknutím na tlačítko `OK`{.action} :
    - **Name**: zadejte název.
    - **Driver**: zvolte "MySQL Driver".
    - **URL**: zadejte adresu serveru a port v následujícím formátu: jdbc:mysql://server:port
    - **User Name**: zadejte uživatelské jméno.
    - **Password**: zadejte heslo.


![config connection](images/2.PNG){.thumbnail}

- Opět potvrďte kliknutím na tlačítko `Connect`{.action}.


![valid connection](images/3.PNG){.thumbnail}

Nyní jste připojeni ke své databázi:


![config connection](images/4.PNG){.thumbnail}


### Připojení přes phpMyAdmin

*Tento návod bude již brzy k dispozici v rámci samostatné příručky.*


## Export databáze MySQL či MariaDB

### Export databáze přes příkazový řádek

```bash
mysqldump --host=server --user=user --port=port --password=password database_name > database_name.sql
```


## Import databáze MySQL či MariaDB

### Import databáze přes příkazový řádek

```bash
cat database_name.sql | mysql --host=server --user=user --port=port --password=password databse_name
```