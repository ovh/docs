---
title: "Redimensionner une instance Public Cloud à l'aide du CLI OpenStack"
excerpt: Découvrez comment faire évoluer les ressources de votre instance pour faire face à une activité accrue
updated: 2023-09-22
---

## Objectif

En raison d'une activité accrue, ou simplement pour répondre à de nouveaux besoins, votre instance peut manquer de ressources et se retrouver incapable de répondre à une nouvelle charge. Grâce au Public Cloud d’OVHcloud, vous pouvez augmenter les ressources disponibles pour votre instance en quelques étapes seulement.

**Découvez comment redimensionner votre instance Public Cloud à l'aide du CLI OpenStack.**

> [!primary]
> **Limites :**
>
> - Seul le redimensionnement vers un modèle supérieur (*upscaling*) est possible pour les instances classiques.
> - Une [instance Metal](https://www.ovhcloud.com/fr-ca/public-cloud/metal-instances/) ne peut être redimensionnée que vers un autre modèle **Metal**.
> - Les instances *Flex* permettent le redimensionnement vers des modèles supérieurs ou inférieurs, en raison d'une taille de disque unique et verrouillée.
>

## Prérequis

- Une [instance Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud
- Un [utilisateur OpenStack](create_and_delete_a_user1.)
- Avoir un [environnement OpenStack préparé pour le CLI](prepare_the_environment_for_using_the_openstack_api1.)
- Avoir défini les [variables d'environnement OpenStack](loading_openstack_environment_variables1.)

## En pratique

> [!warning]
>
> Cette manipulation provoque l'arrêt de l'instance pendant toute la durée de l'opération.
>

### Sauvegarder l'instance

Lors d'un redimensionnement, l'instance est arrêtée pendant toute la durée de l'opération. Avant de procéder, il est donc recommandé de sauvegarder votre instance et d'arrêter tous les processus en cours d'exécution. Retrouvez plus d'informations sur les méthodes de sauvegarde dans le [guide dédié](save_an_instance1.).

### Lister les instances

La première étape consiste à lister vos instances afin de récupérer le nom de l'instance que vous souhaitez redimensionner. Dans notre exemple, nous souhaitons redimensionner l'instance nommée « OVHcloudinstance ».

```bash
$ openstack server list
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| ID                                   | Name             | Image      | Flavor |        | Status | Networks                                    | 
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| 19298898-934b-xxxx-xxxx-xxxxxxxxxxxx | testinstance1    | Centos 7     | d2-2 |        | ACTIVE | Ext-Net=111.112.113.9, 2607:5300:xxx:xxxx::ae9                                                       
| 23ce0491-5e29-xxxx-xxxx-xxxxxxxxxxxx | testinstance2    | Ubuntu 23.04 | d2-2 |        | ACTIVE | Ext-Net=111.112.113.61, 2607:5300:xxx:xxxx::c0a                                                          
| 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx | OVHcloudinstance | Debian 12    | b2-7 |        | ACTIVE | Ext-Net=111.112.113.200, 2607:5300:xxx:xxxx::9a3                                  
+--------------------------------------+----------------------------------------------------------------+--------+----------------------------------------------+
```

### Lister les modèles <a name=« flavorlist »></a>

Vous devez afficher à présent la liste des modèles (*flavors*) disponibles dans votre région afin de récupérer l'ID du nouveau modèle. Dans notre exemple, nous voulons redimensionner notre instance sur un modèle b2-30 avec l'ID `098889e6-d1fc-4967-baea-19fd97fd83a8`.

```bash
$ openstack flavor list
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| ID                                   | Name                |    RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| 009ee05f-9430-4c85-b9f7-66297db22731 | win-hg-7-ssd-flex   |   7000 |   50 |         0 |     2 | True      |
| 01ef1e13-5a85-4c4b-84f4-9e9da85da51d | r2-15               |  15000 |   50 |         0 |     2 | True      |
| 01f4f140-3d51-4d94-ad26-9aa85941dc63 | win-hg-60-ssd-flex  |  60000 |   50 |         0 |    16 | True      |
| 041d0272-4db5-4c13-9861-a4e17c48fd9c | r2-60               |  60000 |  100 |         0 |     4 | True      |
| 0531d26b-e117-4cdb-9e83-c16727f4737e | c2-60               |  60000 |  400 |         0 |    16 | True      |
| 05ebb9db-d6c8-4b7a-bf38-eea519aa5262 | win-r2-120-flex     | 120000 |   50 |         0 |     8 | True      |
| 098889e6-d1fc-4967-baea-19fd97fd83a8 | b2-30               |  30000 |  200 |         0 |     8 | True      |
| 0ec183bd-d014-48ad-a71e-1233c5f5c79b | win-r2-30           |  30000 |   50 |         0 |     2 | True      |
| 1070c9d6-5bc7-45db-bab2-073bff119f22 | r2-30               |  30000 |   50 |         0 |     2 | True      |
| 108e2180-e257-4054-aa23-18b123d06ed8 | win-hg-120-ssd-flex | 120000 |   50 |         0 |    32 | True      |
| 11a77f5f-5cbe-4394-ba85-d4afb2b0bade | eg-30-flex          |  30000 |   50 |         0 |     8 | True      |
| 125a6e9e-7522-463a-a90d-121abaabf21a | win-b2-30-flex      |  30000 |   50 |         0 |     8 | True      |
| 1335874a-7ddd-453b-b655-d9bf044ef5f9 | eg-120-ssd          | 120000 |  800 |         0 |    32 | True      |
| fd80c213-d30f-4e0c-ae9d-ecdcb422fc1b | eg-7-ssd            |   7000 |  100 |         0 |     2 | True      |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
```

> [!warning]
> Veuillez noter que vous pouvez uniquement redimensionner une instance d'un modèle Linux à un autre modèle Linux et d'un modèle Windows à un autre modèle Windows.

### Redimensionner l'instance

Une fois les informations récupérées, vous pouvez à présent redimensionner votre instance :

```bash
$  openstack server resize --flavor <FLAVOR-ID> <INSTANCE-NAME>
```

Par exemple, pour redimensionner notre instance « OVHcloudInstance » :

```bash
$ openstack server resize --flavor 098889e6-d1fc-4967-baea-19fd97fd83a8 OVHcloudinstance
```

Vous pouvez suivre le processus en exécutant fréquemment la commande suivante. L'état (*status*) doit être `RESIZE`.

```bash
$ openstack server show OVHcloudinstance
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                               | Value                                                                                                                                                                                              |
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| id                                  | 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx                                                                                                                                                              |
| image                               | Debian 12 (31e40bc4-5b35-4c5f-96ff-37df3660dec0)                                                                                                                                                   |

| key_name                            | OVHcloud                                                                                                                                                                                               |
| name                                | OVHcloudinstance                                                                                                                                                                                     |
| status                              | RESIZE                                                                                                                                                                                             |
| tags                                |                                                                                                                                                                                                    |
| task_state                          | resize_migrating                                                                                                                                                                                   |
| updated                             | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| updated_at                          | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| vm_state                            | active           
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Réduire une instance

> [!warning]
> Cette option n'est disponible que pour les modèles *Flex*.
>

Si vous souhaitez réduire votre instance, vous pouvez le faire en suivant les mêmes étapes mentionnées [ci-dessus](#flavorlist.) et en utilisant un ID différent dans le champ <FLAVOR-ID>.

## Aller plus loin

[Redimensionner une instance Public Cloud via l’espace client OVHcloud](resize_instance_manager1.)

[Redimensionner une instance Public Cloud via Horizon](resize_of_an_instance1.)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.