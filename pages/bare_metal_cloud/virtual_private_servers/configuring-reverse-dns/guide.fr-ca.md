---
title: "Comment configurer le reverse DNS de votre serveur (enregistrement PTR)"
excerpt: Découvrez comment mettre en place la résolution reverse DNS de votre adresse IP depuis votre espace client
updated: 2025-12-10
---

## Objectif

Le Reverse DNS (*rDNS*) est le complément de la résolution DNS « *forward* » qui permet de résoudre les noms de domaine en adresses IP. Grâce au reverse DNS, une adresse IP peut être résolue en nom de domaine (ou nom d’hôte) auquel elle est reliée. Cela signifie que les requêtes DNS de l'adresse IP associée retourneront ce nom de domaine.

La configuration du reverse DNS d'un serveur est particulièrement utile lors de l'envoi d'e-mails. La validation d'un serveur e-mail par les systèmes de protection antispam s'améliore si une requête DNS de l'adresse IP se résout correctement.

**Ce guide vous explique comment configurer le reverse DNS de votre adresse IP depuis votre espace client.**

## Prérequis

- Une adresse IP attachée à un service de votre compte OVHcloud
- Un nom de domaine avec son enregistrement `A` relié à votre service
- Être connecté à votre [espace client OVHcloud](/links/manager)

## En pratique

Connectez-vous à votre [espace client OVHcloud](/links/manager), cliquez sur `Network`{.action} dans le menu situé à gauche de l'écran, puis sur `Adresses IP Publiques`{.action}.

Le menu déroulant sous « **Mes adresses IP publiques et services associés** » vous permet de filtrer vos services par catégorie. Vous pouvez également rechercher une adresse IP spécifique grâce à la barre de recherche située à gauche du menu déroulant.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip_new.png){.thumbnail}

Cliquez sur le bouton `⁝`{.action} dans la ligne de l'adresse IP concernée et sélectionnez `Configurer le reverse DNS`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

Dans la nouvelle fenêtre, renseignez votre reverse et cliquez sur `Confirmer`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

Vous pouvez également éditer le reverse directement via l'icône `crayon`{.action} dans la colonne **Reverse DNS** du tableau.

> [!warning]
> Lorsque vous entrez votre nom de domaine dans le *reverse*, il vérifie immédiatement si l'enregistrement A renvoie à la même IP. Ceci est utilisé dans les procédures anti-spam, donc votre enregistrement A doit être valide et propagé. Il y a certaines règles à suivre lors de la saisie du *reverse* :
>
>  - le *reverse* ne peut pas commencer par un `-`
>  - le *reverse* ne peut pas comporter plus de 63 caractères
>  - le *reverse* ne peut pas contenir de caractères majuscules
>  - le *reverse* doit se terminer par un `.`
>
> Exemple : « domain.tld » dans l'enregistrement *reverse* serait `domain.tld.`.
>

> [!primary]
>
> Si la modification ne fonctionne pas comme prévu, vérifiez que l'enregistrement « A » est correctement configuré dans la zone DNS de votre nom de domaine. L'application des changements dans la zone DNS peut prendre jusqu'à 24 heures, dans le cas où vous venez de modifier l'enregistrement « A ».
>
> Si le nom de domaine est géré par OVHcloud en tant que bureau d’enregistrement **et qu’il utilise les serveurs DNS OVHcloud**, vous pouvez vous référer à [ce guide](/pages/web_cloud/domains/dns_zone_edit).
>

## Aller plus loin

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Échangez avec notre [communauté d'utilisateurs](/links/community).