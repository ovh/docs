---
deprecated: true
title: 'Webhotelli: htaccess, Miten tietyt IP-osoitteet estetään verkkosivulla?'
excerpt: Miten tietyt IP-osoitteet estetään verkkosivulla?
id: '1970'
slug: webhotelli_htaccess_miten_tietyt_ip-osoitteet_estetaan_verkkosivulla
legacy_guide_number: g1970
---

Luo vain tiedosto, jonka nimi on .htaccess ja siirrä se www-hakemistoon (tai johonkin valitsemaasi erityishakemistoon).

## Eston tekeminen
Tiedoston täytyy sisältää estosääntöjä. Jokainen sääntö on määritelty rivillä seuravassa muodossa:


```
Deny from adresse_IP
Ou Deny from plage_IP
Ou Deny from domaine
```


Seuraavaksi tarvisee vain korvata yleistermi elementillä, jonka haluat estää. Esimerkiksi:


- Haluat estää IP-osoitteen 192.168.1.2, kirjoita:


```
Deny from 192.168.1.2
```


- Haluat estää kaikki IP-osoitteet jotka alkavat 192.168.x.x, kirjoita:


```
Deny from 192.168
```


- Haluat estää kaikki IP-osoitteet, joilla on Wanadoo-tunniste (tämä on esimerkki, sitä ei tarvitse oikeasti tehdä...), kirjoita:


```
Deny from .wanadoo.fr
```





## Hyväksynnän tekeminen
Jos haluat hyväksyä vain joitakin IP-osoitteita, täytyy "Deny" korvata sanalla "allow" (viitaten yllä oleviin esimerkkeihin)

Esimerkki:
Haluat hyväksyä IP-osoitteen 192.168.1.2, kirjoita:


```
order deny,allow
deny from all
Allow from 192.168.1.2
```



Ei ole kuitenkaan mahdollista hyväksyä epätäydellistä IP-lohkoa, eli jos syötät:


```
order deny,allow
deny from all
Allow from 192.168.1
```


Tämä on toimiva, mutta jos kohtia syötettään vähemmän, johtaa se virheilmoitukseen (500), esimerkiksi:


```
order deny,allow
deny from all
Allow from 192.168
```




## 
Kaikki mitä haluat tietää .htaccess-tiedostosta löytyy [ulr="https://www.ovh-hosting.fi/g1967.webhotelli_htaccess_kaikki_mita_haluat_tietaa"]tästä[/url]

