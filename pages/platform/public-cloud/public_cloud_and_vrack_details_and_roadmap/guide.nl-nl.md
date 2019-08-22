---
title: Public Cloud en vRack - details en roadmap
excerpt: Public Cloud en vRack - details en roadmap
slug: public_cloud_en_vrack_-_details_en_roadmap
legacy_guide_number: g2148
---


## 
vRack is een OVH technologie waarmee u uw verschillende OVH diensten met elkaar kunt verbinden binnen privénetwerken, waar deze ook maar gelokaliseerd zijn. De diensten moeten compatibel zijn met vRack. 

De vRack is een privé virtueel netwerk waarmee u uw OVH diensten kunt verbinden. U kunt bijvoorbeeld dedicated servers verbinden in Beauharnois, Cloud servers in Starbourgh en een Dedicated Cloud in Roubaix. 

Zodra de technologie is ingeschakeld kunnen uw diensten met elkaar communiceren over een VLAN. Elke VLAN is een geïsoleerd privénetwerk.


## 
De Public Cloud vRack is een derde generatie vRack. Bepaald netwerkmateriaal zal moeten worden vervangen of bijgewerkt zodat vRack volledig kan functioneren. Er zijn bepaalde stappen die hiervoor moeten worden ondernomen.


## Stap 1: Alleen Public Cloud en enkel in Strasbourg en Gravelines
Deze fase is in productie.
De eerste stap is het implementeren van deze technologie voor Public Cloud instances in de Strasbourg en Gravelines datacenters.

Hierdoor zult u instances in SBG1 en GRA1 in hetzelfde project kunnen laten communiceren met elkaar.


## Stap 2: alle datacenters zullen verbonden zijn
Deze fase is in productie.
Tijdens de tweede stap zal vRack beschikbaar gemaakt worden op alle locaties. Naast SBG1 en GRA1 zal het mogelijk zijn om vRack ook in Beauharnois en de BHS1 regio te activeren. 

Ter aanvulling zullen de verschillende locaties aan elkaar gekoppeld worden zodat er tussen datacenters binnen dezelfde groep kan worden gecommuniceerd. 

Privénetwerken met hetzelfde ID zullen automatisch worden verbonden. Een SBG1 instance zal kunnen communiceren met een instance in dezelfde groep in hetzelfde privénetwerk in BHS1 of GRA1.


## Stap 3: vRack Public Cloud verbinding met andere vRack producten
Het zal mogelijk zijn om vRacks in te zetten voor de verbinding van Public Cloud instances met andere OVH producten.

U hoeft alleen maar de diensten toe te voegen aan de vRack waar het Public Cloudproject al is geïntegreerd. Alle OVH diensten die verbonden zijn met dezelfde vRack zullen met elkaar kunnen communiceren, of ze zich nu in Strasbourg, Beaharnois of andere OVH datacenters bevinden. Bijvoorbeeld: de instances van een Public Cloudproject gelegen in BHS1 kunnen communiceren met instances in SBG1 maar ook met een Dedicated Cloud in Roubaix.


## 
Op een dedicated server zijn er twee manieren om de vRack netwerk interface te configureren (onder Linux genaamd: eth1). 


- eth1: 192.168.0.2 - Hier hebben we een privé-adres direct toegewezen aan eth1. 

In dit geval zal het vRack netwerk uitsluitend VLAN ID 0 gebruiken om de servers met elkaar te laten communiceren. 

- eth1.8: 10.8.0.2 - Hier hebben we eth1 getagd met het VLAN ID 8. We hebben gekozen voor het VLAN ID dat we gaan gebruiken en we zullen een privé-adres toewijzen aan deze getagde interface. 


Alle VLAN's worden dus naar de interface van de dedicated server geleid en de VLAN keuze zal gemaakt worden middels de configuratie van de netwerk interface, afhankelijk van het gebruikte ID. 

Voor Public Cloud dient u, om privénetwerken te gebruiken, een project aan een vRack te koppelen. 

Zodra het project gekoppeld is aan een vRack kunt u privénetwerken  creëren die het door u gekozen VLAN ID direct zullen dragen. Hierdoor is het niet langer nodig om de interfaces in de instances te taggen omdat ze al direct geïsoleerd zijn op het privénetwerkniveau. 

Één van de gevolgen hiervan is, dat wanneer u zeer veel VLANS gebruikt, de Public Cloud instances meerdere netwerk interfaces hebben (eth1, eth2 etc.) terwijl u met een Dedicated Server dezelfde interface moet gebruiken maar met verschillende tags (eth1.4, eth1.123 etc.).


## 
[Public Cloud en vRack - How worden de vRack en privénetwerken met Public Cloud instances gebruikt?]({legacy}2162)


## 
[Configureer gebruikerstoegang tot Horizon]({legacy}1773)

