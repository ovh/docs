---
title: "Gérer les comptes de service OVHcloud via l'API"
excerpt: "Comment créer et utiliser un token permettant de se connecter à l'ensemble des API de OVHcloud"
updated: 2023-08-24
---

 

## Objectif

Les accès aux produits OVHcloud sont configurables au sein de **politiques d'accès** accessible depuis l'espace client. Cela vous permet de définir de manière globale qui peut accéder à quel produit. Afin de configurer ces accès pour des utilisateurs, consultez notre guide « [Comment utiliser les politiques IAM depuis votre espace client](/pages/account_and_service_management/account_information/iam-policy-ui) ».

Lorsque des accès aux API sont nécessaires depuis des applicatif ou du code, il est nécessaire de générer des identifiants spécifiques afin de ne pas les lier à un utilisateur. En effet, vous ne souhaitez pas réinitialiser vos scripts en production si votre utilisateur change ses identifiants ou quitte votre entreprise.

Ce guide vous expliquera comment générer des identifiants pour les déployer au sein de votre code, ainsi que leur utilisation dans les politiques d'accès de OVHcloud.
Ces identifiants peuvent être utilisés au sein des différentes API de nos produits : 

- API OVHcloud: [Comment s'authentifier sur l'API OVHcloud avec Oauth2](/pages/account_and_service_management/account_information/authenticate-api-with-service-account).
- API OpenStack: [Comment utiliser les comptes de service pour se connecter à OpenStack](/pages/manage_and_operate/iam/authenticate-api-openstack-with-service-account).

## Prérequis

- Un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Savoir configurer des [politiques d'accès IAM depuis votre espace client](/pages/account_and_service_management/account_information/iam-policy-ui).
- Savoir utiliser les [APIs de OVHcloud](/pages/manage_and_operate/api/first-steps).

## En pratique

### Fonctionnement des comptes de services

Les comptes de service OVHcloud sont un couple identifiant/token qui permettent à votre code de s'authentifier auprès des APIs de OVHcloud. Ces identifiants respectent le protocole Oauth2 en suivant le mécanisme d'authentification **client credential**.

Ce couple identifiant/token n'a pas de limite d'utilisation dans le temps. Il est donc idéal pour l'utilisation au sein d'un code déployé en production. Vous pouvez bien entendu révoquer les accès associés à ce compte de service à tout moment en modifiant les politiques d'accès associées ou en supprimant ce compte de service.

Chaque identifiant est associé à un **urn** unique qui permet de lui fournir des droits fins sur les produits OVHcloud en l'associant avec des politiques d'accès. Ces identifiants sont directement rattachés à votre compte racine. Ils ne sont donc pas affectés par des changements d'utilisateurs. 

Comme toutes les API de OVHcloud, la gestion de ces identifiants est soumise à des droits d'accès configurables au sein des politiques d'accès. Retrouvez plus d'informations dans le guide « [Comment utiliser les politiques IAM depuis votre espace client](/pages/account_and_service_management/account_information/iam-policy-ui) ».

### Gérer les comptes de service

Les comptes de service OVHcloud sont configurables au sein des API `/me/api/oauth2/client`.

#### Créer un compte de service

Afin de créer un compte de service, utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /me POST /me/api/oauth2/client
>

Cet appel API permet de créer des identifiants Oauth2 pour plusieurs mécanismes d'authentification. Celui qui nous intéresse ici est **CLIENT_CREDENTIALS**. Ce mécanisme ne nécessite pas d'URL de callback.

Ainsi, vous devez fournir les valeurs suivantes :

- **callbackUrls**: un tableau vide d'url de callback `[]`
- **flow**: "CLIENT_CREDENTIALS"
- **name**: le nom que vous souhaitez fournir à votre identifiant
- **description**: une description de votre identifiant. Nous vous conseillons de décrire l'usage de cet identifiant. Si vous auditez vos accès dans le futur, il est plus simple de le rattacher au nommage de votre applicatif afin de retrouver facilement où cet identifiant est déployé (et quel est l'impact si on change ces accès).

En réponse, l'API vous fournira deux informations :

- **clientId**: identifiant de votre compte de service
- **clientSecret**: token vous permettant de vous authentifier sur nos APIs. Cette information est à conserver en toute sécurité. Avec ces deux identifiants, vous pouvez vous connecter sur ce compte de service et bénéficier des droits qui y sont associés. Conservez bien cette valeur. Il ne sera pas possible de la récupérer par la suite.

Afin de récupérer l'**URN** nécessaire pour éditer une politique d'accès, vous pouvez utiliser l'appel suivant :

> [!api]
>
> @api {v1} /me GET /me/api/oauth2/client/{clientId}
>

Utilisez la valeur de l'identifiant récupéré en résultat de l'appel précédent.<br>
Dans cet appel, vous aurez accès à la valeur **identity** sous forme d'une URN qui vous permettra d'associer ce compte de service à une politique d'accès.

Cette URN est de la forme suivante :

urn:v1:*<eu|ca>*:identity:credential:*<xx11111-ovh>*/oauth2-*<clientId>*

#### Supprimer un compte de service

Si vous n'utilisez plus un compte de service, ou bien que vous voulez supprimer ces accès de manière définitive, utilisez l'appel suivant :

> [!api]
>
> @api {v1} /me DELETE /me/api/oauth2/client/{clientId}
>

> [!warning]
>
> Attention, cette action est définitive. Si vous souhaitez faire un retour en arrière, vous serez contraint de créer un nouveau compte de service et de déployer le couple identifiant/token au sein de votre application.
> 
> Afin de supprimer les accès, nous vous conseillons de dissocier toutes les politiques d'accès de ce compte de service. Cette action est réversible et permet de revenir en arrière en cas d'erreur. Une fois assuré que ce compte de service n'est pas utilisé en production, vous pourrez le supprimer sans crainte.
>

### Associer des accès à un compte de service

Pour modifier les accès d'un compte de service, vous pouvez l'associer à une politique d'accès existante ou en créer une nouvelle. Pour en savoir plus sur la gestion des politiques d'accès, consultez notre guide « [Comment utiliser les politiques IAM via l’API OVHcloud](/pages/account_and_service_management/account_information/iam-policies-api) ».

Pour cet exemple, nous allons partir d'une politique d'accès existante permettant de fournir les accès aux API de gestion des comptes de services. Ci-dessous se trouve un exemple de politique avec les valeurs **xx11111-ovh** et **urn:v1:eu:identity:credential:xx11111-ovh/oauth2-0f0f0f0f0f0f0f0f** qui sont à adapter en fonction de votre configuration.

```json
{
  "description": "Demo for service account guide",
  "identities": [
    "urn:v1:eu:identity:credential:xx11111-ovh/oauth2-0f0f0f0f0f0f0f0f"
  ],
  "name": "Demo-service-account",
  "permissions": {
    "allow": [
      {
        "action": "account:apiovh:me/api/oauth2/client/get"
      },
      {
        "action": "account:apiovh:me/api/oauth2/client/create"
      },
      {
        "action": "account:apiovh:me/api/oauth2/client/edit"
      },
      {
        "action": "account:apiovh:me/api/oauth2/client/delete"
      }
    ]
  },
  "resources": [
    {
        "urn": "urn:v1:eu:resource:account:xx11111-ovh"
    }
  ]
}
```

Cet exemple peut être utilisé directement au sein de l'appel suivant pour créer une nouvelle politique :

> [!api]
>
> @api {v2} /iam POST /iam/policy
>

### Utilisation des comptes de services

Les comptes de services sont disponible dans plusieurs API de nos produits. Pour chaque API, un guide y est consacré :

- [Comment s'authentifier sur l'API OVHcloud avec Oauth2](/pages/account_and_service_management/account_information/authenticate-api-with-service-account)
- [Comment utiliser les comptes de service pour se connecter à OpenStack](/pages/manage_and_operate/iam/authenticate-api-openstack-with-service-account)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.