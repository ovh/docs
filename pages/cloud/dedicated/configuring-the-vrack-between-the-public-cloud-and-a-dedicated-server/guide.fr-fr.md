---
title: 'Configurer le vRack entre Public Cloud et un serveur dédié'
slug: configurer-vrack-entre-pci-serveur-dedie
excerpt: 'Découvrez comment configurer un réseau privé entre une instance Public Cloud et un serveur dédié.'
section: vRack
---

**Dernière mise à jour le 27/07/2018**

## Objectif

Le [vRack](https://www.ovh.com/fr/solutions/vrack/){.external} est un réseau privé qui vous permet de configurer l'adressage entre deux ou plusieurs [serveurs dédiés](https://www.ovh.com/fr/serveurs_dedies/){.external} OVH. Mais il vous permet également d'ajouter des [instances Public Cloud](https://www.ovh.com/fr/public-cloud/instances/){.external} à votre réseau privé afin de créer une infrastructure de ressources physiques et virtuelles.

**Ce guide vous montre comment configurer le réseau privé entre une instance Public Cloud et un serveur dédié.**


## Prérequis

- Avoir activé un service [vRack](https://www.ovh.com/fr/solutions/vrack){.external}.
- Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external} compatible avec le vRack.
- Être connecté à l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Avoir accès à votre plage d'adresses IP privées choisie.


## En pratique

### Créer un projet Public Cloud

Une fois connecté dans l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur le menu `Cloud`{.action}, puis sur le bouton `Commander`{.action}.

![Créer un projet](images/pci-project-01.png){.thumbnail}

Sous le menu `Commander`, cliquez sur le bouton `Projet cloud`{.action}.

![Créer un projet](images/pci-project-02.png){.thumbnail}

Donnez un nom à votre projet, choisissez un mode de paiement, puis cliquez sur le bouton `Créer le projet`{.action}.

![Créer un projet](images/pci-project-03.png){.thumbnail}

Une fois votre projet configuré, vous devez activer les réseaux privés. Cliquez sur le bouton `Activer les réseaux privés`{.action} sur la page du projet.

![Activer vRack](images/pci-vrack-01.png){.thumbnail}

Ensuite, sélectionnez l'option `Existant`{.action}, puis choisissez votre vRack dans la liste déroulante.

![Activer vRack](images/pci-vrack-02.png){.thumbnail}


### Créer une instance Public Cloud

Sur la page de votre projet, cliquez sur le bouton `Actions`{.action}.

![Créer une instance](images/pci-01.png){.thumbnail}

Dans la liste déroulante, cliquez sur l'option `Ajouter un serveur`{.action}.

![Créer une instance](images/pci-02.png){.thumbnail}

Cliquez sur le bouton `Options avancées`{.action}.

![Créer une instance](images/pci-03.png){.thumbnail}

Ensuite, cliquez sur la liste déroulante sous « **Lien vers le réseau privé :** » et sélectionnez votre vRack. Cliquez alors sur `Continuer`{.action} pour revenir à l’écran précédent.

![Créer une instance](images/pci-04.png){.thumbnail}

Pour finir, choisissez vos options d’installation puis cliquez sur le bouton `Lancer maintenant`{.action}.

![Créer une instance](images/pci-05.png){.thumbnail}


### Configurer vos interfaces réseau

Pour configurer les interfaces réseau entre l'instance Public Cloud nouvellement créée et votre serveur dédié, vous pouvez vous référer directement au guide sur notre guide intitulé « [Configurer plusieurs serveurs dédiés dans le vRack](https://docs.ovh.com/fr/dedicated/configurer-plusieurs-serveurs-dedies-dans-le-vrack/){.external} ».


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.