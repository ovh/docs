---
title: 'Ajouter et supprimer un nœud à votre cluster'
slug: ajouter-supprimer-noeud
excerpt: 'Apprenez comment ajouter ou supprimer un nœud à votre cluster'
section: 'Démarrer avec votre cluster PostgreSQL'
---

**Dernière mise à jour le 20/12/2019**

## Objectif
Les offres Enterprise Cloud Databases proposent des instances de bases de données composées de plusieurs nœuds physiques.
Composé au minimum de 3 nœuds, chaque cluster sait assurer une mise à l'échelle horizontale, pour gagner en performance et en résilience.
Ce guide vous explique comment ajouter et supprimer des nœuds supplémentaires sur votre cluster.


## Pré-requis
- Disposer d'un cluster Enterprise Cloud Databases.
- Disposer d'un accès à l'espace client ou à l'API avec des droits suffisants (administrateur ou technique).


## En pratique

### Étape 1 : comprendre les bénéfices d'une mise à l'échelle
Lorsque la charge de votre applicatif augmente, votre base de données est souvent davantage sollicitée en lecture et en écriture. Plus d'informations à traiter, toujours aussi rapidement. Enterprise Cloud Databases vous permet de répartir ces requêtes de lecture sur plusieurs nœuds.

Chaque nœud supplémentaire vous permet d'augmenter votre capacité à accepter des requêtes en lecture, et améliore également la résilience de votre cluster.

Ajoutez ou supprimez de la puissance de calcul à votre cluster en fonction de vos besoins.

> [!primary]
>
> Nous recommandons de garder un nombre impair de nœuds à l’intérieur de votre cluster afin de respecter le quorum lié à la gestion de la haute disponibilité.
>


### Étape 2 : ajout d'un nœud
Vous pouvez ajouter un maximum de 8 nœuds supplémentaires, pour un total de 10 nœuds de lecture seule (réplicas) au sein du cluster.

Utilisez votre espace client pour ajouter une ou plusieurs ressources additionnelles. Cliquez sur `Nœuds du cluster`{.action} puis `Actions`{.action} et `Ajouter un réplica`{.action}.

Vous serez amenés à choisir le nombre de réplicas que vous souhaitez ajouter au travers d'une boîte de dialogue dédiée.

> [!primary]
> Le nouveau nœud s'inscrit dans le quorum de haute disponibilité et peut ainsi devenir primaire (et donc porter les écritures) au cours de la vie du cluster.
>


## Étape 3 : suppression d'un nœud
Utilisez l'interface de votre espace client pour supprimer un nœud ajouté.

Consultez la page `Nœuds du cluster`{.action} puis cliquez sur le bouton `...`{.action} puis `supprimer`{.action} pour supprimer une ressource. 

Vous serez amené à choisir le nombre de réplicas que vous souhaitez supprimer au travers d'une boîte de dialogue dédiée.

> [!primary]
> Aucun remboursement n'est applicable si vous supprimez un nœud avant la fin de votre période d'engagement.
>

> [!primary]
> Attention, la suppression d'un nœud peut entraîner une courte période d’indisponibilité si l'action provoque la promotion d'un nouveau nœud.
>

## Aller plus loin

Apprenez à gérer votre cluster PostgreSQL en consultant la [documentation technique d'OVHcloud](../enterprise-cloud-databases/){.external} pour davantage d'informations sur le fonctionnement technique de votre offre managée.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
