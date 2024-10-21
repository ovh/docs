---
title: Activation du pare-feu applicatif
excerpt: "Découvrez comment activer le pare-feu applicatif sur un offre d'hébergement Web."
updated: 2021-04-26
---

## Objectif

*ModSecurity* est un module Apache complémentaire qui filtre toutes les requêtes entrantes sur votre serveur Web. Il renforce la sécurité contre les vulnérabilités connues en interceptant et en filtrant les demandes avant qu'elles ne soient traitées par des scripts.

L'ensemble préconfiguré de règles de base, le « Core Rule Set » (CRS), de notre *ModSecurity* protège vos sites Web contre les attaques les plus courantes, par exemple :

- Trojans,
- Injections d'emails,
- Faille des fichiers PDF,
- Injection de fichiers sur votre hébergement,
- injection de type SQL ou XSS,
- etc.

**Ce guide vous explique comment activer le pare-feu applicatif depuis votre espace client OVHcloud, afin d'obtenir une protection améliorée.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting){.external}.
- Disposer d'au moins un [nom de domaine](/links/web/domains){.external} attaché à l'hébergement.
- Être connecté à votre [espace client OVHcloud](/links/manager){.external}.

## En pratique

Connectez-vous à votre [espace client OVHcloud](/links/manager){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur la section `Hébergements`{.action} puis sur l'hébergement concerné.

### Activer le pare-feu applicatif dans la configuration PHP

Cliquez sur l'onglet `Informations générales`{.action}. La `version PHP globale` actuelle s'affiche dans la zone **Configuration**. Cliquez sur le bouton `...`{.action} et sélectionnez `Modifier la configuration`{.action}. Dans la fenêtre qui s'ouvre, sélectionnez l'élément `Modifier la configuration actuelle`{.action} et cliquez sur le bouton `Suivant`{.action}.

![managephpconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/application-firewall-step-2.png){.thumbnail}

Dans la nouvelle fenêtre, assurez-vous que **Application firewall** est défini sur `Activé`{.action}. Pour confirmer la configuration, cliquez sur le bouton `Confirmer`{.action}.

### Activer le pare-feu applicatif pour les noms de domaine individuels sur un multisite

Cliquez sur l'onglet `Multisite`{.action} de votre offre d'hébergement. Cliquez sur le bouton `...`{.action} à droite du nom de domaine concerné et sélectionnez l'option `Modifier le domaine`{.action}.

![managemultisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-2.png){.thumbnail}

Dans la fenêtre de configuration, cochez la case `Activer le pare-feu`{.action}. Vous pouvez également inclure le sous-domaine `www` dans cette configuration en cochant la case en haut.

Cliquez sur `Suivant`{.action}, puis sur `Confirmer`{.action} pour modifier les paramètres multisites.

![modifydomain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-enable-firewall-step-1.png){.thumbnail}

### Vérifier l'état de la tâche d'activation

![gestion en cours](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/firewall-planned.png){.thumbnail}

Les tâches de mise à jour de votre configuration multisite seront répertoriées dans l'onglet `Opérations en cours`{.action} (le statut initial est « Planifié »). Le pare-feu sera actif dès que sa tâche de mise à jour n'apparaîtra plus dans la liste.

### Vérification des noms domaine pour lesquels le pare-feu est activé

L'onglet `Multisite`{.action} de votre offre d'hébergement fournit des informations sur les noms domaine pour lesquels l'option de pare-feu est activée.

![gérageenabled](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/firewall-enabled.png){.thumbnail}

Le tableau affiché contient tous les noms de domaine qui ont été ajoutés à votre offre d'hébergement Web. Dans la colonne « Pare-feu » s'affiche le statut d'activation de chaque nom de domaine.

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).