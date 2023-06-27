---
title: "Tutorial - Manuelle Installation von Joomla!"
excerpt: "Erfahren Sie hier, wie Sie Ihr Joomla! CMS eigenständig installieren"
updated: 2023-04-03
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 03.04.2023**


## Ziel

Hier finden Sie alle Elemente, um das Content Management System (CMS) Joomla! in wenigen Schritten manuell zu installieren.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) oder den [Herausgeber von Joomla!](https://www.joomla.org/){.external} zu kontaktieren. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

> [!success]
>
> Um Joomla! **automatisch** in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu installieren, lesen Sie unsere Anleitung zur [Installation Ihrer Website mit 1-Klick-Modulen](/pages/web/hosting/cms_install_1_click_modules).
>
> Um ein **anderes CMS manuell** zu installieren (WordPress, Drupal, PrestaShop), lesen Sie unsere Anleitung zur [manuellen Installation eines CMS](/pages/web/hosting/cms_manual_installation).
>

**Dieses Tutorial erklärt, wie Sie Ihr Joomla! CMS manuell installieren.**
 
## Voraussetzungen

- Sie verfügen über ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Sie verfügen über einen [Domainnamen](https://www.ovhcloud.com/de/domains/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
  
## In der praktischen Anwendung

### Schritt 1: Installation vorbereiten <a name="step1"></a>

Um das CMS **Joomla!** auf Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) zu installieren sind einige Vorbereitungen erforderlich.

Führen Sie zunächst **alle Schritte** in unserer Anleitung zur [manuellen Installation eines CMS](/pages/web/hosting/cms_manual_installation) aus, bevor Sie mit Schritt 2 fortfahren.

### Schritt 2: Manuelle Installation abschließen <a name="step2"></a>

> [!success]
>
> Bevor Sie mit der Installation fortfahren, leeren Sie den Cache Ihres Browsers, um Fehler zu vermeiden.
>

#### 2.1 Joomla! im Browser öffnen

Geben Sie Ihren Domainnamen in die Suchleiste Ihres Webbrowsers ein.

Wenn die Quelldateien korrekt im Wurzelverzeichnis platziert wurden, erscheint die Seite zur Auswahl der Sprache für Joomla!.

![Joomla installation step 1](images/Joomla-install-select-language-1.png){.thumbnail}

Wählen Sie die Sprache aus, geben Sie den Namen Ihrer Website ein und klicken Sie dann auf `Setup Login Data`{.action}.

#### 2.2 Verbindungsdaten für Joomla! konfigurieren

Geben Sie die Daten zum Zugriff auf den Verwaltungsbereich (Backend) von Joomla! ein:

![Joomla installation step 2](images/Joomla-install-define-admin-2.png){.thumbnail}

> [!primary]
>
> Der Begriff "Super User" bezeichnet die Person, die das CMS verwaltet.

- *Enter the real name of your Super User*: Geben Sie Ihren Namen ein.
- *Set the username for your Super User account*: Geben Sie einen Benutzernamen ein, mit dem Sie sich im Verwaltungsbereich einloggen.
- *Set the password for your Super User account*: Wählen Sie ein Passwort mit mindestens **12 Zeichen**.
- *Enter the email address of the website Super User*: Geben Sie eine gültige E-Mail-Adresse ein. Diese dient dem Empfang der von Joomla! übermittelten Benachrichtigungen.

Überprüfen Sie die eingegebenen Daten und klicken Sie dann auf `Setup Database Connection`{.action}.

#### 2.3 Joomla! mit Ihrer Datenbank verbinden

Geben Sie die angeforderten Informationen zur Datenbank ein:

![Joomla installation step 3](images/Joomla-install-db-connect-3.png){.thumbnail}

Halten Sie die Zugangsdaten für Ihre Datenbank bereit. (Sie können bei Bedarf **Schritt 1.4** des Tutorials zur [manuellen Installation eines CMS](/pages/web/hosting/cms_manual_installation) verwenden).

- *Select the database type*: Wählen Sie aus den angebotenen Optionen den Typ Ihrer Datenbank aus. Wenn Sie Sie eine im Webhosting inkludierte Datenbank verwenden, können Sie den Wert **MySQLi** beibehalten.

- *Enter the host name, usually "localhost", or a name provided by your host*: Geben Sie den Servernamen Ihrer Datenbank ein, zu finden in der Installationsmail und einsehbar in Ihrem OVHcloud Kundencenter.

> [!primary]
> 
> - Der Servername einer Datenbank, die in einem Webhosting inklusive ist, hat regulär folgendes Format: `DatenbankName.mysql.db`. 
>
> - Der Servername einer Web Cloud Databases Datenbank leitet sich von Ihrer OVHcloud Kundenkennung ab und hat folgendes Format: `aa00000-XXX.eu.clouddb.ovh.net` wobei **"aa00000"** für Ihre OVHcloud Kundenkennung (ohne **"-ovh"**) und **XXX** für die Referenz Ihrer Web Cloud Databases Instanz steht.
>

- *Either a username you created or a username provided by your host*: Dieser ist identisch mit dem Datenbanknamen, wenn Sie eine im Webhosting inkludierte Datenbank verwenden. Für Datenbanken, die mit Web Cloud Databases erstellt wurden, lesen Sie die Informationen in **Schritt 1.4** des Tutorials zur [manuellen Installation eines CMS](/pages/web/hosting/cms_manual_installation).

- *Either a password you created or a password provided by your host*: Das Passwort wurde Ihnen bei der Erstellung der Datenbank per E-Mail gesendet. Möglicherweise haben Sie es inzwischen geändert.

- *Enter the database name*: Dieser Name wurde bei der Erstellung der Datenbank im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) definiert. Er ist identisch mit dem Benutzernamen der Datenbank, wenn Sie eine Datenbank verwenden, die in Ihrem Webhosting enthalten ist.

- *Enter a table prefix or use the randomly generated one*: Wenn die Installation mit einer neuen Datenbank erfolgt, geben Sie ein Präfix Ihrer Wahl ein. Wenn Sie eine Datenbank eingeben, die bereits von einer anderen Website verwendet wird, lesen Sie die Informationen in **Schritt 1.4** des Tutorials zur [manuellen Installation eines CMS](/pages/web/hosting/cms_manual_installation), um kein in Ihrer Datenbank bereits verwendetes Tabellenpräfix einzugeben.

- **Connection Encryption**: Wählen Sie **Default (server controlled)** aus.

Klicken Sie auf `Install Joomla`{.action}.

Folgende Nachricht erscheint:

![Joomla installation step 3-1](images/Joomla-install-db-connect-3-1.png){.thumbnail}

Da Sie eine Datenbank außerhalb des lokalen Webservers verwenden, muss der *Token* gelöscht werden, der bei der Installation Ihres Joomla! zufallsgeneriert wurde.

Diese zu löschende Datei finden Sie in Ihrem [FTP-Speicherplatz](/pages/web/hosting/ftp_connection).

Wenn Sie eingeloggt sind, gehen Sie zum Ordner namens **installation** innerhalb der Installation von Joomla! und löschen Sie dann den in der Warnmeldung genannten *token*. Es handelt sich um eine **.txt**-Datei.

Anschließend klicken Sie in Ihrem Webbrowser erneut auf `Install Joomla`{.action}.

#### 2.4 Installation abschließen

Nach Abschluss der Installation erscheint folgende Seite:

![Joomla installation step 4](images/Joomla-install-ending-4.png){.thumbnail}

Die Installation ist abgeschlossen. Sie können Ihrem CMS jedoch bei Bedarf weitere Sprachen hinzufügen.

>[!success]
>
> > Sie können nun mit der Erstellung des Inhalts Ihrer Joomla! Website beginnen!
>

## Weiterführende Informationen <a name="go-further"></a>

[Offizielle Website Joomla!](https://joomla.org){.external}

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
