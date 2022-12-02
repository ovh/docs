---
title: "Guide - WordPress, premiers pas"
slug: wordpress-first-steps
excerpt: "Wordpress, first steps"
section: Tutoriel
order: 
---

**Dernière mise à jour le 01/12/2022**

## Objectif

Ce tutoriel a pour objectif de vous permettre de créer vos premiers contenus avec le CMS [WordPress](https://wordpress.org/), les organiser, les mettre en ligne et changer le thème de votre site.

## Prérequis

Vous devez disposez d'un nom de domaine et d'un [Hébergement web](https://www.ovhcloud.com/fr/web-hosting/), à minima une offert [Hébergement Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) vous permettant d'installer un CMS en 1-clic.

Vous pouvez également installer manuellement votre WordPress sur votre hébergement en suivant notre tutoriel [Installer manuellement WordPress](https://docs.ovh.com/fr/hosting/installer-manuellement-wordpress/).

## En pratique

Avant de procéder à l'installation de votre CMS WordPress, ajoutez un certificat SSL sur le nom de domaine sur lequel vous allez installer votre site. Reportez-vous à ce [guide](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/#etape-1-activer-le-certificat-ssl-sur-lhebergement).

Lors de l'installation de votre CMS en 1-clic, vous avez reçu un mail contenant des éléments qui vous seront nécessaires pour ce guide&nbsp;:

- le lien d'accès à l'interface d'administration
- le nom de l'administrateur
- un lien pour obtenir le mot de passe administrateur.

### Se connectez à l'interface d'administration

Rendez-vous sur le lien qui vous a été communiqué par mail lors de l'installation. Par défaut, l'URL pour accéder à l'interface ser termine par `wp-admin`&nbsp;:

![WordPress - Admin login](images/wordpress_first_steps%5B1%5D.png){.thumbnail}

> [!warning]
> 
> Sur cette page d'accueil, vous avez la possibilité de changer la langue par défaut de l'interface de WordPress dans le menu déroulant situé en base de page et en validant en cliquant sur «&nbsp;Change&nbsp;».

Saisissez le login (ou «&nbsp;Nom de l'administrateur&nbsp;») qui vous a été fourni par mail et le mot de passe dans le lien «&nbsp;Mot de passe WordPress&nbsp;:» dans le même document. Vous arrivez alors sur votre Dashbord (tableau de bord)&nbsp;:

![WordPress - Dashboard](images/wordpress_first_steps%5B2%5D.png){.thumbnail}

### Changez le thème de votre site WordPress

Les **thèmes** WordPress sont des ensembles de fichiers qui vont vous permettre de modifier la présentation de votre site sans en modifier le contenu. Il existe de nombreux thèmes disponibles sur internet, gratuits comme payants, avec des thématiques différentes&nbsp;: sites web, blogs, e-commerce, presse en ligne.

Pour modifier votre thème, dans le menu de gauche de votre Tableau de bord, allez dans «&nbsp;Apparence&nbsp;» puis «&nbsp;Thèmes&nbsp;»&nbsp;:

![WordPress - Appearance/Themes](images/wordpress_first_steps%5B3%5D.png){.thumbnail}

Choisissez alors un thème parmi ceux proposés et cliquez sur «&nbsp;Activer&nbsp;» (Activate)&nbsp;:

![WordPress - Appearance/Themes](images/wordpress_first_steps%5B4%5D.png){.thumbnail}

Vous pouvez constater le résultat en allant sur votre site web.

### Écrire un article

WordPress vous permet de créer facilement du contenu sans avoir de connaissance en développement web.

Pour créer un article, allez sur le menu à gauche dans «&nbsp;Articles&nbsp;» (Posts) puis «&nbsp;Ajouter&nbsp;» (Add New)&nbsp;:

![WordPress - Posts/Add New](images/wordpress_first_steps%5B5%5D.png){.thumbnail}

Depuis la version, WordPress propose une interface pour simplifier la rédaction et la mise en forme des articles&nbsp;: Gutenberg, éditeur WYSIWYG (« what you see is what you get »)

![WordPress - Gutenberg](images/wordpress_first_steps%5B6%5D.png){.thumbnail}

Ajoutez un titre à votre page en cliquant sur «&nbsp;Add title&nbsp;»&nbsp;:

![WordPress - Gutenberg, add title](images/wordpress_first_steps%5B7%5D.png){.thumbnail}

Pour ajouter du contenu, cliquez sur le signe «&nbsp;+&nbsp;» et choisissez ce que vous souhaitez insérer un bloc qui contiendra un paragraphe, un sous-titre, une image, etc.&nbsp;:

![WordPress - Gutenberg, add block](images/wordpress_first_steps%5B8%5D.png){.thumbnail}

Sur la droite de votre page, trois liens vous permettent de&nbsp;:

- Enregistrer le brouillon (Save draft), que vous pouvez faire avec Ctrl+S
- Prévisualiser (Preview)
- Publier (Publish) sur votre site.

Pour notre exemple, nous allons cliquer sur «&nbsp;Visualiser&nbsp;» (Preview), puis «&nbsp;Prévisualiser dans un nouvel onglet&nbsp;» (Preview in a new tab). Vous pouvez choisir le type d'appareil sur lequel faire le rendu (PC, tablette ou smartphone)&nbsp;:

![WordPress - Preview](images/wordpress_first_steps%5B10%5D.png){.thumbnail}

Pour revenir à l'interface d'administration de WordPress, cliquez sur l'icône en haut à gauche.

### Gérez les catégories

WordPress vous permet de définir des catégories et d'associer vos articles avec une ou plusieurs d'entre elles. Pour gérer les catégories de votre site, rendez vous dans «&nbsp;Articles&nbsp;», puis «&nbsp;Catégories&nbsp;»&nbsp;:

![WordPress - Categories](images/wordpress_first_steps%5B11%5D.png){.thumbnail}

Renseignez maintenant le formulaire pour ajouter une nouvelle catégorie&nbsp;:

- Nom («&nbsp;Name&nbsp;») de votre catégorie tel qu'elle apparaîtra sur votre site
- Slug, c'est le nom qui apparaîtra dans l'URL
- Catégorie parente («&nbsp;Parent Category&nbsp;») vous permet de hiérarchiser vos catégories
- Description, non apparente par défaut, la description de votre catégorie peut toutefois être rendue visible par certains thèmes.

![WordPress - Categories filled](images/wordpress_first_steps%5B12%5D.png){.thumbnail}

Une fois ces informations indiquées, cliquez sur le bouton «&nbsp;Ajouter une nouvelle catégorie&nbsp;» (Add New Category)

![WordPress - Categories added](images/wordpress_first_steps%5B13%5D.png){.thumbnail}

## Aller plus loin

- stockez vos accès dans un gestionnaire de mots de passe comme [KeePass](https://keepass.info/)
- tester en ligne l'éditeur par défaut [Gutenberg](https://fr.wordpress.org/gutenberg/)
- quelques ressources où trouver des thèmes WordPress
    - [WordPress Themes](https://wordpress.com/fr/themes)
    - [TemplaMonster](https://www.templatemonster.com/fr/type/themes-wordpress/)
    - [Elegant Themes](https://www.elegantthemes.com/), éditeur du constructeur de thèmes Divi
    - [Elementor](https://elementor.com/), au autre éditeur de thèmes