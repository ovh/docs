---
title: "Tutoriel - Installer Spip sur son hébergement web OVHcloud"
excerpt: "Découvrez comment installer manuellement le CMS Spip sur un hébergement web OVHcloud"
updated: 2024-03-28
---

## Objectif

Le **CMS** (**C**ontent **M**anagement **S**ystem) SPIP est une solution adaptée aux sites éditoriaux comme les magazines en ligne, les journaux ou les sites institutionnels. Grâce à son architecture modulaire et à son système de squelettes personnalisables, SPIP permet de concevoir des sites web riches en fonctionnalités, tout en offrant une grande liberté de personnalisation.

**Découvrez comment installer manuellement le CMS Spip sur votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting) incluant au moins une base de données.
- Disposer d'un [nom de domaine](/links/web/domains).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Préparer l'installation

Pour installer le CMS **Spip** sur votre [hébergement web](/links/web/hosting), quelques préparatifs sont nécessaires.

Suivez l'**ensemble des étapes** décrites dans notre tutoriel sur l'[installation manuelle d'un CMS](/pages/web_cloud/web_hosting/cms_manual_installation) avant de poursuivre à l'étape suivante.

### Finaliser l'installation manuelle

> [!primary]
>
> Avant de continuer l'installation, videz le cache de votre navigateur Internet, afin d'éviter tout dysfonctionnement.
>

#### Se rendre sur votre site web Spip via votre navigateur

Saisissez `your_domain/ecrire` dans la barre de recherche de votre navigateur Internet pour démarrer l'installation de votre site web Spip. La page suivante s'affiche :

![Spip installation](/pages/assets/screens/other/cms/spip/installation_first_step.png){.thumbnail}

Sélectionnez la langue de votre site web Spip et cliquez sur `Next`{.action} pour confirmer. L'écran suivant s'affiche :

![Spip installation](/pages/assets/screens/other/cms/spip/installation_second_step.png){.thumbnail}

Saisissez les informations pour vous connecter à votre SGBD (MySQL par exemple). Une fois la connexion à votre base de données réussie, l'écran suivant s'affiche :

![Spip installation](/pages/assets/screens/other/cms/spip/installation_third_step.png){.thumbnail}

Sélectionnez la base de données que vous souhaitez utiliser pour votre site web ou [créez en une nouvelle](/pages/web_cloud/web_hosting/sql_create_database). Choisissez un préfixe pour les tables de votre base de données. Par défaut, le préfixe `spip` est utilisé. Cliquez sur `Next`{.action} pour valider les informations. L'écran suivant s'affiche :

![Spip installation](/pages/assets/screens/other/cms/spip/installation_fourth_step.png){.thumbnail}

Entrez les informations demandées et cliquez sur `Next`{.action} pour confirmer. L'écran suivant s'affiche :

![Spip installation](/pages/assets/screens/other/cms/spip/installation_fifth_step.png){.thumbnail}

L'écran présente la liste des plugins disponibles pour votre site web et vous informe que l'installation de Spip s'est bien déroulée.

### Conclusion

Vous venez d'installer manuellement le CMS Spip sur votre hébergement web OVHcloud. Votre site web Spip est accessible en ligne via votre nom de domaine. Pour vous connecter à l'espace administrateur de votre site web Spip, saisissez `your_domain/ecrire` dans la barre de recherche de votre navigateur Internet.

## Aller plus loin <a name="go-further"></a>

[Tutoriel - Installer manuellement WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutoriel - Installer manuellement Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutoriel - Installer manuellement Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutoriel - Installer manuellement PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutoriel - Installer Pico sur son hébergement web OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation_pico)

[Tutoriel - Installer Typo3 sur son hébergement web OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutoriel - Installer Grav sur son hébergement web OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation_grav)

[Tutoriel - Installer manuellement un CMS sur mon hébergement](/pages/web_cloud/web_hosting/cms_manual_installation)

[Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).