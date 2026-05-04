---
title: "OVHcloud Link Aggregation über das Kundencenter (Dedicated)"
excerpt: "Aktivieren Sie OVHcloud Link Aggregation (OLA) auf Ihrem Dedicated Server direkt über das OVHcloud Kundencenter."
updated: 2026-04-20
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

Öffnen Sie den Tab `Netzwerkinterfaces`{.action} auf der Verwaltungsseite Ihres Servers.

Klicken Sie auf den Button `Netzwerk-Aggregation`{.action} im Abschnitt **Netzwerkinterface-Controller (NICs)**.

Es werden zwei Tabellen angezeigt:
- Auf der linken Seite die aktuelle Konfiguration Ihrer Netzwerkinterfaces;
- Auf der rechten Seite die simulierte Konfiguration Ihrer aggregierten Netzwerkinterfaces.

Geben Sie im Feld unterhalb der Tabellen einen Namen für Ihre Link-Aggregation ein.

Sobald Sie überprüft haben, dass das Aggregations-Layout Ihren Netzwerkanforderungen entspricht, klicken Sie auf `Aggregation aktivieren`{.action}, um fortzufahren.

Es kann einige Minuten dauern, bis der Vorgang abgeschlossen ist. Anschließend werden im nächsten Schritt die Schnittstellen in Ihrem Betriebssystem in einem "NIC link" oder einem "NIC team" konfiguriert. In den folgenden Anleitungen finden Sie Informationen zu den beliebtesten Betriebssystemen:

- [Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9 über ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
- [Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).
- [Konfigurieren der OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15).
- [How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).

### OLA-Status prüfen

Sie können den Status Ihrer Link-Aggregation (OLA) im Tab `Netzwerkinterfaces`{.action} überprüfen. Suchen Sie unten im Abschnitt **Bandbreite** die Zeile **OVHcloud Link Aggregation**.

Es gibt vier mögliche Statuskennzeichnungen:
- **Nicht verfügbar**: OLA wird von diesem Dedicated-Server-Modell nicht unterstützt.
- **Verfügbar**: OLA wird unterstützt, ist aber nicht konfiguriert.
- **Aktiv - Vollständig privat**: OLA ist aktiviert; alle physischen Interfaces werden zu einem einzigen privaten Link für den vRack-Einsatz aggregiert.
- **Aktiv - Doppeltes LAG**: OLA ist voraktiviert; die physischen Interfaces werden in zwei separate Aggregate aufgeteilt (eines öffentlich, eines privat).

> [!primary]
> **Hinweis:** Der Status **Aktiv - Doppeltes LAG** ist eine spezifische Konfiguration, die in der Regel den Scale- und High-Grade-Server-Reihen vorbehalten ist, die über vier physische Netzwerkinterfaces verfügen.
>

### OLA auf die Standardwerte zurücksetzen

Um OLA auf die Standardwerte zurückzusetzen, klicken Sie auf den Button `Netzwerke disaggregieren`{.action} im Abschnitt **Netzwerk-Interface-Controller**. Klicken Sie im Kontextmenü auf `Bestätigen`{.action}.

Die Operation kann einige Minuten in Anspruch nehmen.

## Weiterführende Informationen

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9 über ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Konfigurieren der OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

[How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

Treten Sie unserer [User Community](/links/community) bei.
