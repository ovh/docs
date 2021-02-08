---
deprecated: true
title: 4 vaihe- Virtuaalityöpöytien jakaminen käyttäjille
slug: tyopoytien-jako
excerpt: Opi lisäämään käyttäjiä eri virtuaalityöpöydillesi.
section: Käyttöönotto
order: 4
---

**Päivitetty 15.2.2018**

## Tavoite

Nyt kun [poolisi on luotu](https://docs.ovh.com/fi/cloud-desktop-infrastructure/kuinka-luodaan-pool/){.external}, voit hyväksyä käyttäjiä eri virtuaalityöpöydille.

**Tässä ohjeessa käydään läpi, kuinka käyttäjien lisäys tapahtuu.**


## Edellytykset

- Olet luonut käyttäjiä Active Directoryssä, jos luottamussuhde on luotu, tai olet luonut käyttäjiä [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- Olet kirjautunut VMware Horizon 7.1 -käyttöliittymään.



## Käytännössä

### Käyttäjien hallinta

Alustan toimituksen yhteydessä luodaan kymmenen yleiskäyttäjää (*vdiXX*, jossa XX ilmaisee lukumäärää). Kirjautumistiedot on ilmoitettu toimituksen yhteydessä lähetetyssä sähköpostiviestissä.



## Virtuaalityöpöytien jakaminen

Toimenpiteet tehdään VMware Horizon 7.1 -alustalla. Pooliin voidaan liittää käyttäjiä `Entitlements`{.action}-välilehdellä, jotta nämä saavat pääsyoikeudet käyttöönotettaville virtuaalityöpöydille.

- Klikkaa `Add Entitlement`{.action} pikavalikon avaamiseksi.

![Add Entitlement](images/1200.png){.thumbnail}

- Etsi ja valitse liitettävä käyttäjä tai käyttäjät ja vahvista.

![Käyttäjän valinta](images/1201.png){.thumbnail}


Pooliin liitetyt käyttäjät voivat nyt [kirjautua ja alkaa käyttämään virtuaalityöpöytiä](https://docs.ovh.com/fi/cloud-desktop-infrastructure/kirjautuminen-tyopoydille/){.external}.


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://ovh-hosting.fi/community/foorumi>.