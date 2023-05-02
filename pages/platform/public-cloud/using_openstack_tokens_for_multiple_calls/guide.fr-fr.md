---
title: "Utilisation des tokens Openstack"
slug: utilisation-des-tokens-openstack
excerpt: "Découvrez comment créer et utiliser des tokens Openstack pour vos actions"
section: "Gestion via Openstack"
order: 01
updated: 2023-05-02
---

**Dernière mise à jour le 02/05/2023**

## Objectif

**Ce guide fournit les bonnes pratiques si vous souhaitez réaliser un grand nombre d'actions Openstack en peu de temps.**

> [!primary]
>
Les informations dans ce guide utilisent la version 3.0 de l'API Keystone
>

## Instructions

### Definitions

- Point de terminaison (Endpoint) : Adresse Web pointant directement vers l'API d'un service. Par exemple, [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/) pour le point d'accès à l'authentification ou [https://image.compute.gra11.cloud.ovh.net/](https://image.compute.gra11.cloud.ovh.net/) pour le point d'accès à la gestion des images de la zone GRA11. 

- Jeton : Une chaîne de caractères unique utilisée pour s'authentifier et accéder aux ressources. L'utilisateur le demande en entrant ses informations d'identification (détails de connexion) dans l'API d'authentification. Le jeton est généré et est valable pendant 24 heures.

- OpenRC : Pour améliorer l'efficacité des interactions avec le service d'identité via le client OpenStack, OpenStack prend en charge des scripts d'environnement client simples également connus sous le nom de fichiers OpenRC.
Il s'agit d'un fichier contenant des options communes à tous les clients, mais supportant également des options uniques.


### Problématique

La plupart des demandes envoyées à l'API OpenStack doivent suivre une procédure d'autorisation, qui implique la génération d'un jeton et sa validation.

Cependant, si vous effectuez trop d'actions en peu de temps, certaines actions OpenStack tomberont en erreur en raison d'un trop grand nombre d'appels à l'API

Pour plus d'informations, consultez la documentation officielle [OpenStack API](http://developer.openstack.org/api-guide/quick-start/).

Ce guide vous montrera comment émettre un jeton Openstack, l'utiliser pour les actions que vous souhaitez effectuer et comment révoquer un jeton.

### Prérequis 

Ce guide nécessite l'installation de l'outil Openstack CLI sur votre machine

Vous pouvez trouver plus d'informations sur cet outil avec ce guide : [OpenStack CLI](https://docs.openstack.org/newton/user-guide/cli.html)

Vous pouvez l'obtenir à partir du gestionnaire de paquets apt (pour les distributions basées sur Debian) ou par yum (pour les distributions basées sur RHEL/CentOS)

```bash
# Distributions Debian 

sudo apt install python3-openstackclient

# Distributions CentOS/RHEL

sudo yum install python3-openstackclient
```

Pour les utilisateurs de Windows, vous pouvez suivre ce guide pour exporter vos variables d'environnement : 

[Définir les variables d'environnement OpenStack](https://docs.ovh.com/gb/en/public-cloud/set-openstack-environment-variables/)

### Étape 1 : Téléchargez et sourcez votre fichier openrc

Allez dans votre Manager OVHcloud, onglet Public Cloud, Utilisateurs & Roles, cliquez sur le bouton à trois points, puis téléchargez le fichier openrc de votre utilisateur Openstack souhaité et spécifiez la région dans laquelle vous voulez effectuer des actions.

Une fois téléchargé, éditez votre fichier openrc et ajoutez cette ligne :

```bash
OS_PASSWORD=<your_password>
```

Veuillez adapter cette ligne avec le mot de passe de votre utilisateur Openstack donné à l'étape de création de l'utilisateur.

Ensuite, sourcez le fichier que vous avez téléchargé précédemment

```bash
source openrc.sh
```

### Étape 2 : Émission d'un jeton Openstack


> [!primary]
>
Un jeton Openstack est valable 24 heures après son émission

Pour une meilleure fiabilité, vous pouvez émettre un jeton toutes les 8 heures (à titre d'exemple) afin d'éviter de procéder à des actions avec un jeton expiré.

Préférez la création d'un jeton plutôt que d'exécuter directement l'action souhaitée lorsque vous souhaitez effectuer des actions longues comme des snapshots, des étagères, des créations d'images, ...
>

Une fois que vous avez sourcé votre fichier openrc, exécutez la commande suivante pour émettre un jeton :

```bash
openstack token issue
```

Cette commande devrait produire un résultat similaire :

```bash
+------------+----------------------------------------------------------------+
| Field      | Value                                                          |
+------------+----------------------------------------------------------------+
| expires    | 2023-04-06T08:33:15+0000                                       |
| id         | gAAAAA[...]                                                    |
| project_id | 8a7[...]                                                       |
| user_id    | f99[...]                                                       |
+------------+----------------------------------------------------------------+
```

Vous pouvez désormais exporter l'ID du jeton précédemment émis :
```bash
export OS_TOKEN = gAAAAA[...]
```

Vous pouvez également exporter directement votre jeton avec cette commande :

```bash
export OS_TOKEN=$(openstack token issue -f value -c id)
```

### Étape 3 : Supprimer la variable inutile

Afin d'utiliser votre token pour effectuer des actions avec votre utilisateur, vous devez retirer la variable "OS_USER_DOMAIN_NAME".

Pour ce faire, exécutez la commande suivante :

```bash
unset OS_USER_DOMAIN_NAME
```

### Étape 4 : Utiliser le jeton pour exécuter des commandes

Maintenant que vous avez votre token, vous pouvez utiliser les appels classiques d'Openstack pour gérer votre infrastructure.

```bash
openstack --os-auth-type token <command>
```

Exemple : 

```bash
openstack --os-auth-type token image list
```

### Étape 5 : Révoquer le jeton Openstack

Une fois que vous avez effectué toutes les actions que vous souhaitiez, vous pouvez révoquer le token utilisé pour éviter qu'il ne soit utilisé pour d'autres actions.

Pour ce faire :

```bash
openstack --os-auth-type token token revoke <token_id>

# ou 

openstack --os-auth-type token token revoke $OS_TOKEN
```

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.
