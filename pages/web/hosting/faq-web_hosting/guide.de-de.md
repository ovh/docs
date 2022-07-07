---
title: FAQ Web Hosting
excerpt: Hier finden Sie die Antworten zu den am häufigsten gestellten Fragen rund um OVHcloud Webhostings
slug: webhosting-faq
section: Erste Schritte
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 07.04.2022**

## Verwaltung Ihres Angebots

### Wie konfiguriere ich mein Webhosting?

Um Ihr Webhosting zu konfigurieren, loggen Sie sich zunächst in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Im Bereich `Hosting-Pakete` können Sie unter anderem Ihre SSL Zertifikate, die PHP Version, die CDN Option, die Multisite, die Datenbanken usw. verwalten.

**Tipps und Tricks**: Um Ihnen bei der Konfiguration Ihres Hostings zu helfen, lesen Sie die Rubrik **Erste Schritte**, die Sie [hier](https://docs.ovh.com/de/hosting/) finden.

### Wie verwalte ich meine Passwörter?

Um Ihre Passwörter zu verwalten, loggen Sie sich zunächst in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Sollten Sie Ihre Kennung oder Ihr Passwort vergessen haben, klicken Sie unter dem Login-Fenster auf `Login oder Passwort vergessen`{.action}. Ihnen wird eine E-Mail mit der Vorgehensweise zum Zurücksetzen gesendet.

Sie können auch die Anleitung [Das Passwort Ihres Kunden-Accounts anlegen und verwalten](https://docs.ovh.com/de/customer/Passwort-verwalten/) lesen.

Wenn Sie in Ihrem Kundencenter eingeloggt sind:

- Um das Passwort Ihres FTP-Bereichs zu ändern, folgen Sie den Anweisungen in dieser [Anleitung](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/).
- Um das Passwort Ihrer Datenbank zu ändern, folgen Sie den Anweisungen in dieser [Anleitung](https://docs.ovh.com/de/hosting/datenbank-passwort-aendern/).
- Um das Passwort Ihrer MX Plan E-Mail-Adresse zu ändern, folgen Sie den Anweisungen in dieser [Anleitung](https://docs.ovh.com/de/emails/passwort-e-mail-adresse-aendern/).

### Wie kann ich meine Website online stellen? 

Um Ihre Website online zu stellen benötigen Sie einen [Domainnamen](https://www.ovhcloud.com/de/domains/), der der Webadresse entspricht, über die Ihre Website erreichbar ist (Beispiel: *meindomain.com*). Sie benötigen auch ein [Hosting](https://www.ovhcloud.com/de/web-hosting/), auf dem Ihre Website installiert werden kann.

Folgen Sie den für die Erstellung Ihrer Website notwendigen Schritten auf [dieser Seite](https://www.ovhcloud.com/de/web-hosting/uc-website/) und folgen Sie dann den Anweisungen in der Anleitung [Eine Website auf Ihrem Webhosting online stellen](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/).

**Tipps und Tricks**: Um Ihnen bei der Erstellung Ihrer Website zu helfen, bietet Ihnen OVHcloud die Installation einer Software zur Erstellung von Webseiten (WordPress, Prestashop, Joomla und Drupal) auf Ihrem Hosting. Die Funktion [1 Klick-Module](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/) bietet Ihnen die Möglichkeit.

### Wie überträgt man eine Website und E-Mails auf die OVHcloud Server? 

Lesen Sie die Anleitung [Migration Ihrer Website und E-Mails zu OVHcloud](https://docs.ovh.com/de/hosting/migration-ihrer-website-zu-ovh/).

### Wie kann ich mehrere Websites auf demselben Webhosting hosten?

Lesen Sie die Anleitung [Mehrere Websites auf einem Webhosting](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/) einrichten.

### Wie kann ich die E-Mail-Accounts meines Webhosting bei einer Kündigung beibehalten?

Wenn Sie Ihr Webhosting kündigen oder löschen, wird auch der inbegriffene E-Mail-Dienst gekündigt. Um Ihre E-Mail-Accounts zu behalten, müssen Sie den E-Mail-Dienst vor der Kündigung des Hostings abtrennen.<br>

Gehen Sie hierzu auf den Tab `Allgemeine Informationen`{.action} Ihres Hostings. Im Bereich `Konfiguration`, klicken Sie auf `...`{.action} rechts neben `E-Mail-Adressen`. Klicken Sie auf `Meine E-Mail-Option abtrennen`{.action} und folgen Sie den Anweisungen, um ein unabhängiges E-Mail-Angebot zu bestellen, mit dem Sie Ihre bereits erstellten E-Mail-Adressen behalten können.

## Diagnose

> [!warning]
>
> Falls Sie eine nicht in dieser FAQ aufgeführte Unregelmäßigkeit feststellen, beachten Sie die Hilfen der Kategorie **Diagnose** in unserer [Dokumentation](https://docs.ovh.com/de/hosting/).
>

### Was tun, wenn mein Webhosting nicht korrekt funktioniert? 

Es kann verschiedene Gründe geben, warum Ihre Website nicht wie erwartet funktioniert. Um die Ursache zu ermitteln, stellen Sie zunächst sicher, dass **keiner Ihrer Dienste verlängert werden muss**, indem Sie sich in Ihrem [OVHcloud-Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) einloggen.

Überprüfen Sie dann die [aktuellen Vorgänge auf unserer Infrastruktur](https://www.status-ovhcloud.com/). Wenn alle Ihre Dienste aktiv sind und von keinerlei Störungen oder Wartungsarbeiten betroffen sind, empfehlen wir Ihnen eine genauere Diagnose.

### Was kann ich tun, wenn nach dem Online-Stellen meiner Website die Seite “Under construction“ von OVHcloud weiterhin angezeigt wird?

![site_en_construction](images/site_en_construction.png){.thumbnail}

Bei der Installation Ihres Webhostings richtet OVHcloud diese Seite in Form einer **index.html** Datei ein, die im Wurzelverzeichnis `www` Ihres FTP-Servers enthalten ist.

Diese Datei wird bei der Erstellung Ihres [1-Klick-Moduls](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/) automatisch deaktiviert.

Wenn Sie sich [für die manuelle Installation Ihrer Website entschieden](https://docs.ovh.com/de/hosting/webhosting_manuelle_installation_eines_cms_systems/) haben, loggen Sie sich in Ihren [FTP-Bereich](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) ein, um die Datei zu **index.html.old** umzubenennen.

### Was ist zu tun, wenn meine Website unter einer Webadresse vom Typ “xxxxx.cluster0xx.hosting.ovh.net“ angezeigt wird?

![url-cluster](images/url-cluster.png){.thumbnail}

Zwei Szenarien sind möglich. Entweder wurde Ihre Website mit dieser Adresse erstellt oder der Zustand ist nach einer Änderung aufgetreten.

#### Szenario 1: Ihre Website wurde mit einer Adresse vom Typ “xxxxx.cluster0xx.hosting.ovh.net“ erstellt

> [!warning]
>
> Die Löschung einer Datenbank wie eines 1-Klick-Moduls ist endgültig. Sie führt auch zur **Löschung der Backups** der betreffenden Daten. Bevor Sie Ihre Website auf dem OVHcloud-Hosting löschen, **stellen Sie sicher, dass Sie sie auf die gleiche Weise neu erstellen können**. Wenn Sie sich nicht sicher sind, welche Änderungen notwendig sind, kontaktieren Sie bitte Ihren Webmaster oder einen unserer [Partner](https://partner.ovhcloud.com/de/directory/).
>

Im ersten Fall löschen Sie Ihr Modul nach Durchführung aller notwendigen Backups aus dem Bereich `Hosting-Pakete` in Ihrem OVHcloud Kundencenter:

![delete_a_module](images/delete_a_module.png){.thumbnail}

Löschen Sie dann die Datenbank im Tab desselben Namens ebenfalls im Bereich `Hosting-Pakete`:

![delete_a_database](images/delete_a_database.png){.thumbnail}
 
Starten Sie schließlich die Installation auf der gewünschten Domain unter Verwendung der [1-Klick-Modul-Funktion](https://docs.ovh.com/de/hosting/1-click-module-management/) neu.

#### Szenario 2: Ihre Website wird nach einer Änderung mit einer Webadresse vom Typ “xxxxx.cluster0xx.hosting.ovh.net“ angezeigt

Sollte Ihre Website nach einem Eingriff mit dieser URL angezeigt werden, setzen Sie sie in ihren vorherigen Zustand zurück.

> [!alert]
>
> Die Wiederherstellung Ihres OVHcloud Hostings zieht die Wiederherstellung **aller darin enthaltenen Websites** nach sich.
>
> Bei einer Wiederherstellung wird der Inhalt Ihres FTP-Speicherplatzes oder der Datenbank durch ein Backup ersetzt. Sie können dann die Daten auf dem FTP-Server oder die Daten der Datenbank von vor der Wiederherstellung nicht mehr abrufen.
>

Um den Quellcode Ihrer Webseite wiederherzustellen, lesen Sie unsere Anleitung [Den Speicherplatz Ihres Webhostings wiederherstellen](https://docs.ovh.com/de/hosting/webhosting-speicherplatz-wiederherstellen/).

Wenn Ihre Webseite eine Datenbank enthält, lesen Sie unsere Anleitung [Backup in eine Webhosting-Datenbank importieren](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/#backup-uber-das-kundencenter-wiederherstellen).

### Was kann ich tun, wenn meine Website auf das OVHcloud Webmail umgeleitet wird?

![webmail](images/webmail.png){.thumbnail}

Diese Anomalie ist Folge einer fehlerhaften Konfiguration auf der Ebene der [DNS-Server](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/) oder der [DNS Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/), die Ihrer Domain zugewiesen sind.

Der häufigste Fall ist: Domainname und Hosting wurden getrennt bestellt. Sie sind also nicht über die DNS Zone untereinander verbunden.

Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Bereich `Domainnamen`{.action}. Klicken Sie auf die betreffende Domain und dann auf den Tab `DNS-Server`{.action}.

Notieren Sie sich die angegebenen DNS Server und gehen Sie dann auf den Tab `DNS-Zone`{.action}.

Vergleichen Sie die **Ziele** der `NS`-Einträge im Tab `DNS-Zone`{.action} mit den **DNS-Servern** im Tab desselben Namens:

- Wenn die Elemente identisch sind, ersetzen Sie das Ziel `213.186.33.5` durch den Vierzahlencode im Tab `Allgemeine Informationen` unter der Rubrik `IPv4` (weitere Informationen zu den durchzuführenden Aktionen finden Sie in [dieser Anleitung](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/#in-der-praktischen-anwendung)).

- Wenn die Elemente nicht identisch sind, aber die im Tab desselben Namens aufgeführten `DNS-Server` in [dieser Liste](https://docs.ovh.com/de/hosting/verzeichnis-der-ip-adressen-web-hosting-cluster/) aufgeführt sind, setzen Sie die Anweisungen in [dieser Anleitung](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/#dns-server-zurucksetzen) fort.

- Wenn die Elemente nicht identisch sind und die `DNS-Server` im Tab desselben Namens nicht in [dieser Liste](https://docs.ovh.com/de/hosting/verzeichnis-der-ip-adressen-web-hosting-cluster/) aufgeführt sind, kontaktieren Sie Ihren Webmaster oder suchen Sie einen spezialisierten Dienstleister auf der [Seite der OVHcloud-Partner](https://partner.ovhcloud.com/de/directory/).

### Was tun, wenn meine Website einen Fehler “Die Seite leitet sich nicht richtig um“ zeigt?

![too_many_redirect](images/too_many_redirect.png){.thumbnail}

> [!alert]
>
> Die Wiederherstellung Ihres OVHcloud Hostings zieht die Wiederherstellung aller darin enthaltenen Websites nach sich.
>
> Bei einer Wiederherstellung wird der Inhalt Ihres FTP-Speicherplatzes oder der Datenbank durch ein Backup ersetzt. Sie können die Daten auf dem FTP-Server oder die Daten der Datenbank nicht unmittelbar vor der Wiederherstellung abrufen.
>

Stellen Sie Ihre Website in ihrem vorherigen Zustand wieder her:

- Um den Quellcode Ihrer Website wiederherzustellen, lesen Sie unsere Anleitung [Den Speicherplatz Ihres Webhostings wiederherstellen](https://docs.ovh.com/de/hosting/webhosting-speicherplatz-wiederherstellen/);

- Wenn Ihre Website eine Datenbank enthält, lesen Sie unsere Anleitung [Backup Ihrer Datenbank wiederherstellen](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/#backup-uber-das-kundencenter-wiederherstellen).

Wenn Sie über die Wiederherstellungen den Zugang zu Ihrer Webseite nicht wiederherstellen können, kontaktieren Sie Ihren Webmaster oder suchen Sie einen spezialisierten Dienstleister auf der [Seite der OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

### Was soll ich tun, wenn meine Website einen Fehler “503 error Backend fetch failed (Varnish cache)“ anzeigt?

![503_varnish](images/503_varnish.png){.thumbnail}

Wenn Sie die [CDN Option](https://docs.ovh.com/de/hosting/verwendung_des_geocache_boosters_auf_einem_webhosting/) Ihres Hostings aktiviert haben, deaktivieren Sie den *Wartungsmodus* für Ihr WordPress oder Prestashop.

Wenn Sie diese Option nicht aktiviert oder den *Wartungsmodus* verwendet haben, kontaktieren Sie Ihren Webmaster oder suchen Sie einen spezialisierten Dienstleister auf der Seite der [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

### Was soll ich tun, wenn meine Website einen Fehler “Your request has been blocked“ zeigt?

![your_request_has_been_blocked](images/your_request_has_been_blocked.png){.thumbnail}

Diese Nachricht zeigt an, dass die Art der HTTP-Anfrage, die Sie auf Ihrer Seite durchführen möchten, für eine begrenzte Zeit verboten ist. Überprüfen Sie in diesem Fall die [Logs Ihrer Website](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/), um herauszufinden, welche Anfragen zu dieser Sperrung geführt haben.

Kontaktieren Sie Ihren Webmaster oder einen [unserer Partner](https://partner.ovhcloud.com/de/directory/), um Ihnen dabei zu helfen.

### Was soll ich tun, wenn meine Website einen Fehler “Your IP has been banned“ zeigt?

![your_ip_has_been_blocked](images/your_ip_has_been_blocked.png){.thumbnail}

Diese Nachricht zeigt an, dass die IP-Adresse, die Sie verwenden, um sich mit Ihrer Seite zu verbinden, für eine begrenzte Zeit gesperrt ist. 

In diesem Fall überprüfen Sie [die Logs](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/) Ihrer Website, um festzustellen, welche Anfragen zu dieser Sperrung geführt haben.<br>
Überprüfen Sie außerdem, dass Ihr Rechner nicht mit einem Virus infiziert ist.<br>
Kontaktieren Sie einen [unserer Partner](https://partner.ovhcloud.com/de/directory/), um den Code Ihrer Website zu überprüfen.

### Ich habe eine Domain mit Sonderzeichen bestellt, die in meinem Kundencenter auf ungewöhnliche Weise geschrieben wird. Was soll ich tun?

![notation_idn](images/notation_idn.png){.thumbnail}

Sie müssen in dieser Situation nichts unternehmen. Selbst wenn Ihre Domain in Ihrem Kundencenter mit [internationaler Notation (IDN)](https://de.wikipedia.org/wiki/Internationalisierter_Domainname){.external} angezeigt wird, funktioniert sie und wird andernorts vollkommen normal angezeigt. Die Webadresse Ihrer Website wird wie von Ihnen gewünscht angezeigt. Ihre E-Mail-Adressen werden auch bei Ihren Kontakten wie gewünscht angezeigt.

> [!warning]
>
> Die Verwendung einer E-Mail-Adresse mit einer IDN Domain in einem E-Mail-Programm (Outlook, macOS Mail...) wird nicht empfohlen und kann zu Inkompatibilitäten führen.
>

## Weiterführende Informationen <a name=“gofurther“></a>

[FAQ - Webhosting E-Mails](https://docs.ovh.com/de/emails/e-mails-faq/)

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/) einsehen.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
