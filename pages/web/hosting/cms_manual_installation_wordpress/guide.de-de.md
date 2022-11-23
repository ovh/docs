---
title: "Tutorial - Manuelle Installation von WordPress"
slug: cms_manually_install_wordpress
excerpt: "Hier erfahren Sie, wie Sie Ihr WordPress CMS manuell installieren"
section: CMS
order: 04
---

**Letzte Aktualisierung am 18.11.2022**

## Ziel

Diese Anleitung hilft Ihnen bei der manuellen Installation von WordPress CMS (Content Management System) in wenigen Schritten.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) oder [Herausgeber des CMS WordPress](https://wordpress.com/de/support/){.external} zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

> [!success]
>
> Um WordPress **automatisch** in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu installieren, lesen Sie unsere Anleitung zur [Installation eines Moduls mit einem Klick](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/).
>
> Um ein **anderes CMS manuell** zu installieren (Joomla!, Drupal, PrestaShop), lesen Sie unsere Anleitung zur [manuellen Installation eines CMS](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/).
>

## Voraussetzungen

- Sie verfügen über ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Über eine [Domainname](https://www.ovhcloud.com/de/domains/)
- Sie sind im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt

## In der praktischen Anwendung

### Schritt 1 - Installation <a name="step1"></a> vorbereiten

Um das CMS **WordPress** auf Ihrem [Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebot zu installieren, sind einige Vorbereitungen erforderlich.

#### 1.1 - Überprüfen Sie die Meldung des "Wurzelverzeichnisses"

Der "Wurzelverzeichnis" entspricht dem Verzeichnis, in dem Ihr künftiges CMS auf Ihrem Hosting installiert wird. Es wird empfohlen, ein leeres Verzeichnis zu wählen, um Konflikte mit Ihren anderen potenziellen Multisite-Lösungen zu vermeiden.

In unserer Anleitung [Eine Multisite auf Ihrem Webhosting hinzufügen](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/) finden Sie die Wurzeldatei, die für Ihre WordPress verwendet werden soll.

> [!primary]
>
> Wenn Sie einen "Wurzelverzeichnis"-Namen definieren, der auf Ihrem Webhosting nicht existiert, wird er automatisch im FTP-Speicherplatz Ihres Webhostings erstellt.
>

#### 1.2 - Um den "Verweis" der Domain zu überprüfen

- Stellen Sie sicher, dass die Domain, die Sie für den Zugriff auf Ihre WordPress verwenden, sowie deren Subdomain "www" auf die IP-Adresse Ihres [Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebots verweisen.

Um die IP-Adresse Ihres Webhosting-Angebots abzurufen, loggen Sie sich im Bereich `Web Cloud`{.action} in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr Webhosting-Angebot im Bereich `Hosting`{.action}<br>
Im Kasten `Allgemeine Informationen`{.action} rechts finden Sie die IP-Adresse Ihres Webhostings im Formular `IPv4`{.action}.

Wenn die aktive DNS-Zone Ihrer Domain in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwaltet wird, vergleichen Sie die IP-Adresse Ihres Hostings mit der IP-Adresse in der DNS-Zone Ihrer Domain und erhalten Sie die zugehörige Dokumentation zu den [OVHcloud DNS Zonen](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/).

> [!warning]
>
> Wenn Sie die `CDN`{.action} Optionen oder die gesamte `IP-Adresse des Landes`{.action} für Ihre Domain aktiviert haben, verwenden Sie die entsprechende IP-Adresse in unserer Dokumentation zur Ermittlung von [allen IP-Adressen unserer Webhosting Pakete](https://docs.ovh.com/de/hosting/verzeichnis-der-ip-adressen-web-hosting-cluster/).
>

Sollten Sie diese Überprüfungen nicht durchführen können, kontaktieren Sie den Hosting-Anbieter Ihrer aktiven DNS Zone, um den Verweis Ihrer Domain zu aktualisieren.

> [!warning]
>
> Alle Änderungen in Ihrer DNS Zone haben eine Propagationszeit von 4 bis 24 Stunden.
>

- Rufen Sie [die für die Verbindung mit dem FTP-Bereich Ihres Webhostings notwendigen Informationen](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/#schritt-1-erforderliche-verbindungsinformationen-abrufen) ab.
- Rufen Sie die Datenbank Ihres Webhosting Angebots ab, wenn es bereits existiert, oder erstellen Sie eine Datenbank mit unserer [Dokumentation](https://docs.ovh.com/de/hosting/datenbank-erstellen/).

#### 1.3 - Den kostenlosen FTP Client "FileZilla" installieren

Der kostenlose Download-Link sowie eine Anleitung zur Nutzung finden Sie in unserer Anleitung zur [Nutzung von FileZilla mit Ihrem OVHcloud Hosting-Angebot](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/).

#### 1.4 - Eine Datenbank <a name="step1-4"></a> erstellen

CMS benötigen eine Datenbank, um zu funktionieren. Unsere [Webhosting](https://www.ovhcloud.com/de/web-hosting/)-Angebote enthalten diese, mit Ausnahme des kostenlosen [Start 10M Hostings](https://www.ovhcloud.com/de/domains/free-web-hosting/).

Verwenden Sie unsere Anleitung zur [Erstellung einer Datenbank über Ihr Webhosting Angebot](https://docs.ovh.com/de/hosting/datenbank-erstellen/).

Wenn Sie über ein CloudDB Angebot in MySQL oder MariaDB verfügen und es für die manuelle Installation Ihres WordPress verwenden möchten, lesen Sie unsere Dokumentation zur [Erstellung einer Datenbank auf einem CloudDB](https://docs.ovh.com/de/clouddb/datenbank-und-benutzer-erstellen/#datenbank-erstellen).

Sobald die Datenbank erstellt wurde, rufen Sie die Verbindungseinstellungen (Server, Name der Datenbank, Benutzername und Passwort) ab und speichern Sie diese für [Schritt 3](#step3) dieser Anleitung.

> [!primary]
>
> Wenn Sie Ihr WordPress CMS mit einer bereits existierenden Datenbank installieren möchten, können Sie Ihre Verbindungseinstellungen zu Ihrer Datenbank direkt in den Dateien der Website abrufen, die zu dieser gehören.
>
> Wenn Sie auch ein CMS installieren möchten, können Sie [diese Anleitung](https://docs.ovh.com/de/hosting/datenbank-passwort-aendern/#schritt-3-passwort-der-datenbank-ihrer-website-in-ihrer-konfigurationsdatei-andern) verwenden, um die Konfigurationsdateien in Ihrem [FTP Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) zu identifizieren.
>
> Loggen Sie sich anschließend in Ihre Datenbank ein, um die "Präfixe" der bereits enthaltenen Tabellen zu identifizieren. So können Sie kein Tabellenpräfix auswählen, das bereits von einer anderen Ihrer Seiten verwendet wird.
>
> - Um sich mit Ihrer Datenbank zu Ihrem Webhosting Angebot zu verbinden, lesen Sie [diese Anleitung](https://docs.ovh.com/de/hosting/datenbank-erstellen/#schritt-3-datenbank-verwalten).
> - Um sich mit einer Datenbank auf einer Cloud DB zu verbinden, lesen Sie [diese Anleitung](https://docs.ovh.com/de/clouddb/datenbank-verbindung-auf-bdd/).
>

### Schritt 2 - Die manuelle Installation starten

#### 2.1 - Wiederherstellung der Quelldateien von WordPress

Gehen Sie auf die Website des Herausgebers [WordPress](https://wordpress.org/download/#download-install){.external}, um die Quelldateien des CMS herunterzuladen.

![hosting](images/downloadWP.png){.thumbnail}

> [!primary]
>
> Beachten Sie auf der Download-Seite die PHP-Version sowie die für den Betrieb Ihrer WordPress erforderliche MySQL oder MariaDB Version.
>
> Konfigurieren Sie anschließend die PHP-Version auf Ihrem Webhosting mithilfe unserer Anleitung zu [Änderung der PHP-Version eines Webhostings](https://docs.ovh.com/de/hosting/konfiguration_von_php_fur_ein_ovh_webhosting_2014/).
>
> Wenn Sie bereits eine PHP-Version verwenden, die gleich oder größer als die erforderliche ist, ist keine Änderung erforderlich.
>

> [!warning]
>
> Wenn Sie weitere Websites auf Ihrem Webhosting Angebot haben, überprüfen Sie, dass diese mit der von Ihnen für Ihren WordPress gewählten PHP Version kompatibel sind.
>

#### 2.2 - Die in einem neuen Ordner heruntergeladenen Quelldateien dekomprimieren

Die heruntergeladene Datei ist im Format **komprimiert** (gezippt). Erstellen Sie einen Ordner mit dem Titel "**WordPress**" auf Ihrem Computer und **entkomprimieren** Sie den Inhalt der im Ordner heruntergeladenen Datei ***WordPress**".

Öffnen Sie hierzu den Ordner, in den Sie die komprimierte Datei heruntergeladen haben, klicken Sie mit der rechten Maustaste auf die betreffende Datei und wählen Sie "Alles extrahieren... "

Geben Sie den Ordner "**WordPress**" an den Bestimmungsort ein, um Ihre Dateien aus diesem Ordner zu extrahieren.

#### 2.3 - Die Quelldateien des Ordners "WordPress" auf das "Wurzelverzeichnis" auf Ihrem Webhosting verschieben

Sobald die Dateien in Ihrem Ordner "**WordPress**" dekomprimiert wurden, [Via FTP mit Ihrem Speicherplatz verbinden](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) mithilfe des [FTP-FileZilla-Clients](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/) und kopieren Sie die Dateien in dem Ordner "**WordPress**" in das "Wurzelverzeichnis" von [Schritt 1](#step1) dieser Anleitung.

![hosting](images/wpfl2.png){.thumbnail}

>[!warning]
>
> Wir empfehlen Ihnen dringend, ein leeres "Wurzelverzeichnis"zu verwenden, um Konflikte mit einer anderen Website zu vermeiden. Bevor Sie die Dateien verschieben, überprüfen Sie, dass der Zielordner keine Elemente enthält.
>

>[!primary]
>
> Wenn das von Ihnen definierte "Wurzelverzeichnis" nicht automatisch bei den in [Schritt 1](#step1) beschriebenen Aktionen erstellt wurde , können Sie es über FileZilla erstellen.
>
> Es kann einige Minuten dauern, bis die Dateien auf Ihrem Hosting gespeichert sind.
>
> Überprüfen Sie nach Abschluss des Transfers, ob alle Elemente des lokalen Ordners "**WordPress**"korrekt in das "Wurzelverzeichnis"Ihres Webhostings übertragen wurden.
>

** Sonderfall**: Wenn Sie über einen begrenzten Internetdurchsatz und/oder ein Webhosting-Angebot **Pro** oder höher verfügen, können Sie die Verbindung in **SSH** nutzen, um WordPress-Quelldateien in den Speicherplatz Ihres Webhostings zu legen. 

Um sich via SSH mit Ihrem Hosting zu verbinden, lesen Sie unsere Anleitung zur [SSH-Verbindung über ein OVHcloud Shared Hosting](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/).

Wenn Sie in **SSH** eingeloggt sind, führen Sie folgende Befehle aus:

- Gehen Sie in den "Wurzelverzeichnis", in dem Sie Ihre WordPress auf Ihrem Webhosting installieren möchten:

```bash
cd nameOfYourTargetFolder
```

- Rufen Sie die WordPress Quelldateien direkt über Ihren "Wurzelordner" ab:

```bash
wget http://wordpress.org/latest.tar.gz
```

- Dekomprimieren Sie die WordPress Quelldateien in Ihrem "Wurzelverzeichnis":

```bash
tar xvf latest.tar.gz
```

- In Ihrem "Wurzelverzeichnis"wird ein Ordner "**wordpress**"erstellt. Verschieben Sie den Inhalt auf die Basis Ihres "Wurzelverzeichnisses":

```bash
mv wordpress/*/
```

- Löschen Sie das leere Verzeichnis "**wordpress**":

```bash
rmdir ./wordpress/
```

- Löschen Sie die komprimierte Datei "**latest.tar.gz**":

```bash
rm -f latest.tar.gz
```

### Schritt 3 - manuelle Installation <a name="step3"></a> abschließen

> [!success]
>
> Bevor Sie mit der Installation fortfahren, leeren Sie den Cache Ihres Browsers, um Fehler zu vermeiden.
>

#### 3.1 - Über Ihren Browser auf Ihre WordPress-Seite gehen

Geben Sie Ihre Domain in die Suchleiste Ihres Webbrowsers ein.

Wenn die WordPress-Quelldateien korrekt in Ihrem Wurzelverzeichnis platziert wurden, erscheint die WordPress-Seite, auf der die Sprache ausgewählt werden kann:

![hosting](images/WPselectlangue.png){.thumbnail}

Wählen Sie die Sprache der Website aus und klicken Sie auf `Weiter`{.action}.

#### 3.2 - Ihre WordPress mit Ihrer Datenbank verbinden

WordPress wird Sie bitten, die Login-Daten für Ihre Datenbank abzurufen:

![hosting](images/WPstart.png){.thumbnail}

Loggen Sie sich in Ihre Datenbank ein (wenn nötig, konsultieren Sie [Schritt 1.4](#step1-4)) und klicken Sie dann auf `Los geht's!`{.action}, um fortzufahren.

Folgende Seite wird angezeigt:

![hosting](images/WPdb.png){.thumbnail}

Geben Sie die angeforderten Informationen zur Datenbank ein:

- Name der Datenbank: Dieser Name wurde bei der Erstellung der Datenbank im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) definiert.

- Kennung: Der Name der Datenbank ist identisch, wenn Sie eine Datenbank verwenden, die in Ihrem Webhosting enthalten ist.
Für Datenbanken, die auf einem CloudDB erstellt werden, lesen Sie die Informationen in [Schritt 1.4](#step1-4) dieser Anleitung.

- Passwort: wurde Ihnen bei der Erstellung der Datenbank per E-Mail zugesandt. Es ist möglich, dass Sie es inzwischen geändert haben.

- Adresse der Datenbank: Geben Sie den Namen des Servers Ihrer Datenbank ein, der sich in der Installations-E-Mail oder in Ihrem OVHcloud Kundencenter befindet. 

> [!primary]
> 
> - Der Name des Servers einer Datenbank, der bei Ihrem Webhosting Angebot inklusive ist, hat im Allgemeinen folgende Form: `nameOfYourDatabase.mysql.db`. 
>
> - Der Name des Servers einer CloudDB Datenbank beginnt mit Ihrer OVHcloud Kundenkennung und hat folgende Form: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` wobei die **"X"** durch die Referenz Ihres CloudDB-Dienstes zu ersetzen sind.
>

- Präfix für die Tabellen: Wenn die Installation mit einer ganz neuen Datenbank erfolgt, geben Sie das "Präfix"Ihrer Wahl ein. Wenn Sie eine Datenbank verwenden, die bereits von einer anderen Website verwendet wird, lesen Sie [Schritt 1.4](#step1-4) dieser Anleitung, um kein in Ihrer Datenbank bereits verwendetes Tabellenpräfix einzugeben.

Klicken Sie auf `Übermitteln`{.action}, um die Verbindungsinformationen zur Datenbank zu validieren.

Wenn alles gut gelaufen ist, erscheint folgende Seite:

![hosting](images/WPafterDB.png){.thumbnail}

Klicken Sie auf =Installation`{.action} starten.

#### 3.3 - Administrator-Zugang zum "Back-Office" Ihrer WordPress und Ihrer Kontakt-E-Mail festlegen

Nach der Installation wird WordPress Sie um Informationen zu Ihrer künftigen Website bitten, darunter die Erstellung Ihrer WordPress Administrator-Kennung.

Dieser ermöglicht Ihnen dann den Zugriff auf den Verwaltungsbereich Ihres WordPress CMS, auch "Back-Office" genannt.

![hosting](images/WPafterDB2.png){.thumbnail}

Geben Sie die angeforderten Informationen ein:

- Titel der Website: Geben Sie den Titel Ihrer Website ein.
- Kennung: Legen Sie die Administrator-Kennung Ihres CMS fest.
- Passwort: Legen Sie ein Passwort für diese Administrator-Kennung fest.
- Ihre E-Mail-Adresse: Geben Sie eine gültige E-Mail-Adresse ein.
- Privatsphäre: Setzen Sie hier ein Häkchen, damit die Suchmaschinen Ihre WordPress referenzieren.

Klicken Sie auf `WordPress installieren`{.action}, sobald alles korrekt angegeben ist.

#### 3.4 - Die manuelle Installation abschließen und den "Administrator" Zugang testen

Die Installation wird gelöscht, wenn folgende Seite angezeigt wird:

![hosting](images/WPend.png){.thumbnail}

Klicken Sie nun einfach auf den Button `Verbindung`{.action}, um den Zugriff auf das "Back-Office" Ihres neuen WordPress CMS mit den zuvor in Schritt 3.3 erstellten Administrator-Kennungen zu testen.

> [!primary]
>
> Die OVHcloud Teams bieten keinen Support für Drittlösungen wie WordPress und können Sie daher nicht bei der Verwendung oder Konfiguration Ihres WordPress CMS unterstützen.
>
> Für eine solche Begleitung nutzen Sie die Foren für WordPress.
>

Wenn Sie eingeloggt sind, erscheint folgende Seite:

![hosting](images/WPadminInterface.png){.thumbnail}

> [!success]
>
> Sie können nun mit der Erstellung des Inhalts Ihrer WordPress Website beginnen!
>

## Weiterführende Informationen <a name="go-further"></a>

[offizielle Website WordPress](https://wordpress.org)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
