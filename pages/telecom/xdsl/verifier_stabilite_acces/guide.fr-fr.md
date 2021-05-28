---
title: "Vérifier la stabilité de son accès OVHCloud"
slug: connectivity-api
excerpt: 'Découvrez comment vérifier la stabilité de votre accès OVHCloud via les API'
section: 'Configurations techniques avancées'
order: 5
---

**Dernière mise à jour le 28/05/2021**

## Objectif

Cette documentation a pour objectif de vous permettre de vérifier la stabilité de votre accès via les logs Radius disponible par API en complément de la réponse au ping de votre lien.

Ce guide n'a pas vocation à expliquer le fonctionnement d'une connexion PPPoE mais d'utiliser les logs pour déduire de la stabilité d'un lien.

## Prérequis

- Disposer d'un abonnement xDSL ou FTTH OVHCloud actif.
- Être sur la page web des [API OVHcloud](https://api.ovh.com/){.external}.
- Consulter le guide [Premiers pas avec les API OVHcloud](../../api/api-premiers-pas/) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.


## En pratique


Lors de la connexion de votre routeur sur les équipements OVHCloud, une trace est systématiquement laissé à notre niveau sur les logs de l’équipement nommé radius. 

Suite à cela chaque reconnexion du lien, laisse une nouvelle trace horodatée de la connexion. Tout cela permet de vérifier la date de la dernière connexion et la fréquence à laquelle votre équipement se connecte chez nous. Une coupure électrique entraînerai donc une reconnexion de votre routeur dans les minutes qui suivent par exemple.

L’API permettant de récupérer ces informations est disponible ici : 

https://api.ovh.com/console/#/xdsl/%7BserviceName%7D/radiusConnectionLogs#GET

Il est en revanche important de noter que seules les reconnexions sont indiquées, une déconnexion serait alors supposée si l'accès (répondant au ping en temps normal, n'y réponds plus).

#### Aperçu

![api_radiuslogs](images/api_radiuslogs.png){.thumbnail}

Le champ servicename correspond à la référence de votre accès :

 - Pour un accès xdsl vous aurez cela sous la forme : xdsl-nichandle-x 

 - Pour un accès ftth : ftth-nichandle-x 

En utilisant le bouton execute : l'API répondra alors : 

![api_radex](images/api_radex2.png){.thumbnail}

Vous retrouvez dans l'encadré orange, l'information d'un log de reconnexion séparé en deux éléments :

- La date au format AAAA/MM/JJ et l'heure
- Message : lié à l'opérateur de collecte KOSC
- State : l'état de connexion, ici fonctionnel résultant dans le "OK". Il faut noter qu'un refus d'authenfication donnera "KO" avec un message "wrong login or password" le plus souvent.
- Login : rappel de votre identifiant PPPoE

La seconde partie dans l'encadré est l'effet mirroir sur les équipements OVHCloud qui finalise l'authenfiication. 

Il faudra donc bien noter qu'une connexion génère deux logs. Un maximum de 50 logs sont stockés, donc 25 reconnexions au total.


#### Déduire le temps de session de votre accès. 

Avec les logs de l'exemple précédent, nous pouvons en déduire que si mon accès répond toujours à une requête "ping" à ce jour et que la dernière reconnexion sur les équipements OVHCloud est datée du 22/05/2021, alors ma session PPPoE est montée depuis 6 jours environ.

Il n'y donc pas eu de coupure sur l'accès concerné car la moindre reconnexion suite un redémarrage de votre box par exemple, résultatera d'une reconnexion sur nos équipements. 

Notez bien en revanche que si l'accès n'est plus synchronisé, il ne pourra bien entendu plus s'authentifier chez nous.

Si mon accès en revanche remonte plus de cinq reconnexions sur une même tranche de 24h, qui ne seraient pas la conséquence d'une action sur votre box. Il peut être possible considérer l'accès comme instable. 

Vous pouvez par la suite faire le point sur votre desserte interne avec notre guide disponible à l'adresse suivante : https://docs.ovh.com/fr/xdsl/la-desserte-interne/


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
