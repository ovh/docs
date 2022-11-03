---
title: "Configurer le CMS headless Sylius pour l'utiliser uniquement via les API disponibles"
excerpt: "Comment configurer la solution Sylius et son API sur votre serveur en utilisant SSH"
slug: how_to_configure_sylius_api
section: CMS
order: 09
---

**Dernière mise à jour le 02/11/2022**

## Objectif

Ce guide va vous permettre de paramétrer votre CMS Sylius pour qu'il ne soit accessible que via les API disponibles et non plus par l'interface web proposée par défaut.

## Prérequis

Vous devez avoir installé le CMS headless Sylius sur votre [Hébergement Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/) et permis l'accès à l'API.

## En pratique

Supprimer certaines fonctionnalités se fait en supprimant des directives dans les fichiers de configurations.
Veillez à les commenter plutôt qu'à les supprimer, vous pourrez ainsi réactiver ces éléments.

### Supprimer le front

#### Supprimer la référence au bundle SyliusShopBundle

Éditez le fichier `config/bundle.php` :

```sh
nano config/bundles.php
```

Et commentez la ligne relative au ShopBundle :

```php
// Sylius\Bundle\ShopBundle\SyliusShopBundle::class => ['all' => true],
```

#### Supprimer l'import de la configuration du bundle

Éditez le fichier `config/packages/_sylius.yaml` et commentez la ligne suivante :

```yaml
#    - { resource: "@SyliusShopBundle/Resources/config/app/config.yml" }
```

#### Supprimer la route mentionnant le bundle

Supprimez le fichier `sylius_shop.yaml` dans le répertoire `config/routes` :

```sh
rm config/routes/sylius_shop.yaml
```

Si vous souhaitez conserver le fichier, vous pouvez également le renommer :

```sh
mv config/routes/sylius_shop.yaml config/routes/sylius_shop.yaml.old
```

### Supprimer l'accès à l'interface d'administration

## Aller plus loin
