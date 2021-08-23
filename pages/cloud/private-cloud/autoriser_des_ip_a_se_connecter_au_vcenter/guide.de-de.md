---
title: IP-Autorisierung für vCenter
slug: verbindung-von-ip-zum-vcenter-erlauben
excerpt: Erfahren Sie hier, wie Sie den Zugang zu vCenter über die Freigabe von IP-Adressen verwalten
legacy_guide_number: '1442255'
section: OVHcloud Funktionen
---

**Letzte Aktualisierung am 18.08.2021**

## Ziel

Der Zugang zu vCenter kann eingeschränkt werden. Dazu wird nur bestimmten IP-Adressen die Verbindung damit gestattet. 

**Erfahren Sie, wie Sie IP-Adressen für die Verbindung mit vCenter zulassen können.**

## Voraussetzungen

- Sie verfügen über eine [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) Infrastruktur.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Wenn die [Regeln für den Zugang zu vCenter anpassen](../zugriffsregeln-fuer-vcenter-aendern/), müssen die IPs hinzugefügt werden, die sich mit dem Dienst verbinden dürfen.

Dies erfolgt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie im Bereich `Hosted Private Cloud` auf die Rubrik `Private Cloud`. Wählen Sie die Infrastruktur aus. Klicken Sie dann auf den Tab `Sicherheit` und danach auf `Neuen IP-Bereich hinzufügen`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

Fügen Sie hier die entsprechende IP hinzu. Sie können auch eine Beschreibung anfügen, um sie später einfacher in der Liste wiederzufinden.

Nun müssen Sie nur noch bestätigen: Klicken Sie auf `Weiter`{.action}, und sobald die IP als **„Autorisiert und eingerichtet“** gekennzeichnet ist, ist die Verbindung mit vSphere über diese IP möglich.

![vCenter](images/restrictIP2.JPG){.thumbnail}

> [!primary]
>
> Bitte beachten Sie, dass Sie aus Sicherheitsgründen maximal 2048 IP-Adressen erlauben können, sich mit vCenter zu verbinden.
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
