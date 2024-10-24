---
title: 'Web Cloud Databases - Comment récupérer les logs ?'
excerpt: 'Découvrez comment récupérer les logs de vos bases de données hébergées sur votre serveur Web Cloud Databases'
updated: 2024-10-24
---

> [!primary]
>
> **Ce guide est actuellement en cours de mise à jour. Certaines informations pourraient être incomplètes ou obsolètes. Merci de votre compréhension.**

## Objectif

La solution [Web Cloud Databases](/links/web/databases) permet d'héberger plusieurs bases de données. Dans certaines situations, vous pouvez être amené à consulter / récupérer les logs  :

- de votre serveur Web Cloud Databases ;
- pour l'une des bases de données hébergée sur votre serveur Web Cloud Databases.

**Découvrez comment récupérer les logs de vos bases de données hébergées sur votre serveur Web Cloud Databases**

## Prérequis

- Disposer d'une solution [Web Cloud Databases](/links/web/databases) (incluse ou non dans une offre d'[hébergement web performance](/links/web/hosting)).
- Être connecté à votre [espace client OVHcloud](/links/manager){.external}.

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance sur l'interprétation des logs disponibles avec votre solution Web Cloud Databases. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce tutoriel.
>

### Consulter les logs de votre solution Web Cloud Databases en temps réel

Pour vérifier en temps réel les logs de votre solution Web Cloud Databases, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Web Cloud Databases`{.action}.
4. Sélectionnez la solution Web Cloud Databases concernée.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Logs`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-with-logs.png){.thumbnail}

C'est dans cette console intégrée que vous trouverez, en temps réel, les logs de votre solution Web Cloud Databases.

> [!primary]
>
> Comme précisé ci-dessus, les logs ne sont disponibles ici qu'en temps réel. Cela signifie que ces logs n'apparaîtront que s'ils sont générés au moment où vous vous trouvez sur l'onglet `Logs`{.action}. 
>
> Si vous quittez l'onglet `Logs`{.action} puis que vous revenez dessus ultérieurement, l'historique qui s'affichait auparavant aura disparu.
>

### Récupérer l'historique des logs de votre solution Web Cloud Databases

Pour récupérer l'historique des logs de votre solution Web Cloud Databases, vous devrez vous y connecter en SFTP.

> [!warning]
>
> Avant de vous connecter, vérifiez que l'adresse IP publique du poste que vous utilisez est bien autorisée sur votre serveur Web Cloud Databases, avec l'option `SFTP` cochée.
>
> Pour vérifier cela, récupérez l'adresse IP publique de votre point d'accès à Internet puis consultez la section **Autoriser une adresse IP** de [ce guide](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

Pour retrouver les informations de connexion en SFTP à votre solution Web Cloud Databases, réalisez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Web Cloud Databases`{.action}.
4. Sélectionnez la solution Web Cloud Databases concernée.
5. Sur la page qui s'affiche, restez sur l'onglet `Informations générales`{.action} puis positionnez-vous au niveau de l'encadré intitulé `Informations de connexion`{.action}.
6. En dessous de la mention `SFTP`{.action}, vous retrouverez l'ensemble des informations nécessaires pour vous connecter en SFTP.

> [!primary]
>
> Si vous ne connaissez pas le `Mot de passe du serveur`, cliquez sur le bouton `...`{.action} à droite pour le modifier.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Une fois les identifiants de connexion SFTP récupérés, connectez-vous par l'intermédiaire d'un client FTP (FileZilla, Cyberduck, WinSCP, etc.).

Pour FileZilla, rendez-vous en haut à gauche dans le menu `Fichier`{.action}, puis cliquez sur `Gestionnaire de sites`{.action}.

Cliquez sur `Nouveau site`{.action} puis saisissez les paramètres relevés précédemment.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

Le fichier de logs, nommé `stdout.log`, se trouve à la racine.

Vous pourrez le télécharger sur votre poste pour le consulter.

> [!primary]
>
> Un fichier supplémentaire de logs intitulé `slow-query.log` peut apparaître à la racine SFTP de votre serveur Web Cloud Databases.
> Ce fichier contient l'historique des requêtes lentes qui se sont exécutées sur votre serveur Web Cloud Databases. 
> 
> Par défaut, la valeur est définie à 1 seconde sur les solutions Web Cloud Databases dans la variable **long_query_time**.
> 
> Grâce à ce fichier, vous pourrez optimiser vos scripts et le contenu de votre (vos) base(s) de données afin d'améliorer les performances de vos différents services associés.
>

## Aller plus loin <a name="go-further"></a>

[Premiers pas avec votre Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).