---
title: "Hébergement web : ma base de données est saturée, que faire ?"
excerpt: "Découvrez comment agir lorsque votre base de données est saturée"
updated: 2023-12-13
---

## Objectif

Une base de données permet, par exemple, de stocker des informations relatives à votre site web et à son fonctionnement. Ces informations sont structurées pour que votre site web y accède facilement, ce qui permet une consultation optimale et personnalisée pour les utilisateurs/visiteurs de votre site web. 

Au cours de son utilisation, une base de données peut acquérir, modifier ou supprimer des informations (données de connexion, données utilisateurs, données d'affichage, données nécessaires au bon fonctionnement de votre site web, etc.). 

Dans certains cas, la base de données enregistre une telle quantité d'informations que cela entraîne une saturation de l'espace de stockage qui lui est alloué. Lorsque la base de données est saturée, on parle d'**overquota**.

Ce tutoriel vous propose des actions à entreprendre lorsque votre base de données mutualisée OVHcloud est proche de la saturation ou est déjà en **overquota**.

**Découvrez comment agir lorsque votre base de données est saturée.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Disposer d'une [offre d'hébergement web OVHcloud](/links/web/hosting) avec une base de données mutualisée OVHcloud associée.
  
## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

Lorsque votre base de données mutualisée OVHcloud arrive à saturation (**overquota**), nos robots vous avertissent par e-mail sur l'adresse e-mail du [contact « Administrateur »](/pages/account_and_service_management/account_information/managing_contacts) de la base de données. 

Un premier e-mail est envoyé lorsque votre base de données a consommé plus de **80%** de sa capacité de stockage. Un deuxième e-mail est envoyé lorsque **90%** de cette capacité de stockage sont atteints.

Lorsque votre base de données est en **overquota**, un troisième e-mail d'avertissement vous est envoyé. Votre base de données bascule alors en « *READ ONLY* » (lecture seule). Vous ne pouvez plus ajouter ou modifier les entrées de votre base de données mais elle reste accessible en **lecture** et en **suppression**. 

### Etape 1 : identifier la ou les table(s) volumineuse(s)

Une base de données est constituée d'une ou plusieurs **tables**, elles-mêmes constituées d'une ou plusieurs **lignes** organisées à l'aide de **colonnes** prédéterminées.

La première étape consiste à identifier la ou les tables volumineuses présentes dans votre base de données.

> [!primary]
>
> Toutes les actions suivantes décrites dans ce tutoriel seront réalisées à partir de **phpMyAdmin**.
>
> [phpMyAdmin](https://www.phpmyadmin.net/){.external} est disponible sur l'ensemble des bases de données mutualisées OVHcloud.
> Cette application de gestion de base de données facilite la réalisation des actions manuelles que vous pouvez effectuer avec votre base de données.
>

#### 1.1 - Se connecter à la base de données via phpMyAdmin

Récupérez les informations d'accès à votre base de données directement dans le fichier de configuration de votre site web. Réalisez cette action à l'aide de l'**étape 1** de notre guide sur [le changement du mot de passe d'une base de données](/pages/web_cloud/web_hosting/sql_change_password).

Connectez-vous à votre [espace client OVHcloud](/links/manager) et sélectionnez `Web Cloud`{.action} dans la barre de navigation en haut de l’écran. Cliquez sur `Hébergements`{.action} puis choisissez l’hébergement web associé à votre base de données mutualisée OVHcloud. Positionnez-vous enfin sur l'onglet `Bases de données`{.action}.

Un tableau listant vos bases de données s'affiche sur la partie basse de l'écran.

![phpMyAdmin Access](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/go-to-phpmyadmin.png){.thumbnail}

Notez, **pour votre base de données saturée**, son `Nom d'utilisateur` et son `Adresse du serveur` présents dans le tableau listant vos bases de données. 

Toujours depuis l'onglet `Bases de données`{.action}, cliquez sur le bouton `...`{.action} à droite de la base de données qui est saturée puis sur `Accéder à phpMyAdmin`{.action}.

![phpMyAdmin Go Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-interface-login.png){.thumbnail}

Renseignez les informations d'accès à votre base de données puis cliquez sur `Connexion`{.action}.

#### 1.2 - Rechercher les tables les plus volumineuses

> [!alert]
>
> Désormais, vous intervenez directement sur le contenu de votre base de données. Les manipulations que vous réalisez dans phpMyAdmin peuvent avoir des conséquences irréversibles si celles-ci ne sont pas réalisées correctement.
>
> Assurez-vous des manipulations que vous effectuez. Si vous éprouvez la moindre difficulté, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner). En effet, OVHcloud ne pourra pas vous fournir une assistance sur le contenu de votre base de données.
>

Une fois connecté, la page suivante s'affiche :

![phpMyAdmin Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-2.png){.thumbnail}

Cliquez sur le `« Nom de votre base de données »`{.action} dans la colonne de gauche puis sur `Taille`{.action} en haut à droite du tableau qui s'affiche :

![phpMyAdmin Tables](/pages/assets/screens/other/web-tools/phpmyadmin/pma-check-size.png){.thumbnail}

Les tables les plus volumineuses apparaissent en haut du tableau. Identifiez celles-ci puis passez à l'**étape 2**.

### Etape 2 : déterminer l'utilité du contenu présent dans la ou les table(s) volumineuse(s)

Une fois les tables volumineuses identifiées, déterminez si l'intégralité de leur contenu est nécessaire au fonctionnement de votre site.

> [!primary]
>
> Si vous utilisez un Content Managment System (CMS) tel que WordPress, Joomla!, PrestaShop ou Drupal, vérifiez que vos tables volumineuses ne sont pas liées à un plugin/thème récemment installé ou mis à jour.
>
> Dans ce cas, contactez l'éditeur du plugin/thème pour qu'il vous communique les actions à mener sur votre CMS.
>
 
Pour les autres cas liés aux CMS, nous vous recommandons de contacter directement l'éditeur de votre CMS avant de réaliser les actions qui suivent.

Retrouvez ci-dessous les liens vers les sites officiels des CMS proposés en installation « **En un clic** » par OVHcloud :

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://www.joomla.org){.external}
- [PrestaShop](https://www.prestashop.com/){.external}
- [Drupal](https://drupal.org){.external}

> [!primary]
>
> Si votre site a été développé « **manuellement** » par un prestataire spécialisé, nous vous recommandons de contacter ce dernier afin qu'il vous accompagne.
>

### Etape 3 : mener une action corrective

Une fois que vous avez déterminé si le contenu de vos tables est nécessaire ou non au fonctionnement de votre site, plusieurs options s'offrent à vous :

#### Cas n°1 - L'ensemble du contenu de la table volumineuse est nécessaire au bon fonctionnement de votre site

Vous devrez basculer votre base de données sur une base de données plus volumineuse.

> [!primary]
>
> Pour augmenter la taille allouée à votre base de données, vous devrez obligatoirement créer une nouvelle base de données plus grande et copier le contenu de l'ancienne dans la nouvelle. En effet, il n'est pas possible d'augmenter directement la taille d'une base de données liée à un hébergement web.
>

Consultez notre offre de bases de données [Web Cloud Databasess](/links/web/databases) pour choisir votre nouveau service de base de données. 

Nous recommandons cette offre pour les bases de données volumineuses.

Il est possible de dupliquer le contenu de votre base de données OVHcloud directement vers une autre de vos bases de données OVHcloud grâce à une fonctionnalité présente dans votre [espace client OVHcloud](/links/manager). Pour cela, consultez notre guide « [Dupliquer le contenu d'une base de données dans une autre](/pages/web_cloud/web_hosting/copy_database) ».

Dans le cas d'une migration vers une base de données externe aux offres [Start SQL](/links/web/hosting-options-startsql) et [Web Cloud Databases](/links/web/databases), vous pouvez déplacer manuellement le contenu de votre ancienne base de données vers une nouvelle à l'aide de nos guides:

- [Exporter votre base de données existante](/pages/web_cloud/web_hosting/sql_database_export)
- [Premiers pas avec l'offre Web Cloud Databasess](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)
- [Importer votre ancienne base de données dans votre offre Web Cloud Databasess](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

#### Cas n°2 - Une partie ou l'ensemble du contenu de la table volumineuse n'est pas nécessaire au fonctionnement de votre site

Avant d'effectuer ce qui suit, vérifiez si les données contenues dans la table volumineuse correspondent à des éléments qui peuvent être supprimés depuis l'espace d'administration de votre CMS. 

**Exemples** :

- anciens commentaires/posts ;
- éléments présents dans le menu `Corbeille` de votre CMS ;
- données liées à un ancien thème et/ou plugin.

> [!alert]
>
> La suite de ce guide vous décrit comment supprimer des données présentes dans votre base de données. Assurez-vous de ce que vous faites ou contactez un [prestataire spécialisé](/links/partner) en cas de doute.
>

Les bases de données mutualisées OVHcloud disposent de plusieurs commandes SQL pour agir sur leur contenu.

Dans le cas d'un overquota ou d'une table volumineuse, **trois commandes** sont disponibles.

Vous pouvez directement effectuer ces requêtes depuis l'interface **phpMyAdmin**, via l'onglet `SQL`{.action} :

![phpMyAdmin SQL request](/pages/assets/screens/other/web-tools/phpmyadmin/pma-sql-menu.png){.thumbnail}

- La commande **DELETE** : 

Elle permet de supprimer **une ou plusieurs lignes** d'une table donnée. Cette commande est utile si une partie du contenu de la table est nécessaire au bon fonctionnement de votre site web.

**Exemple** :

```sql
DELETE FROM `table_1` WHERE `id` = 1
```

> Dans cet exemple, la commande supprime la ou les ligne(s) de la **table_1** dont la valeur de la colonne **id** est égale à **1**.

- La commande **TRUNCATE** : 

Elle permet de supprimer **toutes les lignes** d'une table donnée.

**Exemple** :

```sql
TRUNCATE TABLE `table_1`
```

> Dans cet exemple, la commande supprime l'ensemble des lignes de la **table_1** sans exception.

- La commande **DROP** : 

Elle permet de supprimer complètement **une table et l'ensemble des lignes qu'elle contient**. Cette commande n'est pas à utiliser si la table doit continuer d'exister.

**Exemple** :

```sql
DROP TABLE `table_1`
```

> Dans cet exemple, la commande supprime la table **table_1** et l'ensemble des lignes qu'elle contient.

## Aller plus loin <a name="go-further"></a>

[Dupliquer le contenu d'une base de données dans une autre](/pages/web_cloud/web_hosting/copy_database)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).