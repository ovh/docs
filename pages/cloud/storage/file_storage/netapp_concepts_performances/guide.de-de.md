---
title: Enterprise File Storage - Performance-Konzepte
excerpt: "Entdecken Sie die Konzepte für die Bereitstellung, Überwachung und den Performance-Test von Enterprise File Storage"
slug: netapp/performances
section: Enterprise File Storage
order: 011
---

**Letzte Aktualisierung am 30.11.2022**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Auf dieser Seite finden Sie die Konzepte zur Bereitstellung, Überwachung und Überprüfung der Performance von [Enterprise File Storage](https://www.ovhcloud.com/de/storage-solutions/enterprise-file-storage/).

## In der praktischen Anwendung

### Performance Monitoring

Das Konzept des "Service Levels" ist ein wichtiger Bestandteil des Enterprise File Storage Angebots. Es definiert die erreichbaren Leistungsniveaus für jeden bereitgestellten Dienst. Die Performance eines Dateisystems wird in der Regel durch mehrere Elemente definiert: 

- Durchsatz 
- IOPS (Anzahl der Ein- und Ausgabeoperationen pro Sekunde)
- Blockgröße
- Das Modell des sequenziellen oder zufälligen Zugriffs

Enterprise File Storage bietet und garantiert Leistungsziele von **64 MB/s pro TB und 4000 IOPS pro TB**. Die bereitgestellte Kapazität der Dienste wirkt sich somit direkt auf die für Ihren Dienst verfügbare Performance aus.

Diese Information ist wichtig, wenn Sie Ihre Storage-Architektur entwerfen. Drei Beispiele zur Veranschaulichung:

- **Beispiel 1**: Ihre Anwendung benötigt einen theoretischen Durchsatz von etwa **430 MB/s**. Hierfür müssen Sie mindestens **7 TB** Storage bereitstellen. Eine kurze Berechnung (**430/64 = 6,72**) zeigt, wie viel Speicherkapazität Sie mindestens benötigen, um diesen Durchsatz zu erreichen.

- **Beispiel 2**: Ihre Infrastruktur benötigt **4500 IOPS** und ein Datenvolumen von **1 TB**. Daher müssen Sie **2 TB** reservieren, um die erforderlichen **4500 IOPS**  zu erreichen. In diesem Fall verfügen Sie über **8000 IOPS** über die im Voraus provisionierte Kapazität. Es geht also darum, Ihren Dienst überzuprovisionieren, um das gewünschte Leistungsniveau zu gewährleisten.

- **Beispiel 3**: Ihre Anwendung benötigt keine bestimmte Leistung, aber ein Speichervolumen von mehr als **60 TB**. In diesem Fall ist es ratsam, auf den kostengünstigeren Speicherdienst [HA-NAS](https://www.ovhcloud.com/de/storage-solutions/nas-ha/) zu wechseln, der Kapazitäten von mehr als 58 TB pro Dienst ermöglicht.

### Volumes und Dienstqualität (QoS)

Zur Erinnerung: Ein Volume ist eine Partition des Dienstes (auch "Pool" oder "Kapazitätenpool" genannt). Bei Ihrer Bestellung stellen Sie eine Kapazität für Ihren Dienst bereit. Sobald der Dienst geliefert wurde, werden Sie aufgefordert, Ihre Volumes zu erstellen, indem Sie eine Quota von 100 GB bis 29 TB pro Volume zur Verfügung stellen. 

Nachfolgend die Hierarchie eines Enterprise File Storage Dienstes:

![Enterprise File Storage Perf 1](images/Netapp_Hierarchie_2.png){.thumbnail}

Enterprise File Storage erlaubt noch keine manuelle Änderung der QoS. QoS wird auf Ebene des Dienstes definiert (Pool).

### Die Performance Ihres Dateisystems maximieren

Um die Leistung Ihres Enterprise File Storage zu maximieren, sollten Sie einige wichtige Dinge beachten:

- Denken Sie daran, Ihr Enterprise File Storage im gleichen Rechenzentrum wie Ihre Workloads zu reservieren. Die Latenzen zwischen den Rechenzentren können hoch sein und die Gesamtperformance Ihrer Anwendung beeinträchtigen.
- Um die Zuverlässigkeit zu erhöhen und die Bandbreite zu maximieren, bevorzugen Sie Server der neuesten Generation, da diese über die neuen Netzwerkinterfaces verfügen.
- Identifizieren Sie die auf den Clientservern verfügbare öffentliche Bandbreite, um sicherzustellen, dass sie mit der provisionierten Leistung kompatibel ist, und so den Durchsatz zu maximieren.

### Performance-Test

Um Ihre eigenen Performance-Tests durchzuführen und Sie mit den Service-Level von Enterprise File Storage vertraut zu machen, empfehlen wir die Verwendung von Tools wie [FIO](https://github.com/axboe/fio), einem beliebten Evaluierungswerkzeug. Es bietet zahlreiche einstellbare Optionen zur Simulation der gewünschten Workloads und liefert detaillierte Statistiken zum Speicherverhalten unter Last. Es ist auch für eine Vielzahl von Betriebssystemen kostenlos verfügbar.

Es ist wichtig, die Performance Ihres Enterprise File Storage im gleichen Rechenzentrum zu testen wie Ihre Workloads. Die Latenzen zwischen den Rechenzentren sind im normalen Betrieb zu hoch, als dass eine solche Beurteilung relevant wäre.

Bevor Sie den Test starten, überprüfen Sie, ob der für diesen Benchmark verwendete Client Zugriff auf Ihren Enterprise File Storage und ein Test-Volumen hat. Ist dies noch nicht geschehen, folgen Sie der Anleitung zur [Verwaltung über das OVHcloud Kundencenter](https://docs.ovh.com/de/storage/file-storage/netapp/control-panel/).

#### Test Bench

Mit dem Tool [FIO](https://github.com/axboe/fio) können Sie verschiedene Szenarien testen und und viele Testparameter ändern:

- Anzahl der Images 
- Bildgröße
- Blockgröße
- Dauer des Tests
- Anzahl der FIO-Worker
- Zugriffsmodell (Lesen/Schreiben/Sequenziell/Zufällig), etc.

Weitere Informationen finden Sie in [FIO-Dokumentation](https://fio.readthedocs.io/en/latest/index.html){.external}.

## Weiterführende Informationen

Treten Sie unserer Benutzergemeinschaft auf Discord bei: <https://discord.gg/jW2FgBJ72h>.
