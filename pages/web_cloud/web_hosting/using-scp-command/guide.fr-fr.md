---
title: "Hébergement Web: utiliser le Secure Copy Protocol (SCP)"
excerpt: "Découvrez comment utiliser la commande Secure Copy Protocol (SCP) en SSH pour copier des fichiers depuis ou vers votre hébergement web"
updated: 2024-01-17
---

## Objectif

Le Secure Copy Protocol (SCP) permet de copier de manière sécurisée (grâce au protocole SSH) des données entre deux appareils. Vous pouvez ainsi copier du contenu :

- présent en local depuis votre ordinateur vers un appareil distant;
- d'un appareil distant vers votre ordinateur;
- d'un serveur vers un autre serveur.

Il permet, depuis un terminal et à l'aide d'une commande linux, de copier un fichier et/ou un dossier contenant un ou plusieurs fichiers.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

**Découvrez comment utiliser la commande Secure Copy Protocol (SCP) en SSH pour copier des fichiers depuis ou vers votre hébergement web**

## Prérequis

- Disposer d'un terminal compatible avec les commandes Linux et SSH (Par exemple, le *terminal* de MacOS ou l'émulateur *Ubuntu* sur Windows);
- Être familiarisé avec les commandes Linux et SSH;
- Disposer d'une offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/) disposant d'un accès en SSH;
- Avoir accès à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
  
## En pratique

### Etape 1 - Récupérer les accès SSH de votre hébergement web :

Pour retrouver les accès SSH de votre hébergement web, consultez notre guide « [Utiliser l'accès SSH de son hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting) ».

### Etape 2 - Récupérer le chemin d'accès complet à l'espace de stockage FTP de votre hébergement web : <a name="step2"></a>

Pour retrouver le chemin d'accès complet à l'espace de stockage FTP depuis votre terminal, ouvrez votre terminal, puis connectez-vous à votre hébergement web en SSH à l'aide de notre guide « [Utiliser l'accès SSH de son hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting) ».

Une fois connecté en SSH à votre hébergement web, entrez la commande suivante : 

```ssh
cd ..
```

Validez la commande à l'aide de la touche `enter` de votre clavier, puis entrez la commande suivante :

```ssh
ls
```

Validez cette seconde commande à l'aide de la touche `enter` de votre clavier.

Dans votre terminal, un résultat similaire à notre exemple ci-dessous apparaît :

```ssh
FTP-login@ssh01.cluster0XX.gra.hosting.ovh.net (php/X.X/production/legacy) /homez.XXX $
FTP-main-login
```

Dans notre exemple :

- `FTP-login` : nom d'un des utilisateurs FTP (principal ou non) de votre hébergement web;
- `/homez.XXX` : filer sur lequel se trouve votre hébergement web;
- `FTP-main-login` : chemin répertoire de l'espace de stockage FTP de votre hébergement web (généralement, ce répertoire est nommé de manière identique au login FTP principal de votre hébergement web).

Dans notre exemple, le chemin d'accès complet à l'espace de stockage FTP pour accéder à la racine FTP de l'hébergement web est le suivant : `/homez.XXX/FTP-main-login`.

Ce n'est qu'à partir d'un répertoire équivalent au répertoire `FTP-main-login` de notre exemple que vous serez autorisé à utiliser la commande `scp`.

En effet, lorsque vous vous connectez de manière classique à l'espace FTP d'un hébergement web, la connection s'effectue directement en vous positionnant à l'intérieur du dossier équivalent au dossier `FTP-main-login` de notre exemple.

C'est à ce niveau que ce trouve notamment par défaut le dossier `www` et le fichier `.ovhconfig` de votre hébergement web.

### Etape 3 - Utiliser la commande « scp » avec votre hébergement web :

> [!success]
>
> Tous les exemples ci-après s'effectuent depuis le terminal de votre appareil/ordinateur **en local**. Vous ne devez donc pas être connecté en SSH dans votre terminal sur votre hébergement web.
>
> Si vous désirez copier du contenu vers votre hébergement web, positionnez votre utilisateur **local** suffisamment en amont des fichiers/dossiers que vous souhaitez copier vers votre hébergement web.
>
> Si vous désirez récupérer une copie des fichiers/dossiers présents sur votre hébergement web en local sur votre appareil/ordinateur, positionnez votre utilisateur **local** suffisamment en amont du dossier qui va récupérer la copie de vos données hébergées.
>

N'oubliez pas également de remplacer tous les paramètres généraux suivants par vos propres paramètres :

- `FTP-login` : login FTP de votre hébergement web;
- `ssh.cluster0XX.hosting.ovh.net` : changez les `XX` par le numéro du cluster où se trouve votre hébergement web. Si besoin, consultez notre guide « [Utiliser l'accès SSH de son hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting) » pour retrouver cette information;
- `/homez.XXX/FTP-main-login/` : modifiez les `XXX` par le numéro du filer et le `FTP-main-login` par les paramètres récupérés lors de l'[étape 2](#step2) du présent guide.
- `source_folder` : nom du dossier source à copier ou dans lequel ce trouve le fichier à copier. *Si l'arboresce correspond à une succession de dossiers imbriqués, vous devrez préciser tous les noms des dossiers en les séparant par un `/`*;
- `target_folder` : nom du dossier cible qui va recevoir le dossier ou le fichier local à copier. *Si l'arboresce correspond à une succession de dossiers imbriqués, vous devrez préciser tous les noms des dossiers en les séparant par un `/`*;
- `file` : nom du fichier à copier à l'aide de la commande `scp`, n'oubliez pas également de préciser l'extension de ce fichier (exemples : *.html*, *.css*, *.php*, *.txt*, etc.).

#### 3.1 : copier du contenu présent en local sur votre appareil vers votre hébergement web :

Pour copier un seul fichier local sur votre hébergement web, utilisez la commande suivante :

```ssh
scp source_folder/file FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder
```

Pour copier un dossier local ainsi que l'intégralité de son contenu sur votre hébergement web, utilisez la commande suivante :

```ssh
scp -r source_folder FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder 
```

#### 3.2 : copier du contenu présent sur votre hébergement web en local sur votre appareil :

Pour copier un seul fichier présent sur votre hébergement web en local sur votre appareil, utilisez la commande suivante :

```ssh
scp FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main/login/source_folder/file target_folder 
```

Pour copier un dossier présent sur votre hébergement web ainsi que l'intégralité de son contenu en local sur votre appareil, utilisez la commande suivante :

```ssh
scp -r FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/source_folder target_folder
```