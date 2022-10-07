---
title: Activation du pare-feu applicatif
slug: activation-pare-feu-applicatif
excerpt: "Découvez comment activer le pare-feu applicatif sur une offre d'hébergement Web."
section: "Configuration de l'hébergement"
order: 04
---

**Dernière mise à jour le 26 avril 2021**

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

- Disposer d'une offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external}.
- Disposer d'au moins un [nom de domaine](https://www.ovhcloud.com/fr/domains/){.external} attaché à l'hébergement.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur la section `Hébergements`{.action} puis sur l'hébergement concerné.

### Activer le pare-feu applicatif dans la configuration PHP

Cliquez sur l'onglet `Informations générales`{.action}. La `version PHP globale` actuelle s'affiche dans la zone **Configuration**. Cliquez sur le bouton `...`{.action} et sélectionnez `Modifier la configuration`{.action}. Dans la fenêtre qui s'ouvre, sélectionnez l'élément `Modifier la configuration actuelle`{.action} et cliquez sur le bouton `Suivant`{.action}.

![managephpconfig](images/manage-php-config.png){.thumbnail}

Dans la nouvelle fenêtre, assurez-vous que **Application firewall** est défini sur `Activé`{.action}. Pour confirmer la configuration, cliquez sur le bouton `Confirmer`{.action}.

### Activer le pare-feu applicatif pour les noms de domaine individuels sur un multisite

Cliquez sur l'onglet `Multisite`{.action} de votre offre d'hébergement. Cliquez sur le bouton `...`{.action} à droite du nom de domaine concerné et sélectionnez l'option `Modifier le domaine`{.action}.

![managemultisite](images/firewall-modify-multisite.png){.thumbnail}

Dans la fenêtre de configuration, cochez la case `Activer le pare-feu`{.action}. Vous pouvez également inclure le sous-domaine `www` dans cette configuration en cochant la case en haut.

Cliquez sur `Suivant`{.action}, puis sur `Confirmer`{.action} pour modifier les paramètres multisites.

![modifydomain](images/firewall-modify-domain.png){.thumbnail}

### Vérifier l'état de la tâche d'activation

![gestion en cours](images/firewal-ongoing-jobs.png){.thumbnail}

Les tâches de mise à jour de votre configuration multisite seront répertoriées dans l'onglet `Opérations en cours`{.action} (le statut initial est « Planifié »). Le pare-feu sera actif dès que sa tâche de mise à jour n'apparaîtra plus dans la liste.

### Vérification des noms domaine pour lesquels le pare-feu est activé

L'onglet `Multisite`{.action} de votre offre d'hébergement fournit des informations sur les noms domaine pour lesquels l'option de pare-feu est activée.

![gérageenabled](images/firewall-enabled-multisite.png){.thumbnail}

Le tableau affiché contient tous les noms de domaine qui ont été ajoutés à votre offre d'hébergement Web. Dans la colonne « Pare-feu » s'affiche le statut d'activation de chaque nom de domaine.

## Aller plus loin

Echangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
