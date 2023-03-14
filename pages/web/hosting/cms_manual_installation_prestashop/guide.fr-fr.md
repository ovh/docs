---
title: "Tutoriel - Installer manuellement PrestaShop"
slug: installer-manuellement-prestashop
excerpt: "Découvrez comment installer manuellement votre CMS PrestaShop"
section: CMS
order: 06
updated: 2023-03-10
---

**Dernière mise à jour le 10/03/2023**

## Objectif

Ce tutoriel a pour objectif de vous aider à installer manuellement le CMS (Content Management System) PrestaShop en quelques étapes.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) ou [l'éditeur du CMS PrestaShop](https://www.prestashop.com/en/support){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

> [!success]
>
> Pour installer PrestaShop **automatiquement** depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), consultez notre documentation sur l'[installation d'un module « en un clic »](https://docs.ovh.com/fr/hosting/modules-en-1-clic/).
>
> Pour installer **manuellement un autre CMS** (WordPress, Joomla!, Drupal), consultez notre documentation sur l'[installation manuelle d'un CMS](https://docs.ovh.com/fr/hosting/mutualise-installer-manuellement-mon-cms/).
>

## Prérequis

- Disposer d'une offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/) qui contient au moins une base de données.
- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/)
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}

## En pratique

### Etape 1 - préparer l'installation <a name="step1"></a>

Pour installer le CMS **PrestaShop** sur votre offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/), quelques préparatifs sont nécessaires.

Suivez l'**ensemble des étapes** décrites dans notre tutoriel sur l'[installation manuelle d'un CMS](https://docs.ovh.com/fr/hosting/mutualise-installer-manuellement-mon-cms/) avant de poursuivre à l'étape 2 ci-dessous.

### Etape 2 - finaliser l'installation manuelle <a name="step2"></a>

> [!success]
>
> Avant de continuer l'installation, videz le cache de votre navigateur Internet, afin d'éviter toute erreur.
>

Si vous n'avez pas téléchargé la dernière version disponible de PrestaShop, la page suivante apparaît :

![PrestaShop installation step 1](images/Prestashop-install-update-version.png){.thumbnail}

Cliquez sur `No thanks`{.action} si vous souhaitez conserver la version de PrestaShop que vous venez de télécharger ou sur `Yes please!`{.action} si vous souhaitez utilisez la version la plus récente du CMS.

#### 2.1 - Se rendre sur votre site PrestaShop via votre navigateur

Saisissez votre domaine dans la barre de recherche de votre navigateur Internet.

Si les fichiers sources de WordPress ont été placés correctement dans votre dossier racine, la page WordPress permettant de sélectionner la langue apparaît :

![PrestaShop installation step 2](images/Prestashop-install-select-language.png){.thumbnail}

Sélectionnez la langue du site puis cliquez sur `Suivant`{.action}.

#### 2.2 - Valider les conditions d'utilisation

Lisez les conditions d'utilisation, cochez la case `J'accepte les termes et conditions ci-dessus`{.action} puis cliquez sur `Suivant`{.action}.

![PrestaShop installation step 3](images/Prestashop-install-licence-agreement-3.png){.thumbnail}

#### 2.4 - Renseigner les informations de votre boutique en ligne

PrestaShop vous demande une série d'informations sur votre future boutique en ligne :

![PrestaShop installation step 4](images/Prestashop-install-store-infos-4.png){.thumbnail}

**Informations à propos de votre boutique**

- *Nom de votre boutique* : Saisissez le nom de votre boutique en ligne
- *Activité principale* : Sélectionnez votre secteur d'activité parmi les propositions de la liste déroulante
- *Pays* : Sélectionnez votre pays
- *Activer le SSL* : Cochez **Yes** pour forcer la réécriture de votre URL en « https:// ». Vous devez au préalable disposer d'un certificat SSL actif sur votre hébergemet ou votre nom de domaine. Pour plus d'informations sur ce sujet, consulter notre guide sur [la gestion d'un certificat SSL sur votre hébergement web OVHcloud](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/).

**Votre compte**

- *Prénom* : Saisissez votre prénom
- *Nom* : Saisissez votre nom
- *Adresse e-mail* : Saisissez votre adresse e-mail
- *Mot de passe de la boutique* : Choisissez un mot de passe pour accéder à l'espace d'administration de votre boutique en ligne (backoffice)
- *Confirmer mot de passe* : Saisissez à nouveau le mot de passe

Vérifiez les informations saisies puis cliquez sur `Suivant`{.action}.

#### 2.5 - Installer le contenu par défaut pour votre boutique

PrestaShop vous propose d'installer du contenu et des modules pour votre future site de E-commerce :

![PrestaShop installation step 5](images/Prestashop-install-store-content-5.png){.thumbnail}

Sélectionnez vos choix puis cliquez sur `Suivant`{.action}

#### 2.6 - Lier votre PrestaShop avec votre base de données OVHcloud

![PrestaShop installation step 6](images/Prestashop-install-db-config-6.png){.thumbnail}

Renseignez les informations demandées concernant la base de données :

- *Adresse de la base de données* : renseignez le nom du serveur de votre base de données, présent dans l'e-mail d'installation ou dans votre espace client OVHcloud. 

- *Nom de la base de données* : ce nom a été défini lors de la création de la base de données dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

- *Identifiant* : il est identique au nom de la base de données si vous utilisez une base de données incluse avec votre hébergement web.
Pour les bases de données créées sur un Web Cloud Databases, référez-vous aux informations indiquées dans **l'étape 1.4** du tutoriel sur l'[installation manuelle d'un CMS](https://docs.ovh.com/fr/hosting/mutualise-installer-manuellement-mon-cms/).

- *Mot de passe* : il vous a été envoyé par e-mail lors de la création de la base de données. Il est possible que vous l'ayiez modifié entre temps.

> [!primary]
> 
> - Le nom du serveur d'une bases de données incluse avec votre offre d'hébergement Web a généralement cette forme : `NameOfYourDatabase.mysql.db`. 
>
> - Le nom du serveur d'une base de données Web Cloud Databases commence par votre identifiant client OVHcloud et a la forme suivante : `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` où les **« X »** sont à remplacer par la référence de votre service Web Cloud Databases.
>

- *Préfixe des tables* : si l'installation se fait avec une toute nouvelle base de données, renseignez le « préfixe » de votre choix. Si vous utilisez une base de données déjà utilisée par un autre site, référez-vous à **l'étape 1.4** du tutoriel sur l'[installation manuelle d'un CMS](https://docs.ovh.com/fr/hosting/mutualise-installer-manuellement-mon-cms/) pour ne pas renseigner un « préfixe » de table déjà utilisé dans votre base de données.

- *Supprimer les tables existantes* : **Décochez cette case si vous utiliser déjà votre base de données avec un autre site web**.

>[!alert]
>
> Si vous laissez cocher la case **Supprimer les tables existantes**, cela supprimera toutes les tables déjà présentes dans votre base de données.
>

Cliquez sur `Testez dès maintenant la connexion à votre base de données!`{.action} pour vérifier les paramètres saisis :

![PrestaShop installation step 6-1](images/Prestashop-install-db-config-6-1.png){.thumbnail}

Si le message « Votre base de données est connectée » apparaît, cliquez sur `Suivant`{.action}. Sinon, vérifiez les paramètres que vous avez saisi jusqu'à ce que la connexion fonctionne. Si besoin, référez-vous à **l'étape 1.4** du tutoriel sur l'[installation manuelle d'un CMS](https://docs.ovh.com/fr/hosting/mutualise-installer-manuellement-mon-cms/).

#### 2.7 - Terminer l'installation de PrestaShop

La dernière étape correspond à un résumé de l'installation que vous venez de réaliser :

![PrestaShop installation step 7](images/Prestashop-install-resume-7.png){.thumbnail}

Récupérez vos identifiants de connexion à votre Prestashop avant de quitter la page.

>[!warning]
>
> **A des fins de sécurité, il est recommandé de supprimer le dossier d'installation présent sur votre espace FTP.**
>
> Pour réaliser cette action, consultez notre guide sur [comment se connecter à l'espace de stockage FTP de son hébergement web OVHcloud](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) puis consultez les [forums PrestaShop](https://www.prestashop.com/forums/){.external} afin de supprimer les bons fichiers.
>

> [!success]
>
> Vous pouvez maintenant démarrer la création du contenu de votre site PrestaShop !
>

## Aller plus loin <a name="go-further"></a>

[Site officiel PrestaShop](https://prestashop.com)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.