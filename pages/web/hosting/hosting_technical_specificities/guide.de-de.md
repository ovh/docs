---
title: 'Technische Eigenschaften von Webhostings'
slug: technische-eigenschaften-web-hosting
excerpt: 'Erfahren Sie hier mehr zum technischen Leistungsvermögen Ihrer Hosting-Lösung'
section: 'Webhosting-Konfiguration'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 28.07.2022**

## Ziel

**Diese Anleitung beschreibt technische Details der OVHcloud Webhosting Infrastruktur mit Hinblick auf die am häufigsten gestellten Fragen.**

## Voraussetzungen

- Sie verfügen über ein kompatibles [OVHcloud Webhosting](https://www.ovh.com/de/hosting/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
>

### FTP

- Verbindungsfehler („Fehler 530: Login-Authentifizierung fehlgeschlagen“): Stellen Sie sicher, dass die Zugangsdaten für Ihren FTP-Bereich korrekt sind. Gehen Sie hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und überprüfen Sie die Daten im Tab `FTP-SSH`. Die Passwörter werden nie angezeigt, können jedoch geändert werden. Weitere Informationen finden Sie in unseren [FTP-Anleitungen](../verbindung-ftp-speicher-webhosting/).

- FTP-Verbindungen müssen den **passiven Modus** verwenden. Stellen Sie sicher, dass Ihre Skripte bzw. Ihr FTP-Client entsprechend angepasst sind.

### E-Mails <a name="E-Mails"></a>

Um eine hohe Dienstqualität für alle zu gewährleisten und den Versand Ihrer E-Mails an Ihre Empfänger zu optimieren, wenden wir Quoten für unsere Webhosting-Dienste an.

Innerhalb eines gleitenden Zeitraums von 3600 Sekunden (also 1 Stunde) können Sie mit Ihrem Webhosting-Angebot folgendes E-Mail-Versandvolumen nutzen:

|Angebote|Start 10M|Perso|Pro|Performance|
|---|---|---|---|---|
|Maximale Anzahl an E-Mails pro Stunde und Dienstleistung|10|100|200|2000|

- Ihre E-Mails werden möglicherweise zeitverzögert gesendet, ausgenommen Spam- oder Phishing-verdächtige E-Mails. Ihre E-Mails werden dazu in einer Warteschlange gespeichert, bis die Anzahl der in der letzten Stunde gesendeten E-Mails unter der Quota liegt.
- Im Missbrauchsfall oder bei erwiesenem Risiko wird Ihr Dienst gesperrt und Sie werden darüber per E-Mail informiert. Um zu erfahren, wie Sie vorgehen können, wenn ein Account aufgrund von Spam-Verdacht blockiert wurde, konsultieren Sie [unsere Anleitung](https://docs.ovh.com/de/microsoft-collaborative-solutions/blocked-wegen-spam/).

### Datenbank / SQL

### Simultane Verbindungen mit der Datenbank

- Für Webhosting Angebote (geteilte Datenbanken) gilt ein Limit von 30 simultanen Verbindungen je Datenbank (200 bei enthaltener CloudDB Datenbank). Die verfügbaren Optionen für die einzelnen Webhosting Angebote können Sie auf der [Webhosting Produktseite](https://www.ovhcloud.com/de/web-hosting/) nachlesen.

- Darüber hinaus können Sie auch zusätzliche **CloudDB** Datenbanken bestellen und weiter anpassen:

    - *max_connections*: standardmäßig 100, bis zu 200 möglich

    - *max_user_connections*: standardmäßig 50, bis zu 200 möglich

Weitere Informationen hierzu finden Sie auf der [Webhosting Produktseite](https://www.ovhcloud.com/de/web-hosting/) und in unserer [Anleitung](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/).

#### Verbindungen über einen externen Server

- Aus Sicherheitsgründen ist es nicht möglich, sich über einen externen Server mit der Datenbank eines OVHcloud Webhostings zu verbinden, unabhängig davon, ob es sich dabei um eine geteilte oder eine CloudDB Datenbank handelt. Nur OVHcloud Webhosting Server können sich mit den Datenbankservern verbinden. Jeder andere Verbindungsversuch führt zu folgendem Fehler:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```


#### Einschränkungen der Shared SQL Server

- Loggen Sie sich im PhpMyAdmin-Interface ein und geben Sie **show variables** ein, um die fest eingestellten Werte des MySQL Servers zu überprüfen.

- Die MySQL Version kann für Webhosting Datenbanken nicht geändert werden.

Weitere Informationen zur Verwaltung von Datenbanken finden Sie in der Anleitung „[Eine Datenbank auf Ihrem Webhosting erstellen](../datenbank-erstellen/)“.

### PHP

- Wir empfehlen Ihnen, die Details der [Webhosting Angebote](https://www.ovhcloud.com/de/web-hosting/uc-programming-language/) auf unserer Website nachzulesen, um sicherzustellen, dass das gewünschte Angebot Ihren Anforderungen entspricht.

- Sie können die Konfigurationsdetails Ihres Webhostings überprüfen. Gehen Sie hierzu zum Abschnitt [„Technische Konfigurationen der Webhostings“](./#technische-konfigurationen-der-webhostings) am Ende dieser Anleitung. 

- Sie können die PHP Versions Ihres Webhostings ändern, entweder über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) („**Konfiguration**“) oder indem Sie die Datei .ovhconfig entsprechend bearbeiten. Es sind auch gemischte Konfigurationen möglich. Ausführliche Instruktionen finden Sie in folgenden Anleitungen:

[.ovhconfig-Datei Ihres Webhostings konfigurieren](../ovhconfig-datei-konfigurieren/)  
[Konfiguration Ihres Webhostings bearbeiten](../die_laufzeitumgebung_meines_webhostings_andern/)


> [!primary]
> Die .ovhconfig-Datei funktioniert im Wurzelverzeichnis des Webhostings oder in einem Unterverzeichnis erster Ordnung (i.d.R. _/www/_). Der einzige Weg, um die Hauptparameter der .ovhconfig-Datei zu ersetzen, ist, eine weitere .ovhconfig-Datei in einem Unterordner zu verwenden.
> Wird diese Datei weiter unten in der Verzeichnisstruktur platziert, hat sie keinen Effekt (z.B. _/www/test/_, _/www/test/test2/_). Stellen Sie sicher, dass die Datei von Ihrem CMS gelesen werden kann (CHMOD 604 oder 644).


#### PHP-FPM

PHP-FPM ist auf der Webhosting Infrastruktur standardmäßig aktiviert, um PHP-Antworten zu beschleunigen. Bitte beachten Sie, dass PHP-FPM möglicherweise nicht aktiv ist, wenn Sie ein älteres Webhosting Angebot verwenden, das Sie nicht aktualisiert haben (vor 2014 bestellte Dienste).

*Manche Server-Variablen sind ohne PHP-FPM verschieden:*

|Variable|ohne PHP-FPM|mit PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|


#### PHP-Skripte

Wenn Sie mit Ihrem Webhosting via SSH verbunden sind, wird der ausgehende Traffic aus Sicherheitsgründen blockiert. Wir empfehlen Ihnen deshalb, PHP-Skripte zu verwenden. Mehr Informationen hierzu finden Sie in unserer [Anleitung zu SSH](../webhosting_ssh_auf_ihren_webhostings/). Im offiziellen [PHP-Handbuch](https://www.php.net/manual/de/function.system.php) ist nachzulesen, wie Befehle und Funktionen via Skript ausgeführt werden können.

Sie können zum Beispiel die Funktion *gethostbyaddr()* verwenden, um den Hostnamen abzurufen:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3.
```


> [!warning]
> OVHcloud erzwingt keine PHP-Updates. Kunden sind daher selbst voll verantwortlich für die Sicherheit ihrer Dienste sowie für regelmäßige Updates installierter Software.
>


#### Technische Konfigurationen der Webhostings

Bitte lesen Sie die entsprechenden Informationsseiten, um die für Ihr Webhosting Angebot verfügbaren Bibliotheken zu überprüfen.

Verschiedene Informationen zu Ihrem Cluster finden Sie jeweils über den Cluster-Link: <https://webhosting-infos.hosting.ovh.net>

Ersetzen Sie die Zahlen in der URL mit Ihrer Clusternummer. Um herauszufinden, in welchem Webhosting Cluster sich Ihr Dienst befindet, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `FTP - SSH`{.action}. Die Nummer des Clusters ist hier unter "FTP-Server" abzulesen.

Die technischen Eigenschaften des Cloud Web Angebots können Sie über folgenden Link einsehen: <https://cloudweb-infos.hosting.ovh.net/>.

### Informationen zu den automatischen Backups <a name="backup"></a>

> [!warning]
>
> OVHcloud stellt einen Dienst zur automatischen Datensicherung und zur Wiederherstellung dieser Backups bereit. Es liegt jedoch in Ihrer Verantwortung, eine geeignete Backup-Strategie einzusetzen und Wiederherstellungspunkte zu Zeiten zu bestimmen, die Sie für angebracht halten.

#### Speicherplatz

Alle unsere Webhosting-Angebote

- in Gravelines (GRA), Frankreich verfügen über automatische Backups für D-1 / D-2 / D-3 / D-7 / D-14. Diese Backups werden im Datacenter Roubaix (RBX) in Frankreich gespeichert.

- in Beauharnois (BHS), Kanada verfügen über automatische Backups für D-1 / D-2 / D-3 / D-7 / D-14. Diese Backups werden im Rechenzentrum Beauharnois (BHS) in Kanada gespeichert.

In unseren Dokumentationen erfahren Sie, wie Sie sich [in den Speicherplatz einloggen](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) oder den [Speicherplatz Ihres Webhostings wiederherstellen](https://docs.ovh.com/de/hosting/webhosting-speicherplatz-wiederherstellen/).

#### Datenbank / SQL

Für geteilte Datenbanken ("Shared", inklusive in Ihrem Webhosting Angebot) oder Datenbank-Server (CloudDB), lokalisiert in Gravelines (GRA), Frankreich und Beauharnois (BHS), Kanada, erfolgt eine tägliche Sicherung der Datenbanken. Diese Backups sind verfügbar (über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} oder über die [OVHcloud API](https://api.ovh.com/)). Die Backups werden auch auf einer anderen Infrastruktur gespeichert. Diese Daten werden an 3 verschiedenen Standorten in Frankreich repliziert: Roubaix (RBX), Straßburg (SBG) und Gravelines (GRA). Die Aufbewahrungsdauer für die Backups beträgt 30 Tage.

In unserer Anleitung erfahren Sie, wie [Backups der Datenbank eines Webhostings abrufen](https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken/).

#### E-Mail

Für geteilte E-Mail-Dienste (in Ihrem Webhosting enthaltene Accounts) wird ein tägliches automatisches Backup erstellt und in ein anderes Rechenzentrum kopiert.

## Cookie-Richtlinie

**Bei der Bereitstellung des Shared Hosting Dienstes verwendete Cookies und Tracker**

Um das ordnungsgemäße Funktionieren von im Rahmen des Shared Hosting Dienstes gehosteten Websites sicherzustellen, wird der Cookie „SERVER ID“ auf den Geräten der Besucher hinterlegt. Der „SERVER ID“-Cookie gewährleistet, dass der Dienst zur Lastverteilung des eingehenden Traffics zwischen den verschiedenen, für das Website-Hosting verwendeten Infrastrukturen funktioniert (OVHcloud Loadbalancer). So können Benutzer während der gesamten Dauer ihrer Sitzung auf dem gleichen Hostserver bleiben. Dies sorgt für eine konsistente Benutzererfahrung während der Website-Navigation.

Der „SERVER ID“-Cookie ist eine Datei auf dem Gerät des Benutzers, die die Instanz (den Server) der Infrastruktur anzeigt, mit der der Benutzer interagiert. Der Cookie ist in dem Sinne anonym, dass keine personenbezogenen Daten des Benutzers verwendet werden.

Der „SERVER ID“-Cookie wird auf dem Gerät des Benutzers nicht länger als 24 Stunden gespeichert.

Da der Cookie anonym und für das Funktionieren des Shared-Hosting-Dienstes erforderlich ist, gilt für diesen die Notwendigkeit der vorherigen Zustimmung des Website-Besuchers im Sinne der Datenschutz-Grundverordnung (DSGVO) nicht. 

## Informationen zu den Statistik-Tools

**OVHcloud Web Statistics**

OVHcloud stellt dem Kunden Statistiken zu Besucherzahlen und Reichweitenmessung der im Rahmen des Shared-Hosting-Dienstes gehosteten Website(s) (nachfolgend „OVHcloud Web Statistics“) zur Verfügung. Mit OVHcloud Web Statistics können die geografische Zone der Besucher der im Rahmen des Shared-Hosting-Dienstes gehosteten Website(s), Eigenschaften ihrer Geräte, aufgerufene Seiten und HTTP-Codes ermittelt werden. OVHcloud Web Statistics ist im Rahmen des Shared-Hosting-Dienstes standardmäßig aktiviert und kann auf Anfrage des Kunden beim technischen Support deaktiviert werden. Um „OVHcloud Web Statistics“ bereitzustellen, führt OVHcloud Datenverarbeitungen aus.

OVHcloud Web Statistics Berichte werden aufgrund anonymisierter Traffic-Daten erstellt, darunter die IP-Adressen und Logs der Besucher der im Rahmen des Shared-Hosting-Dienstes gehosteten Websites, die URL der Anfrage, die Dauer der Anfrage und der „useragent“.

Um im Rahmen von OVHcloud Web Statistics verwendet zu werden, werden die zuvor genannten Daten anonymisiert und mithilfe von durch OVHcloud ausgeführten Algorithmen auf dessen eigenen Infrastrukturen aggregiert. Insbesondere wird die in den Traffic-Daten enthaltene IP-Adresse des Besuchers zur Verarbeitung und Analyse in anonymisierter Form extrahiert, um dessen Geolokalisierung zu ermitteln. Auf diese Weise werden keinerlei personenbezogene Daten, die die direkte oder indirekte Identifizierung der zuvor genannten Besucher ermöglichen, im Rahmen von OVHcloud Web Statistics gespeichert.  

## Weiterführende Informationen

[Mit dem Speicherplatz eines Webhostings verbinden](../verbindung-ftp-speicher-webhosting/)

[Website mit SSL-Zertifikat auf HTTPS umstellen](../website-umstellen-https-ssl/)

[Optimierung der Performance Ihrer Webseite](../webhosting_optimierung_der_performance_ihrer_webseite/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
