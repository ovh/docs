---
deprecated: true
title: MySQL ir MariaDB naudojimas
slug: mysql-mariadb-naudojimas
excerpt: Naudokite duomenu bazes
---

Norite naudoti MySQL ar MariaDB? Sužinokite, kaip sukurti ir valdyti duomenų bazę, tai paprasta!


## Bendra informacija

### Reikalavimai


> [!primary]
>
> Būtinos sąlygos, šiame gide pateiktos informacijos aiškinimo tikslais:
> - CloudDB virtuali mašina
> - Perskaitytas CloudDB gidas: docs/cloud/clouddb/debuter-avec-clouddb
>

### Kas yra MySQL duomenu baze?
MySQL - tai susijusių duomenų bazių valdymo sistema, sukurta siekiant padidinti skaitymo operacijų našumą.

Tai atviro kodo (Open Source) variklis.


### Kas yra MariaDB duomenu baze?
MariaDB - tai MySQL duomenų valdymo sistemos išvestinė (fork).

Šis variklis yra 100% suderinamas ir laisvesnis nei MySQL. Klaidos ir plėtojimo planai laisvai prieinami. Be to, InnoDB saugyklos variklį pakeitus XtraDB ir atlikus kitus optimizavimo darbus, galima pasiekti didesnį našumą.


## Prisijungimas prie duomenu bazes


> [!primary]
>
> Atkreipkite dėmesį, kad ši paslauga nesuteikia prieigos prie pagrindinio serverio (mazgo), bet tik prie jame esančių duomenų bazių. Bendros SQL užklausos veikia be problemų, o HeidiSQL ar SQuirreL SQL sistemos yra visiškai suderinamos.
> 



> [!primary]
>
> Kadangi MariaDB yra MySQL išvestinė, šių dviejų tipų duomenų bazių užklausos identiškos.
> 

Siekdami prisijungti prie duomenų bazės, įsitikinkite, kad jums žinomi šie duomenys:

- Duomenų bazės virtualios mašinos adresas
- Duomenų bazės prievadas
- Duomenų bazės naudotojo pavadinimas
- Duomenų bazės slaptažodis
- Duomenų bazės pavadinimas

Visi šie duomenys prieinami jūsų [Web valdymo sąsajoje](https://www.ovh.com/manager/web/){.external}.

Jums taip pat prieinamas gidas: [](debuter-avec-clouddbguide.lt-lt.md){.ref}


### Prisijungimas komandineje eiluteje

```bash
mysql --host=serveur --user=utilisateur --port=port --password=password database_name
```


### Prisijungimas naudojant PHP skripta

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Prisijungimas per programa (SQuirreL SQL)
- Paleiskite SQuirreL SQL ir spauskite `Aliases`{.action}, po to `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Užpildykite šiuos laukus ir spauskite `OK`{.action}:
    - **Name**: Pasirinkite pavadinimą
    - **Driver**: Pasirinkite MySQL Driver
    - **URL**: Įveskite serverio adresą ir prievadą formatu jdbc:mysql://server:port
    - **User Name**: Įveskite naudotojo pavadinimą
    - **Password**: Įveskite slaptažodį


![config connection](images/2.PNG){.thumbnail}

- Patvirtinkite paspaudę `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

Dabar jūs sėkmingai prisijungėte prie duomenų bazės:


![config connection](images/4.PNG){.thumbnail}


### Prisijungimas naudojant phpMyAdmin
*Greitai prieinama kitame gide.*


## MySQL ar MariaDB duomenu bazes eksportavimas

### Duomenu bazes eksportavimas komandineje eiluteje

```bash
mysqldump --host=server --user=user --port=port --password=password database_name > database_name.sql
```


## MySQL ar MariaDB duomenu bazes importavimas

### Duomenu bazes importavimas komandineje eiluteje

```bash
cat database_name.sql | mysql --host=server --user=user --port=port --password=password database_name
```