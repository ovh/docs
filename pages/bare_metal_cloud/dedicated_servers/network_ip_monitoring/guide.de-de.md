---
title: Welche IP-Adressen nutzt das OVHcloud Monitoring?
excerpt: Erfahren Sie hier die IP-Adressen zur Einrichtung Ihrer Firewall, um OVHcloud Monitoring auf Ihrem Server zu erlauben
updated: 2024-09-06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Mit dem Monitoring-Dienst können Sie den Zustand Ihrer Maschine überwachen und einen Eingriff durch einen Techniker im Rechenzentrum automatisch auslösen.

Alle Server unserer Kunden und das gesamte Netzwerk werden 24/24 und 7/7 Stunden von den technischen Teams von OVHcloud überwacht.

OVHcloud greift ein, sobald ein Alarm ausgelöst wird (keine Antwort auf Pings), um die Ausfallzeit der Server und des Netzwerks auf ein Minimum zu begrenzen.

Um insbesondere auf ICMP eine restriktive Firewall einzurichten und weiterhin vom OVHcloud Monitoring zu profitieren, müssen die IP-Adressen, die Sie im Folgenden finden, autorisiert werden.

## Voraussetzungen

- Sie haben einen OVHcloud Dienst, auf dem Sie eine Firewall installiert haben.
- Sie haben Zugriff auf die Firewall-Regeln.

## In der praktischen Anwendung

### IP-Adressen erlauben

|Reverse|IP|Protokoll|
|---|---|---|
|netmon-rbx-probe|92.222.184.0/24|icmp|
|netmon-sbg-probe|92.222.185.0/24|icmp|
|netmon-gra-probe|92.222.186.0/24|icmp|
|netmon-bhs-probe|167.114.37.0/24|icmp|
|netmon-sgp-probe|139.99.1.144/28|icmp|
|netmon-waw-probe|193.70.125.118/32|icmp|
|ping.ovh.net|213.186.33.13|icmp|
|---|---|---|
||xxx.xxx.xxx.250 (xxx.xxx.xxx.xxx.aaa ist die IP des Servers)|icmp|
||xxx.xxx.xxx.251 (xxx.xxx.xxx.xxx.aaa ist die IP des Servers)|icmp + vom Monitoring-Dienst überwachter Port|

**Für die Kommunikation zwischen dem RTM Dienst und Ihrem Server müssen Sie außerdem die ein- und ausgehenden Verbindungen über die UDP 6100 bis 6200 Ports erlauben.**

> [!primary]
>
> Wenn Ihr Server sich in Roubaix 3 befindet, muss die letzte IP über `tcpdump` abgerufen werden:
> <pre class="highlight language-console"><code class="language-console">tcpdump host server_ip | grep ICMP</code></pre>
>


### Monitoring aktivieren oder deaktivieren

Loggen Sie sich zunächst in Ihr [OVHcloud Kundencenter ein](/links/manager) und gehen Sie zum Bereich `Bare Metal Cloud`{.action}. Wählen Sie den betreffenden Server unter `Dedicated Server`{.action} aus.

Sie können den Monitoring-Status eines Servers vom Tab `Allgemeine Informationen`{.action} aus einrichten (Abschnitt **Dienststatus**).

![Monitoring](images/monitoring-server.png){.thumbnail}

Klicken Sie auf den Button `Konfigurieren`{.action}. Im neu angezeigten Fenster haben Sie drei Optionen für das Überwachungsverhalten:

- **Deaktiviert**: Mit dieser Option werden Warnmeldungen und Eingriffe von OVHcloud gestoppt. Wählen Sie dies aus, wenn Sie auf dem Server relevante Administrationsmaßnahmen durchführen, die eine ICMP-Antwort verhindern.
- **Aktiviert mit proaktivem Eingriff**: Wenn der Server nicht mehr reagiert wird Ihnen eine Benachrichtigung per E-Mail gesendet und der Server von einem Techniker überprüft.
- **Aktiviert ohne proaktiven Eingriff**: Sie erhalten eine Benachrichtigung per E-Mail, wenn der Server nicht mehr reagiert. Um eine Intervention zu veranlassen, muss eine Support-Anfrage erstellt werden.

![Monitoring](images/monitoring-server2.png){.thumbnail}

Klicken Sie auf `Bestätigen`{.action}, um Ihre Monitoring-Konfiguration zu aktualisieren.

## Weiterführende Informationen

[Konfiguration der Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.