---
title: 'Webhotellit: Yleistä nimipalvelimista'
excerpt: 'Webhotellit: Yleistä nimipalvelimista'
slug: webhotellit_yleista_nimipalvelimista
legacy_guide_number: g2015
---


## Määritelmä
DNS (Nimipalvelin) mahdollistaa muun muassa verkkotunnuksen kääntämisen IP-osoitteeksi, jotta komennot saavuttavat kohdepalvelimen.

![](images/img_3413.jpg){.thumbnail}


## Nimipalvelimen ja DNS-alueen ero

## Nimipalvelimet

- Nimipalvelimet ovat verkkotunnuksellesi määriteltyjä palvelimia. Siksi nämä palvelimet vastaavat ennen DNS- alueelle siirtymistä.



## DNS-alue

- DNS-alue on teknisesti tiedosto, joka käsittää useita eri tietueita, jotka määrittelevät missä sivusto sijaitsee (A), tai mitkä sähköpostipalvelimet huolehtivat verkkotunnuksen sisääntulevasta sähköpostiliikenteestä (MX). Nämä osoitteet voivat olla numeeristen IP-osoitteiden muodossa, tai selkokielisenä (CNAME).




## Miksi muokata palvelimia tai DNS-aluetta?

## Nimipalvelimet
Nimipalvelimien muokkaus voi olla tarpeellista, kun vaihdat palveluntarjoajaa. Tietyt palveluntarjoajat eivät hyväksy palvelimien käyttöä, kun verkkotunnus on siirtynyt kilpailijalle.
On myös mahdollista, että sinulla DNS-palvelinta käyttävä dedikoitupalvelin, jota haluat käyttää verkkotunnuksesi hallinnointiin.

## DNS-alue
Kun haluat määritellä minne sivuston liikenne tai sähköpostit ohjautuvat, sinun täytyy muokata DNS-aluetta. Kun alue on muokattu ja päivitetty, verkkotunnuksesi osoittaa uuteen kohteeseen tai kohteisiin. 

DNS-alueeseen liittyvä ohje on saatavilla alla olevasta linkistä:

- []({legacy}2015).




## Kirjautuminen hallintapaneeliin

- Kirjaudu hallintapaneeliin [url="https://www.ovh.com/manager/web"] asiakastunnuksellasi ja sille määrittelemälläsi salasanalla.

- Klikkaa "Kirjaudu" toimenpiteen vahvistamiseksi.



![](images/img_3411.jpg){.thumbnail}


## Verkkotunnuksen valinta

- Valitse vasemmalla olevasta valikosta "Verkkotunnukset", sitten muokattava "verkkotunnus".



![](images/img_3405.jpg){.thumbnail}


## Uusien nimipalvelimien lisäys

- Mene kohtaan "DNS-hallinta" ja valitse "Lisää nimipalvelin".



![](images/img_3406.jpg){.thumbnail}

- Ilmoita lisättävä ensimmäinen nimipalvelin, vahvista ja tee sitten sama toiselle nimipalvelimelle.



![](images/img_3407.jpg){.thumbnail}


## Vanhojen nimipalvelinten poisto

- Klikkaa "roskakori"-kuvaketta poistettavian kahden vanhan nimipalvelimen kohdalla ja vahvista.



![](images/img_3408.jpg){.thumbnail}

- Poisto käynnissä.



![](images/img_3409.jpg){.thumbnail}

- Muutaman minuutin kuluttua toimenpide on valmis.



![](images/img_3410.jpg){.thumbnail}


## Nimipalvelinten nollaus oletuksena
Jos muokkaat nimipalvelintasi väärin, voit nollata nimipalvelimesi oletuksena.


- Mene kohtaan "DNS-hallinta" ja valitse "Nollaa nimipalvelin oletuksena".



![](images/img_3416.jpg){.thumbnail}

- Klikkaa "Vahvista" nollauksen vahvistamiseksi.



![](images/img_3417.jpg){.thumbnail}


## Kuinka tunnistaa OVH:n määrittelemät nimipalvelimet
Jotta tunnistat OVH:n määrittelemät nimipalvelimet, klikkaa kohtaa "DNS-alue" ja näet alueellasi olevat kaksi "NS-rekisteriä".

![](images/img_3418.jpg){.thumbnail}


## Nimipalvelimien edistynyt hallinta Glue Registryn avulla
Luodaksesi tilin Glue Registry -palveluun tutustu ohjeeseen: []({legacy}1568)


## Kestot
Nimipalvelimet


- Kaikkien nimipalvelimien muutosten valmistumisessa voi kestää 48 tuntia. 

DNS-alue
- Kaikkien DNS-aluetta koskevien muutosten valmistuminen voi kestää 24 tuntia.



