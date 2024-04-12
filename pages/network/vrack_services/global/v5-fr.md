## Introduction

Le produit vRack Services vous permet de bénéficier de services réseau sur le réseau privé vRack. En créant un Service Endpoint, vous pouvez exposer, avec une adresse IP privée, un service managé par OVHcloud sur votre vRack. De cette façon, vous vous assurez que toutes les communications avec votre service managé restent privées et sécurisées, car elles ne quittent pas votre réseau privé, qui est isolé des autres clients et du réseau public. Il est également simple et rapide à configurer, soit via l'API, soit via l'espace client. Le premier service managé qui prend en charge Service Endpoint est [Enterprise File Storage](https://www.ovhcloud.com/fr/storage-solutions/enterprise-file-storage/){.external}. D'autres services managés OVHcloud prendront en charge le Service Endpoint à l’avenir.

Pour plus d'informations sur le réseau privé vRack veuillez consulter cette [page](https://www.ovhcloud.com/fr/network/vrack/){.external}.

![global schema](images/global_schema_20240410.png){.thumbnail}

## Objectif

Cet article vous explique comment exposer votre service managé sur le vRack avec le produit vRack Services, en utilisant la fonctionnalité Service Endpoint.

## Overview
Il y 3 composants principaux dans la mise en place de cette configuration:

1.&nbsp;<ins>vRack Service</ins>   
Le produit vRack Services est le composant principal de votre configuration, nécessitant une activation dans une région choisie, ainsi qu'une association à un vRack. La région choisie doit correspondre à l'emplacement de votre service managé. Le service managé sera disponible à partir de la région choisie et accessible à tous serveurs connectés au vRack, quelque soit la région.
   
2.&nbsp;<ins>Sous-réseau</ins>  
Le produit vRack Services utilise le concept de sous-réseau (ou subnet) afin de définir une plage d'addresse IP privée utilisable pour communiquer avec les services managés. De manière générale, les sous-réseaux divisent un réseau plus large en segments, chacun disposant d'une plage spécifique d'adresses IP. Cette division logique permet une gestion efficace des ressources et du flux de trafic au sein de votre réseau.
   
3.&nbsp;<ins>Service Endpoint</ins>   
Le Service Endpoint représente votre point d'accès au service managé. Il est associé à un sous-réseau et dispose d'une ou plusieurs addresses IP privées attribuées automatiquement.

## En pratique
Configurer un Service Endpoint se déroule en 3 étapes:
1. Activer et configurer vRack Services
2. Créer un sous-réseau et une plage d'adresse pour les services managés
3. Créer le Service Endpoint

Ces 3 étapes sont réalisables soit via l'API, soit via l'espace client et sont décrites en détails ci-dessous.

### Manager

#### Activation et configuration de vRack Services

    

L'activation et le configuration de vRack Services se déroule en lui attribuant un nom et une région.

vRack Services est un service régional. Vous devez donc choisir dans quelle région vous comptez l'utiliser. Pour bénéficier du Service Endpoint, vous devez sélectionner la région correspondante à votre service managé OVHcloud.

![overview 01](images/03-VRS-v4.png){.thumbnail}

---

Pour activer vRack Services vous devez avoir un vRack. Si vous n'en avez pas à cette étape il est possible d'en commander un. 
Vous n'êtes pas obligé d'un commander un à cette étape, vous pouvez le faire plus tard et revenir sur le processus de création du vRack Service.

![overview 01](images/04-VRS-v2.png){.thumbnail}

---

Une fois la demande d'activation de vRack Services effectué, vous êtes redirigé sur la liste des vRack Services. Il est possible d'associer un vRack à un vRack Service directement à partir de cette page.

![overview 01](images/05-VRS-v2.png){.thumbnail}

---

L'association à un vRack est simple, il suffit de sélectionner le vRack souhaité dans la liste proposée ici.

![overview 01](images/06-VRS-v2.png){.thumbnail}




#### Création d'un Sous-réseau
    


Afin de créer un sous-réseau il vous faudra renseigner 4 informations:
- Son nom
- Sa plage d'adresses
- La plage d'adresses réservée aux services managés.
    - Cette plage doit être un sous-ensemble de la plage d'addresses du sous-réseau, et sa taille doit être comprise entre /27 et /29.
    - Les adresses de cette plage ne doivent pas être utilisées par d'autres nœuds connectés au vRack.
- Un VLAN sur lequel vous pouvez exposer ce sous-réseau. Vous pouvez très bien ne pas choisir de VLAN.

![overview 01](images/10-VRS-v2.png){.thumbnail}

---

Dans le cas contraire il vous sera demandé de préciser le numéro du VLAN.

![overview 01](images/12-VRS.png){.thumbnail}

---

Ainsi, après un bref instant de mise en place vous serez en capacité de voir et surtout d'administrer ce sous-réseau en vous rendant dans cet onglet.

![overview 01](images/14-VRS-v2.png){.thumbnail}




#### Création d'un Service Endpoint



Les actions à mener sont très simple. En effet il suffit uniquement de renseigner 3 informations:
- Le type du Service Managé.
- Le nom du Service Managé.
- Le sous-réseau souhaité

![overview 01](images/16-VRS.png){.thumbnail}

---

Une fois la création du Service Endpoint demandée, vous êtes redirigé vers la liste des Service Endpoint. Une bannière vous indique le statut de création de votre Service Endpoint.

![overview 01](images/17-VRS.png){.thumbnail}

---

Après quelques instants, votre nouveau Service Endpoint est configuré et disponible.

![overview 01](images/18-VRS.png){.thumbnail}



#### Liste de vos vRacks Services

Dans cet écran vous trouverez la liste des différents vRack Services déclarés.

![overview 01](images/01-VRS-v2.png){.thumbnail}


#### Vue d'ensemble


Dans ce premier onglet, vous trouverez toutes les informations générales relatives au vRack Services sélectionné.

![overview 01](images/07-VRS.png){.thumbnail}

---

Dans l'onglet `Sous-réseau`{.action}, qui ne contient aucune information lors de la création d'un vRack Services, vous trouverez la liste des sous-réseaux créés et disponibles pour le vRack Services sélectionné.


Dans l'onglet `Service Endpoints`{.action}, qui ne contient aucune information lors de la création d'un vRack Services, vous trouverez la liste des Services Endpoints créés et disponibles pour le vRack Services sélectionné.

Il est a noter que pour créer un Service Endpoint il faut d'abord passer par l'étape de création d'un sous-réseau.




### API

Cette section aborde les actions qui peuvent être effectuées via l'API. Cela inclut la création de sous-réseaux et de Service Endpoint, l'association de vRack Services à un vRack et la gestion de ces services à l'aide d'instructions détaillées. Ces actions mettent en évidence les capacités opérationnelles des vRack Services, en démontrant comment ils peuvent être exploités pour améliorer et sécuriser votre infrastructure réseau.

Vous devez vous authentifier au préalable via cette [page](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#auth){.external}. 

#### <ins>Actions</ins>

<details>
<summary><b>1. Lister les vRack Services</b></summary>
<blockquote>
    Vous devez tout d'abord lister vos vRack Services afin de récuperer l'id du vRack Services sur lequel vous voulez réaliser vos actions.

Voici la section concernée dans la page de l'API disponible sur via cette [url](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#get-/vrackServices/resource){.external}
![image](https://github.com/ovh/docs/assets/60412/7cdeb9c2-5a6e-4ca8-9403-8aede124e6d8)

Voici la ligne de commande correspondante
``` bash
curl -X GET "https://eu.api.ovh.com/v2/vrackServices/resource" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTGSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTM3MDhFNjRDMDA4MDEiLCJraW5kIjoib9F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6Ijc1MDE4MWFkODQ2MDVhYTA2MTY2ODNkNDIxOGEzMWZjMzZkZjM1NzExODFhYmM4ODY4OTliMmRlZjUwZTcxNDEiLCJpYXQiOjE3MTI3NTQ4Mzd9.TKbH0KW7stkOLWfNYMUdFfMSOYHubFLWWrF6CodVFDGHFE4yWiehGUqdgdUN1g9CC23sqr7M-fUvfHMmcpfPCg" \
```

<details>
<summary> Extrait du résultat de cette commande</summary>
<blockquote>
    
``` json
[
  {
    "checksum": "02643afe107az5025a342c96e6196a56",
    "createdAt": "2024-04-09T14:56:46.564227Z",
    "currentState": {
      "displayName": "test_tracking",
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
      "vrackId": null
    },
    "currentTasks": [],
    "id": "vrs-a9y-v91-xnm-f5u",
    "resourceStatus": "READY",
    "targetSpec": {
      "displayName": "test_tracking",
      "subnets": [
        {
          "cidr": "10.0.0.0/24"
          "displayName": null,
          "serviceEndpoints": [],
          "serviceRange": {
            "cidr": "10.0.0.0/29"
          },
          "vlan": null
        }
      ]
    },
    "updatedAt": "2024-04-09T15:16:14.97363Z",
    "iam": {
      "id": "e3cb9a6c-cf36-4b86-83d9-bfb1487110b5",
      "urn": "urn:v1:eu:resource:vrackServices:vrs-a9y-v91-xnm-f5u"
    }
  },
  ...
]
```

</blockquote>


</details>


L'id qui sera utilisé dans notre exemple est le suivant `vrs-a9y-v91-xnm-f5u`

</blockquote>
</details>

<details>
<summary><b>2. Lister tous les services managés éligibles au vRack Services concerné</b></summary>
<blockquote>

Voici la section concernée dans la page de l'API disponible sur via cette [url](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#get-/vrackServices/resource/-vrackServicesId-/eligibleManagedService){.external}
![image](https://github.com/ovh/docs/assets/60412/3da50fd3-be4b-479b-a7b3-f3449406b6d7)

Voici la ligne de commande correspondante
``` bash
curl -X GET "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u/eligibleManagedService" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTGSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTM3MDhFNjRDMDA4MDEiLCJraW5kIjoib9F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6Ijc1MDE4MWFkODQ2MDVhYTA2MTY2ODNkNDIxOGEzMWZjMzZkZjM1NzExODFhYmM4ODY4OTliMmRlZjUwZTcxNDEiLCJpYXQiOjE3MTI3NTQ4Mzd9.TKbH0KW7stkOLWfNYMUdFfMSOYHubFLWWrF6CodVFDGHFE4yWiehGUqdgdUN1g9CC23sqr7M-fUvfHMmcpfPCg" \
```

<details>
<summary>Résultat de cette commande</summary>
<blockqquote>
    
``` json
[
  {
    "managedServiceType": "storageNetApp",
    "managedServiceURNs": [
        "urn:v1:eu:resource:storageNetApp:examples-26ca-4fa4-a53e-79c2d0948z45",
        "urn:v1:eu:resource:storageNetApp:examples-9f3b-43a9-8908-c7ab1ac7e58f"
    ]
  }
]
```

</blockqquote>
</details>

Les ids des services managés utilisés plus bas dans notre exemple sont les suivants: 
- `urn:v1:eu:resource:storageNetApp:examples-26ca-4fa4-a53e-79c2d0948z45`
- `urn:v1:eu:resource:storageNetApp:examples-9f3b-43a9-8908-c7ab1ac7e58f`

</blockquote>
</details>

<details>
<summary><b>3. Demander des mises à jour sur la configuration des vRack Services</b>
</summary>
<blockquote>

Voici la section concernée dans la page de l'API disponible sur via cette [url](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#put-/vrackServices/resource/-vrackServicesId-){.external}
![image](https://github.com/ovh/docs/assets/60412/146cc671-6fdd-47ed-a741-5982bb9e07a8)

Il s'agit de l'unique route gérant toute mise à jour de la configuration des vRack Services. Son fonctionnement est le suivant :
1. Vous définissez une nouvelle spécification cible dans le corps de la requête.
2. Si cette spécification est validée, vous recevez en retour la ressource avec les valeurs de `targetSpec`{.action} et de `checksum`{.action} mises à jour.
3. La requête est traitée par une ou plusieurs tâches asynchrones qui visent à réconcilier l'état actuel avec le `targetSpec`{.action}.

Le `checksum`{.action} est utile dans deux cas :
- <ins>Prévention des conflits lors des mises à jour :</ins> Lorsque vous souhaitez mettre à jour une ressource, il est judicieux de procéder en deux étapes. Commencez par effectuer une requête `GET`{.action} pour récupérer le `checksum`{.action} actuel de la ressource. Ensuite, vous pouvez appliquer les modifications souhaitées sur le `targetSpec`{.action}. Lorsque vous soumettez votre requête `PUT`{.action}, le `checksum`{.action} initial est également envoyé. Si la ressource a été modifiée entre-temps, votre demande sera refusée. Cette étape est cruciale car elle permet d'éviter d'écraser les modifications qui ont été apportées depuis votre dernière consultation. Ainsi, elle garantit l'intégrité et la cohérence des données.
- <ins>Suivi de l'état des demandes :</ins> Une fois votre requête `PUT`{.action} acceptée, il est recommandé de surveiller régulièrement l'état de la ressource par des requêtes `GET`{.action} pour vérifier le `resourceStatus`{.action}. Cette pratique vous permet de confirmer que votre demande a été traitée et est considérée comme terminée lorsque le `resourceStatus`{.action} indique `READY`{.action} ou que le `checksum`{.action} est différent de celui renvoyé par votre requête `PUT`{.action} initiale. Si le `checksum`{.action} diffère, cela signifie non seulement que votre requête a été traitée avec succès, mais également qu'une autre requête a été acceptée et traitée juste après la vôtre pour la même ressource.

<br><br>
<ins>Actions de configuration sans interruption</ins>

La requête peut combiner n'importe laquelle des actions suivantes sans interruption (ce qui signifie qu'il n'y aura pas de coupure du service lors de la mise à jour) :
- mettre à jour le nom d'affichage des vRack Services
- créer un Sous-réseau
- supprimer un Sous-réseau
- mettre à jour un Sous-réseau :
    - mettre à jour le nom d'affichage
    - créer un ou plusieurs Service Endpoint
    - supprimer un ou plusieurs Service Endpoint
 
Notez qu'un Sous-réseau avec plusieurs Service Endpoint peut être créé dans le même corps de requête.   

Notez que la suppression d'un Sous-réseau entraînera également la suppression des Service Endpoint intégrés.

</blockquote>
</details>

<br>

#### <ins>Exemples</ins>

Pour cette section, veuillez bien lire la section `Actions` ci-dessus

<details>
<summary><b>Modifier le displayName du vRack Services concerné</b></summary>
<blockquote>
    
``` bash
curl -X PUT "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6Ijc1MDE4MWFkODQ2MDVhYTA2MTY2ODNkNDIxOGEzMWZjMzZkZjM1NzExODFhYmM4ODY4OTliMmRlZjUwZTcxNDEiLCJpYXQiOjE3MTI3NTQ4Mzd9.TKbH0KW7stkOLWfNYMUdFfMSOYHubFLWWrF6CodVFDGHFE4yWiehGUqdgdUN1g9CC23sqr7M-fUvfHMmcpfPCg"\
 -H "content-type: application/json" \
 -d '{"checksum":"d41d8cd98f00b204e9800998ecf8427e","targetSpec":{"displayName":"Customized-VrackServices.DisplayName"}}' \

```

</blockquote>
</details>


<details>
<summary><b>Créer un Sous-réseau vide</b></summary>
<blockquote>

``` bash
curl -X PUT "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6Ijc1MDE4MWFkODQ2MDVhYTA2MTY2ODNkNDIxOGEzMWZjMzZkZjM1NzExODFhYmM4ODY4OTliMmRlZjUwZTcxNDEiLCJpYXQiOjE3MTI3NTQ4Mzd9.TKbH0KW7stkOLWfNYMUdFfMSOYHubFLWWrF6CodVFDGHFE4yWiehGUqdgdUN1g9CC23sqr7M-fUvfHMmcpfPCg"\
 -H "content-type: application/json" \
 -d '{"checksum":"fa7cda24e4e94031fb70956edfdfb33a","targetSpec":{"displayName":"My_vRack_Services","subnets":[{"cidr":"10.120.0.0/16","serviceEndpoints":[],"serviceRange":{"cidr":"10.120.0.0/29"},"vlan":2}]}}' \

```

</blockquote>
</details>




<details>
<summary><b>Créer un Service Endpoint dans un Sous-réseau existant</b></summary>
<blockquote>

``` bash
curl -X PUT "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6Ijc1MDE4MWFkODQ2MDVhYTA2MTY2ODNkNDIxOGEzMWZjMzZkZjM1NzExODFhYmM4ODY4OTliMmRlZjUwZTcxNDEiLCJpYXQiOjE3MTI3NTQ4Mzd9.TKbH0KW7stkOLWfNYMUdFfMSOYHubFLWWrF6CodVFDGHFE4yWiehGUqdgdUN1g9CC23sqr7M-fUvfHMmcpfPCg"\
 -H "content-type: application/json" \
 -d '{"checksum":"4c5d68ea2231e90db7495406018a0f5e","targetSpec":{"displayName":"My.vRack.Services","subnets":[{"cidr":"192.168.0.0/16","displayName":"My.Subnet","serviceEndpoints":[{"managedServiceURN":"urn:v1:eu:resource:storageNetApp:examples-00e1-4a3d-ae89-ac145675c8bb"}],"serviceRange":{"cidr":"192.168.0.0/29"},"vlan":30}]}}' \

```

</blockquote>
</details>



<details>
<summary><b>Supprimer un Sous-réseau avec ses Service Endpoint</b></summary>
<blockquote>

``` bash
curl -X PUT "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6Ijc1MDE4MWFkODQ2MDVhYTA2MTY2ODNkNDIxOGEzMWZjMzZkZjM1NzExODFhYmM4ODY4OTliMmRlZjUwZTcxNDEiLCJpYXQiOjE3MTI3NTQ4Mzd9.TKbH0KW7stkOLWfNYMUdFfMSOYHubFLWWrF6CodVFDGHFE4yWiehGUqdgdUN1g9CC23sqr7M-fUvfHMmcpfPCg"\
 -H "content-type: application/json" \
 -d '{"checksum":"8b70a21702a41638e32778c6400e1848","targetSpec":{"displayName":"MyVRS","subnets":[]}}' \

```

</blockquote>
</details>

<br>

## Contraintes et limites
### vRack Services
- Un vRack Services est attaché à une seule région.
- Au sein d'un vRack, il n'est pas possible de créer plusieurs vRack Services sur une même région.
- Un maximum de 20 vRack Services peuvent être crées par compte utilisateur.
- Plusieurs vRack Services peuvent être associés au même vRack. Ainsi, le client peut rendre les service managés accessibles depuis différentes régions.
- Le service managé a exposer doit obligatoirement faire partie de la même région que celle du vRack Services.

**Note :** La capacité de bande passante entre le service managé et les hôtes consommateurs du service n'est pas garanti directement via le produit vRack Services. Les garanties de bande passante contractuelles sont portées par les services OVHcloud tels que les service managés (par ex. Enterprise File Storage) ou les services consommateurs du service managé (par ex. serveurs Baremetal, clusters HPC, instances public cloud).

### Sous-réseau
- La plage d'adresse du sous-réseau doit respecter le RFC 1918.
- La longueur de la plage d'adresse du sous-réseau est comprise entre /16 et /24.
- Modifier la plage d'adresses de sous-réseau causera une interruption des Service Endpoints associés (pendant le temps de la reconfiguration).
- La plage d'ID de VLAN valide est comprise entre 2 et 4094. La valeur "null" est autorisée (pas de VLAN / untagged).
- Chaque plage d'addresse de sous-réseau doit être unique pour un vRack Services donné. Les chevauchements sont détectés et écartés lors de la création du sous-réseau.
    - Pendant la beta, un maximum de 1 sous-réseau par vRack Services peut être défini par le client.
- Modifier l'ID de VLAN causera une interruption des Service Endpoint associés (pendant le temps de la reconfiguration).
- Chaque VLAN ID doit être unique pour un vRack Services donné.
- La première et la dernière adresses IP du sous-réseau n'est pas utilisable et ne doit donc pas être configuré sur un des serveurs attaché au vRack associé au vRack Services.

### Plage d'addresse du service managé (Service Range)
- La plage d'addresse du service managé doit être un sous-ensemble de la plage de sous-réseau.
- La taille de plage est comprise entre /27 et /29
- Il n'est pas possible de modifier la plage d'adresse du service managé une fois créée.

### Service Endpoint
- Pour garantir la cohérence du sous-réseau, la demande de création de Service Endpoint est rejetée si le pool d'IPs restantes sur le sous-réseau ne correspond pas au nombre d'adresses IP requis par le service managé.
- Les adresses IP de plage de service sont attribuées à un seul service managé à la fois.

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.
