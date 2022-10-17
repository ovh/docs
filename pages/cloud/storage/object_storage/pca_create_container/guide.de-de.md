---
title: Object Storage Swift - Erstellung von Public Cloud Archive Containern
slug: pca/erstellen-von-containern
excerpt: Erfahren Sie hier, wie Sie Ihre Public Cloud Archive Container über Ihr OVHcloud Kundencenter erstellen
section: OpenStack Swift Archive Storage Class Specifics
order: 020
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 27.10.2021**

## Ziel

Public Cloud Archive ist eine unbegrenzte Speicherlösung mit einfacher Abrechnung und auf Ihren Bedarf angepasst. Es gibt mehrere Arten von Objekt-Containern:

- für statisches Hosting (statische Website)
- für privates Hosting (Beispiel: Speicherung personenbezogener Daten)
- für öffentliches Hosting (zur Speicherung von allen öffentlich zugänglichen Daten)
- für Cold Storage (Archivierung)

Der erste Schritt ist die Erstellung eines Containers, der Ihre Dateien zusammenfasst.

**Diese Anleitung erklärt, wie Sie über Ihr OVHcloud Kundencenter einen Container erstellen.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Erstellung eines Public Cloud Archive Containers über das OVHcloud Kundencenter

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action} und wählen Sie anschließend Ihr Projekt aus. Klicken Sie im linken Menü auf `Cloud Archive`{.action} unter `Storage`.

Wenn es sich um Ihren ersten Container handelt:

![pca dashboard](images/create-container-20211006094158312.png)

Wenn Sie bereits einen oder mehrere Container erstellt haben:

![pca dashboard](images/create-container-20211006094851682.png)

Wählen Sie die Region Ihres Containers aus und klicken Sie auf `Weiter`{.action}:

![region](images/create-container-20211006094448923.png)

Benennen Sie Ihren Container und klicken Sie dann auf `Container hinzufügen`{.action}:

> [!warning]
>
> Wenn Sie Ihren Container mit einem Domainnamen verbinden möchten, darf der Name Ihres Containers folgende Zeichen nicht enthalten:
>
> - [ . ]
> - [ _ ]
> - Es dürfen weiterhin keine Großbuchstaben enthalten sein.
>
> Weitere Informationen finden Sie in unserer Anleitung zum [Verbinden eines Container mit einer Domain](https://docs.ovh.com/de/storage/einem_object_storage_container_eine_spezifische_domain_zuweisen/).
>

![container](images/create-container-20211006094550334.png)

Ihr Container wurde erstellt:

![container created](images/create-container-20211006094630754.png)

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
