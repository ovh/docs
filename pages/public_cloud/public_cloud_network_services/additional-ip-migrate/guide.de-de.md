---
title: Additional IP migrieren
excerpt: "Erfahren Sie hier, wie Sie eine Additional IP-Adresse zu einer anderen Instanz migrieren"
updated: 2023-01-04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

> [!primary]
>
> Seit dem 6. Oktober 2022 heißt unser Dienst "Failover-IP" nun [Additional IP](https://www.ovhcloud.com/de/network/additional-ip/). Die Namensänderung hat keine Auswirkungen auf dessen technische Funktionen.
>

## Ziel

IP-Adressen migrieren zu können bedeutet, die Möglichkeit eines Dienstausfalls einzuschränken oder gar auszuschließen. Sie können beispielsweise eine Webseite vollständig auf eine neue Version updaten oder einen replizierten Server verfügbar halten, während der Produktionsserver gewartet wird oder Updates darauf installiert werden.

**Diese Anleitung erklärt, wie Sie eine Additional IP von einer OVHcloud Public Cloud Instanz auf eine andere umziehen können.**

## Voraussetzungen

- Sie verfügen über mindestens zwei [Public Cloud Instanzen](https://www.ovhcloud.com/de/public-cloud) in Ihrem Kunden-Account.
- Sie verfügen über eine Additional IP.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

> [!warning]
> Diese Funktion ist derzeit für Metal Instanzen nicht verfügbar.
>

## In der praktischen Anwendung

> [!warning]
>
> Eine Additional IP kann nicht von einer Länderzone zur anderen umgezogen werden. So kann beispielsweise eine IP-Adresse von SBG nach GRA oder RBX umgezogen werden, aber nicht nach BHS. 
>

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie im Bereich `Public Cloud`{.action} Ihr Projekt aus.

Öffnen Sie im linken Menü `Public IPs`{.action} unter `Network`.

Klicken Sie auf den Tab `Additional IP`{.action}.

In diesem Beispiel wird die auf "Instance_A" geroutete Additional IP-Adresse zu "Instance_B" migriert.

Klicken Sie auf `...`{.action} in der Zeile der Additional IP und wählen Sie `Verbundene Instanz bearbeiten`{.action}.

![migrating Additional IP](images/migrateip_01.png){.thumbnail}

Klicken Sie auf das Drop-down-Menü, um die Ziel-Instanz in der Liste auszuwählen.

![migrating Additional IP](images/migrateip_02.png){.thumbnail}

Bestätigen Sie, indem Sie auf `Anhängen`{.action} klicken.

Nach einigen Sekunden wird die Kundencenter-Anzeige aktualisiert und eine Bestätigungsmeldung wird angezeigt, wenn die Migration erfolgreich durchgeführt wurde.

![migrating Additional IP](images/migrateip_03.png){.thumbnail}

> [!primary]
>
Die Additional IP kann vor oder nach der Migration auf dem Zielserver konfiguriert werden. Wenn sie vorkonfiguriert wurde, wird sie funktional, sobald die Routing-Operation abgeschlossen ist.
>

## Weiterführende Informationen

[Additional IP konfigurieren](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance)

[Additional IP importieren](/pages/public_cloud/public_cloud_network_services/additional-ip-import)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
