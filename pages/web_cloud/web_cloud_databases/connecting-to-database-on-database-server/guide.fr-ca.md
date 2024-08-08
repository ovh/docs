---
title: "Se connecter à la base de données de votre serveur de bases de données"
excerpt: "Découvrez comment se connecter à votre base de données"
updated: 2023-10-31
---

## Objectif

Il est possible de consulter le contenu de votre base de données via une interface. Pour cela, il existe plusieurs moyens de s'y connecter.

**Découvrez comment vous connecter à votre base de données sur votre serveur de bases de données.**

## Prérequis

- Disposer d'une [instance Web Cloud Databases](/links/web/databases){.external} (incluse dans une offre d'[hébergement web Performance](/links/web/hosting)).
- Être connecté à votre [espace client OVHcloud](/links/manager){.external}.

## En pratique

> [!primary]
>
> Il est à noter que les offres [Web Cloud Databases](/links/web/databases){.external} ne donnent pas accès au système de gestion de base de données, mais aux bases de données hébergées sur celui-ci. 
> <br> - Il n'y a pas d'accès super utilisateur « root ». 
> <br> - Les commandes SQL génériques fonctionnent normalement, et les logiciels de type HeidiSQL, SQuirreL SQL ou Adminer sont pleinement compatibles.
> 

### Se connecter à une base de données MySQL ou MariaDB

> [!primary]
>
> MariaDB étant un dérivé de MySQL, les différentes commandes sont exactement les mêmes pour ces deux types de bases de données.
> 

#### Par phpMyAdmin OVHcloud 

Connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`. Cliquez sur l'onglet `Web Cloud Databases`{.action} dans la colonne de gauche puis sélectionnez le nom de votre serveur de bases de données.

Depuis l'onglet `Informations générales`, vous trouverez le lien d'accès à phpMyAdmin dans le cadre **« Administration de la base de données »** sous la mention « Interface utilisateur ».

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}

Vous arrivez sur la page de connexion de phpMyAdmin.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}

Renseignez les éléments suivants pour vous connecter à votre base de données :

- **Serveur :** renseignez le *nom d'hôte* de votre serveur de bases de données suivi de son *numéro de port*. Le *numéro de port* doit être séparé du *nom d'hôte* par un « **espace** » ou par « **:** ». Par exemple, si le *nom d'hôte* est **aaXXXXX-XXX.eu.clouddb.ovh.net** et le *numéro de port* est **12345**, il faudrait alors saisir **aaXXXXX-XXX.eu.clouddb.ovh.net:12345** ou **aaXXXXX-XXX.eu.clouddb.ovh.net 12345**. Pour retrouver le *nom d'hôte* et le *numéro de port* de votre serveur Web Cloud Databases, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`. Cliquez sur l'onglet `Web Cloud Databases`{.action} dans la colonne de gauche puis sélectionnez le nom de votre serveur de bases de données. Sur la page `Informations générales` qui s'affiche, vous retrouverez le *nom d'hôte* et le *numéro de port* dans l'encadré `Informations de connexion`.

- **Utilisateur :** renseignez le *nom d'utilisateur* de votre serveur de bases de données. Pour retrouver le *nom d'utilisateur* de votre base de données, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`. Cliquez sur l'onglet `Web Cloud Databases`{.action} dans la colonne de gauche puis sélectionnez le nom de votre serveur de bases de données. Sur la page qui s'affiche, cliquez sur l'onglet `Utilisateurs et droits`{.action}. Vous y trouverez un tableau avec l'ensemble des utilisateurs créés sur votre offre Web Cloud Databases.

- **Mot de passe :** renseignez le *mot de passe* associé au *nom d'utilisateur* concerné. Si vous ne vous souvenez plus du *mot de passe* associé à votre *nom d'utilisateur*, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web Cloud`. Cliquez sur l'onglet `Web Cloud Databases`{.action} dans la colonne de gauche puis sélectionnez le nom de votre serveur de bases de données. Sur la page qui s'affiche, cliquez sur l'onglet `Utilisateurs et droits`{.action}. Cliquez sur le bouton `...`{.action} situé à droite de *l'utilisateur* concerné pour `Changer le mot de passe`{.action}.

> [!warning]
>
> Si vous changez le mot de passe de l'utilisateur d'une base de données, toutes les applications/site web qui accèdent à cette base doivent être mises à jour en conséquence.
>

Si la connexion aboutit, la page suivante de phpMyAdmin apparaîtra.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **En cas d'erreur :**
> <br> - Erreur #1045, cela signifie que l'identification est incorrecte. Il faut donc vérifier votre nom d'utilisateur et/ou votre mot de passe.
> <br> - Erreur #2005, il est conseillé de vérifier le nom du serveur et si celui-ci est bien fonctionnel.
>

#### Connexion à la base de données hors espace client

> [!warning]
>
> Si vous utilisez une offre "Web Cloud Databases"/"SQL Privé", n'oubliez pas d'autoriser votre IP à l'aide du guide sur la [configuration de votre serveur de base de données](/pages/web_cloud/web_cloud_databases/configure-database-server).
>

Afin de vous connecter à votre base de données, assurez-vous de récupérer les informations suivantes :

- **Serveur :** le nom d'hôte de votre serveur est visible dans l'onglet `Informations générales`de votre serveur de bases de données, dans le cadre **« Administration de la base de données »** sous la mention « Nom d'hôte » de la partie **SQL**.
- **Utilisateur :** le nom d'utilisateur créé dans l'onglet `Utilisateurs et droits` de votre serveur de bases de données.
- **Mot de passe :** le mot de passe associé à l'utilisateur concerné.
- **Port :** le port est visible dans l'onglet `Informations générales`de votre serveur de bases de données, dans le cadre **« Administration de la base de données »** sous la mention « Port» de la partie **SQL**.
- **Nom de la base de données :** les bases de données sont listées dans l'onglet `Bases de données` de votre serveur de bases de données.

##### 1. Connexion en ligne de commande

```bash
mysql --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base
```

##### 2. Connexion par script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

##### 3. Connexion par logiciel (SQuirreL SQL)

> [!primary]
>
> Dans notre exemple nous utilisons le logiciel open source SQquirreL, mais d'autres interfaces comme HeidiSQL ou Adminer sont pleinement compatibles. 

- Lancez SQuirreL SQL et cliquez sur `Aliases`{.action}, puis sur `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Remplissez les champs ci-dessous puis validez avec le bouton `OK`{.action} :
    - **Name** : Choisissez un nom
    - **Driver** : Choisissez "MySQL Driver"
    - **URL** : Indiquez l'adresse du serveur et le port sous la forme jdbc:mysql://server:port
    - **User Name** : Indiquez le nom d'utilisateur
    - **Password** : Indiquez le mot de passe

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Validez à nouveau avec le bouton `Connect`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Vous êtes maintenant bien connecté à votre base de données :

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

##### 4. Connexion par phpMyAdmin

Vous pouvez utiliser votre propre interface phpMyAdmin pour explorer le contenu de votre base de données. Pour cela, installez phpMyAdmin sur votre propre serveur ou hébergement web. Durant cette installation, veillez à bien paramétrer les informations de votre serveur de bases de données et de votre base de données souhaitée afin que phpMyAdmin puisse s'y connecter.

### Se connecter a une base de données PostgreSQL 

Afin de vous connecter à votre base de données, assurez-vous de récupérer les informations suivantes :

- **Serveur :** le nom d'hôte de votre serveur est visible dans l'onglet `Informations générales`de votre serveur de bases de données, dans le cadre **« Administration de la base de données »** sous la mention « Nom d'hôte » de la partie **SQL**.
- **Utilisateur :** le nom d'utilisateur créé dans l'onglet `Utilisateurs et droits` de votre serveur de bases de données.
- **Mot de passe :** le mot de passe associé à l'utilisateur concerné.
- **Port :** le port est visible dans l'onglet `Informations générales`de votre serveur de bases de données, dans le cadre **« Administration de la base de données »** sous la mention « Port» de la partie **SQL**.
- **Nom de la base de données :** les bases de données sont listées dans l'onglet `Bases de données` de votre serveur de bases de données.

#### Connexion en ligne de commande

```bash
psql --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base
```

#### Connexion par script PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

#### Connexion par logiciel (SQuirreL SQL)

> [!primary]
>
> Dans notre exemple nous utilisons le logiciel open source SQquirreL, mais d'autres interfaces comme HeidiSQL ou Adminer sont pleinement compatibles.

- Lancez SQuirreL SQL et cliquez sur `Aliases`{.action}, puis sur `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Remplissez les champs ci-dessous puis validez avec le bouton `OK`{.action} :
    - **Name** : Choisissez un nom
    - **Driver** : Choisissez "PostgreSQL"
    - **URL** : Indiquez l'adresse du serveur et le port sous la forme jdbc:postgresql://server:port/database
    - **User Name** : Indiquez le nom d'utilisateur
    - **Password** : Indiquez le mot de passe

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Validez à nouveau avec le bouton `Connect`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Vous êtes maintenant bien connecté à votre base de données :

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).