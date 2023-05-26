---
title: "Modifier le mot de passe d'un utilisateur FTP"
slug: modifier-mot-de-passe-utilisateur-ftp
excerpt: "Découvrez comment changer le mot de passe d'un utilisateur FTP créé sur votre hébergement web OVHcloud"
section: FTP et SSH
order: 03
updated: 2023-05-26
---

**Dernière mise à jour le 26/05/2023**

## Objectif

Les offres d'hébergement web OVHcloud donnent accès à un espace de stockage de fichiers en ligne utilisable via le protocole **FTP** : l'espace de stockage FTP.

L'accès à cet espace est possible à l'aide d'un **utilisateur FTP** et de son mot de passe associé.

Cet accès permet notamment de [mettre en ligne votre site](/pages/web/hosting/hosting_how_to_get_my_website_online/).

**Découvrez comment modifier le mot de passe d'un utilisateur FTP créé sur votre hébergement web OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Étape 1 : accéder à la gestion des utilisateurs FTP

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez le nom de l'hébergement concerné. Sélectionnez l'onglet `FTP-SSH`{.action}.

Un tableau affiche les *utilisateurs FTP* créés sur votre hébergement web. Ces utilisateurs vous permettent d'accéder à votre espace de stockage FTP afin d'y mettre en ligne les fichiers de votre site web. Un utilisateur est créé automatiquement lors de l'installation de votre hébergement web.

### Étape 2 : modifier le mot de passe d'un utilisateur FTP

> [!primary]
>
> Pour plus d'informations sur les bonnes pratiques en matière de gestion de mots de passe, suivez les instructions de ce [guide](/pages/account/customer/manage-ovh-password/).
>

Votre nouveau mot de passe devra respecter la **politique des mots de passe** suivante :

- Minimum 8 caractères ;
- Maximum 30 caractères ;
- Au moins une lettre majuscule ;
- Au moins une lettre minuscule ;
- Au moins un chiffre ;
- Être composé uniquement de chiffres et de lettres.

Selon votre offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/), la modification du mot de passe de votre utilisateur FTP via l'onglet `FTP-SSH`{.action} se fera par deux chemins différents :

- **pour les offres ne permettant pas de créer un second utilisateur FTP** (offres *Start 10M*, *Kimsufi Web* et *Perso*) : cliquez sur le *pictogramme en forme de crayon* dans la colonne `Mot de passe`{.action} du tableau qui s'affiche, renseignez le nouveau mot de passe **en respectant la politique des mots de passe** puis confirmez le changement en cliquant sur le *bouton vert* de validation.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **pour les offres permettant de créer plusieurs utilisateurs FTP** (offres *Pro* et *Performance*) : cliquez sur le *pictogramme en forme de roue dentée* à droite de l'utilisateur FTP concerné puis sur `Changer le mot de passe`{.action}. Dans la fenêtre qui s'affiche, renseignez le nouveau mot de passe souhaité **en respectant la politique des mots de passe**, confirmez en le saisissant une seconde fois puis cliquez sur le bouton `Valider`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Consultez enfin l'onglet `Tâches en cours`{.action} et rafraîchissez la page régulièrement. Le changement ne nécessite que quelques minutes pour être effectif.

### Étape 3 : accéder à votre espace de stockage

Pour accéder à votre espace de stockage FTP, consultez notre guide [« Se connecter à l’espace de stockage de son hébergement web »](/pages/web/hosting/ftp_connection/).
>

## Aller plus loin <a name="go-further"></a>

[Modifier le mot de passe de votre compte](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/)

[Se connecter à l’espace de stockage de son hébergement web](/pages/web/hosting/ftp_connection/)

[Mettre en ligne votre site](/pages/web/hosting/hosting_how_to_get_my_website_online/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.