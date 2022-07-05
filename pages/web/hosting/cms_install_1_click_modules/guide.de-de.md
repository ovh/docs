---
title: Installation Ihrer Website mit 1-Klick-Modulen
excerpt: So installieren Sie Ihre Website mithilfe unserer 1-Klick-Module
slug: webhosting_installation_von_webhosting-modulen
section: 'CMS'
order: 1
---

**Stand 03.02.2022**

## Einleitung

1-Klick-Module ermöglichen die einfache und schnelle Installation einer Website, auch ohne technische Vorkenntnisse. Sie verwenden die gängigsten CMS: WordPress, PrestaShop, Drupal und Joomla!.

**In dieser Anleitung erfahren Sie, wie Sie Ihre Website mithilfe unserer 1-Klick-Module installieren können.**

## Voraussetzungen

- Sie besitzen ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebot.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://ovh.com/auth/?action=gotomanager) eingeloggt.
- Das Verzeichnis, in dem Ihr Modul installiert wird, enthält keine anderen Dateien.
- Die Domain (und gegebenenfalls die Subdomain) Ihrer Website ist als Multisite registriert.

## Beschreibung

### Die Wahl des richtigen CMS

Ein CMS (Content Management System) ermöglicht es Ihnen, eine Website über ein einfaches Interface einzurichten. Es gibt verschiedene Arten von CMS, die von Ihren individuellen Projekten abhängen. So können Sie auf einer gebrauchsfertigen Websitestruktur aufbauen und diese nach Belieben anpassen (Themes, Texte usw.).

Bei OVHcloud stehen Ihnen 4 CMS als 1-Klick-Module zur Verfügung. Wenn Sie diese Lösung verwenden möchten, wählen Sie eines dieser CMS. Wenn Sie Ihre Wahl bereits getroffen haben, können Sie den nächsten Abschnitt überspringen und das Tutorial fortsetzen. Sollten Sie noch auf der Suche nach dem richtigen CMS sein, kann Ihnen dieser [CMS Vergleich](https://www.ovhcloud.com/de/web-hosting/uc-cms-comparison/) bei Ihrer Auswahl helfen.

Wenn Sie ein CMS installieren möchten, das nicht als OVHcloud 1-Klick-Modul angeboten wird, können Sie es manuell auf Ihrem Hosting installieren, sofern dieses CMS mit Ihrem Webhosting Angebot kompatibel ist (die Details zu unseren Angeboten finden Sie [hier](https://www.ovhcloud.com/de/web-hosting/)).

![CMS-Logos](images/CMS_logo.png){.thumbnail}

### Zugang zur Verwaltung der 1-Klick-Module

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und klicken Sie im Bereich `Web Cloud`{.action} auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus.

Hier können Sie die bereits installierten 1-Klick-Module einsehen und verwalten oder neue Module installieren.

![Zugang zur Verwaltung der 1-Klick-Module](images/access_to_the_1_click_modules_section.png){.thumbnail}

### Modul hinzufügen

Um ein neues 1-Klick-Modul zu installieren, klicken Sie auf den Button `Ein Modul hinzufügen`{.action}.

Im angezeigten Fenster wählen Sie zunächst das gewünschte CMS und anschließend die Domain aus, auf der Sie Ihre Website installieren möchten:

![Modulauswahl](images/add_a_module.png){.thumbnail}

Wenn Sie die gewünschte Domain nicht in der Liste finden, klicken Sie auf den Tab `Multisite`{.action}, um sie hinzuzufügen, und versuchen Sie anschließend erneut, ein Modul hinzuzufügen.

Für weitere Informationen, lesen Sie die Anleitung [Mehrere Websites auf einem Webhosting hosten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/){.external}.

Nachdem Sie die gewünschte Domain ausgewählt haben, haben Sie die Wahl zwischen einer einfachen oder der erweiterten Installation „im Experten-Modus“:

- Bei der einfachen Installation (Standardeinstellung) übernehmen wir die Installation des CMS und schicken Ihnen anschließend die Benutzerdaten zur Verwaltung Ihres Moduls zu. Dies ist die einfachste und schnellste Methode, um ein Modul zu installieren.
- Bei der Installation im Experten-Modus können Sie die bei der Installation des CMS angewandte Konfiguration nach Wunsch anpassen. Geben Sie hierzu die Informationen ein, die für das korrekte Funktionieren des CMS auf Ihrer Datenbank notwendig sind: Login-Daten, Installationsverzeichnis, Sprache, Administrator-ID usw.


#### Einfache Installation eines Moduls

Um diese Installation durchzuführen, vergewissern Sie sich, dass im Feld `Installation im Experten-Modus`{.action} kein Haken gesetzt ist, und klicken Sie anschließend auf `Installieren`{.action}.

> [!warning]
>
> Um die Installation durchführen zu können, benötigen Sie eine Datenbank, und das Verzeichnis, in dem Sie Ihr Modul installieren, muss leer sein.
> 

![Einfache Installation eines Moduls](images/choose_installation.png){.thumbnail}

Sobald die Installation abgeschlossen ist, erhalten Sie eine E-Mail mit den notwendigen Informationen für die Verbindung zum Administrator-Interface des CMS. Loggen Sie sich dann in dieses ein, um Ihre Website zu personalisieren.


#### Erweiterte Installation eines Moduls

Um die erweiterte Installation durchzuführen, vergewissern Sie sich, dass im Feld `Installation im Experten-Modus`{.action} ein Haken gesetzt ist, und klicken Sie anschließend auf `Weiter`{.action}:

![Erweiterte Installation eines Moduls](images/advanced_installation.png){.thumbnail}

##### Datenbank auswählen

Geben Sie nun die Verbindungsinformationen zu Ihrer Datenbank ein. Hierbei haben Sie mehrere Möglichkeiten:

- Die Datenbank ist bereits auf Ihrem Webhosting eingerichtet: Wählen Sie die Datenbank in der Liste aus und geben Sie die erforderlichen Informationen ein.
- Die Datenbank ist noch nicht auf Ihrem Webhosting eingerichtet: Folgen Sie den Anweisungen, um die Datenbank zu erstellen, und führen Sie den Vorgang anschließend erneut durch.
- Die Datenbank ist auf Ihrer CloudDB Instanz eingerichtet: Klicken Sie in der Liste auf die Zeile `Datenbank außerhalb Ihres Webhostings`{.action} und geben Sie die erforderlichen Informationen ein. Die Instanz und das Webhosting müssen im selben Rechenzentrum gehostet sein.
- Die Datenbank ist auf einem anderen OVHcloud Webhosting eingerichtet: Klicken Sie in der Liste auf die Zeile `Datenbank außerhalb Ihres Webhostings`{.action} und geben Sie die erforderlichen Informationen ein. Die Datenbank und das Webhosting müssen im selben Rechenzentrum gehostet sein.

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}.

> [!warning]
>
> Wenn die von Ihnen eingegebenen Daten nicht korrekt sind, kann die Installation nicht abgeschlossen werden. Um dies zu vermeiden, überprüfen Sie zunächst die Verbindung zu Ihrer Datenbank.
> 

![Datenbank für die erweiterte Installation](images/advanced_installation_database.png){.thumbnail}

##### Konfiguration des Moduls

Geben Sie nun die folgenden Informationen zur Konfiguration des Moduls ein:

- *Name oder E-Mail-Adresse des Administrators:* die Kennung, mit der Sie sich zur Verwaltung Ihres CMS einloggen.
- *Passwort:* das Passwort, mit dem Sie sich im Verwaltungsinterface Ihres CMS einloggen.
- *Domain:* die Domain, auf der Sie Ihre Website installieren.
Für weitere Informationen, lesen Sie die Anleitung [Mehrere Websites auf einem Webhosting hosten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/){.external}.
- *Sprache:* die Sprache, in der das CMS installiert wird.
- *Installationspfad:* wird bei der Domain-Auswahl automatisch angegeben. Sie haben die Möglichkeit, den Pfad durch die Angabe von Unterverzeichnissen zu ergänzen.

Wenn Sie diese Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}.

> [!warning]
>
> Im angegebenen Installationspfad dürfen sich keinerlei Inhalte befinden, damit die Installation abgeschlossen werden kann.
> 

![Modulkonfiguration für die erweiterte Installation](images/advanced_installation_configuration.png){.thumbnail}

##### Installation bestätigen

Im letzten Schritt der erweiterten Installation überprüfen Sie die eingegebenen Informationen und klicken dann auf `Bestätigen`{.action}:

![Bestätigung der Installation im Experten-Modus](images/advanced_installation_summary.png){.thumbnail}

### Ihre Website personalisieren

Sie erhalten eine E-Mail, in der die korrekte Installation des CMS-Moduls bestätigt wird und die Sie dazu auffordert, sich im Verwaltungsinterface Ihres CMS einzuloggen. Anschließend können Sie das Theme Ihrer Website ändern und Ihre ersten Inhalte veröffentlichen.

Wenn Sie Hilfe zu den Funktionen Ihrer Website benötigen, gehen Sie auf die offizielle Website des CMS-Herausgebers. Dort finden Sie zusätzliche Dokumentation zur Einrichtung Ihres Projekts.

|CMS|Dokumentation|
|---|---|
|WordPress|[First steps with WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}|
|PrestaShop|[Getting started with PrestaShop](http://doc.prestashop.com/display/PS17/Getting+Started){.external}|
|Joomla!|[Getting started with Joomla!](https://www.joomla.org/about-joomla/getting-started.html){.external}|
|Drupal|[Understanding Drupal](https://www.drupal.org/docs/7/understanding-drupal/overview){.external}|

## Weiterführende Informationen

[Finden Sie das richtige CMS für Ihre Website](https://www.ovhcloud.com/de/web-hosting/uc-cms-comparison/){.external}

[Mehrere Websites auf einem Webhosting hosten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/){.external}

[Verwaltung einer Datenbank in Ihrem Webhosting](https://docs.ovh.com/de/hosting/verwaltung-einer-datenbank-in-ihrem-webhosting/){.external}

Entdecken Sie unsere [CloudDB Angebote](https://www.ovh.de/cloud/cloud-databases/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
