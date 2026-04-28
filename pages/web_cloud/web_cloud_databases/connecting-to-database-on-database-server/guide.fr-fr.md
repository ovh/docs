---
title: "Web Cloud Databases - Se connecter à une base de données"
excerpt: "Découvrez comment se connecter à une base de données présente sur votre solution Web Cloud Databases"
updated: 2026-03-24
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

Il est possible de consulter le contenu de votre base de données via une interface. Pour cela, il existe plusieurs moyens de s'y connecter.

**Découvrez comment vous connecter à votre base de données sur votre serveur de bases de données.**

## Prérequis

- Disposer d'une [instance Web Cloud Databases](/links/web/databases) (incluse dans une offre d'[hébergement web Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Sélectionnez votre service de base de données

---
<!-- CP-NAV-END:web-cloud-databases -->

## En pratique

> [!primary]
>
> Les offres [Web Cloud Databases](/links/web/databases) ne donnent pas accès au système de gestion de base de données, mais aux bases de données hébergées sur celui-ci.
>
> - Il n'y a pas d'accès super utilisateur « root ».
> - Les commandes SQL génériques fonctionnent normalement, et les logiciels de type HeidiSQL, SQuirreL SQL ou Adminer sont pleinement compatibles.
> 

### Se connecter à une base de données MySQL ou MariaDB

> [!primary]
>
> MariaDB étant un dérivé de MySQL, les différentes commandes sont exactement les mêmes pour ces deux types de bases de données.
> 

#### Connexion via phpMyAdmin OVHcloud

<!-- CP-STEPS-START:mysql-phpmyadmin-ovhcloud -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Récupérez les informations de connexion suivantes :
>>
>> - **Serveur (nom d'hôte) et port :** visibles dans l'onglet `Informations générales`{.action}, encadré `Informations de connexion`.
>> - **Utilisateur :** visible dans l'onglet `Utilisateurs et droits`{.action}.
>> - **Mot de passe :** le mot de passe associé à l'utilisateur. Si vous l'avez oublié, rendez-vous dans l'onglet `Utilisateurs et droits`{.action}, cliquez sur `...`{.action} à droite de l'utilisateur concerné, puis sur `Changer le mot de passe`{.action}.
>>
>> > [!warning]
>> >
>> > Si vous changez le mot de passe de l'utilisateur d'une base de données, toutes les applications/sites web qui accèdent à cette base doivent être mises à jour en conséquence.
>>
> **Étape 3**
>>
>> Dans l'onglet `Informations générales`{.action}, repérez le cadre **Administration de la base de données** et cliquez sur le lien phpMyAdmin sous la mention **Interface utilisateur**.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}
>>
> **Étape 4**
>>
>> Sur la page de connexion de phpMyAdmin, renseignez les informations récupérées à l'étape 2 :
>>
>> ![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}
>>
>> - **Serveur :** saisissez le *nom d'hôte* suivi du *numéro de port*, séparés par « **:** » ou par un « **espace** ». Par exemple : **aaXXXXX-XXX.eu.clouddb.ovh.net:12345**.
>> - **Utilisateur :** saisissez le *nom d'utilisateur*.
>> - **Mot de passe :** saisissez le *mot de passe*.

Si la connexion aboutit, la page suivante apparaît.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **En cas d'erreur :**
>
> - Erreur #1045, cela signifie que l'identification est incorrecte. Il faut donc vérifier votre nom d'utilisateur et/ou votre mot de passe.
> - Erreur #2005, il est conseillé de vérifier le nom du serveur et si celui-ci est bien fonctionnel.

<!-- CP-STEPS-END:mysql-phpmyadmin-ovhcloud -->

#### Connexion à la base de données hors espace client

<!-- CP-STEPS-START:mysql-external-credentials -->
> [!warning]
>
> Si vous utilisez une offre « Web Cloud Databases »/« SQL Privé », n'oubliez pas d'autoriser votre IP à l'aide du guide sur la [configuration de votre serveur de base de données](/pages/web_cloud/web_cloud_databases/configure-database-server#gerer-vos-acces).

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Récupérez les informations de connexion suivantes :
>>
>> - **Serveur (nom d'hôte) :** visible dans l'onglet `Informations générales`{.action}, cadre **« Administration de la base de données »**, mention « Nom d'hôte » de la partie **SQL**.
>> - **Port :** visible au même endroit, mention « Port » de la partie **SQL**.
>> - **Utilisateur :** visible dans l'onglet `Utilisateurs et droits`{.action}.
>> - **Mot de passe :** le mot de passe associé à l'utilisateur concerné.
>> - **Nom de la base de données :** visible dans l'onglet `Bases de données`{.action}.

**Cliquez sur la méthode de connexion de votre choix pour afficher le contenu.**

/// details | Connexion en ligne de commande

```bash
mysql --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base
```

///

/// details | Connexion par script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Connexion par logiciel (SQuirreL SQL)

> [!primary]
>
> Dans notre exemple nous utilisons le logiciel open source SQuirreL, mais d'autres interfaces comme HeidiSQL ou Adminer sont pleinement compatibles.

- Lancez SQuirreL SQL et cliquez sur `Aliases`{.action}, puis sur `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Remplissez les champs ci-dessous puis validez avec le bouton `OK`{.action} :
    - **Name** : Choisissez un nom
    - **Driver** : Choisissez « MySQL Driver »
    - **URL** : Indiquez l'adresse du serveur et le port sous la forme jdbc:mysql://server:port
    - **User Name** : Indiquez le nom d'utilisateur
    - **Password** : Indiquez le mot de passe

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Validez à nouveau avec le bouton `Connect`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Vous êtes maintenant bien connecté à votre base de données :

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

/// details | Connexion par phpMyAdmin

Vous pouvez utiliser votre propre interface phpMyAdmin pour explorer le contenu de votre base de données. Pour cela, installez phpMyAdmin sur votre propre serveur ou hébergement web. Durant cette installation, veillez à bien paramétrer les informations de votre serveur de bases de données et de votre base de données souhaitée afin que phpMyAdmin puisse s'y connecter.

///

<!-- CP-STEPS-END:mysql-external-credentials -->

### Se connecter à une base de données PostgreSQL

<!-- CP-STEPS-START:postgresql-external-credentials -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Récupérez les informations de connexion suivantes :
>>
>> - **Serveur (nom d'hôte) :** visible dans l'onglet `Informations générales`{.action}, cadre **« Administration de la base de données »**, mention « Nom d'hôte » de la partie **SQL**.
>> - **Port :** visible au même endroit, mention « Port » de la partie **SQL**.
>> - **Utilisateur :** visible dans l'onglet `Utilisateurs et droits`{.action}.
>> - **Mot de passe :** le mot de passe associé à l'utilisateur concerné.
>> - **Nom de la base de données :** visible dans l'onglet `Bases de données`{.action}.

**Cliquez sur la méthode de connexion de votre choix pour afficher le contenu.**

/// details | Connexion en ligne de commande

```bash
psql --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base
```

///

/// details | Connexion par script PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Connexion par logiciel (SQuirreL SQL)

> [!primary]
>
> Dans notre exemple nous utilisons le logiciel open source SQuirreL, mais d'autres interfaces comme HeidiSQL ou Adminer sont pleinement compatibles.

- Lancez SQuirreL SQL et cliquez sur `Aliases`{.action}, puis sur `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Remplissez les champs ci-dessous puis validez avec le bouton `OK`{.action} :
    - **Name** : Choisissez un nom
    - **Driver** : Choisissez « PostgreSQL »
    - **URL** : Indiquez l'adresse du serveur et le port sous la forme jdbc:postgresql://server:port/database
    - **User Name** : Indiquez le nom d'utilisateur
    - **Password** : Indiquez le mot de passe

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Validez à nouveau avec le bouton `Connect`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Vous êtes maintenant bien connecté à votre base de données :

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

<!-- CP-STEPS-END:postgresql-external-credentials -->

## Aller plus loin

[Hébergement web - Ma base de données est saturée, que faire ?](/pages/web_cloud/web_hosting/sql_overquota_database).

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).