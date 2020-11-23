---
deprecated: true
title: 'OVH Network -liitännäisen käyttö'
slug: ovh-network-liitännäinen
excerpt: 'Katso, kuinka OVH Network -liitännäistä käytetään Private Cloud -tuotteella'
legacy_guide_number: '7766560'
section: 'OVH:n ominaisuudet'
---

**Päivitetty 12.9.2018**

## Tavoite

OVH Network on OVH:n kehittämä liitännäinen. Sen roolina on tarjota tarkempaa hallinnointia kaikille [Private Cloud](https://www.ovh-hosting.fi/private-cloud/){.external} -tuotteeseen liittyville IP-osoitteille.

**Katso, kuinka OVH Network-liitännäistä käytetään Private Cloud -tuotteella.**

## Edellytykset

* [Private Cloud](https://www.ovh-hosting.fi/private-cloud/){.external} -tuote.
* [Private Cloud ](https://www.ovh-hosting.fi/private-cloud/){.external}-tuotteeseen liitetty IP-lohko.
* Pääsy vSphere-hallintakäyttöliittymään.

## Käytännössä

Klikkaa valikossa `Host and Cluster`{.action}, ja valitse sitten konesali tai infrastruktuurin klusteri. Klikkaa sitten `Manage`{.action} ja `OVH Network`{.action}.

![OVH Network-liitännäinen](images/network_01.png){.thumbnail}

Tulet nyt `Summary`-osioon, johon on koottuna omistamasi IP-lohkot sekä jokaisen lohkon perustiedot.

![IP-osoitteiden ja lohkojen tiedot](images/network_02.png){.thumbnail}

**IP Blocks**-osassa on listattuna kaikki lohkosi IP-osoitteet. Varo käyttämästä konfigurointiin ja korkeakäyttöisyyteen **varattuja viittä IP-lohkoa**:

- ensimmäinen IP-osoite ilmoittaa lohkosi reitittimellä
- viimeinen IP-osoite on **broadcast**-IP
- toiseksi viimeinen on **gateway**-väyläsi
- kahta ennen gatewayta olevaa IP-osoitetta käytetään **HSRP**-protokollana (Hot Standby Router Protocol) reitittimillä.

![IP-lohkot](images/network_03.png){.thumbnail}

Jotta voit ilmoittaa OVH-liitännäisille, että julkiset IP-osoitteet on jo käytetty, on tarpeen toteuttaa ARP-kysely (_arping_) näitä osoitteita käyttävillä virtuaalikoneilla. Huomio: tietyt virtuaalisella palomuurilla varustetut konfiguraatiot eivät salli MAC-osoitteiden takaisin saamista, jos ARP-protokollaa ei ole sallittu.

Voit seuraavaksi konfiguroida Reverse IP -osoitteen esimerkiksi sähköpostipalvelimelle. Tähän asetukseen pääsee myös [hallintapaneelista](https://www.ovh.com/auth/?action=gotomanager){.external} sekä [OVH:n API-ohjelmistoilla](https://api.ovh.com/){.external}. Klikkaa IP-osoitteen vieressä olevaa kolmea pistettä ja sitten `Edit Reverse`{.action}.

![Reversen muokkauspainike](images/network_04.png){.thumbnail}

Syötä Reverse, klikkaa sitten `Confirm`{.action}.

![Reversen muokkaus](images/network_05.png){.thumbnail}

Tämä tulee näkyviin IP-osoitteen oikealle puolelle lohkon IP-osoitelistaan.

![IP-osoitteiden muokkaus](images/network_06.png){.thumbnail}

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://community.ovh.com/en/>.
