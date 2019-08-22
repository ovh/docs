---
title: Utiliser le vRack et les reseaux privés avec les instances Public Cloud
slug: utiliser-le-vrack-et-les-reseaux-prives-avec-les-instances-public-cloud
legacy_guide_number: 2162
section: Tutoriels
hidden: true
---


## Les Étapes pour utiliser les reseaux privés avec les instances Public Cloud
Pour utiliser les réseaux privés avec les instances Public Cloud, il est nécessaire de raccorder le projet à un vRack.

Les étapes nécessaires à la mise en réseau de deux instances Public Cloud sont :

- Création d'un vRack 3
- Attachement du projet Public Cloud au vRack
- Création d'un réseau privé
- Attachement des instances au réseau privé


## Creation d'un vRack 3

Dans l'ordre, exécuter les commandes suivantes depuis [l'APIv6 d'OVH](https://eu.api.ovh.com/console/#/){.external} :

> [!api]
>
> @api {POST} /order/vrack/new
> 


> [!success]
>
> Remarques : 
> Cet appel va créer un bon de commande pour un vRack. La commande d'un vRack est gratuite. Récupérez le numéro de bon de commande (orderId)
> 


> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
> 

orderID celui récupéré à l'appel précédent paymentMean fidelityAccount orderID


> [!success]
>
> Remarques :
> Même s'il s'agit d'un bon de commande à 0€, il est nécessaire de simuler un paiement du bon de commande. Votre bon de commande sera alors validé et son traitement commencera.
> 

> [!api]
>
> @api {GET} /me/order/{orderId}/status
> 

orderID celui récupéré au premier appel


> [!success]
>
> Remarques :
> Il faut attendre que la commande soit en statut `delivered`.
> 

> [!api]
>
> @api {GET} /me/order/{orderId}/details/{orderDetailId}
> 

orderID celui récupéré au premier appel orderDetailId celui récupéré à l'appel précédent orderID

> [!success]
>
> Remarques  :
> L'information qui est importante ici est le "domain" qui doit avoir la forme suivante : "pn-XXXX".
> 

> [!api]
>
> @api {GET} /me/order/{orderId}/details
> 

orderID celui récupéré au premier appel


> [!success]
>
> Remarques  :
> Cet appel est nécessaire pour ensuite récupérer le nom du vRack créé. Un tableau à un élément est retourné.
> 


## Attachement du projet Public Cloud au vRack

Dans le cas ou l'identifiant du projet Public Cloud n'est pas connu, procéder comme suit :

> [!api]
>
> @api {GET} /cloud/project
> 

> [!success]
>
> Remarques :
> Cela permet de récupérer la liste des projets.
> 

> [!api]
>
> @api {GET} /cloud/project/{serviceName}
> 

serviceName un des identifiant récupérés à l'appel précédent


> [!success]
>
> Remarques :
> Cela permet d'identifier le projet grâce au champ "description".
> 

Une fois l'information de l'identifiant du projet et du nom du vRack est connue, l'association se fait comme ceci :

> [!api]
>
> @api {POST} /vrack/{serviceName}/cloudProject
> 

serviceName le "domain" récupéré à l'étape précédente, c'est le nom du vRack project l'identifiant de projet cloud, de la forme d'une chaîne de 32 caractères serviceName

> [!success]
>
> Remarques  :
> Cet appel initialise l'association du projet au vRack, il faut récupérer l'id de la tâche.
> 

> [!api]
>
> @api {GET} /vrack/{serviceName}/task/{taskId}
> 

serviceName le "domain" récupéré à l'étape précédente. C'est le nom du vRack taskID l'id de la tâche récupérée à l'appel précédent serviceName

> [!success]
>
> Remarques  :
> Cet appel permet de vérifier le statut de la tâche. Une fois la tâche terminée, passer à l'appel suivant.
> 


## Creation d'un réseau privé

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/network/private
> 

serviceName l'identifiant de votre projet name nom du réseau privé region exemple : SBG1 vlandID ID du nouveau VLAN, à choisir entre 1 et 4000 l'identifiant de votre projet

> [!success]
>
> Remarques  :
> C'est l'étape de création du VLAN.
> Vous pouvez laisser le champ "Region" vide pour que celui ci soit activé pour toutes les régions
> L'identifiant du VLAN est nécessaire. Il sera utilisé pour établir la communication avec d'autres services OVH compatibles vRack.
> 


> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/private
> 

serviceName l'identifiant de votre projet


> [!success]
>
> Remarques  :
> Cet appel permet de récupérer le networkId.
> Celui ci se présentera sous la forme suivante : nom-vrack_vlanId.
> 

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/network/private/{networkId}/subnet
> 

serviceName l'identifiant de votre projet networkId l'identifiant de votre réseau récupéré lors de la commande précédente dhcp true ou false end dernière adresse du sous réseau network bloc IP du sous réseau region exemple : SBG1 start première adresse du sous réseau networkId


> [!success]
>
> Remarques  :
> C'est l'étape de création du sous réseau par région.
> Vous pouvez activer ou non l'attribution d'adresses IP privées de manière dynamique via DHCP.
> 


> [!alert]
>
> Faites attention à bien séparer vos pools d'adresses IP pour les différentes régions.
> Par exemple :
>
> - De 192.168. 0 .2 à 192.168. 0 .254 pour SBG1
> - De 192.168. 1 .2 à 192.168. 1 .254 pour GRA1
>

Pour récupérer l'adresse IP privée de votre instance, vous pouvez utiliser l'appel :

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/instance/{instanceId}
>

## Attachement des instances au réseau privé


### Avec l'APIv6 d'OVH

Nous allons créer une nouvelle instance raccordée à notre réseau privé.

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/public
>

serviceName l'identifiant de votre projet


> [!success]
>
> Remarques  :
> Cette étape permet de récuperer le networkID du réseau public afin de le configurer sur votre instance.
> 

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/private
>

serviceName l'identifiant de votre projet


> [!success]
>
> Remarques  :
> Cette étape permet de récuperer le networkID de votre réseau privé afin de le configurer sur votre instance.
> 

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/instance
>


> [!success]
>
> Remarques  :
> En plus des paramètres classisques pour lancer une instance, vous pourrez configurer les interfaces réseaux de vos instances.
> 

> [!alert]
>
> Il n'est pas possible de lier une instance existante au réseau privé via les APIv6 d'OVH pour le moment, il faudra forcement en créer une nouvelle.
> 


### Avec l'API OpenStack

- Lister les réseaux disponibles :
- Créer une nouvelle instance avec 2 interfaces :
- Vérifier votre instance :

Cette instance a donc 2 interfaces réseaux :

- Publique : 149.xxx.xxx.48
- Privée : 192.168.0.5



> [!success]
>
> Avec les API OpenStack, il est possible d'ajouter l'interface réseau privée
> sur une instance déjà existante.
> Voila la procédure à suivre :
> 
> ```bash
> nova interface-attach --net-id b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 Instance1
> ```
> 
> 
> ```bash
> nova list
> +--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
> | ID                                   | Name              | Status | Task State | Power State | Networks                                               |
> +--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
> | 0952355f-cc8b-45b7-b011-d20415adc9f5 | Instance1         | ACTIVE | -          | Running     | Ext-Net=149.xxx.xxx.83; private_network_1=192.168.0.6  |
> | 0b4be30f-b21f-4cba-a51b-c2024ab20ae8 | test_vrack        | ACTIVE | -          | Running     | Ext-Net=149.xxx.xxx.48; private_network_1=192.168.0.5  |
> +--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
> ```
>

## Configuration de l'interface réseau

Vous pouvez vérifier que vos 2 interfaces sont présentes sur votre instance à l'aide de la commande suivante :

```bash
ip addr list
```

Vous devriez normalement retrouver 3 interfaces réseaux :

- lo : Loopback
- eth0 : votre interface publique
- eth1 : votre interface privée

Il suffit ensuite de configurer votre adresse IP privée :


```bash
root@test-vrack:~$  ip addr add 192.168.0.5/16 dev eth1
```

Puis activer votre interface réseau :

```bash
root@test-vrack:~$ ip link set eth1 up
```