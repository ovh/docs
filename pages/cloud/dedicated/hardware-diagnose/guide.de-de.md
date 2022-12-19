---
title: 'Hardwarefehler auf einem dedizierten Server erkennen'
slug: diagnose-hardwarefehler-dedicated-server
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie mithilfe von Diagnose-Tools Hardwarefehler auf Ihrem Server erkennen.'
section: Diagnose & Rescue Modus
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 15.12.2022**

## Ziel

Mit der Zeit kann es bei Ihrem Server zu Hardwarefehlern kommen, die Fehlfunktionen verursachen. Aus diesem Grund ist Ihr Server mit verschiedenen Diagnose-Tools ausgestattet, um beschädigte Hardwarekomponenten zu ermitteln.

**Diese Anleitung erklärt, wie Sie Hardwarefehler auf Ihrem Server erkennen.**

## Voraussetzungen

- Sie verfügen über einen [dedizierten Server](https://www.ovhcloud.com/de/bare-metal/).
- Sie haben den Server im [Rescue-Modus](https://docs.ovh.com/de/dedicated/ovh-rescue/) neu gestartet.

## In der praktischen Anwendung

In dieser Anleitung erfahren Sie, welche Tests zur Diagnose durchgeführt werden müssen:

- Prozessoren
- Netzwerkverbindung
- RAM
- Festplattenpartitionen

### Prozessoren

Der Prozessortest überprüft, ob der Prozessor Ihres Servers korrekt funktioniert und benötigt etwa 30 Minuten, bis er abgeschlossen ist. Wenn der Server während des Tests abstürzt, ist der Prozessor beschädigt.

```bash
WRKR=$(grep -c "^processor" /proc/cpuinfo)
![Test du processeur](images/processors.png){.thumbnail}
stress-ng --metrics-brief --timeout 60s --cpu $WRKR --io $WRKR --aggressive --ignite-cpu --maximize --pathological
stress-ng --metrics-brief --timeout 60s --brk 0 --stack 0 --bigheap 0 
```

### Netzwerkverbindung

Der Netzwerktest überprüft Ihre interne und externe Bandbreite. Diese Daten dienen Ihnen als Anhaltspunkt, es handelt sich nicht um einen Leistungstest.

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

### Festplattenpartitionen

Der Partitionstest umfasst einen Zugriffstest der Festplatte und überprüft das Dateisystem. Der Zugriffstest prüft, ob das System mit den Festplatten Ihres Server kommunizieren kann. Die Überprüfung des Dateisystems führt den Befehl `fsck -fy` aus.

```bash
stress-ng --metrics-brief --timeout 60s --hdd 0 --aggressive
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
