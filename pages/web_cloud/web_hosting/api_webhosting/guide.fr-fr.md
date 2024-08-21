---
title: "Utiliser les API OVHcloud relatives à l'hébergement web"
excerpt: "Découvrez comment utiliser l'API publique OVHcloud pour manipuler vos services d'hébergement web"
updated: 2024-08-23
---

> [!warning]
>
> L'utilisation des APIs OVHcloud nécessite des connaissances avancées dans ce domaine. Si vous éprouvez des difficultés, contactez les [partenaires OVHcloud](/links/partner).
>

> [!primary]
>
> Pour suivre ce guide, vous devez d'abord vous connecter à l'API OVHcloud. Vous trouverez plus de détails sur la page d'[introduction à l'API](/pages/web_cloud/domains/api_domain_intro).
>

## L'API web hosting

Afin de commander vos noms de domaine, voici une présentation des différents objets que vous allez devoir manipuler au travers de l'API.

### Le _panier_

L'objet _cart_ de l'API représente ce panier. Différentes actions sont disponibles :

- Le créer : peut être fait sans être authentifié
- L'assigner à un nic : indispensable pour valider un panier
- Y ajouter des produits
- Demander un aperçu
- Demander une validation en "dry-run" (sans générer de bon de commande)
- Générer un bon de commande

Les APIs concernées commencent par `/order/cart/`

### Les _produits_

Un _item_ représente un produit qui peut être ajouté dans un panier.
Il est possible de :

- récupérer la disponibilité du produit
- ajouter/modifier/supprimer un produit dans le panier
- récupérer les configurations requises afin de valider le panier
- ajouter/supprimer une configuration associée au produit.

Ces APIs commencent par `/order/cart/{cartId}/item/`

### Workflow

Globalement, la commande d'un produit OVHcloud via l'API se fera toujours à travers ces étapes :

1. Créer un panier
1. Récupérer les offres disponibles pour le produit souhaité
1. Mettre le produit dans le panier
1. Visualiser un résumé de son panier (optionnel)
1. Récupérer les configurations requises pour ce produit
1. Ajouter les configurations requises
1. Vérifier son panier via une validation "dry-run" (optionnel)
1. Valider son panier

## Création du panier

La première étape de commande d'un nom de domaine est la création du panier avec l'API suivante :

> [!api]
>
> @api {v1} /order POST /order/cart

| Paramètre     | Obligatoire | Défaut              | Description                         |
| ------------- | ----------- | ------------------- | ----------------------------------- |
| ovhSubsidiary | oui         |                     | Filiale OVHcloud                    |
| description   | non         | ""                  | Description personnalisée du panier |
| expire        | non         | maintenant + 1 jour | Expiration du panier                |

<!-- prettier-ignore -->
> [!tabs]
> Réponse
>> ```json
>> {
>>   "cartId": "c87b5e9d-f586-4456-9f56-1709f40e7b1d",
>>   "description": "",
>>   "expire": "2020-10-18T13:44:30+00:00",
>>   "readOnly": false,
>>   "items": []
>> }
>> ```

Notez bien la propriété `cartId`, elle nous servira tout au long des étapes suivantes.

## Récupération des offres disponibles <a name="fetch-available-offers"></a>

La seconde étape consiste à récupérer les offres accessibles pour un domaine.

> [!api]
>
> @api {v1} /order GET /order/cart/{cartId}/domain

| Paramètre | Obligatoire | Défaut | Description                |
| --------- | ----------- | ------ | -------------------------- |
| domain    | oui         | ""     | Le nom de domaine souhaité |

<!-- prettier-ignore -->
> [!tabs]
> Réponse
>> ```javascript
>> [
>>   {
>>     "action": "create", // 1
>>     "configurations": [],
>>     "deliveryTime": "",
>>     "duration": [
>>       "P1Y", // 2
>>       "P2Y",
>>       "P3Y",
>>       "P4Y",
>>       "P5Y",
>>       "P6Y",
>>       "P7Y",
>>       "P8Y",
>>       "P9Y",
>>       "P10Y"
>>     ],
>>     "offer": "gold",
>>     "offerId": "fr-create", // 3
>>     "orderable": true,
>>     "phase": "ga",
>>     "prices": [
>>       {
>>         "label": "PRICE",
>>         "price": {
>>           "currencyCode": "EUR",
>>           "text": "6.99 €",
>>           "value": 6.99
>>         }
>>       },
>>       {
>>         "label": "RENEW",
>>         "price": {
>>           "currencyCode": "EUR",
>>           "text": "6.99 €",
>>           "value": 6.99
>>         }
>>       },
>>       {
>>         "label": "DISCOUNT",
>>         "price": {
>>           "currencyCode": "EUR",
>>           "text": "2.00 €",
>>           "value": 2
>>         }
>>       },
>>       {
>>         "label": "FEE",
>>         "price": {
>>           "currencyCode": "EUR",
>>           "text": "0.00 €",
>>           "value": 0
>>         }
>>       },
>>       {
>>         "label": "TOTAL",
>>         "price": {
>>           "currencyCode": "EUR",
>>           "text": "4.99 €",
>>           "value": 4.99
>>         }
>>       }
>>     ],
>>     "pricingMode": "default", // 4
>>     "productId": "domain",
>>     "quantityMax": 1
>>   }
>> ]
>> ```

Il y a 4 valeurs à retenir ici :

1. `action` : celle réalisable sur le domaine, ça peut être un `create` ou un `transfer`
2. `duration` : ce champ représente l'unité de période sur laquelle il est possible de commander le domaine, au format ISO 8601. Pour un domaine, P1Y (**P**eriod **1** **Y**ear) équivaut à une période d'un an, P2Y une période de deux ans, etc.
3. `offerId` : c'est le nom de l'offre qu'il faudra mettre lors de l'ajout du domaine dans le panier
4. `pricing-mode` : c'est le détail de l'offre qu'il faudra également mettre lors de l'ajout du domaine dans le panier

Pour déterminer le statut du domaine, on utilise la table de correspondance suivante, en fonction du pricing-mode.

| Pricing-mode                                     | Description                                                                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create-default`                                 | Le domaine est libre et au prix standard                                                                                                                   |
| `create-premium`                                 | Le domaine est libre mais est un premium. Son prix est variable d'un domaine à l'autre                                                                     |
| `transfer-default`                               | Le domaine n'est pas libre mais est transférable si vous en êtes le propriétaire. Son transfert est au prix standard                                       |
| `transfer-premium`                               | Le domaine n'est pas libre mais est transférable si vous en êtes le propriétaire. C'est un domaine premium et son prix est variable d'un domaine à l'autre |
| `transfer-aftermarket1`, `transfer-aftermarket2` | Le domaine est libre via un marché secondaire. Son prix est variable d'un domaine à l'autre                                                                |

> [!primary]
>
> Pour le moment, bien que le retour soit un tableau, seulement une offre à la fois est disponible.
> Dans le futur, il est possible que d'autres offres soient disponibles pour un même domaine.
> Un domaine pourrait être à la fois transférable depuis un autre registrar ou bien disponible via un marché secondaire.

## Ajout d'un domaine dans le panier

Tandis que la deuxième étape est optionnelle, celle-ci est obligatoire pour la commande d'un nom de domaine.
L'appel suivant permet en effet d'ajouter le domaine désiré dans le panier :

> [!api]
>
> @api {v1} /order POST /order/cart/{cartId}/domain

| Paramètre     | Obligatoire | Description                                                                                                                                      |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `domain`      | oui         | Le nom de domaine souhaité                                                                                                                       |
| `duration`    | non         | Période de réservation. Les valeurs supérieures à P1Y peuvent être acceptées sur certaines extensions, mais ne peuvent en aucun cas excéder P10Y |
| `offerId`     | non         | Offre disponible pour le domaine. Une seule valeur est possible pour un domaine donné, voir ci-dessus pour la récupérer (déprécié)               |
| `quantity`    | non         | Seule la valeur "1" est autorisée                                                                                                                |
| `planCode`    | non         | Représente le plan lié au domaine                                                                                                                |
| `pricingMode` | non         | Représente l'offre liée au plan du domaine                                                                                                       |

<!-- prettier-ignore -->
> [!tabs]
> Réponse
>> ```json
>> {
>>   "cartId": "c87b5e9d-f586-4456-9f56-1709f40e7b1d",
>>   "configurations": [68544099],
>>   "duration": "P1Y",
>>   "itemId": 109074889,
>>   "offerId": null,
>>   "options": [],
>>   "prices": [
>>     {
>>       "label": "TOTAL",
>>       "price": {
>>         "currencyCode": "EUR",
>>         "text": "6.99 €",
>>         "value": 6.99
>>       }
>>     },
>>     {
>>       "label": "FEE",
>>       "price": {
>>         "currencyCode": "EUR",
>>         "text": "6.99 €",
>>         "value": 6.99
>>       }
>>     },
>>     {
>>       "label": "RENEW",
>>       "price": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       }
>>     },
>>     {
>>       "label": "PRICE",
>>       "price": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       }
>>     }
>>   ],
>>   "productId": "domainblog",
>>   "settings": {
>>     "catalogName": "dom-public",
>>     "domain": "exemple.fr",
>>     "planCode": "fr",
>>     "pricingMode": "create-default",
>>     "quantity": 1
>>   }
>> }
>> ```

Pensez à bien noter la valeur `itemId`, elle nous servira pour la suite.

