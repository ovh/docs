---
deprecated: true
title: 'Webhotellit: Webhotellien tekniset erityispiirteet'
excerpt: Ohjeessa selvitetään webhotelleihin liittyviä teknisiä erityispiirteitä.
id: '1463'
slug: webhotellit_webhotellien_tekniset_erityispiirteet
legacy_guide_number: g1463
---


## FTP-ohjelma - passiivinen
FTP-ohjelma päivitetään seuraavasti:

FileZilla:

Mene valikkoon "Muokkaa" -- "Asetukset..." -- "Yhteys" -- "FTP"

Rastita ruutu "Passiivinen (suositeltu)" oikealla osiossa "Siirtotapa".

Cyberduck:

Klikkaa "Uusi yhteys".

Valitse nuoli "Lisää optioita" ja valitse "Passiivinen" ja "Yhteystapa".


## Yhtäaikaiset yhteydenotot tietokantaan

- Tällä hetkellä webhotellien ("Perso"/"Pro"/"Module") tietokannoissa on rajattu 30 samanaikaiseen yhteyteen.




## Yhteydet ulkopuolisesta palvelimesta

- Tietoturvasyistä ei ole mahdollista ottaa ulkopuolisesta palvelimesta yhteyttä webhotellin tietokantaan.


Ainoastaan OVH:n jaetut palvelimet voivat yhdistää MySQL-palvelimelle.

Ulkopuolisten palvelimien yhteydestä aiheutuu seuraava virhe:


```
Warning: MySQL Connection Failed: Host "ip.votre.connexion" is not allowed to connect ...
```



- Ylläoleva pätee tällä hetkellä myös Private SQL -tuotteeseen.




## Webhotellin SQL-palvelimen muuttujat
Miten löydetään esimerkiksi muuttujan arvo max_allowed_packet?

Mene PhpMyAdmin-käyttöliittymään ja kirjoita SQL-pyyntojen kirjoituskonsoliin:
show variables;

Saat näkyviin muuttujalistauksen ja voit mennä listalla alas haluttuun muuttujaan.


## PHP-FPM
OVH on muokannut web-infrastruktuuriaan nopeuttaakseen PHP-vastauksia.

Testilaboratoriossamme saavutimme jopa seitsemän kertaa nopamman suorituskyvyn kuin vanhalla mekanismilla.

Ohje PHP-FPM:N käytöstä:


- []({legacy}1175)


Joitakin palvelinmuuttujia muutetaan PHP-FPM:ää käyttäen:

|Muuttuja|ilman PHP-FPM:ää|PHP-FPM:n kanssa|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|



- Pääverkkotunnuksen .ovhconfig-tiedosto toimii webhotellin juuressa tai ensimmäisen tason alahakemistossa (esim. /www/) mutta ei toisen tai sitä alemman tason alahakemistoissa (esim. /www/test/ ja /www/test/test2/).

- PHP-FPM on oletuksena aktivoitu 2014-mallisiin webhotelleihin.




## Palvelimen suhteellinen polku
Palvelimen tietoturvapäivityksen (4.6.2014) vuoksi palvelimen palauttama suhteellinen polku on vaihtunut.

Seuraavan skriptin kautta:


```
<?php
echo $_SERVER['SCRIPT_FILENAME'];
?>
```


Polku oli tyypiltään: /homez.XXX/USER/Nom_DOSSIER/test.php

Päätili on vastaisuudessa: /home/USER/Nom_DOSSIER/test.php


- Yhteensopivuus säilyy symbolisten linkkien avulla (/homez.XXX/USER on linkki kohti /home/USER)


Symboliset linkit pysyvät aina voimassa.


## Palvelimen host
Hostia ei voi hakea suoraan REMOTE_HOST-toiminnolla:


```
<?php
echo $_SERVER['REMOTE_HOST'] ;
?>
```


Sen sijaan voi käyttää toimintoa gethostbyaddr()


```
<?php
echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
?>
```




## FTP-yhteys PHP:n kautta
Palvelimen tietoturvapäivityksen (4.6.2014) vuoksi FTP-yhteys PHP:n kautta ei ole enää mahdollinen.

PHP-virhe, joka voi esiintyä:


```
Warning: ftp_put() [function.ftp-put]: bind() failed: Permission denied (13)
```


bind()-toiminto ei enää ole mahdollinen

Tämän välttämiseksi riittää, että aktivoi passiivisen-moodin:

PHP-koodi:

```
$conn_id = ftp_connect($ftp_server);
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);
# switch to passive mode (mandatory on Ovh shared hosting)
ftp_pasv( $conn_id, true );
```



- Aktiivinen FTP ei ole enää mahdollinen. Käytä passiivista moodia.




## Jaetut kirjastot
Saatavilla olevat kirjastot:

|Kirjasto|Saatavuus|
|Django Python|ei aktiivinen|
|FFmpeg|ei aktiivinen|
|memcached|ei aktiivinen|
|apc|ei aktiivinen|
|imagick|ei aktiivinen|
|Imagemagick|aktiivinen|
|GD|aktiivinen|
|zend (opcache)|aktiivinen|
|PDO|aktiivinen|
|Zip - Gzip|aktiivinen|


Omasta klusterista löytyy tietoja seuraavaa linkkiä käyttämällä:
[https://webhosting-infos.hosting.ovh.net](https://webhosting-infos.hosting.ovh.net)

Korvaa ilmoitettu klusteri URL-osoitteessa omalla klusterilla, joka löytyy hallintapaneelista:"Webhotellit" - "Webhotellit" - "Synteesi".
Huomio: PHP-FPM:ää käyttäessä tietoturvasyistä seuraavat lisäoptiot ovat poistettu käytöstä:


- register_globals
- magic_quotes_gpc




## PHP-skripti SSH:n kautta
Tällä hetkellä webhotelleissa SSH-yhteydellä käytetty PHP-versio oletuksena on 4.4.9.


- Esimerkki komentorivistä test.php-tiedoston suorittamiseksi PHP-versiolla 4.4.9.


```
php test.php
```


- Jos haluat käyttää PHP-versiota 5.3 skriptiin test.php.


```
php.ORIG.5_3 test.php
```


- Jos haluat käyttää PHP-versiota 5.4 skriptiin test.php.


```
php.ORIG.5_4 -c /usr/local/lib/php.ini-2 test.php
```




