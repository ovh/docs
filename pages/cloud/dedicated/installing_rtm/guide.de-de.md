---
title: 'Real Time Monitoring (RTM) installieren'
slug: rtm-installieren
excerpt: 'So richten Sie Real Time Monitoring unter Linux  ein'
section: 'Diagnose und Rescue-Modus'
---

**Stand 05.08.2019**

## Einleitung

Durch Real Time Monitoring (RTM) können Sie Ihren Server und seine Aktivität teilweise überwachen. In Ihrem Kundencenter sehen Sie beispielsweise die Auslastung des Prozessors (CPU) und des Arbeitsspeichers (RAM), offene Ports usw. Die Installation des RTM-Pakets ist notwendig, um diese Informationen verfügbar zu machen.

**In dieser Anleitung erfahren Sie, wie Sie RTM unter Linux installieren.**

## Voraussetzungen

- Sie sind via SSH (oder über Ihre grafische Benutzeroberfläche) auf Ihrem Linux-Server eingeloggt (Root-Zugriff).
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.

## Beschreibung

Sobald Sie RTM in Ihrem Kundencenters installiert haben, können Sie Ihren Server im Bereich `Server`{.action} („Dedicated“ im alten Interface) überwachen. Auf der Hauptseite Ihres Servers werden Ihnen unter `Real Time Monitoring` die Informationen zu Ihrem Monitoring angezeigt:

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Manche Firewall-Regeln können das Monitoring Ihrer Infrastruktur gegebenenfalls verhindern, auch wenn Sie RTM hinzugefügt haben.  Denken Sie daran, den Zugriff auf Ihren Server für die IP-Adressen des OVH Monitorings freizugeben. Weitere Informationen finden Sie [hier](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external} (Englisch).
> 

### RTM unter Linux
RTM erfasst auf dedizierten Servern ununterbrochen Daten zu CPU, RAM, Festplatten, RAID und Hardware.


#### Komponente

##### Beamium

https://github.com/ovh/beamium

Beamium sammelt Metriken aus HTTP-Terminals wie _http://127.0.0.1:9100/metrics_ und unterstützt Prometheus-Sensision-Formate. 

Wenn es fertig eingerichtet ist, kann Beamium Daten filtern und auf eine Warp-10™-Time-Series-Plattform übertragen. Beim Erfassen von Metriken verwendet es DFO (Disk Fail Over), um mögliche Verluste aufgrund von Netzwerkproblemen oder eines nicht verfügbaren Dienstes zu vermeiden.

Beamium wurde in Rust verfasst, um Effizienz, geringen Platzbedarf und eine hohe Performance sicherzustellen.

Konfigurationsbeispiel:

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
Die Konfigurationsdatei wird automatisch ausgefüllt, sobald die Installation abgeschlossen ist.

##### Noderig

https://github.com/ovh/noderig

Noderig sammelt Metriken zum Betriebssystem und stellt diese über eine HTTP-URL bereit (http://127.0.0.1:9100/metrics). Jeder Sammler ist mithilfe eines einfachen Schiebereglers problemlos zu konfigurieren.

Noderig-Metriken:

* CPU
* RAM (Memory)
* Load
* Disk
* Net
* Externe Sammler

Konfigurationsbeispiel:

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

\- Sammeln von Informationen zur Hardware, darunter das Mother Board, PCI-Geräte, der Gesundheitszustand der Festplatte, ... sowie von Informationen zur Software, darunter die Node- und die BIOS-Version.

**rtmHourly** :

\- Sammeln von Informationen zu „Top“-Prozessen, offenen Ports, Anzahl laufender Prozesse.

**rtmRaidCheck** :

\- Überprüfen des RAID-Gesundheitszustands. (falls vorhanden)

### RTM unter Linux automatisch installieren

Wenn Sie via SSH mit Ihrem Server verbunden sind, verwenden Sie einfach folgenden Befehl:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> Es kann sein, dass die automatische Installation auf Ihrer Distribution (aufgrund bestimmter Abhängigkeiten) nicht funktioniert. Führen Sie in diesem Fall wie nachfolgend beschrieben eine manuelle Installation durch.
>


#### Manuelle Installation unter Debian / Ubuntu

RTM und Metrik-Repository für Debian hinzufügen:
`<distribution codename>` ist der Name Ihrer Distribution (zum Beispiel „jessie“).
  
```sh
vi /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

RTM und Metrik-Repository für Ubuntu hinzufügen:
`<distribution codename>` ist der Name Ihrer Distribution (zum Beispiel „xenial“).
  
```sh
vi /etc/apt/sources.list.d/rtm.list
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
Repository-Schlüssel installieren:

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

RTM-Pakete installieren:

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### CentOS

RTM und Metrik-Repository für CentOS hinzufügen:

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

RTM-Pakete installieren:

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

### FreeBSD

RTM und Metrik-Repository für FreeBSD hinzufügen:

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
RTM-Pakete installieren:

```sh
pkg install -y noderig beamium ovh-rtm-binaries
pkg install -y ovh-rtm-metrics-toolkit
```
Dienste starten:
```sh
service noderig start
service beamium start
```

### RTM unter Windows installieren

Das RTM-Paket ist noch nicht mit Windows kompatibel. (wird bearbeitet)

## Weiterführende Informationen

[What are the IP addresses of the OVH monitoring?](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external} (Englisch)

[Visualize your data](https://docs.ovh.com/gb/en/metrics/usecase-visualize/){.external} (Englisch)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.