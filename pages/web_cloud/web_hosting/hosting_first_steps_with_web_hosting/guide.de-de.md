---
title: "Webhosting - Schnellstart-Anleitung"
excerpt: "Erfahren Sie hier, wie Sie auf einem Webhosting eine neue Website mithilfe eines 1-Klick-Moduls online stellen und personalisierte E-Mail-Adressen mit Ihrem Domainnamen verwenden"
updated: 2025-04-07
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

## Ziel

Sie möchten eine Website für Ihr Unternehmen oder einen persönlichen Blog erstellen? Sie benötigen einen Onlineshop, um Ihre Produkte online zu verkaufen? In dieser Anleitung für die ersten Schritte mit OVHcloud Webhosting werden die wichtigsten Schritte zur Konfiguration beschrieben. Hier finden Sie auch Anleitungen zum Erstellen von professionellen E-Mail-Adressen, die mit Ihrer Domain verbunden sind. So können Sie Ihr Projekt einfach und schnell online stellen und effizient mit Ihrem Publikum kommunizieren.

> [!primary]
>
> - Sie möchten eine bestehende Website zu einem anderen Hosting-Anbieter migrieren? Ziehen Sie unsere spezielle Anleitung zu Rate: [Migration Ihrer Website und zugehörigen Dienste zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).
> - Sie möchten nur eine einfache Homepage für Ihr Business? Lesen Sie unsere Anleitung: [Webhosting - Kostenloses Hosting 100M aktivieren](/pages/web_cloud/web_hosting/activate_start10m).

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting) mit mindestens einer verfügbaren Datenbank (mit Ausnahme des Kostenloses Hosting 100M Angebots).
- Sie haben die E-Mail zur Installation Ihres Webhostings erhalten.
- Sie haben einen [Domainnamen](/links/web/domains) und eine zugehörige DNS-Zone bei OVHcloud.
- Alle Dienste (Webhosting, Domainnamen, DNS-Zone) müssen von einem einzigen OVHcloud Account aus erreichbar sein.
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager) eingeloggt und befinden sich im Bereich `Web Cloud`{.action}.

## In der praktischen Anwendung

### 1 - Verbinden Sie Ihre Domain mit Ihrem Webhosting <a name="part-1"></a>

> [!success]
>
> Wenn Sie Ihren Domainnamen und Ihr Webhosting zusammen abonniert haben, sind diese beiden Dienste bereits verbunden. Fahren Sie mit [Teil 2](#part-2) dieser Anleitung fort.

1. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
2. Wählen Sie den Tab `Multisite`{.action}.
3. Klicken Sie auf den Button `Aktionen`{.action} oberhalb der Tabelle, in der die bereits für das Webhosting deklarierten Domainnamen aufgeführt sind. Klicken Sie dann auf `Domain oder Subdomain hinzufügen`{.action}.
4. Aktivieren Sie im angezeigten Fenster die angeforderten Elemente, und geben Sie sie ein, bis sie validiert wurden.

/// details | Klicken Sie hier für weitere Informationen.

Lesen Sie unsere detaillierten Anleitungen:

- [Webhosting - Mehrere Websites auf einem Webhosting hosten](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Webhosting - Bereits zugewiesenen Domainnamen bearbeiten](/pages/web_cloud/web_hosting/multisites_modify_domain)

///

### 2 - Installieren Sie ein 1-Klick-Modul für Ihre Website <a name="part-2"></a>

Für Webhostings bietet OVHcloud die kostenlose Installation der CMS WordPress, Joomla!, PrestaShop und Drupal über der Option „1-Klick-Module“ an.

1. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
2. Wählen Sie den Tab `1-Klick-Module`{.action}.
3. Klicken Sie auf die Schaltfläche `Modul hinzufügen`{.action}.
4. Wählen Sie im angezeigten Fenster das CMS aus, das Sie installieren möchten. Wählen Sie dann die Domain aus, auf der das Modul installiert werden soll, indem Sie den gewünschten Domainnamen **ohne** "www" auswählen (Beispiel: `domain.tld` und nicht `www.domain.tld`) und klicken Sie dann direkt auf `Installieren`{.action}.

/// details | Klicken Sie hier für weitere Informationen.

Lesen Sie unsere detaillierten Anleitungen:

- [Installation Ihrer Website mit einem 1-Klick-Modul (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)
- [Wie kann ich mein 1-Klick-Modul verwalten?](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

///

### 3 - Aktivieren Sie die in Ihrem Webhosting enthaltenen E-Mail-Adressen <a name="part-3"></a>

> [!success]
>
> Wenn Sie Ihren Domainnamen und Ihr Webhosting zusammen bestellt haben, sind die im Webhosting enthaltenen E-Mail-Adressen bereits mit Ihrem Domainnamen verbunden. Gehen Sie dann zu [Teil 4](#part-4) dieser Anleitung.

1. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
2. Klicken Sie in der Seitenleiste **Konfiguration** auf den Button `...`{.action} rechts neben `E-Mail-Adressen`{.action} und dann auf `Mein E-Mail-Angebot aktivieren`{.action}. Wählen Sie auf der neu angezeigten Seite im Bereich `(1)` die betreffende Domain aus und fahren Sie mit der Aktivierung der E-Mail-Adressen fort.

/// details | Klicken Sie hier für weitere Informationen.

Lesen Sie unsere detaillierte Anleitung „[Webhosting - Inklusiv-E-Mail-Adressen aktivieren](/pages/web_cloud/web_hosting/activate-email-hosting)“.

///

### 4 - Erstellen Sie eine personalisierte E-Mail-Adresse mit Ihrem Domainnamen <a name="part-4"></a>

1. Klicken Sie auf das Menü `E-Mails`{.action} (oder `MX Plan`{.action}, wenn Sie die neue Version des OVHcloud Kundencenters verwenden) und wählen Sie die betreffende Domain aus.
2. Klicken Sie auf den Tab `E-Mails`{.action}.
3. Klicken Sie auf der neu angezeigten Seite auf die Schaltfläche `Eine E-Mail-Adresse erstellen`{.action}.
4. Geben Sie im angezeigten Fenster die angeforderten Daten ein, bis sie validiert wurden.

Wiederholen Sie diesen Vorgang für jede E-Mail-Adresse, die Sie erstellen möchten (im Rahmen Ihres Webhosting Angebots).

/// details | Klicken Sie hier für weitere Informationen.

Lesen Sie unsere detaillierte Anleitung „[E-Mail-Adresse erstellen](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)“.

///

### 5 - Zusätzliche Optionen für Ihr Webhosting <a name="part-5"></a>

Ihr Webhosting ist nicht auf die Installation eines 1-Klick-Moduls beschränkt. Sie können selbst oder von einem Webentwickler erstellte Websites hosten (Blog, CMS, Webshop, etc.). Wenn Sie mehr über die Möglichkeiten Ihres Webhostings erfahren möchten, lesen Sie unsere ausführlichere Anleitung „[Erstellen einer Website - Realisieren Sie Ihr Projekt in 5 Schritten](/pages/web_cloud/web_hosting/website-project)“.

## Weiterführende Informationen

Hier finden Sie eine Auswahl unserer Anleitungen, in denen die wichtigsten Funktionen unserer Webhostings beschrieben werden:

- [Webhosting - SSL-Zertifikat verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting).
- [Website mithilfe von CDN beschleunigen](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).
- [Webhosting - Umgebung, PHP-Version, “.ovhconfig“](/pages/web_cloud/web_hosting/configure_your_web_hosting).
- [Webhosting - Statistiken und Logs einer Website einsehen](/pages/web_cloud/web_hosting/logs_and_statistics).
- [Verfolgen und verwalten Sie die automatischen E-Mails Ihres Webhostings](/pages/web_cloud/web_hosting/mail_function_script_records).
- [Wie kann ich eine Website in einem bestimmten Land geolokalisieren?](/pages/web_cloud/web_hosting/multisites_geolocation).
- [Application Firewall aktivieren](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
- [Konfigurieren und verwenden von Git mit Ihrem OVHcloud Webhosting](/pages/web_cloud/web_hosting/git_integration_webhosting).
- [Mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection).
- [Automatisierte Tasks (CRON) auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/cron_tasks).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.