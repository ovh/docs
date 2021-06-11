---
title: Utiliser S3QL pour monter un conteneur de object storage
excerpt: Utiliser S3QL pour monter un conteneur de object storage
slug: utiliser_S3QL_pour_monter_un_conteneur_de_object_storage
section: Object Storage
legacy_guide_number: g1908
---


## 
S3QL est un système de fichiers distant qui peut être configuré localement pour stocker des données à l'aide de solutions de stockage en nuage comme OVH Object Storage. 
Il présente plusieurs caractéristiques, telles que la compression des données, le cryptage et les instantanés des conteneurs, ce qui rend cette solution particulièrement adaptée à la création de sauvegardes.

Vous pouvez trouver plus d'informations directement sur leur [Site Web](http://www.rath.org/s3ql-docs/).

Ce guide vous montre comment configurer un conteneur d'objets comme système de fichiers.


## Prérequis

- [Configurer l'utilisateur](https://docs.ovh.com/ca/fr/public-cloud/charger-les-variables-denvironnement-openstack/)
- [Ajouter de l'espace de stockage](https://docs.ovh.com/ca/fr/storage/créer_us_conteneur_dobjet/)



## Veuillez noter que
L'utilisation d'un conteneur d'objets comme système de fichiers peut avoir un impact sur la performance de vos opérations.
La version S3ql 3.3 ou supérieure est requise.


## Créez votre système de fichiers

- Créer un fichier contenant les informations de connexion:

```
admin@serveur1:~$ sudo vim s3qlcredentials.txt

[swift]
backend-login: OS_PROJECT_ID:OS_USERNAME
backend-password: OS_PASSWORD
storage-url: swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
fs-passphrase: PASSPHRASE
```



Les paramètres OS_PROJECT_ID, OS_USERNAME and OS_PASSWORD peut être trouvé dans votre dossier OpenRC.
Vous pouvez suivre ce guide ci-dessous afin de le retrouver:

- [Acces et Securite Dans Horizon](https://docs.ovh.com/ca/fr/public-cloud/acces-et-securite-dans-horizon/)


Les arguments REGION_NAME et CT_NAME peuvent être adaptés en fonction du nom et de l'emplacement de votre conteneur d'objets. 


- Modifier les autorisations d'accès au fichier d'authentification:

```
admin@serveur1:~$ sudo chmod 600 s3qlcredentials.txt
```


- Formatage des conteneurs d'objets:

```
admin@serveur1:~$ sudo mkfs.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
```



Vous devez ensuite ajouter la phrase de passe à votre fichier d'authentification. 
If you do not want to configure it, you have to delete the "fs-passphrase: PASSPHRASE" line from your file.


## Configurez votre système de fichiers

- Créer le point de montage

```
admin@serveur1:~$ sudo mkdir /mnt/container
```


- Monter le contenant de l'objet

```
admin@serveur1:~$ sudo mount.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME /mnt/container/
```


- Vérifier le montage:

```
admin@serveur1:~$ sudo df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 927M 8.5G 10% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME 1.0T 0 1.0T 0% /mnt/container
```



Vous ne pouvez pas utiliser S3QL en mode hors ligne, vous ne devez pas configurer la persistance via le fichier /etc/fstab mais en utilisant un script qui sera exécuté au démarrage de votre serveur.
