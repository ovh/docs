---
title: Modifier le mot de passe de la base de données d'un hébergement web
slug: modifier-mot-de-passe-base-de-donnees
excerpt: Découvrez comment changer le mot de passe d'une base de données créée dans le cadre d'une offre d'hébergement web
section: Bases de données
order: 2
---

**Dernière mise à jour le 26/01/2022**

## Objectif

La majeure partie des sites Web utilisent une **base de données** pour y stocker leurs articles, les commentaires ou encore les adresses e-mail de leurs utilisateurs.

La connexion à cette base de données est rendue possible par un **fichier de configuration** contenu dans [l'espace de stockage de fichiers](https://docs.ovh.com/ca/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) de votre hébergement. Il contient les informations permettant à votre site de « s'identifier » auprès de son **serveur de base de données**.

Le changement de mot de passe d'une base de données doit donc toujours être effectué :

- Dans le [fichier de configuration](https://docs.ovh.com/ca/fr/hosting/1-click-module-management/#etape-1-identifier-la-base-de-donnees-liee-a-votre-module) de votre site via [l'espace FTP de votre hébergement](https://docs.ovh.com/ca/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/);

- **Et** dans le serveur contenant sa base de données via votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

Tant que ce changement n'aura pas été effectué **dans ces deux endroits**, votre site affichera une « [erreur de connexion à la base de données](https://docs.ovh.com/ca/fr/hosting/erreurs-frequentes-bases-de-donnees/#erreur-lors-de-la-connexion-a-la-base-de-donnees) ».

Il est donc impératif, si vous souhaitez changer le mot de passe de votre base de données, que vous réalisiez **l'ensemble des opérations** indiquées dans ce guide. En cas de doutes sur les manipulations à réaliser, contactez votre webmaster ou faites appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/).

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
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web OVHcloud](https://www.ovhcloud.com/fr-ca/web-hosting/).
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Utiliser une [base de données associée à votre offre d'hébergement mutualisé](https://www.ovhcloud.com/fr-ca/web-hosting/options/start-sql/).
- Être en possession des identifiants FTP permettant de se connecter à l'[espace de stockage de votre hébergement](https://docs.ovh.com/ca/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).

## En pratique

### Étape 1 : identifier le fichier de configuration de votre site <a name="step1"></a>

Dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), cliquez sur `Web Cloud`{.action} puis sur `Hébergements`{.action} et enfin sur l'hébergement concerné. Rendez-vous ensuite dans l'onglet `Multisite`{.action}. Identifiez le nom du `Dossier racine` de votre site (le répertoire dans lequel se trouvent ses fichiers et dossiers).

![root_folder](images/root_folder.png){.thumbnail}

Cliquez ensuite sur l'onglet `FTP-SSH`{.action} puis accédez à l'espace contenant les fichiers et dossiers de votre site (*espace FTP*) en cliquant sur le bouton `FTP Explorer`{.action}.

> [!primary]
>
> Si vous souhaitez modifier le mot de passe de votre espace FTP, consultez ce [guide](https://docs.ovh.com/ca/fr/hosting/modifier-mot-de-passe-utilisateur-ftp/).
>
> Si vous souhaitez vous y connecter par une autre méthode, consultez ce [guide](https://docs.ovh.com/ca/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).
>

Ouvrez le `Dossier racine` identifié plus haut.

Recherchez et ouvrez le fichier de configuration de votre site :

- Pour un site WORDPRESS, il s'agit de **« wp-config.php »**;
- Pour un site JOOMLA, il s'agit de **« configuration.php »**;
- Pour un site DRUPAL, cliquez sur le dossier **« sites »** puis **« default »**. Le fichier de configuration est **« settings.php »**;
- Pour un site PRESTASHOP, cliquez sur le dossier **« app »** puis **« config »**. Le fichier de configuration est **« parameters.php »**.

### Étape 2 : identifier la base de données de votre site <a name="step2"></a>

Dans le fichier de configuration identifié à [l'étape 1](#step1), commencez par noter le nom de sa base de données :

- Pour WORDPRESS : le nom apparaît sous la mention **« DB_NAME »**;
- Pour JOOMLA : le nom apparaît sous **« public $db »**;
- Pour DRUPAL : le nom apparaît sous **« database »**;
- Pour PRESTASHOP : le nom apparaît sous **« database_name »**.

Retournez ensuite dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) toujours dans la partie `Web Cloud`{.action} :

- Rendez-vous dans la partie `Hébergements`{.action} puis dans l'hébergement concerné;
- Cliquez sur l'onglet `Bases de données`{.action} **à droite** de votre écran;
- Recherchez le nom de la base de données trouvé précédemment dans la colonne `Nom de la base`;

### Étape 3 : Modifier le mot de passe de la base de données de votre site dans son fichier de configuration <a name="step3"></a>

> [!primary]
>
> Pour plus d'informations sur les bonnes pratiques en matière de gestion de mots de passe, suivez les instructions de ce [guide](https://docs.ovh.com/ca/fr/customer/gerer-son-mot-de-passe/).
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

Dans la partie `Hébergements`{.action} de votre espace client concernée, rendez-vous dans l'onglet `Bases de données`{.action} à droite de votre écran :

![database-password-step1](images/database-password-step1.png){.thumbnail}

Cliquez ensuite sur les trois points à droite de la base de données de votre site puis sur `Changer le mot de passe`{.action}.

![database-password-step2](images/database-password-step2.png){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez le nouveau mot de passe de votre base de données (défini à [l'étape 3](#step3)), confirmez-le puis cliquez sur le bouton `Valider`{.action}.

![database-password-step3](images/database-password-step3.png){.thumbnail}

## Aller plus loin <a name="aller-plus-loin"></a>

[Utilisation logiciel FileZilla avec votre hébergement](https://docs.ovh.com/ca/fr/hosting/mutualise-guide-utilisation-filezilla/)

[Modifier le mot de passe de votre compte](https://docs.ovh.com/ca/fr/customer/gerer-son-mot-de-passe/)

[Résoudre les erreurs les plus fréquentes liées aux bases de données](https://docs.ovh.com/ca/fr/hosting/erreurs-frequentes-bases-de-donnees/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.