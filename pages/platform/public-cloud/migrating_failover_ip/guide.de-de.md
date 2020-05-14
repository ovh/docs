---
title: 'Failover-IP migrieren'
excerpt: 'Erfahren Sie hier, wie Sie eine Failover-IP-Adresse zu einer anderen Instanz migrieren'
slug: umzug_einer_failover-ip
legacy_guide_number: g1890
section: 'Netzwerk und IP'
---

**Letzte Aktualisierung am 09.04.2020**

## Ziel

IP-Adressen migrieren zu können bedeutet, die Möglichkeit eines Dienstausfalls einzuschränken oder gar auszuschließen. Sie können beispielsweise eine Webseite vollständig auf eine neue Version updaten oder einen replizierten Server verfügbar halten, während der Produktionsserver gewartet wird oder Updates darauf installiert werden.

**Diese Anleitung erklärt, wie Sie eine Failover-IP von einer OVHcloud Public Cloud Instanz auf eine andere umziehen können.**

## Voraussetzungen

- Sie verfügen über mindestens zwei [Public Cloud Instanzen](https://www.ovhcloud.com/de/public-cloud) in Ihrem Kunden-Account.
- Sie verfügen über eine Failover-IP.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).

## In der praktischen Anwendung

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action} und wählen Sie anschließend Ihr Projekt aus. Klicken im linken Menü auf `Failover IP`{.action} unter "Network".
In diesem Beispiel soll die auf „Instance_A“ geroutete Failover-IP zu „Instance_B“ migriert werden.

![](images/failover.png){.thumbnail}

Klicken Sie auf `...`{.action} neben der Failover-IP und dann auf „Verbundene Instanz bearbeiten“.

![](images/modify.png){.thumbnail}

Wählen Sie den Zielserver aus der Liste über die Checkbox aus.

![](images/modify1.png){.thumbnail}

Bestätigen Sie die Auswahl mit `Verbinden`{.action}.

Nach einigen Sekunden wird die Kundencenter-Anzeige aktualisiert und eine Bestätigungsmeldung wird angezeigt, wenn die Migration erfolgreich durchgeführt wurde.

![](images/modify2.png){.thumbnail}


> [!primary]
>
Die Failover-IP kann vor oder nach der Migration auf dem Zielserver konfiguriert werden. Wenn sie vorkonfiguriert wurde, wird sie funktional, sobald die Routing-Operation abgeschlossen ist.
>

## Weiterführende Informationen

[Failover-IP konfigurieren](https://docs.ovh.com/gb/en/public-cloud/configure_a_failover_ip)

[Failover-IP importieren](https://docs.ovh.com/de/public-cloud/import_einer_failover-ip/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
