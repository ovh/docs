---
title: Politique générale de réversibilité
updated: 2021-05-05
---

**Dernière mise à jour le 05/05/2021**

## Objectif

La réversibilité est l'un des engagements Cloud SMART (Simple, Multi-local, Accessible, Reversible, Transparent) d'OVHcloud. Nous favorisons un écosystème ouvert et interopérable pour garantir la liberté de choix de nos clients. À ce titre, nous affirmons notre conformité au code de conduite IaaS [SWIPO (SWItching et POrting)](https://swipo.eu/download-section/copyrighted-downloads/){.external} pour les fournisseurs Cloud, conçu avec la Commission européenne.

Nos principes de réversibilité sont les suivants: un environnement ouvert et standard dans lequel nos clients ont un contrôle très étendu sur leurs systèmes et leurs données ; une documentation client détaillée pour faciliter au mieux la migration entrante et sortante.

## Modèle de réversibilité général pour OVHcloud

### Contrôle des infrastructures par nos clients

Notre modèle en tant que fournisseur d'*Infrastructure as a Service* est de donner aux clients des droits d'administration étendus sur leurs infrastructures. En particulier, un client doit avoir la liberté de procéder à une migration en autonomie, par exemple d'importer des éléments, ou d'exporter des données vers les infrastructures d'autres fournisseurs.

En conséquence, nous considérons que notre responsabilité est d'offrir un environnement technique stable et standardisé, et que la mise en œuvre effective d'une réversibilité est en grande partie du domaine de responsabilité client. Les actions en responsabilité client incluent la planification, la prévision des volumes, l'export et l'import effectif de données, la sécurisation des transferts de données...

En outre, nous ne faisons pas intervenir de tiers sur la fourniture de nos services ; cette fourniture et les responsabilités techniques qui en découlent (possibilité d'accéder ou d'intervenir sur les infrastructures clients, maintien en condition opérationnelle ...) restent la responsabilité d'OVHcloud.

### Formats et outils standards

L'utilisation généralisée d'outils et de formats standards est à la fois un choix historique d'OVHcloud et un point clef pour la réversibilité. Nos infrastructures sont alignées sur des briques standards du marché, soit ouvertes, soit crées et maintenues par un éditeur reconnu. A ce titre, il doit toujours être possible de migrer le cœur de fonctionnalités d'une architecture.

Cependant, nous ne garantissons pas la possibilité de migrer l'intégralité des fonctionnalités des produits OVHcloud. En effet, certaines fonctionnalités additionnelles sont construites en se basant sur les caractéristiques spécifiques de l'environnement OVHcloud et ne peuvent être migrées telles quelles ; il sera nécessaire de reconstruire des équivalents le cas échéant. Reproduire certaines des fonctionnalités développées par OVHcloud peut être difficile et nécessiter une équipe projet dédiée.

Nous distinguons donc :

- Le **cœur de fonctionnalité d'un produit** (par exemple, héberger un site web, faire fonctionner des machines virtuelles et des espaces de stockage) dont nous garantissons la possibilité à migrer
- L'**implémentation OVHcloud** (par exemple l'API OVHcloud, la configuration des équipements réseaux, ...), dont la migration nécessitera des adaptations à un nouvel environnement.
- Les **fonctionnalités spécifiques** (par exemple l'anti-DDoS, la gateway IPMI, l'interface d'administration client/Manager...), dont la migration telle quelle est impossible à garantir.

### Documentation des procédures de migration

La documentation orientée réversibilité doit répondre à deux objectifs : en premier lieu, la documentation doit éliminer d'éventuels obstacles bloquants à une migration : par exemple, expliciter des configurations particulières ou des prérequis implicites. En second lieu, la documentation permet d'abaisser les compétences nécessaires à la mise en œuvre d'une migration, de la rendre accessible à plus de clients et de diminuer l'investissement humain nécessaire à son bon déroulement. En d'autres termes, le rôle de la documentation est de s'assurer qu'une migration possible techniquement est également possible à mettre en pratique dans un projet concret.

La documentation doit, de la même manière que les autres fonctions de réversibilité, considérer l'ensemble des scénarios de migration :

- D'OVHcloud vers un autre fournisseur de cloud.
- D'OVHcloud vers les infrastructures propres au client.
- D'un autre fournisseur de cloud vers OVHcloud.
- Des infrastructures propres au client vers OVHcloud.

Notre rôle est également de documenter :

- La distinction entre les fonctionnalités qui appartiennent au cœur, à l'implémentation ou au spécifique OVHcloud.
- D'éventuelles particularités d'implémentation, dépendances à un environnement ou une technologie mise en œuvre chez OVHcloud.
- 