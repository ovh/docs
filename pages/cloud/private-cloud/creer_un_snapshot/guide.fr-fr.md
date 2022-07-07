---
title: Créer un snapshot
slug: creer-un-snapshot
excerpt: "Retournez à un état précédent de vos VMs à l'aide des snapshots"
legacy_guide_number: '7766547'
section: Gestion des machines virtuelles
order: 08
---

**Dernière mise à jour le 19/01/2022**

## Objectif

VMware offre la possibilité de créer des snapshots pour permettre le retour à un état précedent de votre VM.

**Ce guide explique comment exécuter cette tâche.**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Avoir un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))

## En pratique

### Prendre un Snapshot

Un snapshot capture l'etat d'une VM.<br>
Cela ajoute une couche de protection pour votre VM avant de procéder à des changements, en permettant de revenir à cet état si besoin.

Dans l'interface vSphere, rendez-vous dans le tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, faites un clic-droit sur celle-ci et, dans le menu `Snapshots`{.action}, sélectionnez `Prendre un snapshot`{.action}.

![TAKE](images/en01take.png){.thumbnail}

Par défaut, le nom du snapshot est la date et l'heure courante. Vous pouvez modifier ce nom à votre convenance.<br>
Vous pouvez également ajouter une description.

Si la VM est en marche, le processus de snapshot offre deux options :

- Prendre un snapshot de la mémoire de la machine virtuelle. Cela sauvegarde l'état de la RAM sur la VM pour aider les applications qui n'ont pas encore ecrit leurs données sur disque. Cela doit rendre le snapshot résistant au crash et ouvre la possibilité de récupération à chaud.
- Mettre au repos le système fichiers invité (VMware Tools doit être installé). La VM sera paramétrée comme si le sytème allait être sauvegardé : buffers nettoyés, changements enregistrés sur disque...<br>
Si la VM est éteinte, ces options sont grisées.<br>
*Nous recommandons de prendre des snapshots de VM à froid. Si cela n'est pas possible, préférez la mise au repos à un simple snapshot de mémoire, pour plus de sécurité.*

Cliquez sur `OK`{.action}.

![SNAP](images/en02snap.png){.thumbnail}

Votre snapshot est alors pris.

### Gérer les Snapshots

Vous pouvez prendre de multiples snapshots d'une seule VM en répétant le processus décrit ci-dessus.<br>
Cependant, avec le temps, les snapshots consomment beaucoup de resources pour se maintenir et finissent par affecter les performances des VMs.<br>
Voici comment restaurer ou supprimer les snapshots.

#### Restaurer un Snapshot

Dans l'interface vSphere, rendez-vous dans le tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, faites un clic-droit sur celle-ci et, dans le menu `Snapshots`{.action}, sélectionnez `Gérer les snapshots`{.action}.

![MANAGE](images/en03manage.png){.thumbnail}

Vérifiez l'arborescence des snapshots et sélectionnez celui auquel vous souhaitez revenir.<br>
Cliquez sur `Restaurer`{.action}.

![REVERT](images/en04revert.png){.thumbnail}

Confirmez en cliquant sur `OK`{.action}.

![CONFIRM](images/en05confirm.png){.thumbnail}

Vous pouvez alors cliquer sur `Terminé`{.action}, votre VM est revenue à l'état choisi.

> [!primary]
>
> Si vous n'avez qu'un unique snapshot ou souhaitez revenir au dernier snapshot pris, vous pouvez accélérer le processus en choisissant `Restaurer le dernier snapshot`{.action} dans le menu `Snapshots`{.action}.

#### Supprimer un Snapshot

Dans l'interface vSphere, rendez-vous dans le tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, faites un clic-droit sur celle-ci et, dans le menu `Snapshots`{.action}, sélectionnez `Gérer les snapshots`{.action}.

![MANAGE](images/en03manage.png){.thumbnail}

Vérifiez l'arborescence des snapshots et selectionnez celui que vous souhaitez supprimer.<br>
Cliquez sur `Supprimer`{.action}.<br>
*Vous pouvez aussi supprimer tous les snapshots existants en cliquant sur `Supprimer tout`{.action}.*

![Delete](images/en06delete.png){.thumbnail}

Confirmez en cliquant sur `OK`{.action}.

![CONFIRM](images/en07confirm.png){.thumbnail}

Vous pouvez cliquer sur `Terminé`{.action}, le snapshot est alors supprimé.

> [!primary]
>
> Pour supprimer tous les snapshots, vous pouvez accélérer le processus en choisissant `Supprimer tous les snapshots`{.action} dans le menu `Snapshots`{.action}.

#### Consolider les snapshots

La consolidation des snapshots est utile lorsque les disques de snapshots ne parviennent pas à se compresser après une opération de suppression. Après la consolidation, les disques redondants sont supprimés, ce qui améliore les performances des machines virtuelles et permet d'économiser de l'espace de stockage.

Dans l'interface vSphere, rendez-vous dans le tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, faites un clic-droit sur celle-ci et, dans le menu `Snapshots`{.action}, sélectionnez `Consolider`{.action}

![CONSOLIDATE](images/en08consolidate.png){.thumbnail}

Confirmez en cliquant sur `Oui`{.action}.

![CONFIRM](images/en09confirm.png){.thumbnail}

Vous trouverez plus d'informations sur [la documentation de VMware](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vm_admin.doc/GUID-2F4A6D8B-33FF-4C6B-9B02-C984D151F0D5.html){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
