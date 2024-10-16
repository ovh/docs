---
title: "Migrer un site web d'un hébergement mutualisé vers un VPS"
excerpt: "Découvrez comment modifier la formule d'abonnement de votre offre d'hébergement web OVHcloud"
updated: 2024-10-16
---

## Objectif

Votre site web évolue, et vous réalisez que les limites de l’hébergement mutualisé freinent sa performance ou ses possibilités. Vous cherchez à améliorer la rapidité de votre site web, obtenir plus de contrôle sur la configuration, ou gérer une audience croissante : la migration vers un serveur privé virtuel (VPS) est une solution idéale.
Ce guide vous guidera à travers les étapes essentielles pour effectuer cette migration avec succès, en vous assurant que votre site est bien sauvegardé, transféré et configuré sur votre nouveau VPS sans interruption.

**Découvrez comment migrer votre site web d'un hébergement mutualisé vers un VPS.**

## Prérequis

- Disposer d'une [offre d'hébergement web](/links/web/hosting) active.
- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Étape 1 : sauvegarder les fichiers et la base de données de votre site web

La première étape consiste à sauvegarder l'ensemble des fichiers de votre site web (généralement via FTP), ainsi que sa base de données.

Si vous utilisez WordPress, suivez notre guide « [Sauvegarder votre site WordPress](/pages/web_cloud/web_hosting/how_to_backup_your_wordpress) » pour savoir comment sauvegarder les fichiers et la base de données de votre site web WordPress.

#### Sauvegarder les fichiers via FTP

Choisissez la méthode de sauvegarde adaptée à votre CMS en cliquant sur l'onglet concerné.

> [!tabs]
> PrestaShop
>>
>> Pour PrestaShop, sauvegardez les répertoires critiques tels que :
>> 
>> - `/admin` : pour les fichiers relatifs au back-office.
>> - `/modules` : pour les modules installés.
>> - `/img` : pour toutes les images et icônes.
>> - `/themes` : pour les fichiers du thème de votre site.
>>
>> Pour plus de détails sur la structure des fichiers PrestaShop, consultez leur [documentation technique officielle](https://docs.prestashop-project.org/welcome).
>>
> Joomla!
>>
>> Pour Joomla!, les fichiers importants à sauvegarder incluent les répertoires :
>>
>> - `/administrator` : pour l'interface d'administration.
>> - `/components`, `/plugins` : pour les extensions installées.
>> - `/images` : pour les fichiers médias de votre site.
>>
>> Vous pouvez trouver plus d’informations sur la structure des fichiers Joomla! dans la documentation officielle de Joomla.
>>
> Drupal
>>
>> Pour Drupal, les dossiers importants à sauvegarder sont :
>>
>> - `/sites` : qui contient les fichiers spécifiques à votre site.
>> - `/modules` : et `/themes` : pour les modules et thèmes personnalisés.
>>
>> Pour une vue plus détaillée, référez-vous à la [documentation officielle](https://www.drupal.org/docs) de Drupal.

#### Sauvegarder la base de données

Pour sauvegarder la base de données de votre site web, suivez les étapes de notre guide « [Récupérer la sauvegarde de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_database_export) ».


