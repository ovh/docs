---
deprecated: true
title: Het optimaliseren van de verdeling van de VM’s op de Hosts
excerpt: Wat is de beste manier om VM's toe te wijzen op de Hosts, om de resources te optimaliseren?
slug: het_optimaliseren_van_de_verdeling_van_de_vms_op_de_hosts
updated: 2018-03-26
---


## Door OVH voorgestelde configuratie
PRO omvat de Dynamic Optimization die de load van een Cluster tussen de verschillende Hosts automatisch verdeeld.
OVH biedt een standaard configuratie van PRO:

![](images/img_1991.jpg){.thumbnail}
Elke 20 minuten zal de Dynamic Optimization automatisch VM's uitvoeren en migreren van de ene host naar de andere om overeen te komen met de instellingen op bovenstaande afbeelding.


## Een VM uitsluiten van de PRO
Indien u wilt dat een VM niet automatisch wordt gemigreerd door PRO, kunt u dit uitsluiten door het aanvinken van het volgende vakje in de eigenschappen van de VM:

![](images/img_1992.jpg){.thumbnail}


## Anti-affiniteit regels
In VMM, is het mogelijk om voor elke VM anti-affiniteit regels vast te stellen, en u kunt aangeven dat u sommige VM's niet op dezelfde host wilt.

![](images/img_1993.jpg){.thumbnail}
Maak een property aan en voeg dit toe aan de "Assigned Properties":

![](images/img_1994.jpg){.thumbnail}
Doe hetzelfde op de andere VM('s) die u wilt afscheiden.

