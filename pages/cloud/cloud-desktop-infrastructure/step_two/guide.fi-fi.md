---
deprecated: true
title: 2. vaihe - Virtuaalityöpöytien sarjan (pool) mallin luominen
slug: poolin-luominen
excerpt: Opi luomaan pool-mallipohjia VMware Horizon 7.1 -käyttöliittymässä
section: Käyttöönotto
order: 2
---

**Päivitetty 21.2.2018**

## Tavoite

On aika aloittaa [Cloud Desktop Infrastructure](https://www.ovh-hosting.fi/cloud/cloud-desktop/infrastructure/){.external} -tuotteesi käyttö.

**Tässä ohjeessa kerrotaan, kuinka Linked Clones -koneiden automaattista poolia käytetään.**


## Edellytykset

- Käytät yhteensopivaa käyttöjärjestelmää (OS): [Horizon Agentia tukevat käyttöjärjestelmät](https://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.installation.doc%2FGUID-B45E1464-92B1-4AA8-B4BB-AD59EDF98530.html){.external}.
- Asennat poolissa käytettäviä ohjelmistoja.
- Konfiguroit verkkokortin osoitejärjestelmän DHCP:nä.
- Liität virtuaalikoneen (VM) mallin poolin kohdeverkkoon (portgroup tai VLAN).
- VMware Horizon 7.1 -alustan asennus on valmis.
- Luot tilannekuvan (virtuaalikone sammutettuna), joka toimii muuttumattomana vertailukohtana.  
- Olet luonut [personointimallipohjan (sysprep)](https://docs.ovh.com/fi/cloud-desktop-infrastructure/){.external}. 


## Käytännössä

### Virtuaalikoneen (VM) mallin tuominen


On mahdollista luoda tai tuoda virtuaalikoneen malleja VMware Horizon 7.1 -infrastruktuuriisi liitettyyn Private Cloud -tuotteeseen kokonaan tai osittain konfiguroituna.

Tähän tarkoitukseen on käytettävissäsi seuraavat ohjeet *(tulossa pian)*:

- Virtuaalikoneen luominen ISO:lla: [virtuaalikoneen käyttöönotto](https://docs.ovh.com/fi/private-cloud/){.external}
- Virtuaalikoneen luominen OVH:n mallipohjalla: [OVH:n mallipohjan käyttö](https://docs.ovh.com/fi/private-cloud/){.external}
- Tuominen OVFtool-työkalulla: [OVFtool](https://docs.ovh.com/fi/private-cloud/ovf-tool/){.external}.


### Mallipohjan liittäminen poolin kohdeverkkoon

Jotta virtuaalityöpöytien käyttöönotto tapahtuu oikein ja jotta käyttäjät voivat liittyä niihin, on tärkeää konfiguroida virtuaalikoneen malli oikeaan virtuaaliverkkoon. Tämä verkko on lähetetty toimituksen yhteydessä lähetetyssä sähköpostiviestissä (**DHCP Network**) ja sitä ilmaisee vSphere-käyttöliittymässä `dvportgroup`.

Virtuaalikone liitetään pooliverkkoon seuraavasti:

- Klikkaa virtuaalikonetta hiiren oikealla painikkeella ja valitse `Edit settings`{.action}
- Valitse verkkokäyttöliittymää vastaava laite
- Valitse `Network Connection`{.action} -kohdasta **DHCP Network** -toimitussähköpostissa ilmoitettu `Network label`{.action} (ks. alla oleva kuva).

![DHCP Network](images/1200.png){.thumbnail}

Jos tarvitaan ylimääräinen olemassa olevasta eristetty verkko, on mahdollista käyttää uutta yhteyspistettä dedikoidun verkon kanssa. Lue ohje [Uuden yhteyspisteen luominen](https://docs.ovh.com/fi/cloud-desktop-infrastructure/).


### VMware Horizon 7.1 -ohjelmiston asennus

> [!primary]
>
> HaaS-tuotteen käyttäjille on tarjolla Horizon-ohjelman asennustiedostot: <https://files.horizonaas.com/>.
> 

Tee tuplaklikkaus Horizon Agent -asennusohjelman kohdalla ja seuraa sitten asennusprosessin vaiheita:

- Hyväksy VMware-lisenssin käyttöehdot
- Valitse `Asenna VMware Horizon Agent`{.action} `työpöytäversiona`{.action}
- Valitse IPv4-protokolla
- Valitse asennusvalinnat (oletusvalinnat ovat hyvä alku)
- Älä aktivoi RDP:tä, kun sitä pyydetään
- Hyväksy tai muokkaa kohdekansiota
- Viimeistele asennus

Jos haluat lisätietoa Horizon 7.1 -ohjelmiston asennuksesta virtuaalikoneelle, lue ohje [Horizon-ohjelmiston asentaminen virtuaalikoneelle](http://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.desktops.doc%2FGUID-1F2D0C6E-6379-4B52-A7EA-C1EF09CE2F9B.html){.external}.


### Vertailukohtana olevan tilannekuvan luominen

Voidakseen perustua poolin mallina olevan virtuaalikoneen muuttumattomaan tilaan VMware Horizon pohjautuu tilannekuvaan. Toimenpiteet, joita tämän jälkeen saatetaan suorittaa mallilla, eivät vaikuta suoraan virtuaalityöpöytien sisältöön.

- Valitse vSphere-asiakasohjelman käyttöliittymässä (esimerkkikuvassa web-versio) virtuaalikoneen malli ja sitten valikko `Actions`{.action}. Klikkaa lopuksi kohtaa `Luo tilannekuva`{.action}.

![Luo tilannekuva](images/1201.png){.thumbnail}

- Anna tilannekuvalle nimi (esimerkkikuvassa version numero) ja kuvaus:

![Tilannekuvan nimi](images/1202.png){.thumbnail}

Nyt kun malli on luotu, lue seuraavasta ohjeesta, [kuinka luodaan pooli](https://docs.ovh.com/fi/cloud-desktop-infrastructure/kuinka-luodaan-pool/).

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://ovh-hosting.fi/community/foorumi>.