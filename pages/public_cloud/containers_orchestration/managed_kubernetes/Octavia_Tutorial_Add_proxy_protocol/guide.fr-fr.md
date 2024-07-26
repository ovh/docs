---
title: Obtenir l'IP source dans Octavia
excerpt: Découvrez comment configurer Octavia pour obtenir l\'IP source du client dans le contexte d'OVHcloud, sans utiliser Kubernetes CCM.
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
   
   Accédez à votre espace client OVHcloud, allez dans la section "Public Cloud", puis créez une nouvelle instance. Pour des instructions détaillées, consultez la documentation officielle : [Créer une instance sur OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps/).

2. **Installer NGINX sur l'instance** :

    Connectez-vous à l'instance via SSH :

    ```bash
    ssh root@<instance_ip>
    ```

    Mettez à jour les paquets et installez NGINX :

    ```bash
    sudo apt update
    sudo apt install -y nginx
    ```

3. **Configurer NGINX pour afficher les informations de la requête** :

    Modifiez la configuration de NGINX pour qu'il affiche les informations de la requête, y compris l'adresse IP du client :

    ```bash
    sudo nano /etc/nginx/sites-available/default
    ```

    Ajoutez les directives suivantes dans le bloc `server` :

    ```nginx
    server {
        listen 80 proxy_protocol;
        set_real_ip_from 0.0.0.0/0;
        real_ip_header proxy_protocol;
        location / {
            return 200 "Client IP: $proxy_protocol_addr\n";
        }
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

2. **Ajouter un listener avec le protocole PROXY** :

    ```bash
    openstack loadbalancer listener create --name my-listener --protocol TCP --protocol-port 80 --default-pool my-pool --loadbalancer my-loadbalancer --proxy-protocol true
    ```

3. **Créer un pool de backend** :

    ```bash
    openstack loadbalancer pool create --name my-pool --lb-algorithm ROUND_ROBIN --listener my-listener --protocol TCP
    ```

4. **Ajouter les membres du pool (les instances backend)** :

    ```bash
    openstack loadbalancer member create --subnet-id <subnet-id> --address <instance_ip> --protocol-port 80 my-pool
    ```

### Étape 3 : Vérification de la configuration

1. **Obtenir l'adresse IP VIP du LoadBalancer** :

    ```bash
    openstack loadbalancer show my-loadbalancer -c vip_address -f value
    ```

2. **Envoyer une requête HTTP à l'adresse IP du LoadBalancer** :

    ```bash
    curl http://<VIP_ADDRESS>
    ```

3. **Vérifier la réponse** :

    Vous devriez voir une réponse contenant l'IP du client, par exemple :

    ```plaintext
    Client IP: <votre_ip_publique>
    ```

## Ressources supplémentaires

- Documentation officielle OVHcloud sur la [création d'une instance](/pages/public_cloud/compute/public-cloud-first-steps/).
- Documentation sur la [gestion des sous-réseaux dans OpenStack](https://docs.openstack.org/neutron/latest/admin/deploy-ovs-selfservice.html).
- Documentation sur [Octavia Load Balancer](https://docs.openstack.org/octavia/latest/).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
