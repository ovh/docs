---
deprecated: true
title: 'Webhotellin tietokannan varmuuskopion hakeminen'
slug: tietokannan-hakeminen
excerpt: 'Katso, kuinka haetaan webhotellisi tietokannan varmuuskopio'
section: Tietokannat
order: 3
---

**Päivitetty 26.6.2018**

## Tavoite

Nykyään lähes kaikki sisällönhallintajärjestelmät (WordPress, Joomla! jne.) käyttävät tietokantoja, joilla voidaan tallentaa dynaamisia elementtejä kuten kommentteja tai artikkeleita. Erilaisista syistä johtuen saatat joutua tekemään tietokannastasi varmuuskopion sen tietojen hakemiseksi.

**Katso, kuinka webhotellisi tietokannan varmuuskopio haetaan.**

## Edellytykset

- Sinulla on [webhotellituote](https://www.ovh-hosting.fi/webhotelli){.external}.
- Sinulla on [OVH:n webhotellituotteen](https://www.ovh-hosting.fi/webhotelli){.external} yhteydessä luotu tietokanta.
- Käytetystä varmuuskopiointitavasta riippuen, sinulla on pääsyoikeudet webhotellituotteesi hallintaan [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} tai tiedot, joiden avulla voit kirjautua tietokantaan.

## Käytännössä

Ennen toimenpiteen aloitusta sinun on määritettävä tapa, jolla tietokannan varmuuskopio haetaan. Siihen on olemassa useita vaihtoehtoja teknisen osaamisesi tasosta riippuen.

- **OVH:n varmuuskopiointityökalun käyttäminen**: tämän vaihtoehdon avulla voit hakea tietokantojesi varmuuskopioita [OVH:n hallintapaneelista](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Tämä on kaikkein helppokäyttöisin ratkaisu, sillä se ei edellytä teknistä erityisosaamista.

- **Varmuuskopiointi phpMyAdmin-käyttöliittymän kautta**: tämä vaihtoehto edellyttää kirjautumista phpMyAdmin-käyttöliittymään toimenpiteen tekemistä varten. Käyttöliittymän hallinnan osaaminen on edellytyksenä sen käytölle.

- **Varmuuskopioinnin toteuttaminen skriptillä**: tämä vaihtoehto edellyttää OVH:n webhotelliisi tallennetun skriptin luomista, jotta varmuuskopio voidaan toteuttaa. Tämän tyyppinen skriptin luominen edellyttää erityisosaamista.

- **Varmuuskopioinnin toteuttaminen SSH-komennolla**: tämä vaihtoehto edellyttää kirjautumista tallennustilaasi SSH-protokollalla sekä komentojen käyttämistä sen kanssa kommunikointiin. Tämän tyyppisen tavan käyttö edellyttää edistynyttä osaamista sekä tietyn [webhotellituotteen](https://www.ovh-hosting.fi/webhotelli){.external}.

Jotkut yllä mainitut menettelyt eivät tule OVH:n käyttöliittymästä. Sinun on siis toteutettava nämä toimenpiteet oman osaamisesi mukaan. Joitakin tietoja on esitetty alla, mutta ne eivät korvaa webmasterin apua. 

Jatka tämän dokumentaation lukemista halutun varmuuskopiointitavan mukaan.

> [!warning]
>
> OVH tarjoaa käyttöösi palveluja, joiden konfigurointi, hallinta ja vastuu kuuluvat sinulle. Tehtävänäsi on siis varmistaa palvelun kunnollinen toiminta.
>
> Tämän ohjeen tarkoituksena on auttaa sinua yleisimmissä tehtävissä. Suosittelemme ottamaan kuitenkin yhteyttä erikoistuneeseen palveluntarjoajaan ja/tai palvelun kehittäjään, mikäli kohtaat hankaluuksia. Me emme voi tarjota avustusta asiassa. Lisätietoa tämän ohjeen kohdasta “Lisää aiheesta”.
>

### Varmuuskopion hakeminen OVH:n työkalun kautta

Varmuuskopiointityökaluun päästäksesi kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, klikkaa kohtaa `Webhotellit`{.action} vasemman reunan valikossa ja valitse sitten kyseessä oleva webhotelli. Mene lopuksi välilehdelle `Tietokannat`{.action}.

Näkyviin tulevassa taulukossa on kaikki webhotellituotteen yhteydessä luodut tietokannat. Nyt voit valita uuden varmuuskopioinnin tekemisen sekä varmuuskopion hakemisen kahdella erillisellä tavalla.

#### 1. vaihe: Uuden varmuuskopion ottaminen tietokannasta

Edelleen välilehdellä `Tietokannat`{.action}, klikkaa kolmea pistettä varmuuskopioitavan tietokannan oikealla puolella ja sitten `Luo varmuuskopio`{.action}.

![databasedump](images/database-dump-step2.png){.thumbnail}

Valitse näkyviin tulevassa ikkunassa haluttu päivämäärä varmuuskopiolle ja klikkaa sitten painiketta `Seuraava`{.action}. Varmista, että yhteenvedon tiedot ovat oikein ja klikkaa sitten `Vahvista`{.action} toimenpiteen käynnistämiseksi.

Odota, että varmuuskopio muodostuu. Voit hakea sen heti, kun se on saatavilla.

![databasedump](images/database-dump-step3.png){.thumbnail}

#### 2. vaihe: Tietokannan varmuuskopion hakeminen

Edelleen välilehdellä `Tietokannat`{.action}, klikkaa kolmea pistettä halutun tietokannan oikealla puolella ja sitten `Palauta varmuuskopio`{.action}.

![databasedump](images/database-dump-step4.png){.thumbnail}

Näkyviin tuleva taulukko näyttää kaikki valitun tietokannan saatavilla olevat varmuuskopiot. Voit nähdä tässä varmuuskopioiden tarkan päivämäärän sekä päivän, jolloin nämä poistetaan OVH:n työkalusta.

Varmuuskopion lataamiseksi klikkaa kolmea pistettä sen vieressä ja sitten `Lataa varmuuskopio`{.action}. Tämän jälkeen avautuu ikkuna, jossa pyydetään tallentamaan se koneellesi. Hyväksy ja odota sitten varmuuskopion latautumista.

![databasedump](images/database-dump-step5.png){.thumbnail}

### Varmuuskopion hakeminen phpMyAdmin-käyttöliittymästä

Tämän toimenpiteen toteuttamiseksi sinun on kirjauduttava phpMyAdmin-käyttöliittymään. Sen kirjautumislinkin löydät kirjautumalla [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, klikkaa kohtaa `Webhotellit`{.action} vasemman reunan valikossa ja valitse sitten kyseessä oleva webhotelli. Mene lopuksi välilehdelle `Tietokannat`{.action}.

Näkyviin tulevassa taulukossa on kaikki webhotellituotteen yhteydessä luodut tietokannat. Klikkaa kolmea pistettä halutun tietokannan oikealla puolella ja sitten `Pääsy phpMyAdminiin`{.action}.

![databasedump](images/database-dump-step6.png){.thumbnail}

Kun olet phpMyAdmin-sivulla, syötä tietokannan tiedot, valitse alasvetovalikosta haluatko nähdä tietokannan nykyiset tiedot vai aiemman varmuuskopion tiedot ja sitten kirjaudu. Kun olet kirjautunut, mene välilehdelle `Export`{.action}, jossa on mahdollisuus valita kahdesta viemistavasta:

- **nopea tapa**: voit määrittää varmuuskopion viemismuodon. Yleisin on SQL-formaatti, mutta muitakin on tarjolla tarpeidesi mukaan.

- **personoitu tapa**: voit määrittää yksityiskohtaisesti varmuuskopion viemisen asetukset.

> [!warning]
>
> Koska phpMyAdmin-käyttöliittymä ei ole OVH:n luoma, sinun on toteutettava tämä menettely oman osaamisesi mukaan. Suosittelemme ottamaan kuitenkin yhteyttä erikoistuneeseen palveluntarjoajaan ja/tai käyttöliittymän kehittäjään, mikäli kohtaat hankaluuksia. Me emme siis voi tarjota avustusta asiassa.
>

### Varmuuskopion hakeminen skriptiä käyttämällä

Toimenpide tapahtuu useassa vaiheessa. Varmista, että sinulla on tiedot, joiden avulla voit kirjautua varmuuskopioitavaan tietokantaan (käyttäjänimi, salasana, tietokannan nimi sekä palvelimen osoite).

> [!warning]
>
> Tämä vaihtoehto on tekninen ja edellyttää ohjelmointiosaamista. Joitakin menettelyä koskevia tietoja on esitelty alla. Suosittelemme ottamaan kuitenkin yhteyttä erikoistuneeseen palveluntarjoajaan, mikäli kohtaat hankaluuksia. Me emme siis voi tarjota avustusta asiassa.
>

#### 1. vaihe: Varmuuskopiointiskriptin luominen

Ensimmäisessä vaiheessa luodaan skripti, jolla tietokannan varmuuskopiointi voidaan toteuttaa. Alla on näkyvissä esimerkkiskripti, jota voit käyttää apuna tässä toimenpiteessä. Se ei kuitenkaan korvaa webmasterin apua.

```php
<?
system("mysqldump --host=palvelimen_osoite --user=käyttäjänimi --password=käyttäjän_salasana tietokannan_nimi > varmuuskopiotiedoston_nimi.sql");
?>
```

Korvaa huolellisesti tässä skriptissä näkyvät yleiset tiedot tietokantasi tiedoilla käyttäen apuna alla olevia elementtejä. Kun skripti on valmis, suosittelemme nimeämään sen esimerkiksi nimellä “varmuuskopio.php”.

|Tiedot|Korvaava tieto|
|---|---|
|palvelimen_osoite|Kyseessä olevan tietokannan palvelimen osoite.|
|käyttäjänimi|Käyttäjänimi koskien käyttäjää, jolla on pääsyoikeudet tietokantaan.|
|käyttäjän_salasana|Yllämainitun käyttäjänimen salasana.|
|tietokannan_nimi|Kyseessä olevan tietokannan nimi.|
|varmuuskopiotiedoston_nimi|Nimi, jota varmuuskopiotiedosto käyttää kun varmuuskopiointi on suoritettu.|

> [!primary]
>
> Voit tehdä varmuuskopion aiemmasta päivämäärästä lisäämällä skriptiisi portin. Eilisen päivän varmuuskopiota varten käytä porttia “3307”. Seitsemän päivää aiempaa varmuuskopiota varten käytä porttia “3317”. 
> 
> Huomaa, että porttia “3306” käyttämällä voit tehdä varmuuskopion tietokantasi tämän hetkisistä tiedoista.
>

#### 2. vaihe: Skriptin lataus tallennustilaan

Kun varmuuskopiointiskripti on luotu, sinun on ladattava se webhotellisi tallennustilaan. Sitä varten sinun on kirjauduttava webhotelliisi. Jos et tiedä, kuinka se tapahtuu, katso dokumentaation "Verkkosivun siirto verkkoon" vaihetta 2 nimeltä “[Kirjaudu tallennustilaasi](https://docs.ovh.com/fi/hosting/verkkosivun-siirto-verkkoon/#2-kirjaudu-tallennustilaasi){.external}”.

Jotta voit suorittaa seuraavat vaiheet, lataa skripti “www”-kansioon. **Kehotamme olemaan erityisen tarkkaavainen varmuuskopiointiskriptin nimen suhteen.** Varmista, ettet tuhoa tallennustilassasi olemassa olevaa samannimistä tiedostoa, kun lataat skriptin. Jos tämän tyyppinen ilmoitus tulee näkyviin, muokkaa juuri luodun skriptin nimeä ja yritä latausta uudelleen.

#### 3. vaihe: Skriptin kutsuminen

Kun skripti on ladattu tallennustilaan, ei jäljellä ole muuta kuin siinä olevan koodin käynnistäminen. Tätä varten skriptiä täytyy kutsua.

Toimenpiteen toteuttamista varten on kirjauduttava verkkoselaimellasi skriptisi täydelliseen URL-osoitteeseen (esim. mypersonaldomain.ovh/varmuuskopio.php, jos olet antanut skriptisi nimeksi “varmuuskopio.php”). Jos skriptiin syötetyt tiedot ovat oikein, varmuuskopiointi käynnistyy. Nyt on enää odotettava hetken sen toteutumista. Jos näin ei ole, tarkista skriptiin syötetyt tiedot ja yritä toimenpidettä uudelleen.

#### 4. vaihe: Varmuuskopion hakeminen tallennustilasta

Kun varmuuskopiointi on suoritettu, voit hakea sen kansiosta, johon varmuuskopiointiskripti ladattiin. Tietokannan varmuuskopion nimi on oltava aiemmin skriptissä määritelty nimi. Jäljellä on siis enää varmuuskopion hakeminen omalle koneellesi.

Ennen lopettamista suosittelemme vahvasti poistamaan varmuuskopiointitiedoston sekä “www”-hakemiston skriptin.

> [!primary]
>
> Varmuuskopiointiskriptejä sekä ajastettuja tehtäviä (“CRON”) käyttämällä voit automatisoida varmuuskopioinnin toistumisvälin valintasi mukaan. Lue lisää ajastetuista tehtävistä dokumentaatiostamme: “[Ajastetun tehtävän (CRON) asettaminen webhotellissa”](https://docs.ovh.com/fi/hosting/webhotelli_automatisoidut_tehtavatcron/){.external}.
>

### Varmuuskopiotiedoston hakeminen SSH-komennolla

Toimenpiteen toteuttamiseksi sinun on käytettävä päätteen kautta annettavia komentoja, jotta voit toimia vuorovaikutuksessa tallennustilasi kanssa.

> [!warning]
>
> Tämän tyyppisen yhteyden käyttämiseen tarvitaan kehittyneempää osaamista. Alla on esitelty joitakin tietoja menettelystä. Suosittelemme ottamaan kuitenkin yhteyttä erikoistuneeseen palveluntarjoajaan, mikäli kohtaat hankaluuksia. Me emme siis voi tarjota avustusta asiassa.
>

Kun olet kirjautunut tallennustilaasi SSH-yhteydellä, sinun on käytettävä tietokannan varmuuskopioinnin mahdollistavaa komentoa. Alla on yksi, joka voi auttaa sinua menettelyssäsi. Huolehdi, että varmuuskopio tehdään aktiivisessa hakemistossa hetkellä, jolloin lähetät komennon päätteellesi.

```sh
mysqldump --host=palvelimen_osoite --user=käyttäjänimi --password=käyttäjän_salasana tietokannan_nimi > varmuuskopiotiedoston_nimi.sql
```

Korvaa komennon yleiset tiedot huolellisesti kyseessä olevan tietokannan tiedoilla. Kun varmuuskopiointi on toteutettu, jäljellä on siis enää varmuuskopion hakeminen omalle koneellesi.

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.