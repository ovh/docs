---
title: "Comprendre l'interface vScope"
excerpt: "Découvrez comment utiliser l'interface vScope pour surveiller votre infrastructure"
updated: 2025-10-01
---

## Objectif

OVHcloud met à votre disposition un outil de **supervision** et de **monitoring** de vos machines virtuelles et de votre infrastructure : **vScope**.

Cette interface web rassemble toutes les informations essentielles sur vos ressources.

**Ce guide explique comment lire et utiliser l'interface vScope.**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](/links/hosted-private-cloud/vmware), afin de recevoir des identifiants de connexion.
- Disposer d’un identifiant utilisateur actif (créé dans l’[espace client OVHcloud](/links/manager)).

## En pratique

### Accéder à vScope

1. Dans l’[espace client OVHcloud](/links/manager), cliquez sur `Hosted Private Cloud`{.action}.

2. Dans le menu de gauche, sélectionnez `Managed VMware vSphere`{.action}.

3. Choisissez votre service PCC.

4. Dans l’onglet `Informations générales`{.action}, descendez puis cliquez sur le lien `vScope`{.action}.

![vScope](images/gatewayPCC.png){.thumbnail}

L’interface s’ouvre dans un nouvel onglet de votre navigateur.

![vScope](images/vScope12.png){.thumbnail}

Identifiez-vous avec votre **utilisateur** et votre **mot de passe**, les mêmes que ceux utilisés pour vous connecter au client vSphere.

![vScope](images/vScope11.png){.thumbnail}

Vous êtes désormais connecté à **vScope**. Cette page centralise les informations clés de vos ressources.

Par exemple, pour chaque hôte, vous visualisez immédiatement :
- le nombre de cœurs et de VM
- la charge CPU et RAM
- le trafic réseau

![vScope](images/vScope.png){.thumbnail}

### Navigation dans vScope

#### Choix du datacenter

Si votre Hosted Private Cloud contient plusieurs datacenters, sélectionnez celui que vous souhaitez afficher dans le menu déroulant.

Le champ **Last refresh** correspond au dernier rafraîchissement de la page web (et non du vScope). Les données vScope sont mises à jour automatiquement toutes les 2 à 5 minutes.

![vScope](images/vScope1.png){.thumbnail}

#### Menu Filer

Le menu **Filer** indique l’utilisation de vos datastores : nombre de machines virtuelles et espace consommé.

Utilisez cette vue pour anticiper un besoin d’extension ou surveiller l’équilibre de charge.

![vScope](images/vScope2.png){.thumbnail}

### Menu Hosts

Le menu **Hosts** détaille les caractéristiques de chaque hôte dans votre datacenter :

- nombre de cœurs, vCPUs et VM
- pourcentage d’utilisation CPU et RAM
- connectivité réseau
- nombre de cartes réseau physiques (VMNic)

![vScope](images/vScope4.png){.thumbnail}

### Menu Machines virtuelles

Cette section fournit une vue détaillée de chaque machine virtuelle :

- État des VMware Tools
- Trafic réseau
- Taille de la VM
- Activation de FT (Fault Tolerance)
- CPU Ready Time
- Disk IO
- Disk Latency

![vScope](images/vScope6.png){.thumbnail}

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
