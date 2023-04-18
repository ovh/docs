---
deprecated: true
title: 'Begrip van de foutmelding "Controller VM verwijderd"'
excerpt: 'Leer wat de foutmelding "Controller VM verwijderd" precies betekent'
updated: 2021-11-26
---

**Laatste update 28-12-2017**

## Introductie

In uw NSX-interface kunt u het bericht *Controller VM removed* tegenkomen.

**Deze handleiding beschrijft wat er met dit bericht bedoeld wordt**.


## Vereisten

- U moet beschikken over de NSX-optie.
- U moet een gebruiker met [NSX-toegangspermissies - FR](/pages/cloud/private-cloud/change_users_rights){.external} hebben aangemaakt.


## Instructies

In uw [NSX-interface - EN](/pages/cloud/private-cloud/nsx_access-interface), onder de sectie `Installatie`{.action}, kan de *Controller VM verwijderd* -foutmelding verschijnen onder de naam van de controller:

![Controller VM verwijderd -foutmelding](images/controllervmdeleted.JPG)


Dit komt omdat OVH geen controllers op uw infrastructuur host - ze worden gehost op een afzonderlijke interne beheerinfrastructuur, zodat ze geen resources op uw infrastructuur verbruiken.

Onder de standaard configuratie voor NSX, wordt ervan uit gegaan dat de controllers zich in hetzelfde datacenter bevinden als uw virtuele machines, dus dit verklaart deze foutmelding. Dit bericht heeft geen effect op de normale werking van uw machine.

U hoeft alleen maar te controleren of de status van de controllers in uw NSX-interface `Verbonden` is. Als dat zo is, dan werkt uw machine.


> [!warning]
>
> Als u deze fout oplost door op `Oplossen`{.action} te klikken, worden de controllers uit uw infrastructuur verwijderd, wat betekent dat u de NSX of het netwerk van de infrastructuur niet meer op de juiste manier kunt gebruiken. We raden u dan ook af om dit te doen. OVH is nog steeds verantwoordelijk voor het beheer van de NSX-controllers.
> 

Dit verklaart ook de volgende waarschuwing op het NSX-dashboard:

![Waarschuwing op de NSX-interface](images/controllervmdeleted2.JPG)


## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.