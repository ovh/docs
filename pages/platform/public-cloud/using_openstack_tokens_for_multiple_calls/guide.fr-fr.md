---
title: "Utilisation des tokens OpenStack"
excerpt: "Découvrez comment créer et utiliser des jetons OpenStack pour vos actions"
updated: 2023-05-04
---

**Dernière mise à jour le 04/05/2023**

## Objectif

**Ce guide fournit des bonnes pratiques pour réaliser un grand nombre d'actions OpenStack en peu de temps.**

> [!primary]
>
> Les étapes décrites dans ce guide se basent sur la version 3.0 de l'API Keystone.
>

### Définitions

- **Point de terminaison (*Endpoint*)** : adresse Web pointant directement vers l'API d'un service. Par exemple, [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/) pour le point d'accès à l'authentification ou [https://image.compute.gra11.cloud.ovh.net/](https://image.compute.gra11.cloud.ovh.net/) pour le point d'accès à la gestion des images de la zone GRA11. 

- **Jeton (*token*)** : une chaîne de caractères unique utilisée pour s'authentifier et accéder aux ressources. L'utilisateur le demande en entrant ses informations d'identification (détails de connexion) dans l'API d'authentification. Le jeton est généré et est valable pendant 24 heures.

- **OpenRC** : Pour améliorer l'efficacité des interactions avec le service d'identité via le client OpenStack, OpenStack prend en charge des scripts d'environnement client simples également connus sous le nom de fichiers OpenRC. Il s'agit de fichiers contenant des options communes à tous les clients, mais supportant également des options uniques.

### Problématique

La plupart des demandes envoyées à l'API OpenStack doivent suivre une procédure d'autorisation qui implique la génération d'un jeton et sa validation.

Cependant, si vous effectuez trop d'actions en peu de temps, certaines actions OpenStack tomberont en erreur en raison d'un trop grand nombre d'appels à l'API. La limite actuelle est de 60 créations de jetons par minute et par utilisateur. L'API d'authentification retournera des erreurs HTTP 429 au-delà de cette limite.

Pour plus d'informations, consultez [la documentation officielle OpenStack API](http://developer.openstack.org/api-guide/quick-start/).

Ce guide vous montrera comment émettre un jeton OpenStack, l'utiliser pour les actions que vous souhaitez effectuer et comment révoquer un jeton.

## Prérequis 

- Être connecté à l’[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Ce guide nécessite l'installation de l'outil OpenStack CLI sur votre machine.

> [!primary]
>
> Retrouvez plus d'informations sur cet outil dans la [documentation OpenStack CLI](https://docs.openstack.org/python-openstackclient/latest/).

Vous pouvez l'obtenir à partir du gestionnaire de paquets apt (pour les distributions basées sur Debian) ou par yum (pour les distributions basées sur RHEL/CentOS) :

```bash
# Distributions Debian 

sudo apt install python3-openstackclient

# Distributions CentOS/RHEL

sudo yum install python3-openstackclient
```

- Pour les utilisateurs de Windows, consultez ce guide pour exporter vos variables d'environnement : [Définir les variables d'environnement OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables).

## En pratique

### Étape 1 : téléchargez et sourcez votre fichier OpenRC

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et ouvrez votre projet `Public Cloud`{.action}.

Cliquez sur `Users & Roles`{.action} dans la section `Project Management` puis sur le bouton `...`{.action} à droite de votre utilisateur OpenStack.<br>
Téléchargez le fichier OpenRC de cet utilisateur et spécifiez la région dans laquelle vous voulez effectuer des actions.

![télécharger le fichier openRC](images/openrc.png){.thumbnail}

Une fois téléchargé, éditez votre fichier OpenRC et ajoutez cette ligne :

```bash
OS_PASSWORD=<your_password>
```

Prenez soin d'adapter cette ligne avec le mot de passe de votre utilisateur OpenStack qui vous a été donné lors de la création de l'utilisateur.

Ensuite, sourcez le fichier que vous avez téléchargé précédemment :

```bash
source openrc.sh
```

### Étape 2 : émission d'un jeton OpenStack

> [!primary]
>
> Un jeton OpenStack est valable pendant 24 heures après son émission. Pour une meilleure fiabilité, vous pouvez émettre un jeton toutes les 8 heures (à titre d'exemple) afin d'éviter de procéder à des actions avec un jeton expiré.
>
> Si vous envisagez des actions longues telles que des snapshots, du *shelving* d'instances, des créations d'images, etc, préférez la création d'un nouveau jeton plutôt que d'exécuter directement l'action souhaitée.
>

Une fois que vous avez sourcé votre fichier OpenRC, exécutez la commande suivante pour émettre un jeton :

```bash
openstack token issue
```

Le résultat devrait être similaire à celui ci-dessous :

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

### Étape 3 : supprimer la variable inutile

Afin d'utiliser votre jeton pour effectuer des actions avec votre utilisateur, vous devez retirer la variable `OS_USER_DOMAIN_NAME`.

Pour ce faire, exécutez la commande suivante :

```bash
unset OS_USER_DOMAIN_NAME
```

### Étape 4 : utiliser le jeton pour exécuter des commandes

Maintenant que vous avez votre jeton, vous pouvez utiliser les appels classiques d'OpenStack pour gérer votre infrastructure.

```bash
openstack --os-auth-type token <command>
```

Exemple : 

```bash
openstack --os-auth-type token image list
```

### Étape 5 : révoquer le jeton OpenStack

Une fois toutes vos actions effectuées, vous pouvez révoquer le jeton OpenStack pour éviter qu'il ne soit utilisé pour d'autres actions.

Pour ce faire, utilisez la commande suivante :

```bash
openstack --os-auth-type token token revoke <token_id>

# ou 

openstack --os-auth-type token token revoke $OS_TOKEN
```

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.
