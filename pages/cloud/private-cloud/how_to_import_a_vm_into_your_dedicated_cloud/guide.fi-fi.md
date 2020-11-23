---
deprecated: true
title: Virtuaalikoneen siirto Dedicated Cloud -palveluun
excerpt: Tässä ohjeessa kerrotaan kuinka voit siirtää olemassa olevat virtuaalikoneet Hyper V -pohjaiseen Dedicated Cloud -palveluun
slug: virtuaalikoneen_siirto_dedicated_cloud_-palveluun
---


## Virtuaalikoneen export
Export-vaihe vaihtelee riippuen infrasta jossa virtuaalikoneesi on ajossa ja tämän takia export-apu tulisikin saada nykyisen palveluntarjoajasi kautta. Voit kuitenkin käyttää erilaisia käytettävissä olevia aputyökaluja virtuaalikoneen noutamiseksi nykyiseltä palveluntarjoajaltasi. Tämä pitäisi onnistua Hyper-V:n alla VHDX:llä ja VMware-ympäristössä VMDK:lla.


- Nouto on tapahtunut VHDX-työkalulla:

Tässä tapauksessa voit siirtyä suoraan import-vaiheeseen (alla.


- Nouto on tapahtunut VMDK-työkalulla:

Sinun täytyy muuntaa virtuaalikone VMDK-muodosta VHDX-muotoon tehdäksesi siitä Hyper–V-yhteensopivan. Voit käyttää prosessia varten tehtyjä työkaluja:
[Microsoft Virtual Machine Converter Solution Accelerator](http://www.microsoft.com/en-us/download/details.aspx?id=34591)
[2Tware Convert VHD](http://www.2tware.com/product/6/2twareconvertvhdfree)
Tämä ohje tarjoaa johdatuksen VM-siirtoon. Voit käyttää myös muita saatavilla olevia työkaluja. OVH ei voi kuitenkaan tarjota tukea 3. osapuolen kehittämille siirtotyökaluille.


## VM-kirjastoon yhdistäminen FTPS-yhteydellä
Kun olet saanut levyn ulos olemassa olevasta järjestelmästäsi, sinun täytyy siirtää se VMM-kirjastoosi jotta voit ottaa siitä virtuaalikoneen käyttöön. Yhdistääksesi FTPS-yhteydellä ja siirtääksesi levyn, katso seuraava ohje: []({legacy}1425)
Muista siirtää levysi ”Data”-hakemistoon.

![](images/img_1995.jpg){.thumbnail}


## Varmista että levy jolle suoritit import-prosessin, on VMM-kirjastossa
VMM-kirjasto täytyy virkistää ennen kuin siirretty levy näkyy siellä. Tämä tapahtuu joka tunti joten sinun täytyy odottaa jonkin aikaa ennen kuin näet levyn.

![](images/img_1996.jpg){.thumbnail}


## Asennusmallin luominen levyltä
Voit luoda asennusmallin siirretyltä levyltä. Tämä mahdollistaa tulevien virtuaalikoneiden käyttöönoton kustomoinnin. Kustomointi on selitetty tarkemmin seuraavassa ohjeessa: []({legacy}1436)


## Virtuaalikoneen luominen levyltä
Jos et kuitenkaan halua kustomoida mitään, voit ottaa virtuaalikoneen suoraan käyttöön levyltä. Virtuaalikoneen käyttöönottoa on avattu tarkemmin ohjeessa []({legacy}1426)

