---
deprecated: true
title: 'OVF Windows ja SQL Server -mallipohjan käyttöönotto'
slug: ovh-mallipohjan-kayttoonotto
excerpt: 'Katso, kuinka Windows- ja SQL Server -mallipohja otetaan käyttöön'
section: 'OVH:n palvelut ja lisäpalvelut'
---

**Päivitetty 11.6.2018**

## Tavoite

OVH tarjoaa Windows- ja SQL Server -mallipohjia (OVF-formaatissa), joita voit käyttää suoraan työasemapohjaisessa vSphere-ohjelmassasi (versiot 5.5 ja 6.0) ja web-asiakasohjelmassasi (flash ja HTML 5 versiossa 6.5).

**Tässä ohjeessa kerrotaan, mistä löydät lähdetiedostot ja kuinka ne otetaan käyttöön.**

> [!primary]
> 
> Tältä [sivulta](https://www.ovh-hosting.fi/private-cloud/lisapalvelut/kuvat-lisenssit.xml){.external} löydät OVH:n tarjoamien image-kuvien hinnat.
>

## Edellytykset

- Sinulla on pääsyoikeudet web-asiakasohjelmaan tai työasemapohjaiseen ohjelmaan.
- [Olet aktivoinut Windows-lisenssit](https://www.ovh-hosting.fi/private-cloud/lisapalvelut/kuvat-lisenssit.xml#Windows){.external} [hallintapaneelistasi](https://www.ovh.com/auth/?action=gotomanager){.external} (konesalin välilehti `Windows-lisenssi`{.action}). 


## Käytännössä

### Hae OVF-mallipohjan URL

Mene verkkoselaimessa Private Cloud -tuotteesi etusivulle ja klikkaa kohtaa `OVH Template`{.action}.

![Kuvan nimi](images/gatewayssl.png){.thumbnail}

Näkyviin tulevalla `OVH Templates` kuvaruudulla pääset tarjolla olevien Windows- ja SQL-mallipohjien tietoihin. 

Valitse haluttu mallipohja, näkyviin avautuu ikkuna, joka sisältää linkit käyttöönottoa varten vSphere-versiosi mukaan.

![Kuvan nimi](images/copylink.png){.thumbnail}


### OVF-mallipohjan käyttöönotto

Kun olet kirjautunut vSphere-asiakasohjelmaan, mene sivulle `Hosts and Clusters`{.action}, klikkaa sitten hiiren oikeaa painiketta konesalisi kohdalla ja klikkaa kohtaa `Deploy OVF Template...`{.action}:

![Kuvan nimi](images/selectdeploy.png){.thumbnail}

Avautuu ponnahdusvalikko, käyttöönoton konfigurointi alkaa. Ensimmäisessä vaiheessa on lisättävä aiemmin hakemasi linkki:

![Kuvan nimi](images/puturl.png){.thumbnail}

Seuraavassa vaiheessa voit valita konesalin:

![Kuvan nimi](images/selectdatacenter.png){.thumbnail}

Valitse sitten klusteri, jossa virtuaalikone otetaan käyttöön:

![Kuvan nimi](images/selectcluster.png){.thumbnail}

Tästä löydät kaikki mallipohjan tiedot ja erityisesti oletussalasanan. Turvallisuussyistä on tärkeää vaihtaa se ensimmäisen kirjautumisen yhteydessä:

![Kuvan nimi](images/detailstemplate.png){.thumbnail}

Valitse datasäilö, johon virtuaalikone varastoidaan sekä levyn formaatti:

![Kuvan nimi](images/selectdatastore.png){.thumbnail}

Sinun on nyt valittava käytettävä verkko.

![Kuvan nimi](images/selectnetwork.png){.thumbnail}

Konfigurointi on lähes valmis, näet halutun konfiguroinnin yhteenvedon:

![Kuvan nimi](images/resume.png){.thumbnail}

Kun olet klikannut kohtaa `Finish`{.action}, luodaan tehtävä, jonka avulla voit seurata käyttöönottoa:

![Kuvan nimi](images/startdeploy.png){.thumbnail}

Kun käyttöönotto on valmis, voit sulkea ikkunan.

Löydät nyt käyttöönotetun virtuaalikoneen luettelostasi.

![Kuvan nimi](images/inventory.png){.thumbnail}


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.