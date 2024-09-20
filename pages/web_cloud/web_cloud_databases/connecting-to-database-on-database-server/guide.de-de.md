---
title: "Mit der Datenbank Ihres Datenbankservers verbinden"
excerpt: "Erfahren Sie hier, wie Sie sich mit Ihrer Datenbank verbinden können"
updated: 2023-10-31
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie können den Inhalt Ihrer Datenbank einsehen, indem Sie sich in ein geeignetes Interface einloggen.

**Diese Anleitung erklärt die verschiedenen Möglichkeiten, sich mit Ihrer Datenbank zu verbinden.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases Instanz](/links/web/databases){.external} (in einem [Performance Webhosting](/links/web/hosting) Angebot enthalten)
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!primary]
>
> Beachten Sie, dass die [Web Cloud Databases Dienste](/links/web/databases) keinen Zugriff auf den Datenbankserver gewähren, sondern auf die darauf gehosteten Datenbanken. 
> <br> - Es gibt keinen "root"-Zugang. 
> <br> - Generische SQL-Befehle funktionieren normal, und Programme wie HeidiSQL, SQuirreL oder Adminer sind vollständig kompatibel.
> 

### Mit einer MySQL oder MariaDB Datenbank verbinden 

> [!primary]
>
> Da MariaDB ein Derivat von MySQL ist, sind die verschiedenen Befehle für diese beiden Arten von Datenbanken exakt gleich.
> 

#### phpMyAdmin von OVHcloud

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und klicken Sie im Bereich `Web Cloud`{.action} links auf `Web Cloud Databases`{.action}. Wählen Sie den Namen Ihres Datenbankservers aus.

Im Tab `Allgemeine Informationen` finden Sie den Zugangslink zu phpMyAdmin im Rahmen **„Administration der Datenbank“** unter „Benutzer-Interface“.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}

Damit gelangen Sie zur Loginseite von phpMyAdmin.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}

Tragen Sie die folgenden Angaben ein, um sich mit Ihrer Datenbank zu verbinden:

- **Server:** Geben Sie den *Hostnamen* Ihres Datenbankservers ein, gefolgt von der *Port-Nummer*. Die *Port-Nummer* muss vom *Hostnamen* durch ein **Leerzeichen** oder "**:**" getrennt werden. Wenn zum Beispiel der *Hostname* **aaXXXXX-XXX.eu.clouddb.ovh.net** und die *Port-Nummer* **12345** ist, kann **aaXXXXX-XXX.eu.clouddb.ovh.net:12345** oder **aaXXXXX-XXX.eu.clouddb.ovh.net 12345** eingegeben werden. Um den *Hostnamen* und die *Port-Nummer* Ihres Web Cloud Databases Servers zu finden, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager){.external} ein und gehen Sie zum Bereich `Web Cloud`. Klicken Sie in der linken Spalte auf `Web Cloud Databases`{.action} und wählen Sie den Namen Ihres Datenbankservers aus. Auf der Seite `Allgemeine Informationen` werden der *Hostname* und die *Port-Nummer* unter `Verbindungsinformationen` angezeigt.

- **Username:** Geben Sie den *Benutzernamen* Ihres Datenbankservers ein. Um den *Benutzernamen* Ihrer Datenbank zu finden, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager){.external} ein und gehen Sie in den Bereich `Web Cloud`. Klicken Sie in der linken Spalte auf `Web Cloud Databases`{.action} und wählen Sie den Namen Ihres Datenbankservers aus. Klicken Sie auf der angezeigten Seite auf den Tab `Benutzer und Rechte`{.action}. Dort finden Sie eine Tabelle mit allen für Ihr Angebot Web Cloud Databases erstellten Benutzern.

- **Password:** Geben Sie das *Passwort* für den betreffenden *Benutzer* ein. Wenn Sie das zugehörige *Passwort* dieses *Benutzernamens* nicht kennen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager){.external} ein und gehen Sie zum Bereich `Web Cloud`. Klicken Sie in der linken Spalte auf `Web Cloud Databases`{.action} und wählen Sie den Namen Ihres Datenbankservers aus. Klicken Sie auf der angezeigten Seite auf den Tab `Benutzer und Rechte`{.action}. Klicken Sie auf den Button `...`{.action} rechts vom betreffenden *Benutzer*, um `Passwort ändern`{.action}.

> [!warning]
>
> Wenn Sie das Kennwort eines Datenbankbenutzers ändern, müssen alle Anwendungen und Websites, die auf die Datenbank zugreifen, entsprechend aktualisiert werden.
>

Wenn die Verbindung erfolgreich ist, erscheint die phpMyAdmin-Startseite.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **Im Fall eines Fehlers:**
> <br> - Fehler #1045 bedeutet, dass die Identifikation fehlgeschlagen ist. Überprüfen Sie daher Ihren Benutzernamen und Ihr Passwort.
> <br> - Fehler #2005 bedeutet, dass Sie den Namen des Servers überprüfen sollten. Stellen Sie sicher, dass er korrekt ist.

#### Verbindung zur Datenbank außerhalb des Kundencenters

> [!warning]
>
> Wenn Sie Web Cloud Databases oder SQL Private für Datenbanken einsetzen, vergessen Sie nicht, Ihrer IP-Adresse mithilfe der Anleitung [Konfiguration Ihres Datenbankservers](/pages/web_cloud/web_cloud_databases/configure-database-server) den Zugriff zu erlauben.
>

Um sich mit Ihrer Datenbank zu verbinden, benötigen Sie die folgenden Informationen:

- **Server**: Der Hostname Ihres Servers ist im Tab `Allgemeine Informationen` im Kasten **Verbindungsinformationen** unter "Hostname" im Abschnitt **SQL** sichtbar.
- **Benutzer**: Der Benutzername aus dem Tab `Benutzer und Rechte`.
- **Passwort**: Das Passwort des betreffenden Benutzers.
- **Port**: Der Port ist im Tab `Allgemeine Informationen` im Kasten **Verbindungsinformationen** unter "Port" im Abschnitt **SQL** sichtbar.
- **Name der Datenbank**: Die Datenbanken sind im Tab `Datenbanken` Ihres Datenbankservers aufgeführt.

##### 1\. Verbindung über die Kommandozeile

```bash
mysql --host=server --user=benutzername --port=port --password=passwort datenbankname
```

##### 2\. Verbindung per PHP Skript

```php
1. <?php
2. $db = new PDO('mysql:host=server;port=port;dbname=datenbankname', 'benutzername', 'passwort');
3.
```

##### 3\. Software-Verbindung (SQuirreL)

> [!primary]
>
> In unserem Beispiel verwenden wir die Open-Source-Software SQuirreL, aber andere Interfaces wie HeidiSQL oder Adminer sind voll kompatibel. 

- Starten Sie SQuirreL und klicken Sie auf `Aliases`{.action} und dann auf `+`{.action}.

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Füllen Sie die folgenden Felder aus und bestätigen Sie mit dem Button `OK`{.action}:
    - **Name**: Wählen Sie den Namen aus.
    - **Driver**: Wählen Sie "MySQL Driver".
    - **URL**: Geben Sie die Adresse des Servers und den Port ein, in der Form jdbc:mysql://server:port.
    - **User Name**: Geben Sie den Benutzernamen ein.
    - **Password**: Geben Sie das Passwort ein.

![config](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Bestätigen Sie erneut mit dem Button `Connect`{.action}.

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Sie sind nun mit Ihrer Datenbank verbunden.

![config](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

##### 4\. phpMyAdmin Verbindung

Sie können Ihr eigenes phpMyAdmin-Interface verwenden, um den Inhalt Ihrer Datenbank zu analysieren. Installieren Sie hierfür phpMyAdmin auf Ihrem eigenen Server oder Webhosting. Achten Sie bei dieser Installation darauf, die Verbindungsdaten Ihres Datenbankservers und Ihrer gewünschten Datenbank so einzurichten, dass phpMyAdmin sich damit verbinden kann.

### Mit einer PostgreSQL Datenbank verbinden 

Um sich mit Ihrer Datenbank zu verbinden, benötigen Sie die folgenden Informationen:

- **Server**: Der Hostname Ihres Servers ist im Tab `Allgemeine Informationen` im Kasten **Verbindungsinformationen** unter "Hostname" im Abschnitt **SQL** sichtbar.
- **Benutzer**: Der Benutzername aus dem Tab `Benutzer und Rechte`.
- **Passwort**: Das Passwort des betreffenden Benutzers.
- **Port**: Der Port ist im Tab `Allgemeine Informationen` im Kasten **Verbindungsinformationen** unter "Port" im Abschnitt **SQL** sichtbar.
- **Name der Datenbank**: Die Datenbanken sind im Tab `Datenbanken` Ihres Datenbankservers aufgeführt.

#### Verbindung über die Kommandozeile

```bash
psql --host=server --port=port --user=benutzername --password=passwort datenbankname
```

#### Verbindung per PHP Skript

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=datenbankname', 'benutzername', 'passwort');
3.
```

#### Software-Verbindung (SQuirreL)

> [!primary]
>
> In unserem Beispiel verwenden wir die Open-Source-Software SQuirreL, aber andere Interfaces wie HeidiSQL oder Adminer sind voll kompatibel. 

- Starten Sie SQuirreL und klicken Sie auf `Aliases`{.action} und dann auf `+`{.action}.

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Füllen Sie die folgenden Felder aus und bestätigen Sie mit dem Button `OK`{.action}:
    - **Name**: Wählen Sie den Namen aus.
    - **Driver**: Wählen Sie "PostgreSQL".
    - **URL**: Geben Sie die Adresse des Servers und den Port ein, in der Form jdbc:postgresql://server:port/database.
    - **User Name**: Geben Sie den Benutzernamen ein.
    - **Password**: Geben Sie das Passwort ein.

![config](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Bestätigen Sie erneut mit dem Button `Connect`{.action}.

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Sie sind nun mit Ihrer Datenbank verbunden.

![config](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
