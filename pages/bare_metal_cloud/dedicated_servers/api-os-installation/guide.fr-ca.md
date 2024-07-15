---
title: "API OVHcloud et installation d'un OS"
excerpt: "Découvrez comment l'API OVHcloud vous permet d'installer ou de réinstaller un OS sur votre serveur"
updated: 2024-07-16
---

## Objectif

Pour de nombreux cas d'usage, il peut s'avérer intéressant d'automatiser l'installation d'un système d'exploitation ou la réinstallation d'un système d'exploitation de vos [serveurs dédiés](https://www.ovhcloud.com/fr-ca/bare-metal/) à l'aide de l'[API OVHcloud](https://api.ovh.com/).

## Prérequis

- Un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/) dans votre compte OVHcloud
- Avoir accès à l'[API OVHcloud](/pages/manage_and_operate/api/first-steps)

> [!warning]
>
> Une nouvelle installation effacera l'intégralité des données présentes sur le serveur.
>

## En pratique

### Compatibilité OS <a name="os-compatibility"></a>

Connectez-vous sur [https://api.ovh.com/](https://api.ovh.com/){.external} puis rendez-vous dans la section `/dedicated/server`{.action}.

Pour lister tous vos [serveurs dédiés](https://www.ovhcloud.com/fr-ca/bare-metal/) :

> [!api]
>
> @api {v1} /dedicated/server GET  /dedicated/server
>

Vous pouvez lister les OS compatibles pour un serveur donné en utilisant l'appel suivant :

> [!api]
>
> @api {v1} /dedicated/server GET  /dedicated/server/{serviceName}/install/compatibleTemplates
>

Regardez la liste retournée sous la clef `ovh`{.action} : il s'agit de la liste des OS du catalogue OVHcloud que vous pouvez installer.

### Informations détaillées sur les OS <a name="os-details"></a>

En allant dans la section `/dedicated/installationTemplate`{.action}, vous pouvez afficher les détails d'un OS en particulier :

> [!api]
>
> @api {v1} /dedicated/installationTemplate GET  /dedicated/installationTemplate/{templateName}
>

Vous y trouverez des informations pertinentes comme par exemple :

|Attribut|Description|
|---|---|
|distribution|Nom de l'OS|
|description|Nom officiel d'affichage de l'OS|
|endOfInstall|Date de fin de disponibilité de l'OS dans le catalogue des OS OVHcloud¹|
|usage,category,family|Usage, catégorie, et famille d'OS|
|project/os|Informations de l'OS sur la gouvernance, la version, les notes de version et l'URL du projet|
|project/usage|Idem que project/os, mais sur la couche logicielle si applicable|
|license/os|Informations de l'OS sur la licence : URL du contrat de licence et type de licence|
|license/usage|Idem que license/os, mais sur la couche logicielle si applicable|
|filesystems|Liste des systèmes de fichiers compatibles|
|hardRaidConfiguration,softRaidOnlyMirroring,lvmReady|Compatibilité ou non avec les raids matériels, logiciels et le LVM²|
|inputs|Liste des questions spécifiques de l'OS (voir explication ci-dessous)|

¹ Les clients n'utilisant pas les images du catalogue OVHcloud (installation via une image personnalisée ([BYOI](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image)/[BYOLinux](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-linux)), installation par le réseau, ou  manuellement avec l'IPMI) ne sont pas concernés par cette limitation.<br />
² Pour plus d'informations, reportez-vous à la page [personnaliser le partitionnement](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh).<br />

> [!primary]
>
> Si vous avez besoin d'obtenir toutes ces informations pour tous les OS disponibles dans le catalogue en un seul appel, nous vous recommandons d'utiliser plutôt l'appel `/dedicated/installationTemplate/templateInfos`{.action} ci-dessous.
>

> [!api]
>
> @api {v1} /dedicated/installationTemplate GET  /dedicated/installationTemplate/templateInfos
>

### Questions spécifiques des OS <a name="os-inputs"></a>

Certains OS peuvent avoir une liste de questions spécifiques. Si c'est le cas, la clef `inputs`{.action} contient une liste de questions.

Exemple de valeurs pour la clef `inputs`{.action} pour Debian 12 (Bookworm) :

```json
{
    "inputs": [
        {
            "name": "sshKey",
            "description": "SSH Public Key",
            "default": "",
            "mandatory": false,
            "type": "sshPubKey",
            "enum": []
        },
        {
            "name": "postInstallationScript",
            "description": "Post-Installation Script",
            "default": "",
            "mandatory": false,
            "type": "text",
            "enum": []
        }
    ]
}
```

Exemple de valeurs pour la clef `inputs`{.action} pour Windows Server 2022 Standard (Core) :

```json
{
    "inputs": [
        {
            "name": "language",
            "description": "Display Language",
            "default": "en-us",
            "mandatory": false,
            "type": "enum",
            "enum": [
                "en-us",
                "fr-fr"
            ]
        },
        {
            "name": "postInstallationScript",
            "description": "Post-Installation Script",
            "default": "",
            "mandatory": false,
            "type": "text",
            "enum": []
        },
        {
            "name": "postInstallationScriptExtension",
            "description": "Post-Installation Script File Extension",
            "default": "ps1",
            "mandatory": true,
            "type": "enum",
            "enum": [
                "ps1",
                "cmd"
            ]
        }
    ]
}
```

Chaque question a les attributs suivants :

|Attribut|Description|
|---|---|
|default|Si cette question n'obtient pas de réponse, la valeur par défaut sera utilisée|
|mandatory|Si cette question est obligatoire¹|
|type|Le type de valeur attendue dans la réponse|
|name|Le nom de la question qui permet d'identifier la question (en anglais uniquement)|
|description|La description de la question (en anglais uniquement)|
|enum|Les valeurs possibles (uniquement applicable si le `type`{.action} est `enum`{.action})|

¹ Si une question obligatoire ne possédant pas de valeur par défaut est laissée sans réponse, alors l'API retournera une erreur.

### Grappes de disques <a name="disk-group"></a>

Certains [serveurs dédiés](https://www.ovhcloud.com/fr-ca/bare-metal/) possèdent plusieurs grappes ou groupes de disques. Par exemple une grappe avec des disques SATA et une grappe avec des disques SSD. Nous appelons ces types de serveurs des **serveurs hybrides**.

Pour lister les grappes et leurs disques, vous pouvez utiliser l'appel suivant afin de déterminer le groupe de disque sur lequel vous souhaitez effectuer votre installation OS :

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/hardware
>

Exemple de retour :

```json
{
  "bootMode": "uefi",
  "defaultHardwareRaidSize": null,
  "description": "SCALE-7 - AMD Epyc 7763",
  "expansionCards": null,
  "threadsPerProcessor": 128,
  "memorySize": {
    "unit": "MB",
    "value": 524288
  },
  "defaultHardwareRaidType": null,
  "diskGroups": [
    {
      "defaultHardwareRaidType": null,
      "numberOfDisks": 2,
      "diskGroupId": 1,
      "diskType": "SSD",
      "defaultHardwareRaidSize": null,
      "diskSize": {
        "unit": "GB",
        "value": 480
      },
      "description": "2 X Disk SSD 480 GB, JBOD",
      "raidController": null
    },
    {
      "defaultHardwareRaidType": null,
      "numberOfDisks": 2,
      "diskGroupId": 2,
      "diskType": "NVME",
      "defaultHardwareRaidSize": null,
      "diskSize": {
        "unit": "GB",
        "value": 1920
      },
      "raidController": null,
      "description": "2 X Disk NVME 1920 GB, JBOD"
    }
  ],
  "processorArchitecture": "x86_64",
  "coresPerProcessor": 64,
  "processorName": "Epyc7763",
  "formFactor": "1u",
  "motherboard": "S8036-M",
  "numberOfProcessors": 1,
  "usbKeys": null
}
```

Dans cet exemple, vous avez 2 grappes :

- la première (diskGroupId=1) contient 2 disques de 480 Go chacun,
- la seconde (diskGroupId=2) contient 2 disques de 1,9 To chacun.

> [!primary]
>
> Par défaut, le système d’exploitation est installé sur le diskGroupId 1.
>

### Lancer et suivre la demande d'installation <a name="install-task"></a>

Lorsque vous avez rassemblé toutes les informations nécessaires, vous pouvez lancer l'installation de l'OS, en utilisant l'appel suivant :

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/install/start
>

Avec les paramètres suivants :

|Paramètre|Valeur|Requis|
|---|---|---|
|serviceName|Le nom de votre serveur|✅|
|templateName|Le nom de l'OS à installer|✅|
|diskGroupId|L'id de la grappe de disques sur laquelle l'OS sera installé|❌|
|customHostname|Nom d'hôte personnalisé|❌|
|userMetadata|Les réponses aux questions spécifiques de l'OS|❌|

`userMetadata`{.action} contient une liste de clés/valeurs donnant les réponses aux questions :

- La clé doit contenir le nom (`name`{.action}) de la question.
- La valeur doit contenir la réponse à la question, dans le format qui correspond au `type`{.action} requis.

#### Exemple d'un payload pour installer Linux

Ce payload permet d'installer Debian 12 (Bookworm) avec une clé SSH publique et un script bash de post-installation.

```json
{
  "details": {
    "customHostname": "mon-tux"
  },
  "templateName": "debian12_64",
  "userMetadata": [
    {
      "key": "sshKey",
      "value": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQC9xPpdqP3sx2H+gcBm65tJEaUbuifQ1uGkgrWtNY0PRKNNPdy+3yoVOtxk6Vjo4YZ0EU/JhmQfnrK7X7Q5vhqYxmozi0LiTRt0BxgqHJ+4hWTWMIOgr+C2jLx7ZsCReRk+fy5AHr6h0PHQEuXVLXeUy/TDyuY2JPtUZ5jcqvLYgQ== my-nuclear-power-plant"
    },
    {
      "key": "postInstallationScript",
      "value": "IyEvYmluL2Jhc2gKZWNobyAiY291Y291IHBvc3RJbnN0YWxsYXRpb25TY3JpcHQiID4gL29wdC9jb3Vjb3UKY2F0IC9ldGMvbWFjaGluZS1pZCAgPj4gL29wdC9jb3Vjb3UKZGF0ZSAiKyVZLSVtLSVkICVIOiVNOiVTIiAtLXV0YyA+PiAvb3B0L2NvdWNvdQo="
    }
  ]
}
```

Même si le script de post-installation peut être envoyé à l'API en clair directement en échappant les bons caractères, il est recommandé d'envoyer à l'API le script encodé en base64 en utilisant par exemple la commande UNIX/Linux suivante :

```bash
cat my-script.sh | base64 -w0`
```

Voici le script bash de post-installation en clair avec l'exemple ci-dessus :

```bash
#!/bin/bash
echo "coucou postInstallationScript" > /opt/coucou
cat /etc/machine-id  >> /opt/coucou
date "+%Y-%m-%d %H:%M:%S" --utc >> /opt/coucou
```

> [!primary]
>
> Pour les OS UNIX/Linux, vous pouvez fournir des scripts dans le language de programmation de votre choix (sous réserve que l'environnement d'exécution soit installé sur l'OS cible), à condition de mettre le shebang approprié.
>

#### Exemple d'un payload pour installer Windows

Ce payload permet d'installer Windows Server 2022 Standard (Core) en français avec un script PowerShell de post-installation.

```json
{
  "details": {
    "customHostname": "ma-fenetre"
  },
  "templateName": "win2022core-std_64",
  "userMetadata": [
    {
      "key": "language",
      "value": "fr-fr"
    },
    {
      "key": "postInstallationScript",
      "value": "ImNvdWNvdSBwb3N0SW5zdGFsbGF0aW9uU2NyaXB0UG93ZXJTaGVsbCIgfCBPdXQtRmlsZSAtRmlsZVBhdGggIiQoJEVudjpTeXN0ZW1Sb290KVxURU1QXGNvdWNvdS50eHQiCihHZXQtSXRlbVByb3BlcnR5IC1MaXRlcmFsUGF0aCAiUmVnaXN0cnk6OkhLRVlfTE9DQUxfTUFDSElORVxTT0ZUV0FSRVxNaWNyb3NvZnRcQ3J5cHRvZ3JhcGh5IiAtTmFtZSAiTWFjaGluZUd1aWQiKS5NYWNoaW5lR3VpZCB8IE91dC1GaWxlIC1GaWxlUGF0aCAiJCgkRW52OlN5c3RlbVJvb3QpXFRFTVBcY291Y291LnR4dCIgLUFwcGVuZAooR2V0LURhdGUpLlRvVW5pdmVyc2FsVGltZSgpLlRvU3RyaW5nKCJ5eXl5LU1NLWRkIEhIOm1tOnNzIikgfCBPdXQtRmlsZSAtRmlsZVBhdGggIiQoJEVudjpTeXN0ZW1Sb290KVxURU1QXGNvdWNvdS50eHQiIC1BcHBlbmQK"
    }
  ]
}
```

Même si le script de post-installation peut être envoyé à l'API en clair directement en échappant les bons caractères, il est recommandé d'envoyer à l'API le script encodé en base64 en utilisant par exemple la commande Powershell suivante :

```ps1
[System.Convert]::ToBase64String((Get-Content -Path .\my-script.ps1 -Encoding Byte))
```

Voici le script PowerShell de post-installation en clair avec l'exemple ci-dessus :

```ps1
"coucou postInstallationScriptPowerShell" | Out-File -FilePath "$($Env:SystemRoot)\TEMP\coucou.txt"
(Get-ItemProperty -LiteralPath "Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Cryptography" -Name "MachineGuid").MachineGuid | Out-File -FilePath "$($Env:SystemRoot)\TEMP\coucou.txt" -Append
(Get-Date).ToUniversalTime().ToString("yyyy-MM-dd HH:mm:ss") | Out-File -FilePath "$($Env:SystemRoot)\TEMP\coucou.txt" -Append
```

Comme vous pouvez le constater, le script PowerShell pour Windows est similaire à l'exemple ci-dessus de script bash pour Linux.

> [!primary]
>
> Pour les OS Windows, vous pouvez fournir des scripts PowerShell ou batch. Si vous souhaitez fournir un script batch, vous devez le préciser en spécifiant la valeur `cmd` à la clé `postInstallationScriptExtension` dans le payload `userMetadata`.
>

Lors de l'exécution du script de post-installation Windows, les fichiers suivants persistent :

- Le script lui-même : `c:\ovhupd\script\custrun.ps1` (ou `c:\ovhupd\script\custrun.cmd` si script batch).
- Le fichier de logs du script: `c:\ovhupd\script\customerscriptlog.txt`.

Ces 2 chemins absolus sont accessibles dans l'exécution de votre script respectivement via les variables d'environnement suivantes : `postInstallationScriptPath` et `postInstallationScriptLogPath`.

#### Exemple de retour

```json
{
    "taskId": 123456789,
    "ticketReference": null,
    "lastUpdate": "2024-01-26T17:57:10+01:00",
    "needSchedule": false,
    "startDate": "2024-01-26T17:57:10+01:00",
    "status": "init",
    "doneDate": null,
    "tags": null,
    "comment": "Start dedicated server installation",
    "plannedInterventionId": null,
    "note": null,
    "function": "reinstallServer"
}
```

`123456789` correspond à l'identifiant de la tâche d'installation de l'OS. Vous pouvez suivre l'état d'avancement global de la tâche à l'aide de l'appel suivant :

> [!api]
>
> @api {v1} /dedicated/server GET  /dedicated/server/{serviceName}/task/{taskId}
>

Sinon vous pouvez aussi avoir un état détaillé de chaque étape de l'installation avec l'appel suivant :

> [!api]
>
> @api {v1} /dedicated/server GET  /dedicated/server/{serviceName}/install/status
>

## Aller plus loin

[Premiers pas avec un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)

[Premiers pas avec un serveur dédié Kimsufi, So You Start ou Rise](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)

[Bring Your Own Image (BYOI)](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image)

[Bring Your Own Linux (BYOLinux)](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-linux)

[API OVHcloud & Partitionnement](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Gestion du RAID logiciel](/pages/bare_metal_cloud/dedicated_servers/raid_soft)

[Gestion du RAID matériel](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

Échangez avec notre [communauté d'utilisateurs](/links/community).
