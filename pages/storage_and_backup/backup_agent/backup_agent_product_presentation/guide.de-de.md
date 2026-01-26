---
title: "Backup Agent - Produktübersicht"
excerpt: "Übersicht der Backup Agent Funktionen und Vorteile"
updated: 2026-01-23
---

## Ziel

Diese Anleitung hilft Ihnen dabei, zu verstehen, wie der Backup Agent funktioniert und welche Vorteile er für Ihre Bare Metal-Dienste bietet.

## Produktvorstellung

Backup Agent ermöglicht es Ihnen, Ihre Bare Metal Server mit einem Agenten zu sichern, der entsprechend einer von Ihnen ausgewählten Backup-Richtlinie Ihre Serverdaten an einen externen Speicherort sendet.

Backup Agent basiert auf zwei Veeam Produkten:

- Veeam Service Provider Console (VSPC)
- Veeam Agent

Der Veeam Agent ist eine von Veeam erstellte Software, die auf Ihrem Betriebssystem unter Linux und Windows installiert wird und es Ihnen ermöglicht, Ihr System zu sichern.

Die VSPC ermöglicht es Ihnen, die Backup-Richtlinien an die darauf gespeicherten Agenten herunterzuladen und Ihnen ermöglicht es, jedem Agenten bei Start des Backups die Speicher- und Anmeldeinformationen zu geben.
Hier ist die [Anleitung](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation), die erklärt, wie Sie in der VSPC navigieren.

Wenn Sie das Produkt bestellen, erhalten Sie eine E-Mail zur Bestätigung der Lieferung mit Anmeldeinformationen, die es Ihnen ermöglichen, sich mit Ihrem Tenant in der VSPC zu verbinden. Dieses Konto ist schreibgeschützt und ermöglicht es Ihnen, auf Visualisierungen zuzugreifen, um Ihre Backups und Agenten anzuzeigen.

Sobald der Agent die Informationen erhält, sendet er die Daten direkt an den Speicherort, ohne dass sie jemals über die VSPC-Infrastruktur laufen.

Das grundlegende Diagramm sieht wie folgt aus:

![Backup Agent Funktionsdiagramm](images/01-backup-agent-diagram.png){.thumbnail}

Beachten Sie:

- Die VSPC-Infrastruktur wird in OVHcloud Rechenzentren gehostet und sendet keine Daten an Veeam-Server.
- Die Speicherorte sind [OVHcloud Object Storage](/links/public-cloud/object-storage) Buckets, die in den OVHcloud Rechenzentren gehostet werden.

Es gibt mehrere entscheidende Vorteile dieser Lösung:

- Erste automatische Backup-Richtlinie mit 14 Tagen Retention.
- Möglichkeit, die Retention auf 30 Tage zu erhöhen.
- Die Richtlinie erstellt ein vollständiges Backup Ihres Servers.
- 14 Tage Unveränderlichkeit auf unseren Buckets.
- Der Zeitraum für automatische Backups liegt zwischen 22 Uhr und 6 Uhr (CET-Zeitzone für Europa - EST-Zeitzone für Kanada und Asien).
- Verschlüsselung durch OVHcloud des Speichers, der Ihre Backup-Daten hostet.
- Live-Übertragung der Backup-Daten in den Bucket, ohne eine Kopie auf unserer Infrastruktur zu platzieren.
- Der Speicherort befindet sich immer an einem anderen Ort als die Lage Ihres Bare Metal Servers (wenn Sie in Roubaix sind, befindet sich Ihr Speicherort in Gravelines).

Es ist auch wichtig zu beachten, dass:

- Die Backup-Richtlinie ist eingeschränkt, Sie können sie nicht ändern.
- Sie können kein Backup nur für eine Liste von Dateien oder Ordnern konfigurieren.
- Sie können das Datum und die Uhrzeit der Backup-Auslöser nicht ändern (dies wird als Verbesserung in der Zukunft betrachtet).

## Weitere Informationen

Treten Sie unserer [User Community](/links/community) bei.