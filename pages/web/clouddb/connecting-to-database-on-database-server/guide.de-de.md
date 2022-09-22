---
title: 'Mit der Datenbank Ihres Datenbankservers verbinden'
slug: datenbank-verbindung-auf-bdd
excerpt: 'Erfahren Sie hier, wie Sie sich mit Ihrer Datenbank verbinden können'
section: Konfiguration
order: 03
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 22.09.2022**

## Ziel

Sie können den Inhalt Ihrer Datenbank einsehen, indem Sie sich in ein geeignetes Interface einloggen.

**Diese Anleitung erklärt die verschiedenen Möglichkeiten, sich mit Ihrer Datenbank zu verbinden.**

## Voraussetzungen

- Sie verfügen über eine [CloudDB Instanz](https://www.ovh.de/cloud-databases/){.external} (in einem [Performance Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebot enthalten)
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!primary]
>
> Beachten Sie, dass die [CloudDB Dienste](https://www.ovh.de/cloud-databases/) keinen Zugriff auf den Datenbankserver gewähren, sondern auf die darauf gehosteten Datenbanken. 
> <br> - Es gibt keinen "root"-Zugang. 
> <br> - Generische SQL-Befehle funktionieren normal, und Programme wie HeidiSQL, SQuirreL oder Adminer sind vollständig kompatibel.
> 

### Mit einer MySQL oder MariaDB Datenbank verbinden 

> [!primary]
>
> Da MariaDB ein Derivat von MySQL ist, sind die verschiedenen Befehle für diese beiden Arten von Datenbanken exakt gleich.
> 

#### phpMyAdmin von OVHcloud

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und klicken Sie im Bereich `Web Cloud`{.action} auf `Datenbanken`{.action}. Wählen Sie den Datenbanknamen aus und gehen Sie dann auf den Tab `Allgemeine Informationen`{.action}.

Hier finden Sie den Zugangslink im Kasten **Administration der Datenbank** unter "Benutzer-Interface".

![private-sql](images/private-sql-phpma01.png){.thumbnail}

Damit gelangen Sie zur Loginseite von phpMyAdmin.

![private-sql](images/private-sql-phpma02.png){.thumbnail}

- **Server**: Geben Sie den Hostnamen Ihres Servers, sichtbar im Tab `Allgemeine Informationen` im Kasten **Verbindungsinformationen** unter "Hostname" im Abschnitt **SQL** ein.
- **Benutzer**: Geben Sie den Benutzernamen aus dem Tab `Benutzer und Rechte` ein.
- **Passwort**: Geben Sie das Passwort des betreffenden Benutzers ein.
- **Port**: Tragen Sie die im Tab `Allgemeine Informationen` im Kasten **Verbindungsinformationen** unter "Port" im Abschnitt **SQL** sichtbare Portnunmmer ein.

Wenn die Verbindung erfolgreich ist, erscheint die phpMyAdmin-Startseite.

![private-sql](images/private-sql-phpma03.png){.thumbnail}

> [!warning]
>
> **Im Fall eines Fehlers:**
> <br> - Fehler #1045 bedeutet, dass die Identifikation fehlgeschlagen ist. Überprüfen Sie daher Ihren Benutzernamen und Ihr Passwort.
> <br> - Fehler #2005 bedeutet, dass Sie den Namen des Servers überprüfen sollten. Stellen Sie sicher, dass er korrekt ist.

#### Verbindung zur Datenbank außerhalb des Kundencenters

> [!warning]
>
> Wenn Sie Cloud DB oder SQL Private für Datenbanken einsetzen, vergessen Sie nicht, Ihrer IP-Adresse mithilfe der Anleitung [Konfiguration Ihres Datenbankservers](https://docs.ovh.com/de/clouddb/konfigurieren-ihres-datenbank-servers/) den Zugriff zu erlauben.
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

![launch SQuirreL SQL](images/1.png){.thumbnail}

- Füllen Sie die folgenden Felder aus und bestätigen Sie mit dem Button `OK`{.action}:
    - **Name**: Wählen Sie den Namen aus.
    - **Driver**: Wählen Sie "MySQL Driver".
    - **URL**: Geben Sie die Adresse des Servers und den Port ein, in der Form jdbc:mysql://server:port.
    - **User Name**: Geben Sie den Benutzernamen ein.
    - **Password**: Geben Sie das Passwort ein.

![config](images/2.png){.thumbnail}

- Bestätigen Sie erneut mit dem Button `Connect`{.action}.

![valid connection](images/3.png){.thumbnail}

Sie sind nun mit Ihrer Datenbank verbunden.

![config](images/4.PNG){.thumbnail}


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

![launch SQuirreL SQL](images/1.png){.thumbnail}

- Füllen Sie die folgenden Felder aus und bestätigen Sie mit dem Button `OK`{.action}:
    - **Name**: Wählen Sie den Namen aus.
    - **Driver**: Wählen Sie "PostgreSQL".
    - **URL**: Geben Sie die Adresse des Servers und den Port ein, in der Form jdbc:postgresql://server:port/database.
    - **User Name**: Geben Sie den Benutzernamen ein.
    - **Password**: Geben Sie das Passwort ein.

![config](images/2.png){.thumbnail}

- Bestätigen Sie erneut mit dem Button `Connect`{.action}.

![valid connection](images/3.png){.thumbnail}

Sie sind nun mit Ihrer Datenbank verbunden.

![config](images/4.PNG){.thumbnail}

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
