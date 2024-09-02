---
title: "Comment créer une application web en utilisant l'API publique OVHcloud"
excerpt: "Découvrez comment utiliser l'API publique OVHcloud pour créer une application web"
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

## Récupération des informations de service

La première étape consiste à récupérer le `serviceName`, un identifiant unique pour votre service d'hébergement web. Vous en aurez besoin pour la plupart des appels API suivants.

> [!api]
>
> @api {v1} GET /hosting/web/

Cette commande renvoie une liste de vos services d'hébergement web. Chaque entrée de la liste est un `serviceName`.

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```json
>> [
>>   "example.cluster01.hosting.ovh.net",
>>   "example2.cluster02.hosting.ovh.net"
>> ]
>> ```

## Attacher un domaine

Une fois que vous avez récupéré le `serviceName`, vous pouvez attacher un domaine à votre service d'hébergement web.

> [!api]
>
> @api {v1} POST /hosting/web/{serviceName}/attachedDomain

| Paramètre     | Obligatoire | Défaut              | Description                         |
| ------------- | ----------- | ------------------- | ----------------------------------- |
| serviceName   | oui         |                     | Nom du service                      |
| domainName    | non         | ""                  | Domaine à lier                      |
| path          | non         | ""                  | Chemin où seront stockés les fichiers web|
| ssl           | non         | ""                  | Option pour activer le SSL pour le domaine|

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```json
>> {
>>  "doneDate": "2024-08-22T08:13:50.740Z",
>>  "function": "abuse/close",
>>  "id": 0,
>>  "lastUpdate": "2024-08-22T08:13:50.740Z",
>>  "objectId": "string",
>>  "objectType": "Abuse",
>>  "startDate": "2024-08-22T08:13:50.740Z",
>>  "status": "cancelled"
>> }
>> ```

## Générer des certificats SSL

Vous pouvez facilement configurer des certificats SSL pour sécuriser votre site web.

> [!api]
>
> @api {v1} POST /hosting/web/{serviceName}/ssl

| Paramètre     | Obligatoire | Défaut              | Description                         |
| ------------- | ----------- | ------------------- | ----------------------------------- |
| serviceName   | oui         |                     | Nom du service                      |
| certificate   | non         | ""                  | Certificat SSL à installer          |
| chain         | non         | ""                  | Chaîne de certificats utilisée pour valider le certificat SSL |
| key           | non         | ""                  | Clé privée associée au certificat SSL|

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```json
>> {
>>  "isReportable": false,
>>  "provider": "COMODO",
>>  "regenerable": false,
>>  "status": "created",
>>  "taskId": 0,
>>  "type": "CUSTOM"
>> }
>> ```

## Gérer les bases de données

Les API Web Hosting d'OVHcloud vous permettent de gérer vos bases de données.

### Créer une base de données

> [!api]
>
> @api {v1} POST /hosting/web/{serviceName}/database

| Paramètre     | Obligatoire | Défaut              | Description                         |
| ------------- | ----------- | ------------------- | ----------------------------------- |
| serviceName   | oui         |                     | Nom du service                      |
| capabilitie   | oui         | ""                  | Capacités de la BDD. Valeurs : extraSqlPerso┃local┃privateDatabase┃sqlLocal┃sqlPerso┃sqlPro          |
| user         | oui         | ""                  | Nom d'utilisateur de la BDD. Doit être en minuscule et commencer par votre identifiant d'hébergement web |
| password           | non         | ""                  | Mot de passe de la BDD|
| quota              | non         | ""                  | Espace alloué. Valeurs : 25┃100┃200┃256┃400┃512┃800┃1024|
| type           | oui         | ""                  | Type de la BDD. Valeurs : mariadb┃mysql┃postgresql┃redis|
|  version           | non         | ""                  | Version de la BDD|

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```json
>> {
>> "doneDate": "2024-08-22T09:24:35.206Z",
>> "function": "string",
>> "id": 0,
>> "lastUpdate": "2024-08-22T09:24:35.206Z",
>> "objectId": "string",
>> "objectType": "Abuse",
>> "startDate": "2024-08-22T09:24:35.206Z",
>> "status": "cancelled"
>> }
>> ```

### Lister les bases de données existantes

> [!api]
>
> @api {v1} GET /hosting/web/{serviceName}/database

| Paramètre     | Obligatoire | Défaut              | Description                         |
| ------------- | ----------- | ------------------- | ----------------------------------- |
| serviceName   | oui         |                     | Nom du service                      |
| mode          | oui         |                     | Valeurs autorisées : besteffort ┃ classic ┃ module                      |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```json
>> [
>>  "example.mysql.db",
>>  "example2.mysql.db",
>> ]
>> ```

