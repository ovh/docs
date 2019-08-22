---
title: 'Instanssin luominen OVH:n hallintapaneelissa'
excerpt: 'Instanssin luominen OVH:n hallintapaneelissa'
slug: instanssin_luominen_ovhn_hallintapaneelissa
legacy_guide_number: g1775
---


## 
Public Cloud -tuotteella voit luoda milloin tahansa nopeasti ja helposti virtuaalipalvelimia (instansseja) muutamalla klikkauksella. Nämä instanssit melko samankaltaisia  [url="http://www.ovh-hosting.fi/vps/"] OVH:n uusimman sukupolven VPS:n kanssa. 
Tässä ovat suurimmat eroavaisuudet VPS:n ja Public Cloud -instanssin välillä:

VPS:

- Yksinkertainen hallintapaneeli
- mono-kone orientoitunut
- Suuri määrä distribuutioita



Public Cloud -instanssi:

- Laskutuksen valinta: kuukausi  tai tuntiperusteinen
- API OpenStack
- Yhteistyötä tekevät instanssit



Tässä ohjeessa kerrotaan, kuinka luodaan instanssi.


## Edellytykset

- Kirjautuminen [hallintapaneeliin](https://www.ovh.com/manager/cloud/)
- Olet luonut ja konfiguroinut SSH-avaimen OVH:n hallintapaneelissa

Ohje: []({legacy}1769)


## Palvelimen lisääminen

- Klikkaa painiketta Lisääylhäällä vasemmalla



![](images/img_2707.jpg){.thumbnail}

- Valitse Lisää palvelin



![](images/img_2708.jpg){.thumbnail}


## Valitse palvelimen ominaisuudet

- Kun klikkaat mallin oikealla puolella olevaa nuolta, ilmestyy uusi valikko:



![](images/img_2709.jpg){.thumbnail}
Voit seuraavaksi valita instanssin tyypin:

- VPS-SSD -sarja

|1 - 2 vCores|2G - 8GB RAM-muistia|10 - 40 GB storage|



- CPU-sarja

|2 - 32 vCores|7 - 120 GB Ram-muistia|200 - 1600 GB storage|



- RAM-sarja

|2 - 16 vCores|30 - 240 RAM-muistia|200 - 1600 GB storage|




## Valitse käyttöjärjestelmä

- Esimerkiksi Ubuntu 14.04



![](images/img_2710.jpg){.thumbnail}


## Valitse konesalin alue

- Esimerkiksi Strasbourg



![](images/img_2711.jpg){.thumbnail}


## Valitse käytettävä SSH-avain
-Esimerkiksi:

![](images/img_2712.jpg){.thumbnail}

## Tietoa
Luotaessa Windows-instanssia ei SSH-avainta tarvitse konfiguroida.


## Nimeä virtuaalipalvelin ja käynnistä

- Nimeä virtuaalipalvelin
- Valitse tunti- tai kuukausilaskutus.



## Huom:
Kun luot instanssin kuukausilaskutuksella, sitoudut pitämään sen vähintään kuluvan kuukauden loppuun.

- Klikkaa Käynnistä nyt




## 
[Paluu Cloud-ohjeiden valikkoon]({legacy}1785)

