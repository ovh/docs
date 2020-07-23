---
title: Changer le  mot de passe root sur un VPS
slug: root-password
excerpt: Découvrez ici comment modifier le mot de passe root d’un VPS
section: Diagnostic et mode Rescue
---

**Dernière mise à jour le 2020/07/15**

## Objectif

Lors de l'installation ou de la réinstallation d'une distribution, un mot de passe pour l'accès root vous est fourni. Nous vous conseillons vivement de le modifier comme expliqué dans notre [guide de sécurisation](../conseils-securisation-vps/){.external}. Il est également possible que vous ne retrouviez plus ce mot de passe et que vous ayez besoin de le modifier. Ce guide va vous présenter les deux cas de figure.
Découvrez comment modifier le mot de passe root d’un VPS.

## Prérequis

- Être connecté en SSH au VPS (accès root).
- [Redémarrer le VPS en mode Rescue](../mode-rescue-vps/){.external}.

<iframe width="560" height="315" src="https://www.youtube.com/embed/b736xXk06AM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## En pratique

### Changer le mot de passe avec un accès à l'identifiant root

Si vous possédez toujours votre mot de passe actuel, la procédure est plus simple. Connectez-vous à votre serveur et tapez ensuite la commande suivante :

```sh
passwd
```

Vous devrez alors indiquer votre nouveau mot de passe une première fois puis le confirmer. Vous recevrez ensuite la confirmation suivante :

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Sur une distribution Linux le mot de passe que vous allez enregistrer **n'apparaîtra pas**.
> 

### Changer de mot de passe suite à la perte de celui-ci

#### Étape 1 : identifier le point de montage

Le montage est fait automatiquement, il convient donc d'identifier l'endroit où la partition est montée. Pour cela, deux commandes sont possibles:

##### df -h

```sh
root@rescue-pro:~# df -h
Size Used Avail Use% Mounted on
/dev/vda1 4.7G 1.3G 3.2G 29% /
udev 10M 0 10M 0% /dev
tmpfs 774M 8.4M 766M 2% /run
tmpfs 1.9G 0 1.9G 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 1.9G 0 1.9G 0% /sys/fs/cgroup
/dev/vdb1 20G 934M 18G 5% /mnt/vdb1
```

##### lsblk

```sh
root@rescue-pro:~# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 4.9G 0 disk
└─vda1 254:1 0 4.9G 0 part /
vdb 254:16 0 20G 0 disk
└─vdb1 254:17 0 20G 0 part /mnt/vdb1
```

Nous constatons donc que la partition système est montée sur **/mnt/vdb1**.


#### Étape 2: les droits CHROOT

Il faut maintenant modifier le répertoire racine afin que les changements puissent être effectués sur votre système. Cette manipulation est réalisable avec la commande `chroot`. Voici comment procéder :

```sh
root@rescue-pro:~# chroot /mnt/vdb1/
root@rescue-pro:/#
```

Vous pouvez vérifier en tapant la commande `ls -l` qui listera le contenu à la racine de votre système :

```sh
root@rescue-pro:/# ls -l
```

#### Étape 3: modifier le mot de passe racine (root)

Il vous reste enfin à changer le mot de passe racine (root) avec la commande `passwd`:

```sh
passwd
```
```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Pour finir, redémarrez votre VPS sur son disque depuis votre espace client OVHcloud.

## Aller plus loin

[Introduction au SSH](../dedicated/ssh-introduction/){.external}.

[Mode Rescue sur VPS](../mode-rescue-vps/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
