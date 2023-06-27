---
title: Migration von Daten von einem HA-NAS auf ein anderes über NFS
excerpt: Erfahren Sie hier, wie Sie Ihre Daten über eine NFS-Freigabe von einem HA-NAS auf ein anderes migrieren.
updated: 2021-02-09
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 20.02.2021**

## Ziel

Diese Anleitung erklärt, wie Sie Daten von einem HA-NAS auf ein anderes übertragen.

## Voraussetzungen

- OVHcloud HA-NAS.
- Eine mit NFS kompatible Distribution.
- Sie haben Ihr NAS bereits gemountet, nach [dieser Anleitung](/pages/cloud/storage/file_storage/nas_nfs).

## In der praktischen Anwendung

Kompatibilität: Debian 6/7/8 & Ubuntu 12/13/14

Um Ihre Daten zu übertragen, verwenden wir den Befehl `rsync`. Es gibt mehrere Lösungen für den Datentransfer. Es steht Ihnen frei, eine beliebige zu verwenden.

Das nachstehende Beispiel erlaubt es, Ihre Daten von einem Quell-Mountpunkt auf einen Ziel-Mountpunkt zu übertragen.

```sh
rsync -Pva /mnt/SrcNas /mnt/DstNas
```

|Argument|Beschreibung|
|---|---|
|SrcNas|Quell-Mountpunkt|
|DstNas|Ziel-Mountpunkt|

> [!alert]
>
> Achtung, wenn Sie weitere Optionen zu `rsync` hinzufügen, sind diese möglicherweise nicht mit dem HA-NAS-Berechtigungssystem kompatibel.
>

## Weiterführende Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
