---
title: Installation de &quot;Composer&quot; sur les hebergements mutualises
slug: installation-de-composer-sur-les-hebergements-mutualises
legacy_guide_number: 1894
excerpt: Retrouvez ici la demarche pour installer &quot;Composer&quot; sur les hebergements mutualises.
section: PHP
---

["Composer"](https://getcomposer.org/){.external} est un gestionnaire de dépendances créé pour le langage PHP. Il permet aux développeurs PHP d'inclure des librairies externes dans leurs programmes. "Composer" a permis aux projets PHP de simplifier la distribution de librairies et la maintenance de leur code. D'ailleurs, depuis la création de cet outil, de nombreuses bonnes pratiques de développement ont été proposées au sein de la communauté PHP et ont amélioré les librairies de la communauté PHP. Ces bonnes pratiques sont documentées sous la forme de [PSR](http://www.php-fig.org/){.external}.


## Procedure

### Prérequis
Sur les offres mutualisées OVH, vous pouvez utiliser "Composer" à partir des offres pro. En effet, vous devez avoir un accès SSH puisqu'il s'agit d'un outil en lignes de commandes.


### Installation
Vérifiez que vous avez bien la dernière version de PHP (5.6) de disponible en ligne de commande :


```bash
php --version
```

Si ce n'est pas la bonne version, vous pouvez configurer un alias :


```bash
alias php='/usr/local/php5.6/bin/php'
```

Nous vous conseillons de rester au sein du dossier racine de votre hébergement afin de ne pas rendre accessible publiquement les fichiers de "Composer". Il faut que vous exécutiez cette commande :


```bash
curl -sS https://getcomposer.org/installer | php
```

Félicitations, "Composer" est désormais disponible sur votre hébergement mutualisé !


### Exemples d'utilisation
Si vous souhaitez installer Symfony 2 simplement, vous pouvez par exemple lancer la commande suivante :


```bash
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```

De la même manière, vous pouvez utiliser l'API de OVH depuis votre hébergement en utilisant le wrapper officiel. Pour cela, il suffit d'ajouter un fichier nommé composer.json qui contient la liste des dépendances dont vous avez besoin. Voici un exemple de ce fichier avec le wrapper d'API OVH :


```json
1. {
2.     "name": "Example Application",
3.     "description": "This is an example of OVH APIs wrapper usage",
4.     "require": {
5.         "ovh/ovh": "1.1.*"
6.     }
7. }
```

Pour l'installer, vous n'avez plus qu'à lancer la commande suivante dans le même dossier :


```bash
php composer.phar install
```

Pour utiliser cette librairie, vous pouvez vous référer à la documentation, ainsi qu'au code, disponibles sur [github](https://github.com/ovh/php-ovh){.external}