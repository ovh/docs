---
title: Migration von Daten von einem NAS auf ein anderes über NFS
slug: nas/nas-migration
excerpt: Hier erfahren Sie, wie Sie Ihre Daten über eine NFS-Freigabe von einem NAS auf einen anderen migrieren.
section: NAS
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 09.02.2021**

## Ziel

In dieser Anleitung erfahren Sie, wie Sie Daten von einem NAS auf ein anderes übertragen. 

## Voraussetzungen

Um Ihre Daten zu übertragen, benötigen Sie:

- Un NAS OVHcloud / mini-NAS OVHcloud / NAS-HA OVHcloud
- Eine mit NFS kompatible Distribution
- Sie haben Ihr NAS im Voraus nach der Anleitung gemountet, um [Ihr NAS über eine NFS-Freigabe zu mounten](https://docs.ovh.com/de/storage/nas-nfs/){.external}.

## In der praktischen Anwendung

Kompatibilität: Debian 6/7/8 & Ubuntu 12/13/14

Um Ihre Daten zu übertragen, verwenden wir den Befehl `rsync`. Es gibt mehrere Lösungen für den Datentransfer. Es steht Ihnen frei, eine zu verwenden, anstatt eine andere.

Das nachstehende Beispiel erlaubt es, Ihre Daten von einem Source-Mountpunkt auf einen Ziel-Mountpunkt zu übertragen.

```sh
rsync -Pva /mnt/SrcNas /mnt/DstNas
```

|Argument|Beschreibung|
|---|---|
|SrcNas|Source-Mountpunkt|
|DstNas|Ziel-Mountpunkt|

> [!alert]
>
> Achtung, wenn Sie weitere rsync-Optionen hinzufügen, sind diese möglicherweise nicht mit dem HA-NAS-Berechtigungssystem kompatibel.
>

## Weiterführende Informationen

Für den Austausch mit unserer User-Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.