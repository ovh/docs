---
deprecated: true
title: 'Toissijaisen DNS:n konfigurointi'
excerpt: Miten verkkotunnus konfiguroidaan toissijaiselle DNS-palvelimelle
slug: toissijaisen_dnsn_konfigurointi
legacy_guide_number: g1477
---


## 
OVH:lta saa toissijaisen DNS:n mikäli haluat käyttää omaa palvelinta verkkotunnuksen ensisijaisena DNS:nä.

Toissijainen DNS löytyy hallintapaneelista VPS:n yhteenvedosta.

Sivu näyttää tältä:

![](images/img_2008.jpg){.thumbnail}
Tällä sivulla voi:


- Listata verkkotunnukset, joihin on jo konfiguroitu toissijainen DNS secondaire.
- Lisätä tai poistaa verkkotunnus toissijaiselta DNS-palvelimelta.




## 1. Verkkotunnuksen lisääminen
Verkkotunnuksen lisäämiseksi klikkaa Lisää verkkotunnus ja täytä lomake:

![](images/img_2009.jpg){.thumbnail}

- Syötä "Verkkotunnus"-kenttään lisättävä verkkotunnus.



![](images/img_2010.jpg){.thumbnail}
Kun lomake on valmis, klikkaa Vahvista.

Tämän jälkeen verkkotunnus tulee näkyviin listalla kuten seuraavassa esimerkissä:

![](images/img_2011.jpg){.thumbnail}
Verkkotunnusten kohdalla näkyvät seuraavat tiedot:


- VERKKOTUNNUS: Toissijaiselle DNS-palvelimelle konfiguroitu verkkotunnus.
- LUONTIPÄIVÄ: Päiväys, jolloin verkkotunnus on konfiguroitu toissijaiselle DNS-palvelimellle.
- IP: Verkkotunnuksen ensisijaisen DNS-palvelimen IP-osoite.
- TOISSIJAINEN DNS: OVH:n toissijaisen DNS:n nimi, jolle verkkotunnus on konfiguroitu.


On mahdollista, että verkkotunnuksen hallinta halutaan tarkastaa. Seuraava virheviesti voi esiintyä lisättäessä verkkotunnusta:
Virhe esiintyi pyydettäessä lisäämään verkkotunnusta toissijaiselle DNS-palvelimelle. (First we need to verify you are the owner of this domain. To do so, please add a TXT field on your DNS zone for the domain dedie-domaine.com, with the subdomain 'ownercheck' and the following value: '339ea8d0'. Once done and your zone reloaded, try again (you don't need to wait for DNS propagation).)
Tässä tapauksessa on lisättävä TXT-kenttä aliverkkotunnukselle ownercheck.omadomain.com nykyisen ja toiminnallisen verkkotunnuksen DNS-alueeseen:


```
ownercheck TXT "339ea8d0"
```




## 2. Verkkotunnuksen poisto
Verkkotunnuksen poistamiseksi toissijaiselta DNS:ltä klikkaa verkkotunnuksen oikealta puolelta painiketta Roskakori.


## 
Ohjeessa neuvotaan, miten verkkotunnus lisätään toissijaiselle DNS-palvelimelle ja poistetaan sieltä.

