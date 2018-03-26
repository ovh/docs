---
title: Configureer een failover IP met Fedora
excerpt: Configureer een failover IP met Fedora
slug: configureer_een_failover_ip_met_fedora
legacy_guide_number: g2045
---


## 
Het is misschien noodzakelijk om een failover IP-adres te configureren op uw instances om één van de volgende redenen: 

- U heeft een groot aantal websites op uw instance;
- U host internationale projecten. 

Om dit te kunnen doen kunt u een failover IP-adres voor uw Public Cloud instances kopen of importeren. 

Echter, failover IP's zullen niet automatisch geconfigureerd worden op uw instance. 

Deze handleiding legt uit hoe u het netwerk van uw instance kunt configureren zodat een failover IP erop geplaatst kan worden.


## Vereisten

- [Zorg ervoor dat u een instance in uw OVH klantaccount hebt gelanceerd.]({legacy}1775)
- U dient een failover IP adres te hebben.




## De interface configureren

- Wijzig het configuratiebestand met de volgende invoer: 

```
vi /etc/network/interfaces
```



|Parameters|Waarden|
|---|---|
|X|voornaamste interfacenummer (meestal eth0)|
|xxx.xxx.xxx.xxx|failover IP om te configureren|
|Y|aliasnummer (beginnend met 0 en dan 1 etc. afhankelijk van het aantal IP's die geconfigureerd moeten worden)|


Voeg aan het bestand de volgende regels toe: 

```
APPARAAT="ethX:Y"
BOOTPROTO=static
IP-adres="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
Broadcastadres="xxx.xxx.xxx.xxx"
ONBOOT=ja
```




## De netwerkservice herstarten
Reboot de netwerkservices met de volgende invoer: 

```
ifup ethX:Y
```




## 
[Ga terug naar de index van de Cloud handleidingen]({legacy}1890)


## 
[Ga terug naar de index van de Cloud handleidingen]({legacy}1785)

