---
deprecated: true
title: Het gebruik van Ripe IP/vRack1.5
excerpt: Hoe kan ik een VM in het vRack 1.5 netwerk zetten of een RIPE IP blok gebruiken?
slug: het_gebruik_van_ripe_ipvrack15
---


## Presentatie van het VM Network netwerk
OVH heeft een "VM Network" netwerk gemaakt met een vooraf gedefinieerde ippool met configuratie voor uw Ripe blok.
Met dit "VM Network" kunt u ook de vRack 1.5 gebruiken.

![](images/img_1984.jpg){.thumbnail}


## Een dynamisch Ripe IP blok verkrijgen (bijvoorbeeld met een Windows VM)

- Het maken van de bijpassende template 

Om een ​​IP van het ippool "VM Network" op te halen, is het noodzakelijk om een template te maken om de VM met succes te implementeren. (Achtergrondinformatie over het aanmaken van een template: []({legacy}1436))
De template moet in de eerste plaats worden toegevoegd aan de juiste netwerkconfiguratie:

![](images/img_1985.jpg){.thumbnail}
Om te werken met de sysprep van de machine, moet u eerst de template aanpassen:

![](images/img_1986.jpg){.thumbnail}

- Implementeren van de VM

Na voltooiing van de voorgaande stappen, kunt u de VM implementeren van de template.
Eenmaal geïmplementeerd, zou de VM de volgende configuratie moeten hebben:

![](images/img_1989.jpg){.thumbnail}
Als de netwerkinstellingen overeenkomen met de afbeelding hierboven, kunt u de VM starten en daarmee controleren of de IP juist is toegewezen aan uw VM.


## Een IP handmatig aan het RIPE blok toewijzen
Indien u het IP van de VM handmatig (wel of niet via een template ingesteld) wilt configureren, is het voldoende om in te loggen op het "VM Network"-netwerk

![](images/img_1989.jpg){.thumbnail}
Zodra de VM is gestart, kunt u het IP-adres dat u wilt, direct aan het besturingssysteem toewijzen.
U kunt informatie over het Ripe blok vinden in de e-mail in uw manager, of in de eigenschappen van het 'VM Network':

![](images/img_1990.jpg){.thumbnail}


## VMM en vRack1.5
Onder VMM gaat de verbinding met het vRack 1.5 ook via het "VM Network" netwerk.
Om verbinding te maken met een IP op het vRack 1.5, moet u uw VM configureren, zodat dit kan verbinden naar het "VM Network" netwerk:

![](images/img_1989.jpg){.thumbnail}
Configureer dan handmatig de IP-instellingen, zodat uw VM kan communiceren met de andere elementen op het vRack 1.5

