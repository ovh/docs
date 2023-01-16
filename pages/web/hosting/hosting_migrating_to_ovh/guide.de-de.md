---
title: Migration Ihrer Website und E-Mails zu OVH
slug: migration-ihrer-website-zu-ovh
excerpt: "Erfahren Sie hier, wie Sie Ihre Website, E-Mails und Domains ohne Dienstunterbrechung zu OVHcloud migrieren"
section: 'Erste Schritte'
order: 08
---

**Letzte Aktualisierung am 24.11.2022**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

In dieser Anleitung werden die verschiedenen Aktionen beschrieben, die durchgeführt werden müssen, um Ihre gesamte Website, Domainnamen und E-Mail-Adressen zu OVHcloud ohne Dienstunterbrechung zu migrieren.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie haben Zugriff auf die Verwaltung des Domainnamnens Ihrer Website.
- Der Domainname ist transferierbar (existiert seit mindestens 60 Tagen).
- Sie haben Zugriff auf die aktive DNS-Zone (Domain Name System) Ihres Domainnamens.
- Sie haben Zugriff auf die Dateien und Datenbanken Ihrer Website bei Ihrem aktuellen Hosting-Anbieter.
- Sie verfügen über die Login-Daten (Benutzer, Passwort, Server) Ihrer aktuellen E-Mail-Accounts.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!success]
>
> Die Anweisungen in dieser Anleitung beziehen sich auf verschiedene Produkte aus dem Web Cloud Universum. Wir empfehlen Ihnen, alle nachstehenden Schritte durchzugehen **bevor** Sie Ihre Dienste migrieren.
>

Um Ihre Website und E-Mails **ohne Dienstunterbrechung** zu OVHcloud zu migrieren, sollten 10 Schritte in dieser Reihenfolge durchgeführt werden:

- [Schritt 1: Webhosting und E-Mail-Accounts bei OVHcloud bestellen](#step1)
- [Schritt 2: Eine DNS-Zone für Ihren Domainnamen bei OVHcloud erstellen und vorkonfigurieren](#step2)
- [Schritt 3: Vollständiges Backup Ihrer Website erstellen](#step3)
- [Schritt 4: Backup Ihrer Website in Ihr OVHcloud Hosting importieren](#step4)
- [Schritt 5: Ihre E-Mail-Accounts bei OVHcloud neu erstellen](#step5)
- [Schritt 6: OVHcloud E-Mail-Server in der aktiven DNS-Zone Ihres Domainnamens hinterlegen](#step6)
- [Schritt 7: Transfer des Inhalts Ihrer bestehenden E-Mail-Accounts zu Ihren neuen Accounts bei OVHcloud](#step7)
- [Schritt 8: Ihre E-Mail-Software rekonfigurieren](#step8)
- [Schritt 9: Die aktiven DNS-Server Ihres Domainnamens mit OVHcloud DNS-Servern ersetzen](#step9)
- [Schritt 10: Ihren Domainnamen zu OVHcloud transferieren](#step10)

Wenn Sie diesen Schritten **der Reihe nach** folgen, werden Sie in der Regel keine Dienstunterbrechung für Ihre Website und den E-Mail-Empfang erfahren.

Abhängig von Ihrem Domain-Registrar, Ihrem Hosting-Anbieter oder Ihrem E-Mail-Anbieter kann es jedoch sein, dass der Zugang zu Ihren Dienstleistungen gesperrt wird, sobald Ihr Domainname nicht mehr über deren Infrastrukturen konfiguriert ist.<br>
In diesem Fall kann es zu einer Dienstunterbrechung kommen.

Diese Anleitung ist derart gestaltet, die Dauer einer möglichen Unterbrechung zu minimieren.

### Schritt 1: Webhosting und E-Mail-Accounts bei OVHcloud bestellen <a name="step1"></a>

Mehrere OVHcloud Shared Hosting Angebote enthalten "MX Plan" E-Mail-Dienste. Mit diesem E-Mail-Angebot können E-Mail-Accounts mit jeweils maximal 5 GB Speicherplatz erstellt werden. Wählen Sie aus den unten stehenden Hosting-Angeboten eines aus, das den Anforderungen Ihrer Website an PHP-Version, SQL-Version, Anzahl der benötigten E-Mail-Accounts, sowie der Größe der zu migrierenden Website entspricht:

- Hosting [Basic](https://www.ovhcloud.com/de/web-hosting/personal-offer/) mit **10 "MX Plan E-Mail-Accounts**
- Hosting [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) mit **100 "MX Plan E-Mail-Accounts** (für gewerbliche Webseiten)
- Hosting [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/) mit **1000 "MX Plan E-Mail-Accounts** (skalierbare dedizierte Ressourcen)
- Hosting [Cloud Web](https://www.ovhcloud.com/de/web-hosting/cloud-web-offer/) mit **200 E-Mail-Accounts** (für Anwendungsentwickler)

Wenn Sie sich für ein passendes Webhosting-Angebot entschieden haben, klicken Sie auf den Button `Bestellen`{.action} auf unserer Webseite. Folgen Sie den Bestellschritten, aber **leiten Sie dabei noch nicht den Transfer Ihres Domainnamens ein**.

Wenn Sie bereits Kunde sind, kann die Bestellung auch über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ausgeführt werden. Wenn Sie eingeloggt sind, klicken Sie auf den Bereich `Web Cloud`{.action}. Klicken Sie dann links auf den Button `Bestellen`{.action} und wählen Sie `Hosting-Pakete`{.action}. Folgen Sie den Bestellschritten **ohne den Transfer Ihrer Domain zu beantragen**.

Sobald die Zahlung bestätigt wurde, startet die Installation des Hostings. Sie erhalten eine E-Mail an Ihre Kontakt-E-Mail-Adresse, die Zugangsdaten zum FTP-Speicherplatz (File Transfer Protocol) Ihres Webhostings enthält.

> [!primary]
> OVHcloud bietet neben MX Plan weitere E-Mail-Angebote an. Sie können beispielsweise [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/)-Accounts und/oder [Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/)-Accounts mit E-Mail-Accounts kombinieren.
>

### Schritt 2: Eine DNS-Zone für Ihren Domainnamen bei OVHcloud erstellen und vorkonfigurieren <a name="step2"></a>

Wenn Ihr Webhosting eingerichtet ist, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und erstellen Sie eine DNS-Zone für Ihren Domainnamen. Verwenden Sie dabei nicht "**www**". Weitere Informationen finden Sie in unserer Anleitung zur [Erstellung einer DNS-Zone bei OVHcloud](https://docs.ovh.com/de/domains/erstellung_einer_dns_zone_fur_eine_externe_domain/).

Sobald die DNS-Zone eingerichtet ist, kann sie zur Verwendung mit dem Webhosting vorbereitet werden. Verwenden Sie dazu unsere Anleitung zum [Bearbeiten einer OVHcloud DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/). Fügen Sie folgende Einträge hinzu, sofern diese nicht existieren:

- Ihr Domainname ohne "www" als Eintragstyp "MX", zum Ziel: `mx1.mail.ovh.net.`
- Ihr Domainname ohne "www" als Eintragstyp "MX", zum Ziel: `mx2.mail.ovh.net.`
- Ihr Domainname ohne "www" als Eintragstyp "MX", zum Ziel: `mx3.mail.ovh.net.`
- Ihr Domainname ohne "www" als Eintragstyp "A", mit der IP-Adresse Ihres OVHcloud Hostings als Ziel. Die zu verwendende IP-Adresse ist gelistet im [Verzeichnis von IP-Adressen für die Webhosting Cluster](https://docs.ovh.com/de/hosting/verzeichnis-der-ip-adressen-web-hosting-cluster/).
- Ihr Domainname **mit** "www" als Eintragstyp "CNAME", mit Ihrem Domainnamen (ohne "www") als Ziel.

**Beispiel**: Für den Domainnamen "domain.tld" sollte das Ergebnis wie in der folgenden Abbildung angezeigt werden:

![hosting](images/DNSzone.png){.thumbnail}

> [!success]
>
> Beachten Sie die beiden Zielwerte der ersten beiden Einträge vom Typ "NS". Sie werden in [Schritt 9](#step9) dieser Anleitung benötigt.
>
> Diese Werte entsprechen den DNS-Servern, die die DNS-Zone für Ihren Domainnamen hosten.
>

### Schritt 3: Vollständiges Backup Ihrer Website erstellen <a name="step3"></a>

Kopieren Sie den Inhalt des FTP-Speicherplatzes Ihres aktuellen Hostings, und erstellen Sie ein Backup Ihrer Datenbank, falls Ihre Website eine verwendet.

Diese Aktionen werden ausschließlich bei Ihrem derzeitigen Hosting-Anbieter durchgeführt. Kontaktieren Sie ihn, wenn Sie Schwierigkeiten haben, ein vollständiges Backup Ihrer Website zu erhalten.

### Schritt 4: Backup Ihrer Website in Ihr OVHcloud Hosting importieren <a name="step4"></a>

Um das Backup des FTP-Speicherplatzes Ihrer Website zu importieren, [verbinden Sie sich mit dem FTP-Speicherplatz Ihres OVHcloud Hostings](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) und laden Sie das Backup in den "www"-Wurzelordner hoch (gegebenenfalls in einen anderen Wurzelordner, den Sie zuvor erstellt haben).

Wir empfehlen, das Programm [FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/) zu verwenden, um das FTP-Backup auf Ihr Hosting zu übertragen.

Wenn Ihre Backup-Datei als komprimiertes Archiv vorliegt, entkomprimieren Sie es in einem leeren Ordner auf Ihrem Computer, bevor Sie Ihre Dateien auf das OVHcloud Hosting hochladen.

[Erstellen Sie eine neue Datenbank](https://docs.ovh.com/de/hosting/datenbank-erstellen/) für Ihr Hosting und [importieren Sie dann Ihr Backup](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/).

> [!primary]
>
> OVHcloud bietet auch Web Cloud Databases Datenbankserver an. Wenn Sie dieses Angebot mit Ihrer Website verwenden möchten, finden Sie unsere Dokumentation zu diesem Dienst auf unserer dedizierten Seite <https://docs.ovh.com/de/clouddb/>.
>

Ihre OVHcloud Datenbank muss mit der Konfigurationsdatei Ihrer Website im FTP-Speicherplatz Ihres OVHcloud Hostings verlinkt werden.
Ersetzen Sie hierzu die Verbindungsdaten Ihrer alten Datenbank mit denen Ihrer neuen Datenbank bei OVHcloud. Sie finden diese Informationen in den Konfigurationseinstellungen Ihrer Website oder in der Datenbank-Konfigurationsdatei.

> [!success]
>
> Wenn Sie ein Content Management System (CMS) wie WordPress, Joomla!, Drupal oder PrestaShop verwenden, finden Sie die Informationen zur Datenbank in deren Konfigurationsdateien. Sie finden Details hierzu in **Schritt 2** der Anleitung "[Änderung des Passworts einer Datenbank](https://docs.ovh.com/de/hosting/datenbank-passwort-aendern/)".
>

Deklarieren und authorisieren Sie Ihren externen Domainnamen auf Ihrem OVHcloud Webhosting mithilfe unserer Anleitung "[Mehrere Websites auf einem Webhosting einrichten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/)". Geben Sie den Namen des Ordners, den Sie zu Beginn von [Schritt 4](#step4) ausgewählt haben, als Wurzelverzeichnis an. Zur Erinnerung: Es handelt sich um den Ordner im FTP-Speicherplatz, in den Sie Ihre Webseiten-Dateien abgelegt haben.

> [!warning]
>
> **Diese Aktion ist von entscheidender Bedeutung**. Ihre Website wird erst dann angezeigt, wenn Sie die notwendigen Informationen korrekt eingegeben haben. Achten Sie insbesondere auf die Syntax des DNS-Eintrags von Typ "TXT".
>
> Da Ihre Domain noch nicht bei OVHcloud ist, müssen Sie einen DNS-Eintrag vom Typ "TXT" mit dem "OVHcontrol Token" als Inhalt anlegen und den Eintrag vom Typ "A" Ihres Domainnamens abändern. Dies muss in der aktiven DNS-Zone Ihres Domainnamens bei Ihrem aktuellen Anbieter erfolgen.
>
> Tun Sie dasselbe für Ihre Subdomain "www".
>
> Kontaktieren Sie gegebenenfalls den Administrator Ihrer aktiven DNS-Zone, um die Änderungen durchzuführen.
>

**Beispiel** für "domain.tld":

![hosting](images/DNSmultisite.png){.thumbnail}

**Die Änderung der DNS-Einträge vom Typ "A", "CNAME" und "TXT" muss beim aktuellen DNS-Provider Ihres Domainnamens durchgeführt werden und erfordert eine Propagationszeit von 4 bis maximal 24 Stunden, bis die Änderungen voll wirksam sind.**

Nach der Propagation der DNS-Konfiguration wird die bei OVHcloud gehostete Website unter Ihrem Domainnamen angezeigt.

### Schritt 5: Ihre E-Mail-Accounts bei OVHcloud neu erstellen <a name="step5"></a>

Erstellen Sie neue E-Mail-Accounts und verwenden Sie dabei die gleichen E-Mail-Adressen, die Sie aktuell bei Ihrem E-Mail-Provider haben. Sie finden mehr Informationen in unserer Anleitung zur [Erstellung von E-Mail-Accounts mit MX Plan](https://docs.ovh.com/de/emails/e-mail-adresse-erstellen/).

Wenn Sie sich für eins der E-Mail-Angebote Email Pro oder Exchange entschieden haben, lesen Sie unsere entsprechenden Anleitungen, um Ihre E-Mail-Adressen zu erstellen:

- Email Pro: <https://docs.ovh.com/de/emails-pro/erstkonfiguration/>
- Exchange: <https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_konfiguration_der_dienstleistung/>

### Schritt 6: OVHcloud E-Mail-Server in der aktiven DNS-Zone Ihres Domainnamens hinterlegen <a name="step6"></a>

Bearbeiten Sie die "MX"-Einträge für E-Mail-Server in der aktiven DNS-Zone Ihres Domainnamens.
Das bewirkt, dass Ihre E-Mails fortan in Ihren neuen E-Mail-Accounts bei OVHcloud ankommen.

Ersetzen Sie bei Ihrem DNS-Provider Ihre Einträge vom Typ mit den folgenden drei Einträgen (ohne bestehende Einträge beizubehalten):

- Ihr Domainname ohne "www" als Eintragstyp "MX", zum Ziel: `mx1.mail.ovh.net.`
- Ihr Domainname ohne "www" als Eintragstyp "MX", zum Ziel: `mx2.mail.ovh.net.`
- Ihr Domainname ohne "www" als Eintragstyp "MX", zum Ziel: `mx3.mail.ovh.net.`

Die Änderung der "MX"-Server erfolgt beim aktuellen Ihrem DNS-Provider und **benötigt zwischen 4 bis 24 Stunden**.<br>
Das bedeutet, dass während der Propagation der DNS-Einstellungen immmer weniger E-Mails in Ihren alten Accounts ankommen und Ihre neuen Accounts bei OVHcloud E-Mails damit beginnen, E-Mails zu empfangen. Sobald die Propagation abgeschlossen ist, werden alle E-Mails auf Ihren OVHcloud E-Mail-Accounts empfangen.

Wir empfehlen, die "MX"-Einträge zu ändern, **bevor** Sie den Inhalt Ihrer E-Mail-Accounts migrieren (Schritt 7).
Andernfalls erhalten Sie auch nach der Migration bestehender E-Mails zu den neuen Accounts noch neue E-Mails in den alten Accounts.

### Schritt 7: Transfer des Inhalts Ihrer bestehenden E-Mail-Accounts zu Ihren neuen Accounts bei OVHcloud <a name="step7"></a>

Nach der Propagation der DNS-Einstellungen werden Ihre neuen E-Mails nun alle in Ihren neuen E-Mail-Accounts empfangen. Ihre alten E-Mails befinden sich jedoch weiterhin auf Ihrem alten E-Mail-Server.

Um den Inhalt Ihrer alten Accounts zu migrieren, haben Sie zwei Optionen.

**Option 1**: Verwenden Sie unser Tool [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external}, um die Inhalte der bei Ihrem bisherigen Anbieter registrierten E-Mail-Accounts auf die bei OVHcloud erstellten Accounts zu kopieren. Weitere Informationen finden Sie in unserer Anleitung "[E-Mail-Accounts über OVH Mail Migrator migrieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_migration_von_e-mail-accounts_-_ovh_mail_migrator/)".

Wir empfehlen Ihnen, als `Server type`{.action} unter `Source account`{.action} nicht **POP** zu verwenden. Dieses Protokoll löscht E-Mails auf dem Quell-Server, und sendet sie an den Ziel-Server bei OVHcloud. Sie können dann die Inhalte von beiden Accounts nicht mehr vergleichen.

Geben Sie im Bereich `Destination account`{.action} ausschließlich die betreffende OVHcloud E-Mail-Adresse und das zugehörige Passwort ein. Hierbei bleibt der `Server type`{.action} auf `Hosted by OVH (Autodetect)`{.action}.

Wenn die Migration abgeschlossen ist, loggen Sie sich über [OVHcloud Webmail](https://www.ovhcloud.com/de/mail/) in Ihren OVHcloud E-Mail-Account ein, um zu überprüfen, ob alle Ihre E-Mails im neuen Account enthalten sind.

Wiederholen Sie den Vorgang für alle Ihre E-Mail-Accounts.

> [!primary]
>
> Sie müssen über die Zugangsdaten für alle Ihre alten E-Mail-Accounts sowie den Namen des E-Mail-Servers Ihres bisherigen Anbieters verfügen, um diese Aktion durchzuführen.
>
> Wenn Ihre E-Mail-Accounts als "POP" ohne Aufbewahrung von E-Mail-Kopien auf Ihrem E-Mail-Server konfiguriert sind oder wenn Sie E-Mails haben, die nur lokal auf Ihrem Gerät gespeichert sind, kommt nur **Option 2** in Frage.
>

**Option 2**: Backup des Inhalts Ihrer E-Mail-Accounts mithilfe einer E-Mail-Software (Outlook, Mac Mail, etc.) durchführen, Ihr E-Mail-Programm neu einrichten und das Backup in Ihre neuen OVHcloud E-Mail-Accounts importieren.

### Schritt 8: Ihre E-Mail-Software rekonfigurieren <a name="step8"></a>

Sobald Ihre E-Mail-Accounts bei OVHcloud eingerichtet und bestehende Inhalte migriert sind, konfigurieren Sie Ihre neuen Accounts in Ihrer E-Mail-Software mithilfe unserer Anleitungen zum Thema.

#### Für MX Plan E-Mail-Accounts: 

- Alle Konfigurationseinstellungen finden Sie in unserer Anleitung "[Erste Schritte mit MX Plan](https://docs.ovh.com/de/emails/allgemeines-zu-shared-e-mails/#2-e-mail-client-verwenden)". Sie finden dort auch Links zu den Konfigurationsanleitungen für die wichtigsten E-Mail-Clients.

#### Für E-Mail Pro E-Mail-Accounts:

- Sie finden alle unsere Anleitungen zur Konfigurationsunterstützung unter `Konfiguration des E-Mail-Clients` auf der [Seite für E-Mail Pro](https://docs.ovh.com/de/emails-pro/).

#### Für Exchange E-Mail-Accounts:

- Sie finden alle unsere Anleitungen zur Konfigurationsunterstützung in den Abschnitten `Konfiguration des Exchange E-Mail-Clients`und `Konfiguration von Exchange auf kompatiblen Smartphones/Tablets` auf der [Seite für Exchange](https://docs.ovh.com/de/microsoft-collaborative-solutions/).

### Schritt 9: Die aktiven DNS-Server Ihres Domainnamens mit OVHcloud DNS-Servern ersetzen <a name="step9"></a>

Die in [Schritt 2](#step2) vorkonfigurierte DNS-Zone wird noch nicht auf Ihren Domainnamen angewendet.

Ersetzen Sie die aktuell aktiven DNS-Server Ihres Domainnamens mit den beiden in der OVHcloud DNS-Zone angegebenen DNS-Servern.

> [!warning]
>
> Die Änderung der DNS-Server muss beim aktuellen Registrar Ihres Domainnamens durchgeführt werden und **benötigt bis zu 24 bis 48 Stunden**, bis sie voll wirksam ist.
>

### Schritt 10: Ihren Domainnamen zu OVHcloud transferieren <a name="step10"></a>

Wenn die Propagation der DNS-Einstellungen abgeschlossen ist, testen Sie Ihre Website und überprüfen Sie den Versand und Empfang von E-Mails.
Wenn alles funktioniert, entsperren Sie Ihren Domainnamen und fordern Sie bei Ihrem aktuellen Registrar den "Transfer Code", "EPP" oder "AuthCode" an.

Transferieren Sie anschließend Ihren Domainnamen mithilfe unserer Anleitung zum [Transfer eines Domainnamens zu OVHcloud](https://docs.ovh.com/de/domains/transfer-einer-generischen-domain/).

Sobald der Transfer Ihrer Daten und Dienstleistungen abgeschlossen ist, können Sie Ihre alten Dienstleistungen bei Ihrem Anbieter kündigen.

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit MX Plan](https://docs.ovh.com/de/emails/allgemeines-zu-shared-e-mails/)

[DNS-Server ändern](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/)

[E-Mail-Accounts erstellen](https://docs.ovh.com/de/emails/e-mail-adresse-erstellen/)

[Backup in eine Webhosting-Datenbank importieren](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/)

[Verwaltung einer Webhosting-Datenbank](https://docs.ovh.com/de/hosting/datenbank-erstellen/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
