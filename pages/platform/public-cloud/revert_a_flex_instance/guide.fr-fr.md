---
title : "Basculer d'une instance flex à une instance classique"
slug : modifier-une-instance-flex
excerpt: Apprenez à modifier une instance flex depuis l'interface OpenStack Horizon
section : Gestion depuis Horizon
order : 10
---

**Dernière mise à jour le 15 Novembre 2021**

## Objectif

Une instance *flex* est une instance à disque unique (50 Go) offrant un processus plus rapide pour les snapshots. Elle permet un redimensionnement vers les modèles supérieurs ou inférieurs avec un espace de stockage fixe, alors que les modèles classiques ne peuvent être redimensionnés que vers les modèles supérieurs.</br> Avec une infrastructure en constante évolution, vous pouvez avoir besoin d'augmenter l'espace de stockage de votre instance. Dans ce cas, vous devrez basculer votre instance *flex* vers un modèle classique. Cette action est possible uniquement depuis l'interface Horizon.

<br>**Ce guide vous explique comment basculer d'un modèle *flex* à un modèle classique et redimensionner votre instance *flex* depuis l'interface OpenStack Horizon.**

## Prérequis

- Posséder une [instance Public Cloud OVHcloud](../premiers-pas-instance-public-cloud/#etape-3-creer-une-instance) de type *flex*.
- [Créer un accès à l'interface Horizon](https://docs.ovh.com/fr/public-cloud/horizon/)

## En pratique

Connectez-vous à l'[interface Horizon](https://horizon.cloud.ovh.net/auth/login/) et assurez-vous d'être dans la bonne région. Vous pouvez le vérifier en haut à gauche. 

![Sélection de région](images/region2021.png){.thumbnail}

Cliquez sur le menu `Compute`{.action} à gauche puis sur `Instances`{.action}. Sélectionnez `Resize instance`{.action} dans la liste déroulante de l'instance correspondante.

![Redimensionner instance](images/resizeinstance2021.png){.thumbnail}

**Choix de gabarit (*Flavor Choice*)** <a name="flavorchoice"></a>

Cette section indique le gabarit actuel (*old flavor*) et vous permet de sélectionner un nouveau gabarit (*new flavor*) pour la ressource de l’instance.

Dans notre exemple, notre gabarit est « b2-15-flex ». Nous pouvons soit revenir à un gabarit classique « b2-15 » ou mettre à niveau l'instance vers le gabarit « b2-30 » pour avoir plus d'espace de stockage. Dans notre cas, nous souhaitons mettre à niveau notre instance vers le modèle classique « b2-30 » pour augmenter notre espace de stockage.

![Choisir une nouvelle flavor](images/confirmflavor.png){.thumbnail}

> [!warning]
> - Vous pouvez uniquement passer d'un modèle Linux à un autre modèle Linux et d'un modèle Windows à un autre modèle Windows.
>
> - L'option flexible n'est pas disponible pour tous les modèles.
>

**Options avancées (*Advanced Options*)**

Cette section permet de gérer le partitionnement du disque (*Disk Partition*) et le groupe de serveurs (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Pour continuer, cliquez sur le bouton `Resize`{.action}.

Une fois le processus terminé, votre instance sera basculée vers un modèle classique, avec plus d'espace de stockage.

![Nouvelle flavor appliquée](images/newflavor.png){.thumbnail}

Dans le cas où vous souhaitez rebasculer à un modèle *flex*, vous pouvez le faire en effectuant les mêmes étapes mentionnées [ci-dessus](#flavorchoice) en sélectionnant un gabarit *flex* au lieu d'un gabarit classique. 

Vous pouvez également [modifier la configuration de l'instance](https://docs.ovh.com/fr/public-cloud/debuter-avec-une-instance-public-cloud/#modifier-la-configuration-dune-instance) depuis votre espace client.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.