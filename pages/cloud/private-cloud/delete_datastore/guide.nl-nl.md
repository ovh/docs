---
deprecated: true
title: 'Verwijdering van een datastore'
slug: verwijderen-datastore
excerpt: 'Ontdek hoe u een datastore van uw Private Cloud kunt verwijderen'
legacy_guide_number: '7766789'
section: 'OVH functies'
updated: 2020-07-01
---

**Laatste update 21-08-2018**

## Introductie

In sommige gevallen kan het handig zijn om een datastore uit uw cluster te verwijderen, bijvoorbeeld om het te vervangen of om  naar een groter formaat te upgraden.

**Deze handleiding legt uit hoe u veilig een datastore uit uw infrastructuur verwijdert.**


## Vereisten

* U moet beschikken over [Private Cloud](https://www.ovh.com/nl/private-cloud/){.external}.
* U moet toegang hebben tot de vSphere Management Interface.


## Instructie

> [!warning]
>
> Om veiligheidsredenen zal het verwijderingsverzoek afgewezen worden als er virtuele machines (VM's) aanwezig zijn in de betreffende datastore (u vindt de lijst in het validatievenster).
> 


Om een datastore te verwijderen, klikt u ten eerste met de rechtermuisknop op de resource. Selecteer `OVH Private Cloud`{.action}, vervolgens `Remove storage`{.action}.

![Datacenterkeuze](images/removestorage_01.png){.thumbnail}

Er zal een validatievenster worden geopend. Bevestig door te klikken op `Next`{.action}.

![Bevestiging van verwijdering](images/removestorage_02.png){.thumbnail}

Het verwijderingsverzoek wordt vervolgens geaccepteerd. 

![Verwijdering is bevestigd. ](images/removestorage_03.png){.thumbnail}

De voortgang van het proces kan worden gevolgd via recente taken.

![Verwijdering volgen](images/removedatastore.png){.thumbnail}


## Verder

Ga in gesprek met andere communitygebruikers via <https://community.ovh.com/en/>.
