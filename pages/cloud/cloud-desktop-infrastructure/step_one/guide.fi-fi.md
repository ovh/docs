---
deprecated: true
title: 1. vaihe - VMware Horizon 7.1 -alusta
slug: horizon-7-alusta
excerpt: Katso, kuinka kirjaudut ensimmäistä kertaa VMware Horizon 7.1 -alustalle
section: Käyttöönotto
order: 1
---

**Päivitetty 14.2.2018**

## Tavoite

Kerromme viidessä osassa, kuinka voit ottaa käyttöön [Cloud Desktop Infrastructure -palvelusi](https://www.ovh-hosting.fi/cloud/cloud-desktop/infrastructure/){.external}.

**Ensimmäisessä ohjeessa kerrotaan, kuinka aloitetaan VMware Horizon 7.1 -alustan käyttö**.

## Edellytykset

- Olet saanut [Cloud Desktop Infrastructure](https://www.ovh-hosting.fi/cloud/cloud-desktop/infrastructure/){.external} -tunnuksesi sähköpostitse.

## Käytännössä

### Yleiset tiedot

VMware Horizon 7.1 -alusta koostuu seuraavista elementeistä:

- VMware Horizon 7.1 -käyttöliittymä
- kirjautumisosoite (URL) ensimmäiseen virtuaalityöpöytien sarjaasi (pool)
- [Private Cloud](https://www.ovh-hosting.fi/private-cloud/){.external} -alusta, jossa voit käyttää virtuaalikoneiden (VM) malleja sekä virtuaalityöpöytiä.


### Infrastruktuuri

![VMware Horizon 7.1 -infrastruktuuri](images/1200.png){.thumbnail}

OVH käyttää, hallinnoi ja valvoo hallintainfrastruktuuria (*ConnectionServer*, *Composer*, *ActiveDirectory*), jotta poolien käyttöön tarkoitettujen resurssien kapasiteetteihin vaikuttavia häiriöitä ei tapahdu.

OVH käyttää virtuaalireitittimiä (OVH vRouter) sekä *AccessPoint*-yhteyspisteitä, joiden avulla pooleilla on pääsy alustasi mukana toimitettuihin Private Cloud -resursseihin.

Yksityinen verkko on konfiguroitu oletuksena *AccessPoint*-pisteen kanssa alustan toimituksen yhteydessä. Niitä on mahdollista lisätä hallintapaneelissa.


### Toimitus

Kun olet maksanut tilauksesi, saat tunnin kuluessa alla olevan viestin. Löydät siitä kaiken, mitä tarvitset infrastruktuuriin kirjautumista sekä ensimmäisen poolin luomista ja hallinnoimista varten. 

> [!secondary]
>
> Hyvä asiakas,
>
> olet asentanut VDI-lisäpalvelun konesaliisi.
>
> 
> Alla näet tunnuksesi, joilla pääset kirjautumaan infrastruktuuriisi:
>
> 
> * desktop administration access: https://#URL#/admin
> 
> * Käyttäjätunnus: #USERNAME#
> 
> * Salasana: #PASSWORD#
> 
> 
> Mallipohjien hallintaa varten on kirjauduttava Private Cloud -palveluun.
>
> Voit yhdistää sinne seuraavilla tavoilla:
> 
> - Joko vSphere VMware -asiakasohjelmalla
> 
>   * Lataa asiakasohjelma täältä: https://#VPNHOSTNAME#/client/VMware-viclient.exe
> 
>   * IP-osoite: #VPNHOSTNAME#
>
> 
> - Tai vSphere Web -asiakasohjelmalla
> 
>   *  https://#VPNHOSTNAME#/vsphere-client
>
> Huom: vSphere käyttää yhdistämiseen seuraavia portteja: 80, 443 ja 8443. Tässä ovat tiedot ensimmäisen poolisi luomista varten:
>
> 
> * desktop access: https://#POOLURL#
> 
> * DHCP-verkko: #PORTGROUP#
>
> 
> Alla näet 10 verkkotunnuksen käyttäjää:
> 
> * vdi1: #USER1#
> 
> * vdi2: #USER2#
> 
> * vdi3: #USER3#
> ...
>
> 
> Apua löydät katsomalla Cloud Desktop Infrastructuren dokumentaatiota osoitteessa:
> 
>  
> https://www.ovh-hosting.fi/cloud/cloud-desktop/infrastructure/
>
> 
> Voit jakaa kokemuksiasi, antaa palautetta tai kysyä tuotteesta postituslistallamme:
>
> 
> cdi@ml.ovh.net
> 
>  
> Ystävällisin terveisin
> 
> Cloud Desktop Infrastructure -tiimi
> 


Seuraavassa vaiheessa käydään läpi, kuinka [pool-malli luodaan](https://docs.ovh.com/fi/cloud-desktop-infrastructure/poolin-luominen/){.external}.


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://ovh-hosting.fi/community/foorumi>.