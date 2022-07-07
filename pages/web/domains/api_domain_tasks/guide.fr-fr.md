---
title: "Gestion des tâches"
slug: api-tasks
excerpt: "Fonctionnement des tâches asynchrones sur les noms de domaines"
section: "API domaines"
order: 4
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
- **Gestion des tâches**
- [Gestion des contacts d'un nom de domaine](../api-contact)
- [Gestion des règles d'éligibilité](../api-rules)
- [Configurer l'affichage de ses données dans le Whois](../api-whois)
- [Configurer les DNS de son nom de domaine](../api-dns)
- [Transférer un nom de domaine](../api-transfer)
<!-- End TOC -->

## Gestion des tâches

La plupart des actions effectuées sur les noms de domaines se traduisent par des modifications chez le registrar (OVHcloud), ainsi que chez le registre.
Par souci de robustesse et de performance, elles sont lancées de manière asynchrone.

Pour permettre le suivi de ces changements asynchrones, les actions sont abstraites sous forme de **tâches**. Lorsqu'une action asynchrone est lancée,
une **tâche** est créée et permet de récupérer un statut, de modifier certaines données en cas d'erreur ou encore de relancer des actions après un échec.

Historiquement, les tâches OVHcloud sont manipulables sous deux chemins d'API distincts :

1. [`/me/task/domain`](https://api.ovh.com/console/#/me/task/domain~GET) et ses sous-routes
2. [`/domain/{serviceName}/task`](https://api.ovh.com/console/#/domain/%7BserviceName%7D/task~GET) et ses sous-routes

Les routes disponibles manipulent les mêmes tâches mais proposent différentes actions.

## Workflow des tâches

Le cycle de vie nominal d'une tâche est le suivant :

- `todo` : la tâche a été créée mais n'est pas en cours de traitement. La plupart des tâches (`DomainCreate`, `DomainRenew`, etc.) sont exécutées dans la minute, et finalisées dans les 5 à 10 minutes.
- `doing` : la tâche est en cours de traitement. Cette phase dure généralement quelques secondes.
- `done` : la tâche a été traitée avec succès. Il s'agit d'un statut final.

Les statuts suivants peuvent aussi survenir dans des cas non nominaux :

- `cancelled` : la tâche a été annulée, soit par le client, soit par OVHcloud. Il s'agit d'un statut final.
- `error` : une erreur est survenue lors de l'exécution de la tâche. Deux cas sont possibles :
    1. Une information fournie par le client est invalide ou manquante : dans ce cas, vous aurez la possibilité de corriger les données problématiques et pourrez relancer la tâche.
    2. Un problème est survenu du côté d'OVHcloud : dans ce cas, vous ne pourrez pas relancer la tâche vous-même. La tâche sera relancée périodiquement de manière automatique, mais vous devrez ouvrir une demande de support si le problème persiste malgré cela.

## Visualiser les tâches en cours <a name="view-pending-tasks"></a>

Pour lister vos tâches, vous pouvez utiliser l'API suivante :

> [!api]
>
> @api {GET} /me/task/domain

| Paramètre  | Obligatoire | Description                                  |
| ---------- | :---------: | -------------------------------------------- |
| `domain`   |     non     | Filtrer les tâches liées à ce nom de domaine |
| `function` |     non     | Type des tâches à récupérer                  |
| `status`   |     non     | Statut des tâches à récupérer                |

Cet appel API retournera la liste des identifiants des tâches correspondant à vos filtres.

Pour récupérer les détails liés à une tâche en particulier, vous pouvez utiliser l'API suivante :

> [!api]
>
> @api {GET} /me/task/domain/{id}

Les champs les plus intéressants dans la réponse sont les suivants :

- `status` : correspond aux statuts présentés dans la section précédente.
- `comment` : contient des informations détaillées sur le statut de la tâche. En particulier, si la tâche est en statut `error`, ce champ contiendra des indications pour vous aider à corriger le problème.
- `canRelaunch` : indique s'il vous est possible de relancer une tâche. Cela vous sera utile si la tâche est en statut `error`.
- `todoDate` : la date et heure approximative de prochaine exécution de la tâche. Celle-ci ne s'applique que si la tâche est en statut `todo`. Il est possible de rapprocher cette date à l'aide de l'API [`POST /me/task/{id}/accelerate`](https://eu.api.ovh.com/console/#/me/task/domain/%7Bid%7D/accelerate~POST), mais cela est rarement nécessaire.

## Corriger et relancer une tâche en erreur <a name="fix-and-relaunch-a-task-in-error"></a>

Si votre tâche est en statut `error` et que le champ `canRelaunch` indique qu'elle peut être relancée, vous devrez probablement corriger certaines données. Des informations générales de correction seront indiquées dans le champ `comment`.

Prenons un exemple concernant une tâche de création (`DomainCreate`) d'un nom de domaine en `.fr` en statut `error` :

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>>```json
>> {
>>   "id": 1000,
>>   "function": "DomainCreate",
>>   "domain": "exemple.fr",
>>   "status": "error",
>>   "comment": "You have to explain in a few words how you'd like to use this domain name (AFNIC will use it to decide if you can register this domain)",
>>   "creationDate": "2022-01-01T12:00:00+01:00",
>>   "todoDate": "2022-01-01T13:00:00+01:00",
>>   "lastUpdate": "2022-01-01T12:40:00+01:00",
>>   "doneDate": null,
>>   "canAccelerate": false,
>>   "canRelaunch": true,
>>   "canCancel": false
>> }
>> ```

Le commentaire explique que l'Afnic (registre des noms de domaine en `.fr`) demande une justification pour l'utilisation de ce nom de domaine. En pratique, cela peut par exemple arriver pour les noms de domaine en `.fr` correspondant au nom d'une ville. Le champ `canRelaunch` indique que le client a la possibilité de relancer cette tâche, et donc implicitement de la corriger.

Pour la corriger, il est possible de lister la liste des champs à modifier à l'aide de l'API suivante :

> [!api]
>
> @api {GET} /me/task/domain/{id}/argument

Dans notre cas d'exemple, elle retournera uniquement un champ :

```json
["legitimacyAfnic"]
```

Vous pourrez lister plus d'informations sur la façon de renseigner ce champ et sur sa valeur courante en utilisant l'API :

> [!api]
>
> @api {GET} /me/task/domain/{id}/argument/{key}

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```json
>> {
>>   "key": "legitimacyAfnic",
>>   "description": "Update legitimacyAfnic with valid content",
>>   "type": "string",
>>   "value": null,
>>   "acceptedValues": null,
>>   "readOnly": false,
>>   "minimumSize": null,
>>   "maximumSize": null,
>>   "fields": null,
>>   "template": null,
>>   "acceptedFormats": null
>> }
>> ```

Pour modifier le champ `legitimacyAfnic`, il faudra utiliser l'API suivante en renseignant sa nouvelle valeur :

> [!api]
>
> @api {PUT} /me/task/domain/{id}/argument/{key}

<!-- prettier-ignore -->
> [!tabs]
> Exemple simplifié de requête
>> ```sh
>> curl -XPUT /me/task/domain/exemple.fr/argument/legitimacyAfnic -d '{
>>   "value": "Je suis le maire de la ville Exemple."
>> }'
>> ```

Une fois la valeur modifiée, vous pourrez si vous le souhaitez réutiliser l'API :

> [!api]
>
> @api {GET} /me/task/domain/{id}/argument/{key}

pour vérifier qu'elle a bien été prise en compte.

Enfin, il ne restera plus qu'à relancer la tâche via l'API :

> [!api]
>
> @api {POST} /me/task/domain/{id}/relaunch

Celle-ci devrait s'exécuter dans les minutes à venir et ainsi se terminer correctement.

## Types de tâches

Il existe un grand nombre de types de tâches différentes (plus d'une trentaine), toutes ayant leurs spécificités. En tant que client, vous n'aurez que rarement à intervenir sur celles-ci. Les plus communes sont cependant les suivantes :

- `DomainCreate` : création d'un nom de domaine. Les erreurs seront généralement liées aux conditions d'éligibilité, notamment dans le cas des ccTLDs.
- `DomainIncomingTransfer`, `DomainAfterMarket` : transfert d'un nom de domaine depuis un autre registrar ou un marché secondaire. Les erreurs seront généralement liées à la demande de l'`auth code` permettant la validation du transfert.
- `DomainTrade` : changement de contact propriétaire. Les erreurs seront généralement liées à des incompatibilités d'éligibilité sur le contact receveur.
- `DomainContactUpdate` : modification des informations d'un contact. Les erreurs seront généralement liées à des informations sémantiquement invalides, à des erreurs de formatage ou encore à des incompatibilités d'éligibilité.
- `DomainDnsUpdate` : changements liés aux configurations DNS. Les erreurs seront généralement liées à des serveurs DNS invalides ou à la configuration des _glue records_.
- `DomainDsUpdate` : changements liés aux clés DNSSEC. Les erreurs seront généralement liées à des problèmes de synchronisation entre notre système et le registre.
