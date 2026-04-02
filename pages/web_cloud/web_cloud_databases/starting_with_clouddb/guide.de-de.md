---
title: 'Erste Schritte mit Web Cloud Databases'
excerpt: 'Erfahren Sie, wie Sie mit der Lösung Web Cloud Databases starten'
updated: 2026-03-24
---

## Ziel

Die Lösung Web Cloud Databases bietet eine Datenbankinstanz mit dedizierten und garantierten Ressourcen und sorgt so für Leistung und Flexibilität.
Standardmäßig ist Ihre Web Cloud Databases Lösung mit dem OVHcloud Webhosting-Netzwerk verbunden. Sie können sie auch über eine Liste autorisierter IP-Adressen mit jedem anderen Netzwerk verbinden.

**Erfahren Sie, wie Sie mit der Lösung Web Cloud Databases starten.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases Instanz](/links/web/databases) (in einem [Performance Webhosting](/links/web/hosting) enthalten).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigationspfad:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wählen Sie Ihren Datenbankdienst aus

---
<!-- CP-NAV-END:web-cloud-databases -->

## In der praktischen Anwendung

### Aktivierung Ihres im Webhosting enthaltenen Web Cloud Databases Servers

Wenn Ihr Hosting die Option Web Cloud Databases beinhaltet, klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie im Tab `Allgemeine Informationen`, im Bereich `Konfiguration`, auf den Button `...`{.action} rechts neben **Web Cloud Databases**. Klicken Sie dann auf `Aktivieren`{.action}, um den Aktivierungsprozess zu starten.
>>
>> ![Allgemeine Informationen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Folgen Sie den angezeigten Anweisungen, um den Typ und die Version Ihres Web Cloud Databases Servers festzulegen. Er wird anschließend in der linken Spalte unter `Web Cloud Databases`{.action} verfügbar sein.

### Allgemeine Informationen der Instanz anzeigen

Klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Der Name des Web Cloud Databases Dienstes in Ihrem OVHcloud Kundencenter enthält einen Teil Ihrer Kundenkennung und endet mit drei Ziffern (001 für den ersten installierten Web Cloud Databases Dienst, 002 für den zweiten, etc.).
>>
> **Schritt 2**
>>
>> Vergewissern Sie sich, dass Sie sich im Tab `Allgemeine Informationen`{.action} befinden.
>>
>> Überprüfen Sie, ob die angezeigten Daten korrekt sind oder den nachfolgenden Angaben entsprechen.
>>
>> |Information|Details|
>> |---|---|
>> |Dienststatus|Zeigt an, ob die Instanz gestartet, gerade neu gestartet oder ausgesetzt ist. Ihre Instanz muss gestartet sein, um Aktionen ausführen zu können.|
>> |Typ|Zeigt das vom Server verwendete Datenbanksystem an.|
>> |Version|Zeigt die Version des vom Server verwendeten Datenbanksystems an. Achten Sie auf die Kompatibilität Ihrer Website mit der gewählten Version.|
>> |CPU-Auslastung|Zeigt die in Sättigung verbrachte CPU-Zeit an. Ihre Web Cloud Databases Instanz ist zwar nicht in der CPU-Nutzung eingeschränkt, Sie sollten jedoch darauf achten, die CPU nicht zu überlasten.|
>> |RAM|Zeigt den für Ihre Instanz verfügbaren Arbeitsspeicher sowie eventuelle Speicherüberschreitungen an. Ihre Web Cloud Databases Instanz verfügt über dedizierte und garantierte Ressourcen: den RAM. Bei Bedarf können Sie diesen upgraden und werden benachrichtigt, wenn Sie alle Speicherressourcen Ihrer Instanz verbrauchen.|
>> |Infrastruktur|Zeigt die von Ihrer Instanz verwendete Infrastruktur an. Hierbei handelt es sich um eine der OVHcloud Infrastruktur inhärente Information.|
>> |Rechenzentrum|Zeigt das Rechenzentrum an, in dem die Instanz erstellt wurde.|
>> |Host|Zeigt den OVHcloud Server an, auf dem Ihre Instanz erstellt wurde. Hierbei handelt es sich um eine der OVHcloud Infrastruktur inhärente Information, die in Mitteilungen zu [OVHcloud Störungen](https://www.status-ovhcloud.com/) verwendet werden kann.|
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Datenbank erstellen

> [!primary]
>
> Dieser Schritt gilt nicht für das Datenbanksystem Redis.

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action}.
>>
> **Schritt 3**
>>
>> Klicken Sie auf `Datenbank hinzufügen`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Die Erstellung von PostgreSQL-Schemata ist derzeit auf Web Cloud Databases Servern nicht verfügbar.
>>
> **Schritt 4**
>>
>> Füllen Sie die Felder gemäß den angegebenen Kriterien aus. Sie können direkt einen Benutzer erstellen, indem Sie das Kontrollkästchen **"Benutzer erstellen"** aktivieren:
>>
>> - **Datenbankname** (Pflichtfeld): Dies ist der Name Ihrer zukünftigen Datenbank.
>> - **Benutzername** (nur wenn das Kontrollkästchen `Benutzer erstellen` aktiviert ist): Der Benutzer, der sich mit Ihrer Datenbank verbinden und Anfragen ausführen kann.
>> - **Rechte** (nur wenn das Kontrollkästchen `Benutzer erstellen` aktiviert ist): Die dem Benutzer für die Datenbank zugewiesenen Rechte. Wählen Sie für eine Standardnutzung `Administrator`{.action}. Die Rechte können nachträglich geändert werden.
>> - **Passwort**/**Passwort bestätigen** (nur wenn das Kontrollkästchen `Benutzer erstellen` aktiviert ist): Wählen Sie ein Passwort und bestätigen Sie es.
>>
>> Klicken Sie auf `Bestätigen`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}

### Benutzer erstellen

> [!primary]
>
> Dieser Schritt gilt nicht für das Datenbanksystem Redis.

Wenn Sie den Benutzer gleichzeitig mit der Datenbank im vorherigen Schritt erstellt haben, ist dieser Schritt optional. Ein Projekt kann jedoch mehrere Benutzer mit unterschiedlichen Rechten erfordern (z. B. Lesen/Schreiben für einen und nur Lesen für einen anderen).

Wenn Ihr Projekt keinen zusätzlichen Benutzer erfordert, können Sie zum nächsten Schritt übergehen. Andernfalls klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Benutzer und Rechte`{.action}.
>>
> **Schritt 3**
>>
>> Klicken Sie auf `Benutzer hinzufügen`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Geben Sie einen "Benutzernamen" und ein "Passwort" ein und klicken Sie dann auf `Bestätigen`{.action}.

Wenn Sie die Rechte eines bestehenden Benutzers ändern möchten, lesen Sie unsere Anleitung "[Web Cloud Databases - Benutzerrechte ändern](/pages/web_cloud/web_cloud_databases/modify_rights_for_users)".

### Datenbank importieren

> [!primary]
>
> Dieser Schritt gilt, wenn Sie ein Backup einer bestehenden Datenbank importieren möchten. Ist dies nicht der Fall, gehen Sie zum nächsten Schritt über.

Um eine Datenbank zu importieren, lesen Sie unsere Anleitung "[Datenbank auf Ihrem Datenbankserver wiederherstellen und importieren](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)".

Dort werden verschiedene Importmethoden beschrieben.

### IP-Adresse autorisieren

Damit Ihre Web Cloud Databases Instanz funktioniert, müssen Sie die IPs oder IP-Bereiche angeben, die sich mit Ihren Datenbanken verbinden dürfen.

Klicken Sie dazu auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf der angezeigten Seite auf den Tab `Autorisierte IPs`{.action}.
>>
>> ![Autorisierte IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Button `IP-Adresse/Maske hinzufügen`{.action} oberhalb der Tabelle.
>>
>> ![Oberfläche der autorisierten IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Wenn Sie eine bereits autorisierte IP-Adresse oder einen IP-Bereich ändern möchten, klicken Sie in der Tabelle auf den Button `...`{.action} rechts neben der entsprechenden Zeile und dann auf `Whitelist bearbeiten`{.action}.
>>
> **Schritt 4**
>>
>> Im sich öffnenden Fenster müssen mehrere Felder ausgefüllt werden:
>>
>> ![IP-Adresse oder Maske hinzufügen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP/Maske *`{.action}: Geben Sie die IP-Adresse (z. B. `203.0.113.44`) oder den IP-Bereich (z. B. `203.0.113.0/24`, der alle IP-Adressen von `203.0.113.0` bis `203.0.113.255` umfasst) ein, die Sie für Ihre Web Cloud Databases Lösung autorisieren möchten.
>> - `Beschreibung`{.action} (optional): Sie können Informationen zur Rolle der betreffenden IP-Adresse oder des IP-Bereichs hinzufügen.
>> - `Datenbanken`{.action}: Aktivieren Sie dieses Kontrollkästchen, damit die IP-Adresse oder der IP-Bereich auf die Datenbanken Ihrer Web Cloud Databases Lösung zugreifen kann.
>> - `SFTP`{.action}: Aktivieren Sie dieses Kontrollkästchen, damit die IP-Adresse oder der IP-Bereich auf die Logs Ihrer Web Cloud Databases Lösung zugreifen kann.
>>
>> > [!warning]
>> >
>> > Es wird dringend davon abgeraten, das Kontrollkästchen `Datenbanken`{.action} zu aktivieren, um den IP-Bereich `0.0.0.0/0` für den Zugriff auf Ihre Datenbanken zu autorisieren.
>> >
>> > Dies würde den Zugriff auf Ihre Datenbanken für alle existierenden IPv4-Adressen ermöglichen.
>>
>> Klicken Sie nach Eingabe der Informationen auf den Button `Bestätigen`{.action}.

### Verbindungen von einem OVHcloud Webhosting erlauben <a name="trustip"></a>

Standardmäßig ist Ihre Web Cloud Databases Lösung automatisch mit OVHcloud Webhostings verknüpft. Wenn Sie möchten, können Sie den Zugriff von OVHcloud Webhostings auf Ihre Web Cloud Databases deaktivieren.

Lesen Sie dazu die Sonderfälle in unserer Anleitung "[Web Cloud Databases - Wie kann eine IP-Adresse autorisiert werden?](/pages/web_cloud/web_cloud_databases/authorise_IP)", um den Zugriff von OVHcloud Webhostings auf Ihre Web Cloud Databases zu aktivieren oder zu deaktivieren.

### Ihre Website mit der Datenbank verbinden

Nachdem Ihre Datenbank erstellt wurde, ein oder mehrere Benutzer Rechte dafür haben und mindestens eine IP-Adresse oder OVHcloud Webhostings auf Ihrer Web Cloud Databases Instanz autorisiert wurden, muss nur noch Ihre Website mit Ihrer Datenbank verbunden werden. Dieser Schritt kann auf verschiedene Weisen erfolgen, je nach Website oder CMS (WordPress, Joomla!, etc.) und je nachdem, in welchem Stadium Sie sich bei der Installation einer Website befinden.

Dafür benötigen Sie die folgenden 5 Informationen:

|Information|Beschreibung|
|---|---|
|Datenbankname|Der Name, den Sie bei der Erstellung der Datenbank festgelegt haben.|
|Benutzername|Der Benutzername, den Sie bei der Erstellung der Datenbank festgelegt haben, oder ein zusätzlicher Benutzer, den Sie hinzugefügt haben.|
|Benutzerpasswort|Das mit dem Benutzer verknüpfte Passwort, das Sie in den vorherigen Schritten festgelegt haben.|
|Server-Hostname|Der Server, der angegeben werden muss, damit Ihre Website sich mit Ihrer Datenbank verbinden kann.|
|Server-Port|Der Verbindungsport zu Ihrer Web Cloud Databases Instanz, damit Ihre Website sich mit Ihrer Datenbank verbinden kann.|

Um diese Informationen abzurufen, klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Rufen Sie die folgenden Verbindungsinformationen ab:
>>
>> - **Server (Hostname) und Port:** sichtbar im Tab `Allgemeine Informationen`{.action}, im Bereich `Verbindungsinformationen`.
>> - **Benutzername:** sichtbar im Tab `Benutzer und Rechte`{.action}.
>> - **Passwort:** das mit dem Benutzer verknüpfte Passwort. Wenn Sie es vergessen haben, gehen Sie zum Tab `Benutzer und Rechte`{.action}, klicken Sie auf `...`{.action} rechts neben dem betreffenden Benutzer und dann auf `Passwort ändern`{.action}.
>>
>> > [!warning]
>> >
>> > Wenn Sie das Passwort eines Datenbankbenutzers ändern, müssen alle Anwendungen/Websites, die auf diese Datenbank zugreifen, entsprechend aktualisiert werden.

> [!warning]
>
> Das Feld `Port`{.action} ist möglicherweise in der Konfiguration Ihrer Website nicht vorhanden. Sie müssen dieses Feld nach dem Hostnamen Ihres Servers hinzufügen, getrennt durch ein *:*.
>
> Zum Beispiel müssten Sie für den Hostnamen `aaXXXXX-XXX.eu.clouddb.ovh.net` mit dem SQL-Port `12345` im Bereich "Host" / "Hostname" `aaXXXXX-XXX.eu.clouddb.ovh.net:12345` eingeben.

### Logs Ihres Web Cloud Databases Servers abrufen

Um auf die Logs Ihrer Web Cloud Databases Lösung zuzugreifen, lesen Sie unsere Anleitung "[Web Cloud Databases - Wie können die Logs abgerufen werden?](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

## Weiterführende Informationen

[Datenbanken und Benutzer auf Ihrem Datenbankserver erstellen](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)

[Verbindung mit einer Datenbank auf Ihrem Datenbankserver herstellen](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)

[Datenbank auf Ihrem Datenbankserver sichern und exportieren](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Datenbank auf Ihrem Datenbankserver wiederherstellen und importieren](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

[Ihren Datenbankserver konfigurieren](/pages/web_cloud/web_cloud_databases/configure-database-server)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
