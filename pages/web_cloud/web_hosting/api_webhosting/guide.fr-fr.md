---
title: "Comment créer et gérer une application web en utilisant l'API publique OVHcloud"
excerpt: "Découvrez comment utiliser l'API publique OVHcloud pour créer et gérer une application web"
updated: 2024-09-05
---

## Objectif

Ce guide vous explique comment utiliser l'API publique OVHcloud pour créer et gérer une application web sur votre hébergement. Vous apprendrez à effectuer des opérations clés telles que rattacher des domaines, gérer des bases de données ou encore la configuration de certificats SSL.

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting).
- Connaissances de base en API REST.
- Être connecté aux API OVHcloud. Consultez notre guide de [Premiers pas avec les API OVHcoud](/pages/manage_and_operate/api/first-steps).

> [!warning]
>
> L'utilisation des APIs OVHcloud nécessite des connaissances avancées dans ce domaine. Si vous éprouvez des difficultés, contactez les [partenaires OVHcloud](/links/partner).
>

## En pratique

### Récupération des informations de service

La première étape consiste à récupérer le `serviceName`, un identifiant unique pour votre service d'hébergement web. Vous en aurez besoin pour la plupart des appels API suivants.

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/

Cette commande renvoie une liste de vos services d'hébergement web. Chaque entrée de la liste est un `serviceName`.


**Exemple de réponse** :

```json
[
  "example.cluster01.hosting.ovh.net",
  "example2.cluster02.hosting.ovh.net"
]
```

### Attacher un domaine

Attachez un domaine à votre service d'hébergement web.

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/attachedDomain

| Paramètre               | Obligatoire | Description       |
|-------------------------|-------------|-------------------|
| serviceName             | oui         | Nom du service       |
| bypassDNSConfiguration  | non         | Si activé, la zone DNS ne sera pas mise à jour    |
| cdn                     | non         | Indique si le domaine est lié au CDN de l'hébergement. Valeurs autorisées : active┃none |
| domain                  | non         | Domaine à lier      |
| firewall                | non         | Indique si le pare-feu est actif pour ce domaine. Valeurs autorisées : active┃none |
| ipLocation              | non         | Définit la localisation IP associée au domaine. Valeurs autorisées : BE┃CA┃CZ┃DE┃ES┃FI┃FR┃IE┃IT┃LT┃NL┃PL┃PT┃UK |
| ownLog                  | non         | Domaine pour séparer les logs    |
| path                    | non         | Chemin où seront stockés les fichiers web      |
| runtimeId               | non         | Identifiant de configuration runtime utilisé sur ce domaine   |
| ssl                     | non         | Option pour activer le SSL pour le domaine   |

**Exemple de réponse** :

```json
{
 "doneDate": "2024-08-22T08:13:50.740Z",
 "function": "abuse/close",
 "id": 0,
 "lastUpdate": "2024-08-22T08:13:50.740Z",
 "objectId": "string",
 "objectType": "Abuse",
 "startDate": "2024-08-22T08:13:50.740Z",
 "status": "cancelled"
}
```

### Générer des certificats SSL

Configurez et gérez des certificats SSL pour sécuriser votre site web.

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/ssl

| Paramètre     | Obligatoire | Description                         |
| ------------- | ----------- | ----------------------------------- |
| serviceName   | oui         | Nom du service                      |
| certificate   | non         | Certificat SSL à installer          |
| chain         | non         | Chaîne de certificats utilisée pour valider le certificat SSL |
| key           | non         | Clé privée associée au certificat SSL|

**Exemple de réponse** :

```json
{
 "isReportable": false,
 "provider": "COMODO",
 "regenerable": false,
 "status": "created",
 "taskId": 0,
 "type": "CUSTOM"
}
```

### Gérer les bases de données

Les API Web Hosting d'OVHcloud vous permettent également de gérer vos bases de données.

#### Créer une base de données

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/database

| Paramètre     | Obligatoire |  Description                         |
| ------------- | ----------- | -----------------------------------  |
| serviceName   | oui         |             Nom du service           |
| capabilitie   | oui         | Capacités de la BDD. Valeurs : extraSqlPerso┃local┃privateDatabase┃sqlLocal┃sqlPerso┃sqlPro         |
| user         | oui         |  Nom d'utilisateur de la BDD. Doit être en minuscule et commencer par votre identifiant d'hébergement web                                        |
| password           | non                  | Mot de passe de la BDD |
| quota              | non                  | Espace alloué. Valeurs : 25┃100┃200┃256┃400┃512┃800┃1024|
| type               | oui                  | Type de la BDD. Valeurs : mariadb┃mysql┃postgresql┃redis|
|  version           | non                  | Version de la BDD      |

**Exemple de réponse** :

```json
{
"doneDate": "2024-08-22T09:24:35.206Z",
"function": "string",
"id": 0,
"lastUpdate": "2024-08-22T09:24:35.206Z",
"objectId": "string",
"objectType": "Abuse",
"startDate": "2024-08-22T09:24:35.206Z",
"status": "cancelled"
}
```

#### Lister les bases de données existantes

Listez toutes les bases de données associées à votre service d'hébergement web.

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/database

| Paramètre     | Obligatoire |  Description                         |
| ------------- | ----------- |  ----------------------------------- |
| serviceName   | oui         |        Nom du service                |
| mode          | oui         |        Valeurs autorisées : besteffort ┃ classic ┃ module     |

**Exemple de réponse** :

```json
[
 "example.mysql.db",
 "example2.mysql.db"
]
```

### Gérer les modules

#### Récupérer une liste de modules

Obtenez une liste de modules disponibles que vous pouvez installer sur votre hébergement web.

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/moduleList

| Paramètre     | Obligatoire    | Description                         |
| ------------- | -----------    | ----------------------------------- |
| active        | non            | Filtre les modules activés ou désactivés |
| branch        | non            | Filtre les modules en fonction de leur version. Valeurs autorisées : old ┃ stable ┃ testing |
| latest         | non           | Filtre permettant d'afficher les modules correspondant à la version la plus récente |

**Exemple de réponse** :

```json
[
 195,
 184,
 38,
 176
]
```

#### Récupérer les informations d'un module

Obtenez les détails d'un module spécifique installé sur votre hébergement web.

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/moduleList/{id}

| Paramètre     | Obligatoire | Description                         |
| ------------- | ----------- | ----------------------------------- |
| id            | oui         |        Identifiant du module        |

**Exemple de réponse** :

```json
{
 "keywords": [
   "gallery"
 ],
 "adminNameType": "string",
 "author": "OVH",
 "branch": "old",
 "id": 195,
 "size": {
   "value": 0,
   "unit": "B"
 },
 "name": "myname",
 "upgradeFrom": [],
 "language": [
   "en",
   "fr",
   "de",
   "es",
   "pl"
 ],
 "version": "1.4.2.2",
 "active": false,
 "languageRequirement": {
   "value": "php",
   "unit": "supported versions: ''\nnon supported versions: '8+'"
 },
 "latest": true
}
```

### Installer un nouveau module

Installez un nouveau module sur votre service d'hébergement web.

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/module

| Paramètre     | Obligatoire |  Description                         |
| ------------- | ----------- | -----------------------------------  |
| serviceName   | oui         | Nom du service                       |
| moduleId      | oui         | Identifiant du module à installer    |
| adminName     | non         | Nom de l'administrateur              |
| adminPassword | non         | Mot de passe du compte administrateur |
| domain        | non         | Nom de domaine où le module sera déployé  |
| language      | non         | Langue de l'installation du module   |
| path          | non         | Chemin sur le serveur où le module sera installé  |
| dependencies -> name        | non       | Nom du service dépendant     |
| dependencies -> password    | non   | Mot de passe pour le service dépendant   |
| dependencies -> port        | non  | Port de connexion du service       |
| dependencies -> prefix      | non    | Préfixe utilisé dans la configuration du service    |
| dependencies -> server      | non       | Adresse du serveur du service dépendant     |
| dependencies -> type        | non      | Type de service (ex. : MySQL)    |
| dependencies -> user        | non      | Nom d'utilisateur pour le service dépendant   |

**Exemple de réponse** :

```json
{
"doneDate": "2024-08-22T09:24:35.206Z",
"function": "string",
"id": 0,
"lastUpdate": "2024-08-22T09:24:35.206Z",
"objectId": "string",
"objectType": "Abuse",
"startDate": "2024-08-22T09:24:35.206Z",
"status": "cancelled"
}
```

### Gérer les utilisateurs FTP

Gérez les utilisateurs FTP/SSH de votre hébergement web pour faciliter les accès et les configurations.

#### Créer un nouvel utilisateur FTP/SSH

Créez un nouvel utilisateur FTP ou SSH pour accéder à votre hébergement web.

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/moduleList

| Paramètre     | Obligatoire | Description                         |
| ------------- | ----------- | ----------------------------------- |
| serviceName   | oui         | Nom du service     |
| home          | oui         | Répertoire d'accueil|
| login         | oui         | Nom d'utilisateur |
| password      | oui         | Mot de passe |
| sshState      | non    | Détermine l'état d'accès SSH pour l'utilisateur. Valeurs autorisées : active ┃none ┃sftponly |

**Exemple de réponse** :

```json
{
"doneDate": "2024-08-22T09:24:35.206Z",
"function": "string",
"id": 0,
"lastUpdate": "2024-08-22T09:24:35.206Z",
"objectId": "string",
"objectType": "Abuse",
"startDate": "2024-08-22T09:24:35.206Z",
"status": "cancelled"
}
```

#### Lister les utilisateurs FTP/SSH

Listez tous les utilisateurs FTP/SSH existants sur votre service d'hébergement.

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/user

| Paramètre     | Obligatoire | Description                         |
| ------------- | ----------- | ----------------------------------- |
| serviceName   | oui         | Nom du service                      |
| home          | non         | Filtre les utilisateurs en fonction de leur répertoire principal |
| login         | non         | Filtre les utilisateurs en fonction de leur nom d'utilisateur    |

**Exemple de réponse** :

```json
[
 "user1",
 "user2",
 "user3",
 "user4"
]
```

### Restaurer une base de données

Créez, listez et restaurez des sauvegardes de bases de données pour votre site web.

#### Créer une sauvegarde d'une base de données

Créez une sauvegarde de votre base de données pour la restaurer en cas de besoin.

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/database/{name}/dump

| Paramètre     | Obligatoire | Description                 |
| ------------- | ----------- | ----------------------------------- |
| serviceName   | oui   | Nom du service    |
| name          | oui     | Nom de la base de données    |
| date          | oui     | Type de sauvegarde. Valeurs autorisées : daily.1┃now┃weekly.1   |
| sendEmail     | non  | Si ce paramètre est activé, un e-mail est envoyé lorsque la sauvegarde est disponible   |

**Exemple de réponse** :

```json
{
"doneDate": "2024-08-22T09:24:35.206Z",
"function": "string",
"id": 0,
"lastUpdate": "2024-08-22T09:24:35.206Z",
"objectId": "string",
"objectType": "Abuse",
"startDate": "2024-08-22T09:24:35.206Z",
"status": "cancelled"
}
```

#### Lister les sauvegardes de bases de données disponibles

Listez toutes les sauvegardes disponibles pour vos bases de données.

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/database/{name}/dump

| Paramètre     | Obligatoire | Description                      |
| ------------- | ----------- | -------------------------------- |
| serviceName   | oui         | Nom du service                   |
| name          | oui         | Nom de la base de données        |
| creationDate.from   | non   | Filtre les sauvegardes créées à partir de cette date     |
| creationDate.to     | non   | Filtre les sauvegardes créées jusqu'à cette date         |
| deletionDate.from   | non   | Filtre les sauvegardes supprimées à partir de cette date       |
| deletionDate.to     | non   | Filtre les sauvegardes supprimées jusqu'à cette date        |
| type               | non   | Filtre les sauvegardes selon leur type. Valeurs autorisées : daily.1┃now┃weekly.1|

**Exemple de réponse** :

```json
[
 1,
 12
]
```

#### Restaurer une sauvegarde spécifique d'une base de données

Restaurez une sauvegarde spécifique de votre base de données en cas de problème.

> [!api]
>
> @api {v1} /hosting/web POST /hosting/web/{serviceName}/database/{name}/dump/{id}/restore

| Paramètre     | Obligatoire | Description                         |
| ------------- | ----------- | ----------------------------------- |
| serviceName   | oui         | Nom du service                      |
| name          | oui         | Nom de la base de données           |
| id            | oui         | Identifiant de la sauvegarde        |

**Exemple de réponse** :

```json
{
"doneDate": "2024-08-22T09:24:35.206Z",
"function": "string",
"id": 0,
"lastUpdate": "2024-08-22T09:24:35.206Z",
"objectId": "string",
"objectType": "Abuse",
"startDate": "2024-08-22T09:24:35.206Z",
"status": "cancelled"
}
```

## Conclusion

Ce guide vous a présenté les principales requêtes API pour gérer votre hébergement web OVHcloud, comme l'attachement de domaines, la gestion des certificats SSL et des bases de données. 

Il existe cependant de nombreux autres appels API disponibles, que vous pouvez explorer en fonction de vos besoins spécifiques. Pour plus d'options et de fonctionnalités, vous pouvez consulter la section « [/hosting/web](https://eu.api.ovh.com/console/?section=%2Fhosting%2Fweb&branch=v1#get-/hosting/web) » de l'API OVHcloud.

## Aller plus loin

[Commander un nom de domaine via API](/pages/web_cloud/domains/api_domain_order)

Échangez avec notre [communauté d'utilisateurs](/links/community).