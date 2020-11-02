---
deprecated: true
title: 'PHP-optimoinnin käyttöönotto OVH:n webhotellissa'
excerpt: Tämän ohjeen avulla voit ottaa käyttöön PHP—FPM:n OVH:n webhotellissa, joka parantaa PHP-sivujen latausaikoja
slug: php-optimoinnin_kayttoonotto_ovhn_webhotellissa
legacy_guide_number: g1175
---


## Mikä PHP—FPM on?
PHP—FPM on muokattu web-infrastruktuurimme käyttöön PHP-skriptien ja -sivustojen latausaikojen parantamiseksi.

Sitä käsitellään välimuistittamalla (opcode-caching) PHP-koodia www-palvelimelle, jolloin PHP-sivuston uudelleenlataus on nopeampaa.

Laboratoriotestimme ovat osoittaneet jopa 7-kertaista nopeushyötyä verrattuna vanhempiin toimintatapoihin.

## Hallintapaneeli
Ohjeessamme kerromme, miten PHP-FPM aktivoidaan ja PHP-versio määritellään .ovhconfig-tiedoston avulla. Tämän voi helpoiten kuitenkin tehdä hallintapaneelin kautta seuraavaa ohjetta seuraten: []({legacy}1999)

Huomio: tietoturvasyistä PHP-FPM:stä on poistettu seuraavat lisäoptiot:


```
register_globals
magic_quotes_gpc
```



magic_quote_gpc:


- Ilman PHP-FPM:ää:


PHP 5.4: magic_quotes_gpc deaktivoitu


- PHP-FPM:n kanssa :


PHP 5.4: magic_quotes_gpc deaktivoitu
PHP 5.5: magic_quotes_gpc deaktivoitu

## Huomio
Suosittelemme käyttämään PHP-version uusimpia versioita (5.5 tai 5.6), sillä niiden julkaisija ei enää ylläpidä vanhempia versioita, joissa voi sen vuoksi olla tietoturvahaavoittuvuuksia.


## Miten PHP—FPM aktivoidaan?
PHP:n konfiguroimiseksi käsin .ovhconfig-tiedoston avulla siirrä ".ovhconfig"-tiedosto webhotellin juurihakemistoon FTP-ohjelmalla.

HUOM1: .ovhconfig-tiedosto on oletuksena kaikissa uusissa webhotellituotteissa (2014-tuotteista alkaen). Vanhemmissa webhotelleissa se on luotava ja siirrettävä levytilan juureen.
Tiedostoa ei lisätä automaattisesti vanhoihin tuotteisiin eikä myöskään tasoa vaihdettaessa, sillä eräät asetukset eivät ole yhteensopivia käytetyn PHP-version kanssa.

HUOM2: .ovhconfig-tiedostoa ei voi siirtää muualle kuin ensimmäisen tason juurihakemistoon. Useita eri PHP-konfigurointeja ei voi käyttää rinnakkain samassa webhotellissa useita eri tiedostoja käyttäen (paitsi [oikein ilmoitetulla moniverkkotunnuksella](https://www.ovh-hosting.fi/g1332.verkkotunnus_ja_aliverkkotunnus_webhotelliin)).

".ovhconfig"-tiedoston on sisällettävä seuraava koodi:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```


Mikäli PHP-FPM ei toimikaan, moottori käyttää vanhaa PHP-moottoria.


## Mitkä PHP-versiot ovat saatavilla?
Voit käyttää seuraavia PHP-versioita:

- PHP 7.0
- 5.6 (oletusversio)
- 5.5 (poistuu pian käytöstä, ei suositeltava)
- 5.4 (vanhentunut versio)
- 5.3 (vanhentunut versio)

- Saatavilla on myös ionCube

Huomioitavaa: kun .ovhconfig on käytössä, käytettävä PHP-versio on se, mikä kohdassa app.engine.version määritellään. ”SetEnv PHP_VER” jätetään tässä tapauksessa huomioimatta.



## Tiedosto .ovhconfig on luotu ja nyt palvelin palauttaa virheilmoituksen ”Not Implemented”
Tämä virhe tarkoittaa sitä, että .ovhconfig-tiedostossa määritelty engine-versio ei ole olemassa. Tarkasta sivustosi virhelogit osoitteesta https://logs.ovh.net/sivusto.fi saadaksesi lisätietoa virheestä.


## Mikä on asetus ”environment”?
Tämä mahdollistaa staattisten tiedostojen välimuistituksen ja PHP-virheiden esittämisen Development-tilassa:

- Välimuistitus ei ole käytössä
- PHP-virheet näytetään suoraan sivustolla (display_errors = On)

Production-tila: (oletus)
- Staattiset tiedostot kuten kuvat, ääni- ja videotiedostot tarjoillaan pidemmällä vanhentumisajalla (”expiration”), joka maksimoi arvon, johon perustuen sivustolla vierailevan kävijän selaimen välimuistissa tiedostoa säilytetään.
- PHP-virheitä ei näytetä sivustolla (display_errors = Off)




## Mikä asetus ”http.firewall” on?
Tämä mahdollistaa www-palvelimen mod_security-laajennuksen käyttöönoton,
sitä varten lisää security

Oletusarvo on none.


## Onko ionCube saatavilla PHP—FPM:n kanssa?
Kyllä, ionCube on saatavilla seuraavien versioiden kanssa:

- 5.6
- 5.5
- 5.4


Webhotellissa toimivien PHP-skriptien koodaamiseksi käytä IonCube-koodaajaa. Lisätietoja IonCuben usein kysytyistä kysymyksistä:
[IonCube FAQ](http://www.ioncube.com/faq.php)


## Kuinka PHP—FPM poistetaan käytöstä?
Syötä .ovhconfig-tiedostoon seuraavat rivit:


```
app.engine=phpcgi
app.engine.version=AUTO
```




## Lisätietoja .ovhconfig-tiedostosta:
Konfigurointitiedoston sovellustiedot:


```
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
; php:
; IMPORTANT: register_globals and magic_quotes_gpc are off for security
; php options .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback or previous system
; in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
; (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
; default: 5.6
; for phpcgi:
; this options is ignored (= fallback in AUTO)
;
app.engine.version=5.6

; __http.firewall__ used to add application firewall (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
; production:
; apache will maximise local cache
; mod_expires will grow up TTL of js, css, pdf, images, video, audio
; you can override it changing expiration explicitly or in your .htaccess
; feel free to look on our guide.
; development:
; no expiration is added, files are not locally in cache,
; will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=development
```



