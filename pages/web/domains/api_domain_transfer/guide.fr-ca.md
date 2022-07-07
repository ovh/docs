---
title: "Transférer un nom de domaine"
slug: api-transfer
excerpt: "Utilisez l'API publique OVHcloud pour transférer vos noms de domaines"
section: "API domaines"
order: 9
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
- [Gestion des contacts d'un nom de domaine](../api-contact)
- [Gestion des règles d'éligibilité](../api-rules)
- [Configurer l'affichage de ses données dans le Whois](../api-whois)
- [Configurer les DNS de son nom de domaine](../api-dns)
- **Transférer un nom de domaine**
<!-- End TOC -->

<!-- Rappel à mettre au début de chaque page CA/US/AU/ASIA/SG (API CA) -->

Nous vous rappelons que les liens vers les routes d'API donnés dans ce document renvoient vers l'API européenne.
Pensez à remplacer [https://eu.api.ovh.com](https://eu.api.ovh.com) par [https://ca.api.ovh.com](https://ca.api.ovh.com) dans les URLs d'API pour pouvoir utiliser l'API avec votre identifiant.

## Transfert entrant

Un transfert entrant correspond au transfert de la gestion d'un nom de domaine depuis un autre registrar vers OVHcloud.
C'est très semblable à la commande d'un nouveau nom de domaine, si ce n'est que le nom de domaine n'est pas affiché comme étant disponible, puisqu'il appartient déjà à quelqu'un.

Si vous êtes le propriétaire du domaine, vous pouvez déléguer sa gestion à OVHcloud comme ceci.

1. **Récupérer le code d'autorisation confidentiel** (parfois appelé "_auth code_" ou "_auth info_") associé à votre nom de domaine depuis le tableau de bord du registrar actuel.

2. **Commander un transfert** : cela consiste en les mêmes étapes que la [commande d'un nouveau nom de domaine](../api-order).

    - Seule l'[offre](../api-order/#fetch-available-offers) diffère, étant donné que l'action disponible sera `transfer` (au lieu de `create`) et le pricing-mode sera `transfer-default`.

    - Pensez à ajouter le code d'autorisation à la commande, en tant que valeur associée à la [configuration](../api-order/#add-configuration) `AUTH_INFO`.

    Quand la commande est terminée, une nouvelle tâche `DomainIncomingTransfer` va être générée.

3. **Surveiller** l'avancement de la tâche `DomainIncomingTransfer` à l'aide de l'[API de gestion des tâches](../api-tasks/#view-pending-tasks).

4. Si le code d'autorisation n'a pas été ajouté à la commande, ou s'il est invalide, la tâche `DomainIncomingTransfer` va produire une erreur.

    Dans ce cas, utilisez l'[API de gestion des tâches](../api-tasks/#fix-and-relaunch-a-task-in-error) pour envoyer le bon code avec la clé `authInfo`, puis relancez la tâche.

Le transfert sera normalement validé par le registre au bout de quelques jours.

## Transfert sortant

On parle de transfert sortant (ou « outgoing transfer ») lorsqu'un client souhaite déléguer la gestion de son nom de domaine depuis OVHcloud vers un autre registrar. Les instructions suivantes décrivent la manière la plus courante de procéder à ce transfert. Cependant, cette procédure peut varier pour quelques ccTLDs comme .lu, .uk, .hk, etc.
Dans ce cas, il convient de se référer à la documentation du registre.

### Domaine lock

Un domain lock est une sécurité permettant d'éviter que votre domaine soit la cible de tentatives de transfert vers un autre registrar.

Cela signifie que si cette option est activée sur votre nom de domaine, ce dernier ne peut être transféré sans avoir été unlocked au préalable.

Vous pouvez vérifier dans quel état se trouve votre nom de domaine en utlisant la route suivante :

> [!api]
>
> @api {GET} /domain/{serviceName}

| Paramètre     | Obligatoire | Défaut | Description                |
| ------------- | ----------- | ------ | -------------------------- |
| `serviceName` | oui         |        | Le nom de domaine concerné |

#### Exemple

```text
GET /domain/xxx.ovh
```

<!-- prettier-ignore -->
> [!tabs]
> Réponse
>> ```json
>> {
>>    "transferLockStatus": "locked",
>>    "parentService": null,
>>    "nameServerType": "hosted",
>>    "offer": "gold",
>>    "whoisOwner": "12345678",
>>    "owoSupported": true,
>>    "lastUpdate": "2022-03-10T14:00:40+01:00",
>>    "glueRecordIpv6Supported": true,
>>    "domain": "xxx.ovh",
>>    "glueRecordMultiIpSupported": true,
>>    "dnssecSupported": true
>>}
>> ```

Pour mettre votre nom de domaine dans un état `unlocked`, utilisez la même route avec une méthode `PUT` en ajoutant le `transferLockStatus` à 'unlocked' :

> [!api]
>
> @api {PUT} /domain/{serviceName}

| Paramètre            | Obligatoire | Défaut | Description                |
| -------------------- | ----------- | ------ | -------------------------- |
| `serviceName`        | oui         |        | Le nom de domaine concerné |
| `transferLockStatus` | oui         |        | L'état souhaité            |

Les actions sur ces routes ne sont pas instantanées, c'est pourquoi en réexécutant un [`GET /domain/{serviceName}`](https://api.ovh.com/console/#/domain/%7BserviceName%7D~GET), vous pouvez voir apparaître un `transferLockStatus` à `unlocking` ou `locking`.

### Authcode

Après avoir *unlocked* votre domaine, il vous faut un authcode afin de garantir que vous en avez la propriété, pour pouvoir procéder au transfert sortant. Vous devrez le fournir à votre nouveau registrar.

La route suivante vous permet de le récupérer :

> [!api]
>
> @api {GET} /domain/{serviceName}/authInfo

| Paramètre     | Obligatoire | Défaut | Description                |
| ------------- | ----------- | ------ | -------------------------- |
| `serviceName` | oui         |        | Le nom de domaine concerné |

Votre nouveau registrar procédera alors au transfert.

> [!primary]
>
> Pour l'extension .uk, se référer à la [documentation dédiée](https://docs.ovh.com/fr/domains/transferer-domaine-couk/).
