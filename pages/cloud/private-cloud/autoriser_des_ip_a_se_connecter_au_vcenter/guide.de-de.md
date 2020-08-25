---
title: Die Verbindung von IPs mit dem vCenter erlauben
slug: verbindung-von-ip-zum-vcenter-erlauben
legacy_guide_number: '1442255'
space_key: VS
space_name: vSphere as a Service
section: Funktionen von OVHcloud
---

**Stand 25.06.2020**

## Ziel

Der Zugang zum vCenter kann eingeschränkt werden. Dazu wird nur bestimmten IP Adressen die Verbindung damit gestattet. 

**Erfahren Sie, wie Sie IP Adressen für die Verbindung mit dem vCenter zulassen können.**

## Voraussetzungen

* Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.
* Sie verfügen über eine [Private Cloud Infrastruktur](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/){.external} in Ihrem OVHcloud Account.

## Praktische Anwendung

Wenn die [ Regeln für den Zugang zum vCenter Einschränkungen vorsehen](../zugriffsregeln-fuer-vcenter-aendern/), müssen die IPs hinzugefügt werden, die sich mit dem Dienst verbinden dürfen.

Dies erfolgt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external-link}. Klicken Sie im Abschnitt `Server` auf die Rubrik `Private Cloud`. Wählen Sie die Infrastruktur aus. Klicken Sie dann auf den Tab `Sicherheit` und danach auf `Neuen IP-Bereich hinzufügen`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

Fügen Sie hier die entsprechende IP hinzu. Sie können auch eine Beschreibung anfügen, um sie später einfacher in der Liste wiederzufinden.

Nun müssen Sie nur noch bestätigen: Klicken Sie auf `Weiter`{.action}, und sobald die IP als **„Autorisiert und eingerichtet“** gekennzeichnet ist, ist die Verbindung mit vSphere über diese IP möglich.

![vCenter](images/restrictIP2.JPG){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
