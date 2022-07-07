---
title: Was sind die IP-Adressen des OVHcloud Monitorings?
slug: monitoring-ip-ovh
excerpt: Hier finden Sie die IP-Adressen, die bei der Einrichtung einer Firewall angegeben werden müssen, damit das OVHcloud Monitoring auf Ihrem Server weiterhin funktioniert.
section: Netzwerk & IP
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 17.08.2021**

## Ziel

Mit dem Monitoring-Dienst können Sie den Zustand Ihrer Maschine überwachen und einen Eingriff durch einen Techniker im Rechenzentrum automatisch auslösen.

Alle Server unserer Kunden und das gesamte Netzwerk werden 24/24 und 7/7 Stunden von den technischen Teams von OVHcloud überwacht.

OVHcloud greift ein, sobald ein Alarm ausgelöst wird (keine Antwort auf Pings), um die Ausfallzeit der Server und des Netzwerks auf ein Minimum zu begrenzen.

Um insbesondere auf ICMP eine restriktive Firewall einzurichten und weiterhin vom OVHcloud Monitoring zu profitieren, müssen die IP-Adressen, die Sie im Folgenden finden, autorisiert werden.

## Voraussetzungen

- Ein OVHcloud Produkt, auf dem Sie eine Firewall installiert haben.
- Sie haben Zugriff auf die Firewall-Regeln.

## In der praktischen Anwendung

### IP-Adressen erlauben

|Reverse|IP|Protokoll|
|---|---|---|
|mrtg-rbx-100|37.187.231.251|icmp|
|mrtg-sbg-100|37.187.231.251|icmp|
|mrtg-gra-100|37.187.231.251|icmp|
|mrtg-bhs-100|37.187.231.251|icmp|
|mrtg-rbx-101|151.80.231.244|icmp|
|mrtg-rbx-102|151.80.231.245|icmp|
|mrtg-rbx-103|151.80.231.246|icmp|
|mrtg-gra-101|151.80.231.247|icmp|
|a2.ovh.net|213.186.33.62|icmp|
|---|---|---|
|netmon-rbx-probe|92.222.184.0/24|icmp|
|netmon-sbg-probe|92.222.185.0/24|icmp|
|netmon-gra|92.222.186.0/24|icmp|
|netmon-bhs-probe|167.114.37.0/24|icmp|
|netmon-sgp-probe|139.99.1.144/28|icmp|
|---|---|---|
|proxy.p19.ovh.net|213.186.45.4|icmp|
|proxy.rbx.ovh.net|213.251.184.9|icmp|
|proxy.sbg.ovnet|37.59.0.235|icmp|
|proxy.bhs.ovh.net|8.33.137.2|icmp|
|ping.ovh.net|213.186.33.13|icmp|
|proxy.ovh.net|213.186.50.98|icmp|
|---|---|---|
||xxx.xxx.xxx.250 (xxx.xxx.xxx.xxx.aaa ist die IP des Servers)|icmp|
||xxx.xxx.xxx.251 (xxx.xxx.xxx.xxx.aaa ist die IP des Servers)|icmp + vom Monitoring-Dienst überwachter Port|

**Für die Kommunikation zwischen dem RTM Dienst und Ihrem Server müssen Sie außerdem die ein- und ausgehenden Verbindungen über die UDP 6100 bis 6200 Ports erlauben.**

> [!primary]
>
> Wenn Ihr Server sich in Roubaix 3 befindet, muss die letzte IP über tcpdump abgerufen werden.
>
> ```
> tcpdump host feste.ip.des.servers | grep ICMP
> ```
>

### Monitoring aktivieren oder deaktivieren

Loggen Sie sich zunächst in Ihr [OVHcloud Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) und wählen Sie den Tab `Bare Metal Cloud`{.action}. Wählen Sie den betreffenden Server im Drop-down-Menü `Dedicated Server`{.action} aus.

Klicken Sie im Tab `Allgemeine Informationen`{.action} und dann im Rahmen des **Dienststatus** auf den Button `...`{.action} neben "Monitoring". Klicken Sie dann auf `Aktivieren`{.action} oder `Deaktivieren`{.action}. Klicken Sie im angezeigten Fenster auf `Bestätigen`{.action}, um die Änderungen zu bestätigen.

![monitoring](images/monitoring01.png){.thumbnail}

### Das Monitoring bestimmter Dienstleistungen aktivieren

Zusätzlich zum Standard-Monitoring können Sie OVHcloud erlauben, bestimmte Dienste wie HTTP, SSH und andere Protokolle zu überwachen.

Klicken Sie im Tab `Allgemeine Informationen`{.action} und dann im Rahmen des **Dienststatus** auf den Button `...`{.action} neben "Dienste im Monitoring". Klicken Sie auf `Monitoring meine Dienstleistungen`{.action}.

![monitoring](images/monitoring02.png){.thumbnail}

Sie werden auf den unten stehenden Bildschirm weitergeleitet. Klicken Sie auf `Einen Dienst überwachen`{.action} und geben Sie dann die IP-Adresse, das Protokoll, die Port-Nummer, die Antwort des Servers und den Zeitraum zwischen den Überprüfungen Ihres Dienstes an. Klicken Sie auf das Validierungssymbol (**V**), um die Änderungen zu bestätigen.

![monitoring](images/monitoring3.png){.thumbnail}

## Weiterführende Informationen

[Konfiguration der Network Firewall](../firewall-network/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.