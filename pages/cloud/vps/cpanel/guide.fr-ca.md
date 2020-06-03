---
title: 'Déployer cPanel sur centOS7'
slug: cpanel
excerpt: 'Découvrez comment instancier un VPS avec l’application cPanel pré-installée.'
section: 'Utilisation avancée'
---

**Dernière mise à jour le 15/05/2020**

## Objectif

cPanel est un panneau de configuration conçu pour les hébergeurs web. Constitué d'une interface graphique permettant l'automatisation des paramètres, l'hébergement de site web est ainsi simplifié.

**Découvrez comment déployer cPanel en un clic avec les applications pré-installées sur VPS.**


## Prérequis

- Un [VPS de la gamme actuelle](https://www.ovhcloud.com/fr-ca/vps/){.external} (offres Value, Essential, Comfort ou Elite).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}

## En pratique

Afin d'installer votre serveur cPanel, il faut d'abord commander un VPS avec la distribution cPanel.

![cPanel](images/cpanel_order.png){.thumbnail}

Quand votre VPS est prêt, vous recevez un e-mail vous donnant les accès pour vous connecter à votre serveur cPanel :

```
 |    Vos application(s):
 |    Vous pouvez vous connecter à cpanel depuis https://<ip>:2087/<session_parameters>
```

Si vous disposez déjà d'un VPS et que vous souhaitez y installer cPanel, vous pouvez réinstaller le VPS à partir de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager) à l'aide du modèle « CentOS 7 - cPanel » (disponible uniquement avec une offre VPS compatible).

> [!warning]
>
> Si vous réinstallez un VPS, toutes les données stockées sur le VPS seront perdues.
> 

### Première connexion

Une fois que vous avez reçu l'e-mail avec le lien unique, cliquez sur ce lien pour effectuer la configuration initiale.

> [!primary]
>
> Si le lien a déjà expiré, réinstallez le VPS avec cPanel.
>

L'URL citée plus haut vous permet de vous connecter sans informations d'identification (utilisateur et mot de passe) à votre interface WHM.

#### Étape 1 : lire les conditions d'utilisation de cPanel

Lisez et acceptez les conditions d'utilisation de cPanel

![cPanel](images/license_validation.png){.thumbnail}

#### Étape 2 : compléter les champs requis

Indiquez les serveurs de messagerie et de noms (nameservers) que vous souhaitez définir sur le serveur VPS.

![cPanel](images/setup_config_cpanel.png){.thumbnail}

#### Étape 3 : définir le mot de passe root

![cPanel](images/change_root.png){.thumbnail}

Vous devriez à présent pouvoir vous connecter à WHM et en SSH en utilisant l'utilisateur root avec le mot de passe qui vient d'être défini.

### Sécurisation de votre service

Nous vous recommandons de prendre toutes les mesures nécessaires pour sécuriser votre WHM et votre VPS. Pour cela, nous vous recommandons de lire les recommandations de cPanel [ici](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).

Nous vous recommandons également de consulter notre guide pour [sécuriser un VPS](../conseils-securisation-vps/), d'utiliser [nos solutions de sauvegarde](../) et de configurer le [Firewall Network](../../dedicated/firewall-network/).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
