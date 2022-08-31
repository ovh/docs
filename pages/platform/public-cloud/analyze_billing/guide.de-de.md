---
title: 'Informationen zu den Abrechnungsoptionen der Public Cloud'
slug: informationen-zu-cloud-abrechnungsoptionen
excerpt: 'Erfahren Sie mehr über die verschiedenen Abrechnungsoptionen für Public Cloud-Produkte'
section: 'Projektverwaltung'
order: 2
---

**Letzte Aktualisierung am 30.08.2022**

## Ziel

Eines der Hauptprinzipien im Cloud Computing ist die nutzungsabhängige Abrechnung (*Pay as you go*). Hierbei zahlen Kunden für die Ressourcen, die tatsächlich verwendet werden.

Die Standardabrechnungsoption für die Anmietung von Computing-Ressourcen basiert in der Regel auf einem Vertrag mit einer vorgegebenen Laufzeit (12 Monate) und einer Vereinbarung zwischen zwei Parteien während dieses Zeitraums. Cloud Computing bietet jedoch ein flexibleres Abrechnungssystem: **Am Ende eines Monats zahlen Sie für den Zeitraum, in dem Sie die Ressourcen verwendet haben**.

Dieses System ähnelt dem einiger Telefonieanbieter, wobei am Monatsende die Anzahl der genutzten Minuten abgerechnet wird. OVHcloud stellt die Stunden in Rechnung, für die der Server, der Speicherplatz oder eine andere Komponente der Dienstleistung verwendet wurde.

**In dieser Anleitung wird die Abrechnungsgestaltung der OVHcloud Public Cloud Lösungen erläutert.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud/){.external} in Ihrem Kunden-Account.
- Sie haben eine [Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/) erstellt.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## Grundsätzliche Funktionsweise

Unser Ziel ist es, ein Abrechnungssystem für die Dienstleistung bereitzustellen, das so gut wie möglich dem Nutzungsverhalten der Kunden entspricht. Dazu gehört, die Abrechnung granular zu gestalten. Aus diesem Grund ist die Abrechnungseinheit die Nutzungszeit, die in diesem Fall in Stunden gezählt wird.

Für jede abzurechnende Ressource beginnt ein Stundenzähler, sobald die Ressource erstellt wird, und endet, wenn die Ressource entfernt wird. Dies erfolgt nach dem Prinzip, dass jede angefangene Nutzungsstunde in Rechnung gestellt wird.

Am Monatsende werden alle gezählten Einheiten mit dem Stundensatz der Ressource multipliziert. Um die Gesamtrechnung zu erhalten, addieren Sie einfach alle abgerechneten Stundeneinheiten.

Für jedes Cloud Projekt gibt es eine eigene Rechnung, die alle im Laufe des Monats abgerechneten Ressourcen zusammenfasst. Diese Rechnung wird am ersten Tag des Folgemonats erstellt.

### Beispiel

>[!warning]
> Bitte beachten Sie, dass eine stündliche Instanz unabhängig vom Zeitpunkt der Erstellung der Instanz stundenweise abgerechnet wird. Wenn Sie eine Abrechnungszeit von 60 Minuten nutzen möchten, müssen Sie Ihre Instanz zur vollen Stunde starten, zum Beispiel um 13:00 oder 14:00 Uhr.
>

Das folgende Beispiel veranschaulicht, wie das in der Praxis funktioniert.

- Am 4. Tag des Monats startet ein Nutzer um 09:40 Uhr eine Instanz vom Typ b2-15
- Um 10:00 Uhr am 8. Tag des Monats werden 250 GB zusätzlicher Speicherplatz hinzugefügt (Classic Volume)
- Am 12. Tag desselben Monats um 16:30 Uhr löscht der Nutzer alle Ressourcen nach Abschluss des Projekts

Für die Instanz werden vom 4. Tag des Monats um 09.40 Uhr bis zum 12. des Monats um 16.30 Uhr insgesamt 200 Stunden Ressourcenverbrauch berechnet. Sie werden mit 0,111 EUR pro Stunde berechnet.

Vom 8. Tag des Monats um 10.00 Uhr bis zum 12. des Monats um 16.30 Uhr kommen 103 Stunden Ressourcenverbrauch für den Storage hinzu. Für 1 GB des gewählten Storage betragen die Kosten 0,04 EUR/Monat (0,0000555556 EUR/Stunde).

Am Ende des Monats berechnet sich der Gesamtbetrag folgendermaßen:

- 200 x 0,111
- 103 x 250 x 0,000055556

Ergebnis: 23,63€

> [!primary]
>
> Die hier aufgeführten Preise sind nicht vertraglich festgelegt und dienen lediglich dazu, ein Beispiel zu geben.
>

## In der praktischen Anwendung

### Ihre Rechnungen einsehen

Um die Rechnungen eines Projekts anzuzeigen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus. Klicken Sie links auf `Billing Control`{.action} und dann auf den Tab `History`{.action}.

![public-cloud](images/pci-billing-information1-2021.png){.thumbnail}

In dieser Ansicht können Sie:

- Ressourcen-Details anzeigen, indem Sie die Abschnitte erweitern
- Logs durchsehen, indem Sie auf den Vormonat oder den Folgemonat zugreifen

### Aktuelle Ressourcennutzung anzeigen

Sie können auch die aktuelle Ressourcennutzung anzeigen (für den laufenden Monat), indem Sie auf `Mein aktueller Verbrauch`{.action} klicken.

![public-cloud](images/pci-billing-information2-2021.png){.thumbnail}

Der erste Teil, **"Bereits abgerechnet"**, beinhaltet die monatlich abgerechneten Ressourcen (Instanzen mit günstigerer, monatlicher Abrechnung). Diese Ressourcen sind eine Ausnahme von der Zahlungsmethode *Pay as you go*. Die Verbindlichkeiten werden monatlich in Rechnung gestellt und im Voraus gezahlt. Diese Zahlungsoption bietet Nutzern einen Kostenvorteil.

Der zweite Teil, **"Kommende Abrechnung"**, beinhaltet Ressourcen mit nutzungsabhängiger Abrechnung. Er zeigt die Verwendung Ihrer Ressourcen vom ersten Monat bis zum heutigen Tag.

Sie können zusätzlich im Bereich `Zu erwartender Rechnungsbetrag (Schätzung)`{.action} eine Vorhersage (für den 1. des nächsten Monats) auf der Grundlage einer Prognose des Ressourcenverbrauchs unter Berücksichtigung der aktuellen Situation und des voraussichtlichen Verbrauchs für den Rest des Monats erstellen.

> [!primary]
>
> Diese Informationen dienen lediglich der Information, da die jederzeit nach Ihren Aktionen ändern (Hinzufügen oder Löschen).
>

![public-cloud](images/pci-billing-information3-2021.png){.thumbnail}

Wenn Sie Benachrichtigungen erhalten möchten, wenn die Prognose für die Nutzung Ihrer Ressourcen einen festgelegten Schwellenwert überschreitet, können Sie diese hier konfigurieren. Sobald Ihre geplante Nutzung den festgelegten Grenzwert überschreitet, erhalten Sie eine E-Mail.

### Instanzen

Die Preise für Cloud-Instanzen (oder Cloud-Computing-Server) werden im OVHcloud Kundencenter angezeigt, bevor Sie eine Instanz erstellen. Sie können die Preise auch auf der [Produktseite](https://www.ovhcloud.com/de/public-cloud/prices/){.external} einsehen.

> [!primary]
>
> Die Bandbreite für Instanzen wird nicht berechnet.
>

Jeder Instanzentyp hat zwei mögliche Abrechnungsmethoden: stündlich und monatlich.

> [!warning]
>
> Die Abrechnung einer Instanz endet erst, wenn die Instanz gelöscht wird. Wenn die Instanz einen Status wie "angehalten" oder "ausgesetzt" hat, läuft der Abrechnungszähler weiter, da die Instanz damit nicht permanent entfernt wird. Bei beiden Abrechnungsmethoden wird der Dienst abhängig vom Nutzungszeitraum abgerechnet.
>

#### Stündliche Abrechnung

Diese Abrechnung erfolgt nach dem oben erläuterten Modell für die nutzungsabhängige Abrechnung.

Diese Instanzen werden am ersten Tag des Folgemonats für die Nutzungszeiten der Ressourcen im Vormonat bezahlt.

##### **Aussetzen einer Instanz (*shelve*)**

Es ist möglich, die stündlichen Instanzen temporär auszusetzen (*shelve*), um die für sie reservierten Ressourcen unter Beibehaltung der IP-Adresse freizugeben. In diesem Fall werden die Daten der Disk in einem Snapshot gespeichert, der automatisch erstellt wird. Es wird anschließend nur der Snapshot berechnet.

> [!warning]
>
> Dieser Prozess ist nur für die stündlich abgerechneten Instanzen möglich. Er beendet nicht die Abrechnung einer Instanz, reduziert aber deren Kosten.
>

Weitere Informationen zur Vorgehensweise finden Sie in [dieser Anleitung](https://docs.ovh.com/de/public-cloud/aussetzen_oder_pausieren_einer_instanz/).

#### Monatliche Abrechnung

Diese Abrechnung bietet eine Preissenkung von etwa 50% gegenüber der stündlichen Abrechnung. Dies ist typisch für Cloud-Ressourcen.

Jeder angefangene Monat wird in Rechnung gestellt, auch wenn die Instanz vor Monatsende gelöscht wurde.

### Storage

Die Speicherlösungen werden in der Regel mit einem GB pro Monat abgerechnet. Um den Preis pro GB und Stunde einzuschätzen, teilen Sie einfach den monatlichen Preis durch 720 (die durchschnittliche Stundenzahl pro Monat). Das Ergebnis dieser Berechnung sind die Kosten eines pro Stunde gespeicherten Elements.

Die Berechnung lautet: (Preis pro GB pro Monat */* 720) *x* Anzahl Stunden *x* Anzahl GB

Die Anzahl GB pro Stunde entspricht der maximalen Anzahl GB, die während einer Stunde gespeichert sind. Wenn ein Benutzer beispielsweise 15 GB um 16:20, 17 GB um 16:40 und 14 GB um 16:50 Uhr hat, berechnet OVHcloud 17 GB für den Zeitraum 16:00 - 17:00.

Die Preise für Storage sind auf der [OVHcloud Website](https://www.ovhcloud.com/de/public-cloud/storage/){.external} einsehbar.

#### Zusätzliche Volumes

Die zusätzlichen Volumes werden einfach pro GB abgerechnet, wobei der Preis je nach Dienstleistungsreihe unterschiedlich ist.

#### Backups zusätzlicher Volumes

Backups zusätzlicher Volumes werden auf die gleiche Weise abgerechnet wie die Volumes selbst.

#### Snapshots zusätzlicher Volumes

Snapshots zusätzlicher Volumes werden genauso abgerechnet wie die Volumes selbst.

#### Instanz-Snapshots und Images

Snapshots und Images von Instanzen (mit Ausnahme der von OVHcloud bereitgestellten Images) werden unabhängig von Instanz und Image-Typ zu einem pauschalen Preis per GB und Monat berechnet. Gehen Sie auf die [Produktseite](https://www.ovhcloud.com/de/public-cloud/prices/){.external}, um die Preise einzusehen.

#### Object Storage

Für Object Storage werden zwei Posten in Rechnung gestellt:

- Die Speicherung der Objekte selbst, d.h. das tatsächlich verwendete Volume nach GB.
- Ausgehender Traffic, d.h. das vom Dienst gesendete Datenvolumen, das im HTTP Body enthalten ist.

> [!primary]
>
> Der ausgehende Traffic zwischen dem Object Storage Dienst und den Instanzen wird auf die gleiche Weise berechnet wie der ausgehende Traffic, der über das Internet versendet wird.
>

> [!warning]
>
> Die Anzeige der gespeicherten Objekte über das OVHcloud Kundencenter wird ebenfalls als ausgehender Traffic gezählt.
>

#### Archive

Für den Archive Storage werden drei Elemente in Rechnung gestellt:

- Die Archivspeicherung selbst, d.h. das tatsächlich verwendete Volumen in GB
- Eingehender Traffic, d.h. das an den Dienst gesendete Datenvolumen, das im HTTP Body enthalten ist.
- Ausgehender Traffic, d.h. das vom Dienst gesendete Datenvolumen, das im HTTP Body enthalten ist.

> [!primary]
>
> Der ausgehende Traffic zwischen dem Archivierungsdienst und den Instanzen wird auf die gleiche Weise berechnet wie der ausgehende Traffic, der über das Internet versendet wird.
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
