---
title: 'Webhosting: Meine Seite online stellen'
description: 'Webhosting: Meine Seite online stellen'
slug: webhosting_meine_seite_online_stellen
legacy_guide_number: g1374
---


## Dateien per FTP übertragen

###  Allgemeines
Damit eine Internetseite korrekt funktioniert und angezeigt wird, muss sie im richtigen Verzeichnis platziert sein. Normalerweise ist dies das "www"-Verzeichnis Ihres Webhostings.
In einem ersten Schritt müssen Sie Ihre Dateien auf Ihr Hosting übertragen. Hierfür benötigen Sie ein FTP-Programm (File Transfer Protocol).
Wir empfehlen hierfür die kostenlose Software [FileZilla](http://www.filezilla.de).


### FTP-Zugangsdaten

Bei Bestellung Ihres OVH Hosting-Pakets wurde Ihnen eine E-Mail zur Verwendung Ihrer Services zugesandt. Darin finden Sie unter anderem Ihre FTP-Login-Daten. Je nach gewähltem Angebot und zugehöriger Domain sieht der Betreff in etwa folgendermaßen aus:

```
/* Beispiel eines Angebots Perso für die Domain "ihre-domain.tld" */

[OVH Info] Webhosting für ihre-domain.tld installiert
```


Inhalt:


```
[...]
FTP-ZUGANGSDATEN:

Mit diesen Zugangsdaten können Sie Ihre Website online stellen
(Achtung: Ihre Daten müssen im Verzeichnis /www abgelegt werden)

FTP-Server: ftp.ihre-domain.tld oder ftp.cluster0XX.ovh.net
Benutzerlogin: loginftp
Passwort: mDpFtP

[...]
```


Stellen Sie mit Ihrem Benutzerlogin und dem zugehörigen Passwort eine Verbindung her.

Falls seit der Installation das FTP-Passwort über Ihr Kundencenter geändert wurde, können Sie das Passwort aus obiger Mail nicht mehr verwenden. Das Login hingegen ist unveränderlich. Bewahren Sie dieses gut auf.


### Passwortänderung über das Kundencenter
Loggen Sie sich in Ihr Kundencenter ein und wählen Sie das betreffende Hosting im Menü links unter "Hosting-Pakete" aus.
Klicken Sie dann auf den Tab "FTP-SSH".
Klicken Sie dann auf das kleine Zahnrad neben Ihrem Login und anschließend auf "Das Passwort ändern".
Auf der nachfolgenden Seite sehen Sie noch einmal Ihren Benutzerlogin.
Geben Sie das gewünschte neue Passwort an, bestätigen Sie es durch erneute Eingabe und klicken Sie dann auf den Button "Bestätigen".

Es kann einige Minuten dauern, bis die Änderung wirksam wird.


### Verwendung von FileZilla

Zur Verwendung von FileZilla gibt es eine eigene Hilfe: [Hilfe zur Verwendung von FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/).

Sie benötigen folgende Informationen:

- die Dateien Ihrer Webseite
- ggf. die Backup-Dateien Ihrer Datenbank

Ihre FTP-Login-Daten:

- Host: ftp.ihre-domain.tld  oder ftp.cluster0XX.ovh.net
- Login: Ihr FTP-Login
- Passwort: das zugehörige Passwort (vgl. die vorangegangenen Abschnitte)
- Port: 21 (für SSH-Verbindung: 22 - beim Angebot Pro)



![](images/img_1858.jpg){.thumbnail}


## FTP-Zugangsdaten

### Über das Kundencenter
Über das Kundencenter können Sie Ihren FTP-Speicherplatz automatisch auf einen früheren Zeitpunkt zurücksetzen.

Wählen Sie hierfür im Kundencenter das betreffende Hosting im Menübereich "Hosting-Pakete" aus.

Gehen Sie dann in den Tab "FTP - SSH" und klicken Sie dort oben rechts auf den Button "Eine Sicherung wiederherstellen".

![](images/img_2690.jpg){.thumbnail}
Im nächsten Schritt können Sie im Drop-Down-Menü die gewünschte Sicherung auswählen.

Bitte beachten Sie: Die wiederhergestellten Daten werden die aktuellen Daten Ihres Hostings komplett ersetzen.

Klicken Sie auf "Weiter", um den Vorgang zu berstätigen. Die Wiederherstellung der Dateien wird einige Stunden in Anspruch nehmen.


- Bei dieser Methode wird Ihr FTP-Speicherplatz komplett wiederhergestellt. Anders verhält es sich bei der Wiederherstellung einer Sicherung über FileZilla.



### Via FileZilla
Zur Wiederherstellung einer vollständiger Sicherung oder einer bestimmten Datei via FileZilla gibt es eine eigene Hilfe: []({legacy}1593)

## Datenbank

### Allgemeines
In einer Datenbank können Sie die Informationen abspeichern, die zu Ihrer Webseite oder zu Ihren Applikationen gehören.

Sie können darin verschiedene Typen von Daten speichern: den Inhalt Ihrer Webseite, die URLs der Unterseiten, Informationen über Ihre Nutzer.

Bei den OVH Webhosting gibt es verschiedene Datenbank-Engines: MySQL, PostgreSQL, SQL Server (verfügbar für das Angebot Windows).


### Erstellung
Bei der Installation Ihres Webhostings wird die Inklusiv-Datenbank nicht automatisch installiert.
Sie bekommen also auch nicht automatisch eine E-Mail mit entsprechenden Informationen.
Zunächst müssen Sie Ihre Datenbank selbst erstellen.
Loggen Sie sich in Ihr Kundencenter ein und wählen Sie das betreffende Hosting aus.

Klicken Sie dann im Menü "Datenbank" rechts auf den Button "Eine Datenbank erstellen".

![](images/img_2743.jpg){.thumbnail}
Wählen Sie dann die Datenbank-Engine aus: "Mysql oder PostgreSQL."
Wählen Sie außerdem den Datenbanktyp aus und klicken Sie anschließend auf "Weiter"

Im nächsten Schritt müssen Sie einen Benutzernamen und Passwort angeben.

Sie erhalten eine E-Mail mit den Login-Daten für die Datenbank.

Einige Minuten später erhalten Sie eine weitere E-Mail mit allen Informationen zu Ihrer Datenbank.

![](images/img_2694.jpg){.thumbnail}


### Meine SQL-Login-Daten

#### In der Info-Mail zur Datenbankinstallation

- Bitte beachten Sie: Bei der Installation Ihres Webhostings wird die Datenbank nicht automatisch erstellt.


Nach der Erstellung wird Ihnen eine E-Mail mit den Login-Daten für Ihre Datenbank zugesandt.
Sie finden diese E-Mail auch jederzeit in Ihrem Kundencenter. Loggen Sie sich ein und klicken Sie rechts oben auf Namen/Login, dann auf "Mein Account" und dort im Menü links auf "Empfangene E-Mails".

![](images/img_2747.jpg){.thumbnail}
Der Betreff dieser Mail sieht folgendermaßen aus:


```
[OVH Info] MySQL Datenbank name_der_db
```


Inhalt:


```
[...]

Ihre MySQL Datenbank wurde auf unserem Server installiert.

Hier die technischen Daten:
---------------------------

MySQL: 
Server            : mysql51-66.pro
Benutzername      : name_der_db
Name der Datenbank: name_der_db
Passwort          : nur Sie kennen es

[...]
```



#### Passwortänderung über das Kundencenter
Sie können das Passwort Ihrer Datenbank direkt über das Kundencenter ändern.


- Bitte beachten Sie: Sie sollten bei der Änderung des Passworts sehr umsichtig vorgehen: Durch die Änderung können Webseiten und Services, die die Datenbank verwenden, unterbrochen werden.


Wenn Sie das Passwort Ihrer Datenbank ändern möchten, wählen Sie im Kundencenter das betreffende Hosting aus und klicken Sie im Tab "Datenbank" auf das kleine Zahnrad neben der betreffenden Datenbank und anschließend auf "Das Passwort ändern".

Falls sich zum Zeitpunkt der Änderung eine Webseite auf Ihrem Hosting befindet, denken Sie daran, auch die Konfigurationsdatei Ihrer Webseite anzupassen, damit diese sich mit dem neuen korrekten Passwort mit der Datenbank verbinden kann.


### PhpMyAdmin-Verbindung
Zunächst müssen Sie sich mit dem [PhpMyAdmin-Interface](https://phpmyadmin.ovh.net/) verbinden.

Füllen Sie folgende Felder aus:


- Server: Nutzer.mysql.db (den Nutzer finden Sie in der E-Mail zur Erstellung der Datenbank).

- Benutzername: Den Nutzer finden Sie in der E-Mail zur Erstellung der Datenbank.

- Password: das Passwort Ihrer Datenbank.

- Version: Sie können sich wahlweise mit der aktuellen Version Ihrer Datenbank ("current") oder mit einer 1 oder 7 Tag(e) alten Sicherung verbinden.


Klicken Sie dann auf"OK", um die Verbindung herzustellen.

![](images/img_1960.jpg){.thumbnail}

- Für Datenbanken des Typs MYSQL4 verwenden Sie bitte den Link unterhalb der Eingabemaske.




### Export
Wie exportiere ich meine SQL-Datenbank? Welche verschiedenen Backup-Möglichkeiten gibt es?

Alles zum Export erfahren Sie in folgender Anleitung: []({legacy}1394)

![](images/img_1932.jpg){.thumbnail}


### Import
Wie importiere ich ein Backup meiner SQL-Datenbank? Welche verschiedenen Möglichkeiten habe ich?

Alles zum Import erfahren Sie in folgender Anleitung: []({legacy}1393)

![](images/img_1933.jpg){.thumbnail}


### Reparieren - Optimieren - Analysieren
Sie können die Tabellen Ihrer Datenbank reparieren, optimieren und analysieren.

Verbinden Sie sich hierfür über das [PhpMyAdmin-Interface](https://phpmyadmin.ovh.net/) mit Ihrer Datenbank.

Wählen Sie dann die Tabelle aus, für die Sie eine der oben genannten Operationen ausführen möchten.

Klicken Sie rechts oben auf "Operationen".

Im Tab zur Wartung Ihrer Tabelle können Sie die gewünschten Operationen ausführen.

![](images/img_1961.jpg){.thumbnail}


### Verwendung von SQL Private
Sie möchten erfahren, wie Sie einen SQL Private Server sinnvoll einsetzen? Und wie Sie Ihre Daten importieren oder exportieren?

In unserer Hilfe zum Thema erfahren Sie [alles Wissenswerte zum SQL Private Angebot](https://www.ovh.de/g2023.alles_zum_sql_private)

![](images/img_1866.jpg){.thumbnail}


## Anleitung für die Installation
Sie möchten ohne technische Vorkenntnisse möglichst schnell Ihre eigene Webseite erstellen?

Zur Installation unserer OVH 1-Klick-Webhosting-Module gibt es eine eigene Hilfe: []({legacy}1402)

![](images/img_1930.jpg){.thumbnail}


### WordPress installieren

WordPress ist ein Content Management System (CMS), mit dem Sie kinderleicht eine Webseite oder einen Blog erstellen und verwalten können.

- Blogs & Webseiten

Eine Anleitung zur manuellen Installation von WordPress finden Sie hier: []({legacy}1375)


![](images/img_1873.jpg){.thumbnail}


### Joomla! installieren

Joomla ist ein Content Management System (CMS), mit dem Sie eine dynamische Internet- oder Intranetseite kinderleicht online verwalten können.

- Webseiten

Eine Anleitung zur manuellen Installation von Joomla! finden Sie hier:[]({legacy}1375)


![](images/img_1874.jpg){.thumbnail}


### PrestaShop installieren

PrestaShop ist eine Open-Source Web-App, mit der Sie Ihren eigenen Online-Shop erstellen können.

- Online-Shop

Eine Anleitung zur manuellen Installation von PrestaShop finden Sie hier:[]({legacy}1375)


![](images/img_1862.jpg){.thumbnail}

## Nützliche Informationen

### .ovhconfig-Datei
Sie möchten die PHP-Version Ihres Hostings ändern? Oder PHP-FPM aktivieren?

Folgende Anleitungen zur Verwendung und Konfiguration der .ovhconfig-Datei haben wir für Sie erstellt:


- <https://docs.ovh.com/de/hosting/enable_php_optimisation_with_ovh_web_hosting/>

- <https://docs.ovh.com/de/hosting/konfiguration_von_php_fur_ein_ovh_webhosting_2014/>



![](images/img_1867.jpg){.thumbnail}


### Verfügbare Bibliotheken auf den OVH Webhostings
Information über die verfügbaren Bibliotheken:

|Library|Verfügbarkeit|
|---|---|
|ffmepg|nicht aktiviert|
|GD|aktiviert|
|imagemagik|aktiviert|
|zend (opcache)|aktiviert|
|PDO|aktiviert|
|Zip - Gzip|aktiviert|



![](images/img_1867.jpg){.thumbnail}
Bitte beachten Sie: Bei Verwendung von PHP-FPM sind aus Sicherheitsgründen folgende Optionen deaktiviert:


- register_globals
- magic_quotes_gpc




### Die Performance meiner Webseite optimieren
Sie möchten mithilfe einer Diagnose die Schwachstellen Ihrer Webseite identifizieren? Oder Sie möchten ganz einfach die Performance verbessern?

Eine Anleitung mit allen nötigen Informationen zum Thema finden Sie hier: <https://docs.ovh.com/de/hosting/webhosting_optimierung_der_performance_ihrer_webseite/>

![](images/img_1865.jpg){.thumbnail}

