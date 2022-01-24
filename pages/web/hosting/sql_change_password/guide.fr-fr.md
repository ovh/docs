---
title: Modifier le mot de passe de la base de données d'un hébergement web
slug: modifier-mot-de-passe-base-de-donnees
excerpt: Apprenez à changer le mot de passe d'une base de données créée dans le cadre d'une offre d'hébergement web
section: Bases de données
order: 2
---

**Dernière mise à jour le 12/01/2022**

## Objectif

La majeure partie des sites Web utilisent une **base de données** pour y stocker leurs articles, les commentaires ou encore les adresses e-mail de leurs utilisateurs.

La connexion à cette base de données est rendue possible par un **fichier de configuration** contenu dans [l'espace de stockage](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) de votre hébergement. Il contient les informations permettant à votre site de « s'identifier » auprès du serveur de votre base de données.

Le changement de mot de passe d'une base de données doit donc toujours être effectué :

- Dans le [fichier de configuration](https://docs.ovh.com/fr/hosting/1-click-module-management/#etape-1-identifier-la-base-de-donnees-lie-a-votre-module) de votre site via [l'espace FTP de votre hébergement](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) ;

- **Et** dans le serveur contenant sa base de données via votre [espace client OVHcloud]( https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

Tant que ce changement n'aura pas été effectué **dans ces deux endroits**, votre site affichera une [Erreur de connexion à la base de données](https://docs.ovh.com/fr/hosting/erreurs-frequentes-bases-de-donnees/#erreur-lors-de-la-connexion-a-la-base-de-donnees).

**Apprenez à changer le mot de passe d'une base de données de façon sécurisée.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovhcloud.com/fr/web-hosting/) OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Utiliser une [base de données associée à votre offre d'hébergement mutualisé](https://www.ovhcloud.com/fr/web-hosting/options/start-sql/) ou à un [serveur SQL privé](https://docs.ovh.com/fr/hosting/premiers-pas-avec-sql-prive/) ou [CloudDB](https://www.ovh.com/fr/cloud-databases/).
- Être en possession des identifiants FTP permettant de se connecter à l'[espace de stockage](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) de votre hébergement.

## En pratique

### Étape 1 : trouver le dossier contenant votre site

Rendez-vous dans l'onglet `Multisite`{.action}, dans la partie de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) dédiée à votre `Hébergement`{.action}. Notez le nom du `Dossier racine` : il s'agit du répertoire dans lequel se trouvent les fichiers et fichiers de votre site.

![root_folder](images/root_folder.png){.thumbnail}

### Étape 2 : accéder au fichier de configuration de votre site

Accédez à l'espace contenant ces fichiers et dossiers en suivant les instructions de ce [guide](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).

Ouvrez ensuite le `Dossier racine` identifié à l'étape précédente.

> [!primary]
>
> Si vous ne parvenez pas à retrouver le fichier de configuration de votre site ou si vous n'êtes pas certain des manipulations à réaliser, contactez votre Webmaster ou faites appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/).
>

Recherchez et ouvrez le fichier de configuration de votre site à l'intérieur de votre `Dossier racine` :

- Pour un site WORDPRESS, il s'agit de **« wp-config.php »** ;
- Pour un site JOOMLA, il s'agit de **« configuration.php »** ;
- Pour un site DRUPAL, cliquez sur le dossier **« sites »** puis **« default »**. Le fichier de configuration est **« settings.php »** ;
- Pour un site PRESTASHOP, cliquez sur le dossier **« app »** puis **« config »**. Le fichier de configuration est **« parameters.php »**.

### Étape 3 : identifier la base de données de votre site <a name="step3"></a>

#### Cas n°1 : la base de votre site fait partie de votre offre d'hébergement

Cette information est nécessaire si vous disposez de plusieurs bases de données. Vous devrez en effet être certain d'effectuer le changement de mot de passe sur la base dont dépend votre site.

Toujours dans le fichier de configuration, notez le nom de la base de données :

- Pour WORDPRESS : il apparaît sous la mention **« DB_NAME »** ;
- Pour JOOMLA : sous **« public $db »** ;
- Pour DRUPAL : sous **« database »** ;
- Pour PRESTASHOP : sous **« database_name »**.

Dans la partie `Web Cloud`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), cliquez sur `Hébergements`{.action}, sur l'hébergement concerné puis sur l'onglet `Bases de données`{.action} à droite de votre écran. Vérifiez que la base de données de votre site se trouve dans cette partie.

#### Cas n°2 : la base de votre site fait partie d'une offre Private SQL ou CloudDB

Si vous n'avez pas retrouvé la base de données de votre site dans la partie `Hébergements`{.action} de votre espace client, il est probable qu'elle soit inclue dans une offre [CloudDB](https://www.ovh.com/fr/cloud-databases/) ou [SQL privé](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/). Recherchez donc, à nouveau dans le fichier de configuration de votre site, le *nom du serveur de base de données* :

- Pour WORDPRESS : il apparaît sous la mention **« DB_HOST »** ;
- Pour JOOMLA : sous **« public $host »** ;
- Pour DRUPAL : sous **« host »** ;
- Pour PRESTASHOP : sous **« database_host »**.

Ainsi que le nom d'utilisateur (Dans cette situation, vous devrez modifier le mot de passe de **l'utilisateur** de votre base de données) :

- Pour WORDPRESS : il apparaît sous la mention **« DB_USER »** ;
- Pour JOOMLA : sous **« public $user »** ;
- Pour DRUPAL : sous **« username »** ;
- Pour PRESTASHOP : sous **« database_user »**.

Cliquez ensuite, dans la partie **gauche** de votre écran, sur `Bases de données`{.action}. Recherchez le `Nom d'hôte`{.action} de votre serveur dans l'onglet `Informations générales`{.action}. Identifiez également le nom d'utilisateur de votre base de données dans l'onglet `Utilisateur et droits`{.action}

### Étape 4 : modifier le mot de passe de votre base dans le fichier de configuration <a name="step4"></a>

> [!primary]
>
> Pour plus d'informations sur les bonnes pratiques en matière de mots de passe, suivez les instructions de ce [guide](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).
>

Choisissez le nouveau mot de passe de votre base de données et notez-le. Il devra respecter les conditions suivantes :

- Minimum 8 caractères ;
- Maximum 30 caractères ;
- Au moins une lettre majuscule ;
- Au moins une lettre minuscule ;
- Au moins un chiffre ;
- Être composé uniquement de chiffres et de lettres.

Ouvrez en édition le fichier de configuration de votre base de données.

**Avant toute modification**, copiez-collez son contenu dans un document texte, afin de le sauvegarder localement.

Remplacez manuellement le mot de passe de votre base de données **en évitant de modifier ou supprimer tout autre élément du fichier** (Dans les exemples ci dessous, seul « *ABCabc123* » doit ainsi être remplacé) :

- Pour un site WORDPRESS, modifiez le **« DB_PASSWORD »** :

```php
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dbname123');
 
/** MySQL database username */
define('DB_USER', 'dbname123');
 
/** MySQL database password */
define('DB_PASSWORD', 'ABCabc123');
 
/** MySQL hostname */
define('DB_HOST', 'dbname123.mysql.db:3306');
```

- Pour un site JOOMLA, modifiez le **« public $password »** (Tout à la fin du fichier de configuration) :

```php
public $host = 'dbname123.mysql.db:3306';
public $user = 'dbname123';
public $password = 'ABCabc123';
public $db = 'dbname123';
```

- Pour un site DRUPAL, modifiez le **« password »** :

```php
$databases['default']['default'] = array (
  'database' => 'dbname123',
  'username' => 'dbname123',
  'password' => 'ABCabc123',
  'prefix' => 'prefix123_',
  'host' => 'dbname123.mysql.db',
  'port' => '3306',
```

- Pour un site PRESTASHOP, modifiez le **« database_password »** :

```php
'database_host' => 'dbname123.mysql.db',
'database_port' => '3306',
'database_name' => 'dbname123',
'database_user' => 'dbname123',
'database_password' => 'ABCabc123',
```

Sauvegardez cette modification.

### Étape 5 : accéder à la gestion des bases de données de l'hébergement

La modification du mot de passe de votre base de données s'effectuera dans deux endroits différents de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), selon que votre base est associée à un [hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) ou à une offre [SQL privé](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/) ou [CloudDB](https://docs.ovh.com/fr/clouddb/).

Vous devrez donc [identifier de façon certaine](#step3) la base de données de votre site avant toute modification.

#### Cas n°1 : la base de votre site fait partie de votre offre d'hébergement

Si la base de données de votre site se trouve dans la partie `Hébergements`{.action} de votre espace client, cliquez sur l'onglet `Bases de données`{.action}. Le tableau qui s'affiche contient la ou les bases de données créée(s) sur votre hébergement web :

![database-password-step1](images/database-password-step1.png){.thumbnail}

#### Cas n°2 : la base de votre site fait partie d'une offre Private SQL ou CloudDB

Si la base de données de votre site se trouve dans la partie `Bases de données`{.action} de votre espace client (menu de gauche), cliquez sur l'onglet `Utilisateurs et droits`{.action} :

![userDBpassword-step1](images/userDBpassword-step1.png){.thumbnail}

### Étape 6 : modifier le mot de passe de la base de données

> [!primary]
>
> Cette opération nécessitera quelques minutes avant d'être effective. Après l'avoir lancée, vérifiez l'onglet `Tâches en cours`{.action}.
>

#### Cas n°1 : la base de votre site fait partie de votre offre d'hébergement

Pour modifier le mot de passe, cliquez sur les trois points à droite de la base de données identifiée à [l'étape 3](#step3) puis sur `Changer le mot de passe`{.action}.

![database-password-step2](images/database-password-step2.png){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez le mot de passe inscrit dans le fichier de configuration de votre site à [l'étape 4](#step4), confirmez-le puis cliquez sur le bouton `Valider`{.action}.

![database-password-step3](images/database-password-step3.png){.thumbnail}

#### Cas n°2 : la base de votre site fait partie d'une offre Private SQL ou CloudDB

Pour modifier le mot de passe, cliquez sur les trois points à droite de l'utilisateur identifié à [l'étape 3](#step3) puis sur `Changer le mot de passe`{.action}.

![userDBpassword-step2](images/userDBpassword-step2.png){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez le mot de passe inscrit dans le fichier de configuration de votre site à [l'étape 4](#step4), confirmez-le puis cliquez sur le bouton `Valider`{.action}.

![userDBpassword-step3](images/userDBpassword-step3.png){.thumbnail}

## Aller plus loin <a name="aller-plus-loin"></a>

[Utilisation logiciel FileZilla avec votre hébergement](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)

[Les conseils de cybermalveillance.gouv.fr](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/){.external}

[Résoudre les erreurs les plus fréquentes liées aux bases de données](https://docs.ovh.com/fr/hosting/erreurs-frequentes-bases-de-donnees/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.