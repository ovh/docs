---
title: Was tun bei dem Fehler "403 forbidden"?
excerpt: Diese Anleitung erklärt, wie Sie Ihre Website wieder online bringen, wenn “403 forbidden“ angezeigt wird
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

Eine Seite **"403 forbidden"** kann erscheinen, wenn:

- die FTP-Zugriffsrechte (CHMOD) sind unzureichend oder eingeschränkt. Der Zugriff auf die Datei/Ordner/Website, auf die Sie über Ihren Webbrowser zugreifen möchten, wird dann vom Webserver Ihres Webhostings verweigert.

- Die Datei **.htaccess** enthält eine Regel zur Zugriffsbeschränkung.

- Ein Sicherheitsplugin schützt den Zugang zu Ihren Dateien/Ordnern/Websites über Ihren Webbrowser.

- Es ist eine Application Firewall aktiviert.

Sobald ein verdächtiger Betrieb erkannt wird, können unsere Sicherheitsroboter den Zugriff auf die Dateien Ihres Webhostings vorübergehend blockieren. Mit dieser Vorrichtung können verhindert werden:

- den Fortschritt eines möglichen Hacks Ihrer Daten auf Ihrem Webhosting

- den Versand von Schadcode an andere Stellen/Websites, was zu Hacking führen kann;

- die Durchführung illegaler Transaktionen.
 
 Mit dieser Vorrichtung sollen Sie auch rechtlich vor Aktionen geschützt werden, die sich aus einem möglichen Hacking Ihres Webhostings an andere Organisationen/Websites ergeben. 
 
 *Wenn Sie von dieser Sperrung betroffen sind, erhalten Sie eine Benachrichtigung an die E-Mail-Adresse des "Administrator"-Kontakts Ihres Webhostings*

![403error](images/403error.png){.thumbnail}

**Diese Anleitung erklärt, wie Sie im Fall einer Anzeige von “403 forbidden“ den Zugang zu Ihrer Seite entsperren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder sich mit unserer [User Community](https://community.ovh.com/en/) auszutauschen, falls Sie Probleme haben. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung..
>

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/).
- Sie verfügen über die [Login-Daten](/pages/web/hosting/ftp_connection) für den FTP-Speicherplatz Ihres Hostings.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)

## In der praktischen Anwendung

### Schritt 1: Die Situation analysieren

Wenn die Seite **"403 forbidden"** nach einer Änderung Ihrer Website auftauchte, [werden Sie den FTP-Speicherplatz Ihres Hostings ganz oder teilweise wiederherstellen](/pages/web/hosting/ftp_save_and_backup) zu einem früheren Zeitpunkt.

Wenn Sie mit den verfügbaren Backups den Zugang zu Ihrer Website nicht wiederherstellen können, kontaktieren Sie einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/).

Wenn die Seite **"403 forbidden"** nach einer Änderung Ihrer Website nicht aufgetreten ist, rufen Sie bitte Ihren E-Mail-Client auf. Wenn Sie eine E-Mail von unseren Dienstleistungen erhalten haben, in der angegeben ist, dass Ihr Webhosting aus Sicherheitsgründen geschlossen wurde, gehen Sie direkt zu [Schritt 2](#step-2) dieser Anleitung.

Wenn die Seite **"403 forbidden"** ohne Aktion Ihrerseits erschienen ist und Sie von unseren Dienstleistungen diesbezüglich keine E-Mail erhalten haben, überprüfen Sie bitte die FTP-Zugriffsrechte (CHMOD) Ihrer Dateien/Ordner sowie den in Ihrer Datei(en) **.htaccess** enthaltenen Code. Überprüfen Sie auch, ob dieser Zustand nicht durch ein Sicherheitsplugin oder eine Application Firewall verursacht wird. Falls nötig, kontaktieren Sie einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/).

### Schritt 2: Ihre Lösungen sichern <a name="step-2"></a>

Überprüfen Sie zunächst die Sicherheit Ihrer Computer-Telefone/Geräte:

- Führen Sie Sicherheitsupdates für Ihre Geräte durch.

- Überprüfen Sie, ob ein Antivirus installiert ist, aktualisieren Sie es und starten Sie einen vollständigen Scan. Falls Sie keine Daten haben, konsultieren Sie bitte vor der Installation einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/).

- Ändern Sie alle Ihre lokalen Passwörter, insbesondere die Passwörter Ihrer E-Mail-Adressen, gemäß den **Best Practice** in [dieser Anleitung](/pages/account/customer/manage-ovh-password).

- Ändern Sie die Passwörter für alle Ihre OVHcloud Dienste, insbesondere für Ihre [Datenbank](/pages/web/hosting/sql_change_password) und den Zugriff auf Ihren [FTP Speicherplatz](/pages/web/hosting/ftp_change_password).

> [!warning]
>
> Bevor Sie das Passwort der Datenbank Ihrer Website in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ändern, aktualisieren Sie die Konfigurationsdatei Ihrer Website, damit sie sich mit dem neuen Passwort mit der Datenbank verbindet.
>
> Ist das nicht der Fall, führt die Änderung des Passworts Ihrer Datenbank zu einem Ausfall des Zugriffs auf Ihre Website oder Ihre Dienste/Kunden, die diese verwenden.
>
> Kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
>

### Schritt 3: Ihr Hosting bearbeiten

Achten Sie zunächst auf das Datum des Versands der E-Mail von OVHcloud, in der die Deaktivierung Ihres Webhostings angegeben ist, sowie auf die Akten mit den Beispielen für unrechtmäßige Dateien.

> [!primary]
>
> Unsere Sicherheitsroboter können zwei Deaktivierungsstufen auf Ihrem Webhosting anwenden: 
>
> - Deaktivierung durch Anwendung eines "**CHMOD 700**" auf die FTP-Wurzelspitze Ihres Webhostings
> - Deaktivierung durch Anwendung eines "**CHMOD 000**" auf die FTP-Wurzelspitze Ihres Webhostings.
>
> Im Fall einer Deaktivierung per FTP Zugangsbeschränkung nach "**CHMOD 000**" kontaktieren Sie bitte unsere [Support-Teams](https://www.ovhcloud.com/de/support-levels/), um den Status zu überprüfen, bevor Sie mit den in dieser Anleitung beschriebenen Schritten fortfahren. 
>
> Je nach Ihrer Situation wenden Letztere eine geringere Einschränkung an, indem sie "**CHMOD 000**" in "**CHMOD 700**" umwandeln, damit Sie auf den FTP-Bereich Ihres Webhostings eingreifen können.
>

#### Fall 1: Ihr Hosting wurde vor weniger als zwei Wochen deaktiviert

Wenn Ihr Hosting vor weniger als zwei Wochen geschlossen wurde und nur eine Website enthält, stellen Sie Ihren FTP-Speicherplatz wieder her. Enthält er mehrere Websites, so werden nur die Dateien mit den rechtswidrigen Dateien wiederhergestellt.

Um Ihren FTP-Speicherplatz ganz oder teilweise wiederherzustellen, lesen Sie hierzu [unsere Anleitung](/pages/web/hosting/ftp_save_and_backup).


> [!warning]
>
> Die Wiederherstellung Ihres FTP Speicherplatzes allein reicht nicht aus, um potenzielle Sicherheitslücken zu beheben, die bereits auf Ihrer Website vorhanden sind.
> Um diese Sicherheitslücken zu identifizieren, analysieren Sie die ["Web-Logs"](/pages/web/hosting/logs_and_statistics) Ihres Webhostings oder wenden Sie sich an einen [Experten-Dienstleister](https://partner.ovhcloud.com/de/directory/), um eine Sicherheitsüberprüfung Ihrer Webseiten durchzuführen.
>

#### Fall 2: Ihr Hosting wurde vor mehr als zwei Wochen deaktiviert

Wenn Ihr Hosting vor mehr als zwei Wochen geschlossen wurde, kontaktieren Sie einen [Experten-Dienstleister](https://partner.ovhcloud.com/de/directory/), um eine Sicherheitsüberprüfung Ihrer Websites durchzuführen. 

> [!success]
>
> Wenn Sie weitere Informationen zu den [Schritte 2 und 3](#step-2) vorherigen Schritten benötigen, lesen Sie unsere Anleitung zu [Aktionen im Falle von Hacking auf Ihrer Website](pages/web/hosting/cms_what_to_do_if_your_site_is_hacked).
>

### Schritt 4: Webhosting wieder aktivieren <a name="reactivate-web-hosting"></a>

> [!warning]
>
> Wir empfehlen Ihnen, eine Sicherheitsüberprüfung durchzuführen **bevor** dem Wiederstart Ihres Webhostings. Jede böswillige Operation, die über Ihr Webhosting durchgeführt wird, kann Ihre rechtliche Verantwortung begründen.
>

#### Ihr Webhosting mit FileZilla reaktivieren

> [!primary]
>
> Um das Programm **FileZilla** zu installieren, um die Dateien Ihrer Website zu bearbeiten, folgen Sie den Anweisungen in dieser [Tutorial](/pages/web/hosting/ftp_filezilla_user_guide).
>

Öffnen Sie das Programm FileZilla und [verbinden Sie sich mit Ihrem FTP-Speicherplatz](/pages/web/hosting/ftp_connection). Klicken Sie anschließend im Menü auf `Server`{.action} und dann auf `Einen FTP-Befehl`{.action} eingeben (je nach der von Ihnen verwendeten FileZilla-Version kann die Bezeichnung variieren):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

Geben Sie im angezeigten Fenster folgenden Befehl ein und bestätigen Sie:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Die Antwort "**200 Permissions changed on /**" bestätigt, dass die Änderung erfolgreich durchgeführt wurde. Um dies zu überprüfen, versuchen Sie erneut, auf Ihre Website zuzugreifen.

> [warning]
>
> Es kann einige Minuten (maximal 20 Minuten) dauern, bis die Änderung über Ihren Webbrowser sichtbar ist.
>
> Je nach Ihrer Website kann es auch notwendig sein, den Cache Ihres Browsers zu leeren.
>

Wenn der oben stehende Befehl nicht funktioniert, können Sie den folgenden anderen Befehl ausprobieren:

```
SITE CHMOD 705 .
```

#### Ihr Hosting mit dem FTP-Explorer (“net2ftp“) reaktivieren

Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Bereich `Web Cloud`{.action} und öffnen Sie `Hosting-Pakete`{.action} im linken Menü. Wechseln Sie zum Tab `FTP-SSH`{.action} des betroffenen Hostings.

Tippen Sie auf den Button `FTP-Explorer`{.action} und loggen Sie sich in Ihren [FTP-Speicherplatz] ein (/pages/web/hosting/ftp_connection). 

Klicken Sie auf den Button `Erweitert`{.action} und dann auf den Button `Go`{.action} neben "Zum FTP-Server beliebige FTP-Befehle senden".

![net2ftp](images/net2ftp.png){.thumbnail}

Geben Sie im oberen Teil der Seite den folgenden Befehl ein:

```
SITE CHMOD 705 /
```

und klicken Sie dann auf den grünen "Haken".

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Die Antwort "**200 Permissions changed on /**" bestätigt, dass die Änderung erfolgreich durchgeführt wurde. Um dies zu überprüfen, versuchen Sie erneut, auf Ihre Website zuzugreifen.

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
