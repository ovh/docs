---
deprecated: true
title: Stap 4 - Toegang tot virtuele desktops verstrekken aan gebruikers
slug: toegangsrechten-desktop
excerpt: Leer hoe u toegang tot uw verschillende virtuele desktops aan gebruikers kunt toewijzen
section: Aan de slag
order: 4
---

**Laatste update 19-02-2018**

## Introductie

Nu de [creatie van uw pool](https://docs.ovh.com/nl/cloud-desktop-infrastructure/howto-create-pool/){.external} is voltooid, kunt u gebruikers toegang geven tot meerdere virtuele desktops. 

**Deze handleiding legt uit hoe u gebruikers kunt toevoegen.**


## Vereisten

- U moet gebruikers hebben aangemaakt in de Active Directory, als er [een autorisatie is opgezet](https://docs.ovh.com/nl/cloud-desktop-infrastructure/approval-ad/){.external}, of u moet gebruikers hebben gemaakt via uw[ OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.
- U moet ingelogd zijn op de VMware Horizon 7.1-interface.



## Instructies

### Gebruikers beheren

Wanneer het platform aan u wordt geleverd, worden 10 generieke gebruikers (*vdiXX* of XX vertegenwoordigt een nummer) aangemaakt. Hun inloggegevens worden verstrekt in de e-mail ter bevestiging van levering.

Meer informatie over de creatie van nieuwe gebruikers:  [Aanmaken van gebruikers](https://docs.ovh.com/nl/cloud-desktop-infrastructure/create-users/){.external}


## Toewijzen van virtuele desktops

U kunt dit doen vanaf VMware Horizon 7.1. Met behulp van het tabblad `Entitlements`{.action} van de pool kunt u gebruikers aan bepaalde rechten koppelen, waardoor ze toegang hebben tot de virtuele desktops die u hebt geïmplementeerd.

- Klik op `Add entitlement`{.action} om het context-menu te openen

![Add Entitlement](images/1200.png){.thumbnail}

- Zoek en selecteer de gebruiker(s) waaraan u toegang wilt verlenen, en bevestig dit.

![Selecteer gebruiker](images/1201.png){.thumbnail}


De gebruikers die aan een pool zijn gekoppeld, kunnen nu de [virtuele desktops openen en gebruiken](https://docs.ovh.com/nl/cloud-desktop-infrastructure/connexion-desk/){.external}.


## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com>.