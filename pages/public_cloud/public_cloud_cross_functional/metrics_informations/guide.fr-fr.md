---
title: 'Comprendre les métriques dans OVHcloud Public Cloud'
excerpt: "Découvrez comment fonctionnent les métriques dans le Public Cloud, les tableaux de bord, les abonnements ainsi que la disponibilité régionale."
updated: 2026-03-10
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Ce guide vous aide à comprendre la fonctionnalité des métriques dans OVHcloud Public Cloud :

- Concepts clés – Tableaux de bord de métriques d'observabilité et configuration dans le service Observability pour surveiller et gérer vos ressources.
- Présentation des métriques – Définition des métriques, de leur fonctionnement et de la manière dont elles peuvent aider à optimiser les opérations dans le cloud.
- Déploiement régional – Mise en avant de la disponibilité des métriques dans différentes régions, pour aider les utilisateurs à planifier et à déployer leurs charges de travail de manière optimale.

Après lecture, vous saurez utiliser les tableaux de bord et les abonnements aux métriques, et comprendre la disponibilité régionale pour mieux gérer vos coûts et ressources.

**Ce guide explique le fonctionnement des métriques dans OVHcloud Public Cloud.**

## Tableaux de bord des métriques d’observabilité et configuration dans le service Observability

Le tableau de bord des métriques et la configuration de collecte avec le service Observability fonctionnent ensemble pour offrir une expérience complète : consultez les métriques pour comprendre l'état de votre cloud et utilisez-les pour prendre des mesures efficaces. Cette approche garantit aux utilisateurs un contrôle total sur leurs ressources et leur permet d'optimiser à la fois les performances et les coûts.

> [!primary]
>
> Au moment de la rédaction du présent document, seuls les tableaux de bord de métriques sont disponibles. L'abonnement aux métriques dans le service Observability n'est pas encore disponible et sera introduit progressivement (voir ci-dessous).
>

### Tableaux de bord de métriques pour la surveillance

Les tableaux de bord de métriques permettent de visualiser les métriques d'une ressource donnée pour en surveiller l'état et les performances. Cette fonctionnalité permet aux utilisateurs :

- de centraliser et de visualiser toutes les métriques d'un service cloud donné en temps réel et sur des périodes historiques,
- d'analyser les tendances et de détecter rapidement les anomalies.

Les tableaux de bord de métriques offrent une visibilité complète sur l'ensemble de votre infrastructure cloud.

Les tableaux de bord de métriques sont disponibles par région en fonction de l'état d'avancement du déploiement (voir la section sur la disponibilité régionale ci-dessous).

### Configuration pour collecter des métriques dans le service Observability

La fonctionnalité d'abonnement n'est pas encore disponible en production. Une phase Alpha est planifiée, permettant aux premiers utilisateurs de la tester et de donner leur avis.

L'abonnement consiste à activer la collecte de métriques dans le tenant utilisateur dans le service Observability pour une utilisation avancée.

- Abonnez-vous aux métriques Prometheus d'une ressource donnée pour les stocker pendant la période de conservation que vous définissez (jusqu'à 13 mois).
- Interrogez vos métriques dans PromQL.
- Intégrez les métriques dans les workflows automatisés et les outils externes.
- Définissez des alertes et des seuils pour anticiper les problèmes et optimiser les performances.

Une fois disponible, la fonctionnalité d’abonnement aux métriques transforme les données en décisions opérationnelles concrètes.

## Comprendre les métriques dans OVHcloud Public Cloud

### Qu’est-ce que les métriques ?

Les métriques sont des indicateurs quantitatifs de performance et d’utilisation des ressources cloud : CPU, mémoire, réseau, stockage, latence, etc. Elles permettent de surveiller, analyser et optimiser l’infrastructure en temps réel.

### Pourquoi les métriques sont essentielles

- **Surveillance :** suivre la performance des services.
- **Efficacité :** détecter les goulots d’étranglement et optimiser les ressources.
- **Proactivité :** anticiper les problèmes grâce aux alertes et seuils.
- **Optimisation des coûts :** aligner l'usage et le budget.

### Explorer les métriques par service

/// details | Compute

Les métriques Compute permettent de suivre la performance et l’utilisation des instances cloud. Elles fournissent des informations précises sur le CPU, la mémoire, le stockage et le réseau, permettant d’optimiser les performances et d’anticiper les besoins opérationnels.

| Catégorie              | Metric                          | Description |
| ---------------------- | ------------------------------- | ----------- |
| **Stockage – Disques** | Disk read Bytes (KiB/s)         | Volume moyen de données lues depuis tous les volumes attachés à l’instance. Permet de mesurer la vitesse de lecture des applications. |
|                        | Disk read IOPS                  | Nombre moyen d’opérations de lecture complétées par seconde. Permet de suivre l’intensité des lectures sur les volumes de l’instance. |
|                        | Disk write Bytes (KiB/s)        | Volume moyen de données écrites sur tous les volumes attachés à l’instance. Permet de mesurer la vitesse d’écriture des applications. |
|                        | Disk write IOPS                 | Nombre moyen d’opérations d’écriture complétées par seconde. Permet de suivre l’intensité des écritures sur les volumes de l’instance. |
| **CPU**                | CPU utilization (%)             | Pourcentage de ressources CPU utilisées par l’instance sur une période donnée. Permet d’identifier les pics de charge et les éventuels goulots d’étranglement. |
| **Réseau**             | Network in (bytes/s)            | Trafic entrant de l’instance en octets par seconde. Permet de détecter les pics ou anomalies dans les flux entrants. |
|                        | Network out (bytes/s)           | Trafic sortant de l’instance en octets par seconde. Permet de surveiller les flux sortants et de détecter les volumes anormaux. |
|                        | Network packets in (packets/s)  | Nombre de paquets entrants par seconde. Utile pour analyser l’intensité du trafic réseau. |
|                        | Network packets out (packets/s) | Nombre de paquets sortants par seconde. Permet de surveiller les flux sortants et détecter des anomalies. |
| **Mémoire**            | Memory utilization (%)          | Pourcentage de mémoire utilisée par l’instance. Permet d’identifier les pressions mémoire, fuites ou contraintes de capacité. |
| **Volumes attachés**   | Number of attached volumes      | Nombre de volumes attachés à l’instance, pour suivre la configuration de stockage disponible. |


///

## Disponibilité des métriques par région

OVHcloud déploie les métriques progressivement sur toutes ses régions pour assurer une haute disponibilité et des performances homogènes. Comprendre la disponibilité par région permet aux utilisateurs de planifier leurs déploiements, d’anticiper leurs besoins en surveillance et d’optimiser l’exploitation de leurs ressources.

Le tableau ci-dessous présente l’état de disponibilité des métriques ainsi que les dates de sortie prévues par région.

| Région         | Disponibilité des métriques      | Date de sortie |
| -------------- | -------------------------------- | -------------- |
| GRA            | Disponible                       |                |
| SBG            | Disponible                       |                |
| Autres régions | Voir la [roadmap OVHcloud Public Cloud](https://github.com/orgs/ovh/projects/16/views/11?filterQuery=main-product%3A%2C%22Observability%22+status%3AAcknowledged%2CPrioritized%2CPlanned%2C%22Partially+released%22%2CDone++label%3A%22New+Geo%22+-release-date%3A%3C%40today-2m++-reason%3Anot-planned) | Suivez la roadmap pour les mises à jour |

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).