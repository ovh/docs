---
title: "Redimensionner une instance via l'espace client OVHcloud"
excerpt: "Découvrez comment redimensionner une instance depuis l'espace client OVHcloud"
updated: 2022-08-24
---

## Objectif

En raison d'une activité accrue, ou simplement de nouveaux besoins, votre instance peut ne pas être en mesure de faire face à une nouvelle charge, par manque de ressources. Cependant, grâce au Public Cloud, vous pouvez augmenter les ressources dont votre instance dispose, et cela simplement en quelques clics.

**Ce guide vous indique la procédure à suivre afin de redimensionner votre instance depuis l'espace client OVHcloud.**

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

- Avoir [créé une instance Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

Connectez-vous à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), accédez à la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Cliquez ensuite sur `Instances`{.action} dans le menu de gauche. 

Cliquez ensuite sur `...`{.action} à droite de l'instance et sélectionnez `Editer`{.action}.

![public-cloud](images/editinstance.png){.thumbnail}

Dans le nouvel onglet, faites défiler la page jusqu'à la section **Modèle** pour sélectionner le modèle de votre choix.

![public-cloud](images/template.png){.thumbnail}

> [!primary]
>
> Pour les modèles classiques, vous pouvez basculer vers n'importe quel modèle dont le disque est similaire ou plus grand. Vous ne pouvez pas passer à un modèle avec un disque plus petit.<br/>
>
> Seules **les instances flexibles** peuvent être basculées vers un modèle supérieur ou inférieur tout en conservant une taille de disque fixe de 50 Go.
>

Si votre disque est égal ou inférieur à 50 Go, vous pouvez passer à une `Instance flexible`{.action} si vous le souhaitez.

> [!warning]
> Attention, dans le cas où vous éditez une instance de type *flex*, il n'est pas possible de basculer vers une instance classique via l'espace client. Pour plus d'informations, veuillez consultez notre guide sur [Basculer d’une instance flex à une instance classique](/pages/public_cloud/compute/revert_a_flex_instance).
>

Une fois la sélection effectuée, cliquez sur `Modifier le modèle`{.action} pour confirmer votre choix.

### Redimensionnement du disque sous Windows

Attention, lors d'un redimensionnement pour une instance Windows, la taille de la partition n'est pas automatiquement mise à jour, il faudra donc étendre celle ci en utilisant le  **gestionnaire de disque** :

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

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.