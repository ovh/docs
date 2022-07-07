---
title: Accéder à l’interface de gestion NSX
slug: acceder-a-l-interface-de-gestion-nsx
excerpt: Découvrez l'interface de NSX
section: NSX
order: 01
---

**Dernière mise à jour le 17/11/2021**

## Objectif

NSX est une solution de Software Defined Network (SDN) développée par VMware qui s’active au niveau du vCenter et qui se pilote directement depuis l'interface vSphere. Avec NSX, configurez les règles d’accès à vos réseaux, créez votre politique de sécurité et déployez en quelques minutes les différents services réseau nécessaires à la construction de votre infrastructure.

**Ce guide est une introduction à l'interface NSX.**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc))

## En pratique

VMware NSX est disponible depuis le client web vSphere uniquement.

Depuis la page d’accueil du client vSphere, cliquez sur `Mise en réseau et sécurité`{.action} dans la barre d'outil à gauche de votre écran.
Vous pouvez également cliquer sur `Mise en réseau et sécurité`{.action} dans le Menu déroulant.

![Networking and Security](images/Inter01fr.png){.thumbnail}

Vous avez alors accès au tableau de bord NSX avec tous les menus associés.

![Networking and Security](images/Inter02fr.png){.thumbnail}


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
> Pour des raisons de sécurité, /api/1.0/ n'est pas prise en charge.
>


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
