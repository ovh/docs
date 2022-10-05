---
title: 'Beheben des Fehlers “500 Internal Server Error”'
excerpt: Erfahren Sie hier, welche Maßnahmen Sie bei einem Fehlercode 500 anwenden können
slug: webhosting_bei_einem_fehler_500_internal_server_error
section: 'Diagnose'
order: 06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 21.07.2022**

## Ziel

Der Fehlertyp "500 Internal Server Error" kann Ihre gesamte Website oder nur Teile davon betreffen. Er kann dauerhaft sein, sporadisch auftreten oder zu einer leeren Seite führen.

![error500](images/error-500-2.png){.thumbnail}

Diese Fehler können auch durch Updates entstehen, die **automatisch** von Komponenten Ihrer Website durchgeführt werden und daher ohne jegliche Änderung Ihrerseits auftreten.

**Diese Anleitung erklärt, wie Sie die häufigsten "Fehler 500" diagnostizieren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder stellen Ihre Fragen in der OVHcloud Community unter [https://community.ovh.com/en/](https://community.ovh.com/en/) (Englisch). Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten.
>


## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)
- Sie haben keine ausstehenden [Zahlungen](https://docs.ovh.com/de/billing/ovh-rechnungen-verwalten/#pay-bills) und [Verlängerungen](https://docs.ovh.com/de/billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/#renewal-management) der dazugehörigen Dienstleistungen (Domainname und Webhosting).


## In der praktischen Anwendung

Bevor Sie fortfahren, überprüfen Sie Ihre Website auf verschiedenen Geräten und Browsern. Wenn der Fehler in einigen Fällen nicht auftritt (z.B. in einem anderen Browser), steht er nicht mit Ihren OVHcloud Diensten in Zusammenhang. Starten Sie Ihre lokalen Geräte neu und wenden Sie sich bei Bedarf an einen IT-Experten.

Vereinfacht ausgedrückt besteht eine Webseite aus **Quellcode** (zum Beispiel .php-Dateien, verbunden mit einer Datenbank) und zusätzlichen Daten. Wir raten Ihnen dringend, Backups Ihrer Daten zu erstellen, bevor Sie weitere Maßnahmen ergreifen:

- Folgen Sie [dieser Anleitung](../verbindung-ftp-speicher-webhosting/), um eine Kopie aller Dateien Ihrer Website abzurufen.
- Wenn Ihre Website eine Datenbank verwendet, können Sie zusätzlich [diese Anleitung](../webhosting_hilfe_zum_export_von_datenbanken/) zum Abruf einer Kopie konsultieren.

Um einen "Fehler 500" zu beheben, können Sie Ihre Website aus einem Backup [wiederherstellen](#restore). Es ist jedoch vorzuziehen, eine eingehende Diagnose durchzuführen, um den genauen Ursprung des Fehlers zu ermitteln.

### Die Logs Ihres Hostings überprüfen

Lesen Sie zuerst [diese Anleitung](../webhosting_die_statistiken_und_logs_meiner_website_einsehen/), um die Ursache des Fehlers 500 in den Logs Ihres Hostings zu ermitteln.

### Ihre Website in den Entwicklermodus versetzen

Um mögliche PHP-Fehler anzuzeigen, versetzen Sie Ihr Hosting anschließend mithilfe [dieser Instruktionen](../die_laufzeitumgebung_meines_webhostings_andern/#schritt-2-webhosting-konfiguration-bearbeiten) in den Entwicklermodus (`development`).

### Die .htaccess Datei testen

Ein "Fehler 500" kann auf eine Anomalie in einer `.htaccess` Datei zurückzuführen sein. Diese Datei befindet sich in der Regel auf der ersten Ebene des Wurzelverzeichnisses im FTP-Speicherplatz Ihres Hostings.

Um dies zu überprüfen, [verbinden Sie sich via FTP mit Ihrem Hosting](../verbindung-ftp-speicher-webhosting/).

Benennen Sie diese Datei dann in `.htaccess.old` um und aktualisieren Sie Ihre Website im Browser.

Wenn Sie Hilfe bei der Durchführung der notwendigen Operationen benötigen, können Sie sich [an einen unserer Partner wenden](https://partner.ovhcloud.com/de/directory/).

### Berechtigungen von Ordnern und Dateien überprüfen

Jede Datei und jeder Ordner Ihres Quellcodes hat eine bestimmte Stufe von Lese-, Schreib- und Ausführungsberechtigungen innerhalb des Dateisystems Ihres Webhostings. Das soll sie vor böswilliger oder unsachgemäßer Manipulation schützen.

Ein "Fehler 500" kann mit einem falschen Level an Zugriffsrechten auf Ordner oder Dateien Ihrer Seite zusammenhängen.

Um auf diese Dateien zuzugreifen, [verbinden Sie sich via FTP mit Ihrem Hosting](../verbindung-ftp-speicher-webhosting/).

Die Anleitung "[Verwendung von FileZilla](../webhosting_hilfe_zur_verwendung_von_filezilla/#datei-und-ordnerrechte)" hilft Ihnen anschließend, folgende Elemente zu überprüfen:

- Das **Root**-Verzeichnis Ihres Hostings (es handelt sich um das als `/` oder `.` angezeigte Verzeichnis in Ihrem FTP-Programm) müssen die Berechtigungen auf `705` gesetzt sein (Standardberechtigungen). Wir empfehlen Ihnen, diese Berechtigungen nicht zu ändern.
- Verzeichnisse müssen `705` haben.
- Die Dateien müssen `604` haben.

### Auf die Fehlerdetails in Ihren Skripten zugreifen

Aus Sicherheitsgründen verschleiert Ihre Website alle technischen Details über einen Fehler 500.

Wenn Sie oder Ihr Entwickler Zugang zu diesen Informationen haben möchten, können Sie sich [über SSH mit Ihrer Website verbinden](../webhosting_ssh_auf_ihren_webhostings/) (nur verfügbar mit einem [Business- oder Entwickler-Angebot](https://www.ovhcloud.com/de/web-hosting/)).

### Ihre Website auf einen vorherigen Zustand zurücksetzen <a name="restore"></a>

Wenn der "Fehler 500" nach dem Ändern der PHP-Konfiguration Ihres Webhostings aufgetreten ist, kehren Sie zur vorherigen Einstellung zurück, indem Sie [unserer Anleitung folgen](../konfiguration_von_php_fur_ein_ovh_webhosting_2014/).

> [!warning]
>
> Das Ausführen von Datenbank- oder FTP-Wiederherstellungsvorgängen ersetzt alle in Ihrem FTP-Speicherplatz oder Ihrer Datenbank enthaltenen Daten durch eine Backupversion. Infolgedessen können Sie keine Änderungen oder Dateien wiederherstellen, die **nach** dem Zeitstempel der verwendeten Sicherung gespeichert wurden.
> 
> Die Wiederherstellung des Quellcodes Ihrer Website wirkt sich auf alle Websites auf Ihrem OVHcloud Webhosting aus.
>

Um den Quellcode Ihrer Website wiederherzustellen, lesen Sie unsere Anleitung "[Den Speicherplatz Ihres Webhostings wiederherstellen](../webhosting-speicherplatz-wiederherstellen/)". Beachten Sie, dass diese Operation allein keine dauerhafte Lösung darstellt.

Wenn Ihre Website eine Datenbank nutzt, lesen Sie unsere Anleitung "[Backup in eine Webhosting-Datenbank importieren](../webhosting_import_einer_mysql-datenbank/#backup-uber-das-kundencenter-wiederherstellen)", um diese auf einen früheren Zustand zurückzusetzen.


## Weiterführende Informationen <a name="gofurther"></a>

[Kontaktieren Sie OVHcloud Partner](https://partner.ovhcloud.com/de/directory/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>
