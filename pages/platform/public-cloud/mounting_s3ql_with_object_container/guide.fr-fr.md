---
title: Monter un conteneur d’objet avec S3QL
slug: monter-un-conteneur-dobjet-avec-s3ql
legacy_guide_number: 1908
section: Tutoriels
---


## Préambule
S3QL est un système de fichier qui peut être monté pour stocker des données en local en utilisant des solutions de stockage cloud tel que l'Object Storage. Il propose de nombreuses fonctionnalités telle que : compression transparente, encryption, ou encore du snapshotting qui le rend particulièrement approprié pour la création de sauvegarde.

Il est possible de trouver plus d'informations directement sur le [site de l'auteur](http://www.rath.org/s3ql-docs/){.external}.

Ce guide vous explique comment monter un conteneur d'objet en tant que système de fichier.


### Prérequis
- [Créer un accès à Horizon]({legacy}1773){.ref}
- [Ajouter des espaces de stockage]({legacy}1790){.ref}



> [!alert]
>
> Utiliser un conteneur d'objet en tant que système de fichier peut réduire les
> performances de vos opérations.
> 


## Configuration et montage

### Creation du systeme de fichier
- Installer S3QL :

```bash
admin@serveur1:~$ sudo apt-get install s3ql
```




> [!success]
>
> La dernière version est en général disponible sur les dépôts de Debian 8
> 

- Créer un fichier contenant les informations de connexion :

```bash
admin@serveur1:~$ sudo vim s3qlcredentials.txt

[swift]
backend-login: TENANT_NAME:USERNAME
backend-password: PASSWORD
storage-url: swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
fs-passphrase: PASSPHRASE
```


Les informations telles que  **TENANT_NAME** ,  **USERNAME**  peuvent être récupérées dans votre fichier OpenRC. Vous pouvez suivre le guide ci dessus pour le récupérer :

- [Accès et Sécurité dans Horizon]({legacy}1774){.ref}

Les arguments  **REGION_NAME**  et  **CT_NAME**  sont à adapter selon le nom et la localisation de votre conteneur d'objet.

- Modifier les permissions d'accès au fichier d'authentification:

```bash
admin@serveur1:~$ sudo chmod 600 s3qlcredentials.txt
```

- Formatage du conteneur d'objet :

```bash
admin@serveur1:~$ sudo mkfs.s3ql --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/GRA1:CT_S3QL
```


Il faudra ensuite ajouter la passphrase que vous avez ajouter dans votre fichier d'authentification. Si vous ne souhaitez pas en configurer, il faudra supprimer la ligne *"fs-passphrase: PASSPHRASE"* de votre fichier d'authentification afin de ne pas être bloqué lors du montage du système de fichier.


### Montage du systeme de fichier
- Création du point de montage

```bash
admin@serveur1:~$ sudo mkdir /mnt/container
```

- Montage du conteneur d'objet

```bash
admin@serveur1:~$ sudo mount.s3ql --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/GRA1:CT_S3QL /mnt/container/
```

- Vérification du montage :

```bash
admin@serveur1:~$ sudo df -h

Filesystem                                 Size  Used Avail Use% Mounted on
/dev/vda1                                  9.8G  927M  8.5G  10% /
udev                                        10M     0   10M   0% /dev
tmpfs                                      393M  5.2M  388M   2% /run
tmpfs                                      982M     0  982M   0% /dev/shm
tmpfs                                      5.0M     0  5.0M   0% /run/lock
tmpfs                                      982M     0  982M   0% /sys/fs/cgroup
swiftks://auth.cloud.ovh.net/GRA1:CT_S3QL  1.0T     0  1.0T   0% /mnt/container
```




> [!alert]
>
> Il ne sera pas possible d'utiliser S3QL en mode "Hors ligne".
> De plus, il n'est pas conseillé de configurer la persistance via le fichier /etc/fstab mais plutôt en utilisant un script qui se lancera au démarrage de votre serveur.
> 


### F.A.Q.


> [!success]
>
> N'hésitez pas à vous rendre sur la FAQ de S3QL
> 