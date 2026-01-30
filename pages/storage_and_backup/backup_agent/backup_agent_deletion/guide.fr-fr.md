---
title: "Backup Agent - Procédure de suppression"
excerpt: "Découvrez comment supprimer un agent, un vault ou un tenant Backup Agent"
updated: 2026-01-30
---

## Objectif

Ce guide vous explique comment supprimer différents éléments de votre service Backup Agent : les agents, les vaults et les tenants.

## Prérequis

- Être connecté à l'[espace client OVHcloud](/links/manager).
- Avoir un service Backup Agent actif.

## En pratique

### Supprimer un agent

Pour supprimer un agent, connectez-vous à votre [espace client OVHcloud](/links/manager) et rendez-vous dans la section `Backup Agent`{.action}.

Allez dans la section `Agents`{.action} et cliquez sur le bouton de suppression pour l'agent que vous souhaitez supprimer.

![Backup Agent Delete Agent](images/01-backup-agent-delete-agent.png){.thumbnail}

Une fenêtre de confirmation s'affichera. Confirmez la suppression de l'agent.

> [!warning]
>
> Une fois votre agent suspendu, vous ne pouvez plus créer de nouvel agent sur le même serveur, vous devez attendre que le premier agent soit supprimé.

**Comportement selon l'utilisation de l'agent :**

- **Si l'agent n'a pas été utilisé pour transférer des données** : Il peut être supprimé immédiatement. Il sera désactivé dans un premier temps, puis supprimé.

- **Si des données ont été transférées** : Nous appliquons une suspension de l'agent en statut "Désactivé" durant 14 jours, le temps que les données immutables puissent être supprimées.

### Supprimer un vault

Pour supprimer un vault, connectez-vous à votre [espace client OVHcloud](/links/manager) et rendez-vous dans la section `Backup Agent`{.action}.

Allez dans la section `Vaults`{.action} et cliquez sur le bouton de suppression pour le vault que vous souhaitez supprimer.

![Backup Agent Delete Vault](images/01-backup-agent-delete-vault.png){.thumbnail}

> [!warning]
>
> Un vault ne peut pas être supprimé s'il contient des données. Si vous souhaitez supprimer un vault, vous devez [contacter le support](/links/support), qui effectuera des vérifications avec vous avant de lancer la suppression.

### Supprimer un tenant

Pour supprimer un tenant, connectez-vous à votre [espace client OVHcloud](/links/manager) et rendez-vous dans la section `Backup Agent`{.action}.

Sélectionnez votre tenant et cliquez sur le bouton de suppression.

![Backup Agent Delete Tenant](images/01-backup-agent-delete-tenant.png){.thumbnail}

> [!warning]
>
> Un tenant ne peut pas être supprimé de manière autonome actuellement. Si vous souhaitez supprimer un tenant, vous devez [contacter le support](/links/support). Nous prendrons votre demande en compte.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).

