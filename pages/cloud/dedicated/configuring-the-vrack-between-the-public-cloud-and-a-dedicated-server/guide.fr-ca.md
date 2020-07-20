---
title: 'Configurer le vRack entre Public Cloud et un serveur dédié'
slug: configurer-vrack-entre-pci-serveur-dedie
excerpt: 'Découvrez comment configurer un réseau privé entre une instance Public Cloud et un serveur dédié.'
section: vRack
---

**Dernière mise à jour le 27/07/2018**

## Objectif

Le [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external} est un réseau privé qui vous permet de configurer l'adressage entre deux ou plusieurs [serveurs dédiés](https://www.ovh.com/ca/fr/serveurs_dedies/){.external} OVH. Mais il vous permet également d'ajouter des [instances Public Cloud](https://www.ovh.com/ca/fr/public-cloud/instances/){.external} à votre réseau privé afin de créer une infrastructure de ressources physiques et virtuelles.

**Ce guide vous montre comment configurer le réseau privé entre une instance Public Cloud et un serveur dédié.**


## Prérequis

- Avoir activé un service [vRack](https://www.ovh.com/ca/fr/solutions/vrack){.external}.
- Posséder un [serveur dédié](https://www.ovh.com/ca/fr/serveurs_dedies/){.external} compatible avec le vRack.
- Être connecté à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
- Avoir accès à votre plage d'adresses IP privées choisie.


## En pratique

### Créer un projet Public Cloud

Une fois connecté dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, cliquez sur le menu `Server`{.action}, puis sur le bouton `Commander`{.action}.

![Créer un projet](images/pci-project-01_2020.png){.thumbnail}

Sous le menu `Commander`, cliquez sur le bouton `Projet cloud`{.action}.

![Créer un projet](images/pci-project-02_2020.png){.thumbnail}

Donnez un nom à votre projet, lire et accepter les contrats, puis cliquez sur le bouton `Continuer`{.action}.

![Créer un projet](images/pci-project-03a_2020.png){.thumbnail}

Sélectionnez un mode de paiement, puis cliquez sur `Créer mon projet`{.action}

![Créer un projet](images/pci-project-03b_2020.png){.thumbnail}

Une fois votre projet configuré, vous devrez l'ajouter au vRack. Cliquez sur "Serveur"{.action}, puis sur "vRack"{.action}

![Activer vRack](images/pci-vrack-00_2020.png){.thumbnail}

Sélectionnez votre vRack existant, puis sélectionnez votre projet cloud, puis cliquez sur "Ajouter"{.action}

![Activer vRack](images/pci-vrack-00a_2020.png){.thumbnail}

Ensuite, vous devez activer les réseaux privés. Cliquez sur le bouton "Activer les réseaux privés"{.action} de la page du projet.

![Activer vRack](images/pci-vrack-01_2020.png){.thumbnail}

Vous pouvez ici créer la configuration de vos réseaux et nommer le réseau. Une fois que cela a été configuré à votre préférence, cliquez sur "Create" {.action}

![Activer vRack](images/pci-vrack-02_2020.png){.thumbnail}

### Créer une instance Public Cloud

Sur la page de votre projet, cliquez sur le bouton `Créer une instance`{.action}.

![Créer une instance](images/pci-01_2020.png){.thumbnail}

Sélectionnez votre modèle, région et image. Choisissez ensuite votre réseau privé.

![Créer une instance](images/pci-02_2020.png){.thumbnail}

Enfin, choisissez votre période de facturation, puis cliquez sur le bouton "Créer une instance"{.action}. Pour plus d'informations sur les différentes options, veuillez vous reporter au présent guide : [Créez une instance dans votre compte client OVHcloud](../public-cloud/create_an_instance_in_your_ovh_customer_account/){.external}.


### Configurer vos interfaces réseau

Pour configurer les interfaces réseau entre l'instance Public Cloud nouvellement créée et votre serveur dédié, vous pouvez vous référer directement au guide sur notre guide intitulé « [Configurer plusieurs serveurs dédiés dans le vRack](../configurer-plusieurs-serveurs-dedies-dans-le-vrack/){.external} ».


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
