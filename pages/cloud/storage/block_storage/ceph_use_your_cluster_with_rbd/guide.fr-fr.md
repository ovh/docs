---
title: Accéder au cluster en utilisant le client rbd
slug: ceph/use-your-cluster-with-rbd
excerpt: Ce guide vous présente comment avoir accès à votre cluster en utilisant le client rbd.
section: Cloud Disk Array
---

## Objectif

Il existe différentes façons d'utiliser votre grappe Ceph. Nous allons décrire comment cartographier votre cluster en utilisant **rbd client**.

## Prérequis

Vous devez d'abord vous assurer que vous avez bien effectué ces démarches :

- [Créer un pool](https://docs.ovh.com/fr/storage/block-storage/ceph/create-a-pool/)
- [Créer-un-utilisateur](https://docs.ovh.com/fr/storage/block-storage/ceph/create-a-user/)
- [Ajouter des droits à un utilisateur sur un pool](https://docs.ovh.com/fr/storage/block-storage/ceph/change-user-rights/)
- [Ajouter un IP ACL](https://docs.ovh.com/fr/storage/block-storage/ceph/create-an-ip-acl/) pour permettre à votre serveur de contacter le cluster

## En pratique

### Installation Ceph

Pour les distributions **Debian**:

```bash
ubuntu@server:~$ sudo apt-get -y install ceph ceph-common
[...]
Setting up ceph-common (10.2.0-0ubuntu0.16.04.2) ...
Setting up ceph (10.2.0-0ubuntu0.16.04.2) ...
```

Pour les distributions **rpm** :

```bash
[centos@server ~]$ sudo yum install -y ceph-common
[...]
Installed:
ceph-common.x86_64 1:0.80.7-3.el7
```

### Configuration Ceph

Créer un fichier: `/etc/ceph/ceph.conf`

```ini
[global]
mon_host = <mon_1_IP>,<mon_2_IP>,<mon_3_IP>
```

Créer le fichier `/etc/ceph/ceph.client.<ceph_user_name>.keyring`

```ini
[client.<ceph_user_name>]
key = <my_user_key>
```

`<mon_X_IP>` doit être remplacé par des moniteurs IP que vous pouvez trouver sur le gestionnaire du [Cloud Disk Array](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Sous "Plateformes et services", sélectionnez votre groupe Ceph.

`<my_user_key>` doit être remplacée par la clé d'utilisateur que vous pouvez trouver sur le gestionnaire de votre Cloud Disk Array.


### Contrôle de la configuration

Vous pouvez vérifier la configuration en listant les images à l'intérieur de votre pool.


```bash
ubuntu@server:~$ rbd -n client.myuser list mypool
```

Dans ce cas, le résultat est vide car nous n'avons pas encore créé d'image. Si vous avez une erreur, veuillez vérifier votre configuration.

### Création d'images

Vous ne pouvez pas monter directement un pool, vous devez **monter une image** qui existe sur le pool.

```bash
ubuntu@server:~$ rbd -n client.myuser create mypool/myimage -s $((10*1024*1024)) --image-format 2 --image-feature layering
ubuntu@server:~$ rbd -n client.myuser list mypool
myimage
```

Nous nous assurons que l'image a été créée correctement en répertoriant le contenu du pool.

### Cartographier l'image

```bash
ubuntu@server:~$ sudo rbd -n client.myuser map mypool/myimage
/dev/rbd0
```

Mon image rbd n'est pas mappée à /dev/rbd0, c'est un stockage en bloc. C'est pourquoi nous devons **mettre en place un système de fichiers**.


### Configuration du système de fichiers

```bash
ubuntu@server:~$ sudo mkfs.xfs /dev/rbd0
meta-data=/dev/rbd0              isize=512    agcount=33, agsize=83885056 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=0
data     =                       bsize=4096   blocks=2684354560, imaxpct=5
         =                       sunit=1024   swidth=1024 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal log           bsize=4096   blocks=521728, version=2
         =                       sectsz=512   sunit=8 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
```


### Monter le système de fichiers

```bash
ubuntu@server:~$ sudo mkdir /mnt/rbd
ubuntu@server:~$ sudo mount /dev/rbd0 /mnt/rbd
ubuntu@server:~$ df -h /mnt/rbd
Filesystem      Size  Used Avail Use% Mounted on
/dev/rbd0        10T   34M   10T   1% /mnt/rbd
```

Vous pouvez maintenant utiliser votre grappe Ceph !

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
