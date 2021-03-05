---
title: 'Virtuelle MAC-Adresse einer Failover-IP zuweisen'
slug: network-virtual-mac
excerpt: 'Hier erfahren Sie, wie Sie eine virtuelle MAC-Adresse erstellen und mit einer Failover-IP verbinden.'
section: 'Netzwerk & IP'
---

**Stand 03.04.2019**

## Einleitung

Bei OVH können Sie eine virtuelle MAC-Adresse mit einer IP-Adresse verbinden, um virtuelle Maschinen mit Bridge-Konfiguration auf Ihrem Server einzurichten.

**In dieser Anleitung erfahren Sie, wie Sie eine virtuelle MAC-Adresse erstellen und mit einer Failover-IP verbinden.**


## Voraussetzungen

* Sie verfügen über einen [dedizierten Server](https://www.ovh.de/dedicated_server/){.external}.
* Sie haben eine [Failover-IP-Adresse](https://www.ovh.de/dedicated_server/ip_failover.xml){.external} oder einen Failover-IP-Block (RIPE).
* Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.


## Beschreibung

### MAC-Adresse zuweisen

Wenn Sie in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt sind, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und klicken Sie links im Menü auf `IP`{.action}.

![Failover-IP](images/virtual_mac_01.png){.thumbnail}

Suchen Sie nun in der Liste nach Ihrer Failover-IP (oder Ihrem Block) und klicken Sie auf den Button `...`{.action}, um die Optionen anzuzeigen.

![Failover-IP](images/virtual_mac_02.png){.thumbnail}

Wenn das Dialogfeld „Virtuelle MAC-Adresse hinzufügen“ erscheint, wählen Sie einen Typ in der Drop-down-Liste aus, geben Sie den Namen einer virtuellen Maschine ein und klicken Sie anschließend auf `Bestätigen`{.action}.

> [!primary]
>
> **Typ**: Hierbei handelt es sich um den Typ der virtuellen MAC-Adresse („VMware“ ist eine MAC-Adresse für das System VMware ESXi und „OVH“ ist die passende Adresse für andere Arten von Virtualisierungssystemen).
>
> **Name der virtuellen Maschine**: Das ist der gewünschte Name für die virtuelle MAC-Adresse, damit das IP/MAC-Paar später einfacher gefunden werden kann.
>

![Failover-IP](images/virtual_mac_03.png){.thumbnail}


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
