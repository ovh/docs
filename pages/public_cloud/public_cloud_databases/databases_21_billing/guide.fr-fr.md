---
title: Comprendre le prix des bases de données Public Cloud
excerpt: "Découvrez comment sont facturés les services de base de données Public Cloud, y compris compute, stockage, sauvegardes et facturation par seconde."
updated: 2026-05-04
---

## Objectif

Ce guide explique comment fonctionne la facturation des bases de données gérées d'OVHcloud. Il couvre les trois principaux composants de coût (compute, stockage et sauvegardes), la facturation par seconde et comment interpréter les prix sur le site web, la page de commande et l'utilisation facturée dans le Panneau de contrôle.

## Composants de prix des bases de données

### Compute (machine virtuelle)

Le compute correspond à la machine virtuelle qui exécute votre base de données. Il inclut CPU et RAM, ce qui impacte directement les performances, la scalabilité et le coût horaire.

### Stockage (stockage en bloc)

Le stockage correspond au volume où vos données de base de données sont conservées. Il est facturé en fonction de la capacité allouée (en Go) et est indépendant du compute.

Les bases de données telles que Valkey sont des systèmes en mémoire, ce qui signifie qu'elles stockent les données principalement dans la mémoire vive (RAM) et ne tirent donc pas directement parti du stockage en blocs pour traiter la donnée.

### Sauvegardes (stockage d'objets)

Les sauvegardes sont stockées dans le stockage d'objets et assurent la durabilité et la récupération des données. Leur coût dépend non seulement du moteur de base de données et de la politique de conservation associée, mais aussi de la nature des fichiers de données et de la manière dont le moteur de base de données structure et organise ces données. Même si les outils de sauvegarde peuvent optimiser la taille finale de la sauvegarde grâce à la compression, ces facteurs continuent d'influencer directement les caractéristiques et la taille globale des sauvegardes obtenues.

## Principes de facturation

### Facturation par seconde

Les bases de données Public CLoud sont facturées à la seconde, ce qui signifie que vous payez uniquement pour la durée réelle d'utilisation, offrant un suivi précis des coûts et une flexibilité maximale.

### Prix horaire (valeur de référence)

Le prix horaire sert de référence pour calculer le coût des ressources et constitue la base de tous les calculs de facturation.

### Prix mensuel

Le prix mensuel est une estimation basée sur le prix horaire :

- prix mensuel = prix horaire × 730 heures

Cette estimation permet de comparer et planifier vos coûts mensuels, même si la facturation réelle reste calculée à la seconde.

### Structure de la facture

Les factures des services de base de données sont conçues pour refléter clairement la manière dont les ressources sont facturées.

Jusqu’en mai 2026, une facture pour un service donné comprend généralement deux lignes de facturation :

- Le service de base de données lui-même (incluant le compute, le stockage de base et les sauvegardes)
- Le stockage supplémentaire optionnel, s’il est provisionné

Le modèle de facturation évolue vers plus de transparence, les factures sont mises à jour pour inclure trois lignes distinctes :

- La composante de compute du service
- L’utilisation totale du stockage, combinant le stockage de base et le stockage supplémentaire
- Les sauvegardes stockées pour le service

Cette évolution offre une meilleure visibilité sur la répartition des coûts entre les ressources de compute, de stockage et de sauvegarde.

## Visibilité des prix à travers les interfaces

### Page de prix sur le site web

La [page de prix sur le site web d'OVHcloud](https://www.ovhcloud.com/fr/public-cloud/prices/){.external} fournit un aperçu général des coûts des services de base de données. Elle affiche les prix horaires et les prix mensuels estimés, permettant aux utilisateurs de comparer différents forfaits et configurations.

### Espace client OVHcloud – Page de commande

Lorsque vous commandez un service de base de données dans l'espace client OVHcloud, les prix sont affichés en temps réel en fonction des ressources sélectionnées. L'estimation se met à jour dynamiquement lorsque vous modifiez les options de Compute, de Stockage ou de sauvegarde.

### Espace client OVHcloud – Facturation et utilisation

Dans la section de facturation du Panneau de contrôle, vous pouvez surveiller votre utilisation réelle et vos coûts. Les frais sont détaillés par composant et reflètent le modèle de facturation par seconde, offrant une transparence totale sur la manière dont votre facture est calculée.

## Nous souhaitons votre retour

Nous aimerions beaucoup vous aider à répondre à vos questions et apprécions tout retour que vous pourriez avoir.

Si vous avez besoin de formation ou d'une assistance technique pour mettre en œuvre nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander à nos experts de Services Professionnels une analyse personnalisée de votre projet.

Êtes-vous sur Discord? Connectez-vous à notre canal à <https://discord.gg/ovhcloud> et interagissez directement avec l'équipe qui développe notre service de bases de données!
