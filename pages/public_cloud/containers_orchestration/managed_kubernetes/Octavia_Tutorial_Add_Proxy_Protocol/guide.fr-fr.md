---
title: Obtention de l'adresse IP source avec Octavia
excerpt: Apprenez à configurer Octavia pour obtenir l'adresse IP source du client dans le contexte d'OVHcloud sans utiliser Kubernetes CCM.
updated: 2024-07-29
---

## Objectif

**Ce guide explique comment configurer Octavia pour obtenir l'adresse IP source du client dans le contexte d'OVHcloud sans utiliser Kubernetes CCM.**

## Prérequis

- Accès à un environnement OpenStack sur OVHcloud avec Octavia configuré.
- Droits administratifs pour créer et modifier des services de LoadBalancer.
- Un serveur backend prêt à être utilisé.

## En pratique

### Étape 1 : Configurer le serveur backend sur OVHcloud

Créez une instance sur OVHcloud et installez un serveur web qui servira de backend. Par exemple, nous utiliserons un serveur NGINX :

1. **Créer une instance sur OVHcloud** :
   
   Accédez à votre panneau de contrôle OVHcloud, allez dans la section "Public Cloud" et créez une nouvelle instance. Pour des instructions détaillées, consultez la documentation officielle : [Créer une instance sur OVHcloud](https://docs.ovh.com/fr/public-cloud/create-vm/).

2. **Installer NGINX sur l'instance** :

    Connectez-vous à l'instance via SSH

    ```bash
    ssh almalinux@<instance_ip>
    ```

    Mettez à jour les paquets et installez NGINX :

    ```bash
    sudo dnf install -y nginx
    ```

4. **Configurer NGINX pour afficher les informations de la requête** :

    Modifiez la configuration de NGINX pour afficher les informations de la requête, y compris l'adresse IP du client et les en-têtes :

    ```bash
    sudo nano /etc/nginx/nginx.conf
    ```

    Ajoutez les directives suivantes dans le bloc `http` :

    ```nginx
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

### Étape 2 : Créer le LoadBalancer avec le protocole HTTP sur OVHcloud

1. **Créer le LoadBalancer Octavia** :

    Accédez à l'interface OpenStack sur OVHcloud, puis créez un LoadBalancer :

    ```bash
    openstack loadbalancer create --name <loadbalancer-name> --vip-subnet-id <subnet-id>
    ```

    **Exemple de résultat :**

    ```plaintext
    +---------------------+--------------------------------------+
    | Field               | Value                                |
    +---------------------+--------------------------------------+
    | admin_state_up      | True                                 |
    | ...                 | ...                                  |
    | vip_address         | 192.168.0.57                         |
    | ...                 | ...                                  |
    +---------------------+--------------------------------------+
    ```

2. **Ajouter un listener avec le protocole HTTP** :

    ```bash
    openstack loadbalancer listener create --name <listener-name> --protocol HTTP --protocol-port <protocol-port> --insert-headers "X-Forwarded-For=True,X-Forwarded-Proto=True" <loadbalancer-id>
    ```

    **Exemple de résultat :**

    ```plaintext
    +-----------------------------+--------------------------------------+
    | Field                       | Value                                |
    +-----------------------------+--------------------------------------+
    | admin_state_up              | True                                 |
    | ...                         | ...                                  |
    | id                          | f4fdba2e-b8b3-4882-bd7b-85198885133f |
    | ...                         | ...                                  |
    +-----------------------------+--------------------------------------+
    ```

3. **Créer un pool de backend** :

    ```bash
    openstack loadbalancer pool create --name <pool-name> --lb-algorithm ROUND_ROBIN --listener <listener-name> --protocol HTTP
    ```

    **Exemple de résultat :**

    ```plaintext
    +----------------------+--------------------------------------+
    | Field                | Value                                |
    +----------------------+--------------------------------------+
    | admin_state_up       | True                                 |
    | ...                  | ...                                  |
    | id                   | <pool_id>                            |
    | ...                  | ...                                  |
    +----------------------+--------------------------------------+
    ```

4. **Ajouter des membres au pool (les instances backend)** :

    ```bash
    openstack loadbalancer member create --subnet-id <subnet-id> --address <instance-ip-1> --protocol-port <protocol-port> <pool-id>
    openstack loadbalancer member create --subnet-id <subnet-id> --address <instance-ip-2> --protocol-port <protocol-port> <pool-id>
    ```

    **Exemple de résultat :**

    ```plaintext
    +---------------------+--------------------------------------+
    | Field               | Value                                |
    +---------------------+--------------------------------------+
    | address             | 192.168.0.27                         |
    | ...                 | ...                                  |
    +---------------------+--------------------------------------+
    ```

    ```plaintext
    +---------------------+--------------------------------------+
    | Field               | Value                                |
    +---------------------+--------------------------------------+
    | address             | 192.168.0.96                         |
    | ...                 | ...                                  |
    +---------------------+--------------------------------------+
    ```

### Étape 3 : Vérifier la configuration

1. **Obtenir l'adresse VIP du LoadBalancer** :

    ```bash
    openstack loadbalancer show <loadbalancer-name> -c vip_address -f value
    ```

    **Exemple de résultat :**

    ```plaintext
    192.168.0.57
    ```

2. **Envoyer une requête HTTP à l'adresse VIP du LoadBalancer** :

    ```bash
    curl http://192.168.0.57
    ```

    **Exemple de résultat :**

    ```plaintext
    Client IP: <your_source_ip>
    Headers: <forwarded_headers>
    ```

## Aller plus loin

- Documentation officielle d'OVHcloud sur [la création d'une instance](/pages/public_cloud/compute/public-cloud-first-steps/).
- Documentation sur [la gestion des sous-réseaux dans OpenStack](https://docs.openstack.org/neutron/latest/admin/deploy-ovs-selfservice.html).
- Documentation sur [Octavia Load Balancer](https://docs.openstack.org/octavia/latest/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
