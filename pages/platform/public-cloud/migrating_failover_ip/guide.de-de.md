---
title: 'Failover-IP migrieren'
excerpt: 'Erfahren Sie hier, wie Sie eine Failover-IP-Adresse zu einer anderen Instanz migrieren'
slug: umzug_einer_failover-ip
legacy_guide_number: g1890
section: 'Netzwerk und IP'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 06.01.2022**

## Ziel

IP-Adressen migrieren zu können bedeutet, die Möglichkeit eines Dienstausfalls einzuschränken oder gar auszuschließen. Sie können beispielsweise eine Webseite vollständig auf eine neue Version updaten oder einen replizierten Server verfügbar halten, während der Produktionsserver gewartet wird oder Updates darauf installiert werden.

**Diese Anleitung erklärt, wie Sie eine Failover-IP von einer OVHcloud Public Cloud Instanz auf eine andere umziehen können.**

## Voraussetzungen

- Sie verfügen über mindestens zwei [Public Cloud Instanzen](https://www.ovhcloud.com/de/public-cloud) in Ihrem Kunden-Account.
- Sie verfügen über eine Failover-IP.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!primary]
> Eine Failover-IP kann nicht von einer Zone zur anderen umgezogen werden. So kann beispielsweise eine IP im Rechenzentrum SBG nach GRA oder RBX umgezogen werden, aber nicht nach BHS.
>

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus. Klicken im linken Menü auf `Failover IP`{.action} unter **Network**.

In diesem Beispiel soll die auf “Instance_A” geroutete Failover-IP zu “Instance_B” migriert werden.

![](images/failover2022.png){.thumbnail}

Klicken Sie auf `...`{.action} neben der Failover-IP und dann auf “Verbundene Instanz bearbeiten”.

![](images/modify1.2022.png){.thumbnail}

Wählen Sie den Zielserver aus der Liste über die Checkbox aus.

![](images/modify1.png){.thumbnail}

Bestätigen Sie die Auswahl mit `Verbinden`{.action}.

Nach einigen Sekunden wird die Kundencenter-Anzeige aktualisiert und eine Bestätigungsmeldung wird angezeigt, wenn die Migration erfolgreich durchgeführt wurde.

![](images/modify2.2022.png){.thumbnail}


> [!primary]
>
Die Failover-IP kann vor oder nach der Migration auf dem Zielserver konfiguriert werden. Wenn sie vorkonfiguriert wurde, wird sie funktional, sobald die Routing-Operation abgeschlossen ist.
>

## Weiterführende Informationen

[Failover-IP konfigurieren](https://docs.ovh.com/gb/en/public-cloud/configure_a_failover_ip)

[Failover-IP importieren](../import_einer_failover-ip/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
