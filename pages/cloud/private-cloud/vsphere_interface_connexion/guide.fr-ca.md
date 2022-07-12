---
title: Se connecter à l’interface vSphere
slug: connexion-interface-vsphere
excerpt: Découvrez les différentes façons de se connecter à vSphere
section: Premiers pas
order: 2
---

**Dernière mise à jour le 24/06/2022**

## Objectif

**Ce guide vous présente comment se connecter à vSphere.**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir ajouté des adresses IP dans la partie `Sécurité`{.action} de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)). Pour plus d'informations, consultez notre guide « [Autoriser des IP à se connecter au vCenter](https://docs.ovh.com/ca/fr/private-cloud/autoriser-des-ip-a-se-connecter-au-vcenter/) ».

## En pratique

### Récupération des identifiants

Les identifiants sont envoyés par e-mail durant la création du Hosted Private Cloud, lors d’une modification du mot de passe ou à la création d’un utilisateur :

```
adresse IP/Nom : pcc-xxx-xxx-xxx-xxx.ovh.com nom d’utilisateur : admin mot de passe : xxxxxx
```

Ce document de VMware répertorie les différents ports que vous devez ouvrir sur votre pare-feu pour, par exemple, accéder à la console : [Accès console](https://kb.vmware.com/kb/1012382){.external-link}

### Utilisation du web client HTML5

Le web client HTML5 est disponible sur l’interface web de votre Hosted Private Cloud à l’adresse : <https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui> (remplacez pcc-xxx-xx-xx-xxx.ovh.com par l’adresse de votre Hosted Private Cloud).

![Connexion à l'interface vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

Vous accéderez ensuite à cette interface :

![Connexion à l'interface vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

La page `Home`{.action} permet de retrouver les grands menus de votre vCenter.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
