---
title: 'So konfigurieren Sie die OVHcloud Link Aggregation im OVH-Manager'
slug: ola-manager
excerpt: 'Die OVHcloud Link Aggregation im Manager aktivieren'
section: 'Fortgeschrittene Nutzung'
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 26.03.2021**

## Ziel

Die OVHcloud Link Aggregation (OLA)-Technologie wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen überflüssig machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet.

**In diesem Artikel wird erläutert, wie Sie OLA im OVH-Manager einrichten.**

## Voraussetzungen

- Sie verfügen über einen [OVHcloud Dedizierten Server](https://www.ovhcloud.com/de/bare-metal/)
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.

## In der praktischen Anwendung

### OLA in Ihrem OVHcloud Kundencenter konfigurieren

Um OLA zu konfigurieren, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie den Tab `Bare Metal Cloud`{.action} aus. Klicken Sie im linken Menü auf `Dedicated Server`{.action} und wählen Sie Ihren Server aus der Liste aus.

![network interfaces](images/network_interfaces2021.png){.thumbnail}

Klicken Sie im Tab `Netzwerkinterfaces`{.action} (1) auf den Button `...`{.action} (2) rechts von "Modus" in **OLA: OVHcloud Link Aggregation**. Klicken Sie `Die „private aggregation“ konfigurieren`{.action} (2).

![select Interface](images/interface_select2021.png){.thumbnail}

Überprüfen Sie, dass Ihre beiden Interfaces oder Schnittstellengruppen ausgewählt sind, und geben Sie dem OLA Interface einen Namen. Klicken Sie auf `Bestätigen`{.action}, sobald Ihre Überprüfungen abgeschlossen sind.

Es kann einige Minuten dauern, bis der Vorgang abgeschlossen ist. Sobald der Vorgang abgeschlossen ist, werden im nächsten Schritt die Schnittstellen in Ihrem Betriebssystem zu einer NIC-Anleihe oder einem NIC-Team konfiguriert. In den folgenden Artikeln finden Sie Informationen zu den beliebtesten Betriebssystemen:

[So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9](../ola-debian9/)

[So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in CentOS 7](../ola-centos7/)

[So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](../ola-w2k19/)

### OLA auf die Standardwerte zurücksetzen

Um OLA auf die Standardwerte wiederherzustellen, klicken Sie auf `...`{.action} rechts neben "Modus" in **OLA: OVHcloud Link Aggregation**. Klicken Sie auf `Die „private aggregation“ dekonfigurieren`{.action}. Klicken Sie im Kontextmenü auf `Bestätigen`{.action}.

![network interfaces](images/default_settings2021.png){.thumbnail}

Die Operation kann einige Minuten in Anspruch nehmen.

## Weiterführende Informationen

[So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9](../ola-debian9/)

[So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in CentOS 7](../ola-centos7/)

[So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](../ola-w2k19/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
