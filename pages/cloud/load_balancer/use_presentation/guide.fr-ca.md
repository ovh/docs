---
title: Présentation de l'OVHcloud Load Balancer
slug: iplb-presentation
excerpt: Découvrez la nouvelle offre OVHcloud Load Balancer
section: Premiers pas
order: 1
---

**Dernière mise à jour le 01/12/2017**

## Objectif

La nouvelle offre [OVHcloud Load Balancer](https://www.ovh.com/ca/fr/solutions/load-balancer/){.external} est un répartiteur de charge (load balancer) qui allie souplesse de configuration et fiabilité. Vous n'avez qu'à configurer vos produits avec l'OVHcloud Load Balancer et nous nous occupons du reste !

**Découvrez vite la nouvelle offre OVHcloud Load Balancer.**

## Prérequis

- Pas de prérequis spécifique.


## En pratique

 
Cette nouvelle offre est basée sur de robustes solutions open source : Haproxy pour les flux TCP et Nginx pour les flux UDP.

Plus de limitations ! La nouvelle offre [OVHcloud Load Balancer](https://www.ovh.com/ca/fr/solutions/load-balancer/){.external} peut être utilisée pour fonctionner avec différents protocoles :

|Type|Description|Avantages|Technologie|
|---|---|---|---|
|HTTP|Tout type de services web HTTP/HTTPS|Optimisé pour du traitement L7 (applicatif)|Haproxy|
|TCP|Pour tout service réseau qui n'est pas HTTP|Peut supporter toutes les applications TCP|Haproxy|
|UDP|Pour tout type de flux UDP|Peut supporter toutes les applications UDP|Nginx|

Ce qui est inclus avec ce nouveau service :

- une protection Anti-DDoS OVHcloud ;
 - un support de zones multiples (Anycast) ;
 - un support HTTP/HTTPS avancé (redirections, headers, ACL...) ;
 - un service compatible avec une IP Fail-over ;
 - le vRack est supporté ;
 - la redondance : votre Load Balancer fonctionne sur des instances séparées, fonctionnant elles-mêmes sur des équipements séparés et redondants.

### Parties élémentaires

- La nouvelle offre OVHcloud Load Balancer se compose de trois parties élémentaires :

![Général](images/diag_gen.png){.thumbnail}

|Parties Élémentaires|Fonction|
|---|---|
|Frontend|Le front end définit le type de protocole (HTTP/TCP/UDP) du service OVHcloud Load Balancer. C'est également la partie qui expose le port d'écoute du service|
|Farm|La ferme reçoit le trafic provenant du front end, c'est la partie qui s'occupe de faire la répartition de charge|
|Server|Ce sont les serveurs qui reçoivent le trafic final et qui répondent via l'application|

Avec ces trois parties élémentaires qui composent le Load Balancer, il est possible de configurer à peu près tous les types de load-balancing possibles.


### Pourquoi utiliser l'OVHcloud Load Balancer ?

#### Répartir la charge

C'est la fonction élémentaire d'un répartiteur de charge, mais l'OVHcloud Load Balancer OVHcloud est capable de bien plus.

![Distribute load](images/distribute_load.png){.thumbnail}

#### Supprimer le downtime

Le service OVHcloud Load Balancer est capable de détecter automatiquement l'absence de réponse d'un serveur. Dans ce cas de figure, il redirige le trafic à destination de ce serveur vers un autre, si c'est possible. Cela permet de résoudre le problème sans affecter votre production.

![Eliminate downtimes](images/eliminate_downtimes.png){.thumbnail}

#### Faire évoluer facilement votre infrastructure

Il est possible d'ajouter ou retirer une ferme, un front end ou un serveur du service OVHcloud Load Balancer sans interruption de service.

![Scale your infra easily](images/facilitate_maintenance.png){.thumbnail}


#### Faciliter les maintenances

En cas de maintenance planifiée sur votre infrastructure, il est désormais facilement possible de placer une ferme en downtime pour qu'elle cesse préventivement de recevoir du trafic. Dans ce cas, il est facile d'intervenir et d'y rajouter votre serveur une fois la maintenance terminée.

![Facilitates maintenance](images/scale_easily.png){.thumbnail}


#### Varier les services

Vous pouvez désormais mixer différents services d'OVHcloud dans le Load Balancer, comme par exemple :

- les instances Public Cloud avec IP fail-over ;
- les VPS avec IP fail-over ;
- les serveurs dédiés avec IP fail-over ;
- les vRack.

![Mix and match service](images/mix_and_match.png){.thumbnail}

#### Anycast

Vous pouvez répartir votre charge sur différentes zones géographiques :

![Anycast](images/anycast.png){.thumbnail}


#### Répartir n'importe quel type de trafic

L'OVHcloud Load Balancer n'est plus limité au trafic HTTP ! Vous pouvez maintenant l'utiliser avec toutes sortes de trafics TCP ou UDP.


#### Serveur e-mail

Répartissez la charge entre vos serveurs de messagerie :

![Mail](images/mail.png){.thumbnail}


#### Base de données

Équilibrez et redondez vos bases de données :

![Database](images/database.png){.thumbnail}


## Aller plus loin

[En apprendre plus sur la répartition de charge](https://fr.wikipedia.org/wiki/Repartition_de_charge){.external}.

[En apprendre plus sur Haproxy](http://www.haproxy.org/#desc){.external}.

[En apprendre plus sur Nginx](https://fr.wikipedia.org/wiki/Nginx){.external}.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com>.
