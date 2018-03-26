---
title: Gérer ses archives depuis un client SFTP/SCP
slug: pca/sftp
excerpt: Retrouvez ici comment gérer et administrer vos archives Public Cloud.
section: Public Cloud Archive
---

## Préambule

Public Cloud Archive est une solution de stockage qui peut s'utiliser avec les API OpenStack. Cependant, il est possible que vous ne soyez pas familier avec cette façon de gérer un espace de stockage. Nous avons donc développé une passerelle qui vous permet d’accéder à votre PCA via un client SFTP.


## Prérequis

- Un client SFTP : [WinSCP](https://winscp.net/eng/download.php){.external}
- Login & Password OpenStack
- TenantName du projet

## En pratique

### Le client SFTP

Nous utilisons dans cet exemple WinSCP en tant que client SFTP. D’autres solutions existent, leur configuration est similaire à celle que nous allons vous présenter.


### Identifiant OpenStack

Vous pouvez générer votre login et password OpenStack en suivant ce [Guide](https://docs.ovh.com/fr/public-cloud/creer-un-acces-a-horizon/){.external}


### Le TenantName

Le TenantName correspond au nom de votre projet sur Horizon. Pour récupérer le TenantName, il vous faudra vous connecter au manager OpenStack via les accès générés précédemment : [https://horizon.cloud.ovh.net/](https://horizon.cloud.ovh.net/){.external}. Une fois connecté, le TenantName est accessible en haut de page.


![horizon](images/image1.png){.thumbnail}


### Connexion

- Host Name : gateways.storage. < region > .cloud.ovh.net
- User Name : pca
- Password : < TenantName > . < Username_Openstack > . < Password_Openstack >


![connexion](images/image2.png){.thumbnail}


### Exemple

Si vous avez créé un conteneur PCA sur SBG1 :

- Host Name : gateways.storage.sbg1.cloud.ovh.net
- User Name : pca
- Password : 971891XXXX1214.f6nBXXXXXAmcv.SfPeASYfuWeqBZgXXXXX2XhF3DY12RkD


![connexion](images/image3.png){.thumbnail}


### Paramétrage WinSCP
Dans cette partie nous allons désactiver deux options de WinSCP :

**Transfer Resume / Transfer to Temporary Filename :** Cette option sera à désactiver car la reprise n'est pas possible avec PCA, et WinSCP peut alors vous renvoyer une erreur. Veuillez vous référer à la capture d'écran ci-dessous.

- Dans la rubrique `Endurance`{.action}, séléctionnez `Disable`{.action}.


![connexion](images/conf1.png){.thumbnail}

**Preserve Timestamp :** Le TimeStamp correspond à la date de modification du fichier, nous le désactivons car sur PCA nous remplaçons cette donnée par la date d'upload du fichier. Veuillez vous référer aux captures d'écrans ci-dessous.

- Dans la catégorie `Transfer`{.action}, cliquez sur `Edit...`{.action}.


![connexion](images/conf2.png){.thumbnail}

- Décochez `Preserve timestamp`{.action}.


![connexion](images/conf3.png){.thumbnail}


### Récuperation de données
La récupération de données est soumise à un déblocage préalable de l'objet. Une requête GET est nécessaire sur l’objet en question. Si cette manipulation n’est pas effectuée au préalable, votre client SFTP retournera un message d’erreur lors d’une tentative de téléchargement de fichier. Consulter notre guide sur le déverrouillage de vos objets [ici](https://docs.ovh.com/fr/storage/pca/unlock/){.thumbnail}.