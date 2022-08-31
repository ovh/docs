---
title: 'Automatische Signaturen erstellen'
excerpt: 'Erfahren Sie hier, wie Sie automatische Signaturen zu Ihren E-Mail-Accounts hinzufügen'
slug: exchange_20132016_automatische_signatur_-_disclaimer
legacy_guide_number: g1330
section: Exchange Account-Funktionen
order: 3
---


**Letzte Aktualisierung am 21.09.2020**

## Ziel

Über das OVHcloud Kundencenter können Sie universelle Signaturen (Footer) für E-Mail-Adressen erstellen, die dieselbe Domain verwenden (Unternehmenssignatur). Diese werden automatisch zu allen über einen Benutzer-Account versendeten E-Mails hinzugefügt.

**Diese Anleitung erläutert, wie Sie eine automatische Signatur über das OVHcloud Kundencenter erstellen.**

## Voraussetzungen

- Sie haben Zugriff auf das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verfügen über eine bereits eingerichtete [OVHcloud Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/) oder [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/) Lösung.


## In der praktischen Anwendung

Loggen Sie sich zunächst in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}ein:

- **Exchange**: Klicken Sie auf `Microsoft`{.action} und dann auf `Exchange`{.action}.. 
- **Email Pro**: Klicken Sie auf `Email Pro`{.action}.

Klicken Sie dann auf den Namen des E-Mail Dienstes, in dem sich der Account befindet, für den Sie Rechte vergeben möchten. Klicken Sie im horizontalen Menü auf den Tab `Mehr+`{.action} und wählen Sie `Fußzeilen`{.action} aus.

![Exchange Signaturen](images/exchange-footer-step1.png){.thumbnail}

In diesem Bereich können Sie Ihre verbundenen Domains einsehen und für jede einzelne von ihnen ein Signaturschema erstellen. Um den HTML-Editor zu öffnen, klicken Sie auf `...`{.action} und dann auf `Konfigurieren`{.action}.

![Exchange Signaturen](images/exchange-footer-step2.png){.thumbnail}

Der Editor bietet eine Auswahl an Variablen, die mit den Daten des Benutzers in dessen Account-Einstellungen übereinstimmen. Sie können zum Beispiel eine generische Abschlussnachricht erstellen und darunter mithilfe der Variablen eine passende Unterschrift oder Kontaktinformationen hinzufügen. Klicken Sie auf den Pfeil nach unten, um eine Variable auszuwählen, und dann auf `Variable einfügen`{.action}, um diese im Editierfenster hinzuzufügen.

![Exchange Signaturen](images/exchange-footer-step3aag.gif){.thumbnail}

Der Footer wird mithilfe von HTML-Tags erstellt, was einige Formatierungsoptionen bietet. Verwenden Sie die obere Toolbar, um die Signatur anzupassen. Sie können auch den HTML-Code überprüfen, indem Sie auf `Source`{.action} klicken.
 
![Exchange Signaturen](images/exchange-footer-step4.png){.thumbnail}

Setzen Sie einen Haken bei „Die Signatur ausschließlich für den externen Versand aktivieren“, um zu verhindern, dass der Footer zu E-Mails zwischen Benutzern derselben Domain hinzugefügt wird. Wenn die Signatur fertig erstellt ist, klicken Sie auf `Bestätigen`{.action}. Sie wird nun zu E-Mails hinzugefügt, die von Benutzer-Accounts dieser Domain versendet werden. Sie können Signaturen nach deren Erstellung über das OVHcloud Kundencenter bearbeiten oder löschen.

Bitte beachten Sie die folgenden Hinweise, bevor Sie Signaturen für Benutzer einrichten:

- Mit Ausnahme von „Vorname“, „Nachname“ und „Anzeigename“ können Account-Informationen nicht über das OVHcloud Kundencenter bearbeitet werden, sondern müssen im OWA („Optionen“, „Allgemein“, „Mein Konto“) des Benutzers festgelegt werden.

![Exchange Signaturen](images/exchange-footer-step5.png){.thumbnail}

- Die Signatur wird ohne Abstand zum E-Mail-Körper hinzugefügt. Daher empfiehlt es sich, die Signatur mit mindestens einer leeren Zeile zu beginnen.
- Im OWA wird nicht angezeigt, ob ein Footer für eine Domain aktiviert wurde, und es gibt **keine Synchronisation**. Wenn Benutzer ihre [eigenen Signaturen](../exchange_2016_verwendung_der_outlook_web_app/#eine-signatur-hinzufugen) hinzufügen, werden E-Mails sowohl den eigenen als auch den für die gesamte Domain erstellten Footer enthalten.
- Der Editor unterstützt HTML-Formatierung, Hyperlinks, Bilder etc. Allerdings sollten sich Signaturen nicht zu sehr auf diese Optionen stützen. Empfänger verwenden möglicherweise E-Mail-Clients, die HTML und eingebundene Bilder nicht erlauben, oder die Signaturen werden anders angezeigt, als geplant. Beachten Sie, dass HTML-Tags vollständig entfernt werden, wenn eine E-Mail über OWA als „Plain Text“ versendet wird.
- „Initialen“ sind für den Dienst nicht aktiv. Wenn Sie diese Variable hinzufügen, hat dies keinerlei Auswirkungen.

## Weiterführende Informationen

[Verwendung der Outlook Web App](../exchange_2016_verwendung_der_outlook_web_app/)

[Berechtigungen für einen E-Mail Account übertragen](../exchange_2013_send_as_versand_als/)

[Kalender in OWA freigeben](../exchange_2016_einen_kalender_via_owa_webmail_freigeben/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
