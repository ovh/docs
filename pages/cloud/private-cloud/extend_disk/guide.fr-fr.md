---
title: Etendre un Volume dans vSphere dans- un OS
slug: extend-disk
excerpt: Comment augmenter la taille d'un disque virtuel et l'intégrer à votre VM
section: Maintenance and monitoring
---

**Dernière mise à jour le 13/01/2022**

## Objectif

Nous allons vous montrer comment utiliser vSphere et les outils de gestion d'OS pour augmenter la taille d'un disque virtuel sous Windows et sous Linux.

**Ce guide est un cas d'étude avec toutes les étapes pour atteindre l'objectif**


## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))


## En pratique

> [!warning]
>
> Avant de procéder à ce type de changement, nous recommandons une sauvegarde complète ou un clonage de la machine virtuelle.
>


### VM Windows

Dans l'interface vSphere, allez dans le tableau de bord `Hôtes et clusters`{.action}.

![MENU](images/en01dash.png){.thumbnail}


Sur la gauche de votre écran, naviguez vers la VM à modifier, faites un clic droit et selectionnez `Modifier les paramètres`{.action}.

![EDIT](images/en02vm.png){.thumbnail}


Trouvez le disque à étendre et modifier la valeur de la taille (dans notre exemple, changement de 80 à 100 GB).<br>
Cliquez `OK`{.action}.

![EDIT](images/en03hdd.png){.thumbnail}


Vous pouvez vérifier que le changement a été appliqué dans la vue des tâches récentes.

![EDIT](images/en04task.png){.thumbnail}


Connectez-vous à la VM et rendez-vous dans la console de gestion des disques.<br>
Un moyen simple est de faire un clic droit sur Démarrer puis un clic sur `Gestion des disques`{.action}.

![WIN](images/en05start.png){.thumbnail}


Dans la console, vous constatez qu'il y a 20 GB d'espace disponible, soit l'espace précédement ajouté au disque virtuel.

![WIN](images/en06unallocated.png){.thumbnail}


Faites un clic droit sur le volume existant et selectionnez `Étendre le volume`{.action}.

![WIN](images/en07extend.png){.thumbnail}


Cliquez `Suivant`{.action} dans la première fenêtre de l'installateur.<br>
Dans la deuxième, tout l'espace est selectionné et appliqué par défaut. Cliquez `Suivant`{.action}.<br>
Cliquez `Terminer`{.action} dans la dernière fenêtre.

![WIN](images/en08wiz.png){.thumbnail}


Le disque est maintenant étendu et prêt à l'usage.

![WIN](images/en09done.png){.thumbnail}


### VM Linux

> [!primary]
>
> For Linux VMs, we'll use a partition utility. There are many available products and we do not recommend any over the others. Our use of [GParted LiveCD](http://gparted.sourceforge.net/livecd.php) is in no way an endorsement.
> 
> For creating an ISO library and mounting an ISO to a VM, refer to [How to connect an ISO image to a VM](https://docs.ovh.com/gb/en/private-cloud/connect_iso_to_vm/)


In the vSphere interface menu, go to the `Hosts & Clusters`{.action} dashboard.

![MENU](images/en01dash.png){.thumbnail}


On the left side, navigate to the VM you wish to modify, right click on it and select `Edit Settings`{.action}.

![EDIT](images/en10vm.png){.thumbnail}


Connect the utility ISO to your VM ([How to connect an ISO image to a VM](https://docs.ovh.com/gb/en/private-cloud/connect_iso_to_vm/)).<br> 
Find the disk you are expanding and modify the size value as needed (in our case, changed the value from 20 to 70 GB).<br>

![EDIT](images/en11hdd.png){.thumbnail}


In the `VM Options`{.action} tab, check the During the next boot, force entry into the BIOS setup screen box so you can boot on the partition utility.<br>
Click `OK`{.action}.

![EDIT](images/en12bios.png){.thumbnail}


You can verify the change was applied in your recent tasks view.

![EDIT](images/en13task.png){.thumbnail}


Boot (or reboot) the VM and start the partition utiliy.<br>
*Refer to the software developer documentation to boot and get to the management console.*<br>
In the management console, you can see there is 50GB of unallocated space, corresponding to the space added to the virtual disk previously.

![LIN](images/en14unallocated.png){.thumbnail}


Right click on the existing logical volume and select `Resize/Move`{.action}.

![LIN](images/en15extend.png){.thumbnail}


Drag the right arrow to select the whole available space or type 0 in the Free Space Following field.<br>
Click `Resize/Move`{.action}.

![LIN](images/en16wiz.png){.thumbnail}


Click the green checkmark to apply all operations.

![LIN](images/en17apply.png){.thumbnail}


Click `Apply`{.action} to confirm.

![LIN](images/en18confirm.png){.thumbnail}


Click `Close`{.action} when done.

![LIN](images/en19close.png){.thumbnail}


You can now see your volume contains the unallocated space.<br>
We still need to apply the space to the disk.

![LIN](images/en20disk.png){.thumbnail}


Right click on the existing disk and select `Resize/Move`{.action}.

![LIN](images/en21extend.png){.thumbnail}


Drag the right arrow to select the whole available space or type 0 in the Free Space Following field.<br>
Click `Resize`{.action}.

![LIN](images/en22wiz.png){.thumbnail}


Click the green checkmark to apply all operations.

![LIN](images/en23apply.png){.thumbnail}


Click `Apply`{.action} to confirm.

![LIN](images/en18confirm.png){.thumbnail}


Click `Close`{.action} when done.

![LIN](images/en19close.png){.thumbnail}


You can now see your vitual disk is extended and ready for use.<br>

![LIN](images/en24done.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.
