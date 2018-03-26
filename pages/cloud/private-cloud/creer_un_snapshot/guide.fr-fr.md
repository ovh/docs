---
title: Créer un snapshot
slug: creer-un-snapshot
legacy_guide_number: '7766547'
section: Gestion des machines virtuelles
---

Le snapshot vous permet de capturer l’état de votre VM au moment ou vous le lancez. Ce snapshot comprend (selon vos choix) :

- L’état de tous les disques de la machine virtuelle.
- Le contenu de la mémoire de la machine virtuelle.

Les snapshots sont utiles quand vous devez retourner à plusieurs reprises au même état, sans créer de multiples machines virtuelles. Avec les snapshots, vous créez des positions de restauration. Vous pouvez ainsi préserver l’état de base d’une VM avant de la faire migrer vers un autre type de fonctionnement. Bien que les snapshots fournissent une image « instantanée » du disque, utilisables par les solutions de sauvegarde. En effet, si vous avez un grand nombre de snapshots, ceux-ci mobiliseront beaucoup d’espace-disque et pénalisent la VM en terme de performances.

Attention
---------

**il est déconseillé d’employer les snapshots comme méthode de sauvegardes de machine virtuelle.**

Prise du snapshot
-----------------

Sur votre VM, faites un clic droit, puis choisissez « Snapshot » et enfin « Take Snapshot » :

![](images/snapshot1.png){.thumbnail}

Vous devez maintenant indiquer le nom que vous voulez attribuer à ce snapshot, sa description, et si vous souhaitez que la mémoire de la VM soit également incluse dans le snapshot.Vous avez ici la possibilité de faire un snapshot avec ou sans la RAM utilisée par la VM.Si vous intégrez la RAM au snapshot, cela allongera le temps d’exécution de la tâche, mais cela vous permettra de ne pas avoir à faire de reboot lors de la restauration de celui-ci. Dans le cas contraire, puisque la RAM n’est pas sauvegardée, la tâche sera plus rapide, mais un reboot de la VM sera nécessaire en cas de restauration.

![](images/spashot2.png){.thumbnail}

Gestion des snapshot
--------------------

Vous pouvez retrouver l’ensemble des snapshots d’une VM dans le snapshot Manager. Pour cela, faites un clic droit, puis choisissez « Snapshot » et enfin « Snapshot Manager » :

![](images/snapshot3.png){.thumbnail}

Supprimer un snapshot
---------------------

Dans le gestionnaire des snapshots, positionner le curseur sur le snapshot à supprimer et cliquer sur **Delete**

Il est possible de supprimer tous les snapshots de la VM en une seule opération via le **Delete All**.

Restorer un snapshot
--------------------

Dans le gestionnaire des snapshots, positionner le curseur sur le snapshot à revert et cliquer sur **revert to**
