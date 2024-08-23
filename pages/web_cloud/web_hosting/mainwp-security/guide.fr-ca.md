---
title: "Améliorer la sécurité de son site web avec le plugin MainWP pour WordPress"
excerpt: "Découvrez comment contrôler la sécurité de vos sites web depuis une seule interface grâce à MainWP"
updated: 2024-01-25
---

## Objectif

Maintenir la sécurité de vos sites web est crucial pour le développement de votre marque. Une sécurité optimale sur vos sites web permet de protéger les données de votre entreprise, mais aussi celles de vos clients, préservant ainsi la confiance et l'image de votre société. Grâce aux extensions du plugin WordPress MainWP, vous pouvez contrôler la sécurité de vos sites web depuis une seule et même interface.

**Ce guide vous explique comment améliorer la sécurité de vos sites web depuis le dashboard MainWP**

## Prérequis

- Disposer d'une [offre d'hébergement Web Cloud](/links/web/hosting).
- Être connecté à votre dashboard MainWP.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) ou à [l'éditeur du du plugin MainWP](https://mainwp.com/support/){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

## En pratique

### Installer l'extension Sucuri

> [!primary]
> Si vous n'avez jamais installé d'extension MainWP, découvrez dans [ce guide](/pages/web_cloud/web_hosting/mainwp_general) comment installer une extension.
>

Pour retrouver toutes les extensions liées à la sécurité, rendez-vous dans la rubrique [sécurité](https://mainwp.com/mainwp-extensions/extension-category/security/) de MainWP. Vous pouvez également chercher une extension en cliquant sur `Extensions`{.action} depuis le menu principal de MainWP puis sur `Install Extensions`{.action}.

Cliquez sur l'onglet `Security`{.action} pour afficher la liste des extensions liées à la sécurité. Dans cet exemple, nous choisissons l'extension gratuite Sucuri mais vous êtes libre de choisir l'extension de votre choix. Une fois l'extension sélectionnée, cliquez sur `Install Selected Extensions`{.action}.

Dans le menu principal de MainWP, cliquez sur `Extensions`{.action} puis sur `Manage Extensions`{.action}. L'extension Sucuri précédemment installée apparaît.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/sucuri_extension.png){.thumbnail}

Si ce n'est pas déjà fait, cliquez sur `Enable`{.action} puis sur `License`{.action} pour pouvoir utiliser l'extension.

### Effectuer un scan de sécurité

Dans le menu principal de MainWP, cliquez sur `Sites`{.action} puis sélectionnez le site enfant de votre choix. En haut de l'écran, cliquez sur l'onglet `Security`{.action}.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/security_tab.png){.thumbnail}

Pour effectuer un scan de sécurité sur votre site web, cliquez sur `Scan Website`{.action}.

![mainWP](/pages/assets/screens/other/cms/wordpress/mainwp/sucuri_scanner.png){.thumbnail}

Une fois le scan de sécurité effectué, une nouvelle ligne s'affiche, correspondant au rapport du scan de sécurité.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/report_security_line.png){.thumbnail}

Cliquez sur `Show Report`{.action} pour visualiser le rapport de sécurité.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/security_report_details.png){.thumbnail}

Le rapport du scan de sécurité fournit de nombreuses informations importantes concernant la sécurité de votre site web :

- présence de virus et de logiciels malveillants ;
- détection d'anomalies ;
- liens dangereux ;
- tentatives de SPAM ;
- etc.

Pensez à effectuer régulièrement des scans de sécurité. Avec Sucuri, il est possible d'activer un rappel. En bas de la liste de vos rapports de sécurité, cliquez sur la liste déroulante à droite de `Remind me if I don't scan my child site for`{.action}. Par exemple, si vous choisissez `1 week`{.action}, Sucuri vous rappellera chaque semaine d'effectuer un scan de sécurité.

### Identifier et résoudre les problèmes de sécurité

Dans le menu principal de MainWP, cliquez sur `Sites`{.action} puis sélectionnez le site enfant de votre choix. En haut de l'écran, cliquez sur l'onglet `Security`{.action}. Sur le dashboard qui s'affiche, vous pouvez voir si des problèmes de sécurité ont été identifiés par Sucuri.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/security_overview.png){.thumbnail}

Dans notre exemple, Sucuri nous indique que trois problèmes de sécurité ont été identifiés. Cliquez sur `Fix all issues`{.action} pour résoudre tous les problèmes de sécurité. Si vous voulez en savoir plus sur les problèmes identifiés, cliquez sur l'onglet `Security`{.action} en haut de l'interface. La liste des problèmes de sécurité s'affiche.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/security_list.png){.thumbnail}

Pour résoudre un problème, identifiez la ligne correspondante et cliquez sur le bouton `Fix`{.action} à droite de la ligne.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/security_unfix.png){.thumbnail}

Une fois le problème résolu, vous pouvez annuler les modifications apportées en cliquant sur le bouton `Unfix`{.action}.

## Aller plus loin <a name="go-further"></a>

[Administrer plusieurs sites web WordPress avec le plugin MainWP](/pages/web_cloud/web_hosting/mainwp_general)

[Gérer les clients de ses sites web avec MainWP](/pages/web_cloud/web_hosting/mainwp-client-management)

[Sauvegarder ses sites web avec MainWP](/pages/web_cloud/web_hosting/mainwp-backup)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).