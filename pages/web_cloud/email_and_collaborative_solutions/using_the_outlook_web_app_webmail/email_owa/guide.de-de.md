---
title: 'E-Mail-Adresse über das Webmail Outlook Web App (OWA) verwenden'
excerpt: 'Erfahren Sie, wie Sie Ihre E-Mail-Adresse über das Webmail OWA verwenden'
updated: 2026-05-04
---

## Ziel

Mit den E-Mail-Lösungen von OVHcloud können Sie Ihre E-Mails über ein Gerät und einen Client Ihrer Wahl senden und empfangen. OVHcloud stellt Ihnen einen Online-E-Mail-Dienst namens Outlook Web App (OWA) zur Verfügung, mit dem Sie von überall über einen Webbrowser auf einen Account zugreifen können. Alle aktiven E-Mail-Accounts auf MX Plan, Email Pro und Hosted Exchange teilen sich einen einzigen Zugangspunkt zu ihrer jeweiligen OWA-Oberfläche: unsere [Webmail-Anmeldeseite](/links/web/email).

**Erfahren Sie, wie Sie über die OWA-Oberfläche die gängigen Aktionen mit Ihrer E-Mail-Adresse durchführen.**

## Voraussetzungen

- Sie verfügen über eine bereits eingerichtete OVHcloud E-Mail-Lösung aus den folgenden Angeboten:
    - [**MX Plan**](/links/web/hosting), verfügbar mit unseren Webhosting-Angeboten, im [100M Free Hosting](/links/web/domains-free-hosting) enthalten oder als eigenständige Lösung bestellt;
    - [**Hosted Exchange**](/links/web/emails-hosted-exchange);
    - [**Email Pro**](/links/web/email-pro).
- Sie verfügen über die Anmeldedaten für die E-Mail-Adresse, die Sie verwenden möchten.

## In der praktischen Anwendung

Diese Anleitung hilft Ihnen, die üblichen Aufgaben besser zu verstehen, die in einem E-Mail-Account über OWA verfügbar sind. Da diese Oberfläche jedoch nicht ursprünglich von OVHcloud erstellt wurde, können wir keine spezifischen Anweisungen zu Einstellungen geben, die in dieser Anleitung nicht behandelt werden.

Für Exchange-spezifische Funktionen finden Sie weitere Anleitungen im Abschnitt [Weiterführende Informationen](./#weiterfuhrende-informationen) am Ende dieser Anleitung.

> [!primary]
>
> Nachdem Sie sich angemeldet und mit der Oberfläche vertraut gemacht haben, müssen Sie die Anweisungen nicht in der angegebenen Reihenfolge befolgen.

### Anmeldung bei OWA

Um sich mit Ihrer E-Mail-Adresse bei OWA anzumelden, öffnen Sie die [Webmail-Anmeldeseite](/links/web/email). Geben Sie Ihre vollständige E-Mail-Adresse und Ihr Passwort ein. Klicken Sie anschließend auf `Anmelden`{.action}.

![useowa](images/use-owa-step1.png){.thumbnail}

> [!warning]
>
> Wenn Sie auf eine **Roundcube**-Oberfläche weitergeleitet werden, bedeutet dies, dass Sie die Legacy-Version des MX Plan Angebots nutzen. Weitere Informationen zu Ihrem MX Plan Angebot finden Sie auf unserer Seite [Erste Schritte mit dem MX Plan Angebot](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
>
> Um sich mit der **Roundcube**-Oberfläche vertraut zu machen, lesen Sie unsere Anleitung [E-Mail-Adresse über das Webmail Roundcube verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

Wenn Sie sich zum ersten Mal mit dieser E-Mail-Adresse bei OWA anmelden, werden Sie aufgefordert, die Sprache der Oberfläche und die Zeitzone festzulegen. Klicken Sie anschließend auf `Speichern`{.action}, um fortzufahren.

> [!primary]
>
> Die Zeitzonen sind nach [dem Standard UTC (Coordinated Universal Time)](https://de.wikipedia.org/wiki/Koordinierte_Weltzeit) aufgeführt, nicht in alphabetischer Reihenfolge der Städte.
>
> **Beispiel**: Für Westeuropa ist dies UTC +1 (Brüssel, Kopenhagen, Madrid, Paris).

![useowa](images/use-owa-step2.png){.thumbnail}

Ab jetzt wird Ihr Posteingang standardmäßig angezeigt, sobald Sie sich anmelden.

![useowa](images/use-owa-step3.png){.thumbnail}

### Die OWA-Anzeige verstehen

Die OWA-Oberfläche enthält mehrere Bereiche. Anhand der Tabelle und der nachstehenden Abbildung können Sie sich mit ihr vertraut machen.

|Bereiche|Beschreibung|  
|---|---|  
|Oberer Bereich (1)|Enthält zwei Registerkartenleisten: Die erste ermöglicht den Zugriff auf allgemeine Einstellungen (etwa den [Bereich Optionen](./#zugriff-auf-den-bereich-optionen)). Die zweite Leiste kann für spezifische Aktionen mit Ihrer Adresse genutzt werden (etwa zum Senden oder Beantworten von E-Mails).|  
|Linke Seite (2)|Zeigt die Liste der Ordner für Ihre E-Mail-Adresse an. Diese Ordner werden als Baumstruktur dargestellt, die Sie ein- oder ausklappen können.|
|Mittleres Segment (3)|Zeigt die Liste der Nachrichten (gelesen und ungelesen) aus dem im linken Menü ausgewählten Ordner an. In diesem Bereich können auch Suchergebnisse angezeigt werden.|
|Rechte Seite (4)|Zeigt den Lesebereich an, wenn eine E-Mail ausgewählt wurde.|

![useowa](images/use-owa-step4.png){.thumbnail}

Beachten Sie, dass Sie die Größe der vertikalen Bereiche durch Klicken und Ziehen ihrer Trennlinien ändern können.

### E-Mails anzeigen

Um Ihre E-Mails anzuzeigen, wählen Sie einen Ordner auf der linken Seite aus. Eingehende E-Mails, die nicht von Posteingangsregeln bearbeitet werden, erscheinen im Ordner "Posteingang". Um zu prüfen, ob Sie neue E-Mails erhalten haben, sehen Sie nach, ob neben dem entsprechenden Ordner eine Zahl angezeigt wird.

![useowa](images/use-owa-step5.png){.thumbnail}

Um eine E-Mail zu lesen, wählen Sie gegebenenfalls ihren Ordner aus. Klicken Sie dann auf die E-Mail, um deren Inhalt im Lesebereich anzuzeigen. Ungelesene Nachrichten werden in Fettdruck dargestellt, um sie von gelesenen Nachrichten zu unterscheiden.

![useowa](images/use-owa-step6.png){.thumbnail}

### E-Mails sortieren und filtern

Oben rechts in der Nachrichtenliste öffnet die Schaltfläche `Filter`{.action} ein Menü, das alle Anzeigeoptionen für den ausgewählten Ordner zusammenfasst.

- **Nach Kategorie filtern**: Wählen Sie einen Eintrag, um nur eine Auswahl von E-Mails anzuzeigen, unter `Alle`{.action}, `Ungelesen`{.action}, `An mich`{.action} (E-Mails, die direkt an Ihre Adresse gerichtet sind), `Gekennzeichnet`{.action} (zur Nachverfolgung markierte E-Mails) oder `Erwähnungen`{.action} (E-Mails, in denen Ihre Adresse erwähnt wird).

- **Sortieren nach**: Bewegen Sie den Mauszeiger über den Eintrag `Sortieren nach`{.action}, um das Sortierkriterium für E-Mails auszuwählen: **Datum**, **Von**, **An**, **Betreff**, **Anlagen**, **Wichtigkeit** oder **Größe**. Der Pfeil links neben dem Kriterium zeigt die aktuelle Reihenfolge an; klicken Sie erneut auf dasselbe Kriterium, um sie umzukehren.

- **Anzeigen als**: Bewegen Sie den Mauszeiger über den Eintrag `Anzeigen als`{.action}, um zwischen der Ansicht **Nachrichten** (eine E-Mail pro Zeile) und der Ansicht **Unterhaltungen** (E-Mails nach Diskussionsverlauf gruppiert) zu wechseln.

### Senden und Antworten

Um **eine neue Nachricht zu senden**, klicken Sie auf das Symbol `Neu`{.action} oben in der OWA-Oberfläche. Der Bearbeitungsbereich wird auf der rechten Seite angezeigt. Füllen Sie die Felder Ihrer E-Mail aus (Empfänger, Betreff, Nachrichtentext, Anlagen). Klicken Sie auf `Senden`{.action}, sobald Ihre E-Mail bereit ist.

![useowa](images/use-owa-step7.png){.thumbnail}

Um **auf eine Nachricht zu antworten**, klicken Sie zunächst darauf, um sie anzuzeigen. Klicken Sie anschließend auf `Allen antworten`{.action}, um allen Empfängern zu antworten. Verwenden Sie die Pfeil-nach-unten-Schaltfläche, wenn Sie nur dem Absender der E-Mail antworten möchten (ohne die Empfänger in Kopie), und klicken Sie dann auf `Antworten`{.action}.

![useowa](images/use-owa-step8.png){.thumbnail}

Wenn Sie sich zum Antworten entscheiden, wird der Schnellantwort-Editor über der E-Mail angezeigt. Verfassen Sie hier Ihre Antwort, und sobald Sie Ihre Nachricht senden möchten, klicken Sie auf `Senden`{.action}. Beachten Sie, dass Sie für jede Antwortoption (etwa das Hinzufügen einer Signatur) zunächst die Ansicht durch Klicken auf das Doppelpfeilsymbol auf den vollständigen Bearbeitungsbereich erweitern müssen.

![useowa](images/use-owa-step9.png){.thumbnail}

### Ihren Posteingang organisieren

OWA bietet verschiedene Möglichkeiten, Ihren Posteingang zu organisieren. Sie können:

- [Ordner und Unterordner erstellen](./#einen-ordner-erstellen),
- [E-Mails verschieben](./#e-mails-verschieben),
- [Regeln festlegen](./#posteingangsregeln-erstellen), um automatisch Aktionen auszuführen, sobald eine neue E-Mail eingeht,
- [einen Absender blockieren](./#einen-absender-blockieren), um keine Nachrichten mehr von ihm zu erhalten.

#### Einen Ordner erstellen

Um einen neuen Ordner zu erstellen, klicken Sie mit der rechten Maustaste auf den Namen Ihrer E-Mail-Adresse in der Ordnerstruktur und wählen Sie dann `Neuen Ordner erstellen`{.action}. Auf dieselbe Weise können Sie in bestehenden Ordnern einen Unterordner erstellen, indem Sie auf `Neuen Unterordner erstellen`{.action} klicken.

![useowa](images/use-owa-step10.png){.thumbnail}

#### E-Mails verschieben

Um **eine E-Mail zu verschieben**, können Sie sie einfach per Drag-and-Drop in den Zielordner ziehen oder mit der rechten Maustaste darauf klicken und `Verschieben`{.action} auswählen.
Um **mehrere E-Mails gleichzeitig zu verschieben**, wählen Sie alle über ihre Kontrollkästchen aus. Klicken Sie dann auf `Verschieben`{.action} (auf der rechten Seite) oder auf `Verschieben nach`{.action} (im oberen Bereich). Wählen Sie anschließend den Zielordner aus.

![useowa](images/use-owa-step11.png){.thumbnail}

#### Posteingangsregeln erstellen

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Um Regeln zu erstellen und zu verwalten, klicken Sie zunächst oben auf das Zahnradsymbol und dann auf `Optionen`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Auf der neuen Seite, die sich öffnet, klicken Sie im linken Menü auf `Posteingangs- und Aufräumregeln`{.action}. In der Baumstruktur "Optionen" finden Sie diese Funktion unter "E-Mail" im Bereich "Automatische Verarbeitung". Hier können Sie Regeln in der Liste erstellen, bearbeiten und verschieben.

Um eine neue Regel hinzuzufügen, klicken Sie auf die Schaltfläche `+`{.action}.

![useowa](images/use-owa-step13.png){.thumbnail}

Geben Sie die erforderlichen Informationen entsprechend der Aufgabe ein, die diese Regel ausführen soll. Klicken Sie anschließend auf `OK`{.action}.

![useowa](images/use-owa-step14.png){.thumbnail}

Detailliertere Anweisungen zum Erstellen von Posteingangsregeln finden Sie in unserer Anleitung: [Posteingangsregeln in OWA erstellen](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

#### Einen Absender blockieren

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Klicken Sie oben rechts auf das Zahnradsymbol und dann auf `Optionen`{.action}. Folgen Sie weiterhin in der linken Spalte der Baumstruktur "E-Mail" unter "Konten" und dann "Blockieren oder zulassen".

Geben Sie im Bereich "**Gesperrte Absender**" eine zu blockierende E-Mail-Adresse oder einen Domainnamen ein und klicken Sie dann auf die Schaltfläche `+`{.action}, um diese in die Liste aufzunehmen.

![useowa](images/owa_exchange_block.png){.thumbnail}

### Ihre Kontakte verwalten

Um Ihre Kontakte zu verwalten, klicken Sie zunächst oben links auf der Seite auf die blaue App-Launcher-Schaltfläche (die auch Zugriff auf Kalender, Aufgaben und andere Module bietet) und dann auf `Personen`{.action}.

![useowa](images/use-owa-step15.png){.thumbnail}

Auf der neuen Seite können Sie einen neuen Kontakt hinzufügen, eine Kontaktliste erstellen und vorhandene Kontakte entfernen.

#### Einen Kontakt hinzufügen

Klicken Sie auf `Neu`{.action} und geben Sie dann die Daten des Kontakts ein, den Sie hinzufügen möchten. Klicken Sie anschließend auf `Speichern`{.action}.

![useowa](images/use-owa-step16.png){.thumbnail}

#### Eine Kontaktliste erstellen

Klicken Sie auf den Pfeil nach unten neben `Neu`{.action} und dann auf `Kontaktliste`{.action}. Geben Sie ihr einen Namen, fügen Sie Kontakte hinzu und klicken Sie anschließend auf `Speichern`{.action}.

![useowa](images/use-owa-step17.png){.thumbnail}

### Ihr Passwort ändern

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Sie können das Passwort Ihres Accounts ändern, während Sie bei OWA angemeldet sind. Klicken Sie hierzu oben auf das Zahnradsymbol und dann auf `Optionen`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Erweitern Sie auf der neuen Seite den Tab "Allgemein" in der Baumstruktur auf der linken Seite und klicken Sie dann auf `Mein Konto`{.action}. Klicken Sie abschließend auf `Kennwort ändern`{.action}.

![useowa](images/use-owa-step18.png){.thumbnail}

Geben Sie im neuen Fenster, das sich öffnet, Ihr aktuelles Passwort ein. Geben Sie anschließend ein neues Passwort ein und bestätigen Sie es durch erneute Eingabe. Klicken Sie auf `Speichern`{.action}, um das neue Passwort zu speichern.

> [!primary]
>
> Denken Sie daran, Ihr neues Passwort auf allen Geräten einzugeben, die für den Zugriff auf diesen Account verwendet werden (zum Beispiel in Ihrer E-Mail-Client-Software). Sollten Sie Schwierigkeiten mit Ihrem Passwort haben, wenden Sie sich an Ihren Dienstadministrator.

![useowa](images/use-owa-step19.png){.thumbnail}

### Eine automatische Antwort hinzufügen

In OWA können Sie eine automatische Antwort für Ihren Posteingang erstellen, damit E-Mails während Ihrer Abwesenheit nicht unbeantwortet bleiben. Klicken Sie hierzu oben auf das Zahnradsymbol und dann auf `Automatische Antworten`{.action}.

![useowa](images/use-owa-step20.png){.thumbnail}

Wählen Sie im sich öffnenden Fenster die Option "Automatische Antworten senden". Sie können den Auto-Responder dann so einstellen, dass er verschiedene Kriterien erfüllt:

- E-Mails mit automatischer Antwort für ein festes Zeitintervall oder dauerhaft senden, bis sie manuell deaktiviert werden,
- definieren, welche Absender automatische Antworten erhalten (nur interne Absender oder auch externe Absender einschließen).

Geben Sie die erforderlichen Informationen entsprechend der Aufgabe ein, die Sie mit dieser Regel ausführen möchten. Klicken Sie anschließend auf `OK`{.action}.

![useowa](images/use-owa-step21.png){.thumbnail}

Detailliertere Anweisungen zum Erstellen automatischer Antworten finden Sie in unserer Anleitung: [Automatische Antwort in OWA erstellen](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Eine Signatur hinzufügen

Um eine E-Mail-Signatur hinzuzufügen, klicken Sie oben auf das Zahnradsymbol und dann auf `Optionen`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Klicken Sie auf der linken Seite der neuen Seite auf `E-Mail-Signatur`{.action}. In der Baumstruktur der Optionen befindet sich dieser Eintrag unter "E-Mail" und "Layout". Von hier aus können Sie die Signatur aktivieren, deaktivieren und bearbeiten.

![useowa](images/use-owa-step22.png){.thumbnail}

Verfassen Sie Ihre E-Mail-Signatur im Editor-Feld. Sie können angeben, ob Sie die Standardsignatur nur in neuen E-Mails oder auch in Antworten und weitergeleiteten E-Mails einfügen möchten. Sobald Sie fertig sind, klicken Sie zum Bestätigen auf `Speichern`{.action}.

Anweisungen zum Erstellen automatischer Signaturen mithilfe domainübergreifender Vorlagen finden Sie in unserer Anleitung: [Automatische Signaturen erstellen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers).

### Zugriff auf den Bereich Optionen

Um auf alle Ihre Einstellungen zuzugreifen, klicken Sie oben auf das Zahnradsymbol und dann auf `Optionen`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Sie können dann die Baumstruktur "Optionen" auf der linken Seite der Seite durchsuchen. Auf dieser Seite können Sie weitere Anpassungen am Layout und Verhalten Ihres E-Mail-Accounts vornehmen. Beachten Sie, dass aus Sicherheitsgründen einige Account-Optionen von OVHcloud deaktiviert sein können.

![useowa](images/use-owa-step23.png){.thumbnail}

### Cookie-Verwaltung

Das für unsere E-Mail-Angebote verwendete Webmail basiert auf der Software Microsoft Outlook Web App. Es kann daher Metadaten in Form von Cookies namens `appsforoffice.microsoft.com` mit Microsoft-Servern austauschen.

Wenn Sie diese Datenübertragungen deaktivieren möchten, können Sie eine Erweiterung zur Inhaltsblockierung in Ihrem Browser verwenden (zum Beispiel uBlock Origin oder Ghostery).
Das Deaktivieren dieser Cookies kann jedoch die Stabilität Ihres Webmails beeinträchtigen.

## Weiterführende Informationen

[Automatische Antworten in OWA erstellen](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies)

[Einen Ordner über die OWA-Oberfläche freigeben](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_directory_sharing)

[Kalender über die OWA-Oberfläche freigeben](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Kontaktgruppe erstellen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)

Treten Sie unserer [User Community](/links/community) bei.
