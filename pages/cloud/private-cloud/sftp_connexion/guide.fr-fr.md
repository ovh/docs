---
title: Se connecter en SFTP
slug: connexion-en-sftp
excerpt: Apprenez à vous connecter à votre Private Cloud en SFTP
section: Premiers pas
order: 3
---

**Dernière mise à jour le 25/06/2020**

## Objectif

La connexion à vos datastores via SFTP (Secure File Transfert Protocol) vous permet d'ajouter des fichiers sauvegardés localement à votre infrastructure. Vous pouvez vous connecter à partir d'une interface graphique grâce à des logiciels tels que FileZilla, disponible sous Windows et Mac. Vous pouvez également vous connecter en ligne de commande depuis votre système d'exploitation Linux.

Ce système vous permettra d'accéder uniquement au dossier « upload-vpn » de vos datastores. Les fichiers se trouvant hors de ce dossier ne seront pas accessibles par le biais de cette méthode.

**Ce guide vous explique comment vous connecter en SFTP via une interface graphique ou en ligne de commande.**

## Prérequis

- Posséder un utilisateur actif créé depuis l’[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Connexion depuis une interface graphique

Dans votre client FTP (FileZilla dans cet exemple), vous devez renseigner les valeurs suivantes :

```
Host: [sftp://pcc-xxx-xxx-xxx-xxx.ovh.com] / Username: user / Password: password
```

![Connexion SFTP](images/connection_sftp_filezilla_log.png){.thumbnail}

Une fois connecté, vous retrouverez votre poste local sur la gauche et vos datastores sur la droite :

![Connexion en SFTP avec FileZilla](images/connection_sftp_filezilla.png){.thumbnail}

### Connexion depuis un terminal

Dans un terminal, vérifiez que la commande `sftp` est installée en écrivant :

```sh
sftp
```

La commande pour vous connecter est la suivante :

```sh
sftp user@pcc-xxx-xxx-xxx-xxx.ovh.com
```

Le mot de passe de l’utilisateur vous sera ensuite demandé. Une fois connecté, vous pourrez lister vos datastores à l’aide de la commande `ls` :

```sh
sftp> ls pcc-000714
```

Parcourez la liste des datastores trouvés avec la commande précédente :

```sh
sftp> pcc-000714
```

Utilisez la commande `put` pour exporter des fichiers de votre datastore vers votre poste local.

```sh
sftp> put /home/ubuntu-16.04.3-server-amd64.iso
/datastore/pcc-000714/ubuntu-16.04.3-server-amd64.iso  
```

Utilisez la commande `get` pour importer des fichiers de votre poste local vers votre datastore.

```sh
sftp> get /datastore/pcc-00714/ubuntu-16.04.3-server-amd64.iso /home/
```

La commande `exit` vous permet de fermer la connexion.

### Aperçu depuis vSphere

Dans votre interface vSphere, vous pourrez voir le contenu de ce que vous venez d’envoyer en parcourant votre datastore. Pour cela, cliquez sur le datastore souhaité dans le dossier « upload-vpn » :

![Connexion SFTP via vSphere](images/sftpconnexion.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
