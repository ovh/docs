---
title: Kompatibilität zwischen vRack und Hosted Private Cloud
slug: vrack-kompatibilitat-hosted-private-cloud
excerpt: Erfahren Sie hier, welche Konfigurationen mit vRack und Hosted Private Cloud Diensten möglich sind
section: OVHcloud Funktionen
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 31.12.2021**

## Ziel

Mit unserer Netzwerklösung [vRack](https://www.ovh.de/loesungen/vrack/){.external} können Sie mehrere OVHcloud Dienste untereinander verbinden und sie über ein oder mehrere VLANs kommunizieren lassen. Einige Konfigurationen sind allerdings nicht mit Hosted Private Cloud kompatibel.

**In dieser Anleitung wird erläutert, wie Hosted Private Cloud mit dem vRack kompatibel ist.**

## Voraussetzungen

- Sie sind Administrator-Kontakt für die Infrastruktur [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/), um Login-Daten zu erhalten.
- Sie haben eine aktive Benutzerkennung (erstellt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)

## Technischer Hintergrund

Im Hosted Private Cloud Produkt gibt es zwei vRack Typen:

- "VM Network" ist ein vRack auf einem **einzigen VLAN**, dem nativen VLAN des öffentlichen Hosted Private Cloud VLAN. Dieses VLAN wird innerhalb Hosted Private Cloud zum Routen öffentlicher IPs verwendet. Es wird in vSphere als *PortGroup* in der Kategorie "Network", "VM Network" aufgeführt. Dieses vRack ist an den vollständig von OVHcloud verwalteten virtuellen Switch gebunden.

- "Datacenter vRack", "vRack vDC", oder "dvs-vrack", bezeichnen das vRack, mit dem **4000 VLANs** bereitgestellt werden können. Dieses vRack ist an den vom Kunden verwalteten virtuellen Switch mit seinen eigenen dedizierten Netzwerkkarten gebunden.

Es sei darauf hingewiesen, dass einige OVHcloud Serverreihen, wie etwa die AMD-Host basierten, keinen vom Kunden verwalteten virtuellen Switch haben. Es ist also nur vRack vom Typ "VM Network"verfügbar.

Um den Kontext zu veranschaulichen:

![template](images/template.png){.thumbnail}

## In der praktischen Anwendung

### Mögliche Konfigurationen

**2 vRack VM Network untereinander in verschiedenen geographischen Zonen in verschiedenen Hosted Private Cloud verbinden.**

![VM Network - VM Network, verschieden Zone und Hosted Private Cloud ](images/vmnetwork-vmnetwork-diff-geo-diff-pcc.png){.thumbnail}

**1 vRack VM Network und 1 vRack vDC in verschiedenen geographischen Zonen in verschiedenen Hosted Private Cloud verbinden.**

![VM Network - vDC, unterschiedliche Zone und Hosted Private Cloud ](images/vmnetwork-vdc-diff-geo-diff-pcc.png){.thumbnail}

> [!primary]
>
> Damit die VMs des vRack VM Network und die VMs des vDC vRack miteinander kommunizieren können, müssen sich die VMs im nativen VLAN befinden.
> 

**1 vRack vDC und 1 vRack vDC in verschiedenen geographischen Zonen in verschiedenen Hosted Private Cloud verbinden.**

![vDC - vDC verschiedene Zone und Hosted Private Cloud ](images/vdc-vdc-diff-geo-diff-pcc.png){.thumbnail}

**1 vRack vDC und 1 vRack vDC in einer einzigen Hosted Private Cloud verbinden.**

![vDC - vDC selbst Hosted Private Cloud ](images/vdc-vdc-same-pcc.png){.thumbnail}

**Alle vDC einer Hosted Private Cloud teilen das gleiche vRack VM Network.**

![VM Network im PCC geteilt](images/all-vdc-share-same-vmnetwork.png){.thumbnail}

**1 vRack vDC und 1 vRack vDC in einer einzigen geografischen Zone in verschiedenen Hosted Private Cloud verbinden.**

![vDC - vDC, Zone und verschiedene Hosted Private Cloud ](images/vdc-vdc-same-zone-diff-pcc.png){.thumbnail}

### Nicht mögliche Konfigurationen

**1 vRack VM Network und 1 vRack VM Network in einer einzigen geografischen Zone in verschiedenen Hosted Private Cloud verbinden.**

![VM Network - VM Network für gleiche Zone und verschiedene Hosted Private Cloud ](images/vmnetwork-vmnetwork-same-geo-diff-pcc.png){.thumbnail}

**1 vRack VM Network und 1 vRack vDC in einer einzigen geografischen Zone in verschiedenen Hosted Private Cloud verbinden.**

![VM Network - vDC-Zone und verschiedene Hosted Private Cloud ](images/vmnetwork-vdc-same-geo-diff-pcc.png){.thumbnail}

**1 vRack VM Network und 1 vRack vDC in derselben geografischen Zone in derselben Hosted Private Cloud verbinden.**

![VM Network - vDC-Zone und sogar Hosted Private Cloud ](images/vmnetwork-vdc-same-geo-same-pcc.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
