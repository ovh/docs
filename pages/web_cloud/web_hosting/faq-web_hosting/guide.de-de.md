---
title: "FAQ Webhosting"
excerpt: "Hier finden Sie Antworten zu den am häufigsten gestellten Fragen zu den OVHcloud Webhostings"
updated: 2025-08-01
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

**Klicken Sie auf die unten stehenden Fragen, um die Erläuterungen anzuzeigen.**

## Verwaltung Ihres Angebots

/// details | Wie konfiguriere ich mein Webhosting?

Führen Sie die folgenden Schritte aus:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.

Dort können Sie Ihre SSL Zertifikate, die auf Ihrem Webhosting angewendete PHP Version, die CDN Option, Multisites, Datenbanken, etc. verwalten.

> [!success]
>
> Um Ihnen bei der Konfiguration Ihres Webhostings zu helfen, lesen Sie bitte die Abschnitte „*Erste Schritte*“ und „*Konfiguration von Basic, Pro und Performance Webhostings*“ auf [dieser Seite](/products/web-cloud-hosting).

///

/// details | Ich habe das Passwort für das Konto vergessen, in dem sich mein Webhosting befindet. Was kann ich tun?

Wenn Sie Ihre OVHcloud Kundenkennung oder das zugehörige Passwort vergessen haben, folgen Sie diesen Schritten:

1. Gehen Sie auf das [OVHcloud Kundencenter Login Interface](/links/manager).
2. Klicken Sie auf den Link `Login oder Passwort vergessen?`{.action} im Anmeldefenster.
3. Geben Sie Ihre OVHcloud Kundenkennung (Beispiel: **aa00000-ovh**) oder die mit Ihrer OVHcloud Kundenkennung verbundene Kontakt-E-Mail-Adresse an.
4. Klicken Sie anschließend auf die Schaltfläche `Absenden`{.action}.

Der Reset-Vorgang wird dann an Ihre Kontakt-E-Mail-Adresse versandt.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung „[Passwort Ihres OVHcloud Accounts ändern](/pages/account_and_service_management/account_information/manage-ovh-password)“.

///

/// details | Wie verwalte ich das Passwort des FTP-Speicherplatzes meines Webhostings?

Führen Sie die folgenden Schritte aus:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite auf den Tab `FTP - SSH`{.action}.

Dort können Sie das FTP-Passwort Ihres Webhostings ändern.

> [!success]
>
> Weitere Informationen finden Sie in unserer Anleitung „[Webhosting - Passwort eines FTP-Benutzers ändern](/pages/web_cloud/web_hosting/ftp_change_password)“

///

/// details | Wie ändere ich das Passwort meiner Datenbank, die mit meinem Webhosting verbunden ist?

> [!warning]
>
> Wenn Sie das Passwort einer Datenbank ändern, die von einer Ihrer Websites verwendet wird, aktualisieren Sie es ebenfalls in der Konfigurationsdatei der betreffenden Website. Ohne dieses Update wird Ihre Website von ihrer Datenbank separiert und funktioniert nicht mehr.

Führen Sie die folgenden Schritte aus:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite auf den Tab `Datenbanken`{.action}.

Dort können Sie die Passwörter Ihrer Datenbanken ändern, die mit Ihrem Webhosting verbunden sind.

> [!success]
>
> Weitere Informationen finden Sie in unserer Anleitung „[Webhosting - Datenbankpasswort ändern](/pages/web_cloud/web_hosting/sql_change_password)“

///

/// details | Wie ändere ich das Passwort eines E-Mail-Accounts, die mit meinem Webhosting verbunden ist?

Führen Sie die folgenden Schritte aus:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `E-Mails`{.action} (oder auf das Menü `MX Plan`{.action}, wenn Sie die Betaversion des OVHcloud Kundencenters verwenden) und wählen Sie dann die betreffende Domain aus.
3. Klicken Sie auf der angezeigten Seite auf den Tab `E-Mails`{.action}.
4. Klicken Sie in der angezeigten Tabelle auf den Button `...`{.action} rechts neben der betreffenden E-Mail-Adresse und dann auf `Passwort ändern`{.action}.

Dort können Sie das Passwort Ihres E-Mail-Accounts ändern (achten Sie darauf, die im Eingabefenster angezeigten Passwortrichtlinien einzuhalten).

> [!success]
>
> Alle details finden Sie in unserer Anleitung „[Passwort eines E-Mail-Accounts ändern](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)“
>
> Wenn Sie ein E-Mail-Programm verwenden (Outlook, macOS Mail, Thunderbird, etc.), aktualisieren Sie das Passwort für Ihre E-Mail-Adresse, wenn das E-Mail-Programm Sie dazu auffordert, wenn es geöffnet oder synchronisiert wird.
>
> Wenn Sie weitere Fragen zur E-Mail-Lösung *MX Plan* haben, lesen Sie unsere [FAQ - E-Mails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

///

/// details | Wie kann ich meine Website online stellen?

Um Ihre Website online zu stellen, benötigen Sie zunächst Folgendes:

- Eine [Domainname](/links/web/domains), die der Webadresse entspricht, von der aus über einen Webbrowser auf Ihre Website zugegriffen werden kann (Beispiel: *domain.tld*). Dieser Domainname muss auch mit Ihrem Webhosting verbunden sein, um die Website anzeigen zu können.
- Ein [Webhosting](/links/web/hosting), auf dem Sie Ihre Website installieren können.

Im Folgenden sind die wichtigsten Schritte aufgeführt:

1. Definieren Sie Ihr Projekt (fertige Website (CMS), die manuell oder mithilfe der 1-Klick-Module von OVHcloud oder von Ihnen oder einem Dienstleister erstellte Website etc. installiert wird).
2. Stellen Sie die Dateien der Website auf dem FTP-Speicherplatz Ihres Webhostings online.
3. Verknüpfen Sie die Website mit einer Datenbank (falls die Website eine Datenbank verwendet).
4. Wechseln Sie zu Ihrer Website.

> [!success]
>
> Weitere Informationen zum Onlinestellen einer Website auf einem Webhosting finden Sie in unserer detaillierten Anleitung „[Webhosting - Website online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)“.
>
> Wenn Sie sich dafür entscheiden, ein CMS (WordPress, Joomla!, PrestaShop, Drupal) mit unserer Lösung „1-Klick-Module“ zu installieren, lesen Sie unsere detaillierte Anleitung „[Installation Ihrer Website mit 1-Klick-Modulen](/pages/web_cloud/web_hosting/cms_install_1_click_modules)“.
>
> Wenn Ihre Website bereits bei einem anderen Anbieter vorhanden ist und Sie sie zu OVHcloud migrieren möchten, lesen Sie unsere detaillierte Anleitung „[Website und zugehörige Dienste zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)“.
>
> Um Ihnen bei der Konfiguration Ihres Webhostings zu helfen, können Sie [hier alle Anleitungen zu unseren Webhosting-Lösungen finden](/products/web-cloud-hosting).

///

/// details | Wie übertrage ich meine Website, Datenbank, Domain und E-Mails ohne Dienstunterbrechung zu OVHcloud?

Im Folgenden sind die wichtigsten Schritte aufgeführt:

1. Webhosting und E-Mail-Adressen bei OVHcloud bestellen
2. Eine DNS-Zone für Ihre Domain bei OVHcloud erstellen und vorkonfigurieren
3. Wiederherstellung eines vollständigen Backups Ihrer Website
4. Import des Backups Ihrer Website auf Ihr OVHcloud Hosting-Angebot
5. E-Mail-Adressen bei OVHcloud neu erstellen
6. Die OVHcloud E-Mail-Server in der aktiven DNS-Zone Ihrer Domain deklarieren
7. Transfer des Inhalts Ihrer alten E-Mail-Accounts an Ihre neuen Accounts bei OVHcloud
8. E-Mail-Software neu konfigurieren
9. Die aktiven DNS-Server Ihrer Domain durch die DNS-Server von OVHcloud ersetzen
10. Transfer Ihrer Domain zu OVHcloud

> [!success]
>
> Weitere Informationen finden Sie in unserer Anleitung „[Website und zugehörige Dienste zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)“.

///

/// details | Wie kann ich mehrere Websites auf demselben Webhosting hosten?

Wenn Ihr [Webhosting](/links/web/hosting) kompatibel ist, folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite auf den Tab `Multisite`{.action}.

Dort können Sie die auf Ihrem Webhosting als Multisite deklarierten Domains/Subdomains verwalten.

> [!success]
>
> Weitere Informationen finden Sie in unserer Anleitung „[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)“.

///

/// details | Wie zeige ich meine Website mit einer URL in HTTPS an?

Damit Ihre Website über eine HTTPS-URL erreichbar ist (Beispiel: `https://domain.tld`), sind zwei Voraussetzungen erforderlich:

- Sie benötigen ein aktives SSL-Zertifikat für Ihre Domain (oder auf Ihrem Webhosting installiert)
- Im Quellcode Ihrer Website muss diese das Umschreiben der URLs in HTTPS erzwingen.

OVHcloud bietet [mehrere SSL-Zertifikate](/links/web/hosting-options) für Webhostings an.

So aktivieren Sie ein SSL-Zertifikat auf Ihrem Webhosting für Ihre Website:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite und in der Randleiste **Konfiguration** auf den Button `...`{.action} rechts neben **SSL-Zertifikat** und dann auf `SSL-Zertifikat bestellen`{.action}.
4. [Wählen Sie das gewünschte Zertifikat aus der Liste der verfügbaren Zertifikate aus](/pages/web_cloud/web_hosting/ssl_on_webhosting) und fahren Sie fort, bis der Bestellschein abgeschlossen ist.

> [!success]
>
> Weitere Informationen finden Sie in den folgenden Anleitungen:
>
> - [Webhosting - SSL-Zertifikat verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting).
> - [Webhosting - Ein kostenloses SSL-Zertifikat von Let's Encrypt aktivieren](/pages/web_cloud/web_hosting/ssl_letsencrypt).
> - [Webhosting - SSL-Zertifikat für Sectigo DV aktivieren](/pages/web_cloud/web_hosting/ssl_dv).
> - [Webhosting - SSL-Zertifikat für Sectigo EV aktivieren](/pages/web_cloud/web_hosting/ssl_ev).
> - [Webhosting - Benutzerdefiniertes SSL-Zertifikat installieren](/pages/web_cloud/web_hosting/ssl_custom).

Sobald das SSL-Zertifikat Ihrer Wahl installiert und bei OVHcloud eingerichtet ist, überprüfen Sie, dass der Quellcode Ihrer Website die Zugriff-URLs Ihrer Website in HTTPS umschreibt. Sollten Sie diesbezüglich Schwierigkeiten haben, wenden Sie sich an Ihren Webmaster oder einen unserer [Partner](/links/partner).

///

/// details | Wie ändere ich mein Webhosting-Angebot?

Um das Webhosting zu bestellen, das am besten zu Ihren Bedürfnissen passt, erfahren Sie alles zu unseren Angeboten auf [dieser Seite](/links/web/hosting).

[!primary]
>
> Abhängig von Ihrem aktuellen Webhosting werden Ihnen möglicherweise nicht alle Angebote gezeigt. Weitere Informationen hierzu finden Sie in unserer Anleitung „[Webhosting-Angebot skalieren](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)“.

Nachdem Sie Ihre Auswahl getroffen haben, folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite und in der Randleiste **Abo** auf die Schaltfläche `...`{.action} rechts neben `Angebot` und dann auf `Angebot wechseln`{.action}.
4. Wählen Sie anschließend das neue Abonnement und die Dauer aus. Bestätigen Sie die entsprechenden Verträge und klicken Sie auf `Absenden`{.action}.

> [!success]
>
> Weitere Informationen finden Sie in unserer Anleitung „[Webhosting-Angebot skalieren](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)“.

///

/// details | Wie kann ich bei einer Kündigung das mit meinem Webhosting verbundene E-Mail-Angebot beibehalten?

Wenn Sie Ihr Webhosting kündigen oder löschen, wird auch das dazugehörige E-Mail-Angebot gekündigt. Um Ihre E-Mail-Adressen beizubehalten, müssen Sie das E-Mail-Angebot **vor** Kündigung des betreffenden Webhostings trennen.

Führen Sie die folgenden Schritte aus:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite und in der Randleiste **Konfiguration** auf die Schaltfläche `...`{.action} rechts neben dem Text `E-Mail-Adressen` und dann auf `Meine E-Mail-Option abtrennen`{.action}.
4. Befolgen Sie die Anweisungen, um ein unabhängiges E-Mail-Angebot zu bestellen, mit dem Sie Ihre bereits erstellten E-Mail-Accounts beibehalten können.

///

/// details | Wie kann ich bei einer Kündigung eines „Performance“ Webhostings das dazugehörige Angebot „Web Cloud Databases“ beibehalten?

Die Webhosting-Pakete **Performance** enthalten kostenlos aktivierbare Web Cloud Databases.  
Wenn Sie Ihr Webhosting kündigen oder löschen **Performance**, wird auch das eventuell damit verbundene Angebot Web Cloud Databases gekündigt. Um Ihre Web Cloud Databases Lösung zu behalten, müssen Sie diese **vor** Kündigung des Hostings abtrennen.

Führen Sie die folgenden Schritte aus:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite und in der Randleiste **Konfiguration** auf die Schaltfläche `...`{.action} rechts neben `Web Cloud Databases` und dann auf `Abrennen`{.action}.
4. Befolgen Sie die Anweisungen, um einen unabhängigen Web Cloud Databases Dienst zu bestellen, damit Ihre bereits erstellte Lösung für Web Cloud Databases erhalten bleibt.

**Diese Aktion kann nicht rückgängig gemacht werden. Das Angebot Web Cloud Databases wird dann unabhängig von Ihrem Performance Webhosting abgerechnet.**

///

/// details | Wie kann ich den RAM eines Web Cloud Databases Angebots im Zusammenhang mit einem Performance Webhosting erhöhen?

Führen Sie die folgenden Schritte aus:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Web Cloud Databases`{.action} und wählen Sie die betreffende Web Cloud Databases Lösung aus.
3. Klicken Sie auf der angezeigten Seite und in der Randleiste **Allgemeine Informationen** auf den Button `...`{.action} rechts neben `RAM` und dann auf `RAM-Menge ändern`{.action}.
4. Befolgen Sie die Anweisungen, um den gewünschten RAM zu bestellen, und fahren Sie dann mit der Validierung der Bestellung fort.

> [!success]
>
> Wenn nötig, lesen Sie auch den Abschnitt „*Ihr Angebot für Web Cloud Databases ändern*“ unserer Anleitung „[Konfiguration eines Angebots für Web Cloud Databases](/pages/web_cloud/web_cloud_databases/configure-database-server)“.

///

## Diagnose

> [!success]
>
> Wenn Sie eine Fehlfunktion feststellen, die nicht in diesen FAQ aufgeführt ist, lesen Sie den Abschnitt „*Störungsbehebung*“ unserer [Hilfen zu Webhosting-Lösungen](/products/web-cloud-hosting).

/// details | Was kann ich tun, wenn meine Website nicht funktioniert?

Es gibt mehrere Gründe, warum Ihre Website nicht funktioniert.  
Um die Ursache zu ermitteln, überprüfen Sie zunächst, dass keines Ihrer Abonnements erneuert werden muss.

Führen Sie die folgenden Schritte aus:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf der angezeigten Seite oben rechts auf Ihren Namen und wählen Sie dann `Meine Angebote und Dienste`{.action}.

> [!success]
>
> Weitere Informationen finden Sie in unserer Anleitung „[Wie verlängere ich meine OVHcloud-Dienste](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)“.

Sehen Sie sich anschließend die [laufenden Events auf unserer Infrastruktur](https://www.status-ovhcloud.com/) an.

Wenn alle Ihre Dienstleistungen aktiv sind und von keinerlei Störungen oder Wartungsarbeiten betroffen sind, nehmen Sie eine gründlichere Diagnose vor.

> [!success]
>
> Lesen Sie den Abschnitt „*Störungsbehebung*“ unserer [Hilfen zu Webhosting-Lösungen](/products/web-cloud-hosting).

///

/// details | Was tun, wenn die Seite „Seite im Aufbau“ von OVHcloud nach dem Onlinestellen meiner Website weiterhin angezeigt wird?

![construction](/pages/assets/screens/other/browsers/errors/site-en-construction.png){.thumbnail}

Bei der Installation Ihres Webhostings legt OVHcloud diese Seite in Form einer **index.html** Datei im Ordner `www` auf dem FTP-Speicherplatz Ihres Webhostings ab.

Es gibt zwei mögliche Szenarien:

- Wenn Sie ein [1-Klick-Modul](/pages/web_cloud/web_hosting/cms_install_1_click_modules) installieren: Diese Datei wird automatisch von unseren Installationsrobotern gelöscht.
- Wenn Sie Ihre Website manuell installieren, führen Sie die folgenden Schritte aus:
    - [Verbinden Sie sich mit dem FTP-Speicherplatz Ihres Webhostings](/pages/web_cloud/web_hosting/ftp_connection).
    - Gehen Sie nach dem Login im FTP-Speicherplatz in das Verzeichnis `www`.
    - Benennen Sie die Datei **index.html** in **index.html.old** um. Dadurch wird die Seite nach einigen Minuten deaktiviert.

> [!success]
>
> Weitere Informationen finden Sie in den folgenden Anleitungen:
>
> - [Webhosting - Mit FTP verbinden](/pages/web_cloud/web_hosting/ftp_connection)
> - [Webhosting - Passwort eines FTP-Benutzers ändern](/pages/web_cloud/web_hosting/ftp_change_password)
> - [Anleitung - FileZilla mit Ihrem Webhosting verwenden](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)
> - [Anleitung - Cyberduck mit Ihrem Webhosting verwenden](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

///

/// details | Nach der Erstellung wird meine Website mit einer Adresse vom Typ „xxxxx.clusterXXX.hosting.ovh.net“ angezeigt. Was soll ich tun?

![cluster-url](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Ihre Website wurde mit einem [1-Klick-Module](/pages/web_cloud/web_hosting/cms_install_1_click_modules) unter Verwendung der Standardwebadresse Ihres Webhostings „xxxx.clusterXXX.hosting.ovh.net“ bei der Installation erstellt.

In diesem Fall müssen Sie Ihr 1-Klick-Modul entfernen und anschließend neu installieren.

> [!warning]
>
> Die Löschung eines [1-Klick-Moduls](/pages/web_cloud/web_hosting/cms_install_1_click_modules) sowie einer Datenbank ist endgültig. Außerdem werden die **Backups der betreffenden Daten gelöscht**. Bevor Sie Ihre Website löschen, stellen Sie sicher, dass **Sie sie wiederherstellen können**. Wenn Sie sich nicht sicher sind, welche Schritte Sie ausführen sollen, wenden Sie sich an Ihren Webmaster oder einen unserer [Partner](/links/partner).
>
> Lesen Sie bei Bedarf auch diese detaillierten Anleitungen:
>
> - [Webhosting - Wiederherstellung des FTP-Speicherplatzes](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Webhosting - Datenbankinhalte exportieren](/pages/web_cloud/web_hosting/sql_database_export).

**Erst nachdem** Sie alle erforderlichen Backups durchgeführt haben, löschen Sie Ihr [1-Klick-Modul](/pages/web_cloud/web_hosting/cms_install_1_click_modules) mit folgenden Aktionen:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite auf den Tab `1-Klick-Module`{.action}.
4. Klicken Sie in der angezeigten Tabelle auf den Button `...`{.action} rechts in der Zeile des betreffenden 1-Klick-Moduls und dann auf `Modul löschen`{.action}.

Das Löschen des *1-Klick-Module* kann **mehrere Minuten** dauern.

Löschen Sie anschließend die zugehörige Datenbank, indem Sie folgende Aktionen ausführen:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite auf den Tab `Datenbanken`{.action}.
4. Klicken Sie in der angezeigten Tabelle auf die Schaltfläche `...`{.action} rechts in der Zeile der betreffenden Datenbank und dann auf `Datenbank löschen`{.action}.

Das Löschen der zugehörigen Datenbank kann **mehrere Minuten** dauern.

Sobald die Löschung abgeschlossen ist, installieren Sie Ihr *1-Klick-Module* neu. Achten Sie dabei darauf, dass Sie den gewünschten Domainnamen auswählen.

> [!success]
>
> Weitere Informationen finden Sie in unserer Anleitung „[Webhosting - Installation eines 1-Klick-Moduls](/pages/web_cloud/web_hosting/cms_install_1_click_modules)“.

///

/// details | Nach einer Änderung wird meine Website mit einer Webadresse vom Typ „xxxxx.clusterXXX.hosting.ovh.net“ angezeigt. Was soll ich tun?

![cluster-url](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Ihre Website wird mit der Standardwebadresse Ihres Webhostings vom Typ „xxxxx.clusterXXX.hosting.ovh.net“ angezeigt, nachdem Sie Ihr [1-Klick-Modul](/pages/web_cloud/web_hosting/cms_install_1_click_modules) geändert haben.

Wenn Ihre Website nach einer Änderung mit dieser URL angezeigt wird, ist die schnellste Lösung, sie in einen früheren Zustand zurückzuversetzen, in dem sie ordnungsgemäß funktioniert hat.

> [!alert]
>
> Bei der Wiederherstellung eines Webhostings werden **alle darin enthaltenen Websites** wiederhergestellt.
>
> Bei einer Wiederherstellung wird der Inhalt Ihres FTP-Speicherbereichs oder Ihrer Datenbank unwiderruflich durch ein Backup ersetzt. Daten, die **vor dem Start der Wiederherstellung** auf dem FTP-Speicherplatz oder in der wiederherzustellenden Datenbank vorhanden waren, werden überschrieben und gehen unwiderruflich verloren. Stellen Sie bei Bedarf sicher, dass Sie eine Sicherungskopie dieses Inhalts erstellt haben. Wenn Sie sich nicht sicher sind, welche Schritte Sie ausführen sollen, wenden Sie sich an Ihren Webmaster oder einen unserer [Partner](/links/partner).
>
> Lesen Sie bei Bedarf auch diese detaillierten Anleitungen:
>
> - [Webhosting - Wiederherstellung des FTP-Speicherplatzes](/pages/web_cloud/web_hosting/ftp_save_and_backup)
> - [Webhosting - Datenbankinhalte exportieren](/pages/web_cloud/web_hosting/sql_database_export)

Führen Sie die folgenden Schritte aus, um den Quellcode der Website wiederherzustellen:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite auf den Tab `FTP - SSH`{.action}.
4. Klicken Sie auf der neu angezeigten Seite auf die Schaltfläche `Backup wiederherstellen`{.action}.
5. Wählen Sie im angezeigten Fenster das Datum des wiederherzustellenden Backups aus, und fahren Sie mit dem Start der Wiederherstellung fort.

Die Wiederherstellung des FTP-Speicherplatzes kann **mehrere Minuten** dauern.

So stellen Sie ein Backup Ihrer Datenbank wieder her:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite auf den Tab `Datenbanken`{.action}.
4. Klicken Sie in der angezeigten Tabelle auf die Schaltfläche `...`{.action} rechts in der Zeile der betreffenden Datenbank und dann auf `Backup wiederherstellen`{.action}.
5. Wählen Sie auf der neu geöffneten Seite das wiederherzustellende Backup aus (**idealerweise das Backup, das dem Datum entspricht, das Sie für die Wiederherstellung des Quellcodes Ihrer Website ausgewählt haben (siehe oben)**).
6. Wenn Sie das Backup ausgewählt haben, klicken Sie rechts neben dem Backup, das Sie wiederherstellen möchten, auf den Button `...`{.action} und dann auf `Backup wiederherstellen`{.action}.

Die Wiederherstellung eines Datenbank-Backups kann **mehrere Minuten** dauern.

> [!success]
>
> Weitere Informationen finden Sie in den folgenden Anleitungen:
>
> - [Webhosting - Wiederherstellung des FTP-Speicherplatzes](/pages/web_cloud/web_hosting/ftp_save_and_backup)
> - [Backup Ihrer Datenbank wiederherstellen](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

///

/// details | Meine Website leitet Sie zum Login-Interface für Webmail von OVHcloud weiter. Was soll ich tun?

![webmail-login-interface](/pages/assets/screens/website/webmail/webmail-login-interface.png){.thumbnail}

Diese Situation weist auf eine fehlerhafte Konfiguration der Ihrem Domainnamen zugeordneten [DNS-Server](/pages/web_cloud/domains/dns_server_edit) oder [DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) hin.

Der häufigste Fall ist folgender: Sie haben Ihren Domainnamen und Ihr Webhosting getrennt bestellt, sodass diese nicht automatisch über die DNS-Zone Ihrer Domain miteinander verbunden werden.

Um dies zu korrigieren, folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Domainnamen`{.action} und wählen Sie die betreffende Domain aus.
3. Klicken Sie auf der angezeigten Seite auf den Tab `DNS-Server`{.action}.
4. Notieren Sie sich anschließend die Namen der angegebenen DNS-Server und gehen Sie in den Tab `DNS-Zone`{.action} (rechts neben dem Tab `DNS-Server`{.action}).
5. Vergleichen Sie in der angezeigten Tabelle (die die DNS-Zone der Domain darstellt) die `Ziele` der Einträge vom Typ `NS` in der DNS-Zone mit den zuvor abgerufenen DNS-Servernamen. Drei Fälle können auftreten. Klicken Sie auf die Registerkarten unten, um die einzelnen **3** Fälle anzuzeigen.

> [!tabs]
> **Fall 1**
>>
>> Die `Ziele` (DNS-Server) der Einträge vom Typ `NS`, die in der DNS-Zone der Domain **deklariert sind, sind mit den Zielen** identisch, die unter dem Tab `DNS-Server`{.action} abgerufen wurden.
>>
>> In diesem Fall bedeutet dies, dass Ihr Domainname (oder seine Subdomain mit der Endung *www*) auf die IP-Adresse unseres Weiterleitungsservers (213.186.33.5) verweist.
>>
>> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>> 2. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie dann die betreffende Domain aus.
>> 3. Klicken Sie auf der angezeigten Seite auf den Tab `DNS-Zone`{.action}.
>> 4. Geben Sie in der angezeigten Tabelle (die die DNS-Zone Ihrer Domain darstellt) den Eintrag vom Typ `A` an, dessen `Ziel` auf die IP-Adresse `213.186.33.5` festgelegt ist.
>> 5. Klicken Sie rechts in der Zeile auf den Button `...`{.action} und dann auf `Eintrag bearbeiten`{.action}.
>> 6. Ersetzen Sie im angezeigten Fenster im Formular `Ziel` die IP-Adresse `213.186.33.5` durch die IP-Adresse des Webhostings, auf dem sich Ihre Website befindet.
>>
>> > [!success]
>> >
>> > Lesen Sie bei Bedarf auch die folgenden detaillierten Anleitungen:
>> >
>> > - [OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit).
>> > - [Webhosting - Liste der IP-Adressen pro Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
>>
> **Fall 2**
>>
>> Die `Ziele` (DNS-Server) der Einträge vom Typ `NS`, die in der DNS-Zone der Domain **deklariert sind, sind nicht mit den Zielen** identisch, die unter dem Tab `DNS-Server`{.action} abgerufen wurden. Die `Ziele` (DNS-Server) haben jedoch eine der folgenden Formate:
>>
>> - `nsXX.ovh.net` und `dnsXX.ovh.net` **oder** `nsXXX.ovh.net` und `dnsXXX.ovh.net` (wobei jedes `X` eine Ziffer zwischen **0** und **9** bezeichnet);
>> - `nsXX.ovh.ca` und `dnsXX.ovh.ca` **oder** `nsXXX.ovh.ca` und `dnsXXX.ovh.ca` (wobei jedes `X` eine Ziffer zwischen **0** und **9** bezeichnet);
>> - `ns200.anycast.me` und `dns200.anycast.me` (wenn Sie die Option [DNS anycast](/links/web/domains-options) abonniert haben).
>>
>> > [!primary]
>> >
>> > Wenn einer Ihrer DNS-Server, die im Tab `DNS-Server`{.action} deklariert sind, folgende Form hat: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXXXX.ovh.net` oder `vpsXXXXXX.ovh.ca` (wobei `X` eine Ziffer zwischen **0** und **9** ist), gehen Sie zu **Fall 3**.  
Es handelt sich dabei um von OVHcloud bereitgestellte DNS-Servernamen, die es unseren Kunden ermöglichen, ihre DNS-Konfiguration direkt auf ihren eigenen Servern (Dedicated Server, VPS, etc.) zu hosten.
>>
>> In diesem Fall bedeutet dies, dass Ihre Domain nicht die richtigen OVHcloud DNS-Server verwendet, um die Konfiguration der DNS-Zone im Tab `DNS-Zone`{.action} anzuwenden.
>>
>> Um dies zu korrigieren, folgen Sie diesen Schritten:
>>
>> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>> 2. Klicken Sie auf das Menü `Domainnamen`{.action} und wählen Sie die betreffende Domain aus.
>> 3. Klicken Sie auf der angezeigten Seite auf den Tab `DNS-Server`{.action}.
>> 4. Klicken Sie auf der neu geöffneten Seite auf den Button `DNS-Server ändern`{.action}.
>> 5. Wählen Sie auf der angezeigten Seite die Option `Die standardmäßigen DNS von OVHcloud verwenden`{.action} aus und klicken Sie dann auf `Konfiguration anwenden`{.action}.
>>
>> Die Propagation der Aktualisierung der DNS-Server, die auf eine Domain angewendet werden, kann bis zu **48** Stunden dauern.
>>
>> > [!success]
>> >
>> > Weitere Informationen finden Sie in unserer Anleitung „[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)“.
>>
> **Fall 3**
>>
>> Die `Ziele` (DNS-Server) der Einträge vom Typ `NS`, die in der DNS-Zone der Domain **deklariert sind, sind nicht mit den Zielen** identisch, die unter dem Tab `DNS-Server`{.action} abgerufen wurden. Außerdem haben die Namen der DNS-Server, die Sie aus dem Tab `DNS-Server`{.action} abrufen, keine der in **Fall 2** beschriebenen Formen, mit Ausnahme der folgenden: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXXXX.ovh.net` oder `vpsXXXXXX.ovh.ca` (wobei `X` eine Ziffer zwischen **0** und **9** darstellt).
>>
>> In diesem Fall bedeutet dies, dass die auf Ihre Domain angewendete aktive DNS-Zone nicht direkt von OVHcloud verwaltet wird. Kontaktieren Sie Ihren Webmaster, Domain-Anbieter, DNS-Anbieter oder einen unserer [Partner](/links/partner).

///

/// details | Was kann ich tun, wenn auf meiner Website der Fehler „Seite wird nicht korrekt umgeleitet“ angezeigt wird?

![the-page-isnt-redirecting-properly](/pages/assets/screens/other/browsers/errors/the-page-isnt-redirecting-properly.png){.thumbnail}

In diesem Fall ist es am schnellsten, das System in einen früheren Zustand zurückzuversetzen, in dem es einwandfrei funktionierte.

> [!alert]
>
> Bei der Wiederherstellung eines Webhostings werden **alle darin enthaltenen Websites** wiederhergestellt.
>
> Bei einer Wiederherstellung wird der Inhalt Ihres FTP-Speicherbereichs oder Ihrer Datenbank unwiderruflich durch ein Backup ersetzt. Daten, die **vor dem Start der Wiederherstellung** auf dem FTP-Speicherplatz oder in der wiederherzustellenden Datenbank vorhanden waren, werden überschrieben und gehen unwiderruflich verloren. Stellen Sie daher sicher, dass Sie zuvor ein Backup dieses Inhalts erstellt haben. Wenn Sie sich nicht sicher sind, welche Schritte Sie ausführen sollen, wenden Sie sich an Ihren Webmaster oder einen unserer [Partner](/links/partner).
>
> Weitere Informationen finden Sie in den folgenden detaillierten Anleitungen:
>
> - [Webhosting - Wiederherstellung des FTP-Speicherplatzes](/pages/web_cloud/web_hosting/ftp_save_and_backup)
> - [Webhosting - Datenbankinhalte exportieren](/pages/web_cloud/web_hosting/sql_database_export)

Führen Sie die folgenden Schritte aus, um den Quellcode der Website wiederherzustellen:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite auf den Tab `FTP - SSH`{.action}.
4. Klicken Sie auf der neu angezeigten Seite auf die Schaltfläche `Backup wiederherstellen`{.action}.
5. Wählen Sie im angezeigten Fenster das Datum des wiederherzustellenden Backups aus, und fahren Sie mit dem Start der Wiederherstellung fort.

Die Wiederherstellung des FTP-Speicherplatzes kann **mehrere Minuten** dauern.

So stellen Sie ein Backup Ihrer Datenbank wieder her:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf der angezeigten Seite auf den Tab `Datenbanken`{.action}.
4. Klicken Sie in der angezeigten Tabelle auf die Schaltfläche `...`{.action} rechts in der Zeile der betreffenden Datenbank und dann auf `Backup wiederherstellen`{.action}.
5. Wählen Sie auf der neu geöffneten Seite das wiederherzustellende Backup aus (**idealerweise das Backup, das dem Datum entspricht, das Sie für die Wiederherstellung des Quellcodes Ihrer Website ausgewählt haben (siehe oben)**).
6. Wenn Sie das Backup ausgewählt haben, klicken Sie rechts neben dem Backup, das Sie wiederherstellen möchten, auf den Button `...`{.action} und dann auf `Backup wiederherstellen`{.action}.

Die Wiederherstellung eines Datenbank-Backups kann **mehrere Minuten** dauern.

> [!success]
>
> Weitere Informationen finden Sie in den folgenden Anleitungen:
>
> - [Webhosting - Wiederherstellung des FTP-Speicherplatzes](/pages/web_cloud/web_hosting/ftp_save_and_backup)
> - [Backup Ihrer Datenbank wiederherstellen](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

Wenn die Wiederherstellungen es nicht erlauben, den Zugriff auf Ihre Website wiederherzustellen, wenden Sie sich an Ihren Webmaster oder einen unserer [Partner](/links/partner).

///

/// details | Was kann ich tun, wenn auf meiner Website der Fehler „503 error backend fetch failed (Varnish cache)“ angezeigt wird?

![503_varnish](/pages/assets/screens/other/browsers/errors/http-503-backend-varnish.png){.thumbnail}

Wenn Sie die [CDN-Option](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) Ihres Webhostings aktiviert haben, deaktivieren Sie den *Wartungsmodus* auf Ihrer WordPress- oder PrestaShop-Website.

Wenn Sie diese Option nicht aktiviert oder den *Maintenance*-Modus nicht verwendet haben, wenden Sie sich an Ihren Webmaster oder einen unserer [Partner](/links/partner).

Dieser Fehler kann auch auftreten, wenn eine HTTP-Anfrage auf Ihrer Website zu *timeout* führt.

> [!success]
>
> Lesen Sie bei Bedarf auch diese detaillierten Anleitungen:
>
> - [Meine Website mithilfe des CDN beschleunigen](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)
> - [Die häufigsten Fehler im Zusammenhang mit 1-Klick-Modulen beheben](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

///

/// details | Was kann ich tun, wenn auf meiner Website die Fehlermeldung „Your request has been blocked“ angezeigt wird?

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

Die Seite „Your request has been blocked“ kann aus verschiedenen Gründen angezeigt werden (nicht abschließende Liste):

- Die Anfrage wird über einen nicht aktualisierten Internetbrowser (Firefox, Chrome, Safari, Edge etc.) durchgeführt.
- Eine sehr große Zahl von Anfragen wird innerhalb einer äußerst kurzen Frist ausgeführt.
- Die Anfrage versucht, nicht autorisierte Aktionen auf der Shared Hosting Infrastruktur durchzuführen, auf der sich Ihr Webhosting befindet.

In diesem Fall sind mehrere Aktionen erforderlich:

- Stellen Sie sicher, dass Ihr Internetbrowser auf dem neuesten Stand ist.
- Rufen Sie die aufgerufene URL (zum Beispiel: `https://www.domain.tld`) sowie alle Informationen auf der Seite „Your request has been blocked“ (`IP address`, `Date` und `Request ID`) ab.
- Übermitteln Sie die wiederhergestellten Elemente an den Support, indem Sie ein [Support-Ticket](https://help.ovhcloud.com/csm?id=csm_get_help) erstellen.

Wenn Sie sich nicht sicher sind, welche Schritte Sie ausführen sollen, wenden Sie sich an Ihren Webmaster oder einen unserer [Partner](/links/partner).

> [!success]
>
> Lesen Sie auch unsere detaillierte Anleitung: [Was tun, wenn die Meldung „Your request has been blocked“ angezeigt wird?](/pages/web_cloud/web_hosting/diagnostic_request_blocked).

///

/// details | Was kann ich tun, wenn auf meiner Website die Fehlermeldung „Your IP has been banned“ angezeigt wird?

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

Die Seite „Your IP has been banned“ kann aus verschiedenen Gründen angezeigt werden (nicht abschließende Liste):

- Von derselben IP-Adresse aus werden sehr viele Anfragen innerhalb eines kurzen Zeitrahmens gesendet.
- Anfragen von der betreffenden IP-Adresse aus sind verdächtig.

In diesem Fall sind mehrere Aktionen erforderlich:

- Rufen Sie die aufgerufene URL (zum Beispiel: `https://www.domain.tld`) sowie alle Informationen auf der Seite „Your IP has been banned“ (`IP address`, `Date` und `Request ID`) ab.
- Übermitteln Sie die wiederhergestellten Elemente an den Support, indem Sie ein [Support-Ticket](https://help.ovhcloud.com/csm?id=csm_get_help) erstellen.

Wenn Sie sich nicht sicher sind, welche Schritte Sie ausführen sollen, wenden Sie sich an Ihren Webmaster oder einen unserer [Partner](/links/partner).

> [!success]
>
> Lesen Sie auch unsere detaillierte Anleitung: [Was tun, wenn die Meldung „Your IP has been banned“ angezeigt wird?](/pages/web_cloud/web_hosting/diagnostic_ip_banned).

///

/// details | Ich habe eine Domain mit Sonderzeichen bestellt, die in meinem Kundencenter auf ungewöhnliche Weise geschrieben wird. Was soll ich tun?

![idn-notation](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/idn-notation.png){.thumbnail}

Sie müssen in dieser Situation nichts unternehmen. Selbst wenn Ihre Domain in Ihrem Kundencenter mit [internationaler Notation (IDN)](https://de.wikipedia.org/wiki/Internationalisierter_Domainname) angezeigt wird, funktioniert sie und wird andernorts normal angezeigt. Die Webadresse Ihrer Website wird wie gewünscht angezeigt. Ihre E-Mail-Adressen werden auch bei Ihren Kontakten wie gewünscht angezeigt.

> [!alert]
>
> Es wird nicht empfohlen, eine E-Mail-Adresse mit einem IDN-Domainnamen (Internationalized Domain Name) von einem E-Mail-Client (Outlook, macOS Mail etc.) aus zu verwenden. Dies liegt daran, dass einige E-Mail-Clients Domainnamen nicht mit Akzentzeichen interpretieren, was die Übertragung von E-Mails verhindert. Ein Absender, der Ihnen eine E-Mail sendet, erhält dann eine automatische Nachricht, dass Ihre E-Mail-Adresse nicht existiert.
>
> **Es wird empfohlen, zusätzlich zu Ihrem Domainnamen mit Akzent den gleichen Domainnamen ohne Akzente zu reservieren, um Inkompatibilitäten beim E-Mail-Verkehr zu vermeiden.**
>

///

## Weiterführende Informationen <a name=“go-further“></a>

[FAQ - Webhosting E-Mails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
