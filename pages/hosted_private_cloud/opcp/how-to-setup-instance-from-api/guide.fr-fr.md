---
title: "OPCP - Comment installer une instance depuis les API OpenStack"
excerpt: "Découvrez comment déployer une instance OPCP via les API OpenStack en configurant les réseaux, sous-réseaux, instances et clés SSH"
updated: 2025-11-18
---

## Objectif

Ce guide détaille les étapes à suivre pour installer un noeud OPCP via la création d'une instance à partir des API OpenStack.
Avant de pouvoir déployer des services sur vos baies **OPCP**, il est nécessaire de disposer au moins d’un noeud installé et actif.

## Prérequis

- Disposer d'un service [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) actif.
- Posséder un compte utilisateur avec les droits suffisants pour se connecter aux API OpenStack.
- [Préparer l'environnement pour utiliser l'API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
- [Charger les variables d'environnement pour le projet](/pages/hosted_private_cloud/opcp/how-to-use-api-and-get-credentials).

## En pratique

Vous pouvez obtenir la liste des commandes OpenStack disponibles à l'aide de la commande suivante :

```bash
openstack command list
```

Vous pouvez filtrer les commandes affichées en indiquant le groupe :

```bash
openstack command list --group compute
```

Il est aussi possible d'avoir des informations concernant une commande en ajoutant `help` devant celle ci :

```bash
openstack help flavor list 

usage: openstack flavor list [-h] [-f {csv,json,table,value,yaml}] [-c COLUMN]
                             [--quote {all,minimal,none,nonnumeric}] [--noindent]
                             [--max-width <integer>] [--fit-width] [--print-empty]
                             [--sort-column SORT_COLUMN]
                             [--sort-ascending | --sort-descending] [--public | --private | --all]
                             [--min-disk <min-disk>] [--min-ram <min-ram>] [--long]
                             [--marker <flavor-id>] [--limit <num-flavors>]

List flavors ...
```

> [!success]
>
> Consultez la documentation du client OpenStack directement sur le [site OpenStack](https://docs.openstack.org/python-openstackclient/latest/cli/index.html).
>

### Récupérer les paramètres nécessaires à la création d'une instance

#### Créer un réseau privé (*private network*) et un sous réseau (*subnet*)

**Etape 1 : Créer le réseau privé**

Avant de déployer votre instance, il est généralement nécessaire de créer un **réseau privé** afin qu’il soit accessible au sein de votre infrastructure locale.
Si vous avez déjà un réseau privé avec un subnet sur votre projet que vous souhaitez utiliser, vous pouvez ignorer l'étape de création et directement lister vos réseaux pour récupérer le nom ou l'ID du réseau concerné.

```bash
openstack network create $NETWORK_NAME
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| availability_zone_hints   |                                      |
| availability_zones        |                                      |
| created_at                | 2025-11-05T15:18:06Z                 |
| description               |                                      |
| dns_domain                | None                                 |
| id                        | da5ed9ae-65c2-441b-99f4-75d8eb87c214 |
| ipv4_address_scope        | None                                 |
| ipv6_address_scope        | None                                 |
| is_default                | False                                |
| is_vlan_transparent       | None                                 |
| mtu                       | 1500                                 |
| name                      | opcp-docs                            |
| port_security_enabled     | True                                 |
| project_id                | 057ac6e82ade49078a5c66f4371eaf22     |
| provider:network_type     | vlan                                 |
| provider:physical_network | physnet1                             |
| provider:segmentation_id  | 2140                                 |
| qos_policy_id             | None                                 |
| revision_number           | 1                                    |
| router:external           | Internal                             |
| segments                  | None                                 |
| shared                    | False                                |
| status                    | ACTIVE                               |
| subnets                   |                                      |
| tags                      |                                      |
| updated_at                | 2025-11-05T15:18:06Z                 |
+---------------------------+--------------------------------------+
```

Par défaut, un réseau n’est visible que par le projet qui l’a créé (ainsi que par les utilisateurs administrateurs).

Si vous souhaitez créer un réseau **partagé entre tous vos projets**, vous pouvez utiliser le paramètre `--share`.

Pour partager un réseau uniquement avec certains projets spécifiques, il est nécessaire d’utiliser le mécanisme **Role-Based Access Control (RBAC)** d’OpenStack : [Documentation RBAC Neutron](https://docs.openstack.org/neutron/pike/admin/config-rbac.html).

Par ailleurs, si vous souhaitez créer le réseau privé dans un **VLAN particulier**, vous pouvez le préciser à l’aide des paramètres suivants :

- `--provider-network-type vlan`
- `--provider-physical-network physnet1`
- `--provider-segment $VLAN_ID`

Par exemple, si vous souhaitez créer un réseau privé partagé dans le VLAN 2025 qui se nomme opcpdocs:

```bash
openstack network create --share --provider-network-type vlan --provider-physical-network physnet1 --provider-segment 2025 opcpdocs
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| availability_zone_hints   |                                      |
| availability_zones        |                                      |
| created_at                | 2025-11-05T15:34:30Z                 |
| description               |                                      |
| dns_domain                | None                                 |
| id                        | 2a92f464-e1c0-4daa-8ecd-b3ba6b3b96da |
| ipv4_address_scope        | None                                 |
| ipv6_address_scope        | None                                 |
| is_default                | False                                |
| is_vlan_transparent       | None                                 |
| mtu                       | 1500                                 |
| name                      | opcpdocs                             |
| port_security_enabled     | True                                 |
| project_id                | 07f0c728fe844d778cda63ca28547937     |
| provider:network_type     | vlan                                 |
| provider:physical_network | physnet1                             |
| provider:segmentation_id  | 2025                                 |
| qos_policy_id             | None                                 |
| revision_number           | 1                                    |
| router:external           | Internal                             |
| segments                  | None                                 |
| shared                    | True                                 |
| status                    | ACTIVE                               |
| subnets                   |                                      |
| tags                      |                                      |
| updated_at                | 2025-11-05T15:34:30Z                 |
+---------------------------+--------------------------------------+
```

Une fois le réseau créé, vous pouvez le lister via la commande :

```bash
openstack network list --name $NETWORK_NAME
+--------------------------------------+-----------+---------+
| ID                                   | Name      | Subnets |
+--------------------------------------+-----------+---------+
| 2a92f464-e1c0-4daa-8ecd-b3ba6b3b96da | opcp-docs |         |
+--------------------------------------+-----------+---------+
```

Si nécessaire, vous pouvez lister l'ensemble des réseaux en retirant l'argument `--name`.

**Etape 2 : Créer le subnet**

Par défaut, le seul élément nécessaire pour créer un subnet sur votre réseau est le CIDR que vous souhaitez configurer et le réseau que vous venez de créer :

```bash
openstack subnet create --network $NETWORK_NAME --subnet-range 192.168.120.0/24 $SUBNET_NAME
```

Si vous souhaitez cependant préciser un *allocation pool*, vous pouvez le spécifier via différents paramètres.
Par exemple, si vous souhaitez créer un sous réseau avec le CIDR 192.168.120.0/24 en allouant uniquement 50 adresses IP du CIDR et avec une gateway spécifique, vous pouvez utiliser la commande suivante :

```bash
openstack subnet create --network opcpdocs --subnet-range 192.168.120.0/24 --allocation-pool start=192.168.120.11,end=192.168.120.60 --gateway 192.168.120.8 opcpdocs-subnet
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| allocation_pools     | 192.168.120.11-192.168.120.60        |
| cidr                 | 192.168.120.0/24                     |
| created_at           | 2025-11-05T16:17:58Z                 |
| description          |                                      |
| dns_nameservers      |                                      |
| dns_publish_fixed_ip | None                                 |
| enable_dhcp          | True                                 |
| gateway_ip           | 192.168.120.8                        |
| host_routes          |                                      |
| id                   | b532e25f-3aae-4396-99e9-ad6811a03a6e |
| ip_version           | 4                                    |
| ipv6_address_mode    | None                                 |
| ipv6_ra_mode         | None                                 |
| name                 | opcpdocs-subnet                      |
| network_id           | 2a92f464-e1c0-4daa-8ecd-b3ba6b3b96da |
| project_id           | 07f0c728fe844d778cda63ca28547937     |
| revision_number      | 0                                    |
| segment_id           | None                                 |
| service_types        |                                      |
| subnetpool_id        | None                                 |
| tags                 |                                      |
| updated_at           | 2025-11-05T16:17:58Z                 |
+----------------------+--------------------------------------+
```

Ce subnet pourra être utilisé pour déployer une instance, permettant ainsi à OpenStack d'attribuer une adresse IP à celle-ci lors de l'installation.

#### Ajout d'une clé SSH publique

Dans un premier temps, il est nécessaire d'ajouter une clé SSH publique qui permettra de se connecter sur les instances.

- Lister les commandes liées aux clés SSH :

```bash
openstack help | grep keypair         
  keypair create  Create new public or private key for server ssh access
  keypair delete  Delete public or private key(s)
  keypair list    List key fingerprints
  keypair show    Display key details
```

- Ajouter la clé SSH publique :

```bash
openstack keypair create --public-key ~/.ssh/id_rsa.pub $SSHKEY
```

- Lister les clés SSH disponibles :

```bash
openstack keypair list
+---------------+-------------------------------------------------+------+
| Name          | Fingerprint                                     | Type |
+---------------+-------------------------------------------------+------+
| SSHKEY        | 5c:fd:9d:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:3a | ssh  |
+---------------+-------------------------------------------------+------+
```

#### Lister les modèles d'instance

Il faudra ensuite récupérer l'ID ou le nom du modèle que l'on souhaite utiliser :

```bash
openstack flavor list
+--------------------------------------+---------------------+---------+------+-----------+-------+-----------+
| ID                                   | Name                |     RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+---------------------+---------+------+-----------+-------+-----------+
| 4e731d33-4c1e-4286-bc63-68c2cba3bc59 | gpu                 |     400 |  900 |         0 |   128 | True      |
| 8bc6b1e0-dfdd-44d8-83fb-cef5e8fb6ec2 | scale-2             |     256 | 4000 |         0 |    32 | True      |
| f975e49a-fd75-4a7e-868e-2842972e82e2 | hsm                 |     512 | 4000 |         0 |   128 | True      |
| fcd2c556-9a16-4532-a5c8-e9d9275ba78f | scale-1             |     128 | 2000 |         0 |    24 | True      |
| ff5b4d7d-46c9-4bf5-b300-f1f465661e64 | scale-3             |     256 | 4000 |         0 |    48 | True      |
+--------------------------------------+---------------------+---------+------+-----------+-------+-----------+
```

#### Lister les images disponibles

Pour finir, il suffit de récupérer l'ID ou le nom de l'image qui sera utilisée pour l'instance :

```bash
openstack image list 
+--------------------------------------+-----------------------------------------------+--------+
| ID                                   | Name                                          | Status |
+--------------------------------------+-----------------------------------------------+--------+
| 6540686f-0150-496b-a894-03d95ef8bc7e | ironic-agent.initramfs                        | active |
| 5f6d4237-023b-4a25-8ceb-7051ffc6d632 | ironic-agent.kernel                           | active |
| 7600f9fc-fc1f-4fb8-aaa3-878bb9399d26 | CentOS 9 OPCP                                 | active |
| ebabdaaa-a52d-4246-9790-e77ba5c49519 | Debian 12 LVM OPCP                            | active |
+--------------------------------------+-----------------------------------------------+--------+
```

### Installation d'une instance

Avec les éléments récupérés précédemment, vous pouvez créer une instance pour déployer un système d'exploitation, ainsi que votre clé publique SSH sur la flavor souhaitée :

```bash
openstack server create --key-name OPCPdocs2 --flavor scale-1 --image "Debian 12 LVM OPCP" --network opcpdocs OPCPdocs-server
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                               | Value                                                                                                                                                                                                                                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| OS-DCF:diskConfig                   | MANUAL                                                                                                                                                                                                                                         |
| OS-EXT-AZ:availability_zone         | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:host                | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:hostname            | opcpdocs-server                                                                                                                                                                                                                                |
| OS-EXT-SRV-ATTR:hypervisor_hostname | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:instance_name       | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:kernel_id           | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:launch_index        | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:ramdisk_id          | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:reservation_id      | r-900xkw3k                                                                                                                                                                                                                                     |
| OS-EXT-SRV-ATTR:root_device_name    | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:user_data           | None                                                                                                                                                                                                                                           |
| OS-EXT-STS:power_state              | N/A                                                                                                                                                                                                                                            |
| OS-EXT-STS:task_state               | scheduling                                                                                                                                                                                                                                     |
| OS-EXT-STS:vm_state                 | building                                                                                                                                                                                                                                       |
| OS-SRV-USG:launched_at              | None                                                                                                                                                                                                                                           |
| OS-SRV-USG:terminated_at            | None                                                                                                                                                                                                                                           |
| accessIPv4                          | None                                                                                                                                                                                                                                           |
| accessIPv6                          | None                                                                                                                                                                                                                                           |
| addresses                           | N/A                                                                                                                                                                                                                                            |
| adminPass                           | VbRFzvGnk9rP                                                                                                                                                                                                                                   |
| config_drive                        | None                                                                                                                                                                                                                                           |
| created                             | 2025-11-05T16:41:32Z                                                                                                                                                                                                                           |
| description                         | None                                                                                                                                                                                                                                           |
| flavor                              | description=, disk='2000', ephemeral='0', extra_specs.:architecture='bare_metal', extra_specs.resources:CUSTOM_DISCOVERED='1', extra_specs.resources:DISK_GB='0', extra_specs.resources:MEMORY_MB='0', extra_specs.resources:VCPU='0',         |
|                                     | extra_specs.trait:CUSTOM_SCALE1='required', id='scale-1', is_disabled=, is_public='True', location=, name='scale-1', original_name='scale-1', ram='128', rxtx_factor=, swap='0', vcpus='24'                                                    |
| hostId                              | None                                                                                                                                                                                                                                           |
| host_status                         | None                                                                                                                                                                                                                                           |
| id                                  | 2f9c2e41-b4dc-4787-a3ef-9b2b2d686dbb                                                                                                                                                                                                           |
| image                               | Debian 12 LVM OPCP (ebabdaaa-a52d-4246-9790-e77ba5c49519)                                                                                                                                                                                     |
| key_name                            | OPCPdocs2                                                                                                                                                                                                                                      |
| locked                              | None                                                                                                                                                                                                                                           |
| locked_reason                       | None                                                                                                                                                                                                                                           |
| name                                | OPCPdocs-server                                                                                                                                                                                                                                |
| pinned_availability_zone            | None                                                                                                                                                                                                                                           |
| progress                            | None                                                                                                                                                                                                                                           |
| project_id                          | 07f0c728fe844d778cda63ca28547937                                                                                                                                                                                                               |
| properties                          | None                                                                                                                                                                                                                                           |
| security_groups                     | name='default'                                                                                                                                                                                                                                 |
| server_groups                       | None                                                                                                                                                                                                                                           |
| status                              | BUILD                                                                                                                                                                                                                                          |
| tags                                |                                                                                                                                                                                                                                                |
| trusted_image_certificates          | None                                                                                                                                                                                                                                           |
| updated                             | 2025-11-05T16:41:32Z                                                                                                                                                                                                                           |
| user_id                             | b1481b3f72e8aecda9a623b215085227f9d85170f4fc4524b3a4ab1a0b97dfde                                                                                                                                                                               |
| volumes_attached                    |                                                                                                                                                                                                                                                |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Par défaut, l'instance qui va être installée est sélectionnée automatiquement parmi le pool de nœuds ayant le statut `Available` et pour lesquels les **traits** requis par la flavor correspondent avec l'installation demandée. Cela signifie qu'un serveur physique correpondant aux contraintes décrites par les **traits** sera sélectionné.

Après plusieurs minutes, l'instance est déployée et vous pouvez retrouver vos instances installées via la commande suivante :

```bash
openstack server list
+--------------------------------------+-----------------+--------+-------------------------+---------------------+---------+
| ID                                   | Name            | Status | Networks                | Image               | Flavor  |
+--------------------------------------+-----------------+--------+-------------------------+---------------------+---------+
| 2f9c2e41-b4dc-4787-a3ef-9b2b2d686dbb | OPCPdocs-server | ACTIVE | opcpdocs=192.168.120.59 | Debian 12 LVM OPCP  | scale-1 |
+--------------------------------------+-----------------+--------+-------------------------+---------------------+---------+
```

Si vous souhaitez installer l'instance sur un noeud spécifique, vous pouvez spécifier l'identifiant de votre noeud dans votre commande :

```bash
openstack server create --flavor $flavor_ID --image $image_ID --network $network_ID --key-name $your_keyname --availability-zone nova::$baremetal_noeud_ID $server_name
```

Il faudra cependant vous assurer que le noeud a le statut `Available` et possède bien les **traits** nécessaires pour installer la flavor souhaitée.

Pour vérifier l'état actuel du noeud et récupérer son identifiant, vous pouvez consultez notre documentation : [Cycle de vie d'un noeud OPCP](/pages/hosted_private_cloud/opcp/node-lifecycle).

#### Suppression d'une instance

Vous pouvez supprimer une instance grâce à la commande suivante :

```bash
openstack server delete $INSTANCE_ID
```

Votre noeud passera en état `Cleaning`. Cette étape consiste à la réinitialisation matérielle du serveur physique et de l'effacement des données présentes sur les disques.

Durant cette étape, vous ne verrez plus l'instance dans la liste des instances, cependant le noeud ne sera pas disponible immédiatement pour une nouvelle installation. N'oubliez pas de prendre en compte ce délai lors de vos opérations de maintenance.
L'opération peut prendre plusieurs minutes avant que le noeud soit de nouveau `Available` et disponible pour une nouvelle installation.

### Références

- [OpenStack Official Documentation - Client](https://docs.openstack.org/python-openstackclient/latest/cli/index.html).
- [OpenStack Official Documentation - Network](https://docs.openstack.org/python-openstackclient/pike/cli/command-objects/network.html).

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
