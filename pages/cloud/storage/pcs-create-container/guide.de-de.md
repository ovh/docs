---
title: Erstellung von Object Storage Containern
slug: pcs/container-erstellen
excerpt: Hier erfahren Sie, wie Sie Ihre Object Storage Container über Ihr OVHcloud Kundencenter erstellen.
section: Object Storage Standard (Swift)
order: 110
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 27.10.2021**

## Ziel

Das Object Storage Angebot für die Public Cloud bietet eine unbegrenzte Speicherlösung mit einfacher Abrechnung und Ihren Bedürfnissen. Es gibt zahlreiche Arten von Objekt-Containern:

- für statisches Hosting (statische Website);
- für privates Hosting (Beispiel: Speicherung personenbezogener Daten);
- für öffentliches Hosting (zur Speicherung von allen öffentlich zugänglichen Daten);
- für Cold Storage (Archivierung).

Der erste Schritt ist die Erstellung eines Containers, der Ihre Dateien zusammenfasst. 

**In dieser Anleitung erfahren Sie, wie Sie die Datei über Ihr OVHcloud Kundencenter und das OpenStack Horizon Interface erstellen.**

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angemeldet.

Wenn Sie Horizon verwenden:

- Sie haben einen [OpenStack-Benutzer erstellt](https://docs.ovh.com/de/public-cloud/openstack-user-erstellen-loeschen/).

## In der praktischen Anwendung

### Erstellung eines Object Storage Containers über das OVHcloud Kundencenter

Loggen Sie sich in Ihr [Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie das betreffende Public Cloud Projekt aus. Klicken Sie dann auf `Object Storage`{.action}, im linken Menü unter `Storage`.

Klicken Sie anschließend auf `Objektcontainer erstellen`{.action}.

Wenn es sich um Ihren ersten Container handelt:

![Dashboard PCS](images/create-container-20211005102334181.png)

Wenn Sie bereits einen oder mehrere Container erstellt haben:

![Dashboard PCS](images/create-container-20211005115040834.png)

Wählen Sie Ihre Lösung aus und klicken Sie auf `Weiter`{.action}:

![select your solution](images/create-container-20211005110710249.png)

Wählen Sie die Region Ihres Containers aus und klicken Sie dann auf `Weiter`{.action}:

![select a region](images/create-container-20211005110859551.png)

Wählen Sie den Container-Typ aus und klicken Sie dann auf `Weiter`{.action}:

![select a type of container](images/create-container-20211005111542718.png)

Benennen Sie Ihren Container und klicken Sie dann auf `Container hinzufügen`{.action}:

> [!warning]
>
> Wenn Sie Ihren Container mit einem Domainnamen verbinden möchten, darf der Name Ihres Containers folgende Zeichen nicht enthalten: 
> 
> - [ . ]
> - [ _ ] 
> - und Sie dürfen keine Großbuchstaben verwenden.
>
> Weitere Informationen finden Sie in unserer Anleitung "[Container mit einer Domain](https://docs.ovh.com/de/storage/einem_object_storage_container_eine_spezifische_domain_zuweisen/) verbinden".
>

![container](images/create-container-20211005111805966.png)

Ihr Container wurde erstellt:

![container created](images/create-container-20211005112013807.png)

### Erstellung eines Object Storage Containers über Horizon

> [!primary]
>
> Es ist nicht möglich, über Horizon einen Public Cloud Archive Container zu erstellen
>

Loggen Sie sich in Ihren [Horizon-Bereich ein](https://horizon.cloud.ovh.net){.external}:

![Login](images/create-container-20211005155245752.png)

Erweitern Sie das Menü `Object Store`{.action}, klicken Sie auf `Containers`{.action} und dann auf `+ Container`{.action}

![Horizon Container](images/create-container-20211005155704887.png)

Nennen Sie Ihren Container.

> [!warning]
>
> Wenn Sie Ihren Container mit einem Domainnamen verbinden möchten, darf der Name Ihres Containers folgende Zeichen nicht enthalten:
> 
> - [ . ]
> - [ _ ] 
> - und Sie dürfen keine Großbuchstaben verwenden.
>
> Weitere Informationen finden Sie in unserer Anleitung "[Container mit einer Domain](https://docs.ovh.com/de/storage/einem_object_storage_container_eine_spezifische_domain_zuweisen/) verbinden".
>

Wählen Sie die Zugangseinstellungen für Ihren Container aus und klicken Sie dann auf `Next`{.action}

![Horizon Create](images/create-container-20211005155824902.png)

Ihr Container wurde erstellt.

![horizon created](images/create-container-20211005155936971.png)

Sie können dies auch in Ihrem OVHcloud Kundencenter sehen:

![Dashboard PCS](images/create-container-20211005160503200.png)

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/).
