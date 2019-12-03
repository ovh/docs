---
title: 'Ajouter et supprimer un nœud à votre cluster'
slug: ajouter-supprimer-noeud
excerpt: 'Apprenez comment ajouter ou supprimer un nœud à votre cluster'
section: 'Démarrer avec votre cluster PostgreSQL'
---

## Architecture d'un cluster

Cette offre se compose par défaut de 3 nœuds, assurant le bon fonctionnement de la haute disponibilité du service. Il s'agit du minimum nécessaire au fonctionnement du cluster.

## Croissance horizontale et résilience

Lorsque la charge de votre applicatif augmente, l'offre d'OVHcloud vous permet d'y faire face en vous donnant la possibilité d'ajouter (et de réduire dans un second temps) des nœuds en lecture seule à votre cluster.

Ajoutez de la puissance de calcul à votre cluster en fonction de vos besoins.

> [!primary]
>
> Nous recommandons de garder un nombre impair de nœuds à l’intérieur de votre cluster afin de respecter le quorum lié à la gestion de la haute disponibilité.
>

## Ajout d'un nœud

Vous pouvez ajouter un maximum de 8 nœuds supplémentaires, pour un total de 10 nœuds de lecture seule (réplicas) au sein du cluster.

Utilisez votre espace client pour ajouter une ou plusieurs ressources additionnelles. Cliquez sur `Cluster Nodes`{.action} puis `Actions`{.action} et `Add replica`{.action}.

Vous serez amenés à choisir le nombre de réplicas que vous souhaitez ajouter au travers d'une boîte de dialogue dédiée.

> [!primary]
> Le nouveau nœud s'inscrit dans le quorum de haute disponibilité et peut ainsi devenir primaire (et donc porter les écritures) au cours de la vie du cluster.
>

## Suppression d'un nœud

Utilisez l'interface de votre espace client pour supprimer un nœud ajouté.

Consultez la page `Cluster Nodes`{.action} puis cliquez sur le bouton `...`{.action} puis `remove`{.action} pour supprimer une ressource. 

Vous serez amenés à choisir le nombre de réplicas que vous souhaitez supprimer au travers d'une boîte de dialogue dédiée.

> [!primary]
> Aucun remboursement n'est applicable si vous supprimez un nœud avant la fin de votre période d'engagement.
>

> [!primary]
> Attention, la suppression d'un nœud peut entraîner une courte période d’indisponibilité si l'action provoque la promotion d'un nouveau nœud.
>
