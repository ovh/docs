---
title: Technische Kapazitäten
slug: technische-kapazitaten
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/technische_kapazitaten/'
excerpt: 'Entdecken Sie die technischen Kapazitäten und Einschränkungen der Managed Bare Metal Lösungen von OVHcloud'
section: FAQ
order: 2
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 30 November 2020**

## Ziel

**Diese Seite bietet einen Überblick über die technischen Funktionen und Einschränkungen der OVHcloud Managed Bare Metal Dienste.**

## Bekannte Kapazitäten und Beschränkungen

| Element | Beschreibung | Wert |
|:-----:|:-----:|:----------:|
| Maximale Anzahl pro Client-ID | Anzahl der vCenter oder Pakete pro Organisation | Kein Limit |
| Anzahl der verbundenen Managed Bare Metal | vCenters Verbindung (Enhanced Link Mode) | 0 (nicht autorisiert) |
| Anzahl min. von Hosts pro PCC (SLA) | Anzahl der Hosts pro vCenter zur Aufrechterhaltung des Service Level Agreements | 2 |
| Anzahl min. von Hosts pro Managed Bare Metal (ohne SLA) | Mindestanzahl der Hosts, die in vCenter ohne Service Level Agreement zu verwenden sind | 0 |
| Maximale Anzahl von Hosts pro Cluster | Hosts je Cluster | 64 |
| Maximale Anzahl Cluster pro vDc | Anzahl der Cluster im gleichen virtuellen Datacenter | Kein Limit |
| Maximale Anzahl vDc pro Managed Bare Metal | Anzahl der virtuellen Rechenzentren (vDC), die Kunden pro vCenter hinzufügen können | 400 |
| Maximale Anzahl von Hosts pro Managed Bare Metal | Host-Limits pro vCenter | Bereich **Hosts**: 340 hosts, 70 zpools<br>Bereich **Hybrid**: 241 hosts, 120 zpools<br>Bereich **BigDS**: 76 hosts, 205 zpools |
| Maximale Anzahl virtuellen Maschinen pro SDDC | VMs, die von demselben vCenter verwaltet werden | 25 000 |
| Maximale Anzahl virtuellen Maschinen pro Host | VMs werden auf demselben physischen Host gehostet | 1024 |
| Maximale Anzahl IP-Adressen nach Managed Bare Metal | Maximale Anzahl öffentlichen IP-Adressen, die über vCenter zugewiesen und nutzbar sind | 1 x /23 |
| vCPUs, RAM und Festplatte für vCenter Standard | vCenter (VCSA) zugewiesene Ressourcen | 4 virtuelle Prozessoren, 16 GB RAM, 290 GB Speicherplatz |
| vCPUs, RAM und Festplatte für vROPS | vROPS-Ressourcen | 4 virtuelle Prozessoren, 16 GB RAM |
| Maximale Anzahl IPSec VPN Tunnel | Maximale Anzahl von VPN-Tunneln pro | 512 Compact Edge<br>1600 Edge<br>4096 quad large edge<br>6000 extra large Edge |
| Maximale Anzahl vRack pro vDc | Maximale Anzahl private Netzwerke von Virtual Data Center (VDC) | 1 |
| Maximale Anzahl L2 VPN Kunden | Anzahl zu verbindender VPN Clients | 5 |

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
