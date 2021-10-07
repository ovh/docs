---
title: Filter für Ihre E-Mail-Adressen erstellen
slug: email-hosting-filter
legacy_guide_number: 1973
excerpt: Erfahren Sie hier, wie Sie Filterregeln für Ihre E-Mail-Adresse erstellen und konfigurieren
section: E-Mail Account Funktionen
order: 04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 27.09.2021**

## Ziel

Mit einem E-Mail Filter können Sie verschiedene Verarbeitungen für die Nachrichten anwenden, die Sie erhalten, abhängig von den Kriterien Ihrer Wahl.

Zum Beispiel: Sie möchten, dass alle E-Mails mit "[SPAM]"im Betreff gelöscht werden.

- Kriterium = Betreff der E-Mail enthält *SPAM*
- Bearbeitung = E-Mail löschen

**Hier erfahren Sie, wie Sie einen Filter für Ihre E-Mail-Adresse erstellen und konfigurieren.**

## Voraussetzungen

- Sie verfügen über ein MX Plan E-Mail-Angebot (verfügbar über: ein [Webhosting-Angebot](https://www.ovh.de/hosting/){.external}, das [kostenlose Start 10M](https://www.ovh.de/domains/angebot_hosting_start10m.xml){.external} Hosting mit Domainnamen oder separat bestellbar.
- Sie haben Zugriff auf Ihr [OVH Kunden Center](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}.

> [!warning]
>
> Die folgende Anleitung richtet sich an die Inhaber des MXplan Angebots "History". Für das neue Angebot erfolgt die Filterverwaltung direkt über die OWA Webmail (**O**utlook **W**eb **A**pplication). Identifizieren Sie Ihr Angebot mit der nachstehenden Tabelle.
>

Historische MX Plan Version|Neue MX Plan Version|
|---|---|
|![E-Mail](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Ihr Angebot steht in der Box „Abo“|![E-Mail](images/mxplan-starter-new-step1.png){.thumbnail}<br>Die "Server-Referenz"finden Sie in der Box "Zusammenfassung"|
|Lesen Sie diese Anleitung weiter unter " [In der Praxis](#oldmxplan)".|Weitere Informationen finden Sie [in unserer Anleitung "Posteingangsregeln über das OWA](https://docs.ovh.com/de/microsoft-collaborative-solutions/posteingangsregeln-in-owa-erstellen/) Interface".|

## In der Praxis <a name="oldmxplan"></a>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie in den Bereich `Web Cloud`.

Klicken Sie im linken Menü auf `E-Mails`{.action} und wählen Sie den Namen Ihres MX Plan Angebots aus.

Im Tab `E-Mails`{.action} Ihres MXplan Dienstes finden Sie die Liste Ihrer E-Mail-Adressen. Eine Spalte `Filter` ist in der Tabelle der E-Mail-Accounts sichtbar. Klicken Sie auf das Trichtersymbol.

![E-Mails](images/img_3239.jpg){.thumbnail}

Sie finden nun die Liste der aktuell für diese E-Mail-Adresse konfigurierten Filter.

![E-Mails](images/img_3240.jpg){.thumbnail}

Um eine Regel zu Ihrer E-Mail-Adresse hinzuzufügen, klicken Sie auf den Button `Filter hinzufügen`{.action}.

- **Filtername:** Wählen Sie einen Namen für Ihren Filter aus.

- **Priorität:** legt den Ausführungsbefehl für Ihre Filter auf einer eingehenden Nachricht fest. Ein Prioritätsfilter 1 wird vor einem Prioritätsfilter 2 durchgeführt.

- **Filter aktivieren:** Entfernen Sie diese Option, wenn Sie den Filter später anwenden möchten.

### Die Konfiguration der E-Mail-Filter verstehen

Wenn Sie einen Filter hinzufügen, öffnet sich folgendes Fenster:

![E-Mails](images/img_3241.jpg){.thumbnail}

#### Regeln

In diesem Abschnitt können Sie die Nachrichten definieren, auf die der Filter angewendet wird.

Erste Wahl (Header):

- **Von:** bezeichnet die E-Mail-Adresse des Absenders, zum Beispiel: "Wenn der Absender ..."
- **An:** bezeichnet die E-Mail-Adresse des Empfängers, zum Beispiel: "Wenn der Empfänger ..."
- **Betreff der Nachricht:** bezeichnet den Inhalt des Betreff der Nachricht, zum Beispiel: "Wenn der Betreff der Nachricht ... "
- **Andere:** Geben Sie einen anderen Aspekt an, der im Header der E-Mail zu berücksichtigen ist.

Zweite Wahl (Regel):

- **spf:** Geben Sie einen Wert des zu berücksichtigenden [SPF-Eintrags](https://docs.ovh.com/de/domains/webhosting_spf-eintrag/) an, zum Beispiel: "... hat keinen SPF Eintrag ... "
- **enthält:** z. B. " enthält ... "
- **enthält nicht:** z. B. "... enthält nicht ... "

Dritte Wahl (Wert):

- Beispiel: [SPAM]

Vierte Wahl (+):

- So können Sie eine oder mehrere Bedingungen für dieselbe Aktion hinzufügen.

#### Aktionen

In diesem Abschnitt können Sie die durchzuführenden Aktionen festlegen.

Sie haben die Wahl zwischen:

- **Akzeptieren:** E-Mails, die die Bedingungen erfüllen, werden normalerweise empfangen.
- **Auf eine lokale Adresse weiterleiten:** leitet E-Mails, die die Bedingungen erfüllen, an eine der E-Mail-Adressen Ihrer Domain weiter.
- **Löschen:** E-Mails, die die Bedingungen erfüllen, werden gelöscht.
- **Auf eine entfernte Adresse weiterleiten:** leitet die E-Mails, die die Bedingungen erfüllen, an die E-Mail-Adresse Ihrer Wahl weiter.

### Filterbeispiele

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

Wenn der Betreff der Nachricht das Wort "money" enthält **und der** Absender der Nachricht nicht "john@mybank.ovh" ist, wird die Nachricht gelöscht:

![E-Mails](images/img_3242.jpg){.thumbnail}

## Weiterführende Informationen

[Erste Schritte mit MX Plan](https://docs.ovh.com/de/emails/allgemeines-zu-shared-e-mails/)

[Posteingangsregeln über das OWA Interface](https://docs.ovh.com/de/emails/posteingangsregeln-in-owa-erstellen/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
