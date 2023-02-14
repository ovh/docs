---
title: Managed Bare Metal in einem vRack verwenden
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/hinzufugen_der_dedicated_cloud_zum_vrack_15_und_konfiguration_einer_vm/'
excerpt: Hier erfahren Sie, wie Sie das vRack mit Ihrem Managed Bare Metal Angebot verwenden
slug: vrack-essentials
section: OVHcloud Funktionen
updated: 2020-11-23
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 05.11.2020**

## Ziel

vRack bietet die Möglichkeit, verschiedene Cloud-Dienste von OVHcloud untereinander innerhalb eines oder mehrerer gesicherter privater Netzwerke (VLANs) zu verbinden.

**Diese Anleitung erklärt, wie Sie vRack für Managed Bare Metal einrichten.**

## In der praktischen Anwendung

### Kundencenter

Sobald Ihre Dienstleistung [Managed Bare Metal](https://www.ovhcloud.com/de/managed-bare-metal/) bereitgestellt ist, wird sie im Bereich `vRack` in Ihrem OVHcloud Kundencenter angezeigt und das "Rechenzentrum" befindet sich bereits in einem vRack.

![Rechenzentrum](images/vRackDatacenter.PNG){.thumbnail}

Sie können das Managed Bare Metal "Rechenzentrum" in ein anderes vRack umziehen, indem Sie auf den Button `Verschieben`{.action} klicken.

### vSphere Client

Im vSphere Client finden Sie die vRack-kompatiblen VLANs im Bereich `Networks`, der sich im Ordner *vRack* befindet.

> [!success]
>
> Standardmäßig liefert Ihnen OVHcloud eine Infrastruktur mit 11 VLANs (VLAN10 bis VLAN20).
>

![VLAN](images/vRackVsphere.png){.thumbnail}

Sie können deren Einstellungen ändern oder sie neu einrichten; verwenden Sie dazu [diese Anleitung](../vlan-erstellung/).

Anschließend können Sie die *Distributed Port Groups* den Netzwerkinterfaces Ihrer virtuellen Maschinen zuweisen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
