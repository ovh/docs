---
title: 'Utilisation de Plik'
excerpt: "Découvrez comment utiliser Plik pour envoyer des fichiers à d'autres personnes"
slug: plik
section: Outils
updated: 2022-02-14
---

**Dernière mise à jour le 03/07/2021**

## Objectif

**Ce guide fournit des informations de base sur l'utilisation de [Plik](https://ca.plik.ovh/#/), des exemples d'utilisation et les différentes options de partage de fichiers.**

## Prérequis

- Disposer d'un compte OVHcloud

Si vous n'avez pas déjà créé votre compte OVHcloud, vous pouvez le faire en cliquant [ici](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

## En pratique

### Connexion API

Pour télécharger des fichiers, vous devez être authentifié. Cliquez sur `Login with OVH`{.action} pour commencer.

![login](images/plik-login.png)

Connectez-vous avec votre compte OVHcloud, ce qui donner à l'API OVHcloud l'accès à l'outil Plik. Entrez vos informations d'identification et cliquez sur le bouton `Log in`{.action} pour continuer.

![API](images/api-login.png)

Vous accédez alors à la page de téléchargement.

### Téléverser des fichiers

 Une fois connecté, vous pourrez téléverser des fichiers, vous déconnecter, créer des jetons d'accès ou supprimer tous les téléversements.

![upload](images/plik-upload.png)

Pour téléverser un fichier, sélectionnez le bouton `Upload files`{.action}. Cela ouvrira une nouvelle page. Sur cette page, de nombreuses options sont disponibles pour conifigurer vos téléversements.

![upload options](images/plik-upload-options.png)

- Destruct after the first download - Cette option supprimera votre téléversement après le premier téléchargement.
- Streaming - Le fichier ne sera pas stocké sur le serveur. Au lieu de cela, le téléversement de fichier commence lorsque l'utilisateur distant commence le téléchargement.
- Removable - Permet aux utilisateurs finaux de supprimer le fichier téléversé.
- Password - Protégez votre téléversement en imposant un identifiant et un mot de passe que l'utilisateur distant devra renseigner.
- Comments - Ajoutez des commentaires à votre téléchargement. Le langage *markdown* est pris en charge.
- Files will be automatically removed in - Choisissez le nombre de jours (30 maximum), d'heures ou de minutes au bout desquels vous souhaitez que vos fichiers soient automatiquement supprimés.

> [!primary]
>
> Note: Lorsque vous protégez votre téléversement avec un mot de passe, le nom d'utilisateur par défaut est "plik".
>

Sélectionnez les options que vous souhaitez utiliser et cliquez sur le bouton `Add Files`{.action}.

![add files](images/plik-add-files.png)

> [!primary]
>
> Note: La taille des fichiers est limitée à 10 Go.
>

Après avoir sélectionné les fichiers que vous souhaitez téléverser, sélectionnez le bouton `Upload`{.action} vert sur le côté gauche. Cela ouvrira une nouvelle page avec vos fichiers joints

Des options complémentaires de téléchargement sont alors disponibles.

### Téléchargement de fichiers

Sur la page de téléchargement, de nouvelles options sont disponibles :

- Zip archive - Place tous les fichiers que vous avez téléversés dans un dossier compressé.
- Add files - Vous permet d'ajouter d'autres fichiers.
- Delete - Supprime tous les fichiers préalablement téléversés.

Vous pouvez également supprimer des fichiers un par un en cliquant sur le bouton `X`{.action} à droite du fichier.

![download file](images/plik-download.png)

Pour permettre à vos utilisateurs finaux de télécharger vos fichiers, donnez-leur le lien vers le fichier individuel situé sous le nom de fichier. Vous pouvez également leur donner le lien vers tous les fichiers de la session en leur donnant l'URL située dans votre barre d'adresses web.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
