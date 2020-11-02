---
deprecated: true
title: Uw domein ZoneCheck
excerpt: Deze handleiding gaat over de ZoneCheck van uw domein.
slug: uw_domein_zonecheck
legacy_guide_number: g1980
---


## Het invullen van de vereiste velden
De AFNIC [ZoneCheck](https://zonemaster.fr/) tool controleert of de primaire en secondaire DNS die u wilt aangeven naar behoren geconfigureerd zijn.  

Ga naar de ZoneMaster website: [klik hier](https://zonemaster.fr/). Klik vervolgens op 'Vooraf gedelegeerd domein', en vul de onderstaande velden in:


- Domeinnaam: Voer de te testen domeinnaam in
- Naamservers: Klik op de + na het aantal te testen naamservers en geef vervolgens de server en IP-adres(sen) aan. 
- Bevestig het om het resultaat te zien



![](images/img_3213.jpg){.thumbnail}


## Resultaat
Het resultaat verschijnt enkele ogenblikken nadat het ingevulde formulier is bevestigd. 


- Als alles groen is: Uw zone is correct. U kunt de wijziging in naamservers vanaf uw control panel bevestigen.

- Als enkele elementen rood zijn: In de informatie bij de resultaten staat aangegeven hoe u de benodigde correcties kunt maken. 

Let op: als er elementen in het rood staan: lanceer geen naamserver update zonder zeker te weten wat u doet; er is namelijk het risico dat het proces geblokkeerd word en uw diensten die gekoppeld zijn aan de domeinen kunnen dan mogelijk niet meer werken.

![](images/img_3211.jpg){.thumbnail}


## Nuttige informatie
Meer informatie over deze tool en zijn functies verkrijgbaar in het 'Veelgestelde vragen'-onderdeel van ZoneMaster.

![](images/img_3212.jpg){.thumbnail}

