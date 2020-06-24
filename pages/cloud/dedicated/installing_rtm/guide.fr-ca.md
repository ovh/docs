---
title: 'Installer le Real Time Monitoring (RTM)'
slug: installer-rtm
excerpt: 'Découvrez comment installer le Real Time Monitoring sur Linux ou Windows'
section: 'Diagnostic et mode Rescue'
---

**Dernière mise à jour le 1er août 2019**

## Objectif

Le Real Time Monitoring (RTM) permet de surveiller partiellement votre serveur et son activité. Dans votre Espace client, vous trouverez des informations sur la CPU (unité centrale de traitement), la mémoire vive (RAM), les partitions disques, les ports ouverts, etc. Pour afficher ces informations, vous devez installer le package RTM.

**Ce guide va vous expliquer comment installer le RTM sur Linux.**

## Prérequis

- Vous devez être connecté via SSH (ou sur votre interface utilisateur graphique) sur votre serveur Linux (accès *root*)
- Vous devez être connecté au bureau à distance sur votre serveur Windows (accès *administrateur*).
- Vous devez être connecté à votre [Espace client OVH](https://ca.ovh.com/auth/?action=gotomanager){.external}.

## Instructions

Une fois RTM installé via votre Espace client, vous pouvez surveiller votre serveur dans la section `Dédié`{.action}. Sur la page principale de votre serveur, vous pouvez trouver les informations de surveillance sous `Real Time Monitoring` :

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Certaines restrictions du firewall peuvent empêcher la surveillance de votre infrastructure, même si vous avez ajouté le RTM. N’oubliez pas d’autoriser l’accès des adresses IP de surveillance OVH à votre serveur. Vous pouvez trouver plus de détails [ici](https://docs.ovh.com/fr/dedicated/monitoring-ip-ovh/){.external}.
> 

### RTM sur Linux
Sur les serveurs dédiés, RTM recueille les informations en continu sur le CPU, la RAM, les disques, le RAID et le matériel.


#### Composant

##### Beamium

https://github.com/ovh/beamium

Beamium collecte les métriques des terminaux HTTP, telles que _http://127.0.0.1:9100/metrics_, et prend en charge les formats Prometheus Sensision. 

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

# Warp10 platform to send data
sinks:
  metrics:
    url: https://rtm.ovh.net/
    token: 526873a6b912637ee4c44b525413
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
Le fichier de configuration sera automatiquement remplis une fois l'installation terminée.

##### Noderig

https://github.com/ovh/noderig

Noderig recueille les métriques du système d'exploitation et les expose via une url HTTP (http://127.0.0.1:9100/metrics). Chaque collecteur est facilement configurable grâce à un simple curseur de niveau

Métriques Noderig:

* CPU
* Mémoire
* Load
* Disk
* Net
* Collecteurs externes

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

##### Rtm-binaries

**rtmHardware** :

\- Recueillir des informations sur le matériel, telles que la carte mère, les périphériques PCI, la santé du disque ... et les informations sur le logiciel, telles que la version du noyau et la version du BIOS.

**rtmHourly** :

\- Recueillir des informations sur les 'top' processus, les ports ouverts, le nombre de processus en cours.

**rtmRaidCheck** :

\- Vérifier la santé du raid. (si disponible)

### Installer RTM sur Linux (automatiquement)

Une fois que vous vous êtes connecté via SSH sur votre serveur, exécutez simplement la commande suivante :

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> Cette installation automatique peut ne pas fonctionner sur votre distribution (en fonction de certaines dépendances) dans ce cas, veuillez procéder à une installation manuelle décrite plus bas.
>


#### Installation manuelle de Debian / Ubuntu

Ajouter rtm et le référentiel de métriques pour Debian :
ou `<distribution codename>` est le nom de votre distribution (exemple: 'jessie')
  
```sh
vi /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

Ajouter RTM et le référentiel de métriques pour ubuntu
ou `<distribution codename>` est le nom de votre distribution (exemple: 'xenial')
  
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

Ajouter RTM et le référentiel de métriques pour CentOs :

```sh
vi /etc/yum.repos.d/ovh-rtm.repo

[rtm]
name=OVH RTM RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.rtm.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgkey=http://last.public.ovh.rtm.snap.mirrors.ovh.net/ovh_rtm.pub

[metrics]
name=OVH METRICS RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.metrics.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgkey=http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key
```

Installer les paquets RTM :

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

### FreeBSD

Ajouter RTM et le référentiel de métriques pour FreeBSD :

```sh
mkdir -p /usr/local/etc/pkg/repos 

vi /usr/local/etc/pkg/repos/OVH.conf

# OVH mirror
RTM: {
  url: "http://last.public.ovh.rtm.snap.mirrors.ovh.net/FreeBSD-pkg/${ABI}/latest",
  mirror_type: "none",
  enabled: yes
}
Metrics: {
  url: "http://last-public-ovh-metrics.snap.mirrors.ovh.net/FreeBSD-pkg/${ABI}/latest",
  mirror_type: "none",
  enabled: yes
}
```
Installer les paquets RTM :

```sh
pkg install -y noderig beamium ovh-rtm-binaries
pkg install -y ovh-rtm-metrics-toolkit
```
Démarrer les services :
```sh
service noderig start
service beamium start
```

### Installer RTM sur Windows

Le paquet RTM n'est pas encore compatible pour Windows. (en cours)

## Aller plus loin

[Adresses IP pour la surveillance OVH](https://docs.ovh.com/fr/dedicated/monitoring-ip-ovh/){.external}.

[Visualiser vos donnees](https://docs.ovh.com/gb/en/metrics/usecase-visualize/){.external}.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
