---
title: 'Créer une clé SSH'
slug: creer-cle-ssh-serveur-dediees
excerpt: 'Découvrez comment créer une clé SSH pour une connexion sécurisée à votre serveur dédié'
section: 'Premiers pas'
order: 4
---

**Dernière mise à jour le 15/04/2020**

## Objectif

L'utilisation du protocole SSH ouvre un canal sécurisé sur un réseau non sécurisé dans une architecture client-serveur, en connectant un client SSH à un serveur SSH. La création d'une jeu de clés SSH vous permet d'obtenir une clé publique et une clé privée. Vous pouvez placer la clé publique sur n'importe quel serveur, puis la déverrouiller. Il suffit de vous connecter au serveur avec un compte client sur lequel votre clé privée est déjà enregistrée. Si les clés SSH correspondent, vous serez automatiquement connecté, sans besoin d'un mot de passe.

**Ce guide explique comment créer une clé SSH et l'utiliser ensuite pour accéder à votre serveur en toute sécurité.**

> [!primary]
>
Veuillez noter qu'une clé SSH n'est pas utilisée pour s'authentifier sur un serveur utilisant le système d'exploitation Windows. Pour ces serveurs, vous devrez toujours utiliser un nom d'utilisateur et un mot de passe.
>

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- Disposer d’un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/) dans votre compte OVHcloud
- Disposer d’un accès administrateur (root) via SSH

## Instructions

### Création d'une clé SSH sous Linux et Mac

Sur une machine Mac ou Linux, ouvrir l'application Terminal (ligne de commande).

Vérifier la présence d’un dossier «.ssh» dans votre répertoire $HOME. Si le dossier n'existe pas, le créer :

```sh
# mkdir ~/.ssh
```

Utiliser la commande suivante pour créer une clé RSA de 4096 bits :

```sh
# ssh-keygen -b 4096
```
L'utilisation de l'option « -t » avec la commande ci-dessus vous permet de spécifier une méthode de cryptage différente, par exemple :

```sh
# ssh-keygen -t ed25519 -a 256
```

La commande vous invitera à enregistrer la clé nouvellement créée :

```sh
Générer une paire de clés RSA publique/privée.
Entez le fichier dans lequel enregistrer la clé (/home/user/.ssh/id_rsa) :
```

Confirmez, et vous pourrez maintenant entrer une passphrase, une sorte de mot de passe pour protéger votre clé SSH. C’est une étape recommandée pour plus de sécurité.

Vos clés SSH doivent être stockées dans le répertoire « .ssh ».

```ssh
Votre identification a été enregistrée sous /home/user/.ssh/id_rsa.
Votre identification a été enregistrée sous /home/user/.ssh/id_rsa.pub.
Votre l’empreinte de la clé est la suivante :
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
L’image randomart de la clé est la suivante :
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o. ..   .    |
|o +   .  . o ..  |
|.. .      oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

> [!warning]
>
> La clé privée doit toujours être gardée en sécurité. Seules les personnes autorisées doivent y avoir accès.
> 

Utilisez la commande « cat » du fichier de votre clé et copiez la sortie afin de lire et exporter votre clé publique :

```ssh
# cat .ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

### Créer une clé SSH à l'aide de PuTTY ( sous Windows)

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) est un client SSH répandu pour Windows. Vous pouvez l'utiliser pour vous connecter à distance à un serveur Linux. Son logiciel compagnon, [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe), peut être utilisé pour créer des clés SSH.

Tout d’abord, téléchargez le logiciel [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe), qui servira à générer la clé.

Ensuite, exécutez le logiciel et choisissez le type de clé. Dans notre exemple, nous choisissons une clé RSA de 4096 bits. Cliquez sur le bouton` Générer `{.action}pour lancer le processus de création.

![clé PuTTy](images/puttygen_01.png){.thumbnail}

Baladez le curseur de votre souris de façon aléatoire dans la zone située sous la barre de progression, comme indiqué ci-dessous.

![clé PuTTy](images/puttygen_02.gif){.thumbnail}

Continuez de balader le curseur jusqu'à ce que la barre soit pleine. Votre clé est maintenant créée et prête à l’emploi.

![clé PuTTy](images/puttygen_03.png){.thumbnail}


### Ajouter une clé SSH à votre serveur

Accédez à votre répertoire $HOME et créez le dossier « .ssh » (s'il n'existe pas) :

```ssh
$ mkdir ~/.ssh
```

Pour stocker la clé de l'utilisateur actuel, ouvrez un fichier nommé « authorized_keys » avec votre éditeur de texte préféré :

```ssh
$ nano ~/.ssh/authorized_keys
```

Copiez et collez votre **clé publique** dans ce nouveau fichier. Enregistrez le fichier et quittez l’éditeur. Redémarrez votre serveur ou redémarrez uniquement le serveur OpenSSH (la commande appropriée peut varier en fonction de votre système d'exploitation) :

```ssh
$ systemctl restart sshd
```

Pour vérifier que votre clé a été correctement configurée, essayez d'accéder à votre serveur via SSH en utilisant la commande suivante. Remplacez « IP_ADDRESSorHOSTNAME »  par l'adresse IP ou le nom d'hôte du serveur auquel vous essayez d'accéder :

```ssh
$ ssh user@IP_ADDRESSorHOSTNAME
```

#### Ajouter des clés supplémentaires à votre serveur

Facile d’ajouter des clés SSH pour des utilisateurs supplémentaires. Il suffit de répéter les étapes précédentes tout en utilisant le bon répertoire $HOME, afin de créer une clé propre à chaque utilisateur.

#### Supprimer des clés autorisées de votre serveur

Supprimez de votre fichier « authorized_keys » la clé qui correspond à l'utilisateur dont l'accès a été révoqué. Après avoir supprimé la clé, enregistrez le fichier et quittez l'éditeur de texte.

### Importer votre clé SSH dans l’espace client OVHcloud

L’espace client OVHcloud vous permet de stocker des clés publiques créées en utilisant l'un des types de cryptage pris en charge (actuellement RSA, ECDSA, ED25519). 

Ouvrez la barre de navigation latérale en cliquant sur votre nom dans le coin supérieur droit et utilisez le raccourci `Produits et services`{.action}.

![Espace de gestion des clés SSH](images/SSH_keys_panel_1.png){.thumbnail}

Dans « Mes services », accédez à l’onglet `Clés SSH`{.action} et cliquez sur `Ajouter une clé SSH`{.action}.

![Espace de gestion des clés SSH](images/SSH_keys_panel_2.png){.thumbnail}

Sélectionnez « Dédié » dans le menu déroulant.

Dans la nouvelle fenêtre, entrez un identifiant (un nom de votre choix) pour la clé. Dans le champ « Clé », collez la chaîne de clé (copiée à partir de votre fichier « .pub »).

![Espace de gestion des clés SSH](images/SSH_keys_panel_3.png){.thumbnail}

Si vous avez copié l'intégralité de la chaine, l'identifiant qui suit la clé doit déjà être inclus. Notez que pour stocker votre clé, vous devrez toujours spécifier votre identifiant après la clé que vous aurez collée. C'est une exigence de l’espace client OVHcloud. (Voir l'exemple de format ci-dessus). Cliquez sur `Confirmer`{.action} pour stocker votre clé publique.

> [!primary]
>
> Toute clé enregistrée dans la section « Dédié » sera également utilisable pour vos services VPS. En ce qui concerne les clés SSH pour les services Public Cloud, veuillez vous référer à [ce guide](https://docs.ovh.com/fr/public-cloud/creation-des-cles-ssh/).
>


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.