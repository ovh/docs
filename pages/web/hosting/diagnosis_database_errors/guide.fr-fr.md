---
title: 
excerpt: 
slug: 
section: 
order: 
---

**Dernière mise à jour le **

## Objectif



**Découvrez comment .**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/) OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Utiliser l'une de nos offres de bases de données [Web Cloud](https://www.ovh.com/fr/hebergement-web/options-sql.xml) ou [Cloud Databases](https://www.ovh.com/fr/cloud-databases/).

## En pratique

### « Erreur lors de la connexion à la base de données »

#### Vérifier le site [http://travaux.ovh.com/](http://travaux.ovh.com/)

Vérifiez tout d'abord sur [http://travaux.ovh.com/](http://travaux.ovh.com/) que votre datacentre, votre cluster d'hébergement, votre serveur SQL privé ou CloudDB n'est pas impacté par un incident ou une maintenance. 

> [!primary]
>
> Pour retrouver ces informations, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans la partie `Web Cloud`{.action} :
>
> - Pour retrouver le **datacentre** de votre hébergement, ainsi que son **« filer »** (serveur de fichier), choisissez `Hébergements`{.action} dans le menu, puis l'hébergement concerné. Vous trouverez ces informations dans l'onglet `Informations générales`{.action}.
>
> - Pour retrouver le **cluster** de serveurs sur lequel se trouve votre hébergement, cliquez sur l'onglet `FTP-SSH`{.action}. Cette information apparaîtra dans le nom de votre **« Serveur FTP »**.
>
> - Pour retrouver le nom de votre serveur **Private SQL** ou **CloudDB**, cliquez sur `Bases de données`{.action} dans le menu de gauche, puis sur l'offre concernée. Vous trouverez cette information sous la mention `Host` dans l'onglet `Informations générales`{.action}.
>

#### Vérifier les identifiants de connexion à votre base de données

Connectez-vous en [FTP](../connexion-espace-stockage-ftp-hebergement-web/) à votre espace de stockage et retrouvez le fichier de configuration de votre site (Par exemple, pour un site **Wordpress**, il s'agit du fichier **wp-config.php** situé dans le dossier contenant votre site).

> [!warning]
>
> Le choix du fichier comportant les informations de la base de données est inhérent à sa configuration et non à OVHcloud. 
> Nous vous recommandons de vous rapprocher de l’éditeur du [CMS](../modules-en-1-clic/) ou de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous souhaitez obtenir de l’aide pour réaliser les manipulations sur ce fichier.
>

Vérifiez ensuite la correspondance exacte entre les identifiants de connexion à [PhpMyAdmin](/exportation-bases-donnees/#recuperer-une-sauvegarde-depuis-linterface-web-phpmyadmin_1) (Vérifiez simplement si les identifiants indiqués et le mot de passe vous permettent d'ouvrir cette interface) et ceux du fichier de configuration de votre site.

Changez, si nécessaire, le [mot de passe de votre base de données](../modifier-mot-de-passe-base-de-donnees/).

##### Exemple pour Wordpress

Si votre site affiche un message **« Erreur lors de la connexion à la base de données »** et qu'il n'est pas concerné par un [incident](http://travaux.ovh.com/), connectez-vous en [FTP](../connexion-espace-stockage-ftp-hebergement-web/) à votre serveur, puis ouvrez le répertoire contenant votre site (Par défaut, il s'agit du dossier **www**).

S'il s'agit d'un site Wordpress, ouvrez le fichier `wp-config.php`{.action}.

```bash
define('DB_NAME', 'my_database');
 
/** MySQL database username */
define('DB_USER', 'my_database123');
 
/** MySQL database password */
define('DB_PASSWORD', 'my_password');
 
/** MySQL hostname */
define('DB_HOST', 'my_server.mysql.db:3306');
```
Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans la partie `Hébergements`{.action}, cliquez sur l'onglet `Bases de données`{.action}. Vérifiez la correspondance avec le fichier `wp-config.php`{.action} :

- **DB_NAME** correspond au `Nom de la base`;
- **DB_USER** correspond au `Nom d'utilisateur`;
- **DB_PASSWORD** correspond au [mot de passe de votre base de données](../modifier-mot-de-passe-base-de-donnees/);
- **DB_HOST** correspond à la colonne `Adresse du serveur`.

> [!primary]
>
> Si ces manipulations ne vous permettaient pas de rétablir l'accès à votre site, [sauvegardez votre base de données](../exportation-bases-donnees/), puis restaurez-la à une date antérieure par le même chemin dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
>
> Contactez un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si nécessaire.
>

### Dépassement du quota autorisée de la base de données

Vous avez reçu un mail d'OVHcloud, indiquant que la base de données de votre site a dépassé la taille autorisé sur le serveur. Votre base est donc passée en lecture seule, ce qui empêche toute modification de votre site.

![mail_overquota](images/mail_overquota.png){.thumbnail}

Trois méthodes vous permettront de débloquer votre base de données : 

#### Méthode 1 : passer votre abonnement sur une offre supérieure

Si vous disposez d'une formule d'hébergement **Perso2014** ou **Pro2014**, vous pouvez passer sur l'offre supérieure, afin que la taille de votre base de données augmente automatiquement et soit réouverte. Cette méthode est la plus simple et ne nécessite aucune compétence technique particulière.

Pour effectuer ce changement, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), puis cliquez sur `Hébergements`{.action}, puis l'hébergement concerné. Cliquez sur le bouton `...`{.action} dans la partie `Offre` sur la droite de l'écran.

Si vous utilisez une offre **Performance**, reportez-vous à la [méthode 2](#methode2)

#### Méthode 2 : migrer vos données sur une base de taille supérieure <a name="methode2"></a>

#### Méthode 3 : supprimer les données inutiles

### Dépassement de RAM

### Erreurs import / export de bases de données

### Impossible d'accéder à PhpMyAdmin - « Access denied for user »

### Impossible d'accéder à PhpMyAdmin - too many connections

### Impossible d'accéder à PhpMyAdmin - « Name or service not known »

### Connexion impossible depuis l'extérieur de l'infra (CloudDB)

## Aller plus loin <a name="aller-plus-loin"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.