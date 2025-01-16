---
title: 'Virtuelle MAC-Adresse einer Additional IP zuweisen'
excerpt: 'Erfahren Sie hier, wie Sie eine virtuelle MAC-Adresse erstellen und mit einer Additional IP verbinden'
updated: 2024-12-13
---

## Ziel

Bei OVHcloud können Sie eine virtuelle MAC-Adresse mit einer IP-Adresse verbinden, um virtuelle Maschinen mit Bridge-Konfiguration auf Ihrem Server einzurichten.

**Diese Anleitung erklärt, wie Sie eine virtuelle MAC-Adresse erstellen und mit einer Additional IP verbinden.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) in Ihrem Kunden-Account, der [virtuelle MACs unterstützt](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac).
- Sie verfügen über eine [Additional IP](/links/network/additional-ip).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) oder die [OVHcloud API](https://api.ovh.com/).
- Ihr Server muss virtuelle MAC-Adressen unterstützen. Überprüfen Sie dies mithilfe [unserer Anleitung](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac).

> [!warning]
> - Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](/links/bare-metal/eco-about) eingesetzt wird. Weitere Informationen finden Sie auf der [Vergleichsseite](/links/bare-metal/eco-compare).
>
> - Advance Server der dritten Generation (mit EPYC 4004 Series Prozessoren) unterstützen 32 verschiedene vMACs.
>
> - Diese Funktion wird im Laufe des Jahres 2025 für die Reihen Scale und High Grade verfügbar sein.

> [!primary]
> Wenn Sie mit der Verwendung der OVHcloud API nicht vertraut sind, lesen Sie unsere Einführung zur [Verwendung der OVHcloud API](/pages/manage_and_operate/api/first-steps).

## In der praktischen Anwendung

### MAC-Adresse zuweisen

> [!warning]
>
> Wenn ein IP-Block im vRack umgezogen wurde, dann ist es nicht mehr möglich, einer IP eine virtuelle MAC-Adresse zuzuweisen.
>

#### Über das OVHcloud Kundencenter

In Ihrem [OVHcloud Kundencenter](/links/manager) öffnen Sie das Menü `Bare Metal Cloud`{.action} und dann den Bereich `Network`{.action}. Klicken Sie auf `IP`{.action}.

Klicken Sie auf den Tab `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Suchen Sie nun in der Liste nach Ihrer Additional IP (oder Ihrem Block) und klicken Sie auf den Button `...`{.action}, um die Optionen anzuzeigen.

![IP](images/addvmac.png){.thumbnail}

Wenn das Dialogfeld “Virtuelle MAC-Adresse hinzufügen” erscheint, wählen Sie einen Typ in der Drop-down-Liste aus, geben Sie den Namen einer virtuellen Maschine ein und klicken Sie anschließend auf `Bestätigen`{.action}.

> [!primary]
>
> **Typ**: Hierbei handelt es sich um den Typ der virtuellen MAC-Adresse (“VMware” für eine MAC-Adresse für das System VMware ESXi und “OVH” für Adressen für andere Virtualisierungssysteme).
>
> **Name der virtuellen Maschine**: Das ist der gewünschte Name für die virtuelle MAC-Adresse, damit das IP/MAC-Paar später einfacher gefunden werden kann.
>

![Additional IP](images/addvmac2.png){.thumbnail}

> [!primary]
>
> Denken Sie daran, die bei der Konfiguration Ihrer virtuellen Maschine erstellte MAC-Adresse zuzuweisen.
> 

#### Über die OVHcloud API

Verwenden Sie folgenden API Aufruf:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}

### MAC-Adresse löschen

> [!warning]
>
> Der Löschvorgang einer MAC-Adresse ist unwiderruflich. Die Adresse kann danach nicht wiederhergestellt werden.
> 

#### Über das OVHcloud Kundencenter

Um eine mit einer Additional IP verbundene virtuelle MAC-Adresse zu löschen, loggen Sie sich in Ihrem [Kundencenter](/links/manager) ein und klicken Sie im Bereich `Bare Metal Cloud`{.action} auf der linken Seite auf `IP`{.action}. Wählen Sie den betreffenden Server aus, damit die verbundene Additional IP (oder der mit dem Server verbundene IP-Block) angezeigt wird.

Um den Vorgang abzuschließen, klicken Sie rechts in der Zeile auf den Button `...`{.action} und dann auf `Virtuelle MAC-Adresse löschen`{.action}.

#### Über die OVHcloud API

Verwenden Sie folgenden API Aufruf:

> [!api]
>
> @api {v1} /dedicated/server DELETE /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
>

## FAQ

- **Was geschieht, wenn ich einen Block mit vMACs auf einen Advance Server der dritten Generation (mit EPYC 4004 Series) verlagere, der bereits über 32 vMACs verfügt?**

Der Block wird nicht verschoben.

Beispiel: Wenn Sie versuchen, einen Block mit 4 IPs zu verschieben, wobei verschiedene vMACs an einen Server mit bereits 30 vMACs angehängt sind, wird der Block nicht verschoben, da die Gesamtanzahl der vMACs die erlaubten 32 vMACs übersteigen würde.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.
