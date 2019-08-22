---
title: Créer un snapshot
slug: creer-un-snapshot
excerpt: Retournez à un état précédent de vos VMs à l'aide des snapshots
legacy_guide_number: '7766547'
section: Gestion des machines virtuelles
order: 08
---

**Dernière mise à jour le 28/01/2019**

## Objectif 

Vous pouvez prendre un snapshot d'une machine virtuelle. Une fois que vous avez pris le snapshot, vous pouvez restaurer toutes les machines virtuelles sur le snapshot le plus récent ou supprimer le snapshot.

**Ce guide explique le fonctionnement.**

## En pratique

Les snapshots sont utiles quand vous devez retourner à plusieurs reprises au même état, sans créer de multiples machines virtuelles. Avec les snapshots, vous créez des positions de restauration. 

Vous pouvez ainsi préserver l’état de base d’une VM avant de la faire migrer vers un autre type de fonctionnement. 

Bien que les snapshots fournissent une image « instantanée » du disque, utilisables par les solutions de sauvegarde (Veeam, Nakivo), l'effacement régulier des snapshots présents est conseillé. En effet, si vous avez un grand nombre de snapshots, ceux-ci mobiliseront beaucoup d’espace-disque et pénalisent la VM en terme de performances.

> [!warning]
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

## Prise du snapshot

Sur votre VM, faites un clic droit, puis choisissez `Snapshot`{.action} » et enfin `Take Snapshot`{.action} :

![](images/snapshot1.png){.thumbnail}

Vous devez maintenant indiquer le nom que vous voulez attribuer à ce snapshot, sa description, et si vous souhaitez que la mémoire de la VM soit également incluse dans le snapshot.


Vous avez ici la possibilité de faire un snapshot avec ou sans la RAM utilisée par la VM. Si vous intégrez la RAM au snapshot, cela allongera le temps d’exécution de la tâche, mais cela vous permettra de ne pas avoir à faire de reboot lors de la restauration de celui-ci. 


Dans le cas contraire, puisque la RAM n’est pas sauvegardée, la tâche sera plus rapide, mais un reboot de la VM sera nécessaire en cas de restauration.

![](images/spashot2.png){.thumbnail}

## Gestion des snapshot

Vous pouvez retrouver l’ensemble des snapshots d’une VM dans le *Snapshot Manager*. Pour cela, faites un clic droit, puis choisissez `Snapshot`{.action} et enfin `Snapshot Manager`{.action} :

![](images/snapshot3.png){.thumbnail}

## Supprimer un snapshot

Dans le gestionnaire des snapshots, positionner le curseur sur le snapshot à supprimer et cliquer sur `Delete`{.action}.

Il est possible de supprimer tous les snapshots de la VM en une seule opération via le `Delete All`{.action}.

## Restorer un snapshot

Dans le gestionnaire des snapshots, positionner le curseur sur le snapshot à restaurer et cliquer sur `Revert to`{.action}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.