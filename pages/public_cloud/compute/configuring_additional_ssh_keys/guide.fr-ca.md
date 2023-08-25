---
title: 'Configurer des clés SSH supplémentaires'
excerpt: 'Découvrez comment configurer des clés SSH supplémentaires pour votre instance Public Cloud'
updated: 2022-02-04
---


## Objectif
 
Lors de la création d’une instance, une seule clé SSH peut être configurée pour la connexion initiale. Afin de permettre l'accès de votre instance à d'autres utilisateurs, des clés supplémentaires peuvent être ajoutées en configurant le fichier *authorized_keys*.

**Ce guide vous explique comment configurer des clés SSH supplémentaires pour les connexions à votre instance.**

## Prérequis

- Avoir une [instance Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Avoir accès à votre instance via SSH en tant qu'administrateur (root)

## En pratique

> [!primary]
>
Si vous souhaitez enregistrer une clé SSH dans l'espace client OVHcloud, nous vous recommandons d'utiliser le chiffrement RSA ou ECDSA. ED25519 n'est pas pris en charge actuellement.
>

### Création de la clé SSH

Pour créer une nouvelle clé SSH, consultez le [guide des premières étapes avec Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).

### Configuration du nouvel utilisateur

[Connectez-vous à votre instance en SSH](/pages/public_cloud/compute/public-cloud-first-steps#etape-4-connexion-a-votre-instance) et créez un nouvel utilisateur à l'aide de commande ci-dessous :

```bash
~$ sudo adduser user2

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

Ouvrez le fichier *authorized_keys* dans le dossier personnel du nouvel utilisateur avec un éditeur de texte :

```bash
~$ sudo nano /home/user2/.ssh/authorized_keys
```

Ajoutez dans le fichier la clé publique créée à la première étape. Enregistrez et fermez l'éditeur.

Si le dossier .ssh n'existe pas encore, vous pouvez le créer avec cette commande :

```bash
~$ sudo mkdir /home/user2/.ssh/
```

Vous pouvez configurer plusieurs clés SSH en les ajoutant aux fichiers *authorized_keys* des dossiers utilisateur correspondants.

Désormais, vous pouvez vous connecter avec l'utilisateur et la clé privée configurés précédemment :

```bash
~$ ssh user2@instance_IP
```
```console
Linux b2-7-de1 5.10.0-10-cloud-amd64 #1 SMP Debian 5.10.84-1 (2021-12-08) x86_64

user2@server:~$
```

## Aller plus loin

[Créer une première instance Public Cloud et s’y connecter](/pages/public_cloud/compute/public-cloud-first-steps)

[Changer sa clé SSH en cas de perte](/pages/public_cloud/compute/replacing_lost_ssh_key)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
