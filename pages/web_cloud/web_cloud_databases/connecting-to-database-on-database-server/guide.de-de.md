---
title: "Web Cloud Databases - Verbindung mit einer Datenbank herstellen"
excerpt: "Erfahren Sie hier, wie Sie sich mit einer Datenbank auf Ihrer Web Cloud Databases Lösung verbinden"
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Sie können den Inhalt Ihrer Datenbank über ein Interface einsehen. Es gibt verschiedene Möglichkeiten, sich damit zu verbinden.

**Diese Anleitung erklärt, wie Sie sich mit Ihrer Datenbank auf Ihrem Datenbankserver verbinden.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases Instanz](/links/web/databases) (in einem [Performance Webhosting](/links/web/hosting) Angebot enthalten).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Zugang zum OVHcloud Kundencenter

- **Direkter Link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigationspfad:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wählen Sie Ihren Datenbankdienst aus

---
<!-- CP-NAV-END:web-cloud-databases -->

## In der praktischen Anwendung

> [!primary]
>
> [Web Cloud Databases](/links/web/databases) Dienste gewähren keinen Zugriff auf den Datenbankserver selbst, sondern auf die darauf gehosteten Datenbanken.
>
> - Es gibt keinen Super-User-Zugang "root".
> - Generische SQL-Befehle funktionieren normal, und Programme wie HeidiSQL, SQuirreL SQL oder Adminer sind vollständig kompatibel.
>

### Mit einer MySQL oder MariaDB Datenbank verbinden

> [!primary]
>
> Da MariaDB ein Derivat von MySQL ist, sind die Befehle für diese beiden Datenbanktypen exakt gleich.
>

#### Verbindung über OVHcloud phpMyAdmin


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
>> Rufen Sie die folgenden Verbindungsinformationen ab:
>>
>> - **Server (Hostname) und Port:** sichtbar im Tab `Allgemeine Informationen`{.action}, Bereich "Verbindungsinformationen".
>> - **Benutzername:** sichtbar im Tab `Benutzer und Rechte`{.action}.
>> - **Passwort:** das dem Benutzer zugehörige Passwort. Wenn Sie es vergessen haben, gehen Sie zum Tab `Benutzer und Rechte`{.action}, klicken Sie rechts neben dem betreffenden Benutzer auf `...`{.action} und dann auf `Passwort ändern`{.action}.
>>
>> > [!warning]
>> >
>> > Wenn Sie das Passwort eines Datenbankbenutzers ändern, müssen alle Anwendungen und Websites, die auf diese Datenbank zugreifen, entsprechend aktualisiert werden.
>>
> **Schritt 3**
>>
>> Suchen Sie im Tab `Allgemeine Informationen`{.action} den Bereich **Administration der Datenbank** und klicken Sie auf den phpMyAdmin-Link unter **Benutzer-Interface**.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Geben Sie auf der phpMyAdmin-Loginseite die in Schritt 2 abgerufenen Informationen ein:
>>
>> ![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}
>>
>> - **Server:** Geben Sie den *Hostnamen* gefolgt von der *Port-Nummer* ein, getrennt durch "**:**" oder ein "**Leerzeichen**". Beispiel: **aaXXXXX-XXX.eu.clouddb.ovh.net:12345**.
>> - **Username:** Geben Sie den *Benutzernamen* ein.
>> - **Password:** Geben Sie das *Passwort* ein.

Wenn die Verbindung erfolgreich ist, wird die folgende Seite angezeigt.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **Im Fehlerfall:**
>
> - Fehler #1045 bedeutet, dass die Zugangsdaten falsch sind. Überprüfen Sie Ihren Benutzernamen und/oder Ihr Passwort.
> - Fehler #2005 bedeutet, dass der Servername überprüft werden sollte und ob dieser korrekt funktioniert.


#### Verbindung zur Datenbank außerhalb des Kundencenters


> [!warning]
>
> Wenn Sie eine "Web Cloud Databases"/"Private SQL"-Lösung verwenden, denken Sie daran, Ihre IP-Adresse mithilfe der Anleitung zur [Konfiguration Ihres Datenbankservers](/pages/web_cloud/web_cloud_databases/configure-database-server#gerer-vos-acces) zu autorisieren.

Klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

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
>> - **Server (Hostname):** sichtbar im Tab `Allgemeine Informationen`{.action}, Bereich **"Administration der Datenbank"**, "Hostname" im Abschnitt **SQL**.
>> - **Port:** sichtbar am gleichen Ort, "Port" im Abschnitt **SQL**.
>> - **Benutzername:** sichtbar im Tab `Benutzer und Rechte`{.action}.
>> - **Passwort:** das dem betreffenden Benutzer zugehörige Passwort.
>> - **Datenbankname:** sichtbar im Tab `Datenbanken`{.action}.


**Klicken Sie auf die Verbindungsmethode Ihrer Wahl, um den Inhalt anzuzeigen.**

/// details | Verbindung über die Kommandozeile

```bash
mysql --host=server --user=user --port=port --password=password database_name
```

///

/// details | Verbindung per PHP-Skript

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Software-Verbindung (SQuirreL SQL)

> [!primary]
>
> In unserem Beispiel verwenden wir die Open-Source-Software SQuirreL, aber andere Interfaces wie HeidiSQL oder Adminer sind vollständig kompatibel.

- Starten Sie SQuirreL SQL und klicken Sie auf `Aliases`{.action} und dann auf `+`{.action}.

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Füllen Sie die folgenden Felder aus und bestätigen Sie mit dem Button `OK`{.action}:
    - **Name**: Wählen Sie einen Namen
    - **Driver**: Wählen Sie "MySQL Driver"
    - **URL**: Geben Sie die Serveradresse und den Port im Format jdbc:mysql://server:port ein
    - **User Name**: Geben Sie den Benutzernamen ein
    - **Password**: Geben Sie das Passwort ein

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Bestätigen Sie erneut mit dem Button `Verbinden`{.action}.

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Sie sind nun mit Ihrer Datenbank verbunden:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

/// details | Verbindung über phpMyAdmin

Sie können Ihr eigenes phpMyAdmin-Interface verwenden, um den Inhalt Ihrer Datenbank zu durchsuchen. Installieren Sie dazu phpMyAdmin auf Ihrem eigenen Server oder Webhosting. Achten Sie bei der Installation darauf, die Verbindungsinformationen Ihres Datenbankservers und der gewünschten Datenbank korrekt zu konfigurieren, damit phpMyAdmin sich damit verbinden kann.

///

### Mit einer PostgreSQL Datenbank verbinden


Klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

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
>> - **Server (Hostname):** sichtbar im Tab `Allgemeine Informationen`{.action}, Bereich **"Administration der Datenbank"**, "Hostname" im Abschnitt **SQL**.
>> - **Port:** sichtbar am gleichen Ort, "Port" im Abschnitt **SQL**.
>> - **Benutzername:** sichtbar im Tab `Benutzer und Rechte`{.action}.
>> - **Passwort:** das dem betreffenden Benutzer zugehörige Passwort.
>> - **Datenbankname:** sichtbar im Tab `Datenbanken`{.action}.


**Klicken Sie auf die Verbindungsmethode Ihrer Wahl, um den Inhalt anzuzeigen.**

/// details | Verbindung über die Kommandozeile

```bash
psql --host=server --port=port --user=user --password=password database_name
```

///

/// details | Verbindung per PHP-Skript

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Software-Verbindung (SQuirreL SQL)

> [!primary]
>
> In unserem Beispiel verwenden wir die Open-Source-Software SQuirreL, aber andere Interfaces wie HeidiSQL oder Adminer sind vollständig kompatibel.

- Starten Sie SQuirreL SQL und klicken Sie auf `Aliases`{.action} und dann auf `+`{.action}.

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Füllen Sie die folgenden Felder aus und bestätigen Sie mit dem Button `OK`{.action}:
    - **Name**: Wählen Sie einen Namen
    - **Driver**: Wählen Sie "PostgreSQL"
    - **URL**: Geben Sie die Serveradresse und den Port im Format jdbc:postgresql://server:port/database ein
    - **User Name**: Geben Sie den Benutzernamen ein
    - **Password**: Geben Sie das Passwort ein

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Bestätigen Sie erneut mit dem Button `Verbinden`{.action}.

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Sie sind nun mit Ihrer Datenbank verbunden:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

## Weiterführende Informationen

[Webhosting - Meine Datenbank ist voll, was kann ich tun?](/pages/web_cloud/web_hosting/sql_overquota_database)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
