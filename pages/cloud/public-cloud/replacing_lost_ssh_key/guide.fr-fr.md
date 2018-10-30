---
title: 'Changer sa clé SSH en cas de perte'
slug: changer-sa-cle-ssh-en-cas-de-perte
legacy_guide_number: 2069
section: Tutoriels
---

**Dernière mise à jour le 27 septembre 2018**

## Objectif

Si vous avez perdu votre clé SSH, il est possible que vous ne puissiez pas vous connecter à votre instance si vous n'avez pas configuré d'autre moyen de le faire.

Pour récupérer l'accès, nous vous avons fourni un [mode rescue](https://docs.ovh.com/gb/en/public-cloud/put_an_instance_in_rescue_mode/){.external}, qui vous permet de vous connecter avec un mot de passe, puis de modifier vos fichiers.

**Ce guide explique comment configurer le fichier authorized_keys pour l'utilisateur administrateur afin que vous puissiez ajouter une nouvelle clé SSH pour récupérer l'accès à votre instance.**

## Prérequis

* Avoir accès root à votre serveur via SSH

## Instructions

Après avoir monté le disque de votre instance en [mode rescue](https://docs.ovh.com/gb/en/public-cloud/put_an_instance_in_rescue_mode/){.external}, vous pourrez accéder à l’ensemble de vos fichiers. Le fichier contenant vos clés SSH est présenté ci-dessous:

```
/home/USER_NAME/.ssh/authorized_keys
```

Si vous souhaitez ajouter votre nouvelle clé SSH, il vous suffit de modifier ce fichier de la manière suivante:

```
admin@instance:~$ sudo vim /mnt/home/USER_NAME/.ssh/authorized_keys

ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

### Changer la clé SSH pour l'utilisateur par défaut
Pour changer la clé SSH de votre utilisateur par défaut, il vous suffit de vous rendre dans le fichier personnel de l'utilisateur.

Par exemple, pour l'utilisateur administrateur, le fichier dont vous avez besoin se trouve dans le dossier suivant:

```
/home/admin/.ssh/authorized_keys
```

Pour une instance Ubuntu, l'utilisateur par défaut sera ubuntu et le fichier sera donc dans le dossier suivant:

```
/home/ubuntu/.ssh/authorized_keys
```

### Changer le mot de passe pour l'utilisateur par défaut

Vous pouvez également modifier le mot de passe de votre utilisateur par défaut en utilisant le mode rescue et les commandes suivantes (si l'utilisateur est admin).

En premier, vous devrez modifier le répertoire root afin qu’il soit placé directement sur le disque de l’instance:

> \[!primary]
>
Dans l'exemple ci-dessous, nous avons utilisé **vdb1** comme nom du disque du serveur et **mnt** comme point de montage.
>


```
root@instance:/home/admin# mount /dev/vdb1 /mnt/
root@instance:/home/admin# chroot /mnt/
```

Changez ensuite le mot de passe administrateur.

```
root@instance:/# passwd 
admin
```

Une fois cette modification été effectuée et sauvegardée, vous devez redémarrer votre instance sur son disque pour pouvoir vous connecter avec votre nouvelle clé SSH.

## Aller plus loin

[Passer root et définir un mot de passe](https://docs.ovh.com/gb/en/public-cloud/become_root_and_select_a_password/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.