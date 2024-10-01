---
title: Object Storage Swift - Erstellung von Object Storage Containern
excerpt: Erfahren Sie hier, wie Sie Ihre Object Storage Container über das OVHcloud Kundencenter erstellen
updated: 2021-10-27
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Das Object Storage Angebot für Public Cloud bietet eine unbegrenzte Speicherlösung mit einfacher Abrechnung und auf Ihren Bedarf angepasst. Es gibt mehrere Arten von Objekt-Containern:

- für statisches Hosting (statische Website)
- für privates Hosting (Beispiel: Speicherung personenbezogener Daten)
- für öffentliches Hosting (zur Speicherung von allen öffentlich zugänglichen Daten)
- für Cold Storage (Archivierung)

Der erste Schritt ist die Erstellung eines Containers, der Ihre Dateien zusammenfasst.

**Diese Anleitung erklärt, wie Sie Container über Ihr OVHcloud Kundencenter und das OpenStack Horizon Interface erstellen.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

Wenn Sie Horizon verwenden:

- Sie haben einen [OpenStack User erstellt](/pages/public_cloud/compute/create_and_delete_a_user).

## In der praktischen Anwendungy    

### Erstellung eines Object Storage Containers über das OVHcloud Kundencenter <a name="controlpanel"></a>

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action} und wählen Sie anschließend Ihr Projekt aus. Klicken Sie im linken Menü auf `Object Storage`{.action} unter `Storage`.

Klicken Sie anschließend auf `Objektcontainer erstellen`{.action}.

Wenn es sich um Ihren ersten Container handelt:

![Dashboard PCS](images/create-container-20211005102334181.png)

Wenn Sie bereits einen oder mehrere Container erstellt haben:

![Dashboard PCS](images/create-container-20211005115040834.png)

Wählen Sie Ihre Lösung aus und klicken Sie auf `Weiter`{.action}:

![select](images/create-container-20211005110710249.png)

Wählen Sie die Region Ihres Containers aus und klicken Sie dann auf `Weiter`{.action}:

![region select](images/create-container-20211005110859551.png)

Wählen Sie den Container-Typ aus und klicken Sie dann auf `Weiter`{.action}:

![type of container](images/create-container-20211005111542718.png)

Benennen Sie Ihren Container und klicken Sie dann auf `Container hinzufügen`{.action}:

> [!warning]
>
> Wenn Sie Ihren Container mit einem Domainnamen verbinden möchten, darf der Name Ihres Containers folgende Zeichen nicht enthalten:
>
> - [ . ]
> - [ _ ]
> - Es dürfen weiterhin keine Großbuchstaben enthalten sein.
>
> Weitere Informationen finden Sie in unserer Anleitung zum [Verbinden eines Container mit einer Domain](/pages/storage_and_backup/object_storage/pcs_link_domain).
>

![container](images/create-container-20211005111805966.png)

Ihr Container wurde erstellt:

![container created](images/create-container-20211005112013807.png)

### Erstellung eines Object Storage Containers über Horizon <a name="horizon"></a>

> [!primary]
>
> Es ist nicht möglich, über Horizon einen Public Cloud Archive Container zu erstellen.
>

Loggen Sie sich im [Horizon Interface ein](https://horizon.cloud.ovh.net){.external}:

![Login](images/create-container-20211005155245752.png)

Erweitern Sie das Menü `Object Store`{.action}, klicken Sie auf `Containers`{.action} und dann auf `+ Container`{.action}

![Horizon Container](images/create-container-20211005155704887.png)

Benennen Sie Ihren Container.

> [!warning]
>
> Wenn Sie Ihren Container mit einem Domainnamen verbinden möchten, darf der Name Ihres Containers folgende Zeichen nicht enthalten:
>
> - [ . ]
> - [ _ ]
> - Es dürfen weiterhin keine Großbuchstaben enthalten sein.
>
> Weitere Informationen finden Sie in unserer Anleitung zum [Verbinden eines Container mit einer Domain](/pages/storage_and_backup/object_storage/pcs_link_domain).
>

Wählen Sie die Zugangseinstellungen für Ihren Container aus und klicken Sie dann auf `Next`{.action}.

![Horizon Create](images/create-container-20211005155824902.png)

Ihr Container wurde erstellt.

![horizon created](images/create-container-20211005155936971.png)

Sie können dies auch in Ihrem OVHcloud Kundencenter sehen:

![Dashboard PCS](images/create-container-20211005160503200.png)

## Weiterführende Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
