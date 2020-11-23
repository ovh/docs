---
deprecated: true
title: 'Sisällönhallintajärjestelmä, Drupalin asennus käsin'
excerpt: Kuinka asennan Drupalin käsin?
id: '1976'
slug: sisallonhallintajarjestelma_drupalin_asennus_kasin
legacy_guide_number: g1976
---


## 1. Osa: asennuksen valmistelu
Tarvittavat työkalut

Jotta voit asentaa Drupal-sisällönhallintajärjestelmän webhotelliisi, on suositeltavaa käyttää FTP-ohjelmistoa kuten FileZillaa (ilmainen).

## Asennukseen tarvittavat tunnukset:
Varmista, että sinulla on [hallintapaneeliin](https://www.ovh.com/manager/web/login/) kirjautumiseen tarvittava käyttäjätunnus ja salasana (nic-handle). 


- Hae FTP-tunnuksesi ja salasanasi, joiden avulla voit kirjautua webhotelliin.
FTP-tunnusten hakemisesta voi lukea lisää ohjeesta:[]({legacy}1374)

- On tärkeää, että sinulla on myös SQL-tietokantasi tunnukset, jotta pääset sisään tietokantaasi.
SQL-tunnusten hakemisesta voi lukea lisää ohjeesta:[]({legacy}1909)



## 2. Osa: lähdetiedostojen kerääminen

- Mene Drupal-järjestelmän sivulle [](http://drupal.org/).



![](images/img_3234.jpg){.thumbnail}
Löydät sieltä linkin, josta voit ladata järjestelmän tuoreimman vakaan version tietokoneellesi.
Tässä esimerkissä kyse on versiosta 7.41.
Tiedosto, jonka saat on yleensä pakattu (Zip),joten tietokoneesi täytyy purkaa se. Mikäli tarvitset apua tiedoston purkamiseen, internetistä löytyy lukuisia ohjeita siihen.


## 3. Osa: tiedostojen asettaminen webhotelliin FTP:n kautta
Tiedoston purkaminen

Avaa kansio, johon latasit pakatun tiedoston.

Klikkaa hiiren oikeaa näppäintä kansion kohdalla ja valitse "Pura kaikki" (tai Pura tässä). 

Ilmoita kohde, johon puretut tiedostot laitetaan.

Verkosta löytyy lukuisia ohjeita tiedostojen purkamiseen liittyen. Katso niitä, jos et pääse tästä kohdasta eteenpäin.

Juurikansion nimeksi tulee
"Drupal-xxx" (xxx korvataan yleensä version numerolla).

![](images/img_3233.jpg){.thumbnail}
Kirjautuminen webhotelliin FTP:llä

Webhotelliin täytyy kirjautua sisään, jotta sinne voi asettaa Drupal-tiedostoja.

Webhotelliin kirjautumisesta FTP:llä on myös saatavina ohje: []({legacy}1374)

- Tiedostojen siirto FTP:n kautta


Seuraa vaiheita siirtääksesi tiedostoja FTP:llä.

## 1. Vaihe
Yhdistä ensin FileZillaan.

Avaa osassa "Site local", joka vastaa tietokoneellasi olevaa tiedostolistaa, purettu "Drupal-xxx"-kansio. Se sisältää kaikki sisällönhallintajärjestelmän tiedostot.

Avaa webhotelliasi vastaavassa osiossa "Site distant", "www"-kansio. Tähän kansioon tullaan siirtämään kaikki sisällönhallintajärjestelmän tiedostot.
Mikäli kansiota ei ole olemassa, voit luoda sen.
Tiedostot täytyy ehdottomasti aseettaa "www"-kansioon, muuten asennusprosessiin ei pääse verkkotunnuksestasi.

## 2. Vaihe
Kun edellisen vaiheen kansiot on avattu:

Löydät osiosta "Site local" kaikki Drupal-järjestelmän asennukseen tarvittavat tiedostot.

Valitaksesi kaikki tiedostot klikkaa CTRL+A.

Rahaa seuraavaksi tiedostot osiosta "Site distant""www"-kansioon.

![](images/img_3199.jpg){.thumbnail}
On hyvin mahdollista, että "www"-kansio ei ole tyhjä. Sen sisältämät muut tiedostot täytyy ehdottomasti poistaa ennen siirtoa. Tähän kohtaan palataan myöhemmin tässä ohjeessa.

## 3. Vaihe
Tiedostojen siirto on käynnissä.

Odota, että kaikki tiedostot ovat siirtyneet FTP-palvelimelle. Tässä voi kestää joitakin minuutteja.

Kun siirto on päättynyt, varmista että kaikki tiedostot ovat siirtyneet oikein.

Tämä toimenpide päättää osion, joka koskee tiedostojen asettamista FTP-palvelimelle.

![](images/img_3200.jpg){.thumbnail}


## 1. Vaihe: Drupalin asennus
Avaa selain ja kirjoita osoiteriville verkkotunnuksesi.

Tulet tälle sivulle

Ruksaa "Standard
Install with commonly used features pre-configured." ja klikkaa sitten "Save and continue" jatkaaksesi.

![](images/img_3219.jpg){.thumbnail}


## 2. Vaihe - Kielen valinta
Valitse kieli, jota haluat käyttää ohjelman asennuksessa.

![](images/img_3218.jpg){.thumbnail}


## 3. Vaihe: Kirjaudu tietokantaan
Käytä tietokantasi tunnuksia. (Aiheesta löytyy apua ohjeessa []({legacy}1374).)

Syötä pyydetyt tietokannastaasi koskevat tiedot:


Ruksaa "MySQL, MariaDB tai vastaava ".

-Database name: tietokannan nimi, määritelty tietokannan luomisen yhteydessä hallintapaneelissa.

-Username: Identtinen tietokannan nimen kanssa.

Database password: tietokannan salasana on lähetetty sinulle tietokannan luomisen yhteydessä - olet saattanut muuttaa sitä.


- Klikkaa sitten ADVANCED OPTIONS.



![](images/img_3202.jpg){.thumbnail}
Database server address: syötä tietokannan palvelimen nimi, se ilmoitetaan hallintapaneelissa tai tietokannan asennuksen vahvistussähköpostissa. Se loppuu yleensä ".mysql.db"-päätteeseen.


- Tietokannan portti: Jätä tyhjäksi.

Tables prefix: hyödyllinen, jos haluat asentaa useita PrestaShop -moduuleja samaan tietokantaan. Siinä tapauksessa jokaiselle asennukselle on käytettävä eri etuliitettä.


![](images/img_3203.jpg){.thumbnail}
Tärkeää: Tietokannan tunnuksia ei lähetetä automaattisesti webhotellin asennuksen yhteydessä. Niiden saamiseksi, tietokanta täytyy aktivoida hallintapaneelista.
Klikkaa "Save and continue" vahvistaaksesi tietokannan kirjautumistiedot.


## 4. Vaihe - Eteneminen
Mikäli täytit kaikki tietokannan tiedot oikein asennus käynnistyy. Jos näin ei tapahdu, tiedot on täytetävä uudestaan oikein.


- Odota, että asennus on valmis.



![](images/img_3190.jpg){.thumbnail}


## 5. Vaihe - Drupalin administraation konfigurointi
Tässä Drupal-järjestelmän hallintaan liittyvät asetukset:

- Site deprecated: true
title: anna verkkotunnuksesi nimi

- Site email: Ilmoita osoite, joka käyttää sivuasi sähköpostien lähettämiseen.

- Username: Ilmoita verkkosivusi administraattorin tilin nimi. Esimerkissä nimeksi on valittu "admin".

- Email: Ilmoita sähköpostiosoite, joka liitetään administraattorin tiliin. 

- Password: Ilmoita administraattorin tilin salasana.
- Confirm password: Toista sama salasana.


Siirry alemmas sivulle.

![](images/img_3206.jpg){.thumbnail}

- Default Country: valitse sivun maa/kieli.
- Default time zone: valitse sivun aikavyöhyke


-Automatic updates & email notifications: Näiden vaihtoehtojen aktivoimista suositellaan ennen kuin nostat sivusi vakautta ja turvallisuutta.


- Klikkaa sitten Save and Continue.



![](images/img_3207.jpg){.thumbnail}


## 6. Vaihe - Viimeistely
Sisällönhallintajärjestelmä Drupal on nyt asennettu. Klikkaa Visit my new Site.

![](images/img_3208.jpg){.thumbnail}
Nyt tarvitsee vain käyttää Drupal-järjestelmää ja rakentaa sivuasi.

![](images/img_3209.jpg){.thumbnail}


## Drupal-tuki
Suosittelemme konsultoimaan Drupal-järjestelmälle omistettuja foorumeja.

- Mikäli tarvitset apua järjestelmän käytössä, voit katsoa sivua [url="https://www.drupal.org/support"].


OVH ei voi auttaa Drupalin konfiguraatioon liittyvissä kysymyksissä.
Saatavilla on kuitenkin aiheeseen liittyvä ohje: []({legacy}2053).


## Tyypilliset virheet

- Virhe "OVH - Sivua rakennetaan"


Olet siirtänyt tiedostosi FTP-palvelimelle, mutta sivu "site under construction" on edelleen näkyvissä.

Webhotellin asennuksen ajaksi, OVH asettaa odotussivun kunnes olet siirtänyt tiedostot internettiin.

Jos siirrät tiedostot "www"-kansioon poistamatta OVH:n lisäämää sisältöä, voi tästä aiheutua ongelmia. 

Tilanteen korjaamiseksi, OVH:n webhotelliin asettama tiedosto "index.html" on poistettava tai nimettävä uudelleen.

Voi olla hyödyllistä antaa tiedostolle vain uusi nimi, jotta voit aktivoida sen koska tahansa uudestaan ja käyttää sitä jälleen odotussivuna.

Muuta hyödyllistä tietoa: verkkosivujesi tiedostojen täytyy sijaita "www"-kansiossa, jotta ne otetaan huomioon.

![](images/img_3217.jpg){.thumbnail}

- PHP-version virhe


Tässä on kyse palvelimen PHP-versioon liittyvästä virheestä.

Syy virheeseen on selkeä: viimeistä PHP-versiota ei ole aktivoitu.

PHP-version muokkaamisesta webhotelleissa on tarjolla ohje:[]({legacy}1207)

