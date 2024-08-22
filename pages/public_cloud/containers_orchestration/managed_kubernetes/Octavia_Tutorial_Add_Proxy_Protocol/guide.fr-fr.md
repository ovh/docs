---
title: 'Obtenir l'adresse IP source dans le Load Balancer Public Cloud'
excerpt: 'Apprenez à configurer le Load Balancer Public Cloud OVHcloud pour obtenir l'adresse IP source du client.'
updated: 2024-08-05
---

## Objectif

**Ce guide explique comment configurer le Load Balancer Public Cloud pour obtenir l'adresse IP source du client dans le contexte d'OVHcloud sans utiliser Kubernetes CCM.**
- Le Load Balancer Public Cloud (basé sur le projet OpenStack Octavia) offre de nombreuses fonctionnalités. Suivez [ce guide](/pages/public_cloud/public_cloud_network_services/getting-started-01-create-lb-service) pour en savoir plus.

## Prérequis

- Accès à un environnement OpenStack sur OVHcloud avec un Load Balancer Public Cloud configuré. [Guide étape par étape](/pages/public_cloud/public_cloud_network_services/getting-started-01-create-lb-service/) & [Commencer avec le Load Balancer sur le Cloud Public](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- Droits administratifs pour créer et modifier des services de Load Balancer Public Cloud.
  
    - **Droits Administratifs Nécessaires :**
      - **Accès Root sur les serveurs backend :** Assurez-vous d'avoir un accès root ou superutilisateur aux serveurs backend. Cela est essentiel pour installer et configurer des logiciels (comme NGINX) et pour effectuer les modifications nécessaires aux paramètres du serveur.
      - **Rôle d'administrateur de projet dans OVHcloud :** Assurez-vous d'être assigné au rôle d'administrateur de projet au sein de votre projet OpenStack OVHcloud. Ce rôle vous permet de créer, modifier et gérer les services de Load Balancer Public Cloud.
      - **Accès administratif à l'environnement OVHcloud :** Assurez-vous d'avoir les autorisations nécessaires pour interagir avec les ressources réseau et de calcul dans votre environnement OVHcloud. Cela inclut la création d'instances, la modification des paramètres réseau et la gestion des groupes de sécurité.

    - **Où vérifier/attribuer les droits :**
      - **OVHcloud Control Panel :** Vérifiez que vous disposez des rôles et permissions appropriés dans votre OVHcloud Control Panel sous la section "Utilisateurs & Rôles" de votre projet. Si des permissions supplémentaires sont nécessaires, consultez votre administrateur de projet pour vous assurer que vous avez l'accès nécessaire.

- **Créer deux instances** sur OVHcloud et installer des serveurs web qui serviront de backend. Par exemple, vous pouvez utiliser des serveurs NGINX. [Créer une instance sur OVHcloud et se connecter à l'instance via SSH](/pages/public_cloud/compute/public-cloud-first-steps).

## Instructions

### Étape 1 : Configurer le serveur backend sur OVHcloud

Dans ce guide, vous allez créer une instance sur OVHcloud et installer un serveur web (NGINX) qui servira de backend.

#### 1. Créer une instance sur OVHcloud
   
Accédez à votre [OVHcloud Control Panel](https://www.ovh.com/manager/#/hub), allez dans la section **"Public Cloud"** et créez une nouvelle instance. Pour des instructions détaillées, consultez la documentation officielle : [Créer une instance sur OVHcloud et se connecter à l'instance via SSH](/pages/public_cloud/compute/public-cloud-first-steps).

#### 2. Installer NGINX sur l'instance

Connectez-vous à l'instance via SSH.

Mettez à jour les paquets et installez NGINX :

```bash
sudo dnf install -y nginx
```

#### 3. Configurer NGINX pour afficher les informations de la requête
Modifiez la configuration de NGINX pour afficher les informations de la requête, y compris l'adresse IP du client et les en-têtes :

```bash
sudo vi /etc/nginx/nginx.conf
```
Ajoutez les directives suivantes dans le bloc http :

```bash
    user nginx;
    worker_processes auto;
    error_log /var/log/nginx/error.log;
    pid /run/nginx.pid;

    events {
    worker_connections 1024;
    }

    http {
        include /etc/nginx/mime.types;
        default_type application/octet-stream;
        log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
        access_log /var/log/nginx/access.log main;

        sendfile on;
        tcp_nopush on;
        tcp_nodelay on;
        keepalive_timeout 65;
        types_hash_max_size 2048;

        server {
        listen 80;
        server_name localhost;

            location / {
                add_header X-Forwarded-For $http_x_forwarded_for;
                add_header X-Forwarded-Proto $http_x_forwarded_proto;
                return 200 "Client IP: $http_x_forwarded_for\nHeaders: $http_x_forwarded_proto\n";
                }
        }
    }
```

Redémarrez NGINX pour appliquer les modifications :

```bash
sudo systemctl restart nginx
```
### Étape 2 : Créer le Load Balancer Public Cloud avec le protocole HTTP sur OVHcloud
#### 1. Créer le Load Balancer Public Cloud
Accédez à l'interface OpenStack sur OVHcloud, puis créez un Load Balancer Public Cloud :

```bash
openstack loadbalancer listener create --name <nom-du-listener> --protocol HTTP --protocol-port <port-protocole> --insert-headers "X-Forwarded-For=True,X-Forwarded-Proto=True" <loadbalancer-id>
```

Exemple de Résultat :

```bash
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| admin_state_up      | True                                 |
| ...                 | ...                                  |
| vip_address         | 192.168.0.57                         |
| ...                 | ...                                  |
+---------------------+--------------------------------------+

```

#### 2. Créer un pool de backend

```bash
openstack loadbalancer pool create --name <nom-du-pool> --lb-algorithm ROUND_ROBIN --listener <nom-du-listener> --protocol HTTP
```

```bash
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| admin_state_up       | True                                 |
| ...                  | ...                                  |
| id                   | <pool_id>                            |
| ...                  | ...                                  |
+----------------------+--------------------------------------+

```
#### 3. Ajouter des membres au pool (les instances backend)

```bash
openstack loadbalancer member create --subnet-id <id-du-sous-réseau> --address <ip-instance-1> --protocol-port <port-protocole> <id-du-pool>
openstack loadbalancer member create --subnet-id <id-du-sous-réseau> --address <ip-instance-2> --protocol-port <port-protocole> <id-du-pool>

```
Exemple de Résultat :

```bash
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| address             | 192.168.0.27                         |
| ...                 | ...                                  |
+---------------------+--------------------------------------+

```

```bash
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| address             | 192.168.0.96                         |
| ...                 | ...                                  |
+---------------------+--------------------------------------+

```
### Étape 3 : Vérifier la configuration

#### 1. Obtenez l'adresse VIP du Load Balancer Public Cloud :
   
L'adresse VIP (Virtual IP) est l'adresse IP assignée au Load Balancer que les clients utiliseront pour accéder à vos services. Il s'agit d'une IP publique qui redirige le trafic vers vos instances backend via le Load Balancer. Vous pouvez trouver cette adresse VIP dans les paramètres du Load Balancer dans votre OVHcloud Control Panel.

```bash
VIP_ADDRESS=$(openstack loadbalancer show my-loadbalancer -c vip_address -f value)
echo $VIP_ADDRESS

```
Exemple de Résultat :
```bash
$VIP_ADDRESS

```
#### 2. Envoyez une requête HTTP à l'adresse VIP du Load Balancer
```bash
curl $VIP_ADDRESS
```
Exemple de Résultat :
```bash
Client IP: <votre_ip_source>
Headers: <en-têtes_transmis>
```
## Aller plus loin

- [Gérer les sous-réseaux dans OpenStack](https://docs.openstack.org/neutron/latest/admin/deploy-ovs-selfservice.html){:target="_blank"}{.external}
- [Commencer avec le Load Balancer sur le Cloud Public](/pages/public_cloud/public_cloud_network_services/getting-started-01-create-lb-service)
- [Préparer l'environnement pour utiliser l'API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Rejoignez notre communauté d'utilisateurs](/links/community)
