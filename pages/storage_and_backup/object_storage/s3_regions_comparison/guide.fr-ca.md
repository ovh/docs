---
title: "Comparaison des modes de déploiement Object Storage - Présentation des régions 3-AZ / 1-AZ / Local Zones"
excerpt: "Découvrez les modes de déploiement de l'Object Storage OVHcloud"
updated: 2024-12-11
---

## Objectif

OVHcloud propose plusieurs modes de déploiement pour son offre [Object Storage](/links/public-cloud/object-storage), chacun adapté à des besoins spécifiques en matière de résilience, de disponibilité, de performances et de latence. Cette page fournit une explication détaillée des caractéristiques de chaque mode de déploiement, suivie d'une comparaison pour aider les utilisateurs à choisir l'option la plus adaptée à leurs besoins.

## Concepts

Le service de Object Storage d'OVHcloud propose trois principaux modes de déploiement, chacun optimisé pour des cas d'utilisation spécifiques et offrant divers niveaux de redondance et de tolérance aux pannes :

1. **Région 1-AZ** : Pour les besoins généraux de stockage et de sauvegarde, offrant une résilience de base avec un coût optimisé.
2. **Région 3-AZ** : Adaptée aux applications critiques nécessitant une haute disponibilité, avec une tolérance aux pannes accrue.
3. **Local Zones** : Conçues pour rapprocher les données des utilisateurs finaux, réduisant la latence et garantissant la conformité locale.

## Modes de déploiement

> [!primary]
>
> Les informations suivantes concernent les différents modes de déploiement disponibles pour le service. Sélectionnez le mode qui répond le mieux à vos besoins en termes de résilience, de disponibilité et de performance. Vous pouvez identifier le mode de déploiement disponible pour une région donnée sur notre page « [Object Storage - Endpoints et géo-disponibilité de l’Object Storage](/pages/storage_and_backup/object_storage/s3_location) ».

### Région 1-AZ

#### Infrastructure et redondance

Une région 1-AZ se compose d'une **seule zone de disponibilité qui couvre plusieurs datacenters dans la même région**, utilisant une conception redondante 2N+1. Cette configuration offre une résilience contre les défaillances de rack de serveurs et de disques durs, mais elle peut être vulnérable à une panne plus globale d'un datacenter. Notez que, dans une région 1-AZ, le service Object Storage est situé dans un datacenter spécifique et, en cas de panne dans ce datacenter, l'accès aux données pourrait être impacté, même si les autres datacenters de la zone restent opérationnels.

#### Caractéristiques

- **Erasure Coding :** Fournit une redondance des données sur différents serveurs, garantissant ainsi une continuité en cas de défaillances matérielles, en répartissant des fragments de données sur plusieurs disques et serveurs au sein de la zone de disponibilité. 
- **Coût optimisé :** idéal pour les sauvegardes et applications générales où le budget est prioritaire.

#### Limites

- **Risque de panne** : En cas de panne d'un datacenter, les données peuvent devenir indisponibles ou être potentiellement perdues si le datacenter hébergeant le service Object Storage est touché. Toutefois, la protection contre les défaillances de serveurs et de disques durs est maintenue.

> [!success]
>
> Pour renforcer la résilience des applications critiques dans une région 1-AZ, [la réplication asynchrone](/pages/storage_and_backup/object_storage/s3_asynchronous_replication) peut être utilisée, offrant une protection supplémentaire sans compromettre votre coût global. Cela peut aider à renforcer la résilience des applications et des données. Une autre approche pour réduire ce risque est d'utiliser un [**mode de déploiement 3-AZ**](#3azregion).

#### Spécifications de redondance - Région 1-AZ

| Spécification              | Description                                           |
|------------------------|-------------------------------------------------------|
| **Type de redondance** | 2N+1 entre plusieurs datacenters               |
| **Tolérance aux pannes** | Niveau serveur et disque. Risque de panne du datacenter. |
| **Cas d'utilisation**  | Applications générales, sauvegardes                   |

<a name="3azregion"></a>

### Région 3-AZ

#### Infrastructure et redondance 

Les régions 3-AZ se composent de **trois zones de disponibilité indépendantes**, offrant une isolation complète pour l'alimentation, le refroidissement et les réseaux. Ce mode garantit la **disponibilité du service**, même en cas de panne de l'intégralité d'ube zone de disponibilité.

#### Caractéristiques

- **Haute disponibilité :** les données restent accessibles pour les opération de lecture et d'écriture, même si une zone est défaillante. Cette configuration est idéale pour les applications exigeant une haute disponibilité.

#### Cas d'usages privilégiés

Les régions 3-AZ sont idéales pour les applications critiques où la gouvernance des données exige une disponibilité continue des données, telles que les plateformes de e-commerce, e-santé, les services financiers ou services de media streaming.

> [!success]
>
> Bien que proposant une protection accrue, ce mode de déploiement peut ne pas être totalement résistant à une (très improbable) panne régionale. Une protection additionnelle comme [la réplication asynchrone](/pages/storage_and_backup/object_storage/s3_asynchronous_replication) peut être considérée pour améliorer la résilience des données.

#### Spécifications de performance - Région 3-AZ

| Spécification              | Description                                           |
|------------------------|-------------------------------------------------------|
| **Connectivité**        | Faible latence entre zones de disponibilité           |
| **Haute disponibilité** | Maintien de l'accès malgré une panne d'une zone           |
| **Cas d'utilisation**   | Applications critiques, streaming, e-commerce, e-santé        |

### Local Zones

#### Design et flexibilité

Les Local Zones rapprochent les services d'OVHcloud des utilisateurs finaux, minimisant la latence et garantissant la conformité aux réglementations locales. Ces zones sont idéales pour des performances maximales et des besoins de stockage localisés.

#### Avantages en matière de coûts et de conformité

- **Réduction des coûts de réseau :** Les Local Zones aident à réduire les coûts en minimisant la distance que les données doivent parcourir.
- **Stockage localisé :** Les Local Zones prennent en charge les exigences de localisation des données, ce qui en fait une option idéale pour la conformité réglementaire.

#### Limitations

- **Limitation à une seule zone :** Les Local Zones sont limitées à une seule zone de disponibilité et ne fournissent pas de redondance entre zones, ce qui restreint les options de récupération de données en cas de sinistre.

#### Cas d'utilisation - Local Zones

| Avantage               | Description                                           |
|------------------------|-------------------------------------------------------|
| **Performance**        | Latence ultra-faible, permettant des performances optimales  |
| **Conformité des données** | Localisation des données, favorisant la conformité réglementaire  |
| **Cas d'utilisation**  | Jeu en réseau, visioconférences, applications régionales |

### Comparaison des modes de déploiement

| Caractéristiques          | Région 1-AZ                              | Région 3-AZ                            | Local Zones                             |
|---------------------------|------------------------------------------|----------------------------------------|-------------------------------------------|
| **Structure de déploiement** | Zone de disponibilité unique               | Trois zones indépendantes              | Zone de disponibilité unique              |
| **Redondance**             | 2N+1 interne                               | Redondance inter-zones                 | Triple réplication locale           |
| **Disponibilité des données** | Limitée si panne d'un datacenter, mais résilience à la panne de serveurs/disques | Maintenue entre zones de disponibilité  | Limitée si panne d'un datacenter, mais résilience à la panne de serveurs/disques  |
| **Latence**               | Faible pour les utilisateurs finaux proches | Faible pour les utilisateurs finaux proches et ultra-faible entre zones de disponibilité | Faible pour les utilisateurs finaux proches |
| **Cas d'utilisation**     | Applications générales, sauvegardes       | Applications critiques                 | Applications sensibles à la latence, application régionales       |
| **Coût**                  | Optimisé                                  | Plus élevé, en raison d'une résilience accrue      | Dépend de la zone et des besoins en matière de latence / performances          |

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et une analyse personnalisée de votre projet.

Pour des détails supplémentaires et de l’assistance sur les modes de déploiement Object Storage, consultez [ce guide](/pages/storage_and_backup/object_storage/cold_archive_getting_started).

Échangez avec notre [communauté d'utilisateurs](/links/community) et notre communauté sur [Discord](https://discord.gg/ovhcloud).
