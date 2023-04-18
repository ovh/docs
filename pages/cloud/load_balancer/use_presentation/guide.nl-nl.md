---
deprecated: true
title: Introductie tot de OVH Load Balancer
excerpt: Ontdek de nieuwe OVH Load Balancer
updated: 2018-01-17
---

**Laatste update 01-02-2018**

## Introductie

De nieuwe OVH Load Balancer is een betrouwbare dienst met veelzijdige configuraties. U hoeft alleen maar uw producten te configureren met de OVH Load Balancer ..en wij zorgen voor de rest.

**Ontdek de nieuwe OVH Load Balancer. **

## Vereisten

- Er zijn geen specifieke vereisten.


## Instructies

 
Deze nieuwe oplossing is gebaseerd op krachtige open source-oplossingen: HAProxy voor TCP-verkeer en Nginx voor UDP-verkeer.

Geen beperkingen meer! De nieuwe OVH Load Balancer kan worden gebruikt om met verschillende protocollen te werken:

|Type|Omschrijving|Voordelen|Technologie|
|---|---|---|---|
|HTTP|Alle HTTP/HTTPS webdiensten|Geoptimaliseerd voor L7 (application layer) processing|HAProxy|
|TCP|Voor alle netwerkdiensten die niet in HTTP zijn|Ondersteund alle TCP-applicaties|HAProxy|
|UDP|Voor all UDP-verkeerstypes|Ondersteunt alle UDP-applicaties|Nginx|

Deze nieuwe oplossing biedt u:

 - OVH Anti-DDoS;
 - Wereldwijde replicatie van uw diensten (Anycast);
 - Geavanceerde HTTP/HTTPS-ondersteuning (doorverwijzingen, headers, ACL, etc.);
 - Een dienst die compatibel is met een failover-IP;
 - vRack-ondersteuning;
 - Redundantie - uw Load Balancer-functies op afzonderlijke instances werken individueel op geïsoleerde, redundante hardware.

### Basisonderdelen

- De nieuwe OVH Load Balancer-oplossing bestaat uit drie basisonderdelen:

![Algemeen](images/diag_gen.png){.thumbnail}

|Basisonderdelen|Functie|
|---|---|
|Front-end|De front-end definieert het protocoltype (HTTP/TCP/UDP) van de OVH Load Balancer. Dit deel heeft ook de luisterpoort van de dienst|
|Farm|De farm ontvangt het inkomende verkeer van de front-end. Dit onderdeel zorgt voor de taakverdeling|
|Server|Dit zijn de servers die het laatste verkeer ontvangen en reageren via de applicatie|

Met deze drie basisonderdelen kunt u het configureren om bijna alle mogelijke load balancing-methoden te gebruiken.


### Waarom gebruikmaken van de OVH Load Balancer?

#### Een gelijke verdeling van de lading

Dit is de basisfunctie van een load balancer, maar de OVH Load Balancer biedt veel meer.

![Distribute load](images/distribute_load.png){.thumbnail}

#### Geen downtime meer

De OVH Load Balancer-dienst kan automatisch detecteren wanneer een server niet reageert. Wanneer dit gebeurt, wordt inkomend verkeer zo mogelijk omgeleid naar een andere server. Dit lost het probleem op zonder uw website te beïnvloeden.

![Eliminate downtime](images/eliminate_downtimes.png){.thumbnail}

#### Pas uw infrastructuur met gemak aan

U kunt farms, front-ends, of servers toevoegen of verwijderen van de OVH Load Balancer zonder uw service te onderbreken.

![Scale your infra easily](images/facilitate_maintenance.png){.thumbnail}


#### Maak onderhoud eenvoudiger

Als er een onderhoud is gepland voor uw oplossing, kunt u nu een farm eenvoudig in de downtime-modus plaatsen om te voorkomen dat hij verkeer ontvangt. In dit geval is het eenvoudig om uw server opnieuw toe te voegen nadat het onderhoud is voltooid.

![Maak onderhoud eenvoudiger](images/scale_easily.png){.thumbnail}


#### Combineer uw diensten

U kunt nu verschillende OVH-diensten in de Load Balancer combineren, bijvoorbeeld:

- Public Cloud instances met failover-IP‘s
- VPS met failover-IP‘s
- Dedicated servers met failover-IP‘s
- vRack

![Mix and match service](images/mix_and_match.png){.thumbnail}

#### Anycast

U kunt uw lading uitbalanceren in verschillende geografische zones.

![Anycast](images/anycast.png){.thumbnail}


#### Distribueer alle soorten verkeer

OVH's Load Balancer is niet langer beperkt tot alleen HTTP-verkeer! U kunt het nu gebruiken met alle TCP- en UDP-verkeerstypen.


#### E-mailserver

Verdeel de lading tussen uw e-mailservers.

![Mail](images/mail.png){.thumbnail}


#### Databases

Breng uw databases in evenwicht en maak ze redundant.

![Database](images/database.png){.thumbnail}


## Verder

[Meer informatie over load balancing](https://nl.wikipedia.org/wiki/Load_balancing){.external}.

[Meer informatie over Haproxy](http://www.haproxy.org/#desc){.external}.

[Meer informatie over Nginx](https://nl.wikipedia.org/wiki/Nginx){.external}.

Ga in gesprek met andere communitygebruikers via <https://community.ovh.com/en/> .