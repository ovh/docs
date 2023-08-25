---
title: Spare-Hosts
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/spare_hosts'
excerpt: Bereitstellung eines Spare-Hosts in Managed Bare Metal
updated: 2020-11-18
---



## Voraussetzungen

- Sie nutzen einen [Managed Bare Metal](https://www.ovhcloud.com/de/managed-bare-metal/) Dienst.

## Einleitung

In den Verträgen von OVHcloud wird der Ersatz eines unzugänglichen Hosts garantiert.

**Diese Anleitung erklärt, wie der Austausch funktioniert.**

## Lieferung eines Ersatz-Hosts

Wenn einer Ihrer Hosts ausfällt, liefern wir Ihnen automatisch und kostenfrei einen Ersatz-Host in Ihre Infrastruktur, um die Dienstkontinuität zu gewährleisten. 

Sofort nach Lieferung dieses Hosts erhalten Sie eine E-Mail mit allen Informationen zu diesem Host. Sie erhalten auch seine IP-Adresse, mit der Sie ihn leicht in Ihrem vSphere Interface finden können.

Standardmäßig ist der Dienst HA ([High Availability](/pages/bare_metal_cloud/managed_bare_metal/vmware_ha_high_availability)) von VMware für Ihren Cluster aktiviert. Wenn Sie Ihn aktiviert lassen, werden Ihre virtuellen Maschinen automatisch neu gestartet. Ist der Dienst DRS (Distributed Ressources Scheduler) aktiviert und im Modus “fully automated”, so findet die Lastverteilung zwischen den Hosts Ihres Clusters ebenfalls automatisch statt.

> [!warning]
> 
> Ist noch ein CD/DVD-Laufwerk auf einer VM installiert oder mit ihr verbunden, so kann der Dienst HA nicht auf dem Ersatz-Host gestartet werden. Es wird empfohlen, das CD/DVD-Laufwerk immer als Clientgerät einzurichten.
>

## Ersatz-Host erhalten. Was nun?

Wenn der Original-Host wieder funktioniert (nach der Reparatur), können Sie einen der beiden Hosts (Original oder Ersatz) an uns zurückgeben.

Wir empfehlen Ihnen, uns den Original-Host zurückzugeben, damit wir ihn nach dieser Störung einer Reihe von Tests unterziehen (und so zukünftige Störungen vermeiden) können. Sie können dann den Ersatz-Host behalten. Dazu können Sie die Anleitung [Host-Server löschen](/pages/bare_metal_cloud/managed_bare_metal/delete_host) zu Rate ziehen.

OVHcloud kann dann automatisch den Original-Host zurücknehmen, sobald er entfernt ist.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
