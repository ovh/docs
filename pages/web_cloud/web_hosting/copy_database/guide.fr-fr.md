---
title: "Dupliquer le contenu d'une base de données dans une autre"
excerpt: "Découvrez comment copier le contenu d'une base de données OVHcloud dans une autre base de données OVHcloud"
updated: 2023-11-07
---

## Objectif

Votre base de données correspond au coeur de votre site web. Pour des raisons de sécurité, ou si vous changez d’offre de stockage, il est essentiel de pouvoir copier le contenu de votre base de données vers une autre base de données.

**Découvrez comment copier le contenu d'une base de données OVHcloud vers une autre.**

> [!primary]
>
> Grâce à la fonctionnalité décrite dans ce qui suit, les bases de données ne sont pas migrées mais uniquement copiées. En effet, la base de données d’origine n’est pas supprimée automatiquement, contrairement à un processus de migration.
>

## Prérequis

-	Disposer d’offres de bases de données [start SQL](https://www.ovhcloud.com/fr/web-hosting/options/start-sql/) et/ou [Web Cloud Databases](https://www.ovhcloud.com/fr/web-cloud/databases/)
-	Être connecté à l’[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
-	Disposer des droits suffisants sur l’ensemble des services de base de données concernées. Retrouvez plus d'informations sur notre guide [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts).

## En pratique

Avant de commencer, assurez-vous que :

-	Le **S**ystème de **G**estion de **B**ases de **D**onnées (**SGBD** comme MySQL, PostgreSQL etc.) est le même pour vos deux bases de données (source et destination).
-	La version du SGBD est la même pour vos deux bases de données (source et destination). Même si la copie peut fonctionner avec des versions différentes, il est préférable que les versions du SGBD soient les mêmes.
-	La taille de la base de données source n’est pas plus grande que la taille de la base de données de destination.

### Identifier ma base de données source

Vous pouvez copier le contenu d'une base de données [Start SQL](https://www.ovhcloud.com/fr/web-hosting/options/start-sql/) ou le contenu d'une base de données [Web Cloud Databases](https://www.ovhcloud.com/fr/web-cloud/databases/). Selon votre situation, le chemin pour accéder à votre base de données source est différent.

#### Base de données Start SQL

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), sélectionnez `Web Cloud`{.action} dans le menu en haut de l'interface. Dans la colonne de gauche, dirigez-vous dans l’onglet `Hébergements`{.action}, puis cliquez sur l’hébergement web où se trouve la base de donnée source à copier.

Image

En cliquant sur l’onglet `Bases de données`{.action}, la liste de vos bases de données Start SQL s’affiche.

Image

#### Web Cloud Databases

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), sélectionnez `Web Cloud`{.action} dans le menu en haut de l'interface. Dans la colonne de gauche, dirigez-vous dans l’onglet `Web Cloud Databases`{.action}, puis sélectionnez le serveur Web Cloud Database où se trouve votre base de données source à copier.

Image

En cliquant sur l’onglet `Bases de données`{.action}, la liste de vos Web Cloud Database s’affiche.

Image

### Copier le contenu d'une base de données

Cliquez sur le bouton `...`{.action} à droite de la ligne correspondant à la base de données que vous souhaitez copier, puis sélectionnez `Copier la base de données`{.action}.

Image

Une fenêtre s’affiche afin d’identifier votre base de données de destination.

Image

Si vous ne possédez pas de base de données de destination, cliquez sur le lien suivant pour acheter une nouvelle base de données :

Image

> [!primary]
>
> Lorsque vous achetez votre nouvelle base de données, celle-ci n’est pas activée par défaut. N'oubliez pas de l'activer. Pour cela, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), puis rendez-vous dans la partie `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} dans la colonne de gauche, puis sélectionnez l'hébergement web concerné par l'ajout d'une base de données supplémentaire. Sur la page qui s'affiche, cliquez sur l'onglet `Bases de données`{.action}. Appuyez sur le bouton `Actions`{.action} pour commander une base de données supplémentaire, puis sur `Créer une base de données`{.action}. Suivez les étapes jusqu'à la finalisation de la commande de la base de données. Pour plus de détails, suivez notre guide [Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database).
>

Image

Si vous possédez déjà une base de données de destination, choisissez d'abord son type :
-	`Copier vers une base de données`{.action} : sélectionnez ce choix si vous voulez copier la contenu de votre base de données source vers une base de données Start SQL (destination).
-	`Copier vers un Web Cloud Databases`{.action} : sélectionnez ce choix si vous voulez copier le contenu de votre base de données source vers une base de données Web Cloud Database (destination).

#### Choix 1 - Copier vers une base de données

Vous venez de sélectionner `Copier vers une base de données`{.action}. Deux listes déroulantes sont affichées. Cliquez sur la première puis sélectionnez l’hébergement web sur lequel se trouve votre base de données Start SQL de destination. Une fois l’hébergement web sélectionné, cliquez sur la deuxième liste déroulante pour choisir la base de données Start SQL de destination.

Une fois votre choix effectué, cliquez sur `Suivant`{.action}. Le message de confirmation suivant s’affiche :

Image

Si vous ne voulez pas écraser la base de données de destination choisie, cliquez sur `Précédent`{.action} pour modifier votre choix ou sur `Annuler`{.action} pour annuler. Sinon, cliquez sur `Valider`{.action} pour confirmer la copie de la base de données.

S’il n’y a pas d’erreur, le message de confirmation suivant s’affiche :

Image

La copie de la base de données peut prendre plusieurs minutes. Pour être sûr que la copie a bien été prise en compte, dirigez-vous dans l’onglet `Tâches en cours`{.action}. Dans le tableau, une nouvelle ligne correspondant à votre copie apparaît avec un statut « planifié ». Une fois l’opération finie, la ligne disparaît.

Image

#### Choix 2 - Copier vers un Web Cloud Databases

Vous venez de sélectionner `Copier vers un Web Cloud Databases`{.action}. Deux listes déroulantes sont affichées. Cliquez sur la première puis sélectionnez l'offre Web Cloud Database sur laquelle se trouve votre base de données de destination. Une fois l'offre Web Cloud Database sélectionnée, cliquez sur la deuxième liste déroulante pour choisir la base de données de destination présente sur votre serveur Web Cloud Databases.

Une fois votre choix effectué, cliquez sur `Suivant`{.action}. Le message de confirmation suivant s’affiche :

Image

La copie de la base de données peut prendre plusieurs minutes. Pour être sûr que la copie a bien été prise en compte, dirigez-vous dans l’onglet `Tâches en cours`{.action}. Dans le tableau, une nouvelle ligne correspondant à votre copie apparaît avec un statut « planifié ». Une fois l’opération finie, la ligne disparaît.

Image

### Configurer son site web avec sa nouvelle base de données


Une fois la copie de votre base de données source effectuée, il reste une dernière action à effectuer si vous voulez utiliser votre nouvelle base de données. Dans l’onglet `Ongoing Tasks`{.action}, assurez-vous que la copie est bien terminée (vous ne devez plus voir apparaître la ligne correspondant à votre copie). Dirigez-vous dans le fichier de configuration de votre **C**ontent **M**anagement **S**ystem (**CMS**) et configurez-le pour que votre site web utilise votre nouvelle base de données.
Par exemple, si vous utilisez WordPress, ouvrez le fichier de configuration *wp-config.php* présent à la racine FTP de votre site web puis mettez à jour les champs suivants :

-	DB_NAME
-	DB_USER
-	DB_PASSWORD
-	DB_HOST

Pour plus de détail, ou si vous utilisez un autre CMS, suivez le guide [Modifier le mot de passe de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_change_password).

> [!primary]
>
> Si votre site web ne fonctionne plus suite à la modification de votre fichier de configuration, il vous suffit de revenir en arrière pour remettre l’ancienne configuration. La copie de votre base de données n’est pas une migration. Gardez à l’esprit que votre base de données source existe toujours tant que vous ne la supprimez pas. Vous pourrez ainsi toujours reconfigurer votre site web avec son ancienne base de données.
>

### Gérer et résoudre les erreurs

Tout au long du processus de copie du contenu de la base de données, des erreurs peuvent survenir.

#### Aucune base de données ne s’affiche dans la liste

Cette erreur signifie que vous ne possédez qu’une seule base de données. Pour copier votre base de données source, il vous faut également une base de données de destination. Vous pouvez :

-	Installer une nouvelle base de données sur votre hébergement web.
-	Installer une nouvelle base de données sur un serveur [Web Cloud Databases](https://www.ovhcloud.com/fr/web-cloud/databases/).

#### Vous avez déjà une action en cours

Cette erreur signifie qu’une tâche est déjà en cours sur votre base de données. Dirigez-vous dans l’onglet `Tâches en cours`{.action} et vérifiez que vous avez bien une tâche déjà en cours. Si c’est le cas, attendez qu’elle soit finie pour recommencer la copie de votre base de données.

#### Une erreur est survenue pendant la copie de la base de données


#### La base de données de destination ne contient pas assez d’espace

Votre base de données de destination ne contient pas assez d’espace. Deux solutions s’offrent à vous :

-	Achetez une nouvelle base de données StartSQL avec plus d’espace.
-	Si vous possédez un serveur [Web Cloud Databases](https://www.ovhcloud.com/fr/web-cloud/databases/), mettez-le à jour pour allouer plus d’espace disque à votre base de données.

#### Les bases de données source et destination sont incompatibles

Cette erreur signifie que le **S**ystème de **G**estion de **B**ases de **D**onnées (**SGBD**) de votre base de données source n’est pas le même que le SGBD de votre base de données de destination. Par exemple, cette erreur arrive lorsque vous utilisez MySQL pour votre base de données source, et PostgreSQL pour votre base de données de destination.

## Aller plus loin

[Se connecter à l'espace client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Sauvegarder et exporter une base de données sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Restaurer et importer une base de données sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server/)

[Récupérer la sauvegarde de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_database_export)

[Importer une sauvegarde dans la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.