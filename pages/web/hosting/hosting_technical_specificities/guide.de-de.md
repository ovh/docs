---
title: 'Technische Eigenschaften von Webhostings'
slug: technische-eigenschaften-web-hosting
excerpt: 'Erfahren Sie hier mehr zum technischen Leistungsvermögen Ihrer Hosting-Lösung'
section: Webhosting-Konfiguration
order: 4
---

**Letzte Aktualisierung am 11.06.2020**

## Ziel

**Diese Anleitung beschreibt technische Details der OVHcloud Webhosting Infrastruktur mit Hinblick auf die am häufigsten gestellten Fragen.**

## Voraussetzungen

- Sie verfügen über ein kompatibles [OVHcloud Webhosting](https://www.ovh.com/de/hosting/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).

## In der praktischen Anwendung

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
>

### FTP

- Verbindungsfehler („Fehler 530: Login-Authentifizierung fehlgeschlagen“): Stellen Sie sicher, dass die Zugangsdaten für Ihren FTP-Bereich korrekt sind. Gehen Sie hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} und überprüfen Sie die Daten im Tab `FTP-SSH`. Die Passwörter werden nie angezeigt, können jedoch geändert werden. Weitere Informationen finden Sie in unseren [FTP-Anleitungen](../verbindung-ftp-speicher-webhosting/).

- FTP-Verbindungen müssen den **passiven Modus** verwenden. Stellen Sie sicher, dass Ihre Skripte bzw. Ihr FTP-Client entsprechend angepasst sind.

- Für den Login via **SFTP** ist mindestens ein [**Pro Webhosting**](https://www.ovh.de/hosting/) oder höheres Angebot erforderlich. Sie können Ihr Angebot direkt in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) upgraden („Allgemeine Informationen“, „Abo“, „Upgraden“).

### Datenbank / SQL

### Simultane Verbindungen mit der Datenbank

- Für Webhosting Angebote (geteilte Datenbanken) gilt ein Limit von 30 simultanen Verbindungen je Datenbank (200 bei enthaltener Private SQL Datenbank). Die verfügbaren Optionen für die einzelnen Webhosting Angebote können Sie auf der [Webhosting Produktseite](https://www.ovh.de/hosting/) nachlesen.

- Darüber hinaus können Sie auch zusätzliche **Private SQL** Datenbanken bestellen und weiter anpassen:

    - *max_connections*: standardmäßig 100, bis zu 200 möglich

    - *max_user_connections*: standardmäßig 50, bis zu 200 möglich

Weitere Informationen hierzu finden Sie auf der [Webhosting Produktseite](https://www.ovh.de/hosting/) und in unserer [Anleitung](../erste-schritte-mit-sql-private/).

#### Verbindungen über einen externen Server

- Aus Sicherheitsgründen ist es nicht möglich, sich über einen externen Server mit der Datenbank eines OVHcloud Webhostings zu verbinden, unabhängig davon, ob es sich dabei um eine geteilte oder eine Private SQL Datenbank handelt. Nur OVHcloud Webhosting Server können sich mit den Datenbankservern verbinden. Jeder andere Verbindungsversuch führt zu folgendem Fehler:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```


#### Einschränkungen der Shared SQL Server

- Loggen Sie sich im PhpMyAdmin-Interface ein und geben Sie **show variables** ein, um die fest eingestellten Werte des MySQL Servers zu überprüfen.

- Die MySQL Version kann für Webhosting Datenbanken nicht geändert werden.

Weitere Informationen zur Verwaltung von Datenbanken finden Sie in der Anleitung „[Eine Datenbank auf Ihrem Webhosting erstellen](../datenbank-erstellen/)“.

### PHP

- Wir empfehlen Ihnen, die Details der [Webhosting Angebote](https://www.ovh.de/hosting/php.xml) auf unserer Website nachzulesen, um sicherzustellen, dass das gewünschte Angebot Ihren Anforderungen entspricht.

- Sie können die Konfigurationsdetails Ihres Webhostings überprüfen. Gehen Sie hierzu zum Abschnitt [„Technische Informationen Ihres Webhostings“](./#technische-informationen-ihres-webhostings) am Ende dieser Anleitung. 

- Sie können die PHP Versions Ihres Webhostings ändern, entweder über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) („**Konfiguration**“) oder indem Sie die Datei .ovhconfig entsprechend bearbeiten. Es sind auch gemischte Konfigurationen möglich. Ausführliche Instruktionen finden Sie in folgenden Anleitungen:

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
|max_execution_time|120s|300s|
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

Verschiedene Informationen zu Ihrem Cluster finden Sie über diesen Link: [https://cluster015.hosting.ovh.net/infos/](https://cluster015.hosting.ovh.net/infos/){.external}.

Ersetzen Sie das Cluster in der URL durch Ihr eigenes Cluster. Um herauszufinden, in welchem Webhosting Cluster sich Ihr Dienst befindet, loggen Sie sich im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und wählen Sie im oberen Menü `Web`{.action} aus. Klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Klicken Sie dann auf den Tab `FTP - SSH`{.action}. Die Nummer des Clusters ist hier unter "FTP-Server" abzulesen.

Die technischen Eigenschaften des Cloud Web Angebots können Sie über folgenden Link einsehen: <https://cloudweb-infos.hosting.ovh.net/>.

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