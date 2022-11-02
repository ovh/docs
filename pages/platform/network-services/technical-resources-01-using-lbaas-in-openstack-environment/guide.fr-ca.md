---
title: "Déployer un Load Balancer Octavia"
slug: octavia-lbaas-in-openstack-env-deep-dive
excerpt: Découvrez comment configurer Octavia LBaaS pour Public Cloud
section: Ressources techniques
order: 01
---

**Dernière mise à jour le 02/11/2022**

## Objectif

Vous trouverez ici les configurations d'un Load Balancer:

- Déploiement d'un Load Balancer HTTP basique Privé → Privé
- Déploiement d'un Load Balancer HTTP basique Public → Privé

## Prérequis

- Avoir un [projet Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud
- Avoir un [réseau privé](https://docs.ovh.com/ca/fr/public-cloud/public-cloud-vrack/) configuré dans votre projet
- Avoir le client [OpenStack Octavia](https://docs.openstack.org/python-octaviaclient/latest/install/index.html) installé

## En pratique

### Load Balancer au sein de votre réseau privé (Privé → Privé)

Lorsque vous créez un Load Balancer, il obtient par défaut une IP privée dans le réseau privé sélectionné lors sa création.

Nous voulons équilibrer la charge entre les deux backends : `backend--1` et `backend--2`.

```bash
(os_client) ~ openstack server list     

+--------------------------------------+------------+--------+-----------------------------------------------------------------------+--------------+--------+
| ID                                   | Name       | Status | Networks                                                              | Image        | Flavor |
+--------------------------------------+------------+--------+-----------------------------------------------------------------------+--------------+--------+
| 5b8c722b-57d0-460a-b2c0-b0a681bf4e52 | backend--2 | ACTIVE | priv-net=10.0.111.243                                                 | Ubuntu 20.04 | d2-4   |
| 9a43ce4c-e0fe-4a54-81f5-aad3ac6f8e88 | backend--1 | ACTIVE | priv-net=10.0.112.172                                                 | Ubuntu 20.04 | d2-4   |
| 67b9372e-bf08-4c57-9945-42b07dbfcd36 | bastion    | ACTIVE | Ext-Net=2001:48f0:163:100::1662, 169.254.10.150; priv-net=10.0.109.243 | Ubuntu 20.04 | d2-8   |
+--------------------------------------+------------+--------+-----------------------------------------------------------------------+--------------+--------+
```

**1. Créer le Load Balancer**

```bash
openstack loadbalancer create --name loadbalancer_private_to_private --vip-subnet-id <private_subnet_id>
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| admin_state_up      | True                                 |
| availability_zone   | None                                 |
| created_at          | 2022-06-29T12:24:35                  |
| description         |                                      |
| flavor_id           | 2d4bc92c-38fc-4b50-9484-8351ab0c4e69 |
| id                  | 4db76fce-f8f7-435f-8031-716f82a7f1dc |
| listeners           |                                      |
| name                | loadbalancer_private_to_private      |
| operating_status    | OFFLINE                              |
| pools               |                                      |
| project_id          | 96575fa614c14aa7b001c7e121d772f2     |
| provider            | amphora                              |
| provisioning_status | PENDING_CREATE                       |
| updated_at          | None                                 |
| vip_address         | 10.0.3.50                            |
| vip_network_id      | d20943ed-5159-4805-b48a-2375dd93e480 |
| vip_port_id         | 631f240c-16f7-483f-b1c4-6eff7a8adcf4 |
| vip_qos_policy_id   | None                                 |
| vip_subnet_id       | 4ecfca39-6e87-496a-8692-2e7f43bf7767 |
| tags                |                                      |
+---------------------+--------------------------------------+
```

> [!warning] **Octavia Flavors**
>
> Notez que si vous ne fournissez pas le paramètre `--flavor` pendant la création, le load balancer sera de taille *small*.
> 

```bash
openstack loadbalancer flavor list
+--------------------------------------+--------+--------------------------------------+---------+
| id                                   | name   | flavor_profile_id                    | enabled |
+--------------------------------------+--------+--------------------------------------+---------+
| 2d4bc92c-38fc-4b50-9484-8351ab0c4e69 | small  | e9970d43-695e-4947-8005-38be80bc966a | True    |
| 4d6a92af-d4c8-4e81-8596-e3b14159e232 | medium | 24559467-a4dd-4712-9981-93276400fa17 | True    |
| fd43698c-0a2f-4124-9695-478f9114a07c | large  | 3ded4565-7bc7-40b3-9a2c-83077035b134 | True    |
+--------------------------------------+--------+--------------------------------------+---------+
```

> [!warning] **Octavia status**
>
> La création du Load Balancer Octavia prendra un certain temps, essentiellement le temps de création de l'instance et la configuration du réseau.
>
> Pour la configuration suivante, vous devrez attendre que le `provisioning_status` devienne `ACTIVE`.

Vous pouvez déjà voir que notre Load Balancer est associé à une adresse IP Virtuelle (VIP) lors de sa création.

Il s'agit de l'adresse IP du Load Balancer à l'intérieur de notre réseau privé.

**2. Créer un listener**

```bash
openstack loadbalancer listener create --protocol-port 80 --protocol HTTP --name listener <loadbalancer_id>
+-----------------------------+--------------------------------------+
| Field                       | Value                                |
+-----------------------------+--------------------------------------+
| admin_state_up              | True                                 |
| connection_limit            | -1                                   |
| created_at                  | 2022-06-29T12:34:37                  |
| default_pool_id             | None                                 |
| default_tls_container_ref   | None                                 |
| description                 |                                      |
| id                          | e2e67b80-61e6-43bd-b1f1-703ab1abc7af |
| insert_headers              | None                                 |
| l7policies                  |                                      |
| loadbalancers               | 4db76fce-f8f7-435f-8031-716f82a7f1dc |
| name                        | listener                             |
| operating_status            | OFFLINE                              |
| project_id                  | 96575fa614c14aa7b001c7e121d772f2     |
| protocol                    | HTTP                                 |
| protocol_port               | 80                                   |
| provisioning_status         | PENDING_CREATE                       |
| sni_container_refs          | []                                   |
| timeout_client_data         | 50000                                |
| timeout_member_connect      | 5000                                 |
| timeout_member_data         | 50000                                |
| timeout_tcp_inspect         | 0                                    |
| updated_at                  | None                                 |
| client_ca_tls_container_ref | None                                 |
| client_authentication       | NONE                                 |
| client_crl_container_ref    | None                                 |
| allowed_cidrs               | None                                 |
| tls_ciphers                 | None                                 |
| tls_versions                | None                                 |
| alpn_protocols              | None                                 |
| tags                        |                                      |
+-----------------------------+--------------------------------------+
```

**3. Créer un pool**

```bash
❯ openstack loadbalancer pool create --name pool --lb-algorithm ROUND_ROBIN --listener <listener_id> --protocol HTTP
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| admin_state_up       | True                                 |
| created_at           | 2022-06-29T12:41:52                  |
| description          |                                      |
| healthmonitor_id     |                                      |
| id                   | f0c833f7-53bb-46b7-8818-637d89a68089 |
| lb_algorithm         | ROUND_ROBIN                          |
| listeners            | e2e67b80-61e6-43bd-b1f1-703ab1abc7af |
| loadbalancers        | 4db76fce-f8f7-435f-8031-716f82a7f1dc |
| members              |                                      |
| name                 | pool                                 |
| operating_status     | OFFLINE                              |
| project_id           | 96575fa614c14aa7b001c7e121d772f2     |
| protocol             | HTTP                                 |
| provisioning_status  | PENDING_CREATE                       |
| session_persistence  | None                                 |
| updated_at           | None                                 |
| tls_container_ref    | None                                 |
| ca_tls_container_ref | None                                 |
| crl_container_ref    | None                                 |
| tls_enabled          | False                                |
| tls_ciphers          | None                                 |
| tls_versions         | None                                 |
| tags                 |                                      |
| alpn_protocols       | None                                 |
+----------------------+--------------------------------------+
``` 

**4. Ajouter les serveurs**

```bash
❯ openstack loadbalancer member create --subnet-id <private_subnet_id> --address <server_ip_address>  --protocol-port 80 <pool_id>
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| address             | 10.0.3.123                           |
| admin_state_up      | True                                 |
| created_at          | 2022-06-29T12:48:55                  |
| id                  | fbe34622-2538-4896-bda3-d92ca66f7a30 |
| name                |                                      |
| operating_status    | NO_MONITOR                           |
| project_id          | 96575fa614c14aa7b001c7e121d772f2     |
| protocol_port       | 80                                   |
| provisioning_status | PENDING_CREATE                       |
| subnet_id           | 4ecfca39-6e87-496a-8692-2e7f43bf7767 |
| updated_at          | None                                 |
| weight              | 1                                    |
| monitor_port        | None                                 |
| monitor_address     | None                                 |
| backup              | False                                |
| tags                |                                      |
+---------------------+--------------------------------------+
```

**5. Utilisez votre Load Balancer**

```bash
root@bastion:~# curl http://10.0.3.50/backend.txt
Backend 1
root@bastion:~# curl http://10.0.3.50/backend.txt
Backend 2
```

### Load Balancer en utilisant une IP publique (Public → Privé)

Nous allons utiliser le Load Balancer Octavia préalablement déployé en réseau privé et utiliser une Floating IP OpenStack.

Nous devons créer une Floating IP sur le réseau public (Ext-Net) et associer cette IP au port VIP du Load Balancer.

Afin d'utiliser une Floating IP, nous devons créer un routeur L3 et configurer une *external gateway* sur celui-ci.

#### Quel est le rôle d'une Floating IP ?

Les adresses Floating IP sont utilisées dans l'univers OpenStack pour exposer des ressources (via le port Neutron) vers Internet. Vous pouvez associer une Floating IP à un port de réseau privé **uniquement**.

Vous pouvez exposer deux types de ressources :

- Une instance avec un port privé
- Avoir une adresse IP virtuelle (VIP) d’Octavia Load Balancer.

Actuellement, les Floating IPs ne supportent pas les IPv6.

Vous pouvez en savoir plus sur notre page [Concepts](https://docs.ovh.com/ca/fr/publiccloud/network-services/additional-ip-vs-floating-ip/).

**1. Créez le routeur**

```bash
openstack router create <router_name>
```

**2. Ajouter une External Gateway sur votre routeur**

```bash
openstack router set --external-gateway Ext-Net <router_name>
```

**3. Connectez le routeur à votre réseau privé**

```bash
openstack router add subnet <router_id> <subnet_id>
```

Maintenant nous pouvons créer une Floating IP sur le réseau public Ext-Net

```bash
openstack floating ip create Ext-Net
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| created_at          | 2022-06-29T13:19:10Z                 |
| description         |                                      |
| dns_domain          | None                                 |
| dns_name            | None                                 |
| fixed_ip_address    | None                                 |
| floating_ip_address | 169.254.10.250                       |
| floating_network_id | b2c02fdc-ffdf-40f6-9722-533bd7058c06 |
| id                  | 5f1ad04e-f341-457b-a174-a1204ee4feef |
| name                | 169.254.10.250                       |
| port_details        | None                                 |
| port_id             | None                                 |
| project_id          | 96575fa614c14aa7b001c7e121d772f2     |
| qos_policy_id       | None                                 |
| revision_number     | 0                                    |
| router_id           | None                                 |
| status              | DOWN                                 |
| subnet_id           | None                                 |
| tags                | []                                   |
| updated_at          | 2022-06-29T13:19:10Z                 |
+---------------------+--------------------------------------+
```

Et l'associer à l'ID de l'adresse VIP du Load Balancer

```bash
openstack floating ip set --port <load_balancer_vip_port_id> <floating_ip_id>
```

**Utilisez votre Load Balancer avec son IP publique**.

```bash
❯ curl http://169.254.10.250/backend.txt
Backend 2
❯ curl http://169.254.10.250/backend.txt
Backend 1
❯ curl http://169.254.10.250/backend.txt
Backend 2
❯ curl http://169.254.10.250/backend.txt
Backend 1
❯ curl http://169.254.10.250/backend.txt
Backend 2
```

#### Où placer la Public Gateway ?

La passerelle publique est définie par un routeur L3 attaché à un réseau privé avec une passerelle externe.

![diagram](images/topology.png){.thumbnail}

## Aller plus loin

[Premiers pas avec le service Load Balancer pour Public Cloud](https://docs.ovh.com/ca/fr/publiccloud/network-services/getting-started-with-load-balancer-public-cloud/)

[Documentation officielle d'OpenStack Octavia](https://docs.openstack.org/octavia/latest/).

[Cookbook OpenStack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html).

[OpenStack Floating IP](https://docs.openstack.org/ocata/user-guide/cli-manage-ip-addresses.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

Rejoignez notre [Discord](https://discord.gg/PwPqWUpN8G) pour discuter avec les membres de l'équipe OVHcloud et d'autre utilisateurs.