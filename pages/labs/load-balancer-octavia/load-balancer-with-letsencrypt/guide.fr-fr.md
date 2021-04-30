---
title: Configurer un Load Balancer sécurisé avec Let's Encrypt
slug: load-balancer-with-letsencrypt
excerpt: Découvrez comment configurer un Load Balancer sur le Public Cloud sécurisé avec Let's Encrypt
section: Tutoriels
order: 1
---

**Dernière mise à jour le 30/04/2021**

## Objectif

Vous souhaitez découvrir notre nouvelle offre de Load Balancer intégrée au Public Cloud. Et plus particulierement, découvrir comment sécuriser votre Load Balancer avec Let's Encrypt.

**Découvrez comment configurer un Load Balancer sur le Public Cloud sécurisé avec Let's Encrypt**

## Prérequis

- Avoir un projet dans le [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/)
- Avoir activé la région GRA9 sur votre projet
- Utiliser l'environement de commande d'Openstack ([Tutoriel](https://docs.ovh.com/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/))
- Avoir le client Openstack Octavia et Openstack Barbican d'installés
- Avoir un Load Balancer sans Listener dans son projet

Si vous n'êtes pas encore familier avec la création de Load Balancer, nous vous conseillons de consulter notre guide « [Premiers pas avec un Load Balancer sur le Public Cloud](../../load-balancer-octavia) » avant de poursuivre la lecture de ce guide.

## En pratique

### Nouveau certificat

#### Création d'une instance pour Let's Encrypt

Vous pouvez créer une instance dans votre projet dans la région où votre Load Balancer se situe. Si vous ne savez pas comment faire, voici un [guide](https://docs.ovh.com/fr/public-cloud/creer-instance-espace-client/) qui pourrait vous être utile. Nous vous recommendons d'utiliser Ubuntu 20.04 comme système d'exploitation et le format d2-2 sera suffisant pour cette opération.

Une fois votre instance créé, vous pouvez suivre la [documentation de Let's Encrypt (certbot)](https://certbot.eff.org/lets-encrypt/ubuntufocal-other) pour l'installer.

#### Configuration du Load Balancer

Vous devez créer un premier Listner qui écoutera sur le port 80 (HTTP) et s'ocupera de faire la redirection HTTP vers HTTPS. Il contiendra aussi une règle de redirection vers l'instance Let's Encrypt pour la vérification du certificat.

```
openstack loadbalancer listner create --protocol-port 80 --protocol HTTP --name http-listner my_load_balancer

openstack loadbalancer pool create --name pool-letsencrypt --lb-algorithm ROUND_ROBIN --listener http-listner --protocol HTTP

openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_letsencrypt_instance>  --protocol-port 80 pool-letsencrypt
```

Nous allons maintenant créer les règles de redirection.

```
openstack loadbalancer l7policy create --action REDIRECT_TO_POOL --redirect-pool pool-letsencrypt --name letsencrypt-redirection http-listner --position 1

openstack loadbalancer l7rule create --compare-type STARTS_WITH --type PATH --value /.well-known/acme-challenge letsencrypt-redirection
```

#### Génération du certificat

Depuis l'instance Let's Encrypt, vous pouvez maintenant lancer la génération du certificat.

```
ubuntu@letsencrypt:~$ sudo certbot certonly -d <domain.tld> --standalone -m <email> --agree-tos
```

Un fois le processus terminer, votre certificat se situe dans `/etc/letsencrypt/live/domain.tld/`. Il va vous falloir fusioner le certificat avec sa clé privé du certificat.

```
ubuntu@letsencrypt:~$ sudo $(cat /etc/letsencrypt/live/domain.tld/fullchain.pem /etc/letsencrypt/live/domain.tld/privkey.pem | tee /etc/ssl/domain.tld/domain.tld.pem)
```

Puis vous devez créer un package PKCS#12 avec votre certificat dedans.

```
ubuntu@letsencrypt:~$ sudo openssl pkcs12 -export -inkey domain.tld.pem -in domain.tld.pem -out domain.tld.p12
```

Vous devez télécharger ce fichier directement sur votre ordinateur afin de pouvoir l'envoyer dans Openstack Barbican (Secret as a Service).

```
openstack secret store --name='LetsEncrypt-cert-domain.tld' -t 'application/octet-stream' -e 'base64' --payload="$(base64 < server.p12)"

```

#### Configuration du Listener sécurisé sur le Load Balancer

Maintenant que vous avez votre certificat vous pouvez ajouter un Listener sécurisé.

```
openstack loadbalancer listener create --protocol-port 443 --protocol TERMINATED_HTTPS --name https-listner --default-tls-container=$(openstack secret list | awk '/ LetsEncrypt-cert-domain.tld / {print $2}') my_load_balancer

openstack loadbalancer pool create --name pool-tls --lb-algorithm ROUND_ROBIN --listener tls-listner --protocol HTTP

openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_1> --protocol-port 80 my_pool

openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_2> --protocol-port 80 my_pool
```

Vous pouvez maintenant accéder sur votre Load Balancer de manière sécurisé avec Let's Encrypt.

## Aller plus loin

[Découvrez les autres pages de documentation àpropos des Load Balancer sur le public cloud](../../load-balancer-octavia)

[Documentation officiel d'Openstack Octavia](https://docs.openstack.org/octavia/latest/)

[Cookbook Openstack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

**Pour discuter avec les autres utilisateurs du lab et avec l'équipe d'OVHcloud, venez sur [notre room Gitter](https://gitter.im/ovh/octavia-loadbalancer)**