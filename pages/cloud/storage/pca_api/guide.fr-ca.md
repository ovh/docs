---
title: API Particularités
slug: pca/api
excerpt: Particularités de l'API Openstack Swift sur les archives publiques en nuage d'OVH
section: Public Cloud Archive
order: 120
---


## Opérations sur les conteneurs
Cette section décrit les particularités apportées par OVH pour les opérations concernant les conteneurs.


### GET Inventaire des conteneurs
**Description**

Récupération d'un inventaire des conteneurs.

**Paramètres de demande**

|Parameter| Tapez |Description|Requis|
|---|---|---|---|
|policy_extra|Boolean|Inclure des champs contenant des informations supplémentaires provenant de la politique de stockage dans l'organisme de réponse si le format demandé est json.|No|

**Organe de réponse**

|Domain|Tapez|Description|
|---|---|---|
|policy_retrieval_delay|Entier|Délai de récupération de l'objet en secondes si en état de *déscellage*, *nulle* dans le cas contraire.|
|policy_retrieval_state|Chaîne|État de la récupération des objets. Les valeurs possibles sont : *sealed*, *unsealing*, *unsealed*.|


## Operations on objects
Cette section décrit les particularités apportées par OVH aux opérations concernant les objets.


### GET Object
**Description**

Retrouver un objet.

**Codes d'erreur**

|Code|Description|
|---|---|
|429|L'opération de descellement des objets est en cours.|

**En-têtes de réponse**

|Nom|Tapez|Description|Obligatoire|
|---|---|---|---|
|Retry-After|Entier|Délai de récupération des objets en secondes si le code d'erreur de la réponse est 429.|No|