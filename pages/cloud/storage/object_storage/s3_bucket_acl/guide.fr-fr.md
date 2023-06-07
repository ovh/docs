---
title: Object Storage - Bucket ACL
slug: s3/bucket-acl
section: Tutoriels
order: 150
updated: 2023-03-09
---

**Dernière mise à jour le 09/03/2023**

## Objectif

Par défaut, toutes les ressources (buckets, objets) et les sous-ressources (configuration de cycle de vue, configuration de site web, ...etc) sont privées dans l'Object Storage S3 OVHcloud. Seul le propriétaire de la ressource, c'est à dire l'utilisateur du compte qui la crée, a le contrôle total dessus.

L'accès aux ressources privées peut être donné via les politiques d'accès.

Les politiques d'accès peuvent être catégorisées en 2 types :

- politique basée sur l'utilisateur ;
- politique basée sur la ressource : les politiques de bucket et les ACLs sont des politiques d'accès qui sont attachées directement à une ressource spécifique.

### Politique basée sur l'utilisateur

Les politiques d'accès attachées à un utilisateur spécifique sont appelées politiques utilisateur (*user policies*). Une politique d'utilisateur est évaluée en se basant sur les permissions définies au niveau de la solution de gestion d'identité (IAM) du produit Object Storage S3 OVHcloud et s'applique seulement à l'utilisateur spécifique auquel elle est attachée.

### Politique basée sur la ressource

#### ACL

Une ACL est une liste qui identifie des utilisateurs et les permissions qui leur sont accordées. Les ACLs sont typiquement utilisées pour accorder des permissions basiques de lecture/écriture à d'autres comptes.

Les ACLs peuvent être soit attachées au niveau du bucket, soit au niveau des objets.

Il est à noter que malgré le fait que les ACLs constituent la méthode historique de gestion des permissions, elles sont encore valables et non dépréciées. Cependant, selon la situation, il peut être préférable d'utiliser des politiques utilisateur ou de bucket pour avoir une gestion plus fine des droits.

#### Politique de bucket

A l'instar des politiques utilisateur, une politique de bucket contrôle les permissions pour une bucket donné et les objets contenus dedans. La différence étant que les politiques utilisateur contrôlent les permissions d'un utilisateur spécifique à une liste de ressources, tandis qu'une politique de bucket contrôle les permissions sur un bucket spécifique et ses objets pour une liste d'utilisateurs.

![policies](images/s3_bucket_acl-20230228171656561.png)

> [!warning]
>
> Les politiques de bucket sont une fonctionnalité qui n'est pas encore disponible sur la solution Object Storage S3 OVHcloud.
>

## Gérer les permissions avec les ACLs

### Bénéficiaires gérés

La solution Object Storage S3 OVHcloud gère 2 types de bénéficiaires :

- les utilisateurs d'un projet Public Cloud ;
- les groupes d'utilisateurs prédéfinis.

#### Projets Public Cloud

Les utilisateurs d'un projet Public Cloud sont identifiés par un identifiant canonique (canonical user id). Quand on accorde des droits d'accès, l'identifiant canonique est spécifié par `id=<valeur>` où `<valeur>` est défini par `<nom-du-projet>:<nom-utilisateur>`.

Exemple: si vous avez un projet Public Cloud appelé `my_project` et que vous y avez créé un utilisateur appelé `storage-user`, alors vous obtenez `id=my_project:storage-user`.

#### Groupes prédéfinis

Les groupes d'utilisateurs prédéfinis sont les suivants et sont identifiés par une URI:

- **log delivery group** : ce groupe contient les utilisateurs applicatifs utilisés par les services d'OVHcloud pour écrire les journaux d'accès aux serveurs dans les buckets (voir [Server Access Logging](https://docs.ovh.com/fr/storage/object-storage/s3/server-access-logging/)).

```console
http://acs.amazonaws.com/groups/s3/LogDelivery
```

- **authenticated users group** : ce groupe contient tous les utilisateurs de tous les projets Public Cloud qui sont authentifiés.

```console
http://acs.amazonaws.com/groups/global/AuthenticatedUsers
```

- **all users group** : ce groupe contient tous les utilisateurs du monde entier et est équivalent aux utilisateurs anonymes.

```console
http://acs.amazonaws.com/groups/global/AllUsers
```

### Permissions

Les permissions gérées sont listées ci-dessous. Notez que selon le niveau (bucket ou objet), toutes ne sont pas applicables.

| Permission | Bucket level | Object level |
| --- | --- | --- |
| READ | permet de lister tous les objets du bucket |  permet de télécharger l'objet et ses métadonnées |
| WRITE | permet la création/suppression et l'écrasement des objets dans le bucket | n/a |
| READ_ACP | permet la lecture des ACLs du bucket | permet la lecture des ACLs de l'objet |
| WRITE_ACP | permet la création/suppression et l'écrasement des ACLs du bucket | permet la création/suppression et l'écrasement des ACLs de l'objet |
| FULL_CONTROL | raccourci pour READ, WRITE, READ_ACP, WRITE_ACP sur le bucket | raccourci pour READ, READ_ACP, WRITE_ACP sur l'objet |

### ACLs prédéfinies

Les ACLs prédéfinies sont composées d'un ensemble d'utilisateurs et de permissions prédéfinis et constituent un raccourci pratique pour adresser la plupart des cas d'usage les plus courants.

| ACL | Description | Bucket | Object | Comment |
| --- | --- | --- | --- | --- |
| private | comportement par défaut, le propriétaire de la ressource a la permission FULL_CONTROL | x | x |  |
| public-read | le propriétaire de la ressource a la permission FULL_CONTROL<br>le groupe AllUsers a la permission READ | x | x |  |
| public-read-write | le propriétaire de la ressource a la permission FULL_CONTROL<br>le groupe AllUsers a la permission READ, WRITE | x | x |  |
| authenticated-read | le propriétaire de la ressource a la permission FULL_CONTROL<br>le groupe AuthenticatedUsers a la permission READ | x | x |  |
| bucket-owner-read | le propriétaire de l'object a la permission FULL_CONTROL<br>le propriétaire du bucket a la permission READ |    | x | indisponible pour le moment |
| bucket-owner-full-control | le propriétaire de l'object et le propriétaire du bucket ont tous les 2 la permission FULL_CONTROL  |  | x | indisponible pour le moment |
| log-delivery-write | le groupe LogDelivery a les permissions WRITE, READ_ACP | x |  |  |

### En pratique

#### Configurer les ACLs sur un bucket

Vous pouvez configurer les ACLS sur un bucket à la création de celui-ci ou après la création en appelant la commande `put-bucket-acl`.

Exemple:

```bash
$ aws s3api create-bucket --bucket my-bucket --region gra --acl public-read
```

Dans cet exemple, nous avons créé un bucket appelé "my-bucket" qui utilise l'ACL prédéfinie "public-read".

Pour vérifier que les ACLs ont été correctement configurées, vous pouvez utiliser la commande suivante qui retourne l'ACL :

```bash
$ aws s3api get-bucket-acl --bucket my-bucket
```

```json
{
    "Owner": {
        "DisplayName": "2171889990277389:user-xxxxxxxxxxxx",
        "ID": "2171889990277389:user-xxxxxxxxxxxx"
    },
    "Grants": [
        {
            "Grantee": {
                "Type": "Group",
                "URI": "http://acs.amazonaws.com/groups/global/AllUsers"
            },
            "Permission": "READ"
        },
        {
            "Grantee": {
                "DisplayName": "2171889990277389:user-xxxxxxxxxxxx",
                "ID": "2171889990277389:user-xxxxxxxxxxxx",
                "Type": "CanonicalUser"
            },
            "Permission": "FULL_CONTROL"
        }
    ]
}
```

Pour changer les ACLs, vous pouvez appeler la commande `put-bucket-acl` en utilisant le client en ligne de commande AWS :

```bash
$ aws s3api put-bucket-acl --bucket acl-bucket --grant-write id=po-training:user-yyyyyyyyyy
```

Ici, nous avons changé l'ACL pour donner à l'utilisateur "user-yyyyyyyyyy" la permission d'écrire dans le bucket.

A nouveau, pour vérifier que les ACLs sont correctement configurées :

```bash
$ aws s3api get-bucket-acl --bucket my-bucket
```

```json
{
    "Owner": {
        "DisplayName": "2171889990277389:user-xxxxxxxxxxxx",
        "ID": "2171889990277389:user-xxxxxxxxxxxx"
    },
    "Grants": [
        {
            "Grantee": {
                "DisplayName": "po-training:user-yyyyyyyyyy",
                "ID": "po-training:user-yyyyyyyyyy",
                "Type": "CanonicalUser"
            },
            "Permission": "WRITE"
        }
    ]
}
```

#### Configurer les ACLs sur un objet

Tout comme au niveau du bucket, vous pouvez configurer les ACLs sur un objet individuel à la création de celui-ci ou après sa création.

Exemple:

```bash
$ aws s3api put-object --bucket my-bucket --body file.txt --key file --grant-full-control id=po-training:user-yyyyyyyyyy
```

Dans cet exemple, nous avons créé un objet nommé "file" et nous avons accordé à l'utilisateur "user-yyyyyyyyyy" la permission "FULL_CONTROL" dessus.


## Bonnes pratiques

### Quand utiliser les ACLs ?

#### Au niveau de l'objet

Comme mentionné précédemment, les ACLs peuvent être attachées au niveau de l'objet.

Vous pouvez considérer les scénarios suivants pour utiliser les ACLs d'objet:

- le propriétaire du bucket et le propriétaire de l'objet ne sont pas les mêmes : dans un scénario où le propriétaire du bucket a accordé à un autre compte le droit d'écrire des objets à l'intérieur du bucket, l'accès à ces objets doit être accordé par des ACLs ;
- les permissions varient d'un objet individuel à l'autre ;

#### Au niveau du bucket

Pour des besoins très basiques de contrôle des permissions, vous pouvez envisager d'utiliser les ACLs du bucket pour accorder des permissions sur les ressources liées à ce bucket.

Cependant, nous vous conseillons vivement d'utiliser plutôt des politiques pour un contrôle d'accès plus fin et de meilleure qualité sur le bucket et ses objets.

### Quand utiliser les politiques de bucket ?

Vous pouvez envisager d'utiliser des politiques de bucket si vous souhaitez définir des autorisations **inter-comptes** sur les ressources liées à un bucket spécifique.

### Quand utiliser les politiques d'utilisateur ?

Vous pouvez envisager d'utiliser des politiques utilisateur si vous souhaitez définir des autorisations **inter-ressources** pour un compte spécifique.

> [!warning]
>
> **Important**
>
> Les ACLs et les politiques peuvent être combinées mais le principe du moindre privilège sera toujours appliqué, ce qui peut être résumé comme suit : **"autoriser uniquement s'il existe une autorisation explicite et aucun refus explicite. Sinon, refuser tout".**
>

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
