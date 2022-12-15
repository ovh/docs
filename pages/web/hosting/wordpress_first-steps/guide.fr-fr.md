---
title: "Guide - WordPress, premiers pas"
slug: wordpress-first-steps
excerpt: "Wordpress, first steps"
section: Tutoriel
order: 
---

**Dernière mise à jour le 15/12/2022**

## Objectif

Ce tutoriel a pour objectif de vous permettre de créer vos premiers contenus avec le CMS WordPress, les organiser, les mettre en ligne et changer le thème de votre site. Vous pourrez ainsi réaliser votre site web avec un large choix de thématiques&nbsp;": site de votre entreprise, blog, faire connaître votre activité ou vos passions, sans avoir de connaissances en programmation.

## Prérequis

Vous venez de souscrire à une offre «&nbsp;Hébergement Web&nbsp;» comprenant un nom de domaine et vous permettant d'installer un CMS en un clic, vous pouvez alors suivre ce tutoriel pour mettre en ligne rapidement vos premiers contenus et exploiter votre site.

Si vous ne disposez pas encore d'un hébergement, vous pouvez choisir une de notre offres [Hébergement web](https://www.ovhcloud.com/fr/web-hosting/) parmi celles incluant la fonctionnalité «&nbsp;CMS en 1-clic&nbsp;».

Enfin, dans le cas où vous auriez déjà souscrit à une offre mais pas installé WordPress, reportez-vous au guide [Installer son site avec les modules en 1 clic](https://docs.ovh.com/fr/hosting/modules-en-1-clic/).

## En pratique

Avant de procéder à l'installation de votre CMS WordPress, ajoutez un certificat SSL sur le nom de domaine sur lequel vous allez installer votre site. Reportez-vous à ce [guide](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/#etape-1-activer-le-certificat-ssl-sur-lhebergement).

Lors de l'installation de votre CMS en 1-clic, vous avez reçu un mail contenant des éléments qui vous seront nécessaires pour ce guide&nbsp;:

- le lien d'accès à l'interface d'administration
- le nom de l'administrateur
- un lien pour obtenir le mot de passe administrateur.

### Se connecter à l'interface d'administration

Rendez-vous sur le lien qui vous a été communiqué par mail lors de l'installation. Par défaut, l'URL pour accéder à l'interface se termine par `wp-admin`&nbsp;:

![WordPress - Admin login](images/wordpress_first_steps%5B1%5D.png){.thumbnail}

> [!warning]
> 
> Sur cette page d'accueil, vous avez la possibilité de changer la langue par défaut de l'interface de WordPress dans le menu déroulant situé en base de page et en validant en cliquant sur «&nbsp;Change&nbsp;».

Saisissez le login (ou «&nbsp;Nom de l'administrateur&nbsp;») qui vous a été fourni par mail et le mot de passe dans le lien «&nbsp;Mot de passe WordPress&nbsp;» dans le même document. Vous arrivez alors sur votre tableau de bord&nbsp;:

![WordPress - Dashboard](images/wordpress_first_steps%5B2%5D.png){.thumbnail}

### Changer le thème de votre site WordPress

Les **thèmes** WordPress sont des ensembles de fichiers qui vont vous permettre de modifier la présentation de votre site sans en modifier le contenu. Il existe de nombreux thèmes disponibles sur internet, gratuits comme payants, avec des thématiques différentes&nbsp;: sites web, blogs, e-commerce, presse en ligne.

Pour modifier votre thème, dans le menu de gauche de votre Tableau de bord, allez dans «&nbsp;Apparence&nbsp;» puis «&nbsp;Thèmes&nbsp;»&nbsp;:

![WordPress - Appearance/Themes](images/wordpress_first_steps%5B3%5D.png){.thumbnail}

Choisissez alors un thème parmi ceux proposés et cliquez sur «&nbsp;Activer&nbsp;»&nbsp;:

![WordPress - Appearance/Themes](images/wordpress_first_steps%5B4%5D.png){.thumbnail}

Vous pouvez constater le résultat en allant sur votre site web.

### Écrire un article

WordPress vous permet de créer facilement du contenu sans avoir de connaissance en développement web.

Pour créer un article, allez sur le menu à gauche dans «&nbsp;Articles&nbsp;» puis «&nbsp;Ajouter&nbsp;»&nbsp;:

![WordPress - Posts/Add New](images/wordpress_first_steps%5B5%5D.png){.thumbnail}

Depuis la version 5, WordPress propose une interface pour simplifier la rédaction et la mise en forme des articles&nbsp;. Gutenberg est un éditeur WYSIWYG (« what you see is what you get ») et vous permet de composer directement votre page en ajoutant des éléments tels que des titres, paragraphes, listes, images, etc.&nbsp;:

![WordPress - Gutenberg](images/wordpress_first_steps%5B6%5D.png){.thumbnail}

Ajoutez un titre à votre page en cliquant sur «&nbsp;Saisissez le titre&nbsp;»&nbsp;:

![WordPress - Gutenberg, add title](images/wordpress_first_steps%5B7%5D.png){.thumbnail}

Pour ajouter du contenu, cliquez sur le signe «&nbsp;+&nbsp;» et choisissez ce que vous souhaitez insérer un bloc qui contiendra un paragraphe&nbsp;:

![WordPress - Gutenberg, add block](images/wordpress_first_steps%5B8%5D.png){.thumbnail}

Sur la droite de votre page, trois liens vous permettent de&nbsp;:

- enregistrer le brouillon, que vous pouvez faire avec Ctrl+S
- prévisualiser
- publier sur votre site.

Pour notre exemple, nous allons cliquer sur «&nbsp;Visualiser&nbsp;», puis «&nbsp;Prévisualiser dans un nouvel onglet&nbsp;». Vous pouvez choisir le type d'appareil sur lequel faire le rendu (PC, tablette ou smartphone)&nbsp;:

![WordPress - Preview](images/wordpress_first_steps%5B10%5D.png){.thumbnail}

Pour revenir à l'interface d'administration de WordPress, cliquez sur l'icône en haut à gauche.

### Gérer les catégories

WordPress vous permet de définir des catégories et d'associer vos articles avec une ou plusieurs d'entre elles. Pour gérer les catégories de votre site, rendez vous dans «&nbsp;Articles&nbsp;», puis «&nbsp;Catégories&nbsp;»&nbsp;:

![WordPress - Categories](images/wordpress_first_steps%5B11%5D.png){.thumbnail}

Renseignez maintenant le formulaire pour ajouter une nouvelle catégorie&nbsp;:

- Nom de votre catégorie tel qu'elle apparaîtra sur votre site
- Slug, c'est le nom qui apparaîtra dans l'URL
- Catégorie parente vous permet de hiérarchiser vos catégories (la catégorie que vous créez peut être une sous-catégorie d'une catégorie existante)
- Description, non apparente par défaut, la description de votre catégorie peut toutefois être rendue visible par certains thèmes.

![WordPress - Categories filled](images/wordpress_first_steps%5B12%5D.png){.thumbnail}

Une fois ces informations indiquées, cliquez sur le bouton «&nbsp;Ajouter une nouvelle catégorie&nbsp;»&nbsp;:

![WordPress - Categories added](images/wordpress_first_steps%5B13%5D.png){.thumbnail}

Vous avez la possibilité de gérer la hiérarchie des vos catégories. Une nouvelle catégorie peut être liée à une catégorie existante&nbsp;:

![WordPress - Sub-categorie added](images/wordpress_first_steps%5B14%5D.png){.thumbnail}

### Affecter une catégorie à un article

Pour affecter un article à une ou plusieurs catégories, cliquez sur «&nbsp;Articles&nbsp;» (Posts). Vous aurez alors la liste de tous les articles et leur statut. Survolez le titre de l'article que vous souhaitez classer, puis cliquez sur «&nbsp;Modification rapide&nbsp;»&nbsp;:

![WordPress - Categorize a post](images/wordpress_first_steps%5B15%5D.png){.thumbnail}

Vous pouvez alors modifier les catégories en cochant ou décochant les éléments listés dans la colonne «&nbsp;Categories&nbsp;»&nbsp;:

![WordPress - Set new categories to an existing post](images/wordpress_first_steps%5B16%5D.png){.thumbnail}

>[!warning]
>
> Sélectionner une sous-catégorie n'entraîne pas la sélection automatique de la catégorie parente.
>

### Créer des pages

Les pages sont à distinguer des articles. Elles servent essentiellement à écrire des contenus qui n'évolueront pas ou peu dans le temps, comme des mentions légales, des conditions générales d'utilisation, etc.

Allez sur la page «&nbsp;Pages&nbsp;»&nbsp;:

![WordPress - Go to pages](images/wordpress_first_steps%5B17%5D.png){.thumbnail}

>[!warning]
>
> Par défaut, il existe une page qui est générée à l'installation de WordPress. Pour des raisons de lisibilité, cette page a été supprimée de l'exemple.
>

Cliquez sur «&nbsp;Ajouter&nbsp;». Vous retrouvez alors l'éditeur Gutenberg&nbsp;:

![WordPress - Pages, Gutenberg page builder](images/wordpress_first_steps%5B18%5D.png){.thumbnail}

Créez alors le contenu de votre page et publiez-le&nbsp;:

![WordPress - Pages, content](images/wordpress_first_steps%5B19%5D.png){.thumbnail}

Vous pouvez revenir sur la page d'accueil de votre site, vous aurez alors un lien vers votre nouvelle page&nbsp;:

![WordPress - Home page with new page link](images/wordpress_first_steps%5B20%5D.png){.thumbnail}

### Améliorer ses permaliens

Par défaut, lien de vos contenus WordPress sont écrits avec une syntaxe de type `paramètre=valeur`, `valeur` étant un nombre entier qui n'est pas explicite. La modification de l'écriture des permaliens permet d'avoir des URL avec un format qui explicite. Vos URL seront plus lisibles et le référencement naturel de votre site s'en trouvera amélioré.

Sur la page d'accueil du tableau de bord, allez sur «&nbsp;Réglages&nbsp;» puis «&nbsp;Permaliens&nbsp;»&nbsp;:

![WordPress - Settings/Permalinks](images/wordpress_first_steps%5B21%5D.png){.thumbnail}

Vous avez alors le choix entre plusieurs types de permaliens. Sélectionnez «&nbsp;Titre de la publication&nbsp;», puis validez en bas de la page&nbsp;:

![WordPress - Settings/Permalinks, select post name pattern](images/wordpress_first_steps%5B21%5D.png){.thumbnail}

Vos liens seront alors construits à partir du slug que vous aurez indiqué en éditant les articles et les pages.

## Aller plus loin

- stockez vos accès dans un gestionnaire de mots de passe comme [KeePass](https://keepass.info/)
- tester en ligne l'éditeur par défaut [Gutenberg](https://fr.wordpress.org/gutenberg/)
- quelques ressources où trouver des thèmes WordPress
    - [WordPress Themes](https://wordpress.com/fr/themes)
    - [TemplaMonster](https://www.templatemonster.com/fr/type/themes-wordpress/)
    - [Elegant Themes](https://www.elegantthemes.com/), éditeur du constructeur de thèmes Divi
    - [Elementor](https://elementor.com/), au autre éditeur de thèmes
- le site officiel [WordPress](https://wordpress.org/).