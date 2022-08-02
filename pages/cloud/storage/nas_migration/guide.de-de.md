---
title: Migration von Daten von einem HA-NAS auf ein anderes über NFS
slug: nas/nas-migration
excerpt: Erfahren Sie hier, wie Sie Ihre Daten über eine NFS-Freigabe von einem HA-NAS auf ein anderes migrieren.
section: NAS
order: 05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 20.02.2021**

## Ziel

Diese Anleitung erklärt, wie Sie Daten von einem HA-NAS auf ein anderes übertragen. 

## Voraussetzungen

- OVHcloud HA-NAS.
- Eine mit NFS kompatible Distribution.
- Sie haben Ihr NAS bereits gemountet, nach [dieser Anleitung](https://docs.ovh.com/de/storage/nas-nfs/).

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

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
