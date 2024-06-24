---
title: "Tutoriel - Installer Pico sur son hébergement web OVHcloud"
excerpt: "Découvrez comment installer manuellement le CMS Pico sur un hébergement web OVHcloud"
updated: 2024-03-21
---

## Objectif

Le **CMS** (**C**ontent **M**anagement **S**ystem) Pico permet de créer rapidement des sites web. Conçu pour créer et gérer du contenu facilement grâce à des fichiers Markdown, Pico est idéal pour concevoir des sites web personnels, des portfolios ou des projets de petites entreprises.

**Découvrez comment installer manuellement le CMS Pico sur votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting).
- Disposer d'un [nom de domaine](/links/web/domains).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Préparer l'installation

Pour installer le CMS **Pico** sur votre [hébergement web](/links/web/hosting), quelques préparatifs sont nécessaires.

Suivez l'**ensemble des étapes** décrites dans notre tutoriel sur l'[installation manuelle d'un CMS](/pages/web_cloud/web_hosting/cms_manual_installation) avant de poursuivre à l'étape suivante.

### Finaliser l'installation manuelle

> [!primary]
>
> Avant de continuer l'installation, videz le cache de votre navigateur Internet, afin d'éviter toute erreur.
>

#### Se rendre sur votre site web Pico via votre navigateur

Saisissez votre nom de domaine dans la barre de recherche de votre navigateur Internet.

Si les fichiers source de Pico ont été placés correctement dans votre dossier racine, la page suivante apparaît :

![Pico installation](/pages/assets/screens/other/cms/pico/welcome_page.png){.thumbnail}

Pico est un CMS basé sur des fichiers, ce qui signifie que toute la configuration et la création de contenu se font directement en modifiant les fichiers sur le serveur. Voici les étapes à suivre pour configurer et personnaliser votre site web Pico.

#### Comprendre la structure des dossiers de Pico

Après l'installation, vous trouverez plusieurs dossiers et fichiers dans le répertoire principal de Pico. Les plus importants sont :

- `content/` : contient les fichiers Markdown de votre contenu
- `config/` : contient le fichier de configuration `config.yml` de Pico
- `themes/` : contient les thèmes de votre site web
- `assets/` : contient les ressources statiques comme des images, des feuilles de style CSS, des scripts JavaScript, etc.
- `plugins/` : contient les plugins que vous souhaitez utiliser

#### Configuration de base

**1. Configurer votre site web** : ouvrez le fichier `config/config.yml` avec un éditeur de texte. Configurez ici les paramètres de base de votre site web, tels que le titre, la description, l'URL ou les thèmes.

**2. Changer le titre et la description de votre site web** : recherchez les lignes pour `site_title:` et `site_description:` dans le fichier `config/config.yml` pour mettre à jour le titre et la description de votre site web.

**3. Changer le titre et la description de votre site web** : si vous avez un nom de domaine spécifique, recherchez la ligne pour `base_url:` dans le fichier `config/config.yml` pour mettre à jour le nom de domaine de votre site web. Sinon, laissez la valeur `~` par défaut.

#### Ajouter du contenu

**1. Créer des pages** : pour ajouter une nouvelle page à votre site web, créez un nouveau fichier Markdown (.md) dans le dossier `content/`. Le nom du fichier déterminera l'URL de la page. Par exemple, `about.md` sera accessible à http://yourdomain.tld/about.

**2. Écrire du contenu** : ouvrez le fichier Markdown avec un éditeur de texte et commencez à écrire votre contenu. Utilisez la syntaxe Markdown pour formater votre texte, créer des liens, insérer des images, etc. Par exemple, si vous voulez éditer la page principale (home) de votre site web, ouvrez le fichier `index.md` et insérez le contenu de votre choix.

**3. Vérifier le contenu** : les fichiers Markdown doivent avoir un en-tête YAML valide. Si l'en-tête manque ou est mal formaté, Pico peut ne pas le reconnaître comme une page valide. Un exemple d'en-tête YAML valide est :

```bash
---
title: About
---
Your content here
```

#### Personnaliser le thème

**1. Sélectionner un thème** : Pico est installé avec un thème par défaut, mais vous pouvez en télécharger d'autres depuis le [site web officiel de Pico](https://picocms.org/themes/) ou créer le vôtre.

**2. Modifier le thème** : pour changer de thème, mettez à jour la section `theme:` dans le fichier `config/config.yml` avec le nom du dossier du thème que vous souhaitez utiliser.

**3. Personnaliser le thème** : vous pouvez modifier les fichiers du thème dans `themes/yourtheme/` pour personnaliser l'apparence de votre site web. Cela peut inclure l'édition de fichiers HTML Twig, CSS, et JavaScript.

#### Ajouter des plugins

Pico permet d'étendre ses fonctionnalités avec des plugins.

**1. Trouver des plugins** : consultez le [site web officiel de Pico](https://picocms.org/plugins/) pour accéder à la liste des plugins disponibles.

**2. Installer un plugin** : téléchargez le plugin et placez-le dans le dossier `plugins/` de votre installation Pico.

**3. Configurer le plugin** : certains plugins nécessitent une configuration supplémentaire dans `config/config.yml`. Suivez les instructions fournies avec le plugin.

### Conclusion

Vous venez d'installer manuellement le CMS Pico sur votre hébergement web OVHcloud. Après avoir configuré votre site web, ajouté du contenu, personnalisé le thème et installé des plugins, votre site web Pico est accessible en ligne via votre nom de domaine.

## Aller plus loin <a name="go-further"></a>

[Tutoriel - Installer manuellement WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutoriel - Installer manuellement Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutoriel - Installer manuellement Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutoriel - Installer manuellement PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutoriel - Installer Typo3 sur son hébergement web OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutoriel - Installer Grav sur son hébergement web OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation_grav)

[Tutoriel - Installer Spip sur son hébergement web OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutoriel - Installer manuellement un CMS sur mon hébergement](/pages/web_cloud/web_hosting/cms_manual_installation)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).