---
title: "Wartungsarbeiten auf Ihrer Hosted Private Cloud verschieben"
excerpt: "Erfahren Sie hier, wie Sie geplante Wartungsarbeiten auf Ihrer Hosted Private Cloud Powered by VMware "
slug: wartungsarbeiten
section: OVHcloud Funktionen
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 30.11.2022**

## Ziel

Wenn Wartungsarbeiten geplant sind, die Ihre Hosted Private Cloud Infrastruktur betreffen, erhalten Sie eine Benachrichtigung per E-Mail, um Sie über das Datum dieser Wartungsarbeiten zu informieren. Wenn Ihnen das Datum nicht zusagt, etwa wegen Produktionserfordernissen, können Sie diese Wartungsarbeiten im OVHcloud Kundencenter oder über die OVHcloud API auf ein Datum Ihrer Wahl verschieben.

> [!primary]
> Wir versuchen, uns so weit wie möglich Ihrer Infrastrukturnutzung und Ihren Anforderungen anzupassen. Unter Umständen müssen wir jedoch Wartungsarbeiten vornehmen, bei denen es nicht möglich ist, Datum und/oder Uhrzeit zu ändern (beisielsweise Wartungsarbeiten an Infrastrukturen mit mehreren Kunden, dringende Eingriffe zur Vermeidung von Störungen, etc.).
>
> Zur Information: Wenn ein Wartungsdatum von Ihnen selbst geändert werden kann, sind die vorgeschlagenen neuen Termine innerhalb kürzerer Zeitperioden.

**Diese Anleitung erklärt, wie Sie das Datum für eine geplante Wartung an Ihrer Hosted Private Cloud powered by VMware über das OVHcloud Kundencenter oder die OVHcloud API verschieben.**

## Voraussetzungen

- Sie haben eine E-Mail mit der Benachrichtigung über die Wartungsarbeiten erhalten, in der ausdrücklich darauf hingewiesen wird, dass Sie **das Datum der Wartungsarbeiten** ändern können. Andernfalls können die Arbeiten nicht verschoben werden.
- Sie sind als administrativer oder technischer Kontakt für die [[Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) Infrastruktur eingetragen.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder auf die  [OVHcloud API ](https://eu.api.ovh.com/).

## In der praktischen Anwendung

> [!success]
> Benachrichtigungen von OVHcloud sind auch in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verfügbar.<br>
> Klicken Sie oben rechts auf Ihren Namen und dann im Menü auf `E-Mails von OVHcloud`{.action}.

### Im OVHcloud Kundencenter

Loggen Sie sich mit dem Administrator-Account in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein.

Wählen Sie im Bereich `Hosted Private Cloud`{.action} Ihren Dienst aus und klicken Sie auf den Tab `Operationen`{.action}. Wählen Sie im Drop-down-Menü `Verfügbar`{.action}, um die Tasks zu filtern.

Klicken Sie dann auf den Button `...`{.action} und dann auf `Bearbeitungsdatum ändern`{.action}.

![Änderung](images/maintenance-date-edition01.png){.thumbnail}

> [!primary]
> Wenn `Bearbeitungsdatum ändern`{.action} grau ist, kann diese Wartungsarbeit nicht verschoben werden.

Wählen Sie ein Datum im Kalender aus. Es können nur Tage gewählt werden, die nicht in Grau erscheinen.<br>
Geben Sie anschließend einen neuen Zeitpunkt für diese Wartungsarbeiten ein oder lassen Sie die Uhrzeit unverändert. Wenn Sie den letzten möglichen Zeitraum überschreiten, wird automatisch die letzte mögliche Zeit angeboten.<br>
**Achtung!** Damit er berücksichtigt werden kann, darf der neue Zeitpunkt nicht mehr blau angezeigt werden. Wenn Sie den neuen Zeitplan eingegeben haben, klicken Sie im Fenster neben diesem, damit der Fahrplan nicht mehr in Blau erscheint.

Klicken Sie anschließend auf den Button `Ändern`{.action}, um Ihre Planung zu bestätigen.

![Änderung](images/maintenance-date-edition02.png){.thumbnail}

### Mit der OVHcloud API

Loggen Sie sich in der [OVHcloud API-Konsole](https://eu.api.ovh.com/) ein. Folgen Sie falls nötig unserer Anleitung "[Erste Schritte mit der OVHcloud API](https://docs.ovh.com/de/api/first-steps-with-ovh-api/)".

Führen Sie folgenden Aufruf aus:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate
>

Geben Sie die Werte ein:

- **serviceName** Die ID Ihrer Hosted Private Cloud Infrastruktur in der Form `pcc-XX-XX-XX-XX`.
- **taskId**: Hierbei handelt es sich um die Referenz der Wartung, die Ihnen in der Benachrichtigung per E-Mail mitgeteilt wurde.
- **executionDate**: Geben Sie das neue Wartungsdatum ein, im Format `YYYY-MM-DDTHH:MM+01:SS` (Beispiel: 2023-01-02T08:00:00+01:00 für die Wartung zum Zeitpunkt 02/01/2023, 08.00 (UTC+1)).

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.