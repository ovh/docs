---
title: Supprimer la copie d'une VM du site de récupération Zerto
slug: suprimmer-copie-vm-zerto
excerpt: Supprimer une VM du site de récupération quand elle est effacée du site source
section: OVHcloud services and options
---

**Dernière mise à jour le 09/12/2021**

## Objectif

Quand une VM est volontairement supprimée du site source, la VPG Zerto fait une pause dans la synchronisation et se met en erreur.<br>
Les fichiers de la copie de la VM sont toujours sur le site cible.<br>
Ce document montre comment effacer ces fichiers et remettre la VPG en fonction.

**Utiliser l'interface Zerto pour supprimer une copie de VM du site cible.**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour Zerto (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir déployer [Zerto Virtual Replication](https://docs.ovh.com/fr/private-cloud/zerto-virtual-replication-vmware-vsphere-drp/)

## En pratique

In the Zerto target site interface menu, check the `VPGs`{.action} and `VMs`{.action} dashboards.<br>
In our example, VPG1 holds two VMs, vm1-zerto and vm2-zerto. The site sync status is functional.

![Dash](images/en01sync.png){.thumbnail}


In the source site vSphere interface, vm2-zerto is purposefully deleted.<br>
Both the VM and its disks are removed.

![VM](images/en02vmdelete.png){.thumbnail}


Back in the Zerto target site interface, the VPG pauses and goes into an error state. The vm2-zerto is also greyed out now.

![VM](images/en03vpgerror.png){.thumbnail}


In the `VPGs`{.action} section, check the VPG1 box and in the `Actions`{.action} menu, click `Edit VPG`{.action}.

![VPG](images/en04vpgedit.png){.thumbnail}


In `VMs`{.action}, remove vm2-zerto from the selected VMS (check the box then click the arrow back).<br>
CLick `Done`{.action}.

![VPG](images/en05vpgremove.png){.thumbnail}


Click `No`{.action} in the Warning window as there is no typical need to save the recovery disk.

![VPG](images/en06warning.png){.thumbnail}


The VPG will sync and will get back to a functional state with only one VM left.

![DONE](images/en07green.png){.thumbnail}


Bravo et merci.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
