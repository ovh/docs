---
title: "Tutorial - Manuelle Installation von Drupal"
excerpt: "Diese Anleitung erklärt, wie Sie Ihr Drupal CMS manuell installieren"
slug: cms_manuelle_installation_von_drupal
section: CMS
order: 06
updated: 2023-04-03
---

**Letzte Aktualisierung am 03.04.2023**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Hier finden Sie alle Elemente, um das Content Management System (CMS) Drupal in wenigen Schritten manuell zu installieren.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) oder [Herausgeber des CMS Drupal](https://www.drupal.org/support){.external} zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

> [!success]
>
> Um Drupal **automatisch** in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu installieren, lesen Sie unsere Anleitung zur [Installation eines "mit einem Klick" Moduls](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/).
>
> Um ein **anderes CMS manuell zu installieren** (WordPress, Joomla!, PrestaShop) lesen Sie unsere Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).
>

**Diese Anleitung erklärt, wie Sie Ihr Drupal CMS manuell installieren.**
 
## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Über eine [Domainname](https://www.ovhcloud.com/de/domains/)
- Sie sind im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt
  
## In der praktischen Anwendung

### Schritt 1 - Installation vorbereiten <a name="step1"></a>

Um das CMS **Drupal** auf Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebot zu installieren sind einige Vorbereitungen erforderlich.

Folgen Sie der **Alle Schritte** in unserer Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/), bevor Sie mit Schritt 2 fortfahren.

### Schritt 2 - manuelle Installation abschließen <a name="step2"></a>

> [!success]
>
> Bevor Sie mit der Installation fortfahren, leeren Sie den Cache Ihres Browsers, um Fehler zu vermeiden.
>

#### 2.1 - Mit Ihrem Browser auf Ihre Drupal Seite gehen

Geben Sie Ihren Domainnamen in die Suchleiste Ihres Webbrowsers ein.

Wenn die Drupal-Quelldateien korrekt in Ihrem Wurzelverzeichnis platziert wurden, erscheint die Seite zur Auswahl der Sprache für Drupal:

![Drupal installation step 1](images/Drupal-install-language-1.png){.thumbnail}

Wählen Sie die Sprache der Website aus und klicken Sie auf `Save and Continue`{.action}.

#### 2.2 - Installationstyp auswählen

Drupal bietet mehrere Installationsebenen an:

- eine Standardversion (empfohlen), 
- eine minimale Version
- eine Präsentationsversion

![Drupal installation step 2](images/Drupal-install-profil-2.png){.thumbnail}

Wir empfehlen Ihnen, eine Installation durchzuführen **Standard**. Klicken Sie dann auf `Save and Continue`{.action}.

#### 2.3 - Drupal und Ihre Datenbank verbinden

Geben Sie die angeforderten Informationen zur Datenbank ein:

![Drupal installation step 3](images/Drupal-install-db-config-3.png){.thumbnail}

Loggen Sie sich für Ihre Datenbank ein (Sie können bei Bedarf die Vorgehensweise in **Schritt 1.4** der Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/) einsehen).

- *Database type*: wählen Sie aus den angebotenen Optionen den Typ Ihrer Datenbank aus.

- *Database name*: Dieser Name wurde bei der Erstellung der Datenbank im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) definiert.

- *Database username*: Der Name der Datenbank ist identisch, wenn Sie eine Datenbank verwenden, die in Ihrem Webhosting enthalten ist. Für Datenbanken, die auf einem Cloud Databases Web-Dienst erstellt wurden, lesen Sie die Informationen in Schritt 1.4** des Tutorials über die [manuelle Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).

- *Database Password*: Sie selbst haben es bei der Erstellung Ihrer Datenbank festgelegt. Es ist möglich, dass Sie es inzwischen geändert haben.

Klicken Sie auf `Advanced Options`{.action}, um den Rest des Menüs zu finden.

- *Host*: Geben Sie den Namen des Servers Ihrer Datenbank ein, der sich in der Installations-E-Mail oder in Ihrem OVHcloud Kundencenter befindet. 

> [!primary]
> 
> - Der Name des Servers einer Datenbank, die bei Ihrem Webhosting Angebot enthalten ist, hat im Allgemeinen folgende Form: `nameOfYourDatabase.mysql.db`. 
>
> - Der Name des Servers einer Web Cloud Databases Datenbank beginnt mit Ihrer OVHcloud Kundenkennung und hat folgende Form: `aa00000-XXX.eu.clouddb.ovh.net`, **"aa00000"** entspricht Ihrer OVHcloud Kundenkennung ohne das **"-ovh"** und die **"X"** müssen durch den Rest der Referenz Ihres Web Cloud Databases ersetzt werden.
>

- *Port number*: Wenn Sie eine Datenbank verwenden, die bei Ihrem OVHcloud Hosting inklusive ist, lassen Sie diese standardmäßig **3306**. Wenn Sie einen *Cloud Databases* Dienst verwenden, lesen Sie die Anleitung ["Manuelle Installation eines CMS"](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/) in **Schritt 1.4**, um die richtige Port-Nummer abzurufen.

- *Table name prefix*: Wenn die Installation mit einer ganz neuen Datenbank erfolgt, geben Sie das "Präfix"Ihrer Wahl ein. Wenn Sie eine Datenbank verwenden, die bereits von einer anderen Website verwendet wird, lesen Sie bitte die Anleitung in **Schritt 1.4** auf der [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/), um kein in Ihrer Datenbank bereits verwendetes Tabellenpräfix einzugeben.

Klicken Sie auf `Save and Continue`{.action}.

Wenn alles korrekt durchgeführt wurde startet die Drupal Installation:

![Drupal installation step 4](images/Drupal-install-4.png){.thumbnail}

#### 2.4 - Die Informationen der Website und den "Administrator" Zugang konfigurieren

Sobald der vorherige Schritt abgeschlossen ist, wird folgende Seite angezeigt:

![Drupal installation step 5-1](images/Drupal-install-configure-site-5-1.png){.thumbnail}

Geben Sie die angeforderten Informationen ein:

- *Site name*: Geben Sie den Namen Ihrer zukünftigen Drupal-Website ein.

- *Site email address*: Geben Sie eine gültige E-Mail-Adresse an, die von Ihrer Drupal-Seite verwendet wird.

- *Username*: Legen Sie einen Benutzernamen fest, um sich mit Ihrem Drupal Verwaltungsbereich (Back Office) zu verbinden.

- *Password* und *Confirm password*: Legen Sie das Passwort fest, das Ihrem Benutzernamen zugewiesen werden soll, um auf Ihr *Backup* Drupal zuzugreifen.

Gehen Sie dann zum Ende der Seite:

![Drupal installation step 5-1](images/Drupal-install-configure-site-5-2.png){.thumbnail}

- *Email address*: Geben Sie Ihre E-Mail-Adresse an. Geben Sie idealerweise die gleiche Adresse ein, die Sie im Formular * E-Mail-Adresse der Website* ausgewählt haben.

- *Default country*: Wählen Sie das Land aus, in dem Ihre Website am häufigsten aufgerufen wird.

- *Default time zone*: Wählen Sie die Standardzeitzone für Ihre Website.

Klicken Sie auf `Save and Continue`{.action}.

Wenn alles gut gelaufen ist, erscheint folgende Seite:

![Drupal installation step 6](images/Drupal-install-ending-6.png){.thumbnail}

> [!success]
>
> Die Installation von Drupal ist abgeschlossen, Sie können nun mit der Erstellung des Inhalts Ihrer Drupal Website beginnen!
>

## Weiterführende Informationen <a name="go-further"></a>

[offizielle Website Drupal](https://www.drupal.org/){.external}
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.