---
title : "Comment se connecter à l'espace client OVHcloud en utilisant IAM"
excerpt: Découvrez comment octroyer les droits minimums nécessaires pour vous connecter à votre espace client
updated: 2023-07-03
---

> [!warning]
>
> Cette fonctionnalité est actuellement en version bêta. Plus d’informations ici : <https://labs.ovhcloud.com/en/>
>

## Objectif

Ce guide explique comment fournir à un utilisateur les droits essentiels lui permettant de se connecter à l'espace client OVHcloud.

## Prérequis

- Disposer d'un [compte OVHcloud](/pages/account/customer/ovhcloud-account-creation)
- Savoir [gérer les utilisateurs du compte](/pages/account/customer/ovhcloud-users-management)
- Savoir [comment configurer des stratégies pour IAM](/pages/account/iam-policies-ui)

## En pratique

Pour pouvoir se connecter à l'espace client OVHcloud, un utilisateur doit disposer au moins de cet ensemble minimal de droits sur la ressource du compte :

- account:apiovh:me/get
- account:apiovh:me/supportLevel/get
- account:apiovh:me/certificates/get
- account:apiovh:me/tag/get

Grâce à ces droits, un utilisateur pourra se connecter à l'espace client. Cependant, pour pouvoir effectuer des actions à l’intérieur de celui-ci, des droits supplémentaires doivent être attribués via IAM.

### Via l'interface utilisateur

L'interface utilisateur permet de configurer une stratégie avec la configuration suivante :

- Ajouter un `resourceType` « Mon compte ».
- Ajouter votre compte en tant que ressource.
- Ajouter les 4 droits listés ci-dessus en tant qu'action.

Vous pouvez maintenant associer vos utilisateurs à cette politique pour leur donner le droit de se connecter à votre espace client.

### Via l'API

L'API vous permet de mettre en place une policy selon l'exemple suivant :

```json
{
  "name": "manager_ro",
  "description": "manager_ro",
  "identities": [
    .... 
  ],
  "resources": [ 
     {
         "urn": "urn:v1:eu:resource:account:xx1111-ovh" 
     }],
  "permissions": {
    "allow": [
      {
        "action": "account:apiovh:me/get"
      },
      {
        "action": "account:apiovh:me/supportLevel/get"
      },
      {
        "action": "account:apiovh:me/certificates/get"
      },
      {
        "action": "account:apiovh:me/tag/get"
      }
    ]
  }
}
```
## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
