---
title: 'Sicherheitseinstellungen eines Exchange Dienstes verwalten'
slug: passwort-sicherheitseinstellungen-verwalten
excerpt: 'So verwalten Sie die Sicherheitseinstellungen Ihres Exchange Dienstes'
section: 'Erste Schritte mit Exchange'
order: 6
---

**Stand 02.09.2019**

## Einleitung

Mit Exchange verfügen Sie über professionelle E-Mail-Adressen mit erweiterten Funktionen für kollaboratives Arbeiten. Um diese Umgebung zu sichern, können Sie die globalen Sicherheitseinstellungen für Ihre Exchange Accounts verwalten.

**In dieser Anleitung erfahren Sie, wie Sie die Sicherheitseinstellungen Ihres Exchange Dienstes verwalten.**

## Voraussetzungen

- Sie verfügen über einen [Exchange](https://www.ovh.de/emails/){.external} Dienst.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager) eingeloggt und befinden sich im Bereich `Web`{.action}.

## Beschreibung

Über die Sicherheitseinstellungen Ihres Exchange Dienstes können Sie die folgenden vier Aktionen ausführen:

- Sicherheit der Exchange Accounts bei Login-Versuchen der Benutzer erhöhen
- Komplexität der Account-Passwörter Ihres Exchange Dienstes erhöhen
- Überprüfung von auf unseren Servern eingehenden Nachrichten zu Ihren Exchange Adressen verschärfen
- festlegen, wie „unerwünschte“ Nachrichten (Spam-Mails) in Ihren Exchange Accounts angezeigt werden

Um auf die Sicherheitseinstellungen Ihres Exchange Accounts zuzugreifen, loggen Sie sich in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und begeben Sie sich in den Bereich „Web“. Klicken Sie links im Menü auf `Microsoft`{.action}, dann auf `Exchange`{.action} und wählen Sie den betreffenden Exchange Dienst aus.

Klicken Sie auf der angezeigten Seite auf den Tab `Mehr +`{.action}, dann auf `Verwaltung der Sicherheitseinstellungen`{.action}.

![exchange sicherheit](images/exchange-security-step1.png){.external}

Befolgen Sie nun die Anleitung entsprechend den von Ihnen gewünschten Aktionen.

|Aktion|Beschreibung| 
|---|---| 
|[Sicherheit beim Login erhöhen](./#sicherheit-beim-login-erhohen){.external}|Legen Sie fest, ob Accounts nach einer bestimmten Anzahl gescheiterter Login-Versuche gesperrt werden sollen.|
|[Komplexität der Passwörter erhöhen](./#komplexitat-der-passworter-erhohen){.external}|Legen Sie Komplexitätsanforderungen und Regeln für die Passwortänderung fest.|
|[Überprüfung von eingehenden Nachrichten verschärfen](./#uberprufung-von-eingehenden-nachrichten-verscharfen){.external}|Legen Sie hier fest, ob eingehende Nachrichten auf einen legitimen Absender überprüft werden sollen (Überprüfung der DKIM- und/oder SPF-Signatur).|
|[Anzeige von Spam-Mails festlegen](./#anzeige-von-spam-mails-festlegen){.external}|Stellen Sie hier ein, ob Spam-Mails einen Tag erhalten sollen, über den Sie als solche identifiziert werden können, oder ob Sie direkt in den Spam-Ordner verschoben werden.|

### Sicherheit beim Login erhöhen

Hier können Sie festlegen, ob Exchange Accounts nach einer bestimmten Anzahl fehlgeschlagener Login-Versuche gesperrt werden sollen.

Um diese Einstellung vorzunehmen, geben Sie die nachstehenden Informationen an:

|Information|Beschreibung| 
|---|---| 
|Schwelle für die Sperrung|Geben Sie die Anzahl der fehlgeschlagenen Login-Versuche ein, nach denen der Account gesperrt werden soll. Geben Sie „0“ ein, wenn der Account nie gesperrt werden soll.|
|Zeit bis zum Zurücksetzen|Dieses Feld erscheint nur, wenn ein Schwellenwert festgelegt wurde. Geben Sie die erforderliche Zeit ein, nach der der Zähler für die fehlgeschlagenen Login-Versuche auf Null zurückgesetzt wird.|
|Dauer der Sperrung|Dieses Feld erscheint nur, wenn ein Schwellenwert festgelegt wurde. Geben Sie die Dauer an, wie lange der Exchange Account nach Erreichen des Schwellenwerts gesperrt bleibt.|

Wenn Sie alle Informationen angegeben haben, können Sie diese Änderungen bestätigen, indem Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action} klicken. Sie können auch zum nächsten Fensterabschnitt übergehen.

### Komplexität der Passwörter erhöhen

Hier legen Sie Komplexitätsanforderungen und Regeln für die Passwortänderung fest.

Um diese Einstellung vorzunehmen, geben Sie die nachstehenden Informationen an:

|Information|Beschreibung| 
|---|---| 
|Anforderungen an die Komplexität|Hier können Sie Regeln für die Komplexität der Passwörter festlegen:<br> \- Der Benutzername darf weder ganz noch teilweise enthalten sein.<br> \- Das Passwort muss mindestens 6 Zeichen enthalten.<br> \- Das Passwort muss Großbuchstaben, Kleinbuchstaben, Sonderzeichen (zum Beispiel ! oder $) und Ziffern enthalten.|
|Sperrzeit für Passwortänderung|Hier können Sie eine minimale Gültigkeitsdauer der Passwörter Ihrer Exchange Accounts festlegen. Das bedeutet, dass Benutzer eine bestimmte Anzahl an Tagen abwarten müssen, bevor sie Ihr Passwort ändern können.|
|Maximale Gültigkeitsdauer des Passworts|Hier können Sie eine maximale Gültigkeitsdauer der Passwörter Ihrer Exchange Accounts festlegen. Das bedeutet, dass Benutzer Ihr Passwort nach Ablauf dieser Zeit ändern müssen.|
|Passwort-Chronik behalten|Dieses Feld erscheint nur, wenn eine maximale Gültigkeitsdauer festgelegt wurde. Geben Sie hier an, ob und für wie lange vorherige Passwörter erneut verwendet werden dürfen.|
|Mindestlänge des Passworts|Hier können Sie eine Mindestgröße für die Länge des Passworts eingeben, die ein Benutzer bei der Passwortänderung einhalten muss.|

Wenn Sie alle Informationen angegeben haben, können Sie diese Änderungen bestätigen, indem Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action} klicken. Sie können auch zum nächsten Fensterabschnitt übergehen.

### Überprüfung von eingehenden Nachrichten verschärfen

Sie können festlegen, ob auf Ihren Exchange Accounts eingehende Nachrichten auf einen legitimen Absender überprüft werden sollen (Überprüfung der DKIM- und/oder SPF-Signatur).

Um diese Einstellung vorzunehmen, geben Sie die nachstehenden Informationen an:

|Information|Beschreibung| 
|---|---| 
|Überprüfung der DKIM-Signatur aktivieren|Setzen Sie hier einen Haken, wenn unsere Server die DKIM-Signatur der auf Ihren Exchange Accounts eingehenden Nachrichten überprüfen soll. So werden die Authentizität der Sender-Domain sowie die Vertrauenswürdigkeit der Nachricht sichergestellt. Nachrichten von nicht vertrauenswürdigen Absendern können identifiziert und mit Spam-Tags versehen werden.|
|Überprüfung des SPF-Schutzes aktivieren|Setzen Sie hier einen Haken, wenn unsere Server überprüfen sollen, dass die Quelle der eingegangenen Nachricht im SPF-Eintrag der Sender-Domain enthalten ist. So können Nachrichten von nicht vertrauenswürdigen Absendern identifiziert und mit Spam-Tags versehen werden.|

Wenn Sie alle Informationen angegeben haben, können Sie diese Änderungen bestätigen, indem Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action} klicken. Sie können auch zum nächsten Fensterabschnitt übergehen.

### Anzeige von Spam-Mails festlegen

Sie können festlegen, ob auf Ihren Exchange Accounts eingehende Spam-Mails einen Tag erhalten sollen, über den Sie als solche identifiziert werden können, oder ob Sie direkt in den Spam-Ordner verschoben werden.

Um diese Einstellung vorzunehmen, geben Sie die nachstehenden Informationen an:

|Information|Beschreibung| 
|---|---| 
|Spam-Mails identifizieren|Setzen Sie hier einen Haken, wenn unsere Server einen Tag zu Nachrichten hinzufügen sollen, um diese als Spam-Mails zu markieren.|
|Spam-Mails in den Spam-Ordner verschieben|Setzen Sie hier einen Haken, wenn unsere Server eingegangene Spam-Mails automatisch in den Spam-Ordner verschieben sollen.|

Wenn Sie alle Informationen angegeben haben, bestätigen Sie die Änderungen, indem Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action} klicken.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
