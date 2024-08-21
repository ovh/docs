---
title: Modifier le mot de passe de la base de données d'un hébergement web
excerpt: Découvrez comment changer le mot de passe d'une base de données créée dans le cadre d'une offre d'hébergement web
updated: 2022-01-26
---

## Objectif

La majeure partie des sites Web utilisent une **base de données** pour y stocker leurs articles, les commentaires ou encore les adresses e-mail de leurs utilisateurs.

La connexion à cette base de données est rendue possible par un **fichier de configuration** contenu dans [l'espace de stockage de fichiers](/pages/web_cloud/web_hosting/ftp_connection) de votre hébergement. Il contient les informations permettant à votre site de « s'identifier » auprès de son **serveur de base de données**.

Le changement de mot de passe d'une base de données doit donc toujours être effectué :

- Dans le [fichier de configuration](/pages/web_cloud/web_hosting/cms_manage_1_click_module#etape-1-identifier-la-base-de-donnees-lie-a-votre-module) de votre site via [l'espace FTP de votre hébergement](/pages/web_cloud/web_hosting/ftp_connection);

- **Et** dans le serveur contenant sa base de données via votre [espace client OVHcloud](/links/manager).

Tant que ce changement n'aura pas été effectué **dans ces deux endroits**, votre site affichera une « [erreur de connexion à la base de données](/pages/web_cloud/web_hosting/diagnosis_database_errors#erreur-lors-de-la-connexion-a-la-base-de-donnees) ».

Il est donc impératif, si vous souhaitez changer le mot de passe de votre base de données, que vous réalisiez **l'ensemble des opérations** indiquées dans ce guide. En cas de doutes sur les manipulations à réaliser, contactez votre webmaster ou faites appel à un [prestataire spécialisé](/links/partner).

La modification du mot de passe de la base de données de votre site se fait en quatre étapes :

- [Étape 1 : identifier le fichier de configuration de votre site](#step1);
- [Étape 2 : identifier la base de données de votre site](#step2);
- [Étape 3 : modifier le mot de passe de la base de données de votre site dans son fichier de configuration](#step3);
- [Étape 4 : modifier le mot de passe de la base de données de votre site sur le serveur de bases de données](#step4).

**Découvrez comment changer le mot de passe d'une base de données de façon sécurisée.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web OVHcloud](/links/web/hosting).
- Être connecté à votre [espace client OVHcloud](/links/manager).
- Utiliser une [base de données associée à votre offre d'hébergement mutualisé](/links/web/hosting-options-startsql) ou à un [serveur Web Cloud Databases](/links/web/databases).
- Être en possession des identifiants FTP permettant de se connecter à l'[espace de stockage](/pages/web_cloud/web_hosting/ftp_connection) de votre hébergement.

## En pratique

### Étape 1 : identifier le fichier de configuration de votre site <a name="step1"></a>

Dans votre [espace client OVHcloud](/links/manager), cliquez sur `Web Cloud`{.action} puis, sur `Hébergements`{.action} et enfin sur l'hébergement concerné. Rendez-vous ensuite dans l'onglet `Multisite`{.action}. Identifiez le nom du `Dossier racine` de votre site (le répertoire dans lequel se trouvent ses fichiers et dossiers).

![root-folders](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

Cliquez ensuite sur l'onglet `FTP - SSH`{.action} puis accédez à l'espace contenant les fichiers et dossiers de votre site (*espace FTP*) en cliquant sur le bouton `FTP Explorer`{.action}.

> [!primary]
>
> Si vous souhaitez modifier le mot de passe de votre espace FTP, consultez ce [guide](/pages/web_cloud/web_hosting/ftp_change_password).
>
> Si vous souhaitez vous y connecter par une autre méthode, consultez ce [guide](/pages/web_cloud/web_hosting/ftp_connection).
>

Ouvrez le `Dossier racine` identifié plus haut.

Recherchez et ouvrez le fichier de configuration de votre site :

- Pour un site WORDPRESS, il s'agit de **« wp-config.php »**;
- Pour un site JOOMLA, il s'agit de **« configuration.php »**;
- Pour un site DRUPAL, cliquez sur le dossier **« sites »** puis **« default »**. Le fichier de configuration est **« settings.php »**;
- Pour un site PRESTASHOP, cliquez sur le dossier **« app »** puis **« config »**. Le fichier de configuration est **« parameters.php »**.

### Étape 2 : identifier la base de données de votre site <a name="step2"></a>

Deux cas sont possibles :

- Cas n°1 : la base de données de votre site fait partie de votre offre d'hébergement;
- Cas n°2 : elle est incluse dans une offre *Web Cloud Databases*, auquel cas vous devrez retrouver le **nom du serveur** et le **nom d'utilisateur** de votre base de données, afin d'identifier cette dernière sans risque d'erreur.

Afin de déterminer quel cas s'applique à votre site, dans le fichier de configuration identifié à [l'étape 1](#step1), commencez par noter le nom de sa base de données :

- Pour WORDPRESS : le nom apparaît sous la mention **« DB_NAME »**;
- Pour JOOMLA : le nom apparaît sous **« public $db »**;
- Pour DRUPAL : le nom apparaît sous **« database »**;
- Pour PRESTASHOP : le nom apparaît sous **« database_name »**.

Retournez ensuite dans votre [espace client OVHcloud](/links/manager) toujours dans la partie `Web Cloud`{.action} :

- Rendez-vous dans la partie `Hébergements`{.action} puis dans l'hébergement concerné;
- Cliquez sur l'onglet `Bases de données`{.action} **à droite** de votre écran;
- Recherchez le nom de la base de données trouvé précédemment dans la colonne `Nom de la base`;

Si vous avez retrouvé dans cette partie de votre espace client le nom de la base indiqué dans le fichier de configuration, passez à [l'étape 3](#step3).

Dans le cas contraire, la base de données de votre site est liée à une offre [Web Cloud Databases](/links/web/databases).

Vous devez donc retourner dans le fichier de configuration de votre site, afin de noter le *nom du serveur* ainsi que le *nom d'utilisateur* de votre base de données :

- Pour WORDPRESS : le *nom du serveur* apparaît sous la mention **« DB_HOST »** et le *nom d'utilisateur* sous la mention **« DB_USER »**;
- Pour JOOMLA : le *nom du serveur* apparaît sous **« public $host »** et le *nom d'utilisateur* sous la mention **« public $user »**;
- Pour DRUPAL : le *nom du serveur* apparaît sous **« host »** et le *nom d'utilisateur* sous la mention **« username »**;
- Pour PRESTASHOP : le *nom du serveur* apparaît sous **« database_host »** et le *nom d'utilisateur* sous la mention **« database_user »**.

Cliquez ensuite, dans la partie `Bases de données`{.action} dans la section `Web Cloud`{.action}.

Dans l'onglet `Informations générales`{.action}, identifiez, dans votre offre [Web Cloud Databases](/links/web/databases), celle qui contient, sous la mention `Nom d'hôte`{.action}, le nom du serveur de votre base de données trouvé précédemment.

Toujours dans cette partie de votre espace client, rendez-vous dans l'onglet `Utilisateur et droits`{.action}, afin de repérer également le `Nom d'utilisateur`{.action} de votre base de données.

### Étape 3 : Modifier le mot de passe de la base de données de votre site dans son fichier de configuration <a name="step3"></a>

> [!primary]
>
> Pour plus d'informations sur les bonnes pratiques en matière de gestion de mots de passe, suivez les instructions de ce [guide](/pages/account_and_service_management/account_information/manage-ovh-password).
>

Choisissez le nouveau mot de passe de votre base de données et notez-le. Il devra respecter les conditions suivantes :

- Minimum 8 caractères;
- Maximum 30 caractères;
- Au moins une lettre majuscule;
- Au moins une lettre minuscule;
- Au moins un chiffre;
- Être composé uniquement de chiffres et de lettres.

De la même manière qu'à [l'étape 1](#step1), retournez dans l'espace de stockage de fichiers de votre hébergement puis ouvrez en édition le fichier de configuration de votre site.

**Avant toute modification**, enregistrez localement le contenu de ce fichier dans un document texte, afin d'en conserver une copie en cas d'erreur de manipulation.

Remplacez manuellement le mot de passe de votre base de données **en évitant de modifier ou supprimer tout autre élément du fichier de configuration** (Dans les extraits ci dessous, seul le mot de passe d'exemple « *0VhCloudPa55w0rdDB123* » doit ainsi être remplacé) :

- Dans le fichier de configuration d'un site WORDPRESS, modifiez le **« DB_PASSWORD »** :

```php
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dbname123');
 
/** MySQL database username */
define('DB_USER', 'dbname123');
 
/** MySQL database password */
define('DB_PASSWORD', '0VhCloudPa55w0rdDB123');
 
/** MySQL hostname */
define('DB_HOST', 'dbname123.mysql.db:3306');
```

- Dans le fichier de configuration d'un site JOOMLA, modifiez le **« public $password »** (tout à la fin du fichier de configuration) :

```php
public $host = 'dbname123.mysql.db:3306';
public $user = 'dbname123';
public $password = '0VhCloudPa55w0rdDB123';
public $db = 'dbname123';
```

- Dans le fichier de configuration d'un site DRUPAL, modifiez le **« password »** :

```php
$databases['default']['default'] = array (
  'database' => 'dbname123',
  'username' => 'dbname123',
  'password' => '0VhCloudPa55w0rdDB123',
  'prefix' => 'prefix123_',
  'host' => 'dbname123.mysql.db',
  'port' => '3306',
```

- Dans le fichier de configuration d'un site PRESTASHOP, modifiez le **« database_password »** :

```php
'database_host' => 'dbname123.mysql.db',
'database_port' => '3306',
'database_name' => 'dbname123',
'database_user' => 'dbname123',
'database_password' => '0VhCloudPa55w0rdDB123',
```

Sauvegardez cette modification.

### Étape 4 : Modifier le mot de passe de la base de données de votre site sur le serveur de bases de données <a name="step4"></a>

> [!primary]
>
> Cette opération nécessitera quelques minutes avant d'être effective. Après l'avoir lancée, pensez à vérifier son état dans l'onglet `Tâches en cours`{.action}.
>

A nouveau, deux cas sont possibles : 

- Si votre base de données se trouve dans la partie de votre [espace client OVHcloud](/links/manager) dédiée à votre [hébergement web](/links/web/hosting), suivez ces [instructions](#case1).
- Si votre base de données se trouve dans la partie de votre [espace client OVHcloud](/links/manager) dédiée à votre offre [Web Cloud Databases](/products/web-cloud-clouddb), suivez ces [instructions](#case2).

#### Cas n°1 : la base de données de votre site fait partie de votre offre d'hébergement <a name="case1"></a>

Dans la partie `Hébergements`{.action} de votre espace client concernée, rendez-vous dans l'onglet `Bases de données`{.action} à droite de votre écran :

![database-password-step1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}

Cliquez ensuite sur les trois points à droite de la base de données de votre site puis sur `Changer le mot de passe`{.action}.

![database-password-step2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/change-password.png){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez le nouveau mot de passe de votre base de données (défini à [l'étape 3](#step3)), confirmez-le puis cliquez sur le bouton `Valider`{.action}.

![database-password-step3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/change-password-window.png){.thumbnail}

#### Cas n°2 : la base de données de votre site fait partie d'une offre Web Cloud Databases <a name="case2"></a>

Rendez-vous dans la partie `Bases de données`{.action} de votre espace client et sur le serveur concerné, cliquez sur l'onglet `Utilisateurs et droits`{.action} :

![userDBpassword-step1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/wcdb-tab.png){.thumbnail}

Pour modifier le mot de passe de votre base de données sur le serveur, cliquez sur les trois points à droite du `Nom d'utilisateur`{.action} identifié à [l'étape 2](#step2) puis sur `Changer le mot de passe`{.action}.

![userDBpassword-step2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/wcdb-change-password.png){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez le nouveau mot de passe de votre base de données (défini à [l'étape 3](#step3)), confirmez-le puis cliquez sur le bouton `Valider`{.action}.

![userDBpassword-step3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/wcdb-change-password-window.png){.thumbnail}

## Aller plus loin <a name="go-further"></a>

[Utilisation logiciel FileZilla avec votre hébergement](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Modifier le mot de passe de votre compte](/pages/account_and_service_management/account_information/manage-ovh-password)

[Résoudre les erreurs les plus fréquentes liées aux bases de données](/pages/web_cloud/web_hosting/diagnosis_database_errors)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).