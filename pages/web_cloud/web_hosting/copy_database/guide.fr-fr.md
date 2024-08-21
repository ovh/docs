---
title: "Dupliquer le contenu d'une base de données dans une autre"
excerpt: "Découvrez comment copier le contenu d'une base de données OVHcloud dans une autre base de données OVHcloud"
updated: 2023-11-22
---

## Objectif

Votre base de données est un élément central dans la construction de votre site web dynamique. Au cours du cycle de vie de votre site web, pour des raisons pratiques ou techniques, vous pouvez être amené à copier le contenu de votre base de données vers une autre de vos bases de données [start SQL](/links/web/hosting-options-startsql) ou [Web Cloud Databases](/links/web/databases).

**Découvrez comment copier le contenu d'une base de données OVHcloud dans une autre base de données OVHcloud.**

> [!primary]
>
> Grâce à cette fonctionnalité, les bases de données ne sont pas déplacées mais copiées. En effet, la base de données d’origine n’est pas supprimée automatiquement, contrairement à un processus de migration. Seul le contenu de la base de données source est dupliqué pour être copié dans la base de données de destination.
>

## Prérequis

- Disposer d’offres de bases de données [start SQL](/links/web/hosting-options-startsql) et/ou [Web Cloud Databases](/links/web/databases). Les deux bases de données concernées doivent être préalablement créées pour pouvoir utiliser l'outil de duplication.
- Être connecté à l’[espace client OVHcloud](/links/manager)
- Disposer des droits suffisants sur l’ensemble des services de base de données concernées. Retrouvez plus d'informations sur notre guide [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts).

## En pratique

Avant de commencer, assurez-vous que :

- Votre **S**ystème de **G**estion de **B**ases de **D**onnées (MySQL, PostgreSQL, etc.) est le même pour vos deux bases de données (source et destination).
- La version de votre SGBD est la même pour vos deux bases de données (source et destination). Même si la copie peut fonctionner avec des versions différentes, il est conseillé d'utiliser les mêmes versions.
- Le contenu de la base de données source ne doit pas excéder la taille de la base de données de destination.

### Identifier ma base de données source

Cette fonctionnalité est disponible pour la copie : 

- d'une base de données [Start SQL](/links/web/hosting-options-startsql) (incluse dans certains de nos [hébergements web](/links/web/hosting) ou [commandée séparément](/links/web/hosting-options-startsql));
- d'une base de données présente sur un serveur [Web Cloud Databases](/links/web/databases) (incluse avec nos [hébergements Performance](/links/web/hosting-performance-offer) ou [commandée séparément](/links/web/databases)). 

Selon votre situation, le chemin pour accéder à votre base de données source est différent.

#### Base de données Start SQL

Dans votre [espace client OVHcloud](/links/manager), sélectionnez `Web Cloud`{.action} dans le menu en haut de l'interface. Dans la colonne de gauche, dirigez-vous dans l’onglet `Hébergements`{.action}, puis cliquez sur l’hébergement web où se trouve la base de données source dont le contenu est à copier.

![Liste des hébergements](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/web-hosting-selection.png){.thumbnail}

En cliquant sur l’onglet `Bases de données`{.action}, la liste de vos bases de données Start SQL s’affiche.

![Liste des BDD Start SQL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-dashboard-db-list.png){.thumbnail}

#### Web Cloud Databases

Dans votre [espace client OVHcloud](/links/manager), sélectionnez `Web Cloud`{.action} dans le menu en haut de l'interface. Dans la colonne de gauche, dirigez-vous dans l’onglet `Web Cloud Databases`{.action}, puis sélectionnez le serveur Web Cloud Databases où se trouve votre base de données source dont le contenu est à copier.

![Liste des serveurs WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/wcdb-server-selection.png){.thumbnail}

En cliquant sur l’onglet `Bases de données`{.action}, la liste des bases de données présentes sur votre serveur Web Cloud Databases s’affiche.

![Liste des BDD WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/wcdb-dashboard-db-list.png){.thumbnail}

### Copier le contenu d'une base de données

Toujours dans l'onglet `Bases de données`{.action} et quelle que soit votre offre, cliquez sur le bouton `...`{.action} à droite de la ligne correspondant à la base de données dont vous souhaitez copier le contenu, puis sélectionnez `Copier la base de données`{.action}.

![CTA_copier_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}

Une fenêtre s’affiche afin d’identifier votre base de données de destination.

![Interface copier BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}

Si vous ne possédez pas de base de données de destination et comme nous le montre la capture écran ci-après, cliquez sur le lien présent pour acheter une nouvelle base de données :

![Liste des BDD WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-link-to-buy-db.png){.thumbnail}

Vous pourrez choisir entre acheter une offre « [start SQL](/links/web/hosting-options-startsql) » ou un serveur de bases de données « [Web Cloud Databases](/links/web/databases) ».

> [!primary]
>
> Lorsque vous achetez votre nouvelle base de données, celle-ci n’est pas activée par défaut. N'oubliez pas de l'activer. Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
> 
> - Pour une base de données « Shared SQL » : suivez notre guide « [Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database) »;
> - Pour une base de données qui sera présente sur un serveur « Web Cloud Databases » : suivez notre guide « [Créer une base de données sur un serveur Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server) ».
>

Si vous possédez déjà une base de données de destination, choisissez d'abord son type :

- `Copier vers une base de données`{.action} : si vous souhaitez copier le contenu de votre base de données source vers une base de données **Start SQL** (destination).
- `Copier vers un Web Cloud Databases`{.action} : si vous souhaitez copier le contenu de votre base de données source vers une base de données **Web Cloud Databas** (destination).

#### Choix 1 - Copier vers une base de données Start SQL

Vous venez de sélectionner `Copier vers une base de données`{.action}. Deux listes déroulantes s'affichent. Cliquez sur la première puis sélectionnez l’hébergement web sur lequel se trouve votre base de données Start SQL de destination. Une fois l’hébergement web sélectionné, cliquez sur la deuxième liste déroulante pour choisir la base de données Start SQL de destination.

Cliquez sur `Suivant`{.action}. Le message de confirmation ci-après s’affiche :

![Message de confirmation copier BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Si vous ne souhaitez pas écraser la base de données de destination choisie, cliquez sur `Précédent`{.action} pour modifier votre choix ou sur `Annuler`{.action} pour tout annuler. Sinon, cliquez sur `Valider`{.action} pour confirmer la duplication du contenu de la base de données source vers la base de données de destination.

Le message de confirmation suivant s’affiche :

![Message de succès BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-copied-successfull.png){.thumbnail}

La copie de la base de données peut prendre plusieurs minutes. Pour vérifier que la copie a bien été prise en compte, dirigez-vous dans l’onglet `Tâches en cours`{.action}. Dans le tableau, une nouvelle ligne correspondant à votre copie apparaît avec un statut « planifié ». Une fois l’opération terminée, la ligne disparaît.

![Tâches en cours](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

#### Choix 2 - Copier vers une base de données présente sur un serveur Web Cloud Databases

Vous venez de sélectionner `Copier vers un Web Cloud Databases`{.action}. Deux listes déroulantes s'affichent. Cliquez sur la première puis sélectionnez l'offre Web Cloud Databases sur laquelle se trouve votre base de données de destination. Une fois l'offre Web Cloud Databases sélectionnée, cliquez sur la deuxième liste déroulante pour choisir la base de données de destination présente sur votre serveur Web Cloud Databases.

Cliquez sur `Suivant`{.action}. Le message de confirmation suivant s’affiche :

![Message de confirmation copier BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Si vous ne souhaitez pas écraser la base de données de destination choisie, cliquez sur `Précédent`{.action} pour modifier votre choix ou sur `Annuler`{.action} pour tout annuler. Sinon, cliquez sur `Valider`{.action} pour confirmer la duplication du contenu de la base de données source vers la base de données de destination.

La copie de la base de données peut prendre plusieurs minutes. Pour vérifier que la copie a bien été prise en compte, dirigez-vous dans l’onglet `Tâches en cours`{.action}. Dans le tableau, une nouvelle ligne correspondant à votre copie apparaît avec un statut « planifié ». Une fois l’opération terminée, la ligne disparaît.

![Tâches en cours](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

### Configurer son site web avec sa nouvelle base de données

Une fois la copie de votre base de données source effectuée, vous devrez réaliser une dernière action si vous souhaitez utiliser votre nouvelle base de données.

Dans l’onglet `Tâches en cours`{.action}, assurez-vous que la copie est bien terminée (la ligne correspondante à votre copie a disparu).

Pour connecter la nouvelle base de données à votre site web, éditez le fichier de configuration de votre **C**ontent **M**anagement **S**ystem (**CMS**) et saisissez les informations de connexion de la nouvelle base de données.

> [!warning]
>
> Il est recommandé de réaliser une copie du fichier de configuration de votre site web avant de le modifier. C'est l'assurance de pouvoir remplacer la nouvelle version du fichier avec l'ancienne en cas d'échec de configuration.

Par exemple, si vous utilisez WordPress, il faudra modifier le fichier de configuration *wp-config.php* présent à la racine du dossier de votre WordPress, sur l'espace de stockage (FTP) de votre hébergement, puis mettre à jour les champs suivants :

- DB_NAME
- DB_USER
- DB_PASSWORD
- DB_HOST

Pour plus de détail, ou si vous utilisez un autre CMS, consultez notre guide [Modifier le mot de passe de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_change_password).

> [!primary]
>
> La copie de votre base de données n’est pas une migration. Votre base de données source existe toujours tant que vous ne la supprimez pas. Vous pourrez ainsi toujours reconfigurer votre site web avec son ancienne base de données si nécessaire.
>

### Cas d'usages

Durant le processus de copie du contenu de la base de données, vous pouvez rencontrer des difficultés.

#### Aucune base de données ne s’affiche dans la liste

Cette notification signifie que vous ne possédez qu’une seule base de données active. Pour copier votre base de données source, il vous faut également une base de données de destination active. Pour cela, vous pouvez:

- Configurer une nouvelle base de données disponible sur votre hébergement web;
- Configurer une nouvelle base de données sur votre serveur [Web Cloud Databases](/links/web/databases);
- Commander une offre « [start SQL](/links/web/hosting-options-startsql) » ou un serveur de bases de données « [Web Cloud Databases](/links/web/databases) »

#### Vous avez déjà une action en cours

Ce message signifie qu’une tâche est déjà en cours sur votre base de données. Dirigez-vous dans l’onglet `Tâches en cours`{.action} et vérifiez que vous avez bien une opération déjà en cours. Si c’est le cas, attendez qu’elle soit terminée pour recommencer la copie de votre base de données si nécessaire.

#### La base de données de destination ne contient pas assez d’espace

Votre base de données de destination ne contient pas assez d’espace. Deux solutions s’offrent à vous :

- Commander une nouvelle base de données [start SQL](/links/web/hosting-options-startsql) avec plus d’espace.
- Si vous possédez un serveur [Web Cloud Databases](/links/web/databases), Changez pour une offre Web Cloud Databases disposant de plus d’espace de stockage.

#### Les bases de données source et destination sont incompatibles

Cette notification signifie que le **S**ystème de **G**estion de **B**ases de **D**onnées (**SGBD**) de votre base de données source n’est pas le même que le SGBD de votre base de données de destination.

Par exemple, cette erreur peut survenir lorsque vous utilisez MySQL pour votre base de données source, et PostgreSQL pour votre base de données de destination.

## Aller plus loin

[Se connecter à l'espace client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Sauvegarder et exporter une base de données sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Restaurer et importer une base de données sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server/)

[Récupérer la sauvegarde de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_database_export)

[Importer une sauvegarde dans la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).