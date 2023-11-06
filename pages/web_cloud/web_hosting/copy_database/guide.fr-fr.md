---
title: "Copier une base de données OVHcloud dans une autre"
excerpt: "Découvrez comment copier une base de données OVHcloud vers une autre"
updated: 2023-11-03
---

## Objectif

Votre base de données correspond au coeur de votre site web. Pour des raisons de sécurité, ou si vous changez d’offre de stockage, il est essentiel de pouvoir copier votre base de données pour la transférer vers une nouvelle.
Découvrez comment copier et transférer une base de données source vers une base de données de destination.

Dans ce guide, nous ne parlons pas de migration. Pour la copie et le transfert, la base de données d’origine existe toujours et n’est pas supprimée, contrairement à la migration.

## Prérequis

-	Disposer d’une offre de stockage Start SQL ou Web Cloud Database
-	Être connecté à l’espace client OVHcloud
-	Disposer des contacts de gestion suffisants sur l’ensemble des services de base de données concernées. Pour plus de détails, suivez le guide [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts).


## En pratique

Avant de commencer, assurez-vous que :
-	Le **S**ystème de **G**estion de **B**ases de **D**onnées (**SGBD** comme MySQL, PostgreSQL etc.) est le même pour votre base de données source et destination.
-	La version du SGBD est la même pour votre base de données source et destination. Même si la copie peut fonctionner avec des versions différentes, il est préférable que les versions du SGBD soient les mêmes.
-	La taille de la base de données source n’est pas plus grande que la taille de la base de données de destination.

### Identifier ma base de données source
Vous pouvez copier et transférer une base de données Start SQL ou une base de données Web Cloud. Selon votre choix, le chemin pour accéder à votre base de données source est différent.

#### Base de données Start SQL
Dans votre [espace client OVHcloud](https://www.ovh.com/manager/), sélectionnez `Web Cloud`{.action} dans le menu en haut de l'interface. Dans le menu de gauche, dirigez-vous dans l’onglet `Hosting Plans`{.action} et cliquez sur l’hébergement de votre choix.

Image

En cliquant sur l’onglet `Database`{.action}, la liste de vos bases de données Start SQL s’affiche.

Image

#### Web Cloud Databases
Dans votre [espace client OVHcloud](https://www.ovh.com/manager/), sélectionnez `Web Cloud`{.action} dans le menu en haut de l'interface. Dans le menu de gauche, dirigez-vous dans l’onglet `Web Cloud Databases`{.action} et sélectionnez la Web Cloud Database de votre choix.

Image

En cliquant sur l’onglet `Database`{.action}, la liste de vos Web Cloud Database s’affiche.

Image

### Copier et transférer une base de données
Cliquez sur les `(...)` à droite de la ligne correspondant à la base de données que vous voulez copier, puis sélectionnez `Copy database`{.action}.

Image

Une fenêtre s’affiche afin d’identifier votre base de données de destination.

Image

Si vous ne possédez pas de base de données de destination, cliquez sur le lien suivant pour acheter une nouvelle base de données :

Image

> [!primary]
>
> Lorsque vous achetez votre nouvelle base de données, celle-ci n’est pas activée par défaut. Pensez à l'activer. Pour ce faire, cliquez sur `Actions`{.action}, `create a database`{.action} puis suivez les étapes. Pour plus de détails, suivez notre guide [Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database).
>

Image

Si vous possédez déjà une base de données de destination, choisissez d'abord son type :
-	Base de données : sélectionnez ce choix si vous voulez copier votre base de données source vers une base de données Start SQL (destination).
-	Base de données Web Cloud : sélectionnez ce choix si vous voulez copier votre base de données source vers une Web Cloud Database (destination).

#### Base de données
Vous venez de sélectionner « Base de données ». Deux listes déroulantes sont affichées. Cliquez sur la première puis sélectionnez l’hébergement sur lequel se trouve votre base de données Start SQL de destination. Une fois l’hébergement sélectionné, cliquez sur la deuxième liste déroulante pour choisir la base de données Start SQL de destination.

Une fois votre choix effectué, cliquez sur `Suivant`{.action}. Le message de confirmation suivant s’affiche :

Image

Si vous ne voulez pas écraser la base de données de destination que vous venez de choisir, cliquez sur `Back`{.action} pour modifier votre choix, ou sur `Cancel`{.action} pour annuler. Sinon, cliquez sur `Confirm`{.action} pour confirmer la copie de la base de données.

S’il n’y a pas d’erreur, le message de confirmation suivant s’affiche :

Image

La copie de la base de données peut prendre plusieurs minutes. Pour être sûr que la copie a bien été prise en compte, dirigez-vous dans l’onglet `Ongoing Tasks`{.action}. Dans le tableau, une nouvelle ligne correspondant à votre copie apparaît avec un statut « planifié ». Une fois l’opération finie, la ligne disparaît.

Image

### Configurer son site web avec sa nouvelle base de données
Une fois la copie de votre base de données source effectuée, il reste une dernière action à effectuer si vous voulez utiliser votre nouvelle base de données. Dans l’onglet `Ongoing Tasks`{.action}, assurez-vous que la copie est bien terminée (vous ne devez plus voir apparaître la ligne correspondant à votre copie). Dirigez-vous dans le fichier de configuration de votre **C**ontent **M**anagement **S**ystem (**CMS**) et configurez-le pour que votre site internet utilise votre nouvelle base de données.
Par exemple, si vous utilisez WordPress, ouvrez le fichier de configuration wp-config.php présent à la racine de votre projet (www/) et mettez à jour les champs suivants :
-	DB_NAME
-	DB_USER
-	DB_PASSWORD
-	DB_HOST

Pour plus de détail, ou si vous utilisez un autre CMS, suivez le guide [Modifier le mot de passe de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_change_password).

> [!primary]
>
> Si votre site internet ne fonctionne plus suite à la modification de votre fichier de configuration, il vous suffit de revenir en arrière pour remettre l’ancienne configuration. La copie de votre base de données n’est pas une migration. Gardez à l’esprit que votre base de données source existe toujours tant que vous ne la supprimez pas. Vous ne faites courir aucun risque à votre site internet si vous commettez une erreur de configuration.
>

### Gérer et résoudre les erreurs
Tout au long du processus de copie de la base de données, des erreurs peuvent survenir.

#### Aucune base de données ne s’affiche pas dans la liste
Cette erreur signifie que vous ne possédez qu’une seule base de données. Pour copier et transférer votre base de données source, il vous faut également une base de données de destination. Vous pouvez :
-	Installer une nouvelle base de données sur votre hébergement web.
-	Installer une nouvelle base de données sur un serveur [Web Cloud Databases](https://www.ovhcloud.com/fr/web-cloud/databases/).


#### Vous avez déjà une action en cours
Cette erreur signifie qu’une tâche est déjà en cours sur votre base de données. Dirigez-vous dans l’onglet `Ongoing Tasks`{.action} et vérifiez que vous avez bien une tâche déjà en cours. Si c’est le cas, attendez qu’elle soit finie pour recommencer la copie de votre base de données.

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

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.