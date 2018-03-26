---
title: 'Webhotellit: ohje MySQL-tietokannan viennistä'
excerpt: Ohjeessa neuvotaan MySQL-tietokannan vienti palvelimiltamme.
id: '1394'
slug: webhotellit_ohje_mysql-tietokannan_viennista
legacy_guide_number: g1394
---


## Edellytykset
Tarvitset:


- Mahdollisuuden kirjautua hallintapaneeliin.

- Käyttäjätunnuksen, SQL-tietokannan salasanan sekä SQL-hostin, joiden avulla tietokantaan voi yhdistää.
Ohje SQL-käyttäjätunnuksista[]({legacy}1374)


Ohjeessa neuvotaan eri tapoja tietokantojen vientiin.

![](images/img_1833.jpg){.thumbnail}


## Hallintapaneeli
Tietokannan kopio löytyy hallintapaneelista.

Tämä on kaikkein helpoin ja nopein tapa tietokannan vientiin.

Kirjaudu [hallintapaneeliin](https://www.ovh.com/manager/web).

Kirjauduttuasi hallintapaneeliin, valitse ko. webhotelli Webhotelli-osiossa.

## Vaihe 1
"Webhotelli"-osiossa valitse kyseinen webhotelli ja sitten välilehti "SQL-hallinta".

Tietokannan koosta riippuu, miten pitkään tietokannan varmuuskopion luontiin menee.

![](images/img_2698.jpg){.thumbnail}

## Vaihe 2
Klikkaa seuraavaksi kyseisen tietokantarivin päässä olevaa "hammasratasta" ja sitten luo dump.

Näkyviin tulee lista tietokannoista (ks. oheinen kuvakaappaus).

![](images/img_2699.jpg){.thumbnail}

## Vaihe 3
Valitse varmuuskopion ajankohta: nyt, eilen tai viime viikolla.

Varmuuskopiot löytyvät kolmesta ajankohdasta:


- Nyt: kopio tietokannasta juuri nyt.

- Eilen: kopio tietokannasta edeltävältä yötä. Varmuuskopio on otettu aamuyöllä noin klo 4.

- Viime viikkoa: kopio tietokannasta on otettu seitsemän päivää sitten. Varmuuskopio on otettu aamuyöllä noin klo 4.


Klikkaa "Seuraava" ja sitten "Hyväksy" SQL-varmuuskopion palauttamiseksi.

Odota kunnes dump* palautetaan. Saat linkin sähköpostilla varmuuskopiotiedoston (dump) lataamiseen.

Esimerkki sähköpostin otsikosta:


```
[OVH-SQL] testovh.ovh - Tietokantadump: testovhmod1
```


Sähköpostissa lähetetään varmuuskopiotiedoston latauslinkki. Tietokannan varmuuskopio on käytettävissä palvelimella seuraavat 30 päivää.

Tiedosto on pakattu. Suosittelemme sen purkamista ennen SQL-varmuuskopiotiedoston tuontia.

![](images/img_2700.jpg){.thumbnail}


## PhpMyAdmin
Jos haluat tuoda tietokannan PhpMyAdminin kautta, kirjaudu ensin [PhpMyAdminin käyttöliittymään](https://phpmyadmin.ovh.net/).

## Nopea vientitapa
Kirjautumisen jälkeen valitse tietokanta (ks. sininen kehys oheisessa kuvakaappauksessa).

Mene osioon "Vienti".

Nopeaa vientitapaa käytettäessä ei ole mahdollista valita tietokannan muotoa vientiä varten.

Seuraavassa kappaleessa käsitellään mukautettua vientitapaa, jossa on enemmän vaihtoehtoja.

![](images/img_1963.jpg){.thumbnail}

## Mukautettu vienti
Kirjautumisen jälkeen valitse tietokanta.

Mene osioon "Vienti".

Valitse "Mukautettu - näytä kaikki mahdolliset vaihtoehdot".

Näkyviin tulee useita optioita.

Taulu(t): 

Voit valita kaikki taulukot tai osan niistä vientiä varten.

Tämä voi olla käytännöllinen tapa, jos tietokanta on hyvin suuri. Sen voi viedä ja tuoda useaan kertaan.

Output: 

Voit määritellä haluatko luoda SQL-varmuuskopion ulkoiseen tiedostoon vai haluatko nähdä tuloksen, joka pitää kopioida.

Muoto: 

Valitse tietokannan vientitavan muoto. Suositeltu muoto on SQL.

Muotoiluvaihtoehdot:

Voit määritellä, mitä haluat viedä taulusta, joko vain rakenne tai vain tiedot, tai molemmat.
Suositeltu valinta on "rakenne ja tiedot".

Viennin vaihtoehdot:

Valitse vientitapa "Ei mikään ylläolevista" välttääksesi virheen, joka liittyy "Max_Allowed_Packet".

Tässä ohjeessa käsitellään vain tärkeimmät vaihtoehdot.

Viennin aloittamiseksi klikkaa "Siirry".

![](images/img_1964.jpg){.thumbnail}

## Tiedoston .sql varmuuskopio
Linkki dumppiin* voidaan nyt ladata.

Tallenna PhpMyAdminin antama tiedosto.

![](images/img_1848.jpg){.thumbnail}

## Aikaisempi varmuuskopio

- PhpMyAdminista on mahdollista hakea edellisen päivän ja edellisviikon varmuuskopio etusivulla avautuvan valikon kautta.




## Skripti
Skriptejä voi kirjoittaa tekstitiedostossa. Anna tiedostopääte käytetyn kielen mukaan.

Skriptin käyttö on mielenkiintoista siksi, että sen avulla voi viedä isoja dumppeja* ja se on käytössä kaikissa webhotelleissa.

Korvaa alla olevissa skripteissä:


- tietokannan_nimi.sql oman tiedoston nimellä.

- sql_palvelin sen palvelimen nimellä, jolla tietokanta on luotu.

- tietokannan_nimi oman tietokannan nimellä.

- salasana tietokantaan liittyvällä salasanalla.

Varmuuskopiotiedosto on siirrettävä etukäteen FTP-yhteydellä webhotelliin.


PHP:llä (backupbase.php):

Käytettävä ja täydennettävä koodi: 


```
<? 
echo "Tietokantaa varmuuskopioidaan.......
<br>";
system("mysqldump --host=sql_palvelin --user=tietokannan_nimi --password=salasana tietokannan_nimi > tietokannan_nimi.sql");
echo "Valmis. Tietokannan voi hakea FTP-yhteydellä.";
?>
```


Perlillä (importbase.php):
Käytettävä ja täydennettävä koodi: 


```
#!/usr/bin/perl

print "Tietokantaa varmuuskopioidaan.......
<br>";
system("mysqldump --host=sql_palvelin --user=tietokannan_nimi --password=salasana tietokannan_nimi > tietokannan_nimi.sql");
print "Valmis. Tietokannan voi hakea FTP-yhteydellä.";
```



- Siirrä FTP-yhteydellä luotu skripti webhotellin www-kansioon ja kutsu skriptiä selaimessa seuraavalla URL-osoitteella:

http://oma_verkkotunnus.com/backupbase.php 

Korvaa oma_verkkotunnus.com omalla verkkotunnuksella ja backupbase.php oman tiedoston nimellä.

Komento luo tiedoston tietokannan_nimi.sql siihen kansioon, jossa skripti on.

Tiedostosta löytyy kaikki SQL:n ohjeet kannan uudelleen luomiseksi sellaiseksi kuin se oli varmuuskopion aikana kaikkine tietoineen.

- Huom 1: Jos tietokanta on liian suuri, voit tehdä siitä dumpin* taulu taululta lisäämällä "--tables taulun_nimi" komennon loppuun seuraavasti:

mysqldump --host=sql_palvelin --user=tietokannan_nimi --password=salasana tietokannan_nimi --tables taulun_nimi > tietokannan_nimi.sql


- Huom 2: Tiedoston voi myös pakata, jolloin sen voi helpommin ladata tietokoneelle (FTP:n tai verkon kautta).

Tiedoston pakkaamiseksi, suorita gzip komento, joka luo  .sql.gz-päätteisen tiedoston:
system("gzip tietokannan_nimi.sql");


## SSH-komento

## Edellytykset

- Tarvitset FTP-käyttäjätunnuksen ja siihen liittyvän salasanan yhdistääksesi webhotelliin.
Ohje FTP-käyttäjätunnuksista[]({legacy}1374)

- Tarvitset webhotellin, johon sisältyy SSH-yhteys 

([katso webhotelleihin sisältyvät palvelut](http://www.ovh-hosting.fi/webhotelli/))

Alla ohje SSH-yhteydestä:


- [SSH-yhteys](http://ohjeet.ovh-hosting.fi/SshTelnet)



## Tietokannan vienti SSH-yhteydellä
Yhdistä SSH-yhteydellä webhotelliisi.

Mene hakemistoon, jonne haluat sijoittaa varmuuskopiotiedoston ja käynnistä sitten seuraava komento:

Käytettävä ja täydennettävä koodi: 


```
mysqldump --host=sql_palvelin --user=tietokannan_nimi --password=salasana tietokannan_nimi > tietokannan_nimi.sql
```


Esimerkki koko skriptistä: 


```
mysqldump --host=sql3 --user=testbackup --password=RtPgDsmL testbackup > testbackup.sql
```




## Private SQL -palvelun kautta
Ohje tietokannan viennistä:


- []({legacy}2023)




## Varmuuskopio - Backup
Jos haluat hakea vanhan tietokannan skriptiä käyttäen, skriptissä on mainittava tietty portti:

Nykyinen kopio = 3306
Eilen = 3307
Viime viikko = 3317

Esimerkki koodista, jota voi käyttää:

PHP :

```
system("mysqldump --host=sql_palvelin --user=tietokannan_nimi --password=salasana --port=3317 tietokannan_nimi > tietokannan_nimi.sql");
```



- Tämä varmuuskopiojärjestelmä on käytettävissä tietokannoille, joiden versio on vähintään Mysql5.




## Virhe "Max_Allowed_Packet" dumpin* tuonnissa
Dumpia* tehtäessä voi olla kiinnostavaa muokata SQL-tietokannan vientitapaa PhpMyAdminin kautta.

Tarkoitus on välttää koko taulun sisällön lisäämistä käyttämällä "INSERT INTO" välttääkseen virheitä, jotka liittyvät "Max_Allowed_Packet"-palvelinmuuttujaan  dumpia* viedessä, mikäli taulun sisältö on suurikokoinen.

Esimerkiksi, jos taulussa A on 500 riviä, sen sijaan, että 500 riville olisi vain yksi "INSERT INTO", käytetään 500 "INSERT INTO".

PhpMyAdminin kautta:

Valitse vientitavaksi "Ei mikään ylläolevista" välttääksesi virheen, joka liittyy "Max_Allowed_Packet".

SSH:lla:

Käytä optiota --skip-extended-insert.

Optio --extended-insert, joka sisältyy optioon --opt (aktiivinen oletuksena), luo yhden ainoan INSERT INTO koko taululle, eli optio on poistettava käytöstä seuraavalla koodilla:


```
--skip-extended-insert
```



![](images/img_1965.jpg){.thumbnail}


## Sanasto
dump*: Verkkosivun tietokannan varmuuskopiotiedosto. 

