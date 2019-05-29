---
title: 'Installer le Real Time Monitoring (RTM)'
slug: installer-rtm
excerpt: 'Découvrez comment installer le Real Time Monitoring sur Linux ou Windows'
section: 'Diagnostic et mode Rescue'
---

**Dernière mise à jour le 22 octobre 2018**

## Objectif

Le Real Time Monitoring (RTM) permet de surveiller partiellement votre serveur et son activité. Depuis votre espace client, vous obtenez des informations sur le processeur (CPU), la mémoire vive (RAM), les ports ouverts, etc.

**Ce guide vous explique comment installer le RTM sur Linux ou Windows**

## Prérequis

- Être connecté via SSH (ou une interface utilisateur graphique) à votre serveur Linux (accès *root*).
- Être connecté via le bureau à distance à votre serveur Windows (accès *administrateur*).
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

Une fois le RTM installé, vous pourrez surveiller votre serveur dans la section `Dédié`{.action} de votre espace client OVH. Dans la page principale du serveur, vous visualiserez les informations de surveillance sous `Real Time Monitoring` :

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Certaines restrictions du pare-feu peuvent empêcher la surveillance de votre infrastructure, même si vous avez ajouté le RTM. N’oubliez pas d’autoriser l’accès aux adresses IP de monitoring OVH à votre serveur. Vous trouverez plus de détails à ce sujet [ici](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external}.
> 

### RTM sur Linux
RTM va recueillir les informations sur le disque, le RAID et le matériel de votre serveur.

#### Composants

##### 1. Beamium

Beamium collecte les métriques des terminaux HTTP, telles que _http://127.0.0.1/metrics_, et prend en charge les formats Prometheus et Warp 10™/Sensision. 

Une fois implémenté, Beamium peut filtrer et transférer les données vers une plateforme Warp 10™ Time Series. Lors de l’acquisition de métriques, il utilise DFO (Disk Fail Over) pour éviter d'éventuelles pertes liées à des problèmes réseau ou à un service indisponible.

Beamium est écrit en Rust pour garantir efficacité, faible encombrement et performance.

Exemple de configuration :

```sh
# noderig endpoint to fetch
scrapers:
  noderig:
    url: http://127.0.0.1:9100/metrics
    format: sensision
    period: 60000

# Warp 10™ platform to send data
sinks:
  metrics:
    url: https://rtm.ovh.net/
    token: 57e05f1526873a6b912637ee4c44b525413f6764db700494ff6c4014
    Size : 1000000
    selector: (os|rtm).*
    ttl: 60

labels:
  host: hostname
  host_type: you can add tag for server and retreive it in grafana host list

parameters:
  source-dir: /opt/beamium/sources
  sink-dir: /opt/beamium/sinks
  log-level: 1
  scan-period: 60000
  log-file: /var/log/beamium/beamium.log
```

##### 2. Noderig

Noderig recueille les métriques du système d'exploitation et les expose via un point de terminaison HTTP Sensision. Chaque collecteur est facilement configurable, grâce à un simple curseur de niveau.

Les métriques recueillies par Noderig :

* CPU ;
* mémoire ;
* load ;
* disk ;
* net ;
* collecteurs externes.

Exemple de configuration :

```sh
cpu: 1
mem: 1
load: 2
disk: 2
net: 2
net-opts:
  interfaces:
    - eth0
    - eth1
period: 60000
collectors: /opt/noderig
```

##### 3. Rtm-binaries

**rtmHardware** :

\- Recueillir des informations sur la partie matérielle (carte mère, périphériques PCI, disques…) et la partie logicielle (version du noyau, version du BIOS…).

**rtmHourly** :

\- Recueillir les principaux processus de mémoire, les ports d'écoute, le nombre de processus en cours et actifs.

**rtmRaidCheck** :

\- Vérifier la santé du RAID.

### Installer RTM sur Linux

Une fois que vous vous êtes connecté via SSH sur votre serveur, exécutez simplement la commande suivante :

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```

### Installer manuellement Debian/Ubuntu

Ajouter RTM et le référentiel de métriques pour Debian :

```sh
vi /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

Ajouter RTM et le référentiel de métriques pour Ubuntu :

```sh
vi /etc/apt/sources.list.d/rtm.list
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
Installer la clé du référentiel :

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

Installer les paquets RTM :

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### CentOS

Ajouter RTM et le référentiel de métriques pour CentOS :

```sh
vi /etc/yum.repos.d/ovh-rtm.repo

[rtm]
name=OVH RTM RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.rtm.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
gpgcheck=1
gpgkey=http://last.public.ovh.rtm.snap.mirrors.ovh.net/ovh_rtm.pub

[metrics]
name=OVH METRICS RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.metrics.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
gpgcheck=1
gpgkey=http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key
```

##### Client RTM

Installer le client RTM :


```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

### Installer RTM sur Windows

Une fois que vous êtes connecté au bureau à distance, suivez les étapes suivantes :

- installez ActivePerl si vous n'avez jamais installé RTM auparavant. Vous pouvez le télécharger ici : <http://www.activestate.com/activeperl/> ;
- téléchargez et installez la dernière version de RTM ici : <ftp://ftp.ovh.net/made-in-ovh/rtm/windows/> ;
- faites un clic droit sur le fichier, puis cliquez sur `Exécuter en tant qu'administrateur`{.action}.

## Aller plus loin

[Adresses IP pour la surveillance OVH](https://docs.ovh.com/fr/dedicated/monitoring-ip-ovh/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
