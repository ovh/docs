---
title: 'Beheben des Fehlers “500 Internal Server Error”'
excerpt: "Erfahren Sie hier, welche Maßnahmen Sie bei einem Fehlercode 500 anwenden können"
updated: 2023-11-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Der Fehlertyp "500 Internal Server Error" kann Ihre gesamte Website oder nur Teile davon betreffen. Er kann dauerhaft sein, sporadisch auftreten oder zu einer leeren Seite führen.

![error500](http-500.png){.thumbnail}

Diese Fehler können auch durch Updates entstehen, die **automatisch** von Komponenten Ihrer Website durchgeführt werden und daher ohne jegliche Änderung Ihrerseits auftreten.

**Diese Anleitung erklärt, wie Sie die häufigsten "Fehler 500" diagnostizieren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](partner.) und/oder stellen Ihre Fragen in der OVHcloud Community unter [https://community.ovh.com/en/](https://community.ovh.com/en/) (Englisch). Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten.
>

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](hosting.) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](manager.)
- Sie haben keine ausstehenden [Zahlungen](invoice_management#pay-bills.) und [Verlängerungen](how_to_use_automatic_renewal#renewal-management.) der dazugehörigen Dienstleistungen (Domainname und Webhosting).

## In der praktischen Anwendung

Bevor Sie fortfahren, überprüfen Sie Ihre Website auf verschiedenen Geräten und Browsern. Wenn der Fehler in einigen Fällen nicht auftritt (z.B. in einem anderen Browser), steht er nicht mit Ihren OVHcloud Diensten in Zusammenhang. Starten Sie Ihre lokalen Geräte neu und wenden Sie sich bei Bedarf an einen IT-Experten.

Vereinfacht ausgedrückt besteht eine Webseite aus **Quellcode** (zum Beispiel .php-Dateien, verbunden mit einer Datenbank) und zusätzlichen Daten. Wir raten Ihnen dringend, Backups Ihrer Daten zu erstellen, bevor Sie weitere Maßnahmen ergreifen:

- Folgen Sie [dieser Anleitung](ftp_connection1.), um eine Kopie aller Dateien Ihrer Website abzurufen.
- Wenn Ihre Website eine Datenbank verwendet, können Sie zusätzlich [diese Anleitung](sql_database_export1.) zum Abruf einer Kopie konsultieren.

Um einen "Fehler 500" zu beheben, können Sie Ihre Website aus einem Backup [wiederherstellen](diagnostic_fix_500_internal_server_error_#restore.). Es ist jedoch vorzuziehen, eine eingehende Diagnose durchzuführen, um den genauen Ursprung des Fehlers zu ermitteln.

### Die Logs Ihres Hostings überprüfen

Lesen Sie zuerst [diese Anleitung](logs_and_statistics1.), um die Ursache des Fehlercodes 500 in den Logs Ihres Hostings zu ermitteln.

### Ihre Website in den Entwicklermodus versetzen

Um mögliche PHP-Fehler anzuzeigen, versetzen Sie Ihr Hosting anschließend mithilfe [dieser Instruktionen](configure_your_web_hosting#schritt-2-webhosting-konfiguration-bearbeiten.) in den Entwicklermodus (`development`).

### Die .htaccess Datei testen

Ein "Fehler 500" kann auf eine Anomalie in einer `.htaccess` Datei zurückzuführen sein. Diese Datei befindet sich in der Regel auf der ersten Ebene des Wurzelverzeichnisses im FTP-Speicherplatz Ihres Hostings.

Um dies zu überprüfen, [verbinden Sie sich via FTP mit Ihrem Hosting](ftp_connection1.).

Benennen Sie diese Datei dann in `.htaccess.old` um und aktualisieren Sie Ihre Website im Browser.

Wenn Sie Hilfe bei der Durchführung der notwendigen Operationen benötigen, können Sie sich [an einen unserer Partner wenden](partner.).

### Berechtigungen von Ordnern und Dateien überprüfen

Jede Datei und jeder Ordner Ihres Quellcodes hat eine bestimmte Stufe von Lese-, Schreib- und Ausführungsberechtigungen innerhalb des Dateisystems Ihres Webhostings. Das soll sie vor böswilliger oder unsachgemäßer Manipulation schützen.

Ein "Fehler 500" kann mit einem falschen Level an Zugriffsrechten auf Ordner oder Dateien Ihrer Seite zusammenhängen.

Um auf diese Dateien zuzugreifen, [verbinden Sie sich via FTP mit Ihrem Hosting](ftp_connection1.).

Die Anleitung "[Verwendung von FileZilla](ftp_filezilla_user_guide#datei-und-ordnerrechte.)" hilft Ihnen anschließend, folgende Elemente zu überprüfen:

- Das **Root**-Verzeichnis Ihres Hostings (es handelt sich um das als `/` oder `.` angezeigte Verzeichnis in Ihrem FTP-Programm) müssen die Berechtigungen auf `705` gesetzt sein (Standardberechtigungen). Wir empfehlen Ihnen, diese Berechtigungen nicht zu ändern.
- Verzeichnisse müssen `705` haben.
- Die Dateien müssen `604` haben.

### Auf die Fehlerdetails in Ihren Skripten zugreifen

Aus Sicherheitsgründen verschleiert Ihre Website alle technischen Details über einen Fehler vom Typ "500".

Wenn Sie oder Ihr Entwickler Zugang zu diesen Informationen haben möchten, können Sie sich [über SSH mit Ihrer Website verbinden](ssh_on_webhosting1.) (nur verfügbar mit einem [Webhosting der Reihe Pro, Performance oder Cloud Web](hosting.)).

### Den Zustand der Datenbank überprüfen

Für alle "Fehler 500", die mit der Datenbank Ihrer Website in Zusammenhang stehen könnten, lesen Sie unsere Anleitung ["Die häufigsten Datenbankfehler beheben"](diagnosis_database_errors1.).

### Ihre Website auf einen vorherigen Zustand zurücksetzen <a name="restore"></a>

Wenn der "Fehler 500" nach dem Ändern der PHP-Konfiguration Ihres Webhostings aufgetreten ist, kehren Sie zur vorherigen Einstellung zurück, indem Sie [unserer Anleitung folgen](configure_your_web_hosting1.).

> [!warning]
>
> Das Ausführen von Datenbank- oder FTP-Wiederherstellungsvorgängen ersetzt alle in Ihrem FTP-Speicherplatz oder Ihrer Datenbank enthaltenen Daten durch eine Backupversion. Infolgedessen können Sie keine Änderungen oder Dateien wiederherstellen, die **nach** dem Zeitstempel der verwendeten Sicherung gespeichert wurden.
> 
> Die Wiederherstellung des Quellcodes Ihrer Website wirkt sich auf alle Websites auf Ihrem OVHcloud Webhosting aus.
>

Um den Quellcode Ihrer Website wiederherzustellen, lesen Sie unsere Anleitung "[Den Speicherplatz Ihres Webhostings wiederherstellen](ftp_save_and_backup1.)". Beachten Sie, dass diese Operation allein keine dauerhafte Lösung darstellt.

Wenn Ihre Website eine Datenbank nutzt, lesen Sie unsere Anleitung "[Backup in eine Webhosting-Datenbank importieren](sql_importing_mysql_database#backup-uber-das-kundencenter-wiederherstellen.)", um diese auf einen früheren Zustand zurückzusetzen.

## Weiterführende Informationen <a name="go-further"></a>

[Was tun, wenn Ihre Website nicht erreichbar ist?](diagnostic-website-not-accessible1.)

[Was tun bei dem Fehler "Dies ist keine sichere Verbindung"?](diagnostic-not-secured1.)

[Was tun, wenn eine “Index of“-Seite angezeigt wird?](diagnostic-index-of1.)

[Was tun bei dem Fehler "403 forbidden"?](diagnostic_403_forbidden1.)

[Die häufigsten Datenbankfehler beheben](diagnosis_database_errors1.)

[Meine Website lädt zu langsam. Was soll ich tun?](diagnostic_slownesses1.)

[Fehler "Seite nicht installiert" beheben](multisites_website_not_installed1.)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](partner.).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.