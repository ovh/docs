---
title: "Gérer la bande passante privée vRack via l'API OVHcloud"
excerpt: "Augmentez ou diminuez la bande passante privée vRack de votre serveur dédié via l'API OVHcloud"
updated: 2025-01-20
---

## Objectif

Avec le réseau privé, les serveurs dédiés compatibles bénéficient d'une bande passante minimale garantie de 1 Gbps. En cas d'activité accrue, cette bande passante peut être augmentée sur les serveurs compatibles.

**Dans ce guide, nous vous expliquons comment augmenter ou diminuer facilement la bande passante privée d’un serveur dédié.**

## Prérequis

- Un service [vRack](/links/network/vrack) activé dans votre compte
- Un [serveur dédié](/links/bare-metal/bare-metal) compatible avec le vRack
- Avoir accès à l’[API OVHcloud](/pages/manage_and_operate/api/first-steps)

> [!warning]
> Veuillez noter que cette option n'est pas disponible sur les serveurs dédiés situés dans la région APAC (Asie Pacifique) qui sont livrés avec une bande passante privée de 25Gbit/s non mesurée.
> 

## En pratique

### Trouver les services disponibles

Utilisez l'appel API suivant pour répertorier tous les services disponibles pour augmenter (ou diminuer) la bande passante. Vérifiez alors que le service que vous souhaitez utiliser est répertorié :

> [!api]
>
> @api {v1} /order GET /order/upgrade/bare metalPrivateBandwidth
>

![Appel API listant les services de bande passante privee disponibles](images/bandwidth_01.png){.thumbnail}

### Trouver le code de l'offre (*planCode*)

Listez les offres disponibles et retrouvez le **planCode** de votre choix avec l'appel API ci-dessous :

> [!api]
>
> @api {v1} /order GET /order/upgrade/bare metalPrivateBandwidth/{serviceName}
>

Renseignez les variables :

- serviceName : nom de votre serveur dédié, par exemple `ns1234567.ip-203.0.113.eu`

![Appel API pour lister les codes de plan de bande passante vRack](images/private-bandwidth-1.png){.thumbnail}

Le champ `RESPONSE` doit afficher des informations similaires à celles qui suivent :

![Reponse API affichant les codes de plan de bande passante vRack](images/private-bandwidth-2.png){.thumbnail}

### Vérifier votre commande

Utilisez l'appel API suivant pour obtenir un aperçu de votre commande, incluant la tarification :

> [!api]
>
> @api {v1} /order GET /order/upgrade/bare metalPrivateBandwidth/{serviceName}/{planCode}
>

Renseignez les variables :

- planCode : la référence récupérée à l'étape précédente
- serviceName : nom de votre serveur dédié
- quantity : 1

![Appel API pour previsualiser la commande de bande passante vRack avec tarif](images/private-bandwidth-3.png){.thumbnail}

Le champ `RESPONSE` doit afficher des informations similaires à celles qui suivent :

![Reponse API avec details de tarification de la bande passante vRack](images/private-bandwidth-4.png){.thumbnail}

### Soumettre votre commande

Pour soumettre officiellement votre commande, utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /order POST /order/upgrade/bare metalPrivateBandwidth/{serviceName}/{planCode}
>

![Appel API pour soumettre la commande de bande passante privee vRack](images/private-bandwidth-5.png){.thumbnail}

La commande sera traitée une fois que vous aurez cliqué sur `Execute`{.action}. Le montant affiché correspond au premier mois de facturation de votre option, calculé au prorata temporis du mois en cours.

## Aller plus loin

[Augmenter et diminuer la bande passante d'un serveur dédié via l'API OVHcloud](/pages/bare_metal_cloud/dedicated_servers/manage_bandwidth_api)

[Configurer le vRack sur vos serveurs dédiés](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

Rejoignez notre [communauté d'utilisateurs](/links/community).
