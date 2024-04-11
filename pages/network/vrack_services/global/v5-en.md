## Introduction

The vRack Services product allows you to benefit from network services on the private vRack network. By creating a Service Endpoint, you can expose an OVHcloud managed service with a private IP address on your vRack. This ensures that all communications with your managed service remain private and secure as they never leave your private network, which is isolated from other clients and the public network. It's also quick and easy to configure, either via the API or the customer dashboard. The first Managed Service to support Service Endpoint is [Enterprise File Storage](https://www.ovhcloud.com/fr/storage-solutions/enterprise-file-storage/){.external}. Other OVHcloud Managed Services will support Service Endpoint in the future.

For more information on the vRack Private Network, please visit this [page](https://www.ovhcloud.com/fr/network/vrack/){.external}.

![global schema](images/global_schema_20240410.png){.thumbnail}

## Objective

This article explains how to expose your managed service on the vRack using the vRack Services product, using the Service Endpoint functionality.

## Overview
There are 3 main components to setting up this configuration:

1.&nbsp;<ins>vRack Service</ins>   
The vRack Services product is the main component of your configuration and must be activated in a selected region and associated with a vRack. The selected region must match the location of your Managed Service. The Managed Service will be available from the selected region and will be accessible to all servers connected to the vRack, regardless of the region.
   
2.&nbsp;<ins>Subnet</ins>  
The vRack Services product uses the concept of a subnet to define a range of private IP addresses that can be used to communicate with managed services. Generally speaking, subnets divide a larger network into segments, each with a specific range of IP addresses. This logical division allows for efficient management of resources and traffic flow within your network.
   
3.&nbsp;<ins>Service Endpoint</ins>   
The Service Endpoint is your access point to the Managed Service. It is associated with a subnet and has one or more automatically assigned private IP addresses.

## Instructions
There are 3 steps to configuring a Service Endpoint:
1. Enable and configure vRack services
2. Create a subnet and address range for the managed services
3. Create the Service Endpoint

These 3 steps can be performed via either the API or the Customer Interface and are described in detail below.

### Manager

#### Create a vRack Service

    

A vRack Service is created by assigning it a name and a region.

The vRack Service is a regional service. You must therefore select the region in which you intend to use it. To benefit from the Service Endpoint, you must select the region corresponding to your OVHcloud managed service.

![overview 01](images/03-VRS-v2.png){.thumbnail}

---

You must have a vRack to activate vRack Services. If you do not have one at this stage, you can order one. 
You are under no obligation to order one at this stage, you can do so later and return to the vRack Service creation process.

![overview 01](images/04-VRS.png){.thumbnail}

---

Once the vRack Services activation request has been made, you will be taken to the list of vRack Services. You can associate a vRack with a vRack Service directly from this page.

![overview 01](images/05-VRS.png){.thumbnail}

---

Connecting to a vRack is simple, just select the vRack you want from the list here.

![overview 01](images/06-VRS.png){.thumbnail}




#### Create a subnet
    


To create a subnet, you need to enter 4 pieces of information:
- Its name
- Its address range
- The address range reserved for managed services.
    - This range must be a subset of the subnet address range and its size must be between /27 and /29.
    - Addresses in this range must not be used by other nodes connected to the vRack.
- A VLAN on which you can expose this subnet. You can choose not to have a VLAN.

![overview 01](images/10-VRS.png){.thumbnail}

---

If not, you will be prompted to enter the VLAN number.

![overview 01](images/12-VRS.png){.thumbnail}

---

After a short setup time, you'll be able to view and, most importantly, manage this subnet by going to this tab.

![overview 01](images/14-VRS.png){.thumbnail}




#### Create a Service Endpoint



The actions to be taken are very simple. All you need to do is enter 3 pieces of information:
- The type of service to be managed.
- The name of the managed service.
- The desired subnet.

![overview 01](images/16-VRS.png){.thumbnail}

---

Once you have requested the creation of the Service Endpoint, you will be taken to the list of Service Endpoints. A banner will display the creation status of your Service Endpoint.

![overview 01](images/17-VRS.png){.thumbnail}

---

In a few moments, your new Service Endpoint will be configured and available.

![overview 01](images/18-VRS.png){.thumbnail}



#### List of your vRacks Services

This screen lists the various vRack Services that have been declared.

![overview 01](images/01-VRS.png){.thumbnail}


#### Overview


This first tab contains all the general information related to the selected vRack Services.

![overview 01](images/07-VRS.png){.thumbnail}

---

This tab, which contains no information when a Services vRack is created, lists the subnets created and available for the selected Services vRack.

![overview 01](images/08-VRS.png){.thumbnail}

---

This tab, which does not contain any information when a Services vRack is created, contains the list of Services Endpoints created and available for the selected Services vRack.

Note that in order to create a Service Endpoint, you must first go through the subnet creation phase.

![overview 01](images/09-VRS.png){.thumbnail}



### API

This section covers the actions that can be performed using the API. This includes creating subnets and Service Endpoints, associating vRack Services with a vRack, and managing these services with detailed instructions. These actions highlight the operational capabilities of vRack Services and how they can be used to enhance and secure your network infrastructure.

You must first authenticate via this [page](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#auth){.external}.

#### <ins>Actions</ins>

<details>
<summary><b>1. List vRack Services</b></summary>
<blockquote>
    First, you need to list your vRack services to get the ID of the vRack service on which you want to perform your actions.

Here is the relevant section of the API page available at this [url](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#get-/vrackServices/resource){.external}
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
2. Si cette spécification est validée, vous recevez en retour la ressource avec les valeurs de targetSpec et de checksum mises à jour.
3. La requête est traitée par une ou plusieurs tâches asynchrones qui visent à réconcilier l'état actuel avec le targetSpec.

Le checksum aide à détecter les cas de concurrence sur les requêtes de mise à jour. Si la valeur du checksum interrogée diffère de celle renvoyée en réponse à votre requête initiale, cela signifie que le traitement de votre requête est terminé et qu'une autre requête est en cours de traitement.

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
- Chaque plage d'addresse de sous-réseau doit être unique pour un vRack Services donné. Les chevauchements sont détectés et écartés lors de la création du sous-réseau.
- Il n'est pas possible de modifier la plage d'adresse de sous-réseau une fois créée.
- La plage d'ID de VLAN valide est comprise entre 2 et 4094. La valeur "null" est autorisée (pas de VLAN / untagged).
- Un maximum de 1 sous-réseau par vRack Services peut être défini par le client.
- Un ID de VLAN ne peut être modifié une fois le sous-réseau créé.
- Chaque VLAN ID doit être unique pour un vRack Services donné.
- La première et la dernière adresses IP du sous-réseau n'est pas utilisable et ne doit donc pas être configuré sur un des serveurs attaché au vRack associé au vRack Services.

### Plage d'addresse du service managé (Service Range)
- La plage d'addresse du service managé doit être un sous-ensemble de la plage de sous-réseau.
- La taille de plage est comprise entre /27 et /29
- Il n'est pas possible de modifier la plage d'adresse du service managé une fois créée.

### Service Endpoint
- Pour garantir la cohérence du sous-réseau, la demande de création de Service Endpoint est rejetée si le pool d'IPs restantes sur le sous-réseau ne correspond pas au nombre d'adresses IP requis par le service managé.
- Chaque client est autorisé à créer un maximum de 20 Service Endpoints.
- Les adresses IP de plage de service sont attribuées à un seul service managé à la fois.

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.
