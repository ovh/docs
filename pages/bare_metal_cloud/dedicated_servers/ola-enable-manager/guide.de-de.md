---
title: "OVHcloud Link Aggregation über das Kundencenter (Dedicated)"
excerpt: "Aktivieren Sie OVHcloud Link Aggregation (OLA) auf Ihrem Dedicated Server direkt über das OVHcloud Kundencenter."
updated: 2022-05-18
---

## Ziel

Die OVHcloud Link Aggregation (OLA) wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen redundant machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet.<br>
Die Aggregation basiert auf dem Standard IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Diese Anleitung erklärt, wie Sie OLA im OVHcloud Kundencenter einrichten.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) der Advance, Scale oder High Grade Reihe.
- Sie verwenden ein Betriebssystem / einen Hypervisor mit Unterstützung für das Aggregationsprotokoll 802.3ad (LACP).

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Zugang zum OVHcloud Kundencenter

- **Direktlink:** [Dedicated Server](/links/control-panel/baremetal-dedicated-servers)
- **Navigationspfad:** `Bare Metal Cloud`{.action} > `Dedicated Server`{.action} > Wählen Sie Ihren Server aus

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## In der praktischen Anwendung

> [!warning]
>
> OLA wird über alle Netzwerkinterfaces konfiguriert. Sie werden dadurch zu einem Aggregat vom Typ "private aggregation".
>
> Nach der Umsetzung von OLA ist die öffentliche IP nicht mehr verfügbar.
>

### OLA in Ihrem OVHcloud Kundencenter konfigurieren

Klicken Sie auf `Dedicated Server`{.action} und wählen Sie Ihren Server aus der Liste aus.

![Tab "Netzwerkinterfaces" mit OLA-Konfiguration](images/network_interfaces2022.png){.thumbnail}

Klicken Sie im Tab `Netzwerkinterfaces`{.action} (1) auf den Button `...`{.action} (2) rechts von "Modus" in **OLA: OVHcloud Link Aggregation**. Klicken Sie auf `Private Aggregation konfigurieren`{.action} (2).

![select Interface](images/interface_select2021.png){.thumbnail}

Überprüfen Sie, dass Ihre beiden Interfaces oder Schnittstellengruppen ausgewählt sind, und geben Sie dem OLA Interface einen Namen. Klicken Sie auf `Bestätigen`{.action}, sobald Ihre Überprüfungen abgeschlossen sind.

Es kann einige Minuten dauern, bis der Vorgang abgeschlossen ist. Anschließend werden im nächsten Schritt die Schnittstellen in Ihrem Betriebssystem in einem "NIC link" oder einem "NIC team" konfiguriert. In den folgenden Anleitungen finden Sie Informationen zu den beliebtesten Betriebssystemen:

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9 über ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Konfigurieren der OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

[How to configure Your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

### OLA auf die Standardwerte zurücksetzen

Um OLA auf die Standardwerte wiederherzustellen, klicken Sie auf `...`{.action} rechts neben "Modus" in **OLA: OVHcloud Link Aggregation**. Klicken Sie auf `Private Aggregation dekonfigurieren`{.action}. Klicken Sie im Kontextmenü auf `Bestätigen`{.action}.

![Option "Private Aggregation aufheben" im OLA-Bereich](images/default_settings2021.png){.thumbnail}

Die Operation kann einige Minuten in Anspruch nehmen.

## Weiterführende Informationen

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9 über ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Konfigurieren der OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

[How to configure Your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

Treten Sie unserer [User Community](/links/community) bei.
