---
title: 'E-Mail-Accounts mit dem OVH Mail Migrator migrieren'
excerpt: 'Erfahren Sie hier, wie Sie Ihre E-Mail-Accounts mit dem OVH Mail Migrator zu OVHcloud migrieren'
slug: exchange_migration_von_e-mail-accounts_-_ovh_mail_migrator
section: Account-Migration
order: 03
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 14.02.2022**

## Ziel

[OVH Mail Migrator](https://omm.ovh.net/){.external} ist ein von OVHcloud entwickeltes Tool. Sie können damit E-Mail-Accounts auf Ihre OVHcloud E-Mail-Accounts oder einen externen E-Mail-Dienst migrieren. Dabei können verschiedene Inhalte wie E-Mails, Kontakte, Kalender und Aufgaben übertragen werden, sofern diese mit Ihren E-Mail-Accounts kompatibel sind.

**Diese Anleitung erklärt, wie Sie Ihre E-Mail-Accounts mithilfe des OVH Mail Migrator zu OVHcloud migrieren.**

## Voraussetzungen

- Sie haben einen E-Mail-Dienst bei OVHcloud: [Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/){.external}, [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/){.external} oder MX Plan (aus dem MX Plan Angebot oder als Teil eines [OVHcloud Webhostings](https://www.ovhcloud.com/de/web-hosting/){.external}).
- Sie verfügen über die Login-Daten für die Quell-Accounts, die Sie migrieren möchten (*Source*).
- Sie verfügen über die Login-Daten der OVHcloud Ziel-Accounts, auf die Sie die Inhalte übertragen möchten (*Destination*).

## In der praktischen Anwendung

Sie können über <https://omm.ovh.net/> auf den **OVH Mail Migrator** zugreifen. Er bietet drei Migrationsarten:

- [Single migration](#standalone): Einzelmigration, um einen E-Mail-Account auf einen anderen E-Mail-Account zu migrieren. Diese Lösung wird empfohlen, um einen oder mehrere E-Mail-Accounts zu migrieren (die Schritte müssen für jede migrierte Adresse wiederholt werden).
- [Migration by file](#file): Den Inhalt eines E-Mail-Accounts, der zuvor in einer Datei gesichert wurde, auf einen andere E-Mail-Account migrieren. Kompatibel mit den Dateiformaten PST, ICS und VCF.
- [Multiple migrations (project mode)](#project): Über den Projektmodus können Sie mehrere Migrationen in einem Projekt verwalten. Diese Methode ist geeignet, um eine größere Anzahl an Accounts zu migrieren.

### Einzelmigration <a name="standalone"></a>

#### Migration starten

Öffnen Sie auf <https://omm.ovh.net/> `New Migration`{.action} im Menü von `Migration`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Ergänzen Sie auf der angezeigten Seite alle angeforderten Informationen.

- **Account**: Geben Sie die Informationen zum **Quell-Account** und zum **Ziel-Account** ein. Zur Erinnerung: Der Inhalt des **Source account** wird auf den **Destination account** übertragen.

|Information|Beschreibung|
|---|---|
|Server type|Wählen Sie den Server-Typ Ihrer Accounts aus. Ist einer dieser Accounts bei OVHcloud gehostet, wählen Sie **Hosted by OVHcloud (Autodetect)** aus. Die Angaben mit Ausnahme des Passworts werden so automatisch ergänzt.|
|Server URL|Geben Sie die Adresse des Servers ein, auf dem Ihre Accounts gehostet sind. Möglicherweise wird dieses Feld nach Auswahl des Server-Typs automatisch ausgefüllt.|
|Login|Geben Sie die vollständige E-Mail-Adresse an.|
|Administrator account with delegation|Dieses Feld erscheint nur bei bestimmten Server-Typen.|
|Password|Geben Sie das Passwort des E-Mail-Accounts ein.|

- **Options**: Wählen Sie die Elemente aus, die Sie migrieren möchten. Je nach gewähltem Server-Typ stehen einige Elemente möglicherweise nicht zur Verfügung.

- **Information**: Geben Sie eine E-Mail-Adresse ein, um über den Fortschritt der Migration informiert zu werden.

Klicken Sie auf `Start Migration`{.action}, nachdem Sie alle Daten eingegeben haben. Wenn die Informationen korrekt sind, startet die Migration.

Im angezeigten Fenster können Sie den Migrationsverlauf mitverfolgen. Notieren Sie die angezeigte `Migration ID`{.action} und warten Sie, bis der Vorgang beendet ist. Die Migrationsdauer hängt von der Anzahl der zu migrierenden Elemente ab. Wenn Sie später zur Nachverfolgungsseite zurückkehren möchten, lesen Sie den nachstehenden Abschnitt "Migration verfolgen".

#### Migration verfolgen  

Es gibt zwei Wege, um eine Einzelmigration zu verfolgen:

- Sie erhalten Benachrichtigungen über den Fortschritt der Migration per E-Mail.
- Öffnen Sie auf <https://omm.ovh.net/> `Track / Synchronise`{.action} im Menü von `Migration`{.action}. Geben Sie hier die `Migration ID`{.action} und den betreffenden `Source account`{.action} an.

![omm](images/omm-migration-track.png){.thumbnail}

Auf der angezeigten Seite können Sie den Migrationsablauf verfolgen. Es wird angezeigt, dass der Vorgang noch nicht begonnen hat, noch im Gange ist oder bereits abgeschlossen wurde. Abhängig vom Status des Vorgangs können Sie mehrere Aktionen vornehmen:

- `Stop the process`{.action}: Sie können hiermit die Migration abbrechen. Bereits migrierte Elemente bleiben im Ziel-Account bestehen.
- `Delete migrated items`{.action}: Bereits migrierte Elemente werden damit im Ziel-Account gelöscht. Sie können einen bestimmten Synchronisationspunkt auswählen, ab dem die Elemente gelöscht werden.
- `Synchronise`{.action}: Damit können neue Elemente, die bei einer vorherigen Synchronisation zwischen Quell- und Ziel-Account noch nicht migriert wurden, übertragen werden. Es handelt sich hierbei um die Migration der Elemente, die verglichen mit dem Quell-Account im Ziel-Account fehlen.

### Migration per Datei <a name="file"></a>

#### Migration starten

Öffnen Sie auf <https://omm.ovh.net/> `New PST/ICS/VCF migration`{.action} im Menü von `PST/ICS/VCF`{.action}.

Diese Methode benötigt eine Datei mit den Inhalten, die Sie auf den E-Mail-Account migrieren möchten.

![omm](images/omm-migration-files.png){.thumbnail}

Tragen Sie auf der angezeigten Seite nun alle Informationen für den **Ziel-Account** ein und klicken Sie dann auf den Button `Start Migration`{.action}.

Wenn die eingegebenen Informationen korrekt sind, öffnet sich ein Fenster, über das Sie die Datei auf Ihrem Rechner auswählen können. Klicken Sie anschließend auf den Button `Upload`{.action} und warten Sie, bis die Aktion ausgeführt wurde. Dies kann je nach Dateigröße einige Zeit in Anspruch nehmen. Sie können auf dieser Seite den Fortschritt des Uploads mitverfolgen.

Nachdem die Datei auf OMM hochgeladen wurde, geben Sie erneut das Passwort des **Ziel-Accounts** ein und klicken Sie dann auf `Start Migration`{.action}. Wenn die angegebenen Informationen korrekt sind, können Sie die Migration starten, indem Sie auf den Button `Start Migration`{.action} klicken.

Im angezeigten Fenster können Sie den Migrationsverlauf mitverfolgen. Denken Sie daran, die angezeigte `Migration ID`{.action} zu notieren und warten Sie bis zum Ende der Migration.
Die Zeit bis zur Fertigstellung hängt von der Anzahl der zu migrierenden Elemente ab. Wenn Sie zu dieser Anzeige zurückkehren möchten, fahren Sie mit dem folgenden Abschnitt fort.

#### Migration verfolgen

Es gibt zwei Wege, um eine Migration per PST, ICS oder VCF zu verfolgen:

- Sie erhalten Benachrichtigungen über den Fortschritt der Migration per E-Mail.
- Öffnen Sie auf <https://omm.ovh.net/> `Follow / Resume`{.action} im Menü von `Migration`{.action}. Geben Sie hier die `Migration ID`{.action} und den betreffenden `Destination account`{.action} an.

![omm](images/omm-migration-track.png){.thumbnail}

Auf der angezeigten Seite können Sie den Migrationsverlauf verfolgen. Sie werden benachrichtigt, wenn der Vorgang startet, in Bearbeitung ist oder beendet wurde. Abhängig vom Status des Vorgangs können Sie verschiedene Aktionen vornehmen:

- `Stop the process`{.action}: Sie können damit die Migration abbrechen. Bereits migrierte Elemente bleiben im Ziel-Account bestehen.
- `Delete migrated items`{.action}: Migrierte Elemente können damit im Ziel-Account gelöscht werden.

### Mehrfachmigration durchführen und verfolgen (Projekt) <a name="project"></a>

Öffnen Sie auf <https://omm.ovh.net/> `New multiple migrations project`{.action} im Untermenü von `Project`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Vervollständigen Sie die Angaben zum **neuen Projekt**:

- Vergeben Sie einen Namen für Ihr Migrationsprojekt.
- Geben Sie ein Passwort für den Zugriff auf das Tracking-Interface des Projekts ein.
- Geben Sie eine E-Mail-Adresse ein, um über den Fortschritt Ihres Migrationsprojekts informiert zu werden.

Klicken Sie auf `Create Project`{.action}. Auf der folgenden Seite können Sie Ihr Migrationsprojekt verwalten und nachverfolgen. Notieren Sie die angezeigte **Projektnummer**.

![omm](images/omm-migration-project01.png){.thumbnail}

Sie können nun mit der Migration Ihrer Accounts beginnen. Das Interface enthält verschiedene Tabs:

- `Resume`: Hier können Sie den Migrationsverlauf Ihres Projekts verfolgen. Sie verfügen über einen Button, mit dem Sie die laufenden Migrationen pausieren und fortsetzen können.

- `Multiple Import`: Sie können der Warteschleife über den Import einer Datei (im Format CSV oder Excel) mehrere Migrationen hinzufügen. Die Syntax der Datei muss eine genaue Formatierung einhalten. Wir empfehlen, die verfügbaren Templates zu verwenden. Die Datei hat folgende Form:

```

"Source Type(IMAP/Exchange/POP)";Source Server url;Source Login/Mail;Source Password;Destination Type;"Destination Url(can be leaved empty if hosted by OVH)";Destination Mail;Destination Password;Source admin mail (delegation);Destination Admin Mail (delegation)
IMAP;myimap.server.com;mywonderfulmail@myserver.com;My_password;Exchange;https://ex3.mail.ovh.net/ews/exchange.asmx;mygreatmailaddress@mydomain.ovh;My_password2;"";""

```

Idealerweise wird die Datei mit einer Spreadsheet-Software geöffnet, um sie zu bearbeiten.

- `Add`: Hier können Sie Migrationen unter Angabe einzelner Accounts zur Warteschlange hinzufügen. Sie können jedoch die Quell- und Ziel-Server als Standardwerte beibehalten.

![omm](images/omm-migration-project02.png){.thumbnail}

- `Options`: Sie können die Elemente festlegen, die der OVH Mail Migrator übertragen soll, sowie die Anzahl der gleichzeitigen Anfragen bestimmen, die das Tool während des Migrationsprozesses vornehmen kann.

![omm](images/omm-migration-project03.png){.thumbnail}

- `Log out`: Hier können Sie sich von der Tracking-Seite des Projekts abmelden, ohne Auswirkungen auf den Migrationsverlauf.

Um erneut auf Ihr Migrationsprojekt zuzugreifen, öffnen Sie auf <https://omm.ovh.net/> `Manage your migration project`{.action} im Menü von `Project`{.action}. Geben Sie nun die `Migration project ID`{.action} und das zugehörige `Password`{.action} ein, um sich einzuloggen.

## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
