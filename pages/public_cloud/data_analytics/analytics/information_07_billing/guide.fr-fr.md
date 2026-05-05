---
title: Comprendre le prix des services Analytics
excerpt: "Découvrez comment sont facturés à la seconde les services Analytics, y compris compute, stockage et sauvegardes"
updated: 2026-05-05
---

## Objectif

Ce guide explique comment fonctionne la facturation des services Analytics d’OVHcloud. Il couvre les principaux composants de coût (compute, stockage et sauvegardes), la facturation à la seconde et comment interpréter les prix sur le site web, la page de commande et l’utilisation facturée dans l’espace client OVHcloud.

## Composants de prix des services Analytics

### Compute (machine virtuelle)

Le compute correspond à la machine virtuelle qui exécute votre service Analytics. Il inclut CPU et RAM, ce qui impacte directement les performances de traitement, l’évolutivité et le coût horaire.

### Stockage (Block Storage)

Le stockage correspond au volume où vos données Analytics sont conservées. Il est facturé en fonction de la capacité allouée (en Go) et est indépendant du compute.

Les services Analytics tels que Dashboards (Grafana), Kafka Connect et Kafka MirrorMaker exploitent le stockage en mémoire, ce qui signifie qu'ils stockent les données principalement dans la mémoire vive (RAM) et ne tirent donc pas directement parti du Block Storage pour traiter la donnée.

### Sauvegardes (Object Storage)

Les sauvegardes sont stockées dans Object Storage et garantissent la pérennité et la récupération des données. La tarification dépend non seulement du service Analytics et de toute politique de conservation associée, mais aussi de la nature des fichiers de données et de la manière dont le service Analytics structure et organise ces données. Même si les outils de sauvegarde peuvent optimiser la taille finale des sauvegardes grâce à la compression, ces facteurs influencent directement les caractéristiques et la taille des sauvegardes.

Il n'est généralement pas nécessaire de sauvegarder les services Analytics tels que Dashboards (Grafana), Kafka, Kafka Connect et Kafka MirrorMaker, car les données sont volatiles et ne sont pas conservées longtemps, contrairement à OpenSearch ou ClickHouse (consultez le guide « [Sauvegardes automatiques des services Analytics](/pages/public_cloud/data_analytics/analytics/information_05_automated_backups) » pour plus d'informations).

## Principes de facturation

### Facturation à la seconde

Les services Analytics sont facturés à la seconde : vous payez uniquement la durée réelle d’utilisation de vos ressources. Cela permet un suivi précis des coûts et une grande flexibilité, notamment pour les charges variables.

### Prix horaire (valeur de référence)

Le prix horaire est la valeur de référence utilisée pour calculer les coûts. Il reflète le prix de vos ressources par heure et constitue la base de tous les calculs de facturation.

### Prix mensuel

Le prix mensuel est une estimation basée sur le prix horaire :

- prix mensuel = prix horaire × 730 heures

Cette estimation permet de comparer et de planifier vos coûts mensuels, même si la facturation réelle reste calculée à la seconde.

### Structure de la facture

Les factures des services Analytics sont conçues pour refléter clairement la manière dont les ressources sont facturées.

Jusqu’en mai 2026, une facture pour un service donné comprend généralement deux lignes de facturation :

- Le service Analytics (incluant le compute, le stockage de base et les sauvegardes)
- Le stockage supplémentaire optionnel, s’il est provisionné

Le modèle de facturation évolue vers plus de transparence, les factures sont mises à jour pour inclure trois lignes distinctes :

- La composante de compute du service
- L’utilisation totale du stockage, combinant le stockage de base et le stockage supplémentaire
- Les sauvegardes stockées pour le service

Cette évolution offre une meilleure visibilité sur la répartition des coûts entre les ressources de compute, de stockage et de sauvegarde.

## Visibilité des prix à travers les interfaces

### Page de prix sur le site web

La [page de prix du site web d’OVHcloud](/links/public-cloud/prices) fournit un aperçu général des coûts des services Analytics. Elle affiche les prix horaires et les prix mensuels estimés, permettant de comparer différentes offres et configurations.

### Espace client OVHcloud – Page de commande

Lorsque vous commandez un service Analytics dans l’espace client OVHcloud, les prix sont affichés en temps réel en fonction des ressources sélectionnées. L’estimation se met à jour dynamiquement lorsque vous ajustez les options de compute, de stockage ou de traitement.

### Espace client OVHcloud – Facturation et utilisation

Dans la section de facturation de l’espace client OVHcloud, vous pouvez suivre votre utilisation réelle et vos coûts. Les frais sont détaillés par composant et reflètent le modèle de facturation à la seconde, offrant une transparence totale sur votre facturation.

## Nous souhaitons votre retour

Nous serions ravis de répondre à vos questions et apprécions tout retour que vous pourriez avoir.

Pour une formation ou une assistance technique sur la mise en œuvre de nos solutions, contactez votre commercial ou consultez la page [Professional Services](/links/professional-services) pour obtenir un devis et faire analyser votre projet par nos experts.

Êtes-vous sur Discord ? Rejoignez notre canal à <https://discord.gg/ovhcloud> et échangez directement avec l’équipe qui développe nos services Analytics !

Échangez avec notre [communauté d'utilisateurs](/links/community).
