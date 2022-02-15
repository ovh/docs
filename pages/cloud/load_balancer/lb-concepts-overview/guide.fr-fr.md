---
title: Présentation des concepts
slug: presentation-concepts
universe: cloud
excerpt: Présentation des concepts nécessaires à la compréhension du service OVHcloud Load Balancer
section: Concepts
---
**Dernière mise à jour le 14/02/2022**

 ## Qu’est-ce que le load balancing ? 
 
Le load balancing, ou répartition de charge, est une technologie conçue pour distribuer la charge de travail entre différents serveurs ou applications. Le but : optimiser la performance globale de l’infrastructure, son rendement et sa capacité.

## Avantages et importance du load balancer 

Le principal avantage d’un load balancer est de réduire le temps de réponse d’un site suite aux requêtes des utilisateurs. En effet, optimiser la charge de travail des serveurs limite les risques de pannes liés à une surcharge. Si une machine devient indisponible, les utilisateurs seront redirigés vers un autre serveur et auront toujours accès aux pages. Vous leur assurez donc une expérience optimale, grâce à une qualité de service constante : hébergement flexible, haute disponibilité, évolutivité, etc. De plus, OVHcloud ne limite ni votre bande passante ni votre trafic mensuel.

Le load balancer reste particulièrement adapté au e-commerce, où des fluctuations de trafic importantes peuvent entraîner des surcharges. Il vous permet de maintenir des fonctionnalités homogènes sur vos sites, d’entretenir votre image en ligne, ainsi que de rassurer vos clients. Concrètement, il n’y aura pas de paniers perdus ou d’opérations de paiement interrompues.

## Composants

### Frontend

Le frontend définit le type de protocole (HTTP/TCP/UDP) du service OVH Load Balancer. C'est également la partie qui expose le port d'écoute du service.

### Farm 

La ferme reçoit le trafic provenant du front end, c'est la partie qui s'occupe de faire la répartition de charge.

### Server

Ce sont les serveurs qui reçoivent le trafic final et qui répondent via l'application.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
