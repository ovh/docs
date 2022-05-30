---
title: "Configurer les DNS de son nom de domaine"
slug: api-dns
excerpt: "Utiliser l'API publique OVHcloud pour configurer les DNS de votre nom de domaine"
section: "API domaines"
order: 8
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
- **Configurer les DNS de son nom de domaine**
- [Transférer un nom de domaine](../api-transfer)
<!-- End TOC -->

<!-- Rappel à mettre au début de chaque page CA/US/AU/ASIA/SG (API CA) -->

Nous vous rappelons que les liens vers les routes d'API donnés dans ce document renvoient vers l'API européenne.
Pensez à remplacer [https://eu.api.ovh.com](https://eu.api.ovh.com) par [https://ca.api.ovh.com](https://ca.api.ovh.com) dans les URLs d'API pour pouvoir utiliser l'API avec votre identifiant.

## Introduction

Cette page décrit les informations liées à la résolution DNS des noms de domaine. Cela regroupe :

- la déclaration des serveurs de noms;
- les glue records.

## Types de configuration DNS

La configuration DNS sur un nom de domaine peut être de type `hosted` ou `external`.

Le type `hosted` signifie que la zone DNS est gérée de manière automatique par OVHcloud.
Cela vous permet de ne pas avoir à créer vous même votre propre serveur de noms.
Vous avez bien sûr la main sur le contenu de cette zone, mais le choix des serveurs sur lesquels est hébergée la zone n'est pas modifiable. En contrepartie, OVHcloud s'occupera de la déclaration de ces serveurs auprès du registre ainsi que de la gestion du DNSSEC.

### Récupération du type de configuration DNS d'un nom de domaine <a name="dns-setup-type"></a>

En utilisant l'API suivante, il est possible de récupérer le type de serveur de noms défini sur un nom de domaine.

> [!api]
>
> @api {GET} /domain/{serviceName}

| Paramètre     | Obligatoire | Description                |
| ------------- | ----------- | -------------------------- |
| `serviceName` | oui         | Le nom de domaine concerné |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> {
>>   "parentService": null,
>>   "domain": "test.com",
>>   "offer": "gold",
>>   "dnssecSupported": true,
>>   "owoSupported": true,
>>   "transferLockStatus": "locked",
>>   "whoisOwner": "123456",
>>   "hostSupported": true,
>>   "glueRecordIpv6Supported": true,
>>   "glueRecordMultiIpSupported": true,
>>   "lastUpdate": "2021-11-02T12:01:13+01:00",
>>   "nameServerType": "hosted"
>> }
>> ```

Comme nous pouvons le voir sur l'exemple ci-dessus, le type de configuration DNS est indiqué dans le champ `nameServerType`.

Nous pouvons aussi voir, grâce au champ `hostSupported`, que les hosts sont supportés comme des entités par le registre du nom de domaine. Cela aura son importance par la suite, si vous décidez de déclarer des **glue records** sur votre nom de domaine.

### Mise à jour du type de configuration DNS d'un nom de domaine

L'API suivante permet de mettre à jour certaines configurations du nom de domaine, y compris le type de serveur de noms.

> [!api]
>
> @api {PUT} /domain/{serviceName}

| Paramètre                           | Obligatoire | Description                                       |
| ----------------------------------- | ----------- | ------------------------------------------------- |
| `serviceName`                       | oui         | Le nom de domaine concerné                        |
| `nameServerType` (corps de requête) | oui         | Type de DNS à configurer (`hosted` ou `external`) |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de requête
>> ```js
>> {
>>   "nameServerType": "external" // (hosted ou external)
>> }
>> ```

Comme nous pouvons le voir dans l'exemple ci-dessus, le type de configuration DNS du domaine a été changé à `external`.

Il est important de savoir que :

- Pour passer de `external` à `hosted`, il est nécessaire de disposer d'une zone DNS chez OVHcloud pour pouvoir faire la modification. Il est possible d'en commander une via l'espace client OVHcloud.
- Pour passer de `hosted` à `external`, vous devez faire la modification et ensuite changer la déclaration des serveurs de noms du nom de domaine comme expliqué dans la section suivante.

## Déclaration des serveurs de noms

Lorsque le `nameServerType` d'un nom de domaine est `external`, il est nécessaire de configurer les serveurs de noms auprès du registre pour pouvoir les résoudre.
Si le `nameServerType` est `hosted`, il est toujours possible de consulter les serveurs de noms déclarés sur son nom de domaine via les APIs `GET` ci-dessous.

Attention cependant, il ne faut pas confondre déclaration des serveurs de noms et gestion de la zone DNS.
La gestion de vos zones OVHcloud se fait via la route :

> [!api]
>
> @api {GET} /domain/zone/{zoneName}

### Récupération des serveurs de noms déclarés sur un nom de domaine <a name="name-servers-declared"></a>

En utilisant l'API suivante, il est possible de récupérer les IDs des serveurs de noms définis sur un nom de domaine.

> [!api]
>
> @api {GET} /domain/{serviceName}/nameServer

| Paramètre     | Obligatoire | Description                |
| ------------- | ----------- | -------------------------- |
| `serviceName` | oui         | Le nom de domaine concerné |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> [
>>   33578504,
>>   33578505
>> ]
>> ```

Comme nous pouvons le voir sur l'exemple ci-dessus, cet appel permet de récupérer les identifiants correspondant aux serveurs DNS déclarés sur un nom de domaine.

Pour avoir le détail d'un serveur de noms, il faut appeler l'API suivante :

> [!api]
>
> @api {GET} /domain/{serviceName}/nameServer/{id}

| Paramètre     | Obligatoire | Description                                           |
| ------------- | ----------- | ----------------------------------------------------- |
| `serviceName` | oui         | Le nom de domaine concerné                            |
| `id`          | oui         | L'ID du serveur de noms déclaré sur le nom de domaine |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> {
>>   "id": 33578504,
>>   "host": "ns16.ovh.net",
>>   "ip": null,
>>   "isUsed": true,
>>   "toDelete": false
>> }
>> ```

Cet appel permet d'avoir les détails techniques du serveur de noms comme le `host` ou l'`ip` associée s'il s'agit d'un **glue record** (cf. [déclaration des glue records](#glue-records).
D'autres informations sont également accessibles via l'API suivante :

> [!api]
>
> @api {GET} /domain/{serviceName}/nameServer/{id}/status

| Paramètre     | Obligatoire | Description                                           |
| ------------- | ----------- | ----------------------------------------------------- |
| `serviceName` | oui         | Le nom de domaine concerné                            |
| `id`          | oui         | L'ID du serveur de noms déclaré sur le nom de domaine |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> {
>>   "state": "ok",
>>   "type": "hosted",
>>   "usedSince": "2021-11-02T11:59:13.177558+01:00"
>> }
>> ```

### Modification des serveurs de noms déclarés sur un nom de domaine <a name="modify-name-servers-declared"></a>

Pour rappel, vous ne pouvez modifier la declaration de vos serveurs de noms que si le `nameServerType` du nom de domaine est `external`.
Si c'est bien le cas, plusieurs APIs sont à votre disposition et sont décrites dans cette partie.

L'API suivante permet d'ajouter de nouveaux serveurs de noms sur votre nom de domaine.

> [!api]
>
> @api {POST} /domain/{serviceName}/nameServer

| Paramètre                       | Obligatoire | Description                |
| ------------------------------- | ----------- | -------------------------- |
| `serviceName`                   | oui         | Le nom de domaine concerné |
| `nameServer` (corps de requête) | oui         | Serveurs de noms à ajouter |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de requête
>> ```js
>> {
>>   "nameServer": [
>>     {
>>       // Quand un registre comme eurid (.eu) ne supporte pas les hosts, on déclare directement les glue records ici
>>       "host": "ns1.test.eu",
>>       "ip": "140.2.113.151"
>>     },
>>     {
>>       "host": "ns1.other-domain.eu"
>>     }
>>   ]
>> }
>> ```
> Exemple de réponse
>> ```js
>> {
>>   "id": 414283125,
>>   "status": "todo",
>>   "function": "DomainDnsUpdate",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

Cette route va ajouter les nouveaux serveurs de noms sur le nom de domaine et lancer une tâche de synchronisation `DomainDnsUpdate` auprès du registre. Vous pourrez suivre cette tâche via les [APIs dédiées](../api-tasks/#view-pending-tasks).

Il est aussi possible de remplacer complètement la déclaration des serveurs de noms d'un domaine en passant par l'API suivante :

> [!api]
>
> @api {POST} /domain/{serviceName}/nameServers/update

| Paramètre                       | Obligatoire | Description                                       |
| ------------------------------- | ----------- | ------------------------------------------------- |
| `serviceName`                   | oui         | Le nom de domaine concerné                        |
| `nameServer` (corps de requête) | oui         | Serveurs de noms à declarer sur le nom de domaine |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de requête
>> ```js
>> {
>>   "nameServer": [
>>     { "host": "ns1.other-domain.com" },
>>     { "host": "ns2.other-domain.com" }
>>   ]
>> }
>> ```
> Exemple de réponse
>> ```js
>> {
>>   "id": 414283126,
>>   "status": "todo",
>>   "function": "DomainDnsUpdate",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

Cette route va remplacer la déclaration des serveurs de noms sur le nom de domaine et, comme la route précédente, lancer une tâche de synchronisation `DomainDnsUpdate` auprès du registre que vous pourrez suivre via les [APIs dédiées](../api-tasks/#view-pending-tasks).

Il est aussi possible de supprimer un serveur de noms déclaré sur un nom de domaine via l'API suivante :

> [!api]
>
> @api {DELETE} /domain/{serviceName}/nameServer/{id}

| Paramètre     | Obligatoire | Description                                           |
| ------------- | ----------- | ----------------------------------------------------- |
| `serviceName` | oui         | Le nom de domaine concerné                            |
| `id`          | oui         | L'ID du serveur de noms déclaré sur le nom de domaine |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> {
>>   "id": 414283127,
>>   "status": "todo",
>>   "function": "DomainDnsUpdate",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

Cette route va supprimer le serveur de noms déclaré sur votre nom de domaine et lancer une tâche de mise à jour `DomainDnsUpdate` auprès du registre que vous pourrez suivre via les [APIs dédiées](../api-tasks/#view-pending-tasks).

## Déclaration des glue records <a name="glue-records"></a>

Un **glue record** permet de définir l'**adresse IP** d'un **serveur de noms** de façon à ce que le nom de domaine puisse être résolu dans le cas où ce dernier utilise des **serveurs de noms** hébergés sous ce même nom de domaine.

Par exemple, si vous voulez déclarer le serveur de noms `ns1.test.com` sur le nom de domaine `test.com`, il faut fournir une IP au registre pour que la résolution ne boucle pas.
Si aucune IP n'était fournie, lors de la résolution DNS de `test.com`, le résolveur DNS essaierait de résoudre le serveur de noms `ns1.test.com` en allant chercher la resolution de `test.com`, créant une boucle infinie de résolution.

Il existe deux manières de gérer les glue records déclarés sur un nom de domaine.
En fonction du registre, les glues records sont :

- Soit déclarés via des objets **host** dédiés et manipulés comme des entités à part entière.
    Dans ce cas, il faudra utiliser les APIs dédiées aux **glue records**.

    > [!api]
    >
    > @api {GET} /domain/{serviceName}/glueRecord

- Soit déclarées directement en même temps que les serveurs de noms en fournissant une IP.
    Dans ce cas, il faudra utiliser les APIs des serveurs de noms.

    > [!api]
    >
    > @api {GET} /domain/{serviceName}/nameServer

Pour savoir quelles APIs utiliser, il faut récupérer l'information via [la configuration DNS](#dns-setup-type) du nom de domaine, dans le champ `hostSupported`.

### Récupération des glue records déclarés sur un nom de domaine

Si le champ `hostSupported` de la configuration DNS du nom de domaine est à `false`, la récupération se fait via les [APIs de serveurs de noms](#name-servers-declared) décrites plus haut.

Si le champ `hostSupported` de la configuration DNS du nom de domaine est à `true`, vous pourrez modifier les **hosts** déclarés sur un nom de domaine via les APIs suivantes :

> [!api]
>
> @api {GET} /domain/{serviceName}/glueRecord

| Paramètre     | Obligatoire | Description                |
| ------------- | ----------- | -------------------------- |
| `serviceName` | oui         | Le nom de domaine concerné |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> [
>>   "ns1.test.com",
>>   "ns2.test.com"
>> ]
>> ```

Pour avoir les détails d'un **glue record**, il faut récupérer le host et utiliser l'API suivante :

> [!api]
>
> @api {GET} /domain/{serviceName}/glueRecord/{host}

| Paramètre     | Obligatoire | Description                |
| ------------- | ----------- | -------------------------- |
| `serviceName` | oui         | Le nom de domaine concerné |
| `host`        | oui         | Le host recherché          |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> {
>>   "host": "ns1.test.com",
>>   "ips": [
>>       "140.2.113.151"
>>   ]
>> }
>> ```

### Modification des glue records déclarés sur un nom de domaine

Si le champ `hostSupported` de la configuration DNS du nom de domaine est à `false`, la récupération se fait via les [APIs de serveurs de noms](#modify-name-servers-declared) décrites plus haut.

Si le champ `hostSupported` de la configuration DNS du nom de domaine est à `true`, il est possible de manipuler les **hosts** déclarés sur un nom de domaine via les APIs dédiées aux **glue records**.

#### Créer un nouveau glue record

L'API suivante permet d'ajouter un **glue record** sur votre nom de domaine.

> [!api]
>
> @api {POST} /domain/{serviceName}/glueRecord

| Paramètre                 | Obligatoire | Description                     |
| ------------------------- | ----------- | ------------------------------- |
| `serviceName`             | oui         | Le nom de domaine concerné      |
| `host` (corps de requête) | oui         | Le host du glue record à créer  |
| `ips` (corps de requête)  | oui         | Les adresses IPs du glue record |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de requête
>> ```js
>> {
>>   "host": "ns1.test.com",
>>   "ips": [
>>     "140.2.113.151"
>>   ]
>> }
>> ```
> Exemple de réponse
>> ```js
>> {
>>   "id": 414283128,
>>   "status": "todo",
>>   "function": "DomainHostCreate",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

Cette route va lancer une tâche `DomainHostCreate` pour créer le **host** auprès du registre du nom de domaine. Vous pourrez suivre cette tâche via les [APIs dédiées](../api-tasks/#view-pending-tasks).

> [!warning]
>
> Une fois le **host** créé auprès du registre, il faut le déclarer sur votre nom de domaine via les [APIs des serveurs de nom](#modify-name-servers-declared).

#### Modifier un glue record existant

Il est aussi possible de mettre à jour un **glue record** via l'API suivante :

> [!api]
>
> @api {POST} /domain/{serviceName}/glueRecord/{host}

| Paramètre                       | Obligatoire | Description                |
| ------------------------------- | ----------- | -------------------------- |
| `serviceName`                   | oui         | Le nom de domaine concerné |
| `host`                          | oui         | Le host concerné           |
| `glueRecord` (corps de requête) | oui         | Le glue record modifié     |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de requête
>> ```js
>> {
>>   "host": "ns1.test.`com",
>>   "ips": [
>>     "140.2.113.152"
>>   ]
>> }
>> ```
> Exemple de réponse
>> ```js
>> {
>>   "id": 414283129,
>>   "status": "todo",
>>   "function": "DomainHostUpdate",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

Cette route va lancer une tâche `DomainHostUpdate` pour modifier le **host** auprès du registre du nom de domaine.
Vous pourrez suivre cette tâche via les [APIs dédiées](../api-tasks/#view-pending-tasks).
Vous n'aurez pas besoin de redéclarer le serveur de nom sur le nom de domaine.

Il aussi possible de supprimer un **glue record** mais, pour cela, il faudra commencer par enlever le **host** de la déclaration faite sur le nom de domaine en utilisant les [APIs des serveurs de nom](#modify-name-servers-declared).

#### Supprimer un glue record existant

Vous pouvez appeler l'API suivante pour supprimer le **glue record** :

> [!api]
>
> @api {DELETE} /domain/{serviceName}/glueRecord/{host}

| Paramètre     | Obligatoire | Description                                      |
| ------------- | ----------- | ------------------------------------------------ |
| `serviceName` | oui         | Le nom de domaine concerné                       |
| `host`        | oui         | Le host correspondant au glue record à supprimer |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> {
>>   "id": 414283130,
>>   "status": "todo",
>>   "function": "DomainHostDelete",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

Cette route va lancer une tâche `DomainHostDelete` pour supprimer le **host** auprès du registre du nom de domaine.
Vous pourrez suivre cette tâche via les [APIs dédiées](../api-tasks/#view-pending-tasks).
