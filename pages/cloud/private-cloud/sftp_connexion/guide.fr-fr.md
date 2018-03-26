---
title: Se connecter en SFTP
slug: connexion-en-sftp
excerpt: Apprenez à vous connecter à votre Private Cloud en SFTP
section: Premiers pas
---

**Dernière mise à jour le 28/11/2017**

## Objectif

La connexion en SFTP à vos datastores permet d'ajouter des fichiers locaux à votre infrastructure. Cette connexion est possible depuis une interface graphique avec un logiciel comme FileZilla, que vous pouvez retrouver sur Windows et Mac. Vous pouvez également vous connecter en ligne de commande depuis votre distribution Linux.

Ce système vous permet d’accéder uniquement au dossier upload-vpn de vos datastores. Les fichiers situés en dehors de ce dossier ne seront pas accessibles avec cette méthode.

**Ce guide vous explique comment vous connecter en SFTP via une interface graphique ou en ligne de commande.**

## Prérequis

- Avoir un utilisateur actif créé depuis l'espace client.


## En pratique

### Connexion depuis une interface graphique

Dans votre client FTP (FileZilla dans cet exemple), vous devez renseigner les valeurs suivantes :

```
Hôte : [sftp://pcc-xxx-xxx-xxx-xxx.ovh.com] / Identifiant : user / Mot de passe : password
```

![Connexion SFTP](images/connection_sftp_filezilla_log.png){.thumbnail}

Une fois connecté, vous retrouverez votre poste local sur la gauche et vos datastores sur la droite :

![Connexion SFTP par FileZilla](images/connection_sftp_filezilla.png){.thumbnail}


### Connexion depuis un terminal

Dans un terminal, vérifier que la commande `sftp` est installée en écrivant :

```sh
sftp
```

La commande pour vous connecter est la suivante :

```sh
sftp user@pcc-xxx-xxx-xxx-xxx.ovh.com
```

Le mot de passe de l'utilisateur vous sera ensuite demandé.

Une fois connecté vous pourrez lister vos datastores à l’aide de la commande `ls` :

```sh
sftp> ls pcc-000714
```

Déplacez-vous dans le datastore trouvé à la commande précédente :

```sh
sftp> pcc-000714
```

Pour envoyer des fichiers de votre poste local vers votre datastore, vous devrez utiliser la commande `put`:

```sh
sftp> put /home/ubuntu-11.10-desktop-i386-fr.iso to
/datastore/pcc-000714/ubuntu-11.10-desktop-i386-fr.iso
```

Pour récupérer des fichiers de votre datastore vers votre poste local, vous devrez utiliser la commande `get` :

```sh
sftp> get /datastore/pcc-00714/ubuntu-16.04-desktop-amd64.iso /home/
```

La commande `exit` permet de fermer la connexion.


### Aperçu depuis vSphere

Dans votre vSphere, vous pourrez voir le contenu de ce que vous venez d’envoyer en parcourant votre datastore (clic droit sur le datastore souhaité puis `Browse File`{.action}), dans le dossier `upload-vpn` :

![Connexion en SFTP via vSphere](images/connection_sftp_browse_datastore.png){.thumbnail}


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.