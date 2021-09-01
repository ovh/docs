---
title: Mise en route de votre vSphere SecNumCloud
slug: secnumcloud-vsphere
excerpt: Découvrez comment prendre en main et configurer votre environnement vSphere SecNumCloud
section: Fonctionnalités OVHcloud
hidden: true
---

**Dernière mise à jour le 19/08/2021**

## Objectif

A la suite de la livraison de votre environnement vSphere SecNumCloud, vous devez configurer les accès à celui-ci
tout en maintenant le niveau de sécurité.

**Ce guide vous explique étape par étape les actions à effectuer.**

## Prérequis

* Posséder une offre [Hosted Private Cloud SecNumCloud](https://www.ovh.com/fr/private-cloud/){.external}.
* Être connecté à [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
* Être connecté aux [API OVHCloud](https://api.ovh.com/console){.external}.
* Avoir [créé ses identifiants pour l'API OVHCloud](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/){.external}.

## En pratique

Vous venez de recevoir une notification de livraison de votre service.

Celui-ci contient notamment vos informations de connexion, telles que dans l'exemple ci-dessous :

> - adresse IP/nom : pcc-192-0-2-1.ovh.com
> - nom d'utilisateur : admin
> - mot de passe : **********
>
> Vous pouvez récupérer votre mot de passe depuis l'espace sécurisé : https://www.ovh.com/secret-as-a-service-ui/#!/secret-retrieve?id=mr8n2f85-tv19-6h1j-cu5m-lwfct1n5mali
>

### Etape 1 : ajouter des adresses IP pour se connecter au vCenter

Pour des raisons de sécurité, les interfaces de gestion sont restreintes par défaut.
Vous devrez autoriser des adresses IP à se connecter au vCenter.

Le guide suivant vous décrit comment effectuer cette manipulation :

* [Autoriser des IP à se connecter au vCenter](../autoriser-des-ip-a-se-connecter-au-vcenter/)

A l'issue de cette configuration, vous serez en capacité d'ouvrir une session sur l'interface vSphere pour les prochaines étapes.

### Etape 2 : configurer un VPN IPSec avec NSX-V

La mise en place d'un VPN est nécessaire pour vous permettre de vous connecter via Internet aux réseaux privés de votre environnement SecNumCloud.

Le guide suivant vous décrit comment effectuer cette manipulation :

* [Configurer un VPN IPSec via une Gateway Edge](../configurer-un-vpn-via-une-gateway-edge/#ipsec-vpn)

### Etape 3 : activer la private gateway

Nous allons maintenant basculer l'interface de management vSphere sur un des réseaux privés de l'environnement SecNumCloud.

A l'issue de cette étape, la connexion au vCenter et aux API vSphere ne pourra se faire qu'en passant par les réseaux privés et via le VPN IPSec configuré à l'étape précédente pour l'extérieur.

Le guide suivant vous décrit comment effectuer cette manipulation :

* [Activer la Private Gateway](../private-gateway/)

### Etape 4 : mettre en place le KMS pour le chiffrement

Nous passons ensuite à la mise en place du chiffrement pour les machines virtuelles qui seront hébergées.

Le prérequis est d'avoir un KMS compatible avec la solution VMware vSphere.

Le guide suivant vous décrit comment déployer la solution KMS Thales :

* [Mise en route du KMS CipherTrust Manager](../kms-cipher-trust/)

Configurez alors le KMS dans vSphere en vous aidant du guide suivant :

* [Activation du chiffrement des machines virtuelles (VM Encryption)](../vm-encrypt/)

### Etape 5 : demander l'activation de la conformité SecNumCloud

Après avoir effectué les démarches de sécurisation de l'infrastructure, vous devez contacter le support OVHcloud
pour les dernières étapes de mise en conformité SecNumCloud sur l'infrastructure vSphere.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
