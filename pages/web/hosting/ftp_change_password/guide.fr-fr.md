---
title: "Modifier le mot de passe d'un utilisateur FTP"
slug: modifier-mot-de-passe-utilisateur-ftp
excerpt: "Apprenez à changer le mot de passe d'un utilisateur FTP créé sur votre hébergement web OVHcloud"
section: FTP et SSH
order: 2
---

**Dernière mise à jour le 24/01/2022**

## Objectif

Les offres d'hébergement web OVHcloud donnent accès à un espace de stockage de fichiers en ligne utilisable via le protocole **FTP**.<br>L'accès à cet espace est possible via un utilisateur FTP et le mot de passe qui lui est associé.
<br>Cet accès vous permettra notamment de [mettre en ligne votre site](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/#etape-2-mise-en-ligne-des-fichiers-du-site-sur-lespace-de-stockage).

**Découvrez comment modifier le mot de passe d'un utilisateur FTP créé sur votre hébergement web OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Étape 1 : accéder à la gestion des utilisateurs FTP

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez le nom de l'hébergement concerné. Sélectionnez l'onglet `FTP-SSH`{.action}.

Un tableau affiche les utilisateurs FTP créés sur votre hébergement. Ces utilisateurs vous permettent d'accéder à votre espace de stockage FTP afin d'y mettre en ligne les fichiers de votre site Internet. Un utilisateur est créé automatiquement lors de l'installation de votre hébergement.

### Étape 2 : modifier le mot de passe d'un utilisateur FTP

> [!primary]
>
> Pour plus d'informations sur les bonnes pratiques en matière de gestion de mots de passe, suivez les instructions de ce [guide](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).
>

Selon votre offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/), la modification du mot de passe de votre utilisateur FTP via l'onglet `FTP-SSH`{.action} se fera par deux chemins différents :

- **pour les offres ne permettant pas de créer un second utilisateur FTP** (offres Start 10M, Kimsufi Web et Perso) : cliquez sur sur le pictogramme en forme de crayon dans la colonne `Mot de passe`{.action}, renseignez le nouveau mot de passe puis confirmez le changement en cliquant sur le bouton vert.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **pour les offres permettant de créer plusieurs utilisateurs FTP** (offres Pro et Performance) : cliquez sur le pictogramme en forme de roue dentée à droite de l'utilisateur FTP concerné puis sur `Changer le mot de passe`{.action}. Dans la fenêtre qui s'affiche, renseignez le nouveau mot de passe souhaité, confirmez en le tapant une seconde fois puis cliquez sur le bouton `Valider`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Choisissez le nouveau mot de passe de votre base de données et notez-le. Il devra, dans les deux cas, respecter les conditions suivantes :

- Minimum 8 caractères ;
- Maximum 30 caractères ;
- Au moins une lettre majuscule ;
- Au moins une lettre minuscule ;
- Au moins un chiffre ;
- Être composé uniquement de chiffres et de lettres.

Consultez enfin l'onglet `Tâches en cours`{.action} et rafraîchissez la page régulièrement. Le changement ne nécessite que quelques minutes pour être effectif.

### Étape 3 : accéder à votre espace de stockage

La connexion à l'espace d'hébergement de vos fichiers peut s’effectuer de plusieurs manières :

- **FTP Explorer** : ce logiciel est accessible depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Pour l'utiliser, depuis l'onglet `FTP-SSH`{.action}, cliquez sur le bouton `FTP Explorer`{.action} ;

- **Logiciel FTP** : vous devrez installer un logiciel compatible avec le protocole FTP sur votre ordinateur (par exemple, [FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)) ;

- **Accès SSH** (uniquement sur les offres Pro et Performance) : consultez le guide « [Utiliser l’accès SSH de son hébergement web](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/) » afin d'utiliser ce protocole de connexion.

> [!primary]
>
> Pour plus d'informations, consultez le guide [« Se connecter à l’espace de stockage de son hébergement web »](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).
>

## Aller plus loin <a name="aller-plus-loin"></a>

[Modifier le mot de passe de votre compte](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
