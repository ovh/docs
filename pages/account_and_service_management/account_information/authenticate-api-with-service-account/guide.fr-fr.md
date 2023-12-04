---
title: Comment utiliser les comptes de service pour se connecter aux API de OVHcloud
excerpt: "Comment se connecter aux API avec ses comptes de service OVHcloud grâce au protocole Oauth2"
updated: 2023-08-24
---

 

## Objectif

Pour réaliser des automatisations sur vos infrastructures, vous devez fournir des identifiants au code qui s'en charge. Avec les comptes de service OVHcloud, il est possible d'avoir un seul identifiant par script pour l'utilisation des différentes API proposées par les produits de OVHcloud ([API de OVHcloud](/pages/manage_and_operate/api/console-preview), [API OpenStack](/pages/public_cloud/compute/starting_with_nova), etc. )

**Ce guide vous détaille comment utiliser les comptes de service afin de vous connecter aux APIs de OVHcloud.**

Cela peut vous permettre de :

- commander ou résilier automatiquement certains produits ;
- gérer votre facturation ;
- gérer les infrastructures de vos produits ;
- fournir à votre monitoring des informations issues de nos infrastructures ;
- etc...

Les comptes de service fonctionnent avec le flow *client credentials* de Oauth2. Cela vous permet donc d'intégrer l'utilisation de l'API OVHcloud avec tous les outils respectant ce protocole. Les versions v1 et v2 de l'API OVHcloud sont compatibles avec les flows *client credentials* et *authorization code* de Oauth2.

Oauth2 permet aussi de développer des applications tierces se connectant aux API de OVHcloud, sans collecter les identifiants. Si vous souhaitez créer vos propres applications exploitant les informations de comptes OVHcloud, vous pouvez utiliser le flow *authorization code* qui n'est pas décrit dans ce guide.

## Prérequis

- Un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Savoir configurer des [politiques d'accès via API](/pages/account_and_service_management/account_information/iam-policies-api).
- Savoir utiliser les [APIs de OVHcloud](/pages/manage_and_operate/api/first-steps).
- Avoir créé un [compte de service via API](/pages/manage_and_operate/api/manage-service-account).

## En pratique

A des fins d'exemple dans ce guide, nous utiliserons le compte de service `urn:v1:eu:identity:credential:xx11111-ovh/oauth2-0f0f0f0f0f0f0f0f` pour accéder à la configuration de l'hébergement web `urn:v1:eu:resource:webHosting:xxxxxxx.cluster001.hosting.ovh.net`. N'oubliez pas de remplacer les variables par celles correspondant à vos besoins.

### Associer des droits d'accès API à son compte de service

Avant toute chose, il faut que notre compte de service puisse accèder aux APIs utiles. OVHcloud fournit des droits pour chaque appel d'API. Pour trouver quelles sont les autorisations nécessaires, vous pouvez vous rendre sur la console des API de OVHcloud :

- [Console de l'API EU](https://eu.api.ovh.com/console-preview/)
- [Console de l'API CA](https://ca.api.ovh.com/console-preview/)

Pour chaque appel d'API, vous trouverez le nom de l'action correspondante à la ligne **IAM actions**.
Par exemple, pour l'appel */v1/hosting/web*, le nom de l'action nécessaire est *webHosting:apiovh:get* comme vous pouvez l'observer dans l'exemple suivant :

![API](images/actions-in-console.png){.thumbnail}

Vous pouvez aussi utiliser l'opérateur **\*** pour désigner un sous ensemble de droits. Dans notre exemple, nous souhaitons fournir tous les droits sur les API liées au produit **Hébergements Web**. Nous utiliserons ainsi l'action **webHosting:**

Dans le cadre de notre exemple, nous avons créé la politique d'accès suivante : 

```json
{
  "name": "Demo-service-account",
  "description": "Demo for service account guide with webhosting",
  "identities": [
    "urn:v1:eu:identity:credential:xx11111-ovh/oauth2-0f0f0f0f0f0f0f0f"
  ],
  "resources": [
    {
      "urn": "urn:v1:eu:resource:webHosting:xxxxxxx.cluster001.hosting.ovh.net"
    }
  ],
  "permissions": {
    "allow": [
      {
        "action": "webHosting:*"
      }
    ]
  }
}
```

### Récupérer un token d'API à partir d'un compte de service

Afin de récupérer un token d'API, vous devez effectuer l'appel HTTP suivant :

```bash
curl --request POST \
  --url 'https://www.ovh.com/auth/oauth2/token' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data grant_type=client_credentials \
  --data client_id=0f0f0f0f0f0f0f0f \
  --data client_secret=xxxxx \
  --data scope=all
```

En modifiant les données suivantes: 

- **client_id**: identifiant de votre compte de service
- **client_secret**: token de votre compte de service

En fonction de la localisation de votre API, vous devez utiliser l'URL suivante : 

- **API EU**: `https://www.ovh.com/auth/oauth2/token`
- **API CA**: `https://www.ovh.ca/auth/oauth2/token`

Lors de cet appel d'API, vous recevrez une réponse respectant le format suivant:

```json
{
  "access_token":"your-api-token",
  "token_type":"Bearer",
  "expires_in":3599,
  "scope":"all"
}
```

Conservez le token contenu dans le champ **access_token**. Il sera nécessaire pour authentifier vos appels d'API.

Pour obtenir des informations sur votre hébergement web, vous pouvez désormais faire un appel sur 

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/xxxxxxx.cluster001.hosting.ovh.net
>

Pour ce faire, vous devez fournir le token récupéré précédemment en header de votre requête de la façon suivante :

```bash
curl -i -X GET "https://{eu|ca}.api.ovh.com/v1/hosting/web/xxxxxxx.cluster001.hosting.ovh.net" \
  -H "accept: application/json"\
  -H "authorization: your-api-token" 
```

Avec cette politique d'accès, vous n'avez accès qu'aux API de webhosting. Les autres API vous retourneront l'erreur HTTP 403 suivante :

```json
{
    "class":"Client::Forbidden",
    "message":"User not granted for this request"
}
```

Si vous souhaitez utiliser ces autres API, vous devez modifier votre politique d'accès pour lui accorder les droits correspondants.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
