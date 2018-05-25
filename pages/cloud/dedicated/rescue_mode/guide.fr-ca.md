---
title: Mode Rescue
slug: rescue-mode
excerpt: Le mode Rescue est concu pour les serveurs Linux. Il permet de prendre la main en SSH sur la machine et egalement de verifier la partie materiel du serveur.
section: Diagnostic et mode Rescue
---


## Prérequis
L’avantage est que vous pouvez réaliser vos tests, ou manipulations, au moment où cela vous convient le mieux et où cela gêne le moins les opérations de votre serveur. Cela vous permet également de corriger une erreur de manipulation que vous auriez pu faire au préalable, et vous ayant coupé l'accès au serveur sur disque.


### Logiciel d'Administration
- Lancer un **fsck** / **e2fsck** pour vérifier l'état du système de fichier.
- Consulter et analyser les **logs**.
- **Corriger** des problèmes logiciels.
- **Reconstruire** / **Vérifier** le RAID.
- **Sauvegarder** les données.


### Matériel
- **memtest**: Pour vérifier la mémoire ( RAM )
- **cpuburn**: Pour vérifier le processeur ( CPU )
- **fsck**: Pour vérifier le système de fichier
- **state**: Pour vérifier les disques
- **explorer**: Pour vérifier les fichiers

Si un des tests échoue ou montre des erreurs, il suffit de vous rendre dans le **Manager**, section **Support**, puis dans la partie **déclarer un incident**. Indiquez le résultat de votre test, par exemple: Le serveur est tombé durant le test le cpu burn. Nous procèderons alors immédiatement à une intervention pour remplacer le matériel défectueux.



> [!warning]
>
> - Vous ne devez pas utiliser l'interface Web et le SSH en même temps.
> - Il ne faut pas lancer de vérification des disque sur l'interface Web et monter les partitions en SSH en même temps. Cela peut engendrer une perte de vos données.
> 


## Procédure

### Étape 1: Activer le Mode Rescue
[Rendez-vous dans votre Manager](https://www.ovh.com/manager){.external}, section **Cloud**, puis **Serveurs**, **Netboot** et sélectionnez le **mode rescue-pro**.

Redémarrez si possible votre serveur de manière logicielle (en SSH: sudo reboot -r now), sinon effectuez le redémarrage matériel depuis votre espace client.

Vous recevrez alors un e-mail contenant les codes d'accès qui vous permettront d'accéder au mode rescue, sauf si vous aviez renseigné une clé SSH pour vous connecter à ce serveur.

Il peut également arriver que nos techniciens soient déjà intervenus sur votre serveur. N’ayant diagnostiqué aucun défaut matériel sur le serveur, ils redémarrent alors votre serveur en mode Rescue afin que vous puissiez procéder aux vérifications/corrections nécessaires à sa remise en production.


### Étape 2: Vérification materielle
Une fois le serveur placé en mode Rescue, vous avez la possibilité d'accéder à l'interface pour lancer les tests matériels. Voici un aperçu de l'interface:


![Rescue Mode Web Interface](images/rescue-web-interface.png){.thumbnail}



> [!primary]
>
> Liste de vérifications:
> - Hard Drives: Vous permet de voir les disques installés.
> - Processors: Vous permet de tester le CPU. Il est possible qu'il n'y ait pas d'erreur et que le serveur redémarre, ou cesse de répondre. Si tel est le cas, il est possible que ce soit signe de défaut. Contactez-nous dès que possible.
> - Partitions State: Vous permet de vérifier l'état de vos partitions.
> - Partitions File System: Vous permet de vérifier le système de fichier. Souvent, un défaut sur le système de fichier est confondu avec un disque défectueux. Dans ce type de cas il est souvent nécessaire de réinstaller le système d'exploitation, surtout lorsque le système place les fichiers dans un dossier appelé lost+found.
> - Partitions Explore: Vous permet d'explorer les répertoires/fichiers. Cet outil ne permet pas la modification des fichiers. L'utilité principale est de pouvoir consulter les logs sans avoir à passer par SSH.
> - Memory: Vous permet de vérifier la mémoire vive (RAM). Veuillez noter que ce test monopolisera le CPU. Si ce test se fige ou fait redémarrer le serveur, il est possible que le CPU soit en cause, et donc défectueux. Si la RAM est défectueuse, vous recevrez un rapport d'erreur à la fin du test.
> 

Cette interface peut ne pas détecter tout les problèmes, comme par exemple des reboots irrégulier, etc.. N'hésitez pas à faire les tests et à consulter ensuite l’assistance technique qui pourra vous aider a analyser les résultats obtenus.



> [!warning]
>
> Il se peut que vous aperceviez ce message d'erreur lors du test de RAM, aux alentours de 64%.:
> Votre serveur ne répond plus depuis plus de 20 secondes. Il s'agit, la plupart du temps, du fait que le test qui s'exécute aux alentours de 64% est très long. Vous pouvez tenter de rafraîchir la page pour voir l'état d'avancement du test.
> 


## Le Rescue en SSH

### Étape 1: Connexion
Connectez-vous en SSH à votre machine comme d’habitude. La seule chose qui change est le mot de passe. Il faut utiliser le mot de passe root temporaire qui vous est envoyé par e-mail après le passage en mode rescue.


```sh
ssh root@SERVER_IP
>>> The authenticity of host [SERVER_IP] (SERVER_IP) cant be established.
>>> RSA key fingerprint is 02:11:f2:db:ad:42:86:de:f3:10:9a:fa:41:2d:09:77.
>>> Are you sure you want to continue connecting (yes/no)? # <- yes
>>> Warning: Permanently added [SERVER_IP] (RSA) to the list of known hosts.
>>> Password:
>>> rescue:~#
```

### Étape 2: Montage des partitions
Habituellement, /dev/xda1 est votre partition racine (/) et /dev/xda2 correspond à /home où se trouvent vos données.

Les devices seront du type:

- /dev/sd Pour SCSI, SATA, et le Raid Matériel
- /dev/hd Pour les disques IDE
- /dev/md Pour le RAID Logiciel
- /dev/rd/c0d0p Pour le RAID Mylex
- /dev/ad4s1 Pour les sytèmes Freebsd

Vous pouvez également utiliser les dénominations devfs.

Si vous ne savez pas quel disque vous avez, ni quelle est sa table de partition, servez-vous des commandes fdisk ou sfdisk.

Voici un exemple de commande et de ce qu'elle retourne:

```sh
fdisk -l
>>> Disk /dev/sda 40.0 GB, 40020664320 bytes
>>> 255 heads, 63 sectors/track, 4865 cylinders
>>> Units = cylinders of 16065 * 512 = 8225280 bytes
>>> Device Boot Start End Blocks Id System
>>> /dev/sda1 * 1 1305 10482381 83 Linux
>>> /dev/sda2 1306 4800 28073587+ 83 Linux
>>> /dev/sda3 4801 4865 522112+ 82 Linux swap / Solaris
>>> Disk /dev/sdb 8254 MB, 8254390272 bytes
>>> 16 heads, 32 sectors/track, 31488 cylinders
>>> Units = cylinders of 512 * 512 = 262144 bytes
>>> Device Boot Start End Blocks Id System
>>> /dev/sdb1 1 31488 8060912 c W95 FAT32 (LBA)
```

Ici, le serveur est équipé de 2 disques.

On voit /dev/sda qui est le disque où se trouve le système, et /dev/sda1/ suivi par une *, ce qui nous indique que c'est la partition de démarrage. En second, on peut voir une clé USB /dev/sdb.

Pour monter la racine / du serveur, il suffit d'effectuer la commande ci-dessous:

```sh
mount /dev/sda1 /mnt/ 
```


La /home devrait donc être sur /dev/sda2. Nous montons cette partition après la / avec la commande mount : /dev/sda2 /mnt/home.

La /home n'est pas nécessairement sur /dev/sda2 et il est possible que vos données soient situées sur /var, avec le panneau de gestion Plesk. Pour être sûr de votre configuration, vous pouvez monter la partition racine /, puis effectuer la commande : cat /mnt/etc/fstab.

Ce fichier contient les partitions du serveur quand il démarre sur disque.

Voici un exemple:

```sh
cat /mnt/etc/fstab
>>> /dev/sda1 / ext3 errors=remount-ro 0 1
>>> /dev/sda2 /var ext3 defaults,usrquota,grpquota 1 2
>>> /dev/sda3 swap swap defaults 0 0
>>> /dev/devpts /dev/pts devpts gid=5,mode=620 0 0
>>> /dev/shm /dev/shm tmpfs defaults 0 0
>>> /dev/proc /proc proc defaults 0 0
>>> /dev/sys /sys sysfs defaults 0 0
```

Il faut donc la monter comme ceci:

```sh
mount /dev/sda2 /mnt/var
```

#### Montage d'une partition ESXi
Pour monter un Datastore ESXi, il vous faut utiliser le programmer vmfs-fuse.

```sh
vmfs-fuse /dev/sdX /mnt
```

### Étape 3: Droits root
On peut maintenant éditer les fichiers en utilisant le chemin /mnt/var/.... par exemple, ou encore /mnt/etc/lilo.conf, mais pour pouvoir faire certaines manipulations, il faut être en root sur le système qui se trouve installé sur le disque et qui ne sont pas faisable avec le root du rescue.

Pour ces opérations, vous devez utiliser la commande chroot:

```sh
chroot /mnt/
```

On voit ci-dessus qu'après avoir effectué un chroot, le retour de la commande me place dans la / du serveur. Maintenant, nous pouvons excuter les commandes sur le système.

### Étape 4: Sortir du mode Rescue

Tout d'abord, on démonte la partition:

```sh
umount /dev/sda1 /mnt
umount /dev/sda2 /mnt/var
```

Ensuite [connectez-vous à votre Manager](https://www.ovh.com/manager){.external}, Section **Cloud**, puis **Serveurs**, **Netboot** et sélectionnez **boot sur disque**.

Une fois le bon kernel sélectionné et validé, nous effectuons un redémarrage de manière logicielle du serveur.

```sh
sudo reboot
>>> Broadcast message from root (pts/0) (Fri Jan 19 03:14:07 2038):
>>> The system is going down for reboot NOW!
```