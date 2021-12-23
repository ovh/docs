---
title: 'E-Mail-Accounts mit dem OVH Mail Migrator migrieren'
excerpt: 'Hier erfahren Sie, wie Sie Ihre E-Mail-Accounts mit dem OVH Mail Migrator zu OVH migrieren.'
slug: exchange_migration_von_e-mail-accounts_-_ovh_mail_migrator
section: Account-Migration
---

**Stand 11.01.2019**

## Einleitung

Der [OVH Mail Migrator](https://omm.ovh.net/){.external} ist ein von OVH entwickeltes Tool , mit dem Sie Ihre E-Mail-Accounts zu OVH E-Mail-Adressen migrieren können. Dabei können verschiedene Inhalte wie beispielsweise E-Mails, Kontakte, Kalender und Aufgaben übertragen werden, sofern diese mit Ihren E-Mail-Adressen kompatibel sind.

**In dieser Anleitung erfahren Sie, wie Sie Ihre E-Mail-Accounts mit dem OVH Mail Migrator zu OVH migrieren.**

## Voraussetzungen

- Sie haben einen E-Mail-Dienst bei OVH, beispielsweise [Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/){.external}, [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/){.external} oder MX Plan (aus dem MX Plan Angebot oder als Teil eines [OVH Webhostings](https://www.ovhcloud.com/de/web-hosting/){.external}).
- Sie verfügen über die Login-Daten für die E-Mail-Accounts, die Sie migrieren möchten (Quell-Accounts).
- Sie verfügen über die Login-Daten der OVH E-Mail-Accounts, auf die Sie die Inhalte übertragen möchten (Ziel-Accounts).

## Beschreibung

Sie können über <https://omm.ovh.net/> auf den [OVH Mail Migrator](https://omm.ovh.net/){.external} zugreifen. Es stehen drei verschiedene Migrationstypen zur Verfügung.

|Migrationstyp|Beschreibung|
|---|---|
|Einzelmigration (Migration)|Migriert die Inhalte einer E-Mail-Adresse auf eine andere Adresse. Diese Methode empfehlen wir für die Migration einer oder mehrerer Adressen (die einzelnen Schritte müssen für jede Adresse wiederholt werden).|
|Migration per Datei (PST-Migration)|Die Inhalte einer E-Mail-Adresse werden zunächst in einer Datei gespeichert und dann auf eine andere E-Mail-Adresse übertragen. Kompatibel mit den Dateiformaten PST, ICS und VCF.|
|Mehrfachmigration (Projekt)|Über den Projektmodus können Sie mehrere Migrationen in einem Projekt verwalten. Diese Methode ist geeignet, um eine große Anzahl an Adressen zu migrieren.|

Folgen Sie dieser Anleitung nun entsprechend des von Ihnen gewählten Migrationstyps.

### Einzelmigration durchführen

Gehen Sie auf <https://omm.ovh.net/>, wählen Sie oben in der Menüleiste den Tab `Migration`{.action} und klicken Sie dort auf `Neue Migration`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Ergänzen Sie auf der angezeigten Seite nun alle angeforderten Informationen.

- **Account**: Geben Sie die Informationen zum **Quell-Account** und zum **Ziel-Account** ein. Zur Erinnerung: Der Inhalt des **Quell-Accounts** wird auf den **Ziel-Account** übertragen.

|Information|Beschreibung|
|---|---|
|Server-Typ|Wählen Sie den Server-Typ Ihrer Accounts aus. Wenn es sich bei einem davon um eine OVH Adresse handelt, werden die Informationen über **Hosted by OVH (Autodetect)** automatisch ergänzt.|
|Server-URL|Geben Sie die Adresse des Servers ein, auf dem Ihre Accounts gehostet sind. Möglicherweise wird dieses Feld nach Auswahl des Server-Typs automatisch ausgefüllt.|
|Login|Geben Sie die vollständige E-Mail-Adresse Ihrer Accounts ein.|
|Administrator-Account mit Zugriffsrechten|Dieses Feld erscheint nur bei bestimmten Server-Typen.|
|Passwort|Geben Sie das Passwort Ihrer E-Mail-Accounts ein.|

- **Optionen**: Wählen Sie die Elemente aus, die Sie migrieren möchten. Je nach gewähltem Server-Typ stehen einige Elemente möglicherweise nicht zur Verfügung.

- **Informationen**: Geben Sie eine E-Mail-Adresse ein, über die Sie Benachrichtigungen zum Migrationsverlauf empfangen möchten.

Nachdem Sie alle Informationen eingegeben haben, klicken Sie auf den Button `Migration starten`{.action}. Wenn die Informationen korrekt sind, startet die Migration.

Im angezeigten Fenster können Sie den Migrationsverlauf mitverfolgen. Speichern Sie bitte die angezeigte `Migrations-ID`{.action} und warten Sie, bis der Vorgang beendet ist. Die Migrationsdauer hängt von der Anzahl der zu migrierenden Elemente ab. Wenn Sie später zur Nachverfolgungsseite zurückkehren möchten, lesen Sie den nachstehenden Abschnitt „Einzelmigration verfolgen“.

### Einzelmigration verfolgen

Es gibt zwei Wege, um eine Einzelmigration zu verfolgen:

- über die empfangene E-Mail, die Sie über den Start der Migration benachrichtigt
- über die Seite <https://omm.ovh.net/> des Mail Migrators. Gehen Sie hierzu oben in der Menüleiste auf den Tab `Migration`{.action} und klicken Sie dann auf `Verfolgen / Synchronisieren`{.action}. Geben Sie nun die `Migrations-ID`{.action} und den betreffenden `Quell-Account`{.action} ein.

![omm](images/omm-migration-track.png){.thumbnail}

Auf der angezeigten Seite können Sie den Migrationsverlauf verfolgen. Sie werden benachrichtigt, wenn der Vorgang startet, in Bearbeitung ist oder beendet wurde. Abhängig vom Status des Vorgangs können Sie mehrere Aktionen vornehmen.

|Aktion|Beschreibung|
|---|---|
|Vorgang abbrechen|Sie können die Migration abbrechen. Bereits migrierte Elemente bleiben im Ziel-Account bestehen.|
|Migrierte Elemente löschen|Bereits migrierte Elemente können im Ziel-Account gelöscht werden. Sie können einen bestimmten Synchronisationspunkt auswählen, ab dem die Elemente gelöscht werden.|
|Synchronisieren|Hier können neue Elemente, die bei einer vorherigen Synchronisation zwischen Quell- und Ziel-Account noch nicht migriert wurden, übertragen werden. Es handelt sich hierbei um die Migration der Elemente, die verglichen mit dem Quell-Account im Ziel-Account fehlen.|

### Migration per Datei durchführen

Gehen Sie auf <https://omm.ovh.net/>, wählen Sie oben in der Menüleiste den Tab `PST-Migration`{.action} und klicken Sie dort auf die Migration, die Sie durchführen möchten: `Neue PST-Migration`{.action}, `Neue ICS-Migration`{.action} oder `Neue VCF-Migration`{.action}.

Für diese Art der Migration benötigen Sie die entsprechende Datei mit den Inhalten, die Sie migrieren möchten.

![omm](images/omm-migration-files.png){.thumbnail}

Tragen Sie auf der angezeigten Seite nun alle Informationen für den **Ziel-Account** ein und klicken Sie dann auf den Button `Migration starten`{.action}. Zur Erinnerung: Die Inhalte der PST-, ICS- oder VCF-Datei werden auf den **Ziel-Account** übertragen.

Wenn die eingegebenen Informationen korrekt sind, öffnet sich ein Fenster, über das Sie die Datei auf Ihrem Rechner auswählen können. Klicken Sie nach der Auswahl auf den Button `Hochladen`{.action} und warten Sie ab, bis die Datei hochgeladen wurde. Dieser Vorgang kann je nach Dateigröße länger dauern. Sie können auf dieser Seite den Fortschritt des Hochladevorgangs mitverfolgen.

Nachdem die Datei hochgeladen wurde, geben Sie bitte erneut das Passwort des **Ziel-Accounts** ein und klicken Sie dann auf `Migration starten`{.action}. Wenn die angegebenen Informationen korrekt sind, können Sie die Migration starten, indem Sie erneut auf den Button `Migration starten`{.action} klicken.

Im angezeigten Fenster können Sie den Migrationsverlauf mitverfolgen. Speichern Sie bitte die angezeigte `Migrations-ID`{.action} und warten Sie, bis der Vorgang beendet ist. Die Migrationsdauer hängt von der Anzahl der zu migrierenden Elemente ab. Wenn Sie später zur Nachverfolgungsseite zurückkehren möchten, lesen Sie den nachstehenden Abschnitt „Migration per Datei verfolgen“.

### Migration per Datei verfolgen

Es gibt zwei Wege, um eine Migration per PST-, ICS- oder VCF-Datei zu verfolgen:

- über die empfangene E-Mail, die Sie über den Start der Migration benachrichtigt

- über die Seite <https://omm.ovh.net/> des Mail Migrators. Gehen Sie hierzu oben in der Menüleiste auf den Tab `Migration`{.action} und klicken Sie dann auf `Verfolgen / Synchronisieren`{.action}. Geben Sie nun die `Migrations-ID`{.action} und den betreffenden `Ziel-Account`{.action} ein.

![omm](images/omm-migration-track.png){.thumbnail}

Auf der angezeigten Seite können Sie den Migrationsverlauf verfolgen. Sie werden benachrichtigt, wenn der Vorgang startet, in Bearbeitung ist oder beendet wurde. Abhängig vom Status des Vorgangs können Sie mehrere Aktionen vornehmen.

|Aktion|Beschreibung|
|---|---|
|Vorgang abbrechen|Sie können die Migration abbrechen. Bereits migrierte Elemente bleiben im Ziel-Account bestehen.|
|Migrierte Elemente löschen|Bereits migrierte Elemente können im Ziel-Account gelöscht werden.|

### Mehrfachmigration durchführen und verfolgen (Projekt)

Gehen Sie auf <https://omm.ovh.net/>, wählen Sie oben in der Menüleiste den Tab `Projekt`{.action} und klicken Sie dann auf `Neues Projekt mit mehreren Migrationen`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Geben Sie auf der angezeigten Seite unter **Neues Projekt** alle angeforderten Informationen ein:

|Information|Beschreibung|
|---|---|
|Name|Legen Sie einen Namen für Ihr Migrationsprojekt fest.|
|Passwort|Legen Sie ein Passwort für Ihr Projekt fest, damit Sie es später über den OVH Mail Migrator verwalten können.|
|E-Mail|Geben Sie eine E-Mail-Adresse ein, über die Sie Benachrichtigungen zum Projektverlauf empfangen möchten.|

Klicken Sie anschließend auf `Projekt erstellen`{.action}. Auf der angezeigten Seite können Sie Ihr Migrationsprojekt verwalten und nachverfolgen. Speichern Sie bitte die angegebene **Projekt-ID**.

Sie können nun die Account-Migrationen starten. Hierfür stehen Ihnen mehrere Tabs zur Verfügung:

|Tab|Beschreibung|
|---|---|
|Fortfahren|Hier können Sie den Migrationsverlauf Ihres Projekts verfolgen. Außerdem haben Sie die Möglichkeit, Migrationen zu pausieren oder fortzusetzen.|
|Massenimport|Sie können der Warteschleife über den Import einer Datei (CSV oder Excel) mehrere Migrationen hinzufügen. Die Datei muss exakt formatiert sein. Wir empfehlen deshalb, eine verfügbare Vorlage (Modell für Import) zu verwenden.|
|Hinzufügen|Hier können Sie der Warteschleife einzeln weitere Accounts hinzufügen. Quell- und Ziel-Server lassen sich dabei als Standardwerte einstellen.|
|Optionen|Sie können die Elemente festlegen, die der OVH Mail Migrator übertragen soll, sowie die Anzahl der gleichzeitigen Anfragen bestimmen, die das Tool während des Migrationsprozesses vornehmen kann.|
|Ausloggen|Hier können Sie sich aus Ihrem Projekt ausloggen. So können Sie sich zum Beispiel für ein anderes Migrationsprojekt einloggen, um dessen Fortschritt zu verfolgen.|

Wenn Sie später zur Nachverfolgungsseite Ihres Migrationsprojekts zurückkehren möchten, gehen Sie auf <https://omm.ovh.net/>, wählen Sie oben in der Menüleiste den Tab `Projekt`{.action} und klicken Sie dann auf `Projekt nachverfolgen`{.action}. Geben Sie nun die `Migrations-ID`{.action} und das zugehörige `Passwort`{.action} ein.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
