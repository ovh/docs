---
title: Passwort einer Webhosting-Datenbank ändern
slug: datenbank-passwort-andern
excerpt: Hier erfahren Sie, wie Sie das Passwort einer im Rahmen eines Webhosting Angebots erstellten Datenbank ändern.
section: Datenbanken
order: 2
---

**Stand 26.01.2022**

## Ziel

Die meisten Websites verwenden eine Datenbank, **um** ihre Artikel, Kommentare oder E-Mail-Adressen zu speichern.

Die Verbindung zu dieser Datenbank wird durch eine **Konfigurationsdatei** im [Dateispeicher Ihres Hostings](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) ermöglicht. Es enthält die Informationen, die es Ihrer Website erlauben, sich bei ihrem **Datenbank-Server zu identifizieren**.

Die Änderung des Passworts einer Datenbank muss deshalb immer durchgeführt werden:

- in der [Konfigurationsdatei](https://docs.ovh.com/de/hosting/1-click-module-management/#schritt-1-die-zu-ihrem-modul-gehorige-datenbank-identifizieren) Ihrer Website über [den FTP-Bereich Ihres Hostings](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/);

- **Und** auf dem Server, der seine Datenbank über Ihr [OVHcloud Kundencenter enthält](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

Bis diese Änderung an beiden Standorten durchgeführt wurde**, wird auf Ihrer Seite **ein "Verbindungsfehler zur Datenbank"[ ](https://docs.ovh.com/de/hosting/datenbanken-fehler-beheben/#verbindungsfehler-error-establishing-a-database-connection) angezeigt.

Wenn Sie das Passwort Ihrer Datenbank ändern möchten, müssen Sie daher unbedingt alle **in dieser Anleitung** aufgeführten Operationen ausführen. Bei Zweifeln an den durchzuführenden Aktionen wenden Sie sich an Ihren Webmaster oder wenden Sie sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/).

Die Änderung des Passworts der Datenbank Ihrer Website erfolgt in vier Schritten:

- [Schritt 1: die Konfigurationsdatei Ihrer Website zu identifizieren](#step1);
- [Schritt 2: die Datenbank Ihrer Website zu ermitteln](#step2);
- [Schritt 3: das Passwort der Datenbank Ihrer Website in ihrer Konfigurationsdatei ändern](#step3);
- [Schritt 4: das Passwort der Datenbank Ihrer Website auf dem Datenbankserver ändern](#step4).

**Hier erfahren Sie, wie Sie das Passwort einer Datenbank sicher ändern.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im [Abschnitt](#gofurther) Weitere Informationen.
>

## Voraussetzungen

- Sie besitzen ein [OVHcloud-Webhosting](https://www.ovhcloud.com/fr/web-hosting/)-Produkt.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.
- Eine Datenbank [verwenden, die Ihrem Shared Hosting Angebot oder einem ](https://www.ovhcloud.com/fr/web-hosting/options/start-sql/)SQL Private[ oder ](https://docs.ovh.com/fr/hosting/premiers-pas-avec-sql-prive/)CloudDB[ ](https://www.ovh.com/fr/cloud-databases/) Server zugewiesen ist.
- Sie verfügen über die FTP-Zugangsdaten, um sich mit dem [Speicherplatz Ihres](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) Hostings zu verbinden.

## In der praktischen Anwendung

### Schritt 1: Die Konfigurationsdatei Ihrer Website identifizieren <a name="step1"></a>

Klicken Sie [in Ihrem OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) Kundencenter auf `Web Cloud`{.action} und dann im linken Menü auf Hosting-Pakete` `{.action} und schließlich auf das betreffende Hosting. Gehen Sie dann auf den Tab `Multisite`{.action}. Identifizieren Sie den Namen `des` Wurzelverzeichnisses Ihrer Website (das Verzeichnis, in dem sich ihre Dateien und Ordner befinden).

![root_folder](images/root_folder.png){.thumbnail}

Klicken Sie anschließend auf den Tab `FTP - SSH`{.action} und greifen Sie auf den Speicherplatz mit den Dateien und Ordnern Ihrer Seite (*FTP*-Bereich) zu, indem Sie auf den `FTP-Explorer klicken`{.action}.

> [!primary]
>
> Wenn Sie das Passwort Ihres FTP-Speicherplatzes ändern möchten, lesen Sie [diese Anleitung](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-utilisateur-ftp/).
>
> Wenn Sie sich mit einer anderen Methode verbinden möchten, lesen Sie [diese Anleitung](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/).
>

Öffnen Sie `das` oben identifizierte Wurzelverzeichnis.

Suchen und öffnen Sie die Konfigurationsdatei Ihrer Website:

- Für eine WORDPRESS-Website handelt es sich um **"wp-config.php"**.
- Bei einer JOOMLA-Website handelt es sich um **"konfiguration.php"**.
- Klicken Sie für eine DRUPAL Website auf **"Websites"** und **"default"**. Die Konfigurationsdatei ist **"settings.php"**.
- Klicken Sie für eine PRESTASHOP Website auf den Ordner **"app"** und **"config"**. Die Konfigurationsdatei ist **"parameters.php"**.

### Schritt 2: Die Datenbank Ihrer Website identifizieren <a name="step2"></a>

Es sind zwei Fälle möglich:

- Fall 1: die Datenbank Ihrer Website ist Teil Ihres Webhosting-Angebots;
- Fall 2: Sie ist in einem *SQL Private* oder *CloudDB* Angebot enthalten. In diesem Fall finden Sie den Namen **des Servers** und den Benutzernamen Ihrer** ** Datenbank, um diese ohne Fehlerrisiko zu identifizieren.

Um zu bestimmen, welcher Fall auf Ihre Seite zutrifft, notieren Sie zunächst den Namen [der Datenbank in der](#step1) im ersten Schritt identifizierten Konfigurationsdatei:

- Für WORDPRESS: Der Name erscheint unter **"DB_NAME"**.
- Für JOOMLA: der Name erscheint unter **"public $db"**;
- Für DRUPAL: Der Name erscheint unter **"Database"**.
- Für PRESTASHOP: Der Name wird unter **"database_name"angezeigt**.

Gehen Sie dann [immer im Bereich ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)Web Cloud in Ihr OVHcloud Kundencenter` `{.action}:

- Gehen Sie in den Bereich `Hosting`{.action} und dann auf das betreffende Hosting.
- Klicken Sie auf den `Tab Datenbanken`{.action} **rechts** auf Ihrem Bildschirm.
- Suchen Sie den Namen der zuvor in der Spalte Name der Datenbank `gefundenen Datenbank`.

Wenn Sie in diesem Teil Ihres Kundencenters den Namen der in der Konfigurationsdatei angegebenen Datenbank gefunden haben, gehen Sie zu [Schritt 3](#step3).

Ist das nicht der Fall, ist die Datenbank Ihrer Website an ein [SQL Private](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/) oder [CloudDB Angebot gebunden](https://www.ovh.com/fr/cloud-databases/).

Gehen Sie daher zurück in die Konfigurationsdatei Ihrer Website, um den *Namen* des Servers sowie den *Benutzernamen* Ihrer Datenbank zu notieren:

- Für WORDPRESS: Der *Name* des Servers** erscheint unter der Rubrik **"DB_HOST"* und der *Benutzername unter der Rubrik **"DB_USER"**.
- Für JOOMLA: Der *Name* des Servers** erscheint unter **"public $host"* und der *Benutzername unter "**public $user"**.
- Für DRUPAL: Der *Name* des Servers** erscheint unter **"Host"* und der *Benutzername unter** der Bezeichnung "username"**.
- Für PRESTASHOP: Der *Name* des Servers** erscheint unter **"database_host"* und der *Benutzername unter "database_user"** **.

Klicken Sie dann im **linken** Teil Ihres Bildschirms auf `Datenbanken`{.action}. 

Im Tab `Allgemeine Informationen`{.action} können Sie in Ihren [SQL Private](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/) oder [CloudDB](https://www.ovh.com/fr/cloud-databases/) Angeboten den Namen des Servers Ihrer zuvor gefundenen Datenbank unter `Hostname`{.action} auswählen.

Gehen Sie in diesem Bereich Ihres Kundencenters auf den Tab `Benutzer`{.action} und Rechte, um auch `den Benutzernamen`{.action} Ihrer Datenbank zu ermitteln.

### Schritt 3: Passwort der Datenbank Ihrer Website in ihrer Konfigurationsdatei ändern <a name="step3"></a>

> [!primary]
>
> Für weitere Informationen zu bewährten Praktiken bei der Passwortverwaltung folgen Sie den Anweisungen in dieser [Anleitung](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).
>

Wählen Sie das neue Passwort Ihrer Datenbank aus und notieren Sie es. Er muss folgende Bedingungen erfüllen:

- mindestens 8 Zeichen;
- höchstens 30 Zeichen;
- mindestens ein Großbuchstabe;
- mindestens ein Kleinbuchstabe;
- mindestens eine Zahl;
- Darf ausschließlich aus Ziffern und Buchstaben bestehen.

Gehen Sie wie [in Schritt](#step1) I in den Datei-Speicherplatz Ihres Hostings und bearbeiten Sie die Konfigurationsdatei Ihrer Website.

**Speichern** Sie vor jeder Änderung den Inhalt der Datei lokal in einem Textdokument, um eine Kopie im Fall eines Manipulationsfehlers aufzubewahren.

Ersetzen Sie manuell das Passwort Ihrer Datenbank, indem Sie **eine Änderung oder Löschung anderer Elemente in der Konfigurationsdatei vermeiden** (in den folgenden Auszügen darf nur das Beispielpasswort "*0VhCloudPa55w0rdDB123*"ersetzt werden):

- Ändern Sie in der Konfigurationsdatei einer WORDPRESS Seite die **"DB_PASSWORD"**:

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

- Ändern Sie in der Konfigurationsdatei einer JOOMLA Website die **"public $password"** (am Ende der Konfigurationsdatei):

```php
public host = 'dbname123.mysql.db:3306';
public-user = 'dbname123'
public password = '0vhCloudPa55w0rdDB123';
public $db = 'dbname123'
```

- Ändern Sie in der Konfigurationsdatei einer DRUPAL-Website **"password"**:

```php
$databases['default']['default'] = array (
  'database' => 'dbname123'
  'username' => 'dbname123'
  'password' => '0vhCloudPa55w0rdDB123',
  'prefix' => 'prefix123_',
  'host' => 'dbname123.mysql.db',
  'port' => '3306'
```

- Ändern Sie in der Konfigurationsdatei einer Website von PRESTASHOP die **"database_password"**:

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
> Es dauert einige Minuten, bis diese Operation abgeschlossen ist. Nachdem Sie den Task gestartet haben, überprüfen Sie bitte den Status im Tab `Aktuelle Tasks`{.action}.
>

Auch hier sind zwei Fälle möglich: 

- Wenn Ihre Datenbank sich in dem Teil Ihres OVHcloud Kundencenters befindet, der [Ihrem Webhosting](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) gewidmet ist, folgen Sie [bitte](https://www.ovhcloud.com/fr/web-hosting/) diesen [Anweisungen](#case1).

- Wenn Ihre Datenbank sich in dem Teil Ihres OVHcloud Kundencenters befindet, der [Ihren ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)SQL Private[ oder ](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/)CloudDB[ Angeboten gewidmet ist, folgen Sie ](https://docs.ovh.com/fr/clouddb/)diesen Anweisungen[ ](#case2).

#### Fall 1: Die Datenbank Ihrer Website ist Teil Ihres Webhosting Angebots <a name="case1"></a>

Gehen Sie im `Bereich`{.action} Hosting Ihres Kundencenters auf den Tab `Datenbanken`{.action} rechts neben Ihrem Bildschirm:

![database-password-step1](images/database-password-step1.png){.thumbnail}

Klicken Sie dann rechts neben der Datenbank Ihrer Website auf die drei Punkte und anschließend auf `Passwort ändern`{.action}.

![database-password-step2](images/database-password-step2.png){.thumbnail}

Geben Sie im angezeigten Fenster das neue Passwort Ihrer Datenbank ein (definiert [in Schritt 3](#step3)), bestätigen Sie dieses und klicken Sie dann auf den Button `Bestätigen`{.action}.

![database-password-step3](images/database-password-step3.png){.thumbnail}

#### Fall 2: Die Datenbank Ihrer Website ist Teil eines Private SQL oder CloudDB Angebots <a name="case2"></a>

Gehen Sie in den Bereich `Datenbanken`{.action} Ihres Kundencenters (linkes Menü) und klicken Sie auf den betreffenden Server und gehen Sie auf den Tab `Benutzer und Rechte`{.action}:

![userDBpassword-step1](images/userDBpassword-step1.png){.thumbnail}

Um das Passwort Ihrer Datenbank auf dem Server zu ändern, klicken Sie auf die drei Punkte rechts neben `dem`{.action} im zweiten[ Schritt identifizierten Benutzernamen und ](#step2)anschließend auf Passwort ändern` `{.action}.

![userDBpassword-step2](images/userDBpassword-step2.png){.thumbnail}

Geben Sie im angezeigten Fenster das neue Passwort Ihrer Datenbank ein (definiert [in Schritt 3](#step3)), bestätigen Sie dieses und klicken Sie dann auf den Button `Bestätigen`{.action}.

![userDBpassword-step3](images/userDBpassword-step3.png){.thumbnail}

## Mehr <a name="gofurther"></a>

[FileZilla Softwareverwendung mit Ihrem Hosting](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)

[Passwort Ihres Accounts ändern](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/)

[Die häufigsten Datenbankfehler beheben](https://docs.ovh.com/fr/hosting/erreurs-frequentes-bases-de-donnees/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/fr/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/>.