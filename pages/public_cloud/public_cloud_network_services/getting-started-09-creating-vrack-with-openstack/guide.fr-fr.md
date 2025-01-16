---
title: "Configuration du vRack Public Cloud à l'aide de l'OpenStack CLI"
excerpt: "Découvrez comment activer et gérer un vRack Public Cloud à l'aide de l'OpenStack CLI"
updated: 2025-01-13
---

## Objectif

Le [vRack](/links/network/vrack) est un réseau privé qui vous permet de configurer l’adressage entre plusieurs serveurs dédiés OVHcloud. Mais il vous permet également d’ajouter des [instances Public Cloud](/links/public-cloud/compute) à votre réseau privé afin de créer une infrastructure de ressources physiques et virtuelles.

**Ce guide a pour objectif de vous accompagner dans la configuration de vos instances Public Cloud à l'aide de l'OpenStack CLI**

## Prérequis

- Posséder un [projet Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project)
- Être connecté à votre [espace client OVHcloud](/links/manager)
- Avoir [créé un utilisateur OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) (facultatif)
- Connaissances réseaux élémentaires
- Consulter le guide [Configurer le vRack sur le Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack) (pour comprendre les différentes méthodes de gestion du vRack avec le Public Cloud)

Avant de commencer, assurez-vous de lire ces guides pour configurer correctement votre environnement OpenStack :

- [Préparer l’environnement pour utiliser l’API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api).
- [Charger les variables d’environnement OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables).

## En pratique

### Sommaire

- [Étape 1 : Activer et gérer un vRack](#activating-vrack)
    - [Depuis l'espace client OVHcloud](#control-panel)
    - [Depuis les APIv6 OVHcloud](#ovhcloud-api)
- [Étape 2 : Créer un réseau privé dans le vRack](#private-network)
- [Étape 3 : Intégrer une instance dans le vRack](#instance-vrack)
    - [Cas d'une nouvelle instance](#new-instance)
    - [Cas d'une instance déjà existante](#existing-instance)
- [Suppression d'une interface](#detach-interface)


<a name="activating-vrack"></a>

### Étape 1 : Activer et gérer un vRack

> [!warning]
> Le vRack est géré au niveau de l’infrastructure OVHcloud, ce qui signifie que vous ne pouvez l’administrer que dans votre espace client et l’APIv6 OVHcloud.
>

<a name="control-panel"></a>

#### Depuis l'espace client OVHcloud

> [!primary]
> Ceci ne s'applique pas aux projets nouvellement créés qui sont désormais automatiquement livrés avec un vRack. Pour visualiser le vRack une fois le projet créé, rendez-vous dans le menu `Bare Metal Cloud`{.action} et cliquez sur `Network`{.action} dans l’onglet de gauche. Cliquez sur `Réseau Privé vRack`{.action} pour voir le(s) vRack(s).
>

Si vous avez un projet plus ancien et que vous n'avez pas de vRack, vous devez en commander un. Ce produit est gratuit et la mise à disposition ne prend que quelques minutes.

Allez dans le menu `Bare Metal Cloud`{.action} et cliquez sur le bouton `Commander`{.action}. Sous ce menu, cliquez sur l'option `vRack`{.action}.

![Commander le vrack](images/ordering_vrack_2024.png){.thumbnail}

Vous serez redirigé vers une autre page pour valider la commande, l'opération prendra quelques minutes.

Une fois le service actif, vous le retrouverez dans votre espace client dans la section `Bare Metal Cloud`{.action} > `Network`{.action} > `Réseau Privé vRack`{.action}. Sous l’appellation « pn-xxxxxx ».

Dans la liste des services éligibles, sélectionnez le projet que vous souhaitez ajouter au vRack et cliquez sur le bouton `Ajouter`{.action}.

![ajouter le projet](images/addprojectvrack.png){.thumbnail}

<a name="ovhcloud-api"></a>

#### Depuis les APIv6 OVHcloud

Pour activer et gérer un vRack depuis les APIv6 OVHcloud, cliquez [ici](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#etape-1-activer-et-gerer-un-vrack) pour consulter le guide spécifique à cette méthode.

<a name="private-network"></a>

### Étape 2 : Créer un réseau privé dans le vRack

Il est nécessaire de créer un réseau privé avec un réseau local virtuel (VLAN) afin que les instances reliées au vRack puissent communiquer entre elles.

Sur l'offre Public Cloud, vous pouvez créer jusqu'à 4 000 VLAN au sein d’un seul vRack. Cela signifie donc que vous pouvez utiliser chaque adresse IP privée jusqu’à 4 000 fois.
Ainsi, par exemple, l'IP 192.168.0.10 du VLAN 2 est différente de l'IP 192.168.0.10 du VLAN 42.

Cela peut vous être utile afin de segmenter votre vRack entre plusieurs réseaux virtuels.

Afin de créer le même réseau privé, il faut créer 2 objets OpenStack : network et subnet.

Dans l'exemple suivant, nous spécifions le `VLAN_ID` auquel nous voulons que le réseau fasse partie via `--provider-network-type` et `--provider-segment`.

Vous pouvez supprimer ces paramètres. Dans ce cas, un `VLAN_ID` disponible sera utilisé.

```bash 
openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.0.0.0/16
```

<a name="instance-vrack"></a>

### Étape 3 : Intégrer une instance dans le vRack

Deux situations peuvent se présenter à vous :

- L'instance n'existe pas encore.
- L'instance existe déjà et vous devez l'ajouter au vRack.

<a name="new-instance"></a>

#### Cas d'une nouvelle instance

**Récupération des informations nécessaires**

Identification des réseaux publics et privés :

```bash
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MonVLAN-42 | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MonVLAN_0  | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

ou

```bash
nova net-list
 
+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MonVLAN-42 | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MonVLAN_0  | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Vous devrez noter les ID des réseaux vous intéressant :
><br> - Ext-Net pour avoir une IP publique
><br> - Celui du ou des VLAN nécessaires à votre configuration
>

Pensez également à noter les informations suivantes, comme indiqueé dans le [guide d'utilisation de l'API Nova](/pages/public_cloud/compute/starting_with_nova) :

- ID ou nom de la clé SSH OpenStack
- ID du type d'instance (flavor)
- ID de l'image souhaitée (Système d'exploitation, snapshot, etc.)

**Déploiement de l'instance**

Avec les éléments récupérés précédemment, il est possible de créer une instance en l'incluant directement dans le vRack :

```bash
nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [nom de votre instance]
```

Ex :

```bash
nova boot --key-name ma-cle-ssh --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NomDeMonInstance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Nom de la clé]                                      |
| metadata                             | {}                                                   |
| name                                 | [nom de votre instance]                                  |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```

ou

```bash
openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [nom de votre instance]
```

Ex :

```bash
openstack server create --key-name ma-cle-ssh --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NomDeMonInstance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Nom de la clé]                                      |
| metadata                             | {}                                                   |
| name                                 | [nom de votre instance]                                  |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```

Vous avez la possibilité de définir l'adresse IP de l'instance de votre interface vRack au niveau d'OpenStack.

Pour cela, vous pouvez ajouter un simple argument dans la fonction « --nic » :

`--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`

Exemple :

`--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`

**Vérification de l'instance**

Après quelques instants on peut vérifier la liste des instances existantes afin de retrouver le serveur créé :

```bash
openstack server list
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| ID                                   |       Name          | Status | Networks                                         |     Image Name     |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Nom de l'instance] | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MonVrack=[IP_V4_vRack] | [Nom-de-l'instance]|
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
```

```bash
nova list
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| ID                                   | Name               | Status | Task State | Power State | Networks                                         |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Nom-de-l'instance]| ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MonVrack=[IP_V4_vRack] |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
```

<a name="existing-instance"></a>

#### Cas d'une instance déjà existante

**Récupération des informations nécessaires**

Identification de vos instances :

```bash
openstack server list
 
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| ID                                   | Name         | Status | Networks                                                               | Image Name |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | Mon-Instance | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MonVrack=192.168.0.124 | Debian 9   |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
```

ou

```bash
nova list
 
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | Mon-Instance | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MonVrack=192.168.0.124 |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
```

Identification des réseaux publics et privés :

```bash
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MonVLAN-42 | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MonVLAN-0  | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

ou

```bash
nova net-list
 
+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MonVLAN-42 | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MonVLAN-0  | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Vous devrez noter les ID des réseaux vous intéressant :
><br> - Ext-Net pour avoir une IP publique
><br> - Celui du ou des VLAN nécessaires à votre configuration
>

**Ajout d'une interface privée**

Afin d'attacher une nouvelle interface, vous pouvez effectuer la commande suivante :

```bash
nova interface-attach --net-id <ID-VLAN> <ID-instance>
```

Par exemple :

```bash
nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
```

Vous pouvez vérifier que l'action à bien été prise en compte :

```bash
nova show <ID-instance>
 
+--------------------------------------+----------------------------------------------------------+
| Property                             | Value                                                    |
+--------------------------------------+----------------------------------------------------------+
| Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                    | => votre IP Publique
| MonVLAN-42 network                   | 192.168.0.x                                              | => votre IP Privée
[...]
```

ou

```bash
openstack server show <ID-instance>
+--------------------------------------+-------------------------------------------------------------------------+
| Field                                | Value                                                                   |
+--------------------------------------+-------------------------------------------------------------------------+
[...]
| addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MonVLAN-42=192.168.0.x  | => votre IP Publique ; votre IP Privée                                                                     
[...]
```

<a name="detach-interface"></a>

### Suppression d'une interface

> [!warning]
> La suppression d'une interface est définitive.
>
> Dans le cas où vous supprimeriez l'interface « Ext-Net » (IP publique), cette adresse serait relâchée et remise en circulation. Vous ne pourriez donc pas vous la réattribuer.
><br>Cette action n'est à effectuer que si vous souhaitez isoler votre serveur dans le vRack (interface « Ext-Net ») ou la sortir d'un VLAN.
>

Afin de détacher une interface, vous aurez besoin, dans un premier temps, d'identifier le port Neutron qui aura été créé.

Pour cela, vous pourrez utiliser les commandes suivantes :

```bash
neutron port-list
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                                         |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | {"subnet_id": "01234567-8901-abscdef12345678910abcd", "ip_address": "192.168.0.x"}                |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | {"subnet_id": "65432109-abcd-ef09-8765-43210abcdef1", "ip_address": "2001:41d0:xxx:xxxx::xxxx"}   |
|                                      |      |                   | {"subnet_id": "abcdef12-3456-7890-abcd-ef1234567890", "ip_address": "YY.YY.YY.YY"}                |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
```

ou

```bash
openstack port list
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                                        |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | ip_address='192.168.0.xx', subnet_id='301234567-8901-abscdef12345678910abcd'              |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | ip_address='2001:41d0:xxx:xxxx::xxxx', subnet_id='65432109-abcd-ef09-8765-43210abcdef1'   |
|                                      |      |                   | ip_address='YY.YY.YY.YY', subnet_id='abcdef12-3456-7890-abcd-ef1234567890'                |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
```

Une fois le port à supprimer identifié, vous pouvez effectuer la commande suivante :

```bash
nova interface-detach <ID_instance> <port_id>
```

Par exemple :

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

## Aller plus loin

[Configuration du vRack Public Cloud depuis les APIv6 OVHcloud](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api).

[Serveurs Dédiés - Créer plusieurs VLAN dans le vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).