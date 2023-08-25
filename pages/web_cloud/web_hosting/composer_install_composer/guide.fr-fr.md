---
title: Installer Composer sur un hebergement web
excerpt: Découvrez comment installer et faire vos premiers pas sur Composer.
updated: 2023-02-24
---

**Dernière mise à jour le 24/02/2023**

## Objectif

[Composer](https://getcomposer.org/){.external} est un gestionnaire de dépendances créé pour le langage PHP. Il permet aux développeurs PHP d'inclure des librairies externes dans leurs programmes. « Composer » a permis aux projets PHP de faciliter la distribution de librairies et la maintenance de leur code. D'ailleurs, depuis la création de cet outil, de nombreuses bonnes pratiques de développement ont été proposées au sein de la communauté PHP et ont amélioré les librairies de la communauté PHP. Ces bonnes pratiques sont documentées sous la forme de [PSR](http://www.php-fig.org/){.external}.

**Découvrez comment installer et faire vos premiers pas sur Composer**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
> 

## Prérequis

- Posséder une [offre d'hébergement web](https://www.ovhcloud.com/fr/web-hosting/){.external} disposant d'un accès SSH.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

Connectez-vous en SSH à votre hébergement mutualisé à l'aide de notre guide sur [l'utilisation du SSH avec votre hébergement web mutualisé OVHcloud](/pages/web_cloud/web_hosting/ssh_on_webhosting).

Vérifiez que vous utilisez bien une version de PHP compatible en ligne de commande :

```bash
php --version
```

Si ce n'est pas la bonne version, vous pouvez configurer un alias :

```bash
alias php='/usr/local/php8.0/bin/php'
```

Nous vous recommandons de rester au sein du dossier racine de votre hébergement afin de ne pas rendre accessible publiquement les fichiers de « Composer ». Exécutez ensuite cette commande :

```bash
curl -sS https://getcomposer.org/installer | php
```

« Composer » est désormais disponible sur votre hébergement mutualisé.

### Exemples d'utilisation

Si vous souhaitez installer **Symfony 2**, vous pouvez par exemple lancer la commande suivante :

```bash
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```

Vous pouvez également utiliser l'API d'OVHcloud depuis votre hébergement en utilisant le wrapper officiel. Pour cela, ajoutez un fichier nommé *composer.json* contenant la liste des dépendances dont vous avez besoin. Voici un exemple de ce fichier avec le wrapper d'API OVHcloud :

```json
1. {
2.     "name": "Example Application",
3.     "description": "This is an example of OVHcloud APIs wrapper usage",
4.     "require": {
5.         "ovh/ovh": "1.1.*"
6.     }
7. }
```

Pour l'installer, lancez la commande suivante dans le même dossier :

```bash
php composer.phar install
```

Pour utiliser cette librairie, référez-vous à la documentation, ainsi qu'au code, disponibles sur [GitHub](https://github.com/ovh/php-ovh){.external}

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.