---
title: 'Erste Schritte mit Web Cloud Databases'
links:
    - docs/cloud/clouddb/utilisation-mysql-mariadb/
    - docs/cloud/clouddb/utilisation-pgsql/
excerpt: 'Erfahren Sie hier, wie Sie, wie Sie die Web Cloud Databases Lösung verwenden'
updated: 2024-03-18
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Mit der Web Cloud Databases Lösung profitieren Sie von einer Datenbank-Instanz mit dedizierten und garantierten Ressourcen für Leistung und Flexibilität.
Ihre Web Cloud Databases Lösung ist standardmäßig an das Webhosting-Netzwerk von OVHcloud gebunden. Sie können diese über eine Liste autorisierter IP-Adressen mit jedem anderen Netzwerk verbinden.

**Diese Anleitung erklärt, wie Sie Cloud Databases verwenden.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases Instanz](https://www.ovh.de/cloud/cloud-databases/) (im [Webhosting Performance](/links/web/hosting)).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Aktivierung des in Ihrem Webhosting-Angebot enthaltenen Web Cloud Databases Servers

Wenn Ihr Hosting-Angebot die Option "Web Cloud Databases" beinhaltet, können Sie diese in Ihrem [OVHcloud Kundencenter](/links/manager){.external} aktivieren. Klicken Sie im Bereich `WebCloud`{.action} links auf `Hosting-Pakete`{.action}.

Klicken Sie im Tab `Allgemeine Informationen` im Rahmen `Konfiguration` auf `...`{.action} rechts von **Web Cloud Databases**. Klicken Sie dann auf `Aktivieren`{.action}, um den Aktivierungsvorgang zu starten.

![Allgemeine Informationen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}

Folgen Sie den Anweisungen, um Typ und Version Ihres Web Cloud Databases Servers zu bestimmen. Nach Abschluss des Vorgangs kann der Web Cloud Databases Dienst über die linke Menüspalte unter `Web Cloud Databases`{.action} eingesehen werden.

### Allgemeine Informationen der Instanz einsehen

Gehen Sie In Ihrem [OVHcloud Kundencenter](/links/manager){.external} im linken Menü in den Bereich `Web Cloud Databases`{.action} und klicken Sie anschließend auf die entsprechende Instanz. Achten Sie darauf, dass Sie sich in dem Tab `Allgemeine Informationen`{.action} befinden.

> [!primary]
>
> Der Name des Web Cloud Databases Dienstes in Ihrem OVHcloud Kundencenter enthält einen Teil Ihrer Kundenkennung und endet mit drei Ziffern (001 für den ersten eingerichteten Web Cloud Databases Dienst, 002 für den zweiten usw.).
>

Hier können Sie wichtige Informationen zu Ihrer Instanz einsehen. Wir bitten Sie, sich einen Moment Zeit zu nehmen und zu überprüfen, dass die angezeigten Daten korrekt sind bzw. mit den nachfolgenden Angaben übereinstimmen.

|Information|Details|
|---|---|
|Status der Dienstleistung|Zeigt an, ob die Instanz gestartet wurde, gerade neu gestartet wird oder gesperrt wurde. Ihre Instanz muss gestartet worden sein, damit Sie Aktionen durchführen können.|
|Typ|Zeigt das vom Server verwendete Datenbanksystem an.|
|Version|Zeigt die Version des vom Server verwendeten Datenbanksystems an. Achten Sie auf die Kompatibilität Ihrer Website mit der gewählten Version.|
|CPU-Auslastung|Zeigt die beanspruchte CPU-Kapazität an. Ihre Web Cloud Databases Instanz ist hinsichtlich der CPU nicht eingeschränkt, Sie müssen jedoch darauf achten, die CPU Ihrer Web Cloud Databases nicht zu überlasten.|
|RAM|Zeigt den für Ihre Instanz verfügbaren Arbeitsspeicher sowie eventuelle Überschreitungen der RAM-Kapazität. Der Arbeitsspeicher Ihrer Web Cloud Databases Instanz ist eine dedizierte und garantierte Ressource. Falls nötig können Sie diesen skalieren und eine Warnmeldung erhalten, wenn Sie sämtliche RAM-Ressourcen Ihrer Instanz verwenden.|
|Infrastruktur|Zeigt die von Ihrer Instanz verwendete Infrastruktur an. Hierbei handelt es sich um inhärente Informationen zur OVHcloud Infrastruktur.|
|Datacenter|Zeigt das Rechenzentrum an, in dem Ihre Instanz angelegt wurde. Vergewissern Sie sich, dass das Rechenzentrum Ihrer Instanz mit dem Rechenzentrum des OVHcloud Webhostings übereinstimmt, auf dem Ihre Website aktuell (oder in Zukunft) gehostet wird.|
|Host|Zeigt den OVHcloud Server an, auf dem Ihre Instanz angelegt wurde. Hierbei handelt es sich um eine inhärente Information zur OVHcloud Infrastruktur, die im Rahmen unserer Kommunikation zu [OVHcloud Störungen](https://www.status-ovhcloud.com/){.external} verwendet werden kann.|

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Datenbank erstellen

> [!primary]
>
> Dieser Schritt gilt nicht für das Datenbanksystem Redis.
>

Um die erste Datenbank auf Ihrer Web Cloud Databases Instanz anzulegen, klicken Sie auf den Tab `Datenbanken`{.action} und anschließend auf den Button `Datenbank hinzufügen`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}

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

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-create-user-confirmation.png){.thumbnail}

### Benutzer anlegen (optional)

> [!primary]
>
> Dieser Schritt gilt nicht für das Datenbanksystem Redis.
>

Dieser Schritt ist optional, wenn Sie den Benutzer bereits zusammen mit der Datenbank angelegt haben. Für komplexere Projekte können jedoch mehrere Benutzer mit Zugriff auf Ihre Datenbank erforderlich sein. So hat zum Beispiel ein Benutzer auf der ihm zugewiesenen Datenbank Lese- und Schreibrechte, während ein anderer Benutzer nur über Leserechte verfügt.

Wenn für Ihr Projekt kein zusätzlicher Benutzer notwendig ist, können Sie zum nächsten Schritt übergehen. Wenn Sie einen weiteren Benutzer auf Ihrer Web Cloud Databases Instanz anlegen möchten, klicken Sie auf den Tab `Benutzer und Rechte`{.action} und dann auf den Button `Benutzer hinzufügen`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}

Geben Sie im angezeigten Fenster die angefragten Informationen ein und klicken Sie anschließend auf `Bestätigen`{.action}.

|Information|Beschreibung|
|---|---|
|Benutzername|Geben Sie hier den Namen des Benutzers ein, der sich mit Ihrer Instanz verbinden darf. Im nächsten Schritt können Sie dem Benutzer Rechte auf Ihrer Datenbank zuweisen.|
|Passwort|Geben Sie ein Passwort ein und bestätigen Sie dieses.|

> [!warning]
>
> Beachten Sie aus Sicherheitsgründen die bei Eingabe der Informationen angezeigten Richtlinien.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user-confirmation.png){.thumbnail}

Nachdem Sie einen Benutzer angelegt haben, weisen Sie ihm die entsprechenden Rechte für die Aufgaben zu, die er an Ihrer Datenbank vornehmen soll (zum Beispiel Lesen, Einfügen oder Löschen von Daten). Klicken Sie hierzu auf das Zahnrad-Symbol und anschließend auf `Rechte verwalten`{.action}. Auf der neuen Seite klicken Sie auf das Recht, das Sie dem Benutzer zuweisen möchten. Für eine standardmäßige Verwendung wählen Sie `Administrator`{.action} aus.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-2.png){.thumbnail}

### Datenbank importieren

> [!primary]
>
> Dieser Schritt ist nur erforderlich, wenn Sie ein bereits existierendes Datenbank-Backup importieren möchten. Ist das nicht der Fall, gehen Sie zum nächsten Schritt über.
>

Es gibt mehrere Möglichkeiten zum Import einer Datenbank. In Ihrem OVHcloud Kundencenter steht Ihnen hierzu ein Tool zur Verfügung. Sie können natürlich auch eine andere Methode verwenden, wenn Sie über die entsprechenden Kenntnisse verfügen.

In den nachstehenden Schritten beschreiben wir, wie Sie eine Datenbank mithilfe des Tools in Ihrem OVHcloud Kundencenter importieren.

- **Schritt 1: Auf das Import-Interface zugreifen**

Gehen Sie in den Tab `Datenbanken`{.action}, klicken Sie auf das Zahnrad-Symbol und dann auf `Datei importieren`{.action}. Im angezeigten Fenster setzen Sie einen Haken in dem Feld `Eine neue Datei importieren`{.action} und klicken anschließend auf `Weiter`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}

- **Schritt 2: Backup-Datei auswählen und senden**

Geben Sie einen Dateinamen ein, mit dem Sie das Backup zu einem späteren Zeitpunkt finden und wiederherstellen können. Wählen Sie dann neben **Datei** die Backup-Datei der Datenbank auf Ihrem Rechner aus und klicken Sie anschließend auf `Absenden`{.action}. Warten Sie, bis die Meldung erscheint, dass die Datei erfolgreich übermittelt wurde, und klicken Sie dann auf `Weiter`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}

- **Schritt 3: Import der Datenbank starten**

Wenn Sie möchten, können Sie nun die nachstehenden Zusatzoptionen auswählen. Klicken Sie anschließend auf `Bestätigen`{.action}.

|Zusatzoption|Beschreibung|
|---|---|
|Aktuelle Datenbank leeren|Der gesamte aktuelle Inhalt Ihrer Datenbank wird gelöscht und durch den Inhalt des Backups ersetzt.|
|E-Mail-Benachrichtigung, wenn der Import abgeschlossen ist|Sie werden per E-Mail über den Abschluss des Datenbankimports benachrichtigt.|

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-3-send-email.png){.thumbnail} 

### IP-Adresse autorisieren <a name="trustip"></a>

Damit auf Ihre Web Cloud Databases Instanz zugegriffen werden kann, müssen zunächst die IP-Adressen oder IP-Bereiche festgelegt werden, die sich mit dieser verbinden dürfen. Klicken Sie hierzu im Tab `Autorisierte IPs`{.action} auf den Button `IP-Adresse / Maske hinzufügen`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-2.png){.thumbnail}

Geben Sie im angezeigten Fenster im Feld `IP / Maske`{.action} die IP-Adresse oder Maske ein, der Sie den Zugriff erlauben möchten. Legen Sie anschließend fest, ob Sie nur Zugriff auf die Datenbanken oder auch auf den SFTP-Port erlauben möchten. Klicken Sie dann auf `Bestätigen`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

#### Die Verbindung zu einem OVHcloud Webhosting erlauben<a name="trustip"></a> 

Ihre Web Cloud Databases Lösung wird automatisch an die Webhostings von OVHcloud angebunden. Wenn Sie möchten, können Sie aber den Zugang zu Ihren Web Cloud Databases-Datenbanken für OVHcloud-Webhostings deaktivieren.

Klicken Sie hierzu auf den Tab `Autorisierte IP`{.action} und dann auf den Button `Zugang zu OVHcloud Webhostings`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/access-to-ovhcloud-web-hosting.png){.thumbnail}

### Ihre Website mit der Datenbank verbinden

Nun, da Ihre Datenbank erstellt wurde, einer oder mehrere Benutzer über Zugriffsrechte verfügen und mindestens eine IP-Adresse oder OVHcloud-Webhosting auf Ihrer Web Cloud Databases-Instanz eingerichtet wurde, müssen Sie Ihre Website nur noch mit Ihrer Datenbank verbinden. Dieser Schritt kann auf mehrere Arten durchgeführt werden, je nach Art der verwendeten Website oder des verwendeten CMS (WordPress, Joomla! usw.) sowie je nachdem, in welchem Schritt Sie sich befinden, wenn Sie eine Website installieren.

Damit Sie Ihre Website in jedem Fall erfolgreich mit Ihrer Datenbank verbinden können, benötigen Sie die folgenden Informationen:

|Information|Beschreibung|
|---|---|
|Name der Datenbank|Der Name, den Sie bei der Erstellung der Datenbank vergeben haben. Sie finden alle auf Ihrer Web Cloud Databases Instanz angelegten Datenbanken im Tab `Datenbanken`{.action}.|
|Benutzername|Name des Benutzers, den Sie bei der Erstellung der Datenbank oder zu einem späteren Zeitpunkt beim Anlegen weiterer Benutzer festgelegt haben. Sie finden alle auf Ihrer Web Cloud Databases Instanz erstellten Benutzer im Tab `Benutzer und Rechte`{.action}.|
|Benutzerpasswort|Das Passwort, das dem Benutzer zugewiesen ist und Sie im Rahmen der vorherigen Schritte festgelegt haben.|
|Name des Host-Servers|Name des Servers, der angegeben wird, damit Ihre Website sich mit Ihrer Datenbank verbinden kann. Diese Information finden Sie in Ihrem Kundencenter im Tab `Allgemeine Informationen`{.action} unter **Verbindungsinformationen**.|
|Server-Port|Verbindungsport zu Ihrer Web Cloud Databases Instanz, damit Ihre Website sich mit Ihrer Datenbank verbinden kann. Diese Information finden Sie in Ihrem Kundencenter im Tab `Allgemeine Informationen`{.action} unter **Verbindungsinformationen**.|

> [!warning]
>
> Das Feld `Server-Port`{.action} wird in der Konfiguration Ihrer Website möglicherweise nicht angeboten. In diesem Fall muss der Wert nach dem Hostnamen Ihres Servers angefügt werden, getrennt mit einem *:*. <br><br>
> Beispiel: Für den Hostnamen `zz1111111-002.eu.clouddb.ovh.net` mit dem SQL-Port `34567` müssen Sie `zz1111111-002.eu.clouddb.ovh.net:34567` als Hostname ("Name des Host-Servers") eingeben.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/login-information.png){.thumbnail}

### Die Logs Ihres Web Cloud Databases Servers abrufen

Um die Logs Ihrer Web Cloud Databases Lösung einzusehen, folgen Sie unserer Anleitung „[Web Cloud Databases - Logs abrufen](/pages/web_cloud/web_cloud_databases/retrieve-logs)“.

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
