---
title: CloudDB-palvelun kayton aloitus
slug: clouddb-palvelun-kayton-aloitus
links: 
   - docs/cloud/clouddb/utilisation-mysql-mariadb/
   - docs/cloud/clouddb/utilisation-pgsql/
legacy_guide_number: 2216
excerpt: Tietokantoja ilman haittatekijoita!
---

Onko sinulla tietokannan vaativa verkkosivu tai sovellus, muttet halua hallinnoida sellaista? Tutustu CloudDB-tuotteeseen jo nyt! OVH huolehtii kaikesta.


## Yleista

### Miksi kayttaa hallinnoituja tietokantoja?
Tämän tuotteen lähtökohtana on **yksinkertainen toteamus**: vaikka **osaisit** tehdä sen, ei tietokannan hallinnointi ole välttämättä sinulle kaikkein **tärkein** asia. Tietoturva, päivitykset, monitorointi, oikeuksien ja suorituskykyjen hallinta… siitä voi tulla hyvin nopeasti työlästä!

**Mikset siis jättäisi tätä työtä OVH:lle ja keskittyisi itse omaan toimintaasi?**

Tämä on päämäärämme. Tarkoituksenamme on koskettaa koko markkinoita yksityishenkilöistä ammattilaisiin, olivatpa tarpeet vähäiset tai suuria klustereita vaativat.


### CloudDB-tuotteen edut
**Yksinkertainen ja nopea:**

- SQL-tietokantojen luonti hallintapaneelin kautta
- Rajaton määrä tietokantoja (varatun levytilan mukaan)
- Jopa 200 samanaikaista yhteyttä
- Käyttäjien ja oikeuksien hallinta hallintapaneelin kautta
- Pääsy tilastoihin hallintapaneelin kautta
- Pääsy lokitietoihin

**Suorituskykyinen:**

- Taatut RAM-resurssit
- Testattu infrastruktuuri

**Tietoturva:**

- Tiimimme monitoroivat vuorokauden ympäri vuoden jokaisena päivänä
- Automaattiset varmuuskopiot joka päivä
- Pakollinen IP-osoitteiden hyväksyntä

**Kehittyvä:**

- Yhteensopiva kaikkien OVH:n tuotteiden kanssa (paitsi webhotellit) sekä yleisemmin kaikkien julkista verkkoa käyttävien tuotteiden kanssa
- Mahdollisuus valita SQL-versio tai vaihtaa milloin tahansa isompaan versioon


### Moottorivaihtoehtomme
Kun tilaat CloudDB-palvelun, voit valita useista tietokantajärjestelmistä:

**SQL**

- MySQL
- PostgreSQL
- MariaDB

Jokaisella instanssilla on omat dedikoidut resurssinsa. Instanssin sisältämät tietokannat, yksi tai useampi, **jakavat** nämä resurssit keskenään.


## Tilaa CloudDB-palvelu

### Kirjautuminen hallintapaneeliin
Mene instanssin ja tietokannan luomista varten [hallintapaneelin Web-osioon](https://www.ovh.com/manager/web/){.external}.


### Tilaus
Kun olet [Hallintapaneelin Web-osiossa](https://www.ovh.com/manager/web/){.external}, klikkaa kohtaa **"Tietokannat"** ja sitten `Tilaa tietokantoja`{.action}.


![commande manager](images/bouton-commande_EN.PNG){.thumbnail}

Tee tilaus valitsemalla alla olevista elementeistä:

- **"CloudDB"**
- **"Tietokantajärjestelmäsi"**
- **"Sen RAM"**
- **"Sen konesali"**
- **"Haluttu kesto"**


![commande choix](images/choix-commande_EN.PNG){.thumbnail}

Hyväksy tämän jälkeen käyttöehdot ja klikkaa `+ Muodosta tilaus`{.action}.


![commande generation](images/generer-commande_EN.PNG){.thumbnail}


## Yleista tietoa
Kun olet hallintapaneelissa, voit nähdä instanssisi yleiset tiedot.


![commande generation](images/infos-generales_EN.png){.thumbnail}


## Tietokantojen ja kayttajien luominen

### Tietokannan luominen
Tässä kohtaa instanssisi on siis luotuna, mutta se on tyhjä.

Klikkaa kuvaketta **"Tietokannat"**, sitten painiketta `+ Lisää tietokanta`{.action}.


![creation bdd](images/creation-bdd_EN.png){.thumbnail}

Nimeä tietokantasi ja klikkaa `+ Vahvista`{.action}.


![creation bdd](images/validation-bdd_EN.png){.thumbnail}


### Kayttajan luominen
Private SQL -palvelimen käyttämistä varten täytyy luoda käyttäjiä, joilla on tietyt oikeudet tietokantaan kirjautumista varten.

Mene tätä varten kuvakkeeseen **"Käyttäjät ja oikeudet"** ja klikkaa lopuksi `+ Lisää käyttäjä`{.action}.


![hosting](images/creation-user_EN.png){.thumbnail}

Tämän jälkeen sinua pyydetään syöttämään **käyttäjänimi** ja **salasana** sekä klikkaamaan `Vahvista`{.action}.


![hosting](images/validation-user_EN.png){.thumbnail}


### Kayttooikeuksien hallinta
Mene välilehdelle **"Tietokannat"**, sitten klikkaa haluamasi tietokannan kohdalla **"hammasratas"**-kuvaketta ja lopuksi painiketta `+ Käyttäjien hallinta`{.action}.


![hosting](images/gestion-user_EN.png){.thumbnail}

Valitse seuraavaksi käyttöoikeudet valitsemallesi käyttäjälle.


![hosting](images/validation-droit_EN.png){.thumbnail}

Tässä kuvaus kolmesta mahdollisesta vaihtoehdosta:

- **Administraattori:** Hyväksytyt pyyntötyypit **Select / Insert / Update / Delete / Create / Alter / Drop**
- **Luku/Kirjoitus:** Hyväksytyt pyyntötyypit **Select / Insert / Update / Delete**
- **Luku:** Hyväksytyt pyyntötyypit **Select**
- **Ei mitään:** Ei oikeuksia tietokantaan


## Hyvaksy IP-osoitteesi

### Palvelimen lisays
Jotta kirjautuminen CloudDB-instanssiin onnistuu, on oheisessa valikossa määriteltävä hyväksytyt IP-osoitteet. Klikkaa kuvaketta **"Hyväksytyt IP-osoitteet"** ja sitten `+ Lisää IP-osoite/ maski`{.action}.


![hosting](images/ip-autorisee_EN.png){.thumbnail}

Anna palvelimesi tai verkon IP-osoite sekä kuvaus niin halutessasi. Klikkaa sitten `Vahvista`{.action}.


![hosting](images/validation-ip_EN.png){.thumbnail}


## Tietokannan kaytto
Onko konfiguraatiosi valmis? Täydellistä!

Tietokantaa voidaan käyttää monin tavoin käyttötarkoituksestasi sekä valitusta moottorista riippuen.

Katsotaanpa tyypillinen käyttöesimerkki.


### Asenna WordPress DbaaS lab  ja MySQL-moottorilla
- Luo CloudDB MySQL -instanssi.
- Luo tietokanta, siihen liittyvä käyttäjä ja anna tälle ADMIN-oikeudet.
- Hyväksy palvelimesi IP-osoite ja anna sille lupa yhdistää CloudDB-palveluusi.

Ota muistiin seuraavat tiedot hallintapaneelista:

- Isäntäpalvelimen nimi
- SQL-portti

![Instance MySQL](images/infos-sql_EN.png){.thumbnail}

- Tietokanta

![Instance MySQL](images/view-bdd_EN.PNG){.thumbnail}

- Käyttäjä

![Instance MySQL](images/view-uer_EN.PNG){.thumbnail}


Kirjaa muistiin URL ja siihen liittyvä portti. WordPress pyytää näitä tietoja asennusvaiheessa.


![wordpress install](images/wordpress-config.png){.thumbnail}

Täytämme kentät siis seuravasti:

- **Database Name**: *base-test*
- **User Name**: *user-1*
- **Password**: salasana, jonka valitsit käyttäjälle *user-1*
- **Database Host**: *xxx.dbaas.ovh.net:35102* (kirjaa muistiin: **host:port**)
- **Table prefix**: tässä esimerkissä emme muuta mitään tässä kohdassa

Muissa käyttöesimerkeissä noudatamme käyttämiemme moottorien kaikkia virallisia kirjautumistapoja. Tutustu myös viralliseen dokumentaatioon.