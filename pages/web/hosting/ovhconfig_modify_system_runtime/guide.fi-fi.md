---
title: Webhotellin käyttöympäristön muokkaaminen
excerpt: Webhotellin käyttöympäristön muokkaaminen
id: '2149'
slug: webhotellin_kayttoympariston_muokkaaminen
legacy_guide_number: g2149
---


## Miten webhotellin käyttöympäristöä muokataan?

## Hallintapaneelissa
Mene tätä varten webhotelliisi ja klikkaa "Muokkaa konfiguraatiota".

![](images/img_4127.jpg){.thumbnail}
Muokkaa sen jälkeen nykyistä konfiguraatiota.

![](images/img_4128.jpg){.thumbnail}
Valitse seuraavaksi alasvetovalikosta yksi alla mainittu käyttöympäristö.

![](images/img_4129.jpg){.thumbnail}

## .ovhconfig-tiedostossa
Päivitys tapahtuu .ovhconfig-tiedoston yhteydessä webhotellin juuressa.
Muokkaukset tapahtuvat siis joko hallintapaneelissa tai suoraan .ovhconfig-tiedostossa.

Lisätietoa .ovhconfig-tiedostosta tästä oppaasta:
[]({legacy}1207)


## Erilaiset käyttöympäristöt

## "Legacy" -ympäristö
Tämä on webhotellien historiallinen ympäristö. Aiemmin se oli ainoa mahdollinen saatavilla oleva konfiguraatio.


- Ympäristöä ylläpidetään edelleen. On kuitenkin suositeltavaa siirtyä "vakaaseen" ympäristöön jatkossa, jotta päästään hyödyntämään viimeisimpä automaattisia päivityksiä. "Legacy"-ympäristö voi olla hyödyllinen vanhoille verkkosivuille, jotka käyttättävät vanhoja PHP-versioita tai ohjelmistoille joita ei enää tueta (esim. vanha mysql-tietokantojen konnektori).


Lisää seuraava rivi .ovhconfig*-tiedostoon:


```
container.image=legacy
```



## "Vakaa" ympäristö
Tämän ympäristön avulla hyödyt viimeisimmistä automaattisista vakaista päivityksistä. .


Lisää seuraava rivi .ovhconfig*-tiedostoon:


```
container.image=stable
```



## "jessie.i386" -ympäristö
Tämän ympäristön avulla voit hyödyntää Debian Jessietä ohjelmistotasolla. 


- Tämä on tällä hetkellä suositeltu versio, kun valitset "vakaan" käyttöympäristön.


Lisää seuraava rivi .ovhconfig*-tiedostoon:


```
container.image=jessie.i386
```


Ei ole suostiteltua valita jessie.i386 -ympäristöä vakaan tilalle, mutta sen avulla voi varmistua ettei päivitys riko sivua, kun "vakaa"-ympäristö muuttaa kuvaa. Näin voi tapahtua ainoastaan siinä tapauksessa, että sivu käyttää ulkopuolisia ohjelmistoja php-skriptillä.

## "testing" -ympäristö
Tällä ympäristöllä voidaan hyödyntää "ennakomateriaaleja" kuten uusia tietoturvapäivityksiä, kuvia ja uusia teknologioita mutta ilman takuuta.

Lisää seuraava rivi .ovhconfig*-tiedostoon:


```
container.image=testing
```


* Kyse on .ovhconfig -tiedostosta, joka on tällä hetkellä webhotellisi juuressa "/".


## Kuvien väliset erot
|Ympäristöt|legacy|stable|testing|jessie.i386|
|---|---|---|---|
|Ympäristöt|legacy|stable|testing|jessie.i386|
|Image liée|legacy|jessie.i386|jessie.i386|jessie.i386|
|Minimi PHP-versio|4.4|5.3|5.3|5.3|
|Openssl|0.9.8o|1.0.1k (TLS1.2 yhteensopiva)|1.0.1k (TLS1.2 yhteensopiva)|1.0.1k (TLS1.2 yhteensopiva)|
|Laajennus php imagick||x|x|x|
|Laajennus php memcache|x|x|x|x|
|Laajennus php memcached||x|x|x|
|Laajennus php mongo (PHP 5.4, 5.5, 5.6)||x|x|x|
|Laajennus mysqlnd (vain utf-8)||x|x|x|
|Laajennus redis||x|x|x|
|Opcache**|x|x|x|x|
|Python|2.6|2.7 et 3.4|2.7 et 3.4|2.7 et 3.4|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|


** Tarvitaan PHP-FPM aktivointi:
[]({legacy}1175)


## Vaikuttaako käyttöympäristön muokkaus koko webhotelliini?
Kyllä, käyttöympäriston muokkaus vaikuttaa koko webhotelliin. 
Kahta erilaista käyttöympäristöä ei siis voi olla samaan aikaan.


## Missä tuotteissa käyttöympäristöä voidaan muokata?
Käyttöympäristön muokkaus on mahdollista kaikissa webhotellituotteissa.


## Säilytetäänkö PHP-istunnot käyttöympäristön vaihdoksessa?
Käyttöympäristön muutos nollaa automaattisesti kaikki PHP-istunnot.

