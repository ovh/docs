---
title: "Récupération des bases de données en mode rescue"
excerpt: "Découvrez comment accéder à vos bases de données et les enregistrer en mode rescue"
updated: 2023-04-13
---

**Dernière mise à jour le 13/04/2023**

## Objectif

Le mode Rescue permet d'accéder à vos données en permanence, même si le système d'exploitation du serveur ou les logiciels hébergés sur celui-ci ne fonctionnent plus.

**Découvrez comment accéder à votre système d'exploitation en mode rescue et récupérer les fichiers de base de données.**

## Prérequis

- Un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/), un [VPS](https://www.ovhcloud.com/fr-ca/vps/) ou une instance [Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud (hors systèmes Windows)
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)


> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Ce tutoriel a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) ou de vous rapprocher de [notre communauté](https://community.ovh.com/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place de services sur un serveur.
>


## Instructions

### Redémarrer votre serveur en mode rescue

Suivez le guide correspondant pour passer votre service OVHcloud en mode rescue :

- [Serveur dédié](/pages/cloud/dedicated/rescue_mode)
- [VPS](/pages/cloud/vps/rescue)
- [Instance Public Cloud](/pages/platform/public-cloud/put_an_instance_in_rescue_mode)

Suivez les instructions de [cette section](#pci) pour un **VPS** ou une instance **Public Cloud**. Passez à la [section suivante](#dedicated) pour un serveur **dédié**. 

### Accéder à vos données sur un VPS ou une instance Public Cloud <a name="pci"></a>

Nous devons d'abord identifier le point de montage contenant le `/` de notre système.

Pour cela, vous pouvez utiliser les commandes `lsblk` et `fdisk -l`.

- Exemple de sortie **lsblk** :

```output
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   10G  0 disk
└─sdb1   8:17   0   10G  0 part
```

- Exemple de sortie **fdisk -l** :

```output
Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x961fcb1c
 
Device     Boot Start      End  Sectors Size Id Type
/dev/sdb1  *     2048 20971486 20969439  10G 83 Linux
 
 
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xaf5119d2
 
Device     Boot Start     End Sectors  Size Id Type
/dev/sda1  *     2048 5117951 5115904  2.5G 83 Linux
```

> [!primary]
>
> Les sections de code suivantes sont fournies à titre d'illustration, en relation avec l'exemple de sortie ci-dessus. Vous devrez ajuster les instructions avec votre configuration réelle et remplacer les valeurs dans les commandes par vos identifiants de disque et de volume.
>

Dans cet exemple, le disque principal (10 Go) est nommé "sdb". Nos données in `/` se trouvent donc sur la partition `/dev/sdb1`. (Alors que "sda" est en mode rescue et "sda1" la partition principale en mode rescue montée sur `/`.)

Nous montons la partition système dans le dossier `/mnt` puis nous vérifions son contenu :

```shell-session
root@rescue:~# mount /dev/sdb1 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

Afin de lancer des services sur le système à partir du mode rescue, vous devrez également monter ces partitions :

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/sdb1 on /mnt type ext4 (rw,relatime,data=ordered)
udev on /mnt/dev type devtmpfs (rw,nosuid,relatime,size=990236k,nr_inodes=247559,mode=755)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

Poursuivez avec la section de récupération de la [base de données ci-dessous](#databases).
 
### Accéder à vos données sur un serveur dédié (configuration RAID logiciel) <a name="dedicated"></a>

Nous devons d'abord identifier le point de montage contenant le `/` de notre système.

Pour cela, vous pouvez utiliser les commandes `lsblk` et `fdisk -l`.

Exemple de sortie :

```shell-session
root@rescue:~# fdisk -l
```
```output
Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 5E158D46-2A45-42C9-8089-697BE070F669
 
Device          Start        End    Sectors    Size Type
/dev/sda1          40       2048       2009 1004.5K BIOS boot
/dev/sda2        4096    1050623    1046528    511M Linux RAID
/dev/sda3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sda4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sda5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 8039EE93-AB98-4EA1-B316-74EE89EF5EB6
 
Device          Start        End    Sectors    Size Type
/dev/sdb1          40       2048       2009 1004.5K BIOS boot
/dev/sdb2        4096    1050623    1046528    511M Linux RAID
/dev/sdb3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sdb4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sdb5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/md4: 1.8 TiB, 1978349322240 bytes, 3863963520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md3: 19.5 GiB, 20970405888 bytes, 40957824 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md2: 511 MiB, 535756800 bytes, 1046400 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

> [!primary]
>
> Les sections de code suivantes sont fournies à titre d'illustration, en relation avec l'exemple de sortie ci-dessus. Vous devrez ajuster les instructions avec votre configuration réelle et remplacer les valeurs dans les commandes par vos identifiants de disque et de volume.
>

Dans cet exemple, nos données dans `/` se trouvent sur le volume `/dev/md3`.

Nous montons la partition système dans le dossier `/mnt` puis nous vérifions son contenu :

```shell-session
root@rescue:~# mount /dev/md3 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

Afin de lancer des services sur le système à partir du mode rescue, vous devrez également monter ces partitions :

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/md3 on /mnt type ext4 (rw,relatime,data=ordered)
devtmpfs on /mnt/dev type devtmpfs (rw,relatime,size=16412720k,nr_inodes=4103180,mode=755)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

 
### Récupération des bases de données <a name="databases"></a>

Une fois toutes les partitions nécessaires montées, nous devons pouvoir exécuter des commandes sur le système lui-même. Pour ce faire, utilisez la commande `chroot` :

```shell-session
root@rescue:~# chroot /mnt/
root@rescue:/#
```
Maintenant, toutes les commandes que vous allez entrer seront appliquées à votre système à la place de l'environnement temporaire du mode rescue.

Nous pouvons maintenant démarrer le service `mysql` :

```shell-session
root@rescue:/# service mysql start
[ ok ] Starting MariaDB database server: mysqld ..
root@rescue:/#
```

Utilisez la commande `mysqldump` pour enregistrer la base de données dans un fichier :

```shell-session
root@rescue:/# mysqldump -u root -p scarif > /home/dump.sql
Enter password:
root@rescue:/#
```

Dans ce cas, l'utilisateur `mysql` se connectant à la base de données est `root`. L'option `-p` vous permet d'entrer le mot de passe de `root` et la base de données récupérée est nommée `scarif`.

Le fichier de base de données est alors enregistré dans le répertoire `/home` sous le nom `dump.sql`.

Vous avez également la possibilité de sauvegarder toutes les bases de données en une seule fois :

```shell-session
root@rescue:/# mysqldump -u root -p --all-databases > alldb.sql
Enter password:
root@rescue:/#
```

La liste du contenu de `/home` affiche les deux fichiers de base de données créés par les commandes précédentes :

```shell-session
root@rescue:/# ls /home
alldb.sql  dump.sql
```

Dans le cas de tables corrompues, cette commande peut être utilisée pour la réparation :

```shell-session
root@rescue:/# mysqlcheck -u root -p Password_Root_MySQL --auto-repair --optimize --all-databases
```

À partir du dossier `/home`, vous pouvez désormais envoyer vos fichiers de sauvegarde vers un serveur distant. Dans cet exemple nous utilisons l'utilitaire de transfert de fichiers `scp` :

```shell-session
root@rescue:/# scp -P SSH_Port_Number dump.sql user@IP_address:/home/backup
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
