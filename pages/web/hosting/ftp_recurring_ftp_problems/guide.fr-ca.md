---
title: 'Les problemes recurrents lors de l’utilisation d’un logiciel FTP'
slug: mutualise-les-problemes-ftp-recurrents
legacy_guide_number: 1996
excerpt: 'Retrouvez ici les informations sur les problemes recurrents que vous pouvez rencontrer sur votre logiciel FTP'
section: 'FTP et SSH'
---

**Dernière mise à jour le 05/05/2020**

Vous trouverez dans ce guide différentes solutions aux problèmes de FTP que vous pouvez rencontrer.

Pour réaliser une connexion FTP, vous pouvez vous aider de se guide : [Utilisation logiciel FileZilla avec votre hebergement](../mutualise-guide-utilisation-filezilla/){.external}


## Problemes recurrents

### J'ai transfere mes fichiers avec un logiciel FTP, mais rien ne s'affiche
- Il faut pour cela vérifier que les fichiers de votre site soient bien présents dans le répertoire /www de votre hébergement.
- Si vous avez réalisé une modification dans votre zone DNS, il peut y avoir un délai de propagation de 4 à 24 heures.
- En cas d'erreur 500, "Internal server error", veuillez consulter ce guide : [Que faire en cas d’erreur 500 Internal Server Error ?](../erreur-500-internal-server-error/){.external}


### Mes codes ftp ne fonctionnent pas
Vérifiez bien que vous recopiez correctement le mot de passe. Le mieux est de le copier/coller (Ctrl-C Ctrl-V sous windows). Attention à la confusion entre l (L) et 1 (un) ainsi que O (la lettre o) et 0 (zéro). Si cela ne fonctionne pas, les identifiants utilisés ne sont probablement pas correctes.


### Quel espace me reste-t-il sur mon site ?
Le manque d'espace sur votre hébergement mutualisé peut générer des dysfonctionnements si vous tenter de mettre en ligne de nouveaux fichiers.

- Pour vérifier cela, vous devez vous connectez à votre [espaceclient](https://www.ovh.com/manager/web/login/){.external} .
- Sélectionnez votre plateforme d'hébergement.


![hosting](images/img_3298.jpg){.thumbnail}

Un récapitulatif apparaît avec le quota d'utilisation de votre espace FTP.


![hosting](images/img_3299.jpg){.thumbnail}


### Je n'arrive pas a envoyer mes fichiers sur le serveur ftp ?
il faut se connecter en mode passif (Mode de configuration d'un serveur FTP dans lequel c'est le serveur FTP lui-même qui détermine le port de connexion) dans votre client ftp, pour filezilla par exemple, vous allez dans (Édition-> Paramètres -> Connexion -> Paramètres Pare-feu -> Mode passif).


## Informations utiles

### A quoi sert le repertoire cgi-bin ?
Le répertoire cgi-bin n'est pas lisible directement à partir de serveur web. C'est un répertoire qui est en parallèle de www. Il existe donc les sécurités suivantes :

- Les fichiers mis dans le répertoire cgi-bin ne peuvent être lus. Ils peuvent uniquement être exécutés. Vous ne pouvez pas y placer par exemple les images gif ou jpeg. Leur lecture provoquera l'erreur,
- Puisqu'aucun fichier ne peut être lu dans cgi-bin, vous pouvez y placer les fichiers de bases de données en texte par exemple que vous souhaitez protéger,
- L'exécution des scripts cgi à partir de cgi-bin se fait via un alias de votre site. Vous ne pouvez pas exécuter les scripts autrement qu'avec votre domaine.
