---
deprecated: true
title: 'Webhotellin .ovhconfig-tiedoston konfigurointi'
slug: ovhconfig-tiedoston-konfigurointi
excerpt: 'Tutustu .ovhconfig-tiedostoon ja opi muokkaamaan sitä'
section: 'Webhotellin konfigurointi'
order: 4
---

**Päivitetty 03.1.2019**

## Tavoite

Saatat haluta muokata [webhotellisi konfiguraatiota](https://www.ovh-hosting.fi/webhotelli/){.external} erilaisista syistä johtuen. Tätä varten OVH on luonut: **.ovhconfig**-tiedoston, jolla voidaan muokata tiettyjä asetuksia.

**Tutustu .ovhconfig-tiedostoon ja opi muokkaamaan sitä.**

## Edellytykset

- Yhteensopiva [webhotellituote](https://www.ovh-hosting.fi/webhotelli/){.external} (ei Cloud Web).
- Tallennustilaan kirjautumiseen tarvittava FTP-käyttäjän salasana. 

## Käytännössä

Kun muutat webhotellisi .ovhconfig-tiedostoa, muutat webhotellisi lisäksi siitä riippuvaisen verkkosivusi konfiguraatiota. Epäasianmukaisen muutoksen tekeminen saattaa näin ollen estää pääsyn verkkosivullesi. Varmista siis, että .ovhconfig-tiedostoon syötetty konfiguraatio on teknisesti yhteensopiva verkkosivusi kanssa.

Tiedoston .ovhconfig muokkaus voidaan toteuttaa kahdella tapaa:

- **muokkaamalla käsin .ovhconfig-tiedostoa**: tämä vaihtoehto on teknisempi ja edellyttää tallennustilaan kirjautumista. Tässä dokumentaatiossa käsittelemme ainoastaan tätä tapaa

- **konfiguraatioavustajan kautta OVH:n hallintapaneelissa**: tämä ratkaisu on vähemmän tekninen ja edellyttää kirjautumista hallintapaneeliin, jossa voit valita toteutettavat muutokset. Katso ohjeita, jotka löytyvät dokumentaatiosta [“Webhotellin konfiguraation muokkaaminen”](https://docs.ovh.com/fi/hosting/webhotellin_kayttoympariston_muokkaaminen/){.external}.

Jatka tämän dokumentaation lukemista, jos haluat muokata .ovhconfig-tiedostoa käsin. 

### Muokkaa .ovhconfig-tiedostoa

#### 1. vaihe: Kirjaudu tallennustilaasi

Tarvitset pääkäyttäjän FTP-käyttäjätunnuksen, sen salasanan sekä FTP-palvelimen osoitteen. Kun sinulla on kaikki nämä elementit, kirjaudu tallennustilaasi. Katso tarvittaessa apua dokumentaation “Verkkosivun siirto verkkoon webhotellissa” kohdasta “[Kirjaudu tallennustilaasi](https://docs.ovh.com/fi/hosting/verkkosivun-siirto-verkkoon/#2-vaihe-sivun-tiedostojen-siirto-verkkoon-tallennustilassa){.external}”.

**Jos sinulla ei ole enää näitä tietoja hallussasi**, kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} ja klikkaa kohtaa `Webhotellit`{.action} vasemman puoleisessa palveluvalikossa. Valitse kyseessä oleva webhotelli ja mene sitten välilehdelle `FTP-SSH`{.action}. Löydät sieltä kirjautumiseen tarvittavat tiedot. FTP-käyttäjän salanaan liittyen mene tarvittaessa ohjeisiin, jotka on kuvattu dokumentaatiossa [“FTP-käyttäjän salasanan vaihtaminen”](https://docs.ovh.com/fi/hosting/ftp-kayttajan-salasanan-vaihtaminen/){.external}.

![ovhconfig](images/ovhconfig-step1.png){.thumbnail}

#### 2. vaihe: Hae tai luo .ovhconfig-tiedosto

Kun olet kirjautunut tallennustilaasi, voit nähdä kaikki siellä ylläpidetyt tiedostot. Pysy webhotellisi juuressa (jota symboloi “/”). Löydät sieltä webhotellisi .ovhconfig-tiedoston.

![ovhconfig](images/ovhconfig-step2.png){.thumbnail}

Sitten on olemassa kaksi vaihtoehtoa:

- **.ovhconfig-tiedosto löytyy**: hae se omalle koneellesi. Suosittelemme ottamaan siitä kopion ennen sen muokkaamista. Tämän avulla voit palauttaa tarpeen vaatiessa alkuperäisen tiedoston.
- **.ovhconfig-tiedostoa ei löydy**: tiedostoa ei ole, luo se omalla koneellasi ja anna sille nimeksi “.ovhconfig”.

#### 3. vaihe: Muokkaa .ovhconfig-tiedostoa

Kun olet saanut käsiisi .ovhconfig-tiedoston voit muokata, sitä. Käytä sitä varten ohjelmistoa kuten esimerkiksi tekstieditoria. .ovhconfig-tiedostosi on sisällettävä koodi, joka näyttää tältä:

```php
app.engine=php
app.engine.version=7.3

http.firewall=none
environment=production

container.image=stable
```

Personoi nämä muuttujat webhotellissasi käytettävän konfiguraation mukaan. 

|Muuttujat|Tiedot|
|---|---|
|app.engine|Mahdollistaa webhotellisi käyttämän PHP-moottorin muokkauksen. Syötä “php” aktivoidaksesi PHP-FPM-kiihdytin ja “phpcgi” sen käytöstä poistamiseksi.|
|app.engine.version|Mahdollistaa webhotellisi käyttämän PHP-version määrittämisen [OVH:n tarjoamista vaihtoehdoista](https://www.ovh-hosting.fi/webhotelli/php.xml){.external}. Syötä haluamasi versio.|
|http.firewall|Mahdollistaa [OVH:n webhotellien mukana toimitetun palomuurin](https://www.ovh-hosting.fi/webhotelli/mod_security.xml){.external} käyttöön ottamisen tai käytöstä poistamisen. Syötä “security” käyttöönottamista varten tai “none” käytöstä poistamista varten.|
|environment|Mahdollistaa verkkosivusi staattisia tiedostoja sisältävän välimuistin käyttäytymisen hallinnan sekä PHP-virheiden käsittelyn. Syötä “production” maksimoidaksesi välimuistiin asettamisen sekä PHP-virheiden häivyttämisen tai “development”, jotta yhtään välimuistia ei sovelleta ja PHP-virheet näkyvät.  |
|container.image|Mahdollistaa webhotellin käyttämän käyttöympäristön muokkauksen. Syötä valitsemasi moottori. Voit löytää ne dokumentaatiostamme: [“Katso saatavilla olevat konfiguraatiot”](https://docs.ovh.com/fi/hosting/webhotellin_kayttoympariston_muokkaaminen/#katso-saatavilla-olevat-konfiguraatiot){.external}.|

Löydät alla .ovhconfig-tiedoston täydelliset sovellustiedot:

```php
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
;   php:
;       IMPORTANT: register_globals and magic_quotes_gpc are off for security
;       php optiones .htaccess (like php version) are ignored
;   phpcgi:
;       IMPORTANT this is a fallback to previous system
;       in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
;       (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
;   default: 7.3
; for phpcgi:
;   this options is ignored (= fallback in AUTO)
;
app.engine.version=7.3

; __http.firewall__ used to add application firewall  (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
;   production:
;       apache will maximise local cache
;       mod_expires will grow up TTL of js, css, pdf, images, video, audio
;       you can override it changing expiration explicitly in your .htaccess
;       feel free to look on our guide.
;   development:
;       no expiration is added, files are not locally in cache,
;       will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=production

; __container.image__
;
; values: legacy | stable | jessie.i386 | testing
;
container.image=stable
```

#### 4. vaihe: .ovhconfig-tiedoston lataus tallennustilaan

Kun .ovhconfig-tiedosto on muokattu, jäljellä on enää sen lataaminen tallennustilaan. Sitä varten, edelleen kirjautuneena ja tallennustilan juuressa (jota voidaan symboloida merkillä “/”) lataa juuri muokattu .ovhconfig-tiedosto. Jos jokin tiedosto on jo olemassa, korvaa se.

### .ovhconfig-tiedostojen edistynyt käyttö

Jos käytät webhotelliasi useamman verkkosivuston ylläpitoon, olet varmastikin konfiguroinut Multisite-sivuja. Erilaisista syistä johtuen saatat haluta käyttää joillakin Multisite-sivuillasi eri PHP-versiota.

Sitä varten sinun on luotava .ovhconfig-tiedosto kyseessä oleville halutun PHP-version sisältäville Multisite-sivuille. Voit katsoa apua tämän dokumentaation osiossa [“Muokkaa .ovhconfig-tiedostoa”](https://docs.ovh.com/fi/hosting/ovhconfig-tiedoston-konfigurointi/#muokkaa-ovhconfig-tiedostoa){.external} kuvatuista toimenpiteistä. Kun .ovhconfig-tiedosto on ladattava tallennustilaasi, varmista että teet sen Multisiten juurikansiossa. Voit löytää Multisite-sivujen juurikansion hallintapaneelistasi kyseessä olevan webhotellin välilehdeltä `Multisite`{.action}. 

> [!warning]
>
> Toisen käyttöympäristön määrittäminen ei ole mahdollista. Ainoastaan tallennustilasi juuressa olevassa .ovhconfig-tiedostossa oleva huomioidaan.
> 

![ovhconfig](images/ovhconfig-step3.png){.thumbnail}

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.