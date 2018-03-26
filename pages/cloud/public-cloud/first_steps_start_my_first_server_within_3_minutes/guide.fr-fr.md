---
title: Démarrer un premier serveur cloud en moins de 3 minutes
slug: demarrer-un-premier-serveur-cloud-en-3-min
description: Premiers pas pour demarrer une instance depuis l’interface web OVH
keywords: instance, interface, wizard, serveur cloud
excerpt: Documentation pas a pas traitant de la creation de votre premier serveur cloud.
section: Premiers pas
---


## Preambule
Le Public Cloud vous permet à tout moment de créer rapidement et facilement des serveurs virtuels (instances) en seulement quelques clics. Ce guide vous explique la procédure à suivre afin de créer une instance.


### Prérequis
- Se connecter à [l'espace client OVH](https://www.ovh.com/manager/cloud/){.external}
- Avoir [créé](../guide.fr-fr.md){.ref} et configuré une clé SSH sur votre Espace Client Public Cloud OVH


## Création de l'instance

### Ajout du serveur
Cliquer sur le bouton `Ajouter`{.action} en haut a gauche


![public-cloud](images/2707.png){.thumbnail}

Choisir `Ajouter un serveur`{.action}


![public-cloud](images/2708.png){.thumbnail}


### Choisir les caracteristiques du serveur
En cliquant sur le modèle, un nouveau menu apparaitra.

Sélectionner par exemple le modèle SP-30-SSD.


![public-cloud](images/2709.png){.thumbnail}

Vous pourrez ensuite choisir le type de votre instance :

- La gamme **VPS-SSD** propose des instances à coût réduit pour des besoins limités
- La gamme **HG** est orientée performance CPU et propose des instances avec beaucoup de cœurs à des fréquences élevées
- La gamme **SP** est orientée performance RAM et propose des instances avec beaucoup de mémoire
- La gamme **EG** propose un équilibre CPU/RAM pour la plupart des usages


### Choisir le systeme d'exploitation
En cliquant sur la distribution, un nouveau menu apparaitra vous donnant le choix entre plusieurs grandes familles de systèmes d'exploitation comme les systèmes Unix et les systèmes Windows proposés par OVH ou vos propres images pré-enregistrées.

Sélectionner par exemple Ubuntu 16.04.


![public-cloud](images/2710.png){.thumbnail}


### Choisir la region du data center
En cliquant sur le modèle, un nouveau menu apparaitra :

Sélectionner par exemple Strasbourg.


![public-cloud](images/2711.png){.thumbnail}



> [!primary]
>
> OVH ajoute régulièrement des régions dans son offre cloud.
> 


### Selectionner la cle SSH a utiliser
Cliquer sur l'entrée de menu avec l'icône représentant une clé.


![public-cloud](images/2713.png){.thumbnail}

Puis sélectionner la clé souhaitée.


![public-cloud](images/2712.png){.thumbnail}



> [!success]
>
> Lors de la création d'une instance Windows, il n'est pas nécessaire de
> configurer une clé SSH.
> 


### Nommer l'instance et la demarrer
Nommer l'instance en cliquant sur l'icône crayon (1) et choisir la facturation à l'heure ou au mois (2).


![public-cloud](images/2714.png){.thumbnail}



> [!alert]
>
> Lors de la création d'une instance avec facturation au mois, vous vous
> engagez à payer celle-ci au minimum jusqu'à la fin du mois en cours.
> 

Cliquez sur `Lancer maintenant`{.action} (3).

La nouvelle instance sera disponible et accessible en quelques minutes, le temps du transfert de l'image système et du démarrage du système d'exploitation (généralement inférieur à 2 minutes).