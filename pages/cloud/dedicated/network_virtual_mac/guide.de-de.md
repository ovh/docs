---
title: 'Virtuelle MAC-Adresse einer Failover-IP zuweisen'
slug: network-virtual-mac
excerpt: 'Erfahren Sie hier, wie Sie eine virtuelle MAC-Adresse erstellen und mit einer Failover-IP verbinden'
section: 'Netzwerk & IP'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 26.07.2022**

## Ziel

Bei OVHcloud können Sie eine virtuelle MAC-Adresse mit einer IP-Adresse verbinden, um virtuelle Maschinen mit Bridge-Konfiguration auf Ihrem Server einzurichten.

**In dieser Anleitung erfahren Sie, wie Sie eine virtuelle MAC-Adresse erstellen und mit einer Failover-IP verbinden.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account, der [virtuelle MACs unterstützt](https://docs.ovh.com/de/dedicated/network-support-virtual-mac/).
- Sie verfügen über eine [Failover-IP](https://www.ovhcloud.com/de/bare-metal/ip/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder [OVHcloud API](https://api.ovh.com/console/) eingeloggt.
- Ihr Server muss virtuelle MAC-Adressen unterstützen. Ziehen Sie [unsere Anleitung](https://docs.ovh.com/de/dedicated/network-support-virtual-mac/) zu Rate, um dies zu bestimmen.

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

> [!primary]
> Wenn Sie mit der Verwendung der OVHcloud API nicht vertraut sind, lesen Sie unsere Einführung zur [Verwendung der OVHcloud API](https://docs.ovh.com/de/api/first-steps-with-ovh-api/).

## In der praktischen Anwendung

### MAC-Adresse zuweisen

> [!warning]
>
> Wenn ein IP-Block im vRack umgezogen wurde, dann ist es nicht mehr möglich, einer IP eine virtuelle MAC-Adresse zuzuweisen.
>

#### Über das OVHcloud Kundencenter

Wenn Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt sind, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und klicken Sie links im Menü auf `IP`{.action}.

![IPFO](images/manageIPOVHcloud.png){.thumbnail}

Suchen Sie nun in der Liste nach Ihrer Failover-IP (oder Ihrem Block) und klicken Sie auf den Button `...`{.action}, um die Optionen anzuzeigen.

![IPFO](images/addvmac.png){.thumbnail}

Wenn das Dialogfeld “Virtuelle MAC-Adresse hinzufügen” erscheint, wählen Sie einen Typ in der Drop-down-Liste aus, geben Sie den Namen einer virtuellen Maschine ein und klicken Sie anschließend auf `Bestätigen`{.action}.

> [!primary]
>
> **Typ**: Hierbei handelt es sich um den Typ der virtuellen MAC-Adresse (“VMware” ist eine MAC-Adresse für das System VMware ESXi und “OVH” ist die passende Adresse für andere Arten von Virtualisierungssystemen).
>
> **Name der virtuellen Maschine**: Das ist der gewünschte Name für die virtuelle MAC-Adresse, damit das IP/MAC-Paar später einfacher gefunden werden kann.
>

![Failover-IP](images/addvmac2.png){.thumbnail}

> [!primary]
>
> Denken Sie daran, die bei der Konfiguration Ihrer virtuellen Maschine erstellte MAC-Adresse zuzuweisen.
> 

#### Über die OVHcloud API

Verwenden Sie folgenden API Aufruf:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}

### MAC-Adresse löschen

> [!warning]
>
> Der Löschvorgang einer MAC-Adresse ist unwiderruflich. Die Adresse kann danach nicht wiederhergestellt werden.
> 

#### Über das OVHcloud Kundencenter

Um eine mit einer Failover-IP verbundene virtuelle MAC-Adresse zu löschen, loggen Sie sich in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und klicken Sie im Bereich `Bare Metal Cloud`{.action} auf der linken Seite auf `IP`{.action}. Wählen Sie den betreffenden Server aus, damit die verbundene Failover-IP (oder der mit dem Server verbundene IP-Block) angezeigt wird.

Um den Vorgang abzuschließen, klicken Sie rechts in der Zeile auf den Button `...`{.action} und dann auf `Virtuelle MAC-Adresse löschen`{.action}.

#### Über die OVHcloud API

Verwenden Sie folgenden API Aufruf:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
