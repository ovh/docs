---
title: Résoudre les erreurs les plus fréquentes liées aux bases de données 
excerpt: Diagnostiquez les cas les plus courants d'erreurs liées aux bases de données
slug: erreurs-frequentes-bases-de-donnees
section: Diagnostic
order: 4
---

**Dernière mise à jour le 14/09/2021**

## Objectif

L'utilisation de vos bases de données peut entraîner un certain nombre d'anomalies sur votre site ou votre espace client OVHcloud, ainsi que sur l'interface PhpMyAdmin.

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

#### Vérifier les identifiants de connexion à votre base de données <a name="config_file"></a>

Connectez-vous en [FTP](../connexion-espace-stockage-ftp-hebergement-web/) à votre espace de stockage et retrouvez le fichier de configuration de votre site (Par exemple, pour un site **Wordpress**, il s'agit du fichier **wp-config.php** situé dans le dossier contenant votre site).

> [!warning]
>
> Le choix du fichier comportant les informations de la base de données est inhérent à sa configuration et non à OVHcloud. 
> Nous vous recommandons de vous rapprocher de l’éditeur du [CMS](../modules-en-1-clic/) ou de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous souhaitez obtenir de l’aide pour réaliser les manipulations sur ce fichier.
>

Vérifiez ensuite la correspondance exacte entre les identifiants de connexion à [PhpMyAdmin](../exportation-bases-donnees/#recuperer-une-sauvegarde-depuis-linterface-web-phpmyadmin_1) (Vérifiez simplement si les identifiants indiqués et le mot de passe vous permettent d'ouvrir cette interface) et ceux du fichier de configuration de votre site.

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

Pour effectuer ce changement, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), puis cliquez sur `Hébergements`{.action}, puis l'hébergement concerné. Cliquez sur le bouton `...`{.action} dans la partie `Offre` sur la droite de l'écran, afin de `Changer d'offres`{.action}.

Si vous utilisez une offre **Performance**, reportez-vous à la [méthode 2](#methode2).

#### Méthode 2 : migrer vos données sur une base de taille supérieure <a name="methode2"></a>

Vous pouvez également migrer vos données sur une nouvelle base :

- Commandez, si nécessaire, une [base de données](https://www.ovh.com/fr/hebergement-web/options-sql.xml) de taille supérieure puis lancez sa [création](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/);

- Effectuez un [export de vos données](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/), puis [importez-les](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/) dans la nouvelle base;

- Intégrez les identifiants de la nouvelle base dans le [fichier de configuration](#config_file) de votre site.

> [!primary]
>
> Si vous disposez d'un hébergement **Performance**, vous pouvez également [activer le serveur SQL Privé](https://docs.ovh.com/fr/hosting/premiers-pas-avec-sql-prive/#activation-de-votre-serveur-sql-prive-inclus-avec-votre-offre-dhebergement-web) inclus dans votre offre.
>

#### Méthode 3 : supprimer les données inutiles

Après avoir effectué une [sauvegarde de votre base de données](), vous pouvez enfin vous [connecter à votre interface PhpMyAdmin](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/#recuperer-une-sauvegarde-depuis-linterface-web-phpmyadmin_1), afin de supprimer les données inutiles dans votre base puis relancer le calcul du quota utilisé  depuis l'onglet `Bases de données`{.action} de l'hébergement concerné.

> [!warning]
>
> Cette opération nécessite de fortes compétences techniques et nous vous conseillons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) pour la réaliser.
>

#### Méthode 3 : Optimiser votre base de données

Pour optimiser votre base de données, suivez les instructions de ce [guide](/configurer-optimiser-son-serveur-de-base-de-donnees/#optimiser-vos-bases-de-donnees_1) puis relancer le calcul du quota utilisé  depuis l'onglet `Bases de données`{.action} de l'hébergement concerné en cliquant sur le bouton `...`{.action} concerné.

> [!warning]
>
> Si les conseils fournis sur l'optimisation de votre base de données ne suffisaient pas à débloquer l'accès à votre site, nous vous conseillons de contacter notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Dépassements de la mémoire RAM

Le message suivant dans la partie `Bases de données`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) indique que votre serveur [SQL privé](https://www.ovh.com/fr/hebergement-web/options-sql.xml) ou [CloudDB](https://www.ovh.com/fr/cloud-databases/) a été trop sollicité par les sites de vos hébergements :

![quota_exceeding](images/quota_exceeding.png){.thumbnail}

Dans cette situation, vous pouvez augmenter la [quantité de mémoire RAM](../configurer-optimiser-son-serveur-de-base-de-donnees/#suivre-la-ram-consommee) disponible depuis la partie `Bases de données`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Dans l'onglet  cliquez sur le bouton `...`{.action} dans la rubrique `RAM`.

Vous pouvez également optimiser les performances de votre site en suivant les instructions de ce [guide](../optimisation-performances-site/).

> [!primary]
>
> Si vous rencontrez des difficultés à diminuer l'utilisation des ressources de votre serveur de bases de données et que vous ne souhaitez pas les augmenter, nous vous conseillons de contacter notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Erreurs d'import de bases de données

#### Access denied for user

Assurez-vous tout d'abord que votre base de données est bien vide avant de lancer l'import. Au besoin, relancez le calcul du quota utilisé depuis l'onglet `Bases de données`{.action} de l'hébergement concerné. Vous pouvez également cocher la case `Vider la base de données actuelle`{.action} juste avant de [lancer l'import](../mutualise-guide-importation-dune-base-de-donnees-mysql/#importer-votre-propre-sauvegarde-depuis-lespace-client) :

![database-import-empty](images/database-import-empty.png){.thumbnail}

Ce message d'erreur signifie que la base de données que vous tentez d'importer contient des éléments non autorisés sur l'infrastructure mutualisée OVHcloud. Nous vous invitons à contacter notre [communauté d'utilisateurs](https://community.ovh.com) ou un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) à ce sujet.

> [!success]
>
> Avoir un « trigger » dans le script d'import de votre base de données n'est pas autorisé sur les hébergements mutualisés. Dans cette situation, importez votre base de données sur un serveur [SQL privé](https://www.ovh.com/fr/hebergement-web/options-sql.xml) ou [CloudDB](https://www.ovh.com/fr/cloud-databases/).
>
> La requête suivante n'est également pas autorisée :
>
>```bash
>CREATE DATABASE IF NOT EXISTS `nom-base-de-donnees` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci; 
>```
> Remplacez là par :
>```bash
>USE `Database-Name`;
>```
>(`Database-Name` : Indiquez le nom de la base de données indiqué dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
>

#### MySQL server has gone away

Ce message d'erreur peut apparaître lors de [l'import d'une base de données](../restaurer-importer-base-de-donnees/#2-importer-une-sauvegarde-locale) sur un serveur [SQL Privé](../premiers-pas-avec-sql-prive/). Il est lié la plupart du temps à la quantité trop importante de données à importer ou à un manque d'optimisation des requêtes SQL dans le script d'import.

Pour résoudre cette anomalie, vous pouvez :

- Augmenter la quantité de mémoire vive (RAM), rendez vous sur le serveur SQL privé concerné dans la rubrique « Bases de données » de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez ensuite sur le bouton ... dans la partie RAM, puis Changer la quantité de RAM.

- Fractionner votre base de données, afin de l'importer en plusieurs opérations au lieu d'une seule (Pour toute question sur les manipulations à réaliser, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.)

- [Optimisez votre base de données](../configurer-optimiser-son-serveur-de-base-de-donnees/#optimiser-vos-bases-de-donnees_1) puis répétez les opérations d'export / import.

### Impossible d'accéder à PhpMyAdmin

#### Access denied for user

Ce message d'erreur peut apparaître lors de la connexion à votre base de données par [PhpMyAdmin](../exportation-bases-donnees/#recuperer-une-sauvegarde-depuis-linterface-web-phpmyadmin_1). Elle indique que les identifiants indiqués sont erronés.

![access_denied_for_user](images/access_denied_for_user.png){.thumbnail}

Dans cette situation, [vérifiez les identifiants indiqués](../connexion-base-de-donnees-serveur-bdd/#en-pratique) et modifiez si besoin le [mot de passe de votre base de données](../modifier-mot-de-passe-base-de-donnees/).

#### Too many connections

Le nombre de connexions actives maximale pour les bases de données livrées avec les hébergements mutualisés (StartSQL) est de 30 et de 50 pour celles des serveurs SQL privé et CloudDB.

Ce message d'erreur apparaît lors de la [connexion à PhpMyAdmin](../connexion-base-de-donnees-serveur-bdd/#en-pratique) lorsque ce nombre de connexions est dépassé.

![too_many_connections](images/too_many_connections.png){.thumbnail}

Dans cette situation, vous devrez [optimiser vos bases de données](../configurer-optimiser-son-serveur-de-base-de-donnees/#optimiser-vos-bases-de-donnees_1) afin de réduire le nombre de connexions actives.

> [!warning]
> 
> Pour toute question sur les manipulations à réaliser afin de réduire le nombre de connexions actives sur votre base de données, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

#### Name or service not known

Ce message d'erreur apparaît lors de la [connexion à PhpMyAdmin](../connexion-base-de-donnees-serveur-bdd/#en-pratique) lorsque le nom de serveur renseigné est incorrect.

![name_or_service_not_known](images/name_or_service_not_known.png){.thumbnail}

Vérifiez le nom du serveur à inscrire dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

> [!success]
>
> Si la base à laquelle vous souhaitez vous connecter apparaît dans l'onglet `Bases de données`{.action} de votre hébergement sur votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), le nom à renseigner est inscrit dans la colonne `Adresse du serveur`.
>
> Si vous souhaitez vous connecter à une base de données sur un serveur [SQL privé](https://www.ovh.com/fr/hebergement-web/options-sql.xml) ou [CloudDB](https://www.ovh.com/fr/cloud-databases/), le nom de serveur à renseigner est inscrit dans l'onglet `Informations générales`{.action}, partie `Informations de connexions`{.action}, `SQL`{.action} et dans la rubrique `Nom d'hôte`{.action}.
> 


### Connexion impossible depuis l'extérieur de l'infra (CloudDB)

## Aller plus loin <a name="aller-plus-loin"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.