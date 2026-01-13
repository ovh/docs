---
title: "Backup Agent - Diagnostic et dépannage"
excerpt: "Découvrez comment résoudre les problèmes potentiels liés à Backup Agent"
updated: 2026-01-09
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

- Un serveur Bare Metal sur lequel Backup Agent est installé. Consultez notre guide [Comment configurer votre première sauvegarde](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration) pour plus d'informations.


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

Remplacez la valeur en bytes par le nombre de GB voulu (GB divisé par 512, pour 3GB il faut mettre 3221225472 / 512 = 6 291 456)

Enfin, redémarrez le service veeamservice.

///

/// details | Je n'arrive pas à lancer une sauvegarde manuelle.

[Contactez le support OVHcloud](/links/support) qui pourra investiguer. Veillez à nous fournir des logs et des captures d'écrans.

///

/// details | Mon utilisation du stockage ne s'est pas actualisée suite à la suppression d'un agent.

Nous gardons vos données durant 14 jours à la suite d'une suppression d'un agent, l'utilisation du stockage se mettra à jour suite aux 14 jours et la suppression des données.

///

/// details | J'ai désinstallé mon Veeam Agent, comment le réinstaller ?

[Contactez le support OVHcloud](/links/support) afin que notr équipe puisse vous aider à réinstaller votre agent.

///

/// details | J'ai réinstallé mon serveur, comment réinstaller Backup Agent ?

Vous devez supprimer votre agent dans la partie Agents de votre vspc-tenant, et ensuite télécharger et installer l'agent sur votre nouveau système d'exploitation.

///

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).