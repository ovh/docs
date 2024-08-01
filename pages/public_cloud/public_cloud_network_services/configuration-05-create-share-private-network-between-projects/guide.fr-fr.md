---
title: 'Réseau - Comment partager un réseau privé entre 2 projets Public Cloud'
excerpt: 'Découvrez comment partager un réseau privé entre deux projets Public Cloud OVHcloud.'
updated: 2024-07-31
---
 
## Objectif
 
Ce tutoriel vous montre comment connecter deux projets sur un réseau interne. Il permet de synchroniser les environnements de production et de préproduction sur plusieurs projets.
 
## Prérequis

- Vous avez 2 projets Public Cloud ou plus.
- Référez-vous aux guides suivants :
  - [Débuter avec l’API OpenStack](/pages/public_cloud/compute/starting_with_nova).
  - [Attacher une adresse Floating IP à une instance Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-03-attach-floating-ip-to-instance).
  - [Gestion des règles de firewall et port security sur les réseaux utilisant OpenStack CLI](/pages/public_cloud/compute/security_group_private_network).

## En pratique

### Dans le premier projet

#### 1. Lister les ID des projets

```sh
openstack project list -c ID -f value
 ```
Exemple de résultat :

```sh
abc123def456ghi789jkl0mnopqr1234
 ```

#### 2. Créer le réseau qui sera partagé

```sh
openstack network create shared_private_network
```

Exemple de résultat :

```sh
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| id                        | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| name                      | shared_private_network               |
| project_id                | abc123def456ghi789jkl0mnopqr1234     |
+---------------------------+--------------------------------------+
```

#### 3. Créer deux sous-réseaux, un pour les instances de notre projet et un partagé avec un autre projet

**Pour le projet 1 (local) :**

```sh
openstack subnet create --subnet-range 10.0.2.0/24 --network shared_private_network --allocation-pool start=10.0.2.2,end=10.0.2.254 local_subnet_v2
```

Exemple de résultat :

```sh
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| allocation_pools     | 10.0.2.2-10.0.2.254                  |
| cidr                 | 10.0.2.0/24                          |
| id                   | aa5d399a-6acf-4328-a7a8-e962fa16b792 |
| name                 | local_subnet_v2                      |
| network_id           | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| project_id           | abc123def456ghi789jkl0mnopqr1234     |
+----------------------+--------------------------------------+
```

**Pour le Projet 2 (partagé) :**

```sh
openstack subnet create --subnet-range 10.0.3.0/24 --network shared_private_network --allocation-pool start=10.0.3.2,end=10.0.3.254 shared_subnet_v2
```

Exemple de résultat :

```sh
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| allocation_pools     | 10.0.3.2-10.0.3.254                  |
| cidr                 | 10.0.3.0/24                          |
| id                   | 441d0d65-2e1b-413c-ad28-2876f1c14025 |
| name                 | shared_subnet_v2                     |
| network_id           | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| project_id           | abc123def456ghi789jkl0mnopqr1234     |
+----------------------+--------------------------------------+
```

#### 4. Partager ce réseau (et les sous-réseaux associés) avec le deuxième projet

```sh
NETWORK_ID=$(openstack network list --name shared_private_network -c ID -f value)
openstack network rbac create --target-project def456ghi789jkl0mnopqr1234 --action access_as_shared --type network ${NETWORK_ID}
```

Exemple de résultat :

```sh
+-------------------+--------------------------------------+
| Field             | Value                                |
+-------------------+--------------------------------------+
| action            | access_as_shared                     |
| id                | 890c123d-4567-89ef-gh12-3456789ijkl0 |
| object_id         | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| target_project_id | def456ghi789jkl0mnopqr1234           |
| type              | network                              |
+-------------------+--------------------------------------+
```

#### 5. Créer un port sur le sous-réseau local et une instance associée

```sh
openstack port create --network shared_private_network --fixed-ip subnet=local_subnet_v2 local_port_v2
```

Exemple de résultat :

```sh
+-------------------------+--------------------------------------+
| Field                   | Value                                |
+-------------------------+--------------------------------------+
| id                      | 99cb41a8-3639-4717-81e0-e75618bd7775 |
| name                    | local_port_v2                        |
| network_id              | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| fixed_ips               | ip_address='10.0.2.185', subnet_id='aa5d399a-6acf-4328-a7a8-e962fa16b792' |
+-------------------------+--------------------------------------+
```

```sh
openstack server create --port 99cb41a8-3639-4717-81e0-e75618bd7775 --security-group default --key-name my_key --flavor d2-2 --image "Ubuntu 22.04" local_instance
```

Exemple de résultat :

```sh
+--------------------------------------+-----------------------------------------------------+
| Field                                | Value                                               |
+--------------------------------------+-----------------------------------------------------+
| id                                   | 5bd0d067-eb9c-43a4-a105-6d06bf06bc4f                |
| name                                 | local_instance                                      |
| status                               | BUILD                                               |
+--------------------------------------+-----------------------------------------------------+
```

### Dans le deuxième projet

#### 1. Basculer vers le deuxième projet

```sh
export OS_PROJECT_ID=def456ghi789jkl0mnopqr1234
```

#### 2. Lister les ID des projets

```sh
openstack project list -c ID -f value
```

Exemple de résultat :

```sh
def456ghi789jkl0mnopqr1234
```

#### 3. Créer un port sur le réseau partagé

```sh
openstack port create --network shared_private_network --fixed-ip subnet=shared_subnet_v2 shared_port
```y

Exemple de résultat :

```sh
+-------------------------+--------------------------------------+
| Field                   | Value                                |
+-------------------------+--------------------------------------+
| id                      | f6446f46-ce57-47c4-b3bc-42fa28e7d4ff |
| name                    | shared_port                          |
| network_id              | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| fixed_ips               | ip_address='10.0.3.12', subnet_id='441d0d65-2e1b-413c-ad28-2876f1c14025' |
+-------------------------+--------------------------------------+
```

#### 4. Créer une instance sur le réseau partagé

```sh
openstack server create --port f6446f46-ce57-47c4-b3bc-42fa28e7d4ff --security-group default --key-name my_key --flavor d2-2 --image "Ubuntu 22.04" pong_server
```

Exemple de résultat :

```sh
+--------------------------------------+-----------------------------------------------------+
| Field                                | Value                                               |
+--------------------------------------+-----------------------------------------------------+
| id                                   | b8212ec4-5fff-4e31-8969-164ce33e7380                |
| name                                 | pong_server                                         |
| status                               | BUILD                                               |
+--------------------------------------+-----------------------------------------------------+
```

#### 5. Lister les serveurs pour vérifier leur état
   
```sh
openstack server list
```

Exemple de résultat :

```sh
+--------------------------------------+----------------+--------+-----------------------------------+--------------+--------+
| ID                                   | Name           | Status | Networks                          | Image        | Flavor |
+--------------------------------------+----------------+--------+-----------------------------------+--------------+--------+
| 5bd0d067-eb9c-43a4-a105-6d06bf06bc4f | local_instance | ACTIVE | shared_private_network=10.0.2.185 | Ubuntu 22.04 | d2-2   |
| b8212ec4-5fff-4e31-8969-164ce33e7380 | pong_server    | ACTIVE | shared_private_network=10.0.3.12  | Ubuntu 22.04 | d2-2   |
+--------------------------------------+----------------+--------+-----------------------------------+--------------+--------+
```

## Aller plus loin
 
Échangez avec notre [communauté d'utilisateurs](/links/community).
