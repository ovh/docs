---
title: Wie können sie Ihre Website schützen?
excerpt: Hier erfahren Sie, wie Sie die Sicherheit Ihrer Website erhöhen
slug : secure-website 
section: Website optimieren 
order: 1
---

**Letzte Aktualisierung am 24.11.2021**

## Einleitung

In dieser Anleitung erhalten Sie Grundkenntnisse, um die Verfügbarkeit Ihrer Dienstleistungen zu gewährleisten, die Integrität Ihrer Daten zu schützen und den Zugang zu Ihren Lösungen zu sichern. Es betrifft ausschließlich Webseiten, die auf den Shared Hosting [Lösungen von OVHcloud gehostet werden](https://www.ovhcloud.com/de/web-hosting/).

Es wird schrittweise in einer immer größeren Reihenfolge und in immer größerer technischer Schwierigkeit organisiert, was bedeutet, dass die ersten Schritte am wichtigsten sind. Die Sicherheit Ihrer Website wird an dem zugehörigen Element gemessen, das am wenigsten geschützt ist. Wir empfehlen Ihnen, alle beschriebenen Maßnahmen durchzuführen. Sollten Sie jedoch Schwierigkeiten haben, einige der hier beschriebenen Operationen durchzuführen, wenden Sie sich gerne an die [OVHcloud](https://community.ovh.com/en/)-Community oder [unsere Partner](https://partner.ovhcloud.com/de/).

**Hier erfahren Sie, wie Sie Ihre Website schützen.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Sie selbst tragen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diesen Leitfaden zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Server-Verwaltungsaufgaben zu helfen.  Wir empfehlen Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister zu kontaktieren und/oder sich auf der Website des Herausgebers zu informieren. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten. Genauere Informationen finden Sie im Teil “Weiterführende Informationen“ dieses Leitfadens.
>

## Voraussetzungen

- Sie verfügen über ein kompatibles [OVHcloud Webhosting](https://www.ovh.de/hosting/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verfügen über die [Login-Daten](../verbindung-ftp-speicher-webhosting/#schritt-1-erforderliche-verbindungsinformationen-abrufen) für den Speicherplatz Ihres Hostings.
- Sie haben Zugriff auf die [Admin-Schnittstelle für Ihre Website](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}

## Beschreibung

### Schritt 1: Überprüfen Sie die Sicherheit Ihrer Geräte <a name="local"></a>

Dieser erste Schritt ist von entscheidender Bedeutung. Die Infektion Ihres Computing-Apparates mit böswilliger Software kann potenziell dazu führen, dass Sie Zugriff auf alle Ihre Eingaben auf Ihrer Tastatur haben. Daher können die Login-Daten, die Sie für die Verbindung mit Ihrem OVHcloud Kundencenter oder dem Verwaltungsinterface Ihrer Website verwenden, beeinträchtigt werden.

Darüber hinaus kann das zunehmende Phänomen der [Ransomware](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Schadprogramme/Ransomware/ransomware_node.html){.external} (2020 in Frankreich etwa 400 Fälle) nicht nur zur Verschlüsselung aller Ihrer persönlichen Daten führen, sondern auch Ihre Aktivitäten gefährden, indem Sie alle Ihre Daten, Apparate und Software nicht mehr verfügbar machen. 

Überprüfen Sie zunächst die Sicherheit Ihres Windows, Mac oder Linux Computer:

- Überprüfen Sie die Updates Ihrer Maschine;
- Starten Sie einen vollständigen Scan Ihrer Stelle, nachdem Sie Ihr Anti-Virus-/Anti-Malware-Programm aktualisiert haben;
- Ändern Sie regelmäßig das Administratorpasswort Ihres Telefons (für mehr Informationen zur Auswahl der Passwörter folgen Sie den Anweisungen in dieser [Anleitung](../../customer/alles_uber_ihre_ovh_kundenkennung/#ein-starkes-und-einzigartiges-passwort-erstellen)).

### Schritt 2: Sichern Sie Ihr OVHcloud Kundencenter

Um Ihre Kundenkennung zu sichern, folgen Sie den Anweisungen in dieser [Anleitung](../../customer/alles_uber_ihre_ovh_kundenkennung/).

Denken Sie beispielsweise daran, die [Informationen Ihres Kundenkontos](../customer/alles_uber_ihre_ovh_kundenkennung/#personliche-daten-im-account-verwalten_1) zu aktualisieren und eine **Ersatz-E-Mail hinzuzufügen**.<br>
Wenn Ihre Zugangsdaten verloren gehen und/oder die Haupt-E-Mail-Adresse Ihres OVHcloud Kundenkontos nicht verfügbar ist, benötigen wir eine Ersatz-E-Mail oder aktuelle persönliche Informationen, um Ihnen bei der Suche nach Ihren Lösungen zu helfen.

### Schritt 3: Führen Sie regelmäßig Sicherungen Ihrer Seite durch <a name="backup"></a>

> [!primary]
>
> Die regelmäßige Sicherung Ihrer Daten ist unabhängig vom betroffenen Angebot die wichtigste Maßnahme im Bereich der IT-Sicherheit. Es wird immer möglich sein, eine Software neu zu installieren oder ein neues Gerät zu bestellen, aber es ist sehr schwierig, Daten nach deren Verlust zu sammeln.
>
> OVHcloud führt regelmäßig Sicherungen Ihrer Daten auf seiner Infrastruktur durch. Allerdings kann ein Fehler bei der Handhabung wie eine Löschung, die auf einer Datenbank im Produktivbetrieb gestartet wurde, oder die Nichtverlängerung Ihrer Dienste zum endgültigen Verlust Ihrer Daten führen.
>

Speichern Sie zunächst die Daten Ihrer Datenbank (FTP-**UND**-Datenbanken Dateien), indem Sie die Anweisungen in dieser [Anleitung](../website-exportieren/ befolgen. Importieren Sie diese auf Ihrem Computer oder einem externen Support, zum Beispiel auf einem NAS Server oder einem USB Stick.

Auch Websiteverwaltungssoftware (CMS) bietet die Möglichkeit, automatische Backup-Plugins zu installieren.<br>
Konsultieren Sie die offiziellen Foren Ihres bevorzugten CMS oder kontaktieren Sie die [OVHcloud Community](https://community.ovh.com/en/) zu diesem Thema.

### Schritt 4: So erkennen Sie betrügerische E-Mails

Phishing-E-Mails stellen ebenfalls eine Bedrohung für die Sicherheit Ihrer Website dar, da sie Schadsoftware enthalten oder zur Installation bringen können. Lesen Sie in dieser [Anleitung](../../customer/e-mail-betrug-phishing/), wie Sie diese erkennen und schützen können.

### Schritt 5: Einrichtung der automatischen Verlängerung

Wenn Ihre Dienste nicht verlängert werden, ist OVHcloud gesetzlich verpflichtet, nach Ablauf Ihres Abonnements alle Daten aus Ihrem Hosting-Angebot sowie alle zugehörigen Backups vollständig zu löschen. Wir senden unseren Kunden Erinnerungsnachrichten, um sie an die Verlängerungsfristen zu erinnern.<br>
Diese E-Mails können jedoch in Ihren Spam-Mails eingehen, oder die E-Mail-Adresse, die zu Ihrem OVHcloud-Account gehört, kann falsch sein oder nicht mehr verfügbar sein.

Vor allem wenn Sie nicht die Möglichkeit haben, regelmäßige Backups durchzuführen, und Ihre Website einen herausragenden Platz in Ihrer Geschäftstätigkeit einnimmt, [aktivieren Sie die automatische](../../billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/#ubersicht-meine-dienste-aufrufen) Verlängerung für alle Ihre OVHcloud Dienste.<br>
Wir empfehlen Ihnen auch, die Gültigkeit der von Ihnen hinterlegten Zahlungsmittel regelmäßig zu überprüfen.

### Schritt 6: Überprüfen Sie, dass Ihre Website aktuell ist

Überprüfen Sie regelmäßig die Updates Ihrer Website gemäß den Anweisungen in dieser [Anleitung](../sicherheit-hosting-deaktiviert/#22-ihre-website-aktualisieren).

Denken Sie auch daran, eine aktuelle Version der [PHP](../konfiguration_von_php_fur_ein_ovh_webhosting_2014/) Sprache auf Ihrem Hosting zu verwenden.

### Schritt 7: HTTPS aktivieren

Stellen Sie die verschlüsselte Verbindung zu Ihrer Website über das **HTTPS**-Protokoll gemäß dieser [Anleitung](../website-umstellen-https-ssl/) her.

### Schritt 8: Schützen Sie Ihre Formulare

Die Formulare von Webseiten sind bevorzugte Ziele von Hackern/Spammers. Schützen Sie Ihre Formulare vor Angriffen, indem Sie **“CAPTCHA“** Plugins einrichten.

### Schritt 9: Richten Sie ein Sicherheitsplugin auf Ihrer Seite ein

Fügen Sie zu Ihrer Website ein vom Herausgeber des CMS empfohlenes Sicherheitsplugin hinzu:

- [Wordpress](https://wordpress.com/de/){.external}
- [Joomla](https://www.joomla.de/){.external}
- [Drupal](https://www.drupal.de/){.external}
- [PrestaShop](https://www.prestashop.com/de){.external}

### Schritt 10: Überprüfen Sie, dass Ihr Hosting keine böswilligen Dateien enthält

Loggen Sie sich hierzu in Ihrem [FTP Bereich](../verbindung-ftp-speicher-webhosting/) ein. Sie erfordert technische Kenntnisse, um mögliche böswillige Dateien auf Ihrem Hosting zu erkennen. Sollten Sie Schwierigkeiten haben, diese Überprüfung durchzuführen, wenden Sie sich gerne an unsere [Partner](https://partner.ovhcloud.com/de/).

Im Zweifelsfall können Sie auch die in [Schritt 1](#local) dieser Anleitung beschriebenen Überprüfungen durchführen und das [Passwort Ihres FTP-Bereichs](../ftp-benutzer-passwort-aendern/) ändern.

### Schritt 11: Testen Sie die Sicherungen Ihrer Seite

Die [Backups](#backup) der Daten Ihrer Webseite (FTP-Dateien und Datenbanken) müssen regelmäßig durchgeführt werden.

Aber sie sind keine absolute Sicherheit. Testen Sie auch die Sicherungen Ihrer Datenbank, um sicherzustellen, dass sie nicht korrupt sind.

Sie können diese Tests lokal durchführen, zum Beispiel indem Sie Ihre Daten auf ein Programm vom Typ [WAMP](https://www.wampserver.com/en/){.external} importieren. Achten Sie daher darauf, Ihre lokale Lösung so einzurichten, dass die Konfiguration in allen Punkten der unserer [Shared Hosting Server entspricht](https://webhosting-infos.hosting.ovh.net/).

Sie können auch eine **Testversion** Ihrer Webseite erstellen (z.B.: test.meinedomain.tld) in einem anderen Ordner Ihres Webhostings (es ist Ihnen vollkommen möglich, ein Basistemplate zu verwenden).

## Weiterführende Informationen

[Was tun, wenn Ihre WordPress Seite gehackt wurde?](../was_tun_wenn_ihre_wordpress_seite_gehackt_wurde/)

[Was tun, wenn Ihr Hosting aus Sicherheitsgründen deaktiviert wurde?](../sicherheit-hosting-deaktiviert/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, lesen Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community besuchen Sie <https://community.ovh.com/en/>.
