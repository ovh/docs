---
title: Choisir la bonne classe de Block Storage
excerpt: Découvrez comment choisir la bonne classe de Block Storage OVHcloud. Comparez performances, coûts et cas d’usage pour optimiser votre stockage en termes de prix et d’efficacité.
updated: 2025-12-15
---

## Objectif

Ce guide vous aide à comprendre les différentes classes de Block Storage OVHcloud et à choisir celle qui correspond le mieux à vos besoins. Découvrez les niveaux de performance, les considérations tarifaires et les cas d’usage recommandés afin de prendre des décisions de stockage éclairées. 

## Présentation du Block Storage

Le Block Storage est une solution de stockage performante, flexible et fiable, conçue pour les workloads critiques. Vous pouvez attacher des volumes directement à vos instances, augmenter la capacité de 10 Go à 12 To, et choisir la classe appropriée : Regional Classic, Classic ou High Speed, selon vos besoins en termes de performance et de disponibilité.

Cette solution est idéale pour les bases de données, les machines virtuelles et les applications conteneurisées, avec des fonctionnalités telles que les snapshots, les sauvegardes et le chiffrement.

## Classes de Block Storage

Nos classes de Block Storage sont conçues pour répondre aux différents besoins de vos workloads en termes de performance, de disponibilité et de résilience. Choisissez la classe adaptée pour optimiser la vitesse, la redondance et le coût.

### Regional Classic Volume

La classe **Regional Classic Volume** offre une haute disponibilité en répliquant automatiquement les données dans trois zones de disponibilité au sein d'une région (3-AZ). Les volumes sont pris en charge par le stockage NVMe over Fabric pour un accès rapide, cohérent et fiable.

Afin de garantir la continuité du service même en cas de défaillance d'une zone de disponibilité, cette classe prend également en charge le [Multi-Attach](/pages/public_cloud/compute/classic_block_multi_az_limitations). Cela permet à plusieurs instances situées dans différentes zones de disponibilité de se connecter simultanément et d'utiliser le même volume.

Cette classe est adaptée aux workloads nécessitant une haute disponibilité et une forte résilience, comme les bases de données critiques et les applications distribuées.

### Classic Volume

La classe **Classic Volume** est idéale pour les besoins applicatifs quotidiens, tels que les bases de données, les machines virtuelles et les sauvegardes. Les données sont répliquées au sein d’une seule zone de disponibilité (1-AZ) ou d’une Local Zone, avec des performances NVMe garanties.

Cette classe convient aux workloads standards où la faible latence et la fiabilité sont importantes, mais où la réplication multi-zone n’est pas nécessaire.

### High Speed Volume

La classe **High Speed Volume** est proposée en deux générations, offrant des profils de performance différents :

- Gen 1 : Jusqu’à 3 000 IOPS et 128 Mo/s – adaptée aux workloads standard nécessitant une vitesse élevée.
- Gen 2 : 30 IOPS/Go (jusqu'à 20 000 IOPS) et 0,5 Mo/s par Go (jusqu'à 512 Mo/s) – recommandée pour les applications intensives nécessitant un maximum d’I/O et de débit.

Choisissez Gen 1 pour les workloads haute vitesse classiques, et Gen 2 pour les workloads lourds tels que l’analytique, les grandes bases de données ou le calcul haute performance.

### Tableau comparatif

| Classe de stockage | Cas d’usage | Performance | Régions disponibles | SLA de disponibilité | Réplication | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **High Speed Volume** | Workloads haute performance, analytique, grandes bases de données | **Gen 1** : jusqu’à 3 000 IOPS, 128 Mo/s <br><br> **Gen 2** : 30 IOPS/Go (jusqu'à 20 000 IOPS), 0,5 Mo/s par Go (jusqu'à 512 Mo/s) | 3-AZ, 1-AZ, Local Zones | 99,9 % | Zonale | NVMe optimisé, performance évolutive |
| **Regional Classic Volume** | Applications critiques, systèmes distribués | 500 IOPS garantis, 64 Mo/s | 3-AZ | 99,99 % | Multi-zone | NVMe over Fabric, haute disponibilité |
| **Classic Volume** | Workloads quotidiens, machines virtuelles, sauvegardes | 500 IOPS garantis, 64 Mo/s | 1-AZ, Local Zones | 99,9 % | Zonale | NVMe over Fabric, performance standard |

### Détails supplémentaires

#### Durée minimale de stockage

Pour le Block Storage, il n’existe pas de durée minimale de stockage : vous pouvez attacher ou supprimer des volumes à tout moment sans frais supplémentaires. Vous êtes facturé uniquement pour l’utilisation effective du volume pendant la période où il existe.

#### Frais de snapshots et de sauvegardes

Bien que l’utilisation standard des volumes soit facturée par Go/mois, les [snapshots](/pages/public_cloud/compute/creating_a_volume_snapshot) stockés sur **Block Storage** et les [sauvegardes](/pages/public_cloud/compute/volume-backup) stockées sur **Object Storage** peuvent générer des coûts supplémentaires. Les snapshots permettent de capturer l’état d’un volume à un instant donné, et les sauvegardes assurent la protection et la récupération des données.

#### Gestion du cycle de vie et redimensionnement

Les volumes Block Storage sont entièrement flexibles : vous pouvez [augmenter leur taille](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk) à tout moment, étendre les partitions et attacher les volumes à différentes instances. Ces opérations sont gérées au niveau du volume, vous permettant d’optimiser capacité et performance sans interruption.

#### Volumes chiffrés

Chaque type de volume Block Storage est également disponible en version chiffrée (LUKS), selon la région. Ces variantes chiffrées garantissent la confidentialité des données sans impact sur les performances.

> [!primary]
> Veuillez noter que la classe Regional Classic Volume et les volumes dans les Local Zones ne prennent pas en charge le chiffrement LUKS.

Les volumes chiffrés peuvent être créés directement depuis l’espace client OVHcloud ou via les outils CLI/API en précisant le type de volume avec le suffixe `-luks` (par exemple : classic-luks ou highspeed-luks). Cela permet de protéger facilement les données sensibles tout en conservant les mêmes performances et fonctionnalités que les volumes standard.

> [!primary]
> Les volumes chiffrés n’ont aucun impact sur les performances.

## Cas d’usage

Le Block Storage prend en charge une grande variété de workloads grâce à ses performances, sa flexibilité et sa résilience. Les cas d’usage courants incluent :

- **Bases de données** : MySQL, PostgreSQL et autres bases relationnelles bénéficient d’un accès rapide avec faible latence et haut débit.
- **Machines virtuelles et applications conteneurisées** : Stockage persistant pour les VM et conteneurs avec fiabilité élevée et accès rapide.
- **Analytique et workloads IA** : Les volumes High Speed offrent un maximum d’IOPS et de débit pour les applications à forte intensité de données.
- **Sauvegarde et reprise après sinistre** : Créez facilement des snapshots et des sauvegardes pour vos données critiques, pour garantir une récupération rapide et sécurisée.

## Considérations relatives aux zones et aux régions

Les volumes Block Storage peuvent être déployés avec différentes options de disponibilité selon vos besoins :

- **Regional Classic Volume (3-AZ)** : Les données sont répliquées sur trois zones de disponibilité au sein d’une même région, offrant une haute résilience et un SLA de 99,99 %. Idéal pour les applications critiques nécessitant une haute disponibilité. Pour plus d'informations, consultez notre guide « [Utilisation correcte et limitations du stockage Classic Multi-Attach dans les régions 3AZ](/pages/public_cloud/compute/classic_block_multi_az_limitations) ».
- **Classic & High Speed Volume (1-AZ ou Local Zone)** : Les données sont répliquées dans une seule zone. Ces options offrent un accès à faible latence et de hautes performances, et sont adaptées aux workloads ne nécessitant pas de redondance multi-zone.
- **Local Zones** : Pour les applications nécessitant une latence ultra-faible dans une localisation géographique précise, les Local Zones permettent de conserver le stockage proche des ressources de calcul.

> [!success]
> Choisir la bonne option de déploiement garantit des performances optimales, une redondance efficace et une maîtrise des coûts en fonction de votre workload et de vos contraintes géographiques.

## Aller plus loin

[Créer et configurer un disque additionnel sur une instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Modifier un Volume Block Storage](/pages/public_cloud/compute/switch_volume_type)

Si vous avez besoin d’une formation ou d’une assistance technique pour la mise en œuvre de nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet par notre équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).