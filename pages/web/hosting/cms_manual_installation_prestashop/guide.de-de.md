---
title: "Tutorial - Manuelle Installation von PrestaShop"
slug: cms_manually_install_prestashop
excerpt: "Erfahren Sie hier, wie Sie Ihr PrestaShop CMS eigenständig installieren"
section: CMS
order: 07
updated: 2023-04-03
---


> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 03.04.2023**

## Ziel

Hier finden Sie alle Elemente, um das Content Management System (CMS) PrestaShop in wenigen Schritten manuell zu installieren.


> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) oder den [Herausgeber von PrestaShop](https://www.prestashop.com/en/support){.external} zu kontaktieren. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

> [!success]
>
> Um PrestaShop **automatisch** in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu installieren, lesen Sie unsere Anleitung zur [Installation Ihrer Website mit 1-Klick-Modulen](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/).
>
> Um ein **anderes CMS manuell** zu installieren (WordPress, Drupal, Joomla!), lesen Sie unsere Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).
>

**Dieses Tutorial erklärt, wie Sie Ihr PrestaShop CMS manuell installieren.**
 
## Voraussetzungen

- Sie verfügen über ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Sie verfügen über einen [Domainnamen](https://www.ovhcloud.com/de/domains/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
  
## In der praktischen Anwendung

### Schritt 1: Installation vorbereiten <a name="step1"></a>

Um das CMS **PrestaShop** auf Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) zu installieren sind einige Vorbereitungen erforderlich.

Führen Sie zunächst **alle Schritte** in unserer Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/) aus, bevor Sie mit Schritt 2 fortfahren.

### Schritt 2: Manuelle Installation abschließen <a name="step2"></a>

> [!success]
>
> Bevor Sie mit der Installation fortfahren, leeren Sie den Cache Ihres Browsers, um Fehler zu vermeiden.
>

Wenn Sie nicht die neueste verfügbare PrestaShop-Version heruntergeladen haben, erscheint folgende Seite:

![PrestaShop installation step 1](images/Prestashop-install-update-version.png){.thumbnail}

Klicken Sie auf `No thanks`{.action}, wenn Sie die heruntergeladene PrestaShop-Version verwenden möchten, andernfalls auf `Yes please!`{.action} um die neueste Version zu erhalten.

#### 2.1 PrestaShop im Browser öffnen

Geben Sie Ihren Domainnamen in die Suchleiste Ihres Webbrowsers ein.

Wenn die Quelldateien korrekt im Wurzelverzeichnis platziert wurden, erscheint die Seite zur Auswahl der Sprache für PrestaShop.

![PrestaShop installation step 2](images/Prestashop-install-select-language.png){.thumbnail}

Wählen Sie die Sprache der Website aus und klicken Sie auf `Next`{.action}.

#### 2.2 Nutzungsbedingungen bestätigen

Lesen Sie die Nutzungsbedingungen, setzen Sie einen Haken bei `I agree to the above terms and conditions`{.action} und klicken Sie dann auf `Next`{.action}.

![PrestaShop installation step 3](images/Prestashop-install-licence-agreement-3.png){.thumbnail}

#### 2.3 Die Informationen Ihres Webshops eingeben

PrestaShop fordert Sie auf, einige Informationen zu Ihrem zukünftigen Onlineshop einzugeben:

![PrestaShop installation step 4](images/Prestashop-install-store-infos-4.png){.thumbnail}

**Information about your Store**

- *Shop name*: Geben Sie den Namen Ihres Onlineshops ein.
- *Main activity*: Wählen Sie Ihren Tätigkeitsbereich aus den Vorschlägen im Drop-down-Menü.
- *Country*: Wählen Sie Ihr Land aus.
- *Enable SSL*: Haken Sie **Yes** an, um das Umschreiben von URLs auf "https://" zu erzwingen. Sie müssen dazu über ein SSL-Zertifikat für Ihr Hosting oder Ihren Domainnamen verfügen. Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung zur [Verwaltung eines SSL-Zertifikats auf Ihrem OVHcloud Webhosting](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/).

**Your Account**

- *First name*: Geben Sie Ihren Vornamen ein.
- *Last name*: Geben Sie Ihren Namen ein.
- *E-Mail address*: Geben Sie Ihre E-Mail-Adresse ein.
- *Shop password*: Legen Sie ein Passwort fest, um sich mit Ihrem Verwaltungsbereich (Backend) zu verbinden.
- *Re-type to confirm*: Geben Sie das Passwort erneut ein.

Überprüfen Sie die eingegebenen Daten und klicken Sie dann auf `Next`{.action}.

### 2.4 Standardinhalte für Ihren Webshop installieren

PrestaShop bietet Ihnen die Möglichkeit, Inhalte und Module für Ihre E-Commerce-Seite zu installieren:

![PrestaShop installation step 5](images/Prestashop-install-store-content-5.png){.thumbnail}

Treffen Sie Ihre Wahl und klicken Sie auf `Next`{.action}.

#### 2.5 PrestaShop mit Ihrer OVHcloud Datenbank verbinden

![PrestaShop installation step 6](images/Prestashop-install-db-config-6.png){.thumbnail}

Halten Sie die Zugangsdaten für Ihre Datenbank bereit. (Sie können bei Bedarf **Schritt 1.4** des Tutorials zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/) verwenden).

Geben Sie die angeforderten Informationen zur Datenbank ein:

- *Database server address*: Geben Sie den Servernamen Ihrer Datenbank ein, zu finden in der Installationsmail und einsehbar in Ihrem OVHcloud Kundencenter.

> [!primary]
> 
> - Der Servername einer Datenbank, die in einem Webhosting inklusive ist, hat regulär folgendes Format: `DatenbankName.mysql.db`. 
>
> - Der Servername einer Web Cloud Databases Datenbank leitet sich von Ihrer OVHcloud Kundenkennung ab und hat folgendes Format: `aa00000-XXX.eu.clouddb.ovh.net` wobei **"aa00000"** für Ihre OVHcloud Kundenkennung (ohne **"-ovh"**) und **XXX** für die Referenz Ihrer Web Cloud Databases Instanz steht.
>

- *Database name*: Dieser Name wurde bei der Erstellung der Datenbank im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) definiert.

- *Database login*: Dieser Name ist identisch mit dem Datenbanknamen, wenn Sie eine im Webhosting inkludierte Datenbank verwenden. Für Datenbanken, die mit Web Cloud Databases erstellt wurden, lesen Sie die Informationen in **Schritt 1.4** des Tutorials zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).

- *Database password*: Das Passwort wurde Ihnen bei der Erstellung der Datenbank per E-Mail gesendet. Möglicherweise haben Sie es inzwischen geändert.

- *Tables prefix*: Wenn die Installation mit einer neuen Datenbank erfolgt, geben Sie ein Präfix Ihrer Wahl ein. Wenn Sie eine Datenbank eingeben, die bereits von einer anderen Website verwendet wird, lesen Sie die Informationen in **Schritt 1.4** des Tutorials zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/), um kein in Ihrer Datenbank bereits verwendetes Tabellenpräfix einzugeben.

- *Drop existing tables*: **Haken Sie diese Option nicht an, wenn Sie Ihre Datenbank bereits mit einer anderen Website verwenden**.

>[!alert]
>
> Wenn Sie **Drop existing tables** anhaken, werden alle bereits in Ihrer Datenbank vorhandenen Tabellen gelöscht.
>

Klicken Sie auf `Test your database connection now!`{.action}, um die verwendeten Einstellungen zu überprüfen:

![PrestaShop installation step 6-1](images/Prestashop-install-db-config-6-1.png){.thumbnail}

Wenn die Nachricht "Your database is connected" erscheint, klicken Sie auf `Next`{.action}. Wenn nicht, überprüfen Sie die eingegebenen Daten und korrigieren Sie ggf. die Angaben. Bei Bedarf lesen Sie die Informationen in **Schritt 1.4** des Tutorials zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).

#### 2.6 Installation von PrestaShop abschließen

Im letzten Schritt erhalten Sie eine Zusammenfassung der soeben durchgeführten Installation:

![PrestaShop installation step 7](images/Prestashop-install-resume-7.png){.thumbnail}

Speichern Sie Ihre Login-Daten zu PrestaShop, bevor Sie die Seite verlassen.

>[!warning]
>
> **Aus Sicherheitsgründen wird empfohlen, die Installationsdatei in Ihrem FTP-Bereich zu löschen.**
>
> Um diese Aktion durchzuführen, folgen Sie unserer Anleitung ["Mit dem Speicherplatz eines Webhostings verbinden"](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) und nutzen Sie das [PrestaShop Forum](https://www.prestashop.com/forums/){.external}, um sicherzustellen, dass die richtigen Dateien gelöscht werden.
>

> [!success]
>
> Sie können nun mit der Erstellung des Inhalts Ihrer PrestaShop Website beginnen!
>

## Weiterführende Informationen <a name="go-further"></a>

[offizielle PrestaShop Website](https://prestashop.com)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
