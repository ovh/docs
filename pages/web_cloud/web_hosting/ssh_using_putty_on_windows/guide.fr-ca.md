---
title: Utilisation de Putty sur Windows
excerpt: Vous trouverez dans ce guide differentes informations et aides concernant l’installation de Putty sur Windows.
updated: 2020-05-05
---

Pour l'aide à l'utilisation du SSH sur vos hébergements, le mieux est de consulter [ce guide sur le SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting){.ref}. Attention l'option SSH n'est disponible qu'à partir des [hébergements PRO](/links/web/hosting-professional-offer){.external}.

Retrouvez nos [différents guides hébergements Web](/products/web-cloud-hosting){.external} disponibles.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Utilisation de Putty

### Introduction
Sur les systèmes Windows, il y a plusieurs programmes disponibles basés sur SSH. Un des plus populaires et faciles à utiliser est "Putty". Vous pouvez le télécharger [sur leur site officiel](http://www.putty.org/){.external}.

Vous aurez également besoin de vos identifiants FTP

- Serveur FTP .
- Login FTP .
- Mot de passe FTP .

Vous pouvez retrouver ces informations de connexion sur votre espace client, partie FTP, ou en suivant [ce guide](/pages/web_cloud/web_hosting/ftp_connection).

### Lancement de Putty
- Après l'avoir installé, lancez Putty.
- Dans le champ Host Name (or IP adress) saisissez votre serveur FTP .
- Dans le champ Port saisissez 22 s'il n'est pas déjà rentré.
- Cochez SSH .
- Cliquez sur Open .

![hosting](/pages/assets/screens/other/web-tools/putty/configuration.png){.thumbnail}

### Connexion a votre hebergement
- Dans l'invite de commande qui s'est ouvert, saisissez votre login FTP , puis tapez sur la touche "Entrée".
- Saisissez ensuite votre mot de passe FTP . puis tapez sur la touche "Entrée".

Il est normal à cette étape si vous ne voyez pas les caractères que vous tapez apparaitre, c'est une sécurité de Putty. Si le mot de passe ou le login rentrés ne sont pas corrects, recommencez.

- Une fois vos identifiants FTP correctement rentrés, vous verrez apparaître un message " Welcome to Ovh "

### Utilisation du SSH.
Pour l'utilisation du SSH il faut maintenant vous diriger vers [ce guide](/pages/web_cloud/web_hosting/ssh_on_webhosting){.ref}.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).