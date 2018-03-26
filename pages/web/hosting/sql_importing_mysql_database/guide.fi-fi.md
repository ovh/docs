---
title: 'Webhotellit: ohje MySQL-tietokannan tuonnista'
excerpt: Ohjeessa neuvotaan MySQL-tietokannan tuonti.
id: '1393'
slug: webhotellit_ohje_mysql-tietokannan_tuonnista
legacy_guide_number: g1393
---


## Ennakkovaatimukset
Tarvitset:


- Tietokantasi varmuuskopiotiedosto, nimeltään dump*, joka saatiin varmuuskopioitaessa kantaa (Ohje SQL-tietokantojen varmuuskopioinnista []({legacy}1394)).

Useimmiten tietokannan varmuuskopio on .sql-tyyppinen.
Jos tietokanta on luotu toisella palveluntarjoajalla kuin OVH:lla, suosittelemme, että otat heihin yhteyttä kuullaksesi, miten heidän palveluissaan voi tietokannat hakea. 


- Lisäksi tarvitset käyttäjätunnuksen, salasanan sekä SQL-hostin tietokannasta, joiden avulla tietokantaan voi yhdistää.
Ohje SQL-käyttäjätunnuksista[]({legacy}1374)


![](images/img_1802.jpg){.thumbnail}


## Hallintapaneelista
Kaikkein helpoin ja nopein tapa tuoda tietokanta on tehdä se [hallintapaneelissa](https://www.ovh.com/manager/). Menetelmän etuna on, että varmuuskopion voi tuoda ilman kokorajoituksia.

Kun olet kirjautunut [hallintapaneeliin](https://www.ovh.com/manager/)asiakastunnuksiasi käyttäen, valitse verkkotunnuksesi vasemmasta kohdasta. Avaa sitten kuvake Tietokannat.

![](images/img_4125.jpg){.thumbnail}
Valitse tietokanta, johon haluat tuoda varmuuskopion, klikkaa sen oikealla puolella olevaa hammasratasta ja valitse "Tuo tiedosto".

Seuraa sitten hallintapaneeliin vaiheita SQL-varmuuskopion tuomiseksi.

![](images/img_4126.jpg){.thumbnail}


## MySQL:lle tarkoitetun PhpMyAdminin kautta
Yhdistä tietokantaan PhpMyAdminin kautta.

Yhdistääksesi käytä seuraavaa linkkiä:
[PhpMyAdmin OVH](https://phpmyadmin.ovh.net).

Ohje PhpMyAdminin käyttöön: []({legacy}1374)


- Kun olet yhdistänyt PhpMyAdminiin, valitse tietokanta klikkaamalla sen nimeä (kehystetty sinisellä oheisessa kuvakaappauksessa).

- Seuraavaksi klikkaa "Tuo".

- Valitse varmuuskopiotiedosto klikkaamalla "Etsi" (huom. tiedostokoko ei saa olla yli 16 Mt).

- Klikkaa "Suorita" aloittaaksesi tietokannan tuonnin.

Jos haet tietokannan varmuuskopion hallintapaneelin kautta, muista purkaa tiedosto ennen sen tuontia.


![](images/img_1962.jpg){.thumbnail}

## Muistutus:

- Tiedoston enimmäiskoko ei saa olla yli 16 Mt.




## Webhotellissa olevan skriptin kautta
Skriptejä voi kirjoittaa tekstitiedostossa. Anna tiedostopääte käytetyn kielen mukaan.

Korvaa alla olevissa skripteissä:


- tietokannan_nimi.sql oman tiedoston nimellä.

- sql_palvelin sen palvelimen nimellä, jolla tietokanta on luotu.

- tietokannan_nimi oman tietokannan nimellä.

- salasana tietokantaan liittyvällä salasanalla.

Varmuuskopiotiedosto on siirrettävä etukäteen FTP-yhteydellä webhotelliin.


## PHP:llä (importbase.php):
Käytettävä ja täydennettävä koodi: 


```
<?php
echo "Tietokantaa palautetaan.......
<br>";
system("cat tietokannan_nimi.sql | mysql --host=sql_palvelin --user=tietokannan_nimi --password=salasana tietokannan_nimi");
echo "Valmis. Tietokanta on paikallaan webhotellissa.";
?>
```



## Perlillä (importbase.php):
Käytettävä ja täydennettävä koodi: 


```
#!/usr/bin/perl

print "Tietokantaa palautetaan.......
<br>";
system("cat tietokannan_nimi.sql | mysql --host=sql_palvelin --user=tietokannan_nimi --password=salasana tietokannan_nimi");
print "Valmis. Tietokanta on paikallaan webhotellissa.";
```



- Siirrä FTP-yhteydellä sekä luotu skripti että tietokannan dump* webhotellin www-kansioon ja kutsu skriptiä selaimessa seuraavalla URL-osoitteella:

http://oma_verkkotunnus.com/importbase.php 

Korvaa oma_verkkotunnus.com omalla verkkotunnuksella ja importbase.php oman tiedoston nimellä.

Onko varmuuskopiotiedosto pakattu?

Mikäli dump* on pakattu, eli se on muotoa .sql.gz, riittää, että lisäät skriptin alkuun seuraavan komennon:


```
system("gunzip tietokannan_nimi.sql.gz");
```


Esimerkki:

## PHP:llä: pakattu dump ja tietokannan haku
Esimerkki koko skriptistä: 


```
<?php
echo "Tiedoston purku.....
<br>";
system("gunzip testbackup.sql.gz");
echo "Tietokantaa palautetaan......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
echo "Valmis. Tietokanta on paikallaan webhotellissa.";
?>
```



## Perlillä: pakattu dump ja tietokannan haku
Esimerkki koko skriptistä: 


```
#!/usr/bin/perl

print "Tiedoston purku.....
<br>";
system("gunzip testbackup.sql.gz");
print "Tietokantaa palautetaan.......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
print "Valmis. Tietokanta on paikallaan webhotellissa.";
```




## SSH-komennolla

## Edellytykset

- Tarvitset FTP-käyttäjätunnuksen ja siihen liittyvän salasanan yhdistääksesi webhotelliin.
Ohje FTP-käyttäjätunnuksista[]({legacy}1374)

- Tarvitset webhotellin, johon sisältyy SSH-yhteys 

([katso webhotelleihin sisältyvät palvelut](http://www.ovh-hosting.fi/webhotelli/))

Alla ohje SSH-yhteydestä:


- [SSH-yhteys](http://ohjeet.ovh-hosting.fi/SshTelnet)



## Tietokannan tuonti SSH-yhteydellä
Yhdistä SSH-yhteydellä webhotelliisi.

Mene hakemistoon, jonne sijoitit tuotavan tiedoston ja syötä sitten seuraava komento:

Käytettävä ja täydennettävä koodi: 


```
cat tietokannan_nimi.sql | mysql --host=sql_palvelin --user=tietokannan_nimi --password=salasana tietokannan_nimi
```


Esimerkki koko skriptistä: 


```
cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport
```




## Private SQL -palvelun kautta
Ohje tietokannan tuonnista:


- [Private SQL tietokannan tuonti](https://www.ovh-hosting.fi/g2023.kaikki-mita-tarvitsee-tietaa-sql)




## Tietokannan nimestä johtuva virhe
Saattaa olla tarpeellista lisätä seuraava teksti varmuuskopiotiedoston alkuun:


```
use tietokannan_nimi;
```


Jossa tietokannan_nimi vastaa sen tietokannan nimeä, johon tiedot tuodaan.


## Sanasto
dump*: Verkkosivun tietokannan varmuuskopiotiedosto. 

