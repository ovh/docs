---
title: "Tutoriel - Installer manuellement WordPress"
slug: installer-manuellement-wordpress
excerpt: "Découvrez comment installer manuellement votre CMS WordPress"
section: CMS
order: 07
---

**Dernière mise à jour le 06/10/2022**

## Objectif

Ce tutoriel a pour objectif de vous aider à installer manuellement le CMS (Content Management System) WordPress en quelques étapes.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) ou [l'éditeur du CMS WordPress](https://wordpress.com/fr/support/){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

> [!success]
>
> Pour installer WordPress automatiquement depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), consultez notre documentation sur l'[installation d'un module "en un clic"](https://docs.ovh.com/fr/hosting/modules-en-1-clic/).
>
> Pour installer manuellement un autre CMS (Joomla!, Drupal, Prestashop), consultez notre documentation sur l'[installation manuelle d'un CMS](https://docs.ovh.com/fr/hosting/mutualise-installer-manuellement-mon-cms/).
>

## Prérequis

- Disposer d'une offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/) qui contient au moins une base de données.
- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/)

## En pratique

### Etape 1 : préparer l'installation <a name="step1"></a>

Pour installer le CMS  **WordPress**  sur votre offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/), quelques préparatifs sont nécessaires.

#### 1.1 : vérifier la déclaration du "dossier racine"

Le "dossier racine" correspond au répertoire dans lequel votre futur CMS sera installé dans votre hébergement. Il est recommandé de choisir un répertoire vide pour éviter les conflits avec vos autres éventuels multisites. 

Consultez notre documentation qui explique [comment ajouter un multisite sur son hébergement web](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/) pour configurer le dossier racine à utiliser pour votre WordPress.

> [!primary]
>
> Si vous renseignez un nom de "dossier racine" pour votre domaine qui n'existe pas déjà dans votre hébergement web, ce dernier sera créé automatiquement dans l'espace de stockage FTP de votre hébergement.
>

#### 1.2 : vérifier le "pointage" du nom de domaine

Assurez-vous que le nom de domaine que vous utiliserez pour accéder à votre WordPress ainsi que son sous-domaine en "www" pointent bien vers l'adresse IP de votre offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/).

Pour récupérer l'adresse IP de votre offre d'hébergement web, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la partie `Web Cloud`{.action} puis sélectionnez votre offre d'hébergement web dans la section `Hébergements`{.action}. Dans l'encadré `Informations générales`{.action} sur votre droite, vous trouverez l'adresse IP de votre hébergement web dans le formulaire `'IPv4`{.action}. 

Si la zone DNS active de votre domaine est gérée dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), comparez l'adresse IP de votre hébergement avec celle présente dans la zone DNS de votre domaine à l'aide de notre documentation sur les [zones DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/).

> [!warning]
>
> Si vous avez activé les options `CDN`{.action} ou `IP du pays`{.action} avec votre domaine, utilisez l'adresse IP adaptée à l'aide de notre documentation recensant [l'ensemble des adresses IP de nos hébergements mutualisés](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/).
>
> Pour retrouver le cluster où se trouve votre hébergement web, rendez-vous dans la partie `Web cloud`{.action}, cliquez sur `hébergements`{.action}, sélectionnez votre hébergement puis l'onglet `FTP-SSH`{.action}. Vous visualiserez le numéro du cluster dans le formulaire **"Serveur FTP et SFTP"** : ftp.cluster0XX.ovh.net (où les "X" représentent le numéro de cluster).
>

Si non, contactez l'hébergeur de votre zone DNS active pour mettre à jour le pointage de votre nom de domaine.

> [!warning]
>
> Toutes les modifications effectuées dans votre zone DNS entraîne un délai de propagation de 4 à 24 heures.
>

- Récupérez [les informations nécessaires pour vous connecter à l'espace FTP de votre hébergement web](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter)
- Récupérez les accès à la base de données de votre offre d'hébergement Web si elle existe déjà ou créez-en une à l'aide de notre [documentation](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/).

#### 1.3 : Installer le client FTP gratuit "Filezilla"

Retrouvez le lien de téléchargement gratuit ainsi qu'un tutoriel sur son utilisation dans notre documentation sur l'[utilisation de Filezilla avec votre offre d'hébergement OVHcloud](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)

#### 1.4 : préparer une base de données

Les CMS ont besoin d'une base de données pour fonctionner. La plupart de nos offres d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/) en contiennent.

Utilisez notre documentation pour [créer une base de données depuis votre offre d'hébergement web](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/).

Si vous disposez d'une offre SQL Privé/Cloud DB en "MySQL" et que vous souhaitez l'utiliser pour installer manuellement votre WordPress, retrouvez notre documentation sur la [création d'une base de données sur un SQL Privé/Cloud DB](https://docs.ovh.com/fr/clouddb/creer-bases-de-donnees-et-utilisateurs/#creer-une-base-de-donnees).

Une fois créée, récupérez les paramètres de connexion à votre base de données (serveur, nom de la base de données, nom d'utilisateur et mot de passe).

> [!primary]
> 
> Si vous souhaitez installer votre CMS WordPress avec une base de données déjà existante, récupérez vos paramètres de connexion à votre base de données directement dans les fichiers du site pour lequel elle est déjà utilisée.
>
> S'il s'agit aussi d'un CMS comme celui que vous vous apprêtez à installer, vous pouvez vous aider de [ce guide](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/#etape-3-modifier-le-mot-de-passe-de-la-base-de-donnees-de-votre-site-dans-son-fichier-de-configuration) pour identifier les fichiers de configuration dans votre [espace de stockage FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).
>
> Connectez-vous ensuite à votre base de données pour recenser les "préfixes" des tables déjà présentes à l'intérieur. Ceci afin de ne pas choisir un "préfixe" de table déjà utilisé par un autre de vos sites.
>
> - Pour vous connecter à votre base de données liée à votre offre d'hébergement web : <https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin>
> - Pour vous connecter à une base de données présente sur un SQL Privé/Cloud DB : <https://docs.ovh.com/fr/clouddb/connexion-base-de-donnees-serveur-bdd/>
>

### Etape 2 : démarrer l'installation manuelle

#### 2.1 : récupérer les fichiers sources de WordPress

Rendez-vous sur le site du développeur de [WordPress](http://fr.wordpress.org/){.external} pour télécherger sur votre appareil les fichiers sources du CMS.

#### 2.2 : décompresser les fichiers sources téléchargés dans un nouveau dossier

Le fichier téléchargé est dans un format **compressé** (zippé), créez un dossier intitulé "**wordpress**" sur votre ordinateur puis **décompressez** le contenu du fichier téléchargé à l'intérieur du dossier "**wordpress**". 

Pour cela, ouvrez le dossier dans lequel vous avez téléchargé le fichier compressé, réalisez un clic droit sur le fichier en question, puis sélectionnez "Extraire tout...".

Indiquez le dossier "**wordpress**" en destination afin d'extraire vos fichiers dans ce dossier.

Si besoin, vous trouverez sur Internet différentes aides concernant la décompression de fichiers.

![hosting](images/3127.png){.thumbnail}

#### 2.3 : déplacer les fichiers sources du dossier "WordPress" vers le "dossier racine" sur votre hébergement web

Une fois les fichiers décompressés dans votre dossier "**wordpress**", [connectez-vous en FTP à votre espace de stockage](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) à l'aide du [client FTP Filezilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/) puis copiez les fichiers contenus dans le dossier "**wordpress**" dans le "dossier racine" que vous avez défini sur votre hébergement lors de l'[étape 1](#step1) de ce guide.

>[!primary]
>
> Si le "dossier racine" que vous avez défini n'a pas été créé automatiquement grâce aux actions décrites dans l'[étape 1](#step1), il vous est possible de le créer via Filezilla.
>
>
> Le dépôt des fichiers sur votre hébergement peut prendre quelques minutes.
>
> Une fois le transfert terminé, assurez-vous que tous les éléments présents dans le dossier local "**wordpress**" ont été correctement transférés dans le "dossier racine" présent sur votre hébergement web.
>

![hosting](images/3131.png){.thumbnail}


### Etape 3 : finaliser l'installation manuelle

- Avant de continuer l'installation, videz le cache de votre navigateur internet, afin d'éviter toute erreur.

Afin de réaliser le lien entre votre base de données et WordPress, nous devons suivre les étapes d'installation du CMS. Rendez-vous sur votre nom de domaine.

Ce message va apparaître.

Cliquez sur "Créer un fichier de configuration" pour continuer.


![hosting](images/3132.png){.thumbnail}

Munissez-vous des identifiants de votre base de données (une aide à ce sujet est disponible dans le début de ce guide).

Cliquez sur "C'est parti !" pour accéder à l'étape suivante.


![hosting](images/3133.png){.thumbnail}

Renseignez les informations demandées concernant la base de données :

Nom de la base de données : choisi lors de sa création dans l'espace client.

Identifiant : identique au nom de la base de données.

Mot de passe : vous a été envoyé par mail lors de la création de la base de données – il est possible que vous l'ayez modifié.

Adresse de la base de données : renseignez le nom du serveur de votre base de données, indiqué dans le mail d'installation ou dans votre espace client.

Préfixe des tables : utile pour réaliser plusieurs installations de WordPress sur la même base de données. Dans ce cas, il faudra renseigner un préfixe différent pour chacune des installations.

*Important : les identifiants de la base de données ne sont pas automatiquement envoyés lors de l'installation de l'hébergement. Pour les recevoir, vous devez activer la base de données dans votre espace client.*

Cliquez sur "Envoyer" pour valider les informations de connexion à la base de données.

- Ces étapes finalisent la création du lien entre votre base de données et WordPress. Ne reste qu'à finaliser l'installation proprement dite.


![hosting](images/3134.png){.thumbnail}


### Finalisation
Afin de terminer l'installation du blog WordPress, continuez les étapes d'installations. Cliquez sur "Lancer l'installation" pour poursuivre.


![hosting](images/3135.png){.thumbnail}

Renseignez les informations demandées concernant l'administration de votre blog WordPress :

Titre du site : renseignez le titre de votre blog.

Identifiant : choisissez l'identifiant de connexion pour administrer votre blog.

Mot de passe, deux fois : renseignez deux fois le mot de passe désiré pour vous connecter à l'administration de votre blog WordPress.

Votre adresse de messagerie : renseignez un e-mail valide.

Vie privée : si la case est cochée, les moteurs de recherche référenceront le blog.

Pour lancer l'installation de WordPress cliquez sur "Installer WordPress".


![hosting](images/3136.png){.thumbnail}

L'installation de votre blog WordPress est à présent terminée !

Vous pouvez à présent vous identifier et commencer à travailler sur votre blog en cliquant sur "Se connecter".


![hosting](images/3137.png){.thumbnail}

Vous trouverez ici un aperçu du panel d'administration de WordPress.


![hosting](images/3138.png){.thumbnail}


### Informations utiles

**Le support d'OVHcloud ne sera pas habilité à vous répondre pour toute demande d'aide concernant la configuration de votre WordPress.**

Nous vous invitons à consulter les forums dédiés à la solution WordPress.

- Voici un lien vers un [forum
d'entraide](http://www.wordpress-fr.net/support/){.external} dédié à ce CMS.

Vous avez mis en place vos fichiers sur le FTP, cependant la page "site en construction" est toujours affichée.

À l'installation de votre hébergement, OVHcloud met en place une page d'attente, le temps que vous déposiez les fichiers de votre site internet.

Si vous déposez simplement vos fichiers dans le dossier  **"www"**  sans supprimer le contenu déposé par OVHcloud, vous risquez de rencontrer ce souci.

Afin de corriger cela, vous devez supprimer ou renommer le fichier "index.html" mis en place par OVHcloud sur votre hébergement.

*Il peut être intéressant de simplement le renommer afin de vous permettre de le réactiver à tout moment et de vous en servir comme page d'attente.*

Autre information utile : les fichiers de votre site doivent être déposés dans le dossier "www" afin d'être pris en compte.


![hosting](images/3139.png){.thumbnail}

Il s'agit ici d'une erreur concernant la version PHP de votre serveur.

La cause est simple : la dernière version du PHP n'a pas été activée.

*Un guide est disponible concernant la [modification de la version PHP sur l'offre mutualisée](../configurer-le-php-sur-son-hebergement-web-mutu-2014/).*


![hosting](images/3140.png){.thumbnail}


## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.