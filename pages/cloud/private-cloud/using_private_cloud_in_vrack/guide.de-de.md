---
title: Hosted Private Cloud in einem vRack verwenden
excerpt: Erfahren Sie hier, wie Sie vRack mit Ihrer Hosted Private Cloud verwenden
updated: 2022-03-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 28.03.2022**

## Ziel

vRack bietet die Möglichkeit, verschiedene Cloud-Dienste von OVHcloud untereinander innerhalb eines oder mehrerer gesicherter privater Netzwerke (VLANs) zu verbinden.

**Diese Anleitung erklärt, wie Sie vRack für Ihre Hosted Private Cloud einrichten.**

## Voraussetzungen

- Sie haben eine [vRack](https://www.ovh.de/loesungen/vrack/) Dienstleistung in Ihrem Account.
- Sie sind Administrator-Kontakt für die [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) Infrastruktur, um Login-Daten zu erhalten.
- Sie haben eine aktive Benutzerkennung (erstellt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)).

## In der praktischen Anwendung

### OVHcloud Kundencenter

Sobald Ihre Dienstleistung [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) bereitgestellt ist, wird sie im Bereich `vRack` angezeigt und das "Rechenzentrum" befindet sich bereits in einem vRack. Um zum vRack zu gelangen, gehen Sie in den Bereich `Bare Metal Cloud`{.action}, klicken Sie auf `Network`{.action} und dann auf `vRack`{.action}. Wählen Sie in der Liste Ihr vRack aus, um den Inhalt anzuzeigen.

![Rechenzentrum](images/vRackDatacenter.PNG){.thumbnail}

Sie können das "Rechenzentrum" Ihrer Hosted Private Cloud in ein anderes vRack umziehen, indem Sie auf den Button `Verschieben`{.action} klicken.

### vSphere Client

Im vSphere Client finden Sie die vRack-kompatiblen VLANs im Bereich `Networks`, der sich im Ordner *vRack* befindet.

> [!success]
>
> Standardmäßig liefert Ihnen OVHcloud eine Infrastruktur mit 11 VLANs (VLAN10 bis VLAN20).
>

![VLAN](images/vRackVsphere.png){.thumbnail}

Sie können deren Einstellungen ändern oder sie neu einrichten; verwenden Sie dazu [diese Anleitung](/pages/cloud/private-cloud/creation_vlan).

Anschließend können Sie die *Distributed Port Groups* den Netzwerkinterfaces Ihrer virtuellen Maschinen zuweisen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
