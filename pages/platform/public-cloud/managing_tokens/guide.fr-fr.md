---
title: 'Gestion des tokens'
excerpt: 'Découvrez comment utiliser les token via API Keystone'
slug: gestion-des-tokens
legacy_guide_number: 1872
section: 'Actions via API et lignes de commande'
---

**Dernière mise à jour le 16/04/2020**

## Objectif

** Découvrez comment configurer les connexions aux API keystone sur votre service à l'aide des tokens.**

> [!primary]
>
> Les informations détaillées ici sont valables pour la version 3.0 de l'API de
> Keystone.
> 

## En pratique

### Définitions
- Endpoint : Adresse HTTP pointant directement sur une API d'un service. par exemple [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/){.external} pour le endpoint d'authentification ou [https://image.compute.gra1.cloud.ovh.net/](https://image.compute.gra1.cloud.ovh.net/){.external} pour le endpoint de gestion des images de la zone GRA1.
- Token : Chaine de caractère unique liée à une authentification et à des droits d'accès. Un token est demandé par l'utilisateur en fournissant ses credentials (informations de login) à l'API d'authentification. Il est généré et fourni avec une durée de validité limitée de 24h. Un token peut être "scoped" ou "unscoped", c'est à dire qu'il peut être directement lié à un tenant ou n'être lié à aucun tenant.


### Principe global
La plupart des requêtes soumises aux APIs OpenStack doivent répondre à un mécanisme d'autorisation. Ce mécanisme fonctionne par l'obtention de token (jeton en français) et validation de celui ci. Voici les grandes lignes du fonctionnement d'un appel depuis l'authentification jusqu'à l'exécution de l'appel.

- Demande de création de token auprès du endpoint d'authentification avec les credentials
- Requête sur le endpoint du service désiré (storage, compute, network, ...) en fournissant le token en paramètre
- L'API du service récupère le token et demande la vérification de validité auprès du service d'authentification
- Si la validité est vérifiée, l'appel est pris en compte et exécuté

Comme les tokens ont une durée de validité définie, ils expirent et doivent être renouvelés chaque fois que nécessaire.

De la même manière, si un token doit être révoqué avant sa date d'expiration, il est possible de le faire via l'API.

Pour plus d'information, consultez la documentation d'[OpenStack de l'API](https://docs.openstack.org/keystone/train/api_curl_examples.html){.external}.


### Operations manuelles
Les opérations qui suivent peuvent être effectuées manuellement, elles sont généralement utilisées à des fins pédagogiques ou de debugging.

Il est nécessaire de charger l'environnement à l'aide du fichier openrc (voir le guide).

Dans notre exemple, nous souhaitons obtenir les informations de metadata d'un objet stocké grâce à l'offre Public Cloud Storage. Les étapes sont :

- Demande de création d'un token
- Récupération des variables token ID et endpoint publicURL
- Requête sur l'objet avec les informations récupérées

L'outil en ligne de commande cURL permet de construire des requêtes de toutes pièce.


#### Étape 1 : Demande de creation d'un token

```bash
curl -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "name": "'$OS_TENANT_NAME'", "domain": { "id": "default" } } } } }' | python -mjson.tool
```

La réponse du serveur ressemble à ceci :


```json
 {
  "token": {
    "is_domain": false,
    "methods": [
      "password"
    ],
    "roles": [
      {
        "id": "9543e89aeb484aee8ec7d01e87223b16",
        "name": "objectstore_operator"
      }
    ],
    "is_admin_project": false,
    "project": {
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE PROJECT>",
      "name": "<NAME OF THE PROJECT>"
    },
    "catalog": [
      {
        "endpoints": [
          {
            "url": "https://network.compute.sbg1.cloud.ovh.net/",
            "interface": "internal",
            "region": "SBG1",
            "region_id": "SBG1",
            "id": "075839111e7a41f1bb458926e5f04cec"
          },
          [...]
        ],
        "type": "network",
        "id": "0be6ed3dce244b8295ff643739a86809",
        "name": "neutron"
      },
      [...]
    ],
    "expires_at": "2020-01-17T14:53:32.000000Z",
    "user": {
      "password_expires_at": null,
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE USER>",
      "name": "<NAME OF THE USER>"
    },
    "audit_ids": [
      "IuNOR-lKQ9GJGQd8taWBnQ"
    ],
    "issued_at": "2020-01-16T14:53:32.000000Z"
  }
}
```


#### Étape 2 : Recuperation des variables token ID et endpoint publicURL
Les deux informations sont disponibles dans la sortie de la commande précédente.

Pour le endpoint publicURL, il faut rechercher dans la section "object-store" et la région qui convient, ici "SBG".


```bash
export endpoint="https://storage.sbg.cloud.ovh.net/v1/AUTH_9ea...ff0"
```

C'est l'adresse du endpoint du service d'object storage qui va permettre de requêter les informations sur l'objet.


```bash
export token=$(curl -is -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "name": "'$OS_TENANT_NAME'", "domain": { "id": "default" } } } } }' | grep '^X-Subject-Token' | cut -d" " -f2)
```

Ce token est maintenant l'élément d'authentification qui sera utilisé pour la requête suivante.


#### Étape 3 : Requête sur l'objet avec les informations récupérées

```bash
curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```

- -X GET : méthode HTTP GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg : adresse de l'objet
- -H "X-Auth-Token: $token" : élément d'authentification
- -I : option curl pour ne récupérer que les metadatas

La réponse ressemble à ceci :


```bash
HTTP/1.1 200 OK
Content-Length: 190046
Content-Type: image/jpeg
Accept-Ranges: bytes
Last-Modified: Thu, 24 Sep 2015 14:20:11 GMT
Etag: c93e12530b66f121d4bd5a6ae096ee77
X-Timestamp: 1443104410.15437
X-Object-Meta-Mtime: 1424095540.000000
X-Trans-Id: 95CAB26E:D200_052711B1:01BB_560D4CE7_1631931:2BB4
Date: Thu, 01 Oct 2015 15:10:31 GMT
Connection: close
```


### Gestion automatique : librairie et SDK
Il est fortement recommandé d'utiliser les librairies permettant la gestion transparente des tokens. De cette manière, en fournissant simplement les credentials de connexion à la librairie, les tokens seront automatiquement générés, utilisés et renouvelés sans devoir en faire la gestion au niveau applicatif.

Il existe de nombreuses librairies dans les différents langages. Consultez [la liste officielle pour plus d'informations](https://wiki.openstack.org/wiki/SDKs){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>