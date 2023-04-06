---
title: "Installation Ihrer Website mit 1-Klick-Modulen (CMS)"
excerpt: "Erfahren Sie hier, wie Sie Ihre Website mithilfe unserer 1-Klick-Module installieren"
slug: webhosting_installation_von_webhosting-modulen
section: CMS
order: 01
updated: 2023-03-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>


**Letzte Aktualisierung am 28.03.2023**

## Ziel 

1-Klick-Module ermöglichen die einfache und schnelle Installation einer Website, auch ohne technische Vorkenntnisse. Es handelt sich hierbei um ein **C**ontent **M**anagement **S**ystem (**CMS**). OVHcloud bietet einen vereinfachten Installationsprozess der populärsten CMS an: *WordPress*, *Joomla!*, *Drupal* und *PrestaShop*.

**Diese Anleitung erklärt, wie Sie Ihre Website mithilfe von 1-Klick-Modulen installieren.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZrYmmPbMl4I?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) mit mindestens einer Datenbank.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verwenden eine [kompatible PHP-Version](https://docs.ovh.com/de/hosting/konfiguration_von_php_fur_ein_ovh_webhosting_2014/) auf Ihrem Webhosting. 
- Ihre [.ovhconfig-Datei ist korrekt konfiguriert](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/).
- Das Verzeichnis (Wurzelverzeichnis), in dem Ihr 1-Klick-Modul installiert wird, muss leer sein oder noch nicht vorhanden.
- Der Domainname (und gegebenenfalls die Subdomain) Ihrer Website ist auf Ihrem OVHcloud Webhosting als [Multisite](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/) deklariert.

## In der praktischen Anwendung

### Schritt 1: Ein CMS auswählen

Mit einem CMS können Sie Ihre Website über ein einfach zu verwendendes Interface einrichten. Es gibt verschiedene Arten von CMS, von denen einige beispielsweise konzipiert sind, um eine E-Commerce Seite zu erstellen, andere für die Einrichtung strukturierter Seiten wie etwa Blogs. So können Sie auf einer gebrauchsfertigen Websitestruktur aufbauen und diese nach Belieben anpassen (Gestaltung, Erweiterungen, Text etc.).

OVHcloud bietet 4 CMS als automatische Installation über 1-Klick-Modul an. 

Wählen Sie aus den oben aufgeführten 4 CMS aus und folgen dann den Schritten in dieser Anleitung. Sie können unsere [Übersichtsseite für CMS](https://www.ovhcloud.com/de/web-hosting/uc-cms-comparison/) verwenden, um Ihre Auswahl zu erleichtern.

Wenn Sie ein CMS installieren möchten, das nicht als OVHcloud 1-Klick-Modul angeboten wird, können Sie es manuell auf Ihrem Hosting installieren, sofern dieses CMS mit Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) kompatibel ist.

![CMS-Logos](images/CMS_logo.png){.thumbnail}

### Schritt 2: Zugang zur Verwaltung der 1-Klick-Module

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und klicken Sie im Bereich `Web Cloud`{.action} auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie dann auf den Tab `1-Klick-Module`{.action}.

Hier können Sie die bereits installierten 1-Klick-Module verwalten und neue Module installieren.

![Zugang zur Verwaltung der 1-Klick-Module](images/access_to_the_1_click_modules_section.png){.thumbnail}

## Schritt 3: 1-Klick-Modul hinzufügen

Klicken Sie im Tab `1-Klick-Module`{.action} Ihres Hostings auf den Button `Ein Modul hinzufügen`{.action}.

Wählen Sie im neu angezeigten Fenster das gewünschte CMS aus und dann den Domainnamen, mit dem Sie Ihre Website installieren möchten.

![Modulauswahl](images/add_a_module.png){.thumbnail}

Wenn der Domainname nicht in der Liste steht, gehen Sie in zum Tab `Multisite`{.action}, um ihn hinzuzufügen. Wenn nötig lesen Sie unsere Anleitung "[Mehrere Websites auf einem Webhosting einrichten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/)".

Anschließend versuchen Sie erneut, ein Modul zu installieren.

Sie haben nun die Wahl zwischen einer **einfachen Installation** oder der **Installation im Experten-Modus**.

- **Einfache Installation** (Standardeinstellung): OVHcloud führt die Installation des CMS durch und sendet Ihnen Ihre Zugangsdaten per E-Mail an Ihre OVHcloud Kontaktadresse. Dies ist die schnellste Art, ein 1-Klick-Modul zu installieren.
- **Installation im Experten-Modus**: Sie können die Installationseinstellungen anpassen. Geben Sie hierzu die Informationen ein, die für das korrekte Funktionieren des CMS mit Ihrer Datenbank notwendig sind: 
    - Verbindungsinformationen zu Ihrer Datenbank (Server, Benutzername, Port, Passwort)
    - Installationspfad im FTP-Speicherplatz Ihres Hostings
    - Sprache des CMS
    - Administrationsdaten (Administratorname, Passwort, E-Mail-Adresse)

#### Einfache Installation eines Moduls

Wählen Sie den Domainnamen für Ihr CMS aus. Überprüfen Sie das Zielverzeichnis, das nach der Wahl des Domainnamens automatisch erscheint, und stellen Sie sicher, dass bei `Installation im Experten-Modus`{.action} kein Haken gesetzt ist. Klicken Sie anschließend auf den Button `Installieren`{.action}.

> [!warning]
>
> Das Installationsverzeichnis Ihres 1-Klick-Moduls muss leer sein und Ihr OVHcloud Webhosting muss über mindestens eine Datenbank verfügen, damit die Installation durchgeführt werden kann.
>
> Wenn Sie nicht den Experten-Modus verwenden, erstellen Sie die Datenbank nicht im Voraus, da der Installationsroboter dies ausführt.
>

![Einfache Installation eines Moduls](images/choose_installation.png){.thumbnail}

Sobald die Installation abgeschlossen ist, erhalten Sie eine E-Mail mit Login-Daten. Damit können Sie sich in das Administrator-Interface (Backend) Ihres CMS einloggen.

#### Erweiterte Installation eines Moduls

Um die erweiterte Installation durchzuführen, vergewissern Sie sich, dass im Feld `Installation im Experten-Modus`{.action} ein Haken gesetzt ist, und klicken Sie anschließend auf `Weiter`{.action}:

![Erweiterte Installation eines Moduls](images/advanced_installation.png){.thumbnail}

###### Datenbank auswählen

Geben Sie die Verbindungsdaten zu Ihrer Datenbank ein. 

![Datenbank für erweiterte Installation](images/advanced_installation_database.png){.thumbnail}

Es gibt mehrere Möglichkeiten:

- Die Datenbank ist bereits auf Ihrem Webhosting erstellt: Wählen Sie Ihre Datenbank unter `Wählen Sie die Datenbank aus`{.action} und geben Sie die erforderlichen Informationen ein.
- Die Datenbank ist noch nicht auf Ihrem Webhosting erstellt: [Erstellen Sie Ihre Datenbank auf dem Hosting](https://docs.ovh.com/de/hosting/datenbank-erstellen/), w0,ählen Sie Ihre Datenbank unter `Wählen Sie die Datenbank aus`{.action} und geben Sie die erforderlichen Informationen ein.
- Die Datenbank befindet sich auf einer [Instanz von Web Cloud Databases](https://docs.ovh.com/de/clouddb/datenbank-und-benutzer-erstellen/): Wählen Sie unter `Wählen Sie die Datenbank aus`{.action} die Option `Datenbank außerhalb Ihres Webhostings`{.action} und tragen Sie die Verbindungsdaten Ihrer Datenbank ein. Die Instanz und das Webhosting müssen im gleichen Rechenzentrum gehostet werden.
- Die Datenbank wurde auf einem anderen OVHcloud Webhosting eingerichtet: Wählen Sie unter `Wählen Sie die Datenbank aus`{.action} die Option `Datenbank außerhalb Ihres Webhostings`{.action} und tragen Sie die Verbindungsdaten Ihrer Datenbank ein. Die Datenbank und das Webhosting mit dem neuen Modul müssen im gleichen Rechenzentrum gehostet werden.

Für die Datenbank sind folgende Angaben erforderlich:

- *Adresse des Servers*: Geben Sie den Servernamen Ihrer Datenbank ein, den Sie in der E-Mail zur Installation oder in Ihrem OVHcloud Kundencenter finden können. 

> [!primary]
> 
> - Der Servername einer inklusiven Datenbank eines Webhostings hat im Allgemeinen folgende Form: `Datenbankname.mysql.db`. 
>
> - Der Name des Servers einer Datenbank von Web Cloud Databases beginnt mit Ihrer OVHcloud Kundenkennung und hat folgende Form: `OVHID(ohne-ovh)-XXX.eu.clouddb.ovh.net` wobei **XXX** mit der Referenz Ihrer Datenbank zu ersetzen ist.
>

- *Name der Datenbank*: Dieser Name wurde bei der Erstellung der Datenbank im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) festgelegt.

- *Port*: Geben Sie die Nummer **3306** (Standard-Port) für eine Webhosting-Datenbank ein. Für Datenbanken auf einer Web Cloud Databases Instanz folgen Sie [dieser Anleitung](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/).

- *Benutzername*: Er ist identisch für Datenbanken, die in einem Webhosting inklusive sind. Für Datenbanken, die mit Web Cloud Databases erstellt wurden, folgen Sie [dieser Anleitung](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/).

- *Passwort*: Das Passwort wurde Ihnen bei der Erstellung der Datenbank per E-Mail gesendet. Möglicherweise haben Sie es inzwischen geändert.

Wenn Sie alle Informationen eingegeben haben, klicken Sie auf den Button `Weiter`{.action}.

> [!warning]
>
> Wenn die von Ihnen angegebenen Informationen nicht korrekt sind, wird die Installation abgebrochen. Um dies zu vermeiden, testen Sie zunächst die Verbindung zu Ihrer Datenbank.
> 
> Um die Login-Daten zu Ihrer Webhosting-Datenbank zu erfahren, lesen Sie [diese Anleitung](https://docs.ovh.com/de/hosting/datenbank-erstellen/).
>
> Um die Login-Daten zu einer auf Web Cloud Databases erstellten Datenbank zu erfahren, lesen Sie [diese Anleitung](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/).
>

##### Konfiguration des Moduls

Geben Sie die folgenden Informationenein, um das Modul zu konfigurieren:

- *Name oder E-Mail-Adresse des Administrators:* Kennung, die Sie verwenden, um sich mit der Verwaltungsoberfläche Ihres CMS zu verbinden (Backend).
- *Passwort:* Passwort, das Sie verwenden, um sich mit der Verwaltungsoberfläche Ihres CMS zu verbinden.
- *Domain:* Domainname, mit dem Sie Ihr CMS installieren möchten. Lesen Sie unsere Anleitung "[Mehrere Websites auf einem Webhosting einrichten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/)" um mehr zu erfahren.
- *Sprache:* Sprache, in der das CMS installiert wird.
- *Installationspfad:* Wird bei der Auswahl des Domainnamens automatisch ausgewählt. Ergänzen Sie ihn mit Unterverzeichnissen, falls gewünscht (für fortgeschrittene Benutzer).

Wenn Sie alle Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}.

> [!warning]
>
> Das Verzeichnis am Ende des Installationspfads muss leer sein, damit die Installation ausgeführt werden kann.
>

![Modulkonfiguration für die erweiterte Installation](images/advanced_installation_configuration.png){.thumbnail}

##### Installation bestätigen

Im letzten Schritt der erweiterten Installation überprüfen Sie die eingegebenen Informationen und klicken dann auf `Bestätigen`{.action}.

![Bestätigung der Installation im Experten-Modus](images/advanced_installation_summary.png){.thumbnail}

### Schritt 4: Ihre Website personalisieren

Die Installation kann etwa zehn Minuten dauern.

Nach Abschluss erhalten Sie eine E-Mail zur Bestätigung der Installation des CMS. Sie erhalten darin auch die Login-Daten, um sich mit dem Verwaltungsinterface Ihres CMS zu verbinden. Anschließend können Sie das Aussehen Ihrer Website ändern und Ihre ersten Inhalte veröffentlichen.

> [!warning]
>
> Der OVHcloud Support bietet keine Unterstützung bei der Verwendung von CMS. Die automatische Installation über die Module ist eine unverbindliche Komfort-Option.
>

Wenn Sie Hilfe zu den Funktionen Ihrer Website benötigen, gehen Sie auf die offizielle Website des CMS-Anbieters. Dort finden Sie zusätzliche Dokumentation und Hilfen, um Sie bei Ihrem Projekt zu unterstützen.

|CMS|Dokumentation|
|---|---|
|WordPress|[First steps with WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}|
|PrestaShop|[Getting started with PrestaShop](https://docs.prestashop-project.org/1.7-documentation/getting-started+Started){.external}|
|Joomla!|[Getting started with Joomla!](https://www.joomla.org/about-joomla/getting-started.html){.external}|
|Drupal|[Understanding Drupal](https://www.drupal.org/docs/7/understanding-drupal/overview){.external}|

## Weiterführende Informationen

[Finden Sie das richtige CMS für Ihre Website](https://www.ovhcloud.com/de/web-hosting/uc-cms-comparison/){.external}

[Mehrere Websites auf einem Webhosting einrichten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/){.external}

[Verwaltung einer Datenbank in Ihrem Webhosting](https://docs.ovh.com/de/hosting/verwaltung-einer-datenbank-in-ihrem-webhosting/){.external}

Entdecken Sie unsere [Web Cloud Databases](https://www.ovh.de/cloud/cloud-databases/){.external}

[CMS verwalten](https://docs.ovh.com/de/hosting/1-click-module-management/)

[Ihr CMS deinstallieren](https://docs.ovh.com/de/hosting/1-click-module-management/#schritt-3-ihr-modul-loschen)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
