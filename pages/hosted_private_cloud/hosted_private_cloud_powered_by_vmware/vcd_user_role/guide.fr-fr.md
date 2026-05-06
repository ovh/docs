---
title: "Public VCF as-a-Service - Rôles utilisateurs"
excerpt: "Explorez les différents rôles utilisateurs disponibles et apprenez à les utiliser au sein de votre organisation Public VCF as-a-Service."
updated: 2026-04-23
---

## Objectif

**Ce guide vous explique les différents rôles utilisateurs disponibles dans votre organisation Public VCF as-a-Service.**

## Prérequis

- Posséder une offre [Public VCF as-a-Service](/links/hosted-private-cloud/vmware-vcd).
- Être administrateur technique de votre solution [VMware vSphere on OVHcloud](/links/hosted-private-cloud/vmware).

<!-- CP-NAV-START:privatecloud-vmware-vcf -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [VMware Cloud Foundation](/links/control-panel/privatecloud-vmware-vcf)
- **Pour accéder à vos services :** `Hosted Private Cloud`{.action} > `Public VCF as-a-Service`{.action} > Sélectionnez votre service VCF

---
<!-- CP-NAV-END:privatecloud-vmware-vcf -->

## En pratique

Pour un contrôle plus granulaire et une flexibilité accrue dans la gestion de vos ressources, différents rôles sont disponibles :

### Organization Administrator

- Gestion des utilisateurs et des groupes : Peut ajouter, modifier et supprimer des utilisateurs et des groupes au sein de l'organisation.
- Gestion des ressources : Peut gérer les ressources allouées à l'organisation, telles que les vApps, les VMs, les réseaux, et les catalogues.
- Attribution des rôles : Peut attribuer des rôles et des permissions aux utilisateurs et aux groupes.
- Configuration des paramètres : Peut configurer les paramètres de l'organisation, tels que les politiques de sauvegarde, les quotas, et les paramètres de sécurité.
- Accès complet : À un accès complet à toutes les fonctionnalités et ressources de l'organisation, sauf celles réservées aux administrateurs système (System Administrators).

### Catalog Author

- Publier des catalogues : Peut créer et publier des catalogues.
- Gérer les médias : Peut ajouter et gérer des médias ISO.
- Créer des vApps : Peut créer des vApps à partir de modèles.
- Pas de gestion des VMs : Ne peut pas gérer directement les VMs existantes.
- Utilité : Idéal pour les utilisateurs qui doivent gérer les catalogues et les modèles sans accéder aux VMs.

### vApp Author

- Créer et gérer des vApps : Peut créer, modifier et supprimer des vApps.
- Ajouter des VMs : Peut ajouter des VMs aux vApps.
- Configurer les VMs : Peut configurer les paramètres des VMs (CPU, mémoire, etc.).
- Pas de gestion des catalogues : Ne peut pas gérer les catalogues ou les médias.
- Utilité : Parfait pour les utilisateurs qui doivent créer et gérer des vApps et des VMs sans accéder aux catalogues.

### vApp User

- Utiliser les vApps et les VMs : Peut démarrer, arrêter, suspendre et reprendre les VMs.
- Accéder aux consoles : Peut accéder aux consoles des VMs.
- Pas de gestion des vApps : Ne peut pas créer ou modifier des vApps.
- Pas de gestion des VMs : Ne peut pas configurer les paramètres des VMs.
- Utilité : Adapté pour les utilisateurs qui doivent utiliser les vApps et les VMs sans les modifier.

### Console Access Only

- Accéder aux consoles : Peut uniquement accéder aux consoles des VMs et vApps autorisées.
- Pas de gestion des vApps ou des VMs : Ne peut pas démarrer, arrêter ou configurer les VMs.
- Pas de gestion des catalogues : Ne peut pas gérer les catalogues ou les médias.
- Utilité : Utile pour les utilisateurs qui doivent uniquement accéder aux consoles des VMs pour des tâches spécifiques.

### Procédure pour attribuer un rôle

1. Connectez-vous au portail VCF as-a-Service en tant qu'Organization Admin.
2. Accédez à la section « Administration ».
3. Sélectionnez « Utilisateurs » et choisissez l'utilisateur à modifier.
4. Attribuez le rôle souhaité à partir de la liste des rôles disponibles.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou demandez une analyse personnalisée de votre projet à nos experts de l’équipe [Professional Services](/links/professional-services).

Posez vos questions et interagissez avec l’équipe Hosted Private Cloud sur le [Discord OVHcloud](https://discord.gg/ovhcloud).

Échangez avec notre [communauté d'utilisateurs](/links/community).
