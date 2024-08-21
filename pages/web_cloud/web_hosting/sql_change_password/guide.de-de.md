---
title: Passwort einer Webhosting-Datenbank ändern
excerpt: Erfahren Sie hier, wie Sie Passwörter von zu Webhostings gehörigen Datenbanken ändern
updated: 2022-01-26
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Die meisten Websites verwenden eine **Datenbank**, um ihre Artikel, Kommentare oder E-Mail-Adressen zu speichern.

Die Verbindung zu dieser Datenbank wird durch eine **Konfigurationsdatei** im [FTP-Speicherplatz](/pages/web_cloud/web_hosting/ftp_connection) Ihres Hostings ermöglicht. Sie enthält die Login-Daten, die es Ihrer Website erlauben, sich bei ihrem **Datenbank-Server** anzumelden.

Die Änderung des Passworts einer Datenbank muss deshalb immer an zwei Orten durchgeführt werden:

- In der [Konfigurationsdatei](/pages/web_cloud/web_hosting/cms_manage_1_click_module#schritt-1-die-zu-ihrem-modul-gehorige-datenbank-identifizieren) Ihrer Website, im [FTP-Bereich Ihres Hostings](/pages/web_cloud/web_hosting/ftp_connection).

- **Und** auf dem Server, der die entsprechende Datenbank enthält, über Ihr [OVHcloud Kundencenter](/links/manager).

Bis diese Änderung **an beiden Stellen** durchgeführt wurde, wird auf Ihrer Seite ein Verbindungsfehler “[Error establishing a database connection](/pages/web_cloud/web_hosting/diagnosis_database_errors#verbindungsfehler-error-establishing-a-database-connection)“ angezeigt.

Wenn Sie das Passwort Ihrer Datenbank ändern möchten, müssen daher die in dieser Anleitung **beschriebenen Operationen vollständig** durchgeführt werden. Bei Zweifeln an den durchzuführenden Aktionen wenden Sie sich an Ihren Webmaster oder kontaktieren Sie einen [[spezialisierten Dienstleister](/links/partner)](/links/partner).

Die Änderung des Passworts der Datenbank Ihrer Website erfolgt in vier Schritten:

- [Schritt 1: Die Konfigurationsdatei Ihrer Website identifizieren](#step1)
- [Schritt 2: Die zugehörige Datenbank für Ihre Website ermitteln](#step2)
- [Schritt 3: Das Passwort der Datenbank Ihrer Website in ihrer Konfigurationsdatei ändern](#step3)
- [Schritt 4: Das Passwort der Datenbank Ihrer Website auf dem Datenbankserver ändern](#step4)

**Diese Anleitung erklärt, wie Sie das Passwort einer Datenbank sicher ändern.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verwenden eine [in Ihrem Webhosting enthaltene Datenbank](/links/web/hosting-options-startsql) oder einen [Web Cloud Databases Dienst](https://www.ovh.de/cloud-databases/).
- Sie verfügen über die FTP-Zugangsdaten, um sich auf dem [Speicherplatz](/pages/web_cloud/web_hosting/ftp_connection) Ihres Hostings einzuloggen.

## In der praktischen Anwendung

### Schritt 1: Die Konfigurationsdatei Ihrer Website identifizieren <a name="step1"></a>

Klicken Sie in Ihrem [OVHcloud Kundencenter](/links/manager) auf `Web Cloud`{.action} und dann auf `Hosting-Pakete`{.action} und schließlich auf das betreffende Hosting. Öffnen Sie den Tab `Multisite`{.action}. Identifizieren Sie den Namen des `Wurzelverzeichnisses` Ihrer Website (das Verzeichnis, in dem sich ihre Dateien und Ordner befinden).

![root-folders](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

Klicken Sie anschließend auf den Tab `FTP-SSH`{.action} und greifen Sie auf den Speicherplatz mit den Dateien und Ordnern Ihrer Seite (*FTP-Bereich*) zu, indem Sie auf den `FTP-Explorer`{.action} klicken.

> [!primary]
>
> Wenn Sie das Passwort Ihres FTP-Speicherplatzes ändern möchten, lesen Sie [diese Anleitung](/pages/web_cloud/web_hosting/ftp_change_password).
>
> Wenn Sie sich mit einer anderen Methode verbinden möchten, lesen Sie [diese Anleitung](/pages/web_cloud/web_hosting/ftp_connection).
>

Öffnen Sie das oben identifizierte `Wurzelverzeichnis`.

Suchen und öffnen Sie die Konfigurationsdatei Ihrer Website:

- Für eine WORDPRESS-Website handelt es sich um "**wp-config.php**".
- Bei einer JOOMLA-Website handelt es sich um "**configuration.php**".
- Öffnen Sie für eine DRUPAL-Website "**sites**" und "**default**". Die Konfigurationsdatei ist "**settings.php**".
- Öffnen Sie für eine PRESTASHOP-Website den Ordner "**app**" und dann "**config**". Die Konfigurationsdatei ist "**parameters.php**".

### Schritt 2: Die Datenbank Ihrer Website identifizieren <a name="step2"></a>

Es sind zwei Fälle möglich:

- Fall 1: Die Datenbank Ihrer Website ist Teil Ihres Webhosting-Angebots.
- Fall 2: Die Datenbank ist Teil eines *Web Cloud Databases* Dienstes. In diesem Fall benötigen Sie den *Servernamen* und den *Benutzernamen* Ihrer Datenbank, um den korrekten Datenbankdienst gesichert zu ermitteln.

Um zu bestimmen, welcher Fall auf Ihre Webseite zutrifft, notieren Sie zunächst den Namen der Datenbank in der im [ersten Schritt](#step1) identifizierten Konfigurationsdatei:

- Für WORDPRESS: Der Name erscheint unter "**DB_NAME**".
- Für JOOMLA: Der Name erscheint unter "**public $db**".
- Für DRUPAL: Der Name erscheint unter "**database**".
- Für PRESTASHOP: Der Name erscheint unter "**database_name**".

Führen Sie im Bereich `Web Cloud`{.action} Ihres [OVHcloud Kundencenters](/links/manager) jeweils die folgenden Schritte aus:

- Gehen Sie in den Bereich `Hosting-Pakete`{.action} und dann auf das betreffende Hosting.
- Klicken Sie auf den Tab `Datenbanken`{.action} auf der **rechten Seite der Bildschirmanzeige**.
- Suchen Sie den Namen der zuvor in der Spalte `Name der Datenbank` gefundenen Datenbank.

Wenn Sie in diesem Teil Ihres Kundencenters den Namen der in der Konfigurationsdatei angegebenen Datenbank gefunden haben, gehen Sie zu [Schritt 3](#step3).

Ist das nicht der Fall, ist die Datenbank Ihrer Website an ein [Web Cloud Databases Angebot](https://www.ovh.de/cloud-databases/) gebunden.

Gehen Sie dann zurück zur Konfigurationsdatei Ihrer Website, um den *Servernamen* sowie den *Benutzernamen* Ihrer Datenbank zu notieren:

- Für WORDPRESS: Der *Servername* erscheint unter "**DB_HOST**" und der *Benutzername* unter "**DB_USER**".
- Für JOOMLA: Der *Servername* erscheint unter "**public $host**" und der *Benutzername* unter "**public $user**".
- Für DRUPAL: Der *Servername* erscheint unter "**host**" und der *Benutzername* unter "**username**".
- Für PRESTASHOP: Der *Servername* erscheint unter "**database_host**" und der *Benutzername* unter "**database_user**".

Öffnen Sie anschließend `Datenbanken`{.action} im Bereich `Web Cloud`{.action}.

Im Tab `Allgemeine Informationen`{.action} können Sie in Ihren [Web Cloud Databases Angeboten](https://www.ovh.de/cloud-databases/) den Servernamen Ihrer zuvor gefundenen Datenbank unter `Hostname`{.action} auswählen.

Gehen Sie in diesem Bereich Ihres Kundencenters auf den Tab `Benutzer und Rechte`{.action}, um auch den `Benutzernamen`{.action} Ihrer Datenbank zu ermitteln.

### Schritt 3: Passwort der Datenbank Ihrer Website in ihrer Konfigurationsdatei ändern <a name="step3"></a>

> [!primary]
>
> Für weitere Informationen zu bewährten Praktiken bei der Passwortverwaltung folgen Sie den Anweisungen in [dieser Anleitung](/pages/account_and_service_management/account_information/manage-ovh-password).
>

Legen Sie das neue Passwort Ihrer Datenbank fest und speichern Sie es. Es muss folgende Bedingungen erfüllen:

- Mindestens 8 Zeichen
- Höchstens 30 Zeichen
- Mindestens ein Großbuchstabe
- Mindestens ein Kleinbuchstabe
- Mindestens eine Zahl
- Ausschließlich Ziffern und Buchstaben

Gehen Sie wie in [Schritt 1](#step1) beschrieben zum FTP-Speicherplatz Ihres Hostings und bearbeiten Sie die Konfigurationsdatei Ihrer Website.

**Speichern** Sie vor jeder Änderung den Inhalt der Datei lokal in einem Textdokument, um eine Backup-Kopie für einen Fehlerfall aufzubewahren.

Ersetzen Sie manuell das Passwort Ihrer Datenbank, wobei Sie **jegliche Änderung oder Löschung anderer Elemente in der Konfigurationsdatei vermeiden**. (In den folgenden Auszügen darf nur das Beispielpasswort "*0VhCloudPa55w0rdDB123*"ersetzt werden.)

- Ändern Sie in der Konfigurationsdatei einer WORDPRESS Webseite "**DB_PASSWORD**":

```php
//** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dbname123');
 
/** MySQL username Database */
define('DB_USER', 'dbname123');
 
/** MySQL database password */
define('DB_PASSWORD', '0VhCloudPa55w0rdDB123');
 
/** MySQL hostname */
define('DB_HOST', 'dbname123.mysql.db:3306');
```

- Ändern Sie in der Konfigurationsdatei einer JOOMLA Website "**public $password**" (am Ende der Konfigurationsdatei):

```php
public host = 'dbname123.mysql.db:3306';
public-user = 'dbname123'
public password = '0vhCloudPa55w0rdDB123';
public $db = 'dbname123'
```

- Ändern Sie in der Konfigurationsdatei einer DRUPAL Website "**password**":

```php
$databases['default']['default'] = array (
  'database' => 'dbname123'
  'username' => 'dbname123'
  'password' => '0vhCloudPa55w0rdDB123',
  'prefix' => 'prefix123_',
  'host' => 'dbname123.mysql.db',
  'port' => '3306'
```

- Ändern Sie in der Konfigurationsdatei einer PRESTASHOP Website "**database_password**":

```php
'database_host' => 'dbname123.mysql.db',
'database_port' => '3306'
'database_name' => 'dbname123'
'database_user' => 'dbname123'
'database_password' => '0vhCloudPa55w0rdDB123',
```

Speichern Sie diese Änderung.

### Schritt 4: Passwort der Datenbank Ihrer Website auf dem Datenbankserver ändern <a name="step4"></a>

> [!primary]
>
> Es dauert einige Minuten, bis diese Operation abgeschlossen ist. Nachdem Sie den Task gestartet haben, können Sie den Status im Tab `Aktuelle Tasks`{.action} einsehen.
>

Auch hier sind zwei Fälle möglich: 

- Wenn Ihre Datenbank sich im Bereich Ihres [OVHcloud Kundencenters](/links/manager) für [Webhostings](/links/web/hosting)befindet, folgen Sie [diesen Anweisungen](#case1).

- Wenn Ihre Datenbank sich in dem Teil Ihres [OVHcloud Kundencenters](/links/manager) befindet, der [Web Cloud Databases Angeboten](/products/web-cloud-clouddb) gewidmet ist, folgen Sie [diesen Anweisungen](#case2).

#### Fall 1: Die Datenbank Ihrer Website ist Teil Ihres Webhostings <a name="case1"></a>

Gehen Sie im Bereich `Hosting-Pakete`{.action} Ihres Kundencenters auf den Tab `Datenbanken`{.action} im rechten Bereich Ihrer Bildschirmanzeige:

![database-password-step1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}

Klicken Sie dann rechts neben der Datenbank Ihrer Website auf `...`{.action} und anschließend auf `Passwort ändern`{.action}.

![database-password-step2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/change-password.png){.thumbnail}

Geben Sie im angezeigten Fenster das neue Passwort Ihrer Datenbank ein (festgelegt in [Schritt 3](#step3)), bestätigen Sie dieses und klicken Sie dann auf den Button `Bestätigen`{.action}.

![database-password-step3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/change-password-window.png){.thumbnail}

#### Fall 2: Die Datenbank Ihrer Website ist Teil eines Web Cloud Databases Datenbankdienstes <a name="case2"></a>

Gehen Sie in den Bereich `Datenbanken`{.action} Ihres Kundencenters und klicken Sie auf den betreffenden Server. Gehen Sie zum Tab `Benutzer und Rechte`{.action}:

![userDBpassword-step1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/wcdb-tab.png){.thumbnail}

Um das Passwort Ihrer Datenbank auf dem Server zu ändern, klicken Sie auf `...`{.action} rechts neben dem im [zweiten Schritt](#step2) identifizierten `Benutzernamen`{.action} und anschließend auf `Passwort ändern`{.action}.

![userDBpassword-step2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/wcdb-change-password.png){.thumbnail}

Geben Sie im angezeigten Fenster das neue Passwort Ihrer Datenbank ein (definiert in [Schritt 3](#step3)), bestätigen Sie dieses und klicken Sie dann auf den Button `Bestätigen`{.action}.

![userDBpassword-step3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/wcdb-change-password-window.png){.thumbnail}

## Weiterführende Informationen <a name="go-further"></a>

[Verwendung von FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Passwortverwaltung](/pages/account_and_service_management/account_information/manage-ovh-password)

[Die häufigsten Datenbankfehler beheben](/pages/web_cloud/web_hosting/diagnosis_database_errors)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Treten Sie unserer [User Community](/links/community) bei.