---
title: "Résoudre les erreurs les plus fréquentes liées aux bases de données"
excerpt: "Diagnostiquez les cas les plus courants d'erreurs liées aux bases de données"
updated: 2026-03-31
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

L'utilisation de vos bases de données peut entraîner un certain nombre d'anomalies sur votre site ou votre [espace client OVHcloud](/links/manager), ainsi que sur l'interface [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database).

**Découvrez comment résoudre les erreurs liées aux bases de données sur les hébergements mutualisés OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Ce guide vous accompagne sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web OVHcloud](/links/web/hosting).
- Utiliser l'une de nos offres de bases de données [Web Cloud](/links/web/hosting-options-startsql) ou [Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

### « Erreur lors de la connexion à la base de données »

![error_establishing_a_DB_connection](/pages/assets/screens/other/browsers/errors/error-establishing-a-db-connection.png){.thumbnail}

#### Vérifier les incidents en cours

Vérifiez tout d'abord sur la page [Web Cloud Status](https://web-cloud.status-ovhcloud.com/) que votre datacentre, votre cluster d'hébergement web, votre serveur Web Cloud Databases ou votre base de données ne sont pas concernés par un incident sur l'infrastructure OVHcloud.

**Cliquez sur l'information recherchée pour afficher le contenu.**

<!-- CP-STEPS-START:find-datacenter -->
/// details | Retrouver le Datacentre de votre hébergement web

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Hébergements web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans l'onglet `Informations générales`{.action}, repérez le `Datacentre`.

///
<!-- CP-STEPS-END:find-datacenter -->

/// details | Retrouver le cluster et le filer de votre hébergement web

Consultez notre guide « [Connaître le cluster et le filer de votre hébergement web](/pages/web_cloud/web_hosting/how_to_know_cluster_and_filer) ».

///

<!-- CP-STEPS-START:find-wcdb-server-name -->
/// details | Retrouver le nom du serveur Web Cloud Databases

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez l'offre concernée.
>>
>> ![Sélection d'un serveur Web Cloud Databases dans l'espace client OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Repérez la mention `Nom d'hôte` dans la rubrique `SQL` de `Informations de connexion`.

///
<!-- CP-STEPS-END:find-wcdb-server-name -->

/// details | Retrouver le serveur de votre base de données d'hébergement web

Consultez notre guide « [Retrouver le serveur de sa base de données](/pages/web_cloud/web_hosting/sql_find_server) ».

///

#### Vérifier les identifiants de connexion à votre base de données <a name="config_file"></a>

Connectez-vous en [FTP](/pages/web_cloud/web_hosting/ftp_connection) à l'espace de stockage de fichiers sur votre hébergement et retrouvez le fichier de configuration de votre site (par exemple, pour un site WordPress, il s'agit du fichier **wp-config.php** situé dans le dossier contenant votre site).

> [!warning]
>
> Le choix et la configuration du fichier comportant les informations de connexion à la base de données est inhérent à l'éditeur de contenu (CMS) concerné et non à OVHcloud.
>
> Nous vous recommandons donc de vous rapprocher de l’éditeur du [CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules) utilisé pour créer votre site ou de faire appel à un [prestataire spécialisé](/links/partner) en cas de besoin. Nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

Vérifiez ensuite la correspondance **exacte** entre les identifiants de connexion à [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-linterface-phpmyadmin) et ceux du fichier de configuration de votre site.

Changez, si nécessaire, le [mot de passe de votre base de données](/pages/web_cloud/web_hosting/sql_change_password).

#### Exemple pour WordPress

Si votre site affiche un message **« Erreur lors de la connexion à la base de données »** et qu'il n'est pas concerné par un [incident](https://web-cloud.status-ovhcloud.com/), connectez-vous en [FTP](/pages/web_cloud/web_hosting/ftp_connection) à votre hébergement puis ouvrez le répertoire contenant votre site (par défaut, il s'agit du dossier `www`).

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

<!-- CP-STEPS-START:check-wp-db-credentials -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Hébergements web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Bases de données`{.action} puis vérifiez la correspondance entre les éléments affichés et ceux présents dans le fichier `wp-config.php` :
>>
>> - **my_database** doit correspondre à ce qui est noté dans `Nom de la base`;
>> - **my_user** doit correspondre à ce qui est noté dans `Nom d'utilisateur`;
>> - **my_password** correspond au [mot de passe de votre base de données](/pages/web_cloud/web_hosting/sql_change_password);
>> - **my_server.mysql.db** doit correspondre à ce qui est noté dans `Adresse du serveur`.
<!-- CP-STEPS-END:check-wp-db-credentials -->

> [!primary]
>
> Si ces manipulations ne vous permettent pas de rétablir l'accès à votre site, [sauvegardez votre base de données](/pages/web_cloud/web_hosting/sql_database_export) puis [restaurez-la à une date antérieure](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#1-restaurer-une-sauvegarde-existante) depuis votre [espace client OVHcloud](/links/manager).
>
> Contactez ensuite un [prestataire spécialisé](/links/partner) si nécessaire. Nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Dépassement du quota autorisé de la base de données

Vous avez reçu un e-mail indiquant que votre base de données dépasse la limite autorisée. Passée en lecture seule, elle empêche toute modification de votre site.

![database-overquota-notification-email](/pages/assets/screens/email-sending-to-customer/databases/overquota-db.png){.thumbnail}

Trois méthodes vous permettront de débloquer votre base de données :

#### Méthode 1 : passer votre abonnement sur une offre supérieure

Si vous disposez d'une formule **Starter** ou **Perso**, nous vous conseillons dans cette situation de passer sur l'[offre d'hébergement supérieure](/links/web/hosting). Ce changement d'abonnement augmentera la taille de votre base de données, ce qui la réouvrira automatiquement. Cette méthode est la plus rapide et ne nécessite aucune compétence technique particulière.

> [!warning]
>
> L'augmentation de la taille de votre base de données peut être liée à un dysfonctionnement dans le code interne de votre site.
>
> Dans ce cas, le changement d'offre d'hébergement est inefficace, car votre base de données continuera à se remplir.
>
> Nous vous conseillons donc, si vous constatez une augmentation soudaine de la taille de votre base de données ou si vous disposez d'un site de type « blog » normalement peu consommateur de données, de contacter immédiatement un [prestataire spécialisé](/links/partner). Nous ne serons pas en mesure de vous apporter un support sur ce sujet.
>

<!-- CP-STEPS-START:upgrade-plan -->
Pour effectuer ce changement, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Hébergements web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le bouton `...`{.action} dans la rubrique `Offre` sur la droite de votre écran.
>>
> **Étape 3**
>>
>> Cliquez sur `Changer d'offre`{.action}.
<!-- CP-STEPS-END:upgrade-plan -->

#### Méthode 2 : migrer vos données sur une base de taille supérieure <a name="methode2"></a>

Vous pouvez également migrer vos données sur une nouvelle base :

- Commandez, si nécessaire, une [base de données](/links/web/hosting-options-startsql) de taille supérieure puis lancez sa [création](/pages/web_cloud/web_hosting/sql_create_database);
- [Dupliquez le contenu de l'ancienne base de données](/pages/web_cloud/web_hosting/copy_database) dans la nouvelle **ou** effectuez un [export de vos données](/pages/web_cloud/web_hosting/sql_database_export), puis [importez-les](/pages/web_cloud/web_hosting/sql_importing_mysql_database) dans la nouvelle base;
- Intégrez les identifiants de la nouvelle base de données dans le [fichier de configuration](#config_file) de votre site web.

> [!primary]
>
> Si vous disposez d'un hébergement **Performance**, vous pouvez également [activer gratuitement un serveur Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

#### Méthode 3 : supprimer les données inutiles

Après avoir effectué une [sauvegarde de votre base de données](/pages/web_cloud/web_hosting/sql_database_export), connectez-vous à votre interface [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-linterface-phpmyadmin) afin de supprimer les données inutiles grâce aux commandes Drop, Delete et Truncate.

<!-- CP-STEPS-START:recalculate-quota-method3 -->
Pour relancer le calcul du quota, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Hébergements web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Bases de données`{.action}, puis sur le bouton `...`{.action} à droite de la base de données concernée.
>>
> **Étape 3**
>>
>> Cliquez sur `Recalculer le quota`{.action}.
<!-- CP-STEPS-END:recalculate-quota-method3 -->

> [!warning]
>
> Cette opération nécessite de fortes compétences techniques. Nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) en cas de besoin pour la réaliser. Nous ne serons pas en mesure de vous apporter une assistance sur ce sujet.
>

#### Méthode 4 : optimiser votre base de données

Pour optimiser votre base de données, suivez les instructions de notre guide « [Configurer votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/configure-database-server#optimiser-vos-bases-de-donnees) ».

<!-- CP-STEPS-START:recalculate-quota-method4 -->
Pour relancer le calcul du quota, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Hébergements web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Bases de données`{.action}, puis sur le bouton `...`{.action} à droite de la base de données concernée.
>>
> **Étape 3**
>>
>> Cliquez sur `Recalculer le quota`{.action}.
<!-- CP-STEPS-END:recalculate-quota-method4 -->

> [!warning]
>
> Si les conseils fournis sur l'optimisation de votre base de données ne suffisaient pas à débloquer l'accès à votre site, nous vous conseillons de contacter notre [communauté d'utilisateurs](/links/community) ou les [partenaires OVHcloud](/links/partner). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Dépassements de la mémoire RAM (Web Cloud Databases uniquement)

Le message suivant indique que votre serveur [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) a consommé une quantité de ressources trop importantes sur l'infrastructure OVHcloud :

![ram-exceeded](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/ram-exceeded.png){.thumbnail}

<!-- CP-STEPS-START:increase-ram-wcdb -->
Pour augmenter la [quantité de mémoire RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#modifier-loffre-du-serveur-de-bases-de-donnees), cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Sélection d'un serveur Web Cloud Databases dans l'espace client OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans l'onglet `Informations générales`{.action}, repérez la rubrique `RAM`.
>>
> **Étape 3**
>>
>> Cliquez sur le bouton `...`{.action} dans la rubrique `RAM`, puis sur `Changer la quantité de la RAM`{.action}.
<!-- CP-STEPS-END:increase-ram-wcdb -->

> [!warning]
>
> Pour augmenter sa RAM, le Web Cloud Databases ne doit pas avoir été activé via un hébergement Performance. Si vous souhaitez augmenter la quantité de mémoire vive d'une base de données incluse dans les [offres performance](/links/web/hosting-performance-offer), il vous faut d'abord en délier cette base de données.
>
> Pour délier la base de données, consultez notre guide « [Détacher un Web Cloud Databases de votre hébergement web](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting) ».
>

Vous pouvez également optimiser votre base de données en suivant les instructions de notre guide « [Configurer votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/configure-database-server#optimiser-vos-bases-de-donnees) ».

> [!primary]
>
> Si vous rencontrez des difficultés à diminuer l'utilisation des ressources sur votre serveur de bases de données et que vous ne souhaitez pas les augmenter, contactez notre [communauté d'utilisateurs](/links/community) ou les [partenaires OVHcloud](/links/partner). Nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Erreurs d'import de bases de données

#### « Access denied for user to database »

>
> **« #1044 - Access denied for user to database »**
>

Ce message d'erreur signifie que la base de données que vous tentez d'importer contient des éléments non autorisés sur l'infrastructure mutualisée OVHcloud.

<!-- CP-STEPS-START:check-db-empty-before-import -->
Vérifiez d'abord que votre base de données est vide. Pour cela, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Hébergements web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Bases de données`{.action}, puis sur le bouton `...`{.action} à droite de la base de données concernée et sur `Recalculer le quota`{.action}.
>>
> **Étape 3**
>>
>> Si la base de données n'est pas vide, [sauvegardez les données présentes](/pages/web_cloud/web_hosting/sql_database_export) puis supprimez-les avant de relancer l'opération d'import.
>>
>> Vous pouvez également cocher la case `Vider la base de données actuelle`{.action} juste avant de [lancer l'import](/pages/web_cloud/web_hosting/sql_importing_mysql_database#importer-votre-propre-sauvegarde-depuis-lespace-client) :
>>
>> ![import-empty-current-db](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/import-empty-current-db.png){.thumbnail}
<!-- CP-STEPS-END:check-db-empty-before-import -->

Contactez si besoin notre [communauté d'utilisateurs](/links/community) ou un [prestataire spécialisé](/links/partner) à ce sujet. Nous ne serons pas en mesure de vous fournir une assistance sur la correction de cette anomalie.

> [!primary]
>
> **Quels éléments dans le script d'import de ma base de données peuvent causer une erreur « #1044 - Access denied for user to database » ?**

Avoir un **« trigger »** dans votre script n'est, par exemple, pas autorisé sur les serveurs d'hébergement mutualisé OVHcloud. Dans cette situation, importez votre base de données sur un serveur [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

Par ailleurs, la requête suivante n'est pas autorisée :

```sql
CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci; 
```

Remplacez-la par :

```sql
USE `Database-Name`;
```

(`Database-Name` : indiquez le nom de la base de données indiqué dans votre [espace client OVHcloud](/links/manager))

#### « MySQL server has gone away »

>
> **« ERROR 2006 : MySQL server has gone away »**
>

Ce message d'erreur apparaît lors de [l'import d'une base de données](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#2-importer-une-sauvegarde-locale) sur un serveur [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Il est lié la plupart du temps à la quantité trop importante de données à importer ou à un manque d'optimisation des requêtes SQL dans le script d'import.

<!-- CP-STEPS-START:increase-ram-for-import -->
Pour résoudre cette anomalie, vous pouvez :

- Augmenter la [quantité de mémoire vive (RAM)](/pages/web_cloud/web_cloud_databases/configure-database-server#suivre-la-ram-consommee). Pour cela, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Sélection d'un serveur Web Cloud Databases dans l'espace client OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans l'onglet `Informations générales`{.action}, repérez la rubrique `RAM`.
>>
> **Étape 3**
>>
>> Cliquez sur le bouton `...`{.action} dans la rubrique `RAM`, puis sur `Changer la quantité de la RAM`{.action}.
<!-- CP-STEPS-END:increase-ram-for-import -->

- Fractionner votre base de données, afin de l'importer en plusieurs opérations au lieu d'une seule (pour toute question sur les manipulations à réaliser, contactez notre [communauté d'utilisateurs](/links/community) ou les [partenaires OVHcloud](/links/partner). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.)

- [Optimisez votre base de données](/pages/web_cloud/web_cloud_databases/configure-database-server#optimiser-vos-bases-de-donnees) puis répétez les opérations d'export / import.

### Impossible d'accéder à PhpMyAdmin

#### « Access denied for user »

>
> **« mysqli::real_connect(): (HY000/1045): Access denied for user »**
>

Ce message d'erreur peut apparaître lors de la connexion à votre base de données par [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-linterface-phpmyadmin). Il indique que les identifiants renseignés sont erronés.

![access_denied_for_user](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-1045.png){.thumbnail}

Dans cette situation, [vérifiez les identifiants renseignés](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#en-pratique) et modifiez si besoin le [mot de passe de votre base de données](/pages/web_cloud/web_hosting/sql_change_password).

#### « Too many connections »

>
> **« mysqli_real_connect(): (HY000/1040): Too many connections »**
>

Le nombre maximal de connexions actives pour les bases de données livrées avec les hébergements mutualisés ([StartSQL](/links/web/hosting-options-startsql)) est de **30**.

Ce nombre est de **200** pour les bases des serveurs [Web Cloud Databases](/links/web/databases) (ce paramètre est modifiable dans les [paramètres de configuration](/pages/web_cloud/web_cloud_databases/configure-database-server) de votre serveur de base de données).

Ce message apparaît lors de la [connexion à PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-linterface-phpmyadmin) lorsque ce nombre maximal de connexions est dépassé.

Dans cette situation, vous devrez [optimiser vos bases de données](/pages/web_cloud/web_cloud_databases/configure-database-server#optimiser-vos-bases-de-donnees) afin de réduire le nombre de connexions actives.

> [!warning]
>
> Pour toute question sur les manipulations à réaliser afin de réduire le nombre de connexions actives sur votre base de données, contactez notre [communauté d'utilisateurs](/links/community) ou les [partenaires OVHcloud](/links/partner). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

#### « Name or service not known »

>
> **« mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known »**
>

Ce message d'erreur apparaît lors de la [connexion à PhpMyAdmin](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#en-pratique) lorsque le nom de serveur renseigné est incorrect.

![name_or_service_not_known](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-2002.png){.thumbnail}

Vérifiez le nom du serveur à inscrire.

**Cliquez sur la situation de votre choix pour afficher le contenu.**

<!-- CP-STEPS-START:find-server-name-hosting -->
/// details | Base de données sur un hébergement web

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Hébergements web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Bases de données`{.action}. Le nom du serveur à renseigner est inscrit dans la colonne `Adresse du serveur`.

///
<!-- CP-STEPS-END:find-server-name-hosting -->

<!-- CP-STEPS-START:find-server-name-wcdb -->
/// details | Base de données sur un serveur Web Cloud Databases

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Sélection d'un serveur Web Cloud Databases dans l'espace client OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans l'onglet `Informations générales`{.action}, le nom du serveur à renseigner est inscrit dans la partie `Informations de connexion`, rubrique `SQL`, mention `Nom d'hôte`.

///
<!-- CP-STEPS-END:find-server-name-wcdb -->

### Connexion impossible sur une base de données Cloud Databases

Disposer d'un serveur [Web Cloud Databases](/products/web-cloud-clouddb) vous permet de vous [connecter à vos bases de données](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) depuis votre ordinateur ou un serveur extérieur à l'infrastructure d'OVHcloud.

Si cette connexion s'avère impossible, commencez par vérifier que vous avez bien [autorisé votre adresse IP publique](/pages/web_cloud/web_cloud_databases/starting_with_clouddb#autoriser-une-adresse-ip) à se connecter au serveur de bases de données.

Si cette opération a bien été réalisée, contactez votre fournisseur d'accès à Internet ou les [partenaires OVHcloud](/links/partner). Nous ne serons pas en mesure de vous fournir une assistance dans cette situation.

## Aller plus loin <a name="go-further"></a>

[Premiers pas avec le service Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).