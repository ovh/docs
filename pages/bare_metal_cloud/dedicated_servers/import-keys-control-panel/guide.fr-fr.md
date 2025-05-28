---
title: "Comment stocker les clés SSH dans votre espace client"
excerpt: "Découvrez comment importer des clés SSH publiques dans votre espace client OVHcloud"
updated: 2024-12-04
---

## Objectif

Les paires de clés sont utilisées pour authentifier les connexions SSH entre les hôtes, par exemple entre le client local de votre ordinateur et un serveur distant. Lors de la réinstallation d'un serveur dédié ou d'un VPS depuis votre espace client, vous avez la possibilité d'ajouter une clé publique au système d'exploitation. Le stockage de clés SSH publiques dans votre espace client facilite ce processus.

**Ce guide vous explique comment stocker vos clés SSH publiques dans votre espace client.**

## Prérequis

- Un [serveur dédié](/links/bare-metal/bare-metal) ou un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud
- Accès à l’[espace client OVHcloud](/links/manager)

> [!primary]
>
> Pour plus d'informations sur l'utilisation des clés SSH avec les services [Public Cloud](/links/public-cloud/public-cloud), consultez notre guide dédié :
>
> [Comment créer des clés SSH avec OpenSSH pour les instances Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)

## En pratique

Si vous n'avez pas encore créé de paire de clés SSH, consultez d'abord nos guides :

- [Créer et utiliser des clés SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Tutoriel - Comment utiliser PuTTY pour les connexions SSH et l'authentification](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Connectez-vous sur votre [espace client OVHcloud](/links/manager), cliquez sur le nom du compte en haut à droite et ouvrez `Catalogue de produits`{.action}.

![products and services](/pages/assets/screens/control_panel/product-selection/right-menu/my-solutions-and-services.png){.thumbnail}

Dans la section `Mes services` de votre espace client, cliquez sur `Clés SSH`{.action}.

![control panel ssh keys](images/importkey1.png){.thumbnail}

Cliquez sur le bouton `Ajouter une clé SSH`{.action} et sélectionnez `Dédié`{.action} dans le menu.

![control panel ssh keys](images/importkey2.png){.thumbnail}

Dans la fenêtre qui s'affiche, saisissez un « label » pour la clé dans le premier champ.  
Copiez l'intégralité de la chaîne de clé publique et collez-la dans le deuxième champ.

![control panel ssh keys](images/importkey3.png){.thumbnail}

Cliquez sur le bouton `Valider`{.action}.

La clé sera désormais disponible lors de la réinstallation d'un serveur dédié ou d'un VPS dans votre espace client.

Consultez nos guides « Premiers pas » pour plus de détails sur ce sujet :

- [Serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Serveur dédié de la gamme **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
