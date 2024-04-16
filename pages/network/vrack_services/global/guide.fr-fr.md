---
title: "vRack Services - Exposer un service managé sur votre vRack"
excerpt: "Découvrez comment exposer votre service managé sur le vRack avec le produit vRack Services et la fonctionnalité Service Endpoint"
updated: 2024-04-17
---

> [!warning]
> La fonctionnalité vRack Services est actuellement en phase bêta.
> Ce guide peut donc être incomplet et sera mis à jour lors de la bêta. Notre équipe reste disponible sur notre canal Discord dédié. N’hésitez pas à nous rejoindre et à nous contacter : <https://discord.gg/ovhcloud>. Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Network.

## Objectif

Le produit vRack Services vous permet de bénéficier de services réseau sur le réseau privé vRack. En créant un Service Endpoint, vous pouvez exposer, avec une adresse IP privée, un service managé par OVHcloud sur votre vRack. De cette façon, vous vous assurez que toutes les communications avec votre service managé restent privées et sécurisées, car elles ne quittent pas votre réseau privé, qui est isolé des autres clients et du réseau public. 

Il est également simple et rapide à configurer, soit via l'API, soit via l'espace client OVHcloud. Le premier service managé qui prend en charge Service Endpoint est [Enterprise File Storage](https://www.ovhcloud.com/fr/storage-solutions/enterprise-file-storage/){.external}. D'autres services managés OVHcloud prendront en charge le Service Endpoint à l’avenir.

Pour plus d'informations sur le réseau privé vRack veuillez consulter [cette page](https://www.ovhcloud.com/fr/network/vrack/){.external}.

![schéma global](images/global_schema_20240410.png){.thumbnail}

**Ce guide vous explique comment exposer votre service managé sur le vRack avec le produit vRack Services, en utilisant la fonctionnalité Service Endpoint.**

## Vue d'ensemble

Il y 3 composants principaux dans la mise en place de cette configuration :

1. **vRack Services**
Le produit vRack Services est le composant principal de votre configuration, nécessitant une activation dans une région choisie, ainsi qu'une association à un vRack. La région choisie doit correspondre à l'emplacement de votre service managé. Le service managé sera disponible à partir de la région choisie et accessible à tous les serveurs connectés au vRack, quelque soit la région.
2. **sous-réseau**
Le produit vRack Services utilise le concept de sous-réseau (ou *subnet*) afin de définir une plage d'addresse IP privée utilisable pour communiquer avec les services managés. De manière générale, les sous-réseaux divisent un réseau plus large en segments, chacun disposant d'une plage spécifique d'adresses IP. Cette division logique permet une gestion efficace des ressources et du flux de trafic au sein de votre réseau.
3. **Service Endpoint**
Le Service Endpoint représente votre point d'accès au service managé. Il est associé à un sous-réseau et dispose d'une ou plusieurs addresses IP privées attribuées automatiquement.

## En pratique

Configurer un Service Endpoint se déroule en 3 étapes :

1. Activer et configurer vRack Services
2. Créer un sous-réseau et une plage d'adresse pour les services managés
3. Créer le Service Endpoint

Ces 3 étapes sont réalisables soit via l'[API OVHcloud](#api), soit via [l'espace client](#manager) et sont décrites en détails ci-dessous.

### Via l'espace client OVHcloud <a name="manager"></a>

#### Activation et configuration de vRack Services

L'activation et le configuration de vRack Services se déroule en lui attribuant un nom et une région.

vRack Services est un service régional. Vous devez donc choisir dans quelle région vous comptez l'utiliser. Pour bénéficier du Service Endpoint, vous devez sélectionner la région correspondante à votre service managé OVHcloud.

![overview 01](images/03-VRS-v4.png){.thumbnail}

Pour activer vRack Services, vous devez avoir un vRack. Si vous n'en avez pas à ce stade, il est possible d'en commander un (via le bouton `Commander`{.action} dans l'espace client).
Vous n'êtes pas obligé d'un commander un à ce stade, vous pouvez le faire plus tard et revenir sur le processus de création du vRack Service.

![overview 01](images/04-VRS-v2.png){.thumbnail}

Une fois la demande d'activation de vRack Services effectuée, vous êtes redirigé sur la liste des vRack Services. Il est possible d'associer un vRack à un vRack Services directement à partir de cette page.

![overview 01](images/05-VRS-v2.png){.thumbnail}

L'association à un vRack est simple, il suffit de sélectionner le vRack souhaité dans la liste proposée ici.

![overview 01](images/06-VRS-v2.png){.thumbnail}

#### Création d'un sous-réseau

Afin de créer un sous-réseau, il vous faudra renseigner 4 informations :

- Son nom
- Sa plage d'adresses
- La plage d'adresses réservée aux services managés.
    - Cette plage doit être un sous-ensemble de la plage d'addresses du sous-réseau, et sa taille doit être comprise entre /27 et /29.
    - Les adresses de cette plage ne doivent pas être utilisées par d'autres nœuds connectés au vRack.
- Un VLAN sur lequel vous pouvez exposer ce sous-réseau. Vous pouvez très bien ne pas choisir de VLAN.

![overview 01](images/10-VRS-v2.png){.thumbnail}

Dans le cas contraire, il vous sera demandé de préciser le numéro du VLAN.

![overview 01](images/12-VRS.png){.thumbnail}

Ainsi, après une installation rapide, vous serez en capacité de voir et surtout d'administrer ce sous-réseau en vous rendant dans cet onglet.

![overview 01](images/14-VRS-v2.png){.thumbnail}

#### Création d'un Service Endpoint

Les actions à mener sont très simples. En effet il suffit uniquement de renseigner 3 informations :

- Le type du Service Managé.
- Le nom du Service Managé.
- Le sous-réseau souhaité.

![overview 01](images/16-VRS.png){.thumbnail}

Une fois la création du Service Endpoint demandée, vous êtes redirigé vers la liste des Service Endpoints. Une bannière vous indique le statut de création de votre Service Endpoint.

![overview 01](images/17-VRS.png){.thumbnail}

Après quelques instants, votre nouveau Service Endpoint est configuré et disponible.

![overview 01](images/18-VRS.png){.thumbnail}

#### Liste de vos vRacks Services

Vous trouverez sur cette page la liste des différents vRack Services déclarés.

![overview 01](images/01-VRS-v2.png){.thumbnail}

#### Vue d'ensemble

- Dans ce premier onglet, vous trouverez toutes les informations générales relatives au vRack Services sélectionné.

![overview 01](images/07-VRS.png){.thumbnail}

- Dans l'onglet `sous-réseau`{.action} (qui ne contient aucune information lors de la création d'un vRack Services), vous trouverez la liste des sous-réseaux créés et disponibles pour le vRack Services sélectionné.

- Dans l'onglet `Service Endpoints`{.action} (qui ne contient aucune information lors de la création d'un vRack Services), vous trouverez la liste des Services Endpoints créés et disponibles pour le vRack Services sélectionné.

Notez que pour créer un Service Endpoint il faut d'abord passer par l'étape de création d'un sous-réseau.

### Via l'API OVHcloud <a name="api"></a>

Cette section aborde les actions qui peuvent être effectuées via l'API OVHcloud. Cela inclut la création de sous-réseaux et de Service Endpoints, l'association de vRack Services à un vRack et la gestion de ces services à l'aide d'instructions détaillées. 

Ces actions mettent en évidence les capacités opérationnelles des vRack Services, en démontrant comment ils peuvent être exploités pour améliorer et sécuriser votre infrastructure réseau.

Vous devez vous authentifier au préalable via cette [page](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#auth){.external}.

<a name="actions"></a>

**Actions:**

#### 1. Lister les vRack Services

Vous devez tout d'abord lister vos vRack Services afin de récuperer l'id du vRack Services sur lequel vous voulez réaliser vos actions.

Voici la section concernée dans la page de l'API disponible via cette [url](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#get-/vrackServices/resource){.external} :

![image](https://github.com/ovh/docs/assets/60412/7cdeb9c2-5a6e-4ca8-9403-8aede124e6d8)

Voici la ligne de commande correspondante :

```bash
curl -X GET "https://eu.api.ovh.com/v2/vrackServices/resource" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTGSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTM3MDhFNjRDMDA4MDEiLCJraW5kIjoib9F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6Ijc1MDE4MWFkODQ2MDVhYTA2MTY2ODNkNDIxOGEzMWZjMzZkZjM1NzExODFhYmM4ODY4OTliMmRlZjUwZTcxNDEiLCJpYXQiOjE3MTI3NTQ4Mzd9.TKbH0KW7stkOLWfNYMUdFfMSOYHubFLWWrF6CodVFDGHFE4yWiehGUqdgdUN1g9CC23sqr7M-fUvfHMmcpfPCg" \
```

L'id qui sera utilisé dans notre exemple est le suivant : `vrs-a9y-v91-xnm-f5u`.

#### 2. Lister tous les services managés éligibles au vRack Services concerné

Voici la section concernée dans la page de l'API disponible via cette [url](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#get-/vrackServices/resource/-vrackServicesId-/eligibleManagedService){.external} :

![image](https://github.com/ovh/docs/assets/60412/3da50fd3-be4b-479b-a7b3-f3449406b6d7)

Voici la ligne de commande correspondante :

```bash
curl -X GET "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u/eligibleManagedService" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTGSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTM3MDhFNjRDMDA4MDEiLCJraW5kIjoib9F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6Ijc1MDE4MWFkODQ2MDVhYTA2MTY2ODNkNDIxOGEzMWZjMzZkZjM1NzExODFhYmM4ODY4OTliMmRlZjUwZTcxNDEiLCJpYXQiOjE3MTI3NTQ4Mzd9.TKbH0KW7stkOLWfNYMUdFfMSOYHubFLWWrF6CodVFDGHFE4yWiehGUqdgdUN1g9CC23sqr7M-fUvfHMmcpfPCg" \
```

Les IDs des services managés utilisés plus bas dans notre exemple sont les suivants :

- `urn:v1:eu:resource:storageNetApp:examples-26ca-4fa4-a53e-79c2d0948z45`
- `urn:v1:eu:resource:storageNetApp:examples-9f3b-43a9-8908-c7ab1ac7e58f`

#### 3. Demander des mises à jour sur la configuration des vRack Services

Voici la section concernée dans la page de l'API disponible  via cette [url](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#put-/vrackServices/resource/-vrackServicesId-){.external} :

![image](https://github.com/ovh/docs/assets/60412/146cc671-6fdd-47ed-a741-5982bb9e07a8)

Il s'agit de l'unique route gérant toute mise à jour de la configuration des vRack Services. Son fonctionnement est le suivant :

1. Vous définissez une nouvelle spécification cible dans le corps de la requête.
2. Si cette spécification est validée, vous recevez en retour la ressource avec les valeurs de `targetSpec`{.action} et de `checksum`{.action} mises à jour.
3. La requête est traitée par une ou plusieurs tâches asynchrones qui visent à réconcilier l'état actuel avec le `targetSpec`{.action}.

Le `checksum`{.action} est utile dans deux cas :

- **Prévention des conflits lors des mises à jour :** lorsque vous souhaitez mettre à jour une ressource, il est judicieux de procéder en deux étapes. Commencez par effectuer une requête `GET`{.action} pour récupérer le `checksum`{.action} actuel de la ressource. Ensuite, vous pouvez appliquer les modifications souhaitées sur le `targetSpec`{.action}. Lorsque vous soumettez votre requête `PUT`{.action}, le `checksum`{.action} initial est également envoyé. Si la ressource a été modifiée entre-temps, votre demande sera refusée. Cette étape est cruciale car elle permet d'éviter d'écraser les modifications qui ont été apportées depuis votre dernière consultation. Ainsi, elle garantit l'intégrité et la cohérence des données.
- **Suivi de l'état des demandes :** une fois votre requête `PUT`{.action} acceptée, il est recommandé de surveiller régulièrement l'état de la ressource par des requêtes `GET`{.action} pour vérifier le `resourceStatus`{.action}. Cette pratique vous permet de confirmer que votre demande a été traitée et est considérée comme terminée lorsque le `resourceStatus`{.action} indique `READY`{.action} ou que le `checksum`{.action} est différent de celui renvoyé par votre requête `PUT`{.action} initiale. Si le `checksum`{.action} diffère, cela signifie non seulement que votre requête a été traitée avec succès, mais également qu'une autre requête a été acceptée et traitée juste après la vôtre pour la même ressource.

##### **Actions de configuration sans interruption**

La requête peut combiner n'importe laquelle des actions suivantes sans interruption (ce qui signifie qu'il n'y aura pas de coupure du service lors de la mise à jour) :

- mettre à jour le nom d'affichage des vRack Services
- créer un sous-réseau
- supprimer un sous-réseau sans Service Endpoint
- mettre à jour un sous-réseau :
    - mettre à jour le nom d'affichage
    - créer un ou plusieurs Service Endpoint

Notez qu'un sous-réseau avec plusieurs Service Endpoint peut être créé dans le même corps de requête.

Notez que la suppression d'un sous-réseau entraînera également la suppression des Service Endpoint intégrés.

##### **Actions de configuration non transparentes**

La modification des caractéristiques de sous-réseau énumérées ci-dessous entraînera une coupure de service pendant le traitement de la mise à jour. En effet, elles sont interprétées comme la suppression du sous-réseau existant et la création d'un nouveau sous-réseau avec les caractéristiques fournies.

Les IP qui ont été attribuées aux services managés seront réélues et peuvent donc changer :

- modifications dans le Subnet ServiceRange
- modifications sur le Subnet Vlan
- modifications du CIDR du sous-réseau
- supprimer un sous-réseau avec des Service Endpoints
- supprimer un ou plusieurs Service Endpoints

Les Services Endpoints des services intégrés seront également supprimés et recréés, ce qui implique une accessibilité fluctuante dans le vRack pour tous les services managés concernés.

Le vrackId est un attribut en lecture seule car l'association vRack/vRackServices est gérée par l'API vRack.

#### 4. Exemple complet, pour un vRack Services donné, permettant de modifier son displayName et de lui attacher un Service Endpoint

Pour cette section, veuillez bien lire la section [Actions](#actions) ci-dessus.

**Etape 1. Récupérer le `checksum` et le `targetSpec` du vRack Services concerné**

Action formulée avec un `GET`{.action} :

```bash
curl -X GET "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6ImNkNDg5Mzg2ZTAyOGEzNjA1NDQ0ZmUwZTFjZjU5ZWI4ZTdmMzhkNjMwNmJhNzFlZDdhZWY1YmNmNGIxNWU5OGQiLCJpYXQiOjE3MTMxNzE2MTB9.h7HWtfCRhXV51P8QZSZfl0OEI_nagATzaI9lvYKOp4IV_-Jew5HFh970TWFtZnGoLTgY9DVP6qyCvB5qu2RZAg" \
```

Retour de l'appel API :

```bash
{
  "checksum": "609cf69014e57abfb3d892133692ac6f",
  "createdAt": "2024-03-20T14:10:27.836606Z",
  "currentState": {
    "displayName": "My_vRackServices",
    "productStatus": "DRAFT",
    "region": "LIM",
    "subnets": [
      {
        "cidr": "10.120.0.0/16",
        "displayName": null,
        "serviceEndpoints": [],
        "serviceRange": {
          "cidr": "10.120.0.0/29",
          "remainingIps": 3,
          "reservedIps": 5,
          "usedIps": 0
        },
        "vlan": null
      }
    ],
    "vrackId": "pn-xyzzz"
  },
  "currentTasks": [],
  "id": "vrs-a9y-v91-xnm-f5u",
  "resourceStatus": "READY",
  "targetSpec": {
    "displayName": "My_vRackServices",
    "subnets": [
      {
        "cidr": "10.120.0.0/16",
        "displayName": null,
        "serviceEndpoints": [],
        "serviceRange": {
          "cidr": "10.120.0.0/29"
        },
        "vlan": null
      }
    ]
  },
  "updatedAt": "2024-04-15T07:59:54.265287Z",
  "iam": {
    "id": "a912f8ea-7b17-4bef-88e0-9c9376578xxx",
    "urn": "urn:v1:eu:resource:vrackServices:vrs-a9y-v91-xnm-f5u"
  }
}

```

**Etape 2. Changer le displayName et lui attacher un Service Endpoint**

Action formulée avec le `PUT`{.action} - Mise à jour en cours :

```bash
curl -X PUT "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6ImNkNDg5Mzg2ZTAyOGEzNjA1NDQ0ZmUwZTFjZjU5ZWI4ZTdmMzhkNjMwNmJhNzFlZDdhZWY1YmNmNGIxNWU5OGQiLCJpYXQiOjE3MTMxNzE2MTB9.h7HWtfCRhXV51P8QZSZfl0OEI_nagATzaI9lvYKOp4IV_-Jew5HFh970TWFtZnGoLTgY9DVP6qyCvB5qu2RZAg"\
 -H "content-type: application/json" \
 -d '{"checksum":"609cf69014e57abfb3d892133692ac6f","targetSpec":{"displayName":"My_vRackServices_updated","subnets":[{"cidr":"10.120.0.0/16","displayName":null,"serviceEndpoints":[{"managedServiceURN":"urn:v1:eu:resource:storageNetApp:f88c7410-f920-443b-ab1b-8c699a1c3xxx"}],"serviceRange":{"cidr":"10.120.0.0/29"},"vlan":null}]}}' \
```

Retour de l'appel API :

```bash
{
  "checksum": "add878be3bb736263590d03fd000b113",
  "createdAt": "2024-03-21T16:37:49.276927Z",
  "currentState": {
    "displayName": "My_vRackServices",
    "productStatus": "DRAFT",
    "region": "LIM",
    "subnets": [
      {
        "cidr": "10.0.0.0/24",
        "displayName": null,
        "serviceEndpoints": [],
        "serviceRange": {
          "cidr": "10.0.0.0/29",
          "remainingIps": 3,
          "reservedIps": 5,
          "usedIps": 0
        },
        "vlan": null
      }
    ],
    "vrackId": "pn-xyzzz"
  },
  "currentTasks": [
    {
      "id": "cfa1a6a6-fb0a-11ee-a63c-4277d8ca4yyy",
      "link": "/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u",
      "status": "PENDING",
      "type": "VrackServicesUpdate"
    }
  ],
  "id": "vrs-a9y-v91-xnm-f5u",
  "resourceStatus": "UPDATING",
  "targetSpec": {
    "displayName": "My_vRackServices_updated",
    "subnets": [
      {
        "cidr": "10.120.0.0/16",
        "displayName": null,
        "serviceEndpoints": [
          {
            "managedServiceURN": "urn:v1:eu:resource:storageNetApp:f88c7410-f920-443b-ab1b-8c699a1c3xxx"
          }
        ],
        "serviceRange": {
          "cidr": "10.120.0.0/29"
        },
        "vlan": null
      }
    ]
  },
  "updatedAt": "2024-04-15T09:30:34.683716Z"
}
```

> [!primary]
>
> Points notables :
>
> - `targetSpec` mise à jour avec la demande et nous avons également un nouveau `checksum`
> - `resourceStatus` passe à `UPDATING`
> - `currentTasks` : traitement asynchrone en cours
>

**Etape 3. Un dernier GET afin de vérifier que les actions asynchrones sont terminées**

> [!warning]
>
> Résultat attendu : Avoir un vRack Services avec un `resourceStatus` à `READY`. Si ce n'est pas le cas, réitérez le `GET` quelques instants plus tard.
>

Action formulée avec le `GET`{.action} :

```bash
curl -X GET "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6ImNkNDg5Mzg2ZTAyOGEzNjA1NDQ0ZmUwZTFjZjU5ZWI4ZTdmMzhkNjMwNmJhNzFlZDdhZWY1YmNmNGIxNWU5OGQiLCJpYXQiOjE3MTMxNzE2MTB9.h7HWtfCRhXV51P8QZSZfl0OEI_nagATzaI9lvYKOp4IV_-Jew5HFh970TWFtZnGoLTgY9DVP6qyCvB5qu2RZAg" \
```

Retour de l'appel API :

```bash
{
  "checksum": "add878be3bb736263590d03fd000b113",
  "createdAt": "2024-03-21T16:37:49.276927Z",
  "currentState": {
    "displayName": "My_vRackServices_updated",
    "productStatus": "ACTIVE",
    "region": "LIM",
    "subnets": [
      {
        "cidr": "10.120.0.0/16",
        "displayName": null,
        "serviceEndpoints": [
          {
            "endpoints": [
              {
                "description": "Nominal",
                "ip": "10.120.0.1"
              }
            ],
            "managedServiceURN": "urn:v1:eu:resource:storageNetApp:f88c7410-f920-443b-ab1b-8c699a1c3xxx"
          }
        ],
        "serviceRange": {
          "cidr": "10.120.0.0/29",
          "remainingIps": 2,
          "reservedIps": 5,
          "usedIps": 1
        },
        "vlan": null
      }
    ],
    "vrackId": "pn-xyzzz"
  },
  "currentTasks": [],
  "id": "vrs-a9y-v91-xnm-f5u",
  "resourceStatus": "READY",
  "targetSpec": {
    "displayName": "My_vRackServices_updated",
    "subnets": [
      {
        "cidr": "10.120.0.0/16",
        "displayName": null,
        "serviceEndpoints": [
          {
            "managedServiceURN": "urn:v1:eu:resource:storageNetApp:f88c7410-f920-443b-ab1b-8c699a1c3xxx"
          }
        ],
        "serviceRange": {
          "cidr": "10.120.0.0/29"
        },
        "vlan": null
      }
    ]
  },
  "updatedAt": "2024-04-15T09:31:16.562864Z",
  "iam": {
    "id": "1a8317c9-5020-4b55-bae4-1c01955b00bb",
    "urn": "urn:v1:eu:resource:vrackServices:vrs-a9y-v91-xnm-f5u"
  }
}
```

> [!primary]
>
> Points notables :
>
> - `currentState` est completement aligné avec le `targetSpec` donc `resourceStatus` passe à `READY`.
> - `productStatus` passe à `ACTIVE` car la configuration du vRack Services actuel permet d'accéder au Service Endpoint depuis le vRack.
> - L'IP attribuée au Service Managé est la suivante `10.120.0.1`.
> - Il reste 2 IP attribuables dans le ServiceRange.
>

## Contraintes et limites

### vRack Services

- Un vRack Services est attaché à une seule région.
- Au sein d'un vRack, il n'est pas possible de créer plusieurs vRack Services sur une même région.
- Un maximum de 20 vRack Services peuvent être crées par compte utilisateur.
- Plusieurs vRack Services peuvent être associés au même vRack. Ainsi, un client peut rendre les service managés accessibles depuis différentes régions.
- Le service managé à exposer doit obligatoirement faire partie de la même région que celle du vRack Services.

**Note :** La capacité de bande passante entre le service managé et les hôtes consommateurs du service n'est pas garanti edirectement via le produit vRack Services. Les garanties de bande passante contractuelles sont portées par les services OVHcloud tels que les service managés (par exemple : Enterprise File Storage) ou les services consommateurs du service managé (par exemple : serveurs Baremetal, clusters Hosted Private Cloud, instances Public Cloud).

### Sous-réseau

- La plage d'adresses du sous-réseau doit respecter le RFC 1918.
- La longueur de la plage d'adresse du sous-réseau est comprise entre /16 et /24.
- Modifier la plage d'adresses de sous-réseau causera une interruption des Service Endpoints associés (pendant le temps de la reconfiguration).
- La plage d'ID de VLAN valide est comprise entre 2 et 4094. La valeur "null" est autorisée (pas de VLAN / untagged).
- Chaque plage d'addresses de sous-réseau doit être unique pour un vRack Services donné. Les chevauchements sont détectés et écartés lors de la création du sous-réseau.
    - Pendant la beta, un maximum de 1 sous-réseau par vRack Services peut être défini par le client.
- Modifier l'ID de VLAN causera une interruption des Service Endpoint associés (pendant le temps de la reconfiguration).
- Chaque VLAN ID doit être unique pour un vRack Services donné.
- La première et la dernière adresses IP du sous-réseau ne sont pas utilisables et ne doivent donc pas être configurées sur un des serveurs attachés au vRack associé au vRack Services.

### Plage d'addresses du service managé (Service Range)

- La plage d'addresses du service managé doit être un sous-ensemble de la plage de sous-réseau.
- La taille de plage est comprise entre /27 et /29
- Il n'est pas possible de modifier la plage d'adresses du service managé une fois créée.

### Service Endpoint

- Pour garantir la cohérence du sous-réseau, la demande de création de Service Endpoint est rejetée si le pool d'IPs restantes sur le sous-réseau ne correspond pas au nombre d'adresses IP requis par le service managé.
- Les adresses IP de plage de service sont attribuées à un seul service managé à la fois.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.
