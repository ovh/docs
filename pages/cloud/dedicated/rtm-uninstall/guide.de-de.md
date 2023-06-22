---
title: "Das RTM v2 Monitoringsystem deinstallieren"
excerpt: "Diese Anleitung erklärt, wie Sie das RTM Monitoring System für Ihre Dienstleistungen deinstallieren"
updated: 2023-06-20
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Das OVHcloud RTM v2 Monitoring-System wurde nun abgewertet und die Depots gelöscht. Daher empfehlen wir Ihnen, dieses System von Ihrer Dienstleistung(en) zu entstallieren und alle dazugehörigen Pakete zu löschen.

**Diese Anleitung erklärt, wie Sie bei der Reinigung der von diesem System verwendeten Pakete zu unterstützen.**

## Voraussetzungen

- Ein [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/), auf dem RTM v2 installiert wurde
- Administrator-Zugang (*root*) zu Ihrem Server über SSH

## In der praktischen Anwendung

Verbinden Sie sich via SSH mit Ihrem Server und löschen Sie die folgenden Pakete:

### Distributionen basierend auf Debian

```bash
# apt remove ovh-rtm-binaries
# apt remove ovh-rtm-metrics-toolkit
# apt remove noderig
# apt remove beamium
```

## CentOS 7 / AlmaLinux / Rocky Linux

```bash
# yum remove ovh-rtm-binaries
# yum remove ovh-rtm-metrics-toolkit
# yum remove noderig
# yum remove beamium
```

### Fedora

```bash
# dnf remove ovh-rtm-binaries
# dnf remove ovh-rtm-metrics-toolkit
# dnf remove noderig
# dnf remove beamium
```

Danach müssen Sie die Einlagen löschen.

## Debian / Ubuntu

#### Überprüfen, ob die Pakete installiert sind:**

```bash
dpkg --list | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Wenn der Befehl keinen Wert zurückgibt, bedeutet das, dass die Pakete nicht installiert sind, dann können Sie zum Schritt der Überprüfung der Depots übergehen. Ist das nicht der Fall, können Sie diese über folgenden Befehl löschen:

```bash
sudo apt-get remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Überprüfen, ob die Einlagen existieren

```bash
ls /etc/apt/sources.list.d/
``` 

Wenn die Dateien `ovh-metrics.list` und `ovh-rtm.list nicht aufgelistet sind, müssen Sie nichts tun. Ist das nicht der Fall, können Sie diese über folgenden Befehl löschen:

```bash
rm -f /etc/apt/sources.list.d/ovh-metrics.list /etc/apt/sources.list.d/ovh-rtm.list
```

## CentOS

#### überprüfen Sie, ob die Pakete installiert sind

```bash
yum list installed | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Wenn der Befehl keinen Wert zurückgibt, bedeutet das, dass die Pakete nicht installiert sind, dann können Sie zum Schritt der Überprüfung der Depots übergehen. Ist das nicht der Fall, können Sie diese über folgenden Befehl löschen:

```bash
sudo yum remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Überprüfen, ob die Einlagen existieren

```bash
ls /etc/yum.repos.d/
```

Wenn die Dateien von `OVH-metrics.repo` und `OVH-rtm.repo` nicht aufgelistet sind, müssen Sie nichts tun. Ist das nicht der Fall, können Sie diese über folgenden Befehl löschen: 

```bash
rm -f /etc/yum.repos.d/OVH-metrics.repo /etc/yum.repos.d/OVH-rtm.repo
```

## Weiterführende Informationen

Wenn Sie für die Umsetzung unserer Lösungen eine Schulung oder technische Unterstützung benötigen, kontaktieren Sie Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und unsere Experten im Professional Services Team um eine individuelle Analyse Ihres Projekts zu bitten.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
