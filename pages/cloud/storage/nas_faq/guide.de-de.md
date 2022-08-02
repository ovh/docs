---
title: Häufig gestellte Fragen zu NAS
slug: faq-nas
excerpt: Sie haben eine Frage zu NAS? Hier sind die am häufigsten gestellten Fragen und Antworten
section: NAS
order: 02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Stand 09.09.2021**

## Das Produkt

### Kann der HA-NAS über eine Konfigurationsschnittstelle verwaltet werden?

Ja, die Konfiguration erfolgt über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Bereich `Bare Metal Cloud`{.action}, dann `NAS und CDN`{.action}.

### Ist es möglich, die Gesamtkapazität meines NAS zu erhöhen?

Nach der Bestellung ist es nicht mehr möglich, die Kapazität eines HA-NAS zu erhöhen. Um die Speicherkapazität zu erhöhen, müssen Ihre Daten auf einen anderen NAS mit größerer Kapazität migriert werden.

### Welche Speicherkapazitäten sind verfügbar?

Unser Angebot umfasst die folgenden Speicherkapazitäten:

- 3 To
- 6 To
- 9 To
- 18 To
- 36 To

Die angebotenen Speicherkapazitäten sind die verfügbaren Kapazitäten.

### Stehen die Ressourcen meines HA-NAS mir dediziert zur Verfügung?

Die Festplatten in Ihrem NAS-HA sind ausschliesslich Ihnen dediziert. Die anderen Maschinenressourcen sind mit den anderen Nutzern geteilt (RAM, CPU, Bandbreite).

**Sonderfall:** Wenn Sie das 36 To Angebot bestellen, stehen Ihnen alle Ressourcen des Host-Servers (RAM, CPU, Bandbreite) zur Verfügung.

### Für welchen Zeitraum kann ich einen HA-NAS abonnieren?

Die angebotenen Vertragslaufzeiten sind 1, 3, 6 und 12 Monate. Am Ende jeder Vertragslaufzeit wird Ihr Abonnement automatisch verlängert, wenn keine Kündigung eingegangen ist. Sie können das Abonnement jederzeit über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} kündigen.

## Verwendung des Produkts

### Kann ein HA-NAS an mehrere Server gleichzeitig angeschlossen werden?

Ja. Ihr NAS kann gleichzeitig mit mehreren OVHcloud Dienstleistungen interagieren.

### Kann ich ein Betriebssystem auf einem HA-NAS installieren?

Nein, es ist nicht möglich, ein Betriebssystem auf den HA-NAS-Lösungen zu installieren.

### Welche Protokolle sind mit HA-NAS kompatibel?

Der HA-NAS kann über die Protokolle CIFS (Samba) oder NFS auf einen Windows- oder Linux-Server gemountet werden.

### Kann ich den zugewiesenen Storage partitionieren?

Ja. Je nachdem, wie Sie den Storage verwenden, können Sie eine oder mehrere Partitionen erstellen. Die mögliche Anzahl an Partitionen ist nicht begrenzt.

## Produktkompatibilität

### Ist der HA-NAS mit anderen Servern außerhalb von OVHcloud kompatibel?

Nein, der Zugriff auf Ihren HA-NAS ist nur über das OVHcloud Netzwerk möglich.

### Über welche Dienstleistungen ist der HA-NAS erreichbar?

Der HA-NAS ist über alle OVHcloud Produkte erreichbar, die über eine Distribution verfügen: Dedicated Server (OVHcloud, So you Start, Kimsufi), Hosted Private Cloud, Public Cloud und VPS.

### Wie verwalte ich den Zugriff auf den HA-NAS?

Sie können die Access Control List (ACL) über Ihr OVHcloud Kundencenter konfigurieren. Geben Sie einfach die IP-Adresse der Dienstleistung ein, für die Sie den Zugriff auf den HA-NAS erlauben möchten.

### Ist HA-NAS mit vRack kompatibel?

Derzeit kann der HA-NAS nicht in das private vRack-Netzwerk integriert werden. HA-NAS und vRack können jedoch trotzdem zusammen verwendet werden, indem der Zugriff über die öffentliche Schnittstelle des mit vRack verbundenen Servers erfolgt.

## Durchsatz des NAS

### Sind die Übertragungs- und Verfügbarkeitsraten garantiert?

- Übertragung: Die Bandbreite des HA-NAS wird geteilt. Die Übertragungsrate kann von OVHcloud nicht garantiert werden.
- Verfügbarkeit: Die Dienstverfügbarkeit ist garantiert und unterliegt einem Service Level Agreement (SLA). Einzelheiten entnehmen Sie bitte unseren Besonderen Nutzungsbedingungen.

## Snapshots

### Was sind Snapshots?

Snapshots sind Momentaufnahmen Ihrer Festplatte und der darauf gespeicherten Daten zu einem bestimmten Zeitpunkt. Sie können die Snapshots über Ihr Kundencenter verwalten und konfigurieren.

Die Snapshot-Funktion ist standardmäßig aktiviert, wenn Sie Ihre Partition erstellen. Die Frequenz ist auf "stündlich" voreingestellt.

### Wie oft werden Snapshots erstellt?

Sie können die Snapshot-Frequenz in Ihrem Kundencenter einstellen und haben folgende Auswahlmöglichkeiten:  

- stündlich (standardmäßig)
- alle 6 Stunden
- täglich
- alle zwei Tage
- alle drei Tage
- wöchentlich

Sie können auch jederzeit manuelle Snapshots erstellen, zeitlich unbegrenzt speichern oder löschen. Diese Funktion ist über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} oder über die [API](https://api.ovh.com/){.external} verfügbar:

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

### Wie funktioniert das Snapshot-Management-System?

Sie können entsprechend der angebotenen Frequenzen automatische Snapshots konfigurieren. Unabhängig von der eingestellten Frequenz wird der zuletzt erstellte Snapshot immer den vorherigen überschreiben. Sie können Snapshots bei Bedarf auch manuell erstellen und löschen.

### Kann ich einen Snapshot löschen?

Es können nur Snapshots gelöscht werden, die manuell erstellt wurden (siehe vorherige Frage "Wie oft werden Snapshots erstellt"). Snapshots mit festgelegter Frequenz werden automatisch gelöscht, ohne dass ein Löschen von Hand möglich ist.

### Wieviel Storage verbraucht ein Snapshot auf einem HA-NAS?

Der von einem Snapshot belegte Storage variiert in Abhängigkeit der Aktionen, die in der Zeit zwischen zwei Snapshots durchgeführt werden.

Ab dem Moment, in dem Sie den Snapshot auslösen, werden alle Aktionen, die auf der betroffenen Partition ausgeführt werden, in diesem Snapshot gespeichert und vergrößern dadurch die Datei.

### Wie viele Snapshots kann ich maximal erstellen?

- Automatische Snapshots: ein Snapshot je Partition
- Manuelle Snapshots: zehn Snapshots je Partition

### Wo kann ich meine Snapshots einsehen?

In der betreffenden Partition: im versteckten Verzeichnis mit dem Namen `.zfs` → Verzeichnis `snapshots`. Die Dateien stehen als "read only" zur Verfügung.

### Erstellt OVHcloud auch Backups meiner Daten?

Ja, ein internes Backup wird täglich durchgeführt. Diese erstellt einen weiteren Snapshot. Dieses Backup kann vom Kunden nicht deaktiviert werden.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
