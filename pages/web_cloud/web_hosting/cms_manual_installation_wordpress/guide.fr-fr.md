---
title: "Tutoriel - Installer manuellement WordPress"
excerpt: "Découvrez comment installer manuellement votre CMS WordPress"
updated: 2023-03-09
---

**Dernière mise à jour le 09/03/2023**

## Objectif

Ce tutoriel a pour objectif de vous aider à installer manuellement le CMS (Content Management System) WordPress en quelques étapes.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) ou [l'éditeur du CMS WordPress](https://wordpress.com/fr/support/){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

> [!success]
>
> Pour installer WordPress **automatiquement** depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), consultez notre documentation sur l'[installation d'un module « en un clic »](/pages/web_cloud/web_hosting/cms_install_1_click_modules).
>
> Pour installer **manuellement un autre CMS** (Joomla!, Drupal, PrestaShop), consultez notre documentation sur l'[installation manuelle d'un CMS](/pages/web_cloud/web_hosting/cms_manual_installation).
>

**Découvrez comment installer manuellement votre CMS WordPress**

## Prérequis

- Disposer d'une offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/) qui contient au moins une base de données.
- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/)
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}

## En pratique

### Etape 1 - préparer l'installation <a name="step1"></a>

Pour installer le CMS **WordPress** sur votre offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/), quelques préparatifs sont nécessaires.

Suivez l'**ensemble des étapes** décrites dans notre tutoriel sur l'[installation manuelle d'un CMS](/pages/web_cloud/web_hosting/cms_manual_installation) avant de poursuivre à l'étape 2 ci-dessous.

### Etape 2 - finaliser l'installation manuelle <a name="step2"></a>

> [!success]
>
> Avant de continuer l'installation, videz le cache de votre navigateur Internet, afin d'éviter toute erreur.
>

#### 2.1 - Se rendre sur votre site WordPress via votre navigateur

Saisissez votre domaine dans la barre de recherche de votre navigateur Internet.

Si les fichiers sources de WordPress ont été placés correctement dans votre dossier racine, la page WordPress permettant de sélectionner la langue apparaît :

![hosting](images/WPselectlangue.png){.thumbnail}

Sélectionnez la langue du site puis cliquez sur `Continuer`{.action}.

#### 2.2 - Lier votre WordPress et votre base de données

WordPress va vous demander de récupérer les identifiants de connexion à votre base de données :

![hosting](images/WPstart.png){.thumbnail}

Munissez-vous des identifiants de votre base de données (au besoin, consultez **l'étape 1.4** du tutoriel sur l'[installation manuelle d'un CMS](/pages/web_cloud/web_hosting/cms_manual_installation)) puis cliquez sur `C'est parti !`{.action} pour continuer.

La page suivante apparaît :

![hosting](images/WPdb.png){.thumbnail}

Renseignez les informations demandées concernant la base de données :

- *Nom de la base de données* : ce nom a été défini lors de la création de la base de données dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

- *Identifiant* : il est identique au nom de la base de données si vous utilisez une base de données incluse avec votre hébergement web.
Pour les bases de données créées sur un Web Cloud Databases, référez-vous aux informations indiquées dans **l'étape 1.4** du tutoriel sur l'[installation manuelle d'un CMS](/pages/web_cloud/web_hosting/cms_manual_installation).

- *Mot de passe* : vous l'avez vous-même défini lors de la création de votre base de données. Il est possible que vous l'ayiez modifié entre temps.

- *Adresse de la base de données* : renseignez le nom du serveur de votre base de données, présent dans l'e-mail d'installation ou dans votre espace client OVHcloud. 

> [!primary]
> 
> - Le nom du serveur d'une bases de données incluse avec votre offre d'hébergement Web a généralement cette forme : `NameOfYourDatabase.mysql.db`. 
>
> - Le nom du serveur d'une base de données Web Cloud Databases commence par votre identifiant client OVHcloud et a la forme suivante : `OVHID(sans-ovh)-XXX.eu.clouddb.ovh.net` où les **« X »** sont à remplacer par la référence de votre service Web Cloud Databases.
>

- *Préfixe des tables* : si l'installation se fait avec une toute nouvelle base de données, renseignez le « préfixe » de votre choix. Si vous utilisez une base de données déjà utilisée par un autre site, référez-vous à **l'étape 1.4** du tutoriel sur l'[installation manuelle d'un CMS](/pages/web_cloud/web_hosting/cms_manual_installation) pour ne pas renseigner un « préfixe » de table déjà utilisé dans votre base de données.

Cliquez sur `Soumettre`{.action} pour valider les informations de connexion à la base de données.

Si tout s'est bien passé, la page suivante apparaît :

![hosting](images/WPafterDB.png){.thumbnail}

Cliquez sur `Lancer l'installation`{.action}.

#### 2.3 - Définir l'accès Administrateur au « back-office » de votre WordPress et votre e-mail de contact

Une fois l'installation réalisée, WordPress va vous demander des informations sur votre futur site, dont la création de votre identifiant Administrateur WordPress.

Ce dernier vous permettra ensuite d'accéder à l'espace d'administration, communément appelé « Back-office », de votre CMS WordPress.

![hosting](images/WPafterDB2.png){.thumbnail}

Renseignez les informations demandées :

- *Titre du site* : renseignez le titre de votre site.
- *Identifiant* : définissez l'identifiant Administrateur de votre CMS.
- *Mot de passe* : définissez un mot de passe pour cet identifiant Administrateur.
- *Votre adresse de messagerie* : renseignez une adresse e-mail valide.
- *Vie privée* : décochez cette case pour que les moteurs de recherche référencent votre WordPress.

Cliquez sur `Installer WordPress`{.action} dès que tout est correctement renseigné.

#### 2.4 - Finaliser l'installation manuelle et tester l'accès « Administrateur »

L'installation est termninée si la page suivante s'affiche :

![hosting](images/WPend.png){.thumbnail}

Il ne vous reste plus qu'à cliquer sur le bouton `Se connecter`{.action} pour tester l'accès au « Back-office » de votre nouveau CMS WordPress à l'aide des identifiants Administrateur préalablement créés lors de l'étape 2.3 de ce tutoriel.

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

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
