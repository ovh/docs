---
title: "Tutorial - Manuelle Installation von Drupal"
excerpt: "Erfahren Sie hier, wie Sie Ihr Drupal CMS eigenständig installieren"
slug: cms_manuelle_installation_von_drupal
section: CMS
order: 06
updated: 2023-04-03
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>


**Letzte Aktualisierung am 03.04.2023**

## Ziel

Dieses Tutorial hilft Ihnen Schritt für Schritt bei der manuellen Installation des Content Management System (CMS) Drupal.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) oder den [Herausgeber von Drupal](https://www.drupal.org/support){.external} zu kontaktieren. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

> [!success]
>
> Um Drupal **automatisch** in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu installieren, lesen Sie unsere Anleitung zur [Installation Ihrer Website mit 1-Klick-Modulen](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/).
>
> Um ein **anderes CMS manuell** zu installieren (Joomla!, WordPress, PrestaShop), lesen Sie unsere Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).
>


**Dieses Tutorial erklärt, wie Sie Ihr Drupal CMS manuell installieren.**
 
## Voraussetzungen

- Sie verfügen über ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Sie verfügen über einen [Domainnamen](https://www.ovhcloud.com/de/domains/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
  
## In der praktischen Anwendung

### Schritt 1: Installation vorbereiten <a name="step1"></a>

Um das CMS **Drupal** auf Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) zu installieren sind einige Vorbereitungen erforderlich.

Führen Sie zunächst **alle Schritte** in unserer Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/) aus, bevor Sie mit Schritt 2 fortfahren.

### Schritt 2: Manuelle Installation abschließen <a name="step2"></a>

> [!success]
>
> Bevor Sie mit der Installation fortfahren, leeren Sie den Cache Ihres Browsers, um Fehler zu vermeiden.
>

#### 2.1 Drupal im Browser öffnen

Geben Sie Ihren Domainnamen in die Suchleiste Ihres Webbrowsers ein.

Wenn die Quelldateien korrekt im Wurzelverzeichnis platziert wurden, erscheint die Seite zur Auswahl der Sprache für Drupal:

![Drupal installation step 1](images/Drupal-install-language-1.png){.thumbnail}

Wählen Sie die Sprache der Website aus und klicken Sie auf `Save and Continue`{.action}.

#### 2.2 Installationstyp auswählen

Drupal bietet mehrere Installationsebenen an:

- Standardversion (empfohlen)
- Minimale Version
- Präsentationsversion

![Drupal installation step 2](images/Drupal-install-profil-2.png){.thumbnail}

Wir empfehlen, die **Standard**-Installation durchzuführen. Klicken Sie dann auf `Save and Continue`{.action}.

#### 2.3 Drupal mit Ihrer Datenbank verbinden

Geben Sie die angeforderten Informationen zur Datenbank ein:

![Drupal installation step 3](images/Drupal-install-db-config-3.png){.thumbnail}

Halten Sie die Zugangsdaten für Ihre Datenbank bereit. (Sie können bei Bedarf **Schritt 1.4** des Tutorials zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/) verwenden).

- *Database type*: Wählen Sie aus den angebotenen Optionen den Typ Ihrer Datenbank aus.

- *Database name*: Dieser Name wurde bei der Erstellung der Datenbank im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) definiert.

- *Database username*: Dieser ist identisch mit dem Datenbanknamen, wenn Sie eine im Webhosting inkludierte Datenbank verwenden. Für Datenbanken, die mit Web Cloud Databases erstellt wurden, lesen Sie die Informationen in **Schritt 1.4** des Tutorials zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).

- *Database password*: Es wurde Ihnen bei der Erstellung der Datenbank per E-Mail gesendet. Möglicherweise haben Sie es inzwischen geändert.

Klicken Sie auf `Advanced Options`{.action}, um den Rest des Menüs zu finden.

- *Host*: Der Servername Ihrer Datenbank, ebenfalls in der Installationsmail enthalten und einsehbar in Ihrem OVHcloud Kundencenter.

> [!primary]
> 
> - Der Servername einer Datenbank, die in einem Webhosting inklusive ist, hat regulär folgendes Format: `DatenbankName.mysql.db`. 
>
> - Der Servername einer Web Cloud Databases Datenbank leitet sich von Ihrer OVHcloud Kundenkennung ab und hat folgendes Format: `aa00000-XXX.eu.clouddb.ovh.net` wobei **"aa00000"** für Ihre OVHcloud Kundenkennung (ohne **"-ovh"**) und **XXX** für die Referenz Ihrer Web Cloud Databases Instanz steht.
>

- *Port number*: Wenn Sie eine Datenbank verwenden, die in einem Webhosting inklusive ist, belassen Sie den Port bei **3306**. Wenn Sie Web Cloud Databases verwenden, lesen Sie die Informationen in **Schritt 1.4** des Tutorials zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/), um die richtige Port-Nummer abzurufen.

- *Table name prefix*: Wenn die Installation mit einer neuen Datenbank erfolgt, geben Sie ein Präfix Ihrer Wahl ein. Wenn Sie eine Datenbank eingeben, die bereits von einer anderen Website verwendet wird, lesen Sie die Informationen in **Schritt 1.4** des Tutorials zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/), um kein in Ihrer Datenbank bereits verwendetes Tabellenpräfix einzugeben.

Klicken Sie auf `Save and Continue`{.action}.

Wenn alles korrekt eingegeben wurde, startet die Drupal-Installation:

![Drupal installation step 4](images/Drupal-install-4.png){.thumbnail}

#### 2.4 Die Informationen der Website und den Administrator-Zugang konfigurieren

Sobald der vorherige Schritt abgeschlossen ist, wird folgende Seite angezeigt:

![Drupal installation step 5-1](images/Drupal-install-configure-site-5-1.png){.thumbnail}

Geben Sie die angeforderten Informationen ein:

- *Site name*: Geben Sie den Namen Ihrer zukünftigen Drupal-Website ein.

- *Site email address*: Geben Sie eine gültige E-Mail-Adresse an, die von Ihrer Drupal-Seite verwendet wird.

- *Username*: Legen Sie die Administrator-Kennung fest, um sich mit Ihrem Drupal-Verwaltungsbereich (Backend) zu verbinden.

- *Password* und *Confirm password*: Legen Sie ein Passwort für Ihre Kennung fest, um sich mit Ihrem Drupal-Verwaltungsbereich (Backend) zu verbinden.

Gehen Sie dann zum Ende der Seite:

![Drupal installation step 5-1](images/Drupal-install-configure-site-5-2.png){.thumbnail}

- *Email address*: Geben Sie Ihre E-Mail-Adresse ein. Nutzen Sie idealerweise die gleiche Adresse wie zuvor für *Site email address*.

- *Default country*: Wählen Sie das Land, von dem aus Ihre Website am häufigsten aufgerufen wird.

- *Default time zone*: Wählen Sie die Standardzeitzone für Ihre Website.

Klicken Sie auf `Save and Continue`{.action}.

Wenn alle Eingaben korrekt waren, erscheint folgende Seite:

![Drupal installation step 6](images/Drupal-install-ending-6.png){.thumbnail}

> [!success]
>
> Die Installation von Drupal ist abgeschlossen, Sie können nun mit der Erstellung des Inhalts Ihrer Drupal Website beginnen!
>

## Weiterführende Informationen <a name="go-further"></a>

[Offizielle Website Drupal](https://www.drupal.org/){.external}
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
