---
title: 'Tietokannan luominen webhotellissa'
slug: tietokannan-luominen
routes:
    canonical: 'https://docs.ovh.com/fi/hosting/'
excerpt: 'Opi luomaan tietokanta OVH:n webhotellissa'
section: Tietokannat
order: 1
---

**Päivitetty 6.6.2018**

## Tavoite

Tietokanta (*database* tai DB) mahdollistaa dynaamisiksi kutsuttujen elementtien, kuten kommenttien tai artikkelien varastoimisen. Näitä tietokantoja käyttävät lähes kaikki sisällönhallintajärjestelmät (*Content Management System* tai CMS) kuten WordPress, Joomla! jne.

**Opi luomaan tietokanta OVH:n webhotellissa.**

## Edellytykset

- Sinulla on [webhotellituote](https://www.ovh-hosting.fi/webhotelli){.external}.
- Sinulla on mahdollisuus luoda tietokantoja tuotteesi puitteissa.
- Sinulla on pääsyoikeudet webhotellituotteen hallintaan [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Käytännössä

### 1. Mene webhotellin tietokantojen hallintaan

Kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager){.external}, klikkaa kohtaa `Webhotellit`{.action} vasemman reunan valikossa ja valitse sitten kyseessä oleva webhotelli. Mene lopuksi välilehdelle `Tietokannat`{.action}.

Näkyviin tulevassa taulukossa on kaikki webhotellituotteen yhteydessä luodut tietokannat.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### 2. Tietokannan luominen

On olemassa kaksi vaihtoehtoa tietokannan luomisen käynnistämiseen:

- **Jos et ole vielä luonut tietokantaa**: klikkaa välilehdellä painiketta `Luo tietokanta`{.action}.

- **Jos olet jo luonut tietokannan**: klikkaa välilehdellä painiketta `Toiminnot`{.action} ja sitten `Luo tietokanta.`{.action}

Valitse näkyviin tulevassa ikkunassa halutut tiedot ja klikkaa sitten `Seuraava`{.action}.

|Tieto|Kuvaus|  
|---|---|  
|Tietokantamoottori|Valitse tietokantamoottori, jota tietokanta tulee käyttämään. OVH:n [webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli){.external} sisältyvät tietokannat tarjoavat ainoastaan MySQL-moottorin.|  
|Valitse tietokannan versio|Valitse tietokantamoottorin käyttämä versio. Seuraa verkkosivusi yhteensopivuutta valitun version kanssa.|  
|Tietokannan tyyppi|Valitse tietokannan kapasiteetti. Tämä on tila, jota tietokantasi hyödyntää tietojen säilytyksessä.|   

Täytä seuraavaksi pyydetyt tiedot ja klikkaa sitten `Seuraava`{.action}.

|Tieto|Kuvaus|   
|---|---|   
|Käyttäjä|Personoi käyttäjänimeä, joka yhdistetään tietokantaasi.|   
|Salasana|Määritä käyttäjälle salasana ja vahvista se.|   

Tarkista nyt yhteenvedossa näkyvät tiedot. Jos ne ovat oikein, klikkaa `Vahvista`{.action} käynnistääksesi tietokannan luomisen. Toista tämä menettely niin monta kertaa kuin tarpeellista useamman tietokannan luomista varten.

> [!primary]
>
> Turvallisuussyistä kehotamme noudattamaan salasanan valinnan yhteydessä ilmoitettuja ehtoja. Tässä lisäksi salasanoihin liittyvät suosituksemme:
>
> - Älä käytä samaa salasanaa kahdesti.
>
> - Valitse salasana, jolla ei ole yhteyttä henkilötietoihisi (vältä esimerkiksi viittauksia sukunimeesi, etunimeesi tai syntymäpäivään).
>
> - Uusi salasanasi säännöllisesti.
>
> - Älä kirjoita salasanaa paperille tai lähetä sitä sähköpostiosoitteeseesi.
>
> - Älä tallenna salasanojasi verkkoselaimeesi, vaikka selaimesi ehdottaisi sitä.
>

![databasecreation](images/database-creation-step2.png){.thumbnail}

### 3. Tietokantojen käyttö

Nyt voit alkaa käyttää tietokantojasi. Kirjautuaksesi tietokantaan syötä käyttäjänimi sekä määrittämäsi salasana, personoimasi tietokannan nimi sekä palvelimen osoite.

Nämä tiedot ovat välttämättömiä verkkosivusi yhdistämiseksi tietokantaan. Käytetystä verkkosivusta riippuen tämä yhteys on toteutettava käsin tai sivun itse muodostaman käyttöliittymän kautta. Näiden asetusten määritykset tulevat verkkosivusi konfiguraatiosta eikä OVH:lta, joten suosittelemme ottamaan yhteyttä verkkosivusi kehittäjään tai asiantuntijaan kuten erikoistuneeseen palveluntarjoajaan, mikäli kaipaat apua toimenpiteessä.

OVH tarjoaa käytettäväksi verkkotyökalun nimeltä phpMyAdmin. Kirjautumislinkin löytämiseksi pysy edelleen välilehdellä `Tietokannat`{.action}, klikkaa taulukossa tietokantojen vieressä olevaa kolmea pistettä ja sitten `Pääsy phpMyAdminiin`{.action}. Siellä sinun täytyy syöttää OVH:lla luomasi tietokannan tunnukset.

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.
