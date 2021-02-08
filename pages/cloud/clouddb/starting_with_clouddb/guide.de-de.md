---
title: 'Erste Schritte mit CloudDB'
slug: erste-schritte-mit-clouddb
links:
    - docs/cloud/clouddb/utilisation-mysql-mariadb/
    - docs/cloud/clouddb/utilisation-pgsql/
legacy_guide_number: 2216
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie die CloudDB Lösung verwenden.'
section: 'Erste Schritte'
---

**Stand 07.12.2018**

## Einleitung

Mit der CloudDB Lösung erhalten Sie Zugriff auf eine Datenbankinstanz mit dedizierten und garantierten Ressourcen. Dieser Dienst bietet mehr Leistung und Flexibilität und ist vor allem für Kunden mit spezifischen Anforderungen entwickelt.

**Hier erfahren Sie, wie Sie Cloud Databases verwenden.**

## Voraussetzungen

- Sie verfügen über eine [CloudDB Instanz](https://www.ovh.de/cloud/cloud-databases/){.external}.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.

## Beschreibung

### Allgemeine Informationen der Instanz einsehen

Gehen Sie In Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} im linken Menü in den Bereich `Datenbanken`{.action} und klicken Sie anschließend auf die entsprechende Instanz. Achten Sie darauf, dass Sie sich in dem Tab `Allgemeine Informationen`{.action} befinden.

> [!primary]
>
> Der Name des CloudDB Dienstes in Ihrem OVH Kundencenter enthält einen Teil Ihrer Kundenkennung und endet mit drei Ziffern (001 für den ersten eingerichteten CloudDB Dienst, 002 für den zweiten usw.).
>

Hier können Sie wichtige Informationen zu Ihrer Instanz einsehen. Wir bitten Sie, sich einen Moment Zeit zu nehmen und zu überprüfen, dass die angezeigten Daten korrekt sind bzw. mit den nachfolgenden Angaben übereinstimmen.

|Information|Details|
|---|---|
|Status der Dienstleistung|Zeigt an, ob die Instanz gestartet wurde, gerade neu gestartet wird oder gesperrt wurde. Ihre Instanz muss gestartet worden sein, damit Sie Aktionen durchführen können.|
|Typ|Zeigt das vom Server verwendete Datenbanksystem an.|
|Version|Zeigt die Version des vom Server verwendeten Datenbanksystems an. Achten Sie auf die Kompatibilität Ihrer Website mit der gewählten Version.|
|RAM|Zeigt den für Ihre Instanz verfügbaren Arbeitsspeicher sowie eventuelle Überschreitungen der RAM-Kapazität. Der Arbeitsspeicher Ihrer CloudDB Instanz ist eine dedizierte und garantierte Ressource. Falls nötig können Sie diesen skalieren und eine Warnmeldung erhalten, wenn Sie sämtliche RAM-Ressourcen Ihrer Instanz verwenden.|
|Infrastruktur|Zeigt die von Ihrer Instanz verwendete Infrastruktur an. Hierbei handelt es sich um inhärente Informationen zur OVH Infrastruktur.|
|Datacenter|Zeigt das Rechenzentrum an, in dem Ihre Instanz angelegt wurde. Vergewissern Sie sich, dass das Rechenzentrum Ihrer Instanz mit dem Rechenzentrum des OVH Webhostings übereinstimmt, auf dem Ihre Website aktuell (oder in Zukunft) gehostet wird.|
|Host|Zeigt den OVH Server an, auf dem Ihre Instanz angelegt wurde. Hierbei handelt es sich um eine inhärente Information zur OVH Infrastruktur, die im Rahmen unserer Kommunikation zu [OVH Störungen](http://status.ovh.net/){.external} verwendet werden kann.|

![clouddb](images/clouddb-general-information.png){.thumbnail}

### Datenbank erstellen

> [!primary]
>
> Dieser Schritt gilt nicht für das Datenbanksystem Redis.
>

Um die erste Datenbank auf Ihrer CloudDB Instanz anzulegen, klicken Sie auf den Tab `Datenbanken`{.action} und anschließend auf den Button `Datenbank hinzufügen`{.action}.


![clouddb](images/clouddb-add-database.png){.thumbnail}

Im angezeigten Fenster können Sie direkt bei Erstellung der Datenbank

-  **einen Benutzer erstellen**: Dieser kann Anfragen auf der Datenbank ausführen (zum Beispiel Lesen, Einfügen oder Löschen von Daten).

- **eine autorisierte IP-Adresse hinzufügen**: Anfragen, die von dieser IP-Adresse versandt werden, haben Zugriff auf Ihre Datenbanken.

Entsprechend Ihrer Auswahl geben Sie nun die angefragten Informationen ein und klicken Sie anschließend auf `Bestätigen`{.action}.

|Information|Beschreibung|
|---|---|
|Name der Datenbank|Dies ist der Name Ihrer zukünftigen Datenbank.|
|Benutzername|Geben Sie hier den Namen des Benutzers ein, der sich mit Ihrer Datenbank verbinden und Anfragen ausführen kann (optional, wenn in dem Feld „*Benutzer erstellen*“ kein Haken gesetzt wurde).|
|Rechte|Hier handelt es sich um die Rechte, die dem Benutzer der Datenbank gewährt werden. Für eine standardmäßige Verwendung wählen Sie `Administrator`{.action} aus (optional, wenn in dem Feld „*Benutzer erstellen*“ kein Haken gesetzt wurde).|
|Passwort|Geben Sie das gewünschte Passwort ein und bestätigen Sie dieses (optional, wenn in dem Feld „*Benutzer erstellen*“ kein Haken gesetzt wurde).|
|IP / Maske|Hierbei handelt es sich um die IP-Adresse oder IP-Maske des Servers bzw. der Server, die Zugriff auf Ihre Datenbanken haben (optional, wenn in dem Feld „*Eine autorisierte IP-Adresse hinzufügen*“ kein Haken gesetzt wurde.|

> [!warning]
>
> Aus Sicherheitsgründen halten Sie sich bitte an die bei der Eingabe der Informationen angezeigten Bedingungen.
>

![clouddb](images/clouddb-add-database-step2.png){.thumbnail}

### Benutzer anlegen (optional)

> [!primary]
>
> Dieser Schritt gilt nicht für das Datenbanksystem Redis.
>

Dieser Schritt ist optional, wenn Sie den Benutzer bereits zusammen mit der Datenbank angelegt haben. Für komplexere Projekte können jedoch mehrere Benutzer mit Zugriff auf Ihre Datenbank erforderlich sein. So hat zum Beispiel ein Benutzer auf der ihm zugewiesenen Datenbank Lese- und Schreibrechte, während ein anderer Benutzer nur über Leserechte verfügt.

Wenn für Ihr Projekt kein zusätzlicher Benutzer notwendig ist, können Sie zum nächsten Schritt übergehen. Wenn Sie einen weiteren Benutzer auf Ihrer CloudDB Instanz anlegen möchten, klicken Sie auf den Tab `Benutzer und Rechte`{.action} und dann auf den Button `Benutzer hinzufügen`{.action}.

![clouddb](images/clouddb-add-user.png){.thumbnail}

Geben Sie im angezeigten Fenster die angefragten Informationen ein und klicken Sie anschließend auf `Bestätigen`{.action}.

|Information|Beschreibung|
|---|---|
|Benutzername|Geben Sie hier den Namen des Benutzers ein, der sich mit Ihrer Instanz verbinden darf. Im nächsten Schritt können Sie dem Benutzer Rechte auf Ihrer Datenbank zuweisen.|
|Passwort|Geben Sie ein Passwort ein und bestätigen Sie dieses.|

> [!warning]
>
> Aus Sicherheitsgründen halten Sie sich bitte an die bei der Eingabe der Informationen angezeigten Bedingungen.
>

![clouddb](images/clouddb-add-user-step2.png){.thumbnail}

Nachdem Sie einen Benutzer angelegt haben, weisen Sie ihm die entsprechenden Rechte für die Aufgaben zu, die er an Ihrer Datenbank vornehmen soll (zum Beispiel Lesen, Einfügen oder Löschen von Daten). Klicken Sie hierzu auf das Zahnrad-Symbol und anschließend auf `Rechte verwalten`{.action}. Auf der neuen Seite klicken Sie auf das Recht, das Sie dem Benutzer zuweisen möchten. Für eine standardmäßige Verwendung wählen Sie `Administrator`{.action} aus.

![clouddb](images/clouddb-add-rights.png){.thumbnail}

### Datenbank importieren

> [!primary]
>
> Dieser Schritt ist nur erforderlich, wenn Sie ein bereits existierendes Datenbank-Backup importieren möchten. Ist das nicht der Fall, gehen Sie zum nächsten Schritt über.
>

Es gibt mehrere Möglichkeiten zum Import einer Datenbank. In Ihrem OVH Kundencenter steht Ihnen hierzu ein Tool zur Verfügung. Sie können natürlich auch eine andere Methode verwenden, wenn Sie über die entsprechenden Kenntnisse verfügen.

In den nachstehenden Schritten beschreiben wir, wie Sie eine Datenbank mithilfe des Tools in Ihrem OVH Kundencenter importieren.

- **Schritt 1: Auf das Import-Interface zugreifen**

Gehen Sie in den Tab `Datenbanken`{.action}, klicken Sie auf das Zahnrad-Symbol und dann auf `Datei importieren`{.action}. Im angezeigten Fenster setzen Sie einen Haken in dem Feld `Eine neue Datei importieren`{.action} und klicken anschließend auf `Weiter`{.action}.

![clouddb](images/clouddb-add-import-step1.png){.thumbnail}

- **Schritt 2: Backup-Datei auswählen und senden**

Geben Sie einen Dateinamen ein, mit dem Sie das Backup zu einem späteren Zeitpunkt finden und wiederherstellen können. Wählen Sie dann neben **Datei** die Backup-Datei der Datenbank auf Ihrem Rechner aus und klicken Sie anschließend auf `Absenden`{.action}. Warten Sie, bis die Meldung erscheint, dass die Datei erfolgreich übermittelt wurde, und klicken Sie dann auf `Weiter`{.action}.

![clouddb](images/clouddb-add-import-step2.png){.thumbnail}

- **Schritt 3: Import der Datenbank starten**

Wenn Sie möchten, können Sie nun die nachstehenden Zusatzoptionen auswählen. Klicken Sie anschließend auf `Bestätigen`{.action}.

|Zusatzoption|Beschreibung|
|---|---|
|Aktuelle Datenbank leeren|Der gesamte aktuelle Inhalt Ihrer Datenbank wird gelöscht und durch den Inhalt des Backups ersetzt.|
|E-Mail-Benachrichtigung, wenn der Import abgeschlossen ist|Sie werden per E-Mail über den Abschluss des Datenbankimports benachrichtigt.|

![clouddb](images/clouddb-add-import-step3.png){.thumbnail} 

### IP-Adresse autorisieren

Damit auf Ihre CloudDB Instanz zugegriffen werden kann, müssen zunächst die IP-Adressen oder IP-Bereiche festgelegt werden, die sich mit dieser verbinden dürfen. Klicken Sie hierzu im Tab `Autorisierte IPs`{.action} auf den Button `IP-Adresse / Maske hinzufügen`{.action}.

![clouddb](images/clouddb-add-ip.png){.thumbnail}

Geben Sie im angezeigten Fenster im Feld `IP / Maske`{.action} die IP-Adresse oder Maske ein, der Sie den Zugriff erlauben möchten. Legen Sie anschließend fest, ob Sie nur Zugriff auf die Datenbanken oder auch auf den SFTP-Port erlauben möchten. Klicken Sie dann auf `Bestätigen`{.action}.

![clouddb](images/clouddb-add-ip-step2.png){.thumbnail}

### Ihre Website mit der Datenbank verbinden

Nun, da Ihre Datenbank angelegt wurde, einer oder mehrere Benutzer über Zugriffsrechte verfügen und mindestens eine autorisierte IP-Adresse für Ihre CloudDB Instanz angegeben wurde, muss Ihre Website nur noch mit Ihrer Datenbank verknüpft werden. Für diesen Schritt stehen Ihnen verschiedene Optionen zur Verfügung − je nach Art Ihrer Website, dem verwendeten CMS (WordPress, Joomla! usw.) oder je nachdem, bei welchem Schritt der Website-Erstellung Sie sich befinden.

Damit Sie Ihre Website in jedem Fall erfolgreich mit Ihrer Datenbank verbinden können, benötigen Sie die folgenden fünf Informationen:

|Information|Beschreibung|
|---|---|
|Name der Datenbank|Der Name, den Sie bei der Erstellung der Datenbank vergeben haben. Sie finden alle auf Ihrer CloudDB Instanz angelegten Datenbanken im Tab `Datenbanken`{.action}.|
|Benutzername|Name des Benutzers, den Sie bei der Erstellung der Datenbank oder zu einem späteren Zeitpunkt beim Anlegen weiterer Benutzer festgelegt haben. Sie finden alle auf Ihrer CloudDB Instanz erstellten Benutzer im Tab `Benutzer und Rechte`{.action}.|
|Benutzerpasswort|Das Passwort, das dem Benutzer zugewiesen ist und Sie im Rahmen der vorherigen Schritte festgelegt haben.|
|Name des Host-Servers|Name des Servers, der angegeben wird, damit Ihre Website sich mit Ihrer Datenbank verbinden kann. Diese Information finden Sie in Ihrem Kundencenter im Tab `Allgemeine Informationen`{.action} unter **Verbindungsinformationen**.|
|Server-Port|Verbindungsport zu Ihrer CloudDB Instanz, damit Ihre Website sich mit Ihrer Datenbank verbinden kann. Diese Information finden Sie in Ihrem Kundencenter im Tab `Allgemeine Informationen`{.action} unter **Verbindungsinformationen**.|

> [!warning]
>
> In seltenen Fällen ist das Feld `Port`{.action} in der Konfiguration Ihrer Website nicht verfügbar. Ist das der Fall, fügen Sie dieses Feld hinter dem Hostnamen Ihres Servers hinzu und trennen Sie beide Informationen durch ein *:* (zum Beispiel hostname:port).
>

![clouddb](images/clouddb-login-information.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.