---
title: IP-Autorisierung für vCenter
excerpt: Erfahren Sie hier, wie Sie den Zugang zu vCenter über die Freigabe von IP-Adressen verwalten
updated: 2023-01-25
---

## Ziel

Der Zugang zu Ihrem vCenter ist auf autorisierte IP-Adressen beschränkt.

**Erfahren Sie, wie Sie IP-Adressen für die Verbindung mit vCenter zulassen können.**

## Voraussetzungen

- Sie verfügen über eine [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) Infrastruktur.

<!-- CP-NAV-START:privatecloud-vmware-vsphere -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direktlink:** [VMware vSphere](/links/control-panel/privatecloud-vmware-vsphere)
- **Navigationspfad:** `Hosted Private Cloud`{.action} > `Managed VMware vSphere`{.action} > Wählen Sie Ihren vSphere Dienst aus

---
<!-- CP-NAV-END:privatecloud-vmware-vsphere -->

## In der praktischen Anwendung

Gehen Sie zum Tab `Sicherheit`{.action} und klicken Sie auf `Neuen IP-Bereich hinzufügen`{.action}.

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
