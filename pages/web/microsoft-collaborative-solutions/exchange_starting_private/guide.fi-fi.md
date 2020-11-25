---
deprecated: true
title: 'Exchange: Ensiaskeleet yksityisen palvelimen kanssa'
excerpt: Ensiaskeleet yksityisen palvelimen kanssa
slug: exchange_ensiaskeleet_yksityisen_palvelimen_kanssa
legacy_guide_number: g2074
---


## 1. Vaihe: sähköpostin vastaanottamisen konfigurointi palvelimella
Kun tilaus on maksettu, saat vahvistussähköpostin "Private"-palvelimen asennusta varten.
Sähköpostiviesti lähetetään hallintapaneelissa ilmoittamallesi yhteyshenkilölle. Viestin voit löytää myös hallintapaneelista.
Löydät sähköpostin hallintapaneelista seuraavalla tavalla:


- klikkaa asiakastunnustasi (oikealla ylhäällä, muodossa ab12345-ovh) ja sitten "Oma tili"



![](images/img_4047.jpg){.thumbnail}

- Vastaanotetut sähköpostit



![](images/img_4050.jpg){.thumbnail}
Löydät täältä yksityisen Exchange -palvelimen konfigurointia varten lähetetyn sähköpostin:


- viestin otsikko on:

Palvelimen konfigurointi keskeneräinen!


![](images/img_4051.jpg){.thumbnail}
Tässä viestin sisältö:


```
Hyvä asiakas,

et ole vielä saattanut päätökseen Private Exchange -tuotteeseen liittyvän yksityisen palvelimen konfigurointia.

Olet joko poistunut lomakkeesta ennen sen hyväksymistä tai tietojen rekisteröinnissä on tapahtunut ongelma.


Lomake löytyy alla olevasta osoitteesta:



Kirjaudu asiakastunnuksen ja siihen liittyvän salasanan avulla.


Asiakaspalvelumme auttaa tarvittaessa.

Ystävällisin terveisin

OVH-asiakaspalvelu
```




## 2. Vaihe: DNS-alueen automaattinen valinta
Klikkaa sähköpostiviestissä olevaa linkkiä, jonka jälkeen sinut uudelleenohjataan palvelimen konfigurointisivulle.

![](images/img_4052.jpg){.thumbnail}

- "Palvelimesi nimi": Sinun on määritettävä nimi palvelimellesi tai webmailin kirjautumislinkille. Vaihtoehtoja on useita.


Esimerkki:


- mail
- exchange
- exchange2016


Kun aliverkkotunnus on valittu, täytyy ilmoittaa hyväksyttävä verkkotunnus. webmailin kirjautumislinkki (owa) voi olla esimerkiksi exchange2016.verkkotunnuksesi.fi
Toisessa vaiheessa valitaan sähköpostiosoite, johon SSL-sertifikaatin vahvistusviesti lähetetään. Sähköpostin täytyy olla hyväksyttävä. Muutoin et voi vahvistaa SSL-sertifikaattiasi.

Ehdotuslista sisältää geneerisiä sähköpostiosoitteita kuten:


- postmaster@verkkotunnuksesi.fi
- administraattori@verkkotunnuksesi.fi
- admin@verkkotunnuksesi.fi


Mikäli verkkotunnuksesi on OVH:n webhotellissa eikä sinulla ole sähköpostipalvelua, voit luoda hallintapaneelissa uudelleenohjauksen (Alias) osoitteesta osoite@verkkotunnuksesi olemassa olevaan sähköpostiosoitteeseen.

Uudelleenohjaus on myös mahdollista luoda olemassa olevaan osoitteeseen.
Vaihtoehto DNS Assist: Tämä vaihtoehto mahdollistaa DNS-alueen automaattisen konfiguroinnin  (ipv4 (A) -tyyppisen kentän luominen valitun aliverkkotunnuksen mukaan)
On tärkeää, että verkkotunnustasi hallitaan samalla tunnuksella, jota käytettiin yksityisen palvelimen tilauksessa. Muussa tapauksessa DNS-alueen konfigurointi tapahtuu käsin.
Esimerkkitapauksessa DNS Assist -vaihtoehto on valittuna. Voit seuraavaksi vahvistaa konfiguraation. Jos olet valinnut DNS Assist -vaihtoehdon, ei kolmatta vaihetta tarvitse suorittaa.


## 3. Vaihe: DNS-alueen konfigurointi käsin
Mikäli verkkotunnustasi ei hallita samalla asiakastunnuksella tai se ei ole OVH:n webhotellissa, olet saattanut saada toisen sähköpostiviestin. Tämä viesti sisältää tärkeitä tietoja DNS-alueen muokkamista varten.


Tässä viestin sisältö:



```
Hyvä asiakas,

tilataksesi palvelimesi SSL-sertifikaatin, sinun täytyy luoda uusi tietue verkkotunnuksesi DNS-tietoihin:

valitsemasi DNS-nimi  : exchange2016.testinterne.ovh
palvelimesi IP-osoite :  149.202.xxx.103

Ole hyvä ja luo tämä A-tietue verkkotunnuksesi DNS-tietoihin.


Ystävällisesti

OVH-asiakaspalvelu
```


Tässä tapauksessa täytyy luoda A-tyypin tietue, joka vastaa osoitetta:


- exchange2016.testinterne.ovh A 149.202.xxx.103




## 4. Vaihe: SSL-sertifikaatin vahvistaminen
Kun DNS-alueesi on konfiguroitu automaattisesti tai manuaalisesti, saat webmail linkin personoinnin yhteydessä valitsemaasi sähköpostiosoitteeseen vahvistusviestin.
Sähköpostiviestin saapumisessa voi kestää jopa 4 tuntia.
Tässä viestin sisältö:

![](images/img_4059.jpg){.thumbnail}
Klikkaa sitten  linkkiä  SSL-sertifikaatin varmistamista varten.
Sinut uudelleenohjataan Global Sign -käyttöliittymään, jossa voit vahvistaa sertifikaatin. Vahvistusta varten on klikattava "I APPROVE".

![](images/img_4054.jpg){.thumbnail}


## Viimeistely
SSl-sertifikaattin vahvistamisen jälkeen palvelun toimituksessa saattaa olla vielä neljän tunnin viive. Exchange-palvelusi ei ole näkyvissä hallintapaneelissa näiden eri vaiheiden ajan. 

Kun palvelimesi on käyttövalmis, sinulle lähetään vahvistussähköposti. Löydät sen myös hallintapaneelista.

Viestin otsikko on:  

Private Exchange 2016 -palvelu on valmis!

Sähköpostipalvelun konfigurointia varten voit katsoa [tätä ohjetta](https://www.ovh-hosting.fi/g1311.palvelun-konfigurointi).

