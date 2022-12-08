---
deprecated: true
title: Meest gestelde vragen Hosted Private Cloud
excerpt: ''
slug: meest_gestelde_vragen_dedicated_cloud
legacy_guide_number: g598
---


## Tijdens het configureren van HA krijg ik de foutmelding: "HA error: Niet in staat om de HA configuratie uit te voeren"
Als deze fout zich blijft voordoen, moet u handmatig het HA cluster deconfigureren en vervolgens opnieuw configureren. Om dit te doen, gaat u naar de eigenschappen van uw cluster, ontvink HA en bevestig de wijziging. Zodra de taak is voltooid, kunt u terugkeren naar eigenschappen en dan HA opnieuw activeren. Zodra de activeringstaak voltooid is, wordt de optie geactiveerd op uw HA cluster.


## Waarvoor dient de 'Datastore Rescannen' functie op het cluster:
Deze optie wordt gebruikt voor iSCSI-storage om de toegangsroutes te updaten.
Deze handeling is niet nodig bij OVH, want zij wordt slechts gebruikt voor iSCSI filers en die bieden wij niet aan.


## Na een alert blijft deze in de host weergegeven worden (rood driehoekje)
U moet dit alert valideren en het groen maken in de alert tab van uw host. Klik dan met de rechtermuisknop op de resterende alert.


## Ik heb een VM die zich in een ongeldige status bevindt
In dat geval verwijdert u uw VM van de inventaris, door rechts te klikken op deze VM.
LET OP: kies "verwijderen van de inventaris" en niet "verwijder de disk." In het laatste geval, verliest u de gegevens van uw VM.
Vervolgens, moet u de VM toevoegen in de inventaris.


## Bij toegang tot de console van mijn VM, krijg ik een zwart scherm
In dit geval had het OS van de VM waarschijnlijk het scherm uitgezet. Druk een willekeurige toets in op het toetsenbord om het te heractiveren.

