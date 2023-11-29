---
title: "Technische Eigenschaften von Webhostings"
excerpt: "Diese Anleitung erklärt, wie Sie verschiedene Informationen und technische Details zu Webhostings"
updated: 2023-11-29
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die OVHcloud Webhosting-Angebote werden geteilt. Daher enthält die Konfiguration dieser Angebote einige technische Besonderheiten. Wir empfehlen Ihnen, diese Besonderheiten *vor* der Verwendung Ihres OVHcloud Webhostings zu lesen.

**Diese Anleitung erklärt, wie Sie verschiedene Informationen und technische Details zu Webhostings.**

## Voraussetzungen

- Sie verfügen über ein kompatibles [OVHcloud Webhosting](https://www.ovh.com/de/hosting/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration, Verwaltung und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit in Ihrer Verantwortung, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei gängigen Aufgaben bestmöglich zu begleiten. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt „[Weiterführende Informationen](#go-further)“ in dieser Anleitung.
>

### FTP

- Für FTP-Verbindungen **passiver Modus** verwenden. Stellen Sie sicher, dass Ihr Skript oder Ihr FTP-Client entsprechend konfiguriert ist.

- Wenn beim Anmelden bei Ihrem FTP-Speicherplatz der Zugriffsfehler „Fehler bei der 530-Authentifizierung“ auftritt: Stellen Sie sicher, dass die Zugangsdaten für Ihren FTP-Speicherplatz korrekt sind. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Klicken Sie auf der angezeigten Seite auf `FTP - SSH`{.action}.

Dort finden Sie alle Login-Daten zu Ihrem FTP-Speicherplatz mit Ausnahme des Passworts.

Kennwörter werden nie angezeigt, können aber geändert werden.

Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung „[Mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)“.

### E-Mails <a name="emails"></a>

Um eine gute Dienstqualität für die gesamte Shared Hosting Infrastruktur sicherzustellen und so den Versand Ihrer E-Mails an Ihre Empfänger zu vereinfachen, wenden wir für unsere Webhosting-Dienste Versandquoten an.

Über einen gleitenden Zeitraum von 3600 Sekunden (1 Stunde) erlaubt Ihnen Ihr Webhosting Angebot den Versand folgender Kontingente für E-Mails:

|Angebote|Kostenloses 100M Webhosting|Starter|Basic|Pro|Performance|
|---|---|---|---|---|---|
|Maximaler E-Mail-Versand pro Stunde und Dienst|10|20|100|200|2000|

> [!PRIMARY]
>
> Diese Einschränkungen gelten **nur** für E-Mails, die mit der *mail()* Funktion von PHP versendet wurden, und nicht für andere E-Mail-Angebote (SMTP Versand).
>

Abgesehen von Verdacht auf Spam oder Phishing kann der Versand Ihrer E-Mails verzögert werden. Ihre E-Mails werden in einer Warteschlange gespeichert, bis die Anzahl der in der letzten Stunde versendeten E-Mails unter dem Kontingent liegt.

Im Falle eines Missbrauchs oder einer Piraterie kann ein Teil oder die Gesamtheit Ihres Dienstes ausgesetzt werden (in Übereinstimmung mit den AGB und den Besonderen Vertragsbedingungen Ihres Angebots). Sie werden per E-Mail benachrichtigt, wenn Ihre Domain geschlossen wurde. In diesem Fall folgen Sie den folgenden Anleitungen:

- [Verfolgen und verwalten Sie die automatisierten E-Mails Ihres Webhostings](/pages/web_cloud/web_hosting/mail_function_script_records);
- [Use Case - Tipps nach dem Hacken Ihrer Website](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

### Datenbanken / SQL

#### gleichzeitige Datenbankverbindungen

Bei den Webhosting Angeboten (geteilte Datenbanken) gibt es ein Limit von 30 Simultanverbindungen pro Datenbank (dieses Limit wird auf 200 erhöht, wenn Sie ein [Web Cloud Databases](https://www.ovhcloud.com/de/web-cloud/databases/) Angebot verwenden). Die verfügbaren Optionen für jedes Webhosting-Angebot finden Sie auf der [Details zu unseren Webhosting-Angeboten](https://www.ovhcloud.com/de/web-hosting/).

Sie können auch zusätzliche Angebote für [Web Cloud Databases](https://www.ovhcloud.com/de/web-cloud/databases/) bestellen, die über Optionen zur Personalisierung verfügen:

- *max_connections*: standardmäßig 100, mit der Möglichkeit, auf 200 zu wechseln;
- *max_user_connections*: Standard 50, mit der Möglichkeit, auf 200 zu wechseln.

Weitere Informationen finden Sie in unseren [Webhosting Angeboten](https://www.ovhcloud.com/de/web-hosting/) und unserer Anleitung „[Erste Schritte mit Ihrem Angebot Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)“.

#### Verbindungen von einem externen Server

Aus Sicherheitsgründen ist es nicht möglich, sich von einem externen Server aus mit einer in einem OVHcloud Webhosting Angebot enthaltenen Datenbank zu verbinden. Nur Server, die OVHcloud Webhostings enthalten, können eine Verbindung zu gemeinsam genutzten Datenbankservern herstellen. Jede andere Verbindung verursacht den folgenden Fehler:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```

Nur [Web Cloud Databases](https://www.ovhcloud.com/de/web-cloud/databases/) Datenbankserver ermöglichen die Verbindung mit externen Servern. Dazu haben Sie die IP-Adresse Ihres externen Servers auf Ihrem Datenbankserver autorisiert. Bei Bedarf lesen Sie unsere Anleitung „[Erste Schritte mit Ihrem Angebot Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)“.

#### Shared SQL Server-Variablen

Um die zugehörigen Variablen zu erfahren, loggen Sie sich über das *PhpMyAdmin* Interface in Ihrer Datenbank ein. Wenn Sie eingeloggt sind, klicken Sie auf den Tab `SQL` im oberen Bereich der Seite und geben Sie die folgende Abfrage in das zentrale Formular ein, um die Variablen des MySQL-Servers zu überprüfen:

```bash
SHOW VARIABLES;
``` 

> [!primary]
>
> Die MySQL-Version kann für Datenbanken, die in das Webhosting integriert sind, nicht geändert werden.
>

Weitere Informationen zur Verwaltung der Datenbanken und zur Verbindung mit dem *phpMyAdmin* Interface finden Sie in der Anleitung „[Eine Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database)“.

### PHP

Wir empfehlen Ihnen, unsere [Webhosting-Angebote](https://www.ovhcloud.com/de/web-hosting/uc-programming-language/) zu konsultieren, um sicherzustellen, dass das gewünschte Webhosting-Angebot Ihren Anforderungen entspricht.

> [!warning]
>
> Die Änderung der Datei **php.ini** ist bei den Webhosting Angeboten nicht verfügbar. Das liegt daran, dass die PHP Konfiguration für die gesamte Shared Hosting Infrastruktur global ist.
>
> Sie können jedoch bestimmte Elemente wie die *PHP-Runtime Engine*, die *Runtime Environment* oder die *PHP-Version* Ihres Webhostings ändern.
>
> Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung „[Webhosting: Umgebung, PHP-Version, “.ovhconfig“](/pages/web_cloud/web_hosting/configure_your_web_hosting)“
>

Sie können auch die Konfigurationsdetails Ihres Webhostings überprüfen. Weitere Informationen hierzu finden Sie im Bereich „[Technische Informationen Ihres Webhostings](#technical-infos-web-hosting)“ am Ende dieser Anleitung.

#### PHP-FPM

PHP-FPM ist in der Webhosting-Infrastruktur standardmäßig aktiviert, um PHP-Antworten zu beschleunigen. Bitte beachten Sie, dass es möglicherweise nicht aktiv ist, wenn Sie ein altes Webhosting Angebot nutzen, das Sie nicht aktualisiert haben (vor 2014 bestellte Dienstleistungen).

*Einige Variablen sind ohne PHP-FPM unterschiedlich:*

|Variable|Ohne PHP-FPM|Mit PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

#### PHP Skripte

Wenn Sie via SSH mit Ihrem Webhosting verbunden sind, wird der ausgehende Traffic aus Sicherheitsgründen blockiert. Wir empfehlen Ihnen deshalb die Verwendung von PHP Skripten. Weitere Informationen finden Sie in unserer [SSH-Anleitung](/pages/web_cloud/web_hosting/ssh_on_webhosting). Informationen zur Ausführung von Befehlen finden Sie im „[PHP Manual](https://www.php.net/manual/de/function.system.php)“.

Sie können z. B. die Funktion *gethostbyaddr()* verwenden, um den Hostnamen abzurufen:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```

> [!warning]
>
> OVHcloud ändert die PHP-Version Ihres Hostings nicht automatisch, wenn eine neue Version implementiert wird. Sie sind für die Sicherheit der Inhalte und die regelmäßigen Updates der Dienste verantwortlich.
>

### Technische Informationen zu Ihrem Webhosting <a name="technical-infos-web-hosting"></a>

Auf dieser Seite finden und überprüfen Sie die für Ihr Webhosting Angebot verfügbaren Bibliotheken, Sprachen und Versionen: <https://webhosting-infos.hosting.ovh.net>

Die technischen Details des Cloud Web Angebots entnehmen Sie bitte dieser Seite: <https://cloudweb-infos.hosting.ovh.net/>.

### Informationen zu automatischen Backups <a name="backup"></a>

> [!warning]
>
> OVHcloud bietet einen Dienst für automatische Datensicherungen und stellt diese zur Verfügung. Es ist jedoch *nicht vertraglich* und zusätzlich zu Ihren Dienstleistungen verfügbar. Tatsächlich liegt es in Ihrer Verantwortung, Ihre eigene Wiederherstellungsrichtlinie festzulegen und Wiederherstellungspunkte zu den Zeiten festzulegen, die Sie für angemessen halten.
>

#### Speicherplatz / FTP-Speicherplatz

Alle unsere Shared Webhosting Angebote befinden sich:

- in Gravelines (GRA), Frankreich, automatische Backups an Tag-1 / Tag-2 / Tag-3 / Tag-7 / Tag-14. Diese Backups werden auch im Rechenzentrum in Roubaix (RBX) in Frankreich gespeichert;

- in Beauharnois (BHS), Kanada, verfügen über automatische Sicherungen an Tag-1 / Tag-2 / Tag-3 / Tag-7 / Tag-14. Diese Backups werden auch im Rechenzentrum in Beauharnois (BHS), Kanada, gespeichert.

In unserer Dokumentation erfahren Sie, wie Sie sich mit dem [FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection) oder [den FTP-Speicherplatz Ihres Webhostings wiederherstellen](/pages/web_cloud/web_hosting/ftp_save_and_backup).

#### Datenbanken / SQL

> [!warning]
>
> OVHcloud bietet einen Dienst für automatische Datensicherungen und stellt diese zur Verfügung. Es ist jedoch *nicht vertraglich* und zusätzlich zu Ihren Dienstleistungen verfügbar. Tatsächlich liegt es in Ihrer Verantwortung, Ihre eigene Wiederherstellungsrichtlinie festzulegen und Wiederherstellungspunkte zu den Zeiten festzulegen, die Sie für angemessen halten.
>

Für Shared Datenbanken (in Ihrem Webhosting Angebot enthalten) oder Datenbankserver (Web Cloud Databases), die auf Gravelines (GRA), Frankreich und Beauharnois (BHS), Kanada, angeboten werden, wird täglich ein Backup der Datenbanken durchgeführt. Diese Backups sind verfügbar (über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} oder über die [OVHcloud API](https://api.ovh.com/)). Die Backups werden auch auf einer anderen Infrastruktur gespeichert. Diese Daten werden an drei verschiedenen Orten in Frankreich repliziert: Roubaix (RBX), Straßburg (SBG) und Gravelines (GRA). Die Aufbewahrungsfrist für Backups beträgt 30 Tage.

In unserer Dokumentation erfahren Sie, wie Sie [Backup einer Webhosting-Datenbank abrufen](/pages/web_cloud/web_hosting/sql_database_export).

#### E-Mail

> [!warning]
>
> OVHcloud bietet einen automatischen Datensicherungsdienst an. Es ist jedoch *nicht vertraglich* und zusätzlich zu Ihren Dienstleistungen verfügbar. Tatsächlich liegt es in Ihrer Verantwortung, Ihre eigene Wiederherstellungsrichtlinie festzulegen und Wiederherstellungspunkte zu den Zeiten festzulegen, die Sie für angemessen halten.
>

Für Webhosting-Accounts (die in Ihrem Webhosting-Angebot enthalten sind) wird täglich ein automatisches Backup erstellt und in ein anderes Rechenzentrum kopiert.

### Cookie-Richtlinien

**Cookies und Tracer, die bei der Bereitstellung des Shared-Hosting-Dienstes verwendet werden.**

Um das einwandfreie Funktionieren der im Rahmen des Webhosting-Dienstes gehosteten Websites sicherzustellen, wird der Cookie „SERVER ID“ auf den Geräten der Besucher dieser Websites platziert. Das „SERVER ID“ Cookie erlaubt es, einen Dienst zur Lastverteilung des eingehenden Traffics zwischen den verschiedenen für das Hosting der Website verwendeten Infrastrukturen (OVHcloud Loadbalancer) sicherzustellen. Es ermöglicht dem Benutzer, während der gesamten Dauer seiner Sitzung auf dem gleichen Hostserver zu bleiben. 

> [!success]
>
> In der Computersprache wird eine bestimmte Zeitspanne, während der ein Gerät (Computer, Smartphone usw.) mit einem Server interagiert, als „Sitzung“ bezeichnet.
>

Dadurch wird die Konsistenz der Benutzernavigation aufrechterhalten und beibehalten.

Das Cookie „SERVER ID“ ist ein Schreibvorgang auf dem Endgerät des Benutzers, der die Instanz (den Server) der Infrastruktur angibt, mit der der Benutzer interagiert. Der Cookie ist in dem Sinne anonym, dass keine personenbezogenen Daten des Nutzers verwendet werden.

Das Cookie „SERVER ID“ wird auf dem Gerät des Benutzers für einen Zeitraum von weniger als 24 Stunden gespeichert.

Dies ist ein Cookie:

 - 1: für den Betrieb des Webhosting-Dienstes erforderlich;
 - 2: anonym.

Sie sind nicht an die vorherige Einholung der Zustimmung des Website-Besuchers im Sinne der Datenschutz-Grundverordnung (DSGVO) gebunden.

### Informationen zu Statistikwerkzeugen

**OVHcloud Web Statistics**

OVHcloud stellt dem Kunden Statistiken zu Besucherzahlen und Reichweitenmessung der im Rahmen des Shared-Hosting-Dienstes gehosteten Website(s) zur Verfügung. (im Folgenden „OVHcloud Web Statistics“). „OVHcloud Web Statistics“ ermöglicht insbesondere die Identifizierung der geografischen Zone der Besucher der im Rahmen des Shared-Webhosting-Dienstes gehosteten Websites, der Merkmale ihrer Endgeräte, der aufgerufenen Seiten und der HTTP-Codes. „OVHcloud Web Statistics“ ist standardmäßig im Rahmen des Shared-Hosting-Dienstes aktiviert und kann auf Anfrage des Kunden beim technischen Support deaktiviert werden. Um „OVHcloud Web Statistics“ bereitzustellen, führt OVHcloud Datenverarbeitungen durch.

Die „OVHcloud Web Statistics“ Berichte werden aus anonymisierten Verkehrsdaten erstellt, wie der IP-Adresse und den Logs der Benutzer der im Rahmen eines Shared Hosting Angebots gehosteten Websites, der URL der Anfrage, der Dauer der Anfrage und dem „useragent“.

Um im Rahmen von „OVHcloud Web Statistics“ verwendet zu werden, werden die zuvor genannten Daten anonymisiert und mithilfe von Algorithmen aggregiert, die von OVHcloud auf seinen eigenen Infrastrukturen betrieben werden. Insbesondere wird die in den Verkehrsdaten enthaltene IP-Adresse des Besuchers anonymisiert abgerufen, um verarbeitet und analysiert zu werden, um seine Geolokalisierung (regional begrenzt) zu bestimmen. So werden keine personenbezogenen Daten, die die direkte oder indirekte Identifizierung der zuvor genannten Besucher ermöglichen, im Rahmen von „OVHcloud Web Statistics“ gespeichert.  

## Weiterführende Informationen <a name="go-further"></a>

[Mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)

[Website mit SSL auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Optimieren der Performance Ihrer Website](/pages/web_cloud/web_hosting/optimise_your_website_performance)

[FTP-Speicherplatz Ihres Webhostings wiederherstellen](/pages/web_cloud/web_hosting/ftp_save_and_backup)

[Backup einer Webhosting-Datenbank abrufen](/pages/web_cloud/web_hosting/sql_database_export)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.