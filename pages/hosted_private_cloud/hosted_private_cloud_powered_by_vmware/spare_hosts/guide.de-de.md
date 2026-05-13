---
title: Spare-Host Auslieferung und Rückgabe
excerpt: Erfahren Sie hier, wie die Bereitstellung eines Spare-Hosts abläuft
updated: 2026-05-12
---

## Ziel

In den Verträgen von OVHcloud wird der Ersatz eines unzugänglichen Hosts garantiert.

**Diese Anleitung erklärt, wie der Austausch funktioniert.**

## Voraussetzungen

- Sie verfügen über eine [Hosted Private Cloud](/links/hosted-private-cloud/vmware) Infrastruktur.

## In der praktischen Anwendung

### Lieferung eines Ersatz-Hosts

Wenn einer Ihrer Hosts ausfällt, liefern wir Ihnen automatisch und kostenfrei einen Ersatz-Host in Ihre Infrastruktur, um die Dienstkontinuität zu gewährleisten.

Sofort nach Lieferung dieses Hosts erhalten Sie eine E-Mail mit allen Informationen zu diesem Host. Sie erhalten auch seine IP-Adresse, mit der Sie ihn leicht in Ihrem vSphere Interface finden können.

Standardmäßig ist der Dienst [HA (High Availability)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ha_high_availability) von VMware für Ihren Cluster aktiviert. Wenn Sie ihn aktiviert lassen, werden Ihre virtuellen Maschinen automatisch neu gestartet. Ist der Dienst [DRS (Distributed Resource Scheduler)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new) aktiviert und im Modus "Vollautomatisiert", so findet die Lastverteilung zwischen den Hosts Ihres Clusters ebenfalls automatisch statt.

> [!warning]
> 
> Ist noch ein CD/DVD-Laufwerk auf einer VM installiert oder mit ihr verbunden, so kann der Dienst HA die VM nicht auf dem Ersatz-Host neu starten. Es wird empfohlen, das CD/DVD-Laufwerk immer als Clientgerät einzurichten.
>

### Vorgehensweise nach Erhalt des Ersatz-Hosts

Wir empfehlen Ihnen, uns den Original-Host zurückzugeben, damit wir ihn nach dieser Störung einer Reihe von Tests unterziehen (und so zukünftige Störungen vermeiden) können. Sie können dann den Ersatz-Host behalten. Dazu können Sie die Anleitung [Host-Server löschen](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/delete_host) zu Rate ziehen.

> [!warning]
> 
> Im Falle der Nichtrückgabe eines der beiden Hosts (Original oder Ersatz) innerhalb einer Frist von 7 Tagen wird der Ersatz-Host ab dem 8. Tag stundenweise abgerechnet.
>

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.
