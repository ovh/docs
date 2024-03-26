---
title: "Sauvegarder un serveur Bare Metal via Veeam Agent pour Windows"
excerpt: "Découvrez comment configurer Veeam Agent pour Microsoft Windows afin de sauvegarder votre serveur dédié"
updated: 2024-03-07
---

## Objectif

Découvrez commentconfigurer Veeam Agent pour Microsoft Windows pour sauvegarder votre serveur Bare Metal.

## Prérequis

- Un [serveur Bare Metal OVHcloud](https://www.ovhcloud.com/fr/bare-metal/)
- Avoir installé [Veeam Backup and Replication 12.0](https://www.veeam.com/download-version.html?ad=downloads&tab=previous)
- Le [logiciel d'installation](https://login.veeam.com/realms/veeamsso/protocol/openid-connect/auth?client_id=veeam-com&response_type=code&redirect_uri=https%3A%2F%2Fwww.veeam.com%2Foauth&scope=profile&state=e9a55dcbf050f86c5eb69ea264b8fb86) Veeam Agent for Microsoft Windows 6.0.2 (un compte Veeam est requis)

> [!warning]
> Pour suivre les étapes de ce guide, vous devez avoir préalablement suivi les étapes détaillées de notre premier guide « [Préparer une sauvegarde de serveur Bare Metal avec Veeam Enterprise](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-backup-preparation) ».

## En pratique

### Télécharger et installer Veeam Agent

Téléchargez [Veeam Agent for Microsoft Windows 6.0.2](https://login.veeam.com/realms/veeamsso/protocol/openid-connect/auth?client_id=veeam-com&response_type=code&redirect_uri=https%3A%2F%2Fwww.veeam.com%2Foauth&scope=profile&state=e9a55dcbf050f86c5eb69ea264b8fb86) sur le serveur que vous souhaitez sauvegarder.

Installez Veeam Agent et sélectionnez `No`{.action} lorsque vous êtes invité à installer un fichier de licence.

![License](images/01a-license.PNG){.thumbnail}

Cliquez sur le bouton de menu et sélectionnez `+ Add New Job...`{.action}.

![Ajouter une nouvelle tâche](images/01b-new-job.PNG){.thumbnail}

### Configuration de la sauvegarde

#### Nom

Vous pouvez modifier le nom et/ou la description par défaut. Cliquez ensuite sur `Next`{.action}.

![Nom](images/02-name.PNG){.thumbnail}

#### Mode de sauvegarde

Choisissez les données à sauvegarder et cliquez sur `Next`{.action}.

![Mode de sauvegarde](images/02b-mode-sauvegarde.PNG){.thumbnail}

#### Destination

Choisissez `Veeam backup repository`{.action}. et cliquez sur `Next`{.action}.

![Destination](images/03-destination.PNG){.thumbnail}

#### Serveur de sauvegarde

Entrez le nom ou l'adresse IP du serveur Veeam Backup et renseignez vos identifiants Veeam (ils doivent être ceux d'un [compte de service Veeam Enterprise](/pages/storage_and_backup/backup_and_aster_recovery_solutions/veeam/veeam_backup_replication#creating-a-veeam-enterprise-service-account) valide).

Cliquez sur `Next`{.action}.

Le chargement de votre licence va prendre quelques instants.

![Serveur de sauvegarde - identifiants](images/04-backup-server-credentials.PNG){.thumbnail}

#### Répertoire de sauvegarde

Sélectionnez votre répertoire de sauvegarde (*backup repository*) et, si vous le souhaitez, modifiez la politique de rétention.

Cliquez sur `Next`{.action}.

![Répertoire de sauvegarde](images/05-backup-repository.PNG){.thumbnail}

#### Sauvegarde en cache (facultatif)

Si vous le souhaitez, vous pouvez activer le cache de sauvegarde, ce qui peut être utile le répertoire distant de sauvegarde est temporairement indisponible.

Cliquez sur `Next`{.action}.

![Backup cache](images/06-backup-cache.PNG){.thumbnail}

#### Options avancées (facultatif)

Si vous le souhaitez, vous pouvez activer des options d'accès avancé (*Guest processing*).

Cliquez sur `Next`{.action}.

![Options avancées](images/07-traitement-invité.PNG){.thumbnail}

#### Planification

Choisissez vos préférences de planification de sauvegarde et cliquez sur `Apply`{.action}.

![Planification](images/08-schedule.PNG){.thumbnail}

#### Résumé

Vérifiez vos paramètres. Si vous souhaitez que la tâche de sauvegarde s'exécute dès que vous avez terminé, cochez la case en bas de la fenêtre.

Cliquez sur `Terminer`{.action}.

![Résumé](images/09-summary.PNG){.thumbnail}

### Lancer la sauvegarde

Cliquez sur le bouton ☰ du menu, sélectionnez la tâche que vous venez de créer puis cliquez sur `Backup Now`{.action}.

![Lancer la sauvegarde](images/10-start-backup.PNG){.thumbnail}

Vous pouvez suivre l'avancement de votre sauvegarde depuis l'application Veeam Agent :

![Progression de la sauvegarde](images/10a-backup-progress.PNG){.thumbnail}

Sur le serveur Veeam Backup and Recovery, la tâche de sauvegarde apparaîtra :

![Backup jobs](images/10b-backup-job.PNG){.thumbnail}

## Aller plus loin

[Restaurer un serveur Bare Metal avec Veeam Enterprise](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-restore).

[Page d'assistance de Veeam](https://www.veeam.com/knowledge-base.html)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
