---
title: 'Ordner in OWA freigeben'
excerpt: 'Erfahren Sie hier, wie Sie Ordner zwischen Exchange Accounts teilen'
slug: exchange_2016_einen_ordner_via_owa_webmail_freigeben
legacy_guide_number: g1929
section: 'Outlook Web App (OWA)'
order: 5
---


**Letzte Aktualisierung am 30.09.2020**

## Ziel

Es ist nicht immer sinnvoll, anderen Benutzern die Verwendung eines gesamten E-Mail-Accounts zu erlauben. Die Ordnerfreigabefunktion in Exchange ermöglicht es Ihnen, anderen Benutzern Zugriff auf ausgewählte Ordner in Ihrem Account zu gewähren, indem Sie sehr spezifische Berechtigungen zuweisen.

**Diese Anleitung erläutert, wie Sie Ordner mithilfe der Outlook Web App (OWA) freigeben und die zugehörigen Zugriffsrechte festlegen.**

> [!primary]
>
> Obwohl sich diese Anleitung auf unsere Exchange Dienste bezieht, können Sie den Anweisungen auch für Ihre [E-Mail Pro Accounts](https://www.ovhcloud.com/de/emails/email-pro/) folgen.
>


## Voraussetzungen

- Sie haben bereits einen [OVHcloud Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/) Dienst eingerichtet.
- Sie verfügen über Anmeldeinformationen für den Exchange Account, den Sie konfigurieren möchten.


## In der praktischen Anwendung

### Schritt 1: Zugriffsrechte eines Ordners festlegen

Loggen Sie sich über das [OVHcloud Webmail](https://www.ovhcloud.com/de/mail) in Ihrem Exchange Account ein. Klicken Sie mit der rechten Maustaste auf den freizugebenden Ordner und wählen Sie `Berechtigungen`{.action} im Kontextmenü aus.

![Ordner freigeben](images/exchange-folder-step1.png){.thumbnail}

Fügen Sie im nächsten Fenster einen Benutzer hinzu, indem Sie auf das `+`{.action}-Symbol klicken. Beginnen Sie mit der Eingabe, um Vorschläge aus Ihren Kontakten anzuzeigen, geben Sie eine vollständige E-Mail-Adresse ein oder verwenden Sie die Suchoption über das `Suchverzeichnis`{.action}.

Es stehen mehrere vordefinierte Berechtigungsgruppen („Berechtigungsstufe“) zur Auswahl. Es bietet sich an, zuerst eine dieser Rollen (zum Beispiel „Autor“) auszuwählen, um zu sehen, welche Berechtigungen erteilt werden. Anschließend können Sie diese nach Bedarf anpassen, indem Sie die Kontrollkästchen aktivieren oder deaktivieren.

![Ordner freigeben](images/exchange-folder-step2aag.gif){.thumbnail}

#### Berechtigungsdetails

- **Lesen**

|Berechtigung|Beschreibung|
|---|---|
|Keine|Der Benutzer kann den Inhalt des Ordners nicht einsehen.|
|Alle Details|Der Benutzer kann den Inhalt des Ordners sehen.|


- **Elemente löschen**

|Berechtigung|Beschreibung|
|---|---|
|Keine|Der Benutzer kann keine Elemente löschen|
|Eigene|Der Benutzer kann Elemente löschen, die er selbst erstellt hat.|
|Alle|Der Benutzer kann alle Elemente im Ordner löschen.|


- **Schreiben**

|Berechtigung|Beschreibung|
|---|---|
|Elemente erstellen|Der Benutzer kann neue Elemente im Ordner erstellen.|
|Unterordner erstellen|Der Benutzer kann neue Unterordner im freigegebenen Ordner erstellen.|
|Eigene bearbeiten|Der Benutzer kann Elemente bearbeiten, die er selbst erstellt hat.|
|Alle bearbeiten|Der Benutzer kann alle Elemente im Ordner bearbeiten.|


- **Sonstiges**

|Berechtigung|Beschreibung|
|---|---|
|Besitzer des Ordners|Der Benutzer hat dieselben Berechtigungen für diesen Ordner wie der Besitzer (alle Berechtigungen).|
|Ordnerkontaktperson|Der Benutzer erhält den Ordner betreffende Benachrichtigungen und Anfragen (Statusänderungen, Berechtigungsanfragen, Fehlermeldungen).|
|Ordner sichtbar|Der Ordner wird im Account des Benutzers angezeigt.|

> [!primary]
>**Unterordner**
> 
> - In einem freigegebenen Ordner erstellte Unterordner erhalten automatisch die Berechtigungseinstellungen des übergeordneten Ordners. Wenn Sie neue Berechtigungen für einen Ordner zuweisen und dessen Unterordner ebenfalls freigegeben werden soll(en), müssen die Berechtigungen **für jeden Unterordner** eingerichtet werden.
> 
> - Wenn Sie einen **Unterordner** eines vorhandenen Ordners freigeben, für den keine Berechtigungen festgelegt wurden, muss für den **übergeordneten Ordner** zumindest ein Haken bei „Ordner sichtbar“ gesetzt werden. Tun Sie dies nicht, wird der Unterordner nicht im Account des anderen Benutzers angezeigt. (Der Benutzer kann den Inhalt des übergeordneten Ordners nicht sehen, solange Sie nicht auch die „Lesen“-Berechtigung erteilen.)
> 
> - Benutzer können keine Unterordner löschen, die sie nicht selbst erstellt haben.
> 
> - Benutzer mit der Berechtigung „Besitzer des Ordners“ für einen Unterordner können ihn umbenennen und Berechtigungen für diesen zuweisen.
>


### Schritt 2: Freigegebenen Kalender abrufen

![Ordner freigeben](images/exchange-folder-step3.png){.thumbnail}

Loggen Sie sich über das [OVHcloud Webmail](https://www.ovhcloud.com/de/mail) in Ihrem Exchange Account ein. Klicken Sie in der linken Serviceleiste mit der rechten Maustaste auf Ihren Account-Namen und wählen Sie im Kontextmenü `Freigegebenen Ordner hinzufügen...`{.action} aus. Geben Sie im neuen Fenster den Namen des Accounts ein, von dem ein Ordner freigegeben wurde. Beginnen Sie mit der Eingabe, um Vorschläge aus Ihren Kontakten anzuzeigen, geben Sie eine vollständige E-Mail-Adresse ein oder verwenden Sie die Suchoption über das `Suchverzeichnis`{.action}. Bestätigen Sie den Vorgang, indem Sie auf `Hinzufügen`{.action} klicken. Der neue freigegebene Ordner erscheint direkt unter Ihren anderen Ordnern.


## Weiterführende Informationen

[Verwendung der Outlook Web App](../exchange_2016_verwendung_der_outlook_web_app/)

[Berechtigungen für einen Exchange Account übertragen](../exchange_2013_send_as_versand_als/)

[Kalender in OWA freigeben](../exchange_2016_einen_kalender_via_owa_webmail_freigeben/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
