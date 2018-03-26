---
title: DNS-alueen luominen ulkopuoliselle verkkotunnukselle
excerpt: DNS-alueen luominen ulkopuoliselle verkkotunnukselle
slug: dns-alueen_luominen_ulkopuoliselle_verkkotunnukselle
legacy_guide_number: g2229
---


## Edellytykset
Voidaksesi luoda DNS-alueen ulkopuoliselle verkkotunnukselle varmista että seuraavat edellytykset täyttyvät:


- Yhtään toimenpidettä tai tilausta ei ole käynnissä kyseisellä verkkotunnuksella OVH:lla
- Verkkotunnus on olemassa
- Verkkotunnuksen SOA on käynnistetty oikein DNS-alueella




## 1. Vaihe: Verkkotunnuksen tarkistus

- Klikkaa asiakastunnuksesi verkkotunnusosiossa "Lisää DNS-alue".



![](images/img_4295.jpg){.thumbnail}

- Kohdassa "Verkkotunnuksen nimi" ilmoita verkkotunnus jolle haluat luoda DNS-alueen.



![](images/img_4296.jpg){.thumbnail}

## Huomio:

- Mikäli ilmoitettu verkkotunus ei täytä vaatimuksia, ei DNS-alueen luominen ole mahdollista.



![](images/img_4297.jpg){.thumbnail}

## Vinkki:
Mikäli sinulla on verkkotunnus, jolle ei ole osoitettu yhtään nimipalvelinta, OVH antaa käytettäväksi tilapäisiä nimipalvelimia jotta voit lisätä * DNS-alueen:

- parking1.ovh.net
- parking2.ovh.net

(*) Nimipalvelinten propagaatiossa on mahdollisesti 48 tunnin viive.



## 2. Vaihe: Alueen tyypin valinta
Valitse seuraavaksi DNS-alueen tyyppi:


- Minimaalinen: DNS-alue minimaalisilla toimintaan tarvittavilla elementeillä (A,MX,CNAME,...)
- Normaali: DNS-alue ylimääräisillä elementeillä (CNAME kohti POP/IMAP/SMTP -palvelinta,...)



![](images/img_4298.jpg){.thumbnail}


## 3. Vaihe: Vahvistus

- Ruksaa laatikko "Olen lukenut ja hyväksynyt käyttöehdot"
- Klikkaa sitten "Luo tilausvahvistus".



![](images/img_4299.jpg){.thumbnail}

- Klikkaa sitten "Maksa".



![](images/img_4300.jpg){.thumbnail}

- Kun olet oikeassa tilausvahvistuksessa, klikkaa "Jatka".



![](images/img_4301.jpg){.thumbnail}

## Tietoa:
DNS-alueen luominen on täysin maksutonta.

- Ilmoita turvakoodi ja vahvista.



![](images/img_4302.jpg){.thumbnail}


## 4. Vaihe: Tilauksen vahvistaminen
Voit seuraavaksi tarkistaa, että tilausvahvistuksesi vahvistaminen onnistui.

![](images/img_4303.jpg){.thumbnail}

## Tietoa:
Tilauksen vahvistamisen jälkeen asennuksessa on mahdollinen 30 minuutin viive.

