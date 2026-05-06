---
title: 'Ajouter un serveur ESXi dans un cluster vSAN'
excerpt: 'Découvrez comment ajouter un serveur ESXi dans un cluster vSAN existant'
updated: 2021-12-22
---

## Objectif

Ce guide explique comment ajouter le stockage d'un nouveau serveur ESXi dans un cluster vSAN existant.

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](/links/manager))
- Avoir déployé un [datastore vSan](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vsan)

<!-- CP-NAV-START:privatecloud-vmware-vsphere -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [VMware vSphere](/links/control-panel/privatecloud-vmware-vsphere)
- **Pour accéder à vos services :** `Hosted Private Cloud`{.action} > `Managed VMware vSphere`{.action} > Sélectionnez votre service vSphere

---
<!-- CP-NAV-END:privatecloud-vmware-vsphere -->

## En pratique

### Commander un nouvel hôte vSan

Cliquez sur [ce lien](/links/control-panel/privatecloud-vmware-vsphere) pour accéder à la section `VMware vSphere`{.action}, puis sélectionnez votre datacentre et allez dans l'onglet `Hosts`{.action}.<br>
Cliquez le bouton `Commander un Host`{.action}.

![ORDER](images/en02order.png){.thumbnail}

Choisissez l'hôte vSAN qui vous convient puis cliquez sur `Confirmer la commande`{.action}

![ORDER](images/en03hosttype.png){.thumbnail}

Verifiez le récapitulatif avant de cliquer `Suivant`{.action}

Cochez les cases pour accepter les termes et conditions et payez le bon de commande via le moyen de paiement de votre choix.

Vous obtiendrez une confirmation de commande et un numéro de commande.

Le nouvel hôte sera intégré automatiquement à votre infrastructure. Vous recevrez un email de confirmation quand il sera prêt à l'usage dans vSphere.

### Ajouter l'espace de stockage du nouvel hôte vSAN au datastore

Dans l'interface vSphere, allez dans le Tableau de bord `Hôtes et clusters`{.action}.

![Menu](images/en07hosts.png){.thumbnail}

Le nouvel hôte est visible dans le cluster.<br>
Sur la gauche de l'écran, sélectionnez le cluster, allez dans l'onglet `Configurer`{.action} puis `vSAN`{.action} / `Gestion de disques`{.action}.<br>
Cliquez sur `Réclamer des disques inutilisés`{.action}.

![vSAN](images/en08cluster.png){.thumbnail}

Les disques disponibles sont attribués automatiquement au cache ou au stockage (voir la [page officielle VMware VSAN](https://docs.vmware.com/fr/VMware-vSphere/6.7/com.vmware.vsphere.vsan-planning.doc/GUID-18F531E9-FF08-49F5-9879-8E46583D4C70.html) pour plus de détails) en fonction de leur type et de leur taille. Vous pouvez personnaliser les paramètres.

Cliquez sur `Créer`{.action}.

![vSAN](images/en09claim.png){.thumbnail}

Le nouveau groupe de disques prend un peu de temps pour être créé et ajouté au datastore vSAN.

![vSAN](images/en10progress.png){.thumbnail}

Le datastore est ensuite prêt à être utilisé avec l'espace de stockage supplémentaire.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
