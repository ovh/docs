---
title: Die Managed Bare Metal in einem vRack verwenden
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/hinzufugen_der_dedicated_cloud_zum_vrack_15_und_konfiguration_einer_vm/'
excerpt: Hier erfahren Sie, wie Sie das vRack mit Ihrem Managed Bare Metal Angebot verwenden
slug: vrack-essentials
section: OVHcloud Funktionen
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 05.11.2020**

## Ziel

vRack bietet die Möglichkeit, verschiedene Cloud-Dienste von OVHcloud untereinander innerhalb eines oder mehrerer gesicherter privater Netzwerke (VLANs) zu verbinden.

**In dieser Anleitung erfahren Sie, wie Sie**

## In der praktischen Anwendung

### Kundencenter

Bei der Lieferung Ihrer Dienstleistung [Managed Bare Metal](https://www.ovhcloud.com/de/managed-bare-metal/) befindet sich *der* Teil des Rechenzentrums bereits in einem vRack.

![Datacenter](images/vRackDatacenter.PNG){.thumbnail}

Sie können das *Datacenter* Ihrer Managed Bare Metal in ein anderes vRack umziehen, indem Sie auf den Button `Verschieben`{.action}

### vSphere Client

Im vSphere Client finden Sie die *vRack*-kompatiblen VLANs im verteilten virtuellen Switch (vds), der sich wiederum im **vRack** Ordner befindet.

> [!success]
>
> Standardmäßig liefert Ihnen OVHcloud eine Infrastruktur mit 11 VLANs (VLAN10 bis VLAN20).
>

![VLAN](images/vRackVsphere.png){.thumbnail}

Sie können ihre Einstellungen ändern oder unter Verwendung der Anleitung zur Erstellung von [VLAN neu erstellen](../vlan-erstellung/).

Anschließend können Sie diese *portgroup* den Netzwerkinterfaces Ihrer virtuellen Maschinen zuweisen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
