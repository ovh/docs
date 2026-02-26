---
title: 'Comprendre les Métriques dans Public Cloud'
excerpt: "Découvrez comment fonctionnent les Métriques dans Public Cloud, les tableaux de bord, les abonnements ainsi que la disponibilité régionale."
updated: 2026-02-01
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

## Objective

L'objectif de ce document est de fournir aux utilisateurs du Public Cloud une compréhension complète de la fonctionnalité Métriques, notamment :

- Concepts clés – Explication du tableau de bord des métriques d'observabilité et de leur configuration dans le service Observability afin que les utilisateurs comprennent comment surveiller et gérer leurs ressources.
- Présentation des Métriques : définition de Métrique, de son fonctionnement et de la manière dont il peut aider à optimiser les opérations cloud.
- Déploiement régional : mise en avant de la disponibilité des Métriques dans différentes régions, afin d'aider les utilisateurs à planifier et à déployer leurs charges de travail en toute transparence.

À la fin de ce document, les lecteurs seront en mesure de naviguer en toute confiance dans la fonctionnalité Métriques, d'utiliser efficacement les tableaux de bord et les abonnements, et de comprendre la disponibilité régionale du service pour une meilleure gestion des coûts et des ressources.

## Tableau de bord des métriques d'observabilité et configuration pour les utiliser dans le service Observability

Le tableau de bord des métriques et la configuration de collecte avec le service Observability fonctionnent ensemble pour offrir une expérience complète : consultez les métriques pour comprendre l'état du cloud et utilisez-les pour prendre des mesures efficaces. Cette approche garantit que les utilisateurs ont toujours un contrôle total sur leurs ressources et peuvent optimiser à la fois les performances et les coûts.

> [!primary]
>
> Au moment de la rédaction du présent document, seuls les tableaux de bord Metrics sont généralement disponibles. L'abonnement à Metrics dans le service Observability n'est pas encore généralement disponible et sera introduit progressivement (voir ci-dessous).
>

### Tableaux de bord métriques pour la surveillance

Les tableaux de bord métriques permettent de visualiser les métriques d'une ressource donnée afin d'en surveiller l'état et les performances. Cette fonctionnalité permet aux utilisateurs :

- de centraliser et de visualiser toutes les métriques d'un service cloud donné en temps réel et de manière historique,
- d'analyser les tendances et de détecter rapidement les anomalies.

L'objectif des tableaux de bord métriques est de fournir un tableau de bord complet et intuitif, garantissant une visibilité maximale sur l'ensemble de l'infrastructure cloud.

Les tableaux de bord métriques sont disponibles par région en fonction de l'état d'avancement du déploiement (voir la section sur la disponibilité régionale ci-dessous).

### Configuration pour collecter des métriques dans le service Observability

La fonctionnalité d'abonnement n'est pas encore disponible en production. Une phase Alpha devrait être lancée en mai, permettant aux premiers utilisateurs de tester la fonctionnalité et de fournir leurs commentaires.

L'abonnement consiste à activer la collecte de métriques dans le tenant de l'utilisateur dans le service Observability pour une utilisation avancée.

- Abonnez-vous aux métriques Prometheus d'une ressource donnée pour les stocker pendant la période de conservation que vous définissez (jusqu'à 13 mois).
- Interrogez vos métriques dans PromQL.
- Intégrer les métriques dans les workflows automatisés et les outils externes,
- Définir des alertes et des seuils pour anticiper les problèmes et optimiser les performances.

Les informations relatives à la phase Alpha seront publiées sur cette [page OVHcloud Observability Metrics](https://labs.ocms.ovhcloud.tools/en/node/18861/latest/){.external}.

M2C met l’accent sur la proactivité et l’action, transformant les données des Métriques en décisions opérationnelles concrètes.

## Comprendre les Métriques dans le Public Cloud

### Qu’est-ce que les Métriques ?

Les Métriques sont des indicateurs quantitatifs de performance et d’utilisation des ressources cloud : CPU, mémoire, réseau, stockage, latence… Elles permettent de surveiller, analyser et optimiser l’infrastructure en temps réel.

### Pourquoi les Métriques sont essentielles

- **Surveillance :** suivre la performance des services.
- **Efficacité :** détecter les goulots d’étranglement et optimiser les ressources.
- **Proactivité :** anticiper les problèmes grâce aux alertes et seuils.
- **Optimisation des coûts :** aligner usage et budget.

### Explorer les Métrique par service

/// details | Compute

Les Métriques Compute permettent de suivre la performance et l’utilisation des instances cloud. Elles fournissent des informations précises sur le CPU, la mémoire, le stockage et le réseau, permettant d’optimiser les performances et d’anticiper les besoins opérationnels.

| Catégorie              | Metric                          | Description |
| ---------------------- | ------------------------------- | ----------- |
| **Stockage – Disques** | Disk read Bytes (KiB/s)         | Volume moyen de données lues depuis tous les volumes attachés à l’instance. Permet de mesurer la vitesse de lecture des applications. |
|                        | Disk read IOPS                  | Nombre moyen d’opérations de lecture complétées par seconde. Permet de suivre l’intensité des lectures sur les volumes de l’instance. |
|                        | Disk write Bytes (KiB/s)        | Volume moyen de données écrites sur tous les volumes attachés à l’instance. Permet de mesurer la vitesse d’écriture des applications. |
|                        | Disk write IOPS                 | Nombre moyen d’opérations d’écriture complétées par seconde. Suivi de l’intensité des écritures sur les volumes de l’instance. |
| **CPU**                | CPU utilization (%)             | Pourcentage de ressources CPU utilisées par l’instance sur une période donnée. Permet d’identifier les pics de charge et les éventuels goulots d’étranglement. |
| **Réseau**             | Network in (bytes/s)            | Trafic entrant de l’instance en octets par seconde. Permet de détecter les pics ou anomalies dans les flux entrants. |
|                        | Network out (bytes/s)           | Trafic sortant de l’instance en octets par seconde. Suivi des flux sortants et détection de volumes anormaux. |
|                        | Network packets in (packets/s)  | Nombre de paquets entrants par seconde. Utile pour analyser l’intensité du trafic réseau. |
|                        | Network packets out (packets/s) | Nombre de paquets sortants par seconde. Permet de surveiller les flux sortants et détecter des anomalies. |
| **Mémoire**            | Memory utilization (%)          | Pourcentage de mémoire utilisée par l’instance. Permet d’identifier les pressions mémoire, fuites ou contraintes de capacité. |
| **Volumes attachés**   | Number of attached volumes      | Nombre de volumes attachés à l’instance, pour suivre la configuration de stockage disponible. |


///

## Disponibilité des Métriques par région

OVHcloud déploie les Métriques progressivement sur toutes ses régions afin d’assurer une haute disponibilité et une performance homogène. Comprendre le roll-out par région permet aux utilisateurs de planifier leurs déploiements, d’anticiper leurs besoins en monitoring et d’optimiser l’exploitation de leurs ressources.

Le tableau ci-dessous présente l’état de disponibilité des Métriques ainsi que les dates de sortie prévues pour chaque région.

| Région         | Disponibilité des Métriques      | Date de sortie |
| -------------- | -------------------------------- | -------------- |
| GRA            | Disponible                       |                |
| SBG            | Non disponible                   | Q2 2026        |
| EU-WEST-PAR    | Non disponible                   | Q3 2026        |
| EU-WEST-MIL    | Non disponible                   | Q3 2026        |
| BHS            | Non disponible                   | Q4 2026        |
| Autres régions | Voir la [roadmap OVHcloud Public Cloud](https://github.com/orgs/ovh/projects/16/views/11?filterQuery=main-product%3A%2C%22Observability%22+status%3AAcknowledged%2CPrioritized%2CPlanned%2C%22Partially+released%22%2CDone++label%3A%22New+Geo%22+-release-date%3A%3C%40today-2m++-reason%3Anot-planned) | Suivez la roadmap pour les mises à jour |

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).