---
title: 'Les problèmes récurrents lors de l’utilisation d’un logiciel FTP'
excerpt: 'Retrouvez ici les informations sur les problèmes récurrents que vous pouvez rencontrer sur votre logiciel FTP'
slug: mutualise-les-problemes-ftp-recurrents
legacy_guide_number: 1996
section: 'FTP et SSH'
order: 
---

**Dernière mise à jour le 15/10/2021**

## Objectif

L'utilisation de logiciels FTP lors de la connexion à votre [hébergement Cloud Web](https://www.ovh.com/fr/hebergement-web/) peut engendrer différentes anomalies. Ce guide vous permettra de résoudre les plus courantes d'entre elles.

**Découvrez comment résoudre les dysfonctionnements liés à l'utilisation des logiciels FTP.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement Web Cloud](https://www.ovh.com/fr/hebergement-web/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### Messages d'erreur

#### « Ce serveur ne supporte pas FTP sur TLS » (FileZilla)

![](images/.png){.thumbnail}

Ce message sur le logiciel [Filezilla](../mutualise-guide-utilisation-filezilla/) indique que vous n'avez pas activé l'option SFTP ou SSH sur votre utilisateur FTP. De ce fait, les données échangées entre votre serveur d'hébergement et votre poste informatique suite à l'authentification ne seront pas chiffrées.

Si les données que vous souhaitez échanger par ce biais ne sont pas confidentielles, cliquez sur « OK ».

Dans le cas contraire, rendez vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), partie Web Cloud puis Hébergements. Sélectionnez l'hébergement concerné puis choisissez l'onglet FTP-SSH.

Cliquez sur le bouton ... à droite de la ligne de l'utilisateur FTP concerné puis sur Modifier. 

### Anomalies

#### J'ai transféré mes fichiers avec un logiciel FTP, mais mon site ne s'affiche pas.

- Vérifiez tout d'abord que les fichiers et dossiers de votre site sont bien présents dans le [Dossier racine](../mettre-mon-site-en-ligne/#3-telecharger-les-fichiers-sur-lespace-de-stockage) de votre hébergement.
- Si vous avez réalisé une modification dans vos [serveurs ou votre zone DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) il y a moins de 48 heures, patientez et redémarrer régulièrement vos appareils afin de vider leurs caches.
- Pour tout autre message d'erreur, consultez la section `Diagnostic` de nos guides [Hébergements Web](../)

#### Mes identifiants ftp ne fonctionnent pas.

Vérifiez bien que vous recopiez correctement le mot de passe. Le mieux est de le copier/coller (Ctrl-C Ctrl-V sous Windows). Attention à la confusion entre l (L) et 1 (un) ainsi que O (la lettre o) et 0 (zéro). 

Si vous ne parvenez pas à vous authentifier, les identifiants utilisés ne sont probablement pas correctes. Modifiez votre mot de passe FTP en suivant les instructions de ce [guide](../modifier-mot-de-passe-utilisateur-ftp/).

#### Quel espace me reste-t-il sur mon site ?

Le manque d'espace sur votre hébergement mutualisé peut générer des dysfonctionnements si vous tentez de mettre en ligne de nouveaux fichiers.

- Pour vérifier cela, vous devez vous connectez à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Sélectionnez votre plateforme d'hébergement.

![hosting](images/img_3298.jpg){.thumbnail}

Un récapitulatif apparaît avec le quota d'utilisation de votre espace FTP.

![hosting](images/img_3299.jpg){.thumbnail}

#### Je n'arrive pas a envoyer mes fichiers sur le serveur ftp ?

il faut se connecter en mode passif (Mode de configuration d'un serveur FTP dans lequel c'est le serveur FTP lui-même qui détermine le port de connexion) dans votre client ftp, pour filezilla par exemple, vous allez dans (Édition-> Paramètres -> Connexion -> Paramètres Pare-feu -> Mode passif).

### Informations utiles

#### A quoi sert le repertoire cgi-bin ?

Le répertoire cgi-bin n'est pas lisible directement à partir de serveur web. C'est un répertoire qui est en parallèle de www. Il existe donc les sécurités suivantes :

- Les fichiers mis dans le répertoire cgi-bin ne peuvent être lus. Ils peuvent uniquement être exécutés. Vous ne pouvez pas y placer par exemple les images gif ou jpeg. Leur lecture provoquera l'erreur,
- Puisqu'aucun fichier ne peut être lu dans cgi-bin, vous pouvez y placer les fichiers de bases de données en texte par exemple que vous souhaitez protéger,
- L'exécution des scripts cgi à partir de cgi-bin se fait via un alias de votre site. Vous ne pouvez pas exécuter les scripts autrement qu'avec votre domaine.

## Aller plus loin <a name="aller-plus-loin"></a>

[Utilisation logiciel FileZilla avec votre hebergement](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.