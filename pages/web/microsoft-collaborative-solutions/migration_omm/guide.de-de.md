---
title: 'E-Mail-Accounts mit dem OVH Mail Migrator migrieren'
excerpt: 'Hier erfahren Sie, wie Sie Ihre E-Mail-Accounts mit dem OVH Mail Migrator zu OVH migrieren.'
slug: exchange_migration_von_e-mail-accounts_-_ovh_mail_migrator
section: Account-Migration
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 25.11.2021**

## Ziel

[OVH Mail Migrator](https://omm.ovh.net/){.external} ist ein von OVHcloud entwickeltes Werkzeug. Sie können Ihre E-Mail-Accounts auf Ihre OVHcloud E-Mail-Adressen oder einen externen E-Mail-Dienst migrieren. Dabei können verschiedene Inhalte wie beispielsweise E-Mails, Kontakte, Kalender und Aufgaben übertragen werden, sofern diese mit Ihren E-Mail-Adressen kompatibel sind.

**Hier erfahren Sie, wie Sie Ihre E-Mail-Accounts mithilfe unseres OVH Mail Migrator zu OVHcloud migrieren.**

## Voraussetzungen

- Sie haben einen E-Mail-Dienst bei OVH, beispielsweise [Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/){.external}, [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/){.external} oder MX Plan (aus dem MX Plan Angebot oder als Teil eines [OVH Webhostings](https://www.ovhcloud.com/de/web-hosting/){.external}).
- Sie verfügen über die Login-Daten für die E-Mail-Accounts, die Sie migrieren möchten (Quell-Accounts).
- Sie verfügen über die Login-Daten der OVH E-Mail-Accounts, auf die Sie die Inhalte übertragen möchten (Ziel-Accounts).

## In der praktischen Anwendung

Sie können über <https://omm.ovh.net/> auf den **OVH Mail Migrator** zugreifen. Es verwaltet 3 Migrationsarten:

- [Einzelne Migration](#standalone): Einen E-Mail-Account auf einen anderen E-Mail-Account migrieren. Diese Lösung wird empfohlen, um einen oder mehrere E-Mail-Accounts zu migrieren (die Schritte müssen für jede migrierte Adresse wiederholt werden).
- [Migration per Datei](#file): Inhalt eines E-Mail-Accounts, der zuvor in einer Datei abgerufen wurde, auf eine andere E-Mail-Adresse migrieren. Kompatibel mit den Dateiformaten PST, ICS und VCF.
- [Mehrfachmigration (Projekt)](#project): Über den Projektmodus können Sie mehrere Migrationen in einem Projekt verwalten. Diese Methode ist geeignet, um eine große Anzahl an Adressen zu migrieren.

### Einzelmigration <a name="standalone"></a>

#### Migration starten

Klicken Sie <https://omm.ovh.net/> im Tab `Migration`{.action}  oben auf `Neue Migration`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Ergänzen Sie auf der angezeigten Seite nun alle angeforderten Informationen.

- **Account**\: Geben Sie die Informationen zum **Quell-Account** und zum **Ziel-Account** ein. Zur Erinnerung: Der Inhalt des **Quell-Accounts** wird auf den **Ziel-Account** übertragen.

|Information|Beschreibung|
|---|---|
|Server-Typ|Wählen Sie den Server-Typ Ihrer Accounts aus. Ist eine dieser Adressen eine OVHcloud-Adresse, **Hosted by OVHcloud (Autodetect)**, können Sie die Informationen automatisch mit Ausnahme des Passworts ergänzen.|
|Server-URL|Geben Sie die Adresse des Servers ein, auf dem Ihre Accounts gehostet sind. Möglicherweise wird dieses Feld nach Auswahl des Server-Typs automatisch ausgefüllt.|
|Login|Geben Sie die vollständige E-Mail-Adresse an.|
|Administrator-Account mit Zugriffsrechten|Dieses Feld erscheint nur bei bestimmten Server-Typen.|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|

- **Optionen**\: Wählen Sie die Elemente aus, die Sie migrieren möchten. Je nach gewähltem Server-Typ stehen einige Elemente möglicherweise nicht zur Verfügung.

- **Informationen**\: Geben Sie eine E-Mail-Adresse ein, um über den Fortschritt der Migration informiert zu werden.

Klicken Sie auf `Migration starten`{.action}, wenn Sie alle Informationen eingegeben haben. Wenn die Informationen korrekt sind, startet die Migration.

Im angezeigten Fenster können Sie den Migrationsverlauf mitverfolgen. Speichern Sie bitte die angezeigte `Migrations-ID`{.action} und warten Sie, bis der Vorgang beendet ist. Die Migrationsdauer hängt von der Anzahl der zu migrierenden Elemente ab. Wenn Sie später zur Nachverfolgungsseite zurückkehren möchten, lesen Sie den nachstehenden Abschnitt „Einzelmigration verfolgen“.

#### Migration verfolgen  

Es gibt zwei Wege, um eine Einzelmigration zu verfolgen:

- über den Fortschritt der Migration per E-Mail
- Klicken Sie <https://omm.ovh.net/>im Tab `Migration`{.action}  auf `Weiter / Synchronisieren`{.action}. Geben Sie nun die `Migrations-ID`{.action} und den betreffenden `Quell-Account`{.action} ein.

![omm](images/omm-migration-track.png){.thumbnail}

Auf der angezeigten Seite können Sie den Migrationsverlauf verfolgen. Sie werden benachrichtigt, wenn der Vorgang startet, in Bearbeitung ist oder beendet wurde. Abhängig vom Status des Vorgangs können Sie mehrere Aktionen vornehmen.

- `Den Vorgang anhalten `{.action}: Sie können die Migration abbrechen. Bereits migrierte Elemente bleiben im Ziel-Account bestehen.
- `Migrierte Elemente löschen`{.action}: Bereits migrierte Elemente können im Ziel-Account gelöscht werden. Sie können einen bestimmten Synchronisationspunkt auswählen, ab dem die Elemente gelöscht werden.
- `Synchronisieren`{.action}: Hier können neue Elemente, die bei einer vorherigen Synchronisation zwischen Quell- und Ziel-Account noch nicht migriert wurden, übertragen werden. Es handelt sich hierbei um die Migration der Elemente, die verglichen mit dem Quell-Account im Ziel-Account fehlen.

### Migration per Datei <a name="file"></a>

#### Migration starten

Klicken Sie auf <https://omm.ovh.net/>der Seite im Tab `PST / ICS / VCF`{.action} auf `Neue PST / ICS / VCF Migration`.

Hier müssen Sie über die Datei mit den Inhalten verfügen, die Sie auf den E-Mail-Account migrieren möchten.

![omm](images/omm-migration-files.png){.thumbnail}

Tragen Sie auf der angezeigten Seite nun alle Informationen für den **Ziel-Account** ein und klicken Sie dann auf den Button `Migration starten`{.action}.

Wenn die eingegebenen Informationen korrekt sind, öffnet sich ein Fenster, über das Sie die Datei auf Ihrem Rechner auswählen können. Klicken Sie anschließend auf den Button `Upload`{.action} und warten Sie, bis Sie herunterladen. Dies kann je nach Dateigröße einige Zeit in Anspruch nehmen. Sie können auf dieser Seite den Fortschritt des Hochladevorgangs mitverfolgen.

Nachdem die Datei auf OMM hochgeladen wurde, geben Sie erneut das Passwort des Ziel-Accounts **ein und klicken Sie** dann auf `Migration starten`{.action}. Wenn die angegebenen Informationen korrekt sind, können Sie die Migration starten, indem Sie auf den Button `Migration starten`{.action} klicken.

Im angezeigten Fenster können Sie den Migrationsverlauf mitverfolgen. Denken Sie daran, die angezeigte `Migrations-ID`{.action} beizubehalten und warten Sie bis zum Ende der Migration Diese Zeit ist abhängig von der Anzahl der zu migrierenden Elemente variabel. Wenn Sie erneut auf diese Nachverfolgung zugreifen möchten, lesen Sie den folgenden Abschnitt.

#### Migration verfolgen

Es gibt zwei Wege, um eine Migration per PST, ICS oder VCF-Datei zu verfolgen:

- über die empfangene E-Mail, die Sie über den Start der Migration informiert

- Von der Seite <https://omm.ovh.net/>aus können Sie Ihre Maus über den Tab `Migration`{.action} im Menü oberhalb der Seite bewegen und auf `Weiter / Synchronisieren`{.action} klicken. Geben Sie nun die `Migrations-ID`{.action} und den betreffenden `Ziel-Account`{.action} ein.

![omm](images/omm-migration-track.png){.thumbnail}

Auf der angezeigten Seite können Sie den Migrationsverlauf verfolgen. Sie werden benachrichtigt, wenn der Vorgang startet, in Bearbeitung ist oder beendet wurde. Abhängig vom Status des Vorgangs können Sie mehrere Aktionen vornehmen.

- Den Prozess anhalten: Sie können die Migration abbrechen. Bereits migrierte Elemente bleiben im Ziel-Account bestehen.
- Migrierte Elemente löschen: Migrierte Elemente können im Ziel-Account gelöscht werden.

### Mehrfachmigration durchführen und verfolgen (Projekt) <a name="project"></a>

Klicken Sie <https://omm.ovh.net/> im Tab `Projekt`{.action} oben auf `Neues Mehrfachmigrationsprojekt`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Vervollständigen Sie die Angaben zum **neuen Projekt**:

- Vergeben Sie einen Namen für Ihr Migrationsprojekt.
- Passwort für den Zugriff auf das Interface zur Verfolgung Ihres Migrationsprojekts.
- eine E-Mail-Adresse, um über den Fortschritt Ihres Migrationsprojekts informiert zu werden.

Klicken Sie auf `Projekt erstellen`{.action}. Auf der folgenden Seite können Sie Ihr Migrationsprojekt verwalten und nachverfolgen. Behalten Sie **die oben angezeigte** Projektnummer.

![omm](images/omm-migration-project01.png){.thumbnail}

Sie können nun mit der Migration Ihrer Accounts beginnen. Das Interface enthält verschiedene Tabs:

- `Weiter`: Hier können Sie den Migrationsverlauf Ihres Projekts verfolgen. Sie verfügen über einen Button, mit dem Sie die laufenden Migrationen in die Warteschleife legen und wieder aufnehmen können.

- `Mehrfacherstellung`: Sie können der Warteschleife über den Import einer Datei (CSV oder Excel) mehrere Migrationen hinzufügen. Der Antragsteller muss eine genaue Formatierung einhalten. wir empfehlen Ihnen, die mitgelieferten Modelle zu verwenden. Die Datei hat folgende Form:

``` 

"Source Type(IMAP/Exchange/POP)";Source Server url;Source Login/Mail;Source Password;Destination Type;"Destination Url(can be leaved empty if hosted by OVH)";Destination Mail;Destination Password;Source admin mail (delegation);Destination Admin Mail (delegation)
IMAP;myimap.server.com;mywonderfulmail@myserver.com;My_password;Exchange;https://ex3.mail.ovh.net/ews/exchange.asmx;mygreatmailaddress@mydomain.ovh;My_password2;"";""

```

Es ist besser, es mit einer Tabellensoftware zu öffnen, um es zu vervollständigen.

- `Hinzufügen`: Hier können Sie pro Account Migrationen in die Warteschlange hinzufügen. Sie können jedoch die Quell- und Ziel-Server als Standardwerte beibehalten.

![omm](images/omm-migration-project02.png){.thumbnail}

- `Optionen`: Sie können die Elemente festlegen, die der OVH Mail Migrator übertragen soll, sowie die Anzahl der gleichzeitigen Anfragen bestimmen, die das Tool während des Migrationsprozesses vornehmen kann.

![omm](images/omm-migration-project03.png){.thumbnail}

- `Trennung`: Hier können Sie sich von der Monitoring-Seite des Projekts abmelden, ohne Auswirkungen auf den Migrationsverlauf.

Um erneut auf Ihr Migrationsprojekt zuzugreifen, loggen Sie sich auf der Seite ein <https://omm.ovh.net/>und klicken Sie oben auf `Projekt`{.action} auf `Projekt verfolgen`{.action} . Geben Sie nun die `Migrations-ID`{.action} und das zugehörige `Passwort`{.action} ein.

## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.