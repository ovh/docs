---
title: Configureer een failover IP met Ubuntu
excerpt: Configureer een failover IP met Ubuntu
slug: configureer_een_failover_ip_met_ubuntu
legacy_guide_number: g2043
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


- Voeg de volgende regels toe aan het eind van het bestand: 

```
auto ethX:Y
iface ethX:Y inet static
adres xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcastadres xxx.xxx.xxx.xxx
```



|Parameters|Waarden|
|---|---|
|X|voornaamste interfacenummer (meestal eth0)|
|xxx.xxx.xxx.xxx|failover IP om te configureren|
|Y|aliasnummer (beginnend met 0 en dan 1 etc. afhankelijk van het aantal IP's die geconfigureerd moeten worden)|


Wanneer u veel IP's moet plaatsen dan moeten ze worden toegevoegd op dezelfde regel: 
door de waarde van Y (het aliasnummer) te verhogen.


## - De netwerkservice herstarten met de volgende invoer:

- Herstart het netwerkservice met de volgende invoer: 

```
service networking restart
```





## 

- [Migreer een failover IP]({legacy}1890)




## 
[Ga terug naar de index van de Cloud handleidingen]({legacy}1785)

