---
title: 'Configurer des clés SSH supplémentaires'
slug: configurer-des-cles-ssh-supplementaires
excerpt: 'Apprenez à configurer des clés SSH supplémentaires sur votre instance'
legacy_guide_number: 1924
section: 'Tutoriels'
---

**Dernière mise à jour le 9 mai 2019**

## Objectif
 
Lors de la création d’une instance, il n’est pas possible de configurer une seule clé SSH. Vous pouvez cependant autoriser l’accès à d’autres utilisateurs disposant de clés SSH pour votre instance en configurant le fichier « authorized_keys ».

**Ce guide vous explique comment configurer des clés SSH supplémentaires sur votre instance afin d'en donner l’accès à d’autres personnes.**

## Prérequis

* Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
* Posséder une [instance Public Cloud](https://www.ovh.com/fr/public-cloud/instances/){.external} dans votre compte OVH.
* Avoir accès en ligne de commande à votre instance via SSH. 

## En pratique

> [!primary]
>
Si vous souhaitez enregistrer une clé SSH dans l'espace client OVHcloud, nous vous recommandons d'utiliser le chiffrement RSA ou ECDSA. ED25519 n'est actuellement pas pris en charge.
>

### Créer la clé SSH

Suivez d’abord notre guide « [Créer votre première clé SSH](https://docs.ovh.com/fr/public-cloud/creation-des-cles-ssh/){.external} ».

### Configurer un nouvel utilisateur

Connectez-vous d'abord à votre instance via SSH et utilisez la commande suivante pour créer un nouvel utilisateur :

```
admin@server-1:~$ sudo adduser user2

Adding user `user2' ...
Adding new group `user2' (1001) ...
Adding new user `user2' (1001) with group `user2' ...
Creating home directory `/home/user2' ...
Copying files from `/etc/skel' ...

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
Full Name []:
Room Number []:
Work Phone []:
Home Phone []:
Other []:
Is the information correct? [Y/n] Y
```

Ensuite, enregistrez une nouvelle clé publique SSH dans le dossier personnel du nouvel utilisateur grâce à la commande ci-dessous :

```
admin@server-1:~$ sudo vim /home/user2/.ssh/authorized_keys
```

Si le fichier « .ssh » n'existe pas encore, vous pouvez le créer avec la commande suivante :

```
admin@serveur-1:~$ sudo mkdir /home/user2/.ssh/
```

Vous pouvez désormais vous connecter avec cet utilisateur à l'aide de la clé privée liée à celle que vous avez configurée.

```
root@server:~$ ssh user2@149.xxx.xxx.22

Linux server-1 3.2.0-4-amd64 #1 SMP Debian 3.2.68-1+deb7u1 x86_64
Last login: Fri Oct 16 08:14:24 2015 from proxy-109-190-254-35.ovh.net

user2@server-1:~$
```


Vous pouvez configurer d’autres clés SSH pour l’utilisateur administrateur en ajoutant celles-ci dans le fichier « authorized_keys » correspondant avec cette commande :

```
admin@server-1:~$ sudo vim /home/admin/.ssh/authorized_keys
```


## Aller plus loin

[Créer des clés SSH](https://docs.ovh.com/fr/public-cloud/creation-des-cles-ssh/){.external}

[Remplacement de votre paire de clés SSH perdue](https://docs.ovh.com/fr/public-cloud/changer-sa-cle-ssh-en-cas-de-perte/){.external}


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
