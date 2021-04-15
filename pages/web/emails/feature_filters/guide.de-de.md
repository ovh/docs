---
title: Filter für Ihre E-Mail-Adressen erstellen
slug: email-hosting-configuring-filters
legacy_guide_number: 1973
excerpt: Erfahren Sie, wie Sie einen Filter für Ihre E-Mail-Adresse erstellen und konfigurieren
section: E-Mail Account Funktionen
order: 5
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 12.08.2020**

## Ziel

Mit einem Filter können Bedingungen für die von Ihnen erhaltenen E-Mails sowie die sich daraus ergebenden Aktionen konfiguriert werden.

Zum Beispiel: Sie möchten, dass alle E-Mails mit "[SPAM]"im Betreff gelöscht werden.

- Bedingung = der Betreff der E-Mail enthält *SPAM*
- Aktion = E-Mail löschen

**Hier erfahren Sie, wie Sie einen Filter für Ihre E-Mail-Adresse erstellen und konfigurieren.**


## Voraussetzungen

- Sie haben ein MX Plan E-Mail-Angebot oder ein [Webhosting Paket](https://www.ovh.de/hosting/){.external}.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).


## In der praktischen Anwendung

Loggen Sie sich zunächst in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

Wählen Sie die betreffende Domain im Bereich `E-Mails`{.action} aus.

Klicken Sie in der Tabelle, in der Ihre E-Mail-Adressen aufgelistet sind, auf das `Filter`{.action}-Symbol der betreffenden Adresse.

![E-Mails](images/img_3239.jpg){.thumbnail}

Sie finden die Liste Ihrer derzeit für diese E-Mail-Adresse konfigurierten Filter. Um einen hinzuzufügen, klicken Sie rechts auf den Button `Filter hinzufügen`{.action}.

![E-Mails](images/img_3240.jpg){.thumbnail}


### Die Konfiguration der E-Mail-Filter verstehen

![E-Mails](images/img_3241.jpg){.thumbnail}


#### Information

- **Filtername:** So können Sie Ihre Filter im Kundencenter unterscheiden.
- **Priorität:** Dies legt die Reihenfolge der Ausführung Ihrer Filter auf demselben E-Mail-Postfach fest. Ein Prioritätsfilter 1 wird vor einem Prioritätsfilter 5 durchgeführt.
- **Filter aktivieren:** Dies legt fest, ob der Filter aktiv ist oder nicht (Sie können zum Beispiel einen Filter erstellen, indem Sie die Option entschlüsseln, wenn Sie sie später aktivieren möchten).


#### Regeln

Hier werden Sie die Bedingungen, die Filterregeln konfigurieren.

Erste Wahl (Header):

- **Von:** Entspricht dem Absender, zum Beispiel: "Wenn der Absender ..."
- **AN:** Entspricht dem Empfänger, zum Beispiel: "Wenn der Empfänger ..."
- **Betreff der Nachricht:** Entspricht dem Betreff der Nachricht, zum Beispiel: "Wenn der Betreff der Nachricht ..."
- **Andere:** Anderer Parameter

Zweite Wahl (Regel):

- **spf:** Vom SPF-Feld abhängiger Parameter, Beispiel: "... hat keinen SPF Eintrag ..."
- **enthält:** z. B. "... enthält ..."
- **enthält nicht:** z. B. "... enthält nicht ..."

Dritte Wahl (Wert):

- Beispiel: [SPAM]

Vierte Wahl (+):

- So können Sie eine oder mehrere Bedingungen für dieselbe Aktion hinzufügen 
**Ergebnis dieser Bedingungen** - Beispiel: "Wenn der Betreff der Nachricht [SPAM] enthält"


#### Aktionen
Hier werden Sie auswählen, was der Filter tun wird, wenn die Bedingungen oben erfüllt sind.

Sie haben die Wahl zwischen:

- **Akzeptieren:** E-Mails, die die Bedingungen erfüllen, werden normalerweise empfangen.
- **Auf eine lokale Adresse weiterleiten:** Leitet E-Mails, die die Bedingungen erfüllen, an eine der E-Mail-Adressen Ihrer Domain weiter.
- **Löschen:** E-Mails, die die Bedingungen erfüllen, werden gelöscht.
- **Auf eine entfernte Adresse weiterleiten:** Leitet die E-Mails, die die Bedingungen erfüllen, an die E-Mail Adresse Ihrer Wahl weiter.


### Beispiele

#### Spam löschen

||Header|Regel|Wert|Aktion|
|---|---|---|---|---|
|Filtereinstellungen|Betreff der Nachricht|enthält|[SPAM]|löschen|
|Was der Filter tun wird|Wenn|enthält|die Suite "[SPAM]"|dann die Nachricht löschen.|


#### E-Mails eines Empfängers weiterleiten

||Header|Regel|Wert|Aktion|
|---|---|---|---|---|
|Filtereinstellungen|Von|enthält|contact@domaintest.ovh|an eine Remote-Adresse weiterleiten: jean@otherdomain.ovh|
|Was der Filter tun wird|Hat der|ist|contact@domaintest.ovh|Die E-Mail an jean@otherdomain.ovh weiterleiten|


#### An eine Mailingliste adressierte E-Mails weiterleiten

||Header|Regel|Wert|Aktion|
|---|---|---|---|---|
|Filtereinstellungen|An|enthält|ML@mailing.com|Auf eine lokale Adresse weiterleiten: recipient@mypersonaldomain.ovh|
|Was der Filter tun wird|Wenn die Nachricht an die Mailingliste versandt wurde|bezeichnet|ML@mailing.com|Senden Sie die Nachricht an meine andere Adresse: recipient@mypersonaldomain.ovh|


#### E-Mails mit unerwünschten Angaben außer Absendern löschen 

Es sind zwei Filter hinzuzufügen:

||Header|Regel|Wert|Aktion|
|---|---|---|---|---|
|Filterparameter 1|Betreff der Nachricht|enthält|"money"|löschen|
|Filterparameter 2|Von|enthält nicht|john@mybank.ovh|löschen|

Wenn der Betreff der Nachricht das Wort `money` enthält **und der** Absender der Nachricht nicht `john@mybank.ovh` ist, wird die Nachricht gelöscht.

In diesem Fall lautet die Konfiguration:

![E-Mails](images/img_3242.jpg){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.