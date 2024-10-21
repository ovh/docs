---
title: 'Virtuelle MAC-Adresse einer Additional IP zuweisen'
excerpt: 'Erfahren Sie hier, wie Sie eine virtuelle MAC-Adresse erstellen und mit einer Additional IP verbinden'
updated: 2022-12-20
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Bei OVHcloud können Sie eine virtuelle MAC-Adresse mit einer IP-Adresse verbinden, um virtuelle Maschinen mit Bridge-Konfiguration auf Ihrem Server einzurichten.

**In dieser Anleitung erfahren Sie, wie Sie eine virtuelle MAC-Adresse erstellen und mit einer Additional IP verbinden.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account, der [virtuelle MACs unterstützt](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac).
- Sie verfügen über eine [Additional IP](https://www.ovhcloud.com/de/bare-metal/ip/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder [OVHcloud API](https://api.ovh.com/) eingeloggt.
- Ihr Server muss virtuelle MAC-Adressen unterstützen. Ziehen Sie [unsere Anleitung](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac) zu Rate, um dies zu bestimmen.

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

> [!primary]
> Wenn Sie mit der Verwendung der OVHcloud API nicht vertraut sind, lesen Sie unsere Einführung zur [Verwendung der OVHcloud API](/pages/manage_and_operate/api/first-steps).

## In der praktischen Anwendung

### MAC-Adresse zuweisen

> [!warning]
>
> Wenn ein IP-Block im vRack umgezogen wurde, dann ist es nicht mehr möglich, einer IP eine virtuelle MAC-Adresse zuzuweisen.
>

#### Über das OVHcloud Kundencenter

Wenn Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} Klicken Sie auf das Menü `Bare Metal Cloud`{.action} und öffnen Sie den Bereich `Network`{.action}. Klicken Sie dann auf `IP`{.action}.

Klicken Sie auf den Tab `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Suchen Sie nun in der Liste nach Ihrer Additional IP (oder Ihrem Block) und klicken Sie auf den Button `...`{.action}, um die Optionen anzuzeigen.

![IP](images/addvmac.png){.thumbnail}

Wenn das Dialogfeld “Virtuelle MAC-Adresse hinzufügen” erscheint, wählen Sie einen Typ in der Drop-down-Liste aus, geben Sie den Namen einer virtuellen Maschine ein und klicken Sie anschließend auf `Bestätigen`{.action}.

> [!primary]
>
> **Typ**: Hierbei handelt es sich um den Typ der virtuellen MAC-Adresse (“VMware” ist eine MAC-Adresse für das System VMware ESXi und “OVH” ist die passende Adresse für andere Arten von Virtualisierungssystemen).
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

Um eine mit einer Additional IP verbundene virtuelle MAC-Adresse zu löschen, loggen Sie sich in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und klicken Sie im Bereich `Bare Metal Cloud`{.action} auf der linken Seite auf `IP`{.action}. Wählen Sie den betreffenden Server aus, damit die verbundene Additional IP (oder der mit dem Server verbundene IP-Block) angezeigt wird.

Um den Vorgang abzuschließen, klicken Sie rechts in der Zeile auf den Button `...`{.action} und dann auf `Virtuelle MAC-Adresse löschen`{.action}.

#### Über die OVHcloud API

Verwenden Sie folgenden API Aufruf:

> [!api]
>
> @api {v1} /dedicated/server DELETE /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
