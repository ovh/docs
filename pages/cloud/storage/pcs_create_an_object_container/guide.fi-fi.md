---
deprecated: true
title: Object storage -säilön luominen
excerpt: Object storage -säilön luominen
slug: object_storage_-sailon_luominen
section: Object Storage
legacy_guide_number: g1921
---


## 
Ensimmäinen vaihe Public Cloud storage -ratkaisun käytössä on säilön luominen tiedostoillesi. 
Tässä ohjeessa kerrotaan kuinka sellainen luodaan OpenStack Horizon -käyttöliittymässä.


## Edellytykset

- [Konfiguroi yhteys Horizon-käyttöliittymään]({legacy}1773)




## 

- Kirjaudu Horizoniin
- Valitse "Object Store" vasemmalla



![](images/img_2935.jpg){.thumbnail}

- Klikkaa "Create Container"


Uusi ikkuna avautuu:

![](images/img_2937.jpg){.thumbnail}
Tässä voit:

- Nimetä säilösi
- Valita säilön tyypin

|Public|Kaikilla vapaa pääsy|
|---|
|Public|Kaikilla vapaa pääsy|
|Privé|Pääsy vain tunnistautumalla|


Tämän jälkeen säilö ilmestyy ja uusia toimintoja tulee saataville:

![](images/img_2938.jpg){.thumbnail}
Tässä voit:

- Katsoa säilön tiedot
- Tehdä siitä julkisen tai yksityisen
- Poistaa sen


Klikkaamalla säilösi nimeä voit myös:

- Luoda pseudokansion


Object Storageen asetettuja tietoja ei siis varastoida perinteisellä hierarkisella järjestelmällä (Kansio > alakansio jne.) Kaikki data tallennetaan samalle tasolle, minkä ansioista pääsy niihin on paljon nopeampaa.
Nämä pseudokansiot järjestyvät yleisen objetkin nimessä olevan etuliitteen mukaan, minkä ansiosta voit organisoida datasi toisella tavalla.

- Lähettää tiedostoja
- Poistaa tiedostoja ja pseudokansioita
- Ladata tiedostoja
- Kopioida tiedostoja
- Katsoa tiedostojen tiedot




## 
[Paluu Cloud-tuotteiden ohjeiden valikkoon Cloud]({legacy}1785)

