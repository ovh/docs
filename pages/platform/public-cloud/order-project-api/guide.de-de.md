---
title: "Ein Public Cloud Projekt über die OVHcloud API bestellen"
excerpt: "Hier erfahren Sie, wie Sie Ihr Public Cloud Projekt mit der OVHcloud API bestellen."
slug: public-cloud-api
section: Erste Schritte
order: 9
---

**Letzte Aktualisierung am 22.12.2020**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>


## Ziel

Die Erstellung eines Projekts ist der erste Schritt zum Deployment von [Public Cloud Instanzen](https://www.ovhcloud.com/de/public-cloud/).

**In dieser Anleitung erfahren Sie, wie Sie ein Public Cloud Projekt über die OVHcloud APIv6 bestellen.**

## Voraussetzungen

- Sie verfügen über gültige OVHcloud-Kennungen
- Sie haben einen [gültigen](https://docs.ovh.com/de/billing/zahlungsarten-verwalten/) und in Ihrem OVHcloud Account gespeicherten Zahlungsmodus
- Sie müssen mit der [Funktionsweise der OVHcloud APIv6 vertraut sein](https://docs.ovh.com/de/api/first-steps-with-ovh-api/).

## In der praktischen Anwendung

Verbinden Sie sich mit dem [OVHcloud API](https://api.ovh.com/console/)-Interface und folgen Sie den nachstehenden Schritten.

### Schritt 1: Den Warenkorb erstellen

Im ersten Schritt einer Bestellung wird ein "Warenkorb"(cart) erstellt. Anschließend können Sie ein Public Cloud Projekt hinzufügen.

#### Den Warenkorb erstellen

Verwenden Sie diesen Anruf, um den Warenkorb zu erstellen:

> [!api]
>
> @api {POST} /order/cart
>

Bitte wählen Sie Ihre OVHcloud API-Filiale aus. Geben Sie die Rückmeldung zur Markierungsnummer ("cartId") ein. Der Warenkorb muss identifiziert werden.

Fügen Sie anschließend ein Public Cloud Projekt als Artikel hinzu. Verwenden Sie diesen Anruf mit Ihrer "cartId", um die Verfügbarkeit des Dienstes zu überprüfen:

> [!api]
>
> @api {GET} /order/cart/{cartId}/cloud
>

In der Antwort können Sie die Einstellungen eines Public Cloud Projekts überprüfen:

>
>**code_plan**: "project.2018"
>
>**productName**: "Public Cloud Projekt"
>

#### Projekt zum Warenkorb hinzufügen

Verwenden Sie diesen Anruf, um den Artikel zu Ihrem Warenkorb hinzuzufügen:

> [!api]
>
> @api {POST} /order/cart/{cartId}/cloud
>

Folgende Informationen, die in den vorangegangenen Schritten gewonnen wurden, sind vorzulegen:

|Feld|Wert|
|---|---|
|cartId|*ID Ihres Warenkorbs*|
|duration|P1M|
|planCode|project.2018|
|priceMode|default|
|quantitativ|1|

Die Antwort umfasst eine itemId, die (zusammen mit der "cartId") verwendet werden kann, um den Gegenstand des Warenkorbs zu identifizieren:

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}
>

Sie können die Liste der für diesen Artikel verfügbaren Konfigurationseinstellungen mit folgendem Anruf überprüfen:

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}/requiredConfiguration
>

Verwenden Sie folgenden Endpunkt, um Ihr Projekt zu nennen (`Label: "Beschreibung"`):

> [!api]
>
> @api {POST} /order/cart/{cartId}/item/{itemId}/configuration
>

|Feld|Wert|
|---|---|
|cartId|*ID Ihres Warenkorbs*|
|itemId|*ID des Artikels*|
|Label|Beschreibung|
|Value|*Projektname*|

Um einen Gutschein zu verwenden, verwenden Sie denselben Aufruf mit dem Label "Gutschein" etc.

Die Antworten enthalten eine "konfigurationId", die verwendet werden kann (mit "cartId" und "itemId"), um die Konfiguration (GET) abzurufen oder zu löschen, z. B.:

> [!api]
>
> @api {DELETE} /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
>


### Schritt 2: den Warenkorb validieren

Sie können den Inhalt Ihres Warenkorbs mit "cartId" überprüfen:

> [!api]
>
> @api {GET} /order/cart/{cartId}/checkout
>

Mit dem folgenden Anruf können Sie einen Link zu Ihrer Bestellung erstellen. Zunächst ist das entsprechende Kästchen anzukreuzen, um auf das Widerrufsrecht zu verzichten.

> [!api]
>
> @api {POST} /order/cart/{cartId}/checkout
>


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
