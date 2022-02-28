---
title: 'Virtuelle MAC-Adresse einer Failover-IP zuweisen'
slug: network-virtual-mac
excerpt: 'Hier erfahren Sie, wie Sie eine virtuelle MAC-Adresse erstellen und mit einer Failover-IP verbinden.'
section: 'Netzwerk & IP'
---

**Letzte Aktualisierung am 16.12.2021**

## Ziel

Bei OVHcloud können Sie eine virtuelle MAC-Adresse mit einer IP-Adresse verbinden, um virtuelle Maschinen mit Bridge-Konfiguration auf Ihrem Server einzurichten.

**In dieser Anleitung erfahren Sie, wie Sie eine virtuelle MAC-Adresse erstellen und mit einer Failover-IP verbinden.**


## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account, der [virtuelle MACs unterstützt](https://docs.ovh.com/de/dedicated/network-support-virtual-mac/).
- Sie verfügen über eine [Failover-IP](https://www.ovhcloud.com/de/bare-metal/ip/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Ihr Server muss die virtuellen MAC-Adressen unterstützen. Ziehen Sie [diese Anleitung](https://docs.ovh.com/de/dedicated/network-support-virtual-mac/) zu Rate, um diese zu bestimmen.


## In der praktischen Anwendung

### MAC-Adresse zuweisen

Wenn Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt sind, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und klicken Sie links im Menü auf `IP`{.action}.


Suchen Sie nun in der Liste nach Ihrer Failover-IP (oder Ihrem Block) und klicken Sie auf den Button `...`{.action}, um die Optionen anzuzeigen.

![IPFO](images/addvmac.png){.thumbnail}

Wenn das Dialogfeld „Virtuelle MAC-Adresse hinzufügen“ erscheint, wählen Sie einen Typ in der Drop-down-Liste aus, geben Sie den Namen einer virtuellen Maschine ein und klicken Sie anschließend auf `Bestätigen`{.action}.

> [!primary]
>
> **Typ**: Hierbei handelt es sich um den Typ der virtuellen MAC-Adresse („VMware“ ist eine MAC-Adresse für das System VMware ESXi und „OVH“ ist die passende Adresse für andere Arten von Virtualisierungssystemen).
>
> **Name der virtuellen Maschine**: Das ist der gewünschte Name für die virtuelle MAC-Adresse, damit das IP/MAC-Paar später einfacher gefunden werden kann.
>

![Failover-IP](images/addvmac2.png){.thumbnail}


> [!primary]
>
> Denken Sie daran, die bei der Konfiguration Ihrer virtuellen Maschine erstellte MAC-Adresse zuzuweisen.
> 

### MAC-Adresse löschen

> [!warning]
>
> Der Löschvorgang einer MAC-Adresse ist unwiderruflich. Die Adresse kann danach nicht wiederhergestellt werden.
> 

Um eine mit einer Failover-IP verbundene virtuelle MAC-Adresse zu löschen, loggen Sie sich in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und klicken Sie im Bereich `Bare Metal Cloud`{.action} auf der linken Seite auf `IP`{.action}. Wählen Sie den betreffenden Server aus, damit die verbundene Failover-IP (oder der mit dem Server verbundene IP-Block) angezeigt wird.

Um den Vorgang abzuschließen, klicken Sie rechts in der Zeile auf den Button `...`{.action} und dann auf `Virtuelle MAC-Adresse löschen`{.action}.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
