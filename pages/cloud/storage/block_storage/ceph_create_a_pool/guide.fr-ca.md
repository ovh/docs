---
title: Pool creation
slug: ceph/create-a-pool
excerpt: Ce qui vous présente comment créer un pool en utilisant l'interface Web.
section: Cloud Disk Array
---


## Utiliser l'interface web


> [!primary]
>
> L'utilisation d'une interface web est le moyen le plus simple de créer un pool.
>

Tout d'abord, connectez-vous au [l’espace client](https://ca.ovh.com/manager/dedicated/#/configuration){.external} et dans la rubrique Plates-formes et services vous trouverez le service Ceph. 

Dans l'onglet "Pools" et ensuite en bas à droite, vous trouverez les pools existants


![Ceph pools](images/create_a_pool_1.png){.thumbnail}

Entrez un nom de pool, votre pool doit comporter au moins trois caractères.


![Ceph pool creation](images/create_a_pool_2.png){.thumbnail}

Après la création du pool, vous revenez au gestionnaire, vous pouvez voir que le statut du cluster a changé car le pool est en cours de création.


![Ceph pool creation](images/create_a_pool_3.png){.thumbnail}


![Ceph pool creation](images/create_a_pool_4.png){.thumbnail}


## Utiliser l'API

> [!api]
>
> @api {POST} /dedicated/ceph/{serviceName}/pool
>
serviceName est le fsid de votre cluster.

Vous pouvez vérifier la création d'un pool en consultant la liste des pools.


> [!api]
>
> @api {GET} /dedicated/ceph/{serviceName}/pool
>
Par example:


```bash
GET /dedicated/ceph/98d166d8-7c88-47b7-9cb6-63acd5a59c15/pool
[
{
  replicaCount: 3
  serviceName: "98d166d8-7c88-47b7-9cb6-63acd5a59c15"
  name: "rbd"
  minActiveReplicas: 2
  poolType: "REPLICATED"
  backup: false
},
{
  replicaCount: 3
  serviceName: "98d166d8-7c88-47b7-9cb6-63acd5a59c15"
  name: "testpool"
  minActiveReplicas: 2
  poolType: "REPLICATED"
  backup: true
  }
]
```
