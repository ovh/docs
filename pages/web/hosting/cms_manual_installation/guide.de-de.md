---
title: "Tutorial - Manuelle Installation eines CMS auf meinem Hosting"
excerpt: "Diese Anleitung erklärt, wie Sie ein CMS manuell auf Ihrem Hosting installieren"
slug: webhosting_manuelle_installation_eines_cms_systems
section: CMS
order: 03
updated: 2023-04-03
---

**Letzte Aktualisierung am 03.04.2023**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel 

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) oder den Herausgeber des CMS zu kontaktieren, wenn Sie Probleme haben. Wir werden Ihnen leider keine Unterstützung anbieten können. Mehr Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>
> Um die verschiedenen Herausgeber der oben genannten CMS zu kontaktieren, finden Sie hier die Links zu ihren offiziellen Seiten:
>
> - [WordPress](https://wordpress.com/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}
>

> [!success]
>
> Um Ihr CMS **automatisch** in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu installieren, lesen Sie unsere Anleitung zur [Installation eines "mit einem Klick" Moduls](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/).
>

**Diese Anleitung erklärt, wie Sie Ihre Website konfigurieren, indem Sie ein CMS manuell installieren.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Über eine [Domainname](https://www.ovhcloud.com/de/domains/)
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Vorstellung der CMS

Um Ihnen bei der Wahl Ihres CMS zu helfen, entdecken Sie eine kurze Beschreibung zu jedem der 4 CMS.

#### WordPress

**WordPress** wird üblicherweise für die Erstellung einer Website oder eines Blogs verwendet. Es basiert auf der PHP-Technologie und enthält eine Vielzahl an Tools wie Rechtschreibprüfung und Plugins für E-Commerce, SEO oder die Sicherheit Ihrer Website.

Weitere Informationen finden Sie auf unserer Seite zu [WordPress Modul](https://www.ovhcloud.com/de/web-hosting/uc-wordpress-website/)

- Offizielle Website von [WordPress](https://https://wordpress.com/){.external}

#### Joomla!

**Joomla!** ist ein CMS für die Erstellung leistungsfähiger Websites und Webanwendungen.

Die Community **Joomla!** ist sehr groß und kann in allen Bereichen des CMS (Hilfe, Dokumentation, technische Hilfe, Themen usw.) Unterstützung und Dienstleistungen anbieten

Weitere Informationen finden Sie auf unserer Seite zum [Joomla! Modul](https://www.ovhcloud.com/de/web-hosting/uc-joomla-website/)

- Offizielle Website von [Joomla!](https://www.joomla.org/){.external}

#### Drupal

**Drupal** ist eine kostenlose Open-Source-Plattform mit PHP, die 2000 eingerichtet wurde. **Drupal** ermöglicht die schnelle Erstellung dynamischer Webseiten.

Weitere Informationen finden Sie auf unserer Seite zum [Drupal Modul](https://www.ovhcloud.com/de/web-hosting/uc-drupal-website/)

- Offizielle Website von [Drupal](https://www.drupal.org/){.external}

#### PrestaShop

CMS wurde 2005 für die Realisierung von E-Commerce-Websites entwickelt. Abgesehen von den gängigen Funktionen von Onlineshops kann diese Software auch mit Modulen, Themen und Modellen personalisiert werden. 

Weitere Informationen finden Sie auf unserer Seite zum [PrestaShop Modul](https://www.ovhcloud.com/de/web-hosting/uc-prestashop-website/)

- Offizielle Website von [PrestaShop](https://www.prestashop.com/){.external}

> [!warning]
>
> Wir möchten Sie daran erinnern, dass OVHcloud bei der Verwendung dieser CMS keinerlei Unterstützung leistet, unabhängig davon, welches CMS Sie wählen. Sollten Sie Schwierigkeiten haben, kontaktieren Sie direkt den Herausgeber des von Ihnen gewählten CMS mithilfe der oben in diesem Tutorial aufgeführten Links.
>

### Schritt 1 - Installation <a name="step1"></a> vorbereiten

Um ein CMS auf Ihrem [Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebot zu installieren sind einige Vorbereitungen erforderlich.

#### 1.1 - Überprüfen Sie die Meldung des "Wurzelverzeichnisses"

Der "Wurzelverzeichnis" entspricht dem Verzeichnis, in dem Ihr künftiges CMS auf Ihrem Hosting installiert wird. Es wird empfohlen, ein leeres Verzeichnis zu wählen, um Konflikte mit Ihren anderen potenziellen Multisite-Lösungen zu vermeiden.

In unserer Anleitung [Eine Multisite auf Ihrem Webhosting hinzufügen](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/) können Sie den Wurzelverzeichnis einsehen, der mit Ihrem CMS verwendet werden soll.

> [!primary]
>
> Wenn Sie einen "Wurzelverzeichnis"-Namen definieren, der auf Ihrem Webhosting nicht existiert, wird er automatisch im FTP-Speicherplatz Ihres Webhostings erstellt.
>

#### 1.2 - Um den "Verweis" der Domain zu überprüfen

- Vergewissern Sie sich, dass der Domainname, den Sie für den Zugriff auf Ihr CMS verwenden, sowie dessen Subdomain im Feld "www"auf die IP-Adresse Ihres [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebots verweist.

Um die IP-Adresse Ihres Webhosting-Angebots abzurufen, loggen Sie sich im Bereich `Web Cloud`{.action} in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr Webhosting-Angebot im Bereich `Hosting-Pakete`{.action}<br>
Im Kasten `Allgemeine Informationen`{.action} rechts finden Sie die IP-Adresse Ihres Webhostings im Formular `IPv4`{.action}.

Wenn die aktive DNS-Zone Ihrer Domain in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwaltet wird, vergleichen Sie die IP-Adresse Ihres Hostings mit der IP-Adresse in der DNS-Zone Ihrer Domain und erhalten Sie die zugehörige Dokumentation zu den [OVHcloud DNS Zonen](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/).

> [!warning]
>
> Wenn Sie die `CDN Optionen`{.action} oder die gesamte `IP des Landes`{.action} für Ihre Domain aktiviert haben, verwenden Sie die entsprechende IP-Adresse in unserer Dokumentation zur Ermittlung von [allen IP-Adressen unserer Webhosting Pakete](https://docs.ovh.com/de/hosting/verzeichnis-der-ip-adressen-web-hosting-cluster/).
>

Sollten Sie diese Überprüfungen nicht durchführen können, kontaktieren Sie den Hosting-Anbieter Ihrer aktiven DNS Zone, um den Verweis Ihrer Domain zu aktualisieren.

> [!warning]
>
> Alle Änderungen in Ihrer DNS Zone haben eine Propagationszeit von 4 bis 24 Stunden.
>

- Rufen Sie [die für die Verbindung mit dem FTP-Bereich Ihres Webhostings notwendigen Informationen](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/#schritt-1-erforderliche-verbindungsinformationen-abrufen) ab.
- Rufen Sie die Datenbank Ihres Webhosting Angebots ab, wenn es bereits existiert, oder erstellen Sie eine Datenbank mit unserer [Dokumentation](https://docs.ovh.com/de/hosting/datenbank-erstellen/).

#### 1.3 - Den kostenlosen FTP Client "FileZilla" installieren

Wenn Sie noch keinen FTP-Client verwenden, können Sie Filezilla verwenden. Der kostenlose Download-Link sowie ein Tutorial zu seiner Verwendung finden Sie in unserer Anleitung zur [Verwendung von FileZilla mit Ihrem OVHcloud Webhosting](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/).

### 1.4 - Eine Datenbank <a name="step1-4"></a> erstellen

CMS benötigen eine Datenbank, um zu funktionieren. Unsere [Webhosting](https://www.ovhcloud.com/de/web-hosting/)-Angebote enthalten diese, mit Ausnahme von [Start 10M Gratis-Hosting](https://www.ovhcloud.com/de/domains/free-web-hosting/).

Verwenden Sie unsere Anleitung zur [Erstellung einer Datenbank über Ihr Webhosting Angebot](https://docs.ovh.com/de/hosting/datenbank-erstellen/).

Wenn Sie über ein Web Cloud Databases Angebot mit MySQL oder MariaDB verfügen und dieses für die manuelle Installation Ihres CMS verwenden möchten, lesen Sie unsere Anleitung zur [Erstellung einer Datenbank auf einem Web Cloud Databases](https://docs.ovh.com/de/clouddb/datenbank-und-benutzer-erstellen/#datenbank-erstellen).

Sobald die Datenbank erstellt wurde, rufen Sie die Verbindungseinstellungen (Server, Name der Datenbank, Benutzername und Passwort) ab und speichern Sie diese für [Schritt 3](#step3) dieser Anleitung.

> [!primary]
>
> Wenn Sie Ihr CMS mit einer bereits existierenden Datenbank installieren möchten, können Sie Ihre Verbindungseinstellungen zu Ihrer Datenbank direkt in den Dateien der Website abrufen, die zu dieser gehören.
>
> Wenn es sich auch um ein identisches CMS handelt, das Sie installieren müssen, können Sie die Konfigurationsdateien in Ihrem [FTP-Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) anhand [dieser Anleitung](https://docs.ovh.com/de/hosting/datenbank-passwort-aendern/#schritt-3-passwort-der-datenbank-ihrer-website-in-ihrer-konfigurationsdatei-andern) identifizieren.
>
> Loggen Sie sich anschließend in Ihre Datenbank ein, um die "Präfixe" der bereits enthaltenen Tabellen zu identifizieren. So können Sie kein Tabellenpräfix auswählen, das bereits von einer anderen Ihrer Seiten verwendet wird.
>
> - Um sich mit Ihrer Datenbank zu Ihrem Webhosting Angebot zu verbinden, lesen Sie [diese Anleitung](https://docs.ovh.com/de/hosting/datenbank-erstellen/#auf-das-phpmyadmin-interface-zugreifen).
> - Um sich mit einer Datenbank in einer Cloud Databases zu verbinden, lesen Sie [dieser Anleitung](https://docs.ovh.com/de/clouddb/datenbank-verbindung-auf-bdd/).
>

### Schritt 2 - Die manuelle Installation starten

#### 2.1 - Die Quelldateien Ihres CMS abrufen

Gehen Sie auf die Website des Herausgebers des CMS, den Sie für das Herunterladen der Quelldateien ausgewählt haben.

Nachfolgend finden Sie die Links zu den Downloads der CMS, die in dieser Anleitung beschrieben werden:

- [WordPress](https://wordpress.org/download/#download-install){.external}
- [Joomla!](https://downloads.joomla.org/){.external}
- [Drupal](https://www.drupal.org/download){.external}
- [Prestashop](https://www.prestashop.com/en/download){.external}

> [!primary]
>
> Erhalten Sie die PHP Version sowie die MySQL oder MariaDB Version, die für den Betrieb Ihres CMS erforderlich sind.
>
> Sehen Sie hierzu den Link zur offiziellen Seite des CMS, das Sie installieren möchten:
>
> - [WordPress](https://wordpress.org/about/requirements/){.external}
> - [Joomla!](https://downloads.joomla.org/technical-requirements){.external}
> - [Drupal](https://www.drupal.org/docs/getting-started/system-requirements/php-requirements){.external}
> - [Prestashop](https://www.prestashop.com/en/system-requirements){.external}
>
> Konfigurieren Sie anschließend die PHP-Version auf Ihrem Webhosting mithilfe unserer Anleitung zu [Änderung der PHP-Version eines Webhostings](https://docs.ovh.com/de/hosting/konfiguration_von_php_fur_ein_ovh_webhosting_2014/).
>
> Wenn Sie bereits eine PHP-Version verwenden, die gleich oder größer als die erforderliche ist, ist keine Änderung erforderlich.
>

Folgen Sie den Anweisungen des Herausgebers Ihres CMS, bis die Quelldateien auf Ihren Computer heruntergeladen werden, und lesen Sie dieses Tutorial weiter.

> [!warning]
>
> Wenn Sie weitere Websites auf Ihrem Webhosting Angebot haben, überprüfen Sie, dass diese mit der von Ihnen für Ihr neues CMS gewählten PHP-Version kompatibel sind.
>

#### 2.2 - Die in einem neuen Ordner heruntergeladenen Quelldateien dekomprimieren

>[!primary]
>
> Für eine einfachere Nutzung ersetzen Sie in diesem Schritt den Ordnernamen "**CMS**" durch den Namen des CMS, das Sie für eine einfachere Nutzung ausgewählt haben. (**WordPress**, **Joomla!**, **Drupal**, **PrestaShop**).
>

Die heruntergeladene Datei ist im Format **komprimiert** (gezippt). Erstellen Sie einen Ordner mit dem Titel "**CMS**" auf Ihrem Computer und **entkomprimieren** Sie den Inhalt der im Ordner heruntergeladenen Datei ***CMS**".

Öffnen Sie hierzu den Ordner, in den Sie die komprimierte Datei heruntergeladen haben, klicken Sie mit der rechten Maustaste auf die betreffende Datei und wählen Sie "Alles extrahieren... "

Geben Sie den Ordner "**CMS**" für den Bestimmungsort ein, um Ihre Dateien aus diesem Ordner zu extrahieren.

#### 2.3 - Die Quelldateien des "CMS" Ordners auf das "Wurzelverzeichnis" auf Ihrem Webhosting verschieben

Nachdem Sie die Dateien in Ihrem Ordner "**CMS**" dekomprimiert haben [Via FTP mit Ihrem Speicherplatz verbinden](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/), mithilfe des [FTP-FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/), kopieren Sie die Dateien in dem Ordner "**CMS**" in den "Wurzelordner", den Sie in [Schritt 1](#step1) dieser Anleitung.

Hier ein Beispiel mit CMS *WordPress*:

![hosting](images/wpfl2.png){.thumbnail}

>[!warning]
>
> Wir empfehlen Ihnen dringend, ein leeres "Wurzelverzeichnis" zu verwenden, um Konflikte mit einer anderen Ihrer Websites zu vermeiden. Bevor Sie die Dateien verschieben, überprüfen Sie, dass der Zielordner keine Elemente enthält.
>

>[!primary]
>
> Wenn das von Ihnen definierte "Wurzelverzeichnis" nicht automatisch bei den in [Schritt 1](#step1) beschriebenen Aktionen erstellt wurde , können Sie es über FileZilla erstellen.
>
> Es kann einige Minuten dauern, bis die Dateien auf Ihrem Hosting gespeichert sind.
>
> Überprüfen Sie nach Abschluss des Transfers, ob alle Elemente des lokalen Ordners "**CMS**" korrekt in das "Wurzelverzeichnis"Ihres Webhostings übertragen wurden.
>

**Sonderfall**: Wenn Sie über einen begrenzten Internetdurchsatz und/oder ein Webhosting-Angebot **Pro** oder höher verfügen, können Sie die Verbindung in **SSH** nutzen, um die Quelldateien Ihres CMS in den Speicherplatz Ihres Webhostings zu legen. 

Um sich via SSH mit Ihrem Hosting zu verbinden, lesen Sie unsere Anleitung zur [SSH-Verbindung über ein OVHcloud Shared Hosting](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/).

Wenn Sie in **SSH** eingeloggt sind, führen Sie folgende Befehle aus:

- Gehen Sie in den "Wurzelverzeichnis", in dem Sie Ihr CMS auf Ihrem Webhosting installieren möchten:

```bash
cd NameOfYourTargetFolder
```

- Rufen Sie die Quelldateien Ihres CMS direkt über Ihren "Wurzelverzeichnis"mit dem Befehl zu Ihrem gewählten CMS ab:

> [!tabs]
> **WordPress**
>> 
>> ```bash
>> wget http://wordpress.org/latest.tar.gz
>> ```
>>
>> **latest** ermöglicht die automatische Installation der neuesten CMS-Version.
>>
> **Joomla!**
>> 
>> ```bash
>> wget https://downloads.joomla.org/cms/joomla4/4-2-8/Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
>> **Joomla4** und **4-2-8** entsprechen dem Datum der letzten Version von Joomla! verfügbar.
>> Ersetzen Sie diese Werte durch die Werte, die Sie installieren möchten.
>>
> **Drupal**
>> 
>> ```bash
>> wget https://ftp.drupal.org/files/projects/admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
>> **8.x-2.4** entspricht zum Zeitpunkt der letzten verfügbaren Drupal-Version.
>> Ersetzen Sie diesen Wert mit dem Wert, den Sie installieren möchten.
>> 
> **PrestaShop**
>> 
>> ```bash
>> wget https://github.com/PrestaShop/PrestaShop/archive/1.7.8.8.tar.gz
>> ```
>> 
>> **1.7.8.8** entspricht zum Zeitpunkt der letzten verfügbaren PrestaShop Version. Ersetzen Sie diesen Wert mit dem Wert, den Sie installieren möchten.
>>

- Dekomprimieren Sie die Quelldateien Ihres CMS in Ihrem "Wurzelverzeichnis" mit dem Befehl, der dem von Ihnen gewählten CMS entspricht:

> [!tabs]
> **WordPress**
>> 
>> ```bash
>> tar xvf latest.tar.gz
>> ```
>> 
> **Joomla!**
>> 
>> ```bash
>> tar xvf Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
> **Drupal**
>> 
>> ```bash
>> tar xvf admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
> **PrestaShop**
>> 
>> ```bash
>> tar xvf 1.7.8.8.tar.gz
>> ```
>> 

- In Ihrem "Wurzelverzeichnis"wird ein Verzeichnis "**CMS**"erstellt. Verschieben Sie den Inhalt auf die Basis Ihres "Wurzelverzeichnisses":

```bash
mv CMS/* ./
```

- Löschen Sie das leere Verzeichnis "**CMS**":

```bash
rmdir ./CMS/
```

- Löschen Sie die komprimierte Datei für das von Ihnen gewählte CMS:

> [!tabs]
> **WordPress**
>> ```bash
>> rm -f latest.tar.gz
>> ```
>> 
> **Joomla!**
>> ```bash
>> rm -f Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
> **Drupal**
>> ```bash
>> rm -f admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
> **PrestaShop**
>> ```bash
>> rm -f 1.7.8.8.tar.gz
>> ```
>> 

### Schritt 3 - manuelle Installation <a name="step3"></a> abschließen

> [!success]
>
> Bevor Sie mit der Installation fortfahren, leeren Sie den Cache Ihres Browsers, um Fehler zu vermeiden.
>

Ab diesem Schritt unterscheidet sich das Vorgehen je nach zuvor gewähltem CMS.

Um mit der Installation fortzufahren, klicken Sie auf eine der folgenden Links in der Anleitung zu Ihrem CMS:

- [Die Installation von Wordpress abschließen](https://docs.ovh.com/de/hosting/cms_manually_install_wordpress/)
- [Installation von Joomla! abschließen](https://docs.ovh.com/de/hosting/cms_manually_install_joomla/)
- [Drupal-Installation abschließen](https://docs.ovh.com/de/hosting/cms_manuelle_installation_von_drupal/)
- [PrestaShop fertig installieren](https://docs.ovh.com/de/hosting/cms_manually_install_prestashop/)

## Weiterführende Informationen <a name="go-further"></a>

[Migration Ihrer Website und E-Mails zu OVHcloud](https://docs.ovh.com/de/hosting/migration-ihrer-website-zu-ovh/)

[Eine Website auf einem Webhosting online stellen](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/)

[Mehrere Websites auf einem Webhosting einrichten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.