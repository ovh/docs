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

### Etape 2 - Récupérer le chemin d'accès complet à l'espace de stockage FTP de votre hébergement web :

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