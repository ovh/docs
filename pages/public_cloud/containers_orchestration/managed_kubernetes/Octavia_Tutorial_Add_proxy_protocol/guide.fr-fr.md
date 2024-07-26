---
title: Obtenir l'IP source dans Octavia
excerpt: Découvrez comment configurer Octavia pour obtenir l'IP source du client dans le contexte d'OVHcloud, sans utiliser Kubernetes CCM.
updated: 2024-07-26
---

## Objectif

**Ce guide explique comment configurer Octavia pour obtenir l'IP source du client dans le contexte d'OVHcloud, sans utiliser Kubernetes CCM.**

## Prérequis

- Accès à un environnement OpenStack sur OVHcloud avec Octavia configuré.
- Droits administratifs pour créer et modifier des services de type LoadBalancer.
- Un serveur backend prêt à être utilisé.

## Instructions

### Étape 1 : Configuration du serveur backend sur OVHcloud

Créez une instance sur OVHcloud et installez un serveur web qui servira de backend. Par exemple, nous utiliserons un serveur NGINX :

1. **Créer une instance sur OVHcloud** :
   
   Accédez à votre espace client OVHcloud, allez dans la section "Public Cloud", puis créez une nouvelle instance. Pour des instructions détaillées, consultez la documentation officielle : [Créer une instance sur OVHcloud](https://docs.ovh.com/fr/public-cloud/creer-vm/).

2. **Installer NGINX sur l'instance** :

    Connectez-vous à l'instance via SSH :

    ```bash
    ssh almalinux@<instance_ip>
    ```

    Mettez à jour les paquets et installez NGINX :

    ```bash
    sudo dnf install -y nginx
    ```

3. **Configurer NGINX pour afficher les informations de la requête** :

    Modifiez la configuration de NGINX pour qu'il affiche les informations de la requête, y compris l'adresse IP du client :

    ```bash
    sudo nano /etc/nginx/nginx.conf
    ```

    Ajoutez les directives suivantes dans le bloc `http` :

    ```nginx
    http {
        ...
        server {
            listen 80 proxy_protocol;
            set_real_ip_from 0.0.0.0/0;
            real_ip_header proxy_protocol;
            location / {
                return 200 "Client IP: $proxy_protocol_addr\n";
            }
        }
        ...
    }
    ```

    Redémarrez NGINX pour appliquer les modifications :

    ```bash
    sudo systemctl restart nginx
    ```

### Étape 2 : Création du LoadBalancer avec le protocole PROXY sur OVHcloud

1. **Créer le LoadBalancer Octavia** :

    Accédez à l'interface OpenStack d'OVHcloud, puis créez un LoadBalancer :

    ```bash
    openstack loadbalancer create --name my-loadbalancer --vip-subnet-id <subnet-id>
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

2. **Ajouter un listener avec le protocole PROXY** :

    ```bash
    openstack loadbalancer listener create --name my-listener --protocol TCP --protocol-port 80 my-loadbalancer
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
    openstack loadbalancer pool create --name my-pool --lb-algorithm ROUND_ROBIN --listener my-listener --protocol TCP
    ```

    **Exemple de résultat :**
    ```plaintext
    +----------------------+--------------------------------------+
    | Field                | Value                                |
    +----------------------+--------------------------------------+
    | admin_state_up       | True                                 |
    | ...                  | ...                                  |
    | id                   | cd68fa45-14d8-40ba-8e59-691e2bf7ac5f |
    | ...                  | ...                                  |
    +----------------------+--------------------------------------+
    ```

4. **Ajouter les membres du pool (les instances backend)** :

    ```bash
    openstack loadbalancer member create --subnet-id <subnet-id> --address <instance_ip1> --protocol-port 80 my-pool
    openstack loadbalancer member create --subnet-id <subnet-id> --address <instance_ip2> --protocol-port 80 my-pool
    ```

    **Exemple de résultat :**
    ```plaintext
    +---------------------+--------------------------------------+
    | Field               | Value                                |
    +---------------------+--------------------------------------+
    | address             | 192.168.0.2                          |
    | ...                 | ...                                  |
    +---------------------+--------------------------------------+
    ```

    ```plaintext
    +---------------------+--------------------------------------+
    | Field               | Value                                |
    +---------------------+--------------------------------------+
    | address             | 192.168.0.3                          |
    | ...                 | ...                                  |
    +---------------------+--------------------------------------+
    ```

### Étape 3 : Configuration du Health Monitor

1. **Créer un health monitor** :

    ```bash
    HOME="/c/Users/dell" openstack loadbalancer healthmonitor create --delay 5 --timeout 3 --max-retries 3 --type HTTP --url-path / --name my-health-monitor my-pool
    ```

    **Exemple de résultat :**
    ```plaintext
    +-------------------+--------------------------------------+
    | Field             | Value                                |
    +-------------------+--------------------------------------+
    | id                | 3a118bb8-91de-4be7-99d6-1bd40a12b7b8 |
    | ...               | ...                                  |
    +-------------------+--------------------------------------+
    ```

### Étape 4 : Vérification de la configuration

1. **Obtenir l'adresse IP VIP du LoadBalancer** :

    ```bash
    openstack loadbalancer show my-loadbalancer -c vip_address -f value
    ```

    **Exemple de résultat :**
    ```plaintext
    192.168.0.57
    ```

2. **Envoyer une requête HTTP à l'adresse IP du LoadBalancer** :

    ```bash
    curl http://192.168.0.57
    ```

    **Exemple de résultat :**
    ```plaintext
    Client IP: <votre_ip_publique>
    ```

## Ressources supplémentaires

- Documentation officielle OVHcloud sur la [création d'une instance](/pages/public_cloud/compute/public-cloud-first-steps/).
- Documentation sur la [gestion des sous-réseaux dans OpenStack](https://docs.openstack.org/neutron/latest/admin/deploy-ovs-selfservice.html).
- Documentation sur [Octavia Load Balancer](https://docs.openstack.org/octavia/latest/).

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.
