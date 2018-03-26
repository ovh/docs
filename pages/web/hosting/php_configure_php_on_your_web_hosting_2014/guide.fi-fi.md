---
title: 'PHP-konfigurointi OVH:n webhotellissa'
excerpt: 'Tätä ohjetta seuraamalla voit konfiguroida PHP-asetukset OVH:n webhotellissa.'
id: '1207'
slug: php-konfigurointi_ovhn_webhotellissa
legacy_guide_number: g1207
---


## Miten valitaan oikea PHP-versio?

## Hallintapaneeli
Ohjeessamme kerromme, miten PHP-FPM aktivoidaan ja PHP-versio määritellään .ovhconfig-tiedoston avulla. Tämän voi helpoiten kuitenkin tehdä hallintapaneelin kautta seuraavaa ohjetta seuraten: []({legacy}1999)
PHP:n konfiguroimiseksi käsin .ovhconfig-tiedoston avulla siirrä ".ovhconfig"-tiedosto webhotellin juurihakemistoon FTP-ohjelmalla.

Esimerkiksi PHP 5.6-version käyttämiseksi ".ovhconfig"-tiedoston on sisällettävä seuraava koodi:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```




## Mitkä PHP-versiot ovat käytettävissä?
Voit käyttää seuraavia PHP-versioita:


- PHP 7.0
- 5.6 (oletusversio)
- 5.5 (poistuu pian käytöstä, ei suositeltava)
- 5.4 (vanhentunut versio)
- 5.3 (vanhentunut versio)


HUOMIOI: PHP:n kehittäjätiimi ei jatka aktiivista vanhempien versioiden kehitystä. Päivitämme PHP-versiot sitä mukaa kun vakaat päivitykset tulevat saataville, mutta lopetamme vanhempien PHP-versioiden päivittämisen kun niiden kehitystyökin lakkaa. Tämän johdosta suosittelemmekin että tarkistat säännöllisesti, että sivustosi käyttämä PHP-versio on tarpeeksi tuore. Voit seurata eri webhotellihuoltotöitämme [tämän linkin](https://status.ovh.net) kautta.

Ota huomioon että kun .ovhconfig-tiedosto on sijoitettuna webhotellitilaasi, käytettävä PHP-versio määritellään rivin app.engine.version perusteella. Tästä seuraa se, että tiedostossa .htaccess olevat arvot kuten SetEnv PHP_VER, jätetään huomioimatta.


## Loin .ovhconfig-tiedoston ja saan ”Not Implemented”-virheilmoituksen?
Virheilmoitus tarkoittaa sitä, että .ovhconfig-tiedostossa määrittelemäsi moottori ei ole olemassa. Suosittelemme katsomaan ”error.log”-virheilmoituslokitiedostoa.


## Mitä ”environment”-muuttuja tarkoittaa?
Tällä muuttujalla voit määritellä välimuistin staattisille tiedostoille sekä PHP-virheiden käsittelyn.

Development-tilassa:

- välimuistitusta ei tapahdu
- PHP-virheet näytetään sivustolla (display_errors=On)

Production-tilassa (oletusasetus)
- staattiset tiedostot kuten kuvat, videot, musiikkitiedostot jne. säilötään kauan mikä maksimoi tiedostojen välimuistituksen selaimissa
- PHP-logeja ei näytetä sivustolla




## Mitä ”http.firewall”-muuttuja tarkoittaa?
Muuttuja mahdollistaa mod_security-sovelluspalomuurin käytön. Käyttääksesi palomuuria, määrittele muuttujalle arvo security. Muuttujalla on oletuksena none-arvo.


## .ovhconfig-tiedoston yksityiskohdat
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




## Mitkä PHP-versiot ovat käytettävissä?
Jos sivustosi käyttää sisällönhallintajärjestelmää kuten WordPress, Joomla tai PrestaShop, löydät vaaditun PHP-version eri sovelluksien virallisilta kotisivuilta tai moduulin hallintasivulta. Jos käyttämäsi sisällönhallintajärjestelmää päivitetään aktiivisesti sen kehittäjätiimin toimesta ja sovellusversio on ajan tasalla, sen pitäisi uusimilla PHP-versioilla. Useimmissa sisällönhallintajärjestelmissä on sisäänrakennettu päivitystyökalu, joka mahdollistaa sovelluksen helpon päivittämisen. Jotkin päivitykset asennetaan oletuksena automaattisesti, kuten WordPressin versio 3.7 vuodesta 2013 eteenpäin. 

Jos sivustosi on oman kehitystyösi tulosta tai muuten kustomoitu ratkaisu, on määriteltävä mitkä PHP-versiot ovat sopivia.

Tiedoksi ohessa ristiriitoja aiheuttavat PHP-versiot:
> PHP 4 -> PHP 5: http://php.net/manual/en/migration5.incompatible.php
> PHP 5.1 -> PHP 5.2: http://php.net/manual/en/migration52.incompatible.php
> PHP 5.2 -> PHP 5.3: http://php.net/manual/en/migration53.incompatible.php
> PHP 5.3 -> PHP 5.4: http://php.net/manual/en/migration54.incompatible.php
> PHP 5.4 -> PHP 5.5: http://php.net/manual/en/migration55.incompatible.php
> PHP 5.5 -> PHP 5.6: http://php.net/manual/en/migration56.incompatible.php
> de PHP 5.6 à PHP 7.0 : http://php.net/manual/en/migration70.deprecated.php


## Miten valitaan oikea PHP-versio?
Kun tiedät, mitä PHP-versiota haluat käyttää, sinun täytyy määritellä käytettävä versio .ovhconfig-tiedostoon kuten tämän ohjeen alussa on opastettu.

Jos haluat tarkastaa, että sivuston PHP-asetukset ovat oikein, voit määritellä OVH:n webhotellipalvelimen ”development”- eli kehitystilaan tarkistaaksesi ja korjataksesi mahdolliset virheet. Muuta .ovhconfig-tiedoston ”environment”-rivin asetus ”production” asetukseen ”development”.


## Mihin .ovhconfig- tiedosto kuuluu?

## Sinulla on webhotelli ja yksi internetsivu
Useimmiten webhotellissasi on vain yksi internetsivu.
Tiedostoa .ovhconfig voi muokata suoraan hallintapaneelissa. Lisätietoa löydät tästä oppaasta: []({legacy}1999)

Mikäli haluat sijoittaa .ovhconfig- tiedoston käsin, täytyy sen olla webhotellin juurihakemistossa, ensimmäisessä kansiossa kuten oheisessa kuvassa ("/")


- Alakansiot käyttävät siis tämän ensimmäisen tiedoston asetuksia.



![](images/img_3764.jpg){.thumbnail}

## Olet määrittänyt useita verkkotunnuksia, jotka eivät tarvitse erilaista konfifguraatiota.
Tässä tapauksessa viitataan alla olevaan kappaleeseen:


- Kaikki yhteydessä olevat verkkotunnukset saavat tietonsa webhotellin juurihakemistossa olevasta.ovhconfig- tiedostosta.



## Olet määritellyt useita verkkotunnuksia, jotka tarvitsevat erilaisen konfiguraation
On mahdollista määrittää eri PHP-versio jokaiselle verkkotunnukselle. Tätä varten .ovhconif- tiedosto on asetettava jokaisen verkkotunnuksen kohdehakemistoon.

Jos yhtään .ovhconfig-tiedostoa ei ole verkkotunnuksen kohdehakemistossa, käytetään webhotellin juuressa olevaa .ovhconfig-tiedostoa.

Eri ympäristöjen käyttämistä saman webhotellin eri .ovhconfig-tiedostoilla ei kuitenkaan suositella. Tämä voi aiheuttaa yhteensopivuusriskejä eri PHP-versioiden ja ympäristöjen välillä välimuistista johtuen. Tämän kaltaisten ongelmien välttämiseksi suosittelemme verkkosivujen jakamista eri webhotelleille.

