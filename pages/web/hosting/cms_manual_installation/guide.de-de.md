---
title: "Tutorial - Manuelle Installation eines CMS auf einem Webhosting"
excerpt: "Erfahren Sie hier, wie Sie ein CMS manuell auf Ihrem Hosting installieren"
slug: webhosting_manuelle_installation_eines_cms_systems
section: CMS
order: 03
updated: 2023-04-03
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 03.04.2023**

## Ziel 

Dieses Tutorial hilft Ihnen Schritt für Schritt bei der manuellen Installation eines CMS (Content Management System) auf Ihrem Webhosting.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) oder den Herausgeber des CMS zu kontaktieren. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
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
> Um Ihr CMS **automatisch** in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu installieren, lesen Sie unsere Anleitung zur [Installation Ihrer Website mit 1-Klick-Modulen](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/).
>

**Diese Anleitung erklärt, wie Sie Ihre Website konfigurieren, indem Sie ein CMS manuell installieren.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Sie verfügen über einen [Domainnamen](https://www.ovhcloud.com/de/domains/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Vorstellung der CMS

Um Ihnen bei der Wahl Ihres CMS zu helfen, finden Sie hier eine kurze Beschreibung zu jedem der 4 CMS.

#### WordPress

**WordPress** wird üblicherweise für die Erstellung einer Website oder eines Blogs verwendet. Es basiert auf PHP und enthält eine Vielzahl an Tools wie Rechtschreibprüfung und Plugins für E-Commerce, SEO sowie die Sicherheit Ihrer Website.

Weitere Informationen finden Sie auf unserer Seite zum [WordPress Modul](https://www.ovhcloud.com/de/web-hosting/uc-wordpress-website/).

- Offizielle Website von [WordPress](https://https://wordpress.com/){.external}

#### Joomla!

**Joomla!** ist ein CMS für die Erstellung leistungsfähiger Websites und Webanwendungen.

Die Community **Joomla!** ist sehr groß und kann für alle Bereichen des CMS (Dokumentation, technische Hilfe, Themes etc.) Unterstützung und Dienstleistungen anbieten.

Weitere Informationen finden Sie auf unserer Seite zum [Joomla! Modul](https://www.ovhcloud.com/de/web-hosting/uc-joomla-website/).

- Offizielle Website von [Joomla!](https://www.joomla.org/){.external}

#### Drupal

**Drupal** ist eine kostenlose Open-Source-Plattform, die auf PHP basiert. **Drupal** existiert seit 2000 und ermöglicht die schnelle Erstellung dynamischer Webseiten.

Weitere Informationen finden Sie auf unserer Seite zum [Drupal Modul](https://www.ovhcloud.com/de/web-hosting/uc-drupal-website/).

- Offizielle Website von [Drupal](https://www.drupal.org/){.external}

#### PrestaShop

PrestaShop wurde 2005 für die Realisierung von E-Commerce-Websites entwickelt. Abgesehen von den gängigen Funktionen von Onlineshops kann diese Software auch mit Modulen, Themes und Templates personalisiert werden. 

Weitere Informationen finden Sie auf unserer Seite zum [PrestaShop Modul](https://www.ovhcloud.com/de/web-hosting/uc-prestashop-website/).

- Offizielle Website von [PrestaShop](https://www.prestashop.com/){.external}

> [!warning]
>
> Wir möchten Sie daran erinnern, dass OVHcloud bei der Verwendung jeglicher CMS keinerlei Unterstützung leisten kann. Sollten Sie Schwierigkeiten haben, kontaktieren Sie den Herausgeber des von Ihnen gewählten CMS über die Verweise oben in diesem Tutorial.
>

### Schritt 1: Installation vorbereiten <a name="step1"></a> 

Um ein CMS auf Ihrem [Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebot zu installieren sind einige Vorbereitungen erforderlich.

#### 1.1 Überprüfen Sie das Wurzelverzeichnis

Das Wurzelverzeichnis entspricht dem Ordner, in dem Ihr CMS auf Ihrem Hosting installiert wird. Es wird empfohlen, ein leeres Verzeichnis zu wählen, um potenzielle Konflikte mit anderen Multisites zu vermeiden.

In unserer Anleitung "[Mehrere Websites auf einem Webhosting einrichten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/)" erfahren Sie, wie Sie die Verzeichnisse für Ihre Websites bzw. CMS verwalten.

> [!primary]
>
> Wenn Sie einen Namen für das Wurzelverzeichnis eingeben, der auf Ihrem Webhosting nicht existiert, wird automatisch ein neues Verzeichnis im FTP-Speicherplatz Ihres Webhostings erstellt.
>

#### 1.2 DNS-Auflösung des Domainnamens überprüfen

- Vergewissern Sie sich, dass der Domainname, den Sie für den Zugriff auf Ihr CMS verwenden, sowie dessen "www"-Subdomain auf die IP-Adresse Ihres [OVHcloud Webhostings](https://www.ovhcloud.com/de/web-hosting/) verweisen.

Um die IP-Adresse Ihres Webhostings zu erfahren, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr Webhosting im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} aus.<br>
Im Kasten `Allgemeine Informationen`{.action} finden Sie die IP-Adresse Ihres Webhostings im Eintrag `IPv4`{.action}.

Wenn die aktive DNS-Zone Ihres Domainnamens in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwaltet wird, vergleichen Sie die IP-Adresse Ihres Hostings mit der in der DNS-Zone Ihres Domainnamens eingetragenen. Verwenden Sie dazu unsere Dokumentation zur [Verwaltung von OVHcloud DNS-Zonen](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/).

> [!warning]
>
> Wenn Sie eine der Optionen `CDN`{.action} oder `IP des Landes`{.action} für Ihren Domainnamen aktiviert haben, verwenden Sie die stattdessen die IP-Adresse, die Sie in unserer [Dokumentation zu IP-Adressen der Webhosting-Cluster](https://docs.ovh.com/de/hosting/verzeichnis-der-ip-adressen-web-hosting-cluster/) finden können.
>

Sollten Sie diese Maßnahmen nicht im Kundencenter durchführen können, kontaktieren Sie den Anbieter, der Ihre aktive DNS-Zone verwaltet, um Ihre Domaineinstellungen zu ändern.

> [!warning]
>
> Alle Änderungen in Ihrer DNS-Zone haben eine Propagationszeit von 4 bis 24 Stunden.
>

- Rufen Sie die für die [Verbindung mit dem FTP-Bereich Ihres Webhostings](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/#schritt-1-erforderliche-verbindungsinformationen-abrufen) notwendigen Informationen ab.
- Beziehen Sie die Datenbank-Verbindungsinformationen Ihres Webhostings, oder erstellen Sie eine neue Datenbank mithilfe unserer [Dokumentation](https://docs.ovh.com/de/hosting/datenbank-erstellen/).

#### 1.3 Den kostenlosen FTP-Client FileZilla installieren

Wenn Sie noch keinen FTP-Client verwenden, können Sie FileZilla installieren. Der Download-Link sowie eine Anleitung zur Verwendung dieser kostenfreien Software finden Sie in unserem Tutorial zur [Verwendung von FileZilla mit Ihrem OVHcloud Webhosting](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/).

### 1.4 Eine Datenbank erstellen <a name="step1-4"></a> 

CMS benötigen eine Datenbank, um zu funktionieren. Mit unseren [Webhostings](https://www.ovhcloud.com/de/web-hosting/) erhalten Sie Inklusiv-Datenbanken, mit Ausnahme des [Start 10M Gratis-Hostings](https://www.ovhcloud.com/de/domains/free-web-hosting/).

Verwenden Sie unsere Anleitung zur [Erstellung einer Datenbank über Ihr Webhosting](https://docs.ovh.com/de/hosting/datenbank-erstellen/).

Wenn Sie das Angebot Web Cloud Databases mit MySQL oder MariaDB nutzen und dieses für die manuelle Installation Ihres CMS verwenden möchten, lesen Sie unsere Anleitung zur [Erstellung einer Datenbank mit Web Cloud Databases](https://docs.ovh.com/de/clouddb/datenbank-und-benutzer-erstellen/#datenbank-erstellen).

Sobald die Datenbank erstellt wurde, rufen Sie die Verbindungseinstellungen (Server, Name der Datenbank, Benutzername und Passwort) ab und speichern Sie diese für [Schritt 3](#step3) dieser Anleitung.

> [!primary]
>
> Wenn Sie Ihr CMS mit einer bereits existierenden Datenbank installieren möchten, können Sie die Verbindungsdaten Ihrer Datenbank direkt in den Dateien der Website abrufen, die die Datenbank nutzt.
>
> Wenn es sich dabei um das gleiche CMS handelt, können Sie die Konfigurationsdateien über Ihren [FTP-Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) anhand [dieser Anleitung](https://docs.ovh.com/de/hosting/datenbank-passwort-aendern/#schritt-3-passwort-der-datenbank-ihrer-website-in-ihrer-konfigurationsdatei-andern) identifizieren.
>
> Loggen Sie sich anschließend in Ihre Datenbank ein, um die Präfixe der existierenden Tabellen zu identifizieren. So vermeiden Sie, dass bereits vorhandene Tabellenpräfixe für das neue CMS genutzt werden und dadurch Fehler verursachen.
>
> - Um sich mit Ihrer Webhosting-Datenbank zu verbinden, folgen Sie [dieser Anleitung](https://docs.ovh.com/de/hosting/datenbank-erstellen/#auf-das-phpmyadmin-interface-zugreifen).
> - Um sich mit einer Datenbank von Web Cloud Databases zu verbinden, folgen Sie [dieser Anleitung](https://docs.ovh.com/de/clouddb/datenbank-verbindung-auf-bdd/).
>

### Schritt 2: Die manuelle Installation starten

#### 2.1 Die Quelldateien Ihres CMS abrufen

Gehen Sie auf die offizielle Website für Ihr gewähltes CMS, um die Quelldateien herunterzuladen.

Nachfolgend finden Sie die Download-Seiten für die CMS, die in dieser Anleitung beschrieben werden:

- [WordPress](https://wordpress.org/download/#download-install){.external}
- [Joomla!](https://downloads.joomla.org/){.external}
- [Drupal](https://www.drupal.org/download){.external}
- [Prestashop](https://www.prestashop.com/en/download){.external}

> [!primary]
>
> Identifizieren Sie die PHP-Version sowie die Version von MySQL oder MariaDB, die für den Betrieb Ihres CMS erforderlich sind.
>
> Sie erhalten diese Information auf der offiziellen Seite des CMS, das Sie installieren möchten:
>
> - [WordPress](https://wordpress.org/about/requirements/){.external}
> - [Joomla!](https://downloads.joomla.org/technical-requirements){.external}
> - [Drupal](https://www.drupal.org/docs/getting-started/system-requirements/php-requirements){.external}
> - [Prestashop](https://www.prestashop.com/en/system-requirements){.external}
>
> Konfigurieren Sie anschließend die PHP-Version mithilfe unserer Anleitung zur [Änderung der PHP-Version eines Webhostings](https://docs.ovh.com/de/hosting/konfiguration_von_php_fur_ein_ovh_webhosting_2014/).
>
> Wenn Sie bereits eine kompatible PHP-Version verwenden, also die mindestens erforderliche Version oder eine neuere, ist keine Änderung erforderlich.
>

Folgen Sie den Anweisungen auf der Webseite Ihres gewählten CMS, bis zum Herunterladen der Quelldateien auf Ihren Computer. Fahren Sie dann mit Schritt 2.2 in diesem Tutorial fort.

> [!warning]
>
> Wenn Sie zusätzliche Websites auf Ihrem Webhosting bereitstellen, überprüfen Sie, dass diese mit der von Ihnen für Ihr neues CMS gewählten PHP-Version kompatibel sind.
>

#### 2.2 Die Quelldateien entpacken

>[!primary]
>
> Zur vereinfachten Identifizierung können Sie in diesem Schritt den Ordnernamen "**CMS**" durch den Namen des zu installierenden CMS ersetzen (**WordPress**, **Joomla!**, **Drupal**, **PrestaShop**).
>

Die heruntergeladenen Dateien befinden sich in einem komprimierten Archiv. Erstellen Sie einen Ordner mit dem Namen "**CMS**" auf Ihrem Computer und **entpacken** Sie den Inhalt der Archivdatei in diesen Ordner.

Öffnen Sie hierzu Ihr Download-Verzeichnis, klicken Sie mit der rechten Maustaste auf die heruntergeladene CMS-Datei und wählen Sie "Alle extrahieren..."

Wählen Sie den Ordner "**CMS**" als Zielverzeichnis für die Extraktion der Dateien.

#### 2.3 Die Quelldateien des "CMS"-Ordners zum Wurzelverzeichnis auf Ihrem Webhosting verschieben

Nachdem Sie die Dateien in Ihrem Ordner "**CMS**" dekomprimiert haben, stellen Sie eine [FTP-Verbindung mit Ihrem Webhosting her](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/), etwa mithilfe des [Clients FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/). Kopieren Sie die Dateien aus dem Ordner "**CMS**" zum Wurzelverzeichnis für Ihr CMS, das Sie in [Schritt 1](#step1) dieser Anleitung erstellt haben.

Hier ein Beispiel für *WordPress*:

![hosting](images/wpfl2.png){.thumbnail}

>[!warning]
>
> Wir empfehlen dringend, ein leeres Wurzelverzeichnis zu verwenden, um Konflikte mit einer anderen Website (Multisite) zu vermeiden. Bevor Sie die Dateien verschieben, überprüfen Sie, dass der Zielordner tatsächlich leer ist.
>

>[!primary]
>
> Wenn das von Ihnen definierte Wurzelverzeichnis nicht automatisch mit den in [Schritt 1](#step1) beschriebenen Aktionen erstellt wurde , können Sie es über FileZilla erstellen.
>
> Es kann einige Minuten dauern, bis die Dateien auf Ihr Hosting übertragen sind.
>
> Überprüfen Sie nach Abschluss des Transfers, ob alle Elemente des lokalen Ordners "**CMS**" korrekt in das Wurzelverzeichnis Ihres Webhostings übertragen wurden.
>

**Sonderfall**: Wenn Sie über eine begrenzte Internetbandbreite und/oder ein Webhosting-Angebot **Pro** oder höher verfügen, können Sie auch eine **SSH**-Verbindung nutzen, um die Quelldateien Ihres CMS zum Speicherplatz Ihres Webhostings zu übertragen.

Um sich via SSH mit Ihrem Hosting zu verbinden, lesen Sie unsere Anleitung zur [SSH-Verbindung zu einem OVHcloud Webhosting](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/).

Wenn Sie über **SSH** eingeloggt sind, führen Sie die nachfolgenden Befehle aus.

- Wechseln Sie zum Wurzelverzeichnis, in dem Sie das CMS auf Ihrem Webhosting installieren möchten:

```bash
cd Verzeichnisname
```

- Übertragen Sie die Quelldateien des CMS in Ihr Wurzelverzeichnis, mit dem entsprechenden Befehl für das gewählte CMS:

> [!tabs]
> **WordPress**
>> 
>> ```bash
>> wget http://wordpress.org/latest.tar.gz
>> ```
>>
>> **latest** entspricht immer der neuesten WordPress-Version.
>>
> **Joomla!**
>> 
>> ```bash
>> wget https://downloads.joomla.org/cms/joomla4/4-2-8/Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
>> **Joomla4** und **4-2-8** beziehen sich die letzte bis dato verfügbare Version.
>> Ersetzen Sie diesen Wert mit der aktuellen bzw. der Version, die Sie installieren möchten.
>>
> **Drupal**
>> 
>> ```bash
>> wget https://ftp.drupal.org/files/projects/admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
>> **8.x-2.4** ist die zum Zeitpunkt neueste verfügbare Drupal-Version.
>> Ersetzen Sie diesen Wert mit der aktuellen bzw. der Version, die Sie installieren möchten.
>> 
> **PrestaShop**
>> 
>> ```bash
>> wget https://github.com/PrestaShop/PrestaShop/archive/1.7.8.8.tar.gz
>> ```
>> 
>> **1.7.8.8** entspricht zum Zeitpunkt der letzten verfügbaren PrestaShop-Version. Ersetzen Sie diesen Wert mit der aktuellen bzw. der Version, die Sie installieren möchten.
>>

- Dekomprimieren Sie die Quelldateien Ihres CMS in Ihrem Wurzelverzeichnis, mit dem entsprechenden Befehl für das gewählte CMS:

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

- Verschieben Sie den Inhalt des Ordners "**CMS**" zum Wurzelverzeichnis:

```bash
mv CMS/* ./
```

- Löschen Sie das leere Verzeichnis "**CMS**":

```bash
rmdir ./CMS/
```

- Löschen Sie das Archiv mit den Quelldateien des CMS:

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

### Schritt 3: Manuelle Installation abschließen <a name="step3"></a> 

> [!success]
>
> Bevor Sie mit der Installation fortfahren, leeren Sie den Cache Ihres Browsers, um Fehler zu vermeiden.
>

Der nächste Schritt ist die Einrichtung des gewählten Moduls.

Um mit der Installation fortzufahren, folgen Sie der passenden Anleitung zu Ihrem CMS:

- [Installation von WordPress abschließen](https://docs.ovh.com/de/hosting/cms_manually_install_wordpress/)
- [Installation von Joomla! abschließen](https://docs.ovh.com/de/hosting/cms_manually_install_joomla/)
- [Installation von Drupal abschließen](https://docs.ovh.com/de/hosting/cms_manuelle_installation_von_drupal/)
- [Installation von PrestaShop abschließen](https://docs.ovh.com/de/hosting/cms_manually_install_prestashop/)

## Weiterführende Informationen <a name="go-further"></a>

[Migration Ihrer Website und E-Mails zu OVHcloud](https://docs.ovh.com/de/hosting/migration-ihrer-website-zu-ovh/)

[Eine Website auf einem Webhosting online stellen](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/)

[Mehrere Websites auf einem Webhosting einrichten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
