---
deprecated: true
title: 'Sisällönhallintajärjestelmä: Wordpressin asennus käsin'
excerpt: Miten Wordpress-järjestelmä asennetaan käsin?
id: '1977'
slug: sisallonhallintajarjestelma_wordpressin_asennus_kasin
legacy_guide_number: g1977
---


## 1. Vaihe: asennuksen valmistelu

## Tarvittavat työkalut
Wordpress-sisällönhallintajärjestelmän asentamisessa webhotelliin on suositeltavaa käyttää FTP-ohjelmistoa kuten FileZillaa (ilmainen).

## Asennukseen tarvittavat tunnukset:
Varmista, että sinulla on käyttäjätunnus ja salasana (nic-handle), joilla voit tarvittaessa kirjautua hallintapaneeliin.


- Hae FTP-tunnuksesi ja salasanasi, joiden avulla voit kirjautua webhotelliin.
FTP-tunnusten hakemisesta voi lukea lisää ohjeesta:[]({legacy}1374)


- Lisäksi on tärkeää, että sinulla on SQL-tietokantasi tunnukset, jotta pääset sisään tietokantaasi.
SQL-tunnusten hakemisesta voi lukea lisää ohjeesta:[]({legacy}1909)


![](images/img_3125.jpg){.thumbnail}


## 2. Vaihe: lähdetiedostojen haku

- Mene WordPress-kehittäjän sivuille

Löydät sieltä linkin, josta voit ladata järjestelmän tuoreimman vakaan version tietokoneellesi.


Lataamasi tiedosto on yleensä pakattu (Zip),joten tietokoneesi täytyy purkaa se. Mikäli tarvitset apua tiedoston purkamiseen, internetistä löytyy lukuisia ohjeita siihen.

![](images/img_3126.jpg){.thumbnail}


## 3. Vaihe: tiedostojen asettaminen webhotelliin FTP:n avulla

## Tiedoston purkaminen
Avaa kansio, johon latasit pakatun tiedoston.

Klikkaa hiiren oikeaa näppäintä kansion kohdalla ja valitse "Pura kaikki".

Ilmoita kohde, johon puretut tiedostot laitetaan.

Verkosta löytyy lukuisia ohjeita tiedostojen purkamiseen liittyen. Katso niitä, jos et pääse tästä kohdasta eteenpäin.

Juurikansion nimeksi tulee
"Wordpress"

![](images/img_3127.jpg){.thumbnail}

## Kirjautuminen webhotelliin FTP:llä
Webhotelliin täytyy kirjautua sisään, jotta sinne voidaan asettaa Worpdress-tiedostoja.

Webhotelliin kirjautumisesta FTP:llä on myös saatavana ohje: []({legacy}1374)

![](images/img_3128.jpg){.thumbnail}

## Tiedostojen siirto FTP:llä
Seuraa näitä vaiheita tiedostojen siirtämiseksi FTP:llä.

## 1. Vaihe
Yhdistä ensin FileZillaan.

Avaa osassa "Site local", joka vastaa tietokoneellasi olevaa tiedostolistaa, purettu "wordpress"-kansio. Se sisältää kaikki sisällönhallintajärjestelmän tiedostot.

Avaa webhotelliasi vastaavassa osiossa "Site distant", "www"-kansio. Tähän kansioon tullaan siirtämään kaikki sisällönhallintajärjestelmän tiedostot.

Jos kansiota ei ole olemassa, se voidaan luoda.

Tiedostot täytyy ehdottomasti aseettaa "www"-kansioon, muuten asennusprosessiin ei pääse verkkotunnuksestasi.

![](images/img_3129.jpg){.thumbnail}

## 2. Vaihe
Kun edellisen vaiheen kansiot on avattu:

Löydät osiosta "Site local" kaikki Wordpress-järjestelmän asennukseen tarvittavat tiedostot.

Valitaksesi kaikki tiedostot klikkaa CTRL+A.

Rahaa seuraavaksi tiedostot osiosta "Site distant""www"-kansioon.

On hyvin mahdollista, että "www"-kansio ei ole tyhjä. Sen sisältämät muut tiedostot täytyy ehdottomasti poistaa ennen siirtoa. Tähän kohtaan palataan myöhemmin tässä ohjeessa.

![](images/img_3130.jpg){.thumbnail}

## 3. Vaihe
Tiedostojen siirto on käynnissä.

Odota, että kaikki tiedostot ovat siirtyneet FTP-palvelimelle. Tässä voi kestää joitakin minuutteja.

Kun siirto on päättynyt, varmista että kaikki tiedostot ovat siirtyneet oikein.

Tämä toimenpide päättää osion, joka koskee tiedostojen asettamista FTP-palvelimelle.

![](images/img_3131.jpg){.thumbnail}


## 4. Vaihe: linkki tietokantaan

## Seuraa Wordpress-järjestelmän asennusohjeita

- Virheiden vältämiseksi tyhjennä selaimesi välimuisti ennen asennuksen jatkamista.


Sisällönhallintajärjestelmän ohjeita on seurattava yhdyslinkin luomiseksi tietokannan ja Wordpressin välille.

## 1. Vaihe
Mene verkkotunnukseesi.

Seuraava viesti tulee näkyviin.

Klikkaa "Create configuration file" jatkaaksesi.

![](images/img_3132.jpg){.thumbnail}

## 2. Vaihe
Syötä tietokantasi tunnukset (tämän ohjeen alusta löytyy apua tähän kohtaan).

Klikkaa Install Wordpress jatkaaksesi.

![](images/img_3133.jpg){.thumbnail}

## 3. Vaihe
Syötä pyydetyt tietokannastaasi koskevat tiedot:


Database name: tietokannan nimi, määritelty tietokannan luomisen yhteydessä hallintapaneelissa.

Username(login): Sama kuin tietokannan nimi.

Database password: tietokannan salasana on lähetetty sinulle tietokannan luomisen yhteydessä - olet saattanut muuttaa sitä.

Database server address: syötä tietokannan palvelimen nimi, se ilmoitetaan hallintapaneelissa tai tietokannan asennuksen vahvistussähköpostissa.

Tables prefix: hyödyllinen, jos haluat asentaa useita Wordpress -moduuleja samaan tietokantaan. Siinä tapauksessa jokaiselle asennukselle on käytettävä eri etuliitettä.

Tärkeää: Tietokannan tunnuksia ei lähetetä automaattisesti webhotellin asennuksen yhteydessä. Niiden saamiseksi tietokanta täytyy aktivoida hallintapaneelista.


Klikkaa "Next" vahvistaaksesi yhteyden tiedot.


- Nämä vaiheet päättävät yhdyslinkin luomisen tietokannan ja Wordpress-järjestelmän välille. Jäljellä on enää asennuksen viimeistely.



![](images/img_3134.jpg){.thumbnail}


## Viimeistely

## Asennuksen viimeistely
Jatka ohjeiden seuraamista Wordpress-blogin asennuksen viimeistelemiseksi.

## 1. Vaihe
Klikkaa "Run the Install".

![](images/img_3135.jpg){.thumbnail}

## 2. Vaihe
Syötä pyydetyt tiedot Wordpress-blogisi hallinnasta:

Site deprecated: true
title: anna blogisi nimi

Username: valitse tunnus blogin hallintaa varten

Password, twice: syötä kaksi kertaa haluamasi salasana, jota tulet käyttämään Wordrpess-blogiin kirjautumisessa. 

Your e-mail: syötä voimassa oleva sähköpostiosoite

Privacy: mikäli tämä kohta on valittuna, hakukoneet viittavaat blogiisi. 

Käynnistääksesi Wordpress-järjestelmän asennus klikkaa Install WordPress.

![](images/img_3136.jpg){.thumbnail}

## 3. Vaihe
Wordpress-blogisi on nyt asennettu!

Voit nyt kirjautua ja aloittaa työskentelyn blogisi parissa klikkaamalla Log In.

![](images/img_3137.jpg){.thumbnail}

## Näkymä Wordpress-järjestelmän hallintaosasta
Tässä näet Wordpress-järjestelmän hallintapaneelin.

![](images/img_3138.jpg){.thumbnail}


## Hyödyllistä tietoa
OVH ei voi auttaa Wordpress-järjestelmän konfiguraatioon liittyvissä kysymyksissä.

Saatavilla on kuitenkin aiheeseen liittyvä ohje: []({legacy}2053).

Suosittelemme tutustumaan Wordpress-ratkaisuun keskittyviin foorumeihin.


- Tässä esimerkiksi linkki: [Wordpress-foorumiin](https://wordpress.org/support/).



## Tyypillinen virhe: sivua rakennetaan
Olet siirtänyt tiedostosi FTP-palvelimelle, mutta sivu "site under construction" on edelleen näkyvissä.

OVH asettaa webhotellin asennuksen ajaksi  odotussivun, kunnes olet siirtänyt tiedostot internettiin.

Jos siirrät tiedostot "www"-kansioon poistamatta OVH:n lisäämää sisältöä, voi tästä aiheutua ongelmia. 

Tilanteen korjaamiseksi OVH:n webhotelliin asettama tiedosto "index.html" on poistettava tai nimettävä uudelleen.

Kannattaa antaa tiedostolle vain uusi nimi, jotta voit aktivoida sen koska tahansa uudestaan ja käyttää sitä jälleen odotussivuna.

Muuta hyödyllistä tietoa: verkkosivujesi tiedostojen täytyy sijaita "www"-kansiossa, jotta ne otetaan huomioon.

![](images/img_3139.jpg){.thumbnail}

## - PHP-version virhe
Tässä on kyse palvelimen PHP-versioon liittyvästä virheestä.

Virheen syy on selkeä: viimeistä PHP-versiota ei ole aktivoitu.

PHP-version muokkaamisesta webhotelleissa on tarjolla ohje:[]({legacy}1207)

![](images/img_3140.jpg){.thumbnail}

