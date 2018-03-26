---
title: Suppression d’un hôte
slug: suppression-d-un-hote
legacy_guide_number: '1442308'
section: Fonctionnalités OVH
---

Il peut être utile de supprimer un hôte de votre Cluster par exemple pour nous rendre un “spare” fourni gratuitement et non utilisé ou pour évoluer dans une gamme supérieure.

La suppression d’un hôte se déroule en deux étapes : la mise en mode maintenance de l’hôte et la suppression en elle même.

Le Mode Maintenance
-------------------

Dirigez-vous sur votre client vSphere, dans l’inventaire de vos hôtes & Cluster et sélectionnez l’hôte concerné avec un simple clic droit, “mode maintenance” et “Passer en mode maintenance”. Aucune inquiétude, si jamais des machines virtuelles sont en fonctionnement sur cet hôte, elles seront automatiquement enregistrés sur un autre hôte présent dans votre Cluster (Mode HA & DRS activé).

![](images/maintenance-mode-web.png){.thumbnail}

#### ****

Vous aurez accès à une fenêtre vous permettant de confirmer le passage en maintenance.

![](images/maintenance-mode-web-confirm.png){.thumbnail}

****

Vous pouvez suivre la progression du passage en mode maintenance dans la zone "Recent Tasks"

*![](images/maintenance-task-web.png){.thumbnail}*

La suppression
--------------

L’hôte est maintenant en mode maintenance, vous avez deux possibilités pour supprimer celui-ci de votre inventaire.

Lorsque vous n’avez pas de Virtual Distributed Switch (vDS Nexus1000v) actif sur votre infrastructure ce qui est le cas généralement sur les anciennes offres, il suffit de réaliser un clic droit sur le hôte et “Supprimer”

Sinon le Virtual Distributed Switch (vDS Nexus1000v) est actif sur l’ensemble des infrastructures depuis 2014, donc dans ce cas un simple clic droit et “Supprimer Vds et Inventaire” est nécessaire (présent également dans le menu “OVH Dedicated Cloud” des clients lourd et web vSphere).

*![](images/remove-host-web.png){.thumbnail}*

Confirmez la suppression

![](images/remove-host-web-popup.png){.thumbnail}

L’hôte se supprime ensuite et n’est plus visible sous quelques minutes. Veuillez noter que la suppression passera en erreur si le moindre répertoire/fichier qui n’était pas présent initialement sur le stockage local de l’hôte à été ajouté. Seuls les répertoires de base et les fichiers de vSwap ne bloquent pas la suppression de l’hôte.
