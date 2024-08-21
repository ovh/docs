---
title: "Récupérer la sauvegarde de la base de données d'un hébergement web"
excerpt: "Découvrez comment récupérer la sauvegarde d'une base de données de votre hébergement web OVHcloud"
updated: 2023-08-22
---

## Objectif

Les bases de données sont utilisées par la plupart des sites web et des **C**ontent **M**anagement **S**ystem (**CMS**) tels que *WordPress*, *Joomla!*, *PrestaShop* ou *Drupal*. Elles permettent généralement de stocker des éléments dynamiques comme, par exemple, des commentaires, des utilisateurs / mots de passe, l'état des stocks si vous disposez d'un site e-commerce ou encore des articles. Pour diverses raisons, vous serez amené à réaliser une sauvegarde de votre base de données afin d'en récupérer le contenu.

**Découvrez comment récupérer la sauvegarde d'une base de données de votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d’[hébergement web OVHcloud](/links/web/hosting){.external}.
- Disposer d'une base de données créée dans le cadre d'une offre d'[hébergement web OVHcloud](/links/web/hosting){.external}.
- Selon la méthode de sauvegarde utilisée, disposer d'un accès à la gestion de l'offre d'hébergement web depuis l'[espace client OVHcloud](/links/manager){.external} ou des informations permettant de se connecter à la base de données.

## En pratique

Avant de commencer, définissez la méthode que vous allez suivre pour récupérer la sauvegarde de votre base de données. Plusieurs possibilités s’offrent à vous :

- **Utiliser l'outil de sauvegarde d'OVHcloud** : cette solution permet de récupérer des sauvegardes de vos bases de données depuis l'[espace client OVHcloud](/links/manager){.external}. Cette méthode ne nécessite pas de compétences techniques particulières.

- **Réaliser la sauvegarde depuis l'interface web phpMyAdmin** : cette méthode nécessite de se connecter à l'interface *phpMyAdmin* pour effectuer la manipulation. Cela nécessite de maîtriser l'interface *phpMyAdmin*.

- **Utiliser un script réalisant la sauvegarde** : cette méthode nécessite de créer un script enregistré sur votre hébergement web OVHcloud afin de pouvoir réaliser la sauvegarde. Des connaissances spécifiques pour cette création sont nécessaires.

- **Réaliser la sauvegarde depuis une commande SSH** : cette méthode nécessite de vous connecter à votre espace de stockage FTP via le protocole SSH, puis d'utiliser des commandes pour interagir avec celui-ci. Des connaissances plus avancées, ainsi qu’une offre d’[hébergement web OVHcloud](/links/web/hosting){.external} spécifique sont nécessaires pour utiliser ce type d’accès.

> [!success]
>
> Si vous réalisez une sauvegarde de votre base de données car celle-ci est saturée / pleine, n'hésitez pas à consulter notre tutoriel « [Que faire lorsque ma base de données est saturée ?](/pages/web_cloud/web_hosting/sql_overquota_database) ».
>

Certaines des méthodes ci-dessus ne sont pas inhérentes à une interface OVHcloud. Vous devrez donc, pour ces dernières, réaliser la manipulation selon vos propres connaissances. Quelques informations sont présentes ci-dessous, mais elles ne peuvent se substituer à l’assistance fournie par un webmaster si vous éprouvez des difficultées à les réaliser seul. 

Poursuivez la lecture de cette documentation selon la méthode de sauvegarde souhaitée.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d’en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d’informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

### Récupérer une sauvegarde via l'outil d'OVHcloud

Pour accéder à l'outil de sauvegarde d'OVHcloud, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action} puis choisissez le nom de l'hébergement concerné. Positionnez-vous enfin sur l'onglet `Bases de données`{.action}.

Le tableau qui s'affiche contient toutes les bases de données créées dans le cadre de votre offre d'hébergement web. Dès lors, vous pourrez choisir entre réaliser une nouvelle sauvegarde ou en récupérer une déjà existante, via deux manipulations distinctes.

#### Étape 1 : effectuer une nouvelle sauvegarde de la base de données

Toujours depuis l'onglet `Bases de données`{.action}, cliquez sur le bouton `...`{.action} à droite de la base de données à sauvegarder, puis sur `Créer une sauvegarde`{.action}.

![databasedump](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-backup.png){.thumbnail}

Sur la fenêtre qui apparaît, sélectionnez la date souhaitée pour la sauvegarde, puis cliquez sur le bouton `Suivant`{.action}. Assurez-vous que les informations dans le récapitulatif sont correctes, puis cliquez sur `Valider`{.action} pour initier la manipulation.

Patientez le temps que la sauvegarde se réalise. Dès que celle-ci est disponible, vous pourrez la récupérer.

![databasedump](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-backup-step-1.png){.thumbnail}

#### Étape 2 : récupérer une sauvegarde de la base de données

Toujours depuis l'onglet `Bases de données`{.action}, cliquez sur le bouton `...`{.action} à droite de la base de données à sauvegarder, puis sur `Restaurer une sauvegarde`{.action}.

![databasedump](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/restore-backup.png){.thumbnail}

Le tableau qui s'affiche contient toutes les sauvegardes disponibles de la base de données sélectionnée. Vous pourrez y visionner la date précise à laquelle les sauvegardes ont été réalisées ainsi que celle à laquelle ces dernières seront supprimées de l'outil d'OVHcloud.

Pour télécharger une sauvegarde, cliquez sur le bouton `...`{.action} à droite de celle que vous souhaitez récupérer, puis sur `Télécharger la sauvegarde`{.action}. Une fenêtre vous invitant à l'enregistrer sur votre machine apparaît. Acceptez, puis patienter le temps que la sauvegarde soit téléchargée.

![databasedump](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/download-the-backup.png){.thumbnail}

### Récupérer une sauvegarde depuis l'interface web phpMyAdmin

Pour réaliser la manipulation, connectez-vous à *phpMyAdmin*. Pour connaître le lien d'accès à ce dernier, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action}, puis choisissez le nom de l'hébergement concerné. Positionnez-vous enfin sur l'onglet `Bases de données`{.action}.

Le tableau qui s'affiche contient toutes les bases de données créées dans le cadre de votre offre d'hébergement web. Cliquez dans ce dernier sur le bouton `...`{.action} à droite de la base de données concernée puis sur `Accéder à phpMyAdmin`{.action}.

![databasedump](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/go-to-phpmyadmin.png){.thumbnail}

Une fois sur l'interface de connexion à *phpMyAdmin*, renseignez les informations de la base de données, puis connectez-vous. Une fois connecté, rendez-vous à présent sur l'onglet `Exporter`{.action} où deux méthodes d'exportation sont proposées :

- **méthode rapide** : vous pouvez définir le format d'export de la sauvegarde. Le plus courant est le format SQL, mais d'autres sont proposés selon vos besoins ;

- **méthode personnalisée** : vous pouvez définir en détail les paramètres d'exportation de la sauvegarde.

> [!warning]
>
> L'interface *phpMyAdmin* n'ayant pas été créée par OVHcloud, vous devrez réaliser la manipulation selon vos propres connaissances. Nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de vous rapprocher du site l’éditeur de l'interface si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance à ce propos.
>

### Récupérer une sauvegarde en utilisant un script

La manipulation s'effectue en plusieurs étapes. Assurez-vous d'être en possession des informations permettant de vous connecter à la base de données pour laquelle vous souhaitez réaliser une sauvegarde : le nom d’utilisateur, son mot de passe, le nom de la base de données ainsi que l’adresse du serveur.

> [!warning]
>
> Cette solution requiert des compétences en programmation. Quelques informations sur la manière de procéder sont présentes ci-dessous. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance à ce propos.
>

#### Étape 1 : créer le script de sauvegarde

La première étape consiste à créer le script qui permettra de réaliser la sauvegarde de la base de données. Vous trouverez ci-dessous un exemple de script pouvant vous aider dans votre démarche. Néanmoins, si vous éprouvez des difficultés, cet exemple ne peut se substituer à lui seul à l'assistance que pourrait vous fournir un webmaster.

```php
<?
system("mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql");
?>
```

Prenez soin de remplacer les informations génériques dans ce script par les informations de la base de données concernée en vous aidant des éléments ci-dessous. Une fois le script terminé, nous vous conseillons de le nommer « sauvegarde.php » par exemple.

|Informations|À remplacer par|
|---|---|
|server_address|L'adresse du serveur de la base de données concernée.|
|user_name|Le nom d'utilisateur disposant d'un accès à la base de données.|
|user_password|Le mot de passe du nom d'utilisateur indiqué précédemment.|
|name_of_database|Le nom de la base de données concernée.|
|backup_file_name|Le nom que portera le fichier de sauvegarde une fois cette dernière exécutée.|

#### Étape 2 : télécharger le script sur l'espace de stockage FTP

Une fois le script de sauvegarde correctement créé, vous devez le télécharger sur l'espace de stockage FTP de votre hébergement web. Pour cela, reportez-vous aux informations décrites dans l'étape 2 de la documentation intitulée « [Se connecter à l’espace de stockage](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online#2-se-connecter-a-lespace-de-stockage) ».

Pour mener à bien les étapes suivantes, téléchargez le script dans le dossier contenant le site web qui utilise la base de données. **Soyez particulièrement attentif quant au nom du fichier du script de sauvegarde.** N'écrasez pas un fichier déjà existant portant le même nom sur l'espace de stockage FTP lorsque vous allez télécharger le script. Si un message d'avertissement de ce type apparaît, modifiez le nom du script nouvellement créé pour puis tentez à nouveau de le télécharger.

#### Étape 3 : appeler le script

Dès que le script est téléchargé sur l'espace de stockage FTP, initiez le code présent dans celui-ci en appelant le script.

Pour effectuer cette manipulation, accédez depuis votre navigateur internet à l'adresse URL complète du script (par exemple : mypersonaldomain.ovh/sauvegarde.php si vous avez nommé votre script « sauvegarde.php »). Si les informations renseignées dans le script sont correctes, la sauvegarde s'initie. Patientez quelques instants le temps qu'elle s'exécute. Si ce n'est pas le cas, vérifiez les informations renseignées dans le script puis tentez de nouveau la manipulation.

#### Étape 4 : récupérer la sauvegarde depuis l'espace de stockage FTP

Une fois la sauvegarde réalisée, récupérez-la dans le dossier où le script de sauvegarde a été téléchargé. La sauvegarde de la base de données doit porter le nom qui a été défini précédemment dans le script. Il ne vous reste plus qu'à récupérer la sauvegarde sur votre propre appareil.

Avant de terminer, nous vous conseillons vivement de supprimer le fichier de sauvegarde ainsi que le script du répertoire où ils se trouvent.

> [!primary]
>
> L'utilisation d'un script de sauvegarde avec notre système de tâches planifiées (tâches « CRON ») peut vous permettre d'automatiser des sauvegardes à la fréquence de votre choix. Apprenez-en plus sur les tâches planifiées via notre documentation : « [Mettre en place une tâche planifiée (CRON) sur son hébergement web](/pages/web_cloud/web_hosting/cron_tasks) ».
>

### Récupérer une sauvegarde via une commande SSH

Pour réaliser la manipulation, vous devrez utiliser des commandes depuis un terminal pour interagir avec votre espace de stockage FTP.

> [!warning]
>
> Des connaissances plus avancées sont nécessaires pour utiliser ce type d’accès. Quelques informations sur comment procéder sont présentes ci-dessous, cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance à ce propos.
>

Une fois connecté à votre espace de stockage FTP via une connexion en SSH, utilisez une commande permettant de réaliser la sauvegarde de la base de données. Vous en trouverez une ci-dessous pouvant vous aider dans votre démarche. Prenez en compte que la sauvegarde sera réalisée dans le répertoire actif au moment où vous enverrez la commande dans votre terminal.

```sh
mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql
```

Remplacez les informations génériques de cette commande par les informations de la base de données concernée. Une fois la sauvegarde réalisée, il ne vous reste plus qu'à la récupérer sur votre propre machine.

|Informations|À remplacer par|
|---|---|
|server_address|L'adresse du serveur de la base de données concernée.|
|user_name|Le nom d'utilisateur disposant d'un accès à la base de données.|
|user_password|Le mot de passe du nom d'utilisateur indiqué précédemment.|
|name_of_database|Le nom de la base de données concernée.|
|backup_file_name|Le nom que portera le fichier de sauvegarde une fois cette dernière exécutée.|

## Aller plus loin <a name="go-further"></a>

[Tutoriel - Que faire lorsque ma base de données est saturée ?](/pages/web_cloud/web_hosting/sql_overquota_database)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).