---
title: 'Konfigurieren der OVHcloud Link Aggregation'
slug: ola-manager
excerpt: 'Erfahren Sie hier, wie Sie OLA im OVHcloud Kundencenter aktivieren'
section: 'Fortgeschrittene Nutzung'
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 18.05.2022**

## Ziel

Die OVHcloud Link Aggregation (OLA) wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen redundant machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet.<br>
Die Aggregation basiert auf dem Standard IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Diese Anleitung erklärt, wie Sie OLA im OVHcloud Kundencenter einrichten.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verwenden ein Betriebssystem / einen Hypervisor mit Unterstützung für das Aggregationsprotokoll 802.3ad (LACP).

## In der praktischen Anwendung

> [!warning]
>
> OLA wird über alle Netzwerkinterfaces konfiguriert. Sie werden dadurch zu einem Aggregat vom Typ "private aggregation".
>
> Nach der Umsetzung von OLA ist die öffentliche IP nicht mehr verfügbar.
>

### OLA in Ihrem OVHcloud Kundencenter konfigurieren

Um OLA zu konfigurieren, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wechseln Sie zum Bereich `Bare Metal Cloud`{.action}. Klicken Sie auf `Dedicated Server`{.action} und wählen Sie Ihren Server aus der Liste aus.

![network interfaces](images/network_interfaces2022.png){.thumbnail}

Klicken Sie im Tab `Netzwerkinterfaces`{.action} (1) auf den Button `...`{.action} (2) rechts von "Modus" in **OLA: OVHcloud Link Aggregation**. Klicken Sie auf `Private Aggregation konfigurieren`{.action} (2).

![select Interface](images/interface_select2021.png){.thumbnail}

Überprüfen Sie, dass Ihre beiden Interfaces oder Schnittstellengruppen ausgewählt sind, und geben Sie dem OLA Interface einen Namen. Klicken Sie auf `Bestätigen`{.action}, sobald Ihre Überprüfungen abgeschlossen sind.

Es kann einige Minuten dauern, bis der Vorgang abgeschlossen ist. Anschließend werden im nächsten Schritt die Schnittstellen in Ihrem Betriebssystem in einem "NIC link" oder einem "NIC team" konfiguriert. In den folgenden Anleitungen finden Sie Informationen zu den beliebtesten Betriebssystemen:

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9](../ola-debian9/)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in CentOS 7](../ola-centos7/)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](../ola-w2k19/)

### OLA auf die Standardwerte zurücksetzen

Um OLA auf die Standardwerte wiederherzustellen, klicken Sie auf `...`{.action} rechts neben "Modus" in **OLA: OVHcloud Link Aggregation**. Klicken Sie auf `Private Aggregation dekonfigurieren`{.action}. Klicken Sie im Kontextmenü auf `Bestätigen`{.action}.

![network interfaces](images/default_settings2021.png){.thumbnail}

Die Operation kann einige Minuten in Anspruch nehmen.

## Weiterführende Informationen

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9](../ola-debian9/)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in CentOS 7](../ola-centos7/)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](../ola-w2k19/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
