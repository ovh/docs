---
title: Häufig gestellte Fragen zu HA-NAS
slug: faq-nas
excerpt: Sie haben eine Frage zu HA-NAS? Erfahren Sie hier Antworten auf die am häufigsten gestellten Fragen
section: NAS
order: 02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 29.07.2022**

## Ziel

**Sie finden hier die häufigsten Fragen zum HA-NAS von OVHcloud.**

## Allgemeine Fragen

### Was ist die HA-NAS Lösung von OVHcloud?

HA-NAS ist ein vollständig gemanagter und gemeinsam genutzter Dateispeicherdienst, der auf der Open-Source-Technologie OpenZFS basiert.

### Was kann ich mit HA-NAS tun?

HA-NAS erlaubt die Zentralisierung der Daten verschiedener Workloads von Linux und Windows für zahlreiche Szenarien, zum Beispiel:

- Geteilter und ausgelagerter Speicher für IT-Anwendungen (VM, DB, etc.)
- Verwaltung von Webinhalten 
- Filesharing im Netzwerk

### Kann das HA-NAS über eine Verwaltungsoberfläche genutzt werden?

Ja, das ist in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Bereich `Bare Metal Cloud`{.action} und dann `NAS und CDN`{.action} möglich.

## Verfügbarkeit

### Welches SLA wird mit HA-NAS bereitgestellt?

HA-NAS wird mit einer Verfügbarkeitsrate von 99,99% geliefert.

## Netzwerk und Sicherheit

### Welche Dateiübertragungsprotokolle werden derzeit auf der HA-NAS unterstützt?

HA-NAS unterstützt den Transfer von Dateien über NFS (NFSv3) und CIFS (SMB).

### Aus welchen OVHcloud Diensten kann ich Daten übertragen?

HA-NAS ist ein Dienst, der Daten aus allen bestehenden OVHcloud Diensten empfangen kann: Bare Metal Cloud (VPS, Dedicated Server, So you Start, Kimsufi), Public Cloud, Hosted Private Cloud.

### Wie werden HA-NAS-Zugänge verwaltet?

Die Zugriffskontrollliste (ACL) ist über Ihr OVHcloud Kundencenter konfigurierbar. Geben Sie einfach die IP-Adresse des Dienstes ein, für den Sie den Zugriff auf das HA-NAS erlauben möchten.

### Ist HA-NAS mit anderen Servern außerhalb von OVHcloud kompatibel?

Nein, der Zugriff auf Ihr HA-NAS ist nur über das OVHcloud Netzwerk möglich.

### Ist HA-NAS für die Nutzung mit vRack geeignet?

Derzeit kann ein HA-NAS nicht in das private Netzwerk vRack integriert werden. Die Verwendung von HA-NAS mit vRack ist jedoch insofern kompatibel, als der Zugriff über die öffentliche IP-Adresse des mit dem vRack verbundenen Servers erfolgen kann.

## Kapazitäten und Leistung

### Welche Speicherkapazitäten sind verfügbar?

Die Mindestgröße eines Dienstes beträgt 3 TB und die Höchstgröße 144 TB.<br>
Wir bieten folgende Speicherkapazitäten auf Basis von 3 TB Disks:

- 3 TB
- 6 TB
- 9 TB
- 18 TB
- 36 TB

Wir bieten folgende Speicherkapazitäten auf Basis von 12 TB Disks:

- 12 TB
- 24 TB
- 36 TB
- 72 TB
- 144 TB

Bei den angebotenen Speicherkapazitäten handelt es sich um die nutzbaren Kapazitäten.

### Sind die Ressourcen meines HA-NAS dediziert?

Die Disks in Ihrem HA-NAS sind ausschliesslich für Ihre Nutzung dediziert. Die weiteren Hardware-Ressourcen werden mit anderen Nutzern geteilt (RAM, CPU, Bandbreite).

**Sonderfall:** Wenn Sie das 144 TB Angebot bestellen, stehen Ihnen alle Ressourcen des Host-Servers (RAM, CPU, Bandbreite) zur Verfügung.

### Wie viele HA-NAS Dienstleistungen kann ich über meine Kundenkennung erstellen?

Es gibt keine Begrenzung der Anzahl der Dienstleistungen pro Kunden-Account.

### Wie viele Partitionen können maximal pro Dienstleistung erstellt werden?

Es können so viele Partitionen erstellt werden, wie Sie möchten. Die Mindestgröße beträgt 10 GB und die Maximalgröße wird von der Gesamtgröße des Dienstes bestimmt.

### Ist die Transfer- und Verfügbarkeitsrate garantiert?

- Transfer: Die Bandbreite des Dienstes wird geteilt. Transferraten können von OVHcloud nicht garantiert werden.
- Verfügbarkeit: Die Service-Verfügbarkeit ist garantiert und unterliegt einer Service-Level-Vereinbarung (SLA). Die Details finden Sie unter unseren spezifischen Nutzungsbedingungen.

## Nutzung des Dienstes

### Kann ein HA-NAS an mehrere Server gleichzeitig angeschlossen werden?

Ja. Ihr HA-NAS kann gleichzeitig mit mehreren OVHcloud-Diensten interagieren.

### Kann ich ein Betriebssystem auf einem HA-NAS installieren?

Nein, es ist nicht möglich, ein Betriebssystem auf den HA-NAS Diensten zu installieren.

### Ist der zugewiesene Speicherplatz partitionierbar?

Ja, es ist notwendig, eine oder mehrere Partitionen zu erstellen, je nach Ihrer Verwendung. Die Erstellung von Partitionen ist nicht begrenzt.

## Snapshots

### Was sind Snapshots?

Ein Snapshot ist ein Image (Abbild) des Zustandes Ihrer Disk und der dort gespeicherten Daten zu einem bestimmten Zeitpunkt. Snapshots bieten so eine erste Backup-Ebene. Konfiguration und Verwaltung von Snapshots sind über Ihr OVHcloud Kundencenter möglich.

Standardmäßig ist die Snapshot-Funktion aktiviert, wenn Sie Ihre Partition erstellen. Die Frequenz ist auf "stündlich" voreingestellt.

### Welche Backup-Policy ist mit HA-NAS verbunden?

Die Benutzer sind für die Verwaltung ihrer Backups (Tools und Zeitplanung) innerhalb und außerhalb des Dienstes sowie für ihre Business Continuity und Planung von Disaster Recovery verantwortlich. Aus Gründen der Sicherheit und Resilienz der Infrastruktur kann OVHcloud jedoch Snapshots des Dienstes auf einem Remote-Server durchführen, ohne jedoch dazu verpflichtet zu sein.

Wenn OVHcloud eine Sicherung auf einem Remote-Server verfügbar hat, können wir im Fall eines Ausfalls oder Angriffs die Daten der letzten verfügbaren Sicherung wiederherstellen. Bitte beachten Sie, dass diese Aktion nur auf Anfrage durchgeführt wird und als optionale Dienstleistung in Rechnung gestellt wird.

### Wie oft werden Snapshots erstellt? <a name="frequency"></a>

Die Snapshot-Frequenz kann über Ihr OVHcloud Kundencenter verwaltet werden. Sie können die Frequenz aus den folgenden Optionen auswählen:

- Stündlich (Standardeinstellung)
- Alle 6 Stunden
- Täglich
- Alle zwei Tage
- Alle drei Tage
- Wöchentlich

Sie können auch jederzeit manuelle Snapshots erstellen, zeitlich unbegrenzt speichern oder löschen. Diese Funktion ist in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder über folgenden [API-Aufruf](https://api.ovh.com/) verfügbar:

>[!api]
>
> @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

> [!primary]
> Lesen Sie unsere Anleitung zu den [ersten Schritten mit der OVHcloud API](https://docs.ovh.com/de/api/first-steps-with-ovh-api/), um sich mit der Verwendung der OVHcloud API vertraut zu machen.
>

### Wie funktioniert das Snapshot-Management-System?

Sie können automatische Snapshots zu den verschiedenen verfügbaren Frequenzen aktivieren. Unabhängig von der eingestellten Frequenz wird der zuletzt ausgeführte Snapshot immer den vorherigen ersetzen und überschreiben. Sie können Snapshots auch bei Bedarf erstellen und löschen.

### Kann ein Snapshot gelöscht werden?

Es können nur manuell erstellte Snapshots gelöscht werden (vgl. Abschnitt "[Wie oft werden Snapshots erstellt?](#frequency))".<br>
Festfrequenz-Snapshots werden automatisch gelöscht und können nicht manuell gelöscht werden.

### Sind Snapshots in der Kapazität eines Dienstes enthalten?

Ihnen wird zusätzlicher Speicherplatz auf dem gleichen physischen Speichermedium zugewiesen, um die Speicherung Ihrer Snapshots sicherzustellen. Dieser Speicherplatz entspricht mindestens 15 % des Hauptvolumens. Wenn Sie diesen Wert überschreiten, werden die Snapshots auf Ihrem primären Speicherplatz gespeichert. Der zusätzliche Speicherplatz kann nur für die Ablage Ihrer Snapshots verwendet werden.

Für einen Dienst mit 3 TB sind zum Beispiel 450 GB für Snapshots reserviert.

### Wie viele Snapshots kann ich maximal erstellen?

- Für automatische Snapshots: ein Snapshot pro Partition
- Für manuelle Snapshots: zehn pro Partition

### Wo werden die Snapshots gespeichert?

Die Snapshots werden auf dem gleichen Niveau gespeichert wie Ihr Dienst. Die Snapshots werden auf zwei separate Server in zwei verschiedenen Racks repliziert. OVHcloud führt zusätzlich einen täglichen Snapshot an einem entfernten Standort durch.

### Wo kann ich meine Snapshots einsehen?

In der betreffenden Partition finden Sie ein verstecktes Verzeichnis mit dem Namen `.zfs`, das ein Verzeichnis `snapshot` beinhaltet. Die Dateien sind als "read only" verfügbar.

### Wie viele Snapshot-Richtlinien kann ich pro Volume erstellen?

Sie können eine Richtlinie (Policy) erstellen.

## Preise

### Welche Art von Abrechnung wird auf den Dienst angewendet?

HA-NAS ist ein Dienst, der monatlich nach Volumen abgerechnet wird (in Schritten von 3 bis 144 TB).

### Für wie lange kann ich einen HA-NAS abonnieren?

Die angebotenen Nutzungsperioden sind 1, 12, 24 und 36 Monate. Am Ende Ihrer Vertragslaufzeit wird Ihr Abonnement automatisch verlängert, wenn keine [Kündigungsanfrage gestellt wurde](https://docs.ovh.com/de/billing/how-to-cancel-your-services/). Sie können das Abonnement jederzeit über Ihr OVHcloud Kundencenter kündigen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
