---
title: "Backup Agent - Gérer vos sauvegardes et vos restaurations"
excerpt: "Découvrez comment sauvegarder et restaurer vos données sur vos serveurs Bare Metal avec Backup Agent"
updated: 2026-02-03
---

## Objectif

Découvrez comment sauvegarder et restaurer vos données sur vos serveurs Bare Metal avec Backup Agent.

> [!primary]
> 
> Retrouvez plus d'informations sur le produit Backup Agent sur [cette page](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Prérequis

- Un serveur Bare Metal sur lequel Backup Agent est installé. Consultez notre guide « [Comment configurer votre première sauvegarde](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration) » pour plus d’informations.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Accès à l’espace client OVHcloud

- **Lien direct :** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## En pratique

### Sauvegarde

Vous avez deux possibilités de faire des sauvegardes : automatique et manuelle.

#### Sauvegarde automatique

La sauvegarde automatique est intégrée dans la politique de sauvegarde que nous appliquons sur votre Backup Agent.

Il s'agit d'une sauvegarde complète de votre serveur, qui sera envoyée vers votre point de stockage distant.

> [!warning]
> 
> Celle-ci va se déclencher entre 22 heures et 6 heures (sur le fuseau horaire CET pour l'Europe et sur le fuseau horaire EST pour le Canada et l'Asie).

> [!primary]
> 
> Vous n'avez pas de possibilité de modifier ou désactiver cette sauvegarde automatique.
> À l'heure actuelle, vous ne pouvez pas modifier la politique qui sauvegarde tout votre serveur, nous travaillons à améliorer cette configuration à l'avenir.

Vous pourrez voir le succès de cette sauvegarde via :

- Le rapport quotidien des sauvegardes.
- Le tableau de bord "Backup Jobs" de la console Veeam Service Provider.

![Backup Agent VSPC Backup Jobs](images/01-backup-agent-vspc-backup-jobs.png){.thumbnail}

![Backup Agent VSPC Job](images/01-backup-agent-vspc-job.png){.thumbnail}

#### Sauvegarde manuelle

En cas de besoin, vous pouvez déclencher une sauvegarde manuelle.

Celle-ci fera également une sauvegarde complète de votre serveur, également envoyée vers votre point de stockage distant.

Cliquez sur l'onglet correspondant à votre système d'exploitation :

> [!tabs]
> Windows
>>
>> Ouvrez l'application "Veeam Agent" sur le serveur Bare Metal :
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Cliquez sur le bouton `Backup Now`{.action} pour lancer une sauvegarde :
>>
>> ![Backup Agent BKP Agent](images/01-backup-agent-bkpagent.png){.thumbnail}
>
> Linux
>>
>> Pour démarrer une sauvegarde manuelle sur Linux, vous pouvez utiliser la ligne de commande.
>>
>> Connectez-vous à votre serveur Bare Metal en SSH et exécutez la commande suivante pour lister vos jobs de sauvegarde :
>>
>> ```bash
>> sudo veeamconfig job list
>> ```
>>
>> Pour démarrer une sauvegarde manuelle, utilisez la commande suivante en remplaçant `<nom_du_job>` par le nom de votre job de sauvegarde :
>>
>> ```bash
>> sudo veeamconfig job start <nom_du_job>
>> ```
>>
>> Si vous souhaitez démarrer tous les jobs de sauvegarde, utilisez :
>>
>> ```bash
>> sudo veeamconfig job start --all
>> ```
>>
>> Vous pouvez suivre la progression de la sauvegarde en consultant les sessions actives :
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> Vous pouvez également avoir une interface pour interagir avec le produit en tapant cette commande :
>>
>> ```bash
>> sudo veeam
>> ```

### Restauration

En cas de besoin de restaurer des données, vous avez deux possibilités :

- via l'assistant de restauration de fichiers ;
- via l'ISO Veeam Baremetal Recovery.

#### Assistant de restauration de fichiers

Pour restaurer des fichiers et dossiers, cliquez sur l'onglet correspondant à votre système d'exploitation :

> [!tabs]
> Windows
>>
>> Ouvrez l'application "Veeam Agent" sur votre serveur Baremetal :
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Allez dans le menu et sélectionnez `Restore File`{.action} :
>>
>> ![Backup Agent Restore Menu](images/01-backup-agent-restore-menu.png){.thumbnail}
>>
>> Sélectionnez le point de restauration souhaité dans l'assistant :
>>
>> ![Backup Agent Restore Points](images/01-backup-agent-restore-restore-points.png){.thumbnail}
>>
>> Puis validez :
>>
>> ![Backup Agent Restore Point Summary](images/01-backup-agent-restore-restore-point-summary.png){.thumbnail}
>>
>> Enfin, cherchez votre fichier et sélectionnez une option :
>>
>> ![Backup Agent Restore Wizard](images/01-backup-agent-restore-wizard.png){.thumbnail}
>>
>> - Restore - Overwrite : vous permet de restaurer le fichier tout en écrasant celui actuellement présent sur le serveur.
>> - Restore - Keep : vous permet de restaurer le fichier tout en gardant celui actuellement présent sur le serveur.
>> - Copy To : vous permet de copier le fichier dans un emplacement de votre serveur.
>> - Explore : vous permet d'explorer la sauvegarde.
>> - Properties : vous permet de voir les propriétés du fichier.
>>
>> Lancer une restauration vous permettra d'avoir une dernière fenêtre qui affichera le transfert :
>>
>> ![Backup Agent Restore Transfer](images/01-backup-agent-restore-transfer.png){.thumbnail}
>
> Linux
>>
>> Pour restaurer des fichiers et dossiers sur Linux, vous avez deux options : via l'interface graphique ou via la ligne de commande.
>>
>> #### Via l'interface graphique
>>
>> 1\. Connectez-vous à votre serveur Bare Metal en SSH.
>> 2\. Lancez l'interface Veeam en tapant la commande suivante :
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3\. Dans l'interface, sélectionnez l'option de restauration de fichiers.
>> 4\. Sélectionnez le backup et le point de restauration souhaité.
>> 5\. Naviguez dans la sauvegarde pour trouver les fichiers ou dossiers à restaurer.
>> 6\. Sélectionnez les fichiers et choisissez l'action de restauration :
>>    - Restaurer à l'emplacement d'origine
>>    - Copier vers un nouvel emplacement
>>    - Explorer la sauvegarde
>>
>> #### Via la ligne de commande
>>
>> Pour restaurer des fichiers via la ligne de commande, vous devez d'abord monter la sauvegarde :
>>
>> 1\. Listez vos backups disponibles :
>>
>> ```bash
>> sudo veeamconfig backup list
>> ```
>>
>> 2\. Listez les points de restauration d'un backup :
>>
>> ```bash
>> sudo veeamconfig restore list --backup <nom_du_backup>
>> ```
>>
>> 3\. Montez un point de restauration :
>>
>> ```bash
>> sudo veeamconfig mount --backup <nom_du_backup> --restorepoint <nom_du_point>
>> ```
>>
>> 4\. Une fois monté, vous pouvez accéder aux fichiers via le point de montage (généralement dans `/mnt/veeam/`).
>>
>> 5\. Copiez les fichiers souhaités depuis le point de montage vers leur destination.
>>
>> 6\. Une fois la restauration terminée, démontez la sauvegarde :
>>
>> ```bash
>> sudo veeamconfig unmount --backup <nom_du_backup>
>> ```
>>
>> Pour plus d'informations, consultez la [documentation Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_gui.html?ver=13) et la [documentation sur la restauration en ligne de commande](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_cmd.html?ver=13).

### ISO Veeam Baremetal Recovery

Bare Metal Recovery est une fonctionnalité de Veeam qui consiste à créer à l'avance un ISO personnalisé, qui peut ensuite être utilisé pour démarrer un système et le restaurer à partir d'une sauvegarde stockée sur un autre serveur.

Consultez ce guide pour plus d'informations : [Restaurer un serveur Bare Metal avec Veeam Backup Agent](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_agent_bare_metal_recovery).

Vous devrez adapter le serveur et les identifiants avec ceux que nous vous aurons fournis.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).