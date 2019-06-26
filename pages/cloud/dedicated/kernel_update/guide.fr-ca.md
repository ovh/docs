---
title: 'Mettre à jour le kernel sur un serveur dédié'
slug: mettre-a-jour-kernel-serveur-dedie
excerpt: 'Découvrez comment mettre à jour le kernel d’une distribution utilisant un noyau OVH'
section: 'Utilisation avancée'
---

**Dernière mise à jour le 03/08/2018**

## Objectif

[Les serveurs dédiés OVH](https://www.ovh.com/fr/serveurs_dedies/){.external} peuvent facilement démarrer dans un système d'exploitation Linux en utilisant un kernel mis à jour, grâce au système de démarrage *netboot*. Cependant, il est recommandé de mettre à jour le kernel sur la machine locale.

## Qu'est-ce qu'un kernel ?

Un kernel est un système de bas niveau, qui est chargé d'interfacer le système d'exploitation et les applications avec le matériel physique du serveur. Il permet également de partager des processus. 

**Ce guide vous explique comment mettre à jour le kernel dans le cadre d’une distribution utilisant un noyau OVH.**

> [!warning]
>
> Par défaut, l’ensemble des images système proposées sur [les serveurs dédiés OVH](https://www.ovh.com/fr/serveurs_dedies/){.external} utilisent un noyau OVH optimisé. Les utilisateurs ayant remplacé ces images par leur propre distribution sont invités à consulter la documentation officielle de cette dernière.
>

> [!primary]
>
> OVH met à votre disposition des machines dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons ce guide à votre disposition afin de vous accompagner sur cette mise à jour. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur.
>

## Prérequis

- Posséder un serveur dédié OVH.
- Être connecté en SSH avec l’identifiant root.
- Avoir effectué au préalable une sauvegarde des données (consultez la documentation officielle de votre distribution).

## En pratique

> [!warning]
>
> Veuillez noter que les modèles d'installation Ubuntu ne sont plus fournis avec les noyaux OVH, pour des raisons de copyright. Vous devez ajouter les dépôts OVH au fichier « /etc/apt/sources.list ».
>

### Identifier le kernel

Recherchez la version de votre kernel, en entrant la commande suivante :

```sh
uname -r
```

Par exemple :

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

Dans ce cas, la version du kernel est **4.09.76-xxxx-std-ipv6-64**.


### Mettre à jour le kernel en utilisant les paquets OVH

Dans les distributions basées sur Debian et RedHat, le kernel est mis à jour en utilisant le gestionnaire de paquets.

#### Étape 1 : mettre à jour le kernel

Dans les distributions basées sur Debian, la mise à jour du kernel s’effectue avec la commande suivante :

```sh
apt-get update && apt-get dist-upgrade
```

Dans les distributions basées sur RedHat, la mise à jour du kernel s’effectue avec la commande suivante :

```sh
yum update
```

#### Étape 2 : redémarrer le serveur

Pour que les modifications prennent effet, il faut redémarrer le serveur :

```sh
reboot
```


### Mettre à jour le kernel sans utiliser les paquets OVH

#### Étape 1 : se placer dans le bon répertoire

L’image du kernel doit être placée dans le répertoire suivant :

```sh
cd /boot
```

#### Étape 2 : récupérer l’image

Sans recompilation du kernel, il suffit de télécharger la version bzImage souhaitée (idéalement la dernière). Vous trouverez ces images à l'adresse suivante : <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

Les kernels sont monolithiques, c’est-à-dire qu’ils ne prennent pas en compte les modules kernel : CEPH, NBD, ZFS…

Reprenons notre exemple, dont la version du kernel était : **4.09.76-xxxx-std-ipv6-64**.

Ici, il faudrait donc télécharger l’image suivante avec la commande ci-dessous :

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
```

#### Étape 3 : mettre à jour le programme d’amorçage (GRUB)

Mettez à jour le programme d’amorçage (GRUB) avec la commande suivante :

```sh
update-grub
```

Vous obtenez alors ce retour de commande :

```sh
Generating grub configuration file ...
done
```

> [!primary]
>
> Assurez-vous de la présence du fichier suivant (nécessaire à la mise à jour) dans votre configuration : `06_OVHkernel`. Vous pouvez effectuer cette vérification avec la commande suivante :
>
> `ls /etc/grub.d/`
>

#### Étape 4 : redémarrer le serveur

Afin que les modifications soient prises en compte, redémarrez le serveur avec la commande suivante :

```sh
reboot
```

### Revenir en arrière

En cas de mauvaise manipulation ou d’erreur, vous avez la possibilité de revenir en arrière. Pour cela, il convient de passer le serveur en [mode rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external}. Il faudra ensuite monter votre système avec les commandes ci-dessous :

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> Dans cet exemple, la racine (ou slash `/`) est nommée *md1*. Le nom peut cependant être différent. Pour vérifier celui de votre racine, il suffit d’entrer la commande suivante :
>
> `fdisk` ou `lsblk`
>

```sh
mount -o rbind /dev /mnt/dev
```

```sh
mount -t proc proc /mnt/proc
```

```sh
mount -t sysfs sys /mnt/sys
```

```sh
chroot /mnt
```

Placez-vous ensuite dans le répertoire `/boot` et supprimez les derniers fichiers installés (commande `rm`). Dans notre exemple, il convient de faire :

```sh
rm bzImage-4.9.118-xxxx-std-ipv6-64
```

Puis il faut de nouveau mettre à jour le système d’amorçage :

```sh
update-grub
```

Enfin, quittez le mode rescue (redémarrage sur le disque) et effectuez un reboot logiciel avec la commande suivante :

```sh
reboot
```

### Vérifier que la mise à jour est correctement appliquée

Une fois la mise à jour effectuée, il est possible de vérifier la version du kernel nouvellement installé via la commande :

```sh
uname -r
```

> [!primary]
>
> Dans le cadre des vulnérabilités Meltdown et Spectre, vous pouvez consulter le site de l’éditeur de votre distribution afin de vérifier que cette nouvelle version du kernel vous prémunit contre ces menaces.
>
> En cas de besoin, il existe un certain nombre d’outils (dont <https://github.com/speed47/spectre-meltdown-checker>) vous permettant de savoir si le kernel utilisé est vulnérable ou non.
>
> **OVH ne peut garantir la fiabilité d’outils externes, vous utilisez ces derniers à vos risques et périls.**
>

## Aller plus loin

[Mode rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external}.

[Informations sur les vulnérabilités Meltdown et Spectre (anglais)](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}.

[ Mise à jour suite aux vulnérabilités Meltdown et Spectre par système d’exploitation (anglais)](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>