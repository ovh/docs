---
title: Was tun bei “403 forbidden“?
excerpt: Hier erfahren Sie, wie Sie Ihre Website online stellen, wenn sie eine “403 forbidden“ Seite zeigt
slug: diagnose-403-forbidden
section: Diagnose
order: 7
---

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
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im [Abschnitt](#gofurther) Weitere Informationen.
>

## Voraussetzungen

- Sie besitzen ein [OVHcloud Webhosting Angebot](https://www.ovh.com/fr/hebergement-web/).
- Sie verfügen über die [Login-Daten](../connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter) für den Speicherplatz Ihres Hostings.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) angemeldet.

## In der praktischen Anwendung

### Schritt 1: die Situation analysieren

Wenn die Seite **"403 forbidden"** aufgrund einer fehlerhaften Änderung Ihrer Website auftaucht, [wird der Speicherplatz Ihres Hostings zu einem früheren Zeitpunkt ganz oder](../restauration-ftp-filezilla-espace-client/) teilweise wiederhergestellt.

Wenn Sie mit den verfügbaren Backups den Zugang zu Ihrer Website nicht wiederherstellen können, kontaktieren Sie einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/fr/).

Wenn die Seite **"403 forbidden"** nach einer Änderung Ihrer Website nicht angezeigt wurde, rufen Sie bitte Ihren E-Mail-Dienst auf. Wenn Sie eine E-Mail von unseren Dienstleistungen erhalten haben, die eine Schließung Ihres Hostings aus Sicherheitsgründen [anzeigt, gehen Sie zu Schritt zwei](#etape2).

Wenn die Seite **"403 forbidden"** ohne Aktion Ihrerseits erschienen ist und Sie diesbezüglich keine E-Mails von unseren Dienstleistungen erhalten haben, kontaktieren Sie einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/fr/).

### Schritt 2: Ihre Lösungen sichern <a name="etape2"></a>

Überprüfen Sie zunächst die Sicherheit Ihrer IT-Telefone:

- Führen Sie die Sicherheitsupdates durch.
- Überprüfen Sie außerdem, dass ein Antivirus installiert ist, aktualisieren Sie es und starten Sie einen vollständigen Scan. Wenn Sie keine Domain besitzen, konsultieren Sie vor [der](https://partner.ovhcloud.com/fr/) Installation einen spezialisierten Dienstleister.
- Ändern Sie alle Ihre lokalen Passwörter, insbesondere die Passwörter Ihrer E-Mail-Adressen, und halten Sie sich dabei an diese [bewährten Praktiken](../../../customer/gerer-son-mot-de-passe/#generer-un-bon-mot-de-passe).
- Ändern Sie die Passwörter Ihrer OVHcloud Dienste entsprechend den Anweisungen in dieser [Anleitung](../gerer-et-acceder-a-ses-mots-de-passe/).

> [!warning]
>
> Bevor Sie das Passwort der Datenbank Ihrer Website über Ihr OVHcloud Kundencenter ändern, aktualisieren Sie die Konfigurationsdatei Ihrer Website, damit sie sich mit dem neuen Passwort [ ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)in die Datenbank einloggt.
>
> Ist das nicht der Fall, führt die Änderung des Passworts Ihrer Datenbank zu einer Unterbrechung der Website oder der Dienste, die diese verwenden.
>
> Sollten Sie Zweifel an den durchzuführenden Maßnahmen haben, wenden Sie sich an die [OVHcloud Partner](https://partner.ovhcloud.com/fr/).
>

### Schritt 3: Ihr Hosting bearbeiten

Achten Sie zunächst auf das Datum des Versands der E-Mail von OVHcloud, in der die Deaktivierung Ihres Hostings angegeben ist, sowie auf die Ordner, die Beispiele für unrechtmäßige Dateien enthalten.

#### Fall 1: Ihr Hosting wurde vor weniger als zwei Wochen deaktiviert

Wenn Ihr Hosting vor weniger als zwei Wochen geschlossen wurde und nur eine Website enthält, stellen Sie Ihren Speicherplatz gemäß den Anweisungen in dieser Anleitung [wieder her](../restauration-ftp-filezilla-espace-client/#restaurer-lespace-de-stockage-depuis-lespace-client).

Wenn Ihr Hosting vor weniger als zwei Wochen geschlossen wurde und mehrere Websites enthält, stellen Sie nur die Dateien mit den rechtswidrigen Dateien gemäß den Anweisungen in dieser Anleitung [wieder her](../restauration-ftp-filezilla-espace-client/#restaurer-un-fichier-depuis-un-logiciel-ou-une-interface).

#### Fall 2: Ihr Hosting wurde vor mehr als zwei Wochen deaktiviert

Wenn Ihr Hosting vor mehr als zwei Wochen geschlossen wurde, kontaktieren Sie [einen](https://partner.ovhcloud.com/fr/) spezialisierten Dienstleister, um eine Sicherheitsüberprüfung Ihrer Lösungen durchzuführen. 

> [!warning]
>
> Wir empfehlen Ihnen, eine Sicherheitsüberprüfung durchzuführen, **bevor** Ihr Hosting wieder geöffnet wird. Der Versand von böswilligen Codes von Ihrem Hosting aus kann Ihre rechtliche Verantwortung begründen.
>

### Schritt 4: Webhosting erneut aktivieren

#### Ihr Webhosting mit FileZilla erneut aktivieren

> [!primary]
>
> Wenn Sie FileZilla installieren** möchten, um die Dateien Ihrer Website zu bearbeiten, folgen Sie den Anweisungen in dieser **Anleitung[ ](../mutualise-guide-utilisation-filezilla/).
>

Öffnen Sie FileZilla und verbinden Sie sich mit Ihrem Speicherplatz. Klicken Sie dann `im Menü`{.action} auf Server und dann auf `FTP`{.action}-Befehl eingeben (je nach FileZilla-Version kann die Bezeichnung leicht variieren):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

Geben Sie im angezeigten Fenster folgenden Befehl ein und bestätigen Sie diesen:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Eine Antwort **"200 Erlaubnisse on**/"bestätigt, dass der Vorgang erfolgreich durchgeführt wurde. Um dies zu überprüfen, versuchen Sie erneut, auf Ihre Website zuzugreifen.

#### Ihr Hosting mit dem FTP-Explorer "net2ftp" reaktivieren

Gehen Sie [in Ihrem OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) Kundencenter in den Bereich `Cloud`{.action}, dann `Hosting-Pakete`{.action} und klicken Sie auf den Tab `FTP-SSH`{.action} des betreffenden Hostings.

Klicken Sie anschließend auf den Button `FTP`{.action} Explorer und loggen Sie sich entsprechend den Anweisungen in Ihrem Speicherplatz [ein](../connexion-espace-stockage-ftp-hebergement-web/#1-connexion-via-le-ftp-explorer). Klicken Sie auf `Erweitert`{.action} und dann auf den Button `GO`{.action} neben **"Willkürliche FTP-Befehle an den FTP-Server senden"**.

![net2ftp](images/net2ftp.png){.thumbnail}

Geben Sie im oberen Teil der Seite den unten stehenden Befehl ein und klicken Sie dann auf den Button mit **"V"** grün.

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Eine Antwort **"200 Erlaubnisse on**/"bestätigt, dass der Vorgang erfolgreich durchgeführt wurde. Um dies zu überprüfen, versuchen Sie erneut, auf Ihre Website zuzugreifen.

## Mehr <a name="gofurther"></a>

[Tipps zum Hacken Ihrer WordPress Seite](../piratage-de-votre-site-wordpress-conseils-et-cas-dusages/)

[Aktivierung der Application Firewall](../activation-pare-feu-applicatif/)

[PHP-Version Ihres Webhostings ändern](../configurer-le-php-sur-son-hebergement-web-mutu-2014/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/fr/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, lesen Sie unsere [Support-Angebote](https://www.ovhcloud.com/fr/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.