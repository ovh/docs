---
title: 'Hardwarefehler auf einem dedizierten Server erkennen'
slug: diagnose-hardwarefehler-dedicated-server
excerpt: 'Erfahren Sie hier, wie Sie mithilfe von Diagnose-Tools Hardwarefehler auf Ihrem Server erkennen'
section: Diagnose & Rescue Modus
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 15.12.2022**

## Ziel

Mit der Zeit kann es bei Ihrem Server zu Hardwarefehlern kommen, die Fehlfunktionen verursachen. Aus diesem Grund ist Ihr Server mit verschiedenen Diagnose-Tools ausgestattet, um fehlerhafte Hardwarekomponenten zu ermitteln.

**Diese Anleitung erklärt, wie Sie Hardwarefehler auf Ihrem Server erkennen.**

## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/).
- Sie haben den Server im [Rescue-Modus](https://docs.ovh.com/de/dedicated/ovh-rescue/) gestartet.

## In der praktischen Anwendung

In dieser Anleitung werden Tests zur Diagnose der folgenden Komponenten aufgeführt:

- Prozessor
- Netzwerkverbindung
- RAM
- Partitionen

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

### Disk-Partitionen

Der Partitionstest umfasst einen Zugriffstest auf die Disk und eine Prüfung des Dateisystems. Der Zugriffstest prüft, ob das System mit den Disks Ihres Server kommunizieren kann. Die Überprüfung des Dateisystems führt den Befehl `fsck -fy` aus.

```bash
stress-ng --metrics-brief --timeout 60s --hdd 0 --aggressive
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
