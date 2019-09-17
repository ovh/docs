---
title: 'Principes d'architectures'
slug: principes-architectures
excerpt: 'Principes d'architectures'
section: 'Principes d'architectures'
---

**Dernière mise à jour le 17/09/2010**

# Préambule

OVH gère au quotidien des centaines de base de données pour ses besoins internes. Les données stockées assurant le bon fonctionnement de l'entreprise, il était impératif que la solution technique choisie soit la plus résiliente possible.

C'est pour ces raisons qu'OVH a fait évoluer pendant plusieurs années son architecture technique pour les bases de données afin de parer à tous les scenarios, et assurer ainsi une consistance et une disponibilité sans faille des informations.

Aujourd'hui, fort de son exploitation quotidienne pour ses besoins internes, OVH met en œuvre son expertise avec autant de rigueur la même architecture technique pour son offre publique, afin de protéger au mieux vos données.


# Que contient l'offre ?

## un service 100% manage
Nous surveillons nos services 24/7. Nous faisons les maintenances logicielles et matérielles et effectuons les sauvegardes journalières de vos données

## De la haute disponibilité par défaut
Votre charge de travail est critique. Notre architecture est hautement disponible par défaut, avec un fail-over automatique en quelques secondes. Nous fournissons un SLA de 99.99%

## Une croissance horizontale possible
Vos besoins de performance sur votre base de données peuvent augmenter avec vos besoins. Vous pouvez ajouter jusqu’à huit nœuds supplémentaires au sein de votre cluster pour une croissance horizontale et ainsi améliorer vos performances en lectures

## Hardware dédié
OVH met à votre disposition une puissance de calcul ainsi que du stockage dédiés, garantissant des performances CPU et IOPS constantes

## Des produits "purs"
Nous ne proposons que des produits open-sources, supportés par la communauté et sans modification par un éditeur tiers

## Des prix simples
Le prix final inclut tout le trafic réseau, le stockage ainsi que les sauvegardes journalières ou les métriques. Tout est inclut !


# Schéma d'architecture
Pour rendre votre service de base de données hautement disponible et résilient à la défaillance d'un nœud, plusieurs briques sont mises en œuvre.

"<schema ici>"


# Description d'un cluster

## Chaîne de connexion
 - une adresse publique, pouvant être résolue sur Internet
 - deux ports de connexions vous seront proposés (un pour les lectures/écritures, un pour les lectures)

## Réparatieur de charge (load-balancing)
Basé sur des appliances répliquées, les répartiteurs des charges repartissent le trafic sur les nœuds "primaire" et "répliquas"

## nœud primaire
Basé sur un seul nœud dédié, il accepte les opérations de lectures/écritures. Ce nœud peut également supporter les opérations de lectures seules

## Nœud(s) secondaire(s)
Basé sur n nœud dédié, les nœuds secondaires n'acceptent que les opérations de lectures. Il vous fournissent une croissance horizontale. Par défaut, le cluster ne comporte qu'un seul nœud secondaire

## Nœud de sauvegarde
Basé sur un nœud dédié, le nœud de sauvegarde n'accepte AUCUNE connexion cliente. Ce nœud fait parti de la réplication afin de pouvoir réaliser des sauvegardes consistantes sans dégrader les performances globales du cluster. Les sauvegardes sont ainsi réalisées sur un nœud qui n'est pas en production

## Stockage des nœuds
Basé sur des disques internes redondés (raid 10) et choisis pour leur performance, ils assurent le stockage de vos données opérationnelles.

## Stockage des sauvegardes
Basés sur une infrastructure redondée de serveurs de stockage OVH, ils conservent de manière déportée les sauvegardes des nœuds

## Réplication et fail-over de base de données
OVH utilise (et contribue !) Patroni, un programme en Python utilisé pour gérer la configuration de PostgreSQL.
Cette couche logicielle prend en charge la réplication et la bascule des rôles au sein du cluster.
Le quorum de haute disponibilité du cluster est assuré par une instance Zookeeper installée sur chaque serveur.

*A noter que chaque nœud (sauf celui de dédié à la sauvegarde) peut devenir "primaire" pendant la vie du cluster.*
