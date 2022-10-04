---
title: "Tutoriel - Installer manuellement WordPress"
slug: installer-manuellement-wordpress
excerpt: "Découvrez comment installer manuellement votre CMS WordPress"
section: CMS
order: 07
---

**Dernière mise à jour le 04/10/2022**

## Objectif

Ce tutoriel a pour objectif de vous aider à installer manuellement un CMS (Content Management System) WordPress.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

> [!primary]
>
> Pour toute demande précise liée au CMS, nous vous invitons à vous rapprocher de [l'éditeur du CMS WordPress](https://wordpress.com/fr/support/){.external}, ou des communautés en rapport avec celui-ci.
>

Pour installer manuellement un autre CMS (Joomla!, Drupal, Prestashop), consultez [ce guide](https://docs.ovh.com/fr/hosting/mutualise-installer-manuellement-mon-cms/).

> [!success]
>
> Pour installer WordPress de manière automatique depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), consultez notre documentation sur l'installation d'un [module "en un clic"](https://docs.ovh.com/fr/hosting/modules-en-1-clic/).
>

## Prérequis

- Disposer d'une offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/) qui contient au moins une base de données.
- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/)

## En pratique

### Partie 1 : préparation de l'installation

Pour installer la plateforme  **WordPress**  sur votre offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/), effectuez les actions suivantes :

- Installez le client **FTP** [Filezilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/).

- Récupérez [les informations nécessaires pour vous connecter à l'espace FTP de votre hébergement web](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter)
- Récupérez les accès à la base de données de votre offre d'hébergement Web si elle existe déjà ou créez-en une à l'aide de notre [documentation](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/).


![hosting](images/3125.png){.thumbnail}


### Partie 2 : récuperation des fichiers sources
- Rendez-vous sur le site du développeur de [WordPress](http://fr.wordpress.org/){.external}.

Le fichier récupéré est **compressé** (zippé), vous devrez le  **décompresser** (extraire) dans un dossier sur votre ordinateur. Vous trouverez sur Internet différentes aides à ce sujet.

![hosting](images/3126.png){.thumbnail}


### Partie 3 : mise en place des fichiers sur l'hébergement via FTP

Ouvrez le dossier dans lequel vous avez téléchargé le dossier compressé.

Réalisez un clic droit sur le dossier en question, puis sélectionnez "Extraire tout...".

Indiquez une destination afin d'extraire vos fichiers dans un nouveau dossier.

Le dossier cible sera intitulé " **wordpress** "


![hosting](images/3127.png){.thumbnail}

Pour déposer les fichiers de  **WordPress**  sur votre hébergement, vous devez tout d'abord vous connecter à celui-ci.

*Consultez notre guide pour [se connecter à l’espace de stockage de son hébergement web](../connexion-espace-stockage-ftp-hebergement-web/)*


![hosting](images/3128.png){.thumbnail}

Suivez ces étapes pour déposer vos fichiers sur le FTP. Une fois connecté à FileZilla.

Dans la partie "Site local", qui correspond à la liste des fichiers présents sur votre ordinateur, ouvrez le dossier décompressé intitulé "wordpress" dans lequel sont présents les fichiers du CMS.

Dans la partie "Site distant" qui correspond dans ce cas à votre hébergement mutualisé OVH, ouvrez le dossier "www". C'est dans ce dossier que tous les fichiers du CMS devront être déposés.

*Si ce dossier n'existe pas il vous est possible de le créer.*

*Vos fichiers doivent obligatoirement être déposés dans le dossier "www" sinon la procédure d'installation ne sera pas accessible depuis votre nom de domaine.*


![hosting](images/3129.png){.thumbnail}

Une fois ces dossiers ouverts :

Dans la partie "Site local", vous retrouvez tous les fichiers nécessaires à l'installation du CMS WordPress.

Pour tous les sélectionner, réaliser la combinaison de touche  **CTRL+A** .

Réalisez ensuite le glisser-déposer des fichiers vers la partie "Site distant" dans le dossier "www".

*Il est fort probable que le dossier "www" ne soit pas vide. Il n'est pas obligatoire de supprimer les fichiers présents dedans. Nous reviendrons sur ce point dans la suite de ce guide.*


![hosting](images/3130.png){.thumbnail}

Le transfert des fichiers est en cours.

Attendez que la totalité des fichiers soit déposés sur le serveur FTP distant. Cela peut prendre quelques minutes.

Une fois le transfert terminé, assurez-vous que tous les fichiers et les dossiers ont été correctement transférés.

Cette opération conclut la partie consacrée au dépôt des fichiers sur le FTP.


![hosting](images/3131.png){.thumbnail}


### Partie 4 : lien avec la base de donnees
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