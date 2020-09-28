---
title: 'Real Time Monitoring (RTM) installieren'
slug: rtm-installieren
excerpt: 'Erfahren Sie hier, wie Sie Real Time Monitoring auf Linux installieren'
section: 'Diagnose und Rescue-Modus'
---

**Letzte Aktualisierung 24.03.2020**

## Ziel

Mit Real Time Monitoring (RTM) können Sie Ihren Server und seine Aktivitäten in Bezug auf CPU, RAM, Festplattenpartitionen usw. teilweise überwachen. Um diese Informationen direkt in Ihrem OVHcloud Kundencenter anzuzeigen, muss zuerst das RTM-Paket auf Ihrem Server installiert werden.

**In dieser Anleitung wird die Installation von RTM auf Linux-Systemen erläutert.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie haben administrativen Zugriff (Root) über SSH (oder über die grafische Benutzeroberfläche) auf Ihren Server.


## In der praktischen Anwendung

> [!primary]
>
>Firewall-Einschränkungen können die Überwachung Ihrer Infrastruktur verhindern, selbst wenn Sie RTM hinzugefügt haben. Bitte denken Sie daran, den Serverzugriff für die IP-Adressen des OVHcloud Monitorings zu autorisieren. Die Details finden Sie in [dieser Anleitung](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh).
> 

### RTM auf Linux

#### Komponenten

Auf dedizierten Servern sammelt RTM Echtzeitinformationen zu CPU, RAM, Festplatten, RAID und Hardware. Nachfolgend finden Sie einige Details zu den verwendeten Komponenten.

##### Beamium

<https://github.com/ovh/beamium>

Beamium sammelt HTTP-Terminalmetriken wie _http://127.0.0.1:9100/metrics_ und unterstützt die Prometheus Sensision Formate. 

Nach der Implementierung kann Beamium Daten filtern und auf eine Warp 10™ Time Series-Plattform übertragen. Bei der Erfassung von Metriken wird DFO (Disk Failover) verwendet, um potenzielle Verluste im Zusammenhang mit Netzwerkproblemen oder nicht verfügbaren Diensten zu vermeiden.

Beamium ist in Rust geschrieben und garantiert Effizienz, geringen Platzbedarf und hohe Leistung.

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
    Größe: 1000000
    selector: (os|rtm).*
    ttl: 60

labels:
  host: hostname
  host_type: Sie können einen Tag für den Server hinzufügen und ihn in der Grafana Hostliste abrufen

Parameter:
  source-dir: /opt/beamium/sources
  sink-dir: /opt/beamium/sinks
  log-level: 1
  scan-period: 60000
  log-file: /var/log/beamium/beamium.log
```
Die Konfigurationsdatei wird nach Abschluss der Installation automatisch ausgefüllt.

##### Noderig

<https://github.com/ovh/noderig>

Noderig sammelt die Metriken eines Betriebssystems und stellt sie über eine HTTP-URL (http://127.0.0.1:9100/metrics) zur Verfügung. Jeder Kollektor lässt sich einfach mit einem Basic Level Cursor konfigurieren.

Noderig Metriken:

* CPU
* Speicher
* Auslastung
* Festplatte
* Netz
* Externe Kollektoren

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
    0
period: 60000
collectors: /opt/noderig
```


##### RTM Binaries

**rtmHardware**:

- Sammelt Informationen zur Hardware, z.B. zu Motherboard, PCI-Geräten, Festplattenzustand usw. Sammelt auch Informationen über die Software, wie z.B. den Kernel und die BIOS-Version.

**rtmHourly**:

- Sammelt Informationen zu den wichtigsten Prozessen, offenen Ports und der Anzahl der laufenden Prozesse.

**rtmRaidCheck**:

- Überprüft den Zustand des RAID (falls verfügbar).

### RTM automatisch installieren

Führen Sie den folgenden Befehl aus, nachdem Sie über SSH eine Verbindung zu Ihrem Server hergestellt haben:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> Diese automatische Installation funktioniert möglicherweise nicht auf Ihrer Distribution (je nach bestimmten Dependencies). Wenn ein Fehler auftritt, fahren Sie stattdessen mit der manuellen Installation fort und folgen den Anweisungen in den folgenden Abschnitten.
>

### RTM manuell installieren

#### Manuelle Installation unter Debian/Ubuntu


##### Schritt 1: OVHcloud-Repositories hinzufügen

- über **add-apt-repository**

```sh
#metrics repo
add-apt-repository "deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
# rtm repo
add-apt-repository "deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
```

- über manuelles Hinzufügen

Für **Debian**:

`<distribution codename>` ist der Name Ihrer Distribution (zum Beispiel: „buster“).
  
```sh
nano /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

Für **Ubuntu**:

`<distribution codename>` ist der Name Ihrer Distribution (zum Beispiel: „bionic“).
  
```sh
nano /etc/apt/sources.list.d/rtm.list

```
Fügen Sie diese Zeilen hinzu und speichern Sie die Datei:
  
```sh
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
> [!primary]
> 
> Beachten Sie bei neueren Distributionen, dass die erforderlichen Pakete möglicherweise noch nicht in den Repositories der aktuellen Linux-Betriebssystemversionen enthalten sind. Um das Problem zu umgehen, verwenden Sie in diesem Fall den Codenamen einer älteren (Ubuntu)-Version.
>


##### Schritt 2: Den apt-key installieren

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

##### Schritt 3: Die RTM-Pakete installieren

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### Manuelle Installation auf CentOS

Fügen Sie das RTM und das Metrik-Repository für CentOS hinzu:

```sh
nano /etc/yum.repos.d/ovh-rtm.repo
```
Fügen Sie diese Zeilen hinzu und speichern Sie die Datei:

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

Die RTM-Pakete installieren:

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

#### Manuelle Installation auf FreeBSD

Fügen Sie das RTM und das Metrik-Repository für FreeBSD hinzu:

```sh
mkdir -p /usr/local/etc/pkg/repos
nano /usr/local/etc/pkg/repos/OVH.conf
```
Fügen Sie diese Zeilen hinzu und speichern Sie die Datei:

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
Installieren Sie die RTM-Pakete:

```sh
pkg install -y noderig beamium ovh-rtm-binaries
pkg install -y ovh-rtm-metrics-toolkit
```
Die Dienste starten:

```sh
service noderig start
service beamium start
```

> [!primary]
>**RTM auf Windows**
>
Das RTM-Paket ist derzeit nicht mit Windows-Systemen kompatibel. Wir entwickeln und verbessern unsere Dienstleistungen kontinuierlich; eine Windows-Option ist in Vorbereitung.
>


### RTM im OVHcloud Kundencenter

Nach der erfolgreichen Installation von RTM können Sie die Monitoringdaten für Ihren Server im OVHcloud Kundencenter einsehen. (Möglicherweise müssen Sie Ihren Browser aktualisieren oder sich abmelden und erneut anmelden.) Gehen Sie zum Bereich `Server`{.action} und wählen Sie Ihren Server aus dem Menü auf der linken Seite aus. Scrollen Sie auf dem Tab `Allgemeine Informationen `{.action} nach unten, um die Überwachungsinformationen zu finden.

![Real Time Monitoring](images/rtm_panel.png){.thumbnail}



## Weiterführende Informationen

[IP-Adressen des OVH Monitorings](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh)

[Time Series Dataviz Tools](https://docs.ovh.com/gb/en/metrics/usecase-visualize)

[Rescue-Modus aktivieren und verwenden](../ovh-rescue/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.