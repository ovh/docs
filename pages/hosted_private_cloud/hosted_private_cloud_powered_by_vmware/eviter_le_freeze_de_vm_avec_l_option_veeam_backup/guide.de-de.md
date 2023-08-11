---
title: 'Einfrieren virtueller Maschinen mit Veeam Managed Backup Option vermeiden'
excerpt: 'Hier erfahren Sie, wie Sie eine Workaround-Lösung mithilfe von VMware-DRS-Regeln einrichten, um VM-Freeze zu vermeiden.'
updated: 2022-02-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 22.02.2022**

## Ziel

Wenn Sie während des Backup-Prozesses einen Snapshot Ihrer virtuellen Maschine aus dem NFS-Datastore löschen, kann es vorkommen, dass Ihre VM für 30 Sekunden blockiert oder die Festplatte gesperrt wird.
Dies passiert, weil der Snapshot Ihrer virtuellen Maschine auf dem Backup Proxy installiert ist, der auf einem anderen Host läuft. Wenn der Proxy und die virtuelle Maschine sich auf demselben Host befinden, kommt es nicht zu dieser Störung.

**In dieser Anleitung erfahren Sie, wie Sie VM-Freeze mithilfe von VMware-DRS-Regeln vermeiden.**

## Voraussetzungen

- Sie sind Administrator-Kontakt für die [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) Infrastruktur, um Login-Daten zu erhalten.
- Sie haben eine aktive Benutzerkennung (erstellt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben die Option [Veeam Managed Backup](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/veeam-backup-managed/){.external} aktiviert.

## In der praktischen Anwendung

> [!primary]
>
> Bevor Sie beginnen, beachten Sie bitte Folgendes:
>
> - In größeren Umgebungen kann die Erstellung mehrerer DRS-Regeln sehr lange dauern.
> - Der Benutzer muss neue virtuelle Maschinen manuell zu den DRS-Regeln hinzufügen.
> - Alle virtuellen Maschinen, für die Backups erstellt werden, die jedoch nicht in den DRS-Regeln enthalten sind, können weiterhin blockiert werden.
>

Um diese Lösung umzusetzen, klicken Sie auf den entsprechenden Cluster, gehen Sie auf den Tab `Configure`{.action} und dann auf den Abschnitt `VM/Host Rules`{.action}.

![vSphere](images/en01add.png){.thumbnail}

Erstellen Sie eine DRS-Regel, **Keep virtual machines together** und fügen Sie sie zu einem Backup Proxy hinzu. Wenn Sie eine große Anzahl virtueller Maschinen sichern möchten, können Sie mehrere DRS-Regeln erstellen und sie mit mehreren Backup Proxys verbinden. Der OVH Algorithmus stellt sicher, dass der Backup-Prozess der virtuellen Maschine vom Backup Proxy auf demselben ESXi-Host ausgeführt wird wie die virtuelle Maschine.

> [!warning]
>
> Wenn Sie einen neuen Backup Proxy hinzufügen, verursacht dies zusätzliche Kosten.
>

![proxy](images/en02proxy.png){.thumbnail}

Erstellen Sie eine weitere DRS-Regel für **Separate virtual machines**, damit die Backup Proxys auf verschiedenen Hosts verbleiben.

![proxy](images/en03proxy2.png){.thumbnail}

Bitte beachten Sie, dass eine Anti-Affinitätsregel eingerichtet sein muss, damit sich die Backup Proxys nie auf demselben Host befinden, und dass Sie so viele Affinitätsregeln wie Backup Proxys benötigen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
