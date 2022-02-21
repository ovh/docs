---
title: Enterprise File Storage - FAQ
excerpt: 'FAQ zur Enterprise File Storage Lösung'
slug: netapp-faq
section: Enterprise File Storage
order: 7
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 21.02.2022**

## Ziel

Here are the most frequently asked anfragen about Public Cloud Databases.

## Allgemeine Fragen

### Was ist Enterprise File Storage von OVHcloud?

Enterprise File Storage von OVHcloud ist eine hochperformante und hochverfügbare Datei-Speicherlösung. Sie basiert auf der Lösung für softwaredefined ONTAP Select Storage von NetApp&#174; und wird komplett von OVHcloud verwaltet.

### Was kann ich mit Enterprise File Storage machen?

Enterprise File Storage bietet Ihnen die Möglichkeit, auf zahlreiche praktische Fälle zur Modernisierung Ihrer Infrastruktur für die Speicherung von Unternehmensdaten einzugehen. Dies geschieht unter anderem durch die Integration des NFS-Protokolls.<br>
So können Sie zum Beispiel den gemeinsamen Speicher Ihrer virtuellen Maschinen oder Server auf Linux-Basis für verschiedene Workloads auslagern (kritische Anwendungen, Unternehmensdatenbanken, CRM, ERP...), um die Gesamtresilienz Ihrer Infrastruktur und die Dienstqualität (QoS) zu erhöhen.<br>
Enterprise File Storage erlaubt die einfache Nutzung von Shared-Datei-Servern, für die der Dienst hohe Performance, hohe Verfügbarkeit und garantierte und inklusive Bandbreite bieten soll.

Mit dieser Lösung können auch komplexere praktische Fälle wie Überlastung von On-Premise-Workloads oder die Migration in die Cloud bewältigt werden. Aber auch Beispiele für Datensicherungen in der Cloud als Teil von Resilienzplänen - als Marktpraxis für die Verwaltung und Nachhaltigkeit von Daten, aber auch zur Optimierung der Betriebskosten (heiße On-Premise-Daten und kalte Daten in der Cloud).

### Kann Enterprise File Storage über das Kundencenter verwaltet werden?

Ja, diese Dienstleistung ist direkt über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erreichbar, im Bereich `Bare Metal Cloud`{.action}, dann `Storage und Backup`{.action}.

## Verfügbarkeit

### Wie zuverlässig und redundant kann ich mit Enterprise File Storage sein?

Enterprise File Storage ist ein hochverfügbarer Storage-Dienst, dessen Aufbau redundant ist. Die aktive/aktive Architektur sichert diese Redundanz, indem sie zwei Server verschiedener Dateien in zwei Racks in einem Rechenzentrum speist. Bei einem Ausfall des ersten Servers repliziert der Dienst Ihre Daten automatisch auf den beiden Servern. Die Umstellung erfolgt in der Regel bei Ausfall des aktiven Servers oder bei geplanter Wartung.

### Welches SLA wird mit Enterprise File Storage bereitgestellt?

Enterprise File Storage wird mit einer Verfügbarkeitsrate von 99,99% geliefert.

## Netzwerk und Sicherheit

### Welche Dateiübertragungsprotokolle werden derzeit auf der Enterprise File Storage Lösung unterstützt?

Enterprise File Storage unterstützt den Transfer von Dateien über NFS (NFSv3).

### Aus welchen OVHcloud Diensten kann ich Daten anstoßen?

Enterprise File Storage ist ein Dienst, der Daten aus allen bestehenden OVHcloud Diensten empfangen kann: Bare-Metal, Public Cloud, Hosted Private Cloud (Dedicated Server/VPS/Public Cloud/Hosted Private Cloud/So you Start/Kimsufi/ADSL).

### Kann der Dienst mit einem Microsoft Active Directory (AD) verbunden werden?

Nein.

### Welche Zertifizierungen sind mit Enterprise File Storage verbunden?

Unsere Lösung "Enterprise File Storage"entspricht mehreren Branchenspitzenstandards, darunter ISO27001, die DSGVO und die Datenpolitik verschiedener Länder im Bereich Gesundheitsdaten.

### Können Sie über ein privates vRack Netzwerk auf Enterprise File Storage zugreifen?

Derzeit noch nicht, aber diese Funktion ist in Kürze verfügbar (vRack endpoint).

## On Premise Zugang

### Ist der Zugriff auf Enterprise File Storage außerhalb des OVHcloud Netzwerks möglich?

Enterprise File Storage ist per Definition nur im OVHcloud Netzwerk verfügbar.<br>
Es ist jedoch möglich, eine Architektur aufzubauen, die eine Verbindung mit einer Infrastruktur außerhalb dieses Netzwerks ermöglicht.<br>
Wir empfehlen Ihnen, unseren Support oder unseren technischen Support zu kontaktieren, um eine Infrastruktur zu entwickeln, die Ihrem Ökosystem und Ihrer Lösung entspricht. 

## Kapazität und Performance

### Welche Speicherkapazitäten sind verfügbar?

Die Mindestgröße einer Dienstleistung beträgt 1 TiB und die Höchstgröße 58 TiB. Die Granularität beträgt 1 TiB.

### Wie viele Enterprise File Storage Dienste kann ich über meine Kundenkennung erstellen?

Es gibt keine Begrenzung der Anzahl der Dienstleistungen pro Kundenkonto.

### Wie viele Volumes maximal pro Dienstleistung?

Es können bis zu 10 Volumes pro Dienstleistung erstellt werden. Die Mindestgröße beträgt 100 GiB und die Höchstgröße 29 TiB.

### Welches Performance-Level ist für Enterprise File Storage verfügbar?

Enterprise File Storage wird mit einem garantierten Durchsatz von 64 MB/s pro TiB und 4000 IOPS pro TiB geliefert.

Bei der Lieferung eines Pools mit 10 TiB verfügen Sie beispielsweise über eine Bandbreite von 640 MB/s und 40000 IOPS.

## Snapshots und Backups

### Wie kann man die Dateien einer vorherigen Version wiederherstellen?

Die Snapshots sind in einem dafür vorgesehenen Verzeichnis (.snapshots) verfügbar.

### Welche Backup-Policy ist mit Enterprise File Storage verbunden?

Die Benutzer sind für die Verwaltung ihrer Backups (Tool und Regeln) verantwortlich. Aus Gründen der Sicherheit und Resilienz der Infrastruktur führt OVHcloud jedoch ein tägliches Backup des Dienstes auf einem entfernten Server im gleichen Rechenzentrum durch. Im Falle eines Ausfalls oder eines Angriffs kann OVHcloud die Daten des Vortages wiederherstellen. Diese Aktion erfolgt auf Anfrage und ist eine optionale Dienstleistung, die in Rechnung gestellt wird.

### Sind Snapshots in der Kapazität eines Pools enthalten?

Snapshots werden zu mindestens 5% des Speicherplatzes zugewiesen. So wird zum Beispiel ein Dienst mit 5TiB von zusätzlichen 250GiB begleitet, die für Snapshots reserviert sind. Über diese Kapazität hinaus werden die Snapshots den Speicherplatz des Dienstes beanspruchen.

### Wie viele Snapshots gibt es pro Dienstleistung maximal?

200

### Wie viele Snapshots gibt es pro Volume maximal?

200

### Wie viele Snapshot-Richtlinien kann ich pro Volume erstellen?

1

### Wie viele Regeln kann ich pro Snapshot-Policy erstellen?

4

### Wo werden die Snapshots gespeichert?

Ihre Snapshots werden auf demselben Niveau gespeichert wie Ihr Dienst. Die Snapshots werden auf zwei separate Server in zwei verschiedenen Racks innerhalb eines Rechenzentrums repliziert. OVHcloud erstellt parallel dazu einen täglichen Snapshot an einem entfernten Standort.

### Wie kann ich die Verwendung von Pools und Volumes nachverfolgen?

Es gibt noch keine integrierten Metriken zur Überwachung der Verwendung von Pools und Volumes. 

## Preise und Preise

### Welche Art von Abrechnung ist an den Dienst gebunden?

Enterprise File Storage ist ein Dienst, der monatlich nach Volumen abgerechnet wird (1 bis 58 TB in Schritten von 1 TB). Optional ist auch eine Nutzungsdauer des Dienstes (12, 24 oder 36 Monate) möglich.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
