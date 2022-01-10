---
title: Modifier le mot de passe de la base de données d'un hébergement web
slug: modifier-mot-de-passe-base-de-donnees
excerpt: Apprenez à changer le mot de passe d'une base de données créée dans le cadre d'une offre d'hébergement web
section: Bases de données
order: 2
---

**Dernière mise à jour le 10/01/2022**

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

- Disposer d'une offre d’[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) et/ou d'un offre [SQL privé](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/) ou [CloudDB](https://docs.ovh.com/fr/clouddb/).
- Disposer d'un accès à la gestion de l'offre d'hébergement web depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Étape 1 : trouver le dossier contenant votre site

Rendez-vous dans l'onglet `Multisite`{.action}, dans la partie de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) dédié à votre `Hébergement`{.action}. Notez le nom du `Dossier racine` : il s'agit du répertoire dans lequel se trouvent les fichiers qui constituent votre module en 1 clic sur le serveur FTP.

### Étape 2 : accéder à l'espace de stockage de votre hébergement

Pour accéder à l'espace contenant les fichiers et dossiers de votre site, suivez les instructions de ce [guide](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).

Ouvrez ensuite le `Dossier racine` de votre site.

### Étape 3 : identifier le fichier de configuration de votre site

Recherchez le fichier de configuration de votre module dans l'espace FTP :

- Pour un site WORDPRESS, il s'agit de **« wp-config.php »** ;
- Pour un site JOOMLA, il s'agit de **« configuration.php »** ;
- Pour un site DRUPAL, cliquez sur le dossier **« sites »** puis **« default »**, le fichier de configuration est **« settings.php »** ;
- Pour un site PRESTASHOP, cliquez sur le dossier **« app »** puis **« config »**, le fichier de configuration est **« parameters.php »**.

> [!primary]
>
> Si vous ne parvenez pas à retrouver le fichier de configuration de votre site ou si vous n'êtes pas certain des manipulations à réaliser, contactez votre Webmaster ou faites appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) si vous souhaitez obtenir de l'aide.
>

### Étape 4 : déterminer la base de données de votre site <a name="step4"></a>

Cette information est nécessaire si vous disposez de plusieurs bases de données ou offres de bases de données. Vous devrez en effet être certain de celle dont dépend votre site, avant d'en modifier le mot de passe.

Toujours dans le fichier de configuration de votre site, notez le nom de sa base de données :

- Pour WORDPRESS : il apparaît sous la mention **« DB_NAME »** ;
- Pour JOOMLA : sous **« public $db »** ;
- Pour DRUPAL : sous **« database »** ;
- Pour PRESTASHOP : sous **« database_name »**.

Dans la partie `Web Cloud`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), cliquez sur la partie `Bases de données`{.action} sur la partie gauche de votre écran.

Si un ou plusieurs services SQL privé ou CloudDB apparaissent dans cette partie, notez, dans le fichier de configuration de votre site, le **nom d'utilisateur** de votre base de données : 

- Pour WORDPRESS : il apparaît sous la mention **« DB_USER »** ;
- Pour JOOMLA : sous **«  »** ;
- Pour DRUPAL : sous **«  »** ;
- Pour PRESTASHOP : sous **«  »**.

### Étape 5 : choisir le nouveau mot de passe de votre base de données

Déterminez le nouveau mot de passe de votre base de données et notez-le. Il devra respecter les conditions suivantes :

- Minimum 8 caractères ;
- Maximum 30 caractères ;
- Au moins une lettre majuscule ;
- Au moins une lettre minuscule ;
- Au moins un chiffre ;
- Être composé uniquement de chiffres et de lettres.

> [!primary]
>
> Pour des raisons de sécurité, nous vous recommandons également :
>
> - de ne pas utiliser deux fois le même mot de passe ;
> - de choisir un mot de passe qui n'a aucun rapport avec vos informations personnelles (évitez les mentions à votre nom, prénom ou date de naissance, par exemple) ;
> - de renouveler régulièrement vos mots de passe ;
> - de ne pas noter sur un papier ou de vous envoyer vos mots de passe sur votre adresse e-mail ;
> - de ne pas enregistrer vos mots de passe dans votre navigateur internet, même si ce dernier vous le propose.
>

### Étape 6 : modifier le mot de passe de votre base de données

Ouvrez en édition le fichier de configuration de votre base de données.

**Avant toute modification**, copiez-collez son contenu dans un éditeur de texte, afin de le sauvegarder localement.

Remplacez manuellement le mot de passe de votre base de données **en évitant de modifier ou supprimer tout autre élément du fichier** :

- Pour un site WORDPRESS, modifiez la variable **« DB_PASSWORD »** :

![wordpress_config](images/wordpress_config.png){.thumbnail}

- Pour un site JOOMLA, modifiez la variable **«  »**:

![joomla_config](images/joomla_config.png){.thumbnail}

- Pour un site DRUPAL, modifiez la variable **«  »** :

![drupal_config](images/drupal_config.png){.thumbnail}

- Pour un site PRESTASHOP, modifiez la variable **«  »** :

![prestashop_config](images/prestashop_config.png){.thumbnail}

Sauvegardez cette modification.

### Étape 6 : accéder à la gestion des bases de données de l'hébergement

La modification du mot de passe de votre base de données s'effectuera dans deux endroits différents de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), selon que votre base est associée à un [hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) ou à une offre [SQL privé](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/) ou [CloudDB](https://docs.ovh.com/fr/clouddb/).

Vous devrez donc [identifier de façon certaine](#step4) la base de données de votre site, avant toute modification.

Dans la partie `Web Cloud`{.action} de votre espace client, cliquez sur la partie `Bases de données`{.action} sur la partie gauche de votre écran.

Si un ou plusieurs services SQL privé ou CloudDB apparaissent dans cette partie, recherchez la base de données notée dans le fichier de configuration de votre site dans l'onglet `Bases de données`{.action}.

Une fois certain du service où se trouve cette base, 

Toujours dans votre , partie `Hébergements`{.action} et dans l'hébergement concerné, cliquez sur l'onglet `Bases de données`{.action}.

Le tableau qui s'affiche contient toutes les bases de données créées dans le cadre de votre offre d'hébergement web.

![databasepassword](images/database-password-step1.png){.thumbnail}

 modifier le mot de passe de la base de données

Pour modifier le mot de passe, cliquez sur les trois points à droite de la base de données concernée, puis sur `Changer le mot de passe`{.action}.

![databasepassword](images/database-password-step2.png){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez le nouveau mot de passe, confirmez-le, puis cliquez sur le bouton `Valider`{.action}.

**Le changement nécessite quelques minutes avant d'être effectif.**



![databasepassword](images/database-password-step3.png){.thumbnail}

### Étape 4 : rétablir le lien entre la base et le site

> [!primary]
>
> Cette partie peut être facultative si votre site internet n'est pas relié à une base de données.
>

Si votre site internet affiche un message indiquant que la connexion vers la base de données ne peut être effectuée, cela signifie que vous n'avez pas répercuté le changement de mot de passe dans le fichier assurant le lien entre votre site et la base de données.

En effet, pour que votre site internet soit en mesure de s'y connecter, un fichier se trouvant sur votre espace de stockage comporte des informations permettant de se connecter à la base : un nom d'utilisateur et de son mot de passe, le nom de la base de données ainsi que de l'adresse du serveur. Du fait de la modification du mot de passe de la base depuis l'espace client OVH, ce lien est à présent brisé.

Pour le rétablir, vous devez renseigner le nouveau mot de passe dans le fichier comportant les informations de la base de données. Ce paramétrage étant inhérent à la configuration de votre site et non à OVH, nous vous recommandons de vous rapprocher de l'éditeur du site internet ou de faire appel à un professionnel tel qu'un prestataire spécialisé si vous souhaitez obtenir de l'aide pour réaliser cette manipulation.

## Aller plus loin

[En apprendre plus sur la sécurité des mots de passe grâce à l'ANSSI](http://www.ssi.gouv.fr/guide/mot-de-passe/){.external}.

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.