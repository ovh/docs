---
title: Meine Zahlungsarten verwalten
slug: zahlungsarten-verwalten
excerpt: Erfahren Sie hier, wie Sie Ihre Zahlungsarten in Ihrem OVHcloud Kundencenter hinzufügen und verwalten können
section: Abrechnung
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 09.05.2022**

## Ziel

Das Kunden Center OVHCloud ermöglicht Ihnen, Ihre verschiedenen Zahlungsarten anzugeben und zu verwalten.

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.
- Sie verfügen über eine gültige Zahlungsart.

## In der praktischen Anwendung <a name="payment_methods"></a>

Klicken Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oben rechts auf Ihren Namen und wählen Sie `Zahlungsmittel`{.action} aus.

![Hubpayment](images/hubpayment.png){.thumbnail}

Die angezeigte Seite enthält eine Tabelle mit den in Ihrem Kundenkonto hinterlegten Zahlungsarten. Sie können dort:

- Eine Zahlungsart hinzufügen
- Ihre Standardzahlungsart ändern
- Beschreibung Ihrer Zahlungsart ändern
- Eine Zahlungsart löschen

### Eine Zahlungsart hinzufügen

Bei Ihrer ersten Bestellung werden Sie aufgefordert, ein Zahlungsmittel zu hinterlegen, um die Verlängerung Ihrer Dienstleistung per automatischer Lastschrift sicherzustellen.

Dieses Zahlungsmittel wird standardmäßig für alle Ihre Verlängerungen verwendet und Ihnen wird angeboten, neue Bestellungen zu begleichen.

Sie haben die Möglichkeit, andere Zahlungsarten zu hinterlegen, damit diese bei Neubestellungen angeboten werden oder standardmäßig für zukünftige Lastschriften verwendet werden.

Es können drei Zahlungsarten eingetragen werden:

- Kreditkarte
- Bankkonto
- PayPal Konto

Klicken Sie hierfür auf den Knopf `Zahlungsart hinzufügen`{.action}.

![manage-payment-methods](images/managepaymentmethods2.png){.thumbnail}

Wählen Sie die Zahlungsmethode aus, die Sie verwenden möchten: 

![choose-payment-method](images/choose-payment-method.png){.thumbnail}

Folgen Sie den nachfolgenden Schritten für die Eintragung der Zahlungsart. Im ersten Schritt werden Sie aufgefordert, das Kästchen anzukreuzen `Zahlungsmittel nach Validierung als Standardzahlungsmittel verwenden`{.action} auswählen, damit es für zukünftige Einkäufe oder automatische Lastschriften verwendet werden kann.

#### Kreditkarte

![card-credit](images/credit-card.png){.thumbnail}

Um eine neue Kreditkarte zu hinterlegen, werden Sie zum gesicherten Interface unseres Zahlungsdienstleisters weitergeleitet. Es wird eine Testabbuchung bei Ihrem Bankinstitut vorgenommen, um Nummer und Gültigkeit der Karte zu überprüfen.<br>
Es wird kein Betrag abgebucht und Ihre Kreditkarte wird nach einigen Minuten aktiviert.

#### Bankkonto

![bank-account](images/bank-account.png){.thumbnail}

> [!warning]
>
> Die Verwendung der SEPA-Lastschrift ist nur für französische und deutsche Kundenkonten möglich.
>

Im Falle der Registrierung eines Bankkontos erhalten Sie eine E-Mail von unserem Partner Yousign®, mit der Sie Ihre Lastschriftanweisung elektronisch unterzeichnen können.

![manage-payment-methods](images/yousign.png){.thumbnail}

> [!primary]
>
> Solange diese Berechtigung nicht von Ihnen unterzeichnet und validiert wurde, wird neben Ihrem Bankkonto der Vermerk `Warten auf Validierung` eingefügt, da dieses dann nicht für Ihre Zahlungen berücksichtigt werden kann.
>

Nach Eingang Ihrer SEPA-Einzugsermächtigung wird Ihr Bankkonto innerhalb von etwa 48 Stunden als Zahlungsmittel auf Ihrem Kundenkonto bestätigt.

#### PayPal Account

![paypal](images/paypal.png){.thumbnail}

Klicken Sie auf den Button `PayPal`{.action}. Es öffnet sich ein Kontextfenster, um sich mit Ihrem PayPal® Account zu verbinden und diesen als autorisiertes Zahlungsmittel bei OVHcloud zu hinterlegen.

Ihr PayPal® Account wird in wenigen Minuten aktiviert.

### Ihre Standardzahlungsart ändern

Die Rechnungen für die Erneuerung Ihrer Dienstleistungen durch Ihre Standardzahlungsart beglichen. Wenn Sie diese ändern wollen müssen Sie zuerst in Ihrem Kunden Center eine neue Zahlungsart hinzufügen.

Klicken Sie dafür auf den Schalter `...`{.action} rechts von neue Zahlungsart und dann auf `Dieses Zahlungsmittel als Standardzahlungsmittel festlegen`{.action}.

![manage-payment-methods](images/managepaymentmethods3.png){.thumbnail}

> **Ich möchte mein Standardzahlungsmittel durch ein anderes ersetzen, wie kann ich das tun?**
>
> - Schritt 1: die neue Zahlungsart hinzufügen
> - Schritt 2: legen Sie das neue Zahlungsmittel als Standardzahlungsmittel fest
> - Schritt 3: Die alte Zahlungsart löschen
>

### Eine Zahlungsart löschen

Wenn Sie eine Ihrer Zahlungsarten nicht mehr verwenden wollen dann können Sie sie löschen, in dem Sie auf den Schalter `...`{.action} rechts von ihr drücken Klicken Sie auf `Dieses Zahlungsmittel löschen`{.action}.

![manage-payment-methods](images/managepaymentmethods4.png){.thumbnail}

Wenn Sie alle Ihre Zahlungsarten löschen möchten, müssen alle Ihre Dienstleistungen [von Hand](https://docs.ovh.com/de/billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/) verlängert werden.

#### Die Löschung einer Zahlungsart erfolgt über die API OVHCloud

Die Löschung einer Zahlungsart kann über die API erfolgen, verbinden Sie sich hierzu mit  [https://eu.api.ovh.com/](https://eu.api.ovh.com/).

Beginnen Sie indem Sie die ID der Zahlungsart anfordern:

> [!api]
>
> @api {GET} /me/payment/method
>

Löschen Sie anschließend die Zahlungsart mithilfe der im vorherigen Schritt erhaltenen ID:

> [!api]
>
> @api {DELETE} /me/payment/method/{paymentMethodId}
>

> [!primary]
>
> Mehr Informationen finden Sie in der Anleitung [Erste Schritte mit den OVHcloud APIs](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/)/
>
> Falls Sie Schwierigkeiten haben, Ihre Zahlungsarten über die OVHcloud APIs zu identifizieren, verwenden Sie die Funktion Waren `Beschreibung ändern`{.action} (Button `...`{.action} rechts neben Ihrem Bildschirm) im Bereich [Zahlungsarten](#payment_methods) Ihres [OVHcloud Kundencenters](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
>

### Der Prepaid Account

#### Was ist der Prepaid-Account?

Der *Prepaid*-Account ist seit seiner Erstellung in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) präsent. Damit können Sie Ihren Kunden-Account im Voraus aufladen und diese Gelder für die Bezahlung Ihrer Bestellungen und Verlängerungsrechnungen verwenden.

Wenn Sie Ihren Account regelmäßig aufladen, stellen Sie sicher, dass die [automatische Verlängerung](https://docs.ovh.com/de/billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/) Ihrer Dienstleistungen nie wegen Zahlungsausfalls unterbrochen wird.

Gehen Sie dazu einfach in den Bereich `Zahlungsarten` Ihres Kundencenters:

- Klicken Sie oben rechts auf Ihren Namen und dann im rechten Menü auf `Zahlungsmittel`{.action}.
- Wählen Sie den Tab `Mein Prepaid-Account`{.action}.

![prepaid-account](images/prepaid-account.png){.thumbnail}

#### Wie funktioniert er?

Wenn Sie über Dienstleistungen verfügen, die für die automatische *Verlängerung eingestellt* sind, wird Ihre Rechnung prioritär auf Ihren Prepaid-Account eingezogen.

Wenn kein ausreichender Betrag zur Verfügung steht, wird der Kontostand Ihres Accounts negativ und steht noch immer auf Zahlung.

Wenn Sie über ein gültiges Zahlungsmittel in Ihrem Kundenkonto verfügen, wird dieser Betrag automatisch innerhalb von 24 Stunden abgebucht und Ihr Guthaben wieder auf Null gesetzt. Dies hat keine Auswirkungen auf den Zustand Ihrer Dienstleistungen.

Wenn Sie jedoch kein Zahlungsmittel hinterlegt haben, müssen Sie diesen Betrag innerhalb von 7 Tagen über Ihren Manager begleichen, um eine Unterbrechung des Dienstes zu vermeiden.

Wenn Sie kein Zahlungsmittel hinterlegt haben, empfehlen wir Ihnen deshalb, eine **Warnschwelle** einzurichten, um sicherzustellen, dass Sie über genügend Mittel für Ihre nächsten Rechnungen verfügen:

![warning_prepaid_account](images/warning_prepaid_account.png){.thumbnail}

Wenn das für Ihren Prepaid-Account verfügbare Guthaben unter den festgelegten Grenzwert fällt, wird Ihnen unverzüglich eine Benachrichtigung per E-Mail zugesandt.

#### Wie kann ich Ihren Prepaid Account aufladen?

Klicken Sie im Tab `Mein Prepaid-Account`{.action} auf den Button `Aufladen`{.action}.

![credit-prepaid-account](images/credit-prepaid-account.png){.thumbnail}

Geben Sie im angezeigten Fenster den aufzuladenden Betrag ein, klicken Sie auf `Weiter`{.action} und dann auf `Bestellen`{.action}.

![order-prepaid-account](images/order-prepaid-account.png){.thumbnail}

Wählen Sie im angezeigten Bestellschein die Zahlungsart Ihrer Wahl aus und begleichen Sie Ihre Bestellung.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
