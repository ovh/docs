---
title: Accéder à l’interface de gestion NSX
slug: acceder-a-l-interface-de-gestion-nsx
excerpt: Découvrez l'interface de NSX
section: NSX
order: 01
---

**Dernière mise à jour le 28/11/2017**

## Objectif

NSX est une solution de Software Defined Network (SDN) développée par VMware qui s’active au niveau du vCenter et qui se pilote directement depuis l'interface vSphere. Avec NSX, configurez les règles d’accès à vos réseaux, créez votre politique de sécurité et déployez en quelques minutes les différents services réseau nécessaires à la construction de votre infrastructure.

**Ce guide vous présente cette interface.**

## Prérequis

- Posséder un identifiant utilisateur actif avec les droits spécifiques pour NSX

## En pratique

VMWare NSX n'est disponible que depuis le client web vSphere, vous ne pourrez pas y accéder depuis le client lourd. Nous vous invitons à vous référer au guide suivant : [Connexion à l'interface vSphere](https://docs.ovh.com/fr/private-cloud/connexion-interface-vsphere/){.external}.

![Accueil Web](images/AccueilWeb.PNG){.thumbnail}

> [!primary]
>
> Pour accéder à l'API NSX, vous devez utiliser https://nsx.pcc-x-x-x-x.ovh.com/api
>
> Exemple pour récupérer votre configuration firewall: 
>
> ```
> curl -u "admin:xxxx" -XGET "https://nsx.pcc-x-x-x-x.ovh.com/api/4.0/firewall/globalroot-0/defaultconfig"
> ```
>
> Pour des raisons de sécurité /api/1.0/ ne sont pas prises en charge.
> 

Depuis la page d’accueil du client web, cliquez sur la catégorie `Networking & Security`{.action} dans le menu de gauche ou au niveau de l'icône centrale :

![Networking and Security](images/content-docs-cloud-private-cloud-nsx_connect_interface-images-interface_nsx_2.png){.thumbnail}

Vous avez alors accès à l'accueil NSX avec tous les menus associés.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.