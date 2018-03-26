---
title: Configurer des clés SSH supplémentaires
slug: configurer-des-cles-ssh-supplementaires
legacy_guide_number: 1924
section: Tutoriels
---


## Préambule
Lors d'une création d'instance, il n'est possible de configurer qu'une seule clé SSH. Vous pouvez cependant autoriser l'accès à d'autres utilisateurs disposant de clés SSH à votre instance en configurant le fichier  **authorized_keys** .

Ce guide vous explique comment configurer des clés SSH supplémentaires sur votre instance afin de donner l'accès à d'autres personnes.


### Prérequis
- Une instance


## Configuration de la cle SSH supplementaire

### Creation de la cle SSH
Afin de créer la clé SSH, il est possible de suivre le guide suivant :

- [Créer une clé SSH](https://docs.ovh.com/fr/public-cloud/creation-des-cles-ssh/){.external}

Il n'est cependant pas nécessaire d'ajouter celle-ci sur votre Espace Client OVH.


### Configuration du nouvel utilisateur
- Se connecter à votre instance
- Créer un nouvel utilisateur

```bash
admin@serveur-1:~$ sudo adduser user2

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

- Ajouter la clé publique SSH dans le dossier personnel du nouvel utilisateur

```bash
admin@serveur-1:~$ sudo vim /home/user2/.ssh/authorized_keys
```




> [!success]
>
> Vous pouvez créer le dossier  .ssh  si celui-ci n'existe pas.
> 
> ```bash
> admin@serveur-1:~$ sudo mkdir /home/user2/.ssh/
> ```
>
Vous pouvez désormais vous connecter sur cet utilisateur avec la clé privée associée à celle que vous avez configurée.


```bash
root@serveur:~$ ssh user2@149.xxx.xxx.22

Linux serveur-1 3.2.0-4-amd64 #1 SMP Debian 3.2.68-1+deb7u1 x86_64
Last login: Fri Oct 16 08:14:24 2015 from proxy-109-190-254-35.ovh.net

user2@serveur-1:~$
```



> [!success]
>
> Vous pouvez configurer d'autres clés SSH pour l'utilisateur  admin  en ajoutant celles-ci dans le fichier  authorized_keys  correspondant.
> 
> ```bash
> admin@serveur-1:~$ sudo vim /home/admin/.ssh/authorized_keys
> ```
> 
> 