---
title: Comprendre le prix des services Analytics
excerpt: "Découvrez comment sont facturés les services Analytics, y compris compute, stockage, sauvegardes et facturation par seconde."
updated: 2026-05-04
---

## Objectif

Ce guide explique comment fonctionne la facturation des services Analytics d’OVHcloud. Il couvre les principaux composants de coût (compute, stockage et sauvegardes), la facturation par seconde et comment interpréter les prix sur le site web, la page de commande et l’utilisation facturée dans le Panneau de contrôle.

## Composants de prix des services Analytics

### Compute (machine virtuelle)

Le compute correspond à la machine virtuelle qui exécute votre service Analytics. Il inclut CPU et RAM, ce qui impacte directement les performances de traitement, l’évolutivité et le coût horaire.

### Stockage (stockage en bloc)

Le stockage correspond au volume où vos données Analytics sont conservées. Il est facturé en fonction de la capacité allouée (en Go) et est indépendant du compute.

Les services Analytics tels que Dashboards (Grafana), Kafka Connect et Kafka MirrorMaker exploitent le stockage en mémoire, ce qui signifie qu'ils stockent les données principalement dans la mémoire vive (RAM) et ne tirent donc pas directement parti du stockage en blocs pour traiter la donnée.

### Sauvegardes (stockage d'objets)

Les sauvegardes sont stockées dans un système de stockage objet et garantissent la pérennité et la récupération des données. La tarification dépend non seulement du service Analytics et de toute politique de conservation associée, mais aussi de la nature des fichiers de données et de la manière dont le service Analytics structure et organise ces données. Même si les outils de sauvegarde peuvent optimiser la taille finale des sauvegardes grâce à la compression, ces facteurs continuent d'influencer directement les caractéristiques et la taille globale des sauvegardes obtenues.

Il n'est généralement pas nécessaire de sauvegarder les services Analytics tels que Dashboards (Grafana), Kafka, Kafka Connect et Kafka MirrorMaker, car les données sont volatiles et ne sont pas conservées longtemps, contrairement à OpenSearch ou ClickHouse (consultez le guide [Automated Backups](/pages/public_cloud/data_analytics/analytics/information_05_automated_backups) pour plus d'information).

## Principes de facturation

### Facturation par seconde

Les services Analytics sont facturés à la seconde, ce qui signifie que vous payez uniquement pour la durée réelle d’utilisation de vos ressources. Cela permet un suivi précis des coûts et une grande flexibilité, notamment pour les charges variables.

### Prix horaire (valeur de référence)

Le prix horaire est la valeur de référence utilisée pour calculer les coûts. Il reflète le prix de vos ressources par heure et constitue la base de tous les calculs de facturation.

### Prix mensuel

Le prix mensuel est une estimation basée sur le prix horaire :

- prix mensuel = prix horaire × 730 heures  

Cette estimation permet de comparer et de planifier vos coûts mensuels, même si la facturation réelle reste calculée à la seconde.

### Structure de la facture

Les factures des services Analytics sont conçues pour refléter clairement la manière dont les ressources sont facturées.

Jusqu’en mai 2026, une facture pour un service donné comprend généralement deux lignes de facturation :

- Le service Analytics (incluant le compute, le stockage de base et les sauvegardes)
- Le stockage supplémentaire optionnel, s’il est provisionné

Le modèle de facturation évolue vers plus de transparence, les factures sont mises à jour pour inclure trois lignes distinctes :

- La composante de compute du service
- L’utilisation totale du stockage, combinant le stockage de base et le stockage supplémentaire
- Les sauvegardes stockées pour le service

Cette évolution offre une meilleure visibilité sur la répartition des coûts entre les ressources de compute, de stockage et de sauvegarde.

## Visibilité des prix à travers les interfaces

### Page de prix sur le site web

La [page de tarification du site web d’OVHcloud](https://www.ovhcloud.com/fr/public-cloud/prices/){.external} fournit un aperçu général des coûts des services Analytics. Elle affiche les prix horaires et les prix mensuels estimés, permettant de comparer différentes offres et configurations.

### Panneau de contrôle OVHcloud – Page de commande

Lorsque vous commandez un service Analytics dans le Panneau de contrôle OVHcloud, les prix sont affichés en temps réel en fonction des ressources sélectionnées. L’estimation se met à jour dynamiquement lorsque vous ajustez les options de compute, de stockage ou de traitement.

### Panneau de contrôle OVHcloud – Facturation et utilisation

Dans la section de facturation du Panneau de contrôle, vous pouvez suivre votre utilisation réelle et vos coûts. Les frais sont détaillés par composant et reflètent le modèle de facturation à la seconde, offrant une transparence totale sur votre facturation.

## Nous souhaitons votre retour

Nous serions ravis de répondre à vos questions et apprécions tout retour que vous pourriez avoir.

Si vous avez besoin de formation ou d’une assistance technique pour mettre en œuvre nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander à nos experts de Services Professionnels une analyse personnalisée de votre projet.

Êtes-vous sur Discord? Rejoignez notre canal à <https://discord.gg/ovhcloud> et échangez directement avec l’équipe qui développe nos services Analytics!
