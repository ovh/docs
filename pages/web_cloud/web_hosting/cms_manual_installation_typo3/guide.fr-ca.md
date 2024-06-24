---
title: "Tutoriel - Installer Typo3 sur son hébergement web OVHcloud"
excerpt: "Découvrez comment installer manuellement le CMS Typo3 sur un hébergement web OVHcloud"
updated: 2024-03-28
---

## Objectif

Le **CMS** (**C**ontent **M**anagement **S**ystem) Typo3 permet de développer des sites web complexes et évolutifs, pour les entreprises de toutes tailles, des sites institutionnels aux plateformes de e-commerce. Avec une forte communauté de développeurs et un large éventail d'extensions, TYPO3 offre des outils puissants pour personnaliser et étendre votre site selon vos besoins spécifiques.

**Découvrez comment installer manuellement le CMS Typo3 sur votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting) incluant au moins une base de données.
- Disposer d'un [nom de domaine](/links/web/domains).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Préparer l'installation

Pour installer le CMS **Typo3** sur votre [hébergement web](/links/web/hosting), quelques préparatifs sont nécessaires.

Suivez l'**ensemble des étapes** décrites dans notre tutoriel sur l'[installation manuelle d'un CMS](/pages/web_cloud/web_hosting/cms_manual_installation) avant de poursuivre à l'étape suivante.

### Finaliser l'installation manuelle

> [!primary]
>
> Avant de continuer l'installation, videz le cache de votre navigateur Internet, afin d'éviter tout dysfonctionnement.
>

#### Se rendre sur votre site web Typo3 via votre navigateur

Saisissez votre nom de domaine dans la barre de recherche de votre navigateur Internet.

Si les fichiers source de Typo3 ont été placés correctement dans votre dossier racine, la page suivante apparaît :

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_one.png){.thumbnail}

Comme indiqué, créez un fichier vide nommé `FIRST_INSTALL` dans le répertoire où vous avez déposé vos fichiers et dossiers Typo3. Retournez sur votre navigateur Internet et actualisez la page. Si des erreurs surviennent, l'écran ci-dessous apparaît, avec la description des erreurs.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_2_error.png){.thumbnail}

Résolvez les erreurs ou cliquez sur `Continue with errors`{.action}.

La deuxième étape de l'installation s'affiche.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_2.png){.thumbnail}

Entrez les informations relatives à votre SGBD puis cliquez sur `Continue`{.action}.

La troisième étape de l'installation s'affiche.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_3.png){.thumbnail}

Sélectionnez le nom de la base de données que vous souhaitez utiliser pour votre site web, ou [créez-en une nouvelle](/pages/web_cloud/web_hosting/sql_create_database), puis cliquez sur `Continue`{.action}.

La quatrième étape de l'installation s'affiche.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_4.png){.thumbnail}

Entrez le nom de votre site web, ainsi que les informations relatives à votre utilisateur admin.

La cinquième et dernière étape de l'installation s'affiche.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_5.png){.thumbnail}

Lisez les informations affichées à l'écran et choisissez l'option qui vous convient :

- `Create empty starting page` : sélectionnez cette option pour créer une page par défaut pour votre site web. Après avoir validé cette étape, saisissez votre nom de domaine dans votre navigateur Internet pour accéder à votre site web Typo3.
- `Take me straight to the backend` : sélectionnez cette option pour être redirigé vers le dashboard de votre site web Typo3. Via ce dashboard, vous devrez créer vous-même vos pages web, alimenter leur contenu et bien plus. Retrouvez plus d'informations dans la [documentation officielle de Typo3](https://docs.typo3.org/Home/GettingStarted.html){.external}.

Cliquez sur `Open the TYPO3 Backend`{.action} pour confirmer l'option que vous venez de choisir.

### Conclusion

Vous venez d'installer manuellement le CMS Typo3 sur votre hébergement web OVHcloud. Après avoir configuré votre site web, ajouté du contenu, personnalisé le thème et installé des plugins, votre site web Typo3 est accessible en ligne via votre nom de domaine.

## Aller plus loin <a name="go-further"></a>

[Tutoriel - Installer manuellement WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutoriel - Installer manuellement Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutoriel - Installer manuellement Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutoriel - Installer manuellement PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutoriel - Installer Pico sur son hébergement web OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation_pico)

[Tutoriel - Installer Grav sur son hébergement web OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation_grav)

[Tutoriel - Installer Spip sur son hébergement web OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutoriel - Installer manuellement un CMS sur mon hébergement](/pages/web_cloud/web_hosting/cms_manual_installation)

[Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).