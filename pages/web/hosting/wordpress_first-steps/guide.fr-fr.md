---
title: "Tutoriel - WordPress, premiers pas"
slug: wordpress-first-steps
excerpt: "Découvrez comment créer un site web avec le CMS WordPress"
section: Tutoriel
order: 06
---

**Dernière mise à jour le 12/01/2023**

## Objectif

Ce tutoriel va vous permettre de créer vos premiers contenus, les organiser, les mettre en ligne et changer le thème de votre site web avec le Content Managment System (CMS) **WordPress**. Vous pourrez réaliser votre site web avec un large choix de thématiques&nbsp;: site web de votre entreprise, blog, faire connaître votre activité ou vos passions, sans connaissances particulières en programmation.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) ou à [l'éditeur du CMS WordPress](https://wordpress.com/fr/support/){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

**Découvrez comment créer un site web avec le CMS WordPress.**

## Prérequis

- Disposer d'une offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/) qui contient au moins une base de données.
- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/)
- Avoir [installé Wordpress](https://docs.ovh.com/fr/hosting/modules-en-1-clic/) sur votre hébergement web
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}

## En pratique

Si ce n'est pas déjà le cas et avant de poursuivre, [ajoutez un certificat SSL]((https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/#etape-1-activer-le-certificat-ssl-sur-lhebergement)) pour le nom de domaine avec lequel vous souhaitez utiliser votre site web.

Lors de l'installation de votre CMS en 1-clic, vous avez reçu un e-mail contenant des éléments nécessaires à la poursuite de ce tutoriel&nbsp;:

- le lien d'accès à l'interface d'administration
- le nom de l'administrateur
- un lien pour obtenir le mot de passe administrateur.

Récupérez ces éléments avant de poursuivre.

### Se connecter à l'interface d'administration

Rendez-vous sur le lien d'accès à l'interface d'administration communiqué par e-mail lors de l'installation du CMS. Par défaut, l'URL se termine par `wp-admin`. Si vous ne vous êtes pas authentifié sur votre interface d'administration, **WordPress** vous redirigera automatiquement sur votre URL se terminant par `wp-login`&nbsp;:

![WordPress - Admin login](images/wordpress_first_steps%5B1%5D.png){.thumbnail}

> [!warning]
> 
> Sur cette page d'accueil, vous avez la possibilité de changer la langue par défaut de l'interface de **WordPress**. Rendez-vous dans le menu déroulant situé en bas de page, sélectionnez la langue de votre choix puis en valider avec le bouton «&nbsp;Change&nbsp;». La langue peut être changée ultérieurement.
> 

Saisissez le login (ou le «&nbsp;Nom de l'administrateur&nbsp;») qui vous a été fourni par e-mail ainsi que le «&nbsp;Mot de passe WordPress&nbsp;» dans le même e-mail. Vous arrivez alors sur votre tableau de bord&nbsp;:

![WordPress - Dashboard](images/wordpress_first_steps%5B2%5D.png){.thumbnail}

### Changer le thème de votre site WordPress

Les **thèmes WordPress** sont des ensembles de fichiers permettant de modifier la présentation de votre site web sans en modifier le contenu. Il existe de nombreux thèmes disponibles sur internet, gratuits comme payants, avec des thématiques différentes (sites web, blogs, e-commerce, presse en ligne, ...).

Pour modifier votre thème, placez-vous dans le menu de gauche de votre Tableau de bord, rendez-vous dans «&nbsp;Apparence&nbsp;» puis cliquez sur «&nbsp;Thèmes&nbsp;»&nbsp;:

![WordPress - Appearance/Themes](images/wordpress_first_steps%5B3%5D.png){.thumbnail}

Choisissez un thème parmi ceux proposés et cliquez sur «&nbsp;Activer&nbsp;»&nbsp;:

![WordPress - Appearance/Themes](images/wordpress_first_steps%5B4%5D.png){.thumbnail}

Vous pouvez constater le résultat en vous rendant sur votre site web avec votre nom de domaine.

### Écrire un article

WordPress vous permet de créer facilement du contenu sans avoir de connaissance en développement web.

Pour créer un article, rendez-vous dans la section «&nbsp;Articles&nbsp;» présente dans le menu à gauche puis cliquez sur «&nbsp;Ajouter&nbsp;»&nbsp;:

![WordPress - Posts/Add New](images/wordpress_first_steps%5B5%5D.png){.thumbnail}

Depuis la version 5, **WordPress** propose une interface pour simplifier la rédaction et la mise en forme des articles&nbsp;: **Gutenberg** est un éditeur WYSIWYG (« what you see is what you get »). Il vous permet de composer directement votre page en ajoutant des éléments tels que des titres, des paragraphes, des listes, des images, etc.&nbsp;:

![WordPress - Gutenberg](images/wordpress_first_steps%5B6%5D.png){.thumbnail}

Cliquez sur «&nbsp;Saisissez le titre&nbsp; pour ajouter un titre à votre page :

![WordPress - Gutenberg, add title](images/wordpress_first_steps%5B7%5D.png){.thumbnail}

Pour ajouter du contenu, cliquez sur le signe «&nbsp;+&nbsp;» et choisissez ce que vous souhaitez insérer&nbsp;:

![WordPress - Gutenberg, add block](images/wordpress_first_steps%5B8%5D.png){.thumbnail}

Sur la droite de votre page, trois liens vous permettent d'effectuer les actions suivantes&nbsp;:

- enregistrer le brouillon, que vous pouvez faire avec Ctrl+S;
- prévisualiser;
- publier sur votre site web.

Dans notre **exemple**, cliquez sur «&nbsp;Visualiser&nbsp;», puis «&nbsp;Prévisualiser dans un nouvel onglet&nbsp;». Choisissez le type d'appareil sur lequel faire le rendu (PC, tablette ou smartphone)&nbsp;:

![WordPress - Preview](images/wordpress_first_steps%5B10%5D.png){.thumbnail}

Pour revenir à l'interface d'administration de **WordPress**, cliquez sur l'icône en haut à gauche.

### Gérer les catégories

**WordPress** permet de définir des catégories et d'associer vos articles avec une ou plusieurs d'entre elles. Pour gérer les catégories de votre site web, rendez-vous dans la section «&nbsp;Articles&nbsp;», puis dans la section «&nbsp;Catégories&nbsp;»&nbsp;:

![WordPress - Categories](images/wordpress_first_steps%5B11%5D.png){.thumbnail}

Renseignez maintenant le formulaire pour ajouter une nouvelle catégorie&nbsp;:

- **Nom** : nom de votre catégorie tel qu'elle apparaîtra sur votre site web
- **Slug** : élément qui apparaîtra à la fin de votre URL (utile pour améliorer votre référencement)
- **Catégorie parente** : permet de hiérarchiser vos catégories (la catégorie que vous créez peut être une sous-catégorie d'une catégorie existante)
- **Description** : non apparente par défaut, la description de votre catégorie peut toutefois être rendue visible par certains thèmes.

![WordPress - Categories filled](images/wordpress_first_steps%5B12%5D.png){.thumbnail}

Une fois ces informations indiquées, cliquez sur le bouton «&nbsp;Ajouter une nouvelle catégorie&nbsp;»&nbsp;:

![WordPress - Categories added](images/wordpress_first_steps%5B13%5D.png){.thumbnail}

Vous avez la possibilité de gérer la hiérarchie des vos catégories. Une nouvelle catégorie peut être liée à une catégorie existante&nbsp;:

![WordPress - Sub-categorie added](images/wordpress_first_steps%5B14%5D.png){.thumbnail}

### Affecter une catégorie à un article

Pour affecter un article à une ou plusieurs catégories, cliquez sur «&nbsp;Articles&nbsp;» (Posts). Vous disposerez de la liste contenant tous les articles et leurs statuts. Survolez le titre de l'article que vous souhaitez classer puis cliquez sur «&nbsp;Modification rapide&nbsp;»&nbsp;:

![WordPress - Categorize a post](images/wordpress_first_steps%5B15%5D.png){.thumbnail}

Vous pouvez alors modifier les catégories en cochant ou décochant les éléments listés dans la colonne «&nbsp;Catégories&nbsp;»&nbsp;:

![WordPress - Set new categories to an existing post](images/wordpress_first_steps%5B16%5D.png){.thumbnail}

>[!warning]
>
> Sélectionner une sous-catégorie n'entraîne pas la sélection automatique de la catégorie parente.
>

### Créer des pages

Les pages sont à distinguer des articles. Elles servent essentiellement à écrire des contenus qui n'évolueront pas ou peu dans le temps comme des mentions légales, des conditions générales d'utilisation, etc.

Rendez-vous sur la page «&nbsp;Pages&nbsp;»&nbsp;:

![WordPress - Go to pages](images/wordpress_first_steps%5B17%5D.png){.thumbnail}

>[!warning]
>
> Par défaut, il existe une page qui est générée à l'installation de **WordPress**. Pour des raisons de lisibilité, cette page a été supprimée de l'exemple.
>

Cliquez sur «&nbsp;Ajouter&nbsp;». Vous retrouvez alors l'éditeur Gutenberg&nbsp;:

![WordPress - Pages, Gutenberg page builder](images/wordpress_first_steps%5B18%5D.png){.thumbnail}

Créez le contenu de votre page et publiez-le&nbsp;:

![WordPress - Pages, content](images/wordpress_first_steps%5B19%5D.png){.thumbnail}

Vous pouvez revenir sur la page d'accueil de votre site web, vous disposerez d'un lien vers votre nouvelle page&nbsp;:

![WordPress - Home page with new page link](images/wordpress_first_steps%5B20%5D.png){.thumbnail}

### Améliorer ses permaliens

Par défaut, lien de vos contenus **WordPress** sont écrits avec une syntaxe de type `paramètre=valeur`, `valeur` étant un nombre entier qui n'est pas explicite. La modification de l'écriture des permaliens permet d'avoir des URLs avec un format plus explicite. Vos URLs seront plus lisibles et le référencement naturel de votre site  web s'en trouvera amélioré.

Sur la page d'accueil du tableau de bord, rendez-vous sur «&nbsp;Réglages&nbsp;» puis sur «&nbsp;Permaliens&nbsp;»&nbsp;:

![WordPress - Settings/Permalinks](images/wordpress_first_steps%5B21%5D.png){.thumbnail}

Vous avez alors le choix entre plusieurs types de permaliens. Sélectionnez le «&nbsp;Titre de la publication&nbsp;» puis validez en bas de la page&nbsp;:

![WordPress - Settings/Permalinks, select post name pattern](images/wordpress_first_steps%5B21%5D.png){.thumbnail}

Vos liens seront alors construits à partir du slug précédemment indiqué lors de l'édition de vos articles et de vos pages.

## Aller plus loin <a name="go-further"></a>

- stockez vos accès dans un gestionnaire de mots de passe comme [KeePass](https://keepass.info/){.external}
- tester en ligne l'éditeur par défaut [Gutenberg](https://fr.wordpress.org/gutenberg/){.external}
- quelques ressources où trouver des thèmes WordPress
    - [WordPress Themes](https://wordpress.com/fr/themes){.external}
    - [TemplaMonster](https://www.templatemonster.com/fr/type/themes-wordpress/){.external}
    - [Elegant Themes](https://www.elegantthemes.com/){.external}, éditeur du constructeur de thèmes Divi
    - [Elementor](https://elementor.com/){.external}, au autre éditeur de thèmes
- le site officiel [WordPress](https://wordpress.org/){.external}.
