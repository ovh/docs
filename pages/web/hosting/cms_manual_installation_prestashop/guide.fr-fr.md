---
title: "Tutoriel - Installer manuellement PrestaShop"
slug: installer-manuellement-prestashop
excerpt: "Découvrez comment installer manuellement votre CMS PrestaShop"
section: CMS
order: 06
updated: 2023-03-09
---

**Dernière mise à jour le 09/03/2023**

## Objectif

Ce tutoriel a pour objectif de vous aider à installer manuellement le CMS (Content Management System) Prestashop en quelques étapes.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) ou [l'éditeur du CMS PrestaShop](https://www.prestashop.com/fr/support){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

> [!success]
>
> Pour installer PrestaShop **automatiquement** depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), consultez notre documentation sur l'[installation d'un module « en un clic »](https://docs.ovh.com/fr/hosting/modules-en-1-clic/).
>
> Pour installer **manuellement un autre CMS** (WordPres, Joomla!, Drupal), consultez notre documentation sur l'[installation manuelle d'un CMS](https://docs.ovh.com/fr/hosting/mutualise-installer-manuellement-mon-cms/).
>

## Prérequis

- Disposer d'une offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/) contenant au moins une base de données.
- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/)
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}

## En pratique

### Etape 1 - préparer l'installation <a name="step1"></a>

Pour installer le CMS **PrestaShop** sur votre offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/), quelques préparatifs sont nécessaires.

#### 1.1 - Vérifier la déclaration du « dossier racine »

Le « dossier racine » correspond au répertoire dans lequel votre futur CMS sera installé dans votre hébergement. Il est recommandé de choisir un répertoire vide pour éviter les conflits avec vos autres potentiels multisites.

Consultez notre documentation qui décrit [comment ajouter un multisite sur son hébergement web](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/), pour définir le dossier racine à utiliser sur votre PrestaShop.

> [!primary]
>
> Si vous définissez un nom de « dossier racine » qui n'existe pas sur votre hébergement web, il sera automatiquement créé dans l'espace de stockage FTP de votre hébergement web.
>

#### 1.2 - Vérifier le « pointage » du nom de domaine

- Assurez-vous que le nom de domaine que vous utiliserez pour accéder à votre PrestaShop, ainsi que son sous-domaine en « www », pointent bien vers l'adresse IP de votre offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/).

Pour récupérer l'adresse IP de votre offre d'hébergement web, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) dans la partie `Web Cloud`{.action} puis sélectionnez votre offre d'hébergement web dans la section `Hébergements`{.action}.<br>
Dans l'encadré `Informations générales`{.action} sur votre droite, vous trouverez l'adresse IP de votre hébergement web dans le formulaire `IPv4`{.action}.

Si la zone DNS active de votre domaine est gérée dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), comparez l'adresse IP de votre hébergement avec celle présente dans la zone DNS de votre domaine, en vous aidant de notre documentation sur les [zones DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/).

> [!warning]
>
> Si vous avez activé les options `CDN`{.action} ou `IP du pays`{.action} avec votre domaine, utilisez l'adresse IP adaptée en vous aidant de notre documentation recensant [l'ensemble des adresses IP de nos hébergements mutualisés](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/).
>

Si vous ne parvenez pas à effectuer ces vérifications, contactez l'hébergeur de votre zone DNS active afin de mettre à jour le pointage de votre nom de domaine.

> [!warning]
>
> Toutes les modifications effectuées dans votre zone DNS entraînent un délai de propagation de 4 à 24 heures.
>

- Récupérez [les informations nécessaires pour vous connecter à l'espace FTP de votre hébergement web](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter).
- Récupérez les accès à la base de données de votre offre d'hébergement web si elle existe déjà, ou créez-en une à l'aide de notre [documentation](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/).

#### 1.3 - Installer le client FTP gratuit « FileZilla »

Retrouvez le lien de téléchargement gratuit ainsi qu'un tutoriel sur son utilisation dans notre documentation sur l'[utilisation de FileZilla avec votre offre d'hébergement OVHcloud](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/).

#### 1.4 - Préparer une base de données <a name="step1-4"></a>

Les CMS ont besoin d'une base de données pour fonctionner. Nos offres d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/) en contiennent, à l'exception de [l'hébergement gratuit Start 10M](https://www.ovhcloud.com/fr/domains/free-web-hosting/).

Utilisez notre documentation pour [créer une base de données depuis votre offre d'hébergement web](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/).

Si vous disposez d'une offre Web Cloud Databases en MySQL ou MariaDB et que vous souhaitez l'utiliser pour installer manuellement votre PrestaShop, consultez notre documentation sur la [création d'une base de données sur un Web Cloud Databases](https://docs.ovh.com/fr/clouddb/creer-bases-de-donnees-et-utilisateurs/#creer-une-base-de-donnees).

Une fois la base de données créée, récupérez les paramètres de connexion (serveur, nom de la base de données, nom d'utilisateur et mot de passe) et conservez-les pour [l'étape 3](#step3) de ce guide.

> [!primary]
>
> Si vous souhaitez installer votre CMS PrestaShop avec une base de données déjà existante, récupérez vos paramètres de connexion à votre base de données directement dans les fichiers du site liés à celle-ci.
>
> S'il s'agit aussi d'un CMS comme celui que vous devez installer, vous pouvez utiliser [ce guide](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/#etape-3-modifier-le-mot-de-passe-de-la-base-de-donnees-de-votre-site-dans-son-fichier-de-configuration) pour identifier les fichiers de configuration dans votre [espace de stockage FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).
>
> Connectez-vous ensuite à votre base de données pour recenser les « préfixes » des tables déjà présentes à l'intérieur. Ceci afin de ne pas choisir un « préfixe » de table déjà utilisé par un autre de vos sites.
>
> - Pour vous connecter à votre base de données liée à votre offre d'hébergement web, consultez [ce guide](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin).
> - Pour vous connecter à une base de données présente sur un Web Cloud Databases, consultez [ce guide](https://docs.ovh.com/fr/clouddb/connexion-base-de-donnees-serveur-bdd/).
>

### Etape 2 - démarrer l'installation manuelle

#### 2.1 - Récupérer les fichiers sources de PrestaShop

- Rendez-vous sur le site du développeur de [PrestaShop](https://www.prestashop.com/en/download){.external} puis suivez les étapes afin de télécharger les fichiers sources du CMS.

![hosting](images/downloadPS.png){.thumbnail}

> [!primary]
>
> N'oubliez pas de récupérer la version PHP ainsi que la version MySQL ou MariaDB requises pour faire fonctionner votre PrestaShop.
>
> Configurez ensuite la version de PHP sur votre hébergement web en vous aidant de notre documentation sur [le changement de version PHP d'un hébergement web](https://docs.ovh.com/fr/hosting/configurer-le-php-sur-son-hebergement-web-mutu-2014/).
>
> Si vous utilisez déjà une version de PHP supérieure ou égale à celle requise, aucun changement n'est nécessaire.
>

> [!warning]
>
> Si vous avez d'autres sites hébergés sur votre offre d'hébergement web, vérifiez que ces derniers sont compatibles avec la version de PHP que vous choisirez pour votre PrestaShop.
>

#### 2.2 - Décompresser les fichiers sources téléchargés dans un nouveau dossier

Le fichier téléchargé est dans un format **compressé** (zippé). Créez un dossier intitulé « **PrestaShop** » sur votre ordinateur puis **décompressez** le contenu du fichier téléchargé à l'intérieur du dossier « **PrestaShop** ».

Pour cela, ouvrez le dossier dans lequel vous avez téléchargé le fichier compressé, faites un clic-droit sur le fichier en question puis sélectionnez « Extraire tout... ».

Indiquez le dossier « **PrestaShop** » en destination afin d'extraire vos fichiers dans ce dossier.

#### 2.3 - Déplacer les fichiers sources du dossier « PrestaShop » vers le « dossier racine » sur votre hébergement web

Une fois les fichiers décompressés dans votre dossier « **PrestaShop** », [connectez-vous en FTP à votre espace de stockage](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) à l'aide du [client FTP FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/) puis copiez les fichiers contenus dans le dossier « **PrestaShop** » dans le « dossier racine » que vous avez défini sur votre hébergement lors de l'[étape 1](#step1) de ce guide.

### Partie 3 &#58; mise en place des fichiers sur le FTP
Ouvrez le dossier dans lequel vous avez téléchargé le dossier compressé.

Réalisez un clic droit sur le dossier en question, puis sélectionnez "Extraire tout...".

Indiquez une destination afin d'extraire vos fichiers dans un nouveau dossier.

*De nombreux tutoriels et logiciels de décompression sont disponibles sur internet pour vous aider à réaliser ces manipulations. Consultez-les si vous êtes bloqués à cette étape.*

Le dossier cible sera intitulé " **prestashop** "


![hosting](images/3160.png){.thumbnail}

Pour déposer les fichiers de  **PrestaShop**  sur votre hébergement, vous devez tout d'abord vous connecter à celui-ci.

*Consultez notre guide pour [se connecter à l’espace de stockage de son hébergement web](../connexion-espace-stockage-ftp-hebergement-web/)*


![hosting](images/3161.png){.thumbnail}

Suivez ces étapes pour déposer vos fichiers sur le FTP. Une fois connecté à FileZilla.

Dans la partie "Site local", qui correspond à la liste des fichiers présents sur votre ordinateur, ouvrez le dossier décompressé intitulé "prestashop" dans lequel sont présents les fichiers du CMS.

Dans la partie "Site distant" qui correspond dans ce cas à votre hébergement mutualisé OVHcloud, ouvrez le dossier "www". C'est dans ce dossier que tous les fichiers du CMS devront être déposés.

*Si ce dossier n'existe pas il vous est possible de le créer.*

*Vos fichiers doivent obligatoirement être déposés dans le dossier "www" sinon la procédure d'installation ne sera pas accessible depuis votre nom de domaine.*


![hosting](images/3162.png){.thumbnail}

Une fois ces dossiers ouverts :

Dans la partie "Site local", vous retrouvez tous les fichiers nécessaires à l'installation du CMS PrestaShop.

Pour tous les sélectionner, réaliser la combinaison de touche  **CTRL+A** .

Réalisez ensuite le glisser-déposer des fichiers vers la partie "Site distant" dans le dossier "www".

*Il est fort probable que le dossier "www" ne soit pas vide. Il n'est pas obligatoire de supprimer les fichiers présents dedans. Nous reviendrons sur ce point dans la suite de ce guide.*


![hosting](images/3163.png){.thumbnail}

Le transfert des fichiers est en cours.

Attendez que la totalité des fichiers soit déposés sur le serveur FTP distant. Cela peut prendre quelques minutes.

Une fois le transfert terminé, assurez-vous que tous les fichiers et les dossiers ont été correctement transférés.

Cette opération conclut la partie consacrée au dépôt des fichiers sur le FTP.


![hosting](images/3164.png){.thumbnail}


### Partie 4 &#58; lien avec la base de donnees
- Avant de continuer l'installation, videz le cache de votre navigateur internet, afin d'éviter toute erreur.

Afin de réaliser le lien entre votre base de données et PrestaShop, nous devons suivre les étapes d'installation du CMS. Rendez-vous sur votre nom de domaine.

Sélectionnez la langue "Français (French)" pour l'installation de la boutique PrestaShop.

Cliquez sur "Suivant" pour continuer.


![hosting](images/3165.png){.thumbnail}

Cochez "J'accepte les termes et conditions du contrat ci-dessus".

Cliquez ensuite sur "Suivant" pour accéder à l'étape suivante.


![hosting](images/3166.png){.thumbnail}

Des informations complémentaires sur la boutique sur le point d'être créée vous sont demandées. Renseignez les champs suivants :

Nom de votre boutique : le nom désiré pour la boutique, cela peut impacter le référencement.

Activité principale : l'activité prédominante de la boutique.

Pays : sélectionnez le pays de votre boutique.

Prénom : le prénom de l'administrateur.

Nom : le nom de l'administrateur.

Adresse e-mail : renseignez une adresse e-mail valide pour l'accès à l'administration de la boutique.

Mot de passe : renseignez le mot de passe pour l'accès à l'administration (minimum 8 caractères).

Confirmation du mot de passe : entrez de nouveau votre mot de passe.

S'inscrire à la newsletter de PrestaShop : cochez la case si vous souhaitez recevoir les newsletters en provenance de l'équipe de PrestaShop.

Cliquez sur "Suivant" pour valider les informations concernant la boutique PrestaShop.


![hosting](images/3167.png){.thumbnail}

Munissez-vous des identifiants de votre base de données (une aide à ce sujet est disponible dans le début de ce guide).

Renseignez les informations demandées concernant la base de données :

Adresse du serveur de la base : renseignez le nom du serveur de votre base de données, indiqué dans le mail d'installation ou dans votre espace client.

Nom de la base : choisi lors de sa création dans l'espace client.

Identifiant : identique au nom de la base de données.

Mot de passe de la base : vous a été envoyé par mail lors de la création de la base de données – il est possible que vous l'ayez modifié.

Préfixe des tables : utile pour réaliser plusieurs installations de PrestaShop sur la même base de données. Dans ce cas, il faudra renseigner un préfixe différent pour chacune des installations.

*Important : les identifiants de la base de données ne sont pas automatiquement envoyés lors de l'installation de l'hébergement. Pour les recevoir, vous devez activer la base de données dans votre espace client.*

Une fois ces informations complétées, vous pouvez tester la connexion à la base de données.

Cliquez sur "Suivant" pour valider les informations de connexion.

- Ces étapes finalisent la création du lien entre votre base de données et PrestaShop. Ne reste qu'à finaliser l'installation proprement dite.


![hosting](images/3168.png){.thumbnail}


### Finalisation
Afin de terminer l'installation de la boutique PrestaShop, continuez les étapes d'installation. Laissez l'installation se terminer. Une fois à 100 % une nouvelle fenêtre apparaît.


![hosting](images/3169.png){.thumbnail}

L'installation de la boutique PrestaShop est à présent terminée !

Vous pouvez à présent vous identifier et commencer à travailler sur votre boutique en cliquant sur "Gérez votre boutique".

- Attention pour des raisons de sécurité vous devrez supprimer manuellement le dossier "install" présent sur l'hébergement mutualisé dans le dossier "www" afin de pouvoir vous connecter.


![hosting](images/3170.png){.thumbnail}

Vous trouverez ici un aperçu du panel d'administration de PrestaShop.


![hosting](images/3171.png){.thumbnail}


### Informations utiles

**Le support d'OVHcloud ne sera pas habilité à vous répondre pour toute demande d'aide concernant la configuration de votre PrestaShop.**

Nous vous invitons à consulter les forums dédiés à la solution PrestaShop.

- Voici un lien vers un [forum
d'entraide](http://www.prestashop.com/forums/forum/18-forum-francophone/){.external} dédié à ce CMS.

Vous avez mis en place vos fichiers sur le FTP, cependant la page "site en construction" est toujours affichée.

À l'installation de votre hébergement, OVHcloud met en place une page d'attente, le temps que vous déposiez les fichiers de votre site internet.

Si vous déposez simplement vos fichiers dans le dossier  **"www"**  sans supprimer le contenu déposé par OVHcloud, vous risquez de rencontrer ce souci.

Afin de corriger cela, vous devez supprimer ou renommer le fichier "index.html" mis en place par OVHcloud sur votre hébergement.

*Il peut être intéressant de simplement le renommer afin de vous permettre de le réactiver à tout moment et de vous en servir comme page d'attente.*

Autre information utile : les fichiers de votre site doivent être déposés dans le dossier "www" afin d'être pris en compte.


![hosting](images/3172.png){.thumbnail}

- Attention, pour des raisons de sécurité vous devrez supprimer manuellement le dossier "install" présent sur l'hébergement mutualisé dans le dossier "www" . Vous pourrez ainsi vous connecter une fois l'installation finalisée.


![hosting](images/3173.png){.thumbnail}


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.