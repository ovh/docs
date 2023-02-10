---
title: Créer un snapshot
slug: creer-un-snapshot
routes:
    canonical: 'https://docs.ovh.com/fr/private-cloud/creer-un-snapshot/'
excerpt: Retournez à un état précédent de vos VMs à l'aide des snapshots
legacy_guide_number: '7766547'
section: Gestion des machines virtuelles
order: 08
updated: 2020-11-18
---

**Dernière mise à jour le 18/11/2020**

## Objectif 

Vous pouvez prendre un snapshot d'une machine virtuelle. Une fois que vous avez pris le snapshot, vous pouvez restaurer toutes les machines virtuelles sur le snapshot le plus récent ou supprimer le snapshot.

**Ce guide explique le fonctionnement des snapshots.**

## Prérequis

- Posséder un produit [Managed Bare Metal](https://www.ovhcloud.com/fr/managed-bare-metal/){.external}.
- Être connecté au client vSphere HTML

## En pratique

Les snapshots sont utiles quand vous devez retourner à plusieurs reprises au même état, sans créer de multiples machines virtuelles. Avec les snapshots, vous créez des positions de restauration. 

Vous pouvez ainsi préserver l’état de base d’une VM avant de la faire migrer vers un autre type de fonctionnement. 

Bien que les snapshots fournissent une image « instantanée » du disque, l'effacement régulier des snapshots présents est conseillé. En effet, si vous avez un grand nombre de snapshots, ceux-ci mobiliseront beaucoup d’espace-disque et pénalisent la VM en terme de performances.

> [!primary]
> 
> Il est déconseillé d’employer les snapshots comme méthode de sauvegardes de machine virtuelle.
> 

Le snapshot vous permet de capturer l’état de votre VM au moment ou vous le lancez. Ce snapshot comprend (selon vos choix) :

- L’état de tous les disques de la machine virtuelle.
- Le contenu de la mémoire de la machine virtuelle.

> [!warning]
> 
> Il n'est pas possible de modifier la taille d'un disque lorsqu'un snapshot est pris sur une VM.
> 

### Prise du snapshot

Faites un clic droit sur votre VM puis choisissez `Snapshots`{.action} et enfin `Prendre un snapshot...`{.action} :

![creer snapshot](images/snapshot01.png){.thumbnail}

Vous devez maintenant indiquer le nom que vous voulez attribuer à ce snapshot, sa description, et si vous souhaitez que la mémoire de la VM soit également incluse dans le snapshot.

Vous avez ici la possibilité de faire un snapshot avec ou sans la RAM utilisée par la VM. Si vous intégrez la RAM au snapshot, cela allongera le temps d’exécution de la tâche, mais cela vous permettra de ne pas avoir à faire de reboot lors de la restauration de celui-ci. 

Dans le cas contraire, puisque la RAM n’est pas sauvegardée, la tâche sera plus rapide, mais un reboot de la VM sera nécessaire en cas de restauration.

![configurer snapshot](images/snapshot02.png){.thumbnail}

### Gestion des snapshots

Vous pouvez retrouver l’ensemble des snapshots d’une VM dans le gestionnaire des snapshots. Pour cela, faites un clic droit sur la VM puis choisissez `Snapshots`{.action} et enfin `Gérer les snapshots`{.action} :

![gerer snapshots](images/snapshot03.png){.thumbnail}

### Supprimer un snapshot

Dans le gestionnaire des snapshots, sélectionnez le snapshot à supprimer et cliquez sur `Supprimer`{.action}.

Il est possible de supprimer tous les snapshots de la VM en une seule opération en cliquant sur `Supprimer tout`{.action}.

### Restaurer un snapshot

Dans le gestionnaire des snapshots, sélectionnez le snapshot à restaurer et cliquez sur `Restaurer`{.action}

### Consolider les snapshots

La présence de disques redondants peut nuire aux performances des machines virtuelles.

La consolidation des snapshots est utile lorsque les disques de snapshots ne parviennent pas à se compresser après une opération de suppression. Après la consolidation, les disques redondants sont supprimés, ce qui améliore les performances des machines virtuelles et permet d'économiser de l'espace de stockage.

Pour effectuer une consolidation, faites un clic droit sur la VM puis choisissez `Snapshots`{.action} et enfin `Consolider`{.action}

![consolidate snapshots](images/consolidate.png){.thumbnail}

Vous trouverez plus d'informations sur [la documentation de VMware](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vm_admin.doc/GUID-2F4A6D8B-33FF-4C6B-9B02-C984D151F0D5.html){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
