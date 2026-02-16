---
title: "Installer l’agent Prometheus sur une instance Public Cloud"
excerpt: "Découvrez comment installer Prometheus Node Exporter ou Windows Exporter sur une instance Public Cloud OVHcloud pour collecter des métriques"
updated: 2026-01-28
---

## Objectif

Prometheus est un système de supervision et une base de données de séries temporelles. Vous pouvez installer et utiliser son agent sur des instances Public Cloud OVHcloud pour collecter des métriques depuis vos serveurs et applications.

**Découvrez comment installer Prometheus Node Exporter ou Windows Exporter sur une instance Public Cloud OVHcloud.**

> [!warning]
> 
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. N'hésitez pas à vous rendre sur notre [forum communautaire](/links/community) pour échanger avec d'autres utilisateurs.
>

## Prérequis

- [Avoir créé une instance depuis l’espace client OVHcloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- [Disposer d’un accès administrateur à l'instance](/pages/public_cloud/compute/public-cloud-first-steps).
- Un serveur Prometheus en fonctionnement et accessible depuis l’instance.

## En pratique

Suivez ces étapes pour installer l'agent Prometheus **Node Exporter** ou **Windows Exporter** sur votre instance Public Cloud OVHcloud afin de collecter des métriques.

### Étape 1 : Se connecter à votre instance

Connectez-vous à votre instance via SSH :

```bash
ssh root@<INSTANCE_IP>
```

Remplacez `<INSTANCE_IP>` par l’adresse IP publique de votre instance.

> [!primary]
>
> Sous Windows, utilisez PowerShell avec SSH ou un client SSH comme [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) si vous préférez utiliser une interface en ligne de commande.
>
> Pour Windows Server avec interface graphique, vous pouvez également utiliser le RDP (Remote Desktop).
>

### Étape 2 : Mettre à jour le système

Assurez-vous que les paquets de votre système sont à jour :

> [!tabs]
> Pour Debian / Ubuntu
>>
>> ```bash
>> sudo apt update && sudo apt upgrade -y
>> ```
>>
> Pour CentOS / RHEL
>>
>> ```bash
>> sudo yum update -y
>> ```
>>
> Pour Windows
>>
>> Aucune mise à jour spécifique n’est requise pour Windows Exporter. Vous pouvez éventuellement vous assurer que le système est à jour via Windows Update.
>>

### Étape 3 : Créer un utilisateur Prometheus (optionnel)

La création d’un utilisateur dédié pour Node Exporter améliore la sécurité sur Linux, mais est optionnelle pour Windows Exporter sur Windows.

> [!tabs]
> Pour Linux
>>
>> ```bash
>> sudo useradd --no-create-home --shell /bin/false prometheus
>> ```
>>
>> - Cela crée un utilisateur avec des permissions limitées pour exécuter Node Exporter.
>> - Recommandé en production pour réduire les risques de sécurité.
>> - Vous pouvez ensuite lancer Node Exporter sous cet utilisateur via systemd.
>>
> Pour Windows
>>
>> > [!primary]
>> >
>> > **Note** : Exécutez ces commandes PowerShell à l’intérieur de la VM via SSH.
>> >
>>
>> ```powershell
>> New-LocalUser "prometheus" -NoPassword -Description "User for Windows Exporter"
>>
>> Add-LocalGroupMember -Group "Users" -Member "prometheus"
>> ```
>>
>> **Note** : Windows Exporter peut s’exécuter avec l’utilisateur actuel. La création d’un utilisateur dédié est optionnelle pour un contrôle d’accès plus strict.
>>

### Étape 4 : Télécharger Node Exporter / Windows Exporter

> [!tabs]
> Pour Linux
>>
>> ```bash
>> # Remplacez VERSION par la dernière version, par exemple 1.10.2
>> VERSION="1.10.2"
>> wget https://github.com/prometheus/node_exporter/releases/download/v$VERSION/node_exporter-$VERSION.linux-amd64.tar.gz
>> tar xvf node_exporter-$VERSION.linux-amd64.tar.gz
>> cd node_exporter-$VERSION.linux-amd64
>> ```
>>
> Pour Windows (via SSH / PowerShell sur la VM)
>>
>> > [!primary]
>> >
>> > `Invoke-WebRequest` nécessite PowerShell 3.0 ou supérieur.
>> >
>>
>> ```powershell
>> mkdir C:\windows_exporter
>> cd C:\windows_exporter
>>
>> Invoke-WebRequest -Uri "https://github.com/prometheus-community/windows_exporter/releases/download/v0.31.3/windows_exporter-0.31.3-amd64.msi" -OutFile "windows_exporter.msi"
>> ```
>>
>> Tout se fait directement à l’intérieur de la VM, aucun transfert de fichiers depuis votre machine locale n’est nécessaire.
>>

### Étape 5 : Lancer Node Exporter / Windows Exporter

> [!tabs]
> Pour Linux
>>
>> ```bash
>> ./node_exporter
>> ```
>>
>> - **Optionnel** : configurez un service systemd pour exécuter Node Exporter automatiquement.
>> - Si vous utilisez l’utilisateur dédié prometheus, assurez-vous que le service s’exécute sous ce compte.
>>
> Pour Windows (via SSH / PowerShell)
>>
>> ```powershell
>> msiexec /i windows_exporter.msi ENABLED_COLLECTORS=cpu,cs,logical_disk,net,os,service,system,textfile /qn
>> ```
>>
>> Sur Windows Desktop ou Core, vous pouvez l’exécuter directement dans PowerShell ou le configurer en tant que service Windows.
>> 
>> Il est possible de personnaliser les collectors ; consultez la [documentation officielle](https://github.com/prometheus-community/windows_exporter#collectors) pour obtenir la liste complète.
>>

### Étape 6 : Vérifier Node Exporter / Windows Exporter

> [!primary]
>
> Node Exporter écoute par défaut sur le port 9100.
>
> Windows Exporter écoute par défaut sur le port 9182.
>
> Remplacez `<PORT>` par 9100 pour Linux ou 9182 pour Windows.
>

La commande ci-dessous permet d'observer des métriques telles que l’utilisation du CPU, de la mémoire, du disque et du réseau :

```bash
curl http://<INSTANCE_IP>:<PORT>/metrics
```

> [!primary]
>
> Sur Windows Desktop, vous pouvez également ouvrir un navigateur pour vérifier. Cependant, via SSH / PowerShell, utilisez `curl` ou `Invoke-WebRequest`.
>

### Étape 7 : Règles de pare-feu / sécurité (OVHcloud)

Assurez-vous que le port utilisé par l’exporter est ouvert à la fois dans le pare-feu de la VM et dans votre Security Group OVHcloud.

Limitez l’accès uniquement au serveur Prometheus pour plus de sécurité.

> [!tabs]
> Pour Linux (Debian / Ubuntu avec UFW)
>>
>> ```bash
>> sudo ufw allow 9100/tcp
>> sudo ufw status
>> ```
>>
>> **Note** : si UFW indique **Status: inactive**, cela signifie que le pare-feu n’est pas activé sur la VM. La règle de port est ajoutée mais pas appliquée.
>>
>> La sécurité est principalement gérée par votre Security Group OVHcloud.
>>
>> Si vous souhaitez activer UFW, commencez par autoriser SSH pour éviter de bloquer votre connexion :
>>
>> ```bash
>> sudo ufw allow ssh
>> sudo ufw enable
>> sudo ufw status
>> ```
>>
> Pour Windows
>>
>> Ouvrez le port 9182 dans le pare-feu Windows :
>>
>> ```powershell
>> netsh advfirewall firewall add rule name="Windows Exporter" dir=in action=allow protocol=TCP localport=9182
>> ```
>>
>> Vous pouvez également vérifier les règles avec :
>>
>> ```powershell
>> netsh advfirewall firewall show rule name=all | findstr "9182"
>> ```
>>

### Étape 8 : Connecter Node Exporter / Windows Exporter à Prometheus

1\. Éditez le fichier de configuration de Prometheus sur votre serveur Prometheus (prometheus.yml) :

```yaml
scrape_configs:
  - job_name: 'node_exporter' # ou 'windows_exporter'
    static_configs:
      - targets: ['<INSTANCE_IP>:9100'] # ou 9182 pour Windows Exporter
```

2\. Rechargez Prometheus :

> [!tabs]
> Pour Linux
>>
>> ```bash
>> sudo systemctl reload prometheus
>> ```
>>
> Pour Windows
>>
>> ```powershell
>> sc stop prometheus
>> sc start prometheus
>> ```
>>

3\. Les métriques Node Exporter ou Windows Exporter de votre instance OVHcloud devraient maintenant apparaître dans Prometheus.

## Aller plus loin

[Documentation officielle de Node Exporter](https://github.com/prometheus/node_exporter)

[Créer et configurer un groupe de sécurité dans Horizon](/pages/public_cloud/compute/setup_security_group)

Échangez avec notre [communauté d’utilisateurs](/links/community).