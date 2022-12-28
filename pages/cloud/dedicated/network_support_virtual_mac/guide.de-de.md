---
title: Überprüfen ob Ihr Dedicated Server virtuelle MAC-Adressen unterstützt
slug: network-support-virtual-mac
excerpt: Erfahren Sie hier, wie Sie mit der OVHcloud API feststellen, ob virtuelle MAC-Adressen auf einem dedizierten Server unterstützt werden
section: Netzwerk & IP
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 09.12.2021**

## Ziel

Um virtuelle MAC-Adressen (vMACs) auf einem dedizierten Server verwenden zu können, müssen Sie zunächst sicherstellen, dass Ihr Server diese Funktion unterstützt.

Die Unterstützung der vMAC-Funktionalität ist eine Voraussetzung für alle Aktionen, die virtuelle MACs betreffen.

**Diese Anleitung erklärt, wie Sie in der OVHcloud API überprüfen, ob Ihr Dedicated Server virtuelle MAC-Adressen unterstützt.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie können sich in der [OVHcloud API-Konsole](https://api.ovh.com/) einloggen.

> [!primary]
> Wenn Sie mit der Verwendung der OVHcloud API nicht vertraut sind, lesen Sie unsere Anleitung zu den [ersten Schritten mit der OVHcloud API](https://docs.ovh.com/de/api/first-steps-with-ovh-api/).

## In der praktischen Anwendung

Öffnen Sie den folgenden Endpunkt in der OVHcloud API-Konsole:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/network
>

Geben Sie den internen Servernamen im Feld `serviceName ein` und klicken Sie dann auf `Execute`{.action}.

![SVMAC](images/support_virtual_mac_02.png){.thumbnail}

Das Ergebnis zeigt einen Eintrag mit "vmac / supported" an, der "true" oder "false" sein kann (boolescher Wert).

![SVMAC](images/support_virtual_mac_04.png){.thumbnail}

> [!primary]
> **Auswertung des Ergebnisses**
>
> - **false**: Sie können auf diesem Server keine virtuellen MAC-Adressen verwenden.
>
> - **true**: Auf diesem Server können Sie virtuellen MAC-Adressen verwenden.
>

## Weiterführende Informationen

[First Steps with the OVHcloud API](https://docs.ovh.com/de/api/first-steps-with-ovh-api/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/>.