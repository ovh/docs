---
title: 'Einfrieren virtueller Maschinen mit Veeam Managed Backup Option vermeiden'
slug: vm-freeze-mit-veeam-backup-option-vermeiden
excerpt: 'Hier erfahren Sie, wie Sie eine Workaround-Lösung mithilfe von VMware-DRS-Regeln einrichten, um VM-Freeze zu vermeiden.'
section: 'Verwaltung virtueller Maschinen'
order: 7
---

**Stand 19.07.2019**

## Einleitung

Wenn Sie während des Backup-Prozesses einen Snapshot Ihrer virtuellen Maschine aus dem NFS-Datastore löschen, kann es vorkommen, dass Ihre VM für 30 Sekunden blockiert oder die Festplatte gesperrt wird.
Dies passiert, weil der Snapshot Ihrer virtuellen Maschine auf dem Backup Proxy installiert ist, der auf einem anderen Host läuft. Wenn der Proxy und die virtuelle Maschine sich auf demselben Host befinden, kommt es nicht zu dieser Störung.

**In dieser Anleitung erfahren Sie, wie Sie VM-Freeze mithilfe von VMware-DRS-Regeln vermeiden.**

## Voraussetzungen

- Sie verfügen über eine [Private Cloud](https://www.ovh.de/private-cloud/){.external} Lösung.
- Die Option [Veeam Managed Backup](https://www.ovh.de/private-cloud/optionen/veeam.xml){.external} ist aktiviert.
- Sie haben Zugriff auf das vSphere-Verwaltungsinterface.

## Beschreibung

### Vorgehensweise

> [!primary]
>
> Bevor Sie beginnen, beachten Sie bitte Folgendes:
>
> - In umfangreichen Umgebungen kann die Erstellung mehrerer DRS-Regeln sehr lange dauern.
> - Der Benutzer muss neue virtuelle Maschinen manuell zu den DRS-Regeln hinzufügen.
> - Alle virtuellen Maschinen, für die Backups erstellt werden, die jedoch nicht in den DRS-Regeln enthalten sind, können weiterhin blockiert werden.
>


Um diese Lösung umzusetzen, klicken Sie mit der rechten Maustaste auf den zugehörigen Cluster und bearbeiten Sie die Einstellungen.

Erstellen Sie eine DRS-Regel, um die **virtuellen Maschinen zusammenzuhalten** und fügen Sie sie zu einem Backup Proxy hinzu. Wenn Sie eine große Anzahl virtueller Maschinen sichern möchten, können Sie mehrere DRS-Regeln erstellen und sie mit mehreren Backup Proxys verbinden. Der OVH Algorithmus stellt sicher, dass der Backup-Prozess der virtuellen Maschine vom Backup Proxy auf demselben ESXi-Host ausgeführt wird wie die virtuelle Maschine.

> [!warning]
>
> Wenn Sie einen neuen Backup Proxy hinzufügen, verursacht dies zusätzliche Kosten.
>

Im DRS-Bereich können Sie wie folgt eine Regel hinzufügen:

![](images/image0_7.png){.thumbnail}

Erstellen Sie eine andere DRS-Regel für **separate virtuelle Maschinen**, damit die Backup Proxys auf verschiedenen Hosts verbleiben.

![](images/image0_28.png){.thumbnail}

Erstellen Sie eine Gruppe virtueller Maschinen, geben Sie den Namen der Gruppe ein und fügen Sie den Host zu der Regel hinzu:

![](images/image1_9.png){.thumbnail}

Bitte beachten Sie, dass eine Anti-Affinitätsregel eingerichtet sein muss, damit sich die Backup Proxys nie auf demselben Host befinden, und dass Sie so viele Affinitätsregeln wie Backup Proxys benötigen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.