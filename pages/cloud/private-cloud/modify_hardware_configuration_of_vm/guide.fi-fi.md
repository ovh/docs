---
deprecated: true
title: Muokkaa virtuaalikoneesi rautakonfiguraatiota
excerpt: ''
slug: muokkaa_virtuaalikoneesi_rautakonfiguraatiota
legacy_guide_number: g587
---


## 
Tässä ohjeessa korostamme asetuksia jotka ovat muokattavissa virtuaalikoneessa ("edit settings" VMwaressa).

Sinun täytyy ensin luoda virtuaalikone käyttäen seuraavaa ohjetta:- []({legacy}607)


## 
Kaikki muokkaukset jotka ovat määritelty alla, täytyy suorittaa Private Cloudistasi vSphereä käyttäen klikkaamalla oikealla hiirennappulalla virtuaalikonettasi ja sen jälkeen valitsemalla "Edit Settings".


## Muisti (RAM)
Muistimäärän varausta voi muokata milloin tahansa edellyttäen että kone on pois päältä. (VMware Hot Add antaa mahdollisuuden tehdä tämän operaation virtuaalikoneella joka on L-hostissa).

Tehdäksesi tämän, siirrä kursori ikkunassa haluamaasi muistiin:

![](images/img_53.jpg){.thumbnail}
Hot Add -ohjeen katselua varten, vieraile [täällä](#CONFIG_AND_ADVANCED_OPTIONS)


## Prosessori (CPU)
Voit vaihtaa virtuaalikoneellesi varattujen prosessoreiden lukumäärää kun kone on pois päältä (VMware Hot Add antaa mahdollisuuden tehdä tämän operaation lennossa virtuaalikoneella joka on L-hostissa).

![](images/img_54.jpg){.thumbnail}
Hot Add -ohjeen katselua varten, vieraile [täällä](#CONFIG_AND_ADVANCED_OPTIONS)


## Näytönohjain
Voit vaihtaa seuraavat näytönohjainasetukset:

- automaattitunnistus;
- manuaalinen resoluution vaihto
- varattu näyttömuistin määrä megatavuina (MB)



![](images/img_55.jpg){.thumbnail}


## Kiintolevy
Voit vaihtaa koneesi virtuaalilevytilan määrää muuttamalla varattua tilaa:

![](images/img_56.jpg){.thumbnail}
Voit määrittää myös kovalevyn tyypin (SATA tai IDE) ja storagen tyypin (pysyvä vai ei-pysyvä).

Pysyvä storage mahdollistaa datan tallennuksen koneen bootin aikana.
Ei-pysyvän storagen kanssa dataa ei säilytetä: jos kone bootataan, kaikki data häviää.

"Add ..."-napilla, voit lisätä toisen levyn virtuaalikoneellesi milloin tahansa kun VM on päällä tai pois päältä.


## CD/DVD-asema
Se mahdollistaa helpon imagemounttauksen datastorestasi:

![](images/img_62.jpg){.thumbnail}

## HUOMIO!
On tärkeää tarkastaa että "Connect at power on" on valittuna jotta CD/DVD-asema tunnistetaan ja että levysi voidaan ottaa käyttöön.


## Verkkokortti (NIC)
Tämä toiminto mahdollistaa valita kortin tyypin jonka haluat konfiguroida virtuaalikoneellesi ja yhteystyypin (tai VM Network LocalPortGroup).

VM Network -valinnalla voit lisätä virtuaalikoneesi julkiseen verkkoon (RIPE IP:n avulla) tai paikallisverkkoon hostien välille.

LocalPortGroup mahdollistaa dataliikenteen vain privaattiverkossa ja on rajoitettu hostiin (vain yksi VM-hosti voi liikennöidä toisten kanssa).

Voit käyttää seuraavaa ohjetta konfigurointiin:


- []({legacy}582)



![](images/img_63.jpg){.thumbnail}


## Yleiset asetukset
Tämä asetus mahdollistaa vaihtaa konetyypin valintaa VM:n luonnin aikana ja myös luonnin jälkeen.


## vApp Options
Tämä asetus mahdollistaa IP-osoitteen tyypin määrittelyn tai OVF-asetuksien määrittelyn haluamaksesi virtuaalikoneella.


## VMware Tools
Tässä osiossa voit hallita WMvare Toolsin käytössä olevien painikkeiden toimintatapoja.
"Stop"-painike voi esimerkiksi suorittaa virtuaalikoneen sammutuksen (shut down) tai virran katkaisun (power off).


## Lisäasetukset
Lisäasetukset mahdollistaa koneesi hienosäädön. Tässä osiossa voit ottaa tai poistaa käytöstä lennossa käyttöön otettavan prosessorin ja muistin, kiitos "Memory/CPU Hotplug"-toiminnallisuuden. Tämä asetus vaatii kuitenkin L-hostin, tai korkeamman.

Toinen toiminto on nimeltään "Swapfile Location". Oletuksena OVH konfiguroi tämän toiminnon siten että virtuaalikoneen swap-tiedosto on suoraan hostissa. Tässä tapauksessa missä kyseessä on Private Cloud, swap-tiedosto sijoitetaan SSD-levylle. Tämän konfiguraation käyttäminen tarkoittaa parempaa luku- ja kirjoitusnopeutta.

Ota kuitenkin huomioon että jos konfiguroit virtuaalikoneen 12 GB muistilla, VMware tekee automaattisesti 12 GB swap-tiedoston joka sijoitetaan 30 GB lokaalistorageen!


Huomaa myös, että jos käytät tätä vaihtoehtoa, et enää hyödy suojasta jonka Hot Add -toiminto tarjoaa.

Tätä varten voit muuttaa asetusta jolloin swap-tiedosto on edelleen sidoksissa virtuaalikoneeseen ja sitten asetettuna NASiin .vmx- ja .vmdk-tiedostojen kanssa.

