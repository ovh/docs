---
title: Häufig gestellte Fragen zu NAS
slug: faq-nas
excerpt: Sie haben eine Frage zu NAS? Hier sind die am häufigsten gestellten Fragen und Antworten
section: NAS
---

**Stand 08.03.2018**

## Das Produkt

### Was bedeutet die Abkürzung HA, wenn ich einen NAS bei OVH bestelle?

HA steht für "High Availability" und bedeutet, dass OVH Ihnen eine hohe Dienstverfügbarkeit garantiert. Diese Garantie ist in einem SLA (Service Level Agreement) festgehalten: OVH ist dazu verpflichtet, seine Kunden zu entschädigen, wenn eine Störung zum Ausfall der Dienstleistung führt.

### In welchem Rechenzentrum kann ich einen HA-NAS bestellen?

Das HA-NAS-Angebot ist in den französischen Rechenzentren (Roubaix, Straßburg, Gravelines) sowie in Kanada (Beauharnois) verfügbar. Die Wahl des Rechenzentrums erfolgt direkt bei der Bestellung. ACHTUNG: Nach der Bestellung des Produkts kann das Rechenzentrum nicht mehr geändert werden.

### Kann der HA-NAS über eine Konfigurationsschnittstelle verwaltet werden?

Ja, die Konfiguration erfolgt über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Bereich `Cloud` unter `Plattformen und Dienstleistungen`.

### Ist es möglich, die Gesamtkapazität meines NAS zu erhöhen?

Nach der Bestellung ist es nicht mehr möglich, die Kapazität eines HA-NAS zu erhöhen. Um die Speicherkapazität zu erhöhen, müssen Ihre Daten auf einen anderen NAS mit größerer Kapazität migriert werden.

### Welche Speicherkapazitäten sind verfügbar?

Unser Angebot umfasst die folgenden Speicherkapazitäten:

- 1,2 TB (1,1 TB verfügbarer Storage)
- 2,4 TB (2,2 TB verfügbarer Storage)
- 3,6 TB (3,2 TB verfügbarer Storage)
- 7,2 TB (6,4 TB verfügbarer Storage)
- 13,2 TB (10 TB verfügbarer Storage)
- 19,2 TB (17 TB verfügbarer Storage)
- 26,4 TB (24 TB verfügbarer Storage)

Die Kapazitäten bestehen aus dedizierten 1,2-TB-Festplatten.

### Stehen die Ressourcen meines HA-NAS mir dediziert zur Verfügung?

Die Festplatten Ihres HA-NAS stehen ausschließlich Ihnen zur Verfügung. Die übrigen Maschinenressourcen werden geteilt (RAM, CPU, Bandbreite).

**Ausnahme:** Wenn Sie das 26,4-TB-Angebot bestellen, stehen Ihnen die Ressourcen des Host-Servers (RAM, CPU, Bandbreite) vollständig dediziert zur Verfügung.

### Für welchen Zeitraum kann ich einen HA-NAS abonnieren?

Die angebotenen Vertragslaufzeiten sind 1, 3, 6 und 12 Monate. Am Ende jeder Vertragslaufzeit wird Ihr Abonnement automatisch verlängert, wenn keine Kündigung eingegangen ist. Sie können das Abonnement jederzeit über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} kündigen.

### Ist die bei der Bestellung angezeigte Kapazität auch tatsächlich nutzbar?
Wie bei den meisten Storage-Lösungen unterscheidet sich die theoretische Kapazität geringfügig von der tatsächlich nutzbaren Kapazität, da ein Teil für den Betrieb der Festplatte benötigt wird:

- auf einem 1,2 TB HA-NAS sind effektiv 1,1 TB nutzbar
- auf einem 2,4 TB HA-NAS sind effektiv 2,2 TB nutzbar
- auf einem 3,6 TB HA-NAS sind effektiv 3,2 TB nutzbar
- auf einem 7,2 TB HA-NAS sind effektiv 6,4 TB nutzbar
- auf einem 13,2 TB HA-NAS sind effektiv 10 TB nutzbar
- auf einem 19,2 TB HA-NAS sind effektiv 17 TB nutzbar
- auf einem 26,4 TB HA-NAS sind effektiv 24 TB nutzbar

Bitte beachten Sie, dass diese Angaben unverbindlich sind und lediglich zu Informationszwecken angegeben werden. Die tatsächliche Speicherkapazität kann abweichen.

## Verwendung des Produkts

### Wozu wird der HA-NAS verwendet?

In einer Infrastruktur dient der HA-NAS als Storage, mit dem Sie mehrere [Dedicated Server](https://www.ovh.de/dedicated_server/){.external}, [Private Cloud](https://www.ovh.de/dedicated-cloud/){.external} oder [Public Cloud Instanzen](https://www.ovh.de/public-cloud/instances/){.external} verbinden können.

Die Anwendungsmöglichkeiten sind vielfältig, aber die hohe Verfügbarkeit der OVH HA-NAS ist besonders für folgende Anwendungen geeignet:

- Speicherung selten benutzter Daten: Daten, die keinen nennenswerten Traffic erzeugen, aber jederzeit zugänglich sein müssen (juristische Dokumentation, Bedienungsanleitungen usw.)
- Speicherung von "statischen" Daten: Daten, die nicht regelmäßig geändert werden müssen. So können Sie auf einer leistungsfähigen Infrastruktur Platz schaffen, um dort bevorzugt Daten zu speichern, die ständig weiterentwickelt werden oder mehr Rechenleistung benötigen (Datenbanken, Geschäftsanwendungen usw.)
- Hot-Backup-Lösungen: Die hohe Verfügbarkeit des HA-NAS garantiert, dass Ihre Daten jederzeit verfügbar sind. So können Sie auf Dateien zugreifen (oder diese weiterleiten), wenn sie an anderer Stelle nicht verfügbar oder beschädigt sind.

### Wann ist es sinnvoll, einen HA-NAS anstelle des Storage-Backups zu verwenden?
HA-NAS und Storage-Backup haben unterschiedliche Verwendungszwecke. Für die Speicherung von statischen Daten, die jederzeit verfügbar sein müssen, empfehlen wir den Einsatz eines NAS. Das Storage-Backup hingegen ist für die Speicherung von Daten konzipiert, die nicht regelmäßig aufgerufen werden.

Die wesentlichen technischen Unterschiede sind:

- HA-NAS-Daten werden auf dedizierten Festplatten gespeichert, der Speicherplatz des Storage-Backups hingegen wird geteilt;
- HA-NAS ist ein Storage, der auf einem anderen Server gemountet ist, welcher NFS- oder CIFS-Übertragungsprotokolle verwendet. Storage-Backup ist ein eigenständiger Speicherplatz, der über FTP erreichbar ist.

### Gibt es Synchronisationsfunktionen (wie bei Synology)?
Nein, der HA-NAS kann nur als Dateisystem direkt auf eine Distribution gemountet werden. Synchronisationsprozesse können jedoch vom Administrator des Storage eingerichtet werden.

### Kann ein HA-NAS an mehrere Server gleichzeitig angeschlossen werden?
Ja. Ihr NAS kann gleichzeitig mit mehreren OVH Dienstleistungen interagieren.

### Kann ich ein Betriebssystem auf einem HA-NAS installieren?
Nein, es ist nicht möglich, ein Betriebssystem auf den HA-NAS-Lösungen zu installieren.

### Welche Protokolle sind mit HA-NAS kompatibel?
Der HA-NAS kann über die Protokolle CIFS (Samba) oder NFS auf einen Windows- oder Linux-Server gemountet werden.

### Ist der HA-NAS mit FTP kompatibel?
Nein, die HA-NAS-Lösung ist nicht mit FTP kompatibel.

### Kann ich den zugewiesenen Storage partitionieren?
Ja. Je nachdem, wie Sie den Storage verwenden, können Sie eine oder mehrere Partitionen erstellen. Die mögliche Anzahl an Partitionen ist nicht begrenzt.

## Produktkompatibilität

### Ist der HA-NAS mit anderen Servern außerhalb von OVH kompatibel?
Nein, der Zugriff auf Ihren HA-NAS ist nur über das OVH Netzwerk möglich.

### Über welche Dienstleistungen ist der HA-NAS erreichbar?
Der HA-NAS ist über alle OVH Produkte erreichbar, die über eine Distribution verfügen: Dedicated Server (OVH, So you Start, Kimsufi), Dedicated Cloud, Public Cloud und VPS.

### Wie verwalte ich den Zugriff auf den HA-NAS?
Sie können die Access Control List (ACL) über Ihr OVH Kundencenter konfigurieren. Geben Sie einfach die IP-Adresse der Dienstleistung ein, für die Sie den Zugriff auf den HA-NAS erlauben möchten.

### Ist HA-NAS mit vRack kompatibel?
Derzeit kann der HA-NAS nicht in das private vRack-Netzwerk integriert werden. HA-NAS und vRack können jedoch trotzdem zusammen verwendet werden, indem der Zugriff über die öffentliche Schnittstelle des mit vRack verbundenen Servers erfolgt.

## Durchsatz des NAS

### Sind die Übertragungs- und Verfügbarkeitsraten garantiert?

- Übertragung: Die Bandbreite des HA-NAS wird geteilt. Die Übertragungsrate kann von OVH nicht garantiert werden.
- Verfügbarkeit: Die Dienstverfügbarkeit ist garantiert und unterliegt einem Service Level Agreement (SLA). Einzelheiten entnehmen Sie bitte unseren Besonderen Nutzungsbedingungen.

## Snapshots

### Was sind Snapshots?
Snapshots sind Momentaufnahmen Ihrer Festplatte und der darauf gespeicherten Daten zu einem bestimmten Zeitpunkt. Sie können die Snapshots über Ihr Kundencenter verwalten und konfigurieren.

Die Snapshot-Funktion ist standardmäßig aktiviert, wenn Sie Ihre Partition erstellen. Die Frequenz ist auf "stündlich" voreingestellt.

### Wie oft werden Snapshots erstellt?

Sie können die Snapshot-Frequenz in Ihrem Kundencenter einstellen und haben folgende Auswahlmöglichkeiten:  

- stündlich
- alle 6 Stunden
- täglich
- alle zwei Tage
- alle drei Tage
- wöchentlich 


Sie können auch jederzeit manuelle Snapshots erstellen, zeitlich unbegrenzt speichern oder löschen. Diese Funktion ist über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} oder über die [API](https://api.ovh.com/){.external} verfügbar:

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

Ab dem Moment, in dem Sie den Snapshot auslösen, werden alle Aktionen, die auf der betroffenen Partition ausgeführt werden, in diesem Snapshot gespeichert und vergrößern dadurch die Datei. Auf diese Weise können Sie jederzeit zum ursprünglichen Zustand Ihrer Partition zurückkehren (dem Zustand zu dem Zeitpunkt, an dem der Snapshot erstellt wurde). Aus technischer Sicht sind es vor allem Änderungen und das Löschen von Dateien, die für einen höheren Speicherplatzbedarf der Snapshot-Dateien sorgen.

### Wie viele Snapshots kann ich maximal erstellen?
- Automatische Snapshots: ein Snapshot je Partition
- Manuelle Snapshots: zehn Snapshots je Partition

### Wo kann ich meine Snapshots einsehen?
In der betreffenden Partition: im versteckten Verzeichnis mit dem Namen `.zfs` → Verzeichnis `snapshots`. Die Dateien stehen als "read only" zur Verfügung.

### Erstellt OVH auch Backups meiner Daten?
Ja, es wird täglich ein internes Backup durchgeführt. Hierbei wird ein weiterer Snapshot erstellt. Dieses Backup kann vom Kunden nicht deaktiviert werden.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.