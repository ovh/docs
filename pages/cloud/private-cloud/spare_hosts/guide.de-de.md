---
title: Spare-Host Auslieferung und Rückgabe
excerpt: Erfahren Sie hier, wie die Bereitstellung eines Spare-Hosts abläuft
updated: 2020-06-29
---


**Letzte Aktualisierung am 17.07.2020**

## Ziel

In den Verträgen von OVHcloud wird der Ersatz eines unzugänglichen Hosts garantiert.

**Diese Anleitung erklärt, wie der Austausch funktioniert.**


## Voraussetzungen

- Sie verfügen über eine [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) Infrastruktur.

## In der praktischen Anwendung

### Lieferung eines Ersatz-Hosts

Wenn einer Ihrer Hosts ausfällt, liefern wir Ihnen automatisch und kostenfrei einen Ersatz-Host in Ihre Infrastruktur, um die Dienstkontinuität zu gewährleisten. 

Sofort nach Lieferung dieses Hosts erhalten Sie eine E-Mail mit allen Informationen zu diesem Host. Sie erhalten auch seine IP-Adresse, mit der Sie ihn leicht in Ihrem vSphere Interface finden können.

Standardmäßig ist der Dienst HA ([High Availability](/pages/cloud/private-cloud/vmware_ha_high_availability)) von VMware für Ihren Cluster aktiviert. Wenn Sie Ihn aktiviert lassen, werden Ihre virtuellen Maschinen automatisch neu gestartet. Ist der Dienst DRS (Distributed Ressources Scheduler) aktiviert und im Modus „fully automated“, so findet die Lastverteilung zwischen den Hosts Ihres Clusters ebenfalls automatisch statt.

> [!warning]
> 
> Ist noch ein CD/DVD-Laufwerk auf einer VM installiert oder mit ihr verbunden, so kann der Dienst HA nicht auf dem Ersatz-Host gestartet werden. Es wird empfohlen, das CD/DVD-Laufwerk immer als Clientgerät einzurichten.
>

### Vorgehensweise nach Erhalt des Ersatz-Host

Wenn der Original-Host wieder funktioniert (nach der Reparatur), können Sie einen der beiden Hosts (Original oder Ersatz) an uns zurückgeben.

Wir empfehlen Ihnen, uns den Original-Host zurückzugeben, damit wir ihn nach dieser Störung einer Reihe von Tests unterziehen (und so zukünftige Störungen vermeiden) können. Sie können dann den Ersatz-Host behalten. Dazu können Sie die Anleitung [Host-Server löschen](/pages/cloud/private-cloud/delete_host) zu Rate ziehen.

OVHcloud kann dann automatisch den Original-Host zurücknehmen, sobald er entfernt ist.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
