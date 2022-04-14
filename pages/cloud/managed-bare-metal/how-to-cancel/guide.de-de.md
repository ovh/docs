---
title: Managed Bare Metal kündigen
slug: eine-managed-bare-metal-kuendigen
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/eine-private-cloud-kuendigen/'
excerpt: Erfahren Sie hier, wie Sie eine Managed Bare Metal Infrastruktur kündigen können
section: OVHcloud Funktionen
---

**Letzte Aktualisierung am 18.11.2020**

## Ziel

Unser Managed Bare Metal Angebot entspricht nicht mehr Ihren Anforderungen? Oder haben Sie eine neue Infrastruktur bestellt, um die alte zu ersetzen? Dann können Sie diese Infrastruktur kündigen, sobald Sie alle Ihre dort gespeicherten Daten gesichert haben.  

**Diese Anleitung erklärt, wie Sie eine Managed Bare Metal kündigen können.** 

## Voraussetzungen

- Sie verfügen über eine [Managed Bare Metal](https://www.ovhcloud.com/de/managed-bare-metal/) Infrastruktur.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).


## In der praktischen Anwendung

>[!warning]
>
> Bevor Sie Ihre Managed Bare Metal kündigen, achten Sie bitte darauf, alle Daten sicherzustellen, die Sie behalten möchten. Mit der Kündigung geht nämlich das komplette Löschen Ihrer Managed Bare Metal und aller darin enthaltener Daten einher.
>

### Schritt 1: Beantragen Sie die Kündigung in Ihrem OVHcloud Kundencenter

Melden Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} an, gehen Sie in den Bereich `Bare Metal Cloud`{.action} (1), klicken Sie auf `Managed Bare Metal`{.action} (2) und wählen Sie die Managed Bare Metal aus der Liste aus (3), die Sie kündigen möchten.

Klicken Sie im Reiter “Allgemeine Informationen” in der Tabelle “Dienstverwaltung” auf den Button `...`{.action} (4) rechts neben dem Datum der Verlängerung. Klicken Sie dann auf `Dienst löschen`{.action} (5).

![Kündigung über das Kundencenter](images/resiliation1.png){.thumbnail}

Bitte beachten Sie, dass diese Aktion alle Daten auf dieser Infrastruktur löscht, sobald Sie die Kündigung bestätigen. Bei einer Kündigung vor Monatsende erfolgt keine anteilige Rückzahlung.

Klicken Sie auf `Bestätigen`{.action} um die Kündigung zu beantragen.

![Bestätigung der Kündigung](images/resiliation2.png){.thumbnail}

Sie sehen dann eine Bestätigung Ihres Antrags. Die Bestätigung der Kündigung wird Ihnen per E-Mail an die Adresse zugesandt, die mit dem Account bei OVHcloud verbunden ist.

![Bestätigung der Kündigung](images/resiliation3.png){.thumbnail}

### Schritt 2: Die Kündigung bestätigen

Aufgrund Ihrer Anfrage wird Ihnen eine Bestätigung der Kündigung per E-Mail an die Adresse zugesandt, die mit dem Account bei OVHcloud verbunden ist. 

Diese E-Mail können Sie auch in Ihrem OVHcloud Kundencenter einsehen. Klicken Sie auf Ihren Namen oben rechts, dann auf `E-Mails vom Support`{.action}.

![Bestätigung der Kündigung](images/resiliation4.png){.thumbnail}

Der Betreff der E-Mail ist:

> **Löschen Ihrer Managed Bare Metal pcc-xxx-xxx-xxx-xxx**.

Die E-Mail enthält einen Link, über den Sie die Kündigung Ihrer Managed Bare Metal bestätigen können.

> [!primary]
>
> Bitte beachten Sie, dass dieser Link nur **72 Stunden** gültig ist. Wir empfehlen Ihnen daher, die Kündigung ab dem 25\. eines Monats zu beantragen.
>

Außerdem können Sie den Antrag auf Kündigung über folgendes API von OVHcloud bestätigen:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/confirmTermination
>

In diesem Fall müssen Sie das Token zur Bestätigung eingeben. Es befindet sich in der E-Mail zur Bestätigung der Kündigung.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
