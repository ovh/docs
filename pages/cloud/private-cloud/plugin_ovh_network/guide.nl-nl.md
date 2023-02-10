---
deprecated: true
title: 'Gebruik van de OVH Network plugin'
slug: plugin-ovh-network
excerpt: 'Ontdek hoe u de OVH Network plugin op uw Private Cloud kunt gebruiken'
legacy_guide_number: '7766560'
section: 'OVH functies'
updated: 2020-07-01
---

**Laatste update 18-09-2018**

## Introductie

De OVH Network plugin is ontwikkeld door OVH.  Het biedt meer controle over alle IP-adressen die zijn gekoppeld aan uw [Private Cloud](https://www.ovh.nl/private-cloud/){.external}.

**Deze handleiding legt uit hoe u deze OVH Network plugin kunt inzetten op uw Private Cloud.**

## Vereisten

* U moet beschikken over [Private Cloud](https://www.ovh.nl/private-cloud/){.external}.
* U moet beschikken over een IP-blok dat gekoppeld is aan uw [Private Cloud](https://www.ovh.nl/private-cloud/){.external}. 
* U moet toegang hebben tot de vSphere Management Interface.

## Instructie

Klik op het menu `Host and Cluster`{.action}, en kies vervolgens een datacenter of infrastructuurcluster. Klik dan op `Manage`{.action} en `OVH Network`{.action}.

![OVH Network plugin](images/network_01.png){.thumbnail}

U bevindt zich nu in het onderdeel `Summary`, hier worden uw IP-blokken en de basisinformatie van elk blok samengevat.

![Informatie over IP's en blokken](images/network_02.png){.thumbnail}

In het gedeelte **IP Block** worden alle IP-adressen van uw blok vermeld. Let op, u kunt **vijf van de IP-blokken niet gebruiken; deze zijn gereserveerd** voor configuratie en hoge beschikbaarheid:

* Het eerste IP-adres, dit geeft uw blok op de router aan;
* Het laatste IP-adres, dit is de **broadcast**;
* Het op één na laatste IP-adres, uw **gateway**;
* Twee IP-adressen vóór de gateway, die worden gebruikt als HSRP (Hot Standby Router Protocol) op de routers.

![IP-blokken](images/network_03.png){.thumbnail}

Om de OVH plugin te informeren dat uw openbare IP-adressen al worden gebruikt, is het noodzakelijk om een ARP-aanvraag (_arping_) uit te voeren vanaf de virtuele machine(s) met behulp van deze adressen. Let op: bepaalde virtuele firewallconfiguraties staan niet toe dat MAC-adressen worden opgehaald als het ARP-protocol niet is toegestaan.

Vervolgens kunt u uw Reverse IP-adres configureren, bijvoorbeeld naar een e-mailserver. Deze instelling is ook toegankelijk vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} en vanuit de [OVH API](https://api.ovh.com/){.external}. Klik op de drie verticale stippen links van het IP-adres en vervolgens op `Reverse bewerken`{.action}.

![Reverse bewerken knop](images/network_04.png){.thumbnail}

Voer Reverse in en klik vervolgens op `Bevestigen`{.action}.

![Reverse bewerking](images/network_05.png){.thumbnail}

Dit verschijnt aan de rechterkant van het IP-adres in de lijst met blok-IP-adressen.

![IP-adres bewerking](images/network_06.png){.thumbnail}

## Verder

Ga in gesprek met andere communitygebruikers via <https://community.ovh.com/en/>.
