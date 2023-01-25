---
title: IP-Autorisierung für vCenter
slug: verbindung-von-ip-zum-vcenter-erlauben
excerpt: Erfahren Sie hier, wie Sie den Zugang zu vCenter über die Freigabe von IP-Adressen verwalten
section: OVHcloud Funktionen
---

**Letzte Aktualisierung am 25.01.2023**

## Ziel

Der Zugang zu Ihrem vCenter ist auf autorisierte IP-Adressen beschränkt.

**Erfahren Sie, wie Sie IP-Adressen für die Verbindung mit vCenter zulassen können.**

## Voraussetzungen

- Sie verfügen über eine [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) Infrastruktur.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Der Zugang zu vCenter ist nur eingeschränkt möglich. Fügen Sie daher die IP-Adressen hinzu, die zur Verbindung mit dem Dienst berechtigt sind.

Dies erfolgt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie im Bereich `Hosted Private Cloud` auf die Rubrik `VMware`{.action}. Wählen Sie die Infrastruktur aus. Klicken Sie dann auf den Tab `Sicherheit`{.action} und danach auf `Neuen IP-Bereich hinzufügen`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

Fügen Sie hier die IP-Adresse hinzu. Sie können auch eine Beschreibung anfügen, um sie später einfacher in der Liste wiederzufinden.

Nun müssen Sie nur noch bestätigen: Klicken Sie auf `Weiter`{.action}, und sobald die IP-Adresse als **„Autorisiert und eingerichtet“** gekennzeichnet ist, ist die Verbindung mit vSphere über diese IP möglich.

![vCenter](images/restrictIP2.JPG){.thumbnail}

> [!primary]
>
> Beachten Sie, dass Sie aus Sicherheitsgründen maximal 2048 IP-Adressen zur Verbindung mit vCenter erlauben können.
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
