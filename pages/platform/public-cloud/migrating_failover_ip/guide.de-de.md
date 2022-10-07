---
title: 'Additional IP migrieren'
excerpt: 'Erfahren Sie hier, wie Sie eine Additional IP-Adresse zu einer anderen Instanz migrieren'
slug: umzug_einer_failover-ip
section: 'Netzwerk und IP'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 06.10.2022**

> [!primary]
>
> Seit dem 6. Oktober 2022 heißt unser Dienst "Failover-IP" nun [Additional IP](https://www.ovhcloud.com/de/network/additional-ip/). Dies hat keine weiteren Auswirkungen auf dessen Eigenschaften oder die Funktionalität Ihrer Dienstleistungen.
>

## Ziel

IP-Adressen migrieren zu können bedeutet, die Möglichkeit eines Dienstausfalls einzuschränken oder gar auszuschließen. Sie können beispielsweise eine Webseite vollständig auf eine neue Version updaten oder einen replizierten Server verfügbar halten, während der Produktionsserver gewartet wird oder Updates darauf installiert werden.

**Diese Anleitung erklärt, wie Sie eine Additional IP von einer OVHcloud Public Cloud Instanz auf eine andere umziehen können.**

## Voraussetzungen

- Sie verfügen über mindestens zwei [Public Cloud Instanzen](https://www.ovhcloud.com/de/public-cloud) in Ihrem Kunden-Account.
- Sie verfügen über eine Additional IP.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!primary]
> Eine Additional IP kann nicht von einer Zone zur anderen umgezogen werden. So kann beispielsweise eine IP im Rechenzentrum SBG nach GRA oder RBX umgezogen werden, aber nicht nach BHS.
>

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus. Klicken Sie im linken Menü auf `Additional IP`{.action} unter **Network**.

In diesem Beispiel soll die auf “Instance_A” geroutete Additional IP zu “Instance_B” migriert werden.

![](images/failover2022.png){.thumbnail}

Klicken Sie auf `...`{.action} neben der Additional IP und dann auf “Verbundene Instanz bearbeiten”.

![](images/modify1.2022.png){.thumbnail}

Wählen Sie den Zielserver aus der Liste über die Checkbox aus.

![](images/modify1.png){.thumbnail}

Bestätigen Sie die Auswahl mit `Verbinden`{.action}.

Nach einigen Sekunden wird die Kundencenter-Anzeige aktualisiert und eine Bestätigungsmeldung wird angezeigt, wenn die Migration erfolgreich durchgeführt wurde.

![](images/modify2.2022.png){.thumbnail}


> [!primary]
>
Die Additional IP kann vor oder nach der Migration auf dem Zielserver konfiguriert werden. Wenn sie vorkonfiguriert wurde, wird sie funktional, sobald die Routing-Operation abgeschlossen ist.
>

## Weiterführende Informationen

[Additional IP konfigurieren](https://docs.ovh.com/gb/en/public-cloud/configure_a_failover_ip)

[Additional IP importieren](../import_einer_failover-ip/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
