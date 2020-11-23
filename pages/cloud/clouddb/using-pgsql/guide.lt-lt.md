---
deprecated: true
title: PostgreSQL naudojimas
slug: postgresql-naudojimas
excerpt: Naudokite duomenu bazes
---

Norite naudoti PostgreSQL? Sužinokite, kaip sukurti ir valdyti duomenų bazes, tai paprasta!


## Bendra informacija

### Reikalavimai


> [!primary]
>
> Būtinos sąlygos:
> - CloudDB virtuali mašina
> - Perskaitytas CloudDB gidas: docs/cloud/clouddb/debuter-avec-clouddb
>

### Kas yra PostgreSQL duomenu baze?
PostgreSQL - tai susietų duomenų ir objektų bazių valdymo sistema (SGBDRO). Tai tvirta ir plečiama sistema, galinti patikimai apdoroti didelį kiekį duomenų. Ši sistema taip pat pasižymi itin aktyvia atviro kodo (opensource) bendruomene.


## Prisijungimas prie duomenu bazes


> [!primary]
>
> Atkreipkite dėmesį: ši paslauga nesuteikia prieigos prie pagrindinio serverio (mazgo), bet tik prie jame esančių duomenų bazių. Bendros SQL užklausos veikia be problemų, o HeidiSQL ar SQuirreL SQL sistemos yra visiškai suderinamos.
> 

Siekdami prisijungti prie duomenų bazės, įsitikinkite, kad jums žinomi šie duomenys:

- Duomenų bazės virtualios mašinos adresas
- Duomenų bazės prievadas
- Duomenų bazės naudotojas
- Duomenų bazės slaptažodis
- Duomenų bazės pavadinimas

Visi šie duomenys prieinami jūsų [Web valdymo sąsajoje](https://www.ovh.com/manager/web/){.external}.

Jums taip pat prieinamas gidas: [](debuter-avec-clouddbguide.lt-lt.md){.ref}


### Prisijungimas komandineje eiluteje

```bash
psql --host=server --port=port --user=user --password=password database_name
```


### Prisijungimas naudojant PHP skripta

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Prisijungimas per programa (SQuirreL SQL)
- Paleiskite SQuirreL SQL ir spauskite `Aliases`{.action}, po to `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Užpildykite šiuos laukus ir spauskite `OK`{.action}:
    - **Name**: Pasirinkite pavadinimą
    - **Driver**: Pasirinkite PostgreSQL
    - **URL**: Įveskite serverio adresą ir prievadą formatu jdbc:postgresql://server:port/database
    - **User Name**: Įveskite naudotojo pavadinimą
    - **Password**: Įveskite slaptažodį


![config connection](images/2.PNG){.thumbnail}

- Patvirtinkite paspaudę `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

Dabar jūs sėkmingai prisijungėte prie duomenų bazės:


![config connection](images/4.PNG){.thumbnail}


### Prisijungimas naudojant phppgAdmin
*Artimiausiu metu, kitame gide.*


## PostgreSQL duomenu bazes eksportavimas

### Duomenu bazes eksportavimas komandineje eiluteje

```bash
pg_dump --host=server --port=port --user=user --password=password database_name > database_name.sql
```


## PostgreSQL duomenu bazes importavimas

### Duomenu bazes importavimas komandineje eiluteje

```bash
psql --host=server --port=port --user=user --password=password database_name < database_name.sql
```