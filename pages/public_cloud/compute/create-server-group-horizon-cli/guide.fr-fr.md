---
title: 'Créer et utiliser un groupe de serveurs dans Horizon et CLI'
excerpt: "Découvrez comment créer un groupe de serveurs et l'utiliser avec une instance Public Cloud"
updated: 2025-10-01
---

## Objectif

Cette documentation explique comment utiliser la fonction « groupes de serveurs » pour contrôler la planification d'un groupe d'instances.

**Utilisez les groupes de serveurs pour fournir un mécanisme permettant de regrouper les instances selon une politique spécifique.**

## Prérequis

- Posséder un [projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) créé depuis votre compte OVHcloud.
- Avoir accès à [l'interface Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon).

Pour utiliser le CLI OpenStack, consultez au préalable les guides suivants :

- [Préparer l’environnement pour utiliser l’API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Charger les variables d’environnement OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

### Définitions

#### Politiques

Un groupe de serveurs peut avoir l'une des quatre politiques suivantes : **Affinity**, **Soft Affinity**, **Anti Affinity** ou **Soft Anti Affinity**.

##### **Affinity**

Un groupe de serveurs avec la politique `affinity` garantit que toutes les instances de ce groupe sont **toujours** placées sur le même nœud compute.

##### **Soft Affinity**

Un groupe de serveurs avec la politique `soft affinity` tentera de s'assurer que toutes les instances de ce groupe sont placées sur le même nœud compute, mais finira par l'autoriser si cela n'est pas possible.

##### **Anti Affinity**

Un groupe de serveurs avec la politique `anti affinity` garantit que les instances de ce groupe ne sont **jamais** placées sur le même nœud compute.

##### **Soft Anti Affinity**

Un groupe de serveurs avec la politique `soft anti affinity` **tentera** de s'assurer que toutes les instances de ce groupe ne sont pas placées sur le même nœud compute, mais finira par l'autoriser si cela n'est pas possible.

### Étape 1 : Création de groupes de serveurs

> [!tabs]
> Tableau de bord OpenStack
>>
>> ![Keystone](images/create_server_groups_openstack_dashboard.png){.thumbnail}
>>
>> 1. Connectez-vous à l'interface [Horizon](https://horizon.cloud.ovh.net/auth/login/).
>> 1. Sélectionnez la région appropriée dans le menu déroulant en haut à gauche.
>> 1. Cliquez sur `Compute`{.action} dans l'onglet de gauche, puis sur `Server Groups`{.action}.
>> 1. Cliquez ensuite sur `+ Create Server Group`{.action}.
>> 1. Dans la fenêtre qui s'affiche, sélectionnez un nom (*Name*) et une politique (*Policy*) pour votre groupe de serveurs.
>> 1. Cliquez sur `Submit`{.action}.
>>
> CLI
>> Pour créer un groupe de serveurs, utilisez la commande suivante :
>>
>> ``` bash
>> openstack server group create \ --policy [affinity|soft-affinity|anti-affinity|soft-anti-affinity] \<server_group_name>
>> ```
>>

### Étape 2 : Création d'une instance avec un groupe de serveurs

> [!tabs]
> Tableau de bord OpenStack
>>
>> Horizon peut créer, lire, mettre à jour et supprimer, ainsi qu'obtenir une liste de groupes de serveurs pour un client afin d'activer la spécification d'un groupe lors du démarrage d'une machine virtuelle.
>>
>> 1. Connectez-vous à l'interface [Horizon](https://horizon.cloud.ovh.net/auth/login/).
>> 1. Sélectionnez la région appropriée dans le menu déroulant en haut à gauche.
>> 1. Cliquez sur `Compute`{.action} dans l'onglet de gauche, puis sur `Instances`{.action}.
>> 1. Cliquez sur `Launch Instance`{.action}.
>> 1. Dans la fenêtre qui apparaît, complétez les champs requis pour créer votre instance. Dans le champ `Server Group`{.action}, cliquez sur la flèche déroulante à côté de `Available` pour afficher la liste des groupes de serveurs disponibles. Sélectionnez un groupe de serveurs et il sera déplacé vers `Allocated`.
>>     ![create server with server group OpenStack](images/create_a_server_with_server_group_openStack_dashboard.png){.thumbnail}
>> 1. Une fois terminé, cliquez sur `Launch Instance`{.action}.
>>
> CLI
>>
>> Pour appliquer une politique de groupe de serveurs, vous devez spécifier le groupe lors de la création d'une instance, en tant que *conseil de planification*.
>> Pour ce faire, utilisez le paramètre `--hint` dans la commande suivante :
>>
>> ```bash
>> openstack server create --hint group=<server_group_id> [...] <server_name>
>> ```
>>

Si vous lancez ensuite d'autres instances faisant référence au même groupe de serveurs, le planificateur les concentre ou les répartit selon la politique du groupe de serveurs.

### Modification d’un groupe de serveurs

![List Server Groups OpenStack](images/list_server_groups_openStack_dashboard.png){.thumbnail}

> [!alert]
>
> Une fois créé, un groupe de serveurs ne peut pas être modifié.
>
> De plus, une instance ne peut pas être déplacée entre des groupes de serveurs.
>
> Dans les deux cas, cela est dû au fait que le déplacement de l'instance pourrait être nécessaire pour se conformer à la politique du groupe de serveurs.

### Résolution des problèmes courants

Si vous continuez à créer des instances au sein d'un groupe de serveurs avec une polique `anti affinity`, vous finirez par dépasser la quantité totale de nœuds compute dans la région.

La commande réussira toujours, mais l'instance ne sera plus planifiée sur un nœud compute.

Au lieu de cela, la commande prendra le statut `ERROR` avec le message d'erreur suivant : `_No valid host was found. There are not enough hosts available.`

```bash
$ openstack server show -c fault -c status <server_id>
+--------+--------------------------------------------------+
| Field  | Value                                            |
+--------+--------------------------------------------------+
| fault  | {'code': 500, 'created': '2025-09-15T11:21:33Z', |
|        | 'message': 'No valid host was found.             |
|        | There are not enough hosts available.'}          |
| status | ERROR                                            |
+--------+--------------------------------------------------+
```

![Server group error OpenStack](images/server_group_instances_error_openstack_dashboard.png){.thumbnail}

Une autre raison est que OpenStack ne peut pas planifier l'instance sur un autre nœud compute parce qu'il y a déjà un serveur dans le groupe de serveurs sur chaque nœud.

La même erreur de planification et le même message d'erreur se produiront lors de l'utilisation d'un groupe de serveurs avec une politique `affinity`, lorsque vous créez plus d'instances qu'un nœud compute ne peut en héberger.

Toutefois, lors de l'utilisation d'une politique de Soft Affinity, telle que `soft affinity` ou `soft anti affinity`, le planificateur est autorisé à interrompre la politique du groupe de serveurs s'il n'est pas en mesure de la maintenir.

### Vérification d'une instance dans un groupe de serveurs

Cela signifie que vous pouvez vérifier que vos instances se trouvent sur le même nœud ou sur des nœuds compute différents en examinant leur valeur _hostId_. 

Nous avons déployé quatre instances, deux nommées `anti_affinity_server` avec un groupe de serveurs `anti affinity` et deux nommées `affinity_server` avec un groupe de serveurs `affinity` :

```bash
openstack server list 
+------------------------+--------+-----------+--------+
| Name                   | Status | Image     | Flavor |
+------------------------+--------+-----------+--------+
| affinity_server-2      | ACTIVE | Debian 13 | d2-4   |
| affinity_server-1      | ACTIVE | Debian 13 | d2-4   |
| anti_affinity_server-1 | ACTIVE | Debian 13 | d2-2   |
| anti_affinity_server-2 | ACTIVE | Debian 13 | d2-2   |
+------------------------+--------+-----------+--------+
```

Vous pouvez confirmer que le planificateur a été exécuté conformément à la politique du groupe de serveurs à l'aide de la commande suivante :

```bash
openstack server show -c hostId xSERVER_IDx
```

Avec les 4 instances créées, nous obtenons l'exemple de sortie suivant :

```bash
openstack server show -c hostId affinity_server-2
+--------+----------------------------------------------------------+
| Field  | Value                                                    |
+--------+----------------------------------------------------------+
| hostId | c53cff4ce860b94139db559cfeafc08d228b48925ca00f1b05f3a23d |
+--------+----------------------------------------------------------+
openstack server show -c hostId affinity_server-1
+--------+----------------------------------------------------------+
| Field  | Value                                                    |
+--------+----------------------------------------------------------+
| hostId | c53cff4ce860b94139db559cfeafc08d228b48925ca00f1b05f3a23d |
+--------+----------------------------------------------------------+
openstack server show -c hostId anti_affinity_server-1
+--------+----------------------------------------------------------+
| Field  | Value                                                    |
+--------+----------------------------------------------------------+
| hostId | 66e9f9525487cad5cab2da65a51542d5a9bc0ca4bdb9fea7cdce8424 |
+--------+----------------------------------------------------------+
openstack server show -c hostId anti_affinity_server-2
+--------+----------------------------------------------------------+
| Field  | Value                                                    |
+--------+----------------------------------------------------------+
| hostId | 2c2907e312fec85fd92929a5afcc2ca4ac22c09c85480eea95b4fc08 |
+--------+----------------------------------------------------------+
```

`hostId` est un identificateur unique pour chaque nœud compute. En comparant cette valeur entre vos différentes instances, vous pouvez vous assurer que votre politique de groupe de serveurs est respectée ou non.

> [!primary]
>
> Il n'est pas possible de comparer `hostId` entre différents projets car les valeurs sont uniques pour chaque projet.

### Quota du groupe de serveurs

> [!primary]
>
> Vous devez utiliser ou spécifier `--os-compute-api-version 2.50` (ou une version supérieure) pour afficher la sortie des groupes des serveurs et des membres des groupes de serveurs pour une classe de quota donnée.

En ce qui concerne les quotas, les groupes de serveurs et les membres des groupes de serveurs figurent dans les quotas du service Compute.

| Quota | Description | Nom de la propriété |
| ----------- | ------------------------------------------------------ | ------------------------------------------------------|
| Server Groups | Nombre de groupes de serveurs par projet. | server_groups |
| Server Group Members | Nombre de serveurs par groupe de serveurs. |server_group_members |

```bash
openstack quota show --compute <PROJECT>
```

Voici un exemple de sortie :

```bash
openstack quota show <project> |grep -i server-group
| server-group-members        | 10                               |
| server-groups               | 10                               |
```

## Aller plus loin

Rejoignez notre [communauté d'utilisateurs](/links/community).