---
title: Configuration de l'équilibrage de charge
slug: nsx-t-configure-loadbalancing
excerpt: Comment configurer l'équilibrage de charge
section: NSX-T
order: 07
---

**Dernière mise à jour le 17/02/2023**

> [!warning]
> Les guides concernant NSX-T dans la solution Hosted Private Cloud Powered by VMware ne sont pas définitifs, ils seront modifiés lors de la sortie en version BETA et finalisés quand la version définitive sera prête. 
>

## Objectif

**Comment mettre en place l'équilibrage de charge dans NSX-T avec des serveurs WEB NGINX**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX-T (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir **NSX-T** déployé avec deux segment configurés dans votre configuration NSX-T, vous pouvez vous aider de ce guide [Gestion des segments dans NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-segment-management).


## Présentation

IL est possible d'utiliser la fonction de Load-Balancing de NSX-T pour mettre en place de l'équilibre de charge sur une couche de niveau 4 (TCP ou UDP ) ou de Niveau 7 (HTTP ou HTTPS).

## En pratique

Nous allons mettre en place de l'équilibrage de charge (Load Balancing) sur la passerelle **ovh-T1-gw** et créer un serveur virtuel qui s'appuiera sur deux machines virtuelle avec le serveur WEB NGINX activé. Nous allons nous aider des marqueurs (tags) pour simplifier l'administration.

Ensuite nous allons créer une règle de redirection (DNAT) vers ce serveur virtuel pour qu'il soit disponible à l'extérieur de ce cluster.

### Création du marqueur (tag) sur les deux machines virtuelles NGINX.

Dans l'interface NSX-T allez dans l'onglet `Inventory`{.action} et cliquez sur. `Virtual Machines`{.action} à gauche.  

Ensuite cliquez sur les `points de suspensions verticaux`{.action} à gauche de la première machine virtuelle que nous allons marquer et choisissez `Edit`{.action} dans le menu.

![01 Add tag to VMs 01](images/01-add-tag-to-two-vm01.png){.thumbnail}

Remplacer **Tag** par `loadbl`{.action}, ensuite cliquez sur `Add Item(s) loabl`{.action} en dessous.

![01 Add tag to VMs 02](images/01-add-tag-to-two-vm02.png){.thumbnail}

Changer **Scope** par `nginx`{.action}, ensuite cliquez sur `Add Item(s) nginx`{.action} en dessous.

![01 Add tag to VMs 03](images/01-add-tag-to-two-vm03.png){.thumbnail}

Cliquez sur le signe `+`{.action} à coté de votre marqueur pour le rajouter à votre première machine virtuelle.

![01 Add tag to VMs 04](images/01-add-tag-to-two-vm04.png){.thumbnail}

Le marqueur apparait , cliquez sur `SAVE`{.action}.

![01 Add tag to VMs 05](images/01-add-tag-to-two-vm04.png){.thumbnail}

cliquez sur les `points de suspensions verticaux`{.action} à gauche de la deuxième machine virtuelle que nous allons marquer et choisissez `Edit`{.action} dans le menu.

![01 Add tag to VMs 06](images/01-add-tag-to-two-vm06.png){.thumbnail}

Remplacer **Tag** par `load`{.action}, ensuite sélection le Marqueur `Tag: loadlb Scope: nginx`{.action} en dessous.

![01 Add tag to VMs 07](images/01-add-tag-to-two-vm07.png){.thumbnail}

Cliquez sur le signe `+`{.action} à coté de votre marqueur pour le rajouter à votre deuxième machine virtuelle.

![01 Add tag to VM 08](images/01-add-tag-to-two-vm08.png){.thumbnail}

Le marqueur est affiché, cliquez sur `SAVE`{.action}.

![01 Add tag to VM 09](images/01-add-tag-to-two-vm09.png){.thumbnail}

Restez sur **Inventory**, cliquez sur `Tags`{.action} et cliquez sur le `numéro`{.action} à coté du marqueur créé.

![02 Show member tag 01](images/02-show-members-tag01.png){.thumbnail}

Vous pouvez voir vos deux machines virtuelles qui utilise le même marqueur.

![02 Show member tag 02](images/02-show-members-tag02.png){.thumbnail}

### Ajout du groupe avec le marqueur créé

Choisissez à gauche `Groups`{.action} et cliquez sur `ADD GROUP`{.action}.

![03 ADD GROUP 01](images/03-add-group01.png){.thumbnail}

Saisissez `nginx-server`{.action} en dessous de **Name** et cliquez sur `SET`{.action} sous **Compute Members**.

![03 ADD GROUP 02](images/03-add-group02.png){.thumbnail}

Cliquez sur `+ ADD CRITERION`{.action}.

![03 ADD GROUP 03](images/03-add-group03.png){.thumbnail}

Gardez **Virtuals Machine Tag Equals** et sélectionnez votre marqueur `loadbl`{.action} accompagné de son etendue `nginx`{.action} et cliquez sur `APPLY`{.action}.

![03 ADD GROUP 04](images/03-add-group04.png){.thumbnail}

Cliquez sur `SAVE`{.action}.

![03 ADD GROUP 05](images/03-add-group05.png){.thumbnail}

Cliquez sur `View Members`{.action} à droite du groupe.

![03 ADD GROUP 06](images/03-add-group06.png){.thumbnail}

La liste des machines virtuelles a été automatiquement rajoutée au groupe grace au critère sur votre marqueur.

![03 ADD GROUP 07](images/03-add-group07.png){.thumbnail}

### Activation du Load Balancer

Allez dans l'onglet `Networking`{.action} et cliquez sur. `Load Balancing`{.action} dans la rubrique **Network Services** à gauche.  

Ensuite cliquez sur `ADD LOAD BALANCER`{.action}

![04 Activte Load Balancer 01](images/04-activate-loadbalancing01.png){.thumbnail}













## Aller plus loin

[Premiers pas avec NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-first-steps/)

[Gestion des segments dans NSX-T](https://docs.ovh.com/fr/nsx-t-segment-management/)

[Documentation VMware sur les Load Balancers NSX-T](https://docs.vmware.com/en/VMware-NSX-T-Data-Center/3.2/administration/GUID-D39660D9-278B-4D08-89DF-B42C5400FEB2.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

