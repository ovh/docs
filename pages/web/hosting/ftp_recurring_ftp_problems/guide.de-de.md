---
title: 'Häufige FTP-Probleme'
slug: webhosting_haufige_ftp-probleme
excerpt: 'Webhosting: Häufige FTP-Probleme'
legacy_guide_number: g1996
section: 'FTP und SSH'
---

## Ich habe meine Dateien mit einer FTP-Programm übertragen, aber es wird nichts angezeigt.

- Überprüfen Sie, ob die Dateien Ihrer Seite im /www Verzeichnis Ihres Hostings abgelegt sind.
- Wenn Sie eine Änderung an Ihrer DNS Zone vorgenommen haben, kann es zu einer Verzögerung von 4 bis 24 Stunden kommen.


## Meine FTP-Codes funktionieren nicht
Überprüfen Sie, ob Sie das Passwort korrekt übertragen haben. Am besten verwenden Sie Copy&Paste (Strg-C und Strg-V in Windows). Achten Sie besonders auf "l" (L) und "1" (eins) sowie O (den Buchstaben) und 0 (null).
Wenn es trotzdem nicht funktioniert, sind die verwendeten Login-Daten vermutlich nicht korrekt. In diesem Fall hilft Ihnen [diese Anleitung](https://www.ovh.de/g1374.mettre-mon-site-en-ligne#deposer_mes_fichiers_en_ftp_recuperer_mes_identifiants_ftp) weiter.


## Wie viel Platz habe ich noch auf meiner Webseite?
Wenn auf Ihrem Webhosting zu wenig Speicherplatz frei ist, kann dies zu Problemen beim Hochladen neuer Dateien führen.

- Um das zu überprüfen, loggen Sie sich in Ihr [OVH Kundencenter](https://www.ovh.com/manager/web) ein.
- Wählen Sie im Menü links das gewünschte Hosting aus.



![](images/img_3298.jpg){.thumbnail}
In der folgenden Übersicht sehen Sie den verwendeten/verfügbaren Speicherplatz.

![](images/img_3299.jpg){.thumbnail}


## Ich kann meine Dateien nicht auf den FTP-Server schicken.
In diesem Fall müssen Sie sich über Ihren FTP-Client im Passivmodus verbinden (Konfigurationsmodus eines FTP-Servers, bei dem der FTP-Server selbst den Port wählt). In Filezilla beispielsweise geht dies über: Bearbeiten -> Einstellungen -> Verbindung -> Firewall Einstellungen -> Passiver Modus.


## Wozu dient das Verzeichnis cgi-bin?
Das Verzeichnis cgi-bin ist nicht direkt vom Webserver lesbar. Es handelt sich um ein Verzeichnis, das parallel zum /www Verzeichnis besteht. Es weist daher folgende Sicherheitsmerkmale auf:

- Dateien im Verzeichnis cgi-bin können nicht gelesen werden. Sie können lediglich ausgeführt werden. Sie können dort also beispielsweise keine gif- oder jpeg-Bilddateien platzieren. Der Versuch sie zu lesen würde einen Fehler verursachen.
- Da Dateien im Verzeichnis cgi-bin nicht gelesen werden können, können Sie dort auch Textdateien von Datenbanken platzieren, die Sie schützen möchten.
- Die Ausführung von CGI-Skripten aus dem Verzeichnis cgi-bin läuft über ein Alias Ihrer Seite ab. Sie können die Skripte ausschließlich über Ihre Domain ausführen.



