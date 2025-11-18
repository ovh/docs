---
title: "Augmenter et diminuer la bande passante d'un serveur dédié via l'API OVHcloud"
excerpt: "Découvrez comment augmenter ou diminuer la bande passante d'un serveur dédié via l'API OVHcloud"
updated: 2025-01-20
---

## Objectif

Chacun de nos serveurs dédiés dispose d'une bande passante publique minimale de 500 Mbps. Si vous avez des besoins spécifiques en matière de téléchargement, comme les mises à jour de logiciels, vous pouvez augmenter la bande passante. Et si vous avez besoin de moins de bande passante, vous pouvez également passer à une bande passante inférieure.

**Dans ce guide, nous expliquons comment vous pouvez facilement augmenter ou diminuer la bande passante d'un serveur dédié.**

## Prérequis

- Disposer d’un [serveur dédié](/links/bare-metal/bare-metal) dans votre compte OVHcloud
- Avoir accès à l’[API OVHcloud](/pages/manage_and_operate/api/first-steps)

> [!warning]
> Veuillez noter que cette option est disponible sur la plupart des serveurs dédiés, mais pas sur tous. Bien que nos serveurs soient livrés avec une bande passante publique minimale de 500Mbps, l'option de mise à niveau de la bande passante publique n'est pas disponible sur toutes les gammes de serveurs dédiés.
>

## En pratique

### Trouver les services disponibles

Utilisez l'appel API suivant pour répertorier tous les services disponibles pour augmenter (ou diminuer) la bande passante. Vérifiez alors que le service que vous souhaitez utiliser est répertorié :

> [!api]
>
> @api {v1} /order GET /order/upgrade/bare metalPublicBandwidth
>

![bandwidth](images/bandwidth_01.png){.thumbnail}

### Trouver le code de l'offre (*planCode*)

Listez les offres disponibles et retrouvez le **planCode** de votre choix avec l'appel API ci-dessous :

> [!api]
>
> @api {v1} /order GET /order/upgrade/bare metalPublicBandwidth/{serviceName}
>

Renseignez les variables :

- serviceName : nom de votre serveur dédié, par exemple `ns1234567.ip-203.0.113.eu`

![bandwidth](images/bandwidth_02.png){.thumbnail}

Le champ `RESPONSE` doit afficher des informations similaires à celles qui suivent :

![bandwidth](images/bandwidth_02_1.png){.thumbnail}

### Vérifier votre commande

Utilisez l'appel API suivant pour obtenir un aperçu de votre commande, incluant la tarification :

> [!api]
>
> @api {v1} /order GET /order/upgrade/bare metalPublicBandwidth/{serviceName}/{planCode}
>

Renseignez les variables :

- planCode : la référence récupérée à l'étape précédente
- serviceName : nom de votre serveur dédié
- quantity : 1

![bandwidth](images/bandwidth_03.png){.thumbnail}

Le champ `RESPONSE` doit afficher des informations similaires à celles qui suivent :

![bandwidth](images/bandwidth_03_1.png){.thumbnail}

### Soumettre votre commande

Pour soumettre officiellement votre commande, utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /order POST /order/upgrade/bare metalPublicBandwidth/{serviceName}/{planCode}
>

![bandwidth](images/bandwidth_4.png){.thumbnail}

La commande sera traitée une fois que vous aurez cliqué sur `Execute`{.action}. Le montant affiché correspond au premier mois de facturation de votre option, calculé au prorata temporis du mois en cours.

## Aller plus loin

Rejoignez notre [communauté d'utilisateurs](/links/community).
