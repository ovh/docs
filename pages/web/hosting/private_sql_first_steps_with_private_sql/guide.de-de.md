---
title: Erste Schritte mit SQL Private
slug: erste-schritte-mit-sql-private
excerpt: Hier erfahren Sie, wie Sie Ihre SQL Private Datenbanken verwenden
section: 'SQL Private'
order: 1
---

**Stand 12.03.2018**

## Einleitung

Dank SQL Private können Sie eine SQL-Instanz mit einem OVH Webhosting verbinden und verfügen so über dedizierte und garantierte Ressourcen. Auf diese Weise gewinnen Sie zusätzliche Leistung und Flexibilität für bereits verfügbare Datenbanksysteme oder solche, die Sie später noch erstellen. Diese Dienstleistung richtet sich üblicherweise an Kunden mit eher spezifischen Anforderungen.

**In dieser Anleitung erfahren Sie, wie Sie Ihre SQL Private Datenbanken verwenden.**

## Voraussetzungen

- Sie verfügen über eine SQL Private Instanz (im [Webhosting Angebot](https://www.ovhcloud.com/de/web-hosting/){.external} enthalten oder als [SQL-Option](https://www.ovhcloud.com/de/web-hosting/options/start-sql/){.external} zusätzlich bestellt).
- Ihr [Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} befindet sich im gleichen Rechenzentrum wie Ihre SQL Private Instanz (diese Information finden Sie in Ihrem OVH Kundencenter).
- Sie sind in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.

## Beschreibung

### Aktivierung des in Ihrem Webhosting-Angebot enthaltenen Private SQL Servers

Wenn Ihr Hosting-Angebot die Option "Private SQL" beinhaltet, können Sie diese in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} aktivieren. Klicken Sie im Bereich `WebCloud`{.action} links auf `Hosting-Pakete.`{.action}

Klicken Sie im Tab `Allgemeine Informationen`im Rahmen `Konfiguration` auf `...`{.action} rechts von **Private Datenbank**. Klicken Sie dann auf `Aktivieren`{.action}, um den Aktivierungsvorgang zu starten.

![Allgemeine Informationen](images/privatesql00-SQLactivation.png){.thumbnail}

Folgen Sie den Anweisungen, um Typ und Version Ihres Private SQL Servers zu bestimmen. Nach Abschluss des Vorgangs kann der Private SQL Dienst über die linke Menüspalte unter `Datenbanken`{.action} eingesehen werden.

### Die allgemeinen Informationen der Instanz einsehen

Gehen Sie In Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} im linken Menü in den Bereich `Datenbanken`{.action} und klicken Sie anschließend auf die entsprechende SQL-Instanz. Achten Sie darauf, dass Sie sich in dem Tab `Allgemeine Informationen`{.action} befinden.

> [!primary]
>
> Der Name Ihrer SQL Private Instanz kann im OVH Kundencenter auf zwei Arten angezeigt werden:
>
> - Entweder enthält er einen Teil Ihrer Kundenkennung und endet mit drei Ziffern (001 für die erste installierte SQL Private Instanz, 002 für die zweite usw.).
> - Oder er beginnt mit *privatesql-* und enthält dann einen Teil Ihrer Kundenkennung und endet mit drei Ziffern (001 für die erste installierte SQL Private Instanz, 002 für die zweite usw.).
>

Hier können Sie wichtige Informationen zu Ihrer SQL-Instanz einsehen. Wir bitten Sie, sich einen Moment Zeit zu nehmen und zu überprüfen, dass die angezeigten Daten korrekt sind bzw. mit den nachfolgenden Angaben übereinstimmen.

|Information|Details|
|---|---|
|Status der Dienstleistung|Zeigt an, ob die Instanz gestartet wurde, gerade neu gestartet wird oder gesperrt wurde. Ihre Instanz muss gestartet worden sein, damit Sie Aktionen durchführen können.|
|Typ|Zeigt das vom Server verwendete Datenbanksystem an. Wenn Sie nicht wissen, ob der verwendete Typ korrekt ist, beachten Sie, dass MySQL das am weitesten verbreitete System ist. Es gibt jedoch auch andere Datenbanksysteme (PostgreSQL, MariaDB). Wurde Ihre Website zum Beispiel mit WordPress erstellt, ist ein MySQL-System die richtige Wahl.|
|Version|Zeigt die Version des vom Server verwendeten Datenbanksystems an. Achten Sie auf die Kompatibilität Ihrer Website mit der gewählten Version.|
|RAM|Zeigt den für Ihre Instanz verfügbaren Arbeitsspeicher sowie eventuelle Überschreitungen der RAM-Kapazität. Die RAM-Kapazität Ihrer SQL Private Instanz ist eine dedizierte und garantierte Ressource. Falls nötig, können Sie Ihren RAM skalieren und eine Warnmeldung erhalten, wenn Sie sämtliche RAM-Ressourcen Ihrer Instanz verwenden.|
|Infrastruktur|Zeigt die von Ihrer Instanz verwendete Infrastruktur an. Hierbei handelt es sich um inhärente Informationen zur OVH Infrastruktur.|
|Rechenzentrum|Zeigt das Rechenzentrum an, in dem Ihre Instanz angelegt wurde. Vergewissern Sie sich, dass das Rechenzentrum Ihrer Instanz mit dem Rechenzentrum des Webhostings übereinstimmt, auf dem Ihre Website aktuell (oder in Zukunft) gehostet wird.|
|Host|Zeigt den OVH Server an, auf dem Ihre Instanz angelegt wurde. Hierbei handelt es sich um eine inhärente Information zur OVH Infrastruktur, die im Rahmen unserer Kommunikation zu [OVH Störungen](http://status.ovh.net/){.external} verwendet werden kann.|

![Allgemeine Informationen](images/privatesql01-General-information.png){.thumbnail}

### Eine Datenbank erstellen

Alle zu Ihrer Website gehörenden Daten (z. B. die Kommentare auf einem Blog) sind in einer Datenbank gespeichert.

Um Ihre erste Datenbank anzulegen, klicken Sie auf den Tab `Datenbanken`{.action} und anschließend auf den Button `Eine Datenbank hinzufügen`{.action}.

![Eine Datenbank hinzufügen](images/privatesql02-Adding-a-database.png){.thumbnail}

Im angezeigten Fenster können Sie einen Benutzer erstellen. Dieser ist zwingend erforderlich, da er sich mit Ihrer Instanz verbinden und dank der ihm zugewiesenen Rechte in die Datenbank eingreifen kann (z. B. Daten lesen, eintragen oder löschen).

Sie können den Benutzer entweder zusammen mit Ihrer Datenbank anlegen, indem Sie in dem Feld `Einen Benutzer anlegen`{.action} einen Haken setzen, oder die Erstellung getrennt von der Datenbank vornehmen und das Feld zunächst nicht abhaken. Setzen Sie den Haken für eine einfache und schnelle Lösung.

Entsprechend Ihrer Entscheidung geben Sie jetzt mithilfe der Infoboxen die geforderten Daten ein. Klicken Sie dann auf `Bestätigen`{.action}.

- **Name der Datenbank** (Pflichtfeld): Dies ist der Name Ihrer zukünftigen Datenbank.
- **Benutzername** (optional, wenn in dem Feld kein Haken gesetzt wurde): Geben Sie hier den Namen des Benutzers ein, der sich mit Ihrer Datenbank verbinden und Anfragen bearbeiten kann.
- **Rechte** (optional, wenn in dem Feld kein Haken gesetzt wurde): Hier handelt es sich um die Benutzerrechte, die dem Benutzer der Datenbank gewährt werden. Für eine standardmäßige Verwendung wählen Sie `Administrator`{.action} aus. Nutzerrechte können im Nachhinein verändert werden.
- **Passwort**/**Passwort bestätigen** (optional, wenn in dem Feld kein Haken gesetzt wurde): Geben Sie das gewünschte Passwort ein und bestätigen Sie es anschließend durch erneute Eingabe.

> [!warning]
>
> Aus Sicherheitsgründen halten Sie sich bitte an die bei der Eingabe der Informationen angezeigten Bedingungen.
>

![Eine Datenbank hinzufügen](images/privatesql03-Adding-a-database-part2.png){.thumbnail}

### Einen Benutzer anlegen (optional)

Dieser Schritt ist optional, wenn Sie den Benutzer bereits zusammen mit der Datenbank angelegt haben. Für eine standardmäßige Verwendung ist ein einziger Benutzer mehr als ausreichend. Für komplexere Projekte können jedoch mehrere Benutzer mit Zugriff auf Ihre Datenbank erforderlich sein. So hat zum Beispiel ein Benutzer auf der ihm zugewiesenen Datenbank Lese- und Schreibrechte, während ein anderer Benutzer nur über Leserechte verfügt.

Wenn Sie Ihren ersten Benutzer schon angelegt haben und Sie für Ihr Projekt keine weiteren Benutzer benötigen, können Sie mit dem nächsten Schritt fortfahren. Um einen Benutzer anzulegen, klicken Sie auf den Tab `Benutzer und Rechte`{.action} und dann auf die Schaltfläche `Einen Benutzer hinzufügen`{.action}.

![Einen Benutzer hinzufügen](images/privatesql04-Adding-a-user.png){.thumbnail}

Geben Sie in dem angezeigten Fenster mithilfe der Infoboxen die geforderten Daten ein und klicken Sie anschließend auf `Bestätigen`{.action}.

- **Benutzername**: Geben Sie hier den Namen des Benutzers ein, der sich mit Ihrer Instanz verbinden darf. Im nächsten Schritt können Sie dem Benutzer Rechte auf Ihrer Datenbank zuweisen.
- **Passwort**/**Passwort bestätigen**: Geben Sie das gewünschte Passwort ein und bestätigen Sie es anschließend durch erneute Eingabe.

> [!warning]
>
> Aus Sicherheitsgründen halten Sie sich bitte an die bei der Eingabe der Informationen angezeigten Bedingungen.
>

![Einen Benutzer hinzufügen](images/privatesql05-Adding-a-user-part2.png){.thumbnail}

Nachdem Sie einen Benutzer angelegt haben, weisen Sie ihm die entsprechenden Rechte für die Aufgaben zu, die er an Ihrer Datenbank vornehmen soll (z. B. Daten lesen, eintragen oder löschen). Klicken Sie hierzu auf das Zahnrad-Symbol und anschließend auf `Rechte verwalten`{.action}.

![Rechte hinzufügen](images/privatesql06-Adding-a-right.png){.thumbnail}

Auf der neuen Seite klicken Sie auf das Recht, das Sie dem Benutzer zuweisen möchten. Für eine standardmäßige Verwendung wählen Sie `Administrator`{.action} aus.

![Rechte hinzufügen](images/privatesql07-Adding-a-right-part2.png){.thumbnail}

### Eine Datenbank importieren (optional)

Dieser Schritt ist nur notwendig, wenn Sie ein Backup einer bereits bestehenden Datenbank importieren möchten (zum Beispiel zur Migration Ihrer Website zu OVH oder zur Migration Ihrer existierenden Datenbank auf eine neuen SQL Private Instanz). Wenn Sie keine Datenbank importieren möchten, können Sie diesen Schritt überspringen.

Entsprechend Ihrer Auswahl gibt es mehrere Möglichkeiten zum Import einer Datenbank. Hierzu steht Ihnen im OVH Kundencenter ein Tool zur Verfügung, auf das wir im Folgenden näher eingehen werden.  Genauere Informationen zur Verwendung anderer Import-Methoden entnehmen Sie bitte unserer Dokumentation.

#### Schritt 1: Auf die Import-Datei einer Datenbank zugreifen

Gehen Sie in den Tab `Datenbanken`{.action}, klicken Sie auf das Zahnrad-Symbol und dann auf `Datei importieren`{.action}.

![Eine Datei hinzufügen](images/privatesql08-import-a-file.png){.thumbnail}

Im angezeigten Fenster setzen Sie einen Haken in dem Feld `Eine neue Datei importieren`{.action} und klicken anschließend auf `Weiter`{.action}.

![Eine Datei hinzufügen](images/privatesql09-import-a-file-part2.png){.thumbnail}

#### Schritt 2: Die Backup-Datei auswählen und senden

Geben Sie einen Dateinamen ein (mit dem Sie das Backup zu einem späteren Zeitpunkt finden und wiederherstellen können). Dann wählen Sie neben der **Datei** (z. B. .gz, .sql., .txt) die Backup-Datei der Datenbank auf Ihrem Computer aus und klicken anschließend auf `Absenden`{.action}.

Warten Sie, bis die Meldung erscheint, dass die Datei erfolgreich übermittelt wurde, und klicken Sie dann auf `Weiter`{.action}.

![Eine Datei hinzufügen](images/privatesql10-import-a-file-part3.png){.thumbnail}

#### Schritt 3: Den Import der Datenbank starten

Wenn Sie möchten, können Sie nun die angezeigten Zusatzoptionen auswählen:

- **Aktuelle Datenbank leeren**: Setzen Sie hier einen Haken, um den gesamten aktuellen Inhalt Ihrer Datenbank zu löschen und durch den Inhalt Ihres Backups zu ersetzen. Im vorliegenden Fall ist die Datenbank leer und Sie können dieses Feld ignorieren.
- **E-Mail-Benachrichtigung, wenn der Import abgeschlossen ist**: Setzen Sie hier einen Haken, um per E-Mail über den Abschluss des Datenbank-Imports benachrichtigt zu werden.

![Eine Datei hinzufügen](images/privatesql11-import-a-file-part4.png){.thumbnail}

### Ihre Website mit der Datenbank verbinden

Nun, da Ihre Datenbank angelegt wurde und einer oder mehrere Benutzer über Zugriffsrechte verfügen, muss Ihre Datenbank nur noch mit Ihrer Seite verknüpft werden. Für diesen Schritt stehen Ihnen verschiedene Optionen zur Verfügung − je nach Art Ihrer Website, dem verwendeten CMS (WordPress, Joomla usw.) oder je nachdem, bei welchem Schritt der Website-Erstellung Sie sich befinden.

Damit Sie Ihre Website in jedem Fall erfolgreich mit Ihrer Datenbank verbinden können, benötigen Sie die folgenden fünf Informationen:

- **Name der Datenbank**: Der Name, den Sie bei der Erstellung der Datenbank vergeben haben.
- **Benutzername**: Name des Benutzers, den Sie bei der Erstellung der Datenbank oder zu einem späteren Zeitpunkt beim Anlegen weiterer Benutzer festgelegt haben.
- **Benutzerpasswort**: Das Passwort, das dem Benutzer zugewiesen ist und Sie im Rahmen der vorherigen Schritte festgelegt haben.
- **Name des Host-Servers**: Name des Servers, der angegeben werden muss, damit Ihre Website sich mit Ihrer Datenbank verbinden kann. Diese Information finden Sie in Ihrem Kundencenter im Tab `Allgemeine Informationen`{.action} unter **Verbindungsinformationen**.
- **Server-Port**: Verbindungsport zu Ihrer SQL Private Instanz, damit Ihre Website sich mit Ihrer Datenbank verbinden kann. Diese Information finden Sie in Ihrem Kundencenter im Tab `Allgemeine Informationen`{.action} unter **Verbindungsinformationen**.

> [!warning]
>
> In seltenen Fällen ist das Feld `Port`{.action} in der Konfiguration Ihrer Website nicht verfügbar. Ist das der Fall, fügen Sie dieses Feld hinter dem Hostnamen Ihres Servers hinzu und trennen Sie beide Informationen durch ein *:* (zum Beispiel: hostname:port).
>

![SQL-Verbindung](images/privatesql12-sql_connection.png){.thumbnail}

Jetzt können Sie die Installation Ihrer Website oder die Migration Ihrer Datenbank auf Ihre neue SQL-Instanz abschließen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.

