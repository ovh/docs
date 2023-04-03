---
title: "Tutorial - Manuelle Installation von PrestaShop"
slug: cms_manually_install_prestashop
excerpt: "Diese Anleitung erklärt, Ihr PrestaShop CMS manuell installieren"
section: CMS
order: 07
updated: 2023-04-03
---

**Letzte Aktualisierung am 03.04.2023**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Hier finden Sie alle Elemente, um das Content Management System (CMS) PrestaShop in wenigen Schritten manuell zu installieren.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) oder [Herausgeber des CMS PrestaShop](https://www.prestashop.com/en/support){.external} zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

> [!success]
>
> Um PrestaShop **automatisch** in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu installieren, lesen Sie unsere Anleitung zur [Installation eines "mit einem Klick" Moduls](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/).
>
> Um ein **anderes CMS manuell zu installieren** (WordPress, Joomla!, Drupal) lesen Sie unsere Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).
>

**Diese Anleitung erklärt, wie Sie Ihr PrestaShop CMS manuell installieren.**
 
## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Über eine [Domainname](https://www.ovhcloud.com/de/domains/)
- Sie sind im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt
  
## In der praktischen Anwendung

### Schritt 1 - Installation vorbereiten <a name="step1"></a>

Um das CMS **PrestaShop** auf Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebot zu installieren sind einige Vorbereitungen erforderlich.

Folgen Sie der **Alle Schritte** in unserer Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/), bevor Sie mit Schritt 2 fortfahren.

### Schritt 2 - manuelle Installation abschließen <a name="step2"></a>

> [!success]
>
> Bevor Sie mit der Installation fortfahren, leeren Sie den Cache Ihres Browsers, um Fehler zu vermeiden.
>

Wenn Sie die neueste verfügbare PrestaShop Version nicht heruntergeladen haben, erscheint folgende Seite:

![PrestaShop installation step 1](images/Prestashop-install-update-version.png){.thumbnail}

Klicken Sie auf `No thanks`{.action}, wenn Sie die soeben heruntergeladene PrestaShop-Version oder die aktuelle Version des CMS verwenden möchten: `Yes please!`{.action}.

#### 2.1 - Mit Ihrem Browser auf Ihre PrestaShop Seite gehen

Geben Sie Ihre Domain in die Suchleiste Ihres Webbrowsers ein.

Wenn die Quelldateien Ihres PrestaShop korrekt in Ihrem Wurzelverzeichnis platziert wurden, erscheint die Seite von PrestaShop, auf der die Sprache ausgewählt werden kann:

![PrestaShop installation step 2](images/Prestashop-install-select-language.png){.thumbnail}

Wählen Sie die Sprache der Website aus und klicken Sie auf `Next`{.action}.

#### 2.2 - Nutzungsbedingungen bestätigen

Lesen Sie die Nutzungsbedingungen, setzen Sie einen Haken in den Kästchen `I agree to the above terms and conditions`{.action} und klicken Sie dann auf `Next`{.action}.

![PrestaShop installation step 3](images/Prestashop-install-licence-agreement-3.png){.thumbnail}

#### 2.3 - Die Informationen Ihres Webshops eingeben

PrestaShop wird Sie um eine Reihe von Informationen zu Ihrem zukünftigen Onlineshop bitten:

![PrestaShop installation step 4](images/Prestashop-install-store-infos-4.png){.thumbnail}

**Information about your Store**

- *Shop name*: Geben Sie den Namen Ihres Onlineshops ein
- *Main activity*: Wählen Sie Ihren Tätigkeitsbereich aus den Vorschlägen im Drop-down-Menü
- *Country*: Wählen Sie Ihr Land aus
- *Enable SSL*: Setzen Sie ein Häkchen **Yes**, um das Schreiben Ihrer URL auf "https://" zu erzwingen. Sie müssen zunächst über ein SSL-Zertifikat auf Ihrem Hosting oder Ihrer Domain verfügen. Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung zu [Verwaltung eines SSL-Zertifikats auf Ihrem OVHcloud Webhosting](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/).

**Your Account**

- *First name*: Geben Sie Ihren Vornamen an
- *Last name*: Geben Sie Ihren Namen an
- *E-Mail Address*: Geben Sie Ihre E-Mail-Adresse an
- *Shop password*: Wählen Sie ein Passwort aus, um zum Verwaltungsbereich Ihres Webshops (Backoffice) zu gelangen
- *Re-type to confirm*: Geben Sie das Passwort erneut ein

Überprüfen Sie die eingegebenen Informationen und klicken Sie dann auf `Next`{.action}.

### 2.4 - Standardinhalte für Ihren Webshop installieren

PrestaShop bietet Ihnen die Möglichkeit, Inhalte und Module für Ihre zukünftige E-Commerce-Seite zu installieren:

![PrestaShop installation step 5](images/Prestashop-install-store-content-5.png){.thumbnail}

Treffen Sie Ihre Wahl und klicken Sie auf `Next`{.action}.

#### 2.5 - Ihren PrestaShop mit Ihrer OVHcloud Datenbank verbinden

![PrestaShop installation step 6](images/Prestashop-install-db-config-6.png){.thumbnail}

Loggen Sie sich für Ihre Datenbank ein (Sie können bei Bedarf die Vorgehensweise in **Schritt 1.4** der Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/) einsehen).

Geben Sie die angeforderten Informationen zur Datenbank ein:

- *Database server address*: Geben Sie den Namen des Servers Ihrer Datenbank ein, der sich in der Installations-E-Mail oder in Ihrem OVHcloud Kundencenter befindet.

> [!primary]
> 
> - Der Name des Servers einer Datenbank, die bei Ihrem Webhosting Angebot enthalten ist, hat im Allgemeinen folgende Form: `nameOfYourDatabase.mysql.db`. 
>
> - Der Name des Servers einer Web Cloud Databases Datenbank beginnt mit Ihrer OVHcloud Kundenkennung und hat folgende Form: `aa00000-XXX.eu.clouddb.ovh.net`, **"aa00000"** entspricht Ihrer OVHcloud Kundenkennung ohne das **"-ovh"** und die **"X"** müssen durch den Rest der Referenz Ihres Web Cloud Databases ersetzt werden.
>

- *Database name*: Dieser Name wurde bei der Erstellung der Datenbank im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) definiert.

- *Database login*: Der Name der Datenbank ist identisch, wenn Sie eine Datenbank verwenden, die in Ihrem Webhosting enthalten ist.
Für Datenbanken, die auf einem Cloud Databases Web-Dienst erstellt werden, lesen Sie die Informationen in Schritt 1.4** unserer Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).

- *Database Password*: Sie selbst haben es bei der Erstellung Ihrer Datenbank festgelegt. Es ist möglich, dass Sie es inzwischen geändert haben.

- *Tables prefix*: Wenn die Installation mit einer ganz neuen Datenbank erfolgt, geben Sie das "Präfix"Ihrer Wahl ein. Wenn Sie eine Datenbank verwenden, die bereits von einer anderen Website verwendet wird, lesen Sie bitte Schritt 1.4** unserer Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/), um kein in Ihrer Datenbank bereits verwendetes Tabellenpräfix einzugeben.

- *Drop existing tables*: **Entfernen Sie dieses Feld, wenn Sie Ihre Datenbank bereits mit einer anderen Website verwenden**.

>[!alert]
>
> Wenn Sie das Kästchen **Drop existing tables** löschen, werden alle Tabellen, die bereits in Ihrer Datenbank vorhanden sind, gelöscht.
>

Klicken Sie auf `Test your database connection now!`{.action}, um die eingegebenen Einstellungen zu überprüfen:

![PrestaShop installation step 6-1](images/Prestashop-install-db-config-6-1.png){.thumbnail}

Wenn die Nachricht "Your database is connected" erscheint, klicken Sie auf `Next`{.action}. Wenn nicht, überprüfen Sie die eingegebenen Einstellungen, bis die Verbindung funktioniert. Wenn nötig, lesen Sie die Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/) in **Schritt 1.4**.

#### 2.6 - Die Installation von PrestaShop beenden

Im letzten Schritt erhalten Sie eine Zusammenfassung der soeben durchgeführten Installation:

![PrestaShop installation step 7](images/Prestashop-install-resume-7.png){.thumbnail}

Rufen Sie die Login-Daten Ihres PrestaShop ab, bevor Sie die Seite verlassen.

>[!warning]
>
> **Aus Sicherheitsgründen wird empfohlen, die Installationsdatei auf Ihrem FTP-Bereich zu löschen.**
>
> Um diese Aktion durchzuführen, lesen Sie unsere Anleitung ["wie Sie sich mit dem FTP-Speicherplatz Ihres OVHcloud Webhostings verbinden"](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) und gehen Sie auf das [PrestaShop Forum](https://www.prestashop.com/forums/){.external}, um sicherzustellen, dass die richtigen Dateien gelöscht werden.
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