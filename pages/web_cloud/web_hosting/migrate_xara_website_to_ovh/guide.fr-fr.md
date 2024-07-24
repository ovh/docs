---
title: "Migrer son site web Xara vers OVHcloud"
excerpt: "Découvrez comment migrer votre site web Xara et ses services associés vers OVHcloud"
updated: 2024-07-24
---

## Objectif

Ce tutoriel vous explique pas à pas comment migrer votre site web Xara et tous ses services associés vers OVHcloud.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) ou au [site officiel de Xara Web designer](https://www.xara.com/webdesigner-plus/){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

**Découvrez comment migrer votre site web Xara et ses services associés vers OVHcloud.**

## Prérequis

- Être connecté à l'interface d'administration de Xara

## En pratique

### Étape 1 : sauvegarder les fichiers et la base de données de votre site web Xara

La première étape consiste à récupérer tous les fichiers relatifs à votre site web Xara. Cela inclut les fichiers Xara, ainsi que votre base de données si vous en avez une. Pour plus de détails, consultez la page « [Exporting a Website](https://webdesigner.xara.com/bhavtest/test1/xara_desktop/product_support/web_features/exporting_website.html?rhhlterm=website){.external} » ou encore l'étape 3 du guide « [Migrer son site web et ses services associés vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh) ».

### Étape 2 : transférer votre site web Xara vers OVHcloud

Une fois les fichiers et la base de données de votre site web Xara sauvegardés, transférez-les vers votre hébergement web OVHcloud. Si vous ne possédez pas encore d'hébergement web OVHcloud, suivez l'étape 1 du guide « [Migrer son site web et ses services associés vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh) ».

#### Étape 2.1 : transférer les fichiers de votre site web Xara

> [!primary]
>
> Nous vous recommandons d'utiliser le logiciel [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) pour transférer vos fichiers Xara vers votre hébergement web.
>

Pour transférer les fichiers relatifs à votre site web Xara, connectez-vous  à l'[espace de stockage FTP de votre hébergement web OVHcloud](/pages/web_cloud/web_hosting/ftp_connection).

Une fois connecté à l'espace de stockage FTP de votre hébergement web OVHcloud, naviguez vers le répertoire racine « www » (ou dans un autre dossier racine que vous aurez préalablement créé). Si vos fichiers de sauvegarde sont compressés (zippés), décompressez-les dans un dossier vide sur votre ordinateur avant de les téléverser dans le répertoire racine de votre hébergement web OVHcloud.

#### Étape 2.2 : importer la base de données de votre site web Xara

Si vous n'en avez pas encore, [créez une nouvelle base de données](/pages/web_cloud/web_hosting/sql_create_database) puis [importez votre sauvegarde dans votre nouvelle base de données](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

> [!primary]
>
> OVHcloud propose des serveurs de base de données Web Cloud Databases. Si vous souhaitez utiliser cette offre avec votre site web, retrouvez l'ensemble des informations sur ce produit sur notre [page dédiée](/links/web/databases).
>

### Étape 3 : mettre à jour les informations de la base de données

Vous devez maintenant lier votre site web Xara à votre base de données. Ces modifications sont à effectuer dans votre fichier de configuration. Retrouvez l'ensemble des actions à effectuer en suivant les étapes du guide « [Modifier le mot de passe de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_change_password) ».

### Migrer d'autres services associés à votre site web Xara

Vous venez de migrer vos fichiers et votre base de données Xara. Si vous souhaitez migrer d'autres services comme vos e-mails, votre nom de domaine ou encore vos zones DNS, suivez les étapes du guide « [Migrer son site web et ses services associés vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh) » en vous reportant aux étapes qui concernent les services que vous souhaitez migrer. En effet, plusieurs des étapes auront déjà été effectuées dans ce guide.

> [!warning]
>
> Si vous souhaitez migrer votre nom de domaine Xara vers OVHcloud, consultez la partie 3 de cette [page du site officiel de Xara](https://www.xara-online.com/fr/domaines-faq.152.html){.external} pour obtenir des informations détaillées sur les étapes administratives nécessaires, comme le déblocage de votre nom de domaine et l'obtention du code de transfert.
>

## Aller plus loin <a name="go-further"></a>

[Généralités sur les e-mails mutualisés](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

[Migrer son site web et ses services associés vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

[Importer une base de données MySQL](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).