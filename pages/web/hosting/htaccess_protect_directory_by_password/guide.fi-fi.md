---
deprecated: true
title: 'Webhotelli: htaccess, kuinka hakemisto suojataan tunnistautumisella?'
excerpt: Kuinka hakemisto suojataan tunnistautumisella?
slug: webhotelli_htaccess_kuinka_hakemisto_suojataan_tunnistautumisella
legacy_guide_number: g1968
---


## Luo salasanatiedosto
Ensin on luotava tiedosto, joka sisältää listan käyttäjistä joilla on oikeus kirjautumiseen sekä heidän salasanansa. Yleensä sitä varten luodaan .htpasswd-tiedosto, jota .htaccess-tiedosto tulee käyttämään. Kyseessä on yksinkertainen tekstitiedosto, jonka sisällä mainitaan salatussa muodossa käyttäjätunnukset ja niihin liittyvät salasanat. OVH:n sivuilta löytyy sivu, jossa voit salata salasanasi:

[https://www.ovh-hosting.fi/tuki/tyokalut/crypt_password.pl](https://www.ovh-hosting.fi/tuki/tyokalut/crypt_password.pl)

## Huomio:
Windowsissa et voi luoda suoraan tiedostoa nimeltä .htaccess tai .htpasswd. Tiedosto täytyy siis nimetä aluksi toisella nimellä, siirtää se verkkoon ja nimetä FTP-asiakasohjelmalla uudelleen muotoon .htaccess tai .htpasswd.

Kun olet täyttänyt kaksi ensimmäistä kenttää (avain koostuu kahdesta valitsemastasi merkistä), saat salasanan salatussa muodossa kentässä "Kryptattu sana". Kopioi sitä vastaava teksti .htpasswd-tiedostoon (katso alla). .htpassword-tiedoston ei tarvitse välttämätt olla samassa paikassa .htaccess-tiedoston kanssa. Voit esimerkiksi asettaa sen webhotellin juurikansioon ja käyttää sitä suojaamaan useita sivujesi hakemistoja. On otettava kuitenkin huomioon, että useat .htaccess-tiedostot voivat käytää yhtä .htpasswd-tiedostoa. .htpasswd-tiedostossa on oltava rivi, jolla käyttäjä määrittää käyttäjätunnuksen sekä sen parina olevan salasanan. 

Rivit ovat seuraavassa muodossa:


```
käyttäjä:sala_sana_kryptattu
```


Esimerkki käyttäjälle: "Admin"
ja salasanan: ovh1234
josta saataaisiin seuraava rivi:
Admin:gl0IiOirI2n6M

Kun .htpasswd-tiedosto on luoto, täytyy enää asettaa se webhotelliin ja siirtyä seuraavaan vaiheeseen: .htaccess-tiedostojen luomiseen.

## Huomio:
Muista lisätä kryptatun salasanan loppuun vaununpalautus (Carriage-Return).


## Luo .htaccess-tiedosto
Estääksesi pääsyn koko hakemistoon, luo tseuraavaa muotoa oleva .htaccess-tekstitiedosto ja aseta se suojattavaan hakemistoon. 

HUOM, Seuraavassa esimerkissä on korvattava oma_ftp_login FTP-tunnuksellasi. Se löytyy hallintapaneeline osassa "Alusta", ja siellä kuvaakkessa "FTP"


```
AuthUserFile /home/oma_ftp_login/www/.htpasswd
AuthGroupFile /dev/null
AuthName "Accès Restreint"
AuthType Basic
require valid-user
```


Ylläolevassa esimerkissä .htpasswd-tiedosto on webhotellin /www-kansiossa.

## Vanhoissa tuotteissa
Vanhoissa Start ja 1000GP-tuotteissa, polku authuserfile-tiedoston asettamiseen on erilainen.
Olet sanut sen aktivointiviestissä. Mikäli näin ei ole, tai olet hävittänyt kyseisen sähköpostiviestin, voit käyttää seuraavaa PHP-skriptiä:
code]
<?php
echo realpath("path.php");
?>
[/code]


## Estä pääsy yhteen tai useampaan tiettyyn tiedostoon.
Estääksesi pääsyn yhteen tai useampaan tiettyyn tiedostoon, täytyy vain lisätä tuntomerkki (FILES-tagi jokaiseen tiedostoon):


```
<Files test.php>

AuthUserFile /home/votre_login_ftp/www/.htpasswd
AuthGroupFile /dev/null
AuthName "Accès Restreint"
AuthType basic
require valid-user

</Files>
```




## 
Kaikki mitä .htaccess-tiedostosta tarvitsee tietää löytyy: [tästä linkistä](https://www.ovh-hosting.fi/g1967.kaikki_htaccess_tiedostosta)

