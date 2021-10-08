---
title: Résoudre les erreurs les plus fréquentes liées aux bases de données 
excerpt: Diagnostiquez les cas les plus courants d'erreurs liées aux bases de données
slug: erreurs-frequentes-bases-de-donnees
section: Diagnostic
order: 4
---

**Dernière mise à jour le 16/09/2021**

## Objectif

L'utilisation de vos bases de données peut entraîner un certain nombre d'anomalies sur votre site ou votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), ainsi que sur l'interface [PhpMyAdmin](../creer-base-de-donnees/#acceder-a-linterface-phpmyadmin).

**Découvrez comment résoudre les erreurs liées aux bases de données sur les hébergements mutualisés OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/) OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Utiliser l'une de nos offres de bases de données [Web Cloud](https://www.ovh.com/fr/hebergement-web/options-sql.xml), [SQL privé](../premiers-pas-avec-sql-prive/) ou [Cloud Databases](https://www.ovh.com/fr/cloud-databases/).

## En pratique

### « Erreur lors de la connexion à la base de données »

#### Vérifier le site http://travaux.ovh.com/

Vérifiez tout d'abord sur [http://travaux.ovh.com/](http://travaux.ovh.com/) que votre datacentre, votre cluster d'hébergement, votre serveur SQL privé ou Cloud Databases n'est pas concerné par un incident sur l'infrastructure OVHcloud. 

> [!primary]
>
> Pour retrouver ces informations, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans la partie `Web Cloud`{.action} :
>
> - Pour retrouver le `Datacentre` de votre hébergement, ainsi que son `Filer` (serveur de fichier), choisissez `Hébergements`{.action} dans le menu de gauche, puis l'hébergement concerné. Vous trouverez ces informations dans l'onglet `Informations générales`{.action}.
> - Pour retrouver le **cluster** de serveurs sur lequel se trouve votre hébergement, cliquez sur l'onglet `FTP-SSH`{.action}. Cette information apparaîtra dans le nom de votre `Serveur FTP`.
> - Pour retrouver le nom de votre serveur **Private SQL** ou **Cloud Databases**, cliquez sur `Bases de données`{.action} dans le menu de gauche, puis sur l'offre concernée. Vous trouverez cette information sous la mention `Host` dans l'onglet `Informations générales`{.action}.
>

#### Vérifier les identifiants de connexion à votre base de données <a name="config_file"></a>

Connectez-vous en [FTP](../connexion-espace-stockage-ftp-hebergement-web/) à l'espace de stockage de fichiers sur votre hébergement et retrouvez le fichier de configuration de votre site (Par exemple, pour un site Wordpress, il s'agit du fichier **wp-config.php** situé dans le dossier contenant votre site).

> [!warning]
>
> Le choix et la configuration du fichier comportant les informations de connexion à la base de données est inhérent à l'éditeur de contenu (CMS) concerné et non à OVHcloud.
>
> Nous vous recommandons donc de vous rapprocher de l’éditeur du [CMS](../modules-en-1-clic/) utilisé pour créer votre site ou de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) en cas de besoin. Nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

Vérifiez ensuite la correspondance **exacte** entre les identifiants de connexion à [PhpMyAdmin](../creer-base-de-donnees/#acceder-a-linterface-phpmyadmin) et ceux du fichier de configuration de votre site.

Changez, si nécessaire, le [mot de passe de votre base de données](../modifier-mot-de-passe-base-de-donnees/).

##### Exemple pour Wordpress

Si votre site affiche un message **« Erreur lors de la connexion à la base de données »** et qu'il n'est pas concerné par un [incident](http://travaux.ovh.com/), connectez-vous en [FTP](../connexion-espace-stockage-ftp-hebergement-web/) à votre hébergement puis ouvrez le répertoire contenant votre site (Par défaut, il s'agit du dossier `www`).

S'il s'agit d'un site Wordpress, ouvrez le fichier `wp-config.php`.

```php
define('DB_NAME', 'my_database');
 
/** MySQL database username */
define('DB_USER', 'my_database123');
 
/** MySQL database password */
define('DB_PASSWORD', 'my_password');
 
/** MySQL hostname */
define('DB_HOST', 'my_server.mysql.db:port');
```
Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans la partie `Hébergements`{.action}, cliquez sur l'onglet `Bases de données`{.action} puis vérifiez la correspondance entre les éléments affichés et ceux présents dans le fichier `wp-config.php` :

- **DB_NAME** correspond au `Nom de la base`;
- **DB_USER** correspond au `Nom d'utilisateur`;
- **DB_PASSWORD** correspond au [mot de passe de votre base de données](../modifier-mot-de-passe-base-de-donnees/);
- **DB_HOST** correspond à la colonne `Adresse du serveur`.

> [!primary]
>
> Si ces manipulations ne vous permettent pas de rétablir l'accès à votre site, [sauvegardez votre base de données](../exportation-bases-donnees/) puis [restaurez-la à une date antérieure](../restaurer-importer-base-de-donnees/#1-restaurer-une-sauvegarde-existante) depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
>
> Contactez un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) ensuite si nécessaire. Nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Dépassement du quota autorisée de la base de données

Vous avez reçu un mail d'OVHcloud, indiquant que la base de données de votre site a dépassé la taille autorisée sur le serveur. Votre base est donc passée en lecture seule, ce qui empêche toute modification de votre site.

![mail_overquota](images/mail_overquota.png){.thumbnail}

Trois méthodes vous permettront de débloquer votre base de données : 

#### Méthode 1 : passer votre abonnement sur une offre supérieure

Si vous disposez d'une formule **Perso2014** ou **Pro2014**, nous vous conseillons dans cette situation de passer sur l'[offre d'hébergement supérieure](https://www.ovh.com/fr/hebergement-web/). Ce changement d'abonnement augmentera la taille de votre base de données ce qui la réouvrira automatiquement. Cette méthode est la plus simple et ne nécessite aucune compétence technique particulière.

> [!warning]
>
> L'augmentation de la taille de votre base de données peut être liée à un dysfonctionnement dans le code interne de votre site. 
>
> Une anomalie peut entraîner une augmentation permanente de la taille de votre base de données auquel cas le changement d'offre d'hébergement serait inefficace.
>
> Nous vous conseillons donc, si vous constatez une augmentation soudaine de la taille de votre base de données ou si vous disposez d'un site de type « Blog » normalement peu consommateur de données, de contacter immédiatement un [prestataire spécialisé](https://partner.ovhcloud.com/fr/). Nous ne serons pas en mesure de vous apporter un support sur ce sujet.
>

Pour effectuer ce changement, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) puis cliquez sur `Hébergements`{.action}, puis sur l'hébergement concerné. Cliquez sur le bouton `...`{.action} dans la rubrique `Offre` sur la droite de votre écran puis sur `Changer d'offre`{.action}.

Si vous utilisez une offre **Performance**, reportez-vous à la [méthode 2](#methode2).

#### Méthode 2 : migrer vos données sur une base de taille supérieure <a name="methode2"></a>

Vous pouvez également migrer vos données sur une nouvelle base :

- Commandez, si nécessaire, une [base de données](https://www.ovh.com/fr/hebergement-web/options-sql.xml) de taille supérieure puis lancez sa [création](../creer-base-de-donnees/);
- Effectuez un [export de vos données](../exportation-bases-donnees/), puis [importez-les](../mutualise-guide-importation-dune-base-de-donnees-mysql/) dans la nouvelle base;
- Intégrez les identifiants de la nouvelle base de données dans le [fichier de configuration](#config_file) de votre site.

> [!primary]
>
> Si vous disposez d'un hébergement **Performance**, vous pouvez également [activer gratuitement un serveur SQL Privé](../premiers-pas-avec-sql-prive/#activation-de-votre-serveur-sql-prive-inclus-avec-votre-offre-dhebergement-web).
>

#### Méthode 3 : supprimer les données inutiles

Après avoir effectué une [sauvegarde de votre base de données](../exportation-bases-donnees/), vous pouvez enfin vous [connecter à votre interface PhpMyAdmin](../creer-base-de-donnees/#acceder-a-linterface-phpmyadmin) afin de supprimer les données inutiles grâce aux commandes Drop, Delete et Truncate.

Relancez ensuite le calcul du quota utilisé depuis l'onglet `Bases de données`{.action} de l'hébergement concerné : cliquez sur le bouton `...`{.action} concerné puis sur `Recalculer le quota`{.action}.

> [!warning]
>
> Cette opération nécessite de fortes compétences techniques. Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) en cas de besoin pour la réaliser. Nous ne serons pas en mesure de vous apporter une assistance sur ce sujet.
>

#### Méthode 4 : optimiser votre base de données

Pour optimiser votre base de données, suivez les instructions de ce [guide](../configurer-optimiser-son-serveur-de-base-de-donnees/#optimiser-vos-bases-de-donnees_1) puis relancer le calcul du quota utilisé depuis l'onglet `Bases de données`{.action} de l'hébergement concerné en cliquant sur le bouton `...`{.action} concerné.

> [!warning]
>
> Si les conseils fournis sur l'optimisation de votre base de données ne suffisaient pas à débloquer l'accès à votre site, nous vous conseillons de contacter notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Dépassements de la mémoire RAM

Le message suivant dans la partie `Bases de données`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) indique que votre serveur [SQL privé](https://www.ovh.com/fr/hebergement-web/options-sql.xml) ou [Cloud Databases](https://www.ovh.com/fr/cloud-databases/) a consommé une quantité de ressources trop importantes sur l'infrastructure OVHcloud :

![quota_exceeding](images/quota_exceeding.png){.thumbnail}

Dans cette situation, vous pouvez augmenter la [quantité de mémoire RAM](../configurer-optimiser-son-serveur-de-base-de-donnees/#suivre-la-ram-consommee) disponible depuis la partie `Bases de données`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Dans l'onglet `Informations générales`{.action}, cliquez sur le bouton `...`{.action} dans la rubrique `RAM`.

Vous pouvez également optimiser votre base de données en suivant les instructions de ce [guide](../configurer-optimiser-son-serveur-de-base-de-donnees/#optimiser-vos-bases-de-donnees_1).

> [!primary]
>
> Si vous rencontrez des difficultés à diminuer l'utilisation des ressources sur votre serveur de bases de données et que vous ne souhaitez pas les augmenter,  contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). Nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Erreurs d'import de bases de données

#### « Access denied for user to database »

>
> **« #1044 - Access denied for user to database »**
>

Assurez-vous tout d'abord que votre base de données est vide depuis l'onglet `Bases de données`{.action} de l'hébergement concerné (cliquez sur le bouton `...`{.action} concerné puis sur `Recalculer le quota`{.action}) afin de [sauvegarder les données présentes](../exportation-bases-donnees/). Vous pouvez également cocher la case `Vider la base de données actuelle`{.action} juste avant de [lancer l'import](../mutualise-guide-importation-dune-base-de-donnees-mysql/#importer-votre-propre-sauvegarde-depuis-lespace-client) :

![database-import-empty](images/database-import-empty.png){.thumbnail}

Ce message d'erreur signifie que la base de données que vous tentez d'importer contient des éléments non autorisés sur l'infrastructure mutualisée OVHcloud. Contactez si besoin notre [communauté d'utilisateurs](https://community.ovh.com) ou un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) à ce sujet. Nous ne serons pas en mesure de vous fournir une assistance sur la correction de cette anomalie.

> [!success]
>
> Avoir un **« trigger »** dans le script d'import de votre base de données n'est pas autorisé sur les serveurs d'hébergement mutualisé OVHcloud. Dans cette situation, importez votre base de données sur un serveur [SQL privé](https://www.ovh.com/fr/hebergement-web/options-sql.xml) ou [Cloud Databases](https://www.ovh.com/fr/cloud-databases/).
>
> Par ailleurs, la requête suivante n'est pas autorisée :
>
>```bash
>CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci; 
>```
> Remplacez là par :
>```bash
>USE `Database-Name`;
>```
>(`Database-Name` : Indiquez le nom de la base de données indiqué dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
>

#### « MySQL server has gone away »

>
> **« ERROR 2006 : MySQL server has gone away »**
>

Ce message d'erreur apparaît lors de [l'import d'une base de données](../restaurer-importer-base-de-donnees/#2-importer-une-sauvegarde-locale) sur un serveur [SQL Privé](../premiers-pas-avec-sql-prive/). Il est lié la plupart du temps à la quantité trop importante de données à importer ou à un manque d'optimisation des requêtes SQL dans le script d'import.

Pour résoudre cette anomalie, vous pouvez :

- Augmenter la [quantité de mémoire vive (RAM)](../configurer-optimiser-son-serveur-de-base-de-donnees/#suivre-la-ram-consommee), rendez vous sur le [serveur SQL privé](../premiers-pas-avec-sql-prive/) concerné dans la rubrique `Bases de données` de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez ensuite sur le bouton `...`{.action} dans la partie `RAM`, puis `Changer la quantité de RAM`{.action}.

- Fractionner votre base de données, afin de l'importer en plusieurs opérations au lieu d'une seule (Pour toute question sur les manipulations à réaliser, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.)

- [Optimisez votre base de données](../configurer-optimiser-son-serveur-de-base-de-donnees/#optimiser-vos-bases-de-donnees_1) puis répétez les opérations d'export / import.

### Impossible d'accéder à PhpMyAdmin

#### « Access denied for user »

>
> **« mysqli::real_connect(): (HY000/1045): Access denied for user »**
>

Ce message d'erreur peut apparaître lors de la connexion à votre base de données par [PhpMyAdmin](../creer-base-de-donnees/#acceder-a-linterface-phpmyadmin). Elle indique que les identifiants indiqués sont erronés.

![access_denied_for_user](images/access_denied_for_user.png){.thumbnail}

Dans cette situation, [vérifiez les identifiants indiqués](../connexion-base-de-donnees-serveur-bdd/#en-pratique) et modifiez si besoin le [mot de passe de votre base de données](../modifier-mot-de-passe-base-de-donnees/).

#### « Too many connections »

>
> **« mysqli_real_connect(): (HY000/1040): Too many connections »**
>

Le nombre de connexions actives maximal pour les bases de données livrées avec les hébergements mutualisés ([StartSQL](https://www.ovh.com/fr/hebergement-web/options-sql.xml)) est de **30**. Elle est de **50** pour les bases des serveurs [SQL privé](../premiers-pas-avec-sql-prive/) et [Cloud Databases](https://www.ovh.com/fr/cloud-databases/).

Ce message apparaît lors de la [connexion à PhpMyAdmin](../creer-base-de-donnees/#acceder-a-linterface-phpmyadmin) lorsque ce nombre maximal de connexions est dépassé.

Dans cette situation, vous devrez [optimiser vos bases de données](../configurer-optimiser-son-serveur-de-base-de-donnees/#optimiser-vos-bases-de-donnees_1) afin de réduire le nombre de connexions actives.

> [!warning]
> 
> Pour toute question sur les manipulations à réaliser afin de réduire le nombre de connexions actives sur votre base de données, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

#### « Name or service not known »

>
> **« mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known »**
>

Ce message d'erreur apparaît lors de la [connexion à PhpMyAdmin](../connexion-base-de-donnees-serveur-bdd/#en-pratique) lorsque le nom de serveur renseigné est incorrect.

![name_or_service_not_known](images/name_or_service_not_known.png){.thumbnail}

Vérifiez le nom du serveur à inscrire dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

> [!success]
>
> Si la base à laquelle vous souhaitez vous connecter apparaît dans l'onglet `Bases de données`{.action} de la partie `Hébergements`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), le nom à renseigner est inscrit dans la colonne `Adresse du serveur`.
>
> Si vous souhaitez vous connecter à une base de données sur un serveur [SQL privé](../premiers-pas-avec-sql-prive/) ou [Cloud Databases](https://www.ovh.com/fr/cloud-databases/), le nom de serveur à renseigner est inscrit dans l'onglet `Informations générales`{.action}, partie `Informations de connexions`{.action}, `SQL`{.action} et dans la rubrique `Nom d'hôte`{.action}.
>

### Connexion impossible sur une base de données Cloud Databases

Disposer d'un serveur [Cloud Databases](https://docs.ovh.com/fr/clouddb/) vous permet de vous [connecter à vos bases de données](../connexion-base-de-donnees-serveur-bdd/) depuis votre ordinateur ou un serveur extérieur à l'infrastructure d'OVHcloud.

Si cette connexion s'avère impossible, commencez par vérifier que vous avez bien [autorisé votre adresse IP publique](../../../clouddb/debuter-avec-clouddb/#autoriser-une-adresse-ip) à se connecter au serveur de bases de données.

Si cette opération a bien été réalisée, contactez votre Fournisseur d'Accès Internet ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). Nous ne serons pas en mesure de vous fournir une assistance dans cette situation.

## Aller plus loin <a name="aller-plus-loin"></a>

[Premiers pas avec le service SQL Privé](../premiers-pas-avec-sql-prive/)

[Premiers pas avec le service CloudDB](../../../clouddb/debuter-avec-clouddb/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.