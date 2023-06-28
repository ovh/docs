---
title: 'Tutoriel - Installer manuellement un CMS sur mon hébergement'
excerpt: 'Découvrez comment installer manuellement un CMS sur votre hébergement'
updated: 2023-03-09
---

**Dernière mise à jour le 09/03/2023**

## Objectif

Ce tutoriel a pour objectif de vous aider à installer manuellement un CMS (Content Management System) tel que WordPress, Joomla!, Drupal ou PrestaShop en quelques étapes.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) ou l'éditeur du CMS ue vous aurez choisi d'installer si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>
> Pour contacter les différents éditeurs des CMS cités ci-dessus, retrouvez ci-après les liens vers leurs pages officielles respectives :
>
> - [WordPress](https://wordpress.com/fr/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}
>

> [!success]
>
> Pour installer votre CMS **automatiquement** depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), consultez notre documentation sur l'[installation d'un module « en un clic »](/pages/web/hosting/cms_install_1_click_modules).
>

**Découvrez comment configurer votre site web en installant manuellement un CMS.**

## Prérequis

- Disposer d'une offre d'[hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/) qui contient au moins une base de données.
- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr-ca/domains/)
- Être connecté à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}

## En pratique

### Présentation des CMS

Pour vous aider à choisir votre CMS, découvrez ci-dessous un bref descriptif pour chacun des 4 CMS évoqués précédemment.

#### WordPress

**WordPress** est généralement utilisé pour créer un site web ou un blog. Il est basé sur la technologie PHP et comporte une gamme variée d’outils comme un correcteur orthographique ainsi que des plugins pour l'e-commerce, le SEO ou encore la sécurité de votre site web.

Retrouvez plus d'informations sur notre page relative au [module WordPress](https://www.ovhcloud.com/fr-ca/web-hosting/uc-wordpress-website/)

- Site officiel de [WordPress](https://https://wordpress.com/){.external}

#### Joomla!

**Joomla!** est un CMS qui permet de créer des sites et des applications web performantes.

La communauté **Joomla!** est très grande et peut fournir de l’assistance et des services dans tous les domaines concernant ce CMS (aide, documentation, assistance technique, thèmes, etc.)

Retrouvez plus d'informations sur notre page relative au [module Joomla!](https://www.ovhcloud.com/fr-ca/web-hosting/uc-joomla-website/)

- Site officiel de [Joomla!](https://www.joomla.org/){.external}

#### Drupal

**Drupal** est une plateforme open source gratuite sous PHP créée en 2000. **Drupal** permet de créer rapidement des sites web dynamiques.

Retrouvez plus d'informations sur notre page relative au [module Drupal](https://www.ovhcloud.com/fr-ca/web-hosting/uc-drupal-website/)

- Site officiel de [Drupal](https://www.drupal.org/){.external}

#### PrestaShop

CMS créé en 2005 et dédié à la réalisation de sites web e-commerce. En dehors des fonctionnalités courantes des boutiques en ligne, ce logiciel peut également être personnalisé avec des modules, des thèmes et des modèles. 

Retrouvez plus d'informations sur notre page relative au [module PrestaShop](https://www.ovhcloud.com/fr-ca/web-hosting/uc-prestashop-website/)

- Site officiel de [PrestaShop](https://www.prestashop.com/){.external}

> [!warning]
>
> Quel que soit le CMS que vous choisirez, nous vous rappellons qu'aucune assistance n'est fournie par OVHcloud sur l'utilisation de ces CMS. Si vous éprouvez des difficultés, contactez directement l'éditeur du CMS que vous avez choisi à l'aide des liens indiqués plus haut dans ce tutoriel.
>

### Etape 1 - préparer l'installation <a name="step1"></a>

Pour installer un CMS sur votre offre d'[hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/), quelques préparatifs sont nécessaires.

#### 1.1 - Vérifier la déclaration du « dossier racine »

Le « dossier racine » correspond au répertoire dans lequel votre futur CMS sera installé dans votre hébergement. Il est recommandé de choisir un répertoire vide pour éviter les conflits avec vos autres potentiels multisites.

Consultez notre documentation qui décrit [comment ajouter un multisite sur son hébergement web](/pages/web/hosting/multisites_configure_multisite) pour définir le dossier racine à utiliser avec votre CMS.

> [!primary]
>
> Si vous définissez un nom de « dossier racine » qui n'existe pas sur votre hébergement web, il sera automatiquement créé dans l'espace de stockage FTP de votre hébergement web.
>

#### 1.2 - Vérifier le « pointage » du nom de domaine

- Assurez-vous que le nom de domaine que vous utiliserez pour accéder à votre CMS, ainsi que son sous-domaine en « www », pointent bien vers l'adresse IP de votre offre d'[hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/).

Pour récupérer l'adresse IP de votre offre d'hébergement web, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) dans la partie `Web Cloud`{.action} puis sélectionnez votre offre d'hébergement web dans la section `Hébergements`{.action}.<br>
Dans l'encadré `Informations générales`{.action} sur votre droite, vous trouverez l'adresse IP de votre hébergement web dans le formulaire `IPv4`{.action}.

Si la zone DNS active de votre domaine est gérée dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), comparez l'adresse IP de votre hébergement avec celle présente dans la zone DNS de votre domaine, en vous aidant de notre documentation sur les [zones DNS OVHcloud](/pages/web/domains/dns_zone_edit).

> [!warning]
>
> Si vous avez activé les options `CDN`{.action} ou `IP du pays`{.action} avec votre domaine, utilisez l'adresse IP adaptée en vous aidant de notre documentation recensant [l'ensemble des adresses IP de nos hébergements mutualisés](/pages/web/hosting/clusters_and_shared_hosting_IP).
>

Si vous ne parvenez pas à effectuer ces vérifications, contactez l'hébergeur de votre zone DNS active afin de mettre à jour le pointage de votre nom de domaine.

> [!warning]
>
> Toutes les modifications effectuées dans votre zone DNS entraînent un délai de propagation de 4 à 24 heures.
>

- Récupérez [les informations nécessaires pour vous connecter à l'espace FTP de votre hébergement web](/pages/web/hosting/ftp_connection#etape-1-recuperer-les-informations-necessaires-pour-se-connecter).
- Récupérez les accès à la base de données de votre offre d'hébergement web si elle existe déjà, ou créez-en une à l'aide de notre [documentation](/pages/web/hosting/sql_create_database).

#### 1.3 - Installer le client FTP gratuit « FileZilla »

Si vous n'utilisez pas déjà un client FTP, vous pouvez utiliser Filezilla. Retrouvez le lien de téléchargement gratuit ainsi qu'un tutoriel sur son utilisation dans notre documentation sur l'[utilisation de FileZilla avec votre offre d'hébergement OVHcloud](/pages/web/hosting/ftp_filezilla_user_guide).

#### 1.4 - Préparer une base de données <a name="step1-4"></a>

Les CMS ont besoin d'une base de données pour fonctionner. Nos offres d'[hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/) en contiennent, à l'exception de [l'hébergement gratuit Start 10M](https://www.ovhcloud.com/fr-ca/domains/free-web-hosting/).

Utilisez notre documentation pour [créer une base de données depuis votre offre d'hébergement web](/pages/web/hosting/sql_create_database).

Si vous disposez d'une offre Web Cloud Databases en MySQL ou MariaDB et que vous souhaitez l'utiliser pour installer manuellement votre CMS, consultez notre documentation sur la [création d'une base de données sur un service Web Cloud Databases](/pages/web/clouddb/create-db-and-user-on-db-server#creer-une-base-de-donnees).

Une fois la base de données créée, récupérez les paramètres de connexion (serveur, nom de la base de données, nom d'utilisateur et mot de passe) et conservez-les pour [l'étape 3](#step3) de ce guide.

> [!primary]
>
> Si vous souhaitez installer votre CMS avec une base de données déjà existante, récupérez vos paramètres de connexion à votre base de données directement dans les fichiers du site liés à celle-ci.
>
> S'il s'agit aussi d'un CMS identique à celui que vous devez installer, vous pouvez utiliser [ce guide](/pages/web/hosting/sql_change_password#etape-3-modifier-le-mot-de-passe-de-la-base-de-donnees-de-votre-site-dans-son-fichier-de-configuration) pour identifier les fichiers de configuration dans votre [espace de stockage FTP](/pages/web/hosting/ftp_connection).
>
> Connectez-vous ensuite à votre base de données pour recenser les « préfixes » des tables déjà présentes à l'intérieur. Ceci afin de ne pas choisir un « préfixe » de table déjà utilisé par un autre de vos sites.
>
> - Pour vous connecter à votre base de données liée à votre offre d'hébergement web, consultez [ce guide](/pages/web/hosting/sql_create_database#acceder-a-linterface-phpmyadmin).
> - Pour vous connecter à une base de données présente sur un Web Cloud Databases, consultez [ce guide](/pages/web/clouddb/connecting-to-database-on-database-server).
>

### Etape 2 - démarrer l'installation manuelle

#### 2.1 - Récupérer les fichiers sources de votre CMS

Rendez-vous sur le site de l'éditeur du CMS que vous avez choisi pour y télécharger les fichiers sources.

Retrouvez ci-dessous les liens vers les pages de téléchargement des CMS évoqués dans le présent tutoriel :

- [WordPress](https://wordpress.org/download/#download-install){.external}
- [Joomla!](https://downloads.joomla.org/){.external}
- [Drupal](https://www.drupal.org/download){.external}
- [Prestashop](https://www.prestashop.com/en/download){.external}

> [!primary]
>
> Récupérez la version PHP ainsi que la version MySQL ou MariaDB requises pour faire fonctionner votre CMS.
>
> Pour cela, consultez le lien vers la page officielle du CMS que vous souhaitez installer :
>
> - [WordPress](https://wordpress.org/about/requirements/){.external}
> - [Joomla!](https://downloads.joomla.org/technical-requirements){.external}
> - [Drupal](https://www.drupal.org/docs/getting-started/system-requirements/php-requirements){.external}
> - [Prestashop](https://www.prestashop.com/en/system-requirements){.external}
>
> Configurez ensuite la version de PHP sur votre hébergement web en vous aidant de notre documentation sur [le changement de version PHP d'un hébergement web](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014).
>
> Si vous utilisez déjà une version de PHP supérieure ou égale à celle requise, aucun changement n'est nécessaire.
>

Suivez les instructions indiquées par l'éditeur de votre CMS jusqu'à ce que les fichiers sources soient téléchargés sur votre ordinateur puis poursuivez la lecture de ce tutoriel.

> [!warning]
>
> Si vous avez d'autres sites hébergés sur votre offre d'hébergement web, vérifiez que ces derniers sont compatibles avec la version de PHP que vous choisirez pour votre nouveau CMS.
>

#### 2.2 - Décompresser les fichiers sources téléchargés dans un nouveau dossier

>[!primary]
>
> Pour plus de facilité, remplacez, dans cette étape, le nom du dossier « **CMS** » par le nom du CMS que vous avez choisi pour plus de facilité. (**WordPress**, **Joomla!**, **Drupal**, **PrestaShop**).
>

Le fichier téléchargé est dans un format **compressé** (zippé). Créez un dossier intitulé « **CMS** » sur votre ordinateur puis **décompressez** le contenu du fichier téléchargé à l'intérieur du dossier « **CMS** ».

Pour cela, ouvrez le dossier dans lequel vous avez téléchargé le fichier compressé, faites un clic droit sur le fichier en question puis sélectionnez « Extraire tout... ».

Indiquez le dossier « **CMS** » en destination afin d'extraire vos fichiers dans ce dossier.

#### 2.3 - Déplacer les fichiers sources du dossier « CMS » vers le « dossier racine » sur votre hébergement web

Une fois les fichiers décompressés dans votre dossier « **CMS** », [connectez-vous en FTP à votre espace de stockage](/pages/web/hosting/ftp_connection) à l'aide du [client FTP FileZilla](/pages/web/hosting/ftp_filezilla_user_guide) puis copiez les fichiers contenus dans le dossier « **CMS** » dans le « dossier racine » que vous avez défini sur votre hébergement lors de l'[étape 1](#step1) de ce guide.

Ci-dessous, un exemple avec le CMS *WordPress*:

![hosting](images/wpfl2.png){.thumbnail}

>[!warning]
>
> Nous vous recommandons vivement d'utiliser un « dossier racine » vide afin d'éviter tout conflit avec un autre de vos sites web. Vérifiez que le dossier de destination ne contient aucun élément avant de déplacer les fichiers.
>

>[!primary]
>
> Si le « dossier racine » que vous avez défini n'a pas été créé automatiquement lors des actions décrites dans l'[étape 1](#step1), vous pouvez le créer via FileZilla.
>
> Le dépôt des fichiers sur votre hébergement peut prendre quelques minutes.
>
> Une fois le transfert terminé, vérifiez que tous les éléments présents dans le dossier local « **CMS** » ont été correctement transférés dans le « dossier racine » présent sur votre hébergement web.
>

**Cas Particulier** : Si vous disposez d'un débit Internet limité et/ou d'une offre d'hébergement **Pro** ou supérieure, vous pouvez utiliser la connexion en **SSH** pour placer les fichiers sources de votre CMS dans l'espace de stockage de votre hébergement web. 

Pour vous connecter en SSH à votre hébergement, consultez notre guide sur la [connexion en SSH depuis un hébergement mutualisé OVHcloud](/pages/web/hosting/ssh_on_webhosting).

Une fois connecté en **SSH**, exécutez les commandes suivantes :

- Rendez-vous dans le « dossier racine » dans lequel vous souhaitez instaler votre CMS sur votre hébergement web :

```bash
cd NameOfYourTargetFolder
```

- Récupérez les fichiers sources de votre CMS directement depuis votre « dossier racine » à l'aide de la commande correspondant au CMS que vous avez choisi :

> [!tabs]
> **WordPress**
>> 
>> ```bash
>> wget http://wordpress.org/latest.tar.gz
>> ```
>>
>> **latest** permet d'installer automatiquement la dernière version du CMS.
>>
> **Joomla!**
>> 
>> ```bash
>> wget https://downloads.joomla.org/cms/joomla4/4-2-8/Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
>> **Joomla4** et **4-2-8** correspondent, à date, à la dernière version de Joomla! disponible.
>> Remplacez ces valeurs par celles que vous souhaitez installer.
>> 
> **Drupal**
>> 
>> ```bash
>> wget https://ftp.drupal.org/files/projects/admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
>> **8.x-2.4** correspond, à date, à la dernière version de Drupal disponible.
>> Remplacez cette valeur par celle que vous souhaitez installer.
>> 
> **PrestaShop**
>> 
>> ```bash
>> wget https://github.com/PrestaShop/PrestaShop/archive/1.7.8.8.tar.gz
>> ```
>> 
>> **1.7.8.8** correspond, à date, à la dernière version de PrestaShop disponible. Remplacez cette valeur par celle que vous souhaitez installer.
>> 

- Décompressez les fichiers sources de votre CMS dans votre « dossier racine » à l'aide de la commande correspondant au CMS que vous avez choisi:

> [!tabs]
> **WordPress**
>> 
>> ```bash
>> tar xvf latest.tar.gz
>> ```
>> 
> **Joomla!**
>> 
>> ```bash
>> tar xvf Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
> **Drupal**
>> 
>> ```bash
>> tar xvf admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
> **PrestaShop**
>> 
>> ```bash
>> tar xvf 1.7.8.8.tar.gz
>> ```
>> 

- Un dossier « **CMS** » est créé dans votre « dossier racine ». Déplacez son contenu à la base de votre « dossier racine » :

```bash
mv CMS/* ./
```

- Supprimez le dossier « **CMS** » désormais vide :

```bash
rmdir ./CMS/
```

- Supprimez le fichier compressé correspondant au CMS que vous avez choisi :

> [!tabs]
> **WordPress**
>> ```bash
>> rm -f latest.tar.gz
>> ```
>> 
> **Joomla!**
>> ```bash
>> rm -f Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
> **Drupal**
>> ```bash
>> rm -f admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
> **PrestaShop**
>> ```bash
>> rm -f 1.7.8.8.tar.gz
>> ```
>> 

### Etape 3 - finaliser l'installation manuelle <a name="step3"></a>

> [!success]
>
> Avant de continuer l'installation, videz le cache de votre navigateur Internet, afin d'éviter toute erreur.
>

A partir de cette étape, la procédure diffère en fonction du CMS que vous avez préalablement choisi.

Pour poursuivre l'installation, suivez l'un des liens suivants en cliquant sur le guide correspondant à votre CMS :

- [Finaliser l'installation de Wordpress](/pages/web/hosting/cms_manual_installation_wordpress)
- [Finaliser l'installation de Joomla!](/pages/web/hosting/cms_manual_installation_joomla)
- [Finaliser l'installation de Drupal](/pages/web/hosting/cms_manual_installation_drupal)
- [Finaliser l'installation de PrestaShop](/pages/web/hosting/cms_manual_installation_prestashop)

## Aller plus loin <a name="go-further"></a>

[Migration de votre site web et de vos e-mails vers OVHcloud](/pages/web/hosting/hosting_migrating_to_ovh)

[Mettre en ligne un site internet sur son hébergement web](/pages/web/hosting/hosting_how_to_get_my_website_online)

[Partager son hébergement entre plusieurs sites](/pages/web/hosting/multisites_configure_multisite)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
