---
title: "Installation Ihrer Website mit einem '1-Klick-Modul' (CMS)"
excerpt: "Diese Anleitung erklärt, wie Sie Ihre Website mithilfe unserer '1-Klick-Module' installieren."
slug: webhosting_installation_von_webhosting-modulen
section: CMS
order: 01
updated: 2023-03-28
---

**Letzte Aktualisierung am 28.03.2023**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel 

"1-Klick-Module" ermöglichen die einfache und schnelle Installation einer Website (ohne technisches Fachwissen). Bei den "1-Klick-Modulen" handelt es sich in Wirklichkeit um **C**ontent **M**anagement **S**ystem **(CMS)**. OVHcloud bietet die Installation der bekanntesten CMS an: *WordPress*, *Joomla!*, *Drupal* und *PrestaShop*.

**Diese Anleitung erklärt, wie Sie Ihre Website über unsere "1-Klick-Module" installieren.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZrYmmPbMl4I?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/)mit mindestens einer Datenbank.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verwenden eine [kompatible PHP-Version](https://docs.ovh.com/de/hosting/konfiguration_von_php_fur_ein_ovh_webhosting_2014/) auf Ihrem Webhosting. 
- Ihre [.ovhconfig-Datei ist korrekt konfiguriert](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/).
- Das Verzeichnis (Wurzelverzeichnis), in dem Ihr "1-Klick-Modul" installiert wird, muss leer sein oder derzeit nicht vorhanden sein.
- Der Domainname (und gegebenenfalls die Subdomain), die für Ihre Website verwendet wird, muss auf Ihrem OVHcloud Webhosting als [Multisite](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/) angegeben werden.

## In der praktischen Anwendung

### Schritt 1 - Korrektes CMS auswählen

Mit einem CMS können Sie Ihre Website über ein einfach zu verwendendes Interface erstellen. Es gibt verschiedene Arten von CMS, von denen einige vorkonzipiert sind, um zum Beispiel eine E-Commerce Seite zu erstellen, andere für die Einrichtung einer Vitrine, eines Blogs usw... Sie können so von einer gebrauchsfertigen und personalisierbaren Websitestruktur profitieren (Thema, Erweiterungen, Texte usw.), die Ihnen am besten passt.

Von allen CMS bietet OVHcloud 4 als automatische Installation mit seinen "1-Klick-Modulen" an. 

Wenn Sie diese Lösung verwenden, wählen Sie aus den oben aufgeführten 4 CMS. Wenn Sie bereits eine Auswahl getroffen haben, lesen Sie die verschiedenen Schritte in dieser Anleitung. Ist das nicht der Fall, ziehen Sie Ihre Wahl in unserem [Vergleich der CMS](https://www.ovhcloud.com/de/web-hosting/uc-cms-comparison/) zu.

Wenn Sie ein nicht erreichbares CMS über unsere "1-Klick-Module" installieren möchten, können Sie es manuell auf Ihrem Hosting installieren. Dies unter der Voraussetzung, dass dieses CMS mit unseren [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angeboten kompatibel ist.

![CMS-Logos](images/CMS_logo.png){.thumbnail}

### Schritt 2 - Auf die Verwaltung der "1 Klick Module" zugreifen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und klicken Sie im Bereich `Web Cloud`{.action}. Klicken Sie auf `Hosting-Pakete`{.action}, wählen Sie das Hosting-Angebot aus, auf dem Sie ein "1-Klick-Modul" installieren möchten, und klicken Sie dann auf den Tab `1-Klick-Module`{.action}.

Dort finden Sie alle bereits installierten 1-Klick-Module. Dort können Sie Ihre 1-Klick-Module verwalten und neue installieren.

![Zugang zur Verwaltung der 1-Klick-Module](images/access_to_the_1_click_modules_section.png){.thumbnail}

## Schritt 3 - "1 Klick Modul" hinzufügen

Klicken Sie im Tab `1-Klick-Module`{.action} Ihres Hostings auf den Button `Ein Modul hinzufügen`{.action}, um ein neues "1 Klick Modul" hinzuzufügen.

Wählen Sie im angezeigten Fenster das gewünschte CMS aus und wählen Sie die Domain aus, mit der Sie Ihre Website installieren möchten:

![Modulauswahl](images/add_a_module.png){.thumbnail}

Wenn Ihre Domain nicht in der Liste steht, gehen Sie in den Tab `Multisite`{.action}, um diese hinzuzufügen. Wenn nötig lesen Sie unsere Anleitung [Wie kann ich ein Webhosting mit mehreren Websites teilen](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/){.external}.

Wenn Ihre Domain korrekt hinzugefügt wurde, versuchen Sie erneut, ein "1-Klick-Modul" hinzuzufügen.

Wenn Sie das CMS ausgewählt haben, wählen Sie zwischen einer Installation **schnell** oder **Experten-Modus**:

- Installation **schnell** (standardmäßig ausgewählt): OVHcloud führt die Installation des CMS durch und teilt Ihnen Ihre Zugangsdaten mit, um es per E-Mail an Ihre OVHcloud-Kontaktadresse zu verwalten. Dies ist die einfachste und schnellste Art und Weise, ein "1-Klick-Modul"zu installieren.
- Installation **Experten-Modus**: So können Sie die für die Installation des CMS anzuwendende Konfiguration anpassen. Geben Sie alle für das reibungslose Funktionieren des CMS notwendigen Informationen ein: 
    - Verbindungsinformationen zu Ihrer Datenbank (Server, Benutzername, Port, Passwort usw.)
    - Installationspfad im FTP Speicherplatz Ihres Hostings
    - Sprache des CMS
    - Administrator-Kennungen (Administratorname, Passwort, E-Mail-Adresse usw.)

#### Schnelle Installation eines "1 Klick Moduls"

Wählen Sie den Domainnamen für Ihr CMS aus, überprüfen Sie das Zielverzeichnis, das nach der Wahl des Domainnamens automatisch erscheint, und überprüfen Sie, dass in dem Feld `Installation im Experten-Modus`{.action} kein Haken gesetzt wurde. Klicken Sie anschließend direkt auf den Button `Installieren`{.action}.

> [!warning]
>
> Das Installationsverzeichnis Ihres "1-Klick-Moduls" muss leer sein und Sie müssen über mindestens eine Datenbank verfügen, die auf Ihrem OVHcloud Webhosting eingerichtet werden kann, damit die Installation durchgeführt werden kann.
>
> Für eine schnelle Installation erstellen Sie im Voraus keine Datenbank, der Installationsroboter übernimmt dies.
>

![Einfache Installation eines Moduls](images/choose_installation.png){.thumbnail}

Sobald die Installation abgeschlossen ist, erhalten Sie eine E-Mail mit den Login-Informationen zum Administrator-Interface (*back office*) Ihres CMS. Verbinden Sie sich mit dieser, um Ihre Website zu personalisieren.

#### Eigentumsrechte Installation der Module

Um die Eigentumsanlage durchzuführen, vergewis Sie sich, im Feld `Installation im Experten-Modus`{.action}, und klicken Sie anschließend auf `Weiter`{.action}:

![Erweiterte Installation eines Moduls](images/advanced_installation.png){.thumbnail}

###### Datenbank auswählen

Geben Sie die Verbindungsinformationen zu Ihrer Datenbank ein. 

![Datenbank für erweiterte Installation](images/advanced_installation_database.png){.thumbnail}

Es gibt mehrere Möglichkeiten:

- Die Datenbank ist bereits auf Ihrem Webhosting eingerichtet: Wählen Sie die gewünschte Datenbank im Drop-down-Menü aus `Wählen Sie die Datenbank aus`{.action} und geben Sie die angeforderten Informationen ein.
- Die Datenbank ist noch nicht auf Ihrem Webhosting erstellt: [Erstellen Sie Ihre Inklusiv-Datenbank mit Ihrem Hosting](https://docs.ovh.com/de/hosting/datenbank-erstellen/), gehen Sie dann zum Drop-down-Menü `Wählen Sie die Datenbank aus`{.action} und geben Sie die angeforderten Informationen ein.
- Die Datenbank ist [auf Ihrer Cloud Databases Webinstanz erstellt](https://docs.ovh.com/de/clouddb/datenbank-und-benutzer-erstellen/): Wählen Sie die gewünschte im Drop-down-Menü aus `Wählen Sie die Datenbank aus`{.action}, wählen Sie die Option `Datenbank außerhalb Ihres Webhostings`{.action} und vervollständigen Sie die angeforderten Informationen. Die Instanz und das Webhosting müssen im gleichen Rechenzentrum (Datacenter) gehostet werden.
- Die Datenbank wird auf einem anderen OVHcloud Webhosting eingerichtet: Wählen Sie im Drop-down-Menü die Datenbank `Wählen Sie die Datenbank aus`{.action}, wählen Sie die Option `Datenbank außerhalb Ihres Webhostings`{.action} und vervollständigen Sie die angeforderten Informationen. Die Datenbank und das Webhosting müssen im gleichen Rechenzentrum gehostet werden.

Für die Datenbank sind folgende Angaben erforderlich:

- *Adresse des Servers*: Geben Sie den Namen des Servers Ihrer Datenbank ein, der sich in der Installations-E-Mail oder in Ihrem OVHcloud Kundencenter befindet. 

> [!primary]
> 
> - Der Name des Servers einer Datenbank, der bei Ihrem Webhosting Angebot inklusive ist, hat im Allgemeinen folgende Form: `nameOfYourDatabase.mysql.db`. 
>
> - Der Name des Servers einer Web Cloud Databases Datenbank beginnt mit Ihrer OVHcloud Kundenkennung und hat folgende Form: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` wobei die **"X"** durch die Referenz Ihres Web Cloud Databases zu ersetzen sind.
>

- *Name der Datenbank*: Dieser Name wurde bei der Erstellung der Datenbank im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) definiert.

- *Port*: Legen Sie systematisch die Nummer **3306** (standardmäßiger Port) für eine Datenbank bei Ihrem Webhosting ein. Eine Datenbank auf einer Cloud Databases Webinstanz finden Sie in [dieser Anleitung](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/).

- *Benutzername*: Der Name der Datenbank ist identisch, wenn Sie eine Datenbank verwenden, die in Ihrem Webhosting enthalten ist.
Für Datenbanken, die auf einem Web Cloud Databases Angebot erstellt werden, lesen Sie die Informationen in [dieser Anleitung](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/).

- *Passwort*: wurde Ihnen bei der Erstellung der Datenbank per E-Mail zugesandt. Es ist möglich, dass Sie es inzwischen geändert haben.

Wenn Sie alle Informationen eingegeben haben, klicken Sie auf den Button `Weiter`{.action}.

> [!warning]
>
> Wenn die von Ihnen angegebenen Informationen nicht korrekt sind, wird die Installation nicht abgeschlossen. Um dies zu vermeiden, testen Sie zunächst die Verbindung zu Ihrer Datenbank.
> 
> Um die Login-Daten zu Ihrer Datenbank zu erhalten, die Ihr Webhosting enthält, lesen Sie [diese Anleitung](https://docs.ovh.com/de/hosting/datenbank-erstellen/).
>
> Um die Login-Daten zu Ihrer auf einer Cloud Databases Web-Instanz erstellten Datenbank abzurufen, lesen Sie [diese Anleitung](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/).
>

##### Modul konfigurieren

Geben Sie die folgenden Informationen für die Konfiguration des Moduls ein:

- *Name oder E-Mail-Adresse des Administrators:* Kennung, die Sie verwenden, um sich mit dem Verwaltungsinterface Ihres CMS zu verbinden (Back Office).
- *Passwort:* Passwort, das Sie verwenden, um sich mit dem Verwaltungsinterface Ihres CMS zu verbinden.
- *Domain:* Domainname, mit dem Sie Ihr CMS installieren möchten Wenn nötig lesen Sie unsere Anleitung [Mehrere Websites auf einem Webhosting einrichten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/).
- *Sprache:* Sprache, in der das CMS installiert wird.
- *Installationspfad:* wird bei der Auswahl der Domain automatisch angegeben. Ergänzen Sie diese mit Unterverzeichnissen (für fortgeschrittene Benutzer).

Wenn Sie alle Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}.

> [!warning]
>
> Die in dem angegebenen Installationspfad angegebene Enddatei muss vollständig leer sein, damit die Installation erfolgreich ist.
>

![Modulkonfiguration für die erweiterte Installation](images/advanced_installation_configuration.png){.thumbnail}

##### Die Installation bestätigen

Überprüfen Sie die angezeigten Informationen und klicken Sie dann auf `Bestätigen`{.action}, wenn alles in Ordnung ist:

![Bestätigung der Installation im Experten-Modus](images/advanced_installation_summary.png){.thumbnail}

### Schritt 4: meine Seite personalisieren

Die Installation kann etwa zehn Minuten dauern.

Nach Abschluss erhalten Sie eine E-Mail zur Bestätigung der korrekten Installation des CMS. In dieser E-Mail können Sie sich mit dem Verwaltungsinterface Ihres CMS verbinden. So können Sie das Thema Ihrer Website ändern und Ihre ersten Inhalte veröffentlichen.

> [!warning]
>
> Der OVHcloud Support bietet keine Unterstützung bei der Verwendung von CMS. Wir bieten sie nur als Installation an **mit 1 Klick**.
>

Wenn Sie Hilfe bei den Funktionen Ihres CMS benötigen, wenden Sie sich an den Herausgeber des von Ihnen installierten CMS. Dort finden Sie Dokumentation, um Sie bei Ihrem Projekt zu unterstützen.

|CMS|Dokumentation|
|---|---|
|WordPress|[First steps with WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}|
|PrestaShop|[Getting started with PrestaShop](https://docs.prestashop-project.org/1.7-documentation/getting-started+Started){.external}|
|Joomla!|[Getting started with Joomla!](https://www.joomla.org/about-joomla/getting-started.html){.external}|
|Drupal|[Understanding Drupal](https://www.drupal.org/docs/7/understanding-drupal/overview){.external}|

## Weiterführende Informationen

[Finden Sie das richtige CMS für Ihre Website](https://www.ovhcloud.com/de/web-hosting/uc-cms-comparison/){.external}

[Mehrere Websites auf einem Webhosting hosten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/){.external}

[Verwaltung einer Datenbank in Ihrem Webhosting](https://docs.ovh.com/de/hosting/verwaltung-einer-datenbank-in-ihrem-webhosting/){.external}

Entdecken Sie unsere [Web Cloud Databases Angebote](https://www.ovh.de/cloud/cloud-databases/){.external}

[CMS verwalten](https://docs.ovh.com/de/hosting/1-click-module-management/)

[Ihr CMS deinstallieren](https://docs.ovh.com/de/hosting/1-click-module-management/#schritt-3-ihr-modul-loschen)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
