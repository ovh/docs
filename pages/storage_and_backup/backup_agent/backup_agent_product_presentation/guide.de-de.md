---
title: "Backup Agent - Produktübersicht"
excerpt: "Übersicht der Backup Agent Funktionen und Vorteile"
updated: 2026-01-09
---

## Ziel

Diese Anleitung hilft Ihnen dabei, zu verstehen, wie der Backup Agent funktioniert und welche Vorteile er für Ihre Bare Metal-Dienste bietet.

## Produktvorstellung

Backup Agent ermöglicht es Ihnen, Ihre Bare Metal Server mit einem Agenten zu sichern, der entsprechend einer von Ihnen ausgewählten Backup-Richtlinie Ihre Serverdaten an einen externen Speicherort sendet.

Backup Agent basiert auf zwei Veeam Produkten:

- Veeam Service Provider Console (VSPC)
- Veeam Agent

Die VSPC ermöglicht es Ihnen, die Backup-Richtlinien an die darauf gespeicherten Agenten herunterzuladen und Ihnen ermöglicht es, jedem Agenten bei Start des Backups die Speicher- und Anmeldeinformationen zu geben.

Sobald der Agent die Informationen erhält, sendet er die Daten direkt an den Speicherort, ohne dass sie jemals über die VSPC-Infrastruktur laufen.

Das grundlegende Diagramm sieht wie folgt aus:

![Backup Agent Funktionsdiagramm](images/01-backup-agent-diagram.png){.thumbnail}

Beachten Sie:

- Die VSPC-Infrastruktur wird in OVHcloud Rechenzentren gehostet und sendet keine Daten an Veeam-Server.
- Die Speicherorte sind [OVHcloud Object Storage](/links/public-cloud/object-storage) Buckets, die in den OVHcloud Rechenzentren gehostet werden.

Es gibt mehrere entscheidende Vorteile dieser Lösung:

- Erste automatische Backup-Richtlinie mit 14 Tagen Retention.
- Möglichkeit, die Retention auf 30 Tage zu erhöhen.
- 14 Tage Unveränderlichkeit auf unseren Buckets.
- Der Zeitraum für automatische Backups liegt zwischen 22 Uhr und 6 Uhr (CET-Zeitzone für Europa - EST-Zeitzone für Kanada und Asien).
- Verschlüsselung durch OVHcloud des Speichers, der Ihre Backup-Daten hostet.
- Live-Übertragung der Backup-Daten in den Bucket, ohne eine Kopie auf unserer Infrastruktur zu platzieren.
- Der Speicherort befindet sich immer an einem anderen Ort als die Lage Ihres Bare Metal Servers (wenn Sie in Roubaix sind, befindet sich Ihr Speicherort in Gravelines).

## Weitere Informationen

Treten Sie unserer [User Community](/links/community) bei.