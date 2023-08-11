---
title: "Supprimer la copie d'une VM du site de récupération Zerto"
excerpt: Découvez comment supprimer une VM du site de récupération quand elle est effacée du site source
updated: 2021-12-09
---

**Dernière mise à jour le 09/12/2021**

## Objectif

Quand une VM est volontairement supprimée du site source, la VPG Zerto fait une pause dans la synchronisation et se met en erreur.<br>
Les fichiers de la copie de la VM sont toujours sur le site cible.<br>
Ce document montre comment effacer ces fichiers et remettre la VPG en fonction.

**Utilisez l'interface Zerto pour supprimer une copie de VM du site cible.**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/), afin de recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour Zerto (créé dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc))
- Avoir déployé [Zerto Virtual Replication](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)

## En pratique

Dans l'interface Zerto du site cible, vérifiez les tableaux de bord `VPGs`{.action} et `VMs`{.action}.<br>
Dans notre exemple, VPG1 contient deux VMs, vm1-zerto et vm2-zerto. Le statut de la synchronisation du site est fonctionnel.

![Dash](images/en01sync.png){.thumbnail}

Dans l'interface vSphere du site source, vm2-zerto est volontairement supprimée.<br>
La VM et ses disques sont effacés.

![VM](images/en02vmdelete.png){.thumbnail}

De retour dans l'interface Zerto du site cible, la VPG fait une pause dans la synchronisation et se met en erreur. La VM vm2-zerto est grisée.

![VM](images/en03vpgerror.png){.thumbnail}

Dans l'onglet `VPGs`{.action}, cochez VPG1 et dans le menu `Actions`{.action}, cliquez sur `Edit VPG`{.action}.

![VPG](images/en04vpgedit.png){.thumbnail}

Dans `VMs`{.action}, retirez vm2-zerto de la section `selected VMS` (cochez la VM puis cliquez sur la flèche pointant vers la gauche).<br>
CLiquez sur `Done`{.action}.

![VPG](images/en05vpgremove.png){.thumbnail}

Cliquez sur `No`{.action} dans la fenètre d'avertissement. Il n'y a généralement pas besoin sauvegarder le disque de récupération.

![VPG](images/en06warning.png){.thumbnail}

La VPG va se synchroniser de nouveau et redevenir fonctionnelle avec une seule VM à l'intérieur.

![DONE](images/en07green.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
