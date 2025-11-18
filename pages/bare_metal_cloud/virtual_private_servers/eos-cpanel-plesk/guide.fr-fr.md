---
title: "Fin du support Plesk et cPanel pour VPS - Assurer la continuité de vos services"
excerpt: "Découvrez les dates de fin de support des systèmes d'exploitation de votre VPS OVHcloud affectant les licences Plesk et cPanel"
updated: 2025-09-29
---

## Objectif

Ce guide vous explique comment assurer la continuité de vos services en migrant votre VPS OVHcloud vers un système d’exploitation compatible avec les dernières versions de **Plesk** et **cPanel**, suite à la fin de support annoncée pour plusieurs OS.

**Découvrez les dates de fin de support des systèmes d'exploitation de votre VPS OVHcloud affectant les licences Plesk et cPanel.**

## Prérequis

- Disposer d'une offre [VPS](/links/bare-metal/vps) avec une [distribution compatible](/links/bare-metal/vps-os).

## En pratique

Les éditeurs **Plesk** et **cPanel** annoncent la fin du support des systèmes d’exploitation suivants :

| Système d'exploitation | Produit        | Fin du support       |
| ---------------------- | -------------- | -------------------- |
| Ubuntu 18.04           | Plesk          | **1er janvier 2027** |
| Debian 10              | Plesk          | **1er janvier 2027** |
| CentOS 7               | Plesk / cPanel | **1er janvier 2027** |
| CloudLinux 7           | Plesk / cPanel | **1er janvier 2027** |

Pour plus de détails concernant les fins de support, consultez les documentations officielles :

- [Plesk](https://docs.plesk.com/release-notes/obsidian/system-requirements/).
- [cPanel](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/).

### Que faire concrètement ?

> [!primary]
>
> D’un point de vue **sécurité**, continuer à utiliser un OS non supporté vous expose à des attaques.
> Nous vous recommandons de lire :
>
> - [les recommandations de cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).
> - [les recommandations de Plesk](https://docs.plesk.com/en-US/obsidian/administrator-guide/plesk-administration/securing-plesk.59464/).

#### 1. Vérifier votre système actuel

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveurs privés virtuels`{.action}.

![EOS Plesk cPanel](images/vpshome.png){.thumbnail}

Dans l'onglet `Accueil`{.action}, retrouvez les détails de votre système d'exploitation dans la section `OS / Distribution` de l'encadré `Votre VPS`.

#### 2. Identifier un OS compatible

Si votre système d'exploitation fait partie des OS qui ne seront plus supportés, migrez vers un système compatible recommandé par l’éditeur.

Consultez la documentation officielle des OS supportés :

- [Liste des OS supportés par Plesk](https://docs.plesk.com/release-notes/obsidian/system-requirements/).
- [Liste des OS compatibles avec cPanel](https://docs.cpanel.net/installation-guide/system-requirements/).

#### 3. Migrer votre service

**Option A — Réinstallation manuelle**

1. [Sauvegardez vos données](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps) (contenu web, base de données, e-mails, etc.).
2. Réinstallez un OS compatible depuis l’espace client OVHcloud en suivant la section `Réinstaller votre VPS` de notre guide [Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
3. [Réinstallez cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) ou Plesk sur le nouveau système.
4. Restaurez vos données à partir de vos sauvegardes.

**Option B — Migration via Plesk ou cPanel**

Cette méthode est recommandée si vous pouvez déployer un nouveau VPS avec un système à jour en parallèle de l’ancien.

Commandez un nouveau VPS avec un OS compatible si ce n'est pas déjà fait. [Installez cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) ou Plesk.

Utilisez l’outil de migration de votre choix. Ces outils permettent de transférer automatiquement vos sites web, bases de données, comptes e-mail et configurations d’un VPS à l’autre :

- Plesk Migrator – [Documentation officielle](https://docs.plesk.com/en-US/obsidian/migration-guide/introduction.75496/).
- cPanel Transfer Tool – [Documentation officielle](https://docs.cpanel.net/whm/transfers/transfer-tool/).

**Option C — Mise à jour directe de l'OS sans réinstallation ou migration (utilisateurs avancés)**

Si vous ne pouvez pas déployer un nouveau de VPS, certains outils permettent de **mettre à niveau directement votre système d’exploitation** tout en conservant Plesk ou cPanel installé. Cette méthode s'adresse aux utilisateurs expérimentés, car elle comporte des risques si elle est mal exécutée.

- Pour **Plesk** (passage de CentOS 7 vers AlmaLinux 8), utilisez le script `centos2alma` proposé par la [documentation officielle de Plesk](https://github.com/plesk/centos2alma). Consultez aussi les instructions détaillées du [support de Plesk](https://support.plesk.com/hc/en-us/articles/12377714344983).

- Pour **cPanel** (passage de CentOS 7 vers AlmaLinux 8), utilisez l'outil **Elevate** proposé par la [documentation officielle de cPanel](https://cpanel.github.io/elevate/).

> [!primary]
>
> Ces outils ne sont pas garantis à 100 % et nécessitent des sauvegardes complètes avant de procéder. Assurez-vous également que votre VPS dispose de ressources suffisantes (RAM, CPU, disque).

### Bonnes pratiques de sécurité

Indépendamment de Plesk/cPanel, il est essentiel de **maintenir le système d’exploitation de votre VPS** à jour afin de bénéficier des correctifs de sécurité, de la compatibilité logicielle et du support éditeur. Si votre distribution est en **fin de vie (EOL)**, planifiez une **mise à niveau** ou une **migration** vers une version encore supportée.

Pour connaître les dates de fin de vie et de fin de support des images et des OS (VPS & Public Cloud), consultez notre guide « [Public Cloud & VPS - Cycle de vie et annonces de fin de vie/support des images et distributions](/pages/public_cloud/compute/image-life-cycle) ».

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).