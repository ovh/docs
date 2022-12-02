---
title: "Tutorial - Manuelle Installation von WordPress"
slug: cms_manually_install_wordpress
excerpt: "Erfahren Sie hier, wie Sie Ihr WordPress CMS eigenständig installieren"
section: CMS
order: 04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 18.11.2022**

## Ziel

Dieses Tutorial hilft Ihnen bei der manuellen Installation eines WordPress CMS (Content Management System) in wenigen Schritten.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen in der [WordPress Community](https://wordpress.com/support/){.external} zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

> [!success]
>
> Um WordPress **automatisch** in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu installieren, lesen Sie unsere Anleitung zur [Installation Ihrer Website mit 1-Klick-Modulen](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/).
>
> Um ein **anderes CMS manuell** zu installieren (Joomla!, Drupal, PrestaShop), lesen Sie unsere Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).
>

## Voraussetzungen

- Sie verfügen über ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Sie verfügen über einen [Domainnamen](https://www.ovhcloud.com/de/domains/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Schritt 1 - Installation vorbereiten <a name="step1"></a> 

Um das CMS **WordPress** auf Ihrem [Webhosting](https://www.ovhcloud.com/de/web-hosting/) zu installieren, sind einige Vorbereitungen erforderlich.

#### 1.1 - Das Wurzelverzeichnis auswählen

Das Wurzelverzeichnis (*root folder*) ist der Ordner des Hostings, in dem Ihr CMS installiert wird. Es wird empfohlen, ein leeres Verzeichnis zu wählen, um Konflikte mit Ihren anderen Multisites zu vermeiden.

Verwenden Sie unsere Anleitung zur [Einrichtung mehrerer Websites auf einem Webhosting](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/) um das Wurzelverzeichnis für WordPress anzulegen.

> [!primary]
>
> Wenn ein Wurzelverzeichnis wählen, das auf Ihrem Webhosting nicht existiert, wird es automatisch im FTP-Speicherplatz Ihres Webhostings erstellt.
>

#### 1.2 - Domainkonfiguration überprüfen

- Stellen Sie sicher, dass der Domainname, den Sie für den Zugriff auf WordPress verwenden, sowie die zugehörige Subdomain "www" auf die IP-Adresse Ihres [Webhostings](https://www.ovhcloud.com/de/web-hosting/) zeigen.

Um die IP-Adresse Ihres Webhostings abzurufen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus.<br>
Sie finden im Bereich `Allgemeine Informationen`{.action} die IP-Adresse Ihres Webhostings unter `IPv4`{.action}.

Wenn die aktive DNS-Zone Ihres Domainnamens in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwaltet wird, vergleichen Sie die IP-Adresse Ihres Hostings mit der IP-Adresse in der DNS-Zone Ihres Domainnamens. Sie finden mehr Informationen hierzu in unserer Dokumentation zur Verwaltung von [OVHcloud DNS-Zonen](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/).

> [!warning]
>
> Wenn Sie eine der Optionen `CDN`{.action} oder `IP des Landes`{.action} für Ihren Domainnamen aktiviert haben, ermitteln Sie die korrekte IP-Adresse für Ihr Hosting mithilfe des [Verzeichnis von IP-Adressen für die Webhosting Cluster](https://docs.ovh.com/de/hosting/verzeichnis-der-ip-adressen-web-hosting-cluster/).
>

Sollten Sie diese Überprüfungen nicht durchführen können, kontaktieren Sie den Verwalter Ihrer DNS-Zone, um den Zoneneintrag Ihres Domainnamens zu aktualisieren.

> [!warning]
>
> Alle Änderungen in Ihrer DNS-Zone haben eine Propagationszeit von 4 bis 24 Stunden.
>

- Halten Sie die für die [Verbindung mit dem FTP-Bereich Ihres Webhostings](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/#schritt-1-erforderliche-verbindungsinformationen-abrufen) notwendigen Informationen bereit.
- Halten Sie die für die Datenbankverbindung Ihres Webhostings notwendigen Informationen bereit oder erstellen Sie eine Datenbank mithilfe unserer [Dokumentation](https://docs.ovh.com/de/hosting/datenbank-erstellen/).

#### 1.3 - Installieren des FTP Client "Filezilla" 

Den Download-Link sowie eine Anleitung zur Nutzung finden Sie in unserem Tutorial: [FileZilla mit Ihrem OVHcloud Hosting nutzen](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/).

#### 1.4 - Datenbank erstellen <a name="step1-4"></a> 

Ein CMS benötigt eine Datenbank, um zu funktionieren. Sie sind in unseren [Webhosting Angeboten](https://www.ovhcloud.com/de/web-hosting/) enthalten, mit Ausnahme des kostenlosen [Start 10M Hostings](https://www.ovhcloud.com/de/domains/free-web-hosting/).

Verwenden Sie unsere Anleitung zur [Erstellung einer Datenbank](https://docs.ovh.com/de/hosting/datenbank-erstellen/).

Wenn Sie über eine MySQL- oder MariaDB-Datenbank in CloudDB verfügen und diese für die manuelle Installation Ihres WordPress verwenden möchten, lesen Sie unsere [Dokumentation zu CloudDB](https://docs.ovh.com/de/clouddb/datenbank-und-benutzer-erstellen/#datenbank-erstellen).

Sobald die Datenbank erstellt wurde, rufen Sie die Verbindungseinstellungen (Server, Name der Datenbank, Benutzername und Passwort) ab und speichern Sie diese für [Schritt 3](#step3) dieser Anleitung.

> [!primary]
>
> Wenn Sie Ihr WordPress mit einer bereits existierenden Datenbank installieren möchten, können Sie die Informationen zur Datenbankverbindung direkt in den Konfigurationsdateien der Website einsehen, die die Datenbank verwendet.
>
> Wenn es sich dabei um ein CMS handelt, können Sie [diese Anleitung](https://docs.ovh.com/de/hosting/datenbank-passwort-aendern/#schritt-3-passwort-der-datenbank-ihrer-website-in-ihrer-konfigurationsdatei-andern) verwenden, um die Konfigurationsdateien in Ihrem [FTP Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) zu identifizieren.
>
> Loggen Sie sich anschließend in Ihre Datenbank ein, um die "Präfixe" der bereits enthaltenen Tabellen zu identifizieren. Stellen Sie sicher, bereits vorhandene Tabellenpräfixe nicht für Ihre neue Website zu verwenden.
>
> - Um sich mit der Datenbank des Webhostings zu verbinden, lesen Sie [diese Anleitung](https://docs.ovh.com/de/hosting/datenbank-erstellen/#schritt-3-datenbank-verwalten).
> - Um sich mit einer CloudDB Datenbank zu verbinden, lesen Sie [diese Anleitung](https://docs.ovh.com/de/clouddb/datenbank-verbindung-auf-bdd/).
>

### Schritt 2 - Manuelle Installation starten

#### 2.1 - Quelldateien von WordPress herunterladen

Gehen Sie auf die offizielle [WordPress Website](https://wordpress.org/download/#download-install){.external}, um die Quelldateien des CMS herunterzuladen.

![hosting](images/downloadWP.png){.thumbnail}

> [!primary]
>
> Beachten Sie auf der Download-Seite die für den Betrieb von WordPress erforderliche PHP-Version und MySQL- oder MariaDB-Version.
>
> Konfigurieren Sie anschließend die PHP-Version auf Ihrem Webhosting mithilfe unserer Anleitung zur [Änderung der PHP-Version eines Webhostings](https://docs.ovh.com/de/hosting/konfiguration_von_php_fur_ein_ovh_webhosting_2014/).
>
> Wenn Ihre Konfiguration bereits die Mindestvoraussetzung für die PHP-Version erfüllt, ist keine Änderung erforderlich.
>

> [!warning]
>
> Wenn Sie weitere Websites auf Ihrem Webhosting haben, überprüfen Sie, dass diese mit der von Ihnen für WordPress gewählten PHP-Version kompatibel sind.
>

#### 2.2 - Quelldateien dekomprimieren

Die heruntergeladene Datei ist ein **komprimiertes Archiv**. Erstellen Sie einen Ordner mit dem Namen "**WordPress**" auf Ihrem Computer und **entpacken** Sie den Inhalt der Datei in dieses Verzeichnis.

Öffnen Sie dazu den Ordner mit der komprimierten Datei, klicken Sie mit der rechten Maustaste auf die Datei und wählen Sie "Alle extrahieren... ".

Geben Sie das Verzeichnis **WordPress** als Ziel für das Entpacken Ihrer Dateien an.

#### 2.3 - Die Quelldateien vom lokalen Ordner zum Wurzelverzeichnis auf Ihrem Webhosting verschieben

Sobald die Dateien in den Ordner "**WordPress**" entkomprimiert wurden, loggen sie sich in den [FTP-Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) ein, indem Sie den [Filezilla-Client verwenden](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/). Kopieren Sie die Dateien im Ordner "**WordPress**" in das Wurzelverzeichnis aus [Schritt 1](#step1) dieser Anleitung.

![hosting](images/wpfl2.png){.thumbnail}

>[!warning]
>
> Wir empfehlen Ihnen dringend, ein leeres Wurzelverzeichniszu verwenden, um Konflikte mit einer anderen Website zu vermeiden. Überprüfen Sie, dass der Zielordner keine Elemente enthält, bevor Sie die Dateien verschieben.
>

>[!primary]
>
> Wenn Ihr WordPress Wurzelverzeichnis nicht schon bei den in [Schritt 1](#step1) beschriebenen Aktionen angelegt wurde , können Sie es auch über FileZilla erstellen.
>
> Es kann einige Minuten dauern, bis die Dateien auf Ihr Hosting übertragen sind.
>
> Überprüfen Sie nach Abschluss des Transfers, ob alle Elemente des lokalen Ordners **WordPress** korrekt in das Wurzelverzeichnis Ihres Webhostings übertragen wurden.
>

**Sonderfall**: Wenn Sie begrenzte Internetgeschwindigkeit haben und über ein Webhosting-Angebot **Pro** oder höher verfügen, können Sie auch eine **SSH**-Verbindung nutzen, um die WordPress Quelldateien direkt auf den Speicherplatz Ihres Webhostings herunterzuladen. 

Um sich über SSH mit Ihrem Hosting zu verbinden, lesen Sie unsere Anleitung [SSH-Zugang Ihres Webhostings verwenden](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/).

Wenn Sie über **SSH** eingeloggt sind, führen Sie die nachfolgenden Befehle aus.

- In das Wurzelverzeichnis wechseln, in das Sie WordPress installieren möchten:

```bash
cd OrdnerName
```

- Die Quelldateien von WordPress herunterladen:

```bash
wget http://wordpress.org/latest.tar.gz
```

- Entpacken der WordPress Quelldateien in Ihrem Wurzelverzeichnis:

```bash
tar xvf latest.tar.gz
```

- Im Wurzelverzeichnis wurde ein Ordner namens **wordpress** erstellt. Verschieben Sie dessen Inhalt in das Wurzelverzeichnis:

```bash
mv wordpress/*/
```

- Löschen Sie das nun leere Verzeichnis **wordpress**:

```bash
rmdir ./wordpress/
```

- Löschen Sie die Datei **latest.tar.gz**:

```bash
rm -f latest.tar.gz
```

### Schritt 3 - Manuelle Installation abschließen <a name="step3"></a>

> [!success]
>
> Bevor Sie mit der Installation fortfahren, leeren Sie den Cache Ihres Browsers, um Fehler zu vermeiden.
>

#### 3.1 - WordPress im Browser öffnen

Geben Sie Ihren Domainnamen in die Adresszeile Ihres Webbrowsers ein.

Wenn die Quelldateien korrekt im Wurzelverzeichnis platziert wurden, erscheint die Seite, auf der die Sprache für WordPress ausgewählt werden kann:

![hosting](images/WPselectlangue.png){.thumbnail}

Wählen Sie die Sprache für die Website aus und klicken Sie auf `Weiter`{.action}.

#### 3.2 - Ihre WordPress mit Ihrer Datenbank verbinden

WordPress fragt nun nach den Login-Daten für Ihre Datenbank.

![hosting](images/WPstart.png){.thumbnail}

Sie benötigen nun die Verbindungsdaten für die Datenbank (wie beschrieben in [Schritt 1.4](#step1-4)). Klicken Sie auf `Los geht's!`{.action}, um fortzufahren.

Folgende Seite wird angezeigt:

![hosting](images/WPdb.png){.thumbnail}

Geben Sie die angeforderten Informationen zur Datenbank ein:

- Database name: Dieser Name wurde bei der Erstellung der Datenbank im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) definiert.

- Username: Dieser ist identisch mit dem Datenbanknamen, wenn Sie eine im Webhosting inkludierte Datenbank verwenden.
Für Datenbanken, die in CloudDB erstellt wurden, lesen Sie die Informationen in [Schritt 1.4](#step1-4) dieser Anleitung.

- Password: Es wurde Ihnen bei der Erstellung der Datenbank per E-Mail gesendet. Möglicherweise haben Sie es inzwischen geändert.

- Database Host: Der Servername Ihrer Datenbank, ebenfalls in der Installationsmail enthalten und einsehbar in Ihrem OVHcloud Kundencenter. 

> [!primary]
> 
> - Der Servername einer Datenbank, die in einem Webhosting inklusive ist, hat im Allgemeinen folgendes Format: `DatenbankName.mysql.db`. 
>
> - Der Servername einer CloudDB Datenbank leitet sich von Ihrer OVHcloud Kundenkennung ab und hat folgendes Format: `OVHID(ohne-ovh)-XXX.eu.clouddb.ovh.net` wobei  **XXX** für die Referenz Ihrer CloudDB steht.
>

- Table Prefix: Wenn die Installation mit einer neuen Datenbank erfolgt, geben Sie ein Präfix Ihrer Wahl ein. Falls Sie eine Datenbank angegeben haben, die bereits von einer anderen Website verwendet wird, stellen Sie sicher, dass die Präfixe sich nicht überschneiden (siehe [Schritt 1.4](#step1-4) dieser Anleitung).

Klicken Sie auf `Bestätigen`{.action}, um die Verbindungsinformationen zur Datenbank zu validieren.

Wenn alle Eingaben korrekt waren, erscheint folgende Seite:

![hosting](images/WPafterDB.png){.thumbnail}

Klicken Sie auf `Installation starten`{.action}.

#### 3.3 - Administrator-Zugang zum Backend von WordPress einrichten

Nach der Installation fragt WordPress nach Informationen zu Ihrer künftigen Website, und erstellt Ihren Administrator-Zugang.

Dieser ermöglicht Ihnen den Zugriff auf den Verwaltungsbereich Ihres WordPress CMS (Backend).

![hosting](images/WPafterDB2.png){.thumbnail}

Geben Sie die angeforderten Informationen ein:

- Site title: Geben Sie den Titel Ihrer Website ein.
- Username: Legen Sie die Administrator-Kennung Ihres CMS fest.
- Password: Legen Sie ein Passwort für diese Administrator-Kennung fest.
- Your Email: Geben Sie eine gültige E-Mail-Adresse ein.
- Search engine visibility: Haken Sie diese Option an, um Ihre Website von Suchmaschinenreferenzierungen auszuschließen.

Klicken Sie auf `WordPress installieren`{.action}, sobald alles korrekt angegeben ist.

#### 3.4 - Die manuelle Installation abschließen und den Administrator-Zugang testen

Die Installation ist vollständig, wenn folgende Seite angezeigt wird:

![hosting](images/WPend.png){.thumbnail}

Klicken Sie auf den Button `Einloggen`{.action}, um den Zugriff auf den Verwaltungsbereich Ihres neuen WordPress mit den zuvor in Schritt 3.3 erstellten Login-Daten zu testen.

> [!primary]
>
> Die OVHcloud Teams bieten keinen Support für externe Software wie WordPress und können Ihnen nicht bei der Verwendung oder Konfiguration Ihres WordPress CMS weiterhelfen.
>
> Wenden Sie sich für Unterstützung an die Community für WordPress.
>

Wenn Sie eingeloggt sind, erscheint folgende Seite:

![hosting](images/WPadminInterface.png){.thumbnail}

> [!success]
>
> Sie können nun mit der Erstellung des Inhalts Ihrer WordPress Website beginnen!
>

## Weiterführende Informationen <a name="go-further"></a>

[Offizielle Website WordPress](https://wordpress.org)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
