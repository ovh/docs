---
title: 'Installer le Real Time Monitoring (RTM)'
slug: installer-rtm
excerpt: 'Découvrez comment installer le Real Time Monitoring sur Linux ou Windows'
section: 'Diagnostic et mode Rescue'
---


**Dernière mise à jour le 24/03/2020**

## Objectif

Le Real Time Monitoring (RTM) permet de surveiller partiellement votre serveur et son activité liée à des parties telles que le processeur, la mémoire vive (RAM), les partitions disques, etc. Pour afficher ces informations directement sur l’espace client d’ OVHcloud, vous devez d’abord installer le package RTM sur votre serveur.

**Ce guide va vous expliquer comment installer le RTM sur Linux.**

## Prérequis

- Etre connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- Disposer sur votre serveur, d’un accès root via SSH (ou via une interface utilisateur graphique) 


## Instructions

> [!primary]
>
> Certaines restrictions du firewall peuvent empêcher la surveillance de votre infrastructure, même si vous avez ajouté le RTM. Veuillez à ne pas oublier d’autoriser l’accès au serveur afin qu’ OVHcloud surveille les adresses IP. Vous pouvez retrouver tous les détails dans [ce guide](https://docs.ovh.com/fr/dedicated/monitoring-ip-ovh/).
> 

### RTM sous Linux

#### Composantes

Grâce à des serveurs dédiés, le RTM collecte des données en temps réel sur le processeur, la RAM, les disques, le RAID et l’ensemble du hardware.  Ci-dessous, retrouvez quelques détails sur les composantes utilisées.

##### Beamium

https://github.com/ovh/beamium

Beamium collecte les métriques des terminaux HTTP comme_http://127.0.0.1:9100/metrics_, et prend en charge les formats de type Prometheus Sensision. 

Une fois mis en œuvre, Beamium peut filtrer et transférer les données vers une plateforme Warp 10™ Time Series. Lors de la collecte des métriques, Beamium utilise DFO (Disk Fail Over) pour éviter d’éventuelles pertes liées à des problèmes de réseau ou à  l’indisponibilité d’un service.

Beamium est écrit en Rust pour garantir efficacité, faible encombrement et haute performance.

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
  host_type: you can add tag for server and retrieve it in grafana host list

parameters:
  source-dir: /opt/beamium/sources
  sink-dir: /opt/beamium/sinks
  log-level: 1
  scan-period: 60000
  log-file: /var/log/beamium/beamium.log
```
La configuration s’effectuera automatiquement dès la fin de l’installation.

##### Noderig

https://github.com/ovh/noderig

Noderig recueille les métriques d’un système d’exploitation et les publie via une url HTTP (http://127.0.0.1:9100/metrics). Chaque collecteur peut être facilement configuré grâce à un simple curseur de niveau.

Métriques de Noderig :

* Processeur
* Mémoire
* Charge
* Disque
* Réseau
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


##### Binaires du RTM

**rtmHardware** :

- Collecte les données  sur le hardware comme l’état de santé de la carte-mère, des périphériques PCI, du disque, etc. Il collecte également des informations sur les éléments logiciels telles que la version du noyau et celle du BIOS.

**rtmHourly** :

- Collecte les informations sur les processus effectués en amont, les ports ouverts et bien d’autres processus courants.

**rtmRaidCheck** :

- Vérifie l’état de santé du RAID (s’il y en a un). 

### Installation automatique du RTM

Une fois connecté à votre serveur via SSH , exécutez simplement la commande suivante :

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> Cette installation automatique pourrait ne pas s’effectuer sur votre distribution (elle dépend d’un certain nombre de facteurs). En cas d’erreur, veuillez passer à l’installation manuelle en suivant les instructions données ci-après.
>

### Installation manuelle du RTM

#### Installation manuelle sur Debian/Ubuntu


##### Étape 1 : Ajoutez les référentiels de OVHcloud

- grâce à **add-apt-repository**

```sh
#metrics repo
add-apt-repository "deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
# rtm repo
add-apt-repository "deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
```

- par ajout manuel

Sur **Debian** :

`<distribution codename>` désigne le nom de votre distribution (par exemple : « buster »).
  
```sh
nano /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

Sur **Ubuntu** :

`<distribution codename>` désigne le nom de votre distribution (par exemple : « bionic »).
  
```sh
nano /etc/apt/sources.list.d/rtm.list

```
Ajoutez les lignes suivantes et enregistrez le document :
  
```sh
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
> [!primary]
> 
> Parlant des distributions actuelles, veuillez noter que tous les packages nécessaires peuvent ne pas être déjà inclus dans les référentiels des versions mises à jour de de Linus OS. Si tel est le cas, veuillez utiliser le nom de code d’une version antérieure de Ubuntu.
>


##### Étape 2 : Installez le apt key

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

##### Étape 3 : Installez les packages RTM

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### Installation manuelle sur CentOS

Ajoutez le RTM ainsi que le référentiel de métriques pour CentOS :

```sh
nano /etc/yum.repos.d/ovh-rtm.repo
```
Ajoutez les lignes suivantes et enregistrez le document :

```sh
[rtm]
name=OVH RTM RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.rtm.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgcheck=0
gpgkey=http://last.public.ovh.rtm.snap.mirrors.ovh.net/ovh_rtm.pub

[metrics]
name=OVH METRICS RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.metrics.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgcheck=0
gpgkey=http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key
```

Installez les packages RTM :

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

#### Installation manuelle sur FreeBSD

Ajoutez le RTM ainsi que le référentiel de métriques pour FreeBSD :

```sh
mkdir -p /usr/local/etc/pkg/repos
nano /usr/local/etc/pkg/repos/OVH.conf
```
Ajoutez les lignes suivantes et enregistrez le document :

```sh
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
Installez les packages RTM :

```sh
pkg install -y noderig beamium ovh-rtm-binaries
yum install ovh-rtm-metrics-toolkit
```
Lancez les services suivants :

```sh
Lancez le service noderig
Lancez le service beamium
```

> [!primary]
>**RTM sous Windows**
>
Le package RTM n’est actuellement pas compatible avec les systèmes Windows. Nous développons et améliorons sans cesse nos services ; une version pour Windows ne tardera pas à voir le jour.
>


### RTM sur l’espace client d’ OVHcloud

Une fois l’installation du RTM réussie, vous pouvez à partir de votre espace client d’ OVHcloud, visualiser la façon dont les données de votre serveur sont surveillées. (Il peut s’avérer nécessaire d’actualiser votre navigateur ou alors de vous déconnecter avant de vous reconnecter).  Rendez vous à la section `Serveur`{.action}  et sélectionnez votre serveur à partir du menu de gauche. Déroulez l’onglet `Informations générales`{.action} pour obtenir les informations sur la surveillance.

![Real Time Monitoring](images/rtm_panel.png){.thumbnail}



## Aller plus loin

[ Quelles sont les adresses IP du monitoring OVH ?
](https://docs.ovh.com/fr/dedicated/ovh-rescue/)

[Visualiser vos données](https://docs.ovh.com/fr/metrics/usecase-visualize/)

[Activer et utiliser le mode Rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.