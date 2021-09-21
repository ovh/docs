---
title: Was tun bei “403 forbidden“?
excerpt: Hier erfahren Sie, wie Sie Ihre Website online stellen, wenn sie eine “403 forbidden“ Seite zeigt
slug: diagnose-403-forbidden
section: Diagnose
order: 7
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 16.09.2021**

## Ziel

Änderungen der Zugriffsrechte auf die Dateien Ihrer Seite, der Datei **.htaccess** oder der Installation eines Sicherheitsplugins können manchmal in eine **“403 forbidden“** Seite übersetzt werden.

Es kann auch vorkommen, dass unsere Sicherheitsroboter nach der Erkennung von Anomalien den Zugriff auf die Dateien Ihres Hostings vorübergehend blockieren mussten. Diese automatische Sperrung soll verhindern, dass Schadcode an andere Stellen versendet wird, und Sie rechtlich schützen.

![403error](images/403error.png){.thumbnail}

**In dieser Anleitung erfahren Sie, wie Sie im Fall der “403 forbidden“ Anzeige den Zugang zu Ihrer Seite entsperren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#gofurther).
>

## Voraussetzungen

- Sie besitzen ein [OVHcloud Webhosting Angebot](https://www.ovh.de/hosting/).
- Sie verfügen über die [Login-Daten](../verbindung-ftp-speicher-webhosting/#schritt-1-erforderliche-verbindungsinformationen-abrufen) für den Speicherplatz Ihres Hostings.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.

## In der praktischen Anwendung

### Schritt 1: die Situation analysieren

Wenn die Seite **“403 forbidden“** aufgrund einer fehlerhaften Änderung Ihrer Website auftaucht, wird [der Speicherplatz Ihres Hostings zu einem früheren Zeitpunkt](../webhosting-speicherplatz-wiederherstellen/) ganz oder teilweise wiederhergestellt.

Wenn Sie mit den verfügbaren Backups den Zugang zu Ihrer Website nicht wiederherstellen können, kontaktieren Sie einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/).

Wenn die Seite **“403 forbidden“** nach einer Änderung Ihrer Website nicht angezeigt wurde, rufen Sie bitte Ihren E-Mail-Dienst auf. Wenn Sie eine E-Mail von unseren Dienstleistungen erhalten haben, die eine Schließung Ihres Hostings aus Sicherheitsgründen [anzeigt, gehen Sie zu Schritt zwei](#step2).

Wenn die Seite **“403 forbidden“** ohne Aktion Ihrerseits erschienen ist und Sie diesbezüglich keine E-Mails von unseren Dienstleistungen erhalten haben, kontaktieren Sie einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/).

### Schritt 2: Ihre Lösungen sichern <a name="step2"></a>

Überprüfen Sie zunächst die Sicherheit Ihrer IT-Telefone:

- Führen Sie die Sicherheitsupdates durch.
- Überprüfen Sie außerdem, dass ein Antivirus installiert ist, aktualisieren Sie es und starten Sie einen vollständigen Scan. Wenn Sie keine Domain besitzen, konsultieren Sie vor der Installation einen spezialisierten [Dienstleister](https://partner.ovhcloud.com/de/).
- Ändern Sie alle Ihre lokalen Passwörter, insbesondere die Passwörter Ihrer E-Mail-Adressen, und halten Sie sich dabei an diese [bewährten Praktiken](https://docs.ovh.com/de/customer/Passwort-verwalten/#ein-adaquates-passwort-erstellen).
- Ändern Sie die Passwörter Ihrer OVHcloud Dienste entsprechend den Anweisungen in dieser [Anleitung](../ftp-benutzer-passwort-aendern/) um die FTP-Benutzer Passwort und [diese](../datenbank-passwort-aendern/) um die Passwort ihrer Webhosting-Datenbank zu ändern.

> [!warning]
>
> Bevor Sie das Passwort der Datenbank Ihrer Website über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ändern, aktualisieren Sie die Konfigurationsdatei Ihrer Website, damit sie sich mit dem neuen Passwort in die Datenbank einloggt.
>
> Ist das nicht der Fall, führt die Änderung des Passworts Ihrer Datenbank zu einer Unterbrechung der Website oder der Dienste, die diese verwenden.
>
> Sollten Sie Zweifel an den durchzuführenden Maßnahmen haben, wenden Sie sich an die [OVHcloud Partner](https://partner.ovhcloud.com/de/).
>

### Schritt 3: Ihr Hosting bearbeiten

Achten Sie zunächst auf das Datum des Versands der E-Mail von OVHcloud, in der die Deaktivierung Ihres Hostings angegeben ist, sowie auf die Ordner, die Beispiele für unrechtmäßige Dateien enthalten.

#### Fall 1: Ihr Hosting wurde vor weniger als zwei Wochen deaktiviert

Wenn Ihr Hosting vor weniger als zwei Wochen geschlossen wurde und nur eine Website enthält, stellen Sie Ihren Speicherplatz gemäß den Anweisungen in dieser [Anleitung](../webhosting-speicherplatz-wiederherstellen/#speicherplatz-uber-das-kundencenter-wiederherstellen) wieder her.

Wenn Ihr Hosting vor weniger als zwei Wochen geschlossen wurde und mehrere Websites enthält, stellen Sie nur die Dateien mit den rechtswidrigen Dateien gemäß den Anweisungen in dieser [Anleitung](../webhosting-speicherplatz-wiederherstellen/#datei-mithilfe-einer-software-oder-uber-ein-interface-wiederherstellen) wieder her.

#### Fall 2: Ihr Hosting wurde vor mehr als zwei Wochen deaktiviert

Wenn Ihr Hosting vor mehr als zwei Wochen geschlossen wurde, kontaktieren Sie einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/), um eine Sicherheitsüberprüfung Ihrer Lösungen durchzuführen. 

> [!warning]
>
> Wir empfehlen Ihnen, eine Sicherheitsüberprüfung durchzuführen, **bevor** Ihr Hosting wieder geöffnet wird. Der Versand von böswilligen Codes von Ihrem Hosting aus kann Ihre rechtliche Verantwortung begründen.
>

### Schritt 4: Webhosting erneut aktivieren

#### Ihr Webhosting mit FileZilla erneut aktivieren

> [!primary]
>
> Wenn Sie **FileZilla** installieren möchten, um die Dateien Ihrer Website zu bearbeiten, folgen Sie den Anweisungen in dieser [Anleitung](../webhosting_hilfe_zur_verwendung_von_filezilla/).
>

Öffnen Sie FileZilla und verbinden Sie sich mit Ihrem Speicherplatz. Klicken Sie dann im Menü auf `Server`{.action} und dann auf `Benutzerdefinierten Befehl eingeben`{.action} (je nach FileZilla-Version kann die Bezeichnung leicht variieren):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

Geben Sie im angezeigten Fenster folgenden Befehl ein und bestätigen Sie diesen:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Eine Antwort **“200 Permissions changed on /“** bestätigt, dass der Vorgang erfolgreich durchgeführt wurde. Um dies zu überprüfen, versuchen Sie erneut, auf Ihre Website zuzugreifen.

#### Ihr Hosting mit dem FTP-Explorer “net2ftp“ reaktivieren

Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Bereich `Web Cloud`{.action}, dann `Hosting-Pakete`{.action} und klicken Sie auf den Tab `FTP-SSH`{.action} des betreffenden Hostings.

Klicken Sie anschließend auf den Button `FTP-Explorer`{.action} und loggen Sie sich entsprechend den [Anweisungen](../verbindung-ftp-speicher-webhosting/#1-via-ftp-explorer-verbinden) in Ihrem Speicherplatz ein. Klicken Sie auf `Erweitert`{.action} und dann auf den Button `Weiter`{.action} neben **“Sende benutzerdefinierte FTP-Kommandos zum FTP-Server“**.

![net2ftp](images/net2ftp.png){.thumbnail}

Geben Sie im oberen Teil der Seite den unten stehenden Befehl ein und klicken Sie dann auf den Button mit **“V“** grün.

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Eine Antwort **“200 Permissions changed on /“** bestätigt, dass der Vorgang erfolgreich durchgeführt wurde. Um dies zu überprüfen, versuchen Sie erneut, auf Ihre Website zuzugreifen.

## Weiterführende Informationen <a name="gofurther"></a>

[Was tun, wenn Ihre WordPress Seite gehackt wurde?](../was_tun_wenn_ihre_wordpress_seite_gehackt_wurde/)

[Aktivieren der Web Application Firewall](../webhosting_aktivieren_der_web_application_firewall/)

[PHP-Version Ihres Webhostings ändern](../konfiguration_von_php_fur_ein_ovh_webhosting_2014/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, lesen Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.