---
title: "Tutoriel - Installer manuellement Spip"
excerpt: "Découvrez comment installer le CMS Spip sur un hébergement web OVHcloud"
updated: 2024-03-28
---

## Objectif

Le **CMS** (**C**ontent **M**anagement **S**ystem) SPIP est une solution adaptée aux sites éditoriaux comme les magazines en ligne, les journaux ou les sites institutionnels. Grâce à son architecture modulaire et à son système de squelettes personnalisables, SPIP permet de concevoir des sites web riches en fonctionnalités, tout en offrant une grande liberté de personnalisation.

**Découvrez comment installer manuellement le CMS Spip sur votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](hosting.) incluant au moins une base de données.
- Disposer d'un [nom de domaine](domains.).
- Être connecté à votre [espace client OVHcloud](manager.).

## En pratique

### Préparer l'installation

Pour installer le CMS **Spip** sur votre [hébergement web](hosting.), quelques préparatifs sont nécessaires.

Suivez l'**ensemble des étapes** décrites dans notre tutoriel sur l'[installation manuelle d'un CMS](cms_manual_installation1.) avant de poursuivre à l'étape suivante.

### Finaliser l'installation manuelle

> [!primary]
>
> Avant de continuer l'installation, videz le cache de votre navigateur Internet, afin d'éviter tout dysfonctionnement.
>

#### Se rendre sur votre site web Spip via votre navigateur

Saisissez `your_domain/ecrire` dans la barre de recherche de votre navigateur Internet pour démarrer l'installation de votre site web Spip. La page suivante s'affiche :

![Spip installation](installation_first_step.png){.thumbnail}

Sélectionnez la langue de votre site web Spip et cliquez sur `Next`{.action} pour confirmer. L'écran suivant s'affiche :

![Spip installation](installation_second_step.png){.thumbnail}

Saisissez les informations pour vous connecter à votre SGBD (MySQL par exemple). Une fois la connexion à votre base de données réussie, l'écran suivant s'affiche :

![Spip installation](installation_third_step.png){.thumbnail}

Sélectionnez la base de données que vous souhaitez utiliser pour votre site web ou [créez en une nouvelle](sql_create_database1.). Choisissez un préfixe pour les tables de votre base de données. Par défaut, le préfixe `spip` est utilisé. Cliquez sur `Next`{.action} pour valider les informations. L'écran suivant s'affiche :

![Spip installation](installation_fourth_step.png){.thumbnail}

Entrez les informations demandées et cliquez sur `Next`{.action} pour confirmer. L'écran suivant s'affiche :

![Spip installation](installation_fifth_step.png){.thumbnail}

L'écran présente la liste des plugins disponibles pour votre site web et vous informe que l'installation de Spip s'est bien déroulée.

### Conclusion

Vous venez d'installer manuellement le CMS Spip sur votre hébergement web OVHcloud. Votre site web Spip est accessible en ligne via votre nom de domaine. Pour vous connecter à l'espace administrateur de votre site web Spip, saisissez `your_domain/ecrire` dans la barre de recherche de votre navigateur Internet.

## Aller plus loin <a name="go-further"></a>

[Tutoriel - Installer manuellement WordPress](cms_manual_installation_wordpress1.)

[Tutoriel - Installer manuellement Joomla!](cms_manual_installation_joomla1.)

[Tutoriel - Installer manuellement Drupal](cms_manual_installation_drupal1.)

[Tutoriel - Installer manuellement PrestaShop](cms_manual_installation_prestashop1.)

[Tutoriel - Installer manuellement Pico](cms_manual_installation_pico1.)

[Tutoriel - Installer manuellement Typo3](cms_manual_installation_typo31.)

[Tutoriel - Installer manuellement Grav](cms_manual_installation_grav1.)

[Tutoriel - Installer manuellement un CMS sur mon hébergement](cms_manual_installation1.)

[Créer une base de données sur son hébergement web](sql_create_database1.)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](partner.).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.