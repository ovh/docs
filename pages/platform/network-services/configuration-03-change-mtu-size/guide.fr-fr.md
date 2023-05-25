---
title: "Modifier la taille de la MTU pour les réseaux existants à l'aide des API/CLI OpenStack"
excerpt: "Découvrez comment modifier la taille de la MTU pour un réseau Public Cloud existant à l'aide des API/CLI OpenStack"
updated: 2023-05-24
---

## Objectif

Les trames Jumbo sont des trames Ethernet avec plus de 1500 octets de charge utile. Elles peuvent transporter jusqu'à 9000 octets de charge utile. Leur utilisation réduit le temps de traitement du routage. Dans le cas du vRack, cela va optimiser le trafic sur celui-ci.<br>
Mais si le réseau comprend la connectivité d'une instance entièrement privée vers des réseaux externes (Internet), la MTU (Maximum Transmission Unit) doit être définie à 1500 octets de charge utile.<br>
La taille de MTU sera la même pour tous les services utilisant des IPs sur le même réseau.

**Ce guide explique comment modifier la taille de MTU pour un réseau existant utilisant les CLI/API OpenStack.**

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud
- Utiliser l'[environnement de ligne de commande OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)
- L’outil [OpenStack Command Line Interface](https://docs.openstack.org/newton/user-guide/common/cli-install-openstack-command-line-clients.html) installé sur votre environnement de travail

Avant de poursuivre, il est recommandé de consulter ces guides :

- [Préparer un environnement pour utiliser l’API OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)
- [Charger les variables d'environnement OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables)
- [Gestion des tokens](/pages/platform/public-cloud/managing_tokens)

## En pratique

### Étape 1 - Lister les réseaux disponibles dans le projet Public Cloud

Listez les réseaux disponibles sur la région :

```bash
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| ed85c4df-5ba6-48fb-a7d3-xxxxxxxxxxxx | openstack  | 10d5fe8b-0596-4525-a387-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

> [!primary]
> Vous pouvez ici récupérer l'identifiant de votre réseau privé (Ext-Net est un réseau public utilisé pour les adresses IP publiques et géré par OVHcloud).

### Étape 2 - Afficher les paramètres du réseau privé

Utilisez la commande suivante pour afficher les paramètres du réseau privé :

```bash
openstack network show ed85c4df-5ba6-48fb-a7d3-xxxxxxxxxxxx
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| availability_zone_hints   |                                      |
| availability_zones        | nova                                 |
| created_at                | 2023-01-13T08:45:06Z                 |
| description               |                                      |
| dns_domain                | None                                 |
| id                        | ed85c4df-5ba6-48fb-a7d3-xxxxxxxxxxxx |
| ipv4_address_scope        | None                                 |
| ipv6_address_scope        | None                                 |
| is_default                | None                                 |
| is_vlan_transparent       | None                                 |
| l2_adjacency              | True                                 |
| mtu                       | 9000                                 |
| name                      | openstack                            |
| port_security_enabled     | True                                 |
| project_id                | f6e0b44aa5104f689870xxxxxxxxxxxx     |
| provider:network_type     | vrack                                |
| provider:physical_network | None                                 |
| provider:segmentation_id  | 0                                    |
| qos_policy_id             | None                                 |
| revision_number           | 5                                    |
| router:external           | Internal                             |
| segments                  | None                                 |
| shared                    | False                                |
| status                    | ACTIVE                               |
| subnets                   | 10d5fe8b-0596-4525-a387-xxxxxxxxxxxx |
| tags                      |                                      |
| tenant_id                 | f6e0b44aa5104f689870bxxxxxxxxxxx     |
| updated_at                | 2023-01-13T13:43:27Z                 |
+---------------------------+--------------------------------------+
```

### Étape 3 - Définir la nouvelle taille de MTU

- Via la CLI OpenStack :

```bash
openstack network set --mtu 1500 <networkid>
```

- Via l’API OpenStack :

```bash
TOKEN=$(openstack token issue -c id -f value)
curl -s -H "X-Auth-Token: $TOKEN" -H "Content-Type: application/json" -H "Accept: application/json" -X PUT -d '{"network": {"mtu": 1500}}' https://network.compute.<region>.cloud.ovh.net/v2.0/networks/<networkid>
```

### Étape 4 - Vérifier les modifications

Affichez les paramètres du réseau privé pour vérifier que la modification est appliquée :

```bash
openstack network show <network>
```

### Étape 5 - Redémarrer les services

A la suite de la mise à jour la valeur MTU sur un réseau existant sur lequel des instances sont connectées, il est nécessaire de procéder à un hard-reboot des instances qui ont un port dans ce réseau :

- Les instances Public Cloud
- Le(s) Node(s) Managed Kubernetes si vous utilisez une [passerelle personnalisée déployée dans le vRack avec un cluster Managed Kubernetes](/pages/platform/kubernetes-k8s/vrack-k8s-custom-gateway).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.