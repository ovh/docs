---
deprecated: true
title: Private SQL -palvelimen mittaritietojen hakeminen Grafanalla
excerpt: Private SQL -palvelimen mittaritietojen hakeminen Grafanalla
slug: private_sql_-palvelimen_mittaritietojen_hakeminen_grafanalla
---


## 

## Mikä on Docker?
Docker on vapaa ohjelmisto, joka automatisoi sovellusten käytön ohjelmistosäilöissä.

![](images/img_3657.jpg){.thumbnail}

## Mikä on Grafana?
Grafana on avoimen lähdekoodin ratkaisu, jonka avulla tietoja on mahdollista muuttaa esimerkiksi graafiseen muotoon.

![](images/img_3658.jpg){.thumbnail}


## Instanssi
Grafanan asentamista varten on käytettävä Dockeria. Se on asennettavissa useisiin OVH:n tuotteisiin:


- [VPS](https://www.ovh-hosting.fi/vps/)
- [Dedikoidut palvelimet](https://www.ovh-hosting.fi/dedikoidut_palvelimet/)
- [Pilvi-instanssit](https://www.ovh-hosting.fi/cloud/instances/)




## Docker

## Miten asennus tapahtuu?
Koneestasi riippuen, voit seurata asennusta varten dokumentaatiota
[tästä linkistä](https://docs.docker.com/engine/installation/).

## Virtuaalipalvelimella
Jos sinulla on OVH:n virtuaalipalvelin (VPS), voit asentaa distribuution "Docker on Ubuntu", jonka avulla voit hyödyntää jo Dockeria käyttävää palvelinta.

![](images/img_3659.jpg){.thumbnail}


## Grafana

## Grafanan asennus Dockerille
Mikäli haluat käyttää Grafanaa palvelimen portissa 80, riittää että käytät seuraavaa komentoa:


```
docker run -i -p 80:3000 grafana/grafana
```


Lisätietoa löytyy [tästä linkistä](http://docs.grafana.org/installation/docker/).
Grafanan voi asentaa myös ilman Dockeria, mene tällöin [tähän dokumentaatioon](http://docs.grafana.org/installation/).


## Private SQL -palvelimella

## Private SQL -palvelimen tyyppi
Private SQL -palvelimesi täytyy olla tyyppiä 
"Docker", jotta voit hakea mittaritietoja.

## Maksuton aktivointi Perfomance-webhotelleille
Mikäli omistat Performance tason webhotellin, voit aktivoida Private SQL -palveliment maksutta [tämän ohjeen avulla](https://docs.ovh.com/fi/hosting/webhotellit_ohje_mysql-tietokannan_tuonnista/).

## Tilaa Private SQL -palvelin
Voit tilata Private SQL -palvelimen suoraan hallintapaneelissa.

-Kaikki uudet Private SQL -palvelimet ovat "Docker"-tyyppiä.

![](images/img_3660.jpg){.thumbnail}

## Onko Private SQL -palvelimeni tyyppiä "Docker" vai tyyppiä "Legacy"?
Vanhemma Private SQL -palvelimet ovat "Legacy" -tyyppisiä (esimerkiksi: sqlprive-kx11111-009), uudet palvelimet ovat taas "Docker"-tyyppisiä (Esimerkiksi: sx11111-012).
Kyse on kahdesta erityyppisestä infrastruktuurista.

![](images/img_3661.jpg){.thumbnail}


## Tunnuksen saaminen OVH:n API:n kautta

## Kirjaudu API:in
Jotta voit kirjautua palveluun, seuraa alla olevaa linkkiä ja klikkaa sitten "Login" kirjautumisen vahvistamiseksi.

[https://api.ovh.com/console/](https://api.ovh.com/console/)

![](images/img_3662.jpg){.thumbnail}

## Tunnuksen hakeminen
Seuraavaa toimintoa on käytettävä tililläsi olevien Private SQL -palvelinten listauksen hakemiseksi, klikkaa siten "Execute" :


```
/hosting/privateDatabase
```



![](images/img_3663.jpg){.thumbnail}
Syötä seuraavan toiminnon kautta Docker-tyyppisen Private SQL -palvelimen nimi:


```
/hosting/privateDatabase/{serviceName}
```


Löydät tarvittavat kaksi tietoa kohdasta "graphEndpoint":


- readToken
- host



![](images/img_3664.jpg){.thumbnail}


## Grafanan käyttö

## Kirjaudu Grafanaan
Pääset Grafanaan selaimestasi, oletustunnukset ovat:


- admin / admin



![](images/img_3665.jpg){.thumbnail}

## Lisää tiedostolähteesi
Sitä varten klikkaa "Data Sources" vasemmanpuoleisessa sarakkeessa ja sitten ylhäällä 
"Add new".

Täytä seuraavat tiedot:


- Name: tiedostolähteesi, tässä tapauksessa se on nimetty "private SQL".

- Default : Kyllä
- Type : "OpenTSDB"
- URL : syötä tähän kentän "host" -sisältö, jonka sait aiemmin API:sta
- Access : "proxy"
- Http Auth : Ruksaa "Basic Auth", poista valinta "With Credentials"
- User : syötä tähän kentän "readToken"-sisältö, jonka sait aiemmin API:st
- Password : syötä myös tähän kentän "readToken"-sisältö, jonka sait aiemmin API:sta



![](images/img_3666.jpg){.thumbnail}

## Konfiguroi "Dashboard"
Klikkaa vasemalla olevassa sarakkeessa kohtaa "Dahboards", kilkkaa sitten "Home" ja sitten "New".


- Voit saada näin puhtaan ohjauspaneelin, jonka voit nimetä klikkaamalla "Manage Dashboard" ja sitten "Settings".
- Voit milloin tahansa tallentaa ohjauspaneelin klikkaamalla yläreunassa olevaa "Disketti"-kuvaketta.



Ohjauspaneeli koostuu rivistä ("Row"), ensimmäisen graafin lisäämiseksi klikkaa virheää painiketta, ja sitten "Add Panel" ja "Graph".

![](images/img_3667.jpg){.thumbnail}
Syötä kuvakkeeseen "General" graafisi otsikko, esimerkiksi tässä se on nimetty "RAM".

![](images/img_3668.jpg){.thumbnail}

- Tarkista ensin kuvakkeesta "Metrics", että tiedostolähteesi valittu oikein.


Ensimmäinen syötettävä mittari on "memory.hierarchical_memory_limit", tämä vastaa suurinta sallittua RAM-muistin määrää Private SQL -palvelimella.

Klikaa sitten "+ Query" lisätäksesi toisen mittarin "memory.rss", tämä vastaa palvelimesi käyttämää RAM-muistin määrää.

![](images/img_3669.jpg){.thumbnail}
Kuvakkeessa "Axes & Grid", valitse kohdassa "Left Y" yksiköksi "data" ja sitten "Bytes"

![](images/img_3670.jpg){.thumbnail}

- Valitse yläoikealta tarkasteltava aikaväli, tässä tulos näyttää tiedot viimeiseltä 60 päivältä.



![](images/img_3671.jpg){.thumbnail}


## Mittaritiedot
Tässä kolme esimerkkiä tärkeistä mittareista, joiden avulla voit seurata Private SQL -palvelimesi suorituskykyä:

|Käytettävissä olevan RAM-muistin enimmäismäärä |memory.hierarchical_memory_limit|
|Käytetty RAM-muisti|memory.rss|
|Aktiivisten MySQL-yhteyksien määrä|mysql.active_connections|


Löydät seuraavasta linkistä virallisen dokumentaation Dockerin mittaritiedoista:


- [https://docs.docker.com/engine/articles/runmetrics/](https://docs.docker.com/engine/articles/runmetrics/)



