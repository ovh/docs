---
title: 'Sicherheitseinstellungen eines E-Mail-Dienstes verwalten'
slug: passwort-sicherheitseinstellungen-verwalten
excerpt: 'Erfahren Sie hier, wie Sie die Sicherheitseinstellungen Ihres E-Mail-Dienstes verwalten'
section: 'Erste Schritte mit Exchange'
order: 6
---

**Letzte Aktualisierung am 22.04.2022**

## Einleitung

Mit den E-Mail-Diensten von OVHcloud können Sie professionelle E-Mail-Adressen erstellen. Um diese Umgebung zu sichern, können Sie die globalen Sicherheitseinstellungen für Ihre E-Mails-Accounts verwalten.

**Diese Anleitung erläutert die Sicherheitseinstellungen Ihres E-Mail-Dienstes.**

## Voraussetzungen

- Sie verfügen über einen [OVHcloud E-Mail-Dienst](https://www.ovhcloud.com/de/emails/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Bereich `Web Cloud`{.action}.

## In der praktischen Anwendung

Über die Sicherheitseinstellungen Ihres E-Mail-Dienstes können Sie die folgenden vier Aktionen ausführen:

- Sicherheit der E-Mail-Accounts bei Login-Versuchen der Benutzer erhöhen
- Komplexität der Account-Passwörter Ihres E-Mail-Dienstes erhöhen
- Überprüfung von auf unseren Servern eingehenden Nachrichten zu Ihren E-Mail-Adressen verschärfen (nur für [Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/) Accounts)
- festlegen, wie „unerwünschte“ Nachrichten (Spam-Mails) in Ihren Posteingängen angezeigt werden (nur für [Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/) Accounts)

Um auf die Sicherheitseinstellungen Ihres E-Mail-Accounts zuzugreifen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und begeben Sie sich in den Bereich `Web Cloud`{.action}. 

|E-Mails und E-Mail Pro|Exchange| 
|---|---| 
|Klicken Sie auf `E-Mails`{.action} bzw. `E-Mail Pro`{.action} und wählen Sie die betreffende Lösung aus. Klicken Sie auf den Tab `Mehr`, dann auf `Verwaltung der Sicherheitseinstellungen`{.action}.|Klicken Sie auf `Microsoft`{.action}, dann auf `Exchange`{.action} und wählen Sie die betreffende Lösung aus. Klicken Sie auf `Sicherheit`{.action}.|
|![Exchange Sicherheit](images/manage-security01.png){.thumbnail}|![Exchange Sicherheit](images/manage-security02.png){.thumbnail}|

> [!primary]
>
> Wenn der Tab `Mehr`{.action} nicht im Verwaltungsbereich von `E-Mails`{.action} zu sehen ist, bedeutet das, dass Sie einen MXplan "Legacy" verwenden. Bei diesen MXplan Diensten gibt es keine spezielle Sicherheitsverwaltung.

Befolgen Sie nun die Anleitung entsprechend den von Ihnen gewünschten Aktionen.


- [Sicherheit beim Login erhöhen](#enhanced-security): Legen Sie fest, ob Accounts nach einer bestimmten Anzahl gescheiterter Login-Versuche gesperrt werden sollen.
- [Komplexität der Passwörter erhöhen](#password-complexity): Legen Sie Komplexitätsanforderungen und Regeln für die Passwortänderung fest.
- [Überprüfung von eingehenden Nachrichten verschärfen (nur Exchange)](#incoming-messages-verification): Legen Sie hier fest, ob eingehende Nachrichten auf einen legitimen Absender überprüft werden sollen (Überprüfung der DKIM- und/oder SPF-Signatur).
- [Anzeige von Spam-Mails festlegen (nur Exchange)](#unwanted-messages-management): Stellen Sie hier ein, ob Spam-Mails einen Tag erhalten sollen, über den sie als solche identifiziert werden können, oder ob sie direkt in den Spam-Ordner verschoben werden.

### Sicherheit beim Login erhöhen <a name="enhanced-security"></a>

Hier können Sie festlegen, ob E-Mail-Accounts nach einer bestimmten Anzahl fehlgeschlagener Login-Versuche gesperrt werden sollen.

Geben Sie hierzu die Informationen aus der nachstehenden Tabelle ein:

- **Schwelle für die Sperrung**: Geben Sie die Anzahl der fehlgeschlagenen Login-Versuche ein, nach denen der Account gesperrt werden soll. Geben Sie „0“ ein, wenn der Account nie gesperrt werden soll.
- **Zeit bis zum Zurücksetzen**: Dieses Feld wird nur angezeigt, wenn eine Schwelle für die Sperrung festgelegt wurde. Geben Sie den Zeitraum in Minuten an, bis der Zähler für gescheiterte Verbindungsversuche auf Null zurückgesetzt wird.
- **Dauer der Sperrung**: Dieses Feld wird nur angezeigt, wenn eine Schwelle für die Sperrung festgelegt wurde. Geben Sie die Dauer in Minuten an, während der der E-Mail-Account gesperrt bleibt, wenn die Schwelle für die Sperrung erreicht wurde.

Wenn Sie alle Informationen angegeben haben, bestätigen Sie die Änderungen für „E-Mail“- und „E-Mail Pro“-Lösungen, indem Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action} klicken. Klicken Sie für Exchange auf `Änderungen speichern`{.action}.

### Komplexität der Passwörter erhöhen <a name="password-complexity"></a>

Hier legen Sie Komplexitätsanforderungen und Regeln für die Passwortänderung fest.

Geben Sie hierzu die Informationen aus der nachstehenden Tabelle ein:

- **Anforderungen an die Komplexität**: Hier können Sie Regeln für die Komplexität der Passwörter festlegen:<br> \- Der Benutzername darf weder ganz noch teilweise enthalten sein.<br> \- Das Passwort muss mindestens 6 Zeichen enthalten.<br> \- Das Passwort muss Großbuchstaben, Kleinbuchstaben, Sonderzeichen (zum Beispiel ! oder $) und Ziffern enthalten.
- **Sperrzeit für Passwortänderung**: Hier können Sie eine minimale Gültigkeitsdauer der Passwörter Ihrer E-Mail-Accounts festlegen. Benutzer müssen eine bestimmte Anzahl an Tagen abwarten, bevor sie ihr Passwort ändern können.
- **Maximale Gültigkeitsdauer des Passworts**: Hier können Sie eine maximale Gültigkeitsdauer der Passwörter Ihrer E-Mail-Accounts festlegen. Benutzer müssen ihr Passwort nach Ablauf dieser Zeit ändern.
- **Passwort-Chronik behalten (nur Exchange)**: Dieses Feld erscheint nur, wenn eine maximale Gültigkeitsdauer festgelegt wurde. Legen Sie die Gültigkeitsdauer (in Tagen) früherer Passwörter fest, die wieder verwendet werden können.
- **Mindestlänge des Passworts**: Hier können Sie eine Mindestgröße für die Länge des Passworts eingeben, die ein Benutzer bei der Passwortänderung einhalten muss.|

Wenn Sie alle Informationen angegeben haben, bestätigen Sie die Änderungen für „E-Mail“- und „E-Mail Pro“-Lösungen, indem Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action} klicken. Klicken Sie für Exchange auf `Änderungen speichern`{.action}.

### Überprüfung von eingehenden Nachrichten verschärfen (nur Exchange) <a name="incoming-messages-verification"></a>

Sie können festlegen, ob auf Ihren E-Mail-Accounts eingehende Nachrichten auf einen legitimen Absender überprüft werden sollen (Überprüfung der DKIM- und/oder SPF-Signatur).

Setzen Sie hierzu einen Haken in den entsprechenden Feldern aus der nachstehenden Tabelle:

|Information|Beschreibung| 
|---|---| 
- **Überprüfung der DKIM-Signatur aktivieren**: Setzen Sie hier einen Haken, wenn unsere Server die DKIM-Signatur der auf Ihren Exchange Accounts eingehenden Nachrichten überprüfen soll. So werden die Authentizität der Sender-Domain sowie die Vertrauenswürdigkeit der Nachricht sichergestellt. Nachrichten von nicht vertrauenswürdigen Absendern können identifiziert und mit Spam-Tags versehen werden.
- **Überprüfung des SPF-Schutzes aktivieren**: Setzen Sie hier einen Haken, wenn unsere Server überprüfen sollen, dass die Quelle der eingegangenen Nachricht im SPF-Eintrag der Sender-Domain enthalten ist. So können Nachrichten von nicht vertrauenswürdigen Absendern identifiziert und mit Spam-Tags versehen werden.

Wenn Sie Ihre Auswahl getroffen haben, bestätigen Sie die Änderungen, indem Sie auf `Änderungen speichern`{.action} klicken.

### Anzeige von Spam-Mails festlegen (nur Exchange) <a name="unwanted-messages-management"></a>	

Sie können festlegen, ob auf Ihren E-Mail-Accounts eingehende Spam-Mails einen Tag erhalten sollen, über den sie als solche identifiziert werden können, oder ob sie direkt in den Spam-Ordner verschoben werden.

Setzen Sie hierzu einen Haken in den entsprechenden Feldern aus der nachstehenden Tabelle:

|Information|Beschreibung| 
|---|---| 
- **Spam-Mails identifizieren**: Setzen Sie hier einen Haken, wenn unsere Server einen Tag zu Nachrichten hinzufügen sollen, um diese als Spam-Mails zu markieren.
- **Spam-Mails in den Spam-Ordner verschieben**: Setzen Sie hier einen Haken, wenn unsere Server eingegangene Spam-Mails automatisch in den Spam-Ordner verschieben sollen.

Wenn Sie Ihre Auswahl getroffen haben, bestätigen Sie die Änderungen, indem Sie auf `Änderungen speichern`{.action} klicken.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
