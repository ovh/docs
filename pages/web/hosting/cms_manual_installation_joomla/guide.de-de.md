---
title: "Tutorial - Manuelle Installation von Joomla!"
slug: cms_manually_install_joomla
excerpt: "Diese Anleitung erklärt, Ihr Joomla! CMS manuell installieren"
section: CMS
order: 05
updated: 2023-04-03
---

**Letzte Aktualisierung am 03.04.2023**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Hier finden Sie alle Elemente, um das Content Management System (CMS) Joomla! in wenigen Schritten manuell zu installieren.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) oder [Herausgeber des CMS Joomla!](https://www.joomla.org/){.external} zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

> [!success]
>
> Um Joomla! **automatisch** in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu installieren, lesen Sie unsere Anleitung zur [Installation eines "mit einem Klick" Moduls](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/).
>
> Um ein **anderes CMS manuell zu installieren** (WordPress, Drupal, PrestaShop) lesen Sie unsere Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).
>

**Diese Anleitung erklärt, wie Sie Ihr Joomla! CMS manuell installieren.**
 
## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Über eine [Domainname](https://www.ovhcloud.com/fr/domains/)
- Sie sind im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt
  
## In der praktischen Anwendung

### Schritt 1 - Installation vorbereiten <a name="step1"></a>

Um das CMS **Joomla!** auf Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebot zu installieren sind einige Vorbereitungen erforderlich.

Folgen Sie der **Alle Schritte** in unserer Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/), bevor Sie mit Schritt 2 fortfahren.

### Schritt 2 - manuelle Installation abschließen <a name="step2"></a>

> [!success]
>
> Bevor Sie mit der Installation fortfahren, leeren Sie den Cache Ihres Browsers, um Fehler zu vermeiden.
>

#### 2.1 - Auf Ihre Joomla! Seite über Ihren Browser

Geben Sie Ihren Domainnamen in die Suchleiste Ihres Webbrowsers ein.

Wenn Joomla Quelldateien hat! wurden korrekt in Ihrem Wurzelverzeichnis platziert, der Seite zur Auswahl der Sprache für Joomla!! erscheint:

![Joomla installation step 1](images/Joomla-install-select-language-1.png){.thumbnail}

Wählen Sie die Sprache aus, geben Sie den Namen Ihrer Website ein und klicken Sie dann auf `Setup Login Data`{.action}.

#### 2.2 - Die Verbindungsdaten für Ihr Joomla konfigurieren!

Legen Sie die Zugriffe auf Ihren Verwaltungsbereich fest (*Back Office*) Joomla! :

![Joomla installation step 2](images/Joomla-install-define-admin-2.png){.thumbnail}

> [!primary]
>
> Der Begriff "Super User" bezeichnet die Person, die das CMS verwaltet.

- *Enter the real name of your Super User*: Geben Sie Ihren tatsächlichen Namen ein.
- *Set the username for your Super User account*: Wählen Sie einen Benutzernamen aus, mit dem Sie sich mit Ihrem Joomla!-Verwaltungsbereich verbinden können!
- *Set the password for your Super User account*: Wählen Sie ein Passwort mit mindestens **12 Zeichen**.
- *Enter the email address of the website Super User*: Geben Sie eine gültige E-Mail-Adresse ein. Diese dient dem Empfang der von Joomla! übermittelten Benachrichtigungen.

Überprüfen Sie die angegebenen Elemente und klicken Sie dann auf `Setup Database Connection`{.action}.

#### 2.3 - Ihre Datenbank mit Ihrem Joomla verbinden!

Geben Sie die angeforderten Informationen zur Datenbank ein:

![Joomla installation step 3](images/Joomla-install-db-connect-3.png){.thumbnail}

Lesen Sie die Informationen in **Schritt 1.4** des Tutorials über die [manuelle Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/), um folgende Felder zu vervollständigen:

- *Select the database type* aus: Wählen Sie den Typ Ihrer Datenbank aus den für Joomla! verfügbaren Typen aus. Wenn Sie eine Shared Hosting Datenbank von OVHcloud verwenden, können Sie standardmäßig den Wert **MySQLi*** speichern.

- *Enter the host name, usually "localhost", or a name provided by your host*: Geben Sie den Namen des Servers Ihrer Datenbank ein, der sich in der Installations-E-Mail oder in Ihrem OVHcloud Kundencenter befindet.

> [!primary]
> 
> - Der Name des Servers einer Datenbank, die bei Ihrem Webhosting Angebot enthalten ist, hat im Allgemeinen folgende Form: `nameOfYourDatabase.mysql.db`. 
>
> - Der Name des Servers einer Web Cloud Databases Datenbank beginnt mit Ihrer OVHcloud Kundenkennung und hat folgende Form: `aa00000-XXX.eu.clouddb.ovh.net`, **"aa00000"** entspricht Ihrer OVHcloud Kundenkennung ohne das **"-ovh"** und die **"X"** müssen durch den Rest der Referenz Ihres Web Cloud Databases ersetzt werden.
>

- *Either a username you created or a username provided by your host*: Der Name der Datenbank ist identisch, wenn Sie eine Datenbank verwenden, die in Ihrem Webhosting enthalten ist.
Für Datenbanken, die auf einem Web Cloud Databases erstellt werden, lesen Sie die Informationen in **Schritt 1.4** der Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).

- *Either a password you created or a password provided by your host*: Sie selbst haben es bei der Erstellung Ihrer Datenbank festgelegt. Es ist auch möglich, dass Sie es inzwischen geändert haben, bitte überprüfen Sie es.

- *Enter the database name*: Dieser Name wurde bei der Erstellung der Datenbank im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) definiert. Es ist identisch mit dem Benutzernamen der Datenbank, wenn Sie eine Datenbank verwenden, die in Ihrem Webhosting enthalten ist.

- *Enter a teble prefix or use the randomly generated one*: Wenn die Installation mit einer ganz neuen Datenbank erfolgt, geben Sie das "Präfix"Ihrer Wahl ein. Wenn Sie eine Datenbank verwenden, die bereits von einer anderen Website verwendet wird, lesen Sie bitte **Schritt 1.4** der Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/), um kein in Ihrer Datenbank bereits verwendetes Tabellenpräfix einzugeben.

- **Connection Encryption**: Wert **Default (server controlled)**

Klicken Sie auf `Install Joomla`{.action}.

Folgende Nachricht erscheint:

![Joomla installation step 3-1](images/Joomla-install-db-connect-3-1.png){.thumbnail}

Da Sie eine Datenbank außerhalb eines lokalen Hostings verwenden, muss das *Token* gelöscht werden, das bei der Installation Ihres Joomla! zufällig erstellt wurde!

Diese zu löschende Datei befindet sich in Ihrem [FTP-Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/).

Wenn Sie eingeloggt sind, gehen Sie in den Ordner **installation** Ihres Joomla! und löschen Sie dann nur das in der Warnmeldung angegebene *token*. Es ist als Datei **.txt** vorhanden.

Gehen Sie anschließend in Ihren Webbrowser und klicken Sie erneut auf `Install Joomla`{.action}.

#### 2.4 - Die Installation beenden

Nach Abschluss der Installation erscheint folgende Seite:

![Joomla installation step 4](images/Joomla-install-ending-4.png){.thumbnail}

Die Installation ist abgeschlossen, Sie können Ihrem CMS jedoch bei Bedarf weitere Sprachen hinzufügen.

>[!success]
>
> Herzlichen Glückwunsch, Joomla! ist für die Anwendung und Anwendung bereit.
>

## Weiterführende Informationen <a name="go-further"></a>

[offizielle Website Joomla!](https://joomla.org){.external}

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.