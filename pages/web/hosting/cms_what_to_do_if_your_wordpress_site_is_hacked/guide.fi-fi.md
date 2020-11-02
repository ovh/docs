---
deprecated: true
title: 'WordPress-sivuston tietomurto: neuvoja ja esimerkkejä'
excerpt: ''
id: '1874'
slug: wordpress-sivuston_tietomurto_neuvoja_ja_esimerkkeja
legacy_guide_number: g1874
---


## 
Sinulla on OVH:lla hostattu WordPress-sivusto, jota ei enää löydy, se ohjaa jollekin toiselle sivulle tai sinne on ilmestynyt ylimääräisiä mainoksia.

OVH ei vastaa WordPressin käyttötuesta puhelimitse tai sähköpostilla, mutta tässä ohjeessa opastamme, mitä tehdä tietomurtotapauksessa.


## Miksi sivustolleni murtauduttiin?
Sivuston tietomurto aiheutuu yleensä siitä, että sitä ei ole päivitetty, siinä käytetään epävirallisia lisäliitännäisiä tai liian yksinkertaista salasanaa.

Täysin varmaa sivustoa ei olekaan, mutta riskejä voi aina vähentää.

Ongelman korjaamiseksi tai estämiseksi voi tehdä eräitä käytännön toimia kuten WordPressin version, teemojen ja liitännäisten säännölliset päivitykset.

Seuraavaksi selitämme, mitä tehdä verkkosivuston saamiseksi uudelleen Internetiin.

Mikäli OVH on sulkenut sivuston, lue [tämä yleisohje](https://www.ovh-hosting.fi/g1392.cms-asennus-kasin) toimenpiteistä tietoturvamurron aiheuttaman sulkemisen jälkeen.


## Skannaa tietokoneesi
Useissa tapauksissa hyökkäyksen/infektion lähde tulee paikallisesti käyttäjän omalta tietokoneelta kuten kannettavalta tai työkoneelta.

Suorita virus- ja haittaohjelmatarkistus omalla koneella. Virusohjelmat eivät voi poistaa kaikkia viruksia. Niitä kannattaa käyttää useita (paikallinen ja verkosta). Tämä ohjee koskee niin Windows-, Mac- kuin Linux-koneita.


## Tilannearviointi
On toimittava nopeasti, kun tietomurto on havaittu.
Ensiksi on saatava tietää, milloin tietomurto on tapahtunut, jotta voidaan päätellä, voiko OVH vielä palauttaa dataa. Ohjeessa seuraavaksi etsitään tietomurron aiheuttanutta syytä vaihtoehtoineen.


## 
Ennen datan palautusta on tärkeä varmistaa webtiedostojen (FTP) viimeinen muutoshetki haavoittuvuuden etsimiseksi ja korjaamiseksi.
On mahdotonta antaa tarkkoja ohjeita, miten tietomurto on päästy toteuttamaan, mutta yleisesti voidaan lähteä siitä, että hyökkäys on toteutettu käyttäen skriptihaavoittuvuutta ja että tietomurto on tehty HTTP-pyynnön avulla.

Kaikki HTTP-pyynnöt ovat nähtävissä lokitapahtumissa (https://logs.ovh.net/oma_domain).
Korvaa "oma_domain" omalla verkkotunnuksella ja sen päätteellä, esimerkiksi ovh-hosting.fi.
1. Ota muistiin sähköpostissa* annettu aikaleima (päivä ja kellonaika)
2. Tutki lokitapahtumia sähköpostissa annetusta ajankohdasta lähtien ja jatkaen ajassa taaksepäin kunnes löytyy merkintä, joka vaikuttaa omituiselta tai erilaiselta kuin muut. Tähän voi tarvita hieman harjoitusta tai pyyntötyyppien tuntemusta. Kannattaa kuitenkin keskittyä erityisesti POST-tyyppisiin pyyntöihin, jotka usein ovat tietomurron lähteitä
3. Ota muistiin pyynnön kohteena ollut skripti
4. Tutki skriptiä löytääksesi sieltä haavoittuvuus
5. Korjaa haavoittuvuus

*Sähköposti lähetetään ainoastaan, jos webhotelli on suljettu. Jos webhotellia ei ole suljettu, on viimeisten muutosten ajankohta tarkastettava FTP-tilan kautta (tiedostojen päiväys).

Tietomurtajan lisäämän koodin poistaminen ei yksin riitä, myös itse haavoittuvuus on korjattava.

Suosittelemme käyttämään asiantuntevan webmasterin apua tämän tekemiseen ja/tai käyttämään apuna WordPressin virallista forumia.
Asiakaspalvelumme ei voi suoraan auttaa näiden toimien tekemisessä.


## Verkkosivuston palautus
WordPress koostuu tiedostoista ja tietokannasta. Tiedostot voidaan palauttaa aikaisempaan tilaan. OVH:lta löytyy kolmen viikon takainen historia webhotellissa olevista tiedostoista. Tietokannan osalta on mahdollista palauttaa seitsemän päivää aikaisempaan tilaan.
Palautus ei korjaa haavoittuvuutta. Haavoittuvuus on vielä etsittävä ja korjattava.
Palautus korvaa olemassa olevan datan varmuuskopion datalla.


## Tiedostojen palautus FTP:llä
Hallintapaneelin kautta voi palauttaa kaikki FTP-tilan tiedostot, mutta se voi olla monimutkaista, jos samaan webhotelliin liittyy useita verkkotunnuksia.

Mikäli samassa webhotellissa on useita sivustoja, on parempi palauttaa ainoastaan kyseinen hakemisto. Katso [ohje täältä](https://www.ovh-hosting.fi/g1593.Varmuuskopion-tai-tietyn-tiedoston-haku-FTP-yhteydella-FileZillan-avulla).


## SQL-tietokannan palautus
Tässä kaksi ohjetta kuinka tapahtuu tietokannan  [vienti ](http://https://www.ovh-hosting.fi/g1394.cms-asennus-kasin) ja tuonti[](http://https://www.ovh-hosting.fi/g1393.cms-asennus-kasin).


Kun tietokannasta (dump) on tehty varmuuskopio, täytyy   kaikki tasot poistaa [phpMyAdminilla](https://phpmyadmin.ovh.net), jotta voit tuoda varmuuskopiosi.


## Palautuksen jälkeen
Kun palautus on valmis, tarkista onko WordPressiin saatavilla päivityksiä kuten teemoja tai liitännäisiä. 


Käyttämättömien lisäosien asennukset on myös poistettava. Aktivoinnin poistaminen ei riitä, sillä haavoittuvuus voi jäädä jäljelle.

Jos tietomurto on vanha ja palautus ei toimi, voit saada WordPressin toimimaan näin:

## Et voi enää kirjautua WordPress hallintapaneeliin
Tässä tapauksessa sinun täytyy vaihtaa admin-salasanasi[](https://codex.wordpress.org/Resetting_Your_Password) seuraamalla WordPressin virallisia ohjeita. 

Mikäli tämä tuntuu liian monimutkaiselta, voit saada sähköpostisi ajan tasalle phpMyAdminin kautta [url="https://phpmyadmin.ovh.net] kohdassa user. Palaa sitten kirjautumissivulle, klikkaa Unohtunut salasana ja odota, että saat sähköpostin.


## Korvaa WordPress tiedostot juuri ladatun WordPressin tiedostoilla.
Kaikkien tiedostojen korvaaminen varmistaa, etteivät tiedostot ole jääneet murrettuun tilaan.

- mene WordPress pääsivulle [](https://wordpress.org).


Voit ladata sieltä löytyvästä linkistä viimeisimmän vakaan CMS-version tietokoneellesi. 

Tiedosto, jonka vastaanotat on yleensä pakatussa muodossa (zip), joka on purettava tietokoneellasi. Tiedoston purkamiseen löytyy internetistä paljon ohjeita. 

Kun tiedostot on purettu, täytyy ne siirtää FTP-tilaasi, katso ohje tästä[](https://docs.ovh.com/fi/hosting/webhotellit_kotisivujen_siirto_verkkoon/)

Mikäli samassa webhotellissa on useita verkkosivuja, täytyy siirron tapahtua kyseisessä paikassa.

Jotta linkki tietokantaasi on toimiva, täytyy tiedostoawp-config.php muokata.

Siihen tarvitset sähköpostia, jonka olet vastaanottanut tietokannan luonnin yhteydessä. Löydät tiedot hallintapaneelista osiosta tuki > Sähköpostien listaus paitsi salasana, jonka vain sinä tiedät.

Mikäli et muista tietokantasi salasanaa, voit muokata sitä hallintapaneelissa. Ohjeet muokkaukseen löytyvät tästä:
[](https://docs.ovh.com/fi/hosting/webhotellit_kotisivujen_siirto_verkkoon/)
Seuraavaksi on tärkeä tarkistaa WordPressin hallintakäyttöliittymän kautta mahdolliset uudet päivitykset.


## Hyödyllistä tietoa
Suosittelemme käyttämään ainoastaan WordPressin virallisia liitännäisiä (plugin). Epävirallisia liitännäisiä ei välttämättä päivitetä ja ne voivat myöskin sisältää haitallista koodia.

