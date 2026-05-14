---
title: "Redimensionner une instance via l'espace client OVHcloud"
excerpt: "Découvrez comment redimensionner une instance Public Cloud depuis l'espace client OVHcloud"
updated: 2026-03-04
---

## Objectif

Si votre instance manque de ressources en raison d'une activité accrue ou de nouveaux besoins, vous pouvez augmenter ses ressources en quelques clics grâce au Public Cloud.

**Ce guide vous explique comment redimensionner votre instance depuis l'espace client OVHcloud.**

> [!warning]
>
> Seul le redimensionnement vers un modèle supérieur est possible pour les modèles classiques.
> De plus, cette manipulation entraîne une coupure de l'instance le temps de l'opération.
> 

> [!success]
>
> Les instances de type *flex* permettent le redimensionnement vers les modèles supérieurs ou inférieurs grâce à une taille de disque unique.
> 

## Prérequis

- Avoir [créé une instance Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Projets Public Cloud](/links/control-panel/publiccloud-projects)
- **Pour accéder à vos services :** `Public Cloud`{.action} > Sélectionnez votre projet

---
<!-- CP-NAV-END:publiccloud-projects -->

## En pratique

Cliquez sur `Instances`{.action} dans le menu de gauche.

Cliquez ensuite sur `...`{.action} à droite de l’instance, puis sélectionnez `Editer`{.action}. Vous pouvez également accéder à cette action depuis les détails de l’instance en cliquant sur son nom, puis sur `Modifier le modèle`{.action}.

Dans le nouvel onglet, faites défiler la page jusqu'à la section **Modèle** pour sélectionner le modèle de votre choix.

> [!primary]
>
> Pour les modèles classiques, vous pouvez basculer vers n'importe quel modèle dont le disque est similaire ou plus grand. Vous ne pouvez pas passer à un modèle avec un disque plus petit.<br/>
>
> Seules **les instances flexibles** peuvent être basculées vers un modèle supérieur ou inférieur tout en conservant une taille de disque fixe de 50 Go.
>

Si votre disque est égal ou inférieur à 50 Go, vous pouvez passer à une `Instance flexible`{.action} si vous le souhaitez.

> [!warning]
> Si vous éditez une instance *flex*, il n’est pas possible de revenir à une instance classique via l’espace client. Pour plus d’informations, consultez notre guide sur [Basculer d’une instance flex à une instance classique](/pages/public_cloud/compute/revert_a_flex_instance).
>

Une fois la sélection effectuée, cliquez sur `Modifier le modèle`{.action} pour confirmer votre choix.

### Redimensionnement du disque sous Windows

Attention, lors d'un redimensionnement pour une instance Windows, la taille de la partition n'est pas automatiquement mise à jour, vous devrez donc l'étendre via le **gestionnaire de disque** :

- Faites un clic droit sur le menu `Démarrer`{.action} et lancez le gestionnaire de disque en cliquant sur `Gestion du disque`{.action} :

![Menu contextuel du menu Démarrer avec l'option Gestion du disque](images/2980.png){.thumbnail}

- Faites un clic droit sur la partition principale, puis cliquez sur `Étendre le volume`{.action}.

![Clic droit sur la partition principale pour étendre le volume](images/2981a.png){.thumbnail}

- Cliquez sur `Suivant`{.action} pour accéder à « l'Assistant Extension du volume ». Choisissez les ressources du disque à étendre et cliquez sur `Suivant`{.action}. 

![Assistant Extension du volume avec sélection des ressources](images/2978a.png){.thumbnail}

Cliquez ensuite sur `Terminer`{.action} pour valider votre choix.

![Étape de finalisation de l'Assistant Extension du volume](images/wizard2021.png){.thumbnail}

- La nouvelle taille du disque sera alors affichée dans le gestionnaire de disque.

![Gestionnaire de disque affichant la nouvelle taille](images/2979.png){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).