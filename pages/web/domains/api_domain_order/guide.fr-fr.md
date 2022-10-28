---
title: "Commander un nom de domaine"
slug: api-order
excerpt: "Utilisez l'API publique OVHcloud pour commander vos noms de domaines"
section: "API domaines"
order: 02
---

**Dernière mise à jour le 05/05/2022**

<!-- Rappel à mettre au début de chaque page -->

> [!primary]
>
> Pour suivre ce guide, vous devez déjà vous connecter à l'API OVHcloud. Vous trouverez plus de détails sur la page d'[introduction à l'API](../api).

<!-- Begin TOC -->

## Sommaire

- [Introduction](../api)
- **Commander un nom de domaine**
- [Gestion des tâches](../api-tasks)
- [Gestion des contacts d'un nom de domaine](../api-contact)
- [Gestion des règles d'éligibilité](../api-rules)
- [Configurer l'affichage de ses données dans le Whois](../api-whois)
- [Configurer les DNS de son nom de domaine](../api-dns)
- [Transférer un nom de domaine](../api-transfer)
<!-- End TOC -->

## L'API de commande

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
> @api {POST} /order/cart

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
> @api {GET} /order/cart/{cartId}/domain

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
> @api {POST} /order/cart/{cartId}/domain

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

## Résumé du panier

Cette étape est optionnelle. Elle donne un aperçu du contenu du panier, mais elle ne valide pas sa cohérence ou les configurations qu'il contient.

> [!api]
>
> @api {GET} /order/cart/{cartId}/summary

<!-- prettier-ignore -->
> [!tabs]
> Réponse
>> ```json
>> {
>>   "contracts": [],
>>   "details": [
>>     {
>>       "cartItemID": null,
>>       "description": "testdomainorder.com - Zone DNS",
>>       "detailType": "DURATION",
>>       "domain": "*001.001",
>>       "originalTotalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       },
>>       "quantity": 1,
>>       "reductionTotalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       },
>>       "reductions": [],
>>       "totalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       },
>>       "unitPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       }
>>     },
>>     {
>>       "cartItemID": null,
>>       "description": "DNS zone",
>>       "detailType": "INSTALLATION",
>>       "domain": "*001.001",
>>       "originalTotalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       },
>>       "quantity": 1,
>>       "reductionTotalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       },
>>       "reductions": [],
>>       "totalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       },
>>       "unitPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       }
>>     },
>>     {
>>       "cartItemID": null,
>>       "description": "testdomainorder.com - .com demande d'enregistrement - 12 mois",
>>       "detailType": "DURATION",
>>       "domain": "*001",
>>       "originalTotalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "9.99 €",
>>         "value": 9.99
>>       },
>>       "quantity": 1,
>>       "reductionTotalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       },
>>       "reductions": [],
>>       "totalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "9.99 €",
>>         "value": 9.99
>>       },
>>       "unitPrice": {
>>         "currencyCode": "EUR",
>>         "text": "9.99 €",
>>         "value": 9.99
>>       }
>>     },
>>     {
>>       "cartItemID": null,
>>       "description": "Domain .com",
>>       "detailType": "INSTALLATION",
>>       "domain": "*001",
>>       "originalTotalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       },
>>       "quantity": 1,
>>       "reductionTotalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       },
>>       "reductions": [],
>>       "totalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       },
>>       "unitPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       }
>>     },
>>     {
>>       "cartItemID": null,
>>       "description": ".COM Create Prix barre",
>>       "detailType": "GIFT",
>>       "domain": "*001",
>>       "originalTotalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "-2.50 €",
>>         "value": -2.5
>>       },
>>       "quantity": 1,
>>       "reductionTotalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "0.00 €",
>>         "value": 0
>>       },
>>       "reductions": [],
>>       "totalPrice": {
>>         "currencyCode": "EUR",
>>         "text": "-2.50 €",
>>         "value": -2.5
>>       },
>>       "unitPrice": {
>>         "currencyCode": "EUR",
>>         "text": "-2.50 €",
>>         "value": -2.5
>>       }
>>     }
>>   ],
>>   "orderId": null,
>>   "prices": {
>>     "originalWithoutTax": {
>>       "currencyCode": "EUR",
>>       "text": "7.49 €",
>>       "value": 7.49
>>     },
>>     "reduction": {
>>       "currencyCode": "EUR",
>>       "text": "0.00 €",
>>       "value": 0
>>     },
>>     "tax": {
>>       "currencyCode": "EUR",
>>       "text": "1.50 €",
>>       "value": 1.5
>>     },
>>     "withTax": {
>>       "currencyCode": "EUR",
>>       "text": "8.99 €",
>>       "value": 8.99
>>     },
>>     "withoutTax": {
>>       "currencyCode": "EUR",
>>       "text": "7.49 €",
>>       "value": 7.49
>>     }
>>   },
>>   "url": null
>> }
>> ```

Sans rentrer dans les détails de ce payload, il y a certaines choses à retenir :

- L'ajout d'un item dans le panier produit deux lignes de détails sur le bon de commande
- Une ligne de détail est ajoutée par promotion (`detailType` = `GIFT`)
- L'objet `prices` représente le total du panier avec et sans taxe.
- La liste des contrats est vide lors du résumé. Elle sera remplie lors de la validation ou de la création du bon de commande.

> [!primary] Un petit point sur la zone DNS
>
> La présence d'une zone DNS (représentée par deux lignes de détails) alors qu'elle n'a pas été ajoutée au panier peut surprendre.
> Cela fait écho à une notion souvent méconnue, ou tout du moins mal comprise.
> Une zone DNS et un domaine sont deux choses (produits) différentes.
> Un nom de domaine peut très bien être chez OVHcloud alors que la zone peut être hébergée autre part.
>
> Cependant, les deux étant très liés et dans le but de faciliter la commande d'un nom de domaine, nous avons fait le choix d'installer automatiquement une zone à l'achat d'un nom de domaine.
> Bien sûr, il est possible de commander soi-même une zone associée au domaine afin d'y ajouter des options telles que DNSSEC ou DNS Anycast.
> Mais nous reparlerons de ceci lorsque nous aborderons les options.

## Assigner le panier

Bien que cette opération puisse se faire dès la création du panier, elle devient indispensable à partir de maintenant. Nous le verrons par la suite, les configurations d'un nom de domaine et leur validation dépendent du nic OVHcloud assigné au panier.

> [!api]
>
> @api {POST} /order/cart/{cartId}/assign

## Gestion des configurations <a name="configurations-management"></a>

A ce stade, le panier contient un domaine. Il faut maintenant gérer les configurations requises afin de pouvoir, par la suite, valider le bon de commande.

### Récupération des configurations requises <a name="required-configurations"></a>

Pour connaître les configurations requises, il suffit d'appeler l'API suivante.

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}/requiredConfiguration

| Paramètre | Obligatoire | Défaut | Description                                   |
| --------- | ----------- | ------ | --------------------------------------------- |
| cartId    | oui         | ""     | L'identifiant du panier                       |
| itemId    | oui         | ""     | L'identifiant de l'item inséré dans le panier |

<!-- prettier-ignore -->
> [!tabs]
> Réponse
>> ```json
>> [
>>   {
>>     "label": "OWNER_LEGAL_AGE",
>>     "type": "bool"
>>   },
>>   {
>>     "label": "OWNER_CONTACT",
>>     "type": "/me/contact"
>>   },
>>   {
>>     "label": "ADMIN_ACCOUNT",
>>     "type": "Nichandle"
>>   },
>>   {
>>     "label": "TECH_ACCOUNT",
>>     "type": "Nichandle"
>>   },
>>   {
>>     "label": "DNS",
>>     "type": "String"
>>   }
>> ]
>> ```

La réponse ci-dessus représente l'exemple le plus commun que vous pourrez retrouver lors de la commande de création d'un nom de domaine.
Mais celle-ci dépend fortement de l'action désirée (transfert, création), de l'extension ou bien du type de domaine (premium, issu d'un marché secondaire).

Voici la liste exhaustive des différentes configurations requises pour un nom de domaine :

| Label               | Type                           | Obligatoire       | Description                                                                                                                                                                                                                                                                                                |
| ------------------- | ------------------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ADMIN_ACCOUNT`     | string                         | non               | Représente le nic OVHcloud qui pourra administrer le domaine et sera associé en tant qu'admin sur le Whois. Si vide, le nic connecté à l'API sera pris par défaut. La valeur attendue doit être un nic valide sous la forme xxx-ovh                                                                        |
| `TECH_ACCOUNT`      | string                         | non               | Représente le nic OVHcloud qui pourra gérer techniquement le domaine et sera associé en tant que tech sur le Whois. Si vide, le nic connecté à l'API sera pris par défaut. La valeur attendue doit être un nic valide sous la forme xxx-ovh                                                                |
| `OWNER_CONTACT`     | /me/contact ou /domain/contact | non               | Représente le propriétaire du nom de domaine. Si vide, le nic admin sera pris en modèle pour créer un contact. La valeur attendue est une chaîne de caractères sous la forme `/me/contact/1234` ou `/domain/contact/12345`                                                                                 |
| `DOMAIN_CONFIG`     | json                           | selon l'extension | Très rarement présent, il est lié à certaines contraintes d'extensions spécifiques (gov.uk par exemple)                                                                                                                                                                                                    |
| `ACCEPT_CONDITIONS` | bool                           | oui si présent    | Indique que l'extension possède des conditions particulières à l'obtention de l'extension                                                                                                                                                                                                                  |
| `REASON`            | string                         | oui si présent    | Il indique que le registre demande la raison pour laquelle le domaine veut être commandé. Cela concerne généralement des domaines réservés à des usages spécifiques (ville par exemple)                                                                                                                    |
| `CLAIMS_NOTICE`     | string                         | oui si présent    | Indique si un avis de marque est présent sur le domaine. Si oui, alors le domaine est protégé par une marque et une notification sera alors envoyée au détenteur de la marque. Si le registrant n'est pas détenteur de la marque, le domaine pourra être supprimé par la suite sans remboursement possible |
| `PROTECTED_CODE`    | string                         | oui si présent    | Certains domaines sont réservés par un registre et nécessitent un code spécifique pour débloquer leur obtention                                                                                                                                                                                            |
| `OWNER_LEGAL_AGE`   | bool                           | oui               | Toujours présent, il s'agit d'une configuration de type "opt-in" afin de certifier que le registrant à l'âge légal pour posséder un nom de domaine                                                                                                                                                         |
| `AUTH_INFO`         | string                         | non               | Code d'autorisation utilisé pour prouver que vous êtes le propriétaire du domaine. Utilisé pour les transferts de nom de domaines.                                                                                                                                                                         |

> [!warning]
>
> Cette API est conçue pour répondre aux besoins de la plupart des produits OVHcloud.
> Les noms de domaine ont la particularité d'avoir des règles complexes concernant la valeur de certaines configurations, notamment sur les configurations `ADMIN_ACCOUNT`, `OWNER_CONTACT` ou encore `DOMAIN_CONFIG`, celles-ci étant liées aux règles de gestion des registres.
>
> Par exemple, pour l'obtention d'un .berlin, soit le contact registrant soit le contact admin doit résider à Berlin.
> Or cette API est en incapacité de décrire ce genre de règle.
>
> Pour cela, il existe d'autres API afin de décrire les informations nécessaires à un nom de domaine de manière précise.
> Ces APIs correspondant à un usage avancé, et étant utilisées également en dehors de la commande (comme pour la mise à jour d'un contact), elles sont décrites en détail dans la section [Gestion des règles](../api-rules).

> [!primary]
>
> Ici, le `OWNER_CONTACT` représente une API de "ressource", à savoir `/me/contact` ou plus précisement `/domain/contact`.
> Les APIs permettant de créer ces contacts sont décrites dans la section [Gestion des contacts](../api-contact).

### CRUD des configurations sur le produit

Maintenant qu'on a récupéré la liste des configurations requises, il suffit de les ajouter sur le produit.

#### Ajout d'une configuration <a name="add-configuration"></a>

> [!api]
>
> @api {POST} /order/cart/{cartId}/item/{itemId}/configuration

| Paramètre                  | Obligatoire | Défaut | Description                                                                              |
| -------------------------- | ----------- | ------ | ---------------------------------------------------------------------------------------- |
| `cartId`                   | oui         | ""     | L'identifiant du panier                                                                  |
| `itemId`                   | oui         | ""     | L'identifiant de l'item inséré dans le panier                                            |
| `label` (corps de requête) | oui         | ""     | Clé de configuration (voir [liste ci-dessus](#required-configurations)) |
| `value` (corps de requête) | oui         | ""     | Valeur de configuration à définir                                                        |

<!-- prettier-ignore -->
> [!tabs]
> Réponse
>> ```json
>> {
>>   "id": 69663774,
>>   "label": "OWNER_CONTACT",
>>   "value": "/me/contact/13189481"
>> }
>> ```

#### Récupération des configurations sur un produit <a name="product-config"></a>

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}/configuration

#### Récupération de la valeur d'une configuration

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}

#### Suppression d'une configuration

> [!api]
>
> @api {DELETE} /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}

## Gestion du panier

A tout moment, il est bien entendu possible de visualiser et manipuler le panier avec les API suivantes :

#### Récupération des items

> [!api]
>
> @api {GET} /order/cart/{cartId}

#### Récupération du détail d'un item

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}

#### Suppression d'un item

> [!api]
>
> @api {DELETE} /order/cart/{cartId}/item/{itemId}

## Validation du panier

Cette étape est sans doute la plus importante du processus de commande et se fait via l'appel suivant.

> [!api]
>
> @api {GET} /order/cart/{cartId}/checkout

Elle permet de récupérer le bon de commande dans sa forme finale sans le générer (c'est un "dry-run"). L'objet retourné contient les contrats associés aux différents produits.

Cet appel permet également de valider les configurations comme par exemple les éligibilités du propriétaire pour un nom de domaine.

## Création du bon de commande <a name="order-creation"></a>

> [!api]
>
> @api {POST} /order/cart/{cartId}/checkout

| Paramètre                           | Obligatoire | Défaut | Description                                                                                    |
| ----------------------------------- | ----------- | ------ | ---------------------------------------------------------------------------------------------- |
| `autoPayWithPreferredPaymentMethod` | oui         | ""     | Permet de payer automatiquement le bon de commande avec le moyen de paiement par défaut du nic |
| `waiveRetractationPeriod`           | oui         | ""     | Obligatoire pour un nom de domaine. Il représente la renonciation au droit de rétractation     |

## Paiement du bon de commande

Si vous n'avez pas payé le bon de commande automatiquement lors de la précédente étape, vous aurez besoin de manipuler les APIs de gestion des bons de commande. Bien qu'il existe de nombreuses APIs en relation avec les moyens de paiement et la gestion des bons de commande, nous partirons du principe qu'au moins un moyen de paiement est enregistré sur votre compte.

### Récupération des moyens de paiement disponibles <a name="available-payment-method"></a>

Dans un premier temps, récupérons les moyens de paiement disponibles pour le bon de commande effectué plus tôt avec la route suivante :

> [!api]
>
> @api {GET} /me/order/{orderId}/availableRegisteredPaymentMean

| Paramètre | Obligatoire | Défaut | Description                                                                                     |
| --------- | ----------- | ------ | ----------------------------------------------------------------------------------------------- |
| `orderId` | oui         | ""     | Identifiant du BC obtenu lors de la [création du bon de commande](#order-creation) |

<!-- prettier-ignore -->
> [!tabs]
> Réponse
>> ```javascript
>> [
>>   {
>>     "paymentMean": "bankAccount"
>>   }
>> ]
>> /* Valeurs possibles pour paymentMean :
>>   "CREDIT_CARD"
>>   "CURRENT_ACCOUNT"
>>   "DEFERRED_PAYMENT_ACCOUNT"
>>   "ENTERPRISE"
>>   "INTERNAL_TRUSTED_ACCOUNT"
>>   "PAYPAL"
>>   "bankAccount"
>>   "creditCard"
>>   "deferredPaymentAccount"
>>   "fidelityAccount"
>>   "ovhAccount"
>>   "paypal"
>> */
>> ```

### Paiement

Le paiement du bon de commande se fait via l'API ci-dessous. Celle-ci ne retourne aucun résultat mais le statut 200 indique une réussite.

> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean

| Paramètre       | Obligatoire             | Défaut | Description                                                                                                                             |
| --------------- | ----------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `orderId`       | oui                     | ""     | Identifiant du BC obtenu lors de la [création du bon de commande](#order-creation)                                         |
| `paymentMean`   | oui                     | ""     | Moyen de paiement récupéré lors de la [récupération des moyens de paiement disponible](#available-payment-method) |
| `paymentMeanId` | selon moyen de paiement | ""     | L'identifiant du moyen de paiement est obligatoire pour les valeurs `bankAccount`, `creditCard` ou `paypal`                             |

## Suivi du bon de commande

L'API suivante permet de connaître l'état d'un bon de commande.

> [!api]
>
> @api {GET} /me/order/{orderId}/status

| Paramètre | Obligatoire | Défaut | Description                                                                                     |
| --------- | ----------- | ------ | ----------------------------------------------------------------------------------------------- |
| `orderId` | oui         | ""     | Identifiant du BC obtenu lors de la [création du bon de commande](#order-creation) |

<!-- prettier-ignore -->
> [!tabs]
> Réponse
>> ```javascript
>> "notPaid"
>> /* Valeurs possibles :
>>   "cancelled"
>>   "cancelling"
>>   "checking"
>>   "delivered"
>>   "delivering"
>>   "documentsRequested"
>>   "notPaid"
>>   "unknown"
>> */
>> ```
