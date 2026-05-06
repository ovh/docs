---
title: "Backup Agent - Produktübersicht"
excerpt: "Übersicht über die Funktionen und Vorteile des Backup Agent Produkts"
updated: 2026-01-28
---

## Ziel

Diese Anleitung hilft Ihnen dabei, zu verstehen, wie der Backup Agent funktioniert und welche Vorteile er für Ihre Bare Metal Dienste bietet.

## Produktvorstellung

Das Backup Agent Produkt ermöglicht es Ihnen, Ihre Bare Metal Server mit einem Agenten zu sichern, der entsprechend einer von Ihnen gewählten Backup-Richtlinie Ihre Serverdaten an einen externen Speicherort sendet.

Das Backup Agent Produkt basiert auf zwei Produkten des Softwareherstellers Veeam:

- Der Veeam Service Provider Console (VSPC)
- Der Veeam Agent

Der Veeam Agent ist eine von Veeam entwickelte Software, die auf Ihrem Betriebssystem unter Linux und Windows installiert wird und Ihnen ermöglicht, Ihr System zu sichern.

Die VSPC ermöglicht es Ihnen, die Backup-Richtlinien an die darauf gespeicherten Agenten weiterzugeben und jedem Agenten die Speicher- und Anmeldeinformationen bei Start des Backups zu geben.  
Erfahren Sie, wie Sie die VSPC-Oberfläche durchsuchen können in [dieser Anleitung](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation).

Wenn Sie das Produkt bestellen, erhalten Sie eine E-Mail, die bestätigt, dass der Dienst geliefert wurde, sowie die Zugangsdaten zu Ihrem Tenant in der VSPC. Dieser Account ist schreibgeschützt und gewährt Ihnen Zugriff auf Ansichten Ihrer Backups und Agenten.

Sobald der Agent die Informationen erhält, sendet er die Daten direkt an den Speicherort, ohne dass sie jemals über die VSPC-Infrastruktur laufen.

## Wichtige Aspekte

Es gibt mehrere entscheidende Vorteile dieser Lösung:

- Erster automatischer Backup-Plan mit 14 Tagen Retention.
- Möglichkeit, auf 30 Tage Retention zu erhöhen.
- Der Plan erstellt ein vollständiges Backup Ihres Servers.
- 14 Tage Unveränderlichkeit auf unseren Buckets.
- Der Zeitraum für automatische Backups liegt zwischen 22 Uhr und 6 Uhr (MESZ Zeitzone für Europa - EST Zeitzone für Kanada und Asien).
- Verschlüsselung durch OVHcloud des Speichers, der Ihre Backup-Daten hostet.
- Live-Übertragung der Backup-Daten zum Bucket, ohne eine Kopie auf unserer Infrastruktur zu platzieren.
- Der Speicherort befindet sich immer an einem anderen Ort als der Standort Ihres Bare Metal Servers (wenn Sie sich in Roubaix befinden, wird Ihr Speicherort in Gravelines sein).

Es ist auch wichtig zu beachten, dass:

- Die Backup-Richtlinie eingeschränkt ist, Sie können sie nicht ändern.
- Sie können keinen Backup nur auf eine Liste von Dateien oder Ordnern konfigurieren.
- Sie können das Datum und die Uhrzeit der Backup-Auslöser nicht ändern (dies gilt als zukünftige Verbesserung).

## Infrastruktur

Das grundlegende Diagramm ist wie folgt:

![Backup Agent Funktionsdiagramm](images/01-backup-agent-diagram.png){.thumbnail}

Beachten Sie, dass:

- Die VSPC-Infrastruktur in den OVHcloud Rechenzentrumn gehostet wird und keine Daten an Veeam-Server sendet.
- Der Speicher basiert auf der [OVHcloud Object Storage](/links/public-cloud/object-storage), in OVHcloud Rechenzentrumn gehostet.

Bei der Lieferung erhalten Sie:

- Einen Backup-Tenant, normalerweise mit dem Namen `Backup-tenant-xxxx`, der ein virtuelles Container ist, der verwendet werden kann, um alle Ihre Backup-Dienste zu gruppieren.
- Einen VSPC-Tenant, normalerweise mit dem Namen `vspc-tenant-xxxx`, der Ihr "Unternehmen" in der VSPC ist und den Zugriff auf Ihre Dashboards und die Verbindung Ihrer Agenten ermöglicht.
- Ein Vault, normalerweise mit dem Namen `Backup-vault-xxxx`, das Ihr Speicherbereich ist, in den Ihre Backup-Daten bei jedem Backup gesendet werden.

Wir empfehlen Ihnen, unsere anderen Anleitungen zu lesen, um mehr über das Produkt zu erfahren.

## Anti-Affinität

Backups werden über die Standard-Vault-Konfiguration an einem geografisch getrennten Ort durchgeführt, sodass der Speicherort vom Bare Metal Server getrennt ist. Dieses Anti-Affinitäts-Mechanismus erhöht die Ausfallsicherheit der Backup-Daten.

Zuordnung der Backup-Regionen:

| Bare Metal Lokalisierung | Vault Affinität |
| ------------------------- | --------------- |
| BHS                       | TOR             |
| SGP                       | SYD             |
| MUM                       | SGP             |
| SYD                       | SGP             |
| RBX                       | GRA             |
| GRA                       | SBG             |
| LIM                       | SBG             |
| PAR                       | RBX             |
| ERI                       | LIM             |
| WAR                       | LIM             |
| SBG                       | RBX             |
| TOR                       | BHS             |

## Weitere Informationen

Treten Sie unserer [User Community](/links/community) bei.