---
title: 'Beheben eines "500 Internal Server" Fehlers'
excerpt: Maßnahmen bei "500 Internal Server Error"
slug: webhosting_bei_einem_fehler_500_internal_server_error
section: 'Diagnose'
---


## .htaccess
Wenn die Syntax Ihrer .htaccess-Datei nicht korrekt ist, meldet der Webserver einen Fehler 500. Benennen Sie .htaccess um, etwa in .htaccess_bak. Wenn Ihre Seite dann wieder funktioniert, ist die .htaccess-Datei die Ursache des Fehlers.

## Berechtigungen/Rechte
Die Vergabe der Dateiberechtigungen für Ihre Skripte ist aufgrund von Sicherheitsregeln eingeschränkt:

- Root-Verzeichnis Ihrer Seite: 705 (obligatorisch; Default-Einstellung bei OVH). Es handelt sich dabei um das Verzeichnis / oder . (Punkt) Ihres FTP-Servers. Ändern Sie dieses nicht.
- Andere Verzeichnisse: Maximal 755.
- PHP-/CGI-Skripte: Maximal 755.

Wie Sie die Rechte für Dateien oder Verzeichnisse ändern, erfahren Sie [hier](https://www.ovh.de/g1380.webhosting_hilfe_zur_verwendung_von_filezilla).


## Skriptfehler
Wenn Sie beispielsweise mit PERL programmieren, kann ein Fehler im Skript ebenfalls zu einem Fehler 500 führen. Hierzu aus Sicherheitsgründen keine weiteren Details. Um die Skripte zu debuggen, können Sie die Telnet/SSH-Verbindung verwenden (möglich ab dem Angebot PRO).


