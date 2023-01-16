---
title: "Tutoriel - Installer manuellement WordPress"
slug: installer-manuellement-wordpress
excerpt: "Découvrez comment installer manuellement votre CMS WordPress"
section: CMS
order: 04
---

**Dernière mise à jour le 15/11/2022**

## Objectif

Ce tutoriel a pour objectif de vous aider à installer manuellement le CMS (Content Management System) WordPress en quelques étapes.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) ou [l'éditeur du CMS WordPress](https://wordpress.com/fr/support/){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

> [!success]
>
> Pour installer WordPress **automatiquement** depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), consultez notre documentation sur l'[installation d'un module « en un clic »](https://docs.ovh.com/ca/fr/hosting/modules-en-1-clic/).
>
> Pour installer **manuellement un autre CMS** (Joomla!, Drupal, PrestaShop), consultez notre documentation sur l'[installation manuelle d'un CMS](https://docs.ovh.com/ca/fr/hosting/mutualise-installer-manuellement-mon-cms/).
>

## Prérequis

- Disposer d'une offre d'[hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/) qui contient au moins une base de données.
- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr-ca/domains/)
- Être connecté à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}

## En pratique

### Etape 1 - préparer l'installation <a name="step1"></a>

Pour installer le CMS **WordPress** sur votre offre d'[hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/), quelques préparatifs sont nécessaires.

#### 1.1 - Vérifier la déclaration du « dossier racine »

Le « dossier racine » correspond au répertoire dans lequel votre futur CMS sera installé dans votre hébergement. Il est recommandé de choisir un répertoire vide pour éviter les conflits avec vos autres potentiels multisites.

Consultez notre documentation qui décrit [comment ajouter un multisite sur son hébergement web](https://docs.ovh.com/ca/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/), pour définir le dossier racine à utiliser sur votre WordPress.

> [!primary]
>
> Si vous définissez un nom de « dossier racine » qui n'existe pas sur votre hébergement web, il sera automatiquement créé dans l'espace de stockage FTP de votre hébergement web.
>

#### 1.2 - Vérifier le « pointage » du nom de domaine

- Assurez-vous que le nom de domaine que vous utiliserez pour accéder à votre WordPress, ainsi que son sous-domaine en « www », pointent bien vers l'adresse IP de votre offre d'[hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/).

Pour récupérer l'adresse IP de votre offre d'hébergement web, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) dans la partie `Web Cloud`{.action} puis sélectionnez votre offre d'hébergement web dans la section `Hébergements`{.action}.<br>
Dans l'encadré `Informations générales`{.action} sur votre droite, vous trouverez l'adresse IP de votre hébergement web dans le formulaire `IPv4`{.action}.

Si la zone DNS active de votre domaine est gérée dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), comparez l'adresse IP de votre hébergement avec celle présente dans la zone DNS de votre domaine, en vous aidant de notre documentation sur les [zones DNS OVHcloud](https://docs.ovh.com/ca/fr/domains/editer-ma-zone-dns/).

> [!warning]
>
> Si vous avez activé les options `CDN`{.action} ou `IP du pays`{.action} avec votre domaine, utilisez l'adresse IP adaptée en vous aidant de notre documentation recensant [l'ensemble des adresses IP de nos hébergements mutualisés](https://docs.ovh.com/ca/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/).
>

Si vous ne parvenez pas à effectuer ces vérifications, contactez l'hébergeur de votre zone DNS active afin de mettre à jour le pointage de votre nom de domaine.

> [!warning]
>
> Toutes les modifications effectuées dans votre zone DNS entraînent un délai de propagation de 4 à 24 heures.
>

- Récupérez [les informations nécessaires pour vous connecter à l'espace FTP de votre hébergement web](https://docs.ovh.com/ca/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter).
- Récupérez les accès à la base de données de votre offre d'hébergement web si elle existe déjà, ou créez-en une à l'aide de notre [documentation](https://docs.ovh.com/ca/fr/hosting/creer-base-de-donnees/).

#### 1.3 - Installer le client FTP gratuit « FileZilla »

Retrouvez le lien de téléchargement gratuit ainsi qu'un tutoriel sur son utilisation dans notre documentation sur l'[utilisation de FileZilla avec votre offre d'hébergement OVHcloud](https://docs.ovh.com/ca/fr/hosting/mutualise-guide-utilisation-filezilla/).


#### 1.4 - Préparer une base de données <a name="step1-4"></a>

Les CMS ont besoin d'une base de données pour fonctionner. Nos offres d'[hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/) en contiennent.


Utilisez notre documentation pour [créer une base de données depuis votre offre d'hébergement web](https://docs.ovh.com/ca/fr/hosting/creer-base-de-donnees/).

Une fois la base de données créée, récupérez les paramètres de connexion (serveur, nom de la base de données, nom d'utilisateur et mot de passe) et conservez-les pour [l'étape 3](#step3) de ce guide.

> [!primary]
>
> Si vous souhaitez installer votre CMS WordPress avec une base de données déjà existante, récupérez vos paramètres de connexion à votre base de données directement dans les fichiers du site liés à celle-ci.
>
> S'il s'agit aussi d'un CMS comme celui que vous devez installer, vous pouvez utiliser [ce guide](https://docs.ovh.com/ca/fr/hosting/modifier-mot-de-passe-base-de-donnees/#etape-3-modifier-le-mot-de-passe-de-la-base-de-donnees-de-votre-site-dans-son-fichier-de-configuration) pour identifier les fichiers de configuration dans votre [espace de stockage FTP](https://docs.ovh.com/ca/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).
>
> Connectez-vous ensuite à votre base de données pour recenser les « préfixes » des tables déjà présentes à l'intérieur. Ceci afin de ne pas choisir un « préfixe » de table déjà utilisé par un autre de vos sites.
> Pour vous connecter à votre base de données liée à votre offre d'hébergement web, consultez [ce guide](https://docs.ovh.com/ca/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin).
>

### Etape 2 - démarrer l'installation manuelle

#### 2.1 - Récupérer les fichiers sources de WordPress

Rendez-vous sur le site de l'éditeur [WordPress](https://wordpress.org/download/#download-install){.external} pour télécharger les fichiers sources du CMS.

![hosting](images/downloadWP.png){.thumbnail}

> [!primary]
>
> Notez, sur la page de téléchargement, la version PHP ainsi que la version MySQL ou MariaDB requises pour faire fonctionner votre WordPress.
>
> Configurez ensuite la version de PHP sur votre hébergement web en vous aidant de notre documentation sur [le changement de version PHP d'un hébergement web](https://docs.ovh.com/ca/fr/hosting/configurer-le-php-sur-son-hebergement-web-mutu-2014/).
>
> Si vous utilisez déjà une version de PHP supérieure ou égale à celle requise, aucun changement n'est nécessaire.
>

> [!warning]
>
> Si vous avez d'autres sites hébergés sur votre offre d'hébergement web, vérifiez que ces derniers sont compatibles avec la version de PHP que vous choisirez pour votre WordPress.
>

#### 2.2 - Décompresser les fichiers sources téléchargés dans un nouveau dossier

Le fichier téléchargé est dans un format **compressé** (zippé). Créez un dossier intitulé « **WordPress** » sur votre ordinateur puis **décompressez** le contenu du fichier téléchargé à l'intérieur du dossier « **WordPress** ».

Pour cela, ouvrez le dossier dans lequel vous avez téléchargé le fichier compressé, faites un clic-droit sur le fichier en question puis sélectionnez « Extraire tout... ».

Indiquez le dossier « **WordPress** » en destination afin d'extraire vos fichiers dans ce dossier.

#### 2.3 - Déplacer les fichiers sources du dossier « WordPress » vers le « dossier racine » sur votre hébergement web

Une fois les fichiers décompressés dans votre dossier « **WordPress** », [connectez-vous en FTP à votre espace de stockage](https://docs.ovh.com/ca/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) à l'aide du [client FTP FileZilla](https://docs.ovh.com/ca/fr/hosting/mutualise-guide-utilisation-filezilla/) puis copiez les fichiers contenus dans le dossier « **WordPress** » dans le « dossier racine » que vous avez défini sur votre hébergement lors de l'[étape 1](#step1) de ce guide.

![hosting](images/wpfl2.png){.thumbnail}

>[!warning]
>
> Nous vous recommandons vivement d'utiliser un « dossier racine » vide afin d'éviter tout conflit avec un autre site. Vérifiez que le dossier de destination ne contient aucun élément avant de déplacer les fichiers.
>

>[!primary]
>
> Si le « dossier racine » que vous avez défini n'a pas été créé automatiquement lors des actions décrites dans l'[étape 1](#step1), vous pouvez le créer via FileZilla.
>
> Le dépôt des fichiers sur votre hébergement peut prendre quelques minutes.
>
> Une fois le transfert terminé, vérifiez que tous les éléments présents dans le dossier local « **WordPress** » ont été correctement transférés dans le « dossier racine » présent sur votre hébergement web.
>

**Cas Particulier** : Si vous disposez d'un débit Internet limité et/ou d'une offre d'hébergement **Pro** ou supérieure, vous pouvez utiliser la connexion en **SSH** pour placer les fichiers sources de WordPress dans l'espace de stockage de votre hébergement web. 

Pour vous connecter en SSH à votre hébergement, consultez notre guide sur la [connexion en SSH depuis un hébergement mutualisé OVHcloud](https://docs.ovh.com/ca/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/).

Une fois connecté en **SSH**, exécutez les commandes suivantes :

- Rendez-vous dans le « dossier racine » dans lequel vous souhaitez instaler votre WordPress sur votre hébergement web :

```bash
cd NameOfYourTargetFolder
```

- Récupérez les fichiers sources de WordPress directement depuis votre « dossier racine » :

```bash
wget http://wordpress.org/latest.tar.gz
```

- Décompressez les fichiers sources de WordPress dans votre « dossier racine » :

```bash
tar xvf latest.tar.gz
```

- Un dossier « **wordpress** » est créé dans votre « dossier racine ». Déplacez son contenu à la base de votre « dossier racine » :

```bash
mv wordpress/* ./
```

- Supprimez le dossier « **wordpress** » désormais vide :

```bash
rmdir ./wordpress/
```

- Supprimez le fichier compressé « **latest.tar.gz** » :

```bash
rm -f latest.tar.gz
```

### Etape 3 - finaliser l'installation manuelle <a name="step3"></a>

> [!success]
>
> Avant de continuer l'installation, videz le cache de votre navigateur Internet, afin d'éviter toute erreur.
>

#### 3.1 - Se rendre sur votre site WordPress via votre navigateur

Saisissez votre domaine dans la barre de recherche de votre navigateur Internet.

Si les fichiers sources de WordPress ont été placés correctement dans votre dossier racine, la page WordPress permettant de sélectionner la langue apparaît :

![hosting](images/WPselectlangue.png){.thumbnail}

Sélectionnez la langue du site puis cliquez sur `Continuer`{.action}.

#### 3.2 - Lier votre WordPress et votre base de données

WordPress va vous demander de récupérer les identifiants de connexion à votre base de données :

![hosting](images/WPstart.png){.thumbnail}

Munissez-vous des identifiants de votre base de données (au besoin, consulez [l'étape 1.4](#step1-4) de ce guide) puis cliquez sur `C'est parti !`{.action} pour continuer.

La page suivante apparaît :

![hosting](images/WPdb.png){.thumbnail}

Renseignez les informations demandées concernant la base de données :

- Nom de la base de données : ce nom a été défini lors de la création de la base de données dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

- Identifiant : il est identique au nom de la base de données si vous utilisez une base de données incluse avec votre hébergement web.
Pour les bases de données créées sur un Web Cloud Databases, référez-vous aux informations indiquées dans [l'étape 1.4](#step1-4) de ce guide.

- Mot de passe : il vous a été envoyé par e-mail lors de la création de la base de données. Il est possible que vous l'ayiez modifié entre temps.

- Adresse de la base de données : renseignez le nom du serveur de votre base de données, présent dans l'e-mail d'installation ou dans votre espace client OVHcloud. 

> [!primary]
> 
> - Le nom du serveur d'une bases de données incluse avec votre offre d'hébergement Web a généralement cette forme : `NameOfYourDatabase.mysql.db`. 
>
> - Le nom du serveur d'une base de données Web Cloud Databases commence par votre identifiant client OVHcloud et a la forme suivante : `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` où les **« X »** sont à remplacer par la référence de votre service Web Cloud Databases.
>

- Préfixe des tables : si l'installation se fait avec une toute nouvelle base de données, renseignez le « préfixe » de votre choix. Si vous utilisez une base de données déjà utilisée par un autre site, référez-vous à [l'étape 1.4](#step1-4) de ce guide pour ne pas renseigner un « préfixe » de table déjà utilisé dans votre base de données.

Cliquez sur `Soumettre`{.action} pour valider les informations de connexion à la base de données.

Si tout c'est bien passé, la page suivante apparaît :

![hosting](images/WPafterDB.png){.thumbnail}

Cliquez sur `Lancer l'installation`{.action}.

#### 3.3 - Définir l'accès Administrateur au « back-office » de votre WordPress et votre e-mail de contact

Une fois l'installation réalisée, WordPress va vous demander des informations sur votre futur site, dont la création de votre identifiant Administrateur WordPress.

Ce dernier vous permettra ensuite d'accéder à l'espace d'administration, communément appelé « Back-office », de votre CMS WordPress.

![hosting](images/WPafterDB2.png){.thumbnail}

Renseignez les informations demandées :

- Titre du site : renseignez le titre de votre site.
- Identifiant : définissez l'identifiant Administrateur de votre CMS.
- Mot de passe : définissez un mot de passe pour cet identifiant Administrateur.
- Votre adresse de messagerie : renseignez une adresse e-mail valide.
- Vie privée : cochez cette case pour que les moteurs de recherche référencent votre WordPress.

Cliquez sur `Installer WordPress`{.action} dès que tout est correctement renseigné.

#### 3.4 - Finaliser l'installation manuelle et tester l'accès « Administrateur »

L'installation est termninée si la page suivante s'affiche :

![hosting](images/WPend.png){.thumbnail}

Il ne vous reste plus qu'à cliquer sur le bouton `Se connecter`{.action} pour tester l'accès au « Back-office » de votre nouveau CMS WordPress à l'aide des identifiants Administrateur préalablement créés lors de l'étape 3.3 juste avant.

> [!primary]
>
> Les équipes OVHcloud n'assurent pas de support sur des solutions tierces telles que WordPress, elles ne peuvent donc pas vous accompagner sur l'utilisation ou la configuration de votre CMS WordPress.
>
> Pour un accompagnement de ce type, nous vous invitons à utiliser les forums dédiés à la solution WordPress.
>

Une fois connecté, la page suivante apparaît :

![hosting](images/WPadminInterface.png){.thumbnail}

> [!success]
>
> Vous pouvez maintenant démarrer la création du contenu de votre site WordPress !
>

## Aller plus loin <a name="go-further"></a>

[Site officiel WordPress](https://wordpress.org)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.