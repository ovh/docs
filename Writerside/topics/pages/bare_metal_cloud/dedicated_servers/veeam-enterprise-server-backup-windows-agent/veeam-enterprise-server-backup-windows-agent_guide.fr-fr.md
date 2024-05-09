---
title: "Sauvegarder un serveur Bare Metal Windows via Veeam Agent pour Windows"
excerpt: "Découvrez comment configurer Veeam Agent pour Microsoft Windows afin de sauvegarder votre serveur dédié Windows"
updated: 2024-04-05
---

## Objectif

Découvrez comment configurer Veeam Agent pour Microsoft Windows pour sauvegarder votre serveur Bare Metal Windows.

> [!primary]
> Pour sauvegarder un serveur Bare Metal Linux en utilisant Veeam Backup and Replication (Enterprise), consultez [ce guide](veeam-enterprise-server-backup-linux1.).

## Prérequis

- Un [serveur Bare Metal OVHcloud sous Windows](https://www.ovhcloud.com/fr/bare-metal/)
- Avoir installé [Veeam Backup and Replication 12.0](https://www.veeam.com/download-version.html?ad=downloads&tab=previous)
- Le [logiciel d'installation Veeam Agent for Microsoft Windows 6.0.2](https://login.veeam.com/realms/veeamsso/protocol/openid-connect/auth?client_id=veeam-com&response_type=code&redirect_uri=https%3A%2F%2Fwww.veeam.com%2Foauth&scope=profile&state=e9a55dcbf050f86c5eb69ea264b8fb86) (un compte Veeam est requis)

> [!warning]
> Pour suivre les étapes de ce guide, vous devez avoir préalablement suivi les étapes détaillées de notre premier guide « [Préparer une sauvegarde de serveur Bare Metal avec Veeam Enterprise](veeam-enterprise-server-backup-preparation1.) ».

## En pratique

### Télécharger et installer Veeam Agent

Téléchargez [Veeam Agent for Microsoft Windows 6.0.2](https://login.veeam.com/realms/veeamsso/protocol/openid-connect/auth?client_id=veeam-com&response_type=code&redirect_uri=https%3A%2F%2Fwww.veeam.com%2Foauth&scope=profile&state=e9a55dcbf050f86c5eb69ea264b8fb86) sur le serveur que vous souhaitez sauvegarder.

Installez Veeam Agent et sélectionnez `No`{.action} lorsque vous êtes invité à installer un fichier de licence.

![License](01a-licence.PNG){.thumbnail}

Cliquez sur le bouton de menu et sélectionnez `+ Add New Job...`{.action}.

![Ajouter une nouvelle tâche](01b-new-job.PNG){.thumbnail}

### Configuration de la sauvegarde

#### Nom

Vous pouvez modifier le nom et/ou la description par défaut. Cliquez ensuite sur `Next`{.action}.

![Nom](02-name.PNG){.thumbnail}

#### Mode de sauvegarde

Choisissez les données à sauvegarder et cliquez sur `Next`{.action}.

![Mode de sauvegarde](02b-backup-mode.PNG){.thumbnail}

#### Destination

Choisissez `Veeam backup repository`{.action}. et cliquez sur `Next`{.action}.

![Destination](03-destination.PNG){.thumbnail}

#### Serveur de sauvegarde

Entrez le nom ou l'adresse IP du serveur Veeam Backup et renseignez vos identifiants Veeam (ils doivent être ceux d'un [compte de service Veeam Enterprise](veeam_backup_replication#creer-un-compte-de-service-veeam-enterprise.) valide).

Cliquez sur `Next`{.action}.

Le chargement de votre licence va prendre quelques instants.

![Serveur de sauvegarde - identifiants](04-backup-server-credentials.PNG){.thumbnail}

#### Répertoire de sauvegarde

Sélectionnez votre répertoire de sauvegarde (*backup repository*) et, si vous le souhaitez, modifiez la politique de rétention.

Cliquez sur `Next`{.action}.

![Répertoire de sauvegarde](05-backup-repository.PNG){.thumbnail}

> [!warning]
> Si l'option « Standard S3 » n'apparaît pas en tant que réperoire de sauvegarde, suivez les étapes ci-dessous pour vérifier les droits d'accès.
> Depuis l'interface de Veeam Enterprise, sélectionnez `Backup Repositories`{.action}, faites un clic droit sur votre répertoire et sélectionnez `Access permissions...`{.action}.
>
> ![Backup repository - access permissions](05-backup-repository-access-permissions.PNG){.thumbnail}
>
> Dans l'onglet `AStandalone applications`{.action}, assurez-vous que l'une des options **Allow** est sélectionnée pour l'accès au répertoire. Si vous devez ajouter votre compte ou votre groupe, vous pouvez utiliser le bouton `Add...`{.action} . Si vous avez apporté des modifications, sélectionnez `OK`{.action} pour les appliquer.
>
> ![Backup repository - standalone applications](05-backup-repository-standalone-applications.PNG){.thumbnail}
>

#### Sauvegarde en cache (facultatif)

Si vous le souhaitez, vous pouvez activer le cache de sauvegarde, ce qui peut être utile le répertoire distant de sauvegarde est temporairement indisponible.

Cliquez sur `Next`{.action}.

![Backup cache](06-backup-cache.PNG){.thumbnail}

#### Options avancées (facultatif)

Si vous le souhaitez, vous pouvez activer des options d'accès avancé (*Guest processing*).

Cliquez sur `Next`{.action}.

![Options avancées](07-guest-processing.PNG){.thumbnail}

#### Planification

Choisissez vos préférences de planification de sauvegarde et cliquez sur `Apply`{.action}.

![Planification](08-schedule.PNG){.thumbnail}

#### Résumé

Vérifiez vos paramètres. Si vous souhaitez que la tâche de sauvegarde s'exécute dès que vous avez terminé, cochez la case en bas de la fenêtre.

Cliquez sur `Terminer`{.action}.

![Résumé](09-summary.PNG){.thumbnail}

### Lancer la sauvegarde

Cliquez sur le bouton ☰ du menu, sélectionnez la tâche que vous venez de créer puis cliquez sur `Backup Now`{.action}.

![Lancer la sauvegarde](10-start-backup.png){.thumbnail}

Vous pouvez suivre l'avancement de votre sauvegarde depuis l'application Veeam Agent :

![Progression de la sauvegarde](10a-backup-progress.PNG){.thumbnail}

Sur le serveur Veeam Backup and Recovery, la tâche de sauvegarde apparaîtra :

![Backup jobs](10b-backup-job.PNG){.thumbnail}

## Aller plus loin

[Restaurer un serveur Bare Metal avec Veeam Enterprise](veeam-enterprise-server-restore1.)

[Page d'assistance de Veeam](https://www.veeam.com/knowledge-base.html)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
