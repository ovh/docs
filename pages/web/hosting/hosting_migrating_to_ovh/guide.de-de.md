---
title: Migration Ihrer Website und E-Mails zu OVH
slug: migration-ihrer-website-zu-ovh
excerpt: "Hier erfahren Sie, wie Sie Ihre Website, E-Mails und Domains ohne Dienstunterbrechung zu OVHcloud migrieren."
section: 'Erste Schritte'
order: 08
---

**Letzte Aktualisierung am 24.11.2022**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

In dieser Anleitung werden die verschiedenen Aktionen beschrieben, die durchgeführt werden müssen, um Ihre gesamte Website, Domain und E-Mail-Adressen bei OVHcloud ohne Dienstunterbrechung zu migrieren.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

## Voraussetzungen

- Sie haben Zugriff auf die Verwaltung der Domain Ihrer Website (diese muss ebenfalls seit mehr als 60 Tagen existieren).
- Sie haben Zugriff auf die aktive DNS-Zone (Domain Name System) Ihrer Domain.
- Sie haben Zugriff auf die Dateien und Datenbanken Ihrer Website bei Ihrem aktuellen Hosting-Anbieter.
- Sie verfügen über die Login-Daten (Benutzer, Passwort, Server) Ihrer aktuellen E-Mail-Adressen.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) eingeloggt.

## In der praktischen Anwendung

> [!success]
>
> Die Anweisungen in dieser Anleitung beziehen sich auf verschiedene Produkte aus dem Web Cloud Universum. Wir empfehlen Ihnen, alle nachstehenden Schritte zu lesen **bevor** Sie Ihre Dienste migrieren.
>

Um Ihre Website und E-Mails zu OVHcloud zu migrieren ** ohne Unterbrechung des Dienstes** erfordert es ein präzises Verfahren in 10 Schritten:

- [Schritt 1: Hosting und E-Mail-Adressen bei OVHcloud bestellen](#step1)
- [Schritt 2: eine DNS-Zone für Ihre Domain bei OVHcloud erstellen und vorkonfigurieren](#step2)
- [Schritt 3: ein vollständiges Backup Ihrer Website abrufen](#step3)
- [Schritt 4: Backup Ihrer Website auf Ihr OVHcloud Hosting-Angebot importieren](#step4)
- [Schritt 5: Ihre E-Mail-Adressen bei OVHcloud auf die gleiche Art neu erstellen](#step5)
- [Schritt 6: OVHcloud E-Mail-Server in der aktiven DNS-Zone Ihrer Domain angeben](#step6)
- [Schritt 7: Transfer des Inhalts Ihrer alten E-Mail-Adressen zu Ihren neuen Adressen bei OVHcloud](#step7)
- [Schritt 8: Ihre E-Mail-Software rekonfigurieren](#step8)
- [Schritt 9: die aktiven DNS-Server Ihrer Domain durch die von OVHcloud ersetzen](#step9)
- [Schritt 10: Ihre Domain zu OVHcloud transferieren](#step10)

Folgen Sie diesen 10 Schritten **in der Reihenfolge*** werden Sie keine Dienstunterbrechung für den Zugriff auf Ihre Website und den Empfang Ihrer neuen E-Mails haben.

Abhängig von Ihrem Registrar, Ihrem Hosting-Anbieter oder Ihrem E-Mail-Anbieter kann es jedoch sein, dass diese den Zugang zu Ihren alten Dienstleistungen sperren, wenn sie feststellen, dass Ihre Domain nicht mehr über ihre Infrastrukturen konfiguriert ist.<br>
In diesem Fall kann es zu einer Dienstunterbrechung kommen.

Sollte es zu einer solchen Unterbrechung kommen, so wird diese Anleitung so gestaltet, dass die Dauer der Unterbrechung minimiert wird.

### Schritt 1: Hosting und E-Mail-Adressen bei OVHcloud bestellen <a name="step1"></a>

Mehrere OVHcloud Shared Hosting Angebote enthalten ein "MX Plan" E-Mail-Angebot. Mit diesem E-Mail Angebot können E-Mail-Adressen mit einem Speicherplatz von maximal 5 GB für jede Adresse erstellt werden. Wählen Sie aus den unten stehenden Hosting-Angeboten die PHP-Version, die SQL-Version, die Anzahl der E-Mail-Adressen, die Sie benötigen, und die Größe Ihrer Website aus, die Sie migrieren möchten:

- Hosting [Basic](https://www.ovhcloud.com/de/web-hosting/personal-offer/) mit **10 E-Mail-Adressen** "MX Plan"
- Hosting [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) mit **100 E-Mail-Adressen** "MX Plan"
- Hosting [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/) mit **1000 E-Mail-Adressen** "MX Plan". Dieses Angebot wurde im Jahr 4 als "Subangebote"angeboten.
- Hosting [Cloud Web](https://www.ovhcloud.com/de/web-hosting/cloud-web-offer/) mit **200 E-Mail-Adressen** "MX Plan". Dieses Angebot wird von Anwendungsentwicklern verwendet.

Wenn Sie Ihr Webhosting-Angebot ausgewählt haben, klicken Sie, wenn Sie noch nicht Kunde bei OVHcloud sind, auf den Button `Bestellen`{.action} auf den oben stehenden Geschäftsseiten. Folgen Sie den Bestellschritten **ohne den Transfer Ihrer Domain zu beantragen**.

Sie können die Bestellung auch über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ausführen. Wenn Sie eingeloggt sind, klicken Sie auf den Bereich `Web Cloud`{.action}, klicken Sie dann im oberen linken Bereich auf den Button `Bestellen`{.action} und dann auf den Bereich `Hosting`{.action}. Folgen Sie den Bestellschritten **ohne den Transfer Ihrer Domain zu beantragen**.

Sobald die Zahlung bestätigt wurde, wird die Installation des Hostings gestartet. Es wird eine E-Mail an Ihre Kontakt-E-Mail-Adresse versandt. Diese enthält die Zugangsdaten zum FTP-Speicherplatz (File Transfer Protocol) Ihres Webhostings.

> [!primary]
>
> OVHcloud bietet zusätzlich zum "MX Plan" weitere E-Mail-Angebote an. Sie können zum Beispiel "MX Plan" Adressen ["E-Mail-Pro"](https://www.ovhcloud.com/de/emails/email-pro/) und/oder Accounts ["Exchange"](https://www.ovhcloud.com/de/emails/hosted-exchange/) mit E-Mail-Adressen kombinieren.
>

### Schritt 2: eine DNS-Zone für Ihre Domain bei OVHcloud erstellen und vorkonfigurieren <a name="step2"></a>

Wenn Ihr Webhosting eingerichtet ist, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und erstellen Sie eine DNS-Zone für Ihre Domain **ohne die "www"**. Weitere Informationen finden Sie in unserer Anleitung zur [Erstellung einer DNS-Zone bei OVHcloud](https://docs.ovh.com/de/domains/erstellung_einer_dns_zone_fur_eine_externe_domain/).

Sobald die DNS-Zone eingerichtet ist, können Sie sich in unserer Anleitung "[OVHcloud DNS-Zone bearbeiten](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/)"zu ihrer Verwaltung einloggen. Sind diese nicht vorhanden, geben Sie folgende Einträge ein:

- Ihr Domainname ohne die "www" zum Ziel "MX": "mx1.mail.ovh.net"
- Ihr Domainname ohne die "www" zum Ziel "MX": "mx2.mail.ovh.net"
- Ihr Domainname ohne die "www" zum Ziel "MX": "mx3.mail.ovh.net"
- Ihr Domainname ohne die "www" auf die A-Ziel-IP Ihres OVHcloud Hostings. Um die richtige IP-Adresse abzurufen, lesen Sie unsere Anleitung zum Lesen der [IP-Adressen der verschiedenen Shared Hosting Cluster](https://docs.ovh.com/de/hosting/verzeichnis-der-ip-adressen-web-hosting-cluster/).
- Ihre Domain **mit** die "www", auf Ihre Domain ohne die "www", mit einem Eintrag vom Typ "CNAME".

**Beispiel**: Für die Domain "domain.tld" muss die Wiedergabe wie folgt lauten:

![hosting](images/DNSzone.png){.thumbnail}

> [!success]
>
> Beachten Sie die beiden Zielwerte der ersten beiden Einträge vom Typ "NS". Sie werden in [Schritt 9](#step9) dieser Anleitung verwendet.
>
> Diese Werte entsprechen den DNS Servern, die dieser DNS Zone für Ihre Domain zugewiesen sind.
>

### Schritt 3: ein vollständiges Backup Ihrer Website abrufen <a name="step3"></a>

Rufen Sie den Inhalt des FTP-Speicherplatzes Ihres aktuellen Hostings zusammen mit einem Backup Ihrer Datenbank, wenn Ihre Website eine verwendet.

Diese Operationen werden ausschließlich bei Ihrem derzeitigen Hosting-Anbieter durchgeführt. Kontaktieren Sie ihn, wenn Sie Schwierigkeiten haben, ein vollständiges Backup Ihrer Website zu erhalten.

### Schritt 4: Backup Ihrer Website auf Ihr OVHcloud Hosting Angebot importieren <a name="step4"></a>

Um das Backup des FTP-Speicherplatzes Ihres bisherigen Anbieters zu importieren, [verbinden Sie sich mit dem FTP-Speicherplatz Ihres OVHcloud Hostings](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) und verlagern Sie das Backup in den "www"-Wurzelordner (oder in einen anderen Wurzelordner, den Sie zuvor erstellt haben).

Wir empfehlen Ihnen, das Programm [FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/) zu verwenden, um Ihr FTP-Backup auf Ihr Hosting zu übertragen.

Wenn Ihre Backup-Datei komprimiert (gezippt) wird, entkomprimieren Sie sie in einem leeren Ordner auf Ihrem Computer, bevor Sie Ihre Dateien auf das OVHcloud Hosting hochladen.

Für das Backup Ihrer Datenbank erstellen Sie [Datenbank erstellen](https://docs.ovh.com/de/hosting/datenbank-erstellen/) und [Datenbank importieren](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/).

> [!primary]
>
> OVHcloud bietet CloudDB Datenbankserver an. Wenn Sie dieses Angebot auf Ihrer Website verwenden möchten, finden Sie unsere gesamte Dokumentation zu diesem Produkt auf unserer dedizierten Seite <https://docs.ovh.com/de/clouddb/>.
>

Verbinden Sie anschließend Ihre OVHcloud-Datenbank mit der Konfigurationsdatei Ihrer Website im FTP-Speicherplatz Ihres OVHcloud-Hostings.
Ersetzen Sie hierzu die Verbindungsdaten Ihrer alten Datenbank mit denen Ihrer neuen OVHcloud Datenbank. Diese Informationen finden Sie in der Datei "Konfiguration/Verbindung zu Ihrer Datenbank"Ihrer Website.

> [!success]
>
> Um Ihre neue Datenbank zu verbinden, wenn Sie ein Content Management System (CMS) wie WordPress, Joomla!, Drupal oder PrestaShop verwenden, finden Sie die Informationen zu ihren Konfigurationsdateien in **Schritt 2** der Anleitung "[Änderung des Passworts einer Datenbank](https://docs.ovh.com/de/hosting/datenbank-passwort-aendern/)".
>

Erklären/erlauben Sie Ihre externe Domain auf Ihrem OVHcloud Webhosting über unsere Anleitung "[Verwaltung der Multisites eines OVHcloud Webhostings](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/)". Geben Sie den "Namen"des Wurzelverzeichnisses an, das Sie zu Beginn von [Schritt 4](#step4) ausgewählt haben. Zur Erinnerung: Es handelt sich um den Ordner, in den Sie Ihre Dateien in Ihren FTP-Speicherplatz gelegt haben.

> [!warning]
>
> **Die Durchführung dieser Operation ist von entscheidender Bedeutung**. Ihre Website wird erst dann angezeigt, wenn Sie die richtigen Informationen geliefert haben. Achten Sie insbesondere auf die Syntax des DNS Eintrags "TXT".
>
> Da Ihre Domain noch nicht bei OVHcloud ist, müssen Sie einen DNS-Eintrag vom Typ "TXT" mit dem "OVHcontrol Token" hinzufügen und den Verweis vom Typ "A" Ihrer Domain ändern. Dies geschieht direkt in der aktiven DNS-Zone Ihrer Domain bei Ihrem aktuellen Anbieter.
>
> Tun Sie dasselbe für Ihre Subdomain unter "www".
>
> Kontaktieren Sie gegebenenfalls den aktuellen Verwalter Ihrer DNS Zone, um die Änderung durchzuführen.
>

**Beispiel**: für die Domain "domain.tld":

![hosting](images/DNSmultisite.png){.thumbnail}

**Die Änderung der DNS-Einträge "A", "CNAME"und "TXT" muss beim aktuellen DNS-Anbieter Ihrer Domain durchgeführt werden und erfordert eine Propagationszeit von 4 bis maximal 24 Stunden, bis die Änderungen voll wirksam sind.**

Nach der Propagation der DNS Einstellungen wird die bei OVHcloud gehostete Seite Ihrer Domain angezeigt.

### Schritt 5: Ihre E-Mail-Adressen bei OVHcloud auf die gleiche Art neu erstellen <a name="step5"></a>

Erstellen Sie die E-Mail-Adressen Ihres E-Mail-Anbieters auf identische Weise mithilfe unserer Anleitung zur [Erstellung von "MX Plan"](https://docs.ovh.com/de/emails/e-mail-adresse-erstellen/).

Wenn Sie sich für eine "E-Mail Pro" oder "Exchange" Lösung entschieden haben, lesen Sie unsere Anleitung zum Thema, um Ihre E-Mail-Adressen zu erstellen:

- Für "E-Mail-Pro": <https://docs.ovh.com/de/emails-pro/erstkonfiguration/>
- für "Exchange": <https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_konfiguration_der_dienstleistung/>

### Schritt 6: OVHcloud E-Mail-Server in der aktiven DNS Zone Ihrer Domain deklarieren <a name="step6"></a>

Ändern Sie die "MX" E-Mail-Server in der aktiven DNS-Zone Ihrer Domain.
So erhalten Sie Ihre neuen E-Mails auf Ihren neuen OVHcloud E-Mail-Adressen.

Ersetzen Sie bei Ihrem Anbieter Ihre alten "MX" Einträge durch die folgenden drei Einträge (ohne die alten Einträge zu hinterlegen):

- Ihr Domainname (ohne die "www") auf das Ziel vom Typ "MX": "mx1.mail.ovh.net "
- Ihr Domainname (ohne die "www") auf das Ziel vom Typ "MX": "mx2.mail.ovh.net "
- Ihr Domainname (ohne die "www") auf das Ziel vom Typ "MX": "mx3.mail.ovh.net "

Die Änderung der "MX" Server erfolgt beim aktuellen DNS Server Ihrer Domain und **benötigt bis zu 4 bis 24 Stunden**, bis die Änderungen voll wirksam sind.<br>
Dies bedeutet, dass Ihre E-Mails während der Propagation der DNS Einstellungen immer weniger an Ihren alten E-Mail Adressen und immer mehr an Ihren neuen OVHcloud E-Mail Adressen empfangen werden<br>.
Sobald die Propagation abgeschlossen ist, werden alle empfangenen neuen E-Mails auf Ihren OVHcloud E-Mail-Adressen empfangen.

Wir empfehlen Ihnen, die "MX" Einträge zu ändern , **bevor** Sie den Inhalt der E-Mail-Adressen migrieren.
Diese Methode erspart es Ihnen, eine Migration für die wenigen E-Mails vorzunehmen, die Sie während der Propagation der DNS Einstellungen an Ihren alten E-Mail-Adressen empfangen.

### Schritt 7: Transfer des Inhalts Ihrer alten E-Mail-Adressen zu Ihren neuen Adressen bei OVHcloud <a name="step7"></a>

Nach der Propagation der DNS Einstellungen werden Ihre neuen E-Mails nun alle auf Ihren neuen E-Mail Adressen empfangen. Ihre alten E-Mails werden jedoch weiterhin auf Ihrem alten E-Mail-Server gespeichert.

Um den Inhalt Ihrer alten Adressen zu migrieren, haben Sie zwei Optionen.

**Option 1**: Verwenden Sie unser Tool [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external}, mit dem der Inhalt der bei Ihrem bisherigen Anbieter registrierten E-Mail-Adressen auf die bei OVHcloud erstellten kopiert werden kann. Weitere Informationen finden Sie in unserer Anleitung "[E-Mail-Accounts über OVH Mail Migrator migrieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_migration_von_e-mail-accounts_-_ovh_mail_migrator/)".

Wir empfehlen Ihnen, den `Servertyp`{.action} **POP** im Bereich `Quell-Account`{.action} nicht zu verwenden. Dieses Protokoll löscht E-Mails Ihres alten Servers, um diese an den Ziel-OVHcloud-Server zu senden. Sie können dann den Inhalt der alten Adresse und der neuen E-Mail-Adresse nicht mehr vergleichen.

Geben Sie für den Bereich `Ziel-Account`{.action} ausschließlich die betreffende OVHcloud-E-Mail-Adresse und das zugehörige Passwort ein. Hierbei bleibt der `Servertyp`{.action} auf `Hosted by OVH (Autodetect)`{.action}.

Wenn die Migration abgeschlossen ist, loggen Sie sich mithilfe des [OVHcloud Webmail](https://www.ovhcloud.com/de/mail/) mit Ihrer OVHcloud E-Mail-Adresse ein, um zu überprüfen, ob alle Ihre E-Mails im neuen Account enthalten sind.

Wiederholen Sie den Vorgang für alle Ihre E-Mail-Accounts.

> [!primary]
>
> Sie müssen über die Zugangsdaten für alle Ihre alten E-Mail-Accounts sowie den Namen des E-Mail-Servers Ihres bisherigen Anbieters verfügen, um diese Aktion durchzuführen.
>
> Wenn Ihre E-Mail-Adressen ohne Aufbewahrung von Kopien der E-Mails auf Ihrem alten E-Mail-Server als POP konfiguriert wären oder wenn Sie über E-Mails verfügen, die auf Ihrem Gerät "lokal" gespeichert sind, kann nur die **Option 2** durchgeführt werden.
>

**Option 2**: Backup des Inhalts Ihrer E-Mail-Adressen mithilfe eines E-Mail-Programms (Outlook, Mail für Mac...) durchführen, Ihr E-Mail-Programm neu konfigurieren und das Backup in Ihre neue OVHcloud E-Mail-Adresse importieren.

### Schritt 8: Ihre E-Mail-Software neu konfigurieren <a name="step8"></a>

Sobald Ihre alten E-Mail-Adressen bei OVHcloud migriert sind, konfigurieren Sie Ihre E-Mail-Software mithilfe unserer Anleitungen zum Thema neu.

#### Für die E-Mail Accounts "MX Plan": 

- Alle Konfigurationseinstellungen finden Sie in unserer Anleitung "[Allgemeine Informationen zu den MX Plan E-Mails](https://docs.ovh.com/de/emails/allgemeines-zu-shared-e-mails/#2-e-mail-client-verwenden)". Sie finden dort auch Links zu den personalisierten Konfigurationsanleitungen für die wichtigsten E-Mail-Programme.

#### Für "E-Mail-Pro" Accounts:

- Sie finden alle unsere Anleitungen zur Konfigurationsunterstützung in den Abschnitten `Konfiguration auf einem Computer` und `Smartphone-Konfiguration` von [unserer Anleitung zum E-Mail-Pro Angebot](https://docs.ovh.com/de/emails-pro/).

#### Für die "Exchange" E-Mail Accounts:

- Sie finden alle unsere Anleitungen zur Konfigurationshilfe in den Abschnitten `Konfiguration Exchange am Computer` und `Konfiguration Exchange per Smartphone` [unsere Dokumentation zum Exchange Angebot](https://docs.ovh.com/de/microsoft-collaborative-solutions/).

### Schritt 9: die aktiven DNS Server Ihrer Domain durch die Server von OVHcloud ersetzen <a name="step9"></a>

Die im [Schritt 2](#step2) vorkonfigurierte DNS Zone wird noch nicht auf Ihre Domain angewendet.

Ersetzen Sie die derzeitigen DNS-Server Ihrer Domain mit den beiden in der OVHcloud DNS-Zone angegebenen DNS-Servern.

> [!warning]
>
> Die Änderung der DNS Server muss vom aktuellen Registrar Ihrer Domain aus durchgeführt werden und **benötigt bis zu 24 bis 48 Stunden**, bis sie voll wirksam ist.
>

### Schritt 10: Ihre Domain zu OVHcloud transferieren <a name="step10"></a>

Wenn die Propagation der DNS Einstellungen abgeschlossen ist, testen Sie Ihre Website und überprüfen Sie den Versand und Empfang von E-Mails von Ihren E-Mail Adressen aus.
Wenn alles in Ordnung ist, entsperren Sie Ihre Domain und erhalten Sie von Ihrem aktuellen Registrar den "Transfer Code", "EPP" oder "AuthCode".

Transferieren Sie anschließend Ihre Domain mithilfe unserer Anleitung zur [Transfer einer Domain zu OVHcloud](https://docs.ovh.com/de/domains/transfer-einer-generischen-domain/).

Sobald der Transfer Ihrer Daten und Dienstleistungen abgeschlossen ist, müssen Sie Ihre alten Dienstleistungen nur noch bei Ihrem bisherigen Anbieter kündigen.

## Weiterführende Informationen <a name="go-further"></a>

[Allgemeine Informationen zu den Shared-E-Mails](https://docs.ovh.com/de/emails/allgemeines-zu-shared-e-mails/).

[Allgemeine Informationen zu den DNS Servern](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/).

[Eine Shared-E-Mail-Adresse erstellen](https://docs.ovh.com/de/emails/e-mail-adresse-erstellen/).

[Import einer MySQL-Datenbank](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/).

[Verwaltung einer Datenbank über ein Shared Hosting](https://docs.ovh.com/de/hosting/datenbank-erstellen/).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.