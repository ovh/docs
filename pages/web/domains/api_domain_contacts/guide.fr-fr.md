---
title: "Gestion des contacts d'un nom de domaine"
slug: api-contact
excerpt: "Utilisez l'API publique OVHcloud pour gérer les contacts de vos noms de domaines"
section: "API domaines"
order: 05
---

**Dernière mise à jour le 05/05/2022**

<!-- Rappel à mettre au début de chaque page -->

> [!primary]
>
> Pour suivre ce guide, vous devez déjà vous connecter à l'API OVHcloud. Vous trouverez plus de détails sur la page d'[introduction à l'API](../api).

<!-- Begin TOC -->

## Sommaire

- [Introduction](../api)
- [Commander un nom de domaine](../api-order)
- [Gestion des tâches](../api-tasks)
- **Gestion des contacts d'un nom de domaine**
- [Gestion des règles d'éligibilité](../api-rules)
- [Configurer l'affichage de ses données dans le Whois](../api-whois)
- [Configurer les DNS de son nom de domaine](../api-dns)
- [Transférer un nom de domaine](../api-transfer)
<!-- End TOC -->

## Types de contact

La gestion des contacts est un point central de la gestion des noms de domaine.
Il est important de comprendre les différences entre les _nichandles_ (Nic ou comptes OVHcloud) et les _contacts_ registre/Whois (stockés chez le registre, publiés dans le Whois).

### Contact registre/Whois

Pour la majorité des extensions, il y a 3 contacts différents configurables chez le registre :

- **Administrateur** : contact qui gère le domaine dans sa globalité (gestion du contact propriétaire, contact technique). Il est le principal interlocuteur du registrar.
- **Technique** : contact qui gère la partie technique du domaine (gestion de la zone notamment).
- **Propriétaire** : personne physique ou morale détentrice du nom de domaine. Ce contact est contraint par des [règles d'éligibilité](../api-rules). Il est celui qui est légalement responsable du domaine.

Par exemple, John contacte une agence web afin de créer son site web vitrine pour sa petite entreprise. Dans ce cas-là, l'agence web organisera les contacts de cette manière :

- Administrateur : l'agence web
- Technique : l'agence web
- Propriétaire : John

Il est très fréquent que le contact technique soit le même que le contact administrateur.
Concernant le propriétaire, il est nécessaire que ce soit John. En cas de litige avec l'agence web, seul le fait d'être propriétaire du domaine aura une portée juridique et lui permettra la récupération du nom de domaine.

### Nichandle OVHcloud

Le nichandle OVHcloud représente le compte OVHcloud grâce auquel il est possible de se connecter au site OVHcloud et à l'API.
Sur un service OVHcloud (domaine, DNS, serveur, autre...), il est possible d'affecter un nichandle en tant que :

- **Nic admin** : administrateur du domaine, il peut exécuter toutes les actions possibles sur un service
- **Nic tech** : désigné par le Nic admin pour un service, il peut modifier certaines données techniques du service
- **Nic facturation** : responsable du paiement (facturation) du service.

Par défaut, un Nic admin est également Nic tech et Nic facturation d'un service.

### Relation entre nichandles OVHcloud et contacts registre/Whois

#### Nichandles administrateur et technique

Les nichandles administrateur et technique OVHcloud et les contacts administrateur et technique registre/Whois sont liés.
La modification des nichandles entraîne une modification automatique des contacts Whois.

L'inverse n'est cependant pas vrai. Une modification du contact administrateur ou technique (via une interface du registre par exemple) n'entraînera pas de modification du nichandle OVHcloud.

#### Nichandle facturation

Le nichandle facturation n'est pas utilisé côté registre/Whois. Il n'est utile qu'à la facturation du service OVHcloud représentant le nom de domaine.

#### Contact propriétaire

Aucun nichandle ne représente le contact propriétaire registre/Whois.
Il n'est pas possible de l'utiliser pour se connecter à l'API ou au site OVHcloud.

Celui-ci est représenté dans l'API par une autre entité, l'objet `domain.Contact`.

## Gestion des nichandles administrateur et technique

### Création d'un nouveau nichandle

L'API suivante permet de créer un nichandle OVHcloud.

> [!api]
>
> @api {POST} /newAccount

Il est également possible de récupérer les règles de création via l'API.

> [!api]
>
> @api {GET} /newAccount/creationRules

Une fois créé, toutes les actions liées à ce nichandle se feront via les APIs commençant par `/me/*`.

### Récupération et modification d'un nichandle

Vous pouvez récupérer et modifier les informations d'un Nic via ces APIs.

> [!api]
>
> @api {GET} /me
> @api {PUT} /me

### Changement de nichandle sur le service domaine

Dans cette section, nous allons voir comment changer le Nic (admin, tech et facturation) sur un nom de domaine.
Cela fonctionne de la même manière pour tous les services OVHcloud. Plus de détails concernant le workflow, ainsi que la façon de le faire via l'espace client OVHcloud peuvent être trouvés [sur cette page](../../customer/gestion-des-contacts/).

Avec l'API suivante, nous allons initier une "tâche" qui permettra à l'ancien et au nouveau Nic d'accepter ou de refuser le changement.

> [!api]
>
> @api {POST} /domain/{serviceName}/changeContact

| Corps de requête | Description                    |
| ---------------- | ------------------------------ |
| `contactAdmin`   | Nichandle Administrateur voulu |
| `contactTech`    | Nichandle Technique voulu      |
| `contactBilling` | Nichandle Facturation voulu    |

Cette API retourne une liste d'identifiants de tâches (une par nichandle).

Une tâche de changement de nichandle a pour but d'envoyer un e-mail à l'ancien et au nouveau Nic.
Ces e-mails contiennent des tokens de validation qui permettent de finaliser la procédure.

Les APIs suivantes permettent de suivre le traitement de cette tâche, ou de lui permettre d'avancer :

> [!api]
>
> @api {GET} /me/task/contactChange
> @api {GET} /me/task/contactChange/{id}
> @api {POST} /me/task/contactChange/{id}/accept
> @api {POST} /me/task/contactChange/{id}/refuse
> @api {POST} /me/task/contactChange/{id}/resendEmail

## Gestion du contact propriétaire

Le contact propriétaire est représenté et géré à la fois par les routes `/me/contact` et `/domain/contacts`.
Pour une utilisation des contacts dans un contexte de noms de domaine, nous vous recommandons fortement l'utilisation exclusive des APIs `/domain/contacts`.

> [!primary]
>
> Ces deux routes partagent les mêmes identifiants.
> Historiquement, toutes les actions étaient faisables via `/me/contact`. Cependant, certaines règles métiers liées uniquement aux noms de domaine nous ont contraints à déployer de nouvelles APIs spécifiques sous `/domain/contact`.
> Celles-ci représentent une surcouche aux APIs `/me/contact` et nous permettent d'ajouter des champs supplémentaires nécessaires à certaines extensions.

Lors de la commande d'un nom de domaine, un **nouveau contact propriétaire** est créé à partir des informations fournies, afin de toujours avoir un **identifiant unique** par domaine.
Cela facilite les mises à jour ultérieures et évite d'impacter un nom de domaine sans le vouloir.

### Gestion d'un contact

Les APIs suivantes vous permettent de gérer vos contacts.

> [!api]
>
> @api {POST} /domain/contact
> @api {GET} /domain/contact
> @api {GET} /domain/contact/{contactId}
> @api {PUT} /domain/contact/{contactId}

> [!primary]
>
> Le payload de modification d'un contact (PUT) doit toujours respecter les [règles d'éligibilité](../api-rules).

> [!primary]
>
> Certains champs étant en lecture seule, une procédure de changement de contact propriétaire sera parfois requise pour les changer.

### Changement de contact propriétaire

La décision d'un changement de propriétaire dépend de deux critères.

- L'extension est régie par les règles de l'ICANN (gTLDs et NewgTLDs) ou par l'administration d'un pays comme pour les ccTLDs.
- Le statut légal du propriétaire (individu, entreprise, …).

La situation la plus simple est celle des extensions régies par l'ICANN. Cette dernière considère l'une des modifications suivantes comme étant un changement de propriétaire :

- le nom/prénom pour une personne physique ou le nom de l'entreprise/association pour une personne morale ;
- l'adresse e-mail.

Ces champs sont en conséquence en lecture seule si le contact est attaché à au moins un nom de domaine. Le changement de propriétaire est gratuit sur ce type d'extensions.

Pour le reste des extensions, l'API des [règles d'éligibilité](../api-rules) vous permet de connaître le statut de chaque champ. Pour des raisons d'homogénéité, nous considérons un changement d'adresse e-mail comme un changement de propriétaire.

> [!primary]
>
> Selon l'extension (et les règles registre), un changement de propriétaire peut avoir plusieurs conséquences sur un nom de domaine.
> Par exemple dans certains cas, le changement de propriétaire entraîne automatiquement un renouvellement d'1 an, rendant ce changement payant.
> D'autres vont nécessiter une procédure de vérification manuelle.

Pour garder un comportement le plus homogène possible sur l'API OVHcloud, nous avons choisi de représenter le changement de propriétaire sous la forme d'une commande.
Dans la très grande majorité des cas, celle-ci sera gratuite.  Elle nous permet d'avoir un processus d'initialisation identique à toutes les extensions.

Ce processus se matérialise par deux étapes principales.

1. Commande du changement de propriétaire
    1. Identification du prix
    2. Création du panier
    3. Ajout de l'action de changement de propriétaire dans le panier
    4. Création et ajout du contact propriétaire
    5. Validation et paiement de la commande
2. Exécution du changement de propriétaire
    1. Création de la tâche de `DomainTrade`
    2. Envoi d'e-mails à l'ancien et au nouveau propriétaire
    3. Réception des tokens de validation
    4. Changement auprès du registre et du Whois

#### Commande du changement de propriétaire

Les étapes suivantes sont décrites plus en détails dans la documentation portant sur la [commande de nom de domaine](../api-order).

##### Étape 1 : Récupération des informations du changement de propriétaire

> [!api]
>
> @api {GET} /order/cartServiceOption/domain/{serviceName}

<!-- prettier-ignore -->
> [!tabs]
> Réponse
>> ```javascript
>> [
>>     {
>>       "exclusive": true,
>>       "mandatory": false,
>>       "family": "trade",
>>       "productName": ".com",
>>       "productType": "delivery",
>>       "planCode": "com-trade",
>>       "prices": [
>>         {
>>           "interval": 0,
>>           "minimumQuantity": 1,
>>           "description": "Creation of a .com domain name - 1 year",
>>           "minimumRepeat": 1,
>>           "priceInUcents": 0,
>>           "pricingMode": "create-default",
>>           "capacities": [
>>             "installation"
>>           ],
>>           "duration": "P0D",
>>           "maximumRepeat": 1,
>>           "pricingType": "purchase",
>>           "price": {
>>             "text": "0.00 €",
>>             "value": 0,
>>             "currencyCode": "EUR"
>>           },
>>           "maximumQuantity": 1
>>         }
>>       ]
>>     },
>>     {
>>       // ...
>>     }
>>   ]
>> ```

Les éléments à retenir du retour de cette API sont :

- `prices` : prix du changement de propriétaire
- `family` : la valeur `"trade"` indique qu'il s'agit d'un changement de propriétaire
- `planCode` : plan commercial du changement de propriétaire, égal à `"$extension-trade"`
- `pricingMode` : sous-plan commercial du changement de propriétaire

##### Étape 2 : Création du panier et ajout du produit dans le panier

Création du panier :

> [!api]
>
> @api {POST} /order/cart

Ajout du changement de propriétaire dans le panier :

> [!api]
>
> @api {POST} /order/cartServiceOption/domain/{serviceName}

| Corps de requête | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| `serviceName`    | Nom de domaine                                              |
| `cartId`         | Identifiant du panier                                       |
| `duration`       | Durée, toujours **P0Y** pour un changement de propriétaire  |
| `planCode`       | Code récupéré via le GET à l'étape 1 (`"$extension-trade"`) |
| `pricingMode`    | Pricing mode récupéré via le GET                            |
| `quantity`       | Quantité, toujours **1** pour un changement de propriétaire |

##### Étape 3 : Ajout des configurations requises

Pour connaître les configurations requises, il suffit d'appeler l'API suivante :

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
>>     "label": "OWNER_CONTACT",
>>     "type": "/me/contact"
>>   }
>> ]
>> ```

> [!primary]
>
> Ici, le `OWNER_CONTACT` représente une API de "ressource", à savoir `/me/contact`.
> Pour rappel, si vous aviez utilisé l'API `/domain/contact` précédemment, vous pouvez reporter le même identifiant sur l'API `/me/contact`.

On ajoute ensuite le contact voulu via l'API suivante.

> [!api]
>
> @api {POST} /order/cart/{cartId}/item/{itemId}/configuration

| Paramètre | Obligatoire | Défaut | Description                                   |
| --------- | ----------- | ------ | --------------------------------------------- |
| `cartId`  | oui         | ""     | L'identifiant du panier                       |
| `itemId`  | oui         | ""     | L'identifiant de l'item inséré dans le panier |

| Corps de requête | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| `label`          | Configuration `"OWNER_CONTACT" `                                  |
| `value`          | Identifiant du contact `/me/contact/$id` (ex : `/me/contact/123`) |

<!-- prettier-ignore -->
> [!tabs]
> Réponse
>> ```json
>> {
>>   "id": 123456,
>>   "label": "OWNER_CONTACT",
>>   "value": "/me/contact/123"
>> }
>> ```
>>

##### Étape 4 : Visualisation et vérification du bon de commande

Cette étape est sans doute la plus importante du processus de commande et se fait via l'appel suivant :

> [!api]
>
> @api {GET} /order/cart/{cartId}/checkout

Elle permet de récupérer le bon de commande dans sa forme finale sans le générer (c'est un "dry-run").

Cet appel permet également de vérifier que les règles d'éligibilité du propriétaire sont respectées.

##### Étape 5 : Validation de la commande

> [!api]
>
> @api {POST} /order/cart/{cartId}/checkout

| Paramètre                           | Obligatoire | Défaut | Description                                                                                    |
| ----------------------------------- | ----------- | ------ | ---------------------------------------------------------------------------------------------- |
| `autoPayWithPreferredPaymentMethod` | oui         | ""     | Permet de payer automatiquement le bon de commande avec le moyen de paiement par défaut du Nic |
| `waiveRetractationPeriod`           | oui         | ""     | Obligatoire pour un nom de domaine. Il représente la renonciation au droit de rétractation     |

#### Exécution du changement de propriétaire

Une fois le bon de commande validé et payé, un traitement interne est effectué jusqu'à l'apparition d'une tâche de changement de propriétaire nommée `DomainTrade`.
Celle-ci peut alors être retrouvée via l'API suivante :

> [!api]
>
> @api {POST} /domain/{serviceName}/task

Plus de détails sur la gestion des tâches peuvent être trouvés [sur cette page](../api-tasks).

La tâche de `DomainTrade` se charge d'envoyer un e-mail à l'ancien et au nouveau propriétaire pour valider la suite de la procédure.
Ces e-mails contiennent un lien de validation (sécurisé via un token privé).

Une fois ces tokens validés, la tâche peut alors exécuter le changement de propriétaire et mettre à jour le registre et/ou le Whois avec les informations du nouveau propriétaire.
