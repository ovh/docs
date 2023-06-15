---
title: Was tun bei dem Fehler "403 forbidden"?
excerpt: Erfahren Sie hier, wie Sie Ihre Website wieder online bringen, wenn “403 forbidden“ angezeigt wird
slug: diagnose-403-forbidden
section: Diagnose
order: 08
updated: 2023-06-09
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 09.06.2023**

## Ziel 

Eine Seite mit der Meldung "**403 forbidden**" kann in folgenden Fällen erscheinen:

- Die FTP-Zugriffsrechte (CHMOD) sind unzureichend oder eingeschränkt. Der Browser-Zugriff auf Dateien, Ordner oder Website wird dann vom Webserver Ihres Webhostings verweigert.

- Die Datei **.htaccess** enthält eine Regel zur Zugriffsbeschränkung.

- Ein Sicherheitsplugin verhindert den Browser-Zugriff auf Dateien, Ordner oder Website.

- Es ist eine Application Firewall aktiviert.

Wenn ein verdächtiges Verhalten erkannt wird, können unsere Sicherheitsroboter den Zugriff auf die Dateien Ihres Webhostings vorübergehend blockieren. Mit dieser Maßnahme sollen folgende Auswirkungen verhindert werden:

- Die Manipulation Ihrer Webhosting-Daten aufgrund eines möglichen Hacks

- Die Verbreitung von Schadcode an andere Webserver und dadurch verursachte Angriffe auf Websites

- Die Ausführung illegaler Aktionen
 
Mit der automatisierten Sperrung werden Sie auch vor möglichen rechtlichen Konsequenzen geschützt, die sich aus der Verbreitung von Schadcode und Angriffen ergeben, die von Ihrem Webhosting stammen. 
 
*Wenn Sie von dieser Sperrung betroffen sind, erhalten Sie eine Benachrichtigung an die E-Mail-Adresse des "Administrator"-Kontakts Ihres Webhostings*.

![403error](images/403error.png){.thumbnail}

**Diese Anleitung erklärt, wie Sie im Fall einer Anzeige von “403 forbidden“ den Zugang zu Ihrer Seite entsperren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen in der [OVHcloud Community](https://community.ovh.com/en/) zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>


## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/).
- Sie verfügen über die [Login-Daten](/pages/web/hosting/ftp_connection) für den FTP-Speicherplatz Ihres Hostings.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Schritt 1: Die Situation analysieren

Wenn die Seite "**403 forbidden**" nach einer Änderung an Ihrer Website erscheint, [setzen Sie den FTP-Speicherplatz Ihres Hostings ganz oder teilweise zu einem früheren Zeitpunkt zurück](/pages/web/hosting/ftp_save_and_backup).

Wenn Sie mit den verfügbaren Backups den Zugang zu Ihrer Website nicht wiederherstellen können, kontaktieren Sie einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/).

Wenn die Seite "**403 forbidden**" ohne Änderung Ihrer Website erscheint, prüfen Sie Ihren Posteingang. Wenn Sie eine E-Mail von unserem System erhalten haben, die eine Schließung Ihres Hostings aus Sicherheitsgründen meldet, gehen Sie zu [Schritt 2](#step-2) dieser Anleitung.

Wenn die Seite "**403 forbidden**" ohne Aktion Ihrerseits erscheint und Sie diesbezüglich keine Benachrichtigung erhalten haben, überprüfen Sie zunächst die FTP-Zugriffsrechte (CHMOD) Ihrer Dateien und Ordner sowie den in Ihrer **.htaccess** enthaltenen Code. Überprüfen Sie auch, ob dieser Zustand ggf. von einem Sicherheitsplugin oder einer Application Firewall verursacht wird. Falls nötig, kontaktieren Sie einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/).

### Schritt 2: Sicherheitsmaßnahmen auf Ihrer Seite durchführen <a name="step-2"></a>

Überprüfen Sie zunächst die Sicherheit Ihrer Computer und Geräte:

- Führen Sie Sicherheitsupdates für alle Ihre Geräte durch.

- Überprüfen Sie, ob ein Antivirus-Dienst installiert ist, aktualisieren Sie ihn und starten Sie einen vollständigen Scan. Wenn Sie keine solche Software besitzen, konsultieren Sie vor der Installation einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/)

- Ändern Sie alle Ihre persönlichen Passwörter, insbesondere Ihrer E-Mail-Accounts, und halten Sie sich dabei an die **Best Practices** in [dieser Anleitung](/pages/account/customer/manage-ovh-password).

- Ändern Sie die Passwörter für alle Ihre OVHcloud Dienste, insbesondere für die [Datenbank](/pages/web/hosting/sql_change_password) und den [FTP Speicherplatz](/pages/web/hosting/ftp_change_password).

> [!warning]
>
> Bevor Sie Datenbankpasswörter Ihrer Website über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ändern, aktualisieren Sie die Konfigurationsdatei Ihrer Website, damit sie weiterhin auf die Datenbank zugreifen kann.
>
> Bleibt diese Aktualisierung aus, führt die Änderung des Passworts Ihrer Datenbank dazu, dass die Website unzugänglich wird und jegliche Dienste mit Datenbankzugriff blockiert werden.
>
> Sollten Sie Hilfe bei den durchzuführenden Maßnahmen benötigen, wenden Sie sich an die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
>

### Schritt 3: Ihr Hosting bearbeiten

Beachten Sie zunächst das Datum des Versands der E-Mail von OVHcloud, in der die Deaktivierung Ihres Hostings mitgeteilt wurde, sowie die Liste der Ordner, die auffällige Dateien enthalten.

> [!primary]
>
> Unsere Sicherheitsroboter können zwei Stufen der Zugangsbeschränkung auf Ihr Webhosting anwenden: 
>
> - Die Zugriffsberechtigungen sind auf "**CHMOD 700**" im FTP-Root Ihres Webhostings gesetzt.
> - Die Zugriffsberechtigungen sind auf "**CHMOD 000**" im FTP-Root Ihres Webhostings gesetzt.
>
> Wenn sie "**CHMOD 000**" zurücksetzen möchten, kontaktieren Sie unsere [Support-Teams](https://www.ovhcloud.com/de/support-levels/), um den Status Ihrer Website überprüfen zu lassen, bevor Sie mit den in dieser Anleitung beschriebenen Schritten fortfahren. 
>
> Je nach Ihrer Situation können die Zugangsbeschränkungen von "**CHMOD 000**" zu "**CHMOD 700**" geändert werden, damit Sie wieder auf den FTP-Bereich Ihres Webhostings zugreifen können.
>

#### Fall 1: Ihr Hosting wurde vor weniger als zwei Wochen deaktiviert

Wenn Ihr Hosting vor weniger als zwei Wochen gesperrt wurde und es nur eine Website enthält, setzen Sie Ihren FTP-Speicherplatz auf einen früheren Zustand zurück. Enthält er mehrere Websites, setzen Sie nur die Ordner mit den verdächtigen Dateien zurück.

Um Ihren FTP-Speicherplatz ganz oder teilweise zurückzusetzen, lesen Sie [unsere Anleitung](/pages/web/hosting/ftp_save_and_backup).


> [!warning]
>
> Die Wiederherstellung Ihres FTP Speicherplatzes allein reicht nicht aus, um potenzielle Sicherheitslücken zu beheben, die bereits auf Ihrer Website vorhanden sind.
>
> Um diese Sicherheitslücken zu identifizieren, analysieren Sie die [Web-Logs](/pages/web/hosting/logs_and_statistics) Ihres Hostings oder wenden Sie sich an einen einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/), um eine Sicherheitsüberprüfung Ihrer Webseiten durchzuführen.
>

#### Fall 2: Ihr Hosting wurde vor mehr als zwei Wochen deaktiviert

Wenn Ihr Hosting vor mehr als zwei Wochen gesperrt wurde, kontaktieren Sie einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/), um eine Sicherheitsüberprüfung Ihrer Webseiten durchzuführen.

> [!success]
>
> Wenn Sie weitere Informationen zu den [Schritten 2 und 3](#step-2) benötigen, lesen Sie unsere Hilfe zu [Aktionen wenn Ihre Website von einem Hack betroffen ist](pages/web/hosting/cms_what_to_do_if_your_site_is_hacked).
>

### Schritt 4: Webhosting wieder aktivieren <a name="reactivate-web-hosting"></a>

> [!warning]
>
> Wir empfehlen Ihnen, eine Sicherheitsüberprüfung durchzuführen **bevor** Sie die Reaktivierung Ihres Webhostings anstoßen. Sie können rechtlich auch ohne Vorsatz verantwortlich sein, wenn schädlicher Code von Ihrem Webhosting aus verbreitet wird.
>

#### Ihr Webhosting mit FileZilla reaktivieren

> [!primary]
>
> Wenn Sie die Anwendung **FileZilla** installieren möchten, um die Dateien Ihrer Website zu bearbeiten, folgen Sie den Anweisungen in [diesem Tutorial](/pages/web/hosting/ftp_filezilla_user_guide).
>

Öffnen Sie FileZilla und [verbinden Sie sich mit Ihrem FTP-Speicherplatz](/pages/web/hosting/ftp_connection). Klicken Sie anschließend im Menü auf `Server`{.action} und dann auf `Benutzerdefinierten Befehl eingeben`{.action}. (Je nach der Version von FileZilla kann die Bezeichnung variieren.)

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

Geben Sie im angezeigten Fenster folgenden Befehl ein und bestätigen Sie:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Die Ausgabe "**200 Permissions changed on /**" bestätigt, dass die Änderung erfolgreich durchgeführt wurde. Um dies zu überprüfen, versuchen Sie erneut, auf Ihre Website zuzugreifen.

> [warning]
>
> Es kann einige Minuten (maximal 20 Minuten) dauern, bis die Änderung über Ihren Webbrowser sichtbar ist.
>
> Je nach Ihrer Website kann es auch notwendig sein, den Cache Ihres Browsers zu leeren.
>

Wenn der oben stehende Befehl nicht funktioniert, versuchen Sie den folgenden Befehl:

```
SITE CHMOD 705.
```

#### Ihr Webhosting mit dem FTP-Explorer (“net2ftp“) reaktivieren

Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Bereich `Web Cloud`{.action} und öffnen Sie `Hosting-Pakete`{.action} im linken Menü. Wechseln Sie zum Tab `FTP-SSH`{.action} des betroffenen Hostings.

Klicken Sie auf den Button `FTP-Explorer`{.action} und [loggen Sie sich in Ihren FTP-Speicherplatz ein](/pages/web/hosting/ftp_connection). 

Klicken Sie auf `Erweitert`{.action} und dann auf den Button `Weiter`{.action} neben "**Sende benutzerdefinierte FTP-Kommandos zum FTP-Server**".

![net2ftp](images/net2ftp.png){.thumbnail}

Geben Sie im oberen Bereich der Seite den folgenden Befehl ein:

```
SITE CHMOD 705 /
```

Klicken Sie dann auf den grünen "Haken".

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Die Ausgabe "**200 Permissions changed on /**" bestätigt, dass die Änderung erfolgreich durchgeführt wurde. Um dies zu überprüfen, versuchen Sie erneut, auf Ihre Website zuzugreifen.

> [warning]
>
> Es kann einige Minuten (maximal 20 Minuten) dauern, bis die Änderung über Ihren Webbrowser sichtbar ist.
>
> Je nach Ihrer Website kann es auch notwendig sein, den Cache Ihres Browsers zu leeren.
>

## Weiterführende Informationen <a name="go-further"></a>

[Was tun, wenn Ihre WordPress Seite gehackt wurde?](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked)

[Aktivieren der Web Application Firewall](/pages/web/hosting/multisites_activating_application_firewall)

[PHP-Version Ihres Webhostings ändern](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
