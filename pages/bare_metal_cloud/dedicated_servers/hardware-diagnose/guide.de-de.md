---
title: "Hardwarefehler auf einem dedizierten Server im Rescue-Modus diagnostizieren"
excerpt: "Erfahren Sie hier, wie Sie mithilfe von OVHcloud Rescue-Modus und Diagnose-Tools Hardwarefehler auf Ihrem Dedicated Server identifizieren"
updated: 2024-05-06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Mit der Zeit kann es bei Ihrem Server zu Hardwarefehlern kommen, die Fehlfunktionen verursachen. Wenn der Server im OVHcloud Rescue-Modus gestartet ist, stehen Ihnen mehrere Diagnosetools zur Verfügung, um fehlerhafte Hardwarekomponenten zu identifizieren.

**Diese Anleitung erklärt, wie Sie Hardwarefehler auf Ihrem OVHcloud Dedicated Server erkennen.**

## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](/links/bare-metal/bare-metal).
- Sie haben den Server im [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) gestartet.

## In der praktischen Anwendung

In dieser Anleitung werden Tests zur Diagnose der folgenden Komponenten aufgeführt:

- Prozessor
- Netzwerkverbindung
- RAM
- Partitionen und Disks

### Prozessoren

Der Prozessortest überprüft, ob der Prozessor Ihres Servers korrekt funktioniert und benötigt etwa 30 Minuten. Wenn der Server während des Tests abstürzt, ist der Prozessor beschädigt.

```bash
WRKR=$(grep -c "^processor" /proc/cpuinfo)
stress-ng --metrics-brief --timeout 60s --cpu $WRKR --io $WRKR --aggressive --ignite-cpu --maximize --pathological
stress-ng --metrics-brief --timeout 60s --brk 0 --stack 0 --bigheap 0 
```

### Netzwerkverbindung

Der Netzwerktest überprüft Ihre interne und externe Bandbreite. Diese Daten dienen als Anhaltspunkt; es handelt sich nicht um einen Leistungstest.

```bash
ping -c 10 proof.ovh.net
for file in 1Mb 10Mb 100Mb 1Gb ; do time curl -4f https://proof.ovh.net/files/${file}.dat -o /dev/null; done
```

### RAM

Der Arbeitsspeichertest überprüft alle RAM-Module Ihres Servers. Wenn der Server während des Tests abstürzt, ist mindestens ein RAM-Modul beschädigt.

> [!warning]
> Achtung, dieser Test kann sehr lange dauern.

```bash
RAM="$(awk -vOFMT=%.0f '$1 == "MemAvailable:" {print $2/1024 - 1024}' /proc/meminfo)"
memtester ${RAM}M 1
```

### Disk Health

Sie können *Smartmontools* verwenden, um den Status Ihrer Disks zu überprüfen, indem Sie deren `SMART`-Daten auslesen. Um beispielsweise alle Details der Disk mit dem Namen `nvme1n1` anzuzeigen, geben Sie Folgendes ein:

```bash
smartctl -a /dev/nvme1n1
```

Weitere Informationen zur Ausgabe dieses Befehls und deren Interpretation finden Sie in der [offiziellen Dokumentation zu *Smartmontools*](https://www.smartmontools.org/wiki/TocDoc).

### Disk-Partitionen

Der Partitionstest umfasst einen Zugriffstest auf die Disk und eine Prüfung des Dateisystems. Der Zugriffstest prüft, ob das System mit den Disks Ihres Server kommunizieren kann. Die Überprüfung des Dateisystems führt den Befehl `fsck -fy` aus.

```bash
stress-ng --metrics-brief --timeout 60s --hdd 0 --aggressive
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
