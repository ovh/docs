---
title: 'Limites de débit des API Public Cloud'
excerpt: "Découvrez quelles sont les limites et restrictions pour l'API Public Cloud"
updated: 2023-06-23
---

## Qu'est-ce qu'une limite de débit ?

Une limite de débit est une restriction appliquée par l'API sur le nombre de demandes qu'un client peut faire à l'API sur une période donnée.

## Pourquoi imposer des limites ?

Les limites de débit sont une pratique courante pour les API. Elles sont mises en place pour diverses raisons :

- elles nous aident à protéger le backend de l'API contre les abus ou les mauvaises utilisations de l'API ;
- elles garantissent une meilleure qualité de service sur l'API grâce à un accès équitable à l'API.

Par exemple, un script défectueux ou mal optimisé pourrait essayer d'utiliser l'API de manière excessive, ce qui pourrait entraîner des problèmes de performances au niveau du backend de l'API. 

En fixant des limites de débit, nous nous assurons que l'API peut maintenir une expérience fluide et cohérente pour tous les clients.

## Quelles sont les limites de débit pour notre API ?

### Keystone (API d'identité OpenStack)

Nous appliquons des limites de débit au niveau de l'**utilisateur** OpenStack.

Un utilisateur peut effectuer **60 requêtes par minute** avant de recevoir une réponse HTTP 429.

### Nova (API de calcul OpenStack)

Nous appliquons des limites de débit au niveau du **projet** OpenStack.

Un projet peut effectuer **20 requêtes par seconde** avant de recevoir une réponse HTTP 429.

### Neutron (API réseau OpenStack)

Nous appliquons des limites de débit au niveau du **projet** OpenStack.

Un projet peut effectuer **20 requêtes par seconde** avant de recevoir une réponse HTTP 429.

### Glance (API d'image OpenStack)

Nous appliquons des limites de débit au niveau du **projet** OpenStack.

Un projet peut effectuer **20 requêtes par seconde** avant de recevoir une réponse HTTP 429.

### Cinder (API de calcul OpenStack)

Nous appliquons des limites de débit au niveau du **projet** OpenStack.

Un projet peut effectuer **20 requêtes par seconde** avant de recevoir une réponse HTTP 429.

## Comment fonctionnent les limites de débit ?

Si vous effectuez trop de requêtes de tokens à Keystone (l'API d'identité) ou envoyez trop de requêtes à un point de terminaison d'API tel que Nova (l'API de calcul), le point de terminaison commencera à répondre avec un code de réponse **HTTP 429** contenant un objet JSON tel que celui-ci :

```json
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

## Comment s'assurer que vous n'effectuez pas trop de requêtes ?

Nous vous conseillons de réduire le nombre d'appels à l'API effectués par votre automatisation, de sorte à rester en dessous de la limite de débit du point de terminaison.

Généralement, vous pouvez vous retrouver dans une telle situation lorsque vous effectuez plusieurs requêtes en parallèle (en utilisant plusieurs processus ou threads).

Il existe plusieurs façons d'améliorer l'efficacité de votre automatisation, telles que la mise en cache ou l'utilisation de mécanismes d'annulation des tentatives (*retry backoffs*).

### Utiliser le cache

L'une des options pour réduire le nombre d'appels est d'utiliser le cache.

A titre d'exemple, un jeton keystone est valable 24 heures après son émission. Vous pouvez demander un seul jeton, le conserver dans le cache et le réutiliser pendant toute la journée !

### Implémenter le *retry backoff*

Si vous avez vraiment besoin d'obtenir des informations régulières de l'API, vous pouvez implémenter une automatisation des nouvelles tentatives de requêtes, couplée avec une désactivation exponentielle aléatoire.

Le fait de réessayer avec une fonction de désactivation exponentielle signifie que vous effectuez une mise en veille courte lorsqu'une erreur de limite de débit est rencontrée, puis que vous retentez la demande qui a échoué.<br>
Si la demande échoue à nouveau, la durée de mise en veille est augmentée et le processus est répété.<br>
Cette opération se poursuit jusqu'à ce que la demande aboutisse ou qu'un nombre maximal de tentatives soit atteint.

Cette approche présente de nombreux avantages :

- les nouvelles tentatives automatiques vous permettent de récupérer des erreurs de limite de débit sans blocage ou perte de données ;
- la désactivation exponentielle vous permet d’effectuer vos premières tentatives rapidement, tout en bénéficiant de délais plus longs en cas d’échec de vos premières tentatives ;
- l'ajout d'un délai aléatoire évite que toutes les tentatives ne soient effecutées en même temps.

Sachez que les demandes infructueuses ne rentrent pas dans le calcul de votre limite de débit. Par conséquent, le renvoi continu d'une demande pourrait fonctionner, mais nous pourrions modifier ce comportement à l'avenir. Nous vous recommandons de ne pas vous fier à ce mécanisme.

Voici quelques exemples de librairies bien connues pour implémenter la fonction *retry backoff* dans python :

- tenacity : <https://pypi.org/project/tenacity/>
- backoff : <https://pypi.org/project/backoff/>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
