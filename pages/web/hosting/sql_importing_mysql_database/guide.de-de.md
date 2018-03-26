---
title: 'Webhosting: Import einer MySQL-Datenbank'
excerpt: 'Webhosting: Import einer MySQL-Datenbank'
id: '1393'
slug: webhosting_import_einer_mysql-datenbank
legacy_guide_number: g1393
---

## Voraussetzungen
Sie benötigen:

- Die Backup-Datei Ihrer Datenbank, auch Dump* genannt.(Eine Anleitung zum Backup von SQL-Datenbanknen finden Sie hier: [https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken/](https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken/).

Das Datenbank-Backup ist in der Regel im Format .sql.
Wenn Ihre Datenbank nicht bei OVH erstellt wurde, empfehlen wir eine Kontaktaufnahme zu dem Drittanbeiter, um Informationen zum Datenbankimport über seinen Service einzuholen. 

- Außerdem benötigen Sie Ihr Login und das zugehörige Passwort sowie den SQL-Host der Datenbank, um sich mit der Datenbank zu verbinden.

![](images/img_1802.jpg){.thumbnail}


## Über Ihr OVH Kundencenter
Die einfachste und schnellste Lösung für den Import Ihrer Datenbank ist die Verwendung des [OVH Kundencenters](https://www.ovh.com/manager/).
Der große Vorteil besteht darin, dass es hier kein Größenlimit à für die Backup-Datei gibt.

Loggen Sie sich mit Ihrer Kundenkennung und dem zugehörigen Passwort in Ihr [Kundencenter](https://www.ovh.com/manager/) ein. Wählen Sie dann im Menü links das gewünschte Hosting aus und begeben Sie sich dann in den Tab Datenbank.

![](images/img_4125.jpg){.thumbnail}

Klicken Sie auf das kleine Zahnrad rechts neben der Datenbank, in die Sie Ihr Backup importieren möchten, und wählen Sie "Import einer Datei".

Folgen Sie anschließend den Anweisungen im Kundencenter, um Ihr SQL-Backup zu importieren.

![](images/img_4126.jpg){.thumbnail}

## Über PhpMyAdmin für MySQL
Verbinden Sie sich über PhpMyAdmin mit Ihrer Datenbank.

Folgen Sie hierfür folgendem Link [OVH PhpMyAdmin](https://phpmyadmin.ovh.net)

- Wenn Sie mit PhpMyAdmin verbunden sind, wählen Sie die gewünschte Datenbank durch einen Klick auf den Namen  aus (der blaue Rahmen links oben im Screenshot).

- Klicken Sie anschließend auf "Importieren".

- Wählen Sie Ihre Backup-Datei durch Klick auf "Durchsuchen" (Bitte beachten Sie: Die Dateigröße darf 16 MB nicht überschreiten).

- Klicken Sie auf "Ausführen", um den Import zu starten.

Wenn Sie ein Backup über Ihr Kundencenter wiederherstellen, denken Sie daran, die Datei vor dem Import zu dekompromieren.

![](images/img_1962.jpg){.thumbnail}

## Bitte beachten:

- Die Größe der Datei darf 16 MB nicht überschreiten.

## Über ein Skript auf Ihrem Hosting
Sie können auch Skripte in einer txt.-Datei erstellen. Denken Sie daran, die Dateiendung he nach verwendeter Skriptsprache anzupassen.

In untenstehenden Skripten nehmen Sie folgende Änderungen vor:

- name_der_datenbank.sql durch den Namen Ihrer Datei.

- sql_server durch den Namen des Servers, auf dem Sie die Datenbank erstellt haben.

- name_der_datenbank durch den Namen Ihrer Datenbank.

- passwort durch das zu Ihrer Datenbank gehörige Passwort.

Ihre Backup-Datei muss vorab über FTP auf Ihrem Hosting abgelegt werden.

## PHP (importbase.php):
Bitte den Code entsprechend anpassen und eingeben: 

```
<?php
echo "Ihre Datenbank wird wiederhergestellt.......
<br>";
system("cat name_der_datenbank.sql | mysql --host=sql_server --user=name_der_datenbank --password=passwort name_der_datenbank");
echo "Vorgang abgeschlossen.";
?>
```

## Perl (importbase.cgi) :
Bitte den Code entsprechend anpassen und eingeben: 

```
#!/usr/bin/perl

print "Ihre Datenbank wird wiederhergestellt.......
<br>";
system("cat name_der_datenbank.sql | mysql --host=sql_server --user=name_der_datenbank --password=passwort name_der_datenbank");
print "Vorgang abgeschlossen.";
```

- Laden Sie das erstellte Skript sowie den Dump* Ihrer Datenbank per FTP in das www Verzeichnis Ihres Hostings und rufen Sie das Skript über Ihren Browser mit folgender URL auf: http://ihre_domain.com/importbase.php

Ersetzen Sie ihre_domain.com durch Ihren Domainnamen und importbase.php durch den Namen Ihrer Datei.

Ihre Backup-Datei ist komprimiert?

Falls Ihr Dump* einmal komprimiert ist, also in der Form .sql.gz vorliegt, müssen Sie lediglich folgenden Befehl an den Anfang des Skripts setzen:

```
system("gunzip name_der_datenbank.sql.gz");
```

Beispiel:

## PHP: komprimierter Dump + DB-Wiederherstellung
Beispielcode: 

```
<?php
echo "Datei wird dekomprimiert.....
<br>";
system("gunzip testbackup.sql.gz");
echo "Ihre Datenbank wird wiederhergestellt......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
echo "Vorgang abgeschlossen.";
?>
```

## Perl: komprimierter Dump + DB-Wiederherstellung
Beispielcode: 

```
#!/usr/bin/perl

print "Datei wird dekomprimiert.....
<br>";
system("gunzip testbackup.sql.gz");
print "Ihre Datenbank wird wiederhergestellt.......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
print "Vorgang abgeschlossen.";
```

## Über einen Befehl via SSH

## Sie benötigen:

- FTP-Login und Passwort, damit Sie sich mit Ihrem Webhosting verbinden können.

- Ein Angebot, bei dem eine SSH-Verbindung möglich ist ([Details zu unseren Angeboten](https://www.ovh.de/hosting/))

Eine Anleitung zur SSH-Verbindung finden Sie hier:

- [https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/)

## Datenbankimport via SSH
Verbinden Sie sich per SSH mit ihrem Webhosting her.

Begeben Sie sich in das Verzeichnis, wo Sie die zu importierende Datei abgelegt haben. Dann müssen Sie folgenden Befehl eingeben:

Bitte den Code entsprechend anpassen und eingeben: 

```
cat name_der_datenbank.sql | mysql --host=sql_server --user=name_der_datenbank --password=passwort name_der_datenbank
```

Hier ein Beispiel für einen korrekten Code: 

```
cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport
```

## Fehler aufgrund des Datenbanknamens
Es kann auch notwendig sein, folgende Zeile oben in Ihrer Backup-Datei zu ergänzen:

```
use name_der_datenbank;
```

name_der_datenbank entspricht hier dem Namen der Datenbank, in die Sie diese Daten importieren möchten.

## Glossar
*Dump: Backup-Datei der Datenbank Ihrer Webseite.