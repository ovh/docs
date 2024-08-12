---
title: "Se connecter à l’interface web vSphere"
excerpt: "Découvrez les différentes façons de se connecter à votre interface web vSphere managé depuis le control panel Hosted Private Cloud VMware on OVHcloud"
updated: 2024-08-12
---

## Objectif

**Ce guide vous présente comment se connecter à votre console web vSphere managé.**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](/links/hosted-private-cloud/vmware), pour recevoir des identifiants de connexion.
- Avoir ajouté des adresses IP dans la partie `Sécurité`{.action} de votre [espace client OVHcloud](/links/manager). Pour plus d'informations, consultez notre guide « [Autoriser des IP à se connecter au vCenter](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/autoriser_des_ip_a_se_connecter_au_vcenter) ».

Pour utiliser IAM, vous devez activer la fonctionnalité afin de déléguer la gestion des droits avec un rôle, veuillez lire les guides :

- Guide 1 : [IAM pour VMware on OVHcloud - Présentation et FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)
- Guide 2 : [IAM pour VMware on OVHcloud - Comment activer IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- Guide 3 : [IAM pour VMware on OVHcloud - Comment créer un rôle vSphere IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)

## En pratique

### Gestion des identifiants

### Via l'espace client OVHcloud

Vous pouvez gérer vos identifiants de connexion depuis l'espace client OVHcloud de votre produit VMware managé on OVHcloud.

Connectez-vous à votre [espace client OVHcloud](/links/manager) et cliquez sur l'onglet `Hosted Private Cloud`{.action}.

Cliquez sur la rubrique `VMware`{.action}, sélectionnez votre infrastructure puis rendez-vous dans l'onglet `Utilisateurs`{.action}.

Sous la section `Gestion des autorisations utilisateur dans le vSphere client`{.action}, cliquez sur `Créer un utilisateur`{.action} ou `Modifier`{.action} un utilisateur.

![Connexion à l'interface vSphere HTML5](/pages/assets/screens/control_panel/product-selection/hosted-private-cloud/vmware/vmware_users.png){.thumbnail}

En cliquant sur les `...`{.action} à votre droite (espace client VMware) de la section `Utilisateur`, vous pouvez modifier un utilisateur ou un rôle IAM. Et modifier les droits par DC, changer le mot de passe ou supprimer l'utilisateur.

![Connexion à l'interface vSphere HTML5](/pages/assets/screens/control_panel/product-selection/hosted-private-cloud/vmware/vmware_user_modification.png){.thumbnail}

Ce document de VMware répertorie les différents ports que vous devez ouvrir sur votre pare-feu pour, par exemple, accéder à la console : [Accès console](https://kb.vmware.com/kb/1012382){.external-link}

### Utilisation du web client HTML5

Le web client HTML5 est disponible sur l’interface web de votre Hosted Private Cloud à l’adresse : <https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui> (remplacez pcc-xxx-xx-xx-xxx.ovh.com par l’adresse de votre Hosted Private Cloud).

![Connexion à l'interface vSphere HTML5](images/vsphere_web_client_all.png){.thumbnail}

Vous accéderez ensuite à cette interface :

![Connexion à l'interface vSphere HTML5](images/vsphere_web_client_iam_vs_local.png){.thumbnail}

En utilisateur IAM :

![Connexion à l'interface vSphere HTML5](images/vsphere_web_client_iam.png){.thumbnail}

En utilisateur local :

![Connexion à l'interface vSphere HTML5](images/vsphere_web_client_local.png){.thumbnail}

La page `Home`{.action} permet de retrouver les grands menus de votre vCenter.

![Connexion à l'interface vSphere HTML5](images/vsphere_web_client_pcc_home.png){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/manager).
