---
title: "Backup Agent - Guide de diagnostic et dépannage"
excerpt: "Découvrez comment résoudre les problèmes potentiels liés à Backup Agent"
updated: 2026-02-09
---

<style>
/* ---FAQ only--- */
details {
    margin: 0.1rem 1;
    border: 1px solid transparent;
    border-radius: 4px;
    background: #ffffffff;
}
details > summary {
    padding: 0.1rem 1rem;
    font-weight: 500;
    color: #268fd4ff;
    cursor: pointer;
    list-style: none;
}
details > summary::before {
    content: '\25B6';
    display: inline-block;
    margin-right: 0.5ch;
    transition: transform 0.2s;
}
details[open] > summary::before {
    content: '\25BC';
}
details:hover {
    border: 1px solid #147DE8;
    border-radius: 4px;
    transition: border-color 0.5s ease;
}
details[open] > summary {
    background: #ffffffff;
}
details > :not(summary) {
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    list-style-position: inside;
}
.smallish-gap {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
</style>


## Objectif

Retrouvez sur cette page une liste de potentielles problématiques que vous pouvez rencontrer sur le produit Backup Agent et comment les résoudre.

## Prérequis

- Un serveur Bare Metal sur lequel Backup Agent est installé. Consultez notre guide « [Comment configurer votre première sauvegarde](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration) » pour plus d'informations.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Liste des possibles problématiques

/// details | Mon Backup Agent n'arrive pas à se connecter à votre serveur.

Vérifiez que votre pare-feu autorise la communication avec notre serveur `vspc-cgw1.prod01.eu-west-rbx.backup.ovhcloud.com` (137.74.125.230) en Europe avec le port TCP et UDP 6180.

Assurez-vous qu'aucun autre service n'utilise de ports qui pourraient entrer en conflit avec votre serveur.

Vous pouvez trouver les logs de votre Backup Agent dans le dossier: `C:\ProgramData\Veeam\` ou `/var/logs`.

///

/// details | Votre serveur n'arrive pas à installer l'agent de sauvegarde sur mon serveur.

Le Backup Agent supporte les distributions Windows et les kernels natifs Linux. Si vous avez apporté des modifications à votre kernel, vous devez vous assurer d'avoir les bons packages pour permettre l'installation de l'agent. Vous trouverez la liste des paramètres nécessaires ici : <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>.

///

/// details | Mon Backup Agent n'arrive pas à sauvegarder, j'obtiens l'erreur : "Failed to perform backup. Neither blksnap nor veeamsnap module was found."

Le Backup Agent supporte les distributions Windows et les kernels natifs Linux. Si vous avez apporté des modifications à votre kernel, vous devez vous assurer d'avoir les bons packages pour permettre l'installation de l'agent. Vous trouverez la liste des paramètres nécessaires ici : <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>.

Il vous faut les headers kernel Linux dans un premier temps et vous pouvez ensuite tenter d'installer ou reconfigurer votre package veeamsnap ou veeamblksnap ou blksnap, en fonction de votre système d'exploitation.

///

/// details | Mon agent n'arrive pas à sauvegarder, j'obtiens l'erreur : `POSIX: Failed to create or open file [/.veeamsnapstorage/veeamsnapstore`

Pour sauvegarder, Veeam effectue des snapshots en plus de conserver les données qui seront écrites dans la sauvegarde, ce snapshot s'appelle le "veeamsnapstorage".

Afin de régler ce défaut, augmentez la taille du snapshot via le fichier `/etc/veeam/veeam.ini` :

```bash
[blksnap]
 
# The minimum allowable size of the difference storage in sectors
diffStorageMinimum = 2097152
```

Remplacez la valeur par le nombre secteurs souhaité en convertissant d’abord la taille voulue de gigaoctets en octets, puis en divisant ce nombre d'octets par 512.<br>
Par exemple, pour une taille de 3 Go (3 221 225 472 octets), la valeur à indiquer est 6 291 456 (3 221 225 472 / 512).

Enfin, redémarrez le service veeamservice.

///

/// details | Je n'arrive pas à lancer une sauvegarde manuelle.

[Contactez le support OVHcloud](/links/support-contact) qui pourra investiguer. Veillez à nous fournir des logs et des captures d'écrans.

///

/// details | Mon backup est en erreur, comment voir le problème ?

Si votre backup est en erreur, vous pouvez diagnostiquer le problème directement depuis l'agent. Cliquez sur l'onglet correspondant à votre système d'exploitation :

> [!tabs]
> Windows
>>
>> Pour voir les détails d'une erreur de backup sur Windows :
>>
>> 1. Ouvrez l'application "Veeam Agent" sur votre serveur Bare Metal.
>> 2. Dans l'interface principale, vous verrez l'état de vos backups.
>> 3. Cliquez sur le backup en erreur pour voir les détails de l'erreur.
>> 4. Consultez la section **History** ou **Last Session** pour voir les messages d'erreur détaillés.
>>
>> L'interface vous affichera des informations précises sur la cause de l'erreur, ce qui vous permettra d'identifier rapidement le problème.
>
> Linux
>>
>> Pour voir les détails d'une erreur de backup sur Linux, vous pouvez utiliser l'interface utilisateur :
>>
>> 1\. Connectez-vous à votre serveur Bare Metal en SSH.
>> 2\. Lancez l'interface Veeam en tapant la commande suivante :
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3\. Dans l'interface, naviguez vers la section des backups pour voir l'état de vos jobs.
>> 4\. Sélectionnez le backup en erreur pour consulter les détails de l'erreur.
>>
>> Vous pouvez également consulter les logs directement via la ligne de commande :
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> Cette commande vous affichera la liste des sessions de backup avec leur statut et les détails des erreurs éventuelles.

///

/// details | Mon utilisation du stockage ne s'est pas actualisée suite à la suppression d'un agent.

Nous gardons vos données durant 14 jours à la suite d'une suppression d'un agent, l'utilisation du stockage se mettra à jour suite aux 14 jours et la suppression des données.

///

/// details | Je souhaite modifier le mot de passe d’accès à la Veeam Service Provider Console (VSPC).

Le changement de mot de passe s’effectue via le lien « Mot de passe oublié ? » disponible sur la console VSPC.

![Reset password 1](images/reset_password_1.png){.thumbnail}

![Reset password 2](images/reset_password_2.png){.thumbnail}

///

/// details | J'ai réinstallé mon serveur, comment réinstaller Backup Agent ?

Vous devez télécharger l'agent depuis la section [Backup Agent](/links/control-panel/baremetal-backup-agent) de votre espace client OVHcloud et l'installer sur votre nouveau système d'exploitation.

///

## Trouver et exporter les logs

Pour résoudre les problèmes avec Backup Agent, il est souvent nécessaire de consulter et d'exporter les logs du produit. Cliquez sur l'onglet correspondant à votre système d'exploitation :

> [!tabs]
> Windows
>>
>> **Localiser les logs**
>>
>> Les logs de Veeam Agent pour Windows sont stockés dans le répertoire suivant :
>>
>> ```
>> C:\ProgramData\Veeam\Endpoint\Logs
>> ```
>>
>> **Exporter les logs**
>>
>> Pour exporter les logs sur Windows, vous pouvez utiliser l'interface graphique de Veeam Agent :
>>
>> 1. Ouvrez l'application "Veeam Agent" sur votre serveur.
>> 2. Allez dans le menu `Help`{.action} > `Export Logs`{.action}.
>> 3. Sélectionnez le répertoire de destination pour l'archive des logs.
>> 4. Cliquez sur `Export`{.action} pour générer l'archive.
>>
>> L'archive sera créée au format `.zip` et contiendra tous les logs et fichiers de configuration nécessaires pour le diagnostic.
>>
>> Pour plus d'informations, consultez l'article [Veeam KB2404](https://www.veeam.com/kb2404).
>
> Linux
>>
>> **Localiser les logs**
>>
>> Les logs de Veeam Agent pour Linux sont stockés dans le répertoire suivant :
>>
>> ```bash
>> /var/log/veeam/
>> ```
>>
>> Vous pouvez également consulter les logs du service Veeam :
>>
>> ```bash
>> /var/log/veeam/veeamservice.log
>> ```
>>
>> **Exporter les logs**
>>
>> Pour exporter les logs sur Linux, vous avez deux options :
>>
>> 1\. Via la ligne de commande
>>
>> Utilisez la commande suivante pour exporter les logs. L'archive sera sauvegardée dans le répertoire de travail actuel :
>>
>> ```bash
>> sudo veeamconfig grabLogs
>> ```
>>
>>
>> 2\. Via le panneau de contrôle
>>
>> Si vous avez accès à une interface graphique, vous pouvez exporter les logs via le panneau de contrôle de Veeam Agent en spécifiant le répertoire de destination.
>>
>> L'archive sera créée au format `.tar.gz` et contiendra tous les logs et fichiers de configuration nécessaires pour le diagnostic.
>>
>> Pour plus d'informations, consultez la [documentation Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/logs_export.html?ver=13).

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).