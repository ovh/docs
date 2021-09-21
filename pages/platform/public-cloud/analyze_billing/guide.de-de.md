---
title: 'Informationen zu den Abrechnungsoptionen der Public Cloud'
slug: informationen-zu-cloud-abrechnungsoptionen
excerpt: 'Erfahren Sie mehr über die verschiedenen Abrechnungsoptionen für Public Cloud-Produkte'
section: 'Projektverwaltung'
order: 2
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 21.09.2021**

## Ziel

Eines der Hauptprinzipien der virtuellen Informatik basiert auf der nutzungsabhängigen Abrechnung, **bei** der die Kunden für das bezahlen, was sie verwenden.

Die Standardabrechnungsoption für die Anmietung von IT-Ressourcen basiert in der Regel auf einem Vertrag mit einer vorgegebenen Laufzeit (in der Regel 12 Monate) und einer Vereinbarung zwischen zwei Parteien während dieses Zeitraums. Cloud Computing bietet jedoch ein flexibleres Abrechnungssystem: **einen, in dem Sie am Ende des Monats für den Zeitraum zahlen, in dem Sie die Ressourcen verwendet haben**.

Dieses System ähnelt dem System, das von einigen Telefonbetreibern verwendet wird, wo sie am Monatsende die Anzahl der verwendeten Minuten abrechnen. OVHcloud stellt hier die Stunden in Rechnung, für die der Server, der Speicherplatz oder ein anderes Element der Dienstleistung verwendet wird.

**In dieser Anleitung wird die Abrechnungsgestaltung der OVHcloud Public Cloud Lösungen erläutert.**

## Voraussetzungen

* Sie verfügen über ein [Public Cloud](https://www.ovhcloud.com/de/public-cloud/){.external} Projekt in Ihrem OVHcloud Account.
* einer [Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/){.external}.
* Sie haben Zugriff auf das [ OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}.

## Allgemeines

Unser Ziel ist es, ein Abrechnungssystem bereitzustellen, das so gut wie möglich der Art und Weise entspricht, wie unsere Kunden diese Dienstleistung nutzen. Dazu mussten wir die Abrechnung granulieren lassen. Deshalb ist das System der Einheiten im Allgemeinen die Dauer, in diesem Fall in Stunden gezählt.

Für jede zu berechnende Ressource startet ein Stundenzähler, wenn die Ressource erstellt wird, und endet, wenn die Ressource gelöscht wird. Dies erfolgt nach dem Abrechnungsprinzip für jede Nutzungsstunde.

Am Monatsende wird jeder Zähler mit dem Stundensatz der Ressource multipliziert. Um den Gesamtbetrag der Rechnung zu erhalten, addieren Sie einfach alle für

Jedes Cloud Projekt hat seine eigene Rechnung, die alle im Laufe des Monats abgerechneten Ressourcen zusammenfasst. Der Gesetzentwurf wird am ersten Tag des folgenden Monats erstellt.

### Beispiel

Dieses Beispiel kann eine klare Erklärung dafür liefern, wie dies funktioniert.

* Am 04. Tag des Monats startet ein Benutzer um 09:40 Uhr eine Instanz b2-15
* um 10:00 Uhr am 08. Tag des Monats fügen sie 250 GB zusätzliches Volume hinzu (klassisches Volume)
* Sie löschen das alles am 12. Tag desselben Monats um 16:30 Uhr, sobald sie das beendet haben, was sie mit diesen Ressourcen tun mussten

Zum Beispiel, vom 04. Tag des Monats um 09.40 Uhr bis zum 12. des Monats um 16.30 Uhr, sind 176 Stunden Ressourcenverbrauch. Sie werden mit 0,111 EUR pro Stunde berechnet.

Vom 08. Tag des Monats um 10.00 Uhr bis zum 12. des Monats um 16.30 Uhr sind 103 Stunden Ressourcenverbrauch. Ein klassisches GB kostet 0,04 EUR/Monat (0,0000555556 EUR/Stunde).

Am Ende des Monats beläuft sich der Gesamtbetrag der Rechnung auf

* 176 x 0,111
* 103 x 250 x 0,000055556

c-d 20,97 €

> [!primary]
>
> Die hier aufgeführten Preise sind nicht vertraglich festgelegt und dienen lediglich dazu, ein Beispiel zu geben.
>

## In der praktischen Anwendung

### Ihre Rechnungen einsehen

Um die Rechnungen eines Projekts anzuzeigen, gehen Sie auf den Tab `Public Cloud`{.action}(1) des OVHcloud Kundencenter. Wählen Sie dann im linken Menü (2) das Public Cloud Projekt aus und klicken Sie dann auf `Billing Control`{.action}(3) und `Verlauf`{.action}(4).

![public-cloud](images/pci-billing-information1-2021.png){.thumbnail}

Auf diesem Bildschirm können Sie:

* Die Ressourcen-Details anzeigen, indem jeder Abschnitt entwickelt wird
* Zeitungen durchsuchen, indem Sie auf den Vormonat oder den Folgemonat zugreifen

### Aktuelle Ressourcennutzung anzeigen

Sie können auch die aktuelle Ressourcennutzung anzeigen (für den laufenden Monat), indem Sie auf `Mein aktueller Verbrauch`{.action} klicken.

![public-cloud](images/pci-billing-information2-2021.png){.thumbnail}

Der erste Teil, **"bereits abgerechnet"**, beinhaltet die monatlich abgerechneten Ressourcen (siehe die Instanzen mit dem niedrigsten monatlichen Zinssatz). Diese Mittel sind eine Ausnahme von der Zahlungsmethode bei der Verwendung. Die Verbindlichkeiten werden monatlich in Rechnung gestellt und im Voraus gezahlt. Die Verpflichtungsoption bietet dem Nutzer einen Kostenvorteil.

Der zweite Teil, **"Kommende Abrechnung"**, beinhaltet Ressourcen à la carte. Er erfasst die Verwendung Ihrer Ressourcen vom ersten Monat bis zum heutigen Tag.

Sie können auch eine `Zu erwartender Rechnungsbetrag (Schätzung)`{.action} (für den 01. des nächsten Monats) auf der Grundlage einer Prognose des Ressourcenverbrauchs unter Berücksichtigung der aktuellen Situation und des voraussichtlichen Verbrauchs für den Rest des Monats erstellen.

> [!primary]
>
> Diese Informationen dienen lediglich der Information, da die
> jederzeit nach Ihren Aktionen ändern (Hinzufügen oder Löschen
> ).
>

![public-cloud](images/pci-billing-information3-2021.png){.thumbnail}

Wenn Sie Benachrichtigungen erhalten möchten, wenn die Prognose für die Nutzung Ihrer Ressourcen einen festgelegten Schwellenwert überschreitet, können Sie diese über diesen Bildschirm konfigurieren. Wenn Ihre geplante Nutzung den festgelegten Grenzwert überschreitet, erhalten Sie eine E-Mail, um Sie darüber zu informieren.

### Instanzen

Die Preise für Cloud-Instanzen (oder Cloud-Computing-Server) werden im OVHcloud Kundencenter aufgeführt, bevor Sie eine Instanz verwenden. Sie können die Preise auch auf der Preisseite [einsehen](https://www.ovhcloud.com/de/public-cloud/prices/){.external}.

> [!primary]
>
> Die Bandbreite der Instanzen wird nicht berechnet.
>

Jedes Instanz-Modell hat zwei unterschiedliche Abrechnungsmethoden: stündlich und monatlich.

> [!warning]
>
> Die Abrechnung einer Instanz endet, wenn die Instanz gelöscht wird
> permanent. Wenn die Instanz einen Status wie "angehalten"oder "ausgesetzt"hat, muss der Zähler für die kontinuierliche Abrechnung
> um zu funktionieren, da die Instanz nicht gelöscht wurde.
> Bei beiden Abrechnungsmethoden wird der Dienst abhängig von der Zeit abgerechnet, in der er verwendet wird.
>

#### Preis pro Stunde

Diese Abrechnung erfolgt nach dem oben erläuterten Modell für die nutzungsabhängige Abrechnung.

Diese Instanzen werden am ersten Tag des Folgemonats für die Nutzungszeiten der Ressourcen im Vormonat bezahlt.

##### **Eine Instanz aussetzen (shelve)**

Für die Zeitinstanzen können Sie eine Instanz aussetzen (shelve), um die für sie reservierten Ressourcen unter Beibehaltung der gleichen IP-Adresse freizugeben. In diesem Fall werden die Daten auf Ihrer lokalen Festplatte in einem Snapshot gespeichert, der erstellt wird, wenn eine Instanz reserviert/ausgesetzt ist. Es wird nur der Snapshot berechnet.

> [!warning]
>
>Dieser Prozess ist nur für die stündlich abgerechneten Instanzen funktionsfähig. Er beendet nicht die Abrechnung Ihrer Instanz, sondern reduziert Ihre Kosten.
>

Weitere Informationen zum Vorgehen finden Sie in dieser [anleitung](../shelve-or-pause-an-instance).

#### Monatspreis

Diese Abrechnung bietet eine Preissenkung von etwa 50 % gegenüber der stündlichen Abrechnung. Es ist eine klassische Nuagie-Abrechnung.

Jeder angefangene Monat wird in Rechnung gestellt, auch wenn die Instanz vor Monatsende gelöscht wurde.

### Speicher

Die Speicherlösungen werden in der Regel mit einem GB pro Monat abgerechnet. Um den Preis pro GB und Stunde zu sehen, teilen Sie einfach den Preis pro Monat 720, also die durchschnittliche Stundenzahl pro Monat. Das Ergebnis dieser Berechnung sind die Kosten eines pro Stunde gespeicherten Elements.

Die Berechnung lautet: ( Preis pro GB pro Monat / 720 ) x Anzahl Stunden x Anzahl GB

Die Anzahl GB pro Stunde entspricht der maximalen Anzahl GB, die während einer Stunde gespeichert werden. Wenn ein Benutzer beispielsweise 15 GB um 16:20, 17 GB um 16:40 und 14 GB um 16:50 Uhr hat, lädt OVHcloud 17 GB für den Zeitraum 16:00 - 17:00.

Die Speicherpreise sind direkt auf der Website von [OVHcloud verfügbar](https://www.ovhcloud.com/de/public-cloud/storage/){.external}.

#### Zusätzliche Volumes

Die zusätzlichen Mengen werden einfach pro beliefertem GB abgerechnet, wobei der Preis je nach Bereich unterschiedlich ist.

#### Backups zusätzlicher Volumes

Backups zusätzlicher Volumes werden auf die gleiche Weise abgerechnet wie die Volumes selbst.

#### Snapshots zusätzlicher Volumes

Die Momentaufnahmen zusätzlicher Volumes werden genauso abgerechnet wie die Volumes selbst.

#### Instanz-Snapshots und Images

Die Snapshots und Instanzimages (mit Ausnahme des von OVHcloud bereitgestellten Bildkatalogs) werden unabhängig von Instanz und Bildtyp zu einem pauschalen Preis pro GB und Monat berechnet. Die Preisliste[ finden ](https://www.ovhcloud.com/de/public-cloud/prices/){.external}Sie hier.

#### Object Storage

Für die Lagerung von Gegenständen werden zwei Posten in Rechnung gestellt:

* die Speicherung der Objekte selbst, d. h. das tatsächlich verwendete Volumen in GB
* ausgehender Traffic, d. h. das vom Dienst gesendete Datenvolumen, das im HTTP-Körper enthalten ist

> [!primary]
>
> Der ausgehende Traffic zwischen dem Object Storage Dienst und den Instanzen ist
> berechnet auf die gleiche Weise wie der ausgehende Traffic, der über das Internet versendet wird.
>

> [!warning]
>
> Die Anzeige der Objekte über das OVHcloud Konfigurationspanel wird ebenfalls berücksichtigt
> um ausgehender Traffic zu sein.
>

#### Archives

Für die Archivspeicherung werden drei Elemente in Rechnung gestellt:

* die Archivspeicherung selbst, d. h. das tatsächlich verwendete Volumen in GB
* eingehender Traffic, d. h. das Volumen der an den Dienst gesendeten Daten, die im HTTP-Körper enthalten sind
* ausgehender Traffic, d. h. das vom Dienst gesendete Datenvolumen, das im HTTP-Körper enthalten ist

> [!primary]
>
> Der ausgehende Traffic zwischen dem Archivierungsdienst und den Instanzen ist
> berechnet auf die gleiche Weise wie der ausgehende Traffic, der über das Internet versendet wird.
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
