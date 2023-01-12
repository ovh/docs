---
title: Redimensionner une instance
slug: redimensionner-une-instance
excerpt: "Découvrez comment redimensionner une instance depuis l'interface Horizon"
legacy_guide_number: 1778
section: Gestion depuis Horizon
order: 13
---

**Dernière mise à jour le 17/11/2021**

## Objectif

En raison d'une activité accrue, ou simplement de nouveaux besoins, votre instance peut ne pas être en mesure de faire face à une nouvelle charge, par manque de ressources. Cependant, grâce au Public Cloud, vous pouvez augmenter les ressources dont votre instance dispose, et cela simplement en quelques clics.

**Ce guide vous indique la procédure à suivre afin de redimensionner votre instance depuis l'interface OpenStack Horizon.**

> [!warning]
>
> Seul le redimensionnement vers un modèle supérieur est possible pour les modèles classiques.
> De plus, cette manipulation entraine une coupure de l'instance le temps de l'opération.
> 

> [!success]
>
> Les instances de type *flex* permettent le redimensionnement vers les modèles supérieurs ou inférieurs grâce à une taille de disque unique.
> 

## Prérequis

- Avoir [créé une instance Public Cloud](https://docs.ovh.com/ca/fr/public-cloud/premiers-pas-instance-public-cloud/#etape-3-creer-une-instance) dans votre compte OVHcloud
- [Accéder à l'interface Horizon](../horizon/)

## En pratique

Connectez-vous à l'[interface Horizon](https://horizon.cloud.ovh.net/auth/login/) et assurez-vous d'être dans la bonne région. Vous pouvez le vérifier en haut à gauche de l’interface.</br>
Cliquez sur le menu `Compute`{.action} à gauche puis sélectionnez `Instances`{.action}. Sélectionnez `Resize Instance`{.action} dans le menu déroulant à droite de l'instance concernée.

![Resize instance](images/resizeinstance2021.png){.thumbnail}

### Choix du gabarit (*Flavor Choice*)

Cette section indique le gabarit actuel (*old flavor*) et vous permet de sélectionner un nouveau gabarit (*new flavor*) pour la ressource de l'instance.

![public-cloud](images/flavorchoice.png){.thumbnail}

#### Détails de gabarit (*Flavor Details*)

Dans cette section s'affichent les ressources associées au gabarit choisi. 

#### Limites de Projet (*Project Limits*)

Visionnez ici les ressources occupées par rapport aux ressources totales allouées au projet.

> [!warning]
> Veuillez noter que vous pouvez uniquement redimensionner une instance d'un modèle Linux à un autre modèle Linux et d'un modèle Windows à un autre modèle Windows.
>

### Options avancées (*Advanced Options*)

Cette section permet de gérer le partitionnement du disque (*Disk Partition*) et le groupe  de serveurs (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Une fois la configuration terminée, cliquez sur `Resize`{.action}.

### Redimensionnement du disque sous Windows

Attention, lors d'un redimensionnement pour une Instance Windows, la taille de la partition n'est pas automatiquement mise à jour, il faudra donc étendre celle ci en utilisant le  **gestionnaire de disque**  :

- Faites un clic droit sur le menu `Démarrer`{.action} et lancez le gestionnaire de disque en cliquant sur `Gestion du disque`{.action} :

![public-cloud](images/2980.png){.thumbnail}

- Faites un clic droit sur la partition principale, puis cliquez sur `Étendre le volume`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

- Cliquez sur `Suivant`{.action} pour accéder à « l'Assitant Extension du volume ». Choisissez les ressources du disque à étendre et cliquez sur `Suivant`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

Cliquez ensuite sur `Terminer`{.action} pour valider votre choix.

![public-cloud](images/wizard2021.png){.thumbnail}

- La nouvelle taille du disque sera alors affichée dans le gestionnaire de disque.

![public-cloud](images/2979.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>