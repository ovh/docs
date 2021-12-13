---
title: "Kopie einer VM von der Wiederherstellungswebsite Zerto löschen"
slug: zerto-vm-replica-deletion
excerpt: Hier erfahren Sie, wie Sie eine VM nach ihrer Löschung aus der Quell-Seite von der Wiederherstellungswebsite löschen.
section: OVHcloud Dienste und Optionen
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 09.12.2021**

## Ziel

Wenn eine VM freiwillig von der Quellseite gelöscht wird, unterbricht die VPG Zerto die Synchronisierung und führt eine Fehlermeldung durch.<br>
Die Dateien der Kopie der VM befinden sich weiterhin auf der Zielseite.<br>
Dieses Dokument zeigt, wie diese Dateien gelöscht und die VPG wieder in Betrieb genommen werden können.

**Verwenden Sie das Zerto Interface, um eine Kopie einer VM von der Zielseite zu löschen.**

## Voraussetzungen

- Sie sind Administrator-Kontakt der [Hosted Private Cloud Infrastruktur](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/), um Login-Daten zu erhalten.
- Sie haben eine aktive Benutzerkennung mit spezifischen Rechten für Zerto (erstellt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de))
- [Zerto Virtual Replication](https://docs.ovh.com/de/private-cloud/zerto-virtual-replication-vmware-vsphere-drp/) deployt

## In der praktischen Anwendung

Überprüfen Sie im Zerto-Interface der Zielseite die `VPGs`{.action} und `VMs`{.action}.<br>
In unserem Beispiel enthält VPG1 zwei VMs, vm1-zerto und vm2-zerto. Der Status der Website-Synchronisation ist korrekt.

![Dash](images/en01sync.png){.thumbnail}

Im vSphere Interface der Quellseite wird vm2-zerto absichtlich gelöscht.<br>
VM und Festplatten werden gelöscht.

![VM](images/en02vmdelete.png){.thumbnail}

Im Zerto-Interface der Zielseite gibt die VPG eine Pause bei der Synchronisierung und führt eine Fehlermeldung durch. Die VM vm2-zerto ist grau.

![VM](images/en03vpgerror.png){.thumbnail}

Setzen Sie im Tab `VPGs`{.action} ein Häkchen bei VPG1 und im Menü `Actions`{.action} auf `Edit VPG`{.action}.

![VPG](images/en04vpgedit.png){.thumbnail}

Entfernen Sie bei `VMs`{.action} vm2-zerto aus dem `selected VMS` Bereich (kreuzen Sie die VM an und klicken Sie auf den nach links gerichteten Pfeil).<br>
CLlquez auf `Done`{.action}.

![VPG](images/en05vpgremove.png){.thumbnail}

Klicken Sie im Warnfenster auf `No`{.action}. Die Festplatte für das Abruf muss normalerweise nicht gesichert werden.

![VPG](images/en06warning.png){.thumbnail}

Die VPG wird sich erneut synchronisieren und mit einer einzigen VM innerhalb der VPG wieder funktionsfähig werden.

![DONE](images/en07green.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
