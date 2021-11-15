---
title: Redimensionner une instance
slug: redimensionner-une-instance
legacy_guide_number: 1778
section: Gestion depuis Horizon
order: 8
---

**Dernière mise à jour le 12/11/2021**

## Objectif

En raison d'une activité accrue, ou simplement de nouveaux besoins, votre instance peut ne pas être en mesure de faire face à cette nouvelle charge par manque de ressources. Cependant, grâce au Public Cloud, vous pouvez augmenter les ressources dont votre instance dispose, et cela simplement en quelques clics.

**Ce guide vous indique la procédure à suivre afin de redimensionner votre instance depuis l'interface OpenStack Horizon.**


> [!alert]
>
> Seul le redimensionnement vers un modèle supérieur est possible pour les modèles classiques.
> De plus, cette manipulation entraine une coupure de l'instance le temps de l'opération.
> 

> [!success]
>
> Les instances de type **flex** permettent le redimensionnement vers les modèles suppérieurs ou inférieurs grâce à une taille de disque unique.
> 

## Prérequis

- Avoir [créer une instance Public Cloud](https://docs.ovh.com/fr/public-cloud/premiers-pas-instance-public-cloud/#etape-3-creer-une-instance) dans votre compte OVHcloud
- [Créer un accès à Horizon](../creer-un-acces-a-horizon/)


### En pratique

Connectez-vous à l'[interface Horizon](https://horizon.cloud.ovh.net/auth/login/) et assurez-vous d'être dans la bonne région. Vous pouvez le vérifier en haut à gauche dans l’interface Horizon.</br>
Cliquez sur le menu `Compute`{.action} à gauche puis sélectionnez `Instances`{.action}. Sélectionnez `Resize Instance`{.action} dans la liste déroulante de l'instance correspondante.


![Resize instance](images/resizeinstance2021.png){.thumbnail}


#### Choix du gabarit (*Flavor Choice*)

Cette section indique le gabarit actuel (*old flavor*) et vous permet de sélectionner un nouveau gabarit (*new flavor*) pour la ressource de l'instance.

![public-cloud](images/flavorchoice.png){.thumbnail}


##### **Limites de Projet (*Project Limits*)**

Il est aussi possible de visionner les ressources prises sur les ressources totales allouées au projet.


> [!warning]
> Veuillez noter que vous pouvez uniquement redimensionner une instance d'un modèle Linux à un autre modèle Linux et d'un modèle Windows à un autre modèle Windows.
>

#### Options avancées (*Advanced Options*)

Cette section permet de gérer le partitionnement du disque (*Disk Partition*) et le groupe  de serveurs (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Une fois la configuration terminée, cliquer sur `Resize`{.action}.


### Redimensionnement du disque sous Windows

Attention, lors d'un redimensionnement pour une Instance Windows, la taille de la partition n'est pas automatiquement mise a jour, il faudra donc étendre celle ci en utilisant le  **Gestionnaire de disque**  :

- Faire un clic droit sur le menu Démarrer et lancer le gestionnaire de disque en cliquant sur `Gestion du disque`{.action} :


![public-cloud](images/2980.png){.thumbnail}

- Faire un clic droit sur la partition principale, puis cliquez sur `Étendre la partition`{.action}.


![public-cloud](images/2981a.png){.thumbnail}

- Cliquez sur `Suivant`{.action} pour accéder à `l'Assitant Extension du volume`. Choisissez les ressources et cliquez sur `Suivant`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

Cliquez ensuite sur `Terminer`{.action} pour valider votre choix.

![public-cloud](images/wizard2021.png){.thumbnail}

- Une fois que c'est fait, la nouvelle taille du disque sera affichée dans le gestionnaire de disque.


![public-cloud](images/2979.png){.thumbnail}

Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>