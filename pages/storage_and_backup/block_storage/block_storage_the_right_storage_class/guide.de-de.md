---
title: Die richtige Block Storage-Klasse auswählen
excerpt: Erfahren Sie, wie Sie die richtige OVHcloud Block Storage-Klasse auswählen. Vergleichen Sie Leistung, Preise und Anwendungsfälle, um Ihre Speicherung sowohl hinsichtlich Kosten als auch Effizienz zu optimieren.
updated: 2025-12-15
---

## Ziel

Diese Anleitung hilft Ihnen dabei, die verschiedenen OVHcloud Block Storage-Klassen zu verstehen und diejenige auszuwählen, die am besten zu Ihren Bedürfnissen passt. Sie erfahren alles über Leistungsstufen, Preisaspekte und empfohlene Anwendungsfälle, um fundierte Entscheidungen für Ihre Speicherung zu treffen.

## Block Storage Übersicht

Block Storage ist eine leistungsstarke, flexible und verlässliche Lösung für kritische Workloads. Verbinden Sie Volumes direkt mit Ihren Instanzen, skalieren Sie die Kapazität von 10 GB bis 12 TB und wählen Sie die richtige Klasse: Regional Classic, Classic oder High Speed, um Ihre Anforderungen an Leistung und Verfügbarkeit zu erfüllen. Ideal für Datenbanken, VMs und containerisierte Anwendungen, mit Funktionen wie Snapshots, Backups und Verschlüsselung.

## Block Storage-Klassen

Unsere **Block Storage-Klassen** sind so gestaltet, dass sie unterschiedliche Anforderungen an Ihre Workloads erfüllen, einschließlich Leistung, Verfügbarkeit und Ausfallsicherheit. Wählen Sie die richtige Klasse, um Geschwindigkeit, Redundanz und Kosten für Ihre Anwendungen zu optimieren.

### Regional Classic Volume

Die **Regional Classic Volume**-Klasse bietet eine hohe Verfügbarkeit, indem sie Daten automatisch in drei Verfügbarkeitszonen innerhalb einer Region (3-AZ) repliziert. Volumes werden durch NVMe over Fabric Storage unterstützt, um schnellen, konsistenten und verlässlichen Zugriff zu gewährleisten.

Um die Dienstkontinuität auch bei einem Ausfall einer AZ zu gewährleisten, unterstützt diese Klasse außerdem [Multi-Attach](/pages/public_cloud/compute/classic_block_multi_az_limitations), wodurch mehrere Instanzen in verschiedenen Verfügbarkeitszonen gleichzeitig ein Volume anbinden und nutzen können.

Diese Klasse ist für Workloads geeignet, die eine hohe Verfügbarkeit und Ausfallsicherheit erfordern, wie z. B. kritische Datenbanken und verteilte Anwendungen.

### Classic Volume

Die **Classic Volume**-Klasse ist ideal für alltägliche Anwendungsfälle, einschließlich Datenbanken, virtuellen Maschinen und Backups. Daten werden innerhalb einer einzelnen Verfügbarkeitszone (1-AZ) oder Local Zone repliziert, mit garantiertem NVMe-Leistungsvermögen.

Diese Klasse ist für Standard-Workloads geeignet, bei denen geringe Latenz und Zuverlässigkeit wichtig sind, aber keine Replikation über mehrere Zonen erforderlich ist.

### High Speed Volume

Die **High Speed Volume**-Klasse ist in zwei Generationen unterteilt und bietet unterschiedliche Leistungsprofile:

- Gen 1: Bis zu 3.000 IOPS und 128 MB/s – geeignet für allgemeine Hochgeschwindigkeits-Workloads.
- Gen 2: 30 IOPS/GB (max. 20.000 IOPS) und 0,5 MB/s pro GB (max. 512 MB/s) – empfohlen für intensiv genutzte Anwendungen, die maximale I/O und Durchsatz erfordern.

Wählen Sie Gen 1 für Standard-Hochgeschwindigkeits-Anwendungsfälle und Gen 2 für schwere Workloads wie Analytics, große Datenbanken oder Hochleistung-Computing.

### Vergleichstabelle

| Speicherklassen | Anwendungsfälle | Leistung | Unterstützte Regionen | Verfügbarkeits-SLA | Replikation | Hinweise |
| --- | --- | --- | --- | --- | --- | --- |
| **High Speed Volume** | Hochleistung-Workloads, Analytics, große Datenbanken | **Gen 1**: Bis zu 3.000 IOPS, 128 MB/s <br><br> **Gen 2**: 30 IOPS/GB (max. 20.000 IOPS), 0,5 MB/s pro GB (max. 512 MB/s) | 3-AZ, 1-AZ, Local Zones | 99,9 % | Zonal | Optimiertes NVMe, skalierbare Leistung |
| **Regional Classic Volume** | Kritische Anwendungen, verteilte Systeme | 500 IOPS garantiert, 64 MB/s | 3-AZ | 99,99 % | Multi-zone | NVMe over Fabric, hohe Verfügbarkeit |
| **Classic Volume** | Alltägliche Workloads, VMs, Backups | 500 IOPS garantiert, 64 MB/s | 1-AZ, Local Zones | 99,9 % | Zonal | NVMe over Fabric, Standardleistung |

### Weitere Details

#### Minimale Speicherdauer

Bei Block Storage gibt es keine minimale Speicherdauer: Sie können Volumes jederzeit anbinden oder löschen, ohne zusätzliche Gebühren. Sie werden nur für die echte Nutzung des Volumes während der Zeit berechnet, in der es existiert.

#### Backup- und Snapshot-Gebühren

Während die Standardnutzung eines Volumes nach GB/monatlich berechnet wird, können [Snapshots](/pages/public_cloud/compute/creating_a_volume_snapshot) auf **Block Storage** und [Backups](/pages/public_cloud/compute/volume-backup) auf **Object Storage** zusätzliche Speicherkosten verursachen. Snapshots ermöglichen es Ihnen, den Zustand eines Volumes zu einem bestimmten Zeitpunkt zu erfassen, und Backups gewährleisten Daten- und Wiederherstellungsschutz.

#### Lebenszyklus und Größenänderung

Block Storage-Volumes sind vollständig flexibel: Sie können ihre [Größe jederzeit erhöhen](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk), Partitionen erweitern und Volumes an verschiedene Instanzen anbinden. Diese Operationen erfolgen auf Ebene des Volumes, wodurch Sie die Speicherkapazität und Leistung optimieren können, ohne dass Downtime erforderlich ist.

#### Verschlüsselte Volumes

Jede Block Storage-Volumetyp ist in einer verschlüsselten Version (LUKS) erhältlich, je nach Region. Diese verschlüsselten Varianten gewährleisten die Datengeheimhaltung, ohne die Leistung zu beeinträchtigen.

> [!primary]
> Beachten Sie, dass die Regional Classic Volume-Klasse und Volumes in Local Zones keine LUKS-Verschlüsselung unterstützen.

Verschlüsselte Volumes können direkt über das OVHcloud Kundencenter oder über CLI/API-Tools erstellt werden, indem der Volumetyp mit dem Suffix `-luks` angegeben wird (z. B. classic-luks oder highspeed-luks). Dies bietet eine einfache und sichere Möglichkeit, sensible Daten zu schützen, wobei die gleiche Leistung und Funktionalität wie bei Standardvolumes genutzt werden kann.

> [!primary]
> Verschlüsselte Volumes beeinflussen die Leistung nicht.

## Anwendungsfälle

Block Storage unterstützt dank seiner Leistung, Flexibilität und Ausfallsicherheit eine breite Palette von Workloads. Typische Anwendungsfälle umfassen:

- **Datenbanken**: MySQL, PostgreSQL und andere relationale Datenbanken profitieren von niedriger Latenz und hohem Durchsatz.
- **Virtuelle Maschinen & containerisierte Anwendungen**: Persistentes Speichern für VMs und Container mit hoher Zuverlässigkeit und schnellem Zugriff.
- **Analytics & AI-Workloads**: High Speed Volumes liefern maximale IOPS und Durchsatz für datenintensive Anwendungen.
- **Backup & Disaster Recovery**: Snapshots und Backups für kritische Daten erstellen, um schnelle Wiederherstellung und Schutz zu gewährleisten.

## Zonen- und regionale Überlegungen

Block Storage-Volumes können mit unterschiedlichen Verfügbarkeitsoptionen bereitgestellt werden, abhängig von Ihren Anforderungen:

- **Regional Classic Volume (3-AZ)**: Daten werden in drei Verfügbarkeitszonen innerhalb derselben Region repliziert, wodurch eine hohe Ausfallsicherheit und ein SLA von 99,99 % gewährleistet werden. Ideal für kritische, hochverfügbare Anwendungen. Weitere Informationen finden Sie in unserer Anleitung "[Ordnungsgemäße Nutzung und Einschränkungen von Classic Multi Attach Block Storage in 3AZ-Regionen (EN)](/pages/public_cloud/compute/classic_block_multi_az_limitations)".
- **Classic & High Speed Volume (1-AZ oder Local Zone)**: Daten werden innerhalb einer einzelnen Zone repliziert. Diese Optionen bieten niedrige Latenz und hohe Leistung, geeignet für Workloads, die keine multizonenredundante Replikation erfordern.
- **Local Zones**: Für Anwendungen, die eine extrem niedrige Latenz in einer bestimmten geografischen Region benötigen, ermöglichen Local Zones, Speicher nahe an Compute-Ressourcen zu halten.

> [!success]
> Die richtige Auswahl der Bereitstellungsvariante gewährleistet eine optimale Leistung, Redundanz und Kosten-effizienz basierend auf Ihren Workload- und geografischen Anforderungen.

## Weiterführende Informationen

[Zusätzliches Volume auf einer Instanz erstellen und konfigurieren](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Block Storage Volume bearbeiten](/pages/public_cloud/compute/switch_volume_type)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.