---
title: Résoudre les erreurs les plus fréquentes liées aux bases de données 
excerpt: "Diagnostiquez les cas les plus courants d'erreurs liées aux bases de données"
slug: erreurs-frequentes-bases-de-donnees
section: Diagnostic
order: 04
---

**Dernière mise à jour le 01/03/2023**

## Objectif

L'utilisation de vos bases de données peut entraîner un certain nombre d'anomalies sur votre site ou votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), ainsi que sur l'interface [PhpMyAdmin](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin).

**Découvrez comment résoudre les erreurs liées aux bases de données sur les hébergements mutualisés OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovhcloud.com/fr/web-hosting/) OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Utiliser l'une de nos offres de bases de données [Web Cloud](https://www.ovhcloud.com/fr/web-hosting/options/start-sql/) ou [Web Cloud Databases](https://www.ovh.com/fr/cloud-databases/).

## En pratique

### « Erreur lors de la connexion à la base de données »

![error_establishing_a_DB_connection](images/error_establishing_a_DB_connection.png){.thumbnail}

#### Vérifier les incidents en cours

Vérifiez tout d'abord sur [https://web-cloud.status-ovhcloud.com/](https://web-cloud.status-ovhcloud.com/) que votre datacentre, votre cluster d'hébergement, votre serveur Web Cloud Databases ou Cloud Databases n'est pas concerné par un incident sur l'infrastructure OVHcloud.

> [!primary]
>
> Pour retrouver ces informations, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans la partie `Web Cloud`{.action} :
>
> - Pour retrouver le `Datacentre` de votre hébergement, ainsi que son `Filer` (serveur de fichier), choisissez `Hébergements`{.action}, puis l'hébergement concerné. Vous trouverez ces informations dans l'onglet `Informations générales`{.action}.
> - Pour retrouver le **cluster** de serveurs sur lequel se trouve votre hébergement, cliquez sur l'onglet `FTP-SSH`{.action}. Cette information apparaîtra dans le nom de votre `Serveur FTP`.
> - Pour retrouver le nom de votre serveur **Web Cloud Databases**, cliquez sur `Bases de données`{.action} puis sur l'offre concernée. Vous trouverez cette information sous la mention `Nom d'hôte` dans la rubrique `SQL` de `Informations de connexion`.
>

#### Vérifier les identifiants de connexion à votre base de données <a name="config_file"></a>

Connectez-vous en [FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) à l'espace de stockage de fichiers sur votre hébergement et retrouvez le fichier de configuration de votre site (par exemple, pour un site WordPress, il s'agit du fichier **wp-config.php** situé dans le dossier contenant votre site).

> [!warning]
>
> Le choix et la configuration du fichier comportant les informations de connexion à la base de données est inhérent à l'éditeur de contenu (CMS) concerné et non à OVHcloud.
>
> Nous vous recommandons donc de vous rapprocher de l’éditeur du [CMS](https://docs.ovh.com/fr/hosting/modules-en-1-clic/) utilisé pour créer votre site ou de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) en cas de besoin. Nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

Vérifiez ensuite la correspondance **exacte** entre les identifiants de connexion à [PhpMyAdmin](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin) et ceux du fichier de configuration de votre site.

Changez, si nécessaire, le [mot de passe de votre base de données](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/).

#### Exemple pour WordPress

Si votre site affiche un message **« Erreur lors de la connexion à la base de données »** et qu'il n'est pas concerné par un [incident](https://web-cloud.status-ovhcloud.com/), connectez-vous en [FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) à votre hébergement puis ouvrez le répertoire contenant votre site (par défaut, il s'agit du dossier `www`).

S'il s'agit d'un site WordPress, ouvrez le fichier `wp-config.php`.

```php
define('DB_NAME', 'my_database');

/** MySQL database username */
define('DB_USER', 'my_user');

/** MySQL database password */
define('DB_PASSWORD', 'my_password');

/** MySQL hostname */
define('DB_HOST', 'my_server.mysql.db:port');
```

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans la partie `Hébergements`{.action}, cliquez sur l'onglet `Bases de données`{.action} puis vérifiez la correspondance entre les éléments affichés et ceux présents dans le fichier `wp-config.php` :

- **my_database** doit correspondre à ce qui est noté dans `Nom de la base`;
- **my_user** doit correspondre à ce qui est noté dans `Nom d'utilisateur`;
- **my_password** correspond au [mot de passe de votre base de données](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/);
- **my_server.mysql.db** doit correspondre à ce qui est noté dans `Adresse du serveur`.

> [!primary]
>
> Si ces manipulations ne vous permettent pas de rétablir l'accès à votre site, [sauvegardez votre base de données](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/) puis [restaurez-la à une date antérieure](https://docs.ovh.com/fr/hosting/restaurer-importer-base-de-donnees/#1-restaurer-une-sauvegarde-existante) depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
>
> Contactez ensuite un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si nécessaire. Nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Dépassement du quota autorisé de la base de données

Vous avez reçu un e-mail de nos services indiquant que la quantité de données sur votre base dépasse la limite autorisée. Votre base est donc passée en lecture seule. Ceci empêche toute modification de votre site.

![mail_overquota](images/mail_overquota.png){.thumbnail}

Trois méthodes vous permettront de débloquer votre base de données :

#### Méthode 1 : passer votre abonnement sur une offre supérieure

Si vous disposez d'une formule **Perso2014** ou **Pro2014**, nous vous conseillons dans cette situation de passer sur l'[offre d'hébergement supérieure](https://www.ovhcloud.com/fr/web-hosting/). Ce changement d'abonnement augmentera la taille de votre base de données, ce qui la réouvrira automatiquement. Cette méthode est la plus simple et ne nécessite aucune compétence technique particulière.

> [!warning]
>
> L'augmentation de la taille de votre base de données peut être liée à un dysfonctionnement dans le code interne de votre site.
>
> Dans ce cas, le changement d'offre d'hébergement est inefficace, car votre base de données continuera à se remplir.
>
> Nous vous conseillons donc, si vous constatez une augmentation soudaine de la taille de votre base de données ou si vous disposez d'un site de type « blog » normalement peu consommateur de données, de contacter immédiatement un [prestataire spécialisé](https://partner.ovhcloud.com/fr/). Nous ne serons pas en mesure de vous apporter un support sur ce sujet.
>

Pour effectuer ce changement, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) puis cliquez sur `Hébergements`{.action}, puis sur l'hébergement concerné. Cliquez sur le bouton `...`{.action} dans la rubrique `Offre` sur la droite de votre écran puis sur `Changer d'offre`{.action}.

Si vous utilisez une offre **Performance**, reportez-vous à la [méthode 2](#methode2).

#### Méthode 2 : migrer vos données sur une base de taille supérieure <a name="methode2"></a>

Vous pouvez également migrer vos données sur une nouvelle base :

- Commandez, si nécessaire, une [base de données](https://www.ovhcloud.com/fr/web-hosting/options/start-sql/) de taille supérieure puis lancez sa [création](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/);
- Effectuez un [export de vos données](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/), puis [importez-les](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/) dans la nouvelle base;
- Intégrez les identifiants de la nouvelle base de données dans le [fichier de configuration](#config_file) de votre site.

> [!primary]
>
> Si vous disposez d'un hébergement **Performance**, vous pouvez également [activer gratuitement un serveur Web Cloud Databases](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/#activation-de-votre-serveur-clouddb-inclus-avec-votre-offre-dhebergement-web).
>

#### Méthode 3 : supprimer les données inutiles

Après avoir effectué une [sauvegarde de votre base de données](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/), connectez-vous à votre interface [PhpMyAdmin](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin) afin de supprimer les données inutiles grâce aux commandes Drop, Delete et Truncate.

Relancez ensuite le calcul du quota utilisé depuis l'onglet `Bases de données`{.action} de l'hébergement concerné : cliquez sur le bouton `...`{.action} concerné puis sur `Recalculer le quota`{.action}.

> [!warning]
>
> Cette opération nécessite de fortes compétences techniques. Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) en cas de besoin pour la réaliser. Nous ne serons pas en mesure de vous apporter une assistance sur ce sujet.
>

#### Méthode 4 : optimiser votre base de données

Pour optimiser votre base de données, suivez les instructions de notre guide « [Configurer votre serveur de bases de données](https://docs.ovh.com/fr/hosting/configurer-optimiser-son-serveur-de-base-de-donnees/#optimiser-vos-bases-de-donnees_1) ». Relancez ensuite le calcul du quota utilisé depuis l'onglet `Bases de données`{.action} de votre hébergement, en cliquant sur le bouton `...`{.action} de la base de données concernée.

> [!warning]
>
> Si les conseils fournis sur l'optimisation de votre base de données ne suffisaient pas à débloquer l'accès à votre site, nous vous conseillons de contacter notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Dépassements de la mémoire RAM

Le message suivant dans la partie `Bases de données`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) indique que votre serveur [Web Cloud Databases](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/) ou [Cloud Databases](https://www.ovh.com/fr/cloud-databases/) a consommé une quantité de ressources trop importantes sur l'infrastructure OVHcloud :

![quota_exceeding](images/quota_exceeding.png){.thumbnail}

Dans cette situation, vous pouvez augmenter la [quantité de mémoire RAM](https://docs.ovh.com/fr/hosting/configurer-optimiser-son-serveur-de-base-de-donnees/#modifier-loffre-du-serveur-de-bases-de-donnees_1) disponible depuis la partie `Bases de données`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Dans l'onglet `Informations générales`{.action}, cliquez sur le bouton `...`{.action} dans la rubrique `RAM`.

> [!warning]
>
> Pour augmenter sa RAM, le Web Cloud Databases ne doit pas avoir été activé via un hébergement Performance. Si vous souhaitez augmenter la quantité de mémoire vive d'une base de données incluse dans les [offres performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/){.external}, il vous faut d'abord en délier cette base de données.
>
> Pour délier la base de données, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et sélectionnez l'onglet `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} puis choisissez l'hébergement web sur lequel le Web Cloud Databases est activé.
>
> Dans la zone `Configuration`, cliquez sur le bouton `...`{.action} à droite de l'entrée de la `Base de données privée` puis cliquez sur le bouton `Délier`{.action}.
>

Vous pouvez également optimiser votre base de données en suivant les instructions de notre guide « [Configurer votre serveur de bases de données](https://docs.ovh.com/fr/hosting/configurer-optimiser-son-serveur-de-base-de-donnees/#optimiser-vos-bases-de-donnees_1) ».

> [!primary]
>
> Si vous rencontrez des difficultés à diminuer l'utilisation des ressources sur votre serveur de bases de données et que vous ne souhaitez pas les augmenter, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). Nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Erreurs d'import de bases de données

#### « Access denied for user to database »

>
> **« #1044 - Access denied for user to database »**
>

Ce message d'erreur signifie que la base de données que vous tentez d'importer contient des éléments non autorisés sur l'infrastructure mutualisée OVHcloud.

Assurez-vous tout d'abord que votre base de données est vide depuis l'onglet `Bases de données`{.action} de l'hébergement concerné (cliquez sur le bouton `...`{.action} concerné puis sur `Recalculer le quota`{.action}).

Dans le cas contraire, [sauvegardez les données présentes](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/) dans votre base puis supprimez-les avant de relancer l'opération d'import.

Vous pouvez également cocher la case `Vider la base de données actuelle`{.action} juste avant de [lancer l'import](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/#importer-votre-propre-sauvegarde-depuis-lespace-client) :

![database-import-empty](images/database-import-empty.png){.thumbnail}

Contactez si besoin notre [communauté d'utilisateurs](https://community.ovh.com) ou un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) à ce sujet. Nous ne serons pas en mesure de vous fournir une assistance sur la correction de cette anomalie.

> [!faq]
>
> Quels éléments dans le script d'import de ma base de données peuvent causer une erreur « #1044 - Access denied for user to database » ?

Avoir un **« trigger »** dans votre script n'est, par exemple, pas autorisé sur les serveurs d'hébergement mutualisé OVHcloud. Dans cette situation, importez votre base de données sur un serveur [Web Cloud Databases](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/) ou [Cloud Databases](https://www.ovh.com/fr/cloud-databases/).

Par ailleurs, la requête suivante n'est pas autorisée :

```mysql
CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci; 
```

Remplacez-la par :

```mysql
USE `Database-Name`;
```

(`Database-Name` : indiquez le nom de la base de données indiqué dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))

#### « MySQL server has gone away »

>
> **« ERROR 2006 : MySQL server has gone away »**
>

Ce message d'erreur apparaît lors de [l'import d'une base de données](https://docs.ovh.com/fr/hosting/restaurer-importer-base-de-donnees/#2-importer-une-sauvegarde-locale) sur un serveur [Web Cloud Databases](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/). Il est lié la plupart du temps à la quantité trop importante de données à importer ou à un manque d'optimisation des requêtes SQL dans le script d'import.

Pour résoudre cette anomalie, vous pouvez :

- Augmenter la [quantité de mémoire vive (RAM)](https://docs.ovh.com/fr/hosting/configurer-optimiser-son-serveur-de-base-de-donnees/#suivre-la-ram-consommee). Pour cela, rendez vous sur le [serveur Web Cloud Databases](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/) concerné dans la rubrique `Bases de données`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez ensuite sur le bouton `...`{.action} dans la partie `RAM`, puis sur `Changer la quantité de RAM`{.action}.

- Fractionner votre base de données, afin de l'importer en plusieurs opérations au lieu d'une seule (pour toute question sur les manipulations à réaliser, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.)

- [Optimisez votre base de données](https://docs.ovh.com/fr/hosting/configurer-optimiser-son-serveur-de-base-de-donnees/#optimiser-vos-bases-de-donnees_1) puis répétez les opérations d'export / import.

### Impossible d'accéder à PhpMyAdmin

#### « Access denied for user »

>
> **« mysqli::real_connect(): (HY000/1045): Access denied for user »**
>

Ce message d'erreur peut apparaître lors de la connexion à votre base de données par [PhpMyAdmin](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin). Elle indique que les identifiants renseignés sont erronés.

![access_denied_for_user](images/access_denied_for_user.png){.thumbnail}

Dans cette situation, [vérifiez les identifiants renseignés](https://docs.ovh.com/fr/hosting/connexion-base-de-donnees-serveur-bdd/#en-pratique) et modifiez si besoin le [mot de passe de votre base de données](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/).

#### « Too many connections »

>
> **« mysqli_real_connect(): (HY000/1040): Too many connections »**
>

Le nombre maximal de connexions actives pour les bases de données livrées avec les hébergements mutualisés ([StartSQL](https://www.ovhcloud.com/fr/web-hosting/options/start-sql/)) est de **30**.

Ce nombre est de **200** pour les bases des serveurs [Web Cloud Databases](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/) et [Cloud Databases](https://www.ovh.com/fr/cloud-databases/)  (Ce paramètre est modifiable dans la partie `Configuration`{.action} de votre serveur de base de données).

Ce message apparaît lors de la [connexion à PhpMyAdmin](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin) lorsque ce nombre maximal de connexions est dépassé.

Dans cette situation, vous devrez [optimiser vos bases de données](https://docs.ovh.com/fr/hosting/configurer-optimiser-son-serveur-de-base-de-donnees/#optimiser-vos-bases-de-donnees_1) afin de réduire le nombre de connexions actives.

> [!warning]
>
> Pour toute question sur les manipulations à réaliser afin de réduire le nombre de connexions actives sur votre base de données, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

#### « Name or service not known »

>
> **« mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known »**
>

Ce message d'erreur apparaît lors de la [connexion à PhpMyAdmin](https://docs.ovh.com/fr/hosting/connexion-base-de-donnees-serveur-bdd/#en-pratique) lorsque le nom de serveur renseigné est incorrect.

![name_or_service_not_known](images/name_or_service_not_known.png){.thumbnail}

Vérifiez le nom du serveur à inscrire dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

> [!success]
>
> Si la base à laquelle vous souhaitez vous connecter apparaît dans l'onglet `Bases de données`{.action} de la partie `Hébergements`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), le nom à renseigner est inscrit dans la colonne `Adresse du serveur`.
>
> Si vous souhaitez vous connecter à une base de données sur un serveur [Web Cloud Databases](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/) ou [Cloud Databases](https://www.ovh.com/fr/cloud-databases/), le nom de serveur à renseigner est inscrit dans l'onglet `Informations générales`{.action}, partie `Informations de connexions`{.action}, `SQL`{.action} et dans la rubrique `Nom d'hôte`{.action}.
>

### Connexion impossible sur une base de données Cloud Databases

Disposer d'un serveur [Cloud Databases](https://docs.ovh.com/fr/clouddb/) vous permet de vous [connecter à vos bases de données](https://docs.ovh.com/fr/hosting/connexion-base-de-donnees-serveur-bdd/) depuis votre ordinateur ou un serveur extérieur à l'infrastructure d'OVHcloud.

Si cette connexion s'avère impossible, commencez par vérifier que vous avez bien [autorisé votre adresse IP publique](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/#autoriser-une-adresse-ip) à se connecter au serveur de bases de données.

Si cette opération a bien été réalisée, contactez votre Fournisseur d'Accès à Internet ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). Nous ne serons pas en mesure de vous fournir une assistance dans cette situation.

## Aller plus loin <a name="aller-plus-loin"></a>

[Premiers pas avec le service Web Cloud Databases](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/)

[Premiers pas avec le service Web Cloud Databases](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
