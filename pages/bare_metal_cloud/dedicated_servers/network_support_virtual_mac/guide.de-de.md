---
title: "Virtuelle MAC-Adressen auf Ihrem Dedicated Server prüfen"
excerpt: "Nutzen Sie die OVHcloud API, um zu prüfen, ob die Zuweisung virtueller MAC-Adressen auf Ihrem Dedicated Server Modell unterstützt wird."
updated: 2025-04-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Um virtuelle MAC-Adressen (vMACs) auf einem dedizierten Server verwenden zu können, müssen Sie zunächst sicherstellen, dass Ihr Server diese Funktion unterstützt.

Die Unterstützung der vMAC-Funktionalität ist eine Voraussetzung für alle Aktionen, die virtuelle MACs betreffen.

**Diese Anleitung erklärt, wie Sie in der OVHcloud API überprüfen, ob Ihr Dedicated Server virtuelle MAC-Adressen unterstützt.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) in Ihrem Kunden-Account.
- Sie können sich in der [OVHcloud API-Konsole](/links/api) einloggen.

> [!primary]
> Wenn Sie mit der Verwendung der OVHcloud API nicht vertraut sind, lesen Sie unsere Anleitung zu den [ersten Schritten mit der OVHcloud API](/pages/manage_and_operate/api/first-steps).

## In der praktischen Anwendung

Öffnen Sie den folgenden Endpunkt in der OVHcloud API-Konsole:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

Geben Sie den internen Servernamen im Feld `serviceName ein` und klicken Sie dann auf `Execute`{.action}.

![API-Konsole mit serviceName-Feld für vMAC-Prüfung](images/support_virtual_mac_02.png){.thumbnail}

Das Ergebnis zeigt einen Eintrag mit "vmac / supported" an, der "true" oder "false" sein kann (boolescher Wert).

![API-Ergebnis mit vMAC-Unterstützung (true oder false)](images/support_virtual_mac_04.png){.thumbnail}

> [!primary]
> **Auswertung des Ergebnisses**
>
> - **false**: Sie können auf diesem Server keine virtuellen MAC-Adressen verwenden.
>
> - **true**: Auf diesem Server können Sie virtuellen MAC-Adressen verwenden.
>

## Weiterführende Informationen

[First Steps with the OVHcloud API](/pages/manage_and_operate/api/first-steps)

- [Virtuelle MAC-Adresse auf einem Dedicated Server zuweisen](/pages/bare_metal_cloud/dedicated_servers/network_virtual_mac)

- [Dedicated Server - Additional IPs im Bridge-Modus konfigurieren](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
