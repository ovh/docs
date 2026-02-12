---
title: 'Comment vérifier la version du firmware BMC sur un serveur dédié'
excerpt: "Découvrez comment vérifier la version du firmware BMC sur un serveur dédié"
updated: 2026-02-11
---

## Objectif

Un contrôleur BMC (Baseboard Management Controller) est responsable de la gestion à distance et du contrôle de bas niveau du matériel du serveur. Une version obsolète peut avoir un impact direct sur la sécurité, la stabilité et la facilité de gestion du serveur. Il est nécessaire de maintenir le microprogramme du contrôleur BMC à jour pour corriger les failles de sécurité, maintenir la stabilité du système et satisfaire aux exigences de conformité.

**Ce guide vous indique les étapes à suivre pour vérifier la version du firmware BMC sur un serveur dédié.**

## Prérequis

- Un [serveur dédié](/links/bare-metal/bare-metal) dans votre compte OVHcloud.
- Droits administrateur (sudo).
- Votre serveur dédié doit être connecté à Internet (uniquement si l'outil `ipmitool` n’est pas déjà installé).

### Sur un Serveur Linux

Tout d'abord, vous devez installer l'outil `ipmitool`. Cet outil permet d’interroger le BMC via l’interface IPMI. Pour plus d'informations, consultez la documentation officielle : <https://linux.die.net/man/1/ipmitool>

Selon la distribution Linux, la commande peut varier :

> [!tabs]
> **Debian / Ubuntu**
>>
>> ```sh
>> sudo apt update
>> sudo apt install ipmitool -y
>> ```
>>
> **RHEL / CentOS / AlmaLinux / Rocky Linux**
>>
>> ```sh
>> sudo dnf install epel-release -y
>> sudo dnf install ipmitool -y
>> ```
>>

Vérifier la version du firmware BMC avec la commande suivante :

```sh
sudo ipmitool mc info
```

![bmc](images/ipmi_tool.png){.thumbnail} 

Si la version du firmware est inférieure ou égale à 1.14, veuillez contacter notre support en créant un [ticket d'assistance depuis le centre d'aide OVHcloud](/links/support-contact) pour demander une mise à jour du firmware. Cependant, si la version est supérieure à 1.14, aucune action n'est requise.

### Sur un Serveur Windows

Actuellement, nous ne pouvons fournir la procédure que pour les serveurs fonctionnant sous le système d'exploitation Linux. Nous vous recommandons de redémarrer votre serveur Windows dans notre environnement [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) afin de vérifier la version. La commande fonctionne également en mode rescue.

### Sur un Serveur en mode rescue

Une fois votre serveur redémarré en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), installez l'outil `ipmitool`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # apt install ipmitool -y
```

Ensuite, vérifiez la version du firmware :

```sh
ipmitool mc info
```

![bmc](images/ipmi_tool_rescue.png){.thumbnail}

Si la version du firmware est inférieure ou égale à 1.14, veuillez contacter notre support en créant un [ticket d'assistance depuis le centre d'aide OVHcloud](/links/support-contact) pour demander une mise à jour du firmware. Cependant, si la version est supérieure à 1.14, aucune action n'est nécessaire.

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).