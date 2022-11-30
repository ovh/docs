---
title: Enterprise File Storage - Performance-Konzepte
excerpt: "Entdecken Sie die Konzepte für die Bereitstellung, Überwachung und den Performance-Test der Enterprise File Storage Lösung"
slug: netapp/performances
section: Enterprise File Storage
order: 011
---

**Letzte Aktualisierung am 30.11.2022**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Entdecken Sie die Konzepte zur Bereitstellung, Überwachung und Überprüfung der Performance der Lösung [Enterprise File Storage](https://www.ovhcloud.com/de/storage-solutions/enterprise-file-storage/).

## In der praktischen Anwendung

### Performance Monitoring

Der Begriff "Service Level" ist ein wichtiger Bestandteil des Enterprise File Storage Angebots. Sie legt die erreichbaren Leistungsniveaus für jeden bereitgestellten Dienst fest. Die Performance eines Dateisystems wird in der Regel durch mehrere Elemente definiert: 

- Durchsatz 
- IOPS (oder Anzahl der Ein- und Ausgabeoperationen pro Sekunde)
- Blockgröße
- das Modell des sequenziellen oder zufälligen Zugriffs.

Enterprise File Storage bietet und garantiert Leistungsziele von **64 MB/s pro TB und 4000 IOPS pro TB**. Die bereitgestellte Kapazität der Dienste wirkt sich somit direkt auf die für Ihren Dienst verfügbare Performance aus.

Diese Information ist wichtig, wenn Sie Ihre Storage-Architektur entwerfen. Nehmen wir drei Beispiele:

- **Beispiel Nr. 1**: Ihre Anwendung benötigt einen theoretischen Durchsatz von etwa **430 MB/s**. Hierfür müssen Sie mindestens **7 TB** Storage bereitstellen. Eine schnelle Berechnung (**430/64 = 6,72**) ermöglicht die Schätzung der Mindestkapazität, die erforderlich ist, um diesen Durchsatz zu erreichen.

- **Beispiel Nr. 2**: Ihre Infrastruktur benötigt **4500 IOPS** und ein Datenvolumen von **1 TB**. Hierfür müssen Sie **2 TB** reservieren, um die notwendigen **4500 IOPS zu erhalten**. In diesem Fall verfügen Sie über **8000 IOPS** über die im Voraus bereitgestellte Kapazität. Es geht also darum, Ihren Dienst zu überbieten, um die gewünschte Performance zu gewährleisten.

- **Beispiel Nr. 3**: Ihre Anwendung benötigt keine besondere Leistung, aber ein Speichervolumen von mehr als **60 TB**. In diesem Fall ist es ratsam, sich auf den kostengünstigeren Speicherdienst [HA-NAS](https://www.ovhcloud.com/de/storage-solutions/nas-ha/) zu konzentrieren, der eine Kapazität von mehr als 58 TB pro Dienstleistung ermöglicht.

### Volumen und Dienstqualität (QoS)

Zur Erinnerung: Ein Volume ist eine Partition des Dienstes (auch "Pool"oder "Kapazitätspool"genannt). Bei Ihrer Bestellung stellen Sie eine Kapazität für Ihren Dienst bereit. Sobald der Dienst geliefert wurde, werden Sie Ihre Volumes erstellen müssen, indem Sie ein Quota von 100 GB bis 29 TB pro Volume zur Verfügung stellen. 

Nachfolgend die Hierarchie eines Enterprise File Storage Dienstes:

![Enterprise File Storage Perf 1](images/Netapp_Hierarchie_2.png)

Enterprise File Storage erlaubt noch keine manuelle Änderung der QoS. Die QoS wird auf Ebene des Dienstes definiert (Pool).

### Wie Sie die Performance Ihres Dateisystems maximieren

Um die Performance Ihres Enterprise File Storage zu optimieren, sind einige Elemente wichtig:

- Denken Sie daran, Ihre Enterprise File Storage im gleichen Datacenter wie Ihre Workloads zu reservieren. Die Latenzen zwischen den Rechenzentren können hoch sein und die Gesamtperformance Ihrer Anwendung beeinträchtigen.
- Für eine höhere Zuverlässigkeit und maximale Bandbreite bevorzugen Sie Server der neuesten Generation, da diese über die neuen Netzwerkinterfaces verfügen.
- Identifizieren Sie die auf den Kundenservern verfügbare öffentliche Bandbreite, um die Kompatibilität mit den bereitgestellten Leistungen zu gewährleisten und so die Bandbreite zu maximieren.

### Performance-Test

Um Ihre eigenen Performance-Tests durchzuführen und Sie mit den Service-Level von Enterprise File Storage vertraut zu machen, empfehlen wir die Verwendung von Tools wie [FIO](https://github.com/axboe/fio), einem sehr beliebten Evaluierungswerkzeug. Es bietet zahlreiche einstellbare Optionen zur Simulation der gewünschten Workloads und liefert detaillierte Statistiken zum Speicherverhalten unter Last. Es ist auch für eine breite Palette von Betriebssystemen kostenlos verfügbar.

Es ist wichtig, die Performance Ihres Enterprise File Storage im gleichen Datacenter zu testen wie Ihre Workloads. Die Latenzen zwischen den Rechenzentren sind im normalen Betrieb zu hoch, als dass eine solche Beurteilung relevant wäre.

Bevor Sie den Test starten, überprüfen Sie, ob der für diese Benchmark verwendete Client Zugriff auf Ihren Enterprise File Storage Dienst und ein Testvolumen hat. Ist dies noch nicht geschehen, folgen Sie der Anleitung zur [Verwaltung über das OVHcloud Kundencenter](https://docs.ovh.com/de/storage/file-storage/netapp/control-panel/).

#### Testbank

Mit dem Tool [FIO](https://github.com/axboe/fio) können Sie mehrere Szenarien testen und zahlreiche Testeinstellungen ändern: 

- Anzahl der Images 
- Bildgröße
- Blockgröße
- Dauer des Tests; 
- Anzahl der FIO-Worker;
- Zugangsmodell (Lesen/Schreiben/sequenziell/zufällig) usw.

Weitere Informationen finden Sie in [FIO-Dokumentation](https://fio.readthedocs.io/en/latest/index.html){.external}.

## Weiterführende Informationen

Für den Austausch mit unserer User Community auf Discord: <https://discord.gg/jW2FgBJ72h>


