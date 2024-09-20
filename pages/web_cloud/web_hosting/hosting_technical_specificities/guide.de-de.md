---
title: "Technische Eigenschaften von Webhostings"
excerpt: Erfahren Sie hier verschiedene Informationen und technische Details zu Webhostings
updated: 2023-12-08
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die OVHcloud Webhosting-Angebote basieren auf einer geteilten Infrastruktur (*shared*). Daher enthält die Konfiguration dieser Angebote einige technische Besonderheiten. Wir empfehlen Ihnen, diese Besonderheiten *vor* der Verwendung Ihres OVHcloud Webhostings zu lesen.

**Diese Anleitung beschreibt technische Details der OVHcloud Webhosting Infrastruktur mit Hinblick auf die am häufigsten gestellten Fragen.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovh.com/de/hosting/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen. Leider können wir Ihnen keine weitergehende technische Unterstützung hierzu anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

### FTP

- Für FTP-Verbindungen ist der **passive Modus** zu verwenden. Stellen Sie sicher, dass Ihr Skript oder Ihr FTP-Client entsprechend konfiguriert ist.

- Wenn beim Anmelden bei Ihrem FTP-Speicherplatz der Zugriffsfehler "Fehler 530: Login-Authentifizierung fehlgeschlagen" auftritt: Stellen Sie sicher, dass die Zugangsdaten für Ihren FTP-Speicherplatz korrekt sind. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Klicken Sie auf der angezeigten Seite auf `FTP - SSH`{.action}.

Dort finden Sie alle Login-Daten zu Ihrem FTP-Speicherplatz mit Ausnahme des Passworts.

Kennwörter werden nicht angezeigt, können aber geändert werden.

Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung „[Mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)“.

### E-Mails <a name="emails"></a>

Um eine gute Dienstqualität für die gesamte Shared Hosting Infrastruktur sicherzustellen und so den Versand Ihrer E-Mails an Ihre Empfänger zu optimieren, wenden wir Quoten für unsere Webhosting-Dienste an.

Innerhalb eines gleitenden Zeitraums von 3600 Sekunden (1 Stunde) erlaubt Ihnen Ihr Webhosting folgendes E-Mail-Versandvolumen:

|Angebote|Kostenloses Webhosting 100M|Starter|Basic|Pro|Performance|
|---|---|---|---|---|---|
|Maximaler E-Mail-Versand pro Stunde und Dienst|10|20|100|200|2000|

> [!primary]
> Diese Einschränkungen gelten **nur** für E-Mails, die mit der *mail()* Funktion von PHP versendet wurden, nicht für andere E-Mails (SMTP Versand).
>

Ihre E-Mails werden möglicherweise zeitverzögert gesendet, ausgenommen Spam- oder Phishing-verdächtige E-Mails. Ihre E-Mails werden dazu in einer Warteschlange gespeichert, bis die Anzahl der in der letzten Stunde gesendeten E-Mails unter der Quota liegt.

Im Missbrauchsfall oder bei erwiesenem Risiko kann ein Teil oder die Gesamtheit Ihres Dienstes ausgesetzt werden (in Übereinstimmung mit den AGB und den Besonderen Vertragsbedingungen Ihres Angebots). Sie werden darüber per E-Mail informiert. Um zu erfahren, wie Sie vorgehen können, wenn ein Account aufgrund von Spam-Verdacht blockiert wurde, konsultieren Sie unsere Anleitungen:

- [Verfolgen und verwalten Sie die automatisierten E-Mails Ihres Webhostings](/pages/web_cloud/web_hosting/mail_function_script_records)
- [Use Case - Tipps nach dem Hacken Ihrer Website](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

### Datenbanken / SQL

#### Simultane Verbindungen mit der Datenbank

Für Webhosting Angebote (geteilte Datenbanken) gilt ein Limit von 30 Simultanverbindungen pro Datenbank (200 bei [Web Cloud Databases](/links/web/databases)). Die verfügbaren Optionen für die einzelnen Webhosting Angebote können Sie auf der [Webhosting Produktseite](/links/web/hosting) nachlesen.

Darüber hinaus können Sie auch zusätzliche [Web Cloud Databases](/links/web/databases) bestellen und weiter anpassen:

- *max_connections*: 100 mit der Möglichkeit, auf 200 zu wechseln
- *max_user_connections*: 50 mit der Möglichkeit, auf 200 zu wechseln

Weitere Informationen hierzu finden Sie auf der [Webhosting Produktseite](/links/web/hosting) und unserer Anleitung „[Erste Schritte mit Ihrem Angebot Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)“.

#### Verbindungen über einen externen Server

Aus Sicherheitsgründen ist es nicht möglich, sich über einen externen Server mit der Datenbank eines OVHcloud Webhostings zu verbinde. Nur OVHcloud Webhosting Server können eine Verbindung zu den Datenbankservern herstellen. Jeder andere Verbindungsversuch führt zu folgendem Fehler:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```

Nur [Web Cloud Databases](/links/web/databases) Datenbankserver ermöglichen die Verbindung mit externen Servern. Dazu wird vorher die IP-Adresse des externen Servers auf Ihrem Datenbankserver autorisiert. Bei Bedarf lesen Sie dazu unsere Anleitung „[Erste Schritte mit Ihrem Angebot Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)“.

#### Shared SQL Server-Variablen

Um die zugehörigen Variablen zu erfahren, loggen Sie sich über das *PhpMyAdmin* Interface in Ihrer Datenbank ein. Wenn Sie eingeloggt sind, klicken Sie auf den Tab `SQL` im oberen Bereich der Seite und geben Sie die folgende Abfrage in das zentrale Formular ein, um die Variablen des MySQL-Servers zu überprüfen:

```bash
SHOW VARIABLES;
``` 

> [!primary]
>
> Die MySQL-Version kann für inkludierte Datenbanken nicht geändert werden.
>

Weitere Informationen zur Verwaltung von Datenbanken und zur Verbindung mit dem *phpMyAdmin* Interface finden Sie in der Anleitung „[Eine Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database)“.

### PHP

Wir empfehlen, die Details der [Webhosting Angebote](/links/web/hosting-programming-language) auf unserer Website nachzulesen, um sicherzustellen, dass das gewünschte Angebot Ihren Anforderungen entspricht.

> [!warning]
>
> Die Änderung der Datei **php.ini** ist bei den Webhosting Angeboten nicht verfügbar. Das liegt daran, dass die PHP-Konfiguration global für die gesamte Shared Hosting Infrastruktur ist.
>
> Sie können jedoch bestimmte Elemente wie *PHP-Runtime Engine*, *Runtime Environment* oder *PHP-Version* Ihres Webhostings ändern.
>
> Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung „[Webhosting: Umgebung, PHP-Version, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)“
>

Sie können die Konfigurationsdetails Ihres Webhostings überprüfen. Weitere Informationen hierzu finden Sie im Bereich „[Technische Informationen Ihres Webhostings](#technical-infos-web-hosting)“ am Ende dieser Anleitung.

#### PHP-FPM

PHP-FPM ist auf der Webhosting Infrastruktur standardmäßig aktiviert, um PHP-Antworten zu beschleunigen. Bitte beachten Sie, dass PHP-FPM möglicherweise nicht aktiv ist, wenn Sie ein älteres Webhosting Angebot verwenden, das Sie nicht aktualisiert haben (vor 2014 bestellte Dienste).

*Manche Server-Variablen sind ohne PHP-FPM unterschiedlich:*

|Variable|Ohne PHP-FPM|Mit PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

#### PHP-Skripte

Wenn Sie mit Ihrem Webhosting via SSH verbunden sind, wird der ausgehende Traffic aus Sicherheitsgründen blockiert. Wir empfehlen Ihnen deshalb, PHP-Skripte zu verwenden. Mehr Informationen hierzu finden Sie in unserer [Anleitung zu SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting). Im offiziellen [PHP-Handbuch](https://www.php.net/manual/de/function.system.php) ist nachzulesen, wie Befehle und Funktionen via Skript ausgeführt werden können.

Sie können zum Beispiel die Funktion *gethostbyaddr()* verwenden, um den Hostnamen abzurufen

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```

> [!warning]
>
> OVHcloud erzwingt keine PHP-Updates auf Webhostings. Kunden sind daher verantwortlich für die Sicherheit ihrer Dienste sowie für regelmäßige Updates installierter Software.
>

### Technische Informationen zu Ihrem Webhosting <a name="technical-infos-web-hosting"></a>

Auf dieser Seite finden Sie die für Ihr Webhosting verfügbaren Bibliotheken, Sprachen und Versionen: <https://webhosting-infos.hosting.ovh.net>.

Die technischen Details des Angebots CloudWeb können Sie über folgenden Link einsehen: <https://cloudweb-infos.hosting.ovh.net/>.

### Informationen zu automatischen Backups <a name="backup"></a>

> [!warning]
>
> OVHcloud stellt einen Dienst zur automatischen Datensicherung und zur Wiederherstellung dieser Backups bereit. Es handelt sich jedoch um eine nicht-vertragliche Zusatzleistung. Es liegt in Ihrer Verantwortung, eine geeignete Backup-Strategie einzusetzen und Wiederherstellungspunkte zu Zeiten zu bestimmen, die Sie für angebracht halten.
>

#### Speicherplatz / FTP-Speicherplatz

Alle unsere Webhosting Angebote lokalisiert in:

- Gravelines (GRA), Frankreich verfügen über automatische Backups an Tag-1 / Tag-2 / Tag-3 / Tag-7 / Tag-14. Diese Backups werden auch im Rechenzentrum in Roubaix (RBX) in Frankreich gespeichert.

- Beauharnois (BHS), Kanada verfügen über automatische Sicherungen an Tag-1 / Tag-2 / Tag-3 / Tag-7 / Tag-14. Diese Backups werden auch im Rechenzentrum in Beauharnois (BHS), Kanada, gespeichert.

In unserer Dokumentation erfahren Sie, wie Sie sich mit dem [FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection) oder [den FTP-Speicherplatz Ihres Webhostings wiederherstellen](/pages/web_cloud/web_hosting/ftp_save_and_backup).

#### Datenbanken / SQL

> [!warning]
>
> OVHcloud stellt einen Dienst zur automatischen Datensicherung und zur Wiederherstellung dieser Backups bereit. Es handelt sich jedoch um eine nicht-vertragliche Zusatzleistung. Es liegt in Ihrer Verantwortung, eine geeignete Backup-Strategie einzusetzen und Wiederherstellungspunkte zu Zeiten zu bestimmen, die Sie für angebracht halten.
>

Für in Webhostings enthalten Datenbanken oder Datenbankserver (Web Cloud Databases) in Gravelines (GRA), Frankreich und Beauharnois (BHS), Kanada wird täglich ein Backup der Datenbanken durchgeführt. Diese Backups sind verfügbar (über das [OVHcloud Kundencenter](/links/manager){.external} oder über die [OVHcloud API](https://api.ovh.com/)). Die Backups werden zusätzlich auf einer anderen Infrastruktur gespeichert. Diese Daten werden in einem Rechenzentrum in Straßburg (SBG) repliziert. Die Aufbewahrungsfrist für Backups beträgt 30 Tage.

In unserer Dokumentation erfahren Sie, wie Sie [Backups einer Webhosting-Datenbank abrufen](/pages/web_cloud/web_hosting/sql_database_export).

#### E-Mail

> [!warning]
>
> OVHcloud stellt einen Dienst zur automatischen Datensicherung bereit. Es handelt sich jedoch um eine nicht-vertragliche Zusatzleistung. Es liegt in Ihrer Verantwortung, eine geeignete Backup-Strategie einzusetzen und Wiederherstellungspunkte zu Zeiten zu bestimmen, die Sie für angebracht halten.
>

Für Webhosting-Accounts (die in Ihrem Webhosting-Angebot enthalten sind) wird täglich ein automatisches Backup erstellt und in ein anderes Rechenzentrum kopiert.

### Cookie-Richtlinie

**Bei der Bereitstellung des Shared Hosting Dienstes verwendete Cookies und Tracker**

Um das ordnungsgemäße Funktionieren von im Rahmen des Shared Hosting Dienstes gehosteten Websites sicherzustellen, wird der Cookie „SERVER ID“ auf den Geräten der Besucher hinterlegt. Der „SERVER ID“-Cookie gewährleistet, dass der Dienst zur Lastverteilung des eingehenden Traffics zwischen den verschiedenen, für das Website-Hosting verwendeten Infrastrukturen funktioniert (OVHcloud Loadbalancer). So können Benutzer während der gesamten Dauer ihrer Sitzung auf dem gleichen Hostserver bleiben.

> [!success]
>
> Eine "Sitzung" (*Session*) bezeichnet eine Zeitspanne, während der ein Gerät (Computer, Smartphone usw.) mit einem Server interagiert.
>

Dies sorgt für eine konsistente Benutzererfahrung während der Website-Navigation.

Der „SERVER ID“-Cookie ist eine Datei auf dem Gerät des Benutzers, die die Instanz (den Server) der Infrastruktur angibt, mit der der Benutzer interagiert. Der Cookie ist in dem Sinne anonym, dass keine personenbezogenen Daten des Benutzers verwendet werden.

Der „SERVER ID“-Cookie wird auf dem Gerät des Benutzers nicht länger als 24 Stunden gespeichert.

Diese spezielle Art Cookie ist:

 - Für den Betrieb des Webhosting-Dienstes erforderlich.
 - Anonym.

Deshalb gilt für diesen Vorgang die Notwendigkeit der vorherigen Zustimmung des Website-Besuchers im Sinne der Datenschutz-Grundverordnung (DSGVO) nicht.

### Informationen zu Statistikwerkzeugen

**OVHcloud Web Statistics**

OVHcloud stellt dem Kunden Statistiken zu Besucherzahlen und Reichweitenmessung der im Rahmen des Shared-Hosting-Dienstes gehosteten Website(s) (nachfolgend „OVHcloud Web Statistics“) zur Verfügung. Mit OVHcloud Web Statistics können die geografische Zone der Besucher der im Rahmen des Shared-Hosting-Dienstes gehosteten Website(s), Eigenschaften ihrer Geräte, aufgerufene Seiten und HTTP-Codes ermittelt werden. OVHcloud Web Statistics ist im Rahmen des Shared-Hosting-Dienstes standardmäßig aktiviert und kann auf Anfrage des Kunden beim technischen Support deaktiviert werden. Um „OVHcloud Web Statistics“ bereitzustellen, führt OVHcloud Datenverarbeitungen aus.

OVHcloud Web Statistics Berichte werden aufgrund anonymisierter Traffic-Daten erstellt, darunter die IP-Adressen und Logs der Besucher der im Rahmen des Shared-Hosting-Dienstes gehosteten Websites, die URL der Anfrage, die Dauer der Anfrage und der „useragent“.

Um im Rahmen von OVHcloud Web Statistics verwendet zu werden, werden die zuvor genannten Daten anonymisiert und mithilfe von durch OVHcloud ausgeführten Algorithmen auf dessen eigenen Infrastrukturen aggregiert. Insbesondere wird die in den Traffic-Daten enthaltene IP-Adresse des Besuchers zur Verarbeitung und Analyse in anonymisierter Form extrahiert, um dessen Geolokalisierung zu ermitteln. Auf diese Weise werden keinerlei personenbezogene Daten, die die direkte oder indirekte Identifizierung der zuvor genannten Besucher ermöglichen, im Rahmen von OVHcloud Web Statistics gespeichert.

## Weiterführende Informationen <a name="go-further"></a>

[Mit dem Speicherplatz eines Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)

[Website mit SSL-Zertifikat auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Optimierung der Performance Ihrer Webseite](/pages/web_cloud/web_hosting/optimise_your_website_performance)

[FTP-Speicherplatz Ihres Webhostings wiederherstellen](/pages/web_cloud/web_hosting/ftp_save_and_backup)

[Backup einer Webhosting-Datenbank abrufen](/pages/web_cloud/web_hosting/sql_database_export)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.