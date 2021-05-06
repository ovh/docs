---
title: 'Beheben eines "500 Internal Server" Fehlers'
excerpt: Maßnahmen bei "500 Internal Server Error"
slug: webhosting_bei_einem_fehler_500_internal_server_error
section: 'Diagnose'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 05.05.2021**

## Ziel

Die 500 "Internal Server Error" können Ihre Website ganz oder teilweise betreffen, zufällig oder dauerhaft sein. Sie können auch als leere Seite erscheinen.

![error500](images/error-500-2.png){.thumbnail}

Sie stammen manchmal auch von einem Update, das **automatisch** von einer Komponente Ihrer Website durchgeführt wurde und somit ohne Aktion Ihrerseits erfolgt.

**In dieser Anleitung erfahren Sie, wie Sie die häufigsten 500 Fehler-Fälle diagnostizieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie [hier](#gofurther).


## Voraussetzungen

- Über ein [Shared Hosting](https://www.ovh.de/hosting/) Angebot verfügen
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) eingeloggt


## In der praktischen Anwendung

Bevor Sie fortfahren, überprüfen Sie Ihre Website auf mehreren Geräten und Browsern. Wenn Fehler 500 in einigen Fällen nicht angezeigt wird (z. B. über einen anderen Browser als Ihren), dann weil er nicht mit Ihren OVHcloud Diensten in Zusammenhang steht. Starten Sie Ihre Geräte neu und kontaktieren Sie bei Bedarf einen IT-Techniker in Ihrer Nähe.

Eine Webseite besteht aus einem **Quellcode** (zum Beispiel .php-Dateien, die beim Verbinden mit Ihrer Datenbank sichtbar sind). Trotz des Fehlers 500 empfehlen wir Ihnen dringend, vor weiteren Änderungen ein lokales Backup Ihrer Daten durchzuführen:

- Folgen Sie dieser [Anleitung](../verbindung-ftp-speicher-webhosting/), um eine Kopie Ihres Quellcodes abzurufen.
- Wenn Ihre Website eine Datenbank verwendet, lesen Sie bitte dieses [Dokument](../webhosting_hilfe_zum_export_von_datenbanken/), um eine Kopie abzurufen.

Bei einem Fehler 500 ist die [Wiederherstellung](#Wiederherstellung) Ihrer Website durchaus möglich. Es ist jedoch vorzuziehen, eine eingehende Diagnose durchzuführen, um den genauen Ursprung des Fehlers zu ermitteln.

### Die Logs Ihres Hostings überprüfen

Lesen Sie zuerst diese [Anleitung](../webhosting_die_statistiken_und_logs_meiner_website_einsehen/), um die Ursache des Fehlers 500 in den Logs Ihres Hostings zu ermitteln.

### Ihre Website in den Entwicklungsmodus versetzen

Um eventuelle PHP-Fehler zu erkennen, versetzen Sie Ihr Hosting anschließend mithilfe dieser [Angaben](../die_laufzeitumgebung_meines_webhostings_andern/#schritt-2-webhosting-konfiguration-bearbeiten) in den `Entwicklung` Modus.

### Die .htaccess Datei testen

Ein Fehler 500 kann auf eine Anomalie in einer `.htaccess` Datei zurückzuführen sein. Diese Datei befindet sich in der Regel auf der ersten Ebene im Ordner mit Ihrer Website auf Ihrem FTP.

Um dies zu überprüfen, [loggen Sie sich via FTP](../verbindung-ftp-speicher-webhosting/) mit Ihrem Hosting ein.

Umbenennen Sie diese Datei dann `.htaccess.old` und wiederholen Sie Ihre Website.

Wenn dieser erneut verfügbar ist, dann geht es um `.htaccess`. Er muss daher geändert werden. Wenn Sie möchten, kontaktieren Sie einen unserer [Partner](https://www.ovh.com/world/discover-marketplace/).

### Rechte an Ordnern und Dateien überprüfen

Die Dateien und Ordner Ihrer Website verfügen alle über ein gewisses Maß an "Berechtigungen" beim Lesen, Schreiben und Ausführen. Dies soll sie vor böswilliger oder falscher Manipulation schützen.

Ein Fehler 500 kann mit einem fehlerhaften Level an Zugriffsrechten auf einige Ordner oder Dateien Ihrer Seite verbunden sein.

Um auf diese Dateien zuzugreifen, loggen Sie sich via FTP in unserer [Dokumentation](../verbindung-ftp-speicher-webhosting/) mit Ihrem Hosting ein.

Die Anleitung "[Verwendung von FileZilla](../webhosting_hilfe_zur_verwendung_von_filezilla/#datei-und-ordnerrechte)" hilft Ihnen anschließend, folgende Elemente zu überprüfen:

- Die **Wurzel** Ihres Hostings (es handelt sich um das registrierte `/` oder `.` gemachte Verzeichnis in Ihrem FTP-Programm) müssen die Berechtigungen `705` sein (dies sind standardmäßig die Berechtigungen). Wir empfehlen Ihnen, diese Berechtigungen nicht zu ändern.
- Die Akten müssen Rechte `705` haben.
- Die Dateien müssen Rechte `604` haben.

### Auf die Fehlerdetails in Ihren Skripten zugreifen

Aus Sicherheitsgründen verschleiert Ihre Seite eventuelle Details zum Ursprung des Fehlers 500 für alle, die sich mit einem Webbrowser verbinden.

Wenn Sie oder Ihr Entwickler Zugang zu diesen Informationen haben möchten, können Sie sich über eine SSH-Verbindung mit Ihrer Website [pro2014](https://www.ovh.de/hosting/hosting-pro.xml) Webhosting-Lösung [verbinden](../webhosting_ssh_auf_ihren_webhostings/).

### Ihre Website wieder in ihren vorherigen Zustand zurücksetzen <a name="Wiederherstellung"></a>

> [!warning]
>
> Die Wiederherstellung des Quellcodes Ihrer Website betrifft alle Seiten Ihres OVHcloud Hostings.
> 
> Bei einer Wiederherstellung wird der Inhalt Ihres FTP-Speicherplatzes oder der Datenbank durch ein Backup ersetzt. Sie können die auf dem Server befindlichen Daten also nicht unmittelbar vor der Wiederherstellung abrufen.

Um den Quellcode Ihrer Website wiederherzustellen, lesen Sie unsere Anleitung ["Den Speicherplatz Ihres Webhostings wiederherstellen](../webhosting-speicherplatz-wiederherstellen/)".

Wenn Ihre Website eine Datenbank enthält, lesen Sie unsere [Anleitung "[Backup in eine Webhosting-Datenbank importieren](../webhosting_import_einer_mysql-datenbank/#backup-uber-das-kundencenter-wiederherstellen)", um diese auf einen früheren Zustand wiederherzustellen.

Ist der Fehler 500 nach einem Update der PHP-Version Ihres Hostings aufgetreten, lesen Sie unsere Anleitung "[PHP-Version eines Webhostings ändern](../konfiguration_von_php_fur_ein_ovh_webhosting_2014/)", um zur vorherigen Konfiguration zurückzukehren.


## Weiterführende Informationen <a name="gofurther"></a>

[Alles zur .htaccess Datei](../webhosting_alles_uber_die_datei_htaccess/)

[Kontaktieren Sie die OVHcloud Partner unter](https://www.ovh.com/world/discover-marketplace/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>