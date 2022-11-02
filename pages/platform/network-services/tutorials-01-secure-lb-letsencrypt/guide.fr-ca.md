---
title: "Configurer un Load Balancer sécurisé avec Let's Encrypt"
slug: load-balancer-with-letsencrypt
excerpt: "Découvrez comment configurer un Load Balancer Public Cloud sécurisé avec Let's Encrypt"
section: Tutoriels
order: 01
---

**Dernière mise à jour le 02/11/2022**

## Objectif

Notre nouvelle solution Load Balancer as a Service (LBaaS) est basée sur le service [Openstack Octavia](https://wiki.openstack.org/wiki/Octavia){.external} et est entièrement intégrée dans l'univers Public Cloud.

Une fois votre Load Balancer mis en place, vous pouvez le configurer avec un certificat afin de traiter les connexions HTTPS.

**Découvrez comment configurer un Load Balancer Public Cloud sécurisé avec Let's Encrypt**

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/)
- Utiliser l'environnement de commande d'Openstack ([Tutoriel](https://docs.ovh.com/ca/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/))
- Avoir installé le [client Openstack Octavia](https://docs.openstack.org/python-octaviaclient/latest/install/index.html) et [Openstack Barbican](https://docs.openstack.org/python-barbicanclient/latest/install/index.html)
- Un Load Balancer actif dans votre projet

Si vous n'êtes pas encore familier avec la création du Load Balancer, veuillez consulter notre guide « [Premiers pas avec le service Load Balancer Public Cloud](https://docs.ovh.com/ca/fr/publiccloud/network-services/getting-started-with-load-balancer-public-cloud/) » avant de poursuivre la lecture de ce guide.

## En pratique

### Créer une instance pour Let's Encrypt

Vous pouvez créer une instance dans votre projet dans la région où votre Load Balancer se situe. Pour plus de détails à ce sujet, consultez notre [guide](https://docs.ovh.com/ca/fr/public-cloud/premiers-pas-instance-public-cloud/). Nous vous recommandons d'utiliser Ubuntu comme système d'exploitation. Le format d2-2 sera suffisant pour cette opération.

Une fois votre instance créée, vous pouvez suivre la [documaentation de Let's Encrypt](https://certbot.eff.org/lets-encrypt/ubuntufocal-other) pour installer *Certbot*.


### Attacher une adresse Floating IP à un Load Balancer

Voici comment attacher une adresse Floating IP à un Load Balancer :

```bash
openstack floating ip create Ext-Net
openstack floating ip set --port <my_load_balancer_vip_port_id> <floating_ip>
```

> [!primary]
>
> Pour récupérer l'ID du port VIP de votre Load Balancer, utilisez `openstack loadbalancer show my_load_balancer`.

Veuillez noter que vous devez ajouter un champ A dans la Zone DNS de votre domaine tld qui pointe vers l'adresse Floating IP. 

Si vos serveurs DNS sont gérés par OVHcloud, consultez [ce guide](https://docs.ovh.com/ca/fr/domains/editer-ma-zone-dns/).

### Configurer le Load Balancer

Vous devez créer un premier Listener qui écoutera sur le port 80 (HTTP) et s'ocupera de faire la redirection HTTP vers HTTPS. Il contiendra aussi une règle de redirection vers l'instance Let's Encrypt pour la vérification du certificat.

```bash
openstack loadbalancer listener create --protocol-port 80 --protocol HTTP --name http-listener my_load_balancer

openstack loadbalancer pool create --name pool-letsencrypt --lb-algorithm ROUND_ROBIN --listener http-listener --protocol HTTP

openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_letsencrypt_instance>  --protocol-port 80 pool-letsencrypt
```

Nous allons maintenant créer les règles de redirection :

```bash
openstack loadbalancer l7policy create --action REDIRECT_TO_POOL --redirect-pool pool-letsencrypt --name letsencrypt-redirection http-listener --position 1
openstack loadbalancer l7rule create --compare-type STARTS_WITH --type PATH --value /.well-known/acme-challenge letsencrypt-redirection
```

### Générer le certificat

Depuis l'instance Let's Encrypt, vous pouvez maintenant lancer la génération du certificat :

```bash
ubuntu@letsencrypt:~$ sudo certbot certonly -d <domain.tld> --standalone -m <email> --agree-tos
```

Un fois le processus terminé, votre certificat se situe dans `/etc/letsencrypt/live/domain.tld/`. Il vous faudra fusionner le certificat avec sa clé privée de certificat.

```bash
ubuntu@letsencrypt:~$ sudo $(cat /etc/letsencrypt/live/domain.tld/fullchain.pem /etc/letsencrypt/live/domain.tld/privkey.pem | tee /etc/ssl/domain.tld.pem)
```

Puis vous devez créer un package PKCS#12 avec votre certificat à l'intérieur :

```bash
ubuntu@letsencrypt:~$ sudo openssl pkcs12 -export -inkey domain.tld.pem -in domain.tld.pem -out domain.tld.p12
```

Vous devez télécharger ce fichier directement sur votre ordinateur afin de pouvoir l'envoyer dans Openstack Barbican ("Secret as a Service").

```bash
openstack secret store --name='LetsEncrypt-cert-domain.tld' -t 'application/octet-stream' -e 'base64' --payload="$(base64 < domain.tld.p12)"
```

### Configurer le Listener sécurisé sur le Load Balancer

Maintenant que vous avez votre certificat, vous pouvez ajouter un Listener sécurisé.

```bash
openstack loadbalancer listener create --protocol-port 443 --protocol TERMINATED_HTTPS --name https-listener --default-tls-container=$(openstack secret list | awk '/ LetsEncrypt-cert-domain.tld / {print $2}') my_load_balancer

openstack loadbalancer pool create --name pool-tls --lb-algorithm ROUND_ROBIN --listener tls-listener --protocol HTTP

openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_1> --protocol-port 80 my_pool

openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_2> --protocol-port 80 my_pool
```

Vous pouvez maintenant accéder à votre Load Balancer de manière sécurisée avec Let's Encrypt.

## Aller plus loin

[Premiers pas avec le service Load Balancer pour Public Cloud](https://docs.ovh.com/ca/fr/publiccloud/network-services/getting-started-with-load-balancer-public-cloud/)

[Documentation officielle d'Openstack Octavia](https://docs.openstack.org/octavia/latest/)

[Cookbook Openstack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.