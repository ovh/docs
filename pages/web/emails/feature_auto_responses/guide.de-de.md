---
title: 'Einrichten von Auto-Antworten für E-Mails'
excerpt: 'Erfahren Sie, wie Sie einen E-Mail-Responder einrichten'
updated: 2021-04-20
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 28.08.2020**

## Ziel

Mit diesem OVHcloud Feature können Sie einen automatischen E-Mail-Responder einrichten, der eine Nachricht für Personen hinterlässt, die in Ihrer Abwesenheit versuchen, Sie per E-Mail zu kontaktieren.

**Diese Anleitung erklärt, wie Sie einen E-Mail-Responder einrichten.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) oder MX Plan in Ihrem Kunden-Account.

## Praktische Anwendung

> [!primary]
>
> Wenn Ihre E-Mail-Adresse Teil eines [**Exchange Dienstes**](https://www.ovhcloud.com/de/emails/hosted-exchange/), [**Email Pro Dienstes**](https://www.ovhcloud.com/de/emails/email-pro/) ist oder der Bereich für Auto-Antworten in Ihrem Kundencenter fehlt, können Sie automatische Antworten stattdessen über Ihr OWA-Webmail erstellen, indem Sie die Anleitung "[Einrichten einer automatischen Antwort in OWA](/pages/web/microsoft-collaborative-solutions/owa_automatic_replies)" heranziehen.

### Anlegen des Responders

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Wechseln Sie zum Bereich `Web Cloud`{.action} und wählen Sie dann Ihre Domain unter `E-Mails`{.action} aus. Klicken Sie dann im Tab `E-Mails`{.action} auf den Button `Verwaltung der Auto-Antworten`{.action}.

Sie gelangen zum Bereich `Verwaltung der Auto-Antworten`, das alle Responder für die gewählte Domain anzeigt.

Klicken Sie auf `Eine Auto-Antwort hinzufügen`{.action}, um einen neuen Responder anzulegen.

![Hosting](images/email_responder01.png){.thumbnail}

Füllen Sie nun im Popup-Fenster das Formular gemäß den folgenden Angaben aus:

#### `Art der Auto-Antwort`

- **An eine Mailbox gebunden**: zu verwenden, wenn es sich um ein bestehendes E-Mail-Konto Ihres E-Mail-Dienstes handelt.
- **Frei**: für eine Alias-Adresse zu verwenden. Ein Alias ist nicht mit einem bestehenden Konto verknüpft.

#### `Mailbox` oder `Name der Auto-Antwort` 

- Wählen Sie den vom Responder betroffenen E-Mail-Account aus. 
- Für den "Frei"-Modus geben Sie hier die Alias-Adresse ein.

#### `Verwendungszeitraum der Auto-Antwort:`

- **Temporär**: Definieren Sie ein Start- und Enddatum für den Responder, z.B. wenn Sie eine Abwesenheit planen.
- **Permanent**: Die automatischen Antworten bleiben aktiv, bis Sie den Responder löschen oder ändern.

#### `Die Nachrichten auf dem Server belassen` oder `Eine Kopie versenden`

- Wählen Sie hier, ob während Ihrer Abwesenheit empfangene E-Mails gelöscht oder aufbewahrt werden sollen.
    - **Nachricht**: Dies ist die Antwort auf eingehende Mails, solange der Responder aktiv ist.
    - **Adresse in Kopie** (nur "Frei"-Modus): Wenn die Empfangsadresse ein Alias ist, müssen Sie das E-Mail-Konto auswählen, in dem eingehende Nachrichten gespeichert werden.

> [!warning]
> Wenn Sie diese Option deaktivieren, werden Nachrichten, die während Ihrer Abwesenheit eingegangen sind, automatisch gelöscht.

Wenn alle Pflichtfelder ausgefüllt sind, klicken Sie auf `Bestätigen`{.action}, um den Responder zu erstellen.

### Änderung oder Löschung des Responders

Ihre Responder werden in der Tabelle im Bereich `Verwaltung der Auto-Antworten` Ihres E-Mail-Dienstes angezeigt. Sie können einen Responder löschen oder ändern, indem Sie auf `...`{.action} rechts davon klicken.

![Hosting](images/email_responder02.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf https://community.ovh.com/en/
