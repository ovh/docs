---
deprecated: true
title: 'Toewijzen van een virtueel MAC-adres aan een failover-IP'
slug: netwerk-virtual-mac
excerpt: 'Leer hoe u een virtueel MAC-adres kunt maken en hoe u dit kunt koppelen aan een failover-IP'
section: 'Netwerk & IP'
---

**Laatste update 09-08-2018**

## Introductie

Met OVH kunt u een virtueel MAC-adres aan een IP-adres koppelen, zodat u virtuele machines met bridge-configuratie op uw server kunt instellen.

**Deze handleiding gaat over de creatie van een virtueel MAC-adres en de verbinding ervan met een failover-IP.**


## Vereisten

* U moet beschikken over een [dedicated server](https://www.ovh.com/nl/dedicated_servers/){.external}.
* U moet beschikken over een [failover-IP-adres](https://www.ovh.nl/dedicated_servers/ip_failover.xml){.external} of een failover-IP-blok (RIPE). 
* U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}


## Instructie

### Toewijzen van een MAC-adres

Nadat u zich hebt ingelogd op het [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klikt u op het `Dedicated`{.action} menu, en vervolgens op het `IP`{.action}-gedeelte in de linkerkolom van de pagina.

![IPFO](images/virtual_mac_01.png){.thumbnail}

Zoek vervolgens uw failover-IP-adres (of blok) in de lijst en klik dan op de knop `...`{.action} om de lijst met opties weer te geven.

![IPFO](images/virtual_mac_02.png){.thumbnail}

Wanneer het dialoogvenster "Virtuele MAC toevoegen" verschijnt, selecteert u een type in de vervolgkeuzelijst, voert u de naam van een virtuele machine in en klikt u op `Bevestigen`{.action}.

> [!primary]
>
> **Type**: dit is het type virtueel MAC-adres ("VMware" zal een MAC-adres zijn dat gemaakt is voor het VMware ESXi-systeem, terwijl "OVH" geschikt is voor alle andere soorten virtualisatiesystemen).
>
> **Naam van de virtuele machine**: dit is de gewenste naam voor het virtuele MAC-adres, om vervolgens dit IP/MAC paar gemakkelijker te vinden.
>

![IPFO](images/virtual_mac_03.png){.thumbnail}


> [!primary]
>
> Vergeet niet om het virtuele MAC-adres, dat is aangemaakt tijdens het configureren van uw virtuele machine, toe te wijzen.
> 

### Verwijderen van een MAC-adres 

> [!warning]
>
> Het verwijderen van een MAC-adres is definitief, er zal geen herstel mogelijk zijn.
> 

Als u een virtueel MAC-adres wilt verwijderen dat is gekoppeld aan een failover-IP, logt u zich eerst in op uw [Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} en gaat u vervolgens naar het menu `Dedicated`{.action} en het gedeelte `IP`{.action}. Selecteer de relevante server zodat de failover-IP (of IP-blok) die eraan is gekoppeld, wordt weergegeven.

Klik ten slotte op de knop`...`{.action} rechts en klik vervolgens op `Virtuele MAC verwijderen`{.action}.


## Verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.